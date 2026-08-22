# ROADMAP

## Índice

1. Propósito
2. Responsabilidad y estatuto
3. Criterio de incorporación de líneas estratégicas
4. Líneas estratégicas vigentes
5. Relación con otros documentos
6. Principios de mantenimiento

---

# 1. Propósito

`ROADMAP.md` registra las líneas estratégicas de evolución cuya vigencia haya quedado suficientemente justificada respecto del estado consolidado del proyecto.

Su responsabilidad no consiste en determinar automáticamente qué debe hacerse a continuación ni en mantener una secuencia permanente de actuaciones futuras.

A diferencia de `PROJECT_STATUS.md`, que declara el estado vigente del proyecto, este documento recoge únicamente aquellas direcciones de evolución que hayan adquirido justificadamente el estatuto de líneas estratégicas.

Las propuestas, posibilidades o ideas que todavía no hayan alcanzado dicho estatuto corresponden a `DESIGN_JOURNAL.md` cuando exista fundamento suficiente para conservarlas como propuestas vivas en evaluación.

La existencia de una posibilidad técnica, una idea histórica o una iniciativa anteriormente considerada no basta para incorporarla o mantenerla en este Roadmap.

---

# 2. Responsabilidad y estatuto

## 2.1 Responsabilidad

`ROADMAP.md` es responsable de:

- registrar las líneas estratégicas de evolución actualmente justificadas;
- declarar el alcance y estatuto de dichas líneas;
- mantener diferenciadas las líneas estratégicas vigentes de las meras posibilidades futuras;
- y permitir reconstruir qué direcciones de evolución han adquirido, en cada momento, suficiente fundamento para ser consideradas estratégicamente relevantes.

Esta responsabilidad no exige que exista permanentemente alguna línea estratégica concreta.

El Roadmap puede permanecer legítimamente sin líneas estratégicas vigentes cuando ninguna haya quedado suficientemente justificada respecto del estado consolidado del proyecto.

---

## 2.2 Estatuto

El Roadmap posee carácter orientativo y no normativo.

Una línea incorporada a este documento:

- no constituye por sí misma un compromiso de Product;
- no constituye por sí misma una obligación de implementación;
- no determina automáticamente una prioridad;
- no determina qué cuerpo del proyecto debe intervenir;
- no establece necesariamente una secuencia de ejecución;
- y no constituye por sí misma la siguiente actuación justificable del proyecto.

Su presencia establece únicamente que existe fundamento suficiente para conservarla como una dirección estratégica actualmente reconocida dentro de su alcance.

La actuación concreta que pudiera derivarse posteriormente deberá justificarse mediante los cuerpos y criterios competentes.

---

## 2.3 Admisibilidad de un Roadmap sin líneas vigentes

La existencia de `ROADMAP.md` no implica la existencia necesaria de al menos una línea estratégica concreta.

Por tanto:

```text
ROADMAP.md
→ puede existir legítimamente

líneas estratégicas concretas vigentes
→ pueden ser ∅
```

La ausencia de líneas estratégicas vigentes:

- no constituye una incompletitud documental;
- no implica el cierre del proyecto;
- no implica que no puedan aparecer nuevas posibilidades;
- no obliga a buscar preventivamente nuevas líneas;
- no obliga a seleccionar una nueva vertical de Product;
- y no determina por sí misma ninguna actuación posterior.

Una nueva línea estratégica sólo deberá incorporarse cuando exista una justificación independiente suficiente para conferirle dicho estatuto.

---

# 3. Criterio de incorporación de líneas estratégicas

## 3.1 Regla general

Una propuesta sólo podrá incorporarse a `ROADMAP.md` como línea estratégica vigente cuando exista fundamento suficiente respecto del estado consolidado del proyecto para reconocerla como una dirección de evolución estratégicamente relevante.

La relación mínima es:

```text
propuesta o posibilidad
        ↓
justificación independiente
respecto del estado vigente
        ↓
reconocimiento de relevancia estratégica
        ↓
incorporación a ROADMAP.md
```

La incorporación no podrá justificarse únicamente por:

- la existencia histórica de la propuesta;
- su presencia en una versión anterior del Roadmap;
- su viabilidad técnica;
- su compatibilidad con la implementación existente;
- su carácter habitual en productos semejantes;
- la disponibilidad de una solución conocida;
- la posibilidad abstracta de que resulte útil en el futuro;
- ni la necesidad de mantener contenido dentro del propio Roadmap.

En particular:

```text
existencia histórica
↛ vigencia estratégica

posibilidad técnica
↛ vigencia estratégica

compatibilidad
↛ vigencia estratégica

posibilidad futura
↛ vigencia estratégica
```

---

## 3.2 Criterios de evaluación

Cuando exista fundamento para considerar la incorporación de una nueva línea estratégica, deberán evaluarse al menos las siguientes cuestiones:

### Necesidad o fundamento identificable

Debe poder reconstruirse qué necesidad, compromiso, pérdida, oportunidad suficientemente justificada u otro fundamento vigente hace pertinente considerar la línea.

### Relación con el estado consolidado

La línea deberá evaluarse respecto del producto, los fundamentos y las restricciones actualmente vigentes, y no únicamente respecto de estados históricos del proyecto.

### Autoridad

La incorporación de una línea al Roadmap no podrá utilizarse para establecer por autoridad propia resultados que correspondan a Product, Methodology, Metatheory, Architecture, Development, a los cuerpos de investigación conservados en `research/corpus/` o a cualquier otro cuerpo competente.

### Alcance

Toda línea deberá quedar limitada al alcance efectivamente justificado.

Su incorporación no permitirá generalizar automáticamente sus decisiones a otros problemas, verticales o ámbitos del proyecto.

### Beneficio frente a complejidad

Cuando la línea implique nuevas capacidades, estructuras o mecanismos, deberá poder justificarse que el valor esperado de mantenerla como dirección estratégica compensa suficientemente la complejidad que introduce o anticipa.

### Compatibilidad con los principios consolidados

Ninguna línea podrá mantenerse como estratégica si exige ignorar restricciones o resultados consolidados sin que exista previamente una justificación suficiente para reabrirlos o revisarlos.

---

## 3.3 Pérdida del estatuto estratégico

La incorporación de una línea a `ROADMAP.md` no le confiere vigencia irreversible.

Una línea deberá ser revisada cuando cambie el fundamento que justificaba su presencia o cuando nueva evidencia muestre que su estatuto estratégico ya no puede sostenerse.

Una línea cuya vigencia deje de estar justificada podrá:

- ser retirada;
- ser reformulada;
- ser reducida;
- o, cuando exista fundamento para conservarla como posibilidad todavía viva pero no estratégica, pasar al ámbito correspondiente de evaluación.

Su retirada del Roadmap no implica necesariamente que la propuesta sea falsa, imposible o definitivamente descartada.

Implica únicamente que ya no posee el estatuto necesario para permanecer como línea estratégica vigente.

---

# 4. Líneas estratégicas vigentes

Actualmente no existe ninguna línea estratégica concreta cuya vigencia haya quedado justificada respecto del estado consolidado actual del proyecto.

El estado vigente es:

```text
líneas estratégicas concretas
actualmente justificadas
→ ninguna
```

Esta ausencia no implica:

```text
proyecto
→ cerrado
```

ni:

```text
posibilidades futuras
→ agotadas
```

ni:

```text
nueva línea estratégica
→ debe buscarse
```

ni:

```text
siguiente actuación
→ debe derivarse desde ROADMAP.md
```

El proyecto puede permanecer legítimamente en un estado en el que no exista ninguna línea estratégica concreta vigente y ninguna actuación posterior haya quedado actualmente derivada.

Cuando aparezca una necesidad, pérdida, compromiso, oportunidad suficientemente justificada u otro fundamento pertinente, podrá evaluarse entonces si de dicho resultado procede incorporar una nueva línea estratégica.

Hasta que exista ese fundamento, no deberá introducirse una línea con la finalidad exclusiva de poblar el Roadmap o mantener artificialmente una dirección futura.

---

# 5. Relación con otros documentos

## `PROJECT_STATUS.md`

`PROJECT_STATUS.md` declara el estado vigente del proyecto y constituye el punto de referencia para determinar dónde se encuentra actualmente.

`ROADMAP.md` no sustituye esa responsabilidad.

La existencia de una línea estratégica no modifica por sí misma el estado declarado en `PROJECT_STATUS.md`.

---

## `PRODUCT.md`

`PRODUCT.md` establece los compromisos de producto dentro de su ámbito de autoridad.

`ROADMAP.md` no puede crear, modificar, priorizar ni sustituir compromisos de Product.

Una línea estratégica podrá apoyarse en compromisos consolidados cuando exista una derivación que lo justifique, pero su presencia en el Roadmap no convierte por sí misma una posibilidad en compromiso de producto.

---

## `DESIGN_JOURNAL.md`

`DESIGN_JOURNAL.md` conserva propuestas e ideas que puedan resultar suficientemente valiosas para mantenerlas como posibilidades vivas en evaluación, sin conferirles por ello estatuto estratégico.

La relación general puede representarse como:

```text
idea o propuesta
        ↓
DESIGN_JOURNAL.md
cuando procede conservarla
como posibilidad en evaluación
        ↓
justificación suficiente
de relevancia estratégica
        ↓
ROADMAP.md
        ↓
derivaciones posteriores
cuando procedan
```

Esta secuencia no es obligatoria para toda propuesta.

Una idea no debe incorporarse a `DESIGN_JOURNAL.md` únicamente porque haya sido retirada del Roadmap ni debe incorporarse al Roadmap únicamente porque haya sido registrada previamente en el diario de diseño.

Cada cambio de estatuto requiere su propia justificación.

---

## `PROJECT_JOURNAL.md`

`PROJECT_JOURNAL.md` conserva la evolución cronológica relevante del proyecto.

Cuando una modificación del Roadmap cambie el estatuto de líneas previamente consideradas estratégicas, el Journal podrá registrar la razón de dicha modificación para preservar su reconstruibilidad histórica.

El Roadmap no necesita conservar dentro de su estado vigente todo su contenido histórico.

La preservación literal de versiones anteriores corresponde al sistema de control de versiones, mientras que la justificación de los cambios relevantes corresponde a los documentos históricos competentes.

---

# 6. Principios de mantenimiento

## Justificación antes que continuidad

Una línea no debe mantenerse porque ya estuviera presente en una versión anterior.

Su vigencia depende de que continúe existiendo fundamento suficiente para conservar su estatuto estratégico.

---

## No poblar preventivamente el Roadmap

La ausencia de líneas estratégicas no constituye una pérdida que deba repararse.

No deberán introducirse iniciativas únicamente para evitar que el Roadmap permanezca sin líneas concretas.

---

## No convertir posibilidades en obligaciones

Una posibilidad futura no constituye por sí misma una línea estratégica.

Una línea estratégica no constituye por sí misma una actuación obligatoria.

Una actuación posible no constituye por sí misma una prioridad.

---

## No derivar soluciones antes de la necesidad

No deberán anticiparse arquitecturas, infraestructuras, funcionalidades, abstracciones o mecanismos concretos mientras no exista una necesidad suficientemente justificada que permita evaluar su pertinencia.

---

## Preservar la autoridad de cada cuerpo

`ROADMAP.md` no sustituye la autoridad de los documentos responsables de Product, Methodology, Metatheory, Architecture o Development, ni la autoridad interna de los cuerpos de investigación conservados en `research/corpus/`.

Cuando una línea requiera resultados pertenecientes a alguno de esos ámbitos, dichos resultados deberán proceder del cuerpo competente.

---

## Preservar la trazabilidad

Toda incorporación, modificación o retirada relevante de una línea estratégica deberá poder reconstruirse a partir del fundamento que justificó el cambio.

La relación deseable es:

```text
estado consolidado
        ↓
fundamento identificable
        ↓
evaluación
        ↓
estatuto estratégico
        ↓
ROADMAP.md
```

y, cuando el fundamento deje de sostenerla:

```text
nueva evidencia o cambio de estado
        ↓
reevaluación
        ↓
pérdida o modificación
del estatuto estratégico
        ↓
actualización de ROADMAP.md
```

---

## Actualización por necesidad

`ROADMAP.md` no necesita modificarse después de cada cambio del proyecto.

Sólo deberá actualizarse cuando cambie información que pertenezca a su responsabilidad, especialmente cuando:

- una nueva línea adquiera suficiente justificación estratégica;
- una línea vigente cambie de alcance;
- una línea pierda el fundamento que justificaba su presencia;
- o cambien los criterios necesarios para determinar su estatuto.

Mientras no ocurra ninguno de estos casos, la ausencia de modificaciones constituye un estado documental válido.

---

# Estado actual

```text
ROADMAP.md
→ responsabilidad vigente
→ carácter no normativo
→ no determina la siguiente actuación

líneas estratégicas concretas vigentes
→ ninguna actualmente

líneas históricas anteriores
→ no declaradas falsas
→ vigencia estratégica actual no demostrada
→ retiradas del estado vigente
→ preservadas mediante la historia del proyecto

ideas históricas anteriormente en evaluación
→ no trasladadas automáticamente a DESIGN_JOURNAL.md
→ preservadas mediante la historia del proyecto

nuevas líneas
→ requieren justificación independiente

ausencia de líneas
→ estado legítimo
→ no genera obligación de búsqueda
→ no constituye incompletitud documental
```
