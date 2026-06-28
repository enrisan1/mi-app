import { useSyncExternalStore, useState, useCallback } from "react";
import { tasksStore } from "../../domain/tasks/tasksStore";
import { ACTIONS } from "../../domain/tasks/tasksReducer";

// snapshot
const getSnapshot = () => tasksStore.getState();
const subscribe = (listener) => tasksStore.subscribe(listener);

export function useTasks() {
  const state = useSyncExternalStore(subscribe, getSnapshot);

  const [filter, setFilter] = useState("all");

  const addTask = useCallback((text) => {
    tasksStore.dispatch({
      type: ACTIONS.ADD_TASK,
      payload: {
        id: crypto.randomUUID(),
        text,
        completed: false,
      },
    });
  }, []);

  const deleteTask = useCallback((id) => {
    tasksStore.dispatch({
      type: ACTIONS.DELETE_TASK,
      payload: id,
    });
  }, []);

  const toggleTask = useCallback((id) => {
    tasksStore.dispatch({
      type: ACTIONS.TOGGLE_TASK,
      payload: id,
    });
  }, []);

  const editTask = useCallback((id, text) => {
    tasksStore.dispatch({
      type: ACTIONS.EDIT_TASK,
      payload: { id, text },
    });
  }, []);

  const clearCompleted = useCallback(() => {
    tasksStore.dispatch({
      type: ACTIONS.CLEAR_COMPLETED,
    });
  }, []);

  const filteredTasks = (() => {
    switch (filter) {
      case "completed":
        return state.filter((t) => t.completed);
      case "pending":
        return state.filter((t) => !t.completed);
      default:
        return state;
    }
  })();

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
  };
}
