import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export function useTasks() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }

  const { state, addTask, deleteTask, toggleTask, editTask, clearCompleted } =
    context;

  return {
    state,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    clearCompleted,
  };
}
