import type { TaskActions } from "../taskActions.types";

export function createDeleteTaskUseCase(actions: TaskActions) {
  return (id: string) => {
    actions.deleteTask(id);
  };
}
