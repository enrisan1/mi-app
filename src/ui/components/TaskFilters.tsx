import type { TaskFilter } from "../../domain/tasks/taskFilter";

interface TaskFiltersProps {
  filter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
}

export default function TaskFilters({
  filter,
  onFilterChange,
}: TaskFiltersProps) {
  return (
    <div className="filters">
      <button onClick={() => onFilterChange("all")}>
        Todas {filter === "all" && "✓"}
      </button>

      <button onClick={() => onFilterChange("active")}>
        Activas {filter === "active" && "✓"}
      </button>

      <button onClick={() => onFilterChange("completed")}>
        Completadas {filter === "completed" && "✓"}
      </button>
    </div>
  );
}
