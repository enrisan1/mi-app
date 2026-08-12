# Estado del proyecto

**Fecha de actualización:** 08/08/2026

## Índice

1. Resumen ejecutivo
2. Entorno de desarrollo
3. Estado de la implementación existente
4. Estado técnico y científico
5. Historial reciente
6. Punto de reanudación
7. Próximo objetivo
8. Principios consolidados

---

# 1. Resumen ejecutivo

Este documento ofrece una visión actualizada del estado del proyecto y constituye el punto de referencia para retomar su desarrollo.

Su responsabilidad consiste exclusivamente en declarar el estado vigente.

La justificación detallada de dicho estado se encuentra distribuida entre los cuerpos documentales responsables y, en particular, en `AUDITORIA_GLOBAL_DEL_PROYECTO.md`, que establece el resultado de la última auditoría transversal realizada sobre el proyecto.

El proyecto ha completado una etapa extensa de investigación, consolidación teórica, derivación arquitectónica y reorganización documental.

Como resultado de este proceso existen actualmente cuerpos diferenciados para:

- metodología;
- metateoría;
- modelo conceptual;
- gobierno epistemológico;
- ingeniería;
- realización;
- implementación;
- producto;
- arquitectura software;
- desarrollo.

La auditoría global cerrada el 08/08/2026 determinó que no existía ninguna carencia fundamental cuya resolución debiera preceder necesariamente a la reconstrucción del producto.

A partir de ese resultado, `PRODUCT.md` fue reconstruido y auditado y se consolidó la primera vertical `PV-001`.

El estado alcanzado puede representarse así:

```text
investigación fundamental
como actividad principal
        ↓
fundamento suficiente
        ↓
reconstrucción del producto
        ✔ completada
        ↓
PV-001
        ✔ consolidada
        ↓
determinación de la siguiente actuación justificable
        ?
```

Esto no significa que la investigación haya terminado.

Los cuerpos teóricos permanecen abiertos a nuevas investigaciones cuando aparezca una pérdida concreta que no pueda resolverse mediante los resultados ya consolidados.

El proyecto entra así en una nueva etapa: **derivar la siguiente actuación justificable a partir de los compromisos de producto ya consolidados, sin presuponer qué cuerpo deberá intervenir ni restaurar como normativa la secuencia histórica hacia Engineering, Architecture, Realization o Implementation.**

---

# 2. Entorno de desarrollo

El estado actual del proyecto ha sido desarrollado y validado utilizando el siguiente entorno de trabajo.

## Sistema

```text
Ubuntu 24.04.4 LTS
```

## Herramientas principales

```text
Visual Studio Code
Git 2.43.0
Node.js v20.20.2
npm 10.8.2
Python 3.12.3
```

## Navegador utilizado

```text
Firefox 153.0
```

## Extensiones relevantes

```text
React DevTools
JSONView
uBlock Origin
```

Este apartado tiene carácter exclusivamente informativo y refleja el entorno utilizado durante el desarrollo y las pruebas.

Las instrucciones relativas a instalación, configuración y puesta en marcha corresponden a `DEVELOPMENT_GUIDE.md`.

---

# 3. Estado de la implementación existente

El repositorio conserva una aplicación funcional desarrollada inicialmente como Todo App.

Esta implementación constituye actualmente:

- un prototipo técnico;
- un laboratorio arquitectónico;
- una fuente de experiencia;
- un registro de decisiones de diseño;
- y un conjunto de soluciones técnicas previamente ensayadas.

No debe interpretarse automáticamente como la implementación inicial del producto futuro ni como su arquitectura software prescriptiva.

## Capacidades existentes

La aplicación permite actualmente:

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

- Conservar automáticamente el estado mediante `localStorage`.
- Restaurar el estado al iniciar la aplicación.

### Gestión del estado

La implementación existente contiene, entre otros elementos:

- Store propio;
- reducer;
- casos de uso;
- selectores;
- repositorio de persistencia;
- entidades;
- Value Objects;
- e historial de estados con soporte para Undo y Redo.

### Calidad del software

La implementación dispone de:

- TypeScript;
- pruebas unitarias y de integración;
- validación mediante Vitest;
- separación por responsabilidades;
- y un modelo de dominio desarrollado progresivamente mediante refactorización.

## Estatuto actual

Estas construcciones constituyen **patrimonio experimental del proyecto**.

Podrán conservarse, modificarse, reutilizarse o eliminarse durante la construcción del nuevo producto.

Su permanencia no dependerá de su existencia histórica, sino de que puedan justificarse como realizaciones adecuadas de responsabilidades derivadas para el producto futuro.

Por tanto:

```text
Todo App
        ↓
experiencia + evidencia + soluciones candidatas

no

Todo App
        ↓
arquitectura obligatoria del producto futuro
```

---

# 4. Estado técnico y científico

El proyecto dispone actualmente de una estructura documental organizada en cuerpos con responsabilidades diferenciadas.

## Methodology

La metodología general se considera estable para el trabajo actual.

Proporciona procedimientos para:

- investigación;
- formulación y refutación de hipótesis;
- consolidación;
- reapertura;
- separación documental;
- y construcción de cuerpos teóricos.

El principio CT-1 establece además el procedimiento para derivar marcos teóricos autónomos.

**Estado:** estable.

---

## Metatheory

Las investigaciones MT-001, MT-002 y MT-003 se encuentran cerradas respecto de su alcance investigado.

La metateoría permanece reabrible ante problemas genuinamente transversales que no puedan ser absorbidos por otros cuerpos competentes.

**Estado:** cerrado respecto del alcance investigado y condicionalmente reabrible.

---

## Conceptual Model

El núcleo conceptual se encuentra consolidado respecto del alcance actualmente aceptado.

Existen preguntas abiertas y posibles extensiones, pero ninguna ha demostrado constituir una condición previa para iniciar la reconstrucción del producto.

**Estado:** núcleo consolidado.

---

## Governance

La Teoría del Gobierno Epistemológico dispone de un marco teórico consolidado que delimita su competencia científica.

Sus investigaciones específicas permanecen pendientes.

La auditoría global no ha demostrado que su desarrollo completo constituya una condición previa universal para una primera vertical mínima.

**Estado:** cuerpo teórico constituido; desarrollo científico pendiente.

---

## Engineering

La arquitectura del núcleo ha sido derivada y sometida a auditorías estructurales y fenomenológicas.

Engineering determina responsabilidades arquitectónicas necesarias sin imponer una organización software concreta.

**Estado:** consolidado respecto del alcance actual.

---

## Realization

Se encuentran establecidos principios generales de realización y parte de sus investigaciones específicas.

Permanecen pendientes desarrollos relativos, entre otros, a contratos, preservación del significado, organización y extensibilidad.

Estas cuestiones constituyen pendientes relevantes, pero no se ha demostrado que bloqueen la definición de una primera vertical.

**Estado:** parcialmente desarrollado.

---

## Implementation

Se encuentran establecidas las exigencias realizativas fundamentales del núcleo, incluyendo competencias, contratos arquitectónicos, dependencias permitidas y fronteras.

Implementation restringe las implementaciones válidas sin imponer todavía componentes técnicos concretos.

**Estado:** consolidado respecto de la arquitectura actualmente aceptada.

---

## Project

La documentación de producto ha sido sometida a revisión y reconstrucción a partir de los fundamentos actualmente consolidados.

`PRODUCT.md` ha sido reconstruido y auditado, y establece actualmente la competencia de Product, el mecanismo de establecimiento de compromisos y la primera vertical consolidada `PV-001`.

`PROJECT_STATUS.md` se actualiza mediante el presente documento para reflejar el estado resultante de dicha reconstrucción.

`ROADMAP.md` conserva carácter no normativo y deberá revisarse únicamente cuando exista justificación suficiente para determinar qué propuestas históricas continúan siendo pertinentes respecto del producto actualmente consolidado.

**Estado:** reconstrucción documental de Product completada respecto del alcance actual; evolución posterior abierta a nueva justificación.

---

## Architecture

La documentación arquitectónica existente describe fundamentalmente la evolución técnica de la Todo App.

Conserva valor histórico y experimental, pero no determina automáticamente la arquitectura software del producto futuro.

La arquitectura software del producto futuro no se considera todavía derivada. Su necesidad, alcance y momento de derivación deberán justificarse a partir de los compromisos de producto consolidados y de los problemas concretos que aparezcan, sin presuponer que Architecture deba constituir automáticamente la siguiente actuación del proyecto.

**Estado:** arquitectura histórica conservada; arquitectura del nuevo producto todavía no derivada.

---

## Development

Las guías existentes contienen principios y procedimientos reutilizables, aunque algunas partes presuponen todavía la arquitectura histórica de la Todo App.

Deberán adaptarse cuando exista una nueva arquitectura software concreta.

**Estado:** parcialmente reutilizable y pendiente de futura actualización.

---

## Design Journal

`DESIGN_JOURNAL.md` conserva su responsabilidad como espacio de incubación para ideas, hipótesis y propuestas que todavía no forman parte de la documentación normativa del proyecto.

Parte de su contenido procede de etapas anteriores de la evolución conceptual y deberá tratarse como conjunto de hipótesis históricas susceptibles de reevaluación o rederivación.

Su contenido no constituye una especificación vigente del producto, del dominio ni de la arquitectura.

**Estado:** responsabilidad vigente; contenido histórico sujeto a reevaluación.

---

# 5. Historial reciente

Desde el estado anteriormente reflejado en este documento, el proyecto ha atravesado una transformación sustancial.

Los principales hitos han sido:

- investigación sistemática del dominio;
- construcción y consolidación del Modelo Conceptual;
- identificación y reducción de fenómenos fundamentales;
- derivación de exigencias estructurales;
- establecimiento del perfil funcional;
- formulación de axiomas y conclusiones consolidadas;
- validación y reconstrucción del modelo conceptual;
- investigación de la arquitectura mínima del núcleo;
- derivación de responsabilidades arquitectónicas;
- construcción de matrices de correspondencia y justificación;
- validación fenomenológica del alcance arquitectónico;
- desarrollo de principios de Realization;
- derivación de exigencias de Implementation;
- investigación metateórica;
- cierre de MT-001, MT-002 y MT-003 respecto de sus respectivos alcances;
- incorporación del principio metodológico CT-1;
- constitución formal de Governance como cuerpo teórico autónomo;
- reorganización global de `docs/`;
- separación explícita de Methodology, Metatheory, Conceptual Model, Governance, Engineering, Realization, Implementation, Project, Architecture y Development;
- auditoría global del proyecto;
- prueba final de H-AG-001;
- consolidación de C-AG-001 — Suficiencia para el cambio de fase;
- establecimiento de RT-AG-001 — Reapertura por pérdida;
- y cierre formal de la auditoría global el 08/08/2026.

La justificación completa del último cambio de fase se conserva en:

```text
docs/08-project/AUDITORIA_GLOBAL_DEL_PROYECTO.md
```

El registro cronológico general corresponde a `PROJECT_JOURNAL.md` y a las bitácoras específicas de los distintos cuerpos.

---

# 6. Punto de reanudación

La auditoría global del proyecto se encuentra cerrada.

La reconstrucción de `PRODUCT.md` derivada de sus resultados también ha sido completada y auditada.

Como resultado de dicha reconstrucción:

```text
PRODUCT.md
        ✔ reconstruido y auditado
        ↓
PV-001
        ✔ consolidada
```

No se encuentra justificado continuar automáticamente con Engineering, Architecture, Realization o Implementation por el mero hecho de que esos cuerpos formen parte de la secuencia histórica del proyecto.

Tampoco procede ampliar preventivamente los fundamentos ni reabrir investigaciones consolidadas mientras no aparezca una pérdida concreta que lo justifique.

El punto de reanudación vigente consiste en **determinar cuál es la siguiente actuación justificable a partir del compromiso establecido por `PV-001`**.

La investigación deberá comenzar preguntando qué diferencia debe ser necesariamente realizable para satisfacer dicho compromiso sin introducir estructura, semántica o responsabilidades que Product no haya justificado.

Sólo después de identificar esa necesidad deberá determinarse qué cuerpo posee competencia para tratarla.

---

# 7. Último objetivo completado

## Reconstrucción de `PRODUCT.md`

El objetivo de reconstruir:

```text
docs/08-project/PRODUCT.md
```

a partir del fundamento consolidado ha sido completado.

La reconstrucción fue precedida por:

```text
AUDITORIA_DE_PRODUCTO.md
```

y sometida posteriormente a:

```text
AUDITORIA_DE_RECONSTRUCCION_DE_PRODUCTO.md
```

El resultado alcanzado es:

```text
PRODUCT.md
        ✔ reconstruido

Competencia de Product
        ✔ consolidada

PV-001
        ✔ situación consolidada
        ✔ valor justificado consolidado
        ✔ compromiso consolidado

Auditoría estructural
        ✔ superada

Auditoría global final
        ✔ superada

Auditoría textual final
        ✔ superada
```

La reconstrucción no establece automáticamente cuál debe ser la siguiente actuación del proyecto.

En particular, no permite inferir por sí sola:

```text
PRODUCT
↓ automático
Engineering
```

ni:

```text
PRODUCT
↓ automático
Architecture
```

ni:

```text
PRODUCT
↓ automático
Implementation
```

La siguiente actuación deberá justificarse a partir del estado actualmente consolidado y no por continuidad con la secuencia histórica anterior.

---

# 8. Principios consolidados

La evolución del proyecto ha permitido consolidar principios procedentes tanto de su etapa de desarrollo técnico como de la investigación posterior.

## Separación de responsabilidades

Cada cuerpo, documento, componente o construcción debe asumir una responsabilidad identificable.

La separación no constituye un objetivo puramente organizativo: permite determinar dónde debe justificarse, modificarse o reabrirse cada afirmación.

---

## No modelar conceptos; modelar situaciones

El modelo no debe introducir entidades simplemente porque resulten intuitivas o habituales.

Las construcciones deben justificarse por los fenómenos y situaciones que necesitan explicar.

---

## No trasladar automáticamente conceptos a componentes

La existencia de un concepto teórico no implica que deba existir una clase, módulo, servicio, interfaz o componente equivalente.

La arquitectura debe derivarse de responsabilidades.

---

## Las abstracciones deben justificar su existencia

Una abstracción sólo debe mantenerse cuando aporta una capacidad necesaria o evita una pérdida demostrable.

La complejidad no se justifica por anticipación.

---

## La consolidación no implica irreversibilidad

Un resultado consolidado puede reabrirse cuando aparezca nueva evidencia que demuestre una insuficiencia.

La estabilidad procede de haber resistido las pruebas realizadas, no de impedir futuras revisiones.

---

## Reapertura por pérdida

La investigación fundamental no debe reabrirse por mera posibilidad especulativa.

Debe existir una pérdida concreta que no pueda resolverse mediante los resultados actualmente disponibles.

---

## La arquitectura histórica no es prescriptiva

Las soluciones desarrolladas en la Todo App constituyen evidencia y experiencia.

No constituyen obligaciones para el producto futuro.

Toda reutilización deberá justificarse nuevamente respecto de las responsabilidades que deba realizar.

---

## La construcción debe conservar la trazabilidad de la justificación

Las decisiones relevantes deberían poder reconstruirse mediante una cadena semejante a:

```text
necesidad
        ↓
fenómeno
        ↓
responsabilidad
        ↓
exigencia
        ↓
competencia
        ↓
contrato
        ↓
diseño
        ↓
realización
        ↓
evidencia
```

Cuando esta cadena se interrumpa deberá determinarse si existe una decisión arbitraria o una pérdida que requiera nueva investigación.

---

## Las pruebas proporcionan evidencia durante la evolución

Las pruebas automatizadas continúan siendo fundamentales, pero su organización deberá corresponder a las responsabilidades de la arquitectura que finalmente se derive.

Las pruebas históricas de la Todo App siguen protegiendo la implementación existente mientras ésta permanezca en el repositorio.

---

## La documentación debe evolucionar por responsabilidad

Cada resultado debe incorporarse al documento competente.

No todos los documentos deben modificarse después de cada cambio.

Una modificación sólo debe propagarse cuando cambie información que sea responsabilidad del documento afectado.

---

# Estado actual resumido

```text
Methodology
    ✔ estable

Metatheory
    ✔ MT-001 / MT-002 / MT-003 cerradas
    ↺ reabrible por necesidad

Conceptual Model
    ✔ núcleo consolidado
    ↺ extensible

Governance
    ◐ marco consolidado
    ○ investigación pendiente

Engineering
    ✔ consolidado

Realization
    ◐ parcialmente desarrollado

Implementation
    ✔ consolidado respecto del alcance actual

Auditoría global
    ✔ cerrada — 08/08/2026

Todo App
    ✔ implementación funcional
    → patrimonio experimental

Product
    ✔ reconstruido y consolidado respecto del alcance actual

PV-001
    ✔ situación consolidada
    ✔ valor justificado consolidado
    ✔ compromiso consolidado

Design Journal
    ✔ responsabilidad vigente
    ◐ contenido histórico pendiente de reevaluación
    → no normativo

Arquitectura del nuevo producto
    ○ todavía no derivada
```

## Punto exacto de continuación

> **Determinar cuál es la siguiente actuación justificable del proyecto a partir de `PRODUCT.md` ya reconstruido y de `PV-001`, sin presuponer que la secuencia histórica hacia Engineering, Architecture, Realization o Implementation continúa siendo normativa.**

La determinación deberá comprobar qué cuerpo posee competencia sobre el siguiente problema real que aparezca.

El punto de partida vigente es:

```text
fundamento consolidado
        ↓
PRODUCT.md reconstruido
        ↓
PV-001 consolidada
        ↓
¿qué diferencia debe realizarse ahora
y qué cuerpo tiene competencia sobre ella?
        ↓
SIGUIENTE INVESTIGACIÓN
```

La respuesta no se fija anticipadamente en este documento.

---
