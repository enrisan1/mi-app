# CONV-HPI-04 — Evaluación del estado material actual de H-PROJ-INT-01

**Fecha:** 18/11/2026  
**Estado:** CERRADA — estado material actual evaluado frente a los criterios de 103; huecos formales todavía no derivados.  
**Horizonte:** `H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual`.  
**Precedente:** `103-CONV-HPI-03_CRITERIOS_DE_FINALIZACION.md`.

---

# 1. Objeto

Esta actuación ejecuta únicamente el quinto paso del relevo de Manual 17 §13.1.5:

~~~text
horizonte aceptado
↓
alcance
↓
capacidades
↓
dependencias
↓
criterios de finalización
↓
ESTADO ACTUAL
~~~

Clasifica cada criterio como:

~~~text
SATISFECHO
PARCIALMENTE SATISFECHO
NO SATISFECHO
NO DETERMINADO
~~~

No convierte todavía las insuficiencias en:

- huecos formales;
- prioridades;
- hitos;
- roadmap;
- Architecture;
- Realization;
- Implementation.

---

# 2. Base material examinada

La evaluación contrasta los criterios de 103 con el producto ordinario y patrimonio actualmente integrado, principalmente:

- `src/App.tsx`;
- `ResumeExperience`;
- `PostV1IntegratedExperience`;
- persistencia `ru2m1.previous / retained`;
- `ordinary.materials`;
- captura contextual;
- apoyo IA;
- comparación ordinaria;
- pruebas de App y realizaciones integradas.

La evaluación no infiere satisfacción por mera existencia de código.

---

# 3. Resultado ejecutivo

Estado de capacidades:

~~~text
SATISFECHAS
→ C-HPI-02
→ C-HPI-03
→ C-HPI-08
→ C-HPI-09

PARCIALMENTE SATISFECHAS
→ C-HPI-01
→ C-HPI-04
→ C-HPI-05
→ C-HPI-06
→ C-HPI-07
→ C-HPI-10

NO SATISFECHAS
→ ninguna capacidad completa

NO DETERMINADAS
→ ninguna
~~~

Esto significa:

~~~text
funciones materiales relevantes
→ EXISTEN

integración constitutiva del horizonte
→ TODAVÍA INSUFICIENTE
~~~

---

# 4. C-HPI-01 — Establecer un trabajo textual actual

## CF-HPI-C01-A — existencia inequívoca

**Estado: PARCIALMENTE SATISFECHO.**

Evidencia favorable:

- `ResumeExperience` presenta un trabajo anterior y permite producir la aportación actual;
- `PostV1IntegratedExperience` expone explícitamente `Trabajo actual`;
- App permite elegir entre continuar el trabajo disponible o retomar una trayectoria integrada existente.

Insuficiencia:

No existe una única identidad operacional de “trabajo actual” compartida por todas las operaciones ordinarias.

Captura, autoría, IA, comparación, materiales anteriores y trayectoria integrada mantienen selecciones/estados separados.

## CF-HPI-C01-B — persistencia de identidad operacional

**Estado: NO SATISFECHO.**

Las operaciones auxiliares no comparten un identificador común del trabajo actual.

Ejemplos:

- captura no contiene `materialId`;
- comparación usa dos selecciones propias;
- IA exige seleccionar explícitamente una obra;
- el recorrido post-V1 mantiene su propio `current`;
- `ordinary.materials` no define cuál es el trabajo activo.

Resultado:

~~~text
C-HPI-01
→ PARCIALMENTE SATISFECHO
~~~

---

# 5. C-HPI-02 — Desarrollar el trabajo actual

## CF-HPI-C02-A — modificación humana efectiva

**Estado: SATISFECHO.**

Existe intervención textual humana observable:

- aportación actual en `ResumeExperience`;
- evolución de `current` en `PostV1IntegratedExperience`;
- nuevo trabajo a partir de material seleccionado.

## CF-HPI-C02-B — continuidad del resultado como trabajo

**Estado: SATISFECHO.**

La salida humana puede persistir y volver a participar:

- `ru2m1.previous`;
- `ordinary.materials`;
- `availablePostV1Current`;
- `post-v1-integrated.state.current`.

Las pruebas existentes verifican continuidad desde Y y evolución R1→R2.

Resultado:

~~~text
C-HPI-02
→ SATISFECHO
~~~

---

# 6. C-HPI-03 — Conservar y reanudar el mismo trabajo

## CF-HPI-C03-A — supervivencia a interrupción

**Estado: SATISFECHO.**

Hay pruebas de desmontaje/remontaje y recuperación posterior.

## CF-HPI-C03-B — identidad suficiente tras reanudación

**Estado: SATISFECHO EN EL ALCANCE ACTUAL.**

Las realizaciones muestran el contenido previo como antecedente/trabajo actual y permiten continuar explícitamente desde él.

## CF-HPI-C03-C — contexto mínimo suficiente

**Estado: SATISFECHO EN EL RECORRIDO POST-V1 DEMOSTRADO.**

`PostV1IntegratedExperience` persiste conjuntamente:

- current;
- stable;
- published;
- evaluation;
- collaboration;
- artifact;
- received.

La prueba T-INT-08 recupera la trayectoria integrada tras remontaje.

Esto no implica todavía contexto común con todas las funciones ordinarias, cuestión global evaluada después.

Resultado:

~~~text
C-HPI-03
→ SATISFECHO
~~~

---

# 7. C-HPI-04 — Recuperar antecedentes pertinentes

## CF-HPI-C04-A — disponibilidad de pluralidad

**Estado: SATISFECHO.**

`ordinary.materials` permite conservar múltiples materiales; la superficie “Materiales anteriores” aparece con pluralidad suficiente.

## CF-HPI-C04-B — selección humana

**Estado: SATISFECHO.**

La persona examina y elige explícitamente mediante `Usar este material N`.

No existe selección automática de pertinencia.

## CF-HPI-C04-C — coexistencia con el trabajo actual

**Estado: PARCIALMENTE SATISFECHO.**

El material seleccionado se presenta sin destruir otros materiales y puede utilizarse para producir nuevo trabajo.

Pero la App no mantiene una identidad global de trabajo actual contra la que quede formalmente contextualizado el antecedente seleccionado.

Resultado:

~~~text
C-HPI-04
→ PARCIALMENTE SATISFECHO
~~~

---

# 8. C-HPI-05 — Reutilizar antecedentes en continuación o revisión

## CF-HPI-C05-A — antecedente efectivo

**Estado: PARCIALMENTE SATISFECHO.**

La UI permite:

~~~text
examinar materiales
→ seleccionar antecedente
→ escribir nuevo trabajo
→ Continuar con este material
~~~

Esto demuestra una mediación humana explícita.

Sin embargo, el nuevo material persistido sólo conserva:

~~~text
{id, content}
~~~

y no registra qué antecedente seleccionado intervino.

Por tanto, la participación existe en el recorrido UI pero no queda materialmente conservada después.

## CF-HPI-C05-B — nuevo resultado

**Estado: SATISFECHO.**

El nuevo trabajo se persiste como nuevo `ordinary.material`, se convierte en `ru2m1.previous` y queda disponible para continuidad posterior.

## CF-HPI-C05-C — continuidad reconocible

**Estado: NO SATISFECHO.**

Tras constituir el nuevo resultado, no existe relación persistida:

~~~text
nuevo material
→ deriva/se apoya en
→ selectedMaterialId
~~~

La continuidad antecedente→resultado se pierde al abandonar el estado React de selección y debe reconstruirse externamente.

Resultado:

~~~text
C-HPI-05
→ PARCIALMENTE SATISFECHO
~~~

---

# 9. C-HPI-06 — Captura contextual

## CF-HPI-C06-A — captura sin abandono innecesario

**Estado: SATISFECHO.**

La captura se abre y conserva dentro de la App ordinaria sin abandonar el resto de la superficie.

## CF-HPI-C06-B — asociación contextual suficiente

**Estado: NO SATISFECHO.**

`ContextualCapture` contiene únicamente:

~~~text
id
text
capturedAt
~~~

No contiene:

- materialId;
- workId;
- referencia al trabajo actual;
- relación con antecedente u operación activa.

Por tanto la captura persiste, pero queda huérfana respecto del trabajo que la motivó.

## CF-HPI-C06-C — separación funcional

**Estado: SATISFECHO.**

La captura se conserva en almacenamiento propio y no modifica automáticamente el contenido principal.

Resultado:

~~~text
C-HPI-06
→ PARCIALMENTE SATISFECHO
~~~

---

# 10. C-HPI-07 — Comparación contextual

## CF-HPI-C07-A — dos materiales distinguibles

**Estado: SATISFECHO.**

La comparación exige dos materiales distintos y presenta Documento A / Documento B de forma read-only y distinguible.

## CF-HPI-C07-B — contexto de actividad conservado

**Estado: NO SATISFECHO.**

La comparación selecciona dos IDs desde `ordinary.materials`, pero no conserva:

- qué trabajo actual motivó la comparación;
- qué necesidad concreta estaba activa;
- qué relación guarda el resultado de la comparación con una continuación posterior.

El contexto debe mantenerse mentalmente por la persona.

## CF-HPI-C07-C — decisión humana preservada

**Estado: SATISFECHO.**

Las pruebas comprueban ausencia de merge, aplicación A→B/B→A o decisión automática de prevalencia.

Resultado:

~~~text
C-HPI-07
→ PARCIALMENTE SATISFECHO
~~~

---

# 11. C-HPI-08 — Apoyo IA separado y contextual

## CF-HPI-C08-A — contexto pertinente de entrada

**Estado: SATISFECHO.**

La persona selecciona explícitamente una obra y la petición se envía con:

~~~text
workId
workContent
request
~~~

## CF-HPI-C08-B — separación obra/apoyo

**Estado: SATISFECHO.**

El apoyo se persiste como `AiSupport`, separado de `ordinary.materials`.

## CF-HPI-C08-C — procedencia visible suficiente

**Estado: SATISFECHO.**

Se conserva y muestra:

- system;
- model cuando existe;
- requestId cuando existe.

## CF-HPI-C08-D — control de incorporación

**Estado: SATISFECHO.**

No existe incorporación automática del apoyo IA al contenido del material.

Resultado:

~~~text
C-HPI-08
→ SATISFECHO
~~~

---

# 12. C-HPI-09 — Determinación humana efectiva

## CF-HPI-C09-A — alternativas efectivamente disponibles

**Estado: SATISFECHO EN LOS CASOS OBSERVADOS.**

La persona selecciona:

- antecedente;
- materiales A/B;
- obra para IA;
- cuándo solicita apoyo;
- qué nuevo trabajo produce.

## CF-HPI-C09-B — ausencia de cierre automático indebido

**Estado: SATISFECHO.**

No se observa:

- selección automática de antecedente pertinente;
- merge automático;
- aplicación automática de IA;
- prevalencia automática A/B.

## CF-HPI-C09-C — ejercicio observable

**Estado: SATISFECHO.**

Los recorridos y tests existentes contienen decisiones humanas cuyo resultado depende de la selección/entrada de la persona.

Resultado:

~~~text
C-HPI-09
→ SATISFECHO
~~~

No se ha identificado contraejemplo dentro del comportamiento examinado.

---

# 13. C-HPI-10 — Preservación, distinción y procedencia

## CF-HPI-C10-A — preservación de antecedentes pertinentes

**Estado: SATISFECHO.**

Los nuevos materiales se añaden a `ordinary.materials` sin borrar los anteriores.

`PostV1IntegratedExperience` permite evolucionar current manteniendo estable S1 y demás antecedentes integrados.

## CF-HPI-C10-B — separación de papeles

**Estado: SATISFECHO EN LAS SUPERFICIES EXISTENTES.**

La UI distingue:

- materiales;
- capturas;
- apoyos IA;
- comparación A/B;
- antecedente seleccionado;
- trabajo actual post-V1.

## CF-HPI-C10-C — procedencia mínima suficiente

**Estado: PARCIALMENTE SATISFECHO.**

Es suficiente en:

- apoyo IA;
- comparación A/B;
- trayectoria post-V1.

Es insuficiente en:

- captura → trabajo que la originó;
- nuevo resultado → antecedente seleccionado utilizado.

## CF-HPI-C10-D — no sobrepreservación obligatoria

**Estado: SATISFECHO.**

El comportamiento no exige historial universal, grafo ni conservación indiscriminada.

Resultado:

~~~text
C-HPI-10
→ PARCIALMENTE SATISFECHO
~~~

---

# 14. Conteo de criterios individuales

Resultado sobre los 30 criterios reales de 103:

~~~text
SATISFECHOS
→ 22

PARCIALMENTE SATISFECHOS
→ 4

NO SATISFECHOS
→ 4

NO DETERMINADOS
→ 0
~~~

Los cuatro criterios parciales son:

~~~text
C01-A
C04-C
C05-A
C10-C
~~~

Los cuatro no satisfechos son:

~~~text
C01-B
C05-C
C06-B
C07-B
~~~

El conteo no constituye métrica de avance.

La concentración de insuficiencias es cualitativamente más importante que su número.

---

# 15. D-HPI-01 — C-HPI-04 → C-HPI-05

## CF-HPI-D01

**Estado: PARCIALMENTE SATISFECHO.**

Existe un recorrido ordinario:

~~~text
material anterior
→ examinar
→ seleccionar
→ escribir nuevo trabajo
→ Continuar con este material
~~~

pero la relación antecedente→nuevo resultado no se conserva después de constituir el nuevo material.

Por tanto se demuestra proximidad funcional, no la dependencia plenamente materializada de forma persistente/reconocible.

Resultado:

~~~text
D-HPI-01
→ PARCIALMENTE SATISFECHA
~~~

---

# 16. D-HPI-02 — C-HPI-02 → C-HPI-05

## CF-HPI-D02

**Estado: PARCIALMENTE SATISFECHO.**

La persona produce texto nuevo dentro del recorrido de reutilización y ese texto se persiste como nuevo material.

Pero, al no conservarse suficientemente el vínculo con el antecedente, no puede demostrarse plenamente que el desarrollo textual observado constituya materialmente la reutilización exigida por C-HPI-05 y no simplemente una nueva creación posterior a una consulta.

Resultado:

~~~text
D-HPI-02
→ PARCIALMENTE SATISFECHA
~~~

---

# 17. CF-HPI-G01 — punto ordinario común

**Estado: PARCIALMENTE SATISFECHO.**

Evidencia favorable:

- todas las superficies principales son accesibles desde `App`;
- R-U2-M1 es accesible desde la entrada normal;
- continuar hacia PostV1 se inicia mediante acción ordinaria.

Insuficiencia:

al elegir la trayectoria integrada, `App` sustituye su superficie principal por `PostV1IntegratedExperience`.

Por tanto no existe todavía un punto ordinario común que mantenga el mismo contexto operativo durante todo el recorrido y todas las operaciones auxiliares.

---

# 18. CF-HPI-G02 — continuidad de contexto operativo

**Estado: PARCIALMENTE SATISFECHO.**

Existen contextos locales suficientes:

- `ru2m1.previous`;
- `PostV1 current`;
- `selectedMaterialId`;
- `materialId` de IA;
- selecciones A/B.

Pero no existe una representación operacional común que permita reconocer de forma persistente:

~~~text
trabajo actual
+
antecedentes vinculados
+
capturas
+
comparaciones
+
apoyos
~~~

como un único contexto de trabajo.

---

# 19. CF-HPI-G03 — trayectoria longitudinal completa

**Estado: PARCIALMENTE SATISFECHO.**

Existen fragmentos materiales demostrados:

~~~text
crear
→ continuar
→ persistir
→ remontar
→ recuperar

y

material anterior
→ seleccionar
→ nuevo trabajo

y

current
→ stable
→ evolucionar
→ restaurar trayectoria
~~~

Pero no existe evidencia de un único recorrido ordinario completo que mantenga a través de toda la secuencia:

~~~text
crear/retomar
→ desarrollar
→ interrumpir
→ reanudar
→ recuperar antecedente
→ reutilizarlo
→ producir resultado
→ conservar
→ reanudar
~~~

con la relación antecedente→resultado preservada.

---

# 20. CF-HPI-G04 — contextualización de auxiliares

**Estado: PARCIALMENTE SATISFECHO.**

### IA

Contextualización material fuerte mediante `materialId`.

### Comparación

Contextualización parcial: materiales explícitos, pero sin relación persistente con trabajo/necesidad actual.

### Captura

Contextualización insuficiente: no existe referencia al trabajo actual.

Resultado:

~~~text
G04
→ PARCIALMENTE SATISFECHO
~~~

---

# 21. CF-HPI-G05 — compatibilidad transversal

**Estado: SATISFECHO EN LA EVIDENCIA ACTUAL.**

No se ha identificado que la integración existente:

- elimine decisiones humanas protegidas;
- borre antecedentes materiales;
- mezcle automáticamente IA y obra;
- fuerce prevalencia en comparación.

Existen limitaciones de procedencia/contexto, pero no constituyen un contraejemplo a la determinación humana ni a la preservación material básica.

---

# 22. CF-HPI-G06 — ausencia de reconstrucción externa relevante

**Estado: NO SATISFECHO.**

La persona debe conservar o reconstruir mentalmente información relevante que el producto no mantiene de forma suficiente:

- a qué trabajo pertenecía una captura;
- por qué se comparaban A/B;
- qué antecedente concreto originó un nuevo trabajo después de reutilización;
- cuál de los distintos contextos locales representa el “trabajo actual” global.

No requiere necesariamente herramientas externas físicas, pero sí reconstrucción cognitiva externa al estado material explícito del producto, que es precisamente el falsador previsto por G06.

---

# 23. Estado global de los seis criterios

~~~text
G01
→ PARCIALMENTE SATISFECHO

G02
→ PARCIALMENTE SATISFECHO

G03
→ PARCIALMENTE SATISFECHO

G04
→ PARCIALMENTE SATISFECHO

G05
→ SATISFECHO

G06
→ NO SATISFECHO
~~~

---

# 24. Evaluación de CF-HPI-01

CF-HPI-01 exige simultáneamente:

- trabajo actual inequívoco;
- continuidad;
- antecedentes;
- reutilización reconocible;
- auxiliares contextuales;
- separación;
- determinación humana;
- preservación;
- entrada ordinaria;
- ausencia de reconstrucción manual relevante.

La evidencia actual muestra:

~~~text
capacidades individuales significativas
→ SÍ

continuidad longitudinal parcial
→ SÍ

preservación/determinación
→ FUERTES

plataforma integrada mínima completa
→ NO
~~~

Por tanto:

~~~text
CF-HPI-01
→ NO SATISFECHO
~~~

No porque falten todas las funciones, sino porque la integración exigida no está materialmente cerrada.

---

# 25. Diagnóstico material consolidado

La App actual se encuentra entre dos estados:

~~~text
colección de Realizations aisladas
→ SUPERADA PARCIALMENTE

plataforma integrada mínima
→ TODAVÍA NO ALCANZADA
~~~

La situación más precisa es:

> Existe una base material convergida con varias capacidades ordinarias reales y algunos puentes efectivos entre ellas, pero todavía no existe un contexto operativo común suficientemente persistente que convierta trabajo actual, antecedentes y operaciones auxiliares en un único recorrido longitudinal reconocible.

---

# 26. Concentración de insuficiencias

Sin convertirlas todavía en huecos formales, los criterios no plenamente satisfechos se concentran en cuatro zonas observables:

~~~text
Z1
→ identidad operacional común del trabajo actual

Z2
→ asociación contextual de elementos auxiliares

Z3
→ continuidad reconocible antecedente → resultado

Z4
→ recorrido global sin reconstrucción externa relevante
~~~

Estas zonas son una clasificación del estado observado.

No constituyen todavía:

~~~text
GAP-HPI-xx
prioridades
hitos
actuaciones
~~~

---

# 27. Qué no se deriva todavía

Esta actuación no decide:

- si Z1…Z4 son cuatro huecos independientes;
- si algunos son manifestaciones del mismo hueco;
- cuál debe resolverse primero;
- qué cambio técnico los resolvería;
- si hace falta Architecture;
- qué archivos deberán modificarse.

---

# 28. Resultado de CONV-HPI-04

~~~text
criterios individuales
→ 30

SATISFECHOS
→ 22

PARCIALES
→ 4

NO SATISFECHOS
→ 4

NO DETERMINADOS
→ 0

capacidades satisfechas
→ 4

capacidades parciales
→ 6

dependencias D01/D02
→ PARCIALES

criterios globales
→ 1 SATISFECHO
→ 4 PARCIALES
→ 1 NO SATISFECHO

CF-HPI-01
→ NO SATISFECHO

CONV-HPI-04
→ CERRADA
~~~

---

# 29. Siguiente actuación legítima

La secuencia de Manual 17 continúa:

~~~text
alcance
✓
↓
capacidades
✓
↓
dependencias
✓
↓
criterios
✓
↓
estado actual
✓
↓
HUECOS
~~~

Se deriva:

> **CONV-HPI-05 — derivación y reducción de huecos materiales de H-PROJ-INT-01.**

Deberá partir de los criterios fallidos/parciales y decidir:

- cuáles expresan un mismo defecto constitutivo;
- cuáles son consecuencias de otro;
- cuáles requieren tratamiento independiente;
- cuál es el mapa mínimo de huecos reales.

No deberá todavía priorizar ni formular hitos hasta completar esa reducción.


---

# 30. Resultado de CONV-HPI-05

La actuación [105](105-CONV-HPI-05_MAPA_MINIMO_DE_HUECOS.md) reduce las cuatro zonas observadas a dos huecos independientes:

~~~text
Z1 + Z2
→ GAP-HPI-01
→ contexto operativo común y persistente

Z3
→ GAP-HPI-02
→ continuidad material antecedente → resultado

Z4
→ consecuencia de GAP-HPI-01 + GAP-HPI-02
~~~

No se identifica tercer hueco material independiente.

Siguiente actuación:

~~~text
CONV-HPI-06
→ determinar prioridad
  y reducir el primer hito verificable
~~~


---

# 31. Prioridad posterior

[106](106-CONV-HPI-06_PRIORIDAD_Y_PRIMER_HITO.md) establece que las insuficiencias asociadas al contexto común se tratarán primero mediante HITO-HPI-01.

La relación antecedente → resultado permanece deliberadamente fuera de ese primer hito.
