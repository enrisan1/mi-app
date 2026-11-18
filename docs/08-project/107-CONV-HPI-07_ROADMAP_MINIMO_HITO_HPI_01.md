# CONV-HPI-07 — Roadmap mínimo hacia HITO-HPI-01 y primera actuación justificable

**Fecha:** 18/11/2026  
**Estado:** CERRADA — roadmap mínimo determinado y primera actuación justificable derivada; producción todavía no modificada.  
**Horizonte:** `H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual`.  
**Hito:** `HITO-HPI-01 — Contexto operativo común verificable`.  
**Precedente:** `106-CONV-HPI-06_PRIORIDAD_Y_PRIMER_HITO.md`.

---

# 1. Objeto

Esta actuación completa, para el primer hito, los pasos:

~~~text
prioridad
✓
↓
hito
✓
↓
ROADMAP
↓
ACTUACIONES
~~~

Debe responder:

1. qué actuaciones mínimas son necesarias para alcanzar HITO-HPI-01;
2. cuál debe ejecutarse primero;
3. si hace falta Architecture antes de realizar;
4. qué evidencia deberá producir cada actuación;
5. dónde termina el alcance del primer hito para no absorber GAP-HPI-02.

---

# 2. Restricción principal

HITO-HPI-01 no pide todavía una plataforma definitiva.

Pide demostrar:

~~~text
un trabajo actual común
+
persistencia de su identidad operacional
+
contextualización coherente de:
  antecedente
  captura
  comparación
  IA
+
continuidad desde entrada ordinaria
~~~

Por tanto, el roadmap no debe derivar automáticamente:

- nuevo dominio completo;
- modelo universal de documentos;
- nueva navegación general;
- base de datos;
- router;
- workspace;
- refactor total de App;
- GAP-HPI-02.

---

# 3. ¿Hace falta Architecture antes de realizar?

Se comparan dos hipótesis.

## Opción A — abrir Architecture

Sería necesario si el hito exigiese decidir de forma constitutiva:

- límites de subsistemas;
- persistencia distribuida;
- contratos entre servicios;
- topología de despliegue;
- consistencia entre procesos;
- modelo de datos global;
- aislamiento de dominios.

Nada de eso está exigido por MHPI-01…08.

## Opción B — reducción/diseño realizativo mínimo

El hito sí exige decidir algo menor y previo al código:

~~~text
qué información mínima
debe representar el contexto operativo común

cómo se demuestra
que varias operaciones comparten ese contexto

qué estado debe sobrevivir una interrupción

qué casos negativos descartan
una falsa integración
~~~

Eso puede resolverse a nivel realizativo, sin establecer arquitectura global.

Resultado:

~~~text
Architecture
→ NO NECESARIA POR AHORA

cuerpo previo necesario
→ DISEÑO REALIZATIVO MÍNIMO
  + TESTS ROJOS
~~~

---

# 4. Patrimonio reutilizable

El roadmap debe reutilizar:

~~~text
ordinary.materials
→ materiales con identidad mínima

PostV1 current
→ precedente de trabajo actual + persistencia

AiSupport.materialId
→ precedente de asociación auxiliar

selectedMaterialId
→ selección humana de antecedente

comparación A/B
→ operación auxiliar ya integrada

ContextualCapture
→ captura ya integrada pero sin contexto
~~~

No se justifica construir una Realization paralela si el hito debe demostrarse desde la entrada ordinaria de App.

---

# 5. Reducción del roadmap

Se identifican tres actuaciones necesarias y suficientes en principio:

~~~text
R-HPI-01
→ contrato realizativo mínimo
  + tests rojos de contexto común

R-HPI-02
→ realización mínima del contexto común
  en el producto ordinario

R-HPI-03
→ validación integrada de HITO-HPI-01
  + control W1/W2 + variación
~~~

No se deriva una cuarta actuación antes de observar R-HPI-03.

---

# 6. R-HPI-01 — Contrato realizativo mínimo y tests rojos

## Objetivo

Fijar antes de modificar producción:

- qué constituye el trabajo actual común;
- qué asociación mínima necesitan antecedente/captura/comparación/IA;
- qué identidad debe sobrevivir una interrupción;
- qué comportamiento debe observarse al cambiar de W1 a W2;
- qué no forma parte todavía de GAP-HPI-02.

## Salida esperada

Un contrato realizativo que pueda expresarse como pruebas sobre App ordinaria.

Como mínimo, los tests deberán cubrir:

~~~text
T-HPI-01
→ establecer W1 como trabajo actual

T-HPI-02
→ remontar/reanudar
→ W1 sigue siendo trabajo actual

T-HPI-03
→ seleccionar antecedente
→ W1 continúa siendo trabajo actual

T-HPI-04
→ captura creada durante W1
→ queda asociada a W1

T-HPI-05
→ comparación abierta durante W1
→ mantiene contexto W1

T-HPI-06
→ apoyo IA durante W1
→ usa el mismo contexto W1
  y sigue separado de la obra

T-HPI-07
→ cambiar explícitamente a W2
→ nuevas operaciones se asocian a W2
→ las de W1 no migran a W2

T-HPI-08
→ flujo accesible desde App ordinaria
  sin harness ni JSON manual
~~~

## Estado inicial requerido

Los tests que expresen diferencias todavía ausentes deberán fallar por razones relevantes.

No se aceptará como rojo útil:

- import roto;
- fixture inválido;
- selector inexistente por error del test;
- fallo no relacionado con el criterio.

## No-alcance

R-HPI-01 no modifica producción.

Tampoco decide todavía:

- nombre de tipo;
- mecanismo de almacenamiento;
- store/context/reducer;
- estructura final de OrdinaryMaterial.

---

# 7. R-HPI-02 — Realización mínima del contexto común

Sólo después de R-HPI-01.

## Objetivo

Introducir la mínima diferencia material necesaria para que los tests de R-HPI-01 puedan pasar.

Debe conseguir:

~~~text
trabajo actual común
→ reconocible

persistencia
→ suficiente para reanudar

antecedente
→ coexiste sin sustituirlo

captura
→ asociada a ese contexto

comparación
→ conserva ese contexto

IA
→ reutiliza ese contexto

cambio W1→W2
→ explícito y sin contaminación cruzada
~~~

## Restricción

No deberá resolver anticipadamente:

~~~text
resultado posterior
→ antecedente utilizado
~~~

Eso sigue perteneciendo a GAP-HPI-02.

## Criterio técnico de cierre

Como mínimo:

- tests focales de HPI en verde;
- tests históricos relevantes en verde;
- suite global sin regresiones atribuibles;
- typecheck/build según los gates vigentes;
- `git diff --check`.

Esto no equivale todavía a cierre humano del hito.

---

# 8. R-HPI-03 — Validación integrada de HITO-HPI-01

## Objetivo

Evaluar MHPI-01…08 sobre la realización ya integrada.

Debe incluir:

### Caso positivo

~~~text
W1
→ trabajo actual
→ antecedente
→ captura
→ comparación
→ IA
→ interrupción/reanudación
→ W1 sigue siendo contexto común
~~~

### Control negativo W1/W2

~~~text
W1 actual
→ operaciones pertenecen a W1

cambio humano a W2
→ nuevas operaciones pertenecen a W2

asociaciones de W1
→ no contaminan W2
~~~

### Variación

Debe cambiar al menos:

- trabajo actual;
- antecedente;
- operación auxiliar utilizada.

## Regla

~~~text
MHPI-01…08
→ 8/8
= HITO-HPI-01 SATISFECHO

< 8/8
= HITO-HPI-01 NO SATISFECHO
~~~

Si falla algún criterio, no se abre automáticamente una nueva capacidad: se reduce el defecto residual.

---

# 9. ¿Por qué tres actuaciones y no dos?

Podría proponerse:

~~~text
diseñar + implementar
→ una sola actuación

o

implementar + validar
→ una sola actuación
~~~

Se rechaza porque:

- el contrato del contexto común todavía no está fijado;
- los tests deben existir antes del cambio de producción;
- la validación del hito debe usar criterios fijados antes y no confundirse con tests de implementación.

Por tanto, separar R1/R2/R3 reduce el riesgo de:

- adaptar el criterio a la solución;
- sobreconstruir;
- declarar hito satisfecho sólo porque pasa una suite técnica.

---

# 10. ¿Hace falta una Realization aislada?

No como primera opción.

HITO-HPI-01 exige:

~~~text
entrada ordinaria
+
contexto común
+
operaciones ya presentes en App
~~~

Una Realization aislada podría demostrar el concepto, pero no MHPI-08 ni G01.

Por tanto:

~~~text
Realization aislada nueva
→ NO PREFERENTE

integración mínima sobre App ordinaria
→ PREFERENTE
~~~

Esto no impide crear helpers/componentes internos si los tests demuestran que son la mínima forma de realizar el contrato.

---

# 11. Primera actuación justificable

Se deriva:

> **R-HPI-01 — Diseñar el contrato realizativo mínimo del contexto operativo común y crear los tests rojos que operacionalicen MHPI-01…08 sobre la App ordinaria.**

Es la primera actuación justificable porque:

1. el hito ya está definido;
2. el defecto material está localizado;
3. todavía falta una decisión realizativa mínima sobre el contrato;
4. cambiar producción antes de fijarlo permitiría soluciones locales incompatibles;
5. los tests pueden discriminar implementación real frente a falso positivo;
6. no requiere Architecture.

---

# 12. Contenido mínimo del contrato a decidir en R-HPI-01

R-HPI-01 deberá decidir solamente lo indispensable para escribir pruebas:

~~~text
CTX-01
→ cómo identificar observacionalmente
  el trabajo actual

CTX-02
→ qué identidad mínima debe persistir

CTX-03
→ cómo observar que antecedente
  coexiste con el trabajo

CTX-04
→ cómo observar asociación captura→contexto

CTX-05
→ cómo observar asociación comparación→contexto

CTX-06
→ cómo comprobar que IA usa el mismo contexto

CTX-07
→ cómo cambia explícitamente W1→W2

CTX-08
→ qué evidencia prueba ausencia de contaminación cruzada
~~~

No necesita todavía decidir la forma interna concreta de esas propiedades si puede expresarlas conductualmente.

---

# 13. Gates de R-HPI-01

R-HPI-01 sólo podrá cerrarse si:

~~~text
R1-G01
→ CTX-01…08 están definidos

R1-G02
→ cada MHPI-01…08
  tiene evidencia/test asociado

R1-G03
→ existe control negativo W1/W2

R1-G04
→ existe variación material

R1-G05
→ GAP-HPI-02 queda excluido explícitamente

R1-G06
→ tests nuevos fallan por la diferencia material correcta

R1-G07
→ tests históricos siguen verdes
  antes de producción nueva
~~~

Si R1-G06 no puede conseguirse sin asumir una estructura técnica concreta, deberá reconsiderarse si hace falta una reducción adicional antes de producción.

---

# 14. Roadmap mínimo consolidado

| Paso | Actuación | Salida | Estado |
| --- | --- | --- | --- |
| R-HPI-01 | Contrato realizativo mínimo + tests rojos | CTX-01…08 + T-HPI-01…08 | DERIVADA / PENDIENTE |
| R-HPI-02 | Realización mínima en App ordinaria | tests focales verdes + regresión preservada | NO INICIADA |
| R-HPI-03 | Validación HITO-HPI-01 | MHPI-01…08 evaluados | NO INICIADA |

No se añaden pasos preventivos no justificados.

---

# 15. Estado de Architecture / Realization / Implementation

~~~text
Architecture
→ NO DERIVADA

Realization aislada nueva
→ NO DERIVADA

diseño realizativo mínimo
→ SÍ, R-HPI-01

Implementation
→ NO ABIERTA TODAVÍA
→ podrá derivarse después de R-HPI-01
  si los tests rojos y contrato lo justifican
~~~

---

# 16. Relación con GAP-HPI-02

Durante R-HPI-01…03:

~~~text
GAP-HPI-02
→ permanece abierto
→ no se resuelve
→ no se usa como criterio de fallo de HITO-HPI-01
~~~

Sólo tras cerrar o reducir HITO-HPI-01 deberá retomarse la prioridad 2.

---

# 17. Falsadores del roadmap

El roadmap deberá revisarse si:

1. R-HPI-01 demuestra que el contexto común exige una decisión arquitectónica real;
2. no puede probarse MHPI-01…08 desde App sin introducir una capacidad nueva;
3. una Realization aislada resulta necesaria para reducir incertidumbre antes de integrar;
4. GAP-HPI-02 resulta inevitable para satisfacer un criterio de HITO-HPI-01;
5. los tests rojos sólo pueden formularse presuponiendo una solución técnica no derivada.

Hasta que ocurra alguno:

~~~text
roadmap mínimo
→ R-HPI-01
→ R-HPI-02
→ R-HPI-03
~~~

---

# 18. Resultado de CONV-HPI-07

~~~text
roadmap mínimo
→ 3 actuaciones

R-HPI-01
→ DERIVADA
→ primera actuación justificable

R-HPI-02
→ pendiente tras R-HPI-01

R-HPI-03
→ pendiente tras R-HPI-02

Architecture
→ NO necesaria por ahora

Implementation
→ NO abierta

GAP-HPI-02
→ fuera del primer hito

CONV-HPI-07
→ CERRADA
~~~

---

# 19. Siguiente actuación

Se deriva inequívocamente:

> **Ejecutar R-HPI-01 — diseño realizativo mínimo del contexto operativo común y tests rojos sobre la App ordinaria, sin modificar todavía producción.**

Sólo después de observar el rojo correcto podrá decidirse y ejecutar R-HPI-02.
