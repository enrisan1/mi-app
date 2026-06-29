import {
  useContext,
  useSyncExternalStore,
  useState,
  useCallback,
  useMemo,
} from "react";

import { TasksContext } from "../ui/context/TasksContext";
import { ACTIONS } from "../../domain/tasks/tasksReducer";

export function useTasksContext() {
  const { store, actions } = useContext(TasksContext);

  const state = useSyncExternalStore(store.subscribe, store.getState);

  const [filter, setFilter] = useState("all");

  const addTask = useCallback(
    (text) => {
      actions.addTask(text);
    },
    [actions],
  );

  const deleteTask = useCallback(
    (id) => {
      actions.deleteTask(id);
    },
    [actions],
  );

  const toggleTask = useCallback(
    (id) => {
      actions.toggleTask(id);
    },
    [actions],
  );

  const editTask = useCallback(
    (id, text) => {
      actions.editTask(id, text);
    },
    [actions],
  );

  const clearCompleted = useCallback(() => {
    actions.clearCompleted();
  }, [actions]);

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
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    clearCompleted,
    totalTasks: state.length,
    pendingTasks: state.filter((t) => !t.completed).length,
    completedTasks: state.filter((t) => t.completed).length,
  };
}
