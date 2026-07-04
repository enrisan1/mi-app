import { useMemo, useState, useSyncExternalStore } from "react";
import { TasksContext } from "./TasksContext";
import { tasksStore } from "../../domain/tasks/tasksStore";
import { createTaskActions } from "../../domain/tasks/taskActions";

type Props = {
  children: React.ReactNode;
};

type Filter = "all" | "pending" | "completed";

export function TasksProvider({ children }: Props) {
  const tasks = useSyncExternalStore(
    tasksStore.subscribe,
    tasksStore.getState,
    tasksStore.getState,
  );

  const [filter, setFilter] = useState<Filter>("all");

  const actions = useMemo(() => createTaskActions(tasksStore), []);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "pending":
        return tasks.filter((t) => !t.completed);
      case "completed":
        return tasks.filter((t) => t.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      filter,
      setFilter,
      ...actions,
    }),
    [tasks, filter, actions],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
