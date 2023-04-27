import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";

interface VerticalDraggableListProps {
  droppableId: string;
  items: unknown[];
  onDragEnd: OnDragEndResponder;
  getIdByItem(item: unknown): string;
  children(item: unknown, index: number): JSX.Element;
}

export const VerticalDraggableList: React.FC<VerticalDraggableListProps> = ({
  droppableId,
  items,
  onDragEnd,
  getIdByItem,
  children,
}) => {
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
};

export default VerticalDraggableList;
