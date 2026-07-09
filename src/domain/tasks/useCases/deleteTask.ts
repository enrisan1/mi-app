export function createDeleteTaskUseCase(actions: TaskActions) {
  return (id: string) => {
    actions.deleteTask(id);
  };
}
