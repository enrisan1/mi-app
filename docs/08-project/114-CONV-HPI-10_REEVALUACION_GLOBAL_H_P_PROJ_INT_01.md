# CONV-HPI-10 — Reevaluación global de H-PROJ-INT-01

**Fecha:** 18/11/2026  
**Estado:** CERRADA — reevaluación global completada; H-PROJ-INT-01 NO puede declararse todavía satisfecho/cerrado; queda una obligación residual localizada perteneciente a GAP-HPI-01.  
**Horizonte:** H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual.  
**Precedentes principales:** 103-CONV-HPI-03_CRITERIOS_DE_FINALIZACION.md, 108-R-HPI-03_VALIDACION_HITO_HPI_01.md y 113-R-HPI2-03_VALIDACION_HITO_HPI_02.md.

---

# 1. Objeto

Tras satisfacer HITO-HPI-01 y HITO-HPI-02 y cerrar los dos huecos en el alcance de sus hitos, esta actuación vuelve al gate global de H-PROJ-INT-01.

La pregunta no es si los dos hitos están satisfechos, sino:

> ¿Las diez capacidades C-HPI-01…10, D-HPI-01/02, G01…G06 y CF-HPI-01 quedan satisfechos de forma integrada, sin que exista una obligación residual no absorbida por los dos hitos?

La regla de 103 exige:

~~~text
criterios individuales
+
D-HPI-01/02
+
G01…G06
+
CF-HPI-01
→ SATISFECHOS
~~~

y prohíbe declarar cerrado el horizonte si aparece cualquiera de sus falsos positivos globales.

---

# 2. Base canónica

Se toman como criterios estables los definidos en 103.

La matriz canónica contiene:

~~~text
criterios individuales
→ 30

dependencias
→ 2

criterios globales
→ 6

criterio constitutivo superior
→ CF-HPI-01
~~~

En el apartado 24 de 103 aparece una línea histórica «criterios individuales → 31», pero la propia matriz detallada, el conteo del apartado 21 y la evaluación posterior de 104 establecen 30. Se trata de una inconsistencia documental de conteo, no de un criterio adicional.

---

# 3. Evidencia positiva acumulada

## 3.1 HITO-HPI-01

108 mantiene:

~~~text
MHPI-01…08
→ 8/8 SATISFECHOS
~~~

con contexto operativo común para un trabajo ya establecido/persistido.

## 3.2 HITO-HPI-02

113 mantiene:

~~~text
MHPI2-01…06
→ 6/6 SATISFECHOS
~~~

con:

~~~text
A → W2
B → W3
~~~

persistentes, discriminados y reconocibles tras interrupción.

---

# 4. Validación global añadida

Se creó una prueba específica de horizonte:

~~~text
src/App.hpi.global.validation.test.tsx
~~~

Su caso consolidado V-HPI-GLOBAL-01 parte de un trabajo W1 ya persistido y recorre en una sola trayectoria:

~~~text
retomar W1
↓
captura contextual bajo W1
↓
comparación A/B bajo W1
↓
IA adopta W1 como contexto
↓
interrupción
↓
reanudar W1
↓
recuperar A
↓
seleccionar A sin sustituir W1
↓
desarrollar W2
↓
constituir W2 desde A
↓
interrupción
↓
reanudar W2
↓
reconocer W2 ← A
↓
IA adopta W2
~~~

Resultado:

~~~text
V-HPI-GLOBAL-01
→ PASS
~~~

Esto aporta evidencia directa para G01, G02, G03, G04, G05 y G06 en la rama longitudinal de reanudación.

---

# 5. Intento de cierre desde creación inicial

Para falsar el cierre global se probó también la trayectoria:

~~~text
sin trabajo previo
↓
Crear W1
↓
usar inmediatamente una operación auxiliar
~~~

La primera versión de la validación global exigía que una captura realizada inmediatamente después de Crear W1 reconociera W1.

Resultado observado:

~~~text
FAIL

esperado:
Trabajo global W1

recibido:
Captura global de W1
+ referencia temporal
~~~

El fallo no procedía de un selector ambiguo.

---

# 6. Inspección de la transición inicial

La inspección de ResumeExperience muestra dos comportamientos distintos.

## 6.1 Primera creación

Cuando no existe previous:

~~~text
Crear
↓
localStorageResumeRepository.savePrevious(currentInput)
↓
setAccepted(true)
~~~

No se ejecuta:

~~~text
onResult
~~~

Por tanto App no recibe todavía un resultado que le permita:

~~~text
crear OrdinaryMaterial
+
establecer ordinary.current-work-id
~~~

## 6.2 Continuación desde trabajo previo

Cuando sí existe previous:

~~~text
Crear
↓
createFromPrevious(...)
↓
savePrevious(nextResult.current)
↓
setResult(nextResult)
↓
onResult(nextResult)
~~~

Entonces App sí:

~~~text
crea OrdinaryMaterial
+
actualiza currentWorkId
+
persiste ordinary.current-work-id
~~~

Resultado:

> La primera creación y la continuación/reanudación no convergen inmediatamente en el mismo contexto operativo.

---

# 7. Caracterización del residuo en auxiliares

Se ejecutó en la rama temporal un diagnóstico posterior a la primera creación.

Después de:

~~~text
sin previous
↓
Crear "Trabajo nuevo sin reanudación"
~~~

se observó:

## Captura

~~~text
captura inmediata
→ se conserva

pero

captura
→ NO muestra
  "Trabajo nuevo sin reanudación"
~~~

## Comparación

~~~text
comparación A/B
→ puede abrirse

pero

comparación activa
→ NO muestra
  "Trabajo nuevo sin reanudación"
  como contexto actual
~~~

## IA

~~~text
selector "Obra para apoyo IA"
→ value = ""
~~~

W1 recién creado no está todavía disponible como obra actual común.

El diagnóstico pasó porque caracterizaba explícitamente estas tres ausencias.

---

# 8. Contraste con el falsador global ya fijado

103 prohíbe cerrar el horizonte si:

> **“crear y retomar usan contextos incompatibles”.**

La evidencia actual satisface literalmente ese falsador:

~~~text
retomar W1
→ contexto común inmediato

crear W1 por primera vez
→ texto persistido y visible
→ pero todavía sin contexto común ordinario
  para captura/comparación/IA
~~~

Por tanto el cierre global no puede aprobarse aunque los dos hitos permanezcan satisfechos en sus alcances.

---

# 9. Reevaluación de C-HPI-01…10

## C-HPI-01 — establecer trabajo actual

~~~text
C01-A
→ SATISFECHO

C01-B
→ PARCIALMENTE SATISFECHO
~~~

La primera creación produce y persiste W1, pero su identidad operacional común no está disponible inmediatamente para las operaciones ordinarias.

Resultado:

~~~text
C-HPI-01
→ PARCIALMENTE SATISFECHA
  EN EL GATE GLOBAL
~~~

## C-HPI-02 — desarrollar trabajo actual

La evidencia previa y las trayectorias W1→W2 permanecen válidas.

~~~text
C-HPI-02
→ SATISFECHA
~~~

## C-HPI-03 — conservar y reanudar

La reanudación y contexto posterior permanecen demostrados.

~~~text
C-HPI-03
→ SATISFECHA
~~~

## C-HPI-04 — recuperar antecedentes

Pluralidad, elección humana y coexistencia con un trabajo ya establecido siguen demostradas.

~~~text
C-HPI-04
→ SATISFECHA
  EN EL RECORRIDO ESTABLECIDO
~~~

El residuo no constituye un defecto independiente de recuperación.

## C-HPI-05 — reutilizar antecedentes

HITO-HPI-02 demuestra antecedente efectivo, resultado diferenciado y continuidad reconocible.

~~~text
C-HPI-05
→ SATISFECHA
~~~

## C-HPI-06 — captura contextual

~~~text
C06-A
→ SATISFECHO

C06-B
→ PARCIALMENTE SATISFECHO

C06-C
→ SATISFECHO
~~~

C06-B falla específicamente en la captura inmediata posterior a la primera creación.

Resultado:

~~~text
C-HPI-06
→ PARCIALMENTE SATISFECHA
  EN EL GATE GLOBAL
~~~

## C-HPI-07 — comparación contextual

~~~text
C07-A
→ SATISFECHO

C07-B
→ PARCIALMENTE SATISFECHO

C07-C
→ SATISFECHO
~~~

La comparación conserva W1 cuando W1 ya está establecido como currentWork, pero no tras la primera creación antes de reanudar.

Resultado:

~~~text
C-HPI-07
→ PARCIALMENTE SATISFECHA
  EN EL GATE GLOBAL
~~~

## C-HPI-08 — apoyo IA separado/contextual

Separación, procedencia y control humano permanecen satisfechos.

Pero inmediatamente después de la primera creación:

~~~text
obra actual para IA
→ no identificada
~~~

Por tanto:

~~~text
C08-A
→ PARCIALMENTE SATISFECHO

C08-B/C/D
→ SATISFECHOS

C-HPI-08
→ PARCIALMENTE SATISFECHA
  EN EL GATE GLOBAL
~~~

## C-HPI-09 — determinación humana

No aparece contraejemplo nuevo.

~~~text
C-HPI-09
→ SATISFECHA
~~~

## C-HPI-10 — preservación/distinción/procedencia

C10-A/B/D permanecen satisfechos.

C10-C es suficiente una vez existe contexto común y para antecedente→resultado, pero la primera creación todavía deja sin procedencia contextual las auxiliares inmediatas.

~~~text
C10-C
→ PARCIALMENTE SATISFECHO
  EN EL GATE GLOBAL

C-HPI-10
→ PARCIALMENTE SATISFECHA
  EN EL GATE GLOBAL
~~~

---

# 10. Dependencias D-HPI-01/02

HITO-HPI-02 demuestra en el mismo recorrido:

~~~text
antecedente recuperado
→ seleccionado
→ desarrollo humano
→ resultado diferenciado
→ continuidad reconocible
~~~

Por tanto:

~~~text
D-HPI-01
→ SATISFECHA

D-HPI-02
→ SATISFECHA
~~~

El residuo de primera creación no reabre estas dependencias.

---

# 11. Reevaluación de G01…G06

## G01 — punto ordinario común

La entrada es App ordinaria y el recorrido retomado completo se ejerce sin harness.

~~~text
G01
→ SATISFECHO
~~~

## G02 — continuidad de contexto operativo

La rama retomada satisface G02.

La primera creación no establece inmediatamente el mismo currentWork para auxiliares.

~~~text
G02
→ PARCIALMENTE SATISFECHO
~~~

## G03 — trayectoria longitudinal completa

V-HPI-GLOBAL-01 demuestra en una sola ejecución:

~~~text
retomar
→ auxiliares
→ interrumpir
→ reanudar
→ recuperar antecedente
→ reutilizar
→ producir resultado
→ interrumpir
→ reanudar
~~~

con W2←A conservado.

~~~text
G03
→ SATISFECHO
~~~

## G04 — contextualización de auxiliares

En la rama retomada, captura/comparación/IA comparten W1.

En la primera creación no comparten inmediatamente W1.

~~~text
G04
→ PARCIALMENTE SATISFECHO
~~~

## G05 — compatibilidad transversal

No aparece contraejemplo a determinación humana o preservación/distinción básica.

~~~text
G05
→ SATISFECHO
~~~

## G06 — ausencia de reconstrucción externa relevante

En la rama retomada ya no hay reconstrucción externa relevante.

Pero tras la primera creación, una persona tendría que recordar externamente que la captura/comparación/IA pertenecen al W1 recién creado hasta reanudar la App.

~~~text
G06
→ PARCIALMENTE SATISFECHO
~~~

---

# 12. CF-HPI-01

CF-HPI-01 está operacionalizado por las capacidades y G01…G06.

Al permanecer parciales:

~~~text
C01-B
C06-B
C07-B
C08-A
C10-C

G02
G04
G06
~~~

y activarse además explícitamente el falso positivo:

~~~text
crear
≠
retomar
respecto del contexto común inmediato
~~~

se decide:

~~~text
CF-HPI-01
→ NO SATISFECHO
~~~

---

# 13. ¿Existe un tercer gap?

No se deriva.

La carencia observada es:

~~~text
primera creación W1
→ no entra inmediatamente
  en el contexto operativo común
~~~

Esto pertenece exactamente a la obligación de GAP-HPI-01:

> contexto operativo común y suficientemente persistente que identifique el trabajo textual actual y permita asociar a él los elementos y operaciones pertinentes.

Por tanto:

~~~text
tercer gap independiente
→ NO

GAP-HPI-02
→ permanece cerrado

GAP-HPI-01
→ cerrado en el alcance validado
  de HITO-HPI-01
→ pero con residuo global
  detectado en primera creación
~~~

---

# 14. Obligación residual

Se denomina para esta reevaluación:

> **RES-HPI-01 — Convergencia inmediata de la primera creación con el contexto operativo común.**

Resultado material exigido, sin presuponer mecanismo:

~~~text
sin trabajo previo
↓
persona crea W1
↓
W1 queda reconocido inmediatamente
como trabajo actual común
↓
captura pertinente
comparación pertinente
IA pertinente
↓
pueden contextualizarse en W1
sin exigir una reanudación intermedia
~~~

No se exige todavía:

- cambiar ResumeExperience;
- llamar obligatoriamente a onResult;
- crear un helper;
- mover persistencia;
- una entidad nueva;
- un store;
- Architecture.

---

# 15. Evidencia técnica de la reevaluación

## Trayectoria global retomada

~~~text
V-HPI-GLOBAL-01
→ PASS
~~~

## Diagnóstico residual temporal

~~~text
D-HPI-GLOBAL-NEW-01
→ PASS
~~~

El PASS significa que se observaron de forma reproducible las ausencias esperadas tras la primera creación:

- captura sin W1;
- comparación sin W1;
- selector IA vacío.

## Preservación de hitos

~~~text
HPI-01 + HPI-02
→ 19/19 PASS
~~~

## Suite en la validación con diagnóstico

~~~text
Test Files
→ 64/64 PASS

Tests
→ 519/519 PASS
~~~

El test diagnóstico era temporal y no se consolida como comportamiento deseado.

## Build

~~~text
→ PASS
~~~

## Typecheck

~~~text
baseline
→ 14 errores históricos

reevaluación
→ 14 errores

nuevos
→ 0
~~~

## Diff check

~~~text
→ PASS
~~~

---

# 16. Decisión global

Se decide:

> **NO DECLARAR SATISFECHO NI CERRADO H-PROJ-INT-01.**

La causa no es GAP-HPI-02 ni un tercer hueco.

La causa es una obligación residual estrecha de GAP-HPI-01 que sólo aparece al confrontar globalmente las dos formas aceptadas de establecimiento del trabajo:

~~~text
crear nuevo
vs
retomar existente
~~~

---

# 17. Estado resultante

~~~text
H-PROJ-INT-01
→ ACEPTADO Y ABIERTO
→ NO SATISFECHO TODAVÍA

HITO-HPI-01
→ SATISFECHO
  EN SU ALCANCE VALIDADO

HITO-HPI-02
→ SATISFECHO

GAP-HPI-02
→ CERRADO EN EL ALCANCE DEL HITO

GAP-HPI-01
→ CERRADO EN EL ALCANCE DE HITO-HPI-01
→ RESIDUO GLOBAL DETECTADO

RES-HPI-01
→ ABIERTO

Architecture
→ NO DERIVADA
~~~

---

# 18. Siguiente actuación justificable

No procede otra reevaluación global hasta reducir RES-HPI-01.

La siguiente actuación justificable es:

> **CONV-HPI-11 — reducir RES-HPI-01 y determinar el contrato mínimo que haga converger la primera creación con el contexto operativo común antes de modificar producción.**

Deberá fijar al menos un control discriminante:

~~~text
sin previous
→ Crear W1
→ operación auxiliar inmediata
→ W1 reconocido como contexto

sin exigir:
→ unmount/remount intermedio
~~~

y comprobar que la corrección no altera la rama ya válida de reanudación ni HITO-HPI-02.
