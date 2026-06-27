export const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  EDIT_TASK: "EDIT_TASK",
  CLEAR_COMPLETED: "CLEAR_COMPLETED",
};

export function tasksReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...state, action.payload];

    case ACTIONS.DELETE_TASK:
      return state.filter((t) => t.id !== action.payload);

    case ACTIONS.TOGGLE_TASK:
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t,
      );

    case ACTIONS.EDIT_TASK:
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, text: action.payload.text } : t,
      );

    case ACTIONS.CLEAR_COMPLETED:
      return state.filter((t) => !t.completed);

    default:
      return state;
  }
}
