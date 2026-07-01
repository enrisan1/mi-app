import { useState } from "react";
import { TasksContext } from "./TasksContext";
import { createTaskActions } from "../../domain/tasks/taskActions";

export function TasksProvider({ store, children }) {
  const actions = createTaskActions(store);
  const [filter, setFilter] = useState("all");

  return (
    <TasksContext.Provider
      value={{
        store,
        actions,
        filter,
        setFilter,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
