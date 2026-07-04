import { tasksReducer } from "./tasksReducer";
import type { Task } from "./task";
import { localStorageTaskRepository } from "../../infrastructure/taskRepository/localStorageTaskRepository";

type Listener = () => void;

let state: Task[] = localStorageTaskRepository.load?.() ?? [];

const listeners = new Set<Listener>();

export const tasksStore = {
  getState: () => state,

  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  dispatch: (action: any) => {
    state = tasksReducer(state, action);

    localStorageTaskRepository.save(state);
    listeners.forEach((l) => l());
  },

  clear: () => {
    state = [];
    localStorageTaskRepository.clear();
    listeners.forEach((l) => l());
  },

  hydrate: (data: Task[] = []) => {
    state = Array.isArray(data) ? [...data] : [];
    listeners.forEach((l) => l());
  },
};