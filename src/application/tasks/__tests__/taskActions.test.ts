import { beforeEach, describe, expect, it } from "vitest";
import { createTaskActions } from "../taskActions";
import { History } from "../../history/History";
import { createStore } from "../../../store/createStore";
import { Task } from "../../../domain/tasks/entities/task";
import { Priority } from "../../../domain/tasks/entities/Priority";
import {
  tasksReducer,
  type TaskAction,
} from "../../../domain/tasks/tasksReducer";
import type { Store } from "../../../store/types";

function getFirstTask(tasks: Task[]): Task {
  const task = tasks[0];

  if (task === undefined) {
    throw new Error("Expected at least one task");
  }

  return task;
}

describe("TaskActions", () => {
  let store: Store<Task[], TaskAction>;
  let history: History<Task[]>;
  let actions: ReturnType<typeof createTaskActions>;

  beforeEach(() => {
    store = createStore(tasksReducer, []);
    history = new History<Task[]>();
    actions = createTaskActions(store, history);
  });

  describe("addTask", () => {
    it("adds a task to the store", () => {
      const task = Task.create("Test task", Priority.medium());

      actions.addTask(task);

      const addedTask = getFirstTask(store.getState());

      expect(store.getState()).toHaveLength(1);
      expect(addedTask.text.toString()).toBe("Test task");
      expect(addedTask.completed).toBe(false);
      expect(addedTask.priority.equals(Priority.medium())).toBe(true);
    });

    it("stores the previous state in history", () => {
      const task = Task.create("Test task", Priority.medium());

      actions.addTask(task);

      expect(history.canUndo()).toBe(true);

      actions.undo();

      expect(store.getState()).toEqual([]);
    });
  });

  describe("toggleTask", () => {
    it("toggles the task completion status", () => {
      const task = Task.create("Test task", Priority.medium());

      actions.addTask(task);

      const taskId = getFirstTask(store.getState()).id.toString();

      actions.toggleTask(taskId);

      expect(getFirstTask(store.getState()).completed).toBe(true);

      actions.toggleTask(taskId);

      expect(getFirstTask(store.getState()).completed).toBe(false);
    });

    it("does not change the state if the task does not exist", () => {
      const task = Task.create("Test task", Priority.medium());

      actions.addTask(task);

      const previousState = store.getState();

      actions.toggleTask("non-existent-id");

      expect(store.getState()).toEqual(previousState);
    });
  });

  describe("deleteTask", () => {
    it("deletes a task from the store", () => {
      const task = Task.create("Test task", Priority.medium());

      actions.addTask(task);
      actions.deleteTask(task.id.toString());

      expect(store.getState()).toHaveLength(0);
    });

    it("does not change the state if the task does not exist", () => {
      const task = Task.create("Test task", Priority.medium());

      actions.addTask(task);

      const previousState = store.getState();

      actions.deleteTask("non-existent-id");

      expect(store.getState()).toEqual(previousState);
    });
  });

  describe("editTask", () => {
    it("edits the task text", () => {
      const task = Task.create("Original text", Priority.medium());

      actions.addTask(task);
      actions.editTask(task.id.toString(), "Edited text");

      const editedTask = getFirstTask(store.getState());

      expect(editedTask.text.toString()).toBe("Edited text");
    });

    it("does not change the state if the task does not exist", () => {
      const task = Task.create("Original text", Priority.medium());

      actions.addTask(task);

      const previousState = store.getState();

      actions.editTask("non-existent-id", "Edited text");

      expect(store.getState()).toEqual(previousState);
    });
  });

  describe("changePriority", () => {
    it("changes the task priority", () => {
      const task = Task.create("Test task", Priority.low());

      actions.addTask(task);
      actions.changePriority(task.id.toString(), Priority.high());

      const updatedTask = getFirstTask(store.getState());

      expect(updatedTask.priority.equals(Priority.high())).toBe(true);
    });
  });

  describe("clearCompleted", () => {
    it("removes completed tasks", () => {
      const firstTask = Task.create("Task 1", Priority.medium());
      const secondTask = Task.create("Task 2", Priority.medium());

      actions.addTask(firstTask);
      actions.addTask(secondTask);
      actions.toggleTask(firstTask.id.toString());

      actions.clearCompleted();

      const remainingTasks = store.getState();

      expect(remainingTasks).toHaveLength(1);
      expect(getFirstTask(remainingTasks).text.toString()).toBe("Task 2");
    });

    it("keeps all tasks if none are completed", () => {
      actions.addTask(Task.create("Task 1", Priority.medium()));
      actions.addTask(Task.create("Task 2", Priority.medium()));

      actions.clearCompleted();

      expect(store.getState()).toHaveLength(2);
    });
  });

  describe("history", () => {
    it("undoes the last action", () => {
      actions.addTask(Task.create("Test task", Priority.medium()));

      expect(store.getState()).toHaveLength(1);
      expect(actions.canUndo()).toBe(true);

      actions.undo();

      expect(store.getState()).toHaveLength(0);
      expect(actions.canRedo()).toBe(true);
    });

    it("redoes the last undone action", () => {
      actions.addTask(Task.create("Test task", Priority.medium()));

      actions.undo();
      actions.redo();

      expect(store.getState()).toHaveLength(1);
      expect(getFirstTask(store.getState()).text.toString()).toBe("Test task");
    });

    it("does nothing when there is nothing to undo", () => {
      actions.undo();

      expect(store.getState()).toEqual([]);
    });

    it("does nothing when there is nothing to redo", () => {
      actions.redo();

      expect(store.getState()).toEqual([]);
    });
  });
});
