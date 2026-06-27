import { tasksReducer, ACTIONS } from "../domain/tasks/tasksReducer";
import { tasksStorage } from "../infrastructure/tasksStorage";

export function createTasksStore() {
  let state = tasksStorage.load();
  const listeners = new Set();

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function notify() {
    listeners.forEach((l) => l());
  }

  function dispatch(action) {
    state = tasksReducer(state, action);
    tasksStorage.save(state);
    notify();
  }

  // API
  const addTask = (text) =>
    dispatch({
      type: ACTIONS.ADD_TASK,
      payload: { id: Date.now(), text, completed: false },
    });

  const deleteTask = (id) =>
    dispatch({ type: ACTIONS.DELETE_TASK, payload: id });

  const toggleTask = (id) =>
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: id });

  const editTask = (id, text) =>
    dispatch({ type: ACTIONS.EDIT_TASK, payload: { id, text } });

  const clearCompleted = () => dispatch({ type: ACTIONS.CLEAR_COMPLETED });

  return {
    getState,
    subscribe,

    addTask,
    deleteTask,
    toggleTask,
    editTask,
    clearCompleted,
  };
}
