# R-HPI2-02 — Realización mínima de continuidad antecedente → resultado

**Fecha:** 18/11/2026
**Estado:** CERRADA — diferencia mínima de producción realizada y validada; HITO-HPI-02 aún pendiente de validación formal R-HPI2-03.
**Hito:** HITO-HPI-02 — Continuidad reconocible entre antecedente reutilizado y resultado posterior.
**Precedente:** 111-R-HPI2-01_CONTRATO_Y_TESTS_DISCRIMINANTES.md.

---

# 1. Objeto

Esta actuación deriva y realiza la mínima diferencia de producción capaz de convertir T-HPI2-03…06 en verdes sin romper T-HPI2-01/02/07, HPI-01 ni la regresión previa.

---

# 2. Reducción realizativa

Se compararon implícitamente dos familias de solución:

~~~text
A
colección separada de relaciones

B
relación mínima opcional
ligada al propio OrdinaryMaterial resultado
~~~

El patrimonio ya ofrece identidad estable de materiales mediante ordinary.materials[].id. No existe fundamento para introducir una colección adicional, store, grafo o repository.

Se adopta la diferencia mínima:

~~~text
OrdinaryMaterial
+ antecedentMaterialId? 
~~~

El campo es opcional para preservar compatibilidad con materiales históricos y con materiales que no proceden del recorrido «Continuar con este material».

---

# 3. Cambio de producción

En src/App.tsx:

~~~ts
type OrdinaryMaterial = {
  id: string;
  content: string;
  antecedentMaterialId?: string;
};
~~~

Cuando la persona ejecuta «Continuar con este material», el nuevo resultado conserva:

~~~text
antecedentMaterialId
→ selectedMaterialId
~~~

Por tanto:

~~~text
A seleccionado
+
W2 constituido
↓
W2.antecedentMaterialId = A.id
~~~

Al presentar los materiales anteriores, si un material conserva esa referencia y el antecedente sigue disponible, el artículo ordinario muestra:

~~~text
Antecedente utilizado: <contenido del antecedente>
~~~

Esto hace la relación reconocible humanamente sin introducir una superficie paralela.

---

# 4. Compatibilidad

Los materiales históricos con forma:

~~~text
{ id, content }
~~~

siguen siendo válidos porque antecedentMaterialId es opcional.

Los materiales creados por otros recorridos que no derivan de una reutilización explícita tampoco reciben una relación artificial.

---

# 5. Lo que no se introdujo

No se introdujeron:

- grafo de procedencia;
- colección de edges;
- múltiples padres;
- versionado general;
- merge;
- diff semántico;
- repository nuevo;
- store nuevo;
- React Context;
- nueva Realization;
- Architecture.

---

# 6. Validación temporal

La variante se validó primero en la rama temporal r-hpi2-02-minimal.

## 6.1 HPI2 focal

~~~text
src/App.hpi2.test.tsx
→ 7/7 PASS
~~~

Por tanto T-HPI2-03…06 pasan sin modificar sus expectativas.

## 6.2 HPI-01

~~~text
src/App.hpi.test.tsx
src/App.hpi.validation.test.tsx
→ 10/10 PASS
~~~

El primer hito no se reabre.

## 6.3 Suite global

~~~text
Test Files 62 passed (62)
Tests      515 passed (515)
~~~

Descomposición:

~~~text
508 pruebas previas
+ 7 HPI2
= 515
~~~

## 6.4 Build

~~~text
vite build
→ PASS
~~~

## 6.5 Typecheck

Se comparó el estado actual con el baseline inmediatamente anterior a R-HPI2-02.

~~~text
baseline
→ 14 errores TypeScript históricos

R-HPI2-02
→ 14 errores TypeScript

diferencia
→ 0 errores nuevos
~~~

El typecheck global continúa rojo históricamente; no se declara verde.

## 6.6 Diff check

~~~text
git diff --check
→ PASS
~~~

---

# 7. Incidencia del workflow temporal

La primera validación técnica completa produjo un fallo en diff check y una comparación de typecheck no válida porque actions/checkout había usado fetch-depth 1 y el commit baseline no estaba disponible localmente.

El problema pertenecía al workflow temporal, no a producción.

Se cambió únicamente el workflow a fetch-depth 0 y se repitió la validación.

La segunda ejecución confirmó:

~~~text
HPI2         → PASS
HPI-01       → PASS
suite global → PASS
build        → PASS
typecheck Δ  → 0 errores nuevos
diff check   → PASS
~~~

---

# 8. Evaluación de R-HPI2-02

~~~text
continuidad A→W2
→ persistente

continuidad B→W3
→ persistente

atribución cruzada
→ no observada

App ordinaria
→ conserva la relación

HPI-01
→ sin regresión

regresión previa
→ 508/508

Architecture
→ NO DERIVADA
~~~

Resultado:

> **R-HPI2-02 — SATISFECHA.**

---

# 9. Estado resultante

~~~text
HITO-HPI-02
→ todavía NO DECLARADO SATISFECHO

R-HPI2-01
→ CERRADA

R-HPI2-02
→ CERRADA

R-HPI2-03
→ SIGUIENTE ACTUACIÓN
~~~

La siguiente actuación justificable es validar formalmente MHPI2-01…06 sobre la realización integrada, incluyendo el caso positivo, el control A→W2 / B→W3 y la persistencia tras interrupción.