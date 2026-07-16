import { describe, expect, it } from "vitest";
import { History } from "../application/history/History";
import { createStore } from "../store/createStore";
import { createUndoUseCase } from "../application/tasks/useCases/undo";
import { tasksReducer } from "../domain/tasks/tasksReducer";
import { Task } from "../domain/tasks/entities/task";

describe("undo", () => {
  it("restores the previous state", () => {
    const store = createStore(tasksReducer, []);
    const history = new History<Task[]>();

    const initialTask = Task.create("First");
    const previousState = [initialTask];

    history.push(previousState);

    store.replaceState([...previousState, Task.create("Second")]);

    const undo = createUndoUseCase(store, history);

    const restored = undo();

    expect(restored).toBe(true);
    expect(store.getState()).toEqual(previousState);
  });

  it("returns false when there is no previous state", () => {
    const store = createStore(tasksReducer, []);
    const history = new History<Task[]>();

    const undo = createUndoUseCase(store, history);

    expect(undo()).toBe(false);
    expect(store.getState()).toEqual([]);
  });
});
