# 131 — CONV-SYS-01 / Convergencia hacia una trayectoria ordinaria única

**Fecha:** 21/11/2026  
**Estado:** ABIERTA — convergencia realizativa justificada; cuatro gaps materiales reducidos; primer gap priorizado.  
**Fundamento:** patrimonio cerrado de H-CONV-FINAL-01, R-80-CONV-04, H-POST/HPI y CI-POST-CONV-01.  
**Product:** sin nuevo compromiso.  
**Horizonte nuevo:** no derivado.

---

# 1. Decisión de convergencia

Se adopta como dirección inmediata de realización:

> Convertir capacidades ya justificadas y demostradas por separado o en integraciones parciales en una única trayectoria ordinaria de conocimiento, producida durante el trabajo real de la App.

No se abre una búsqueda general de nuevas necesidades.

La evidencia nueva sigue siendo admisible si refuta el estado vigente, pero deja de ser el motor ordinario de desarrollo.

---

# 2. Hito integrado

Se formula:

> **HITO-CONV-SYS-01 — Primera investigación ordinaria completa gobernada por una única trayectoria de conocimiento.**

Criterio general:

~~~text
una experiencia ordinaria
→ incorpora fuentes
→ explicita afirmaciones
→ transforma contenido
→ registra actuaciones humanas
→ registra apoyo IA
→ conserva decisiones/fundamentos
→ persiste
→ admite relevo
→ continúa
→ permite revisar un resultado posterior
→ reconstruye qué lo produjo
~~~

No exige:

- grafo visual;
- ontología universal;
- backend general;
- colaboración distribuida;
- autonomía de agentes;
- verdad material automática;
- modelo definitivo de datos.

---

# 3. Escenario de referencia E2E

El hito deberá poder ejercer, como mínimo:

~~~text
1. incorporar varias fuentes
2. extraer afirmaciones
3. transformar parte del contenido
4. utilizar IA para investigar
5. conservar qué hizo la IA
6. mantener qué hizo el humano
7. tomar decisiones
8. interrumpir
9. entregar contexto a otro participante
10. continuar
11. revisar posteriormente un resultado
12. reconstruir:
    fuentes
    afirmaciones
    transformaciones
    participantes
    actuaciones
    decisiones
    resultados
~~~

La reconstrucción debe proceder del estado persistido por el producto, no de JSON editado manualmente ni de memoria externa.

---

# 4. Estado material de partida

Ya existe patrimonio suficiente para no reabrir las preguntas fundamentales:

~~~text
KnowledgeTrajectory
→ F / A / T / P / AC / R
→ relaciones explícitas
→ persistencia
→ navegación
→ razón
→ procedencia humana/IA

App ordinaria
→ materiales
→ continuidad
→ capturas
→ comparación
→ autoría
→ apoyo IA real
→ persistencia/reanudación

HandoffExperience
→ relevo P1 → P2 mediante contexto persistido

CI-POST-CONV-01
→ R1 → R2 desde trayectoria
→ confirmado y resuelto en alcance mínimo
~~~

La diferencia actual no es ausencia de capacidades elementales.

Es ausencia de convergencia sistemática:

~~~text
actuaciones ordinarias reales
≠ todavía
actualización de una misma KnowledgeTrajectory
~~~

---

# 5. GAP-CONV-SYS-01 — actuaciones ordinarias → trayectoria

## Problema

Las actuaciones ordinarias principales viven hoy en estados propios.

No está demostrado que:

~~~text
crear/continuar trabajo ordinario
↓
produzca automáticamente
F / A / T / P / AC / R
en una trayectoria asociada
~~~

## Criterio de cierre mínimo

Un recorrido ordinario ya existente debe:

1. partir de un material antecedente;
2. producir un nuevo trabajo sin sembrar una trayectoria desde el test;
3. crear/persistir una asociación de trayectoria para el resultado nuevo;
4. permitir abrirla desde App;
5. reconstruir antecedente, aportación, transformación y actuación humana;
6. sobrevivir al remontaje.

Este gap es raíz.

---

# 6. GAP-CONV-SYS-02 — apoyo IA real → misma trayectoria

El apoyo IA ordinario ya conserva:

~~~text
contenido
system
model?
requestId?
obra asociada
~~~

KnowledgeTrajectory ya admite procedencia IA.

Falta demostrar:

~~~text
solicitud IA real
↓
participante IA
+ actuación IA
+ transformación pertinente
↓
misma trayectoria del trabajo
~~~

No se reabre la integración IA ni su despliegue.

---

# 7. GAP-CONV-SYS-03 — decisión/fundamento real → misma trayectoria

La razón estructurada ya está demostrada mediante:

~~~text
objetivo
condiciones
alternativas
evidencia
decisión
resultado
~~~

Falta que una decisión ejercida durante un flujo ordinario constituya esa razón en la trayectoria real del resultado, sin sembrarla externamente.

No se exige motor general de razonamiento.

---

# 8. GAP-CONV-SYS-04 — relevo P1 → P2 dentro de la misma trayectoria

El relevo contextual ya está demostrado en realización especializada.

Falta integrar:

~~~text
trayectoria Rn
→ contexto pertinente
→ P2
→ nueva actuación
→ Rn+1
~~~

preservando qué recibió P2, qué añadió y qué resultado produjo.

No se vuelve a demostrar independencia del estado privado de P1 salvo regresión.

---

# 9. Dependencias mínimas

Se fijan dependencias funcionales:

~~~text
GAP-CONV-SYS-01
↓
GAP-CONV-SYS-02

GAP-CONV-SYS-01
↓
GAP-CONV-SYS-03

GAP-CONV-SYS-01
↓
GAP-CONV-SYS-04
~~~

No se demuestra dependencia necesaria entre 02, 03 y 04.

Por tanto, el primer gap es inequívoco:

~~~text
PRIORIDAD 1
→ GAP-CONV-SYS-01
~~~

---

# 10. Roadmap mínimo

~~~text
R-CSYS-01
→ contrato rojo:
  continuación ordinaria genera trayectoria

R-CSYS-02
→ producción mínima para cerrar GAP-CONV-SYS-01

R-CSYS-03
→ regresión y cierre GAP-CONV-SYS-01

R-CSYS-04
→ integrar apoyo IA en la trayectoria

R-CSYS-05
→ integrar decisión/fundamento

R-CSYS-06
→ integrar relevo P1 → P2

R-CSYS-07
→ escenario E2E completo de HITO-CONV-SYS-01

R-CSYS-08
→ validación humana del recorrido integrado
  sólo después de existencia material del escenario
~~~

El orden entre R-CSYS-04…06 podrá revisarse si la evidencia técnica demuestra una dependencia distinta, pero no antes de cerrar GAP-CONV-SYS-01.

---

# 11. Primera actuación justificable

Se deriva únicamente:

> **R-CSYS-01 — Contrato rojo de constitución automática de trayectoria desde una continuación ordinaria.**

Debe usar el recorrido ordinario existente y no introducir producción.

Caso mínimo:

~~~text
m1 existente
↓
seleccionar m1
↓
nuevo trabajo ordinario
↓
Continuar con este material
↓
m2 constituido
↓
trayectoria asociada creada por el producto
↓
abrir trayectoria
↓
reconstruir:
  m1 como antecedente/fuente pertinente
  nueva aportación
  transformación de continuación
  participante humano
  actuación humana
  resultado
↓
remount
↓
misma trayectoria recuperable
~~~

El test no deberá exigir todavía IA, decisión ni relevo.

---

# 12. Estado resultante

~~~text
HITO-CONV-SYS-01
→ FORMULADO COMO HITO DE CONVERGENCIA
→ NO nuevo horizonte

GAP-CONV-SYS-01
→ ABIERTO
→ PRIORIDAD 1

GAP-CONV-SYS-02
→ ABIERTO
→ dependiente de GAP-01

GAP-CONV-SYS-03
→ ABIERTO
→ dependiente de GAP-01

GAP-CONV-SYS-04
→ ABIERTO
→ dependiente de GAP-01

Architecture
→ NO DERIVADA

nuevo Product
→ NO

R-CSYS-01
→ DERIVADA
~~~

# 13. Punto de reanudación

> Formular y ejecutar el contrato rojo de R-CSYS-01 sin modificar producción.


---

# 14. Ejecución y cierre de GAP-CONV-SYS-01

## 14.1 Primer RED válido

Tras corregir un selector ambiguo del propio test, la ejecución material de:

~~~text
src/App.knowledge-trajectory.ordinary-convergence.test.tsx
~~~

produjo:

~~~text
T-CSYS-01
→ FAIL
→ no existe asociación de trayectoria para el nuevo material

T-CSYS-02
→ FAIL
→ misma causa

T-CSYS-03
→ FAIL
→ misma causa
~~~

La continuación ordinaria sí constituía el nuevo trabajo, por lo que el RED
aisló el gap buscado:

~~~text
trabajo ordinario
→ SÍ

KnowledgeTrajectory asociada
→ NO
~~~

## 14.2 Primera intervención mínima

Se modificó únicamente el handler de:

~~~text
Continuar con este material
~~~

para que, al constituir el nuevo material, cree y persista también una
`KnowledgeTrajectory` mínima con:

~~~text
antecedente
→ source

nuevo trabajo
→ assertion

continuación ordinaria
→ transformation

Usuario principal
→ participant

Continuar con este material
→ action

nuevo resultado
→ result
~~~

No se introdujeron IA, decisión/razón ni relevo.

Resultado intermedio:

~~~text
T-CSYS-01
→ PASS

T-CSYS-02
→ FAIL

T-CSYS-03
→ FAIL
~~~

La causa de los dos fallos restantes fue un supuesto previo de App: toda
trayectoria abierta sin `continuation` intentaba reconstruir obligatoriamente
una razón estructurada y `traceResultReason()` lanzaba por ausencia de
`justifies → R3`.

## 14.3 Segunda intervención mínima

No se inventó una razón para R3.

Se cambió únicamente la condición de lectura para que
`traceResultReason()` se ejecute cuando la trayectoria contiene realmente una
relación:

~~~text
decision
→ justifies
→ result
~~~

Esto preserva la frontera con GAP-CONV-SYS-03.

## 14.4 GREEN y regresión

Resultado final del contrato:

~~~text
src/App.knowledge-trajectory.ordinary-convergence.test.tsx
→ 3/3 PASS
~~~

Regresión dirigida observada:

~~~text
src/App.knowledge-trajectory.final-convergence.test.tsx
→ 4/4 PASS

src/App.knowledge-trajectory.integration.test.tsx
→ 4/4 PASS

src/realizations/knowledge-trajectory/knowledgeTrajectory.integration.test.tsx
→ 5/5 PASS

src/realizations/knowledge-trajectory/KnowledgeTrajectory.test.ts
→ 6/6 PASS
~~~

Total observado en esta secuencia de cierre:

~~~text
22/22 PASS
~~~

## 14.5 Decisión sobre GAP-CONV-SYS-01

Criterio mínimo:

1. partir de material antecedente;
2. producir nuevo trabajo sin siembra externa de trayectoria;
3. crear/persistir asociación de trayectoria;
4. abrirla desde App;
5. reconstruir antecedente, aportación, transformación y actuación humana;
6. sobrevivir al remontaje.

Resultado:

~~~text
1 → SATISFECHO
2 → SATISFECHO
3 → SATISFECHO
4 → SATISFECHO
5 → SATISFECHO
6 → SATISFECHO
~~~

Por tanto:

~~~text
GAP-CONV-SYS-01
→ CERRADO

R-CSYS-01
→ CERRADA

R-CSYS-02
→ REALIZADA

R-CSYS-03
→ CERRADA
~~~

La App ordinaria deja de ser sólo consumidora de trayectorias ya sembradas:
una continuación ordinaria puede constituir directamente su propia
`KnowledgeTrajectory`.

---

# 15. Siguiente prioridad derivada

Al cerrarse el gap raíz desaparece la dependencia que bloqueaba los otros tres.

Se mantiene como siguiente actuación del roadmap:

~~~text
GAP-CONV-SYS-02
→ apoyo IA real → misma trayectoria

R-CSYS-04
→ contrato rojo de integración IA en trayectoria ordinaria
~~~

Razón de prioridad:

- el apoyo IA ordinario ya existe y está desplegado;
- ya conserva contenido y procedencia;
- `KnowledgeTrajectory` ya admite participante IA y `aiProvenance`;
- por tanto el siguiente trabajo es una conexión de convergencia, no una nueva capacidad.

GAP-CONV-SYS-03 y GAP-CONV-SYS-04 permanecen abiertos y no se mezclan todavía
con esta actuación.

# 16. Estado resultante

~~~text
HITO-CONV-SYS-01
→ EN PROGRESO

GAP-CONV-SYS-01
→ CERRADO

GAP-CONV-SYS-02
→ ABIERTO
→ SIGUIENTE PRIORIDAD

GAP-CONV-SYS-03
→ ABIERTO

GAP-CONV-SYS-04
→ ABIERTO

nuevo Product
→ NO

nuevo horizonte
→ NO

Architecture
→ NO DERIVADA

siguiente actuación
→ R-CSYS-04
→ contrato rojo IA → trayectoria
~~~

# 17. Punto de reanudación

> Formular el contrato rojo mínimo de R-CSYS-04 de modo que un apoyo IA
> solicitado sobre un trabajo ordinario con trayectoria existente quede
> incorporado a esa misma trayectoria con procedencia IA explícita, sin
> modificar todavía producción.


---

# 18. Ejecución y cierre de GAP-CONV-SYS-02

## 18.1 Contrato rojo

Se crea:

~~~text
src/App.knowledge-trajectory.ai-convergence.test.tsx
~~~

partiendo de una obra ordinaria `m1` con `KnowledgeTrajectory(R1)` ya existente.

El contrato exige:

~~~text
T-CSYS-AI-01
→ conservar la trayectoria R1
→ añadir contribución IA
→ conservar system/model/requestId

T-CSYS-AI-02
→ participante IA
→ actuación IA
→ transformación IA
→ todos pertenecen a la misma KnowledgeTrajectory

T-CSYS-AI-03
→ persistencia de la contribución IA tras remount
~~~

Primer resultado observado:

~~~text
3/3 FAIL
~~~

Causa común:

~~~text
traceResultParticipantProvenance(R1)
→ 0 contribuciones IA
~~~

El flujo de apoyo IA llegaba correctamente hasta la conservación del apoyo,
por lo que el RED aisló GAP-CONV-SYS-02 sin fallo del proveedor, Turnstile ni
persistencia del apoyo separado.

## 18.2 Intervención mínima

Se modifica únicamente el éxito de:

~~~text
Solicitar apoyo IA
~~~

Cuando la obra tiene una única trayectoria asociada inequívoca, el apoyo IA
añade a esa misma trayectoria:

~~~text
participant IA
→ system del proveedor

action IA
→ petición humana

transformation IA
→ contenido del apoyo

participantProvenance
→ participantType = ai
→ contributionState = produced
→ system/model/requestId
~~~

La trayectoria base de R1 se conserva.

No se crean:

- nuevo resultado;
- decisión;
- razón;
- relevo.

Tampoco se modifica `KnowledgeTrajectory.ts`, el repositorio ni el transporte IA.

## 18.3 GREEN y regresión

Contrato:

~~~text
src/App.knowledge-trajectory.ai-convergence.test.tsx
→ 3/3 PASS
~~~

Regresión dirigida observada:

~~~text
src/App.ai-support.integration.test.tsx
→ 13/13 PASS

src/realizations/knowledge-trajectory/KnowledgeTrajectory.provenance.test.ts
→ 5/5 PASS

src/App.knowledge-trajectory.final-convergence.test.tsx
→ 4/4 PASS
~~~

Total observado en la secuencia de cierre:

~~~text
25/25 PASS
~~~

## 18.4 Decisión

El criterio material de GAP-CONV-SYS-02 queda satisfecho:

~~~text
apoyo IA ordinario real
→ misma trayectoria
→ participante IA
→ actuación IA
→ transformación IA
→ system/model/requestId
→ persistencia
~~~

Por tanto:

~~~text
GAP-CONV-SYS-02
→ CERRADO

R-CSYS-04
→ CERRADA
~~~

No se abre nuevo Product, horizonte ni Architecture.

---

# 19. Siguiente prioridad derivada

El roadmap vigente fija:

~~~text
R-CSYS-05
→ integrar decisión/fundamento

R-CSYS-06
→ integrar relevo P1 → P2
~~~

No ha aparecido evidencia que obligue a invertir ese orden.

Por tanto:

~~~text
GAP-CONV-SYS-03
→ SIGUIENTE PRIORIDAD

R-CSYS-05
→ siguiente actuación
→ primero contrato rojo
~~~

El contrato deberá demostrar que una decisión ejercida durante el flujo
ordinario constituye razón estructurada en la misma trayectoria real del
resultado, sin siembra externa y sin exigir un motor general de razonamiento.

# 20. Estado resultante

~~~text
HITO-CONV-SYS-01
→ EN PROGRESO

GAP-CONV-SYS-01
→ CERRADO

GAP-CONV-SYS-02
→ CERRADO

GAP-CONV-SYS-03
→ ABIERTO
→ SIGUIENTE PRIORIDAD

GAP-CONV-SYS-04
→ ABIERTO

nuevo Product
→ NO

nuevo horizonte
→ NO

Architecture
→ NO DERIVADA
~~~

# 21. Punto de reanudación

> Formular el contrato rojo mínimo de R-CSYS-05 para que una decisión ordinaria
> sobre un trabajo con trayectoria existente constituya en esa misma
> KnowledgeTrajectory el fundamento reconstruible del resultado, sin modificar
> todavía producción.


---

# 22. Ejecución y cierre de GAP-CONV-SYS-03

## 22.1 Reducción previa del gap

La inspección de App demostró que no existía todavía una actuación ordinaria
de decisión estructurada equivalente a:

~~~text
objetivo
+ condiciones
+ alternativas
+ evidencia
+ decisión
~~~

Por tanto, el gap no era únicamente una desconexión entre una decisión ya
existente y `KnowledgeTrajectory`.

La dependencia realizativa mínima era:

~~~text
crear actuación ordinaria mínima de decisión
↓
constituir su fundamento
↓
persistirlo en la misma trayectoria del resultado
~~~

## 22.2 Contrato rojo

Se crea:

~~~text
src/App.knowledge-trajectory.reason-convergence.test.tsx
~~~

El contrato exige:

~~~text
T-CSYS-DEC-01
→ desde R1 puede ejercerse una decisión ordinaria
→ sin sembrar razón desde el test

T-CSYS-DEC-02
→ la misma KnowledgeTrajectory contiene:
  objetivo
  condiciones
  alternativa descartada
  alternativa seleccionada
  evidencia decisiva
  decisión
  decision → justifies → R1

T-CSYS-DEC-03
→ tras remount
→ R1 conserva y muestra el fundamento
~~~

Primer resultado observado:

~~~text
3/3 FAIL
~~~

Causa común:

~~~text
ausencia de:
Registrar decisión para R1
~~~

La trayectoria R1 sí existía y podía abrirse.

## 22.3 Intervención mínima

Se añade dentro de la trayectoria abierta una actuación mínima:

~~~text
Registrar decisión para R1
↓
formulario explícito
↓
Constituir fundamento de R1
~~~

El formulario recoge:

- objetivo;
- dos condiciones obligatorias;
- condición decisiva;
- alternativa descartada;
- condición incumplida por la alternativa descartada;
- alternativa seleccionada;
- evidencia decisiva;
- decisión.

La constitución reutiliza `attachDecisionReason()` y persiste la asociación
actualizada mediante `saveAssociatedTrajectory()`.

No se crea nuevo resultado y no se modifica `KnowledgeTrajectory.ts`.

La vista de Razón pasa a mostrar identificador + contenido, conservando los IDs
históricos y haciendo recuperable el contenido realmente introducido.

## 22.4 GREEN y regresión

Contrato:

~~~text
src/App.knowledge-trajectory.reason-convergence.test.tsx
→ 3/3 PASS
~~~

Regresión dirigida observada:

~~~text
src/realizations/knowledge-trajectory/KnowledgeTrajectory.reason.test.ts
→ 6/6 PASS

src/App.knowledge-trajectory.integration.test.tsx
→ 4/4 PASS

src/App.knowledge-trajectory.final-convergence.test.tsx
→ 4/4 PASS
~~~

Total observado en esta secuencia:

~~~text
17/17 PASS
~~~

## 22.5 Decisión

El criterio material queda satisfecho:

~~~text
decisión ordinaria
→ misma KnowledgeTrajectory
→ objetivo
→ condiciones
→ alternativas
→ evidencia
→ decisión
→ justifies → resultado
→ persistencia
~~~

Por tanto:

~~~text
GAP-CONV-SYS-03
→ CERRADO

R-CSYS-05
→ CERRADA
~~~

No se abre motor general de razonamiento ni nuevo Product/horizonte/Architecture.

---

# 23. Siguiente prioridad derivada

Queda un único gap material previo al escenario integrado completo:

~~~text
GAP-CONV-SYS-04
→ relevo P1 → P2 dentro de la misma trayectoria
~~~

Se deriva:

~~~text
R-CSYS-06
→ contrato rojo de relevo integrado
~~~

El contrato deberá partir de una trayectoria persistida `Rn`, ejercer un relevo
a P2 y demostrar que una actuación posterior de P2 produce `Rn+1` conservando
en una misma trayectoria reconstruible:

~~~text
qué recibió P2
+ qué añadió P2
+ qué actuación realizó
+ qué resultado produjo
+ antecedente Rn
~~~

No debe volver a demostrar la independencia de estado privado de P1 salvo
regresión del patrimonio de `HandoffExperience`.

# 24. Estado resultante

~~~text
HITO-CONV-SYS-01
→ EN PROGRESO

GAP-CONV-SYS-01
→ CERRADO

GAP-CONV-SYS-02
→ CERRADO

GAP-CONV-SYS-03
→ CERRADO

GAP-CONV-SYS-04
→ ABIERTO
→ SIGUIENTE PRIORIDAD

nuevo Product
→ NO

nuevo horizonte
→ NO

Architecture
→ NO DERIVADA
~~~

# 25. Punto de reanudación

> Formular el contrato rojo mínimo de R-CSYS-06 para integrar el relevo P1 → P2
> en la misma trayectoria ordinaria, reutilizando el patrimonio ya demostrado y
> sin modificar todavía producción.


---

# 26. Ejecución y cierre de GAP-CONV-SYS-04

## 26.1 Contrato rojo

Se crea:

~~~text
src/App.knowledge-trajectory.handoff-convergence.test.tsx
~~~

El contrato parte de una `KnowledgeTrajectory(R1)` persistida y exige:

~~~text
T-CSYS-HO-01
→ R1 prepara un relevo entregable
→ contiene resultado R1 + aportación de P1

T-CSYS-HO-02
→ P2 recibe el relevo
→ añade su aportación
→ constituye R2
→ R2 conserva antecedente R1

T-CSYS-HO-03
→ R2 permite reconstruir:
  qué recibió P2
  qué añadió P2
  qué actuación realizó
  qué resultado produjo

T-CSYS-HO-04
→ tras remount
→ persiste R1 → R2
→ persiste la aportación de P2
~~~

Primer resultado funcional observado:

~~~text
4/4 FAIL
~~~

Causa común:

~~~text
ausencia de:
Preparar relevo de R1
~~~

La trayectoria R1, su procedencia y la contribución humana de P1 sí estaban
presentes.

Una primera ejecución posterior a producción no constituyó evidencia funcional
porque App contenía un error de parseo y se ejecutaron 0 tests. Se corrigió
únicamente el cierre sintáctico del handler antes de repetir el contrato.

## 26.2 Intervención mínima

Se conecta la trayectoria abierta con la superficie histórica
`Continuidad compartida`.

Desde R1:

~~~text
Preparar relevo de R1
→ JSON entregable compatible
~~~

El relevo conserva el contrato histórico:

~~~text
sharedResult
firstContribution
~~~

y añade de forma opcional:

~~~text
antecedentResultId
antecedentMaterialId
~~~

Los antecedentes históricos sin esos metadatos mantienen el comportamiento
anterior.

Cuando P2 recibe un relevo con metadatos y ejecuta:

~~~text
Continuar trabajo compartido
~~~

se constituye además una nueva obra/trayectoria con:

~~~text
source
→ resultado R1 + aportación recibida de P1

participant
→ P2

action
→ Continuar trabajo compartido

transformation
→ aportación de P2

result
→ aportación de P2

continuation.antecedentResultId
→ R1
~~~

No se modifica `HandoffExperience` ni se reabre el aislamiento del estado
privado de P1.

## 26.3 GREEN y regresión

Contrato:

~~~text
src/App.knowledge-trajectory.handoff-convergence.test.tsx
→ 4/4 PASS
~~~

Regresión dirigida observada:

~~~text
src/App.kgv.test.tsx
→ 7/7 PASS

src/realizations/handoff/HandoffExperience.test.tsx
→ 4/4 PASS

src/App.knowledge-trajectory.continuation.test.tsx
→ 4/4 PASS
~~~

Total observado en esta secuencia funcional de cierre:

~~~text
19/19 PASS
~~~

## 26.4 Decisión

El criterio material queda satisfecho:

~~~text
KnowledgeTrajectory(R1)
→ relevo entregable
→ P2 recibe contexto
→ P2 añade aportación
→ actuación P2
→ R2
→ antecedente R1 reconstruible
→ persistencia
~~~

Por tanto:

~~~text
GAP-CONV-SYS-04
→ CERRADO

R-CSYS-06
→ CERRADA
~~~

Los cuatro gaps materiales de convergencia quedan cerrados.

---

# 27. Estado previo al escenario integrado completo

~~~text
GAP-CONV-SYS-01
→ CERRADO

GAP-CONV-SYS-02
→ CERRADO

GAP-CONV-SYS-03
→ CERRADO

GAP-CONV-SYS-04
→ CERRADO
~~~

Esto no basta todavía para declarar satisfecho `HITO-CONV-SYS-01`.

Falta demostrar en una sola secuencia ordinaria que las capacidades ya
cerradas funcionan conjuntamente sin siembra manual intermedia ni
reconstrucción externa.

Se deriva:

~~~text
R-CSYS-07
→ escenario E2E completo de HITO-CONV-SYS-01
~~~

El escenario deberá cubrir, en una misma investigación ordinaria:

~~~text
fuentes
→ afirmaciones
→ transformación
→ apoyo IA real
→ procedencia humana/IA
→ decisión/fundamento
→ interrupción/persistencia
→ relevo P1 → P2
→ continuación
→ resultado posterior
→ revisión posterior
→ reconstrucción de procedencia y razón
~~~

No se exige todavía validación humana final de uso. Esa actuación permanece en
`R-CSYS-08` y solo procede después de disponer del escenario material completo.

# 28. Estado resultante

~~~text
HITO-CONV-SYS-01
→ EN PROGRESO

GAP-CONV-SYS-01
→ CERRADO

GAP-CONV-SYS-02
→ CERRADO

GAP-CONV-SYS-03
→ CERRADO

GAP-CONV-SYS-04
→ CERRADO

R-CSYS-07
→ SIGUIENTE ACTUACIÓN DERIVADA

nuevo Product
→ NO

nuevo horizonte
→ NO

Architecture
→ NO DERIVADA
~~~

# 29. Punto de reanudación

> Formular el contrato E2E de R-CSYS-07 que recorra en una sola investigación
> ordinaria las capacidades convergidas y demuestre que el resultado final puede
> reconstruirse desde estado persistido sin siembra manual ni memoria externa.


---

# 30. Ejecución y cierre de R-CSYS-07

## 30.1 Contrato E2E

Se crea:

~~~text
src/App.knowledge-trajectory.system-e2e.test.tsx
~~~

El contrato no siembra ninguna `KnowledgeTrajectory`.

Sólo parte de materiales ordinarios iniciales y exige que App constituya y
conserve por sí misma una secuencia completa:

~~~text
material ordinario
→ trayectoria

trayectoria
→ apoyo IA
→ procedencia IA

trayectoria
→ decisión/fundamento

interrupción
→ recuperación desde persistencia

trayectoria recuperada
→ relevo P1 → P2
→ continuación
→ resultado posterior

nuevo remount
→ revisión posterior
→ antecedente + procedencia + razón reconstruibles
~~~

## 30.2 Primer resultado

La primera ejecución terminó por timeout global de 5 segundos sin aserción
funcional fallida.

Se amplió únicamente el timeout local del contrato a 15 segundos.

La siguiente ejecución localizó una diferencia material:

~~~text
Preparar relevo de R3
→ botón presente

Relevo entregable de R3
→ ausente
~~~

La inspección demostró:

~~~text
R3
→ contiene estructura humana
  PH-m3 → AC-m3 → T-m3

pero
→ no contiene participantProvenance humana

apoyo IA posterior
→ sí contiene participantProvenance IA

Preparar relevo
→ requiere una contribución humana explícita
→ no la encuentra
→ aborta
~~~

## 30.3 Intervención mínima

Se corrige la creación ordinaria de trayectoria para registrar también la
contribución humana mediante `attachParticipantProvenance()`.

La trayectoria ordinaria pasa a conservar explícitamente:

~~~text
participant
→ Usuario principal

action
→ Continuar con este material

transformation
→ transformación ordinaria

participantType
→ human

contributionState
→ produced
~~~

No se añade fallback específico al relevo.

La corrección ataca la causa raíz: la procedencia humana explícita faltante en
la trayectoria ordinaria.

## 30.4 GREEN y regresión

Contrato E2E:

~~~text
src/App.knowledge-trajectory.system-e2e.test.tsx
→ 1/1 PASS
~~~

Regresión dirigida:

~~~text
src/App.knowledge-trajectory.ordinary-convergence.test.tsx
+
src/realizations/knowledge-trajectory/KnowledgeTrajectory.provenance.test.ts
→ 8/8 PASS

src/App.knowledge-trajectory.final-convergence.test.tsx
→ 4/4 PASS
~~~

Total observado en esta secuencia de cierre:

~~~text
13/13 PASS
~~~

## 30.5 Decisión

Queda demostrado en una única investigación ordinaria:

~~~text
fuente
→ afirmación
→ transformación
→ procedencia humana
→ apoyo IA + procedencia IA
→ decisión/fundamento
→ persistencia
→ interrupción
→ recuperación
→ relevo P1 → P2
→ continuación
→ resultado posterior
→ revisión posterior
→ reconstrucción de procedencia y razón
~~~

sin siembra manual intermedia de trayectorias.

Por tanto:

~~~text
R-CSYS-07
→ CERRADA

HITO-CONV-SYS-01
→ MATERIALMENTE DEMOSTRADO
→ PENDIENTE VALIDACIÓN HUMANA
~~~

No se declara todavía cerrado el hito.

---

# 31. Siguiente actuación derivada

La única actuación restante del roadmap es:

~~~text
R-CSYS-08
→ validación humana del escenario integrado
~~~

Su propósito no es buscar nuevas capacidades por defecto ni reabrir los gaps
cerrados.

Debe comprobar si una persona puede reconocer y utilizar el recorrido integrado
como una investigación coherente:

~~~text
trabajo anterior
→ continuar
→ apoyo IA
→ decisión
→ interrupción
→ recuperar
→ relevar
→ continuar
→ revisar
→ entender por qué existe el resultado
~~~

y distinguir en la experiencia:

- qué es fuente/antecedente;
- qué aportó la persona;
- qué aportó la IA;
- qué decisión se tomó y por qué;
- qué recibió P2;
- qué añadió P2;
- de qué resultado anterior procede el resultado posterior.

La salida deberá ser discriminante:

~~~text
A
→ recorrido reconocible y practicable
→ HITO-CONV-SYS-01 puede someterse a cierre

B
→ dificultad concreta de uso/interpretación
→ reducir exclusivamente esa diferencia

C
→ evidencia humana insuficiente
→ mantener hito pendiente sin inventar gap
~~~

# 32. Estado resultante

~~~text
GAP-CONV-SYS-01…04
→ CERRADOS

R-CSYS-07
→ CERRADA

HITO-CONV-SYS-01
→ MATERIALMENTE DEMOSTRADO
→ PENDIENTE R-CSYS-08

R-CSYS-08
→ SIGUIENTE ACTUACIÓN DERIVADA

nuevo Product
→ NO

nuevo horizonte
→ NO

Architecture
→ NO DERIVADA
~~~

# 33. Punto de reanudación

> Ejecutar R-CSYS-08 como validación humana del recorrido integrado completo,
> sin modificar producción antes de observar la experiencia humana.


---

# 34. Ejecución de R-CSYS-08 — validación humana

La validación se realiza sobre la App real en una ventana privada, sin modificar
producción durante la observación.

## 34.1 Orientación inicial

En estado limpio, la persona identifica dos posibles comienzos:

~~~text
crear identidad
o
empezar en “Ahora”
~~~

El encabezado “Ahora” resulta suficientemente prominente para elegirlo como
punto de inicio, aunque la coexistencia con “Identidad autoral” introduce una
ambigüedad inicial.

## 34.2 Creación y primera interpretación

Tras crear un texto, la persona reconoce:

- una zona donde parece conservarse el texto;
- otra zona relacionada con apoyo IA.

El alcance de “Qué apoyo necesitas” no resulta deducible sin probarlo.

## 34.3 Intento espontáneo de continuación

Al querer continuar la investigación, la persona interpreta razonablemente
“Continuidad compartida” + “Antecedente compartido recibido” + “Continuar con
este trabajo” como una vía de continuación.

Tras pulsar “Continuar con este trabajo” se abre “Integración post-V1”.

La reacción observada es que la propia página ha interrumpido la continuidad
esperada.

## 34.4 Conservación y recuperación percibidas

“Conservar trabajo actual como referencia estable” se interpreta como:

~~~text
guardar lo realizado
→ poder recuperarlo después
~~~

Sin embargo, la pantalla siguiente no muestra de forma evidente dónde quedó
guardado el trabajo ni una acción inequívoca de “retomar”.

Aparecen:

~~~text
Evolucionar trabajo actual
Publicar P1 desde S1
~~~

ambas con significado incierto.

La persona elige “Publicar P1 desde S1” no porque comprenda su semántica, sino
porque parece la opción con mayor probabilidad de recuperar lo anterior.

## 34.5 Resultado discriminante

Después de publicar:

- “Trabajo actual”, “Estado estable” y “Publicación” muestran el texto inicial;
- se reconoce recuperada la primera parte del trabajo;
- la segunda aportación no aparece recuperada;
- las acciones disponibles no dejan claro cómo continuar sin ignorar esa segunda
  parte.

Por tanto, la dificultad no es una mera preferencia estética ni una falta de
familiaridad con un término aislado.

La secuencia humana observada es:

~~~text
crear
→ comprender parcialmente

intentar continuar
→ cambio de contexto inesperado

conservar
→ no queda claro dónde ni cómo recuperar

publicar
→ reaparece la primera parte
→ no reaparece la segunda

continuar desde ahí
→ no resulta evidente
~~~

## 34.6 Decisión de R-CSYS-08

La salida discriminante es:

~~~text
B
→ dificultad concreta de uso/interpretación
~~~

R-CSYS-08 queda ejecutada con evidencia suficiente.

No se cierra todavía HITO-CONV-SYS-01.

La diferencia reducida es:

> La experiencia material conserva capacidades y datos suficientes, pero no
> presenta una continuidad humana reconocible entre crear, continuar, conservar,
> recuperar y seguir investigando; además, una aportación posterior puede quedar
> fuera del hilo que el usuario reconoce como recuperado.

Esto no reabre los cuatro gaps técnicos cerrados.

Tampoco justifica por sí solo nuevo Product, horizonte o Architecture.

---

# 35. Siguiente actuación derivada

Se deriva únicamente una actuación de reducción sobre la diferencia humana
observada:

~~~text
R-CSYS-09
→ reducir la continuidad humana ordinaria
  entre crear → continuar → conservar → recuperar → seguir
~~~

Antes de modificar producción deberá determinarse:

1. cuál es el hilo ordinario que la interfaz debe presentar como “el mismo
   trabajo”;
2. qué contenido debe permanecer visible/recuperable en cada transición;
3. qué acciones históricas son realizaciones internas y no deberían competir
   como rutas principales de usuario;
4. cuál es el criterio observable mínimo para que una persona pueda continuar
   sin ensayo y error ni pérdida aparente de aportaciones.

# 36. Estado resultante

~~~text
R-CSYS-08
→ EJECUTADA
→ SALIDA B

HITO-CONV-SYS-01
→ MATERIALMENTE DEMOSTRADO
→ NO CERRADO
→ BLOQUEADO POR CONTINUIDAD HUMANA OBSERVADA

GAP-CONV-SYS-01…04
→ CERRADOS

R-CSYS-09
→ SIGUIENTE ACTUACIÓN DERIVADA

nuevo Product
→ NO

nuevo horizonte
→ NO

Architecture
→ NO DERIVADA
~~~

# 37. Punto de reanudación

> Reducir R-CSYS-09 hasta un criterio mínimo de continuidad humana reconocible,
> sin modificar todavía producción.


---

# 38. R-CSYS-09-A — reconstrucción del modelo mental humano

## 38.1 Evidencia de partida

La observación humana de R-CSYS-08 demostró que la persona construye
espontáneamente este modelo:

~~~text
crear trabajo
→ añadir una aportación
→ conservar
→ recuperar
→ seguir desde lo ya hecho
~~~

La expectativa dominante no es cambiar de “tipo de experiencia”, sino mantener
un mismo hilo de trabajo que acumula aportaciones y puede retomarse.

La inspección de producción confirma que hoy existen dos modelos superpuestos:

~~~text
ResumeExperience / App ordinaria
→ aportación anterior
→ aportación actual
→ materiales ordinarios
→ trayectoria asociada
→ continuar / retomar

PostV1IntegratedExperience
→ current
→ S1
→ P1
→ evaluación
→ colaboración
→ intercambio
→ destino
~~~

Además, App sustituye completamente la vista ordinaria al seleccionar:

~~~text
Continuar con este trabajo
→ integrationChoice = "current"
→ PostV1IntegratedExperience
~~~

Por tanto, el cambio de contexto observado no es sólo perceptivo: existe una
sustitución real de la superficie principal de trabajo.

## 38.2 Modelo mental humano reconstruido

Se adopta como modelo humano mínimo:

> **Un trabajo es un hilo continuo de aportaciones y resultados relacionados
> que permanece reconocible aunque se conserve, se retome, se publique, se
> comparta o reciba apoyo.**

Representación mínima:

~~~text
HILO DE TRABAJO W

W0
→ aportación inicial

W1
→ aportación posterior

W2
→ nueva continuación

...

Wn
→ estado/resultante actual
~~~

Cada paso puede conservar:

~~~text
antecedentes
+ aportaciones humanas
+ aportaciones IA
+ decisiones
+ resultados
+ relaciones de procedencia
~~~

pero ninguno de esos elementos debe sustituir perceptivamente al hilo.

## 38.3 Hilo principal

Se define como **hilo principal** aquello que responde a:

~~~text
¿qué estaba haciendo?
¿qué añadí después?
¿dónde lo dejé?
¿qué tengo ahora?
¿cómo sigo?
~~~

En el estado actual, pertenecen al hilo principal:

~~~text
ordinary.materials
ordinary.current-work-id
ResumeExperience.previous/current
KnowledgeTrajectory asociada
continuation.antecedentResultId
~~~

No se afirma que éstos sean el modelo definitivo de datos. Se afirma únicamente
que hoy son los elementos que ya representan materialmente la continuidad
ordinaria acumulada.

## 38.4 Estados y acciones auxiliares

Se clasifican como **estados o actuaciones auxiliares sobre el hilo**, no como
hilos alternativos:

~~~text
Estado estable / S1
→ referencia congelada de un punto del hilo

Publicación / P1
→ publicación derivada de una referencia estable

Soporte evaluativo
→ evidencia/criterio asociados

Colaboración
→ actuación sobre un resultado compartido

Intercambio / X1
→ artefacto de transferencia

Destino / D1
→ recepción derivada

Apoyo IA
→ contribución sobre el hilo

Identidad autoral
→ atributo/participante

Comparación
→ actuación sobre materiales

Continuidad compartida
→ mecanismo de relevo/recepción
~~~

Estas capacidades pueden seguir existiendo, pero no deben competir con
“continuar el mismo trabajo” como si fueran rutas excluyentes.

## 38.5 Diferencia raíz

La diferencia humana observada se reduce a:

~~~text
modelo material
→ puede conservar relaciones y estados

modelo presentado
→ cambia de superficie y vocabulario
→ fragmenta la percepción del hilo

consecuencia
→ el usuario no puede distinguir con seguridad:
   continuar
   conservar
   publicar
   compartir
   recuperar
~~~

La segunda aportación observada quedó fuera del hilo que la persona reconoció
como recuperado porque la transición a PostV1 partió del contenido disponible
como `initialCurrent`, mientras el usuario esperaba una representación
acumulativa del trabajo.

No se concluye todavía cuál debe ser la implementación concreta.

## 38.6 Invariante humano derivado

Se fija el siguiente invariante:

> **Toda actuación auxiliar debe preservar la identificabilidad del hilo
> principal y no debe hacer desaparecer de la experiencia las aportaciones que
> el usuario ya reconoce como parte de ese mismo trabajo.**

En forma operativa:

~~~text
si W contiene A1 + A2
y el usuario:
→ conserva
→ publica
→ comparte
→ interrumpe
→ recupera

entonces:
→ W sigue siendo reconocible como el mismo trabajo
→ A1 y A2 siguen siendo recuperables dentro de ese hilo
→ la siguiente acción de continuación parte de W, no de una reconstrucción manual
~~~

---

# 39. CF-CSYS-09 — criterio de continuidad humana reconocible

Se formula:

> **CF-CSYS-09 — Una persona puede crear, ampliar, interrumpir, recuperar y
> continuar un mismo trabajo sin perder aportaciones ya constituidas ni tener
> que inferir qué mecanismo técnico debe usar para preservar el hilo.**

Condiciones verificables:

~~~text
CF-CSYS-09-01 — Identidad del hilo
Dado un trabajo con al menos dos aportaciones,
la interfaz permite reconocer que ambas pertenecen al mismo trabajo.

CF-CSYS-09-02 — Estado actual inequívoco
La persona puede identificar qué contenido constituye el estado actual del
trabajo sin confundirlo con una referencia estable o una publicación.

CF-CSYS-09-03 — Continuación explícita
Existe una acción inequívoca para continuar el trabajo actual y esa acción no
sustituye el hilo por una experiencia diferente sin explicación.

CF-CSYS-09-04 — Conservación no destructiva
Conservar una referencia, publicar, compartir o solicitar apoyo no elimina ni
oculta de forma permanente las aportaciones ya reconocidas como parte del hilo.

CF-CSYS-09-05 — Recuperación completa
Tras interrupción y recuperación, las aportaciones ya constituidas siguen
visibles o accesibles como partes del mismo hilo.

CF-CSYS-09-06 — Separación de acciones
La persona puede distinguir, sin ensayo y error:
→ continuar
→ conservar una referencia
→ publicar
→ compartir/relevar

CF-CSYS-09-07 — Reanudación
Después de recuperar, la acción principal permite seguir desde el estado actual
del hilo sin reintroducir manualmente contenido anterior.

CF-CSYS-09-08 — Compatibilidad con trayectoria
La mejora de continuidad humana no rompe:
→ KnowledgeTrajectory
→ procedencia humana/IA
→ razón
→ persistencia
→ relevo P1 → P2
~~~

## 39.1 Criterio de falsación

CF-CSYS-09 no se considera satisfecho si ocurre cualquiera de estos casos:

~~~text
una aportación constitutiva desaparece del hilo recuperado

o

“continuar” lleva a una superficie que ya no permite reconocer lo anterior

o

el usuario debe elegir entre códigos internos como S1/P1/X1 para descubrir cómo
seguir

o

recuperar exige volver a introducir manualmente contenido ya creado
~~~

## 39.2 Alcance

CF-CSYS-09 no exige:

- rediseño visual general;
- eliminación de PostV1IntegratedExperience;
- renombrar todos los conceptos internos;
- backend nuevo;
- colaboración distribuida;
- edición histórica completa;
- grafo visual.

Exige únicamente que esas realizaciones dejen de romper la continuidad humana
del trabajo ordinario.

---

# 40. Decisión de R-CSYS-09-A

Resultado:

~~~text
modelo mental humano
→ RECONSTRUIDO

hilo principal
→ DEFINIDO

estados/acciones auxiliares
→ SEPARADOS

CF-CSYS-09
→ FORMULADO

producción
→ SIN CAMBIOS
~~~

La siguiente actuación derivada es:

~~~text
R-CSYS-09-B
→ reducir la intervención mínima
→ determinar qué transición concreta debe cambiar
→ formular primero contrato rojo
~~~

La hipótesis principal para R-CSYS-09-B es:

~~~text
“Continuar con este trabajo”
no debe reemplazar el hilo ordinario por PostV1 como superficie principal

sino
→ continuar el mismo hilo
→ y exponer conservar/publicar/compartir como acciones sobre él
~~~

Esta hipótesis todavía debe contrastarse contra los contratos históricos antes
de modificar producción.

# 41. Estado resultante

~~~text
R-CSYS-09-A
→ CERRADA

CF-CSYS-09
→ FORMULADO

HITO-CONV-SYS-01
→ MATERIALMENTE DEMOSTRADO
→ NO CERRADO
→ pendiente satisfacer CF-CSYS-09

R-CSYS-09-B
→ SIGUIENTE ACTUACIÓN DERIVADA

nuevo Product
→ NO

nuevo horizonte
→ NO

Architecture
→ NO DERIVADA
~~~

# 42. Punto de reanudación

> Ejecutar R-CSYS-09-B: inspeccionar los contratos históricos afectados por la
> transición ordinario → PostV1 y reducir la intervención mínima antes de crear
> cualquier cambio productivo.


---

# 43. R-CSYS-09-B — contratos históricos afectados y reducción de intervención

## 43.1 Contratos que protegen la continuidad ordinaria

### App.hpi.test.tsx

R-HPI-01 protege que:

~~~text
W1
→ persiste como trabajo disponible
→ se recupera tras remount
→ materiales, capturas, comparación y apoyo IA
  operan bajo W1 sin sustituirlo
→ un cambio explícito W1 → W2
  separa asociaciones anteriores y posteriores
~~~

En particular:

~~~text
T-HPI-02
→ tras remount
→ W1 aparece como Aportación anterior
→ existe una acción /continuar con este trabajo/

T-HPI-07
→ Continuar con este material
→ constituye W2
→ tras remount W2 es el trabajo vigente
~~~

Este patrimonio exige continuidad ordinaria y cambio explícito de trabajo, pero
no exige que la acción denominada “Continuar con este trabajo” abra PostV1.

## 43.2 Contratos que protegen la integración PostV1

### PostV1IntegratedExperience.test.tsx

La realización especializada protege de forma autónoma:

~~~text
current
→ S1
→ P1
→ evaluación
→ colaboración
→ intercambio
→ destino
~~~

y además:

~~~text
initialCurrent = Y
→ inicia una nueva trayectoria integrada desde Y
→ sin constituir S1 automáticamente
~~~

Por tanto, PostV1 es patrimonio vigente y no puede eliminarse como consecuencia
de R-CSYS-09.

## 43.3 Contratos de elección humana Y/R — actuación 67

T67-01…T67-06 protegen:

~~~text
T67-01
→ Y y R están disponibles antes de elegir

T67-02
→ elegir R recupera R íntegramente
→ Y permanece preservado ordinariamente

T67-03
→ elegir Y puede sustituir R explícitamente
→ current = Y
→ S1 no se constituye automáticamente

T67-04
→ la trayectoria iniciada desde Y se recupera tras interrupción

T67-05
→ antes de elegir no se modifica Y ni R

T67-06
→ el trabajo ordinario recién constituido
  es el que se ofrece para iniciar integración
~~~

La obligación histórica es **preservar la elección humana y sus consecuencias**.

No existe obligación de conservar literalmente como acción principal el texto:

~~~text
Continuar con este trabajo
~~~

si el acceso a la ruta Y → PostV1 sigue siendo explícito, inteligible y
funcionalmente equivalente.

## 43.4 Contratos KGV afectados

### CR-KGV-02

T-KGV-04/05 construyen hoy el antecedente colaborativo mediante:

~~~text
trabajo ordinario
→ Continuar con este trabajo
→ PostV1
→ conservar S1
→ publicar P1
→ soporte evaluativo
→ colaboración A
→ preparar antecedente
~~~

Por tanto:

- la ruta hacia PostV1 debe seguir disponible;
- S1/P1/evaluación/colaboración no pueden desaparecer;
- el antecedente transferible debe seguir pudiendo constituirse sin conocer el
  contrato interno.

El hecho de que el test use actualmente el selector
`/continuar con este trabajo/i` es una dependencia de presentación del
contrato histórico, no la esencia material de CR-KGV-02.

Si se cambia el nombre de esa entrada, el contrato deberá actualizarse
deliberadamente conservando toda su semántica posterior.

### CR-KGV-03

T-KGV-06/07 protegen recuperación ante estado PostV1 incompatible mediante:

~~~text
Retomar trayectoria integrada existente
→ detectar incompatibilidad
→ descartar estado incompatible
→ volver a App ordinaria utilizable
~~~

Esta ruta debe permanecer intacta.

---

# 44. Clasificación del patrimonio

Se distinguen tres clases.

## A — Patrimonio que no debe modificarse

~~~text
PostV1IntegratedExperience
→ semántica current/S1/P1/evaluación/colaboración/X1/D1

post-v1-integrated.state
→ persistencia

elección Y/R
→ ambas alternativas visibles antes de decidir

ruta R
→ retoma R sin destruir Y

ruta Y
→ puede iniciar PostV1 desde Y
→ puede sustituir R sólo por elección explícita

KGV
→ puede constituir y transferir antecedente colaborativo

recuperación de estado incompatible
→ permanece
~~~

## B — Patrimonio que puede cambiar de presentación

~~~text
texto exacto:
“Continuar con este trabajo”

posición visual de la entrada PostV1

jerarquía principal/auxiliar de esa acción
~~~

siempre que se conserve la semántica de A.

## C — Diferencia nueva que debe introducirse

Hoy no existe una acción principal inequívoca que signifique:

~~~text
seguir trabajando sobre el hilo ordinario actual
sin entrar en PostV1
~~~

Esa es la diferencia mínima superviviente.

---

# 45. Intervención mínima reducida

Se descartan:

- eliminar PostV1;
- fusionar PostV1 y KnowledgeTrajectory;
- reescribir S1/P1;
- cambiar la persistencia histórica;
- sustituir CR-KGV-02;
- crear un nuevo modelo de datos;
- rediseñar toda App.

La intervención mínima candidata queda:

~~~text
1. introducir una acción primaria de continuidad ordinaria:
   “Seguir trabajando” / equivalente

2. esa acción:
   → permanece en la App ordinaria
   → permite aportar Wn+1 desde Wn
   → conserva Wn como antecedente
   → actualiza el trabajo vigente
   → no monta PostV1

3. reclasificar la acción histórica Y → PostV1 como auxiliar explícita:
   “Usar este trabajo en integración post-V1” / equivalente

4. si existe R previa:
   → mantener también “Retomar trayectoria integrada existente”
   → preservar elección Y/R antes de modificar nada

5. no modificar PostV1IntegratedExperience
   salvo que un contrato rojo posterior demuestre necesidad
~~~

La formulación exacta de etiquetas no se congela todavía; sí se congela la
distinción semántica:

~~~text
CONTINUAR HILO
≠
ABRIR/INICIAR INTEGRACIÓN POST-V1
~~~

---

# 46. Contrato rojo mínimo de R-CSYS-09-B

Antes de producción debe añadirse un contrato nuevo que parta únicamente de App
ordinaria.

Caso mínimo:

~~~text
A1
→ Crear

sin recarga obligatoria
→ acción principal de continuar hilo

A2
→ constituir como aportación posterior

comprobaciones:
→ A1 sigue reconocible como antecedente
→ A2 es trabajo actual
→ ambos pertenecen al mismo recorrido ordinario
→ PostV1 no está montado
~~~

Después:

~~~text
acción auxiliar PostV1
→ sigue disponible

si se ejerce:
→ PostV1 recibe exactamente A2 como current
→ S1 sigue sin constitución automática
~~~

Con R previa persistida:

~~~text
A2 ordinario
+ R integrada

→ ambas rutas auxiliares siguen disponibles:
   usar A2 en integración
   retomar R

→ antes de elegir:
   A2 intacto
   R intacta
~~~

Tras remount:

~~~text
A2
→ sigue siendo trabajo ordinario vigente
→ A1 permanece recuperable como antecedente/material anterior
→ la acción principal sigue siendo continuar el hilo
~~~

## 46.1 Condiciones propuestas

~~~text
T-CSYS-HCONT-01
→ A1 → A2 puede ejercerse ordinariamente sin entrar en PostV1

T-CSYS-HCONT-02
→ tras A2, A1 y A2 siguen reconocibles como un mismo hilo

T-CSYS-HCONT-03
→ remount recupera A2 como actual y A1 como antecedente recuperable

T-CSYS-HCONT-04
→ entrada PostV1 sigue disponible como acción distinta y explícita

T-CSYS-HCONT-05
→ usar A2 en PostV1 conserva current=A2 y S1=null

T-CSYS-HCONT-06
→ con R previa, elección A2/R permanece preservada antes de decidir

T-CSYS-HCONT-07
→ CR-KGV-02 sigue pudiendo constituir antecedente colaborativo por la ruta
   PostV1 explícita

T-CSYS-HCONT-08
→ CR-KGV-03 conserva recuperación de estado incompatible
~~~

---

# 47. Decisión de R-CSYS-09-B

La inspección histórica no refuta CF-CSYS-09.

Sí obliga a una restricción:

> La continuidad ordinaria debe convertirse en la acción principal sin eliminar
> ni degradar la integración PostV1, que pasa a presentarse explícitamente como
> una actuación auxiliar distinta sobre el trabajo.

Por tanto:

~~~text
R-CSYS-09-B
→ REDUCIDA

intervención candidata
→ separación semántica y funcional:
  continuar hilo
  vs
  abrir integración PostV1

producción
→ SIN CAMBIOS

contrato rojo
→ DERIVADO
~~~

Siguiente actuación:

~~~text
R-CSYS-09-C
→ crear únicamente el contrato rojo T-CSYS-HCONT-01…08
→ ejecutar
→ localizar la diferencia real antes de producción
~~~

# 48. Estado resultante

~~~text
R-CSYS-09-A
→ CERRADA

R-CSYS-09-B
→ CERRADA COMO REDUCCIÓN

CF-CSYS-09
→ VIGENTE

R-CSYS-09-C
→ SIGUIENTE ACTUACIÓN

PostV1
→ PATRIMONIO CONSERVADO

T67 / KGV
→ CONTRATOS A PROTEGER

producción
→ SIN CAMBIOS
~~~

# 49. Punto de reanudación

> Crear el contrato rojo de continuidad humana ordinaria sin modificar
> producción y verificar qué condiciones fallan realmente.


# 50. R-CSYS-09-C — contrato rojo y diferencia observada

Se crea exclusivamente el contrato:

~~~text
src/App.human-continuity.test.tsx
~~~

con T-CSYS-HCONT-01…08, sin modificar todavía producción.

Primera ejecución válida:

~~~text
8 tests
→ 1 PASS
→ 7 FAIL
~~~

Resultado individual:

~~~text
T-CSYS-HCONT-01
→ FAIL
→ no existe una acción “Seguir trabajando”

T-CSYS-HCONT-02
→ FAIL aguas arriba
→ no puede ejercerse todavía A1 → A2 por ruta ordinaria

T-CSYS-HCONT-03
→ FAIL aguas arriba
→ no puede verificarse todavía remount A2/A1

T-CSYS-HCONT-04
→ FAIL
→ la entrada PostV1 sigue presentada bajo la acción histórica
  “Continuar con este trabajo”

T-CSYS-HCONT-05
→ FAIL aguas arriba
→ no puede constituirse A2 ordinariamente antes de usarlo en PostV1

T-CSYS-HCONT-06
→ FAIL de presentación
→ la opción Y → PostV1 existe materialmente,
  pero no bajo una acción explícitamente diferenciada

T-CSYS-HCONT-07
→ FAIL de presentación
→ la ruta KGV llega al punto de entrada PostV1,
  pero el selector nuevo todavía no existe

T-CSYS-HCONT-08
→ PASS
→ la recuperación de estado PostV1 incompatible permanece utilizable
~~~

La ejecución reduce siete fallos a dos causas comunes:

~~~text
CAUSA 1
→ ausencia de una acción ordinaria inequívoca
  para seguir trabajando sobre el mismo hilo

CAUSA 2
→ ausencia de una denominación explícita y separada
  para iniciar/usar la integración PostV1
~~~

No se demuestra en esta fase:

- pérdida de persistencia A1/A2;
- pérdida de KnowledgeTrajectory;
- rotura de PostV1;
- rotura de KGV;
- rotura de recuperación incompatible.

Los fallos de T02/T03/T05 son dependientes de la ausencia de la transición
ordinaria y no pueden reinterpretarse como defectos de estado antes de poder
ejercer esa ruta.

Resultado:

~~~text
R-CSYS-09-C
→ RED VÁLIDO

diferencia real
→ separación ausente entre:
   CONTINUAR HILO ORDINARIO
   y
   USAR INTEGRACIÓN POST-V1

producción
→ TODAVÍA SIN CAMBIOS
~~~

---

# 51. R-CSYS-09-D — intervención mínima

Se modifica únicamente App para materializar la separación ya reducida.

Intervención productiva:

~~~text
1. nueva acción:
   “Seguir trabajando”

2. efecto:
   → permanece en App ordinaria
   → remonta ResumeExperience
   → permite continuar desde el trabajo vigente

3. entrada histórica Y → PostV1:
   “Usar este trabajo en integración post-V1”

4. si existe R:
   “Usar este trabajo en integración post-V1
    sustituyendo la trayectoria integrada anterior”

5. se conserva:
   “Retomar trayectoria integrada existente”
~~~

No se modifica:

- KnowledgeTrajectory;
- persistencia ordinaria;
- PostV1IntegratedExperience;
- S1/P1;
- KGV;
- recuperación incompatible;
- modelo de datos.

Commit productivo:

~~~text
38a7c25
fix(app): separate ordinary continuation from post-v1 integration
~~~

## 51.1 Resultado del contrato nuevo

Primera ejecución tras producción:

~~~text
7/8 PASS
~~~

El único fallo restante es T-CSYS-HCONT-07.

La salida recibida por el test contiene materialmente:

~~~json
{
  "sharedResult": "Primera aportación del mismo trabajo",
  "firstContribution": {
    "participant": "A",
    "content": "Aportación A transferible"
  }
}
~~~

Por tanto, no existe fallo productivo en la entrega. El defecto está en el
matcher del test:

~~~text
toHaveValue(expect.stringContaining(...))
~~~

Se corrige únicamente el harness:

~~~text
b961464
test(app): fix transferable antecedent assertion
~~~

Resultado posterior:

~~~text
T-CSYS-HCONT-01…08
→ 8/8 PASS
~~~

Conclusión material:

~~~text
T02
→ A1 y A2 siguen reconocibles como mismo hilo

T03
→ remount recupera A2 como actual
→ A1 sigue recuperable

T05
→ A2 entra en PostV1 como current
→ S1 no se constituye automáticamente
~~~

No aparece un segundo defecto material de persistencia o continuidad.

---

# 52. Regresión histórica de R-CSYS-09-D

Se ejecuta regresión focal sobre:

~~~text
src/App.test.tsx
src/App.hpi.test.tsx
src/App.kgv.test.tsx
src/realizations/post-v1-integrated/PostV1IntegratedExperience.test.tsx
~~~

Primera ejecución:

~~~text
PostV1IntegratedExperience
→ 14/14 PASS

App.kgv
→ 5 PASS / 2 FAIL

App.hpi
→ 7 PASS / 1 FAIL

App
→ 19 PASS / 9 FAIL
~~~

Los 12 fallos se detienen en selectores que todavía buscan:

~~~text
/continuar con este trabajo/i
~~~

mientras la App ya presenta:

~~~text
Seguir trabajando

Usar este trabajo en integración post-V1

y, cuando existe R:

Usar este trabajo en integración post-V1
sustituyendo la trayectoria integrada anterior

Retomar trayectoria integrada existente
~~~

No se observa ninguna aserción material posterior fallida.

Se actualizan deliberadamente únicamente los contratos de presentación:

~~~text
App.hpi
→ continuidad ordinaria
→ “Seguir trabajando”

App.kgv
→ entrada especializada
→ “Usar este trabajo en integración post-V1”

App / T67
→ entrada Y → PostV1
→ “Usar este trabajo en integración post-V1”
~~~

Commits:

~~~text
5e32906
test(hpi): follow explicit ordinary continuation label

d689f90
test(kgv): follow explicit post-v1 integration label

b1b8275
test(app): update post-v1 entry contracts after continuity split
~~~

Regresión focal posterior:

~~~text
4/4 archivos PASS
57/57 tests PASS
~~~

Por tanto:

~~~text
patrimonio PostV1
→ CONSERVADO

elección Y/R
→ CONSERVADA

KGV
→ CONSERVADO

HPI
→ CONSERVADO

recuperación incompatible
→ CONSERVADA
~~~

---

# 53. Suite global e incidencia de concurrencia

Primera ejecución global:

~~~text
81 archivos

79 PASS
2 FAIL

585 tests

583 PASS
2 FAIL
~~~

Los dos fallos son timeouts de 5000 ms en:

~~~text
App.ce-miapp-scale.test.tsx
→ T-CE-MIAPP-02

App.knowledge-trajectory.reason-convergence.test.tsx
→ T-CSYS-DEC-01
~~~

Ambos archivos pasan aisladamente:

~~~text
ce-miapp-scale
→ 1/1 PASS

reason-convergence
→ 3/3 PASS
~~~

También pasan ejecutados conjuntamente:

~~~text
2/2 archivos PASS
4/4 tests PASS
~~~

Una segunda ejecución global reproduce sensibilidad bajo carga:

~~~text
T-CE-MIAPP-02
→ timeout

T-CSYS-DEC-01
→ timeout

T-CSYS-DEC-02
→ timeout

T-CSYS-DEC-03
→ aserción con texto intercalado/corrompido durante la ejecución
~~~

No se modifica producción ni se aumenta el timeout.

Se reduce reversiblemente la concurrencia de ejecución:

~~~text
npx vitest run --maxWorkers=2
~~~

Resultado:

~~~text
81/81 archivos PASS
585/585 tests PASS
~~~

Conclusión:

> Existe sensibilidad de la infraestructura de tests bajo el paralelismo global
> por defecto. No existe evidencia de una regresión funcional de
> R-CSYS-09-D. La contención a dos workers permite verificar toda la suite sin
> modificar contratos ni ampliar timeouts.

La incidencia de concurrencia queda separada del alcance funcional de
R-CSYS-09.

---

# 54. Typecheck global — condición preexistente separada

Se ejecuta:

~~~text
npm run typecheck
~~~

Resultado:

~~~text
29 errores
6 archivos
~~~

Distribución:

~~~text
src/App.tsx
→ 15

src/realizations/comparison/ComparisonProgress.test.tsx
→ 1

src/realizations/comparison/InlineDetectionExperience.test.tsx
→ 1

src/realizations/comparison/InlineDetectionExperience.tsx
→ 1

src/realizations/comparison/LateralComparisonExperience.test.tsx
→ 1

src/realizations/comparison/detectLiteralDifferences.ts
→ 10
~~~

Los errores de App se concentran en:

- asociación de procedencia IA;
- construcción de razón de decisión con indexación estricta.

La comparación entre el estado anterior a R-CSYS-09-D
(commit 209ca7c) y el estado actual demuestra que esos bloques ya existían con
la misma forma antes del commit productivo 38a7c25.

Los otros errores pertenecen a módulos de comparación no modificados por
R-CSYS-09-D.

Por tanto:

~~~text
typecheck global
→ RED

atribución a R-CSYS-09-D
→ NO DEMOSTRADA
→ evidencia directa de preexistencia

build
→ NO EJECUTADO
→ se mantiene la disciplina de no avanzar
  tras typecheck rojo
~~~

La deuda de TypeScript no se absorbe artificialmente en R-CSYS-09.

---

# 55. Evaluación técnica de CF-CSYS-09

Se reaplican las ocho condiciones.

~~~text
CF-CSYS-09-01 — Identidad del hilo
→ TÉCNICAMENTE SATISFECHA
→ T-HCONT-02

CF-CSYS-09-02 — Estado actual inequívoco
→ TÉCNICAMENTE SATISFECHA
→ A2 permanece como trabajo vigente
→ PostV1 se separa nominalmente

CF-CSYS-09-03 — Continuación explícita
→ TÉCNICAMENTE SATISFECHA
→ “Seguir trabajando”
→ no monta PostV1

CF-CSYS-09-04 — Conservación no destructiva
→ TÉCNICAMENTE SATISFECHA EN EL ALCANCE CONTRATADO
→ T-HCONT-02/05
→ regresión histórica verde

CF-CSYS-09-05 — Recuperación completa
→ TÉCNICAMENTE SATISFECHA
→ T-HCONT-03

CF-CSYS-09-06 — Separación de acciones
→ TÉCNICAMENTE SATISFECHA POR PRESENTACIÓN
→ continuar hilo
   ≠
   usar integración PostV1
   ≠
   retomar R

CF-CSYS-09-07 — Reanudación
→ TÉCNICAMENTE SATISFECHA
→ T-HCONT-03

CF-CSYS-09-08 — Compatibilidad con trayectoria
→ SATISFECHA EN REGRESIÓN
→ HCONT 8/8
→ focal histórica 57/57
→ global 585/585 con maxWorkers=2
~~~

Resultado técnico:

~~~text
CF-CSYS-09
→ 8/8 CONDICIONES TÉCNICAMENTE CUBIERTAS
~~~

Esto no basta para cerrar el criterio.

CF-CSYS-09 nació de una falsación humana observada y contiene condiciones de
reconocibilidad, orientación y distinción de acciones que no pueden darse por
cerradas únicamente por tests DOM.

---

# 56. HUMAN GATE de CF-CSYS-09

Se deriva una única validación humana de cierre.

Objetivo:

> comprobar si una persona, sin explicación sobre la implementación, reconoce
> ahora un mismo hilo ordinario y distingue espontáneamente entre continuar ese
> hilo y usar una integración especializada.

## 56.1 Escenario

Partir de una App limpia.

Constituir:

~~~text
A1
→ primera aportación

después
→ continuar el mismo trabajo

A2
→ segunda aportación
~~~

La persona debe poder responder desde la interfaz, sin explicación previa:

~~~text
1. ¿Qué trabajo está haciendo ahora?

2. ¿Dónde ve lo que había hecho antes?

3. ¿Qué acción elegiría para seguir trabajando sobre ese mismo hilo?

4. ¿Qué entiende que ocurriría si elige:
   “Usar este trabajo en integración post-V1”?

5. Si existe una trayectoria integrada anterior R:
   ¿distingue entre:
   → seguir el hilo ordinario,
   → usar el trabajo actual en PostV1,
   → retomar la trayectoria R?
~~~

Después:

~~~text
interrumpir / recargar
→ recuperar

comprobar:
→ reconoce A2 como estado actual
→ puede localizar A1
→ sabe cómo seguir sin reconstrucción manual
~~~

## 56.2 Condiciones humanas de cierre

~~~text
HG-CSYS-09-01
→ reconoce A1/A2 como mismo trabajo

HG-CSYS-09-02
→ identifica A2 como estado actual

HG-CSYS-09-03
→ “Seguir trabajando” significa espontáneamente
  continuar el mismo hilo

HG-CSYS-09-04
→ “Usar este trabajo en integración post-V1”
  se reconoce como acción distinta,
  no como continuación ordinaria obligatoria

HG-CSYS-09-05
→ con R previa distingue las tres rutas
  sin ensayo y error

HG-CSYS-09-06
→ tras recarga reconoce dónde quedó
  y cómo continuar
~~~

## 56.3 Regla de decisión

~~~text
A — CIERRE
→ HG-01…06 satisfechos
→ no reaparece falsador de CF-CSYS-09

B — FRICCIÓN RESIDUAL
→ hilo reconocible
→ continuidad posible
→ existe dificultad menor de texto/jerarquía
→ reducir antes de decidir si bloquea cierre

C — NO CIERRE
→ reaparece cualquiera de:
   pérdida aparente del hilo
   confusión continuar/PostV1
   incapacidad para recuperar
   necesidad de ensayo y error para seguir
~~~

No se modificará producción durante la observación.

---

# 57. Estado previo al HUMAN GATE

~~~text
R-CSYS-09-C
→ CERRADA
→ RED observado y reducido

R-CSYS-09-D
→ IMPLEMENTADA
→ T-CSYS-HCONT-01…08 = 8/8 PASS
→ regresión focal histórica = 57/57 PASS
→ suite global = 585/585 PASS con maxWorkers=2

incidencia de concurrencia
→ SEPARADA
→ no atribuida funcionalmente a R-CSYS-09-D

typecheck global
→ RED PREEXISTENTE
→ no absorbido en R-CSYS-09

CF-CSYS-09
→ TÉCNICAMENTE SATISFECHO
→ NO CERRADO

HUMAN GATE
→ SIGUIENTE ACTUACIÓN

producción
→ CONGELADA DURANTE OBSERVACIÓN
~~~

# 58. Punto de reanudación

> Ejecutar el HUMAN GATE de CF-CSYS-09 sobre la App real, sin explicación previa
> de la semántica de las nuevas acciones y sin modificar producción durante la
> observación.


# 59. HUMAN GATE de CF-CSYS-09 — ejecución real

Fecha: 23/11/2026.

La observación se ejecuta sobre la App real, sin cambios productivos durante el
recorrido y sin explicar previamente la semántica de las acciones nuevas.

## 59.1 Orientación inicial

Ante la página limpia, la persona reconoce:

~~~text
capacidad general
→ introducir textos

inicio de trabajo nuevo
→ caja posterior a “Introduce un texto libre”
→ acción “Crear”
~~~

Aparece desde el principio una ambigüedad:

~~~text
“Continuidad compartida”
“Antecedente compartido recibido”
~~~

La persona no puede determinar si:

- existe una caja para empezar y otra para continuar;
- “compartida” significa añadir lo creado a trabajos de otras personas;
- esas superficies forman parte de la continuidad ordinaria o de otra actuación.

No se explica todavía el significado de esos términos.

## 59.2 Primera aportación A1

Se crea una primera aportación.

La persona entiende que:

~~~text
A1
→ se ha creado correctamente
~~~

Sin embargo, ante la pregunta:

> ¿qué pulsarías espontáneamente para añadir una segunda aportación a ese mismo
> trabajo?

la elección espontánea no es “Seguir trabajando”.

La persona selecciona primero la sección de identidad autoral y propone:

~~~text
obra creada
→ seleccionar en Identidad autoral
→ introducir autor
→ Crear identidad autoral
~~~

Razones declaradas:

~~~text
Identidad autoral
→ aparece antes en la página
→ parece el siguiente paso lógico

Seguir trabajando
→ aparece con poca claridad
→ puede parecer relacionado con “Continuidad compartida”
~~~

Resultado:

~~~text
HG-CSYS-09-03
→ no satisfecho en descubribilidad espontánea
~~~

## 59.3 Ejercicio de “Seguir trabajando”

Sin introducir contenido previo ni tocar identidad autoral, se pulsa únicamente:

~~~text
Seguir trabajando
~~~

La persona interpreta después:

~~~text
efecto
→ se abre la posibilidad de introducir nuevos textos

lugar para A2
→ claro

relación con A1
→ sigue dentro del mismo trabajo
~~~

Por tanto:

~~~text
efecto funcional de “Seguir trabajando”
→ correcto

comprensión después de ejercerlo
→ correcta

descubribilidad antes de ejercerlo
→ insuficiente
~~~

## 59.4 Segunda aportación A2

Se crea A2 mediante la continuación ordinaria.

La persona considera:

~~~text
trabajo actual
→ la aportación recién creada

A1
→ visible como “Aportación anterior”
~~~

Sobre la relación A1/A2 declara:

~~~text
para quien ya sabe lo ocurrido
→ ambas pertenecen al mismo trabajo

para una persona que lo viera sin conocerlo
→ no quedaría claro
~~~

La causa es que A1 y A2 aparecen tratadas en apartados distintos y como
aportaciones diferenciadas.

Resultado:

~~~text
HG-CSYS-09-01
→ NO SATISFECHO

causa
→ identidad del hilo no expresada suficientemente por la interfaz
~~~

## 59.5 Recuperación tras recarga

Tras recargar:

~~~text
A1
→ localizable

continuación
→ posible

persistencia
→ conservada
~~~

Pero la persona describe el trabajo actual principalmente como:

~~~text
introducir más texto en “Qué puedes hacer ahora”
~~~

y vuelve a señalar que:

~~~text
A1 / A2
→ continúan presentadas en apartados diferentes
→ la pertenencia a una misma obra/hilo sigue poco clara
~~~

Además:

~~~text
“Seguir trabajando”
→ puede inducir a pensar que hay que pulsarlo de nuevo
  para poder continuar
~~~

Resultado:

~~~text
HG-CSYS-09-06
→ PARCIAL

persistencia material
→ satisfecha

reconocibilidad del hilo tras recarga
→ insuficiente
~~~

## 59.6 Acción PostV1

Se localiza:

~~~text
Usar este trabajo en integración post-V1
~~~

Sin pulsarla, la persona declara:

~~~text
qué ocurriría
→ no lo sabe

diferencia respecto a “Seguir trabajando”
→ “Seguir trabajando” sí tiene significado ordinario
→ “integración post-V1” no

capacidad para decidir cuándo usarla
→ NO
~~~

La causa es directa:

~~~text
“post-V1”
→ vocabulario interno
→ no ofrece significado operativo a la persona
~~~

Resultado:

~~~text
HG-CSYS-09-04
→ NO SATISFECHO
~~~

No se ejerce HG-CSYS-09-05 porque el gate ya contiene falsadores suficientes
para decidir el no cierre.

---

# 60. Resultado del HUMAN GATE

Evaluación consolidada:

~~~text
HG-CSYS-09-01
→ NO SATISFECHO
→ A1/A2 no se presentan por sí mismas como partes de una misma obra/hilo

HG-CSYS-09-02
→ PARCIAL
→ el estado operativo actual es utilizable
→ pero no queda representado como unidad de trabajo suficientemente reconocible

HG-CSYS-09-03
→ PARCIAL
→ “Seguir trabajando” funciona correctamente
→ no se descubre espontáneamente como continuación principal

HG-CSYS-09-04
→ NO SATISFECHO
→ “integración post-V1” no tiene significado humano suficiente

HG-CSYS-09-05
→ NO EJERCITADO
→ no necesario para decidir el gate

HG-CSYS-09-06
→ PARCIAL
→ recuperación material correcta
→ identidad del hilo sigue poco clara tras recarga
~~~

Salida:

~~~text
HUMAN GATE de CF-CSYS-09
→ C — NO CIERRE
~~~

No se reabren los contratos técnicos satisfechos.

La falsación es humana y se concentra en representación/orientación.

---

# 61. Distinción de lo resuelto y lo pendiente

R-CSYS-09-D sí resolvió una diferencia real:

~~~text
antes
→ “Continuar con este trabajo”
→ sustituía la experiencia ordinaria por PostV1

ahora
→ “Seguir trabajando”
→ mantiene la continuidad ordinaria

resultado material
→ A1/A2 persisten
→ recuperación funciona
→ PostV1 no se monta al continuar ordinariamente
~~~

Por tanto, no debe revertirse la separación técnica conseguida.

La diferencia residual queda:

~~~text
continuidad material
→ SATISFECHA

continuidad operativa después de aprender el mecanismo
→ SATISFECHA

identidad perceptible del trabajo
→ NO SATISFECHA

descubribilidad inicial de la continuación
→ PARCIAL

vocabulario de acciones especializadas
→ NO SATISFECHO
~~~

---

# 62. Reducción inicial de la diferencia residual

Se identifican dos diferencias raíz.

## D1 — identidad del hilo

Hoy:

~~~text
A1
→ “Aportación anterior”

A2
→ aportación actual / nuevo trabajo

presentación
→ apartados distintos

consecuencia
→ la relación “ambas forman una misma obra/trabajo”
  depende del conocimiento previo de la persona
~~~

Diferencia humana:

> La interfaz conserva el hilo materialmente, pero no lo representa como una
> unidad perceptible suficientemente estable.

## D2 — vocabulario y jerarquía de acciones

Se observan tres interferencias:

~~~text
Identidad autoral
→ aparece antes
→ compite como supuesto siguiente paso

Continuidad compartida
→ proximidad/terminología
→ contamina la interpretación de “Seguir trabajando”

integración post-V1
→ expone vocabulario interno
→ no permite decidir cuándo usar la acción
~~~

Diferencia humana:

> Las actuaciones auxiliares y técnicas aparecen con una jerarquía comparable a
> la continuidad principal y con vocabulario que no expresa decisiones humanas
> reconocibles.

---

# 63. Hipótesis de reducción para R-CSYS-09-E

Se formula únicamente como hipótesis de trabajo, todavía sin producción:

~~~text
TRABAJO ACTUAL
→ unidad principal reconocible
→ contiene/relaciona lo ya aportado
→ muestra dónde está ahora el hilo
→ ofrece continuidad como acción principal

ACCIONES SOBRE EL TRABAJO
→ autoría
→ comparación
→ apoyo IA
→ conservar/publicar
→ compartir/relevar
→ integración especializada, si debe seguir expuesta
~~~

La hipótesis no obliga todavía a:

- rediseño visual general;
- fusionar modelos de datos;
- eliminar PostV1;
- eliminar identidad autoral;
- eliminar continuidad compartida;
- ocultar capacidades históricas sin inspección previa.

Sí obliga a reducir primero:

1. cómo representar A1/A2 como partes del mismo trabajo;
2. qué jerarquía debe tener la acción de continuidad;
3. qué términos internos deben traducirse, reagruparse o dejar de competir como
   decisiones primarias.

---

# 64. Decisión y siguiente actuación

~~~text
CF-CSYS-09
→ TÉCNICAMENTE CUBIERTO
→ HUMANAMENTE NO SATISFECHO
→ NO CERRADO

HUMAN GATE
→ SALIDA C

R-CSYS-09-D
→ CONSERVADA
→ no revertir separación ordinario/PostV1

R-CSYS-09-E
→ ABIERTA COMO REDUCCIÓN

producción
→ SIN CAMBIOS

siguiente actuación
→ reducir D1 y D2
→ inspeccionar estructura actual de App
→ derivar criterio humano mínimo
→ después contrato rojo
~~~

# 65. Punto de reanudación

> Ejecutar R-CSYS-09-E sin modificar producción: reducir la identidad perceptible
> del hilo y la jerarquía/vocabulario de acciones hasta una intervención mínima
> verificable.


# 66. R-CSYS-09-E — reducción de D1 y D2 contra la estructura real

Se inspecciona la estructura productiva antes de modificarla.

Hechos observados en `App.tsx`:

~~~text
Identidad autoral
→ aparece antes que ResumeExperience

ResumeExperience
→ contiene la continuidad ordinaria real

Continuidad compartida
→ aparece inmediatamente después de ResumeExperience

Seguir trabajando
→ aparece mucho más tarde en App

Usar este trabajo en integración post-V1
→ aparece junto a Seguir trabajando
→ al final del recorrido ordinario
~~~

La separación física actual explica conjuntamente la observación humana:

~~~text
Identidad autoral
→ puede parecer el siguiente paso lógico

Continuidad compartida
→ puede parecer vinculada a “Seguir trabajando”

Seguir trabajando
→ queda lejos de la propia superficie que continúa

post-V1
→ expone una denominación histórica/técnica
  sin significado operativo suficiente
~~~

También se inspecciona `ResumeExperience.tsx`.

La realización ya conserva materialmente:

~~~text
restoredPrevious
currentInput
result.previous
result.current
retainedPrevious
~~~

y persiste correctamente la transición:

~~~text
X
→ Y
→ Y pasa a ser previous en la siguiente ejecución
→ X permanece retenido
~~~

Por tanto, D1 no exige nuevo modelo de datos.

---

# 67. Reducción de D1 — identidad perceptible del hilo

## 67.1 Diferencia exacta

Hoy la interfaz expresa:

~~~text
Aportación anterior
[ A1 ]

Qué has hecho ahora
[ A2 ]
~~~

o, tras recarga:

~~~text
Aportación anterior
[ A2 ]

Otra aportación disponible
[ A1 ]

Qué puedes hacer ahora
[ input ]
~~~

La relación material existe, pero la presentación no afirma suficientemente:

~~~text
A1
+
A2
→ partes de un mismo trabajo
~~~

## 67.2 Intervención mínima candidata

No se añade persistencia, relación ni entidad nueva.

Se introduce únicamente una unidad semántica de presentación:

~~~text
TRABAJO ACTUAL
→ agrupa la continuidad ordinaria ya existente

dentro:
→ aportación anterior de este trabajo
→ aportación más reciente / actual de este trabajo
→ nueva aportación a este trabajo
~~~

La formulación exacta puede variar, pero debe quedar congelada esta semántica:

> Las aportaciones no son piezas sueltas que casualmente aparecen juntas; la
> interfaz debe presentarlas explícitamente como partes del mismo trabajo.

No se exige:

- concatenar físicamente los textos;
- convertir A1+A2 en un documento único;
- crear un nuevo identificador de obra;
- modificar `ordinary.materials`;
- modificar `KnowledgeTrajectory`;
- mostrar toda la historia completa del trabajo.

Para el alcance de CF-CSYS-09 basta con que el antecedente, el estado actual y
la acción de continuar queden bajo una misma unidad reconocible.

---

# 68. Reducción de D2 — jerarquía y vocabulario de acciones

## 68.1 Diferencia exacta

La observación humana no cuestiona que existan:

- identidad autoral;
- continuidad compartida;
- PostV1;
- trayectoria integrada previa.

Cuestiona que esas capacidades compitan perceptivamente con la continuación
principal.

La diferencia se reduce a:

~~~text
acción principal
→ debe estar junto al trabajo que continúa

acciones auxiliares
→ deben presentarse como opcionales sobre ese trabajo

lenguaje interno
→ no debe ser requisito para decidir qué acción humana ejercer
~~~

## 68.2 “Seguir trabajando”

La intervención mínima candidata es mover/presentar:

~~~text
Seguir trabajando
~~~

inmediatamente junto a la unidad:

~~~text
Trabajo actual
~~~

y antes de las actuaciones auxiliares.

No cambia su handler:

~~~text
setResumeExperienceKey(key => key + 1)
~~~

No cambia persistencia ni transición.

## 68.3 Integración PostV1

La semántica histórica se conserva, pero la etiqueta ordinaria no debe exigir
conocer el término `post-V1`.

La acción puede expresarse humanamente como una actuación opcional del tipo:

~~~text
Abrir opciones para conservar, publicar o compartir este trabajo
~~~

Esta formulación no afirma que esas operaciones ocurran al pulsar; afirma que se
abre la superficie donde esas opciones existen.

Semántica interna preservada:

~~~text
handler
→ integrationChoice = "current"

si existe R previa y se elige Y
→ conserva comportamiento histórico T67

PostV1IntegratedExperience
→ sin cambios
~~~

El identificador interno `post-v1` puede seguir existiendo en código, tests de
modelo y persistencia. Lo que se elimina de la decisión ordinaria es la
obligación de entenderlo.

## 68.4 Trayectoria integrada previa

Si existe R previa, la segunda alternativa debe seguir disponible.

La presentación humana mínima candidata es equivalente a:

~~~text
Retomar opciones anteriores de conservación, publicación y colaboración
~~~

No se modifica la semántica histórica de “retomar R”.

La formulación final deberá probarse contra T67 antes de producción.

## 68.5 Continuidad compartida

La observación demuestra que:

~~~text
Continuidad compartida
Antecedente compartido recibido
~~~

no permiten inferir con seguridad si:

- se continúa el propio trabajo;
- se recibe trabajo de otra persona;
- se mezcla automáticamente lo creado por varios usuarios.

La funcionalidad real es más estrecha:

~~~text
recibir un antecedente transferido
→ continuar desde ese antecedente
~~~

Por tanto, la presentación mínima debe expresar esa función humana, por ejemplo:

~~~text
Continuar un trabajo recibido de otra persona
~~~

y acompañarla de una indicación equivalente a:

~~~text
Usa esta opción sólo si otra persona te ha enviado un antecedente para continuar.
~~~

No se modifica:

- JSON recibido;
- validación;
- contribución de B;
- KGV;
- relevo;
- persistencia.

---

# 69. Estructura mínima resultante

La reducción no deriva una reorganización completa de App.

Sólo exige esta jerarquía local:

~~~text
TRABAJO ACTUAL
├─ aportación/antecedente del mismo trabajo
├─ estado o aportación actual
├─ nueva aportación a este trabajo
└─ Seguir trabajando

OTRAS ACCIONES SOBRE ESTE TRABAJO
├─ autoría
├─ comparación
├─ apoyo IA
├─ conservar / publicar / compartir
└─ continuar un trabajo recibido de otra persona
~~~

No se exige que todas las capacidades auxiliares se muevan físicamente en una
sola actuación.

Para cerrar D1/D2 basta con:

1. que la continuidad ordinaria forme una unidad perceptible;
2. que `Seguir trabajando` quede inequívocamente asociado a esa unidad;
3. que la entrada PostV1 deje de exponer vocabulario interno;
4. que la continuidad compartida explique que se trata de recibir un trabajo
   ajeno/transferido, no de continuar el propio hilo ordinario.

La reubicación completa de identidad autoral u otras herramientas sólo se
derivará si el HUMAN GATE posterior demuestra que siguen compitiendo tras esta
reducción.

---

# 70. Contrato rojo mínimo derivado

Antes de producción debe crearse un contrato nuevo, separado del contrato
material HCONT ya verde.

Nombre propuesto:

~~~text
src/App.human-thread-presentation.test.tsx
~~~

Condiciones:

~~~text
T-CSYS-HPRES-01
→ con A1 → A2,
  existe una región reconocible como “Trabajo actual”
  que contiene ambas aportaciones como partes del mismo trabajo

T-CSYS-HPRES-02
→ tras remount,
  el trabajo actual sigue agrupando
  la aportación vigente,
  el antecedente conservado
  y la posibilidad de nueva aportación

T-CSYS-HPRES-03
→ “Seguir trabajando”
  está asociado a la unidad “Trabajo actual”
  y aparece antes de las acciones auxiliares de continuidad compartida

T-CSYS-HPRES-04
→ la vista ordinaria no exige comprender el término “post-V1”
  para abrir la superficie de conservar/publicar/compartir

T-CSYS-HPRES-05
→ con R previa,
  siguen existiendo dos decisiones distintas:
  usar el trabajo actual en la superficie especializada
  y retomar la trayectoria previa,
  sin modificar Y ni R antes de elegir

T-CSYS-HPRES-06
→ la recepción colaborativa se presenta como
  continuación desde un trabajo/antecedente recibido de otra persona,
  diferenciada de continuar el propio trabajo

T-CSYS-HPRES-07
→ los contratos materiales T-CSYS-HCONT-01…08
  siguen íntegros
~~~

Criterio de RED válido:

> Deben fallar únicamente condiciones de agrupación, jerarquía o vocabulario.
> Si aparece pérdida material de A1/A2, PostV1, KGV, T67 o persistencia, la
> reducción sería incorrecta y habría que detener la intervención.

---

# 71. Decisión de R-CSYS-09-E

La evidencia permite reducir D1 y D2 sin nuevo modelo ni rediseño general.

~~~text
D1
→ se reduce a PRESENTACIÓN DE UNIDAD
→ “Trabajo actual” como contenedor semántico
→ A1/A2 explícitamente pertenecen al mismo hilo

D2
→ se reduce a JERARQUÍA + TRADUCCIÓN
→ continuidad principal junto al trabajo
→ acciones auxiliares separadas
→ vocabulario interno PostV1 no expuesto como decisión humana
→ continuidad compartida explicada como recepción de antecedente ajeno
~~~

Intervención mínima candidata:

~~~text
producción
→ TODAVÍA SIN CAMBIOS

datos
→ SIN CAMBIOS

persistencia
→ SIN CAMBIOS

KnowledgeTrajectory
→ SIN CAMBIOS

PostV1IntegratedExperience
→ SIN CAMBIOS

KGV / T67
→ PATRIMONIO A PROTEGER
~~~

Siguiente actuación derivada:

~~~text
R-CSYS-09-F
→ crear únicamente T-CSYS-HPRES-01…07
→ ejecutar RED real
→ confirmar qué parte de D1/D2 falta materialmente
→ sólo después modificar producción
~~~

# 72. Punto de reanudación

> Crear el contrato rojo de presentación humana T-CSYS-HPRES-01…07 sin
> modificar producción.


---

# 73. R-CSYS-09-F — contrato rojo de presentación humana

Se crea antes de producción:

~~~text
src/App.human-thread-presentation.test.tsx
~~~

Contrato:

~~~text
T-CSYS-HPRES-01…07
~~~

RED observado:

~~~text
7 tests
→ 1 PASS
→ 6 FAIL

FAIL
→ HPRES-01
→ HPRES-02
→ HPRES-03
→ HPRES-04
→ HPRES-05
→ HPRES-06

PASS
→ HPRES-07
~~~

Interpretación:

~~~text
HPRES-01/02
→ D1
→ falta una unidad perceptible “Trabajo actual”

HPRES-03/04/05/06
→ D2
→ jerarquía y vocabulario todavía técnicos o ambiguos

HPRES-07
→ continuidad material A1 → A2 intacta
→ no se fuerza entrada en superficie especializada
~~~

El RED es válido porque no aparece pérdida de datos, rotura de persistencia,
KnowledgeTrajectory, KGV, PostV1 ni elección Y/R.

Commit del contrato:

~~~text
ab4d069
→ test(app): add red human thread presentation contract
~~~

Conclusión:

~~~text
R-CSYS-09-F
→ CERRADA

D1/D2
→ confirmadas como diferencias de presentación
→ sin tercera causa raíz material
~~~

---

# 74. R-CSYS-09-G — intervención mínima de presentación

Se modifica únicamente la presentación de App.

Cambio productivo:

~~~text
Trabajo actual
→ nueva región accesible
→ agrupa ResumeExperience
→ declara que las aportaciones mostradas pertenecen al mismo trabajo

Seguir trabajando
→ queda dentro de Trabajo actual

Continuidad compartida
→ “Continuar un trabajo recibido de otra persona”

Antecedente compartido recibido
→ “Antecedente recibido de otra persona”

Recibir antecedente compartido
→ “Recibir antecedente para continuar”

entrada PostV1
→ “Abrir opciones para conservar, publicar o compartir este trabajo”

retomar R
→ “Retomar opciones anteriores de conservación, publicación y colaboración”
~~~

No se modifica:

- handlers;
- persistencia;
- `ordinary.materials`;
- `KnowledgeTrajectory`;
- KGV;
- semántica Y/R;
- `PostV1IntegratedExperience`.

Commit productivo:

~~~text
a11981e
→ fix(app): present ordinary work as one human-readable thread
~~~

---

# 75. GREEN focal de HPRES

Primera ejecución tras producción:

~~~text
7 tests
→ 6 PASS
→ 1 FAIL
~~~

El único fallo era del harness en HPRES-06:

~~~text
getByText(...)
→ encontraba tres coincidencias válidas
→ h2 + explicación + label
~~~

La producción ya expresaba correctamente la recepción desde otra persona.

Se corrige únicamente el test para exigir la explicación inequívoca dentro de
la región recibida.

Commit:

~~~text
fbe005e
→ test(app): fix received-work presentation assertion
~~~

Resultado:

~~~text
App.human-thread-presentation.test.tsx
→ 1/1 archivo PASS
→ 7/7 tests PASS
~~~

Por tanto:

~~~text
D1
→ técnicamente satisfecha

D2
→ técnicamente satisfecha

continuidad material
→ preservada
~~~

---

# 76. Regresión histórica focal

Se ejecuta inicialmente:

~~~text
App.human-continuity
App.hpi
App.kgv
App
PostV1IntegratedExperience
~~~

Primer resultado:

~~~text
5 archivos
→ 2 PASS
→ 3 FAIL

65 tests
→ 44 PASS
→ 21 FAIL
~~~

Los fallos se detienen en selectores históricos de etiquetas modificadas, no en
aserciones materiales posteriores.

Se actualizan únicamente selectores en:

~~~text
App.human-continuity.test.tsx
→ d7b2fd9

App.kgv.test.tsx
→ eaa64b8

App.test.tsx
→ 4286326
~~~

Queda un selector histórico adicional en HCONT-06:

~~~text
“Retomar trayectoria integrada existente”
~~~

Se actualiza sin tocar producción:

~~~text
8414e70
→ test(app): update final continuity selector after presentation change
~~~

Resultado final:

~~~text
5/5 archivos PASS
65/65 tests PASS
~~~

Conclusión:

~~~text
patrimonio focal HCONT/HPI/KGV/T67/PostV1
→ CONSERVADO
~~~

---

# 77. Regresión global y selectores de convergencia

Primera suite global posterior:

~~~text
npx vitest run --maxWorkers=2

82 archivos
→ 79 PASS
→ 3 FAIL

592 tests
→ 587 PASS
→ 5 FAIL
~~~

Se identifican dos categorías distintas.

## 77.1 Selectores históricos de continuidad recibida

`handoff-convergence` y `system-e2e` siguen buscando:

~~~text
Continuidad compartida
Antecedente compartido recibido
Recibir antecedente compartido
~~~

Se actualizan sólo esos selectores:

~~~text
7de9d11
→ App.knowledge-trajectory.handoff-convergence.test.tsx

642f9b0
→ App.knowledge-trajectory.system-e2e.test.tsx
~~~

Validación aislada:

~~~text
2/2 archivos PASS
5/5 tests PASS
~~~

No aparece regresión funcional en relevo ni E2E.

## 77.2 Incidencia de concurrencia en reason-convergence

En la suite global con `--maxWorkers=2` reaparece:

~~~text
T-CSYS-DEC-01
→ timeout 5000 ms

T-CSYS-DEC-02
→ texto intercalado/corrompido
→ esperado:
  “Elegir una alternativa que conserve procedencia y permita continuar”
→ recibido:
  cadena con caracteres intercalados/desordenados
~~~

El archivo aislado:

~~~text
npx vitest run src/App.knowledge-trajectory.reason-convergence.test.tsx
→ 1/1 archivo PASS
→ 3/3 tests PASS
~~~

No se modifica timeout ni producción.

Se serializa completamente la suite:

~~~text
npx vitest run --maxWorkers=1
→ 82/82 archivos PASS
→ 592/592 tests PASS
~~~

Conclusión fundada:

~~~text
incidencia
→ sensibilidad del harness global a carga/concurrencia

regresión funcional atribuible a R-CSYS-09-G
→ NO DEMOSTRADA

aumentar testTimeout
→ NO JUSTIFICADO

modificar producción por esta incidencia
→ NO JUSTIFICADO
~~~

La contención reproducible para validación global queda:

~~~text
--maxWorkers=1
~~~

hasta que exista una actuación específica destinada a investigar la
infraestructura de tests.

---

# 78. Estado técnico resultante de R-CSYS-09-G

~~~text
R-CSYS-09-F
→ CERRADA
→ RED válido observado

R-CSYS-09-G
→ IMPLEMENTADA
→ GREEN focal 7/7
→ regresión focal 65/65
→ handoff + E2E 5/5
→ reason-convergence aislado 3/3
→ suite global serializada 592/592

D1
→ SATISFECHA TÉCNICAMENTE

D2
→ SATISFECHA TÉCNICAMENTE

CF-CSYS-09
→ NO CERRADO TODAVÍA
→ nació de falsación humana
→ requiere nueva observación humana
~~~

No queda fundamento para nueva modificación productiva antes del gate.

---

# 79. Siguiente actuación

~~~text
HUMAN GATE de CF-CSYS-09
→ repetir observación humana sobre la App modificada
→ sin explicar previamente el significado de las nuevas etiquetas
→ comprobar si D1/D2 quedan realmente resueltas
~~~

Condiciones mínimas a observar:

1. reconocimiento espontáneo de `Trabajo actual` como una sola obra/hilo;
2. identificación de aportación anterior y actual como partes de ese mismo
   trabajo;
3. reconocimiento espontáneo de `Seguir trabajando` como continuación
   principal;
4. comprensión suficiente de la acción para conservar/publicar/compartir sin
   conocer `post-V1`;
5. comprensión de “trabajo recibido de otra persona” como ruta distinta;
6. reanudación tras recarga sin ensayo/error ni pérdida de identidad.

Producción queda congelada hasta ese resultado.

# 80. Punto de reanudación

> Ejecutar el HUMAN GATE posterior a R-CSYS-09-G. No introducir nuevas
> modificaciones productivas antes de observar si la persona reconoce ahora el
> hilo ordinario y distingue las acciones auxiliares.


---

# 81. R-CSYS-09-H — reducción de D3 y D4

Se analiza el HUMAN GATE posterior a R-CSYS-09-G sin modificar producción.

La continuidad principal queda humanamente reconocida:

~~~text
Trabajo actual
→ reconocido como un único hilo

Aportación anterior + Aportación actual
→ reconocidas como partes del mismo trabajo

Seguir trabajando
→ reconocido como continuidad ordinaria

recarga
→ permite reconocer dónde quedó el trabajo
→ permite continuar desde Aportación actual
~~~

La salida del gate es B por dos fricciones residuales:

~~~text
D3
→ referente de “este trabajo”

D4
→ alcance de “Materiales anteriores”
~~~

---

# 82. D3 — referente de la acción especializada

## 82.1 Evidencia humana

La acción:

~~~text
Abrir opciones para conservar, publicar o compartir este trabajo
~~~

se interpreta como posiblemente referida a:

~~~text
un trabajo recibido de otra persona
~~~

y no inequívocamente al:

~~~text
Trabajo actual
~~~

La causa no es ya vocabulario técnico.

La expresión es comprensible, pero su referente visual/semántico es ambiguo.

## 82.2 Evidencia de implementación

La acción productiva sigue operando sobre:

~~~text
availablePostV1Current
→ trabajo ordinario actual
~~~

y conserva el handler histórico:

~~~text
integrationChoice = "current"
~~~

No opera sobre el antecedente recibido.

Por tanto:

~~~text
semántica material
→ correcta

presentación del referente
→ ambigua
~~~

## 82.3 Relación con CF-CSYS-09

D3 pertenece directamente a:

~~~text
CF-CSYS-09-06 — Separación de acciones
~~~

porque la persona debe distinguir sin ensayo/error:

~~~text
continuar trabajo propio
conservar/publicar/compartir trabajo propio
continuar trabajo recibido de otra persona
~~~

También roza CF-CSYS-09-02, porque la acción sobre el trabajo actual debe mantener
inequívoco qué trabajo es el referente.

Decisión:

~~~text
D3
→ DENTRO DE CF-CSYS-09
→ BLOQUEO RESIDUAL DE CIERRE
~~~

---

# 83. Reducción mínima de D3

La diferencia no exige cambiar comportamiento.

La intervención mínima futura debe satisfacer:

~~~text
la acción de conservar/publicar/compartir
→ queda visual o semánticamente anclada a “Trabajo actual”

la ruta recibida
→ sigue separada

handlers
→ sin cambios

Y/R
→ sin cambios

PostV1 interno
→ sin cambios
~~~

La hipótesis mínima preferida es presentar la acción especializada:

~~~text
dentro de Trabajo actual
o
bajo un bloque inequívoco:
“Otras acciones sobre este trabajo actual”
~~~

No se deriva todavía cuál de las dos formas debe implementarse.

Lo que sí queda fijado es el contrato semántico:

> La persona no debe poder atribuir razonablemente la acción de
> conservar/publicar/compartir al trabajo recibido inmediatamente anterior.

---

# 84. Contrato rojo mínimo derivado para D3

Antes de cualquier nueva modificación productiva debe existir un contrato
separado.

Nombre propuesto:

~~~text
src/App.current-work-action-reference.test.tsx
~~~

Condiciones:

~~~text
T-CSYS-ACTREF-01
→ la acción de abrir conservar/publicar/compartir
  pertenece semánticamente a la región “Trabajo actual”

T-CSYS-ACTREF-02
→ la región de trabajo recibido de otra persona
  no contiene esa acción

T-CSYS-ACTREF-03
→ “Seguir trabajando”
  y conservar/publicar/compartir
  permanecen distinguibles como dos actuaciones sobre el trabajo actual

T-CSYS-ACTREF-04
→ la recepción/continuación de trabajo ajeno
  sigue siendo una ruta separada

T-CSYS-ACTREF-05
→ con R previa se preservan las dos decisiones Y/R
  sin modificar estado antes de elegir

T-CSYS-ACTREF-06
→ HPRES + HCONT siguen verdes
~~~

Criterio de RED válido:

~~~text
debe fallar únicamente el anclaje del referente

si aparece pérdida de continuidad,
cambio de handler,
rotura Y/R,
KGV,
persistencia
o KnowledgeTrajectory
→ detener la intervención
~~~

---

# 85. D4 — alcance de “Materiales anteriores”

## 85.1 Evidencia humana

La persona pregunta espontáneamente:

~~~text
qué materiales incluye
si son anteriores a los dos visibles
hasta qué profundidad retrocede
desde qué momento deja de poder recuperar
~~~

La duda persiste después de recargar.

## 85.2 Comportamiento real de App

La sección aparece cuando:

~~~text
ordinaryMaterials.length >= 2
~~~

y, al abrirse:

~~~text
ordinaryMaterials.map(...)
→ hace inspeccionables todos los materiales ordinarios conservados
  en ese almacenamiento local
~~~

La selección permite:

~~~text
Usar este material
→ Nuevo trabajo
→ Continuar con este material
~~~

La interfaz no declara:

- cardinalidad total antes de abrir;
- límite temporal;
- profundidad histórica;
- si la pluralidad corresponde sólo al hilo actual;
- alcance de almacenamiento local.

## 85.3 Contrato histórico de localización

La capacidad “Materiales anteriores” procede de la Realization de localización
selectiva posterior.

Su obligación histórica era:

~~~text
pluralidad pequeña no trivial
→ previamente conservada
→ no inmediatamente visible
→ volverla inspeccionable
→ selección humana
→ reactivación
~~~

Expresamente quedaron fuera:

~~~text
escala arbitraria
historial universal
búsqueda general
organización general
~~~

Por tanto, el contrato histórico no prometía una profundidad indefinida ni una
teoría general de historial.

## 85.4 Relación con CF-CSYS-09

CF-CSYS-09-05 exige:

~~~text
tras interrupción y recuperación,
las aportaciones ya constituidas del mismo hilo
siguen visibles o accesibles como partes del mismo hilo
~~~

El HUMAN GATE actual confirmó:

~~~text
trabajo en curso
→ reconocido tras recarga

lugar de continuación
→ reconocido

aportaciones del mismo trabajo
→ reconocidas
~~~

La duda sobre “Materiales anteriores” no demuestra:

- pérdida de A1/A2;
- imposibilidad de recuperar el hilo actual;
- pérdida de identidad del trabajo;
- necesidad de reintroducir contenido.

Por tanto:

~~~text
D4
→ NO pertenece al núcleo de CF-CSYS-09
→ NO debe bloquear su cierre por sí sola
~~~

---

# 86. Reclasificación de D4

D4 se separa como diferencia propia de:

~~~text
localización / orientación histórica
~~~

Formulación:

> La interfaz ofrece una pluralidad denominada “Materiales anteriores”, pero no
> permite conocer de antemano qué universo cubre, qué relación mantiene con el
> trabajo actual ni cuál es el alcance efectivo de la recuperación disponible.

Identificador provisional:

~~~text
D-LOC-01
— alcance perceptible de materiales anteriores
~~~

D-LOC-01 debe tratarse contra los contratos de localización selectiva/HPI, no
mediante ampliación retrospectiva de CF-CSYS-09.

No se deriva todavía:

- historial universal;
- profundidad ilimitada;
- búsqueda general;
- nuevo backend;
- nueva persistencia;
- navegación temporal completa.

Primero deberá decidirse qué información mínima necesita una persona para
comprender el alcance real de la pluralidad ya disponible.

---

# 87. Resultado de R-CSYS-09-H

~~~text
D1
→ CERRADA HUMANAMENTE

D2
→ CERRADA EN SU NÚCLEO PRINCIPAL

D3
→ DENTRO DE CF-CSYS-09
→ REDUCIDA A ANCLAJE DEL REFERENTE
→ pendiente contrato rojo

D4
→ SEPARADA DE CF-CSYS-09
→ reclasificada como D-LOC-01
→ diferencia de localización/orientación histórica
→ no bloquea por sí sola CF-CSYS-09

producción
→ SIN CAMBIOS
~~~

La consecuencia metodológica es importante:

~~~text
CF-CSYS-09
→ queda bloqueado únicamente por D3

D-LOC-01
→ permanece abierto
→ pero debe evaluarse en su propio marco
~~~

---

# 88. Siguiente actuación

~~~text
R-CSYS-09-I
→ crear únicamente T-CSYS-ACTREF-01…06
→ observar RED real
→ no modificar producción todavía
~~~

Después:

~~~text
si RED confirma sólo anclaje
→ intervención mínima de presentación
→ regresión focal
→ HUMAN GATE breve de referente

si aparece fallo material
→ detener y reabrir reducción
~~~

En paralelo:

~~~text
D-LOC-01
→ NO intervenir todavía
→ conservar como diferencia separada
→ evaluar después contra localización selectiva/HPI
~~~

# 89. Punto de reanudación

> Crear el contrato rojo T-CSYS-ACTREF-01…06 para D3. No modificar producción.
> D-LOC-01 queda separado y no debe mezclarse con el cierre de CF-CSYS-09.


---

# 90. R-CSYS-09-I — contrato rojo ACTREF y RED aislado

Se crea exclusivamente:

~~~text
src/App.action-reference.test.tsx
→ T-CSYS-ACTREF-01…06
~~~

sin modificar producción.

Resultado focal observado:

~~~text
T-CSYS-ACTREF-01
→ FAIL

T-CSYS-ACTREF-02…06
→ PASS

total
→ 1 FAIL / 5 PASS
~~~

El fallo de T-CSYS-ACTREF-01 es exactamente:

~~~text
la acción:
“Abrir opciones para conservar, publicar o compartir este trabajo”

→ no aparece dentro de la región accesible:
“Trabajo actual”
~~~

La regresión histórica exigida por el contrato se ejecuta sobre:

~~~text
src/App.human-thread-presentation.test.tsx
src/App.human-continuity.test.tsx
~~~

Resultado:

~~~text
2/2 archivos PASS
15/15 tests PASS
~~~

Por tanto:

~~~text
R-CSYS-09-I
→ CERRADA

RED
→ VÁLIDO Y AISLADO

D3
→ reproducida técnicamente
→ único falsador: anclaje del referente

producción
→ SIN CAMBIOS
~~~

---

# 91. R-CSYS-09-J — intervención mínima de anclaje

Se modifica únicamente la posición estructural de la acción especializada:

~~~text
“Abrir opciones para conservar, publicar o compartir este trabajo”
~~~

La acción pasa a quedar dentro de:

~~~text
Trabajo actual
~~~

Se conserva literalmente:

~~~text
texto
handler
hasPersistedPostV1
removeItem("post-v1-integrated.state")
setIntegrationChoice("current")
~~~

No se modifica:

- Y/R;
- PostV1IntegratedExperience;
- persistencia;
- KnowledgeTrajectory;
- modelo de datos;
- trabajo recibido;
- D-LOC-01.

Commit productivo:

~~~text
de269ef
fix(app): anchor specialized action to current work
~~~

Validación focal:

~~~text
ACTREF
→ 6/6 PASS
~~~

Regresión histórica:

~~~text
HPRES + HCONT
→ 15/15 PASS
~~~

Total focal de la intervención:

~~~text
21/21 PASS
~~~

Conclusión:

~~~text
R-CSYS-09-J
→ CERRADA TÉCNICAMENTE

D3
→ corregida técnicamente
→ pendiente contraste humano mínimo
~~~

---

# 92. R-CSYS-09-K — contraste humano mínimo post-corrección

No se modifica producción.

El contraste se limita a la fricción D3, sin reabrir D-LOC-01.

Respuestas humanas observadas:

~~~text
referente de:
“Abrir opciones para conservar, publicar o compartir este trabajo”
→ “al trabajo actual”

“Seguir trabajando”
vs
“Abrir opciones para conservar, publicar o compartir este trabajo”
→ “dos acciones distintas sobre el mismo trabajo”

“Continuar un trabajo recibido de otra persona”
→ “se ve claro que esa sección pertenece a otro recorrido distinto”
~~~

Por tanto:

~~~text
D3
→ CERRADA HUMANAMENTE

HG-CSYS-09-04
→ SATISFECHO

CF-CSYS-09-06
→ SATISFECHO HUMANAMENTE
~~~

La evidencia humana acumulada de R-CSYS-09 queda:

~~~text
HG-CSYS-09-01
→ SATISFECHO

HG-CSYS-09-02
→ SATISFECHO

HG-CSYS-09-03
→ SATISFECHO

HG-CSYS-09-04
→ SATISFECHO

HG-CSYS-09-05
→ SATISFECHO

HG-CSYS-09-06
→ SATISFECHO
~~~

No reaparece ningún falsador del criterio de continuidad humana reconocible.

---

# 93. Cierre de CF-CSYS-09

Se reevalúan sus ocho condiciones.

~~~text
CF-CSYS-09-01 — Identidad del hilo
→ SATISFECHA

CF-CSYS-09-02 — Estado actual inequívoco
→ SATISFECHA

CF-CSYS-09-03 — Continuación explícita
→ SATISFECHA

CF-CSYS-09-04 — Conservación no destructiva
→ SATISFECHA en el alcance validado

CF-CSYS-09-05 — Recuperación completa
→ SATISFECHA en el alcance comprometido

CF-CSYS-09-06 — Separación de acciones
→ SATISFECHA técnica y humanamente

CF-CSYS-09-07 — Reanudación
→ SATISFECHA

CF-CSYS-09-08 — Compatibilidad con trayectoria
→ SATISFECHA en regresión
~~~

Resultado:

~~~text
CF-CSYS-09
→ CERRADO
→ sin falsador conocido dentro de su alcance
~~~

D-LOC-01 permanece abierto, pero no pertenece al núcleo de CF-CSYS-09 y no se utiliza para ampliar retrospectivamente su contrato.

---

# 94. Reevaluación final de HITO-CONV-SYS-01

Se reconstruyen las obligaciones independientes del hito.

## 94.1 Convergencia material

~~~text
GAP-CONV-SYS-01
→ CERRADO

GAP-CONV-SYS-02
→ CERRADO

GAP-CONV-SYS-03
→ CERRADO

GAP-CONV-SYS-04
→ CERRADO
~~~

## 94.2 Escenario integrado

~~~text
R-CSYS-07
→ CERRADA

HITO-CONV-SYS-01
→ MATERIALMENTE DEMOSTRADO
~~~

El escenario E2E ya demostró en una única investigación ordinaria:

~~~text
fuentes
→ afirmaciones
→ transformación
→ apoyo IA
→ procedencia humana/IA
→ decisión/fundamento
→ persistencia
→ relevo P1 → P2
→ continuación
→ resultado posterior
→ revisión
→ reconstrucción de procedencia y razón
~~~

## 94.3 Validación humana

R-CSYS-08 produjo salida B y bloqueó el cierre exclusivamente por continuidad humana reconocible.

Esa diferencia se redujo a:

~~~text
CF-CSYS-09
~~~

y, tras R-CSYS-09-A…K:

~~~text
CF-CSYS-09
→ CERRADO
~~~

No queda otro criterio humano independiente abierto derivado de R-CSYS-08.

## 94.4 Diferencia separada

~~~text
D-LOC-01
→ ABIERTA
→ localización/orientación histórica
→ fuera de CF-CSYS-09
→ fuera del bloqueo de HITO-CONV-SYS-01
~~~

D-LOC-01 no demuestra:

- pérdida del hilo vigente;
- pérdida de las aportaciones constituidas;
- imposibilidad de continuar;
- ruptura de la trayectoria;
- fallo del escenario E2E.

Por tanto, no debe impedir el cierre del hito.

## 94.5 Decisión

~~~text
HITO-CONV-SYS-01
→ CERRADO

fundamento:
→ cuatro gaps materiales cerrados
→ escenario E2E completo demostrado
→ continuidad humana reconocible satisfecha
→ no queda criterio independiente del hito abierto

R-CSYS-09-K
→ CERRADA

CF-CSYS-09
→ CERRADO

D-LOC-01
→ permanece abierto por separado
~~~

No se deriva por este cierre:

- nuevo Product;
- nuevo horizonte;
- nueva Architecture.

---

# 95. Estado resultante y punto de reanudación

~~~text
HITO-CONV-SYS-01
→ CERRADO

R-CSYS-01…07
→ CERRADAS

R-CSYS-08
→ EJECUTADA
→ salida B ya reducida y resuelta por R-CSYS-09

R-CSYS-09
→ CERRADA EN SU ALCANCE

CF-CSYS-09
→ CERRADO

D-LOC-01
→ ABIERTO
→ diferencia independiente de localización/orientación histórica
~~~

Punto de reanudación:

> Con HITO-CONV-SYS-01 cerrado, no abrir automáticamente una nueva intervención productiva. Reevaluar el mapa global y decidir por separado si D-LOC-01 merece prioridad propia o si existe una obligación posterior más fuerte derivada del horizonte vigente.
