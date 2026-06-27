import { describe, it, expect, beforeEach } from "vitest";
import { tasksStore } from "../domain/tasks/tasksStore";
import { addTask } from "../application/tasks/addTask";

beforeEach(() => {
  tasksStore.hydrate([]);
});

describe("addTask use case", () => {
  it("crea tarea", () => {
    addTask("Hola");

    expect(tasksStore.getState()).toHaveLength(1);
  });
});
