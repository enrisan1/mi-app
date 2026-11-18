# R-HPI2-01 — Contrato realizativo y tests discriminantes de HITO-HPI-02

**Fecha:** 18/11/2026
**Estado:** CERRADA — contrato materializado en tests; patrón previo confirmado; producción no modificada.
**Hito:** HITO-HPI-02 — Continuidad reconocible entre antecedente reutilizado y resultado posterior.
**Precedente:** 110-CONV-HPI-09_ROADMAP_CONTRATO_Y_TESTS_HITO_HPI_02.md.

---

# 1. Objeto

Esta actuación ejecuta R-HPI2-01 sin modificar producción.

Se materializan REL-HPI2-01…08 como tests sobre la App ordinaria y se comprueba si el estado material actual produce el patrón fijado previamente:

~~~text
T-HPI2-01 → PASS
T-HPI2-02 → PASS
T-HPI2-03 → FAIL
T-HPI2-04 → FAIL
T-HPI2-05 → FAIL
T-HPI2-06 → FAIL
T-HPI2-07 → PASS
~~~

---

# 2. Archivo creado

~~~text
src/App.hpi2.test.tsx
~~~

El archivo monta únicamente:

~~~tsx
<App />
~~~

y no modifica App.tsx ni ninguna otra pieza de producción.

---

# 3. Casos materializados

## T-HPI2-01

Recupera y selecciona A mediante la superficie ordinaria de materiales anteriores.

Resultado esperado: PASS.

## T-HPI2-02

Selecciona A, escribe W2 y ejecuta «Continuar con este material». Comprueba que W2 queda constituido y persistido.

Resultado esperado: PASS.

## T-HPI2-03

Después de constituir W2 y perder la selección transitoria, vuelve a inspeccionar W2 y exige que el artículo ordinario del resultado haga reconocible A como antecedente.

Resultado esperado: FAIL.

## T-HPI2-04

Constituye A→W2, desmonta y remonta App, vuelve a localizar W2 y exige que A siga siendo reconocible como antecedente.

Resultado esperado: FAIL.

## T-HPI2-05

Constituye A→W2 y B→W3, remonta App y exige que ambas relaciones sobrevivan separadamente.

Resultado esperado: FAIL.

## T-HPI2-06

Sobre la misma variación exige además ausencia de atribución cruzada:

~~~text
W2 → A
W2 ≠ B
W3 → B
W3 ≠ A
~~~

Resultado esperado: FAIL.

## T-HPI2-07

Comprueba que el recorrido contractual se ejerce desde la App ordinaria, sin props especiales ni relación precargada.

Resultado esperado: PASS.

---

# 4. Primera ejecución y descarte de un falso rojo

La primera ejecución produjo 3 PASS y 4 FAIL, pero los cuatro fallos pasaban por un helper basado en getByText(content).

El log mostró:

~~~text
TestingLibraryElementError:
Found multiple elements with the text:
Resultado W2 desde A
~~~

El mismo contenido aparecía legítimamente en varios option y en el artículo del material.

Por tanto ese primer rojo no se aceptó como evidencia material.

Se corrigió únicamente el helper de test para localizar el article ordinario que contiene el botón «Usar este material N».

No se modificó producción.

---

# 5. Segunda ejecución — patrón válido

Tras corregir el helper:

~~~text
T-HPI2-01 → PASS
T-HPI2-02 → PASS
T-HPI2-03 → FAIL
T-HPI2-04 → FAIL
T-HPI2-05 → FAIL
T-HPI2-06 → FAIL
T-HPI2-07 → PASS
~~~

Resultado agregado:

~~~text
7 tests
→ 3 passed
→ 4 failed
~~~

Los cuatro fallos discriminantes ya no son errores de localización.

El motivo material observado es:

~~~text
Expected element to have text content:
Antecedente A / Antecedente B
~~~

Es decir:

~~~text
W2 existe
W3 existe
A existe
B existe
la selección funciona
la constitución funciona

pero

los artículos ordinarios de W2/W3
no hacen reconocible
qué antecedente intervino
~~~

Esto coincide exactamente con GAP-HPI-02.

---

# 6. Control negativo

La ejecución de T-HPI2-05/06 confirma que el contrato no se reduce a una única relación.

El futuro estado verde deberá demostrar:

~~~text
A → W2
B → W3

y no:

W2 → B
W3 → A
~~~

Con ello se descartan soluciones basadas únicamente en el último antecedente seleccionado.

---

# 7. Regresión histórica

Se ejecutó:

~~~text
npx vitest run --exclude src/App.hpi2.test.tsx
~~~

Resultado:

~~~text
Test Files 61 passed (61)
Tests      508 passed (508)
~~~

Por tanto la introducción del contrato de tests no modifica el comportamiento previo ni rompe HITO-HPI-01.

---

# 8. Evaluación de gates R-HPI2-01

~~~text
R2-G01
REL-HPI2-01…08 fijados
→ PASS

R2-G02
T-HPI2-01…07 materializados
→ PASS

R2-G03
controles de patrimonio PASS
T-HPI2-01/02/07
→ PASS

R2-G04
T-HPI2-03…06 FAIL
por ausencia material correcta
→ PASS

R2-G05
control A→W2 / B→W3
incluido
→ PASS

R2-G06
tests no prescriben
forma interna concreta
→ PASS

R2-G07
regresión HPI-01 + histórica
508/508 verde
→ PASS
~~~

Resultado:

~~~text
R-HPI2-01
→ SATISFECHA
~~~

---

# 9. Estado resultante

~~~text
HITO-HPI-02
→ NO SATISFECHO todavía

R-HPI2-01
→ CERRADA

R-HPI2-02
→ SIGUIENTE ACTUACIÓN

producción
→ SIN MODIFICAR

Architecture
→ NO DERIVADA
~~~

La siguiente actuación justificable es derivar y realizar la mínima diferencia de producción capaz de convertir T-HPI2-03…06 en verdes sin romper T-HPI2-01/02/07 ni los 508 tests previos.