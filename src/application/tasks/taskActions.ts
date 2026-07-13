import { tasksStore } from "./tasksStore";
import type { Store } from "../../store/types";
import type { Task } from "../../domain/tasks/entities/task";
import { ACTIONS, type TaskAction } from "../../domain/tasks/tasksReducer";
import type { TaskActions } from "./taskActions.types";

function createTaskActions(store: Store<Task[], TaskAction>): TaskActions {
  return {
    addTask(task: Task) {
      store.dispatch({
        type: ACTIONS.ADD_TASK,
        payload: task,
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

export const taskActions = createTaskActions(tasksStore);
