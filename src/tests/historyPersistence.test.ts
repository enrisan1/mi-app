import { beforeEach, describe, expect, it, vi } from "vitest";
import { History } from "../application/history/History";
import { createTaskActions } from "../application/tasks/taskActions";
import { Task } from "../domain/tasks/entities/task";
import { tasksReducer, type TaskAction } from "../domain/tasks/tasksReducer";
import { localStorageTaskRepository } from "../infrastructure/taskRepository/localStorageTaskRepository";
import { createStore } from "../store/createStore";

describe("history persistence", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("persists the state restored by undo", () => {
    const saveSpy = vi.spyOn(localStorageTaskRepository, "save");

    const store = createStore<Task[], TaskAction>(tasksReducer, []);

    store.subscribe(() => {
      localStorageTaskRepository.save(store.getState());
    });

    const history = new History<Task[]>();
    const actions = createTaskActions(store, history);

    actions.addTask(Task.create("Comprar pan"));

    saveSpy.mockClear();

    actions.undo();

    expect(store.getState()).toEqual([]);
    expect(saveSpy).toHaveBeenCalledWith([]);
  });

  it("persists the state restored by redo", () => {
    const saveSpy = vi.spyOn(localStorageTaskRepository, "save");

    const store = createStore<Task[], TaskAction>(tasksReducer, []);

    store.subscribe(() => {
      localStorageTaskRepository.save(store.getState());
    });

    const history = new History<Task[]>();
    const actions = createTaskActions(store, history);

    actions.addTask(Task.create("Comprar pan"));
    actions.undo();

    saveSpy.mockClear();

    actions.redo();

    expect(store.getState()).toHaveLength(1);
    expect(saveSpy).toHaveBeenCalledWith(store.getState());
  });
});
