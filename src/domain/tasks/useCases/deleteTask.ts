import { taskActions } from "../tasksStore";

export function deleteTaskUseCase(id: string) {
  taskActions.deleteTask(id);
}
