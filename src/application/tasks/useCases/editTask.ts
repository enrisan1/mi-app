import type { TaskActions } from "../../../domain/tasks/taskActions.types";

export function createEditTaskUseCase(actions: TaskActions) {
  return (id: string, text: string) => {
    actions.editTask(id, text);
  };
}
