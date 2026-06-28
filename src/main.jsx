import { TasksProvider } from "./ui/context/TasksContext";
import { tasksStore } from "./domain/tasks/tasksStore";

root.render(
  <TasksProvider store={tasksStore}>
    <App />
  </TasksProvider>,
);
