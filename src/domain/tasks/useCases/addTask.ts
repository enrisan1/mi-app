import { createTask } from "../entities/task";
import type { TaskActions } from "../taskActions.types";

export function createAddTaskUseCase(actions: TaskActions) {
  return (text: string) => {
    const task = createTask(text);

    actions.addTask(task);
  };
}
