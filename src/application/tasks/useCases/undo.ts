import { History } from "../../history/History";
import type { Store } from "../../../store/types";
import type { Task } from "../../../domain/tasks/entities/task";
import type { TaskAction } from "../../../domain/tasks/tasksReducer";

export function createUndoUseCase(
  store: Store<Task[], TaskAction>,
  history: History<Task[]>,
) {
  return (): boolean => {
    const previousState = history.pop();

    if (!previousState) {
      return false;
    }

    store.replaceState(previousState);

    return true;
  };
}
