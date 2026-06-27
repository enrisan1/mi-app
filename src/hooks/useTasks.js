import { useEffect, useState } from "react";
import { createTasksStore } from "../application/tasksStore";

export function useTasks() {
  const [store] = useState(() => createTasksStore()); // 👈 CRÍTICO

  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsub = store.subscribe(() => {
      setState(store.getState());
    });

    return unsub;
  }, [store]);

  return {
    ...state,
    addTask: store.addTask,
    deleteTask: store.deleteTask,
    toggleTask: store.toggleTask,
    editTask: store.editTask,
    clearCompleted: store.clearCompleted,
  };
}
