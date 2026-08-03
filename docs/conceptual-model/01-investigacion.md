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
