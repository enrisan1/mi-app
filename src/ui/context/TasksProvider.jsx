import { TasksContext } from "./TasksContext";
import { createTaskActions } from "../../domain/tasks/taskActions";

export function TasksProvider({ store, children }) {
  const actions = createTaskActions(store);

  return (
    <TasksContext.Provider value={{ store, actions }}>
      {children}
    </TasksContext.Provider>
  );
}
