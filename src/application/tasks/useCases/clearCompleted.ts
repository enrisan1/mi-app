import type { TaskActions } from "../../../domain/tasks/taskActions.types";

export function createClearCompletedUseCase(actions: TaskActions) {
  return () => {
    actions.clearCompleted();
  };
}
