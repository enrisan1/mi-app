# R-HPI2-03 — Validación formal de HITO-HPI-02

**Fecha:** 18/11/2026  
**Estado:** CERRADA — MHPI2-01…06 validados 6/6; HITO-HPI-02 SATISFECHO.  
**Horizonte:** H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual.  
**Hito:** HITO-HPI-02 — Continuidad reconocible entre antecedente reutilizado y resultado posterior.  
**Precedente:** 112-R-HPI2-02_REALIZACION_MINIMA_CONTINUIDAD_ANTECEDENTE_RESULTADO.md.

---

# 1. Objeto

Esta actuación valida formalmente HITO-HPI-02 contra sus seis criterios:

~~~text
MHPI2-01…06
~~~

La decisión sólo puede ser:

~~~text
6/6
→ HITO-HPI-02 SATISFECHO

< 6/6
→ HITO-HPI-02 NO SATISFECHO
~~~

No se utiliza puntuación parcial.

---

# 2. Principio de validación

La validación formal no inspecciona `antecedentMaterialId` ni reconstruye relaciones leyendo JSON persistido.

La evidencia se obtiene desde la App ordinaria mediante:

~~~text
render(<App />)
→ recuperar materiales anteriores
→ seleccionar antecedente
→ constituir resultado
→ desmontar App
→ remontar App
→ volver a inspeccionar materiales
→ reconocer la relación
~~~

Los materiales A y B pueden existir como precondición del caso, pero las relaciones:

~~~text
A→W2
B→W3
~~~

no se precargan.

W2 y W3 se constituyen durante la propia ejecución mediante «Continuar con este material».

---

# 3. Archivo de validación

Se creó:

~~~text
src/App.hpi2.validation.test.tsx
~~~

con dos casos integrados.

---

# 4. V-HPI2-01 — caso positivo integrado

Recorrido:

~~~text
W1 vigente
↓
examinar materiales anteriores
↓
seleccionar A
↓
confirmar A como material seleccionado
↓
desarrollar W2
↓
Continuar con este material
↓
W2 queda constituido
↓
W2 es textual y distinto de A
↓
unmount
↓
mount App
↓
volver a examinar materiales
↓
localizar W2 como material ordinario
↓
W2 hace reconocible A
~~~

El caso no consulta el campo interno de relación.

Resultado:

~~~text
V-HPI2-01
→ PASS
~~~

Cobertura principal:

~~~text
MHPI2-01
MHPI2-02
MHPI2-03
MHPI2-04
MHPI2-06
~~~

---

# 5. V-HPI2-02 — control discriminante

Recorrido:

~~~text
A → W2
B → W3
↓
unmount
↓
mount App
↓
revisar materiales
~~~

Comprobaciones:

~~~text
W2 contiene A como antecedente reconocible
W2 no contiene B como antecedente

W3 contiene B como antecedente reconocible
W3 no contiene A como antecedente
~~~

Además W2 y W3 siguen disponibles como materiales ordinarios reutilizables.

Resultado:

~~~text
V-HPI2-02
→ PASS
~~~

Cobertura principal:

~~~text
MHPI2-04
MHPI2-05
MHPI2-06
~~~

Este control falsaría soluciones basadas en:

- último antecedente global;
- último trabajo creado;
- antecedente único hardcodeado;
- asociación por simple orden temporal.

---

# 6. Evaluación criterio por criterio

## MHPI2-01 — Antecedente efectivamente recuperado y seleccionado

Hechos observados:

- A ya pertenece a materiales anteriores;
- la persona abre «Examinar materiales anteriores»;
- pulsa «Usar este material 2»;
- la App muestra A como «Contenido seleccionado».

La relación futura no está precargada.

Resultado:

~~~text
MHPI2-01
→ SATISFECHO
~~~

## MHPI2-02 — Resultado posterior diferenciado

En V-HPI2-01:

- A permanece como antecedente;
- la persona escribe «Resultado formal W2»;
- ejecuta «Continuar con este material»;
- W2 queda constituido;
- W2 no es textual ni operacionalmente idéntico a A;
- tras reanudación W2 sigue disponible como material ordinario.

Resultado:

~~~text
MHPI2-02
→ SATISFECHO
~~~

## MHPI2-03 — Relación A → W2 reconocible después

Tras perder por completo el estado React mediante unmount/remount:

- W2 reaparece como material;
- el propio artículo ordinario de W2 hace reconocible A;
- la prueba no depende de memoria humana;
- no depende de similitud textual;
- no depende del último antecedente;
- no depende de mantener abierta la vista original.

Resultado:

~~~text
MHPI2-03
→ SATISFECHO
~~~

## MHPI2-04 — Persistencia a través de interrupción relevante

Tanto V-HPI2-01 como V-HPI2-02 desmontan y remontan la App.

Después:

~~~text
W2 ← A
W3 ← B
~~~

siguen siendo reconocibles sin reconstrucción manual.

Resultado:

~~~text
MHPI2-04
→ SATISFECHO
~~~

## MHPI2-05 — Discriminación y ausencia de atribución falsa

V-HPI2-02 demuestra simultáneamente:

~~~text
W2 → A
W3 → B

W2 ≠ B
W3 ≠ A
~~~

La variación cambia antecedente y resultado.

Resultado:

~~~text
MHPI2-05
→ SATISFECHO
~~~

## MHPI2-06 — Entrada ordinaria y alcance reducido

La prueba:

- monta únicamente `<App />`;
- usa controles ordinarios;
- no pasa props de lineage;
- no precarga relaciones;
- no edita JSON después de crear los resultados;
- no usa harness de procedencia;
- no exige grafo, múltiples antecedentes ni historial universal.

Resultado:

~~~text
MHPI2-06
→ SATISFECHO
~~~

---

# 7. Resultado 6/6

~~~text
MHPI2-01 → SATISFECHO
MHPI2-02 → SATISFECHO
MHPI2-03 → SATISFECHO
MHPI2-04 → SATISFECHO
MHPI2-05 → SATISFECHO
MHPI2-06 → SATISFECHO
~~~

Resultado:

~~~text
6/6
~~~

Aplicando la regla definida en CONV-HPI-08:

> **HITO-HPI-02 — SATISFECHO.**

---

# 8. Regresión y gates técnicos

## Validación formal HPI2

~~~text
src/App.hpi2.validation.test.tsx
→ 2/2 PASS
~~~

## Contrato HPI2

~~~text
src/App.hpi2.test.tsx
→ 7/7 PASS
~~~

## Preservación HPI-01

~~~text
src/App.hpi.test.tsx
src/App.hpi.validation.test.tsx
→ 10/10 PASS
~~~

## Suite global

~~~text
Test Files 63 passed (63)
Tests      517 passed (517)
~~~

Descomposición:

~~~text
515 tests previos a R-HPI2-03
+ 2 validaciones formales HPI2
= 517
~~~

## Build

~~~text
npm run build
→ PASS
~~~

## Typecheck

~~~text
baseline
→ 14 errores TypeScript históricos

estado R-HPI2-03
→ 14 errores

errores nuevos
→ 0
~~~

El typecheck global continúa históricamente rojo y no se declara verde.

## Diff check

~~~text
git diff --check
→ PASS
~~~

---

# 9. GAP-HPI-02

La diferencia que definía GAP-HPI-02 era:

~~~text
antecedente utilizado
→ resultado posterior
→ relación perdida tras la constitución
~~~

La validación demuestra ahora:

~~~text
A → W2
B → W3

persisten
son reconocibles
se discriminan
sobreviven a interrupción
~~~

Por tanto:

> **GAP-HPI-02 — CERRADO en el alcance de HITO-HPI-02.**

Esto no implica por sí solo la clausura automática de H-PROJ-INT-01.

---

# 10. Estado del roadmap

~~~text
R-HPI2-01
→ CERRADA

R-HPI2-02
→ CERRADA

R-HPI2-03
→ CERRADA

HITO-HPI-02
→ SATISFECHO

GAP-HPI-02
→ CERRADO EN EL ALCANCE DEL HITO
~~~

---

# 11. Alcance de la decisión

La validación no demuestra:

- procedencia semántica por fragmentos;
- causalidad intelectual exhaustiva;
- múltiples antecedentes por resultado;
- relaciones N:M;
- grafo universal;
- versionado completo;
- historial general de edición.

Tampoco deriva Architecture.

---

# 12. Estado resultante

~~~text
H-PROJ-INT-01
→ ACEPTADO Y ABIERTO

HITO-HPI-01
→ SATISFECHO

GAP-HPI-01
→ CERRADO

HITO-HPI-02
→ SATISFECHO

GAP-HPI-02
→ CERRADO EN EL ALCANCE DEL HITO

Architecture
→ NO DERIVADA
~~~

Los dos huecos identificados por CONV-HPI-05 están ya cerrados en el alcance de sus respectivos hitos. La siguiente cuestión justificable no es añadir otra realización por inercia, sino reevaluar globalmente H-PROJ-INT-01 contra sus criterios integrados y determinar si procede su cierre o si queda alguna obligación no absorbida por HITO-HPI-01/02.
