# 🎤 Interview Notes

Este documento resume las principales decisiones de diseño tomadas durante el desarrollo del proyecto y el razonamiento técnico detrás de ellas.

El objetivo no era construir la aplicación Todo más completa, sino utilizar un problema sencillo para experimentar con patrones de arquitectura, gestión de estado y organización del código.

---

# Objetivo del proyecto

El propósito principal fue comprender cómo funciona internamente una arquitectura similar a Redux sin depender de librerías externas.

Quería entender:

- cómo se gestiona un estado global;
- cómo se notifican los cambios;
- cómo separar la lógica de negocio de la interfaz;
- cómo mantener el código testeable.

Por ese motivo decidí implementar un store propio utilizando únicamente las APIs que proporciona React.

---

# ¿Por qué no utilicé Redux?

Redux Toolkit es una excelente herramienta y probablemente la utilizaría en una aplicación empresarial.

Sin embargo, en este proyecto quería aprender qué ocurre "debajo del capó".

Implementar un store propio me permitió comprender conceptos como:

- estado único;
- dispatch;
- reducer;
- suscripciones;
- actualización de componentes mediante `useSyncExternalStore`.

Después de construirlo resulta mucho más sencillo entender cómo funcionan Redux, Zustand o cualquier otra librería de estado.

---

# ¿Por qué usar useSyncExternalStore?

React recomienda `useSyncExternalStore` para conectar componentes con fuentes de estado externas.

Como el estado no vive dentro de React sino dentro del store, este hook permite que la interfaz permanezca sincronizada de forma segura y predecible.

El Context únicamente expone el store; no almacena el estado.

---

# ¿Por qué el reducer es completamente puro?

Toda la lógica de negocio está concentrada en un único reducer.

El reducer:

- no conoce React;
- no accede al DOM;
- no utiliza localStorage;
- no realiza peticiones HTTP;
- no produce efectos secundarios.

Esto facilita enormemente las pruebas y hace que cualquier transición de estado sea completamente predecible.

---

# ¿Por qué existe un store independiente?

Separar el store de React tiene varias ventajas.

Permite:

- reutilizar la lógica;
- probar el dominio sin renderizar componentes;
- desacoplar la interfaz del modelo de datos;
- sustituir la interfaz sin modificar la lógica de negocio.

En este proyecto React actúa únicamente como consumidor del estado.

---

# ¿Por qué eliminé el Repository Pattern?

Durante una etapa del desarrollo existía una abstracción basada en Repository.

Tras varias refactorizaciones observé que:

- solo existía una implementación;
- la interfaz apenas aportaba valor;
- añadía complejidad innecesaria;
- hacía más difícil seguir el flujo del código.

Por ese motivo decidí eliminarla.

Fue una decisión consciente para reducir complejidad accidental.

Una buena arquitectura no consiste en añadir patrones, sino en utilizar únicamente aquellos que resuelven un problema real.

---

# ¿Por qué eliminar código en lugar de añadir más?

Durante el proyecto hubo varias refactorizaciones importantes.

En lugar de aumentar el número de capas, el objetivo fue simplificar la arquitectura.

Se eliminaron:

- factories innecesarias;
- selectores duplicados;
- servicios sin uso;
- código heredado;
- abstracciones que no aportaban valor.

Considero que una arquitectura sencilla suele ser más mantenible que una excesivamente sofisticada.

---

# ¿Cómo organizo el proyecto?

La aplicación está dividida en cuatro capas principales.

```
UI
│
▼
Context
│
▼
Store
│
▼
Reducer
│
▼
Persistencia
```

Cada una tiene una única responsabilidad.

Esto reduce el acoplamiento entre módulos y facilita la evolución del proyecto.

---

# ¿Cómo está planteado el testing?

El objetivo fue probar cada capa por separado.

Actualmente existen pruebas para:

- reducer;
- store;
- hooks;
- componentes;
- integración.

Esto permite detectar errores rápidamente y realizar refactorizaciones con confianza.

---

# ¿Qué aprendí durante el proyecto?

Más que aprender React, este proyecto me permitió comprender conceptos de diseño de software aplicados al frontend.

Especialmente:

- separación de responsabilidades;
- gestión del estado;
- reducers;
- arquitectura por capas;
- testing;
- refactorización continua;
- eliminación de deuda técnica.

---

# ¿Qué haría diferente en una aplicación empresarial?

Si el proyecto creciera considerablemente probablemente incorporaría herramientas específicas.

Por ejemplo:

- Redux Toolkit;
- Zustand;
- React Query o TanStack Query;
- una API REST;
- autenticación;
- integración continua;
- despliegue automático.

La decisión dependería del contexto del proyecto y del equipo.

---

# ¿Cuál fue la decisión más importante?

La decisión más importante no fue añadir una nueva funcionalidad.

Fue eliminar arquitectura que ya no aportaba valor.

Durante el desarrollo comprobé que algunos patrones que inicialmente parecían adecuados terminaron complicando innecesariamente el código.

Aprendí que una buena arquitectura no consiste en utilizar muchos patrones, sino en elegir únicamente los necesarios.

---

# Lecciones principales

Al finalizar este proyecto me llevo varias conclusiones.

- La simplicidad suele ser una ventaja.
- Un reducer puro es muy fácil de probar.
- React Context no tiene por qué ser el sistema de estado.
- Los patrones deben resolver problemas reales.
- El código también mejora cuando se elimina.
- La arquitectura debe evolucionar junto con el proyecto.

---

# Próximos retos

Los siguientes pasos previstos son:

- migración completa a TypeScript;
- sustitución de localStorage por una API REST;
- integración continua mediante GitHub Actions;
- despliegue automático;
- mejoras de rendimiento y experiencia de usuario.

Cada nueva versión intentará mantener el mismo objetivo que ha guiado este proyecto desde el principio: construir una aplicación sencilla, mantenible y técnicamente sólida.

| Si quieres...                        | Consulta...            |
| ------------------------------------ | ---------------------- |
| Entender la arquitectura             | `ARCHITECTURE.md`      |
| Conocer el estado actual             | `PROJECT_STATUS.md`    |
| Ver la evolución del proyecto        | `PROJECT_JOURNAL.md`   |
| Consultar decisiones arquitectónicas | `02-architecture/adr/` |
| Configurar el entorno                | `DEVELOPMENT_GUIDE.md` |
| Entender la estrategia de pruebas    | `TESTING.md`           |
| Ver las próximas actuaciones         | `ROADMAP.md`           |
