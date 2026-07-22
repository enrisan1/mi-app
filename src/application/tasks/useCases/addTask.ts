import { Task } from "../../../domain/tasks/entities/task";
import type { Priority } from "../../../domain/tasks/entities/Priority";
import type { TaskActions } from "../taskActions.types";

export function createAddTaskUseCase(actions: TaskActions) {
  return (text: string, priority: Priority): void => {
    const task = Task.create(text, priority);
    actions.addTask(task);
  };
}
