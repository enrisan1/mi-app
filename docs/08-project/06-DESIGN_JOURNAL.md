# DESIGN_JOURNAL.md

1. Propósito

2. Evolución del dominio

3. Evolución del modelo conceptual

4. Transparencia editorial

5. Modelo de publicación

6. Modelo de monetización

7. Otras ideas

8. Nuevas propuestas en evaluación

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

## Auditoría adicional de fundamento histórico y control de alineación

### Origen

Tras el rechazo de la candidata a segunda vertical de Product, el proyecto alcanzó un estado en el que no existía una siguiente actuación automáticamente derivada.

Antes de aceptar ese estado como suficientemente investigado, se examinó si las fuentes históricas del origen del proyecto contenían situaciones humanas capaces de proporcionar fundamento positivo independiente que hubiera quedado oculto por las categorías utilizadas durante las reconstrucciones posteriores.

La investigación no pretendía restaurar soluciones históricas ni convertir el corpus histórico en una fuente normativa.

Su finalidad era comprobar si el material ya disponible contenía evidencia humana relevante que no hubiera sido considerada adecuadamente.

### Primer barrido de fenómenos

Un primer barrido permitió identificar provisionalmente fenómenos relacionados con:

- utilización de información disponible;
- fragmentación entre ámbitos;
- separación entre actividad propia y disponibilidad para otras personas;
- y preservación de formas sencillas de actuación frente al aumento de complejidad.

Estos fenómenos fueron sometidos a pruebas de reducción.

No se demostró en ellos una diferencia humana positiva independiente suficiente para ampliar Product.

Entre las reducciones aparecieron:

- dependencia de escala o practicabilidad;
- eficiencia;
- relacionalidad general;
- autonomía, privacidad, control o acceso;
- generalidad de principios de diseño;
- y convergencia parcial con `PV-001`.

### Control de exhaustividad del primer barrido

Se examinó posteriormente si aquel primer barrido podía considerarse suficientemente exhaustivo respecto de las fuentes históricas originales.

El control mostró que no podía sostenerse esa conclusión.

El procedimiento anterior había estado parcialmente orientado por categorías ya disponibles y podía dejar sin detectar situaciones humanas que no encajaran en ellas.

Se realizó por ello una segunda lectura centrada en intervenciones primarias, distinguiendo entre:

```text
situación o dificultad expresada por la persona
        ≠
interpretación posterior
        ≠
solución propuesta
        ≠
elaboración conceptual posterior
```

La finalidad consistió en extraer primero la evidencia y clasificarla únicamente después.

### Familias primarias obtenidas

La revisión permitió distinguir provisionalmente las siguientes familias:

```text
FP-1
trabajo con información

FP-2
abundancia, localización y utilización

FP-3
actividad propia y disponibilidad para otras personas

FP-4
variabilidad de necesidad y complejidad

FP-5
condiciones de elaboración reconocibles

FP-6
evaluación de una aportación

FP-7
distinción entre aportación y actividad sobre ella
```

También apareció una preocupación relativa a la estabilidad del propio proceso de investigación.

Esta última fue reconocida como cuestión metodológica y no como fundamento de Product.

Las familias no fueron consideradas verticales, requisitos ni compromisos.

Su identificación sólo establecía que determinadas preocupaciones poseían raíz histórica suficiente para poder ser examinadas.

### Reducción de FP-5

`FP-5` partía de la posibilidad de que una persona pudiera conocer determinadas condiciones de elaboración de una aportación.

La candidata fue examinada eliminando como fundamentos:

- curiosidad;
- información adicional;
- confianza general;
- supervisión;
- control social;
- normas generales de transparencia;
- y normas epistemológicas acerca del valor de determinadas formas de producción.

El residuo quedó reducido a disponer de información adicional acerca del proceso de elaboración de una aportación.

No se demostró una diferencia humana específicamente propia de Product.

### Control mediante PROJECT_CHARTER.md

El crecimiento de la investigación histórica hizo necesario comprobar que ésta continuaba subordinada a la finalidad del proyecto y no estaba adquiriendo una agenda autónoma.

La prueba de control confirmó que la investigación:

- pertenecía al perímetro humano del proyecto;
- mantenía separadas situaciones y soluciones;
- no restauraba automáticamente soluciones históricas;
- no convertía candidatas en compromisos;
- no derivaba implementación;
- y conservaba a Product como cuerpo competente para determinar compromisos de producto.

Se identificó, sin embargo, un riesgo de desviación hacia investigaciones conceptuales o epistemológicas autónomas.

Se estableció por ello como criterio operativo:

```text
pregunta teórica T
        ↓
no puede reconstruirse
qué diferencia humana del proyecto
obliga actualmente a responder T
        ↓
T no está justificada
por la investigación actual
```

### Control de la extracción histórica

La misma prueba se aplicó a la pretensión de continuar extrayendo exhaustivamente todas las intervenciones históricas primarias.

El control distinguió entre:

```text
buscar evidencia suficiente
para no omitir un fundamento relevante
        ✓
```

y:

```text
clasificar exhaustivamente
todo el corpus histórico
por el mero hecho de existir
        ✗
```

La segunda lectura ya había demostrado que el primer barrido no era exhaustivo y había producido nuevas familias susceptibles de evaluación.

No se identificó una pérdida concreta que exigiera continuar hasta agotar el corpus.

La extracción histórica alcanzó por tanto su criterio de suficiencia actual y quedó detenida.

### Selección de FP-6 para investigación

Entre los resultados pendientes, `FP-6` fue el único que reunía simultáneamente:

- evidencia primaria;
- una situación humana identificable;
- una diferencia humana potencial;
- pertenencia plausible al perímetro del proyecto;
- y ausencia de investigación previa suficiente.

Su prioridad no procedía del orden histórico ni de su interés conceptual, sino del fundamento positivo disponible.

La investigación fue delimitada expresamente para evitar convertirla en una investigación acerca de:

- verdad;
- falsedad;
- consistencia;
- calidad;
- evidencia;
- justificación;
- o criterios epistemológicos.

El objeto consistió únicamente en comprobar si detrás de la preocupación histórica existía una diferencia humana propia de Product.

### Reducción de FP-6

La investigación partió de la diferencia provisional entre:

```text
disponer de una aportación X
```

y:

```text
poder actuar respecto
de alguna condición atribuible a X
```

Se eliminaron sucesivamente como fundamentos independientes:

```text
información adicional
        ✗

capacidad general de evaluar
        ✗

confianza
        ✗

decisión
        ✗

norma epistemológica
        ✗
```

La posibilidad de que el resultado de una evaluación quedara disponible para intervenir posteriormente permanecía dentro del espacio ya seleccionado por `PV-001`.

El residuo quedó entonces formulado como:

```text
X puede intervenir
en una actividad

        ≠

X puede convertirse
en objeto de una actuación
```

### Prueba de irreducibilidad del residuo

Se examinó si esa diferencia era propia del trabajo intelectual.

La estructura podía reproducirse fuera del dominio:

```text
algo interviene en una actividad
        ↓
ese mismo algo puede posteriormente
ser objeto de otra actuación
```

La diferencia resultó compatible con la capacidad humana general de actuar sobre objetos disponibles.

Las actuaciones específicas que podrían realizarse sobre una aportación —criticar, corregir, comparar, evaluar, transformar, anotar u otras— no podían derivarse automáticamente de la categoría general.

Cada una requeriría fundamento independiente si posteriormente apareciera como candidata.

Por tanto:

```text
poder actuar sobre X
        ⇏
Product debe hacer realizable
cualquier actuación imaginable sobre X
```

No se demostró una diferencia humana propia de Product en el residuo de `FP-6`.

### Consecuencia para FP-7

`FP-7` distinguía entre una aportación y la actividad realizada sobre ella.

La reducción de `FP-6` alcanzó precisamente el núcleo estructural compartido por ambas familias:

```text
aportación
        ≠
actividad sobre la aportación
```

La convergencia de dos raíces históricas no demostró por sí misma un valor humano independiente.

El núcleo de `FP-7` quedó por tanto examinado hasta el punto necesario para establecer que no existe actualmente una diferencia humana propia demostrada que justifique abrir otra investigación de Product a partir de esa estructura general.

### Resultado global

El recorrido adicional puede representarse como:

```text
estado sin actuación derivada
        ↓
búsqueda de fundamento positivo
en evidencia histórica
        ↓
primer barrido
        ↓
fenómenos reducidos
        ↓
control de exhaustividad
        ↓
primer barrido no exhaustivo
        ↓
segunda extracción primaria
        ↓
FP-1 ... FP-7
        ↓
FP-5 reducido
        ↓
control de alineación
con PROJECT_CHARTER.md
        ↓
extracción histórica
suficiente para el objetivo actual
        ↓
FP-6 seleccionado
por fundamento positivo
        ↓
FP-6 reducido
        ↓
núcleo compartido con FP-7
        ↓
diferencia humana propia
no demostrada
        ↓
ningún fundamento positivo pendiente
actualmente identificado
```

### Consecuencias para Product

No se modifica `02-PRODUCT.md`.

No se crea una nueva vertical.

No se modifica el compromiso consolidado de `PV-001`.

No se deriva automáticamente una actuación de Architecture, Development, Realization, Implementation ni de otro cuerpo.

Tampoco se deriva una obligación de investigar separadamente:

- crítica;
- comparación;
- corrección;
- anotación;
- evaluación;
- verdad;
- consistencia;
- procedencia;
- transparencia;
- o cualquier otra instancia posible de las abstracciones examinadas.

Cualquiera de ellas requerirá fundamento positivo independiente.

### Estado

**Cerrada — búsqueda adicional de fundamento histórico completada respecto del alcance actualmente justificado, sin derivación de una nueva actuación.**

El resultado no establece que el corpus histórico haya sido agotado exhaustivamente ni que Product esté completo.

Establece que la extracción adicional necesaria para comprobar la posible omisión de fundamento alcanzó su criterio de suficiencia y que los fundamentos positivos identificados durante ella han sido examinados sin producir un nuevo compromiso de Product.

### Punto de reanudación

No existe actualmente una siguiente actuación derivada de los resultados examinados.

La investigación podrá reabrirse si aparece fundamento positivo independiente, por ejemplo mediante:

- nueva evidencia relevante;
- una pérdida concreta no explicada por los compromisos actuales;
- una dependencia necesaria demostrada;
- una incompatibilidad entre compromisos;
- o una situación humana cuya diferencia justifique independientemente una nueva investigación.

La mera existencia de material histórico todavía no clasificado, de actuaciones intelectuales imaginables o de aspectos del producto todavía no desarrollados no constituye por sí misma fundamento suficiente.

---

## Reexamen posterior de `FP-2 — abundancia, localización y utilización`

### Origen

Con posterioridad al cierre de la auditoría adicional de fundamento histórico se reexaminó específicamente `FP-2`, familia previamente identificada como:

```text
abundancia, localización y utilización
```

La familia ya había quedado incluida en el resultado reductivo global de la investigación histórica, sin que se hubiera derivado de ella una nueva vertical de Product.

El reexamen no parte de nueva autoridad normativa del corpus histórico ni reabre su extracción general.

Su fundamento consiste en someter a prueba explícita una diferencia humana candidata contenida en aquella raíz histórica:

```text
información disponible o localizable
        ≠
información efectivamente utilizable
en una situación humana
```

### Pregunta de investigación

Se examinó:

> ¿Existe una diferencia humana irreducible entre que información relevante esté disponible o sea localizable y que una persona pueda utilizarla efectivamente en una situación, o esa diferencia puede reconstruirse mediante `PV-001` y los demás resultados ya consolidados?

La investigación eliminó como presupuestos necesarios:

- una cantidad enorme de información;
- mapas;
- grafos;
- buscadores;
- inteligencia artificial;
- clasificaciones;
- rutas de aprendizaje;
- relaciones semánticas predeterminadas;
- y cualquier otra solución histórica concreta.

### Diferencia humana inicial

La prueba permitió establecer que disponibilidad y localización no son suficientes universalmente para la utilización efectiva.

Puede darse una situación en la que:

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

La diferencia humana señalada históricamente no quedó reducida a mera inexistencia fenomenológica.

### Reducción de la abundancia

La misma diferencia puede aparecer con una cantidad pequeña de aportaciones.

Por tanto:

```text
gran cantidad de información
        → puede aumentar dificultad,
          coste o esfuerzo

pero

gran cantidad de información
        → no constituye una condición
          necesaria del fenómeno
```

La abundancia no proporciona por sí misma un fundamento independiente de Product.

### Prueba de irreducibilidad

Se intentó localizar aquello que podría explicar que unas aportaciones disponibles y localizables no resultaran utilizables en una situación.

Las vías examinadas produjeron los siguientes resultados.

#### Aportaciones o mediaciones adicionales

Cuando la diferencia depende de que exista una explicación, selección, comparación, organización, transformación u otra aportación mediadora, dicha aportación puede quedar disponible e intervenir posteriormente en las posibilidades humanas.

La estructura permanece entonces dentro del espacio admitido por `PV-001`:

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

Cuando todas las configuraciones pertinentes están disponibles pero la pérdida consiste en que la persona no comprende, conoce o interpreta aquello disponible, el residuo se desplaza hacia la interpretación humana.

La plataforma puede hacer disponibles configuraciones capaces de intervenir en situaciones posteriores, pero la interpretación y el conocimiento resultantes no se convierten por ello en resultados garantizados por Product.

Esta vía tampoco produjo una nueva vertical.

#### Condiciones situacionales de actuación

También se examinó si la utilización podía depender de condiciones propias de la situación presente.

Una misma aportación puede producir una diferencia relevante en una situación y no producirla en otra porque cambien las condiciones bajo las que una persona puede actuar.

Esto no implica por sí mismo que Product deba:

- representar esas condiciones;
- identificarlas;
- conservarlas;
- clasificarlas;
- modificarlas;
- ni controlarlas.

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
requeriría fundamento positivo independiente
        ↓
no demostrado
```

### Prueba fuerte de control

Se compararon provisionalmente dos situaciones manteniendo constantes:

- las mismas aportaciones antecedentes relevantes;
- las mismas posibilidades de incidencia admitidas por `PV-001`;
- las mismas capacidades interpretativas pertinentes;
- y las mismas condiciones situacionales relevantes para la actuación considerada.

La investigación no consiguió producir:

```text
situación A
→ no utilizable

situación B
→ utilizable
```

sin introducir alguna diferencia adicional entre ambas.

Cuando apareció una diferencia, ésta pudo localizarse en:

```text
aportación o configuración
incidencia
interpretación
condición de actuación
o condición situacional
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

### Control respecto de `PV-001`

El reexamen no identifica una carencia en la formulación vigente de `PV-001`.

La vertical ya compromete la posibilidad de que aquello procedente de situaciones anteriores pueda incidir en las posibilidades humanas de una situación posterior.

La incidencia está referida a situaciones concretas y no exige que una misma aportación produzca la misma diferencia en todas ellas ni que todo aquello disponible sea efectivamente utilizado.

Las propiedades adicionales que pudieran ser necesarias en situaciones particulares continúan requiriendo justificación independiente.

Por tanto, el resultado del reexamen no modifica ni amplía `PV-001`.

### Resultado

La intuición histórica contenida en `FP-2` señalaba una diferencia humana real:

```text
disponibilidad o localización
        ≠
utilización efectiva
```

Sin embargo, la investigación no ha identificado en dicha diferencia un compromiso de Product independiente de los actualmente consolidados.

Por tanto:

```text
diferencia humana
        → corroborada

nueva vertical de Product
        → no derivada

modificación de PV-001
        → no derivada

PV-002
        → no derivada

capacidad funcional concreta
        → no derivada
```

El reexamen hace explícita la reducción específica de `FP-2` y aumenta la trazabilidad de su cierre histórico, pero no modifica el resultado de Product previamente consolidado.

### Estado

**Cerrado — reexamen específico de `FP-2` completado sin residuo positivo independiente de Product.**

Este resultado no demuestra que ninguna situación futura relacionada con la utilización de información pueda justificar un nuevo compromiso.

Establece únicamente que la diferencia examinada en este reexamen no proporciona actualmente dicho fundamento.

### Condición de reapertura

`FP-2` podrá reabrirse si aparece fundamento positivo independiente capaz de identificar una pérdida humana concreta que:

- no pueda reducirse a incidencias ya admitidas por `PV-001`;
- no consista únicamente en interpretación humana;
- no dependa únicamente de condiciones externas de la situación;
- y permita justificar una responsabilidad propia de Product todavía no contenida en los compromisos vigentes.

---

# 8. Nuevas propuestas en evaluación

Este apartado conserva las ideas, hipótesis y propuestas surgidas con posterioridad al cierre del corpus histórico auditado de este documento cuando exista una razón identificable para preservarlas como posibilidades vivas en evaluación.

Las propuestas registradas en este apartado no forman parte del corpus histórico cerrado descrito en `1.1 Estado del corpus histórico auditado`.

Su incorporación a esta sección no constituye por sí misma:

- un compromiso de Product;
- una modificación de `PV-001`;
- una nueva vertical;
- una línea estratégica;
- una prioridad;
- una obligación de investigación;
- una obligación de implementación;
- ni la siguiente actuación justificable del proyecto.

Una propuesta permanecerá aquí mientras exista una razón identificable para conservarla como posibilidad viva y hasta que una evaluación posterior justifique su incorporación a otro cuerpo documental, su reformulación o su cierre.

Cada propuesta nueva deberá registrarse de forma identificable y conservar, como mínimo:

- fecha;
- origen o situación que la motiva;
- formulación de la idea o propuesta;
- razón por la que merece conservarse;
- estatuto actual;
- y, cuando corresponda, condición que justificaría su evaluación posterior.

Las propuestas podrán identificarse mediante la serie `NP-001`, `NP-002`, `NP-003`, etc.

Una entrada podrá utilizar la siguiente estructura:

```text
## `NP-XXX — Título`

### Fecha

### Situación u origen

### Propuesta

### Razón para conservarla

### Estatuto

### Condición de evaluación
```
