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
