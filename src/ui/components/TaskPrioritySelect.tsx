import type { ChangeEvent } from "react";
import {
  Priority,
  type PriorityValue,
} from "../../domain/tasks/entities/Priority";
import { getPriorityLabel } from "../presenters/priorityPresenter";

interface TaskPrioritySelectProps {
  priority: Priority;
  onChange(priority: Priority): void;
  ariaLabel?: string;
}

export function TaskPrioritySelect({
  priority,
  onChange,
  ariaLabel = "Cambiar prioridad",
}: TaskPrioritySelectProps) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>): void {
    const priorityValue = event.target.value as PriorityValue;

    onChange(Priority.restore(priorityValue));
  }

  return (
    <div className="task-priority-controls">
      <span className={`task-priority task-priority-${priority.toString()}`}>
        {getPriorityLabel(priority)}
      </span>

      <select
        value={priority.toString()}
        onChange={handleChange}
        aria-label={ariaLabel}
      >
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>
    </div>
  );
}
