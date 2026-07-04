# Development Log

Este documento recoge la evolución del proyecto desde una aplicación Todo sencilla hasta una arquitectura frontend orientada a mantenibilidad, separación de responsabilidades y testing.

El objetivo no ha sido únicamente añadir funcionalidades, sino utilizar el proyecto como un laboratorio para experimentar con distintas soluciones arquitectónicas y aprender cuándo una abstracción aporta valor y cuándo añade complejidad innecesaria.

---

# Fase 1 · Aplicación básica

## Objetivo

Construir una aplicación funcional de gestión de tareas utilizando React.

## Implementación

Durante esta fase se desarrollaron las funcionalidades principales:

- Crear tareas.
- Editar tareas.
- Marcar tareas como completadas.
- Eliminar tareas.
- Filtrar tareas.
- Persistencia mediante `localStorage`.

La gestión del estado se realizaba directamente desde los componentes mediante los hooks de React.

## Aprendizajes

- Gestión básica del estado.
- Componentes funcionales.
- Comunicación mediante props.
- Uso de hooks.

---

# Fase 2 · Introducción del reducer

## Objetivo

Separar la lógica de negocio de la interfaz.

## Cambios realizados

La lógica de actualización del estado se trasladó a un reducer independiente.

Esto permitió centralizar todas las modificaciones del estado y eliminar lógica distribuida entre distintos componentes.

## Beneficios obtenidos

- Estado más predecible.
- Lógica reutilizable.
- Reducer fácilmente testeable.

## Aprendizajes

Comprender cómo funcionan internamente las arquitecturas basadas en Redux.

---

# Fase 3 · Gestión global mediante Context

## Objetivo

Eliminar el paso de propiedades entre componentes.

## Cambios realizados

Se introdujo un `TasksProvider` utilizando React Context.

El contexto comenzó a exponer:

- Estado.
- Acciones.
- Hooks personalizados.

## Beneficios

- Menor acoplamiento entre componentes.
- API más limpia para la interfaz.

## Aprendizajes

Diferenciar entre compartir estado y gestionar estado.

---

# Fase 4 · Creación de un store propio

## Objetivo

Comprender cómo funcionan internamente las librerías de gestión de estado.

## Cambios realizados

Se implementó un store independiente inspirado en Flux y Redux.

El store incorpora:

- `getState()`
- `dispatch()`
- `subscribe()`

React se conecta al store mediante `useSyncExternalStore`.

## Beneficios

- React deja de ser propietario del estado.
- La lógica de dominio queda desacoplada del framework.
- El store puede probarse de forma aislada.

## Aprendizajes

Comprender el funcionamiento interno de Redux sin depender de una librería externa.

---

# Fase 5 · Refactorización arquitectónica

## Objetivo

Separar claramente dominio, interfaz e infraestructura.

## Cambios realizados

Se reorganizó el proyecto en distintas capas:

- UI.
- Context.
- Domain.
- Infrastructure.
- Tests.

Cada carpeta pasó a tener una única responsabilidad.

## Beneficios

- Mayor mantenibilidad.
- Código más fácil de navegar.
- Mejor organización para proyectos de mayor tamaño.

---

# Fase 6 · Introducción de TypeScript

## Objetivo

Mejorar la seguridad del código mediante tipado estático.

## Cambios realizados

Migración progresiva de los elementos principales:

- Store.
- Reducer.
- Acciones.
- Context.
- Tipos de dominio.

Se creó un modelo `Task` compartido para evitar duplicidad de definiciones.

## Beneficios

- Detección temprana de errores.
- Mejor documentación del código.
- Mayor seguridad durante los refactorizados.

---

# Fase 7 · Simplificación de la arquitectura

## Objetivo

Reducir la complejidad accidental.

Durante las fases anteriores se introdujeron algunos patrones con fines de aprendizaje.

Una vez comprendidos, se revisó la arquitectura para eliminar aquellas piezas que no aportaban beneficios reales.

## Elementos eliminados

### Repository Pattern

Se creó inicialmente una interfaz para desacoplar la persistencia.

Finalmente se eliminó porque el proyecto solo dispone de una implementación (`localStorage`) y la abstracción añadía complejidad sin aportar flexibilidad real.

---

### Store Factory

Inicialmente el store se construía mediante una factoría independiente.

Posteriormente se simplificó al comprobar que solo existía un store global.

---

### tasksStoreInstance

Existía un archivo intermedio únicamente para exportar la instancia del store.

Se eliminó integrando directamente la instancia en el propio módulo del store.

---

### Selectores redundantes

Se eliminaron selectores que únicamente envolvían llamadas simples a `Array.filter()`.

La lógica permaneció en el lugar donde realmente se utiliza.

---

### Código heredado

También se eliminaron:

- reducers duplicados
- servicios antiguos
- pruebas obsoletas
- utilidades sin uso
- carpetas heredadas

El objetivo fue reducir el ruido del proyecto y facilitar su comprensión.

---

# Testing

La estrategia de pruebas evolucionó junto con la arquitectura.

Actualmente existen pruebas para:

- Reducer.
- Store.
- Hooks.
- Componentes.
- Integración.

Todas las pruebas se ejecutan correctamente.

---

# Decisiones importantes

Durante el desarrollo se tomaron varias decisiones conscientes.

## No utilizar Redux

El objetivo era comprender primero los principios de funcionamiento de un gestor de estado antes de incorporar una librería especializada.

---

## Utilizar `useSyncExternalStore`

Permite integrar un store externo con React utilizando la API oficial introducida para este propósito.

---

## Reducers puros

Toda la lógica de negocio permanece desacoplada de React y libre de efectos secundarios.

---

## Context únicamente como adaptador

El contexto no gestiona el estado de la aplicación.

Su única responsabilidad consiste en conectar React con el store.

---

# Estado actual

En este punto el proyecto dispone de:

- Arquitectura organizada por capas.
- Store propio inspirado en Flux.
- Reducers puros.
- Separación entre dominio e infraestructura.
- Persistencia mediante `localStorage`.
- Testing automatizado.
- Migración parcial a TypeScript.
- Código simplificado tras eliminar abstracciones innecesarias.

La arquitectura actual busca un equilibrio entre simplicidad, mantenibilidad y capacidad de evolución.

---

# Próximos pasos

Las siguientes mejoras previstas son:

- Completar la migración a TypeScript.
- Incorporar una API REST como fuente de datos.
- Añadir middleware al store.
- Optimizar el renderizado mediante selectores.
- Implementar historial de acciones (Undo / Redo).
- Automatizar pruebas y despliegue mediante GitHub Actions.

Cada una de estas mejoras se incorporará únicamente cuando aporte un beneficio claro al proyecto, evitando introducir complejidad innecesaria.
