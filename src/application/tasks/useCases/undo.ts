import type { TaskActions } from "../taskActions.types";

export function undo(taskActions: TaskActions): void {
  // Cambiar boolean por void
  if (taskActions.canUndo()) {
    taskActions.undo();
  }
}

// Si necesitas una versión que devuelva boolean:
export function createUndoUseCase(taskActions: TaskActions) {
  return (): boolean => {
    if (taskActions.canUndo()) {
      taskActions.undo();
      return true;
    }
    return false;
  };
}
