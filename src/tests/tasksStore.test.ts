import { Task } from "../domain/tasks/entities/task";
import { beforeEach, describe, expect, it } from "vitest";

import { tasksStore } from "../application/tasks/tasksStore";
import { ACTIONS } from "../domain/tasks/tasksReducer";

beforeEach(() => {
  tasksStore.replaceState([]);
});

describe("tasksStore", () => {
  it("añade una tarea", () => {
    tasksStore.dispatch({
      type: ACTIONS.ADD_TASK,
      payload: Task.restore({
        id: "1",
        text: "A",
        completed: false,
      }),
    });

    expect(tasksStore.getState()).toHaveLength(1);
  });

  it("toggle funciona", () => {
    tasksStore.dispatch({
      type: ACTIONS.ADD_TASK,
      payload: Task.restore({
        id: "1",
        text: "A",
        completed: false,
      }),
    });

    tasksStore.dispatch({
      type: ACTIONS.TOGGLE_TASK,
      payload: "1",
    });

    const state = tasksStore.getState();

    expect(state).toHaveLength(1);
    expect(state[0]!.completed).toBe(true);
  });

  it("markAllCompleted completa todas las tareas", () => {
    tasksStore.dispatch({
      type: ACTIONS.ADD_TASK,
      payload: Task.restore({
        id: "1",
        text: "A",
        completed: false,
      }),
    });

    tasksStore.dispatch({
      type: ACTIONS.ADD_TASK,
      payload: Task.restore({
        id: "2",
        text: "B",
        completed: false,
      }),
    });

    tasksStore.dispatch({
      type: ACTIONS.MARK_ALL_COMPLETED,
    });

    const state = tasksStore.getState();

    expect(state.every((task) => task.completed)).toBe(true);
  });

  it("markAllPending deja todas las tareas como pendientes", () => {
    tasksStore.dispatch({
      type: ACTIONS.ADD_TASK,
      payload: Task.restore({
        id: "1",
        text: "A",
        completed: true,
      }),
    });

    tasksStore.dispatch({
      type: ACTIONS.ADD_TASK,
      payload: Task.restore({
        id: "2",
        text: "B",
        completed: true,
      }),
    });

    tasksStore.dispatch({
      type: ACTIONS.MARK_ALL_PENDING,
    });

    const state = tasksStore.getState();

    expect(state.every((task) => !task.completed)).toBe(true);
  });
});
