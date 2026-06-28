import { ACTIONS } from "./tasksReducer";

export function createTaskActions(store) {
  return {
    addTask(text) {
      store.dispatch({
        type: ACTIONS.ADD_TASK,
        payload: {
          id: crypto.randomUUID(),
          text,
          completed: false,
        },
      });
    },

    deleteTask(id) {
      store.dispatch({
        type: ACTIONS.DELETE_TASK,
        payload: id,
      });
    },

    toggleTask(id) {
      store.dispatch({
        type: ACTIONS.TOGGLE_TASK,
        payload: id,
      });
    },

    editTask(id, text) {
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
