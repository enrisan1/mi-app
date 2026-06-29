import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TasksProvider } from "./ui/context/TasksContext";
import { tasksStore } from "./domain/tasks/tasksStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TasksProvider store={tasksStore}>
      <App />
    </TasksProvider>
  </React.StrictMode>,
);
