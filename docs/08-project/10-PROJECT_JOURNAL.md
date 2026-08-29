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

## Fecha

22/08/2026

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

---

## Investigación y rechazo de una candidata a segunda vertical de Product

Tras la reorganización documental y la revisión del estado vigente del proyecto, se investigó si existía fundamento positivo para ampliar Product mediante una segunda vertical.

La investigación partió de una posible diferencia humana asociada a situaciones en las que una persona continúa actuando apoyándose en algo procedente de situaciones anteriores mientras aparece una variación posterior que podría intervenir también en esa actuación.

La candidata fue sometida sucesivamente a falsadores relativos a:

- ausencia de diferencia humana;
- reducción a disponibilidad de información;
- reducción a eficiencia;
- dependencia de escala o complejidad;
- circularidad de la pertinencia;
- dependencia de la intención de la persona;
- y generalidad extrínseca de la no clausura.

Durante la reducción se descartaron como fundamentos independientes formulaciones basadas en revisabilidad, respuesta al cambio, flexibilidad, adaptabilidad, pertinencia, intención y no clausura.

El residuo final quedó reducido a la posibilidad de que aquello procedente de distintas situaciones anteriores pueda intervenir en una situación posterior.

No se demostró que la concurrencia de esas aportaciones constituya por sí misma una diferencia humana independiente respecto de `PV-001`.

La candidata quedó por tanto rechazada como segunda vertical:

```text
candidata a PV-002
        ↓
valor humano independiente no demostrado
        ↓
reducción composicional a PV-001
        ↓
no consolidar PV-002
```

Este resultado no implica que `PV-001` comprometa toda composición, comparación, síntesis o relación imaginable entre aportaciones anteriores. Cualquier exigencia específica de ese tipo requerirá justificación independiente.

Tampoco se deriva de la investigación una obligación general de flexibilidad, adaptabilidad, revisabilidad o respuesta al cambio.

Como resultado metodológico adicional se preserva la distinción entre:

```text
posibilidad formal
        ≠
posibilidad humanamente practicable
```

y:

```text
propiedad necesaria para realizar
un valor ya seleccionado
        ≠
nuevo valor de Product
```

No se modifica `02-PRODUCT.md` ni se crea `PV-002`.

La investigación queda cerrada y registrada en `06-DESIGN_JOURNAL.md`.

Su cierre tampoco prescribe la búsqueda inmediata de otra vertical ni abre automáticamente una actuación práctica. Cualquier nueva investigación de Product o actuación sobre `PV-001` deberá disponer de fundamento positivo independiente.

---

## Auditoría adicional de fundamento histórico y cierre de FP-6/FP-7

Tras el rechazo de la candidata a segunda vertical de Product se examinó si las fuentes históricas del origen del proyecto contenían fundamento positivo independiente que hubiera quedado oculto por las categorías utilizadas en reconstrucciones posteriores.

Un primer barrido de fenómenos humanos no produjo una diferencia independiente suficiente.

Se comprobó posteriormente que aquel barrido no podía considerarse exhaustivo y se realizó una segunda lectura centrada en intervenciones primarias, manteniendo separadas:

```text
situación humana
interpretación
solución
elaboración conceptual posterior
```

La revisión permitió identificar provisionalmente las familias `FP-1` a `FP-7`.

La investigación de FP-5, relativa a condiciones de elaboración reconocibles, no demostró una diferencia humana propia de Product después de eliminar información adicional, confianza general, supervisión, transparencia normativa y presupuestos epistemológicos.

El crecimiento de la investigación motivó una prueba de control respecto de `PROJECT_CHARTER.md`.

El control confirmó la legitimidad de la búsqueda histórica como medio para localizar fundamento humano omitido, pero rechazó convertir la clasificación exhaustiva del corpus en un objetivo autónomo.

La extracción histórica quedó cerrada al alcanzar suficiencia para su finalidad actual.

Entre los resultados pendientes, FP-6 fue seleccionado para investigación por reunir evidencia primaria, situación humana identificable, diferencia potencial y pertenencia plausible al perímetro del proyecto.

La investigación eliminó como fundamentos independientes la información adicional, la evaluación general, la confianza, la decisión y cualquier norma epistemológica.

El residuo quedó reducido a:

```text
X puede intervenir
en una actividad

        ≠

X puede convertirse
en objeto de una actuación
```

La estructura no demostró una diferencia propia del trabajo intelectual, pues podía reducirse a la capacidad general de actuar sobre objetos disponibles.

Este resultado alcanzó también el núcleo estructural de `FP-7`, sin demostrar en él una diferencia humana independiente.

El estado resultante es:

```text
auditoría histórica adicional
        ↓
nuevos fundamentos identificados
        ↓
fundamentos examinados
        ↓
ningún nuevo compromiso de Product
        ↓
ninguna siguiente actuación derivada
```

No se modifica `02-PRODUCT.md`, no se crea una nueva vertical y no se deriva automáticamente ninguna actuación práctica.

La investigación queda cerrada respecto del alcance actualmente justificado.

---

# Derivación, construcción, validación y consolidación de la primera realización contingente destinada al uso

## Fecha

24/08/2026

### Situación inicial

El proyecto partía de un estado en el que `PV-001` se encontraba
consolidada como primera vertical de Product, pero todavía no se había
establecido una primera realización destinada al uso.

La determinación anterior de la siguiente actuación justificable había
concluido legítimamente que el estado entonces examinado no derivaba
por sí mismo una actuación posterior obligatoria.

Las investigaciones posteriores debían, por tanto, disponer de un
fundamento positivo independiente y no podían justificarse por mera
continuidad del desarrollo, por incompletitud genérica del proyecto ni
por recuperación automática de soluciones históricas.

### Problema investigado

La investigación se abrió sobre la consecuencia legítima del resultado
experimental obtenido mediante:

```text
PV-001
↓
CR-PV001-01
↓
D-001
↓
EX-R-A1
```

La cuestión consistía en determinar qué propiedad debía adquirir una
realización para dejar de constituir únicamente una prueba experimental
y poder convertirse en una primera realización efectivamente destinada
al uso, sin introducir funcionalidades por anticipación.

La reducción postexperimental identificó un residuo necesario que
posteriormente fue sometido a investigación realizativa.

A partir de ese residuo se examinó cómo seleccionar una realización
contingente sin identificar:

```text
no necesario
=
arbitrario
```

La búsqueda de un anclaje independiente condujo a la selección de `R-U2` como primer anclaje legítimo de uso sobre el que continuar la investigación.

### Investigación de `R-U2`

La reducción de `R-U2` permitió distinguir las condiciones necesarias
que debía conservar una realización de las propiedades que todavía
permanecían contingentes.

Se investigaron mecanismos deliberadamente diferentes y se aplicó
`SCU-01` para evitar elevar prematuramente una solución particular a
necesidad del producto.

La investigación mostró que la mera presencia o reexposición de un
estado anterior no era suficiente.

Era necesario que aquello procedente de una situación anterior
configurase efectivamente una posibilidad posterior de actuación.

Esta diferencia condujo a investigar una forma mínima de incidencia en
la que:

```text
S1
↓
X
↓
interrupción
↓
S2(X)
↓
Y
```

sin que el sistema tuviera que:

- interpretar semánticamente `X`;
- decidir por la persona qué actuación debía realizar;
- determinar el contenido de `Y`;
- exigir una continuidad semántica predeterminada;
- introducir tareas, recomendaciones o flujos de trabajo.

### Selección de `R-U2-M1`

Como resultado de la reducción se especificó `R-U2-M1`.

La realización establece dos situaciones mínimas:

```text
S1
```

y:

```text
S2(X)
```

donde `X` es un estado válido producido anteriormente y conservado a
través de una interrupción.

En `S2(X)`, la presencia de `X` configura la disponibilidad de una
actuación mediante la cual la persona puede producir libremente una
nueva aportación `Y`.

La situación de reanudación establece `X` como antecedente de la nueva
actuación sin requerir una operación humana adicional destinada
exclusivamente a seleccionar explícitamente dicho antecedente.

La realización permite así observar localmente:

```text
X → Y
```

sin convertir esta forma concreta en una estructura universal de
Product.

### Desarrollo dirigido por pruebas

Antes de completar la implementación se especificaron las propiedades
observables exigidas a cada nivel de la realización.

La construcción se desarrolló progresivamente mediante pruebas.

#### Modelo

Se creó el modelo mínimo de reanudación y se validaron las operaciones
necesarias para determinar la disponibilidad de reanudación y constituir
un resultado situado.

Resultado:

```text
resumeModel.test.ts
17 / 17 tests superados
```

Las pruebas verifican, entre otras propiedades, que:

- la disponibilidad depende de la existencia de un estado anterior
  válido;
- los valores vacíos o formados únicamente por espacios no constituyen
  estados válidos;
- los valores válidos se conservan exactamente;
- el modelo no interpreta semánticamente su contenido;
- `Y` no necesita continuar semánticamente `X`.

#### Persistencia

Se comprobó si la realización necesitaba introducir una abstracción
general `ResumeRepository`.

Al existir una única implementación necesaria para la realización, no
se encontró fundamento suficiente para introducir anticipadamente esa
abstracción.

Se implementó directamente:

```text
localStorageResumeRepository
```

con las operaciones mínimas:

```text
savePrevious
loadPrevious
```

Resultado:

```text
localStorageResumeRepository.test.ts
6 / 6 tests superados
```

`localStorage` queda clasificado como mecanismo contingente de
`R-U2-M1` y no como requisito de Product.

#### Trayectoria integrada

Se construyó `ResumeExperience` para hacer observable la trayectoria
completa de la realización.

Las pruebas cubren:

- primera ejecución sin `X`;
- producción y persistencia de un `X` válido;
- interrupción efectiva mediante destrucción del estado del componente;
- nueva ejecución;
- recuperación de `X`;
- constitución de `S2(X)`;
- disponibilidad de una actuación dependiente de `X`;
- producción libre de `Y`;
- y evidencia observable de `X → Y`.

Resultado:

```text
ResumeExperience.test.tsx
18 / 18 tests superados
```

### Validación conjunta

La suite completa de `R-U2-M1` produjo:

```text
Test Files  3 passed (3)
Tests       41 passed (41)
```

La construcción de producción mediante Vite finalizó igualmente sin
errores.

La evidencia técnica quedó distribuida entre:

```text
modelo
        ↓
persistencia
        ↓
trayectoria integrada de uso
```

### Auditoría formal

Una vez construida la realización se auditó formalmente respecto de:

```text
RU2-N01…RU2-N05
MO-01r
CY-01
CY-02
SCU-01
```

La auditoría distinguió entre:

```text
propiedades cuya satisfacción
justifica la realización
```

y:

```text
mecanismos contingentes utilizados
para satisfacerlas
```

La realización superó los criterios establecidos dentro del alcance
sometido a prueba.

### Resultado consolidado

Se consolidó:

```text
RC-RU2M1-01
```

`R-U2-M1` constituye la primera realización contingente destinada al
uso validada del proyecto dentro del alcance actualmente establecido.

El resultado demuestra existencialmente que puede realizarse una
situación en la que un estado `X` procedente de `S1` atraviese una
interrupción y constituya posteriormente `S2(X)`, configurando en ella
una posibilidad de actuación mediante la cual la persona pueda producir
libremente `Y`.

La realización permite distinguir entre:

```text
mera conservación o reexposición de X
```

y:

```text
incidencia efectiva de X
sobre una posibilidad posterior de actuación
```

### Límites del resultado

La validación de `R-U2-M1` no establece que:

- `PV-001` haya quedado completamente realizada;
- `R-U2-M1` sea el producto definitivo;
- la realización determine la arquitectura futura;
- Product requiera texto;
- Product requiera `localStorage`;
- deba conservarse necesariamente un único `X`;
- toda actuación posterior adopte la forma `X → Y`;
- React constituya una tecnología necesaria;
- las estructuras concretas utilizadas deban generalizarse;
- ni `R-U2-M1` excluya otras realizaciones compatibles.

Las decisiones concretas utilizadas para construir la realización
permanecen contingentes.

### Consolidación documental

La auditoría documental posterior mostró que la descripción completa
de `R-U2-M1` no pertenecía a los documentos históricos de auditoría del
proyecto ni debía quedar absorbida por `PRODUCT.md`.

Se estableció el cuerpo:

```text
docs/06-realization/
```

y se consolidó como documento canónico de la realización:

```text
docs/06-realization/00-R-U2-M1.md
```

La propagación posterior se realizó por responsabilidad documental.

`PRODUCT.md` conserva únicamente la consecuencia correspondiente al
estado de realizabilidad de `PV-001`.

`PROJECT_STATUS.md` declara el nuevo estado vigente del proyecto.

Los documentos históricos permanecen sin modificación cuando el nuevo
resultado no altera aquello que les corresponde registrar.

`ROADMAP.md` tampoco requiere una nueva línea estratégica, puesto que
la existencia de `R-U2-M1` no constituye por sí misma fundamento
suficiente para establecerla.

### Lecciones aprendidas

> **Una realización contingente no es arbitraria cuando su selección
> puede reconstruirse desde un fundamento independiente y supera
> criterios explícitos de conservación.**

> **La mera persistencia o reexposición de un estado anterior no
> demuestra incidencia efectiva sobre una situación posterior. Debe
> existir una diferencia observable en las posibilidades de actuación
> configurada por dicho estado.**

> **Una necesidad puede realizarse mediante mecanismos contingentes sin
> que esos mecanismos adquieran por ello estatuto normativo.**

> **No debe introducirse una abstracción arquitectónica únicamente
> porque pueda resultar útil en el futuro. Su existencia necesita una
> necesidad presente que la justifique.**

> **Las pruebas pueden utilizarse no sólo para verificar código, sino
> para preservar experimentalmente la frontera entre lo demostrado y
> aquello que la implementación podría introducir accidentalmente.**

> **La propagación documental debe seguir la responsabilidad de cada
> documento y no la mera aparición de un resultado nuevo.**

### Estado resultante

El estado alcanzado puede resumirse como:

```text
PV-001
        ✔ vigente
        ↓
R-U2
        ✔ seleccionada como primer anclaje de uso
        ↓
R-U2-M1
        ✔ especificada
        ✔ construida
        ✔ validada
        ✔ auditada
        ↓
RC-RU2M1-01
        ✔ consolidado
        ↓
primera realización contingente
destinada al uso
        ✔ disponible
```

La realización puede constituirse ahora en objeto de observación de uso.

Este estado no deriva automáticamente:

```text
ampliación de R-U2-M1
segunda realización
nueva vertical de Product
arquitectura software
funcionalidad adicional
nueva línea estratégica
```

### Punto de reanudación

La pregunta que precedía a esta investigación:

```text
¿puede derivarse justificadamente
una primera realización destinada al uso?
```

dispone ahora de una respuesta positiva dentro del alcance establecido
por `R-U2-M1`.

El nuevo punto de reanudación es:

```text
R-U2-M1 disponible
        ↓
posibilidad de observación de uso
        ↓
¿aparece una insuficiencia,
pérdida, dependencia no satisfecha
u otro fundamento positivo?
        ↓
si aparece
        ↓
determinar el cuerpo competente
        ↓
derivar únicamente
la actuación justificada
```

La mera existencia de la realización, su éxito técnico o la posibilidad
de imaginar mejoras no justifican por sí mismos una ampliación.

Hasta que aparezca un fundamento positivo suficiente, no queda derivada
automáticamente ninguna actuación adicional.

---

# Observación de uso, evolución local y segunda reconsolidación de `R-U2-M1`

## Fecha

2026-08-26

### Situación inicial

La consolidación anterior había dejado disponible:

```text
R-U2-M1
        ✔ especificada
        ✔ construida
        ✔ validada
        ✔ auditada
        ↓
RC-RU2M1-01
        ✔ consolidado
        ↓
primera realización contingente
destinada al uso
        ✔ disponible
```

La siguiente actuación no estaba predeterminada.

La realización podía someterse a observación de uso para comprobar si durante
una actividad real aparecía alguna insuficiencia, pérdida, dependencia no
satisfecha u otro fundamento positivo capaz de justificar una actuación
posterior.

---

### Primera observación instrumental de uso

Se realizó:

```text
OU-RU2M1-001
```

sobre una actividad intelectual real.

La observación proporcionó evidencia positiva local de que `R-U2-M1` podía
ejercerse en uso y permitió localizar:

```text
F-OU001-01
↓
ausencia de manifestación observable
de terminación de S1
```

La investigación posterior estableció:

```text
F-OU001-01
↓
L-OU001-01
↓
RU2M1-U01
```

La pérdida demostrada justificó reabrir localmente la realización.

---

### Investigación y modificación local

La investigación de `RU2M1-U01` redujo las alternativas posibles y seleccionó:

```text
MR-U01-01
```

La modificación hizo observable durante `S1` la aceptación efectiva de un
`X` válido sin constituir prematuramente `S2(X)`.

La misma investigación estableció además la necesidad de conservar estable
el antecedente restaurado durante la ejecución actual:

```text
CU01-08
```

La modificación de código afectó exclusivamente a:

```text
src/realizations/ru2m1/ResumeExperience.tsx
src/realizations/ru2m1/ResumeExperience.test.tsx
```

No fue necesario modificar:

```text
resumeModel
localStorageResumeRepository
```

La realización modificada fue validada mediante:

```text
RV-MR-U01-01
```

y conservó las propiedades previamente demostradas de `R-U2-M1`.

Los controles realizados produjeron:

```text
45 / 45 tests propios superados
184 / 184 tests globales superados
build de producción superado
git diff --check superado
```

Tras esta actuación, `R-U2-M1` quedó reconsolidada dentro de su alcance.

---

### Primera reconsolidación

El primer ciclo quedó constituido por:

```text
OU-RU2M1-001
↓
F-OU001-01
↓
L-OU001-01
↓
RU2M1-U01
↓
MR-U01-01
↓
RV-MR-U01-01
↓
primera reconsolidación
```

La observación proporcionó evidencia positiva local de uso.

No demostró:

- utilidad general de `R-U2-M1`;
- utilidad para otras personas;
- validez para toda situación de reanudación;
- una nueva capacidad de Product;
- ni una decisión arquitectónica general.

La modificación permaneció localizada en `R-U2-M1`.

---

### Segunda observación instrumental de uso

Después de la primera reconsolidación se prerregistró y realizó una nueva
trayectoria independiente:

```text
OU-RU2M1-002
```

La actividad observada fue distinta de la utilizada en `OU-RU2M1-001`.

Durante la trayectoria:

- un `X` procedente de `S1` volvió a estar disponible después de una
  interrupción;
- la persona reconoció el antecedente restaurado;
- pudo continuar la actividad;
- y produjo libremente una nueva aportación `Y`.

La segunda observación proporcionó así una nueva evidencia positiva local de
uso efectivo de `R-U2-M1`.

Durante la trayectoria se observó además una diferencia entre la estructura
multilineal de la aportación realizada durante `S1` y el `X` posteriormente
disponible en `S2(X)`.

El fenómeno fue registrado como:

```text
F-OU002-01
```

---

### Investigación de `F-OU002-01`

La investigación técnica examinó separadamente:

```text
captura
persistencia
modelo
restauración
representación
```

La evidencia permitió establecer que la diferencia observada se originaba
antes de la persistencia.

El mecanismo monolínea utilizado para capturar la aportación durante `S1`
restringía las formas textuales que podían llegar a constituirse como `X`.

La comparación instrumental mostró que:

```text
input de texto
→ no conserva estructura multilineal

textarea
→ puede conservar estructura multilineal
```

Esta comparación se utilizó únicamente como discriminante técnico.

No constituyó la selección de una solución ni derivó la obligación de
sustituir el mecanismo actual por un `textarea`.

La persistencia, el modelo y la restauración quedaron descartados como causa
de `F-OU002-01`.

La investigación tampoco estableció:

```text
violación de RU2-N03
violación de I-RU2M1-04
nueva pérdida necesaria de R-U2-M1
necesidad suficiente para modificar el código
```

La correspondencia actualmente validada entre el `X` persistido y el `X`
restaurado permaneció satisfecha dentro del alcance existente.

---

### Estatuto de la restricción localizada

La investigación permitió distinguir entre:

```text
aportación humana realizada durante S1
```

y:

```text
X que el mecanismo contingente
permite constituir y persistir
```

La restricción localizada pertenece al mecanismo contingente de captura.

Por tanto, la evidencia disponible no permite concluir que:

- `R-U2-M1` deba admitir necesariamente contenido multilineal;
- Product deba admitir texto multilineal;
- el control `input` deba sustituirse por un mecanismo concreto;
- exista una nueva capacidad que deba incorporarse;
- ni haya aparecido una obligación arquitectónica.

---

### Segunda reconsolidación documental

La segunda trayectoria y su investigación quedaron conservadas en:

```text
docs/06-realization/05-OU-RU2M1-002.md
docs/06-realization/06-investigacion-F-OU002-01.md
```

La evidencia obtenida fue posteriormente propagada al documento canónico:

```text
docs/06-realization/00-R-U2-M1.md
```

La reconsolidación conservó la distinción entre los dos ciclos:

```text
OU-RU2M1-001
↓
pérdida demostrada
↓
necesidad local
↓
modificación
↓
primera reconsolidación

OU-RU2M1-002
↓
nueva evidencia
↓
F-OU002-01
↓
atribución técnica
↓
restricción contingente localizada
↓
ninguna nueva pérdida necesaria
↓
ninguna modificación de código
↓
reconsolidación documental
```

---

### Propagación por responsabilidad documental

La nueva evidencia modifica el estado que debe declarar:

```text
PROJECT_STATUS.md
```

pero no modifica:

```text
PV-001
Product
Architecture
```

`R-U2-M1` continúa siendo la primera realización contingente destinada al uso
validada dentro del alcance actualmente establecido.

Las dos observaciones constituyen evidencia positiva local de uso.

No demuestran utilidad general de la realización.

---

### Estado resultante

El estado alcanzado puede resumirse así:

```text
R-U2-M1
        ✔ construida
        ✔ validada
        ✔ auditada
        ↓
OU-RU2M1-001
        ✔ completada
        ↓
necesidad local
        ✔ demostrada
        ↓
modificación local
        ✔ construida
        ✔ validada
        ↓
primera reconsolidación
        ✔ completada
        ↓
OU-RU2M1-002
        ✔ completada
        ↓
F-OU002-01
        ✔ localizado
        ↓
atribución técnica
        ✔ cerrada
        ↓
restricción contingente de captura
        ✔ localizada
        ↓
nueva pérdida necesaria
        ✘ no establecida
        ↓
modificación de código
        ✘ no derivada
        ↓
R-U2-M1
        ✔ reconsolidada documentalmente
          dentro de su alcance actual
```

---

### Punto de reanudación

La segunda observación aporta un caso en el que la aparición de nueva
evidencia no deriva por sí sola una nueva modificación.

La secuencia vigente es:

```text
R-U2-M1 reconsolidada
        ↓
nueva evidencia
        ↓
atribuir y evaluar
        ↓
¿existe una pérdida,
dependencia necesaria,
incompatibilidad
u otro fundamento positivo suficiente?
        ↓
sí
→ determinar el cuerpo competente
→ derivar únicamente la actuación justificada

no
→ conservar la evidencia
→ no ampliar por continuación automática
```

Por tanto, no queda derivada automáticamente:

```text
ampliación de R-U2-M1
segunda realización
nueva vertical de Product
arquitectura software
funcionalidad adicional
nueva línea estratégica
```

Cualquier actuación posterior requerirá fundamento positivo independiente.

---

# Investigación y revisión preobservacional de `POU-RU2M1-01`

## Fecha

2026-08-27

## Situación de partida

La segunda observación instrumental de `R-U2-M1`, `OU-RU2M1-002`, había
quedado cerrada respecto de su trayectoria y de la atribución de
`F-OU002-01`.

Ese ciclo había establecido:

```text
OU-RU2M1-002
↓
F-OU002-01
↓
atribución técnica
↓
restricción contingente de captura localizada
↓
ninguna nueva pérdida necesaria de R-U2-M1
↓
ninguna modificación de código derivada
```

Durante la preparación de aquella observación se había registrado además una
cuestión diferente, relativa al propio protocolo de observación.

Antes del inicio efectivo de `S1`, la realización conservaba un `X` válido
restaurado procedente de la observación anterior y se abrió inicialmente en:

```text
S2(X anterior)
```

Fue necesaria una actuación preobservacional para poder constituir el `S1`
pretendido y comenzar posteriormente la trayectoria de `OU-RU2M1-002`.

La cuestión había quedado conservada sin resolver y sin derivar
automáticamente una modificación del protocolo.

---

## Evaluación del fundamento para investigar

Se examinó si aquella incidencia constituía fundamento positivo suficiente
para abrir una investigación propia.

La apertura quedó justificada porque:

```text
hecho efectivamente observado
↓
afectó a la preparación de una reaplicación real
↓
requirió una intervención no explicitada por el protocolo
↓
la suficiencia de la condición inicial
no estaba establecida
```

La cuestión se mantuvo separada tanto de `F-OU002-01` como de cualquier
suposición sobre una solución concreta.

La investigación se abrió en:

```text
docs/06-realization/
07-investigacion-suficiencia-preobservacional-POU-RU2M1-01.md
```

---

## Reconstrucción de la condición constitutiva de `S1`

La revisión de `R-U2-M1` mostró que su especificación ya distinguía
explícitamente:

```text
S1
→ ejecución iniciada sin X válido restaurado

S2(X)
→ ejecución iniciada con X válido restaurado
```

Por tanto, la propiedad necesaria no debía inventarse como una nueva
exigencia.

La realización ya establecía:

```text
ejecución destinada a constituir S1
↓
debe comenzar
sin X válido restaurado
```

La investigación distinguió esta condición de formulaciones más fuertes no
justificadas:

```text
sin X válido restaurado
≠
almacenamiento vacío

sin X válido restaurado
≠
ausencia absoluta de estado previo

condición de S1
≠
borrado obligatorio de localStorage
```

---

## Atribución de la insuficiencia

La revisión de la versión entonces vigente de `POU-RU2M1-01` mostró que el
protocolo exigía una trayectoria:

```text
S1
↓
X
↓
interrupción
↓
S2(X)
```

pero no:

```text
explicitaba la condición constitutiva de S1
ni
remitía explícitamente a ella
ni
exigía comprobarla antes de comenzar la trayectoria
```

La insuficiencia quedó por tanto atribuida al protocolo y no a
`R-U2-M1`.

El resultado puede resumirse así:

```text
condición necesaria
ya especificada en R-U2-M1
↓
no operacionalizada
en la versión examinada de POU-RU2M1-01
↓
insuficiencia preobservacional local
✔ establecida
```

La investigación quedó cerrada dentro de ese alcance.

---

## Modificación mínima de `POU-RU2M1-01`

La insuficiencia justificó una modificación local del protocolo.

La revisión incorporó:

```text
condición preobservacional explícita
↓
la ejecución destinada a constituir S1
debe comenzar sin X válido restaurado

+

trazabilidad
↓
registro de la comprobación
en la ficha mínima de observación
```

Si una ejecución comienza con un `X` válido restaurado, no constituye el
`S1` requerido para iniciar una aplicación completa del protocolo.

La trayectoria no debe considerarse iniciada hasta disponer de una ejecución
que satisfaga la condición de `S1`.

La revisión no prescribe:

```text
borrar localStorage
vaciar todo estado persistido
eliminar cualquier antecedente previo
utilizar un mecanismo técnico concreto
```

El mecanismo mediante el que se satisfaga la condición permanece abierto.

---

## Fronteras de la revisión

La investigación y la modificación posterior no establecieron:

- una insuficiencia de `R-U2-M1`;
- una nueva pérdida necesaria de la realización;
- una modificación de código;
- una nueva exigencia de Product;
- una obligación de Architecture;
- una modificación de Methodology;
- ni una generalización de la condición a otros protocolos del proyecto.

La revisión pertenece localmente a `POU-RU2M1-01`.

---

## Consolidación local

El ciclo quedó consolidado mediante:

```text
docs/06-realization/
01-protocolo-de-observacion-de-uso-R-U2-M1.md
07-investigacion-suficiencia-preobservacional-POU-RU2M1-01.md
```

y cerrado en:

```text
4f11fb6
docs(realization): resolve preobservational protocol insufficiency
```

El protocolo revisado incorpora ya la condición preobservacional y su
trazabilidad documental.

---

## Estado resultante

```text
POU-RU2M1-01
✔ dos aplicaciones anteriores completadas
✔ suficiencia instrumental inicial conservada
✔ insuficiencia preobservacional local establecida
✔ investigación correspondiente cerrada
✔ modificación mínima derivada
✔ modificación mínima incorporada documentalmente
✔ condición preobservacional explicitada
✔ trazabilidad incorporada a la ficha mínima

nueva aplicación del protocolo revisado
○ no realizada

nueva evidencia de suficiencia
○ no obtenida

RP-POU-RU2M1-02
○ no formulado

R-U2-M1
✔ sin nueva modificación derivada

código
✔ sin modificación derivada

Product
✔ sin consecuencia derivada

Architecture
✔ sin consecuencia derivada

Methodology
✔ sin consecuencia derivada
```

---

## Punto de reanudación

La corrección documental del protocolo no constituye por sí misma evidencia
de que la revisión haya demostrado suficiencia en uso.

Por tanto:

```text
POU-RU2M1-01 revisado
↓
condición preobservacional incorporada
↓
revisión todavía no ejercida
↓
ninguna nueva observación automáticamente derivada
```

Una nueva aplicación del protocolo sólo deberá realizarse cuando exista
fundamento positivo suficiente para obtener la evidencia que resulte
necesario conocer.

Del mismo modo:

```text
revisión documental
⇏
RP-POU-RU2M1-02
```

`RP-POU-RU2M1-02` sólo podrá formularse si una aplicación posterior aporta
evidencia suficiente que justifique dicho resultado.

No queda derivada automáticamente ninguna ampliación de `R-U2-M1`, nueva
realización, nueva vertical de Product, arquitectura software, funcionalidad
adicional ni nueva línea estratégica.

---

# Investigación de reiteración por composición de `R-U2-M1`

## Fecha

2026-08-28

## Situación de partida

La investigación y revisión preobservacional de `POU-RU2M1-01` había quedado
cerrada dentro de su alcance.

La revisión había incorporado:

```text
condición preobservacional explícita
↓
la ejecución destinada a constituir S1
debe comenzar sin X válido restaurado

+

trazabilidad
↓
registro de la comprobación
en la ficha mínima de observación
```

Sin embargo, esa revisión no había derivado automáticamente una nueva
aplicación formal del protocolo, una nueva observación de uso ni otra
actuación posterior.

El estado resultante era:

```text
POU-RU2M1-01
✔ revisión documental incorporada
○ nueva aplicación formal no realizada
○ RP-POU-RU2M1-02 no formulado

R-U2-M1
✔ primera realización contingente destinada al uso validada
✔ dos observaciones instrumentales completadas
✔ reconsolidada dentro de su alcance

continuación
○ ninguna actuación posterior automáticamente derivada
↺ nueva actuación condicionada a fundamento positivo independiente
```

De forma independiente, `PV-001` admitía ya que la incidencia de aportaciones
procedentes de situaciones anteriores pudiera aparecer reiteradamente.

La cuestión abierta no consistía por tanto en ampliar automáticamente
Product, sino en determinar si esa reiteración hacía aparecer alguna pérdida
realizativa no satisfecha por los resultados ya disponibles.

---

## Evaluación del fundamento para investigar

Se examinó si existía fundamento positivo suficiente para abrir una
investigación específica en Realization.

La cuestión no procedía de la mera posibilidad de imaginar una realización
más rica.

Existía una diferencia concreta entre:

```text
incidencia local ya realizada por R-U2-M1

S1
↓
X
↓
interrupción
↓
S2(X)
↓
Y
```

y una trayectoria reiterada:

```text
situación anterior
↓
algo puede intervenir posteriormente
↓
nueva situación
↓
algo puede volver a quedar disponible
↓
nueva incidencia posterior
↓
...
```

`R-U2-M1` realizaba localmente un enlace `X → Y`, pero no especificaba una
transición interna mediante la que lo producido posteriormente tuviera que
convertirse en el antecedente de otro ciclo.

La diferencia proporcionó fundamento positivo para investigar si la
reiteración exigía:

- ampliar `R-U2-M1`;
- introducir una nueva responsabilidad realizativa;
- derivar una nueva condición irreducible;
- o constituir una realización autónoma más general.

La investigación quedó abierta en Realization sin presuponer que ninguna de
esas posibilidades fuera necesaria.

---

## Primera reducción: composición interna del antecedente

Se examinó inicialmente si una trayectoria reiterada requería un antecedente
estructuralmente nuevo capaz de conservar varias aportaciones, estados o
resultados anteriores.

Se consideró provisionalmente una configuración compuesta:

```text
X*
=
aportaciones anteriores
+
estado actual
+
resultados negativos
+
punto de continuación
+
otras diferencias disponibles
```

La investigación mostró que esa composición interna no constituía por sí
misma una nueva exigencia realizativa.

`R-U2-M1` no interpreta semánticamente `X`.

Por tanto, una configuración intelectualmente compleja puede intervenir
localmente como un `X` opaco para la realización:

```text
composición interna de X*
↓
relevante para la persona

pero

composición interna de X*
↓
no requiere necesariamente
una nueva estructura realizativa
```

La hipótesis de que la composición interna del antecedente exigiera una
ampliación de `R-U2-M1` quedó reducida.

---

## Investigación de la reiteración de los enlaces

Después de reducir la estructura interna de `X`, permaneció una cuestión
distinta.

La realización validada conserva la forma:

```text
S1
↓
X1
↓
interrupción
↓
S2(X1)
↓
Y
```

pero no contiene una transición interna especificada:

```text
S2(X1)
↓
X2 preparado para una futura reanudación
```

Se distinguieron entonces dos posibilidades.

### Composición externa

Una nueva trayectoria puede prepararse independientemente:

```text
primera aplicación de R-U2-M1
↓
resultado posterior
↓
actividad humana
↓
nuevo antecedente

nueva preparación de S1
↓
segunda aplicación de R-U2-M1
```

Esta forma de composición era compatible con las capacidades existentes.

### Reiteración interna

Una forma más fuerte habría requerido que la propia situación `S2(Xn)`
permitiera preparar internamente `Xn+1` para una futura reanudación:

```text
S2(Xn)
↓
Xn+1 queda preparado
↓
interrupción
↓
S2(Xn+1)
```

Esa capacidad no estaba establecida en `R-U2-M1`.

La investigación distinguió por tanto:

```text
componibilidad externa de aplicaciones locales
≠
reiterabilidad interna de R-U2-M1
```

---

## Reducción de la producción automática de `Xn+1`

Se examinó si el sistema debía producir, derivar o seleccionar
automáticamente el siguiente antecedente.

La hipótesis fue reducida.

Nada en `PV-001` ni en el criterio realizativo vigente exige que el sistema:

- interprete semánticamente la aportación anterior;
- determine qué debe conservarse;
- derive una nueva aportación;
- seleccione el futuro antecedente;
- ni establezca cuál es la continuación intelectualmente correcta.

La persona puede intervenir entre dos aplicaciones locales:

```text
situación anterior
↓
actividad humana
↓
persona alcanza o formula Xn+1
↓
Xn+1 puede intervenir posteriormente
```

Por tanto:

```text
producción automática de Xn+1
✘ no demostrada como necesaria
```

---

## Preparación de una prueba experimental de composición

Después de las reducciones anteriores permanecía una pregunta empírica:

> ¿pueden dos aplicaciones locales de `R-U2-M1` enlazarse mediante una
> mediación humana sin introducir una nueva responsabilidad del sistema?

Se diseñó una prueba mínima de dos ciclos.

La trayectoria prevista era:

```text
CICLO 1

S1
↓
X1
↓
aceptación
↓
interrupción
↓
S2(X1)
↓
actividad humana
↓
resultado posterior
↓
persona alcanza o formula X2


──────── mediación humana ────────


CICLO 2

preparación de un nuevo S1
↓
persona proporciona X2
↓
aceptación
↓
interrupción
↓
S2(X2)
↓
Y2
```

La prueba no pretendía validar una nueva realización.

Su objetivo consistía únicamente en determinar si la composición podía
obtenerse utilizando:

```text
R-U2-M1
+
mediación humana
+
otra aplicación local de R-U2-M1
```

---

## Primer ciclo experimental

El primer antecedente utilizado fue:

```text
La mediación humana podría enlazar dos ciclos de reanudación sin exigir una nueva responsabilidad del sistema.
```

`R-U2-M1` lo aceptó como `X1`.

Después de la interrupción correspondiente, la nueva ejecución restauró
`X1` y constituyó `S2(X1)`.

Durante esa situación la persona produjo posteriormente:

```text
¿es realmente efectiva esta prueba?
```

y ejecutó la actuación de creación.

La aportación fue producida dentro de una situación configurada por `X1`.

La investigación examinó entonces si algo procedente de ese resultado podía
intervenir como antecedente en otra trayectoria.

---

## Preparación del segundo ciclo

Para iniciar una nueva aplicación local fue necesario satisfacer de nuevo la
condición constitutiva de `S1`:

```text
ejecución destinada a S1
↓
sin X válido restaurado
```

La preparación se realizó externamente a `R-U2-M1`.

Se eliminó temporalmente el valor persistido utilizado por la realización
para permitir una nueva ejecución en `S1`.

Esta actuación formó parte exclusivamente de la preparación experimental.

No constituyó:

- una capacidad nueva de `R-U2-M1`;
- una funcionalidad destinada a la persona;
- una responsabilidad realizativa;
- ni evidencia de reiterabilidad interna.

Una vez obtenido `S1`, la persona proporcionó como nuevo antecedente:

```text
¿Es realmente efectiva esta prueba?
```

`R-U2-M1` aceptó la aportación mediante sus capacidades existentes.

---

## Diferencia entre el resultado anterior y `X2`

La comparación entre ambas aportaciones mostró:

```text
resultado producido anteriormente
¿es realmente efectiva esta prueba?

X2 proporcionado posteriormente
¿Es realmente efectiva esta prueba?
```

No existe identidad literal entre las dos representaciones.

La capitalización inicial es diferente.

La trayectoria observada debe por tanto reconstruirse como:

```text
resultado anterior
↓
mediación humana trazable
↓
aportación correspondiente
↓
X2
```

y no como:

```text
resultado anterior
=
X2 literal
```

Este resultado proporcionó evidencia contra la hipótesis de que la
composición entre ciclos requiriera identidad literal de representación.

---

## Segundo ciclo experimental

Después de aceptar `X2`, la ejecución se interrumpió.

En una ejecución posterior, `R-U2-M1` restauró:

```text
¿Es realmente efectiva esta prueba?
```

y constituyó:

```text
S2(X2)
```

Dentro de esa situación la persona produjo:

```text
Se espera que así sea
```

y ejecutó la actuación de creación.

La segunda trayectoria quedó por tanto completada:

```text
S1
↓
X2
↓
aceptación
↓
interrupción
↓
S2(X2)
↓
Y2
```

Las capacidades existentes de `R-U2-M1` fueron suficientes para aceptar,
conservar, restaurar y hacer incidir `X2` una vez proporcionado como nuevo
antecedente.

---

## Resultado inmediato de la prueba

La trayectoria completa observada puede reconstruirse así:

```text
S1
↓
X1
↓
interrupción
↓
S2(X1)
↓
resultado posterior

        ↓
mediación humana trazable
        ↓

aportación correspondiente
↓
X2
↓
nueva aplicación local de R-U2-M1
↓
interrupción
↓
S2(X2)
↓
Y2
```

La prueba demostró localmente que:

1. dos aplicaciones de `R-U2-M1` pueden participar en una trayectoria
   compuesta;
2. la persona puede intervenir entre ambas aplicaciones;
3. una aportación procedente del resultado de una situación anterior puede
   intervenir posteriormente en la constitución de un nuevo antecedente;
4. no fue necesario que `R-U2-M1` interpretara semánticamente la relación
   entre las aportaciones;
5. no fue necesaria identidad literal entre el resultado anterior y el nuevo
   antecedente;
6. y no fue necesario introducir durante la prueba una nueva responsabilidad
   interna de la realización.

---

## Investigación de una posible realización más general

La obtención de la trayectoria compuesta no resolvía todavía si debía
derivarse una realización más general.

Se examinó una candidata provisional `R*` capaz de conservar
`R-U2-M1` como caso local y permitir una reiteración internamente integrada.

La condición candidata más fuerte se formuló provisionalmente como:

> **`R*-N01 — Reaplicabilidad de la puesta a disposición`**

Según esa hipótesis, dentro de una situación reanudada `S2(Xn)` la persona
debería poder hacer disponible `Xn+1` para una situación posterior sin
alterar el antecedente vigente durante la situación actual.

La condición habría permitido una trayectoria del tipo:

```text
S2(X1)
↓
persona produce X2
↓
X2 queda preparado
↓
interrupción
↓
S2(X2)
```

---

## Falsación de `R*-N01` como necesidad

La propia prueba experimental proporcionó un contraejemplo a la necesidad de
`R*-N01`.

La trayectoria obtenida fue:

```text
S1a
↓
X1
↓
interrupción
↓
S2a(X1)
↓
resultado posterior

        ↓
mediación humana
        ↓

preparación de una nueva trayectoria
↓
S1b
↓
X2
↓
interrupción
↓
S2b(X2)
↓
Y2
```

La composición se produjo sin que `S2a(X1)` tuviera que preparar
internamente `X2` para la siguiente ejecución.

Por tanto:

```text
R*-N01

necesaria para PV-001
✘

necesaria para la reiteración observada
✘

necesaria para componer los dos ciclos investigados
✘

posible mecanismo de una realización
internamente reiterable
✔
```

La candidata dejó de disponer de fundamento para ser tratada como condición
realizativa necesaria.

---

## Distinción entre repetición y composición

La reducción de `R*-N01` no permite concluir que cualquier repetición de dos
aplicaciones independientes constituya reiteración.

Se distinguió:

```text
aplicación A de R-U2-M1

aplicación B de R-U2-M1
```

de:

```text
aplicación A
↓
algo procedente de A interviene posteriormente
↓
aplicación B
```

La mera sucesión temporal de dos aplicaciones no establece una trayectoria
acumulativa.

Para que el caso investigado constituya reiteración debe poder reconstruirse
alguna incidencia o dependencia trazable entre ambas trayectorias.

La prueba proporcionó esa dependencia mediante la mediación humana.

---

## Investigación de una posible nueva regla de composición

Se examinó si la necesidad de una incidencia trazable entre ciclos exigía una
regla realizativa autónoma adicional.

No se demostró una condición irreducible nueva.

`CR-PV001-01` ya permite que aquello procedente de una situación anterior
produzca, directamente o mediante mediaciones derivadas, una diferencia
relevante en las posibilidades humanas de una situación posterior.

En el caso investigado, los enlaces relevantes pudieron reconstruirse
mediante ese criterio sin añadir una condición realizativa independiente.

El resultado no permite afirmar que `CR-PV001-01` constituya por sí solo un
criterio universal suficiente para toda forma posible de composición o
reiteración.

Por tanto:

```text
nueva regla autónoma de composición
✘ no demostrada

nuevo criterio realizativo irreducible
✘ no demostrado

CR-PV001-01
✔ permite reconstruir los enlaces
  relevantes del caso investigado
  sin añadir una condición independiente
```

---

## Resultado de atribución

La evidencia obtenida permite afirmar:

> Dos aplicaciones locales de `R-U2-M1`, enlazadas mediante una mediación
> humana trazable, proporcionaron evidencia positiva local de que la
> incidencia comprometida por `PV-001` puede aparecer de forma reiterada.

La atribución debe mantenerse limitada.

La investigación no permite afirmar:

```text
R-U2-M1
=
realización internamente reiterable
```

ni:

```text
dos aplicaciones cualesquiera de R-U2-M1
=
reiteración de PV-001
```

El resultado observado es composicional:

```text
R-U2-M1
+
mediación humana trazable
+
R-U2-M1
↓
trayectoria reiterada observada
```

---

## Relación con `POU-RU2M1-01`

Durante la preparación del segundo ciclo experimental se satisfizo de hecho
la misma condición preobservacional incorporada previamente al protocolo:

```text
ejecución destinada a constituir S1
↓
sin X válido restaurado
```

Este hecho no constituye una nueva aplicación formal de
`POU-RU2M1-01`.

Por tanto:

```text
condición revisada satisfecha de hecho
✔

OU-RU2M1-003
✘ no constituida

nueva aplicación formal del protocolo revisado
✘ no realizada

RP-POU-RU2M1-02
✘ no formulado
```

La investigación de reiteración conserva una responsabilidad distinta de la
observación instrumental de uso.

---

## Restauración del estado experimental

La preparación del segundo ciclo requirió una modificación temporal del
estado persistido utilizado por `R-U2-M1`.

Antes de la prueba se conservó el estado previo.

Después de completar la trayectoria experimental, dicho estado fue
restaurado y el respaldo temporal eliminado.

La comprobación final mostró:

```text
ru2m1.previous
→ restaurado al valor anterior a la prueba

respaldo temporal del experimento
→ eliminado
```

Por tanto, la investigación quedó también cerrada respecto de su preparación
técnica y no dejó como resultado una modificación persistente de la
realización.

---

## Consolidación documental

La investigación quedó conservada en:

```text
docs/06-realization/08-investigacion-reiteracion-por-composicion-R-U2-M1.md
```

El documento fue sometido posteriormente a auditoría.

La auditoría corrigió expresamente:

- una formulación que podía sugerir identidad literal entre el resultado del
  primer ciclo y `X2`;
- una formulación excesivamente fuerte sobre la suficiencia general de
  `CR-PV001-01`;
- la atribución de la incidencia reiterada;
- la relación con `POU-RU2M1-01`;
- y la cláusula de reapertura.

Después de las correcciones, la investigación quedó cerrada dentro de su
alcance.

El conocimiento canónico pertinente fue propagado a:

```text
docs/06-realization/00-R-U2-M1.md
```

mediante:

```text
E-RU2M1-08
↓
Investigación de reiteración por composición

CP-RU2M1-11
↓
evidencia positiva local de incidencia reiterada por composición
```

La reconsolidación no modificó las condiciones internas, invariantes ni
garantías de `R-U2-M1`.

---

## Resultado consolidado

El resultado alcanzado puede resumirse así:

```text
situación real de reiteración
✔ investigada

composición interna nueva de X
✘ no necesaria

producción automática de Xn+1
✘ no necesaria

interpretación semántica por el sistema
✘ no necesaria

transición interna S2(Xn) → Xn+1
✘ no demostrada como necesaria

R*-N01
✘ falsificada como condición necesaria

identidad literal entre ciclos
✘ no necesaria

mera repetición de aplicaciones
✘ insuficiente por sí sola

mediación humana trazable
✔ observada en el caso investigado

dos aplicaciones locales de R-U2-M1
✔ participaron en una trayectoria compuesta

incidencia reiterada de PV-001
✔ evidencia positiva local obtenida

nueva condición realizativa irreducible
✘ no demostrada

nueva responsabilidad realizativa
✘ no demostrada

realización autónoma R*
✘ no derivada

modificación de R-U2-M1
✘ no derivada

modificación de código
✘ no derivada

Product
✘ ninguna modificación derivada

Architecture
✘ ninguna obligación derivada
```

---

## Estado resultante

```text
08-investigacion-reiteracion-por-composicion-R-U2-M1.md
✔ investigación cerrada
✔ auditada dentro de su alcance

R-U2-M1
✔ E-RU2M1-08 incorporada
✔ CP-RU2M1-11 incorporada
✔ nueva evidencia reconsolidada
✔ garantías internas preservadas
✔ reiterabilidad interna no demostrada
✔ ninguna realización autónoma R* derivada
✔ ninguna modificación de código derivada

POU-RU2M1-01
✔ condición preobservacional satisfecha de hecho durante la preparación experimental
○ nueva aplicación formal del protocolo revisado no realizada
○ OU-RU2M1-003 no constituida
○ RP-POU-RU2M1-02 no formulado

Product
✔ sin modificación derivada

Architecture
✔ sin obligación derivada
```

---

## Punto de reanudación

La investigación de reiteración por composición queda cerrada dentro de su
alcance.

La evidencia obtenida no proporciona fundamento suficiente para continuar
desarrollando una realización `R*` por mera extensión del trabajo realizado.

En particular:

```text
evidencia de incidencia reiterada por composición
⇏
R-U2-M1 internamente reiterable

evidencia de incidencia reiterada por composición
⇏
R* necesaria

evidencia de incidencia reiterada por composición
⇏
nueva responsabilidad realizativa

evidencia de incidencia reiterada por composición
⇏
modificación de código

evidencia de incidencia reiterada por composición
⇏
OU-RU2M1-003
```

El protocolo revisado continúa sin haber sido ejercido mediante una nueva
aplicación formal y `RP-POU-RU2M1-02` continúa sin formularse.

Ninguna de estas circunstancias constituye por sí misma una deuda obligatoria
del proyecto.

Por tanto:

```text
investigación de reiteración por composición
↓
cerrada
↓
R-U2-M1 reconsolidada
↓
ninguna ampliación automáticamente derivada
↓
¿existe nuevo fundamento positivo independiente?
```

Una actuación posterior sólo deberá abrirse cuando exista fundamento
positivo suficiente dentro del cuerpo competente.

La mera posibilidad de imaginar una realización reiterable más integrada,
una nueva funcionalidad, una nueva observación o una mediación diferente no
constituye por sí misma fundamento suficiente.

---

# Ficha de evolución del proyecto

## Fecha

2026-08-28

## Actuación

Auditoría de la capacidad vigente de `06-DESIGN_JOURNAL.md` para incorporar nuevas propuestas posteriores al cierre de su corpus histórico.

### Situación de partida

El corpus histórico reconstruido de `06-DESIGN_JOURNAL.md` había sido sometido a una auditoría sistemática respecto del Product actualmente consolidado y se encontraba cerrado dentro de dicho alcance.

Al mismo tiempo, el propio Design Journal conservaba vigente su responsabilidad como espacio de incubación para nuevas ideas, hipótesis y propuestas que todavía no formen parte de la documentación normativa del proyecto.

Se identificó entonces una cuestión documental concreta:

```text
corpus histórico
        → auditado
        → cerrado

responsabilidad de incubación
        → vigente
        → abierta a nuevas propuestas

estructura disponible
        → ¿permite distinguir inequívocamente
          las propuestas posteriores
          del corpus histórico cerrado?
```

### Auditoría realizada

Se examinó la estructura vigente de `06-DESIGN_JOURNAL.md`.

La revisión confirmó que:

- el propósito del documento ya permitía conservar ideas, hipótesis y propuestas;
- su mera presencia en el Design Journal no constituía evidencia a favor de su incorporación;
- tampoco generaba por sí misma una obligación de investigación;
- el corpus histórico estaba explícitamente identificado como auditado y cerrado respecto del Product actualmente consolidado;
- y las secciones materiales existentes correspondían al corpus histórico o a investigaciones posteriormente incorporadas sobre dicho material.

Sin embargo, no existía un espacio estructural inequívoco destinado específicamente a propuestas surgidas después del cierre del corpus histórico.

Se estableció por tanto:

```text
responsabilidad vigente
de recibir nuevas propuestas
        +
corpus histórico cerrado
        +
ausencia de una ubicación
estructuralmente diferenciada
        ↓
carencia documental positiva
```

La carencia no afectaba al contenido ni a las conclusiones de la auditoría histórica.

Afectaba exclusivamente a la posibilidad de ejercer en el futuro la responsabilidad vigente del Design Journal sin introducir ambigüedad respecto del estatuto de las nuevas propuestas.

### Modificación realizada

Se incorporó a `06-DESIGN_JOURNAL.md`:

```text
# 8. Nuevas propuestas en evaluación
```

y se añadió dicha sección al índice del documento.

La nueva sección establece explícitamente que las propuestas allí registradas:

- son posteriores al cierre del corpus histórico auditado;
- no forman parte de dicho corpus;
- requieren una razón identificable para ser conservadas como posibilidades vivas;
- y pueden permanecer en evaluación hasta que exista justificación para incorporarlas a otro cuerpo documental, reformularlas o cerrarlas.

También se estableció una serie identificativa:

```text
NP-001
NP-002
NP-003
...
```

y una estructura mínima de registro basada en:

- fecha;
- situación u origen;
- propuesta;
- razón para conservarla;
- estatuto;
- y, cuando corresponda, condición de evaluación.

### Distinción metodológica consolidada

La modificación permite mantener separadas cuatro situaciones que no deben confundirse:

```text
razón para conservar una propuesta
        ≠
fundamento positivo para investigarla
        ≠
justificación para convertirla
en compromiso de Product
        ≠
justificación para convertirla
en línea estratégica
```

Por tanto, la incorporación de una propuesta al Design Journal no constituye por sí misma:

- un compromiso de Product;
- una modificación de `PV-001`;
- una nueva vertical;
- una línea estratégica;
- una prioridad;
- una obligación de investigación;
- una obligación de implementación;
- ni la siguiente actuación justificable del proyecto.

### Límites de la actuación

La auditoría y la modificación realizada:

```text
no reabren
el corpus histórico auditado

no modifican
PRODUCT.md

no modifican
PV-001

no derivan
PV-002

no modifican
ROADMAP.md

no derivan
una nueva actuación práctica
```

Tampoco se ha incorporado todavía ninguna propuesta concreta a la nueva sección.

La actuación establece únicamente el espacio documental y las reglas necesarias para que futuras propuestas puedan conservarse sin adquirir por ello un estatuto que todavía no haya sido justificado.

### Resultado

```text
06-DESIGN_JOURNAL.md
        ↓
responsabilidad de incubación
        → vigente

corpus histórico
        → preservado
        → auditado
        → cerrado dentro de su alcance

propuestas posteriores
        → espacio propio
        → estatuto no normativo
        → trazabilidad mediante NP-XXX

carencia documental detectada
        → reparada
```

La auditoría de esta cuestión queda cerrada.

**Resultado:** PASS.

### Punto de reanudación

La existencia de la nueva sección no obliga a poblarla ni genera por sí misma una nueva actuación.

Una propuesta podrá incorporarse cuando exista una razón identificable para conservarla como posibilidad viva en evaluación.

Su investigación posterior requerirá, cuando corresponda, el fundamento positivo exigible por el cuerpo competente.

---

# Ficha de evolución del proyecto

## Fecha

2026-08-28

## Actuación

Reexamen específico de `FP-2 — abundancia, localización y utilización`, familia identificada durante la auditoría adicional de fundamento histórico del Design Journal.

### Situación de partida

La auditoría histórica había identificado provisionalmente la familia:

```text
FP-2
abundancia, localización y utilización
```

dentro de una segunda extracción de evidencia primaria realizada para comprobar si el corpus histórico contenía situaciones humanas capaces de proporcionar fundamento positivo independiente que hubiera quedado oculto durante reconstrucciones posteriores.

`FP-2` había quedado comprendida en el resultado reductivo global de aquella investigación.

El cierre histórico establecía que los fundamentos positivos identificados habían sido examinados sin producir un nuevo compromiso de Product.

No existía, sin embargo, una reducción específica de `FP-2` con el mismo grado de trazabilidad documental alcanzado posteriormente para otras familias.

El reexamen no parte de una invalidación del cierre anterior ni de nueva autoridad normativa atribuida al corpus histórico.

Su finalidad consiste exclusivamente en someter a prueba explícita la diferencia humana contenida en aquella raíz histórica.

### Pregunta examinada

La investigación se formuló mediante la pregunta:

> ¿Existe una diferencia humana irreducible entre que información relevante esté disponible o sea localizable y que una persona pueda utilizarla efectivamente en una situación, o esa diferencia puede reconstruirse mediante `PV-001` y los demás resultados ya consolidados?

Se eliminaron como presupuestos necesarios:

- una cantidad enorme de información;
- mapas;
- grafos;
- buscadores;
- inteligencia artificial;
- clasificaciones;
- rutas de aprendizaje;
- relaciones semánticas predeterminadas;
- y otras soluciones históricas concretas.

### Diferencia humana corroborada

El reexamen permitió establecer que disponibilidad y localización no son universalmente suficientes para la utilización efectiva.

Puede darse:

```text
aportaciones relevantes
        ↓
disponibles
        ↓
localizables

pero

persona
        ↓
no puede todavía realizar
una actuación para la que
esas aportaciones podrían resultar relevantes
```

Por tanto:

```text
disponibilidad + localización
        ⇏
utilización efectiva
```

La diferencia histórica no quedó reducida a mera inexistencia fenomenológica.

### Reducción de la abundancia

Se comprobó que la diferencia puede aparecer incluso con una cantidad pequeña de aportaciones.

Por tanto:

```text
gran cantidad de información
        → puede aumentar dificultad,
          coste, esfuerzo o practicabilidad

pero

gran cantidad de información
        → no constituye una condición
          necesaria del fenómeno
```

La abundancia no proporciona por sí misma un fundamento independiente de Product.

### Pruebas de irreducibilidad

Se intentó localizar un residuo de utilización que permaneciera después de conceder las posibilidades ya admitidas por `PV-001`.

La investigación examinó varias vías.

#### Aportaciones o mediaciones adicionales

Cuando la utilización depende de una explicación, selección, comparación, organización, transformación u otra aportación mediadora, dicha aportación puede quedar disponible e intervenir posteriormente.

La estructura continúa siendo reconstruible como:

```text
situación anterior
        ↓
algo queda disponible
        ↓
intervención posterior
        ↓
diferencia en posibilidades humanas
```

No se demostró por esta vía una nueva clase de compromiso de Product.

#### Interpretación humana

Cuando las configuraciones pertinentes están disponibles pero la pérdida consiste en que una persona no comprende, conoce o interpreta aquello disponible, el residuo se desplaza hacia la interpretación humana.

La plataforma puede hacer disponibles configuraciones capaces de intervenir posteriormente, pero la interpretación o el conocimiento resultantes no se convierten por ello en resultados garantizados por Product.

Tampoco apareció por esta vía una nueva vertical.

#### Condiciones situacionales de actuación

Se examinó asimismo si la diferencia dependía de condiciones propias de la situación presente.

Se distinguieron tres casos:

```text
condición externa de la situación
        ↓
contexto de la incidencia
        ↓
sin nueva responsabilidad demostrada

condición procedente de otra aportación
        ↓
puede intervenir posteriormente
        ↓
espacio de PV-001

función específica que Product
deba realizar respecto de la condición
        ↓
requiere fundamento positivo independiente
        ↓
no demostrado
```

La existencia de condiciones que afectan a las posibilidades humanas no implica por sí misma que Product deba representarlas, identificarlas, conservarlas, clasificarlas, modificarlas o controlarlas.

### Prueba fuerte de control

Se intentó construir dos situaciones manteniendo constantes:

- las mismas aportaciones antecedentes relevantes;
- las mismas posibilidades de incidencia admitidas por `PV-001`;
- las mismas capacidades interpretativas pertinentes;
- y las mismas condiciones situacionales relevantes para la actuación considerada.

No fue posible obtener:

```text
situación A
→ no utilizable

situación B
→ utilizable
```

sin introducir alguna diferencia adicional entre ambas.

Las diferencias localizadas pertenecían a alguno de los siguientes ámbitos:

```text
aportación o configuración
incidencia
interpretación
condición de actuación
condición situacional
```

No quedó identificado un residuo positivo independiente denominado simplemente «utilización».

### Estado de las hipótesis

```text
H-U1
disponibilidad o localización
es suficiente para la utilización
→ RECHAZADA

H-U2
la diferencia de utilización
constituye una diferencia de Product
irreducible a PV-001
→ NO CORROBORADA

H-U3
la diferencia se explica exclusivamente
por escala o eficiencia
→ RECHAZADA

H-U4
la diferencia depende necesariamente
de una solución histórica concreta
→ RECHAZADA

H-U5
la diferencia humana es real,
pero puede reconstruirse mediante
PV-001, interpretación humana
o condiciones situacionales que
no generan por sí mismas
una nueva responsabilidad de Product
→ CORROBORADA DENTRO DEL ALCANCE INVESTIGADO
```

### Control sobre `PV-001`

Se comprobó la formulación vigente de `PV-001`.

El compromiso ya establece que aquello procedente de situaciones anteriores puede incidir en las posibilidades humanas de una situación posterior y que dicha incidencia no tiene que producirse efectivamente en cada situación concreta.

También permanece establecido que las propiedades adicionales de casos particulares no forman parte de la vertical salvo demostración independiente de su necesidad.

Por tanto:

```text
reexamen de FP-2
        ↓
no identifica carencia
en PV-001

PV-001
        → no modificada
        → no ampliada
```

La precisión relativa al carácter situado de las posibilidades humanas resulta compatible con el alcance ya consolidado y no requiere incorporación normativa adicional.

### Resultado

La investigación confirma:

```text
disponibilidad o localización
        ≠
utilización efectiva
```

como diferencia humana posible.

Sin embargo, no identifica en dicha diferencia un compromiso de Product independiente.

Por tanto:

```text
diferencia humana
        → corroborada

residuo positivo independiente de Product
        → no identificado

nueva vertical de Product
        → no derivada

modificación de PV-001
        → no derivada

PV-002
        → no derivada

capacidad funcional concreta
        → no derivada
```

El reexamen hace explícita la reducción específica de `FP-2` y aumenta la trazabilidad de su cierre histórico.

No corrige ni invalida el resultado de la auditoría histórica anterior.

### Modificación documental

El resultado fue incorporado a:

```text
docs/08-project/06-DESIGN_JOURNAL.md
```

como:

```text
Reexamen posterior de
FP-2 — abundancia, localización y utilización
```

La incorporación se realizó después del cierre de la auditoría histórica original para conservar explícitamente la diferencia temporal y documental entre:

```text
investigación histórica original
        ↓
cierre previo

y

reexamen posterior específico
        ↓
aumento de trazabilidad
        ↓
confirmación del cierre
```

No se modificó `02-PRODUCT.md`.

No se derivó modificación de `ROADMAP.md`.

No se identificó un cambio material de estado que exigiera modificar `PROJECT_STATUS.md`.

### Estado

**Cerrado — reexamen específico de `FP-2` completado sin residuo positivo independiente de Product.**

### Condición de reapertura

La cuestión podrá reabrirse si aparece fundamento positivo independiente capaz de identificar una pérdida humana concreta que:

- no pueda reducirse a incidencias ya admitidas por `PV-001`;
- no consista únicamente en interpretación humana;
- no dependa únicamente de condiciones externas de la situación;
- y permita justificar una responsabilidad propia de Product todavía no contenida en los compromisos vigentes.

La mera posibilidad de imaginar mecanismos destinados a hacer la información más fácil de localizar, organizar, relacionar, comprender o utilizar no constituye por sí misma fundamento suficiente.

### Punto de reanudación

El cierre de `FP-2` no prescribe la investigación inmediata de otra familia histórica ni la búsqueda de una nueva vertical.

Una actuación posterior deberá contar con fundamento positivo propio dentro del cuerpo competente.

---

# Ficha de evolución del proyecto

## Fecha

2026-08-29

## Actuación

**Investigación de incidencia posterior tras indisponibilidad del antecedente, derivación y validación de `R-DX1-M1` y clausura sin nueva responsabilidad normativa.**

### Situación de partida

La investigación de reiteración por composición de `R-U2-M1` había quedado cerrada dentro de su alcance.

Aquella investigación había obtenido evidencia positiva local de que la incidencia admitida por `PV-001` podía aparecer reiteradamente mediante composición de dos aplicaciones locales de `R-U2-M1` enlazadas por mediación humana trazable.

El resultado había establecido:

```text
incidencia reiterada por composición
✔ observada

reiterabilidad interna de R-U2-M1
✘ no demostrada

nueva condición realizativa irreducible
✘ no demostrada

realización autónoma R*
✘ no derivada

modificación de R-U2-M1
✘ no derivada

modificación de Product
✘ no derivada
```

La investigación había dejado además una distinción importante.

La composición ejercida seguía una trayectoria en la que el resultado de una aplicación podía ser mediado humanamente antes de constituir el antecedente de otra aplicación.

No había demostrado específicamente:

```text
Y producida
↓
Y permanece disponible
↓
X deja de estar disponible
↓
interrupción
↓
Y continúa disponible
↓
Y produce una incidencia posterior
```

sin que `Y` hubiera sido preparada previamente como antecedente de una nueva aplicación.

### Fundamento positivo para investigar

Una situación concreta permitió localizar esta diferencia.

La cuestión no consistía en determinar si una aportación posterior podía existir después de otra, ni en exigir una determinada organización estructural de la plataforma.

La diferencia relevante era:

```text
X interviene en una situación
↓
se produce Y
↓
Y queda disponible
↓
X deja posteriormente de estar disponible
↓
Y conserva capacidad de incidencia
en una situación posterior
```

El control sobre la investigación previa mostró que la trayectoria de reiteración por composición no constituía evidencia suficiente para este caso.

En particular:

```text
nuevo S1 sin X1 restaurado
≠
evidencia de incidencia de Y1
después de la desaparición de X1
```

Por tanto existía un fundamento positivo independiente para abrir una investigación realizativa específica.

### Pregunta investigada

La pregunta quedó formulada como:

> **¿Puede una aportación `Y`, después de haber sido producida y hecha disponible mediante una situación en la que intervino `X`, conservar capacidad de incidencia posterior cuando `X` deja de estar disponible antes de dicha incidencia, sin requerir que `Y` haya sido previamente transformada en el antecedente de una nueva aplicación?**

La investigación se conservó en:

```text
docs/06-realization/09-investigacion-incidencia-posterior-tras-indisponibilidad-del-antecedente.md
```

### Hipótesis

Se establecieron cuatro hipótesis principales:

```text
H-DX1
la composición previamente observada
ya es evidencia suficiente
→ RECHAZADA

H-DX2
Y puede conservar incidencia posterior
después de que X deje de estar disponible
sin preparación previa Y → X2
→ sometida a prueba

H-DX3
la trayectoria exige una condición
realizativa irreducible adicional
→ sometida a prueba

H-DX4
si R-U2-M1 no realiza internamente
la trayectoria, queda refutada
→ RECHAZADA COMO INFERENCIA
```

La incapacidad de `R-U2-M1` para proporcionar por sí sola la nueva trayectoria no fue tratada como defecto automático.

La pregunta investigada quedaba fuera de las responsabilidades que habían justificado y consolidado previamente dicha realización.

### Reducción de la trayectoria

La investigación distinguió entre disponibilidad, desaparición del antecedente, permanencia del resultado e incidencia posterior.

Se derivó como trayectoria mínima:

```text
E0
(X, ∅)
↓
X → Y

E1
(X, Y)
↓
X deja de estar disponible

E2
(∅, Y)
↓
interrupción

E3
(∅, Y)
↓
Y → Z
```

La investigación exigió distinguir localmente:

```text
X no disponible
+
Y disponible
```

después de una interrupción.

No se consideró suficiente:

```text
eliminar X
durante la misma ejecución
```

porque el estado de ejecución podía conservar todavía información relevante.

Tampoco se consideró válida una trayectoria en la que `Y` hubiera sido previamente preparada como sustituto de `X`.

La secuencia prohibida como evidencia era:

```text
X → Y
↓
Y se prepara como X2
↓
X desaparece
↓
interrupción
↓
incidencia de Y
```

La secuencia requerida era:

```text
X → Y
↓
Y queda disponible
↓
X desaparece
↓
interrupción
↓
Y sigue disponible
↓
sólo entonces
Y → Z
```

### Derivación de `R-DX1-M1`

Para someter la cuestión a prueba se derivó una candidata experimental independiente:

```text
R-DX1-M1
```

La candidata no constituye:

```text
una modificación de R-U2-M1
✘

una sucesora normativa de R-U2-M1
✘

una arquitectura
✘

una realización general de PV-001
✘

un compromiso de Product
✘
```

Su responsabilidad se limitó a proporcionar un witness ejecutable de la trayectoria investigada.

Se rechazó como primer mecanismo experimental una única posición persistente compartida por `X` e `Y`, porque sustituir `X` por `Y` habría reproducido precisamente la preparación previa `Y → X2` que debía mantenerse fuera de la trayectoria.

Se seleccionaron dos posiciones persistentemente distinguibles:

```text
PX
→ disponibilidad de X

PY
→ disponibilidad de Y
```

La realización contingente utilizó:

```text
rdx1m1.x
rdx1m1.y
```

como dos posiciones independientes en `localStorage`.

La operación crítica:

```text
removeX()
```

elimina exclusivamente `X` y no escribe, copia, reconstruye ni sustituye `Y`.

### Contratos y controles

La candidata fue derivada mediante contratos que exigían, entre otras condiciones:

```text
X e Y distinguibles
✔

Y constituida mediante X → Y
✔

Y disponible más allá de la constitución inmediata
✔

retirada de X sin reescritura de Y
✔

ausencia de preparación previa Y → X2
✔

interrupción seguida de nuevas lecturas
✔

X ausente después de la interrupción
✔

Y disponible después de la interrupción
✔

correspondencia trazable de Y
✔

incidencia posterior Y → Z
✔

control negativo sin Y
✔

opacidad semántica
✔
```

La correspondencia transinterrupción se ejerció mediante identidad literal de `Y` como witness contingente para reducir ambigüedad.

La identidad literal no fue elevada a requisito universal de correspondencia.

### Desarrollo dirigido por pruebas

La fase RED fue ejercida antes de disponer de la implementación del repositorio experimental.

El resultado inicial fue estructural:

```text
instrumento de antecedencia
→ tests ejecutables

repositorio experimental
→ importación inexistente

protocolo integrado
→ importación inexistente
```

La ausencia de implementación impidió que las suites correspondientes pudieran recolectarse y ejecutarse.

Posteriormente se incorporó la implementación mínima:

```text
src/realizations/rdx1m1/
├── dxAntecedenceInstrument.test.ts
├── localStorageDxRepository.test.ts
├── localStorageDxRepository.ts
└── rdx1m1Protocol.test.ts
```

La fase GREEN específica produjo:

```text
Test Files
→ 3 passed

Tests
→ 20 passed
```

La validación global del proyecto produjo:

```text
Test Files
→ 24 passed

Tests
→ 204 passed
```

La comprobación:

```text
npx tsc --noEmit
```

finalizó sin errores.

### Trayectoria positiva ejercida

La prueba integrada ejerció:

```text
X1 disponible
↓
X1 → Y1
↓
X1 e Y1 disponibles
y distinguibles
↓
retirada de X1
sin escritura sobre Y1
↓
X1 ausente
Y1 disponible
↓
interrupción instrumentada
mediante reinicio de módulos
↓
nueva instancia
y nuevas lecturas
↓
X1 ausente
Y1 disponible
↓
Y1 → Z1
```

La incidencia posterior de `Y1` se constituyó únicamente después de la interrupción.

### Control negativo

Se ejerció también la condición:

```text
X ausente
Y ausente
↓
interrupción
↓
Y continúa ausente
↓
Y → Z
✘
```

El control confirmó que la acción posterior utilizada como evidencia no quedaba disponible en ausencia de `Y`.

### Control de ausencia de preparación

Se comprobó expresamente:

```text
X1 disponible
↓
X1 → Y1
↓
guardar Y1

X sigue siendo X1
Y es Y1

X ≠ Y
↓
retirar X
↓
X ausente
Y1 disponible
```

Por tanto la evidencia positiva no depende de haber convertido previamente `Y` en el nuevo contenido de la posición de `X`.

### Resultado de las hipótesis

Después de la ejecución:

```text
H-DX1
→ RECHAZADA

la composición previa
no constituía por sí sola
evidencia del nuevo caso
```

```text
H-DX2
→ CORROBORADA
A NIVEL DE REALIZACIÓN EJECUTABLE
DENTRO DE R-DX1-M1
```

La candidata proporciona evidencia de que:

```text
X → Y
↓
X deja de estar disponible
↓
Y permanece disponible
↓
interrupción
↓
Y produce incidencia posterior
```

sin preparación previa:

```text
Y → X2
```

```text
H-DX3
→ NO CORROBORADA
```

No se identificó un residuo positivo que obligara a introducir una nueva condición realizativa irreducible.

Este resultado no constituye una demostración universal de que ninguna realización imaginable pueda requerir otras condiciones.

```text
H-DX4
→ RECHAZADA COMO INFERENCIA
```

La investigación no refuta `R-U2-M1`.

La nueva trayectoria se encuentra fuera del alcance previamente consolidado de dicha realización.

### Auditoría de suficiencia de la evidencia

Después del resultado ejecutable se examinó si era necesaria una validación humana independiente o una interrupción técnica más fuerte.

Se estableció como criterio que una validación adicional sólo estaría justificada si pudiera:

```text
A
ejercer una condición relevante
todavía no ejercida

o

B
falsar H-DX2
mientras las pruebas actuales pasaran

o

C
verificar una responsabilidad
que realmente perteneciera
al alcance de R-DX1-M1
```

No se identificó ninguna de esas condiciones.

Una interfaz habría añadido:

```text
React
eventos
renderizado
interacción manual
```

sin introducir una diferencia discriminante respecto de la pregunta investigada.

La interrupción mediante `vi.resetModules()` no fue identificada como equivalente universal a cerrar o recargar un navegador.

Sin embargo, una recarga o cierre de navegador tampoco había sido derivado como criterio necesario de la pregunta.

Exigirlo después del resultado habría fortalecido retroactivamente el criterio experimental sin fundamento independiente.

El resultado de la auditoría fue:

```text
H-VO1
validación humana independiente necesaria
→ RECHAZADA

H-VO2
interrupción técnica más fuerte necesaria
→ NO DERIVADA

H-VO3
evidencia ejecutable suficiente
dentro del alcance de R-DX1-M1
→ CORROBORADA
```

### Auditoría de clausura

La auditoría final revisó:

```text
pregunta original
✔ respondida

hipótesis
✔ evaluadas

contratos
✔ ejercidos

criterio de aceptación
✔ satisfecho

falsos positivos
✔ controlados

suficiencia de evidencia
✔ auditada y aceptada
```

No se identificó:

```text
obligación pendiente
→ ninguna

residuo positivo pendiente
→ ninguno actualmente identificado
```

El estado final quedó establecido como:

```text
R-DX1-M1
→ corroborada como realización experimental

H-DX2
→ corroborada dentro del alcance experimental

H-DX3
→ no corroborada

R-U2-M1
→ intacta

Product
→ intacto

Architecture
→ sin obligación derivada

nueva responsabilidad normativa
→ no derivada

investigación
→ CERRADA
```

### Estatuto de `R-DX1-M1`

`R-DX1-M1` se conserva como:

```text
witness experimental ejecutable
```

Su existencia demuestra realizabilidad dentro de las condiciones investigadas.

No adquiere por ello estatuto de:

```text
realización destinada al uso
✘

realización general de PV-001
✘

responsabilidad normativa de Realization
✘

arquitectura
✘

funcionalidad de Product
✘

continuación obligatoria
✘
```

Los mecanismos utilizados permanecen contingentes.

En particular:

```text
localStorage
dos claves
strings
identidad literal de Y
vi.resetModules()
```

son medios del witness experimental y no requisitos generales derivados.

### Consolidación en Git

La investigación, la candidata experimental y su evidencia ejecutable quedaron consolidadas conjuntamente mediante:

```text
3f86468
feat(realization): validate incidence after antecedent unavailability
```

El commit incorporó:

```text
docs/06-realization/09-investigacion-incidencia-posterior-tras-indisponibilidad-del-antecedente.md

src/realizations/rdx1m1/dxAntecedenceInstrument.test.ts
src/realizations/rdx1m1/localStorageDxRepository.test.ts
src/realizations/rdx1m1/localStorageDxRepository.ts
src/realizations/rdx1m1/rdx1m1Protocol.test.ts
```

El repositorio quedó limpio inmediatamente después de la consolidación.

### Propagación documental

El nuevo resultado modifica materialmente el estado vigente que es responsabilidad de:

```text
PROJECT_STATUS.md
```

por lo que el estado global fue actualizado para incorporar:

```text
investigación 09
R-DX1-M1
resultado de H-DX2
límites de H-DX3
clausura
ausencia de nuevas obligaciones normativas
nuevo punto de reanudación
```

La actuación se registra asimismo en `PROJECT_JOURNAL.md` para conservar su trayectoria histórica.

No existe fundamento para modificar por este resultado:

```text
05-AUDITORIA_GLOBAL_DEL_PROYECTO.md
✘

08-ROADMAP.md
✘

architecture-roadmap.md
✘

bitácora de Methodology
✘

bitácora de Metatheory
✘
```

La auditoría global conserva su estatuto histórico.

El Roadmap no ha recibido una nueva línea estratégica.

Architecture no ha recibido una nueva responsabilidad.

### Estado resultante

El estado posterior a la investigación es:

```text
PV-001
✔ intacta

R-U2-M1
✔ intacta dentro de su alcance consolidado

investigación de reiteración por composición
✔ cerrada

investigación de incidencia posterior
tras indisponibilidad del antecedente
✔ cerrada

R-DX1-M1
✔ candidata experimental derivada
✔ implementación mínima construida
✔ trayectoria positiva ejercida
✔ control negativo ejercido
✔ ausencia de preparación previa ejercida
✔ 20/20 tests específicos
✔ 204/204 tests globales
✔ TypeScript sin errores
✔ H-DX2 corroborada dentro del alcance experimental
→ H-DX3 no corroborada
→ witness experimental ejecutable

Product
✔ sin modificación

Architecture
✔ sin obligación derivada

R-U2-M1
✔ sin ampliación derivada

nueva responsabilidad normativa
✘ no derivada
```

### Condición de reapertura

La investigación no deberá reabrirse por:

```text
deseo de probar otra implementación
✘

posibilidad de construir una interfaz
✘

interés en utilizar otro almacenamiento
✘

deseo de producir más ejemplos
✘

existencia de mecanismos alternativos
✘
```

Sólo deberá considerarse su reapertura si aparece evidencia positiva capaz de cuestionar alguna conclusión de clausura, como:

- un contraejemplo relevante al criterio utilizado;
- una condición no ejercida que pertenezca demostrablemente a la pregunta original;
- una incompatibilidad descubierta con un compromiso consolidado;
- o una nueva diferencia irreducible positivamente fundada.

### Punto de reanudación

La investigación queda cerrada sin derivar por sí misma una actuación posterior.

En particular:

```text
R-DX1-M1 experimental
⇏ ampliar R-DX1-M1

R-DX1-M1 experimental
⇏ convertirla en realización destinada al uso

H-DX2 corroborada
⇏ nueva responsabilidad normativa

H-DX3 no corroborada
⇏ obligación de seguir investigándola

arquitectura del producto no derivada
⇏ Architecture como siguiente actuación

POU-RU2M1-01 con nueva aplicación formal no realizada
⇏ obligación automática de ejecutarla
```

La siguiente actuación deberá justificarse nuevamente a partir del estado global del proyecto y de un fundamento positivo independiente perteneciente al cuerpo competente.

---

# Ficha de evolución del proyecto

## Fecha

29/08/2026

## Actuación

Adopción de `LE-001 — Convergencia empírica hacia una primera trayectoria humana integrada` y establecimiento de un nuevo régimen operativo orientado a evidencia, construcción y uso.

## Situación de partida

El proyecto había cerrado las investigaciones inmediatamente anteriores sin derivar de ellas una actuación posterior obligatoria.

El estado consolidado mantenía:

```text
investigaciones anteriores
→ cerradas

actuación posterior automáticamente derivada
→ ninguna

R-U2-M1
→ primera realización contingente destinada al uso

POU-RU2M1-01
→ revisado
→ disponible para una nueva aplicación formal

Design Journal
→ responsabilidad vigente
→ espacio disponible para nuevas situaciones y propuestas

Architecture del nuevo producto
→ todavía no derivada
```

La ausencia de una actuación automáticamente derivada constituía un resultado válido y no una pérdida que debiera repararse.

Al mismo tiempo, el proyecto disponía ya de una primera cadena empírica capaz de relacionar:

```text
Product
↓
Realization
↓
artefacto
↓
uso
↓
observación
↓
pérdida
↓
investigación
↓
modificación
↓
nueva observación
```

La visión vigente continuaba orientada hacia la construcción progresiva de una plataforma real de conocimiento.

## Fundamento de la decisión estratégica

La nueva línea no se justificó por:

```text
aspectos todavía no construidos
✘

necesidad de poblar ROADMAP.md
✘

mera continuidad temporal
✘

existencia de preguntas todavía formulables
✘

necesidad de abrir nuevas investigaciones
✘
```

Su fundamento procedió de la convergencia de capacidades y resultados ya disponibles:

```text
visión vigente
→ construcción progresiva de un producto real

Product
→ primera vertical consolidada

R-U2-M1
→ realización destinada al uso

uso real
→ capacidad demostrada para producir evidencia

POU-RU2M1-01
→ protocolo revisado
→ disponible para nueva aplicación formal

Design Journal
→ capacidad para recibir nuevas situaciones humanas

Methodology
→ paralelismo controlado disponible
→ dependencia lógica distinta del orden temporal
```

Esta convergencia proporcionó una oportunidad estratégica suficiente para modificar el centro de gravedad del trabajo.

## Decisión

Se incorporó al Roadmap la línea:

```text
LE-001
→ Convergencia empírica hacia
  una primera trayectoria humana integrada
```

La línea persigue una secuencia general de trabajo:

```text
situación o uso
        ↓
evidencia
        ↓
investigación
sólo cuando resulte necesaria
        ↓
resultado suficientemente establecido
        ↓
compromisos suficientes
        ↓
trayectoria humana
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

La decisión no introduce por sí misma:

```text
una nueva funcionalidad de Product
✘

una nueva vertical
✘

una ampliación de PV-001
✘

una modificación de R-U2-M1
✘

una arquitectura general
✘

una investigación obligatoria
✘
```

## Carril A — nueva evidencia de uso

Se seleccionó como primera fuente empírica la realización de una nueva aplicación formal del protocolo revisado `POU-RU2M1-01`.

Su finalidad será obtener nueva evidencia sobre `R-U2-M1` bajo las condiciones preobservacionales ya corregidas.

La aplicación no presupone:

```text
pérdida
✘

modificación de R-U2-M1
✘

nueva investigación
✘

RP-POU-RU2M1-02
✘
```

Cualquier investigación posterior deberá justificarse por aquello que efectivamente aparezca durante la observación.

## Carril B — nuevas situaciones humanas

En paralelo podrá comenzar la incorporación de nuevas situaciones humanas posteriores al cierre del corpus histórico.

El punto de partida deberá ser:

```text
situación humana
+
diferencia identificable
```

y no:

```text
funcionalidad
+
solución técnica
```

Cuando exista razón suficiente para conservar una situación como posibilidad viva, podrá registrarse mediante la serie `NP-*` de `DESIGN_JOURNAL.md`.

Su registro no constituirá por sí mismo:

```text
compromiso de Product
✘

línea estratégica
✘

prioridad
✘

investigación obligatoria
✘

implementación
✘
```

Las situaciones deberán reducirse frente a los compromisos vigentes y sólo podrán producir una investigación cuando sobreviva un fundamento positivo propio.

## Régimen de investigaciones simultáneas

La nueva etapa admite varias investigaciones abiertas simultáneamente.

Cada investigación deberá conservar:

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

Dos investigaciones podrán comenzar y terminar en cualquier orden.

La regla aplicable será:

```text
orden temporal
≠
dependencia lógica
```

Ninguna investigación podrá utilizar como entrada un resultado todavía no establecido por otra.

## Criterio de suficiencia de investigación

Una investigación no deberá prolongarse únicamente para aumentar la precisión de su resultado.

La precisión adicional sólo estará justificada cuando pueda cambiar una decisión actualmente relevante de:

```text
Product
Realization
Architecture
construcción
```

Cuando la evidencia disponible sea suficiente para adoptar, rechazar, posponer o descartar la decisión que justificó la investigación, ésta deberá cerrarse dentro de su alcance.

## Prioridad de construcción y uso

Se estableció como criterio de la nueva etapa:

> Cuando una situación o trayectoria humana esté suficientemente justificada para ser construida, la construcción y el uso tienen prioridad sobre continuar generalizando su teoría.

La generalización previa sólo deberá continuar cuando exista una decisión concreta cuya resolución dependa de ella.

El criterio operativo puede representarse como:

```text
trayectoria suficientemente justificada
        ↓
¿queda una decisión necesaria
dependiente de más investigación?
        │
        ├── sí
        │   → investigar lo necesario
        │
        └── no
            ↓
          construir
            ↓
            usar
            ↓
      obtener evidencia
```

## Arquitectura por trayectoria

La adopción de `LE-001` no deriva una arquitectura general para la futura plataforma.

Architecture deberá intervenir únicamente cuando una trayectoria suficientemente justificada requiera resolver responsabilidades, límites, relaciones o mecanismos pertenecientes a ese cuerpo.

El criterio será:

```text
trayectoria humana
        ↓
responsabilidades necesarias
        ↓
arquitectura mínima
        ↓
construcción
```

y no:

```text
visión completa
        ↓
arquitectura completa anticipada
```

Las ampliaciones arquitectónicas posteriores deberán justificarse mediante nuevas trayectorias, pérdidas, incompatibilidades o dependencias efectivamente identificadas.

## Control práctico del paralelismo

Se adoptó como criterio operativo inicial, no normativo:

```text
2 investigaciones activas
→ régimen normal

3 investigaciones activas
→ admisible cuando sean independientes

más de 3
→ requiere justificar que el beneficio
  supera el coste de fragmentación
```

Este límite no modifica las condiciones metodológicas de admisibilidad del paralelismo.

## Preservación del resultado anterior

La adopción de `LE-001` no reinterpreta retrospectivamente el cierre anterior.

Permanece válido:

```text
investigaciones anteriores
↓
ninguna actuación posterior
automáticamente derivada
```

La nueva secuencia histórica es:

```text
cierre anterior
↓
ausencia legítima de actuación derivada
↓
evaluación del estado global
↓
decisión estratégica posterior
↓
LE-001
```

Por tanto, `LE-001` constituye una decisión estratégica posterior y no una obligación que hubiera permanecido oculta o pendiente dentro de las investigaciones anteriores.

## Criterio de primer resultado estratégico

La línea habrá alcanzado su primer resultado estratégico cuando pueda reconstruirse una trayectoria de la forma:

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

No será necesario completar una teoría general del producto ni cerrar investigaciones independientes que no constituyan una dependencia lógica necesaria de esa trayectoria.

## Estado resultante

```text
ROADMAP
→ LE-001 vigente

centro de gravedad
→ evidencia
→ construcción
→ uso

Carril A
→ preparado
→ nueva aplicación formal de POU-RU2M1-01

Carril B
→ preparado
→ nuevas situaciones humanas
→ NP-* cuando proceda

investigaciones simultáneas
→ admitidas bajo dependencia controlada

trayectoria humana integrada
→ todavía no seleccionada

Architecture
→ todavía no derivada
→ condicionada a trayectoria suficientemente justificada
```

## Punto de reanudación

La transición operativa queda definida.

La continuación podrá comenzar mediante dos actuaciones temporalmente paralelas:

```text
Carril A
→ preparar y ejercer
  una nueva aplicación formal
  de POU-RU2M1-01
```

y:

```text
Carril B
→ comenzar la captura
  de nuevas situaciones humanas
→ sin partir de funcionalidades
```

Cualquier investigación que aparezca posteriormente deberá disponer de fundamento positivo propio.

La próxima etapa no deberá volver a abrir la transición estratégica salvo que aparezca evidencia de que `LE-001` produce una pérdida, incompatibilidad o desvío respecto de la visión del proyecto.

---

# Ejecución y cierre de la actuación seleccionada para el Carril A de `LE-001`

## Situación de partida

La adopción de `LE-001 — Convergencia empírica hacia una primera trayectoria
humana integrada` había seleccionado para el Carril A una nueva aplicación
formal del protocolo revisado `POU-RU2M1-01`.

La selección no procedía de una obligación pendiente de investigaciones
anteriores.

Constituía una decisión estratégica posterior orientada a producir nueva
evidencia mediante uso efectivo.

El estado de partida era:

```text
POU-RU2M1-01
→ condición preobservacional revisada
→ nueva aplicación formal todavía no realizada

RP-POU-RU2M1-02
→ no formulado

Carril A
→ actuación seleccionada
→ nueva aplicación formal de POU-RU2M1-01
```

## Constitución de `OU-RU2M1-003`

La actuación seleccionada fue constituida como:

```text
OU-RU2M1-003
→ tercera observación instrumental de uso de R-U2-M1
```

La versión sustantiva observada de `R-U2-M1` fue:

```text
1966ced
```

La actividad humana utilizada para la observación consistió en la revisión real
de un párrafo de un artículo todavía no terminado ni publicado.

Antes de iniciar `S1` se ejerció por primera vez en una nueva aplicación formal
la condición preobservacional incorporada a `POU-RU2M1-01`.

La primera ejecución encontrada restauró un antecedente válido y constituyó:

```text
S2(X anterior)
```

por lo que no fue utilizada como `S1`.

Después de una actuación preparatoria contingente se inició una nueva
ejecución que comenzó:

```text
sin X válido restaurado
```

La condición preobservacional quedó así comprobada y satisfecha sin convertir
el mecanismo técnico utilizado para prepararla en requisito del protocolo.

## Trayectoria observada

La trayectoria efectiva pudo reconstruirse como:

```text
S1
↓
X
↓
interrupción
↓
S2(X)
↓
Y
```

Durante `S1` surgió como antecedente:

```text
se deben comparar los parrafos nuevos con la versión anerior guardada
```

`X` fue aceptado y almacenado por `R-U2-M1`.

La interrupción se extendió aproximadamente desde las 11:51 hasta las 17:29.

Al comenzar `S2(X)`, una nueva ejecución de `R-U2-M1` restauró y presentó
literalmente `X` antes de cualquier intervención posterior.

La actividad real fue retomada mediante la comparación en Obsidian de dos
versiones del artículo.

Durante esa comparación se observó que modificar cada diferencia
inmediatamente después de localizarla hacía el procedimiento lento y tedioso.

La actividad produjo una nueva forma de proceder y una nueva aportación `Y`:

```text
para poder hacer los cambios adecuadamente hay primero que anotar la localización de los mismos en una nota aparte después de localizarlos para poder encontrarlos en el momento de hacer las modificaciones porque hacer uno a uno es muy tedioso.
```

`Y` fue incorporado posteriormente mediante `R-U2-M1`, que presentó
conjuntamente el antecedente `X` y la actuación actual `Y`.

## Incidencia observada de `X`

La persona declaró que `X` tuvo una incidencia efectiva reducida en esta
situación concreta porque todavía recordaba la actuación que debía retomar.

Este resultado fue conservado como límite situacional de la observación.

No se interpretó como:

```text
insuficiencia de R-U2-M1
→ no

inutilidad de la persistencia
→ no
```

También se registró como posibilidad imaginada que un antecedente pudiera
producir una diferencia mayor tras una interrupción más prolongada o cuando
contuviera más elementos que recordar.

Esta posibilidad no fue convertida en evidencia ni en fundamento automático
para una nueva observación o investigación.

## Clasificación y consecuencia

La observación fue clasificada como:

```text
B — Evidencia positiva local
```

porque `R-U2-M1` participó efectivamente en una trayectoria humana posterior a
una interrupción y volvió a poner a disposición el antecedente producido en
`S1`.

La consecuencia resultante fue:

```text
ninguna
```

No se estableció:

```text
pérdida atribuible a R-U2-M1
→ no

insuficiencia candidata
→ no

incompatibilidad con R-U2-M1
→ no

necesidad de modificar R-U2-M1
→ no

necesidad de nueva investigación
→ no
```

## Evaluación de `POU-RU2M1-01`

La aplicación proporcionó nueva evidencia sobre la versión revisada del
protocolo.

La condición preobservacional permitió distinguir efectivamente:

```text
ejecución con X válido restaurado
→ S2(X anterior)
→ no constituye S1

nueva ejecución sin X válido restaurado
→ condición satisfecha
→ S1 constituible
```

La aplicación permitió además observar, registrar y evaluar una trayectoria
completa manteniendo separadas:

```text
hechos observados
declaraciones
interpretaciones
posibles insuficiencias
posibilidades imaginadas
consecuencia justificable
```

Por ello quedó establecido:

### `RP-POU-RU2M1-02` — Suficiencia instrumental local de la versión revisada

```text
La aplicación formal OU-RU2M1-003 aporta evidencia de que la versión revisada
de POU-RU2M1-01 fue instrumentalmente suficiente, en esta aplicación, para
constituir preobservacionalmente una nueva trayectoria válida, observarla,
registrarla y evaluarla sin confundir una ejecución inicialmente constituida
como S2(X anterior) con el S1 requerido.
```

El resultado es local.

No establece suficiencia general o universal del protocolo ni utilidad general
de `R-U2-M1`.

## Efecto sobre el Carril A

La actuación inicialmente seleccionada para el Carril A queda completada.

El estado resultante es:

```text
Carril A
→ actuación seleccionada completada
→ OU-RU2M1-003 cerrada
→ B — Evidencia positiva local
→ consecuencia: ninguna

POU-RU2M1-01
→ revisión ejercida formalmente
→ RP-POU-RU2M1-02 establecido localmente
→ sin nueva modificación derivada

R-U2-M1
→ sin modificación derivada

investigación posterior
→ ninguna automáticamente derivada
```

Este resultado no equivale al cierre de `LE-001`.

Tampoco establece que el Carril B constituya automáticamente la siguiente
actuación temporal.

`LE-001` continúa vigente bajo su objetivo más amplio de convergencia hacia una
primera trayectoria humana integrada.

## Preservación de la secuencia histórica

El resultado actual no modifica retrospectivamente el estado anterior.

La secuencia conservada es:

```text
investigaciones anteriores cerradas
↓
ninguna actuación posterior automáticamente derivada
↓
decisión estratégica posterior
↓
LE-001
↓
selección de una actuación para Carril A
↓
OU-RU2M1-003
↓
evidencia
↓
evaluación
↓
cierre de la actuación seleccionada
```

Por tanto, la ejecución de `OU-RU2M1-003` no convierte en obligaciones
retrospectivas las posibilidades que permanecían abiertas antes de la adopción
de `LE-001`.

## Estado resultante

```text
OU-RU2M1-003
✔ cerrada
✔ B — Evidencia positiva local
✔ consecuencia: ninguna

POU-RU2M1-01
✔ tercera aplicación completada
✔ revisión preobservacional ejercida
✔ RP-POU-RU2M1-02 establecido localmente
○ suficiencia general no establecida

Carril A
✔ actuación inicialmente seleccionada completada
→ ninguna nueva actuación automáticamente derivada

Carril B
→ capacidad vigente conservada
→ ninguna prioridad temporal automáticamente derivada

LE-001
→ vigente

primera trayectoria humana integrada
→ todavía no seleccionada

Architecture
→ todavía no derivada
→ condicionada a trayectoria suficientemente justificada
```

## Punto de reanudación

La actuación seleccionada para el Carril A ha quedado completada y no deja una
continuación interna pendiente.

La continuación del proyecto deberá determinarse a partir del estado global
vigente de `LE-001`, preservando:

```text
evidencia antes que investigación
+
investigación sólo ante fundamento positivo
+
dependencia lógica distinta del orden temporal
+
arquitectura derivada por trayectoria
+
construcción y uso cuando exista justificación suficiente
```

No deberá inferirse una siguiente actuación únicamente por la terminación de
`OU-RU2M1-003` o por el orden documental de los carriles.

---
