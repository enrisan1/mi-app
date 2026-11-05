# Resultado de P-ROC-02 y cierre de L-EXT-03

## Estado

**P-ROC-02 CERRADA CON RESULTADO FAVORABLE LIMITADO — L-EXT-03 CERRADA CON RESULTADO FAVORABLE LIMITADO — P-ROC-03 NO JUSTIFICADA**

---

# 1. Propósito

Este documento consolida el resultado de:

```text
P-ROC-02 — Identidad estable del Research Object entre instancias trasladadas
```

y determina si la evidencia acumulada en:

```text
P-ROC-01
P-ROC-02
```

resulta suficiente para cerrar:

```text
L-EXT-03 — Portabilidad del material de trabajo
```

dentro del alcance discriminante definido para el radar externo.

El cierre no constituye adopción de RO-Crate como solución de producto, arquitectura, persistencia, interoperabilidad general ni infraestructura de identificadores.

Su función continúa siendo reductiva:

> determinar si RO-Crate aporta una capacidad externa independiente y útil para representar composición, portabilidad e identidad declarada de un conjunto de materiales de trabajo sin duplicar las funciones ya ejercidas por PROV-O, Web Annotation Selectors o la semántica propia del proyecto.

---

# 2. Antecedente inmediato

`P-ROC-01` mostró que un prototipo mínimo podía representar C1 como un conjunto portable compuesto físicamente por:

```text
V0
T2
N1
I1
```

manteniendo además como entidades externas identificadas mediante DOI las cuatro publicaciones científicas utilizadas en N1.

La prueba mostró:

```text
composición física explícita
✔

composición declarada mediante hasPart
✔

fuentes externas descritas sin incorporarlas al payload
✔

referencias locales ensayadas
✔

traslado del crate entre ubicaciones temporales
✔
```

Sin embargo, el Root Data Entity utilizaba:

```json
"@id": "./"
```

Este identificador era suficiente dentro de cada crate concreto, pero no permitía demostrar por sí mismo que dos instancias físicamente distintas declaraban representar el mismo Research Object.

De esta diferencia se derivó `P-ROC-02`.

---

# 3. Pregunta de P-ROC-02

La pregunta establecida fue:

> **¿Puede el mismo C1 conservar una identidad estable y reconocible entre dos instancias físicamente distintas del crate, sin depender de su ruta local, sin romper las referencias relativas del payload y sin confundir identidad conceptual del Research Object con identidad material de cada copia?**

---

# 4. Hipótesis sometidas a contraste

## 4.1 H-ROC-ID-SUF

Un identificador estable del Root Data Entity puede permitir reconocer como representaciones del mismo Research Object dos crates físicamente distintos, manteniendo al mismo tiempo las referencias relativas de los recursos empaquetados.

## 4.2 H-ROC-ID-GAP

La introducción de un identificador estable podría:

- requerir infraestructura externa desproporcionada;
- introducir una identidad que el proyecto no necesita;
- romper las referencias relativas del payload;
- obligar a reescribir materiales;
- requerir PROV adicional;
- confundir identidad conceptual con identidad material;
- o atribuir al identificador garantías históricas o de autenticidad que no posee.

---

# 5. Criterios definidos

La prueba estableció:

```text
R1
→ ambas instancias conservan un identificador estable común

R2
→ el identificador no depende de /tmp ni de otra ruta local

R3
→ V0, T2, N1 e I1 continúan resolviendo mediante sus referencias relativas

R4
→ las cuatro fuentes DOI continúan identificadas sin entrar en el payload

R5
→ no se requiere reescribir los archivos materiales

R6
→ no se introduce PROV adicional sólo para resolver identidad del Root

R7
→ no se atribuye al identificador una garantía de identidad histórica
   superior a la realmente demostrada
```

---

# 6. Preparación de la prueba

Se conservaron intactos los prototipos utilizados en `P-ROC-01`.

A partir de ellos se crearon dos nuevas instancias temporales:

```text
/tmp/P-ROC-02-A
/tmp/P-ROC-02-B
```

Las operaciones realizadas sobre estas instancias no modificaron:

- los materiales originales de C1;
- el prototipo original de P-ROC-01;
- el repositorio;
- Product;
- Architecture;
- Implementation.

---

# 7. Identificador estable ensayado

Para evitar registrar infraestructura externa real o introducir dependencia innecesaria de servicios externos, se utilizó como identificador experimental:

```text
https://example.org/ro/c1
```

El propósito de este valor no era conferir persistencia real al identificador.

Su función era únicamente comprobar si:

```text
dos crates físicamente distintos
```

podían declarar:

```text
el mismo Root Data Entity
```

mediante una URI absoluta que no dependiera de sus rutas locales.

---

# 8. Modificación mínima del Root Data Entity

En ambas instancias se sustituyó:

```json
"@id": "./"
```

por:

```json
"@id": "https://example.org/ro/c1"
```

También se modificó:

```text
ro-crate-metadata.json
→ about
```

para que apuntara al mismo Root.

No se modificó ningún `@id` relativo de:

```text
VID-20190119-WA0001.mp4
T2-transcripcion-corregida.md
N1-comentario.md
I1-00-25.jpg
```

---

# 9. Corrección de descripción del Root

Durante la revisión final del prototipo se detectó que el Root Data Entity disponía de:

```text
@type
name
hasPart
```

pero no de:

```text
description
```

Se añadió en ambas instancias la misma descripción:

```text
Prototipo portable de C1 — Transformación de una fuente audiovisual
en material de trabajo, utilizado para P-ROC-02.
```

La corrección afectó exclusivamente a:

```text
ro-crate-metadata.json
```

y no modificó ningún archivo del payload.

Tras la corrección, ambos metadata continuaron siendo JSON sintácticamente válidos.

---

# 10. Nota sobre conformidad

Las pruebas realizadas comprobaron específicamente:

- sintaxis JSON;
- identificación del Root;
- correspondencia entre `about` y el Root;
- presencia de `name`;
- presencia de `description`;
- composición mediante `hasPart`;
- existencia física de los miembros locales;
- representación de fuentes externas;
- estabilidad del payload;
- igualdad entre ambas instancias.

No se ejecutó durante esta prueba un validador exhaustivo de conformidad con todas las reglas y perfiles posibles de RO-Crate.

Por tanto, el resultado no debe formularse como:

> conformidad total de P-ROC-02 con toda la especificación RO-Crate.

Debe formularse como:

> suficiencia comprobada del mecanismo RO-Crate ensayado para la diferencia concreta examinada.

---

# 11. Resultado de R1

Ambas instancias declararon:

```text
Root @id
→ https://example.org/ro/c1
```

Resultado:

```text
P-ROC-02-A
→ mismo Root @id

P-ROC-02-B
→ mismo Root @id
```

Por tanto:

```text
R1
→ SUPERADO
```

---

# 12. Resultado de R2

Las rutas físicas fueron:

```text
/tmp/P-ROC-02-A
/tmp/P-ROC-02-B
```

mientras que el identificador común fue:

```text
https://example.org/ro/c1
```

El identificador no contiene:

```text
/tmp
P-ROC-02-A
P-ROC-02-B
```

ni otra ruta física local.

Por tanto:

```text
R2
→ SUPERADO
```

---

# 13. Resultado de R3

En ambas instancias se comprobó la presencia física de:

```text
VID-20190119-WA0001.mp4
T2-transcripcion-corregida.md
N1-comentario.md
I1-00-25.jpg
```

Los cuatro recursos siguieron declarados mediante identificadores relativos.

Resultado en A:

```text
VID-20190119-WA0001.mp4
→ SÍ

T2-transcripcion-corregida.md
→ SÍ

N1-comentario.md
→ SÍ

I1-00-25.jpg
→ SÍ
```

Resultado en B:

```text
VID-20190119-WA0001.mp4
→ SÍ

T2-transcripcion-corregida.md
→ SÍ

N1-comentario.md
→ SÍ

I1-00-25.jpg
→ SÍ
```

La introducción de una identidad absoluta del Root no rompió la resolución relativa del payload.

Por tanto:

```text
R3
→ SUPERADO
```

---

# 14. Resultado de R4

N1 mantuvo cuatro referencias externas mediante DOI:

```text
https://doi.org/10.1029/2008RG000275
https://doi.org/10.1103/RevModPhys.94.015001
https://doi.org/10.1038/nnano.2015.250
https://doi.org/10.1063/1.4818538
```

En ambas instancias se comprobó para las cuatro:

```text
presente en @graph
→ SÍ

presente en hasPart
→ NO
```

Por tanto, las fuentes externas siguieron identificadas sin convertirse en payload físico.

Resultado:

```text
R4
→ SUPERADO
```

---

# 15. Resultado de R5

Se comprobaron mediante SHA-256 los cuatro archivos del payload.

## V0

```text
c863c87c26eb7b4ef6fbeea3885eab6c29001645d9217e75b9a23d63f71ff322
```

## T2

```text
f5f2a10d0429f9fbba4c0eceba46c4e6f1be2c43cfdabc1a0965e903c943f8c3
```

## N1

```text
7a9837e2ba205f48a4325008f3a26cc771f5f3693fe0b433970daf2601e423a6
```

## I1

```text
e3af695bcda9dbac708571f5035adbfe4de48182ef8493795a90c1894b10c17e
```

Los cuatro hashes coincidieron en:

```text
P-ROC-02-A
P-ROC-02-B
```

y con los valores ya comprobados en la fase anterior.

Por tanto:

```text
payload reescrito
→ NO

payload modificado
→ NO
```

Resultado:

```text
R5
→ SUPERADO
```

---

# 16. Resultado de R6

Se inspeccionó el metadata buscando indicadores de PROV utilizados previamente en el proyecto, entre otros:

```text
prov:
wasDerivedFrom
wasGeneratedBy
specializationOf
http://www.w3.org/ns/prov
```

Resultado en ambas instancias:

```text
PROV introducido
→ NO
```

Por tanto, la identidad del Root pudo ensayarse sin utilizar PROV como mecanismo auxiliar.

Resultado:

```text
R6
→ SUPERADO
```

---

# 17. Resultado de R7

R7 no exige que el identificador utilizado proporcione una garantía absoluta de identidad histórica.

Exige precisamente evitar esa sobreinterpretación.

La prueba demuestra:

```text
A y B
→ declaran el mismo Root @id

A y B
→ contienen el mismo metadata

A y B
→ contienen el mismo payload material ensayado
```

No demuestra que:

```text
cualquier futuro crate con ese @id
→ sea auténticamente el mismo Research Object
```

Tampoco demuestra:

- autenticidad criptográfica;
- cadena histórica completa;
- autoridad sobre el identificador;
- propiedad;
- control de versiones;
- inmutabilidad;
- identidad causal;
- identidad jurídica;
- identidad de cada copia material;
- resolución permanente del URI;
- persistencia real del dominio utilizado.

Por tanto:

```text
mismo Root @id
→ identidad declarada común

mismo Root @id
≠ autenticidad automática

mismo Root @id
≠ misma historia demostrada

mismo Root @id
≠ integridad futura garantizada
```

Esta delimitación evita atribuir al mecanismo una garantía superior a la observada.

Resultado:

```text
R7
→ SUPERADO
```

---

# 18. Igualdad final del metadata

Tras introducir:

```text
Root @id común
name
description
about
hasPart
citation
```

se calcularon los hashes de:

```text
P-ROC-02-A/ro-crate-metadata.json
P-ROC-02-B/ro-crate-metadata.json
```

Ambos produjeron:

```text
5a8a58dd35b71fd49d7d3212e6a99c527c881be4bd80e17dcf3d80030be856c0
```

antes de la incorporación posterior de `description`.

Tras incorporar `description`, la verificación final comprobó directamente que:

```text
metadata A
=
metadata B
```

byte a byte.

Resultado:

```text
metadata idéntico
→ SÍ
```

La igualdad del metadata no se interpreta como una garantía general de identidad histórica.

Actúa únicamente como evidencia adicional de que las dos instancias ensayadas conservaron la misma descripción del Research Object.

---

# 19. Verificación final conjunta

La comprobación final mostró para ambas instancias:

```text
Root @id
→ https://example.org/ro/c1

name
→ SÍ

description
→ SÍ

about → Root
→ SÍ

V0
→ SÍ

T2
→ SÍ

N1
→ SÍ

I1
→ SÍ
```

Para las cuatro fuentes externas:

```text
@graph
→ SÍ

hasPart
→ NO
```

Para el payload:

```text
V0 SHA-256
→ SÍ

T2 SHA-256
→ SÍ

N1 SHA-256
→ SÍ

I1 SHA-256
→ SÍ
```

Y entre ambas instancias:

```text
Root común
→ SÍ

metadata idéntico
→ SÍ
```

---

# 20. Evaluación global de P-ROC-02

Los criterios resultaron:

```text
R1
→ SUPERADO

R2
→ SUPERADO

R3
→ SUPERADO

R4
→ SUPERADO

R5
→ SUPERADO

R6
→ SUPERADO

R7
→ SUPERADO
```

Por tanto:

```text
P-ROC-02
→ CERRADA
→ FAVORABLE EN EL ALCANCE PROBADO
```

---

# 21. Qué demuestra P-ROC-02

Dentro del alcance ensayado, P-ROC-02 demuestra que:

> **dos instancias físicamente distintas de un mismo prototipo de Research Object pueden declarar una identidad estable común del Root Data Entity mediante una URI independiente de sus rutas locales, mientras conservan referencias relativas del payload, fuentes externas identificadas y materiales byte a byte intactos.**

También demuestra que esta capacidad no exige necesariamente:

- reescribir los recursos locales;
- incorporar las fuentes externas al payload;
- introducir PROV;
- registrar un DOI real;
- crear infraestructura de sincronización;
- modificar Product;
- derivar Architecture;
- derivar Implementation.

---

# 22. Qué no demuestra P-ROC-02

P-ROC-02 no demuestra:

- persistencia real de `https://example.org/ro/c1`;
- resolución pública del identificador;
- autenticidad;
- firma criptográfica;
- autoridad;
- propiedad;
- versionado;
- identidad causal entre cualquier par de crates;
- historial de modificaciones;
- identidad longitudinal de cada Data Entity;
- que un URI estable baste para resolver conflictos;
- que RO-Crate deba ser adoptado por el producto.

Tampoco demuestra conformidad exhaustiva con todos los requisitos, perfiles o recomendaciones posibles de RO-Crate.

---

# 23. Resultado acumulado de P-ROC-01 y P-ROC-02

La combinación de ambas pruebas produce:

```text
P-ROC-01
→ composición explícita
→ payload mínimo
→ fuentes externas descritas
→ traslado conservando coherencia

P-ROC-02
→ identidad declarada estable del Root
→ independencia respecto de la ruta local
→ conservación de referencias relativas
→ payload intacto
```

El resultado acumulado puede expresarse como:

```text
composición
+
autodescripción
+
portabilidad
+
identidad declarada del conjunto
```

dentro del alcance probado.

---

# 24. Independencia respecto de L-EXT-01

`L-EXT-01` había mostrado que PROV-O podía representar de forma mínima relaciones de procedencia y trayectoria.

RO-Crate no resultó necesario para expresar:

```text
used
wasGeneratedBy
wasDerivedFrom
specializationOf
```

A la inversa, P-ROC-01 y P-ROC-02 muestran una función diferente:

```text
qué recursos constituyen el conjunto
cómo se describe el conjunto
cómo puede trasladarse
qué identidad declara su Root
```

Por tanto:

```text
L-EXT-03
≠ L-EXT-01
```

en el alcance probado.

---

# 25. Independencia respecto de L-EXT-02

`L-EXT-02` había mostrado que Web Annotation Selectors podía aportar localización granular mediante:

```text
SpecificResource
FragmentSelector
TextQuoteSelector
```

RO-Crate no sustituye esa función.

P-ROC-01 mantuvo como referencias ensayadas:

```text
V0@tiempo
T2#sección
```

pero la función propia de RO-Crate fue declarar y transportar los recursos que constituyen el conjunto.

Por tanto:

```text
L-EXT-03
≠ L-EXT-02
```

en el alcance probado.

---

# 26. Relación con la semántica propia

RO-Crate tampoco determina por sí mismo:

- qué posibilidad continúa siendo pertinente;
- por qué un material debe conservarse;
- qué significa una Correspondence;
- qué pérdida resulta humanamente relevante;
- qué material puede ser legítimamente abandonado;
- cuándo un derivado sustituye suficientemente a otro;
- quién decide una renuncia.

Estas cuestiones continúan perteneciendo al dominio propio y a compromisos como:

```text
PV-005
PV-006
```

Por tanto:

```text
RO-Crate
→ estructura y portabilidad

dominio propio
→ significado y pertinencia
```

---

# 27. Resultado de L-EXT-03

La pregunta reducida de L-EXT-03 era si RO-Crate podía aportar una capacidad propia de:

```text
composición
empaquetado
autodescripción
portabilidad
```

sin duplicar innecesariamente:

```text
PROV
Selectors
semántica propia
```

P-ROC-01 y P-ROC-02 proporcionaron evidencia positiva.

Por tanto:

```text
L-EXT-03
→ CERRADA
→ RESULTADO FAVORABLE LIMITADO
```

---

# 28. Significado de “favorable limitado”

El resultado es favorable porque se observó una capacidad real y diferenciada.

Es limitado porque sólo se ha demostrado para:

```text
C1
un prototipo mínimo
dos instancias temporales
cuatro recursos locales
cuatro fuentes externas
un identificador Root experimental
```

No puede generalizarse automáticamente a:

- todos los casos del proyecto;
- todos los tipos de materiales;
- todos los esquemas de identidad;
- versionado distribuido;
- publicación permanente;
- repositorios institucionales;
- preservación a largo plazo;
- colaboración multiusuario;
- sincronización;
- firma;
- autenticidad.

---

# 29. ¿Se justifica P-ROC-03?

Tras P-ROC-02 permanecen cuestiones posibles:

- versionado;
- autenticidad;
- firmas;
- autoridad sobre identificadores;
- resolución pública;
- DOI real;
- publicación;
- repositorios;
- sincronización;
- conflictos entre copias;
- preservación a largo plazo.

Sin embargo, ninguna de ellas ha sido demostrada como necesaria para resolver la diferencia que justificó `L-EXT-03`.

Abrir una nueva prueba en este momento convertiría:

```text
reducción de una diferencia observada
```

en:

```text
expansión general del espacio tecnológico
```

sin nueva pérdida humana independiente ni nueva diferencia discriminante.

Por tanto:

```text
P-ROC-03
→ NO JUSTIFICADA
```

---

# 30. Hipótesis de suficiencia

La evidencia acumulada sostiene, en el alcance probado:

> **RO-Crate puede actuar como capa interoperable de composición, autodescripción, portabilidad e identidad declarada de un conjunto de materiales de trabajo sin sustituir la procedencia representada mediante PROV, el anclaje granular representado mediante Selectors ni la semántica propia del dominio.**

Esta conclusión se limita al mecanismo ensayado.

---

# 31. Hipótesis de gap

La hipótesis de que RO-Crate pudiera:

- exigir complejidad desproporcionada;
- duplicar necesariamente PROV;
- duplicar necesariamente Selectors;
- imponer conservación de todo material histórico;
- obligar a descargar todas las fuentes externas;
- o romper la portabilidad por depender de rutas locales;

no quedó sostenida dentro del alcance probado.

Persisten límites externos al alcance:

```text
autenticidad
versionado
resolución persistente real
autoridad
```

pero no justifican una nueva prueba dentro de L-EXT-03 en el estado actual.

---

# 32. Resultado metodológico

L-EXT-03 proporciona una lección metodológica adicional.

La composición portable no debe inferirse directamente de:

```text
todo lo que existe en una carpeta
```

ni de:

```text
todo lo que participó históricamente
```

Debe derivarse de:

```text
qué materiales necesitan formar parte
del conjunto portable en la situación examinada
```

y distinguirse de:

```text
procedencia histórica
contexto externo
artefactos técnicos
recursos reconstruibles
```

Esta separación evitó incorporar automáticamente:

```text
T1
V0-reducido
frag-01..04
lista.txt
```

al payload ensayado.

---

# 33. Resultado sobre I1

I1 merece una delimitación específica.

Materialmente:

```text
I1
→ reconstruible desde V0@00:25
```

y no se demostró una necesidad humana independiente de conservar su ejemplar físico.

Sin embargo, N1 contenía una referencia directa:

```text
I1-00-25.jpg
```

Para preservar N1 sin reescribirlo, el prototipo portable incorporó I1 con ese nombre.

Por tanto:

```text
I1 en payload
≠ nueva necesidad humana independiente

I1 en payload
→ requisito de coherencia del artefacto N1 conservado intacto
```

Esta distinción permanece válida tras el cierre.

---

# 34. Resultado sobre fuentes externas

Las cuatro publicaciones científicas demostraron otra distinción:

```text
recurso relevante
≠ recurso que debe estar físicamente empaquetado
```

En el prototipo:

```text
4 publicaciones
→ descritas en @graph
→ citadas desde N1
→ fuera de hasPart
→ no descargadas
```

La portabilidad del conjunto no exigió convertirlas en archivos locales.

---

# 35. Resultado sobre identidad

P-ROC-02 permite distinguir:

```text
identidad declarada del Research Object
```

de:

```text
identidad material de una copia concreta
```

A y B ocuparon ubicaciones físicas distintas:

```text
/tmp/P-ROC-02-A
/tmp/P-ROC-02-B
```

pero declararon:

```text
https://example.org/ro/c1
```

como Root común.

Esto demuestra independencia respecto de la ruta.

No demuestra autenticidad histórica.

La distinción debe mantenerse en cualquier utilización futura.

---

# 36. Vocabulario mínimo justificado

Dentro de L-EXT-03 quedaron ejercidos de forma suficiente conceptos equivalentes a:

```text
Root Data Entity
Dataset
File
hasPart
CreativeWork
about
conformsTo
ScholarlyArticle
citation
name
description
@id
```

Esto no significa que todos deban incorporarse al vocabulario interno del proyecto.

Significa únicamente que fueron suficientes para la prueba realizada.

No se deriva necesidad de:

- perfiles propios;
- extensiones específicas;
- infraestructura RDF;
- SPARQL;
- triplestore;
- servicio de resolución;
- DOI real;
- publicación de crates.

---

# 37. Relación final entre las tres líneas externas cerradas

Tras el cierre de L-EXT-03 queda una separación funcional provisional:

```text
L-EXT-01 / PROV-O
→ procedencia
→ trayectoria
→ derivación

L-EXT-02 / Web Annotation Selectors
→ localización granular
→ fragmentos
→ pasajes

L-EXT-03 / RO-Crate
→ composición
→ autodescripción
→ portabilidad
→ identidad declarada del conjunto
```

La semántica propia continúa cubriendo:

```text
pertinencia
función
pérdida humana
Correspondence
decisiones
continuidad
```

---

# 38. Estado estratégico

El cierre de L-EXT-03:

- no abre un nuevo horizonte;
- no modifica PLATFORM_VISION;
- no modifica V1;
- no modifica T1;
- no modifica el tablero maestro;
- no modifica Product;
- no deriva Architecture;
- no deriva Implementation;
- no adopta RO-Crate;
- no obliga a crear crates en el producto.

Se trata de un resultado del radar externo.

---

# 39. Estado del radar externo tras L-EXT-03

Las tres primeras líneas priorizadas quedan:

```text
L-EXT-01
→ CERRADA
→ resultado favorable limitado

L-EXT-02
→ CERRADA
→ resultado favorable limitado

L-EXT-03
→ CERRADA
→ resultado favorable limitado
```

Según la priorización previa, las líneas todavía no ejercidas son:

```text
L-EXT-04
→ objetos tipados

L-EXT-05
→ IA verificable
```

El cierre de L-EXT-03 no obliga automáticamente a abrir ninguna de ellas.

---

# 40. Próxima actuación justificable

La siguiente actuación no debe ser P-ROC-03.

Debe consistir en volver al radar externo consolidado y reevaluar si:

```text
L-EXT-04
L-EXT-05
```

continúan siendo:

- independientes;
- discriminantes;
- no absorbidas por L-EXT-01, L-EXT-02 y L-EXT-03;
- suficientemente baratas de probar;
- justificadas por evidencia humana o funcional real.

No debe abrirse automáticamente una nueva línea sólo porque siga apareciendo en la priorización histórica.

---

# 41. Cierre

El resultado consolidado es:

```text
P-ROC-01
→ CERRADA
→ FAVORABLE EN EL ALCANCE PROBADO

P-ROC-02
→ CERRADA
→ FAVORABLE EN EL ALCANCE PROBADO

composición explícita
→ DEMOSTRADA

portabilidad del conjunto
→ DEMOSTRADA

fuentes externas sin payload
→ DEMOSTRADO

identidad Root independiente de ruta
→ DEMOSTRADA COMO IDENTIDAD DECLARADA

autenticidad histórica
→ NO DEMOSTRADA

conformidad exhaustiva RO-Crate
→ NO EVALUADA

P-ROC-03
→ NO JUSTIFICADA

L-EXT-03
→ CERRADA
→ RESULTADO FAVORABLE LIMITADO
```

La línea queda cerrada sin adoptar RO-Crate como solución del producto y sin derivar nuevo horizonte estratégico.
