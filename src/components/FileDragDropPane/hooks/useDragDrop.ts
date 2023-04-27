import { DragEventHandler, useMemo } from "react";

type DragDropHook = (param: {
  setDragging(dragging: boolean): void;
  onDropFile(file: File): void;
}) => {
  onDragIn: DragEventHandler;
  onDragOut: DragEventHandler;
  onDragOver: DragEventHandler;
  onDrop: DragEventHandler;
};

export const useDragDrop: DragDropHook = ({ setDragging, onDropFile }) => {
  return useMemo(
    () => ({
      onDragIn: defaultProcess,
      onDragOut(e) {
        defaultProcess(e);
        setDragging(false);
      },
      onDragOver(e) {
        defaultProcess(e);
        if (e.dataTransfer!.files) setDragging(true);
      },
      onDrop(e) {
        defaultProcess(e);
        if (e.dataTransfer?.files.length === 1) {
          onDropFile(e.dataTransfer.files[0]);
        }
        setDragging(false);
      },
    }),
    [setDragging, onDropFile]
  );
};

export default useDragDrop;

const defaultProcess: DragEventHandler = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
};
