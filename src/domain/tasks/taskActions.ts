import { ACTIONS } from "./tasksReducer";
import type { createTasksStore } from "./tasksStore";

type Store = ReturnType<typeof createTasksStore>;

export function createTaskActions(store: Store) {
  return {
    addTask(text: string) {
      store.dispatch({
        type: ACTIONS.ADD_TASK,
        payload: {
          id: crypto.randomUUID(),
          text,
          completed: false,
        },
      });
    },

    deleteTask(id: string) {
      store.dispatch({
        type: ACTIONS.DELETE_TASK,
        payload: id,
      });
    },

    toggleTask(id: string) {
      store.dispatch({
        type: ACTIONS.TOGGLE_TASK,
        payload: id,
      });
    },

    editTask(id: string, text: string) {
      store.dispatch({
        type: ACTIONS.EDIT_TASK,
        payload: { id, text },
      });
    },

    clearCompleted() {
      store.dispatch({
        type: ACTIONS.CLEAR_COMPLETED,
      });
    },
  };
}
