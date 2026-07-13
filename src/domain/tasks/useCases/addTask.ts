import { Task } from "../entities/task";
import type { TaskActions } from "../taskActions.types";

export function createAddTaskUseCase(actions: TaskActions) {
  return (text: string) => {
    const task = Task.create(text);

    actions.addTask(task);
  };
}