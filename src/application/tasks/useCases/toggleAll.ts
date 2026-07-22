import type { TaskActions } from "../taskActions.types";

export function createToggleAllUseCase(taskActions: TaskActions) {
  return () => {
    if (taskActions.hasPendingTasks()) {
      taskActions.markAllCompleted();
    } else {
      taskActions.markAllPending();
    }
  };
}
