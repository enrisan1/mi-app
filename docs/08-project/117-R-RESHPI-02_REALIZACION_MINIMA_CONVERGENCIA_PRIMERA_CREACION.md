# R-RESHPI-02 — Realización mínima de convergencia de primera creación

**Fecha:** 18/11/2026
**Estado:** CERRADA — diferencia mínima realizada y validada; T-RESHPI-01…08 = 8/8 PASS; RES-HPI-01 pendiente únicamente de validación formal final.
**Horizonte:** H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual.
**Residuo:** RES-HPI-01 — Convergencia inmediata de la primera creación con el contexto operativo común.
**Precedentes:** [115](115-CONV-HPI-11_REDUCCION_RES_HPI_01_Y_CONTRATO_MINIMO.md) y [116](116-R-RESHPI-01_CONTRATO_ROJO_PRIMERA_CREACION.md).

---

# 1. Objeto

R-RESHPI-01 dejó fijado el patrón:

~~~text
T-RESHPI-01 → PASS
T-RESHPI-02…07 → FAIL
T-RESHPI-08 → PASS
~~~

Esta actuación debía introducir la mínima diferencia de producción capaz de convertir T-RESHPI-02…07 en verdes sin romper los controles positivos, HPI-01, HPI-02, la validación global ni el patrimonio histórico.

---

# 2. Alternativas consideradas

## A — reutilizar onResult con un previous ficticio

Ventaja: pocas líneas.

Problema: deformaría SituatedResult porque la primera creación no posee un antecedente real. Se rechaza.

## B — notificación específica de primera constitución

ResumeExperience conserva su semántica histórica y notifica a App únicamente que el primer texto válido acaba de constituirse.

App integra ese texto en el mismo mecanismo ordinario que ya utiliza para un trabajo actual.

Ventajas:

- no inventa antecedente;
- no crea almacenamiento paralelo;
- reutiliza ordinary.materials y currentWorkId;
- mantiene separada la semántica de primera creación frente a continuación.

Se selecciona.

## C — inferencia posterior desde persistencia

Podría intentar derivar currentWork desde ru2m1.previous.

Problema: W1 todavía no existiría necesariamente como material ordinario y la convergencia inmediata seguiría sin estar garantizada.

Se rechaza.

---

# 3. Diferencia de producción

Se modifican sólo:

~~~text
src/realizations/ru2m1/ResumeExperience.tsx
src/App.tsx
~~~

## 3.1 ResumeExperience

Se añade un callback opcional:

~~~text
onInitialResult?: (current: string) => void
~~~

En la primera creación válida:

~~~text
savePrevious(currentInput)
→ onInitialResult?.(currentInput)
→ setAccepted(true)
~~~

No se altera SituatedResult ni createFromPrevious.

## 3.2 App

Se concentra la constitución ordinaria en una función local:

~~~text
establishCurrentWork(content)
~~~

que:

~~~text
setAvailablePostV1Current(content)
↓
crea OrdinaryMaterial
↓
persiste ordinary.current-work-id
↓
actualiza currentWorkId
↓
actualiza ordinary.materials
~~~

ResumeExperience usa:

~~~text
onInitialResult={establishCurrentWork}
onResult={(result) => establishCurrentWork(result.current)}
~~~

Así primera creación y continuación convergen en el mismo contexto ordinario sin compartir una semántica falsa de antecedente.

---

# 4. Minimalidad

No se introduce:

- store;
- Context;
- reducer;
- nueva clave de persistencia;
- migración;
- nuevo modelo de dominio;
- nueva Realization;
- Architecture;
- cambio en lineage;
- generalización de materiales;
- modificación del modelo SituatedResult.

La diferencia productiva neta es local al borde ResumeExperience → App.

---

# 5. Ajustes de tests por eliminación de supuestos de unicidad visual

La nueva conducta correcta hace que un trabajo recién creado aparezca simultáneamente:

- en el resultado visible de ResumeExperience;
- como obra ordinaria;
- como opción del apoyo IA.

Dos tests históricos y T-RESHPI-01 usaban getByText sobre el contenido y asumían implícitamente que el texto aparecía una sola vez.

Esto no era una garantía de producto.

Se ajustaron únicamente las consultas para comprobar la misma semántica en su superficie competente:

~~~text
src/App.reshpi.test.tsx
src/App.hpi.test.tsx
src/App.kgv.test.tsx
~~~

No se relajó ninguna condición material.

---

# 6. Resultado del contrato RES-HPI

Resultado final:

~~~text
T-RESHPI-01…08
→ 8/8 PASS
~~~

En particular:

~~~text
T02 → W1 disponible inmediatamente como trabajo común
T03 → captura inmediata reconoce W1
T04 → comparación A/B reconoce W1 como contexto
T05 → IA adopta W1 sin segunda selección
T06 → W1 conserva contexto común tras remount
T07 → A/B permanecen distintos mientras W1 queda current
~~~

T01 y T08 permanecen verdes.

---

# 7. Preservación HPI

Se ejecutaron:

~~~text
src/App.hpi.test.tsx
src/App.hpi.validation.test.tsx
src/App.hpi2.test.tsx
src/App.hpi2.validation.test.tsx
src/App.hpi.global.validation.test.tsx
~~~

Resultado:

~~~text
5 archivos
20/20 tests PASS
~~~

---

# 8. Preservación de ResumeExperience

Se ejecutaron:

~~~text
ResumeExperience.test.tsx
ResumeExperience.pv003.test.tsx
~~~

Resultado:

~~~text
2 archivos
41/41 tests PASS
~~~

Por tanto la nueva notificación opcional no rompe el contrato histórico de R-U2-M1.

---

# 9. Regresión global

Resultado:

~~~text
Test Files
→ 65/65 PASS

Tests
→ 526/526 PASS
~~~

Los 526 corresponden a los 518 tests previos más T-RESHPI-01…08.

---

# 10. Build y TypeScript

Build:

~~~text
PASS
✓ built in 177ms
~~~

Typecheck:

~~~text
baseline
→ exit code 2
→ 14 errores históricos

realización
→ exit code 2
→ 14 errores

delta
→ 0 errores nuevos
~~~

Los 14 errores preexistentes no pertenecen a R-RESHPI-02.

---

# 11. Diff check

~~~text
git diff --check
→ PASS
~~~

---

# 12. Validación y consolidación

La validación autoritativa se ejecutó en la rama temporal r-reshpi-02-minimal.

Run:

~~~text
44412656079
~~~

Todos los gates finalizaron success.

Los cinco archivos consolidados en feature/task-filters tienen exactamente los mismos blobs que la versión validada.

Blobs relevantes:

~~~text
ResumeExperience.tsx
→ 3e4cf2181e74d3b26d370579212b337af2d43eaf

App.tsx
→ 95324bd6ad8ac7473a435afade186d06ea0898b0

App.reshpi.test.tsx
→ f824215bb7064d04c5f138f6bfe9b58db0f1f512

App.hpi.test.tsx
→ 200d23a960feedc86788cc6074bd76d511384fe1

App.kgv.test.tsx
→ 90a12ec90984962eeec173069752b3c7d9ca6ba5
~~~

El workflow temporal no se consolida.

---

# 13. Decisión

Se decide:

> **R-RESHPI-02 queda SATISFECHA y CERRADA.**

La realización demuestra materialmente la convergencia requerida, pero RES-HPI-01 no se declara todavía formalmente cerrado hasta R-RESHPI-03.

Estado:

~~~text
R-RESHPI-01
→ CERRADA

R-RESHPI-02
→ CERRADA

T-RESHPI-01…08
→ 8/8 PASS

RES-HPI-01
→ REALIZADO MATERIALMENTE
→ PENDIENTE DE VALIDACIÓN FORMAL

HITO-HPI-01
→ preservado

HITO-HPI-02
→ preservado

Architecture
→ NO DERIVADA
~~~

---

# 14. Siguiente actuación justificable

> **R-RESHPI-03 — validar formalmente RES-HPI-01 contra REL-RESHPI-01…08 y reevaluar C01-B, C06-B, C07-B, C08-A, C10-C, G02, G04, G06 y CF-HPI-01 para decidir si H-PROJ-INT-01 puede finalmente declararse satisfecho/cerrado.**

---

# 15. Resultado posterior de R-RESHPI-03

[118](118-R-RESHPI-03_VALIDACION_FORMAL_Y_CIERRE_H_PROJ_INT_01.md) valida formalmente la realización.

Resultado:

~~~text
REL-RESHPI-01…08
→ 8/8 SATISFECHOS

V-RESHPI-01
→ PASS

C01-B, C06-B, C07-B,
C08-A, C10-C,
G02, G04, G06
→ SATISFECHOS

CF-HPI-01-A…J
→ 10/10 SATISFECHAS

RES-HPI-01
→ CERRADO

H-PROJ-INT-01
→ SATISFECHO
→ CERRADO
~~~

R-RESHPI-02 permanece cerrada como realización mínima; no se deriva trabajo productivo adicional desde este residuo.
