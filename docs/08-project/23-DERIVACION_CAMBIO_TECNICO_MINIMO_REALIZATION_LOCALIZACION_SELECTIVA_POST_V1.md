# Derivación del cambio técnico mínimo para la Realization de localización selectiva posterior

## Estado

```text
V1
→ suficientemente realizada

OBJETIVO POST-V1-01
→ vigente

CPV1-01
→ capacidad funcional necesaria

R-PD-A
→ confirmado

CR-PV1-01
→ definido

producto actual
→ auditado

gap técnico
→ confirmado

R-PV1-LS1
→ derivada

inspección del código real
→ realizada

cambio técnico mínimo
→ DERIVADO Y REDUCIDO EN ESTE DOCUMENTO

implementación
→ TODAVÍA NO REALIZADA

feature general de búsqueda
→ NO DERIVADA

Architecture
→ NO DERIVADA
```

---

# 1. Propósito

Este documento deriva y consolida el cambio técnico mínimo necesario para implementar:

```text
R-PV1-LS1
— Realization mínima de localización selectiva posterior
```

La derivación se apoya en dos niveles:

1. derivación funcional previa de `R-PV1-LS1`;
2. inspección mecánica del código actual para reducir la intervención al mínimo realmente necesario.

La finalidad es fijar antes de escribir código:

- archivos nuevos;
- archivo existente modificable;
- estado persistente mínimo;
- estado efímero mínimo;
- mecanismo de separación entre ejecuciones;
- comportamiento nuevo irreducible;
- tests estructurales mínimos;
- capas que deben permanecer intactas;
- criterios de cierre técnico.

---

# 2. Restricción principal

El cambio técnico sólo debe realizar la trayectoria:

```text
crear pluralidad
↓
conservar
↓
separar
↓
formular P
↓
hacer inspeccionable la pluralidad
↓
reconocer
↓
seleccionar
↓
reactivar
```

Cualquier elemento técnico que no sea necesario para ejecutar y verificar esa trayectoria queda fuera.

---

# 3. Principio de reducción

Para cada archivo, estado, función, abstracción o dependencia propuesta debe preguntarse:

> ¿Puede eliminarse y seguir siendo posible satisfacer `CR-PV1-01.a..j`?

Si la respuesta es:

```text
sí
```

el elemento queda fuera del cambio técnico mínimo.

---

# 4. Resultado de la inspección del código real

La inspección de:

```text
src/main.tsx
src/hooks/useLocalStorage.ts
repositories actuales
tests de Realizations
tests del experimento selective-localization
```

permite reducir la intervención provisional inicialmente propuesta.

El resultado consolidado es:

```text
2 archivos nuevos
+
1 archivo existente modificado
```

No se deriva repository específico nuevo.

---

# 5. Archivos definitivos

Se derivan únicamente:

```text
NUEVOS

src/realizations/selective-localization/
├── SelectiveLocalizationExperience.tsx
└── SelectiveLocalizationExperience.test.tsx
```

y una modificación mínima de:

```text
src/main.tsx
```

---

# 6. Archivo explícitamente no derivado

Se descarta:

```text
localStorageSelectiveLocalizationRepository.ts
```

y también:

```text
localStorageSelectiveLocalizationRepository.test.ts
```

porque la persistencia requerida ya está cubierta suficientemente por:

```text
useLocalStorage<T>
```

---

# 7. Fundamentación de la reducción del repository

`useLocalStorage<T>` ya proporciona:

```text
carga inicial desde localStorage
+
deserialización JSON
+
estado React
+
persistencia automática al cambiar
```

y admite directamente:

```text
StoredMaterial[]
```

Por tanto, introducir un repository específico para:

```text
loadMaterials()
saveMaterials()
```

duplicaría una capacidad existente sin introducir una diferencia funcional necesaria.

---

# 8. Diferencia respecto de repositories existentes

Los repositories actuales justifican su existencia mediante contratos específicos:

```text
previous / retained
X / Y
removeX sin modificar Y
```

`R-PV1-LS1` sólo necesita persistir:

```text
una única colección local
```

Por tanto:

```text
repository específico
→ NO JUSTIFICADO
```

---

# 9. Reutilización de useLocalStorage

La Realization debe reutilizar:

```text
src/hooks/useLocalStorage.ts
```

sin modificarlo.

Conceptualmente:

```ts
type StoredMaterial = {
  id: string;
  content: string;
};

const [materials, setMaterials] = useLocalStorage<StoredMaterial[]>(
  "selective-localization.materials",
  [],
);
```

---

# 10. No modificación de useLocalStorage

No debe modificarse:

```text
src/hooks/useLocalStorage.ts
```

porque ya satisface la necesidad realizativa.

Cualquier cambio allí requeriría justificación independiente.

---

# 11. Modelo persistente mínimo

Se deriva únicamente:

```ts
type StoredMaterial = {
  id: string;
  content: string;
};
```

y:

```text
StoredMaterial[]
```

como estado persistente.

---

# 12. Campos excluidos

No se derivan:

```text
title
tags
folder
category
createdAt
updatedAt
type
summary
relations
provenance
score
rank
```

---

# 13. Naturaleza del id

El `id` sólo sirve para:

```text
identidad técnica estable
+
selección interna
```

No tiene valor semántico.

No debe presentarse como pista funcional a la persona.

---

# 14. Generación mínima del id

No se deriva:

```text
UUID
crypto.randomUUID()
servicio de ids
value object
```

Puede bastar:

```ts
const id = `m${materials.length + 1}`;
```

produciendo:

```text
m1
m2
m3
```

---

# 15. Cardinalidad realizativa

La Realization adopta:

```text
3 materiales
```

como pluralidad pequeña suficiente.

Esta cardinalidad es local a `R-PV1-LS1`.

No constituye límite general del producto.

---

# 16. Persistencia mínima

Sólo debe persistirse:

```text
materials
```

No se deriva persistencia de:

```text
P
inspectionOpen
selectedMaterialId
reuseInput
result
fase actual
```

---

# 17. Estado efímero mínimo

La Realization necesita provisionalmente:

```text
currentMaterialInput
startedWithConstitutedPlurality
needInput
inspectionOpen
selectedMaterialId
reuseInput
result
```

Cada uno corresponde a una diferencia observable de la trayectoria.

---

# 18. currentMaterialInput

Necesario para:

```text
crear materiales mediante entrada libre
```

Tipo:

```ts
string;
```

---

# 19. startedWithConstitutedPlurality

Este estado sustituye la necesidad de una máquina de fases explícita.

Debe inicializarse una sola vez al montar:

```ts
const [startedWithConstitutedPlurality] = useState(() => materials.length >= 3);
```

Su función es distinguir:

```text
la ejecución en la que se constituyó la pluralidad
```

de:

```text
una ejecución posterior que ya empieza con la pluralidad conservada
```

---

# 20. Por qué no basta materials.length === 3

No debe hacerse:

```text
materials.length === 3
→ entrar inmediatamente en actividad posterior
```

porque al crear el tercer material se produciría el paso a la fase posterior dentro de la misma ejecución.

Eso eliminaría la separación efectiva requerida por `CR-PV1-01.b/e`.

---

# 21. Separación real

La forma mínima derivada es:

```text
crear M1-M3
↓
persistir
↓
unmount / recarga / nueva ejecución
↓
render posterior
```

En la ejecución posterior:

```text
startedWithConstitutedPlurality === true
```

---

# 22. No phase general

No se deriva:

```ts
type Phase = "constitution" | "later-activity";
```

como estado obligatorio.

La situación puede obtenerse mediante:

```text
startedWithConstitutedPlurality
```

más el estado persistido.

---

# 23. needInput

Necesario para que la persona formule:

```text
P
```

posteriormente.

Tipo:

```ts
string;
```

La plataforma no interpreta su semántica.

---

# 24. P debe preceder a la localización

No debe permitirse inspeccionar materiales con:

```text
needInput vacío
```

La acción:

```text
Examinar materiales anteriores
```

sólo debe estar disponible cuando:

```ts
needInput.trim().length > 0;
```

Esto garantiza la secuencia:

```text
P
↓
localización
```

sin interpretar `P`.

---

# 25. No botón adicional para P

No se deriva:

```text
Guardar necesidad
Aceptar necesidad
Confirmar P
```

Puede bastar:

```text
entrada libre de P
+
botón de inspección
```

con el botón deshabilitado mientras `P` esté vacío.

---

# 26. inspectionOpen

Representa el cambio irreducible principal:

```text
pluralidad conservada no inmediata
↓
pluralidad inspeccionable
```

Tipo:

```ts
boolean;
```

Inicialmente:

```text
false
```

---

# 27. selectedMaterialId

Representa únicamente:

```text
selección humana explícita
```

Tipo:

```ts
string | null;
```

Inicialmente:

```text
null
```

---

# 28. reuseInput

Necesario para demostrar que el material seleccionado vuelve a participar en nuevo trabajo.

Tipo:

```ts
string;
```

---

# 29. result

Sólo es necesario como evidencia observable de que el nuevo trabajo ha sido constituido.

Puede ser:

```ts
string | null;
```

Si durante la implementación se demuestra que un booleano o la propia representación observable del nuevo trabajo es suficiente, debe reducirse.

---

# 30. Estados expresamente no derivados

No deben aparecer:

```text
searchQuery
searchResults
ranking
score
matchedTerms
filters
sortOrder
tags
folder
collection
```

---

# 31. Fase de constitución

Mientras:

```text
startedWithConstitutedPlurality === false
```

la Realization debe permitir crear materiales hasta alcanzar tres.

---

# 32. Validación mínima

Cada material sólo necesita:

```text
contenido no vacío
```

Puede utilizarse:

```ts
value.trim().length > 0;
```

No se deriva validación semántica.

---

# 33. Creación ordinaria

Cada material debe crearse mediante interacción humana:

```text
introducir contenido
↓
conservar
```

No mediante fixtures de código.

---

# 34. Comportamiento tras conservar

Al crear un material:

```text
materials
→ recibe un nuevo StoredMaterial
```

y:

```text
currentMaterialInput
→ vuelve a vacío
```

---

# 35. Fin de constitución

Al llegar a tres materiales:

```text
la pluralidad está constituida
```

pero la misma ejecución no debe mostrar todavía la actividad posterior.

Debe requerirse una nueva ejecución.

---

# 36. Estado posterior

En una ejecución que empieza con tres materiales persistidos:

```text
startedWithConstitutedPlurality === true
```

debe mostrarse:

```text
existencia de materiales previos
+
entrada para P
```

---

# 37. No disponibilidad inicial

En esa ejecución posterior:

```text
contenido de M1
contenido de M2
contenido de M3
```

no debe mostrarse inicialmente.

Esto protege:

```text
CR-PV1-01.e
```

---

# 38. Activación de localización

Se deriva una única acción funcional nueva:

```text
Examinar materiales anteriores
```

Su efecto técnico mínimo es:

```ts
setInspectionOpen(true);
```

---

# 39. Cierre técnico del gap principal

Cuando:

```text
inspectionOpen === true
```

los materiales pasan a ser inspeccionables.

Esto realiza directamente:

```text
CR-PV1-01.f
```

---

# 40. Presentación de candidatos

Cada material inspeccionable debe mostrar:

```text
content
+
acción de selección
```

No necesita mostrar el id técnico.

---

# 41. Selección humana

Cada candidato debe permitir una actuación equivalente a:

```text
Usar este material
```

Su efecto:

```ts
setSelectedMaterialId(material.id);
```

---

# 42. Sin selección automática

Abrir la inspección no debe modificar:

```text
selectedMaterialId
```

Debe permanecer:

```text
null
```

hasta actuación humana.

---

# 43. Sin recomendación

No debe presentarse ningún candidato como:

```text
recomendado
más relevante
mejor
pertinente
```

---

# 44. Resolución técnica del seleccionado

Después de selección puede obtenerse:

```ts
const selectedMaterial = materials.find(
  (material) => material.id === selectedMaterialId,
);
```

---

# 45. find técnico no equivale a búsqueda funcional

Debe quedar explícita la diferencia:

```text
find por id ya seleccionado
→ operación técnica interna
```

frente a:

```text
localizar material pertinente
→ capacidad funcional ejercida por la persona
```

El primero no constituye sistema de búsqueda.

---

# 46. Reactivación

Cuando exista:

```text
selectedMaterial
```

debe mostrarse:

```text
material seleccionado
+
entrada de nuevo trabajo
```

---

# 47. Constitución del nuevo trabajo

Debe existir una acción equivalente a:

```text
Continuar con este material
```

que produzca evidencia observable de nuevo trabajo constituido.

---

# 48. No nuevo dominio para resultado

No se deriva:

```text
Result.ts
ReusedResult.ts
UseCase
Service
```

Puede mantenerse una representación local mínima.

---

# 49. Routing actual inspeccionado

`src/main.tsx` ya distingue:

```text
experiment
realization
```

y selecciona realizaciones mediante branches condicionales.

No se deriva router general.

---

# 50. Ruta de la nueva Realization

Se deriva:

```text
?realization=selective-localization
```

---

# 51. Diferencia respecto del experimento

Debe mantenerse:

```text
?experiment=selective-localization
→ SelectiveLocalizationExperiment
```

y:

```text
?realization=selective-localization
→ SelectiveLocalizationExperience
```

---

# 52. Modificación mínima de main.tsx

La modificación debe limitarse a:

```text
1 import
+
1 branch de render
```

---

# 53. Prioridad de routing

Debe mantenerse la prioridad actual:

```text
experiment
↓
realization
↓
App
```

La nueva Realization no debe alterar:

```text
integrated
defendability
App
```

---

# 54. Archivos que deben permanecer intactos

Salvo evidencia inesperada, no deben modificarse:

```text
src/App.tsx

src/hooks/useLocalStorage.ts

src/realizations/ru2m1/**
src/realizations/integrated/**
src/realizations/defendability/**
src/realizations/rdx1m1/**

src/experiments/selective-localization/**
```

---

# 55. Capas de tareas intactas

También deben permanecer sin modificación:

```text
Task
TaskList
taskActions
reducers
selectors
task repository
task store
useTasks
TaskForm
TaskFilters
TaskActions
```

---

# 56. No reutilización del componente experimental

No debe:

```text
importarse
envolverse
renombrarse
promoverse
```

`SelectiveLocalizationExperiment` como Realization.

Sólo pueden reutilizarse convenciones técnicas de test.

---

# 57. Convenciones de test confirmadas

El repositorio ya utiliza:

```text
render
screen
userEvent.setup
describe
it
expect
```

como convención principal de Realizations.

---

# 58. Limpieza de localStorage

Debe utilizarse:

```ts
beforeEach(() => {
  localStorage.clear();
});
```

como patrón de aislamiento entre tests.

---

# 59. Separación entre ejecuciones en tests

La convención existente es:

```ts
const firstExecution = render(...);

// interacción

firstExecution.unmount();

render(...);
```

Éste será el patrón para demostrar:

```text
persistencia
+
separación real
+
recuperación posterior
```

---

# 60. Convención heredable del experimento

Puede reutilizarse la estructura de assertions:

```text
queryByText
→ antes de localización

getByText
→ después de localización
```

y:

```text
todos los candidatos seleccionables
+
ninguno seleccionado automáticamente
```

---

# 61. No reutilización de fixtures experimentales

No deben importarse ni copiarse como datos de producto:

```text
A
B
C
D
α
β
γ
δ
P experimental
```

---

# 62. Tests definitivos

Se derivan:

```text
T-RLS-01
T-RLS-02
T-RLS-03
T-RLS-04
T-RLS-05
T-RLS-06
T-RLS-07
T-RLS-08
T-RLS-09
T-RLS-INTEGRATION-01
```

---

# 63. T-RLS-01 — constitución ordinaria

Debe verificar que la persona puede crear tres materiales mediante interacción.

Apoya:

```text
CR-PV1-01.a
```

---

# 64. T-RLS-02 — persistencia y recuperación

Debe:

```text
crear M1-M3
↓
unmount
↓
render nuevo
```

y verificar que la pluralidad sigue disponible en la ejecución posterior.

Apoya:

```text
CR-PV1-01.b
```

---

# 65. T-RLS-03 — no disponibilidad inicial

En la ejecución posterior:

```text
M1
M2
M3
```

no deben aparecer visibles antes de abrir localización.

Apoya:

```text
CR-PV1-01.e
```

---

# 66. T-RLS-04 — P posterior

Debe permitir introducir:

```text
P
```

después de la separación.

Además:

```text
P vacía
→ inspección no disponible
```

Apoya:

```text
CR-PV1-01.c
```

---

# 67. T-RLS-05 — localización activable

Después de introducir `P`:

```text
Examinar materiales anteriores
```

debe hacer visibles los tres materiales.

Apoya:

```text
CR-PV1-01.f
CR-PV1-01.g
```

---

# 68. T-RLS-06 — ausencia de preselección

Abrir inspección:

```text
no selecciona ningún material
```

y:

```text
todos los candidatos permanecen seleccionables
```

Apoya:

```text
CR-PV1-01.d
CR-PV1-01.h
```

---

# 69. T-RLS-07 — selección humana

Una actuación explícita debe seleccionar exactamente el candidato elegido.

Apoya:

```text
CR-PV1-01.i
```

---

# 70. T-RLS-08 — reactivación

Después de seleccionar un material debe poder introducirse nuevo trabajo y constituirse un resultado posterior.

Apoya:

```text
CR-PV1-01.j
```

---

# 71. T-RLS-09 — preservación literal

El contenido recuperado debe coincidir exactamente con el contenido creado inicialmente.

No debe normalizarse.

---

# 72. T-RLS-INTEGRATION-01 — trayectoria completa

Debe ejecutar:

```text
crear M1
↓
crear M2
↓
crear M3
↓
unmount
↓
render nuevo
↓
introducir P
↓
abrir inspección
↓
seleccionar material
↓
crear nuevo trabajo
↓
resultado observable
```

---

# 73. Regla anti-fixture del test de integración

El test completo debe crear:

```text
M1
M2
M3
```

mediante `userEvent`.

No debe iniciar el flujo principal con:

```text
localStorage.setItem(...)
```

---

# 74. Uso legítimo de localStorage directo

Puede usarse preparación directa sólo para tests auxiliares de:

```text
restauración aislada
robustez
casos límite
```

pero no como única evidencia de la trayectoria completa.

---

# 75. No testear pertinencia semántica

Los tests automáticos no pueden demostrar:

```text
este material es pertinente para P
```

Eso sigue siendo juicio humano.

---

# 76. Frontera automatización / evidencia humana

Tests:

```text
verifican estructura y posibilidades
```

Ejecución humana:

```text
verifica reconocimiento
+
juicio de pertinencia
+
reactivación efectiva
```

---

# 77. Ejecución humana requerida

Después de implementación debe realizarse una trayectoria en la que la persona:

```text
cree tres materiales propios
↓
interrumpa
↓
vuelva
↓
formule una necesidad posterior
↓
abra inspección
↓
reconozca un material
↓
lo seleccione
↓
lo reutilice
```

---

# 78. Control contra memoria inmediata

La prueba humana debe introducir una separación suficiente para evitar que el éxito pueda atribuirse únicamente a memoria inmediata inducida.

---

# 79. No control S− en producto

No se deriva interfaz negativa:

```text
S−
```

porque la causalidad ya fue demostrada experimentalmente.

---

# 80. No S−R

No se deriva tampoco:

```text
proporcionar material directamente
```

como control.

Eso pertenece exclusivamente al experimento.

---

# 81. Criterio anti-buscador

La implementación deja de ser mínima si incorpora sin derivación:

```text
searchQuery
matching
ranking
index
semantic similarity
automatic filtering
```

---

# 82. Criterio anti-organización

También deja de ser mínima si incorpora:

```text
tags
folders
categories
collections
hierarchies
```

---

# 83. Criterio anti-arquitectura

No deben añadirse:

```text
application layer
domain layer
infrastructure layer
service layer
use cases
```

específicos de localización mientras la Realization pueda permanecer local.

---

# 84. Criterio anti-abstracción prematura

No deben generalizarse tipos o componentes únicamente porque:

```text
podrían reutilizarse después
```

---

# 85. Dependencias nuevas

No se deriva ninguna dependencia npm nueva.

---

# 86. Cambio técnico definitivo

La implementación ideal queda confinada a:

```text
src/realizations/selective-localization/
  SelectiveLocalizationExperience.tsx
  SelectiveLocalizationExperience.test.tsx

src/main.tsx
```

---

# 87. Modelo de datos mínimo final

```ts
type StoredMaterial = {
  id: string;
  content: string;
};
```

---

# 88. Estado mínimo final

```text
materials
currentMaterialInput
startedWithConstitutedPlurality
needInput
inspectionOpen
selectedMaterialId
reuseInput
result
```

con la regla:

```text
si result puede eliminarse sin perder evidencia observable
→ eliminarlo
```

---

# 89. Transiciones mínimas

```text
0 materiales
→ constitución

crear material
→ materials + 1

3 materiales
→ pluralidad constituida
→ misma ejecución todavía no posterior

unmount

nuevo render con 3 materiales
→ actividad posterior

P no vacía
→ inspección habilitable

inspectionOpen false
→ materiales ocultos

Examinar materiales anteriores
→ inspectionOpen true

selección humana
→ selectedMaterialId

material seleccionado
→ nuevo trabajo

nuevo trabajo válido
→ resultado observable
```

---

# 90. Correspondencia con CR-PV1-01.a

```text
creación mediante UI
+
StoredMaterial[]
```

---

# 91. Correspondencia con CR-PV1-01.b

```text
useLocalStorage
+
unmount/remount
```

---

# 92. Correspondencia con CR-PV1-01.c

```text
needInput
```

---

# 93. Correspondencia con CR-PV1-01.d

```text
needInput
→ no produce selección automática
```

---

# 94. Correspondencia con CR-PV1-01.e

```text
inspectionOpen === false
→ materiales no visibles
```

---

# 95. Correspondencia con CR-PV1-01.f

```text
Examinar materiales anteriores
→ inspectionOpen = true
```

Éste es el comportamiento técnico irreducible principal.

---

# 96. Correspondencia con CR-PV1-01.g

```text
inspectionOpen === true
→ contenidos visibles y reconocibles
```

---

# 97. Correspondencia con CR-PV1-01.h

```text
selectedMaterialId === null
```

hasta actuación humana.

---

# 98. Correspondencia con CR-PV1-01.i

```text
acción humana explícita
→ selectedMaterialId = id
```

---

# 99. Correspondencia con CR-PV1-01.j

```text
selectedMaterial
+
reuseInput
→ nuevo resultado
```

---

# 100. Diferencia técnica respecto del experimento

Experimento:

```text
fixtures
P controlada
S+
S−
S−R
```

Realization:

```text
materiales creados por la persona
P posterior introducida por la persona
persistencia real
separación real
trayectoria positiva ordinaria
```

---

# 101. No compartir estado experimental

No se deriva:

```text
condition
directControlOpen
phase experimental
candidate fixtures
```

---

# 102. Secuencia futura de implementación

Cuando se autorice código:

```text
1. crear SelectiveLocalizationExperience.tsx mínimo
2. crear tests estructurales mínimos
3. implementar persistencia con useLocalStorage
4. completar trayectoria
5. modificar main.tsx
6. ejecutar tests focalizados
7. ejecutar suite completa
8. ejecutar prueba humana
```

---

# 103. Regla de pruebas verdes

Después de cada cambio significativo:

```text
tests focalizados
→ verdes
```

Antes de cerrar:

```text
suite completa
→ verde
```

---

# 104. No cierre por tests verdes

Aunque todos los tests automáticos sean verdes:

```text
R-PV1-LS1
```

no quedará cerrada sin ejecución humana.

---

# 105. Criterio de cierre técnico

La implementación técnica podrá considerarse completa cuando:

```text
2 archivos nuevos implementados
+
main.tsx modificado mínimamente
+
routing operativo
+
T-RLS-01..09 verdes
+
T-RLS-INTEGRATION-01 verde
+
suite completa verde
```

---

# 106. Criterio de cierre de Realization

`R-PV1-LS1` sólo podrá cerrarse después de:

```text
cierre técnico
+
ejecución humana
+
reconocimiento
+
selección humana
+
reactivación efectiva
```

---

# 107. Condiciones de fallo

La Realization no queda satisfecha si:

```text
los materiales están visibles desde el principio
```

o:

```text
P identifica directamente el candidato
```

o:

```text
la plataforma selecciona automáticamente
```

o:

```text
los materiales son fixtures
```

o:

```text
no existe separación real
```

o:

```text
la reutilización depende de herramienta externa
```

---

# 108. Condición de reducción posterior

Si durante implementación alguno de los estados derivados resulta innecesario:

```text
debe eliminarse
```

antes de ampliar el alcance.

---

# 109. Condición de ampliación

Si la implementación pareciera exigir:

```text
búsqueda
filtrado
metadatos
organización
repository nuevo
nueva capa
```

debe detenerse.

La ampliación requiere derivación independiente.

---

# 110. Resultado técnico consolidado

El cambio técnico mínimo queda reducido a:

```text
SelectiveLocalizationExperience.tsx
+
SelectiveLocalizationExperience.test.tsx
+
1 branch nuevo en main.tsx
```

usando:

```text
useLocalStorage<StoredMaterial[]>
```

sin:

```text
repository nuevo
router nuevo
capa nueva
dependencia nueva
sistema de búsqueda
sistema de organización
```

---

# 111. Forma compacta

```text
StoredMaterial[]
↓
useLocalStorage

primera ejecución
↓
crear M1 M2 M3

unmount

segunda ejecución
↓
P

inspectionOpen = false
↓
materiales no visibles

Examinar materiales anteriores
↓
inspectionOpen = true

persona selecciona
↓
selectedMaterialId

nuevo trabajo
↓
resultado
```

---

# 112. Estado resultante

```text
R-PV1-LS1
→ derivada

cambio técnico
→ derivado

inspección del repositorio
→ completada

repository específico
→ reducido / no derivado

useLocalStorage
→ reutilizado sin modificación

archivos definitivos
→ 2 nuevos + 1 modificado

estado mínimo
→ reducido

separación real
→ fijada mediante nueva ejecución

tests
→ reducidos y consolidados

capas protegidas
→ delimitadas

criterio técnico de cierre
→ fijado

implementación
→ TODAVÍA NO INICIADA
```

---

# 113. Próxima actuación

La siguiente actuación justificable es:

> **implementar `R-PV1-LS1` exactamente dentro del alcance técnico ya derivado, comenzando por los dos archivos nuevos y manteniendo `src/main.tsx` como única modificación de código existente, con verificación incremental mediante tests focalizados antes de ejecutar la suite completa.**
