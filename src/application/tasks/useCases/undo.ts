import type { TaskActions } from "../taskActions.types";

export function createUndoUseCase(taskActions: TaskActions) {
  return (): boolean => {
    return taskActions.undo();
  };
}