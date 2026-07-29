1.  Objetivo

2.  Sistema documental

3.  Cómo utilizar la documentación

4.  Organización de la documentación

5.  Recorridos recomendados

6.  Evolución de la documentación

7.  Relación con el resto de la documentación

# 1. Objetivo

Este documento constituye la puerta de entrada al sistema documental del proyecto.

Su propósito es ofrecer una visión general de la organización de la documentación, explicar la responsabilidad de los principales documentos y facilitar la localización de la información necesaria según las necesidades de cada lector.

La documentación del proyecto se organiza como un conjunto de documentos especializados, cada uno dedicado a una responsabilidad concreta. Esta organización permite mantener una separación clara entre la visión del proyecto, la definición del producto, la arquitectura del sistema, el proceso de desarrollo, la estrategia de pruebas y el seguimiento de su evolución.

Este documento no desarrolla en profundidad ninguno de esos aspectos ni sustituye a la documentación especializada. Su finalidad consiste en orientar al lector y proporcionar un punto de partida para comprender la estructura documental del proyecto y navegar por ella de forma eficaz.

En conjunto, `INTRODUCTION.md` actúa como guía de navegación del sistema documental y facilita una comprensión progresiva del proyecto, desde sus aspectos más generales hasta los más específicos.

# 2. Sistema documental

La documentación del proyecto se concibe como un sistema organizado de conocimiento cuya finalidad es describir el proyecto desde distintas perspectivas sin duplicar información.

Cada documento desarrolla una responsabilidad específica y complementa al resto, permitiendo que la visión del proyecto, la definición del producto, la arquitectura, el proceso de desarrollo, la estrategia de pruebas y el seguimiento de la evolución puedan mantenerse de forma independiente y coherente.

Esta organización permite estructurar el conocimiento del proyecto en ámbitos claramente diferenciados, favoreciendo su comprensión, mantenimiento y evolución sin duplicar información.

Como criterio general, cada documento desarrolla un único ámbito de conocimiento y evita reproducir información que ya se encuentra desarrollada en otro lugar. Cuando un concepto pertenece a un documento determinado, el resto de la documentación hace referencia a él en lugar de duplicar su contenido.

El sistema documental constituye una parte esencial del proyecto y proporciona el contexto necesario para comprender el proyecto y la organización de su documentación, las decisiones adoptadas durante su desarrollo y la relación existente entre sus distintos componentes documentales.

# 3. Cómo utilizar la documentación

La documentación del proyecto está diseñada para que cada documento pueda consultarse de forma independiente, manteniendo al mismo tiempo una visión coherente del conjunto.

Cada documento desarrolla una responsabilidad específica y contiene la información necesaria para comprender el aspecto del proyecto que le corresponde, remitiendo al resto de la documentación únicamente cuando resulta necesario ampliar el contexto.

Aunque existe un recorrido recomendado para quienes se incorporan por primera vez al proyecto, la organización documental permite acceder directamente al documento más adecuado según la información que se desee consultar.

Esta organización facilita tanto una lectura secuencial de toda la documentación como una consulta puntual orientada a resolver necesidades concretas durante el desarrollo, el mantenimiento o la evolución del sistema.

# 4. Organización de la documentación

El sistema documental se materializa en un conjunto de documentos especializados, cada uno responsable de un aspecto concreto del proyecto.

Esta distribución permite mantener una separación clara de responsabilidades, evitar duplicidades y facilitar que la documentación evolucione de forma coordinada con el software.

Como criterio general, cada concepto debe desarrollarse en un único documento. El resto de la documentación hace referencia a él cuando resulta necesario, evitando repetir información y preservando la coherencia del sistema documental.

La siguiente tabla resume la responsabilidad principal de cada documento:

| Documento              | Contenido principal                                        |
| ---------------------- | ---------------------------------------------------------- |
| `README.md`            | Presentación del proyecto y guía de inicio.                |
| `INTRODUCTION.md`      | Guía de navegación del sistema documental                  |
| `GLOSSARY.md`          | Lenguaje de referencia del proyecto                        |
| `VISION.md`            | Propósito y principios del proyecto.                       |
| `PRODUCT.md`           | Definición funcional del producto.                         |
| `ARCHITECTURE.md`      | Organización técnica del sistema.                          |
| `DEVELOPMENT_GUIDE.md` | Proceso y convenciones de desarrollo.                      |
| `TESTING.md`           | Estrategia y organización de las pruebas.                  |
| `PROJECT_STATUS.md`    | Estado actual del proyecto y punto de reanudación.         |
| `PROJECT_JOURNAL.md`   | Registro histórico del desarrollo y de las decisiones.     |
| `ROADMAP.md`           | Líneas estratégicas de evolución.                          |
| `DESIGN_JOURNAL.md`    | Ideas e hipótesis pendientes de evaluación.                |
| `AGENTS.md`            | Instrucciones para agentes de desarrollo asistidos por IA. |

En conjunto, estos documentos forman un sistema documental coherente en el que cada uno desempeña una función específica y complementa al resto. Esta organización facilita la comprensión del proyecto, simplifica el mantenimiento de la documentación y favorece su evolución a largo plazo.

# 5. Recorridos recomendados

La documentación puede consultarse de distintas formas según el objetivo de cada lector.

Aunque todos los documentos mantienen relaciones entre sí, no siempre es necesario recorrerlos en el mismo orden. Los siguientes itinerarios ofrecen un punto de partida para las necesidades más habituales.

Los siguientes recorridos no son obligatorios, pero pueden servir como guía para abordar la documentación según los intereses o necesidades de cada lector.

## Conocer el proyecto

Recomendado para quienes desean comprender el propósito del proyecto, el producto que se pretende construir y la organización general de la documentación.

```text
README.md
    │
    ▼
INTRODUCTION.md
    │
    ▼
VISION.md
    │
    ▼
PRODUCT.md
```

---

## Comprender la arquitectura

Recomendado para desarrolladores interesados en la organización técnica del sistema y en las decisiones que sustentan su diseño.

```text
INTRODUCTION.md
    │
    ▼
ARCHITECTURE.md
    │
    ▼
DEVELOPMENT_GUIDE.md
    │
    ▼
TESTING.md
```

---

## Contribuir al desarrollo

Recomendado para quienes deseen colaborar en la evolución del proyecto respetando sus convenciones y procesos de trabajo.

```text
INTRODUCTION.md
    │
    ▼
DEVELOPMENT_GUIDE.md
    │
    ▼
TESTING.md
    │
    ▼
AGENTS.md
```

---

## Conocer el estado del proyecto

Recomendado para comprender la situación actual del desarrollo, su evolución y las líneas previstas para futuras iteraciones.

```text
INTRODUCTION.md
    │
    ▼
PROJECT_STATUS.md
    │
    ▼
PROJECT_JOURNAL.md
    │
    ▼
ROADMAP.md
```

Cada uno de estos recorridos constituye únicamente una recomendación. La documentación está organizada para que cualquier documento pueda consultarse de forma independiente cuando se busque información específica, manteniendo siempre una referencia clara al resto del sistema documental.

# 6. Evolución de la documentación

La documentación forma parte del propio proyecto y evoluciona junto con el software, la arquitectura y el producto.

Su organización no es estática. A medida que el proyecto incorpora nuevas capacidades, tecnologías o procesos, la documentación puede reorganizarse para reflejar dichos cambios, siempre que se mantengan los principios de claridad, responsabilidad única y ausencia de duplicidades.

La incorporación de un nuevo documento deberá responder a una necesidad real y tener una responsabilidad claramente definida dentro del sistema documental. Del mismo modo, cuando un documento deje de aportar valor o su contenido pase a formar parte de otro, deberá revisarse su papel para mantener la coherencia del conjunto.

La evolución de la documentación no persigue aumentar el número de documentos, sino mejorar la organización y preservar el conocimiento generado durante el desarrollo del proyecto.

Como criterio general, cualquier modificación relevante del producto, la arquitectura, el proceso de desarrollo o la estrategia de validación deberá ir acompañada de la actualización del documento responsable de ese contenido, manteniendo siempre la documentación alineada con el estado real del proyecto.

# 7. Relación con el resto de la documentación

Este documento constituye la guía de navegación del sistema documental del proyecto.

Su responsabilidad consiste en facilitar la comprensión de la organización de la documentación y orientar al lector hacia el documento más adecuado según la información que desee consultar.

A diferencia de los documentos especializados, `INTRODUCTION.md` no desarrolla el producto, la arquitectura, el proceso de desarrollo ni la estrategia de pruebas. Su finalidad es proporcionar una visión de conjunto del sistema documental y explicar cómo se relacionan sus distintos documentos.

Esta función complementa al resto de la documentación sin sustituir ninguno de sus contenidos. Cada documento mantiene una responsabilidad claramente definida y desarrolla en profundidad el ámbito de conocimiento que le corresponde.

En conjunto, todos ellos forman un sistema documental coherente cuyo objetivo es preservar, organizar y facilitar el acceso al conocimiento generado durante la evolución del proyecto.
