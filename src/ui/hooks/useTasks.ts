import { useSyncExternalStore } from "react";
import { tasksStore } from "../../application/tasks/tasksStore";
import {
  addTaskUseCase,
  toggleTaskUseCase,
  deleteTaskUseCase,
  editTaskUseCase,
  clearCompletedUseCase,
  markAllCompletedUseCase,
} from "../../application/tasks/composition";

export function useTasks() {
  const tasks = useSyncExternalStore(
    tasksStore.subscribe,
    tasksStore.getState,
    tasksStore.getState,
  );

  return {
    tasks,
    addTask: addTaskUseCase,
    toggleTask: toggleTaskUseCase,
    deleteTask: deleteTaskUseCase,
    editTask: editTaskUseCase,
    clearCompleted: clearCompletedUseCase,
    markAllCompleted: markAllCompletedUseCase,
  };
}
