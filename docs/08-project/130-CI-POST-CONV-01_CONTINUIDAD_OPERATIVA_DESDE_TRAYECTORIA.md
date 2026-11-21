# 130 — CI-POST-CONV-01 / Candidata de continuidad operativa desde trayectoria integrada

**Fecha:** 21/11/2026  
**Estado:** ABIERTA — candidata reducida; incertidumbre decisional concreta identificada; pendiente de comprobación mínima.  
**Precedentes:** [128](128-R-CONV-FINAL-05_VALIDACION_FORMAL_Y_CIERRE_H_CONV_FINAL_01.md), [129](129-REAPLICACION_MANUAL17_POST_H_CONV_FINAL_01_ESTABILIDAD_ESTRATEGICA.md).  
**Norma:** Manual 17 §13.1.2.

---

# 1. Identificación y procedencia — FC-01

Se registra:

> **CI-POST-CONV-01 — Continuidad operativa desde una trayectoria integrada ya constituida.**

Procede de confrontar la visión material perseguida con el resultado cerrado de H-CONV-FINAL-01.

Hecho de partida:

~~~text
KnowledgeTrajectory
→ representable
→ persistente
→ navegable
→ explicable
→ con procedencia humana/IA
~~~

Incertidumbre superviviente:

~~~text
¿esa misma trayectoria
puede actuar como contexto operativo
para producir un resultado posterior R2
sin perder procedencia ni razón?
~~~

---

# 2. Situación candidata — FC-02

Situación humana:

> Una persona retoma una investigación cuyo resultado actual R1 posee trayectoria explícita, procedencia y razón reconstruible. Necesita continuar trabajando desde ese estado —con o sin apoyo IA— y producir un resultado posterior R2 sin reconstruir externamente el contexto pertinente ni perder la relación de R2 con el estado intelectual que lo precede.

La situación no prescribe:

- grafo;
- ontología universal;
- modelo de base de datos;
- agentes autónomos;
- backend;
- interfaz concreta.

---

# 3. Diferencia humana — FC-03

La diferencia relevante no es “ver más información”.

Es:

~~~text
R1 con trayectoria
↓
retomar desde esa trayectoria
↓
realizar nueva actuación
↓
producir R2
↓
seguir pudiendo reconstruir
R1 → contexto → actuación → R2
~~~

Sin esta propiedad podría ocurrir:

~~~text
trayectoria de R1
→ inspeccionable

pero

continuación real
→ vuelve al mecanismo ordinario
→ sin utilizar la trayectoria como contexto efectivo
→ relación R1 → R2 no demostrada
~~~

---

# 4. Valor y alcance — FC-04

Valor potencial:

- evita reconstrucción externa del estado intelectual;
- permite que procedencia y razón ya conservadas participen en trabajo posterior;
- reduce el salto entre “explicar el pasado” y “continuar desde el pasado”;
- permite comprobar si la ayuda IA puede intervenir sin borrar la procedencia humana ni el fundamento del resultado anterior.

Alcance mínimo:

~~~text
una trayectoria persistida
+
un resultado actual R1
+
una actuación posterior
+
un nuevo resultado R2
+
relación reconstruible R1 → R2
~~~

No se exige generalidad universal.

---

# 5. Compatibilidad y perímetro — FC-05

La candidata es compatible con:

### C-PV-POST-01

El compromiso ya exige que el contexto provisional pertinente pueda preservarse para continuar una actividad intelectual sin reconstrucción desde cero.

### H-CONV-FINAL-01

El horizonte cerrado demostró representación, persistencia, navegación, procedencia y razón.

La candidata no refuta ese cierre porque H-CONV-FINAL-01 fue cerrado expresamente en su alcance definido.

La cuestión actual aparece en la frontera entre:

~~~text
trayectoria como objeto explicable
y
trayectoria como contexto operativo de continuación
~~~

No se deriva nuevo compromiso Product.

---

# 6. Novedad e independencia — FC-06

## 6.1 Respecto de H-CONV-FINAL-01

H-CONV-FINAL-01 demostró:

~~~text
R1
→ trayectoria visible
→ procedencia
→ razón
→ navegación
~~~

y CF-CONV-FINAL-05 se apoyó también en patrimonio previo H-POST/HPI para continuidad contextual suficiente.

No existe todavía evidencia directa de:

~~~text
KnowledgeTrajectory(R1)
↓
actuación posterior desde esa trayectoria
↓
R2
↓
trayectoria posterior reconstruible
~~~

Por tanto la pregunta no está absorbida completamente por el cierre.

## 6.2 Respecto de C-PV-POST-01

La necesidad humana general sí está absorbida por C-PV-POST-01.

La candidata no es Product nueva.

Clasificación:

~~~text
novedad Product
→ NO

diferencia realizativa/convergente
→ POSIBLE

independencia respecto del cierre
→ SUFICIENTE PARA COMPROBACIÓN
→ NO suficiente todavía para declarar gap
~~~

---

# 7. Hechos, inferencias e hipótesis — FC-07

## Hechos demostrados

1. KnowledgeTrajectory representa F/A/T/P/AC/R y elementos de razón.
2. La trayectoria se persiste asociada a (materialId,resultId).
3. App permite abrir procedencia y razón desde R1.
4. Existe procedencia humana/IA persistente.
5. App permite navegación prospectiva mínima desde F1 y PH1 hacia R1.
6. Los contratos específicos del horizonte permanecen verdes.

## Inferencia razonable

La estructura contiene información suficiente para constituir parte del contexto de una continuación posterior.

## No demostrado

1. que una actuación ordinaria posterior consuma esa trayectoria como contexto efectivo;
2. que produzca R2 vinculado explícitamente a R1;
3. que R2 conserve la procedencia humana/IA pertinente de la nueva actuación;
4. que desde R2 pueda reconstruirse qué heredó de R1 y qué añadió la nueva actuación;
5. que una persona pueda realizar el recorrido completo de forma practicable.

---

# 8. Discriminabilidad y falsación — FC-08

La candidata puede discriminarse con una trayectoria prospectiva mínima.

Caso:

~~~text
m1 / R1
→ trayectoria persistida
→ abrir R1
→ continuar desde R1
→ aportar E5 o nueva intervención
→ producir R2
→ interrumpir/remontar
→ abrir R2
~~~

Debe comprobarse si R2 permite reconstruir:

~~~text
antecedente
→ R1

contexto heredado pertinente
→ procedencia/razón de R1 sin reescribirla

nueva actuación
→ participante + acción + transformación

nuevo fundamento
→ evidencia/decisión pertinente para R2

resultado
→ R2
~~~

Falsación fuerte:

~~~text
R2 puede producirse
pero su relación con R1
depende de memoria externa,
texto duplicado manualmente
o reconstrucción ad hoc
~~~

En ese caso la candidata se fortalece como insuficiencia.

Reducción negativa:

~~~text
la App actual ya permite
producir R2 desde R1
y reconstruir la relación
sin mecanismo nuevo
~~~

En ese caso la candidata queda absorbida.

---

# 9. Relación con otras candidatas — FC-09

No se identifican por ahora candidatas independientes adicionales.

Los puntos inicialmente formulados se reducen así:

~~~text
modelo canónico
→ posible decisión de diseño
→ NO candidata humana independiente

validación humana
→ método de evidencia
→ NO capacidad Product independiente

procedencia sistemática
→ ya demostrada en alcance actual

razón reconstruible
→ ya demostrada en alcance actual

navegación
→ ya demostrada en alcance actual

continuación desde trayectoria
→ residuo decisional superviviente
~~~

Resultado:

~~~text
candidata raíz actual
→ 1
~~~

---

# 10. Aptitud técnica relevante — FC-10

No se presupone arquitectura.

La comprobación puede apoyarse en mecanismos existentes:

- KnowledgeTrajectory;
- repositorio asociado (materialId,resultId);
- App;
- trabajo ordinario;
- persistencia local;
- procedencia de participantes;
- razón estructurada.

No está demostrado que requiera:

- nuevo modelo canónico;
- backend;
- migración de datos;
- grafo general;
- nuevo motor de relaciones.

Por tanto:

~~~text
Architecture
→ NO DERIVADA

Implementation
→ NO DERIVADA

prueba prospectiva
→ técnicamente viable
~~~

---

# 11. Decisión estratégica que puede cambiar — FC-11

La comprobación puede cambiar una decisión material:

## Resultado A — absorbida

La App actual ya permite continuar operativamente desde R1 y producir R2 conservando la relación pertinente.

Consecuencia:

~~~text
CI-POST-CONV-01
→ ABSORBIDA

nuevo gap
→ NO

estado estratégico
→ ESTABLE
~~~

## Resultado B — insuficiencia realizativa concreta

R1 es explicable/navegable pero no puede participar suficientemente como contexto operativo de R2.

Consecuencia:

~~~text
CI-POST-CONV-01
→ candidata a GAP realizativo
→ reducir causa mínima
→ NO abrir horizonte automáticamente
~~~

## Resultado C — evidencia insuficiente

El caso no discrimina.

Consecuencia:

~~~text
→ reformular únicamente la comprobación
→ sin construcción
~~~

---

# 12. Estado de reducción — FC-12

Resultado actual:

~~~text
CI-POST-CONV-01
→ NO absorbida todavía
→ NO confirmada como gap
→ NO seleccionable como nuevo Product
→ APTA PARA PROFUNDIZACIÓN MÍNIMA
~~~

Existe una incertidumbre concreta capaz de cambiar la decisión:

> **¿Puede una trayectoria persistida de R1 actuar como contexto operativo suficiente para producir R2 conservando una relación reconstruible entre ambos resultados?**

Por tanto Manual 17 permite continuar localizadamente.

---

# 13. Actuación mínima derivada

Se deriva únicamente:

> **PROS-POST-CONV-01 — Prueba prospectiva de continuidad R1 → R2 desde trayectoria integrada.**

No se deriva producción.

Primera fase:

~~~text
contrato verificable
→ tests rojos
→ sin modificar producción
~~~

El contrato deberá exigir, como mínimo:

1. partir de m1/R1 con KnowledgeTrajectory persistida;
2. abrir R1 desde App ordinaria;
3. iniciar una continuación desde R1;
4. constituir una nueva aportación/actuación;
5. producir R2;
6. persistir la relación R2 ← R1;
7. remontar App;
8. abrir R2;
9. reconstruir R1 como antecedente;
10. distinguir contexto heredado de nueva actuación;
11. conservar procedencia de participantes pertinente;
12. no requerir edición manual de localStorage/JSON durante el recorrido de producto.

La prueba no debe prescribir todavía cómo se implementa.

---

# 14. Validación humana

La validación humana no se confunde con la capacidad.

Orden correcto:

~~~text
primero
→ demostrar materialmente R1 → R2

después
→ ejercer el recorrido con una persona
→ sobre la misma baseline

validar
→ orientación
→ continuidad
→ ausencia de reconstrucción material
→ comprensión de procedencia y razón
~~~

No se reabre BS-CE-MIAPP-01: si llega a justificarse observación humana, deberá usar nueva baseline y criterio propio.

---

# 15. Criterio de cierre de PROS-POST-CONV-01

La prueba puede cerrarse cuando permita decidir inequívocamente entre:

~~~text
A — ABSORBIDA
→ continuidad R1 → R2 ya practicable

B — INSUFICIENCIA CONCRETA
→ la trayectoria no puede actuar
  como contexto operativo suficiente

C — NO DISCRIMINANTE
→ mejorar prueba
~~~

No se permite derivar un nuevo horizonte a partir del mero RED.

---

# 16. Estado resultante

~~~text
estado estratégico estable previo
→ INTERRUMPIDO SÓLO POR COMPROBACIÓN LOCALIZADA

CI-POST-CONV-01
→ APTA PARA PROFUNDIZACIÓN

PROS-POST-CONV-01
→ DERIVADA

fase siguiente
→ contrato rojo

nuevo Product
→ NO

nuevo horizonte
→ NO

Architecture
→ NO

Implementation
→ NO
~~~

# 17. Punto de reanudación

> Formular el contrato rojo mínimo de PROS-POST-CONV-01 sin tocar producción, de modo que la única pregunta sea si una trayectoria persistida de R1 puede convertirse en contexto operativo para producir y reconstruir R2.
