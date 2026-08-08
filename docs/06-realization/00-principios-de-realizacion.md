# Principios de realización

## Propósito

Este documento identifica y justifica los principios generales que gobiernan toda realización válida del núcleo.

No define todavía componentes software concretos, patrones de diseño, tecnologías o decisiones de implementación.

Su objetivo consiste en establecer las condiciones generales que debe satisfacer cualquier transformación sobre una realización para preservar íntegramente la arquitectura consolidada durante las fases anteriores del proyecto.

---

# Posición dentro de la arquitectura

```text
Teoría
        ↓
Ingeniería del núcleo
        ↓
Implementación del núcleo
        ↓
Principios de realización
        ↓
Realización de las competencias
        ↓
Realización de los contratos
        ↓
Realización del significado
        ↓
Organización del núcleo
        ↓
Puntos de extensión
```

Los principios de realización constituyen el puente entre la arquitectura ya consolidada y las distintas organizaciones software capaces de realizarla fielmente.

No amplían la arquitectura.

Establecen las condiciones bajo las cuales una realización puede evolucionar sin dejar de representar el mismo núcleo.

---

# Objetivo

Determinar el conjunto mínimo de principios que permiten gobernar las transformaciones conservativas de una realización del núcleo.

La investigación no pretende descubrir nuevos principios arquitectónicos.

Pretende determinar bajo qué condiciones una transformación puede considerarse una realización conservativa de la arquitectura previamente consolidada.

---

# Hipótesis de trabajo

## HR-001

> **Toda realización válida del núcleo deberá preservar íntegramente los invariantes arquitectónicos consolidados durante la teoría, la ingeniería y la implementación.**

La investigación intentará falsar esta hipótesis.

Si se demuestra que alguna transformación legítima requiere modificar dichos invariantes o incorporar nuevos principios arquitectónicos, la hipótesis será rechazada.

Si, por el contrario, toda transformación legítima puede explicarse mediante la preservación de los principios ya consolidados, la hipótesis quedará provisionalmente aceptada.

---

# Consecuencia metodológica

La fase de realización no parte de la búsqueda de nuevos conceptos fundamentales.

Parte de la hipótesis de que la arquitectura del núcleo ya se encuentra completamente determinada.

Su objeto de estudio consiste en determinar qué transformaciones permiten realizar, reorganizar y evolucionar el software preservando íntegramente dicha arquitectura.

---

# Resultado de la investigación

La investigación comenzó planteando la posibilidad de que la fase de realización incorporara nuevos principios arquitectónicos necesarios para completar la teoría del núcleo.

Para ello se intentó construir contraejemplos que exigieran:

- nuevas competencias fundamentales;
- nuevos invariantes arquitectónicos;
- nuevas responsabilidades realizativas;
- nuevas formas irreducibles de cooperación;
- nuevos criterios de equivalencia arquitectónica;
- nuevos principios normativos para autorizar transformaciones.

Ninguno de estos intentos produjo un fenómeno irreducible adicional.

Las distintas propuestas acabaron reduciéndose sistemáticamente a principios ya consolidados durante las fases de teoría, ingeniería e implementación, o bien constituyeron mecanismos particulares para realizar dichos principios.

Como consecuencia, la investigación acepta provisionalmente la siguiente conclusión.

> **La fase de realización no amplía la arquitectura del núcleo.**

Su objeto consiste en gobernar las transformaciones que pueden aplicarse sobre una realización sin modificar los principios arquitectónicos previamente consolidados.

---

# Objeto de la realización

La unidad fundamental de esta fase no es el componente software, la tecnología utilizada ni la organización concreta del código.

La unidad fundamental de estudio es la **transformación conservativa**.

Una transformación conservativa consiste en una operación que modifica una realización preservando íntegramente los invariantes arquitectónicos del núcleo.

En consecuencia, dos realizaciones pueden diferir completamente en:

- organización del código;
- paradigma de programación;
- estructura modular;
- mecanismos técnicos;
- infraestructura utilizada;

y seguir constituyendo la misma realización arquitectónica siempre que preserven íntegramente dichos invariantes.

---

# Naturaleza de los principios de realización

Los principios de realización no describen nuevas propiedades del núcleo.

Describen las condiciones bajo las cuales una transformación puede considerarse arquitectónicamente legítima.

En consecuencia, estos principios pertenecen al gobierno de la evolución de una realización y no a la definición de la arquitectura del núcleo.

Su finalidad consiste en garantizar que toda evolución preserve íntegramente los resultados obtenidos durante las fases anteriores de la investigación.

---

# Sistema normativo de la realización

La investigación identifica provisionalmente tres dimensiones irreducibles para autorizar una transformación conservativa.

## PRR-1 — Justificación conservativa

Toda transformación deberá disponer de una justificación suficiente que explique por qué preservará los invariantes arquitectónicos potencialmente afectados.

---

## PRR-2 — Proporcionalidad de las garantías

La profundidad de la justificación y de las garantías exigidas deberá ser proporcional al riesgo arquitectónico de la transformación.

---

## PRR-3 — Reconstruibilidad de la legitimidad

La legitimidad de una transformación deberá permanecer reconstruible con independencia del mecanismo concreto utilizado para conservar dicha reconstrucción.

La investigación no impone un mecanismo específico de trazabilidad.

Únicamente exige que la legitimidad de la autorización pueda reconstruirse posteriormente.

---

Estos tres principios constituyen provisionalmente el sistema normativo mínimo de la fase de realización.

La investigación permanecerá abierta a futura refutación si apareciera alguna transformación legítima cuya autorización requiriese un razonamiento irreducible a cualquiera de estos tres principios.

---

# Alcance de los principios de realización

Los principios definidos en este documento constituyen el marco normativo común para toda la fase de realización.

Ningún documento posterior de esta fase deberá introducir transformaciones que contradigan estos principios.

Toda propuesta de realización deberá justificarse conforme a ellos.

En consecuencia:

- `01-realizacion-de-las-competencias.md` deberá determinar cómo realizar las competencias preservando íntegramente los invariantes arquitectónicos.
- `02-realizacion-de-los-contratos.md` deberá aplicar los mismos principios a la cooperación entre competencias.
- `03-realizacion-del-significado.md` deberá estudiar las transformaciones que afectan a la realización del significado sin modificar su legitimidad arquitectónica.
- `04-organizacion-del-nucleo.md` deberá analizar distintas organizaciones software compatibles con una misma arquitectura.
- `05-puntos-de-extension.md` deberá establecer las condiciones bajo las cuales una extensión puede incorporarse sin alterar el núcleo consolidado.

Todos estos documentos constituyen aplicaciones particulares de los principios establecidos en este documento.

Ninguno de ellos podrá introducir principios realizativos adicionales sin justificar previamente la insuficiencia del sistema normativo aquí consolidado.

---

# Relación con las fases anteriores

La fase de realización no sustituye los resultados obtenidos durante la teoría, la ingeniería ni la implementación.

Los presupone íntegramente.

Su función consiste exclusivamente en gobernar la evolución de realizaciones concretas preservando dichos resultados.

En consecuencia:

- la teoría determina el significado del dominio;
- la ingeniería determina las responsabilidades arquitectónicas;
- la implementación determina la organización fundamental del núcleo;
- la realización determina las condiciones bajo las cuales dicha organización puede transformarse sin perder su identidad arquitectónica.

Cada fase amplía el ámbito de aplicación de la anterior sin modificar sus conclusiones.

---

# Criterio de reapertura

Toda transformación propuesta deberá evaluarse inicialmente como una posible operación conservativa.

Cuando durante su justificación se demuestre que la transformación requiere modificar alguno de los principios consolidados durante la teoría, la ingeniería o la implementación, dejará inmediatamente de pertenecer al ámbito de la realización.

En tal caso deberá reabrirse la fase correspondiente para revisar el principio afectado antes de continuar con la transformación propuesta.

La fase de realización no constituye un mecanismo para modificar la arquitectura del núcleo.

Constituye el mecanismo para preservar dicha arquitectura durante su evolución.

---

# Conclusión

La investigación realizada en este documento acepta provisionalmente la hipótesis de trabajo.

No se ha encontrado ninguna transformación legítima que exija ampliar el conjunto de principios arquitectónicos consolidados durante las fases anteriores.

Como consecuencia, la investigación concluye provisionalmente que una realización válida del núcleo puede evolucionar mediante transformaciones conservativas gobernadas por el sistema normativo definido en este documento.

La presente conclusión permanecerá abierta a futura refutación si apareciera una transformación cuya legitimidad no pudiera justificarse mediante los principios aquí establecidos.
