# CONV-HPI-06 — Prioridad de huecos y primer hito verificable de H-PROJ-INT-01

**Fecha:** 18/11/2026  
**Estado:** CERRADA — prioridad determinada y primer hito verificable formulado; roadmap y actuaciones todavía no derivados.  
**Horizonte:** `H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual`.  
**Precedente:** `105-CONV-HPI-05_MAPA_MINIMO_DE_HUECOS.md`.

---

# 1. Objeto

Esta actuación ejecuta los pasos siguientes del relevo de Manual 17 §13.1.5 hasta el primer hito:

~~~text
horizonte aceptado
↓
alcance
✓
capacidades
✓
dependencias
✓
criterios
✓
estado actual
✓
huecos
✓
↓
PRIORIDADES
↓
PRIMER HITO VERIFICABLE
~~~

Debe decidir:

1. cuál de `GAP-HPI-01/02` debe tratarse primero;
2. por qué ese orden minimiza trabajo desechable;
3. qué cambio de estado mínimo debe demostrar el primer hito.

No determina todavía:

- arquitectura;
- mecanismo técnico;
- archivos;
- roadmap completo;
- actuaciones de implementación.

---

# 2. Huecos comparados

## GAP-HPI-01

> Ausencia de un contexto operativo común y suficientemente persistente que identifique el trabajo textual actual y permita asociar a él los elementos y operaciones pertinentes del recorrido ordinario.

Afecta principalmente:

~~~text
C01-A
C01-B
C04-C
C06-B
C07-B
C10-C [parte]

G01
G02
G04
G06 [parte]
~~~

## GAP-HPI-02

> Ausencia de una continuidad material suficientemente reconocible entre un antecedente recuperado y el resultado posterior producido mediante su reutilización.

Afecta principalmente:

~~~text
C05-A
C05-C
C10-C [parte]

D01
D02

G03
G06 [parte]
~~~

---

# 3. Criterios de prioridad

La prioridad no se decide por:

- numeración;
- cantidad bruta de criterios;
- facilidad técnica aparente;
- cercanía a un archivo existente.

Se comparan cinco propiedades:

~~~text
PR-01 → bloqueo global
PR-02 → habilitación de evidencia posterior
PR-03 → riesgo de retrabajo
PR-04 → aprovechamiento de patrimonio existente
PR-05 → verificabilidad de un cambio material autónomo
~~~

---

# 4. PR-01 — Bloqueo global

## GAP-HPI-01

Bloquea directamente la existencia de:

- un punto operativo común;
- continuidad de contexto;
- contextualización coherente de auxiliares;
- parte de la ausencia de reconstrucción externa.

Sin él, incluso capacidades ya satisfechas como IA o persistencia siguen operando bajo contextos locales.

## GAP-HPI-02

Bloquea principalmente:

- reutilización reconocible;
- las dos dependencias D01/D02;
- parte de la trayectoria longitudinal y de G06.

Resultado:

~~~text
PR-01
→ favorece GAP-HPI-01
~~~

No porque tenga “más criterios”, sino porque afecta al soporte común del recorrido.

---

# 5. PR-02 — Habilitación de evidencia posterior

Para cerrar GAP-HPI-02 debe poder afirmarse con claridad:

~~~text
este antecedente
+
este trabajo actual
↓
este resultado posterior
~~~

La relación antecedente→resultado puede modelarse de forma aislada sin GAP-HPI-01.

Pero para demostrarla dentro del horizonte integrado se necesita saber inequívocamente cuál es el trabajo actual y qué contexto permanece durante recuperación y continuación.

Por tanto:

~~~text
GAP-HPI-01
→ no es dependencia lógica estricta de GAP-HPI-02

pero

GAP-HPI-01 cerrado
→ mejora y estabiliza
  la evidencia integrada de GAP-HPI-02
~~~

Resultado:

~~~text
PR-02
→ favorece GAP-HPI-01
~~~

---

# 6. PR-03 — Riesgo de retrabajo

Si se resuelve primero GAP-HPI-02 sobre el estado actual, la relación podría quedar vinculada a:

- `ordinary.materials`;
- `selectedMaterialId`;
- `ru2m1.previous`;
- otra representación local.

Después, al cerrar GAP-HPI-01, podría cambiar la forma operacional en que se identifica el trabajo actual y se asocian elementos al contexto.

Eso podría obligar a adaptar la solución de antecedente→resultado.

En sentido inverso:

- cerrar primero GAP-HPI-01 no exige decidir cómo representar causalmente antecedente→resultado;
- GAP-HPI-02 puede después apoyarse en el contexto ya estabilizado.

Resultado:

~~~text
PR-03
→ favorece GAP-HPI-01
~~~

---

# 7. PR-04 — Patrimonio reutilizable

Ya existen fragmentos materiales útiles para GAP-HPI-01:

~~~text
PostV1 current
→ trabajo actual explícito + persistencia

AiSupport.materialId
→ asociación auxiliar a material

ordinary.materials
→ identidad mínima de materiales

selectedMaterialId
→ selección humana de antecedente
~~~

También existen precedentes para GAP-HPI-02, pero la relación seleccionada no se conserva después de constituir el resultado.

El patrimonio actual permite ensayar el cierre de GAP-HPI-01 sin inventar una plataforma nueva desde cero.

Resultado:

~~~text
PR-04
→ favorece GAP-HPI-01
~~~

---

# 8. PR-05 — Cambio material autónomo

GAP-HPI-01 admite un hito autónomo claramente observable:

~~~text
antes
→ múltiples contextos locales
→ trabajo actual no común
→ auxiliares requieren reconstrucción contextual

después
→ trabajo actual común reconocible
→ persiste
→ antecedentes/auxiliares pueden operar respecto de él
~~~

Ese cambio puede comprobarse aunque GAP-HPI-02 permanezca deliberadamente abierto.

Resultado:

~~~text
PR-05
→ GAP-HPI-01 es verificable como primer hito
~~~

---

# 9. Decisión de prioridad

Resultado conjunto:

| Criterio | GAP-HPI-01 | GAP-HPI-02 |
| --- | --- | --- |
| PR-01 bloqueo global | preferente | posterior |
| PR-02 habilitación de evidencia | preferente | se beneficia de 01 |
| PR-03 riesgo de retrabajo | menor si va primero | mayor si se fija antes |
| PR-04 patrimonio reutilizable | fuerte | parcial |
| PR-05 hito autónomo | sí | sí |

Se determina:

~~~text
PRIORIDAD 1
→ GAP-HPI-01

PRIORIDAD 2
→ GAP-HPI-02
~~~

Esto no introduce dependencia funcional entre ambos.

Es un **orden de convergencia**, no una nueva arista causal.

---

# 10. Riesgo de una prioridad equivocada

La prioridad deberá revisarse si durante la siguiente reducción aparece evidencia de que:

1. cerrar GAP-HPI-01 exige necesariamente decidir primero la relación antecedente→resultado;
2. el contexto común no puede verificarse sin una propiedad perteneciente exclusivamente a GAP-HPI-02;
3. el mecanismo mínimo viable para GAP-HPI-01 produciría retrabajo mayor que el orden inverso.

Mientras no aparezca esa evidencia:

~~~text
orden vigente
→ GAP-HPI-01
→ GAP-HPI-02
~~~

---

# 11. Qué debe demostrar el primer hito

El primer hito no debe cerrar H-PROJ-INT-01.

Debe demostrar únicamente que GAP-HPI-01 ha dejado de existir en el alcance necesario para continuar la convergencia.

Se formula:

> **HITO-HPI-01 — Contexto operativo común verificable del trabajo textual actual.**

Resultado exigido:

> Desde el producto ordinario, una persona puede establecer o retomar un trabajo textual actual inequívoco; interrumpir y reanudar conservando esa referencia; recuperar un antecedente sin sustituir el trabajo; y utilizar captura, comparación y apoyo IA respecto del mismo contexto operativo cuando proceda, sin reconstruir externamente cuál es el trabajo al que pertenecen.

---

# 12. Alcance del hito

HITO-HPI-01 incluye únicamente:

~~~text
trabajo actual común
+
persistencia de su identidad operacional
+
coexistencia con antecedente seleccionado
+
contextualización de captura
+
contextualización de comparación
+
contextualización de apoyo IA
+
continuidad tras interrupción
~~~

No incluye todavía:

~~~text
resultado posterior
→ conserva antecedente utilizado
~~~

Ese requisito pertenece a GAP-HPI-02.

---

# 13. Criterios de HITO-HPI-01

Se fijan antes de observar cualquier futura solución.

## MHPI-01 — Trabajo actual inequívoco

Desde la entrada ordinaria existe una acción practicable para establecer o retomar un trabajo textual y la persona puede identificar cuál queda como trabajo actual.

## MHPI-02 — Identidad operacional persistente

Tras una interrupción/remontaje relevante, el producto conserva suficiente información para reconocer el mismo trabajo actual sin reconstrucción manual.

## MHPI-03 — Antecedente coexistente

La persona puede seleccionar un antecedente pertinente mientras el trabajo actual sigue inequívocamente activo; seleccionar el antecedente no sustituye implícitamente el trabajo.

## MHPI-04 — Captura contextual

Una captura realizada durante el trabajo queda materialmente asociada al contexto del trabajo actual y esa asociación puede volver a reconocerse cuando sea pertinente.

## MHPI-05 — Comparación contextual

La persona puede comparar materiales pertinentes conservando de forma suficiente qué trabajo/contexto motiva la comparación, sin que la comparación modifique automáticamente el trabajo.

## MHPI-06 — Apoyo IA bajo contexto común

El apoyo IA puede solicitarse respecto del mismo trabajo actual reconocido por el resto del recorrido, permanece separado de la obra y conserva procedencia suficiente.

## MHPI-07 — Continuidad operativa

Pasar por antecedente, captura, comparación o IA no obliga a reconstruir externamente cuál es el trabajo actual ni provoca un cambio implícito del mismo.

## MHPI-08 — Entrada ordinaria y ausencia de artificios

La evidencia es practicable desde el producto ordinario y no depende necesariamente de:

- fixtures;
- props especiales;
- JSON manual;
- harness aislado;
- navegación obligatoria por una Realization no accesible desde el producto.

---

# 14. Regla de satisfacción del hito

Se fija:

~~~text
MHPI-01…MHPI-08
→ 8/8 SATISFECHOS
=
HITO-HPI-01 SATISFECHO

< 8/8
=
HITO-HPI-01 NO SATISFECHO
~~~

No se utiliza puntuación parcial para declarar el hito.

Un criterio puede quedar técnicamente demostrado y todavía requerir evidencia humana si su naturaleza lo exige, pero ausencia de evidencia no cuenta como PASS.

---

# 15. Control negativo

La futura validación deberá incluir al menos un caso que demuestre que no basta con tener varias asociaciones locales independientes.

Control:

~~~text
dos trabajos materiales distintos
→ W1 y W2

persona establece W1 como actual
→ captura / comparación / IA
  se contextualizan respecto de W1

persona cambia explícitamente a W2
→ nuevas operaciones se contextualizan respecto de W2

elementos de W1
→ no aparecen como pertenecientes a W2
  por coincidencia o estado global residual
~~~

Este control discrimina:

~~~text
contexto común real
≠
hardcode
≠
"último material creado"
≠
selecciones locales inconexas
~~~

---

# 16. Variación mínima

Además del control negativo, deberá existir una variación donde:

~~~text
trabajo actual
→ cambia por decisión humana

antecedente seleccionado
→ distinto

operación auxiliar
→ distinta
~~~

y el contexto resultante siga siendo coherente.

La finalidad es refutar una solución acoplada a un único recorrido fijo.

---

# 17. Relación del hito con criterios de 103

Si HITO-HPI-01 queda satisfecho, deberá existir base para reevaluar como satisfechos o materialmente mejorados:

~~~text
C01-A
C01-B
C04-C
C06-B
C07-B
C10-C [parte]

G01
G02
G04
G06 [parte]
~~~

No autoriza declarar automáticamente:

~~~text
C05-A/C
D01/D02
G03
G06 completo
CF-HPI-01
~~~

porque GAP-HPI-02 seguirá abierto.

---

# 18. Falsadores del hito

HITO-HPI-01 falla si ocurre cualquiera de estos casos:

1. existen varias nociones incompatibles de trabajo actual sin relación suficiente;
2. reanudar recupera contenido pero no la identidad operacional necesaria;
3. seleccionar antecedente reemplaza implícitamente el trabajo actual;
4. captura se conserva sin poder reconocer a qué trabajo pertenece;
5. comparación obliga a recordar externamente qué trabajo la motivó;
6. IA usa otra selección independiente sin relación suficiente con el trabajo actual común;
7. abrir/cerrar una operación auxiliar cambia el trabajo actual sin decisión humana;
8. el recorrido sólo puede demostrarse en harness o mediante datos especiales no ordinarios;
9. el control W1/W2 mezcla asociaciones entre trabajos.

---

# 19. Qué no presupone HITO-HPI-01

No prescribe:

- tipo `WorkContext`;
- `currentWorkId`;
- React Context;
- reducer;
- store;
- base de datos;
- una clave concreta de localStorage;
- URL;
- router;
- componente contenedor;
- migración de todas las realizaciones;
- modelo de dominio final.

Cualquiera de esas opciones deberá justificarse, si llega a ser necesaria, en cuerpos posteriores.

---

# 20. Estado de GAP-HPI-02 durante el primer hito

GAP-HPI-02 permanece expresamente abierto.

Durante HITO-HPI-01 será suficiente que:

- el antecedente pueda coexistir con el trabajo actual;
- su selección sea humana;
- no destruya el contexto.

No se exigirá todavía que un resultado posterior persista una relación antecedente→resultado.

Esto evita introducir subrepticiamente el segundo hueco dentro del primero.

---

# 21. Resultado de CONV-HPI-06

~~~text
prioridad 1
→ GAP-HPI-01

prioridad 2
→ GAP-HPI-02

primer hito
→ HITO-HPI-01
→ Contexto operativo común verificable

criterios de hito
→ MHPI-01…MHPI-08

regla de satisfacción
→ 8/8

GAP-HPI-02
→ permanece abierto

roadmap
→ TODAVÍA NO FORMULADO

actuaciones
→ TODAVÍA NO DERIVADAS

Architecture
→ NO DERIVADA

Implementation
→ NO DERIVADA

CONV-HPI-06
→ CERRADA
~~~

---

# 22. Siguiente actuación legítima

La secuencia continúa:

~~~text
prioridades
✓
↓
primer hito
✓
↓
ROADMAP
↓
ACTUACIONES
~~~

Se deriva:

> **CONV-HPI-07 — roadmap mínimo para alcanzar HITO-HPI-01 y determinar la primera actuación justificable.**

Deberá:

1. descomponer HITO-HPI-01 sólo hasta actuaciones necesarias;
2. decidir si antes de realizar hace falta reducción/diseño realizativo o Architecture;
3. reutilizar patrimonio existente cuando sea suficiente;
4. mantener GAP-HPI-02 fuera del primer hito;
5. fijar tests/evidencias antes de cambiar producción cuando proceda.

No deberá asumir que la primera actuación sea escribir código.
