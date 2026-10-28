# Derivación de la Realization mínima de localización selectiva posterior

## Estado

```text
V1
→ suficientemente realizada

OBJETIVO POST-V1-01
→ vigente

CPV1-01 — Localización selectiva posterior
→ diferencia funcional identificada
→ experimentalmente demostrada en alcance controlado

R-PD-A
→ confirmado

CR-PV1-01
→ definido como condición mínima de realización de producto

auditoría del producto existente
→ realizada

CR-PV1-01
→ NO satisfecha por el producto actual

gap técnico
→ confirmado

núcleo del gap
→ ausencia de posibilidad ordinaria de reducción/localización selectiva posterior

Realization mínima
→ DERIVADA EN ESTE DOCUMENTO

feature general de búsqueda
→ NO DERIVADA

sistema general de organización
→ NO DERIVADO

Architecture
→ NO DERIVADA
```

---

# 1. Propósito

Este documento deriva la Realization mínima de producto necesaria para satisfacer:

```text
CPV1-01 — Localización selectiva posterior
```

a partir de:

- la delimitación del primer objetivo post-V1;
- la identificación de `CPV1-01`;
- la prueba discriminante;
- la confirmación de `R-PD-A`;
- la formulación de `CR-PV1-01`;
- la auditoría del producto existente;
- la confirmación de un gap técnico real.

La finalidad no es diseñar todavía el cambio técnico concreto.

La finalidad es determinar:

- cuál es el alcance mínimo de la nueva Realization;
- qué trayectoria ordinaria debe realizar;
- cómo satisface `CR-PV1-01.a..j`;
- qué capacidades existentes deben reutilizarse;
- cuál es el único comportamiento nuevo irreducible;
- qué queda expresamente fuera;
- cuándo podrá considerarse cerrada.

---

# 2. Antecedente estratégico

El primer objetivo post-V1 fue delimitado como:

```text
OBJETIVO POST-V1-01
— Continuidad organizada de materiales y resultados
```

Su diferencia funcional nueva fue reducida a:

```text
CPV1-01
— Localización selectiva posterior
```

La capacidad exige que una persona pueda volver a poner a su disposición un elemento previamente conservado cuando:

- existe una pluralidad;
- el elemento no está inmediatamente disponible;
- la trayectoria previa no determina de antemano cuál recuperar;
- surge una necesidad posterior;
- la persona debe poder reducir esa pluralidad hasta candidatos reconocibles;
- la decisión de pertinencia continúa correspondiendo a la persona.

---

# 3. Resultado experimental antecedente

La prueba discriminante produjo:

```text
R-PD-A
→ diferencia discriminante confirmada
```

El patrón observado fue:

```text
S+
→ localización selectiva efectiva

S−
→ persistencia sin localización efectiva

S−R
→ reconocimiento y reutilización preservados
```

Por tanto, quedó establecido que:

```text
conservación
≠
localización selectiva posterior
```

y también que:

```text
reconocimiento
≠
localización
```

```text
reutilización
≠
localización
```

---

# 4. Consecuencia funcional de producto

Mientras:

```text
OBJETIVO POST-V1-01
```

permanezca vigente, `CPV1-01` deja de ser sólo una capacidad candidata.

Pasa a ser:

```text
capacidad funcional necesaria
para satisfacer OBJETIVO POST-V1-01
```

Esto constituye una obligación funcional de producto.

No constituye todavía una obligación de:

```text
interfaz
algoritmo
buscador
índice
arquitectura
```

---

# 5. Condición mínima de realización

Se definió:

```text
CR-PV1-01
— Condición mínima de realización de localización selectiva posterior
```

como la necesidad de que exista al menos una trayectoria ordinaria de producto en la que:

1. exista una pluralidad no trivial producida por uso ordinario;
2. esa pluralidad permanezca conservada después de una separación;
3. aparezca una necesidad posterior `P`;
4. `P` no identifique de antemano qué elemento debe recuperarse;
5. el elemento pertinente no esté inmediatamente disponible;
6. la plataforma ofrezca una posibilidad de reducir la pluralidad;
7. la reducción produzca candidatos suficientemente reconocibles;
8. la plataforma no decida automáticamente la pertinencia;
9. la persona pueda seleccionar el candidato pertinente;
10. el elemento seleccionado pueda volver a participar en la actividad.

---

# 6. Resultado de la auditoría del producto existente

La auditoría examinó las trayectorias ordinarias disponibles en:

```text
App
IntegratedExperience
ResumeExperience
R-DX1-M1
```

La evidencia mostró capacidades existentes de:

```text
persistencia
recuperación
reanudación
coexistencia limitada de antecedentes
reutilización
determinación humana
```

pero no una trayectoria ordinaria que satisfaga `CR-PV1-01.a..j`.

---

# 7. Clasificación global de la auditoría

La auditoría produjo la siguiente clasificación:

```text
CR-PV1-01.a
→ parcialmente satisfecho

CR-PV1-01.b
→ satisfecho en alcance local

CR-PV1-01.c
→ no satisfecho

CR-PV1-01.d
→ no satisfecho / no demostrado

CR-PV1-01.e
→ no satisfecho

CR-PV1-01.f
→ no satisfecho

CR-PV1-01.g
→ no satisfecho

CR-PV1-01.h
→ compatible / parcialmente satisfecho

CR-PV1-01.i
→ no satisfecho

CR-PV1-01.j
→ satisfecho
```

Por tanto:

```text
CR-PV1-01
→ NO SATISFECHA por el producto actual
```

---

# 8. Hipótesis de auditoría

La hipótesis:

```text
H-AUD-PV1-01
→ el producto ya contiene una trayectoria ordinaria
  que satisface CR-PV1-01.a..j
```

queda:

```text
REFUTADA
```

La hipótesis:

```text
H-GAP-PV1-01
→ el producto conserva y reutiliza materiales,
  pero carece de una condición irreducible
  de localización selectiva posterior
```

queda:

```text
CONFIRMADA
```

---

# 9. Núcleo mínimo del gap

El núcleo del gap es:

```text
CR-PV1-01.f
→ ausencia de una posibilidad ordinaria
  de reducir una pluralidad conservada
```

La ausencia de `f` impide además realizar ordinariamente:

```text
g
→ obtención de candidatos reconocibles mediante reducción

i
→ selección humana entre candidatos localizados
```

y aparece en una trayectoria donde tampoco están realizados todavía:

```text
c
d
e
```

en la forma requerida.

---

# 10. Justificación para derivar una Realization

Ahora existe la cadena completa:

```text
objetivo estratégico vigente
↓
capacidad necesaria
↓
diferencia funcional demostrada
↓
condición mínima de realización definida
↓
producto existente auditado
↓
gap técnico confirmado
```

Por tanto, ya existe fundamento directo para derivar una nueva Realization.

La Realization no se deriva por continuidad documental.

Se deriva porque existe una diferencia funcional necesaria que el producto actual no realiza.

---

# 11. Identificador provisional

Se deriva provisionalmente:

```text
R-PV1-LS1
— Realization mínima de localización selectiva posterior
```

El identificador describe su posición metodológica.

No prescribe una arquitectura.

---

# 12. Nombre técnico neutral

El componente realizativo futuro podrá denominarse conceptualmente:

```text
SelectiveLocalizationExperience
```

Este nombre evita anticipar:

```text
Search
Library
Workspace
Organization
```

como soluciones generales no derivadas.

---

# 13. Objetivo de R-PV1-LS1

`R-PV1-LS1` debe demostrar en una trayectoria ordinaria de producto que una persona puede:

> crear y conservar una pluralidad pequeña de materiales propios; abandonar su disponibilidad inmediata; formular posteriormente una necesidad que no identifique de antemano cuál necesita; volver a hacer inspeccionable la pluralidad mediante una posibilidad suministrada por la plataforma; reconocer y seleccionar personalmente un candidato; y reactivar su participación en un trabajo posterior.

---

# 14. Alcance mínimo

La Realization debe limitarse a:

```text
una clase mínima de material
+
una pluralidad pequeña
+
persistencia local
+
una necesidad posterior
+
una única posibilidad de localización
+
selección humana
+
reactivación
```

No debe resolver ninguna cuestión más amplia.

---

# 15. Material mínimo

La primera Realization puede operar únicamente con:

```text
material textual libre
```

No se deriva necesidad de soportar todavía:

```text
imágenes
vídeos
PDF
audio
enlaces
documentos compuestos
```

La heterogeneidad de materiales pertenece a un alcance posterior.

---

# 16. Cardinalidad realizativa

La condición funcional exige:

```text
pluralidad no trivial
```

No exige exactamente cuatro elementos.

Para esta Realization se adopta provisionalmente:

```text
3 materiales
```

como cardinalidad realizativa suficiente.

---

# 17. Estatuto del número tres

La cardinalidad:

```text
3
```

es:

```text
decisión local de reducción experimental/realizativa
```

y no:

```text
requisito normativo de CPV1-01
```

No debe propagarse como límite del producto.

---

# 18. Identificadores de trabajo

Los tres materiales pueden designarse internamente como:

```text
M1
M2
M3
```

Estos identificadores tienen valor técnico local.

No constituyen una taxonomía general.

---

# 19. Constitución ordinaria

La persona debe producir:

```text
M1
M2
M3
```

mediante una actuación ordinaria de la propia Realization.

No pueden ser fixtures hardcoded preparados para la demostración.

---

# 20. Forma mínima de constitución

Puede bastar con una actuación equivalente a:

```text
Introducir contenido
↓
Conservar
```

repetida hasta constituir la pluralidad realizativa.

No se requiere todavía:

```text
título
etiqueta
categoría
carpeta
metadata
```

---

# 21. Contenido libre

Los materiales deben admitir contenido suficientemente libre para que:

```text
la persona
→ determine qué introduce
```

La Realization no debe predefinir contenidos funcionalmente equivalentes a:

```text
α
β
γ
```

como ocurría en el experimento discriminante.

---

# 22. Persistencia

Los materiales deben permanecer disponibles tras una separación efectiva.

Puede reutilizarse conceptualmente el patrón ya empleado en las realizaciones existentes:

```text
localStorage
```

No se deriva todavía:

```text
backend
base de datos
API remota
sincronización
```

---

# 23. Persistencia local no general

Si se utiliza una colección persistida:

```text
StoredMaterial[]
```

debe entenderse como:

```text
representación local de R-PV1-LS1
```

y no como:

```text
entidad general de producto
```

---

# 24. No derivación de colección de dominio

No se deriva:

```text
MaterialCollection
Library
Repository global de materiales
Workspace
```

como conceptos de dominio general.

La pluralidad es una necesidad realizativa local.

---

# 25. Separación efectiva

Después de constituir los materiales debe producirse una separación observable.

Puede realizarse mediante:

```text
nueva ejecución
remount
recarga
```

o mecanismo equivalente ya disponible.

No es necesario introducir una teoría general de sesión.

---

# 26. Condición después de la separación

Tras la separación:

```text
M1
M2
M3
→ siguen conservados
```

pero:

```text
M1
M2
M3
→ NO deben estar inmediatamente desplegados
```

Ésta es una condición necesaria para `CR-PV1-01.e`.

---

# 27. Necesidad posterior P

En la actividad posterior debe aparecer:

```text
P
```

como necesidad de trabajo.

La Realization no debe hardcodear el contenido exacto de `P`.

---

# 28. Producción ordinaria de P

La forma mínima preferible es permitir que la persona introduzca libremente su necesidad posterior.

Conceptualmente:

```text
¿Qué necesitas considerar ahora?

[entrada libre]
```

---

# 29. P no necesita interpretación automática

La plataforma no necesita comprender semánticamente `P`.

Debe bastar con que:

```text
P
→ permanezca observable como contexto humano
```

durante la localización.

Esto evita derivar prematuramente:

```text
semantic search
NLP
embeddings
ranking
```

---

# 30. Condición de no preselección

`P` no debe determinar mediante un identificador técnico cuál de:

```text
M1
M2
M3
```

debe elegirse.

No debe reducirse a:

```text
abre M2
```

ni equivalente.

---

# 31. Elemento pertinente no inmediato

Antes de activar la posibilidad de localización:

```text
ningún material
```

debe aparecer ya como respuesta activa a `P`.

En particular:

```text
el material posteriormente seleccionado
→ no está abierto
→ no está preseleccionado
→ no está marcado como pertinente
```

---

# 32. Comportamiento nuevo irreducible

La única capacidad nueva que `R-PV1-LS1` necesita introducir es:

> **hacer inspeccionable una pluralidad ordinariamente conservada cuando aparece una necesidad posterior.**

Conceptualmente puede representarse mediante:

```text
Examinar materiales anteriores
```

---

# 33. Relación con CR-PV1-01.f

Ese comportamiento realiza directamente:

```text
CR-PV1-01.f
```

porque introduce el paso:

```text
pluralidad conservada pero no inmediata
↓
posibilidad de inspección/reducción
```

que está ausente en el producto actual.

---

# 34. No derivación de búsqueda automática

La posibilidad de localización no necesita:

```text
consulta
matching
ranking
filtrado automático
```

La primera Realization puede depender de:

```text
inspección humana
```

sobre una pluralidad pequeña.

---

# 35. Reducción humana

La estructura mínima puede ser:

```text
plataforma
→ hace inspeccionables los materiales

persona
→ compara
→ descarta
→ selecciona
```

La reducción no tiene que ser calculada por la plataforma.

---

# 36. Por qué esto sigue siendo localización

Antes de activar la posibilidad:

```text
los materiales no están inmediatamente disponibles
```

Después:

```text
la pluralidad se vuelve inspeccionable
```

y la persona puede reducirla mediante juicio propio.

Por tanto, existe una transformación funcional real entre:

```text
conservado
```

y:

```text
localizable
```

---

# 37. Representación reconocible

Cuando se hacen inspeccionables, los materiales deben mostrar información suficiente para permitir:

```text
reconocimiento
comparación con P
decisión de pertinencia
```

---

# 38. Representación mínima

En esta Realization puede utilizarse:

```text
contenido textual completo
```

como representación reconocible.

No es necesario derivar todavía:

```text
snippet
preview
resumen automático
miniatura
```

---

# 39. Selección humana

Cada material inspeccionable debe admitir una actuación equivalente a:

```text
Considerar este material
```

o:

```text
Usar este material
```

---

# 40. No decisión automática de pertinencia

La plataforma no debe presentar ningún material como:

```text
pertinente
correcto
recomendado
mejor coincidencia
```

La decisión corresponde a la persona.

---

# 41. Compatibilidad con PV-005

La Realization debe mantener:

```text
plataforma
→ proporciona posibilidades

persona
→ decide pertinencia
```

No debe trasladar a la plataforma la resolución normativa de qué material debe utilizarse.

---

# 42. Reactivación

Después de seleccionar un material, éste debe volver a participar en una actividad actual.

La localización no debe terminar en mera visualización.

---

# 43. Reutilización de capacidad existente

La reactivación puede reutilizar la capacidad ya demostrada de:

```text
continuar/reutilizar un resultado disponible
```

No se deriva una capacidad nueva autónoma de reutilización.

---

# 44. Forma mínima de reactivación

Puede bastar con:

```text
material seleccionado visible
+
entrada libre de nuevo trabajo
+
acción de continuación
```

---

# 45. Resultado posterior

La persona debe poder constituir un nuevo resultado a partir de:

```text
material seleccionado
+
trabajo actual
```

La Realization no necesita definir todavía una semántica general de derivación.

---

# 46. Trayectoria completa

La trayectoria mínima queda:

```text
FASE 1
→ crear M1

FASE 1
→ crear M2

FASE 1
→ crear M3

↓
conservación

FASE 2
→ separación efectiva

↓
nueva actividad

FASE 3
→ persona formula P

↓
M pertinente no inmediato

FASE 4
→ activar posibilidad de localización

↓
M1 / M2 / M3 inspeccionables

↓
persona reconoce y selecciona M

FASE 5
→ M vuelve a participar

↓
persona produce nuevo resultado
```

---

# 47. CR-PV1-01.a

## Pluralidad ordinaria

Se satisface cuando:

```text
M1
M2
M3
```

han sido creados por la persona mediante el flujo ordinario de `R-PV1-LS1`.

No mediante fixtures.

---

# 48. CR-PV1-01.b

## Conservación tras separación

Se satisface cuando:

```text
M1
M2
M3
```

siguen existiendo después de una separación efectiva.

---

# 49. CR-PV1-01.c

## Necesidad posterior

Se satisface cuando la persona formula posteriormente:

```text
P
```

dentro de una nueva actividad.

---

# 50. CR-PV1-01.d

## Ausencia de preselección por P

Se satisface cuando:

```text
P
```

expresa una necesidad funcional pero no contiene una referencia que resuelva de antemano cuál material elegir.

---

# 51. CR-PV1-01.e

## Elemento no inmediatamente disponible

Se satisface cuando, antes de activar la localización:

```text
el candidato finalmente pertinente
→ no está desplegado
→ no está seleccionado
→ no está presentado como respuesta
```

---

# 52. CR-PV1-01.f

## Posibilidad de reducción

Se satisface mediante la única capacidad nueva irreducible:

```text
hacer inspeccionable la pluralidad conservada
```

a petición de la persona.

---

# 53. CR-PV1-01.g

## Candidatos reconocibles

Se satisface cuando los materiales inspeccionables muestran contenido suficiente para que la persona pueda reconocerlos.

---

# 54. CR-PV1-01.h

## Pertinencia no automatizada

Se satisface cuando:

```text
ningún candidato
→ queda automáticamente declarado pertinente
```

---

# 55. CR-PV1-01.i

## Selección humana

Se satisface cuando la persona puede elegir explícitamente entre los materiales inspeccionados.

---

# 56. CR-PV1-01.j

## Reactivación

Se satisface cuando el material elegido vuelve a participar en una actividad posterior y puede contribuir a un nuevo resultado.

---

# 57. Cobertura global

`R-PV1-LS1` sólo podrá considerarse suficiente si:

```text
CR-PV1-01.a ✓
CR-PV1-01.b ✓
CR-PV1-01.c ✓
CR-PV1-01.d ✓
CR-PV1-01.e ✓
CR-PV1-01.f ✓
CR-PV1-01.g ✓
CR-PV1-01.h ✓
CR-PV1-01.i ✓
CR-PV1-01.j ✓
```

---

# 58. Capacidades existentes reutilizadas

La Realization debe reutilizar conceptualmente:

```text
persistencia local
separación entre ejecuciones
restauración
entrada humana libre
constitución de nuevo resultado
reutilización
determinación humana
```

No debe volver a derivarlas como capacidades nuevas.

---

# 59. Capacidad nueva introducida

La única capacidad funcional nueva es:

```text
localización selectiva posterior
```

más específicamente:

```text
hacer inspeccionable
una pluralidad conservada
ante una necesidad posterior
```

---

# 60. Qué no constituye capacidad nueva

No deben contabilizarse como capacidades nuevas:

```text
persistir materiales
crear contenido libre
restaurar una ejecución
reutilizar un material seleccionado
```

porque ya existen precedentes realizativos suficientes.

---

# 61. Diferencia respecto del experimento

El experimento discriminante utilizó:

```text
A
B
C
D
```

como fixtures preparados.

`R-PV1-LS1` debe utilizar:

```text
M1
M2
M3
```

producidos durante uso ordinario.

---

# 62. Diferencia respecto de P experimental

En la prueba discriminante:

```text
P
```

estaba controlada experimentalmente.

En la Realization:

```text
P
```

debe surgir como entrada humana posterior.

---

# 63. Diferencia de finalidad

El experimento preguntaba:

> ¿existe una diferencia causal entre persistencia y localización?

La Realization pregunta:

> ¿puede el producto realizar esa capacidad dentro de una trayectoria ordinaria?

Son preguntas distintas.

---

# 64. No reutilización del experimento como Realization

No debe promoverse:

```text
SelectiveLocalizationExperiment
```

a Realization mediante simple cambio de nombre o ruta.

Eso conservaría:

```text
fixtures
P preparada
estructura causal experimental
```

y no satisfaría la condición anti-fixture de producto.

---

# 65. Aislamiento de realizaciones cerradas

No deben modificarse para esta nueva Realization:

```text
ResumeExperience
IntegratedExperience
DefendabilityExperience
R-DX1-M1
```

Su evidencia previa debe permanecer estable.

---

# 66. Reutilización conceptual, no contaminación

Pueden reutilizarse:

```text
patrones
convenciones
infraestructura local
```

pero no debe alterarse retrospectivamente el comportamiento de las realizaciones cerradas.

---

# 67. Exclusión — búsqueda general

Queda fuera:

```text
SearchService
SearchIndex
SearchQuery
full-text search
semantic search
ranking
```

---

# 68. Exclusión — organización general

Queda fuera:

```text
tags
folders
collections
favorites
categories
hierarchies
```

---

# 69. Exclusión — estructura global de conocimiento

Queda fuera:

```text
Library
Workspace
KnowledgeGraph
Document
Resource
Knowledge
```

como entidades fundamentales nuevas.

---

# 70. Exclusión — infraestructura

Queda fuera:

```text
backend
API
database
remote persistence
sync service
```

mientras la persistencia local sea suficiente.

---

# 71. Exclusión — inteligencia automática

Queda fuera:

```text
embeddings
semantic similarity
automatic classification
recommendations
automatic pertinence
```

---

# 72. Exclusión — escala arbitraria

La Realization no pretende demostrar:

```text
cientos
miles
millones
```

de materiales.

Demuestra la capacidad mínima dentro de una pluralidad pequeña no trivial.

---

# 73. Exclusión — heterogeneidad

No se exige todavía:

```text
texto
+
imagen
+
vídeo
+
audio
+
PDF
```

Una clase de material textual basta para la Realization mínima.

---

# 74. Exclusión — colaboración

No se deriva:

```text
multiusuario
permisos
compartición
colaboración
```

---

# 75. Exclusión — publicación

No se deriva:

```text
publicación
intercambio externo
exportación
```

---

# 76. Exclusión — historial general

No se deriva:

```text
versionado general
historial universal
undo/redo de materiales
```

---

# 77. Exclusión — provenance universal

No se deriva una teoría general de procedencia.

Sólo deben conservarse las relaciones mínimas necesarias para ejecutar la trayectoria realizativa.

---

# 78. Regla reductiva

Para cada comportamiento propuesto debe preguntarse:

> **¿Puede eliminarse y seguir siendo posible satisfacer `CR-PV1-01.a..j` en la trayectoria mínima?**

Si:

```text
sí
```

entonces ese comportamiento queda:

```text
FUERA DE R-PV1-LS1
```

---

# 79. Regla anti-generalización

Si durante la implementación aparece una abstracción que permite:

```text
buscar arbitrariamente
clasificar arbitrariamente
organizar arbitrariamente
indexar globalmente
```

debe detenerse la implementación y justificarla por separado.

No puede introducirse por comodidad técnica.

---

# 80. Regla anti-fixture

No podrá considerarse cerrada la Realization si:

```text
los materiales
→ están hardcoded

P
→ está hardcodeada

el candidato
→ está preparado de antemano para la prueba
```

La trayectoria debe producir sus propios estados mediante interacción ordinaria.

---

# 81. Regla de determinación humana

No podrá considerarse satisfecha si:

```text
la plataforma
→ decide automáticamente qué material es pertinente
```

aunque técnicamente consiga recuperar un material.

La selección debe seguir correspondiendo a la persona.

---

# 82. Regla de no trivialidad

No será suficiente una trayectoria con:

```text
1 material
```

porque no existiría localización selectiva.

Debe existir una pluralidad efectiva.

---

# 83. Regla de no disponibilidad inmediata

No será suficiente que:

```text
todos los materiales
→ estén permanentemente desplegados
```

antes de aparecer `P`.

La transición:

```text
conservado
→ nuevamente inspeccionable
```

debe ser observable.

---

# 84. Regla de no identificación exacta

No será suficiente una necesidad de la forma:

```text
abre M2
```

La actividad posterior debe permitir que el material pertinente permanezca inicialmente indeterminado.

---

# 85. Regla de reconocimiento

No será suficiente devolver identificadores técnicos opacos.

La persona debe poder reconocer los candidatos mediante representación observable.

---

# 86. Regla de reactivación

No será suficiente:

```text
localizar
→ mostrar
→ terminar
```

El material seleccionado debe poder volver a participar en trabajo posterior.

---

# 87. Tests estructurales mínimos esperables

La futura derivación técnica deberá proteger al menos:

```text
pluralidad creada por interacción
persistencia tras separación
materiales no desplegados inicialmente
P introducida después
localización activable
pluralidad inspeccionable
ninguna selección automática
todos los candidatos seleccionables
reactivación del elegido
```

Este documento no fija todavía los tests concretos.

---

# 88. Evidencia humana requerida

La Realization no podrá cerrarse únicamente con tests automáticos.

Deberá ejecutarse al menos una trayectoria humana ordinaria en la que la persona:

```text
cree los materiales
↓
separe la actividad
↓
formule P
↓
active localización
↓
reconozca candidatos
↓
seleccione uno
↓
lo reutilice
```

---

# 89. Qué debe observarse durante la prueba humana

Debe poder afirmarse:

```text
el material seleccionado
→ fue creado antes por la propia persona

el material
→ no estaba inmediatamente disponible

P
→ no daba su identificador

la plataforma
→ no decidió pertinencia

la persona
→ lo reconoció

la persona
→ lo eligió

el material
→ volvió a participar
```

---

# 90. Criterio de cierre funcional

`R-PV1-LS1` podrá considerarse funcionalmente cerrada cuando exista una trayectoria ordinaria completa que satisfaga:

```text
CR-PV1-01.a..j
```

sin recurrir a:

```text
fixtures
reconstrucción externa
identificador exacto conocido
selección automática
herramientas externas
```

---

# 91. Criterio de cierre automatizado

Además, los tests derivados deberán quedar verdes.

La suite completa del proyecto deberá mantenerse verde.

---

# 92. Criterio de cierre humano

La ejecución humana deberá confirmar al menos:

```text
localización efectiva
reconocimiento
selección humana
reactivación
```

dentro de la trayectoria ordinaria.

---

# 93. Criterio de cierre negativo

La Realization no podrá cerrarse si el único éxito depende de:

```text
contenido preparado específicamente
material ya visible
ruta conocida de antemano
memoria inmediata inducida
herramienta externa
```

---

# 94. Criterio de suficiencia

La Realization será suficiente cuando permita responder afirmativamente:

> **¿Puede una persona, dentro de una trayectoria ordinaria del producto, volver a poner a su disposición un material propio previamente conservado y no inmediatamente disponible, sin conocer de antemano su identificador, mediante una posibilidad proporcionada por la plataforma, reconocerlo, decidir que es pertinente y volver a utilizarlo?**

---

# 95. Qué no exige el cierre

El cierre no exige demostrar:

```text
generalidad universal
escala
rendimiento
búsqueda avanzada
heterogeneidad
colaboración
publicación
arquitectura definitiva
```

---

# 96. Relación con CPV1-01

Si `R-PV1-LS1` satisface todos sus criterios:

```text
CPV1-01
→ pasará de demostración experimental
  a realización mínima de producto
```

---

# 97. Relación con OBJETIVO POST-V1-01

La Realization no cerrará necesariamente todo:

```text
OBJETIVO POST-V1-01
```

pero realizará su diferencia funcional actualmente irreducible.

Después habrá que determinar si queda algún residuo estratégico adicional.

---

# 98. No equivalencia con versión nueva

La Realization:

```text
R-PV1-LS1
```

no constituye por sí sola:

```text
V2
```

ni una nueva versión estratégica completa.

---

# 99. No derivación de Architecture

La existencia de esta Realization no obliga todavía a abrir:

```text
Architecture
```

La implementación deberá permanecer local mientras ello sea suficiente.

---

# 100. No derivación de feature general

Tampoco se deriva todavía una feature general denominada:

```text
Search
```

```text
Library
```

o:

```text
Organization
```

La Realization demuestra un comportamiento mínimo de producto.

---

# 101. Estado resultante

```text
CPV1-01
→ capacidad funcional necesaria

R-PD-A
→ confirmado

CR-PV1-01
→ definido

producto existente
→ auditado

gap técnico
→ confirmado

R-PV1-LS1
→ DERIVADA

trayectoria mínima
→ DERIVADA

CR-PV1-01.a..j
→ mapeados a la Realization

capacidades reutilizadas
→ identificadas

comportamiento nuevo irreducible
→ identificado

exclusiones
→ fijadas

criterio de cierre
→ fijado

cambio técnico concreto
→ TODAVÍA NO DERIVADO

feature general
→ NO DERIVADA

Architecture
→ NO DERIVADA
```

---

# 102. Conclusión

La Realization mínima necesaria para cerrar el gap de `CPV1-01` no es un buscador ni un sistema general de organización.

Es una trayectoria ordinaria y persistente en la que:

```text
persona crea una pluralidad pequeña
↓
la pluralidad se conserva
↓
se produce una separación
↓
persona formula una necesidad posterior
↓
el material pertinente no está inmediatamente disponible
↓
la plataforma ofrece una posibilidad de inspección/localización
↓
la persona reconoce y selecciona
↓
el material elegido vuelve a participar
↓
se constituye nuevo trabajo
```

El único comportamiento funcional nuevo irreducible es:

> **volver inspeccionable una pluralidad previamente conservada cuando aparece una necesidad posterior, manteniendo en la persona la determinación de pertinencia.**

Todo mecanismo adicional requiere justificación independiente.

---

# 103. Próxima actuación

La siguiente actuación justificable es:

> **derivar el cambio técnico mínimo concreto necesario para implementar `R-PV1-LS1`, identificando exactamente los archivos nuevos o modificables, el estado mínimo, la persistencia estrictamente necesaria, los tests realizativos y las capas que deben permanecer intactas, antes de escribir código.**
