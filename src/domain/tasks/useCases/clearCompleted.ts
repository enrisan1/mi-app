import type { TaskActions } from "../taskActions.types";

export function createClearCompletedUseCase(actions: TaskActions) {
  return () => {
    actions.clearCompleted();
  };
}
