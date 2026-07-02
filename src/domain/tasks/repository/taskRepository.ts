import type { Task } from "../task";

export interface TaskRepository {
  getAll(): Task[];
  save(tasks: Task[]): void;
  clear(): void;
}
