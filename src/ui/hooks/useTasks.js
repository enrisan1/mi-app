import { useEffect, useState } from "react";
import { tasksStore } from "../../domain/tasks/tasksStore";
import { getAllTasks } from "../../domain/tasks/tasksSelectors";

export function useTasks() {
  const [state, setState] = useState(tasksStore.getState());

  useEffect(() => {
    const unsubscribe = tasksStore.subscribe(setState);
    return unsubscribe;
  }, []);

  return {
    tasks: getAllTasks(state),
    addTask: (text) =>
      import("../../application/tasks/addTask").then((m) => m.addTask(text)),

    toggleTask: (id) =>
      import("../../application/tasks/toggleTask").then((m) =>
        m.toggleTask(id),
      ),
  };
}
