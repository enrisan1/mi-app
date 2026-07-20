import type { Task } from "./entities/task";
import type { TaskFilter } from "./taskFilter";
import { createSelector } from "../../store/createSelector";

/**
 * Selectores puros
 */

export function selectAllTasks(tasks: Task[]): Task[] {
  return tasks;
}

export function selectActiveTasks(tasks: Task[]): Task[] {
  return tasks.filter((task) => !task.completed);
}

export function selectCompletedTasks(tasks: Task[]): Task[] {
  return tasks.filter((task) => task.completed);
}

export function selectVisibleTasks(tasks: Task[], filter: TaskFilter): Task[] {
  switch (filter) {
    case "active":
      return selectActiveTasks(tasks);

    case "completed":
      return selectCompletedTasks(tasks);

    case "all":
    default:
      return selectAllTasks(tasks);
  }
}

export function selectTotalTasks(tasks: Task[]): number {
  return tasks.length;
}

export function selectCompletedCount(tasks: Task[]): number {
  return selectCompletedTasks(tasks).length;
}

export function selectPendingCount(tasks: Task[]): number {
  return selectActiveTasks(tasks).length;
}

export function selectHasPendingTasks(tasks: Task[]): boolean {
  return selectPendingCount(tasks) > 0;
}

export function selectHasCompletedTasks(tasks: Task[]): boolean {
  return selectCompletedCount(tasks) > 0;
}

/**
 * Selectores memoizados
 */

export const selectTasks = (state: Task[]) => state;

export const selectCompleted = createSelector(
  selectTasks,
  selectCompletedTasks,
);

export const selectPending = createSelector(selectTasks, selectActiveTasks);

export const selectHasPending = createSelector(
  selectTasks,
  selectHasPendingTasks,
);
