# Resultado P-PROV-02 y cierre de L-EXT-01

## Estado

**P-PROV-02 CERRADA — L-EXT-01 CERRADA CON RESULTADO FAVORABLE LIMITADO**

## Fecha

04/11/2026

## Derivación

Este documento continúa:

```text
43-PANORAMA_EXTERNO_PLATAFORMAS_ESTANDARES_E_IA.md
↓
44-MATRIZ_COMPARATIVA_PANORAMA_EXTERNO_VS_PROYECTO.md
↓
45-ESTUDIO_PROV_O_Y_RECONSTRUCCION_DE_TRAYECTORIA.md
↓
46-RESULTADO_P_PROV_01_REPRESENTACION_MINIMA_V0_T1_T2.md
↓
47-RESULTADO_P_PROV_02_Y_CIERRE_L_EXT_01.md
```

---

# 1. Objeto

Este documento consolida la segunda prueba operacional de:

```text
L-EXT-01
— procedencia y reconstrucción de trayectoria mediante PROV
```

y responde a la cuestión abierta después de `P-PROV-01`:

> **¿Puede PROV representar suficientemente una trayectoria metodológica compleja conservando su procedencia sin apropiarse de la semántica propia del proyecto?**

---

# 2. Función de P-PROV-02

`P-PROV-01` utilizó una trayectoria material:

```text
V0 → T1 → T2
```

Su resultado fue favorable.

Sin embargo, ese caso era especialmente próximo al dominio natural de una representación de procedencia.

Por ello no bastaba para demostrar utilidad transversal.

---

# 3. Caso discriminante

`P-PROV-02` utiliza:

```text
Q04
→ resultado Q04
→ F-PROS-MU-02
→ reducción
→ MIN-CC-01 / MED-CC-01 / X-CC-01
→ Q05
→ resultado Q05
→ reducción de F-PROS-MU-02
→ reevaluación post-Q05
```

---

# 4. Regla contra circularidad

Al igual que en P1, la representación PROV no se ha utilizado como fuente de su propia justificación.

La genealogía se reconstruyó desde:

```text
39-PRUEBA_PROSPECTIVA_CONTINUIDAD_COLABORATIVA_INTERDISPOSITIVO_POST_T1.md

40-REDUCCION_F_PROS_MU_02_Y_DERIVACION_PROS_MU_Q05.md

41-CIERRE_PROS_MU_Q05_CONTINUIDAD_COLABORATIVA_INTERDISPOSITIVO.md

42-REEVALUACION_RESIDUO_POST_Q05_Y_RESTAURACION_DE_SUFICIENCIA.md
```

---

# 5. Evidencia histórica de Q04

`PROS-MU-Q04` ejerció continuidad colaborativa entre dos personas reales y dos instancias reales distintas.

La pérdida observada fue:

```text
B no dispone del resultado compartido
ni de la aportación previa de A
```

con la consecuencia:

```text
B no puede reconocer
el trabajo anterior

y

B no puede continuar
el mismo trabajo
sin información externa adicional
```

---

# 6. Resultado de Q04

La clasificación fue:

```text
PROS-MU-Q04
→ D — DIFERENCIA POSITIVA
```

---

# 7. Formulación de F-PROS-MU-02

A partir del resultado se formuló:

```text
F-PROS-MU-02
— Indisponibilidad del estado colaborativo necesario
  para la continuación entre instancias reales distintas
```

---

# 8. Reducción posterior a Q04

`F-PROS-MU-02` fue contrastada contra:

```text
P4
P5
integración post-P5
implementación existente
```

y no quedó absorbida.

---

# 9. Estado histórico de F-PROS-MU-02 en Q04

Por tanto:

```text
F-PROS-MU-02
→ DIFERENCIA HUMANA INDEPENDIENTE DEMOSTRADA
```

---

# 10. GATE-NH-01

La diferencia satisfizo:

```text
GATE-NH-01
→ SUPERADO
```

Este estado conserva validez histórica.

---

# 11. Consecuencia de Q04

Q04 justificó:

```text
reabrir la derivación
+
reducir la diferencia
```

No justificó:

```text
backend
sincronización
cuentas
autenticación
arquitectura distribuida
```

---

# 12. Reducción previa a Q05

La reducción posterior buscó responder:

> **¿Qué antecedente mínimo necesita realmente B para reconocer y continuar la trayectoria?**

---

# 13. MIN-CC-01

Se definió provisionalmente:

```text
MIN-CC-01
— Antecedente colaborativo mínimo candidato
```

compuesto por:

```text
sharedResult

firstContribution.participant

firstContribution.content
```

---

# 14. Estado inicial de MIN-CC-01

Antes de Q05:

```text
MIN-CC-01
→ CANDIDATO
```

No:

```text
demostrado suficiente
```

---

# 15. Alcance negativo de MIN-CC-01

No contiene necesariamente:

```text
secondContribution
projectDescription
manual
instructions transferidas
trajectoryId
collaborationId
timestamp
historial completo
provenance general
cuenta
identidad real
permisos
backend
canal de red
```

---

# 16. X-CC-01

Se definió:

```text
X-CC-01
```

como representación explícita neutral de `MIN-CC-01`.

Conceptualmente:

```text
X-CC-01
→ sharedResult
→ firstContribution.participant
→ firstContribution.content
```

---

# 17. Naturaleza de X-CC-01

`X-CC-01` representa:

```text
una función de representación
```

y no prescribe:

```text
JSON
archivo
URL
QR
clipboard
API
endpoint
```

---

# 18. MED-CC-01

Se definió:

```text
MED-CC-01
— Mediación mínima candidata
  para disponibilidad interinstancia
  del antecedente colaborativo
```

---

# 19. Función de MED-CC-01

La mediación debía permitir:

```text
extraer MIN-CC-01
↓
constituir X-CC-01
↓
mantener X distinguible
↓
hacer X disponible
↓
recibir X en B
↓
reconstruir MIN-CC-01
↓
reutilizar orientación local
```

---

# 20. Distinción fundamental

Debe conservarse:

```text
MIN-CC-01
≠
X-CC-01
≠
MED-CC-01
```

---

# 21. Diferencia semántica

```text
MIN-CC-01
→ contenido mínimo candidato

X-CC-01
→ representación explícita

MED-CC-01
→ mediación candidata
```

---

# 22. Derivación de Q05

Se derivó:

```text
PROS-MU-Q05
— Prueba prospectiva de suficiencia
  del antecedente colaborativo mínimo
  entre instancias reales distintas
```

---

# 23. Pregunta de Q05

> **¿Puede B reconocer y continuar suficientemente la misma trayectoria si recibe únicamente el resultado compartido y la aportación previa de A mediante una representación explícita, reutilizando la orientación situacional ya existente?**

---

# 24. Intervención experimental

La única intervención nueva debía ser:

```text
hacer disponible MIN-CC-01
mediante MED-CC-01
```

---

# 25. Canal

El canal de transporte fue tratado como:

```text
instrumento experimental contingente
```

y no como:

```text
requisito de producto
```

---

# 26. Diferencia experimental Q04 / Q05

En Q04:

```text
R1 — Recepción
→ FALLA
```

En Q05:

```text
R1 — Recepción
→ PASA
```

---

# 27. Variable discriminante

La diferencia entre ambos casos quedó localizada en:

```text
disponibilidad explícita
del antecedente colaborativo mínimo
```

---

# 28. Resultado de Q05

Las dimensiones fueron:

```text
R1 — Recepción
→ PASA

R2 — Reconocimiento
→ PASA

R3 — Orientación
→ PASA

R4 — Continuación
→ PASA

R5 — Pertinencia
→ PASA

R6 — Continuidad resultante
→ PASA
```

Resultado:

```text
6 / 6
```

---

# 29. H-Q05-SUF

Resultado:

```text
H-Q05-SUF
→ SOSTENIDA EN EL ALCANCE ENSAYADO
```

---

# 30. H-Q05-GAP

Resultado:

```text
H-Q05-GAP
→ NO SOSTENIDA EN EL CASO ENSAYADO
```

---

# 31. Estado posterior de MIN-CC-01

Después de Q05:

```text
MIN-CC-01
→ SUFICIENTE EN EL CASO ENSAYADO
```

No:

```text
universalmente suficiente
```

---

# 32. Estado posterior de MED-CC-01

Después de Q05:

```text
MED-CC-01
→ SUFICIENTE EN EL CASO ENSAYADO
```

sin derivar:

```text
mecanismo técnico definitivo
```

---

# 33. Resultado final de Q05

```text
PROS-MU-Q05
→ E — SUFICIENCIA DEMOSTRADA
  EN EL ALCANCE ENSAYADO
```

---

# 34. Reducción de F-PROS-MU-02

Q05 demostró que la pérdida desaparecía en el caso ensayado cuando B recibía el antecedente mínimo.

Resultado:

```text
F-PROS-MU-02
→ REDUCIDA EN EL CASO ENSAYADO
```

---

# 35. Dos estados históricos

La documentación conserva:

```text
Q04:
F-PROS-MU-02
→ DIFERENCIA HUMANA INDEPENDIENTE DEMOSTRADA
```

y:

```text
post-Q05:
F-PROS-MU-02
→ REDUCIDA EN EL CASO ENSAYADO
```

---

# 36. Ausencia de contradicción

Los dos estados no son contradictorios.

Representan:

```text
detección
↓
reducción posterior
```

---

# 37. Estado histórico de GATE-NH-01

También se conserva:

```text
Q04
→ F-PROS-MU-02 demostrada
→ GATE-NH-01 SUPERADO
```

---

# 38. Estado posterior

Después de Q05:

```text
F-PROS-MU-02
→ reducida

nueva diferencia independiente
→ no demostrada

nueva candidata actual para GATE-NH-01
→ no identificada
```

---

# 39. Resultado estratégico posterior

Por tanto:

```text
derivación estratégica post-Q05
→ CERRADA
```

y:

```text
suficiencia sin siguiente horizonte derivado
→ RESTAURADA
```

---

# 40. Pregunta PROV de P-PROV-02

La cuestión no consiste en preguntar si PROV puede representar:

```text
todo el significado metodológico
```

sino:

> **¿Puede representar suficientemente la procedencia de esta trayectoria conservando fuera de PROV el significado metodológico propio?**

---

# 41. Regla de separación

Se adopta:

```text
PROV
→ procedencia

proyecto
→ significado metodológico
```

---

# 42. Entidades candidatas

La representación mínima utiliza:

```text
ResultadoQ04

F-PROS-MU-02

F-PROS-MU-02@Q04

MIN-CC-01

X-CC-01

ResultadoQ05

F-PROS-MU-02@PostQ05
```

como entidades o representaciones con procedencia relevante.

---

# 43. Actividades candidatas

Se utilizan:

```text
Q04

ReduccionPreQ05

MediacionQ05

Q05

ReevaluacionPostQ05
```

---

# 44. Distinción sobre MED-CC-01

No se afirma directamente:

```text
MED-CC-01 = prov:Activity
```

porque `MED-CC-01` es una mediación candidata definida metodológicamente.

---

# 45. Actividad concreta de mediación

Para PROV se utiliza conceptualmente:

```text
MediacionQ05
```

como actividad concreta ocurrida durante Q05.

Su relación con:

```text
MED-CC-01
```

pertenece al dominio del proyecto.

---

# 46. Distinción sobre MIN-CC-01

`MIN-CC-01` puede desempeñar papel de:

```text
prov:Entity
```

en la descripción de procedencia sin dejar de ser:

```text
un concepto propio del proyecto
```

---

# 47. Distinción sobre F-PROS-MU-02

Tampoco se establece:

```text
Difference = prov:Entity
```

como equivalencia ontológica general.

---

# 48. Papel PROV de F-PROS-MU-02

Se establece únicamente que:

```text
una instancia conceptual de Difference
```

puede desempeñar:

```text
papel de Entity
```

cuando su procedencia debe describirse.

---

# 49. Primera relación

```text
wasGeneratedBy(ResultadoQ04, Q04)
```

---

# 50. Significado

Q04 produjo un resultado experimental documentado.

---

# 51. Formulación de la diferencia

La formulación y reducción posterior utiliza el resultado de Q04.

Conceptualmente:

```text
used(ReduccionPreQ05, ResultadoQ04)
```

---

# 52. Estado histórico de la diferencia

Se representa:

```text
F-PROS-MU-02@Q04
```

como entidad contextualizada correspondiente al estado histórico de Q04.

---

# 53. Relación con la diferencia general

Se utiliza:

```text
specializationOf(
  F-PROS-MU-02@Q04,
  F-PROS-MU-02
)
```

---

# 54. Significado de specializationOf

La relación expresa:

```text
misma diferencia general
+
contextualización histórica más específica
```

No expresa:

```text
transición
reducción
cambio de estado
```

---

# 55. Fundamento semántico

En PROV-O, una especialización comparte los aspectos de la entidad más general y añade aspectos más específicos del mismo objeto, como contexto, abstracción o período temporal.

Por ello resulta adecuada para:

```text
F-PROS-MU-02 general
```

y:

```text
F-PROS-MU-02 en contexto Q04
```

siempre que el estado metodológico variable no se coloque como atributo fijo de la entidad general.

---

# 56. Restricción importante

No debe definirse en la entidad general:

```text
F-PROS-MU-02
status = demostrada
```

porque ese estado no permanece fijo.

---

# 57. Estado propio de Q04

El significado:

```text
DIFERENCIA HUMANA INDEPENDIENTE DEMOSTRADA
```

permanece en la capa semántica del proyecto.

---

# 58. Reducción previa a Q05

La actividad:

```text
ReduccionPreQ05
```

utiliza:

```text
ResultadoQ04
F-PROS-MU-02@Q04
```

---

# 59. Relaciones

Conceptualmente:

```text
used(ReduccionPreQ05, ResultadoQ04)

used(ReduccionPreQ05, F-PROS-MU-02@Q04)
```

---

# 60. Generación de MIN-CC-01

La reducción produce el candidato:

```text
MIN-CC-01
```

por lo que:

```text
wasGeneratedBy(
  MIN-CC-01,
  ReduccionPreQ05
)
```

---

# 61. Derivación de MIN-CC-01

Puede representarse:

```text
wasDerivedFrom(
  MIN-CC-01,
  F-PROS-MU-02@Q04
)
```

en el sentido de que el mínimo candidato resulta de la reducción de la diferencia demostrada.

---

# 62. X-CC-01

La representación explícita se constituye a partir del mínimo.

Conceptualmente:

```text
wasDerivedFrom(
  X-CC-01,
  MIN-CC-01
)
```

---

# 63. Generación concreta de X-CC-01

La actividad concreta de mediación puede expresar:

```text
used(MediacionQ05, MIN-CC-01)

wasGeneratedBy(X-CC-01, MediacionQ05)
```

---

# 64. Utilización por Q05

Q05 utiliza:

```text
X-CC-01
```

como antecedente explícitamente disponible.

Por tanto:

```text
used(Q05, X-CC-01)
```

---

# 65. MIN-CC-01 y Q05

Conceptualmente también puede conservarse:

```text
used(Q05, MIN-CC-01)
```

si se desea describir el contenido semántico utilizado además de su representación.

---

# 66. Resultado de Q05

```text
wasGeneratedBy(
  ResultadoQ05,
  Q05
)
```

---

# 67. Derivación del resultado

Puede expresarse:

```text
wasDerivedFrom(
  ResultadoQ05,
  X-CC-01
)
```

sin afirmar que `X-CC-01` sea la única condición del resultado.

---

# 68. Reevaluación posterior

La reevaluación post-Q05 utiliza:

```text
ResultadoQ05
```

y el estado anterior de la diferencia.

---

# 69. Relaciones

```text
used(
  ReevaluacionPostQ05,
  ResultadoQ05
)

used(
  ReevaluacionPostQ05,
  F-PROS-MU-02@Q04
)
```

---

# 70. Estado posterior de la diferencia

Se representa:

```text
F-PROS-MU-02@PostQ05
```

---

# 71. Generación del estado posterior

```text
wasGeneratedBy(
  F-PROS-MU-02@PostQ05,
  ReevaluacionPostQ05
)
```

---

# 72. Identidad histórica

Se utiliza:

```text
specializationOf(
  F-PROS-MU-02@PostQ05,
  F-PROS-MU-02
)
```

---

# 73. Lo que esta relación establece

Establece:

```text
F-PROS-MU-02@Q04
```

y:

```text
F-PROS-MU-02@PostQ05
```

como contextualizaciones específicas de:

```text
F-PROS-MU-02
```

---

# 74. Lo que NO establece

No se utiliza:

```text
specializationOf(
  F-PROS-MU-02@PostQ05,
  F-PROS-MU-02@Q04
)
```

---

# 75. Razón

El estado post-Q05 no es una especialización del estado Q04.

Ambos son:

```text
especializaciones hermanas
```

de la misma diferencia general.

---

# 76. Representación conceptual

```text
                    F-PROS-MU-02
                    [Entity]
                      /      \
                     /        \
                    /          \
                   ▼            ▼

F-PROS-MU-02@Q04       F-PROS-MU-02@PostQ05
     [Entity]                    [Entity]

   specializationOf            specializationOf
```

---

# 77. Cambio histórico

El cambio entre ambos estados se reconstruye mediante:

```text
Q05
↓
ResultadoQ05
↓
ReevaluacionPostQ05
↓
F-PROS-MU-02@PostQ05
```

no mediante `specializationOf`.

---

# 78. Significado metodológico

Los significados:

```text
DIFERENCIA HUMANA INDEPENDIENTE DEMOSTRADA

REDUCIDA EN EL CASO ENSAYADO
```

permanecen en el dominio propio.

---

# 79. GATE-NH-01

Tampoco se intenta definir:

```text
GATE-NH-01
```

mediante PROV.

---

# 80. Procedencia del gate

PROV podría describir la procedencia de una evaluación del gate.

Pero:

```text
qué significa superar GATE-NH-01
```

sigue siendo metodología propia.

---

# 81. Suficiencia

Igualmente:

```text
E — SUFICIENCIA DEMOSTRADA
```

no se convierte en término PROV.

---

# 82. Resultado metodológico

PROV puede decir:

```text
qué resultado se produjo
de qué actividad
qué información utilizó
qué resultado posterior dependió de él
```

pero no:

```text
qué significa metodológicamente suficiencia
```

---

# 83. Representación mínima consolidada

La procedencia relevante puede resumirse conceptualmente como:

```text
Entity(ResultadoQ04)

Entity(F-PROS-MU-02)
Entity(F-PROS-MU-02@Q04)

Entity(MIN-CC-01)
Entity(X-CC-01)

Entity(ResultadoQ05)
Entity(F-PROS-MU-02@PostQ05)

Activity(Q04)
Activity(ReduccionPreQ05)
Activity(MediacionQ05)
Activity(Q05)
Activity(ReevaluacionPostQ05)
```

---

# 84. Relaciones consolidadas

```text
wasGeneratedBy(ResultadoQ04, Q04)

specializationOf(
  F-PROS-MU-02@Q04,
  F-PROS-MU-02
)

used(ReduccionPreQ05, ResultadoQ04)

used(
  ReduccionPreQ05,
  F-PROS-MU-02@Q04
)

wasGeneratedBy(
  MIN-CC-01,
  ReduccionPreQ05
)

wasDerivedFrom(
  MIN-CC-01,
  F-PROS-MU-02@Q04
)

used(MediacionQ05, MIN-CC-01)

wasGeneratedBy(
  X-CC-01,
  MediacionQ05
)

wasDerivedFrom(
  X-CC-01,
  MIN-CC-01
)

used(Q05, X-CC-01)

wasGeneratedBy(
  ResultadoQ05,
  Q05
)

used(
  ReevaluacionPostQ05,
  ResultadoQ05
)

used(
  ReevaluacionPostQ05,
  F-PROS-MU-02@Q04
)

wasGeneratedBy(
  F-PROS-MU-02@PostQ05,
  ReevaluacionPostQ05
)

specializationOf(
  F-PROS-MU-02@PostQ05,
  F-PROS-MU-02
)
```

---

# 85. Relación opcional

Puede añadirse, si resulta útil para una representación más detallada:

```text
used(Q05, MIN-CC-01)
```

para distinguir:

```text
contenido mínimo
```

de:

```text
representación concreta X-CC-01
```

---

# 86. Agent

P2 contiene agentes humanos reales:

```text
A
B
```

pero su incorporación no es necesaria para resolver la pregunta discriminante de esta prueba.

---

# 87. Consecuencia

No se añaden todavía:

```text
prov:Agent
wasAssociatedWith
wasAttributedTo
```

al núcleo mínimo de P2.

---

# 88. Razón

La cuestión discriminante es:

```text
procedencia
+
identidad longitudinal
+
separación semántica
```

no la atribución de autoría.

---

# 89. MED-CC-01 y prov:Plan

Tampoco se introduce:

```text
prov:Plan
```

para representar `MED-CC-01`.

---

# 90. Razón

Aunque pudiera estudiarse posteriormente, no es necesario para resolver P2.

Introducirlo ahora aumentaría complejidad sin ganancia discriminante.

---

# 91. Resultado sobre términos PROV

P1 necesitó:

```text
Entity
Activity
used
wasGeneratedBy
wasDerivedFrom
```

P2 necesita además:

```text
specializationOf
```

---

# 92. Primer término ampliado necesario

Por tanto:

```text
prov:specializationOf
→ PRIMER TÉRMINO PROV AMPLIADO
  JUSTIFICADO POR UNA PRUEBA
```

---

# 93. Encaje de specializationOf

La comprobación contra la semántica oficial de PROV determina:

```text
F-PROS-MU-02@Q04
specializationOf
F-PROS-MU-02
```

→ adecuado.

Y:

```text
F-PROS-MU-02@PostQ05
specializationOf
F-PROS-MU-02
```

→ adecuado.

---

# 94. Relación rechazada

```text
F-PROS-MU-02@PostQ05
specializationOf
F-PROS-MU-02@Q04
```

→ rechazada.

---

# 95. Razón del rechazo

`specializationOf` no representa:

```text
cambio
transición
reducción
```

sino:

```text
una representación más específica
del mismo objeto general
```

---

# 96. Consecuencia importante

No se necesita crear una relación propietaria exclusivamente para expresar:

```text
estos dos estados
pertenecen a la misma F-PROS-MU-02
```

---

# 97. Relación propietaria evitada

Por ahora no resulta necesaria una relación como:

```text
project:aboutDifference
```

exclusivamente para resolver esa identidad.

---

# 98. Lo que sigue requiriendo dominio propio

Sí continúa siendo necesaria semántica propia para:

```text
Difference
Reduction
Sufficiency
Gate
Criterion
human loss
independent difference
strategic derivation
```

---

# 99. Resultado de separación de capas

```text
PROV
→ no sustituye el dominio

dominio
→ no necesita reinventar procedencia general
```

---

# 100. Criterio P2-C1 — reconstrucción

Pregunta:

> ¿Puede reconstruirse la genealogía Q04 → Q05?

Resultado:

```text
PASA
```

---

# 101. Razón P2-C1

PROV permite reconstruir:

```text
actividad
→ resultado
→ reducción
→ mínimo candidato
→ representación
→ nueva prueba
→ nuevo resultado
→ reevaluación
```

---

# 102. Criterio P2-C2 — fidelidad semántica

Pregunta:

> ¿La representación obliga a reinterpretar conceptos propios como conceptos PROV?

Resultado:

```text
PASA
```

---

# 103. Razón P2-C2

Se mantiene:

```text
PROV
→ procedencia

proyecto
→ semántica metodológica
```

---

# 104. Criterio P2-C3 — identidad longitudinal

Pregunta:

> ¿Puede mantenerse que los dos estados históricos pertenecen a la misma F-PROS-MU-02?

Resultado:

```text
PASA
```

mediante:

```text
specializationOf
```

---

# 105. Criterio P2-C4 — ausencia de relaciones artificiales

Resultado:

```text
PASA
```

No ha sido necesario:

```text
forzar derivaciones
inventar agentes
inventar transiciones PROV
```

---

# 106. Criterio P2-C5 — complejidad

Resultado:

```text
PASA CON MAYOR COSTE QUE P1
```

---

# 107. Razón P2-C5

P2 requiere:

```text
más entidades
más actividades
distinción de estados históricos
specializationOf
```

pero no requiere todavía:

```text
Bundle
Plan
Role
relaciones cualificadas
ontología propia completa
RDF operativo
triplestore
```

---

# 108. Criterio P2-C6 — ganancia de explicitud

Resultado:

```text
PASA
```

---

# 109. Ganancia observada

La narrativa:

```text
Q04
→ F-PROS-MU-02
→ Q05
→ reducción
```

puede descomponerse explícitamente en:

```text
qué actividad
qué resultado
qué se utilizó después
qué derivó de qué
qué estado histórico corresponde
a qué identidad general
```

---

# 110. Criterio P2-C7 — separación temporal

Resultado:

```text
PASA
```

porque no se sobrescribe:

```text
F-PROS-MU-02 demostrada
```

con:

```text
F-PROS-MU-02 reducida
```

---

# 111. Resultado consolidado de P2

```text
P2-C1
→ PASA

P2-C2
→ PASA

P2-C3
→ PASA

P2-C4
→ PASA

P2-C5
→ PASA CON COMPLEJIDAD MEDIA

P2-C6
→ PASA

P2-C7
→ PASA
```

---

# 112. Evaluación R-PROV-01 — cobertura

Resultado:

```text
ALTA
```

PROV cubre la genealogía principal.

---

# 113. Evaluación R-PROV-02 — fidelidad semántica

Resultado:

```text
ALTA
```

si se conserva la separación de capas.

---

# 114. Evaluación R-PROV-03 — reconstrucción

Resultado:

```text
ALTA
```

---

# 115. Evaluación R-PROV-04 — reducción narrativa

Resultado:

```text
MEDIA-ALTA
```

La estructura reduce dispersión, aunque la semántica metodológica sigue requiriendo documentación propia.

---

# 116. Evaluación R-PROV-05 — complejidad

Resultado:

```text
MEDIA
```

Mayor que P1 pero todavía contenida.

---

# 117. Evaluación R-PROV-06 — extensibilidad

Resultado:

```text
ALTA
```

La semántica propia puede coexistir con PROV.

---

# 118. Evaluación R-PROV-07 — interoperabilidad

Resultado:

```text
ALTA EN LA CAPA DE PROCEDENCIA
```

sin afirmar interoperabilidad completa de la metodología del proyecto.

---

# 119. Resultado de H-PROV-GAP

La hipótesis fuerte negativa era que PROV:

```text
exigiría deformación
o complejidad desproporcionada
```

Resultado:

```text
H-PROV-GAP
→ NO SOSTENIDA EN P2
```

---

# 120. Resultado de H-PROV-SUF

La hipótesis afirmaba que un subconjunto reducido de PROV podía representar suficientemente la procedencia sin sustituir el dominio.

Después de P1 y P2:

```text
H-PROV-SUF
→ SOSTENIDA EN EL ALCANCE ENSAYADO
```

---

# 121. Alcance del resultado

La conclusión se limita a:

```text
trayectorias materiales ensayadas
+
trayectorias metodológicas ensayadas
```

---

# 122. Lo que no demuestra

No demuestra que:

```text
todo el proyecto
pueda expresarse mediante PROV
```

---

# 123. Tampoco demuestra

No se deriva:

```text
adoptar PROV-O
implementar RDF
usar OWL
construir knowledge graph
introducir SPARQL
usar triplestore
modificar almacenamiento
cambiar arquitectura
```

---

# 124. Diferencia entre viabilidad y adopción

El resultado es:

```text
viabilidad conceptual y representacional
→ DEMOSTRADA EN LOS CASOS ENSAYADOS
```

No:

```text
adopción tecnológica
→ DERIVADA
```

---

# 125. Hallazgo P-PROV-02-01

> **PROV puede representar la genealogía de una trayectoria metodológica sin tener que definir el significado metodológico de sus resultados.**

---

# 126. Hallazgo P-PROV-02-02

> **La identidad longitudinal de una diferencia puede conservarse mediante especializaciones históricas sin sobrescribir sus estados anteriores.**

---

# 127. Hallazgo P-PROV-02-03

> **`prov:specializationOf` resulta útil cuando una misma entidad conceptual debe conservar contextualizaciones históricas diferentes.**

---

# 128. Hallazgo P-PROV-02-04

> **`specializationOf` no debe utilizarse como relación de transición o reducción.**

---

# 129. Hallazgo P-PROV-02-05

> **La semántica propia del proyecto sigue siendo necesaria incluso cuando la procedencia puede expresarse mediante PROV.**

---

# 130. Hallazgo P-PROV-02-06

> **La utilidad de PROV aumenta cuando existe una trayectoria distribuida entre múltiples documentos y estados históricos.**

---

# 131. Hallazgo P-PROV-02-07

> **La utilidad demostrada no depende de RDF ni de una infraestructura concreta.**

---

# 132. Comparación P1 / P2

```text
P1
→ trayectoria material
→ núcleo PROV suficiente
→ complejidad baja

P2
→ trayectoria metodológica
→ núcleo PROV + specializationOf
→ complejidad media
```

---

# 133. Resultado transversal

Los dos casos muestran:

```text
PROV
→ útil más allá
  de una única clase de material
```

---

# 134. Límite transversal

Los casos también muestran:

```text
PROV
→ NO sustituye
  el vocabulario conceptual del proyecto
```

---

# 135. Resultado de P-PROV-02

```text
P-PROV-02
→ SUPERADA
```

---

# 136. Qué significa “superada”

Significa:

> **La trayectoria Q04 → Q05 puede reconstruirse suficientemente mediante una capa PROV contenida, manteniendo fuera de PROV la semántica metodológica propia y preservando los estados históricos de F-PROS-MU-02.**

---

# 137. Regla de 45

45 establecía:

```text
si P2 pasa
→ capa PROV transversal viable
```

---

# 138. Aplicación de la regla

P2 ha pasado.

Por tanto:

```text
capa PROV transversal
→ VIABLE CONCEPTUALMENTE
  EN EL ALCANCE ENSAYADO
```

---

# 139. Resultado de L-EXT-01

La pregunta inicial de L-EXT-01 puede cerrarse.

Resultado:

```text
L-EXT-01
→ CERRADA
```

---

# 140. Respuesta a la pregunta de L-EXT-01

> **PROV-O puede representar suficientemente las trayectorias ensayadas del proyecto y mejorar su reconstrucción sin introducir, en estos casos, complejidad desproporcionada ni deformar los conceptos propios, siempre que se utilice como capa de procedencia y no como sustituto del dominio.**

---

# 141. Condiciones del resultado

La conclusión depende de cuatro condiciones:

```text
1. adopción mínima;

2. separación entre procedencia
   y semántica de dominio;

3. no representar información
   sólo porque PROV permita hacerlo;

4. ampliar el vocabulario PROV
   únicamente cuando una prueba
   concreta lo justifique.
```

---

# 142. Núcleo actualmente justificado

Después de P1 y P2:

```text
prov:Entity
prov:Activity
prov:used
prov:wasGeneratedBy
prov:wasDerivedFrom
prov:specializationOf
```

---

# 143. Términos todavía no justificados

No quedan derivados:

```text
prov:Agent
prov:Role
prov:Plan
prov:Bundle
prov:Collection
prov:alternateOf explícito
relaciones cualificadas
```

---

# 144. Precisión sobre alternateOf

La semántica formal de PROV permite inferir `alternateOf` a partir de `specializationOf`.

No existe motivo actual para declararla explícitamente sólo para duplicar esa información.

---

# 145. Precisión sobre wasDerivedFrom

No se presupone transitividad general de:

```text
wasDerivedFrom
```

Las derivaciones deberán establecerse sólo cuando estén justificadas por la trayectoria concreta.

---

# 146. Complejidad actualmente justificada

La complejidad demostrada como útil es:

```text
pequeño vocabulario de procedencia
+
identificadores estables
+
relaciones explícitas
```

---

# 147. Complejidad NO justificada

No se deriva:

```text
infraestructura semántica completa
ontología total
razonador OWL
servidor RDF
grafo distribuido
```

---

# 148. Consecuencia sobre la documentación actual

La prueba sugiere que ciertas trayectorias hoy distribuidas narrativamente podrían reconstruirse mediante una representación relacional común.

Eso constituye:

```text
oportunidad comprobada de explicitud
```

no:

```text
obligación de migración
```

---

# 149. Consecuencia sobre producto

No se deriva una capacidad de producto nueva.

---

# 150. Consecuencia sobre arquitectura

No se deriva una arquitectura nueva.

---

# 151. Consecuencia sobre implementación

No se deriva implementación PROV.

---

# 152. Consecuencia estratégica

```text
GATE-NH-01
→ no se modifica
```

La investigación externa no ha descubierto una nueva pérdida humana independiente.

---

# 153. Estado estratégico vigente

Se mantiene:

```text
derivación estratégica
→ CERRADA

nuevo horizonte
→ NO DERIVADO

suficiencia sin siguiente horizonte derivado
→ VIGENTE
```

---

# 154. Relación con GATE-EXT-01

`GATE-EXT-01` cumplió su función.

Permitió profundizar una diferencia externa concreta sin convertir automáticamente una tecnología externa en requisito del proyecto.

---

# 155. Resultado del gate externo para PROV

```text
GATE-EXT-01
→ profundización justificada

L-EXT-01
→ ejecutada

resultado
→ útil y discriminante
```

---

# 156. Radar externo restante

Después del cierre de L-EXT-01 permanecen:

```text
L-EXT-02
→ Web Annotation

L-EXT-03
→ RO-Crate

L-EXT-04
→ objetos tipados

L-EXT-05
→ operaciones IA verificables
```

---

# 157. Prioridad establecida en 44

44 había fijado:

```text
1. L-EXT-01
2. L-EXT-02
3. L-EXT-03
4. reevaluar
```

y sólo después considerar L-EXT-04 / L-EXT-05 si seguían siendo relevantes.

---

# 158. Consecuencia

Al quedar cerrada L-EXT-01:

```text
L-EXT-02
→ SIGUIENTE LÍNEA EXTERNA JUSTIFICADA
```

---

# 159. Pero no se abre automáticamente una solución

Abrir L-EXT-02 significa únicamente:

```text
examinar Web Annotation
contra relaciones granulares
ya observadas en C1
```

No:

```text
adoptar Web Annotation
```

---

# 160. Pregunta candidata de L-EXT-02

La siguiente investigación debería preguntar:

> **¿Puede el W3C Web Annotation Data Model representar suficientemente las correspondencias granulares ya observadas en C1 —por ejemplo, entre un fragmento temporal de V0, una sección de T2, I1 y N1— mejorando su localización y reconstrucción sin imponer una estructura desproporcionada ni sustituir la semántica propia del proyecto?**

---

# 161. Relación PROV / Web Annotation

La siguiente línea deberá evitar confundir:

```text
PROV
→ de dónde procede algo
```

con:

```text
Web Annotation
→ qué fragmento concreto
  es objeto de una anotación o relación
```

---

# 162. Posible complementariedad

Hipótesis aún no demostrada:

```text
PROV
→ trayectoria

Web Annotation
→ anclaje granular
```

Esta hipótesis deberá someterse a prueba y no asumirse.

---

# 163. Regla de continuidad

No abrir simultáneamente:

```text
L-EXT-02
L-EXT-03
L-EXT-04
L-EXT-05
```

---

# 164. Siguiente actuación

Ejecutar únicamente:

```text
L-EXT-02
```

con un caso concreto ya existente.

---

# 165. Caso preferente

El caso natural es C1 porque ya contiene:

```text
V0
T2
I1
N1
timestamps
encabezados
correspondencias
```

---

# 166. Regla metodológica para L-EXT-02

Debe seguirse el mismo esquema que funcionó en L-EXT-01:

```text
1. estudiar el estándar;

2. reconstruir evidencia propia anterior;

3. seleccionar un caso mínimo;

4. construir representación concreta;

5. comparar contra estado documental;

6. medir ganancia;

7. medir complejidad;

8. detener si no hay diferencia útil.
```

---

# 167. Estado de H-PROV-SUF

Resultado final:

```text
H-PROV-SUF
→ SOSTENIDA EN EL ALCANCE ENSAYADO
```

---

# 168. Estado de H-PROV-GAP

Resultado final:

```text
H-PROV-GAP
→ NO SOSTENIDA EN LOS CASOS ENSAYADOS
```

---

# 169. Precisión epistemológica

Esto no convierte:

```text
H-PROV-SUF
```

en una afirmación universal.

Permanece limitada por los casos ejercidos.

---

# 170. Conclusión de P-PROV-02

P2 ha mostrado que el valor observado en P1 no dependía únicamente de trabajar con materiales audiovisuales y transcripciones.

También puede reconstruirse una trayectoria compuesta por:

```text
prueba
resultado
diferencia
reducción
nuevo mínimo
nueva prueba
nuevo resultado
reevaluación
```

sin exigir que PROV defina esos conceptos metodológicos.

---

# 171. Conclusión de L-EXT-01

La línea externa queda reducida a una conclusión concreta:

> **PROV-O es conceptualmente viable como capa mínima y transversal de procedencia para las trayectorias ensayadas del proyecto; su utilidad demostrada está en la explicitud y reconstrucción de relaciones, no en sustituir el dominio ni en justificar por sí misma una infraestructura semántica.**

---

# 172. Resultado consolidado

```text
P-PROV-01
→ SUPERADA

P-PROV-02
→ SUPERADA

H-PROV-SUF
→ SOSTENIDA EN EL ALCANCE ENSAYADO

H-PROV-GAP
→ NO SOSTENIDA EN LOS CASOS ENSAYADOS

PROV mínimo
→ SUFICIENTE EN P1

PROV mínimo + specializationOf
→ SUFICIENTE EN P2

semántica metodológica propia
→ CONSERVADA

relación propietaria para identidad histórica
→ NO NECESARIA

RDF / OWL / SPARQL / triplestore
→ NO DERIVADOS

producto
→ NO DERIVADO

arquitectura
→ NO DERIVADA

nuevo horizonte
→ NO DERIVADO

L-EXT-01
→ CERRADA

L-EXT-02
→ SIGUIENTE LÍNEA EXTERNA JUSTIFICADA
```

---

# 173. Próxima actuación justificable

> **Abrir L-EXT-02 mediante una comparación limitada del W3C Web Annotation Data Model con las correspondencias granulares ya ejercidas en C1, comenzando por un único anclaje real entre V0 y T2 y sin derivar todavía adopción tecnológica ni cambios de producto.**

---

# 174. Cierre

> **47 — P-PROV-02 SUPERADA; H-PROV-SUF SOSTENIDA EN EL ALCANCE ENSAYADO; PROV-O CONFIRMADO COMO CAPA TRANSVERSAL CONCEPTUALMENTE VIABLE DE PROCEDENCIA; L-EXT-01 CERRADA; L-EXT-02 DERIVADA COMO SIGUIENTE LÍNEA EXTERNA; SIN DERIVACIÓN DE PRODUCTO, ARQUITECTURA NI NUEVO HORIZONTE.**
