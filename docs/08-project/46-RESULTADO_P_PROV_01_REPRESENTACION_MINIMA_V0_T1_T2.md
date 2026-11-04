# Resultado P-PROV-01 — Representación mínima de V0 → T1 → T2

## Estado

**P-PROV-01 CERRADA — REPRESENTACIÓN MÍNIMA SUFICIENTE EN EL CASO ENSAYADO**

## Fecha

04/11/2026

## Derivación

Este documento deriva de:

```text
43-PANORAMA_EXTERNO_PLATAFORMAS_ESTANDARES_E_IA.md
44-MATRIZ_COMPARATIVA_PANORAMA_EXTERNO_VS_PROYECTO.md
45-ESTUDIO_PROV_O_Y_RECONSTRUCCION_DE_TRAYECTORIA.md
```

En 45 quedó establecido:

```text
L-EXT-01
→ procedencia explícita y reconstrucción de trayectoria

H-PROV-SUF
→ sostenida provisionalmente

P-PROV-01
→ derivada como siguiente microactuación
```

---

# 1. Pregunta de P-PROV-01

> **¿Una representación concreta y mínima mediante PROV del caso V0 → T1 → T2 mejora efectivamente su reconstrucción respecto de la representación documental actual sin introducir información falsa, reinterpretación forzada ni complejidad desproporcionada?**

---

# 2. Caso examinado

El caso pertenece a:

```text
C1 — Transformación de una fuente audiovisual en material de trabajo
```

y utiliza:

```text
V0
→ vídeo original

T1
→ transcripción / representación textual

T2
→ transcripción corregida
```

---

# 3. Regla de evidencia

P-PROV-01 no utiliza como evidencia primaria las relaciones ya propuestas en 45.

Eso produciría circularidad.

Se vuelve deliberadamente a documentación anterior a la introducción de PROV-O.

---

# 4. Fuentes documentales utilizadas

Se utilizaron especialmente:

```text
docs/06-realization/29-investigacion-continuidad-participacion-materiales-heterogeneos.md

docs/06-realization/30-reduccion-de-pertinencia-sobrevenida-en-C1.md

docs/06-realization/31-cierre-de-C1-en-I29.md

docs/06-realization/32-cierre-de-investigacion-29.md
```

---

# 5. Evidencia sobre V0, T1 y T2

La documentación previa establece materialmente:

```text
V0
→ vídeo original

T1
→ transcripción / representación textual

T2
→ transcripción corregida
```

---

# 6. Evidencia sobre obtención de T1

En la investigación de I29 aparece explícitamente:

```text
obtener una representación textual T1
```

dentro de una trayectoria que parte de:

```text
vídeo original V0
```

---

# 7. Evidencia sobre función de T1

La reducción posterior de C1 establece:

> **T1 como intermediario en la obtención de T2.**

Por tanto:

```text
T1
→ antecedente relevante para la obtención de T2
```

queda documentalmente sustentado.

---

# 8. Evidencia sobre corrección de T2

El cierre de C1 registra materialmente:

```text
corrección de una transcripción mediante retorno al material original
```

---

# 9. Evidencia sobre reutilización de V0

El cierre de C1 registra que V0 participó como:

```text
fuente para la transcripción
criterio para verificar T2
evidencia para corregir T2
```

---

# 10. Consecuencia

La trayectoria no debe reducirse a:

```text
V0
↓
T1
↓
T2
```

porque esa representación oculta el retorno a V0 durante la corrección.

---

# 11. Trayectoria documental más precisa

La evidencia permite reconstruir:

```text
V0
↓
obtención de T1
↓
T1
↓
corrección de T2
↓
T2
```

pero además:

```text
V0
→ reutilizado durante la corrección de T2
```

---

# 12. Evidencia NO encontrada

La búsqueda dirigida no encontró evidencia suficiente en las fuentes examinadas para establecer:

```text
quién produjo T1
qué software produjo T1
qué IA produjo T1
quién corrigió T2
qué software corrigió T2
```

---

# 13. Consecuencia para Agent

Por tanto:

```text
prov:Agent
→ NO SE INCORPORA
```

en P-PROV-01.

Añadir un agente concreto introduciría información no demostrada.

---

# 14. Hallazgo metodológico

La ausencia de agente no impide representar la procedencia disponible.

Esto demuestra que:

```text
PROV
→ puede utilizarse parcialmente
```

sin rellenar datos desconocidos.

---

# 15. Representación mínima seleccionada

Se utilizan únicamente:

```text
prov:Entity
prov:Activity
prov:used
prov:wasGeneratedBy
prov:wasDerivedFrom
```

---

# 16. Entidades

```text
Entity(V0)
Entity(T1)
Entity(T2)
```

---

# 17. Actividades

Para evitar atribuir una semántica más fuerte que la evidencia documental, se utilizan:

```text
Activity(ObtenerT1)
Activity(CorregirT2)
```

en lugar de presuponer detalles tecnológicos concretos.

---

# 18. Por qué `ObtenerT1`

La documentación dice:

```text
obtener una representación textual T1
```

Por tanto:

```text
ObtenerT1
```

es una denominación ajustada a la evidencia.

---

# 19. Por qué `CorregirT2`

La documentación registra:

```text
corrección de una transcripción mediante retorno al material original
```

y:

```text
V0
→ evidencia para corregir T2
```

Por tanto:

```text
CorregirT2
```

queda directamente sustentado.

---

# 20. Relación 1

```text
used(ObtenerT1, V0)
```

Significado:

```text
ObtenerT1
→ utiliza V0
```

---

# 21. Relación 2

```text
wasGeneratedBy(T1, ObtenerT1)
```

Significado:

```text
T1
→ resultado de ObtenerT1
```

---

# 22. Relación 3

```text
wasDerivedFrom(T1, V0)
```

Significado:

```text
T1
→ procede del contenido de V0
```

---

# 23. Relación 4

```text
used(CorregirT2, T1)
```

Significado:

```text
T1
→ actúa como antecedente utilizado para obtener T2
```

---

# 24. Relación 5

```text
used(CorregirT2, V0)
```

Significado:

```text
la corrección
→ vuelve al material original V0
```

---

# 25. Relación 6

```text
wasGeneratedBy(T2, CorregirT2)
```

Significado:

```text
T2
→ resultado de la actividad de corrección
```

---

# 26. Relación 7

```text
wasDerivedFrom(T2, T1)
```

Significado:

```text
T2
→ deriva de la transcripción previa T1
```

---

# 27. Representación mínima consolidada

```text
Entity(V0)
Entity(T1)
Entity(T2)

Activity(ObtenerT1)
Activity(CorregirT2)

used(ObtenerT1, V0)
wasGeneratedBy(T1, ObtenerT1)
wasDerivedFrom(T1, V0)

used(CorregirT2, T1)
used(CorregirT2, V0)
wasGeneratedBy(T2, CorregirT2)
wasDerivedFrom(T2, T1)
```

---

# 28. Tamaño de la representación

La representación contiene:

```text
3 Entity
2 Activity
0 Agent
7 relaciones
```

No requiere:

```text
Role
Plan
Bundle
specializationOf
alternateOf
relaciones cualificadas
extensiones propias
```

---

# 29. Representación gráfica conceptual

```text
V0 [Entity]
 │
 │ used
 ▼
ObtenerT1 [Activity]
 │
 │ generates
 ▼
T1 [Entity]
 │
 │ used
 ▼
CorregirT2 [Activity]
 │
 │ generates
 ▼
T2 [Entity]

V0 [Entity]
 └──────── used ────────► CorregirT2
```

y:

```text
T1 wasDerivedFrom V0
T2 wasDerivedFrom T1
```

---

# 30. Hallazgo principal

La representación PROV hace visible que la trayectoria no es una cadena lineal simple.

No es sólo:

```text
V0 → T1 → T2
```

sino:

```text
V0
↓
T1
↓
T2
↑
V0
```

---

# 31. Interpretación precisa

Esto significa:

```text
T2
→ deriva de T1
```

mientras:

```text
CorregirT2
→ utiliza también V0
```

---

# 32. Diferencia entre derivación y uso

P-PROV-01 permite separar explícitamente:

```text
wasDerivedFrom
```

de:

```text
used
```

Esta diferencia estaba presente narrativamente en la documentación, pero no en la representación abreviada:

```text
V0 → T1 → T2
```

---

# 33. Relación rechazada — T2 wasDerivedFrom V0

No se incorpora:

```text
wasDerivedFrom(T2, V0)
```

como relación directa.

---

# 34. Razón del rechazo

La evidencia disponible demuestra:

```text
T2
→ deriva de T1
```

y:

```text
CorregirT2
→ utiliza V0
```

No es necesario convertir el uso de V0 en derivación directa de T2.

---

# 35. Beneficio del rechazo

Se preserva la distinción entre:

```text
antecedente derivativo
```

y:

```text
fuente utilizada durante una actividad
```

---

# 36. Relaciones Agent rechazadas

No se incorporan:

```text
wasAssociatedWith(ObtenerT1, persona)
wasAssociatedWith(ObtenerT1, software)
wasAssociatedWith(CorregirT2, persona)
wasAssociatedWith(CorregirT2, software)
```

---

# 37. Razón

No existe evidencia suficiente en el corpus examinado para identificar esos agentes.

---

# 38. Términos ampliados rechazados

No se incorporan:

```text
Role
Plan
Bundle
Collection
specializationOf
alternateOf
```

porque:

```text
ninguno es necesario
para reconstruir P-PROV-01
```

---

# 39. Extensiones propias

P-PROV-01 no necesita introducir:

```text
project:...
```

para representar su núcleo de procedencia.

---

# 40. Resultado sobre mínima adopción

```text
núcleo PROV
→ SUFICIENTE EN P-PROV-01

términos ampliados
→ NO NECESARIOS

extensiones propias
→ NO NECESARIAS
```

---

# 41. Comparación con la representación documental abreviada

Representación previa habitual:

```text
V0
→ T1
→ T2
```

Ventaja:

```text
muy compacta
```

Desventaja:

```text
no distingue actividades
no distingue uso de derivación
no hace visible el retorno a V0
```

---

# 42. Comparación con la narrativa completa

La narrativa documental sí conserva:

```text
T1 como intermediario
V0 como fuente
V0 como criterio de verificación
V0 como evidencia de corrección
```

pero esa información está distribuida entre varios documentos y secciones.

---

# 43. Aportación de PROV

PROV no añade hechos nuevos.

Añade:

```text
estructura explícita común
```

para relaciones ya documentadas.

---

# 44. Tipo de ganancia

La ganancia observada es:

```text
GANANCIA DE EXPLICITUD
+
GANANCIA DE RECONSTRUCCIÓN ESTRUCTURAL
```

No se demuestra todavía:

```text
ganancia de producto
ganancia de UX
ganancia de rendimiento
```

---

# 45. Criterio C1 — reconstrucción correcta

Criterio:

> La representación debe permitir reconstruir correctamente la trayectoria conocida.

Resultado:

```text
PASA
```

---

# 46. Razón de C1

La representación conserva:

```text
V0
ObtenerT1
T1
CorregirT2
T2
```

y el retorno de:

```text
CorregirT2
→ V0
```

---

# 47. Criterio C2 — ausencia de información falsa

Criterio:

> No debe introducir hechos no demostrados.

Resultado:

```text
PASA
```

---

# 48. Razón de C2

Se omiten deliberadamente:

```text
Agent
Role
Plan
software
persona responsable
```

por falta de evidencia.

---

# 49. Criterio C3 — ausencia de reinterpretación forzada

Criterio:

> Los conceptos deben conservar su significado original.

Resultado:

```text
PASA
```

---

# 50. Razón de C3

No se redefine:

```text
V0
T1
T2
```

como conceptos PROV exclusivos.

Sólo desempeñan:

```text
papeles de Entity
```

dentro de una descripción de procedencia.

---

# 51. Criterio C4 — número limitado de elementos

Criterio:

> La representación no debe crecer desproporcionadamente.

Resultado:

```text
PASA
```

---

# 52. Razón de C4

Se necesitan únicamente:

```text
3 Entity
2 Activity
7 relaciones
```

sin vocabulario ampliado.

---

# 53. Criterio C5 — ganancia observable de explicitud

Criterio:

> Debe aparecer alguna información estructural más claramente que en la representación abreviada actual.

Resultado:

```text
PASA
```

---

# 54. Razón de C5

La representación hace explícita la estructura:

```text
T2
→ deriva de T1

CorregirT2
→ utiliza T1
→ utiliza también V0
```

---

# 55. Resultado global de criterios

```text
C1
→ PASA

C2
→ PASA

C3
→ PASA

C4
→ PASA

C5
→ PASA
```

Resultado:

```text
5 / 5
```

---

# 56. Regla de parada definida en 45

45 establecía:

> Si P1 requiere extensiones propias numerosas, relaciones artificiales o duplicación excesiva, se detendrá la línea antes de P2.

---

# 57. Evaluación de la regla de parada

P-PROV-01 no ha requerido:

```text
extensiones propias
relaciones artificiales
duplicación excesiva
términos ampliados
```

Por tanto:

```text
regla de parada
→ NO ACTIVADA
```

---

# 58. Estado de P-PROV-01

```text
P-PROV-01
→ SUPERADA
```

---

# 59. Qué significa “superada”

Significa únicamente:

> **En el caso V0 → T1 → T2, un subconjunto mínimo de PROV permite representar la procedencia documentada con fidelidad suficiente y aporta una ganancia observable de explicitud sin complejidad desproporcionada.**

---

# 60. Qué NO significa

No significa:

```text
PROV-O adoptado
PROV-O requerido
RDF requerido
knowledge graph derivado
triplestore derivado
modelo de datos derivado
arquitectura derivada
implementación derivada
```

---

# 61. Tampoco significa

No demuestra que PROV sea adecuado para:

```text
Difference
Gate
Criterion
Sufficiency
Continuity
```

como conceptos del dominio.

---

# 62. Limitación principal

P-PROV-01 es un caso relativamente favorable.

Trabaja principalmente con:

```text
materiales
transformaciones
derivaciones
```

que son conceptos cercanos al propósito original de PROV.

---

# 63. Riesgo de falso positivo

Es posible que:

```text
PROV funcione muy bien en P1
```

pero:

```text
falle o fuerce el modelo
en trayectorias metodológicas
```

---

# 64. Necesidad de P-PROV-02

Por esta razón, P-PROV-01 no basta para cerrar L-EXT-01.

Debe ejecutarse el caso más discriminante:

```text
P-PROV-02
```

---

# 65. Caso de P-PROV-02

Trayectoria candidata:

```text
Q04
↓
resultado Q04
↓
F-PROS-MU-02
↓
Q05
↓
resultado Q05
↓
reducción de F-PROS-MU-02
```

---

# 66. Pregunta de P-PROV-02

> **¿Puede PROV representar suficientemente la procedencia de una trayectoria metodológica manteniendo fuera del vocabulario PROV la semántica propia de Difference, reducción, suficiencia y gate?**

---

# 67. Riesgo específico de P-PROV-02

El caso puede exigir distinguir:

```text
procedencia
```

de:

```text
estado metodológico
```

Si esa separación no es viable:

```text
H-PROV-SUF
→ deberá reducirse
```

---

# 68. Condición favorable para P-PROV-02

P-PROV-02 debería poder expresar:

```text
qué produjo el resultado Q04
de qué evidencia se derivó F-PROS-MU-02
qué utilizó Q05
qué produjo Q05
```

sin que PROV tenga que definir:

```text
qué significa Difference
qué significa reducida
qué significa suficiencia
```

---

# 69. Posibles resultados de P-PROV-02

```text
A
→ falla

B
→ útil sólo mediante extensiones excesivas

C
→ útil para procedencia pero no para semántica

D
→ suficientemente útil como capa transversal
```

---

# 70. Relación con H-PROV-SUF

Tras P-PROV-01:

```text
H-PROV-SUF
→ REFORZADA
```

pero todavía:

```text
NO CERRADA
```

---

# 71. Relación con H-PROV-GAP

Tras P-PROV-01:

```text
H-PROV-GAP
→ NO SOSTENIDA EN P1
```

pero sigue abierta para:

```text
P2
```

---

# 72. Relación con L-EXT-01

```text
L-EXT-01
→ CONTINÚA ABIERTA
```

porque la pregunta transversal todavía no ha sido respondida en un caso metodológico complejo.

---

# 73. Relación con GATE-EXT-01

```text
GATE-EXT-01
→ sigue justificando la continuación de L-EXT-01
```

porque P-PROV-01 ha producido información discriminante.

---

# 74. Relación con GATE-NH-01

Nada de P-PROV-01 demuestra una nueva pérdida humana independiente.

Por tanto:

```text
GATE-NH-01
→ NO REABIERTO
```

---

# 75. Estado estratégico

```text
nuevo horizonte
→ NO DERIVADO

derivación estratégica
→ CONTINÚA CERRADA

suficiencia sin siguiente horizonte derivado
→ SE MANTIENE
```

---

# 76. Hallazgo P-PROV-01-01

> **Una representación de procedencia puede mejorar la explicitud sin añadir nuevos hechos.**

---

# 77. Hallazgo P-PROV-01-02

> **La distinción entre `used` y `wasDerivedFrom` permite conservar diferencias que una flecha genérica oculta.**

---

# 78. Hallazgo P-PROV-01-03

> **La falta de Agent conocido no invalida la representación de la procedencia disponible.**

---

# 79. Hallazgo P-PROV-01-04

> **La utilidad observada procede del modelo relacional, no de RDF, OWL ni ninguna infraestructura concreta.**

---

# 80. Hallazgo P-PROV-01-05

> **La representación mínima resulta más informativa que V0 → T1 → T2 sin ser todavía desproporcionadamente más compleja.**

---

# 81. Consecuencia arquitectónica

No se deriva ninguna.

La prueba opera todavía en:

```text
nivel conceptual
+
nivel representacional
```

---

# 82. Consecuencia de producto

No se deriva ninguna.

No se ha demostrado que:

```text
un usuario necesite ver PROV
un usuario necesite editar PROV
la aplicación deba almacenar PROV
```

---

# 83. Consecuencia metodológica

Sí se deriva:

> **P-PROV-02 está justificada.**

---

# 84. Próxima microactuación

```text
P-PROV-02
→ reconstrucción mínima de Q04 → F-PROS-MU-02 → Q05
```

---

# 85. Regla para P-PROV-02

Al igual que en P1:

```text
primero evidencia histórica
después representación PROV
```

y no:

```text
modelo de 45
→ usado como evidencia de sí mismo
```

---

# 86. Fuentes iniciales candidatas de P-PROV-02

Deberán inspeccionarse como mínimo:

```text
39-PRUEBA_PROSPECTIVA_CONTINUIDAD_COLABORATIVA_INTERDISPOSITIVO_POST_T1.md

40-REDUCCION_F_PROS_MU_02_Y_DERIVACION_PROS_MU_Q05.md

41-CIERRE_PROS_MU_Q05_CONTINUIDAD_COLABORATIVA_INTERDISPOSITIVO.md

42-REEVALUACION_RESIDUO_POST_Q05_Y_RESTAURACION_DE_SUFICIENCIA.md
```

---

# 87. Regla contra contaminación

P-PROV-02 no utilizará como fuente primaria:

```text
45-ESTUDIO_PROV_O_Y_RECONSTRUCCION_DE_TRAYECTORIA.md
```

ni este documento 46 para determinar la historia de Q04/Q05.

---

# 88. Resultado final de P-PROV-01

```text
P-PROV-01
→ SUPERADA

criterios
→ 5 / 5

representación mínima
→ SUFICIENTE

Agent
→ NO NECESARIO EN EL CASO

términos ampliados
→ NO NECESARIOS

extensiones propias
→ NO NECESARIAS

ganancia de explicitud
→ DEMOSTRADA

complejidad
→ CONTENIDA
```

---

# 89. Resultado de L-EXT-01 tras P-PROV-01

```text
L-EXT-01
→ CONTINÚA ABIERTA

H-PROV-SUF
→ REFORZADA

H-PROV-GAP
→ NO SOSTENIDA EN P1

P-PROV-02
→ DERIVADA
```

---

# 90. Próxima actuación justificable

> **Ejecutar P-PROV-02 sobre la trayectoria Q04 → F-PROS-MU-02 → Q05, reconstruyendo primero su evidencia documental histórica y comprobando después si PROV puede representar su procedencia sin apropiarse de la semántica metodológica del proyecto.**

---

# 91. Regla de continuidad

No abrir todavía:

```text
L-EXT-02
Web Annotation

L-EXT-03
RO-Crate

L-EXT-04
objetos tipados

L-EXT-05
IA verificable
```

hasta obtener un resultado suficientemente discriminante de L-EXT-01.

---

# 92. Cierre

P-PROV-01 proporciona la primera evidencia concreta de que la hipótesis favorable de 45 no depende únicamente de una analogía conceptual.

La trayectoria documental:

```text
V0 → T1 → T2
```

puede representarse mediante un núcleo PROV pequeño que además hace visible un hecho estructural oculto por la representación lineal:

```text
CorregirT2
→ utiliza T1
→ reutiliza V0
```

La mejora demostrada es todavía limitada:

```text
explicitud
+
reconstrucción estructural
```

No se ha demostrado:

```text
necesidad de producto
implementación
arquitectura
```

Estado final:

> **46 — P-PROV-01 SUPERADA; REPRESENTACIÓN MÍNIMA SUFICIENTE; GANANCIA DE EXPLICITUD DEMOSTRADA; P-PROV-02 DERIVADA; L-EXT-01 CONTINÚA ABIERTA; SIN DERIVACIÓN DE PRODUCTO.**
