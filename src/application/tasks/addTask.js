import { tasksStore } from "../../domain/tasks/tasksStore";
import { ACTIONS } from "../../domain/tasks/tasksReducer";

export function addTask(text) {
  tasksStore.dispatch({
    type: ACTIONS.ADD_TASK,
    payload: {
      id: Date.now(),
      text,
      completed: false,
    },
  });
}
