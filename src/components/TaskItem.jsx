import { useState } from "react";

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={onToggle} />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />

          <button onClick={handleSave}>💾</button>

          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text}
          </span>

          <button onClick={() => setIsEditing(true)}>✏️</button>

          <button onClick={onDelete}>❌</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
