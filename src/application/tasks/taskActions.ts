import { History } from "../history/History";
import type { Store } from "../../store/types";
import type { Task } from "../../domain/tasks/entities/task";
import { ACTIONS, type TaskAction } from "../../domain/tasks/tasksReducer";
import type { TaskActions } from "./taskActions.types";
import { selectHasPendingTasks } from "../../domain/tasks/tasksSelectors";

function createTaskActions(
  store: Store<Task[], TaskAction>,
  history: History<Task[]>,
): TaskActions {
  function dispatchWithHistory(action: TaskAction): void {
    history.push(store.getState());
    store.dispatch(action);
  }
  return {
    addTask(task: Task) {
      dispatchWithHistory({
        type: ACTIONS.ADD_TASK,
        payload: task,
      });
    },

    deleteTask(id: string) {
      dispatchWithHistory({
        type: ACTIONS.DELETE_TASK,
        payload: id,
      });
    },
    toggleTask(id: string) {
      dispatchWithHistory({
        type: ACTIONS.TOGGLE_TASK,
        payload: id,
      });
    },

    editTask(id: string, text: string) {
      dispatchWithHistory({
        type: ACTIONS.EDIT_TASK,
        payload: { id, text },
      });
    },

    clearCompleted() {
      dispatchWithHistory({
        type: ACTIONS.CLEAR_COMPLETED,
      });
    },

    markAllCompleted() {
      dispatchWithHistory({
        type: ACTIONS.MARK_ALL_COMPLETED,
      });
    },

    markAllPending() {
      dispatchWithHistory({
        type: ACTIONS.MARK_ALL_PENDING,
      });
    },

    hasPendingTasks() {
      return selectHasPendingTasks(store.getState());
    },
  };
}

export { createTaskActions };
