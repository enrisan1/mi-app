import { tasksReducer, type TasksState } from "./tasksReducer";
import type { TaskAction } from "./tasksReducer";
import { tasksStorage } from "../../infrastructure/tasksStorage";

type Listener = (state: TasksState) => void;

export function createTasksStore(initialState: TasksState = []) {
  let state: TasksState = initialState;
  const listeners = new Set<Listener>();

  const getState = (): TasksState => state;

  const subscribe = (listener: Listener) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  const notify = () => {
    listeners.forEach((listener) => listener(state));
  };

  const dispatch = (action: TaskAction) => {
    const nextState = tasksReducer(state, action);

    if (!Array.isArray(nextState)) return;

    state = nextState;

    tasksStorage.save(state);

    notify();
  };

  const setState = (newState: TasksState) => {
    state = newState;
    notify();
  };

  const clear = () => {
    setState([]);
    tasksStorage.clear();
  };

  const hydrate = (data: TasksState = []) => {
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
