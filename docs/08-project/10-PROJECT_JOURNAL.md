1. Objetivo

2. Cómo se organiza el diario

3. Evolución del proyecto

   3.1 Reorganización del sistema documental

   3.2 Consolidación del sistema documental

   3.3 Primera derivación desde Product y determinación del estado de continuidad

4. Ideas pendientes de maduración

# 1. Objetivo

Este documento recoge la evolución del proyecto desde sus primeras versiones hasta su estado actual.

Su finalidad es conservar la memoria técnica del desarrollo, registrando los principales hitos, las decisiones adoptadas, las refactorizaciones realizadas y las lecciones aprendidas durante cada etapa.

A diferencia de `PROJECT_STATUS.md`, que describe el estado presente del proyecto, este documento documenta el camino recorrido para alcanzarlo. Tampoco sustituye a los documentos de arquitectura o a los ADR, sino que proporciona el contexto histórico que explica cómo y por qué el proyecto ha evolucionado.

Cada entrada del diario representa un hito significativo en la evolución del sistema y constituye una referencia para comprender las decisiones tomadas en cada momento del desarrollo.

En conjunto, este documento actúa como el registro histórico del proyecto y complementa el resto de la documentación técnica preservando el conocimiento adquirido a lo largo de su evolución.

# 2. Cómo se organiza el diario

El diario se organiza en torno a hitos significativos de la evolución del proyecto y no como una sucesión de registros diarios.

Cada entrada documenta un cambio relevante en la arquitectura, la organización del código, las funcionalidades implementadas o la documentación técnica, independientemente del número de sesiones necesarias para completarlo.

Con este enfoque, el diario recoge únicamente aquellos acontecimientos que han contribuido de forma significativa a la evolución del proyecto, evitando registrar cambios menores o tareas rutinarias.

Cada hito sigue una estructura homogénea que facilita su consulta y permite comprender tanto el resultado obtenido como el proceso que condujo hasta él.

Las referencias incluidas en cada entrada reflejan el contexto existente en el momento en que se produjo el hito documentado. Por ello, pueden mencionar documentos, estructuras o decisiones que posteriormente hayan evolucionado o hayan sido sustituidos.

De forma general, cada entrada incluye:

- Contexto u objetivo del trabajo realizado.
- Cambios más relevantes incorporados al proyecto.
- Principales decisiones adoptadas.
- Dificultades encontradas y forma de resolverlas.
- Lecciones aprendidas durante el desarrollo.

Esta organización permite utilizar el diario como un registro histórico del proyecto, preservando el conocimiento adquirido durante su evolución y facilitando la comprensión de las decisiones tomadas en cada etapa.

# 3. Registro de hitos

> ## 3.1 Reorganización del sistema documental

### Contexto

A medida que el proyecto fue creciendo, la documentación dejó de ser un conjunto de documentos independientes para convertirse en una parte esencial del propio proceso de desarrollo.

La incorporación progresiva de nuevos contenidos puso de manifiesto la necesidad de reorganizar la documentación, asignando a cada documento una responsabilidad claramente definida y evitando duplicidades entre ellos.

### Objetivo

El objetivo de esta reorganización fue construir un sistema documental coherente, escalable y alineado con la arquitectura del proyecto, de forma que cada documento respondiera a una pregunta concreta y complementara al resto sin solapamientos.

### Cambios principales

Durante esta etapa se llevó a cabo una reorganización completa de la documentación:

- Se redefinió la estructura de directorios bajo `docs/`.
- Se creó `VISION.md` como documento que establece el propósito del proyecto.
- Se reorganizó la documentación del proyecto en torno a `PRODUCT.md`, `PROJECT_STATUS.md`, `PROJECT_JOURNAL.md` y `ROADMAP.md`.
- La documentación de arquitectura pasó a agruparse bajo `docs/02-architecture/`, incorporando la evolución de la arquitectura y los ADR.
- La documentación de desarrollo se consolidó en `docs/03-development/`.
- Se eliminaron documentos cuya responsabilidad quedó absorbida por la nueva estructura, como `decisions-log.md`.
- Se incorporó GLOSSARY.md como referencia terminológica común para todo el sistema documental.

### Resultado

Como resultado de esta reorganización, la documentación pasó a constituir un sistema estructurado en el que cada documento posee un propósito específico y mantiene una relación coherente con el resto.

Este cambio permitió que la documentación evolucionara siguiendo los mismos principios de diseño que la propia arquitectura del software: responsabilidad única, alta cohesión, bajo acoplamiento y evolución incremental.

### Lecciones aprendidas

La documentación de un proyecto no debe limitarse a describir el software. Cuando evoluciona de forma coherente con el propio sistema, se convierte en una herramienta para preservar conocimiento, facilitar la toma de decisiones y acompañar el crecimiento del proyecto a largo plazo.

## 3.2 Consolidación del sistema documental

### Contexto

Tras completar la reorganización de la documentación del proyecto, se inició una fase de revisión sistemática con el objetivo de verificar la coherencia del conjunto y asegurar que cada documento cumpliera una responsabilidad claramente definida.

Durante esta etapa se revisó el sistema documental desde distintas perspectivas, incluyendo la distribución de responsabilidades, la terminología empleada, las referencias cruzadas, la estructura de los documentos y las convenciones editoriales.

### Objetivo

El objetivo de esta fase fue consolidar el sistema documental como una parte estable de la arquitectura del proyecto, garantizando su coherencia interna, su facilidad de mantenimiento y su utilidad tanto para desarrolladores humanos como para agentes de desarrollo.

### Cambios principales

Durante esta etapa se llevaron a cabo las siguientes actuaciones:

- Se realizó una auditoría de responsabilidades para verificar que cada documento asumiera una única función claramente definida.
- Se eliminaron duplicidades entre documentos y se reforzó la separación de responsabilidades.
- Se unificó la terminología del proyecto y se creó `GLOSSARY.md` como referencia terminológica común.
- Se revisaron y completaron las referencias cruzadas entre todos los documentos del sistema.
- Se incorporaron convenciones editoriales para la creación y el mantenimiento de la documentación.
- Se definieron criterios comunes para diagramas, tablas, convenciones tipográficas y estructura documental.
- Se documentó el ciclo de vida del conocimiento del proyecto, diferenciando entre lecciones aprendidas, principios consolidados y convenciones de trabajo.
- Se completó una auditoría global de coherencia que validó la uniformidad estructural y editorial del conjunto de la documentación.

### Resultado

Como resultado de esta fase, el proyecto dispone de un sistema documental coherente, modular y mantenible, en el que cada documento desempeña una responsabilidad específica y complementa al resto sin solapamientos.

La documentación ha pasado a formar parte de la arquitectura del proyecto y constituye una herramienta integrada dentro del propio proceso de desarrollo. El mantenimiento documental dispone ahora de criterios explícitos de organización, terminología, navegación y estilo que facilitan la evolución del proyecto a largo plazo.

Con la consolidación del sistema documental, el proyecto queda preparado para retomar la evolución funcional del producto sobre una base documental estable.

### Lecciones aprendidas

La consolidación de un sistema documental requiere un proceso de revisión tan riguroso como el aplicado al propio código fuente. La calidad de la documentación no depende únicamente del contenido que describe, sino también de la claridad de sus responsabilidades, de la coherencia de su terminología y de la consistencia de sus relaciones internas.

La experiencia obtenida durante esta etapa ha demostrado que un sistema documental bien diseñado reduce la complejidad del proyecto, facilita la incorporación de nuevos colaboradores y proporciona un marco estable para acompañar la evolución del software sin perder conocimiento ni introducir inconsistencias.

## 3.3 Primera derivación desde Product y determinación del estado de continuidad

### Contexto

Tras la consolidación del fundamento teórico y la auditoría global del proyecto, se reconstruyó `PRODUCT.md` y se estableció `PV-001` como primera vertical consolidada.

La nueva etapa abandonó la utilización automática de la secuencia histórica entre cuerpos del proyecto. La existencia de Product no debía conducir por sí misma a Engineering, Architecture, Realization o Implementation.

Cada actuación posterior debía quedar justificada por una necesidad efectivamente derivada del estado consolidado.

### Objetivo

El objetivo de esta etapa fue determinar qué actuación podía derivarse del compromiso establecido por `PV-001`, someter la candidata obtenida a evaluación sin repararla retrospectivamente y comprobar, una vez agotada esa derivación, si el estado resultante exigía alguna actuación posterior.

### Cambios principales

Durante esta etapa:

- se reconstruyó y auditó `PRODUCT.md`;
- se consolidó `PV-001` como primera vertical de producto;
- se derivó `R-PV001-001` como primera realización experimental;
- se formularon y construyeron dispositivos experimentales destinados a evaluar la candidata;
- se identificaron y redujeron progresivamente las pérdidas aparecidas durante dicha evaluación;
- se mantuvieron congeladas las decisiones experimentales cuando su modificación habría convertido la evaluación en reparación retrospectiva;
- se cerró la investigación de `R-PV001-001` sin establecer que la candidata satisficiera `CR-PV001-01`;
- se comprobó que ese resultado no falsaba `PV-001` ni `CR-PV001-01`;
- y se examinó si del estado resultante podía derivarse alguna actuación posterior necesaria.

### Decisiones principales

La evaluación de una candidata no obliga a repararla hasta obtener un resultado favorable.

El fracaso probatorio de una realización concreta tampoco deriva automáticamente:

```text
otra realización
PV-002
reapertura de investigación fundamental
Engineering
Architecture
Implementation
```

La existencia de cuerpos incompletos, posibilidades todavía no exploradas o situaciones potencialmente valiosas tampoco constituye por sí misma fundamento suficiente para continuar la derivación.

Toda actuación posterior deberá disponer de un fundamento positivo independiente perteneciente al cuerpo competente.

### Resultado

La secuencia alcanzada puede resumirse así:

```text
PRODUCT.md
        ↓
PV-001
        ↓
R-PV001-001
        ↓
evaluación no reparadora
        ↓
satisfacción de CR-PV001-01
no establecida
        ↓
investigación cerrada
        ↓
búsqueda de actuación posterior
        ↓
ninguna actuación actualmente derivada
```

`R-PV001-001` queda conservada como candidata derivada y evaluada dentro de su alcance histórico.

Su evaluación no permite establecer su satisfacción de `CR-PV001-01`, pero tampoco proporciona fundamento para modificarla retrospectivamente, sustituirla automáticamente o derivar una sucesora.

El proyecto alcanza así un estado legítimo en el que no existe actualmente una actuación siguiente obligatoria.

Este estado no declara terminado ni completo el proyecto.

Una actuación futura podrá abrirse cuando aparezca una pérdida concreta, nueva evidencia, una dependencia necesaria, una incompatibilidad, una nueva situación justificadamente seleccionada por Product u otro fundamento independiente suficiente dentro del cuerpo competente.

### Dificultades encontradas

La principal dificultad consistió en distinguir entre:

```text
algo todavía no resuelto
```

y:

```text
una obligación actualmente derivada de resolverlo.
```

Durante la investigación aparecieron numerosas preguntas que podían continuar desarrollándose, pero su mera formulabilidad no demostraba que pertenecieran al camino necesario de evaluación de la candidata.

Fue necesario reconstruir repetidamente la genealogía de las obligaciones para impedir que nuevas preguntas, criterios o construcciones adquirieran autoridad únicamente por haber surgido durante la investigación.

La misma distinción resultó necesaria al finalizar la evaluación: la incompletitud del proyecto no podía utilizarse como fundamento circular para exigir que siempre existiera una siguiente actuación.

### Lecciones aprendidas

Una investigación puede alcanzar un resultado metodológicamente válido sin producir una candidata favorable ni una actuación posterior.

La ausencia de una siguiente actuación derivada constituye un estado posible del proyecto y no una pérdida que deba repararse por sí misma.

La continuidad del trabajo debe derivarse de una necesidad demostrada y no del hecho de que todavía sea posible formular nuevas preguntas.

La trazabilidad exige conservar no sólo por qué se realizó una actuación, sino también por qué, llegado un determinado estado, **no se encuentra justificado realizar otra**.

# 4. Ideas pendientes de maduración

## 4.1 Evaluación de la consistencia del conocimiento

Idea surgida durante la sesión: estudiar un modelo de evaluación de la consistencia del conocimiento basado en indicadores de fundamentación y transparencia, evitando que la plataforma actúe como árbitro de la veracidad de los contenidos.

La plataforma podría incorporar un modelo de indicadores de consistencia destinado a aportar contexto sobre el proceso de creación y evolución de un documento.

Estos indicadores no tendrían como finalidad determinar la veracidad del contenido, sino facilitar una evaluación crítica por parte de los lectores.

Cada comunidad o contexto de uso podría definir qué indicadores considera relevantes, evitando imponer un único modelo de validación del conocimiento.

## 4.2 concepto de documento

¿Debe el concepto de Documento definirse por la naturaleza del contenido que representa (texto, imagen, audio, vídeo...) o únicamente por su función como unidad de conocimiento, independientemente del medio utilizado?

## 4.3 herramientas

Idea para futuras herramientas de apoyo: incorporar un sistema de traducción de textos como una de las utilidades básicas de la plataforma. Esta capacidad se considera parte del conjunto de herramientas de apoyo al trabajo intelectual y no del núcleo conceptual del dominio. En fases posteriores podrá ampliarse con otras herramientas como corrección lingüística, resumen, comparación de versiones o asistencia mediante IA.

## 4.4 lector libros

Idea para futuras herramientas de apoyo: incorporar un lector integrado capaz de visualizar distintos tipos de documentos (libros electrónicos, PDF, artículos, etc.), evitando depender de aplicaciones externas y proporcionando una experiencia unificada de lectura y estudio.

no hablamos de un "Kindle". Hablamos de un lector de documentos.

Y mañana podría incorporar:

subrayados;
anotaciones;
traducción;
lectura en voz alta;
comparación de versiones.

---

---

# Ficha de evolución del proyecto

## Fecha

19/08/2026

## Actuación

Reconstrucción y auditoría de `ROADMAP.md`.

### Situación inicial

Tras la reconstrucción y consolidación de `PRODUCT.md`, la investigación de `PV-001` y la determinación del estado global del proyecto, se estableció que actualmente no existe ninguna actuación siguiente cuya necesidad haya quedado derivada del estado consolidado.

La auditoría posterior de `ROADMAP.md` mostró que el documento conservaba líneas estratégicas procedentes mayoritariamente del escenario anterior de la Todo App, entre ellas posibles evoluciones de arquitectura, dominio, funcionalidad, infraestructura, calidad y documentación.

También conservaba una sección de ideas en evaluación relativa a posibles desarrollos futuros.

La existencia histórica de estas propuestas no demostraba su vigencia estratégica respecto del producto actualmente consolidado.

---

### Problema detectado

Debía determinarse si:

```text
ROADMAP.md
→ exige mantener alguna línea estratégica concreta vigente
```

o si:

```text
líneas estratégicas concretas vigentes
→ pueden ser ∅
```

sin que ello constituya:

- una incompletitud documental;
- una obligación de buscar nuevas líneas;
- una obligación de seleccionar una nueva vertical de Product;
- ni una obligación de derivar una nueva actuación del proyecto.

También debía determinarse el estatuto de las líneas e ideas históricas cuya vigencia actual no había quedado demostrada.

---

### Resultado de la auditoría

No se identificó ningún compromiso que obligue a `ROADMAP.md` a contener permanentemente al menos una línea estratégica concreta.

Se estableció:

```text
ROADMAP.md
→ puede existir legítimamente

líneas estratégicas concretas vigentes
→ pueden ser ∅
```

La ausencia de líneas estratégicas vigentes:

```text
↛ incompletitud documental

↛ cierre del proyecto

↛ agotamiento de posibilidades futuras

↛ obligación de buscar una nueva línea

↛ obligación de determinar una nueva actuación
```

La existencia del Roadmap conserva una responsabilidad independiente aunque actualmente no exista ninguna línea concreta que deba ocuparlo.

---

### Estatuto consolidado de `ROADMAP.md`

La responsabilidad vigente de `ROADMAP.md` queda limitada a registrar aquellas líneas estratégicas de evolución cuya vigencia haya quedado suficientemente justificada respecto del estado consolidado del proyecto.

Se establece:

```text
ROADMAP.md
→ carácter orientativo
→ no normativo
→ no determina automáticamente prioridades
→ no determina automáticamente actuaciones
→ no determina automáticamente qué cuerpo debe intervenir
```

Una línea estratégica:

```text
↛ compromiso de Product

↛ obligación de implementación

↛ prioridad automática

↛ siguiente actuación justificable
```

Toda incorporación futura requerirá una justificación independiente suficiente.

---

### Criterio de incorporación

Se consolidó la relación:

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

No constituyen fundamento suficiente por sí solos:

```text
existencia histórica
↛ vigencia estratégica

posibilidad técnica
↛ vigencia estratégica

compatibilidad con la implementación existente
↛ vigencia estratégica

posibilidad futura
↛ vigencia estratégica
```

La ausencia de contenido estratégico concreto tampoco constituye fundamento para introducir artificialmente una nueva línea.

---

### Tratamiento de las líneas históricas

Las líneas estratégicas procedentes del Roadmap anterior fueron retiradas del estado vigente porque su pertinencia respecto del producto actualmente consolidado no había sido demostrada.

Su retirada:

```text
↛ falsación

↛ imposibilidad futura

↛ descarte definitivo
```

Establece únicamente:

```text
vigencia estratégica actual
→ no demostrada
```

No se realizó una reevaluación individual de dichas líneas, porque la reconstrucción documental no exigía determinar si podrían resultar útiles en algún estado futuro del proyecto.

El contenido literal anterior permanece preservado mediante la historia del sistema de control de versiones.

---

### Tratamiento de las ideas en evaluación

Las ideas anteriormente incluidas en la sección de evaluación de `ROADMAP.md` fueron retiradas del documento vigente.

Se comprobó que no se encontraban actualmente registradas como propuestas identificables en `DESIGN_JOURNAL.md`.

No fueron trasladadas automáticamente.

Se estableció:

```text
retirada de ROADMAP.md
↛ incorporación automática a DESIGN_JOURNAL.md
```

porque dicho traslado habría atribuido nuevamente a esas propuestas un estatuto de posibilidad viva en evaluación cuya pertinencia respecto del estado actual tampoco había sido demostrada.

Su existencia histórica permanece preservada mediante el sistema de control de versiones.

---

### Reconstrucción de `ROADMAP.md`

`ROADMAP.md` fue reconstruido conservando exclusivamente:

- su propósito;
- su responsabilidad;
- su estatuto no normativo;
- el criterio de incorporación de futuras líneas;
- la relación con los demás documentos;
- los principios de mantenimiento;
- y la declaración explícita de su estado actual.

El resultado vigente establece:

```text
líneas estratégicas concretas vigentes
→ ninguna actualmente
```

y:

```text
ausencia de líneas
→ estado legítimo
→ no constituye incompletitud
→ no genera obligación de búsqueda
```

---

### Auditoría interna

El documento reconstruido fue sometido a una búsqueda específica destinada a localizar restos semánticos de las antiguas líneas estratégicas o formulaciones que pudieran reintroducir:

- evolución prevista;
- prioridades;
- continuidad obligatoria;
- soluciones técnicas concretas;
- funcionalidades históricas;
- infraestructura anticipada;
- o una obligación de determinar la siguiente actuación.

No se localizaron restos de las antiguas líneas concretas.

Las referencias supervivientes a prioridad, implementación y siguiente actuación poseen carácter restrictivo y establecen precisamente que `ROADMAP.md` no posee autoridad para determinarlas automáticamente.

La auditoría interna se considera superada.

---

### Propagación documental

Se auditó la propagación del nuevo estatuto de `ROADMAP.md` sobre los documentos que lo referencian.

Se determinó:

```text
ARCHITECTURE.md
→ descripción compatible
→ sin modificación

DEVELOPMENT_GUIDE.md
→ descripción compatible
→ sin modificación

DESIGN_JOURNAL.md
→ relación documental compatible
→ sin modificación

AUDITORIA_GLOBAL_DEL_PROYECTO.md
→ evidencia histórica
→ sin modificación

PROJECT_JOURNAL.md
→ contenido histórico conservado
→ nueva ficha añadida
```

Se modificó:

```text
TESTING.md
```

para eliminar la atribución de una «evolución prevista del proyecto» y describir `ROADMAP.md` conforme a su responsabilidad vigente.

También se modificó:

```text
PROJECT_STATUS.md
```

porque todavía presentaba la revisión de `ROADMAP.md` como una actuación pendiente.

El estado declarado fue actualizado para reflejar que el Roadmap ha sido reconstruido y que actualmente no existe ninguna línea estratégica concreta vigente.

---

### Estado resultante

```text
ROADMAP.md
→ reconstruido
→ auditado
→ carácter no normativo
→ responsabilidad vigente

líneas estratégicas concretas vigentes
→ ninguna actualmente

líneas históricas anteriores
→ retiradas del estado vigente
→ no declaradas falsas
→ preservadas históricamente

ideas históricas en evaluación
→ retiradas
→ no trasladadas automáticamente
→ preservadas históricamente

TESTING.md
→ propagación realizada

PROJECT_STATUS.md
→ propagación realizada

auditoría interna de ROADMAP.md
→ superada

auditoría de propagación
→ superada
```

---

### Consecuencia sobre el estado global

La reconstrucción de `ROADMAP.md` no produce una nueva actuación material del proyecto.

Por el contrario, confirma documentalmente el resultado previamente alcanzado:

```text
estado consolidado
        ↓
compromisos vigentes
        ↓
actuaciones actualmente necesarias
        ↓
ninguna nueva actuación derivada
```

La ausencia actual de una actuación siguiente no constituye una pérdida que deba repararse.

Tampoco obliga a utilizar `ROADMAP.md`, `DESIGN_JOURNAL.md`, Product u otro cuerpo como mecanismo para generar artificialmente una nueva dirección de trabajo.

---

### Punto de continuación

No queda prescrita una nueva actuación por continuidad documental.

Cualquier actuación posterior deberá partir de una necesidad, pérdida, compromiso, oportunidad suficientemente justificada u otro fundamento identificable que aparezca respecto del estado consolidado.

Hasta que exista dicho fundamento:

```text
siguiente actuación actualmente derivada
→ ninguna
```

Este resultado constituye un estado legítimo del proyecto y no una obligación pendiente de resolución.

---

---

# Ficha de evolución del proyecto

## Fecha

19/08/2026

## Actuación

Cierre de la auditoría global de continuidad del proyecto.

### Situación inicial

La determinación de la siguiente actuación justificable a partir del estado consolidado del proyecto había producido un resultado negativo legítimo:

```text
siguiente actuación actualmente derivada
→ ninguna
```

---

## Cierre de la auditoría histórica del Design Journal

**Fecha:** 20/08/2026

### Contexto

Tras la consolidación y auditoría de `PRODUCT.md`, permanecía pendiente reevaluar el corpus histórico de `DESIGN_JOURNAL.md` para determinar si alguna de sus propuestas conservaba una posibilidad humana no recogida por los compromisos vigentes de Product.

La revisión debía realizarse sin recuperar directamente las soluciones históricas como requisitos del producto.

Para ello, cada familia fue reconstruida eliminando primero el vocabulario y los mecanismos mediante los que había sido formulada y buscando después la situación humana que pudiera haberla originado.

### Trabajo realizado

Se realizó una auditoría reconstructiva y falsadora de las familias históricas recuperadas del Design Journal.

La revisión comprendió:

- las familias principales de Participante, Transparencia editorial, Modelo de publicación y Modelo de monetización;
- el universo histórico candidato reconstruido de «Otras ideas»;
- las pruebas de eliminación y reducción de las posibilidades candidatas;
- la investigación transversal `PA-EP-001` sobre el significado de que una persona pueda realizar una actuación;
- una revisión transversal de los residuos aparecidos durante las auditorías individuales;
- y una auditoría global final destinada a comprobar si alguna familia conservaba un residuo positivo independiente.

La justificación completa del recorrido queda consolidada en `07-AUDITORIA_HISTORICA_DEL_DESIGN_JOURNAL.md`.

### Resultado

La auditoría no identificó ninguna posibilidad humana irreducible que justifique actualmente un nuevo compromiso de Product.

Las propuestas históricas pudieron:

- reducirse a diferencias o relaciones cuya pertinencia depende de compromisos independientemente justificados;
- quedar absorbidas por compromisos ya existentes;
- identificarse como posibles mecanismos de realización;
- o cerrarse por ausencia de fundamento independiente.

La situación reconstruida detrás de Transparencia editorial quedó absorbida por `PV-001` y no produjo una ampliación independiente.

La investigación transversal `PA-EP-001` tampoco derivó un nuevo compromiso.

### Consecuencias

El cierre produce las siguientes consecuencias:

```text
PRODUCT.md
        → sin modificación

PV-001
        → sin modificación

PV-002
        → no derivada

corpus histórico auditado
de DESIGN_JOURNAL.md
        → cerrado respecto del Product
          actualmente consolidado

DESIGN_JOURNAL.md
        → mantiene su responsabilidad
          como espacio de incubación
          de nuevas propuestas
```

Las propuestas históricas permanecen conservadas como registro de la evolución del proyecto, pero su presencia documental no les confiere vigencia normativa ni las convierte en trabajo pendiente.

### Cambios documentales

Como consecuencia del cierre:

- se incorpora `07-AUDITORIA_HISTORICA_DEL_DESIGN_JOURNAL.md` como documento de justificación;
- se actualiza `06-DESIGN_JOURNAL.md` para declarar el estado de su corpus histórico auditado;
- se actualiza `09-PROJECT_STATUS.md` para reflejar el nuevo estado del proyecto;
- `02-PRODUCT.md` permanece sin modificación sustantiva.

La documentación de `08-project` queda además ordenada mediante numeración explícita según su posición dentro del cuerpo documental del proyecto.

### Condición de reapertura

El cierre no implica que Product haya agotado todas las posibilidades humanas que puedan llegar a justificar compromisos futuros.

Una propuesta histórica podrá reabrirse si aparece nueva evidencia capaz de mostrar una pérdida humana concreta que:

1. sobreviva a la eliminación de la solución histórica;
2. no pueda reducirse a los compromisos vigentes;
3. y disponga de fundamento positivo independiente.

La utilidad técnica, la presencia histórica de una propuesta o su posible pertinencia futura no constituyen por sí mismas fundamento suficiente para reabrirla.

### Estado

**Auditoría histórica del Design Journal: cerrada.**

**Residuo positivo pendiente: ninguno.**

**Modificación de Product derivada de la auditoría: ninguna.**

---

# Reorganización del corpus de investigación y cierre del control global documental

**Fecha:** 22/08/2026

## Situación de partida

El proyecto conservaba bajo `docs/` varios cuerpos desarrollados históricamente durante la investigación:

- Conceptual Model;
- Governance;
- Engineering;
- Realization;
- Implementation.

La organización documental podía inducir a interpretar estos cuerpos como etapas necesarias de una secuencia normativa del proyecto principal y a considerar sus resultados como presupuestos automáticos de actuaciones posteriores.

La revisión global mostró además la necesidad de distinguir con mayor precisión entre:

- documentación vigente del proyecto;
- cuerpos de investigación conservados;
- metodología transversal;
- fuentes históricas;
- y estado actual del proyecto.

## Actuación realizada

Se efectuó una reorganización estructural y una revisión transversal de la documentación.

Los cuerpos históricos de investigación fueron trasladados desde `docs/` a:

```text
research/corpus/
```

quedando organizados como:

```text
research/corpus/
├── conceptual-model/
├── governance/
├── engineering/
├── implementation/
└── realization/
```

La nueva ubicación expresa su conservación como cuerpos de investigación y no establece por sí misma una secuencia normativa, una dependencia general entre ellos ni una obligación de intervención para el proyecto principal.

Se creó:

```text
research/corpus/README.md
```

como punto de entrada documental del corpus.

El documento establece:

- el estatuto y procedencia histórica del corpus;
  su perímetro documental;
- la autonomía de responsabilidad de los cuerpos conservados;
  la ausencia de una teoría transversal única actualmente demostrada;
- la separación entre resultados del corpus y compromisos de Product;
- las condiciones de reutilización de resultados;
  su relación con Methodology y Metatheory;
- y la preservación de las referencias históricas sin reescritura retrospectiva.

## Consolidación metodológica

El Protocolo de Consolidación Documental dejó de conservarse como documento propio de Conceptual Model o Governance y pasó a disponer de una única referencia canónica en:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
```

Con ello se reconoce su responsabilidad metodológica transversal y se elimina la duplicación documental histórica.

## Revisión de dependencias entre cuerpos

Se revisaron específicamente formulaciones que podían convertir relaciones históricas entre cuerpos en dependencias generales o fases necesarias del proyecto.

La revisión afectó especialmente a:

- Governance;
- Realization;
- Implementation;
- documentación transversal del proyecto;
- documentos introductorios;
- Methodology;
- Metatheory;
- Vision;
- Product y estado del proyecto.

Como criterio general quedó establecido que:

```text
existencia de un resultado en otro cuerpo
        ⇏
presupuesto automático
```

y:

```text
orden documental
        ≠
orden lógico universal
        ≠
secuencia obligatoria de desarrollo
```

La utilización de resultados conservados en otro cuerpo deberá justificar su pertinencia, competencia, alcance y aplicabilidad respecto de la cuestión concreta investigada.

## Resolución de AG-001

La incidencia `AG-001`, relativa a una posible inversión entre Implementation y Realization, fue revisada.

No se demostró una dependencia general que obligara a establecer un orden lógico universal entre ambos cuerpos.

La incidencia quedó cerrada con el criterio:

```text
Implementation
        ⇏
Realization
```

y:

```text
Realization
        ⇏
Implementation
```

como relaciones generales necesarias.

Podrán existir dependencias entre resultados concretos de ambos cuerpos cuando sean justificadas localmente por una investigación.

## Revisión de la continuidad del proyecto

Se revisaron las formulaciones que podían reconstruir una secuencia automática desde Product hacia Engineering, Architecture, Implementation, Realization o implementación experimental.

Se consolidó el principio de que ninguna reorganización histórica ni ningún resultado previo determina automáticamente la siguiente actuación.

La actuación siguiente deberá derivarse del estado vigente del proyecto y de los compromisos que permanezcan abiertos en ese momento.

La reconstrucción histórica de Product permanece justificada como actuación adoptada tras la auditoría global, pero no establece una cadena universal de actuaciones posteriores.

## Revisión de la documentación introductoria

Se revisaron `INTRODUCTION.md`, `VISION.md` y `GLOSSARY.md` para eliminar formulaciones que pudieran identificar:

- Product con una aplicación software concreta;
- desarrollo con una progresión lineal;
- madurez con una secuencia obligatoria;
- o relaciones documentales con una jerarquía normativa de actuación.

La visión conserva su función orientadora sin determinar automáticamente el orden de desarrollo del proyecto.

## Preservación de las fuentes históricas

Las transcripciones utilizadas para reconstruir el origen y evolución inicial del proyecto fueron separadas de la documentación normativa.

Se conservaron en:

```text
research/history/codex/
```

La carpeta contiene nueve transcripciones históricas.

Su función es preservar evidencia y trazabilidad histórica.

No forman parte del árbol documental normativo del proyecto ni del corpus de investigación consolidado.

## Resultado estructural

Tras la reorganización, la separación principal queda establecida como:

```text
docs/
        documentación vigente y registros documentales del proyecto

research/corpus/
        cuerpos de investigación conservados

research/history/
        fuentes históricas
```

`Methodology` y `Metatheory` permanecen dentro de `docs/` por sus responsabilidades transversales actuales.

Los cuerpos conservados bajo `research/corpus/` permanecen disponibles para crítica, reapertura y eventual reutilización futura bajo justificación independiente.

## Controles realizados

Se realizaron controles sobre:

- rutas históricas;
- referencias entre cuerpos;
- formulaciones de dependencia;
- secuencias de fases;
- presupuestos automáticos;
- relaciones entre Implementation y Realization;
- continuidad automática desde Product;
- referencias documentales antiguas;
- recuentos documentales obsoletos;
- estructura física del nuevo corpus;
- fuentes históricas;
- y consistencia formal de los cambios.

El corpus trasladado quedó compuesto por:

```text
conceptual-model/    18 documentos
governance/          18 documentos
engineering/          7 documentos
implementation/       6 documentos
realization/          8 documentos
```

más:

```text
research/corpus/README.md
```

No se detectó pérdida de documentos durante el traslado.

El control formal final:

```text
git diff --check
```

no produjo ninguna salida.

## Estado alcanzado

La reorganización estructural y el control global documental quedan cerrados satisfactoriamente.

El proyecto dispone ahora de una separación explícita entre:

```text
documentación vigente
investigación conservada
fuentes históricas
```

sin convertir esa separación en una nueva teoría, jerarquía normativa o secuencia obligatoria.

Los resultados del corpus continúan disponibles, pero su incorporación a futuras actuaciones del proyecto requerirá justificación independiente.

La reorganización no deriva por sí misma una nueva actuación de Architecture, Development ni de ningún cuerpo del corpus.

## Punto de reanudación

Concluido este control, cualquier actuación posterior deberá determinarse a partir del estado vigente registrado en `PROJECT_STATUS.md` y de los compromisos que permanezcan abiertos.

No queda prescrita una siguiente actuación por continuidad con la reorganización documental realizada.
