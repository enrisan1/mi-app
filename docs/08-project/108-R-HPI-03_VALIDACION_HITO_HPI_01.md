# R-HPI-03 — Validación formal de HITO-HPI-01

**Fecha:** 18/11/2026  
**Estado:** CERRADA — `HITO-HPI-01` satisfecho; `MHPI-01…08` validados 8/8.  
**Horizonte:** `H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual`.  
**Hito:** `HITO-HPI-01 — Contexto operativo común verificable del trabajo textual actual`.  
**Precedente:** [107](107-CONV-HPI-07_ROADMAP_MINIMO_HITO_HPI_01.md).

---

# 1. Objeto

Esta actuación ejecuta `R-HPI-03` y evalúa formalmente el primer hito después de:

~~~text
R-HPI-01
→ contrato realizativo mínimo
  + T-HPI-01…08

R-HPI-02
→ realización mínima
  del contexto operativo común
  en App ordinaria

R-HPI-03
→ validación integrada
~~~

No modifica los criterios del hito después de observar la solución.

La regla fijada previamente en 106 y 107 es:

~~~text
MHPI-01…08
→ 8/8 SATISFECHOS
= HITO-HPI-01 SATISFECHO

< 8/8
= HITO-HPI-01 NO SATISFECHO
~~~

---

# 2. Base material validada

La validación se ejerce sobre la App ordinaria y sobre la realización consolidada del contexto común.

Archivos de evidencia principales:

- `src/App.tsx`;
- `src/App.hpi.test.tsx`;
- `src/App.hpi.validation.test.tsx`;
- pruebas históricas de App, comparación, captura, IA y continuidad.

La diferencia realizativa mínima utiliza:

~~~text
ordinary.materials[].id
+
ordinary.current-work-id
↓
identidad operacional común
del trabajo actual
~~~

Las capturas pueden conservar `workId`; comparación e IA reutilizan la misma referencia de trabajo actual; y la constitución de un nuevo trabajo actualiza esa referencia.

---

# 3. Caso positivo integrado — V-HPI-01

La prueba formal `V-HPI-01` recorre:

~~~text
W1 trabajo actual
↓
seleccionar antecedente A
↓
W1 no cambia
↓
captura bajo W1
↓
captura reconoce W1
↓
comparación A/B
↓
comparación reconoce W1
↓
IA
↓
selector adopta W1 como contexto común
↓
desmontaje/remontaje
↓
W1 reaparece
↓
captura conserva asociación con W1
~~~

Resultado:

~~~text
V-HPI-01
→ PASS
~~~

---

# 4. Control negativo W1/W2 y variación — V-HPI-02

La prueba formal `V-HPI-02`, combinada con `T-HPI-07`, ejerce el control negativo exigido por 107.

Primera fase:

~~~text
trabajo actual = W1
antecedente = A
operación auxiliar = comparación A/B
↓
comparación bajo contexto W1
~~~

Cambio humano:

~~~text
W1
↓
constituir explícitamente
↓
W2
~~~

Segunda fase:

~~~text
trabajo actual = W2
antecedente = B
operación auxiliar = captura + comprobación de contexto IA
↓
captura pertenece a W2
IA adopta W2
IA no conserva W1 como contexto
~~~

Además, `T-HPI-07` demuestra que una captura creada bajo W1 y otra creada bajo W2 conservan asociaciones distintas y no migran entre contextos.

Por tanto la variación cambia efectivamente:

~~~text
trabajo
W1 → W2

antecedente
A → B

operación auxiliar
comparación → captura / IA
~~~

Resultado:

~~~text
control negativo W1/W2
→ PASS

variación material
→ PASS
~~~

---

# 5. Evaluación MHPI-01…08

## MHPI-01 — Trabajo actual inequívoco

Evidencia:

- `T-HPI-01`;
- constitución ordinaria de W1;
- persistencia como trabajo disponible.

Resultado:

~~~text
MHPI-01
→ SATISFECHO
~~~

## MHPI-02 — Identidad operacional persistente

Evidencia:

- `T-HPI-02`;
- `V-HPI-01`;
- desmontaje/remontaje sin reconstrucción manual del trabajo.

Resultado:

~~~text
MHPI-02
→ SATISFECHO
~~~

## MHPI-03 — Antecedente coexistente

Evidencia:

- `T-HPI-03`;
- `V-HPI-01`;
- `V-HPI-02`.

Seleccionar A o B no sustituye implícitamente W1/W2.

Resultado:

~~~text
MHPI-03
→ SATISFECHO
~~~

## MHPI-04 — Captura contextual

Evidencia:

- `T-HPI-04`;
- `T-HPI-07`;
- `V-HPI-01`;
- `V-HPI-02`.

La captura queda asociada mediante la identidad del trabajo y la asociación reaparece tras remontaje.

Resultado:

~~~text
MHPI-04
→ SATISFECHO
~~~

## MHPI-05 — Comparación contextual

Evidencia:

- `T-HPI-05`;
- `V-HPI-01`;
- `V-HPI-02`.

La comparación mantiene observable el trabajo que la contextualiza y no modifica automáticamente dicho trabajo.

Resultado:

~~~text
MHPI-05
→ SATISFECHO
~~~

## MHPI-06 — Apoyo IA bajo contexto común

Evidencia:

- `T-HPI-06`;
- `V-HPI-01`;
- `V-HPI-02`;
- pruebas históricas de apoyo IA separado.

La IA adopta el trabajo actual común cuando no existe una selección auxiliar explícita y conserva la separación y procedencia ya validadas históricamente.

Resultado:

~~~text
MHPI-06
→ SATISFECHO
~~~

## MHPI-07 — Continuidad operativa

Evidencia conjunta:

- `T-HPI-03…07`;
- `V-HPI-01`;
- `V-HPI-02`.

Antecedente, captura, comparación e IA no fuerzan un cambio implícito de trabajo ni requieren reconstrucción externa del contexto común.

Resultado:

~~~text
MHPI-07
→ SATISFECHO
~~~

## MHPI-08 — Entrada ordinaria y ausencia de artificios

Evidencia:

- `T-HPI-08`;
- `V-HPI-01`;
- `V-HPI-02`.

Las pruebas montan `<App />` y ejercen la superficie ordinaria sin props de contexto, JSON manual de contexto ni Realization aislada.

Resultado:

~~~text
MHPI-08
→ SATISFECHO
~~~

---

# 6. Resultado agregado

~~~text
MHPI-01 → SATISFECHO
MHPI-02 → SATISFECHO
MHPI-03 → SATISFECHO
MHPI-04 → SATISFECHO
MHPI-05 → SATISFECHO
MHPI-06 → SATISFECHO
MHPI-07 → SATISFECHO
MHPI-08 → SATISFECHO

TOTAL
→ 8/8
~~~

Por la regla fijada previamente:

~~~text
HITO-HPI-01
→ SATISFECHO
~~~

---

# 7. Validación técnica

## 7.1 Suite focal formal

~~~text
src/App.hpi.test.tsx
→ 8/8 PASS

src/App.hpi.validation.test.tsx
→ 2/2 PASS

TOTAL HPI
→ 10/10 PASS
~~~

## 7.2 Regresión global

~~~text
Test Files
→ 61/61 PASS

Tests
→ 508/508 PASS
~~~

Los 498 tests históricos continúan verdes y se añaden 10 pruebas HPI.

## 7.3 Build

~~~text
npm run build
→ PASS
~~~

## 7.4 Typecheck

El typecheck global no está verde por deuda previa ajena a HPI.

La comparación automática entre:

~~~text
baseline
→ 17b792d

estado validado HPI
→ realización + validación formal
~~~

produce exactamente los mismos 14 errores históricos, todos localizados en el patrimonio de comparación preexistente:

- usos históricos del namespace `JSX`;
- accesos potencialmente `undefined` en `detectLiteralDifferences.ts`.

Los dos errores inicialmente introducidos por la migración compatible de `currentWorkId` en `App.tsx` fueron detectados durante R-HPI-03 y corregidos antes del cierre.

Resultado:

~~~text
errores TypeScript nuevos atribuibles a HPI
→ 0

deuda TypeScript histórica
→ permanece
→ fuera del alcance de HITO-HPI-01
~~~

Esto no declara el typecheck global satisfecho.

## 7.5 Diff check

~~~text
git diff --check
→ PASS
~~~

---

# 8. Delimitación: GAP-HPI-02 permanece abierto

La validación no exige ni demuestra:

~~~text
resultado posterior
→ conserva antecedente utilizado
~~~

La coexistencia:

~~~text
trabajo actual
+
antecedente seleccionado
~~~

sí queda demostrada.

La genealogía persistente:

~~~text
antecedente
→ resultado posterior
~~~

permanece perteneciendo a `GAP-HPI-02`.

Por tanto no se amplía retrospectivamente HITO-HPI-01.

---

# 9. Decisión formal

Se decide:

> **DECLARAR SATISFECHO `HITO-HPI-01 — Contexto operativo común verificable del trabajo textual actual`.**

La consecuencia material es:

~~~text
GAP-HPI-01
→ cerrado en el alcance de HITO-HPI-01

R-HPI-01
→ CERRADA

R-HPI-02
→ CERRADA

R-HPI-03
→ CERRADA

HITO-HPI-01
→ SATISFECHO
~~~

Esto no implica:

- cierre de `H-PROJ-INT-01`;
- satisfacción de `GAP-HPI-02`;
- derivación automática de Architecture;
- derivación automática de una nueva Realization;
- apertura automática de Implementation adicional.

---

# 10. Estado resultante

~~~text
H-PROJ-INT-01
→ ACEPTADO Y ABIERTO

GAP-HPI-01
→ CERRADO EN EL ALCANCE DEL PRIMER HITO

HITO-HPI-01
→ SATISFECHO

GAP-HPI-02
→ PENDIENTE
→ siguiente hueco del orden de convergencia vigente

Architecture
→ NO DERIVADA POR ESTE RESULTADO
~~~

La siguiente actuación deberá derivarse específicamente desde `GAP-HPI-02` y su estado material, sin presuponer mecanismo, arquitectura ni implementación.
