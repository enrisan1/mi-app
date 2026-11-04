# Estudio de PROV-O y reconstrucción de trayectoria

## Estado

**FASE CONCEPTUAL DE L-EXT-01 CERRADA — P-PROV-01 DERIVADA**

## Fecha

04/11/2026

## Derivación

Este documento deriva de:

```text
43-PANORAMA_EXTERNO_PLATAFORMAS_ESTANDARES_E_IA.md
44-MATRIZ_COMPARATIVA_PANORAMA_EXTERNO_VS_PROYECTO.md
```

En 44 se obtuvo:

```text
GATE-EXT-01
→ SUPERADO SELECTIVAMENTE

L-EXT-01
→ PRIORIZADA
```

L-EXT-01 se define como:

> **Procedencia explícita y reconstrucción de trayectoria.**

---

# 1. Pregunta principal

> **¿Puede PROV-O representar suficientemente las trayectorias ya existentes en el proyecto y mejorar su reconstrucción sin introducir una complejidad desproporcionada o deformar conceptos propios?**

---

# 2. Naturaleza de la investigación

Esta investigación no presupone que PROV-O deba incorporarse al producto.

Tampoco pretende diseñar una arquitectura de procedencia.

Su finalidad es realizar una comparación limitada entre:

```text
trayectorias reales ya existentes
```

y:

```text
modelo de procedencia W3C PROV
```

para determinar:

```text
qué encaja
qué encaja parcialmente
qué no encaja
qué mejora
qué complica
qué deforma
```

---

# 3. Restricciones

Este estudio NO debe derivar automáticamente:

```text
RDF
OWL
triplestore
knowledge graph
base de datos
API
backend
MCP
nueva arquitectura
nueva capacidad
nuevo Product Value
P6
```

---

# 4. Principio de mínima adopción

La investigación parte de:

```text
PROV mínimo
antes que
PROV completo
```

La documentación de PROV-O distingue:

```text
Starting Point terms
Expanded terms
Qualified terms
```

y permite utilizar únicamente la parte necesaria para un caso de uso.

Por tanto:

> **ningún término ampliado se incorporará salvo que un caso concreto demuestre su necesidad.**

---

# 5. Hipótesis principal

Se establece:

```text
H-PROV-SUF
```

> **Un subconjunto reducido de PROV-O puede representar suficientemente la procedencia de las trayectorias ya ejercitadas sin sustituir la semántica propia del proyecto ni introducir una complejidad desproporcionada.**

---

# 6. Hipótesis alternativa

Se establece:

```text
H-PROV-GAP
```

> **La representación mediante PROV-O exige deformar conceptos propios, introducir una complejidad desproporcionada o deja sin representar relaciones necesarias para reconstruir suficientemente las trayectorias.**

---

# 7. Posibles resultados

```text
A
→ PROV-O insuficiente

B
→ PROV-O parcialmente útil pero con deformación relevante

C
→ PROV-O útil sólo para procedencia material

D
→ PROV-O suficientemente útil como capa transversal mínima

E
→ PROV-O cubre más dominio del inicialmente esperado
```

---

# 8. Regla contra adopción circular

No se considerará evidencia favorable:

> «PROV puede representarlo porque hemos redefinido nuestros conceptos para que encajen en PROV».

La dirección correcta es:

```text
concepto existente del proyecto
↓
comparación con PROV
↓
encaje / no encaje
```

y no:

```text
PROV
↓
reinterpretación forzada del proyecto
```

---

# 9. Modelo mínimo de PROV considerado

El punto de partida utilizará sólo:

```text
prov:Entity
prov:Activity
prov:Agent
```

y:

```text
prov:used
prov:wasGeneratedBy
prov:wasDerivedFrom
prov:wasAssociatedWith
prov:wasAttributedTo
prov:wasInformedBy
```

---

# 10. Términos no incluidos inicialmente

No se presuponen:

```text
prov:Role
prov:Plan
prov:Bundle
prov:Collection
prov:specializationOf
prov:alternateOf
relaciones cualificadas
```

Podrán incorporarse únicamente si un caso demuestra que resuelven una pérdida concreta de representación.

---

# 11. Significado de Entity

Para esta investigación:

```text
prov:Entity
```

se utiliza para aquello cuya existencia o estado pueda ser objeto de procedencia.

No equivale a:

```text
archivo
```

Una Entity puede corresponder, según el caso, a:

```text
material
resultado
aportación
antecedente
afirmación
estado documentado
```

---

# 12. Significado de Activity

```text
prov:Activity
```

representa una actuación o proceso que:

```text
usa
transforma
genera
```

entidades.

Puede corresponder provisionalmente a:

```text
transcripción
corrección
prueba
aportación
recepción
continuación
```

cuando el caso lo justifique.

---

# 13. Significado de Agent

```text
prov:Agent
```

representa aquello que soporta alguna responsabilidad respecto de:

```text
una actividad
o
la existencia de una entidad
```

Puede corresponder a:

```text
persona
software
organización
```

---

# 14. Primera precaución semántica

No se establecerán equivalencias globales como:

```text
Material = Entity
Test = Activity
Participant = Agent
```

La afirmación permitida será sólo:

```text
una instancia determinada
puede desempeñar un papel PROV
en una descripción de procedencia
```

---

# 15. Modelo de capas candidato

Se examinará:

```text
SEMÁNTICA DEL PROYECTO
│
├── Difference
├── Criterion
├── Gate
├── Test
├── Material
├── Participant
└── Trajectory
        │
        ▼
CAPA DE PROCEDENCIA
│
├── Entity
├── Activity
└── Agent
```

La hipótesis favorable requiere que ambas capas puedan coexistir.

---

# 16. Criterios de evaluación

Cada caso se evaluará mediante:

```text
R-PROV-01 — cobertura

R-PROV-02 — fidelidad semántica

R-PROV-03 — reconstrucción

R-PROV-04 — reducción narrativa

R-PROV-05 — complejidad

R-PROV-06 — extensibilidad

R-PROV-07 — interoperabilidad
```

---

# 17. R-PROV-01 — Cobertura

Pregunta:

> ¿Puede el modelo representar los elementos y relaciones necesarios para reconstruir el caso?

Estados:

```text
ALTA
MEDIA
BAJA
```

---

# 18. R-PROV-02 — Fidelidad semántica

Pregunta:

> ¿Puede hacerlo sin cambiar el significado original de los conceptos?

Estados:

```text
ALTA
MEDIA
BAJA
```

---

# 19. R-PROV-03 — Reconstrucción

Pregunta:

> ¿Una representación PROV permitiría reconstruir mejor la trayectoria que las relaciones actuales aisladas?

Estados:

```text
MEJORA
NEUTRA
EMPEORA
```

---

# 20. R-PROV-04 — Reducción narrativa

Pregunta:

> ¿Alguna información actualmente expresada mediante explicación narrativa puede convertirse en relación explícita sin pérdida?

Estados:

```text
ALTA
MEDIA
BAJA
NINGUNA
```

---

# 21. R-PROV-05 — Complejidad

Pregunta:

> ¿Cuántos elementos adicionales exige la representación?

Estados:

```text
BAJA
MEDIA
ALTA
DESPROPORCIONADA
```

---

# 22. R-PROV-06 — Extensibilidad

Pregunta:

> ¿Permite mantener conceptos propios sin deformarlos?

Estados:

```text
ALTA
MEDIA
BAJA
```

---

# 23. R-PROV-07 — Interoperabilidad

Pregunta:

> ¿El uso del estándar aporta una ventaja real frente a inventar relaciones propietarias equivalentes?

Estados:

```text
ALTA
MEDIA
BAJA
NO DEMOSTRADA
```

---

# 24. Casos de prueba

Se utilizarán inicialmente tres casos existentes:

```text
CASO-P1
V0 → T1 → T2

CASO-P2
Q04 → F-PROS-MU-02 → Q05 → reducción

CASO-P3
aportación A
→ antecedente transferible
→ recepción B
→ continuación B
```

---

# 25. Por qué estos tres casos

Representan tres formas diferentes de trayectoria:

```text
P1
→ transformación de materiales

P2
→ transformación metodológica / investigadora

P3
→ continuidad humana entre participantes
```

Si PROV sólo funciona para P1, su alcance será limitado.

Si funciona también para P2 y P3 sin deformación, su valor transversal será considerablemente mayor.

---

# PARTE I — CASO-P1

# 26. Definición de CASO-P1

Trayectoria:

```text
V0
↓
actividad de transcripción
↓
T1
↓
actividad de corrección
↓
T2
```

---

# 27. Entidades candidatas de P1

```text
V0
→ prov:Entity

T1
→ prov:Entity

T2
→ prov:Entity
```

Este mapeo no requiere modificar el significado de los tres materiales.

---

# 28. Actividades candidatas de P1

```text
A-P1-01
→ transcripción

A-P1-02
→ corrección
```

ambas:

```text
→ prov:Activity
```

---

# 29. Agentes candidatos de P1

Según la evidencia disponible podrían existir:

```text
persona
software de transcripción
IA
```

La presente prueba no necesita resolver todavía la responsabilidad exacta.

Sólo necesita comprobar que PROV dispone de una posición representacional adecuada.

---

# 30. Relación V0 → transcripción

La actividad:

```text
A-P1-01
```

utiliza:

```text
V0
```

Representación candidata:

```text
A-P1-01
prov:used
V0
```

---

# 31. Generación de T1

```text
T1
prov:wasGeneratedBy
A-P1-01
```

Esto expresa:

```text
actividad
→ produce
→ nueva entidad
```

---

# 32. Derivación T1 desde V0

```text
T1
prov:wasDerivedFrom
V0
```

La relación es semánticamente razonable porque T1 constituye una representación textual obtenida a partir del contenido de V0.

---

# 33. Corrección de T1

```text
A-P1-02
prov:used
T1
```

y:

```text
T2
prov:wasGeneratedBy
A-P1-02
```

---

# 34. Derivación T2 desde T1

```text
T2
prov:wasDerivedFrom
T1
```

La correspondencia es especialmente fuerte:

```text
T1
→ actualizado/corregido
→ T2
```

---

# 35. Primera reconstrucción PROV de P1

```text
V0 [Entity]
 │
 │ used by
 ▼
A-P1-01 [Activity: transcripción]
 │
 │ generated
 ▼
T1 [Entity]
 │
 │ used by
 ▼
A-P1-02 [Activity: corrección]
 │
 │ generated
 ▼
T2 [Entity]
```

acompañado de:

```text
T1 wasDerivedFrom V0
T2 wasDerivedFrom T1
```

---

# 36. Información capturada en P1

El modelo permite recuperar explícitamente:

```text
qué existía antes
qué actividad ocurrió
qué utilizó
qué produjo
qué deriva de qué
```

---

# 37. Información todavía no capturada

El modelo mínimo no expresa por sí mismo:

```text
por qué se corrigió T1
qué error concreto existía
qué fragmento cambió
qué justificación humana sustentó el cambio
```

Eso no constituye necesariamente un fallo.

Puede pertenecer a:

```text
semántica propia
Web Annotation
evidencia asociada
```

---

# 38. ¿Necesita P1 términos ampliados?

En la primera representación:

```text
NO
```

El núcleo mínimo parece suficiente para reconstruir el esqueleto de la trayectoria.

---

# 39. Evaluación provisional de P1

```text
R-PROV-01 cobertura
→ ALTA

R-PROV-02 fidelidad
→ ALTA

R-PROV-03 reconstrucción
→ MEJORA

R-PROV-04 reducción narrativa
→ ALTA

R-PROV-05 complejidad
→ BAJA

R-PROV-06 extensibilidad
→ ALTA

R-PROV-07 interoperabilidad
→ ALTA
```

---

# 40. Resultado provisional P1

```text
CASO-P1
→ ENCAJE MUY ALTO
```

No se detecta por ahora deformación conceptual relevante.

---

# PARTE II — CASO-P2

# 41. Definición de CASO-P2

Trayectoria resumida:

```text
Q04
↓
resultado observable
↓
F-PROS-MU-02
↓
Q05
↓
resultado de Q05
↓
F-PROS-MU-02 reducida
```

---

# 42. Diferencia respecto de P1

P1 trata principalmente:

```text
materiales
```

P2 trata:

```text
resultados metodológicos
+
clasificaciones
+
cambio de estado de una diferencia
```

Este caso es más exigente.

---

# 43. Q04 como Activity

La prueba Q04 puede desempeñar:

```text
prov:Activity
```

porque:

```text
ocurre
usa condiciones y materiales
produce resultados
```

Pero sigue siendo simultáneamente:

```text
project:ProspectiveTest
```

---

# 44. Resultado de Q04 como Entity

Se distingue entre:

```text
Q04
```

y:

```text
resultado de Q04
```

El segundo puede desempeñar:

```text
prov:Entity
```

---

# 45. F-PROS-MU-02 como Entity

La instancia:

```text
F-PROS-MU-02
```

puede desempeñar un papel:

```text
prov:Entity
```

en tanto resultado conceptual identificable derivado de evidencia anterior.

Pero:

```text
project:Difference
≠
prov:Entity
```

como equivalencia ontológica global.

---

# 46. Relación Q04 → resultado

```text
resultadoQ04
prov:wasGeneratedBy
Q04
```

---

# 47. Relación resultado → diferencia

Una representación candidata:

```text
F-PROS-MU-02
prov:wasDerivedFrom
resultadoQ04
```

Esto deberá interpretarse con cuidado.

La diferencia no es una transformación física del resultado.

Es una conclusión metodológica construida a partir de éste.

La definición de derivación de PROV permite construcción de una nueva entidad basada en una entidad previa.

Por tanto, el encaje es plausible.

---

# 48. Q05 utiliza la diferencia

Q05 se diseñó específicamente para reducir la diferencia observada.

Por tanto:

```text
Q05
prov:used
F-PROS-MU-02
```

es una representación candidata fuerte.

---

# 49. Resultado de Q05

```text
resultadoQ05
prov:wasGeneratedBy
Q05
```

---

# 50. Comunicación Q04 → Q05

PROV define `wasInformedBy` como una relación entre actividades cuando una utiliza una entidad generada por la otra.

La representación directa:

```text
Q05
prov:wasInformedBy
Q04
```

sólo será adecuada si mantenemos una cadena en la que Q04 genere una entidad posteriormente utilizada por Q05.

Dado que:

```text
Q04
→ resultado / diferencia
→ utilizados para diseñar Q05
```

la relación es razonable como vista simplificada.

---

# 51. Primera dificultad de P2

PROV puede expresar:

```text
F-PROS-MU-02
→ fue derivada de

Q05
→ utilizó

resultadoQ05
→ fue generado por
```

pero no expresa nativamente:

```text
F-PROS-MU-02
→ REDUCIDA
```

---

# 52. Alternativa 1 — propiedad propia

Podría existir:

```text
project:reducedBy
```

Ejemplo conceptual:

```text
F-PROS-MU-02
project:reducedBy
Q05
```

---

# 53. Alternativa 2 — estados diferenciados

También podrían distinguirse:

```text
F-PROS-MU-02@Q04
→ estado demostrado

F-PROS-MU-02@Q05
→ estado reducido
```

como entidades distintas relacionadas por procedencia.

---

# 54. Riesgo de la alternativa 2

La diferencia:

```text
F-PROS-MU-02
```

en nuestra metodología mantiene identidad a través de su cambio de estado.

Convertir cada estado en una entidad independiente podría:

```text
mejorar historial
```

pero también:

```text
fragmentar artificialmente la identidad conceptual
```

No debe adoptarse sin necesidad.

---

# 55. Primera frontera semántica

PROV reconstruye bien:

```text
cómo se llegó
```

pero no necesariamente:

```text
qué significa metodológicamente el resultado
```

---

# 56. Diferencia como concepto propio

Se conserva:

```text
project:Difference
```

como concepto del dominio.

PROV puede describir su procedencia.

No debe definir qué es una diferencia.

---

# 57. Gate como concepto propio

De forma equivalente:

```text
GATE-NH-01
GATE-EXT-01
```

poseen semántica metodológica propia.

No deben redefinirse como simples elementos PROV.

---

# 58. Suficiencia como concepto propio

PROV puede ayudar a reconstruir:

```text
qué evidencia llevó
a una declaración de suficiencia
```

pero no determina:

```text
cuándo existe suficiencia
```

---

# 59. Evaluación provisional P2

```text
R-PROV-01 cobertura
→ MEDIA-ALTA

R-PROV-02 fidelidad
→ MEDIA-ALTA

R-PROV-03 reconstrucción
→ MEJORA

R-PROV-04 reducción narrativa
→ MEDIA

R-PROV-05 complejidad
→ MEDIA

R-PROV-06 extensibilidad
→ ALTA SI SE CONSERVA SEMÁNTICA PROPIA

R-PROV-07 interoperabilidad
→ MEDIA-ALTA
```

---

# 60. Resultado provisional P2

```text
CASO-P2
→ ENCAJE ALTO PARA PROCEDENCIA
→ ENCAJE PARCIAL PARA SEMÁNTICA METODOLÓGICA
```

---

# 61. Hallazgo P2-01

> **PROV parece capaz de describir la genealogía de una diferencia sin ser capaz ni necesitar definir qué significa esa diferencia.**

Este resultado favorece:

```text
modelo por capas
```

---

# PARTE III — CASO-P3

# 62. Definición de CASO-P3

Trayectoria:

```text
resultado compartido
+
aportación A
↓
X-CC-01
↓
transferencia
↓
recepción B
↓
continuación B
↓
aportación B
```

---

# 63. Agentes de P3

```text
A
→ prov:Agent

B
→ prov:Agent
```

Más específicamente podrían llegar a ser:

```text
prov:Person
```

pero no necesitamos esa especialización para la prueba mínima.

---

# 64. Actividad de A

```text
actividadA
→ prov:Activity
```

y:

```text
actividadA
prov:wasAssociatedWith
A
```

---

# 65. Aportación A

```text
aportacionA
→ prov:Entity
```

con:

```text
aportacionA
prov:wasGeneratedBy
actividadA
```

---

# 66. Resultado compartido

```text
sharedResult
→ prov:Entity
```

La actividad de A puede:

```text
prov:used
sharedResult
```

si la aportación de A continúa ese resultado.

---

# 67. Antecedente transferible X-CC-01

```text
X-CC-01
→ prov:Entity
```

Este punto es especialmente interesante porque X-CC-01 ya funciona conceptualmente como:

```text
representación explícita
de antecedentes necesarios
```

---

# 68. Generación de X-CC-01

Debe distinguirse entre:

```text
contenido del antecedente
```

y:

```text
actividad que lo construye
```

Por tanto:

```text
generarX
→ prov:Activity
```

---

# 69. Uso para generar X

```text
generarX
prov:used
sharedResult

generarX
prov:used
aportacionA
```

---

# 70. Resultado de generar X

```text
X-CC-01
prov:wasGeneratedBy
generarX
```

---

# 71. Derivación de X

También puede afirmarse:

```text
X-CC-01
prov:wasDerivedFrom
sharedResult

X-CC-01
prov:wasDerivedFrom
aportacionA
```

si consideramos X una nueva representación construida a partir de ambas entidades.

---

# 72. Actividad de recepción B

Puede distinguirse:

```text
recibirX
→ prov:Activity
```

pero habrá que comprobar si esta granularidad aporta algo.

En una representación mínima podría omitirse y modelar directamente la actividad de continuación B.

---

# 73. Actividad de continuación B

```text
actividadB
→ prov:Activity

actividadB
prov:wasAssociatedWith
B
```

---

# 74. Uso de X por B

```text
actividadB
prov:used
X-CC-01
```

Ésta es una de las relaciones centrales del caso.

---

# 75. Aportación B

```text
aportacionB
→ prov:Entity
```

con:

```text
aportacionB
prov:wasGeneratedBy
actividadB
```

---

# 76. Comunicación entre actividades

Si:

```text
generarX
→ genera X-CC-01

actividadB
→ utiliza X-CC-01
```

entonces:

```text
actividadB
prov:wasInformedBy
generarX
```

representa correctamente la comunicación PROV entre ambas actividades.

---

# 77. ¿Debe afirmarse actividadB wasInformedBy actividadA?

No automáticamente.

Existe una actividad intermedia:

```text
generarX
```

Por tanto, la relación directa:

```text
actividadB
wasInformedBy
actividadA
```

debe evitarse salvo que podamos justificar que B utilizó directamente una entidad generada por actividadA.

---

# 78. Hallazgo metodológico P3-01

PROV obliga positivamente a distinguir:

```text
A actuó
```

de:

```text
se construyó X
```

de:

```text
B utilizó X
```

Esto aumenta la precisión de la reconstrucción.

---

# 79. Continuidad humana

PROV puede mostrar:

```text
B utilizó un antecedente derivado
de resultados de A
```

pero no determina por sí solo:

```text
B reconoció la trayectoria
```

ni:

```text
la continuidad fue humanamente suficiente
```

---

# 80. Significado de los debriefs

Las respuestas humanas de Q05 siguen siendo necesarias para establecer:

```text
reconocimiento
orientación
suficiencia
pertinencia
```

PROV podría registrar su procedencia.

No sustituirlas.

---

# 81. Evaluación provisional P3

```text
R-PROV-01 cobertura
→ ALTA

R-PROV-02 fidelidad
→ ALTA

R-PROV-03 reconstrucción
→ MEJORA

R-PROV-04 reducción narrativa
→ ALTA

R-PROV-05 complejidad
→ BAJA-MEDIA

R-PROV-06 extensibilidad
→ ALTA

R-PROV-07 interoperabilidad
→ ALTA
```

---

# 82. Resultado provisional P3

```text
CASO-P3
→ ENCAJE ALTO
```

El modelo parece especialmente útil para reconstruir:

```text
qué recibió B
de dónde procedía
qué actividad lo produjo
qué utilizó B
qué generó B
```

---

# PARTE IV — COMPARACIÓN TRANSVERSAL

# 83. Matriz de casos

| Dimensión | P1 V0→T1→T2 | P2 Q04→Q05 | P3 A→X→B |
|---|---|---|---|
| Cobertura | alta | media-alta | alta |
| Fidelidad | alta | media-alta | alta |
| Reconstrucción | mejora | mejora | mejora |
| Reducción narrativa | alta | media | alta |
| Complejidad | baja | media | baja-media |
| Extensibilidad | alta | alta con dominio propio | alta |
| Interoperabilidad | alta | media-alta | alta |

---

# 84. Patrón común descubierto

Los tres casos pueden reducirse parcialmente a:

```text
Entity
↓
used by
Activity
↓
generates
Entity
```

con:

```text
Agent
→ associatedWith
→ Activity
```

---

# 85. Lo que PROV captura transversalmente

```text
antecedente
uso
actividad
resultado
participación
derivación
comunicación entre actividades
```

---

# 86. Lo que PROV no captura transversalmente

```text
suficiencia
pertinencia
criterio
gate
pérdida humana
diferencia independiente
reducción metodológica
continuidad reconocible
```

como conceptos de dominio.

---

# 87. Primera conclusión estructural

La falta anterior no constituye necesariamente una insuficiencia.

Puede indicar simplemente separación de responsabilidades:

```text
PROV
→ procedencia

proyecto
→ significado metodológico
```

---

# 88. Modelo de capas reforzado

Resultado provisional:

```text
CAPA 1
SEMÁNTICA DE DOMINIO
│
├── Difference
├── Criterion
├── Gate
├── Continuity
├── Sufficiency
└── Material
        │
        ▼
CAPA 2
PROCEDENCIA
│
├── Entity
├── Activity
├── Agent
├── used
├── generated
├── derived
└── associated
```

---

# 89. ¿Sustituye PROV nuestros documentos?

```text
NO
```

Los documentos contienen:

```text
argumentación
criterios
justificaciones
interpretación
conclusiones
```

PROV aporta:

```text
esqueleto explícito de procedencia
```

---

# 90. ¿Sustituye PROV nuestra metodología?

```text
NO
```

La metodología determina:

```text
qué prueba vale
qué diferencia existe
qué se considera suficiente
qué gate se supera
```

PROV sólo puede registrar la procedencia de esas decisiones y resultados.

---

# 91. ¿Sustituye PROV el dominio?

```text
NO
```

El dominio debe seguir disponiendo de sus conceptos propios.

---

# 92. ¿Aporta algo que actualmente no tenemos de forma explícita?

Provisionalmente:

```text
SÍ
```

Aporta un vocabulario interoperable uniforme para relaciones que actualmente aparecen repartidas entre:

```text
narración
IDs
referencias
documentos
convenciones
```

---

# 93. Beneficio principal candidato

El beneficio principal no parece ser:

```text
almacenar más información
```

sino:

```text
hacer explícitas
relaciones de procedencia
que ya existen
```

---

# 94. Beneficio secundario candidato

Una capa de procedencia podría permitir consultas como:

```text
¿de qué deriva esto?

¿qué actividad lo produjo?

¿qué utilizó esa actividad?

¿quién participó?

¿qué resultados dependen de esta evidencia?

¿qué actividad posterior utilizó este resultado?
```

---

# 95. Beneficio de interoperabilidad

El uso de un estándar evitaría definir desde cero relaciones propietarias equivalentes a:

```text
used
wasGeneratedBy
wasDerivedFrom
wasAssociatedWith
wasInformedBy
```

---

# 96. Complejidad observada

En P1:

```text
BAJA
```

En P2:

```text
MEDIA
```

En P3:

```text
BAJA-MEDIA
```

No se observa todavía:

```text
COMPLEJIDAD DESPROPORCIONADA
```

---

# 97. Principal fuente de complejidad

La complejidad aumenta cuando intentamos representar:

```text
estado metodológico
```

en lugar de:

```text
procedencia
```

---

# 98. Regla derivada

> **No utilizar PROV para representar semántica que pertenece propiamente al dominio sólo porque sea técnicamente posible.**

---

# 99. Segunda regla derivada

> **No convertir cada cambio trivial en una Activity si esa granularidad no mejora una reconstrucción necesaria.**

---

# 100. Granularidad mínima

Una actividad PROV debería introducirse sólo cuando sea relevante para responder al menos una pregunta como:

```text
¿qué produjo esto?

¿qué utilizó?

¿quién participó?

¿qué transformación ocurrió?

¿qué actividad informó a otra?
```

---

# 101. Riesgo de sobreprocedencia

Representar todo podría generar:

```text
ruido
proliferación de nodos
duplicación
dificultad de lectura
mantenimiento innecesario
```

---

# 102. Regla contra sobreprocedencia

> **Registrar procedencia suficiente para reconstrucción, no procedencia máxima.**

---

# PARTE V — TÉRMINOS AMPLIADOS

# 103. ¿Necesitamos specializationOf?

Todavía:

```text
NO DEMOSTRADO
```

Podría resultar útil para:

```text
versiones
estados
representaciones particulares
```

pero P1 puede reconstruirse sin él.

---

# 104. ¿Necesitamos alternateOf?

Actualmente:

```text
NO
```

No existe en los tres casos una necesidad clara de expresar dos entidades como aspectos alternativos de una misma cosa.

---

# 105. ¿Necesitamos Role?

Potencialmente:

```text
A como iniciador
B como continuador
humano como revisor
IA como asistente
```

pero los casos pueden describirse inicialmente sin introducir roles.

Estado:

```text
POSPUESTO
```

---

# 106. ¿Necesitamos Plan?

Los procedimientos Q04/Q05 tienen planes experimentales explícitos.

Sin embargo:

```text
prov:Plan
```

no es necesario para reconstruir el núcleo de procedencia.

Estado:

```text
POSPUESTO
```

---

# 107. ¿Necesitamos Bundle?

PROV define un Bundle como un conjunto identificado de descripciones de procedencia que es también una Entity.

Esto permite:

```text
procedencia
de
la propia procedencia
```

---

# 108. Posible relación con nuestros documentos

Conceptualmente podría aplicarse a:

```text
documento 41
documento 42
documento 45
```

como objetos que contienen afirmaciones de procedencia.

Pero actualmente no necesitamos esta capacidad para resolver P1–P3.

Estado:

```text
POSPUESTO
```

---

# 109. Resultado sobre términos ampliados

```text
núcleo PROV
→ suficiente provisionalmente

términos ampliados
→ NO NECESARIOS todavía
```

Esto favorece:

```text
complejidad contenida
```

---

# PARTE VI — CONTRAARGUMENTOS

# 110. Contraargumento fuerte 1

> Ya tenemos toda esta información en Markdown; PROV sólo duplicaría datos.

Respuesta provisional:

```text
PARCIALMENTE CIERTO
```

PROV no parece aportar hechos nuevos.

Su valor estaría en convertir:

```text
relaciones implícitas/distribuidas
```

en:

```text
relaciones explícitas uniformes
```

La utilidad real todavía debe demostrarse.

---

# 111. Contraargumento fuerte 2

> Si necesitamos una ontología propia encima de PROV, entonces PROV no sirve.

Respuesta:

```text
NO NECESARIAMENTE
```

PROV es deliberadamente independiente del dominio.

Su valor puede consistir precisamente en normalizar:

```text
procedencia
```

mientras el dominio conserva:

```text
significado
```

---

# 112. Contraargumento fuerte 3

> Introducir RDF/OWL sería una complejidad enorme.

Respuesta:

```text
CORRECTO SI SE IMPLEMENTARA AHORA
```

Pero este estudio no deriva:

```text
RDF
OWL
triplestore
```

La utilidad conceptual del modelo debe evaluarse antes de decidir representación técnica alguna.

---

# 113. Contraargumento fuerte 4

> Las relaciones del proyecto son demasiado específicas.

P2 confirma parcialmente esta objeción.

PROV no representa nativamente:

```text
reducción de una diferencia
suficiencia
gate
```

Pero sí puede representar la procedencia de esos resultados.

---

# 114. Contraargumento fuerte 5

> La procedencia puede convertirse en burocracia.

Riesgo:

```text
REAL
```

Por eso el criterio no debe ser:

```text
capturar todo
```

sino:

```text
hacer reconstruible lo relevante
```

---

# PARTE VII — RESULTADOS PROVISIONALES

# 115. Resultado sobre cobertura

```text
P1
→ ALTA

P2
→ MEDIA-ALTA

P3
→ ALTA
```

Resultado global provisional:

```text
COBERTURA
→ ALTA PARA PROCEDENCIA
```

---

# 116. Resultado sobre fidelidad

```text
P1
→ ALTA

P2
→ MEDIA-ALTA

P3
→ ALTA
```

La pérdida aparece principalmente si intentamos convertir semántica metodológica en vocabulario PROV.

---

# 117. Resultado sobre reconstrucción

En los tres casos:

```text
PROV
→ mejora potencialmente la reconstrucción
```

al hacer explícita la secuencia:

```text
antecedente
→ actividad
→ resultado
```

---

# 118. Resultado sobre complejidad

```text
núcleo PROV
→ complejidad contenida

PROV completo
→ no evaluado

representación de toda la metodología mediante PROV
→ probablemente desproporcionada
```

---

# 119. Resultado sobre deformación

No se observa deformación significativa cuando:

```text
PROV
→ capa de procedencia
```

Sí aparece riesgo cuando:

```text
PROV
→ intenta sustituir semántica del proyecto
```

---

# 120. Resultado sobre interoperabilidad

Existe una ventaja conceptual real:

```text
relaciones estándar
```

frente a:

```text
relaciones propietarias equivalentes
```

pero su valor operativo todavía no ha sido probado.

---

# 121. Estado de H-PROV-GAP

La hipótesis:

```text
H-PROV-GAP
```

no queda sostenida globalmente por los tres casos.

Sí aparece una forma parcial:

```text
PROV-O
→ insuficiente como modelo semántico completo
```

pero ésa no era la función mínima que pretendíamos evaluar.

---

# 122. Estado de H-PROV-SUF

La hipótesis:

```text
H-PROV-SUF
```

queda:

```text
SOSTENIDA PROVISIONALMENTE
```

en el alcance conceptual examinado.

---

# 123. Resultado provisional de L-EXT-01

```text
L-EXT-01
→ DIFERENCIA CONCEPTUAL ÚTIL CONFIRMADA

PROV-O
→ PROMETEDOR COMO CAPA MÍNIMA DE PROCEDENCIA

PROV-O
→ NO ADECUADO COMO SUSTITUTO DEL DOMINIO
```

---

# 124. Pero todavía falta una prueba

Hasta ahora hemos realizado:

```text
mapeo conceptual
```

No hemos demostrado:

```text
utilidad operacional
```

---

# 125. Pregunta pendiente decisiva

> **¿Una representación concreta y mínima de una trayectoria real mediante PROV mejora efectivamente su reconstrucción respecto de la representación documental actual?**

---

# 126. Mejor caso para responderla

El mejor candidato inicial es:

```text
CASO-P1
V0 → T1 → T2
```

porque:

```text
encaje
→ muy alto

complejidad
→ baja

semántica metodológica especial
→ mínima
```

---

# 127. Alternativa más discriminante

Sin embargo, P1 podría resultar demasiado fácil.

El caso más discriminante sería:

```text
CASO-P2
Q04 → F-PROS-MU-02 → Q05
```

porque obliga a preservar semántica propia.

---

# 128. Estrategia recomendada

Antes de abrir otra investigación:

```text
P1
→ representación concreta mínima

P2
→ representación concreta mínima
```

y comparar ambas con sus documentos actuales.

P3 sólo sería necesario si P1/P2 dejan una incertidumbre relevante.

---

# 129. Qué significa representación concreta

No significa todavía crear infraestructura.

Puede consistir simplemente en una representación textual controlada como:

```text
Entity(V0)

Activity(transcription)

used(transcription, V0)

wasGeneratedBy(T1, transcription)

wasDerivedFrom(T1, V0)
```

---

# 130. Por qué no RDF todavía

Porque queremos comprobar primero:

```text
modelo
```

y no:

```text
serialización
```

Si el modelo no aporta valor:

```text
RDF
→ irrelevante
```

---

# 131. Próxima microactuación candidata

```text
P-PROV-01
→ construir una representación PROV mínima de P1
```

y comparar:

```text
documentación original
vs
representación PROV
```

---

# 132. Criterios de P-PROV-01

La representación deberá demostrar:

```text
C1
→ reconstrucción correcta

C2
→ ausencia de información falsa

C3
→ ausencia de reinterpretación forzada

C4
→ número limitado de elementos

C5
→ ganancia observable de explicitud
```

---

# 133. Regla de parada de P-PROV-01

Si P1 requiere:

```text
extensiones propias numerosas
relaciones artificiales
duplicación excesiva
```

se detendrá la línea antes de P2.

---

# 134. Si P1 pasa

Sólo entonces:

```text
P-PROV-02
→ representar P2
```

---

# 135. Criterio discriminante de P2

P2 debe demostrar que:

```text
semántica propia
```

puede permanecer fuera de PROV sin impedir:

```text
reconstrucción de procedencia
```

---

# 136. Si P2 pasa

Entonces podremos afirmar con mucha más fuerza:

```text
PROV-O
→ capa transversal viable
```

---

# 137. Si P2 falla

Entonces habrá que reducir la conclusión:

```text
PROV-O
→ útil principalmente para trayectorias materiales
```

---

# 138. Estado estratégico

Nada de lo observado altera:

```text
GATE-NH-01
```

Estado:

```text
nuevo horizonte
→ NO DERIVADO

derivación estratégica
→ CONTINÚA CERRADA
```

---

# 139. Estado de GATE-EXT-01

```text
GATE-EXT-01
→ sigue justificando L-EXT-01
```

La línea todavía produce información discriminante.

---

# 140. Resultado del estudio conceptual

```text
PROV como ontología total
→ RECHAZADO COMO HIPÓTESIS DE TRABAJO

PROV como capa de procedencia
→ SOSTENIDO PROVISIONALMENTE

núcleo mínimo
→ SUFICIENTE PARA P1
→ PROMETEDOR PARA P2
→ SUFICIENTE CONCEPTUALMENTE PARA P3

términos ampliados
→ POSPUESTOS
```

---

# 141. Próxima actuación

> **Ejecutar P-PROV-01: representación concreta mínima del caso V0 → T1 → T2 y comparación directa con la reconstrucción documental actual.**

---

# 142. Regla de continuidad

No abrir todavía:

```text
Web Annotation
RO-Crate
objetos tipados
IA verificable
```

hasta que L-EXT-01 alcance un resultado suficientemente estable.

---

# 143. Cierre provisional

La investigación ha encontrado una distinción fundamental:

```text
semántica
≠
procedencia
```

PROV-O parece fuerte precisamente en la segunda.

El proyecto no necesita entregar a PROV-O el significado de:

```text
Difference
Gate
Sufficiency
Continuity
Criterion
```

para aprovechar un vocabulario común que describa:

```text
qué existió
qué se utilizó
qué actividad ocurrió
qué se produjo
quién participó
qué derivó de qué
```

Estado provisional:

> **45 — H-PROV-SUF SOSTENIDA PROVISIONALMENTE; PROV-O PROMETEDOR COMO CAPA MÍNIMA DE PROCEDENCIA; P-PROV-01 DERIVADA COMO SIGUIENTE MICROACTUACIÓN; SIN DERIVACIÓN DE PRODUCTO.**
