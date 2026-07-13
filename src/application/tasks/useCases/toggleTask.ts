import type { TaskActions } from "../../../domain/tasks/taskActions.types";

export function createToggleTaskUseCase(actions: TaskActions) {
  return (id: string) => {
    actions.toggleTask(id);
  };
}
