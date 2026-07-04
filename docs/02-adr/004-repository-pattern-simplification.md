# ADR 004 — Eliminación del Repository Pattern y simplificación de la arquitectura

## Estado

Aceptado

---

## Contexto

En las primeras iteraciones del proyecto se introdujo un **Repository Pattern** para abstraer la persistencia de datos de tareas.

La idea inicial era seguir principios de arquitectura limpia:

- separar dominio de infraestructura
- permitir múltiples fuentes de datos (localStorage, API, etc.)
- facilitar escalabilidad futura

Se definieron componentes como:

- TaskRepository interface
- LocalStorageTaskRepository implementation
- capa de infraestructura independiente

---

## Problema detectado

Con el avance del proyecto, se identificaron varios problemas:

### 1. Abstracción innecesaria

Solo existía una fuente de datos real:

- `localStorage`

No había:

- API real
- múltiples implementaciones
- necesidad de swapping de infraestructura

---

### 2. Complejidad accidental

El Repository Pattern introducía:

- más archivos
- más capas
- más indirection
- más boilerplate

Sin aportar valor funcional real.

---

### 3. Pérdida de claridad

El flujo de datos se volvía más difícil de seguir:

```text
Store → Repository → localStorage
```

En lugar de:

```text
Store → localStorage
```

Esto aumentaba la carga cognitiva sin beneficio proporcional.

---

### 4. Coste en testabilidad no justificado

Aunque el patrón mejora testabilidad en sistemas complejos, en este caso:

- el reducer ya era puro
- el store era testeable directamente
- la persistencia era trivial

Por tanto, el Repository no aportaba valor adicional real.

---

## Decisión

Se decidió **eliminar completamente el Repository Pattern** y simplificar la arquitectura a:

```text
UI
 ↓
Context Layer
 ↓
tasksStore
 ↓
tasksReducer
 ↓
localStorage (directamente)
```

---

## Razonamiento

### 1. YAGNI (You Aren’t Gonna Need It)

No había necesidad real de múltiples implementaciones de persistencia.

---

### 2. Reducción de complejidad accidental

Menos capas significa:

- menos archivos
- menos imports
- menos puntos de fallo
- más claridad en el flujo de datos

---

### 3. Mejora de mantenibilidad

El código es más fácil de:

- leer
- depurar
- extender
- explicar en entrevistas

---

### 4. Arquitectura más honesta

La arquitectura ahora refleja la realidad del sistema:

> es una Todo App con persistencia simple, no un sistema distribuido.

---

## Consecuencias

### Positivas

- código más simple
- menos abstracción innecesaria
- mejor legibilidad
- reducción de overhead arquitectónico
- onboarding más fácil

---

### Negativas

- menor flexibilidad futura inmediata
- si se añade API real, habrá que reintroducir capa de abstracción

---

## Trade-offs

| Enfoque                  | Ventaja                | Desventaja                   |
| ------------------------ | ---------------------- | ---------------------------- |
| Repository Pattern       | escalabilidad futura   | sobreingeniería aquí         |
| Acceso directo (elegido) | simplicidad y claridad | menos flexibilidad inmediata |

---

## Resultado

La eliminación del Repository Pattern mejora significativamente la relación:

> valor funcional / complejidad del sistema

y alinea la arquitectura con el objetivo real del proyecto:

> aprendizaje de state management y arquitectura frontend, no construcción de framework enterprise.

---

## Relación con otros ADRs

- ADR 001 — Store Architecture
- ADR 002 — Testing Strategy
- ADR 003 — Context vs Store Responsibility Split

---

## Nota final

Este cambio refleja una decisión clave de ingeniería:

> La mejor arquitectura no es la más abstracta, sino la más adecuada al problema real.
