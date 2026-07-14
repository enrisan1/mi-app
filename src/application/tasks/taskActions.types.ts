import type { Task } from "../../domain/tasks/entities/task";
export interface TaskActions {
  addTask(task: Task): void;
  deleteTask(id: string): void;
  toggleTask(id: string): void;
  editTask(id: string, text: string): void;
  clearCompleted(): void;
  markAllCompleted(): void;
  markAllPending(): void;
  hasPendingTasks(): boolean;
}
