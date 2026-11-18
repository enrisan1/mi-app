# CONV-HPI-01 — Alcance y mapa de capacidades de H-PROJ-INT-01

**Fecha:** 18/11/2026  
**Estado:** CERRADA EN SU ALCANCE — alcance reconstruido y capacidades esenciales determinadas; dependencias todavía no evaluadas.  
**Horizonte:** `H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual`.  
**Precedente:** `100-ACEPTACION_H-PROJ-INT-01_Y_RELEVO_A_CONVERGENCIA.md`.

---

# 1. Objeto

Esta actuación ejecuta únicamente los dos primeros pasos del relevo de Manual 17 §13.1.5:

~~~text
horizonte aceptado
↓
ALCANCE
↓
CAPACIDADES
~~~

No determina todavía:

- dependencias entre capacidades;
- criterios de finalización por capacidad;
- estado actual de satisfacción;
- huecos;
- prioridades;
- hitos;
- roadmap;
- Architecture;
- Realization;
- Implementation.

Su función consiste en responder:

> ¿Qué debe poder hacer el producto dentro del alcance ya aceptado de H-PROJ-INT-01 para que el horizonte pueda llegar a realizarse?

---

# 2. Regla de derivación

Se adopta el mismo criterio reductivo utilizado en el mapa de capacidades de V1:

~~~text
capacidad esencial
=
capacidad cuya eliminación
impide realizar completamente
el alcance aceptado
~~~

No se incluye una capacidad por:

- existir ya en el código;
- haber sido útil en una Realization;
- ser habitual en editores;
- facilitar una arquitectura;
- ser tecnológicamente interesante;
- pertenecer al perímetro amplio de Platform Vision.

Tampoco se convierte una condición de validación en capacidad.

Por ejemplo:

~~~text
"desde la entrada ordinaria"
→ condición de realización/validación

"sin fixtures o JSON manual"
→ falsador del recorrido

"usar React/localStorage/CodeMirror"
→ mecanismo técnico

ninguno de ellos
→ capacidad del horizonte
~~~

---

# 3. Reconstrucción estricta del alcance

La formulación aceptada es:

> Hacer materialmente practicable, desde el punto ordinario de entrada del producto, un recorrido persistente de creación, desarrollo, reanudación, recuperación y reutilización de trabajo textual, con acceso contextual a las operaciones auxiliares ya justificadas que resulten pertinentes, preservando determinación humana y posibilidades anteriores necesarias.

La unidad mínima de convergencia queda fijada como:

~~~text
1 persona
+
1 trabajo textual actual
+
0..N antecedentes pertinentes
+
0..N operaciones auxiliares
+
continuidad a través de interrupciones
~~~

No se presupone que esa unidad sea técnicamente:

~~~text
Document
Project
Workspace
Session
Aggregate
Entity
Database row
~~~

Sólo se exige que sea operacionalmente reconocible como el trabajo que la persona está desarrollando.

---

# 4. Alcance funcional incluido

El horizonte incluye cinco dimensiones.

## A-HPI-01 — Trabajo textual actual

Debe existir un trabajo actual inequívocamente reconocible que pueda:

- iniciarse o retomarse;
- desarrollarse mediante intervención humana;
- mantenerse como referencia de la actividad en curso.

## A-HPI-02 — Continuidad temporal

El trabajo debe poder:

- conservarse;
- sobrevivir una interrupción;
- volver a ser retomado con contexto suficiente.

## A-HPI-03 — Antecedentes

La persona debe poder:

- localizar material anterior pertinente;
- consultarlo;
- decidir utilizarlo;
- mantener suficientemente reconocible su papel respecto del trabajo posterior.

## A-HPI-04 — Operaciones auxiliares contextuales

Cuando sean pertinentes, deben poder participar en el contexto del trabajo:

- captura contextual;
- comparación humana;
- apoyo IA separado.

Su uso es opcional en una ejecución concreta.

Su disponibilidad contextual forma parte del horizonte.

## A-HPI-05 — Propiedades transversales

Durante el recorrido deben preservarse:

- determinación humana;
- posibilidades anteriores que continúen siendo pertinentes;
- procedencia o distinción suficiente allí donde sea necesaria para esas decisiones.

---

# 5. No-alcance funcional

Quedan fuera del primer umbral, conforme a la aceptación:

- colaboración multiusuario ordinaria;
- publicación;
- multiformato general;
- sincronización distribuida;
- CRDT;
- agentes autónomos;
- MCP;
- RAG;
- grafo general;
- ontología general;
- versionado universal;
- branching;
- snapshots universales;
- restauración universal;
- workflow configurable;
- taxonomía general;
- búsqueda semántica;
- autenticación general;
- permisos complejos;
- revisión editorial multirol;
- interoperabilidad universal.

También quedan fuera como condiciones constitutivas del primer núcleo:

~~~text
identidad autoral elegible
→ compromiso vigente
→ no capacidad esencial de H-PROJ-INT-01

continuidad multiusuario P1→P2
→ patrimonio válido
→ no capacidad esencial del núcleo individual

trayectorias post-V1 especializadas
→ patrimonio válido
→ no gobiernan el mapa
~~~

---

# 6. Estructura general del mapa de capacidades

Las capacidades esenciales se organizan en tres familias descriptivas:

~~~text
H-PROJ-INT-01
│
├── MC-HPI-1 — Continuidad longitudinal del trabajo textual
│
├── MC-HPI-2 — Operaciones auxiliares contextuales
│
└── MC-HPI-3 — Condiciones transversales
~~~

Estas familias:

~~~text
NO son
→ módulos
→ componentes
→ servicios
→ capas
→ bounded contexts
→ pantallas
~~~

Sólo organizan capacidades.

---

# 7. MC-HPI-1 — Continuidad longitudinal del trabajo textual

Comprende cinco capacidades esenciales:

~~~text
C-HPI-01
→ establecer un trabajo textual actual

C-HPI-02
→ desarrollar el trabajo actual

C-HPI-03
→ conservar y reanudar el mismo trabajo

C-HPI-04
→ recuperar antecedentes pertinentes

C-HPI-05
→ reutilizar antecedentes en una continuación o revisión
~~~

---

# 8. C-HPI-01 — Establecer un trabajo textual actual

## Definición

La plataforma deberá permitir que la persona disponga de un trabajo textual actual inequívocamente reconocible, bien porque:

- inicia uno nuevo;
- o retoma uno ya existente.

Estructura mínima:

~~~text
sin trabajo actual
o
trabajo anterior disponible
↓
acción humana
↓
trabajo textual actual reconocible
~~~

## Alcance

No prescribe:

- documento como entidad;
- título obligatorio;
- archivo;
- editor concreto;
- modo de creación;
- estructura persistente.

## Razón de esencialidad

Sin un trabajo actual reconocible:

- las demás operaciones no tienen contexto común;
- captura, comparación o IA vuelven a ser herramientas laterales;
- no puede existir el recorrido integrado definido por el horizonte.

Resultado:

~~~text
C-HPI-01
→ ESENCIAL
~~~

---

# 9. C-HPI-02 — Desarrollar el trabajo actual

## Definición

La plataforma deberá permitir que la actividad humana produzca una modificación o desarrollo textual sobre el trabajo actual.

Estructura mínima:

~~~text
trabajo actual
↓
intervención humana
↓
trabajo desarrollado
~~~

## Alcance

Puede incluir:

- escribir;
- corregir;
- ampliar;
- reducir;
- reformular;
- producir una continuación;
- producir una revisión.

No exige un modelo editorial universal.

## Razón de esencialidad

Si se elimina:

~~~text
trabajo actual
→ sólo puede almacenarse/consultarse
→ no puede desarrollarse
~~~

y deja de realizarse el núcleo de trabajo intelectual textual.

Resultado:

~~~text
C-HPI-02
→ ESENCIAL
~~~

---

# 10. C-HPI-03 — Conservar y reanudar el mismo trabajo

## Definición

La plataforma deberá permitir que el trabajo actual sobreviva una interrupción y vuelva a participar suficientemente en una continuación posterior.

Estructura mínima:

~~~text
trabajo actual
↓
conservar
↓
interrupción
↓
volver
↓
mismo trabajo recuperable
+
contexto suficiente para continuar
~~~

## Alcance

No exige:

- conservación ilimitada;
- historial universal;
- snapshots;
- branching;
- sincronización multi-dispositivo;
- una representación técnica determinada.

## Razón de esencialidad

Sin esta capacidad, el horizonte dejaría de ser persistente y reanudable.

Resultado:

~~~text
C-HPI-03
→ ESENCIAL
~~~

---

# 11. C-HPI-04 — Recuperar antecedentes pertinentes

## Definición

La plataforma deberá permitir que la persona localice y haga disponible dentro de la actividad un material anterior que considere pertinente.

Estructura mínima:

~~~text
trabajo actual
+
materiales anteriores
↓
selección humana
↓
antecedente pertinente disponible
para consulta/uso
~~~

## Alcance

No exige:

- búsqueda semántica;
- recomendación automática;
- taxonomía;
- clasificación;
- grafo;
- relevancia decidida por el sistema.

## Razón de esencialidad

Sin esta capacidad, el recorrido sólo puede operar sobre el trabajo actual y pierde la recuperación/reutilización explícitamente comprometida por el horizonte.

Resultado:

~~~text
C-HPI-04
→ ESENCIAL
~~~

---

# 12. C-HPI-05 — Reutilizar antecedentes en una continuación o revisión

## Definición

La plataforma deberá permitir que un antecedente recuperado participe en la producción de una continuación o revisión del trabajo, manteniendo suficientemente reconocible esa continuidad cuando sea pertinente.

Estructura mínima:

~~~text
trabajo actual
+
antecedente seleccionado
↓
actividad humana
↓
continuación/revisión
~~~

con:

~~~text
antecedente
→ no destruido indebidamente

nuevo resultado
→ reconocible como resultado posterior

relación operacional pertinente
→ suficientemente conservada
~~~

## Alcance

No exige:

- grafo general;
- provenance universal;
- merge;
- relación semántica tipada;
- lineage automático.

## Razón de esencialidad

Recuperar un antecedente sin poder utilizarlo dentro del trabajo dejaría incompleto el recorrido aceptado.

Resultado:

~~~text
C-HPI-05
→ ESENCIAL
~~~

---

# 13. MC-HPI-2 — Operaciones auxiliares contextuales

Comprende tres capacidades:

~~~text
C-HPI-06
→ capturar una aportación emergente
  desde el contexto del trabajo

C-HPI-07
→ comparar materiales relacionados
  desde el contexto del trabajo

C-HPI-08
→ obtener apoyo IA separado
  y contextual al trabajo
~~~

Estas capacidades son:

~~~text
opcionales en cada recorrido concreto
pero
esenciales para el horizonte aceptado
como posibilidades contextuales disponibles
~~~

porque forman parte expresa de `I-PROJ-01` y del alcance aceptado.

---

# 14. C-HPI-06 — Capturar una aportación emergente en contexto

## Definición

Cuando durante el trabajo aparezca una aportación que la persona quiera conservar, la plataforma deberá permitir capturarla sin obligar a abandonar innecesariamente el contexto operativo actual.

## Alcance

Conserva la delimitación de `C-PV-80-01`.

No exige:

- clasificación inmediata;
- inbox universal;
- IA;
- captura desde cualquier aplicación.

## Razón de esencialidad

La captura ya está justificada por Product.

En este horizonte la diferencia adicional no es crear otra captura, sino que pueda participar como operación contextual del mismo trabajo.

Si sólo existe como isla independiente sin contexto suficiente, `I-PROJ-01` no queda realizado.

Resultado:

~~~text
C-HPI-06
→ ESENCIAL COMO POSIBILIDAD CONTEXTUAL
~~~

---

# 15. C-HPI-07 — Comparar materiales relacionados en contexto

## Definición

Cuando la actividad requiera reconocer diferencias entre el trabajo actual y otro material relacionado, o entre dos materiales pertinentes para el trabajo, la plataforma deberá permitir una comparación suficientemente simultánea y distinguible sin perder el contexto de la actividad.

## Alcance

Conserva la delimitación de `C-PV-80-02`.

No exige:

- merge;
- comparación semántica;
- edición desde el comparador;
- versionado general;
- decisión automática de prevalencia.

## Razón de esencialidad

La comparación ya existe como compromiso Product.

Dentro del horizonte, debe poder participar en el recorrido sin convertirse en una experiencia desconectada cuya relación con el trabajo deba reconstruirse externamente.

Resultado:

~~~text
C-HPI-07
→ ESENCIAL COMO POSIBILIDAD CONTEXTUAL
~~~

---

# 16. C-HPI-08 — Obtener apoyo IA separado y contextual

## Definición

Cuando la persona solicite apoyo IA durante el trabajo, la plataforma deberá poder asociar ese apoyo al contexto pertinente manteniéndolo diferenciado del contenido principal.

## Alcance

Conserva `C-PV-80-04`.

No exige:

- generación automática de obra;
- agentes;
- autonomía;
- RAG;
- memoria general;
- múltiples modelos.

## Razón de esencialidad

El horizonte aceptado incluye acceso contextual a las operaciones auxiliares ya justificadas.

Una IA separada pero desvinculada del trabajo actual no satisface esa integración.

Resultado:

~~~text
C-HPI-08
→ ESENCIAL COMO POSIBILIDAD CONTEXTUAL
~~~

---

# 17. MC-HPI-3 — Condiciones transversales

Comprende:

~~~text
C-HPI-09
→ preservar determinación humana efectiva

C-HPI-10
→ preservar posibilidades pertinentes
  y distinción/procedencia suficiente
~~~

---

# 18. C-HPI-09 — Preservar determinación humana efectiva

## Definición

Cuando una decisión relevante del recorrido corresponda a la persona, la plataforma deberá preservar la posibilidad efectiva de que la determine.

Aplica, entre otros, a:

- qué antecedente utilizar;
- qué diferencia considerar pertinente;
- qué apoyo IA incorporar o ignorar;
- qué continuación/revisión constituir.

## Alcance

No implica intervención humana en toda operación técnica.

Conserva `PV-005`.

## Razón de esencialidad

Eliminar esta capacidad permitiría que una plataforma técnicamente integrada cerrase automáticamente decisiones que el horizonte exige mantener humanas.

Resultado:

~~~text
C-HPI-09
→ ESENCIAL Y TRANSVERSAL
~~~

---

# 19. C-HPI-10 — Preservar posibilidades pertinentes y distinción suficiente

## Definición

Las transformaciones y transiciones del recorrido deberán conservar suficientemente:

- posibilidades anteriores que sigan siendo pertinentes;
- distinción entre trabajo principal, antecedentes y ayudas cuando esa distinción sea necesaria;
- procedencia mínima suficiente para no confundir sus papeles.

## Alcance

Esta capacidad integra, sin universalizarlos:

- `PV-006`;
- `C-PV-POST-01`;
- las exigencias de separación de `C-PV-80-04`;
- la distinción de fuentes requerida por comparación.

No exige:

- provenance universal;
- historial total;
- grafo;
- conservación de todo;
- representación inmutable.

## Razón de esencialidad

Sin esta capacidad, la integración podría conseguirse a costa de colapsar antecedentes, ayudas o posibilidades anteriores, contradiciendo el horizonte aceptado.

Resultado:

~~~text
C-HPI-10
→ ESENCIAL Y TRANSVERSAL
~~~

---

# 20. Mapa consolidado

~~~text
H-PROJ-INT-01

MC-HPI-1 — continuidad longitudinal
│
├── C-HPI-01 establecer trabajo textual actual
├── C-HPI-02 desarrollar trabajo actual
├── C-HPI-03 conservar y reanudar
├── C-HPI-04 recuperar antecedentes
└── C-HPI-05 reutilizar antecedentes

MC-HPI-2 — operaciones auxiliares contextuales
│
├── C-HPI-06 captura contextual
├── C-HPI-07 comparación contextual
└── C-HPI-08 apoyo IA separado/contextual

MC-HPI-3 — condiciones transversales
│
├── C-HPI-09 determinación humana
└── C-HPI-10 preservación + distinción/procedencia suficiente
~~~

Total:

~~~text
capacidades esenciales
→ 10
~~~

---

# 21. Prueba de cobertura del alcance

| Elemento del alcance aceptado | Capacidad o capacidades que lo cubren |
| --- | --- |
| trabajo actual inequívoco | C-HPI-01 |
| creación/desarrollo textual | C-HPI-01 + C-HPI-02 |
| persistencia/reanudación | C-HPI-03 |
| recuperación de antecedentes | C-HPI-04 |
| continuidad antecedente → resultado | C-HPI-05 + C-HPI-10 |
| captura contextual | C-HPI-06 |
| comparación contextual | C-HPI-07 |
| apoyo IA separado/contextual | C-HPI-08 + C-HPI-10 |
| determinación humana | C-HPI-09 |
| preservación de posibilidades | C-HPI-10 |

Resultado:

~~~text
elemento de alcance sin capacidad
→ NINGUNO

capacidad sin fundamento en alcance
→ NINGUNA IDENTIFICADA
~~~

---

# 22. Prueba de reducción por eliminación

Si se elimina:

~~~text
C-HPI-01
→ desaparece trabajo actual común

C-HPI-02
→ desaparece desarrollo textual

C-HPI-03
→ desaparece persistencia/reanudación

C-HPI-04
→ desaparece recuperación

C-HPI-05
→ desaparece reutilización/continuación

C-HPI-06
→ captura deja de estar integrada contextualmente

C-HPI-07
→ comparación deja de estar integrada contextualmente

C-HPI-08
→ apoyo IA deja de estar integrado contextualmente

C-HPI-09
→ pueden perderse decisiones humanas protegidas

C-HPI-10
→ integración puede destruir posibilidades
  o colapsar papeles/procedencia
~~~

Por tanto no se identifica ninguna capacidad redundante dentro del alcance aceptado.

---

# 23. Qué no se decide todavía

Esta actuación no afirma:

~~~text
qué capacidad depende de cuál
→ NO EVALUADO

qué capacidades ya están satisfechas
→ NO EVALUADO FORMALMENTE

qué huecos existen
→ NO DETERMINADO TODAVÍA

qué debe construirse primero
→ NO DETERMINADO

qué arquitectura usar
→ NO DERIVADA
~~~

La existencia actual de código relacionado no sustituye estas etapas.

---

# 24. Resultado de CONV-HPI-01

~~~text
alcance de H-PROJ-INT-01
→ RECONSTRUIDO Y CERRADO

mapa de capacidades
→ DETERMINADO

capacidades esenciales
→ C-HPI-01…C-HPI-10

dependencias
→ PENDIENTES

criterios de finalización por capacidad
→ PENDIENTES

estado actual
→ PENDIENTE DE EVALUACIÓN

huecos
→ NO DERIVADOS TODAVÍA

CONV-HPI-01
→ CERRADA EN SU ALCANCE
~~~

---

# 25. Siguiente actuación legítima

El siguiente paso de Manual 17 §13.1.5 es:

~~~text
capacidades
↓
DEPENDENCIAS
~~~

Se deriva:

> **CONV-HPI-02 — mapa de dependencias entre C-HPI-01…C-HPI-10.**

Deberá comprobar necesidad e independencia de cada relación antes de establecerla.

No deberá todavía:

- evaluar estado actual;
- declarar huecos;
- priorizar;
- formular hitos;
- construir;
- abrir Architecture o Implementation.
