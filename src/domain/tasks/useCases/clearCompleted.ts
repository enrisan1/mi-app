export function createClearCompletedUseCase(actions: TaskActions) {
  return () => {
    actions.clearCompleted();
  };
}
