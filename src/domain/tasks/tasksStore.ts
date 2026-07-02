import { tasksReducer, type TaskAction, type TasksState } from "./tasksReducer";
import type { TaskRepository } from "./repository/taskRepository";

type Listener = () => void;

export function createTasksStore(
  repository: TaskRepository,
  initialState: TasksState = [],
) {
  let state: TasksState = repository.load?.() ?? initialState;

  const listeners = new Set<Listener>();

  const getState = () => state;

  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const notify = () => {
    listeners.forEach((l) => l());
  };

  const dispatch = (action: TaskAction) => {
    const nextState = tasksReducer(state, action);
    state = nextState;

    repository.save(state);
    notify();
  };

  const clear = () => {
    state = [];
    repository.clear();
    notify();
  };

  const hydrate = (data: TasksState = []) => {
    state = Array.isArray(data) ? [...data] : [];
    notify();
  };

  return {
    getState,
    subscribe,
    dispatch,
    clear,
    hydrate,
  };
}
