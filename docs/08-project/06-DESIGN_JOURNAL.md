# DESIGN_JOURNAL.md

1. Propósito

2. Evolución del dominio

3. Evolución del modelo conceptual

4. Transparencia editorial

5. Modelo de publicación

6. Modelo de monetización

7. Otras ideas

# 1. Propósito

Este documento recoge ideas, hipótesis y reflexiones relacionadas con la evolución del diseño del producto y de la arquitectura del proyecto.

Su finalidad es preservar aquellas propuestas que, aun no formando parte de la documentación oficial, puedan resultar valiosas para orientar futuras decisiones de diseño.

El contenido de este documento no constituye una especificación del producto ni un compromiso de implementación. Cada idea deberá evaluarse cuando el contexto del proyecto lo justifique y, en caso de ser adoptada, pasará a incorporarse al documento correspondiente (`PRODUCT.md`, `ARCHITECTURE.md` u otro que resulte adecuado).

De este modo, el diario de diseño permite conservar el conocimiento generado durante la evolución del proyecto sin comprometer la estabilidad ni la coherencia de la documentación principal.

Una idea permanecerá en este documento mientras no exista justificación suficiente para incorporarla a otro cuerpo documental, descartarla o reformularla.

La presencia de una propuesta en este documento no constituye evidencia a favor de su incorporación ni genera por sí misma una obligación de investigación.

Las propuestas que alcancen suficiente madurez podrán incorporarse a las líneas estratégicas definidas en `ROADMAP.md` antes de formar parte de la documentación oficial del proyecto.

Cuando una propuesta sea finalmente adoptada e implementada, su incorporación quedará reflejada en `PROJECT_JOURNAL.md` como parte de la evolución histórica del proyecto.

## 1.1. Estado del corpus histórico auditado

El corpus histórico reconstruido de este documento ha sido sometido a una auditoría sistemática respecto del Product actualmente consolidado.

La auditoría examinó las familias históricas de propuestas intentando determinar si, una vez eliminadas las soluciones concretas mediante las que fueron formuladas, alguna conservaba una posibilidad humana cuya pérdida justificara un nuevo compromiso de Product, la modificación de un compromiso existente o la apertura de una nueva vertical.

El resultado de la auditoría no identificó ningún residuo positivo independiente que requiera actualmente:

- modificar `PRODUCT.md`;
- modificar `PV-001`;
- derivar `PV-002`;
- ni incorporar como compromiso de Product alguna de las capacidades históricas examinadas.

Las propuestas históricas se conservan en este documento como registro de la evolución del proyecto.

Su conservación documental no les confiere vigencia normativa ni las convierte en compromisos, requisitos o líneas de desarrollo pendientes.

La justificación completa de la reevaluación y de su resultado se conserva en `07-AUDITORIA_HISTORICA_DEL_DESIGN_JOURNAL.md`.

### Condición de reapertura

El cierre afecta al corpus histórico auditado y al estado actual de la evidencia.

Una propuesta podrá reabrirse si aparece nueva evidencia capaz de mostrar una pérdida humana concreta que no pueda reducirse a los compromisos vigentes y que proporcione un fundamento positivo independiente de la propia solución histórica.

No constituyen por sí mismos fundamento suficiente para la reapertura:

- la presencia histórica de una propuesta en este documento;
- su utilidad técnica o conveniencia de implementación;
- su semejanza con funcionalidades habituales;
- ni su posible utilidad futura todavía no justificada.

**Estado del corpus histórico auditado:** cerrado respecto del Product actualmente consolidado.

# 2. Hipótesis sobre el producto y su dominio

Este apartado recoge posibles evoluciones del modelo de dominio que podrían incorporarse en el futuro si las necesidades del producto lo justifican.

Las propuestas aquí descritas no forman parte del modelo actual y deberán evaluarse antes de su incorporación.

## 2.1 Evolución del concepto de participante

Actualmente el producto identifica la figura del autor como uno de sus conceptos fundamentales.

En el futuro podría resultar conveniente generalizar este concepto mediante una entidad más amplia denominada **Participante**, capaz de representar los distintos roles que intervienen en el ciclo de vida de un documento.

```text
Participante
│
├── Autor
├── Coautor
├── Revisor
├── Editor
└── Colaborador
```

...
↓
HIPÓTESIS HISTÓRICA DE PRODUCTO
↓
no incorporable automáticamente

Este enfoque permitiría ampliar el modelo colaborativo sin alterar el significado del concepto de Documento ni del resto del dominio.

---

# 3. Hipótesis de organización del producto

Este apartado recoge posibles ampliaciones del modelo conceptual del producto.

## 3.1 Organización de la biblioteca

La organización conceptual de la biblioteca podría evolucionar hacia una estructura más rica que permita integrar distintos elementos dentro de un mismo espacio de trabajo.

```text
Biblioteca
│
├── Colecciones
│   └── Documentos
│
├── Autores
│
├── Publicaciones
│
└── Configuración
```

     ↓

candidatos históricos
↓
someter a rederivación
↓
¿qué situación justifican?
↓
¿siguen siendo necesarios?

Esta organización permitiría ampliar progresivamente las capacidades del producto manteniendo un modelo coherente.

## 3.2 Evolución del concepto de usuario

Durante la revisión de `PRODUCT.md` surgió una posible evolución del modo de describir el público objetivo.

En lugar de centrar el producto en perfiles profesionales concretos, podría formularse desde una perspectiva basada en necesidades comunes:

> "El producto está dirigido a cualquier persona cuya actividad implique gestionar conocimiento."

Este enfoque permite integrar de forma natural perfiles muy diversos.

Por ejemplo:

- Un estudiante puede convertirse en autor.
- Un autor puede crear una comunidad.
- Una organización puede utilizar la plataforma para gestionar documentación interna.

Todos ellos comparten un mismo modelo conceptual basado en la gestión del conocimiento.

---

# 4. Transparencia editorial

La transparencia editorial podría evolucionar hacia un modelo más estructurado basado en una ficha editorial asociada a cada documento.

No se trataría de un formulario obligatorio, sino de un conjunto de metadatos opcionales que permitieran comprender mejor el proceso de creación y evolución de una obra.

Posibles elementos de la ficha editorial:

- Autoría.
- Participación.
- Historial de revisiones.
- Metodología utilizada.
- Uso declarado de herramientas de asistencia.
- Licencia.
- Fecha de publicación.
- Referencias.

Esta información reforzaría la transparencia del producto sin imponer una forma única de documentar el proceso editorial.

---

# 5. Modelo de publicación

El modelo de publicación podría evolucionar hacia una estructura compuesta por varias dimensiones independientes en lugar de un único estado.

Por ejemplo:

- **Visibilidad:** privada, compartida o pública.
- **Acceso:** libre, restringido o mediante suscripción.
- **Licencia:** todos los derechos reservados, licencias abiertas u otras modalidades.
- **Monetización:** gratuita, de pago, por membresía u otras formas que el producto incorpore.
- **Estado editorial:** borrador, publicada, archivada u otros estados futuros.

Este enfoque permitiría describir una publicación mediante la combinación de distintas decisiones independientes, proporcionando un modelo más flexible y expresivo.

---

# 6. Modelo de monetización

La monetización también podría evolucionar hacia un modelo basado en distintos niveles de acceso al conocimiento. No deben influir todavía en la definición del MVP salvo que durante su derivación aparezca una necesidad que las justifique.

Un posible enfoque sería:

```text
Documento
│
├── Acceso libre
├── Registro requerido
├── Suscripción
├── Compra individual
└── Licencia específica
```

Este modelo permitiría desacoplar la monetización de la propia publicación y facilitar la incorporación de nuevas modalidades económicas sin modificar el resto del modelo conceptual.

---

# 7. Otras ideas

Este apartado recoge propuestas que todavía no encajan claramente en ninguna categoría anterior.

A medida que el diario evolucione, estas ideas podrán reorganizarse o trasladarse a nuevos apartados cuando adquieran suficiente entidad.

El objetivo de esta sección es evitar la pérdida de ideas surgidas durante el diseño, manteniendo el diario como un espacio de incubación de futuras evoluciones del proyecto.

---

## Investigación de candidata a segunda vertical de Product — reducción a PV-001

### Pregunta de partida

Se investigó si existía una diferencia humana adicional a `PV-001` asociada a la posibilidad de que una persona, al continuar actuando apoyándose en algo procedente de situaciones anteriores, pudiera incorporar una variación posterior a esa misma continuidad.

La investigación no partió de la presunción de que dicha diferencia constituyera una nueva vertical de Product.

Su objetivo fue intentar demostrar si existía un residuo humano positivo, independiente y justificable que sobreviviera a su reducción a `PV-001`.

### Candidata inicial

La intuición inicial apareció alrededor de situaciones en las que:

```text
situación anterior
        ↓
algo queda disponible
        ↓
interviene posteriormente
        ↓
la actuación continúa

mientras

ocurre una variación posterior
        ↓
que podría incidir
en cómo continúa la actuación
```

La cuestión consistía en determinar si poder integrar esa variación en la actuación continuada proporcionaba una diferencia humana no contenida ya en el valor justificado de `PV-001`.

### Falsadores aplicados

La candidata fue sometida sucesivamente a intentos de reducción.

#### F-002 — ausencia de diferencia humana

Se examinó si la diferencia entre poder y no poder incorporar una variación posterior constituía realmente una diferencia para la persona o únicamente una diferencia estructural en la descripción del sistema.

La prueba permitió mantener provisionalmente una diferencia en las posibilidades de actuación, pero no demostró todavía un valor independiente.

#### F-003 — reducción a disponibilidad de información

Se examinó si la diferencia desaparecía cuando toda la información necesaria acerca de la variación permanecía disponible para la persona.

La candidata no pudo justificarse mediante mera disponibilidad informativa.

Se distinguió entre:

```text
información disponible
        ≠
posibilidad practicable de hacerla intervenir
en una actuación continuada
```

#### F-004 — reducción a eficiencia

Se examinó si la diferencia consistía únicamente en hacer más fácil, rápida o económica una actuación que ya era posible mediante información, búsqueda, selección y actuación.

La investigación mostró que eficiencia, coste, accesibilidad o practicabilidad pueden afectar a la realizabilidad humana de una posibilidad.

Sin embargo, esa diferencia no demostró por sí misma la existencia de un nuevo valor de Product.

Por tanto:

```text
dificultad práctica
        ⇏
nueva vertical de Product
```

#### F-005 — dependencia de escala o complejidad

Se examinó si la candidata sólo aparecía cuando una capacidad formalmente existente dejaba de resultar practicable bajo condiciones humanas finitas.

La escala o complejidad no se aceptaron como fundamento constitutivo de una nueva vertical.

Pueden afectar a la realización efectiva de un valor ya seleccionado, pero no demuestran por sí mismas otro valor independiente.

#### F-006 — circularidad de la pertinencia

Se examinó la formulación según la cual la persona debería poder responder a una «variación pertinente».

La noción de pertinencia fue rechazada como fundamento primario porque podía introducir circularmente:

- incidencia;
- dependencia;
- corrección;
- una norma epistemológica;
- o un criterio técnico previamente asumido.

La candidata pudo reformularse sin utilizar «pertinencia», pero ello desplazó la investigación hacia la intención de la persona de hacer intervenir una variación.

La intención tampoco fue aceptada como fundamento suficiente del valor.

```text
la persona quiere realizar P
        ⇏
P constituye por ello
un compromiso justificable de Product
```

#### F-007 — generalidad extrínseca de la no clausura

Tras eliminar pertinencia e intención como fundamentos, apareció provisionalmente una diferencia formulable como ausencia de clausura:

```text
continuar desde lo anterior
        +
poder incorporar una variación posterior
```

La «no clausura» abstracta fue rechazada como valor específico de Product.

Formulaciones generales como:

- flexibilidad;
- adaptabilidad;
- autonomía;
- preservación de opciones;
- o capacidad general de responder al cambio

resultaban aplicables indistintamente a multitud de productos y no proporcionaban fundamento suficiente para una nueva vertical.

### Residuo final de la investigación

Eliminados los fundamentos anteriores, el fenómeno quedó reducido a:

```text
S1 → X
S2 → Y

X ──┐
    ↓
    S3
    ↑
Y ──┘
```

Es decir:

> aquello procedente de distintas situaciones anteriores puede intervenir en una situación posterior.

Se examinó entonces si la intervención conjunta de `X` e `Y` constituía una diferencia humana adicional respecto de `PV-001`.

No se demostró tal independencia.

La multiplicidad de aportaciones anteriores no constituye por sí misma una nueva clase de valor humano.

Interpretada mínimamente, la concurrencia significa que las posibilidades de actuación en una situación posterior pueden depender de aquello que distintas situaciones anteriores hayan hecho disponible.

Esta estructura permanece dentro del espacio de incidencia entre situaciones ya seleccionado por `PV-001`.

### Límite de la reducción

El resultado no establece que `PV-001` exija automáticamente:

```text
cualquier X
+
cualquier Y
        ↓
cualquier situación posterior
```

ni que toda relación, composición, comparación o tratamiento conjunto entre elementos anteriormente disponibles esté ya comprometido por Product.

Una exigencia específica de:

- composición;
- comparación;
- síntesis;
- relación;
- resolución de tensiones;
- o cualquier otra operación entre aportaciones

requeriría justificación independiente.

Por tanto:

```text
PV-001
        ⇏
toda composición imaginable
```

pero también:

```text
composición no explicitada por PV-001
        ⇏
nueva vertical de Product
```

### Resultado

La investigación no ha demostrado una diferencia humana positiva independiente suficiente para justificar una nueva vertical de Product.

El recorrido de reducción puede representarse como:

```text
revisabilidad fundada
        ↓
incidencia ante variaciones
        ↓
respuesta practicable
        ↓
continuidad ante variación
        ↓
no clausura
        ↓
concurrencia de aportaciones temporales
        ↓
incidencia de elementos procedentes
de distintas situaciones anteriores
        ↓
PV-001
```

Por tanto, la candidata queda rechazada como segunda vertical.

```text
candidata a PV-002
        ↓
valor humano independiente no demostrado
        ↓
reducción composicional a PV-001
        ↓
no consolidar PV-002
```

### Consecuencias para Product

No se crea una ficha `PV-002` en `02-PRODUCT.md`.

No se modifica el compromiso consolidado de `PV-001`.

La investigación tampoco demuestra que Product deba incorporar una obligación general de:

- revisabilidad;
- respuesta al cambio;
- flexibilidad;
- adaptabilidad;
- no clausura;
- composición;
- o tratamiento conjunto de aportaciones anteriores.

Cualquiera de esas propiedades requerirá fundamento positivo independiente si posteriormente aparece como candidata.

### Resultado metodológico adicional

La investigación permite conservar dos distinciones:

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

La practicabilidad puede resultar relevante al investigar la realización de un compromiso, pero no constituye por sí misma fundamento suficiente para ampliar Product.

### Estado

**Cerrada — candidata rechazada por reducción a `PV-001`.**

No existe fundamento derivado de esta investigación para crear `PV-002` ni para abrir automáticamente una nueva actuación práctica.

### Punto de reanudación

El cierre de esta candidata no prescribe la búsqueda inmediata de otra vertical.

Una nueva investigación de Product deberá abrirse únicamente si aparece fundamento positivo independiente para considerar una situación humana cuya diferencia no esté ya contenida en los compromisos consolidados.

Del mismo modo, una actuación práctica sobre `PV-001` requerirá fundamento independiente adicional si el estado actualmente consolidado continúa sin justificarla.

---
