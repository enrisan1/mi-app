import { createTask } from "../task";
import { taskActions } from "../tasksStore";

export function addTaskUseCase(text: string) {
  const task = createTask(text);

  taskActions.addTask(task);
}
