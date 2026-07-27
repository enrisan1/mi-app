# Architecture Evolution

## Objetivo

Este documento describe la evolución de la arquitectura del proyecto desde su primera versión hasta el estado actual.

No pretende registrar todos los cambios realizados —esa función corresponde a `PROJECT_JOURNAL.md` y al historial de Git—, sino explicar los principales saltos arquitectónicos que han dado forma al sistema.

Cada etapa representa un cambio conceptual en la forma de diseñar la aplicación, acompañado de los motivos que llevaron a adoptar esa solución y de los aprendizajes obtenidos durante el proceso.

---

# Etapa 1 · Aplicación inicial

## Objetivo

Construir una aplicación funcional de gestión de tareas utilizando React.

## Arquitectura

La aplicación se apoyaba únicamente en los mecanismos de estado proporcionados por React.

```text
Componentes React
        ↓
Hooks de estado
        ↓
localStorage
```

## Funcionalidades incorporadas

- Creación de tareas.
- Edición de tareas.
- Eliminación de tareas.
- Marcado de tareas como completadas.
- Filtrado de tareas.
- Persistencia mediante `localStorage`.

## Aprendizajes

- Componentes funcionales.
- Gestión local del estado.
- Comunicación mediante propiedades.
- Uso de los hooks básicos de React.

---

# Etapa 2 · Centralización de la lógica mediante reducers

## Objetivo

Separar la lógica de negocio de la interfaz de usuario.

## Evolución

La lógica de modificación del estado dejó de estar distribuida entre los componentes y pasó a concentrarse en un único reducer.

```text
UI
 ↓
Reducer
 ↓
Estado
```

## Beneficios

- Estado más predecible.
- Lógica reutilizable.
- Mayor facilidad para realizar pruebas unitarias.

## Aprendizajes

Comprender el valor de las funciones puras como base de una arquitectura mantenible.

---

# Etapa 3 · Compartición del estado con Context

## Objetivo

Eliminar el paso continuo de propiedades entre componentes.

## Evolución

Se introdujo React Context para proporcionar acceso global al estado.

El contexto comenzó exponiendo tanto el estado como las operaciones disponibles.

## Beneficios

- Menor acoplamiento entre componentes.
- API más sencilla para la interfaz.

## Aprendizajes

Distinguir entre compartir estado y gestionar estado.

Esta diferencia resultó fundamental para las siguientes etapas.

---

# Etapa 4 · Creación de un Store independiente

## Objetivo

Desacoplar completamente la gestión del estado de React.

## Evolución

Se desarrolló un Store propio inspirado en los principios de Flux y Redux.

El Store proporciona:

- `getState()`
- `dispatch()`
- `subscribe()`
- `replaceState()`

React dejó de ser el propietario del estado y pasó a actuar únicamente como consumidor mediante `useSyncExternalStore`.

```text
React
   ↓
useSyncExternalStore
   ↓
Store
   ↓
Reducer
```

## Beneficios

- Fuente única de verdad.
- Estado independiente del framework.
- Mayor facilidad de prueba y evolución.

## Aprendizajes

Comprender el funcionamiento interno de un gestor de estado antes de utilizar soluciones externas.

---

# Etapa 5 · Arquitectura por capas

## Objetivo

Separar claramente las responsabilidades del sistema.

## Evolución

El proyecto se reorganizó en capas bien definidas:

```text
UI
 ↓
Casos de uso
 ↓
Acciones
 ↓
Store
 ↓
Reducer
 ↓
Dominio
 ↓
Infraestructura
```

Cada capa pasó a asumir una única responsabilidad.

## Beneficios

- Mayor mantenibilidad.
- Menor acoplamiento.
- Evolución más sencilla.

## Aprendizajes

Una buena arquitectura facilita el cambio porque limita el impacto de cada modificación.

---

# Etapa 6 · Consolidación del dominio

## Objetivo

Trasladar las reglas de negocio al dominio.

## Evolución

Se incorporaron progresivamente:

- Value Objects.
- Entidades inmutables.
- Casos de uso.
- Selectores.
- Objetos especializados como `TaskList`.

El dominio dejó de depender de React y de la infraestructura.

## Beneficios

- Reglas de negocio más expresivas.
- Mayor cohesión.
- Código más fácil de validar mediante pruebas.

## Aprendizajes

El dominio constituye el núcleo de la aplicación y debe permanecer independiente de la tecnología utilizada.

---

# Etapa 7 · Migración completa a TypeScript

## Objetivo

Incrementar la seguridad del sistema mediante tipado estático.

## Evolución

Se completó la migración de la aplicación a TypeScript, incluyendo:

- Store.
- Reducers.
- Casos de uso.
- Dominio.
- Componentes.
- Infraestructura.

## Beneficios

- Detección temprana de errores.
- Refactorizaciones más seguras.
- Mejor documentación del código.

## Aprendizajes

El tipado estático no sustituye a las pruebas, pero reduce significativamente el riesgo durante la evolución del sistema.

---

# Etapa 8 · Simplificación arquitectónica

## Objetivo

Eliminar complejidad accidental.

A medida que aumentó el conocimiento sobre la arquitectura, varias abstracciones introducidas inicialmente dejaron de aportar valor y fueron eliminadas.

## Refactorizaciones principales

- Eliminación del Repository Pattern.
- Simplificación del Store.
- Eliminación de factorías innecesarias.
- Eliminación de código heredado.
- Centralización de la persistencia mediante `store.subscribe()`.
- Integración completa del historial (`Undo` / `Redo`).
- Consolidación de los casos de uso como punto de entrada al dominio.

## Beneficios

- Menor complejidad.
- Mayor claridad.
- Mejor mantenibilidad.
- Menor duplicidad de responsabilidades.

## Aprendizajes

Una arquitectura madura no se caracteriza por incorporar más capas, sino por conservar únicamente aquellas que aportan un beneficio claro.

---

# Estado actual

La arquitectura alcanzada se caracteriza por:

- Separación clara entre UI, aplicación, dominio e infraestructura.
- Store propio desacoplado de React.
- Reducers puros.
- Casos de uso como punto de entrada al dominio.
- Dominio basado en entidades y Value Objects.
- Persistencia desacoplada mediante `store.subscribe()`.
- Historial (`Undo` / `Redo`) completamente integrado.
- Cobertura de pruebas por capas.
- Migración completa a TypeScript.

El sistema mantiene un equilibrio entre simplicidad, mantenibilidad y capacidad de evolución.

---

# Principales aprendizajes arquitectónicos

La evolución del proyecto ha permitido consolidar varias ideas fundamentales:

- La arquitectura debe facilitar el cambio, no impedirlo.
- Las abstracciones solo son útiles cuando reducen la complejidad del dominio.
- El dominio debe permanecer independiente de la tecnología utilizada.
- Las pruebas automatizadas permiten refactorizar con seguridad.
- La simplicidad suele ser el resultado de comprender mejor el problema, no de escribir menos código.

---

# Relación con el resto de la documentación

Este documento complementa la documentación principal del proyecto:

- `ARCHITECTURE.md` describe la arquitectura actual.
- `system-design.md` explica el funcionamiento del sistema.
- `architecture-roadmap.md` analiza posibles escenarios de evolución futura.
- Los ADR documentan decisiones arquitectónicas concretas.
- `PROJECT_JOURNAL.md` conserva el contexto histórico de cada sesión de trabajo.

En conjunto, estos documentos ofrecen una visión completa del pasado, presente y posible evolución de la arquitectura del proyecto.
