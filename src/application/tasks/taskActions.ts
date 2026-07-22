import type { Store } from "../../store/types";
import type { Task } from "../../domain/tasks/entities/task";
import type { Priority } from "../../domain/tasks/entities/Priority";
import { ACTIONS, type TaskAction } from "../../domain/tasks/tasksReducer";
import { selectHasPendingTasks } from "../../domain/tasks/tasksSelectors";
import type { History } from "../history/History";
import type { TaskActions } from "./taskActions.types";

export function createTaskActions(
  store: Store<Task[], TaskAction>,
  history: History<Task[]>,
): TaskActions {
  function dispatchWithHistory(action: TaskAction): void {
    history.push(store.getState());
    store.dispatch(action);
  }

  return {
    addTask(task: Task): void {
      dispatchWithHistory({
        type: ACTIONS.ADD_TASK,
        payload: task,
      });
    },

    deleteTask(id: string): void {
      dispatchWithHistory({
        type: ACTIONS.DELETE_TASK,
        payload: id,
      });
    },

    toggleTask(id: string): void {
      dispatchWithHistory({
        type: ACTIONS.TOGGLE_TASK,
        payload: id,
      });
    },

    editTask(id: string, text: string): void {
      dispatchWithHistory({
        type: ACTIONS.EDIT_TASK,
        payload: { id, text },
      });
    },

    changePriority(id: string, priority: Priority): void {
      dispatchWithHistory({
        type: ACTIONS.CHANGE_PRIORITY,
        payload: { id, priority },
      });
    },

    clearCompleted(): void {
      dispatchWithHistory({
        type: ACTIONS.CLEAR_COMPLETED,
      });
    },

    markAllCompleted(): void {
      dispatchWithHistory({
        type: ACTIONS.MARK_ALL_COMPLETED,
      });
    },

    markAllPending(): void {
      dispatchWithHistory({
        type: ACTIONS.MARK_ALL_PENDING,
      });
    },

    hasPendingTasks(): boolean {
      return selectHasPendingTasks(store.getState());
    },

    undo(): void {
      const previousState = history.undo(store.getState());

      if (previousState !== undefined) {
        store.replaceState(previousState);
      }
    },

    redo(): void {
      const nextState = history.redo(store.getState());

      if (nextState !== undefined) {
        store.replaceState(nextState);
      }
    },

    canUndo(): boolean {
      return history.canUndo();
    },

    canRedo(): boolean {
      return history.canRedo();
    },

    hasUndo(): boolean {
      return history.canUndo();
    },

    hasRedo(): boolean {
      return history.canRedo();
    },
  };
}
