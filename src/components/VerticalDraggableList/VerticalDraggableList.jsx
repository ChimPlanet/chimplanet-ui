import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

/**
 * @typedef {object} VerticalDraggableListProps
 * @property {string} droppableId
 * @property {unknown[]} items
 * @property {import('react-beautiful-dnd').OnDragEndResponder} onDragEnd
 * @property {(item: unknown)=>string} getIdByItem
 * @property {(item: unknown, index: number)=>JSX.Element} children
 *
 * @param {VerticalDraggableListProps}
 * @returns
 */
export default function VerticalDraggableList({
  droppableId,
  items,
  onDragEnd,
  getIdByItem,
  children,
}) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable
                key={getIdByItem(item)}
                draggableId={getIdByItem(item)}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    children={children(item, index)}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
