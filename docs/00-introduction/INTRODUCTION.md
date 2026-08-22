1.  Objetivo

2.  Sistema documental

3.  Cómo utilizar la documentación

4.  Organización de la documentación

5.  Recorridos recomendados

6.  Evolución de la documentación

7.  Relación con el resto de la documentación

# 1. Objetivo

Este documento constituye la puerta de entrada al sistema documental del proyecto.

Su propósito es ofrecer una visión general de la organización de la documentación, explicar la responsabilidad de los principales documentos y facilitar la localización de la información necesaria según las necesidades de cada lector.

La documentación del proyecto se organiza como un conjunto de documentos especializados, cada uno dedicado a una responsabilidad concreta. Esta organización permite mantener una separación clara entre la visión del proyecto, la definición del producto, la arquitectura del sistema, el proceso de desarrollo, la estrategia de pruebas y el seguimiento de su evolución.

Este documento no desarrolla en profundidad ninguno de esos aspectos ni sustituye a la documentación especializada. Su finalidad consiste en orientar al lector y proporcionar un punto de partida para comprender la estructura documental del proyecto y navegar por ella de forma eficaz.

En conjunto, `INTRODUCTION.md` actúa como guía de navegación del sistema documental y facilita una comprensión progresiva del proyecto, desde sus aspectos más generales hasta los más específicos.

# 2. Sistema documental

La documentación del proyecto se concibe como un sistema organizado de conocimiento cuya finalidad es describir el proyecto desde distintas perspectivas sin duplicar información.

Cada documento desarrolla una responsabilidad específica y complementa al resto, permitiendo que la visión del proyecto, la definición del producto, la arquitectura, el proceso de desarrollo, la estrategia de pruebas y el seguimiento de la evolución puedan mantenerse de forma independiente y coherente.

Esta organización permite estructurar el conocimiento del proyecto en ámbitos claramente diferenciados, favoreciendo su comprensión, mantenimiento y evolución sin duplicar información.

Como criterio general, cada documento desarrolla un único ámbito de conocimiento y evita reproducir información que ya se encuentra desarrollada en otro lugar. Cuando un concepto pertenece a un documento determinado, el resto de la documentación hace referencia a él en lugar de duplicar su contenido.

El sistema documental constituye una parte esencial del proyecto y proporciona el contexto necesario para comprender el proyecto y la organización de su documentación, las decisiones adoptadas durante su desarrollo y la relación existente entre sus distintos componentes documentales.

# 3. Cómo utilizar la documentación

La documentación del proyecto está diseñada para que cada documento pueda consultarse de forma independiente, manteniendo al mismo tiempo una visión coherente del conjunto.

Cada documento desarrolla una responsabilidad específica y contiene la información necesaria para comprender el aspecto del proyecto que le corresponde, remitiendo al resto de la documentación únicamente cuando resulta necesario ampliar el contexto.

Aunque existe un recorrido recomendado para quienes se incorporan por primera vez al proyecto, la organización documental permite acceder directamente al documento más adecuado según la información que se desee consultar.

Esta organización facilita tanto una lectura secuencial de toda la documentación como una consulta puntual orientada a resolver necesidades concretas durante el desarrollo, el mantenimiento o la evolución del sistema.

La unidad principal de navegación es el cuerpo competente por responsabilidad. Una vez identificado dicho cuerpo, sus documentos internos permiten localizar el resultado consolidado, investigación, auditoría o registro pertinente.

# 4. Organización de la documentación

El sistema documental se organiza en cuerpos diferenciados, cada uno responsable de una clase específica de problemas, resultados y decisiones.

Esta distribución permite:

- mantener separadas responsabilidades distintas;
- evitar que un cuerpo adquiera autoridad sobre resultados que pertenecen a otro;
- localizar la fuente competente a partir del problema que se pretende resolver;
- preservar la diferencia entre investigación, conocimiento consolidado, estado, arquitectura histórica y construcción concreta;
- y evitar duplicidades entre documentos.

La organización documental no establece una cadena lineal obligatoria entre los cuerpos.

La existencia de un cuerpo posterior en la numeración no implica que deba intervenir automáticamente después del anterior.

Ante una necesidad concreta deberá determinarse primero qué tipo de problema existe y sólo después qué cuerpo posee competencia para tratarlo.

La estructura principal distingue entre la documentación normativa y transversal del proyecto y los cuerpos de investigación conservados de forma autónoma.

```text
docs/
│
├── 00-introduction
├── 01-methodology
├── 02-metatheory
├── 08-project
├── 09-architecture
└── 10-development

research/
└── corpus/
    ├── conceptual-model
    ├── governance
    ├── engineering
    ├── realization
    └── implementation
```

## 4.1 Puerta de entrada — `00-introduction`

`00-introduction` proporciona el acceso general al sistema documental.

Su responsabilidad comprende:

- orientar la navegación;
- ofrecer el vocabulario común;
- presentar el propósito general del proyecto;
- y dirigir al lector hacia el cuerpo competente según la información que necesite.

No sustituye a ninguno de los cuerpos especializados.

---

## 4.2 Cuerpos documentales

La documentación distingue actualmente dos conjuntos con estatutos diferentes.

### Documentación del proyecto principal y cuerpos transversales

| Cuerpo            | Responsabilidad principal                                                                                                                                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `01-methodology`  | Define el método transversal mediante el que se abren, desarrollan, falsan, consolidan, documentan y reabren investigaciones y decisiones del proyecto.                                                                                         |
| `02-metatheory`   | Investiga y establece resultados transversales relativos al estatuto, alcance, dependencia, comparación, autoridad y relación entre teorías, resultados o construcciones cuando el problema no pertenece exclusivamente a un cuerpo particular. |
| `08-project`      | Contiene las referencias constitutivas y de Product, el estado vigente, auditorías, historial y propuestas de evolución del proyecto.                                                                                                           |
| `09-architecture` | Conserva y describe la arquitectura software y su evolución técnica. La arquitectura histórica no adquiere por su sola existencia autoridad prescriptiva sobre nuevas construcciones.                                                           |
| `10-development`  | Define el proceso práctico de construcción, las convenciones de desarrollo, el entorno, los comandos y la estrategia general de testing y validación.                                                                                           |

### Corpus autónomo de investigación

El directorio:

```text
research/corpus/
```

conserva cinco cuerpos surgidos históricamente durante la evolución del proyecto:

Cuerpo Responsabilidad interna
conceptual-model Conserva la investigación y los resultados conceptuales desarrollados sobre fenómenos, exigencias, funciones, formalización, especialización, validación y reconstrucción.
governance Conserva la investigación y los resultados relativos al gobierno epistemológico y a las condiciones de legitimidad de afirmaciones, evaluaciones y resultados dentro de su ámbito.
engineering Conserva las derivaciones de responsabilidades, capacidades, relaciones, garantías y restricciones estructurales desarrolladas dentro del corpus.
realization Conserva la investigación sobre condiciones y decisiones de realización concreta desarrolladas bajo la competencia propia del cuerpo.
implementation Conserva exigencias, competencias, contratos, dependencias y fronteras formuladas para implementaciones válidas dentro del corpus.

Estos cinco cuerpos poseen coherencia y valor interno, pero su pertenencia a `research/corpus/` no los convierte automáticamente en cuerpos normativos de Product.

Por tanto:

resultado del corpus
⇏
compromiso del proyecto principal

La utilización de un resultado del corpus por Product, Architecture, Development u otro cuerpo requerirá justificar independientemente su pertinencia, competencia, alcance y aplicabilidad.

La organización identifica responsabilidades y relaciones de autoridad, no un orden obligatorio de intervención.

---

## 4.3 Investigación y conocimiento consolidado dentro de los cuerpos

Algunos cuerpos distinguen internamente entre:

```text
investigación
        ↓
resultado suficientemente justificado
        ↓
consolidación en documento competente
        ↓
registro de la consolidación
```

Por tanto, encontrar una afirmación en un documento de investigación no implica automáticamente que constituya una regla universal consolidada.

Antes de utilizar un resultado deberá atenderse a su estatuto:

- hipótesis;
- resultado provisional;
- decisión contingente;
- resultado consolidado;
- documento histórico;
- o estado vigente.

El uso de un resultado por otro cuerpo tampoco transfiere autoridad sobre dicho resultado.

---

# 5. Recorridos de navegación

La documentación no debe recorrerse siempre en el mismo orden.

El punto de partida deberá seleccionarse según la necesidad concreta.

Los siguientes recorridos son guías de navegación y no secuencias normativas de trabajo.

## 5.1 Determinar qué cuerpo posee competencia

Ante una cuestión nueva:

```text
problema concreto
        ↓
¿qué clase de resultado necesitamos?
        ↓
¿qué cuerpo posee autoridad
para producir ese resultado?
        ↓
consultar el cuerpo competente
```

Como orientación:

```text
¿cómo debe investigarse o documentarse?
        ↓
01-methodology

¿es un problema transversal sobre
autoridad, alcance o relaciones entre resultados?
        ↓
02-metatheory

¿qué producto está comprometido
y cuál es el estado vigente?
        ↓
08-project

¿qué organización software
está actualmente justificada?
        ↓
09-architecture

¿cómo construir, probar y validar
el cambio?
        ↓
10-development
```

Cuando una necesidad del proyecto plantee una pregunta conceptual, normativa, estructural, realizativa o implementativa, deberá determinarse primero si existe ya un cuerpo competente vigente dentro del proyecto principal.

Los cuerpos conservados en:

`research/corpus/`

podrán consultarse como antecedentes o como fuentes candidatas cuando la pregunta coincida con su competencia interna.

Sin embargo:

```text
existencia histórica de un cuerpo competente
        ⇏
obligación de utilizarlo
```

y:

```text
resultado disponible en research/corpus/
        ⇏
resultado aplicable automáticamente
```

Si un resultado del corpus se considera candidato a resolver una necesidad vigente, su aplicabilidad deberá justificarse independientemente antes de adquirir autoridad sobre el proyecto principal.

---

## 5.2 Conocer el estado vigente del proyecto

Cuando la necesidad consiste en saber dónde se encuentra actualmente el proyecto:

```text
INTRODUCTION.md
        ↓
08-project
        ↓
PROJECT_STATUS.md
```

`PROJECT_STATUS.md` constituye la referencia para conocer el estado actual, el último objetivo completado y el punto vigente de continuación.

Los documentos históricos deberán utilizarse como antecedentes y no como sustitutos del estado presente.

---

## 5.3 Investigar una nueva necesidad

Cuando durante el trabajo aparece una pérdida o una pregunta cuya respuesta todavía no está justificada:

```text
necesidad o pérdida concreta
        ↓
identificar el tipo de problema
        ↓
localizar el cuerpo competente
        ↓
¿existe ya un resultado suficiente?
       / \
     sí   no
     ↓     ↓
utilizar  abrir o reabrir
resultado investigación
```

No deberá abrirse una investigación en un cuerpo simplemente porque históricamente éste aparezca después en la organización documental.

---

## 5.4 Pasar de un compromiso de Product a una realización

Cuando existe un compromiso de Product y se necesita determinar cómo puede hacerse realizable, no deberá presumirse por continuidad histórica qué cuerpo debe intervenir.

Se seguirá:

```text
08-project
PRODUCT.md
        ↓
compromiso vigente
        ↓
¿qué diferencia debe realizarse?
        ↓
¿qué nueva pregunta aparece?
        ↓
determinar su naturaleza
y el cuerpo competente
        ↓
investigar sólo aquello
que todavía no esté justificado
```

La existencia en `research/corpus/` de cuerpos denominados `engineering`, `realization` o `implementation` no establece por sí misma una secuencia normativa para el proyecto principal.

Dichos cuerpos podrán proporcionar antecedentes o resultados candidatos cuando exista correspondencia con la pregunta planteada.

Por tanto:

```text
Product
        ⇏
Engineering del corpus
        ⇏
Realization del corpus
        ⇏
Implementation del corpus
```

Toda transición entre cuerpos deberá justificarse por la necesidad concreta del resultado requerido.

Una investigación del corpus podrá abrirse legítimamente a partir de un compromiso de Product cuando su cuerpo posea competencia para resolver la pregunta planteada.

Esta procedencia no convierte automáticamente sus resultados particulares en obligaciones de Product.

---

## 5.5 Construir una realización ya justificada

Cuando una realización concreta ya ha sido suficientemente especificada:

```text
fuente que justifica la realización
        ↓
estado vigente del proyecto
        ↓
10-development
        ↓
construcción
        ↓
testing y validación
```

`09-architecture` deberá consultarse cuando la tarea requiera utilizar, modificar o derivar arquitectura software.

Su intervención no debe presumirse automáticamente únicamente porque vaya a escribirse código.

---

## 5.6 Regla general de navegación

Cuando exista duda sobre qué documento consultar, no deberá elegirse el siguiente documento por proximidad física, numeración o continuidad histórica.

Se aplicará:

```text
¿qué problema existe?
        ↓
¿qué resultado necesitamos?
        ↓
¿qué cuerpo posee competencia?
        ↓
¿qué documento de ese cuerpo
posee el resultado o la investigación relevante?
```

El sistema documental debe permitir resolver esta navegación sin duplicar en `INTRODUCTION.md` el contenido especializado de los documentos a los que dirige.

# 6. Evolución de la documentación

La documentación forma parte del propio proyecto y evoluciona junto con el software, la arquitectura y el producto.

Su organización no es estática. A medida que el proyecto incorpora nuevas capacidades, tecnologías o procesos, la documentación puede reorganizarse para reflejar dichos cambios, siempre que se mantengan los principios de claridad, responsabilidad única y ausencia de duplicidades.

La incorporación de un nuevo documento deberá responder a una necesidad real y tener una responsabilidad claramente definida dentro del sistema documental. Del mismo modo, cuando un documento deje de aportar valor o su contenido pase a formar parte de otro, deberá revisarse su papel para mantener la coherencia del conjunto.

La evolución de la documentación no persigue aumentar el número de documentos, sino mejorar la organización y preservar el conocimiento generado durante el desarrollo del proyecto.

Como criterio general, cualquier modificación relevante del producto, la arquitectura, el proceso de desarrollo o la estrategia de validación deberá ir acompañada de la actualización del documento responsable de ese contenido, manteniendo siempre la documentación alineada con el estado real del proyecto.

La reorganización física de un cuerpo no modifica por sí misma el estatuto intelectual de sus resultados.

Del mismo modo, la separación documental de un corpus histórico no deberá reescribir retrospectivamente las ubicaciones, decisiones o relaciones vigentes en el momento que documentan sus investigaciones, auditorías o bitácoras.

Por tanto:

```text
reorganización documental
        ⇏
reescritura histórica
```

# 7. Relación con el resto de la documentación

Este documento constituye la guía de navegación del sistema documental del proyecto.

Su responsabilidad consiste en facilitar la comprensión de la organización de la documentación y orientar al lector hacia el documento más adecuado según la información que desee consultar.

A diferencia de los documentos especializados, `INTRODUCTION.md` no desarrolla el producto, la arquitectura, el proceso de desarrollo ni la estrategia de pruebas. Su finalidad es proporcionar una visión de conjunto del sistema documental y explicar cómo se relacionan sus distintos documentos.

Esta función complementa al resto de la documentación sin sustituir ninguno de sus contenidos. Cada documento mantiene una responsabilidad claramente definida y desarrolla en profundidad el ámbito de conocimiento que le corresponde.

`INTRODUCTION.md` reconoce además la existencia de `research/corpus/` como cuerpo de investigación autónomo conservado dentro del repositorio.

Su función respecto de dicho corpus es exclusivamente navegacional: permitir localizarlo, comprender su estatuto y distinguirlo de la documentación normativa del proyecto principal.

La definición detallada del estatuto del corpus corresponde a:

```text
research/corpus/README.md
```

En conjunto, todos ellos forman un sistema documental coherente cuyo objetivo es preservar, organizar y facilitar el acceso al conocimiento generado durante la evolución del proyecto.

---
