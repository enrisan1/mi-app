import { taskActions } from "../tasksStore";

export function editTaskUseCase(id: string, text: string) {
  taskActions.editTask(id, text);
}
