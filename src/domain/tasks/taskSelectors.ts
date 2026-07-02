import type { Task } from "./tasksReducer";

export type Filter = "all" | "pending" | "completed";

export function selectFilteredTasks(tasks: Task[], filter: Filter) {
  switch (filter) {
    case "pending":
      return tasks.filter((t) => !t.completed);
    case "completed":
      return tasks.filter((t) => t.completed);
    default:
      return tasks;
  }
}

export function selectStats(tasks: Task[]) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return { total, completed, pending };
}
