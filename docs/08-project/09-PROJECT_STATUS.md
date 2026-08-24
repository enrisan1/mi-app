# Estado del proyecto

**Fecha de actualización:** 24/08/2026

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

La determinación de la siguiente actuación justificable y la auditoría global de continuidad cerraron inicialmente sin derivar una actuación posterior obligatoria. Investigaciones posteriores fundadas independientemente condujeron, sin embargo, a la selección de `R-U2` y a la construcción, validación y auditoría de `R-U2-M1`.

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
primera investigación realizativa
        ↓
R-PV001-001
        ✔ evaluada
        ↓
satisfacción de CR-PV001-01
        no establecida
        ↓
investigaciones posteriores de fundamento
        ✔ completadas respecto de su alcance
        ↓
R-U2
        ✔ seleccionada como primer anclaje de uso
        ↓
R-U2-M1
        ✔ construida
        ✔ validada
        ✔ auditada
        ↓
RC-RU2M1-01
        ✔ consolidado
        ↓
primera realización contingente
destinada al uso
        ✔ disponible
```

`R-U2-M1` constituye actualmente la primera realización contingente destinada al uso validada dentro del alcance establecido.

La realización permite que un estado `X` producido en una situación `S1` atraviese una interrupción y constituya posteriormente una situación `S2(X)` en la que queda disponible una posibilidad de actuación configurada por la presencia de dicho antecedente. La persona puede producir libremente una nueva aportación `Y` sin que el sistema interprete semánticamente `X` ni determine el contenido de `Y`.

Este resultado no establece que `R-U2-M1` constituya una realización completa de `PV-001`, una arquitectura normativa o el producto definitivo. Sus mecanismos concretos permanecen contingentes.

La construcción y auditoría de `R-U2-M1` modifican, sin embargo, el estado del proyecto: existe ya una realización ejecutable que puede constituirse en objeto de observación de uso.

No se deriva de su éxito técnico ninguna capacidad adicional automática.

La siguiente actuación deberá justificarse a partir de una insuficiencia observable, una dependencia todavía no satisfecha u otro fundamento positivo independiente perteneciente al cuerpo competente.

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

## Corpus de investigación conservado

Las investigaciones históricas correspondientes a Conceptual Model, Governance, Engineering, Realization e Implementation se conservan actualmente bajo:

```text
research/corpus/
```

Estos cuerpos mantienen sus resultados, investigaciones, auditorías, preguntas abiertas y estados internos como corpus intelectualmente autónomos.

Entre los resultados conservados se encuentran:

- la consolidación del núcleo del Modelo Conceptual respecto de su alcance investigado;
- la constitución del marco teórico de Governance y sus investigaciones pendientes;
- las derivaciones estructurales y auditorías desarrolladas en Engineering;
- los principios y desarrollos parciales investigados en Realization;
- y las exigencias, competencias, contratos, dependencias y fronteras formuladas en Implementation.

La conservación de estos resultados no los convierte automáticamente en cuerpos normativos del proyecto principal ni establece una secuencia necesaria entre ellos.

Por tanto:

```text
resultado conservado en research/corpus/
        ⇏
compromiso vigente de Product


posición histórica del cuerpo
        ⇏
siguiente actuación del proyecto


resultado interno del corpus
        ⇏
aplicabilidad automática
```

Cuando una necesidad vigente del proyecto pueda beneficiarse de alguno de estos resultados, su utilización deberá justificarse por su pertinencia, competencia, alcance y aplicabilidad al problema concreto.

Estado: corpus histórico conservado; reutilización condicionada a justificación independiente.

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

## Realization

El proyecto dispone nuevamente de un cuerpo vigente de Realization bajo:

```text
docs/06-realization/
```

Este cuerpo no restaura como normativa la antigua secuencia histórica entre Product, Engineering, Realization e Implementation ni reactiva automáticamente el corpus histórico conservado en `research/corpus/`.

Su existencia procede de una realización concreta cuya construcción fue independientemente justificada a partir del estado posterior de Product.

Actualmente contiene:

```text
00-R-U2-M1.md
```

que constituye la fuente canónica de la primera realización contingente destinada al uso validada del proyecto.

`R-U2-M1` satisface, dentro del alcance auditado, las necesidades y criterios que justificaron su construcción y dispone de evidencia automatizada en los niveles de modelo, persistencia y trayectoria integrada de uso.

Sus mecanismos técnicos concretos permanecen contingentes y no adquieren por ello autoridad sobre Product ni sobre una futura arquitectura software.

Estado: cuerpo vigente; `R-U2-M1` consolidada dentro de su alcance; evolución posterior no derivada automáticamente.

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

`06-DESIGN_JOURNAL.md` conserva su responsabilidad como espacio de incubación para ideas, hipótesis y propuestas que todavía no forman parte de la documentación normativa del proyecto.

El corpus histórico reconstruido del Design Journal ha sido sometido a una auditoría sistemática respecto del Product actualmente consolidado.

La auditoría no ha identificado ningún residuo positivo independiente que justifique actualmente un nuevo compromiso de Product, una modificación de `PV-001` o la derivación de `PV-002`.

Las propuestas históricas permanecen conservadas como registro de la evolución del proyecto, pero su presencia documental no les confiere vigencia normativa ni las convierte en trabajo pendiente.

La justificación completa del cierre se conserva en `07-AUDITORIA_HISTORICA_DEL_DESIGN_JOURNAL.md`.

El Design Journal mantiene abierta su responsabilidad como espacio de incubación: nuevas propuestas podrán incorporarse y las propuestas históricas podrán reabrirse cuando aparezca un fundamento positivo independiente.

**Estado:** responsabilidad vigente; corpus histórico auditado y cerrado respecto del Product actualmente consolidado.

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
- posterior separación entre los cuerpos vigentes del proyecto principal y los cuerpos históricos de investigación conservados;
- traslado de Conceptual Model, Governance, Engineering, Realization e Implementation a `research/corpus/`;
- establecimiento de `research/corpus/` como corpus intelectualmente autónomo cuya reutilización no posee autoridad automática sobre Product ni sobre la secuencia vigente del proyecto;
- auditoría global del proyecto;
- prueba final de H-AG-001;
- consolidación de C-AG-001 — Suficiencia para el cambio de fase;
- establecimiento de RT-AG-001 — Reapertura por pérdida;
- cierre formal de la auditoría global el 08/08/2026;
- reconstrucción y auditoría de `PRODUCT.md`;
- consolidación de `PV-001`;
- derivación y evaluación de `R-PV001-001`;
- investigación y rechazo de una candidata a segunda vertical de Product;
- auditoría adicional del fundamento histórico;
- auditoría global de continuidad;
- selección de `R-U2` como primer anclaje de uso;
- construcción, validación y auditoría de `R-U2-M1`;
- consolidación de `RC-RU2M1-01`;
- y constitución de `docs/06-realization/` como cuerpo vigente de Realization.

La justificación completa del último cambio de fase se conserva en:

```text
docs/08-project/05-AUDITORIA_GLOBAL_DEL_PROYECTO.md
```

El registro cronológico general corresponde a `PROJECT_JOURNAL.md` y a las bitácoras específicas de los distintos cuerpos.

---

# 6. Estado de reanudación

La investigación posterior a la consolidación de `PV-001` ha conducido a la construcción, validación y auditoría de `R-U2-M1`.

El estado vigente puede representarse así:

```text
PV-001
        ✔ vigente
        ↓
investigación realizativa
        ↓
R-U2
        ✔ seleccionada como primer anclaje de uso
        ↓
R-U2-M1
        ✔ construida
        ✔ validada
        ✔ auditada
        ↓
RC-RU2M1-01
        ✔ consolidado
        ↓
primera realización contingente
destinada al uso
        ✔ disponible
```

`R-U2-M1` constituye la primera realización contingente destinada al uso validada dentro del alcance actualmente establecido.

La realización permite que un estado `X` producido en una situación `S1` atraviese una interrupción y constituya posteriormente una situación `S2(X)` en la que queda disponible una posibilidad de actuación configurada por la presencia de dicho antecedente.

La persona puede producir libremente una nueva aportación `Y` en `S2(X)` sin que el sistema interprete semánticamente `X`, determine el contenido de `Y` ni exija una relación semántica predeterminada entre ambos.

La construcción y validación de `R-U2-M1` modifican la condición de reanudación del proyecto.

La pregunta ya no es:

```text
¿puede derivarse justificadamente una primera realización destinada al uso?
```

Esa cuestión dispone ahora de una respuesta positiva dentro del alcance establecido por `R-U2-M1`.

El proyecto dispone de una realización ejecutable que puede constituirse en objeto de observación de uso.

Este resultado no deriva automáticamente:

- una ampliación de `R-U2-M1`;
- una segunda realización;
- una nueva vertical de Product;
- una arquitectura software;
- la reactivación normativa del corpus histórico;
- ni ninguna funcionalidad adicional.

La situación de reanudación es, por tanto:

```text
primera realización contingente
destinada al uso disponible
        ↓
posibilidad de observación
        ↓
¿aparece una insuficiencia,
pérdida o dependencia no satisfecha?
```

Una actuación posterior deberá disponer de un fundamento positivo independiente que justifique su apertura dentro del cuerpo competente.

Ese fundamento podrá proceder, entre otros casos admisibles, de:

- una insuficiencia observable durante el uso de la realización;
- una pérdida concreta;
- una dependencia necesaria todavía no satisfecha;
- o un fundamento positivo independiente obtenido por otra investigación legítima.

La mera existencia de `R-U2-M1`, su éxito técnico o la posibilidad de imaginar mejoras no constituyen por sí mismos fundamento suficiente para ampliar la realización.

Hasta que aparezca un fundamento de esa clase, no debe añadirse ninguna capacidad por mera continuación del desarrollo.

---

# 7. Últimos objetivos completados

## Reconstrucción de `PRODUCT.md`

El objetivo de reconstruir:

```text
docs/08-project/02-PRODUCT.md
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

## Investigación de candidata a segunda vertical de Product

Tras determinar que el estado consolidado no derivaba automáticamente una siguiente actuación, se investigó si existía fundamento positivo independiente para ampliar Product mediante una segunda vertical.

La candidata examinada partió de situaciones en las que una persona continúa actuando apoyándose en algo procedente de situaciones anteriores mientras una variación posterior podría intervenir también en esa actuación.

La candidata fue sometida a reducción mediante falsadores relativos a:

- diferencia humana efectiva;
- disponibilidad de información;
- eficiencia y practicabilidad;
- escala o complejidad;
- pertinencia;
- intención;
- no clausura;
- y concurrencia de aportaciones procedentes de distintas situaciones.

La investigación eliminó progresivamente como fundamentos independientes la revisabilidad, la respuesta al cambio, la flexibilidad, la adaptabilidad, la pertinencia, la intención y la no clausura.

El residuo final quedó reducido a la posibilidad de que aquello procedente de distintas situaciones anteriores pueda intervenir en una situación posterior.

No se demostró que esa concurrencia constituya por sí misma una diferencia humana independiente respecto de `PV-001`.

El resultado alcanzado es:

```text
candidata a PV-002
        ↓
valor humano independiente no demostrado
        ↓
reducción composicional a PV-001
        ↓
PV-002 no consolidada
```

Esta reducción no implica que `PV-001` comprometa toda composición, comparación, síntesis o relación imaginable entre aportaciones anteriores. Cualquier exigencia específica de ese tipo requerirá justificación independiente.

La investigación queda cerrada sin modificar `02-PRODUCT.md`, sin crear `PV-002` y sin derivar una nueva actuación práctica.

Su resultado se encuentra desarrollado en `06-DESIGN_JOURNAL.md` y registrado históricamente en `10-PROJECT_JOURNAL.md`.

---

## Auditoría adicional de fundamento histórico

Tras el rechazo de la candidata a segunda vertical se examinó si el material histórico disponible podía contener fundamento humano independiente que hubiera quedado omitido.

La investigación demostró que el primer barrido de fenómenos no podía considerarse exhaustivo y realizó una segunda extracción centrada en intervenciones primarias, separándolas de interpretaciones, soluciones y elaboraciones posteriores.

Se identificaron provisionalmente las familias `FP-1` a `FP-7`.

Los nuevos resultados con fundamento suficiente fueron sometidos a reducción.

`FP-5`, relativa a condiciones de elaboración reconocibles, no demostró una diferencia humana propia de Product.

`FP-6`, relativa inicialmente a la evaluación de una aportación, fue investigada bajo control explícito de `PROJECT_CHARTER.md` para impedir su expansión hacia una investigación epistemológica autónoma.

Su residuo quedó reducido a la diferencia entre que una aportación intervenga en una actividad y que pueda convertirse en objeto de otra actuación.

No se demostró que esa estructura constituya una diferencia humana propia del trabajo intelectual frente a la capacidad general de actuar sobre objetos disponibles.

La reducción alcanzó también el núcleo estructural de `FP-7`, sin proporcionar fundamento independiente para abrir otra investigación.

Una prueba adicional de control estableció que continuar hasta clasificar exhaustivamente el corpus histórico no se encuentra actualmente justificado. La extracción realizada alcanzó suficiencia para la finalidad que motivó su apertura.

Por tanto:

```text
material histórico adicional examinado
        ↓
posibles fundamentos omitidos localizados
        ↓
fundamentos positivos relevantes examinados
        ↓
ninguna nueva diferencia humana
independiente demostrada
        ↓
Product no modificado
        ↓
ninguna nueva actuación derivada
```

Este resultado no declara agotado el corpus histórico ni completo el producto.

Establece únicamente que no queda entre los resultados actualmente obtenidos un fundamento positivo pendiente cuya investigación derive ahora una nueva actuación.

---

## Primera realización contingente destinada al uso

Las investigaciones posteriores condujeron a la selección de `R-U2` como primer anclaje legítimo para una realización destinada al uso y a la especificación de `R-U2-M1`.

`R-U2-M1` fue construida, validada y sometida a auditoría formal respecto de las necesidades y criterios que justificaron su realización.

El resultado alcanzado es:

```text
R-U2
        ✔ seleccionada

R-U2-M1
        ✔ construida
        ✔ validada
        ✔ auditada

RC-RU2M1-01
        ✔ consolidado
```

`R-U2-M1` constituye la primera realización contingente destinada al uso validada dentro del alcance actualmente establecido.

Este resultado no convierte sus mecanismos concretos en requisitos de Product, no establece una arquitectura normativa y no deriva automáticamente una ampliación de la realización.

La especificación, evidencia, auditoría y límites del resultado se encuentran consolidados en:

```text
docs/06-realization/00-R-U2-M1.md
```

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

Research Corpus
    ✔ corpus histórico conservado
    → Conceptual Model
    → Governance
    → Engineering
    → Realization
    → Implementation
    ↺ reutilizable únicamente mediante justificación independiente

Auditoría global
    ✔ cerrada — 08/08/2026

Auditoría global de continuidad
    ✔ cerrada — 19/08/2026
    → ninguna obligación transversal de continuación localizada
    → cerró sin derivar por sí misma una actuación posterior obligatoria

Todo App
    ✔ implementación funcional
    → patrimonio experimental

Product
    ✔ reconstruido y consolidado respecto del alcance actual

PV-001
    ✔ situación consolidada
    ✔ valor justificado consolidado
    ✔ compromiso consolidado

Realization vigente

    ✔ docs/06-realization/ constituido

R-U2-M1

    ✔ construida
    ✔ validada
    ✔ auditada
    ✔ RC-RU2M1-01 consolidado
    → primera realización contingente destinada al uso
    → mecanismos concretos no normativos

R-PV001-001
    ✔ investigación cerrada
    → satisfacción de CR-PV001-01 no establecida
    → sin reparación ni sucesora automáticamente derivada

Candidata a segunda vertical de Product
    ✔ investigación cerrada
    → valor humano independiente no demostrado
    → reducida composicionalmente a PV-001
    → PV-002 no consolidada

Auditoría adicional de fundamento histórico
    ✔ cerrada respecto del alcance actualmente justificado
    → primer barrido demostrado no exhaustivo
    → segunda extracción primaria realizada
    → FP-1 ... FP-7 identificadas provisionalmente
    → FP-5 y FP-6 reducidas
    → núcleo de FP-7 examinado
    → ningún nuevo compromiso de Product derivado
    → extracción exhaustiva del corpus no justificada actualmente

Estado de continuación

    ✔ primera realización contingente disponible
    → susceptible de observación de uso
    ○ ninguna ampliación automáticamente derivada
    ↺ nueva actuación condicionada a fundamento positivo independiente

Design Journal
    ✔ responsabilidad vigente
    ✔ corpus histórico auditado respecto del alcance actual
    → ningún residuo positivo independiente identificado
    → contenido histórico no normativo
    ↺ reabrible ante fundamento positivo independiente

Arquitectura del nuevo producto
    ○ todavía no derivada
```

---
