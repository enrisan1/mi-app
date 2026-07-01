import { tasksReducer } from "./tasksReducer";
import { tasksStorage } from "../../infrastructure/tasksStorage";

export function createTasksStore(initialState = []) {
  let state = initialState;
  const listeners = new Set();

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  const notify = () => {
    listeners.forEach((listener) => listener(state));
  };

  const dispatch = (action) => {
    const nextState = tasksReducer(state, action);

    if (!Array.isArray(nextState)) return;

    state = nextState;

    tasksStorage.save(state);

    notify();
  };

  const setState = (newState) => {
    state = newState;
    notify();
  };

  const clear = () => {
    setState([]);
    tasksStorage.clear();
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
