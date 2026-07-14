import { useSyncExternalStore } from "react";
import { tasksStore } from "../../application/tasks/tasksStore";
import { selectHasPendingTasks } from "../../domain/tasks/tasksSelectors";
import {
  addTaskUseCase,
  toggleTaskUseCase,
  deleteTaskUseCase,
  editTaskUseCase,
  clearCompletedUseCase,
  markAllCompletedUseCase,
  markAllPendingUseCase,
  toggleAllUseCase,
} from "../../application/tasks/composition";

export function useTasks() {
  const tasks = useSyncExternalStore(
    tasksStore.subscribe,
    tasksStore.getState,
    tasksStore.getState,
  );

  const hasPendingTasks = selectHasPendingTasks(tasks);

  return {
    tasks,
    addTask: addTaskUseCase,
    toggleTask: toggleTaskUseCase,
    deleteTask: deleteTaskUseCase,
    editTask: editTaskUseCase,
    clearCompleted: clearCompletedUseCase,
    markAllCompleted: markAllCompletedUseCase,
    markAllPending: markAllPendingUseCase,
    toggleAll: toggleAllUseCase,
    hasPendingTasks,
  };
}
