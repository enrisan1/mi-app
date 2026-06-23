import { useState, useEffect, useReducer, useMemo, useCallback } from "react";
function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      );

    case "EDIT_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              text: action.payload.text,
            }
          : task,
      );

    case "CLEAR_COMPLETED":
      return state.filter((task) => !task.completed);

    default:
      return state;
  }
}
export function useTasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, [], () => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });
  const [filter, setFilter] = useState("all");

  // Persistencia
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
