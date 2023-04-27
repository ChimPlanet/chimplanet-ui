import { useState } from "react";

import { Container, Label } from "./FileDragDropPane.style";
import useDragDrop from "./hooks/useDragDrop";

export interface FileDragDropPaneProps {
  id: string;
  onDropFile(e: File): void;
  elementWhenUsually: JSX.Element;
  elementWhenDragging: JSX.Element;
}

export const FileDragDropPane: React.FC<FileDragDropPaneProps> = ({
  id,
  onDropFile,
  elementWhenDragging,
  elementWhenUsually,
}) => {
  const [dragging, setDragging] = useState(false);

  const { onDragIn, onDragOut, onDragOver, onDrop } = useDragDrop({
    setDragging,
    onDropFile,
  });

  return (
    <Container>
      {/* input은 보이지 안도록 만든다. */}
      <input id={id} type="file" style={{ display: "none" }} multiple={false} />

      <Label
        htmlFor={id}
        children={dragging ? elementWhenDragging : elementWhenUsually}
        onDragEnter={onDragIn}
        onDragLeave={onDragOut}
        onDragOver={onDragOver}
        onDrop={onDrop}
      />
    </Container>
  );
};

export default FileDragDropPane;
