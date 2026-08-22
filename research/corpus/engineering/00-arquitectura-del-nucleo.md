# Arquitectura del núcleo

# Propósito

Este documento define la arquitectura mínima del núcleo capaz de realizar fielmente la teoría conceptual consolidada.

Su finalidad consiste en describir las responsabilidades arquitectónicas, sus dependencias, sus restricciones y los límites que debe respetar cualquier implementación válida del núcleo.

No documenta el proceso de investigación que condujo a esta arquitectura.

Las justificaciones detalladas, las pruebas de necesidad y la validación fenomenológica se desarrollan en los documentos:

- `01-cruce-global-actualizado-de-matrices.md`
- `02-auditoria-fenomenologica-final-de-cobertura.md`

---

# Objetivo

Establecer la especificación arquitectónica canónica del núcleo.

Esta especificación constituye la referencia sobre la que deberán construirse todas las implementaciones futuras del núcleo conceptual.

---

# Posición dentro del proyecto

La arquitectura del núcleo constituye el puente entre la teoría conceptual y su realización software.

```text
Teoría conceptual consolidada
            │
            ▼
Arquitectura del núcleo
            │
            ▼
Implementación del núcleo
            │
            ▼
Infraestructura
            │
            ▼
Aplicación
```

Cada nivel posee responsabilidades propias y no sustituye a los demás.

---

# Alcance

Este documento describe exclusivamente la arquitectura interna del núcleo.

Incluye:

- responsabilidades arquitectónicas;
- planos arquitectónicos;
- dependencias permitidas;
- restricciones de implementación;
- criterios de separación;
- límites del núcleo.

No forma parte de este documento:

- persistencia;
- infraestructura;
- adaptadores;
- interfaces de usuario;
- APIs;
- protocolos de comunicación;
- mecanismos de autenticación;
- despliegue;
- tecnologías concretas.

Estos aspectos pertenecen a niveles posteriores de la arquitectura.

---

# Principios arquitectónicos

La arquitectura del núcleo se rige por los siguientes principios.

## PA-1 — Primacía de la teoría

La arquitectura realiza la teoría conceptual.

No la modifica ni introduce nuevas categorías fundamentales.

---

## PA-2 — Responsabilidad antes que representación

Los componentes arquitectónicos se justifican por la responsabilidad que realizan y no por el nombre de los conceptos teóricos.

En consecuencia:

- un concepto teórico puede requerir varios componentes software;
- varios conceptos teóricos pueden realizarse mediante un único componente software;
- ninguna correspondencia entre teoría y software se considera válida sin justificación arquitectónica.

---

## PA-3 — Separación entre teoría y realización

La teoría conceptual, la arquitectura del núcleo y la implementación pertenecen a planos distintos.

Cada plano debe preservar su independencia.

---

## PA-4 — Mínima arquitectura suficiente

Sólo forman parte del núcleo aquellas responsabilidades necesarias para realizar íntegramente la teoría conceptual consolidada.

---

## PA-5 — Conservación semántica

Toda realización arquitectónica deberá preservar el significado definido por la teoría conceptual.

Ningún componente podrá alterar, reinterpretar o ampliar la semántica establecida por las autoridades y operaciones fundamentales.

---

# Criterio de incorporación

Una responsabilidad sólo pertenece al núcleo cuando puede demostrarse simultáneamente que:

1. realiza una responsabilidad necesaria;
2. dicha responsabilidad no puede absorberse por otro componente;
3. no introduce dependencias conceptuales innecesarias;
4. preserva la separación entre teoría conceptual y realización;
5. mantiene la capacidad reconstructiva del modelo conceptual.

---

# Arquitectura general

La arquitectura del núcleo se organiza en cuatro planos complementarios.

```text
Plano constitutivo
        │
        ▼
Plano derivativo
        │
        ▼
Plano normativo
        │
        ▼
Plano realizativo
```

Cada plano realiza responsabilidades diferentes y ninguno sustituye a los demás.

---

# Plano constitutivo

El plano constitutivo realiza las constituciones fundamentales de la teoría.

Está formado por las autoridades semánticas:

```text
RA-I → P
RA-E → S
RA-V → V
```

Su responsabilidad consiste exclusivamente en constituir:

- participantes;
- correlaciones estructurales;
- diferencias orientadas.

No produce resultados derivados.

---

# Plano derivativo

El plano derivativo produce resultados objetivos sin introducir nuevas constituciones fundamentales.

Se divide en dos familias.

## Unidades derivadas

```text
Componer-E → CE

Componer-V → TV

Reconstruir → R
```

Estas operaciones generan nuevas unidades objetivas eliminables respecto de sus fundamentos.

## Consecuencias derivadas

```text
Derivar-C → Φ
```

Produce consecuencias objetivas conservativas obtenidas mediante reglas de derivación.

No constituye nuevas unidades.

---

# Plano normativo

El plano normativo establece las restricciones que gobiernan la actuación de autoridades, operaciones derivadas y mecanismos de realización.

Incluye:

- principios normativos;
- obligaciones;
- contratos de cooperación;
- restricciones de competencia;
- criterios de conservación.

Su finalidad consiste en garantizar que ninguna realización software altere la semántica definida por la teoría.

---

# Plano realizativo

El plano realizativo implementa las responsabilidades definidas por los planos anteriores.

No introduce contenido semántico propio.

Sus mecanismos únicamente realizan las responsabilidades establecidas por la arquitectura.

Incluye las familias:

```text
RR-1

RR-2

RR-3U

RR-3C

RR-4

RR-5
```

---

# Dependencias permitidas

Las dependencias arquitectónicas deben respetar la estructura de la teoría.

En particular:

- las autoridades constitutivas son independientes entre sí;
- las operaciones derivadas consumen únicamente resultados previamente constituidos;
- las normas gobiernan autoridades y operaciones sin sustituirlas;
- los mecanismos realizativos implementan responsabilidades, pero no introducen decisiones semánticas.

Toda dependencia adicional deberá justificarse explícitamente.

---

# Dependencias prohibidas

No forman parte de una implementación válida del núcleo:

- dependencias desde la infraestructura hacia la teoría conceptual;
- decisiones semánticas tomadas por mecanismos técnicos;
- operaciones derivadas que constituyan nuevas categorías fundamentales;
- componentes que mezclen responsabilidades pertenecientes a planos distintos;
- acoplamientos que impidan mantener la independencia entre teoría, arquitectura y realización.

---

# Límites del núcleo

La arquitectura del núcleo no determina:

- tecnologías;
- lenguajes de programación;
- bases de datos;
- protocolos;
- formatos de intercambio;
- modelos de despliegue.

Tampoco modela directamente:

- interpretación;
- conocimiento;
- decisiones de agentes;
- políticas de aplicación.

Estos aspectos pertenecen a niveles posteriores del sistema o quedan fuera del alcance de la teoría conceptual.

---

# Relación con la documentación

La presente especificación describe la arquitectura consolidada.

La justificación de cada responsabilidad, dependencia y restricción se encuentra en:

- `01-cruce-global-actualizado-de-matrices.md`

La validación de que dicha arquitectura cubre completamente el alcance de la teoría se encuentra en:

- `02-auditoria-fenomenologica-final-de-cobertura.md`

---

# Estado

La arquitectura del núcleo se considera consolidada respecto del alcance actual de la teoría conceptual.

Toda modificación futura requerirá la reapertura formal de la auditoría correspondiente conforme al protocolo metodológico del proyecto.
