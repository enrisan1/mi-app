# CONV-HPI-02 — Mapa mínimo de dependencias de H-PROJ-INT-01

**Fecha:** 18/11/2026  
**Estado:** CERRADA — mapa mínimo de dependencias funcionales determinado; criterios de finalización todavía pendientes.  
**Horizonte:** `H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual`.  
**Precedente:** `101-CONV-HPI-01_ALCANCE_Y_MAPA_DE_CAPACIDADES.md`.

---

# 1. Objeto

Esta actuación ejecuta únicamente el tercer paso del relevo de Manual 17 §13.1.5:

~~~text
horizonte aceptado
↓
alcance
↓
capacidades
↓
DEPENDENCIAS
~~~

Parte de las diez capacidades ya determinadas:

~~~text
C-HPI-01 → establecer trabajo textual actual
C-HPI-02 → desarrollar trabajo actual
C-HPI-03 → conservar y reanudar
C-HPI-04 → recuperar antecedentes pertinentes
C-HPI-05 → reutilizar antecedentes en continuación/revisión
C-HPI-06 → captura contextual
C-HPI-07 → comparación contextual
C-HPI-08 → apoyo IA separado/contextual
C-HPI-09 → determinación humana
C-HPI-10 → preservación + distinción/procedencia suficiente
~~~

No evalúa todavía:

- criterios completos de finalización;
- estado material actual;
- huecos;
- prioridades;
- hitos;
- roadmap;
- Architecture;
- Realization;
- Implementation.

---

# 2. Criterio de dependencia

Se conserva el criterio reductivo utilizado en el mapa histórico de V1.

Una capacidad B depende funcionalmente de A sólo cuando:

> B no puede realizarse plenamente, dentro de su propia definición y alcance, sin que exista A.

Se distingue:

~~~text
dependencia funcional necesaria
≠
secuencia narrativa
≠
coexistencia en el mismo recorrido
≠
condición transversal
≠
orden conveniente de construcción
≠
preferencia arquitectónica
~~~

Una dependencia directa sólo se conserva cuando:

~~~text
eliminar A
↓
permite aparentar que B existe
pero
B pierde una condición necesaria
de su propia definición
~~~

Si la necesidad ya queda cubierta por un camino intermedio, la relación es transitiva y no se registra como arista directa.

---

# 3. Advertencia sobre el “trabajo actual”

Varias capacidades se ejercen respecto de un trabajo actual:

- C-HPI-02;
- C-HPI-03;
- C-HPI-06;
- C-HPI-07;
- C-HPI-08.

Esto no implica automáticamente:

~~~text
C-HPI-01
↓
todas esas capacidades
~~~

C-HPI-01 es la capacidad de **establecer** un trabajo textual actual, nuevo o retomado.

Otra capacidad puede existir funcionalmente en una situación donde el trabajo actual ya esté dado por el contexto, aunque el producto carezca de una capacidad general para establecerlo.

Por tanto:

~~~text
presuponer un estado de entrada
≠
depender funcionalmente
de la capacidad que permite establecerlo
~~~

La integración completa del horizonte necesitará ambas cosas, pero eso pertenece a la cobertura conjunta del recorrido, no al grafo funcional mínimo.

---

# 4. C-HPI-01 — Establecer un trabajo textual actual

Puede existir aunque el producto todavía no permita:

- desarrollarlo;
- conservarlo;
- recuperar antecedentes;
- capturar;
- comparar;
- solicitar IA;
- realizar decisiones protegidas;
- conservar posibilidades anteriores.

Resultado:

~~~text
C-HPI-01
→ SIN DEPENDENCIA FUNCIONAL INTERNA NECESARIA
~~~

---

# 5. C-HPI-02 — Desarrollar el trabajo actual

Un producto puede permitir modificar un trabajo que ya esté dado por el contexto aunque no disponga de una capacidad general para:

- establecerlo;
- persistirlo;
- recuperar antecedentes;
- utilizar operaciones auxiliares.

Por tanto, la secuencia:

~~~text
establecer trabajo
↓
desarrollarlo
~~~

es necesaria en el recorrido completo, pero no demuestra dependencia funcional universal.

Resultado:

~~~text
C-HPI-02
→ SIN DEPENDENCIA FUNCIONAL INTERNA NECESARIA
~~~

En particular:

~~~text
C-HPI-02
⇏ C-HPI-01
~~~

---

# 6. C-HPI-03 — Conservar y reanudar el mismo trabajo

La capacidad puede existir para un trabajo ya dado sin que exista una capacidad general de establecimiento de trabajo actual.

Tampoco requiere que el trabajo haya sido desarrollado previamente: puede conservarse y reanudarse un trabajo sin modificaciones.

Por tanto:

~~~text
C-HPI-03
→ SIN DEPENDENCIA FUNCIONAL INTERNA NECESARIA
~~~

No se establece:

~~~text
C-HPI-01 → C-HPI-03
C-HPI-02 → C-HPI-03
~~~

como dependencias funcionales.

---

# 7. C-HPI-04 — Recuperar antecedentes pertinentes

La capacidad puede existir si la actividad ya proporciona un contexto actual y existen materiales anteriores disponibles.

No requiere funcionalmente:

- la capacidad general de establecer el trabajo actual;
- desarrollar el trabajo;
- reanudar;
- reutilizar después el antecedente.

Por tanto:

~~~text
C-HPI-04
→ SIN DEPENDENCIA FUNCIONAL INTERNA NECESARIA
~~~

La secuencia:

~~~text
recuperar
↓
reutilizar
~~~

no implica todavía la relación inversa.

---

# 8. C-HPI-05 — Reutilizar antecedentes en una continuación o revisión

Esta capacidad contiene dos condiciones funcionales que no puede producir por sí sola sin vaciar las distinciones del mapa.

## 8.1 Dependencia de C-HPI-04

C-HPI-05 está definida sobre:

~~~text
antecedente recuperado
↓
participación en continuación/revisión
~~~

Sin C-HPI-04 podría existir transformación de un trabajo o uso de material ya presente, pero no quedaría garantizada la capacidad de recuperar el antecedente pertinente cuya reutilización define C-HPI-05.

Se establece:

~~~text
C-HPI-04
↓
C-HPI-05
~~~

> **D-HPI-01 — C-HPI-05 depende funcionalmente de C-HPI-04.**

## 8.2 Dependencia de C-HPI-02

C-HPI-05 exige producir mediante actividad humana:

~~~text
continuación
o
revisión
~~~

Eso constituye una forma de desarrollo textual del trabajo.

Si C-HPI-02 desapareciese por completo, podría existir:

~~~text
antecedente recuperado
+
consulta
~~~

pero no:

~~~text
antecedente
→ participa en trabajo
→ continuación/revisión producida
~~~

Se establece:

~~~text
C-HPI-02
↓
C-HPI-05
~~~

> **D-HPI-02 — C-HPI-05 depende funcionalmente de C-HPI-02.**

## 8.3 Ausencia de dependencia directa adicional

C-HPI-05 no depende directamente de C-HPI-01, C-HPI-03, C-HPI-06, C-HPI-07 o C-HPI-08.

Tampoco se registra C-HPI-09 o C-HPI-10 como prerrequisito funcional fijo: ambas son condiciones transversales de una realización válida y se aplicarán cuando corresponda, pero no constituyen capacidades previas cuya existencia sea necesaria para que pueda existir funcionalmente la reutilización.

Resultado:

~~~text
C-HPI-02 ─┐
          ├→ C-HPI-05
C-HPI-04 ─┘
~~~

---

# 9. C-HPI-06 — Captura contextual

Puede existir como operación contextual sobre una actividad ya dada sin requerir funcionalmente:

- C-HPI-01 como capacidad general de establecimiento;
- C-HPI-02;
- C-HPI-03;
- C-HPI-04;
- C-HPI-05.

C-HPI-10 deberá preservar las distinciones pertinentes en el conjunto del horizonte, pero eso no convierte la condición transversal en prerrequisito fijo de la existencia funcional de la captura.

Resultado:

~~~text
C-HPI-06
→ SIN DEPENDENCIA FUNCIONAL INTERNA NECESARIA
~~~

---

# 10. C-HPI-07 — Comparación contextual

La comparación puede existir sobre dos materiales ya disponibles aunque el producto carezca de:

- recuperación general de antecedentes;
- desarrollo textual;
- persistencia;
- captura;
- apoyo IA.

La exigencia de distinguir suficientemente A/B pertenece a la propia definición local de la comparación.

Por tanto no se necesita convertir C-HPI-10 en dependencia previa para que C-HPI-07 pueda existir.

Resultado:

~~~text
C-HPI-07
→ SIN DEPENDENCIA FUNCIONAL INTERNA NECESARIA
~~~

---

# 11. C-HPI-08 — Apoyo IA separado y contextual

El apoyo IA puede existir respecto de un contexto ya proporcionado sin requerir funcionalmente:

- capacidad general de establecimiento del trabajo;
- persistencia;
- recuperación;
- comparación;
- captura.

La separación obra/apoyo forma parte de la propia capacidad C-HPI-08.

C-HPI-10 la protege transversalmente en el recorrido global, pero no se registra por ello como dependencia funcional previa.

Resultado:

~~~text
C-HPI-08
→ SIN DEPENDENCIA FUNCIONAL INTERNA NECESARIA
~~~

---

# 12. C-HPI-09 — Determinación humana efectiva

C-HPI-09 es transversal.

Sólo se activa donde exista una decisión relevante cuya resolución corresponda a la persona.

Puede ser necesaria durante:

- selección de antecedentes;
- interpretación de diferencias;
- incorporación o rechazo de apoyo IA;
- constitución de una continuación/revisión.

Pero:

~~~text
aplicación transversal
≠
dependencia funcional fija
~~~

Resultado:

~~~text
C-HPI-09
→ SIN DEPENDENCIA FUNCIONAL INTERNA NECESARIA
~~~

---

# 13. C-HPI-10 — Preservación de posibilidades y distinción suficiente

C-HPI-10 también es transversal.

Se aplica cuando una transformación o transición puede afectar:

- antecedentes pertinentes;
- trabajo principal;
- apoyos;
- posibilidades anteriores;
- procedencia/distinción necesaria.

No necesita funcionalmente otra capacidad concreta del mapa para existir como propiedad de preservación.

Resultado:

~~~text
C-HPI-10
→ SIN DEPENDENCIA FUNCIONAL INTERNA NECESARIA
~~~

---

# 14. Relación con DEP-HPI-01…08 del gate constitutivo

El gate 99 había identificado ocho dependencias/condiciones materialmente relevantes del horizonte.

CONV-HPI-02 las reinterpreta sin confundirlas con aristas entre capacidades:

| Condición del gate | Cobertura actual | Naturaleza |
| --- | --- | --- |
| DEP-HPI-01 trabajo textual actual | C-HPI-01 + estado contextual del recorrido | capacidad + condición de entrada |
| DEP-HPI-02 persistencia/reanudación | C-HPI-03 | capacidad |
| DEP-HPI-03 recuperación de antecedentes | C-HPI-04 | capacidad |
| DEP-HPI-04 continuidad antecedente→resultado | C-HPI-05 + C-HPI-10 | capacidad + condición transversal |
| DEP-HPI-05 contextualización auxiliares | C-HPI-06…08 | capacidades |
| DEP-HPI-06 determinación humana | C-HPI-09 | transversal |
| DEP-HPI-07 preservación | C-HPI-10 | transversal |
| DEP-HPI-08 entrada ordinaria | CF-HPI-01-I/J | condición de validación, no capacidad |

Resultado:

~~~text
DEP-HPI-01…08
→ cubiertas sin derivar
  nuevas capacidades ni aristas artificiales
~~~

---

# 15. Dependencias directas consolidadas

El mapa contiene exactamente dos dependencias funcionales directas:

~~~text
D-HPI-01
C-HPI-04
↓
C-HPI-05

D-HPI-02
C-HPI-02
↓
C-HPI-05
~~~

Lectura:

~~~text
reutilizar un antecedente
en una continuación/revisión
requiere:
→ poder recuperar el antecedente
→ poder desarrollar textualmente el trabajo
~~~

---

# 16. Dependencias transitivas

Las dos capacidades necesarias de C-HPI-05:

~~~text
C-HPI-02
C-HPI-04
~~~

no presentan a su vez dependencias internas necesarias.

Por tanto:

~~~text
dependencias transitivas adicionales
→ NINGUNA
~~~

No existe cadena más larga en el grafo mínimo actual.

---

# 17. Capacidades sin dependencia interna necesaria

Nueve capacidades no presentan dependencia funcional fija respecto de otra capacidad del mapa:

~~~text
C-HPI-01
C-HPI-02
C-HPI-03
C-HPI-04
C-HPI-06
C-HPI-07
C-HPI-08
C-HPI-09
C-HPI-10
~~~

Por tanto:

~~~text
capacidades sin dependencia interna
→ 9

capacidad dependiente
→ C-HPI-05
~~~

Sólo C-HPI-05 posee dependencias internas directas.

La ausencia de dependencia no significa:

- que sean opcionales;
- que puedan omitirse del horizonte;
- que no interactúen;
- que sean técnicamente independientes.

Significa únicamente que su existencia funcional no exige otra de las capacidades identificadas.

---

# 18. Matriz de dependencias

~~~text
Fila = capacidad dependiente
Columna = capacidad necesaria

D = dependencia directa
— = ausencia de dependencia funcional necesaria
~~~

| Capacidad | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C-HPI-01 | — | — | — | — | — | — | — | — | — | — |
| C-HPI-02 | — | — | — | — | — | — | — | — | — | — |
| C-HPI-03 | — | — | — | — | — | — | — | — | — | — |
| C-HPI-04 | — | — | — | — | — | — | — | — | — | — |
| C-HPI-05 | — | D | — | D | — | — | — | — | — | — |
| C-HPI-06 | — | — | — | — | — | — | — | — | — | — |
| C-HPI-07 | — | — | — | — | — | — | — | — | — | — |
| C-HPI-08 | — | — | — | — | — | — | — | — | — | — |
| C-HPI-09 | — | — | — | — | — | — | — | — | — | — |
| C-HPI-10 | — | — | — | — | — | — | — | — | — | — |

---

# 19. Grafo mínimo

~~~text
C-HPI-01 establecer trabajo actual
           [sin dependencia interna]

C-HPI-02 desarrollar trabajo ──────┐
                                   │
C-HPI-03 conservar/reanudar        │
           [sin dependencia]       │
                                   ├──→ C-HPI-05 reutilizar antecedente
C-HPI-04 recuperar antecedente ────┘
                                   en continuación/revisión

C-HPI-06 captura contextual
           [sin dependencia]

C-HPI-07 comparación contextual
           [sin dependencia]

C-HPI-08 apoyo IA contextual
           [sin dependencia]

C-HPI-09 determinación humana
           [transversal; sin dependencia fija]

C-HPI-10 preservación/distinción
           [transversal; sin dependencia fija]
~~~

---

# 20. Relaciones examinadas y rechazadas

No se conservan como dependencias:

~~~text
C-HPI-01 → C-HPI-02
→ secuencia de recorrido, no dependencia universal

C-HPI-01 → C-HPI-03
→ un trabajo ya dado puede conservarse/reanudarse

C-HPI-01 → C-HPI-04
→ puede recuperarse antecedente con contexto ya dado

C-HPI-01 → C-HPI-06/07/08
→ contextualidad no equivale a capacidad general de establecimiento

C-HPI-03 → C-HPI-05
→ reutilización no exige interrupción previa

C-HPI-04 → C-HPI-07
→ comparación puede recibir materiales ya disponibles

C-HPI-09 → otras capacidades
→ condición transversal, no prerrequisito fijo

C-HPI-10 → otras capacidades
→ condición transversal, no prerrequisito fijo
~~~

---

# 21. Ausencia de circularidad

El grafo contiene:

~~~text
2 aristas directas
0 aristas transitivas adicionales
0 ciclos
~~~

Por tanto:

~~~text
dependencia circular
→ NO IDENTIFICADA
~~~

---

# 22. Ausencia de nuevas capacidades derivadas

El análisis no demuestra la necesidad de introducir una undécima capacidad.

En particular, no se derivan como capacidades autónomas:

- almacenamiento;
- repositorio;
- navegación;
- búsqueda;
- contexto como entidad;
- relación como entidad;
- sesión;
- workspace;
- versionado;
- identidad;
- selección;
- provenance general.

Algunos podrán resultar mecanismos o estructuras necesarias en etapas técnicas posteriores.

Eso no los convierte en capacidades funcionales del horizonte.

Resultado:

~~~text
mapa de capacidades
→ permanece C-HPI-01…10
~~~

---

# 23. Condición de estabilidad del mapa

El mapa podrá revisarse si evidencia posterior demuestra que:

- alguna de D-HPI-01/02 puede eliminarse;
- una capacidad actualmente independiente exige otra;
- aparece dependencia transitiva relevante;
- aparece circularidad;
- una dependencia funcional requiere una capacidad no identificada.

Hasta entonces:

~~~text
mapa de dependencias
→ ESTABLE EN SU ALCANCE
~~~

---

# 24. Resultado de CONV-HPI-02

~~~text
capacidades
→ 10

dependencias directas
→ 2

dependencias transitivas adicionales
→ 0

capacidades dependientes
→ 1
  C-HPI-05

capacidades sin dependencia interna necesaria
→ 9

ciclos
→ 0

nuevas capacidades derivadas
→ 0

CONV-HPI-02
→ CERRADA
~~~

---

# 25. Siguiente actuación legítima

La secuencia de Manual 17 continúa:

~~~text
alcance
✓
↓
capacidades
✓
↓
dependencias
✓
↓
CRITERIOS DE FINALIZACIÓN
~~~

Se deriva:

> **CONV-HPI-03 — criterios de finalización de C-HPI-01…C-HPI-10 y del conjunto integrado.**

Deberá determinar:

- cuándo cada capacidad está suficientemente realizada;
- qué evidencia permite comprobarlo;
- cómo se verifican las dos dependencias;
- cómo se preservan C-HPI-09/10 transversalmente;
- cómo se conecta el conjunto con `CF-HPI-01`.

No deberá todavía:

- evaluar formalmente el estado actual;
- declarar huecos;
- priorizar;
- formular hitos;
- construir;
- abrir Architecture o Implementation.


---

# 26. Resultado de CONV-HPI-03

La actuación [103](103-CONV-HPI-03_CRITERIOS_DE_FINALIZACION.md) completa el siguiente paso del relevo.

Resultado:

~~~text
criterios individuales
→ 30

criterios de dependencias
→ 2

criterios globales
→ 6

CF-HPI-01
→ conservado y operacionalizado

CONV-HPI-03
→ CERRADA
~~~

No se ha evaluado todavía el estado material actual.

Siguiente actuación:

~~~text
CONV-HPI-04
→ evaluación del estado material actual
~~~


---

# 27. Resultado de la evaluación material posterior

[104](104-CONV-HPI-04_ESTADO_MATERIAL_ACTUAL.md) conserva el mapa de dos dependencias, pero clasifica ambas como:

~~~text
D-HPI-01
→ PARCIALMENTE SATISFECHA

D-HPI-02
→ PARCIALMENTE SATISFECHA
~~~

La causa no altera el grafo: la relación antecedente→resultado existe en el recorrido UI, pero no queda materialmente preservada con suficiencia para cerrar C-HPI-05.
