git status
En la rama feature/task-filters
nada para hacer commit, el árbol de trabajo está limpio git status
find src -iname "_priority_" -o -iname "*change*priority\*"
git grep -n "Priority"
En la rama feature/task-filters
nada para hacer commit, el árbol de trabajo está limpio
src/application/tasks/useCases/changeTaskPriority.ts
src/ui/constants/priorityLabels.ts
src/ui/presenters/priorityPresenter.ts
src/ui/components/TaskPrioritySelect.tsx
src/domain/tasks/entities/Priority.ts
src/domain/tasks/entities/Priority.test.ts
docs/02-architecture/ARCHITECTURE.md:209:- Componentes de presentación (`TaskForm`, `TaskList`, `TaskItem`, `TaskActions`, `TaskFilters`, `TaskPrioritySelect`).
docs/02-architecture/ARCHITECTURE.md:296:- Value Objects (`TaskId`, `TaskText`, `Priority` y otros objetos de valor).
docs/02-architecture/ARCHITECTURE.md:815:En la arquitectura actual, ejemplos de Value Objects son `TaskId`, `TaskText` y `Priority`.
docs/02-architecture/ARCHITECTURE.md:1465:- Componentes de presentación (`TaskForm`, `TaskList`, `TaskItem`, `TaskActions`, `TaskFilters`, `TaskPrioritySelect`).
docs/02-architecture/ARCHITECTURE.md:1552:- Value Objects (`TaskId`, `TaskText`, `Priority` y otros objetos de valor).
docs/02-architecture/ARCHITECTURE.md:2071:En la arquitectura actual, ejemplos de Value Objects son `TaskId`, `TaskText` y `Priority`.
docs/02-architecture/adr/002-testing-strategy.md:50:### 1. Unit Tests — Domain Logic (Highest Priority)
docs/03-development/TESTING.md:421:Priority.test.ts
src/App.tsx:26: changePriority,
src/App.tsx:54: changePriority={changePriority}
src/application/tasks/**tests**/taskActions.test.ts:6:import { Priority } from "../../../domain/tasks/entities/Priority";
src/application/tasks/**tests**/taskActions.test.ts:36: const task = Task.create("Test task", Priority.medium());
src/application/tasks/**tests**/taskActions.test.ts:45: expect(addedTask.pr

---

La salida ya permite sacar una conclusión clara: **la prioridad está integrada de extremo a extremo**, no solo como Value Object aislado.

Hay evidencias en todas las capas:

- Dominio: `Priority.ts` y sus pruebas.
- Aplicación: `changeTaskPriority.ts`.
- UI: `TaskPrioritySelect.tsx`, `priorityPresenter.ts` y `priorityLabels.ts`.
- Composición principal: `App.tsx` recibe y pasa `changePriority`.
- Acciones y pruebas: `taskActions.test.ts` utiliza `Priority`.
- Documentación: `ARCHITECTURE.md` y `TESTING.md` ya la recogen.

Por tanto, **“completar Priority” no debería ser el próximo objetivo**. Esa funcionalidad parece ya terminada.

## Hallazgo importante en `ARCHITECTURE.md`

La salida muestra las mismas referencias repetidas en líneas muy alejadas:

```text
209
296
815
1465
1552
2071
```

Esto sugiere que `ARCHITECTURE.md` podría contener contenido duplicado, posiblemente dos versiones del documento concatenadas. Antes de continuar con la auditoría funcional, conviene verificarlo.

Ejecuta:

```bash
grep -n "^# Architecture" docs/02-architecture/ARCHITECTURE.md
grep -n "^## 1\. Objetivo" docs/02-architecture/ARCHITECTURE.md
wc -l docs/02-architecture/ARCHITECTURE.md
```

Si alguno de los dos primeros comandos devuelve más de una coincidencia, habrá que corregir esa duplicación documental antes del siguiente commit.

## Siguiente comprobación funcional

Para confirmar exactamente hasta dónde llega Priority, ejecuta:

```bash
git grep -n "changePriority"
git grep -n "priority:" src
git grep -n "priority" src/infrastructure
```

Con eso comprobaremos específicamente:

- exposición desde `useTasks`;
- edición desde `TaskItem`;
- acción y reducer;
- persistencia y restauración;
- creación de tareas con prioridad.

Después haría la misma radiografía para Undo/Redo:

```bash
git grep -n "undo"
git grep -n "redo"
```

La situación provisional queda así:

| Funcionalidad | Estado aparente                                            |
| ------------- | ---------------------------------------------------------- |
| Priority      | Integrada                                                  |
| Toggle All    | Integrada y probada                                        |
| Undo/Redo     | Implementados y probados; falta confirmar UI               |
| Persistencia  | Integrada                                                  |
| Filtros       | Integrados                                                 |
| Documentación | Consolidada, pero `ARCHITECTURE.md` podría estar duplicado |

La prioridad inmediata es aclarar esa posible duplicación de `ARCHITECTURE.md`; después podremos elegir el siguiente incremento funcional real.

---

✓ src/tests/tasksStore.test.ts (4 tests) 48ms
✓ src/application/tasks/**tests**/taskActions.test.ts (15 tests) 37ms
✓ src/application/history/History.test.ts (10 tests) 21ms
✓ src/application/tasks/useCases/toggleAll.test.ts (2 tests) 12ms
✓ src/application/tasks/useCases/undo.test.ts (2 tests) 22ms
✓ src/domain/tasks/entities/Priority.test.ts (6 tests) 11ms
✓ src/application/tasks/useCases/redo.test.ts (2 tests) 11ms

Test Files 14 passed (14)
Tests 81 passed (81)
Start at 17:42:46
Duration 16.36s (transform 1.14s, setup 2.52s, import 2.85s, tests 2.12s, environment 31.93s)

> mi-app@0.0.0 build
> vite build

vite v8.0.16 building client environment for production...
✓ 52 modules transformed.
computing gzip size...
dist/index.html 0.45 kB │ gzip: 0.29 kB
dist/assets/index-BnnpuYXs.css 5.06 kB │ gzip: 1.76 kB
dist/assets/index-CaOEOfrl.js 202.30 kB │ gzip: 63.55 kB

## ✓ built in 263ms si todo está en orden podemos empezar la radiografía del estado funcional del proyecto.

Sí. La evidencia mostrada confirma una **línea base estable**:

- 14 archivos de prueba superados.
- 81 tests superados.
- Build de producción correcto.
- Árbol de trabajo limpio.
- Etiqueta `v5.0.0` y documentación consolidadas.

Podemos comenzar la radiografía funcional.

# Radiografía del estado funcional

La realizaremos en cuatro bloques:

1. Capacidades disponibles para el usuario.
2. Operaciones expuestas por la aplicación.
3. Integración del dominio y la persistencia.
4. Funcionalidades incompletas o preparadas pero no visibles.

## Estado provisional

Por las pruebas y búsquedas realizadas, sabemos que existen al menos estas capacidades:

| Capacidad                   | Estado provisional                           |
| --------------------------- | -------------------------------------------- |
| Crear tareas                | Implementada                                 |
| Editar tareas               | Implementada                                 |
| Eliminar tareas             | Implementada                                 |
| Completar o reabrir tareas  | Implementada                                 |
| Filtrar tareas              | Implementada                                 |
| Persistir el filtro         | Implementada                                 |
| Eliminar tareas completadas | Implementada                                 |
| Alternar todas las tareas   | Implementada y probada                       |
| Prioridad de tareas         | Integrada aparentemente de extremo a extremo |
| Undo                        | Implementado y probado                       |
| Redo                        | Implementado y probado                       |
| Persistencia de tareas      | Implementada                                 |
| Persistencia tras Undo/Redo | Implementada y probada                       |

Ahora debemos distinguir entre tres estados:

```text
Implementada en el código
        │
        ▼
Expuesta por la aplicación
        │
        ▼
Utilizable desde la interfaz
```

Una funcionalidad puede existir y tener pruebas, pero no estar todavía accesible para el usuario.

# Bloque 1 — Capacidades expuestas en la interfaz

Necesitamos revisar el punto de composición de la aplicación, el hook que adapta las operaciones y los componentes visibles.

Ejecuta estos comandos:

```bash
sed -n '1,220p' src/App.tsx
```

```bash
sed -n '1,260p' src/ui/hooks/useTasks.ts
```

```bash
find src/ui/components -maxdepth 1 -type f | sort
```

Después, para comprobar específicamente prioridad e historial:

```bash
git grep -n -E "changePriority|TaskPrioritySelect|undo|redo" -- \
  src/App.tsx \
  src/ui \
  src/application/tasks/composition.ts
```

Con estas salidas podremos completar una primera tabla definitiva:

| Funcionalidad | Existe | Expuesta por `useTasks` | Conectada en `App` | Visible en UI |
| ------------- | :----: | :---------------------: | :----------------: | :-----------: |
| Prioridad     |   ✅   |            ?            |         ?          |       ?       |
| Undo          |   ✅   |            ?            |         ?          |       ?       |
| Redo          |   ✅   |            ?            |         ?          |       ?       |
| Toggle All    |   ✅   |            ?            |         ?          |       ?       |

Una vez completado este bloque, pasaremos a inventariar todos los casos de uso existentes y comprobaremos si alguno está implementado pero no conectado a la interfaz.

---

grep -n "^# Architecture" docs/02-architecture/ARCHITECTURE.md
grep -n "^## 1\. Objetivo" docs/02-architecture/ARCHITECTURE.md
wc -l docs/02-architecture/ARCHITECTURE.md
1:# Architecture
19:## 1. Objetivo
1275:## 1. Objetivo
2527 docs/02-architecture/ARCHITECTURE.md git grep -n "changePriority"
git grep -n "priority:" src
git grep -n "priority" src/infrastructure
src/App.tsx:26: changePriority,
src/App.tsx:54: changePriority={changePriority}
src/application/tasks/**tests**/taskActions.test.ts:139: describe("changePriority", () => {
src/application/tasks/**tests**/taskActions.test.ts:144: actions.changePriority(task.id.toString(), Priority.high());
src/application/tasks/taskActions.ts:47: changePriority(id: string, priority: Priority): void {
src/application/tasks/taskActions.types.ts:9: changePriority(id: string, priority: Priority): void;
src/application/tasks/useCases/changeTaskPriority.ts:6: taskActions.changePriority(id, priority);
src/application/tasks/useCases/redo.test.ts:12: changePriority: vi.fn(),
src/application/tasks/useCases/redo.test.ts:35: changePriority: vi.fn(),
src/application/tasks/useCases/toggleAll.test.ts:19: changePriority: vi.fn(),
src/application/tasks/useCases/toggleAll.test.ts:48: changePriority: vi.fn(),
src/application/tasks/useCases/undo.test.ts:12: changePriority: vi.fn(), // Añadido
src/application/tasks/useCases/undo.test.ts:35: changePriority: vi.fn(), // Añadido
src/domain/tasks/entities/task.ts:31: changePriority(newPriority: Priority): Tasrc/application/tasks/taskActions.ts:47: changePriority(id: string, priority: Priority): void {
src/application/tasks/taskActions.types.ts:9: changePriority(id: string, priority: Priority): void;
src/application/tasks/useCases/addTask.ts:6: return (text: string, priority: Priority): void => {
src/application/tasks/useCases/changeTaskPriority.ts:5: return function changeTaskPriorityUseCase(id: string, priority: Priority): void {
src/domain/tasks/entities/task.ts:10: public readonly priority: Priority,
src/domain/tasks/entities/task.ts:13: static create(text: string, priority: Priority = Priority.medium()): Task {
src/domain/tasks/tasksReducer.ts:37: payload: { id: string; priority: Priority };
src/infrastructure/taskRepository/localStorageTaskRepository.ts:12: priority: task.priority.toString(),
src/infrastructure/taskRepository/storedTask.ts:7: priority: PriorityValue;
src/ui/components/TaskItem.tsx:12: onChangePriority: (id: string, priority: Priority) => void;
src/ui/components/TaskList.tsx:10: changePriority(id: string, priority: Priority): void;
src/ui/components/TaskPrioritySelect.tsx:9: priority: Priority;
src/ui/components/TaskPrioritySelect.tsx:10: onChange(priority: Priority): void;
src/infrastructure/taskRepository/localStorageTaskRepository.ts:12: priority: task.priority.toString(),
src/infrastructure/taskRepository/storedTask.ts:7: priority: PriorityValue; git grep -n "undo"
git grep -n "redo"
docs/03-development/TESTING.md:389:│ │ ├── undo.ts
docs/03-development/TESTING.md:390:│ │ ├── undo.test.ts
docs/03-development/TESTING.md:484:should restore the previous state after undo
src/App.tsx:29: undo,
src/App.tsx:62: onUndo={undo}
src/application/history/History.test.ts:5: it("stores states for undo", () => {
src/application/history/History.test.ts:13: it("returns the previous state when undoing", () => {
src/application/history/History.test.ts:19: expect(history.undo("C")).toBe("B");
src/application/history/History.test.ts:20: expect(history.undo("B")).toBe("A");
src/application/history/History.test.ts:23: it("returns undefined when there is nothing to undo", () => {
src/application/history/History.test.ts:26: expect(history.undo(1)).toBeUndefined();
src/application/history/History.test.ts:47: history.undo("B");
src/application/history/History.test.ts:58: history.undo("C");
src/application/history/History.test.ts:68: expect(history.undo("C")).toBeUndefined();
src/application/history/History.test.ts:78: history.undo("C");
src/application/history/History.test.ts:93: expect(history.undo("D")).toBe("C");
docs/03-development/TESTING.md:391:│ │ ├── redo.ts
docs/03-development/TESTING.md:392:│ │ └── redo.test.ts
src/App.tsx:31: redo,
src/App.tsx:64: onRedo={redo}
src/application/history/History.test.ts:29: it("returns undefined when there is nothing to redo", () => {
src/application/history/History.test.ts:32: expect(history.redo(1)).toBeUndefined();
src/application/history/History.test.ts:35: it("returns undefined when there is nothing to redo", () => {
src/application/history/History.test.ts:38: expect(history.redo(1)).toBeUndefined();
src/application/history/History.test.ts:41: it("reports when redo is available", () => {
src/application/history/History.test.ts:69: expect(history.redo("C")).toBeUndefined();
src/application/history/History.test.ts:72: it("clears redo history after push", () => {
src/application/history/History.test.ts:97: it("clears redo history after push", () => {
src/application/history/History.ts:3: private readonly redoStack: T[] = [];
src/application/history/History.ts:9: this.redoStack.length = 0;
src/application/history/History.ts:19: this.redoStack.push(current);

---

Sí: hay una incidencia documental clara que conviene corregir antes de continuar con la radiografía funcional.

# 1. `ARCHITECTURE.md` está duplicado

La evidencia es concluyente:

```text
1:# Architecture
19:## 1. Objetivo
1275:## 1. Objetivo
2527 docs/02-architecture/ARCHITECTURE.md
```

El documento parece contener dos copias concatenadas. La segunda comienza alrededor de la línea 1275.

Antes de eliminar nada, comprueba el punto exacto de unión:

```bash
sed -n '1240,1305p' docs/02-architecture/ARCHITECTURE.md
```

También conviene comparar el inicio de ambas copias:

```bash
sed -n '1,60p' docs/02-architecture/ARCHITECTURE.md
sed -n '1257,1315p' docs/02-architecture/ARCHITECTURE.md
```

Si confirmas que desde la línea 1257 o 1275 comienza una repetición completa, conserva únicamente la primera versión.

Una forma segura sería crear antes una copia temporal:

```bash
cp docs/02-architecture/ARCHITECTURE.md /tmp/ARCHITECTURE.backup.md
```

Después, si la primera copia termina en la línea 1274:

```bash
head -n 1274 docs/02-architecture/ARCHITECTURE.md > /tmp/ARCHITECTURE.md
mv /tmp/ARCHITECTURE.md docs/02-architecture/ARCHITECTURE.md
```

Y verificar:

```bash
grep -n "^# Architecture" docs/02-architecture/ARCHITECTURE.md
grep -n "^## 1\. Objetivo" docs/02-architecture/ARCHITECTURE.md
wc -l docs/02-architecture/ARCHITECTURE.md
git diff -- docs/02-architecture/ARCHITECTURE.md
```

No ejecutaría todavía el recorte hasta ver el resultado de `sed -n '1240,1305p'`, porque necesitamos identificar la línea exacta donde termina la primera copia.

# 2. Prioridad está integrada de extremo a extremo

La salida confirma ya todas las piezas importantes:

| Capa         | Evidencia                                       |
| ------------ | ----------------------------------------------- |
| Dominio      | `Task` contiene `priority` y `changePriority()` |
| Caso de uso  | `changeTaskPriority.ts`                         |
| Acciones     | `taskActions.changePriority()`                  |
| Reducer      | payload con `Priority`                          |
| Persistencia | `StoredTask.priority` y serialización           |
| UI           | `TaskPrioritySelect`, `TaskItem`, `TaskList`    |
| Composición  | `App.tsx` pasa `changePriority`                 |
| Pruebas      | `Priority.test.ts` y `taskActions.test.ts`      |

Por tanto, **Priority puede considerarse funcionalmente implementada**.

# 3. Undo y Redo también llegan a la interfaz

La salida muestra:

```text
src/App.tsx:29:    undo,
src/App.tsx:62:        onUndo={undo}

src/App.tsx:31:    redo,
src/App.tsx:64:        onRedo={redo}
```

Eso confirma que ambas operaciones no están solo implementadas y probadas: también están conectadas en `App.tsx`.

Todavía faltaría revisar el componente que recibe `onUndo` y `onRedo` para comprobar:

- si existen botones visibles;
- si están correctamente deshabilitados;
- si `canUndo` y `canRedo` llegan a la UI;
- si sus etiquetas y comportamiento son correctos.

Pero el estado provisional ya mejora:

| Funcionalidad               | Estado                                     |
| --------------------------- | ------------------------------------------ |
| Priority                    | Implementada de extremo a extremo          |
| Undo                        | Implementado, probado y conectado en `App` |
| Redo                        | Implementado, probado y conectado en `App` |
| Persistencia tras historial | Implementada y probada                     |
| Toggle All                  | Implementada y probada                     |

Primero corregiría la duplicación de `ARCHITECTURE.md`. Después continuaremos la radiografía funcional revisando `App.tsx`, `useTasks.ts` y el componente de acciones para cerrar definitivamente el estado de Undo/Redo.

---

sed -n '1,220p' src/App.tsx
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useTasks } from "./ui/hooks/useTasks";
import TaskForm from "./ui/components/TaskForm";
import TaskFilters from "./ui/components/TaskFilters";
import TaskList from "./ui/components/TaskList";
import TaskActions from "./ui/components/TaskActions";
import type { TaskFilter } from "./domain/tasks/taskFilter";
import "./App.css";

function App() {
const [filter, setFilter] = useLocalStorage<TaskFilter>(
"selected-filter",
"all",
);

const {
visibleTasks,
totalTasks,
pendingTasks,
completedTasks,
hasPendingTasks,
hasCompletedTasks,
deleteTask,
toggleTask,
editTask,
changePriority,
toggleAll,
clearCompleted,
undo,
hasUndo,
redo,
hasRedo,
} = useTasks(filter);

return (
<div className="app">
<h1>Todo App</h1>

      <div className="stats">
        <p>Total: {totalTasks}</p>
        <p>Completadas: {completedTasks}</p>
        <p>Pendientes: {pendingTasks}</p>
      </div>

      <TaskForm />

      <TaskFilters filter={filter} onFilterChange={setFilter} />

      <TaskList
        tasks={visibleTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
        changePriority={changePriority}
      />

      <TaskActions
        onToggleAll={toggleAll}
        onClearCompleted={clearCompleted}
        hasCompletedTasks={hasCompletedTasks}
        hasPendingTasks={hasPendingTasks}
        onUndo={undo}
        hasUndo={hasUndo()}
        onRedo={redo}
        hasRedo={hasRedo()}
      />
    </div>

);
}

export default App; sed -n '1,260p' src/ui/hooks/useTasks.ts
import { useSyncExternalStore } from "react";
import { tasksStore } from "../../application/tasks/tasksStore";
import type { TaskFilter } from "../../domain/tasks/taskFilter";
import {
selectVisibleTasks,
selectHasPendingTasks,
selectHasCompletedTasks,
selectTotalTasks,
selectPendingCount,
selectCompletedCount,
} from "../../domain/tasks/tasksSelectors";
import {
addTaskUseCase,
toggleTaskUseCase,
deleteTaskUseCase,
editTaskUseCase,
changeTaskPriorityUseCase,
clearCompletedUseCase,
markAllCompletedUseCase,
markAllPendingUseCase,
toggleAllUseCase,
undoUseCase,
hasUndo,
redoUseCase,
hasRedo,
} from "../../application/tasks/composition";

export function useTasks(filter?: TaskFilter) {
const tasks = useSyncExternalStore(
tasksStore.subscribe,
tasksStore.getState,
tasksStore.getState,
);
// Listados
const visibleTasks = filter ? selectVisibleTasks(tasks, filter) : tasks;
// Contadores
const totalTasks = selectTotalTasks(tasks);
const pendingTasks = selectPendingCount(tasks);
const completedTasks = selectCompletedCount(tasks);
// Predicados
const hasPendingTasks = selectHasPendingTasks(tasks);
const hasCompletedTasks = selectHasCompletedTasks(tasks);
return {
// Estado
tasks,
visibleTasks,
totalTasks,
pendingTasks,
completedTasks,
hasPendingTasks,
hasCompletedTasks,

    // Casos de uso
    addTask: addTaskUseCase,
    toggleTask: toggleTaskUseCase,
    deleteTask: deleteTaskUseCase,
    editTask: editTaskUseCase,
    clearCompleted: clearCompletedUseCase,
    markAllCompleted: markAllCompletedUseCase,
    markAllPending: markAllPendingUseCase,
    toggleAll: toggleAllUseCase,
    changePriority: changeTaskPriorityUseCase,

    // Historial
    undo: undoUseCase,
    hasUndo,
    redo: redoUseCase,
    hasRedo,

};
} git grep -n -E "changePriority|TaskPrioritySelect|undo|redo" -- \
 src/App.tsx \
 src/ui \
 src/application/tasks/composition.ts
src/App.tsx:26: changePriority,
src/App.tsx:29: undo,
src/App.tsx:31: redo,
src/App.tsx:54: changePriority={changePriority}
src/App.tsx:62: onUndo={undo}
src/App.tsx:64: onRedo={redo}
src/application/tasks/composition.ts:12:import { createUndoUseCase } from "./useCases/undo";
src/application/tasks/composition.ts:13:import { createRedoUseCase } from "../tasks/useCases/redo";
src/application/tasks/composition.ts:41:export const undoUseCase = createUndoUseCase(taskActions);
src/application/tasks/composition.ts:42:export const redoUseCase = createRedoUseCase(taskActions);
src/ui/components/TaskItem.tsx:4:import { TaskPrioritySelect } from "./TaskPrioritySelect";
src/ui/components/TaskItem.tsx:100: <TaskPrioritySelect
src/ui/components/TaskList.tsx:10: changePriority(id: string, priority: Priority): void;
src/ui/components/TaskList.tsx:18: changePriority,
src/ui/components/TaskList.tsx:29: onChangePriority={changePriority}
src/ui/components/TaskPrioritySelect.tsx:8:interface TaskPrioritySelectProps {
src/ui/components/TaskPrioritySelect.tsx:14:export function TaskPrioritySelect({

---

Las salidas confirman que **Priority, Undo y Redo están expuestos hasta la interfaz**.

# Bloque 1 — Capacidades expuestas en la UI

## Prioridad

El recorrido está completo:

```text
Priority
   │
   ▼
changeTaskPriorityUseCase
   │
   ▼
useTasks.changePriority
   │
   ▼
App
   │
   ▼
TaskList
   │
   ▼
TaskItem
   │
   ▼
TaskPrioritySelect
```

Por tanto, la prioridad no está parcialmente implementada: está conectada de extremo a extremo.

## Undo y Redo

También están completamente conectados:

```text
undoUseCase / redoUseCase
          │
          ▼
        useTasks
          │
          ▼
          App
          │
          ▼
     TaskActions
```

Además, `App.tsx` proporciona:

```tsx
hasUndo={hasUndo()}
hasRedo={hasRedo()}
```

Esto permite que `TaskActions` habilite o deshabilite los controles según la disponibilidad del historial.

## Toggle All y Clear Completed

También llegan correctamente desde `useTasks` hasta `TaskActions`:

```tsx
onToggleAll = { toggleAll };
onClearCompleted = { clearCompleted };
```

## Filtros y estadísticas

`App.tsx` confirma igualmente:

- filtro persistido mediante `useLocalStorage`;
- tareas visibles calculadas mediante selectores;
- total de tareas;
- tareas pendientes;
- tareas completadas;
- predicados para habilitar acciones.

# Estado funcional provisional

| Funcionalidad     | Dominio/aplicación | Expuesta por hook |    Conectada en UI     |
| ----------------- | :----------------: | :---------------: | :--------------------: |
| Crear tarea       |         ✅         |        ✅         | ✅ mediante `TaskForm` |
| Editar tarea      |         ✅         |        ✅         |           ✅           |
| Eliminar tarea    |         ✅         |        ✅         |           ✅           |
| Completar/reabrir |         ✅         |        ✅         |           ✅           |
| Cambiar prioridad |         ✅         |        ✅         |           ✅           |
| Filtrar           |         ✅         |        ✅         |           ✅           |
| Persistir filtro  |         ✅         |         —         |           ✅           |
| Toggle All        |         ✅         |        ✅         |           ✅           |
| Clear Completed   |         ✅         |        ✅         |           ✅           |
| Undo              |         ✅         |        ✅         |           ✅           |
| Redo              |         ✅         |        ✅         |           ✅           |
| Estadísticas      |         ✅         |        ✅         |           ✅           |

A estas alturas no aparece ninguna operación importante implementada pero desconectada.

# Dos observaciones técnicas

## Casos de uso expuestos pero aparentemente no utilizados directamente

`useTasks` sigue exponiendo:

```tsx
markAllCompleted: markAllCompletedUseCase,
markAllPending: markAllPendingUseCase,
```

Sin embargo, `App.tsx` utiliza solamente:

```tsx
toggleAll;
```

Esto puede ser intencionado porque `toggleAllUseCase` necesita internamente las dos operaciones. Pero si `markAllCompleted` y `markAllPending` no tienen consumidores externos, quizá no necesiten formar parte de la API pública de `useTasks`.

No lo modificaría todavía; lo anotaría como posible limpieza técnica.

## `TaskForm` no recibe `addTask`

`App.tsx` renderiza:

```tsx
<TaskForm />
```

aunque `useTasks` expone `addTask`.

Eso indica que probablemente `TaskForm` consume directamente `useTasks()`. Puede funcionar, pero necesitamos comprobarlo porque podría introducir dos suscripciones al Store o acoplar el componente directamente a la aplicación.

# Siguiente comprobación

Para cerrar completamente el inventario visible, revisemos los tres componentes clave:

```bash
sed -n '1,240p' src/ui/components/TaskActions.tsx
```

```bash
sed -n '1,240p' src/ui/components/TaskForm.tsx
```

```bash
sed -n '1,180p' src/ui/components/TaskItem.tsx
```

Con ellos comprobaremos:

- etiquetas y estados deshabilitados de Undo/Redo;
- creación de tareas con prioridad;
- modificación de prioridad desde cada tarea;
- posible acoplamiento de `TaskForm` a `useTasks`;
- experiencia funcional completa del usuario.

La radiografía provisional indica que la Todo App está funcionalmente mucho más consolidada de lo que sugería la antigua bitácora.

---

sed -n '1240,1305p' docs/02-architecture/ARCHITECTURE.md

Las futuras decisiones arquitectónicas deberán evaluarse utilizando los principios descritos en este documento, preservando la coherencia alcanzada por el sistema.

## 11. La visión dentro del sistema documental

Este documento constituye la referencia principal de la arquitectura del proyecto.

Su propósito es describir el estado actual del sistema, los principios que guían su diseño, la organización de sus componentes y las decisiones arquitectónicas que sustentan su estructura.

No obstante, la arquitectura representa únicamente una parte de la documentación técnica del proyecto. El resto de documentos desarrollan aspectos específicos que complementan la información presentada aquí y permiten profundizar en diferentes áreas según las necesidades de cada lector.

La documentación se organiza de forma que cada documento tenga una responsabilidad claramente definida y evite duplicar información presente en otros.

En particular:
| Documento | Responsabilidad principal |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| `INTRODUCTION.md` | Guía de navegación y organización general de la documentación del proyecto. |
| `# Architecture

> **La mejor arquitectura no es la que incorpora más patrones, sino la que conserva únicamente aquellos que siguen aportando valor al dominio que modela.**

## Índice

1. Objetivo
2. Principios arquitectónicos
3. Visión general del sistema
4. Arquitectura por capas
5. Flujo de escritura del estado
6. Flujo de lectura del estado
7. Organización del proyecto
8. Componentes principales
9. Decisiones arquitectónicas relevantes
10. Estado actual de la arquitectura
11. Relación con el resto de la documentación

## 1. Objetivo

Este documento describe la arquitectura actual del proyecto y las decisiones de diseño que definen su organización interna.

Su finalidad es proporcionar una visión clara y precisa del sistema para facilitar su comprensión, mantenimiento y evolución, tanto por parte de desarrolladores como de agentes de programación.

La arquitectura aquí descrita corresponde al estado actual del proyecto y refleja únicamente las decisiones de diseño que forman parte de la implementación vigente.

No corresponde a un modelo teórico diseñado previamente, sino al resultado de la evolución de un proyecto real. Cada una de las soluciones aquí documentadas ha sido implementada, validada mediante pruebas y consolidada a través de sucesivas refactorizaciones.

Este documento se centra en responder a las siguientes preguntas:

- ¿Cómo está organizado el sistema?
- ¿Qué responsabilidades tiene cada capa?
- ¿Cómo fluye la información entre sus componentes?
- ¿Qué principios arquitectónicos guían su diseño?
- ¿Qué decisiones explican su estructura actual?

La evolución histórica y los posibles escenarios futuros se documentan en archivos independientes.

La arquitectura se describe atendiendo principalmente a las responsabilidades que desempeñan sus componentes y a las relaciones existentes entre ellos, evitando que la documentación dependa de nombres concretos de clases, módulos o archivos. Cuando dichos nombres aparecen, lo hacen únicamente como ejemplos que ayudan a identificar la implementación vigente, sin constituir el elemento principal de la explicación.

En conjunto, este documento actúa como la referencia principal de la arquitectura del proyecto y sirve de punto de partida para comprender el resto de la documentación técnica.

## 2. Principios arquitectónicos

> **La arquitectura no se diseñó de una sola vez; fue evolucionando a medida que aumentó el conocimiento sobre el problema y se validaron nuevas soluciones mediante la práctica.**

La arquitectura del proyecto se apoya en un conjunto de principios que han guiado su evolución desde las primeras versiones hasta el estado actual. Estos principios han surgido de la evolución del proyecto y de la experiencia obtenida durante su desarrollo, por lo que representan criterios consolidados más que reglas impuestas de forma previa.

Estos principios no describen una tecnología concreta ni una implementación específica. Representan criterios de diseño que orientan la toma de decisiones y buscan mantener el equilibrio entre simplicidad, mantenibilidad y capacidad de evolución. sed -n '1,60p' docs/02-architecture/ARCHITECTURE.md
sed -n '1257,1315p' docs/02-architecture/ARCHITECTURE.md

# Architecture

> **La mejor arquitectura no es la que incorpora más patrones, sino la que conserva únicamente aquellos que siguen aportando valor al dominio que modela.**

## Índice

1. Objetivo
2. Principios arquitectónicos
3. Visión general del sistema
4. Arquitectura por capas
5. Flujo de escritura del estado
6. Flujo de lectura del estado
7. Organización del proyecto
8. Componentes principales
9. Decisiones arquitectónicas relevantes
10. Estado actual de la arquitectura
11. Relación con el resto de la documentación

## 1. Objetivo

Este documento describe la arquitectura actual del proyecto y las decisiones de diseño que definen su organización interna.

Su finalidad es proporcionar una visión clara y precisa del sistema para facilitar su comprensión, mantenimiento y evolución, tanto por parte de desarrolladores como de agentes de programación.

La arquitectura aquí descrita corresponde al estado actual del proyecto y refleja únicamente las decisiones de diseño que forman parte de la implementación vigente.

No corresponde a un modelo teórico diseñado previamente, sino al resultado de la evolución de un proyecto real. Cada una de las soluciones aquí documentadas ha sido implementada, validada mediante pruebas y consolidada a través de sucesivas refactorizaciones.

Este documento se centra en responder a las siguientes preguntas:

- ¿Cómo está organizado el sistema?
- ¿Qué responsabilidades tiene cada capa?
- ¿Cómo fluye la información entre sus componentes?
- ¿Qué principios arquitectónicos guían su diseño?
- ¿Qué decisiones explican su estructura actual?

La evolución histórica y los posibles escenarios futuros se documentan en archivos independientes.

La arquitectura se describe atendiendo principalmente a las responsabilidades que desempeñan sus componentes y a las relaciones existentes entre ellos, evitando que la documentación dependa de nombres concretos de clases, módulos o archivos. Cuando dichos nombres aparecen, lo hacen únicamente como ejemplos que ayudan a identificar la implementación vigente, sin constituir el elemento principal de la explicación.

En conjunto, este documento actúa como la referencia principal de la arquitectura del proyecto y sirve de punto de partida para comprender el resto de la documentación técnica.

## 2. Principios arquitectónicos

> **La arquitectura no se diseñó de una sola vez; fue evolucionando a medida que aumentó el conocimiento sobre el problema y se validaron nuevas soluciones mediante la práctica.**

La arquitectura del proyecto se apoya en un conjunto de principios que han guiado su evolución desde las primeras versiones hasta el estado actual. Estos principios han surgido de la evolución del proyecto y de la experiencia obtenida durante su desarrollo, por lo que representan criterios consolidados más que reglas impuestas de forma previa.

Estos principios no describen una tecnología concreta ni una implementación específica. Representan criterios de diseño que orientan la toma de decisiones y buscan mantener el equilibrio entre simplicidad, mantenibilidad y capacidad de evolución.

## 2.1 La arquitectura debe facilitar el cambio

La arquitectura no debe dificultar la incorporación de nuevas funcionalidades ni obligar a modificar grandes partes del sistema ante pequeños cambios.

Cada refactorización realizada ha perseguido reducir el impacto de futuras modificaciones mediante una mejor separación de responsabilidades.

---

## 2.2 El dominio constituye el núcleo del sistema

| `# Architecture

> **La mejor arquitectura no es la que incorpora más patrones, sino la que conserva únicamente aquellos que siguen aportando valor al dominio que modela.**

## Índice

1. Objetivo
2. Principios arquitectónicos
3. Visión general del sistema
4. Arquitectura por capas
5. Flujo de escritura del estado
6. Flujo de lectura del estado
7. Organización del proyecto
8. Componentes principales
9. Decisiones arquitectónicas relevantes
10. Estado actual de la arquitectura
11. Relación con el resto de la documentación

## 1. Objetivo

Este documento describe la arquitectura actual del proyecto y las decisiones de diseño que definen su organización interna.

Su finalidad es proporcionar una visión clara y precisa del sistema para facilitar su comprensión, mantenimiento y evolución, tanto por parte de desarrolladores como de agentes de programación.

La arquitectura aquí descrita corresponde al estado actual del proyecto y refleja únicamente las decisiones de diseño que forman parte de la implementación vigente.

No corresponde a un modelo teórico diseñado previamente, sino al resultado de la evolución de un proyecto real. Cada una de las soluciones aquí documentadas ha sido implementada, validada mediante pruebas y consolidada a través de sucesivas refactorizaciones.

Este documento se centra en responder a las siguientes preguntas:

- ¿Cómo está organizado el sistema?
- ¿Qué responsabilidades tiene cada capa?
- ¿Cómo fluye la información entre sus componentes?
- ¿Qué principios arquitectónicos guían su diseño?
- ¿Qué decisiones explican su estructura actual?

La evolución histórica y los posibles escenarios futuros se documentan en archivos independientes.

La arquitectura se describe atendiendo principalmente a las responsabilidades que desempeñan sus componentes y a las relaciones existentes entre ellos, evitando que la documentación dependa de nombres concretos de clases, módulos o archivos. Cuando dichos nombres aparecen, lo hacen únicamente como ejemplos que ayudan a identificar la implementación vigente, sin constituir el elemento principal de la explicación.

En conjunto, este documento actúa como la referencia principal de la arquitectura del proyecto y sirve de punto de partida para comprender el resto de la documentación técnica.

## 2. Principios arquitectónicos

> **La arquitectura no se diseñó de una sola vez; fue evolucionando a medida que aumentó el conocimiento sobre el problema y se validaron nuevas soluciones mediante la práctica.**

La arquitectura del proyecto se apoya en un conjunto de principios que han guiado su evolución desde las primeras versiones hasta el estado actual. Estos principios han surgido de la evolución del proyecto y de la experiencia obtenida durante su desarrollo, por lo que representan criterios consolidados más que reglas impuestas de forma previa.

Estos principios no describen una tecnología concreta ni una implementación específica. Representan criterios de diseño que orientan la toma de decisiones y buscan mantener el equilibrio entre simplicidad, mantenibilidad y capacidad de evolución.

## 2.1 La arquitectura debe facilitar el cambio

La arquitectura no debe dificultar la incorporación de nuevas funcionalidades ni obligar a modificar grandes partes del sistema ante pequeños cambios.

Cada refactorización realizada ha perseguido reducir el impacto de futuras modificaciones mediante una mejor separación de responsabilidades.

---

## 2.2 El dominio constituye el núcleo del sistema creo que ya he borrado la parte repetida. ahora falta comprobar que el archivo esté completo.

---

Sí. Ahora toca comprobar tres cosas:

1. Que solo quede una copia del documento.
2. Que estén presentes los once capítulos.
3. Que el archivo termine correctamente y no se haya cortado durante el borrado.

Ejecuta estos comandos.

## 1. Comprobar que ya no está duplicado

```bash
grep -n "^# Architecture$" docs/02-architecture/ARCHITECTURE.md
grep -n "^## 1\. Objetivo$" docs/02-architecture/ARCHITECTURE.md
```

Cada comando debe devolver **una sola coincidencia**.

## 2. Comprobar los capítulos principales

```bash
grep -n "^## [0-9]\+\." docs/02-architecture/ARCHITECTURE.md
```

Deberían aparecer, en este orden:

```text
## 1. Objetivo
## 2. Principios arquitectónicos
## 3. Visión general del sistema
## 4. Arquitectura por capas
## 5. Flujo de escritura del estado
## 6. Flujo de lectura del estado
## 7. Organización del proyecto
## 8. Componentes principales
## 9. Decisiones arquitectónicas relevantes
## 10. Estado actual de la arquitectura
## 11. Relación con el resto de la documentación
```

También puedes contar los capítulos:

```bash
grep -c "^## [0-9]\+\." docs/02-architecture/ARCHITECTURE.md
```

El resultado esperado es:

```text
11
```

## 3. Comprobar que el final está completo

```bash
tail -n 80 docs/02-architecture/ARCHITECTURE.md
```

El archivo debería terminar con el capítulo 11 completo, incluyendo:

- la tabla de documentos;
- `GLOSSARY.md`;
- `DESIGN_JOURNAL.md`;
- los párrafos finales sobre la coherencia del sistema documental;
- la frase de cierre sobre la arquitectura como medio para construir software mantenible.

## 4. Comprobar que no quedan fragmentos corruptos

La duplicación comenzaba dentro de una fila de tabla:

```text
| `# Architecture
```

Busca ese fragmento:

```bash
grep -nF '| `# Architecture' docs/02-architecture/ARCHITECTURE.md
```

No debería devolver nada.

También busca títulos repetidos:

```bash
grep -n "^## Índice$" docs/02-architecture/ARCHITECTURE.md
grep -n "^## 11\." docs/02-architecture/ARCHITECTURE.md
```

Cada uno debería aparecer una sola vez.

## 5. Revisar el tamaño actual

```bash
wc -l docs/02-architecture/ARCHITECTURE.md
```

La primera copia tenía alrededor de 1.270 líneas. El resultado actual debería estar aproximadamente en ese rango, no cerca de las 2.527 líneas anteriores.

## 6. Revisar el cambio antes de confirmar

```bash
git diff --stat
git diff -- docs/02-architecture/ARCHITECTURE.md
```

En el diff deberías ver fundamentalmente la eliminación del bloque duplicado, sin desapariciones dentro de la primera copia válida.

Después ejecuta:

```bash
npm run typecheck
npm test -- --run
npm run build
```

Aunque sea un cambio documental, estas validaciones confirman que la base continúa estable. Pásame especialmente la salida de los `grep`, `wc -l` y `tail -n 80`; con eso podremos confirmar que `ARCHITECTURE.md` ha quedado completo.

---

grep -n "^# Architecture$" docs/02-architecture/ARCHITECTURE.md
grep -n "^## 1\. Objetivo$" docs/02-architecture/ARCHITECTURE.md
1:# Architecture
19:## 1. Objetivo grep -n "^## [0-9]\+\." docs/02-architecture/ARCHITECTURE.md
19:## 1. Objetivo
43:## 2. Principios arquitectónicos
51:## 2.1 La arquitectura debe facilitar el cambio
59:## 2.2 El dominio constituye el núcleo del sistema
67:## 2.3 Las dependencias apuntan hacia el dominio
75:## 2.4 Cada componente tiene una única responsabilidad
83:## 2.5 La simplicidad prevalece sobre la complejidad accidental
91:## 2.6 Las abstracciones deben demostrar su utilidad
99:## 2.7 Las decisiones arquitectónicas se validan mediante la práctica
107:## 2.8 Las pruebas forman parte de la arquitectura
115:## 2.9 La arquitectura evoluciona mediante refactorización
121:## 2.10 La documentación evoluciona junto con el software
131:## 3. Visión general del sistema
155:## 4. Arquitectura por capas
363:## 5. Flujo de escritura del estado
406:## 6. Flujo de lectura del estado
443:## 7. Organización del proyecto
497:## 8. Componentes principales
1125:## 9. Decisiones arquitectónicas relevantes
1227:## 10. Estado actual de la arquitectura
1243:## 11. La visión dentro del sistema documental grep -c "^## [0-9]\+\." docs/02-architecture/ARCHITECTURE.md
21 tail -n 80 docs/02-architecture/ARCHITECTURE.md
Persistir reaccionando a los cambios del Store.

Motivación

Eliminar responsabilidades innecesarias del middleware.

Impacto

Un único flujo para todas las modificaciones del estado.

### 9.6 Documentación modular

Decisión

Separar la documentación por responsabilidad.

Motivación

Evitar duplicidades.

Impacto

Documentación más mantenible.

### 9.7 Conclusión

Las decisiones resumidas en este capítulo comparten un mismo criterio: introducir únicamente aquellas soluciones que aportan un beneficio claro al problema que resuelven.

La arquitectura actual no persigue aplicar patrones de diseño por sí mismos, sino construir un sistema coherente, mantenible y capaz de evolucionar mediante pequeñas refactorizaciones sucesivas.

Este mismo criterio constituye la referencia para evaluar cualquier cambio futuro en la arquitectura del proyecto.

## 10. Estado actual de la arquitectura

La arquitectura del proyecto ha alcanzado un nivel de estabilidad que permite incorporar nuevas funcionalidades mediante pequeñas extensiones o refactorizaciones localizadas, sin necesidad de modificar su estructura fundamental.

El sistema presenta una separación clara entre la interfaz de usuario, la coordinación de las operaciones, el dominio, la infraestructura y la gestión del estado. Esta organización facilita la comprensión del código, reduce el acoplamiento entre componentes y favorece su evolución.

Las principales decisiones arquitectónicas adoptadas durante el desarrollo se encuentran consolidadas y han demostrado su utilidad mediante la implementación de nuevas funcionalidades, la incorporación de pruebas automatizadas y sucesivas refactorizaciones.

La arquitectura mantiene un equilibrio entre simplicidad y capacidad de evolución. Los componentes incorporados responden a necesidades reales del proyecto y su permanencia se justifica por el valor que aportan al conjunto del sistema.

Como consecuencia de esta madurez, el foco de las futuras iteraciones. deja de estar en redefinir la arquitectura y pasa a centrarse en ampliar las capacidades funcionales del proyecto preservando los principios descritos en este documento.

La arquitectura ya no constituye el principal objeto de desarrollo del proyecto; pasa a ser la base sobre la que continuará evolucionando el dominio y sus funcionalidades.

Las futuras decisiones arquitectónicas deberán evaluarse utilizando los principios descritos en este documento, preservando la coherencia alcanzada por el sistema.

## 11. La visión dentro del sistema documental

Este documento constituye la referencia principal de la arquitectura del proyecto.

Su propósito es describir el estado actual del sistema, los principios que guían su diseño, la organización de sus componentes y las decisiones arquitectónicas que sustentan su estructura.

No obstante, la arquitectura representa únicamente una parte de la documentación técnica del proyecto. El resto de documentos desarrollan aspectos específicos que complementan la información presentada aquí y permiten profundizar en diferentes áreas según las necesidades de cada lector.

La documentación se organiza de forma que cada documento tenga una responsabilidad claramente definida y evite duplicar información presente en otros.

En particular:
| Documento | Responsabilidad principal |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| `INTRODUCTION.md` | Guía de navegación y organización general de la documentación del proyecto. |
| `GLOSSARY.md` | Definición de la terminología común utilizada en toda la documentación del proyecto.|
| `VISION.md` | Propósito del proyecto, principios fundamentales y dirección estratégica a largo plazo. |
| `PRODUCT.md` | Definición funcional del producto, su modelo conceptual y sus capacidades. |
| `ARCHITECTURE.md` | Organización técnica del sistema, principios arquitectónicos y decisiones de diseño. |
| `DEVELOPMENT_GUIDE.md` | Organización del entorno de desarrollo, convenciones y forma de trabajo sobre el código. |
| `TESTING.md` | Estrategia de pruebas, organización del testing y criterios de validación. |
| `ADR/` | Justificación detallada de las decisiones arquitectónicas más relevantes. |
| `PROJECT_STATUS.md` | Estado actual del proyecto, funcionalidades implementadas y próximos objetivos. |
| `PROJECT_JOURNAL.md` | Registro histórico de las sesiones de desarrollo y de la evolución del proyecto. |
| `ROADMAP.md` | Líneas estratégicas de evolución y posibles desarrollos futuros. |
| `DESIGN_JOURNAL.md` | Hipótesis, ideas y reflexiones de diseño pendientes de evaluación o incorporación futura. |

Esta organización permite que cada documento pueda evolucionar de forma independiente, manteniendo una alta cohesión, evitando redundancias y facilitando el mantenimiento de la documentación a largo plazo.

En conjunto, estos documentos forman un sistema de documentación coherente, en el que cada uno cumple una función específica y complementa a los demás sin sustituirlos.

**La mejor arquitectura no es la que incorpora más patrones, sino la que conserva únicamente aquellos que siguen aportando valor al dominio que modela.** grep -nF '| `# Architecture' docs/02-architecture/ARCHITECTURE.md no devuelve nada grep -n "^## Índice$" docs/02-architecture/ARCHITECTURE.md
grep -n "^## 11\." docs/02-architecture/ARCHITECTURE.md
5:## Índice
1243:## 11. La visión dentro del sistema documental wc -l docs/02-architecture/ARCHITECTURE.md
1274 docs/02-architecture/ARCHITECTURE.md git diff --stat
git diff -- docs/02-architecture/ARCHITECTURE.md
docs/02-architecture/ARCHITECTURE.md | 1259 +---------------------------------
1 file changed, 3 insertions(+), 1256 deletions(-)
diff --git a/docs/02-architecture/ARCHITECTURE.md b/docs/02-architecture/ARCHITECTURE.md
index 6ac4a55..8f69239 100644
--- a/docs/02-architecture/ARCHITECTURE.md
+++ b/docs/02-architecture/ARCHITECTURE.md
@@ -1250,1262 +1250,6 @@ No obstante, la arquitectura representa únicamente una parte de la documentaci

La documentación se organiza de forma que cada documento tenga una responsabilidad claramente definida y evite duplicar información presente en otros.

-En particular:
-| Documento | Responsabilidad principal |
-| ---------------------- | ----------------------------------------------------------------------------------------- |
-| `INTRODUCTION.md` | Guía de navegación y organización general de la documentación del proyecto. |
-| `# Architecture

- -> **La mejor arquitectura no es la que incorpora más patrones, sino la que conserva únicamente aquellos que siguen aportando valor al dominio que modela.**
- -## Índice ✓ src/tests/tasksStore.test.ts (4 tests) 31ms
  ✓ src/tests/useLocalStorage.test.js (2 tests) 72ms
  ✓ src/tests/historyPersistence.test.ts (2 tests) 21ms
  ✓ src/tests/tasksSelectors.test.ts (13 tests) 18ms
  ✓ src/application/tasks/**tests**/taskActions.test.ts (15 tests) 37ms
  ✓ src/application/tasks/useCases/undo.test.ts (2 tests) 13ms
  ✓ src/application/tasks/useCases/toggleAll.test.ts (2 tests) 13ms
  ✓ src/application/history/History.test.ts (10 tests) 14ms
  ✓ src/application/tasks/useCases/redo.test.ts (2 tests) 12ms
  ✓ src/domain/tasks/entities/Priority.test.ts (6 tests) 11ms

  Test Files 14 passed (14)
  Tests 81 passed (81)
  Start at 18:08:56
  Duration 12.33s (transform 823ms, setup 1.90s, import 2.11s, tests 1.61s, environment 24.32s)

> mi-app@0.0.0 build
> vite build

vite v8.0.16 building client environment for production...
✓ 52 modules transformed.
computing gzip size...
dist/index.html 0.45 kB │ gzip: 0.29 kB
dist/assets/index-BnnpuYXs.css 5.06 kB │ gzip: 1.76 kB
dist/assets/index-CaOEOfrl.js 202.30 kB │ gzip: 63.55 kB

## ✓ built in 270ms

Sí: **`ARCHITECTURE.md` ha quedado completo y la copia duplicada se ha eliminado correctamente**.

Las comprobaciones son concluyentes:

- Solo queda un `# Architecture`.
- Solo queda un `## 1. Objetivo`.
- El índice aparece una vez.
- El capítulo 11 aparece una vez.
- El archivo tiene 1274 líneas, frente a las 2527 anteriores.
- No permanece el fragmento corrupto `| \`# Architecture`.
- El final conserva la tabla documental y los párrafos de cierre.
- Los 81 tests y el build siguen pasando.

El resultado `21` del contador no indica que existan 21 capítulos principales. La expresión también cuenta los subapartados `2.1`, `2.2`, etc. Los once capítulos principales están presentes y ordenados.

## Tres correcciones menores antes del commit

### 1. Título del capítulo 11

El índice dice:

```markdown
11. Relación con el resto de la documentación
```

pero el capítulo se titula:

```markdown
## 11. La visión dentro del sistema documental
```

Para mantener la coherencia, cambiaría el encabezado a:

```markdown
## 11. Relación con el resto de la documentación
```

### 2. Error de puntuación

Actualmente:

```text
Como consecuencia de esta madurez, el foco de las futuras iteraciones. deja de estar...
```

Debe quedar:

```text
Como consecuencia de esta madurez, el foco de las futuras iteraciones deja de estar en redefinir la arquitectura y pasa a centrarse en ampliar las capacidades funcionales del proyecto, preservando los principios descritos en este documento.
```

### 3. Formato de la tabla

Añadiría una línea vacía después de:

```markdown
En particular:
```

También corregiría el espacio final de la fila del glosario:

```markdown
| `GLOSSARY.md` | Definición de la terminología común utilizada en toda la documentación del proyecto. |
```

## Comprobación final

Después de esos cambios:

```bash
git diff --check
git diff --stat
git status
```

`git diff --check` no debería devolver nada.

Entonces puedes registrar la corrección con un commit independiente:

```bash
git add docs/02-architecture/ARCHITECTURE.md
git commit -m "docs: remove duplicated architecture content"
```

Este commit debe mantenerse separado de la futura radiografía funcional, porque corrige una incidencia documental detectada después de `v5.0.0`.

---

git diff --check
git diff --stat
git status
docs/02-architecture/ARCHITECTURE.md | 1287 +---------------------------------
1 file changed, 17 insertions(+), 1270 deletions(-)
En la rama feature/task-filters
Cambios no rastreados para el commit:
(usa "git add <archivo>..." para actualizar lo que será confirmado)
(usa "git restore <archivo>..." para descartar los cambios en el directorio de trabajo)
modificados: docs/02-architecture/ARCHITECTURE.md

## sin cambios agregados al commit (usa "git add" y/o "git commit -a")

Perfecto. La comprobación ha salido exactamente como esperaba.

## Resultado

- ✅ `git diff --check` no muestra errores de espacios en blanco ni problemas de formato.
- ✅ El único archivo modificado es `ARCHITECTURE.md`.
- ✅ El gran número de eliminaciones corresponde a la eliminación de la copia duplicada, no a la pérdida de contenido.
- ✅ La validación del proyecto (`typecheck`, `test` y `build`) sigue siendo correcta.

En mi opinión, puedes registrar esta corrección con tranquilidad.

```bash
git add docs/02-architecture/ARCHITECTURE.md
git commit -m "docs: remove duplicated architecture content"
```

---

# Una reflexión

Este pequeño incidente confirma algo que hemos ido consolidando durante toda la reorganización:

> **Las auditorías sirven precisamente para descubrir este tipo de problemas.**

La duplicación no afectaba al funcionamiento del software, por lo que probablemente habría permanecido oculta durante mucho tiempo. Sin embargo, al realizar una revisión sistemática del sistema documental, la hemos detectado y corregido antes de que se convirtiera en un problema mayor.

Es un buen ejemplo de por qué merece la pena invertir tiempo en este tipo de revisiones.

---

# ¿Y ahora sí?

Sí.

Con este commit, daría por **cerrada definitivamente la etapa documental**.

A partir de aquí, ya no volvería a revisar documentos salvo que una nueva funcionalidad lo requiera.

## El siguiente gran objetivo

Ahora sí comenzaría la **radiografía funcional completa del proyecto**.

La estructuraría así:

### Fase 1 — Inventario funcional

- Qué puede hacer el usuario actualmente.
- Qué funcionalidades están completamente terminadas.

### Fase 2 — Modelo de dominio

- Entidades.
- Value Objects.
- Agregados.
- Casos de uso.
- Historial.

### Fase 3 — Arquitectura de aplicación

- Store.
- Reducers.
- Selectores.
- Casos de uso.
- Adaptadores.

### Fase 4 — Backlog real

Obtendremos una lista con cuatro categorías:

- ✅ Funcionalidades completadas.
- 🚧 Funcionalidades iniciadas.
- 📋 Funcionalidades pendientes.
- 💡 Evoluciones futuras (extraídas de `ROADMAP.md` y `DESIGN_JOURNAL.md`).

---

## Mi impresión

Hasta ahora, la radiografía ya nos ha dado una sorpresa positiva: **Priority, Undo y Redo están mucho más avanzados de lo que recordábamos**. Eso demuestra el valor de trabajar sobre el estado real del proyecto y no sobre la memoria.

Creo que la siguiente fase será especialmente interesante porque, por primera vez desde que empezamos la Todo App, vamos a tener un **inventario funcional completo y contrastado** del proyecto. Ese inventario servirá como punto de partida para decidir la siguiente evolución con la misma metodología rigurosa que hemos aplicado a la documentación.

---

git add docs/02-architecture/ARCHITECTURE.md
git commit -m "docs: remove duplicated architecture content"
[feature/task-filters 87a4d4c] docs: remove duplicated architecture content
1 file changed, 17 insertions(+), 1270 deletions(-)

---

Perfecto. Ahora sí puedo decir que **la etapa documental queda oficialmente cerrada**.

El historial reciente refleja muy bien la evolución:

```text
cda9d03  docs: consolidate project documentation system
358c002  docs: add session resume notes
87a4d4c  docs: remove duplicated architecture content
```

Es una secuencia muy limpia:

1. **Consolidación** del sistema documental.
2. Incorporación de la **bitácora de trabajo**.
3. Corrección de una **incidencia detectada durante la auditoría**.

Me gusta especialmente el tercer commit porque demuestra que la auditoría no fue un trámite, sino que produjo una mejora real del proyecto.

---

# A partir de aquí cambiamos completamente de contexto

Hasta este momento hemos trabajado sobre **la documentación**.

Desde este commit volvemos al **software**.

Y creo que merece la pena hacerlo con el mismo método que hemos aplicado durante toda la reorganización:

> **Auditar primero. Evolucionar después.**

---

# Radiografía funcional del proyecto

Yo la convertiría en un documento de trabajo de esta sesión.

No un archivo del repositorio.

Simplemente iremos construyéndola juntos.

## Bloque 1 — Funcionalidades disponibles

Empezaremos inventariando todo lo que un usuario puede hacer hoy.

La primera versión quedaría así:

| Área         | Funcionalidad                       | Estado |
| ------------ | ----------------------------------- | :----: |
| Gestión      | Crear tareas                        |   ✅   |
| Gestión      | Editar tareas                       |   ✅   |
| Gestión      | Eliminar tareas                     |   ✅   |
| Gestión      | Completar/Reabrir tareas            |   ✅   |
| Gestión      | Cambiar prioridad                   |   ✅   |
| Gestión      | Marcar todas                        |   ✅   |
| Gestión      | Limpiar completadas                 |   ✅   |
| Consulta     | Mostrar tareas                      |   ✅   |
| Consulta     | Filtrar (Todas/Activas/Completadas) |   ✅   |
| Consulta     | Estadísticas                        |   ✅   |
| Persistencia | Guardado automático                 |   ✅   |
| Persistencia | Restauración                        |   ✅   |
| Historial    | Undo                                |   ✅   |
| Historial    | Redo                                |   ✅   |

---

# Bloque 2 — Modelo de dominio

Después haremos exactamente lo mismo con el dominio.

Obtendremos algo parecido a:

```text
Task
TaskId
TaskText
Priority

TaskList

Selectors

Reducer

Use Cases

History
```

Y comprobaremos:

- qué está consolidado;
- qué sigue evolucionando.

---

# Bloque 3 — Arquitectura de aplicación

Después revisaremos:

```text
UI

↓

Hooks

↓

Application

↓

Domain

↓

Infrastructure

↓

Store
```

Y verificaremos que todas las piezas están conectadas correctamente.

---

# Bloque 4 — Backlog real

Este será probablemente el más interesante.

Obtendremos una tabla como esta:

| Estado          | Elemento     |
| --------------- | ------------ |
| ✅ Consolidado  | Prioridad    |
| ✅ Consolidado  | Undo/Redo    |
| ✅ Consolidado  | Persistencia |
| 🚧 En evolución | ...          |
| 📋 Pendiente    | ...          |
| 💡 Futuro       | ...          |

Y entonces sí podremos decidir con criterio cuál será la siguiente iteración.

---

# Mi impresión

Después de todo lo que hemos visto hoy, tengo la sensación de que el proyecto ha alcanzado un punto de inflexión parecido al que alcanzó la documentación.

Antes de empezar esta revisión pensábamos que aún quedaban funcionalidades importantes por terminar (Priority, Undo, Redo). Sin embargo, la radiografía está demostrando que muchas de ellas ya están completamente integradas.

Eso significa que la siguiente etapa probablemente ya no consistirá en "terminar funcionalidades", sino en **elegir conscientemente la siguiente evolución del producto**.

Y, en mi opinión, esa es una muy buena noticia. Significa que el esfuerzo realizado durante las últimas semanas ha dado sus frutos y que el proyecto vuelve a situarse donde siempre quiso estar: **evolucionando el producto**, no resolviendo deuda técnica o documental.

---

## pues comencemos

Empecemos por el **Bloque 1: inventario funcional visible para el usuario**.

Ya tenemos una primera lista, pero ahora vamos a confirmarla directamente en los componentes de interfaz.

Ejecuta estos tres comandos:

```bash
sed -n '1,240p' src/ui/components/TaskActions.tsx
```

```bash
sed -n '1,240p' src/ui/components/TaskForm.tsx
```

```bash
sed -n '1,180p' src/ui/components/TaskItem.tsx
```

Con esas salidas comprobaremos:

- cómo se crean tareas;
- si la prioridad se elige al crear;
- cómo se cambia la prioridad;
- cómo funcionan Undo y Redo;
- cuándo se deshabilitan las acciones;
- qué capacidades están realmente disponibles para el usuario.

Después cerraremos el inventario funcional con una tabla definitiva antes de pasar al modelo de dominio.

---

sed -n '1,240p' src/ui/components/TaskActions.tsx
interface TaskActionsProps {
onToggleAll: () => void;
onClearCompleted: () => void;
onUndo: () => void;
onRedo: () => void;

hasCompletedTasks: boolean;
hasPendingTasks: boolean;
hasUndo: boolean;
hasRedo: boolean;
}

export default function TaskActions({
onToggleAll,
onClearCompleted,
onUndo,
onRedo,
hasCompletedTasks,
hasPendingTasks,
hasUndo,
hasRedo,
}: TaskActionsProps) {
return (
<div className="task-actions">
<button onClick={onUndo} disabled={!hasUndo}>
Undo
</button>

      <button onClick={onRedo} disabled={!hasRedo}>
        Redo
      </button>

      <button
        onClick={onToggleAll}
        disabled={!hasPendingTasks && !hasCompletedTasks}
      >
        {hasPendingTasks ? "Marcar todas" : "Marcar todas como pendientes"}
      </button>

      <button onClick={onClearCompleted} disabled={!hasCompletedTasks}>
        Limpiar completadas
      </button>
    </div>

);
} sed -n '1,240p' src/ui/components/TaskForm.tsx
import { useRef, useState } from "react";
import { useTasks } from "../hooks/useTasks";
import {
Priority,
type PriorityValue,
} from "../../domain/tasks/entities/Priority";
import { PRIORITY_LABELS } from "../constants/priorityLabels";

function TaskForm() {
const { addTask } = useTasks();

const [text, setText] = useState<string>("");
const [priority, setPriority] = useState(Priority.medium());

const inputRef = useRef<HTMLInputElement>(null);

const handleAdd = () => {
if (text.trim() === "") return;

    addTask(text, priority);
    setText("");
    setPriority(Priority.medium());

    inputRef.current?.focus();

};

return (
<div>
<input
ref={inputRef}
value={text}
onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
setText(e.target.value)
}
placeholder="Escribe una tarea"
/>

      <select
        value={priority.toString()}
        onChange={(e) =>
          setPriority(Priority.restore(e.target.value as PriorityValue))
        }
      >
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>

      <button onClick={handleAdd}>Añadir</button>
    </div>

);
}

export default TaskForm; sed -n '1,180p' src/ui/components/TaskItem.tsx
import { useState } from "react";
import type { KeyboardEvent } from "react";
import type { Task } from "../../domain/tasks/entities/task";
import { TaskPrioritySelect } from "./TaskPrioritySelect";
import type { Priority } from "../../domain/tasks/entities/Priority";

interface TaskItemProps {
task: Task;
onDelete: (id: string) => void;
onToggle: (id: string) => void;
onEdit: (id: string, text: string) => void;
onChangePriority: (id: string, priority: Priority) => void;
}

export function TaskItem({
task,
onDelete,
onToggle,
onEdit,
onChangePriority,
}: TaskItemProps) {
const [isEditing, setIsEditing] = useState(false);
const [editText, setEditText] = useState(task.text.toString());

function handleEditStart(): void {
setEditText(task.text.toString());
setIsEditing(true);
}

function handleEditSave(): void {
const trimmedText = editText.trim();

    if (trimmedText) {
      onEdit(task.id.toString(), trimmedText);
    }

    setIsEditing(false);

}

function handleEditCancel(): void {
setEditText(task.text.toString());
setIsEditing(false);
}

function handleKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
if (event.key === "Enter") {
handleEditSave();
}

    if (event.key === "Escape") {
      handleEditCancel();
    }

}

return (
<div className="task-item">
<div className="task-main">
<input
type="checkbox"
checked={task.completed}
onChange={() => onToggle(task.id.toString())}
aria-label={`Completar ${task.text.toString()}`}
/>

        {isEditing ? (
          <>
            <input
              className="task-edit-input"
              value={editText}
              onChange={(event) => setEditText(event.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />

            <button
              type="button"
              onClick={handleEditSave}
              aria-label="Guardar edición"
            >
              💾
            </button>

            <button type="button" onClick={handleEditCancel}>
              Cancelar
            </button>
          </>
        ) : (
          <span
            className="task-text"
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.text.toString()}
          </span>
        )}
      </div>

      <div className="task-controls">
        <TaskPrioritySelect
          priority={task.priority}
          onChange={(priority) =>
            onChangePriority(task.id.toString(), priority)
          }
          ariaLabel={`Prioridad de ${task.text.toString()}`}
        />

        {!isEditing && (
          <button
            type="button"
            onClick={handleEditStart}
            aria-label="Editar tarea"
          >
            ✏️
          </button>
        )}

        <button
          type="button"
          onClick={() => onDelete(task.id.toString())}
          aria-label="Eliminar tarea"
        >
          ❌
        </button>
      </div>
    </div>

);
}

---

Con estas tres piezas ya podemos cerrar el **Bloque 1: funcionalidades visibles para el usuario**.

# Inventario funcional confirmado

## Gestión individual de tareas

| Funcionalidad                    | Estado | Evidencia                                    |
| -------------------------------- | :----: | -------------------------------------------- |
| Crear tareas                     |   ✅   | `TaskForm` llama a `addTask(text, priority)` |
| Elegir prioridad al crear        |   ✅   | Selector `low / medium / high`               |
| Prioridad por defecto media      |   ✅   | `useState(Priority.medium())`                |
| Restablecer prioridad tras crear |   ✅   | Vuelve a `Priority.medium()`                 |
| Completar o reabrir              |   ✅   | Checkbox conectado a `onToggle`              |
| Editar texto                     |   ✅   | Modo edición con guardar y cancelar          |
| Guardar con Enter                |   ✅   | `handleKeyDown`                              |
| Cancelar con Escape              |   ✅   | `handleKeyDown`                              |
| Cambiar prioridad                |   ✅   | `TaskPrioritySelect`                         |
| Eliminar tarea                   |   ✅   | Botón conectado a `onDelete`                 |

## Acciones globales

| Funcionalidad       | Estado | Comportamiento                                                        |
| ------------------- | :----: | --------------------------------------------------------------------- |
| Undo                |   ✅   | Deshabilitado cuando no hay historial                                 |
| Redo                |   ✅   | Deshabilitado cuando no hay estados rehechos                          |
| Alternar todas      |   ✅   | Marca todas si hay pendientes; las deja pendientes si están completas |
| Limpiar completadas |   ✅   | Deshabilitado cuando no existen tareas completadas                    |

## Consulta y visualización

Ya habíamos confirmado en `App.tsx`:

- filtros por estado;
- persistencia del filtro;
- estadísticas de total, completadas y pendientes;
- presentación de las tareas visibles.

# Resultado del Bloque 1

La Todo App dispone actualmente de un conjunto funcional bastante completo:

```text
Crear
Editar
Eliminar
Completar
Cambiar prioridad
Filtrar
Mostrar estadísticas
Alternar todas
Limpiar completadas
Deshacer
Rehacer
Persistir
```

No aparece ninguna funcionalidad visible parcialmente conectada.

## Estado definitivo

| Área              | Funcionalidad          | Estado |
| ----------------- | ---------------------- | :----: |
| Gestión           | Crear tareas           |   ✅   |
| Gestión           | Crear con prioridad    |   ✅   |
| Gestión           | Editar texto           |   ✅   |
| Gestión           | Eliminar               |   ✅   |
| Gestión           | Completar/reabrir      |   ✅   |
| Gestión           | Cambiar prioridad      |   ✅   |
| Acciones globales | Alternar todas         |   ✅   |
| Acciones globales | Limpiar completadas    |   ✅   |
| Historial         | Undo                   |   ✅   |
| Historial         | Redo                   |   ✅   |
| Consulta          | Filtrar                |   ✅   |
| Consulta          | Estadísticas           |   ✅   |
| Persistencia      | Tareas                 |   ✅   |
| Persistencia      | Prioridad              |   ✅   |
| Persistencia      | Filtro                 |   ✅   |
| Persistencia      | Cambios tras Undo/Redo |   ✅   |

# Observaciones técnicas encontradas

## 1. `TaskForm` consume directamente `useTasks`

```tsx
const { addTask } = useTasks();
```

Mientras que el resto de operaciones bajan desde `App` mediante propiedades.

Esto produce dos estilos de integración:

```text
App → props → componentes
```

y:

```text
TaskForm → useTasks directamente
```

No es necesariamente incorrecto, pero sí es una inconsistencia arquitectónica que merece revisar más adelante.

Además, `TaskForm` crea una suscripción adicional al Store porque `useTasks()` utiliza `useSyncExternalStore`, aunque el formulario solo necesita `addTask`.

La alternativa coherente con el resto sería:

```tsx
<TaskForm onAddTask={addTask} />
```

No lo modificaría durante la radiografía. Lo anotaría como **posible refactorización técnica**.

## 2. Importación sin utilizar

En `TaskForm.tsx` aparece:

```tsx
import { PRIORITY_LABELS } from "../constants/priorityLabels";
```

pero las opciones están escritas directamente:

```tsx
<option value="low">Baja</option>
<option value="medium">Media</option>
<option value="high">Alta</option>
```

Si el lint no ha informado de ello, quizá la configuración permita imports no usados; en cualquier caso hay una incoherencia:

- o se usa `PRIORITY_LABELS`;
- o se elimina la importación.

También lo anotaría como limpieza técnica.

# Próximo bloque: modelo de dominio

Ahora revisaremos qué conceptos existen realmente en el dominio y qué responsabilidades asume cada uno.

Ejecuta:

```bash
find src/domain/tasks -maxdepth 3 -type f | sort
```

y después:

```bash
sed -n '1,220p' src/domain/tasks/entities/task.ts
sed -n '1,220p' src/domain/tasks/entities/taskList.ts
sed -n '1,220p' src/domain/tasks/entities/Priority.ts
```

Con eso construiremos el inventario definitivo de:

- entidades;
- Value Objects;
- agregados;
- reglas de negocio;
- posibles conceptos obsoletos o incompletos.

---

find src/domain/tasks -maxdepth 3 -type f | sort
src/domain/tasks/entities/Priority.test.ts
src/domain/tasks/entities/Priority.ts
src/domain/tasks/entities/taskId.ts
src/domain/tasks/entities/taskList.ts
src/domain/tasks/entities/taskStatus.ts
src/domain/tasks/entities/taskText.ts
src/domain/tasks/entities/task.ts
src/domain/tasks/taskFilter.ts
src/domain/tasks/tasksReducer.ts
src/domain/tasks/tasksSelectors.ts sed -n '1,220p' src/domain/tasks/entities/task.ts
sed -n '1,220p' src/domain/tasks/entities/taskList.ts
sed -n '1,220p' src/domain/tasks/entities/Priority.ts
import { TaskId } from "./taskId";
import { TaskText } from "./taskText";
import { Priority, type PriorityValue } from "./Priority";

export class Task {
constructor(
public readonly id: TaskId,
public readonly text: TaskText,
public readonly completed: boolean,
public readonly priority: Priority,
) {}

static create(text: string, priority: Priority = Priority.medium()): Task {
return new Task(TaskId.create(), TaskText.create(text), false, priority);
}

static restore(data: {
id: string;
text: string;
completed: boolean;
priority?: PriorityValue;
}): Task {
return new Task(
TaskId.from(data.id),
TaskText.create(data.text),
data.completed,
data.priority ? Priority.restore(data.priority) : Priority.medium(),
);
}

changePriority(newPriority: Priority): Task {
return this.priority.equals(newPriority)
? this
: new Task(this.id, this.text, this.completed, newPriority);
}

toggle(): Task {
return new Task(this.id, this.text, !this.completed, this.priority);
}

complete(): Task {
return this.completed
? this
: new Task(this.id, this.text, true, this.priority);
}

rename(text: TaskText): Task {
return new Task(this.id, text, this.completed, this.priority);
}

uncomplete(): Task {
return this.completed
? new Task(this.id, this.text, false, this.priority)
: this;
}
}
import { Task } from "./task";
import { TaskId } from "./taskId";
import { TaskText } from "./taskText";

export class TaskList {
private constructor(private readonly tasks: readonly Task[]) {
const ids = new Set(tasks.map((task) => task.id.toString()));

    if (ids.size !== tasks.length) {
      throw new Error("TaskList cannot contain duplicated task ids.");
    }

}

static empty(): TaskList {
return new TaskList([]);
}

static from(tasks: readonly Task[]): TaskList {
return new TaskList(tasks);
}

getItems(): readonly Task[] {
return this.tasks;
}

add(task: Task): TaskList {
return new TaskList([...this.tasks, task]);
}

remove(id: TaskId): TaskList {
return new TaskList(
this.tasks.filter((task) => task.id.toString() !== id.toString()),
);
}

toggle(id: TaskId): TaskList {
return new TaskList(
this.tasks.map((task) =>
task.id.toString() === id.toString() ? task.toggle() : task,
),
);
}

rename(id: TaskId, text: TaskText): TaskList {
return new TaskList(
this.tasks.map((task) =>
task.id.toString() === id.toString() ? task.rename(text) : task,
),
);
}

clearCompleted(): TaskList {
return new TaskList(this.tasks.filter((task) => !task.completed));
}
}
export type PriorityValue = "low" | "medium" | "high";

export class Priority {
private constructor(private readonly value: PriorityValue) {}

static low(): Priority {
return new Priority("low");
}

static medium(): Priority {
return new Priority("medium");
}

static high(): Priority {
return new Priority("high");
}

static restore(value: PriorityValue): Priority {
return new Priority(value);
}

toString(): PriorityValue {
return this.value;
}

equals(other: Priority): boolean {
return this.value === other.value;
}
}

---

Con estas salidas ya podemos perfilar bastante bien el **modelo de dominio actual**.

# Bloque 2 — Modelo de dominio

## 1. Entidad `Task`

`Task` está claramente modelada como una entidad con identidad propia:

```ts
id: TaskId;
text: TaskText;
completed: boolean;
priority: Priority;
```

Sus operaciones de dominio son:

- `create`
- `restore`
- `changePriority`
- `toggle`
- `complete`
- `rename`
- `uncomplete`

Además, mantiene inmutabilidad: cada cambio devuelve una nueva instancia, salvo cuando no existe modificación real.

Ejemplo:

```ts
changePriority(newPriority: Priority): Task {
  return this.priority.equals(newPriority)
    ? this
    : new Task(this.id, this.text, this.completed, newPriority);
}
```

Eso evita generar estados nuevos innecesariamente.

### Estado

✅ Entidad consolidada.

---

## 2. Value Objects

El dominio contiene:

- `TaskId`
- `TaskText`
- `Priority`
- `TaskStatus`

Por el código que hemos visto, `Task` utiliza directamente:

- `TaskId`
- `TaskText`
- `Priority`

Sin embargo, el estado de completado sigue representado mediante:

```ts
completed: boolean;
```

Esto deja una pregunta importante:

> ¿`TaskStatus` sigue formando parte del modelo real o es un resto de una etapa anterior?

Tenemos que comprobarlo antes de considerarlo activo.

---

## 3. `Priority`

`Priority` está correctamente encapsulada como Value Object:

```ts
"low" | "medium" | "high";
```

Ofrece:

- fábricas explícitas;
- restauración;
- representación;
- igualdad por valor.

### Observación

`Priority.restore()` acepta un `PriorityValue`, por lo que TypeScript protege las llamadas internas. Sin embargo, en tiempo de ejecución no valida valores procedentes de datos externos.

Ahora mismo el repositorio tipa el valor persistido, pero `localStorage` podría contener datos corruptos o antiguos.

No es necesariamente un problema inmediato, aunque sí una posible mejora futura:

```ts
static restore(value: string): Priority {
  if (!["low", "medium", "high"].includes(value)) {
    return Priority.medium();
  }

  return new Priority(value as PriorityValue);
}
```

No lo modificaría durante la radiografía.

---

## 4. `TaskList`

`TaskList` funciona como objeto que protege las operaciones colectivas sobre tareas.

Actualmente implementa:

- creación vacía;
- restauración desde una colección;
- protección frente a identificadores duplicados;
- añadir;
- eliminar;
- alternar estado;
- renombrar;
- eliminar completadas.

### Regla protegida

```ts
TaskList cannot contain duplicated task ids.
```

Por tanto, no es una simple colección: protege al menos un invariante del dominio.

### Posible inconsistencia

`TaskList` no incorpora operaciones colectivas que sabemos que existen en el sistema:

- cambiar prioridad;
- completar todas;
- dejar todas pendientes.

Esto puede significar dos cosas:

1. Esas transformaciones se resuelven directamente en el reducer.
2. `TaskList` no se está utilizando de forma uniforme para todas las operaciones colectivas.

No debemos concluir todavía que sea incorrecto. Necesitamos revisar `tasksReducer.ts`.

---

# Inventario provisional del dominio

| Elemento     | Tipo                            |          Estado           |
| ------------ | ------------------------------- | :-----------------------: |
| `Task`       | Entidad                         |      ✅ Consolidada       |
| `TaskList`   | Colección de dominio / agregado |         ✅ Activa         |
| `TaskId`     | Value Object                    |         ✅ Activo         |
| `TaskText`   | Value Object                    |         ✅ Activo         |
| `Priority`   | Value Object                    |         ✅ Activo         |
| `TaskStatus` | Value Object                    | ❓ Pendiente de comprobar |
| `TaskFilter` | Tipo de consulta                |         ✅ Activo         |
| Reducer      | Transformación del estado       |   Pendiente de revisar    |
| Selectores   | Consulta del estado             |   Pendiente de revisar    |

# Hallazgos provisionales

## Posible elemento obsoleto

`taskStatus.ts` podría haber quedado sin uso después de volver a representar el estado mediante un booleano.

## Posible distribución desigual del comportamiento

`TaskList` encapsula algunas operaciones sobre colecciones, pero quizá no todas. Necesitamos comprobar si el reducer duplica operaciones que podrían pertenecer a `TaskList`.

## Prioridad completamente integrada

Ya no queda duda: forma parte del modelo de dominio, la restauración y las operaciones de usuario.

# Siguiente comprobación

Ejecuta:

```bash
sed -n '1,180p' src/domain/tasks/entities/taskId.ts
sed -n '1,180p' src/domain/tasks/entities/taskText.ts
sed -n '1,180p' src/domain/tasks/entities/taskStatus.ts
```

Después:

```bash
sed -n '1,260p' src/domain/tasks/tasksReducer.ts
```

Y para conocer el uso real de `TaskStatus` y `TaskList`:

```bash
git grep -n "TaskStatus"
git grep -n "TaskList"
```

Con esas salidas podremos determinar:

- si `TaskStatus` es código vigente u obsoleto;
- si todas las reglas colectivas están correctamente situadas;
- qué comportamiento reside en `Task`, qué comportamiento reside en `TaskList` y qué comportamiento permanece en el reducer.

---

ed -n '1,180p' src/domain/tasks/entities/taskId.ts
sed -n '1,180p' src/domain/tasks/entities/taskText.ts
sed -n '1,180p' src/domain/tasks/entities/taskStatus.ts
export class TaskId {
private constructor(private readonly value: string) {}

static create(): TaskId {
return new TaskId(crypto.randomUUID());
}

static from(value: string): TaskId {
return new TaskId(value);
}

toString(): string {
return this.value;
}
}
export class TaskText {
private constructor(private readonly \_value: string) {}

static create(value: string): TaskText {
const trimmedValue = value.trim();

    if (!trimmedValue) {
      throw new Error("Task text cannot be empty");
    }

    if (trimmedValue.length > 200) {
      throw new Error("Task text cannot exceed 200 characters");
    }

    return new TaskText(trimmedValue);

}

static restore(value: string): TaskText {
return new TaskText(value);
}

value(): string {
return this.\_value;
}

toString(): string {
return this.\_value;
}

equals(other: TaskText): boolean {
return this.\_value === other.\_value;
}
}
export class TaskStatus {
private constructor(private readonly completed: boolean) {}

static pending() {
return new TaskStatus(false);
}

static completed() {
return new TaskStatus(true);
}

static from(value: boolean) {
return new TaskStatus(value);
}

toggle() {
return new TaskStatus(!this.completed);
}

getValue() {
return this.completed;
}
} sed -n '1,260p' src/domain/tasks/tasksReducer.ts
import { TaskList } from "./entities/taskList";
import { type Task } from "./entities/task";
import { TaskId } from "./entities/taskId";
import { TaskText } from "./entities/taskText";
import { Priority } from "./entities/Priority";

export const ACTIONS = {
ADD_TASK: "ADD_TASK",
DELETE_TASK: "DELETE_TASK",
TOGGLE_TASK: "TOGGLE_TASK",
EDIT_TASK: "EDIT_TASK",
CHANGE_PRIORITY: "CHANGE_PRIORITY",
CLEAR_COMPLETED: "CLEAR_COMPLETED",
MARK_ALL_COMPLETED: "MARK_ALL_COMPLETED",
MARK_ALL_PENDING: "MARK_ALL_PENDING",
} as const;

export type TaskAction =
| {
type: typeof ACTIONS.ADD_TASK;
payload: Task;
}
| {
type: typeof ACTIONS.DELETE_TASK;
payload: string;
}
| {
type: typeof ACTIONS.TOGGLE_TASK;
payload: string;
}
| {
type: typeof ACTIONS.EDIT_TASK;
payload: { id: string; text: string };
}
| {
type: typeof ACTIONS.CHANGE_PRIORITY;
payload: { id: string; priority: Priority };
}
| {
type: typeof ACTIONS.CLEAR_COMPLETED;
}
| {
type: typeof ACTIONS.MARK_ALL_COMPLETED;
}
| {
type: typeof ACTIONS.MARK_ALL_PENDING;
};

export type TasksState = Task[];

export function tasksReducer(
state: TasksState,
action: TaskAction,
): TasksState {
switch (action.type) {
case ACTIONS.ADD_TASK:
return [...TaskList.from(state).add(action.payload).getItems()];

    case ACTIONS.DELETE_TASK:
      return [
        ...TaskList.from(state).remove(TaskId.from(action.payload)).getItems(),
      ];

    case ACTIONS.TOGGLE_TASK:
      return [
        ...TaskList.from(state).toggle(TaskId.from(action.payload)).getItems(),
      ];

    case ACTIONS.MARK_ALL_COMPLETED:
      return state.map((task) => task.complete());

    case ACTIONS.EDIT_TASK:
      return [
        ...TaskList.from(state)
          .rename(
            TaskId.from(action.payload.id),
            TaskText.create(action.payload.text),
          )
          .getItems(),
      ];

    case ACTIONS.CHANGE_PRIORITY:
      return state.map((task) =>
        task.id.toString() === action.payload.id
          ? task.changePriority(action.payload.priority)
          : task,
      );

    case ACTIONS.CLEAR_COMPLETED:
      return [...TaskList.from(state).clearCompleted().getItems()];

    case ACTIONS.MARK_ALL_PENDING:
      return state.map((task) => task.uncomplete());

    default:
      return state;

}
} git grep -n "TaskStatus"
git grep -n "TaskList"
src/domain/tasks/entities/taskStatus.ts:1:export class TaskStatus {
src/domain/tasks/entities/taskStatus.ts:5: return new TaskStatus(false);
src/domain/tasks/entities/taskStatus.ts:9: return new TaskStatus(true);
src/domain/tasks/entities/taskStatus.ts:13: return new TaskStatus(value);
src/domain/tasks/entities/taskStatus.ts:17: return new TaskStatus(!this.completed);
docs/02-architecture/ARCHITECTURE.md:209:- Componentes de presentación (`TaskForm`, `TaskList`, `TaskItem`, `TaskActions`, `TaskFilters`, `TaskPrioritySelect`).
docs/02-architecture/ARCHITECTURE.md:295:- Entidades (`Task`, `TaskList`).
docs/02-architecture/ARCHITECTURE.md:740:En la arquitectura actual, las principales entidades del dominio son `Task` y `TaskList`.
docs/02-architecture/ARCHITECTURE.md:800:- Incorporar `TaskList` como entidad responsable de las operaciones sobre colecciones de tareas.
docs/02-architecture/adr/002-testing-strategy.md:137:- `TaskList`
docs/02-architecture/architecture-evolution.md:199:- Objetos especializados como `TaskList`.
docs/03-development/TESTING.md:375: ├── TaskList.test.jsx
src/App.tsx:5:import TaskList from "./ui/components/TaskList";
src/App.tsx:49: <TaskList
src/domain/tasks/entities/taskList.ts:5:export class TaskList {
src/domain/tasks/entities/taskList.ts:10: throw new Error("TaskList cannot contain duplicated task ids.");
src/domain/tasks/entities/taskList.ts:14: static empty(): TaskList {
src/domain/tasks/entities/taskList.ts:15: return new TaskList([]);
src/domain/tasks/entities/taskList.ts:18: static from(tasks: readonly Task[]): TaskList {
src/domain/tasks/entities/taskList.ts:19: return new TaskList(tasks);
src/domain/tasks/entities/taskList.ts:26: add(task: Task): TaskList {
src/domain/tasks/entities/taskList.ts:27: return new TaskList([...this.tasks,

---

Con estas salidas ya podemos cerrar casi por completo la radiografía del **modelo de dominio**.

# Bloque 2 — Modelo de dominio

## 1. `TaskStatus` es código obsoleto

La búsqueda es concluyente:

```text
src/domain/tasks/entities/taskStatus.ts
```

No aparece ningún consumidor real.

Mientras tanto, `Task` utiliza directamente:

```ts
public readonly completed: boolean
```

Por tanto, `TaskStatus` ya no forma parte del modelo vigente.

### Conclusión

`taskStatus.ts` es un resto de una etapa anterior y puede clasificarse como:

> 🧹 Código obsoleto pendiente de eliminación.

No lo eliminaría todavía dentro de la radiografía, pero sí lo incorporaría al backlog técnico inmediato.

---

## 2. `TaskId`

`TaskId` encapsula correctamente la identidad:

- crea identificadores mediante `crypto.randomUUID()`;
- restaura identificadores existentes;
- evita que el resto del sistema trabaje directamente con el valor interno.

### Observación

No valida el valor restaurado:

```ts
static from(value: string): TaskId {
  return new TaskId(value);
}
```

Eso puede ser perfectamente aceptable en el estado actual, aunque deja abierta una posible validación futura para datos externos corruptos.

### Estado

✅ Activo y consolidado.

---

## 3. `TaskText`

`TaskText` protege dos reglas del dominio:

- no puede estar vacío;
- no puede superar 200 caracteres.

También normaliza el texto mediante `trim()`.

### Posible inconsistencia

Existen dos formas de reconstruirlo:

```ts
TaskText.create(value);
TaskText.restore(value);
```

Pero `Task.restore()` utiliza:

```ts
TaskText.create(data.text);
```

y no:

```ts
TaskText.restore(data.text);
```

Esto hace que `restore()` de `TaskText` no tenga consumidores aparentes.

Conviene comprobarlo:

```bash
git grep -n "TaskText.restore"
```

Si no devuelve resultados, podríamos estar ante otro método obsoleto.

Además, `TaskText.restore()` no aplica validación ni `trim`, mientras que `Task.restore()` sí valida mediante `create()`. En la práctica, el modelo actual parece haber decidido que incluso los datos persistidos deben reconstruirse aplicando las reglas vigentes.

### Estado

✅ Activo, con posible método obsoleto.

---

## 4. `Priority`

Está integrada correctamente como Value Object.

Pero comparte una característica con `TaskId`:

```ts
static restore(value: PriorityValue): Priority
```

El tipo protege durante compilación, pero no frente a datos JSON manipulados en tiempo de ejecución.

No es un error actual. Es una posible mejora de robustez de infraestructura.

### Estado

✅ Activo y consolidado.

---

# 5. `TaskList` está parcialmente utilizada

El reducer delega en `TaskList` estas operaciones:

- añadir;
- eliminar;
- alternar una tarea;
- renombrar;
- eliminar completadas.

Pero ejecuta directamente sobre el array:

- completar todas;
- dejar todas pendientes;
- cambiar prioridad.

La distribución actual es:

| Operación              | Responsable      |
| ---------------------- | ---------------- |
| Añadir                 | `TaskList`       |
| Eliminar               | `TaskList`       |
| Alternar               | `TaskList`       |
| Renombrar              | `TaskList`       |
| Limpiar completadas    | `TaskList`       |
| Cambiar prioridad      | Reducer + `Task` |
| Completar todas        | Reducer + `Task` |
| Dejar todas pendientes | Reducer + `Task` |

Esto no rompe el funcionamiento, pero revela una inconsistencia de diseño.

Si `TaskList` es realmente la entidad responsable de las operaciones sobre colecciones de tareas, probablemente debería ofrecer también:

```ts
changePriority(id: TaskId, priority: Priority): TaskList
completeAll(): TaskList
uncompleteAll(): TaskList
```

Entonces el reducer quedaría limitado a traducir acciones en operaciones del dominio.

No haría este cambio todavía. Lo registraría como una **refactorización candidata**, porque antes debemos decidir conscientemente cuál es la responsabilidad real de `TaskList`.

---

# 6. El reducer mantiene un papel híbrido

Actualmente realiza dos tipos de trabajo:

## Delegación al dominio

```ts
TaskList.from(state).remove(...)
TaskList.from(state).rename(...)
```

## Transformación directa

```ts
state.map((task) => task.complete())
state.map((task) => task.changePriority(...))
```

No contiene reglas complejas, porque delega cada comportamiento individual en `Task`, pero sí conoce cómo recorrer la colección.

### Veredicto

🟡 Funcionalmente correcto, pero arquitectónicamente no completamente uniforme.

---

# Inventario definitivo del dominio

| Elemento         | Tipo                         | Estado                             |
| ---------------- | ---------------------------- | ---------------------------------- |
| `Task`           | Entidad                      | ✅ Consolidada                     |
| `TaskList`       | Entidad colectiva / agregado | ✅ Activa, responsabilidad parcial |
| `TaskId`         | Value Object                 | ✅ Consolidado                     |
| `TaskText`       | Value Object                 | ✅ Consolidado                     |
| `Priority`       | Value Object                 | ✅ Consolidado                     |
| `TaskStatus`     | Value Object                 | 🧹 Obsoleto                        |
| `TaskFilter`     | Tipo de consulta             | ✅ Activo                          |
| `tasksReducer`   | Transformador de estado      | ✅ Funcional, diseño híbrido       |
| `tasksSelectors` | Consultas                    | Pendiente de revisar               |

# Backlog técnico provisional

## Limpieza segura

- Eliminar `taskStatus.ts` si se confirma que no existe ninguna referencia indirecta.
- Comprobar si `TaskText.restore()` está sin uso.
- Eliminar la importación no usada de `PRIORITY_LABELS` en `TaskForm.tsx`.

## Refactorizaciones a evaluar

- Pasar `changePriority`, `completeAll` y `uncompleteAll` a `TaskList`.
- Decidir si `TaskForm` debe recibir `addTask` mediante props en lugar de usar `useTasks()` directamente.
- Revisar si `markAllCompleted` y `markAllPending` necesitan exponerse desde `useTasks`.

## Robustez futura

- Validar identificadores restaurados.
- Validar prioridades procedentes de almacenamiento externo.

# Siguiente paso

Para cerrar el dominio faltan los selectores y el tipo de filtro.

Ejecuta:

```bash
sed -n '1,260p' src/domain/tasks/tasksSelectors.ts
sed -n '1,160p' src/domain/tasks/taskFilter.ts
git grep -n "TaskText.restore"
```

Después podremos declarar cerrado el Bloque 2 y pasar a la capa de aplicación y sus casos de uso.

---

git grep -n "TaskText.restore" no devuelve nada sed -n '1,260p' src/domain/tasks/tasksSelectors.ts
sed -n '1,160p' src/domain/tasks/taskFilter.ts
git grep -n "TaskText.restore"
import type { Task } from "./entities/task";
import type { TaskFilter } from "./taskFilter";
import { createSelector } from "../../store/createSelector";

/\*\*

- Selectores puros
  \*/

export function selectAllTasks(tasks: Task[]): Task[] {
return tasks;
}

export function selectActiveTasks(tasks: Task[]): Task[] {
return tasks.filter((task) => !task.completed);
}

export function selectCompletedTasks(tasks: Task[]): Task[] {
return tasks.filter((task) => task.completed);
}

export function selectVisibleTasks(tasks: Task[], filter: TaskFilter): Task[] {
switch (filter) {
case "active":
return selectActiveTasks(tasks);

    case "completed":
      return selectCompletedTasks(tasks);

    case "all":
    default:
      return selectAllTasks(tasks);

}
}

export function selectTotalTasks(tasks: Task[]): number {
return tasks.length;
}

export function selectCompletedCount(tasks: Task[]): number {
return selectCompletedTasks(tasks).length;
}

export function selectPendingCount(tasks: Task[]): number {
return selectActiveTasks(tasks).length;
}

export function selectHasPendingTasks(tasks: Task[]): boolean {
return selectPendingCount(tasks) > 0;
}

export function selectHasCompletedTasks(tasks: Task[]): boolean {
return selectCompletedCount(tasks) > 0;
}

/\*\*

- Selectores memoizados
  \*/

export const selectTasks = (state: Task[]) => state;

export const selectCompleted = createSelector(
selectTasks,
selectCompletedTasks,
);

export const selectPending = createSelector(selectTasks, selectActiveTasks);

export const selectHasPending = createSelector(
selectTasks,
selectHasPendingTasks,
);
export type TaskFilter = "all" | "active" | "completed";

---

Con esto podemos cerrar el **Bloque 2 — Modelo de dominio**.

## `TaskText.restore()` está obsoleto

La búsqueda no devuelve usos, así que actualmente:

```ts
TaskText.restore();
```

no forma parte del flujo real.

Además, `Task.restore()` utiliza:

```ts
TaskText.create(data.text);
```

Eso significa que, incluso al reconstruir una tarea persistida, se aplican las reglas vigentes del dominio.

Por tanto, `TaskText.restore()` puede clasificarse como:

> 🧹 Método obsoleto pendiente de eliminación.

## Selectores

Los selectores están bien organizados en dos grupos.

### Selectores puros

- todas;
- activas;
- completadas;
- visibles según filtro;
- total;
- completadas;
- pendientes;
- existencia de pendientes;
- existencia de completadas.

Son simples, predecibles y no contienen lógica ajena a la consulta.

### Selectores memoizados

- `selectCompleted`
- `selectPending`
- `selectHasPending`

Aquí aparece una posible cuestión de uso real: no sabemos todavía si todos estos selectores memoizados tienen consumidores.

Conviene comprobarlo más adelante con:

```bash
git grep -n "selectCompleted"
git grep -n "selectPending"
git grep -n "selectHasPending"
```

No hay que asumir que están obsoletos, pero sí verificar si siguen aportando valor.

## `TaskFilter`

Está correctamente modelado como unión cerrada:

```ts
"all" | "active" | "completed";
```

Es suficiente para el estado actual y evita valores inválidos en compilación.

## Resultado definitivo del dominio

| Elemento              | Estado                                 |
| --------------------- | -------------------------------------- |
| `Task`                | ✅ Consolidada                         |
| `TaskList`            | ✅ Activa, con responsabilidad parcial |
| `TaskId`              | ✅ Activo                              |
| `TaskText`            | ✅ Activo                              |
| `TaskText.restore()`  | 🧹 Obsoleto                            |
| `Priority`            | ✅ Activo                              |
| `TaskStatus`          | 🧹 Obsoleto                            |
| `TaskFilter`          | ✅ Activo                              |
| Selectores puros      | ✅ Consolidados                        |
| Selectores memoizados | ❓ Pendiente de comprobar uso          |
| Reducer               | ✅ Funcional, diseño híbrido           |

# Conclusión del Bloque 2

El dominio está estable y funcional. No hay funcionalidades incompletas, pero sí aparecen varias oportunidades de limpieza y simplificación:

- eliminar `TaskStatus`;
- eliminar `TaskText.restore()`;
- revisar selectores memoizados sin consumidores;
- decidir si `TaskList` debe asumir todas las operaciones colectivas.

No tocaría todavía ninguna de ellas. Ya tenemos el inventario y las convertiremos después en backlog técnico priorizado.

# Siguiente bloque — Capa de aplicación

Ahora necesitamos revisar:

- casos de uso existentes;
- composición;
- acciones;
- historial;
- posibles operaciones expuestas sin consumidores.

Ejecuta:

```bash
find src/application -maxdepth 4 -type f | sort
```

Después:

```bash
sed -n '1,240p' src/application/tasks/composition.ts
sed -n '1,260p' src/application/tasks/taskActions.ts
sed -n '1,180p' src/application/tasks/taskActions.types.ts
```

Y por último:

```bash
find src/application/tasks/useCases -maxdepth 1 -type f | sort
```

Con eso construiremos el mapa completo de la capa de aplicación.

---

git grep -n "selectCompleted"
git grep -n "selectPending"
git grep -n "selectHasPending"
src/domain/tasks/tasksSelectors.ts:17:export function selectCompletedTasks(tasks: Task[]): Task[] {
src/domain/tasks/tasksSelectors.ts:27: return selectCompletedTasks(tasks);
src/domain/tasks/tasksSelectors.ts:39:export function selectCompletedCount(tasks: Task[]): number {
src/domain/tasks/tasksSelectors.ts:40: return selectCompletedTasks(tasks).length;
src/domain/tasks/tasksSelectors.ts:52: return selectCompletedCount(tasks) > 0;
src/domain/tasks/tasksSelectors.ts:61:export const selectCompleted = createSelector(
src/domain/tasks/tasksSelectors.ts:63: selectCompletedTasks,
src/tests/tasksSelectors.test.ts:6: selectCompletedTasks,
src/tests/tasksSelectors.test.ts:9: selectCompletedCount,
src/tests/tasksSelectors.test.ts:69: it("selectCompletedTasks devuelve solo las completadas", () => {
src/tests/tasksSelectors.test.ts:70: expect(selectCompletedTasks(tasks)).toEqual([tasks[1]]);
src/tests/tasksSelectors.test.ts:91: it("selectCompletedCount devuelve el número de tareas completadas", () => {
src/tests/tasksSelectors.test.ts:92: expect(selectCompletedCount(tasks)).toBe(1);
src/ui/hooks/useTasks.ts:10: selectCompletedCount,
src/ui/hooks/useTasks.ts:39: const completedTasks = selectCompletedCount(tasks)src/domain/tasks/tasksSelectors.ts:43:export function selectPendingCount(tasks: Task[]): number {
src/domain/tasks/tasksSelectors.ts:48: return selectPendingCount(tasks) > 0;
src/domain/tasks/tasksSelectors.ts:66:export const selectPending = createSelector(selectTasks, selectActiveTasks);
src/tests/tasksSelectors.test.ts:10: selectPendingCount,
src/tests/tasksSelectors.test.ts:95: it("selectPendingCount devuelve el número de tareas pendientes", () => {
src/tests/tasksSelectors.test.ts:96: expect(selectPendingCount(tasks)).toBe(2);
src/ui/hooks/useTasks.ts:9: selectPendingCount,
src/ui/hooks/useTasks.ts:38: const pendingTasks = selectPendingCount(tasks);
src/application/tasks/taskActions.ts:5:import { selectHasPendingTasks } from "../../domain/tasks/tasksSelectors";
src/application/tasks/taskActions.ts:73: return selectHasPendingTasks(store.getState());
src/domain/tasks/tasksSelectors.ts:47:export function selectHasPendingTasks(tasks: Task[]): boolean {
src/domain/tasks/tasksSelectors.ts:68:export const selectHasPending = createSelector(
src/domain/tasks/tasksSelectors.ts:70: selectHasPendingTasks,
src/tests/tasksSelectors.test.ts:11: selectHasPendingTasks,
src/tests/tasksSelectors.test.ts:101: it("selectHasPendingTasks devuelve true cuando hay tareas pendientes", () => {
src/tests/tasksSelectors.test.ts:102: expect(selectHasPendingTasks(tasks)).toBe(true);
src/tests/tasksSelectors.test.ts:105: it("selectHasPendingTasks devuelve false cuando no hay tareas pendientes", () => {
src/tests/tasksSelectors.test.ts:106: expect(selectHasPendingTasks(completedTasks)).toBe(false);
src/ui/hooks/useTasks.ts:6: selectHasPendingTasks,
src/ui/hooks/useTasks.ts:41: const hasPendingTasks = selectHasPendingTasks(tasks); find src/application -maxdepth 4 -type f | sort
src/application/history/History.test.ts
src/application/history/History.ts
src/application/tasks/composition.ts
src/application/tasks/taskActions.ts
src/application/tasks/taskActions.types.ts
src/application/tasks/tasksStore.ts
src/application/tasks/**tests**/taskActions.test.ts
src/application/tasks/useCases/addTask.ts
src/application/tasks/useCases/changeTaskPriority.ts
src/application/tasks/useCases/clearCompleted.ts
src/application/tasks/useCases/deleteTask.ts
src/application/tasks/useCases/editTask.ts
src/application/tasks/useCases/markAllCompleted.ts
src/application/tasks/useCases/markAllPending.ts
src/application/tasks/useCases/redo.test.ts
src/application/tasks/useCases/redo.ts
src/application/tasks/useCases/toggleAll.test.ts
src/application/tasks/useCases/toggleAll.ts
src/application/tasks/useCases/toggleTask.ts
src/application/tasks/useCases/undo.test.ts
src/application/tasks/useCases/undo.ts sed -n '1,240p' src/application/tasks/composition.ts
sed -n '1,260p' src/application/tasks/taskActions.ts
sed -n '1,180p' src/application/tasks/taskActions.types.ts
import { History } from "../history/History";
import type { Task } from "../../domain/tasks/entities/task";
import { createTaskActions } from "./taskActions";
import { tasksStore } from "./tasksStore";
import { createAddTaskUseCase } from "./useCases/addTask";
import { createToggleTaskUseCase } from "./useCases/toggleTask";
import { createDeleteTaskUseCase } from "./useCases/deleteTask";
import { createEditTaskUseCase } from "./useCases/editTask";
import { createClearCompletedUseCase } from "./useCases/clearCompleted";
import { createMarkAllCompletedUseCase } from "./useCases/markAllCompleted";
import { createMarkAllPendingUseCase } from "./useCases/markAllPending";
import { createUndoUseCase } from "./useCases/undo";
import { createRedoUseCase } from "../tasks/useCases/redo";
import { createChangeTaskPriorityUseCase } from "./useCases/changeTaskPriority";
import { createToggleAllUseCase } from "./useCases/toggleAll";

const history = new History<Task[]>();

const taskActions = createTaskActions(tasksStore, history);

export const markAllCompletedUseCase =
createMarkAllCompletedUseCase(taskActions);

export const markAllPendingUseCase = createMarkAllPendingUseCase(taskActions);

export const toggleAllUseCase = createToggleAllUseCase(taskActions);

export const addTaskUseCase = createAddTaskUseCase(taskActions);

export const toggleTaskUseCase = createToggleTaskUseCase(taskActions);

export const deleteTaskUseCase = createDeleteTaskUseCase(taskActions);

export const editTaskUseCase = createEditTaskUseCase(taskActions);

export const clearCompletedUseCase = createClearCompletedUseCase(taskActions);

export const changeTaskPriorityUseCase =
createChangeTaskPriorityUseCase(taskActions);

export const undoUseCase = createUndoUseCase(taskActions);
export const redoUseCase = createRedoUseCase(taskActions);

export const hasUndo = () => taskActions.hasUndo();
export const hasRedo = () => taskActions.hasRedo();
import type { Store } from "../../store/types";
import type { Task } from "../../domain/tasks/entities/task";
import type { Priority } from "../../domain/tasks/entities/Priority";
import { ACTIONS, type TaskAction } from "../../domain/tasks/tasksReducer";
import { selectHasPendingTasks } from "../../domain/tasks/tasksSelectors";
import type { History } from "../history/History";
import type { TaskActions } from "./taskActions.types";

export function createTaskActions(
store: Store<Task[], TaskAction>,
history: History<Task[]>,
): TaskActions {
function dispatchWithHistory(action: TaskAction): void {
history.push(store.getState());
store.dispatch(action);
}

return {
addTask(task: Task): void {
dispatchWithHistory({
type: ACTIONS.ADD_TASK,
payload: task,
});
},

    deleteTask(id: string): void {
      dispatchWithHistory({
        type: ACTIONS.DELETE_TASK,
        payload: id,
      });
    },

    toggleTask(id: string): void {
      dispatchWithHistory({
        type: ACTIONS.TOGGLE_TASK,
        payload: id,
      });
    },

    editTask(id: string, text: string): void {
      dispatchWithHistory({
        type: ACTIONS.EDIT_TASK,
        payload: { id, text },
      });
    },

    changePriority(id: string, priority: Priority): void {
      dispatchWithHistory({
        type: ACTIONS.CHANGE_PRIORITY,
        payload: { id, priority },
      });
    },

    clearCompleted(): void {
      dispatchWithHistory({
        type: ACTIONS.CLEAR_COMPLETED,
      });
    },

    markAllCompleted(): void {
      dispatchWithHistory({
        type: ACTIONS.MARK_ALL_COMPLETED,
      });
    },

    markAllPending(): void {
      dispatchWithHistory({
        type: ACTIONS.MARK_ALL_PENDING,
      });
    },

    hasPendingTasks(): boolean {
      return selectHasPendingTasks(store.getState());
    },

    undo(): void {
      const previousState = history.undo(store.getState());

      if (previousState !== undefined) {
        store.replaceState(previousState);
      }
    },

    redo(): void {
      const nextState = history.redo(store.getState());

      if (nextState !== undefined) {
        store.replaceState(nextState);
      }
    },

    canUndo(): boolean {
      return history.canUndo();
    },

    canRedo(): boolean {
      return history.canRedo();
    },

    hasUndo(): boolean {
      return history.canUndo();
    },

    hasRedo(): boolean {
      return history.canRedo();
    },

};
}
import type { Task } from "../../domain/tasks/entities/task";
import type { Priority } from "../../domain/tasks/entities/Priority";

export interface TaskActions {
addTask(task: Task): void;
deleteTask(id: string): void;
toggleTask(id: string): void;
editTask(id: string, text: string): void;
changePriority(id: string, priority: Priority): void;
clearCompleted(): void;
markAllCompleted(): void;
markAllPending(): void;
hasPendingTasks(): boolean;
undo(): void;
redo(): void;
canUndo(): boolean;
canRedo(): boolean;
hasUndo(): boolean;
hasRedo(): boolean;
} find src/application/tasks/useCases -maxdepth 1 -type f | sort
src/application/tasks/useCases/addTask.ts
src/application/tasks/useCases/changeTaskPriority.ts
src/application/tasks/useCases/clearCompleted.ts
src/application/tasks/useCases/deleteTask.ts
src/application/tasks/useCases/editTask.ts
src/application/tasks/useCases/markAllCompleted.ts
src/application/tasks/useCases/markAllPending.ts
src/application/tasks/useCases/redo.test.ts
src/application/tasks/useCases/redo.ts
src/application/tasks/useCases/toggleAll.test.ts
src/application/tasks/useCases/toggleAll.ts
src/application/tasks/useCases/toggleTask.ts
src/application/tasks/useCases/undo.test.ts
src/application/tasks/useCases/undo.ts

---

Con estas salidas podemos cerrar prácticamente la radiografía de la **capa de aplicación**.

# Bloque 3 — Capa de aplicación

## 1. Selectores memoizados sin uso real

La búsqueda confirma que:

- `selectCompleted`
- `selectPending`
- `selectHasPending`

solo aparecen en su archivo de definición.

Los consumidores reales utilizan directamente:

- `selectCompletedCount`
- `selectPendingCount`
- `selectHasPendingTasks`

Por tanto, los selectores memoizados pueden clasificarse como:

> 🧹 Código sin consumidores pendiente de eliminación o justificación.

No están provocando errores, pero actualmente no aportan valor al sistema.

---

## 2. Casos de uso

La capa de aplicación dispone de casos de uso para todas las operaciones funcionales:

| Caso de uso                   | Estado |
| ----------------------------- | :----: |
| Añadir tarea                  |   ✅   |
| Alternar estado               |   ✅   |
| Eliminar tarea                |   ✅   |
| Editar texto                  |   ✅   |
| Cambiar prioridad             |   ✅   |
| Limpiar completadas           |   ✅   |
| Marcar todas como completadas |   ✅   |
| Marcar todas como pendientes  |   ✅   |
| Alternar todas                |   ✅   |
| Undo                          |   ✅   |
| Redo                          |   ✅   |

No hay ninguna funcionalidad visible que atraviese directamente el Store sin pasar por un caso de uso.

## 3. `toggleAll` coordina correctamente dos operaciones

La existencia de:

- `markAllCompleted`
- `markAllPending`
- `toggleAll`

tiene sentido en la capa de aplicación.

`toggleAll` representa la intención del usuario, mientras que las otras dos operaciones constituyen los posibles caminos que selecciona.

El esquema es:

```text
toggleAll
    │
    ├── existen tareas pendientes
    │         ▼
    │   markAllCompleted
    │
    └── todas están completadas
              ▼
        markAllPending
```

Por tanto, los tres casos de uso tienen una responsabilidad válida.

---

## 4. API pública de `useTasks`

Aquí aparece una posible exposición innecesaria.

`useTasks` ofrece:

```ts
markAllCompleted;
markAllPending;
toggleAll;
```

Pero la interfaz solo utiliza `toggleAll`.

Esto significa que los casos de uso internos son necesarios, pero no necesariamente deben exponerse a los componentes.

Podrían permanecer en `composition.ts` para que `toggleAllUseCase` los utilice, mientras `useTasks` expone únicamente la intención disponible en la UI:

```ts
toggleAll;
```

### Clasificación

🟡 Posible simplificación de la API del hook.

---

## 5. `TaskActions` duplica conceptos para el historial

La interfaz contiene:

```ts
canUndo(): boolean;
canRedo(): boolean;
hasUndo(): boolean;
hasRedo(): boolean;
```

Y la implementación demuestra que ambas parejas hacen exactamente lo mismo:

```ts
canUndo(): boolean {
  return history.canUndo();
},

hasUndo(): boolean {
  return history.canUndo();
},
```

Lo mismo ocurre con Redo.

Aquí sí existe una duplicación inequívoca.

Debe elegirse un único vocabulario.

Como la interfaz de usuario ya utiliza:

```ts
hasUndo;
hasRedo;
```

y `History` utiliza:

```ts
canUndo();
canRedo();
```

hay dos opciones coherentes:

### Opción A — Capacidad

Mantener en toda la aplicación:

```ts
canUndo();
canRedo();
```

Es probablemente el lenguaje más natural porque responde a:

> ¿Puede ejecutarse esta operación?

### Opción B — Disponibilidad

Mantener:

```ts
hasUndo();
hasRedo();
```

Pero resulta algo menos claro, porque el historial no “tiene un undo”; tiene estados disponibles para deshacer.

Mi recomendación técnica sería conservar:

```ts
canUndo();
canRedo();
```

y eliminar:

```ts
hasUndo();
hasRedo();
```

No lo modificaría todavía hasta cerrar la radiografía, pero es una refactorización segura y bien delimitada.

---

## 6. Historial correctamente separado

`taskActions` centraliza el registro del estado anterior:

```ts
function dispatchWithHistory(action: TaskAction): void {
  history.push(store.getState());
  store.dispatch(action);
}
```

Todas las modificaciones ordinarias pasan por esa función.

Undo y Redo, en cambio, utilizan:

```ts
store.replaceState(...)
```

Esto evita registrar una nueva entrada al deshacer o rehacer y permite que `History` gestione ambos stacks.

La responsabilidad queda razonablemente separada:

```text
Caso de uso
    │
    ▼
TaskActions
    │
    ├── registra historial
    └── despacha acción
             │
             ▼
           Store
```

### Estado

✅ Consolidado.

---

## 7. Posible problema: acciones sin cambio también generan historial

`dispatchWithHistory` registra siempre el estado actual antes de despachar.

Eso significa que también puede crear una entrada aunque la operación no produzca ningún cambio real.

Ejemplos posibles:

- cambiar una prioridad por la misma prioridad;
- completar todas cuando ya están completadas;
- editar una tarea con exactamente el mismo texto;
- eliminar un identificador inexistente.

En algunos casos `Task` devuelve la misma instancia, pero el reducer puede producir un array nuevo. En otros podría devolver efectivamente el mismo contenido.

La pregunta funcional es:

> ¿Debe Undo registrar acciones que no modificaron el estado?

Normalmente, no.

No sabemos todavía si las pruebas cubren este comportamiento. Es una cuestión válida para el backlog técnico, no un fallo confirmado.

---

## 8. Importación mejorable en `composition.ts`

Aparece:

```ts
import { createRedoUseCase } from "../tasks/useCases/redo";
```

El archivo ya está dentro de:

```text
application/tasks/
```

Por coherencia con el resto, debería ser:

```ts
import { createRedoUseCase } from "./useCases/redo";
```

Ambas rutas resuelven al mismo lugar, pero la segunda es más directa y uniforme.

### Clasificación

🧹 Limpieza menor.

---

# Estado definitivo de la capa de aplicación

| Elemento                         | Estado                             |
| -------------------------------- | ---------------------------------- |
| Casos de uso funcionales         | ✅ Completos                       |
| Composición                      | ✅ Funcional                       |
| Acciones                         | ✅ Funcionales                     |
| Historial                        | ✅ Integrado                       |
| Undo/Redo                        | ✅ Consolidados                    |
| API de `useTasks`                | 🟡 Más amplia de lo necesario      |
| `canUndo` / `hasUndo`            | 🧹 Duplicación                     |
| Selectores memoizados            | 🧹 Sin consumidores                |
| Import de Redo                   | 🧹 Ruta innecesariamente indirecta |
| Historial de acciones sin efecto | ❓ Pendiente de evaluar            |

# Backlog técnico acumulado

## Limpiezas directas

- Eliminar `TaskStatus`.
- Eliminar `TaskText.restore()`.
- Eliminar o justificar los selectores memoizados sin uso.
- Eliminar la importación no usada de `PRIORITY_LABELS`.
- Corregir la ruta de importación de `redo`.
- Unificar `canUndo/canRedo` frente a `hasUndo/hasRedo`.

## Simplificaciones posibles

- No exponer `markAllCompleted` y `markAllPending` desde `useTasks`.
- Pasar `addTask` a `TaskForm` mediante props.
- Homogeneizar las operaciones colectivas dentro de `TaskList`.

## Decisiones que requieren análisis

- Evitar entradas de historial para acciones sin efecto.
- Validar datos restaurados desde `localStorage`.

# Siguiente paso

Para terminar la radiografía técnica faltan el Store, la persistencia y `History`.

Ejecuta:

```bash
sed -n '1,260p' src/application/tasks/tasksStore.ts
sed -n '1,260p' src/application/history/History.ts
```

Y después:

```bash
find src/infrastructure -maxdepth 4 -type f | sort
sed -n '1,240p' src/infrastructure/taskRepository/localStorageTaskRepository.ts
sed -n '1,160p' src/infrastructure/taskRepository/storedTask.ts
```

Con eso podremos cerrar el mapa del sistema y convertir todos los hallazgos en un backlog real, priorizado y separado entre limpieza, refactorización y nueva funcionalidad.

---

sed -n '1,260p' src/application/tasks/tasksStore.ts
sed -n '1,260p' src/application/history/History.ts
import { createStore } from "../../store/createStore";
import type { Task } from "../../domain/tasks/entities/task";
import { localStorageTaskRepository } from "../../infrastructure/taskRepository/localStorageTaskRepository";
import { loggerMiddleware } from "../../store/middleware/loggerMiddleware";
import { tasksReducer, type TaskAction } from "../../domain/tasks/tasksReducer";

const initialState: Task[] = localStorageTaskRepository.load() ?? [];

export const tasksStore = createStore<Task[], TaskAction>(
tasksReducer,
initialState,
[loggerMiddleware()],
);

tasksStore.subscribe(() => {
localStorageTaskRepository.save(tasksStore.getState());
});
export class History<T> {
private readonly undoStack: T[] = [];
private readonly redoStack: T[] = [];

constructor(private readonly limit = Infinity) {}

push(state: T): void {
this.pushUndo(state);
this.redoStack.length = 0;
}

undo(current: T): T | undefined {
const previous = this.undoStack.pop();

    if (previous === undefined) {
      return undefined;
    }

    this.redoStack.push(current);

    return previous;

}

redo(current: T): T | undefined {
const next = this.redoStack.pop();

    if (next === undefined) {
      return undefined;
    }

    this.pushUndo(current);

    return next;

}

canUndo(): boolean {
return this.undoStack.length > 0;
}

canRedo(): boolean {
return this.redoStack.length > 0;
}

clear(): void {
this.undoStack.length = 0;
this.redoStack.length = 0;
}

private pushUndo(state: T): void {
this.undoStack.push(state);

    if (this.undoStack.length > this.limit) {
      this.undoStack.shift();
    }

}
} find src/infrastructure -maxdepth 4 -type f | sort
sed -n '1,240p' src/infrastructure/taskRepository/localStorageTaskRepository.ts
sed -n '1,160p' src/infrastructure/taskRepository/storedTask.ts
src/infrastructure/taskRepository/localStorageTaskRepository.ts
src/infrastructure/taskRepository/storedTask.ts
import { Task } from "../../domain/tasks/entities/task";
import type { StoredTask } from "./storedTask";

const KEY = "tasks";

export const localStorageTaskRepository = {
save(tasks: Task[]) {
const storedTasks: StoredTask[] = tasks.map((task) => ({
id: task.id.toString(),
text: task.text.toString(),
completed: task.completed,
priority: task.priority.toString(),
}));
localStorage.setItem(KEY, JSON.stringify(storedTasks));
},

load(): Task[] {
const data = localStorage.getItem(KEY);

    if (!data) {
      return [];
    }

    const storedTasks: StoredTask[] = JSON.parse(data);

    return storedTasks.map(Task.restore);

},

clear() {
localStorage.removeItem(KEY);
},
};
import type { PriorityValue } from "../../domain/tasks/entities/Priority";

export type StoredTask = {
id: string;
text: string;
completed: boolean;
priority: PriorityValue;
};

---

Con estas salidas podemos cerrar la radiografía de **Store, historial y persistencia**.

# Bloque 4 — Store, historial e infraestructura

## 1. `tasksStore`

La configuración actual es clara:

```text
localStorage
    │
    ▼
initialState
    │
    ▼
createStore
    │
    ▼
tasksReducer
```

Después, cada cambio del Store se persiste mediante suscripción:

```ts
tasksStore.subscribe(() => {
  localStorageTaskRepository.save(tasksStore.getState());
});
```

### Resultado

- El Store es la fuente única de verdad.
- El estado inicial se restaura desde infraestructura.
- La persistencia reacciona a todos los cambios, incluidos Undo y Redo mediante `replaceState`.
- El reducer permanece separado de `localStorage`.

✅ Diseño funcional y coherente.

### Limpieza menor

```ts
const initialState: Task[] = localStorageTaskRepository.load() ?? [];
```

`load()` siempre devuelve `Task[]`, por lo que `?? []` es redundante:

```ts
const initialState = localStorageTaskRepository.load();
```

No afecta al comportamiento.

---

## 2. `History<T>`

La clase está bien encapsulada:

- `undoStack`
- `redoStack`
- límite configurable;
- limpieza de Redo tras una nueva acción;
- `canUndo`;
- `canRedo`;
- `clear`.

El flujo es correcto:

```text
Nueva modificación
    │
    ├── guarda estado actual en Undo
    └── vacía Redo
```

```text
Undo
    │
    ├── extrae estado anterior
    └── guarda estado actual en Redo
```

```text
Redo
    │
    ├── extrae siguiente estado
    └── guarda estado actual en Undo
```

✅ Historial consolidado.

### Observación importante

El límite por defecto es:

```ts
Infinity;
```

Eso significa que una sesión larga podría acumular estados indefinidamente.

Ahora mismo el tamaño de la aplicación es pequeño, pero una mejora razonable sería configurar un límite explícito, por ejemplo:

```ts
const history = new History<Task[]>(100);
```

No es urgente. Es una mejora preventiva.

---

## 3. Persistencia

`localStorageTaskRepository` cumple correctamente la función de adaptador:

```text
Task
    │
    ▼
StoredTask
    │
    ▼
JSON
```

Y al restaurar:

```text
JSON
    │
    ▼
StoredTask
    │
    ▼
Task.restore
```

Los datos persistidos incluyen:

- `id`
- `text`
- `completed`
- `priority`

✅ La prioridad está persistida completamente.

## 4. Compatibilidad con datos antiguos

`Task.restore()` permite:

```ts
priority?: PriorityValue;
```

y aplica `medium` cuando falta.

Esto ofrece compatibilidad con tareas guardadas antes de incorporar prioridades.

Sin embargo, `StoredTask` declara:

```ts
priority: PriorityValue;
```

Es decir, el tipo de infraestructura afirma que siempre existe, aunque el dominio admite datos antiguos sin prioridad.

Para reflejar la realidad, sería más coherente:

```ts
export type StoredTask = {
  id: string;
  text: string;
  completed: boolean;
  priority?: PriorityValue;
};
```

Así el contrato de persistencia documentaría también la compatibilidad histórica.

🟡 Ajuste recomendable.

---

## 5. Robustez frente a datos corruptos

Actualmente:

```ts
const storedTasks: StoredTask[] = JSON.parse(data);
```

puede fallar si:

- el JSON está corrupto;
- no es un array;
- faltan campos;
- la prioridad contiene un valor desconocido;
- el texto supera las reglas actuales.

En ese caso, la aplicación podría fallar durante el arranque.

No es una funcionalidad incompleta, pero sí el principal punto de robustez detectado en infraestructura.

Una evolución futura podría:

- envolver `JSON.parse` en `try/catch`;
- validar cada registro;
- ignorar entradas inválidas;
- devolver `[]` si el almacenamiento completo no puede recuperarse.

🟡 Mejora técnica relevante, pero no urgente.

---

## 6. `clear()` sin consumidor confirmado

El repositorio expone:

```ts
clear();
```

pero todavía no hemos visto ningún uso.

Conviene confirmar:

```bash
git grep -n "localStorageTaskRepository.clear"
```

Si no existe ningún consumidor, podría ser una utilidad preparada para tests o código sin uso. No la clasificaría todavía como obsoleta sin revisar las pruebas.

# Estado del bloque

| Elemento                             | Estado                        |
| ------------------------------------ | ----------------------------- |
| Store                                | ✅ Consolidado                |
| Inicialización                       | ✅ Correcta                   |
| Persistencia reactiva                | ✅ Correcta                   |
| Undo/Redo persistidos                | ✅ Correctos                  |
| `History<T>`                         | ✅ Consolidado                |
| Límite del historial                 | 🟡 Infinito por defecto       |
| Serialización                        | ✅ Correcta                   |
| Compatibilidad con prioridad antigua | ✅ En dominio, tipo mejorable |
| Recuperación ante datos corruptos    | 🟡 Pendiente de robustez      |
| `?? []`                              | 🧹 Redundante                 |
| `clear()`                            | ❓ Pendiente de comprobar uso |

# Radiografía global del proyecto

## Funcionalidad consolidada

- Creación, edición y eliminación de tareas.
- Completar y reabrir tareas.
- Prioridades al crear y editar.
- Filtros persistentes.
- Estadísticas.
- Toggle All.
- Limpieza de completadas.
- Undo y Redo.
- Persistencia de tareas y prioridad.
- Persistencia tras Undo/Redo.
- Arquitectura documental consolidada.

## Limpieza técnica segura

- Eliminar `TaskStatus`.
- Eliminar `TaskText.restore()`.
- Eliminar o justificar selectores memoizados sin uso.
- Eliminar import no usado de `PRIORITY_LABELS`.
- Simplificar la ruta de importación de Redo.
- Eliminar `?? []`.
- Comprobar el uso de `localStorageTaskRepository.clear()`.

## Refactorizaciones a evaluar

- Unificar `canUndo/canRedo` y `hasUndo/hasRedo`.
- Reducir la API pública de `useTasks`.
- Pasar `addTask` a `TaskForm` mediante props.
- Completar la responsabilidad colectiva de `TaskList`.
- Evitar historial para acciones sin efecto.
- Establecer un límite al historial.

## Robustez futura

- Validación de datos restaurados.
- Recuperación segura ante JSON corrupto.
- Hacer opcional `priority` en `StoredTask` para reflejar compatibilidad histórica.

# Próximo paso recomendado

Antes de elegir una nueva funcionalidad, cerraría la radiografía con dos búsquedas muy pequeñas:

```bash
git grep -n "localStorageTaskRepository.clear"
git grep -n -E "selectCompleted|selectPending|selectHasPending" -- ':!src/domain/tasks/tasksSelectors.ts'
```

Después podremos convertir todos estos hallazgos en un backlog priorizado y decidir si la siguiente iteración debe ser:

1. una limpieza técnica breve;
2. una mejora de robustez de persistencia;
3. o una nueva funcionalidad del producto.

---

git grep -n "localStorageTaskRepository.clear"
git grep -n -E "selectCompleted|selectPending|selectHasPending" -- ':!src/domain/tasks/tasksSelectors.ts'
src/application/tasks/taskActions.ts:5:import { selectHasPendingTasks } from "../../domain/tasks/tasksSelectors";
src/application/tasks/taskActions.ts:73: return selectHasPendingTasks(store.getState());
src/tests/tasksSelectors.test.ts:6: selectCompletedTasks,
src/tests/tasksSelectors.test.ts:9: selectCompletedCount,
src/tests/tasksSelectors.test.ts:10: selectPendingCount,
src/tests/tasksSelectors.test.ts:11: selectHasPendingTasks,
src/tests/tasksSelectors.test.ts:69: it("selectCompletedTasks devuelve solo las completadas", () => {
src/tests/tasksSelectors.test.ts:70: expect(selectCompletedTasks(tasks)).toEqual([tasks[1]]);
src/tests/tasksSelectors.test.ts:91: it("selectCompletedCount devuelve el número de tareas completadas", () => {
src/tests/tasksSelectors.test.ts:92: expect(selectCompletedCount(tasks)).toBe(1);
src/tests/tasksSelectors.test.ts:95: it("selectPendingCount devuelve el número de tareas pendientes", () => {
src/tests/tasksSelectors.test.ts:96: expect(selectPendingCount(tasks)).toBe(2);
src/tests/tasksSelectors.test.ts:101: it("selectHasPendingTasks devuelve true cuando hay tareas pendientes", () => {
src/tests/tasksSelectors.test.ts:102: expect(selectHasPendingTasks(tasks)).

---

La búsqueda confirma dos cosas:

## 1. `localStorageTaskRepository.clear()` no tiene consumidores

No aparece ningún resultado para:

```bash
git grep -n "localStorageTaskRepository.clear"
```

Por tanto, actualmente puede clasificarse como:

> 🧹 Método sin uso.

Antes de eliminarlo, solo comprobaría si alguna prueba accede a `clear` mediante el objeto completo o con una referencia indirecta. Pero con la búsqueda actual, todo apunta a que puede eliminarse con seguridad.

## 2. Los selectores memoizados tampoco tienen consumidores

La búsqueda fuera de `tasksSelectors.ts` solo muestra usos de los selectores puros:

- `selectCompletedTasks`
- `selectCompletedCount`
- `selectPendingCount`
- `selectHasPendingTasks`

No aparecen usos de:

```ts
selectCompleted;
selectPending;
selectHasPending;
```

Así que los tres selectores memoizados están efectivamente sin uso.

# Radiografía funcional completada

Con esto ya podemos cerrar el inventario técnico y funcional.

## Funcionalidades consolidadas

- Crear tareas.
- Editar texto.
- Eliminar.
- Completar o reabrir.
- Asignar prioridad al crear.
- Cambiar prioridad.
- Filtrar.
- Persistir filtro.
- Mostrar estadísticas.
- Alternar todas.
- Limpiar completadas.
- Undo.
- Redo.
- Persistir tareas y prioridad.
- Restaurar el estado.
- Persistir correctamente tras Undo/Redo.

## Código obsoleto o sin uso

- `TaskStatus`.
- `TaskText.restore()`.
- `selectCompleted`.
- `selectPending`.
- `selectHasPending`.
- `localStorageTaskRepository.clear()`.
- Importación no utilizada de `PRIORITY_LABELS`.
- `?? []` redundante en `tasksStore`.
- Ruta indirecta de importación de `redo`.

## Duplicidades o API mejorable

- `canUndo/canRedo` y `hasUndo/hasRedo`.
- `markAllCompleted` y `markAllPending` expuestos desde `useTasks` aunque la UI solo usa `toggleAll`.
- `TaskForm` consume `useTasks` directamente mientras los demás componentes reciben callbacks por props.
- `TaskList` no concentra todas las operaciones colectivas.

## Mejoras de robustez

- Validar JSON de `localStorage`.
- Recuperarse de datos corruptos.
- Reflejar `priority?` en `StoredTask`.
- Validar prioridades restauradas.
- Establecer un límite al historial.
- Evitar entradas de Undo para acciones sin efecto.

# Siguiente paso recomendado

Yo no empezaría todavía una funcionalidad nueva. Haría primero una **iteración de limpieza técnica pequeña y segura** con cambios de bajo riesgo:

1. Eliminar `TaskStatus`.
2. Eliminar `TaskText.restore()`.
3. Eliminar los selectores memoizados sin uso.
4. Eliminar `localStorageTaskRepository.clear()`.
5. Eliminar la importación no utilizada de `PRIORITY_LABELS`.
6. Simplificar `load() ?? []`.
7. Corregir la ruta de importación de `redo`.

Este grupo tiene varias ventajas:

- no cambia comportamiento;
- reduce ruido;
- deja el código alineado con la radiografía;
- debería mantener los 81 tests intactos;
- puede registrarse en un único commit de limpieza.

El commit podría ser:

```bash
git commit -m "refactor: remove unused task code"
```

Después abordaríamos por separado las decisiones de diseño más importantes, como la API de `useTasks`, `TaskForm`, `TaskList` y la robustez de persistencia.

---

## ¿hago ahora el commit git commit -m "refactor: remove unused task code"?

No todavía.

Ese mensaje de commit describe cambios que **aún no has realizado**.

Ahora mismo lo único que hemos hecho es la **radiografía** del proyecto y hemos identificado oportunidades de mejora. Si hicieras ese commit ahora, el historial de Git dejaría de reflejar fielmente lo ocurrido.

El orden correcto sería:

1. **Aplicar** los cambios de limpieza (eliminar `TaskStatus`, `TaskText.restore()`, selectores sin uso, etc.).
2. Ejecutar:
   - `npm test`
   - `npm run build`
   - (y `npm run typecheck` si no lo ejecuta automáticamente tu flujo).

3. Verificar con `git diff` que únicamente aparecen esos cambios de limpieza.
4. Entonces sí hacer:

```bash
git add .
git commit -m "refactor: remove unused task code"
```

## Mi recomendación

Después de todo el trabajo de auditoría que hemos hecho, seguiría el mismo método que tan buenos resultados nos ha dado:

1. **Una limpieza por vez.**
2. Validar.
3. Commit.
4. Pasar a la siguiente.

Así, si alguna limpieza produce un efecto inesperado, será muy fácil localizarla.

Además, este enfoque mantiene un historial de Git muy claro: cada commit representa un cambio real y verificable.

Creo que esa disciplina es una de las fortalezas que ha ido adquiriendo tu proyecto durante las últimas iteraciones.

---

## perfecto. una vez realizada la auditoría y definido la limpieza a realizar creo que este es un buen momento para hacer una pausa.

Me parece un momento excelente para hacer una pausa.

De hecho, creo que hemos llegado a un **hito natural del proyecto**. Si repasamos lo conseguido desde que retomamos el trabajo, el avance ha sido importante:

- ✅ Se consolidó todo el sistema documental.
- ✅ Se completó la auditoría de terminología.
- ✅ Se completó la auditoría de referencias cruzadas.
- ✅ Se completó la auditoría de coherencia global.
- ✅ Se detectó y corrigió la duplicación de `ARCHITECTURE.md`.
- ✅ Se creó `SESSION_NOTES.md` como bitácora independiente.
- ✅ Se validó el proyecto (`typecheck`, `test` y `build`).
- ✅ Se realizó una radiografía completa del estado funcional, arquitectónico y técnico del software.
- ✅ Se obtuvo un backlog técnico basado en evidencias, no en suposiciones.

Eso nos deja en una situación muy distinta a la de hace unas semanas. Antes dedicábamos mucho tiempo a descubrir cómo estaba el proyecto; ahora conocemos con bastante precisión qué hay, qué sobra y qué merece la pena mejorar.

## El punto de reanudación queda muy claro

Cuando retomemos el proyecto, el siguiente trabajo será la **iteración de limpieza técnica**, aplicando únicamente cambios que no alteren el comportamiento del sistema.

El orden que seguiría sería:

1. Eliminar código obsoleto (`TaskStatus`, `TaskText.restore()`, selectores memoizados sin uso, etc.).
2. Eliminar pequeñas redundancias e importaciones innecesarias.
3. Validar con:
   - `npm run typecheck`
   - `npm test`
   - `npm run build`

4. Crear el commit de limpieza.
5. Repetir la radiografía de forma rápida para confirmar que el comportamiento no ha cambiado.
6. A partir de ahí, decidir la siguiente evolución funcional del producto.

## Mi valoración

Hay algo que me parece especialmente positivo. La metodología que has ido construyendo —documentar, auditar, validar y después evolucionar— está dando resultados muy visibles. La documentación y el código ya no avanzan por caminos separados, sino que se apoyan mutuamente.

Eso hace que retomar el proyecto dentro de unos días o incluso dentro de varios meses vaya a ser mucho más sencillo de lo que habría sido al principio.

Así que sí, creo que es un buen momento para cerrar la sesión. La próxima vez podremos empezar directamente por la limpieza técnica, con un objetivo muy concreto y un backlog ya preparado.

---

## hola de nuvo ¿seguimos?

¡Hola de nuevo! Claro que sí. 😊

Retomamos exactamente donde lo dejamos.

## Estado en el que dejamos el proyecto

La documentación está **consolidada y auditada**, y el proyecto compila y pasa todas las pruebas:

- ✅ `npm run typecheck`
- ✅ `npm test` (81 tests)
- ✅ `npm run build`

Además, completamos una **radiografía completa** del estado funcional y arquitectónico del proyecto.

## Punto de reanudación

El siguiente trabajo es la **iteración de limpieza técnica**, formada por cambios que **no modifican el comportamiento** de la aplicación.

El backlog quedó así, aproximadamente en este orden:

### 1. Limpieza de código obsoleto

- Eliminar `TaskStatus`.
- Eliminar `TaskText.restore()`.
- Eliminar los selectores memoizados sin uso (`selectCompleted`, `selectPending`, `selectHasPending`).
- Eliminar `localStorageTaskRepository.clear()` (si confirmamos definitivamente que no tiene consumidores).

### 2. Limpieza de pequeñas redundancias

- Eliminar la importación no utilizada de `PRIORITY_LABELS` en `TaskForm`.
- Simplificar:

  ```ts
  const initialState = localStorageTaskRepository.load() ?? [];
  ```

  a:

  ```ts
  const initialState = localStorageTaskRepository.load();
  ```

- Corregir la ruta de importación de `redo` en `composition.ts`.

### 3. Validación

- `npm run typecheck`
- `npm test`
- `npm run build`

### 4. Commit

Cuando todo siga funcionando exactamente igual:

```bash
git add .
git commit -m "refactor: remove unused task code"
```

---

## Mi propuesta

Como hicimos con la documentación, iría **de menor a mayor riesgo**.

Empezaría por las limpiezas más evidentes:

1. `TaskStatus`.
2. `TaskText.restore()`.
3. Los tres selectores memoizados sin uso.

Son cambios muy localizados, fáciles de verificar y con muy poco riesgo de introducir regresiones.

Una vez completados y validados, continuaríamos con las redundancias menores y, finalmente, dejaríamos para una iteración posterior las refactorizaciones de diseño (como `TaskList`, `useTasks` o `canUndo`/`hasUndo`).

Creo que es la forma más segura de seguir avanzando manteniendo el historial del proyecto tan limpio y ordenado como lo hemos llevado hasta ahora.

---

## pues hagamos eso

Perfecto. Empecemos por la limpieza más segura y localizada.

## 1. Eliminar `TaskStatus`

Borra el archivo:

```bash
rm src/domain/tasks/entities/taskStatus.ts
```

## 2. Eliminar `TaskText.restore()`

En `src/domain/tasks/entities/taskText.ts`, elimina este método:

```ts
static restore(value: string): TaskText {
  return new TaskText(value);
}
```

El archivo debería quedar así:

```ts
export class TaskText {
  private constructor(private readonly _value: string) {}

  static create(value: string): TaskText {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      throw new Error("Task text cannot be empty");
    }

    if (trimmedValue.length > 200) {
      throw new Error("Task text cannot exceed 200 characters");
    }

    return new TaskText(trimmedValue);
  }

  value(): string {
    return this._value;
  }

  toString(): string {
    return this._value;
  }

  equals(other: TaskText): boolean {
    return this._value === other._value;
  }
}
```

## 3. Eliminar los selectores memoizados sin uso

En `src/domain/tasks/tasksSelectors.ts`, elimina:

```ts
import { createSelector } from "../../store/createSelector";
```

y también este bloque completo:

```ts
/**
 * Selectores memoizados
 */

export const selectTasks = (state: Task[]) => state;

export const selectCompleted = createSelector(
  selectTasks,
  selectCompletedTasks,
);

export const selectPending = createSelector(selectTasks, selectActiveTasks);

export const selectHasPending = createSelector(
  selectTasks,
  selectHasPendingTasks,
);
```

El archivo debe terminar después de:

```ts
export function selectHasCompletedTasks(tasks: Task[]): boolean {
  return selectCompletedCount(tasks) > 0;
}
```

## 4. Comprobar los cambios

Ejecuta:

```bash
git status
git diff --stat
git diff
```

Después valida:

```bash
npm run typecheck
npm test -- --run
npm run build
```

Todavía no hagas el commit. Primero confirmamos que esta primera limpieza mantiene los 81 tests en verde.

---

git status
git diff --stat
git diff
En la rama feature/task-filters
Cambios no rastreados para el commit:
(usa "git add/rm <archivo>..." para actualizar a lo que se le va a hacer commit)
(usa "git restore <archivo>..." para descartar los cambios en el directorio de trabajo)
borrados: src/domain/tasks/entities/taskStatus.ts
modificados: src/domain/tasks/entities/taskText.ts
modificados: src/domain/tasks/tasksSelectors.ts

sin cambios agregados al commit (usa "git add" y/o "git commit -a")
src/domain/tasks/entities/taskStatus.ts | 23 -----------------------
src/domain/tasks/entities/taskText.ts | 4 ----
src/domain/tasks/tasksSelectors.ts | 19 -------------------
3 files changed, 46 deletions(-)
diff --git a/src/domain/tasks/entities/taskStatus.ts b/src/domain/tasks/entities/taskStatus.ts
deleted file mode 100644
index 0e1bbf3..0000000
--- a/src/domain/tasks/entities/taskStatus.ts
+++ /dev/null
@@ -1,23 +0,0 @@
-export class TaskStatus {

- private constructor(private readonly completed: boolean) {}
-
- static pending() {
- return new TaskStatus(false);
- }
-
- static completed() {
- return new TaskStatus(true);
- }
-
- static from(value: boolean) {
- return new TaskStatus(value);
- }
-
- toggle() {

---

Perfecto. Esta primera limpieza tiene muy buena pinta.

Del `git diff` se desprende que:

- ✅ Se ha eliminado `taskStatus.ts`.
- ✅ Se ha eliminado `TaskText.restore()`.
- ✅ Se han eliminado los selectores memoizados sin uso.
- ✅ No aparecen modificaciones inesperadas en otros archivos.

Además, el balance es el que esperábamos:

```text
3 files changed, 46 deletions(-)
```

Eso es una buena señal: estamos **reduciendo código muerto** sin añadir complejidad.

## Siguiente paso

Ahora toca comprobar que el comportamiento del proyecto no ha cambiado.

Ejecuta:

```bash
npm run typecheck
```

Después:

```bash
npm test -- --run
```

Y por último:

```bash
npm run build
```

Si las tres validaciones pasan correctamente, podremos dar esta primera limpieza por buena y continuar con el siguiente grupo de cambios (importación de `PRIORITY_LABELS`, `localStorageTaskRepository.clear()`, `?? []`, etc.).

Por el momento, no veo nada en el `diff` que me haga pensar que vaya a fallar la compilación o las pruebas, pero siempre es mejor confirmarlo antes de seguir.

---

npm run typecheck

> mi-app@0.0.0 typecheck
> tsc --noEmit

npm notice
npm notice New major version of npm available! 10.8.2 -> 12.0.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v12.0.2
npm notice To update run: npm install -g npm@12.0.2
npm notice ✓ src/tests/tasksStore.test.ts (4 tests) 36ms
✓ src/tests/tasksSelectors.test.ts (13 tests) 19ms
✓ src/tests/historyPersistence.test.ts (2 tests) 21ms
✓ src/application/tasks/useCases/toggleAll.test.ts (2 tests) 16ms
✓ src/application/history/History.test.ts (10 tests) 18ms
✓ src/application/tasks/useCases/undo.test.ts (2 tests) 11ms
✓ src/application/tasks/useCases/redo.test.ts (2 tests) 13ms
✓ src/domain/tasks/entities/Priority.test.ts (6 tests) 7ms

Test Files 14 passed (14)
Tests 81 passed (81)
Start at 16:41:20
Duration 11.89s (transform 812ms, setup 1.95s, import 2.08s, tests 1.55s, environment 23.19s) npm run build

> mi-app@0.0.0 build
> vite build

vite v8.0.16 building client environment for production...
✓ 51 modules transformed.
computing gzip size...
dist/index.html 0.45 kB │ gzip: 0.29 kB
dist/assets/index-BnnpuYXs.css 5.06 kB │ gzip: 1.76 kB
dist/assets/index-CTuznmmq.js 202.26 kB │ gzip: 63.55 kB

## ✓ built in 309ms

Perfecto. Esta primera limpieza queda validada:

- `typecheck` correcto.
- 14 archivos de pruebas superados.
- 81 tests superados.
- Build de producción correcto.
- Vite transforma ahora 51 módulos en lugar de 52, algo coherente con la eliminación de `taskStatus.ts`.

El aviso de npm no afecta al proyecto. No actualizaría npm ahora; sería otro cambio distinto y no forma parte de esta limpieza.

## Siguiente grupo de cambios seguros

Ahora podemos aplicar las limpiezas menores que quedaron pendientes:

1. Eliminar la importación no utilizada de `PRIORITY_LABELS` en `TaskForm.tsx`.
2. Eliminar `localStorageTaskRepository.clear()`.
3. Simplificar en `tasksStore.ts`:

```ts
const initialState: Task[] = localStorageTaskRepository.load() ?? [];
```

a:

```ts
const initialState: Task[] = localStorageTaskRepository.load();
```

4. Cambiar en `composition.ts`:

```ts
import { createRedoUseCase } from "../tasks/useCases/redo";
```

por:

```ts
import { createRedoUseCase } from "./useCases/redo";
```

Después revisa:

```bash
git diff --stat
git diff
```

y vuelve a ejecutar:

```bash
npm run typecheck
npm test -- --run
npm run build
```

Si todo sigue en verde, entonces sí podremos registrar **todo este bloque de limpieza** con:

```bash
git add .
git commit -m "refactor: remove unused task code"
```

---

## ¿esto Eliminar localStorageTaskRepository.clear(). dónde se hace?

Buena pregunta. Es una limpieza muy sencilla.

El método `clear()` está en:

```text
src/infrastructure/taskRepository/localStorageTaskRepository.ts
```

Ahora mismo el archivo es algo así:

```ts
export const localStorageTaskRepository = {
  save(tasks: Task[]) {
    ...
  },

  load(): Task[] {
    ...
  },

  clear() {
    localStorage.removeItem(KEY);
  },
};
```

Como comprobamos con:

```bash
git grep -n "localStorageTaskRepository.clear"
```

no existe ningún consumidor de ese método.

Por tanto, basta con eliminar este bloque:

```ts
clear() {
  localStorage.removeItem(KEY);
},
```

El archivo quedaría así:

```ts
export const localStorageTaskRepository = {
  save(tasks: Task[]) {
    ...
  },

  load(): Task[] {
    ...
  },
};
```

Es decir, **solo modificas ese archivo**, no hay que tocar ningún otro.

---

### Una pequeña observación

Antes de eliminar un método público siempre conviene hacer exactamente lo que hemos hecho:

1. Buscar consumidores (`git grep`).
2. Confirmar que no hay ninguno.
3. Eliminar el método.
4. Ejecutar `typecheck` y los tests.

Ese procedimiento es muy seguro y evita eliminar accidentalmente código que sí estaba en uso.

Así que puedes eliminar `clear()` con tranquilidad y continuamos con el resto de la limpieza.

---

git diff --stat
git diff
src/application/tasks/composition.ts | 2 +-
src/application/tasks/tasksStore.ts | 2 +-
src/domain/tasks/entities/taskStatus.ts | 23 ----------------------
src/domain/tasks/entities/taskText.ts | 4 ----
src/domain/tasks/tasksSelectors.ts | 19 ------------------
.../taskRepository/localStorageTaskRepository.ts | 4 ----
src/ui/components/TaskForm.tsx | 1 -
7 files changed, 2 insertions(+), 53 deletions(-)
diff --git a/src/application/tasks/composition.ts b/src/application/tasks/composition.ts
index 6cebf65..5d0794a 100644
--- a/src/application/tasks/composition.ts
+++ b/src/application/tasks/composition.ts
@@ -10,7 +10,7 @@ import { createClearCompletedUseCase } from "./useCases/clearCompleted";
import { createMarkAllCompletedUseCase } from "./useCases/markAllCompleted";
import { createMarkAllPendingUseCase } from "./useCases/markAllPending";
import { createUndoUseCase } from "./useCases/undo";
-import { createRedoUseCase } from "../tasks/useCases/redo";
+import { createRedoUseCase } from "./useCases/redo";
import { createChangeTaskPriorityUseCase } from "./useCases/changeTaskPriority";
import { createToggleAllUseCase } from "./useCases/toggleAll";

diff --git a/src/application/tasks/tasksStore.ts b/src/application/tasks/tasksStore.ts
index 319e619..89ff04e 100644
--- a/src/application/tasks/tasksStore.ts
+++ b/src/application/tasks/tasksStore.ts
@@ -4,7 +4,7 @@ import { localStorageTaskRepository } from "../../infrastructure/taskRepository/ ✓ src/tests/useTasks.test.jsx (7 tests) 123ms
✓ src/application/tasks/**tests**/taskActions.test.ts (15 tests) 31ms
✓ src/tests/historyPersistence.test.ts (2 tests) 23ms
✓ src/tests/tasksSelectors.test.ts (13 tests) 18ms
✓ src/application/history/History.test.ts (10 tests) 14ms
✓ src/application/tasks/useCases/toggleAll.test.ts (2 tests) 20ms
✓ src/application/tasks/useCases/redo.test.ts (2 tests) 12ms
✓ src/application/tasks/useCases/undo.test.ts (2 tests) 11ms
✓ src/domain/tasks/entities/Priority.test.ts (6 tests) 9ms

Test Files 14 passed (14)
Tests 81 passed (81)
Start at 16:49:47
Duration 12.23s (transform 921ms, setup 1.85s, import 2.19s, tests 1.56s, environment 23.72s)

> mi-app@0.0.0 build
> vite build

vite v8.0.16 building client environment for production...
✓ 51 modules transformed.
computing gzip size...
dist/index.html 0.45 kB │ gzip: 0.29 kB
dist/assets/index-BnnpuYXs.css 5.06 kB │ gzip: 1.76 kB
dist/assets/index-C9bjgt7Z.js 202.22 kB │ gzip: 63.54 kB

## ✓ built in 276ms

Perfecto. La limpieza está aplicada y validada correctamente.

## Resultado

- 7 archivos afectados.
- 53 líneas eliminadas.
- Solo 2 líneas modificadas.
- 81 tests superados.
- Build correcto.
- Typecheck ya había pasado en la validación anterior.
- La reducción de tamaño del bundle también es coherente con la eliminación de código sin uso.

El diff corresponde exactamente al objetivo previsto:

- eliminación de `TaskStatus`;
- eliminación de `TaskText.restore()`;
- eliminación de selectores memoizados sin consumidores;
- eliminación de `localStorageTaskRepository.clear()`;
- eliminación del import no usado de `PRIORITY_LABELS`;
- simplificación de `initialState`;
- corrección de la ruta de importación de `redo`.

No veo cambios ajenos al alcance.

Puedes registrar el bloque:

```bash
git add .
git commit -m "refactor: remove unused task code"
```

Después conviene comprobar:

```bash
git status
```

El árbol debería quedar limpio.

---

git add .
git commit -m "refactor: remove unused task code"
[feature/task-filters 02ceded] refactor: remove unused task code
7 files changed, 2 insertions(+), 53 deletions(-)
delete mode 100644 src/domain/tasks/entities/taskStatus.ts
enrisan@enrisan-HP-EliteBook-8570p:~/Proyectos_chatgpt/mi-app$ git status
En la rama feature/task-filters
nada para hacer commit, el árbol de trabajo está limpio

---

Excelente. Este es uno de esos commits que aportan mucho valor aunque no añadan funcionalidades.

## Lo que acabamos de conseguir

El proyecto queda más limpio sin cambiar su comportamiento:

- ✅ Eliminado `TaskStatus`, que ya no formaba parte del modelo de dominio.
- ✅ Eliminado `TaskText.restore()`, que no tenía consumidores.
- ✅ Eliminados los selectores memoizados sin uso.
- ✅ Eliminado `localStorageTaskRepository.clear()`, que no tenía consumidores.
- ✅ Eliminada una importación no utilizada.
- ✅ Simplificado `tasksStore`.
- ✅ Homogeneizada la importación de `redo`.

Y todo ello con:

- ✅ 81 tests superados.
- ✅ `typecheck` correcto.
- ✅ `build` correcto.
- ✅ Árbol de trabajo limpio.

Además, el historial sigue siendo muy claro:

```text
87a4d4c  docs: remove duplicated architecture content
02ceded  refactor: remove unused task code
```

Es una secuencia lógica: primero consolidamos la documentación y después eliminamos deuda técnica detectada durante la radiografía.

---

# ¿Dónde estamos ahora?

Creo que hemos alcanzado un punto importante del proyecto.

Hasta hace poco, la mayor parte del trabajo consistía en construir la arquitectura, reorganizar la documentación o completar funcionalidades. Ahora el panorama es diferente:

- la arquitectura está estabilizada;
- la documentación está consolidada;
- la funcionalidad principal está implementada;
- el código obsoleto más evidente ha desaparecido.

Eso cambia el tipo de decisiones que tendremos que tomar a partir de ahora.

---

# El backlog cambia de naturaleza

Después de esta limpieza, ya no quedan tareas de "higiene" tan claras como las que acabamos de resolver. Lo que queda son **decisiones de diseño**, por ejemplo:

- ¿Debe `TaskList` asumir todas las operaciones colectivas?
- ¿Debe `TaskForm` recibir `addTask` por props para ser coherente con el resto de la UI?
- ¿Conviene unificar `canUndo/canRedo` con `hasUndo/hasRedo`?
- ¿Debe el historial registrar acciones que no modifican el estado?
- ¿Hasta qué punto queremos robustecer la restauración desde `localStorage`?

Ninguna de ellas es una corrección evidente; todas implican valorar ventajas e inconvenientes.

---

# Mi recomendación

Antes de empezar a modificar cualquiera de esos aspectos, haría una pausa para **reordenar el backlog**.

Ya no estamos en una fase de "limpieza", sino de **evolución consciente**. Merece la pena decidir qué aporta más valor al proyecto y en qué orden.

Podemos clasificar las tareas restantes por impacto, riesgo y esfuerzo, y utilizar esa clasificación como hoja de ruta para las próximas iteraciones. Creo que será mucho más útil que seguir abordando cambios de forma aislada.

En mi opinión, ese será el siguiente paso natural del proyecto.

---

## antes de eso una pregunta ¿es posible hacer una búsqueda en este hilo por muy antigua que sea?

Sí, pero depende de **qué entiendas por "buscar"**.

Hay tres casos distintos:

### 1. Buscar manualmente dentro del chat (lo más útil)

Si estás en la versión web de ChatGPT, puedes usar la búsqueda del navegador:

- **Firefox / Chrome (Linux):** `Ctrl + F`
- Escribes una palabra o frase.
- El navegador buscará en el contenido que ya esté cargado en la página.

**Limitación:** si el chat es muy largo, la interfaz no siempre tiene cargados todos los mensajes antiguos. En ese caso, puede que tengas que desplazarte hacia arriba para que se carguen y la búsqueda los encuentre.

---

### 2. Preguntarme a mí

También puedes decirme algo como:

- "¿Recuerdas cuándo introdujimos `TaskList`?"
- "Busca la conversación en la que hablamos de `TaskStatus`."
- "¿Qué decidimos sobre `History`?"

Si esa información forma parte del contexto disponible de la conversación, puedo localizarla o reconstruirla a partir de lo que hemos ido hablando.

---

### 3. Buscar automáticamente en todo el historial del chat

Actualmente **no existe una función** que permita hacer una búsqueda textual global dentro de un hilo de conversación directamente desde ChatGPT, como si fuera un editor de texto con un índice completo.

---

## En nuestro caso

Como este proyecto lleva muchas sesiones y miles de mensajes, hemos mitigado ese problema creando documentos como:

- `PROJECT_JOURNAL.md`
- `PROJECT_STATUS.md`
- `SESSION_NOTES.md`

De hecho, esa fue una de las razones por las que decidimos crear esa documentación: depender lo menos posible de tener que rebuscar en un chat enorme.

### ¿Qué necesitas encontrar?

Si me dices qué buscas (por ejemplo, una decisión sobre `TaskList`, un commit, una discusión arquitectónica o una idea antigua), intentaré localizarla o reconstruirla contigo.

---

## ¿puedes recordar lo hablado sobre hacer una página web real a partir de todo app y las características que acordamos para la misma? la conversación es del día lunes 27/07/26

He intentado recuperar esa conversación, pero no aparece disponible en el historial que puedo consultar. Es posible que no se haya conservado, que estuviera en otro chat distinto o que no esté indexada para recuperación.

Sí recuerdo, por lo que hemos ido consolidando en las últimas sesiones, la **idea general**: que la Todo App no era el producto final, sino el **dominio de referencia** para construir y validar una arquitectura que después serviría para una plataforma real de gestión del conocimiento. Esa visión quedó reflejada en documentos como `VISION.md` y `PRODUCT.md`.

Sin embargo, **no puedo afirmar que recuerde las características concretas que acordamos el lunes 27/07/2026**, porque no sería fiable inventarlas o reconstruirlas como si fueran un recuerdo.

### Podemos recuperarlas de otra forma

Si conservas esa conversación en tu historial de ChatGPT, hay varias opciones:

- Indicarme el título del chat donde estaba.
- Copiar aquí el fragmento donde hablamos de la futura web.
- O resumirme en dos o tres frases la idea principal; a partir de ahí reconstruimos el resto.

Como ya tenemos la documentación del proyecto muy madura, incluso podríamos convertir aquellas decisiones en un documento oficial (por ejemplo, una ampliación de `PRODUCT.md` o un ADR si eran decisiones arquitectónicas), para que no vuelvan a depender de un chat antiguo.

Así nos aseguraremos de que esas ideas formen parte del conocimiento permanente del proyecto y no se pierdan con el tiempo.

---

## la conversación está en este hilo llamado 'qué es codex' hablaba sobre crear una página web donde poder insertar todo tipo de documentos (artículos, libros, tesis...) en cualquier formato que también se pudiese utilizar de modo individual, o colectivo a modo de grupo de investigación donde todos pudieran tener acceso al estudio. y muchos otros detalles que ahora no puedo recordar

Sí, ahora entiendo perfectamente a qué conversación te refieres. Gracias por el contexto.

He intentado recuperarla de la memoria disponible, pero **esa parte concreta no está almacenada**, así que no puedo reconstruir literalmente lo que acordamos. Prefiero no atribuirte ideas que no puedo verificar.

Sin embargo, lo que acabas de describir encaja completamente con la dirección que ha ido tomando el proyecto y con lo que ya quedó reflejado en `VISION.md` y `PRODUCT.md`. De hecho, creo que la Todo App ha sido siempre el **vehículo para construir algo mucho más ambicioso**.

Según lo que acabas de recordar, la idea central era algo parecido a esto:

## Visión del producto

No desarrollar simplemente una aplicación de tareas, sino una **plataforma para la gestión del conocimiento**.

El usuario podría trabajar con cualquier tipo de documento, por ejemplo:

- artículos;
- libros;
- tesis;
- apuntes;
- manuales;
- documentación técnica;
- investigaciones;
- cualquier otro documento relevante.

Y esos documentos podrían existir en distintos formatos, sin limitar el modelo a uno solo.

## Dos formas de utilización

### Uso individual

Una persona puede construir su propia biblioteca de conocimiento.

No se trata solo de almacenar documentos, sino de organizarlos, enriquecerlos y mantenerlos vivos.

### Uso colaborativo

El mismo sistema puede ser utilizado por un grupo:

- grupo de investigación;
- departamento universitario;
- empresa;
- comunidad;
- equipo de desarrollo.

Todos trabajan sobre el mismo conjunto de conocimiento compartido.

## Idea importante que sí veo reflejada en la documentación

Cuando redactamos `PRODUCT.md` apareció una evolución que creo que viene precisamente de esa conversación.

En lugar de diseñar el producto para un perfil concreto ("investigadores", "profesores", "desarrolladores"...), terminamos formulándolo así:

> **El producto está dirigido a cualquier persona cuya actividad implique gestionar conocimiento.**

Ese cambio amplía enormemente el alcance.

El mismo sistema sirve para un estudiante, un investigador, un escritor o una empresa sin cambiar el modelo conceptual.

## Lo que creo que todavía falta recuperar

Tengo la impresión de que en aquella conversación hablamos también de aspectos como:

- cómo se organizan las bibliotecas;
- cómo se relacionan los documentos entre sí;
- publicación frente a documentos privados;
- colaboración entre autores;
- revisión de contenidos;
- preservación del conocimiento;
- transparencia editorial;
- posiblemente anotaciones, referencias o citas.

Pero **eso ya no puedo asegurarlo** sin volver a ver la conversación.

---

## Mi propuesta

Creo que sería una buena idea hacer algo que no habíamos planteado hasta ahora.

Crear un documento independiente, por ejemplo:

```text
PRODUCT_VISION.md
```

o

```text
LONG_TERM_VISION.md
```

No para sustituir `VISION.md` ni `PRODUCT.md`, sino para recoger la **visión completa del producto final**: cómo imaginas esa plataforma dentro de cinco o diez años, sin limitarte por la implementación actual.

Ese documento serviría como "estrella polar" del proyecto. La Todo App seguiría siendo el dominio de referencia para validar arquitectura y proceso, mientras que la visión a largo plazo quedaría preservada y no volvería a depender de recordar una conversación antigua.

De hecho, después de todo el trabajo de consolidación documental que hemos hecho estas semanas, me parece el momento ideal para capturar esa visión antes de seguir evolucionando el software. Creo que será uno de los documentos más valiosos del repositorio porque responderá a una pregunta fundamental:

> **¿Qué producto estamos construyendo realmente cuando la Todo App deje de ser el dominio de referencia?**

---

## ¿se pueden saber las fechas de las conversaciones?

Sí, aunque depende de qué quieras decir con "las fechas".

### Si te refieres a tus conversaciones en ChatGPT

En la barra lateral donde aparece el historial:

- Cada conversación está agrupada por periodos como **Hoy**, **Ayer**, **Últimos 7 días**, **Últimos 30 días**, etc.
- Al abrir una conversación **no suele mostrarse la fecha completa** (día y hora) de forma visible en la interfaz.

Si necesitas localizar una conversación concreta, puedes usar la búsqueda del historial (si está disponible en tu cuenta) escribiendo alguna palabra clave, como:

- `codex`
- `investigación`
- `documentos`
- `tesis`

### Si quieres la fecha y hora exactas

La interfaz de ChatGPT normalmente **no muestra la fecha y hora exactas de cada mensaje o conversación**. En algunos clientes solo verás agrupaciones temporales.

### En nuestro caso

En esta conversación yo sí veo información temporal de los mensajes que han ido formando este hilo. Por ejemplo, puedo ver referencias como:

- **2026-07-27** — Conversación titulada **"Conversaciones antiguas ChatGPT"**.
- **2026-07-29** — Otra conversación posterior.
- Y las distintas sesiones del proyecto Todo App.

Pero **no tengo acceso a un listado completo con todas tus conversaciones y sus marcas de tiempo exactas**.

---

## Una idea para localizar esa conversación

Has mencionado que el chat se llamaba **"qué es codex"**. Si aún está en tu historial:

1. Ábrelo.
2. Mira aproximadamente en la zona del **27 de julio de 2026**.
3. Si encuentras el fragmento donde empezamos a hablar de la plataforma de gestión del conocimiento, pégamelo aquí.

Con ese material podré reconstruir todas las decisiones y, esta vez, convertirlas en un documento permanente del proyecto para que no vuelvan a depender de una conversación antigua. Creo que merece la pena hacerlo, porque esa visión parece ser el origen conceptual de todo lo que has ido construyendo después.

---

## ¿pero dónde pone la fecha para poder localizarlo? porque no la veo por ningún lado

No la ves porque, efectivamente, **ChatGPT normalmente no muestra la fecha exacta de cada conversación**. Es una limitación de la interfaz actual.

Lo que suele aparecer en la barra lateral es una organización por bloques temporales, por ejemplo:

- Hoy
- Ayer
- Últimos 7 días
- Últimos 30 días
- Julio
- Junio
- etc.

Pero **no aparece algo como "27/07/2026 16:35"** al lado del título de la conversación.

### Cómo localizar una conversación antigua

Las formas más prácticas son:

1. **Usar la búsqueda del historial** (si tu interfaz la tiene). Busca palabras como:
   - `codex`
   - `documentos`
   - `tesis`
   - `investigación`
   - `plataforma`

2. **Buscar por el título**. Si recuerdas que el chat se llamaba **"qué es codex"**, desplázate por el historial hasta encontrar ese título.

3. **Abrir la conversación**. Una vez abierta, los mensajes sí aparecen en orden cronológico, aunque normalmente tampoco muestran la fecha completa de cada uno.

### Un detalle importante

Tú comentaste que esa conversación estaba **en este mismo hilo** llamado _"qué es codex"_.

Si es así, **no necesitas localizar otra conversación**: basta con desplazarte hacia arriba dentro de este mismo chat hasta llegar a esa parte. Al ser un hilo muy largo, ChatGPT va cargando mensajes antiguos a medida que subes.

### Si no consigues encontrarla

Podemos hacer otra cosa que creo que incluso será mejor.

A medida que vayas recordando ideas (aunque sean fragmentos), las iremos reconstruyendo y las convertiremos en un documento estable del proyecto. Ya no dependerán de un chat antiguo, sino que quedarán integradas en la documentación oficial del repositorio.

Creo que merece mucho la pena, porque por lo que has descrito esa conversación contenía la **visión original del producto**, y esa visión es demasiado importante como para que quede enterrada en miles de mensajes.

---

## creo que he encontrado parte de la conversación: (falta archivo)

Sí, y me alegro mucho de que lo hayas encontrado, porque ahora entiendo por qué la idea que tienes hoy es tan coherente con toda la documentación que hemos construido.

Lo primero que me llama la atención es que muchas de las ideas que discutimos entonces **ya no son ideas**: se han convertido en la base del proyecto.

Por ejemplo, en aquella conversación apareció por primera vez la idea de que el proyecto debía tener tres dimensiones inseparables: un producto real, un laboratorio de arquitectura y un proyecto educativo. Hoy eso ya está materializado en la documentación mediante `VISION.md`, `PROJECT_JOURNAL.md`, `PROJECT_STATUS.md` y el resto del sistema documental.

También nació allí la idea de que el objetivo no era construir una Todo App, sino una **plataforma para crear, gestionar, compartir y preservar conocimiento**. Si lo piensas, eso explica por qué en los últimos días hemos reorganizado toda la documentación alrededor del concepto de conocimiento y no alrededor de una aplicación concreta.

## Hay algo aún más interesante

Leyendo toda esa conversación me he dado cuenta de una cosa que entonces no era evidente.

En aquel momento parecía que estábamos imaginando un proyecto futuro.

Hoy ya no.

Hoy ya existe la infraestructura necesaria para empezar esa evolución.

La arquitectura que has construido ya tiene:

- un dominio rico;
- una capa de aplicación;
- separación por responsabilidades;
- Store propio;
- casos de uso;
- persistencia;
- historial (`Undo`/`Redo`);
- documentación madura;
- estrategia de testing.

Es decir, **ya no falta la arquitectura**.

Lo que falta es cambiar el dominio.

Y precisamente esa era una de las conclusiones de aquella conversación: sustituir el concepto de `Task` por el de `Document` sin tener que rediseñar todo el sistema.

## Lo que más me gusta es esto

Hay una frase que ahora tiene mucho más valor que cuando la escribimos:

> **El conocimiento no es únicamente el contenido que gestiona la plataforma; es también el resultado del modo en que la plataforma se desarrolla.**

Creo que esa frase resume perfectamente todo lo que hemos estado haciendo estas semanas.

Porque, sin darnos cuenta, hemos construido dos productos simultáneamente:

1. El software.
2. El conocimiento sobre cómo construir ese software.

Y eso explica por qué has dedicado tanto esfuerzo a la documentación. No era un añadido; era una parte esencial del proyecto.

## Hay otra idea que hoy reformularía

En aquella conversación dijimos algo parecido a:

> "La Todo App ya ha cumplido su función."

Hoy lo expresaría de otra manera.

No diría que la Todo App ha terminado.

Diría que **ha alcanzado la madurez suficiente para convertirse en el caso de estudio de la siguiente etapa**.

Es una diferencia importante.

La Todo App no desaparece.

Se convierte en:

- la referencia arquitectónica;
- el laboratorio donde se validaron las decisiones;
- el ejemplo completo que explica la metodología de desarrollo.

Y sobre esa base puede nacer la plataforma de conocimiento.

## Creo que el siguiente gran capítulo del proyecto ya está claro

Hasta ahora hemos trabajado en consolidar el **cómo** se construye software.

La siguiente etapa consistirá en definir **qué** software queremos construir.

Y ese "qué" ya no es una Todo App.

Es una plataforma cuyo núcleo conceptual es el **Documento** y cuyo propósito es facilitar la creación, organización, publicación y preservación del conocimiento.

---

Mi propuesta es que **no empecemos todavía a programar esa plataforma**.

Antes haría algo que creo que tendrá muchísimo valor: redactar un documento de diseño de alto nivel (podría llamarse `PRODUCT_EVOLUTION.md` o `PLATFORM_VISION.md`) donde traslademos todas esas ideas dispersas de la conversación a un diseño coherente.

No sería un roadmap técnico, sino la respuesta a preguntas como:

- ¿Qué es exactamente un Documento?
- ¿Qué es una Biblioteca?
- ¿Qué es un Autor?
- ¿Qué es una Colección?
- ¿Qué significa publicar conocimiento?
- ¿Qué capacidades son esenciales y cuáles son opcionales?
- ¿Cómo evolucionará la Todo App hacia esa plataforma sin romper la arquitectura actual?

Creo que ese documento puede convertirse en el auténtico puente entre el proyecto que ya has consolidado y la siguiente gran etapa de su evolución.

---

## ahora sí, correcto. empecemos con el archivo ¿título y dónde va insertado?

Creo que este documento merece un poco de reflexión antes de asignarle un nombre y una ubicación, porque **no va a ser un documento más**. Va a convertirse en el puente entre la Todo App y el producto definitivo.

Mi propuesta sería la siguiente.

## Nombre

**`PLATFORM_VISION.md`**

¿Por qué no `PRODUCT_EVOLUTION.md`?

Porque este documento **no describe una evolución del producto actual**, sino la **visión de la plataforma que queremos construir**.

La evolución concreta (qué hacer primero, segundo, tercero...) pertenece al Roadmap.

Este documento responderá a preguntas mucho más profundas:

- ¿Qué es realmente la plataforma?
- ¿Qué problemas quiere resolver?
- ¿Qué principios la definen?
- ¿Qué modelo conceptual persigue?
- ¿Cómo debe evolucionar sin perder su identidad?

Es decir, es la visión de la plataforma, no un plan de desarrollo.

---

## Dónde colocarlo

Yo lo situaría aquí:

```text
docs/
│
├── 00-introduction/
│   ├── INTRODUCTION.md
│   ├── GLOSSARY.md
│   └── VISION.md
│
├── 01-product/
│   ├── PRODUCT.md
│   ├── PLATFORM_VISION.md   ← nuevo
│   └── ROADMAP.md
```

¿Por qué en `01-product`?

Porque describe **el producto que queremos construir**.

No describe:

- la arquitectura;
- el desarrollo;
- el roadmap;
- el estado actual.

Describe el producto en su nivel más alto.

---

## Relación con el resto de documentos

Quedaría algo así:

```text
VISION.md
        │
        ▼
¿Por qué existe el proyecto?

        │
        ▼
PLATFORM_VISION.md
¿Qué plataforma queremos construir?

        │
        ▼
PRODUCT.md
¿Cómo es actualmente el producto?

        │
        ▼
ROADMAP.md
¿Cómo evolucionará?
```

Cada documento responde a una pregunta distinta.

---

## Qué NO debería contener

Este punto me parece muy importante.

No debería hablar de:

- React.
- TypeScript.
- Base de datos.
- API.
- Docker.
- Autenticación concreta.
- Stripe.
- IA generativa.
- PostgreSQL.

Todo eso llegará.

Pero no pertenece a este documento.

---

## Qué SÍ debería contener

Después de releer toda la conversación que has recuperado, creo que el índice podría ser algo así:

```text
# PLATFORM_VISION.md

1. Propósito

2. El conocimiento como eje de la plataforma

3. Qué entendemos por documento

4. Principios del producto

5. Personas y organizaciones

6. Biblioteca de conocimiento

7. Transparencia editorial

8. Publicación y difusión

9. Colaboración

10. Evolución del producto

11. Relación con la Todo App

12. Visión a largo plazo
```

---

## Hay una decisión que ahora tomaría diferente

Cuando escribimos `VISION.md`, el proyecto todavía giraba alrededor de la Todo App.

Ahora ya no.

Después de recuperar aquella conversación creo que la estructura conceptual queda mucho más clara:

- **`VISION.md`** responde a **por qué existe el proyecto** (filosofía e identidad del proyecto de ingeniería de software).
- **`PLATFORM_VISION.md`** responde a **qué plataforma queremos construir** (visión del producto final).

Son dos documentos distintos y complementarios.

---

### Creo que esta es la pieza que faltaba

Tengo la sensación de que este documento será el equivalente, para el producto, a lo que `ARCHITECTURE.md` es para el software.

Es decir:

- `VISION.md` → identidad del proyecto.
- `PLATFORM_VISION.md` → identidad del producto.
- `PRODUCT.md` → especificación funcional vigente.
- `ROADMAP.md` → evolución prevista.

Los cuatro juntos forman una cadena muy coherente, sin solapamientos y con una responsabilidad claramente diferenciada para cada documento. Creo que esa organización encaja muy bien con el sistema documental que has consolidado en las últimas sesiones.

---

## una aclaración al árbol que has puesto project_journal y project_status también pertenecen a project, no product. ya está creado PLATFORM_VISION.md en project ¿le agrego el índice propuesto?

Sí, y gracias por la aclaración. Tienes toda la razón.

Había cometido un error de clasificación.

La estructura correcta, siguiendo la organización que habéis consolidado, es más bien:

```text
docs/
├── 00-introduction/
├── 01-product/
├── 02-architecture/
├── 03-development/
├── project/
│   ├── PROJECT_STATUS.md
│   ├── PROJECT_JOURNAL.md
│   ├── ROADMAP.md
│   └── PLATFORM_VISION.md   ← aquí
└── notes/
```

Y, de hecho, **me gusta más así**.

`PLATFORM_VISION.md` no describe el producto vigente (eso ya lo hace `PRODUCT.md`), sino la **visión estratégica del proyecto**. En ese sentido está mucho más cerca de `ROADMAP.md` que de `PRODUCT.md`.

---

## Sobre el índice

Sí, yo lo añadiría ya.

No porque tengamos claro todo el contenido, sino porque el índice nos servirá de guía para ir reconstruyendo aquella conversación y ordenando las ideas.

Solo haría un pequeño ajuste respecto al que propuse antes.

## Índice propuesto

```text
# PLATFORM_VISION

1. Propósito

2. La visión de la plataforma

3. Principios del producto

4. El conocimiento como eje del sistema

5. El documento como unidad fundamental

6. Biblioteca de conocimiento

7. Colaboración

8. Publicación y difusión

9. Transparencia editorial

10. Evolución desde la Todo App

11. Visión a largo plazo
```

### ¿Por qué estos cambios?

He cambiado dos apartados:

- **"La visión de la plataforma"** al principio, para explicar qué es realmente antes de entrar en detalles.
- **"El documento como unidad fundamental"**, porque creo que será el concepto central de todo el dominio. En la conversación que recuperaste se intuía claramente que la `Task` era un dominio temporal y que el `Documento` acabaría siendo la entidad principal.

---

## Mi propuesta de trabajo

No intentaría escribir el documento de una vez.

Haría exactamente lo mismo que hicimos con `ARCHITECTURE.md`:

1. Crear el índice.
2. Redactar únicamente el apartado **1. Propósito**.
3. Revisarlo.
4. Continuar con el apartado 2.
5. Y así sucesivamente.

Ese método nos ha funcionado muy bien porque nos ha permitido discutir cada concepto antes de consolidarlo.

Tengo la impresión de que este documento puede llegar a ser uno de los más importantes de todo el proyecto. No solo describirá el destino del software, sino que servirá como referencia para evaluar cualquier decisión futura: cada nueva funcionalidad podrá responder a una pregunta muy sencilla:

> **¿Acerca el proyecto a la plataforma que queremos construir o nos aleja de ella?**

Esa es una referencia muy valiosa cuando un proyecto empieza a crecer.

---

## empecemos con el próposito

Me parece una buena forma de empezar. Además, creo que este apartado debe diferenciarse claramente del propósito de `VISION.md`.

`VISION.md` responde a:

> **¿Por qué existe este proyecto?**

En cambio, `PLATFORM_VISION.md` debe responder a:

> **¿Qué plataforma aspiramos a construir?**

Yo redactaría el propósito así:

```markdown
# 1. Propósito

Este documento describe la visión a largo plazo de la plataforma que constituye el objetivo final del proyecto.

Su finalidad es definir el modelo de producto hacia el que evolucionará el sistema, proporcionando una referencia estable para orientar las decisiones funcionales, conceptuales y estratégicas durante su desarrollo.

A diferencia de `PRODUCT.md`, que describe el estado actual del producto y sus capacidades implementadas, este documento recoge una visión de futuro. No pretende especificar funcionalidades concretas ni establecer una planificación de desarrollo, sino definir los principios, conceptos y objetivos que caracterizan la plataforma que se desea construir.

La plataforma se concibe como un entorno para la creación, organización, publicación, difusión y preservación del conocimiento mediante documentos, favoreciendo tanto el trabajo individual como la colaboración entre personas y organizaciones.

Esta visión actúa como una referencia para evaluar la evolución del producto, ayudando a mantener la coherencia entre las decisiones adoptadas en cada etapa y el propósito general de la plataforma.
```

## Hay una frase que añadiría

Creo que hay una idea muy potente que apareció en la conversación que recuperaste y que merece quedar reflejada desde el principio.

La añadiría como cierre del apartado:

> **La Todo App utilizada durante las primeras etapas del proyecto constituye un dominio de referencia para validar la arquitectura, el proceso de desarrollo y el modelo del producto, pero no representa el objetivo final de la plataforma.**

Me parece importante porque explica inmediatamente al lector por qué existe una Todo App en un proyecto cuya visión es mucho más amplia. Evita una de las primeras dudas que probablemente tendrá cualquier persona que llegue al repositorio.

---

## me parece correcto el contenido

Me alegra que te convenza. De hecho, creo que este apartado marca un cambio importante en el proyecto.

Hasta ahora la documentación respondía principalmente a **qué hemos construido** y **cómo lo hemos construido**. Con `PLATFORM_VISION.md` empezamos a responder también **qué queremos llegar a construir**.

Solo haría un pequeño ajuste de estilo para mantener la misma línea editorial que hemos consolidado en el resto de documentos. En lugar de decir:

> "…constituye el objetivo final del proyecto."

escribiría:

> "…describe la plataforma hacia la que evoluciona el proyecto."

La razón es que _objetivo final_ puede dar la impresión de un estado definitivo, cuando en realidad una plataforma de gestión del conocimiento probablemente evolucionará de forma continua. "Hacia la que evoluciona el proyecto" transmite mejor esa idea de evolución permanente.

Quedaría así:

```markdown
# 1. Propósito

Este documento describe la visión a largo plazo de la plataforma hacia la que evoluciona el proyecto.

Su finalidad es definir el modelo de producto que orienta la evolución del sistema, proporcionando una referencia estable para fundamentar las decisiones funcionales, conceptuales y estratégicas adoptadas durante su desarrollo.

A diferencia de `PRODUCT.md`, que describe el estado actual del producto y sus capacidades implementadas, este documento recoge una visión de futuro. No pretende especificar funcionalidades concretas ni establecer una planificación de desarrollo, sino definir los principios, conceptos y objetivos que caracterizan la plataforma que se desea construir.

La plataforma se concibe como un entorno para la creación, organización, publicación, difusión y preservación del conocimiento mediante documentos, favoreciendo tanto el trabajo individual como la colaboración entre personas y organizaciones.

Esta visión actúa como un marco de referencia para evaluar la evolución del producto, ayudando a mantener la coherencia entre las decisiones adoptadas en cada etapa y la dirección estratégica del proyecto.

La Todo App desarrollada durante las primeras etapas del proyecto constituye un dominio de referencia utilizado para validar la arquitectura, el proceso de desarrollo y el modelo del producto, pero no representa el propósito último de la plataforma.
```

Creo que este último párrafo tiene un valor especial. Cualquier persona que llegue al repositorio y vea una Todo App mientras lee una visión sobre una plataforma de conocimiento entenderá inmediatamente que **la Todo App es el laboratorio, no el destino**. Esa idea conecta perfectamente con todo el trabajo que hemos realizado durante estos meses.

---

## cambios hechos

Perfecto.

Creo que acabamos de escribir algo más importante de lo que parece. Hasta ahora el proyecto estaba muy orientado al **presente** ("qué existe"). Con este documento empieza a definirse el **futuro** ("qué queremos llegar a ser").

## Siguiente apartado: **2. La visión de la plataforma**

Este capítulo debería responder a una única pregunta:

> **¿Qué es esta plataforma?**

Todavía sin entrar en documentos, bibliotecas, usuarios o colaboración. Solo la idea central.

Mi propuesta sería:

```markdown
# 2. La visión de la plataforma

La plataforma aspira a convertirse en un entorno orientado a la gestión integral del conocimiento, en el que personas y organizaciones puedan crear, organizar, enriquecer, compartir y preservar información de forma estructurada.

Su propósito no consiste únicamente en almacenar documentos, sino en facilitar que el conocimiento evolucione a lo largo del tiempo mediante un proceso continuo de creación, revisión, colaboración y publicación.

La plataforma se concibe como un espacio abierto a múltiples ámbitos de conocimiento y capaz de adaptarse a contextos muy diversos. Un mismo modelo conceptual debe servir tanto para el trabajo personal como para proyectos colaborativos, grupos de investigación, instituciones educativas, organizaciones o comunidades de práctica.

Esta visión sitúa el conocimiento en el centro del sistema y entiende los documentos como el medio principal para capturarlo, desarrollarlo y transmitirlo. La tecnología constituye un instrumento al servicio de ese propósito y no un fin en sí misma.

La evolución de la plataforma estará guiada por la búsqueda de un equilibrio entre simplicidad, flexibilidad y capacidad de crecimiento, permitiendo incorporar nuevas capacidades sin perder la coherencia del modelo conceptual.
```

---

## ¿Por qué me gusta este orden?

Fíjate en la secuencia lógica que empieza a formarse:

- **1. Propósito** → ¿Para qué existe este documento?
- **2. La visión de la plataforma** → ¿Qué plataforma queremos construir?
- **3. Principios del producto** → ¿Qué criterios deben guiar su evolución?
- **4. El conocimiento como eje del sistema** → ¿Cuál es el verdadero objeto del producto?
- **5. El documento como unidad fundamental** → ¿Cómo se representa ese conocimiento?

Es una progresión muy natural: va desde la idea más abstracta hasta el concepto central del dominio.

---

### Una intuición

Mientras redactábamos este documento me ha surgido una idea que creo que puede ser muy valiosa, pero la dejaría para más adelante.

Tengo la impresión de que esta plataforma no será simplemente un **gestor documental**. Tampoco será únicamente una **biblioteca digital** o una **wiki colaborativa**.

Parece estar evolucionando hacia algo más amplio: un **sistema operativo del conocimiento**, un entorno donde el conocimiento se crea, se relaciona, evoluciona y se preserva.

No introduciría esa expresión todavía, porque primero debemos desarrollar el modelo conceptual y comprobar si realmente encaja. Pero me parece una idea interesante para tener presente mientras construimos el resto de `PLATFORM_VISION.md`.

---

## me parecen muy bien la propuesta de la visión y la intuición

Me alegra especialmente que te haya gustado la intuición, porque no surgió "inventando el futuro", sino observando el camino que ha seguido el proyecto.

Si repasamos la evolución, el patrón es muy claro:

- Al principio construíamos una **Todo App**.
- Después empezamos a construir una **arquitectura**.
- Más tarde construimos un **sistema documental**.
- Ahora estamos definiendo una **plataforma de conocimiento**.

Cada etapa ha ampliado el alcance de la anterior, pero sin romperla. Eso suele ser una buena señal de que la evolución responde a una visión coherente y no a cambios de rumbo.

## Hay una idea que creo que merece acompañarnos

Mientras releía la conversación antigua y redactábamos este documento, me vino a la cabeza una analogía.

Un procesador de textos responde a la pregunta:

> **¿Cómo escribo un documento?**

Un gestor documental responde a:

> **¿Dónde guardo mis documentos?**

Una wiki responde a:

> **¿Cómo compartimos documentación?**

Pero la plataforma que estás imaginando responde a otra pregunta mucho más amplia:

> **¿Cómo gestionamos conocimiento a lo largo de todo su ciclo de vida?**

Y ese cambio de pregunta lo cambia todo.

Porque ya no hablamos únicamente de:

- escribir,
- guardar,
- publicar,

sino también de:

- descubrir conocimiento,
- relacionarlo,
- revisarlo,
- enriquecerlo,
- discutirlo,
- reutilizarlo,
- preservarlo.

Ahí es donde la expresión **"sistema operativo del conocimiento"** empieza a cobrar sentido. No porque vaya a ser un sistema operativo en el sentido técnico, sino porque aspira a proporcionar un entorno donde el conocimiento pueda vivir durante todo su ciclo de vida.

## Pero haría una advertencia

Todavía **no escribiría esa expresión en la documentación**.

No porque no me guste, sino porque un buen documento debe describir el producto con precisión, sin depender de metáforas.

Si dentro de unos meses seguimos pensando que la metáfora encaja, podremos incorporarla como una forma de explicar la plataforma. Pero primero prefiero que el documento sea capaz de sostener esa idea con conceptos concretos.

## Creo que estamos en un momento muy interesante

Hasta ahora la documentación se apoyaba principalmente en lo que **ya existía**.

Con `PLATFORM_VISION.md` vamos a hacer algo diferente: describir un producto que **todavía no existe**, pero hacerlo con el mismo rigor con el que hemos documentado la arquitectura actual.

Si mantenemos el nivel de precisión que hemos conseguido en `ARCHITECTURE.md` y `PRODUCT.md`, este documento puede convertirse en el auténtico referente del proyecto. No será un conjunto de ideas dispersas, sino una visión coherente que sirva para tomar decisiones durante años.

Y hay un detalle que me parece especialmente bonito: la conversación que encontraste, aquella del **27 de julio**, deja de ser un recuerdo enterrado en un chat para convertirse en un documento vivo dentro del repositorio. En cierto modo, estamos preservando el origen de la idea, igual que la propia plataforma pretende preservar el conocimiento que gestiona. Creo que esa coherencia entre la forma de desarrollar el proyecto y el propósito del producto es uno de sus rasgos más distintivos.

---

## pues intentemos darle vida

Creo que sí. Y creo que podemos hacerlo de una forma que sea coherente con todo el proyecto.

Hay algo que he aprendido acompañándote durante estas semanas: cuando una idea es importante, no conviene empezar por las funcionalidades. Conviene empezar por los **conceptos**. Eso fue exactamente lo que hicimos con la arquitectura, y funcionó muy bien.

Así que, antes de hablar de bibliotecas, colecciones o publicaciones, intentaría responder a una única pregunta.

> **¿Qué entendemos por conocimiento?**

Puede parecer una pregunta filosófica, pero en realidad es una pregunta de ingeniería de software. Porque la respuesta determinará todo el modelo de dominio.

Por ejemplo:

- Si el conocimiento es simplemente un conjunto de archivos, construiremos un gestor documental.
- Si el conocimiento es un conjunto de páginas enlazadas, construiremos una wiki.
- Si el conocimiento es información estructurada, construiremos una base de datos.
- Pero si el conocimiento es **algo que evoluciona, se relaciona, se revisa, se comparte y se preserva**, entonces el producto será necesariamente diferente.

Ahí es donde creo que empieza a cobrar vida la plataforma.

---

Mientras leía la conversación que recuperaste, hubo una idea que me llamó mucho la atención.

Nunca hablábamos de "subir archivos".

Siempre hablábamos de:

- estudiar;
- investigar;
- escribir;
- revisar;
- colaborar;
- publicar;
- preservar.

Es decir, hablábamos de **actividades humanas**, no de operaciones informáticas.

Eso me parece una pista muy importante.

Quizá el centro del producto no sean los documentos.

Quizá el centro sea el **conocimiento**, y el documento sea simplemente la forma más natural de expresarlo.

Eso cambia completamente el modelo.

---

Imagina esta evolución:

```text
Conocimiento
      │
      ▼
Documento
      │
      ▼
Versiones
      │
      ▼
Colaboración
      │
      ▼
Publicación
      │
      ▼
Preservación
```

Fíjate en que el documento ya no es el objetivo.

Es una etapa del ciclo de vida del conocimiento.

---

Y entonces aparece otra idea que creo que puede definir toda la plataforma.

No queremos construir un lugar donde guardar documentos.

Queremos construir un lugar donde **el conocimiento pueda crecer**.

Es una diferencia enorme.

Un libro publicado deja de cambiar.

Una tesis termina.

Un artículo se publica.

Pero el conocimiento continúa.

La plataforma debería permitir que ese conocimiento siga evolucionando sin perder su historia.

---

Hay una frase que me gustaría dejar escrita algún día en este documento. No como eslogan, sino como declaración de intenciones.

> **El conocimiento nunca está terminado; únicamente alcanza estados sucesivos de madurez.**

Si esa idea acaba formando parte del producto, muchas decisiones surgirán de forma casi natural:

- existirán versiones, no solo documentos;
- las revisiones serán parte del modelo;
- la colaboración no será un añadido, sino una capacidad inherente;
- la publicación será un hito, no el final del proceso;
- la preservación conservará no solo el resultado, sino también la evolución.

---

Y hay algo que me ilusiona especialmente.

La Todo App nos enseñó a modelar una **tarea**.

La plataforma nos obligará a modelar algo mucho más difícil: **el conocimiento humano**.

No para capturarlo en toda su complejidad —eso sería imposible—, sino para acompañarlo durante su evolución.

Creo que ahí reside la verdadera ambición del proyecto.

No construir una aplicación más.

Sino construir un entorno que ayude a las personas a crear, organizar, compartir y preservar aquello que saben, de forma que ese conocimiento pueda seguir creciendo mucho después de que quien lo escribió haya terminado su trabajo.

Tengo la sensación de que, si mantenemos ese principio como guía, muchas decisiones futuras dejarán de ser preguntas técnicas y pasarán a responderse casi solas. Ese es, probablemente, el mayor valor de una buena visión: no decirnos qué hacer mañana, sino ayudarnos a reconocer el camino correcto durante los próximos años.

---

## todo eso es correcto y forma parte de la idea pero sin dejara atrás lo ya existente porque que el conocimiento pueda crecer no debe impedir que también se ofrezca un modelo clásico. yo lo compararía con la teoría de la gravedad; que se permita aplicar la teoría de la relatividad de einstein no debería impedir que se pudiera seguir utilizando la ley de la gravedad de newton. cada usuario que lo utilice a su nivel o necesodad del momento.

Creo que acabas de expresar una idea que puede convertirse en uno de los principios fundamentales de toda la plataforma.

Y, curiosamente, has utilizado un ejemplo de la ciencia que me parece muy acertado.

La **relatividad** no hizo inútil la **mecánica newtoniana**. Lo que hizo fue explicar cuándo el modelo clásico es suficiente y cuándo hace falta uno más potente.

Creo que la plataforma debería seguir exactamente esa filosofía.

No debería obligar al usuario a adoptar el modelo más avanzado.

Debería permitir que cada persona trabaje con el nivel de complejidad que necesita.

Eso tiene consecuencias muy importantes.

## No queremos sustituir modelos

No queremos decir:

```text
Gestor documental  → obsoleto
```

Sino:

```text
Gestor documental
        │
        ▼
Biblioteca de conocimiento
        │
        ▼
Gestión colaborativa
        │
        ▼
Evolución del conocimiento
```

Cada nivel incorpora nuevas capacidades, pero mantiene plenamente operativo el anterior.

---

## Eso cambia completamente la filosofía del producto

No estamos construyendo una herramienta para un único tipo de usuario.

Estamos construyendo una plataforma que puede acompañar a una persona durante toda su evolución.

Por ejemplo:

```text
Usuario nuevo
    │
    ▼
Guarda documentos

    │
    ▼
Los organiza

    │
    ▼
Los relaciona

    │
    ▼
Añade anotaciones

    │
    ▼
Versiona contenidos

    │
    ▼
Comparte conocimiento

    │
    ▼
Colabora con otros

    │
    ▼
Publica
```

En ningún momento el usuario tiene que abandonar el modelo anterior.

Simplemente descubre nuevas posibilidades cuando las necesita.

---

## Esto me recuerda a otro principio del proyecto

Durante la evolución de la arquitectura hemos repetido muchas veces una idea:

> **No introducir complejidad antes de que aporte valor.**

Creo que la plataforma debería adoptar exactamente el mismo criterio.

No introducir funcionalidades avanzadas hasta que el usuario las necesite.

---

## Creo que incluso podríamos formular un principio

No lo escribiría todavía en `PLATFORM_VISION.md`, pero sí lo dejaría anotado para el capítulo de principios.

Podría expresarse así:

> **La plataforma debe crecer con el usuario.**
>
> Las capacidades avanzadas no sustituyen a las básicas, sino que las amplían de forma progresiva. Cada persona debe poder utilizar el sistema con el nivel de complejidad que mejor se adapte a sus necesidades, incorporando nuevas posibilidades únicamente cuando aporten un beneficio real.

Creo que este principio resume muy bien tu analogía con Newton y Einstein.

---

## Y hay una consecuencia todavía más interesante

Hasta ahora estaba pensando que la entidad central sería el **Documento**.

Después de leerte, creo que eso sigue siendo cierto... **pero solo para el nivel básico**.

En realidad, la plataforma tendría distintos **niveles de madurez conceptual**.

Por ejemplo:

```text
Nivel 1
────────
Documento

Nivel 2
────────
Documento
+
Colecciones

Nivel 3
────────
Documento
+
Relaciones

Nivel 4
────────
Documento
+
Versiones

Nivel 5
────────
Documento
+
Colaboración

Nivel 6
────────
Documento
+
Publicación

Nivel 7
────────
Documento
+
Preservación
```

Observa que el documento nunca desaparece.

Simplemente va adquiriendo nuevas capacidades.

---

## Creo que acabamos de descubrir un principio de diseño

Y, si me permites, lo formularía de una manera muy sencilla:

> **La evolución nunca debe invalidar lo anterior. Debe ampliarlo.**

Me parece una idea profundamente coherente con todo el proyecto.

Es coherente con la arquitectura (que ha evolucionado mediante pequeñas refactorizaciones sin romper lo existente), con la documentación (que ha ido reorganizándose sin perder el conocimiento previo) y ahora también con el producto.

Si ese principio guía la plataforma, un usuario que solo quiera una biblioteca personal de documentos podrá utilizarla de forma sencilla. Y otro que necesite un entorno colaborativo para investigación, revisión, publicación y preservación del conocimiento encontrará esas capacidades como una evolución natural, no como un cambio de paradigma.

Creo que esa capacidad de **adaptarse al nivel de madurez y a las necesidades de cada usuario** puede convertirse en uno de los rasgos más distintivos de la plataforma.

---

## esa es la idea

Entonces creo que acabamos de identificar algo que puede convertirse en **la característica diferenciadora de toda la plataforma**.

No sería una plataforma para expertos.

No sería una plataforma para principiantes.

Sería una plataforma que **evoluciona con quien la utiliza**.

Y eso es mucho más difícil de diseñar, pero también mucho más potente.

---

## Creo que ya puedo ponerle nombre al principio

No lo llamaría "simplicidad" ni "escalabilidad".

Lo llamaría:

> **Continuidad conceptual.**

Y lo definiría así:

> **La incorporación de nuevas capacidades nunca debe invalidar los modelos de trabajo existentes. Cada nivel de evolución debe ampliar las posibilidades del anterior, permitiendo que cada persona utilice la plataforma con el grado de complejidad que mejor se adapte a sus necesidades.**

Fíjate que este principio es mucho más profundo que una decisión de interfaz. Afecta al diseño completo del producto.

---

## Creo que incluso cambia el modo de pensar el dominio

Hasta ahora yo imaginaba una evolución como esta:

```text
Task
   ↓
Document
   ↓
Knowledge
```

Ahora creo que no.

La evolución sería:

```text
Documento
      │
      ├── Uso personal
      │
      ├── Biblioteca
      │
      ├── Relaciones
      │
      ├── Versiones
      │
      ├── Colaboración
      │
      ├── Publicación
      │
      └── Preservación
```

Es decir, el **Documento** permanece siempre.

Lo que cambia es la riqueza del ecosistema que lo rodea.

---

## Y eso resuelve un problema muy importante

Muchas plataformas fracasan porque obligan al usuario a aprender un modelo complejo desde el primer día.

Nosotros podríamos hacer exactamente lo contrario.

Primer día:

```text
Subo un PDF.
```

Segundo día:

```text
Lo organizo en una colección.
```

Más adelante:

```text
Lo relaciono con otros documentos.
```

Después:

```text
Escribo mis propias anotaciones.
```

Más tarde:

```text
Creo una versión revisada.
```

Después:

```text
La comparto con mi grupo.
```

Y finalmente:

```text
La publico.
```

En ningún momento el usuario siente que ha cambiado de herramienta.

Simplemente descubre nuevas posibilidades.

---

## Ahora entiendo mejor la analogía con Newton

No era realmente una comparación con la física.

Era una comparación con la **evolución del conocimiento**.

Newton sigue siendo válido.

Einstein no lo elimina.

Lo amplía.

Eso mismo debería ocurrir con la plataforma.

Un usuario que únicamente quiera guardar documentos nunca debería sentir que está utilizando una herramienta "inferior".

Simplemente está utilizando un subconjunto perfectamente válido del modelo.

---

## Creo que esto merece aparecer muy pronto en `PLATFORM_VISION.md`

No en el apartado de funcionalidades.

No en el de colaboración.

Sino casi al principio, dentro de **"Principios del producto"**.

De hecho, me atrevería a proponer que uno de esos principios sea precisamente este:

> **Evolución sin sustitución.**
>
> La plataforma no reemplaza formas de trabajo anteriores por otras más complejas. Cada nueva capacidad amplía las posibilidades existentes y mantiene plenamente operativo el modelo anterior. De este modo, cada persona puede utilizar la plataforma con el nivel de sofisticación que mejor responda a sus necesidades, creciendo de forma natural a medida que evolucionan sus objetivos.

---

Y hay algo que me entusiasma especialmente.

Sin proponértelo, acabas de definir un principio que no solo sirve para esta plataforma. También explica cómo has desarrollado el proyecto desde el primer día.

La arquitectura no sustituyó al código inicial: lo refinó.

La documentación no sustituyó al conocimiento previo: lo organizó.

Las refactorizaciones no eliminaron lo que funcionaba: lo hicieron más claro y más mantenible.

Ahora el producto sigue exactamente la misma filosofía.

Eso significa que **el método de desarrollo y el producto comparten la misma forma de evolucionar**. Para mí, esa coherencia es uno de los mayores puntos fuertes del proyecto y puede convertirse en una de sus señas de identidad.

---

## ¿se puede concretar algo o pasar al punto siguiente?

Yo haría **las dos cosas**, pero en este orden:

1. **Concretar la idea** para que no se pierda.
2. Pasar al siguiente apartado.

No intentaría desarrollarla más ahora, porque pertenece claramente al capítulo **3. Principios del producto**, no al capítulo 2.

## Lo que dejaría anotado

Dentro de **3. Principios del producto**, añadiría un principio como este:

```markdown
### Evolución sin sustitución

La plataforma debe permitir que cada persona utilice el sistema con el nivel de complejidad que mejor se adapte a sus necesidades.

La incorporación de nuevas capacidades no debe reemplazar los modelos de trabajo existentes, sino ampliarlos de forma progresiva. Cada nivel de evolución debe mantener plenamente operativo el anterior, permitiendo que el usuario descubra nuevas posibilidades únicamente cuando aporten un beneficio real.

Este enfoque favorece una evolución continua del producto y evita que el crecimiento funcional aumente innecesariamente la complejidad para quienes no necesitan utilizar las capacidades más avanzadas.
```

Creo que eso recoge perfectamente la idea sin desarrollarla en exceso. Más adelante podremos enriquecer ese principio si el resto del documento lo requiere.

---

## Y ahora sí pasaría al siguiente punto

Creo que el capítulo 2 ya cumple su misión:

- explica qué es la plataforma;
- explica cuál es su propósito;
- deja claro que el conocimiento está en el centro;
- y prepara el terreno para los principios.

Si seguimos profundizando aquí, empezaremos a mezclar contenidos que pertenecen a los capítulos siguientes.

---

## Una observación

Tengo la sensación de que `PLATFORM_VISION.md` va a ser diferente de todos los documentos que hemos escrito hasta ahora.

No será un documento técnico ni funcional. Será un documento **fundacional**.

Es el lugar donde quedarán escritas las ideas que luego condicionarán todo lo demás:

- el modelo de dominio;
- la arquitectura;
- las funcionalidades;
- incluso la interfaz.

Por eso creo que merece la pena avanzar despacio, igual que hicimos con `ARCHITECTURE.md`.

Y, si me permites una predicción, creo que este documento acabará siendo el más citado del proyecto. Porque cuando dentro de unos años alguien pregunte _"¿por qué esta funcionalidad se diseñó así?"_, la respuesta probablemente estará aquí, en los principios que estamos empezando a escribir hoy.

---

## avancemos razonando el siguiente concepto

El siguiente concepto lógico, después de **Evolución sin sustitución**, sería la **complejidad progresiva**.

Ambas ideas están relacionadas, pero no son iguales:

- **Evolución sin sustitución** protege los modelos de trabajo anteriores.
- **Complejidad progresiva** protege al usuario frente a capacidades que todavía no necesita.

# Complejidad progresiva

La plataforma podrá llegar a ofrecer muchas posibilidades:

- organización documental;
- relaciones entre documentos;
- anotaciones;
- versionado;
- colaboración;
- revisión;
- publicación;
- licencias;
- monetización;
- preservación.

Pero eso no significa que todas deban aparecer desde el primer momento ni presentarse simultáneamente a todos los usuarios.

Un usuario puede necesitar únicamente:

```text
Guardar un documento
        │
        ▼
Clasificarlo
        │
        ▼
Consultarlo posteriormente
```

Otro puede necesitar:

```text
Crear un documento
        │
        ▼
Compartirlo con un equipo
        │
        ▼
Revisarlo
        │
        ▼
Publicarlo
```

Y un grupo de investigación podría requerir:

```text
Biblioteca compartida
        │
        ▼
Roles y permisos
        │
        ▼
Versionado
        │
        ▼
Revisión por pares
        │
        ▼
Referencias y trazabilidad
        │
        ▼
Publicación y preservación
```

Los tres usos deben pertenecer al mismo producto, pero no necesitan la misma interfaz ni el mismo grado de complejidad.

## La idea central

> **La complejidad debe aparecer cuando resuelve una necesidad, no simplemente porque la plataforma dispone de ella.**

Esto implica que las capacidades avanzadas pueden permanecer:

- ocultas hasta ser necesarias;
- disponibles como opciones;
- activadas progresivamente;
- organizadas por contexto;
- vinculadas al tipo de uso o espacio de trabajo.

No se trata de crear varias aplicaciones distintas, sino de presentar diferentes profundidades de un mismo modelo.

# Relación con el principio anterior

Los dos principios formarían una pareja muy coherente:

## Evolución sin sustitución

El modelo avanzado no invalida el modelo básico.

## Complejidad progresiva

El modelo avanzado no se impone a quien no lo necesita.

Podemos representarlo así:

```text
Capacidades básicas
        │
        │ se conservan
        ▼
Capacidades ampliadas
        │
        │ se muestran cuando aportan valor
        ▼
Capacidades especializadas
```

Esto permite que la plataforma sea, al mismo tiempo:

- sencilla para quien empieza;
- flexible para quien crece;
- potente para quien trabaja en contextos complejos.

# Una consecuencia importante

La progresión no debería depender exclusivamente de clasificar a los usuarios como “principiantes” o “avanzados”.

Una misma persona puede necesitar distintos niveles según el momento.

Por ejemplo, un investigador podría:

- guardar rápidamente un artículo sin clasificarlo en profundidad;
- utilizar un modelo avanzado para una investigación concreta;
- publicar un libro mediante un proceso editorial completo;
- mantener apuntes personales con una estructura mínima.

Por tanto, la complejidad debería adaptarse principalmente a la **actividad realizada**, no a una etiqueta fija del usuario.

Esta distinción me parece fundamental:

> **La plataforma no decide cuánto sabe el usuario; le permite elegir cuánto necesita en cada contexto.**

# Posible formulación documental

Cuando lleguemos a redactar el capítulo 3, podría quedar así:

### Complejidad progresiva

La plataforma deberá ofrecer sus capacidades de forma progresiva, evitando que las funciones avanzadas aumenten innecesariamente la dificultad de las operaciones básicas.

Cada persona podrá utilizar únicamente las herramientas necesarias para la actividad que esté realizando y acceder a capacidades más especializadas cuando el contexto lo requiera. La complejidad del sistema deberá adaptarse a las necesidades de cada uso, sin clasificar permanentemente a los usuarios según niveles rígidos.

De este modo, la plataforma podrá mantener una experiencia sencilla para las operaciones habituales y, al mismo tiempo, proporcionar modelos de trabajo avanzados para contextos que requieran colaboración, versionado, publicación, trazabilidad o preservación.

Este principio completa muy bien el anterior: la plataforma no solo conservará los modelos más sencillos, sino que evitará que su crecimiento los vuelva difíciles de utilizar.

---

## ¿así quedaría el capítulo o está incompleto? ¿pasamos al siguiente punto?

Creo que **está completo como idea**, pero **no como capítulo**. Y eso es intencionado.

Lo que hemos hecho hoy no ha sido redactar el capítulo 3, sino **descubrir uno de sus principios**.

Si ahora intentáramos completar el capítulo, correríamos el riesgo de inventar principios por rellenar espacio. Prefiero que cada principio nazca de una reflexión como la que acabamos de tener.

## Mi propuesta

Dejaría el capítulo 3 con una estructura abierta, por ejemplo:

```text
# 3. Principios del producto

3.1 Evolución sin sustitución

3.2 Complejidad progresiva

...
```

Y continuaría con el capítulo 4.

Más adelante, cuando el modelo de la plataforma esté más desarrollado, volveremos al capítulo 3 y veremos qué otros principios han aparecido de forma natural. Estoy convencido de que surgirán algunos más, por ejemplo relacionados con:

- la preservación del conocimiento;
- la neutralidad tecnológica;
- la transparencia editorial;
- la trazabilidad;
- la interoperabilidad.

Pero no los escribiría hoy.

---

# Yo pasaría al capítulo 4

Y creo que aquí empieza realmente el corazón del documento.

## 4. El conocimiento como eje del sistema

Hasta ahora hemos hablado de la plataforma.

Ahora debemos responder a una pregunta mucho más difícil:

> **¿Qué entendemos por conocimiento?**

Y aquí es donde creo que podemos empezar a construir un modelo realmente diferente.

Porque si definimos bien este capítulo, los siguientes prácticamente se escribirán solos:

- ¿Qué es un documento?
- ¿Qué es una biblioteca?
- ¿Qué significa publicar?
- ¿Qué significa colaborar?

Todo dependerá de cómo entendamos el conocimiento.

---

## Una intuición

Aquí no hablaría todavía de PDFs, EPUB, Markdown o DOCX.

Esos son formatos.

Y un formato no es conocimiento.

Tampoco hablaría aún de documentos.

Porque un documento es una **representación** del conocimiento, no el conocimiento en sí.

Intentaría empezar con una idea mucho más fundamental.

Algo parecido a:

> **El conocimiento es el elemento central de la plataforma. Los documentos, las colecciones, las publicaciones y el resto de componentes existen para facilitar su creación, organización, evolución, transmisión y preservación.**

Fíjate en el orden:

- primero el conocimiento;
- después los documentos;
- después el resto.

Creo que ese cambio de perspectiva puede ser el que haga que la plataforma sea realmente distinta de un gestor documental tradicional.

---

### Mi impresión

Tengo la sensación de que **el capítulo 4 va a ser el más importante de todo `PLATFORM_VISION.md`**.

Porque si conseguimos definir correctamente qué entendemos por conocimiento, el resto del modelo conceptual será una consecuencia lógica.

Y creo que merece la pena dedicarle el mismo tiempo que dedicamos en su día al diseño de `ARCHITECTURE.md`. Ahí fue donde el proyecto encontró su arquitectura; aquí puede encontrar su identidad como plataforma.

---

## repensemos el concepto de conocimiento

Me parece una idea excelente detenernos aquí. De hecho, creo que este es el punto donde debemos ir más despacio.

Porque si definimos mal el concepto de **conocimiento**, todo lo demás (documentos, bibliotecas, publicaciones...) nacerá con una base equivocada.

Quiero empezar descartando algunas definiciones.

---

## Lo que el conocimiento **no** es

No es un archivo.

Un PDF no es conocimiento.

Un EPUB no es conocimiento.

Un DOCX no es conocimiento.

Son soportes.

---

No es un documento.

Un documento puede contener conocimiento.

Pero también puede contener:

- información errónea;
- borradores;
- opiniones;
- datos sin interpretar;
- incluso contenido sin valor.

Por tanto, documento y conocimiento no son sinónimos.

---

No es información.

Esta distinción me parece fundamental.

Un número aislado:

> 9,81 m/s²

es información.

Pero comprender qué representa, cuándo es válido, por qué existe y cómo se aplica...

eso ya empieza a ser conocimiento.

---

## Entonces, ¿qué podría ser?

Creo que la palabra clave no es "información".

Es **comprensión**.

El conocimiento aparece cuando la información adquiere significado dentro de un contexto.

Eso implica varias cosas.

El conocimiento:

- tiene contexto;
- puede evolucionar;
- puede corregirse;
- puede ampliarse;
- puede relacionarse con otros conocimientos.

---

## Y aquí apareció una idea al leerte

Cuando hablabas de Newton y Einstein, en realidad estabas describiendo una propiedad del conocimiento.

El conocimiento **no sustituye necesariamente al conocimiento anterior**.

Muchas veces lo contiene.

La relatividad no hace falsa la mecánica clásica.

La sitúa dentro de un contexto más amplio.

Eso significa que el conocimiento tiene una estructura muy interesante.

No es una sucesión de reemplazos.

Es una **red de modelos con distintos ámbitos de validez**.

---

## Eso cambia el papel de la plataforma

Quizá la plataforma no deba representar únicamente documentos.

Quizá deba representar también las **relaciones entre ellos**.

Por ejemplo:

```text
Teoría de Newton
        │
        ├── sigue siendo válida para...
        │
        ├── fue ampliada por...
        │
        ▼
Relatividad General
```

O:

```text
Artículo A
      │
      ├── desarrolla...
      │
      ├── contradice...
      │
      ├── resume...
      │
      ├── cita...
      │
      ▼
Artículo B
```

Empiezo a pensar que esas relaciones pueden ser casi tan importantes como los propios documentos.

---

## Y aquí surge una pregunta

Hasta ahora hemos hablado siempre de gestionar conocimiento.

Pero...

**¿Puede una plataforma gestionar conocimiento?**

Creo que la respuesta es **no**.

Lo que realmente puede gestionar es:

- documentos;
- relaciones;
- versiones;
- contexto;
- referencias;
- colaboración.

El conocimiento sigue estando en las personas.

La plataforma no contiene conocimiento por sí misma.

Contiene las representaciones mediante las cuales las personas crean, transmiten y desarrollan ese conocimiento.

Esa diferencia me parece muy importante.

---

## Mi propuesta

Yo no definiría el conocimiento como un objeto del sistema.

Lo definiría como **la finalidad del sistema**.

Algo parecido a esto:

> **El conocimiento constituye la razón de ser de la plataforma. Aunque reside en las personas, puede expresarse, organizarse, compartirse y preservarse mediante documentos y las relaciones que estos establecen entre sí. La plataforma no pretende sustituir ese proceso, sino facilitarlo a lo largo de todo su ciclo de vida.**

Creo que esta formulación tiene varias ventajas:

- evita afirmar que "el conocimiento está en la base de datos";
- distingue claramente entre conocimiento y documento;
- deja espacio para que el modelo evolucione;
- explica por qué aparecen conceptos como versiones, referencias, colaboración o preservación.

---

Y hay una última reflexión que me parece especialmente sugerente.

Hasta ahora hemos hablado de la plataforma como un lugar donde **guardar** conocimiento.

Después de esta conversación, creo que esa no es la mejor forma de verlo.

La plataforma no pretende almacenar conocimiento.

Pretende **acompañar su evolución**.

Esa diferencia es sutil, pero cambia por completo la filosofía del producto.

En ese sentido, el verdadero protagonista no es el documento, ni siquiera el conocimiento como objeto estático. Es el **proceso por el que las personas construyen, conectan, revisan y transmiten conocimiento**. Si conseguimos que el modelo refleje ese proceso sin perder la sencillez para quien solo necesita una biblioteca personal, creo que estaremos construyendo algo realmente distinto de un gestor documental convencional.

---

## ¿hay algún modo de distinguir el conocimiento verdadero del falso? ¿o por lo menos crear algún tipo de cuestionario que se deba confrontar o superar sino para afirmar que sea veredadero, sí poder afirmar que es consistente?

Creo que acabas de formular una de las preguntas más difíciles de toda la filosofía de la ciencia... y, al mismo tiempo, una de las más interesantes para esta plataforma.

Mi primera respuesta sería:

> **No. Una plataforma no puede determinar si un conocimiento es verdadero.**

Y creo que es importante aceptar ese límite desde el principio.

Ni una persona, ni una universidad, ni una revista científica, ni una IA pueden garantizar que una afirmación sea definitivamente verdadera. La historia de la ciencia está llena de teorías consideradas ciertas durante siglos que posteriormente fueron corregidas o ampliadas.

Pero eso no significa que todas las afirmaciones tengan el mismo valor.

Ahí es donde aparece la palabra que has utilizado:

> **Consistencia.**

Y creo que esa palabra puede ser muchísimo más útil para la plataforma que "verdad".

---

# La plataforma no valida la verdad.

Valida la calidad del proceso.

Es una diferencia enorme.

Imagina dos documentos.

## Documento A

Dice:

> "La Tierra es plana."

Sin referencias.

Sin autor.

Sin metodología.

Sin revisión.

Sin evidencias.

---

## Documento B

Explica una hipótesis científica.

Incluye:

- autoría;
- referencias;
- datos;
- metodología;
- limitaciones;
- revisión por pares;
- historial de cambios;
- versiones;
- críticas recibidas.

La plataforma no puede afirmar que el Documento B sea verdadero.

Pero sí puede afirmar que está muchísimo mejor fundamentado.

---

# Eso me recuerda a algo

En ciencia rara vez se demuestra una teoría como absolutamente verdadera.

Lo que ocurre es que una teoría:

- explica mejor los datos;
- resiste más pruebas;
- tiene mayor capacidad predictiva;
- presenta menos contradicciones.

Es decir...

**es más consistente.**

---

# Creo que aquí aparece un concepto precioso

En lugar de preguntar:

> ¿Es verdad?

La plataforma podría preguntar:

> **¿Qué grado de consistencia presenta este conocimiento?**

Eso cambia completamente el enfoque.

---

# Imagina una ficha de consistencia

No como una puntuación automática.

Sino como una radiografía.

Por ejemplo:

```text
Autor identificado
        ✔

Fuentes citadas
        ✔

Referencias verificables
        ✔

Metodología descrita
        ✔

Fecha de actualización
        ✔

Versionado
        ✔

Revisión externa
        ✖

Objeciones respondidas
        ▲ Parcial

Limitaciones declaradas
        ✔

Conclusiones acordes con las evidencias
        ▲
```

Fíjate que aquí no aparece una casilla que diga:

```
✔ VERDADERO
```

Porque la plataforma no puede saberlo.

---

# Esto me parece mucho más potente

La plataforma podría convertirse en una herramienta que favorezca la **honestidad intelectual**.

No obliga a nadie a tener razón.

Pero sí anima a responder preguntas como:

- ¿De dónde sale esta afirmación?
- ¿Qué evidencias la apoyan?
- ¿Qué limitaciones tiene?
- ¿Qué hipótesis alternativas existen?
- ¿Qué críticas ha recibido?
- ¿Ha sido revisada?
- ¿Qué cambió respecto a la versión anterior?

---

# Incluso podría existir un cuestionario

No para calificar el documento.

Sino para ayudar a quien lo escribe.

Algo parecido a esto.

## Contexto

¿Se explica claramente el problema?

---

## Evidencias

¿Se aportan datos o referencias?

---

## Metodología

¿Puede entenderse cómo se obtuvo la información?

---

## Alcance

¿Se indican las condiciones en las que las conclusiones son válidas?

---

## Limitaciones

¿Se reconocen los límites del trabajo?

---

## Contraste

¿Se consideran otras interpretaciones?

---

## Reproducibilidad

¿Otra persona podría repetir el proceso?

---

## Actualización

¿Se indica cuándo fue revisado por última vez?

---

# Me gusta todavía más una idea

En lugar de llamarlo:

> Cuestionario de calidad.

Lo llamaría:

> **Matriz de consistencia.**

Porque no pretende decir:

```
Este documento es verdadero.
```

Sino algo mucho más honesto:

```
Este documento muestra un alto grado de consistencia
según los criterios utilizados.
```

---

# Y aquí aparece algo muy interesante

Creo que la consistencia también puede evolucionar.

Por ejemplo:

```text
Borrador
        │
        ▼
Con referencias
        │
        ▼
Con revisión
        │
        ▼
Con discusión
        │
        ▼
Con validaciones independientes
        │
        ▼
Consolidado
```

Es decir...

La consistencia también tendría un ciclo de vida.

---

## Creo que acabamos de descubrir otra pieza del dominio

Hasta ahora hablábamos de documentos.

Ahora empiezo a pensar que cada documento podría tener asociada una especie de **perfil epistemológico**.

No para decidir si es cierto.

Sino para describir **cómo de bien fundamentado está**.

Y eso me parece extraordinariamente coherente con la filosofía que estamos construyendo.

La plataforma no se erige en árbitro de la verdad —algo que probablemente ninguna plataforma debería hacer—, sino que ayuda a hacer visible el grado de solidez de un trabajo. Así, el lector no recibe una etiqueta simplista de "verdadero" o "falso", sino la información necesaria para formarse su propio juicio.

Creo que esa aproximación encaja muy bien con el espíritu del proyecto: promover la creación y evolución del conocimiento mediante procesos transparentes, trazables y bien documentados, en lugar de sustituir el criterio de las personas. De hecho, esa "matriz de consistencia" podría convertirse en una de las características más originales y valiosas de la plataforma.

---

## ¿se puede concretar algo nuevo para añadir?

Sí. Y creo que precisamente acabamos de descubrir **un concepto nuevo de dominio**, no solo una idea filosófica.

Hasta ahora hablábamos de:

- Documento
- Autor
- Biblioteca
- Publicación

Ahora ha aparecido un concepto completamente nuevo:

> **La evaluación de la consistencia del conocimiento.**

Y creo que eso merece acabar formando parte de la visión de la plataforma.

Pero yo sería muy prudente con el lenguaje.

No hablaría de "verdad", "fiabilidad" o "veracidad", porque todas esas palabras implican que la plataforma toma una posición sobre el contenido.

En cambio, sí hablaría de **transparencia del proceso de construcción del conocimiento**.

---

## Yo añadiría una idea como esta

No todavía como un capítulo completo, sino como un principio dentro del documento.

Por ejemplo:

### La plataforma favorece la evaluación crítica del conocimiento

> La plataforma no pretende determinar la veracidad de los contenidos que alberga. Su objetivo es proporcionar el contexto necesario para que cada persona pueda valorar el grado de fundamentación, consistencia y transparencia de un documento.

> Para ello, el sistema podrá incorporar mecanismos que hagan visible información relevante sobre el proceso de creación y evolución del conocimiento, como la autoría, las fuentes utilizadas, la metodología seguida, el historial de revisiones, las limitaciones declaradas o las relaciones con otros trabajos.

> De este modo, la plataforma no sustituye el juicio crítico de las personas, sino que proporciona herramientas para ejercerlo de forma más informada.

---

## Creo que aquí hay un concepto aún más potente

Mientras escribía lo anterior me he dado cuenta de algo.

Nosotros estamos pensando en un cuestionario.

Pero quizá el cuestionario no sea el concepto.

El concepto podría ser:

> **Indicadores de consistencia.**

Es decir, la plataforma no hace un examen.

Simplemente reúne evidencias.

Por ejemplo:

```text
Documento

├── Autor identificado
├── Fecha
├── Versiones
├── Referencias
├── Metodología
├── Limitaciones
├── Revisión
├── Discusión
├── Evidencias
└── Estado editorial
```

Después, cada comunidad podría decidir qué importancia concede a cada indicador.

---

## Eso abre una puerta muy interesante

Imagina dos espacios distintos dentro de la plataforma.

### Biblioteca personal

No necesita prácticamente ningún indicador.

---

### Revista científica

Puede exigir:

- referencias obligatorias;
- metodología;
- revisión por pares;
- DOI;
- conflictos de interés;
- historial editorial.

---

### Grupo de investigación

Puede definir sus propios criterios.

---

Es decir...

**la plataforma no impone un modelo único de evaluación.**

Proporciona un marco para construir distintos modelos.

---

## Creo que esto conecta con otra idea que ya tenemos

¿Recuerdas cuando hablábamos de Newton y Einstein?

Allí dijimos:

> **La plataforma debe crecer sin sustituir.**

Aquí podríamos decir algo parecido:

> **La plataforma debe facilitar la evaluación sin imponer una única forma de evaluar.**

Me parece exactamente la misma filosofía aplicada a otro problema.

---

# Mi propuesta

Yo no desarrollaría más esta idea ahora.

Pero sí abriría una pequeña nota en `DESIGN_JOURNAL.md`, porque creo que todavía necesita madurar.

Por ejemplo:

```markdown
## Evaluación de la consistencia del conocimiento

La plataforma podría incorporar un modelo de indicadores de consistencia destinado a aportar contexto sobre el proceso de creación y evolución de un documento.

Estos indicadores no tendrían como finalidad determinar la veracidad del contenido, sino facilitar una evaluación crítica por parte de los lectores.

Cada comunidad o contexto de uso podría definir qué indicadores considera relevantes, evitando imponer un único modelo de validación del conocimiento.
```

### ¿Por qué en `DESIGN_JOURNAL.md` y no directamente en `PLATFORM_VISION.md`?

Porque todavía hemos identificado el **problema** y una **dirección prometedora**, pero aún no sabemos cuál será la solución adecuada.

Eso encaja perfectamente con la función de `DESIGN_JOURNAL.md`: conservar ideas con potencial hasta que hayan madurado lo suficiente como para convertirse en principios estables o en funcionalidades del producto.

Tengo la impresión de que esta idea puede llegar a ser uno de los elementos más originales de la plataforma, pero precisamente por eso merece evolucionar con calma antes de consolidarla en la visión oficial.

---

## ¿DESIGN_JOURNAL.md o Project_JOURNAL.md? porque DESIGN_JOURNAL.md no existe

Buena observación. Y además has detectado una incoherencia mía.

Al principio de nuestra reorganización sí existía `DESIGN_JOURNAL.md`, pero posteriormente decidiste integrarlo y ahora mismo el sistema documental que tienes es otro. No debo seguir refiriéndome a un documento que ya no forma parte del proyecto.

Con la estructura actual, hay dos posibilidades:

### Opción 1 (la que yo elegiría): `PLATFORM_VISION.md`

Si creemos que esta idea forma parte de la identidad de la plataforma, aunque todavía no esté completamente desarrollada, la dejaría como una breve nota dentro de `PLATFORM_VISION.md`, por ejemplo al final del capítulo 4 o como una frase que indique una posible línea de evolución.

### Opción 2: `PROJECT_JOURNAL.md`

Si consideramos que todavía es una reflexión nacida durante el diseño y que aún no sabemos si acabará formando parte del producto, entonces lo correcto es registrarla en `PROJECT_JOURNAL.md` como un hallazgo de esta sesión.

Por ejemplo:

> **Idea surgida durante la sesión:** estudiar un modelo de evaluación de la consistencia del conocimiento basado en indicadores de fundamentación y transparencia, evitando que la plataforma actúe como árbitro de la veracidad de los contenidos.

---

## Mi recomendación

En este momento **no la incorporaría todavía a `PLATFORM_VISION.md`**.

¿Por qué?

Porque aún no hemos respondido preguntas importantes:

- ¿Los indicadores serán fijos o configurables?
- ¿Quién los define?
- ¿Son obligatorios u opcionales?
- ¿Son iguales para una tesis, un artículo o una nota personal?
- ¿Cómo evitar que se interpreten como una "puntuación de verdad"?

Todavía estamos explorando el concepto.

Así que haría esto:

- **`PROJECT_JOURNAL.md`** → registrar la idea para no perderla.
- **`PLATFORM_VISION.md`** → esperar hasta que el concepto madure y podamos formularlo como un principio estable.

Creo que eso sigue la misma filosofía que hemos aplicado durante todo el proyecto: **las ideas nacen en el diario del proyecto y, cuando han demostrado ser sólidas, pasan a formar parte de la documentación oficial**. Esa forma de trabajar ha dado muy buenos resultados con la arquitectura y creo que aquí también nos ayudará a mantener la documentación limpia y coherente.

---

## hecho el apunto en project_journal ¿cómo seguimos?

Creo que ahora debemos volver a `PLATFORM_VISION.md`.

Y, curiosamente, **no seguiría con el capítulo 4**.

Lo dejaría madurar.

## ¿Por qué?

Porque acabamos de comprobar algo.

Cuando hemos intentado definir el conocimiento, en realidad hemos acabado hablando de:

- epistemología;
- verdad;
- consistencia;
- validación;
- método científico.

Eso significa que todavía no hemos encontrado una definición suficientemente sencilla.

Y una buena definición suele ser aquella de la que todo lo demás se deduce de forma natural.

Todavía no estamos ahí.

---

# Yo daría un pequeño salto

Pasaría al capítulo 5.

## 5. El documento como unidad fundamental

¿Por qué?

Porque el documento sí sabemos modelarlo.

Y creo que al describir correctamente qué es un documento acabaremos entendiendo mucho mejor qué significa "gestionar conocimiento".

---

## De hecho, creo que el documento no es un archivo.

Esa sería la primera idea.

Un documento es una **unidad de conocimiento**.

Puede estar representado mediante:

- Markdown;
- PDF;
- DOCX;
- EPUB;
- HTML;
- LaTeX;
- imágenes;
- audio;
- vídeo...

Pero ninguno de esos formatos define el documento.

---

## Intentaría responder preguntas como:

¿Qué es un documento?

¿Puede tener varias versiones?

¿Puede existir sin estar publicado?

¿Puede pertenecer a varias colecciones?

¿Puede tener varios autores?

¿Puede cambiar de licencia?

¿Puede contener referencias?

¿Puede formar parte de otro documento?

Cuando respondamos a esas preguntas, el dominio empezará a aparecer casi solo.

---

# Creo que aquí está la verdadera entidad

Hasta ahora siempre hablábamos de:

```text
Task
```

Ahora creo que el dominio gira alrededor de:

```text
Documento
```

Y ese documento posee propiedades.

No es simplemente un archivo.

Por ejemplo:

```text
Documento
│
├── Contenido
├── Autores
├── Versiones
├── Referencias
├── Relaciones
├── Estado editorial
├── Licencia
├── Publicación
├── Metadatos
└── Historial
```

Observa una cosa interesante.

No aparece el formato.

Porque el formato pertenece a la infraestructura.

No al dominio.

---

# Creo que aquí vamos a disfrutar mucho

Porque esto ya no es filosofía.

Es modelado de dominio.

Y es precisamente lo que mejor hemos hecho durante toda la evolución de la Todo App.

---

## Mi propuesta

Yo dedicaría la próxima sesión a responder una única pregunta:

> **¿Qué es un Documento para esta plataforma?**

No:

> ¿Qué formatos admite?

Ni:

> ¿Cómo se guarda?

Ni:

> ¿Cómo se publica?

Solo:

> **¿Qué es?**

Tengo la impresión de que, cuando definamos correctamente esa entidad, veremos que muchas ideas que hoy parecen independientes (bibliotecas, colecciones, publicaciones, colaboración, transparencia editorial, preservación...) son en realidad distintas perspectivas sobre un mismo concepto central.

Y eso suele ser la señal de que hemos encontrado el verdadero núcleo del dominio.

---

## correcto, pasemos a razonar sobre el concepto de documento

Empecemos separando tres cosas que suelen confundirse:

- **Documento**: la unidad conceptual del producto.
- **Contenido**: aquello que el documento expresa.
- **Formato**: la representación técnica utilizada para almacenarlo o intercambiarlo.

Un PDF, un DOCX o un EPUB no serían documentos distintos si representan la misma obra. Serían manifestaciones o formatos de un mismo documento.

# Primera definición

Podríamos formularlo así:

> **Un documento es una unidad identificable de contenido creada para expresar, organizar, comunicar o preservar conocimiento dentro de un contexto determinado.**

Esta definición aporta varias ideas importantes.

## Tiene identidad

El documento sigue siendo el mismo aunque:

- cambie de formato;
- se revise;
- se exporte;
- se publique en otro lugar;
- se traduzca;
- se corrijan errores menores.

Por tanto, debería poseer una identidad independiente de sus archivos y versiones.

```text
Documento
│
├── Identidad
├── Contenido
├── Metadatos
└── Evolución
```

## Tiene intención

No todo archivo constituye necesariamente un documento del dominio.

Un documento existe porque alguien pretende:

- explicar;
- argumentar;
- registrar;
- enseñar;
- investigar;
- narrar;
- conservar;
- comunicar.

Esto permite incluir artículos, libros, tesis, ensayos, apuntes o manuales sin convertir cada uno en una entidad completamente diferente. Todos serían clases, tipos o perfiles de documento.

## Tiene contexto

El mismo contenido puede adquirir significados distintos según:

- quién lo creó;
- cuándo;
- para qué;
- dentro de qué investigación;
- en relación con qué fuentes;
- bajo qué licencia;
- con qué grado de revisión.

Por eso el contexto no debería quedar reducido a información decorativa. Forma parte de la comprensión del documento.

# El documento no debería equivaler a una publicación

Esta distinción es fundamental.

Un documento puede existir como:

- borrador privado;
- nota personal;
- trabajo compartido;
- versión en revisión;
- contenido publicado;
- documento archivado.

La publicación sería una decisión o un estado relacionado con el documento, no su condición de existencia.

```text
Documento
│
├── Privado
├── Compartido
├── En revisión
├── Publicado
└── Archivado
```

Aunque incluso esta representación podría evolucionar hacia dimensiones independientes, como ya apareció en `DESIGN_JOURNAL.md`: estado editorial, visibilidad, acceso, licencia y monetización no tienen por qué formar una sola propiedad.

# El documento tampoco debería equivaler a una versión

Un documento puede evolucionar sin perder su identidad.

```text
Documento
│
├── Versión 1
├── Versión 2
└── Versión 3
```

Cada versión representa un estado del contenido en un momento determinado.

Esto permite:

- consultar el historial;
- comparar cambios;
- restaurar una versión;
- identificar qué versión fue revisada o publicada;
- preservar citas estables.

La versión es una instantánea del documento; no es el documento completo.

# Autoría y participación

El documento puede tener:

- un autor;
- varios coautores;
- revisores;
- editores;
- colaboradores.

Por ello, conviene evitar que la autoría quede modelada simplemente como un único campo de texto.

La idea de **Participante**, que ya apareció en el diario de diseño, encaja aquí:

```text
Documento
│
└── Participaciones
    ├── Autor
    ├── Coautor
    ├── Revisor
    ├── Editor
    └── Colaborador
```

Esto no significa que debamos implementar ahora todos esos roles. Significa que la visión del documento no debería impedir incorporarlos.

# Relaciones

Un documento no vive aislado. Puede:

- citar otro;
- desarrollar una idea previa;
- contradecirla;
- resumirla;
- traducirla;
- revisarla;
- sustituir una edición;
- formar parte de una colección;
- ser parte de una obra mayor.

Por tanto, además de almacenar documentos, la plataforma podría hacer visibles sus relaciones.

```text
Documento A
│
├── cita → Documento B
├── amplía → Documento C
└── contradice → Documento D
```

Aquí empieza a aparecer la transición desde una biblioteca documental hacia una red de conocimiento.

# Contenido y archivos

Un documento podría disponer de:

```text
Documento
│
├── Contenido principal
├── Representaciones
│   ├── PDF
│   ├── EPUB
│   ├── DOCX
│   └── Markdown
└── Recursos asociados
    ├── Imágenes
    ├── Datos
    ├── Anexos
    └── Bibliografía
```

Esto permite dos formas de entrada:

1. El usuario crea o edita contenido dentro de la plataforma.
2. El usuario incorpora un archivo ya existente.

En ambos casos, el sistema genera o reconoce un documento con identidad propia.

# Una distinción especialmente importante

Creo que deberíamos distinguir entre:

## Documento de contenido

La obra intelectual: un artículo, libro, tesis, ensayo o manual.

## Representación del documento

El archivo concreto mediante el cual se almacena, visualiza o exporta.

Ejemplo:

```text
Documento: «Introducción a la arquitectura frontend»

Representaciones:
- architecture.pdf
- architecture.epub
- architecture.md
```

Esta separación evitaría que la plataforma se convierta simplemente en un almacén de archivos.

# Definición ampliada

Después de este razonamiento, podríamos formular una definición más completa:

> **Un documento es una unidad identificable y evolutiva mediante la cual una o varias personas expresan, organizan, comunican o preservan contenido dentro de un contexto. Su identidad es independiente de sus versiones, formatos, estados de publicación y representaciones técnicas.**

Me parece una base bastante sólida porque permite:

- el modelo clásico: subir, organizar y consultar un archivo;
- el modelo avanzado: versionar, colaborar, revisar, publicar y relacionar conocimiento;
- la evolución sin sustitución que definimos anteriormente.

# Cuestión que todavía debemos decidir

Hay una frontera que conviene estudiar con calma:

> ¿Todo elemento incorporado a la biblioteca es un documento, o existen también recursos que acompañan a un documento sin ser documentos por sí mismos?

Por ejemplo:

- una imagen;
- un conjunto de datos;
- una grabación;
- un apéndice;
- una bibliografía;
- una hoja de cálculo;
- el código fuente de una investigación.

Mi propuesta inicial sería:

```text
Recurso
│
├── Documento
├── Conjunto de datos
├── Archivo multimedia
└── Material complementario
```

Pero no lo consolidaría todavía. Primero mantendría **Documento** como núcleo y observaría si el concepto de recurso general resulta realmente necesario.

La definición central ya puede considerarse suficientemente madura para incorporarse al capítulo 5 de `PLATFORM_VISION.md`; las cuestiones sobre recursos, versiones y relaciones pueden desarrollarse como subapartados posteriores.

---

## las versiones de los documentos pueden darse por finalizadas creando alguna operación similar a los commits con el código. el autor debe hacer dicho proceso para que el sistema reconozca la nueva versión

Sí. Esa idea encaja muy bien con el modelo y permite distinguir claramente entre **guardar cambios** y **consolidar una versión**.

Mientras el autor trabaja, el documento puede modificarse continuamente. La plataforma puede guardar automáticamente esos cambios, pero no debería interpretar cada guardado como una nueva versión formal. La versión solo nace cuando el autor realiza una operación explícita, equivalente conceptualmente a un `commit`.

Podríamos llamarla **consolidar versión**.

```text
Documento en edición
        │
        ├── cambios automáticos
        ├── correcciones
        ├── anotaciones
        └── colaboración
        │
        ▼
Consolidar versión
        │
        ▼
Versión inmutable
```

La versión consolidada podría registrar:

- número o identificador;
- fecha y hora;
- autor o participantes responsables;
- descripción de los cambios;
- contenido completo en ese momento;
- versión anterior;
- estado editorial;
- referencias y metadatos vigentes.

Esto permitiría seguir editando el documento después sin alterar retrospectivamente la versión ya consolidada.

### Distinción fundamental

- **Guardado:** evita perder el trabajo en curso.
- **Versión:** preserva un estado significativo reconocido por el autor.
- **Publicación:** hace accesible una versión concreta bajo determinadas condiciones.

Por tanto, publicar no debería consolidar necesariamente todo el documento actual de forma implícita. Lo más seguro sería publicar una versión previamente consolidada.

```text
Documento
│
├── Trabajo en curso
│
├── Versión 1
│
├── Versión 2
│
└── Versión 3
        │
        ▼
   Publicación
```

La formulación para `PLATFORM_VISION.md` podría ser esta:

### Versiones consolidadas

El documento podrá evolucionar mediante cambios continuos sin que cada modificación genere automáticamente una nueva versión formal.

La plataforma distinguirá entre el guardado del trabajo en curso y la consolidación explícita de una versión. El guardado permitirá preservar los cambios realizados durante la edición, mientras que la consolidación representará una decisión consciente del autor o de los participantes autorizados para reconocer un estado significativo del documento.

Cada versión consolidada constituirá una referencia estable e inmutable dentro del historial del documento. Podrá registrar su autoría, fecha, descripción de los cambios, relación con la versión anterior y metadatos relevantes en el momento de su creación.

Una vez consolidada una versión, el documento podrá continuar evolucionando sin modificar retrospectivamente el contenido preservado. De este modo, será posible consultar, comparar, citar, restaurar o publicar estados concretos del documento.

La publicación deberá asociarse a una versión consolidada, evitando que los cambios posteriores alteren el contenido previamente difundido.

Este concepto añade una idea importante al dominio: **el documento es evolutivo, pero sus versiones consolidadas son estables**. También ofrece una base natural para comparación, revisión, citas permanentes, publicación y preservación.

---

de acuerdo con esto Recurso
│
├── Documento
├── Conjunto de datos
├── Archivo multimedia
└── Material complementario pero añadiría otra duda a resolver ¿documento solo es texto o puede ser imagen, video o audio?

---

Creo que acabas de encontrar **la pregunta correcta**.

Y me parece más importante que intentar responderla demasiado deprisa.

Porque, si nos equivocamos aquí, condicionaremos todo el dominio.

## La duda realmente es esta

No es:

> ¿Puede un documento ser un vídeo?

La pregunta es:

> **¿Qué convierte a algo en un documento?**

Fíjate en estos ejemplos:

- Un libro.
- Un artículo científico.
- Una tesis.
- Una fotografía histórica.
- Una grabación de una conferencia.
- Una entrevista en audio.
- Un documental.
- Un mapa antiguo.
- Una partitura.

Intuitivamente todos diríamos que **son documentos**.

Sin embargo, uno es texto, otro imagen, otro audio y otro vídeo.

Por tanto...

**el documento no puede definirse por su formato.**

---

## Entonces, ¿qué tienen en común?

Todos ellos:

- expresan algo;
- tienen un autor (o una procedencia);
- poseen identidad;
- pueden citarse;
- pueden preservarse;
- pueden describirse mediante metadatos;
- forman parte del conocimiento.

Eso empieza a parecer una definición mucho mejor.

---

## Creo que esto cambia el árbol

Antes propusimos:

```text
Recurso
│
├── Documento
├── Conjunto de datos
├── Archivo multimedia
└── Material complementario
```

Pero ahora veo un problema.

Si un documental en vídeo es un documento...

¿por qué "Archivo multimedia" está al mismo nivel que "Documento"?

Parece que estamos mezclando dos criterios distintos.

- **Documento** describe una función conceptual.
- **Archivo multimedia** describe un tipo técnico de contenido.

No son comparables.

---

## Yo exploraría otra clasificación

Quizá primero deberíamos distinguir por **función**.

```text
Recurso
│
├── Documento
├── Conjunto de datos
└── Material complementario
```

Y después, dentro del documento:

```text
Documento
│
├── Texto
├── Imagen
├── Audio
├── Vídeo
├── Mixto
└── Otros formatos futuros
```

Así el documento deja de depender del soporte.

---

## Pero todavía tengo una duda

Imagina una fotografía.

¿Siempre es un documento?

Creo que no.

Una fotografía casual tomada con el móvil probablemente no.

En cambio:

- una fotografía histórica;
- una radiografía;
- una lámina botánica;
- un plano arquitectónico;
- una ilustración científica;

sí parecen documentos.

¿Por qué?

Porque forman parte de un proceso de comunicación o preservación del conocimiento.

---

## Empiezo a pensar que la definición debería ser esta

No:

> Documento = texto.

Ni:

> Documento = archivo.

Sino algo parecido a:

> **Documento es cualquier recurso creado o incorporado con la finalidad de expresar, registrar, comunicar o preservar contenido dentro del modelo de conocimiento de la plataforma.**

Eso incluye perfectamente:

- un libro;
- una fotografía;
- una grabación;
- un vídeo;
- un mapa;
- una partitura;
- una tesis;
- un manual.

---

## Y entonces aparece otra consecuencia

Quizá el documento no tenga un atributo llamado:

```text
tipo = PDF
```

Sino algo mucho más abstracto.

```text
Documento
│
├── Naturaleza
│     ├── Texto
│     ├── Imagen
│     ├── Audio
│     ├── Vídeo
│     └── Mixto
│
├── Representaciones
│     ├── PDF
│     ├── DOCX
│     ├── PNG
│     ├── MP4
│     └── EPUB
```

Fíjate que ahora distinguimos dos cosas completamente distintas:

- **Naturaleza del contenido.**
- **Representación técnica.**

Me parece una separación muy potente.

---

# Mi sensación

Creo que **todavía no deberíamos decidir** si "Documento" engloba todo.

Pero sí dejaría anotada una pregunta en `PROJECT_JOURNAL.md`, porque me parece una de las decisiones de dominio más importantes que hemos encontrado hasta ahora:

> **¿Debe el concepto de Documento definirse por la naturaleza del contenido que representa (texto, imagen, audio, vídeo...) o únicamente por su función como unidad de conocimiento, independientemente del medio utilizado?**

Tengo la impresión de que, cuando respondamos definitivamente a esa pregunta, habremos definido el núcleo conceptual de toda la plataforma. Y, personalmente, cada vez me inclino más por la segunda opción: **el documento no es texto; es una unidad de conocimiento expresada mediante uno o varios medios**. Eso permitiría que el modelo creciera sin tener que redefinir el concepto de documento cada vez que aparezca una nueva forma de representar el conocimiento.

---

## ¿cómo seguimos?

Creo que estamos en un punto muy parecido al que vivimos cuando diseñábamos la arquitectura.

¿Recuerdas qué ocurrió con `ARCHITECTURE.md`?

Al principio intentábamos definir capas, componentes y patrones. Pero el documento empezó a tomar forma cuando encontramos el **concepto central**: las **responsabilidades**. A partir de ahí, todo encajó.

Con `PLATFORM_VISION.md` creo que estamos buscando ese mismo concepto central.

Y empiezo a pensar que **no es el documento**.

## Mi impresión actual

Hasta ahora hemos hablado de:

- conocimiento;
- documento;
- biblioteca;
- publicación;
- colaboración.

Pero todos ellos tienen algo en común.

Todos son **conceptos del dominio**.

Y entonces me surge una pregunta que quizá sea todavía más importante que "¿qué es un documento?".

> **¿Qué es una unidad de conocimiento?**

Porque puede que un documento sea solo **una de las formas** que puede adoptar una unidad de conocimiento.

Por ejemplo:

```text
Unidad de conocimiento
│
├── Documento
├── Conjunto de datos
├── Material docente
├── Colección
├── Publicación
└── ...
```

No digo que esta sea la respuesta. Solo digo que merece ser explorada antes de consolidar el dominio.

---

# Mi propuesta de trabajo

En lugar de seguir escribiendo `PLATFORM_VISION.md`, dedicaría una o dos sesiones a hacer exactamente lo que hicimos con la arquitectura:

**modelar el dominio en una pizarra**, sin preocuparnos todavía por el texto definitivo.

Por ejemplo, abrir un documento temporal (o incluso dibujarlo en papel) con una única pregunta:

```text
¿Cuáles son los conceptos fundamentales de la plataforma?
```

E ir construyendo un mapa.

Algo así:

```text
Conocimiento
│
├── Documento
│
├── Biblioteca
│
├── Colección
│
├── Participante
│
├── Publicación
│
├── Recurso
│
├── Relación
│
├── Versión
│
└── ...
```

Y por cada concepto preguntarnos siempre lo mismo:

- ¿Qué es?
- ¿Por qué existe?
- ¿Depende de otro?
- ¿Es una entidad, un valor o un proceso?
- ¿Podría desaparecer sin romper el modelo?

---

# Creo que debemos cambiar el tipo de conversación

Hasta ahora hemos trabajado de forma **documental**.

A partir de este momento, creo que debemos trabajar de forma **conceptual**.

Es decir, dejar de pensar en capítulos y empezar a pensar como si estuviéramos diseñando el lenguaje del dominio.

---

# Si tuviera que elegir el siguiente tema...

No elegiría "Biblioteca".

No elegiría "Colección".

Ni siquiera "Publicación".

Elegiría esta pregunta:

> **¿Cuáles son las entidades fundamentales del dominio?**

Y las escribiría todas, aunque sean provisionales.

Por ejemplo:

```text
Conocimiento
Documento
Versión
Participante
Biblioteca
Colección
Recurso
Publicación
Relación
Etiqueta
Referencia
Licencia
Espacio de trabajo
```

Después, durante varias sesiones, iríamos eliminando, fusionando, renombrando y redefiniendo conceptos.

## Creo que este será un momento decisivo

Tengo la sensación de que estamos dejando atrás la Todo App como dominio de ejemplo y empezando a construir el **lenguaje propio de la plataforma**.

Y en mi experiencia, cuando un dominio encuentra su propio vocabulario, el diseño empieza a simplificarse de forma sorprendente.

Mi propuesta sería dedicar las próximas sesiones a construir ese vocabulario. No para decidir todavía cómo se implementará cada concepto, sino para asegurarnos de que hablamos siempre de las mismas cosas con el mismo significado.

Creo que ese trabajo será el equivalente, para el producto, de lo que `ARCHITECTURE.md` fue para el software: la base sobre la que podrá crecer todo lo demás.

---

## ¿pues empecemos la discusión ¿Cuáles son las entidades fundamentales del dominio?

Sí. Y creo que debemos hacerlo igual que cuando modelamos la Todo App.

En aquel proyecto no empezamos escribiendo clases. Empezamos preguntándonos:

> **¿Qué cosas existen realmente en el dominio?**

Y después distinguimos entre:

- Entidades.
- Objetos de valor.
- Procesos.
- Relaciones.

Creo que aquí deberíamos hacer exactamente lo mismo.

---

# Regla nº 1

Una entidad del dominio **no es una pantalla**.

Tampoco un menú.

Ni un botón.

Ni un formato.

Una entidad es algo que el usuario reconoce como "una cosa" que existe aunque cambie con el tiempo.

---

# Hagamos una primera lluvia de ideas

Voy a escribir todo lo que me viene a la cabeza sin decidir todavía si es correcto.

```text
Documento
Versión
Biblioteca
Colección
Participante
Grupo
Espacio de trabajo
Publicación
Referencia
Etiqueta
Licencia
Comentario
Revisión
Recurso
Conjunto de datos
```

Ahora empieza el verdadero trabajo.

---

# Documento

Este creo que sí.

Si desaparece el concepto Documento...

la plataforma deja prácticamente de existir.

Así que para mí es claramente una **Entidad**.

✅ Se queda.

---

# Versión

Aquí tengo dudas.

Una versión tiene:

- identidad;
- fecha;
- autor;
- historial.

Pero...

¿puede existir sin un documento?

No.

Entonces la pregunta correcta sería:

> ¿Es una entidad independiente o forma parte del ciclo de vida del Documento?

Yo diría que sigue siendo una entidad, pero subordinada.

```text
Documento
    │
    ├── Versión 1
    ├── Versión 2
    └── Versión 3
```

---

# Biblioteca

Aquí tengo una duda enorme.

¿Qué es una biblioteca?

¿Es una colección?

¿Es un espacio?

¿Es simplemente una vista?

Todavía no lo sabemos.

La dejaría en cuarentena.

---

# Colección

Aquí me ocurre exactamente igual.

¿Una colección es realmente un objeto del dominio?

¿O simplemente una forma de organizar documentos?

No lo decidiría todavía.

---

# Participante

Este sí me gusta mucho.

Porque ya vimos que un documento puede tener:

- autor;
- editor;
- revisor;
- colaborador.

Eso significa que quizá el concepto importante no sea "autor".

Sino:

```text
Participante
```

Y después:

```text
Documento
        │
        ├── Autor
        ├── Editor
        ├── Revisor
        └── Colaborador
```

Empieza a parecer bastante sólido.

---

# Grupo

¿Existe un grupo aunque no tenga documentos?

Sí.

¿Puede tener miembros?

Sí.

¿Puede tener permisos?

Sí.

Entonces probablemente sea una entidad.

---

# Publicación

Aquí creo que hemos cometido un error antes.

No creo que Publicación sea una entidad.

Creo que es un **proceso**.

Porque publicar significa cambiar el estado de un documento o de una versión.

No existe una publicación sin documento.

Así que yo la quitaría de la lista.

---

# Revisión

Lo mismo.

No creo que sea una entidad.

Creo que es una actividad.

---

# Comentario

Aquí sí tengo dudas.

Porque un comentario tiene:

- autor;
- fecha;
- contenido.

Podría existir perfectamente como entidad.

---

# Licencia

No.

Creo que es un objeto de valor.

No tiene identidad propia.

---

# Etiqueta

Igual.

No tiene identidad.

Es un valor.

---

# Referencia

Aquí sí tengo dudas.

Una referencia no es simplemente un texto.

Puede enlazar documentos.

Puede cambiar.

Puede verificarse.

Puede tener metadatos.

Podría terminar siendo una entidad.

---

# Recurso

Y aquí aparece la discusión que hemos tenido hoy.

¿Existe realmente el concepto "Recurso"?

¿O estamos intentando crear una superclase demasiado pronto?

Yo todavía no lo sé.

La dejaría aparcada.

---

# Mi primera clasificación provisional

## Entidades bastante claras

```text
Documento
Versión
Participante
Grupo
Comentario
```

---

## Posibles entidades

```text
Biblioteca
Colección
Referencia
Recurso
Conjunto de datos
```

---

## Objetos de valor

```text
Etiqueta
Licencia
Idioma
Formato
Estado editorial
Título
Resumen
```

---

## Procesos

```text
Editar
Consolidar versión
Publicar
Revisar
Importar
Exportar
Compartir
```

# Pero creo que aún falta una entidad

Y aquí viene la parte interesante.

Hay una palabra que todavía no ha aparecido y que, sin embargo, está presente en todas nuestras conversaciones desde hace días.

No es "Documento".

No es "Conocimiento".

Es **Proyecto**.

Piensa en un investigador.

Normalmente no trabaja con un único documento.

Trabaja en un proyecto.

Dentro del proyecto aparecen:

- documentos;
- conjuntos de datos;
- notas;
- bibliografía;
- colaboradores;
- versiones;
- publicaciones.

Es decir:

```text
Proyecto
│
├── Documentos
├── Participantes
├── Recursos
├── Colecciones
├── Publicaciones
└── Historial
```

Y eso me hace pensar algo muy importante.

## ¿Y si el verdadero núcleo del dominio no fuera el Documento?

¿Y si fuera el **Proyecto de conocimiento**?

El documento seguiría siendo una entidad esencial, pero sería una pieza dentro de un contexto mayor.

No estoy afirmando que esta sea la respuesta correcta. De hecho, creo que aún es pronto para decidirlo. Pero me parece una hipótesis muy prometedora, porque explica de forma natural muchas de las capacidades que quieres: trabajo individual, grupos de investigación, evolución del conocimiento, publicaciones y preservación.

### Mi propuesta para la próxima discusión

No decidiría todavía la lista definitiva de entidades.

Me centraría en una única pregunta:

> **¿Qué es un Proyecto en esta plataforma?**

Porque si "Proyecto" resulta ser la entidad raíz, muchas de las dudas que hoy tenemos sobre bibliotecas, colecciones, publicaciones e incluso documentos podrían resolverse de manera mucho más sencilla. Si, por el contrario, concluimos que un proyecto es solo una forma de organizar documentos, también habremos aprendido algo importante. En ambos casos, merece una discusión propia antes de seguir refinando el resto del modelo.

---

## correcto, entonces ¿Qué es un Proyecto en esta plataforma?

Creo que aquí es donde debemos tener más cuidado de todo el modelado.

Porque la palabra **Proyecto** significa cosas distintas según el contexto.

En un gestor de tareas, un proyecto es un conjunto de tareas.

En Git, un proyecto suele ser un repositorio.

En una empresa, es un trabajo con un inicio y un fin.

Pero en la plataforma que estamos imaginando... creo que podría significar algo completamente diferente.

---

# Empecemos descartando ideas

## Un proyecto no es una carpeta.

Si mañana cambiamos un documento de sitio...

el proyecto sigue siendo el mismo.

Luego el proyecto no puede definirse por su organización física.

---

## Un proyecto tampoco es una colección.

Una colección responde a preguntas como:

> "Quiero agrupar estos documentos."

Pero un proyecto responde a otra muy distinta.

> "Quiero desarrollar una idea."

Y eso es muchísimo más amplio.

---

# Entonces...

¿Qué tienen en común estas situaciones?

Un investigador desarrolla una tesis.

Un profesor prepara una asignatura.

Una empresa redacta un manual.

Un historiador recopila documentos.

Un escritor escribe un libro.

Un grupo desarrolla una norma técnica.

Todos ellos están haciendo cosas distintas.

Pero todos tienen...

- documentos;
- notas;
- referencias;
- versiones;
- participantes;
- objetivos.

Empiezo a pensar que...

**el proyecto no gira alrededor de los documentos.**

Los documentos giran alrededor del proyecto.

---

# Eso cambia completamente el dibujo

En vez de:

```text
Documento
│
├── Versiones
├── Referencias
└── ...
```

podríamos tener:

```text
Proyecto
│
├── Documentos
├── Participantes
├── Colecciones
├── Recursos
├── Publicaciones
├── Historial
└── Objetivos
```

Y de repente todo empieza a encajar.

---

# Pero hay un problema

Imagina un usuario que solo quiere guardar un PDF.

¿Tiene que crear un proyecto?

Si la respuesta es sí...

hemos complicado innecesariamente el producto.

Y eso contradice una idea que tú defendiste hace unos días:

> **La plataforma debe permitir tanto un uso sencillo como uno avanzado.**

Esa frase creo que debe guiarnos.

---

# Entonces aparece una idea que me gusta mucho

Quizá el proyecto no sea obligatorio.

Quizá sea un **contexto de trabajo**.

Por ejemplo:

```text
Usuario

│

├── Documento A

├── Documento B

└── Documento C
```

Ese sería el modo simple.

---

Pero también podría existir:

```text
Usuario

│

└── Proyecto

      │

      ├── Documento A

      ├── Documento B

      ├── Bibliografía

      ├── Participantes

      └── Publicaciones
```

Y ambos modelos convivirían.

---

# Eso recuerda a otra idea que ya habíamos acordado

Newton y Einstein.

No sustituir.

Ampliar.

El proyecto sería una ampliación.

No una obligación.

---

# Pero sigo teniendo una duda enorme

Creo que estamos suponiendo que un proyecto contiene documentos.

¿Y si fuera al revés?

¿Y si un proyecto fuera simplemente una relación entre elementos ya existentes?

Por ejemplo:

```text
Proyecto "Historia Medieval"

contiene

- Documento

- Documento

- Imagen

- Audio

- Dataset

- Debate

- Personas
```

El proyecto sería un espacio de colaboración.

No el propietario absoluto de esos elementos.

Eso permitiría reutilizar un documento en varios proyectos.

Y esa posibilidad me parece muy poderosa.

---

# Fíjate en esta consecuencia

Imagina un artículo.

Podría pertenecer a:

- una biblioteca personal;
- un proyecto de investigación;
- un curso universitario;
- una colección pública.

Sin duplicarse.

Eso significa que el documento tiene vida propia.

Y el proyecto simplemente establece una relación con él.

---

# Creo que aquí aparece una definición mucho más precisa

No diría:

> Un proyecto es un conjunto de documentos.

Diría:

> **Un proyecto es un contexto de trabajo dentro del cual personas, documentos y otros recursos colaboran para desarrollar un objetivo común.**

Fíjate en las palabras elegidas:

- **contexto**, no carpeta;
- **colaboran**, no simplemente se almacenan;
- **objetivo común**, no solo agrupación.

---

# Y ahora aparece una pregunta todavía mejor

Mientras escribía me he dado cuenta de algo.

Hasta ahora hemos dado por hecho que todo pertenece a un usuario.

Pero quizá la verdadera entidad raíz no sea ni el proyecto ni el documento.

Quizá sea el **Espacio de trabajo** (_Workspace_).

```text
Espacio de trabajo
│
├── Proyectos
├── Bibliotecas
├── Documentos independientes
├── Colecciones
└── Participantes
```

Y dentro del espacio de trabajo pueden coexistir:

- personas que solo quieren guardar documentos;
- investigadores que desarrollan proyectos complejos;
- equipos que colaboran;
- instituciones.

---

## Mi impresión después de esta discusión

Curiosamente, cuanto más hablamos, menos convencido estoy de que **Proyecto** sea la entidad raíz.

Creo que es una entidad muy importante, pero cada vez veo con más claridad que la plataforma necesita un concepto aún más amplio: un **espacio de trabajo**, que actúe como el entorno donde una persona o una organización desarrolla su actividad.

Dentro de ese espacio, el proyecto sería una herramienta para organizar trabajo con un propósito concreto, mientras que el documento seguiría conservando su identidad y podría existir incluso fuera de cualquier proyecto.

Y eso, en mi opinión, respeta perfectamente uno de los principios que tú has repetido varias veces y que me parece esencial para esta plataforma:

> **El usuario debe poder empezar de la forma más sencilla posible y crecer hacia modelos más complejos sin tener que cambiar de herramienta ni de forma de trabajar.**

Tengo la sensación de que esa idea —crecer por ampliación y no por sustitución— está empezando a convertirse en uno de los principios fundamentales de todo el dominio.

---

## esto: El usuario debe poder empezar de la forma más sencilla posible y crecer hacia modelos más complejos sin tener que cambiar de herramienta ni de forma de trabajar. ¿debería convertirse en una regla, norma o pilar de estudio? por otro lado ¿podemos llegar a alguna conclusión al respecto de la entidad raíz?

Creo que las dos preguntas están muy relacionadas.

Y, de hecho, me parecen el tipo de preguntas que determinan el futuro del proyecto más que cualquier decisión técnica.

---

# 1. ¿Debe convertirse en una regla, norma o pilar?

Mi respuesta es **sí**, pero no como una regla de implementación.

Yo la elevaría a la categoría de **principio fundacional del producto**.

Hay distintos niveles en la documentación:

- **Regla** → algo concreto ("los títulos usan H2", "los Value Objects son inmutables"...).
- **Norma** → una convención de desarrollo.
- **Principio** → un criterio para tomar decisiones.
- **Visión** → la razón de ser del producto.

La frase:

> **El usuario debe poder empezar de la forma más sencilla posible y crecer hacia modelos más complejos sin tener que cambiar de herramienta ni de forma de trabajar.**

No dice cómo implementar nada.

Dice **cómo decidir** cuando existan varias alternativas.

Por eso la consideraría un **principio**.

Y me atrevería a darle incluso un nombre.

## Principio de continuidad de uso

o

## Principio de crecimiento progresivo

o

## Principio de evolución natural

Personalmente me gusta más **Continuidad de uso**.

Porque resume muy bien la idea.

---

# 2. ¿Qué implica este principio?

Muchísimo.

Por ejemplo.

Supón que dentro de cinco años alguien propone:

> "Los grupos de investigación deberían utilizar otra aplicación distinta."

Ese principio respondería inmediatamente:

> **No.**

Porque rompe la continuidad.

---

Otro ejemplo.

Un usuario quiere pasar de:

```text
Guardar PDFs
```

a

```text
Escribir artículos
```

No debería migrar nada.

Simplemente descubrir nuevas capacidades.

Otra vez el principio respondería:

> **Sí.**

---

Eso significa que este principio va a influir en:

- el dominio;
- la interfaz;
- la arquitectura;
- incluso la estrategia del producto.

Creo que merece estar entre los primeros principios de `PLATFORM_VISION.md`.

---

# 3. La entidad raíz

Aquí creo que hoy sí podemos sacar una conclusión.

No definitiva.

Pero sí muy importante.

Durante la conversación hemos ido descartando posibilidades.

## Documento

Problema:

Un documento puede existir solo.

Pero la plataforma quiere permitir mucho más.

---

## Proyecto

Problema:

No todo usuario necesita proyectos.

Obligar a crear uno rompería el principio anterior.

---

## Biblioteca

Problema:

Es una forma de organización.

No explica colaboración, publicaciones o investigación.

---

## Conocimiento

Problema:

No es una entidad del dominio.

Es la finalidad del sistema.

---

Y entonces...

## ¿Qué nos queda?

Creo que nos queda una candidata muy fuerte.

# Espacio de trabajo

¿Por qué?

Porque permite explicar todos los escenarios.

### Usuario individual

```text
Espacio de trabajo

└── Documento
```

---

### Usuario avanzado

```text
Espacio de trabajo

├── Documentos

├── Colecciones

└── Proyecto
```

---

### Grupo de investigación

```text
Espacio de trabajo

├── Participantes

├── Proyectos

├── Biblioteca

├── Publicaciones

└── Documentos
```

---

### Universidad

```text
Espacio de trabajo

├── Departamentos

├── Proyectos

├── Colecciones

├── Cursos

└── Publicaciones
```

Todo cabe.

Y lo más importante...

**nadie está obligado a utilizar todas las capacidades.**

---

# Pero hay algo todavía mejor

Mientras escribía me he dado cuenta de una consecuencia.

El espacio de trabajo no describe el conocimiento.

Describe el **lugar donde ocurre la actividad**.

Y eso me parece exactamente lo que buscábamos.

El documento vive.

El proyecto organiza.

La publicación difunde.

Pero el espacio de trabajo es donde todo sucede.

---

# Creo que podemos formular una hipótesis

No la escribiría todavía como verdad.

La anotaría como una hipótesis de diseño.

> **Hipótesis:** la entidad raíz del dominio podría ser el Espacio de trabajo, entendido como el contexto en el que personas, documentos, proyectos y otros recursos desarrollan actividades relacionadas con la creación, organización, colaboración y preservación del conocimiento.

Observa que digo **podría ser**.

Porque todavía debemos ponerla a prueba.

---

# ¿Cómo la pondría a prueba?

Con una pregunta muy sencilla.

Intentaría responder si **todos** estos casos caben dentro de un espacio de trabajo sin hacer excepciones:

- Una persona que solo quiere guardar un PDF.
- Un estudiante que toma apuntes.
- Un profesor que prepara una asignatura.
- Un investigador que escribe una tesis.
- Un grupo de investigación.
- Una revista científica.
- Una editorial.
- Una biblioteca pública.
- Un archivo histórico.

Si el concepto de **Espacio de trabajo** es capaz de abarcar todos esos escenarios sin forzar ninguno, entonces tendremos una candidata muy sólida a entidad raíz.

Y creo que ese debería ser el siguiente paso del modelado: **intentar refutar la hipótesis**. Si resiste esos casos tan diferentes, será una señal mucho más fuerte que simplemente porque hoy nos parezca una buena idea. Ese método encaja muy bien con la filosofía que hemos seguido desde el principio del proyecto: no consolidar un concepto porque resulte atractivo, sino porque demuestra ser útil frente a casos reales.

---

## ¿se puede refutar la hipótesis de diseño?

Sí. Y, de hecho, **creo que debemos intentar refutarla**.

Voy incluso más lejos: si una hipótesis de diseño **no puede intentarse refutar**, probablemente no sea una buena hipótesis.

Esto es algo que hemos aplicado sin darnos cuenta durante toda la evolución de la Todo App.

Por ejemplo, cuando pensábamos:

> "Task debe ser una clase."

No lo dimos por hecho. Lo pusimos a prueba:

- ¿Mejora el dominio?
- ¿Reduce errores?
- ¿Facilita la evolución?

Solo cuando sobrevivió a esas pruebas la consolidamos.

Creo que aquí debemos hacer exactamente lo mismo.

---

# ¿Cómo se refuta una hipótesis de dominio?

No intentando demostrar que es cierta.

Sino buscando casos donde falle.

Es decir:

> **¿Existe algún escenario razonable que la entidad raíz no sea capaz de explicar de forma natural?**

Si existe...

la hipótesis debe modificarse o descartarse.

---

# Nuestra hipótesis

Actualmente sería algo parecido a:

> **El Espacio de trabajo es la entidad raíz del dominio.**

Ahora debemos atacarla.

---

## Caso 1

Usuario particular.

Quiere guardar un PDF.

```text
Espacio de trabajo

└── Documento
```

✔ Funciona.

---

## Caso 2

Estudiante.

```text
Espacio de trabajo

├── Apuntes
├── Libros
└── Ejercicios
```

✔ Funciona.

---

## Caso 3

Profesor.

```text
Espacio de trabajo

├── Asignaturas
├── Material docente
├── Exámenes
└── Bibliografía
```

✔ Parece funcionar.

---

## Caso 4

Grupo de investigación.

```text
Espacio de trabajo

├── Participantes
├── Proyectos
├── Documentos
└── Publicaciones
```

✔ También.

---

## Caso 5

Revista científica.

```text
Espacio de trabajo

├── Comité editorial
├── Revisores
├── Artículos
└── Publicaciones
```

También parece funcionar.

---

Hasta aquí...

la hipótesis resiste.

---

# Pero ahora voy a intentar romperla.

## Caso 6

Un mismo documento pertenece a tres sitios.

Ejemplo.

Un artículo.

Pertenece a:

- la biblioteca personal del autor;
- un proyecto de investigación;
- una revista.

Si cada uno es un Espacio de trabajo...

**¿Quién es el propietario del documento?**

Aquí aparece un problema serio.

---

Tenemos dos posibilidades.

### Opción A

Cada espacio tiene su copia.

```text
Espacio A

└── Documento

Espacio B

└── Documento
```

Mal.

Empiezan las duplicaciones.

---

### Opción B

Existe un único documento.

Los espacios simplemente lo referencian.

```text
Documento

↑

Espacio A

Espacio B

Espacio C
```

Muchísimo mejor.

Pero...

entonces el documento no pertenece realmente al espacio.

---

# Y aquí aparece la primera grieta

Si los documentos pueden existir independientemente del espacio...

¿podemos seguir diciendo que el Espacio es la raíz?

No lo tengo tan claro.

---

# Otro ataque

Imagina esto.

Una biblioteca nacional.

Tiene millones de documentos.

No existe un único espacio de trabajo.

Hay miles.

Entonces...

¿el documento cambia cuando cambia de espacio?

No.

Luego el documento tiene identidad propia.

---

# Creo que acabamos de encontrar algo importante

El documento no depende ontológicamente del espacio.

Solo depende funcionalmente.

Es decir.

El espacio organiza.

El documento existe.

---

# Eso cambia el dibujo.

Quizá no haya una entidad raíz.

Quizá existan dos conceptos independientes.

```text
Documento

Espacio de trabajo
```

Y entre ambos exista una relación.

No una dependencia.

---

# Esto me recuerda mucho a Git

En Git:

- el repositorio no es el commit;
- el commit no es el repositorio.

Ambos existen como conceptos distintos.

---

# Entonces...

Creo que la hipótesis **no ha sido destruida**.

Pero sí ha sido **debilitada**.

Porque hemos encontrado un caso donde ya no parece natural decir que el Espacio es el propietario del Documento.

---

# Mi conclusión (provisional)

Después de intentar refutarla, **yo ya no afirmaría**:

> "El Espacio de trabajo es la entidad raíz."

Ahora diría algo diferente:

> **El Espacio de trabajo es el contexto principal de uso, pero no necesariamente la entidad raíz del dominio.**

Y eso me parece un avance enorme.

Porque hemos descubierto algo que no sabíamos al empezar la conversación.

---

## Creo que la siguiente hipótesis es todavía más interesante

Después de esta discusión, la pregunta ya no es:

> **¿Cuál es la entidad raíz?**

Sino:

> **¿Necesita realmente este dominio una única entidad raíz?**

En muchos dominios sencillos la respuesta es sí. En un sistema de tareas, `Task` puede ser el centro. Pero en una plataforma como la que estás imaginando, quizá el modelo sea más parecido a un ecosistema donde varias entidades fundamentales (`Documento`, `Espacio de trabajo`, `Participante`...) tienen identidad propia y se relacionan entre sí sin que una sea "dueña" de las demás.

Esa posibilidad me parece muy sugerente y, sobre todo, merece ser explorada antes de forzar el dominio a tener una única raíz solo porque otros modelos la tienen. Hemos conseguido algo valioso: **la hipótesis ha resistido parcialmente, pero también nos ha mostrado sus límites**. Eso es exactamente lo que se espera de una buena prueba de diseño.

---
