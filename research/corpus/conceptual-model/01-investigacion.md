# 01-investigacion.md

# Investigación conceptual del dominio

## Objetivo

Este documento recoge el proceso de investigación seguido para descubrir la teoría estructural y, posteriormente, el modelo conceptual del dominio sobre el que se aplica.

No describe la teoría vigente ni el modelo conceptual consolidado (desarrollados en documentos posteriores), sino el camino recorrido para llegar hasta ellos.

Cada investigación documenta:

- la hipótesis de partida;
- el método utilizado;
- los casos analizados;
- las observaciones obtenidas;
- las conclusiones alcanzadas;
- el resultado de la investigación;
- el estado en que queda la línea de trabajo.

Su finalidad es preservar el razonamiento seguido, justificar las decisiones adoptadas y evitar repetir investigaciones ya realizadas.

---

# Índice de investigaciones

```text
| Id  | Investigación                                         | Estado       |
|-----|-------------------------------------------------------|--------------|
| 001 | Búsqueda de la unidad fundamental del dominio         | Cerrada      |
| 002 | Delimitación del dominio de la plataforma             | Cerrada      |
| 003 | Naturaleza del objeto del dominio                     | Cerrada      |
| 004 | Ciclo conceptual del conocimiento                     | En evolución |
| 005 | Responsabilidades fundamentales de la plataforma      | En evolución |
| 006 | Relaciones como elementos del dominio                 | Pendiente    |
| 007 | Clasificación de las transformaciones del dominio     | Pendiente    |
| 008 | Reducción del núcleo estructural                      | En progreso  |
| 009 | Auditoría de la firma mínima                          | En progreso  |
| 010 | Separación entre dominio y formalismo                 | En progreso  |
```

---

# Investigación 001

## Título

Búsqueda de la unidad fundamental del dominio

## Estado

Cerrada

## Objetivo

Descubrir si existe una única unidad conceptual capaz de explicar todos los elementos gestionados por la plataforma.

## Hipótesis inicial

Debe existir una única unidad del dominio sobre la que pueda construirse todo el modelo conceptual.

## Método

La investigación se desarrolló analizando situaciones reales en lugar de conceptos previamente definidos.

Regla metodológica principal:

> No modelar conceptos. Modelar situaciones.

Casos estudiados:

- libro;
- moneda;
- fósil;
- nota;
- fotografía;
- traducción;
- resumen;
- crítica;
- conversación;
- sensor.

## Observaciones

- El objeto original existe antes que la plataforma.
- La plataforma nunca modifica el objeto original.
- Las relaciones desempeñan un papel estructural mucho mayor del previsto inicialmente.
- Ninguna definición única consiguió explicar todos los casos sin introducir excepciones.

## Conclusiones

La hipótesis de una unidad universal dejó de resultar productiva.

La investigación condujo inicialmente a distinguir dos ámbitos diferentes:

- dominio intelectual;
- dominio físico.

Las investigaciones posteriores refinarían esta primera distinción hasta desembocar en la separación entre:

- dominio estructural;
- teoría de frontera.

## Resultado

Investigación cerrada.

Su principal aportación consiste en abandonar la búsqueda de una unidad conceptual universal y adoptar una metodología basada en el análisis de fenómenos.

---

# Investigación 002

## Título

Delimitación del dominio de la plataforma

## Estado

Cerrada

## Objetivo

Determinar qué parte del ciclo completo del conocimiento pertenece realmente al dominio de la plataforma.

## Hipótesis inicial

El conocimiento pertenece al dominio intelectual mientras que la plataforma actúa únicamente sobre sus materializaciones persistentes.

## Método

Se compararon distintos fenómenos en los que intervienen:

- conocimiento;
- soporte persistente;
- interpretación;
- plataforma.

El objetivo consistía en identificar qué elementos permanecen bajo responsabilidad de la plataforma y cuáles pertenecen necesariamente al exterior.

## Observaciones

- El conocimiento nunca reside directamente en la plataforma.
- La plataforma únicamente incorpora configuraciones estructurales persistentes.
- La interpretación corresponde al agente y permanece fuera del dominio de la plataforma.
- La misma configuración puede ser interpretada de forma distinta sin modificar su estructura.

## Conclusiones

La plataforma no gestiona conocimiento.

Gestiona configuraciones estructurales susceptibles de ser recuperadas y organizadas.

La interpretación constituye una relación externa al dominio estructural.

## Resultado

Investigación cerrada.

La delimitación obtenida constituye uno de los principios fundamentales sobre los que se construye el modelo conceptual.

---

# Investigación 003

## Título

Naturaleza del objeto del dominio

## Estado

Cerrada

## Objetivo

Determinar cuál es realmente el objeto fundamental sobre el que opera la plataforma.

## Hipótesis inicial

La plataforma trabaja sobre representaciones.

## Evolución histórica

```text
Unidad de información
        ↓
Entidad
        ↓
Representación
        ↓
Expresión
        ↓
Inscripción
        ↓
Configuración interpretable
        ↓
Configuración estructural
          +
Relación de interpretabilidad
```

## Observaciones

- La plataforma no gestiona conocimiento.
- El objeto persistente del dominio posee naturaleza estructural.
- La interpretación no pertenece al dominio de la plataforma.
- Una misma configuración puede mantener exactamente la misma estructura mientras cambia su interpretabilidad.
- La interpretabilidad depende de la relación entre una configuración y un agente, no únicamente de la configuración.

## Conclusiones

La noción de "configuración interpretable" mezclaba dos niveles conceptuales distintos:

- una reconstrucción perteneciente al dominio estructural;
- una relación entre dicho dominio y un agente interpretante.

Las auditorías posteriores condujeron a escindir ambos conceptos.

## Resultado

El objeto fundamental del dominio queda identificado como la **configuración estructural**.

La **relación de interpretabilidad** pasa a formar parte de la teoría de frontera y deja de considerarse un concepto perteneciente al núcleo estructural.

Investigación cerrada.

---

# Investigación 004

## Título

Ciclo conceptual del conocimiento

## Estado

En evolución

## Objetivo

Comprender el ciclo completo que relaciona la construcción del conocimiento, su materialización, la actuación de la plataforma y la posterior reconstrucción de conocimiento por parte de un agente.

## Hipótesis inicial

La plataforma participa en un ciclo más amplio que comienza con la generación de conocimiento y concluye cuando dicho conocimiento puede reconstruirse nuevamente a partir de una configuración persistente.

## Modelo inicial

```text
Configuración interpretable
        ↓
Interpretación
        ↓
Conocimiento
        ↓
Nueva configuración
        ↓
Incorporación
        ↓
Plataforma
```

## Evolución de la investigación

Las investigaciones posteriores mostraron que el modelo inicial mezclaba fenómenos pertenecientes a dos ámbitos diferentes.

La plataforma no interviene durante la construcción del conocimiento ni durante la interpretación.

Su responsabilidad comienza cuando una configuración estructural es incorporada al dominio y finaliza cuando dicha configuración puede recuperarse.

## Modelo actualmente aceptado

```text
Conocimiento
        ↓
Configuración estructural
        ↓
Incorporación
        ↓
Plataforma
        ↓
Conservación
        ↓
Organización
        ↓
Recuperación
        ↓
Configuración estructural

──────── Frontera del dominio ────────

        ↓
Interpretación
        ↓
Conocimiento
```

## Observaciones

- El conocimiento no circula por la plataforma.
- La plataforma actúa exclusivamente sobre configuraciones estructurales persistentes.
- La interpretación pertenece al agente y queda fuera del dominio estructural.
- La frontera entre dominio estructural y teoría de frontera constituye un resultado de la investigación, no un supuesto inicial.

## Conclusiones

El ciclo conceptual completo continúa siendo válido como explicación general del funcionamiento de la plataforma.

Sin embargo, únicamente una parte de dicho ciclo pertenece a la teoría estructural.

## Resultado

Investigación abierta.

La estructura general del ciclo se considera consolidada, mientras que la formalización de la teoría de frontera permanece abierta.

---

# Investigación 005

## Título

Responsabilidades fundamentales de la plataforma

## Estado

En evolución

## Objetivo

Determinar el conjunto mínimo de responsabilidades que debe satisfacer cualquier plataforma construida sobre la teoría estructural.

## Hipótesis inicial

Existe un conjunto reducido de responsabilidades independientes de cualquier decisión de implementación.

## Responsabilidades inicialmente identificadas

- identificar;
- incorporar;
- conservar;
- organizar;
- relacionar;
- recuperar;
- preservar la procedencia;
- preservar la evolución.

## Evolución de la investigación

Las investigaciones posteriores condujeron a distinguir tres niveles diferentes.

### Funciones estructurales

Describen aquello que resulta imprescindible para reconstruir los fenómenos fundamentales del dominio.

No pertenecen a la plataforma.

Constituyen el núcleo de la teoría.

### Reconstrucciones

Describen conceptos derivados obtenidos a partir del núcleo estructural.

No amplían el perfil funcional.

### Responsabilidades de plataforma

Describen operaciones realizadas sobre configuraciones estructurales ya existentes.

No forman parte del núcleo de la teoría.

## Observaciones

- Varias responsabilidades inicialmente consideradas fundamentales resultaron ser consecuencias del modelo de plataforma.
- La plataforma presupone la existencia del dominio estructural, pero no lo define.
- El perfil funcional y las responsabilidades de plataforma pertenecen a niveles diferentes de la arquitectura.

## Resultado actual

La lista inicial permanece como catálogo de responsabilidades candidatas.

Su clasificación definitiva dependerá del desarrollo completo del modelo de plataforma.

Investigación abierta.

---

# Investigación 006

## Título

Relaciones como elementos del dominio

## Estado

Pendiente

## Objetivo

Determinar la naturaleza conceptual de las relaciones y su papel dentro del dominio.

## Hipótesis inicial

Las relaciones podrían constituir elementos fundamentales del dominio y no simples vínculos auxiliares entre entidades previamente dadas.

## Preguntas abiertas

- ¿Las relaciones pertenecen al dominio o constituyen reconstrucciones?
- ¿Puede existir una relación sin aquello que relaciona?
- ¿Pueden existir relaciones entre relaciones?
- ¿Participan las relaciones en el mismo ciclo conceptual que el resto de elementos del dominio?
- ¿La organización estructural puede reconstruirse únicamente mediante relaciones?

## Estado actual

La investigación permanece pendiente.

Los resultados obtenidos hasta ahora aconsejan abordarla una vez concluya la auditoría del perfil funcional y de la firma mínima.

---

# Investigación 007

## Título

Clasificación de las transformaciones del dominio

## Estado

Pendiente

## Objetivo

Determinar si todas las transformaciones observadas pertenecen a una única categoría conceptual o si existen clases estructuralmente diferentes.

## Hipótesis inicial

No todas las transformaciones desempeñan la misma función dentro del dominio.

Es posible distinguir varias categorías irreducibles.

## Clasificación provisional

### Transformaciones constitutivas

Alteran el conjunto de configuraciones que pertenecen al dominio.

Ejemplos provisionales:

- incorporar;
- eliminar definitivamente.

### Transformaciones estructurales

Modifican la organización del dominio sin alterar el conjunto de configuraciones existentes.

Ejemplos provisionales:

- organizar;
- relacionar;
- clasificar;
- versionar.

### Transformaciones interactivas

Permiten actuar sobre el dominio sin modificar su estructura.

Ejemplos provisionales:

- recuperar;
- consultar;
- explorar.

## Observaciones

La clasificación propuesta continúa siendo una hipótesis de trabajo.

Todavía no se ha determinado:

- si las categorías son exhaustivas;
- si son mutuamente excluyentes;
- si todas las transformaciones admiten una clasificación estable.

## Resultado

Investigación pendiente.

Su resolución dependerá de la consolidación del modelo de plataforma y de la validación definitiva de la teoría estructural.

---

# Investigación 008

## Título

Reducción del núcleo estructural

## Estado

En progreso

## Objetivo

Determinar el conjunto mínimo de funciones estructurales necesarias para reconstruir todos los fenómenos aceptados por la teoría.

## Hipótesis inicial

El catálogo fenomenológico puede reconstruirse mediante un número reducido de funciones estructurales irreducibles.

## Método

La investigación se desarrolló mediante reducciones sucesivas del núcleo teórico.

Cada candidato fue sometido al siguiente procedimiento:

1. intentar reconstruir todos los fenómenos utilizando únicamente los elementos aceptados;
2. eliminar sistemáticamente funciones candidatas;
3. analizar los contraejemplos obtenidos;
4. aceptar únicamente aquellas diferencias cuya eliminación impidiera reconstruir el catálogo.

## Principales líneas investigadas

- reducción progresiva de primitivas;
- análisis del núcleo estructural;
- separación entre exigencias y funciones;
- reconstrucción de conceptos derivados;
- búsqueda de un perfil funcional mínimo.

## Observaciones

- numerosos conceptos inicialmente considerados fundamentales pudieron reconstruirse;
- la reducción afectó tanto a conceptos del dominio como a funciones candidatas;
- las reconstrucciones mostraron que una misma función podía manifestarse mediante distintas realizaciones formales.

## Resultados actuales

La investigación ha conducido provisionalmente a un perfil funcional mínimo compuesto por tres funciones estructurales:

- individuación;
- articulación estructural;
- articulación evolutiva.

No se ha identificado hasta el momento ninguna cuarta función imprescindible para reconstruir los fenómenos aceptados.

## Estado

La investigación permanece abierta mientras continúe la auditoría de completitud y la búsqueda de posibles contraejemplos.

---

# Investigación 009

## Título

Auditoría de la firma mínima

## Estado

En progreso

## Objetivo

Comprobar si la firma actualmente aceptada constituye una realización mínima del perfil funcional descubierto.

## Hipótesis inicial

Pueden existir distintas firmas capaces de realizar el mismo perfil funcional.

La investigación debe determinar cuál de ellas introduce el menor compromiso estructural posible.

## Líneas de investigación

- análisis de MA-003;
- teoría de la parte;
- teoría de la copia;
- teoría de la referencia;
- teoría de la dependencia;
- legitimidad de las extensiones conservativas;
- separación entre firma, axiomas y formalismo.

## Observaciones

- varias primitivas inicialmente consideradas necesarias pudieron reconstruirse;
- la firma y el perfil funcional pertenecen a niveles conceptuales distintos;
- distintas realizaciones formales pueden describir exactamente el mismo comportamiento estructural.

## Resultado provisional

Hasta el momento no se ha identificado ninguna capacidad estructural adicional imprescindible.

La firma actualmente aceptada continúa siendo compatible con el perfil funcional mínimo.

## Estado

Investigación abierta.

Permanecerá abierta mientras continúe la auditoría de minimalidad de la teoría.

---

# Investigación 010

## Título

Separación entre dominio y formalismo

## Estado

En progreso

## Objetivo

Determinar qué elementos pertenecen realmente a la teoría del dominio y cuáles corresponden exclusivamente al lenguaje formal utilizado para describirla.

## Hipótesis inicial

Parte de los conceptos considerados inicialmente estructurales podrían pertenecer únicamente al formalismo lógico.

## Líneas de investigación

- igualdad;
- co-referencia;
- unificación;
- sustitución;
- composición;
- coincidencia argumental;
- separación entre estructura e interpretación.

## Observaciones

- varias relaciones aparentemente fundamentales pudieron reconstruirse mediante igualdad lógica y unificación de variables;
- la coincidencia entre ocurrencias argumentales no parece constituir una relación estructural independiente;
- la separación entre estructura e interpretación permitió delimitar con precisión la frontera del dominio.

## Resultados provisionales

La teoría estructural debe mantenerse independiente de:

- la lógica utilizada para formalizarla;
- el lenguaje empleado para describirla;
- las relaciones propias de la interpretación.

Esta investigación ha reforzado la distinción entre:

- dominio estructural;
- teoría de frontera;
- metateoría.

## Estado

Investigación abierta.

Su objetivo final consiste en demostrar que el núcleo estructural permanece invariante frente a cambios de formalismo.

---

# Estado general de la investigación

La investigación ha evolucionado desde la búsqueda de una unidad fundamental del dominio hasta la identificación de un perfil funcional mínimo capaz de reconstruir el catálogo fenomenológico aceptado.

Las principales conclusiones alcanzadas hasta el momento son:

- abandono de una ontología basada en una unidad conceptual universal;
- delimitación del dominio estructural de la plataforma;
- identificación de la configuración estructural como objeto del dominio;
- separación entre dominio estructural y teoría de frontera;
- descubrimiento de un perfil funcional mínimo actualmente compuesto por tres funciones estructurales;
- distinción entre perfil funcional, firma, axiomas y formalismo;
- consolidación progresiva del proceso de auditoría de completitud.

Las principales líneas abiertas continúan siendo:

- completar la demostración de minimalidad del perfil funcional;
- completar la formalización axiomática de la teoría;
- demostrar la equivalencia entre posibles firmas alternativas;
- ampliar la validación mediante dominios independientes;
- concluir la auditoría de completitud;
- completar la validación de la metateoría.

---

# Relación con el resto de la arquitectura documental

La presente investigación constituye el origen de toda la arquitectura documental.

Sus resultados alimentan progresivamente los documentos posteriores, siguiendo el orden establecido por el marco teórico.

```text
Marco teórico
        ↓
Investigación
        ↓
Fenómenos fundamentales
        ↓
Reducción de fenómenos
        ↓
Exigencias estructurales
        ↓
Perfil funcional
        ↓
Axiomas
        ↓
Conclusiones consolidadas
        ↓
Modelo conceptual
        ↓
Validación
        ↓
Glosario
        ↓
Reconstrucciones
        ↓
Modelo de plataforma
        ↓
Auditoría de completitud
        ↓
Validación de la metateoría
```

Cada documento utiliza únicamente resultados consolidados en los documentos anteriores, garantizando así la trazabilidad completa del proceso de descubrimiento de la teoría.

---

# Estado del documento

Este documento recoge el historial de la investigación conceptual que condujo al desarrollo de la teoría estructural.

No constituye una exposición de la teoría vigente, sino el registro razonado del proceso mediante el cual dicha teoría fue descubierta, contrastada y progresivamente consolidada.

Las investigaciones cerradas forman parte de la historia metodológica del proyecto.

Las investigaciones abiertas continúan orientando las líneas actuales de trabajo y podrán actualizarse conforme aparezcan nuevos resultados o nuevas auditorías.


---

# Reapertura global de la investigación conceptual

La sección siguiente conserva la investigación desarrollada durante la reapertura iniciada en `H-DPV-107` y cerrada mediante `R-DPV-268`.

No sustituye las investigaciones `001–010` anteriores.

Registra una etapa posterior de revisión y reconstrucción del modelo conceptual.

---

# Cierre de la reapertura `H-DPV-107`

## Objeto de la reapertura

La reapertura iniciada en `H-DPV-107` examinó si los resultados consolidados que todavía sostenían:

```text
PF = {
    CAN-F1,
    CAN-F2,
    CAN-F3
}
```

podían mantenerse después de eliminar las antiguas autoridades constitutivas y de someter el perfil funcional, sus exigencias, su firma y sus operaciones derivadas a pruebas reconstructivas independientes.

La investigación no se limitó a preguntar si una realización concreta podía sustituirse por otra.

La cuestión progresivamente examinada fue más fuerte:

> ¿permanece algún contenido funcional, formal, axiomático o principial universal cuya eliminación produzca una pérdida concreta no reconstruible respecto del corpus fenomenológico actualmente aceptado?

La documentación consolidada anterior todavía establece explícitamente el perfil mínimo:

```text
CAN-F1 — Individuación
CAN-F2 — Articulación estructural
CAN-F3 — Articulación evolutiva
```

y una realización mediante:

```text
CAN-F1 → P-001
CAN-F2 → MA-001
CAN-F3 → MA-002
```

con la sorte auxiliar `O`.

Ese estado documental constituye el punto de partida histórico de la reapertura.

---

# 1. Hipótesis sometidas a falsación

La investigación fue eliminando sucesivamente hipótesis de necesidad cada vez más débiles.

## H-1 — Necesidad de `CAN-F1`

Se examinó si los fenómenos históricamente asociados a individuación exigían una capacidad funcional universal independiente.

La prueba mostró que los contenidos legítimos podían conservarse mediante discriminaciones y criterios específicos sin postular una función universal `CAN-F1`.

Resultado:

```text
CAN-F1
→ irreducibilidad falsada.
```

---

## H-2 — Necesidad independiente de `CAN-F2` y `CAN-F3`

Después de eliminar `CAN-F1`, se reconstruyó provisionalmente:

```text
PF* = {
    CAN-F2,
    CAN-F3
}
```

Se examinó si ambas capacidades realizaban trabajos funcionalmente diferentes.

La distinción histórica:

```text
estructural / evolutivo
```

fue sometida a sucesivas pruebas de reducción.

---

## H-3 — Necesidad de una forma evolutiva independiente

Se auditaron:

```text
orientación;
polaridad;
continuidad;
correspondencia;
trayectoria;
producción;
operación;
aplicación;
entrada;
resultado;
ocurrencia.
```

Ninguna proporcionó un residuo independiente suficiente para demostrar una capacidad universal `CAN-F3`.

Los criterios inicialmente utilizados para reconocerla contenían en varios casos vocabulario equivalente al fenómeno que pretendían identificar.

Resultado:

```text
CAN-F3
→ hipótesis de irreducibilidad falsada.
```

---

## H-4 — Suficiencia de un perfil monofuncional

Se reconstruyó:

```text
PF** = {
    CAN-F2
}
```

y se revalidó individual y globalmente el catálogo:

```text
AF-01 … AF-54.
```

No apareció ninguna fila ni propiedad emergente de la interacción entre filas cuya conservación exigiera restaurar `CAN-F3`.

También se comprobó que `CAN-F2` no podía interpretarse como:

```text
“capacidad para introducir
cualquier predicado imaginable”
```

porque ello trivializaría la reducción.

---

## H-5 — `CAN-F2` como capacidad conceptual del dominio

La formulación residual:

```text
CAN-F2**
— realización relacional n-aria
```

fue sometida a una prueba de cambio de nivel.

Se comprobó que las pérdidas históricamente atribuidas a `CAN-F2` podían formularse directamente como insuficiencias de determinadas representaciones:

```text
X ≠obs Y

pero

ρ(X) = ρ(Y)

y la diferencia no es
reconstructivamente recuperable.
```

La necesidad demostrada era, por tanto, una condición de adecuación de la representación y no una capacidad positiva del dominio.

Resultado:

```text
CAN-F2**
→ externalizable al nivel representacional.
```

---

# 2. Resultado sobre el perfil funcional

Después de las pruebas anteriores:

```text
CAN-F1 → eliminado

CAN-F3 → eliminado

CAN-F2 → externalizado
         como exigencia representacional.
```

Por tanto:

```text
PF_min = ∅.
```

Este resultado significa:

> No se ha identificado ninguna capacidad funcional universal irreducible que deba postularse como contenido conceptual propio del dominio.

No significa que no existan:

```text
relaciones concretas;
criterios concretos;
reglas concretas;
diferencias;
procesos;
dependencias;
historias;
traducciones;
colecciones;
transformaciones;
```

cuando un fenómeno específico las justifique.

Significa que su existencia no obliga a introducir una **familia universal de capacidades primitivas**.

---

# 3. Reducción de las exigencias estructurales

Las exigencias supervivientes:

```text
ES-002*
ES-003*
```

fueron sometidas a reducción conjunta.

Los contenidos históricamente distribuidos entre ellas:

```text
organización;
aridad pertinente;
unidad de ocurrencia;
papeles;
asignaciones;
orden;
posición;
vínculos fundados;
condiciones de conexión;
```

quedaron reconstruibles mediante un único patrón:

```text
si dos situaciones
son legítimamente distinguibles
respecto de una evaluación,

una representación adecuada
no puede destruir
la posibilidad de recuperar
esa diferencia.
```

Inicialmente se formuló:

```text
EG-1
```

y posteriormente:

```text
EG-1*
— Conservación de capacidad evaluativa.
```

---

# 4. Eliminación de `EG-1*` como principio independiente

La investigación comprobó finalmente que `EG-1*` no añadía contenido independiente a la definición relativa de adecuación.

La forma residual es metalingüística:

```text
Adeq(ρ; Q,A)
```

cuando una representación `ρ`, respecto de una cuestión `Q` y un alcance `A`, conserva o permite reconstruir la información necesaria para reproducir las evaluaciones legitimadas dentro de dicho alcance.

Por tanto:

```text
EG-1*
→ absorbido por la definición
  contextual de adecuación.
```

No queda una exigencia estructural universal adicional.

---

# 5. Resultado sobre la firma conceptual

El antiguo perfil había producido una realización tipada:

```text
Sortes:
    P-001
    O

Predicados:
    MA-001ₙ
    MA-002
```

y una tesis provisional de minimalidad representacional.

La eliminación del perfil funcional como conjunto de capacidades primitivas destruye la derivación necesaria de esa firma.

En consecuencia:

```text
firma conceptual universal
demostrada
=
∅.
```

Esto no prohíbe que una realización concreta utilice:

```text
objetos;
relaciones;
predicados;
tipos;
hipergrafos;
funciones;
tablas;
estructuras algebraicas;
```

u otros recursos.

Significa únicamente que **la teoría conceptual no obliga universalmente a una firma particular**.

---

# 6. Resultado sobre los axiomas

La antigua axiomatización ya había concluido que no se necesitaban axiomas sustantivos generales adicionales a la firma.

Después de eliminar también la necesidad universal de la firma:

```text
axiomas sustantivos universales
=
∅.
```

La antigua tesis:

```text
dos sortes
+
dos modos de articulación
+
ningún axioma adicional
```

deja de constituir la realización mínima necesaria de la teoría.

---

# 7. Reducción del antiguo plano derivativo

La reapertura alcanzó también las operaciones históricamente derivadas del perfil bifuncional.

Se redujeron sucesivamente:

```text
Componer-E
Componer-V
        ↓
Formar-U
```

y:

```text
CE
TV
        ↓
U.
```

Después:

```text
Formar-U
Reconstruir
        ↓
una única formación
de resultado derivado.
```

Posteriormente:

```text
U
Φ
```

dejaron de justificar dos clases fundamentales de resultados.

La operación general candidata:

```text
Derivar(F*,K) → D
```

fue también eliminada como componente conceptual independiente.

Su contenido quedó reducido a:

```text
fundamentos concretos
+
criterios/reglas concretos
+
condiciones concretas
→
resultado autorizado.
```

---

# 8. Eliminación de `K` como categoría uniforme

Se comprobó que `K` agrupaba heterogéneamente:

```text
reglas;
definiciones;
criterios;
condiciones;
procedimientos;
restricciones.
```

No se identificó una estructura interna uniforme necesaria.

Resultado:

```text
K

categoría conceptual:
ELIMINADA

estatuto:
metavariable útil
del metalenguaje.
```

La eliminación de `K` no elimina los criterios o reglas particulares.

Elimina únicamente la pretensión de que todos ellos formen una categoría universal de la teoría.

---

# 9. Reducción de los principios globales `PMG-1/PMG-2`

## `PMG-1`

La acotación justificativa:

```text
ningún resultado puede adquirir
más contenido o autoridad
que lo justificado
```

queda absorbida por lo que significa atribuir justificación a un resultado dentro de un régimen evaluativo concreto.

Resultado:

```text
PMG-1
→ eliminado como principio universal.
```

---

## `PMG-2`

La reconstruibilidad verificable no queda demostrada como parte universal del significado de «justificado».

Su residuo corresponde a exigencias como:

```text
trazabilidad;
explicitación de dependencias;
carga de prueba;
apertura al fracaso;
revisión;
comprobabilidad.
```

Estas condiciones pertenecen al régimen metodológico de investigación.

Resultado:

```text
PMG-2
→ eliminado como principio
  sustantivo universal

→ reubicado
  en metodología crítica.
```

---

# 10. Resultado vacío final

La cadena completa de reducción produce:

```text
Perfil funcional universal
    = ∅

Firma conceptual universal
    = ∅

Axiomas sustantivos universales
    = ∅

Principios específicos universales
del núcleo conceptual
    = ∅.
```

Debe evitarse interpretar esta conclusión como:

```text
teoría = ∅.
```

El resultado correcto es:

> La investigación no ha identificado actualmente ningún **núcleo positivo universal de primitivas, funciones, firma, axiomas o principios** que deba pertenecer específicamente al dominio conceptual.

---

# 11. Prueba de no trivialización

El resultado vacío fue sometido explícitamente a una prueba global de no trivialización.

La prueba preguntó si, eliminadas las primitivas universales, todavía puede distinguirse:

```text
una teoría investigada
```

de:

```text
una colección arbitraria
de afirmaciones.
```

La respuesta es positiva.

La teoría continúa conservando:

```text
problemas investigados;
situaciones;
contrastes;
resultados;
alcances;
dependencias justificativas;
falsadores;
estados de investigación;
condiciones de reapertura;
relaciones con otros resultados.
```

Además, diferentes niveles externos siguen proporcionando:

```text
marco lógico
→ consistencia, consecuencia,
  equivalencia, etc.

regímenes evaluativos
→ criterios concretos
  de justificación y valoración.

metodología crítica
→ trazabilidad,
  carga de prueba,
  falsación,
  revisión,
  explicitación de dependencias.
```

La cooperación de estos niveles permite rechazar afirmaciones arbitrarias sin introducir un nuevo núcleo conceptual universal.

---

# 12. Falsación de la hipótesis de trivialización

Incluso bajo:

```text
PF = ∅
Σ = ∅
Ax = ∅
```

una afirmación candidata todavía puede ser rechazada porque:

```text
no responde a un problema legítimo;

carece de fundamento;

amplía injustificadamente su alcance;

depende circularmente
de aquello que pretende justificar;

contradice resultados
que deben mantenerse conjuntamente;

no posee falsadores;

no puede resistir cambios
en sus fundamentos;

o no supera las condiciones
metodológicas de aceptación.
```

Por tanto:

```text
núcleo positivo universal = ∅

⇏

anything goes.
```

La hipótesis de trivialización queda falsada respecto del corpus actual.

---

# 13. Resultado final de la reapertura

La reapertura iniciada en `H-DPV-107` queda cerrada por reducción.

El resultado final puede expresarse:

```text
H-DPV-107
        ↓
reapertura del antiguo
perfil funcional
        ↓
eliminación de CAN-F1
        ↓
reconstrucción
{CAN-F2,CAN-F3}
        ↓
falsación de CAN-F3
        ↓
perfil monofuncional
{CAN-F2}
        ↓
externalización de CAN-F2
        ↓
PF_min = ∅
        ↓
firma universal = ∅
        ↓
axiomas universales = ∅
        ↓
principios universales
específicos = ∅
        ↓
auditoría de no trivialización
        ↓
PASS
```

---

# 14. `R-DPV-268 — Cierre global de la reapertura H-DPV-107`

> La reapertura iniciada en `H-DPV-107` queda cerrada por reducción.
>
> Las hipótesis de necesidad de `CAN-F1`, `CAN-F2` y `CAN-F3` como capacidades funcionales universales propias del dominio no sobreviven a las pruebas sucesivas de eliminación, neutralización semántica, revalidación fenomenológica, interacción global, antiinflación y cambio de nivel.
>
> Tampoco sobreviven como componentes universales necesarios las realizaciones históricas `P-001`, `O`, `MA-001`, `MA-002`, las distinciones `S/V`, las operaciones `Componer-E`, `Componer-V`, `Reconstruir`, `Formar-U`, `Derivar-C`, `Derivar`, las clases `CE/TV/R/U/Φ`, la categoría uniforme `K`, `EG-1*` ni los principios universales `PMG-1/PMG-2`.
>
> El resultado consolidado de la investigación es:
>
> ```text
> perfil funcional universal = ∅
>
> firma conceptual universal = ∅
>
> axiomas sustantivos universales = ∅
>
> principios específicos universales
> del núcleo conceptual = ∅.
> ```
>
> Esta vaciedad no trivializa la teoría.
>
> Permanecen resultados fenomenológicos, contrastes, alcances, dependencias justificativas, falsadores, criterios específicos, condiciones metodológicas y marcos externos de evaluación capaces de discriminar entre resultados legítimos y afirmaciones arbitrarias.
>
> El resultado vacío constituye una conclusión falsable y relativa al corpus actualmente auditado, no una demostración de que ninguna futura investigación pueda identificar un contenido universal irreducible.
>
> Una reapertura futura sólo estará justificada si aparece un candidato que:
>
> 1. pertenezca legítimamente al alcance;
> 2. introduzca una pérdida concreta al eliminarse;
> 3. no pueda reconstruirse mediante resultados o criterios ya disponibles;
> 4. no sea una propiedad del lenguaje, del marco lógico, del régimen evaluativo o de la metodología;
> 5. no sea una clasificación metalingüística de resultados heterogéneos;
> 6. mantenga su pérdida bajo una auditoría global de interacción y no trivialización.

**Estado:** `CERRADA POR REDUCCIÓN`.

---

# 15. Consecuencias documentales inmediatas

El cierre invalida como estado consolidado actual toda afirmación que presente como necesarias:

```text
PF = {CAN-F1,CAN-F2,CAN-F3}

P-001
O
MA-001
MA-002

S/V

CAN-F1/CAN-F2/CAN-F3
como perfil mínimo irreducible

la firma tipada histórica
como firma conceptual mínima

la cadena necesaria:
ES → CAN → firma → axiomas.
```

Los documentos históricos de investigación podrán conservar estas formulaciones cuando se identifiquen claramente como estados anteriores posteriormente falsados.

Los documentos consolidados no podrán continuar presentándolas como estado vigente.

---

# 16. Orden obligatorio de reapertura documental

La actualización deberá respetar **dependencias justificativas**, no simplemente el número de archivo.

## Fase 1 — Fundamentos conceptuales afectados directamente

### 1. `04-exigencias-estructurales.md`

Debe reabrirse primero.

Razón:

el antiguo flujo:

```text
ES-001
ES-002
ES-003
        ↓
perfil funcional
```

ha sido falsado.

Debe registrar:

```text
ES-001
→ eliminada previamente;

ES-002*
ES-003*
→ subsumidas;

EG-1 / EG-1*
→ posteriormente reducidos
  a adecuación contextual.
```

El documento deberá concluir que no permanece demostrada una **exigencia estructural universal positiva** cuya realización obligue a un perfil funcional.

---

### 2. `05-perfil-funcional.md`

Sólo después de `04`.

Es el documento más directamente falsado.

Actualmente todavía presenta `CAN-F3` como función irreducible y afirma que ninguna función adicional es necesaria respecto del perfil de tres funciones.

Debe sustituir ese resultado por:

```text
PF_min = ∅.
```

El documento no debe eliminar su investigación histórica.

Debe documentar la cadena:

```text
{CAN-F1,CAN-F2,CAN-F3}
→
{CAN-F2,CAN-F3}
→
{CAN-F2}
→
∅.
```

Su resultado negativo es precisamente su nueva conclusión.

---

### 3. `06-axiomas.md`

Sólo después de cerrar `05`.

La versión actualmente consolidada afirma:

```text
CAN-F1 → P-001
CAN-F2 → MA-001
CAN-F3 → MA-002
```

y contiene la firma:

```text
Sortes:
    P-001
    O

Predicados:
    MA-001ₙ
    MA-002.
```

También mantiene `AX-MIN-001`, según el cual la realización mínima posee dos sortes y dos modos de articulación.

Todo ello pierde su fundamento necesario.

El nuevo cierre deberá registrar:

```text
firma conceptual universal
= ∅

axiomas sustantivos universales
= ∅.
```

Las firmas concretas pasarán a ser recursos posibles de formalismos particulares, no compromisos universales de la teoría.

---

# 17. Fase 2 — Consolidación teórica

Una vez estabilizados `04–06`:

### 4. `07-conclusiones-consolidadas.md`

Debe actualizarse inmediatamente después.

Es especialmente importante porque el propio documento se presenta como referencia oficial del estado consolidado de la teoría.

Debe dejar de consolidar:

```text
individuación;
articulación estructural;
articulación evolutiva
```

como funciones universales primitivas.

Debe incorporar explícitamente el cierre:

```text
PF_min = ∅
firma universal = ∅
axiomas universales = ∅
```

y la prueba de no trivialización.

---

### 5. `08-modelo-conceptual.md`

Depende de las nuevas conclusiones.

Actualmente todavía contiene `CAN-F3 — Articulación evolutiva` y referencias al antiguo aparato funcional.

Debe reconstruirse sin asumir:

```text
CAN-F1/CAN-F2/CAN-F3;
P-001;
MA-001;
MA-002;
S/V
```

como arquitectura conceptual fundamental.

No significa que desaparezcan fenómenos concretos de relación, cambio, historia, etc.

Deberán aparecer sólo allí donde su contenido específico esté justificado.

---

# 18. Fase 3 — Documentos derivados del antiguo modelo

Después de estabilizar `08`:

### 6. `12-reconstrucciones.md`

Debe reabrirse antes que el modelo de plataforma porque conserva explícitamente:

```text
CAN-F3;
articulación evolutiva;
composición de evoluciones;
reconstrucciones basadas
en el antiguo perfil.
```

Debe reconstruirse desde resultados y criterios concretos, sin `S/V`, `CE/TV`, `Reconstruir` o `Derivar` como categorías necesarias.

---

### 7. `13-modelo-de-plataforma.md`

Debe revisarse después de `12`.

Actualmente hereda recursos conceptuales como «articulación evolutiva cuando exista».

La plataforma no puede seguir presentando como obligaciones conceptuales universales recursos cuya necesidad ha sido falsada aguas arriba.

---

### 8. `14-auditoria-de-completitud.md`

Éste requiere **reapertura fuerte**, no simples correcciones.

Su objeto anterior era demostrar completitud de un perfil formado por `CAN-F1…CAN-F3`.

Ese objeto ya no existe como perfil mínimo.

La auditoría deberá pasar a documentar:

```text
completitud de la reducción;
búsqueda de pérdidas residuales;
auditoría global de interacción;
antiinflación;
no trivialización;
condiciones de reapertura.
```

Es probablemente, junto a `05` y `06`, uno de los documentos que más cambiará conceptualmente.

---

### 9. `15-validacion-de-la-metateoria.md`

Debe reabrirse después de `14`.

Todavía contiene preguntas sobre:

```text
unicidad del perfil funcional mínimo;
equivalencia entre perfiles;
demostración formal de minimalidad.
```

Estas preguntas cambian radicalmente después de:

```text
PF_min = ∅.
```

Ahora deberá evaluar si el **cierre por reducción** y su no trivialización son metodológicamente consistentes, no intentar demostrar unicidad de un perfil positivo.

---

# 19. Fase 4 — Sincronización transversal

Una vez consolidados los anteriores:

### 10. `10-preguntas-abiertas.md`

Eliminar o reformular preguntas cuya premisa sea:

```text
existe necesariamente
un perfil funcional positivo.
```

Mantener abiertas, en cambio, cuestiones sobre:

```text
nuevos falsadores;
límites de alcance;
criterios locales;
condiciones futuras de reapertura.
```

---

### 11. `11-glosario.md`

Debe revisarse **después**, no antes.

Los términos:

```text
CAN-F1
CAN-F2
CAN-F3
P-001
MA-001
MA-002
S
V
CE
TV
Reconstruir
Derivar
K
```

no deben simplemente borrarse.

Muchos seguirán siendo necesarios para leer el historial.

Deberán marcarse con estatutos como:

```text
histórico;
candidato eliminado;
metavariable;
clasificación documental;
no fundamental.
```

---

### 12. `01-investigacion.md`

Hay una distinción importante.

El historial previo **no debe reescribirse retrospectivamente**.

Debe conservar las hipótesis que realmente se investigaron y añadir el cierre `H-DPV-107 → R-DPV-268`, dejando explícito que resultados antiguos fueron posteriormente falsados.

Por ello su **registro de cierre** puede añadirse desde el principio del proceso documental, pero su auditoría final de coherencia conviene hacerla aquí, cuando los documentos consolidados ya tengan su nueva forma.

---

# 20. Fase 5 — Propagación fuera del Modelo Conceptual

Sólo una vez consolidado `docs/03-conceptual-model/` deberá propagarse el cambio a cuerpos posteriores.

## Engineering

Es obligatorio reabrir al menos los documentos cuya reconstrucción todavía dice expresamente que se conservan:

```text
CAN-F1;
CAN-F2;
CAN-F3;
P-001;
MA-001;
MA-002;
```

como capacidades/resultados legítimos del Modelo Conceptual.

La reconstrucción histórica de Engineering conserva todavía, por ejemplo, `CAN-F2/MA-001` al eliminar `RA-E`, y `CAN-F3/MA-002` al eliminar `RA-V`.

Esos resultados estaban correctamente reconstruidos **respecto del corpus conceptual que entonces se daba por válido**, pero ese fundamento ha cambiado.

Por tanto deberán reabrirse después del cierre conceptual.

Orden:

```text
03-conceptual-model
        ↓
05-engineering/
03-reconstruccion-de-resultados-historicos.md
        ↓
documentos de arquitectura,
matrices y validación
que dependan de esas reconstrucciones.
```

---

## Governance y Realization

No deben reabrirse primero.

Deben esperar a que quede claro qué resultados conceptuales sobreviven finalmente como fundamentos legítimos.

La documentación existente en Governance todavía presupone que el Modelo Conceptual proporciona recursos para identidad, articulación, transformación y continuidad; por tanto tendrá que revisarse una vez estabilizada la nueva consolidación conceptual.

La misma regla se aplica a Realization.

---

# 21. Orden maestro de reapertura

La secuencia recomendada queda:

```text
REGISTRO DE INVESTIGACIÓN
────────────────────────
01-investigacion.md
    añadir cierre R-DPV-268
        │
        ▼

NÚCLEO DE LA REAPERTURA
───────────────────────
04-exigencias-estructurales.md
        ↓
05-perfil-funcional.md
        ↓
06-axiomas.md
        │
        ▼

CONSOLIDACIÓN
─────────────
07-conclusiones-consolidadas.md
        ↓
08-modelo-conceptual.md
        │
        ▼

DERIVADOS CONCEPTUALES
──────────────────────
12-reconstrucciones.md
        ↓
13-modelo-de-plataforma.md
        ↓
14-auditoria-de-completitud.md
        ↓
15-validacion-de-la-metateoria.md
        │
        ▼

SINCRONIZACIÓN
──────────────
10-preguntas-abiertas.md
        ↓
11-glosario.md
        ↓
auditoría final de 01-investigacion.md
        │
        ▼

PROPAGACIÓN INTERCORPORAL
─────────────────────────
Engineering
        ↓
Governance
        ↓
Realization
        ↓
Product / restantes cuerpos
si existe dependencia demostrada.
```

---

# 22. Documentos que no deben reabrirse automáticamente

No todo documento que mencione:

```text
historia;
evolución;
estructura;
relación;
identidad;
```

queda invalidado.

La reapertura sólo está justificada cuando el contenido depende de alguna tesis falsada, por ejemplo:

```text
CAN-F3 es irreducible;

MA-002 es realización necesaria;

P-001 es una sorte necesaria;

S/V constituyen formas fundamentales;

la completitud del perfil
es {CAN-F1,CAN-F2,CAN-F3};

una operación depende necesariamente
de CE/TV/R/U/Φ;

la firma conceptual mínima
contiene componentes específicos.
```

Una afirmación concreta acerca de traducción, colección, historia o procedencia puede sobrevivir perfectamente si posee justificación independiente.

---

# 23. Regla de actualización documental

La propagación deberá seguir una regla estricta:

```text
no sustituir automáticamente
el antiguo vocabulario
por el nuevo resultado vacío.
```

Para cada afirmación afectada habrá que preguntar:

```text
1. ¿dependía realmente
   de una tesis falsada?

2. ¿posee fundamento independiente?

3. ¿puede conservarse
   sin la antigua primitiva?

4. ¿debe eliminarse,
   reformularse
   o quedar marcada como histórica?
```

Esto impide que la reducción produzca una nueva modificación masiva igualmente injustificada.

---

# 24. Condición de reapertura futura

La investigación `H-DPV-107 → R-DPV-268` permanecerá cerrada mientras no aparezca un nuevo candidato que satisfaga simultáneamente:

```text
pérdida concreta
+
pertenencia legítima al alcance
+
irreducibilidad reconstructiva
+
no externalización
al lenguaje/formalismo
+
no reducción
a régimen evaluativo
+
no reducción
a metodología
+
superación de auditoría global
+
superación de prueba
de no trivialización.
```

La mera utilidad, recurrencia, elegancia formal o existencia de un nombre común no será suficiente.

---

# Estado final

```text
Investigación:
H-DPV-107 → R-DPV-268

Estado:
CERRADA POR REDUCCIÓN

Resultado:
núcleo positivo universal
no demostrado

PF_min:
∅

Firma conceptual universal:
∅

Axiomas sustantivos universales:
∅

Principios específicos universales:
∅

No trivialización:
SUPERADA

Reapertura documental:
OBLIGATORIA

Primer documento sustantivo:
04-exigencias-estructurales.md
```
