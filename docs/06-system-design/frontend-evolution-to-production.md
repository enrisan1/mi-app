# Frontend System Design — Evolución del Proyecto a Producción

## Contexto

Este proyecto actualmente es una Todo App construida como laboratorio de arquitectura frontend, con un store propio, reducer puro y persistencia en localStorage.

El objetivo de este documento es describir cómo evolucionaría esta arquitectura si se convirtiera en una **aplicación de producción real**.

---

## Arquitectura actual (estado base)

```text
UI (React)
   ↓
Context Layer
   ↓
tasksStore (single source of truth)
   ↓
tasksReducer
   ↓
localStorage
```

Características actuales:

- estado local en cliente
- sin backend
- sin autenticación
- sin sincronización remota
- testing completo por capas

---

## Objetivo de evolución

Transformar la aplicación en un sistema frontend real con:

- backend API
- autenticación
- sincronización de datos
- manejo de errores
- escalabilidad por módulos
- observabilidad básica

---

## Arquitectura objetivo (producción)

```text
                    ┌────────────────────┐
                    │     Frontend       │
                    │   React App        │
                    └─────────┬──────────┘
                              ↓
                 ┌─────────────────────────┐
                 │   Application Layer     │
                 │  (Hooks + Store)        │
                 └─────────┬───────────────┘
                           ↓
                 ┌─────────────────────────┐
                 │   API Client Layer      │
                 │ (HTTP / Fetch / Axios)  │
                 └─────────┬───────────────┘
                           ↓
                 ┌─────────────────────────┐
                 │      Backend API        │
                 │ (REST / GraphQL)        │
                 └─────────┬───────────────┘
                           ↓
                 ┌─────────────────────────┐
                 │    Database Layer       │
                 │ (PostgreSQL / etc.)     │
                 └─────────────────────────┘
```

---

## Cambios clave en la arquitectura

### 1. Sustitución de localStorage

Actual:

```text
localStorage (sincrónico, local)
```

Producción:

```text
REST API / GraphQL (asíncrono, remoto)
```

Impacto:

- introducción de async state
- loading states
- error handling
- retry logic

---

### 2. Introducción de capa API Client

Se añade una capa intermedia:

```text
tasksStore → tasksService → apiClient → backend
```

Responsabilidades:

- comunicación HTTP
- serialización de datos
- manejo de errores
- autenticación (tokens)

---

### 3. Estado asíncrono en el store

El store evoluciona de:

```ts
dispatch(action);
```

a:

```ts
dispatch(async action)
```

o middleware-like pattern:

- loading
- success
- error

Ejemplo de estados:

```ts
{
  data: Task[],
  status: "idle" | "loading" | "error"
}
```

---

### 4. Separación por dominios (scaling frontend)

Evolución de estructura:

```text
src/
├── modules/
│   ├── tasks/
│   ├── auth/
│   ├── users/
│   └── notifications/
```

Cada módulo contiene:

- store
- hooks
- API client
- components
- tests

---

### 5. Autenticación (nuevo sistema)

Se introduce:

- login
- JWT token
- refresh token
- protected routes

Flujo:

```text
Login → API → Token → Store → UI state
```

---

### 6. Manejo de errores global

Se añade:

- error boundary
- global error store
- logging básico

Ejemplo:

```text
API error → store → UI notification system
```

---

## Testing en arquitectura de producción

Se expande el modelo actual:

### Unit tests

- reducers
- utilities

### Integration tests

- API client + store

### E2E tests

- Cypress / Playwright
- flujos completos de usuario

---

## Observabilidad (nivel producción)

Se pueden añadir:

- logging de eventos
- tracking de errores
- performance monitoring

Ejemplo:

```text
User Action → Store → API → Logging service
```

---

## Trade-offs de evolución

| Aspecto         | Actual       | Producción  |
| --------------- | ------------ | ----------- |
| Persistencia    | localStorage | Backend API |
| Estado          | síncrono     | asíncrono   |
| Complejidad     | baja         | media/alta  |
| Escalabilidad   | limitada     | alta        |
| Infraestructura | inexistente  | completa    |

---

## Conclusión

La arquitectura actual es ideal como:

- laboratorio de aprendizaje
- demostración de fundamentos de state management
- base para evolución

La arquitectura de producción introduce:

- separación frontend/backend
- asincronía
- autenticación
- escalabilidad modular

---

## Mensaje clave de diseño

> La evolución natural de un frontend no es añadir complejidad, sino introducirla solo cuando el dominio lo requiere.
