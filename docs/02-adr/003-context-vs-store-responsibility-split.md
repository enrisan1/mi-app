# ADR 003 — Separación de responsabilidades: Context vs Store

## Estado

Aceptado

---

## Contexto

En este proyecto se utiliza una arquitectura de gestión de estado personalizada basada en:

- `tasksStore` como fuente única de verdad
- `tasksReducer` como lógica pura de dominio
- `React Context` como capa de integración con la UI

A medida que la aplicación creció, surgió una decisión arquitectónica clave:

> ¿Debe React Context ser el sistema de estado global?

o

> ¿Debe ser únicamente una capa de integración sobre un store externo?

---

## Decisión

Se decidió que:

> **React Context no es el sistema de estado global, sino una capa adaptadora entre React y el store.**

El estado real vive en:

```text
tasksStore (single source of truth)
```

React Context solo expone ese estado a los componentes.

---

## Arquitectura final

```text
UI Components
      ↓
Custom Hook (useTasks)
      ↓
React Context (adapter layer)
      ↓
tasksStore (state container)
      ↓
tasksReducer (pure logic)
```

---

## Razonamiento

### 1. Evitar usar Context como store

React Context por sí solo:

- no está optimizado para alta frecuencia de updates
- puede provocar re-renders innecesarios
- no ofrece control fino sobre suscriptores
- no escala bien como sistema de estado complejo

Por tanto, usarlo como store completo es una limitación arquitectónica.

---

### 2. Store como fuente única de verdad

El `tasksStore` es responsable de:

- mantener el estado global
- ejecutar `dispatch`
- notificar subscribers
- garantizar consistencia del estado

Esto lo convierte en el equivalente conceptual a Redux store.

---

### 3. Context como capa de compatibilidad con React

React necesita un mecanismo para:

- inyectar estado en el árbol de componentes
- permitir acceso global sin prop drilling

Por eso Context se utiliza únicamente como:

> puente entre el store y la UI

No contiene lógica de negocio.

---

### 4. Separación clara de responsabilidades

| Capa          | Responsabilidad        |
| ------------- | ---------------------- |
| tasksReducer  | lógica pura de negocio |
| tasksStore    | estado + suscripción   |
| React Context | integración con React  |
| UI            | renderizado y eventos  |

---

### 5. Evitar acoplamiento a React

Mover la lógica fuera de Context permite:

- testear el store sin React
- reutilizar lógica en otros frameworks
- mantener el dominio independiente de UI

---

## Consecuencias

### Positivas

- separación clara entre estado y UI
- store completamente testeable
- menor acoplamiento a React
- arquitectura más cercana a Redux interno
- mayor control del flujo de datos

---

### Negativas

- más complejidad inicial que usar solo Context
- requiere disciplina para no mezclar responsabilidades
- capa adicional de abstracción

---

## Trade-offs

| Enfoque                         | Ventaja            | Desventaja          |
| ------------------------------- | ------------------ | ------------------- |
| Context como store              | simple             | no escalable        |
| Redux/Zustand                   | estándar           | dependencia externa |
| Store + Context (este proyecto) | control + claridad | más diseño inicial  |

---

## Resultado

Esta decisión permite mantener una arquitectura donde:

- el estado no depende de React
- React solo actúa como capa de presentación
- el flujo de datos es predecible y testable

---

## Relación con otros ADRs

- ADR 001 — Store Architecture
- ADR 002 — Testing Strategy

---

## Nota final

Esta separación es intencional para demostrar cómo se puede construir un sistema de estado similar a Redux desde cero, manteniendo React únicamente como capa de UI.
