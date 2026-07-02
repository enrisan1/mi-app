import { useMemo, useSyncExternalStore } from "react";
import { TasksContext } from "./TasksContext";
import { tasksStore } from "../../domain/tasks/tasksStore";
import { createTaskActions } from "../../domain/tasks/taskActions";
import type { TasksState } from "../../domain/tasks/tasksReducer";

type Props = {
  children: React.ReactNode;
};

export function TasksProvider({ children }: Props) {
  const state = useSyncExternalStore(
    tasksStore.subscribe,
    tasksStore.getState,
    tasksStore.getState,
  ) as TasksState;

  const actions = useMemo(() => createTaskActions(tasksStore), []);

  const value = useMemo(
    () => ({
      state,
      ...actions,
      dispatch: tasksStore.dispatch,
      clear: tasksStore.clear,
      hydrate: tasksStore.hydrate,
    }),
    [state, actions],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
