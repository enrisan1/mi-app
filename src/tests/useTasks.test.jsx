import { renderHook, act } from "@testing-library/react";
import { TasksProvider } from "../ui/context/TasksProvider";
import { useTasks } from "../ui/hooks/useTasks";
import { tasksStore } from "../domain/tasks/tasksStore";

const wrapper = ({ children }) => <TasksProvider>{children}</TasksProvider>;

beforeEach(() => {
  act(() => {
    tasksStore.clear();
  });
});

describe("useTasks (senior architecture)", () => {
  test("añade y lista tareas", () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    expect(result.current.tasks).toHaveLength(2);
  });

  test("toggle funciona correctamente", () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask("A");
    });

    const taskId = result.current.tasks[0].id;

    act(() => {
      result.current.toggleTask(taskId);
    });

    expect(result.current.tasks[0].completed).toBe(true);
  });

  test("filtro completed funciona", () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    const taskId = result.current.tasks.find((t) => t.text === "B").id;

    act(() => {
      result.current.toggleTask(taskId);
    });

    act(() => {
      result.current.setFilter("completed");
    });

    expect(result.current.filteredTasks).toHaveLength(1);
    expect(result.current.filteredTasks[0].text).toBe("B");
  });
});
