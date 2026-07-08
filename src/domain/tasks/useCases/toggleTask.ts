import { taskActions } from "../tasksStore";

export function toggleTaskUseCase(id: string) {
  taskActions.toggleTask(id);
}
