import { useState } from 'react';

import { Container, Label } from './FileDragDropPane.style';
import useDragDrop from './hooks/useDragDrop';

/**
 * @typedef {object} FileDragDropPaneProps
 * @property {JSX.Element} elementWhenUsually
 * @property {JSX.Element} elementWhenDragging
 * @property {(e: File)=>void} onDropFile
 * @property {string} id
 *
 * @param {FileDragDropPaneProps}
 * @returns
 */
export default function FileDragDropPane({
  elementWhenDragging,
  elementWhenUsually,
  onDropFile,
  id,
}) {
  const [dragging, setDragging] = useState(false);

  const { onDragIn, onDragOut, onDragOver, onDrop } = useDragDrop({
    setDragging,
    onDropFile,
  });

  return (
    <Container>
      {/* input은 보이지 안도록 만든다. */}
      <input id={id} type="file" style={{ display: 'none' }} multiple={false} />

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
}
