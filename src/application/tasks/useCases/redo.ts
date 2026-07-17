import type { TaskActions } from "../taskActions.types";

function createRedoUseCase(taskActions: TaskActions) {
  return (): boolean => {
    return taskActions.redo();
  };
}

export { createRedoUseCase };
