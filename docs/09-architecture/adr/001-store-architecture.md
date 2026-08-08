# ADR 001 — Store Architecture (Custom State Management)

## Status

Accepted

---

## Context

This project is a React 19 Todo App designed as a frontend architecture lab. One of the main decisions was how to manage global state without introducing external libraries such as Redux, Zustand, or MobX.

The system requires:

- A single source of truth
- Predictable state transitions
- Testable business logic
- Minimal framework coupling
- Full control over data flow

Initially, multiple approaches were considered:

- React Context only
- Redux Toolkit
- Zustand
- Custom store implementation

Each option introduces different trade-offs in complexity, control, and scalability.

---

## Decision

We implemented a **custom store architecture** based on:

- `tasksStore`
- `tasksReducer`
- Pub/Sub subscription model
- `useSyncExternalStore` integration with React

### Final architecture:

```text
UI (React Components)
        ↓
React Context (adapter layer)
        ↓
tasksStore (single source of truth)
        ↓
tasksReducer (pure state transitions)
        ↓
Persistence layer (localStorage)
```

---

## Rationale

### 1. Predictability over abstraction

A custom store ensures full visibility over how state changes occur. Unlike Redux or Zustand, there is no hidden middleware or internal magic.

---

### 2. Separation of concerns

- `tasksReducer` → pure function (domain logic)
- `tasksStore` → state orchestration + subscriptions
- React → rendering layer only

This separation allows:

- deterministic behavior
- easier unit testing
- framework independence of domain logic

---

### 3. Learning-driven architecture

This project intentionally replicates core ideas from Redux internally to understand:

- how dispatch flows work
- how subscribers are notified
- how React synchronizes external stores

This is not a production replacement for Redux, but a learning implementation.

---

### 4. React compatibility

The use of:

```ts
useSyncExternalStore;
```

ensures:

- concurrent rendering safety
- consistent state snapshots
- React 18/19 compatibility

---

## Consequences

### Positive

- Full control over state flow
- Extremely testable architecture
- No external state dependencies
- Clear mental model
- Easy debugging

---

### Negative

- No middleware system (thunks, sagas, etc.)
- Manual scalability management
- More boilerplate than Zustand
- Requires discipline to maintain structure

---

## Trade-offs

| Option                      | Pros                        | Cons                             |
| --------------------------- | --------------------------- | -------------------------------- |
| Redux Toolkit               | Industry standard, scalable | Boilerplate, abstraction cost    |
| Zustand                     | Minimal, fast               | Less explicit architecture       |
| Context API                 | Built-in                    | Poor performance for large state |
| Custom Store (this project) | Full control, educational   | Not production-optimized         |

---

## Outcome

The custom store approach was selected because the goal of this project is not to optimize for enterprise-scale complexity, but to deeply understand state management internals in React.

This decision improves:

- architectural clarity
- testability
- learning value
- control over system behavior

---

## Related

- 002-testing-strategy.md
- tasksStore implementation
- tasksReducer logic
