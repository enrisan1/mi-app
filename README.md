# 🧠 React Todo App — Architecture Lab

> Aplicación de gestión de tareas en React enfocada en arquitectura frontend realista, gestión de estado propia y testing.

---

## 📖 Descripción

Este proyecto comenzó como una Todo App clásica y evolucionó hacia un laboratorio de arquitectura frontend.

El objetivo fue experimentar con:

- gestión de estado sin Redux Toolkit
- store propio basado en reducer
- separación real entre UI y lógica de dominio
- persistencia con localStorage
- testing completo por capas
- refactor progresivo eliminando complejidad innecesaria

El resultado final es una arquitectura **simple, predecible y mantenible**, sin abstracciones artificiales.

---

## ✨ Funcionalidades

- ➕ Crear tareas
- ✏️ Editar tareas
- ✅ Marcar como completadas / pendientes
- 🗑️ Eliminar tareas
- 🔍 Filtros:
  - Todas
  - Pendientes
  - Completadas

- 📊 Contadores dinámicos
- 🧹 Limpieza de tareas completadas
- 💾 Persistencia en `localStorage`

---

## 🛠️ Tecnologías

| Tecnología            | Uso                   |
| --------------------- | --------------------- |
| React 19              | UI                    |
| Vite                  | Build tool            |
| JavaScript            | Lenguaje principal    |
| TypeScript            | Tipado parcial        |
| Context API           | Integración con store |
| useSyncExternalStore  | Estado externo        |
| Vitest                | Testing               |
| React Testing Library | Testing UI            |
| ESLint                | Calidad de código     |

---

# 🏛️ Arquitectura actual

La arquitectura final es simple y sin capas artificiales.

UI Components
│
▼
React Context Layer
│
▼
tasksStore (single source of truth)
│
▼
tasksReducer (pure logic)
│
▼
localStorageTaskRepository (persistence)

---

## 🧩 Capas reales

### 🟢 UI Layer

Componentes React:

- TaskForm
- TaskList
- TaskItem

Responsabilidad:

- renderizar UI
- interactuar con el store mediante hooks

---

### 🟢 Context Layer

TasksProvider

Responsabilidad:

- conectar React con el store
- exponer estado y acciones
- manejar filtro de UI

---

### 🟢 Store (core)

tasksStore.ts

Responsabilidad:

- mantener estado global
- exponer:
  - getState
  - subscribe
  - dispatch
  - clear
  - hydrate

Es el único store del sistema.

---

### 🟢 Domain Layer

- tasksReducer.ts
- taskActions.ts
- task.ts

Responsabilidad:

- lógica pura de negocio
- transformación del estado
- acciones tipadas

---

### 🟢 Infrastructure Layer

localStorageTaskRepository.ts

Responsabilidad:

- persistencia de datos
- lectura/escritura en localStorage

---

## 🧪 Testing

Estado actual:

22 tests passing
0 failing

Tipos de tests:

- Unit tests (reducer)
- Store tests
- Component tests
- Hook tests
- Integration tests

---

## 🚀 Instalación

```bash
git clone https://github.com/enrisan1/mi-app.git
cd mi-app
npm install

▶️ Ejecución

npm run dev

📦 Build

npm run build

💡 Decisiones de diseño

Durante la evolución del proyecto se tomaron decisiones clave:

❌ Se eliminó:
Repository pattern innecesario (interfaz)
Factory de store
Store instance intermedia
Selectors redundantes
Duplicación de infraestructura
Capa domain/repository falsa

✔ Se mantuvo:

reducer puro
store basado en subscribe/dispatch
separación UI / domain / infrastructure
Context como adaptador React
persistencia localStorage

🧠 Aprendizajes

evolución de arquitectura sin sobreingeniería
cuándo eliminar abstracciones
diseño de store propio en React
useSyncExternalStore
testing por capas reales
equilibrio entre teoría y simplicidad

🔮 Posibles mejoras futuras

drag & drop de tareas
categorías o etiquetas
backend API (reemplazar localStorage)
autenticación
sincronización en la nube
optimización de renders
internacionalización

📄 Licencia

MIT
```
