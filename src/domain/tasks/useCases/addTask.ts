import { taskActions } from "../tasksStore";

export function addTaskUseCase(text: string) {
  taskActions.addTask(text);
}
