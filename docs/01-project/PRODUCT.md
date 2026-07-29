# Product

1. Propósito

2. El producto

3. Problema que resuelve

4. Público objetivo

5. Conceptos fundamentales

   5.1 Documento

   5.2 Autor

   5.3 Biblioteca

   5.4 Colección

6. Capacidades del producto

   6.1 Crear conocimiento

   6.2 Organizar conocimiento

   6.3 Revisar y colaborar

   6.4 Gestionar la evolución

   6.5 Publicar

   6.6 Difundir

   6.7 Preservar

7. Transparencia editorial

8. Modelo de publicación

9. Modelo de monetización

10. Evolución del producto

11. Relación con el resto de la documentación

## 1. Propósito

El propósito de este documento es definir el producto que se pretende construir, describiendo el problema que resuelve, los conceptos que forman parte de su dominio y las principales capacidades que ofrecerá a sus usuarios.

A diferencia de `VISION.md`, que establece el propósito general del proyecto, este documento se centra en el propio producto y en la forma en que ese propósito se materializa desde la perspectiva funcional.

Su objetivo no es especificar los detalles de implementación ni las decisiones arquitectónicas, sino proporcionar una descripción clara y coherente del sistema que se desea desarrollar, facilitando una comprensión compartida de su alcance y de su evolución prevista.

Este documento constituye la referencia principal para comprender qué es el producto, a quién va dirigido, qué capacidades lo definen y qué valor pretende aportar a sus usuarios.

## 2. El producto

El producto consiste en una plataforma digital orientada a la creación, gestión, publicación, difusión y preservación de documentos y conocimiento.

Su finalidad es proporcionar a autores, investigadores, estudiantes, docentes y cualquier persona interesada en la producción de contenido escrito un entorno unificado desde el que puedan desarrollar, organizar, compartir y mantener sus trabajos a lo largo del tiempo.

La plataforma no se limita a almacenar documentos. Su objetivo es gestionar el ciclo de vida completo del conocimiento, desde la creación inicial de un contenido hasta su publicación, revisión, evolución y conservación.

Para ello, el producto se construye alrededor de un concepto central: el **Documento**.

                    Documento

├── Artículo
├── Libro
├── Tesis
├── Ensayo
├── Manual
├── Investigación
└── Otros documentos
│
▼
Gestión del conocimiento

**Un documento constituye la unidad principal del sistema** y representa cualquier obra escrita susceptible de ser creada, gestionada o publicada dentro de la plataforma. Artículos, libros, ensayos, tesis, manuales, investigaciones, apuntes u otros tipos de contenido se entienden como especializaciones o manifestaciones de ese mismo concepto.

Este enfoque permite que la evolución del producto se apoye en un modelo conceptual sencillo y coherente, evitando tratar cada tipo de publicación como un sistema independiente.

A partir de este núcleo común, el producto podrá incorporar progresivamente nuevas capacidades relacionadas con la organización del conocimiento, la colaboración entre usuarios, la transparencia editorial, la publicación, la preservación y la difusión de los contenidos.

El crecimiento funcional de la plataforma deberá mantener siempre la coherencia con este modelo conceptual, favoreciendo la simplicidad del dominio y la reutilización de sus componentes.

## 3. Problema que resuelve

La creación y gestión de conocimiento suele desarrollarse actualmente mediante un conjunto de herramientas independientes, cada una especializada en una parte concreta del proceso.

Es habitual utilizar aplicaciones diferentes para redactar documentos, almacenarlos, organizarlos, revisarlos, publicarlos, compartirlos, gestionar sus versiones o preservar su historial. Esta fragmentación dificulta mantener una visión completa del ciclo de vida de una obra y obliga a los usuarios a distribuir su trabajo entre múltiples plataformas.

Como consecuencia, la información pierde contexto, la colaboración resulta más compleja, el seguimiento de los cambios se dispersa y la conservación del conocimiento depende de sistemas que no siempre están integrados entre sí.

En este contexto, los usuarios necesitan un entorno que les permita gestionar de forma unificada el ciclo de vida de sus documentos, manteniendo la coherencia entre todas las etapas de creación, organización, revisión, publicación, difusión y preservación del conocimiento.

Problema identificado
│
├── Herramientas fragmentadas.
├── Pérdida de contexto.
├── Dificultad para colaborar.
└── Necesidad de un entorno unificado.
│
▼
Respuesta propuesta
│
├── Documento como núcleo.
├── Gestión del ciclo de vida.
└── Modelo conceptual coherente

## 4. Público objetivo

El producto está dirigido a personas y organizaciones cuya actividad implique la creación, gestión, revisión, publicación, difusión o preservación de conocimiento mediante documentos. Más que responder a una profesión concreta, pretende dar respuesta a un conjunto de necesidades comunes relacionadas con el ciclo de vida del conocimiento.

Su diseño no responde a un perfil profesional específico, sino a un conjunto de necesidades comunes relacionadas con el ciclo de vida del conocimiento.

Como ejemplos, entre sus potenciales usuarios se encuentran:

- Investigadores y personal académico.
- Estudiantes y docentes.
- Escritores y autores.
- Profesionales que elaboran documentación técnica.
- Organizaciones que generan y mantienen conocimiento interno.
- Comunidades interesadas en la creación y difusión de contenidos especializados.
- Personas que desean organizar y conservar su producción intelectual a largo plazo.

Aunque las necesidades concretas de cada perfil pueden diferir, todos ellos comparten la necesidad de disponer de un entorno que permita gestionar documentos de forma coherente, mantener su evolución, facilitar la colaboración cuando sea necesaria y preservar el conocimiento generado.

El producto evolucionará teniendo en cuenta esta diversidad de usuarios, procurando que las nuevas capacidades mantengan un equilibrio entre flexibilidad, simplicidad y coherencia con el modelo conceptual definido para la plataforma.

Necesidad común
│
├── Crear conocimiento
├── Gestionar documentos
├── Colaborar
├── Publicar
└── Preservar
│
▼
Usuarios
│
├── Investigadores
├── Estudiantes
├── Autores
├── Profesionales
├── Organizaciones
└── Comunidades

## 5. Conceptos fundamentales

El modelo funcional del producto se construye a partir de un conjunto reducido de conceptos fundamentales que constituyen el núcleo de su modelo funcional.

Estos conceptos permiten describir el dominio del problema desde la perspectiva del producto, estableciendo un lenguaje común que servirá como referencia para su evolución funcional y para el posterior diseño del modelo de dominio.

Las secciones siguientes presentan estos conceptos de forma independiente, definiendo su significado dentro de la plataforma y la relación que mantienen entre sí.

### 5.1 Documento

El **Documento** constituye el concepto central del producto y la unidad fundamental sobre la que se construye el resto del sistema.

Se entiende por documento cualquier obra escrita cuya finalidad sea crear, organizar, revisar, publicar, difundir o preservar conocimiento dentro de la plataforma.

Esta definición es deliberadamente amplia y no depende del formato en que se almacene, del tipo de contenido que represente ni del medio mediante el cual se publique.

Desde la perspectiva del producto, un documento representa una entidad viva que puede evolucionar a lo largo del tiempo mediante revisiones, nuevas versiones, procesos de colaboración o cambios derivados de su propio desarrollo.

Artículos, libros, tesis, ensayos, manuales, investigaciones, apuntes y otras formas de producción escrita se consideran manifestaciones particulares de un mismo concepto general: el Documento.

Este enfoque permite que todas las capacidades del producto se desarrollen sobre un modelo común, simplificando la evolución del sistema y favoreciendo la coherencia del dominio.

A medida que el producto incorpore nuevas funcionalidades, el documento continuará siendo el elemento alrededor del cual se organizarán el resto de conceptos, procesos y relaciones de la plataforma.

### 5.2 Autor

El **Autor** representa a la persona responsable de la creación, desarrollo o mantenimiento de uno o varios documentos dentro de la plataforma.

Su papel no se limita a la redacción inicial de una obra, sino que abarca todas aquellas actividades relacionadas con su evolución, revisión, actualización y publicación.

Un mismo autor podrá participar en múltiples documentos, del mismo modo que un documento podrá contar con uno o varios autores cuando su desarrollo sea fruto de un trabajo colaborativo.

La plataforma distinguirá entre la autoría intelectual de un documento y otras formas de participación que puedan incorporarse en el futuro, como revisores, colaboradores o editores, permitiendo que cada rol desempeñe una función claramente definida dentro del ciclo de vida del conocimiento.

Este enfoque favorece un modelo flexible de creación y colaboración, adaptado tanto al trabajo individual como al desarrollo colectivo de documentos.

### 5.3 Biblioteca

La **Biblioteca** representa el espacio lógico en el que se organizan y gestionan los documentos dentro de la plataforma.

Su función no consiste únicamente en almacenar contenidos, sino en proporcionar un entorno estructurado que facilite su clasificación, localización, mantenimiento y evolución a lo largo del tiempo.

Una biblioteca puede reunir documentos de distinta naturaleza, manteniendo entre ellos relaciones organizativas sin alterar su identidad individual.

Desde la perspectiva del producto, la biblioteca constituye el contexto en el que un usuario, una organización o una comunidad desarrolla y conserva su conocimiento, permitiendo que este permanezca accesible y organizado conforme crece el volumen de información.

Este concepto permite que la plataforma evolucione hacia modelos más avanzados de organización, incorporando en el futuro capacidades como bibliotecas compartidas, espacios colaborativos, distintos niveles de acceso o mecanismos especializados de gestión del conocimiento, sin modificar el papel fundamental de la biblioteca dentro del producto.

### 5.4 Colección

La **Colección** representa un criterio de organización mediante el cual los documentos pueden agruparse dentro de una biblioteca.

Su finalidad es facilitar la gestión del conocimiento, permitiendo estructurar los documentos de acuerdo con un propósito común sin modificar su identidad ni su contenido.

Una colección puede reunir documentos relacionados por su temática, proyecto, autoría, finalidad, estado de desarrollo o cualquier otro criterio de clasificación definido por sus responsables.

Este enfoque permite que un mismo documento pueda formar parte de distintas colecciones cuando resulte útil para su organización, evitando duplicidades y favoreciendo una visión flexible del conocimiento.

Las colecciones constituyen un mecanismo de organización del producto y complementan el papel de la biblioteca como espacio general de gestión de documentos, proporcionando una estructura adaptable a las necesidades de cada usuario, organización o comunidad.

```text
Documento
│
├── Contenido
├── Evolución
│   ├── Versiones
│   ├── Revisiones
│   └── Colaboración
└── Publicación
    ├── Difusión
    └── Licencias
         │
         ▼
Gestión del conocimiento
```

## 6. Capacidades del producto

Las capacidades del producto describen las principales funciones que la plataforma ofrecerá a sus usuarios para gestionar el ciclo de vida del conocimiento. Cada capacidad representa una etapa del ciclo de vida del conocimiento. Aunque se presentan de forma secuencial para facilitar su comprensión, el producto permitirá recorrer este ciclo de forma flexible, adaptándose a las necesidades de cada documento y de cada proceso de trabajo.

En lugar de entender estas capacidades como un conjunto independiente de funcionalidades, el producto las organiza siguiendo las distintas etapas por las que puede evolucionar un documento desde su creación hasta su preservación.

Este enfoque permite mantener la coherencia del modelo conceptual y facilita que nuevas capacidades puedan incorporarse en el futuro sin alterar la estructura general del producto.

Las secciones siguientes presentan dichas capacidades agrupadas según el papel que desempeñan dentro del ciclo de vida del conocimiento.

```text
Conocimiento
      │
      ▼
Documento
      │
      ▼
Crear
   │
   ▼
Organizar
   │
   ▼
Revisar y colaborar
   │
   ▼
Gestionar la evolución
   │
   ▼
¿Publicar?
   │
 ┌─┴──────────────┐
 │                │
No               Sí
 │                │
 │                ▼
 │            Difundir
 │
 ▼
Seguir evolucionando
      │
      ▼
Preservar
```

### 6.1 Crear conocimiento

La creación de conocimiento constituye el punto de partida del ciclo de vida del documento y una de las capacidades fundamentales del producto.

La plataforma proporcionará un entorno que permita iniciar nuevos documentos de forma sencilla, independientemente de su finalidad, formato de origen o ámbito de aplicación.

Desde la perspectiva del producto, crear conocimiento no consiste únicamente en redactar un texto, sino en establecer el comienzo de una obra que podrá evolucionar mediante revisiones, colaboración, publicación y preservación a lo largo del tiempo.

El sistema permitirá incorporar documentos creados directamente dentro de la plataforma o procedentes de formatos externos, garantizando que todos ellos pasen a formar parte de un modelo común basado en el concepto de Documento.

Esta capacidad constituye la puerta de entrada al resto de funcionalidades del producto y sienta las bases para que el conocimiento pueda desarrollarse de forma coherente durante todo su ciclo de vida.

### 6.2 Organizar conocimiento

La organización del conocimiento constituye una capacidad esencial del producto y permite transformar un conjunto de documentos en un sistema estructurado, comprensible y sostenible a lo largo del tiempo.

La plataforma proporcionará mecanismos que faciliten la clasificación, agrupación y localización de los documentos sin alterar su identidad ni su contenido.

Esta organización se apoyará en los conceptos fundamentales definidos por el producto, como las bibliotecas y las colecciones, permitiendo que cada usuario, organización o comunidad adapte la estructura del conocimiento a sus propias necesidades.

El objetivo no consiste únicamente en facilitar el acceso a la información, sino también en preservar las relaciones existentes entre los documentos, favorecer su reutilización y mantener una organización coherente a medida que el volumen de conocimiento crece.

Las capacidades relacionadas con la organización podrán evolucionar progresivamente, incorporando nuevos mecanismos de clasificación, búsqueda y navegación sin modificar el modelo conceptual del producto.

### 6.3 Revisar y colaborar

La revisión y la colaboración constituyen una capacidad esencial del producto y permiten que el conocimiento evolucione de forma continua a lo largo del ciclo de vida de un documento.

El producto proporcionará mecanismos que faciliten la revisión de los contenidos, el intercambio de observaciones y la incorporación de mejoras, garantizando en todo momento la integridad y la trazabilidad del documento.

La colaboración constituye uno de los principios fundamentales del producto. Un documento podrá concebirse desde su origen como una obra colectiva, en la que varias personas participen de forma coordinada en su creación, desarrollo y evolución.

Cada persona podrá aportar conocimiento desde su propio ámbito de especialización, contribuyendo a la construcción de un resultado común sin que el documento deje de ser una única obra.

La plataforma favorecerá modelos de trabajo colaborativo inspirados en entornos de investigación, desarrollo científico, documentación técnica y otras disciplinas en las que el conocimiento se construye mediante la aportación conjunta de diferentes personas.

### 6.4 Gestionar la evolución

El conocimiento no permanece estático. A medida que una obra madura, incorpora nuevas aportaciones, corrige errores, amplía contenidos y adapta su enfoque a nuevas necesidades o descubrimientos.

La plataforma proporcionará mecanismos que permitan gestionar esta evolución de forma ordenada, preservando el historial del documento y garantizando la trazabilidad de los cambios realizados a lo largo de su ciclo de vida.

Esta capacidad permitirá mantener una visión completa de la evolución de cada obra, facilitando la consulta de versiones anteriores, la incorporación de nuevas revisiones y la comprensión del proceso mediante el cual el conocimiento ha ido desarrollándose.

El objetivo no consiste únicamente en conservar distintas versiones de un documento, sino en preservar la historia de su evolución como parte del propio conocimiento que representa.

La plataforma permitirá diferentes formas de creación y evolución del conocimiento, adaptándose tanto al trabajo individual como a los procesos colaborativos. Entre estos últimos, podrán desarrollarse modelos inspirados en entornos de investigación, desarrollo científico, documentación técnica y otras disciplinas en las que una obra evoluciona mediante la aportación coordinada de diferentes personas.

El objetivo no es imponer una metodología de trabajo, sino proporcionar un entorno flexible capaz de adaptarse a las distintas formas en que el conocimiento puede ser creado, desarrollado, compartido y preservado.

### 6.5 Publicar

La publicación constituye una capacidad opcional del producto mediante la cual un documento puede ponerse a disposición de otras personas, organizaciones o comunidades.

La creación de un documento no implica necesariamente su publicación. Una obra podrá permanecer como parte del espacio privado de su autor o de su grupo de trabajo durante todo su ciclo de vida, o publicarse únicamente cuando sus responsables lo consideren oportuno.

Cuando un documento sea publicado, el producto proporcionará los mecanismos necesarios para preservar su identidad, su contexto y la información necesaria para comprender su origen y evolución.

Publicar un documento no consistirá únicamente en hacerlo visible, sino en reconocer una versión determinada como una referencia válida dentro de su proceso de desarrollo.

Esta capacidad permitirá incorporar progresivamente funcionalidades relacionadas con la gestión de metadatos, licencias de uso, transparencia editorial, identificación de versiones publicadas y otros elementos que contribuyan a garantizar la calidad y la fiabilidad de las publicaciones.

La plataforma ofrecerá diferentes modelos de publicación, adaptándose tanto a necesidades personales como a entornos académicos, profesionales, comunitarios o comerciales, sin imponer un único modo de hacer accesible el conocimiento.

### 6.6 Difundir

La difusión constituye la capacidad mediante la cual el conocimiento publicado puede ponerse al alcance de otras personas, organizaciones o comunidades interesadas en consultarlo, utilizarlo o contribuir a su desarrollo.

Mientras que la publicación convierte una determinada versión de un documento en una referencia accesible, la difusión facilita su descubrimiento, su circulación y su integración dentro de un ecosistema más amplio de conocimiento.

La plataforma proporcionará mecanismos que favorezcan la localización, consulta y distribución de las publicaciones, respetando siempre las decisiones adoptadas por sus autores respecto a su visibilidad, licencias y condiciones de acceso.

Esta capacidad permitirá incorporar progresivamente funcionalidades relacionadas con la búsqueda, las referencias, las colecciones públicas, las recomendaciones, las suscripciones, las comunidades y otros mecanismos destinados a facilitar el acceso y la circulación del conocimiento.

El objetivo de la difusión no consiste únicamente en aumentar la visibilidad de una obra, sino en favorecer que el conocimiento llegue a las personas que puedan beneficiarse de él, reutilizarlo o contribuir a su evolución.

### 6.7 Preservar

La preservación constituye la capacidad mediante la cual el conocimiento generado dentro de la plataforma puede mantenerse accesible, comprensible y utilizable a lo largo del tiempo.

Preservar un documento no consiste únicamente en conservar su contenido, sino también en mantener la información necesaria para comprender su origen, su evolución, su contexto y las decisiones que han acompañado su desarrollo.

La plataforma proporcionará mecanismos que permitan garantizar la conservación de las obras y de los elementos que forman parte de su historia, favoreciendo que el conocimiento permanezca disponible incluso cuando hayan transcurrido largos periodos desde su creación o publicación.

Esta capacidad permitirá incorporar progresivamente funcionalidades relacionadas con la conservación de versiones, la preservación de metadatos, la estabilidad de las referencias, la gestión del ciclo de vida de las publicaciones y otros mecanismos orientados a garantizar la continuidad del conocimiento.

El objetivo de la preservación no consiste únicamente en evitar la pérdida de información, sino en asegurar que el conocimiento generado pueda seguir siendo consultado, comprendido y reutilizado por las generaciones futuras.

```text
Conocimiento
      │
      ▼
Documento
      │
      ▼
Crear
      │
      ▼
Organizar
      │
      ▼
Revisar y colaborar
      │
      ▼
Gestionar la evolución
      │
      ▼
¿Publicar?
 ┌────┴────┐
 │         │
No        Sí
 │         │
 │         ▼
 │     Difundir
 │
 ▼
Seguir evolucionando
      │
      ▼
Preservar
```

## 7. Transparencia editorial

La transparencia editorial constituye una característica fundamental del producto y tiene como finalidad proporcionar información clara sobre el proceso de creación, revisión, evolución y publicación de una obra.

El objetivo de esta capacidad no consiste en evaluar la calidad de un documento ni en establecer juicios sobre la forma en que ha sido elaborado, sino en ofrecer a sus lectores el contexto necesario para comprender cómo ha sido construido.

La plataforma favorecerá la incorporación progresiva de mecanismos que permitan documentar aspectos como la participación de distintas personas, las revisiones realizadas, las metodologías empleadas, las fuentes utilizadas, el uso declarado de herramientas de asistencia, las licencias aplicadas y cualquier otra información que contribuya a mejorar la comprensión y la confianza en una publicación.

Este enfoque se basa en la transparencia y no en la supervisión. Corresponderá a los autores decidir qué información desean compartir sobre el proceso de elaboración de sus obras, dentro de las posibilidades que ofrezca la plataforma y respetando siempre las políticas aplicables a cada espacio de publicación.

La transparencia editorial contribuirá a reforzar la confianza entre autores y lectores, facilitando que el conocimiento pueda interpretarse teniendo en cuenta el contexto en el que fue producido.

## 8. Modelo de publicación

El producto ofrecerá un modelo de publicación flexible y adaptable que permita adaptar cada obra a las necesidades de sus autores, organizaciones o comunidades.

La publicación no responderá a un único esquema, sino que podrá adoptar diferentes modalidades en función de los objetivos de cada documento, del público al que vaya dirigido y de las condiciones establecidas por sus responsables.

El producto no impondrá un único modelo de publicación, sino que proporcionará un marco común capaz de adaptarse a diferentes formas de crear, compartir y difundir el conocimiento.

La plataforma permitirá que una obra permanezca privada, sea compartida con un grupo limitado de personas o se publique de forma abierta cuando sus autores así lo decidan.

Del mismo modo, el modelo de publicación podrá evolucionar para incorporar distintas modalidades de acceso, distribución y reutilización del conocimiento, respetando siempre las decisiones adoptadas por quienes sean responsables de la obra.

Este enfoque permitirá que el producto dé soporte tanto a proyectos personales como a iniciativas académicas, profesionales, comunitarias o comerciales, manteniendo un único modelo conceptual para todas ellas.

El objetivo no consiste en definir una única forma de publicar, sino en proporcionar un marco suficientemente flexible para que cada documento pueda seguir el modelo de publicación que mejor se adapte a su finalidad.

## 9. Modelo de monetización

La monetización constituye una política opcional del producto destinada a ofrecer a los autores distintas formas de obtener un retorno económico por la creación y publicación de sus obras.

El acceso al conocimiento y la posibilidad de obtener ingresos por él no se consideran objetivos contrapuestos. La plataforma permitirá que cada autor decida libremente cómo desea compartir sus publicaciones, pudiendo optar por modelos completamente abiertos, modelos comerciales o cualquier combinación que el producto incorpore en el futuro.

El sistema evolucionará para admitir diferentes modalidades de monetización, adaptándose a la naturaleza de cada obra y a las necesidades de sus autores, sin imponer un único modelo económico.

Entre las posibilidades que podrán incorporarse progresivamente se encuentran la venta directa de publicaciones, las suscripciones, las membresías, las aportaciones voluntarias, las licencias comerciales y otras formas de financiación compatibles con la filosofía del producto.

La monetización deberá integrarse de forma coherente con el resto de capacidades de la plataforma, respetando siempre las decisiones adoptadas por los autores y manteniendo el conocimiento como eje principal del producto.

## 10. Evolución del producto

El producto se concibe como una plataforma en evolución continua, capaz de adaptarse a nuevas formas de creación, organización, publicación y preservación del conocimiento sin perder la coherencia de su modelo conceptual.

Su crecimiento no estará determinado por la incorporación indiscriminada de funcionalidades, sino por la evolución progresiva y coherente de las capacidades que permitan gestionar el ciclo de vida del conocimiento de una forma cada vez más completa.

Las nuevas funcionalidades deberán integrarse respetando los conceptos fundamentales definidos por el producto, evitando introducir soluciones que rompan la simplicidad del dominio o comprometan la coherencia de la plataforma. La incorporación de nuevas capacidades no deberá modificar el significado de los conceptos fundamentales del producto, sino ampliar de forma coherente las posibilidades que estos ofrecen.

La evolución del producto estará guiada por las necesidades reales de sus usuarios, por los avances tecnológicos y por la experiencia adquirida durante su propio desarrollo, manteniendo siempre el conocimiento como eje central del sistema.

El objetivo no consiste en construir un producto cerrado, sino una plataforma capaz de evolucionar de forma sostenible, incorporando nuevas capacidades sin perder la identidad que define su propósito.

## 11. Relación con el resto de la documentación

Este documento define el producto desde una perspectiva funcional y conceptual, describiendo el problema que resuelve, los conceptos que forman parte de su dominio y las capacidades que orientan su evolución.

Este documento constituye la referencia funcional del producto y se relaciona con el resto de la documentación de la siguiente manera:

- **VISION.md** define el propósito y la filosofía que justifican la existencia del proyecto.
- **PROJECT_STATUS.md** refleja el estado actual del desarrollo y el grado de avance del producto.
- **PROJECT_JOURNAL.md** recoge la evolución histórica del proyecto y las decisiones que han marcado su desarrollo.
- **ROADMAP.md** establece las líneas estratégicas que guían la evolución del producto y de la plataforma.
- **ARCHITECTURE.md** describe la organización técnica del sistema y las decisiones de diseño que permiten materializar el producto definido en este documento.
- **DESIGN_JOURNAL.md** recoge ideas, hipótesis y propuestas que podrían incorporarse al producto tras su evaluación.

Esta organización permite mantener una separación clara entre la visión del proyecto, la definición del producto, su implementación técnica y su evolución, favoreciendo una documentación coherente, mantenible y preparada para acompañar el crecimiento del sistema.
