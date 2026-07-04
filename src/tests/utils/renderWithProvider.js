import { render } from "@testing-library/react";
import { TasksProvider } from "../../ui/context/TasksProvider";
import { tasksStore } from "../domain/tasks/tasksStore";

export function renderWithProvider(ui) {
  return render(<TasksProvider store={tasksStore}>{ui}</TasksProvider>);
}
