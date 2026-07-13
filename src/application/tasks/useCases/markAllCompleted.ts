import type { TaskActions } from "../taskActions.types";

export function createMarkAllCompletedUseCase(actions: TaskActions) {
  return () => {
    actions.markAllCompleted();
  };
}
