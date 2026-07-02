import type { Task } from "./task";

export const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  EDIT_TASK: "EDIT_TASK",
  CLEAR_COMPLETED: "CLEAR_COMPLETED",
} as const;

export type TaskAction =
  | {
      type: typeof ACTIONS.ADD_TASK;
      payload: Task;
    }
  | {
      type: typeof ACTIONS.DELETE_TASK;
      payload: string;
    }
  | {
      type: typeof ACTIONS.TOGGLE_TASK;
      payload: string;
    }
  | {
      type: typeof ACTIONS.EDIT_TASK;
      payload: { id: string; text: string };
    }
  | {
      type: typeof ACTIONS.CLEAR_COMPLETED;
    };

export type TasksState = Task[];

export function tasksReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...state, action.payload];

    case ACTIONS.TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );

    case ACTIONS.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case ACTIONS.EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
          : task,
      );

    case ACTIONS.CLEAR_COMPLETED:
      return state.filter((task) => !task.completed);

    default:
      return state;
  }
}
