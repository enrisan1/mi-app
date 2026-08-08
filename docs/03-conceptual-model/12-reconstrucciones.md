# 12-reconstrucciones.md

# Reconstrucciones

## Propósito

Este documento desarrolla conceptos complejos obtenidos a partir del perfil funcional, la firma adoptada y las especializaciones conservativas de la teoría.

Las reconstrucciones no constituyen primitivas.

No amplían el perfil funcional.

No modifican la firma fundamental.

Su función consiste en demostrar que conceptos aparentemente autónomos pueden obtenerse combinando capacidades ya presentes en el núcleo de la teoría.

---

# Posición dentro de la arquitectura

Las reconstrucciones se sitúan después de la formalización del núcleo y antes del modelo de plataforma.

```text
Perfil funcional
        ↓
Firma y caracterización axiomática
        ↓
Extensiones conservativas
        ↓
Reconstrucciones
        ↓
Modelo de plataforma
```

El perfil funcional determina las capacidades mínimas.

La firma proporciona una realización concreta de dichas capacidades.

Las extensiones conservativas introducen vocabulario y restricciones particulares.

Las reconstrucciones utilizan todos esos recursos para obtener conceptos estructurales más complejos.

---

# Fundamento de las reconstrucciones

## Perfil funcional

Las reconstrucciones se apoyan en las tres funciones estructurales actualmente aceptadas:

```text
CAN-F1 — Individuación

CAN-F2 — Articulación estructural

CAN-F3 — Articulación evolutiva
```

---

## Firma adoptada

La realización formal actualmente utilizada contiene:

```text
Sortes:
  P-001
  O

Predicados:
  MA-001ₙ : P-001ⁿ → Prop
  para n ≥ 2

  MA-002 : P-001 × O × O → Prop
```

`P-001`, `MA-001` y `MA-002` realizan las tres funciones del perfil.

`O` constituye una categoría argumental auxiliar necesaria para representar los polos de `MA-002`.

---

# Niveles de construcción conceptual

## Nivel 1 — Perfil funcional

Contiene las capacidades estructurales irreducibles:

- individuación;
- articulación estructural;
- articulación evolutiva.

Es el nivel funcional más estable de la teoría.

---

## Nivel 2 — Firma y caracterización

Contiene la realización formal adoptada:

- `P-001`;
- `O`;
- `MA-001`;
- `MA-002`.

También incluye las restricciones de sorteo, tipado, aridad y orden argumental.

---

## Nivel 3 — Extensiones conservativas

Las extensiones conservativas desarrollan teorías particulares sobre la firma existente.

Pueden introducir:

- vocabulario especializado;
- definiciones auxiliares;
- restricciones adicionales;
- axiomas particulares.

No pueden introducir una nueva función estructural irreducible.

Entre las extensiones investigadas se encuentran:

- teoría de la parte;
- teoría de la copia;
- teoría de la dependencia;
- formas estructurales de referencia.

---

## Nivel 4 — Reconstrucciones

Las reconstrucciones obtienen conceptos complejos mediante:

- la firma;
- las extensiones conservativas;
- las reglas ordinarias del formalismo.

No constituyen primitivas ni amplían el núcleo.

---

## Nivel 5 — Modelo de plataforma

El modelo de plataforma utiliza las reconstrucciones para definir responsabilidades conceptuales como:

- incorporación;
- conservación;
- organización;
- recuperación;
- versionado;
- persistencia.

Las decisiones de este nivel no modifican los niveles fundamentales.

---

# Criterios de reconstrucción

Un concepto se considerará legítimamente reconstruido cuando se demuestre que:

1. puede expresarse mediante los niveles previamente aceptados;
2. no introduce una nueva función estructural;
3. no exige ampliar la firma fundamental;
4. conserva los fenómenos que pretende explicar;
5. puede eliminarse como concepto definido sin alterar el núcleo;
6. no pertenece al marco lógico, a la metateoría ni a la teoría de frontera.

---

# Plantilla de análisis

Cada reconstrucción se presenta mediante:

- objetivo;
- fenómeno reconstruido;
- componentes utilizados;
- definición reconstructiva;
- justificación de conservatividad;
- límites;
- estado.

---

# Reconstrucciones estructurales

## R-001 — Evolución compleja

### Objetivo

Reconstruir evoluciones formadas por más de una articulación evolutiva elemental.

### Fenómeno reconstruido

F-003 — Evolución.

También constituye la base de F-004 — Historia y F-010 — Reconstrucción de evolución.

### Componentes utilizados

- `P-001`;
- `O`;
- `MA-002`;
- igualdad lógica;
- co-referencia argumental.

### Definición reconstructiva

Una evolución elemental se representa mediante:

```text
MA-002(p; φ, ψ)
```

Una evolución compleja puede reconstruirse enlazando varias articulaciones mediante polos compartidos:

```text
MA-002(p; φ, ψ)

MA-002(p; ψ, χ)

MA-002(p; χ, ω)
```

La coincidencia entre el polo final de una articulación y el polo inicial de la siguiente queda expresada mediante la reutilización del mismo término.

### Justificación de conservatividad

La reconstrucción:

- no introduce nuevas sortes;
- no introduce nuevos modos de articulación;
- no presupone una relación adicional de sucesión;
- utiliza únicamente instancias de `MA-002` y co-referencia lógica.

La composición no implica necesariamente una articulación elemental adicional:

```text
MA-002(p; φ, ω)
```

Por tanto, la evolución compleja constituye una construcción sobre varias evoluciones elementales y no una nueva primitiva.

### Límites

La reconstrucción no impone:

- linealidad;
- ausencia de ciclos;
- unicidad de continuación;
- ramificación;
- orden temporal global.

Estas propiedades deberán introducirse, cuando sean necesarias, mediante especializaciones concretas.

### Estado

**Reconstrucción validada provisionalmente.**

---

## R-002 — Historia

### Objetivo

Reconstruir una historia como organización compuesta de evoluciones relativas a un mismo participante.

### Fenómeno reconstruido

F-004 — Historia.

### Componentes utilizados

- individuación mediante `P-001`;
- evolución elemental mediante `MA-002`;
- composición de evoluciones;
- co-referencia de polos.

### Definición reconstructiva

Una historia de `p` es una estructura compuesta por articulaciones evolutivas conectadas:

```text
MA-002(p; φ₀, φ₁)

MA-002(p; φ₁, φ₂)

...

MA-002(p; φₙ₋₁, φₙ)
```

La continuidad del referente queda preservada por la repetición del mismo `P-001`.

La continuidad entre transiciones queda expresada por la coincidencia de sus polos.

### Justificación de conservatividad

La historia no introduce una función estructural independiente.

Puede descomponerse en:

```text
individuación
+
articulaciones evolutivas
+
coincidencia argumental
```

La secuencia histórica constituye una propiedad de la composición de las articulaciones, no una nueva capacidad del núcleo.

### Límites

La reconstrucción básica no determina:

- si toda historia debe ser lineal;
- si puede contener ramas;
- si admite ciclos;
- si existe un comienzo o final;
- si todas las evoluciones deben conservarse.

Estas condiciones pertenecen a teorías particulares de historia o versionado.

### Estado

**Reconstrucción provisionalmente validada.**

---

## R-003 — Continuidad

### Objetivo

Reconstruir el reconocimiento de varias diferencias como pertenecientes al mismo elemento.

### Fenómeno reconstruido

F-009 — Continuidad.

### Componentes utilizados

- `P-001`;
- `MA-002`;
- identidad lógica;
- composición de evoluciones.

### Definición reconstructiva

Existe continuidad cuando varias diferencias evolutivas se articulan respecto del mismo participante:

```text
MA-002(p; φ, ψ)

MA-002(p; ψ, χ)
```

La continuidad no se representa mediante una relación adicional.

Se obtiene de:

- la permanencia del mismo referente `p`;
- la conexión entre los polos evolutivos.

### Justificación de conservatividad

La continuidad desaparece como concepto primitivo sin que se pierda capacidad reconstructiva.

Toda su función puede reconstruirse mediante individuación y articulación evolutiva.

### Límites

Esta reconstrucción no impone:

- continuidad física;
- continuidad temporal;
- continuidad causal;
- ausencia de interrupciones.

Expresa únicamente continuidad estructural.

### Estado

**Reconstrucción validada provisionalmente.**

---

## R-004 — Colección

### Objetivo

Reconstruir una agrupación identificable de participantes sin introducir una suerte fundamental de colección.

### Fenómeno reconstruido

F-007 — Composición.

También permite desarrollar agrupaciones y organizaciones plurales.

### Componentes utilizados

- participantes `P-001`;
- articulación estructural `MA-001`;
- posible reificación de la agrupación;
- especializaciones de pertenencia.

### Definición reconstructiva

Una colección puede reconstruirse de dos formas.

#### Reconstrucción no reificada

La colección se identifica con un patrón de articulaciones entre varios participantes:

```text
MA-001ₙ(p₁, p₂, ..., pₙ)
```

o con una familia de articulaciones binarias que define la agrupación.

#### Reconstrucción reificada

Puede introducirse un participante `c : P-001` que representa estructuralmente la colección y articularlo con sus miembros:

```text
MiembroDe(p₁, c)

MiembroDe(p₂, c)

...

MiembroDe(pₙ, c)
```

`MiembroDe` constituye una especialización conservativa de `MA-001`.

### Justificación de conservatividad

La colección:

- no requiere una nueva función estructural;
- puede expresarse mediante articulaciones existentes;
- sólo adquiere autonomía cuando se reifica explícitamente como `P-001`.

La totalidad colectiva es una reconstrucción sobre la organización de participantes.

### Límites

La reconstrucción no determina automáticamente:

- identidad extensional de colecciones;
- orden entre miembros;
- multiplicidad;
- pertenencia repetida;
- pertenencia necesaria;
- criterios de cierre.

Estas propiedades pertenecen a una teoría particular de colecciones.

### Estado

**Reconstrucción provisional.**

---

## R-005 — Región estructural

### Objetivo

Reconstruir una parte delimitable de una estructura más amplia.

### Fenómeno reconstruido

F-006 — Articulación entre elementos.

F-007 — Composición.

### Componentes utilizados

- individuación;
- articulaciones estructurales;
- criterio de delimitación;
- posible reificación.

### Definición reconstructiva

Una región estructural es una subestructura identificable formada por:

- un conjunto de participantes;
- las articulaciones relevantes entre ellos;
- un criterio de delimitación respecto del resto de la estructura.

Esquemáticamente:

```text
participantes seleccionados
+
articulaciones internas
+
frontera de delimitación
```

La región puede reificarse como un nuevo `P-001` cuando deba participar autónomamente en otras articulaciones.

### Justificación de conservatividad

La región no introduce primitivas.

Su delimitación se construye sobre:

- identidad de participantes;
- selección estructural;
- articulaciones existentes.

### Límites

La teoría general no fija un criterio único de delimitación.

Una región puede definirse por:

- pertenencia;
- conectividad;
- función;
- procedencia;
- decisión de aplicación.

Dichos criterios pertenecen a especializaciones concretas.

### Estado

**Reconstrucción provisional.**

---

## R-006 — Configuración estructural

### Objetivo

Reconstruir el objeto fundamental gestionado por la plataforma sin introducirlo como una primitiva del núcleo.

### Fenómeno reconstruido

Relacionada con:

- persistencia;
- organización;
- composición;
- reestructuración;
- incorporación;
- reconstrucción de evolución.

### Componentes utilizados

```text
individuación
+
articulación estructural
+
articulación evolutiva opcional
```

### Definición reconstructiva

Una configuración estructural es una región estructural:

- identificable;
- internamente organizada;
- susceptible de persistencia;
- capaz de participar como unidad en operaciones del modelo de plataforma.

Puede representarse esquemáticamente como:

```text
delimitación referencial
+
organización interna
+
evolución opcional
```

La evolución es opcional porque una configuración puede ser completamente estática.

### Unidad de la configuración

La unidad de una configuración puede reconstruirse mediante:

- un patrón de articulaciones tratado como una totalidad;
- una región estructural delimitada;
- una reificación explícita como `P-001`.

La configuración no constituye por ello una nueva suerte fundamental.

### Persistencia

Una configuración persiste cuando su identidad estructural puede mantenerse a través de diferencias relevantes.

Cuando se registran dichas diferencias, puede asociársele una historia reconstruida mediante `MA-002`.

### Justificación de conservatividad

La configuración estructural utiliza únicamente:

- individuación;
- organización;
- evolución opcional;
- delimitación derivada.

No introduce ninguna cuarta función estructural.

### Límites

La configuración estructural no contiene por sí misma:

- significado;
- conocimiento;
- interpretación;
- capacidad interpretativa intrínseca.

Estas cuestiones pertenecen a la teoría de frontera.

### Estado

**Reconstrucción consolidada provisionalmente.**

---

# Especializaciones conservativas

## E-001 — Teoría de la parte

### Objetivo

Reconstruir relaciones de parte sin introducir un nuevo modo fundamental de articulación.

### Componentes utilizados

- `P-001`;
- `MA-001`;
- predicado especializado `ParteDe`;
- axiomas particulares.

### Definición reconstructiva

```text
ParteDe(a, b)
```

se interpreta como una especialización de la articulación estructural entre `a` y `b`.

Los axiomas concretos dependerán de la teoría mereológica adoptada.

Podrán incluir:

- reflexividad o irreflexividad;
- transitividad;
- antisimetría;
- suplementación;
- dependencia.

### Justificación de conservatividad

`ParteDe` no introduce una nueva capacidad estructural.

Sólo restringe y especializa instancias ya expresables mediante `MA-001`.

### Estado

**Especialización conservativa provisionalmente validada.**

---

## E-002 — Teoría de la copia

### Objetivo

Reconstruir la relación entre una copia y aquello de lo que procede.

### Componentes utilizados

- distinción entre participantes;
- articulación estructural;
- articulación evolutiva cuando se represente el acto de copia;
- restricciones de procedencia o semejanza.

### Definición reconstructiva

La relación estructural de copia puede representarse como:

```text
CopiaDe(c, o)
```

donde `c` y `o` son participantes distinguibles.

`CopiaDe` constituye una especialización de `MA-001`.

Cuando se reconstruye además el proceso de producción de la copia, interviene `MA-002`.

### Justificación de conservatividad

La copia se descompone en:

```text
individuación
+
articulación de procedencia
+
evolución opcional
```

No requiere `MA-003` ni una nueva función estructural.

### Límites

La teoría general no determina:

- grado de semejanza;
- fidelidad;
- intención de copia;
- identidad de contenido;
- autenticidad.

Estas condiciones pertenecen a especializaciones particulares.

### Estado

**Especialización conservativa provisionalmente validada.**

---

## E-003 — Teoría de la dependencia

### Objetivo

Reconstruir relaciones en las que la existencia o la organización de un participante depende estructuralmente de otro.

### Componentes utilizados

- `P-001`;
- `MA-001`;
- predicado especializado `DependeDe`;
- axiomas particulares.

### Definición reconstructiva

```text
DependeDe(a, b)
```

constituye una especialización orientada de `MA-001`.

Las propiedades concretas de la dependencia deberán definirse mediante axiomas de especialización.

### Justificación de conservatividad

La dependencia no introduce una función distinta de la articulación estructural.

Introduce únicamente:

- orientación;
- restricciones;
- vocabulario específico.

### Estado

**Especialización conservativa provisional.**

---

## E-004 — Referencia estructural

### Objetivo

Distinguir una relación estructural de referencia de las relaciones semánticas propias de la teoría de frontera.

### Componentes utilizados

- `P-001`;
- `MA-001`;
- predicado especializado de referencia.

### Definición reconstructiva

Una referencia puramente estructural puede representarse mediante:

```text
RefiereA(a, b)
```

cuando únicamente se requiere conservar una articulación entre dos configuraciones o participantes.

### Límite fronterizo

La referencia deja de ser puramente estructural cuando exige:

- significado;
- intención;
- interpretación;
- condiciones semánticas;
- un agente interpretante.

En ese caso pertenece a la teoría de frontera.

### Estado

**Pendiente de delimitación completa.**

---

# Relación con la teoría de frontera

## Interpretabilidad

La interpretabilidad no constituye una reconstrucción interna del dominio estructural.

Debe expresarse, al menos provisionalmente, mediante una relación contextual:

```text
InterpretablePara(configuración, agente, contexto)
```

Esta relación incorpora elementos externos al núcleo:

- agente;
- contexto;
- condiciones interpretativas.

Por tanto, no debe incluirse entre las reconstrucciones estructurales internas.

---

## Interpretación

La interpretación constituye una actividad externa mediante la cual un agente obtiene o construye conocimiento a partir de una configuración estructural.

La teoría estructural proporciona la configuración.

La teoría de frontera deberá explicar la relación entre:

```text
configuración
+
agente
+
contexto
+
interpretación
+
conocimiento
```

---

## Configuración interpretable

“Configuración interpretable” se conserva únicamente como término histórico.

No constituye una reconstrucción vigente.

Fue sustituida por la distinción entre:

- configuración estructural;
- relación de interpretabilidad.

---

# Relación con el modelo de plataforma

El modelo de plataforma utiliza las reconstrucciones desarrolladas en este documento.

En particular:

- incorpora configuraciones estructurales;
- conserva su organización;
- registra evoluciones;
- reconstruye historias;
- gestiona colecciones y regiones;
- mantiene relaciones de parte, copia, dependencia o procedencia cuando las especializaciones correspondientes se encuentren definidas.

El modelo de plataforma no puede modificar el perfil funcional ni la firma fundamental.

Sus operaciones deben permanecer compatibles con las reconstrucciones aceptadas.

---

# Relaciones entre niveles

La dependencia conceptual es estrictamente unidireccional.

```text
Perfil funcional
        ↓
Firma y caracterización
        ↓
Extensiones conservativas
        ↓
Reconstrucciones
        ↓
Modelo de plataforma
```

Las reglas de dependencia son:

- el perfil funcional no depende de los niveles derivados;
- la firma realiza el perfil funcional;
- las extensiones conservativas utilizan la firma;
- las reconstrucciones utilizan la firma y las extensiones;
- el modelo de plataforma utiliza todos los niveles anteriores.

Ningún nivel derivado puede modificar retroactivamente los niveles fundamentales de los que depende.

---

# Criterio para incorporar nuevos conceptos

Todo nuevo concepto deberá clasificarse antes de incorporarse a la teoría.

## Paso 1

Intentar reconstruirlo mediante la firma y las reconstrucciones existentes.

## Paso 2

Si la reconstrucción no resulta suficiente, comprobar si puede desarrollarse como una extensión conservativa.

## Paso 3

Comprobar si el concepto pertenece realmente al dominio estructural o a:

- la teoría de frontera;
- el modelo de plataforma;
- la metateoría;
- el marco lógico.

## Paso 4

Sólo cuando todas las alternativas anteriores fracasen podrá proponerse una ampliación del perfil funcional o de la firma.

La carga de la prueba corresponde siempre a quien proponga dicha ampliación.

---

# Principio de estabilidad

Los niveles de la arquitectura presentan distintos grados de estabilidad.

## Perfil funcional

Constituye el nivel funcional más estable.

Sólo podrá modificarse si aparece una exigencia estructural irreducible nueva.

## Firma

Permanece estable mientras no se encuentre una realización funcionalmente equivalente más simple o más adecuada.

## Extensiones conservativas

Pueden crecer sin modificar el núcleo.

## Reconstrucciones

Pueden revisarse, ampliarse o sustituirse mientras preserven su carácter derivado.

## Modelo de plataforma

Puede evolucionar libremente mientras conserve compatibilidad con todos los niveles anteriores.

---

# Resultado actual

Las reconstrucciones examinadas hasta la fecha no han obligado a ampliar el perfil funcional ni la firma.

Los conceptos de:

- evolución compleja;
- historia;
- continuidad;
- colección;
- región estructural;
- configuración estructural;
- parte;
- copia;
- dependencia;

pueden reconstruirse provisionalmente mediante los componentes ya aceptados.

La interpretabilidad permanece fuera del dominio estructural y deberá desarrollarse dentro de una teoría de frontera.

---

# Estado

El Nivel 1 funcional y la firma adoptada se consideran provisionalmente estabilizados.

El trabajo reconstructivo continúa abierto en:

- la formalización completa de las especializaciones conservativas;
- la teoría de la referencia;
- las propiedades de colecciones y regiones;
- la teoría de frontera;
- la demostración formal de conservatividad de cada reconstrucción.

Toda reconstrucción futura deberá demostrar que no introduce una nueva capacidad estructural irreducible.
