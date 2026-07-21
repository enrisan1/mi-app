import { useSyncExternalStore } from "react";
import { tasksStore } from "../../application/tasks/tasksStore";
import type { TaskFilter } from "../../domain/tasks/taskFilter";
import {
  selectVisibleTasks,
  selectHasPendingTasks,
  selectHasCompletedTasks,
  selectTotalTasks,
  selectPendingCount,
  selectCompletedCount,
} from "../../domain/tasks/tasksSelectors";
import {
  addTaskUseCase,
  toggleTaskUseCase,
  deleteTaskUseCase,
  editTaskUseCase,
  clearCompletedUseCase,
  markAllCompletedUseCase,
  markAllPendingUseCase,
  toggleAllUseCase,
  undoUseCase,
  hasUndo,
  redoUseCase,
  hasRedo,
} from "../../application/tasks/composition";

export function useTasks(filter?: TaskFilter) {
  const tasks = useSyncExternalStore(
    tasksStore.subscribe,
    tasksStore.getState,
    tasksStore.getState,
  );
  // Listados
  const visibleTasks = filter ? selectVisibleTasks(tasks, filter) : tasks;
  // Contadores
  const totalTasks = selectTotalTasks(tasks);
  const pendingTasks = selectPendingCount(tasks);
  const completedTasks = selectCompletedCount(tasks);
  // Predicados
  const hasPendingTasks = selectHasPendingTasks(tasks);
  const hasCompletedTasks = selectHasCompletedTasks(tasks);
  return {
    // Estado
    tasks,
    visibleTasks,
    totalTasks,
    pendingTasks,
    completedTasks,
    hasPendingTasks,
    hasCompletedTasks,

    // Casos de uso
    addTask: addTaskUseCase,
    toggleTask: toggleTaskUseCase,
    deleteTask: deleteTaskUseCase,
    editTask: editTaskUseCase,
    clearCompleted: clearCompletedUseCase,
    markAllCompleted: markAllCompletedUseCase,
    markAllPending: markAllPendingUseCase,
    toggleAll: toggleAllUseCase,

    // Historial
    undo: undoUseCase,
    hasUndo,
    redo: redoUseCase,
    hasRedo,
  };
}
