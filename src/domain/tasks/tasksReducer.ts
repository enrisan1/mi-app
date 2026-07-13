import { TaskList } from "./entities/taskList";
import { type Task } from "./entities/task";
import { TaskId } from "./entities/taskId";
import { TaskText } from "./entities/taskText";

export const ACTIONS = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  TOGGLE_TASK: "TOGGLE_TASK",
  EDIT_TASK: "EDIT_TASK",
  CLEAR_COMPLETED: "CLEAR_COMPLETED",
  MARK_ALL_COMPLETED: "MARK_ALL_COMPLETED",
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
    }
  | {
      type: typeof ACTIONS.MARK_ALL_COMPLETED;
    };

export type TasksState = Task[];

export function tasksReducer(
  state: TasksState,
  action: TaskAction,
): TasksState {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...TaskList.from(state).add(action.payload).getItems()];

    case ACTIONS.DELETE_TASK:
      return [
        ...TaskList.from(state).remove(TaskId.from(action.payload)).getItems(),
      ];

    case ACTIONS.TOGGLE_TASK:
      return [
        ...TaskList.from(state).toggle(TaskId.from(action.payload)).getItems(),
      ];

    case ACTIONS.MARK_ALL_COMPLETED:
      return state.map((task) => task.complete());

    case ACTIONS.EDIT_TASK:
      return [
        ...TaskList.from(state)
          .rename(
            TaskId.from(action.payload.id),
            TaskText.create(action.payload.text),
          )
          .getItems(),
      ];

    case ACTIONS.CLEAR_COMPLETED:
      return [...TaskList.from(state).clearCompleted().getItems()];

    default:
      return state;
  }
}
