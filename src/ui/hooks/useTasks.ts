import { useSyncExternalStore } from "react";
import { tasksStore } from "../../domain/tasks/tasksStore";
import {
  addTaskUseCase,
  toggleTaskUseCase,
  deleteTaskUseCase,
  editTaskUseCase,
  clearCompletedUseCase,
} from "../../domain/tasks/useCases";

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
  };
}
