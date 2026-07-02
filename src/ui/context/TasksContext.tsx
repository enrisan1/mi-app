import { createContext } from "react";
import type { TasksState } from "../../domain/tasks/tasksReducer";
import type { TaskAction } from "../../domain/tasks/tasksReducer";

export type TasksContextValue = {
  state: TasksState;
  dispatch: (action: TaskAction) => void;
  clear: () => void;
  hydrate: (data: TasksState) => void;
};

export const TasksContext = createContext<TasksContextValue | null>(null);
