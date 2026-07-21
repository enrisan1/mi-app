import type { PriorityValue } from "../../domain/tasks/entities/Priority";

export type StoredTask = {
  id: string;
  text: string;
  completed: boolean;
  priority?: PriorityValue;
};
