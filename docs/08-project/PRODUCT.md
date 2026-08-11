# Product

1. Propósito

2. Competencia de Product
   2.1 Responsabilidad
   2.2 Límites

3. Establecimiento de compromisos de producto
   3.1 Situaciones posibles del dominio
   3.2 Situaciones valiosas
   3.3 Compromisos de producto

4. Primera vertical — PV-001
   4.1 Situación
   4.2 Valor justificado
   4.3 Compromiso

# 1. Propósito

`PRODUCT.md` establece los compromisos de producto que orientan la realización práctica de la plataforma.

Su propósito consiste en identificar situaciones posibles dentro del dominio cuya realización práctica pueda aportar un valor humano relevante y determinar cuáles de ellas deben ser asumidas deliberadamente como compromisos del producto.

El documento no define la naturaleza del dominio ni las condiciones que hacen posibles dichas situaciones. Tampoco determina la arquitectura, los mecanismos técnicos o las realizaciones concretas mediante las que deberán hacerse efectivas.

Product establece así el tránsito entre las posibilidades reconocidas por el proyecto y aquellas situaciones que, por su valor para las personas, se decide hacer practicables mediante la plataforma.

Las capacidades concretas del producto deberán derivarse de las situaciones seleccionadas. Ninguna capacidad será considerada fundamental por el mero hecho de formar parte de una realización determinada.

# 2. Competencia de Product

## 2.1 Responsabilidad

Product es responsable de seleccionar y delimitar situaciones posibles dentro del dominio cuyo valor haya sido justificado para fundamentar su selección como compromiso de producto.

Esta responsabilidad parte de las posibilidades reconocidas por los cuerpos competentes del proyecto. Product no determina qué situaciones son conceptualmente posibles, sino cuáles de ellas resulta pertinente hacer practicables desde la perspectiva del producto.

La selección de una situación deberá estar justificada por el valor que pueda aportar a las personas y no por la existencia previa de una funcionalidad, una categoría conceptual o una solución técnica.

Una situación seleccionada establece un compromiso de producto. A partir de dicho compromiso podrán derivarse las capacidades necesarias para hacerla practicable, sin que esas capacidades adquieran por ello el carácter de fundamentos universales del producto.

Las decisiones particulares justificadas para una vertical no adquieren por ello validez general para otras situaciones o compromisos.

## 2.2 Límites

La selección de una situación y la formulación del compromiso correspondiente no otorgan a Product autoridad sobre resultados pertenecientes a otros cuerpos del proyecto.

Product puede formular situaciones nuevas dentro del espacio de posibilidades y restricciones establecido por los resultados anteriores aplicables, sin adquirir por ello autoridad para modificar esos resultados ni alterar su significado.

En particular, Product no es responsable de:

- determinar la naturaleza del dominio;
- establecer qué realidades pertenecen al dominio;
- definir las primitivas, estructuras o relaciones fundamentales mediante las que el dominio se explica;
- establecer la autoridad semántica de las distinciones que utiliza;
- determinar las responsabilidades arquitectónicas necesarias para satisfacer un compromiso de producto;
- establecer las restricciones estructurales de una implementación válida;
- determinar cuándo una realidad concreta constituye una realización legítima;
- ni prescribir mecanismos técnicos concretos.

Cuando la formulación o satisfacción de un compromiso requiera resultados pertenecientes a otro cuerpo, Product no podrá establecerlos por autoridad propia ni sustituir la autoridad de la que procedan.

La selección de una situación tampoco convierte las categorías, operaciones, estructuras o demás propiedades utilizadas en ella en condiciones generales de Product.

Las decisiones derivadas de una situación seleccionada deberán permanecer limitadas al ámbito para el que hayan sido justificadas.

Su aplicación a otras situaciones o su elevación a condiciones generales de Product requerirá una derivación independiente que justifique la ampliación de su alcance.

# 3. Establecimiento de compromisos de producto

## 3.1 Situaciones posibles del dominio

Product no determina las condiciones que hacen posible una situación dentro del dominio.

Puede formular situaciones candidatas aunque éstas no hayan sido previamente identificadas de forma explícita por Conceptual Model u otros cuerpos del proyecto.

La formulación de una situación candidata no establece por sí misma su posibilidad. Para que pueda ser seleccionada como compromiso de producto deberá ser compatible con las condiciones de posibilidad y las restricciones establecidas por los cuerpos competentes.

Las cuestiones que deben distinguirse son:

```text
¿Puede formularse una situación candidata?
                    ↓
           actividad de Product

¿Es compatible con las condiciones
y restricciones aplicables?
                    ↓
          comprobación necesaria

¿Justifica su valor que el producto
la asuma como compromiso?
                    ↓
            selección de Product
```

Product posee competencia para formular situaciones candidatas y decidir sobre su selección, pero no para modificar las condiciones del dominio ni otros resultados aplicables con el fin de hacer compatible una situación.

Cuando la compatibilidad pueda determinarse mediante resultados ya establecidos, Product podrá apoyarse en ellos.

Cuando determinarla requiera producir nuevo conocimiento perteneciente a otro cuerpo del proyecto, la justificación correspondiente deberá proceder de dicho cuerpo antes de consolidar la situación como compromiso.

Las dependencias necesarias para justificar una selección pueden representarse, sin implicar una secuencia operacional, del siguiente modo:

```text
condiciones del dominio
        ↓
formulación de situaciones candidatas
        ↓
comprobación de compatibilidad
        ↓
evaluación de su valor
        ↓
posible selección
```

## 3.2 Situaciones valiosas

La compatibilidad de una situación candidata con los resultados aplicables no implica que dicha situación posea valor desde la perspectiva de Product.

Product deberá identificar qué diferencia, directa o indirecta, produciría para las personas hacer practicable una situación candidata y justificar explícitamente el valor atribuido a dicha diferencia.

La evaluación deberá permitir reconstruir:

- la situación considerada;
- la diferencia que produciría hacerla practicable;
- las personas para las que se atribuye finalmente valor a dicha diferencia;
- cuando el valor sea indirecto, la cadena mediante la que la diferencia producida llega a adquirir valor para ellas;
- y el alcance para el que la justificación ha sido establecida.

El valor identificado pertenece a la situación concreta evaluada. Product no presupone que todas las situaciones deban producir una misma clase de valor ni que el valor demostrado para una situación pueda extenderse automáticamente a otras.

Por tanto:

```text
situación candidata
        ↓
diferencia producida
al hacerla practicable
        ↓
diferencia directa o indirecta
para las personas
        ↓
valor atribuido
        ↓
justificación explícita
```

Una situación cuyo valor haya sido justificado no se convierte por ello en un compromiso de producto.

La selección constituye una decisión posterior y diferenciada.

La justificación del valor tampoco establece prioridad respecto de otras situaciones ni concede a Product autoridad para modificar los resultados aplicables establecidos por otros cuerpos del proyecto.

Cada justificación conserva únicamente el alcance para el que haya sido establecida.

## 3.3 Compromisos de producto

Una situación cuyo valor haya sido justificado no se convierte por ello en una obligación de Product.

La selección constituye el acto mediante el cual Product decide asumir una situación previamente evaluada y delimita el alcance de dicha decisión.

El resultado de esa selección constituye un **compromiso de producto**.

Por tanto:

```text
situación candidata
        ↓
comprobación de compatibilidad
        ↓
valor justificado
        ↓
selección y delimitación
        ↓
compromiso de producto
```

### Resultado y alcance del compromiso

Todo compromiso deberá establecer:

- el resultado de producto asumido mediante la selección;
- y el alcance dentro del cual dicho resultado queda comprometido.

La situación investigada puede contener propiedades, relaciones o circunstancias que hayan sido necesarias para comprenderla, pero su selección no convierte automáticamente todas ellas en obligaciones de Product.

El compromiso deberá limitarse a aquello que haya quedado justificado por la selección.

En consecuencia, deberá poder reconstruirse la relación entre:

```text
situación seleccionada
        ↓
diferencia humana
        ↓
valor justificado
        ↓
selección
        ↓
resultado comprometido
        +
alcance
```

La selección transforma así el estatuto de la situación dentro de Product: deja de ser únicamente una posibilidad cuyo valor ha sido reconocido y pasa a originar una obligación de producto delimitada.

### Autoridad del compromiso

Product posee autoridad sobre el resultado que ha decidido asumir y sobre el alcance para el que dicha decisión ha sido establecida.

Esta autoridad no se extiende automáticamente a los medios necesarios para satisfacer el compromiso.

En particular, un compromiso de producto no determina por sí mismo:

- las responsabilidades arquitectónicas necesarias;
- las restricciones de implementación;
- los mecanismos técnicos;
- una realización concreta;
- su prioridad respecto de otros compromisos;
- ni su aplicación fuera del alcance para el que haya sido justificado.

Los cuerpos competentes deberán derivar, dentro de sus respectivas competencias, las condiciones adicionales necesarias para satisfacer el resultado comprometido.

Una condición posteriormente demostrada como necesaria para satisfacer un compromiso no se convierte por ello en una decisión de Product, pero tampoco puede ignorarse por no haber formado parte de la formulación inicial del compromiso.

### Satisfacción y evolución

Product no exige conservar literalmente la formulación mediante la que se expresó inicialmente el valor de una situación.

La formulación del compromiso podrá refinarse y el producto podrá incorporar nuevas capacidades o diferencias de valor siempre que el resultado comprometido continúe satisfecho dentro de su alcance.

Por tanto, una evolución puede ampliar el valor proporcionado sin invalidar un compromiso anterior:

```text
compromiso C
     ↓
evolución
     ↓
C continúa satisfecho
+
aparecen nuevas diferencias de valor
```

La aparición de un valor adicional no permite, sin embargo, considerar satisfecho un compromiso cuyo resultado haya dejado de cumplirse.

Cuando una evolución pretenda abandonar o modificar aquello que Product había asumido, deberá revisarse explícitamente el compromiso correspondiente mediante el procedimiento aplicable.

### Límites de la selección

Seleccionar una situación no significa comprometer su ocurrencia completa cuando ésta dependa de condiciones externas a Product.

Tampoco significa convertir en obligaciones los medios que inicialmente se hayan considerado posibles para alcanzar el resultado buscado.

Product compromete exclusivamente el resultado de producto justificado por la selección, dentro del alcance establecido.

La determinación de qué debe ser estructural, implementativa o realizativamente cierto para satisfacer dicho resultado corresponde a los cuerpos competentes.

En consecuencia:

```text
valor
   ↓
justifica la selección

selección
   ↓
origina el compromiso

compromiso
   ↓
establece resultado y alcance

cuerpos competentes
   ↓
derivan qué exige satisfacerlo
```

Cuando varios compromisos de Product sean simultáneamente aplicables y se demuestre que no pueden satisfacerse conjuntamente, la incompatibilidad deberá resolverse dentro de Product antes de exigir su satisfacción conjunta a los cuerpos competentes.

Los cuerpos competentes podrán identificar o demostrar la incompatibilidad dentro de sus respectivas competencias, pero no podrán resolverla por autoridad propia mediante la modificación, priorización, sustitución o restricción de los compromisos afectados.

La incompatibilidad no establece por sí misma prioridad entre compromisos ni determina cuál de ellos debe ser revisado. Cualquier modificación resultante deberá justificarse dentro del ámbito de autoridad correspondiente.

# 4. Primera vertical — PV-001

## 4.1 Situación

`PV-001` selecciona una situación en la que algo disponible puede intervenir posteriormente y en la que una situación puede hacer que algo quede disponible para intervenir en situaciones posteriores.

Esta estructura puede reiterarse:

```text
algo disponible
        ↓
situación
        ↓
algo puede quedar disponible
        ↓
situación posterior
        ↓
algo puede quedar disponible
        ↓
...
```

No se exige que toda situación haga que algo nuevo quede disponible ni que aquello que queda disponible sea necesariamente utilizado después.

La situación seleccionada exige únicamente que permanezca abierta la posibilidad de que situaciones posteriores puedan apoyarse en aquello que haya quedado disponible como consecuencia de situaciones anteriores.

La identidad de `PV-001` no depende de que aquello que interviene o queda disponible adopte un tipo semántico determinado, ni de que haya surgido necesariamente de una interpretación anterior.

La mera reutilización reiterada de elementos previamente disponibles no basta para caracterizar esta vertical cuando las situaciones sucesivas no pueden modificar aquello disponible para intervenciones posteriores.

Las propiedades adicionales que puedan aparecer en casos particulares no forman parte de la situación seleccionada salvo que su necesidad sea demostrada de forma independiente.

## 4.2 Valor justificado

El valor que justifica la selección de `PV-001` no procede de la mera disponibilidad posterior ni de la reutilización reiterada de aquello que ya estaba disponible.

La diferencia para las personas aparece cuando algo que una situación ha hecho disponible puede intervenir posteriormente, de manera que las posibilidades de actuación de una persona en una nueva situación puedan depender también de aquello que situaciones anteriores hayan hecho disponible.

Por tanto, deben distinguirse dos estructuras:

```text
reutilización reiterada

A ──→ situación 1
├──→ situación 2
└──→ situación 3
```

y:

```text
incidencia entre situaciones

situación 1
     ↓
algo queda disponible
     ↓
puede intervenir posteriormente
     ↓
situación 2
     ↓
las posibilidades de actuación
pueden depender también
de lo anteriormente disponible
```

La segunda introduce la diferencia humana que justifica `PV-001`.

Las situaciones relacionadas de este modo no necesitan formar parte de una misma actividad, mantener un mismo propósito ni constituir una secuencia continua.

Tampoco se exige que aquello que queda disponible haya sido alcanzado, producido o buscado intencionalmente por una persona. Su procedencia y naturaleza semántica no forman parte de la justificación mínima de esta vertical.

Lo relevante es que aquello que una situación hace disponible pueda tener incidencia posterior en las posibilidades de actuación de una persona.

Esta incidencia no necesita caracterizarse mediante una noción general de mejora, ampliación, utilidad o beneficio. El valor atribuido en `PV-001` corresponde específicamente a que las posibilidades humanas posteriores puedan depender también de aportaciones procedentes de situaciones anteriores.

Cuando esta posibilidad se reitera:

```text
situación 1
     ↓
algo queda disponible
     ↓
puede intervenir en situación 2
     ↓
algo puede quedar disponible
     ↓
puede intervenir en situación 3
     ↓
...
```

las situaciones posteriores pueden apoyarse sucesivamente en aquello que situaciones anteriores hayan hecho disponible.

Esta estructura hace posible una construcción acumulativa a través del tiempo.

La construcción acumulativa no exige que toda situación haga que algo nuevo quede disponible, que todo lo disponible intervenga posteriormente ni que cada secuencia concreta produzca efectivamente acumulación.

El valor justificado reside en mantener abierta la posibilidad de que aquello disponible a partir de situaciones anteriores pueda incidir en posibilidades humanas posteriores y que esta incidencia pueda reiterarse.

Por tanto:

```text
algo queda disponible
        ↓
puede intervenir posteriormente
        ↓
incide en posibilidades humanas
        ↓
la posibilidad puede reiterarse
        ↓
construcción acumulativa posible
```

Este valor conserva exclusivamente el alcance de `PV-001`.

No establece que toda situación futura seleccionada por Product deba producir esta misma diferencia, permitir construcción acumulativa ni compartir las propiedades particulares de esta vertical.

## 4.3 Compromiso

La selección de `PV-001` establece como compromiso de producto que la diferencia que justifica esta vertical sea realizable dentro de su alcance.

Una realización no satisface `PV-001` si hace imposible que las posibilidades de actuación de una persona en una situación puedan depender también de aquello que situaciones anteriores hayan hecho disponible.

El compromiso recae sobre la posibilidad de esta incidencia, no sobre su ocurrencia efectiva en cada situación concreta.

Por tanto, `PV-001` no exige que toda situación haga que algo nuevo quede disponible, que aquello disponible intervenga necesariamente en situaciones posteriores ni que toda secuencia produzca efectivamente una construcción acumulativa.

Product establece el resultado cuya imposibilidad constituye incumplimiento de la vertical, pero no determina las responsabilidades, estructuras, mecanismos o realizaciones necesarios para satisfacerlo.

La derivación de esas condiciones corresponde a los cuerpos competentes dentro de sus respectivas competencias.

El alcance de este compromiso queda limitado a `PV-001` y no establece una obligación universal para otras verticales.
