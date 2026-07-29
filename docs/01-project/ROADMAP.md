# ROADMAP

1. Objetivo

2. Principios de evolución

3. Líneas estratégicas

   3.1 Arquitectura

   3.2 Dominio

   3.3 Funcionalidad

   3.4 Calidad

   3.5 Infraestructura

   3.6 Documentación

4. Ideas en evaluación

5. Criterios para incorporar nuevas mejoras

## 1. Objetivo

Este documento define las principales líneas de evolución previstas para el proyecto a medio y largo plazo.

Su finalidad no es establecer un calendario de implementación ni una lista cerrada de tareas, sino describir las direcciones estratégicas hacia las que puede evolucionar el sistema conforme aumenten sus necesidades funcionales y técnicas.

A diferencia de `PROJECT_STATUS.md`, que refleja el estado actual del proyecto, este documento recoge oportunidades de mejora, posibles líneas de desarrollo e iniciativas futuras cuya incorporación dependerá de las prioridades y del valor que aporten al proyecto en cada momento.

Las propuestas incluidas en este Roadmap no constituyen compromisos de implementación. Representan escenarios de evolución compatibles con la arquitectura actual y sirven como referencia para orientar las futuras decisiones de evolución del proyecto.

Las ideas que todavía no forman parte de las líneas estratégicas del proyecto se documentan en `DESIGN_JOURNAL.md`, donde permanecen en evaluación hasta que exista contexto suficiente para valorar su incorporación.

En conjunto, este documento proporciona una visión estratégica del futuro del proyecto y complementa la documentación dedicada al estado actual, la arquitectura y la evolución histórica del sistema.

## 2. Principios de evolución

> **La evolución del proyecto no persigue incorporar más funcionalidades, sino aumentar progresivamente su valor manteniendo la simplicidad y la coherencia de la arquitectura.**

Las líneas de evolución descritas en este documento se apoyan en un conjunto de principios que orientan la incorporación de nuevas capacidades al proyecto.

Estos principios no determinan qué mejoras deben implementarse en un momento concreto, sino los criterios utilizados para evaluar su conveniencia y priorización.

### 2.1 La evolución debe responder a necesidades reales

Las nuevas funcionalidades o mejoras arquitectónicas se incorporan únicamente cuando resuelven un problema identificado o aportan un beneficio claro al proyecto.

---

### 2.2 La simplicidad prevalece sobre la complejidad

Toda nueva capacidad debe integrarse sin comprometer la claridad de la arquitectura existente.

La incorporación de nuevos componentes o abstracciones requiere una justificación técnica que compense el aumento de complejidad.

---

### 2.3 La arquitectura debe poder evolucionar sin romperse

Las mejoras previstas deben apoyarse en la arquitectura actual y favorecer su evolución gradual mediante pequeñas refactorizaciones, evitando cambios disruptivos siempre que sea posible.

---

### 2.4 El dominio guía la evolución del sistema

La incorporación de nuevas capacidades debe priorizar el enriquecimiento del modelo de dominio y de las reglas de negocio antes que la adopción de nuevas tecnologías o herramientas.

---

### 2.5 La calidad acompaña al crecimiento

Cada evolución relevante debe preservar la calidad del código, la cobertura de pruebas, la mantenibilidad y la coherencia de la documentación técnica.

---

### 2.6 El Roadmap es una guía, no un compromiso

Las líneas de evolución descritas en este documento representan posibilidades compatibles con la visión del proyecto, pero no constituyen un calendario de implementación ni una obligación de desarrollo.

Su incorporación dependerá de las necesidades del proyecto y del valor que aporten en cada momento.

## 3. Líneas estratégicas

Las líneas estratégicas representan las principales áreas hacia las que puede evolucionar el proyecto durante su desarrollo.

Cada una de ellas agrupa un conjunto de iniciativas relacionadas por un objetivo común y describe posibles actuaciones compatibles con la arquitectura actual.

Estas líneas no establecen un orden de implementación ni una prioridad fija. Su incorporación dependerá de las necesidades del proyecto, del valor que aporten y del contexto en el que se produzca su evolución.

La documentación deberá evolucionar para servir como fuente de conocimiento tanto para desarrolladores humanos como para herramientas automatizadas, favoreciendo la comprensión del proyecto y la continuidad de su desarrollo.

### 3.1 Arquitectura

**Objetivo**

Mantener una arquitectura sencilla, modular y capaz de evolucionar progresivamente sin comprometer la separación de responsabilidades ni la mantenibilidad del sistema.

**Posibles líneas de evolución**

- Incorporar una capa de comunicación con un backend remoto mediante una API REST o GraphQL.
- Evolucionar el Store para gestionar operaciones asíncronas manteniendo un flujo de estado predecible.
- Introducir mecanismos de observabilidad que faciliten el diagnóstico y seguimiento del comportamiento del sistema.
- Continuar simplificando la arquitectura cuando nuevas refactorizaciones permitan eliminar complejidad accidental.
- Adaptar la infraestructura de persistencia a nuevas fuentes de datos preservando la independencia del dominio.

**Estado**

Línea estratégica de evolución. Su incorporación dependerá de las necesidades funcionales del proyecto y de la capacidad de mantener la coherencia de la arquitectura existente.

### 3.2 Dominio

**Objetivo**

Evolucionar progresivamente el modelo de dominio para representar de forma cada vez más precisa las reglas de negocio de la aplicación, manteniendo su independencia respecto a la interfaz de usuario y a la infraestructura.

**Posibles líneas de evolución**

- Incorporar nuevos Value Objects cuando permitan expresar mejor las reglas del dominio.
- Ampliar las capacidades de las entidades existentes preservando su cohesión y responsabilidad.
- Introducir nuevos conceptos de dominio cuando respondan a necesidades funcionales reales, como etiquetas, fechas de vencimiento, subtareas o recurrencias.
- Continuar desplazando la lógica de negocio hacia el dominio, evitando que se disperse entre otras capas de la aplicación.
- Revisar y simplificar el modelo de dominio cuando nuevas refactorizaciones permitan mejorar su expresividad o reducir complejidad.

**Estado**

Línea estratégica de evolución. Su desarrollo estará guiado por las necesidades funcionales del proyecto y por el objetivo de mantener un modelo de dominio claro, expresivo y desacoplado del resto del sistema.

### 3.3 Funcionalidad

**Objetivo**

Ampliar progresivamente las capacidades funcionales de la aplicación para ofrecer una experiencia de uso más completa, manteniendo la coherencia con el modelo de dominio y evitando incorporar funcionalidades que no aporten un valor claro al proyecto.

**Posibles líneas de evolución**

- Incorporar nuevas funcionalidades de gestión de tareas cuando respondan a necesidades reales de los usuarios.
- Mejorar los mecanismos de búsqueda, filtrado y organización de la información.
- Facilitar la interacción mediante acciones más eficientes y una experiencia de uso más fluida.
- Adaptar la interfaz a nuevas capacidades del dominio preservando la simplicidad de la aplicación.
- Evolucionar la experiencia de usuario manteniendo la coherencia entre funcionalidad, arquitectura y modelo de dominio.
- La definición funcional vigente del producto se desarrolla en `PRODUCT.md`. Este documento únicamente recoge posibles líneas de evolución futuras.

**Estado**

Línea estratégica de evolución. Las nuevas funcionalidades se incorporarán de forma gradual, priorizando aquellas que aporten un beneficio claro y mantengan el equilibrio entre utilidad, simplicidad y mantenibilidad.

### 3.4 Calidad

**Objetivo**

Mantener un elevado nivel de calidad técnica que permita evolucionar el proyecto con seguridad, preservando la mantenibilidad, la fiabilidad y la coherencia del sistema.

**Posibles líneas de evolución**

- Ampliar progresivamente la cobertura y el alcance de las pruebas automatizadas.
- Incorporar nuevas herramientas de análisis estático y control de calidad cuando aporten un beneficio claro al proceso de desarrollo.
- Continuar realizando refactorizaciones orientadas a mejorar la legibilidad, reducir el acoplamiento y simplificar la arquitectura.
- Optimizar el rendimiento de la aplicación cuando existan necesidades reales que lo justifiquen.
- Mantener la documentación técnica alineada con la evolución del código para preservar el conocimiento del proyecto.

**Estado**

Línea estratégica de evolución. La calidad constituye un objetivo permanente del proyecto y acompaña de forma continua al desarrollo de nuevas funcionalidades y a la evolución de la arquitectura.

### 3.5 Infraestructura

**Objetivo**

Preparar progresivamente el proyecto para su ejecución en entornos de producción, incorporando la infraestructura necesaria para soportar nuevas capacidades sin comprometer la simplicidad de la arquitectura ni la independencia del dominio.

**Posibles líneas de evolución**

- Incorporar servicios backend para la persistencia y sincronización de la información.
- Integrar mecanismos de autenticación y autorización cuando las necesidades funcionales del proyecto lo requieran.
- Evolucionar el proceso de integración y despliegue continuo para automatizar nuevas tareas de validación y publicación.
- Incorporar herramientas de monitorización, registro de eventos y observabilidad que faciliten la operación del sistema.
- Adaptar la infraestructura de ejecución conforme aumenten los requisitos de disponibilidad, rendimiento o escalabilidad.

**Estado**

Línea estratégica de evolución. La infraestructura crecerá de forma gradual, acompañando las necesidades reales del proyecto y evitando incorporar servicios o componentes que no aporten un beneficio claro en cada etapa de su desarrollo.

### 3.6 Documentación

**Objetivo**

Mantener un sistema de documentación coherente, actualizado y alineado con la evolución del proyecto, facilitando su comprensión, mantenimiento y continuidad a lo largo del tiempo.

**Posibles líneas de evolución**

- Completar progresivamente los documentos que forman parte del sistema documental del proyecto.
- Mantener la documentación sincronizada con la evolución del código y de la arquitectura.
- Revisar periódicamente la organización de la documentación para evitar duplicidades y mejorar su mantenibilidad.
- Incorporar nueva documentación cuando contribuya a comprender mejor el sistema o facilite su evolución.
- Preservar el conocimiento adquirido durante el desarrollo mediante documentos especializados y responsabilidades claramente definidas.

**Estado**

Línea estratégica de evolución. La documentación evoluciona de forma continua junto con el software y constituye una parte esencial de la calidad y mantenibilidad del proyecto.

## 4. Ideas en evaluación

Además de las líneas estratégicas descritas anteriormente, el proyecto mantiene una serie de ideas cuya incorporación podría resultar interesante en el futuro.

Estas propuestas no forman parte de la planificación actual ni constituyen compromisos de desarrollo. Se conservan como posibles líneas de exploración que podrán evaluarse nuevamente conforme evolucionen las necesidades del proyecto.

Su permanencia en este documento responde al objetivo de preservar ideas potencialmente valiosas sin condicionar la dirección estratégica ni introducir complejidad antes de que exista una necesidad real.

| Idea                              | Motivación                        | Estado        |
| --------------------------------- | --------------------------------- | ------------- |
| Colaboración en tiempo real       | Trabajo compartido entre usuarios | En evaluación |
| Sincronización entre dispositivos | Continuidad de uso                | En evaluación |
| Notificaciones                    | Mejorar la interacción            | En evaluación |
| Soporte offline avanzado          | Mayor disponibilidad              | En evaluación |
| Sistema de plugins                | Extensibilidad                    | En evaluación |
| Integración con IA                | Automatización y asistencia       | En evaluación |

## 5. Criterios para incorporar nuevas mejoras

La incorporación de nuevas funcionalidades, cambios arquitectónicos o iniciativas de evolución no responde únicamente a la disponibilidad de nuevas tecnologías o a la aparición de nuevas ideas.

Antes de formar parte del proyecto, cada propuesta se evalúa considerando su impacto sobre la arquitectura, el dominio y la mantenibilidad del sistema.

De forma general, una mejora debería cumplir los siguientes criterios:

- **Responder a una necesidad real.** Debe resolver un problema existente o aportar un beneficio claramente identificable para el proyecto.

- **Respetar los principios arquitectónicos.** Su incorporación no debe comprometer la separación de responsabilidades, la simplicidad ni la coherencia de la arquitectura.

- **Integrarse de forma natural con el dominio.** Las nuevas capacidades deben reforzar el modelo de dominio en lugar de introducir lógica dispersa o duplicada.

- **Mantener la calidad del sistema.** Toda evolución debe preservar la legibilidad del código, la cobertura de pruebas y la calidad de la documentación.

- **Aportar un equilibrio adecuado entre beneficio y complejidad.** El valor obtenido debe justificar el coste técnico y de mantenimiento que implica su incorporación.

- **Poder evolucionar mediante cambios graduales.** Siempre que sea posible, las mejoras se introducirán mediante pequeñas refactorizaciones y evoluciones incrementales, evitando cambios disruptivos.

Estos criterios actúan como un marco de referencia para orientar la evolución del proyecto y garantizar que su crecimiento continúe siendo coherente con los principios que han guiado su desarrollo desde sus primeras versiones.
