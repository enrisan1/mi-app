# Ficha de bitácora

## Documento: 00-protocolo-de-trabajo.md

## Fecha:

2026-08-05

## Motivo:

Incorporación del principio CT-1
"Derivación del marco teórico".

## Resultado:

Se incorpora al protocolo metodológico un procedimiento general para la construcción de cuerpos teóricos autónomos, distinguiéndolo de los principios metodológicos generales (PM).

## Auditorías superadas:

- Responsabilidad del marco teórico.
- Irreducibilidad de sus componentes.
- Orden lógico de construcción.
- Integración en el protocolo metodológico.

# Observaciones:

Este principio pasa a formar parte de la metodología general del proyecto y será aplicable a cualquier futuro cuerpo teórico autónomo.

---

# Ficha de bitácora

## Documento: 00-R-U2-M1.md

## Fecha:

2026-08-26

## Motivo:

Reconsolidación de `R-U2-M1` tras su primera observación instrumental de uso y la resolución de la necesidad local derivada de dicha observación.

## Resultado:

Se completa el primer ciclo de observación y evolución local de `R-U2-M1`.

La observación `OU-RU2M1-001` localiza `F-OU001-01`; su investigación establece `L-OU001-01` y deriva `RU2M1-U01`.

La investigación de realización selecciona `MR-U01-01`, que es construida y validada mediante `RV-MR-U01-01`.

`R-U2-M1` queda reconsolidada dentro de su alcance actual, conservando las propiedades anteriormente validadas e incorporando la observabilidad local de la aceptación de `X` y la estabilidad del antecedente restaurado durante una ejecución.

Se incorporan al cuerpo vigente de Realization:

- `01-protocolo-de-observacion-de-uso-R-U2-M1.md`;
- `02-OU-RU2M1-001.md`;
- `03-investigacion-F-OU001-01.md`;
- `04-investigacion-RU2M1-U01.md`.

`PROJECT_STATUS.md` queda actualizado para reflejar el estado resultante.

## Auditorías superadas:

- Trazabilidad `OU-RU2M1-001 → F-OU001-01 → L-OU001-01 → RU2M1-U01 → MR-U01-01 → RV-MR-U01-01`.
- Conservación de las propiedades previamente validadas de `R-U2-M1`.
- Observabilidad de la aceptación efectiva de un `X` válido en `S1`.
- Conservación de `S1` tras la aceptación de `X` durante la misma ejecución.
- Constitución de `S2(X)` únicamente en una nueva ejecución con `X` restaurado.
- Validación específica de `R-U2-M1`: 45/45 pruebas superadas.
- Validación global: 184/184 pruebas superadas.
- Build de producción correcto.
- Comprobación de integridad mediante `git diff --check`.
- Ausencia de propagación no justificada a Product o Architecture.

# Observaciones:

La primera observación instrumental proporciona evidencia positiva local de uso, pero no demuestra utilidad general de `R-U2-M1`.

La modificación realizada responde exclusivamente a una pérdida demostrada durante el uso y no convierte sus mecanismos concretos en requisitos de Product ni en decisiones arquitectónicas.

No queda derivada automáticamente ninguna actuación posterior. Una nueva apertura requerirá nuevo fundamento positivo independiente.

---

# Ficha de bitácora

## Documento: 00-R-U2-M1.md

## Fecha:

2026-08-26

## Motivo:

Reconsolidación documental de `R-U2-M1` tras su segunda observación
instrumental de uso y el cierre de la atribución técnica de `F-OU002-01`.

## Resultado:

Se completa el segundo ciclo de observación y atribución de `R-U2-M1`.

`OU-RU2M1-002` proporciona una segunda evidencia positiva local de uso
efectivo de la realización en una trayectoria independiente posterior a su
primera reconsolidación.

Durante la observación se localiza `F-OU002-01`, posteriormente refinado como
una diferencia observable entre la estructura multilineal de la aportación
realizada durante `S1` y el `X` disponible en `S2(X)`.

La investigación técnica establece que la diferencia se origina en el
mecanismo monolínea contingente utilizado para capturar la aportación durante
`S1`.

La persistencia, el modelo y la restauración quedan descartados como causa del
fenómeno observado.

La investigación no establece una violación de `RU2-N03` ni de
`I-RU2M1-04`, no demuestra una nueva pérdida necesaria de `R-U2-M1` y no
deriva una modificación de código.

La restricción localizada queda atribuida al mecanismo contingente de captura
sin convertirse en exigencia de Product, obligación arquitectónica ni
requisito general de contenido multilineal.

Se incorporan al cuerpo vigente de Realization:

```text
05-OU-RU2M1-002.md
06-investigacion-F-OU002-01.md
```

`00-R-U2-M1.md` queda reconsolidado documentalmente dentro de su alcance
actual.

`PROJECT_STATUS.md` queda actualizado para declarar el nuevo estado vigente y
`PROJECT_JOURNAL.md` incorpora el registro cronológico de los dos ciclos de
observación y evolución local de la realización.

## Auditorías superadas:

- Trazabilidad `OU-RU2M1-002 → F-OU002-01 → atribución técnica → restricción contingente de captura localizada`.
- Distinción entre la aportación humana realizada durante `S1` y el `X` constituido por el mecanismo contingente de captura.
- Localización de la diferencia observada antes de la persistencia.
- Descartado de persistencia, modelo y restauración como causa de `F-OU002-01`.
- Conservación de la correspondencia actualmente validada entre el `X` persistido y el `X` restaurado.
- Ausencia de violación establecida de `RU2-N03`.
- Ausencia de violación establecida de `I-RU2M1-04`.
- Ausencia de nueva pérdida necesaria demostrada.
- Ausencia de modificación de código derivada.
- Ausencia de propagación no justificada a Product o Architecture.

# Observaciones:

La segunda observación proporciona evidencia positiva local adicional, pero
no demuestra utilidad general de `R-U2-M1`, utilidad para otras personas ni
validez para toda situación de reanudación.

`F-OU002-01` no establece que `R-U2-M1` deba admitir contenido multilineal ni
obliga a sustituir el control `input` por un `textarea` u otro mecanismo
concreto.

La segunda trayectoria muestra un caso en el que nueva evidencia amplía el
conocimiento disponible sobre una realización sin justificar una nueva
modificación.

No se repitieron los tests ni el build durante esta reconsolidación
documental, al no haberse producido cambios de código. Las validaciones
técnicas anteriores permanecen como evidencia histórica de la realización
que no fue modificada por este segundo ciclo.

No queda derivada automáticamente ninguna actuación posterior. Una nueva
apertura requerirá fundamento positivo independiente suficiente.

---

## Documento: 01-protocolo-de-observacion-de-uso-R-U2-M1.md

## Fecha:

2026-08-27

## Motivo:

Investigación y resolución documental de la insuficiencia preobservacional
localizada durante la preparación de `OU-RU2M1-002`.

## Resultado:

La cuestión preobservacional conservada en `OU-RU2M1-002` es evaluada
separadamente respecto de `F-OU002-01`.

El hecho observado fue:

```text
antecedente válido procedente de OU-RU2M1-001
↓
restaurado al comienzo de una nueva ejecución
↓
S2(X anterior)
en lugar del S1 pretendido
↓
actuación preobservacional realizada
↓
inicio efectivo posterior de OU-RU2M1-002
```

La existencia efectiva de esta situación proporciona fundamento positivo
suficiente para abrir una investigación propia sobre la suficiencia
preobservacional de `POU-RU2M1-01`.

La investigación se conserva en:

```text
07-investigacion-suficiencia-preobservacional-POU-RU2M1-01.md
```

La revisión de `R-U2-M1` establece que la condición constitutiva de `S1` ya
estaba definida:

```text
S1
→ ejecución iniciada sin X válido restaurado
```

y que `S2(X)` corresponde simétricamente a:

```text
S2(X)
→ ejecución iniciada con X válido restaurado
```

La investigación establece que la versión entonces examinada de
`POU-RU2M1-01` exigía comenzar una aplicación completa en `S1`, pero no
operacionalizaba esta condición mediante una comprobación preobservacional.

La insuficiencia queda por tanto atribuida localmente al protocolo y no a
`R-U2-M1`.

Se deriva e incorpora una modificación mínima de `POU-RU2M1-01` consistente
en:

```text
condición preobservacional explícita
↓
la ejecución destinada a constituir S1
debe comenzar sin X válido restaurado

+

trazabilidad
↓
registro de la comprobación
en la ficha mínima de observación
```

La modificación no prescribe:

```text
borrado de localStorage
ausencia absoluta de estado previo
eliminación de todo antecedente persistido
ni
ningún mecanismo técnico concreto
```

El ciclo local de Realization queda consolidado mediante:

```text
01-protocolo-de-observacion-de-uso-R-U2-M1.md
07-investigacion-suficiencia-preobservacional-POU-RU2M1-01.md
```

y cerrado en:

```text
4f11fb6
docs(realization): resolve preobservational protocol insufficiency
```

`PROJECT_STATUS.md` queda actualizado para reflejar el nuevo estado vigente
del protocolo y `PROJECT_JOURNAL.md` incorpora el registro cronológico de su
investigación y revisión.

## Auditorías superadas:

- Separación entre la cuestión protocolaria y `F-OU002-01`.
- Fundamento positivo de apertura procedente de una situación efectivamente
  observada.
- Reconstrucción de la condición constitutiva de `S1` desde la especificación
  vigente de `R-U2-M1`.
- Distinción entre `S1` y `S2(X)` según exista o no un `X` válido restaurado al
  comienzo de la ejecución.
- Atribución de la insuficiencia a `POU-RU2M1-01` y no a `R-U2-M1`.
- Derivación de una modificación mínima exclusivamente protocolaria.
- Ausencia de prescripción de `localStorage` o de cualquier mecanismo técnico
  concreto.
- Incorporación de trazabilidad mediante la ficha mínima de observación.
- Ausencia de modificación de `R-U2-M1`.
- Ausencia de modificación de código.
- Ausencia de propagación no justificada a Product, Architecture o
  Methodology.
- Conservación de `RP-POU-RU2M1-01` dentro de su alcance original.
- Ausencia de formulación de `RP-POU-RU2M1-02` sin nueva evidencia de
  aplicación.

# Observaciones:

La insuficiencia localizada no invalida `POU-RU2M1-01` en conjunto ni
descarta su suficiencia instrumental inicial.

La modificación documental corrige una condición preobservacional concreta,
pero no constituye por sí misma evidencia de suficiencia del protocolo
revisado en una aplicación posterior.

Por tanto:

```text
POU-RU2M1-01 revisado
↓
nueva aplicación
○ no realizada

nueva evidencia de suficiencia
○ no obtenida

RP-POU-RU2M1-02
○ no formulado
```

No se repitieron tests ni build durante este ciclo, al no haberse producido
cambios de código. Las validaciones técnicas anteriores de `R-U2-M1`
permanecen como evidencia histórica y no fueron modificadas por esta revisión
documental del protocolo.

No queda derivada automáticamente una nueva observación, una ampliación de
`R-U2-M1`, una segunda realización, una nueva vertical de Product, una
arquitectura software ni una nueva funcionalidad.

Cualquier actuación posterior requerirá fundamento positivo independiente
suficiente.

---

# Ficha de bitácora

## Documento: 01-investigacion.md

## Fecha:

2026-08-27

## Motivo:

Construcción inicial del documento de investigación correspondiente al cuerpo `Methodology` para estudiar si la metodología del proyecto requiere una secuencia temporal única o admite trabajo simultáneo entre líneas cuando no exista una dependencia lógica que imponga precedencia.

La investigación se abre a partir de una cuestión metodológica surgida durante el control global del proyecto:

```text
coexistencia de varias líneas justificables
↓
¿orden temporal único?
o
¿paralelismo controlado por dependencias?
```

El documento se construye como función documental de investigación, separada de la especificación normativa contenida en `00-protocolo-de-trabajo.md`.

## Resultado:

La investigación reconstruye y conserva:

```text
pregunta metodológica
↓
modelo exploratorio v0.1
↓
prueba contra casos reales
↓
detección de carencias
↓
modelo v0.2
↓
prueba contrafactual adversarial
↓
prueba de impacto
↓
modelo v0.3
↓
formalización de hipótesis
↓
auditoría de Methodology
↓
reducción normativa
```

Se examinaron tres hipótesis:

```text
H1 — linealidad temporal fuerte
→ rechazada

H2 — paralelismo libre
→ rechazada

H3 — paralelismo controlado por dependencias
→ corroborada dentro del alcance examinado
```

El resultado metodológico formal establece que la metodología del proyecto no requiere una secuencia temporal única.

La secuencialidad obligatoria deriva de dependencias lógicas concretas y no de la mera coexistencia de líneas de trabajo.

Pueden mantenerse simultáneamente varias líneas cuando cada una disponga de fundamento positivo independiente y su interacción preserve:

```text
dependencias
alcance
autoridad
trazabilidad
coherencia de consolidación
```

La investigación establece como invariante central:

```text
trabajo temporalmente paralelo
↓
admisible

siempre que

la validez de cada resultado
permanezca ligada explícitamente
a las entradas de las que fue derivado
```

El modelo exploratorio `v0.3` se conserva como resultado de investigación y no se traslada íntegramente a Methodology.

Se conservan asimismo como resultados negativos, entre otros:

```text
linealidad temporal fuerte
paralelismo libre
apertura de líneas por mera posibilidad
autoridad derivada de recibir evidencia
WIP = 3 como norma
estados N0–N3 como taxonomía normativa
"rebase" como término obligatorio
DESFASADO como estado documental
nueva barrera de consolidación
nuevo punto de convergencia
traslado íntegro de v0.3
modificación innecesaria del PCD
```

La auditoría de `00-protocolo-de-trabajo.md` deriva únicamente:

```text
precisión de PM-1
+
nuevo PM-9
+
corrección terminológica localizada
en Organización documental
```

La auditoría de `99-protocolo-de-consolidacion-documental.md` concluye que el PCD vigente ya dispone de mecanismos suficientes para:

```text
dependencias
impacto
reapertura localizada
compatibilidad
propagación
versionado documental
no modificación silenciosa
```

por lo que no se deriva modificación de `99`.

El documento supera:

```text
TD-1 — Construcción inicial
PCD-1 — Auditoría conceptual
PCD-2 — Versión completa auditable
PCD-3 — Revisión y aceptación explícita
PCD-4 — Congelación provisional
PCD-5 — Registro en bitácora
```

y queda:

```text
CONSOLIDADO PROVISIONALMENTE
```

## Auditorías superadas:

- Adecuación de la investigación al cuerpo `Methodology`.
- Separación entre investigación y especificación normativa.
- Reconstrucción de la pregunta metodológica desde situaciones reales del proyecto.
- Prueba del modelo inicial contra casos reales.
- Identificación explícita de carencias de `v0.1`.
- Revisión mediante `v0.2`.
- Prueba contrafactual adversarial.
- Prueba de impacto ante modificación de dependencias.
- Distinción entre dependencia lógica y orden temporal.
- Formalización y refutación de `H1`.
- Formalización y refutación de `H2`.
- Corroboración limitada de `H3`.
- Conservación de términos y resultados exploratorios sin convertirlos retrospectivamente en norma.
- Fidelidad histórica de las formulaciones auditadas.
- Auditoría específica de `00-protocolo-de-trabajo.md`.
- Auditoría específica de `99-protocolo-de-consolidacion-documental.md`.
- Reducción desde `v0.3` hasta una consecuencia normativa mínima.
- Conservación explícita de resultados negativos.
- Control de ampliación silenciosa.
- Control de responsabilidades documentales.
- Comprobación estructural de la versión completa materializada.
- Ausencia de restos documentales que obliguen a reabrir otros cuerpos.

# Observaciones:

La consolidación de esta investigación no convierte el modelo exploratorio `v0.3` en una estructura normativa del proyecto.

La conclusión obtenida tampoco autoriza por sí misma la apertura simultánea de nuevas líneas.

Cada línea futura continuará requiriendo:

```text
pregunta concreta
+
fundamento positivo suficiente
+
cuerpo competente
+
resultado admisible
+
criterio de cierre
```

La investigación tampoco deriva automáticamente:

```text
nueva línea de Product
nueva Realization
nueva Architecture
modificación de código
nueva observación de uso
modificación del PCD
```

Cualquier actuación posterior requerirá fundamento positivo independiente suficiente.

---

# Ficha de bitácora

## Documento: 00-protocolo-de-trabajo.md

## Fecha:

2026-08-27

## Motivo:

Reapertura reconstructiva localizada de `00-protocolo-de-trabajo.md` a partir del resultado consolidable obtenido en `01-investigacion.md` sobre la relación entre dependencia lógica y orden temporal.

La investigación mostró que la formulación vigente de `PM-1`:

```text
"La investigación precede siempre al diseño."
```

podía interpretarse como una precedencia temporal global más fuerte que la realmente justificada.

También mostró que `PM-1…PM-8` no expresaban de forma suficiente la distinción entre:

```text
dependencia lógica
≠
orden temporal global
```

y proporcionó fundamento positivo para incorporar un nuevo principio metodológico.

Durante la auditoría se localizó además una incoherencia terminológica menor en el criterio de organización documental.

## Resultado:

La reapertura se limita a cuatro modificaciones textuales agrupadas en tres resultados.

### `PM-1 — Descubrir antes de diseñar`

Se sustituye:

```text
La investigación precede siempre al diseño.
```

por:

```text
La investigación necesaria para justificar una solución precede al diseño de esa solución.
```

La modificación conserva la precedencia justificativa necesaria sin imponer una secuencia temporal global entre líneas independientes.

### `PM-9 — Separación entre dependencia lógica y orden temporal`

Se incorpora un nuevo principio:

```text
La existencia de una dependencia lógica puede imponer un orden entre
actuaciones, pero la mera coexistencia de varias líneas de trabajo no
establece por sí misma una relación de precedencia.

Podrán mantenerse abiertas simultáneamente varias líneas cuando cada una
disponga de fundamento positivo suficiente y no exista entre ellas una
dependencia que obligue a establecer un orden.

El trabajo simultáneo no elimina las dependencias justificativas internas ni
autoriza la apertura de líneas carentes de fundamento propio.
```

La formulación incorporada corresponde a la reducción normativa mínima obtenida después de auditar `00` y `99`.

No se incorporan al protocolo:

```text
modelo v0.3 completo
WIP = 3
N0–N3
"rebase" como término normativo
DESFASADO
nueva barrera de consolidación
nuevo punto de convergencia
```

porque no resultan necesarios para expresar el principio metodológico derivado.

### Organización documental

Se sustituye:

```text
Según el dominio
```

por:

```text
Según el ámbito o cuerpo de responsabilidad
```

y se sincroniza la afirmación:

```text
Todo documento deberá pertenecer claramente a un ámbito o cuerpo de responsabilidad y desempeñar una única función principal.
```

Se conserva la expresión:

```text
cuerpos teóricos de dominio
```

porque allí `dominio` cumple una función semántica distinta.

No se modifican:

```text
Objetivos
PM-2…PM-8
PM-5
Gestión de cambios
Principio de estabilidad
CT-1
99-protocolo-de-consolidacion-documental.md
```

La reapertura satisface el principio de intervención mínima.

El documento supera:

```text
TD-2 — Reapertura reconstructiva
PCD-1 — Auditoría conceptual
PCD-2 — Versión completa auditable
PCD-3 — Revisión y aceptación explícita
PCD-4 — Congelación provisional
PCD-5 — Registro en bitácora
```

y la nueva versión queda:

```text
CONSOLIDADA PROVISIONALMENTE
```

como versión vigente de `00-protocolo-de-trabajo.md`, sin borrar la existencia histórica de la versión anterior.

## Auditorías superadas:

- Existencia de causa sustantiva de reapertura.
- Fundamento de la reapertura en investigación metodológica explícita.
- Delimitación localizada del alcance de la intervención.
- Intervención mínima.
- Precisión de `PM-1` sin pérdida de su función original.
- Irreducibilidad de `PM-9` respecto de `PM-1…PM-8`.
- Reducción de `PM-9` a contenido estrictamente metodológico.
- Ausencia de traslado íntegro del modelo exploratorio `v0.3`.
- Ausencia de duplicación de responsabilidades ya realizadas por el PCD.
- Compatibilidad con `Gestión de cambios`.
- Compatibilidad con el Principio de estabilidad.
- Conservación de `CT-1` como secuencia lógica local legítima.
- Sincronización terminológica de Organización documental.
- Conservación de `cuerpos teóricos de dominio` en su significado propio.
- Comprobación de ausencia de la formulación obsoleta de `PM-1`.
- Comprobación de ausencia del encabezado obsoleto `Según el dominio`.
- Comprobación de ausencia de la frase organizativa obsoleta.
- Presencia única y ordenada de `PM-1…PM-9`.
- `git diff --check` sin incidencias.
- Análisis de impacto documental posterior a la modificación.
- Ausencia de dependencias reales afectadas que justifiquen la reapertura reconstructiva de otros documentos.

# Observaciones:

El análisis de impacto realizado después de modificar `00-protocolo-de-trabajo.md` no localizó en `docs/` dependencias documentales reales afectadas por los cambios de `PM-1`, `PM-9` o de Organización documental.

La única referencia explícita localizada fuera de los documentos directamente implicados corresponde a:

```text
16-bitacora-de-consolidacion.md
```

cuya relación con `00-protocolo-de-trabajo.md` es registral y no constituye una dependencia conceptual que requiera reapertura reconstructiva.

Por tanto, no se deriva reapertura de:

```text
Product
Realization
Architecture
Development
otros documentos de Methodology
99-protocolo-de-consolidacion-documental.md
```

ni modificación de código.

La incorporación de `PM-9` tampoco implica que deban abrirse ahora varias líneas de trabajo.

Únicamente elimina la presunción de que toda coexistencia de líneas exige una secuencia temporal global.

Toda nueva actuación seguirá requiriendo fundamento positivo independiente suficiente.

---
