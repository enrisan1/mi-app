import { beforeEach, vi } from "vitest";
import { taskStorage } from "../utils/taskStorage";

beforeEach(() => {
  vi.clearAllMocks();
  taskStorage.clear();
});
