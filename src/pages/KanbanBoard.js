import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "8px",
    margin: "4px",
    background: "#fff",
    border: "1px solid #ccc",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
};

const KanbanBoard = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        const { active, over } = event;

        if (active.id !== over.id) {
          setItems((items) => {
            const oldIndex = items.indexOf(active.id);
            const newIndex = items.indexOf(over.id);

            return arrayMove(items, oldIndex, newIndex);
          });
        }
      }}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((id) => (
          <SortableItem key={id} id={id} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default KanbanBoard;
