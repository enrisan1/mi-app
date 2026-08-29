# Estado del proyecto

**Fecha de actualización:** 28/08/2026

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

La determinación de la siguiente actuación justificable y la auditoría global
de continuidad cerraron inicialmente sin derivar una actuación posterior
obligatoria. Investigaciones posteriores fundadas independientemente
condujeron a la selección de `R-U2`, a la construcción y consolidación inicial
de `R-U2-M1` y a dos observaciones instrumentales de uso. La primera produjo
una necesidad local demostrada, posteriormente realizada y validada. La
segunda produjo nueva evidencia positiva local y permitió atribuir
técnicamente una restricción contingente de captura, sin derivar una nueva
pérdida necesaria ni una modificación de código. `R-U2-M1` ha quedado
reconsolidada documentalmente dentro de su alcance actual.

Una investigación posterior, abierta mediante fundamento positivo
independiente, examinó si la forma reiterada de la incidencia comprometida
por `PV-001` exigía ampliar `R-U2-M1`, introducir una nueva responsabilidad
realizativa o derivar una nueva realización autónoma.

La investigación ejerció dos aplicaciones locales de `R-U2-M1` enlazadas
mediante una mediación humana trazable y obtuvo evidencia positiva local de
incidencia reiterada por composición.

El resultado no estableció reiterabilidad interna de `R-U2-M1`, una nueva
responsabilidad realizativa, una nueva condición irreducible, una realización
autónoma `R*` ni una modificación de código. La nueva evidencia quedó
reconsolidada en `R-U2-M1` dentro de su alcance.

Posteriormente apareció un nuevo fundamento positivo independiente durante el
examen de una situación en la que una aportación `Y`, producida mediante la
incidencia previa de `X`, debía poder conservar capacidad de incidencia después
de que `X` dejara de estar disponible.

La investigación distinguió esta trayectoria de la reiteración por composición
previamente observada y examinó si la incidencia posterior de `Y` requería
prepararla previamente como antecedente de una nueva aplicación.

Se derivó para ello la realización experimental candidata `R-DX1-M1`, que
mantiene disponibilidades distinguibles de `X` e `Y`, permite retirar `X` sin
reescribir `Y` y conserva `Y` a través de una interrupción instrumentada para
que pueda intervenir posteriormente como antecedente de una nueva actuación.

La candidata fue implementada y validada mediante pruebas prerregistradas:

```text
tests específicos
→ 20/20

suite global
→ 204/204

TypeScript
→ sin errores
```

La investigación corroboró, a nivel de realización ejecutable y dentro del
alcance de `R-DX1-M1`, que la incidencia posterior de Y después de la
indisponibilidad de `X` no requiere necesariamente una preparación previa
`Y → X2`.

La investigación quedó cerrada sin derivar una nueva condición realizativa
irreducible, una modificación de `R-U2-M1`, una nueva responsabilidad normativa,
una modificación de Product ni una arquitectura software.

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
OU-RU2M1-001
        ✔ primera observación instrumental completada
        ↓
F-OU001-01
        ✔ localizado
        ↓
L-OU001-01
        ✔ establecida
        ↓
RU2M1-U01
        ✔ necesidad local derivada
        ↓
MR-U01-01
        ✔ construida
        ✔ validada
        ↓
RV-MR-U01-01
        ✔ validada
        ↓
R-U2-M1
        ✔ primera reconsolidación completada
        ↓
OU-RU2M1-002
        ✔ segunda observación instrumental completada
        ↓
F-OU002-01
        ✔ localizado
        ↓
atribución técnica
        ✔ cerrada
        ↓
restricción contingente de captura
        ✔ localizada
        ↓
R-U2-M1
        ✔ ninguna nueva pérdida necesaria establecida
        ✔ ninguna modificación de código derivada
        ✔ reconsolidada documentalmente dentro de su alcance actual
        ↓
investigación de reiteración por composición
        ✔ cerrada
        ↓
dos aplicaciones locales de R-U2-M1
+
mediación humana trazable
        ✔ trayectoria compuesta observada
        ↓
evidencia positiva local
de incidencia reiterada
        ✔ obtenida
        ↓
R-U2-M1
        ✔ E-RU2M1-08 incorporada
        ✔ CP-RU2M1-11 incorporada
        ✔ reiterabilidad interna no demostrada
        ✔ ninguna realización autónoma R* derivada
        ✔ ninguna modificación de código derivada
        ↓
investigación de incidencia posterior
tras indisponibilidad del antecedente
        ✔ cerrada
        ↓
R-DX1-M1
        ✔ derivada como candidata experimental
        ✔ implementada
        ✔ validada mediante 20/20 tests específicos
        ✔ suite global 204/204
        ✔ TypeScript sin errores
        ✔ trayectoria X → Y / X indisponible / Y → Z ejercida
        ✔ ausencia de preparación previa Y → X2 ejercida
        ✔ H-DX2 corroborada dentro del alcance experimental
        → H-DX3 no corroborada
        → witness experimental ejecutable
        → ninguna modificación de R-U2-M1 derivada
        → ninguna modificación de Product derivada
```

`R-U2-M1` constituye actualmente la primera realización contingente destinada al uso validada dentro del alcance establecido.

La realización permite que un estado `X` producido en una situación `S1` atraviese una interrupción y constituya posteriormente una situación `S2(X)` en la que queda disponible una posibilidad de actuación configurada por la presencia de dicho antecedente. La persona puede producir libremente una nueva aportación `Y` sin que el sistema interprete semánticamente `X` ni determine el contenido de `Y`.

Este resultado no establece que `R-U2-M1` constituya una realización completa de `PV-001`, una arquitectura normativa o el producto definitivo. Sus mecanismos concretos permanecen contingentes.

La primera observación instrumental de `R-U2-M1` produjo evidencia positiva
local de uso y permitió localizar `F-OU001-01`. Su investigación estableció
`L-OU001-01` y derivó `RU2M1-U01`, cuya realización mediante `MR-U01-01` fue
construida y validada antes de la primera reconsolidación de `R-U2-M1`.

Una segunda observación instrumental independiente, `OU-RU2M1-002`,
proporcionó nueva evidencia positiva local de uso y permitió localizar
`F-OU002-01`. Su investigación cerró la atribución técnica de la diferencia
observada y localizó una restricción del mecanismo contingente de captura,
sin establecer una nueva pérdida necesaria de `R-U2-M1` ni una necesidad
suficiente para modificar el código.

Las dos observaciones permanecen como evidencia local y no demuestran
utilidad general de `R-U2-M1`, utilidad para otras personas ni validez para
toda situación de reanudación.

La evolución observada no modifica `PV-001`, no amplía Product, no determina
una arquitectura software y no deriva automáticamente una nueva ampliación
de `R-U2-M1`, una segunda realización ni otra actuación posterior.

La siguiente actuación deberá justificarse a partir de una nueva pérdida,
una dependencia necesaria todavía no satisfecha, una incompatibilidad
demostrada u otro fundamento positivo independiente perteneciente al cuerpo
competente.

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

El proyecto dispone de un cuerpo vigente de Realization bajo:

```text
docs/06-realization/
```

Este cuerpo no restaura como normativa la antigua secuencia histórica entre
Product, Engineering, Realization e Implementation ni reactiva
automáticamente el corpus histórico conservado en `research/corpus/`.

Su existencia procede de una realización concreta cuya construcción fue
independientemente justificada a partir del estado posterior de Product.

Actualmente contiene:

```text
00-R-U2-M1.md
01-protocolo-de-observacion-de-uso-R-U2-M1.md
02-OU-RU2M1-001.md
03-investigacion-F-OU001-01.md
04-investigacion-RU2M1-U01.md
05-OU-RU2M1-002.md
06-investigacion-F-OU002-01.md
07-investigacion-suficiencia-preobservacional-POU-RU2M1-01.md
08-investigacion-reiteracion-por-composicion-R-U2-M1.md
09-investigacion-incidencia-posterior-tras-indisponibilidad-del-antecedente.md
```

`00-R-U2-M1.md` constituye la fuente canónica de la primera realización
contingente destinada al uso validada del proyecto.

Los documentos `01–09` conservan, respectivamente:

- el protocolo mínimo de observación de uso;
- la primera observación instrumental `OU-RU2M1-001`;
- la investigación de atribución de `F-OU001-01`;
- la investigación, construcción y validación de la realización de
  `RU2M1-U01`;
- la segunda observación instrumental `OU-RU2M1-002`;
- la investigación de atribución de `F-OU002-01`;
- la investigación de suficiencia preobservacional de `POU-RU2M1-01`,
  incluida la derivación de su modificación mínima;
- la investigación de reiteración por composición de aplicaciones locales
  de `R-U2-M1`;
- y la investigación de incidencia posterior tras indisponibilidad del
  antecedente, incluida la derivación, implementación, validación y clausura
  de `R-DX1-M1` como witness experimental ejecutable.

`R-U2-M1` satisface, dentro del alcance auditado, las condiciones que
justificaron su construcción y las obligaciones locales posteriormente
derivadas mediante uso.

La primera observación instrumental produjo evidencia positiva local y
permitió localizar `F-OU001-01`.

La investigación posterior estableció la cadena:

```text
F-OU001-01
↓
L-OU001-01
↓
RU2M1-U01
↓
MR-U01-01
↓
RV-MR-U01-01
```

Tras la construcción y validación de `MR-U01-01`, `R-U2-M1` quedó
reconsolidada dentro de su alcance.

Posteriormente se realizó una segunda observación instrumental independiente:

```text
OU-RU2M1-002
↓
F-OU002-01
↓
atribución técnica
↓
restricción contingente de captura localizada
```

La investigación estableció que la diferencia observada se origina en el
mecanismo monolínea utilizado para capturar `X` durante `S1`.

No estableció:

- una violación de `RU2-N03`;
- una violación de `I-RU2M1-04`;
- una nueva pérdida necesaria de `R-U2-M1`;
- ni una necesidad suficiente para modificar el código.

`R-U2-M1` quedó posteriormente reconsolidada documentalmente con esta nueva
evidencia dentro de su alcance actual.

Durante la preparación de `OU-RU2M1-002` se localizó además una cuestión
independiente sobre las condiciones de reaplicación de `POU-RU2M1-01`.

La investigación posterior estableció que la versión entonces examinada del
protocolo exigía comenzar una aplicación completa en `S1`, pero no
operacionalizaba la condición constitutiva ya definida por `R-U2-M1`:

```text
la ejecución destinada a constituir S1
debe comenzar sin X válido restaurado
```

La insuficiencia fue atribuida localmente a `POU-RU2M1-01` y dio lugar a una
modificación mínima del protocolo:

```text
condición preobservacional explícita
+
registro de su cumplimiento en la ficha mínima
```

La revisión no prescribe localStorage, ausencia absoluta de estado previo ni
ningún otro mecanismo técnico concreto.

El protocolo revisado todavía no ha sido ejercido mediante una nueva
aplicación formal y no se ha formulado `RP-POU-RU2M1-02`.

Posteriormente se investigó, con fundamento positivo independiente, si la
reiteración de la incidencia comprometida por `PV-001` exigía una ampliación
de `R-U2-M1` o una nueva realización autónoma.

La investigación obtuvo una trayectoria compuesta mediante dos aplicaciones
locales de `R-U2-M1` enlazadas por una mediación humana trazable.

El resultado proporcionó evidencia positiva local de incidencia reiterada,
pero no estableció reiterabilidad interna de `R-U2-M1`, una nueva
responsabilidad realizativa, una nueva condición irreducible, una realización
autónoma `R*` ni una modificación de código.

Sus mecanismos técnicos concretos permanecen contingentes y no adquieren
por ello autoridad sobre Product ni sobre una futura arquitectura software.

Posteriormente apareció fundamento positivo independiente para investigar una
trayectoria distinta de la composición anterior:

```text
X → Y
↓
Y queda disponible
↓
X deja de estar disponible
↓
interrupción
↓
X continúa indisponible
Y continúa disponible
↓
Y → Z
```

La investigación quedó conservada en:

```text
09-investigacion-incidencia-posterior-tras-indisponibilidad-del-antecedente.md
```

y derivó `R-DX1-M1` como candidata experimental.

La candidata permitió distinguir las disponibilidades de `X` e `Y`, retirar
`X` sin reescribir ni sustituir `Y` y comprobar, después de una interrupción
instrumentada y nuevas lecturas, que `Y` podía producir incidencia posterior.

La trayectoria quedó validada mediante 20/20 tests específicos, 204/204 tests
globales y comprobación de TypeScript sin errores.

`H-DX2` quedó corroborada a nivel de realización ejecutable dentro del alcance
de `R-DX1-M1`: la incidencia posterior de `Y` no requirió su preparación previa
como `X2`.

La investigación quedó cerrada sin derivar una nueva condición realizativa
irreducible, una modificación de `R-U2-M1`, una nueva responsabilidad normativa,
una modificación de Product ni una arquitectura software.

`R-DX1-M1` se conserva exclusivamente como witness experimental ejecutable
dentro del alcance investigado.

Estado:

```text
cuerpo vigente
R-U2-M1
✔ construida
✔ validada
✔ auditada
✔ investigación de reiteración por composición cerrada
✔ evidencia positiva local de incidencia reiterada por composición obtenida
✔ E-RU2M1-08 incorporada
✔ CP-RU2M1-11 incorporada
✔ reiterabilidad interna no demostrada
✔ ninguna realización autónoma R* derivada
✔ primera observación instrumental completada
✔ necesidad local derivada
✔ modificación local construida y validada
✔ primera reconsolidación completada
✔ segunda observación instrumental completada
✔ tercera observación instrumental completada
✔ nueva evidencia positiva local de uso obtenida mediante OU-RU2M1-003
✔ F-OU002-01 atribuida técnicamente
✔ restricción contingente de captura localizada
✔ ninguna nueva pérdida necesaria establecida
✔ ninguna modificación de código derivada
✔ reconsolidada documentalmente dentro de su alcance actual
POU-RU2M1-01
✔ insuficiencia preobservacional local investigada
✔ modificación mínima derivada
✔ condición preobservacional explicitada
✔ trazabilidad incorporada a la ficha
✔ protocolo revisado ejercido mediante OU-RU2M1-003
✔ nueva evidencia formal de aplicación obtenida
✔ RP-POU-RU2M1-02 formulado
→ suficiencia instrumental local de la versión revisada
○ suficiencia general no establecida
R-DX1-M1
✔ investigación correspondiente cerrada
✔ candidata experimental derivada
✔ implementación mínima construida
✔ 20/20 tests específicos
✔ 204/204 tests globales
✔ TypeScript sin errores
✔ incidencia posterior tras indisponibilidad de X ejercida
✔ ausencia de preparación previa Y → X2 ejercida
✔ H-DX2 corroborada dentro del alcance experimental
→ H-DX3 no corroborada
→ conservar como witness experimental ejecutable
→ ninguna ampliación de R-U2-M1 derivada
→ ninguna responsabilidad normativa adicional derivada

evolución posterior
○ no derivada automáticamente
```

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
- y constitución de `docs/06-realization/` como cuerpo vigente de Realization;
- primera observación instrumental de uso `OU-RU2M1-001`;
- derivación, realización y validación de `RU2M1-U01`;
- primera reconsolidación de `R-U2-M1`;
- segunda observación instrumental `OU-RU2M1-002`;
- investigación y atribución de `F-OU002-01`;
- investigación y revisión preobservacional de `POU-RU2M1-01`;
- investigación de reiteración por composición de aplicaciones locales de
  `R-U2-M1`;
- obtención de evidencia positiva local de incidencia reiterada por
  composición;
- y nueva reconsolidación documental de `R-U2-M1` mediante `E-RU2M1-08` y
  `CP-RU2M1-11`;
- investigación de incidencia posterior tras indisponibilidad del antecedente;
- derivación, implementación y validación de la candidata experimental
  `R-DX1-M1`;
- corroboración ejecutable de incidencia posterior de `Y` sin preparación
  previa `Y → X2`;
- auditoría de suficiencia de la evidencia;
- y clausura de la investigación sin nueva responsabilidad normativa ni
  modificación de `R-U2-M1`, Product o Architecture.

La justificación completa del último cambio de fase se conserva en:

```text
docs/08-project/05-AUDITORIA_GLOBAL_DEL_PROYECTO.md
```

El registro cronológico general corresponde a `PROJECT_JOURNAL.md` y a las bitácoras específicas de los distintos cuerpos.

---

# 6. Estado de reanudación

La investigación posterior a la consolidación de `PV-001` condujo a la
construcción, validación y consolidación inicial de `R-U2-M1`.

Posteriormente se completó un primer ciclo de observación y evolución local.

La observación `OU-RU2M1-001` proporcionó evidencia positiva local de uso,
permitió localizar `F-OU001-01` y condujo, mediante su investigación, a
`L-OU001-01` y `RU2M1-U01`.

La necesidad fue realizada mediante `MR-U01-01`, validada mediante
`RV-MR-U01-01` y seguida de una primera reconsolidación de `R-U2-M1`.

Después de esa reconsolidación se realizó una segunda observación
instrumental independiente, `OU-RU2M1-002`.

Esta segunda trayectoria proporcionó nueva evidencia positiva local de uso y
permitió localizar `F-OU002-01`.

La investigación de `F-OU002-01` cerró su atribución técnica y estableció una
restricción del mecanismo contingente de captura actualmente utilizado.

No estableció una nueva pérdida necesaria de `R-U2-M1` ni una necesidad
suficiente para modificar el código.

El estado vigente puede representarse así:

```text
PV-001
        ✔ vigente
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
OU-RU2M1-001
        ✔ completada
        ↓
F-OU001-01
        ✔ localizado
        ↓
L-OU001-01
        ✔ establecida
        ↓
RU2M1-U01
        ✔ derivada
        ↓
MR-U01-01
        ✔ construida
        ✔ validada
        ↓
RV-MR-U01-01
        ✔ validada
        ↓
R-U2-M1
        ✔ primera reconsolidación completada
        ↓
OU-RU2M1-002
        ✔ completada
        ↓
F-OU002-01
        ✔ localizado
        ↓
atribución técnica
        ✔ cerrada
        ↓
restricción contingente de captura
        ✔ localizada
        ↓
R-U2-M1
        ✔ ninguna nueva pérdida necesaria establecida
        ✔ ninguna modificación de código derivada
        ✔ reconsolidada documentalmente dentro de su alcance actual
```

`R-U2-M1` continúa constituyendo la primera realización contingente
destinada al uso validada dentro del alcance actualmente establecido.

Las dos observaciones proporcionan evidencia positiva local de uso, pero no
demuestran utilidad general de `R-U2-M1`, utilidad para otras personas ni
validez para toda situación de reanudación.

El primer ciclo produjo una necesidad local demostrada y justificó una
modificación de la realización.

El segundo ciclo produjo conocimiento adicional sobre un mecanismo
contingente de captura, pero no justificó una nueva modificación de
`R-U2-M1` ni del código.

La misma preparación de `OU-RU2M1-002` dejó, de forma separada, una cuestión
sobre `POU-RU2M1-01`: la realización conservaba un `X` válido restaurado de la
observación anterior y comenzó inicialmente en `S2(X anterior)`, no en el
`S1` requerido para iniciar una nueva trayectoria completa.

La investigación posterior localizó una insuficiencia preobservacional del
protocolo y justificó una modificación mínima exclusivamente documental.

Por tanto:

```text
cuestión protocolaria
↓
investigación de suficiencia preobservacional
↓
condición de S1 reconstruida desde R-U2-M1
↓
insuficiencia local de POU-RU2M1-01
↓
modificación mínima del protocolo
↓
condición preobservacional explicitada
+
registro incorporado a la ficha
```

Esta evolución no modifica `R-U2-M1`, no modifica código y no propaga ninguna
exigencia a Product, Architecture o Methodology.

En particular:

```text
OU-RU2M1-001
↓
pérdida demostrada
↓
modificación justificada

OU-RU2M1-002
↓
diferencia observada
↓
atribución técnica
↓
restricción contingente localizada
↓
ninguna nueva pérdida necesaria demostrada
↓
ninguna modificación de R-U2-M1
ni del código derivada
```

Con posterioridad apareció fundamento positivo independiente para investigar
una cuestión distinta: si la forma reiterada de la incidencia comprometida
por `PV-001` exigía ampliar `R-U2-M1` o derivar una nueva realización.

La investigación quedó conservada en:

```text
08-investigacion-reiteracion-por-composicion-R-U2-M1.md
```

y obtuvo la trayectoria:

```text
aplicación local de R-U2-M1
↓
resultado posterior
↓
mediación humana trazable
↓
nuevo antecedente
↓
segunda aplicación local de R-U2-M1
↓
nueva incidencia local
```

La investigación proporcionó evidencia positiva local de reiteración por
composición.

No estableció:

- reiterabilidad interna de R-U2-M1;
- una nueva responsabilidad realizativa;
- una nueva condición realizativa irreducible;
- una realización autónoma R\*;
- ni una modificación de R-U2-M1 o del código.

Posteriormente apareció un fundamento positivo distinto, relacionado con una
trayectoria que la composición anterior no había ejercido:

```text
X → Y
↓
X deja de estar disponible
↓
Y permanece disponible
↓
Y produce incidencia posterior
```

La investigación correspondiente quedó conservada en:

```text
09-investigacion-incidencia-posterior-tras-indisponibilidad-del-antecedente.md
```

y derivó la candidata experimental `R-DX1-M1`.

La candidata proporcionó un contraejemplo ejecutable frente a la necesidad de:

```text
preparar Y como X2
antes de que X deje de estar disponible
```

La trayectoria fue validada con control negativo, correspondencia
transinterrupción y ausencia de preparación anticipada.

La investigación quedó cerrada con:

```text
H-DX1
→ rechazada

H-DX2
→ corroborada a nivel ejecutable
  dentro de R-DX1-M1

H-DX3
→ no corroborada

H-DX4
→ rechazada como inferencia

suficiencia de la evidencia
→ auditada y aceptada

R-DX1-M1
→ witness experimental ejecutable

R-U2-M1
→ intacta

Product
→ intacto

nueva responsabilidad normativa
→ no derivada
```

Ninguno de estos ciclos deriva automáticamente:

- una nueva ampliación de `R-U2-M1`;
- una segunda realización;
- una nueva vertical de Product;
- una modificación de `PV-001`;
- una arquitectura software;
- la reactivación normativa del corpus histórico;
- ni ninguna funcionalidad adicional.

La situación de reanudación es actualmente:

```text
R-U2-M1
        ✔ observada en tres trayectorias reales independientes
        ✔ modificada cuando apareció una necesidad demostrada
        ✔ segunda evidencia investigada y atribuida
        ✔ investigación de reiteración por composición cerrada
        ✔ evidencia positiva local de incidencia reiterada obtenida
        ✔ E-RU2M1-08 incorporada
        ✔ CP-RU2M1-11 incorporada
        ✔ reiterabilidad interna no demostrada
        ✔ ninguna realización autónoma R* derivada
        ✔ reconsolidada documentalmente

POU-RU2M1-01
        ✔ insuficiencia preobservacional local investigada
        ✔ modificación mínima incorporada
        ✔ revisión ejercida mediante OU-RU2M1-003
        ✔ tercera aplicación formal completada
        ✔ RP-POU-RU2M1-02 formulado
        → suficiencia instrumental local de la versión revisada
        ○ suficiencia general no establecida

OU-RU2M1-003
        ✔ tercera observación instrumental completada
        ✔ condición preobservacional revisada ejercida y satisfecha
        ✔ trayectoria completa observada
        ✔ B — Evidencia positiva local
        ✔ consecuencia: ninguna
        → ninguna modificación de R-U2-M1 derivada
        → ninguna investigación posterior automáticamente derivada

R-DX1-M1
        ✔ investigación derivada desde fundamento positivo independiente
        ✔ implementación experimental mínima construida
        ✔ trayectoria positiva ejercida
        ✔ control negativo ejercido
        ✔ ausencia de preparación previa Y → X2 ejercida
        ✔ H-DX2 corroborada dentro del alcance experimental
        → H-DX3 no corroborada
        ✔ suficiencia de la evidencia auditada
        ✔ investigación cerrada
        → conservar como witness experimental ejecutable
        → ninguna ampliación de R-U2-M1 derivada
        → ninguna responsabilidad normativa adicional derivada
        ↓
ninguna actuación posterior
automáticamente derivada
        ↓
decisión estratégica posterior
        ↓
producir nueva evidencia
mediante uso y nuevas situaciones
        ↓
investigar sólo cuando
la evidencia lo justifique
```

La ausencia de una actuación automáticamente derivada se mantiene como
resultado válido de las investigaciones anteriores.

Posteriormente se ha adoptado una decisión estratégica distinta: orientar la
siguiente etapa hacia la producción de nueva evidencia empírica que permita
aproximar el proyecto a una primera trayectoria humana integrada.

La decisión no introduce por sí misma:

```text
una nueva funcionalidad de Product
✘

una nueva vertical
✘

una ampliación de PV-001
✘

una modificación de R-U2-M1
✘

una arquitectura general
✘

una nueva investigación obligatoria
✘
```

La estrategia fue articulada inicialmente mediante dos carriles paralelos.

La actuación seleccionada para el Carril A ha sido ya completada:

```text
Carril A
→ OU-RU2M1-003 completada y cerrada
→ B — Evidencia positiva local
→ consecuencia: ninguna
→ RP-POU-RU2M1-02 establecido localmente
→ ninguna actuación posterior automáticamente derivada
```

El Carril B conserva su capacidad estratégica vigente:

```text
Carril B
→ nuevas situaciones humanas
→ conservación identificable cuando proceda
  mediante NP-*
→ reducción frente a compromisos vigentes
→ investigación únicamente
  si sobrevive fundamento positivo
```

Podrán coexistir varias investigaciones cuando cada una disponga de fundamento
propio y sus dependencias permanezcan explícitas.

El orden temporal de apertura o cierre no determinará sus dependencias.

Ninguna investigación podrá utilizar como entrada un resultado todavía no
establecido por otra.

La investigación adicional sólo deberá continuar mientras la precisión que
pueda obtenerse sea capaz de cambiar una decisión relevante de Product,
Realization, Architecture o construcción.

Cuando una situación o trayectoria humana esté suficientemente justificada para
ser construida, la construcción y el uso tendrán prioridad sobre continuar
generalizando su teoría sin una decisión concreta que dependa de dicha
generalización.

La arquitectura del nuevo producto seguirá sin considerarse derivada en general.

Su primera derivación deberá producirse únicamente cuando una trayectoria
humana suficientemente justificada identifique responsabilidades o dependencias
que hagan necesaria una solución arquitectónica concreta.

Una actuación posterior deberá disponer de fundamento positivo suficiente
dentro del cuerpo competente.

Ese fundamento podrá proceder, entre otros casos admisibles, de una nueva
evidencia de uso, una pérdida concreta, una dependencia necesaria todavía no
satisfecha, una incompatibilidad demostrada o un fundamento positivo
independiente obtenido mediante otra investigación legítima.

La mera posibilidad de imaginar mejoras, nuevas funcionalidades u otras
realizaciones no constituye por sí misma fundamento suficiente para actuar.

Hasta que aparezca un fundamento de esa clase, no debe añadirse ninguna
capacidad por mera continuación del desarrollo.

---

# 7. Últimos objetivos completados

## Primera realización contingente destinada al uso

Las investigaciones posteriores condujeron a la selección de `R-U2` como
primer anclaje legítimo para una realización destinada al uso y a la
especificación de `R-U2-M1`.

`R-U2-M1` fue construida, validada y sometida a auditoría formal respecto de
las necesidades y criterios que justificaron su realización.

La consolidación inicial produjo:

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

Posteriormente se completó el primer ciclo de observación y evolución local
de la realización:

```text
OU-RU2M1-001
        ✔ completada

F-OU001-01
        ✔ localizado

L-OU001-01
        ✔ establecida

RU2M1-U01
        ✔ derivada

MR-U01-01
        ✔ construida
        ✔ validada

RV-MR-U01-01
        ✔ validada

R-U2-M1
        ✔ primera reconsolidación completada
```

Después de esa reconsolidación se completó una segunda trayectoria real
independiente:

```text
OU-RU2M1-002
        ✔ completada

F-OU002-01
        ✔ localizado

atribución técnica
        ✔ cerrada

restricción contingente de captura
        ✔ localizada

R-U2-M1
        ✔ ninguna nueva pérdida necesaria establecida
        ✔ ninguna modificación de código derivada
        ✔ reconsolidada documentalmente dentro de su alcance actual

POU-RU2M1-01
    ✔ tres aplicaciones completadas
    ✔ suficiencia instrumental inicial conservada
    ✔ insuficiencia preobservacional local establecida
    ✔ investigación correspondiente cerrada
    ✔ modificación mínima derivada
    ✔ condición preobservacional incorporada
    ✔ trazabilidad incorporada a la ficha mínima
    ✔ revisión ejercida mediante OU-RU2M1-003
    ✔ nueva evidencia formal de aplicación obtenida
    ✔ RP-POU-RU2M1-02 formulado
    → suficiencia instrumental local de la versión revisada
    ○ suficiencia general no establecida
```

`OU-RU2M1-002` proporciona una segunda evidencia positiva local de uso
efectivo de `R-U2-M1`.

### Investigación y revisión preobservacional de `POU-RU2M1-01`

Durante la preparación de `OU-RU2M1-002` se observó que la realización
conservaba un `X` válido restaurado de la trayectoria anterior y comenzaba en
`S2(X anterior)`.

La cuestión fue investigada separadamente en:

```text
07-investigacion-suficiencia-preobservacional-POU-RU2M1-01.md
```

La investigación estableció una insuficiencia preobservacional local:
`POU-RU2M1-01` exigía comenzar en `S1`, pero no operacionalizaba la condición
constitutiva correspondiente.

La modificación mínima quedó incorporada al protocolo mediante:

```text
comprobación preobservacional
→ ejecución destinada a S1 iniciada sin X válido restaurado

+
registro de cumplimiento
→ ficha mínima de observación
```

No se prescribió ningún mecanismo técnico concreto.

La revisión fue ejercida posteriormente mediante la nueva aplicación formal
`OU-RU2M1-003`.

La aplicación completó una trayectoria observada bajo la condición
preobservacional revisada, obtuvo clasificación
`B — Evidencia positiva local`, produjo consecuencia `ninguna` y permitió
establecer `RP-POU-RU2M1-02` como resultado local de suficiencia instrumental
de la versión revisada.

Este resultado no establece suficiencia general de `POU-RU2M1-01` ni utilidad
general de `R-U2-M1`.

La investigación de `F-OU002-01` estableció que la diferencia observada se
origina en el mecanismo monolínea utilizado para capturar la aportación
durante `S1`.

La persistencia, el modelo y la restauración no constituyen la causa de esa
diferencia.

La investigación no estableció una violación de `RU2-N03` ni de
`I-RU2M1-04`, una nueva pérdida necesaria de `R-U2-M1` ni una necesidad
suficiente para modificar el código.

`R-U2-M1` continúa constituyendo la primera realización contingente
destinada al uso validada dentro del alcance actualmente establecido.

Las observaciones realizadas no demuestran utilidad general, utilidad para
otras personas ni validez para toda situación de reanudación.

La evolución posterior tampoco convierte los mecanismos concretos de
`R-U2-M1` en requisitos de Product, no modifica `PV-001`, no establece una
arquitectura normativa y no deriva automáticamente una nueva ampliación de
la realización.

La especificación, evidencia, auditoría y estado consolidado vigente se
encuentran en:

```text
docs/06-realization/00-R-U2-M1.md
```

El protocolo, las dos observaciones instrumentales y las investigaciones
posteriores vinculadas directamente a `R-U2-M1` se conservan en los documentos
`01–08` del mismo cuerpo:

```text
01-protocolo-de-observacion-de-uso-R-U2-M1.md
02-OU-RU2M1-001.md
03-investigacion-F-OU001-01.md
04-investigacion-RU2M1-U01.md
05-OU-RU2M1-002.md
06-investigacion-F-OU002-01.md
07-investigacion-suficiencia-preobservacional-POU-RU2M1-01.md
08-investigacion-reiteracion-por-composicion-R-U2-M1.md

09
→ investigación posterior independiente
→ R-DX1-M1
```

### Investigación de reiteración por composición

Una investigación posterior examinó si la reiteración de la incidencia de
`PV-001` exigía una ampliación de `R-U2-M1` o la derivación de una nueva
realización autónoma.

La investigación ejerció dos aplicaciones locales de `R-U2-M1` enlazadas
mediante mediación humana trazable y obtuvo evidencia positiva local de que
la incidencia puede aparecer reiteradamente mediante composición.

La investigación quedó cerrada sin demostrar:

- reiterabilidad interna de `R-U2-M1`;
- una nueva responsabilidad realizativa;
- una nueva condición irreducible;
- una realización autónoma `R*`;
- ni una modificación de código.

El resultado quedó reconsolidado en `00-R-U2-M1.md` mediante
`E-RU2M1-08` y `CP-RU2M1-11`.

### Investigación de incidencia posterior tras indisponibilidad del antecedente

Una investigación posterior examinó una trayectoria distinta de la reiteración
por composición:

```text
X → Y
↓
Y disponible
↓
X indisponible
↓
interrupción
↓
Y disponible
↓
Y → Z
```

La pregunta fue si la incidencia posterior de `Y` requería necesariamente una
preparación previa:

```text
Y → X2
```

La investigación quedó documentada en:

```text
docs/06-realization/09-investigacion-incidencia-posterior-tras-indisponibilidad-del-antecedente.md
```

Se derivó `R-DX1-M1` como candidata experimental mínima.

La implementación y el protocolo ejecutable produjeron:

```text
fase RED
✔ observada

tests específicos
✔ 20/20

suite global
✔ 204/204

TypeScript
✔ sin errores
```

La trayectoria positiva demostró:

```text
X → Y
↓
retirada de X sin reescritura de Y
↓
interrupción
↓
X ausente
Y conservada
↓
Y → Z
```

sin preparación previa de `Y` como nuevo `X`.

El resultado consolidado fue:

```text
H-DX1
→ rechazada

H-DX2
→ corroborada a nivel ejecutable
  dentro de R-DX1-M1

H-DX3
→ no corroborada

H-DX4
→ rechazada como inferencia
```

La auditoría de suficiencia posterior no identificó una diferencia
epistemológica que justificara construir una interfaz o exigir una nueva
validación humana de la misma trayectoria.

La auditoría de clausura determinó:

```text
pregunta principal
→ respondida

criterios de aceptación
→ satisfechos

obligaciones pendientes
→ ninguna

residuo positivo pendiente
→ ninguno actualmente identificado

investigación
→ CERRADA
```

`R-DX1-M1` se conserva como witness experimental ejecutable.

No se derivó una modificación de `R-U2-M1`, Product, Architecture ni una nueva
responsabilidad normativa.

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
    ✔ OU-RU2M1-001 completada
    ✔ RU2M1-U01 derivada
    ✔ MR-U01-01 construida y validada
    ✔ RV-MR-U01-01 validada
    ✔ primera reconsolidación completada
    ✔ OU-RU2M1-002 completada
    ✔ segunda evidencia positiva local obtenida
    ✔ F-OU002-01 localizado
    ✔ atribución técnica de F-OU002-01 cerrada
    ✔ restricción contingente de captura localizada
    ✔ ninguna nueva pérdida necesaria establecida
    ✔ ninguna modificación de código derivada
    ✔ reconsolidada documentalmente dentro de su alcance actual
    → primera realización contingente destinada al uso
    → mecanismos concretos no normativos
    ✔ investigación de reiteración por composición cerrada
    ✔ evidencia positiva local de incidencia reiterada por composición obtenida
    ✔ E-RU2M1-08 incorporada
    ✔ CP-RU2M1-11 incorporada
    ✔ reiterabilidad interna no demostrada
    ✔ ninguna realización autónoma R* derivada

POU-RU2M1-01
    ✔ tres aplicaciones completadas
    ✔ suficiencia instrumental inicial conservada
    ✔ insuficiencia preobservacional local establecida
    ✔ investigación correspondiente cerrada
    ✔ modificación mínima derivada
    ✔ condición preobservacional incorporada
    ✔ trazabilidad incorporada a la ficha mínima
    ✔ revisión ejercida mediante OU-RU2M1-003
    ✔ nueva evidencia formal de aplicación obtenida
    ✔ RP-POU-RU2M1-02 formulado
    → suficiencia instrumental local de la versión revisada
    ○ suficiencia general no establecida

R-DX1-M1
    ✔ investigación cerrada
    ✔ candidata experimental derivada
    ✔ implementada
    ✔ 20/20 tests específicos
    ✔ 204/204 tests globales
    ✔ H-DX2 corroborada dentro del alcance experimental
    → H-DX3 no corroborada
    → witness experimental ejecutable
    → ninguna modificación de R-U2-M1 derivada
    → ninguna nueva responsabilidad normativa derivada

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

    ✔ primer ciclo de observación, atribución, modificación y reconsolidación completado
    ✔ segundo ciclo de observación, atribución y reconsolidación documental completado
    ✔ investigación de reiteración por composición completada
    ✔ evidencia positiva local de incidencia reiterada por composición obtenida
    → reiterabilidad interna de R-U2-M1 no demostrada
    → ninguna realización autónoma R* derivada
    → ninguna modificación de código derivada
    ✔ investigación de incidencia posterior tras indisponibilidad del antecedente completada
    ✔ R-DX1-M1 validada como witness experimental ejecutable
    → ninguna nueva condición irreducible derivada
    → ninguna ampliación de R-U2-M1 derivada
    ✔ ausencia de actuación automáticamente derivada confirmada
    ✔ nueva línea estratégica LE-001 adoptada
    → convergencia empírica hacia una primera trayectoria humana integrada

Carril A — uso
    ✔ actuación inicialmente seleccionada completada
    ✔ OU-RU2M1-003 cerrada
    ✔ condición preobservacional revisada ejercida
    ✔ trayectoria completa observada
    ✔ B — Evidencia positiva local
    ✔ consecuencia: ninguna
    ✔ RP-POU-RU2M1-02 formulado localmente
    → ninguna modificación de R-U2-M1 derivada
    → ninguna modificación adicional de POU-RU2M1-01 derivada
    → ninguna investigación posterior automáticamente derivada
    → ninguna nueva actuación del carril automáticamente derivada

Carril B — nuevas situaciones
    → capturar situaciones humanas, no funcionalidades
    → registrar como NP-* cuando exista razón para conservarlas
    → reducir frente a PV-001 y otros compromisos vigentes
    → abrir investigación únicamente ante residuo positivo propio

Investigaciones simultáneas
    ✔ admitidas cuando sean independientemente justificadas
    → pueden comenzar y terminar en cualquier orden
    → dependencia lógica distinta del orden temporal
    → resultado todavía no establecido no puede utilizarse como entrada
    → precisión adicional sólo si puede cambiar una decisión relevante
    → cierre cuando exista evidencia suficiente para decidir

Trayectoria humana integrada
    ○ todavía no seleccionada
    → no requiere cerrar previamente todas las investigaciones independientes
    → cuando quede suficientemente justificada:
        construcción y uso tendrán prioridad
        sobre generalización teórica adicional no necesaria

Design Journal
    ✔ responsabilidad vigente
    ✔ corpus histórico auditado respecto del alcance actual
    ✔ espacio para nuevas propuestas NP-* disponible
    → contenido histórico no normativo
    → nuevas situaciones no adquieren por registro estatuto de Product
    → investigación posterior condicionada a fundamento positivo propio

Arquitectura del nuevo producto
    ○ todavía no derivada
    → no se derivará preventivamente como arquitectura general
    → primera derivación condicionada a una trayectoria suficientemente justificada
    → alcance inicial limitado a lo necesario para realizar esa trayectoria
```

---
