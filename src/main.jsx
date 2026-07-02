import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TasksProvider } from "./ui/context/TasksProvider";
import { tasksStore } from "./domain/tasks/tasksStoreInstance";
import { tasksStorage } from "./infrastructure/tasksStorage";

tasksStore.hydrate(tasksStorage.load());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TasksProvider store={tasksStore}>
      <App />
    </TasksProvider>
  </React.StrictMode>,
);
