import { createContext, useContext } from "react";
import { useTasks } from "../ui/hooks/useTasks";

export const TasksContext = createContext();

export function TasksProvider({ children }) {
  const tasksData = useTasks();

  return (
    <TasksContext.Provider value={tasksData}>{children}</TasksContext.Provider>
  );
}

export function useTasksContext() {
  return useContext(TasksContext);
}

import { renderHook } from "@testing-library/react";
import { TasksProvider, useTasksContext } from "../context/TasksContext";

it("provee el contexto de tareas", () => {
  const { result } = renderHook(() => useTasksContext(), {
    wrapper: TasksProvider,
  });

  expect(result.current).toHaveProperty("addTask");
});
