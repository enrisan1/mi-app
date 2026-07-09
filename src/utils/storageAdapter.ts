import type { Task } from "../domain/tasks/entities/task";

const STORAGE_KEY = "tasks";

export const storageAdapter = {
  load(): Task[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);

      return data ? (JSON.parse(data) as Task[]) : [];
    } catch {
      return [];
    }
  },

  save(tasks: Task[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // fail silently (modo producción real)
    }
  },

  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  },
};
