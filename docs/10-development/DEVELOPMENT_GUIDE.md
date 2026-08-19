# DEVELOPMENT_GUIDE.md

1. Objetivo

2. Filosofía de desarrollo

3. Flujo de trabajo

4. Preparación del entorno

5. Comandos de desarrollo

6. Organización del proyecto

7. Convenciones de desarrollo

8. Validación de cambios

9. Colaboración con agentes de desarrollo

10. Relación con el resto de la documentación

# 1. Objetivo

Este documento establece las directrices que deben seguirse durante el desarrollo del proyecto.

Su propósito es proporcionar un marco de trabajo común que permita mantener la coherencia entre la visión del proyecto, el modelo del producto, la arquitectura del sistema y su implementación técnica.

El documento describe el proceso de desarrollo, las convenciones de trabajo y los criterios generales que deben respetarse durante la evolución del proyecto. No pretende sustituir la documentación especializada ni reproducir su contenido, sino servir como guía operativa que conecta los distintos documentos durante el desarrollo cotidiano del proyecto.

Su contenido está dirigido tanto a desarrolladores humanos como a agentes de desarrollo asistidos por IA, proporcionando un marco de trabajo común. Las instrucciones específicas para agentes se desarrollan en AGENTS.md.
La finalidad de este documento es favorecer un desarrollo consistente, mantenible y alineado con la filosofía general del proyecto.

# 2. Filosofía de desarrollo

El desarrollo del proyecto se basa en una evolución incremental, guiada por una visión clara del producto y sustentada por una arquitectura coherente. Cada cambio debe contribuir a mejorar el sistema sin comprometer su simplicidad, su mantenibilidad ni la comprensión del dominio.

Las decisiones de diseño deben priorizar la claridad sobre la complejidad, favoreciendo soluciones sencillas, bien justificadas y alineadas con los principios definidos en la documentación del proyecto.

La implementación constituye la consecuencia del diseño y no su punto de partida. Antes de incorporar nuevas funcionalidades, resulta necesario comprender el problema que se pretende resolver y verificar que la solución propuesta es coherente con la visión del proyecto, el modelo del producto y la arquitectura existente.

La documentación forma parte del propio desarrollo y evoluciona junto con el código. Mantenerla actualizada permite conservar el conocimiento del proyecto, facilitar la incorporación de nuevos colaboradores y garantizar la continuidad de su evolución.

El desarrollo del proyecto se concibe como un proceso colaborativo en el que personas y herramientas de desarrollo pueden contribuir de forma coordinada, compartiendo un mismo contexto y respetando las convenciones, principios y decisiones establecidos por la documentación.

Principios de desarrollo

├── Evolución incremental
├── Simplicidad
├── Diseño antes que implementación
├── Documentación continua
└── Colaboración entre personas y agentes

# 3. Flujo de trabajo

El desarrollo del proyecto sigue un proceso iterativo en el que cada modificación se apoya en la documentación existente y contribuye a la evolución del sistema de forma controlada.

Antes de implementar una nueva funcionalidad o realizar una refactorización significativa, debe comprenderse el problema que se pretende resolver y verificarse su coherencia con la visión del proyecto, el modelo del producto y la arquitectura existente.

Una vez definido y validado el diseño, la implementación deberá realizarse respetando las convenciones del proyecto y acompañarse de las pruebas necesarias para garantizar el correcto funcionamiento del sistema.

Finalizada la implementación, deberán ejecutarse las validaciones definidas por el proyecto y actualizarse la documentación siempre que los cambios introduzcan modificaciones relevantes en el comportamiento del sistema, su arquitectura o su proceso de desarrollo.

Este flujo de trabajo permite que el código, la documentación y el conocimiento del proyecto evolucionen de forma coordinada, favoreciendo un desarrollo incremental, mantenible y coherente.

Idea
│
▼
Análisis
│
▼
Decisión
│
▼
Diseño
│
▼
Implementación
│
▼
Validación
│
▼
Actualización de la documentación
│
▼
Integración

# 4. Preparación del entorno

Antes de comenzar a trabajar en el proyecto es necesario disponer de un entorno de desarrollo correctamente configurado que permita ejecutar la aplicación, validar los cambios y mantener la coherencia con el resto del equipo de desarrollo.

El proyecto utiliza un conjunto de herramientas y dependencias comunes cuya instalación constituye el punto de partida para cualquier colaboración. Mantener un entorno homogéneo favorece la reproducibilidad de los resultados y reduce la aparición de problemas derivados de diferencias entre configuraciones locales.

Las herramientas necesarias para el desarrollo, junto con las versiones de referencia y los comandos para instalar las dependencias, ejecutar la aplicación y validar los cambios, se describen en las secciones siguientes.

Siempre que sea posible, las tareas de desarrollo deberán realizarse sobre un entorno limpio y actualizado, verificando que todas las validaciones del proyecto puedan ejecutarse correctamente antes de iniciar cualquier modificación.

# 5. Comandos de desarrollo

El proyecto dispone de un conjunto de comandos que permiten instalar las dependencias, ejecutar la aplicación, validar los cambios y generar la versión de producción.

Los comandos se agrupan según la finalidad que desempeñan dentro del proceso de desarrollo.

Los comandos se presentan siguiendo el orden habitual en el que se utilizan durante el desarrollo de una funcionalidad.

## 5.1 Instalación

Preparan el entorno de trabajo e instalan las dependencias necesarias para desarrollar el proyecto.

```bash
npm install
```

## 5.2 Desarrollo

Permiten ejecutar la aplicación durante el desarrollo y comprobar su funcionamiento de forma interactiva.

```bash
npm run dev
```

## 5.3 Validación

Verifican que los cambios realizados mantienen la integridad del proyecto y cumplen las reglas establecidas.

```bash
npm run typecheck
npm test
npm run lint
```

## 5.4 Construcción

Generan la versión preparada para su despliegue.

```bash
npm run build
```

Los comandos de validación deberán ejecutarse antes de considerar finalizada cualquier modificación significativa del proyecto.

Los comandos concretos podrán evolucionar a medida que lo haga el proyecto. La organización de este apartado responde a la función que desempeñan dentro del flujo de desarrollo y no a un conjunto fijo de herramientas.

## 6. Organización del proyecto

El repositorio se organiza de forma que cada área del proyecto tenga una responsabilidad claramente definida. Esta distribución facilita la localización del código, la documentación y los recursos necesarios durante el desarrollo, favoreciendo una forma de trabajo ordenada y coherente.

La finalidad de este capítulo no es describir la arquitectura interna del sistema, sino proporcionar una guía de navegación por el repositorio. La organización del código fuente y las relaciones entre sus componentes se desarrollan en `ARCHITECTURE.md`.

La estructura general del proyecto es la siguiente:

```text
Repositorio
│
├── docs/
├── src/
├── public/
├── tests/
└── package.json
```

| Elemento       | Finalidad                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------- |
| `docs/`        | Documentación del proyecto, organizada por responsabilidades.                             |
| `src/`         | Código fuente de la aplicación. Su organización interna se describe en `ARCHITECTURE.md`. |
| `public/`      | Recursos públicos utilizados por la aplicación.                                           |
| `tests/`       | Pruebas automatizadas y recursos de soporte relacionados con el testing.                  |
| `package.json` | Dependencias del proyecto, scripts de desarrollo y configuración básica.                  |

La organización del repositorio podrá evolucionar a medida que lo haga el proyecto. Cualquier cambio deberá preservar una estructura clara y facilitar la localización de los distintos elementos, manteniendo la coherencia con la arquitectura y con el resto de la documentación técnica.

# 7. Convenciones de desarrollo

Las convenciones de desarrollo establecen los criterios comunes que deben respetarse al modificar el código, la documentación o la estructura del proyecto.

Su finalidad es mantener la coherencia del repositorio, facilitar la comprensión de los cambios y reducir las decisiones arbitrarias durante el desarrollo.

Estas convenciones no sustituyen al criterio técnico. Cuando una situación no esté contemplada expresamente, deberá elegirse la solución que mejor preserve la simplicidad, la claridad y la coherencia con la arquitectura existente.

## 7.1 Diseño e implementación

Antes de incorporar una nueva funcionalidad o abstracción deberá comprobarse que responde a una necesidad real del producto.

Las soluciones deberán integrarse en la arquitectura existente, respetando la separación de responsabilidades entre interfaz, aplicación, dominio e infraestructura.

Siempre que sea posible, los cambios se realizarán de forma incremental, evitando refactorizaciones extensas que mezclen objetivos distintos dentro de una misma tarea.

No se introducirán patrones, capas, dependencias o abstracciones únicamente para anticipar necesidades futuras. Toda nueva complejidad deberá demostrar un beneficio claro para el sistema.

Durante el desarrollo, la lógica de negocio deberá incorporarse en el dominio o en los componentes responsables de coordinarlo, evitando distribuirla entre la interfaz, la persistencia u otros mecanismos técnicos.

## 7.2 Código

El código deberá priorizar la legibilidad y expresar con claridad la intención de cada componente.

Cada función, clase, módulo o componente deberá mantener una responsabilidad claramente definida.

Se evitarán:

- duplicidades innecesarias;
- funciones excesivamente extensas;
- nombres ambiguos;
- comentarios que sustituyan una implementación poco clara;
- dependencias entre capas que contradigan la arquitectura;
- código no utilizado o conservado únicamente por precaución.

Los comentarios deberán explicar decisiones, restricciones o motivos relevantes. No deberán limitarse a describir literalmente lo que ya expresa el código.

Las modificaciones deberán seguir el estilo y los patrones presentes en los archivos relacionados, salvo que la propia tarea consista en revisar o sustituir dichos patrones.

## 7.3 Nombres

Los nombres deberán describir el concepto o la responsabilidad que representan, evitando abreviaturas innecesarias y términos excesivamente genéricos.

Se utilizará:

- `camelCase` para variables y funciones;
- `PascalCase` para clases, componentes, entidades y Value Objects;
- nombres descriptivos para archivos, casos de uso, acciones y selectores;
- terminología coherente con el lenguaje utilizado en el dominio y en la documentación del producto.

Un mismo concepto deberá recibir el mismo nombre en el código, las pruebas y la documentación siempre que representen la misma responsabilidad.

No se introducirán términos nuevos para conceptos ya definidos sin revisar previamente el lenguaje existente del proyecto.

## 7.4 Organización de los cambios

Cada tarea deberá perseguir un objetivo principal claramente identificable.

Los cambios de funcionalidad, las refactorizaciones y las modificaciones documentales deberán mantenerse separados cuando respondan a propósitos diferentes.

Antes de modificar un componente deberá revisarse el flujo completo en el que participa, incluyendo sus interfaces, implementaciones, consumidores, pruebas y mecanismos de persistencia cuando resulten afectados.

Cuando se amplíe una interfaz o contrato, deberán revisarse todas sus implementaciones y puntos de uso.

Los archivos nuevos deberán situarse en el directorio correspondiente a su responsabilidad, evitando utilizar carpetas genéricas como destino de elementos que pertenezcan claramente a una capa o dominio determinado.

## 7.5 Documentación

La documentación forma parte del resultado de cada cambio.

Cuando una modificación altere el producto, la arquitectura, el flujo de desarrollo, el estado del proyecto o una decisión relevante, deberá actualizarse el documento que tenga asignada esa responsabilidad.

La información no deberá duplicarse entre documentos. Cuando un concepto ya esté desarrollado en otro archivo, se añadirá una referencia en lugar de repetir su contenido.

Todo nuevo documento deberá comenzar definiendo claramente su contenido, su finalidad, los aspectos que no pretende sustituir y su relación con el resto del sistema documental.

La responsabilidad asociada a cada documento deberá describirse siempre utilizando la misma formulación en todas las tablas del sistema documental.

La documentación describirá preferentemente responsabilidades, conceptos y relaciones antes que nombres concretos de clases, módulos o archivos. Cuando estos últimos aparezcan, lo harán únicamente como ejemplos que faciliten la identificación de la implementación vigente.

Reglas generales sobre diagramas:

- No mezclar varios tipos de relaciones en un mismo diagrama.
- Utilizar el menor número posible de niveles.
- Evitar diagramas excesivamente anchos.
- Mantener la alineación de ramas y flechas.
- Representar una única idea por diagrama.
- Los diagramas conceptuales sencillos se representarán mediante bloques de código `text` con estructuras que no dependan de alineaciones horizontales frágiles.
- Los diagramas más complejos podrán utilizar herramientas específicas cuando mejoren realmente su comprensión y puedan mantenerse de forma estable dentro del repositorio.

Reglas generales para tablas:

- Utilizar únicamente las columnas necesarias.
- Mantener el mismo orden cuando existan tablas equivalentes.
- Emplear títulos breves y descriptivos.
- Utilizar una única frase por celda siempre que sea posible.
- Evitar repetir información desarrollada en el texto.
- Los nombres, títulos, enlaces y rutas documentales deberán mantenerse actualizados cuando cambie la estructura del proyecto.

Reglas generales tipográficas:

- Escribir los nombres de documentos entre comillas invertidas.
- Utilizar bloques text para diagramas.
- Emplear el lenguaje adecuado en los bloques de código (bash, ts, text, etc.).
- Mantener un único estilo de viñetas (-).
- Reservar las negritas para destacar conceptos importantes.
- Usar el punto final solo en listas cuyos elementos sean frases completas.

Los documentos que describen información dependiente del estado del proyecto deberán actualizarse inmediatamente después de completar una fase significativa del desarrollo. En particular, `PROJECT_STATUS.md` deberá reflejar siempre el estado vigente del proyecto y, cuando hayan quedado justificadamente establecidos, el punto de reanudación y el siguiente objetivo.

Las referencias incluidas en `PROJECT_JOURNAL.md` deberán preservar el contexto histórico de cada hito, aunque describan documentos, estructuras o decisiones que posteriormente hayan evolucionado o dejado de existir.

Las experiencias y decisiones surgidas durante el desarrollo deberán documentarse inicialmente como lecciones aprendidas en `PROJECT_JOURNAL.md`. Cuando demuestren su validez de forma continuada, podrán consolidarse como principios en `PROJECT_STATUS.md` y, si requieren una aplicación sistemática, incorporarse como convenciones de trabajo en `DEVELOPMENT_GUIDE.md`.

## 7.6 Git y commits

Cada commit deberá representar una unidad de cambio coherente y comprensible.

Los mensajes de commit deberán describir la intención principal del cambio y seguir una estructura consistente, por ejemplo:

```text
feat(scope): describe the new capability
fix(scope): describe the corrected behavior
refactor(scope): describe the structural improvement
test(scope): describe the added or updated tests
docs: describe the documentation change
```

No deberán incluirse en un mismo commit cambios no relacionados entre sí.

Antes de crear un commit deberá revisarse:

- el estado del repositorio;
- el diff de los cambios;
- los archivos preparados para confirmar;
- el resultado de las validaciones requeridas.

Los commits y demás operaciones que modifiquen el historial del repositorio solo se realizarán cuando hayan sido solicitados o autorizados expresamente.

## 7.7 Mantenimiento

El código, las pruebas y la documentación deberán mantenerse alineados con el estado real del proyecto.

El código obsoleto deberá eliminarse cuando ya no cumpla ninguna responsabilidad necesaria y su conservación no aporte valor.

Las dependencias y herramientas podrán actualizarse cuando exista una necesidad justificada, comprobando siempre que el cambio no comprometa el funcionamiento ni la reproducibilidad del proyecto.

Las convenciones podrán evolucionar conforme cambien las necesidades del sistema, pero cualquier modificación deberá mantener la coherencia con la visión, el producto y los principios arquitectónicos establecidos.

# 8. Validación de cambios

Toda modificación realizada sobre el proyecto deberá verificarse antes de considerarse finalizada.

La validación tiene como objetivo garantizar que los cambios mantienen la integridad del sistema, respetan la arquitectura existente y no introducen regresiones funcionales ni documentales.

La validación deberá formar parte del flujo habitual de desarrollo y aplicarse con independencia del tamaño o la complejidad de la modificación realizada.

## 8.1 Validación técnica

Antes de integrar un cambio deberán ejecutarse las validaciones técnicas definidas por el proyecto, comprobando que el código puede compilarse correctamente, que las pruebas continúan siendo válidas y que la aplicación puede construirse sin errores.

Las herramientas concretas utilizadas para estas validaciones se describen en los apartados correspondientes de este documento y en `TESTING.md`.

## 8.2 Validación funcional

Cuando una modificación altere el comportamiento del sistema, deberá verificarse que la funcionalidad implementada responde al objetivo previsto y que no afecta negativamente al resto del producto.

Siempre que resulte necesario, esta validación deberá apoyarse en nuevas pruebas o en la actualización de las existentes.

Cuando la implementación deba satisfacer criterios, contratos o condiciones definidos documentalmente, las pruebas utilizadas como evidencia deberán preservar la trazabilidad entre criterio y verificación establecida en `TESTING.md`.

## 8.3 Validación documental

Cuando un cambio modifique el producto, la arquitectura, el proceso de desarrollo o cualquier otro aspecto documentado del proyecto, deberá actualizarse el documento responsable de ese conocimiento, evitando duplicar la información en otros documentos.

La documentación deberá reflejar siempre el estado real del sistema y mantener la coherencia con el código fuente.

## 8.4 Criterio de finalización

Una tarea podrá considerarse finalizada cuando:

- el objetivo previsto haya sido alcanzado;
- las validaciones técnicas se hayan completado correctamente;
- las pruebas necesarias hayan sido ejecutadas o actualizadas;
- la documentación afectada refleje el nuevo estado del proyecto;
- el cambio pueda integrarse sin comprometer la estabilidad ni la coherencia del sistema.

## 8.5 Revisión del impacto

Antes de considerar completada una modificación deberá revisarse el impacto que el cambio produce sobre el resto del sistema.

Esta revisión incluirá, cuando resulte aplicable:

- interfaces e implementaciones;
- pruebas;
- persistencia;
- documentación;
- configuración;
- dependencias;
- componentes relacionados.

Implementación
│
▼
Validación técnica
│
▼
Validación funcional
│
▼
Validación documental
│
▼
Revisión del impacto
│
▼
Finalización

# 9. Colaboración con agentes de desarrollo

El proyecto está organizado para facilitar la colaboración entre desarrolladores humanos y agentes de desarrollo asistidos por IA, proporcionando un contexto común basado en la documentación, la arquitectura y las convenciones definidas para el repositorio.

La documentación constituye la principal fuente de conocimiento del proyecto. Su finalidad es permitir que cualquier colaborador comprenda la visión, el producto, la organización del sistema y el proceso de desarrollo antes de realizar modificaciones sobre el código o la documentación.

Los agentes de desarrollo deberán utilizar la documentación como referencia para interpretar el propósito de cada cambio, respetar la arquitectura existente y mantener la coherencia del sistema durante su evolución.

La colaboración con agentes no modifica el proceso de desarrollo definido por el proyecto. Toda propuesta deberá seguir el mismo flujo de análisis, diseño, implementación, validación y actualización documental que se aplica al resto de contribuciones.

Las contribuciones realizadas con la ayuda de agentes de desarrollo seguirán el mismo proceso de validación y revisión que cualquier otra contribución.

La preparación del repositorio para la colaboración con agentes de desarrollo responde a un objetivo de continuidad y mantenibilidad. La organización de la documentación pretende proporcionar un contexto suficiente para que cualquier colaborador, humano o automatizado, pueda comprender el proyecto y contribuir a su evolución respetando sus principios fundamentales.

Principio de colaboración

La calidad de la colaboración entre personas y agentes depende directamente de la calidad de la documentación del proyecto.

La documentación constituye el único contexto compartido entre todos los colaboradores y deberá utilizarse como referencia principal para comprender el proyecto antes de realizar cualquier modificación.

# 10. Relación con el resto de la documentación

Este documento define el proceso de desarrollo del proyecto y las convenciones que deben seguirse durante su evolución. Su contenido complementa al resto de la documentación, estableciendo cómo debe desarrollarse y mantenerse el proyecto sin sustituir la información especializada contenida en otros documentos.

La organización documental del proyecto distribuye las responsabilidades entre distintos documentos con el fin de mantener una separación clara entre la visión, el producto, la arquitectura, el desarrollo y el estado del proyecto.

En particular:

| Documento              | Responsabilidad principal                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `INTRODUCTION.md`      | Guía de navegación y organización general de la documentación del proyecto.                                       |
| `GLOSSARY.md`          | Definición de la terminología común utilizada en toda la documentación del proyecto.                              |
| `VISION.md`            | Propósito del proyecto, principios fundamentales y dirección estratégica a largo plazo.                           |
| `PRODUCT.md`           | Definición funcional del producto, su modelo conceptual y sus capacidades.                                        |
| `ARCHITECTURE.md`      | Organización técnica del sistema, principios arquitectónicos y decisiones de diseño.                              |
| `DEVELOPMENT_GUIDE.md` | Proceso de desarrollo, convenciones de trabajo y organización del repositorio.                                    |
| `TESTING.md`           | Estrategia de pruebas, organización del testing y criterios de validación.                                        |
| `AGENTS.md`            | Instrucciones operativas para los agentes de desarrollo que colaboran en el proyecto.                             |
| `PROJECT_STATUS.md`    | Estado actual del proyecto y actuaciones o puntos de reanudación que hayan quedado justificadamente establecidos. |
| `PROJECT_JOURNAL.md`   | Registro histórico del desarrollo y de las decisiones adoptadas.                                                  |
| `ROADMAP.md`           | Líneas estratégicas y posibles evoluciones futuras.                                                               |
| `DESIGN_JOURNAL.md`    | Ideas, hipótesis y propuestas de diseño pendientes de evaluación o incorporación.                                 |

Esta distribución permite que cada documento mantenga una responsabilidad claramente definida, evitando duplicidades y favoreciendo que el conocimiento del proyecto pueda consultarse, mantenerse y evolucionar de forma coherente.
