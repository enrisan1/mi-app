import { memo, useState, type ChangeEvent } from "react";
import type { Task } from "../../domain/tasks/entities/task";

type Props = {
  task: Task;
  onDelete(id: string): void;
  onToggle(id: string): void;
  onEdit(id: string, text: string): void;
};

function TaskItem({ task, onDelete, onToggle, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    const trimmed = editedText.trim();

    if (!trimmed) return;

    onEdit(task.id, trimmed);
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={handleChange} />

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

          <button onClick={() => onDelete(task.id)}>❌</button>
        </>
      )}
    </li>
  );
}

export default memo(TaskItem);
