# Componentes fundamentales

# Propósito

Este documento identifica las competencias arquitectónicas irreducibles cuya realización exige necesariamente un realizador propio durante la implementación del núcleo.

Su finalidad consiste en establecer el fundamento arquitectónico a partir del cual podrán derivarse posteriormente los componentes software del núcleo.

El documento no prescribe todavía una organización concreta de clases, módulos o servicios.

Únicamente determina qué competencias requieren necesariamente un sujeto realizativo propio.

---

# Alcance

La presente especificación pertenece exclusivamente al nivel de implementación del núcleo.

Su objeto consiste en identificar las competencias realizativas fundamentales derivadas de las exigencias realizativas consolidadas.

En consecuencia, este documento no define todavía:

- estructuras de código;
- clases;
- interfaces;
- módulos;
- servicios;
- tecnologías;
- patrones de diseño;
- dependencias entre componentes.

Estos aspectos serán objeto de los documentos posteriores de esta fase.

---

# Posición dentro de la implementación del núcleo

```text
Exigencias realizativas del núcleo
            ↓
Componentes fundamentales
            ↓
Contratos arquitectónicos
            ↓
Dependencias permitidas
            ↓
Fronteras del dominio
```

Los componentes fundamentales constituyen el primer nivel de realización de las exigencias realizativas.

Su identificación precede a la definición de contratos, dependencias y fronteras arquitectónicas.

---

# Objetivo

Determinar las competencias arquitectónicas irreducibles cuya realización exige necesariamente un realizador propio.

A partir de dichas competencias podrán derivarse posteriormente los componentes software fundamentales del núcleo.

El documento no identifica componentes por analogía con la teoría ni por decisiones de diseño.

Los componentes únicamente podrán derivarse de competencias cuya realización no pueda absorberse por otras sin pérdida de capacidad arquitectónica.

# Criterio de derivación

Las exigencias realizativas no determinan directamente la estructura de la implementación.

Su función consiste en establecer las propiedades que toda realización válida debe preservar.

La introducción de un componente fundamental sólo queda justificada cuando exista una competencia arquitectónica irreducible cuya realización requiera necesariamente un realizador propio.

En consecuencia, las propiedades realizativas no generan por sí mismas componentes software.

Únicamente regulan el comportamiento de los realizadores que resulten necesarios.

---

# Competencias constitutivas y propiedades distribuidas

La implementación distingue dos clases de responsabilidades realizativas.

## Competencias constitutivas

Las competencias constitutivas realizan actos arquitectónicos irreducibles.

Su eliminación impide que el núcleo pueda producir los resultados correspondientes.

Por ello requieren necesariamente un realizador propio.

Las competencias constitutivas constituyen el fundamento de los componentes fundamentales del núcleo.

---

## Propiedades distribuidas

Las propiedades distribuidas no producen nuevos resultados arquitectónicos.

Su función consiste en regular la forma en que las competencias constitutivas y los mecanismos técnicos realizan su actividad.

En consecuencia, no justifican la introducción de nuevos componentes.

Su realización se distribuye entre los sujetos ya existentes.

Pertenecen a esta categoría, entre otras:

- la eficacia y adecuación realizativa;
- la reconstruibilidad de la justificación;
- la neutralidad técnica;
- la equivalencia semántica entre rutas realizativas.

---

# Principio de derivación

Todo componente fundamental deberá derivarse de una competencia constitutiva irreducible.

Ninguna propiedad distribuida podrá utilizarse como justificación suficiente para introducir un nuevo componente software.

Este principio garantiza que la implementación preserve la arquitectura consolidada sin incorporar componentes cuya única finalidad consista en materializar propiedades regulativas ya distribuidas sobre otros realizadores.

# Competencias realizativas fundamentales

La implementación del núcleo se fundamenta en dos competencias realizativas irreducibles.

Toda competencia arquitectónica consolidada deberá realizarse como una especialización de una de ellas.

No se ha identificado ninguna tercera clase de competencia realizativa necesaria para preservar la arquitectura del núcleo.

---

## CR-001 — Constitución semántica

La constitución semántica reúne las competencias responsables de introducir legítimamente nuevos hechos arquitectónicos en el núcleo.

Toda realización perteneciente a esta competencia deberá:

- ejercer la autoridad arquitectónica correspondiente;
- conferir exclusivamente el estatuto semántico de su competencia;
- garantizar las condiciones de admisibilidad aplicables;
- determinar la estructura justificativa necesaria del resultado.

La constitución semántica es la única competencia autorizada para producir nuevos resultados arquitectónicos.

---

### Competencias comprendidas

Pertenecen a esta competencia todas las responsabilidades cuya finalidad consiste en constituir nuevos hechos arquitectónicos.

Entre ellas se encuentran:

- individuación;
- estructuración;
- variación;
- composición;
- derivación;
- cualquier otra competencia futura cuya finalidad sea producir un nuevo resultado arquitectónico legítimo.

La incorporación de nuevas competencias constitutivas sólo será admisible cuando pueda demostrarse que producen un nuevo hecho arquitectónico irreducible.

---

## CR-002 — Conservación representacional

La conservación representacional reúne las competencias responsables de preservar los hechos arquitectónicos ya constituidos a través de cualquier transformación de su representación.

Toda realización perteneciente a esta competencia deberá conservar íntegramente:

- la identidad;
- el estatuto semántico;
- la justificación;
- el alcance;
- cualquier otra propiedad arquitectónica consolidada.

La conservación representacional nunca podrá introducir nuevos hechos arquitectónicos.

Su responsabilidad consiste exclusivamente en preservar los ya existentes.

---

### Competencias comprendidas

Pertenecen a esta competencia todas las responsabilidades cuya finalidad consiste en conservar representaciones sin alterar su significado.

Entre ellas se encuentran:

- persistencia;
- restauración;
- serialización;
- deserialización;
- importación;
- exportación;
- transporte;
- cualquier otra transformación representacional compatible con las exigencias realizativas.

La incorporación de nuevas competencias conservativas sólo será admisible cuando pueda demostrarse que preservan resultados ya constituidos sin modificar su significado arquitectónico.

---

# Independencia entre ambas competencias

La constitución semántica y la conservación representacional constituyen competencias independientes y complementarias.

La primera produce nuevos hechos arquitectónicos.

La segunda preserva dichos hechos durante su realización.

Ninguna de ellas puede absorber completamente la responsabilidad de la otra sin pérdida de capacidad arquitectónica.

Toda implementación válida del núcleo deberá preservar simultáneamente ambas competencias.
