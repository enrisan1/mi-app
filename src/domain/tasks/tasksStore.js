import { tasksReducer, ACTIONS } from "./tasksReducer";

const STORAGE_KEY = "tasks";

/**
 * 🔹 Estado global simple (fuera de React)
 */
export function createTasksStore(initialState = []) {
  let state = initialState;

  const listeners = new Set();

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function notify() {
    listeners.forEach((l) => l(state));
  }

  function dispatch(action) {
    state = tasksReducer(state, action);
    notify();
  }

  // =========================
  // Persistence (opcional)
  // =========================

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      state = raw ? JSON.parse(raw) : [];
    } catch {
      state = [];
    }
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function hydrateFromStorage() {
    load();
    notify();
  }

  function persist() {
    save();
  }

  // =========================
  // API de dominio
  // =========================

  function addTask(text) {
    dispatch({
      type: ACTIONS.ADD_TASK,
      payload: {
        id: Date.now(),
        text,
        completed: false,
      },
    });
    persist();
  }

  function deleteTask(id) {
    dispatch({
      type: ACTIONS.DELETE_TASK,
      payload: id,
    });
    persist();
  }

  function toggleTask(id) {
    dispatch({
      type: ACTIONS.TOGGLE_TASK,
      payload: id,
    });
    persist();
  }

  function editTask(id, text) {
    dispatch({
      type: ACTIONS.EDIT_TASK,
      payload: { id, text },
    });
    persist();
  }

  function clearCompleted() {
    dispatch({ type: ACTIONS.CLEAR_COMPLETED });
    persist();
  }

  return {
    getState,
    subscribe,

    hydrateFromStorage,

    addTask,
    deleteTask,
    toggleTask,
    editTask,
    clearCompleted,
  };
}
