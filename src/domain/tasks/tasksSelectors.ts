import type { Task } from "./task";
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

/**
 * Selectores memoizados
 */

export const selectTasks = (state: Task[]) => state;

export const selectCompleted = createSelector(
  selectTasks,
  selectCompletedTasks,
);

export const selectPending = createSelector(selectTasks, selectActiveTasks);
