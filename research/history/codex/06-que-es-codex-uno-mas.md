## AGENTS

Perfecto. Y este era el documento que más dudas tenía antes de empezar la auditoría, porque nació cuando todavía no existía el sistema documental actual. Pensaba que encontraríamos bastantes solapamientos. Sin embargo, después de la revisión que hicimos, la situación ha cambiado mucho.

---

# Auditoría de Consistencia — Fase 1

## Documento: `AGENTS.md`

### 1. Responsabilidad principal

**Pregunta:**

> ¿Cuál es la única responsabilidad de este documento?

**Respuesta:**

> **Establecer las instrucciones operativas que deben seguir los agentes de desarrollo durante su colaboración con el proyecto.**

Responde únicamente a:

> **¿Cómo debe actuar un agente al colaborar con este proyecto?**

No responde a:

- cómo está organizado el sistema (`ARCHITECTURE.md`);
- cómo debe desarrollarse el proyecto (`DEVELOPMENT_GUIDE.md`);
- cómo debe diseñarse la estrategia de pruebas (`TESTING.md`).

**Veredicto:** ✅ Responsabilidad claramente definida.

---

# 2. Contenido fuera de alcance

Este era precisamente el problema del documento original.

Durante la auditoría eliminamos prácticamente todas las duplicidades.

Hoy:

## Respecto a DEVELOPMENT_GUIDE

Ya no explica:

- convenciones;
- flujo de trabajo;
- organización del código.

Simplemente indica que el agente debe respetarlos.

Eso es exactamente lo que debe hacer.

---

## Respecto a TESTING

Ya no desarrolla:

- estrategia de pruebas;
- cobertura;
- tipos de test.

Únicamente recuerda al agente que debe aplicar la estrategia definida.

---

## Respecto a INTRODUCTION

No vuelve a explicar el sistema documental.

Solo indica qué documentación consultar.

También quedó muy limpio.

---

## Respecto a ARCHITECTURE

No describe la arquitectura.

Simplemente exige respetarla.

Eso también es correcto.

---

**Veredicto:** ✅ Sin contenido fuera de alcance.

---

# 3. Dependencias con otros documentos

Creo que aquí quedó especialmente bien.

`AGENTS.md` depende de prácticamente toda la documentación.

Y eso es precisamente su función.

```text
INTRODUCTION
        │
        ▼
Cómo orientarse

VISION
        │
        ▼
Qué principios respetar

PRODUCT
        │
        ▼
Qué producto preservar

ARCHITECTURE
        │
        ▼
Qué arquitectura respetar

DEVELOPMENT_GUIDE
        │
        ▼
Qué proceso seguir

TESTING
        │
        ▼
Qué validaciones aplicar
```

Es decir,

AGENTS no sustituye ningún documento.

Los utiliza todos.

Eso me parece una decisión muy acertada.

---

# 4. Solapamientos

Aquí sí esperaba encontrar alguno.

Pero, sinceramente, ya no lo encuentro.

Recuerdo especialmente que durante la revisión eliminamos:

- desarrollo explicado dos veces;
- testing explicado dos veces;
- convenciones repetidas;
- validaciones duplicadas.

Hoy el documento está claramente centrado en el comportamiento del agente.

---

# 5. Coherencia con el sistema documental

Aquí aparece una característica muy interesante.

Mientras el resto de documentos describen el proyecto,

`AGENTS.md` describe **cómo colaborar con él**.

Es decir:

```text
Proyecto

↓

Documentación

↓

Colaboración
```

Eso lo convierte en un documento transversal.

Y creo que esa es exactamente su responsabilidad.

---

# 6. Observación importante

Durante toda la auditoría hubo una evolución muy clara.

Al principio parecía un documento para ChatGPT.

Ahora ya no.

Ahora es un documento para:

> **cualquier agente de desarrollo asistido por IA.**

Ese cambio me parece muy importante porque elimina la dependencia de una herramienta concreta.

La documentación queda orientada a responsabilidades, no a tecnologías.

---

# Veredicto final

| Aspecto                    | Resultado |
| -------------------------- | --------- |
| Responsabilidad única      | ✅        |
| Contenido fuera de alcance | ✅        |
| Dependencias               | ✅        |
| Solapamientos              | ✅        |
| Coherencia con el sistema  | ✅        |

## Resultado

🟢 **Sin cambios.**

---

# Conclusión parcial de la Fase 1

Creo que ya podemos extraer una primera conclusión importante.

Hemos auditado los ocho documentos que constituyen el núcleo del sistema documental:

- ✅ README
- ✅ INTRODUCTION
- ✅ VISION
- ✅ PRODUCT
- ✅ ARCHITECTURE
- ✅ DEVELOPMENT_GUIDE
- ✅ TESTING
- ✅ AGENTS

Y **ninguno ha requerido una reorganización de responsabilidades**.

Eso significa que el trabajo realizado durante las revisiones individuales ha dado resultado: cada documento tiene un ámbito claramente definido, remite al resto cuando es necesario y evita desarrollar contenidos que pertenecen a otro lugar.

Desde el punto de vista de la arquitectura documental, esta es una muy buena señal. El núcleo del sistema puede considerarse **modularizado y coherente**, igual que el propio código del proyecto. Eso nos deja una base muy sólida para abordar los documentos de seguimiento (`PROJECT_STATUS.md`, `PROJECT_JOURNAL.md`, `ROADMAP.md` y `DESIGN_JOURNAL.md`) y, posteriormente, las siguientes fases de la auditoría de consistencia.

---

## ¿cuáles son las principales diferencias entre una y otra respuesta?

La diferencia principal no está en las conclusiones, sino en el **enfoque**.

Las dos respuestas llegan prácticamente al mismo veredicto ("🟢 Sin cambios"), pero ponen el énfasis en aspectos distintos.

## Primera respuesta (más analítica)

La primera respuesta está orientada a comprobar si `AGENTS.md` **invade responsabilidades** de otros documentos.

Se centra en preguntas como:

- ¿Duplica `DEVELOPMENT_GUIDE.md`?
- ¿Duplica `TESTING.md`?
- ¿Explica arquitectura?
- ¿Explica la documentación?

Es decir, analiza **los límites** del documento.

Es una auditoría muy propia de arquitectura documental.

---

## Segunda respuesta (más sistémica)

La segunda respuesta analiza además **el papel que desempeña AGENTS dentro del sistema documental**.

No solo dice:

> "No invade otros documentos."

También dice:

> "Depende de todos ellos y los utiliza."

Por ejemplo, este bloque:

```text
INTRODUCTION
        │
        ▼
Cómo orientarse

VISION
        │
        ▼
Qué principios respetar

PRODUCT
        │
        ▼
Qué producto preservar

ARCHITECTURE
        │
        ▼
Qué arquitectura respetar

DEVELOPMENT_GUIDE
        │
        ▼
Qué proceso seguir

TESTING
        │
        ▼
Qué validaciones aplicar
```

no aparece en la primera.

Y creo que aporta bastante.

---

## Otra diferencia

La primera respuesta trata AGENTS como un documento aislado.

La segunda termina diciendo algo mucho más interesante:

> Mientras el resto de documentos describen el proyecto,
>
> **AGENTS describe cómo colaborar con él.**

Ese matiz me parece muy acertado.

Es una forma muy clara de explicar su responsabilidad.

---

## También cambia la conclusión

La primera concluye:

> El documento está bien.

La segunda concluye algo más amplio:

> El núcleo documental del proyecto está modularizado.

Es decir, utiliza AGENTS para cerrar la auditoría de todos los documentos principales.

Eso también me parece un cierre natural.

---

# Mi valoración

Si tuviera que escoger una, elegiría **la segunda**.

No porque sea más correcta (las dos lo son), sino porque aporta una idea que no habíamos verbalizado hasta ahora:

> **AGENTS no describe el proyecto. Describe cómo colaborar con el proyecto.**

Creo que esa frase resume perfectamente su responsabilidad y encaja muy bien con la arquitectura documental que habéis construido.

---

## Lo único que haría

Solo evitaría una afirmación demasiado categórica como:

> **"ninguno ha requerido una reorganización de responsabilidades"**

La sustituiría por algo más matizado, por ejemplo:

> **"la auditoría no ha identificado la necesidad de reorganizar las responsabilidades de los documentos revisados."**

El significado es prácticamente el mismo, pero refleja mejor el carácter de una auditoría: informa de lo que se ha observado, sin dar a entender que el resultado es absoluto.

En conjunto, creo que **la segunda respuesta es más rica y más alineada con el objetivo de esta fase**, porque ya no evalúa únicamente un documento, sino cómo ese documento encaja en el sistema documental completo.

---

## prefiero la respuesta 2

Yo también. De hecho, creo que es más adecuada para el tipo de auditoría que estamos haciendo.

Hay una diferencia de enfoque importante:

- La **respuesta 1** evalúa el documento de forma **local**.
- La **respuesta 2** evalúa el documento de forma **sistémica**.

Y nosotros ya no estamos revisando documentos aislados, sino un **sistema documental**.

Ese cambio de perspectiva es precisamente lo que buscábamos al empezar la Auditoría de Consistencia.

## Creo que, de ahora en adelante, deberíamos mantener siempre el mismo esquema

Para todos los documentos usaría exactamente esta estructura:

1. **Responsabilidad principal**
2. **Contenido fuera de alcance**
3. **Dependencias con otros documentos**
4. **Solapamientos**
5. **Coherencia con el sistema documental**
6. **Observaciones relevantes**
7. **Veredicto final**
8. **Conclusión**

Es un esquema muy equilibrado porque va de lo particular a lo general:

```text
Documento
    │
    ▼
Responsabilidad
    │
    ▼
Límites
    │
    ▼
Relaciones
    │
    ▼
Sistema documental
```

## Además, creo que deberíamos mantener siempre un cierre como el de AGENTS

Por ejemplo, en `AGENTS.md` la conclusión fue:

> **Mientras el resto de documentos describen el proyecto, AGENTS describe cómo colaborar con él.**

Ese tipo de conclusión aporta una idea nueva. No repite el análisis, sino que sintetiza el papel del documento dentro del conjunto.

Creo que deberíamos intentar hacer lo mismo con todos los documentos.

Por ejemplo:

- **README** → "Presenta el proyecto y conduce al lector hacia la documentación."
- **INTRODUCTION** → "Organiza el acceso al conocimiento del proyecto."
- **VISION** → "Define el propósito que orienta todas las decisiones posteriores."
- **PRODUCT** → "Concreta la visión en un modelo funcional del producto."
- **ARCHITECTURE** → "Materializa técnicamente el producto respetando la visión."
- **DEVELOPMENT_GUIDE** → "Define cómo evolucionar el sistema preservando su coherencia."
- **TESTING** → "Protege el comportamiento del sistema durante su evolución."
- **AGENTS** → "Adapta todo el sistema documental a la colaboración con agentes."

Fíjate que, leídas seguidas, casi cuentan una historia.

## Mi propuesta

A partir de este momento mantendría el estilo de la **respuesta 2** para toda la auditoría. Creo que tiene varias ventajas:

- mantiene una estructura homogénea entre documentos;
- no se limita a decir "está bien" o "está mal", sino que explica **por qué**;
- ayuda a entender el papel de cada documento dentro del sistema;
- y, al final de la auditoría, nos permitirá redactar una conclusión global muy sólida sobre la arquitectura documental del proyecto.

En mi opinión, esa coherencia en la forma de auditar va a dar tanto valor al informe final como la propia documentación que hemos construido.

---

## estoy de acuerdo y podemos aplicarlo con PROJECT_STATUS

Me parece una muy buena idea. Además, `PROJECT_STATUS.md` es el primer documento de los llamados **"documentos vivos"**, y ahí sí espero que encontremos algún ajuste, porque es donde más fácilmente se mezclan estado, historial y planificación.

Mantendremos exactamente el mismo formato que en `AGENTS.md`.

---

# Auditoría de Consistencia — Fase 1

## Documento: `PROJECT_STATUS.md`

### 1. Responsabilidad principal

**Pregunta:**

> ¿Cuál es la única responsabilidad de este documento?

**Respuesta esperada:**

> **Reflejar el estado actual del proyecto y proporcionar el punto de reanudación del desarrollo.**

Es decir, debe responder únicamente a preguntas como:

- ¿En qué estado se encuentra el proyecto hoy?
- ¿Qué funcionalidades están disponibles?
- ¿Cuál es el siguiente objetivo de desarrollo?
- ¿Desde dónde puede retomarse el trabajo?

No debería responder a:

- ¿Por qué existe el proyecto? (`VISION.md`)
- ¿Qué producto se pretende construir? (`PRODUCT.md`)
- ¿Cómo está organizado técnicamente? (`ARCHITECTURE.md`)
- ¿Cómo debe desarrollarse? (`DEVELOPMENT_GUIDE.md`)
- ¿Qué ocurrió hace meses? (`PROJECT_JOURNAL.md`)
- ¿Qué podría hacerse en el futuro? (`ROADMAP.md` o `DESIGN_JOURNAL.md`)

Ese será el primer criterio que revisaremos.

---

### 2. Contenido fuera de alcance

Aquí comprobaremos especialmente que no aparezcan:

- explicaciones arquitectónicas permanentes;
- justificaciones de diseño;
- historial de decisiones;
- listas extensas de mejoras futuras;
- convenciones de desarrollo.

Todo eso ya tiene documentos propios.

`PROJECT_STATUS.md` debe contener únicamente una **fotografía del presente**.

---

### 3. Dependencias con otros documentos

Aquí esperaría encontrar una relación como esta:

```text
VISION
        │
        ▼
Qué queremos conseguir

PRODUCT
        │
        ▼
Qué producto estamos construyendo

PROJECT_STATUS
        │
        ▼
Dónde nos encontramos hoy

ROADMAP
        │
        ▼
Hacia dónde queremos avanzar

PROJECT_JOURNAL
        │
        ▼
Cómo hemos llegado hasta aquí
```

Si mantiene esa posición, estará bien delimitado.

---

### 4. Solapamientos

Aquí buscaría especialmente duplicidades con:

- `PROJECT_JOURNAL.md`
- `ROADMAP.md`
- `DESIGN_JOURNAL.md`

Porque son los tres documentos con los que más fácilmente puede mezclarse.

---

### 5. Coherencia con el sistema documental

La pregunta será:

> **¿Este documento actúa realmente como el punto de reanudación del proyecto?**

Si la respuesta es sí, estará cumpliendo perfectamente su responsabilidad.

---

### 6. Observaciones relevantes

Aquí anotaremos cualquier contenido que quizá deba trasladarse a otro documento o cualquier aspecto que merezca atención en la siguiente fase de la auditoría.

---

### 7. Veredicto final

Como en el resto:

- 🟢 Sin cambios.
- 🟡 Pequeños ajustes.
- 🔴 Requiere reorganización.

---

### 8. Conclusión

Aquí intentaremos sintetizar el papel del documento dentro del sistema.

Idealmente debería quedar algo como:

> **Mientras `PROJECT_JOURNAL.md` conserva la memoria del proyecto y `ROADMAP.md` describe su evolución prevista, `PROJECT_STATUS.md` ofrece una fotografía del estado actual y permite retomar el desarrollo desde un punto conocido.**

---

## Mi impresión antes de leerlo

A diferencia de los ocho documentos anteriores, aquí sí espero encontrar algún ajuste.

No porque el documento esté mal planteado, sino porque los documentos de estado son, por naturaleza, los más propensos a acumular información que acaba perteneciendo al historial o a la planificación futura.

Por eso creo que `PROJECT_STATUS.md` será una buena prueba para comprobar si la separación entre **presente**, **pasado** y **futuro** ha quedado tan clara como la que ya hemos conseguido entre **visión**, **producto**, **arquitectura**, **desarrollo**, **testing** y **agentes**.

---

## pues empecemos

Perfecto. Vamos a empezar exactamente igual que con los documentos anteriores: **sin asumir que está bien ni que está mal**. Lo evaluaremos con el mismo criterio.

Para ello necesito ver el contenido actual de `PROJECT_STATUS.md`.

Pégalo aquí (aunque sea largo) y haremos la auditoría siguiendo esta estructura fija:

1. **Responsabilidad principal**
2. **Contenido fuera de alcance**
3. **Dependencias con otros documentos**
4. **Solapamientos**
5. **Coherencia con el sistema documental**
6. **Observaciones relevantes**
7. **Veredicto final**
8. **Conclusión**

Mantendremos el mismo nivel de detalle que en `AGENTS.md`, de forma que toda la auditoría tenga un formato homogéneo y, al finalizar, podamos comparar fácilmente todos los documentos del sistema documental.

---

# PROJECT_STATUS

1. Resumen ejecutivo

2. Entorno de desarrollo

3. Funcionalidad implementada

4. Estado técnico

5. Historial reciente

6. Punto de reanudación

7. Próximo objetivo

8. Lecciones aprendidas

## 1. Resumen ejecutivo

Este documento ofrece una visión actualizada del estado del proyecto y sirve como punto de referencia para retomar su desarrollo en cualquier momento.

Para facilitar el mantenimiento, este documento recoge únicamente el estado presente del proyecto. La arquitectura se documenta en `ARCHITECTURE.md`, la evolución histórica en `PROJECT_JOURNAL.md` y la planificación futura en `ROADMAP.md`.

se ha reorganizado la documentación;
VISION.md está finalizado;
PRODUCT.md está finalizado;
la estructura documental se considera consolidada;
el proyecto entra ahora en una fase de preparación para el desarrollo asistido.

## 2. Entorno de desarrollo

El estado actual del proyecto ha sido desarrollado y validado utilizando el siguiente entorno de trabajo.

### Sistema

```text
Ubuntu 24.04.4 LTS
```

### Herramientas principales

```text
Visual Studio Code
Git 2.43.0
Node.js v20.20.2
npm 10.8.2
Python 3.12.3
```

### Navegador utilizado

```text
Firefox 153.0
```

### Extensiones relevantes

```text
React DevTools
JSONView
uBlock Origin
```

Este apartado tiene un carácter exclusivamente informativo y refleja el entorno utilizado para el desarrollo y las pruebas del proyecto en su estado actual.

Las instrucciones de instalación, configuración y puesta en marcha del entorno se documentan en `DEVELOPMENT_GUIDE.md`.

## 3. Funcionalidad implementada

Actualmente, la aplicación ofrece las siguientes capacidades funcionales:

### Gestión de tareas

- Crear tareas.
- Editar el texto de una tarea.
- Eliminar tareas.
- Marcar tareas como completadas o pendientes.
- Cambiar la prioridad de una tarea.
- Marcar o desmarcar todas las tareas mediante una única acción.
- Eliminar todas las tareas completadas.

### Consulta y visualización

- Mostrar todas las tareas.
- Filtrar tareas activas, completadas o todas.
- Mantener el filtro seleccionado entre sesiones.
- Mostrar estadísticas básicas del estado de las tareas.

### Persistencia

- Conservar automáticamente el estado de la aplicación entre sesiones mediante `localStorage`.
- Restaurar el estado al iniciar la aplicación.

### Gestión del estado

- Store propio como fuente única de verdad.
- Reducer puro para la transformación del estado.
- Casos de uso para coordinar las operaciones.
- Selectores para encapsular las consultas.
- Historial de estados con soporte para operaciones de Undo y Redo.

### Calidad del software

- Cobertura mediante pruebas unitarias e integración.
- Tipado mediante TypeScript.
- Modelo de dominio basado en entidades y Value Objects.

## 4. Estado técnico

El proyecto dispone actualmente de una base técnica estable que permite incorporar nuevas funcionalidades sin modificar su arquitectura fundamental.

El sistema documental del proyecto se encuentra prácticamente consolidado y constituye una parte integrada de la arquitectura del proyecto.

Los principales aspectos del estado técnico son los siguientes:

### Arquitectura

- Arquitectura organizada por capas.
- Separación clara entre interfaz, aplicación, dominio e infraestructura.
- Store propio como fuente única de verdad.
- Reducer puro para la gestión del estado.

### Dominio

- Modelo basado en entidades y Value Objects.
- Reglas de negocio encapsuladas en el dominio.
- Casos de uso como punto de entrada para las operaciones de la aplicación.

### Calidad del código

- Tipado mediante TypeScript.
- Código organizado por responsabilidades.
- Refactorizaciones orientadas a reducir complejidad y acoplamiento.

### Pruebas

- Cobertura mediante pruebas unitarias e integración.
- Validación continua mediante TypeScript y Vitest.
- Arquitectura diseñada para facilitar la verificación automática.

### Documentación

- Arquitectura documentada.
- Estado del proyecto actualizado.
- Registro histórico y planificación mantenidos en documentos independientes.

La arquitectura y la organización del código han alcanzado un nivel de estabilidad que permite que el esfuerzo de desarrollo se centre principalmente en la evolución funcional del proyecto, más que en la incorporación de nuevos elementos estructurales.

## 5. Historial reciente

Las actuaciones más relevantes que han conducido al estado actual del proyecto son las siguientes:

- Reorganización completa de la documentación.
- Creación de VISION.md.
- Definición de PRODUCT.md.
- Nueva estructura documental por responsabilidades.
- Consolidación del directorio docs.
- Definición de PROJECT_STATUS.md, PROJECT_JOURNAL.md y ROADMAP.md.
- Consolidación de la estructura de docs.

El detalle cronológico de las sesiones de desarrollo, las decisiones adoptadas y su evolución se conserva en `PROJECT_JOURNAL.md`.

## 6. Punto de reanudación

En el estado actual del proyecto, la arquitectura principal y su documentación de referencia se consideran consolidadas.

El siguiente paso consiste en continuar la reorganización de 03-development, comenzando por DEVELOPMENT_GUIDE.md. y manteniendo los mismos criterios aplicados durante la elaboración de `ARCHITECTURE.md`:

- Definir una responsabilidad clara para cada documento.
- Evitar duplicidades entre documentos.
- Mantener una organización modular y fácilmente mantenible.
- Reflejar únicamente el estado vigente del proyecto.

Una vez finalizada la revisión de este documento, el trabajo continuará con `DEVELOPMENT_GUIDE.md`, `TESTING.md`, `AGENTS.md`, `README.md` e `INTRODUCTION.md`, siguiendo el orden establecido para la reorganización de la documentación.

La fase de definición conceptual del producto se considera finalizada. El siguiente trabajo consistirá en consolidar la documentación de desarrollo para preparar el repositorio para la colaboración con agentes de desarrollo.

## 7. Próximo objetivo

Consolidar la documentación técnica y operativa del proyecto para facilitar la colaboración entre desarrolladores humanos y agentes de desarrollo.

Las actuaciones previstas son:

- completar DEVELOPMENT_GUIDE.md;
- revisar TESTING.md;
- definir AGENTS.md;
- consolidar README.md;
- realizar una auditoría documental.
- Preparar el repositorio para el trabajo asistido mediante agentes de desarrollo, consolidando la documentación, las convenciones y las instrucciones operativas del proyecto.

La planificación de medio y largo plazo se mantiene de forma independiente en `ROADMAP.md`.

## 8. Lecciones aprendidas

La evolución del proyecto ha permitido consolidar una serie de principios de trabajo que continúan guiando su desarrollo y mantenimiento.

- **Las responsabilidades deben estar claramente separadas.** Cada componente, documento o módulo debe asumir una única responsabilidad bien definida, favoreciendo una arquitectura más comprensible y mantenible.

- **Las abstracciones deben aportar un beneficio real.** La experiencia ha demostrado que incorporar patrones de diseño solo resulta útil cuando resuelven un problema concreto. Cuando dejan de aportar valor, deben simplificarse o eliminarse.

- **Las decisiones arquitectónicas deben validarse mediante la práctica.** Las soluciones adoptadas se consolidan únicamente después de haber sido implementadas, utilizadas y evaluadas en el propio proyecto.

- **La evolución continua es preferible a las grandes reestructuraciones.** Pequeñas refactorizaciones sucesivas permiten mejorar la arquitectura sin comprometer la estabilidad del sistema.

- **Las pruebas automatizadas proporcionan seguridad durante la evolución del código.** Mantener una buena cobertura de pruebas facilita la incorporación de nuevas funcionalidades y reduce el riesgo de introducir regresiones.

- **La documentación debe evolucionar junto con el software.** Cada documento debe mantener una responsabilidad clara, evitar duplicidades y reflejar únicamente la información que le corresponde.

Estos principios forman parte del modo de trabajo del proyecto y constituyen una referencia para evaluar tanto las futuras decisiones de diseño como la incorporación de nuevas funcionalidades.

## Una documentación bien estructurada no solo facilita el trabajo de las personas, sino que también permite que nuevos colaboradores y herramientas automatizadas comprendan el proyecto y contribuyan a él de forma coherente.

Perfecto. Y aquí sí creo que hemos encontrado el primer documento donde la auditoría puede aportar mejoras reales. No son problemas graves, pero sí veo algunos puntos donde la responsabilidad todavía puede afinarse.

Mantendré el formato que acordamos.

---

# Auditoría de Consistencia — Fase 1

## Documento: `PROJECT_STATUS.md`

### 1. Responsabilidad principal

**Pregunta:**

> ¿Cuál es la única responsabilidad de este documento?

**Respuesta**

> **Reflejar el estado actual del proyecto y proporcionar un punto de reanudación fiable para continuar su desarrollo.**

Esta responsabilidad está muy bien definida desde el propio capítulo 1.

El documento responde correctamente a preguntas como:

- ¿En qué estado está el proyecto?
- ¿Qué existe actualmente?
- ¿Qué falta por hacer inmediatamente?
- ¿Desde dónde se retoma el trabajo?

No intenta definir el producto ni la arquitectura.

**Veredicto:** ✅ Responsabilidad correctamente definida.

---

# 2. Contenido fuera de alcance

Aquí es donde aparecen los primeros matices.

## Capítulo 4 — Estado técnico

Aquí veo el único punto dudoso.

Por ejemplo:

> Arquitectura organizada por capas.

> Store propio.

> Reducer puro.

Eso ya pertenece a `ARCHITECTURE.md`.

En `PROJECT_STATUS` bastaría indicar algo como:

> La arquitectura principal se considera estable.

No volver a enumerarla.

Lo mismo ocurre con:

> Modelo basado en entidades y Value Objects.

Eso describe la arquitectura del dominio.

No el estado del proyecto.

---

## Capítulo 8 — Lecciones aprendidas

Aquí tengo una duda interesante.

Las lecciones son muy buenas.

Pero muchas ya son principios permanentes.

Por ejemplo:

> Las responsabilidades deben estar claramente separadas.

Eso ya forma parte de la filosofía del proyecto.

No es exactamente un estado.

Empiezo a pensar que este capítulo podría acabar viviendo mejor en otro documento (por ejemplo, un documento específico de principios o un apéndice del diario), aunque no lo movería todavía sin revisar `PROJECT_JOURNAL.md`.

Lo dejaría marcado para la siguiente fase.

---

**Veredicto:**

🟡 Pequeños ajustes.

No hay contenido incorrecto.

Sí hay contenido que quizá pueda simplificarse.

---

# 3. Dependencias con otros documentos

Aquí el documento funciona bastante bien.

La relación sería:

```text
VISION
        │
        ▼
Propósito

PRODUCT
        │
        ▼
Producto

ARCHITECTURE
        │
        ▼
Diseño técnico

PROJECT_STATUS
        │
        ▼
Situación actual

ROADMAP
        │
        ▼
Próximos pasos estratégicos

PROJECT_JOURNAL
        │
        ▼
Cómo se llegó hasta aquí
```

Creo que esa posición está muy clara.

---

# 4. Solapamientos

Aquí sí detecto algunos.

## Con ARCHITECTURE

Principalmente el capítulo 4.

No es grave.

Simplemente enumera demasiados elementos estructurales.

---

## Con ROADMAP

El capítulo:

> Próximo objetivo

está bien.

Pero si empieza a crecer podría terminar convirtiéndose en un roadmap reducido.

Conviene mantenerlo muy corto.

Un único objetivo inmediato.

No una planificación.

---

## Con PROJECT_JOURNAL

El capítulo:

> Historial reciente

me parece correcto.

Porque resume.

No desarrolla.

La frase final:

> El detalle cronológico...

marca perfectamente el límite.

Eso me gusta mucho.

---

# 5. Coherencia con el sistema documental

Creo que aquí el documento cumple bastante bien su función.

Lo resumiría así:

```text
PROJECT_JOURNAL

Conserva la memoria

        │
        ▼

PROJECT_STATUS

Describe el presente

        │
        ▼

ROADMAP

Orienta el futuro
```

Me parece una separación muy natural.

---

# 6. Observaciones relevantes

Aquí anotaría únicamente tres recomendaciones.

### 1.

Reducir ligeramente el contenido arquitectónico del capítulo 4.

No eliminarlo.

Solo convertirlo en un resumen.

---

### 2.

Vigilar que "Próximo objetivo" no evolucione hacia un roadmap paralelo.

---

### 3.

Reevaluar el capítulo "Lecciones aprendidas" después de revisar `PROJECT_JOURNAL.md`.

Puede que sea su lugar definitivo.

Puede que no.

Todavía es pronto para decidirlo.

---

# 7. Veredicto final

| Aspecto                    | Resultado    |
| -------------------------- | ------------ |
| Responsabilidad única      | ✅           |
| Contenido fuera de alcance | 🟡           |
| Dependencias               | ✅           |
| Solapamientos              | 🟡 Muy leves |
| Coherencia con el sistema  | ✅           |

## Resultado

🟡 **Pequeños ajustes recomendados.**

No requiere reorganización.

Solo afinar algunos límites.

---

# 8. Conclusión

Mientras `PROJECT_JOURNAL.md` conserva el contexto histórico del desarrollo y `ROADMAP.md` orienta la evolución futura del proyecto, **`PROJECT_STATUS.md` proporciona una fotografía del estado actual del sistema y constituye el punto de referencia desde el que puede retomarse el trabajo con seguridad.**

Su responsabilidad dentro del sistema documental está bien definida y complementa de forma natural al resto de documentos. Los ajustes identificados no afectan a su estructura, sino únicamente a la conveniencia de mantener algunos apartados centrados exclusivamente en el estado presente y evitar que evolucionen hacia contenido propio de la arquitectura, el historial o la planificación futura.

---

## Una reflexión

Este es el **primer documento** de toda la auditoría al que no le doy un "🟢 Sin cambios", y me parece una buena señal.

No significa que esté peor que los anteriores. Significa que es un **documento vivo**, y por eso es más fácil que acumule información que pertenece a otros ámbitos. Precisamente esa es su naturaleza.

Lo importante es que los ajustes que detectamos son de **delimitación**, no de **reorganización**. La responsabilidad del documento sigue siendo la correcta; solo conviene vigilar que, con el paso del tiempo, no se convierta en un resumen de la arquitectura o en un pequeño roadmap paralelo. Esa es una advertencia de mantenimiento más que una crítica al documento actual.

---

## ¿se debería corregir ya?

Sí, yo lo corregiría **ahora**, pero con un criterio muy concreto.

No aprovecharía para reescribir el documento. Solo corregiría aquello que ya hemos identificado con bastante seguridad durante la auditoría.

Hay una regla que suelo seguir en este tipo de revisiones:

> **Si una observación depende de documentos que todavía no hemos auditado, la dejo pendiente. Si la observación es independiente, la corrijo inmediatamente.**

Aplicándolo a `PROJECT_STATUS.md`:

### ✅ Corregiría ahora

**1. El capítulo "Estado técnico"**

Reduciría el contenido arquitectónico.

En lugar de volver a enumerar:

- Store propio.
- Reducer.
- Value Objects.
- Arquitectura por capas.

Dejaría algo más orientado al estado actual, por ejemplo:

- La arquitectura principal se considera estable.
- La organización por responsabilidades se encuentra consolidada.
- La base técnica permite continuar la evolución funcional sin cambios estructurales significativos.

Los detalles seguirían estando en `ARCHITECTURE.md`.

---

**2. Simplificar ligeramente el capítulo "Próximo objetivo"**

Mantendría un único objetivo inmediato.

El resto pertenece al `ROADMAP`.

---

### ⏳ No tocaría todavía

**El capítulo "Lecciones aprendidas".**

No porque esté mal, sino porque aún no hemos revisado `PROJECT_JOURNAL.md`.

Puede ocurrir una de estas dos cosas:

- descubrimos que el diario ya contiene esas lecciones → entonces habría duplicidad;
- descubrimos que el diario es puramente cronológico → entonces `PROJECT_STATUS` quizá sea el mejor sitio para mantenerlas.

Ahora mismo todavía no tenemos esa información.

Por tanto, moverlo sería precipitado.

---

## Mi propuesta de actuación

Yo dejaría esta tabla de decisiones:

| Apartado                   | Acción                                       |
| -------------------------- | -------------------------------------------- |
| Resumen ejecutivo          | ✅ Sin cambios                               |
| Entorno                    | ✅ Sin cambios                               |
| Funcionalidad implementada | ✅ Sin cambios                               |
| Estado técnico             | ✏️ Simplificar ahora                         |
| Historial reciente         | ✅ Sin cambios                               |
| Punto de reanudación       | ✅ Sin cambios                               |
| Próximo objetivo           | ✏️ Simplificar ahora                         |
| Lecciones aprendidas       | ⏳ Revisar tras auditar `PROJECT_JOURNAL.md` |

---

## Por qué me parece el mejor momento

La auditoría de consistencia no debería limitarse a detectar problemas; también debería resolver inmediatamente aquellos cuya solución ya está clara.

En cambio, cuando una decisión depende de otros documentos que aún no hemos revisado, es preferible esperar para no introducir cambios que luego haya que deshacer.

Creo que ese equilibrio nos permitirá avanzar con seguridad: **corregimos lo evidente, posponemos lo que todavía necesita contexto**. Es una forma de mantener la auditoría ágil sin perder coherencia global.

---

## cambios realizados. PROJECT_JOURNAL

Perfecto. Además, creo que ahora tenemos el contexto adecuado para decidir definitivamente qué hacer con **"Lecciones aprendidas"** de `PROJECT_STATUS.md`, porque ya podremos compararlo con el documento que, en principio, debería conservar la memoria del proyecto.

Para mantener la auditoría homogénea, aplicaremos exactamente la misma estructura:

1. **Responsabilidad principal**
2. **Contenido fuera de alcance**
3. **Dependencias con otros documentos**
4. **Solapamientos**
5. **Coherencia con el sistema documental**
6. **Observaciones relevantes**
7. **Veredicto final**
8. **Conclusión**

Lo único que necesito ahora es el contenido actual de **`PROJECT_JOURNAL.md`**.

Pégalo aquí (aunque sea largo) y lo auditaremos con el mismo nivel de detalle que `AGENTS.md` y `PROJECT_STATUS.md`. En este documento prestaré especial atención a tres aspectos:

- **Que sea realmente un diario histórico** y no un documento de estado.
- **Que no se convierta en un segundo roadmap**, incorporando planificación futura.
- **Que las "Lecciones aprendidas" de `PROJECT_STATUS.md` tengan o no cabida aquí**, para decidir definitivamente si ese apartado debe permanecer donde está o trasladarse.

Creo que esta comparación nos permitirá cerrar esa duda con fundamento y seguir consolidando la separación entre **pasado (`PROJECT_JOURNAL`)**, **presente (`PROJECT_STATUS`)** y **futuro (`ROADMAP`)**.

---

# PROJECT JOURNAL

1. Objetivo

2. Cómo se organiza el diario

3. Evolución del proyecto

   3.1 Reorganización del sistema documental

## 1. Objetivo

Este documento recoge la evolución del proyecto desde sus primeras versiones hasta su estado actual.

Su finalidad es conservar la memoria técnica del desarrollo, registrando los principales hitos, las decisiones adoptadas, las refactorizaciones realizadas y las lecciones aprendidas durante cada etapa.

A diferencia de `PROJECT_STATUS.md`, que describe el estado presente del proyecto, este documento documenta el camino recorrido para alcanzarlo. Tampoco sustituye a los documentos de arquitectura o a los ADR, sino que proporciona el contexto histórico que explica cómo y por qué el proyecto ha evolucionado.

Cada entrada del diario representa un hito significativo en la evolución del sistema y constituye una referencia para comprender las decisiones tomadas en cada momento del desarrollo.

En conjunto, este documento actúa como el registro histórico del proyecto y complementa el resto de la documentación técnica preservando el conocimiento adquirido a lo largo de su evolución.

## 2. Cómo se organiza el diario

El diario se organiza en torno a hitos significativos de la evolución del proyecto y no como una sucesión de registros diarios.

Cada entrada documenta un cambio relevante en la arquitectura, la organización del código, las funcionalidades implementadas o la documentación técnica, independientemente del número de sesiones necesarias para completarlo.

Con este enfoque, el diario recoge únicamente aquellos acontecimientos que han contribuido de forma significativa a la evolución del proyecto, evitando registrar cambios menores o tareas rutinarias.

Cada hito sigue una estructura homogénea que facilita su consulta y permite comprender tanto el resultado obtenido como el proceso que condujo hasta él.

De forma general, cada entrada incluye:

- Contexto u objetivo del trabajo realizado.
- Cambios más relevantes incorporados al proyecto.
- Principales decisiones adoptadas.
- Dificultades encontradas y forma de resolverlas.
- Lecciones aprendidas durante el desarrollo.

Esta organización permite utilizar el diario como un registro histórico del proyecto, preservando el conocimiento adquirido durante su evolución y facilitando la comprensión de las decisiones tomadas en cada etapa.

## 3. Registro de hitos

> ### 3.1 Reorganización del sistema documental

#### Contexto

A medida que el proyecto fue creciendo, la documentación dejó de ser un conjunto de documentos independientes para convertirse en una parte esencial del propio proceso de desarrollo.

La incorporación progresiva de nuevos contenidos puso de manifiesto la necesidad de reorganizar la documentación, asignando a cada documento una responsabilidad claramente definida y evitando duplicidades entre ellos.

#### Objetivo

El objetivo de esta reorganización fue construir un sistema documental coherente, escalable y alineado con la arquitectura del proyecto, de forma que cada documento respondiera a una pregunta concreta y complementara al resto sin solapamientos.

#### Cambios principales

Durante esta etapa se llevó a cabo una reorganización completa de la documentación:

- Se redefinió la estructura de directorios bajo `docs/`.
- Se creó `VISION.md` como documento que establece el propósito del proyecto.
- Se reorganizó la documentación del proyecto en torno a `PRODUCT.md`, `PROJECT_STATUS.md`, `PROJECT_JOURNAL.md` y `ROADMAP.md`.
- La documentación de arquitectura pasó a agruparse bajo `docs/02-architecture/`, incorporando la evolución de la arquitectura y los ADR.
- La documentación de desarrollo se consolidó en `docs/03-development/`.
- Se eliminaron documentos cuya responsabilidad quedó absorbida por la nueva estructura, como `decisions-log.md`.

#### Resultado

Como resultado de esta reorganización, la documentación pasó a constituir un sistema estructurado en el que cada documento posee un propósito específico y mantiene una relación coherente con el resto.

Este cambio permitió que la documentación evolucionara siguiendo los mismos principios de diseño que la propia arquitectura del software: responsabilidad única, alta cohesión, bajo acoplamiento y evolución incremental.

#### Lecciones aprendidas

## La documentación de un proyecto no debe limitarse a describir el software. Cuando evoluciona de forma coherente con el propio sistema, se convierte en una herramienta para preservar conocimiento, facilitar la toma de decisiones y acompañar el crecimiento del proyecto a largo plazo.

Perfecto. Y, sinceramente, este documento me gusta mucho. Creo que es uno de los que mejor refleja la filosofía que hemos ido construyendo. Aun así, vamos a analizarlo con el mismo rigor que los anteriores.

---

# Auditoría de Consistencia — Fase 1

## Documento: `PROJECT_JOURNAL.md`

### 1. Responsabilidad principal

**Pregunta:**

> ¿Cuál es la única responsabilidad de este documento?

**Respuesta**

> **Conservar la memoria histórica del proyecto, registrando los hitos significativos de su evolución y el contexto en el que se produjeron.**

El documento responde claramente a preguntas como:

- ¿Qué cambios importantes se realizaron?
- ¿Por qué se tomaron determinadas decisiones?
- ¿Cómo evolucionó el proyecto hasta llegar a su estado actual?

No intenta describir el estado presente ni planificar el futuro.

**Veredicto:** ✅ Responsabilidad claramente definida.

---

# 2. Contenido fuera de alcance

Aquí buscaba principalmente tres posibles problemas.

## Respecto a `PROJECT_STATUS.md`

No describe el estado actual.

Cuando habla del resultado de un hito lo hace como consecuencia de ese momento histórico.

Eso es correcto.

---

## Respecto a `ROADMAP.md`

No aparecen tareas futuras.

Ni planificación.

Ni objetivos pendientes.

Eso también es correcto.

---

## Respecto a `ARCHITECTURE.md`

Describe decisiones arquitectónicas únicamente desde una perspectiva histórica.

No intenta sustituir el documento de arquitectura.

Ese matiz me parece muy importante.

---

## Respecto a `ADR`

Aquí también queda bien separado.

El diario explica:

> qué ocurrió.

Un ADR explica:

> por qué se tomó una decisión concreta.

No son lo mismo.

---

**Veredicto:** ✅ Sin contenido fuera de alcance.

---

# 3. Dependencias con otros documentos

Creo que aquí el documento ocupa exactamente el lugar que debería.

```text
VISION
        │
        ▼
Propósito

PRODUCT
        │
        ▼
Producto

ARCHITECTURE
        │
        ▼
Diseño

PROJECT_JOURNAL
        │
        ▼
Cómo evolucionó todo ello

PROJECT_STATUS
        │
        ▼
Dónde estamos hoy

ROADMAP
        │
        ▼
Hacia dónde vamos
```

Me parece una posición muy natural dentro del sistema documental.

---

# 4. Solapamientos

Sinceramente, aquí esperaba encontrar alguno con `PROJECT_STATUS`.

Pero no.

Después de leer ambos documentos creo que la separación está bastante conseguida.

Solo vigilaría una cosa en el futuro.

Las entradas del diario no deberían convertirse en resúmenes técnicos de la arquitectura.

Deben seguir siendo:

- contexto;
- decisiones;
- dificultades;
- resultado;
- aprendizaje.

Mientras mantengan esa estructura, el límite seguirá siendo muy claro.

---

# 5. Coherencia con el sistema documental

Creo que este documento aporta una dimensión que ningún otro tiene.

Los demás describen:

- principios;
- producto;
- arquitectura;
- proceso.

Este conserva la **historia**.

Y esa historia explica cómo se llegó hasta el estado actual.

Por eso creo que ocupa una posición muy importante.

```text
Pasado
        │
        ▼
PROJECT_JOURNAL

Presente
        │
        ▼
PROJECT_STATUS

Futuro
        │
        ▼
ROADMAP
```

En mi opinión, esa tríada ha quedado especialmente bien definida.

---

# 6. Observaciones relevantes

Aquí sí aparece una consecuencia interesante para la auditoría.

## Las "Lecciones aprendidas"

Después de leer este documento, **cambio mi opinión respecto a la duda que teníamos en `PROJECT_STATUS.md`.**

Aquí las lecciones aprendidas forman parte de **cada hito histórico**.

Tienen contexto.

Explican por qué se aprendió algo.

En `PROJECT_STATUS.md`, en cambio, aparecen como principios generales desvinculados de un momento concreto.

Desde el punto de vista documental, creo que eso hace que funcionen mejor aquí.

Mi recomendación sería:

- mantener las **lecciones específicas** dentro de cada hito de `PROJECT_JOURNAL.md`;
- evitar un capítulo independiente de "Lecciones aprendidas" en `PROJECT_STATUS.md`, salvo que recoja únicamente principios vigentes y sea muy breve.

Es el primer cambio de criterio que me provoca la auditoría, y me parece una conclusión valiosa.

---

# 7. Veredicto final

| Aspecto                    | Resultado |
| -------------------------- | --------- |
| Responsabilidad única      | ✅        |
| Contenido fuera de alcance | ✅        |
| Dependencias               | ✅        |
| Solapamientos              | ✅        |
| Coherencia con el sistema  | ✅        |

## Resultado

🟢 **Sin cambios.**

---

# 8. Conclusión

Mientras `PROJECT_STATUS.md` ofrece una fotografía del estado actual del proyecto y `ROADMAP.md` orienta su evolución futura, **`PROJECT_JOURNAL.md` preserva la memoria de cómo el proyecto ha llegado hasta ese punto.**

Su función dentro del sistema documental no consiste en describir el software ni en planificar su evolución, sino en conservar el contexto histórico de las decisiones, los hitos y el conocimiento adquirido durante el desarrollo. Esa perspectiva histórica complementa de forma natural al resto de la documentación y convierte al diario en una pieza clave para comprender la evolución del proyecto a largo plazo.

---

## Una reflexión

Creo que este documento confirma algo que empezó a intuirse con `PROJECT_STATUS.md`: los llamados **documentos vivos** también están bien separados, pero su frontera es **temporal** en lugar de **temática**.

- `PROJECT_JOURNAL.md` → **pasado**.
- `PROJECT_STATUS.md` → **presente**.
- `ROADMAP.md` → **futuro**.

Me parece una separación muy elegante porque utiliza una dimensión diferente a la del resto del sistema documental. No distingue entre arquitectura, producto o desarrollo; distingue entre **memoria**, **estado** y **dirección**. En mi opinión, esa decisión aporta mucha claridad y hace que estos tres documentos formen un conjunto tan coherente como el que ya habíamos identificado en la documentación técnica.

---

## (archivo que no permite grabarse)

Perfecto. Con `PROJECT_JOURNAL.md` hemos cerrado la tríada **pasado–presente–futuro** conceptualmente. Ahora le toca a `ROADMAP.md`, que es el tercer vértice.

Después de leerlo, mi impresión general es muy buena: creo que es uno de los documentos más sólidos del sistema documental.

---

# Auditoría de Consistencia — Fase 1

## Documento: `ROADMAP.md`

### 1. Responsabilidad principal

**Pregunta:**

> ¿Cuál es la única responsabilidad de este documento?

**Respuesta**

> **Definir las líneas estratégicas de evolución del proyecto a medio y largo plazo.**

Responde claramente a preguntas como:

- ¿Hacia dónde puede evolucionar el proyecto?
- ¿Qué áreas estratégicas se consideran relevantes?
- ¿Qué criterios orientarán las futuras incorporaciones?

No responde a:

- cuál es el estado actual (`PROJECT_STATUS.md`);
- cómo ha evolucionado el proyecto (`PROJECT_JOURNAL.md`);
- cómo está construido (`ARCHITECTURE.md`).

**Veredicto:** ✅ Responsabilidad claramente definida.

---

# 2. Contenido fuera de alcance

Aquí buscaba principalmente tres riesgos.

## Respecto a `PROJECT_STATUS.md`

No aparecen tareas inmediatas.

No existe una lista de trabajo pendiente.

Siempre habla en términos de **líneas estratégicas**.

Eso es exactamente lo que debe hacer.

---

## Respecto a `PROJECT_JOURNAL.md`

No explica cómo se llegó hasta aquí.

No registra decisiones históricas.

Eso también está bien separado.

---

## Respecto a `ARCHITECTURE.md`

Las posibles evoluciones arquitectónicas aparecen como **direcciones futuras**, no como descripción de la arquitectura actual.

Por ejemplo:

- API REST o GraphQL.
- Operaciones asíncronas.
- Observabilidad.

Todo ello se presenta como evolución posible, no como estado vigente.

---

**Veredicto:** ✅ Sin contenido fuera de alcance.

---

# 3. Dependencias con otros documentos

Aquí la relación me parece especialmente clara.

```text
VISION
        │
        ▼
Propósito

PRODUCT
        │
        ▼
Producto

PROJECT_STATUS
        │
        ▼
Dónde estamos

ROADMAP
        │
        ▼
Hacia dónde podemos evolucionar
```

Además, el documento mantiene una buena relación con `ARCHITECTURE.md`, ya que todas las líneas de evolución parten de la arquitectura existente sin redefinirla.

**Veredicto:** ✅ Dependencias correctamente delimitadas.

---

# 4. Solapamientos

Aquí prácticamente no encuentro ninguno.

Solo anotaría una observación menor.

El apartado **"Ideas en evaluación"** está muy bien delimitado porque deja claro que:

- no forman parte del roadmap inmediato;
- no constituyen compromisos;
- simplemente se conservan para futuras evaluaciones.

Eso evita que se confunda con una lista de tareas pendientes.

---

# 5. Coherencia con el sistema documental

Creo que aquí termina de consolidarse la estructura temporal que empezó con los documentos anteriores.

```text
PROJECT_JOURNAL
        │
        ▼
Pasado

PROJECT_STATUS
        │
        ▼
Presente

ROADMAP
        │
        ▼
Futuro
```

En mi opinión, esta separación es una de las fortalezas del sistema documental.

Cada documento responde a una dimensión temporal distinta sin invadir a los demás.

---

# 6. Observaciones relevantes

Aquí solo haría una observación.

## Los principios de evolución

El capítulo 2 me parece muy bueno, pero vigilaría que no evolucione hacia un segundo `VISION.md`.

Actualmente mantiene el equilibrio porque esos principios están orientados a **la evolución del proyecto**, no a **su filosofía**. Mientras conserve ese enfoque, no veo ningún problema.

No propondría ningún cambio ahora.

Simplemente lo tendría presente en futuras revisiones.

---

# 7. Veredicto final

| Aspecto                    | Resultado |
| -------------------------- | --------- |
| Responsabilidad única      | ✅        |
| Contenido fuera de alcance | ✅        |
| Dependencias               | ✅        |
| Solapamientos              | ✅        |
| Coherencia con el sistema  | ✅        |

## Resultado

🟢 **Sin cambios.**

---

# 8. Conclusión

Mientras `PROJECT_JOURNAL.md` conserva la memoria del proyecto y `PROJECT_STATUS.md` describe su situación actual, **`ROADMAP.md` orienta su evolución futura mediante líneas estratégicas que sirven como referencia para la toma de decisiones, sin convertirse en un plan cerrado de implementación.**

Su función dentro del sistema documental está claramente delimitada: no planifica el trabajo inmediato ni documenta el estado presente, sino que proporciona un marco de evolución coherente con la visión, el producto y la arquitectura del proyecto.

---

# Una reflexión

Creo que aquí podemos extraer una conclusión muy positiva.

Con la revisión de:

- `PROJECT_JOURNAL.md`
- `PROJECT_STATUS.md`
- `ROADMAP.md`

queda consolidada una separación que no siempre se encuentra en otros proyectos:

```text
Pasado
        │
        ▼
PROJECT_JOURNAL

Presente
        │
        ▼
PROJECT_STATUS

Futuro
        │
        ▼
ROADMAP
```

Es una organización sencilla, intuitiva y fácil de mantener. Además, evita uno de los problemas más habituales en la documentación técnica: mezclar en un mismo documento el historial del proyecto, el estado actual y la planificación futura.

En mi opinión, esa claridad temporal complementa muy bien la separación temática que ya habíamos validado entre **visión**, **producto**, **arquitectura**, **desarrollo**, **testing** y **agentes**. El resultado es un sistema documental en el que cada documento tiene un lugar y una responsabilidad claramente identificables.

---

1. Propósito

2. Evolución del dominio

3. Evolución del modelo conceptual

4. Transparencia editorial

5. Modelo de publicación

6. Modelo de monetización

7. Otras ideas

# DESIGN_JOURNAL.md

# 1. Propósito

Este documento recoge ideas, hipótesis y reflexiones relacionadas con la evolución del diseño del producto y de la arquitectura del proyecto.

Su finalidad es preservar aquellas propuestas que, aun no formando parte de la documentación oficial, puedan resultar valiosas para orientar futuras decisiones de diseño.

El contenido de este documento no constituye una especificación del producto ni un compromiso de implementación. Cada idea deberá evaluarse cuando el contexto del proyecto lo justifique y, en caso de ser adoptada, pasará a incorporarse al documento correspondiente (`PRODUCT.md`, `ARCHITECTURE.md` u otro que resulte adecuado).

De este modo, el diario de diseño permite conservar el conocimiento generado durante la evolución del proyecto sin comprometer la estabilidad ni la coherencia de la documentación principal.

Ninguna idea permanecerá indefinidamente en este documento. Cuando una propuesta sea adoptada, deberá trasladarse al documento oficial correspondiente y eliminarse del diario de diseño, dejando constancia únicamente de que la idea fue incorporada.

---

# 2. Evolución del dominio

Este apartado recoge posibles evoluciones del modelo de dominio que podrían incorporarse en el futuro si las necesidades del producto lo justifican.

Las propuestas aquí descritas no forman parte del modelo actual y deberán evaluarse antes de su incorporación.

## 2.1 Evolución del concepto de participante

Actualmente el producto identifica la figura del autor como uno de sus conceptos fundamentales.

En el futuro podría resultar conveniente generalizar este concepto mediante una entidad más amplia denominada **Participante**, capaz de representar los distintos roles que intervienen en el ciclo de vida de un documento.

```text
Participante
│
├── Autor
├── Coautor
├── Revisor
├── Editor
└── Colaborador
```

Este enfoque permitiría ampliar el modelo colaborativo sin alterar el significado del concepto de Documento ni del resto del dominio.

---

# 3. Evolución del modelo conceptual

Este apartado recoge posibles ampliaciones del modelo conceptual del producto.

## 3.1 Organización de la biblioteca

La organización conceptual de la biblioteca podría evolucionar hacia una estructura más rica que permita integrar distintos elementos dentro de un mismo espacio de trabajo.

```text
Biblioteca
│
├── Colecciones
│   └── Documentos
│
├── Autores
│
├── Publicaciones
│
└── Configuración
```

Esta organización permitiría ampliar progresivamente las capacidades del producto manteniendo un modelo coherente.

## 3.2 Evolución del concepto de usuario

Durante la revisión de `PRODUCT.md` surgió una posible evolución del modo de describir el público objetivo.

En lugar de centrar el producto en perfiles profesionales concretos, podría formularse desde una perspectiva basada en necesidades comunes:

> "El producto está dirigido a cualquier persona cuya actividad implique gestionar conocimiento."

Este enfoque permite integrar de forma natural perfiles muy diversos.

Por ejemplo:

- Un estudiante puede convertirse en autor.
- Un autor puede crear una comunidad.
- Una organización puede utilizar la plataforma para gestionar documentación interna.

Todos ellos comparten un mismo modelo conceptual basado en la gestión del conocimiento.

---

# 4. Transparencia editorial

La transparencia editorial podría evolucionar hacia un modelo más estructurado basado en una ficha editorial asociada a cada documento.

No se trataría de un formulario obligatorio, sino de un conjunto de metadatos opcionales que permitieran comprender mejor el proceso de creación y evolución de una obra.

Posibles elementos de la ficha editorial:

- Autoría.
- Participación.
- Historial de revisiones.
- Metodología utilizada.
- Uso declarado de herramientas de asistencia.
- Licencia.
- Fecha de publicación.
- Referencias.

Esta información reforzaría la transparencia del producto sin imponer una forma única de documentar el proceso editorial.

---

# 5. Modelo de publicación

El modelo de publicación podría evolucionar hacia una estructura compuesta por varias dimensiones independientes en lugar de un único estado.

Por ejemplo:

- **Visibilidad:** privada, compartida o pública.
- **Acceso:** libre, restringido o mediante suscripción.
- **Licencia:** todos los derechos reservados, licencias abiertas u otras modalidades.
- **Monetización:** gratuita, de pago, por membresía u otras formas que el producto incorpore.
- **Estado editorial:** borrador, publicada, archivada u otros estados futuros.

Este enfoque permitiría describir una publicación mediante la combinación de distintas decisiones independientes, proporcionando un modelo más flexible y expresivo.

---

# 6. Modelo de monetización

La monetización también podría evolucionar hacia un modelo basado en distintos niveles de acceso al conocimiento.

Un posible enfoque sería:

```text
Documento
│
├── Acceso libre
├── Registro requerido
├── Suscripción
├── Compra individual
└── Licencia específica
```

Este modelo permitiría desacoplar la monetización de la propia publicación y facilitar la incorporación de nuevas modalidades económicas sin modificar el resto del modelo conceptual.

---

# 7. Otras ideas

Este apartado recoge propuestas que todavía no encajan claramente en ninguna categoría anterior.

A medida que el diario evolucione, estas ideas podrán reorganizarse o trasladarse a nuevos apartados cuando adquieran suficiente entidad.

## El objetivo de esta sección es evitar la pérdida de ideas surgidas durante el diseño, manteniendo el diario como un espacio de incubación de futuras evoluciones del proyecto.

Perfecto. Este documento es, probablemente, el más singular de todo el sistema documental. No describe el proyecto, ni su estado, ni su evolución, sino **las ideas que todavía no forman parte del proyecto**. Precisamente por eso su responsabilidad debe estar muy bien delimitada.

Después de leerlo, este es mi análisis.

---

# Auditoría de Consistencia — Fase 1

## Documento: `DESIGN_JOURNAL.md`

### 1. Responsabilidad principal

**Pregunta:**

> ¿Cuál es la única responsabilidad de este documento?

**Respuesta**

> **Conservar ideas, hipótesis y propuestas de diseño que todavía no forman parte del proyecto y que podrán evaluarse en el futuro.**

Responde a preguntas como:

- ¿Qué ideas han surgido durante el diseño?
- ¿Qué hipótesis podrían explorarse más adelante?
- ¿Qué propuestas merecen conservarse aunque todavía no se adopten?

No responde a:

- cuál es el producto actual (`PRODUCT.md`);
- cuál es la arquitectura vigente (`ARCHITECTURE.md`);
- cuál es la planificación estratégica (`ROADMAP.md`).

**Veredicto:** ✅ Responsabilidad claramente definida.

---

# 2. Contenido fuera de alcance

Aquí buscaba sobre todo un riesgo: que las ideas ya parecieran decisiones.

Y creo que el documento lo evita muy bien.

## Respecto a `PRODUCT.md`

En varias ocasiones insiste en que:

- son hipótesis;
- no forman parte del modelo actual;
- deberán evaluarse.

Eso mantiene muy clara la frontera.

---

## Respecto a `ROADMAP.md`

También queda bien separado.

El Roadmap dice:

> "queremos evolucionar hacia..."

El Design Journal dice:

> "hemos pensado en esta posibilidad."

Es una diferencia muy importante.

---

## Respecto a `ARCHITECTURE.md`

Las propuestas arquitectónicas aparecen únicamente como ideas.

No describen el estado real.

Eso también es correcto.

---

**Veredicto:** ✅ Sin contenido fuera de alcance.

---

# 3. Dependencias con otros documentos

Creo que aquí aparece una relación muy interesante.

```text
DESIGN_JOURNAL

Ideas

        │
        ▼

Evaluación

        │
        ▼

ROADMAP

        │
        ▼

Implementación

        │
        ▼

PRODUCT
ARCHITECTURE
```

Es decir,

el diario de diseño está incluso **antes del Roadmap**.

No planifica.

Almacena posibilidades.

Eso me parece una muy buena decisión.

---

# 4. Solapamientos

Aquí solo encuentro un punto para reflexionar.

## Apartados 4, 5 y 6

- Transparencia editorial.
- Modelo de publicación.
- Modelo de monetización.

Son ideas muy desarrolladas.

No creo que sea un problema hoy.

Pero habrá que vigilar que no acaben convirtiéndose en un segundo `PRODUCT.md`.

Mientras sigan formuladas como hipótesis, están bien.

Si un día empiezan a describir el producto, deberán migrar.

Precisamente el propio documento ya establece esa regla.

Eso me parece muy elegante.

---

# 5. Coherencia con el sistema documental

Creo que este documento aporta una dimensión completamente distinta.

Hasta ahora teníamos:

```text
PROJECT_JOURNAL

Pasado

↓

PROJECT_STATUS

Presente

↓

ROADMAP

Futuro previsto
```

Y ahora aparece una capa anterior.

```text
Ideas

↓

DESIGN_JOURNAL

↓

ROADMAP

↓

PROJECT_STATUS

↓

PROJECT_JOURNAL
```

Es decir,

el diario de diseño no habla del futuro.

Habla de **posibilidades**.

Y eso me parece una distinción muy valiosa.

---

# 6. Observaciones relevantes

Aquí sí haría una observación.

## Orden temporal

Creo que la relación conceptual es realmente esta:

```text
Idea

↓

DESIGN_JOURNAL

↓

Evaluación

↓

ROADMAP

↓

Implementación

↓

PROJECT_STATUS

↓

Historial

↓

PROJECT_JOURNAL
```

Quizá merezca la pena reflejar esta relación en `INTRODUCTION.md` en una futura revisión.

No porque sea necesario.

Sino porque explica muy bien cómo madura una idea dentro del proyecto.

No lo cambiaría ahora.

Solo lo anotaría como posible mejora del sistema documental.

---

# 7. Veredicto final

| Aspecto                    | Resultado |
| -------------------------- | --------- |
| Responsabilidad única      | ✅        |
| Contenido fuera de alcance | ✅        |
| Dependencias               | ✅        |
| Solapamientos              | ✅        |
| Coherencia con el sistema  | ✅        |

## Resultado

🟢 **Sin cambios.**

---

# 8. Conclusión

Mientras `ROADMAP.md` define las líneas estratégicas de evolución del proyecto, **`DESIGN_JOURNAL.md` conserva ideas e hipótesis que todavía no han sido evaluadas ni incorporadas a la planificación oficial.**

Su función dentro del sistema documental consiste en proporcionar un espacio de exploración controlado, donde las propuestas pueden madurar antes de convertirse, si procede, en parte del producto, de la arquitectura o de la estrategia de evolución. De este modo, el diario de diseño preserva el conocimiento generado durante el proceso creativo sin comprometer la estabilidad de la documentación oficial.

---

# Conclusión de la Fase 1

Con esta revisión queda completada la auditoría de responsabilidades de todos los documentos principales.

El resultado global me parece muy positivo:

| Documento         | Resultado                          |
| ----------------- | ---------------------------------- |
| README            | 🟢                                 |
| INTRODUCTION      | 🟢                                 |
| VISION            | 🟢                                 |
| PRODUCT           | 🟢                                 |
| ARCHITECTURE      | 🟢                                 |
| DEVELOPMENT_GUIDE | 🟢                                 |
| TESTING           | 🟢                                 |
| AGENTS            | 🟢                                 |
| PROJECT_STATUS    | 🟡 (ajustes menores ya realizados) |
| PROJECT_JOURNAL   | 🟢                                 |
| ROADMAP           | 🟢                                 |
| DESIGN_JOURNAL    | 🟢                                 |

En conjunto, la auditoría confirma que el sistema documental está **correctamente modularizado**. Cada documento mantiene una responsabilidad claramente definida y, salvo los pequeños ajustes ya aplicados a `PROJECT_STATUS.md`, no se han detectado invasiones significativas de responsabilidades entre ellos.

Creo que esta es una conclusión importante: la arquitectura documental ha alcanzado un grado de madurez comparable al de una buena arquitectura de software. Los documentos no solo están bien escritos; **están bien organizados entre sí**, que era precisamente el objetivo de esta primera fase de la auditoría.

---

## pasemos entonces a la siguiente fase

Perfecto. Además, creo que la siguiente fase es, probablemente, la más interesante de toda la auditoría.

La **Fase 1** respondía a una pregunta:

> **¿Cada documento tiene una responsabilidad única?**

Y la respuesta ha sido prácticamente un sí rotundo.

Ahora cambia completamente el enfoque.

---

# Fase 2 — Auditoría de duplicidades

Ya no vamos a mirar documentos.

Vamos a mirar **conceptos**.

La pregunta ahora será:

> **¿Hay información que aparezca desarrollada en más de un documento?**

Es una auditoría transversal.

---

## ¿Qué vamos a revisar?

Yo lo haría por grandes temas.

No por documentos.

## 1. Filosofía del proyecto

Buscar si aparece repetida en:

- VISION
- PRODUCT
- ROADMAP
- DEVELOPMENT_GUIDE

---

## 2. Arquitectura

Buscar si aparece desarrollada en:

- ARCHITECTURE
- DEVELOPMENT_GUIDE
- PROJECT_STATUS
- ROADMAP

---

## 3. Producto

Buscar duplicidades entre:

- PRODUCT
- ROADMAP
- DESIGN_JOURNAL

---

## 4. Desarrollo

Buscar duplicidades entre:

- DEVELOPMENT_GUIDE
- AGENTS
- TESTING

---

## 5. Testing

Buscar:

- DEVELOPMENT_GUIDE
- TESTING
- AGENTS

---

## 6. Estado del proyecto

Buscar:

- PROJECT_STATUS
- PROJECT_JOURNAL
- ROADMAP

---

## 7. Documentación

Buscar:

- README
- INTRODUCTION
- DEVELOPMENT_GUIDE
- AGENTS

---

# ¿Cómo haremos la auditoría?

Creo que debemos cambiar también el formato.

En vez de auditar un documento, auditaremos un concepto.

Por ejemplo:

---

# Auditoría de duplicidades

## Concepto: Arquitectura

### Documento principal

`ARCHITECTURE.md`

---

### Documentos relacionados

- DEVELOPMENT_GUIDE
- PROJECT_STATUS
- ROADMAP

---

### Resultado

✅ Sin duplicidades.

o bien

🟡 Existe una explicación que convendría sustituir por una referencia.

---

### Observaciones

...

---

### Conclusión

...

---

Así toda la auditoría será homogénea.

---

# Mi propuesta de orden

Creo que revisaría exactamente estos siete conceptos:

1. Filosofía
2. Producto
3. Arquitectura
4. Desarrollo
5. Testing
6. Estado del proyecto
7. Sistema documental

Creo que con esos siete cubrimos prácticamente todo el conocimiento del proyecto.

---

# Una pequeña reflexión

Creo que esta fase será incluso más exigente que la anterior.

En la Fase 1 comprobábamos si cada documento tenía una responsabilidad clara.

Ahora vamos a comprobar algo más difícil:

> **Que un mismo concepto tenga un único "hogar" dentro del sistema documental.**

Eso significa que, si encontramos que una explicación aparece desarrollada en dos documentos distintos, uno de ellos tendrá que quedarse únicamente con una referencia al documento principal.

En mi opinión, **esa es la diferencia entre tener una colección de buenos documentos y tener un verdadero sistema documental**.

Y, sinceramente, después del trabajo que llevamos hecho, creo que estamos en el momento perfecto para dar ese paso.

---

## entonces empecemos con Filosofía

Perfecto. Y creo que es una muy buena elección para empezar la Fase 2, porque la **filosofía** es probablemente el concepto que más fácilmente puede acabar disperso por toda la documentación.

Voy a cambiar ligeramente el enfoque respecto a la Fase 1.

Ya no voy a preguntarme:

> "¿Este documento habla de filosofía?"

Ahora me preguntaré:

> **"¿Dónde debería vivir la filosofía y dónde solo debería mencionarse?"**

Ese matiz es muy importante.

---

# Auditoría de Duplicidades — Fase 2

## Concepto: Filosofía del proyecto

### Documento principal

**`VISION.md`**

En mi opinión, aquí debe desarrollarse toda la filosofía del proyecto.

Es el lugar donde se responde a preguntas como:

- ¿Por qué existe el proyecto?
- ¿Qué principios inspiran su evolución?
- ¿Qué valores permanecen estables aunque cambie la implementación?

Es, por tanto, el **hogar natural** de este concepto.

**Veredicto:** ✅ Documento principal correctamente identificado.

---

# Documentos relacionados

## `README.md`

Aquí la filosofía únicamente debe aparecer de forma implícita o muy resumida, para presentar el proyecto.

No debe desarrollarse.

**Resultado:** ✅ Correcto.

---

## `INTRODUCTION.md`

No debe explicar la filosofía.

Solo indicar que existe `VISION.md`.

**Resultado:** ✅ Correcto.

---

## `PRODUCT.md`

Aquí debe reflejarse la filosofía **solo cuando influye en el diseño del producto**.

Por ejemplo:

- simplicidad;
- orientación al conocimiento;
- evolución incremental.

Pero no debe volver a desarrollar los principios.

Hasta donde hemos revisado, mantiene esa separación.

**Resultado:** ✅ Correcto.

---

## `ARCHITECTURE.md`

Puede reflejar consecuencias técnicas de la filosofía.

Por ejemplo:

- separación de responsabilidades;
- modularidad;
- independencia del dominio.

Pero no justificar por qué esos principios existen.

Eso pertenece a `VISION.md`.

**Resultado:** ✅ Correcto.

---

## `DEVELOPMENT_GUIDE.md`

Aquí aparecen principios de trabajo.

No filosofía del proyecto.

Y esa diferencia es importante.

Ejemplo:

```
La simplicidad debe preservarse.
```

Eso es una convención de desarrollo.

No una declaración de propósito.

Creo que esa separación quedó bastante bien durante la auditoría.

**Resultado:** ✅ Correcto.

---

## `TESTING.md`

No desarrolla filosofía.

Solo estrategia de pruebas.

**Resultado:** ✅ Correcto.

---

## `AGENTS.md`

No desarrolla filosofía.

Obliga al agente a respetarla.

Eso es exactamente lo que debe hacer.

**Resultado:** ✅ Correcto.

---

## `ROADMAP.md`

Aquí encontré el único punto que merece atención.

El capítulo:

> **Principios de evolución**

No me parece una duplicidad hoy.

Pero sí conviene vigilar que esos principios sigan siendo:

- principios para evolucionar;

y no pasen a convertirse en:

- principios del proyecto.

Mientras mantengan ese enfoque, la separación es correcta.

No propondría cambios.

Simplemente lo anotaría como criterio de mantenimiento.

**Resultado:** 🟡 Vigilar su evolución.

---

## `PROJECT_STATUS.md`

No desarrolla filosofía.

Solo recoge el estado presente.

Correcto.

---

## `PROJECT_JOURNAL.md`

Puede contener filosofía **cuando forma parte de una lección aprendida de un hito concreto**.

Eso no constituye una duplicidad.

Es contexto histórico.

Correcto.

---

## `DESIGN_JOURNAL.md`

Puede contener reflexiones de diseño.

No filosofía del proyecto.

Hasta ahora mantiene muy bien esa frontera.

---

# Resultado global

| Documento         | Estado                       |
| ----------------- | ---------------------------- |
| VISION            | ✅ Documento principal       |
| README            | ✅ Referencia                |
| INTRODUCTION      | ✅ Referencia                |
| PRODUCT           | ✅ Consecuencias funcionales |
| ARCHITECTURE      | ✅ Consecuencias técnicas    |
| DEVELOPMENT_GUIDE | ✅ Principios de trabajo     |
| TESTING           | ✅ Sin duplicidad            |
| AGENTS            | ✅ Respeta la filosofía      |
| PROJECT_STATUS    | ✅ Sin duplicidad            |
| PROJECT_JOURNAL   | ✅ Contexto histórico        |
| ROADMAP           | 🟡 Vigilar evolución         |
| DESIGN_JOURNAL    | ✅ Reflexiones de diseño     |

---

# Veredicto

🟢 **No se detectan duplicidades significativas.**

La filosofía tiene un **único hogar** (`VISION.md`).

El resto de documentos únicamente:

- la aplican;
- hacen referencia a ella;
- o muestran sus consecuencias.

Eso es exactamente lo que buscábamos.

---

# Conclusión

La auditoría confirma que la **filosofía del proyecto está correctamente centralizada en `VISION.md`**. Los demás documentos no reproducen sus principios, sino que los concretan en ámbitos específicos: el producto los materializa funcionalmente, la arquitectura los traduce a decisiones técnicas, el proceso de desarrollo los convierte en prácticas de trabajo y los agentes reciben la instrucción de respetarlos.

Esta distribución evita duplicidades y mantiene una relación clara entre **principios**, **aplicación** y **ejecución**, reforzando la coherencia del sistema documental.

---

## Una reflexión

Creo que aquí aparece un patrón que probablemente se repetirá en el resto de la Fase 2.

No vamos a buscar que un concepto aparezca **una sola vez**. Eso sería imposible y poco útil.

Lo que vamos a buscar es que **solo exista un lugar donde ese concepto se desarrolle en profundidad**.

El resto de documentos pueden mencionarlo, aplicarlo o derivar consecuencias de él, pero no volver a explicarlo.

En mi opinión, ese criterio es mucho más útil que intentar eliminar cualquier repetición, porque permite que los documentos sigan siendo comprensibles por sí mismos sin perder la modularidad del sistema documental.

---

##  concepto Producto

Perfecto. Este concepto es especialmente importante porque **`PRODUCT.md` es el centro del sistema funcional**. La auditoría consiste en comprobar que todo lo relacionado con el producto se desarrolla allí y que el resto de documentos únicamente lo referencian, lo contextualizan o lo proyectan.

---

# Auditoría de Duplicidades — Fase 2

## Concepto: Producto

### Documento principal

**`PRODUCT.md`**

En mi opinión, aquí debe desarrollarse todo lo relacionado con el producto:

- modelo conceptual;
- conceptos fundamentales;
- capacidades funcionales;
- relaciones entre conceptos;
- límites del producto;
- evolución funcional consolidada.

Es el documento que responde a la pregunta:

> **¿Qué producto estamos construyendo?**

**Veredicto:** ✅ Documento principal correctamente identificado.

---

# Documentos relacionados

## `README.md`

Debe limitarse a presentar el proyecto y explicar brevemente qué es el producto para un lector que llega por primera vez.

No debería describir el modelo conceptual ni las capacidades en detalle.

**Resultado:** ✅ Correcto.

---

## `INTRODUCTION.md`

No desarrolla el producto.

Únicamente indica que `PRODUCT.md` es el documento responsable.

**Resultado:** ✅ Correcto.

---

## `VISION.md`

Aquí aparece el propósito del proyecto.

No la definición del producto.

La relación correcta es:

```text
VISION
    │
    ▼
¿Por qué?

PRODUCT
    │
    ▼
¿Qué?
```

No detecto duplicidad conceptual.

**Resultado:** ✅ Correcto.

---

## `ARCHITECTURE.md`

La arquitectura implementa el producto, pero no lo redefine.

Puede utilizar conceptos del producto cuando sea necesario explicar responsabilidades técnicas, pero no debe volver a describir sus capacidades funcionales.

La separación quedó muy clara durante la Fase 1.

**Resultado:** ✅ Correcto.

---

## `DEVELOPMENT_GUIDE.md`

No describe el producto.

Describe cómo desarrollarlo.

Puede utilizar ejemplos basados en el dominio, pero no redefinirlo.

**Resultado:** ✅ Correcto.

---

## `TESTING.md`

Habla de validar comportamientos del producto, pero no explica el producto en sí.

Las referencias funcionales aparecen únicamente como ejemplos para ilustrar la estrategia de pruebas.

**Resultado:** ✅ Correcto.

---

## `AGENTS.md`

No desarrolla el producto.

Simplemente indica al agente que debe respetar la documentación funcional.

**Resultado:** ✅ Correcto.

---

## `PROJECT_STATUS.md`

Aquí sí aparece un apartado de **"Funcionalidad implementada"**.

En mi opinión, **no constituye una duplicidad**.

La diferencia es importante:

- `PRODUCT.md` define **qué es el producto**.
- `PROJECT_STATUS.md` informa de **qué parte de ese producto está implementada actualmente**.

Uno es una especificación funcional; el otro es una fotografía del estado del desarrollo.

**Resultado:** ✅ Correcto.

---

## `PROJECT_JOURNAL.md`

Puede explicar cómo evolucionó el producto en determinados hitos.

No redefine el modelo conceptual.

Mientras conserve el enfoque histórico, la separación es correcta.

**Resultado:** ✅ Correcto.

---

## `ROADMAP.md`

Aquí aparece la evolución futura del producto.

No el producto actual.

La diferencia es muy clara:

```text
PRODUCT
        │
        ▼
Modelo vigente

ROADMAP
        │
        ▼
Posibles líneas de evolución
```

No detecto duplicidad.

**Resultado:** ✅ Correcto.

---

## `DESIGN_JOURNAL.md`

Este era el documento que más interés tenía revisar.

Aquí aparecen muchas ideas relacionadas con el producto:

- participantes;
- biblioteca;
- publicación;
- monetización;
- usuario.

Sin embargo, todas ellas están formuladas explícitamente como:

- hipótesis;
- posibilidades;
- ideas en evaluación.

Además, el propio capítulo 1 establece una regla muy importante:

> Cuando una idea sea adoptada, deberá trasladarse al documento oficial correspondiente y eliminarse del diario de diseño.

Esa regla evita la duplicidad estructural y convierte al diario en un espacio de incubación, no en una segunda especificación del producto.

**Resultado:** ✅ Correcto.

---

# Resultado global

| Documento         | Estado                         |
| ----------------- | ------------------------------ |
| PRODUCT           | ✅ Documento principal         |
| README            | ✅ Presentación                |
| INTRODUCTION      | ✅ Referencia                  |
| VISION            | ✅ Contexto y propósito        |
| ARCHITECTURE      | ✅ Implementación técnica      |
| DEVELOPMENT_GUIDE | ✅ Desarrollo                  |
| TESTING           | ✅ Validación                  |
| AGENTS            | ✅ Respeto de la documentación |
| PROJECT_STATUS    | ✅ Estado de implementación    |
| PROJECT_JOURNAL   | ✅ Evolución histórica         |
| ROADMAP           | ✅ Evolución prevista          |
| DESIGN_JOURNAL    | ✅ Ideas en evaluación         |

---

# Veredicto

🟢 **No se detectan duplicidades significativas.**

El producto tiene un **único hogar** (`PRODUCT.md`).

Los demás documentos únicamente:

- lo presentan;
- lo implementan;
- informan sobre su estado;
- narran su evolución;
- proyectan su crecimiento;
- o conservan ideas todavía no incorporadas.

---

# Conclusión

La auditoría confirma que **`PRODUCT.md` constituye la referencia única para la definición funcional del producto**. El resto de la documentación mantiene una relación complementaria con él: la visión justifica su existencia, la arquitectura explica cómo se materializa, el estado informa de su grado de implementación, el diario conserva su evolución histórica, el roadmap orienta su crecimiento y el diario de diseño preserva propuestas que aún no forman parte del modelo oficial.

Esta distribución mantiene claramente separadas la **especificación del producto**, su **implementación**, su **estado**, su **historia**, su **evolución prevista** y sus **ideas futuras**, evitando que un mismo concepto se desarrolle en varios documentos.

---

## Una reflexión

Este análisis confirma un patrón que empieza a repetirse en la Fase 2: los conceptos principales del proyecto no están aislados, sino **centralizados**.

Es decir, cada concepto tiene un documento que actúa como su **fuente de verdad** (_single source of truth_ documental), mientras que el resto de documentos lo utilizan desde su propia perspectiva sin volver a desarrollarlo.

Me parece especialmente interesante porque esa organización refleja uno de los principios que también aplicáis al código del proyecto: **una única responsabilidad y una única fuente autorizada para cada conocimiento**. La arquitectura del software y la arquitectura documental terminan compartiendo el mismo criterio de diseño, lo que aporta una gran coherencia al conjunto.

---

## ahora revisión desde el punto de vista arquitectónico

# Auditoría de Duplicidades — Fase 2

## Concepto: Arquitectura

### Documento principal

**`ARCHITECTURE.md`**

Aquí debe desarrollarse toda la información relacionada con:

- organización técnica del sistema;
- capas y responsabilidades;
- dependencias entre componentes;
- flujos de lectura y escritura;
- estructura del código cuando materializa decisiones arquitectónicas;
- decisiones arquitectónicas vigentes;
- estado actual de la arquitectura.

Es el documento que responde a:

> **¿Cómo está organizado técnicamente el sistema y por qué adopta esa estructura?**

**Veredicto:** ✅ Documento principal correctamente identificado.

---

# Documentos relacionados

## `README.md`

El README antiguo desarrollaba la arquitectura mediante diagramas, principios, Store y Reducer. Ese contenido fue eliminado durante su revisión.

Actualmente solo presenta el proyecto y remite a la documentación especializada.

**Resultado:** ✅ Sin duplicidad.

---

## `INTRODUCTION.md`

No describe la arquitectura. Únicamente identifica `ARCHITECTURE.md` como el documento responsable y lo incorpora a los recorridos recomendados.

**Resultado:** ✅ Sin duplicidad.

---

## `VISION.md`

Puede establecer principios generales como:

- simplicidad;
- coherencia;
- sostenibilidad;
- capacidad de evolución.

Pero no define capas, componentes ni flujos técnicos.

La relación correcta es:

```text
VISION
    │
    ▼
Principios generales

ARCHITECTURE
    │
    ▼
Materialización técnica
```

**Resultado:** ✅ Correcto.

---

## `PRODUCT.md`

Describe conceptos y capacidades funcionales, pero no decide cómo deben implementarse.

La arquitectura toma el producto como referencia y proporciona una estructura técnica capaz de materializarlo.

```text
PRODUCT
    │
    ▼
Qué debe representar o permitir el sistema

ARCHITECTURE
    │
    ▼
Cómo se organiza técnicamente para hacerlo
```

**Resultado:** ✅ Sin duplicidad.

---

## `DEVELOPMENT_GUIDE.md`

Este era uno de los puntos con mayor riesgo de solapamiento.

La separación actual es correcta:

- `ARCHITECTURE.md` describe la organización técnica.
- `DEVELOPMENT_GUIDE.md` explica cómo trabajar respetando esa organización.

La guía puede recordar que deben conservarse las capas y sus responsabilidades, pero no necesita volver a explicarlas.

```text
ARCHITECTURE
    │
    ▼
Define las responsabilidades

DEVELOPMENT_GUIDE
    │
    ▼
Establece cómo trabajar respetándolas
```

**Resultado:** ✅ Correcto.

---

## `TESTING.md`

La estrategia de testing refleja la arquitectura mediante niveles de pruebas asociados a distintas responsabilidades.

Esto no constituye una duplicidad porque `TESTING.md` no vuelve a explicar cómo está construido el sistema. Solo deriva de esa estructura la forma adecuada de verificarlo.

```text
ARCHITECTURE
    │
    ▼
Distribuye responsabilidades

TESTING
    │
    ▼
Distribuye su validación
```

**Resultado:** ✅ Correcto.

---

## `AGENTS.md`

No describe la arquitectura. Indica que el agente debe:

- consultarla;
- respetarla;
- evitar modificarla sin una decisión explícita;
- revisar el impacto de los cambios.

Por tanto, transforma la arquitectura en una restricción operativa sin reproducir su contenido.

**Resultado:** ✅ Sin duplicidad.

---

## `PROJECT_STATUS.md`

Aquí se detectó anteriormente una repetición parcial de componentes arquitectónicos:

- Store propio;
- Reducer;
- capas;
- entidades y Value Objects.

Ese apartado ya se simplificó para expresar únicamente el **estado de estabilidad de la arquitectura**, remitiendo a `ARCHITECTURE.md` para su descripción.

La separación correcta queda así:

- `ARCHITECTURE.md` → cómo está organizada.
- `PROJECT_STATUS.md` → en qué grado se encuentra consolidada.

**Resultado:** ✅ Corregido.

---

## `PROJECT_JOURNAL.md`

Puede registrar hitos arquitectónicos cuando explica cómo evolucionó el proyecto:

- incorporación de capas;
- introducción del Store;
- creación del dominio;
- refactorizaciones relevantes.

Esto no duplica la arquitectura vigente porque su perspectiva es histórica.

```text
PROJECT_JOURNAL
    │
    ▼
Cómo evolucionó la arquitectura

ARCHITECTURE
    │
    ▼
Cómo está organizada actualmente
```

Las entradas deben conservar el contexto, las decisiones y las lecciones del momento, sin convertirse en una segunda descripción completa del sistema.

**Resultado:** ✅ Correcto.

---

## `ROADMAP.md`

Incluye una línea estratégica dedicada a la arquitectura y posibles evoluciones como:

- backend remoto;
- asincronía;
- observabilidad;
- nuevas fuentes de persistencia.

La diferencia respecto a `ARCHITECTURE.md` está correctamente definida:

- `ARCHITECTURE.md` documenta decisiones vigentes.
- `ROADMAP.md` recoge direcciones futuras compatibles con ellas.

Debe seguir evitando presentar esas posibilidades como componentes ya existentes.

**Resultado:** ✅ Correcto.

---

## `DESIGN_JOURNAL.md`

Puede conservar hipótesis arquitectónicas aún no adoptadas.

Una propuesta debe permanecer allí mientras sea una idea en evaluación. Cuando se acepte y se implemente, deberá:

1. incorporarse a `ARCHITECTURE.md`;
2. documentarse mediante un ADR cuando la relevancia de la decisión lo justifique;
3. eliminarse del diario como propuesta pendiente.

**Resultado:** ✅ Correcto.

---

## `ADR/`

Los ADR constituyen el principal complemento de `ARCHITECTURE.md`.

La separación debería ser:

- `ARCHITECTURE.md` → explica la arquitectura vigente.
- `ADR/` → conserva la justificación detallada de decisiones concretas.

Por ejemplo, `ARCHITECTURE.md` puede indicar que la persistencia se realiza mediante suscripciones. El ADR correspondiente explica:

- qué problema existía;
- qué alternativas se consideraron;
- por qué se eligió esa solución;
- qué consecuencias produjo.

No hay duplicidad cuando uno describe el resultado y el otro preserva su razonamiento.

**Resultado:** ✅ Complementariedad correcta.

---

# Resultado global

| Documento              | Relación con la arquitectura       |
| ---------------------- | ---------------------------------- |
| `ARCHITECTURE.md`      | ✅ Fuente principal                |
| `README.md`            | ✅ Remisión                        |
| `INTRODUCTION.md`      | ✅ Navegación                      |
| `VISION.md`            | ✅ Principios generales            |
| `PRODUCT.md`           | ✅ Necesidades funcionales         |
| `DEVELOPMENT_GUIDE.md` | ✅ Forma de trabajar sobre ella    |
| `TESTING.md`           | ✅ Validación de responsabilidades |
| `AGENTS.md`            | ✅ Obligación de respetarla        |
| `PROJECT_STATUS.md`    | ✅ Estado de consolidación         |
| `PROJECT_JOURNAL.md`   | ✅ Evolución histórica             |
| `ROADMAP.md`           | ✅ Evolución futura                |
| `DESIGN_JOURNAL.md`    | ✅ Hipótesis pendientes            |
| `ADR/`                 | ✅ Justificación de decisiones     |

# Veredicto

🟢 **No se detectan duplicidades arquitectónicas significativas después de la simplificación realizada en `PROJECT_STATUS.md`.**

La arquitectura tiene un único documento de referencia: **`ARCHITECTURE.md`**.

El resto de documentos la aborda desde perspectivas distintas y legítimas:

- la visión aporta principios;
- el producto plantea necesidades;
- la guía de desarrollo establece cómo respetarla;
- el testing verifica sus responsabilidades;
- los agentes reciben límites operativos;
- el estado informa de su estabilidad;
- el diario registra su evolución;
- el roadmap anticipa posibles cambios;
- los ADR conservan la justificación.

# Conclusión

La auditoría confirma que **`ARCHITECTURE.md` funciona como fuente de verdad de la organización técnica vigente**. Ningún otro documento necesita volver a describir sus capas, componentes o flujos en profundidad.

La distinción más importante queda así:

```text
Producto
    │
    ▼
Plantea las necesidades

Arquitectura
    │
    ▼
Organiza la solución vigente

ADR
    │
    ▼
Justifican decisiones concretas

Development Guide
    │
    ▼
Explica cómo trabajar sobre ella

Testing
    │
    ▼
Verifica sus responsabilidades

Roadmap y Design Journal
    │
    ▼
Exploran su posible evolución
```

Esta distribución mantiene separadas la **descripción**, la **justificación**, la **aplicación**, la **validación**, la **historia** y la **evolución futura** de la arquitectura. Esa separación es sólida y coherente con los principios de responsabilidad única aplicados tanto al software como a la documentación.

---

## Desarrollo

Perfecto. Este es otro de los conceptos centrales del sistema documental. De hecho, creo que aquí fue donde más trabajo hicimos durante la reorganización, porque había bastante solapamiento entre `ARCHITECTURE.md`, `DEVELOPMENT_GUIDE.md` y `AGENTS.md`.

Después de la Fase 1, este es mi análisis.

---

# Auditoría de Duplicidades — Fase 2

## Concepto: Desarrollo

### Documento principal

**`DEVELOPMENT_GUIDE.md`**

Aquí debe desarrollarse todo lo relacionado con:

- proceso de desarrollo;
- flujo de trabajo;
- convenciones del proyecto;
- organización del trabajo;
- criterios para introducir cambios;
- validaciones generales del desarrollo;
- mantenimiento del código y de la documentación.

Es el documento que responde a:

> **¿Cómo debe desarrollarse este proyecto?**

**Veredicto:** ✅ Documento principal correctamente identificado.

---

# Documentos relacionados

## `README.md`

No explica el proceso de desarrollo.

Únicamente indica cómo empezar con el proyecto y dónde encontrar la documentación.

**Resultado:** ✅ Sin duplicidad.

---

## `INTRODUCTION.md`

No desarrolla el proceso de trabajo.

Únicamente identifica `DEVELOPMENT_GUIDE.md` como el documento responsable.

**Resultado:** ✅ Sin duplicidad.

---

## `VISION.md`

Puede influir en la forma de desarrollar mediante principios generales (simplicidad, evolución incremental, responsabilidad única), pero no establece el proceso de desarrollo.

La relación correcta es:

```text
VISION
    │
    ▼
Principios

DEVELOPMENT_GUIDE
    │
    ▼
Prácticas de desarrollo
```

Los principios inspiran el proceso, pero no lo sustituyen.

**Resultado:** ✅ Correcto.

---

## `PRODUCT.md`

No explica cómo desarrollar el proyecto.

Describe únicamente el producto.

Puede servir como referencia funcional para el desarrollo, pero no contiene convenciones ni procesos.

**Resultado:** ✅ Sin duplicidad.

---

## `ARCHITECTURE.md`

Este era uno de los puntos más delicados.

La separación actual es clara:

- `ARCHITECTURE.md` explica **cómo está organizado** el sistema.
- `DEVELOPMENT_GUIDE.md` explica **cómo trabajar** sobre ese sistema.

```text
ARCHITECTURE
    │
    ▼
Organización técnica

DEVELOPMENT_GUIDE
    │
    ▼
Proceso de desarrollo
```

La guía puede hacer referencia a la arquitectura, pero no necesita volver a describirla.

**Resultado:** ✅ Correcto.

---

## `TESTING.md`

Aquí la relación también está bien definida.

- `DEVELOPMENT_GUIDE.md` establece que el desarrollo debe incluir validación.
- `TESTING.md` desarrolla la estrategia de pruebas.

```text
DEVELOPMENT_GUIDE
    │
    ▼
El desarrollo requiere validar

TESTING
    │
    ▼
Cómo realizar esa validación
```

No hay duplicidad.

Hay complementariedad.

**Resultado:** ✅ Correcto.

---

## `AGENTS.md`

Este era probablemente el documento con mayor riesgo de solapamiento.

La separación conseguida durante la auditoría me parece muy sólida.

- `DEVELOPMENT_GUIDE.md` define el proceso general.
- `AGENTS.md` adapta ese proceso al trabajo de un agente.

```text
DEVELOPMENT_GUIDE
    │
    ▼
Normas generales

AGENTS
    │
    ▼
Cómo debe aplicarlas un agente
```

Es decir,

AGENTS no redefine el proceso.

Lo operacionaliza.

**Resultado:** ✅ Correcto.

---

## `PROJECT_STATUS.md`

Solo contiene el punto de reanudación y el objetivo inmediato.

No explica el proceso de desarrollo.

Eso evita que se convierta en una segunda guía.

**Resultado:** ✅ Correcto.

---

## `PROJECT_JOURNAL.md`

Puede explicar cómo evolucionó el proceso de desarrollo en determinados hitos.

Por ejemplo:

- reorganización documental;
- cambios en el flujo de trabajo;
- incorporación de nuevas prácticas.

Mientras mantenga el enfoque histórico, no existe duplicidad.

**Resultado:** ✅ Correcto.

---

## `ROADMAP.md`

Puede plantear mejoras futuras del proceso de desarrollo.

Por ejemplo:

- nuevas automatizaciones;
- nuevas herramientas;
- nuevos mecanismos de colaboración.

Eso no duplica la guía de desarrollo, porque habla del futuro.

**Resultado:** ✅ Correcto.

---

## `DESIGN_JOURNAL.md`

Puede contener ideas relacionadas con el proceso de desarrollo, siempre que se formulen como hipótesis.

Actualmente está centrado en el diseño del producto y no invade este ámbito.

**Resultado:** ✅ Sin duplicidad.

---

# Resultado global

| Documento              | Relación con el desarrollo               |
| ---------------------- | ---------------------------------------- |
| `DEVELOPMENT_GUIDE.md` | ✅ Fuente principal                      |
| `README.md`            | ✅ Inicio del proyecto                   |
| `INTRODUCTION.md`      | ✅ Navegación                            |
| `VISION.md`            | ✅ Principios que inspiran el desarrollo |
| `PRODUCT.md`           | ✅ Referencia funcional                  |
| `ARCHITECTURE.md`      | ✅ Contexto técnico                      |
| `TESTING.md`           | ✅ Validación del desarrollo             |
| `AGENTS.md`            | ✅ Aplicación operativa del proceso      |
| `PROJECT_STATUS.md`    | ✅ Punto de reanudación                  |
| `PROJECT_JOURNAL.md`   | ✅ Evolución histórica                   |
| `ROADMAP.md`           | ✅ Evolución futura                      |
| `DESIGN_JOURNAL.md`    | ✅ Sin incidencia                        |

---

# Veredicto

🟢 **No se detectan duplicidades significativas.**

El proceso de desarrollo tiene un único documento de referencia: **`DEVELOPMENT_GUIDE.md`**.

Los demás documentos únicamente:

- lo contextualizan;
- lo aplican;
- informan sobre su evolución;
- o proyectan posibles mejoras futuras.

---

# Conclusión

La auditoría confirma que **`DEVELOPMENT_GUIDE.md` actúa como la referencia única para el proceso de desarrollo del proyecto**. Ningún otro documento reproduce sus convenciones o flujo de trabajo; cada uno se relaciona con él desde una perspectiva específica.

La separación más importante es la que existe entre:

```text
ARCHITECTURE
    │
    ▼
Cómo está organizado el sistema

DEVELOPMENT_GUIDE
    │
    ▼
Cómo desarrollar sobre esa arquitectura

TESTING
    │
    ▼
Cómo validar el desarrollo

AGENTS
    │
    ▼
Cómo aplicar ese proceso mediante agentes
```

Esta distribución evita que un mismo concepto se explique varias veces y mantiene una cadena lógica muy clara: **la arquitectura proporciona el contexto, la guía define el proceso, el testing protege la calidad y los agentes aplican operativamente esas reglas**.

---

## Una reflexión

Este análisis refuerza una idea que empieza a repetirse en la Fase 2: los documentos técnicos forman una **cadena de especialización** más que una colección de documentos independientes. Cada uno toma el resultado del anterior y añade una nueva responsabilidad sin reemplazarlo.

Esa estructura hace que el sistema documental sea fácil de mantener: cuando cambia el proceso de desarrollo, sabes que el lugar donde debe documentarse es `DEVELOPMENT_GUIDE.md`; el resto de documentos solo necesitarán ajustar sus referencias o la forma en que aplican ese proceso, no volver a describirlo.

---

## Testing

# Auditoría de Duplicidades — Fase 2

## Concepto: Testing

### Documento principal

**`TESTING.md`**

Aquí debe desarrollarse todo lo relacionado con:

- principios de testing;
- niveles y responsabilidades de prueba;
- organización física de los tests;
- convenciones para escribirlos;
- criterios para añadirlos o modificarlos;
- ejecución e interpretación de resultados;
- cobertura;
- evolución de la estrategia.

Es el documento que responde a:

> **¿Cómo se diseña, organiza, ejecuta y mantiene la estrategia de pruebas del proyecto?**

**Veredicto:** ✅ Documento principal correctamente identificado.

---

# Documentos relacionados

## `README.md`

Incluye únicamente los comandos mínimos de validación necesarios para empezar a trabajar con el repositorio.

No explica la estrategia de pruebas ni sus niveles.

Eso resulta apropiado porque el README debe permitir una puesta en marcha rápida y remitir a la documentación especializada.

**Resultado:** ✅ Sin duplicidad.

---

## `INTRODUCTION.md`

No desarrolla el testing.

Se limita a identificar `TESTING.md` como el documento responsable y a incluirlo en los recorridos de lectura relacionados con el desarrollo y la arquitectura.

**Resultado:** ✅ Sin duplicidad.

---

## `VISION.md`

Puede considerar la calidad, el aprendizaje y la evolución segura como principios generales del proyecto, pero no define cómo deben diseñarse las pruebas.

La relación correcta es:

```text
VISION
    │
    ▼
La calidad y el aprendizaje
forman parte del proyecto

TESTING
    │
    ▼
Estrategia concreta para
proteger el comportamiento
```

**Resultado:** ✅ Correcto.

---

## `PRODUCT.md`

Describe los conceptos y comportamientos funcionales que deberán protegerse, pero no establece cómo probarlos.

El producto aporta el objeto de validación; `TESTING.md` define la estrategia adecuada para comprobarlo.

```text
PRODUCT
    │
    ▼
Qué comportamientos existen

TESTING
    │
    ▼
Cómo protegerlos mediante pruebas
```

**Resultado:** ✅ Sin duplicidad.

---

## `ARCHITECTURE.md`

Este documento declara que las pruebas forman parte de la arquitectura y que el sistema debe ser verificable.

También describe las responsabilidades técnicas sobre las que se construye la estrategia de testing.

Sin embargo, no desarrolla:

- niveles de pruebas;
- convenciones;
- ubicación de archivos;
- cobertura;
- criterios de mantenimiento.

La relación está bien delimitada:

```text
ARCHITECTURE
    │
    ▼
Distribuye responsabilidades

TESTING
    │
    ▼
Distribuye la validación
de esas responsabilidades
```

**Resultado:** ✅ Correcto.

---

## `DEVELOPMENT_GUIDE.md`

Este era el principal riesgo de duplicidad.

La separación actual es adecuada:

- `DEVELOPMENT_GUIDE.md` establece que los cambios deben validarse.
- `TESTING.md` explica cómo se diseña y utiliza la estrategia de pruebas.

La guía de desarrollo puede incluir:

- comandos básicos;
- obligación de validar;
- criterio general de finalización.

Pero no debe repetir:

- niveles de testing;
- organización de tests;
- convenciones;
- interpretación de la cobertura.

```text
DEVELOPMENT_GUIDE
    │
    ▼
Cuándo y por qué validar

TESTING
    │
    ▼
Cómo organizar y aplicar
las pruebas automatizadas
```

**Resultado:** ✅ Correcto.

---

## `AGENTS.md`

No enseña al agente a diseñar pruebas.

Le exige consultar y aplicar la estrategia establecida en `TESTING.md`, ejecutar las validaciones correspondientes e informar cuando alguna comprobación no pueda realizarse.

Por tanto:

- `TESTING.md` define la estrategia.
- `AGENTS.md` convierte su aplicación en una obligación operativa.

**Resultado:** ✅ Sin duplicidad.

---

## `PROJECT_STATUS.md`

Puede informar sobre el estado actual de la suite, las herramientas empleadas o el número de pruebas superadas.

No debería explicar la estrategia ni enumerar sus convenciones.

La diferencia es:

```text
TESTING
    │
    ▼
Cómo se prueba el proyecto

PROJECT_STATUS
    │
    ▼
En qué estado se encuentra
actualmente su validación
```

Tras la simplificación realizada en `PROJECT_STATUS.md`, esta frontera queda correctamente delimitada.

**Resultado:** ✅ Correcto.

---

## `PROJECT_JOURNAL.md`

Puede registrar hitos relacionados con el testing, como:

- introducción de Vitest;
- incorporación de React Testing Library;
- creación de nuevas capas de pruebas;
- corrección de regresiones;
- lecciones aprendidas durante una refactorización.

Esto no duplica la estrategia vigente porque conserva el contexto histórico de su evolución.

```text
PROJECT_JOURNAL
    │
    ▼
Cómo evolucionó el testing

TESTING
    │
    ▼
Cómo se organiza actualmente
```

**Resultado:** ✅ Correcto.

---

## `ROADMAP.md`

Puede incluir líneas futuras como:

- ampliar el alcance de las pruebas;
- incorporar nuevos tipos de testing;
- añadir análisis estático;
- automatizar nuevas validaciones.

No debe presentar esas posibilidades como parte de la estrategia actual hasta que sean adoptadas.

La diferencia queda clara:

- `TESTING.md` → estrategia vigente.
- `ROADMAP.md` → posibles mejoras futuras.

**Resultado:** ✅ Correcto.

---

## `DESIGN_JOURNAL.md`

Actualmente no desarrolla propuestas relacionadas con testing.

Podría conservar alguna hipótesis futura sobre nuevas formas de validación, siempre que no se presente como una decisión adoptada.

Si una propuesta fuera aceptada, debería trasladarse a `TESTING.md` y, cuando afectara al proceso general, también reflejarse en `DEVELOPMENT_GUIDE.md`.

**Resultado:** ✅ Sin duplicidad.

---

## Tests dentro y fuera de `src/tests/`

La convivencia entre:

- pruebas centralizadas en `src/tests/`;
- pruebas colocadas junto al código, como `undo.test.ts`, `redo.test.ts` o `toggleAll.test.ts`;

está documentada exclusivamente en `TESTING.md`, dentro de la organización de los tests.

Esto es correcto porque se trata de una convención específica de testing, no de una explicación general de la estructura del repositorio.

`ARCHITECTURE.md` puede mostrar que existen pruebas en distintas ubicaciones si representa la estructura actual, pero no debe volver a justificar los criterios empleados para ubicarlas.

**Resultado:** ✅ Fuente correctamente centralizada.

---

# Resultado global

| Documento              | Relación con el testing                 |
| ---------------------- | --------------------------------------- |
| `TESTING.md`           | ✅ Fuente principal                     |
| `README.md`            | ✅ Comandos mínimos                     |
| `INTRODUCTION.md`      | ✅ Navegación                           |
| `VISION.md`            | ✅ Principios generales de calidad      |
| `PRODUCT.md`           | ✅ Comportamientos que deben protegerse |
| `ARCHITECTURE.md`      | ✅ Responsabilidades verificables       |
| `DEVELOPMENT_GUIDE.md` | ✅ Validación dentro del proceso        |
| `AGENTS.md`            | ✅ Aplicación obligatoria               |
| `PROJECT_STATUS.md`    | ✅ Estado actual de la validación       |
| `PROJECT_JOURNAL.md`   | ✅ Evolución histórica                  |
| `ROADMAP.md`           | ✅ Mejoras futuras                      |
| `DESIGN_JOURNAL.md`    | ✅ Sin incidencia                       |

# Veredicto

🟢 **No se detectan duplicidades significativas.**

La estrategia de testing tiene una única fuente de verdad: **`TESTING.md`**.

El resto de los documentos:

- define qué debe protegerse;
- exige que se valide;
- informa del estado actual;
- conserva la evolución histórica;
- o plantea posibles mejoras futuras.

Ninguno vuelve a desarrollar la estrategia completa.

# Conclusión

La auditoría confirma que **`TESTING.md` centraliza correctamente el conocimiento relacionado con el diseño, la organización y la evolución de las pruebas automatizadas**.

La separación principal queda así:

```text
PRODUCT
    │
    ▼
Define los comportamientos

ARCHITECTURE
    │
    ▼
Distribuye las responsabilidades

DEVELOPMENT_GUIDE
    │
    ▼
Integra la validación
en el proceso de trabajo

TESTING
    │
    ▼
Define cómo verificar
esas responsabilidades

AGENTS
    │
    ▼
Obliga a aplicar
la estrategia

PROJECT_STATUS
    │
    ▼
Informa del estado actual

PROJECT_JOURNAL
    │
    ▼
Conserva su evolución

ROADMAP
    │
    ▼
Proyecta futuras mejoras
```

Esta distribución evita confundir el **proceso general de validación** con la **estrategia específica de pruebas**. Además, mantiene correctamente centralizadas en `TESTING.md` decisiones concretas como la convivencia entre tests centralizados y tests colocados junto al código.

---

## Estado del proyecto

# Auditoría de Duplicidades — Fase 2

## Concepto: Estado del proyecto

### Documento principal

**`PROJECT_STATUS.md`**

Aquí debe desarrollarse toda la información relacionada con:

- situación actual del proyecto;
- funcionalidades implementadas;
- estado técnico vigente;
- entorno de desarrollo utilizado;
- punto de reanudación;
- próximo objetivo inmediato;
- validaciones actuales relevantes.

Es el documento que responde a:

> **¿En qué punto se encuentra el proyecto ahora y desde dónde debe retomarse el trabajo?**

**Veredicto:** ✅ Documento principal correctamente identificado.

---

# Documentos relacionados

## `README.md`

Incluye un apartado breve de estado para informar al lector de que el proyecto se encuentra en desarrollo activo y explicar, de forma general, el papel de la implementación actual.

No debe contener:

- funcionalidades detalladas;
- resultados técnicos;
- tareas pendientes;
- punto de reanudación.

La separación correcta es:

```text
README
    │
    ▼
Presentación breve del estado

PROJECT_STATUS
    │
    ▼
Descripción completa del estado actual
```

**Resultado:** ✅ Sin duplicidad.

---

## `INTRODUCTION.md`

No informa sobre el estado del proyecto.

Únicamente identifica `PROJECT_STATUS.md` como el documento que debe consultarse para conocerlo y lo incorpora a los recorridos recomendados.

**Resultado:** ✅ Sin duplicidad.

---

## `VISION.md`

Define el propósito estable y la dirección general del proyecto.

No debería incluir información sobre:

- qué documentos están terminados;
- qué funcionalidades existen;
- qué tarea se está realizando;
- qué queda pendiente.

```text
VISION
    │
    ▼
Propósito estable

PROJECT_STATUS
    │
    ▼
Situación temporal
```

**Resultado:** ✅ Correcto.

---

## `PRODUCT.md`

Describe el producto y sus capacidades desde una perspectiva funcional, pero no informa de cuáles están implementadas actualmente.

La diferencia principal es:

```text
PRODUCT
    │
    ▼
Qué producto se pretende construir

PROJECT_STATUS
    │
    ▼
Qué parte existe actualmente
```

El apartado **Funcionalidad implementada** de `PROJECT_STATUS.md` es legítimo porque informa del grado de materialización del producto sin redefinirlo.

**Resultado:** ✅ Correcto.

---

## `ARCHITECTURE.md`

Describe la arquitectura vigente con el detalle necesario para comprender el sistema.

`PROJECT_STATUS.md` puede indicar:

- que la arquitectura se considera estable;
- que determinadas áreas están consolidadas;
- que la base técnica permite continuar el desarrollo.

Pero no debe volver a enumerar ampliamente capas, componentes o flujos. Ese contenido ya fue simplificado durante la Fase 1.

```text
ARCHITECTURE
    │
    ▼
Cómo está organizado el sistema

PROJECT_STATUS
    │
    ▼
En qué grado está consolidado
```

**Resultado:** ✅ Corregido y correctamente delimitado.

---

## `DEVELOPMENT_GUIDE.md`

Define cómo debe trabajarse sobre el proyecto.

`PROJECT_STATUS.md` únicamente puede indicar cuál es la próxima actuación o el punto exacto desde el que debe retomarse el desarrollo.

No debe explicar:

- el flujo de trabajo;
- las convenciones;
- los comandos;
- los criterios generales de finalización.

**Resultado:** ✅ Sin duplicidad.

---

## `TESTING.md`

Define la estrategia de pruebas.

`PROJECT_STATUS.md` puede informar sobre el estado actual de la validación, por ejemplo:

- suite en verde;
- número de pruebas;
- typecheck correcto;
- lint correcto;
- build satisfactorio.

No debe desarrollar principios, niveles ni convenciones de testing.

```text
TESTING
    │
    ▼
Cómo se valida el sistema

PROJECT_STATUS
    │
    ▼
Cuál es el resultado actual
de esa validación
```

**Resultado:** ✅ Correcto.

---

## `AGENTS.md`

Establece cómo deben colaborar los agentes.

`PROJECT_STATUS.md` puede indicar que el repositorio está preparado, o en preparación, para el desarrollo asistido, pero no debe volver a enumerar las instrucciones que deben seguir los agentes.

**Resultado:** ✅ Sin duplicidad.

---

## `PROJECT_JOURNAL.md`

Este es uno de los límites más importantes.

La separación correcta es:

```text
PROJECT_JOURNAL
    │
    ▼
Cómo se llegó al estado actual

PROJECT_STATUS
    │
    ▼
Cuál es ese estado actual
```

El apartado **Historial reciente** de `PROJECT_STATUS.md` no constituye una duplicidad siempre que se mantenga como un resumen breve y remita al diario para el detalle.

No debe crecer hasta convertirse en una cronología extensa.

**Resultado:** ✅ Correcto, con criterio de mantenimiento.

---

## `ROADMAP.md`

Otro límite importante.

La diferencia es:

```text
PROJECT_STATUS
    │
    ▼
Próximo objetivo inmediato

ROADMAP
    │
    ▼
Líneas estratégicas de medio
y largo plazo
```

`PROJECT_STATUS.md` puede contener un único siguiente objetivo concreto y las actuaciones inmediatas necesarias para retomar el trabajo.

No debe acumular:

- iniciativas futuras;
- posibles funcionalidades;
- líneas estratégicas;
- escenarios de evolución.

Tras la simplificación realizada, esta frontera queda correctamente delimitada.

**Resultado:** ✅ Correcto.

---

## `DESIGN_JOURNAL.md`

No informa sobre el estado actual.

Conserva ideas aún no adoptadas.

Una propuesta del diario solo debe aparecer en `PROJECT_STATUS.md` cuando haya sido aceptada, esté en implementación o forme parte explícita del próximo objetivo.

```text
DESIGN_JOURNAL
    │
    ▼
Posibilidad aún no adoptada

PROJECT_STATUS
    │
    ▼
Trabajo vigente o inmediatamente previsto
```

**Resultado:** ✅ Sin duplicidad.

---

## Entorno de desarrollo

El entorno aparece también en `DEVELOPMENT_GUIDE.md`, pero desde perspectivas distintas:

- `PROJECT_STATUS.md` registra el entorno concreto con el que se ha validado el estado actual.
- `DEVELOPMENT_GUIDE.md` explica los requisitos y la preparación del entorno para trabajar con el proyecto.

Por tanto, no existe duplicidad mientras el primero sea informativo y temporal, y el segundo operativo.

**Resultado:** ✅ Correcto.

---

## Lecciones aprendidas

Este era el principal punto pendiente de la Fase 1.

Después de revisar `PROJECT_JOURNAL.md`, la separación más coherente es:

- las lecciones vinculadas a un hito concreto deben vivir en `PROJECT_JOURNAL.md`;
- los principios permanentes deben vivir en el documento especializado correspondiente;
- `PROJECT_STATUS.md` no debería mantener una recopilación amplia de lecciones históricas.

Si el capítulo **Lecciones aprendidas** continúa en `PROJECT_STATUS.md`, corre el riesgo de duplicar:

- el contexto histórico de `PROJECT_JOURNAL.md`;
- los principios de `VISION.md`;
- las convenciones de `DEVELOPMENT_GUIDE.md`;
- los principios de `ARCHITECTURE.md` o `TESTING.md`.

### Recomendación

**Eliminar el capítulo independiente `Lecciones aprendidas` de `PROJECT_STATUS.md`** y trasladar cada lección a su ubicación natural:

- lecciones nacidas de un hito → `PROJECT_JOURNAL.md`;
- principio arquitectónico vigente → `ARCHITECTURE.md`;
- convención de trabajo → `DEVELOPMENT_GUIDE.md`;
- principio de testing → `TESTING.md`;
- principio general del proyecto → `VISION.md`.

Esta es la única duplicidad conceptual relevante que queda asociada al estado del proyecto.

**Resultado:** 🟡 Ajuste recomendado.

---

# Resultado global

| Documento              | Relación con el estado del proyecto |
| ---------------------- | ----------------------------------- |
| `PROJECT_STATUS.md`    | ✅ Fuente principal                 |
| `README.md`            | ✅ Resumen breve                    |
| `INTRODUCTION.md`      | ✅ Navegación                       |
| `VISION.md`            | ✅ Propósito estable                |
| `PRODUCT.md`           | ✅ Definición funcional             |
| `ARCHITECTURE.md`      | ✅ Arquitectura vigente             |
| `DEVELOPMENT_GUIDE.md` | ✅ Proceso de trabajo               |
| `TESTING.md`           | ✅ Estrategia de validación         |
| `AGENTS.md`            | ✅ Colaboración operativa           |
| `PROJECT_JOURNAL.md`   | ✅ Historia                         |
| `ROADMAP.md`           | ✅ Futuro estratégico               |
| `DESIGN_JOURNAL.md`    | ✅ Ideas pendientes                 |

# Veredicto

🟡 **El estado del proyecto está correctamente centralizado en `PROJECT_STATUS.md`, pero conviene retirar de él el capítulo general de “Lecciones aprendidas”.**

El resto de límites están bien definidos después de las correcciones aplicadas en la Fase 1.

# Conclusión

La auditoría confirma que **`PROJECT_STATUS.md` funciona como fuente de verdad temporal del proyecto**: describe qué existe, cuál es el estado técnico actual, qué validaciones se han superado y desde dónde debe retomarse el desarrollo.

La organización temporal queda así:

```text
DESIGN_JOURNAL
    │
    ▼
Ideas posibles

ROADMAP
    │
    ▼
Evolución estratégica

PROJECT_STATUS
    │
    ▼
Presente y próximo paso inmediato

PROJECT_JOURNAL
    │
    ▼
Memoria histórica
```

La única mejora pendiente consiste en evitar que `PROJECT_STATUS.md` acumule conocimiento histórico o principios permanentes mediante una sección general de lecciones aprendidas. Una vez retirado ese contenido, el documento quedará plenamente centrado en su responsabilidad: **ofrecer una fotografía fiable y operativa del presente del proyecto**.

---

## ¿cuándo se hacen los cambios recomendados?

Los cambios recomendados conviene hacerlos **al final de cada concepto auditado**, siempre que la decisión ya sea clara y no dependa de revisar otro concepto.

En este caso concreto, la recomendación sobre `PROJECT_STATUS.md` ya está suficientemente justificada porque hemos revisado:

- `PROJECT_STATUS.md`
- `PROJECT_JOURNAL.md`
- `ROADMAP.md`
- y ahora el concepto transversal **Estado del proyecto**

Por tanto, **ese cambio puede hacerse ahora**.

La regla que seguiría durante toda la Fase 2 sería:

```text
Hallazgo claro y definitivo
        │
        ▼
Corregir inmediatamente

Hallazgo que depende de otra revisión
        │
        ▼
Anotarlo y resolverlo después
```

Aplicado al caso actual:

- Simplificación del estado técnico → ya realizada.
- Simplificación del próximo objetivo → ya realizada.
- Eliminación de `Lecciones aprendidas` de `PROJECT_STATUS.md` → conviene hacerla ahora.
- Trasladar lecciones concretas → solo cuando exista una entrada histórica adecuada en `PROJECT_JOURNAL.md`.
- Principios ya documentados en `VISION`, `ARCHITECTURE`, `DEVELOPMENT_GUIDE` o `TESTING` → no hace falta copiarlos; basta con eliminarlos de `PROJECT_STATUS.md`.

Después de aplicar el cambio, continuamos con el siguiente concepto de la Fase 2. Así evitamos acumular una lista grande de correcciones pendientes y mantenemos la documentación coherente durante toda la auditoría.

---

## ¿qué hay que hacer exactamente?

He estado releyendo tanto el análisis como el contenido de `PROJECT_STATUS.md` y voy a matizar mi recomendación.

**No eliminaría el capítulo "Lecciones aprendidas" inmediatamente.**

De hecho, creo que la auditoría nos ha servido precisamente para ver que debemos distinguir entre dos tipos de lecciones:

1. **Lecciones históricas**, ligadas a un hito concreto.
2. **Principios de trabajo vigentes**, que siguen siendo válidos hoy.

Las primeras pertenecen claramente a `PROJECT_JOURNAL.md`.

Las segundas pueden tener sentido en `PROJECT_STATUS.md` **si su función es informar del estado actual del proyecto**.

Por ejemplo, una frase como:

> "Las responsabilidades deben estar claramente separadas."

ya no es una lección del pasado.

Es un principio consolidado que sigue guiando el proyecto.

Ahí es donde mi recomendación inicial era demasiado radical.

---

## Lo que sí haría

Revisaría una por una las entradas del capítulo.

Por ejemplo:

### Esta

> **Las responsabilidades deben estar claramente separadas.**

No la movería.

Es un principio vigente.

---

### Esta

> **Las abstracciones deben aportar un beneficio real.**

Tampoco.

Ya forma parte de la forma de desarrollar el proyecto.

---

### Esta

> **Las decisiones arquitectónicas deben validarse mediante la práctica.**

También puede permanecer.

Describe cómo se toman las decisiones actualmente.

---

En realidad ocurre lo mismo con las demás.

Ya no se leen como:

> "Aprendimos esto en tal refactorización."

Se leen como:

> "Así trabajamos ahora."

Y eso sí tiene relación con el estado actual del proyecto.

---

# Entonces ¿qué cambiaría?

Solo una cosa.

El título.

Ahora mismo se llama:

> **Lecciones aprendidas**

Ese título induce a pensar que estamos ante un resumen histórico.

Sin embargo, el contenido ya no es histórico.

Es normativo.

Yo lo renombraría por algo como:

- **Principios consolidados**
- **Principios vigentes**
- **Criterios consolidados**
- **Principios de trabajo**
- **Principios que guían el proyecto**

Mi favorito sería:

> **Principios consolidados**

porque transmite muy bien la idea:

> fueron aprendidos durante la evolución del proyecto, pero hoy forman parte de su forma estable de trabajar.

---

# Mi conclusión (corrigiendo mi recomendación anterior)

Después de revisar con calma el contenido, **no eliminaría ese capítulo**.

Lo que haría sería:

- ✅ mantener el contenido;
- ✅ cambiar el título para reflejar mejor su naturaleza;
- ✅ dejar que `PROJECT_JOURNAL.md` conserve las lecciones asociadas a cada hito concreto.

De esa forma desaparece la posible ambigüedad sin perder un apartado que, en mi opinión, aporta bastante valor al documento.

Creo que este es un buen ejemplo de por qué merece la pena hacer la auditoría con calma: el análisis inicial sugería una eliminación, pero la revisión detallada del contenido muestra que **el problema no es el contenido, sino cómo está presentado**. Cambiar el título es una solución mucho más precisa y coherente con el sistema documental que hemos construido.

---

## hecho el cambio. Sistema documental

Perfecto. Con ese cambio, creo que el apartado gana mucha precisión. **"Principios consolidados"** refleja mucho mejor su función que **"Lecciones aprendidas"**, porque ya no se interpreta como un resumen histórico, sino como un conjunto de principios que forman parte del estado actual del proyecto.

Pasemos entonces al último concepto transversal de la Fase 2.

---

# Auditoría de Duplicidades — Fase 2

## Concepto: Sistema documental

### Documento principal

**`INTRODUCTION.md`**

Aquí debe desarrollarse todo lo relacionado con:

- organización del sistema documental;
- responsabilidad de cada documento;
- forma de utilizar la documentación;
- recorridos recomendados;
- evolución del propio sistema documental;
- relaciones entre documentos.

Es el documento que responde a:

> **¿Cómo está organizada la documentación del proyecto y cómo debe utilizarse?**

**Veredicto:** ✅ Documento principal correctamente identificado.

---

# Documentos relacionados

## `README.md`

El README incluye un apartado **"Documentación"**.

Su función es únicamente orientar al lector que acaba de llegar al proyecto.

Debe:

- mostrar el inventario básico de documentos;
- recomendar comenzar por `INTRODUCTION.md`.

No debe explicar:

- cómo se organiza el sistema documental;
- las relaciones entre documentos;
- los recorridos de lectura.

```text
README
    │
    ▼
Existe documentación

INTRODUCTION
    │
    ▼
Cómo está organizada
```

**Resultado:** ✅ Sin duplicidad.

---

## `VISION.md`

Puede afirmar que la documentación forma parte del proyecto.

No debe explicar:

- su estructura;
- sus documentos;
- su organización.

Eso pertenece a `INTRODUCTION.md`.

**Resultado:** ✅ Correcto.

---

## `PRODUCT.md`

No desarrolla el sistema documental.

Puede citar documentos cuando sea necesario.

Nada más.

**Resultado:** ✅ Sin duplicidad.

---

## `ARCHITECTURE.md`

Aquí hay un pequeño matiz.

La arquitectura puede incluir:

- la organización del directorio `docs/`;
- la ubicación física de la documentación.

Pero no debería explicar:

- la responsabilidad de cada documento;
- los recorridos;
- el sistema documental.

Eso corresponde a `INTRODUCTION.md`.

Actualmente esa frontera está bastante clara.

**Resultado:** ✅ Correcto.

---

## `DEVELOPMENT_GUIDE.md`

Puede indicar:

- qué documentación consultar durante el desarrollo;
- cuándo actualizarla;
- la obligación de mantenerla sincronizada.

No debe volver a explicar el sistema documental.

```text
INTRODUCTION
    │
    ▼
Organiza la documentación

DEVELOPMENT_GUIDE
    │
    ▼
Explica cuándo mantenerla actualizada
```

**Resultado:** ✅ Correcto.

---

## `TESTING.md`

Tiene un capítulo:

> Relación con el resto de la documentación.

Durante la auditoría comprobamos que ese capítulo no explica el sistema documental.

Simplemente indica cómo se integra `TESTING.md`.

Eso es correcto.

**Resultado:** ✅ Sin duplicidad.

---

## `AGENTS.md`

Este era uno de los puntos delicados.

La versión actual ya no explica el sistema documental.

Indica simplemente que el agente debe:

- consultarlo;
- respetarlo;
- mantenerlo actualizado.

No vuelve a desarrollar su organización.

**Resultado:** ✅ Correcto.

---

## `PROJECT_STATUS.md`

Puede informar de que:

- la documentación está consolidada;
- se ha reorganizado;
- existe una nueva estructura.

Pero no debe explicar cómo funciona.

Eso pertenece a `INTRODUCTION.md`.

Después de la revisión quedó muy bien delimitado.

**Resultado:** ✅ Correcto.

---

## `PROJECT_JOURNAL.md`

Aquí sí aparece la reorganización documental.

Pero desde una perspectiva histórica.

Eso no constituye una duplicidad.

Describe:

- qué ocurrió;
- por qué;
- qué consecuencias tuvo.

No explica el sistema documental vigente.

**Resultado:** ✅ Correcto.

---

## `ROADMAP.md`

Puede prever:

- nuevas áreas documentales;
- evolución del sistema documental.

No debe describir la organización actual.

La diferencia queda clara.

**Resultado:** ✅ Correcto.

---

## `DESIGN_JOURNAL.md`

No desarrolla el sistema documental.

Puede contener ideas futuras relacionadas con la documentación.

Actualmente no invade ese ámbito.

**Resultado:** ✅ Sin duplicidad.

---

# Resultado global

| Documento              | Relación con el sistema documental          |
| ---------------------- | ------------------------------------------- |
| `INTRODUCTION.md`      | ✅ Fuente principal                         |
| `README.md`            | ✅ Puerta de entrada                        |
| `VISION.md`            | ✅ La documentación como parte del proyecto |
| `PRODUCT.md`           | ✅ Sin incidencia                           |
| `ARCHITECTURE.md`      | ✅ Organización física cuando procede       |
| `DEVELOPMENT_GUIDE.md` | ✅ Mantenimiento de la documentación        |
| `TESTING.md`           | ✅ Integración con el sistema documental    |
| `AGENTS.md`            | ✅ Uso y respeto de la documentación        |
| `PROJECT_STATUS.md`    | ✅ Estado de consolidación                  |
| `PROJECT_JOURNAL.md`   | ✅ Evolución histórica                      |
| `ROADMAP.md`           | ✅ Evolución futura                         |
| `DESIGN_JOURNAL.md`    | ✅ Ideas futuras                            |

---

# Veredicto

🟢 **No se detectan duplicidades significativas.**

El sistema documental tiene una única fuente de verdad: **`INTRODUCTION.md`**.

El resto de documentos únicamente:

- remiten a él;
- explican cómo se relacionan con él;
- informan de su estado;
- o narran su evolución.

---

# Conclusión

La auditoría confirma que **`INTRODUCTION.md` centraliza correctamente el conocimiento sobre la organización de la documentación**. Ningún otro documento necesita volver a explicar el sistema documental; cada uno se limita a describir su propia integración dentro de él.

La relación queda especialmente clara:

```text
README
    │
    ▼
Presenta el proyecto

INTRODUCTION
    │
    ▼
Organiza la documentación

Documentos especializados
    │
    ▼
Desarrollan su responsabilidad

PROJECT_STATUS / PROJECT_JOURNAL / ROADMAP
    │
    ▼
Describen la evolución del proyecto y de la documentación
```

Esta organización convierte a `INTRODUCTION.md` en el **índice conceptual** del sistema documental, mientras que el resto de documentos actúan como módulos especializados. Desde el punto de vista arquitectónico, esta centralización evita que la estructura documental tenga que mantenerse sincronizada en varios lugares y reduce significativamente el riesgo de inconsistencias.

---

# Conclusión de la Fase 2

Con esta revisión queda completada la auditoría de duplicidades conceptuales.

El resultado global es muy sólido:

| Concepto            | Documento fuente       | Resultado                                         |
| ------------------- | ---------------------- | ------------------------------------------------- |
| Filosofía           | `VISION.md`            | 🟢                                                |
| Producto            | `PRODUCT.md`           | 🟢                                                |
| Arquitectura        | `ARCHITECTURE.md`      | 🟢                                                |
| Desarrollo          | `DEVELOPMENT_GUIDE.md` | 🟢                                                |
| Testing             | `TESTING.md`           | 🟢                                                |
| Estado del proyecto | `PROJECT_STATUS.md`    | 🟢 _(tras el cambio a "Principios consolidados")_ |
| Sistema documental  | `INTRODUCTION.md`      | 🟢                                                |

Creo que esta fase confirma algo muy importante: **cada gran concepto del proyecto tiene un único documento que actúa como su fuente de verdad**. El resto de la documentación no duplica ese conocimiento, sino que lo referencia, lo aplica o lo contextualiza desde su propia responsabilidad.

Esa propiedad es exactamente la que se busca en una buena arquitectura documental y refleja el mismo principio de diseño que habéis aplicado al código: **una única responsabilidad y una única fuente autorizada para cada conocimiento**.

---

## ahora vendría la auditoría de terminología ¿no?

Sí. De hecho, en mi opinión **esa es la siguiente fase natural**.

Las dos primeras fases han respondido a estas preguntas:

- **Fase 1:** ¿Cada documento tiene una responsabilidad única?
- **Fase 2:** ¿Cada concepto tiene un único documento donde se desarrolla?

La siguiente pregunta lógica es:

> **¿Utilizamos siempre las mismas palabras para referirnos a un mismo concepto?**

Y esa es precisamente la **auditoría de terminología**.

---

# Fase 3 — Auditoría de terminología

Aquí ya no revisamos documentos ni conceptos.

Revisamos **el vocabulario del proyecto**.

El objetivo es conseguir que exista un **lenguaje ubicuo**, igual que en Domain-Driven Design.

Es decir:

> **Un concepto → un término.**

Siempre.

---

## ¿Qué vamos a buscar?

Por ejemplo, cosas como:

### Ejemplo 1

¿Estamos diciendo indistintamente?

- sistema
- aplicación
- proyecto
- producto

¿O cada palabra tiene un significado distinto?

---

### Ejemplo 2

¿Decimos?

- arquitectura
- diseño técnico
- estructura

¿Son sinónimos?

¿O deberían significar cosas diferentes?

---

### Ejemplo 3

¿Utilizamos indistintamente?

- funcionalidad
- capacidad
- característica
- comportamiento

Quizá haya que elegir uno para cada contexto.

---

### Ejemplo 4

¿Hablamos de?

- agente
- asistente
- IA
- herramienta

Cuando en realidad queremos decir:

> agente de desarrollo.

---

## Mi propuesta

Yo no lo haría documento por documento.

Lo haría por familias de términos.

---

# 1. Proyecto

Revisar:

- proyecto
- producto
- aplicación
- sistema

---

# 2. Arquitectura

Revisar:

- arquitectura
- diseño
- organización
- estructura

---

# 3. Desarrollo

Revisar:

- desarrollo
- implementación
- evolución
- mantenimiento

---

# 4. Testing

Revisar:

- prueba
- test
- testing
- validación
- verificación

---

# 5. Documentación

Revisar:

- documento
- documentación
- sistema documental
- documentación técnica

---

# 6. Estado

Revisar:

- estado
- situación
- evolución
- progreso

---

# 7. Ideas futuras

Revisar:

- idea
- propuesta
- hipótesis
- posibilidad
- línea estratégica

---

## El resultado

Al final obtendríamos algo parecido a un pequeño glosario interno.

Por ejemplo:

| Concepto              | Término preferente       | Evitar cuando signifique lo mismo                    |
| --------------------- | ------------------------ | ---------------------------------------------------- |
| Producto              | **producto**             | aplicación, sistema (si se usan como sinónimos)      |
| Estrategia de pruebas | **testing**              | pruebas (cuando se refiera a la estrategia completa) |
| Estado actual         | **estado del proyecto**  | situación actual (si alterna sin necesidad)          |
| Agente                | **agente de desarrollo** | asistente, IA (cuando el contexto ya está definido)  |

No sería un glosario para el usuario, sino una **guía de consistencia terminológica** para mantener toda la documentación alineada.

---

# Mi única modificación al plan

Creo que esta fase debería llamarse algo ligeramente distinto.

En vez de:

> **Auditoría de terminología**

yo la llamaría:

> **Auditoría del lenguaje del proyecto**

¿Por qué?

Porque no solo vamos a revisar palabras.

Vamos a revisar que **cada concepto tenga un significado estable** en toda la documentación.

Eso es más amplio que una simple terminología.

En el fondo, lo que estamos construyendo es el **lenguaje ubicuo** del proyecto. Y, curiosamente, esa será probablemente la última pieza que faltará para que el sistema documental tenga el mismo nivel de coherencia que la arquitectura del propio software.

---

primer término Proyecto

Revisar:

- proyecto
- producto
- aplicación
- sistema

---

Perfecto. Me parece el mejor término para empezar, porque probablemente es el que más se utiliza en toda la documentación. Además, aquí no se trata de elegir una palabra "bonita", sino de que **cada una tenga un significado distinto**.

---

# Auditoría del lenguaje del proyecto

## Familia de términos

- Proyecto
- Producto
- Aplicación
- Sistema

---

# 1. Proyecto

## Significado propuesto

> **El conjunto completo del trabajo que se está desarrollando.**

Incluye:

- el producto;
- el código;
- la arquitectura;
- la documentación;
- el proceso de desarrollo;
- el repositorio;
- la estrategia de testing.

Es el concepto más amplio.

Ejemplos:

- "La documentación forma parte del proyecto."
- "El proyecto evoluciona de forma incremental."
- "El estado actual del proyecto."

Nunca debería utilizarse como sinónimo de aplicación.

---

# 2. Producto

## Significado propuesto

> **El software que el proyecto pretende construir.**

Es decir,

el resultado funcional.

No incluye:

- la documentación;
- los ADR;
- el proceso de desarrollo;
- Git;
- la arquitectura documental.

Ejemplos:

- "El producto permite gestionar conocimiento."
- "PRODUCT.md define el producto."

---

# 3. Aplicación

Aquí creo que debemos tomar una decisión importante.

En la documentación actual prácticamente ha desaparecido.

Y me parece acertado.

¿Por qué?

Porque "aplicación" suele referirse a:

> el programa que ejecuta el usuario.

En vuestro caso eso sería únicamente el frontend.

Pero el proyecto ya es mucho más que eso.

Por tanto yo la utilizaría únicamente cuando realmente hablemos de la aplicación ejecutable.

Por ejemplo:

- "La aplicación se inicia con Vite."
- "La aplicación conserva el estado mediante localStorage."

No la utilizaría para hablar del producto.

---

# 4. Sistema

Este es el término más delicado.

Actualmente aparece en muchos documentos.

Y creo que tiene sentido mantenerlo.

Pero con un significado muy concreto.

Yo propondría:

> **Sistema = conjunto organizado de elementos que colaboran para cumplir una finalidad.**

Por ejemplo:

- sistema documental;
- sistema de estado;
- sistema de testing;
- sistema de persistencia.

Es decir,

"sistema" describe una organización.

No un producto.

No un proyecto.

No una aplicación.

---

# Relaciones entre ellos

Creo que esta jerarquía resume muy bien la diferencia.

```text
Proyecto
│
├── Producto
│      │
│      └── Aplicación
│
├── Arquitectura
├── Documentación
├── Testing
├── Desarrollo
└── Repositorio
```

Mientras que:

```text
Sistema
```

es un término transversal.

Puede existir:

- un sistema documental;
- un sistema de autenticación;
- un sistema de publicación;
- un sistema de estado.

No depende de la jerarquía anterior.

---

# Recomendaciones terminológicas

| Término        | Utilizar para                    | Evitar como sinónimo de |
| -------------- | -------------------------------- | ----------------------- |
| **Proyecto**   | Conjunto completo                | Producto, aplicación    |
| **Producto**   | Software que se construye        | Proyecto, aplicación    |
| **Aplicación** | Programa ejecutable              | Producto, proyecto      |
| **Sistema**    | Conjunto organizado de elementos | Proyecto, producto      |

---

# Veredicto

🟢 **La terminología ya está bastante consolidada**, pero haría una recomendación importante:

> **Reservar "aplicación" exclusivamente para referirse al software ejecutable**, y utilizar **"producto"** cuando se hable de la solución que el proyecto pretende construir.

Creo que esa distinción encaja muy bien con la evolución que ha seguido vuestro trabajo. Al principio era una _Todo App_; hoy el repositorio contiene mucho más que una aplicación: contiene una arquitectura, un sistema documental, una estrategia de desarrollo y un proceso de validación. Hablar de **proyecto** y **producto** refleja mejor esa realidad.

---

## Una reflexión

Aquí aparece un patrón muy interesante que probablemente se repetirá en toda la auditoría del lenguaje:

No se trata de eliminar palabras sinónimas, sino de **especializarlas**.

En otras palabras, no buscamos que solo exista una palabra, sino que **cada palabra tenga un significado estable**.

Esa es precisamente la esencia de un **lenguaje ubicuo**: cuando un lector encuentra "proyecto", "producto", "aplicación" o "sistema", sabe exactamente a qué nivel de abstracción se está refiriendo el documento. En mi opinión, esa precisión terminológica hará que toda la documentación resulte aún más consistente y fácil de mantener.

---

Arquitectura

Revisar:

- arquitectura
- diseño
- organización
- estructura

---

Este grupo me parece incluso más importante que el anterior, porque estas cuatro palabras se usan muchísimo en documentación técnica y, si no se distinguen bien, terminan pareciendo sinónimos cuando en realidad no lo son.

Mi propuesta sería la siguiente.

---

# Auditoría del lenguaje del proyecto

## Familia de términos

- Arquitectura
- Diseño
- Organización
- Estructura

---

# 1. Arquitectura

## Significado propuesto

> **Conjunto de decisiones fundamentales que organizan el sistema y definen las responsabilidades y relaciones entre sus componentes.**

La arquitectura responde a preguntas como:

- ¿Cómo se divide el sistema?
- ¿Qué responsabilidades tiene cada parte?
- ¿Cómo se relacionan entre sí?
- ¿Qué dependencias están permitidas?

Es un concepto **estable**.

Ejemplos:

- Arquitectura por capas.
- Arquitectura del dominio.
- Arquitectura documental.

No debería utilizarse para hablar simplemente de cómo están colocados unos archivos.

---

# 2. Diseño

Aquí creo que conviene diferenciarlo claramente de arquitectura.

## Significado propuesto

> **Proceso o resultado de decidir cómo resolver un problema concreto dentro de la arquitectura existente.**

El diseño trabaja **dentro** de la arquitectura.

Ejemplos:

- diseño de una API;
- diseño de una entidad;
- diseño de un caso de uso;
- diseño de una interfaz.

Es decir:

```text
Arquitectura
        │
        ▼
Define el marco

Diseño
        │
        ▼
Resuelve problemas concretos
```

No son sinónimos.

---

# 3. Organización

Creo que esta palabra debería reservarse para la **distribución** de elementos.

Ejemplos:

- organización de la documentación;
- organización del código;
- organización del repositorio;
- organización de las pruebas.

No implica necesariamente una decisión arquitectónica.

Simplemente describe cómo se agrupan los elementos.

---

# 4. Estructura

Aquí propondría un significado todavía más concreto.

> **Disposición física o lógica de los elementos que forman un conjunto.**

Ejemplos:

- estructura de directorios;
- estructura del proyecto;
- estructura de carpetas;
- estructura de un documento.

Es un término descriptivo.

No explica responsabilidades.

---

# Relaciones entre ellos

Creo que esta jerarquía resume bastante bien la diferencia.

```text id="u7w3kj"
Arquitectura
        │
        ▼
Decide las responsabilidades

Diseño
        │
        ▼
Resuelve problemas
dentro de esa arquitectura

Organización
        │
        ▼
Distribuye elementos
según determinados criterios

Estructura
        │
        ▼
Describe cómo están
dispuestos esos elementos
```

---

# Ejemplos prácticos

## Correcto

"La **arquitectura** organiza el sistema en capas."

Porque habla de responsabilidades.

---

"El **diseño** del repositorio facilita su evolución."

Porque habla de una solución concreta.

---

"La **organización** de la documentación evita duplicidades."

Porque habla de cómo se distribuyen los documentos.

---

"La **estructura** de directorios sigue una jerarquía por responsabilidades."

Porque describe la disposición física.

---

# Recomendaciones terminológicas

| Término          | Utilizar para                                                | Evitar como sinónimo de    |
| ---------------- | ------------------------------------------------------------ | -------------------------- |
| **Arquitectura** | Organización fundamental del sistema y sus responsabilidades | Diseño, estructura         |
| **Diseño**       | Soluciones concretas dentro de la arquitectura               | Arquitectura               |
| **Organización** | Distribución de elementos                                    | Arquitectura               |
| **Estructura**   | Disposición física o lógica                                  | Arquitectura, organización |

---

# Veredicto

🟢 **Los cuatro términos pueden convivir perfectamente**, siempre que cada uno conserve un significado específico.

Mi única recomendación sería ser especialmente cuidadosos con **"arquitectura"** y **"estructura"**, porque son las dos palabras que más fácilmente se utilizan como sinónimos en documentación técnica. En vuestro sistema documental, sin embargo, merece la pena diferenciarlas: la **arquitectura** explica las decisiones y responsabilidades; la **estructura** describe cómo se materializan esas decisiones en la organización visible del proyecto.

---

## Una reflexión

Creo que aquí aparece un patrón interesante: los cuatro términos corresponden a **niveles distintos de abstracción**, no a conceptos equivalentes.

```text
Arquitectura
    │
    ▼
¿Qué principios organizan el sistema?

Diseño
    │
    ▼
¿Cómo resolvemos un problema concreto?

Organización
    │
    ▼
¿Cómo agrupamos los elementos?

Estructura
    │
    ▼
¿Cómo están dispuestos esos elementos?
```

Mantener esta jerarquía hará que expresiones como _"arquitectura del sistema"_, _"diseño de un componente"_, _"organización de la documentación"_ y _"estructura del repositorio"_ tengan un significado preciso y constante en toda la documentación, reforzando el lenguaje ubicuo del proyecto.

---

Desarrollo

Revisar:

- desarrollo
- implementación
- evolución
- mantenimiento

---

Este grupo también merece una diferenciación clara, porque en muchos proyectos estos cuatro términos se mezclan continuamente. Sin embargo, creo que en vuestro sistema documental pueden formar una secuencia muy lógica.

---

# Auditoría del lenguaje del proyecto

## Familia de términos

- Desarrollo
- Implementación
- Evolución
- Mantenimiento

---

# 1. Desarrollo

## Significado propuesto

> **Proceso global de construcción, mejora y consolidación del proyecto.**

Es el término más amplio de los cuatro.

Incluye, entre otras actividades:

- análisis;
- diseño;
- implementación;
- refactorización;
- validación;
- documentación;
- mantenimiento.

Responde a preguntas como:

- ¿Cómo se desarrolla el proyecto?
- ¿Cuál es el proceso de desarrollo?
- ¿Qué prácticas seguimos durante el desarrollo?

Ejemplos:

- "El desarrollo del proyecto es incremental."
- "DEVELOPMENT_GUIDE.md describe el proceso de desarrollo."

No debería utilizarse como sinónimo de "programar".

---

# 2. Implementación

## Significado propuesto

> **Materialización concreta de una funcionalidad, una decisión de diseño o un cambio en el código.**

Es una actividad específica dentro del desarrollo.

Ejemplos:

- implementación de Undo/Redo;
- implementación de la persistencia;
- implementación de un caso de uso.

La implementación responde a:

> **¿Cómo se ha llevado al código una determinada solución?**

```text id="6y0j5m"
Desarrollo
        │
        ▼
Incluye muchas actividades

Implementación
        │
        ▼
Una de ellas
```

---

# 3. Evolución

Aquí propondría un significado claramente distinto.

## Significado propuesto

> **Cambio progresivo del proyecto a lo largo del tiempo.**

La evolución no describe una actividad concreta, sino una perspectiva temporal.

Puede afectar a:

- producto;
- arquitectura;
- documentación;
- testing;
- proceso de desarrollo.

Ejemplos:

- evolución de la arquitectura;
- evolución del producto;
- evolución del sistema documental.

No debería utilizarse como sinónimo de implementación.

---

# 4. Mantenimiento

## Significado propuesto

> **Conjunto de actividades destinadas a conservar la calidad, coherencia y utilidad del proyecto una vez que existe una base funcional.**

Incluye:

- corrección de errores;
- refactorizaciones;
- actualización de documentación;
- adaptación a nuevas versiones;
- mejoras de calidad.

No implica necesariamente incorporar nuevas funcionalidades.

Ejemplos:

- mantenimiento del sistema documental;
- mantenimiento del código;
- mantenimiento de la suite de pruebas.

---

# Relaciones entre ellos

Creo que esta relación resume bien los cuatro conceptos.

```text id="9dhv4r"
Desarrollo
        │
        ▼
Proceso global

├── Implementación
│       │
│       ▼
│   Construye nuevas capacidades
│
├── Mantenimiento
│       │
│       ▼
│   Conserva y mejora lo existente
│
└── Evolución
        │
        ▼
Resultado acumulado
del desarrollo a lo largo del tiempo
```

La diferencia importante es que **implementación** y **mantenimiento** son actividades, mientras que **evolución** describe el efecto global que producen esas actividades con el paso del tiempo.

---

# Ejemplos prácticos

## Correcto

"El **desarrollo** del proyecto sigue un proceso incremental."

Porque habla del proceso completo.

---

"Se ha completado la **implementación** del historial Undo/Redo."

Porque se refiere a una funcionalidad concreta.

---

"La **evolución** del sistema documental ha permitido separar responsabilidades."

Porque describe un cambio acumulado.

---

"El **mantenimiento** incluye la actualización de la documentación y las dependencias."

Porque habla de conservar la calidad del proyecto.

---

# Recomendaciones terminológicas

| Término            | Utilizar para                                         | Evitar como sinónimo de |
| ------------------ | ----------------------------------------------------- | ----------------------- |
| **Desarrollo**     | Proceso global de creación y mejora del proyecto      | Implementación          |
| **Implementación** | Materialización concreta de una solución en el código | Desarrollo, evolución   |
| **Evolución**      | Cambio progresivo del proyecto a lo largo del tiempo  | Implementación          |
| **Mantenimiento**  | Conservación, adaptación y mejora de lo existente     | Evolución               |

---

# Veredicto

🟢 **Los cuatro términos pueden coexistir con significados claramente diferenciados.**

La clave es mantener el nivel de abstracción de cada uno:

- **desarrollo** → proceso;
- **implementación** → actividad concreta;
- **evolución** → perspectiva temporal;
- **mantenimiento** → conservación y mejora.

---

# Una reflexión

Creo que esta familia de términos forma una secuencia muy natural dentro del proyecto:

```text id="2c8m7n"
Desarrollo
    │
    ▼
Incluye actividades como la implementación
y el mantenimiento

↓

Con el paso del tiempo

↓

Evolución del proyecto
```

Esa relación es especialmente coherente con vuestra documentación. Por ejemplo:

- `DEVELOPMENT_GUIDE.md` habla del **desarrollo**.
- `PROJECT_JOURNAL.md` registra la **evolución**.
- `PROJECT_STATUS.md` refleja el resultado actual de esa evolución.
- Los commits y las tareas concretas describen **implementaciones**.
- Las refactorizaciones, actualizaciones y revisiones documentales forman parte del **mantenimiento**.

Mantener esta distinción hará que cada término aporte un matiz propio y evitará que se utilicen indistintamente para referirse a procesos diferentes.

---

Testing

Revisar:

- prueba
- test
- testing
- validación
- verificación

---

Este grupo es probablemente el más delicado de toda la auditoría terminológica. En informática se utilizan estas cinco palabras casi como sinónimos, pero en vuestro proyecto creo que merece la pena diferenciarlas. Además, esa diferenciación ya está implícita en varios documentos (`DEVELOPMENT_GUIDE.md`, `TESTING.md` y `PROJECT_STATUS.md`).

Mi propuesta sería la siguiente.

---

# Auditoría del lenguaje del proyecto

## Familia de términos

- Prueba
- Test
- Testing
- Validación
- Verificación

---

# 1. Testing

## Significado propuesto

> **La estrategia completa mediante la que el proyecto protege el comportamiento del sistema mediante pruebas automatizadas.**

Es el concepto más amplio de esta familia.

Incluye:

- principios;
- organización;
- niveles de prueba;
- cobertura;
- mantenimiento;
- evolución de la estrategia.

Responde a:

> **¿Cómo protegemos el proyecto mediante pruebas?**

Por eso el documento principal se llama:

> `TESTING.md`

y no:

> `TESTS.md`

---

# 2. Test

## Significado propuesto

> **Una prueba automatizada concreta implementada en código.**

Ejemplos:

- un test unitario;
- un test de integración;
- un test de componente.

Es una unidad física del código.

Ejemplos correctos:

- "Añadir un test para `toggleAll`."
- "`undo.test.ts` contiene los tests de Undo."

No lo utilizaría para referirme a la estrategia completa.

---

# 3. Prueba

Aquí propondría reservarla para el concepto general en español.

> **Comprobación destinada a confirmar un comportamiento.**

Puede utilizarse cuando no hablamos específicamente del archivo de código.

Ejemplos:

- pruebas unitarias;
- pruebas de integración;
- estrategia de pruebas.

Aunque el documento se llame `TESTING.md`, dentro del texto en español es perfectamente natural hablar de "pruebas".

Mi recomendación sería:

- **test** → cuando hablamos de una pieza de código concreta.
- **prueba** → cuando hablamos del concepto general en español.

---

# 4. Validación

Creo que aquí conviene diferenciarla claramente.

## Significado propuesto

> **Proceso de comprobar que un cambio cumple los criterios establecidos antes de considerarlo correcto.**

La validación puede incluir:

- ejecutar tests;
- ejecutar TypeScript;
- ejecutar lint;
- realizar una revisión manual;
- comprobar el comportamiento.

Es decir:

```text id="z8b0ul"
Validación

incluye

↓

Tests
TypeScript
Lint
Build
Revisión manual
```

Por eso en `DEVELOPMENT_GUIDE.md` tiene sentido hablar de **validación**, no únicamente de testing.

---

# 5. Verificación

Aquí haría la distinción más sutil.

## Significado propuesto

> **Comprobación de una condición concreta dentro del proceso de validación.**

Ejemplos:

- verificar que un selector devuelve el resultado esperado;
- verificar que un archivo existe;
- verificar que la documentación está actualizada;
- verificar que una dependencia no rompe la arquitectura.

Es una acción puntual.

No un proceso completo.

---

# Relaciones entre ellos

Creo que esta jerarquía resume muy bien la diferencia.

```text id="h9mk1r"
Testing
        │
        ▼
Estrategia completa

↓

Validación
        │
        ▼
Proceso para aceptar un cambio

↓

Pruebas

↓

Test

↓

Verificación
```

O dicho de otra forma:

- el **testing** define la estrategia;
- la **validación** decide si un cambio puede aceptarse;
- las **pruebas** son uno de los mecanismos de esa validación;
- un **test** es una prueba automatizada concreta;
- una **verificación** es la comprobación puntual de una condición.

---

# Ejemplos prácticos

## Correcto

"La estrategia de **testing** se describe en `TESTING.md`."

---

"Se han añadido dos **tests** para Undo."

---

"Las **pruebas** de integración validan la interacción entre componentes."

---

"Todo cambio debe superar el proceso de **validación**."

---

"Es necesario **verificar** que el selector devuelve únicamente tareas activas."

---

# Recomendaciones terminológicas

| Término          | Utilizar para                                       | Evitar como sinónimo de                              |
| ---------------- | --------------------------------------------------- | ---------------------------------------------------- |
| **Testing**      | Estrategia global de pruebas                        | Validación                                           |
| **Test**         | Prueba automatizada concreta implementada en código | Testing                                              |
| **Prueba**       | Concepto general o categoría de comprobación        | Test (cuando se habla de un archivo o caso concreto) |
| **Validación**   | Proceso completo de aceptar un cambio               | Testing                                              |
| **Verificación** | Comprobación puntual de una condición               | Validación                                           |

---

# Veredicto

🟢 **Los cinco términos pueden convivir sin ambigüedad si cada uno mantiene un significado específico.**

La distinción más útil para la documentación del proyecto sería:

- **Testing** → estrategia.
- **Validación** → proceso.
- **Prueba** → concepto general.
- **Test** → implementación concreta.
- **Verificación** → comprobación puntual.

---

# Una observación

Solo haría un pequeño ajuste respecto a una propuesta anterior: **no intentaría evitar la palabra "prueba"**. Al contrario, en una documentación escrita en español resulta natural hablar de:

- pruebas unitarias;
- pruebas de integración;
- estrategia de pruebas.

Lo que sí mantendría es una convención sencilla:

- usar **`test`** cuando se haga referencia al código (archivos, casos de prueba, suites);
- usar **`prueba`** cuando se hable del concepto o de la categoría de validación.

De esa forma se aprovecha la terminología habitual del desarrollo de software sin perder precisión, y la documentación sigue siendo natural para lectores hispanohablantes.

---

Documentación

Revisar:

- documento
- documentación
- sistema documental
- documentación técnica

---

Este grupo me parece especialmente interesante porque afecta a prácticamente todos los documentos del proyecto. Además, durante la reorganización hemos ido usando estos términos con bastante cuidado, así que esta auditoría sirve para consolidar ese vocabulario.

---

# Auditoría del lenguaje del proyecto

## Familia de términos

- Documento
- Documentación
- Sistema documental
- Documentación técnica

---

# 1. Documento

## Significado propuesto

> **Unidad individual de información con una responsabilidad específica dentro del sistema documental.**

Un documento es un único artefacto.

Ejemplos:

- `VISION.md`
- `PRODUCT.md`
- `ARCHITECTURE.md`
- `TESTING.md`

Cuando hablamos de un documento, hablamos de **una única pieza** de la documentación.

Ejemplos correctos:

- "Este documento describe..."
- "`PRODUCT.md` es el documento responsable..."

No debería utilizarse para referirse al conjunto completo.

---

# 2. Documentación

## Significado propuesto

> **Conjunto de documentos que describen el proyecto desde distintas perspectivas.**

Es el concepto global.

Incluye:

- visión;
- producto;
- arquitectura;
- desarrollo;
- testing;
- estado;
- roadmap;
- etc.

Ejemplos:

- "La documentación forma parte del proyecto."
- "La documentación evoluciona junto con el software."

---

# 3. Sistema documental

Aquí creo que debemos conservar exactamente el significado que ya hemos construido.

## Significado propuesto

> **La documentación considerada como un sistema organizado, compuesto por documentos especializados que colaboran entre sí mediante responsabilidades claramente definidas.**

Es decir,

no es simplemente:

> muchos documentos.

Sino:

> un conjunto organizado de documentos con relaciones explícitas.

Por eso hablamos de:

- organización;
- recorridos;
- responsabilidades;
- ausencia de duplicidades.

Todo eso pertenece al **sistema documental**.

```text id="v6d3jx"
Sistema documental

↓

Documentos especializados

↓

Relaciones

↓

Responsabilidades

↓

Coherencia
```

---

# 4. Documentación técnica

Este término merece un significado específico.

## Significado propuesto

> **Parte de la documentación dedicada a describir los aspectos técnicos del proyecto.**

No toda la documentación es técnica.

Por ejemplo:

- `VISION.md` → no es documentación técnica.
- `PRODUCT.md` → principalmente funcional.
- `ARCHITECTURE.md` → técnica.
- `DEVELOPMENT_GUIDE.md` → técnica.
- `TESTING.md` → técnica.

Por tanto:

```text id="dyxrt2"
Documentación

├── Funcional
├── Técnica
├── Estado
├── Histórica
└── Estratégica
```

La documentación técnica es un subconjunto de la documentación del proyecto.

---

# Relaciones entre ellos

Creo que esta jerarquía resume bien los cuatro conceptos.

```text id="5w0lzt"
Documentación
        │
        ▼
Conjunto completo

↓

Sistema documental
        │
        ▼
Organización de esa documentación

↓

Documento
        │
        ▼
Unidad individual

↓

Documentación técnica
        │
        ▼
Categoría de documentos
```

Hay un pequeño matiz importante: **"sistema documental"** no es un subconjunto de la documentación, sino una forma de entenderla y organizarla. Por eso conviene pensar en él como una propiedad del conjunto más que como una categoría más.

---

# Ejemplos prácticos

## Correcto

"`ARCHITECTURE.md` es un **documento**."

---

"La **documentación** del proyecto está organizada por responsabilidades."

---

"`INTRODUCTION.md` describe el **sistema documental**."

---

"`TESTING.md` forma parte de la **documentación técnica**."

---

# Recomendaciones terminológicas

| Término                   | Utilizar para                                           | Evitar como sinónimo de                                              |
| ------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| **Documento**             | Archivo individual con una responsabilidad específica   | Documentación                                                        |
| **Documentación**         | Conjunto completo de documentos                         | Documento                                                            |
| **Sistema documental**    | Organización y relaciones entre la documentación        | Documentación (cuando solo se quiera decir "conjunto de documentos") |
| **Documentación técnica** | Documentos que describen aspectos técnicos del proyecto | Documentación completa                                               |

---

# Veredicto

🟢 **Los cuatro términos pueden mantenerse sin ambigüedad y ya están bastante bien consolidados en la documentación.**

La única recomendación sería ser constantes al utilizar **"sistema documental"**. Conviene reservarlo para aquellos contextos en los que realmente se habla de la **arquitectura de la documentación** (responsabilidades, relaciones, organización y evolución), y utilizar simplemente **"documentación"** cuando solo se haga referencia al conjunto de documentos.

---

# Una reflexión

Creo que esta familia de términos refleja muy bien una de las ideas más originales que ha surgido durante el proyecto.

En muchos repositorios, la documentación se entiende simplemente como un conjunto de archivos. En vuestro caso, la documentación ha evolucionado hasta convertirse en un **sistema** con una arquitectura propia. Esa diferencia justifica plenamente la existencia del término **"sistema documental"**, porque no describe la cantidad de documentos, sino la forma en que se relacionan y colaboran entre sí.

En mi opinión, esa es una de las características que distingue esta documentación de una documentación convencional y merece la pena mantener esa precisión terminológica en todos los documentos.

---

Estado

Revisar:

- estado
- situación
- evolución
- progreso

---

Este grupo es especialmente interesante porque ya hemos construido tres documentos cuya diferencia principal es **temporal** (`PROJECT_STATUS`, `PROJECT_JOURNAL` y `ROADMAP`). Por eso conviene que estas cuatro palabras tengan significados muy precisos.

---

# Auditoría del lenguaje del proyecto

## Familia de términos

- Estado
- Situación
- Evolución
- Progreso

---

# 1. Estado

## Significado propuesto

> **Condición actual del proyecto en un momento determinado.**

Es una fotografía del presente.

Responde a preguntas como:

- ¿Qué existe hoy?
- ¿Qué está implementado?
- ¿Cuál es el siguiente paso inmediato?

Por eso el documento se llama:

> `PROJECT_STATUS.md`

Ejemplos:

- estado del proyecto;
- estado técnico;
- estado de la documentación.

El estado siempre hace referencia al **presente**.

---

# 2. Situación

Creo que aquí merece la pena diferenciarla claramente.

## Significado propuesto

> **Contexto o circunstancia en la que se encuentra el proyecto.**

La situación no describe tanto el contenido del proyecto como su contexto.

Ejemplos:

- situación del mercado;
- situación del repositorio;
- situación del proyecto respecto a una versión.

En vuestra documentación apenas aparece.

Y creo que eso es positivo.

De hecho, probablemente utilizaría siempre **estado** cuando hablemos del proyecto.

---

# 3. Evolución

Este término ya lo definimos anteriormente, pero aquí adquiere un significado temporal muy claro.

## Significado propuesto

> **Transformación del proyecto a lo largo del tiempo.**

No habla del presente.

Habla del cambio.

Ejemplos:

- evolución del producto;
- evolución de la arquitectura;
- evolución del sistema documental.

Es el término natural para `PROJECT_JOURNAL.md` y `ROADMAP.md`.

---

# 4. Progreso

Aquí sí haría una diferenciación importante.

## Significado propuesto

> **Avance medible hacia un objetivo concreto.**

El progreso implica:

- una meta;
- un grado de avance.

Ejemplos:

- progreso de una migración;
- progreso de una funcionalidad;
- progreso de una tarea.

No describe el proyecto completo.

Describe cuánto se ha avanzado respecto a algo.

---

# Relaciones entre ellos

Creo que esta relación resume muy bien los cuatro conceptos.

```text id="4y3e1m"
Evolución
        │
        ▼
Describe el cambio
a lo largo del tiempo

↓

Estado
        │
        ▼
Describe el resultado
actual de esa evolución

↓

Progreso
        │
        ▼
Mide cuánto se ha avanzado
hacia un objetivo

↓

Situación
        │
        ▼
Describe el contexto
en el que se encuentra
el proyecto
```

---

# Ejemplos prácticos

## Correcto

"El **estado** del proyecto se describe en `PROJECT_STATUS.md`."

---

"La **evolución** de la arquitectura se conserva en `PROJECT_JOURNAL.md`."

---

"El **progreso** de la migración a TypeScript fue gradual."

---

"La **situación** del proyecto permite comenzar la colaboración mediante agentes."

Aunque este último ejemplo es correcto, personalmente escribiría:

> "El **estado** del proyecto permite comenzar..."

porque resulta más preciso dentro de vuestro sistema documental.

---

# Recomendaciones terminológicas

| Término       | Utilizar para                        | Evitar como sinónimo de                              |
| ------------- | ------------------------------------ | ---------------------------------------------------- |
| **Estado**    | Condición actual del proyecto        | Situación, progreso                                  |
| **Situación** | Contexto o circunstancias            | Estado (cuando se describa el presente del proyecto) |
| **Evolución** | Transformación a lo largo del tiempo | Progreso                                             |
| **Progreso**  | Avance hacia un objetivo concreto    | Evolución                                            |

---

# Veredicto

🟢 **Los cuatro términos pueden convivir, aunque uno de ellos apenas aporta valor al lenguaje del proyecto.**

En concreto, **"situación"** tiene muy poco espacio propio. La mayoría de las veces que la documentación habla del presente del proyecto, **"estado"** resulta más preciso y además mantiene la coherencia con `PROJECT_STATUS.md`.

Por tanto, recomendaría utilizar:

- **estado** para el presente;
- **evolución** para el cambio a lo largo del tiempo;
- **progreso** para medir el avance de un objetivo concreto;
- **situación** únicamente cuando realmente se quiera describir el contexto o las circunstancias, no el estado del proyecto.

---

# Una reflexión

Este grupo confirma una idea que ha ido apareciendo durante toda la auditoría: el lenguaje del proyecto funciona especialmente bien cuando cada término se asocia a una **dimensión distinta**.

En este caso:

- **Estado** → dimensión **temporal estática** (el presente).
- **Evolución** → dimensión **temporal dinámica** (el cambio).
- **Progreso** → dimensión **de seguimiento** (el avance hacia una meta).
- **Situación** → dimensión **contextual** (las circunstancias).

Esa diferenciación encaja perfectamente con la estructura documental que habéis construido:

- `PROJECT_STATUS.md` describe el **estado**.
- `PROJECT_JOURNAL.md` conserva la **evolución**.
- `ROADMAP.md` orienta el futuro, donde el **progreso** podrá medirse respecto a los objetivos que se vayan alcanzando.

Creo que mantener este vocabulario hará que la documentación gane aún más precisión sin complicar su lectura.

---

deas futuras

Revisar:

- idea
- propuesta
- hipótesis
- posibilidad
- línea estratégica
  Auditoría de duplicidades

---

Este último grupo cierra muy bien la auditoría del lenguaje porque afecta directamente a la frontera entre **`DESIGN_JOURNAL.md`** y **`ROADMAP.md`**, una de las separaciones más delicadas del sistema documental.

Aquí es donde más merece la pena ser preciso.

---

# Auditoría del lenguaje del proyecto

## Familia de términos

- Idea
- Propuesta
- Hipótesis
- Posibilidad
- Línea estratégica

---

# 1. Idea

## Significado propuesto

> **Pensamiento inicial que surge durante el diseño y que todavía no ha sido analizado.**

Es el nivel más embrionario.

No implica:

- estudio;
- compromiso;
- planificación.

Ejemplos:

- una idea para mejorar la biblioteca;
- una idea sobre monetización.

Su lugar natural es:

> `DESIGN_JOURNAL.md`

---

# 2. Hipótesis

Aquí propondría un significado bastante preciso.

## Significado propuesto

> **Idea razonada cuya utilidad todavía debe comprobarse.**

Ya existe una reflexión.

Pero aún no existe una decisión.

Ejemplos:

- hipótesis sobre una nueva organización documental;
- hipótesis sobre el modelo de publicación.

Una hipótesis puede:

- confirmarse;
- descartarse;
- transformarse.

También pertenece al `DESIGN_JOURNAL.md`.

---

# 3. Propuesta

Este término me parece especialmente importante.

## Significado propuesto

> **Solución concreta que se plantea para su posible adopción.**

La diferencia respecto a una hipótesis es que ya existe una formulación clara.

Una propuesta puede presentarse para ser evaluada.

Ejemplos:

- propuesta de reorganización;
- propuesta de un nuevo modelo conceptual.

Una propuesta todavía no implica planificación.

---

# 4. Posibilidad

Aquí haría una distinción interesante.

## Significado propuesto

> **Opción que podría considerarse en el futuro sin que exista todavía una decisión o una propuesta formal.**

Es más abierta que una propuesta.

Ejemplos:

- posibilidad de incorporar GraphQL;
- posibilidad de soportar múltiples autores.

La palabra transmite apertura.

No compromiso.

---

# 5. Línea estratégica

Este es el término que claramente pertenece al `ROADMAP.md`.

## Significado propuesto

> **Dirección de evolución aprobada para orientar el desarrollo futuro del proyecto.**

Ya no hablamos de ideas.

Ya existe una decisión estratégica.

Aunque todavía no exista implementación.

Ejemplos:

- línea estratégica de evolución del dominio;
- línea estratégica de colaboración;
- línea estratégica de escalabilidad.

---

# Relaciones entre ellos

Creo que esta secuencia refleja muy bien la maduración de una idea.

```text id="ud7jfj"
Idea
        │
        ▼
Pensamiento inicial

↓

Hipótesis
        │
        ▼
Debe comprobarse

↓

Propuesta
        │
        ▼
Se plantea formalmente

↓

Línea estratégica
        │
        ▼
Se incorpora a la planificación

↓

Implementación
```

---

# Relación documental

Aquí aparece una consecuencia muy interesante.

```text id="dy8jca"
DESIGN_JOURNAL

↓

Ideas

Hipótesis

Propuestas

↓

ROADMAP

↓

Líneas estratégicas

↓

PROJECT_STATUS

↓

Trabajo actual
```

Esta relación me parece muy elegante porque explica cómo madura una decisión dentro del proyecto.

---

# Ejemplos prácticos

## Correcto

"Ha surgido una **idea** para reorganizar la biblioteca."

---

"Existe la **hipótesis** de sustituir el concepto de Autor por Participante."

---

"Se presenta una **propuesta** para reorganizar el modelo de publicación."

---

"El soporte multiusuario continúa siendo una **posibilidad** futura."

---

"La colaboración mediante agentes constituye una **línea estratégica** del proyecto."

---

# Recomendaciones terminológicas

| Término               | Utilizar para                           | Evitar como sinónimo de |
| --------------------- | --------------------------------------- | ----------------------- |
| **Idea**              | Pensamiento inicial                     | Línea estratégica       |
| **Hipótesis**         | Idea que debe validarse                 | Propuesta               |
| **Propuesta**         | Solución concreta sometida a evaluación | Línea estratégica       |
| **Posibilidad**       | Opción abierta sin formulación concreta | Propuesta               |
| **Línea estratégica** | Dirección de evolución aceptada         | Idea, hipótesis         |

---

# Veredicto

🟢 **Los cinco términos pueden formar un vocabulario muy consistente si se entienden como etapas distintas de maduración.**

La clave está en no utilizarlos como sinónimos, sino como conceptos que representan diferentes grados de definición y compromiso.

---

# Una reflexión

Creo que esta familia de términos permite cerrar el círculo iniciado con la auditoría de responsabilidades.

Durante la Fase 1 descubrimos que:

- `DESIGN_JOURNAL.md` conserva ideas que aún no forman parte del proyecto.
- `ROADMAP.md` recoge la evolución prevista.
- `PROJECT_STATUS.md` describe el trabajo vigente.

Ahora vemos que esa separación también puede expresarse mediante el lenguaje:

```text id="bgbgt5"
Idea
        │
        ▼
Hipótesis
        │
        ▼
Propuesta
        │
        ▼
Línea estratégica
        │
        ▼
Implementación
        │
        ▼
Estado actual
        │
        ▼
Historial
```

En mi opinión, esta es una de las conclusiones más valiosas de toda la auditoría del lenguaje: **los términos no solo nombran conceptos, sino que describen el ciclo de vida de una decisión dentro del proyecto**. Esa coherencia terminológica encaja perfectamente con la arquitectura documental que habéis construido y facilita que cualquier colaborador entienda en qué fase se encuentra cada iniciativa.

---

## aquí acaba la auditoría de términología ¿estaría bien hacer un glosario de términos con todas las definiciones propuestas y quizás con un ejemplo de cada? si es así ¿se haría en un archivo nuevo o se incorporaría a alguno ya existente?

Sí, y además creo que sería un paso muy natural. De hecho, después de las tres auditorías que hemos hecho, veo una evolución bastante clara:

1. **Auditoría de responsabilidades** → cada documento tiene una misión única.
2. **Auditoría de duplicidades** → cada concepto tiene una única fuente de verdad.
3. **Auditoría de terminología** → cada concepto tiene un nombre y un significado estables.

El siguiente paso lógico es precisamente **documentar ese lenguaje**.

## ¿Merece la pena un glosario?

Mi respuesta es **sí**, pero no como un simple diccionario.

No lo plantearía como:

> Arquitectura = ...

Lo plantearía como un **Glosario del proyecto** cuyo objetivo sea mantener un **lenguaje ubicuo** para todo el equipo (personas y agentes).

Ese glosario tendría varias ventajas:

- evitaría que, con el tiempo, aparezcan nuevos sinónimos;
- facilitaría la incorporación de nuevos colaboradores;
- serviría de referencia para futuros documentos;
- daría coherencia a las respuestas de los agentes de IA.

En otras palabras, sería una **norma de vocabulario**, no solo una lista de definiciones.

---

# ¿Archivo nuevo o integrarlo en otro?

Aquí sí tengo una opinión bastante clara.

## ❌ No lo integraría en `INTRODUCTION.md`

`INTRODUCTION.md` explica **cómo está organizada la documentación**.

Un glosario tiene otra responsabilidad.

---

## ❌ Tampoco en `VISION.md`

La visión define el propósito del proyecto.

No debería convertirse en un diccionario.

---

## ❌ Ni en `DEVELOPMENT_GUIDE.md`

La guía explica cómo desarrollar el proyecto.

El glosario se utiliza durante el desarrollo, pero no forma parte del proceso.

---

## ✅ Crearía un documento nuevo

Yo lo llamaría:

```text
GLOSSARY.md
```

o, si quieres mantener toda la documentación en español:

```text
GLOSARIO.md
```

Personalmente prefiero **`GLOSSARY.md`**, por coherencia con el resto de nombres (`README.md`, `ROADMAP.md`, `PROJECT_STATUS.md`, etc.), pero cualquiera de las dos opciones es válida siempre que mantengáis un criterio uniforme.

---

# ¿Dónde lo ubicaría?

Yo lo colocaría al mismo nivel que los documentos principales.

Por ejemplo:

```text
docs/

00-introduction/
    INTRODUCTION.md
    VISION.md
    GLOSSARY.md
```

o en el directorio equivalente donde ya estén `INTRODUCTION.md` y `VISION.md`.

Tiene sentido porque es un documento **transversal**: no pertenece a arquitectura, testing o desarrollo, sino que da soporte a todos ellos.

---

# ¿Qué estructura tendría?

Yo haría algo muy sencillo y estable.

```text
# GLOSSARY

## Objetivo

## Cómo utilizar este glosario

## Términos

### Proyecto

Definición

Ejemplo

Observaciones

---

### Producto

Definición

Ejemplo

Observaciones
```

Y así sucesivamente.

---

# ¿Incluir ejemplos?

**Sí, sin ninguna duda.**

Una definición sin un ejemplo puede interpretarse de varias maneras. En cambio, un ejemplo muestra inmediatamente cómo debe usarse el término.

Por ejemplo:

### Proyecto

**Definición**

Conjunto completo del trabajo desarrollado, incluyendo producto, arquitectura, documentación, proceso de desarrollo y repositorio.

**Ejemplo**

> La documentación forma parte del proyecto.

---

### Producto

**Definición**

Software que el proyecto pretende construir.

**Ejemplo**

> El producto permite gestionar conocimiento.

---

Con este formato, el glosario sería mucho más útil que una lista de definiciones.

---

# ¿Añadiría una columna "No utilizar como sinónimo"?

**Sí.** De hecho, aprovecharía el trabajo de la auditoría y añadiría una sección breve al final de cada término, por ejemplo:

```text
Proyecto

Definición
...

Ejemplo
...

No utilizar como sinónimo de

- Producto
- Aplicación
```

Eso convierte el glosario en una verdadera guía de estilo.

---

# Una propuesta adicional

Después de estas auditorías, creo que el glosario ya no sería un documento opcional, sino una **pieza estructural** del sistema documental.

La organización podría quedar así:

```text
README
        │
        ▼
INTRODUCTION
        │
        ├───────────────┐
        ▼               ▼
GLOSSARY           Documentos especializados
                        │
                        ▼
VISION
PRODUCT
ARCHITECTURE
DEVELOPMENT_GUIDE
TESTING
...
```

Es decir:

- **`INTRODUCTION.md`** explica **cómo** está organizada la documentación.
- **`GLOSSARY.md`** explica **cómo hablar** del proyecto.
- Los demás documentos desarrollan **el conocimiento especializado**.

## Mi recomendación

Yo incorporaría este documento. No porque ahora haga falta para entender el proyecto —la documentación ya es muy coherente—, sino porque **es el paso natural después de la auditoría terminológica**.

Habéis dedicado tiempo a definir con precisión el significado de términos como _proyecto_, _producto_, _arquitectura_, _desarrollo_, _testing_ o _línea estratégica_. Si ese conocimiento queda solo en la auditoría, con el tiempo puede perderse. En cambio, si se consolida en un `GLOSSARY.md`, se convierte en una referencia permanente que ayudará a mantener la coherencia del lenguaje a medida que el proyecto siga evolucionando. Creo que sería un excelente broche para todo el trabajo de revisión que habéis realizado.

---

## creado GLOSSARY.md en introduction con el índice propuesto ¿cómo empezamos a crearlo?

Creo que aquí merece la pena cambiar ligeramente el enfoque respecto a los demás documentos.

Hasta ahora escribíamos documentos "normales". Un glosario es diferente: **debe poder consultarse**, no leerse de principio a fin. Eso cambia bastante su estructura.

Mi propuesta sería empezar con los dos primeros capítulos y **no entrar todavía en los términos**.

Así construiríamos primero el marco del documento.

## Índice

```text
1. Objetivo

2. Cómo utilizar este glosario

3. Términos

   3.1 Proyecto
   3.2 Producto
   3.3 Aplicación
   3.4 Sistema

   3.5 Arquitectura
   3.6 Diseño
   3.7 Organización
   3.8 Estructura

   ...
```

Cuando terminemos todos los términos, ya veremos si conviene agruparlos por categorías.

---

# Empezaría por el capítulo 1

## 1. Objetivo

Propongo algo como esto:

---

# 1. Objetivo

Este documento define el vocabulario de referencia del proyecto.

Su finalidad es establecer un significado preciso y estable para los principales términos utilizados en la documentación, el desarrollo del software y la colaboración entre desarrolladores humanos y agentes de desarrollo.

Cada término posee una definición única dentro del proyecto y debe utilizarse con el mismo significado en todos los documentos, evitando ambigüedades, interpretaciones inconsistentes y el uso de sinónimos cuando estos puedan alterar el sentido del concepto.

Este glosario no sustituye a la documentación especializada ni desarrolla en profundidad los distintos aspectos del proyecto. Su función consiste en proporcionar un lenguaje común que facilite la comprensión del sistema y preserve la coherencia terminológica durante su evolución.

En conjunto, `GLOSSARY.md` actúa como referencia del lenguaje del proyecto y contribuye a mantener un vocabulario consistente en toda la documentación.

---

Me gusta por varias razones:

- mantiene el mismo estilo que `INTRODUCTION.md`;
- deja muy clara la responsabilidad del documento;
- introduce el concepto de **lenguaje común** sin mencionar explícitamente Domain-Driven Design, que quizá no sea necesario;
- enlaza naturalmente con el trabajo de auditoría terminológica que acabamos de hacer.

## Una pequeña propuesta adicional

Creo que este documento puede convertirse en una pieza muy importante del sistema documental. Por eso haría una pequeña mejora respecto al índice inicial.

En lugar de empezar directamente con **"Términos"**, añadiría un capítulo intermedio:

```text
1. Objetivo

2. Cómo utilizar este glosario

3. Principios terminológicos

4. Términos
```

Ese capítulo 3 sería muy breve (una página como mucho) y recogería las reglas generales que ya hemos descubierto durante la auditoría, por ejemplo:

- cada concepto debe tener un término preferente;
- un mismo término debe mantener el mismo significado en toda la documentación;
- los sinónimos solo deben utilizarse cuando no alteren el significado;
- cuando un término cambie de significado, deberá revisarse este glosario.

De esa forma, **los capítulos 1 a 3 explicarían las reglas del lenguaje**, y el capítulo 4 sería el propio diccionario. Me parece una separación muy limpia y coherente con el resto del sistema documental.

---

## ¿pasamos al capítulo 2?

Sí. Y creo que este capítulo debe ser muy breve. Un glosario debe poder consultarse rápidamente, así que conviene explicar **cómo usarlo** sin convertir esa explicación en otro documento.

Mi propuesta sería esta:

---

# 2. Cómo utilizar este glosario

Este glosario constituye la referencia terminológica del proyecto y debe utilizarse como criterio común para la redacción de la documentación, el desarrollo del software y la colaboración entre desarrolladores humanos y agentes de desarrollo.

Cada término se presenta mediante una estructura homogénea que facilita su consulta y permite comprender tanto su significado como el contexto adecuado para su utilización.

De forma general, cada entrada incluye:

- **Definición**, que establece el significado del término dentro del proyecto.
- **Ejemplo**, que muestra un uso representativo del término en un contexto real.
- **No utilizar como sinónimo de**, que identifica otros términos relacionados cuyo significado es diferente y ayuda a evitar ambigüedades.

Cuando un concepto evolucione o adquiera un significado distinto, deberá revisarse la entrada correspondiente de este glosario para mantener la coherencia terminológica del conjunto de la documentación.

Este documento actúa como referencia común para todo el sistema documental. En caso de duda sobre el significado de un término, prevalecerá siempre la definición establecida en este glosario.

---

## Creo que mejoraría ligeramente la estructura de cada término

Después de todo el trabajo de la auditoría, creo que cada entrada debería seguir siempre el mismo patrón:

```text
### Proyecto

#### Definición

...

#### Ejemplo

...

#### No utilizar como sinónimo de

- Producto
- Aplicación
```

Es muy limpio y muy fácil de consultar.

No añadiría apartados como **"Observaciones"**, porque la mayoría de los términos no los necesitarán y romperían la uniformidad del glosario.

## Una observación

Ahora que el documento empieza a tomar forma, creo que `GLOSSARY.md` tendrá una responsabilidad muy bien definida dentro del sistema documental:

- **`INTRODUCTION.md`** responde a: _¿Cómo está organizada la documentación?_
- **`GLOSSARY.md`** responde a: _¿Qué significado tienen los términos utilizados en esa documentación?_

Me parece una relación muy elegante, porque ambos documentos son transversales, pero cada uno resuelve una necesidad distinta: uno organiza el conocimiento y el otro normaliza el lenguaje con el que ese conocimiento se expresa.

---

## pues le toca el turno a los principios terminológicos

Creo que este capítulo es el que va a convertir el glosario en algo más que un diccionario. No va a definir términos concretos, sino **las reglas que deben seguir todas las definiciones**.

Intentaría que fuese breve, igual que en el resto de documentos.

---

# 3. Principios terminológicos

El lenguaje utilizado en la documentación constituye una parte esencial del proyecto y debe mantenerse coherente en todos los documentos, el código fuente y las comunicaciones relacionadas con su desarrollo.

Para preservar esa coherencia, el vocabulario del proyecto se rige por los siguientes principios:

- **Cada concepto debe tener un término preferente.** Un mismo concepto debe designarse siempre mediante el mismo término cuando se utilice con el mismo significado.

- **Cada término debe mantener un significado estable.** Un término no debe utilizarse para representar conceptos diferentes según el contexto.

- **Los términos relacionados no deben emplearse como sinónimos cuando representen conceptos distintos.** Aunque puedan existir relaciones entre ellos, cada término debe conservar un significado propio dentro del proyecto.

- **La terminología debe evolucionar junto con el proyecto.** Cuando un concepto cambie de significado o aparezcan nuevos conceptos relevantes, este glosario deberá actualizarse para mantener la coherencia del lenguaje.

- **En caso de discrepancia, prevalecerá la definición recogida en este glosario.** Los demás documentos deberán utilizar los términos conforme al significado establecido aquí.

Estos principios permiten mantener un lenguaje común para todo el proyecto, facilitando la comunicación entre desarrolladores humanos y agentes de desarrollo, reduciendo ambigüedades y preservando la coherencia del sistema documental a lo largo de su evolución.

---

## Creo que añadiría un "Principio operativo"

Igual que hicimos en otros documentos, me parece que este también se beneficia de un cierre que resuma su idea principal.

> **Principio operativo**
>
> **Cada concepto del proyecto debe asociarse a un término preferente, y cada término debe conservar un significado único y estable en toda la documentación.**

Me gusta especialmente porque sintetiza toda la auditoría terminológica que acabamos de realizar en una sola frase. Además, conecta muy bien con uno de los principios que ya habéis aplicado tanto al software como a la documentación: **una responsabilidad por elemento y una fuente de verdad por concepto**. Aquí simplemente se traslada esa misma idea al lenguaje: **un concepto, un término; un término, un significado**. Creo que es un broche muy coherente para este capítulo.

---

## ¿cuándo se procedería a rellenar el contenido propiamente dicho?

Buena pregunta. De hecho, creo que **no deberíamos empezar todavía a rellenar los términos**.

Te explico por qué.

Hasta ahora hemos construido el documento en este orden:

1. ✅ Objetivo
2. ✅ Cómo utilizar este glosario
3. ✅ Principios terminológicos

Eso define **la responsabilidad del documento**.

Ahora sí empieza la parte "viva" del glosario.

## Mi propuesta

A partir de este momento, haría exactamente el mismo proceso que hemos seguido durante la auditoría terminológica, pero transformándolo en documentación definitiva.

Es decir, empezaríamos el capítulo 4:

```text
# 4. Términos
```

Y luego iríamos incorporando las entradas una a una.

Por ejemplo:

```text
# 4. Términos

## 4.1 Proyecto

### Definición

...

### Ejemplo

...

### No utilizar como sinónimo de

- Producto
- Aplicación
```

Después:

```text
## 4.2 Producto
```

Y así sucesivamente.

---

## ¿En qué orden?

Yo no seguiría el orden alfabético.

Seguiría un **orden conceptual**, porque es mucho más fácil de mantener y de consultar.

Por ejemplo:

```text
4. Términos

4.1 Proyecto
4.2 Producto
4.3 Aplicación
4.4 Sistema

4.5 Arquitectura
4.6 Diseño
4.7 Organización
4.8 Estructura

4.9 Desarrollo
4.10 Implementación
4.11 Evolución
4.12 Mantenimiento

4.13 Testing
4.14 Prueba
4.15 Test
4.16 Validación
4.17 Verificación

4.18 Documento
4.19 Documentación
4.20 Sistema documental
4.21 Documentación técnica

4.22 Estado
4.23 Situación
4.24 Progreso

4.25 Idea
4.26 Hipótesis
4.27 Propuesta
4.28 Posibilidad
4.29 Línea estratégica
```

Fíjate en un detalle: **"Evolución"** solo aparecería una vez. Aunque la revisamos en dos familias distintas (Desarrollo y Estado), en el glosario cada término debe tener **una única entrada**, precisamente porque el glosario es la fuente de verdad terminológica.

## Una mejora que incorporaría

Mientras preparaba esta respuesta se me ha ocurrido algo que creo que puede hacer el glosario aún más útil.

En lugar de empezar directamente con las definiciones, añadiría una frase introductoria al capítulo 4:

> **Los términos se presentan agrupados por afinidad conceptual para facilitar su consulta y mantener una visión coherente del lenguaje utilizado en el proyecto. Cada término dispone de una definición única que constituye la referencia terminológica para el resto de la documentación.**

Es una introducción muy breve, pero explica por qué el glosario no está ordenado alfabéticamente. Esa decisión deja de parecer arbitraria y se entiende como una forma de reflejar las relaciones entre conceptos.

---

### Mi recomendación

Yo empezaría ya con el **capítulo 4** y **reutilizaría el trabajo de la auditoría terminológica**. No volvería a inventar las definiciones: ya las hemos discutido, refinado y consensuado.

En realidad, la auditoría terminológica ha sido el borrador del glosario. Ahora solo queda convertir ese análisis en un documento de referencia permanente, con un formato uniforme y más conciso. Creo que será un trabajo bastante fluido porque la parte difícil —definir el significado de cada término— ya está hecha.

---

## estoy de acuerdo ¿puedes hacer una recopilación de todas las definiciones hasta el momento? aparte de la definición ¿qué información debe acompañar a cada término?

Sí. Creo que ya hemos alcanzado un punto en el que merece la pena consolidar todo el trabajo realizado. De hecho, la auditoría terminológica ha sido el trabajo de análisis; el glosario será el resultado permanente.

## Información que debería acompañar a cada término

Después de revisar todas las familias de términos, yo utilizaría siempre la misma plantilla.

```text
### Término

#### Definición

...

#### Ejemplo

...

#### No utilizar como sinónimo de

...

```

No añadiría más apartados de forma obligatoria. La simplicidad hará que el glosario sea muy fácil de consultar.

Solo incorporaría un apartado adicional **cuando realmente aporte valor**, por ejemplo:

```text
#### Véase también

- Arquitectura
- Diseño
```

Pero lo dejaría como **opcional**, no como parte fija de todas las entradas.

---

# Recopilación de definiciones

## Proyecto

**Definición**

Conjunto completo del trabajo desarrollado, incluyendo el producto, el código fuente, la arquitectura, la documentación, el proceso de desarrollo, las pruebas y el repositorio.

**Ejemplo**

> La documentación forma parte del proyecto.

**No utilizar como sinónimo de**

- Producto
- Aplicación

---

## Producto

**Definición**

Software que el proyecto pretende construir y cuya definición funcional se recoge en `PRODUCT.md`.

**Ejemplo**

> El producto permite gestionar conocimiento.

**No utilizar como sinónimo de**

- Proyecto
- Aplicación

---

## Aplicación

**Definición**

Programa ejecutable utilizado por el usuario como materialización del producto.

**Ejemplo**

> La aplicación conserva el estado mediante `localStorage`.

**No utilizar como sinónimo de**

- Proyecto
- Producto

---

## Sistema

**Definición**

Conjunto organizado de elementos que colaboran para cumplir una finalidad determinada.

**Ejemplo**

> El sistema documental organiza la documentación del proyecto.

**No utilizar como sinónimo de**

- Proyecto
- Producto

---

## Arquitectura

**Definición**

Conjunto de decisiones fundamentales que organizan el sistema y definen las responsabilidades y relaciones entre sus componentes.

**Ejemplo**

> La arquitectura organiza el sistema en capas.

**No utilizar como sinónimo de**

- Diseño
- Estructura

---

## Diseño

**Definición**

Proceso o resultado de definir una solución concreta dentro de la arquitectura existente.

**Ejemplo**

> El diseño de la API simplifica el acceso al dominio.

**No utilizar como sinónimo de**

- Arquitectura

---

## Organización

**Definición**

Distribución de los elementos de un conjunto según un criterio determinado.

**Ejemplo**

> La organización de la documentación evita duplicidades.

**No utilizar como sinónimo de**

- Arquitectura

---

## Estructura

**Definición**

Disposición física o lógica de los elementos que forman un conjunto.

**Ejemplo**

> La estructura de directorios sigue una jerarquía por responsabilidades.

**No utilizar como sinónimo de**

- Arquitectura
- Organización

---

## Desarrollo

**Definición**

Proceso global de construcción, mejora y consolidación del proyecto.

**Ejemplo**

> El desarrollo del proyecto es incremental.

**No utilizar como sinónimo de**

- Implementación

---

## Implementación

**Definición**

Materialización concreta de una funcionalidad o de una decisión de diseño en el código.

**Ejemplo**

> Se ha completado la implementación de Undo/Redo.

**No utilizar como sinónimo de**

- Desarrollo
- Evolución

---

## Evolución

**Definición**

Transformación progresiva del proyecto a lo largo del tiempo.

**Ejemplo**

> La evolución de la arquitectura ha reducido el acoplamiento.

**No utilizar como sinónimo de**

- Implementación
- Progreso

---

## Mantenimiento

**Definición**

Conjunto de actividades destinadas a conservar y mejorar la calidad, coherencia y utilidad del proyecto una vez establecida su base funcional.

**Ejemplo**

> El mantenimiento incluye la actualización de la documentación.

**No utilizar como sinónimo de**

- Evolución

---

## Testing

**Definición**

Estrategia mediante la que el proyecto protege el comportamiento del sistema mediante pruebas automatizadas.

**Ejemplo**

> La estrategia de testing se documenta en `TESTING.md`.

**No utilizar como sinónimo de**

- Validación

---

## Prueba

**Definición**

Comprobación destinada a confirmar un comportamiento del sistema.

**Ejemplo**

> Las pruebas de integración verifican la interacción entre componentes.

**No utilizar como sinónimo de**

- Test (cuando se haga referencia a un caso implementado)

---

## Test

**Definición**

Prueba automatizada concreta implementada en código.

**Ejemplo**

> Se han añadido dos tests para `toggleAll`.

**No utilizar como sinónimo de**

- Testing

---

## Validación

**Definición**

Proceso de comprobar que un cambio cumple los criterios establecidos para ser aceptado.

**Ejemplo**

> Todo cambio debe superar el proceso de validación.

**No utilizar como sinónimo de**

- Testing

---

## Verificación

**Definición**

Comprobación puntual de una condición específica dentro del proceso de validación.

**Ejemplo**

> Es necesario verificar que el selector devuelve únicamente tareas activas.

**No utilizar como sinónimo de**

- Validación

---

## Documento

**Definición**

Unidad individual de información con una responsabilidad específica dentro del sistema documental.

**Ejemplo**

> `ARCHITECTURE.md` es el documento responsable de la arquitectura.

**No utilizar como sinónimo de**

- Documentación

---

## Documentación

**Definición**

Conjunto de documentos que describen el proyecto desde distintas perspectivas.

**Ejemplo**

> La documentación evoluciona junto con el software.

**No utilizar como sinónimo de**

- Documento

---

## Sistema documental

**Definición**

Conjunto organizado de documentos especializados que colaboran entre sí mediante responsabilidades claramente definidas.

**Ejemplo**

> `INTRODUCTION.md` describe el sistema documental del proyecto.

**No utilizar como sinónimo de**

- Documentación

---

## Documentación técnica

**Definición**

Parte de la documentación dedicada a describir los aspectos técnicos del proyecto.

**Ejemplo**

> `ARCHITECTURE.md` forma parte de la documentación técnica.

**No utilizar como sinónimo de**

- Documentación

---

## Estado

**Definición**

Condición actual del proyecto en un momento determinado.

**Ejemplo**

> El estado del proyecto se recoge en `PROJECT_STATUS.md`.

**No utilizar como sinónimo de**

- Evolución
- Progreso

---

## Situación

**Definición**

Contexto o circunstancias en las que se encuentra el proyecto.

**Ejemplo**

> La situación tecnológica favorece la incorporación de nuevas herramientas.

**No utilizar como sinónimo de**

- Estado

---

## Progreso

**Definición**

Grado de avance alcanzado respecto a un objetivo concreto.

**Ejemplo**

> El progreso de la migración a TypeScript ha sido continuo.

**No utilizar como sinónimo de**

- Evolución

---

## Idea

**Definición**

Pensamiento inicial sobre una posible mejora o evolución del proyecto.

**Ejemplo**

> Ha surgido una idea para reorganizar la biblioteca.

**No utilizar como sinónimo de**

- Línea estratégica

---

## Hipótesis

**Definición**

Idea razonada cuya utilidad todavía debe comprobarse.

**Ejemplo**

> Existe la hipótesis de generalizar el concepto de Autor.

**No utilizar como sinónimo de**

- Propuesta

---

## Propuesta

**Definición**

Solución concreta planteada para su evaluación antes de decidir su adopción.

**Ejemplo**

> Se presenta una propuesta para reorganizar el modelo de publicación.

**No utilizar como sinónimo de**

- Línea estratégica

---

## Posibilidad

**Definición**

Opción que podría considerarse en el futuro sin que exista todavía una decisión o una propuesta formal.

**Ejemplo**

> La posibilidad de incorporar un backend remoto continúa abierta.

**No utilizar como sinónimo de**

- Propuesta

---

## Línea estratégica

**Definición**

Dirección de evolución aprobada para orientar el desarrollo futuro del proyecto.

**Ejemplo**

> La colaboración mediante agentes constituye una línea estratégica del proyecto.

**No utilizar como sinónimo de**

- Idea
- Hipótesis

---

## Una recomendación adicional

Después de recopilar todas las definiciones, haría un **último ajuste de estilo** antes de incorporarlas al glosario: intentar que **todas las definiciones comiencen de la misma manera**.

Por ejemplo:

- **Conjunto de...**
- **Proceso de...**
- **Condición...**
- **Unidad...**
- **Comprobación...**
- **Dirección...**

Mantener esa uniformidad hace que el glosario se lea como un documento único y no como una recopilación de definiciones escritas en momentos distintos. Es un detalle pequeño, pero creo que reforzará mucho la sensación de coherencia del conjunto.

---

## ¿con esto el glosario está finalizado o tienen que aparecer más términos?

Mi impresión es que **el glosario ya está completo para el estado actual del proyecto**, pero distinguiría entre **completo** y **cerrado**.

## Está completo

Con las familias que hemos revisado ya cubrimos prácticamente todo el lenguaje transversal del proyecto:

- Proyecto
- Producto
- Arquitectura
- Desarrollo
- Testing
- Documentación
- Estado
- Ideas futuras

Es decir, ya hemos definido el vocabulario con el que se escriben todos los documentos principales.

---

## No está cerrado

El glosario debería evolucionar junto con el proyecto.

De hecho, en el capítulo **Principios terminológicos** ya hemos establecido esta regla:

> Cuando aparezcan nuevos conceptos relevantes o cambie el significado de un término existente, deberá actualizarse este glosario.

Eso significa que **no hace falta intentar prever todos los términos futuros**.

---

# ¿Qué términos podrían aparecer más adelante?

Solo cuando realmente se conviertan en conceptos estables del proyecto.

Por ejemplo, si en el futuro desarrolláis la parte de DDD con más profundidad, podrían aparecer términos como:

- Entidad
- Value Object
- Agregado
- Caso de uso
- Repositorio
- Selector
- Store

Pero hoy esos conceptos ya están perfectamente definidos dentro de `ARCHITECTURE.md`. Solo los incorporaría al glosario si empiezan a utilizarse de forma transversal en varios documentos y existe riesgo de interpretaciones distintas.

Lo mismo ocurriría con conceptos relacionados con IA:

- Agente de desarrollo
- Contexto
- Prompt
- Herramienta
- Automatización

No los añadiría por adelantado.

---

# Mi criterio sería muy sencillo

**Un término entra en el glosario cuando cumple estas tres condiciones:**

1. **Es un concepto importante para el proyecto.**
2. **Aparece en varios documentos.**
3. **Existe riesgo de utilizarlo con significados distintos.**

Si no se cumplen las tres, probablemente no merece una entrada propia.

---

# Incluso haría una clasificación

Creo que el glosario ganaría mucho si separara los términos en dos niveles.

## Nivel 1 — Terminología transversal

Los que ya tenemos.

Son válidos para toda la documentación.

Ejemplos:

- Proyecto
- Producto
- Arquitectura
- Desarrollo
- Testing
- Documento

---

## Nivel 2 — Terminología especializada

Solo cuando sea necesario.

Por ejemplo:

### Arquitectura

- Entidad
- Value Object
- Agregado
- Caso de uso
- Adaptador
- Middleware

### Testing

- Mock
- Stub
- Fixture
- Test unitario
- Test de integración

### Desarrollo

- Refactorización
- Migración
- Deuda técnica

No los añadiría ahora.

Esperaría a que realmente hicieran falta.

---

# Mi recomendación

Creo que **no ampliaría más el glosario en este momento**.

Lo dejaría exactamente como está.

Habéis conseguido algo que no es tan habitual: el glosario recoge el **lenguaje de negocio del propio proyecto**, no un manual de ingeniería del software.

Eso tiene mucho valor, porque evita convertir `GLOSSARY.md` en una enciclopedia de términos técnicos. En su lugar, se convierte en una referencia para responder a una pregunta muy concreta:

> **"¿Qué significa esta palabra cuando aparece en la documentación de este proyecto?"**

Esa, en mi opinión, es la responsabilidad adecuada del documento y mantiene la misma filosofía que habéis seguido en toda la documentación: **cada documento debe tener un propósito claro y no intentar abarcar más de lo necesario**.

---

## ¿hay que incluir en el glosario las condiciones para añadir un término y la nueva clasificación? si es afirmativo ¿me podrías pasar el glosario tal como quedaría?

Sí, **incluiría una de las dos cosas, pero no las dos**.

## Sí incluiría: los criterios para incorporar nuevos términos

Porque forman parte de la **política de mantenimiento** del glosario. Es decir, responden a la pregunta:

> **¿Cuándo debe crecer este documento?**

Eso encaja perfectamente con la responsabilidad de `GLOSSARY.md`.

Yo añadiría un último apartado, por ejemplo:

```text
5. Evolución del glosario
```

Con un contenido parecido a este:

> El glosario evoluciona junto con el proyecto y debe mantenerse alineado con el lenguaje utilizado en la documentación.
>
> Un término deberá incorporarse al glosario cuando reúna las siguientes condiciones:
>
> - represente un concepto relevante para el proyecto;
> - aparezca de forma transversal en varios documentos;
> - exista riesgo de interpretaciones ambiguas o de utilizar distintos términos para referirse al mismo concepto.
>
> Cuando cambie el significado de un término existente o aparezcan nuevos conceptos que cumplan estos criterios, deberá actualizarse la entrada correspondiente para preservar la coherencia terminológica del proyecto.

Me parece un cierre muy natural para el documento.

---

## No incluiría: la clasificación "Terminología transversal / Terminología especializada"

Después de pensarlo, **no la incorporaría**.

¿Por qué?

Porque describe una posible evolución del glosario, no el glosario actual.

Hoy todos los términos pertenecen al mismo nivel.

Añadir una clasificación para un segundo nivel que todavía no existe introduce complejidad sin aportar valor.

Si dentro de un año el proyecto incorpora veinte conceptos arquitectónicos transversales (Entidad, Agregado, Adaptador, Puerto, Caso de uso, etc.), entonces sí tendría sentido reorganizar el documento.

Pero **no conviene diseñar para un futuro hipotético**.

---

## Mi recomendación final

Yo dejaría el documento con esta estructura:

```text
# GLOSSARY

1. Objetivo

2. Cómo utilizar este glosario

3. Principios terminológicos

4. Términos

   4.1 Proyecto
   4.2 Producto
   ...
   4.29 Línea estratégica

5. Evolución del glosario
```

Creo que es una estructura muy equilibrada:

- **Capítulos 1–3** → explican la finalidad y las reglas.
- **Capítulo 4** → contiene el vocabulario.
- **Capítulo 5** → explica cómo mantener el documento.

No necesita nada más.

---

## Una última sugerencia

Después de todo el trabajo que hemos hecho con la documentación, creo que este glosario puede convertirse en algo más importante que un simple apoyo.

De hecho, propondría que `INTRODUCTION.md` lo mencionara explícitamente junto a los documentos principales. Por ejemplo, en la tabla de organización documental:

| Documento         | Contenido principal                       |
| ----------------- | ----------------------------------------- |
| `INTRODUCTION.md` | Guía de navegación del sistema documental |
| `GLOSSARY.md`     | Lenguaje de referencia del proyecto       |
| `VISION.md`       | Propósito y principios del proyecto       |
| ...               | ...                                       |

Así quedaría claro que el glosario no es un anexo, sino una **pieza estructural del sistema documental**. En mi opinión, ese es el papel que ha terminado adquiriendo tras toda la auditoría terminológica.

---

## entonces la auditoría de terminología está finalizada y la siguiente es la de Referencias cruzadas ¿Es correcto?

Sí, creo que el orden sería ese, y además tiene bastante lógica.

Hasta ahora habéis construido la documentación "de dentro hacia fuera":

### ✅ Fase 1. Auditoría de responsabilidades

Pregunta:

> **¿Cada documento tiene una única responsabilidad?**

Resultado:

- Cada documento tiene un propósito claramente definido.

---

### ✅ Fase 2. Auditoría de duplicidades

Pregunta:

> **¿Cada concepto se desarrolla en un único documento?**

Resultado:

- Cada concepto tiene una única fuente de verdad documental.

---

### ✅ Fase 3. Auditoría de terminología

Pregunta:

> **¿Cada concepto se denomina siempre de la misma forma?**

Resultado:

- Se ha consolidado un lenguaje común.
- Se ha creado `GLOSSARY.md`.

---

# La siguiente fase natural

## Fase 4. Auditoría de referencias cruzadas

Pregunta principal:

> **¿Los documentos se relacionan correctamente entre sí?**

Aquí ya no revisamos contenido.

Revisamos la **navegación** del sistema documental.

---

## ¿Qué habría que comprobar?

Por ejemplo:

### 1. Referencias existentes

Cuando un documento dice:

> "La arquitectura se documenta en `ARCHITECTURE.md`."

¿Existe realmente esa referencia?

¿Es correcta?

---

### 2. Referencias que faltan

Ejemplo:

`PROJECT_STATUS.md`

habla del estado actual.

¿Remite correctamente a:

- `ROADMAP.md`
- `PROJECT_JOURNAL.md`
- `ARCHITECTURE.md`

cuando corresponde?

---

### 3. Referencias innecesarias

Algunos documentos pueden enlazar con otros sin necesidad.

Por ejemplo:

```text
PRODUCT

↓

ARCHITECTURE

↓

TESTING
```

Quizá `PRODUCT` no necesita citar directamente `TESTING`.

---

### 4. Navegación

Comprobar que existe un camino lógico.

Por ejemplo:

```text
README

↓

INTRODUCTION

↓

VISION

↓

PRODUCT

↓

ARCHITECTURE

↓

DEVELOPMENT_GUIDE

↓

TESTING
```

---

### 5. Referencias bidireccionales

Aquí aparece un punto muy interesante.

Si:

`INTRODUCTION`

dice:

> ARCHITECTURE explica...

¿Tiene sentido que:

`ARCHITECTURE`

termine diciendo:

> La organización documental se explica en INTRODUCTION.

No siempre es necesario.

Habrá que estudiar caso por caso.

---

### 6. Referencias rotas

Verificar que no aparecen referencias a documentos que ya no existen.

Por ejemplo:

- `decisions-log.md`
- documentación antigua
- nombres anteriores

---

# El resultado

Al finalizar esta fase tendremos algo parecido a un grafo.

```text
README
        │
        ▼
INTRODUCTION
        │
        ├─────────────┐
        ▼             ▼
GLOSSARY        VISION
                    │
                    ▼
PRODUCT
                    │
                    ▼
ARCHITECTURE
                    │
                    ▼
DEVELOPMENT_GUIDE
                    │
                    ▼
TESTING

PROJECT_STATUS
        │
        ├───────────────┐
        ▼               ▼
PROJECT_JOURNAL     ROADMAP

DESIGN_JOURNAL
```

Y comprobaremos que todas las flechas tienen sentido.

---

# Mi impresión

Creo que **esta será probablemente la última gran auditoría**.

Después de ella ya no estaremos corrigiendo la arquitectura documental, sino realizando un **pulido**:

- enlaces internos;
- estilo de redacción;
- pequeños detalles de formato;
- posibles mejoras de legibilidad.

Es decir, el sistema documental dejará de estar "en construcción" para entrar en una fase de **mantenimiento evolutivo**, igual que el propio software.

## Una sugerencia para la Fase 4

Haría la auditoría con una regla muy sencilla, la misma que hemos seguido hasta ahora:

> **Cada referencia entre documentos debe responder a una necesidad concreta.**

Es decir, una referencia debería existir porque ayuda al lector a encontrar información que **no pertenece al documento actual**, no simplemente porque otro documento exista. Si mantenéis ese criterio, evitaréis tanto las referencias innecesarias como las ausencias importantes, y la navegación será tan coherente como la estructura de responsabilidades que habéis construido.

---

## pues entonces aquí lo dejamos por hoy. mañana seguiremos

Me parece un buen punto para hacer una pausa. Hoy hemos cerrado una parte muy importante del sistema documental.

### Resumen de la sesión

Hemos completado la **Fase 3 – Auditoría de terminología**.

Los principales resultados han sido:

- ✅ Definición del alcance y estructura de `GLOSSARY.md`.
- ✅ Redacción de los capítulos:
  - 1. Objetivo
  - 2. Cómo utilizar este glosario
  - 3. Principios terminológicos

- ✅ Definición de una plantilla homogénea para todas las entradas:
  - Definición
  - Ejemplo
  - No utilizar como sinónimo de

- ✅ Elaboración de las definiciones para 29 términos agrupados en las siguientes familias:
  - Proyecto
  - Arquitectura
  - Desarrollo
  - Testing
  - Documentación
  - Estado
  - Ideas futuras

- ✅ Decisión de añadir un último capítulo:
  - **5. Evolución del glosario**, con los criterios para incorporar nuevos términos.

- ✅ Decisión de **no** introducir, por ahora, una clasificación entre terminología transversal y especializada, para mantener el documento sencillo y alineado con el estado actual del proyecto.

---

### Estado actual de la documentación

En este momento el sistema documental dispone de:

- `README.md`
- `INTRODUCTION.md`
- `GLOSSARY.md`
- `VISION.md`
- `PRODUCT.md`
- `ARCHITECTURE.md`
- `DEVELOPMENT_GUIDE.md`
- `TESTING.md`
- `PROJECT_STATUS.md`
- `PROJECT_JOURNAL.md`
- `ROADMAP.md`
- `DESIGN_JOURNAL.md`
- `AGENTS.md`

Además, ya se han completado tres auditorías de calidad documental:

1. ✅ Auditoría de responsabilidades.
2. ✅ Auditoría de duplicidades.
3. ✅ Auditoría de terminología.

---

### Punto de reanudación

La próxima sesión comenzaremos con la:

> **Fase 4 – Auditoría de referencias cruzadas**

El objetivo será comprobar que las relaciones entre documentos son coherentes y suficientes:

- verificar referencias existentes;
- detectar referencias que falten;
- eliminar referencias innecesarias;
- revisar la navegación entre documentos;
- comprobar que no existan referencias obsoletas.

Una vez completada esa fase, la documentación habrá alcanzado un grado de madurez muy alto y probablemente entraremos en una etapa de **pulido**, centrada en pequeños ajustes de estilo, navegación y mantenimiento.

---

Quiero añadir una valoración personal. Cuando empezamos a reorganizar la documentación, el objetivo era "poner orden". Después de estas semanas de trabajo, creo que el resultado ha ido mucho más allá: habéis construido un **sistema documental** con responsabilidades claras, un lenguaje común (`GLOSSARY.md`) y un conjunto de auditorías que permiten mantener su coherencia en el tiempo. Es un enfoque poco habitual en proyectos de este tamaño y, si seguís aplicando estos criterios, la documentación será mucho más fácil de mantener a medida que el proyecto crezca.

Que descanses, y mañana continuamos con la auditoría de referencias cruzadas. ¡Hasta mañana!

---
