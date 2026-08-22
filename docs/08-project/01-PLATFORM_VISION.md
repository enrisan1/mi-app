# PLATFORM_VISION

1. Propósito

2. La visión de la plataforma

3. Principios del producto

   3.1 Evolución sin sustitución

   3.2 Principio de continuidad de uso

4. Capacidades generales perseguidas

   4.1 Evolución de los contenidos y conservación de estados

   4.2 Organización, recuperación y enriquecimiento

   4.3 Relaciones y reutilización

   4.4 Evaluación crítica y transparencia

   4.5 Colaboración y publicación

   4.6 Preservación y continuidad

5. Frontera entre visión e investigación

## 1. Propósito

Este documento describe la visión a largo plazo de la plataforma hacia la que evoluciona el proyecto.

Su finalidad es expresar la dirección de producto perseguida y proporcionar una referencia estable para evaluar la coherencia de las decisiones adoptadas durante su evolución.

A diferencia de `PRODUCT.md`, que describe los compromisos de producto actualmente aceptados, este documento recoge una visión de futuro.

No pretende especificar funcionalidades concretas, establecer una planificación de desarrollo ni determinar por anticipado las soluciones conceptuales, arquitectónicas, realizativas o implementativas mediante las que deberá alcanzarse esa visión.

Por tanto:

```text
PLATFORM_VISION
        → dirección de Product

PLATFORM_VISION
        ⇏ teoría conceptual

PLATFORM_VISION
        ⇏ arquitectura

PLATFORM_VISION
        ⇏ realización

PLATFORM_VISION
        ⇏ implementación
```

La visión podrá expresar situaciones humanas que la plataforma pretende atender, capacidades que se considera valioso llegar a ofrecer, propiedades deseables del producto y principios destinados a orientar su evolución.

La determinación de las estructuras necesarias para realizar esos compromisos corresponderá, cuando resulte necesaria, a investigaciones posteriores desarrolladas por el cuerpo competente.

Las investigaciones conservadas bajo:

```text
research/corpus/
```

constituyen un cuerpo intelectualmente autónomo respecto de Product.

Sus resultados pueden proporcionar antecedentes, instrumentos de investigación o candidatos reutilizables, pero no constituyen automáticamente compromisos de esta visión.

Por tanto:

```text
resultado consolidado en research/corpus/
        ⇏
compromiso de PLATFORM_VISION
```

Toda utilización de un resultado procedente del corpus deberá justificarse independientemente por su pertinencia, competencia, alcance y aplicabilidad respecto del compromiso concreto de Product que pretenda atender.

Del mismo modo:

```text
evolución de Product
        ⇏
modificación retrospectiva del corpus
```

La Todo App desarrollada durante las primeras etapas del proyecto constituye un antecedente histórico y un dominio de experimentación utilizado durante la evolución del proyecto, pero no determina por sí misma el propósito último de la plataforma.

La visión definida en este documento deberá poder revisarse cuando la investigación de Product demuestre que alguno de sus compromisos, supuestos o formulaciones ya no representa adecuadamente la plataforma perseguida.

---

## 2. La visión de la plataforma

La plataforma aspira a proporcionar un entorno en el que personas, grupos y organizaciones puedan desarrollar actividades relacionadas con la creación, organización, enriquecimiento, conservación, intercambio y publicación de información y otros contenidos relevantes para su trabajo.

La plataforma deberá poder acompañar procesos que evolucionan a lo largo del tiempo y en los que pueden intervenir, según el contexto, actividades de creación, revisión, colaboración, publicación, consulta, trazabilidad o preservación.

Su ámbito no queda restringido a una disciplina, tipo de contenido, modalidad de trabajo o clase de participante determinada. La plataforma deberá poder adaptarse tanto al trabajo individual como a situaciones colectivas y organizativas cuando los compromisos de Product correspondientes justifiquen esas capacidades.

Esta amplitud de propósito no presupone la existencia de un único modelo conceptual común a todos esos contextos ni determina por anticipado cuáles deberán ser las entidades, estructuras o relaciones fundamentales del sistema.

En particular:

```text
visión de Product
        ⇏
conocimiento como objeto fundamental necesario

visión de Product
        ⇏
documento como unidad fundamental necesaria

visión de Product
        ⇏
modelo conceptual único predeterminado
```

El conocimiento, los documentos, las unidades de información y otras estructuras propuestas durante la historia del proyecto podrán resultar pertinentes para determinadas situaciones o capacidades, pero su estatuto deberá justificarse en el ámbito competente antes de adquirir autoridad sobre Product.

La evolución de la plataforma deberá preservar la posibilidad de incorporar nuevas capacidades sin convertir anticipadamente una solución histórica, una abstracción conceptual o una estructura técnica determinada en definición necesaria del producto.

La tecnología constituye un medio para realizar los compromisos de Product y no una fuente independiente de dichos compromisos.

---

## 3. Principios del producto

### 3.1 Evolución sin sustitución

La plataforma deberá ofrecer sus capacidades de forma progresiva, evitando que las funciones avanzadas aumenten innecesariamente la dificultad de las operaciones básicas.

Cada persona podrá utilizar únicamente las herramientas necesarias para la actividad que esté realizando y acceder a capacidades más especializadas cuando el contexto lo requiera. La complejidad del sistema deberá adaptarse a las necesidades de cada uso, sin clasificar permanentemente a los usuarios según niveles rígidos.

De este modo, la plataforma podrá mantener una experiencia sencilla para las operaciones habituales y, al mismo tiempo, proporcionar modelos de trabajo avanzados para contextos que requieran colaboración, versionado, publicación, trazabilidad o preservación.

La incorporación de nuevas capacidades no debe reemplazar los modelos de trabajo existentes, sino ampliarlos de forma progresiva. Cada nivel de evolución debe mantener plenamente operativo el anterior, permitiendo que el usuario descubra nuevas posibilidades únicamente cuando aporten un beneficio real.

Este enfoque favorece una evolución continua del producto y evita que el crecimiento funcional aumente innecesariamente la complejidad para quienes no necesitan utilizar las capacidades más avanzadas.

### 3.2 Principio de continuidad de uso

El usuario debe poder empezar de la forma más sencilla posible y crecer hacia modelos más complejos sin tener que cambiar de herramienta ni de forma de trabajar.

---

## 4. Capacidades generales perseguidas

La visión de la plataforma comprende un conjunto de capacidades generales que podrán incorporarse progresivamente cuando su necesidad quede justificada por Product.

Entre ellas se encuentran:

- creación e incorporación de contenidos;
- organización y recuperación;
- descripción y enriquecimiento progresivo;
- establecimiento de relaciones;
- anotación;
- revisión;
- conservación de estados significativos;
- trazabilidad de la evolución;
- colaboración;
- evaluación crítica;
- intercambio;
- publicación;
- reutilización;
- y preservación.

Esta enumeración expresa capacidades perseguidas por la visión.

No determina por sí misma:

- qué entidades deberán realizarlas;
- cuál será la unidad fundamental del sistema;
- qué modelo conceptual deberá adoptarse;
- qué relaciones estructurales deberán existir entre ellas;
- ni mediante qué arquitectura o implementación deberán materializarse.

Por tanto:

```text
capacidad perseguida
        ⇏
estructura conceptual predeterminada
```

y:

```text
presencia histórica de una solución
        ⇏
necesidad de esa solución
```

La incorporación efectiva de cada capacidad deberá justificarse mediante los compromisos correspondientes de Product y, cuando sea necesario determinar las estructuras capaces de realizarla, mediante la investigación del cuerpo competente.

### 4.1 Evolución de los contenidos y conservación de estados

La plataforma deberá poder acompañar situaciones en las que un contenido evoluciona a lo largo del tiempo sin que cada modificación deba constituir necesariamente un estado formal independiente.

Cuando el contexto lo requiera, deberá ser posible reconocer determinados estados como referencias estables dentro de su evolución.

La visión contempla que esos estados puedan utilizarse, según las capacidades finalmente justificadas, para operaciones como:

- consulta;
- comparación;
- referencia;
- restauración;
- trazabilidad;
- o publicación.

La determinación de si estos estados deben realizarse mediante versiones, revisiones, instantáneas u otra estructura pertenece a decisiones posteriores y no queda fijada por esta visión.

La publicación de un estado no deberá provocar que modificaciones posteriores alteren retrospectivamente aquello que fue publicado.

### 4.2 Organización, recuperación y enriquecimiento

La plataforma deberá facilitar que los contenidos incorporados puedan encontrarse, organizarse y enriquecerse progresivamente conforme aparecen nuevas necesidades de uso.

La descripción de un contenido no tiene por qué quedar agotada en el momento de su incorporación.

Podrán añadirse posteriormente, cuando resulte pertinente:

- información descriptiva;
- relaciones;
- anotaciones;
- contexto;
- referencias;
- clasificaciones;
- u otros elementos que faciliten su recuperación, comprensión o reutilización.

Esta capacidad no presupone un modelo determinado de catalogación ni convierte ninguna estructura histórica de clasificación en requisito necesario del producto.

### 4.3 Relaciones y reutilización

La visión contempla que los contenidos puedan adquirir utilidad adicional mediante su relación con otros contenidos, actividades o contextos.

La plataforma deberá poder permitir, cuando Product lo justifique, que un mismo contenido participe en distintos contextos de uso sin que ello exija necesariamente duplicarlo o alterar su identidad.

Las relaciones podrán servir, entre otros fines, para facilitar:

- navegación;
- contextualización;
- descubrimiento;
- comparación;
- referencia;
- reutilización;
- y trazabilidad.

La naturaleza concreta de dichas relaciones y de los elementos relacionados no queda determinada por este documento.

### 4.4 Evaluación crítica y transparencia

La plataforma no deberá atribuirse como función general la determinación de la verdad de los contenidos.

Podrá, en cambio, proporcionar información y mecanismos que permitan a las personas evaluar de forma más informada su procedencia, evolución, fundamentación y contexto.

Cuando resulte pertinente, podrán hacerse visibles elementos como:

- autoría;
- fuentes;
- metodología declarada;
- historial de cambios o revisiones;
- limitaciones;
- relaciones con otros contenidos;
- y otros indicadores relevantes para el contexto de uso.

Estos mecanismos deberán favorecer el juicio crítico de las personas sin sustituirlo por una valoración universal impuesta por la plataforma.

Los criterios de evaluación podrán variar entre comunidades, actividades o contextos cuando Product justifique esa diversidad.

### 4.5 Colaboración y publicación

La visión contempla situaciones en las que varias personas participan en la creación, revisión, enriquecimiento o difusión de contenidos.

La plataforma deberá poder incorporar capacidades de colaboración progresivamente, sin convertirlas en requisito para los usos individuales que no las necesiten.

Del mismo modo, la publicación deberá poder constituir un acto identificable dentro de la evolución de un contenido y no necesariamente el final de su desarrollo.

La existencia de colaboración o publicación no determina por sí misma el modelo de participantes, permisos, gobierno, estados o procesos que deberá adoptarse.

### 4.6 Preservación y continuidad

La plataforma aspira a conservar aquello que resulte necesario para que los contenidos y sus contextos relevantes puedan seguir siendo localizables, interpretables y utilizables a lo largo del tiempo.

La preservación podrá requerir conservar no sólo determinados contenidos, sino también información necesaria para comprender su procedencia, relaciones, estados o evolución.

Esta visión no presupone qué estructuras conceptuales o técnicas serán necesarias para proporcionar dicha continuidad.

## 5. Frontera entre visión e investigación

Las capacidades descritas en esta visión no constituyen por sí mismas una teoría acerca de la estructura fundamental del dominio.

Durante la historia del proyecto se han considerado, entre otras, hipótesis basadas en:

- conocimiento;
- documentos;
- unidades de información;
- recursos;
- obras, ediciones y ejemplares;
- espacios de trabajo;
- proyectos;
- niveles de información y creación;
- mapas de conocimiento;
- catalogación viva;
- y diferentes formas de versionado.

Estas hipótesis poseen valor histórico e investigador, pero su aparición durante la elaboración de la visión no les concede autoridad constitutiva sobre Product.

Por tanto:

```text
hipótesis histórica
        ⇏
compromiso de Product
intuición de diseño
        ⇏
estructura necesaria del dominio
capacidad deseada
        ⇏
entidad fundamental predeterminada
```

Cuando un compromiso de Product plantee una cuestión cuya resolución requiera determinar entidades, relaciones, invariantes, responsabilidades o estructuras necesarias, dicha cuestión deberá investigarse independientemente en el cuerpo competente.

Los resultados conservados en `research/corpus/` podrán utilizarse como antecedentes o candidatos cuando resulten pertinentes, pero su reutilización requerirá justificar expresamente su aplicabilidad al problema concreto.

La visión permanece así deliberadamente abierta respecto de las soluciones conceptuales, arquitectónicas, realizativas e implementativas capaces de satisfacerla.

---
