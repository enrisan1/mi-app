# Estado del proyecto

**Fecha de actualización:** 19/08/2026

## Índice

1. Resumen ejecutivo
2. Entorno de desarrollo
3. Estado de la implementación existente
4. Estado técnico y científico
5. Historial reciente
6. Estado de reanudación
7. Últimos objetivos completados
8. Principios consolidados

---

# 1. Resumen ejecutivo

Este documento ofrece una visión actualizada del estado del proyecto y constituye el punto de referencia para retomar su desarrollo.

Su responsabilidad consiste exclusivamente en declarar el estado vigente.

La justificación detallada de dicho estado se encuentra distribuida entre los cuerpos documentales responsables.

`AUDITORIA_GLOBAL_DEL_PROYECTO.md` conserva la justificación del cambio de fase que permitió abandonar la investigación fundamental como actividad principal e iniciar la reconstrucción del producto.

La determinación posterior de la siguiente actuación justificable y la auditoría global de continuidad han confirmado que actualmente no existe ninguna actuación siguiente derivada ni ninguna obligación transversal vigente que exija producirla.

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
R-PV001-001
        ✔ derivada y evaluada
        ↓
satisfacción de CR-PV001-01
        no establecida
        ↓
determinación de la siguiente actuación justificable
        ✔ completada
        ↓
siguiente actuación actualmente derivada
        ninguna
```

La evaluación de `R-PV001-001` no ha falsado `PV-001` ni `CR-PV001-01`, pero tampoco ha permitido establecer probatoriamente que la candidata satisfaga dicho criterio.

El resultado no deriva por sí mismo una obligación de reparar la candidata, construir una nueva realización, seleccionar una nueva vertical ni abrir otra investigación.

La revisión posterior del estado consolidado tampoco ha identificado ningún compromiso superior que exija generar una nueva actuación por el mero hecho de que el proyecto permanezca incompleto, existan posibilidades todavía no exploradas o no haya actualmente una actuación siguiente derivada.

Esto no significa que la investigación haya terminado ni que el proyecto se encuentre completo.

Los cuerpos teóricos permanecen abiertos a nuevas investigaciones cuando aparezca una pérdida concreta que no pueda resolverse mediante los resultados ya consolidados, y podrán aparecer nuevas actuaciones cuando exista un fundamento positivo independiente que justifique su apertura.

El proyecto alcanza así un estado legítimo en el que **no existe actualmente una siguiente actuación derivada**.

Este estado no constituye una clausura definitiva.

Una actuación posterior deberá justificarse a partir de nueva evidencia, una pérdida concreta, una dependencia necesaria demostrada, una nueva selección debidamente justificada dentro de Product u otro fundamento independiente perteneciente al cuerpo competente, sin restaurar como normativa la secuencia histórica hacia Engineering, Architecture, Realization o Implementation.

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

`PROJECT_STATUS.md` refleja el estado global vigente del proyecto, incluyendo los resultados posteriores a la reconstrucción de Product que hayan modificado dicho estado.

`ROADMAP.md` conserva carácter no normativo y ha sido reconstruido respecto del estado actualmente consolidado del proyecto.

Las líneas estratégicas históricas cuya vigencia no había sido demostrada han sido retiradas del estado vigente sin ser declaradas falsas ni trasladadas automáticamente a otros documentos.

Actualmente no existe ninguna línea estratégica concreta vigente. Esta ausencia no constituye una incompletitud documental ni genera por sí misma la obligación de identificar una nueva línea o una nueva actuación.

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

# 6. Estado de reanudación

La auditoría global del proyecto se encuentra cerrada.

La reconstrucción de `PRODUCT.md` derivada de sus resultados también ha sido completada y auditada.

A partir del compromiso consolidado por `PV-001` se derivó y desarrolló la investigación correspondiente a `R-PV001-001`.

La evaluación final de dicha candidata no ha falsado:

```text
PV-001
CR-PV001-01
```

pero tampoco ha permitido establecer probatoriamente que:

```text
R-PV001-001
```

satisfaga:

`CR-PV001-01`.

La insuficiencia probatoria de la candidata ha quedado localizada sin introducir una obligación de reparación, una nueva realización ni una nueva vertical.

La revisión posterior del estado resultante tampoco ha identificado ningún compromiso vigente que exija actualmente:

- `R-PV001-002`
- `PV-002`
- una nueva operacionalización
- una nueva investigación fundamental
- ni otra actuación concreta.

La ausencia de una actuación actualmente derivada no implica:

- que el proyecto se encuentre completo;
- que PV-001 haya dejado de estar vigente;
- que no puedan seleccionarse posteriormente nuevas verticales;
- que no puedan aparecer nuevas pérdidas;
- ni que los cuerpos consolidados hayan quedado definitivamente clausurados.

Implica exclusivamente que el estado actualmente consolidado no proporciona por sí mismo fundamento suficiente para imponer una nueva actuación.

Por tanto:

siguiente actuación actualmente derivada
→ ninguna

No se encuentra justificado continuar automáticamente con Engineering, Architecture, Realization o Implementation por continuidad con la secuencia histórica del proyecto.

Tampoco procede abrir una nueva realización, seleccionar una nueva vertical, ampliar preventivamente los fundamentos o reabrir investigaciones consolidadas por la mera necesidad de mantener el proyecto en movimiento.

Una actuación posterior deberá disponer de un fundamento positivo independiente que justifique su apertura dentro del cuerpo competente.

El proyecto queda, por tanto, en un estado legítimo sin actuación siguiente actualmente derivada y permanece abierto a reanudación cuando aparezca un fundamento que permita justificarla.

---

# 7. Últimos objetivos completados

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

## Determinación de la actuación derivada de `PV-001`

Tras la reconstrucción y consolidación de `PRODUCT.md`, el proyecto investigó qué actuación podía derivarse justificadamente del compromiso establecido por `PV-001` sin presuponer la continuidad de la secuencia histórica entre cuerpos.

La investigación condujo a la derivación y evaluación de:

```text
R-PV001-001
```

respecto de:

`CR-PV001-01`.

La candidata fue sometida a construcción, control crítico y evaluación probatoria.

El resultado final conserva:

`PV-001`
→ no falsada

`CR-PV001-01`
→ no falsado

`R-PV001-001`
→ satisfacción no establecida

sin derivar de ese resultado una obligación de reparación de la candidata.

La revisión del estado resultante comprobó además que no existe actualmente una actuación posterior cuya necesidad pueda derivarse por el mero hecho de haber concluido esta investigación.

En particular:

`R-PV001-002`
→ no derivada

`PV-002`
→ no derivada

nueva investigación fundamental
→ no derivada

otra actuación necesaria
→ no localizada

La determinación de la siguiente actuación justificable queda así completada con un resultado negativo legítimo:

siguiente actuación actualmente derivada
→ ninguna

Este resultado no declara completo ni terminado el proyecto.

Establece únicamente que cualquier actuación posterior deberá justificarse mediante un fundamento positivo independiente.

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

Auditoría global de continuidad
    ✔ cerrada — 19/08/2026
    → ninguna obligación transversal de continuación localizada
    → conserva el estado sin siguiente actuación actualmente derivada

Todo App
    ✔ implementación funcional
    → patrimonio experimental

Product
    ✔ reconstruido y consolidado respecto del alcance actual

PV-001
    ✔ situación consolidada
    ✔ valor justificado consolidado
    ✔ compromiso consolidado

R-PV001-001
    ✔ investigación cerrada
    → satisfacción de CR-PV001-01 no establecida
    → sin reparación ni sucesora automáticamente derivada

Siguiente actuación
    ○ ninguna actualmente derivada
    ↺ reanudable ante fundamento positivo independiente

Design Journal
    ✔ responsabilidad vigente
    ◐ contenido histórico pendiente de reevaluación
    → no normativo

Arquitectura del nuevo producto
    ○ todavía no derivada
```

## Condición de reanudación

La determinación de la siguiente actuación justificable a partir de `PRODUCT.md` y de `PV-001` ha sido completada.

El estado resultante es:

```text
fundamento consolidado
        ↓
PRODUCT.md reconstruido
        ↓
PV-001 consolidada
        ↓
R-PV001-001 derivada y evaluada
        ↓
satisfacción de CR-PV001-01
no establecida
        ↓
ninguna actuación posterior
actualmente derivada
        ↓
```

No existe, por tanto, un punto de continuación obligatorio actualmente establecido.

La reanudación del proyecto requerirá la aparición o identificación de un fundamento positivo independiente que justifique una nueva actuación dentro del cuerpo competente.

Dicho fundamento podrá proceder, entre otros casos compatibles con los compromisos ya consolidados, de:

- una pérdida concreta;
- nueva evidencia relevante;
- una dependencia necesaria demostrada;
- una incompatibilidad entre compromisos;
- o una nueva situación cuya selección como compromiso de Product quede independientemente justificada.

La mera incompletitud del proyecto, la existencia de posibilidades todavía no exploradas o el hecho de no disponer actualmente de una actuación siguiente no constituyen por sí mismos fundamento suficiente para reanudar la derivación.

La ausencia de un punto de continuación obligatorio no constituye una declaración de completitud ni de terminación definitiva del proyecto.

---
