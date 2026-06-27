import { tasksReducer, ACTIONS } from "../reducers/tasksReducer";

export function createTaskService(initialState = []) {
  let state = initialState;

  const dispatch = (action) => {
    state = tasksReducer(state, action);
  };

  return {
    getState: () => state,

    add(text) {
      dispatch({
        type: ACTIONS.ADD_TASK,
        payload: {
          id: Date.now(),
          text,
          completed: false,
        },
      });
    },

    toggle(id) {
      dispatch({ type: ACTIONS.TOGGLE_TASK, payload: id });
    },

    remove(id) {
      dispatch({ type: ACTIONS.DELETE_TASK, payload: id });
    },

    edit(id, text) {
      dispatch({
        type: ACTIONS.EDIT_TASK,
        payload: { id, text },
      });
    },

    clearCompleted() {
      dispatch({ type: ACTIONS.CLEAR_COMPLETED });
    },
  };
}
