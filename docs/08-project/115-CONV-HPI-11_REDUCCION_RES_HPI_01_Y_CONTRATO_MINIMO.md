# CONV-HPI-11 — Reducción de RES-HPI-01 y contrato mínimo previo a producción

**Fecha:** 18/11/2026
**Estado:** CERRADA — RES-HPI-01 reducido; contrato realizativo mínimo y tests discriminantes previos determinados; producción no modificada.
**Horizonte:** H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual.
**Residuo:** RES-HPI-01 — Convergencia inmediata de la primera creación con el contexto operativo común.
**Precedente:** [114](114-CONV-HPI-10_REEVALUACION_GLOBAL_H_P_PROJ_INT_01.md).

---

# 1. Objeto

CONV-HPI-10 demostró que las dos formas aceptadas de establecimiento del trabajo no convergen materialmente:

~~~text
retomar trabajo existente
→ contexto operativo común disponible

crear primer trabajo
→ texto persistido y visible
→ contexto operativo común ausente
~~~

Esta actuación reduce exclusivamente ese residuo y fija, antes de modificar producción, la diferencia material exigida, las condiciones observables, los falsos positivos y los tests discriminantes.

---

# 2. Precisión del residuo

No basta con decir que el contexto aparece al remontar. En la primera creación se ejecuta:

~~~text
savePrevious(W1)
+
setAccepted(true)
~~~

pero W1 no entra en ordinary.materials y App no establece una identidad operacional común.

Si existen materiales A/B y se remonta:

~~~text
previous = W1
ordinary.materials = [A, B]
↓
no existe material cuyo content sea W1
↓
el fallback de currentWorkId no puede resolver W1
~~~

Por tanto, un simple remount no convierte por sí mismo el primer W1 en trabajo actual común.

---

# 3. Núcleo material

~~~text
sin previous
↓
persona crea W1
↓
W1 queda válido para ResumeExperience

pero

W1
↛ identidad operacional común
↛ contexto de captura
↛ contexto de comparación
↛ contexto IA
~~~

En cambio, una continuación desde un previous existente sí produce un resultado que App incorpora al contexto común.

---

# 4. Formulación reducida

> **RES-HPI-01 — La primera creación válida debe constituir, en el mismo acto observable, un trabajo textual actual que participe inmediatamente y de forma persistente en el contexto operativo común ya utilizado por las operaciones ordinarias pertinentes.**

~~~text
sin trabajo actual
↓
Crear W1
↓
W1 = trabajo actual común
↓
captura / comparación / IA
pueden reconocer W1
↓
interrupción
↓
W1 sigue siendo trabajo actual común
~~~

---

# 5. Qué significa «mismo acto observable»

No se exige atomicidad técnica. Se exige que, cuando termine la acción ordinaria Crear, W1 ya sea contexto común sin otra actuación constitutiva humana.

No sería suficiente exigir recarga, remount, segunda creación, apertura de otra trayectoria, selección duplicada, copia manual, JSON manual o migración manual.

---

# 6. Contrato realizativo mínimo — REL-RESHPI-01…08

## REL-RESHPI-01 — Primera creación humana efectiva

Partiendo sin previous, la persona escribe W1 y ejecuta Crear. W1 debe quedar visible y válido. No se admite precargar W1 como previous, currentWork ni relación auxiliar.

## REL-RESHPI-02 — Constitución inmediata como trabajo actual común

Al finalizar Crear, W1 debe ser reconocible como trabajo actual común sin remount ni segunda actuación humana.

## REL-RESHPI-03 — Captura inmediata contextual

Una captura creada inmediatamente después de Crear W1 debe quedar asociada a W1; no basta con que exista.

## REL-RESHPI-04 — Comparación inmediata contextual

Si A/B ya existen como materiales comparables, una comparación abierta inmediatamente después de Crear W1 debe hacer reconocible W1 como contexto, sin confundir W1 con A/B.

## REL-RESHPI-05 — IA inmediata bajo contexto común

Sin selección auxiliar adicional, la operación de apoyo IA debe reconocer W1 como obra/contexto actual inmediatamente después de Crear.

## REL-RESHPI-06 — Persistencia tras interrupción

Después de Crear W1 y unmount/remount, W1 debe seguir siendo trabajo actual común. No basta con mostrarlo sólo como aportación anterior.

## REL-RESHPI-07 — No contaminación de materiales previos

Con A/B existentes, Crear W1 debe dejar W1 como current y A/B como materiales distintos, sin convertir A/B en current ni sustituirlos.

## REL-RESHPI-08 — App ordinaria y no prescripción técnica

La evidencia usa únicamente App y controles ordinarios. El contrato no prescribe onResult, callbacks, nombres de campos, currentWorkId, ordinary.current-work-id, OrdinaryMaterial, helpers, store, React Context, reducer, repository ni Architecture.

---

# 7. Falsos positivos rechazados

No satisfacen RES-HPI-01:

- persistir sólo ru2m1.previous;
- esperar a la reanudación;
- usar una clave global de último texto sin identidad operacional;
- arreglar sólo captura dejando comparación/IA fuera;
- mostrar W1 sin que las operaciones compartan realmente su identidad;
- precargar W1 como ordinary material o current antes del test.

---

# 8. Tests discriminantes previos — T-RESHPI-01…08

## T-RESHPI-01 — patrimonio de primera creación

~~~text
sin previous
→ escribir W1
→ Crear
→ W1 visible
→ W1 persistido como recuperable
~~~

**Estado previsto actual:** PASS.

## T-RESHPI-02 — contexto común inmediato

~~~text
sin previous
→ Crear W1
→ sin remount
→ W1 reconocible como trabajo actual común
~~~

**Estado previsto actual:** FAIL.

## T-RESHPI-03 — captura inmediata

~~~text
Crear W1
→ capturar C1
→ C1 reconoce W1
~~~

**Estado previsto actual:** FAIL.

## T-RESHPI-04 — comparación inmediata

~~~text
A/B existentes
+ previous ausente
→ Crear W1
→ comparar A/B
→ comparación reconoce W1 como contexto
~~~

**Estado previsto actual:** FAIL.

## T-RESHPI-05 — IA inmediata

~~~text
Crear W1
→ apoyo IA
→ W1 es contexto efectivo por defecto
~~~

**Estado previsto actual:** FAIL.

## T-RESHPI-06 — persistencia del contexto creado

~~~text
Crear W1
→ unmount
→ mount App
→ W1 sigue siendo trabajo actual común
~~~

Debe comprobarse mediante una operación contextual, no sólo leyendo Aportación anterior.

**Estado previsto actual:** FAIL.

## T-RESHPI-07 — A/B no contaminados

~~~text
A/B existen
→ Crear W1
→ W1 current
→ A/B siguen distinguibles
~~~

**Estado previsto actual:** FAIL por ausencia de W1 current; no porque A/B desaparezcan.

## T-RESHPI-08 — control de rama retomada

~~~text
W0 ya es current común
→ App
→ captura/comparación/IA siguen bajo W0
~~~

**Estado previsto actual:** PASS.

---

# 9. Patrón rojo esperado

~~~text
T-RESHPI-01 → PASS
T-RESHPI-02 → FAIL
T-RESHPI-03 → FAIL
T-RESHPI-04 → FAIL
T-RESHPI-05 → FAIL
T-RESHPI-06 → FAIL
T-RESHPI-07 → FAIL
T-RESHPI-08 → PASS
~~~

Forma compacta:

~~~text
PASS / FAIL×6 / PASS
~~~

Los seis rojos deben fallar por la diferencia material descrita, no por errores de fixture, selector o setup.

---

# 10. Relación con los criterios globales

El cierre de REL-RESHPI-01…08 deberá cerrar exclusivamente los parciales derivados en 114:

| Criterio | Efecto esperado |
| --- | --- |
| C01-B | primera creación comparte identidad operacional |
| C06-B | captura inmediata asociada |
| C07-B | comparación inmediata contextual |
| C08-A | IA inmediata con contexto pertinente |
| C10-C | procedencia contextual suficiente |
| G02 | crear/retomar convergen |
| G04 | auxiliares contextualizadas también tras crear |
| G06 | no hace falta reconstrucción externa tras crear |

No se reabren C-HPI-05, D-HPI-01/02, GAP-HPI-02 ni HITO-HPI-02.

---

# 11. Nuevo hito y Architecture

No se deriva un nuevo hito: RES-HPI-01 es una obligación residual de GAP-HPI-01 detectada por el gate superior, no una tercera capacidad independiente.

Architecture tampoco se deriva: sólo debe hacerse converger primera creación con el contexto común ya existente.

---

# 12. Opciones realizativas aún abiertas

Se mantienen abiertas al menos:

- notificar a App una constitución inicial;
- introducir un contrato específico para primera creación;
- derivar/constituir currentWork desde el estado inicial persistido;
- cualquier diferencia mínima equivalente.

No se selecciona todavía ninguna.

---

# 13. Gate técnico de la futura realización

Después de una futura modificación de producción deberán observarse:

~~~text
T-RESHPI-01…08
→ 8/8 PASS

HPI-01
→ verde

HPI-02
→ verde

V-HPI-GLOBAL-01
→ verde

suite global
→ sin regresiones

build
→ PASS

typecheck
→ 0 errores nuevos

git diff --check
→ PASS
~~~

Esto no equivale todavía a cerrar el horizonte; después habrá una última reevaluación global.

---

# 14. Roadmap mínimo residual

~~~text
R-RESHPI-01
→ materializar T-RESHPI-01…08
→ sin modificar producción
→ confirmar PASS / FAIL×6 / PASS

R-RESHPI-02
→ realizar la mínima diferencia de producción
→ volver verdes T-RESHPI-02…07
→ sin romper controles ni hitos

R-RESHPI-03
→ validar RES-HPI-01
→ reevaluar C01-B, C06-B, C07-B, C08-A, C10-C, G02, G04, G06 y CF-HPI-01
~~~

No se deriva una cuarta actuación antes de observar R-RESHPI-03.

---

# 15. Decisión

> **RES-HPI-01 queda reducido a la necesidad de que la primera creación válida constituya inmediatamente y de forma persistente el mismo tipo de contexto operativo común que ya existe para un trabajo retomado, de modo que captura, comparación e IA puedan usar W1 sin reanudación intermedia ni selección duplicada.**

~~~text
REL-RESHPI-01…08
→ FIJADO

T-RESHPI-01…08
→ DETERMINADOS

patrón esperado
→ PASS / FAIL×6 / PASS

RES-HPI-01
→ REDUCIDO
→ ABIERTO

producción
→ NO MODIFICADA

nuevo hito
→ NO DERIVADO

Architecture
→ NO DERIVADA
~~~

Siguiente actuación justificable:

> **R-RESHPI-01 — crear T-RESHPI-01…08 sobre la App ordinaria, sin modificar producción, y comprobar que aparece el patrón PASS / FAIL×6 / PASS por las razones materiales previstas.**