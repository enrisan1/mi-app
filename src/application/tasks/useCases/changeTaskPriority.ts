import type { TaskActions } from "../taskActions.types";
import type { Priority } from "../../../domain/tasks/entities/Priority";

export function createChangeTaskPriorityUseCase(taskActions: TaskActions) {
  return function changeTaskPriorityUseCase(id: string, priority: Priority): void {
    taskActions.changePriority(id, priority);
  };
}