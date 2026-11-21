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
