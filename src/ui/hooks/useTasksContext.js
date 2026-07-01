import { useContext, useSyncExternalStore, useMemo } from "react";

import { TasksContext } from "../context/TasksContext";

export function useTasksContext() {
  const { store, actions, filter, setFilter } = useContext(TasksContext);

  const state = useSyncExternalStore(store.subscribe, store.getState);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return state.filter((t) => t.completed);

      case "pending":
        return state.filter((t) => !t.completed);

      default:
        return state;
    }
  }, [state, filter]);

  return {
    tasks: state,
    filteredTasks,
    filter,
    setFilter,

    addTask: actions.addTask,
    deleteTask: actions.deleteTask,
    toggleTask: actions.toggleTask,
    editTask: actions.editTask,
    clearCompleted: actions.clearCompleted,

    totalTasks: state.length,
    pendingTasks: state.filter((t) => !t.completed).length,
    completedTasks: state.filter((t) => t.completed).length,
  };
}
