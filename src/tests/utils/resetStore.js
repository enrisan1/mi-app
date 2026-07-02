import { tasksStore } from "../domain/tasks/tasksStoreInstance";

export function resetStore() {
  tasksStore.replaceState([]);
}
