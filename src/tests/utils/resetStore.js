import { tasksStore } from "../../application/tasks/tasksStore";
export function resetStore() {
  tasksStore.replaceState([]);
}
