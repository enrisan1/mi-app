import { describe, it, expect } from "vitest";
import { tasksReducer, ACTIONS } from "../reducers/tasksReducer";

describe("tasksReducer", () => {
  it("añade una tarea", () => {
    const state = [];

    const action = {
      type: ACTIONS.ADD_TASK,
      payload: {
        id: 1,
        text: "Aprender Vitest",
        completed: false,
      },
    };

    const newState = tasksReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState[0].text).toBe("Aprender Vitest");
  });
});

it("elimina una tarea", () => {
  const state = [
    {
      id: 1,
      text: "Tarea eliminable",
      completed: false,
    },
  ];

  const action = {
    type: ACTIONS.DELETE_TASK,
    payload: 1,
  };

  const newState = tasksReducer(state, action);

  expect(newState).toHaveLength(0);
});

it("marca una tarea como completada", () => {
  const state = [
    {
      id: 1,
      text: "Tarea pendiente",
      completed: false,
    },
  ];

  const action = {
    type: ACTIONS.TOGGLE_TASK,
    payload: 1,
  };

  const newState = tasksReducer(state, action);

  expect(newState[0].completed).toBe(true);
});

it("edita una tarea", () => {
  const state = [
    {
      id: 1,
      text: "Texto antiguo",
      completed: false,
    },
  ];

  const action = {
    type: ACTIONS.EDIT_TASK,
    payload: {
      id: 1,
      text: "Texto nuevo",
    },
  };

  const newState = tasksReducer(state, action);

  expect(newState[0].text).toBe("Texto nuevo");
});

it("elimina tareas completadas", () => {
  const state = [
    {
      id: 1,
      text: "Completada",
      completed: true,
    },
    {
      id: 2,
      text: "Pendiente",
      completed: false,
    },
  ];

  const action = {
    type: ACTIONS.CLEAR_COMPLETED,
  };

  const newState = tasksReducer(state, action);

  expect(newState).toHaveLength(1);
  expect(newState[0].id).toBe(2);
});
