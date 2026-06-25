import { useState, useEffect, useReducer, useMemo, useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { tasksReducer } from "../reducers/tasksReducer";

export function useTasks() {
  const [storedTasks, setStoredTasks] = useLocalStorage("tasks", []);

  const [tasks, dispatch] = useReducer(tasksReducer, storedTasks);
  const [filter, setFilter] = useState("all");

  // Persistencia
  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks]);

  // Crear tarea
  const addTask = useCallback((text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });
  }, []);

  // Eliminar tarea
  const deleteTask = useCallback((id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }, []);

  // Toggle completado
  const toggleTask = useCallback((id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  }, []);

  // Editar tarea
  const editTask = useCallback((id, text) => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id, text },
    });
  }, []);

  // Eliminar completadas
  const clearCompleted = useCallback(() => {
    dispatch({
      type: "CLEAR_COMPLETED",
    });
  }, []);

  // Contadores
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((t) => !t.completed).length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  // Filtro aplicado
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "pending":
        return tasks.filter((t) => !t.completed);

      case "completed":
        return tasks.filter((t) => t.completed);

      default:
        return tasks;
    }
  }, [tasks, filter]);

  return {
    tasks,
    filteredTasks,
    filter,
    setFilter,

    addTask,
    deleteTask,
    toggleTask,
    editTask,
    clearCompleted,

    totalTasks,
    pendingTasks,
    completedTasks,
  };
}
