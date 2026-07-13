import type { TaskActions } from "../taskActions.types";

export function createMarkAllPendingUseCase(actions: TaskActions) {
  return () => {
    actions.markAllPending();
  };
}
