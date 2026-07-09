import type { Task } from "./entities/task";
export interface TaskActions {
  addTask(task: Task): void;
  deleteTask(id: string): void;
  toggleTask(id: string): void;
  editTask(id: string, text: string): void;
  clearCompleted(): void;
}
