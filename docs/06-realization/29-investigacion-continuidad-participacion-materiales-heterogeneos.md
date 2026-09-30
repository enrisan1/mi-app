# Investigación de continuidad de participación entre materiales heterogéneos

**Fecha de apertura:** 30/09/2026

**Estado:** En progreso

## 1. Origen de la investigación

La investigación se abre después del cierre de la investigación 28 y de la
auditoría del estado global del proyecto.

El estado vigente no deriva automáticamente una nueva actuación de Product,
Realization, Architecture o implementación.

El Roadmap tampoco mantiene actualmente una línea estratégica que obligue a una
actuación posterior.

La investigación se abre por un fundamento positivo independiente: una necesidad
humana expresada para poder realizar trabajos intelectuales en los que
intervengan conjuntamente materiales de distintas formas, entre ellas vídeo,
audio, texto e imagen.

La necesidad no consiste inicialmente en construir un editor de vídeo ni en
introducir una arquitectura multimedia.

La situación humana planteada consiste en poder trabajar sobre una misma
actividad con materiales de formas diferentes, transformarlos, anotarlos,
extraer partes de ellos, combinarlos y hacer que los resultados obtenidos
puedan volver a participar en actuaciones posteriores.

---

## 2. Pregunta de investigación

> Cuando una actividad intelectual requiere trabajar conjuntamente con
> materiales de distintas formas, ¿qué posibilidades deben mantenerse para que
> esos materiales puedan transformarse, anotarse, extraerse, combinarse y
> volver a participar en la actividad sin quedar artificialmente aislados por
> su forma de origen?

La investigación deberá reducir esta pregunta antes de derivar cualquier
compromiso, estructura o realización.

---

## 3. Situación humana inicial

La necesidad expresada no impone una secuencia única, pero incluye como ejemplo
una actividad de este tipo:

```text
vídeo original V0
        ↓
extraer un fragmento F1
        ↓
obtener una representación textual T1
        ↓
añadir una nota N1
        ↓
incorporar una imagen I1
        ↓
editar el fragmento
        ↓
modificar su audio
        ↓
obtener un resultado F2
        ↓
incorporar F2 a otro vídeo V1
```

Durante la actividad pueden continuar siendo pertinentes simultáneamente:

```text
V0 — vídeo original
F1 — fragmento extraído
T1 — representación textual
N1 — nota
I1 — imagen
F2 — resultado audiovisual modificado
V1 — nueva composición
```

El ejemplo no establece que estas formas deban constituir entidades
fundamentales del dominio.

Tampoco establece que toda actividad deba conservar todos esos elementos.

---

## 4. Diferencia inicialmente observada

La investigación distingue provisionalmente entre dos situaciones.

### S-A — Materiales preservados pero aislados

```text
vídeo
✔ disponible

audio
✔ disponible

texto
✔ disponible

imagen
✔ disponible

pero

cada material
→ sólo puede intervenir dentro
  de actuaciones restringidas a su propia forma
```

En esta situación puede no existir pérdida de los materiales y, sin embargo,
la actividad intelectual conjunta seguir siendo imposible.

### S-B — Continuidad de participación

```text
material A
        ↓
actuación pertinente
        ↓
resultado B
        ↓
B puede intervenir
en otra actuación pertinente
        +
puede hacerlo conjuntamente
con otros materiales C, D...
```

La diferencia entre `S-A` y `S-B` constituye el primer objeto de falsación.

---

## 5. Primera hipótesis candidata

### H-I29-01 — Continuidad de participación

Hipótesis provisional:

> Cuando el resultado de una actuación sigue siendo pertinente para la
> actividad, su forma de origen o la forma adquirida no debería excluir por sí
> sola su participación en actuaciones posteriores pertinentes.

Esta hipótesis no constituye todavía:

- un compromiso de Product;
- una necesidad de Realization;
- una responsabilidad arquitectónica;
- ni una exigencia de implementación.

Deberá ser reducida o falsada.

---

## 6. Relación provisional con PV-005 y PV-006

### PV-006

`PV-006 — Continuidad de posibilidades pertinentes` puede resultar aplicable
cuando un cambio introducido por la plataforma destruye una posibilidad que
continúa siendo pertinente.

Por tanto, casos como:

```text
editar un vídeo
↓
destruir el original
```

podrían quedar ya absorbidos por `PV-006` si las posibilidades asociadas al
original siguen siendo pertinentes.

La investigación 29 no deberá derivar una exigencia nueva cuando la diferencia
observada pueda reconstruirse suficientemente mediante `PV-006`.

### PV-005

`PV-005 — Determinación humana efectiva` podrá resultar aplicable cuando una
actuación implique una decisión relevante cuya resolución corresponda a la
persona.

La investigación no presupone que toda transformación, combinación o
incorporación constituya una decisión de ese tipo.

### Residuo provisional

La diferencia todavía no absorbida que deberá investigarse es:

```text
los materiales continúan disponibles
        +
no se ha destruido una posibilidad previa
        +
sin embargo
        ↓
un resultado no puede volver a participar
en una actuación pertinente
por la forma en la que ha quedado constituido
```

Debe comprobarse si esta diferencia es real, independiente y humanamente
relevante.

---

## 7. No presuposiciones

La apertura de esta investigación no establece:

- una entidad fundamental `Video`;
- una entidad fundamental `Audio`;
- una entidad fundamental `Image`;
- una entidad fundamental `Text`;
- una entidad general `File`;
- una timeline;
- pistas o tracks;
- clips;
- capas;
- un editor multimedia;
- una representación universal común;
- una conversión universal entre formatos;
- que cualquier formato deba transformarse en cualquier otro;
- que todo material deba poder insertarse literalmente en cualquier otro;
- que toda transformación deba ser reversible;
- que todo original deba conservarse indefinidamente;
- que todo derivado deba mantener siempre su procedencia;
- una colección general;
- historial;
- versionado;
- almacenamiento concreto;
- arquitectura;
- nueva vertical de Product;
- ni modificación de código.

La investigación deberá derivar cualquier necesidad posterior únicamente a
partir de diferencias que resistan falsación.

---

## 8. Preguntas de falsación iniciales

La investigación deberá contrastar, entre otras, las siguientes posibilidades:

1. ¿Puede un resultado ser suficientemente útil si sólo puede consultarse y no
   volver a participar en otra actuación?

2. ¿Es necesario que materiales de distintas formas participen simultáneamente
   o basta con transformarlos sucesivamente?

3. ¿Una representación textual obtenida de un vídeo necesita poder volver a
   intervenir en una composición audiovisual?

4. ¿Una imagen incorporada a una composición necesita seguir siendo editable
   como material independiente?

5. ¿Un fragmento extraído necesita conservar una relación reconocible con su
   material de procedencia?

6. ¿Original y derivado necesitan coexistir o esa necesidad queda absorbida por
   `PV-006` cuando continúan existiendo posibilidades pertinentes?

7. ¿Una composición terminada debe poder volver a utilizarse como material de
   nuevas actuaciones?

8. ¿La imposibilidad de participar posteriormente constituye una pérdida
   distinta de la pérdida ya cubierta por `PV-006`?

---

## 9. Método inmediato

La siguiente actuación no consiste en diseñar una solución técnica.

Deberá seleccionarse una actividad intelectual real que requiera trabajar con
materiales de formas distintas y reconstruir la trayectoria concreta que la
persona quiere realizar.

Para cada transición se preguntará:

```text
¿qué debe seguir disponible?

¿qué debe seguir siendo modificable?

¿qué debe poder volver a participar?

¿qué correspondencias deben mantenerse?

¿qué puede desaparecer sin pérdida pertinente?

¿qué diferencia queda ya absorbida por PV-005 o PV-006?

¿qué diferencia, si alguna, permanece independiente?
```

Sólo una diferencia que resista esta reducción podrá utilizarse como fundamento
para una exigencia posterior.

---

## 10. Estado de apertura

La investigación queda abierta.

Todavía no se ha demostrado:

```text
H-I29-01
→ necesaria

continuidad de participación
→ independiente de PV-006

participación heterogénea
→ compromiso de Product

conservación de procedencia
→ necesaria

coexistencia original / derivado
→ necesidad independiente

editor multimedia
→ necesario

arquitectura nueva
→ derivada

modificación de código
→ derivada
```

La apertura establece únicamente que existe fundamento positivo suficiente para
investigar la situación humana planteada.
