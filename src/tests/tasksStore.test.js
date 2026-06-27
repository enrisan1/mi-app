import { describe, it, expect, beforeEach } from "vitest";
import { tasksStore } from "../domain/tasks/tasksStore";
import { ACTIONS } from "../domain/tasks/tasksReducer";

beforeEach(() => {
  tasksStore.hydrate([]);
});

describe("tasksStore (staff level)", () => {
  it("añade tarea", () => {
    tasksStore.dispatch({
      type: ACTIONS.ADD_TASK,
      payload: { id: 1, text: "A", completed: false },
    });

    expect(tasksStore.getState()).toHaveLength(1);
  });

  it("toggle funciona", () => {
    tasksStore.dispatch({
      type: ACTIONS.ADD_TASK,
      payload: { id: 1, text: "A", completed: false },
    });

    tasksStore.dispatch({
      type: ACTIONS.TOGGLE_TASK,
      payload: 1,
    });

    expect(tasksStore.getState()[0].completed).toBe(true);
  });
});
