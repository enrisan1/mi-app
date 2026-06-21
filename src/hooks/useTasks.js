import { useReducer, useState, useEffect } from "react";
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
              text: action.payload.newText,
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
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  // Toggle completado
  const toggleTask = (id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  };

  // Editar tarea
  const editTask = (id, newText) => {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id,
        newText,
      },
    });
  };

  // Eliminar completadas
  const clearCompleted = () => {
    dispatch({
      type: "CLEAR_COMPLETED",
    });
  };

  // Contadores
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((t) => !t.completed).length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  // Filtro aplicado
  const filteredTasks = (() => {
    if (filter === "pending") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  })();

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
