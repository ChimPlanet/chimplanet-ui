import { useMemo } from 'react';

export default function useDragDrop({ setDragging, onDropFile }) {
  const handles = useMemo(
    () => ({
      onDragIn: defaultProcess,
      onDragOut(e) {
        defaultProcess(e);
        setDragging(false);
      },
      onDragOver(e) {
        defaultProcess(e);
        if (e.dataTransfer.files) setDragging(true);
      },
      /** @param {DragEvent} e */
      onDrop(e) {
        defaultProcess(e);
        if (e.dataTransfer?.files.length === 1) {
          onDropFile(e.dataTransfer?.files[0]);
        }
        setDragging(false);
      },
    }),
    [setDragging, onDropFile],
  );

  return handles;
}

function defaultProcess(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
}
