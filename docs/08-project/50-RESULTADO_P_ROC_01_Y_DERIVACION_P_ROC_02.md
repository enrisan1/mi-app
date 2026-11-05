# Resultado de P-ROC-01 y derivación de P-ROC-02

## Estado

**P-ROC-01 CERRADA CON RESULTADO FAVORABLE LIMITADO — P-ROC-02 DERIVADA — L-EXT-03 CONTINÚA ABIERTA**

---

# 1. Propósito

Este documento consolida el resultado de `P-ROC-01`, prueba derivada dentro de `L-EXT-03 — Portabilidad del material de trabajo`, y determina si la evidencia obtenida permite cerrar dicha línea externa o si permanece una diferencia independiente que justifique una prueba adicional.

La prueba no pretende adoptar RO-Crate como arquitectura de producto, mecanismo de persistencia, formato obligatorio ni solución general de interoperabilidad.

Su función es estrictamente discriminante:

> comprobar si RO-Crate aporta una capacidad de composición, autodescripción y portabilidad del material de trabajo que no haya quedado ya absorbida por PROV-O, Web Annotation Selectors o la semántica propia del proyecto.

---

# 2. Antecedente

`L-EXT-03` fue inicialmente formulada alrededor de la posibilidad de representar el material de trabajo como un Research Object portable.

La reevaluación posterior a `L-EXT-01` y `L-EXT-02` obligó a reducir su alcance.

PROV-O había mostrado capacidad suficiente, en el alcance probado, para representar relaciones mínimas de procedencia y trayectoria.

Web Annotation Selectors había mostrado capacidad suficiente, en el alcance probado, para localizar granularmente fragmentos temporales y textuales.

Por tanto, `L-EXT-03` no podía justificarse por procedencia ni por anclaje granular.

La diferencia restante fue reformulada como:

```text
RO-Crate
→ composición explícita
→ empaquetado
→ autodescripción
→ portabilidad del conjunto
```

sin sustituir:

```text
PROV
→ trayectoria y derivación

Selectors
→ localización granular

dominio propio
→ pertinencia y significado de las relaciones
```

---

# 3. Revisión reductiva previa de C1

Antes de construir el prototipo se revisó el cierre de `C1 — Transformación de una fuente audiovisual en material de trabajo`.

La revisión confirmó que `PV-006 — Continuidad de posibilidades pertinentes` no obliga a conservar:

- todas las posibilidades técnicamente existentes;
- toda diferencia histórica;
- toda representación;
- toda trayectoria;
- toda composición;
- todo derivado;
- ni todo ejemplar material.

La conservación se justifica cuando la pérdida impide una posibilidad que continúa siendo pertinente.

Por tanto, `P-ROC-01` no podía definirse como:

> empaquetar todo lo que participó históricamente en C1.

Debía determinar un conjunto suficientemente reducido.

---

# 4. Materiales examinados

La composición histórica documentada de C1 incluyó, entre otros:

- V0 — vídeo original;
- T1 — transcripción;
- T2 — transcripción corregida;
- I1 — fotograma;
- N1 — comentario y material de trabajo;
- fuentes externas;
- correspondencias;
- derivados experimentales;
- reducción y reutilización de materiales.

La situación material actual mostró además que:

```text
carpeta física actual
≠
composición histórica completa
```

T1 seguía existiendo fuera de la carpeta actual en varias variantes, pero la documentación disponible no permitía identificar con seguridad cuál de esos archivos concretos correspondía a la entidad histórica `T1`.

Por tanto, no se introdujo una identidad artificial entre `T1` y un archivo determinado.

---

# 5. Reducción de materiales

## 5.1 V0

V0 desempeñó funciones reales como:

- fuente de la transcripción;
- origen del fotograma;
- referencia para afirmaciones;
- destino de navegación temporal;
- criterio para verificar T2;
- evidencia para corregir T2.

La prueba histórica con `V0-reducido` mostró además que conservar únicamente fragmentos conocidos no preservaba suficientemente la posibilidad general de volver al original para verificar T2 cuando resultara necesario.

Resultado:

```text
V0
→ inclusión justificada
```

---

## 5.2 T2

T2 constituye la representación textual corregida utilizada posteriormente en el material de trabajo.

N1 mantiene correspondencias explícitas con secciones de T2 y la distinción entre contenido original, representación textual e interpretación resultó funcionalmente relevante para revisión, procedencia, contraste y continuación.

Resultado:

```text
T2
→ inclusión justificada
```

---

## 5.3 N1

N1 contiene:

- comentarios;
- preguntas;
- interpretaciones;
- enlaces a V0;
- enlaces a T2;
- contraste con fuentes externas;
- reformulaciones;
- resultados posteriores.

Resultado:

```text
N1
→ inclusión justificada
```

---

## 5.4 I1

I1 fue comprobado materialmente como fotograma correspondiente a V0 en `00:25`.

El archivo I1 resultó byte a byte idéntico al fotograma extraído desde V0 mediante el procedimiento ensayado.

Por tanto, su existencia física independiente no quedó demostrada como necesidad humana autónoma.

Sin embargo, N1 contiene una referencia directa al archivo:

```text
I1-00-25.jpg
```

La ubicación original actual era:

```text
imagenes/I1-00-25.jpg
```

mientras que la referencia escrita en N1 no incluía esa subcarpeta.

Para conservar N1 sin modificarlo dentro de la prueba de portabilidad, I1 fue incorporado al raíz del prototipo con el nombre esperado.

Resultado:

```text
mínimo funcional abstracto
→ V0 + T2 + N1

mínimo portable conservando N1 intacto
→ V0 + T2 + N1 + I1
```

I1 entra, por tanto, en el segundo conjunto por coherencia de la representación actual de N1 y no porque se haya demostrado una nueva necesidad humana independiente.

---

## 5.5 T1

T1 quedó documentado como intermediario histórico en la obtención de T2.

La investigación previa había reducido explícitamente la idea de que toda participación histórica debiera conservarse.

No se demostró que la ausencia de T1 impidiera una posibilidad actualmente pertinente dentro de `P-ROC-01`.

Resultado:

```text
T1
→ no incluido en el payload mínimo
```

---

## 5.6 V0-reducido

`V0-reducido` fue un derivado experimental relevante para comprobar una reducción material controlada.

La documentación mostró que la posibilidad pertinente general era poder volver a V0 cuando resultara necesario.

No se encontró una función posterior independiente cuya conservación exigiera mantener `V0-reducido`.

Resultado:

```text
V0-reducido
→ históricamente significativo
→ experimentalmente relevante
→ no necesario en el payload mínimo ensayado
```

---

## 5.7 Artefactos técnicos de reducción

Los fragmentos técnicos y el manifiesto de concatenación:

```text
frag-01.mp4
frag-02.mp4
frag-03.mp4
frag-04.mp4
lista.txt
```

no mostraron fundamento independiente para formar parte del Research Object mínimo.

Resultado:

```text
artefactos técnicos
→ excluidos del payload mínimo
```

---

# 6. Fuentes externas

N1 contiene cuatro fuentes científicas explícitas:

- Wu & Liu (2010);
- Singh & O’Neill (2022);
- England (2015);
- England (2013).

Las cuatro disponen de identificadores DOI.

La consulta de esas fuentes permitió corregir y matizar interpretaciones derivadas inicialmente del vídeo.

Por tanto, su identidad resulta relevante para reconstruir el contraste intelectual.

Sin embargo, no se demostró necesidad de descargar ni empaquetar físicamente los artículos.

El prototipo representó las cuatro publicaciones como `ScholarlyArticle` dentro de `@graph`, identificadas mediante sus DOI, y las relacionó con N1 mediante `citation`.

La comprobación automática mostró para las cuatro:

```text
presente en @graph
→ SÍ

presente en hasPart
→ NO
```

Resultado:

> RO-Crate permitió describir fuentes externas relevantes sin convertirlas en payload físico.

---

# 7. Construcción del prototipo

Se creó un prototipo exclusivamente temporal en:

```text
/tmp/P-ROC-01
```

sin modificar:

- los materiales originales;
- el repositorio;
- la arquitectura;
- el producto.

El payload final ensayado fue:

```text
VID-20190119-WA0001.mp4
T2-transcripcion-corregida.md
N1-comentario.md
I1-00-25.jpg
```

más:

```text
ro-crate-metadata.json
```

---

# 8. Integridad material

Se calcularon hashes SHA-256 de los materiales originales y de las copias incorporadas al prototipo.

Los resultados coincidieron para:

```text
V0
T2
N1
I1
```

Por tanto, los materiales ensayados fueron copias materialmente idénticas de los originales correspondientes.

---

# 9. Composición declarada

El Root Data Entity declaró mediante `hasPart`:

```text
V0
T2
N1
I1
```

La comprobación automática mostró que:

```text
cada hasPart
→ existe físicamente

cada hasPart
→ posee una entidad propia en @graph

cada entidad
→ aparece una única vez
```

La composición declarada y la composición física resultaron coherentes.

---

# 10. Correspondencias internas comprobadas

## 10.1 T2

N1 referencia tres encabezados de T2:

```text
T2-Entropía-y-caos
T2-Radiación-y-vida
T2-Orden-y-caos
```

Los tres encabezados fueron comprobados en el T2 incluido en el crate.

Resultado:

```text
3 / 3
→ presentes
```

---

## 10.2 V0

N1 referencia posiciones temporales:

```text
25 s
38 s
58 s
85 s
110 s
```

La duración real comprobada de V0 fue:

```text
122.874744 s
```

Todas las posiciones temporales se encontraron dentro del recurso.

Resultado:

```text
5 / 5
→ válidas
```

---

## 10.3 I1

N1 referencia:

```text
I1-00-25.jpg
```

El archivo fue incorporado con ese nombre al payload del prototipo.

Resultado:

```text
referencia local
→ resoluble dentro del prototipo
```

---

# 11. Prueba de traslado

Para comprobar la portabilidad se creó una segunda copia completa:

```text
/tmp/P-ROC-01-MOVIDO
```

La copia se realizó sin modificar el prototipo original.

Se compararon mediante SHA-256:

```text
V0
T2
N1
I1
ro-crate-metadata.json
```

Los cinco pares de hashes coincidieron.

---

# 12. Comprobación desde la nueva ubicación

Todas las comprobaciones posteriores se realizaron utilizando exclusivamente:

```text
/tmp/P-ROC-01-MOVIDO
```

sin recurrir a la ruta del prototipo original.

Desde la nueva ubicación se comprobó:

```text
metadata JSON cargable
✔

Root Data Entity disponible
✔

4 hasPart físicamente presentes
✔

4 fuentes DOI descritas en @graph
✔

4 fuentes DOI fuera del payload físico
✔

I1 resoluble
✔

3 encabezados T2 presentes
✔

5 posiciones temporales V0 válidas
✔
```

---

# 13. Resultado de P-ROC-01

Dentro del alcance probado:

> **un RO-Crate mínimo puede trasladar el material de C1 como un conjunto explícitamente descrito manteniendo coherentes su composición física, su composición declarada, las referencias locales ensayadas y las fuentes científicas externas identificadas.**

Por tanto:

```text
P-ROC-01
→ FAVORABLE
```

---

# 14. Qué aporta RO-Crate en el alcance probado

La prueba permitió distinguir funciones que no habían quedado cubiertas por las líneas externas anteriores:

```text
RO-Crate
→ composición explícita
→ empaquetado
→ autodescripción
→ portabilidad del conjunto

PROV
→ trayectoria
→ derivación
→ participación histórica

Selectors
→ localización granular

dominio propio
→ pertinencia
→ significado funcional
→ correspondencias
```

La ganancia observada no exige sustituir ninguna de esas capas.

---

# 15. Qué no demuestra P-ROC-01

P-ROC-01 no demuestra:

- que RO-Crate deba adoptarse como formato del producto;
- que toda actividad deba generar un crate;
- que todo material histórico deba conservarse;
- que `hasPart` determine pertinencia;
- que RO-Crate sustituya PROV;
- que RO-Crate sustituya Selectors;
- que represente por sí mismo la semántica completa de `Correspondence`;
- que resuelva identidad longitudinal de los materiales;
- que resuelva identidad estable del Research Object entre copias;
- que T1 deba incorporarse;
- que `V0-reducido` deba incorporarse;
- que las fuentes externas deban descargarse;
- que sea necesario un DOI para el prototipo;
- que deba modificarse Product, Architecture o Implementation.

---

# 16. Residuo observado tras P-ROC-01

El prototipo utilizó:

```json
"@id": "./"
```

para el Root Data Entity.

Esta identificación es suficiente para reconocer el Root dentro de cada Attached RO-Crate ensayado.

Sin embargo, después de copiar el crate:

```text
/tmp/P-ROC-01
/tmp/P-ROC-01-MOVIDO
```

ambos contienen un Root identificado localmente como:

```text
./
```

La prueba demuestra que ambas copias conservan su estructura.

No demuestra, sin embargo, cómo un sistema externo puede determinar si:

```text
crate A
y
crate B
```

representan:

```text
el mismo Research Object trasladado/copiadо
```

o:

```text
dos Research Objects distintos
```

La identidad estructural no equivale automáticamente a identidad estable.

---

# 17. Justificación de P-ROC-02

La cuestión anterior no queda absorbida por:

```text
PROV
→ porque no es primariamente trayectoria entre materiales

Selectors
→ porque no es localización granular

PV-006
→ porque aquí se examina si una identidad puede conservarse
   sin exigir identidad material literal

composición física
→ porque dos copias materialmente equivalentes
   pueden seguir careciendo de un identificador común explícito
```

RO-Crate permite que el Root Data Entity utilice un identificador diferente de `./` y recomienda identificadores persistentes cuando se encuentren disponibles.

Por tanto, la diferencia es propia del mecanismo estudiado y puede probarse con coste reducido.

Resultado:

```text
P-ROC-02
→ DERIVADA
```

---

# 18. Pregunta de P-ROC-02

`P-ROC-02 — Identidad estable del Research Object entre instancias trasladadas`

Pregunta:

> **¿Puede el mismo C1 conservar una identidad estable y reconocible entre dos instancias físicamente distintas del crate, sin depender de su ruta local, sin romper las referencias relativas del payload y sin confundir identidad conceptual del Research Object con identidad material de cada copia?**

---

# 19. Hipótesis de P-ROC-02

## H-ROC-ID-SUF

Un identificador estable del Root Data Entity puede permitir reconocer como representaciones del mismo Research Object dos crates físicamente distintos, manteniendo al mismo tiempo las referencias relativas de los recursos empaquetados.

## H-ROC-ID-GAP

La introducción de un identificador estable puede:

- requerir infraestructura externa desproporcionada;
- introducir una identidad que el proyecto no necesita;
- confundir el Research Object conceptual con una versión o copia material;
- o no aportar capacidad reconstructiva adicional respecto de la composición ya ensayada.

---

# 20. Criterios mínimos de P-ROC-02

La prueba deberá comprobar al menos:

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

# 21. Alcance prohibido de P-ROC-02

P-ROC-02 no debe convertirse automáticamente en:

- registro de DOI;
- publicación de C1;
- adopción de Zenodo;
- creación de infraestructura de identificadores;
- diseño de repositorio distribuido;
- versionado general;
- implementación de sincronización;
- arquitectura de identidad global;
- modificación de Product;
- nuevo horizonte estratégico.

La prueba debe utilizar el mecanismo mínimo suficiente para observar la diferencia.

---

# 22. Estado de L-EXT-03

P-ROC-01 proporciona evidencia favorable de una capacidad independiente de composición y portabilidad.

Sin embargo, P-ROC-02 queda justificada por una cuestión no resuelta de identidad estable entre instancias.

Por tanto:

```text
L-EXT-03
→ NO CERRADA
```

Su estado pasa a ser:

```text
L-EXT-03
→ evidencia favorable parcial
→ P-ROC-01 cerrada favorablemente
→ P-ROC-02 derivada
→ cierre pendiente del resultado de P-ROC-02
```

---

# 23. Estado estratégico

La derivación de P-ROC-02:

- no abre un nuevo horizonte;
- no modifica PLATFORM_VISION;
- no modifica V1;
- no modifica T1;
- no modifica el tablero maestro;
- no modifica Product;
- no deriva Architecture;
- no deriva Implementation.

Continúa siendo una reducción experimental dentro del radar externo ya abierto.

---

# 24. Próxima actuación

La siguiente actuación justificable es:

> ejecutar `P-ROC-02 — Identidad estable del Research Object entre instancias trasladadas`.

La prueba deberá empezar desde los dos crates temporales ya existentes y cambiar únicamente la identificación mínima necesaria del Root Data Entity.

No deberá introducir nuevas capacidades antes de demostrar que son necesarias.

---

# Resultado final del documento

```text
P-ROC-01
→ CERRADA
→ FAVORABLE EN EL ALCANCE PROBADO

composición portable explícita
→ DEMOSTRADA

fuentes externas descritas sin payload
→ DEMOSTRADO

traslado conservando coherencia
→ DEMOSTRADO

identidad estable entre copias
→ NO DEMOSTRADA

P-ROC-02
→ DERIVADA

L-EXT-03
→ CONTINÚA ABIERTA
```
