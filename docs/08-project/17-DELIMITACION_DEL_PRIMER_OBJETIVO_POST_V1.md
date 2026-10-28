# Delimitación del primer objetivo posterior a V1

## Estado

```text
V1
→ suficientemente realizada

primer objetivo post-V1
→ delimitado provisionalmente

delta funcional nuevo identificado
→ CPV1-01 — Localización selectiva posterior

criterio mínimo de satisfacción
→ CF-PV1-01 definido

control negativo
→ CN-PV1-01 definido

nueva Realization
→ NO DERIVADA TODAVÍA
```

---

# 1. Propósito

Este documento delimita el primer objetivo estratégicamente justificado después del cierre suficiente de V1.

Su propósito no consiste en definir una nueva versión completa del producto ni en derivar automáticamente una nueva Realization.

Pretende responder a una cuestión más limitada:

> ¿qué diferencia mínima respecto de V1 está suficientemente justificada por `PLATFORM_VISION`, por la evidencia empírica disponible y por las necesidades todavía no cubiertas?

La delimitación parte del estado consolidado en:

```text
docs/08-project/16-ESTADO_ACTUAL_DE_V1.md
```

donde V1 quedó clasificada como suficientemente realizada según el alcance, capacidades, dependencias y criterios de finalización actualmente definidos.

Por tanto, la cuestión ya no es:

> ¿qué falta para terminar V1?

sino:

> ¿qué objetivo posterior a V1 está suficientemente justificado sin convertir automáticamente una capacidad histórica, posible o deseable en obligación inmediata?

---

# 2. Punto de partida

La delimitación de V1 estableció una trayectoria mínima basada en:

```text
M
↓
INCORPORAR
↓
TRABAJAR
↓
R
↓
[INTERRUPCIÓN]
↓
RECUPERAR R
↓
CONTINUAR DESDE R
↓
R'
```

V1 incorporó además:

```text
pluralidad de materiales/resultados
+
distinción suficiente
+
relación pertinente
+
reutilización en otro contexto pertinente
```

y mantuvo transversalmente:

```text
PV-005
Determinación humana efectiva

PV-006
Continuidad de posibilidades pertinentes
```

cuando sus respectivos antecedentes se activan.

La auditoría posterior mostró que las capacidades y criterios derivados para V1 se encuentran suficientemente satisfechos en el alcance actualmente definido.

Por tanto, cualquier objetivo post-V1 debe introducir una diferencia funcional real respecto de ese estado.

No basta con:

- repetir capacidades ya demostradas;
- incrementar arbitrariamente el número de materiales;
- recuperar una capacidad histórica;
- implementar una posibilidad incluida en `PLATFORM_VISION`;
- añadir complejidad técnica sin una necesidad derivada.

---

# 3. Objetivo estratégico considerado

A partir de `PLATFORM_VISION`, de la evidencia empírica disponible y de las necesidades todavía no cubiertas se considera el siguiente objetivo:

> **Hacer posible que una persona mantenga, localice y reactive de forma suficientemente organizada un conjunto creciente de materiales y resultados relacionados, sin perder las relaciones y posibilidades pertinentes que permiten continuar el trabajo.**

Como denominación de trabajo:

```text
OBJETIVO POST-V1-01
Continuidad organizada de materiales y resultados
```

Esta denominación es estratégica.

No prescribe todavía:

- arquitectura;
- modelo de dominio;
- interfaz;
- mecanismo de almacenamiento;
- taxonomía;
- sistema de búsqueda;
- estructura documental concreta.

---

# 4. Fundamento estratégico

`PLATFORM_VISION` contempla una plataforma en la que materiales y resultados pueden:

- incorporarse;
- organizarse;
- recuperarse;
- enriquecerse;
- relacionarse;
- revisarse;
- reutilizarse;
- conservarse;
- intercambiarse;
- publicarse.

V1 demuestra ya una continuidad mínima de trabajo y reutilización.

Sin embargo, no exige todavía que una persona pueda volver a encontrar selectivamente un material o resultado que ha dejado de estar inmediatamente presente dentro de una pluralidad conservada.

Por tanto, la diferencia relevante no parece residir en:

```text
más tipos de materiales
```

ni en:

```text
más relaciones
```

ni simplemente en:

```text
más elementos
```

sino en la posibilidad de mantener continuidad cuando lo pertinente ya no viene dado por la trayectoria inmediata.

---

# 5. Evidencia empírica relevante

La investigación previa ofrece situaciones en las que el trabajo se distribuye entre varios materiales heterogéneos.

En C1 de I29 se constituyeron, entre otros:

```text
V0 — vídeo original
T1 — transcripción inicial
T2 — transcripción corregida
I1 — fotograma
N1 — comentario
fuentes externas
correspondencias entre materiales
```

Ese trabajo mostró que la mera existencia física de materiales no agota la continuidad práctica.

También resultó relevante que algunas posibilidades dependieran de:

- volver a encontrar un material;
- conservar una relación;
- mantener una correspondencia;
- poder hacer participar nuevamente un elemento previo en una actividad posterior.

La Realization de defendibilidad mostró además otra forma del mismo problema general:

```text
R permanece
```

no implica necesariamente:

```text
todas las posibilidades pertinentes asociadas a R permanecen
```

Estas evidencias no derivan por sí mismas una arquitectura de organización.

Sí justifican examinar si existe un hueco entre:

```text
material conservado
```

y:

```text
material nuevamente localizable y utilizable
```

---

# 6. Diferencia mínima respecto de V1

V1 demuestra situaciones en las que un material o resultado pertinente se encuentra suficientemente disponible dentro de una trayectoria de trabajo.

El primer objetivo post-V1 introduce una situación distinta:

```text
conjunto conservado de materiales/resultados
↓
actividad posterior
↓
un elemento previo puede volver a ser pertinente
↓
ese elemento no está inmediatamente disponible
↓
la persona debe poder volver a localizarlo
```

La diferencia mínima puede expresarse así:

> **V1 asegura continuidad desde materiales o resultados suficientemente disponibles; el primer objetivo post-V1 debe asegurar continuidad cuando el elemento que puede resultar pertinente debe volver a ser localizado dentro de una pluralidad conservada.**

---

# 7. Qué significa «organizado»

El término `organizado` no debe interpretarse como una arquitectura concreta.

No significa necesariamente:

```text
carpetas
```

ni:

```text
etiquetas
```

ni:

```text
jerarquías
```

ni:

```text
grafo
```

ni:

```text
colecciones
```

A efectos de esta delimitación:

> **un conjunto está suficientemente organizado cuando una persona puede volver a localizar dentro de él elementos conservados que necesita considerar para una actividad posterior sin reconstruir externamente desde cero su existencia, identidad o ubicación.**

Por tanto:

```text
organización suficiente
≠
taxonomía determinada
```

y:

```text
organización suficiente
≠
estructura física única
```

---

# 8. Primera descomposición funcional

El objetivo fue inicialmente descompuesto en cuatro elementos candidatos:

```text
E1 — conservación como conjunto

E2 — localización selectiva posterior

E3 — reconocimiento suficiente

E4 — reactivación de participación
```

Estos cuatro elementos fueron sometidos a prueba de irreducibilidad.

La pregunta aplicada fue:

> ¿puede faltar este elemento mientras los restantes permanecen presentes y, aun así, el objetivo quedar plenamente realizado?

---

# 9. Reducción de E1 — Conservación como conjunto

La localización posterior presupone necesariamente que algo haya permanecido suficientemente conservado.

Si el elemento desaparece por completo, no existe nada que pueda volver a localizarse.

Por tanto:

```text
localización selectiva posterior
⇒
conservación suficiente
```

La conservación no necesita mantenerse como capacidad funcional autónoma.

Queda reclasificada como:

```text
condición necesaria de la localización posterior
```

Resultado:

```text
E1
→ no sobrevive como capacidad autónoma
```

---

# 10. Reducción de E3 — Reconocimiento suficiente

Una localización que devuelve un elemento imposible de distinguir suficientemente no satisface funcionalmente el objetivo.

Por tanto, en este contexto:

```text
localización suficiente
=
volver a poner el elemento a disposición
+
hacerlo suficientemente reconocible
```

El reconocimiento no necesita mantenerse como capacidad independiente.

Queda reclasificado como:

```text
condición de suficiencia de la localización
```

Resultado:

```text
E3
→ no sobrevive como capacidad autónoma
```

---

# 11. Primera reducción de capacidades

Después de las reducciones anteriores permanecieron dos candidatas:

```text
CPV1-01
Localización selectiva posterior

CPV1-02
Reactivación de participación
```

con:

```text
conservación suficiente
→ condición necesaria de CPV1-01
```

y:

```text
reconocimiento suficiente
→ condición de suficiencia de CPV1-01
```

---

# 12. Contraste de CPV1-02 con C-V1-07

`C-V1-07` ya establece que un material o resultado que participa o ha participado en un contexto A puede volver a participar pertinentemente en un contexto B suficientemente distinto.

La denominada `reactivación de participación` no introduce una transformación funcional distinta.

Una vez localizado el elemento:

```text
X localizado
↓
X vuelve a participar pertinentemente en B
```

la actuación queda cubierta por `C-V1-07`.

Por tanto:

```text
CPV1-02
→ absorbida por C-V1-07
```

La reactivación puede conservarse como descripción del resultado compuesto:

```text
localización selectiva
+
reutilización pertinente
=
reactivación efectiva
```

pero no constituye una capacidad post-V1 independiente.

---

# 13. Única capacidad funcional nueva superviviente

Tras la reducción permanece una única candidata:

```text
CPV1-01
Localización selectiva posterior
```

Formulación provisional:

> **La persona puede volver a localizar, dentro de un conjunto de materiales y resultados conservado más allá de la actuación inmediata, un elemento no inmediatamente disponible que necesita considerar para una actividad posterior, de forma suficientemente reconocible para poder decidir si resulta pertinente.**

Esta capacidad no implica que la plataforma decida qué elemento es pertinente.

La determinación final de pertinencia permanece en la persona.

---

# 14. Contraste con C-V1-04 — Recuperación tras interrupción

`C-V1-04` exige que un resultado alcanzado antes de una interrupción pueda volver a estar accesible y ser reconocible posteriormente.

Su estructura es:

```text
R determinado por la trayectoria previa
↓
interrupción
↓
R recuperado
```

`CPV1-01` introduce una situación diferente:

```text
{A, B, C, ..., X, ...}
↓
actividad posterior
↓
necesidad de considerar material previo
↓
X debe volver a localizarse dentro de la pluralidad
```

La identidad de `X` no viene necesariamente fijada por la trayectoria inmediata anterior.

Por tanto:

```text
C-V1-04
≠
CPV1-01
```

y:

```text
recuperación longitudinal
≠
localización selectiva posterior
```

---

# 15. Contraste con C-V1-06 — Distinción y relación

`C-V1-06` exige:

```text
pluralidad distinguible
+
relación pertinente
+
participación funcional de la relación
```

Pero:

```text
poder distinguir A y B cuando están presentes
```

no implica:

```text
poder volver a encontrar A o B
cuando ya no están inmediatamente disponibles
```

Del mismo modo:

```text
existencia de una relación pertinente
```

no implica:

```text
capacidad de usar esa relación
como mecanismo posterior de localización
```

Por tanto:

```text
C-V1-06
≠
CPV1-01
```

---

# 16. Contraste con C-V1-07 — Reutilización pertinente

`C-V1-07` permite que un elemento previamente utilizado vuelva a participar en otro contexto pertinente.

Pero presupone funcionalmente que el elemento ya está suficientemente disponible para poder reutilizarlo.

Su estructura es:

```text
X disponible
↓
contexto B
↓
X vuelve a participar
```

`CPV1-01` responde a la pregunta anterior:

```text
¿cómo vuelve X a estar disponible?
```

cuando X ya no se encuentra inmediatamente presente.

Por tanto:

```text
C-V1-07
empieza después del problema
que CPV1-01 pretende resolver
```

---

# 17. Contraste con la combinación C-V1-04 + C-V1-06 + C-V1-07

La combinación de:

```text
recuperación
+
pluralidad/distinción/relación
+
reutilización
```

no implica necesariamente:

```text
localización selectiva posterior
```

Es posible construir una realización en la que:

```text
C-V1-04 ✓
C-V1-06 ✓
C-V1-07 ✓
```

y, sin embargo:

```text
CPV1-01 ✗
```

Por ejemplo:

- el último resultado puede recuperarse;
- varios materiales son distinguibles;
- existen relaciones pertinentes;
- un material disponible puede reutilizarse;
- pero un material anterior no inmediatamente presente no puede volver a localizarse dentro de una pluralidad conservada.

Por tanto:

> `CPV1-01` no es consecuencia lógica de las capacidades actualmente definidas para V1.

---

# 18. Delta funcional post-V1

La diferencia funcional nueva queda reducida a:

```text
pluralidad conservada
↓
pérdida de disponibilidad inmediata
↓
actividad posterior
↓
necesidad de considerar material previo
↓
LOCALIZACIÓN SELECTIVA
↓
elemento vuelve a disponibilidad efectiva
```

Después de esa localización pueden intervenir capacidades ya existentes de V1:

```text
distinguir
relacionar
reutilizar
continuar
```

según corresponda.

---

# 19. Criterio mínimo de satisfacción

Se define provisionalmente:

## CF-PV1-01 — Localización selectiva posterior

> **Existe al menos una situación en la que varios materiales o resultados permanecen conservados más allá de la actuación inmediata y, en una actividad posterior, la persona necesita considerar material previo sin tener ya dado ni inmediatamente disponible el elemento pertinente. Utilizando las posibilidades proporcionadas por la plataforma y sin depender de una reconstrucción externa que sustituya la capacidad evaluada, la persona puede reducir la pluralidad conservada hasta volver a poner a su disposición al menos un elemento suficientemente reconocible para decidir si resulta pertinente para la actividad actual.**

---

# 20. Componentes mínimos del criterio

`CF-PV1-01` requiere conjuntamente:

```text
1. pluralidad conservada;

2. separación temporal o contextual suficiente
   respecto de la actuación inmediata;

3. elemento pertinente no inmediatamente disponible;

4. ausencia de preselección completa
   del objetivo por la trayectoria;

5. necesidad posterior de considerar
   material previo;

6. actuación humana de localización
   mediante posibilidades de la plataforma;

7. reducción efectiva de la pluralidad;

8. elemento resultante suficientemente reconocible;

9. posibilidad humana de decidir
   si el elemento resulta pertinente.
```

---

# 21. Qué no basta para satisfacer CF-PV1-01

No se considera suficiente por sí sola ninguna de las siguientes situaciones.

### 21.1 Recuperación conocida

```text
R es el último resultado
↓
botón "Continuar R"
↓
R reaparece
```

Esto puede satisfacer `C-V1-04`.

No demuestra necesariamente `CPV1-01`.

---

### 21.2 Navegación trivial

Elegir entre elementos ya inmediatamente visibles no basta.

```text
A B C
```

presentes simultáneamente:

```text
clic en B
```

no demuestra por sí solo localización selectiva posterior.

---

### 21.3 Objetivo completamente proporcionado por el experimento

Una prueba como:

```text
"Abre X"
```

cuando X aparece con ese mismo identificador exacto puede demostrar acceso.

No demuestra necesariamente que la persona pueda localizar material previo desde una necesidad posterior de trabajo.

---

### 21.4 Reconstrucción externa

No basta localizar X mediante:

- notas externas;
- capturas;
- copias paralelas;
- historial externo;
- indicaciones del experimentador;
- reconstrucción manual independiente de la plataforma.

La prueba debe depender de posibilidades disponibles en la propia situación evaluada.

---

### 21.5 Candidato único

Si sólo existe:

```text
{X}
```

no existe selección real dentro de una pluralidad.

---

### 21.6 Equivalencia funcional completa de candidatos

Si cualquiera de los elementos disponibles satisface indistintamente la misma necesidad, la prueba puede no ejercer una selección suficientemente discriminante.

No se exige una única respuesta objetivamente correcta.

Sí se requiere que la pluralidad pueda reducirse de forma funcionalmente significativa.

---

### 21.7 Pertinencia decidida íntegramente por la plataforma

La capacidad no requiere que el runtime determine autónomamente:

```text
"X es pertinente"
```

La plataforma puede facilitar localización.

La persona debe conservar la posibilidad de determinar la pertinencia cuando esa resolución le corresponde.

---

### 21.8 Aparición accidental

Si X aparece casualmente sin una actuación causal de localización, no se demuestra necesariamente la capacidad.

---

### 21.9 Persistencia física sin accesibilidad efectiva

```text
X almacenado
```

no implica:

```text
X localizable
```

La mera permanencia física del elemento no satisface `CPV1-01`.

---

# 22. Definición funcional de «selectivamente»

A efectos de este objetivo:

> **Selectivamente** significa que la persona puede pasar de una pluralidad conservada a un elemento o subconjunto suficientemente acotado en función de una necesidad posterior, sin que el objetivo esté ya determinado y directamente presentado por la trayectoria anterior.

Por tanto:

```text
selección
≠
recuperación automática del último estado
```

y:

```text
selección
≠
elección trivial entre elementos ya dados
```

---

# 23. Definición funcional de «suficientemente reconocible»

No se exige necesariamente:

- título;
- fecha;
- autor;
- etiquetas;
- preview;
- ruta;
- metadatos;
- descripción;
- clasificación.

Se exige solamente que:

> la información disponible permita a la persona distinguir suficientemente el elemento localizado de otros candidatos y decidir si merece ser considerado para la actividad actual.

El mecanismo permanece abierto.

---

# 24. Control negativo principal

Se define provisionalmente:

## CN-PV1-01 — Persistencia sin localización efectiva

```text
varios elementos permanecen conservados
+
X sigue existiendo
+
la persona necesita considerar material previo
+
X sería reutilizable si estuviera disponible
+
la persona no puede volver a localizar X
desde las posibilidades proporcionadas
por la plataforma
```

Resultado esperado:

```text
CPV1-01
→ NO SATISFECHA
```

Este control conserva deliberadamente capacidades ya demostradas por V1 y elimina únicamente la posibilidad de localización selectiva posterior.

---

# 25. Relación con PV-005

`CPV1-01` no concede a la plataforma autoridad general para determinar qué material es pertinente.

La plataforma puede proporcionar:

- acceso;
- navegación;
- indicios;
- reducción de pluralidad;
- mecanismos de localización.

Pero cuando la resolución de pertinencia corresponde a la persona y existen alternativas disponibles, debe preservarse:

```text
PV-005
Determinación humana efectiva
```

Por tanto:

```text
hacer localizable
≠
decidir pertinencia
```

---

# 26. Relación con PV-006

La capacidad introduce una nueva posibilidad susceptible de convertirse en pertinente:

```text
posibilidad de volver a localizar X
```

Si esa posibilidad continúa siendo pertinente y una actuación de la plataforma la destruye, puede activarse:

```text
PV-006
Continuidad de posibilidades pertinentes
```

La mera supervivencia física de X no basta necesariamente.

Por tanto:

```text
X existe
+
X deja de ser efectivamente localizable
```

puede constituir pérdida de una posibilidad pertinente cuando esa localización sigue siendo necesaria para continuar el trabajo.

---

# 27. Qué no se deriva

Esta delimitación no deriva todavía ninguna de las siguientes capacidades o soluciones:

```text
carpetas
etiquetas
categorías
jerarquías
colecciones
favoritos
buscador general
full-text search
búsqueda semántica
ranking
indexación avanzada
grafo de conocimiento
ontología
versionado general
historial completo
undo/redo
provenance universal
motor de recomendación
automatización de pertinencia
```

Tampoco deriva necesariamente entidades de dominio denominadas:

```text
Library
Workspace
Document
Knowledge
Collection
Folder
Resource
Asset
```

Cualquiera de ellas podría aparecer posteriormente como mecanismo justificable.

Ninguna queda prescrita por este objetivo.

---

# 28. Qué permanece expresamente fuera del primer objetivo post-V1

Quedan fuera:

### colaboración

```text
usuarios múltiples
roles
permisos
edición concurrente
equipos
organizaciones
```

### publicación e intercambio

```text
publicación pública
compartición externa
URLs públicas
distribución
exportación general
```

### organización universal

```text
taxonomía general
clasificación obligatoria
jerarquía global
```

### búsqueda universal

```text
motor de búsqueda general
recuperación semántica universal
ranking automático
```

### trazabilidad universal

```text
historial completo
procedencia exhaustiva
linaje obligatorio de todo resultado
```

### defendibilidad universal

La defendibilidad permanece como caso específico de continuidad de posibilidades pertinentes cuando corresponda.

No se transforma en una obligación general para todo material o resultado.

---

# 29. Qué tampoco se exige cuantitativamente

No se fija por ahora un umbral arbitrario como:

```text
10 materiales
100 materiales
1000 materiales
```

La diferencia que debe demostrarse es cualitativa:

```text
el elemento pertinente
no está inmediatamente disponible
```

y:

```text
debe volver a localizarse
dentro de una pluralidad conservada
```

El número concreto necesario para producir esa situación podrá determinarse experimentalmente.

---

# 30. El objetivo post-V1 no equivale todavía a V2

Debe mantenerse explícitamente:

```text
objetivo post-V1
≠
V2
```

y:

```text
CPV1-01
≠
mapa completo de capacidades de una nueva versión
```

La derivación actual identifica una diferencia funcional nueva.

No demuestra todavía que esa diferencia constituya por sí sola una versión completa del producto.

---

# 31. Tampoco se deriva todavía una nueva Realization

La existencia de una capacidad funcional nueva conceptualmente no implica necesariamente que exista un hueco técnico.

Puede ocurrir que:

```text
CPV1-01
```

ya esté satisfecha por alguna evidencia o comportamiento existente que no hubiera sido conceptualizado previamente con ese nombre.

Por tanto:

```text
capacidad nueva conceptualmente
≠
capacidad ausente técnicamente
```

No se justifica todavía abrir una nueva Realization.

---

# 32. Siguiente comprobación requerida

La siguiente actuación debe consistir en contrastar `CF-PV1-01` con la evidencia empírica y experimental ya existente.

La pregunta será:

> **¿Existe ya en el corpus del proyecto alguna situación que satisfaga `CF-PV1-01 — Localización selectiva posterior`, superando además los falsos positivos identificados?**

La comprobación deberá revisar especialmente situaciones con:

- pluralidad de materiales;
- separación temporal o contextual;
- recuperación posterior;
- relaciones entre materiales;
- reutilización;
- necesidad de volver a encontrar elementos previos.

---

# 33. Resultados admisibles de la auditoría

Antes de realizarla se fijan tres posibles resultados.

## 33.1 SATISFECHO

```text
CF-PV1-01
→ SATISFECHO
```

Existe evidencia suficiente de localización selectiva posterior.

Consecuencia:

```text
no se deriva automáticamente
una nueva Realization
```

Deberá reevaluarse cuál es el siguiente hueco estratégico real.

---

## 33.2 PARCIALMENTE SATISFECHO

Existe evidencia de algunos componentes, pero no de todos.

Por ejemplo:

```text
pluralidad conservada             ✓
separación posterior              ✓
no disponibilidad inmediata       ✓
localización efectiva             ?
reconocimiento                    ✓
independencia de ayuda externa    ✗
```

Consecuencia:

```text
diseñar prueba discriminante mínima
```

antes de derivar código.

---

## 33.3 NO SATISFECHO

Existe evidencia suficiente de que:

```text
C-V1-04 ✓
C-V1-06 ✓
C-V1-07 ✓
```

pero:

```text
CF-PV1-01 ✗
```

especialmente si se observa una situación equivalente a `CN-PV1-01`.

Consecuencia posible:

```text
evaluar derivación
de una Realization mínima
```

---

# 34. Regla metodológica resultante

La secuencia válida queda:

```text
objetivo estratégico justificado
↓
delta funcional irreducible
↓
criterio falsable
↓
control negativo
↓
contraste con evidencia existente
↓
hueco demostrado
↓
sólo entonces
actuación experimental o técnica
```

Queda excluida la secuencia:

```text
capacidad imaginable
↓
feature
↓
implementación
```

---

# 35. Estado resultante

La delimitación produce actualmente:

```text
V1
→ suficientemente realizada

OBJETIVO POST-V1-01
→ continuidad organizada de materiales y resultados

DELTA FUNCIONAL
→ CPV1-01 — Localización selectiva posterior

CONSERVACIÓN SUFICIENTE
→ condición necesaria

RECONOCIMIENTO SUFICIENTE
→ condición de suficiencia

REACTIVACIÓN
→ cubierta por C-V1-07

C-V1-04
→ no absorbe CPV1-01

C-V1-06
→ no absorbe CPV1-01

C-V1-07
→ no absorbe CPV1-01

CF-PV1-01
→ definido

CN-PV1-01
→ definido

HUECO TÉCNICO
→ TODAVÍA NO DEMOSTRADO

NUEVA REALIZATION
→ TODAVÍA NO DERIVADA

V2
→ NO DELIMITADA
```

---

# 36. Conclusión

El primer objetivo posterior a V1 ha podido reducirse sin introducir prematuramente una implementación extensa de `PLATFORM_VISION`.

La diferencia funcional actualmente justificada no consiste en construir un gestor documental, una biblioteca, un grafo de conocimiento ni un sistema general de búsqueda.

Consiste únicamente en demostrar una posibilidad que V1 no exige:

> **que una persona pueda volver a localizar selectivamente, dentro de una pluralidad conservada, un material o resultado que ya no está inmediatamente disponible y que necesita considerar en una actividad posterior.**

Esta diferencia queda representada por:

```text
CPV1-01
Localización selectiva posterior
```

y evaluada mediante:

```text
CF-PV1-01
```

con:

```text
CN-PV1-01
```

como control negativo principal.

No se deriva todavía una nueva Realization.

---

# 37. Próxima cuestión

La siguiente pregunta formal del proyecto es:

> **¿La evidencia empírica y experimental actualmente disponible satisface `CF-PV1-01 — Localización selectiva posterior`, o existe un hueco real entre las capacidades demostradas por V1 y el primer objetivo post-V1?**

Sólo la respuesta a esa pregunta podrá justificar la siguiente actuación.
