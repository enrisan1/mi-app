import { useState, useEffect } from "react";
function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    default:
      return state;
  }
}
export function useTasks() {
  const [tasks, setTasks] = useState(() => {
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

    setTasks((prev) => [...prev, newTask]);
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Toggle completado
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  // Editar tarea
  const editTask = (id, newText) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t)),
    );
  };

  // Eliminar completadas
  const clearCompleted = () => {
    setTasks((prev) => prev.filter((t) => !t.completed));
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
