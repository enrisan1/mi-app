import { useState } from "react";
import type { KeyboardEvent } from "react";
import type { Task } from "../../domain/tasks/entities/task";
import { TaskPrioritySelect } from "./TaskPrioritySelect";
import type { Priority } from "../../domain/tasks/entities/Priority";

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onChangePriority: (id: string, priority: Priority) => void;
}

export function TaskItem({
  task,
  onDelete,
  onToggle,
  onEdit,
  onChangePriority,
}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text.toString());

  function handleEditStart(): void {
    setEditText(task.text.toString());
    setIsEditing(true);
  }

  function handleEditSave(): void {
    const trimmedText = editText.trim();

    if (trimmedText) {
      onEdit(task.id.toString(), trimmedText);
    }

    setIsEditing(false);
  }

  function handleEditCancel(): void {
    setEditText(task.text.toString());
    setIsEditing(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key === "Enter") {
      handleEditSave();
    }

    if (event.key === "Escape") {
      handleEditCancel();
    }
  }

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id.toString())}
        aria-label={`Completar ${task.text.toString()}`}
      />

      {isEditing ? (
        <>
          <input
            className="task-edit-input"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />

          <button
            type="button"
            onClick={handleEditSave}
            aria-label="Guardar edición"
          >
            💾
          </button>

          <button type="button" onClick={handleEditCancel}>
            Cancelar
          </button>
        </>
      ) : (
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.text.toString()}
        </span>
      )}

      <TaskPrioritySelect
        priority={task.priority}
        onChange={(priority) => onChangePriority(task.id.toString(), priority)}
        ariaLabel={`Prioridad de ${task.text.toString()}`}
      />
      {!isEditing && (
        <button
          type="button"
          onClick={handleEditStart}
          aria-label="Editar tarea"
        >
          ✏️
        </button>
      )}

      <button
        type="button"
        onClick={() => onDelete(task.id.toString())}
        aria-label="Eliminar tarea"
      >
        ❌
      </button>
    </div>
  );
}
