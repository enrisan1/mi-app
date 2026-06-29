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

  it("elimina una tarea", () => {
    const state = [{ id: 1, text: "Tarea eliminable", completed: false }];

    const action = {
      type: ACTIONS.DELETE_TASK,
      payload: 1,
    };

    const newState = tasksReducer(state, action);

    expect(newState).toHaveLength(0);
  });

  it("marca una tarea como completada", () => {
    const state = [{ id: 1, text: "Tarea pendiente", completed: false }];

    const action = {
      type: ACTIONS.TOGGLE_TASK,
      payload: 1,
    };

    const newState = tasksReducer(state, action);

    expect(newState[0].completed).toBe(true);
  });

  it("edita una tarea", () => {
    const state = [{ id: 1, text: "Texto antiguo", completed: false }];

    const action = {
      type: ACTIONS.EDIT_TASK,
      payload: { id: 1, text: "Texto nuevo" },
    };

    const newState = tasksReducer(state, action);

    expect(newState[0].text).toBe("Texto nuevo");
  });

  it("elimina tareas completadas", () => {
    const state = [
      { id: 1, text: "Completada", completed: true },
      { id: 2, text: "Pendiente", completed: false },
    ];

    const action = {
      type: ACTIONS.CLEAR_COMPLETED,
    };

    const newState = tasksReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState[0].id).toBe(2);
  });

  it("devuelve el mismo estado para una acción desconocida", () => {
    const initialState = [{ id: 1, text: "Aprender React", completed: false }];

    const result = tasksReducer(initialState, {
      type: "UNKNOWN_ACTION",
    });

    expect(result).toBe(initialState);
  });

  it("TOGGLE_TASK solo modifica la tarea indicada", () => {
    const initialState = [
      { id: 1, text: "React", completed: false },
      { id: 2, text: "Vitest", completed: false },
    ];

    const result = tasksReducer(initialState, {
      type: ACTIONS.TOGGLE_TASK,
      payload: 1,
    });

    expect(result[0].completed).toBe(true);
    expect(result[1].completed).toBe(false);

    expect(result[0]).not.toBe(initialState[0]);
    expect(result[1]).toBe(initialState[1]);
  });

  it("EDIT_TASK solo modifica la tarea indicada", () => {
    const initialState = [
      { id: 1, text: "React", completed: false },
      { id: 2, text: "Vitest", completed: false },
    ];

    const result = tasksReducer(initialState, {
      type: ACTIONS.EDIT_TASK,
      payload: { id: 1, text: "React avanzado" },
    });

    expect(result[0].text).toBe("React avanzado");
    expect(result[1].text).toBe("Vitest");

    expect(result[0]).not.toBe(initialState[0]);
    expect(result[1]).toBe(initialState[1]);
  });

  it("TOGGLE_TASK con id inexistente no modifica estado", () => {
    const state = [{ id: 1, text: "A", completed: false }];

    const result = tasksReducer(state, {
      type: ACTIONS.TOGGLE_TASK,
      payload: 999,
    });

    expect(result).toEqual(state);
    expect(result).not.toBe(state);
  });

  it("EDIT_TASK con id inexistente no modifica estado", () => {
    const state = [{ id: 1, text: "A", completed: false }];

    const result = tasksReducer(state, {
      type: ACTIONS.EDIT_TASK,
      payload: { id: 999, text: "X" },
    });

    expect(result).toEqual(state);
    expect(result).not.toBe(state);
  });

  it("CLEAR_COMPLETED elimina todo si todas están completadas", () => {
    const state = [
      { id: 1, text: "A", completed: true },
      { id: 2, text: "B", completed: true },
    ];

    const result = tasksReducer(state, {
      type: ACTIONS.CLEAR_COMPLETED,
    });

    expect(result).toHaveLength(0);
  });

  it("no rompe con estado vacío", () => {
    expect(
      tasksReducer([], {
        type: ACTIONS.DELETE_TASK,
        payload: 1,
      }),
    ).toEqual([]);
  });
});
