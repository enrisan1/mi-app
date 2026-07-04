# ADR 005 — Simplificación del Store y eliminación de patrones tipo Redux sobre-ingenierizados

## Estado

Aceptado

---

## Contexto

En versiones iniciales del proyecto, el sistema de estado intentaba replicar patrones inspirados en Redux de forma más explícita de lo necesario.

Esto incluía:

- múltiples abstracciones alrededor del store
- separación excesiva de capas intermedias
- intentos de generalización prematura
- estructuras pensadas para escalabilidad que no era necesaria

Aunque el objetivo era educativo, se introdujo **complejidad innecesaria** en relación al tamaño real del problema.

---

## Problema detectado

### 1. Sobreingeniería tipo Redux sin necesidad real

El sistema incluía patrones como:

- factories de store
- capas intermedias sin valor funcional
- intentos de generalizar el estado como si fuera una librería externa

Esto añadía complejidad sin aportar beneficios reales en una Todo App.

---

### 2. Pérdida de legibilidad

El flujo de estado se volvía más difícil de seguir:

```text
UI → Context → Service Layer → Store Factory → Store Instance → Reducer
```

En lugar de:

```text
UI → Context → Store → Reducer
```

Esto aumentaba la carga cognitiva del sistema.

---

### 3. Duplicación conceptual de Redux sin valor añadido

El objetivo era aprender conceptos de Redux:

- dispatch
- reducer
- store
- subscribe

Pero la implementación evolucionó hacia una **recreación innecesariamente compleja de Redux**, en lugar de una versión educativa simplificada.

---

### 4. Dificultad en mantenimiento y testing

La sobreabstracción dificultaba:

- rastrear el flujo de datos
- entender responsabilidades
- modificar lógica sin romper capas indirectas

---

## Decisión

Se decidió **simplificar completamente el store**, eliminando patrones redundantes y dejando una arquitectura mínima basada en:

```text
tasksStore
   ↓
tasksReducer
   ↓
estado único + suscriptores
```

El store mantiene únicamente responsabilidades esenciales:

- getState()
- subscribe()
- dispatch()

---

## Razonamiento

### 1. KISS (Keep It Simple, Stupid)

La solución más simple que funciona correctamente es la mejor opción.

---

### 2. Evitar simulaciones innecesarias de Redux

No es necesario replicar Redux para entender Redux.

El aprendizaje se mantiene, pero sin:

- factories
- capas artificiales
- abstracciones redundantes

---

### 3. Mejor relación señal / ruido

Menos código de infraestructura implica:

- más foco en lógica de dominio
- más claridad en el flujo de datos
- menos distracciones arquitectónicas

---

### 4. Mejor alineación con el objetivo del proyecto

El objetivo real del proyecto es:

> aprender arquitectura frontend y gestión de estado, no construir una librería de estado.

---

## Consecuencias

### Positivas

- arquitectura más simple
- menor carga cognitiva
- mejor legibilidad del flujo de datos
- mejor mantenibilidad
- tests más directos y claros

---

### Negativas

- menor flexibilidad para escenarios altamente complejos
- menos “extensibilidad teórica” tipo framework

---

## Trade-offs

| Enfoque                      | Ventaja               | Desventaja                 |
| ---------------------------- | --------------------- | -------------------------- |
| Redux-like overengineered    | escalabilidad teórica | complejidad innecesaria    |
| Store simplificado (elegido) | claridad + control    | menos abstracción avanzada |

---

## Resultado

La simplificación del store mejora significativamente la calidad del sistema al eliminar:

- abstracciones innecesarias
- duplicación conceptual de Redux
- complejidad accidental

y refuerza una idea clave:

> La arquitectura debe adaptarse al problema real, no a una versión idealizada del problema.

---

## Relación con otros ADRs

- ADR 001 — Store Architecture
- ADR 002 — Testing Strategy
- ADR 003 — Context vs Store Responsibility Split
- ADR 004 — Eliminación del Repository Pattern

---

## Nota final

Este cambio representa un punto clave de madurez en ingeniería frontend:

> entender que no todo sistema necesita escalar como si fuera una plataforma enterprise.
