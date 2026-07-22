import type { Task } from "../../domain/tasks/entities/task";
import type { Priority } from "../../domain/tasks/entities/Priority";

export interface TaskActions {
  addTask(task: Task): void;
  deleteTask(id: string): void;
  toggleTask(id: string): void;
  editTask(id: string, text: string): void;
  changePriority(id: string, priority: Priority): void;
  clearCompleted(): void;
  markAllCompleted(): void;
  markAllPending(): void;
  hasPendingTasks(): boolean;
  undo(): void;
  redo(): void;
  canUndo(): boolean;
  canRedo(): boolean;
  hasUndo(): boolean;
  hasRedo(): boolean;
}
