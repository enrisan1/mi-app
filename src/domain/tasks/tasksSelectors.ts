import { createSelector } from "../../store/createSelector";
import type { Task } from "./task";

export const selectTasks = (state: Task[]) => state;

export const selectCompleted = createSelector(selectTasks, (tasks) =>
  tasks.filter((t) => t.completed),
);

export const selectPending = createSelector(selectTasks, (tasks) =>
  tasks.filter((t) => !t.completed),
);
