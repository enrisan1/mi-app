import type { TaskActions } from "../taskActions.types";

export function redo(actions: TaskActions): void {
  if (!actions.canRedo()) {
    return;
  }

  actions.redo();
}

export function createRedoUseCase(actions: TaskActions) {
  return (): void => {
    redo(actions);
  };
}
