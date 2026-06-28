import { tasksReducer } from "./tasksReducer";

export function createTasksStore(initialState = []) {
  let state = initialState;
  const listeners = new Set();

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const notify = () => {
    listeners.forEach((l) => l(state));
  };

  const dispatch = (action) => {
    const nextState = tasksReducer(state, action);
    if (!Array.isArray(nextState)) return;

    state = nextState;
    notify();
  };

  // helper interno opcional
  const setState = (newState) => {
    state = newState;
    notify();
  };

  // API para tests
  const clear = () => {
    setState([]);
  };

  const hydrate = (data = []) => {
    setState(Array.isArray(data) ? [...data] : []);
  };

  return {
    getState,
    subscribe,
    dispatch,
    clear,
    hydrate,
  };
}

export const tasksStore = createTasksStore();
