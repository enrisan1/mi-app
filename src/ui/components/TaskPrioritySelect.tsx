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
    <select
      className={`task-priority-select task-priority-${priority.toString()}`}
      value={priority.toString()}
      onChange={handleChange}
      aria-label={ariaLabel}
    >
      <option value="low">{getPriorityLabel(Priority.low())}</option>
      <option value="medium">{getPriorityLabel(Priority.medium())}</option>
      <option value="high">{getPriorityLabel(Priority.high())}</option>
    </select>
  );
}
