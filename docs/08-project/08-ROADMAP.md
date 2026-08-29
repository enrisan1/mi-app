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

El estado consolidado del proyecto ha permitido justificar una nueva línea
estratégica.

Su incorporación no deriva de la necesidad de mantener ocupado el Roadmap ni
de la mera existencia de aspectos todavía no desarrollados.

Procede de la convergencia de varios resultados ya disponibles:

```text
Product
→ primera vertical consolidada

visión vigente del proyecto
→ materialización progresiva
  de una plataforma real de conocimiento

R-U2-M1
→ primera realización contingente destinada al uso

uso real
→ ya produjo observación, pérdida, investigación y modificación

POU-RU2M1-01
→ protocolo revisado
→ disponible para una nueva aplicación formal

Design Journal
→ capacidad vigente para recibir nuevas situaciones y propuestas

Methodology
→ paralelismo controlado disponible
→ dependencia lógica distinta del orden temporal
```

Este estado proporciona una oportunidad estratégica suficientemente
justificada para desplazar el centro de gravedad del trabajo desde la expansión
teórica continuada hacia la producción de nueva evidencia mediante situaciones,
uso y construcción progresiva.

## 4.1 `LE-001 — Convergencia empírica hacia una primera trayectoria humana integrada`

La línea estratégica vigente consiste en obtener evidencia suficiente para
identificar, justificar, construir y observar una primera trayectoria humana
coherente de extremo a extremo dentro del futuro producto.

La trayectoria general perseguida es:

```text
situación o uso
        ↓
evidencia
        ↓
¿aparece una diferencia relevante?
        ↓
investigación
sólo cuando resulte necesaria
        ↓
resultado suficientemente establecido
        ↓
compromisos vigentes suficientes
o nuevo compromiso cuando proceda
        ↓
primera trayectoria humana
suficientemente justificada
        ↓
arquitectura mínima necesaria
        ↓
artefacto
        ↓
uso
        ↓
nueva evidencia
        ↺
```

La secuencia no obliga a que cada situación produzca una investigación ni a
que cada investigación produzca un nuevo compromiso de Product.

Una situación podrá quedar reducida a compromisos ya existentes, cerrarse por
ausencia de diferencia suficiente o permanecer como posibilidad en evaluación.

## 4.2 Fuentes paralelas de nueva evidencia

La línea se ejercerá inicialmente mediante dos carriles independientes.

### Carril A — nueva evidencia de uso

Se realizará una nueva aplicación formal del protocolo corregido
`POU-RU2M1-01`.

La aplicación tendrá como finalidad obtener nueva evidencia sobre
`R-U2-M1` dentro de las condiciones preobservacionales ya consolidadas.

La ejecución no presupone que:

```text
deba aparecer una pérdida
✘

deba modificarse R-U2-M1
✘

deba abrirse una nueva investigación
✘

deba formularse RP-POU-RU2M1-02
✘
```

Cualquier investigación posterior deberá quedar justificada por aquello que
efectivamente aparezca durante la nueva observación.

### Carril B — nuevas situaciones humanas

Podrán incorporarse al espacio vigente de nuevas propuestas de
`DESIGN_JOURNAL.md` situaciones humanas surgidas después del cierre del corpus
histórico.

Su punto de partida deberá ser una situación y una diferencia humana
identificable, no una funcionalidad o solución técnica previamente elegida.

Cada situación deberá someterse, cuando proceda, a reducción respecto de los
compromisos vigentes, particularmente `PV-001`.

Sólo se abrirá una investigación cuando sobreviva un fundamento positivo
propio que la justifique.

## 4.3 Régimen de investigaciones simultáneas

La línea estratégica admite que varias investigaciones independientes
permanezcan abiertas simultáneamente.

Dos o más investigaciones podrán comenzar y terminar en distinto orden siempre
que cada una conserve:

```text
fundamento positivo propio
+
pregunta propia
+
cuerpo competente
+
dependencias explícitas
+
criterio de cierre propio
```

Ninguna investigación podrá utilizar como entrada un resultado de otra
investigación que todavía no haya sido establecido.

Por tanto:

```text
orden temporal
≠
dependencia lógica
```

La dependencia lógica determinará cuándo un resultado puede ser utilizado.

## 4.4 Suficiencia de la investigación

Una investigación no deberá prolongarse únicamente para aumentar la precisión
de su resultado.

La precisión adicional sólo estará justificada cuando pueda cambiar una
decisión actualmente relevante de:

```text
Product
Realization
Architecture
construcción
```

Cuando la evidencia disponible resulte suficiente para adoptar, rechazar,
posponer o descartar la decisión que justificó la investigación, ésta deberá
cerrarse dentro de su alcance.

## 4.5 Prioridad de construcción y uso

Cuando una situación o trayectoria humana esté suficientemente justificada
para ser construida, la construcción y el uso tendrán prioridad sobre continuar
generalizando su teoría.

La generalización previa sólo deberá continuar cuando exista una decisión
concreta todavía necesaria para la trayectoria cuya resolución dependa de dicha
generalización.

La línea adopta por tanto el criterio:

```text
trayectoria suficientemente justificada
        ↓
no ampliar teoría por mera posibilidad
        ↓
derivar lo necesario
        ↓
construir
        ↓
usar
        ↓
obtener nueva evidencia
```

## 4.6 Arquitectura por trayectoria

La existencia de esta línea no deriva todavía una arquitectura general para la
plataforma.

Architecture deberá intervenir cuando una trayectoria suficientemente
justificada exija determinar responsabilidades, límites, relaciones o
mecanismos cuya resolución pertenezca a ese cuerpo.

En ese momento deberá derivarse únicamente la arquitectura necesaria para
realizar correctamente la trayectoria considerada.

Por tanto:

```text
primera trayectoria
        ↓
responsabilidades necesarias
        ↓
arquitectura mínima
```

y no:

```text
visión completa de la plataforma
        ↓
arquitectura completa anticipada
```

Las ampliaciones arquitectónicas posteriores deberán justificarse a partir de
nuevas trayectorias, pérdidas, incompatibilidades o dependencias efectivamente
identificadas.

## 4.7 Control práctico del paralelismo

Como criterio operativo inicial, no normativo:

```text
2 investigaciones activas
→ régimen normal

3 investigaciones activas
→ admisible cuando sean independientes

más de 3
→ deberá justificarse que el beneficio del paralelismo
  supera el coste de fragmentación y cambio de contexto
```

Este límite no constituye una restricción teórica del proyecto.

Su finalidad es proteger la continuidad del trabajo mientras se ejercita el
nuevo régimen de paralelismo.

## 4.8 Criterio de avance de la línea

La línea habrá producido el primer resultado estratégico buscado cuando pueda
reconstruirse una trayectoria de la forma:

```text
situación humana
        ↓
diferencia suficientemente establecida
        ↓
compromisos suficientes
        ↓
condiciones realizativas necesarias
        ↓
arquitectura mínima
        ↓
artefacto integrado
        ↓
uso
        ↓
evidencia posterior
```

No será necesario cerrar todas las investigaciones abiertas ni completar una
teoría general del producto antes de iniciar dicha construcción.

Una investigación independiente podrá continuar en paralelo cuando sus
resultados no constituyan una dependencia lógica necesaria de la trayectoria
que vaya a construirse.

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
→ no crea compromisos de Product
→ no determina por sí mismo funcionalidades concretas

líneas estratégicas concretas vigentes
→ LE-001
→ convergencia empírica hacia
  una primera trayectoria humana integrada

fundamento de LE-001
→ visión vigente orientada
  a la construcción de un producto real
→ primera cadena empírica ya obtenida
→ R-U2-M1 destinada al uso
→ POU-RU2M1-01 revisado
  y disponible para nueva aplicación formal
→ capacidad vigente para incorporar
  nuevas situaciones humanas
→ paralelismo controlado disponible
→ oportunidad justificada de desplazar
  el centro de gravedad hacia evidencia,
  construcción y uso

Carril A
→ nueva aplicación formal de POU-RU2M1-01
→ nueva evidencia de uso

Carril B
→ incorporación de nuevas situaciones humanas
→ reducción frente a compromisos vigentes
→ investigación sólo ante fundamento positivo

investigaciones simultáneas
→ admitidas
→ cada una requiere fundamento propio
→ dependencia lógica explícita
→ pueden terminar en cualquier orden
→ ningún resultado no establecido
  puede utilizarse como entrada

investigación
→ no prolongar por precisión sin efecto decisorio

trayectoria suficientemente justificada
→ prioridad de construcción y uso
  frente a generalización teórica adicional

Architecture
→ todavía no derivada en general
→ se derivará sólo cuando una trayectoria
  suficientemente justificada la necesite
→ alcance inicial mínimo respecto de esa trayectoria

líneas históricas anteriores
→ no declaradas falsas
→ vigencia estratégica actual no demostrada
→ retiradas del estado vigente
→ preservadas mediante la historia del proyecto

ideas históricas anteriormente en evaluación
→ no trasladadas automáticamente a DESIGN_JOURNAL.md
→ preservadas mediante la historia del proyecto
```
