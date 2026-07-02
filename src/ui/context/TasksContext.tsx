import { createContext } from "react";
import type { TasksState } from "../../domain/tasks/tasksReducer";

export type Filter = "all" | "pending" | "completed";

export type TasksContextValue = {
  tasks: TasksState;
  filteredTasks: TasksState;
  filter: Filter;

  addTask: (text: string) => void;
  toggleTask: (id: string) => void;
  setFilter: (filter: Filter) => void;
};

export const TasksContext = createContext<TasksContextValue | null>(null);
