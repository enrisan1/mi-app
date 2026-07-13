import { Task } from "../../../domain/tasks/entities/task";
import type { TaskActions } from "../../../domain/tasks/taskActions.types";

export function createAddTaskUseCase(actions: TaskActions) {
  return (text: string) => {
    const task = Task.create(text);

    actions.addTask(task);
  };
}
