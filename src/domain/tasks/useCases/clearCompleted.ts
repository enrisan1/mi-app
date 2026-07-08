import { taskActions } from "../tasksStore";

export function clearCompletedUseCase() {
  taskActions.clearCompleted();
}
