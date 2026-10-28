# Derivación del cambio técnico mínimo para localización selectiva posterior

## Estado

```text
V1
→ suficientemente realizada

primer objetivo post-V1
→ delimitado

CPV1-01 — Localización selectiva posterior
→ diferencia funcional nueva identificada

prueba discriminante
→ derivada

intervención experimental mínima
→ derivada

cambio técnico mínimo
→ derivado en este documento

feature de producto
→ NO DERIVADA

nueva Realization
→ NO DERIVADA

Architecture
→ NO DERIVADA
```

---

# 1. Propósito

Este documento deriva el cambio técnico mínimo necesario para implementar el soporte experimental definido en:

```text
docs/08-project/19-DERIVACION_INTERVENCION_EXPERIMENTAL_MINIMA_LOCALIZACION_SELECTIVA_POST_V1.md
```

La intervención anterior fijó:

```text
IE-01..IE-05
```

como comportamientos experimentales requeridos y:

```text
T-IE-01..T-IE-06
```

como condiciones automáticas mínimas de verificación.

La finalidad de este documento es determinar:

- qué archivos deben crearse;
- qué archivo existente puede modificarse;
- qué estado mínimo debe representarse;
- cómo se mapea cada `IE` al código;
- cómo se mapea cada `T-IE` a tests;
- qué capas o artefactos existentes no deben tocarse;
- qué abstracciones quedan expresamente fuera.

Este documento no implementa código.

Tampoco convierte el soporte experimental en una feature de producto.

---

# 2. Pregunta de derivación

La cuestión técnica es:

> **¿Cuál es el cambio mínimo de código que permite ejecutar `S+`, `S−` y `S−R`, verificar `T-IE-01..T-IE-06` y preparar la evaluación humana `PD-01..PD-04`, sin introducir una arquitectura o capacidad de producto no derivada?**

---

# 3. Principio rector

El cambio técnico debe respetar:

```text
soporte experimental
≠
feature
```

```text
soporte experimental
≠
Realization
```

```text
soporte experimental
≠
Architecture
```

y debe limitarse a:

> **representar de forma autocontenida los estados experimentales y la única diferencia causal requerida por la prueba.**

---

# 4. Unidad técnica mínima

La unidad técnica propuesta consta de:

```text
2 archivos nuevos
+
1 modificación mínima
```

Los archivos nuevos son:

```text
src/experiments/selective-localization/
├── SelectiveLocalizationExperiment.tsx
└── SelectiveLocalizationExperiment.test.tsx
```

La modificación debe realizarse únicamente en:

```text
el punto de entrada o resolución
de parámetros de consulta actualmente existente
```

para permitir abrir el experimento mediante:

```text
?experiment=selective-localization
```

---

# 5. Por qué se usa `experiment`

La nueva entrada no debe reutilizar:

```text
?realization=...
```

porque:

```text
experimento
≠
Realization
```

La URL debe preservar el estatus epistemológico y metodológico del artefacto.

Por tanto:

```text
?experiment=selective-localization
```

es preferible a una ruta que implique aceptación de capacidad de producto.

---

# 6. Archivo nuevo 1 — Componente experimental

Se deriva:

```text
src/experiments/selective-localization/SelectiveLocalizationExperiment.tsx
```

Su única responsabilidad debe ser:

- representar los fixtures experimentales;
- presentar la necesidad `P`;
- permitir elegir condición experimental;
- representar `S+`;
- representar `S−`;
- representar `S−R`;
- aplicar `IE-01..IE-05`;
- mantener la diferencia causal limitada a `IE-03`.

No debe asumir responsabilidades de producto.

---

# 7. Archivo nuevo 2 — Tests experimentales

Se deriva:

```text
src/experiments/selective-localization/SelectiveLocalizationExperiment.test.tsx
```

Su responsabilidad será verificar:

```text
T-IE-01
T-IE-02
T-IE-03
T-IE-04
T-IE-05
T-IE-06
```

y únicamente las condiciones estructurales necesarias para mantener válido el experimento.

---

# 8. Archivo existente modificable

Se permite modificar únicamente el archivo que actualmente decide qué experiencia o vista experimental debe renderizarse a partir de la URL.

La modificación debe ser conceptualmente equivalente a:

```text
si experiment === "selective-localization"
→ renderizar SelectiveLocalizationExperiment

en otro caso
→ mantener el comportamiento actual
```

No debe alterar la semántica de:

```text
?realization=...
```

ni modificar las Realizations cerradas.

---

# 9. Prohibición de modificar Realizations cerradas

No deben modificarse para esta intervención:

```text
IntegratedExperience
DefendabilityExperience
R-U2-M1
R-DX1-M1
```

ni otras Realizations ya consolidadas.

Razón:

```text
evidencia cerrada
≠
instrumentación nueva
```

Modificar esas realizaciones contaminaría evidencia anterior y mezclaría responsabilidades metodológicas distintas.

---

# 10. Fixtures experimentales

El componente puede definir localmente:

```text
A
B
C
D
```

como constantes.

Una representación técnica mínima puede ser equivalente a:

```text
Candidate {
  id
  cue
  content
}
```

pero esta estructura:

```text
NO constituye entidad de dominio
```

y:

```text
NO prescribe arquitectura futura
```

Debe entenderse únicamente como fixture experimental.

---

# 11. Fixture A

`A` debe contener información suficientemente distinguible asociada a:

```text
cuestión α
```

No debe ser funcionalmente equivalente a `C`.

---

# 12. Fixture B

`B` debe contener información suficientemente distinguible asociada a:

```text
cuestión β
```

No debe ser funcionalmente equivalente a `C`.

---

# 13. Fixture C

`C` representa el candidato que puede responder a la necesidad posterior:

```text
argumento γ
```

Debe permanecer exactamente igual entre:

```text
S+
S−
S−R
```

---

# 14. Fixture D

`D` debe contener información suficientemente distinguible asociada a:

```text
cuestión δ
```

No debe ser funcionalmente equivalente a `C`.

---

# 15. Necesidad experimental P

La necesidad debe definirse como constante.

Conceptualmente:

> volver a considerar el material anterior en el que aparecía el argumento γ.

La formulación no debe incluir:

```text
C
```

ni:

- identificador exacto;
- ruta;
- enlace directo;
- posición;
- nombre técnico que resuelva la selección.

---

# 16. Estado mínimo del componente

El estado local mínimo puede reducirse a:

```text
phase
condition
inspectionOpen
selectedCandidate
directControlOpen
```

No se deriva todavía una forma concreta obligatoria de implementarlo.

Lo importante es que permita representar los estados observables requeridos.

---

# 17. `phase`

`phase` debe distinguir como mínimo:

```text
setup
experiment
```

o una distinción funcional equivalente.

Su finalidad es separar:

```text
S0
```

de:

```text
S+ / S−
```

sin introducir historial general.

---

# 18. `condition`

Debe permitir distinguir:

```text
positive
negative
```

correspondientes a:

```text
S+
S−
```

No representa una condición de producto.

Es únicamente selector de brazo experimental.

---

# 19. `inspectionOpen`

Debe representar si:

```text
IE-03
```

ha sido activada.

Sólo puede ser funcionalmente utilizable en:

```text
S+
```

---

# 20. `selectedCandidate`

Debe permitir registrar qué candidato selecciona la persona después de la inspección.

Puede tomar:

```text
A
B
C
D
null
```

La aplicación no debe convertir ese valor en una evaluación automática de pertinencia.

---

# 21. `directControlOpen`

Debe utilizarse únicamente para:

```text
S−R
```

y permitir mostrar directamente `C` como control posterior.

No debe reutilizarse como mecanismo de localización.

---

# 22. Estado S0

El componente debe poder representar un estado inicial:

```text
S0
```

en el que:

```text
A
B
C
D
```

están constituidos como fixtures.

Puede existir una actuación equivalente a:

```text
[Iniciar condición positiva]

[Iniciar condición negativa]
```

La transición debe eliminar la disponibilidad inmediata suficiente para evitar una selección trivial desde S0.

---

# 23. Estado S+

Al iniciar la condición positiva debe observarse:

```text
P visible
```

pero:

```text
A, B, C, D
→ no inmediatamente desplegados
```

y:

```text
C
→ no seleccionado
→ no marcado
→ no recomendado
```

Debe existir:

```text
IE-03
```

como actuación observable.

---

# 24. Activación de IE-03

La activación de `IE-03` debe hacer inspeccionables:

```text
A
B
C
D
```

mediante representaciones suficientemente discriminantes.

No debe:

```text
seleccionar C
```

ni:

```text
ordenar C como mejor candidato
```

ni:

```text
declarar C pertinente
```

---

# 25. IE-04 después de IE-03

Después de la inspección, cualquier candidato debe poder seleccionarse.

Debe ser posible:

```text
seleccionar A
seleccionar B
seleccionar C
seleccionar D
```

La aplicación sólo registra:

```text
candidato seleccionado
```

No registra automáticamente:

```text
candidato correcto
```

ni:

```text
candidato pertinente
```

---

# 26. Estado S−

La condición negativa debe utilizar exactamente:

```text
A
B
C
D
P
```

del brazo positivo.

Pero no debe ofrecer:

```text
IE-03
```

ni otro mecanismo funcionalmente equivalente.

Los candidatos continúan formando parte del fixture experimental.

Lo que falta es únicamente la posibilidad efectiva de pasar desde P hasta su inspección selectiva.

---

# 27. Estado S−R

Desde S− debe poder activarse explícitamente:

```text
IE-05
```

mediante una actuación equivalente a:

```text
[Proporcionar material de control]
```

La actuación debe mostrar directamente:

```text
C
```

y quedar semánticamente diferenciada de cualquier localización.

---

# 28. Mapeo IE-01 → código

## IE-01 — Conservación de candidatos

Se implementa mediante:

```text
una única colección constante
de A, B, C y D
```

compartida por:

```text
S+
S−
S−R
```

No deben existir copias divergentes por condición.

---

# 29. Mapeo IE-02 → código

## IE-02 — Necesidad funcional

Se implementa mediante:

```text
una única constante P
```

utilizada sin cambios en:

```text
S+
S−
```

P no identifica directamente C.

---

# 30. Mapeo IE-03 → código

## IE-03 — Inspección experimental

Se implementa mediante una actuación visible únicamente en S+.

Conceptualmente:

```text
[Examinar materiales previos]
```

Su activación cambia:

```text
inspectionOpen
false → true
```

y hace visibles representaciones de A-D.

---

# 31. Mapeo IE-04 → código

## IE-04 — Selección humana

Después de IE-03, cada candidato debe disponer de una actuación equivalente a:

```text
[Considerar este material]
```

La actuación modifica únicamente:

```text
selectedCandidate
```

No debe producir una evaluación automatizada de pertinencia.

---

# 32. Mapeo IE-05 → código

## IE-05 — Control posterior

En S− debe existir una actuación de control separada de la localización.

Conceptualmente:

```text
[Proporcionar material de control]
```

Su activación modifica:

```text
directControlOpen
false → true
```

y muestra directamente el fixture C.

---

# 33. Mapeo T-IE-01 → test

## T-IE-01 — Ausencia de preselección

El test debe verificar que al entrar en S+ y antes de IE-03:

```text
C
→ no visible como candidato desplegado

C
→ no seleccionado

C
→ no marcado como pertinente

C
→ no presentado como respuesta a P
```

---

# 34. Mapeo T-IE-02 → test

## T-IE-02 — Inspección disponible

El test debe:

1. entrar en S+;
2. encontrar la actuación IE-03;
3. activarla;
4. comprobar que A-D se vuelven inspeccionables.

---

# 35. Mapeo T-IE-03 → test

## T-IE-03 — Sin selección automática

Después de activar IE-03:

```text
A
B
C
D
```

deben seguir disponibles como alternativas.

Debe comprobarse que:

```text
selectedCandidate
→ null
```

hasta una actuación humana.

También debe poder verificarse que los cuatro candidatos son seleccionables.

---

# 36. Mapeo T-IE-04 → test

## T-IE-04 — Ausencia de IE-03 en S−

El test debe:

1. entrar en S−;
2. comprobar que P es la misma;
3. comprobar que los fixtures son los mismos;
4. verificar que IE-03 no está disponible;
5. verificar que tampoco existe otra actuación funcionalmente equivalente.

---

# 37. Mapeo T-IE-05 → test

## T-IE-05 — Entrega directa en S−R

El test debe:

1. entrar en S−;
2. activar IE-05;
3. comprobar que C aparece directamente;
4. comprobar que esa actuación no depende de IE-03.

---

# 38. Mapeo T-IE-06 → test

## T-IE-06 — Identidad de C

El test debe asegurar que el fixture C utilizado en:

```text
S+
S−
S−R
```

procede de la misma definición constante.

No deben existir variantes específicas de C por condición.

---

# 39. Tests adicionales permitidos

Pueden añadirse únicamente tests necesarios para proteger:

```text
IE-01..IE-05
```

o:

```text
T-IE-01..T-IE-06
```

por ejemplo:

```text
A, B, C y D
son todos seleccionables
```

si eso se integra como garantía de que IE-03 no introduce una selección encubierta.

No deben añadirse tests de comportamiento no derivado.

---

# 40. Tests prohibidos

No deben codificarse afirmaciones como:

```text
C es pertinente
```

```text
C es correcto
```

```text
la persona debe seleccionar C
```

```text
el sistema debe recomendar C
```

La evaluación de pertinencia pertenece a:

```text
PD-01..PD-04
```

y a la prueba humana posterior.

---

# 41. Persistencia

No se deriva nueva persistencia para este cambio técnico.

No deben añadirse:

```text
repository
localStorage específico
persist middleware
base de datos
```

salvo que posteriormente se demuestre que son imprescindibles para ejecutar la prueba discriminante.

Los fixtures constantes bastan para la intervención actualmente derivada.

---

# 42. Interrupción

No se deriva una nueva infraestructura de sesión o interrupción.

La separación entre:

```text
S0
```

y:

```text
S+ / S−
```

puede representarse mediante una transición controlada dentro del experimento.

Si la ejecución humana demuestra posteriormente que se necesita una interrupción real adicional, deberá derivarse explícitamente.

---

# 43. Capas de producto que no deben tocarse

La intervención no debe modificar:

```text
Task
TaskList
taskActions
reducers
stores
selectors
useTasks
repositories
domain
use cases
```

ni otras capas funcionales del producto existente.

---

# 44. Realizations que no deben tocarse

No deben modificarse:

```text
IntegratedExperience
DefendabilityExperience
ResumeExperience
```

ni cualquier otro artefacto cerrado utilizado como evidencia previa.

---

# 45. Abstracciones que no deben crearse

No están derivadas:

```text
CandidateRepository
SearchService
LocalizationService
LocalizationUseCase
SearchUseCase
Library
Workspace
Collection
Resource
KnowledgeGraph
SearchIndex
```

ni equivalentes.

---

# 46. Hooks nuevos

No se deriva un hook general como:

```text
useLocalization
useSearch
useLibrary
```

El estado local del componente es suficiente mientras permita ejecutar el experimento.

---

# 47. Store nuevo

No se deriva ningún:

```text
experimentalStore
localizationStore
searchStore
```

ni extensión del store actual.

---

# 48. Reducer nuevo

No se deriva un reducer experimental.

La complejidad del estado no lo exige.

Si durante implementación apareciera la necesidad de uno, deberá demostrarse primero que la gestión local del estado es insuficiente.

---

# 49. Servicios nuevos

No se deriva ningún servicio general.

Especialmente quedan fuera:

```text
search service
index service
recommendation service
ranking service
```

---

# 50. Directorio experimental

El nuevo código debe permanecer dentro de:

```text
src/experiments/
```

o una ubicación equivalente que preserve explícitamente su carácter experimental.

No debe introducirse dentro de:

```text
src/domain/
src/use-cases/
src/features/search/
```

ni estructuras equivalentes de producto.

---

# 51. Modificación del punto de entrada

La modificación del punto de entrada debe ser mínima y aditiva.

Debe cumplir:

```text
si existe ?experiment=selective-localization
→ render experimental
```

sin cambiar:

```text
ruta normal
```

ni:

```text
?realization=...
```

---

# 52. Compatibilidad con comportamiento actual

Si no aparece:

```text
?experiment=selective-localization
```

el comportamiento actual debe permanecer idéntico.

El experimento no debe introducir efectos laterales en la aplicación normal.

---

# 53. Número esperado de archivos afectados

El cambio técnico mínimo debería afectar idealmente:

```text
3 archivos
```

```text
2 nuevos
1 modificado
```

Si la implementación requiere de forma sustantiva más archivos, deberá revisarse antes de continuar.

No constituye una prohibición absoluta.

Constituye una señal de posible ampliación no derivada.

---

# 54. Regla reductiva aplicada al código

Para cualquier archivo, abstracción o comportamiento nuevo debe preguntarse:

> **¿Puede eliminarse y seguir siendo posible ejecutar S+, S−, S−R y verificar T-IE-01..T-IE-06?**

Si:

```text
sí
```

entonces:

```text
FUERA DEL CAMBIO TÉCNICO MÍNIMO
```

---

# 55. Regla de no generalización

El componente experimental no debe evolucionar silenciosamente hacia:

```text
buscador

gestor de materiales

biblioteca

workspace

sistema de etiquetas

sistema de clasificación

índice

grafo

motor de recomendaciones
```

Cualquier generalización futura requiere derivación independiente.

---

# 56. Condición para comenzar implementación

Después de consolidar este documento puede comenzar implementación únicamente si se mantiene:

```text
alcance técnico
→ 2 archivos nuevos
  + 1 modificación mínima

IE-01..IE-05
→ único comportamiento requerido

T-IE-01..T-IE-06
→ cobertura mínima

capas de producto
→ intactas

Realizations cerradas
→ intactas

Architecture
→ no introducida
```

---

# 57. Condición para aceptar implementación

La implementación podrá considerarse técnicamente suficiente cuando:

```text
T-IE-01 ✓
T-IE-02 ✓
T-IE-03 ✓
T-IE-04 ✓
T-IE-05 ✓
T-IE-06 ✓
```

y el resto de la suite permanezca verde.

Además:

```text
S+
→ ejecutable humanamente

S−
→ ejecutable humanamente

S−R
→ ejecutable humanamente
```

---

# 58. Qué no autoriza una suite verde

Incluso si todos los tests automáticos pasan:

```text
tests verdes
≠
CPV1-01 demostrada
```

```text
tests verdes
≠
PD-01..PD-04 satisfechos
```

```text
tests verdes
≠
feature derivada
```

```text
tests verdes
≠
Realization derivada
```

La ejecución humana discriminante sigue siendo necesaria.

---

# 59. Estado resultante

```text
INTERVENCIÓN EXPERIMENTAL
→ derivada

CAMBIO TÉCNICO MÍNIMO
→ DERIVADO

ARCHIVOS NUEVOS
→ 2

ARCHIVO EXISTENTE MODIFICABLE
→ 1

SelectiveLocalizationExperiment.tsx
→ DERIVADO

SelectiveLocalizationExperiment.test.tsx
→ DERIVADO

entrada ?experiment=selective-localization
→ DERIVADA

ESTADO LOCAL MÍNIMO
→ DERIVADO

MAPEO IE → CÓDIGO
→ DERIVADO

MAPEO T-IE → TEST
→ DERIVADO

CAPAS DE PRODUCTO
→ NO TOCAR

REALIZATIONS CERRADAS
→ NO TOCAR

FEATURE
→ NO DERIVADA

REALIZATION
→ NO DERIVADA

ARCHITECTURE
→ NO DERIVADA
```

---

# 60. Conclusión

El cambio técnico mínimo queda reducido a un experimento autocontenido.

Debe consistir en:

```text
SelectiveLocalizationExperiment.tsx

SelectiveLocalizationExperiment.test.tsx

+
una modificación mínima
del punto de entrada
```

El componente representa:

```text
S0
S+
S−
S−R
```

y únicamente introduce como variable causal nueva:

```text
IE-03
```

El resto existe para mantener constantes las condiciones y hacer interpretable la prueba.

No se deriva ninguna generalización funcional o arquitectónica.

---

# 61. Próxima actuación

La siguiente actuación justificable es:

> **verificar mecánicamente este documento, consolidarlo y, sólo después, inspeccionar el punto de entrada actual del repositorio para determinar exactamente qué archivo debe modificarse antes de escribir el primer cambio de código.**
