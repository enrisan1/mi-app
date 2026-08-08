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
