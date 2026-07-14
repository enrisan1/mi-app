import type { TaskActions } from "../taskActions.types";

export function createToggleAllUseCase(actions: TaskActions) {
  return () => {
    if (actions.hasPendingTasks()) {
      actions.markAllCompleted();
    } else {
      actions.markAllPending();
    }
  };
}
