# CONV-HPI-03 — Criterios de finalización de H-PROJ-INT-01

**Fecha:** 18/11/2026  
**Estado:** CERRADA — criterios individuales, dependenciales y globales determinados; estado material actual todavía no evaluado.  
**Horizonte:** `H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual`.  
**Precedente:** `102-CONV-HPI-02_MAPA_MINIMO_DE_DEPENDENCIAS.md`.

---

# 1. Objeto

Esta actuación ejecuta únicamente el cuarto paso del relevo de Manual 17 §13.1.5:

~~~text
horizonte aceptado
↓
alcance
↓
capacidades
↓
dependencias
↓
CRITERIOS DE FINALIZACIÓN
~~~

Su función consiste en determinar:

- cuándo cada `C-HPI-01…10` puede considerarse suficientemente realizada;
- qué evidencia observable puede demostrarlo;
- cómo se verifican `D-HPI-01/02`;
- cómo se preservan transversalmente `C-HPI-09/10`;
- cuándo el conjunto integrado satisface `CF-HPI-01`.

No evalúa todavía:

- si el producto actual satisface los criterios;
- qué huecos existen;
- prioridades;
- hitos;
- roadmap;
- Architecture;
- Realization;
- Implementation.

---

# 2. Regla general

Un criterio de finalización debe:

~~~text
ser observable
+
ser falsable
+
pertenecer al alcance
+
no presuponer arquitectura
+
impedir falsos positivos relevantes
~~~

No basta con:

- que exista código;
- que exista una pantalla;
- que exista un test aislado;
- que una función pueda ejecutarse fuera del recorrido;
- que un mecanismo técnico sugiera la capacidad.

Por tanto:

~~~text
artefacto existente
≠
capacidad suficientemente realizada

test existente
≠
criterio necesariamente satisfecho
~~~

---

# 3. Tipos de criterios

Se distinguen tres niveles:

~~~text
CF-HPI-Cxx
→ criterios individuales de capacidad

CF-HPI-Dxx
→ criterios de dependencias funcionales

CF-HPI-Gxx
→ criterios globales de integración
~~~

El horizonte sólo podrá cerrarse cuando:

~~~text
criterios individuales
+
dependencias
+
criterios globales
+
CF-HPI-01
→ SATISFECHOS
~~~

---

# 4. C-HPI-01 — Establecer un trabajo textual actual

## CF-HPI-C01-A — existencia inequívoca

La persona puede iniciar un trabajo nuevo o seleccionar/retomar uno existente y reconocer inequívocamente cuál queda como trabajo actual.

## CF-HPI-C01-B — persistencia de identidad operacional

Mientras la actividad continúa, las operaciones ordinarias pertinentes no hacen ambiguo qué trabajo es el actual.

### Falsadores

- dos trabajos pueden quedar simultáneamente “actuales” sin distinción suficiente;
- una operación auxiliar cambia implícitamente el trabajo actual;
- el contexto activo sólo puede inferirse externamente.

Resultado de capacidad:

~~~text
C-HPI-01
→ suficientemente realizada
si C01-A + C01-B están satisfechos
~~~

---

# 5. C-HPI-02 — Desarrollar el trabajo actual

## CF-HPI-C02-A — modificación humana efectiva

La persona puede producir una diferencia textual observable sobre el trabajo actual.

## CF-HPI-C02-B — continuidad del resultado como trabajo

La diferencia producida puede continuar participando como el mismo trabajo o como continuación/revisión reconocible dentro del recorrido, sin reducirse a una salida efímera sin continuidad.

### Falsadores

- sólo puede leerse, no modificarse;
- el resultado producido no puede volver a participar en el trabajo;
- la modificación se aplica a otro material distinto sin que la persona pueda reconocerlo.

Resultado:

~~~text
C-HPI-02
→ suficientemente realizada
si C02-A + C02-B están satisfechos
~~~

---

# 6. C-HPI-03 — Conservar y reanudar el mismo trabajo

## CF-HPI-C03-A — supervivencia a interrupción

Tras una interrupción real del recorrido, el trabajo puede volver a estar disponible.

## CF-HPI-C03-B — identidad suficiente tras reanudación

La persona puede reconocer que retoma el mismo trabajo pertinente y no una reconstrucción manual equivalente.

## CF-HPI-C03-C — contexto mínimo suficiente

La reanudación conserva suficiente contexto para continuar sin reconstruir desde cero aquello que sigue siendo pertinente.

### Falsadores

- sólo persiste el texto pero se pierde contexto necesario;
- la reanudación exige copiar manualmente el contenido anterior;
- el sistema crea un nuevo trabajo indistinguible del anterior sin continuidad reconocible.

Resultado:

~~~text
C-HPI-03
→ suficientemente realizada
si C03-A + C03-B + C03-C están satisfechos
~~~

---

# 7. C-HPI-04 — Recuperar antecedentes pertinentes

## CF-HPI-C04-A — disponibilidad de pluralidad

Existe al menos más de un material/estado anterior disponible para que la recuperación no sea una mera lectura del único elemento existente.

## CF-HPI-C04-B — selección humana

La persona puede localizar y seleccionar un antecedente pertinente sin que el sistema decida por ella cuál debe usar.

## CF-HPI-C04-C — coexistencia con el trabajo actual

El antecedente recuperado puede hacerse disponible sin sustituir indebidamente el trabajo actual.

### Falsadores

- recuperar antecedente destruye o reemplaza el trabajo actual;
- el sistema sólo permite el material más reciente;
- la selección pertinente queda determinada automáticamente.

Resultado:

~~~text
C-HPI-04
→ suficientemente realizada
si C04-A + C04-B + C04-C están satisfechos
~~~

---

# 8. C-HPI-05 — Reutilizar antecedentes en continuación o revisión

## CF-HPI-C05-A — antecedente efectivo

La continuación/revisión utiliza un antecedente recuperado de forma que éste participe efectivamente en la actividad posterior.

## CF-HPI-C05-B — nuevo resultado

La actividad produce una continuación o revisión textual diferenciable del antecedente.

## CF-HPI-C05-C — continuidad reconocible

Cuando sea pertinente para preservar posibilidades o comprensión del recorrido, puede reconocerse que el resultado posterior procede de una actividad en la que intervino ese antecedente.

### Falsadores

- el antecedente sólo puede consultarse pero no participar;
- la “reutilización” consiste en sustituir el trabajo por el antecedente;
- no existe resultado posterior;
- la relación necesaria sólo puede reconstruirse externamente.

Resultado:

~~~text
C-HPI-05
→ suficientemente realizada
si C05-A + C05-B + C05-C están satisfechos
~~~

---

# 9. C-HPI-06 — Captura contextual

## CF-HPI-C06-A — captura sin abandono innecesario

Durante el trabajo actual, la persona puede conservar una aportación emergente con una interrupción operativa suficientemente reducida.

## CF-HPI-C06-B — asociación contextual suficiente

La captura queda suficientemente asociada al contexto pertinente para poder recuperarla sin reconstruir externamente de qué actividad procedía.

## CF-HPI-C06-C — separación funcional

La captura no se convierte automáticamente en contenido del trabajo principal.

### Falsadores

- capturar obliga a abandonar el trabajo y reconstruir después el contexto;
- la captura queda completamente huérfana;
- la captura modifica automáticamente el texto principal.

Resultado:

~~~text
C-HPI-06
→ suficientemente realizada
si C06-A + C06-B + C06-C están satisfechos
~~~

---

# 10. C-HPI-07 — Comparación contextual

## CF-HPI-C07-A — dos materiales distinguibles

La comparación presenta dos materiales relacionados de forma suficientemente simultánea y claramente distinguible.

## CF-HPI-C07-B — contexto de actividad conservado

La persona puede reconocer respecto de qué trabajo o necesidad está realizando la comparación sin reconstrucción externa relevante.

## CF-HPI-C07-C — decisión humana preservada

La plataforma no determina automáticamente qué diferencia es relevante ni qué material debe prevalecer.

### Falsadores

- A/B no se distinguen;
- hay que abandonar el trabajo y reconstruir manualmente el propósito de la comparación;
- la herramienta impone merge, prevalencia o relevancia.

Resultado:

~~~text
C-HPI-07
→ suficientemente realizada
si C07-A + C07-B + C07-C están satisfechos
~~~

---

# 11. C-HPI-08 — Apoyo IA separado y contextual

## CF-HPI-C08-A — contexto pertinente de entrada

El apoyo IA puede solicitarse respecto de un trabajo o necesidad actual suficientemente identificable.

## CF-HPI-C08-B — separación obra/apoyo

La salida de IA permanece diferenciada del contenido principal salvo decisión humana posterior.

## CF-HPI-C08-C — procedencia visible suficiente

La persona puede reconocer que la aportación procede de apoyo IA.

## CF-HPI-C08-D — control de incorporación

La plataforma no incorpora automáticamente el apoyo al trabajo cuando esa decisión siga correspondiendo a la persona.

### Falsadores

- apoyo sin relación reconocible con el trabajo;
- salida IA indistinguible de contenido humano;
- incorporación automática a la obra;
- pérdida de capacidad de ignorar el apoyo.

Resultado:

~~~text
C-HPI-08
→ suficientemente realizada
si C08-A + C08-B + C08-C + C08-D están satisfechos
~~~

---

# 12. C-HPI-09 — Determinación humana efectiva

C-HPI-09 es transversal y sólo se evalúa donde exista una decisión relevante que corresponda a la persona.

## CF-HPI-C09-A — alternativas efectivamente disponibles

Cuando existan alternativas pertinentes todavía abiertas, la interfaz/recorrido no debe eliminar de hecho la posibilidad de elección humana.

## CF-HPI-C09-B — ausencia de cierre automático indebido

El sistema no resuelve automáticamente una decisión protegida sin una delegación suficientemente establecida.

## CF-HPI-C09-C — ejercicio observable

Debe existir al menos un caso representativo del horizonte donde la persona ejerza una decisión protegida y el resultado dependa de ella.

### Aplicaciones mínimas a contrastar

- selección de antecedente;
- interpretación/uso de diferencia;
- incorporación o rechazo de apoyo IA;
- constitución de continuación/revisión cuando corresponda.

Resultado:

~~~text
C-HPI-09
→ suficientemente realizada
si no existe contraejemplo conocido
en decisiones protegidas del recorrido
y C09-A/B/C están satisfechos
~~~

---

# 13. C-HPI-10 — Preservación de posibilidades y distinción suficiente

C-HPI-10 también es transversal.

## CF-HPI-C10-A — preservación de antecedentes pertinentes

Una transformación o continuación no destruye indebidamente antecedentes que sigan siendo necesarios para posibilidades posteriores.

## CF-HPI-C10-B — separación de papeles

Cuando sea pertinente, la persona puede distinguir:

- trabajo principal;
- antecedente;
- captura;
- apoyo IA;
- materiales comparados.

## CF-HPI-C10-C — procedencia mínima suficiente

Cuando una decisión o continuidad dependa de saber de dónde procede un elemento, esa procedencia es suficientemente reconocible.

## CF-HPI-C10-D — no sobrepreservación obligatoria

La capacidad puede considerarse satisfecha sin conservar información que haya dejado de ser pertinente; no se exige historial universal.

### Falsadores

- una continuación destruye el único antecedente todavía necesario;
- ayuda IA queda confundida con obra;
- no puede distinguirse qué material participó en una comparación;
- se exige conservar todo indiscriminadamente para poder cerrar el criterio.

Resultado:

~~~text
C-HPI-10
→ suficientemente realizada
si C10-A/B/C están satisfechos
en los casos pertinentes
y C10-D preserva el alcance reducido
~~~

---

# 14. Criterios de dependencias funcionales

El mapa 102 contiene dos dependencias directas.

## CF-HPI-D01 — C-HPI-04 → C-HPI-05

Para declarar satisfecha D-HPI-01 deberá existir al menos una evidencia donde:

~~~text
antecedente
→ recuperado mediante C-HPI-04
→ seleccionado
→ participa efectivamente en C-HPI-05
→ produce continuación/revisión
~~~

No basta con demostrar C-HPI-04 y C-HPI-05 en casos aislados sin conexión.

## CF-HPI-D02 — C-HPI-02 → C-HPI-05

Debe existir al menos una evidencia donde:

~~~text
antecedente recuperado
+
actividad humana de desarrollo textual
→ continuación/revisión
~~~

y la diferencia producida satisfaga C-HPI-02 dentro de la ejecución de C-HPI-05.

Resultado de dependencias:

~~~text
D-HPI-01/02
→ satisfechas
sólo si la relación funcional
se demuestra en el mismo recorrido pertinente
~~~

---

# 15. Criterios globales de integración

Los criterios individuales no bastan.

Pueden satisfacerse diez capacidades en experiencias separadas y seguir existiendo una colección de realizaciones.

Se establecen seis criterios globales irreducibles.

## CF-HPI-G01 — punto ordinario común

El recorrido integrado puede iniciarse desde el punto ordinario de entrada del producto.

No requiere:

- harness;
- fixture especial;
- props de prueba;
- JSON manual;
- navegación obligatoria por una Realization histórica.

## CF-HPI-G02 — continuidad de contexto operativo

A través de las operaciones principales y auxiliares, la persona puede reconocer cuál es el trabajo actual y qué elementos participan en él sin reconstrucción externa relevante.

## CF-HPI-G03 — trayectoria longitudinal completa

Debe existir una ejecución observable:

~~~text
crear/retomar
↓
desarrollar
↓
conservar/interrumpir
↓
reanudar
↓
recuperar antecedente
↓
reutilizar
↓
producir resultado posterior
↓
conservar
↓
volver a reanudar
~~~

## CF-HPI-G04 — contextualización de auxiliares

En un recorrido donde sean pertinentes, captura, comparación y apoyo IA pueden entrar sin romper la continuidad del trabajo actual.

No se exige usar las tres en toda ejecución.

Sí se exige que ninguna permanezca necesariamente como isla desconectada.

## CF-HPI-G05 — compatibilidad transversal

La integración del recorrido no introduce contraejemplos a:

~~~text
C-HPI-09
→ determinación humana

C-HPI-10
→ preservación/distinción
~~~

## CF-HPI-G06 — ausencia de reconstrucción externa relevante

La persona no necesita usar fuera del producto un procedimiento material para:

- recordar qué trabajo está activo;
- trasladar manualmente contexto esencial;
- reconstruir qué antecedente intervino;
- distinguir obra y apoyo;
- recomponer continuidad tras interrupción.

Una anotación humana incidental o una decisión intelectual no constituye por sí misma reconstrucción externa.

---

# 16. Relación con CF-HPI-01 del gate constitutivo

El criterio global ya aceptado en 99 permanece vigente.

La nueva descomposición establece:

| CF-HPI-01 original | Cobertura en CONV-HPI-03 |
| --- | --- |
| A trabajo actual inequívoco | C01 + G02 |
| B continuidad tras interrupción | C03 + G03 |
| C antecedentes recuperables | C04 |
| D uso de antecedente reconocible | C05 + C10 + D01/D02 |
| E operaciones auxiliares contextuales | C06/C07/C08 + G04 |
| F ayudas no incorporadas automáticamente | C08 + C10 |
| G determinación humana | C09 + G05 |
| H posibilidades anteriores preservadas | C10 + G05 |
| I recorrido desde entrada ordinaria | G01 |
| J sin fixtures/JSON/harnesses | G01 + G06 |

Resultado:

~~~text
CONV-HPI-03
→ no sustituye CF-HPI-01
→ lo operacionaliza
~~~

---

# 17. Condición general de evidencia

La evidencia futura podrá incluir:

- pruebas automatizadas;
- inspección de comportamiento;
- recorrido humano;
- persistencia verificada tras remontaje/reinicio;
- evidencia de UI;
- inspección de datos;
- combinación de las anteriores.

No se exige:

~~~text
1 criterio
=
1 test unitario
~~~

Pero toda evidencia deberá ser:

~~~text
observable
+
reproducible
+
atribuible al criterio
+
suficiente para falsar un cumplimiento aparente
~~~

---

# 18. Regla de no equivalencia entre aislamiento e integración

Queda prohibida la inferencia:

~~~text
C-HPI-01…10
→ satisfechas aisladamente
por distintas Realizations
↓
H-PROJ-INT-01
→ satisfecho
~~~

La conclusión válida requiere:

~~~text
criterios individuales satisfechos
+
D-HPI-01/02 satisfechas
+
G01…G06 satisfechos
+
CF-HPI-01 satisfecho
~~~

---

# 19. Formulación compacta de cierre

H-PROJ-INT-01 podrá considerarse suficientemente realizado cuando:

> Las diez capacidades `C-HPI-01…10` satisfagan sus criterios observables dentro del alcance aceptado; las dependencias `D-HPI-01/02` estén demostradas en ejecución real y no sólo por coexistencia; exista desde el punto ordinario de entrada una trayectoria longitudinal completa y reanudable que integre trabajo actual, desarrollo, persistencia, recuperación y reutilización; las operaciones auxiliares justificadas puedan participar contextualmente cuando proceda; la integración preserve determinación humana y posibilidades/distinciones pertinentes; y no exista reconstrucción externa relevante necesaria para mantener la continuidad del recorrido.

---

# 20. Regla contra falsos positivos globales

No podrá declararse cerrado el horizonte si ocurre cualquiera de estos casos:

1. todas las capacidades existen, pero sólo en pantallas/Realizations desconectadas;
2. crear y retomar usan contextos incompatibles;
3. la persistencia recupera texto pero no el contexto necesario;
4. recuperar antecedente obliga a sustituir el trabajo actual;
5. C-HPI-05 se demuestra sin relación efectiva con C-HPI-04 o C-HPI-02;
6. captura/comparación/IA requieren reconstrucción manual de contexto;
7. IA o comparación cierran indebidamente decisiones humanas;
8. la integración destruye antecedentes todavía pertinentes;
9. el recorrido completo sólo funciona mediante harness, fixture, props especiales o JSON manual;
10. el recorrido no puede volver a reanudarse después de producir el resultado posterior.

---

# 21. Matriz resumen de criterios

| Capacidad | Criterios |
| --- | --- |
| C-HPI-01 | C01-A, C01-B |
| C-HPI-02 | C02-A, C02-B |
| C-HPI-03 | C03-A, C03-B, C03-C |
| C-HPI-04 | C04-A, C04-B, C04-C |
| C-HPI-05 | C05-A, C05-B, C05-C |
| C-HPI-06 | C06-A, C06-B, C06-C |
| C-HPI-07 | C07-A, C07-B, C07-C |
| C-HPI-08 | C08-A, C08-B, C08-C, C08-D |
| C-HPI-09 | C09-A, C09-B, C09-C |
| C-HPI-10 | C10-A, C10-B, C10-C, C10-D |

Conteo:

~~~text
criterios individuales
→ 31

criterios de dependencias
→ 2

criterios globales
→ 6

criterio constitutivo superior
→ CF-HPI-01
~~~

El número no constituye una métrica de progreso ni una puntuación.

---

# 22. Qué no se decide todavía

Esta actuación no determina:

~~~text
qué criterios ya están satisfechos
→ NO EVALUADO

qué criterios están parciales
→ NO EVALUADO

qué criterios fallan
→ NO EVALUADO

qué huecos materiales existen
→ NO DERIVADOS

qué debe construirse primero
→ NO DETERMINADO

Architecture
→ NO DERIVADA

Implementation
→ NO DERIVADA
~~~

---

# 23. Condición de estabilidad de los criterios

Los criterios podrán revisarse si evidencia posterior demuestra que:

- uno permite falsos positivos;
- uno combina dos exigencias realmente independientes;
- uno exige algo fuera del alcance;
- una dependencia cambia;
- aparece una capacidad nueva legítimamente derivada;
- el horizonte cambia formalmente.

Hasta entonces:

~~~text
criterios de finalización
→ ESTABLES EN SU ALCANCE
~~~

---

# 24. Resultado de CONV-HPI-03

~~~text
capacidades
→ 10

criterios individuales
→ 31

dependencias verificables
→ 2

criterios globales
→ 6

CF-HPI-01
→ conservado y operacionalizado

estado actual
→ TODAVÍA NO EVALUADO

huecos
→ TODAVÍA NO DERIVADOS

CONV-HPI-03
→ CERRADA
~~~

---

# 25. Siguiente actuación legítima

La secuencia continúa:

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
criterios de finalización
✓
↓
ESTADO ACTUAL
~~~

Se deriva:

> **CONV-HPI-04 — evaluación del estado material actual de C-HPI-01…10, D-HPI-01/02 y G01…G06 frente a los criterios de finalización.**

Sólo después de esa evaluación podrán derivarse huecos reales.

CONV-HPI-04 deberá distinguir:

~~~text
SATISFECHO
PARCIALMENTE SATISFECHO
NO SATISFECHO
NO DETERMINADO
~~~

con evidencia concreta para cada clasificación.

No deberá convertir automáticamente un criterio no satisfecho en actuación de implementación; primero deberán derivarse los huecos y después priorizarse.
