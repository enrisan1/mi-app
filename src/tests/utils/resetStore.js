import { tasksStore } from "../domain/tasks/tasksStore";

export function resetStore() {
  tasksStore.replaceState([]);
}
