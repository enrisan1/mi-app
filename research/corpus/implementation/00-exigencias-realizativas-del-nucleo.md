# Exigencias realizativas del núcleo

# Propósito

Este documento especifica el conjunto mínimo de principios y exigencias realizativas que debe satisfacer cualquier implementación software para realizar fielmente la arquitectura consolidada del núcleo.

Su finalidad consiste en preservar, durante la implementación, todas las propiedades arquitectónicas que hayan sido establecidas como aplicables a la implementación considerada.

El documento establece qué propiedades deben garantizarse.

No determina todavía cómo deben implementarse.

---

# Alcance

Las exigencias realizativas pertenecen exclusivamente al plano de la implementación del núcleo.

Su objeto consiste en establecer las garantías mínimas que toda realización software debe preservar con independencia de:

- la organización física del código;
- la distribución de componentes;
- los patrones de diseño utilizados;
- las tecnologías empleadas;
- la infraestructura de ejecución.

En consecuencia, este documento no define todavía:

- componentes fundamentales;
- contratos arquitectónicos;
- dependencias permitidas;
- fronteras del dominio;
- persistencia;
- interfaces;
- protocolos de comunicación;
- mecanismos concretos de implementación.

Todos estos aspectos serán objeto de los documentos posteriores de esta fase.

---

# Posición dentro de la implementación del núcleo

```text
Arquitectura del núcleo
        ↓
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

Las exigencias realizativas constituyen el puente entre la arquitectura consolidada y su realización software.

Definen las propiedades que deberán preservar posteriormente los componentes, los contratos y las dependencias de la implementación.

---

# Objetivo

Determinar el conjunto mínimo de principios y exigencias realizativas capaz de preservar íntegramente la arquitectura consolidada del núcleo durante su implementación.

El documento no prescribe una organización software concreta.

Únicamente establece las propiedades que toda implementación válida deberá garantizar para conservar el significado de la arquitectura.

# Principio general de interpretación

Las exigencias realizativas establecidas en este documento determinan las propiedades que toda implementación debe preservar para realizar fielmente la arquitectura consolidada del núcleo.

Estas exigencias restringen el comportamiento semántico de la implementación.

No prescriben una organización técnica concreta.

En consecuencia, una misma exigencia podrá realizarse mediante mecanismos software diferentes siempre que todos ellos preserven las propiedades arquitectónicas especificadas.

La elección de componentes, patrones, tecnologías o estructuras físicas pertenece a fases posteriores de la implementación.

---

# Principio realizativo transversal

## PR-1 — Eficacia y adecuación realizativa

Toda obligación arquitectónica vigente deberá quedar efectivamente garantizada por la implementación.

Para ello, la realización deberá permitir identificar:

- cómo se garantiza cada obligación arquitectónica;
- mediante qué mecanismos se preserva;
- qué evidencias permiten verificar su cumplimiento o detectar su incumplimiento.

Asimismo, el conjunto de la implementación deberá cubrir íntegramente las responsabilidades definidas por la arquitectura consolidada, sin omisiones ni incorporación de nuevas competencias semánticas.

El principio de eficacia y adecuación realizativa constituye una condición transversal para todas las exigencias definidas en este documento.

No establece nuevas responsabilidades arquitectónicas.

Garantiza que las ya existentes gobiernen efectivamente el comportamiento de la implementación.

---

# Relación con las exigencias realizativas

Las exigencias realizativas se organizan en dos familias complementarias.

## FR-A — Legitimidad semántica

Agrupa las exigencias que garantizan que todo resultado reconocido por el núcleo adquiera legítimamente su estatuto semántico.

Estas exigencias regulan:

- la atribución de autoridad;
- la competencia de las operaciones;
- la reconstruibilidad de la justificación;
- la admisibilidad de los resultados.

---

## FR-B — Conservación semántica realizativa

Agrupa las exigencias que garantizan que la implementación preserve íntegramente el significado de los resultados durante su realización.

Estas exigencias regulan:

- la neutralidad de los mecanismos técnicos;
- la equivalencia semántica entre rutas realizativas.

# FR-A — Legitimidad semántica

La familia de legitimidad semántica reúne las exigencias que determinan cuándo un resultado puede adquirir legítimamente un estatuto semántico dentro del núcleo.

Estas exigencias garantizan que todo resultado reconocido por la implementación:

- proceda de la autoridad arquitectónica competente;
- sea producido por la responsabilidad operacional correspondiente;
- conserve una justificación reconstruible;
- satisfaga las condiciones necesarias para adquirir su estatuto.

La legitimidad semántica constituye una condición necesaria para cualquier resultado reconocido por el núcleo.

---

## ER-001 — Atribución exclusiva de autoridad

Toda constitución fundamental deberá poder atribuirse inequívocamente a la autoridad arquitectónica competente.

Ninguna otra responsabilidad podrá conferir por sí misma un estatuto constitutivo perteneciente a dicha autoridad.

Esta exigencia preserva la localización de la autoridad semántica definida por la arquitectura consolidada.

---

## ER-002 — Correspondencia exclusiva de estatuto operacional

Cada responsabilidad operacional únicamente podrá conferir los estatutos semánticos pertenecientes a su competencia arquitectónica.

La implementación podrá producir información auxiliar, diagnósticos o resultados técnicos adicionales siempre que éstos no alteren ni sustituyan el estatuto semántico que corresponde a la responsabilidad ejercida.

Esta exigencia preserva la separación entre las distintas competencias operacionales del núcleo.

---

## ER-003 — Reconstruibilidad de la justificación

Todo resultado reconocido por el núcleo deberá conservar, o permitir recuperar, la información semánticamente necesaria para reconstruir la justificación de su legitimidad.

La implementación podrá utilizar distintos mecanismos para preservar dicha reconstruibilidad siempre que ésta permanezca disponible cuando resulte necesaria.

Esta exigencia garantiza la persistencia de la fundamentación semántica de los resultados.

---

## ER-007 — Admisibilidad del estatuto de validez

Ningún candidato podrá adquirir un estatuto semántico válido mientras no queden satisfechas y justificadas las condiciones de admisibilidad correspondientes.

La forma concreta mediante la que dichas condiciones se garanticen pertenece al diseño de la implementación.

Esta exigencia únicamente establece que la adquisición del estatuto de validez depende necesariamente del cumplimiento de sus condiciones de admisibilidad.

---

# Resultado de la familia

La familia de legitimidad semántica garantiza que todo resultado reconocido por el núcleo:

- proceda de una autoridad competente;
- sea producido por la responsabilidad adecuada;
- conserve una justificación reconstruible;
- adquiera su estatuto únicamente cuando concurran las condiciones de admisibilidad correspondientes.

Ninguna implementación podrá reconocer como válido un resultado que incumpla cualquiera de estas condiciones.
