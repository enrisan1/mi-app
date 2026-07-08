import { useSyncExternalStore } from "react";
import { tasksStore, taskActions } from "../../domain/tasks/tasksStore";

export function useTasks() {
  const tasks = useSyncExternalStore(
    tasksStore.subscribe,
    tasksStore.getState,
    tasksStore.getState,
  );

  return {
    tasks,
    ...taskActions,
  };
}
