import { beforeEach, describe, expect, it } from "vitest";

import { tasksStore } from "../domain/tasks/tasksStore";
import { ACTIONS } from "../domain/tasks/tasksReducer";

beforeEach(() => {
  tasksStore.replaceState([]);
});

describe("tasksStore", () => {
  it("añade una tarea", () => {
    tasksStore.dispatch({
      type: ACTIONS.ADD_TASK,
      payload: {
        id: "1",
        text: "A",
        completed: false,
      },
    });

    expect(tasksStore.getState()).toHaveLength(1);
  });

  it("toggle funciona", () => {
    tasksStore.dispatch({
      type: ACTIONS.ADD_TASK,
      payload: {
        id: "1",
        text: "A",
        completed: false,
      },
    });

    tasksStore.dispatch({
      type: ACTIONS.TOGGLE_TASK,
      payload: "1",
    });

    const state = tasksStore.getState();

    expect(state).toHaveLength(1);
    expect(state[0]!.completed).toBe(true);
  });
});
