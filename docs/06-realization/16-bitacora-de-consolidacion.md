# Estado general

| Documento                    | Estado      | Última revisión |
| ---------------------------- | ----------- | --------------- |
| 00-principios-de-realizacion | Consolidado | 2026-08-05      |
| 01-realizacion competencias  | Consolidado | 2026-08-05      |
| 02-                          | Finalizado  | 2026-08-04      |
| 03-                          | Finalizado  | 2026-08-04      |
| 04-                          | Finalizado  | 2026-08-04      |
| 15-investigacion             | Activo      | 2026-08-05      |

---

# Ficha de consolidación

**Documento:** `docs/realization/00-principios-de-realizacion.md`

**Estado:** Consolidado (primera edición)

## Objetivo

Establecer el marco normativo general que gobierna toda realización válida del núcleo antes de abordar la realización concreta de competencias, contratos, significado, organización y extensiones.

---

## Hipótesis investigada

> **Toda realización válida del núcleo deberá preservar íntegramente los invariantes arquitectónicos consolidados durante la teoría, la ingeniería y la implementación.**

La investigación intentó falsar esta hipótesis buscando:

- nuevos principios arquitectónicos;
- nuevas competencias realizativas;
- nuevos invariantes;
- nuevas responsabilidades irreducibles;
- nuevos criterios independientes de legitimidad para las transformaciones.

Ninguno de estos intentos produjo un principio arquitectónico adicional.

---

## Resultados consolidados

La investigación concluye provisionalmente que la fase de realización no amplía la arquitectura del núcleo.

Su objeto consiste en gobernar las transformaciones conservativas que permiten evolucionar una realización preservando íntegramente los principios previamente consolidados.

Como consecuencia:

- la unidad fundamental de estudio pasa a ser la **transformación conservativa**;
- las distintas organizaciones software pueden representar la misma arquitectura siempre que preserven los mismos invariantes;
- la realización no introduce nuevas autoridades arquitectónicas ni modifica las ya existentes.

---

## Sistema normativo consolidado

Se consolida provisionalmente el siguiente sistema normativo para la fase de realización:

- **PRR-1 — Justificación conservativa.**
- **PRR-2 — Proporcionalidad de las garantías.**
- **PRR-3 — Reconstruibilidad de la legitimidad.**

Las auditorías realizadas no han encontrado transformaciones legítimas cuya autorización requiera un razonamiento irreducible a estos tres principios.

El sistema permanece abierto a futura refutación si apareciera un contraejemplo.

---

## Descubrimientos metodológicos

Durante la investigación se consolidan las siguientes conclusiones metodológicas:

- La fase de realización no descubre nuevos principios arquitectónicos; gobierna la evolución de los ya consolidados.
- La legitimidad de una transformación depende de la preservación íntegra de los invariantes arquitectónicos.
- La profundidad de la justificación debe ser proporcional al riesgo arquitectónico de la operación.
- Las transformaciones que pretendan modificar un principio consolidado dejan de pertenecer a la fase de realización y exigen la reapertura de la fase correspondiente.
- La reconstruibilidad de la legitimidad constituye una propiedad metodológica independiente de los mecanismos concretos utilizados para conservarla.

---

## Consecuencia para la fase de realización

Queda establecido el marco normativo común para todos los documentos de `docs/realization/`.

Los documentos posteriores desarrollarán aplicaciones particulares de estos principios sin introducir nuevos principios realizativos salvo que la investigación produzca una refutación explícita del sistema aquí consolidado.

---

## Estado de la investigación

**Aceptada provisionalmente.**

No se han encontrado evidencias que obliguen a ampliar la arquitectura consolidada durante la teoría, la ingeniería o la implementación.

La investigación continuará en `01-realizacion-de-las-competencias.md`, donde se estudiará cómo realizar las competencias fundamentales preservando íntegramente el sistema normativo establecido en este documento.

---

# Ficha de consolidación

## Fecha

2026-08-05

---

## Documento afectado

`docs/realization/01-realizacion-de-las-competencias.md`

---

## Tipo de actuación

Primera edición consolidada.

---

## Objetivo

Establecer el marco normativo específico que gobierna la realización de las competencias arquitectónicas fundamentales del núcleo, aplicando los principios generales definidos en `00-principios-de-realizacion.md`.

---

## Motivación

Tras el cierre formal de la investigación **R-002 — Realización de las competencias**, se dispone de evidencia suficiente para consolidar un documento normativo específico sobre la realización de competencias.

La investigación confirmó que la realización no introduce nuevos fenómenos arquitectónicos, sino que materializa las competencias previamente consolidadas preservando íntegramente sus invariantes.

---

## Investigación de referencia

**R-002 — Realización de las competencias**

Estado: **Cerrada**

La auditoría fenomenológica confirmó que:

- no aparecen nuevos sujetos arquitectónicos;
- no aparecen nuevas responsabilidades;
- no aparecen nuevos invariantes;
- las hipótesis adicionales resultan sistemáticamente reducibles a principios previamente consolidados o quedan fuera del alcance arquitectónico de la realización.

La cobertura fenomenológica se considera completa para el ámbito de la realización de competencias.

---

## Resultado

Se incorpora la primera edición consolidada de `01-realizacion-de-las-competencias.md`.

El documento establece exclusivamente los principios normativos necesarios para realizar una competencia arquitectónica preservando íntegramente:

- su identidad;
- su autoridad;
- su responsabilidad;
- sus invariantes arquitectónicos.

No incorpora hipótesis de investigación, conceptos descartados ni desarrollos metodológicos, que permanecen registrados en `15-investigacion.md`.

---

## Impacto sobre la arquitectura

Queda completado el primer documento específico de la fase de realización.

La arquitectura documental mantiene la separación entre:

```text
Investigación
        │
        ▼
15-investigacion.md
        │
        ▼
01-realizacion-de-las-competencias.md
        │
        ▼
16-bitacora-de-consolidacion.md
```

Cada nivel conserva una responsabilidad diferenciada:

- la investigación preserva la justificación racional de las decisiones;
- el documento consolidado contiene únicamente el conocimiento arquitectónico aceptado;
- la bitácora registra la incorporación de dicho conocimiento al proyecto.

---

## Consecuencias

- Se completa la primera edición de `01-realizacion-de-las-competencias.md`.
- Queda finalizada la consolidación de la investigación **R-002**.
- La fase de realización dispone ya de un documento normativo específico para la realización de competencias.
- La siguiente línea de investigación prevista corresponde a **R-003 — Realización de los contratos**.

---

## Estado

**Consolidado**

---

---

---

---

---

# Ficha de consolidación

## Fecha

2026-08-05

---

## Documento afectado

`docs/realization/15-investigacion.md`

---

## Tipo de actuación

Creación del documento.

---

## Objetivo

Incorporar el documento responsable de registrar las investigaciones de la fase de realización, preservando la reconstruibilidad epistemológica de las decisiones adoptadas antes de su consolidación en los documentos definitivos.

---

## Motivación

Durante la investigación de la fase de realización se constató que los documentos consolidados y la bitácora no podían preservar por sí solos la justificación racional de las decisiones adoptadas durante las auditorías.

Se abrió una investigación específica para determinar si era arquitectónicamente necesario un documento propio de investigación, aplicando el mismo protocolo utilizado para el resto de la arquitectura documental.

---

## Investigación realizada

La investigación abordó sucesivamente las siguientes cuestiones:

- necesidad del documento;
- responsabilidad arquitectónica;
- objetivo;
- alcance;
- estructura mínima;
- naturaleza de las dependencias entre investigaciones.

Cada hipótesis fue sometida a intentos sistemáticos de falsación antes de incorporarse al documento.

---

## Conclusiones consolidadas

La investigación permitió establecer que:

- la fase de realización requiere un documento específico de investigación;
- dicho documento posee una responsabilidad distinta de la metodología, de los documentos consolidados y de la bitácora;
- su función consiste en preservar la reconstruibilidad epistemológica de la fase de realización;
- la estructura del documento debe derivarse de su responsabilidad arquitectónica y no de criterios organizativos;
- las dependencias entre investigaciones pueden reconstruirse a partir del contenido de las propias investigaciones y no requieren una representación documental adicional.

---

## Resultado

Se crea `docs/realization/15-investigacion.md` con una estructura completamente derivada de la investigación realizada.

El documento incorpora la investigación fundacional **R-000**, que justifica su propia existencia y establece las bases metodológicas para registrar las investigaciones posteriores de la fase de realización.

Las investigaciones restantes permanecerán incorporadas únicamente cuando sean formalmente abiertas y cerradas conforme al protocolo metodológico del proyecto.

---

## Impacto sobre la arquitectura

Se completa la arquitectura documental de la fase de realización mediante la incorporación del documento responsable de preservar la trazabilidad racional de las investigaciones.

La arquitectura documental queda estructurada del siguiente modo:

```text
00-metodologia.md
        │
        ▼
15-investigacion.md
        │
        ▼
Documentos de realización
        │
        ▼
16-bitacora-de-consolidacion.md
```

Cada documento mantiene una responsabilidad claramente diferenciada, evitando duplicidades y preservando la separación entre investigación, conocimiento consolidado y evolución histórica del proyecto.

---

## Estado

**Activo**

---

# Ficha de consolidación

## Fecha

2026-08-05

---

## Investigación afectada

R-002 — Realización de las competencias

---

## Actuación

Cierre de la investigación.

---

## Resultado

Finaliza la investigación R-002 tras completarse la auditoría fenomenológica de la realización de las competencias.

La investigación confirma que la fase de realización no introduce nuevos fenómenos arquitectónicos irreducibles y que las hipótesis adicionales resultan sistemáticamente reducibles a principios previamente consolidados o quedan fuera del alcance arquitectónico de la investigación.

---

## Consecuencias

- Se incorpora la ficha definitiva de R-002 a `15-investigacion.md`.
- La investigación pasa a estado **Cerrada**.
- Queda autorizada la redacción de `01-realizacion-de-las-competencias.md`.
- La siguiente investigación prevista corresponde a R-003 — Realización de los contratos.

---

## Estado

**Consolidado.**

---

# Ficha de consolidación

## Fecha

14/08/2026

### Investigación afectada

`R-002` — Realización de las competencias

### Situación inicial

`R-002` permanecía cerrada tras haber concluido que no se habían identificado fenómenos arquitectónicos irreducibles específicos de la realización de las competencias.

Entre las hipótesis previamente declaradas como reducidas figuraban:

- `correspondencia realizativa`;
- criterio autónomo de `no sustituibilidad semántica`.

### Nueva evidencia

Durante la investigación de una realización concreta en la vertical de Product se detectó una pérdida generalizable relativa a la atribución del estatuto de realizador dentro de una configuración satisfaciente.

El caso de control utilizado para aislarla fue:

```text
E satisface INV-K

Ω = <Σ∅, E>

Ω satisface INV-K
```

La investigación mostró que los resultados consolidados de `R-002` permiten evaluar la preservación de una competencia por una configuración, pero no han permitido todavía determinar qué parte de dicha configuración materializa la competencia y qué parte constituye mera condición, entorno o copresencia.

### Auditoría realizada

Se comprobó que identificar materialización con mera pertenencia a una configuración satisfaciente elimina la distinción entre materialización y mera copresencia y atribuye estatuto realizativo a elementos incorporados arbitrariamente.

Se reconstruyeron además, utilizando exclusivamente los resultados
consolidados de `R-002`, las mejores reducciones actualmente justificables de:

- `correspondencia realizativa`;
- criterio autónomo de `no sustituibilidad semántica`.

Ninguna de ellas permitió absorber la pérdida.

La revisión del historial Git tampoco permitió recuperar las cadenas justificativas individuales originales de ambas reducciones.

### Decisión

Se reabre `R-002`.

La reapertura:

- no invalida los resultados consolidados anteriormente;
- conserva el cierre anterior como resultado histórico;
- suspende únicamente la afirmación de completitud de dicho cierre;
- incorpora la nueva pérdida como objeto de investigación.

### Nueva pregunta

`Q-R002-01`:

> Dada una competencia `K` y una configuración `Ω` en la que sus invariantes `INV-K` se satisfacen, ¿qué debe ser necesariamente cierto para que pueda atribuirse a una parte `Σ` de `Ω` la materialización de `K`, sin reducir dicha atribución a la mera pertenencia de `Σ` a una configuración satisfaciente?

### Caso de control

`TC-R002-01` — Copresencia arbitraria

Toda hipótesis candidata deberá ser contrastada con `Σ∅ + E` sin presuponer previamente el estatuto realizativo de `Σ∅`.

### Estado

`R-002`
→ reabierta

`Q-R002-01`
→ abierta

`TC-R002-01`
→ activo

resultados anteriores de `R-002`
→ conservados provisionalmente

completitud del cierre anterior
→ suspendida

### Punto de continuación

Investigar `Q-R002-01` sin presuponer ninguna forma positiva determinada de materialización y comenzando por intentar reducir nuevamente la pérdida a resultados ya consolidados.

---

# Ficha de consolidación

## Fecha

14/08/2026

### Investigación afectada

`R-002` — Realización de las competencias

### Situación inicial

`R-002` había sido reabierta tras detectarse una pérdida relativa a la atribución del estatuto de realizador dentro de una configuración satisfaciente.

El cierre anterior permitía evaluar la preservación de una competencia por una configuración, pero no había permitido determinar si de dicha satisfacción podía derivarse legítimamente la atribución:

`materializa(Σ,K)`

para una parte determinada `Σ` de la configuración.

La reapertura quedó articulada mediante:

- `Q-R002-01` — pregunta de investigación;
- `TC-R002-01` — caso de control de copresencia arbitraria.

### Investigación realizada

Se intentó reducir la pérdida utilizando exclusivamente resultados ya consolidados, sin introducir previamente una teoría positiva de qué significa materializar una competencia.

Se examinó si la atribución realizativa podía derivarse de:

- pertenencia a una configuración satisfaciente;
- preservación íntegra de `INV-K`;
- verificación sistémica;
- semántica particular de `K`;
- relevancia semántica;
- participación no gratuita;
- necesidad individual;
- suficiencia local;
- causalidad;
- minimalidad satisfactiva;
- eliminabilidad;
- ejercicio de una responsabilidad;
- contribución positivamente orientada;
- correspondencia realizativa;
- no sustituibilidad semántica.

Ninguna de estas vías permitió derivar de manera general una atribución realizativa determinada a partir de la mera satisfacción sistémica de la competencia.

### Contraejemplos examinados

La pérdida fue sometida progresivamente a tres clases de caso:

`Σ∅`
→ mera copresencia

`Σ¬`
→ relevancia condicionante

`Σ+`
→ relevancia positivamente orientada sin atribución realizativa determinada

La pérdida sobrevivió a la retirada de las propiedades particulares de
los tres casos.

Por tanto, ninguno de ellos constituye el fundamento del resultado.

### Resultado consolidado

Se consolida:

`RS-R002-01` — No implicación de la atribución realizativa por satisfacción sistémica.

Dada una competencia `K`, una configuración `Ω` y una parte `Σ ⊆ Ω`:

`Ω ⊨ INV-K`

no implica por sí mismo:

`materializa(Σ,K)`

La satisfacción sistémica de los invariantes de una competencia y la atribución realizativa a una parte determinada de la configuración constituyen pretensiones semánticamente no intercambiables.

El resultado no afirma que toda competencia produzca necesariamente indeterminación realizativa ni excluye que fundamentos adicionales legítimos permitan determinar una atribución concreta.

### Auditoría de eliminación

Se examinó si `RS-R002-01` podía eliminarse conservando únicamente las normas generales de suficiencia justificativa y no sobreextensión.

La eliminación no resultó conservativa.

Dichas normas regulan qué contenido puede reclamar legítimamente una conclusión, pero no establecen por sí mismas la diferencia semántica específica entre:

`Ω ⊨ INV-K`

y:

`materializa(Σ,K)`

Por tanto, `RS-R002-01` sobrevivió a la prueba de eliminación como
resultado semántico negativo específico de `R-002`.

### Auditoría de independencia

Se comprobó que `RS-R002-01` no depende de los contraejemplos `Σ∅`,
`Σ¬` ni `Σ+`.

Los tres casos conservan valor falsador, pero la no implicación permanece formulable independientemente de las propiedades particulares que cada uno representa.

### Alcance y estatuto

`RS-R002-01` posee alcance general únicamente como una no implicación.

No introduce:

- una nueva competencia;
- una nueva responsabilidad arquitectónica;
- una nueva entidad;
- una nueva relación arquitectónica fundamental;
- un criterio atributivo universal;
- una obligación de existencia de una delimitación realizativa;
- una obligación de unicidad de dicha delimitación;
- una propiedad ontológica de indeterminación.

Cuando los fundamentos disponibles no autorizan el contenido adicional reclamado por una atribución realizativa determinada, dicha atribución debe permanecer suspendida.

Esta consecuencia se reduce a las obligaciones generales de suficiencia justificativa y no sobreextensión y no constituye un principio adicional
de `R-002`.

### Resolución de `Q-R002-01`

`Q-R002-01` queda resuelta.

La investigación no ha identificado una propiedad positiva universal que una parte `Σ` deba poseer para materializar una competencia `K`.

Ha establecido, en cambio, que dicha atribución no puede obtener su autorización exclusivamente del hecho de que una configuración `Ω` que contiene a `Σ` satisfaga `INV-K`.

Cuando se formule una atribución realizativa determinada, sus fundamentos deberán autorizar específicamente el contenido atributivo reclamado.

### Auditoría documental

Se auditó la propagación de `RS-R002-01` dentro de
`docs/06-realization`.

#### `00-principios-de-realizacion.md`

El documento resultó sustantivamente compatible con `RS-R002-01`.

Se confirmó que:

- su objeto fundamental es la transformación conservativa;
- presupone realizaciones cuya atribución ya está justificada;
- `HR-001` continúa siendo válido;
- `PRR-1`, `PRR-2` y `PRR-3` continúan siendo válidos;
- ninguno de dichos principios proporciona por sí mismo un criterio de atribución realizativa.

Se introdujeron únicamente precisiones destinadas a delimitar
explícitamente dicho alcance.

No fue necesario introducir un nuevo principio realizativo.

#### `01-realizacion-de-las-competencias.md`

Se detectó una confusión localizada entre:

`(A)` validez conservativa de una realización cuya atribución está
justificada;

y

`(B)` autorización para atribuir a una configuración o a una de sus partes el estatuto de realización o realizador de `K`.

La distinción fue explicitada y las formulaciones que podían convertir la preservación de invariantes en condición suficiente de atribución fueron corregidas.

Una segunda auditoría confirmó que el documento ya no contiene ninguna inferencia conocida de la forma:

`preservación/satisfacción de INV-K`
→ `atribución realizativa determinada`

El documento queda consolidado respecto de `RS-R002-01`.

#### Restantes documentos

`02-realizacion-de-los-contratos.md`
→ vacío; sin contenido susceptible de auditoría.

`03-realizacion-del-significado.md`
→ sin propagación detectada.

`04-organizacion-del-nucleo.md`
→ sin propagación detectada.

`05-puntos-de-extension.md`
→ sin propagación detectada.

Una búsqueda transversal adicional de formulaciones potencialmente
equivalentes no detectó nuevas colisiones.

### Revisión del cierre anterior

La reapertura no falsifica los resultados consolidados anteriormente relativos a:

- ausencia de nuevas competencias arquitectónicas;
- permanencia de la autoridad normativa en la competencia;
- ausencia de nuevas responsabilidades arquitectónicas;
- preservación íntegra de los invariantes;
- alcance sistémico de la verificación;
- legitimidad de las transformaciones conservativas;
- reducción de `correspondencia realizativa` dentro de su alcance;
- reducción del criterio autónomo de `no sustituibilidad semántica`
  dentro de su alcance.

Sí queda corregida la antigua afirmación de completitud.

El cierre anterior se conserva como resultado histórico y como registro reconstruible del estado de la investigación anterior a la nueva evidencia.

### Decisión

Se cierra nuevamente `R-002`.

El nuevo cierre no restablece una afirmación de saturación fenomenológica absoluta.

Establece únicamente que la pérdida que motivó la reapertura ha sido investigada hasta obtener un resultado estable, falsable y suficientemente delimitado, y que su propagación documental conocida ha sido auditada.

### Estado final

`R-002`
→ cerrada nuevamente

`Q-R002-01`
→ resuelta

`RS-R002-01`
→ consolidado

`TC-R002-01`
→ caso de control completado

resultados consolidados anteriores
→ conservados dentro de su alcance

completitud del cierre anterior
→ corregida por `RS-R002-01`

`00-principios-de-realizacion.md`
→ auditado y consolidado respecto de `RS-R002-01`

`01-realizacion-de-las-competencias.md`
→ auditado y consolidado respecto de `RS-R002-01`

propagación documental conocida
→ auditada

nuevo principio realizativo
→ no introducido

nueva ontología
→ no introducida

nueva competencia
→ no introducida

nueva responsabilidad arquitectónica
→ no introducida

### Punto de continuación

Reanudar la fase de realización desde el estado consolidado resultante, manteniendo `RS-R002-01` como restricción semántica sobre cualquier atribución realizativa futura y sin presuponer un criterio positivo universal de materialización.

---
