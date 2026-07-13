import type { TaskActions } from "../taskActions.types";

export function createToggleTaskUseCase(actions: TaskActions) {
  return (id: string) => {
    actions.toggleTask(id);
  };
}
