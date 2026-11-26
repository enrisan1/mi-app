# Consolidación integral del estudio comparativo EC-01…EC-12

**Proyecto:** mi-app · `enrisan1/mi-app`\
**Revisión estratégica:** etapa 3 — estudio comparativo de plataformas existentes\
**Fecha de consolidación:** 26 de noviembre de 2026\
**Estado:** versión revisada REV-01 aceptada mediante `G-CONS-EC-01` el 26/11/2026 como patrimonio de investigación no normativo y fundamento suficiente para continuar la revisión estratégica; primera exploración de los doce bloques consolidada, investigaciones selectivas pendientes. Se han incorporado las correcciones documentales REV-EC-01 y REV-EC-02, sin aprobación de producto ni arquitectura.\
**Referencia técnica histórica:** revisión publicada `c4580d4ad4666a9ad6c69f998b7b721e4adff1ae`, rama `feature/task-filters`. No se ha comprobado que siga siendo el HEAD remoto actual.

> Este documento conserva los resultados de investigación de EC-01…EC-12. No modifica Charter, Platform Vision, Product, Manual 17 ni los estados de cierre anteriores. No selecciona una arquitectura, aprueba compromisos, autoriza instalaciones ni abre un roadmap de implementación.

## 0. Propósito, método y criterio de lectura

La revisión estratégica se inició tras constatar una distancia significativa entre la finalidad del proyecto y la experiencia ordinaria de la aplicación publicada: acumulación de secciones, dificultad para reconocer la actividad, falta de un escritorio personal diferenciado y ausencia de una experiencia pública de consulta suficientemente constituida. La existencia de realizaciones y pruebas técnicas satisfactorias no resolvía por sí sola esa distancia.

La etapa 3 ha examinado soluciones externas antes de decidir qué producto debe constituirse y cómo realizarlo. Su finalidad no es reunir una lista de funcionalidades ni demostrar que mi-app sea necesariamente un producto único, sino aprender de soluciones existentes, reconocer posibles necesidades no suficientemente satisfechas y mantener abiertas las alternativas de realización.

### 0.1. Estatuto de las afirmaciones

| Marca | Significado |
|---|---|
| **D** | Hallazgo documental: capacidad, estándar o caso descrito por una fuente consultada en el estudio original. No equivale a prueba independiente de funcionamiento. |
| **M** | Hallazgo material: código, configuración u observación humana examinados en el estudio. Su alcance se limita a la evidencia disponible. |
| **H** | Hipótesis o inferencia que requiere contraste. |
| **P** | Propuesta candidata de producto, diseño, procedimiento o tecnología. No es un compromiso aprobado. |
| **A** | Cuestión abierta o evidencia pendiente. |

Los identificadores `EC-xx-Rnn` se conservan como referencias históricas del estudio. Sus formulaciones se han reducido y agrupado para evitar duplicaciones; no son transcripciones literales. EC-01 y EC-02 se han reconstruido a partir de los resultados recuperados de las conversaciones anteriores, con menor detalle disponible que los demás bloques. Las fuentes enlazadas son referencias de los estudios previos; no se ha realizado una nueva comprobación sistemática de su vigencia en esta consolidación.

### 0.2. Cobertura de la consolidación

| Responsabilidad | Ubicación |
|---|---|
| CONS-EC-01 — Resultados de los doce bloques | §2 |
| CONS-EC-02 — Inventario de referentes, estándares y tecnologías | §3 y §8 |
| CONS-EC-03 — Matriz de necesidades y soluciones | §4 |
| CONS-EC-04 — Hipótesis diferenciales y contraargumentos | §5 |
| CONS-EC-05 — Investigación técnica y REA | §6 |
| CONS-EC-06 — Propuestas de producto y experiencia | §7 |
| CONS-EC-07 — Evidencias, fuentes y limitaciones | §8 |
| CONS-EC-08 — Estado y transición | §9 |

## 1. Síntesis ejecutiva

La comparación permite formular una concepción candidata: una plataforma de conocimiento que permita trabajar individualmente, consultar y publicar, investigar con fuentes, contribuir a actividades colectivas y conservar las relaciones necesarias para comprender y continuar los resultados. La IA actuaría como recurso opcional e interoperable. La complejidad se presentaría progresivamente.

El estudio ha encontrado precedentes próximos a casi todas las capacidades propuestas. En particular, Octopus publica unidades de investigación relacionadas y ramificadas; Open Source Malaria aplica principios abiertos al proceso investigador; Manubot traslada procedimientos de GitHub a la escritura científica; Zooniverse e iNaturalist facilitan contribuciones pequeñas; JOGL estudia la conexión entre proyectos y colaboradores; RSpace integra actividades de investigación y gestión de datos. Estas referencias refutan cualquier pretensión de novedad basada únicamente en la existencia de colaboración científica abierta, trayectorias ramificadas o aportaciones granulares.

La hipótesis de valor que merece contrastarse es la **continuidad entre patrimonio personal, investigación fundamentada, publicación, contribución de diferente escala y evolución reconstruible del conocimiento**, dentro de una experiencia integrada y accesible. No está demostrada su superioridad frente a productos existentes, integraciones o extensiones de plataformas abiertas.

Se mantienen cuatro alternativas: utilizar productos existentes (ALT-01), integrarlos (ALT-02), extender una plataforma abierta (ALT-03) o constituir una plataforma propia con distintos grados de reutilización (ALT-04). La composición modular es una orientación provisional dentro de ALT-04. No se elige ninguna en esta etapa.

Tres aportaciones del usuario quedan expresamente conservadas: ciencia colaborativa inspirada en software abierto; participación de granularidad variable, incluidas aportaciones individuales y comprobaciones independientes; superficie de entrada libre y personalizable. Son propuestas candidatas, no decisiones irreversibles.

## 2. CONS-EC-01 — Resultados consolidados por bloque

### EC-01 — Entrada, espacios personales y navegación

**Pregunta:** cómo permitir que una persona encuentre un contexto reconocible, trabaje sobre contenidos independientes y recupere su actividad sin saturación de la interfaz.

**Referentes:** Notion, Obsidian, Capacities, Heptabase, Gemini Notebook. Notion separa navegación y contenido; Obsidian distingue archivos y configuración del entorno; Capacities utiliza espacios y objetos; Heptabase relaciona biblioteca y espacios visuales; Gemini Notebook delimita la actividad mediante cuadernos y fuentes.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | Separar navegación general y contenido de trabajo. | P |
| R02 | Distinguir el estado de la interfaz de los contenidos y conservar el contexto pertinente. | D/P |
| R03 | Independencia entre trabajos no significa aislamiento; pueden compartir antecedentes sin confundirse. | P |
| R04 | Una biblioteca común puede permitir reutilización de materiales en distintos contextos. | D/P |
| R05 | Las herramientas avanzadas pueden aparecer según la actividad. | D/P |
| R06 | Publicación y descubrimiento público son responsabilidades diferentes. | P |
| R07 | Existen referentes técnicos de persistencia y organización que merecen evaluación selectiva. | D/A |
| R08 | Organizar la experiencia por actividades constituye una alternativa fundada a la acumulación de funcionalidades. | H/P |

**Consecuencia:** distinguir portada pública, escritorio y entorno de trabajo; preservar la posición y el contexto al cambiar de actividad. No se ha comprobado una configuración específica de interfaz ni realizado pruebas con cuentas en estos productos.

### EC-02 — Cuentas, perfiles, identidad y privacidad

**Pregunta:** cómo constituir espacios personales y compartidos sin confundir la cuenta técnica con la identidad intelectual o con el acceso a los contenidos.

**Referentes:** Notion, GitHub, WordPress, Substack, Obsidian, Capacities, OpenID Connect/OAuth, WebAuthn, OWASP, Supabase, Firebase, Keycloak y RGPD.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | Persona, cuenta, perfil y autoría son dimensiones diferenciables. | P |
| R02 | La cuenta permite administrar trabajos y espacios personales. | P |
| R03 | Compartir una investigación no equivale a compartir todo el escritorio. | P |
| R04 | Autoría y permisos de intervención son independientes. | P |
| R05 | Identidad privada y presentación pública pueden distinguirse. | P |
| R06 | La consulta pública no debería requerir registro innecesario. | P |
| R07 | Persistencia en localStorage no demuestra aislamiento multiusuario. | M/H |
| R08 | Estándares y servicios existentes permiten evitar construir autenticación desde cero. | D/P |
| R09 | Los permisos deben proteger recursos y operaciones, no sólo la visibilidad de controles. | P |
| R10 | Conservar procedencia no obliga a hacer pública toda la identidad o actividad. | P |
| R11 | Privacidad y protección de datos deben considerarse desde el diseño. | P |
| R12 | La decisión entre centralización, local-first e híbrido permanece abierta. | A |

**Consecuencia:** autenticación, autorización, autoría, atribución, licencias y presentación pública deben tratarse como responsabilidades diferentes. La política de acceso deberá aplicarse a archivos, datos, búsquedas y agentes. Ningún mecanismo de autenticación ni arquitectura ha sido seleccionado. No hay auditoría de seguridad ni de cumplimiento jurídico.

### EC-03 — Creación, edición y colaboración abierta

**Pregunta:** cómo proporcionar creación documental ordinaria y abrir el proceso de producción de conocimiento a otras personas, sin reducir toda colaboración a editar un mismo documento.

**Referentes:** Google Docs, Word, Obsidian, Notion, Zotero; ProseMirror, Tiptap, BlockNote, Lexical; Open Source Malaria, Polymath, Manubot, protocols.io, OSF, GitHub, Zenodo, CRediT y ORCID.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | La edición ordinaria requiere más que introducir aportaciones textuales. | M/P |
| R02 | Editores reutilizables pueden reducir el desarrollo propio. | D/H |
| R03 | El modelo interno del editor no debe determinar todo el modelo de conocimiento. | P |
| R04 | Historial de edición y evolución intelectual son distintos. | P |
| R05 | Existen antecedentes de investigación inspirada en código abierto. | D |
| R06 | Colaboración abierta no equivale a edición colectiva. | D/P |
| R07 | Una investigación derivada puede conservar antecedentes y autonomía. | P |
| R08 | El núcleo común puede conservar interpretaciones y resultados divergentes. | P |
| R09 | Permisos administrativos y autoridad científica deben distinguirse. | P |
| R10 | CRediT, ORCID y licencias abiertas aportan referencias reutilizables. | D |
| R11 | La apertura requiere privacidad, procedencia y reconocimiento. | P |
| R12 | La transición de OSF advierte sobre sostenibilidad. | D/H |

**Consecuencia:** no construir un editor desde cero sin comparar alternativas; ofrecer modalidades privada, compartida y abierta; admitir desarrollos derivados y propuestas de incorporación. Las licencias y la apertura deben determinarse de manera explícita. La propuesta del usuario se amplía en EC-06/07 y §7.

### EC-04 — Almacenamiento, conservación y portabilidad

**Pregunta:** cómo conservar materialmente un patrimonio creciente, recuperarlo y mantener su significado y autonomía.

**Referentes:** Obsidian, Zotero, PostgreSQL, Supabase, Firebase, Cloudflare D1/R2, IndexedDB, OPFS, SQLite, local-first, Yjs, Automerge, Zenodo, DataCite, RO-Crate, FAIR, BagIt.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | Almacenamiento y preservación del conocimiento son responsabilidades diferentes. | P |
| R02 | localStorage es insuficiente como único almacén para el patrimonio futuro ampliado. | M/H |
| R03 | Publicar la aplicación no almacena automáticamente los datos personales en servidores. | M/D |
| R04 | Conviene estudiar por separado datos estructurados y archivos de gran tamaño. | D/P |
| R05 | Obsidian y Zotero ofrecen referencias de separación y conservación. | D |
| R06 | Centralizado, local-first e híbrido permanecen como alternativas. | A |
| R07 | Supabase, Firebase y Cloudflare son configuraciones candidatas. | P |
| R08 | Sincronizar no equivale a disponer de copias de seguridad independientes. | D |
| R09 | Historial técnico, intelectual y estados publicados tienen finalidades distintas. | P |
| R10 | CRDT resuelve conflictos de datos, no la validez de resultados científicos. | D/P |
| R11 | RO-Crate, DataCite y FAIR aportan referencias de preservación e intercambio. | D |
| R12 | Investigaciones derivadas necesitan identidad y antecedentes identificables. | P |
| R13 | Exportación merece estudiarse como garantía de autonomía. | P |
| R14 | El coste del almacenamiento no representa el coste total. | H |
| R15 | Existen mecanismos de persistencia y sincronización susceptibles de investigación técnica. | A |

**Consecuencia:** estudiar una infraestructura que distinga contenidos, metadatos, relaciones, permisos y archivos; recuperar copias completas y consistentes; permitir exportación en formatos interpretables. La arquitectura híbrida es una orientación a largo plazo, no una obligación inmediata. Las copias de base de datos de Supabase no incluyen los objetos de Storage según la documentación consultada. No se han probado migraciones ni restauraciones remotas.

### EC-05 — Organización y estructuración del conocimiento

**Pregunta:** cómo permitir que un patrimonio crezca sin imponer clasificación exhaustiva ni una ontología rígida a cada usuario.

**Referentes:** Obsidian Bases, Zotero, Tana Supertags, Capacities, Notion, Heptabase, Logseq, Wikidata, ORKG, Nanopublications, RDF, SKOS, OWL, SHACL, PROV-O, Web Annotation, Cytoscape.js.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | Identidad del contenido y forma de organización son diferentes. | P |
| R02 | Un material puede participar en varios contextos sin duplicación obligatoria. | D/P |
| R03 | Colecciones, etiquetas, propiedades y consultas cumplen funciones distintas. | D |
| R04 | La estructuración puede incorporarse progresivamente. | D/P |
| R05 | Representación visual y conocimiento representado deben distinguirse. | P |
| R06 | Un enlace genérico no equivale a una relación con significado explícito. | P |
| R07 | Relaciones sugeridas o detectadas no equivalen a relaciones acreditadas. | P |
| R08 | La organización colectiva puede preservar divergencias. | P |
| R09 | ORKG ofrece un referente de comparación científica estructurada. | D |
| R10 | Nanopublications permite intercambio de afirmaciones con procedencia. | D |
| R11 | RDF, SKOS, PROV-O y Web Annotation son referencias interoperables. | D |
| R12 | KnowledgeTrajectory contiene patrimonio de representación de relaciones tipadas. | M |
| R13 | No está demostrada la necesidad de una base de datos de grafos. | A |
| R14 | IA puede proponer organización sin autoridad intelectual automática. | P |
| R15 | La complejidad interna puede coexistir con una experiencia minimalista. | H/P |

**Consecuencia:** contemplar colecciones, propiedades, vistas, búsqueda y relaciones explícitas cuando aporten valor. La granularidad puede ir de una obra a un fragmento; no es obligatorio atomizar todos los escritos. Evaluar PostgreSQL antes de añadir infraestructura especializada. No hay validación formal de correspondencias con estándares.

### EC-06 — Investigación y relaciones entre fuentes

**Pregunta:** cómo pasar de una pregunta a resultados defendibles, manteniendo evidencias, criterios, cuestiones pendientes y posibilidades de reevaluación.

**Referentes:** Gemini Notebook, Elicit, ResearchRabbit, Connected Papers, Litmaps, Scite, Zotero, Hypothesis, Heptabase, ORKG, Nanopublications, OpenAlex, Crossref, Cochrane, PRISMA, SCORE.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | Buscar información no equivale a investigar. | P |
| R02 | Las citas navegables permiten comprobar fuentes, pero no garantizan conclusiones válidas. | D/P |
| R03 | Criterios de selección y decisiones metodológicas pueden ser conocimiento relevante. | D/P |
| R04 | Descubrimiento relacional complementa palabras clave. | D |
| R05 | Similitud bibliográfica no significa coincidencia científica. | D/P |
| R06 | Las relaciones pueden expresar apoyo, contradicción, limitación o ampliación. | D/P |
| R07 | Anotar permite trabajar sobre fuentes sin alterarlas. | D |
| R08 | Existen mecanismos técnicos de anclaje de anotaciones. | M/D |
| R09 | Una recuperación aproximada de evidencia necesita advertencias y garantías. | H/P |
| R10 | OpenAlex y Crossref permiten aprovechar índices y metadatos existentes. | D |
| R11 | Revisiones vivas son antecedentes de investigación actualizable. | D |
| R12 | Incidencias sobre fuentes pueden justificar reevaluar resultados derivados. | P |
| R13 | La asistencia de IA tiene utilidad y límites de fiabilidad dependientes de la tarea. | D |
| R14 | Colaboración y desarrollo independiente pueden coexistir. | P |
| R15 | Conservar el proceso investigador es una hipótesis de valor. | H |
| R16 | Participación abierta de granularidad variable: pequeñas aportaciones, comprobaciones y proyectos completos. | P |

**Consecuencia:** mantener diferencias entre fuente, afirmación, evidencia y conclusión; conservar los fragmentos y versiones pertinentes; facilitar propagación de advertencias, no de conclusiones automáticas. EC-06 incluyó inspección estática del mecanismo de anclaje HTML de Hypothesis; no experimentación ni garantía de exactitud ante cambios del original. Estudios de Elicit y Scite advierten que los resultados de búsqueda, extracción y clasificación deben contrastarse y no extrapolarse a todos los modelos.

### EC-07 — Publicación, difusión y consulta pública

**Pregunta:** cómo hacer que el conocimiento sea accesible, localizable, evaluable y susceptible de contribuciones.

**Referentes:** WordPress, Medium, Substack, Wikipedia/MediaWiki, GitHub, arXiv, Zenodo, Crossref, eLife, PubPeer, Zooniverse, iNaturalist, SCORE, ORKG, Nanopublications.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | Publicación y descubrimiento son responsabilidades diferentes. | P |
| R02 | El trabajo privado y sus versiones públicas deben distinguirse. | D/P |
| R03 | Consulta pública sin registro innecesario. | P |
| R04 | Investigación publicable progresivamente. | D/P |
| R05 | Estados publicados requieren identidad y referencias estables. | D/P |
| R06 | Seguimiento potencial de autores, investigaciones y cuestiones. | P |
| R07 | Revisión posterior puede formar parte del espacio público. | D/P |
| R08 | Las contribuciones admiten diferentes escalas y naturalezas. | P |
| R09 | Los responsables pueden solicitar contribuciones específicas. | P |
| R10 | Comprobaciones negativas pueden aportar conocimiento. | P |
| R11 | Publicación no constituye certificación de validez. | P |
| R12 | Indexación y difusión externa requieren diseño específico. | D/P |
| R13 | Gobernanza científica y administración técnica son diferentes. | P |
| R14 | Zooniverse, iNaturalist y SCORE aportan referencias de participación y contraste. | D |
| R15 | Conectar necesidades de investigación con capacidades humanas es hipótesis diferencial, con antecedentes. | H |

**Consecuencia:** distinguir lectura, búsqueda, publicación, seguimiento, contribución y reutilización. Una investigación abierta podría mostrar objetivo, estado, resultados, necesidades, condiciones de participación y licencias. La entrada pública debe poder accederse por enlaces directos; indexabilidad no garantiza posición ni visitas. Revisión, atribución y moderación requieren procedimientos propios. No se han medido visibilidad ni demanda.

### EC-08 — Inteligencia artificial y agentes

**Pregunta:** cómo ampliar capacidades humanas mediante IA sin transferir implícitamente control, autoridad o patrimonio a un proveedor.

**Referentes:** ChatGPT, Gemini Notebook, Notion AI, Capacities, Heptabase, Elicit, Glean, Claude, PaperQA2, RAG, GraphRAG, MCP, Agents SDK, Ollama, OWASP.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | La asistencia admite distintos niveles de autonomía. | P |
| R02 | Puede aparecer en el contexto de la actividad. | D/P |
| R03 | El usuario debe poder delimitar información utilizada. | P |
| R04 | Leer, proponer y modificar son operaciones distintas. | P |
| R05 | MCP facilita interoperabilidad con agentes externos. | D |
| R06 | PaperQA2 es candidato para investigación bibliográfica asistida. | D |
| R07 | Recuperación textual, semántica y relacional pueden complementar al modelo. | D/H |
| R08 | Patrimonio y continuidad no deben depender de memoria conversacional. | P |
| R09 | Un sistema multiagente necesita justificación específica. | P |
| R10 | IA puede ayudar a organizar y examinar aportaciones. | H/P |
| R11 | IA podría sugerir oportunidades de colaboración con consentimiento. | H/P |
| R12 | Evaluación crítica es una modalidad de asistencia relevante. | P |
| R13 | Existe una primera integración de IA en mi-app. | M |
| R14 | Procedencia observable no equivale al razonamiento interno del modelo. | P |
| R15 | Autorización debe verificarse independientemente del modelo. | P |
| R16 | Privacidad exige controlar datos enviados y condiciones de proveedor. | P |
| R17 | Modelos locales y externos son alternativas complementarias. | D/P |
| R18 | La frecuencia y alcance de actuaciones afectan a la sostenibilidad. | H |

**Consecuencia:** asistencia integrada básica y posibilidad de interoperar con agentes externos; acceso de mínimo privilegio, protección contra prompt injection, revisión de cambios relevantes, trazabilidad selectiva, límites de consumo y posibilidad de trabajar sin IA. No se ha seleccionado modelo, proveedor, MCP ni arquitectura agéntica nueva. El Worker existente no demuestra recuperación de fuentes, agentes ni autenticación multiusuario.

### EC-09 — Procedencia, evolución y colaboración

**Pregunta:** cómo conservar identidad, fundamentos y contribuciones mientras evolucionan investigaciones independientes y colectivas.

**Referentes:** Git/GitHub, Manubot, Open Source Malaria, W3C PROV, Nanopublications, CRediT, ORCID, Zooniverse/Caesar, iNaturalist, SCORE, Zenodo, Crossref/Crossmark, Workflow Run RO-Crate, eLife, PubPeer.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | Identidad, procedencia, evolución y fundamentación son distintas. | P |
| R02 | GitHub inspira evolución colaborativa, no resuelve evaluación científica. | D/P |
| R03 | Manubot documenta colaboración científica basada en GitHub. | D |
| R04 | Open Source Malaria es antecedente directo de investigación abierta. | D |
| R05 | PROV representa procedencia, no validez de inferencias. | D/P |
| R06 | Nanopublications ofrece mecanismos de atribución, sustitución y retirada. | D |
| R07 | CRediT reconoce contribuciones diferenciadas de autoría. | D |
| R08 | Caesar documenta extracción, agregación y actuación sobre contribuciones. | D |
| R09 | Agregación y consenso no equivalen a validación científica. | P |
| R10 | Reproducción, replicación y robustez son comprobaciones diferentes. | D |
| R11 | Evolución puede ser ramificada y no convergente. | D/P |
| R12 | Correcciones pueden generar necesidades de reevaluación. | P |
| R13 | Workflow Run RO-Crate describe ejecuciones de procedimientos. | D |
| R14 | Colaboración de escalas y naturalezas distintas. | P |
| R15 | Autoridad técnica, administrativa y científica diferenciada. | P |
| R16 | Existe patrimonio técnico de trayectorias. | M |
| R17 | Búsquedas de primera coincidencia limitan generalización a antecedentes múltiples. | M/H |
| R18 | Integración de creación, investigación y evolución es hipótesis diferencial. | H |

**Consecuencia:** separar recepción de aportaciones, organización, evaluación, integración y validez; mantener divergencias; reconocer procedencia original y contribución posterior. PROV es referencia de interoperabilidad, no sustituto automáticamente válido del modelo propio. Caesar fue estudiado documentalmente; no ejecutado. La limitación de KnowledgeTrajectory se refiere a las funciones inspeccionadas, no invalida automáticamente sus compromisos anteriores.

### EC-10 — Arquitecturas, componentes reutilizables y sostenibilidad

**Pregunta:** cómo materializar el producto sin construir innecesariamente componentes consolidados y sin quedar condicionado por una arquitectura prematura.

**Referentes:** AFFiNE/BlockSuite, Docmost, XWiki, InvenioRDM, React/Vite/Next.js, editores abiertos, Supabase/PostgreSQL, Cloudflare, Firebase, pgvector, Yjs/Automerge, infraestructuras científicas y estándares.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | Preservar patrimonio no obliga a conservar toda la arquitectura. | P |
| R02 | Construir, componer, extender e integrar son alternativas. | P |
| R03 | AFFiNE, Docmost, XWiki e InvenioRDM merecen evaluación selectiva. | A |
| R04 | Una arquitectura modular sencilla es hipótesis razonable. | H |
| R05 | No existe fundamento suficiente para abandonar React ahora. | A |
| R06 | Editores existentes pueden reducir desarrollo. | D/H |
| R07 | Supabase, Cloudflare y Firebase son alternativas a contrastar. | A |
| R08 | Una base relacional podría cubrir varias modalidades de búsqueda. | D/H |
| R09 | Colaboración asincrónica no exige edición simultánea. | P |
| R10 | Infraestructuras científicas externas pueden complementar mi-app. | D/P |
| R11 | Licencias deben comprobarse antes de reutilizar. | A |
| R12 | Evitar dependencias irreversibles donde afecten al patrimonio. | P |
| R13 | Sostenibilidad incluye costes humanos y operativos. | H |
| R14 | Financiación de IA puede diferenciarse del acceso básico. | P |
| R15 | REA se reserva a mecanismos pertinentes insuficientemente comprendidos. | P |
| R16 | Composición modular es hipótesis prioritaria, no decisión. | H |
| R17 | Extender plataformas abiertas permanece como alternativa. | A |
| R18 | Arquitectura depende de definición integral de producto. | P |

**Consecuencia:** evaluar primero reutilización y extensión, mantener servicios gestionados como alternativas, estudiar permisos, copias de archivos, migración y mantenimiento. No contratar ni instalar servicios a partir de esta preferencia preliminar. Los costes y licencias registrados no son presupuesto ni dictamen jurídico.

### EC-11 — Diseño, minimalismo y experiencia global

**Pregunta:** cómo conseguir que una plataforma intelectualmente potente tenga una experiencia ordinaria comprensible, accesible y agradable.

**Referentes:** Notion, Linear, Obsidian, Heptabase, Google Docs, Medium, Substack, Wikipedia, GitHub, AFFiNE, Nielsen Norman Group, GOV.UK Design System, Radix UI, WCAG 2.2.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | Minimalismo funcional no exige empobrecer capacidades. | P |
| R02 | Platform Vision ya contempla progresividad y continuidad de uso. | M |
| R03 | Integración técnica y experiencial no son equivalentes. | M/H |
| R04 | Navegación estable puede facilitar orientación. | D/P |
| R05 | Organización por funcionalidades puede ser insuficiente. | M/H |
| R06 | Escritorio y entorno efectivo de trabajo son superficies diferenciables. | P |
| R07 | Lectura pública necesita una experiencia propia. | P |
| R08 | Esfuerzo de contribuir debe ser proporcional a la aportación. | P |
| R09 | Contexto debe conservarse en transiciones. | P |
| R10 | Procedencia puede presentarse progresivamente. | P |
| R11 | IA puede aparecer contextualmente. | D/P |
| R12 | Existen patrones y componentes reutilizables. | D |
| R13 | WCAG 2.2 aporta criterios de accesibilidad. | D |
| R14 | Validación funcional no sustituye usabilidad. | D/P |
| R15 | Recorridos completos deben evaluarse. | P |
| R16 | Prototipos de experiencia pueden preceder a decisiones costosas. | P |
| R17 | Reconsiderar interfaz no exige descartar patrimonio. | P |
| R18 | Navegación estable y entornos contextuales (UX-C) es hipótesis prioritaria. | H |

**Consecuencia:** diseñar por intenciones y recorridos, no por nombres internos de realizaciones. Separar entrada pública, escritorio, creación, investigación, colaboración y consulta de procedencia. Proponer WCAG 2.2 AA como objetivo de evaluación, no afirmar conformidad. Los esquemas de interfaz no son diseños definitivos ni prototipos probados.

### EC-12 — Diferenciación estratégica

**Pregunta:** qué justifica un nuevo producto cuando ya existen múltiples soluciones maduras.

**Referentes adicionales:** Octopus, Just One Giant Lab (JOGL), ResearchHub, RSpace; transición de OSF. Open Humans figura como candidato de inventario, sin evaluación específica equivalente a los demás.

| Resultado | Síntesis | Estatuto |
|---|---|---|
| R01 | Capacidades convencionales no justifican por sí solas un producto nuevo. | H |
| R02 | Integración y experiencia pueden aportar diferenciación sin novedad funcional absoluta. | H |
| R03 | Octopus es antecedente de publicación científica ramificada. | D |
| R04 | JOGL aporta referencia de conexión entre capacidades y proyectos. | D |
| R05 | ResearchHub muestra mecanismos de incentivo a participación. | D |
| R06 | RSpace es candidato de reutilización o extensión. | A |
| R07 | Transición de OSF advierte sobre sostenibilidad. | D/H |
| R08 | Continuidad integral es hipótesis diferencial. | H |
| R09 | Relación entre patrimonio personal y colectivo requiere contraste. | H |
| R10 | Colaboración granular tiene antecedentes y valor potencial. | D/H |
| R11 | Patrimonio conceptual de mi-app podría aplicarse a ciencia colaborativa. | H |
| R12 | Interoperabilidad de IA ya tiene competidores próximos. | D/H |
| R13 | Minimalismo debe acreditarse mediante experiencia. | P |
| R14 | Cuatro alternativas estratégicas permanecen abiertas. | A |
| R15 | Singularidad y demanda no demostradas. | A |
| R16 | Superficie de entrada libre se conserva como candidata de diseño. | P |

**Consecuencia:** no fundamentar mi-app en la supuesta inexistencia de una ciencia colaborativa ramificada. Octopus obliga a comparar la finalidad con alternativas de extensión e interoperabilidad. La concepción conjunta necesita contrastarse con recorridos humanos, costes y barreras reales.

## 3. CONS-EC-02 — Inventario consolidado de referentes y recursos

El inventario diferencia productos de referencia (aprender de su experiencia), plataformas susceptibles de extensión, componentes integrables, infraestructuras externas y estándares. Una misma tecnología puede desempeñar más de una función. La inclusión no presupone adopción, compatibilidad de licencia ni disponibilidad futura.

### 3.1. Plataformas y experiencias de referencia

| Familia | Referentes | Valor investigado | Límite o pregunta pendiente |
|---|---|---|---|
| Escritorio personal y organización | Notion, Obsidian, Capacities, Tana, Logseq | Navegación, identidad, vistas, tipos, referencias y organización progresiva | Preservar contextos y trabajos independientes sin configuración excesiva |
| Comprensión visual | Heptabase, AFFiNE | Biblioteca, tarjetas, mapas y múltiples representaciones | Separación entre identidad de contenido y presentación; accesibilidad |
| Edición | Google Docs, Word, LibreOffice | Escritura prolongada, formato, navegación, revisión | Integrar evidencia y trayectoria sin perjudicar la edición |
| Fuentes y anotaciones | Zotero, Hypothesis | Bibliotecas, adjuntos, anotaciones ancladas | Estabilidad de referencias y versiones |
| Descubrimiento bibliográfico | ResearchRabbit, Connected Papers, Litmaps, Scite | Redes, similitud, seguimiento y contexto de citas | Cobertura, precisión, acceso y distinción de relaciones |
| Investigación asistida | Gemini Notebook, Elicit, ChatGPT, Claude | Fuentes seleccionadas, extracción, síntesis y agentes | Comprobación, coste, control de contexto y continuidad |
| Conocimiento estructurado | ORKG, Wikidata, Nanopublications | Afirmaciones, calificadores, comparaciones y procedencia | Granularidad flexible y preservación de divergencias |
| Publicación general | WordPress, Medium, Substack | Gestión editorial, lectura y difusión | Índices públicos, privacidad y publicación versionada |
| Conocimiento público | Wikipedia/MediaWiki | Navegación, referencias, discusión e historial | Su política contra investigación original no corresponde a nuestra finalidad |
| Desarrollo colectivo | Git/GitHub, Manubot | Ramas, propuestas, revisión, versiones y contribuciones | No confundir fusión técnica y validación científica |
| Ciencia abierta | Octopus, Open Source Malaria, Polymath, protocols.io | Apertura progresiva, trayectorias ramificadas, métodos y colaboración | Comparar ámbito privado, aportaciones heterogéneas y continuidad entre proyectos |
| Participación granular | Zooniverse, iNaturalist | Tareas pequeñas, observaciones y evaluación colectiva | Capacidad de recibir aportaciones no estructuradas y preservar minorías |
| Conexión y reconocimiento | JOGL, ResearchHub, Open Humans (candidato) | Necesidades, colaboradores, incentivos y datos aportados | Disponibilidad efectiva, adopción y modelos de gobernanza |
| Contraste científico | SCORE, Cochrane, eLife, PubPeer | Reproducción, replicación, revisiones vivas y evaluación pública | Procedimientos adecuados a cada disciplina; revisión ≠ verdad |
| Repositorios científicos | Zenodo, arXiv, OSF, InvenioRDM | Identificadores, estados publicados y preservación | Condiciones de acceso, costes y alcance del servicio |
| Gestión de investigación | RSpace | Cuaderno de laboratorio, auditoría, datos e interoperabilidad | Adecuación fuera del contexto institucional y experimental |
| Agentes y conocimiento organizativo | Notion AI, Glean, Capacities, Heptabase | Contexto, permisos y operaciones mediante agentes | Control efectivo de lectura, escritura y salidas |
| Usabilidad | Linear, GOV.UK, NN/g | Vistas, claridad, estados, progresividad y pruebas humanas | Contraste con usuarios reales de mi-app |

### 3.2. Plataformas susceptibles de extensión

| Candidato | Posible ámbito de reutilización | Examen necesario antes de elegir |
|---|---|---|
| Octopus | Publicación científica ramificada | Modelo de publicaciones, relaciones, acceso ORCID, API, edición privada, GPLv3 y gobernanza |
| RSpace | Gestión de actividades científicas y datos | Cuadernos, extensibilidad, permisos, exportación, dependencia de arquitectura y licencia |
| AFFiNE / BlockSuite | Escritorio, documentos y espacios visuales | Separar funcionalidades abiertas/comerciales, modelo de datos, colaboración y API de extensión |
| Docmost | Espacios documentales, permisos e historial | AGPL-3.0 y componentes comerciales, independencia de trabajos y adaptación del modelo |
| XWiki | Plataforma de conocimiento estructurado | Extensibilidad, LGPL y coste de adopción de otro ecosistema |
| InvenioRDM | Repositorio público y conservación | Integración con proceso investigador, identificación, administración y operación |

No se ha instalado ni auditado exhaustivamente ninguna de estas bases. Octopus y RSpace se incorporaron en EC-12, de modo que una comparación de arquitectura anterior a ese hallazgo no es suficiente para decidir.

### 3.3. Componentes e infraestructura

| Responsabilidad | Candidatos | Criterio de elección |
|---|---|---|
| Interfaz y publicación web | React, Vite (existentes), Next.js, renderizado estático/servidor | Navegación, indexación, costes y continuidad de código |
| Edición | ProseMirror, Tiptap, BlockNote, Lexical, BlockSuite | Formatos portables, referencias estables, accesibilidad y extensión |
| Comparación | CodeMirror Merge (existente) | Comparación de textos extensos, posición independiente y semántica de cambios |
| Visualización | Cytoscape.js | Navegación significativa, no mera acumulación de nodos |
| Componentes accesibles | Radix UI, patrones GOV.UK, Material Design como referencia | Consistencia y accesibilidad de recorridos completos |
| Identidad | Supabase Auth, Firebase Auth, Keycloak; OIDC/OAuth, WebAuthn | Autorización efectiva, sesiones, recuperación y privacidad |
| Datos estructurados | PostgreSQL, Firestore, D1/SQLite | Relaciones, transacciones, portabilidad, permisos y escala |
| Archivos | Supabase Storage, R2, S3 | Acceso autorizado, integridad, copias, cuotas y costes |
| Persistencia local | IndexedDB, OPFS, SQLite, archivos ordinarios; localStorage para preferencias | Durabilidad, capacidad, recuperación y autonomía |
| Sincronización | Yjs, Automerge; control de versiones centralizado | Necesidad real de concurrencia, conflictos y trabajo sin conexión |
| Búsqueda | PostgreSQL FTS, consultas recursivas, pgvector, motores especializados si se justifican | Pertinencia, volumen, permisos y diversidad de consultas |
| Bibliografía | OpenAlex, Crossref, Zotero | Identificadores, derechos de uso, cobertura, costes y estabilidad |
| Anotaciones | Hypothesis, Web Annotation | Identidad/versionado de fuente y recuperación exacta o incierta |
| Agregación de contribuciones | Caesar | Preservar entradas, agregar según tarea y distinguir decisión científica |
| Investigación mediante IA | PaperQA2, RAG, GraphRAG, servicios de IA | Evidencia, precisión, privacidad y coste |
| Agentes | MCP, Agents SDK, modelos externos y locales (Ollama) | Permisos, trazabilidad, control humano e independencia del proveedor |
| Publicación científica | APIs de Zenodo, DataCite, Crossref, ORKG y Octopus (evaluar) | Identificación, estados, licencias y reutilización |
| Seguridad y operación | RLS/Security Rules, controles de servidor, Turnstile, rate limiting, copias | Separar autenticación, autorización y protección antiabuso; probar restauración |

### 3.4. Estándares y referencias metodológicas

| Referencia | Qué aporta | Qué no demuestra por sí sola |
|---|---|---|
| W3C PROV / PROV-O | Entidades, actividades, agentes y derivaciones | Validez de una inferencia |
| W3C Web Annotation | Anotaciones y selectores de fragmentos | Recuperación exacta después de modificar la fuente |
| RDF, JSON-LD, SKOS, OWL, SHACL | Intercambio, vocabularios, formalización y validación estructural | Necesidad de imponer una ontología general al usuario |
| RO-Crate, Workflow Run RO-Crate | Descripción de recursos y ejecuciones reproducibles | Preservación garantizada ni ejecución correcta |
| FAIR, BagIt | Localización, acceso, interoperabilidad, reutilización e integridad de paquetes | Obligatoriedad de hacer públicos todos los datos |
| DOI, DataCite, Crossref/Crossmark | Identificación, versiones, relaciones y correcciones | Calidad científica de lo identificado |
| CRediT, ORCID | Tipos de contribución e identificación persistente | Autoría automática ni verificación universal de identidad |
| PRISMA, prerregistro, protocolos, GRADE | Transparencia y evaluación en ámbitos adecuados | Método obligatorio para todas las disciplinas |
| OIDC/OAuth, WebAuthn | Identidad federada, autorización y autenticación | Política de permisos propia ni seguridad automática |
| MCP | Interoperabilidad de herramientas y recursos de IA | Autoridad científica ni autorización efectiva sin aplicación de controles |
| WCAG 2.2 | Criterios de accesibilidad | Conformidad por usar una biblioteca de componentes |
| Creative Commons y licencias de software | Condiciones de reutilización de contenidos y código | Derechos sobre materiales de terceros ni compatibilidad de toda integración |

## 4. CONS-EC-03 — Matriz integral de necesidades y soluciones

Los siguientes grupos sintetizan necesidades identificadas. Son insumos para la etapa 4, no un backlog ni un catálogo normativo. La columna de evidencia indica la situación en el alcance observado, no una auditoría exhaustiva de cada componente de mi-app.

| ID candidato | Necesidad humana | Referentes / mecanismo | Situación conocida de mi-app | Incertidumbre o dependencia |
|---|---|---|---|---|
| N-01 | Entrar y reconocer qué puede hacerse | Notion, Medium, UX-CAND-01 | Entrada ordinaria saturada según observación humana | Descubrimiento, accesibilidad, intención de visita |
| N-02 | Consultar y descubrir conocimiento público | Medium, Wikipedia, arXiv, GitHub | No acreditado como entorno público independiente | Contenidos, búsqueda, indexación |
| N-03 | Acceder a espacio personal seguro | Notion, Supabase Auth, Keycloak | No acreditada separación por cuenta | Identidad, sesiones, permisos, recuperación |
| N-04 | Presentar identidad autoral y atribuir aportes | ORCID, CRediT, GitHub | Identidad autoral delimitada | Separar perfil, cuenta y derechos |
| N-05 | Crear trabajos independientes | Obsidian, Docs, Notion | Recorrido A/B insuficientemente claro; independencia no acreditada | Modelo de trabajo y navegación |
| N-06 | Editar obras de manera ordinaria | Docs, Word, Tiptap, BlockNote | Aportaciones textuales y realizaciones delimitadas | Editor, formatos, accesibilidad |
| N-07 | Incorporar materiales diversos | Zotero, RSpace | Incorporación delimitada | Archivos, tamaños, permisos, metadatos |
| N-08 | Conservar y recuperar patrimonio | Obsidian, PostgreSQL, Storage, R2 | Persistencia local comprobada en alcance limitado | Copias, recuperación, aislamiento, migración |
| N-09 | Trabajar desde varios dispositivos | Supabase, Firebase, local-first | No acreditado | Sincronización y consistencia |
| N-10 | Organizar sin duplicación innecesaria | Zotero, Obsidian, Capacities | Relaciones parciales; biblioteca general no acreditada | Identidad, referencias, eliminación y permisos |
| N-11 | Localizar trabajos y materiales | Notion, Bases, búsqueda textual | Recuperación delimitada | Índices, permisos, consultas, escala |
| N-12 | Retomar contexto y posición | Obsidian Workspaces, Heptabase | Evidencia parcial de reanudación; fricción en comparación | Estado de actividad y paneles |
| N-13 | Descubrir fuentes pertinentes | OpenAlex, Crossref, ResearchRabbit | No acreditado como servicio general | Cobertura, metadatos y derechos de acceso |
| N-14 | Leer, anotar y conservar evidencia concreta | Zotero, Hypothesis, Web Annotation | Patrimonio de relaciones; anclaje general no acreditado | Identidad de fragmento y versión |
| N-15 | Comparar materiales y resultados | CodeMirror Merge, ORKG | Realizaciones y pruebas específicas | Utilidad de comparación extensa, comparabilidad científica |
| N-16 | Formular y contrastar hipótesis y razones | Elicit, ORKG, Scite, PROV | Entidades, relaciones y razones delimitadas | Evidencia múltiple, divergencias y validez |
| N-17 | Recibir asistencia contextual de IA | Gemini Notebook, Heptabase, ChatGPT | Worker y apoyo separado presentes | Fuentes, control, costes, seguridad |
| N-18 | Utilizar diferentes agentes sin perder continuidad | MCP, Capacities, PaperQA2 | No acreditado | Interoperabilidad, permisos y contexto portable |
| N-19 | Compartir o publicar una versión identificable | WordPress, Zenodo, Octopus | Opciones de conservación/publicación delimitadas | Separar borrador, versión, visibilidad y licencia |
| N-20 | Seguir autores, temas o investigaciones | Substack, Litmaps | No acreditado | Preferencias, notificaciones, coste |
| N-21 | Aportar datos, documentos u observaciones | Zooniverse, iNaturalist, JOGL | No acreditado como modalidad multiusuario general | Recepción simple, consentimiento, revisión |
| N-22 | Solicitar colaboración específica | GitHub issues, JOGL, Zooniverse | No acreditado | Descubrimiento, coordinación, incentivos |
| N-23 | Comprobar o replicar resultados | SCORE, RSpace, Workflow Run RO-Crate | Patrimonio conceptual de comprobación | Métodos, datos, permisos y evaluación |
| N-24 | Revisar e incorporar contribuciones | GitHub, Manubot, eLife, PubPeer | Estados de aportación delimitados | Gobernanza, revisión, disenso, moderación |
| N-25 | Desarrollar investigación derivada independiente | GitHub, Octopus, Nanopublications | Continuidad/relevo delimitados | Versiones, atribución, licencias y ramas |
| N-26 | Reconstruir evolución y fundamentos | PROV, GitHub, RSpace, KnowledgeTrajectory | Funciones específicas; generalización múltiple pendiente | Cardinalidades, alcance de trazas, versiones |
| N-27 | Revisar resultados ante nueva evidencia | Cochrane, Crossmark, Crossref | No acreditado como seguimiento general | Dependencias y advertencias, no invalidación automática |
| N-28 | Reconocer aportaciones y gestionar autoridad | CRediT, ORCID, GitHub, iNaturalist | Participantes humanos/IA y estados delimitados | Diferenciar atribución, decisión y permiso |
| N-29 | Exportar y recuperar datos fuera del servicio | Obsidian, RO-Crate, Zenodo | Copia manual local ensayada; exportación integral no acreditada | Formatos, archivos, relaciones y restauración |
| N-30 | Comprender estados y recuperarse de errores | GOV.UK, WCAG, Linear | Baseline técnica; UX global insuficiente según observación | Guardado real, sincronización, foco, mensajes |

### 4.1. Agrupaciones candidatas, dependencias y complementariedad

Las necesidades ordinarias no deben descartarse por carecer de valor diferencial independiente. Pueden constituir condiciones necesarias de otras actividades. Por ejemplo, una contribución abierta requiere una investigación identificable, acceso adecuado, recepción, conservación y un procedimiento de evaluación; ninguno de estos mecanismos tiene que ser novedoso por separado.

Las agrupaciones siguientes son asociaciones exploratorias. La inclusión de una necesidad no acredita que sea una dependencia necesaria, prioritaria u obligatoria para el conjunto. Por ejemplo, la sincronización entre dispositivos (N-09), la replicación de resultados (N-23) y la interoperabilidad con agentes (N-18) sólo serán pertinentes en las situaciones que las justifiquen. La etapa 4 deberá distinguir condiciones constitutivas, dependencias condicionadas y capacidades complementarias.

| Conjunto | Necesidades potencialmente relacionadas | Criterio de suficiencia por estudiar |
|---|---|---|
| Crear y retomar individualmente | N-03, N-05…N-12 | Dos trabajos independientes, escritura sostenida, recuperación sin reconstrucción externa |
| Investigar con fuentes | N-07, N-10…N-16, opcionalmente N-17 | Localizar, conservar, contrastar y elaborar un resultado examinable |
| Publicar y consultar | N-02, N-04, N-08, N-19 | Estado público identificado, localizable y distinguible del borrador privado |
| Contribuir ocasionalmente | N-02, N-19, N-21…N-24, N-28 | Aportación pequeña sin crear un proyecto; estado y atribución reconocibles |
| Continuar colectivamente | N-24…N-28 | Independencia, antecedentes, disenso y decisiones reconstruibles |
| Autonomía y confianza | N-03, N-08, N-18, N-29, N-30 | Permisos efectivos, recuperación y portabilidad en el alcance elegido |

No se propone que los seis conjuntos deban construirse simultáneamente. La etapa 4 deberá identificar qué situaciones poseen fundamento y qué condiciones son constitutivas de cada una. La delimitación de un primer producto vendrá después.

## 5. CONS-EC-04 — Diferenciación y alternativas

### 5.1. Hipótesis diferenciales

| ID | Hipótesis | Contraargumento fuerte | Evidencia que podría discriminar |
|---|---|---|---|
| HD-01 | Continuidad integral del trabajo intelectual | Una combinación interoperable puede proporcionar continuidad suficiente | Recorrido completo con herramientas existentes: pérdidas, tiempo, reconstrucciones y esfuerzo |
| HD-02 | Evolución reconstruible del conocimiento | GitHub, PROV, Octopus y RSpace ya representan antecedentes y cambios | Reconstrucción de resultado ramificado con evidencias y razones, sin asumir novedad |
| HD-03 | Continuidad entre patrimonio personal y colectivo | Importar/exportar/compartir puede resultar suficiente | Pasar de borrador privado a contribución pública y reutilizarlo conservando identidad y permisos |
| HD-04 | Colaboración de granularidad variable | Zooniverse, iNaturalist, JOGL, Octopus y ResearchHub resuelven muchas modalidades | Comparar una aportación documental, réplica y proyecto derivado dentro de un mismo contexto |
| HD-05 | IA interoperable subordinada a actividad humana | Capacities y Heptabase ya integran agentes externos | Cambiar de agente conservando contexto autorizado, fuentes y decisión humana |
| HD-06 | Complejidad intelectual compatible con minimalismo | Diseño contextual es práctica conocida; una entrada novedosa puede añadir fricción | Pruebas humanas no dirigidas de tareas básicas y avanzadas, incluida accesibilidad |

La hipótesis conjunta no consiste en sumar las seis como ventajas demostradas. Consiste en examinar si la relación entre ellas resuelve una necesidad relevante mejor que las alternativas. Su resultado puede ser una integración de productos, una extensión o una solución propia; también puede mostrar que no hay diferencia suficiente para una parte de la concepción.

### 5.2. Contraargumentos conservados

| ID | Riesgo o contraargumento | Qué permitiría resolverlo |
|---|---|---|
| CA-01 | Preferencia por herramientas especializadas | Entrevistas y uso real comparativo |
| CA-02 | Interoperabilidad suficiente entre productos | Contraste de recorridos y exportación/importación |
| CA-03 | Complejidad avanzada difícil de ocultar | Prototipos globales y pruebas de descubrimiento |
| CA-04 | Investigadores no quieren apertura prematura | Necesidades por disciplina, incentivos, privacidad y publicación selectiva |
| CA-05 | Escasa participación de colaboradores | Casos reales de contribución y reconocimiento |
| CA-06 | Sobrecarga de evaluación externa | Medir volumen, coste de revisión y reglas de aceptación |
| CA-07 | Extender plataforma existente es más razonable | Estudio de Octopus, RSpace y bases documentales con brechas concretas |
| CA-08 | Coste de conservación/mantenimiento insostenible | Escenarios de demanda, presupuesto completo y plan de continuidad |
| CA-09 | Alcance demasiado amplio | Definir situaciones prioritarias y primer producto coherente |
| CA-10 | Evolución externa elimina diferencias | Verificación puntual antes de decisiones de largo alcance |

### 5.3. Alternativas de realización

Se usa la nomenclatura ALT-01…ALT-04 de EC-12 como referencia consolidada. Las EST-A…D de EC-10 son una comparación anterior: construcción propia extensa (EST-A), composición (EST-B), extensión (EST-C), integración de productos (EST-D). ALT-04 agrupa las estrategias de plataforma propia con distintos grados de desarrollo y reutilización: tanto EST-A como EST-B permanecen como posibilidades que requieren justificación. La composición modular de EC-12 es una preferencia provisional, no una condición que excluya la construcción propia extensa ni una arquitectura aprobada.

| Alternativa | Valor potencial | Riesgo | Condición para preferirla |
|---|---|---|---|
| ALT-01 — Utilizar productos existentes | Menor esfuerzo de construcción y mantenimiento | Contextos dispersos y límites de control | El recorrido satisface necesidades sin pérdidas relevantes |
| ALT-02 — Integrar productos existentes | Reutilizar soluciones maduras y reducir transiciones manuales | Dependencia de APIs, formatos y permisos | Las diferencias son principalmente de conexión |
| ALT-03 — Extender plataforma abierta | Base funcional disponible y desarrollo enfocado | Acoplamiento al modelo, actualizaciones, licencia y adaptación | La plataforma cubre una parte sustancial del producto y puede extenderse sosteniblemente |
| ALT-04 — Plataforma propia (composición modular como hipótesis) | Control sobre experiencia y semántica del conocimiento | Mayor coste, integración y responsabilidad operativa | Diferencias relevantes no pueden satisfacerse razonablemente mediante ALT-01…03 |

La preferencia provisional de EC-10 por composición modular no es una elección final; la aparición de Octopus y RSpace fortalece la necesidad de contraste de ALT-03. Mantener React/Vite como referencia actual no obliga a conservar GitHub Pages, ni a migrar a Next.js sin fundamento.

## 6. CONS-EC-05 — Investigaciones técnicas pendientes y REA

### 6.1. Inventario de investigaciones técnicas

Se mantienen los identificadores IT-01…IT-12 de EC-10 y se añaden tres candidatos derivados de EC-12 para evitar perder los nuevos referentes. La prioridad expresa relevancia potencial para una decisión, no orden de ejecución aprobado.

| ID | Objeto | Pregunta discriminante | Método inicial | Prioridad condicional |
|---|---|---|---|---|
| IT-13 (nuevo) | Octopus | ¿Qué partes de la ciencia abierta ramificada ya satisface y qué falta para nuestro recorrido? | Guía, repositorio, licencia y demostración controlada | Muy alta para diferenciación/ALT-03 |
| IT-14 (nuevo) | RSpace | ¿Puede integrar el proceso investigador y conservar trayectorias sin adaptación desproporcionada? | Documentación, repositorio y exportación de prueba | Muy alta para ALT-03 |
| IT-15 (nuevo) | JOGL | ¿Cómo descubre y coordina colaboraciones de pequeña escala? | Documentación y comportamiento verificable; distinguir diseño y servicio vigente | Alta si se selecciona conexión de necesidades |
| IT-01 | AFFiNE/BlockSuite; contraste Docmost/XWiki | ¿Conviene extender una base documental o integrar componentes? | Arquitectura, licencias, puntos de extensión, uso ordinario | Alta si se evalúa ALT-03/04 |
| IT-02 | Tiptap/BlockNote; ProseMirror/Lexical | ¿Qué editor permite preservar referencias, formatos y edición prolongada? | Experimento comparativo aislado y código abierto | Alta antes de seleccionar editor |
| IT-03 | Supabase/PostgreSQL/RLS; Cloudflare/Firebase | ¿Se consigue aislamiento efectivo y recuperación sostenible? | Diseño de permisos, prueba negativa multiusuario y restauración | Alta antes de persistencia remota |
| IT-04 | Zotero | ¿Cómo relaciona registros, archivos, colecciones y anotaciones? | Código y datos ficticios | Condicionada a modelo documental |
| IT-05 | Hypothesis | ¿Cómo se recupera un anclaje ante edición o texto repetido? | Inspección inicial hecha; prueba de exactitud, ambigüedad y fallo | Alta si se preserva evidencia granular |
| IT-06 | Yjs/Automerge | ¿Qué modalidad necesita concurrencia o sincronización offline? | Pruebas de conflictos sólo si existe necesidad | Condicionada, no previa a colaboración asincrónica |
| IT-07 | Caesar | ¿Cómo extraer/agregar contribuciones conservando entradas y disenso? | Repositorio, documentación, prueba con tareas sintéticas | Alta si se seleccionan contribuciones masivas |
| IT-08 | Manubot | ¿Cómo conservar propuesta, revisión, discusión, integración y atribución? | Código, caso documentado y recorrido de contribución | Alta para gobernanza colaborativa |
| IT-09 | PROV-O/RO-Crate/Workflow Run | ¿Qué relaciones se exportan sin pérdida y cuáles requieren extensiones? | Correspondencias formales, exportación/importación y validación | Alta si se selecciona interoperabilidad |
| IT-10 | PaperQA2/MCP | ¿Cómo recuperar fuentes y limitar operaciones autorizadas de agentes? | Código, documentación, corpus ficticio, pruebas negativas | Condicionada a asistencia avanzada |
| IT-11 | KnowledgeTrajectory | ¿Qué patrimonio admite antecedentes múltiples y trazas aisladas por resultado? | Inventario, revisión de contratos y pruebas existentes; pruebas nuevas sólo cuando se autoricen | Alta en etapa 7/8 |
| IT-12 | Publicación web e indexación | ¿Cómo ofrecer estados públicos accesibles sin exponer borradores? | Prototipo de rutas, HTML, metadatos y permisos | Alta antes de publicar contenido de usuarios |

Las IT-13…15 son identificadores asignados durante esta consolidación, no existentes en la numeración inicial de EC-10. No se crea una actuación formal de ejecución.

### 6.2. REA — Reverse Engineer Anything

| ID histórico | Referente | Mecanismo | Condición para recurrir a REA |
|---|---|---|---|
| REA-C01 | Heptabase | Restauración de contexto, paneles y posición | No explicado por documentación y observación autorizada |
| REA-C02 | Capacities | Identidad de objetos y reorganización | Persistencia de referencias relevante e insuficientemente comprendida |
| REA-C03 | Obsidian | Índices de enlaces y estado de archivos | API y archivos accesibles insuficientes para resolver la cuestión |
| REA-C04 | Gemini Notebook | Navegación desde respuesta a fragmento citado | No se entiende mecanismo cliente relevante mediante observación |
| REA-C05 | Notion | Portapapeles, editor y bloques | Comportamiento relevante para preservar referencias no explicado por editores abiertos |
| REA-C06 | Heptabase | Selección de contexto para IA | Documentación no permite determinar un mecanismo accesible necesario |

Procedimiento común: necesidad concreta → solución observada → documentación/código abierto → determinar insuficiencia y pregunta precisa → comprobar autorización, licencia, acceso y riesgo → investigación aislada mediante REA u otro recurso → contraste experimental → decisión de aprender, reutilizar, adaptar, mejorar o descartar.

Se mantienen las condiciones del antecedente NP-001 del Design Journal: problema pertinente, insuficiencia de medios directos, fundamento positivo del análisis interno, acceso legítimo delimitado, y ensayo sin afectar al proyecto estable. No se deduce el funcionamiento de servidores privados a partir del cliente. No se copian componentes sin comprobar licencia y condiciones. Antes de instalar REA deberán inspeccionarse sus dependencias, permisos, cambios de configuración, compatibilidad y reversibilidad. El repositorio candidato es https://github.com/morluto/rea; su instalación y ejecución no se han realizado.

Las inspecciones de Hypothesis y la documentación de Caesar constituyen ejemplos de investigación directa que no precisaron REA. No deben presentarse como ingeniería inversa ejecutada ni como pruebas experimentales completas.

## 7. CONS-EC-06 — Propuestas candidatas de producto y experiencia

### 7.1. Ciencia colaborativa abierta — propuesta original del usuario

Una persona o colectivo comienza una investigación y hace accesibles sus propuestas y avances conforme se desarrollan. Otras personas pueden aprovechar el conocimiento autorizado para desarrollar trabajos independientes o proponer aportaciones al proyecto común. Se va constituyendo un núcleo compartido que admite evolución, contrastes y desarrollos derivados. La inspiración procede de la colaboración en software abierto, pero no se presupone que las reglas de Git sean suficientes para la ciencia.

La apertura es una modalidad voluntaria, no la configuración obligatoria de todas las investigaciones. Una persona puede trabajar privadamente, compartir con colaboradores autorizados, publicar un estado, abrir contribuciones o permitir reutilización según licencias. Los permisos de acceso, intervención, publicación y reutilización deben distinguirse.

### 7.2. Ampliación expresa del usuario — participación de granularidad variable

No toda persona que colabora necesita constituir un equipo, elaborar un proyecto o realizar investigación paralela. Puede aportar un documento, datos, observaciones, una traducción, una objeción, una comprobación o repetir un procedimiento ya realizado. La lista es abierta. Puede intervenir una vez o mantener una colaboración prolongada. Una réplica que no confirma el resultado es potencialmente tan relevante como una que lo confirma, según sus condiciones y evidencia.

| Modalidad | Ejemplos | Tratamiento candidato |
|---|---|---|
| Aportar | Documentación, observaciones, datos, bibliografía, instrumentos | Recepción sencilla, procedencia, licencia y evaluación |
| Comprobar | Reproducción con datos/métodos originales, replicación con nuevos datos, robustez, generalización | Conservar condiciones, resultados positivos y negativos y relación con antecedente |
| Revisar | Objeciones, correcciones, interpretaciones alternativas | Mantener argumentos y respuestas sin sobreescribir el original |
| Continuar | Nuevas líneas, proyectos autónomos, ampliaciones | Identidad independiente, antecedente versionado y opción de proponer incorporación |
| Coordinar | Solicitar materiales, organizar tareas, evaluar y distribuir responsabilidades | Gobernanza explícita, reconocimiento y moderación |

La contribución original no se convierte automáticamente en conocimiento validado ni se atribuye a quien la incorpora. Recepción, organización, evaluación, incorporación y validación son responsabilidades diferentes. Los desacuerdos pertinentes deben poder conservarse. Puede haber automatización de tareas delimitadas cuando sus reglas hayan sido validadas; una mayoría no demuestra la verdad de una conclusión.

La posibilidad de solicitar colaboraciones específicas (documento, traducción, comprobación, observación) es una extensión candidata de esta propuesta. La conexión con personas interesadas puede facilitarse mediante búsqueda y, si se autoriza, asistencia de IA. No se examinará indiscriminadamente el patrimonio privado de los usuarios.

### 7.3. Gobernanza, reconocimiento y continuidad

| Dimensión | Distinción que se propone conservar |
|---|---|
| Identidad | Cuenta, identidad autoral, identificador científico, contribución y responsabilidad operativa |
| Permisos | Consulta, propuesta, revisión, integración, publicación y administración |
| Autoridad | Administración técnica, coordinación del proyecto, evaluación intelectual y derechos de los participantes |
| Estado de aportación | Recibida, en evaluación, requiere información, pendiente de comprobación, incorporada total/parcialmente, alternativa, no incorporada, retirada |
| Estado del conocimiento | Publicado, revisado, cuestionado, reproducido, replicado, rectificado o retirado, según procedimiento identificable; no clasificación universal |
| Atribución | Autor original, quien encuentra o incorpora, quien verifica, quien transforma y quien publica |
| Evolución | Continuación, revisión, derivación, contraste, divergencia, integración y recuperación |

Un resultado puede estar publicado sin revisión; incorporarse para documentar una objeción sin considerarla demostrada; ser revisado sin convertirse en verdad definitiva. Las correcciones pueden generar advertencias a investigaciones relacionadas, no invalidaciones automáticas. Deben respetarse las licencias, privacidad, derechos de terceros y posibles obligaciones de retirada.

### 7.4. Concepción global de experiencia

```text
ENTRADA (superficie 0 candidata, opcional según contraste)
       ├── Explorar conocimiento sin registro innecesario
       │      ├── Publicaciones, autores, temas e investigaciones
       │      └── Seguir / aportar / comprobar / reutilizar
       └── Acceder a espacio personal
              ├── Escritorio: trabajos, biblioteca, actividad reciente
              └── Entorno de trabajo seleccionado
                     ├── Escribir / leer / organizar
                     ├── Investigar / comparar / contrastar
                     ├── IA contextual opcional
                     └── Compartir / publicar / continuar

Transversal: identidad, permisos, conservación, procedencia,
             relaciones, recuperación y portabilidad.
```

UX-A (todo en una superficie), UX-B (entornos completamente separados), UX-C (navegación estable y entornos contextuales), UX-D (personalización extensa) siguen como alternativas de experiencia. UX-C con personalización limitada es preferencia provisional, no decisión. Las seis superficies de EC-11 son hipótesis: entrada pública, escritorio, creación, investigación, investigación abierta y consulta de evolución; pueden reorganizarse si el contraste humano lo justifica.

### 7.5. UX-CAND-01 — Superficie de entrada libre, aportación del usuario

Idea original: página vacía con sólo el nombre de la plataforma. Al pulsar cualquier punto aparece allí una caja, desplegable u otro elemento; tras introducir los datos requeridos se accede a la primera superficie. La persona puede fijar el lugar de aparición para entradas futuras o dejarlo libre. No se decide aún qué datos, estilo de caja o comportamiento exacto emplear. La conservación de una ubicación fija es opcional, no una exigencia de identificación previa.

| Variante candidata | Diseño | Riesgo / valor |
|---|---|---|
| ENT-01 | Sólo nombre; pulsación libre | Máximo minimalismo; descubrimiento incierto |
| ENT-02 | Nombre e indicación discreta de interacción | Facilita primera entrada sin abandonar concepto |
| ENT-03 | Nombre también es control accesible; pulsación libre | Vía convencional alternativa; libertad espacial puede pasar inadvertida |
| ENT-04 | Entrada convencional inicialmente, libre por elección posterior | Personalización compatible con familiarización; añade diferencias de experiencia |

Criterios: descubrimiento sin instrucciones del evaluador, claridad de opciones, esfuerzo, accesibilidad mediante teclado/táctil/lector de pantalla, recuperación de posición, cambio de tamaño de ventana y ausencia de desbordamientos. El nombre debe poder actuar como referencia accesible si se elige esa variante. La caja podría recordar una posición proporcional a la ventana; debe poder cambiarse o liberarse. Accesos directos a publicaciones e investigaciones no deberían quedar bloqueados por una pantalla inicial obligatoria. Un visitante que sólo quiere leer no debería tener que suministrar datos personales innecesarios. La posible generalización a herramientas contextuales del escritorio queda como hipótesis secundaria.

### 7.6. Principios candidatos de experiencia (UX-P01…P15)

| ID | Principio |
|---|---|
| UX-P01 | La actividad humana organiza la experiencia. |
| UX-P02 | Contenido intelectual en posición principal. |
| UX-P03 | Navegación general reconocible. |
| UX-P04 | Diferenciar espacio público y personal. |
| UX-P05 | Identidad de trabajos independientes. |
| UX-P06 | Capacidades avanzadas progresivas. |
| UX-P07 | Transiciones sin pérdida de contexto. |
| UX-P08 | IA al servicio de la actividad. |
| UX-P09 | Contribución proporcional a la aportación. |
| UX-P10 | Estados, permisos y consecuencias comprensibles. |
| UX-P11 | Procedencia accesible con profundidad variable. |
| UX-P12 | Recuperación ante errores. |
| UX-P13 | Accesibilidad desde el diseño. |
| UX-P14 | Apariencia favorable a lectura y pensamiento. |
| UX-P15 | Validación mediante actividades humanas reales. |

### 7.7. Recorridos candidatos para contraste posterior

| ID histórico | Situación |
|---|---|
| UX-01 | Visitante encuentra y lee publicación sin registro. |
| UX-02 | Persona crea cuenta y reconoce escritorio propio. |
| UX-03 | Escritor desarrolla obra entre sesiones. |
| UX-04 | Persona crea dos investigaciones independientes y recupera ambas. |
| UX-05 | Investigador incorpora, compara y utiliza fuentes. |
| UX-06 | Persona recibe asistencia de IA sin perder control. |
| UX-07 | Autor publica una versión y continúa privadamente. |
| UX-08 | Visitante aporta un documento a investigación abierta. |
| UX-09 | Persona reproduce un resultado y comunica comprobación. |
| UX-10 | Equipo recibe, evalúa e incorpora aportaciones. |
| UX-11 | Investigador desarrolla trabajo independiente derivado. |
| UX-12 | Persona reconstruye antecedentes de una conclusión. |
| UX-13 | Usuario exporta y recupera patrimonio. |
| UX-14 | Persona usa capacidades esenciales mediante teclado y ayudas técnicas. |

No son pruebas aprobadas ni una secuencia de construcción. Primero se determinan situaciones, después se prototipan recorridos y se contrastan sin revelar anticipadamente los controles. La validación técnica de mecanismos sigue siendo necesaria, pero no sustituye utilidad, orientación, accesibilidad ni continuidad real. No se fijan puntuaciones universales.

## 8. CONS-EC-07 — Evidencias, fuentes y limitaciones

### 8.1. Patrimonio propio y evidencia material disponible

| Fuente / evidencia | Resultado conservado | Límite |
|---|---|---|
| [PROJECT_CHARTER](https://github.com/enrisan1/mi-app/blob/c4580d4/docs/08-project/00-PROJECT_CHARTER.md) y [PLATFORM_VISION](https://github.com/enrisan1/mi-app/blob/c4580d4/docs/08-project/01-PLATFORM_VISION.md#L133-L166) | Finalidad integral, progresividad y continuidad de uso | No son prueba de realización material de toda la visión |
| [App.tsx, L183–365](https://github.com/enrisan1/mi-app/blob/c4580d4/src/App.tsx#L183-L365) | Almacenamiento ordinario local de materiales mediante `ordinary.materials`, identificadores y estado de trabajo | No demuestra multiusuario, almacenamiento remoto ni portabilidad integral |
| [App.tsx, L1540–1650](https://github.com/enrisan1/mi-app/blob/c4580d4/src/App.tsx#L1540-L1650) | Proximidad estructural de comparación, trabajo actual, conservación y continuación recibida | No es por sí sola una evaluación visual completa |
| [ResumeExperience.tsx](https://github.com/enrisan1/mi-app/blob/c4580d4/src/realizations/ru2m1/ResumeExperience.tsx) y observación humana de creación A/B | El recorrido examinado no permitió reconocer con claridad creación independiente de B respecto a A | Pruebas posteriores suspendidas; no se ha demostrado pérdida o mezcla de datos |
| Observación humana de la app publicada | Saturación, dificultad de orientación y discrepancia respecto del minimalismo; necesidad de escritorio y entrada pública | Evidencia cualitativa de un participante, no generalizable automáticamente |
| Contraste previo CE-MIAPP-01 | Aclaraciones permitieron reconocer continuidad y recuperar el punto de trabajo | No acredita descubrimiento espontáneo ni localización general |
| Contraste comparativo de textos extensos | Desplazamientos frecuentes y dificultad de mantener posición; necesidad de investigar continuidad comparativa | No es prueba de todos los recorridos posteriores |
| [KnowledgeTrajectory.ts, L1–156](https://github.com/enrisan1/mi-app/blob/c4580d4/src/realizations/knowledge-trajectory/KnowledgeTrajectory.ts#L1-L156) | Entidades y relaciones tipadas, participantes y estados de aportación | Alcance delimitado; no sistema general de conocimiento colectivo |
| [KnowledgeTrajectory.ts, L329–472](https://github.com/enrisan1/mi-app/blob/c4580d4/src/realizations/knowledge-trajectory/KnowledgeTrajectory.ts#L329-L472) | `traceResult()` usa primera coincidencia; `traceResultReason()` contiene búsquedas de primer objetivo/evidencia no delimitadas plenamente al resultado | Inferencia de riesgo en trayectorias múltiples; sin nueva prueba integral; no invalida por sí sola cierres previos |
| [PRODUCT, C-PV-80-04](https://github.com/enrisan1/mi-app/blob/c4580d4/docs/08-project/02-PRODUCT.md#L986-L1017) | Apoyo auxiliar separado de la obra, con alcance agéntico excluido | No compromiso de asistencia general avanzada |
| [Worker IA](https://github.com/enrisan1/mi-app/blob/c4580d4/workers/ai-support/src/index.ts) | Petición y contenido textual, límites, Turnstile, rate limiter configurable, consulta a proveedor | No prueba autenticación de cuentas ni permisos multiusuario; sin prueba en vivo nueva |
| [package.json](https://github.com/enrisan1/mi-app/blob/c4580d4/package.json), [deploy.yml](https://github.com/enrisan1/mi-app/blob/c4580d4/.github/workflows/deploy.yml), [wrangler.jsonc](https://github.com/enrisan1/mi-app/blob/c4580d4/workers/ai-support/wrangler.jsonc) | React, TS, Vite, CodeMirror Merge, Vitest, GitHub Pages y Cloudflare Worker | Configuración en revisión histórica; no auditoría completa de producción |
| [R-ENG-SYS-01](https://github.com/enrisan1/mi-app/blob/c4580d4/docs/08-project/141-R-ENG-SYS-01_PRUEBA_SISTEMATICA_BASELINE_EJECUTABLE.md) | Baseline documentada: 83 archivos, 599 tests, typecheck, lint y build; aviso de tamaño de bundle | Resultados históricos no repetidos durante la etapa 3 |
| Copia local anterior a publicación | Conservación y restauración de un conjunto reducido de datos locales ensayadas | No prueba respaldo general automatizado ni protección de archivos remotos |
| [Design Journal, NP-001](https://github.com/enrisan1/mi-app/blob/c4580d4/docs/08-project/06-DESIGN_JOURNAL.md#L1231-L1308) | Antecedente de investigación mediante REA | Propuesta no normativa; no instalación ni ejecución |

### 8.2. Fuentes externas de referencia por bloque

Registro de enlaces principales utilizados o identificados en los estudios previos. Se preservan URLs para permitir comprobación futura; no son certificación de que las páginas sigan disponibles, de que las funciones descritas estén habilitadas en todos los planes ni de que las versiones actuales sean idénticas. Los enlaces de EC-01/02 recuperados por título o familia se consignan como rutas de consulta, no como citas textuales verificadas nuevamente. El registro es una bibliografía operativa representativa, no un volcado exhaustivo de todas las búsquedas de la conversación.

**EC-01 y EC-02 — espacios, identidad y privacidad**

- Notion: [navegación lateral](https://www.notion.com/help/navigate-with-the-sidebar), [compartir y permisos](https://www.notion.com/help/sharing-and-permissions).
- Obsidian: [almacenamiento](https://obsidian.md/help/data-storage), [Workspaces](https://obsidian.md/help/plugins/workspaces), [Sync](https://obsidian.md/help/sync).
- Capacities: [Spaces](https://docs.capacities.io/reference/spaces), [interfaz](https://docs.capacities.io/reference/user-interface).
- Heptabase: [organización de conocimiento y proyectos](https://wiki.heptabase.com/organize-knowledge-and-projects), [lógica de interfaz](https://wiki.heptabase.com/user-interface-logic).
- Gemini Notebook: [crear un cuaderno](https://support.google.com/gemininotebook/answer/16206563), [anuncio de cambio de denominación](https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/).
- Identidad: [OpenID Connect](https://openid.net/developers/how-connect-works/), [WebAuthn](https://www.w3.org/TR/webauthn/), [Keycloak](https://www.keycloak.org/documentation), [Supabase Auth](https://supabase.com/docs/guides/auth), [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), [Firebase Security Rules](https://firebase.google.com/docs/rules), [OWASP](https://owasp.org/).
- Marco de privacidad: [RGPD, Reglamento UE 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj). Requiere análisis de aplicabilidad y obligaciones concretas antes de operación real.

**EC-03 — edición y ciencia abierta**

- [ProseMirror Guide](https://prosemirror.net/docs/guide/), [Tiptap](https://tiptap.dev/docs/editor/getting-started/overview), [BlockNote](https://github.com/TypeCellOS/BlockNote), [Lexical Editor State](https://lexicaljs.org/docs/concepts/editor-state).
- [Notion: edición](https://www.notion.com/help/writing-and-editing-basics), [exportación](https://www.notion.com/help/export-your-content), [Zotero: conceptos básicos](https://www.zotero.org/support/quick_start_guide).
- [Open Source Malaria](https://opensourcemalaria.github.io/), [FAQ](https://github.com/OpenSourceMalaria/About-StartHere-FAQ), [Polymath: Massively collaborative mathematics](https://www.nature.com/articles/461879a), [Manubot: Open collaborative writing](https://pmc.ncbi.nlm.nih.gov/articles/PMC6611653/), [protocols.io, Universidad de Edimburgo](https://library.ed.ac.uk/research-support/research-data-service/during/open-research-tools/protocols).
- [UNESCO, ciencia abierta](https://www.unesco.org/en/open-science/about), [Creative Commons, licencias de datos científicos](https://creativecommons.org/2026/04/20/licensing-best-practices-for-the-sharing-of-scientific-data/), [OSF, transición de proyectos](https://help.osf.io/article/759-details-of-osf-projects-transition).

**EC-04 — almacenamiento y preservación**

- [MDN, cuotas y eliminación](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).
- [Obsidian, copias](https://obsidian.md/help/backup), [Zotero, directorio](https://www.zotero.org/support/zotero_data), [sincronización](https://www.zotero.org/support/sync), [uso en varios ordenadores](https://www.zotero.org/support/kb/using_multiple_computers).
- [Ink & Switch, local-first](https://www.inkandswitch.com/essay/local-first/), [Supabase, copias](https://supabase.com/docs/guides/platform/backups), [Storage access control](https://supabase.com/docs/guides/storage/security/access-control), [Firestore offline](https://firebase.google.com/docs/firestore/manage-data/enable-offline), [D1 Time Travel](https://developers.cloudflare.com/d1/reference/time-travel/), [R2 precios](https://developers.cloudflare.com/r2/pricing/), [PostgreSQL backup](https://www.postgresql.org/docs/current/backup.html).
- [Yjs actualizaciones](https://docs.yjs.dev/api/document-updates), [Automerge local sync](https://automerge.org/docs/tutorial/local-sync/), [Zenodo versiones](https://help.zenodo.org/docs/deposit/manage-versions/), [DataCite versioning](https://support.datacite.org/docs/versioning), [RO-Crate 1.3](https://www.researchobject.org/ro-crate/specification/1.3/index.html), [FAIR](https://www.go-fair.org/fair-principles/), [Library of Congress, integridad](https://www.loc.gov/programs/digital-collections-management/inventory-and-custody/data-integrity-management/).

**EC-05 — organización**

- [Obsidian Bases](https://obsidian.md/help/bases), [Backlinks](https://obsidian.md/help/plugins/backlinks), [Zotero colecciones y etiquetas](https://www.zotero.org/support/collections_and_tags), [Tana Supertags](https://outliner.tana.inc/learn/features/supertags), [Capacities tipos](https://docs.capacities.io/reference/content-types), [Notion relaciones](https://www.notion.com/help/relations-and-rollups), [vistas](https://www.notion.com/help/views-filters-and-sorts), [Logseq block references](https://github.com/logseq/docs/blob/master/pages/Block%20Reference.md).
- [Wikidata statements](https://www.wikidata.org/wiki/Help:Statements), [ORKG Academy](https://academy.orkg.org/getting-started.html), [Nanopublications](https://nanopub.net/docs/handbook/nanopublication/).
- [RDF](https://www.w3.org/TR/rdf11-concepts/), [SKOS](https://www.w3.org/TR/skos-reference/), [SHACL](https://www.w3.org/TR/shacl/), [PROV-O](https://www.w3.org/TR/prov-o/), [Web Annotation](https://www.w3.org/TR/annotation-model/), [Cytoscape.js](https://github.com/cytoscape/cytoscape.js), [PostgreSQL consultas recursivas](https://www.postgresql.org/docs/current/queries-with.html).

**EC-06 — investigación**

- [Gemini Notebook, chat](https://support.google.com/gemininotebook/answer/16179559), [fuentes](https://support.google.com/gemininotebook/answer/16215270), [Elicit revisiones sistemáticas](https://support.elicit.com/en/articles/14759154-systematic-reviews-in-elicit), [ResearchRabbit](https://learn.researchrabbit.ai/en/articles/12439939-how-to-use-researchrabbit-a-step-by-step-guide), [Connected Papers](https://www.connectedpapers.com/about), [Litmaps seguimiento](https://docs.litmaps.com/en/articles/9126249-monitor-get-alerts-for-important-research).
- [Scite, artículo](https://doi.org/10.1162/qss_a_00146), [evaluación independiente de Scite](https://journals.iupui.edu/index.php/hypothesis/article/view/26528), [Zotero PDF](https://www.zotero.org/support/pdf_reader), [Hypothesis grupos](https://web.hypothes.is/help/annotating-with-groups/), [código de anclaje](https://github.com/hypothesis/client/blob/main/src/annotator/anchoring/html.ts), [Heptabase IA](https://wiki.heptabase.com/work-with-ai).
- [OpenAlex API](https://help.openalex.org/api/), [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/), [Retraction Watch](https://www.crossref.org/documentation/retrieve-metadata/retraction-watch/), [Cochrane revisiones vivas](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-21), [PRISMA 2020](https://pubmed.ncbi.nlm.nih.gov/33789826/).
- Evaluación empírica externa: [Lagisz et al., extracción mediante Elicit, 2026](https://www.cambridge.org/core/journals/research-synthesis-methods/article/using-elicit-ai-research-assistant-for-data-extraction-in-systematic-reviews-a-feasibility-study-across-environmental-and-life-sciences/C97DAEC70C3173A260F0B12E729E7250), [comparación de búsqueda bibliográfica, 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12483133/). El estudio anterior citó coincidencia del 90 % de valores y 46 % de citas entre cuentas en el primero, y sensibilidad media 39,5 % en cuatro casos del segundo; deben verificarse los métodos y alcance antes de reutilizar las cifras. No son estimaciones generales de precisión de IA.

**EC-07 — publicación y contribuciones**

- [WordPress revisiones](https://wordpress.org/documentation/article/revisions/), [REST posts](https://developer.wordpress.org/rest-api/reference/posts/), [REST revisions](https://developer.wordpress.org/rest-api/reference/post-revisions/), [Medium publicación](https://help.medium.com/hc/en-us/articles/360018677974-What-happens-to-your-story-when-you-publish-on-Medium), [Substack publicación](https://support.substack.com/hc/en-us/articles/360037831771-How-do-I-publish-a-new-post-on-Substack), [costes](https://support.substack.com/hc/en-us/articles/360037607131-How-much-does-Substack-cost).
- [MediaWiki history](https://www.mediawiki.org/wiki/Help:History/en), [diff](https://www.mediawiki.org/wiki/Help:Diff), [Wikipedia no original research](https://en.wikipedia.org/wiki/Wikipedia:No_original_research), [GitHub descubrir proyectos](https://docs.github.com/en/get-started/exploring-projects-on-github/discovering-projects-on-github), [encontrar contribuciones](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github).
- [arXiv versiones](https://info.arxiv.org/help/replace.html), [Zenodo registros](https://help.zenodo.org/docs/deposit/about-records/), [PubPeer FAQ](https://pubpeer.com/faq), [eLife revisión](https://elifesciences.org/about/peer-review), [Zooniverse](https://www.zooniverse.org/about), [iNaturalist calidad](https://help.inaturalist.org/en/support/solutions/articles/151000169936), [SCORE](https://www.cos.io/score).
- [Google, funcionamiento de búsqueda](https://developers.google.com/search/docs/fundamentals/how-search-works), [SEO JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [datos estructurados Article](https://developers.google.com/search/docs/appearance/structured-data/article).

**EC-08 — IA**

- [Notion agentes y permisos](https://www.notion.com/help/custom-agents-sharing-and-permissions), [Capacities MCP](https://docs.capacities.io/developer/model-context-protocol), [Capacities AI Assistant](https://docs.capacities.io/reference/ai-assistant), [Heptabase MCP](https://support.heptabase.com/en/articles/12679581-heptabase-mcp), [ChatGPT investigación profunda](https://chatgpt.com/features/deep-research/), [Glean acceso](https://docs.glean.com/user-guide/assistant/how-glean-accesses-info), [knowledge profiles](https://docs.glean.com/administration/managing-agents/knowledge-profiles).
- [PaperQA2](https://github.com/future-house/paper-qa), [estudio Language agents achieve superhuman synthesis](https://arxiv.org/abs/2409.13740), [RAG, NeurIPS 2020](https://proceedings.nips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html), [Anthropic Building effective agents](https://www.anthropic.com/research/building-effective-agents).
- [MCP especificación y repositorio](https://github.com/modelcontextprotocol/modelcontextprotocol), [OpenAI tracing](https://developers.openai.com/api/docs/guides/agents-api/tracing), [autorizaciones](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals), [datos API](https://developers.openai.com/api/docs/guides/your-data), [Ollama FAQ](https://github.com/ollama/ollama/blob/main/docs/faq.mdx), [OWASP GenAI Security](https://genai.owasp.org/), [precios OpenAI](https://platform.openai.com/pricing/).

**EC-09 — procedencia y colaboración**

- [GitHub contribuciones](https://docs.github.com/en/pull-requests/concepts/writing-code-for-a-project), [ramas protegidas](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches), [CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).
- [PROV-DM](https://www.w3.org/TR/prov-dm/), [Nanopublications versiones y retiradas](https://nanopub.net/docs/handbook/nanopublication-versions-and-retractions/), [CRediT](https://credit.niso.org/contributor-roles/), [ORCID y verificación](https://support.orcid.org/hc/en-us/articles/360006972413-Does-an-ORCID-iD-assure-my-identity).
- [Caesar código](https://github.com/zooniverse/caesar), [Caesar documentación](https://zooniverse.github.io/caesar/), [iNaturalist buenas prácticas](https://academic.oup.com/bioscience/advance-article/doi/10.1093/biosci/biag135/8820383), [National Academies: reproducibilidad y replicabilidad](https://www.nationalacademies.org/read/25303/chapter/3), [Crossmark correcciones y retractaciones](https://www.crossref.org/documentation/crossmark/version-control-corrections-and-retractions), [Workflow Run RO-Crate](https://www.researchobject.org/workflow-run-crate/).

**EC-10 — arquitectura y sostenibilidad**

- [AFFiNE](https://github.com/toeverything/AFFiNE), [BlockSuite](https://github.com/toeverything/blocksuite), [Docmost licencia](https://docmost.com/docs/editions), [XWiki licencia](https://www.xwiki.org/xwiki/bin/view/Main/License), [InvenioRDM](https://invenio-software.org/products/rdm/), [Next.js despliegue](https://nextjs.org/docs/app/getting-started/deploying), [pgvector](https://github.com/pgvector/pgvector).
- [Supabase alojamiento propio](https://supabase.com/docs/guides/self-hosting), [precios](https://supabase.com/pricing), [Workers precios](https://developers.cloudflare.com/workers/platform/pricing/), [D1 límites](https://developers.cloudflare.com/d1/platform/limits/), [Firebase precios](https://firebase.google.com/pricing/), [Firestore costes](https://firebase.google.com/docs/firestore/pricing), [OpenAlex precios](https://help.openalex.org/access/pricing/), [GitHub Pages límites](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

**EC-11 — experiencia y accesibilidad**

- [Nielsen Norman Group, progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/), [recognition and recall](https://www.nngroup.com/articles/recognition-and-recall/), [usability testing](https://www.nngroup.com/articles/usability-testing-101/), [tareas de usabilidad](https://www.nngroup.com/articles/better-usability-tasks/).
- [Linear display options](https://linear.app/docs/display-options), [creación](https://linear.app/docs/creating-issues), [Google Docs páginas/sin páginas](https://support.google.com/docs/answer/11528737), [esquema de documento](https://support.google.com/docs/answer/6367684), [Medium portada](https://help.medium.com/hc/en-us/articles/115012586467-Your-homepage), [GOV.UK error summary](https://design-system.service.gov.uk/components/error-summary/), [Radix accesibilidad](https://www.radix-ui.com/primitives/docs/overview/accessibility), [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

**EC-12 — diferenciación y entrada libre**

- [Octopus Author Guide](https://www.octopus.ac/author-guide), [Jisc proyecto](https://www.jisc.ac.uk/innovation/projects/octopus-creating-a-new-primary-research-record-for-science), [Octopus código](https://github.com/Jisc/octopus).
- [JOGL white paper](https://jogp.pubpub.org/pub/8i447yve/release/2), [JOGL GitLab](https://gitlab.com/JOGL), [ResearchHub](https://www.researchhub.com/about), [ResearchHub documentación](https://docs.researchhub.com/welcome/what-is-researchhub), [RSpace Harvard](https://docs.rc.fas.harvard.edu/kb/rspace/), [RSpace código](https://github.com/rspace-os/rspace-web), [OSF transición](https://help.osf.io/article/759-details-of-osf-projects-transition).
- [NN/g minimalismo](https://www.nngroup.com/articles/characteristics-minimalism/), [convenciones web](https://www.nngroup.com/articles/breaking-web-conventions/), [diseño plano](https://www.nngroup.com/articles/flat-design-best-practices/), [WCAG teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard).

### 8.3. Referencias económicas, licencias y fechas sensibles

| Referencia histórica de EC-03/04/07/10/12 | Valor citado en el estudio | Condición |
|---|---|---|
| Supabase | Free con límites; Pro desde 25 USD/mes | No incluye necesariamente otros servicios o copias de objetos |
| Cloudflare Workers | Paid desde 5 USD/mes | Operaciones y recursos adicionales pueden generar costes |
| R2 | Estándar 0,015 USD/GB/mes; 10 GB de franquicia; clases A/B 4,50/0,36 USD por millón; egress directo sin cargo | Depende de modalidad, operaciones y condiciones de tarifa |
| Firebase | Spark con límites; Blaze por uso | Lecturas, escrituras, almacenamiento y otros servicios |
| OpenAlex | Franquicia diaria de 1 USD de uso API por cuenta | Datos CC0 no implican API ilimitada gratuita |
| Substack | Comisión del 10 % de ingresos por suscripción de pago, además del procesamiento | Referente de modelo, no financiación seleccionada |
| OSF | Cese de creación de proyectos/componentes 16-11-2026; paso previsto a sólo lectura 19-02-2027 | Estado y calendario documentados en estudios previos; verificar antes de actuar |
| Tiptap, BlockNote | Núcleo MIT; BlockNote principalmente MPL-2.0 | Comprobar extensiones y componentes específicos |
| Docmost, XWiki, Caesar, Octopus | AGPL-3.0 (núcleo), LGPL 2.1, Apache-2.0, GPLv3 respectivamente | Referencias de estudios previos; verificar archivo LICENSE y compatibilidad de versión concreta |

Estas cifras y condiciones no se han actualizado en esta consolidación. No constituyen presupuesto, promesa de gratuidad, licencia del futuro producto ni asesoramiento jurídico. Los costes deben incluir administración, seguridad, restauración, migraciones, moderación, evaluación de contribuciones, IA, transferencia, disponibilidad y mantenimiento. Se conserva la posibilidad de financiar la IA de manera diferenciada, utilizar servicios propios del usuario, suscripciones, apoyo institucional o donaciones; ninguna ha sido seleccionada.

### 8.4. Límites generales de la evidencia

- Predomina investigación documental, acompañada de inspecciones estáticas puntuales y evidencia humana previa de mi-app. No se han efectuado pruebas comparativas completas con cuentas de prueba, ni evaluado todos los planes o versiones de los productos.
- El inventario no es exhaustivo de todo el mercado. No hay mediciones representativas de demanda, adopción, accesibilidad, productividad, costes, seguridad, licencias o rendimiento. Las ausencias de funciones no verificadas se consignan como preguntas, no como inexistencias demostradas.
- La investigación previa sobre Hypothesis no valida experimentalmente el anclaje frente a cambios; la documentación de Caesar no equivale a ejecución. La incidencia genérica mencionada en EC-06 sobre anclajes aproximados no se conserva como defecto vigente acreditado, porque no se identificó de forma inequívoca su número y estado en la evidencia disponible aquí.
- No se ha probado interoperabilidad formal de KnowledgeTrajectory con PROV/RO-Crate ni evaluado todas sus cardinalidades y dependencias. Las correspondencias son candidatas.
- No se ha contratado infraestructura, instalado REA, ejecutado nuevas pruebas ni actualizado archivos del repositorio durante esta consolidación. Tampoco se ha comprobado el estado actual de servicios externos o de la rama remota.
- La fuente externa anterior facilitada por el usuario sobre plataformas y estándares se utilizó en los estudios precedentes; esta consolidación se apoya en los resultados EC, no constituye una nueva revisión de aquel corpus original.
- EC-01/02 se recuperaron con menor resolución documental; los resultados condensados permiten continuidad, pero si se necesita exactitud literal o una auditoría exhaustiva de cada cita, habrá que recuperar los textos completos originales. No se inventan citas literales ni pruebas ausentes.

## 9. CONS-EC-08 — Estado de etapa 3 y transición

### 9.1. Determinación tras la aceptación humana

| Aspecto | Estado |
|---|---|
| Primera exploración EC-01…EC-12 | Realizada |
| Consolidación de resultados, inventario, necesidades, hipótesis, investigaciones y propuestas | Documentada y aceptada en REV-01 |
| Conservación de las tres propuestas del usuario | Explícita en §7 |
| Investigación experimental de soluciones externas | Pendiente selectivamente, cuando discrimine decisiones |
| Diferenciación exclusiva y demanda | No demostradas |
| Definición integral de Product | Pendiente |
| Arquitectura y estrategia de construcción | Abiertas |
| Aceptación humana del documento | `G-CONS-EC-01` — ACEPTADO el 26/11/2026 |

**Salida aceptada:** queda concluida la primera exploración documental de etapa 3 mediante la revisión y aceptación de esta consolidación, sin declarar agotada toda investigación externa ni cerrar hipótesis abiertas. Las investigaciones técnicas selectivas podrán realizarse en etapas posteriores cuando una decisión concreta las requiera. Esta aceptación no modifica los compromisos normativos vigentes ni autoriza nueva construcción.

**Registro de aceptación:** `G-CONS-EC-01` — ACEPTADO.

La versión REV-01 sometida a aceptación tenía la suma SHA-256:

`843b3e31df74a111fb7a5f62e21042f6d4bb85a00676497b1c7abe04f66ee725`

La actualización posterior registra exclusivamente la aceptación y sus consecuencias documentales, sin modificar los resultados de investigación.

### 9.2. Estado de las diez etapas de revisión estratégica

| Etapa | Objeto | Estado tras G-CONS-EC-01 |
|---|---|---|
| 1 | Recuperación de concepción original | Primer estudio realizado |
| 2 | Auditoría crítica de estrategia anterior | Primer estudio realizado |
| 3 | Comparación de plataformas existentes | Primera exploración documental concluida; consolidación aceptada |
| 4 | Identificación integral de usuarios y necesidades | Siguiente etapa candidata |
| 5 | Definición integral del producto | Pendiente |
| 6 | Diseño conceptual de experiencia | Pendiente |
| 7 | Inventario del patrimonio existente | Pendiente |
| 8 | Análisis de distancia material | Pendiente |
| 9 | Evaluación de alternativas | Pendiente |
| 10 | Nueva estrategia de desarrollo | Pendiente |

### 9.3. Siguiente actuación justificada: etapa 4

La siguiente cuestión no debería ser qué dependencia instalar ni qué realización programar. Debería ser identificar qué personas, grupos y situaciones humanas queremos atender, qué problemas afrontan, cómo los resuelven hoy, qué consecuencias tienen sus insuficiencias y cuáles de las necesidades identificadas son relevantes o constitutivas.

Propuesta de procedimiento para etapa 4 (no compromiso aprobado):

1. Recuperar la finalidad original y las situaciones candidatas sin convertirlas en perfiles rígidos: lector, autor, estudiante, investigador individual, equipo, colaborador ocasional, revisor, coordinador y comunidades u organizaciones.
2. Describir actividades reales, resultados buscados, condiciones de uso, dificultades actuales, alternativas y evidencia disponible. Diferenciar intereses del usuario de la supuesta demanda de otros colectivos.
3. Examinar las N-01…N-30, agrupar solapamientos y dependencias, identificar necesidades constitutivas y no confundirlas con mecanismos tecnológicos.
4. Evaluar escenarios de trabajo individual, investigación, consulta pública y contribución granular. Preservar la posibilidad de participación sin proyecto propio y apertura voluntaria.
5. Establecer criterios para determinar qué debe incluir una definición integral y qué necesita investigación humana adicional. Evitar seleccionar prematuramente un MVP, modelo de datos, editor o proveedor.
6. Conservar preguntas de diferenciación HD-01…06, CA-01…10 y ALT-01…04. Si una cuestión estratégica requiere inspección de Octopus/RSpace u otro candidato antes de avanzar, delimitar esa investigación como actuación propia y comprobar su resultado.

La consolidación aceptada queda incorporada como registro de investigación no normativo en `docs/08-project/142-CONSOLIDACION_ESTUDIO_COMPARATIVO_EC-01_EC-12.md`. La incorporación material ha sido comprobada mediante identidad SHA-256 con REV-01. El registro conjunto del estado, diario y commit se realizará mediante la actuación documental correspondiente.

## 10. Conclusión

El estudio no demuestra que mi-app sea una solución única ni que deba construirse desde cero. Sí proporciona un marco sustancialmente más completo para evaluar su finalidad, distingue capacidades ordinarias de posibles aportaciones diferenciales, conserva el patrimonio existente sin convertirlo en una obligación arquitectónica y reconoce precedentes directos de ciencia colaborativa.

La orientación que merece contraste es una plataforma donde el conocimiento personal pueda conservarse, fundamentarse, publicarse, reutilizarse, comprobarse y continuarse por personas con posibilidades de participación muy diferentes. La apertura, la IA y las estructuras avanzadas deben poder utilizarse de forma proporcional a cada actividad.

El paso siguiente es determinar las necesidades humanas que justifican materialmente ese producto, no acumular más funcionalidades ni cerrar la estrategia por anticipado.
