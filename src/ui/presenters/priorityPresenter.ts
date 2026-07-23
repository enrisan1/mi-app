import type { Priority } from "../../domain/tasks/entities/Priority";

export function getPriorityLabel(priority: Priority): string {
  switch (priority.toString()) {
    case "low":
      return "Baja";

    case "medium":
      return "Media";

    case "high":
      return "Alta";
  }
}
