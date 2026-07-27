# ADR 002 — Testing Strategy (Layered Testing Architecture)

## Status

Accepted

---

## Context

This project implements a custom state management system (store + reducer + Context adapter) built without external libraries such as Redux or Zustand.

Given this architecture, we need a testing strategy that ensures:

- Correctness of business logic
- Predictable state transitions
- UI reliability
- Isolation between layers
- Fast feedback loop in development

A key challenge is testing a system that combines:

- Pure domain logic (reducers)
- External state container (store)
- React integration layer (Context + hooks)
- UI components

---

## Decision

We adopted a **layered testing strategy**, aligned with the architecture layers:

```text
UI Components
    ↓
Hooks / Context Layer
    ↓
Store (state orchestration)
    ↓
Reducer (pure logic)
```

Each layer is tested independently with increasing integration scope.

---

## Testing Layers

### 1. Unit Tests — Domain Logic (Highest Priority)

#### Target

- `tasksReducer`

#### Characteristics

- Pure functions only
- No React dependency
- No side effects

#### Purpose

Ensure state transitions are correct and deterministic.

#### Example cases:

- ADD_TASK
- TOGGLE_TASK
- DELETE_TASK
- FILTERING LOGIC

✔ Fast
✔ Deterministic
✔ Fully isolated

---

### 2. Store Tests — State Orchestration

#### Target

- `tasksStore`

#### Characteristics

- Tests subscription model
- Tests dispatch flow
- Tests state updates over time

#### Purpose

Validate that:

- reducer integrates correctly
- subscribers are notified
- state consistency is maintained

✔ Simulates Redux-like behavior
✔ Ensures correct pub/sub implementation

---

### 3. Hook Tests — React Integration Layer

#### Target

- `useTasks`
- `TasksProvider`

#### Characteristics

- Uses React Testing Library
- Runs in simulated React environment

#### Purpose

Validate integration between:

- React Context
- External store
- UI reactivity

Focus on:

- state exposure
- filtering logic
- action dispatching

---

### 4. Component Tests — UI Layer

#### Target

- `TaskForm`
- `TaskList`
- `TaskItem`

#### Characteristics

- User-centric testing
- Black-box approach
- No direct store access

#### Purpose

Validate:

- rendering correctness
- user interactions
- UI state updates

---

### 5. Integration Tests — Full Flow

#### Scope

End-to-end flows inside the React app:

- Create task → appears in list
- Toggle task → updates filtered views
- Delete task → UI updates correctly

---

## Rationale

### 1. Separation of concerns in tests

Testing follows architecture boundaries:

- Pure logic → unit tests
- State system → store tests
- React glue → hook tests
- UI → component tests

This avoids overlapping responsibilities.

---

### 2. Fast feedback vs confidence trade-off

| Layer       | Speed     | Confidence |
| ----------- | --------- | ---------- |
| Reducer     | Very fast | High       |
| Store       | Fast      | High       |
| Hooks       | Medium    | High       |
| Components  | Medium    | High       |
| Integration | Slowest   | Very high  |

This balances development speed with system confidence.

---

### 3. Avoiding over-mocking

We intentionally avoid:

- mocking internal store logic
- mocking reducer behavior
- over-isolation of React Context

Because it reduces confidence in real behavior.

Instead, we test real interactions between layers.

---

### 4. Learning-driven design

This strategy mirrors real-world frontend architectures:

- Redux testing strategy patterns
- React Testing Library philosophy
- Domain-driven testing separation

The goal is to understand testing architecture, not just achieve coverage.

---

## Consequences

### Positive

- Clear separation of test responsibilities
- High confidence in state logic
- Easy debugging of failures
- Scalable testing structure
- Aligns with real-world frontend engineering practices

---

### Negative

- More test files
- Slightly slower suite vs unit-only approach
- Requires discipline to avoid testing overlap

---

## Trade-offs

| Approach                  | Pros               | Cons                 |
| ------------------------- | ------------------ | -------------------- |
| Only unit tests           | Fast               | Low confidence in UI |
| Heavy E2E testing         | High confidence    | Slow, brittle        |
| Layered strategy (chosen) | Balanced, scalable | More setup effort    |

---

## Outcome

This testing strategy ensures:

- predictable state behavior
- high confidence in UI flows
- maintainable test structure
- alignment with production-grade frontend systems

---

## Related

- 001-store-architecture.md
- tasksStore implementation
- useTasks hook
- React Context layer
