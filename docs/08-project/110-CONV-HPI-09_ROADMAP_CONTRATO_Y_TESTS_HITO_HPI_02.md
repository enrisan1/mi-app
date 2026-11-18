# CONV-HPI-09 — Roadmap mínimo, contrato realizativo y tests de HITO-HPI-02

**Fecha:** 18/11/2026
**Estado:** CERRADA — roadmap mínimo determinado y R-HPI2-01 ejecutada; contrato/tests materializados y patrón previo confirmado. Véase [111](111-R-HPI2-01_CONTRATO_Y_TESTS_DISCRIMINANTES.md).
**Horizonte:** H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual.
**Hito:** HITO-HPI-02 — Continuidad reconocible entre antecedente reutilizado y resultado posterior.
**Precedente:** 109-CONV-HPI-08_REDUCCION_GAP_HPI_02_Y_HITO_HPI_02.md.

---

# 1. Objeto

Esta actuación completa, para HITO-HPI-02, la secuencia:

~~~text
GAP-HPI-02 reducido
✓
↓
HITO-HPI-02 formulado
✓
↓
ROADMAP MÍNIMO
↓
CONTRATO REALIZATIVO
↓
TESTS DISCRIMINANTES
~~~

Debe responder:

1. qué actuaciones mínimas son necesarias;
2. qué debe observarse antes de tocar producción;
3. qué tests deben existir y cuál debe ser su estado inicial;
4. qué falsos positivos deben excluir;
5. si Architecture es necesaria antes de realizar.

Esta actuación no modifica producción.

---

# 2. Restricción principal

HITO-HPI-02 no pide una genealogía general.

Pide demostrar únicamente:

~~~text
antecedente recuperado A
+
selección humana explícita
+
actividad textual
↓
resultado posterior W2
↓
relación A → W2
reconocible después
~~~

La solución futura no debe reconstruir funciones ya existentes:

- pluralidad de materiales;
- selección humana;
- producción de nuevo trabajo;
- persistencia del resultado;
- identidad del trabajo actual.

---

# 3. ¿Hace falta Architecture?

No con la evidencia actual.

El hito no exige decidir:

- límites de subsistemas;
- servicios;
- topología;
- consistencia distribuida;
- esquema global de procedencia;
- modelo universal de versiones.

Sí exige una decisión realizativa previa y menor:

~~~text
qué observación demuestra
que A pertenece a W2

qué parte de esa relación
debe sobrevivir a una interrupción

cómo distinguir
A→W2 de B→W3

cómo evitar
un falso positivo de último antecedente
~~~

Resultado:

~~~text
Architecture
→ NO NECESARIA

cuerpo previo necesario
→ contrato realizativo observable
  + tests discriminantes
~~~

---

# 4. Patrimonio reutilizable

El roadmap debe apoyarse en:

~~~text
ordinary.materials
→ identidad mínima de materiales

selectedMaterialId
→ selección humana transitoria

newWork
→ actividad textual posterior

Continuar con este material
→ acto explícito de constitución

currentWorkId
→ identidad del nuevo trabajo actual

ru2m1.previous
→ continuidad/reanudación del resultado
~~~

No se justifica crear una Realization aislada para demostrar un hito que exige App ordinaria.

---

# 5. Reducción del roadmap

Se derivan tres actuaciones mínimas:

~~~text
R-HPI2-01
→ contrato realizativo mínimo
  + tests discriminantes previos

R-HPI2-02
→ realización mínima
  de continuidad antecedente→resultado
  en App ordinaria

R-HPI2-03
→ validación formal integrada
  de HITO-HPI-02
~~~

No se deriva una cuarta actuación antes de observar R-HPI2-03.

---

# 6. R-HPI2-01 — Contrato realizativo mínimo

## 6.1 Objetivo

Fijar antes de modificar producción qué debe seguir siendo cierto sobre A y W2 una vez desaparece selectedMaterialId.

El contrato no prescribe forma de datos. Sólo prescribe comportamiento observable.

## 6.2 Contrato

### REL-HPI2-01 — Selección humana efectiva

Debe existir un recorrido ordinario donde A sea recuperado desde materiales anteriores y seleccionado explícitamente por la persona.

El test no debe introducir A mediante prop especial ni relación precargada.

### REL-HPI2-02 — Constitución conectada

En ese mismo recorrido, la persona desarrolla W2 y ejecuta la acción ordinaria que lo constituye como continuación con A.

Debe poder demostrarse que el resultado fue producido por ese recorrido y no por un alta independiente no conectada.

### REL-HPI2-03 — Relación observable posterior

Después de constituir W2 y perder el estado transitorio de selección, debe existir una observación ordinaria desde la que la persona pueda reconocer:

~~~text
W2
→ antecedente de continuación
→ A
~~~

No basta que A siga existiendo en la lista general de materiales.

### REL-HPI2-04 — Persistencia

Tras desmontaje/remontaje o reanudación equivalente, la misma relación W2→A debe seguir siendo reconocible sin reconstrucción manual.

### REL-HPI2-05 — Relación ligada al resultado, no al último antecedente

Si existen:

~~~text
A → W2
B → W3
~~~

la relación observada para W2 debe seguir siendo A y la de W3 debe ser B.

Seleccionar B posteriormente no puede reescribir retrospectivamente W2→A.

### REL-HPI2-06 — Separación de identidad

El antecedente A y el resultado W2 deben seguir siendo materiales distinguibles.

La relación no puede implementarse sustituyendo W2 por A ni fusionándolos en un único material indistinguible.

### REL-HPI2-07 — App ordinaria

La prueba debe montar y utilizar la App ordinaria.

No se considera evidencia suficiente:

- JSON manual que preconstruya la relación;
- acceso a una API interna no visible en el recorrido;
- harness de lineage;
- props de prueba especiales;
- una Realization paralela.

### REL-HPI2-08 — No sobreprescripción

El contrato no exige:

- nombre de campo;
- relación embebida o separada;
- una o varias claves de almacenamiento;
- representación gráfica;
- navegación específica;
- historial universal.

---

# 7. Observación mínima aceptable

El hito exige reconocimiento humano, por lo que comprobar únicamente una estructura interna persistida sería insuficiente.

Debe existir al menos una superficie ordinaria donde, al inspeccionar W2 después de perder la selección transitoria, sea observable simultáneamente:

~~~text
resultado
→ W2

antecedente utilizado
→ A
~~~

El contrato no obliga a que esa superficie sea:

- la lista de materiales;
- una ficha;
- una vista de detalle;
- una etiqueta concreta.

Pero los tests deberán anclarse en una superficie real de App y no en una estructura interna inventada sólo para pruebas.

---

# 8. Tests previos a producción

Se derivan siete tests contractuales.

## T-HPI2-01 — recuperación y selección ordinarias

~~~text
App ordinaria
→ examinar materiales
→ seleccionar A
→ A queda reconocido como material seleccionado
~~~

Función: control de patrimonio.

Estado esperado antes de producción:

~~~text
PASS
~~~

Este test demuestra que el recorrido base existe y evita atribuir a GAP-HPI-02 un fallo de selección.

## T-HPI2-02 — constitución de W2 desde A

~~~text
A seleccionado
→ escribir W2
→ Continuar con este material
→ W2 queda constituido y persistido
~~~

Función: control de patrimonio.

Estado esperado antes de producción:

~~~text
PASS
~~~

## T-HPI2-03 — W2 hace reconocible A después de perder la selección transitoria

~~~text
A → W2
→ cerrar/reiniciar la fase de selección
→ volver a observar W2
→ W2 muestra/revela A como antecedente
~~~

Función: discriminante principal de C05-C.

Estado esperado antes de producción:

~~~text
FAIL
~~~

El fallo válido debe consistir en que W2 existe pero carece de una asociación observable con A.

## T-HPI2-04 — la relación W2→A sobrevive a remontaje

~~~text
A → W2
→ unmount
→ mount App
→ localizar W2
→ reconocer W2→A
~~~

Función: discriminante de persistencia y G06.

Estado esperado antes de producción:

~~~text
FAIL
~~~

## T-HPI2-05 — dos relaciones sobreviven sin contaminación

~~~text
A → W2
B → W3
→ remontaje
→ W2 reconoce A
→ W3 reconoce B
~~~

Función: control negativo principal.

Estado esperado antes de producción:

~~~text
FAIL
~~~

## T-HPI2-06 — falsación de último antecedente

Después de crear A→W2 y luego B→W3:

~~~text
W2
→ NO reconoce B como su antecedente

W3
→ NO reconoce A como su antecedente
~~~

Función: descartar asociación global mutable o inferencia por último seleccionado.

Estado esperado antes de producción:

~~~text
FAIL
~~~

El test debe fallar porque la relación correcta no existe todavía, no porque el test busque un dato técnico concreto.

## T-HPI2-07 — App ordinaria y ausencia de artificios

~~~text
render(<App />)
→ recorrido completo
→ sin props especiales
→ sin JSON manual de relación
→ sin harness
~~~

Función: control de alcance.

Estado esperado antes de producción:

~~~text
PASS
~~~

---

# 9. Patrón rojo esperado

No se exige que los siete tests sean rojos.

El patrón correcto antes de tocar producción es:

~~~text
T-HPI2-01 → PASS
T-HPI2-02 → PASS
T-HPI2-03 → FAIL
T-HPI2-04 → FAIL
T-HPI2-05 → FAIL
T-HPI2-06 → FAIL
T-HPI2-07 → PASS
~~~

Este patrón es más discriminante que forzar 7/7 rojos.

Los PASS prueban que el patrimonio necesario existe.

Los FAIL aíslan exactamente la diferencia material residual:

~~~text
resultado existe
antecedente existe
selección existe
constitución existe

pero

relación antecedente→resultado
no sobrevive ni se discrimina
~~~

---

# 10. Qué no cuenta como rojo útil

No se acepta como evidencia:

- import roto;
- selector con nombre inventado sin relación con una superficie esperable;
- fixture imposible;
- ausencia de pluralidad de materiales por mala preparación del test;
- fallo de persistencia general ya cubierto por HITO-HPI-01;
- error de TypeScript del test;
- dependencia de una forma interna concreta aún no derivada.

El rojo debe mostrar que W2 está correctamente constituido y disponible, pero no permite reconocer A como su antecedente después.

---

# 11. Estado material que deben usar los tests

Para evitar una relación artificial precargada, los tests discriminantes deben crear la relación sólo mediante acciones ordinarias.

Preparación permitida:

~~~text
materiales A y B ya disponibles
+
trabajo actual inicial W1
~~~

pero no:

~~~text
A→W2 precargado
B→W3 precargado
metadata de lineage inventada
~~~

W2 y W3 deben nacer dentro de la ejecución del test mediante «Continuar con este material».

---

# 12. R-HPI2-02 — Realización mínima

Sólo después de observar el patrón de R-HPI2-01.

## Objetivo

Introducir la mínima diferencia de producción que haga posible:

~~~text
A → W2
B → W3

persistentes
reconocibles
discriminados
sin atribución cruzada
~~~

## Restricciones

La realización no deberá resolver anticipadamente:

- genealogía multinivel general;
- múltiples padres;
- merge;
- versionado universal;
- procedencia de todas las operaciones auxiliares;
- causalidad semántica.

## Gate técnico mínimo

- T-HPI2-01…07 según contrato, todos verdes al final;
- tests HPI-01 existentes verdes;
- 498 tests históricos verdes;
- validaciones HPI-01 formales verdes;
- build sin regresión;
- typecheck sin errores nuevos atribuibles;
- git diff --check.

Esto no equivale todavía a cierre del hito.

---

# 13. R-HPI2-03 — Validación formal de HITO-HPI-02

Debe evaluar MHPI2-01…06 sobre la realización ya integrada.

## Caso positivo

~~~text
W1
→ recuperar A
→ seleccionar A
→ producir W2
→ interrumpir
→ recuperar W2
→ reconocer W2←A
~~~

## Control negativo

~~~text
A → W2
B → W3
→ interrupción
→ W2←A
→ W3←B
→ sin cruce
~~~

## Variación

Debe cambiar al menos:

- antecedente A→B;
- resultado W2→W3.

## Regla

~~~text
MHPI2-01…06
→ 6/6
=
HITO-HPI-02 SATISFECHO

< 6/6
=
HITO-HPI-02 NO SATISFECHO
~~~

---

# 14. ¿Son necesarias más de tres actuaciones?

No con la evidencia actual.

Una cuarta actuación sólo sería justificable si R-HPI2-01 demostrase que la relación mínima no puede expresarse sin una decisión arquitectónica previa o si R-HPI2-02 revelase un defecto independiente no cubierto por el contrato.

En ausencia de esa evidencia:

~~~text
contrato/tests
→ realización mínima
→ validación formal
~~~

es el roadmap mínimo.

---

# 15. Gates de R-HPI2-01

R-HPI2-01 sólo podrá declararse completa si:

~~~text
R2-G01
→ REL-HPI2-01…08 fijados

R2-G02
→ T-HPI2-01…07 asociados
  a criterios concretos

R2-G03
→ controles de patrimonio
  PASS antes de producción

R2-G04
→ discriminantes 03…06
  FAIL por ausencia material correcta

R2-G05
→ control A→W2 / B→W3
  descarta último antecedente

R2-G06
→ tests no prescriben
  forma técnica concreta

R2-G07
→ HITO-HPI-01 permanece verde
  y no se reabre GAP-HPI-01
~~~

---

# 16. Primera actuación justificable

Se deriva:

> **R-HPI2-01 — materializar el contrato REL-HPI2-01…08 en T-HPI2-01…07 sobre la App ordinaria, sin modificar producción, y ejecutar los tests para confirmar el patrón PASS/PASS/FAIL/FAIL/FAIL/FAIL/PASS por la ausencia de continuidad antecedente→resultado.**

Esta actuación es justificable porque:

1. el hito ya está formulado;
2. el defecto material está aislado;
3. la producción existente ya proporciona todo el recorrido salvo la relación persistente;
4. los tests pueden distinguir patrimonio existente de diferencia residual;
5. no hace falta decidir aún cómo se representará técnicamente la relación;
6. Architecture sigue sin fundamento positivo.

---

# 17. Resultado de CONV-HPI-09

~~~text
HITO-HPI-02
→ roadmap mínimo de 3 actuaciones

R-HPI2-01
→ contrato REL-HPI2-01…08
  + T-HPI2-01…07
  + patrón previo esperado
    PASS PASS FAIL FAIL FAIL FAIL PASS

R-HPI2-02
→ realización mínima
  antecedente→resultado

R-HPI2-03
→ validación formal
  MHPI2-01…06

Architecture
→ NO DERIVADA

producción
→ NO MODIFICADA
~~~

La siguiente actuación ejecutable es R-HPI2-01.

---

# 18. Resultado posterior de R-HPI2-01

R-HPI2-01 fue ejecutada sin modificar producción.

El patrón observado tras eliminar un falso rojo de localización fue exactamente:

~~~text
T-HPI2-01 → PASS
T-HPI2-02 → PASS
T-HPI2-03 → FAIL
T-HPI2-04 → FAIL
T-HPI2-05 → FAIL
T-HPI2-06 → FAIL
T-HPI2-07 → PASS
~~~

Los cuatro discriminantes fallan porque W2/W3 no hacen reconocible A/B como antecedente, no por imports, fixtures o selectores rotos.

La regresión previa queda:

~~~text
61/61 archivos
508/508 tests
→ PASS
~~~

Por tanto:

~~~text
R-HPI2-01
→ SATISFECHA

R-HPI2-02
→ siguiente actuación justificable
~~~
