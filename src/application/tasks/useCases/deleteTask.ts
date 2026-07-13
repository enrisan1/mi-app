import type { TaskActions } from "../../../domain/tasks/taskActions.types";

export function createDeleteTaskUseCase(actions: TaskActions) {
  return (id: string) => {
    actions.deleteTask(id);
  };
}
