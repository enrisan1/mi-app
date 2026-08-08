# Architecture

> **La mejor arquitectura no es la que incorpora más patrones, sino la que conserva únicamente aquellos que siguen aportando valor al dominio que modela.**

## Índice

1. Objetivo
2. Principios arquitectónicos
3. Visión general del sistema
4. Arquitectura por capas
5. Flujo de escritura del estado
6. Flujo de lectura del estado
7. Organización del proyecto
8. Componentes principales
9. Decisiones arquitectónicas relevantes
10. Estado actual de la arquitectura
11. Relación con el resto de la documentación

## 1. Objetivo

Este documento describe la arquitectura actual del proyecto y las decisiones de diseño que definen su organización interna.

Su finalidad es proporcionar una visión clara y precisa del sistema para facilitar su comprensión, mantenimiento y evolución, tanto por parte de desarrolladores como de agentes de programación.

La arquitectura aquí descrita corresponde al estado actual del proyecto y refleja únicamente las decisiones de diseño que forman parte de la implementación vigente.

No corresponde a un modelo teórico diseñado previamente, sino al resultado de la evolución de un proyecto real. Cada una de las soluciones aquí documentadas ha sido implementada, validada mediante pruebas y consolidada a través de sucesivas refactorizaciones.

Este documento se centra en responder a las siguientes preguntas:

- ¿Cómo está organizado el sistema?
- ¿Qué responsabilidades tiene cada capa?
- ¿Cómo fluye la información entre sus componentes?
- ¿Qué principios arquitectónicos guían su diseño?
- ¿Qué decisiones explican su estructura actual?

La evolución histórica y los posibles escenarios futuros se documentan en archivos independientes.

La arquitectura se describe atendiendo principalmente a las responsabilidades que desempeñan sus componentes y a las relaciones existentes entre ellos, evitando que la documentación dependa de nombres concretos de clases, módulos o archivos. Cuando dichos nombres aparecen, lo hacen únicamente como ejemplos que ayudan a identificar la implementación vigente, sin constituir el elemento principal de la explicación.

En conjunto, este documento actúa como la referencia principal de la arquitectura del proyecto y sirve de punto de partida para comprender el resto de la documentación técnica.

## 2. Principios arquitectónicos

> **La arquitectura no se diseñó de una sola vez; fue evolucionando a medida que aumentó el conocimiento sobre el problema y se validaron nuevas soluciones mediante la práctica.**

La arquitectura del proyecto se apoya en un conjunto de principios que han guiado su evolución desde las primeras versiones hasta el estado actual. Estos principios han surgido de la evolución del proyecto y de la experiencia obtenida durante su desarrollo, por lo que representan criterios consolidados más que reglas impuestas de forma previa.

Estos principios no describen una tecnología concreta ni una implementación específica. Representan criterios de diseño que orientan la toma de decisiones y buscan mantener el equilibrio entre simplicidad, mantenibilidad y capacidad de evolución.

## 2.1 La arquitectura debe facilitar el cambio

La arquitectura no debe dificultar la incorporación de nuevas funcionalidades ni obligar a modificar grandes partes del sistema ante pequeños cambios.

Cada refactorización realizada ha perseguido reducir el impacto de futuras modificaciones mediante una mejor separación de responsabilidades.

---

## 2.2 El dominio constituye el núcleo del sistema

Las reglas de negocio representan el conocimiento más estable de la aplicación.

Por este motivo, el dominio permanece independiente de la interfaz de usuario, del mecanismo de persistencia y de cualquier tecnología concreta.

---

## 2.3 Las dependencias apuntan hacia el dominio

Las capas externas pueden depender del dominio, pero el dominio no depende de ellas.

Este principio permite que las reglas de negocio permanezcan estables aunque cambien la interfaz, la infraestructura o las herramientas utilizadas.

---

## 2.4 Cada componente tiene una única responsabilidad

Cada módulo, clase o función debe asumir una responsabilidad claramente definida.

Esta separación favorece un código más comprensible, más fácil de mantener y con menor acoplamiento entre sus partes.

---

## 2.5 La simplicidad prevalece sobre la complejidad accidental

La incorporación de nuevas capas o abstracciones solo está justificada cuando aporta un beneficio claro.

La evolución del proyecto ha demostrado que simplificar una solución suele producir una arquitectura más robusta que añadir mecanismos innecesarios.

---

## 2.6 Las abstracciones deben demostrar su utilidad

Las abstracciones no se incorporan por seguir un patrón de diseño, sino para resolver un problema real.

Cuando dejan de aportar valor, deben revisarse y, si procede, eliminarse.

---

## 2.7 Las decisiones arquitectónicas se validan mediante la práctica

Las soluciones adoptadas no proceden únicamente de un análisis teórico.

Cada decisión importante ha sido implementada, utilizada, evaluada y, cuando ha sido necesario, refactorizada antes de consolidarse como parte de la arquitectura.

---

## 2.8 Las pruebas forman parte de la arquitectura

La arquitectura se diseña para ser verificable.

Las pruebas automatizadas no constituyen una fase posterior del desarrollo, sino un mecanismo que permite evolucionar el sistema con seguridad y confianza.

---

## 2.9 La arquitectura evoluciona mediante refactorización

La arquitectura no debe considerarse un diseño inmutable.

Cada mejora importante del proyecto ha sido el resultado de pequeñas refactorizaciones sucesivas que han permitido simplificar el sistema, reducir el acoplamiento y reforzar la separación de responsabilidades sin interrumpir su funcionamiento.

## 2.10 La documentación evoluciona junto con el software

La documentación constituye una parte esencial de la arquitectura.

Debe mantenerse alineada con el código, evitar duplicidades y organizarse siguiendo los mismos principios de cohesión, responsabilidad única y mantenibilidad que el propio sistema.

---

Los principios descritos en este capítulo constituyen el marco de referencia utilizado para tomar las decisiones arquitectónicas del proyecto. Aunque las tecnologías, las herramientas o la organización del código puedan evolucionar con el tiempo, estos principios pretenden permanecer estables y servir como criterio para evaluar cualquier cambio futuro.

## 3. Visión general del sistema

La arquitectura del proyecto está organizada en un conjunto de capas con responsabilidades claramente diferenciadas.

Cada capa conoce únicamente aquello que necesita para desempeñar su función y delega el resto del trabajo en la siguiente, manteniendo un flujo de dependencias simple, explícito y predecible.

El sistema se ha diseñado siguiendo una arquitectura orientada al dominio, donde las reglas de negocio permanecen independientes de la interfaz de usuario y de los mecanismos de persistencia.

De forma simplificada, la organización general del sistema puede representarse mediante el siguiente esquema:

```text
Usuario
    ↓
Interfaz de usuario (UI)
    ↓
Capa de aplicación
    ↓
Dominio
    ↓
Infraestructura
```

La arquitectura se organiza en cuatro capas con responsabilidades claramente diferenciadas. Los capítulos siguientes describen el papel que desempeña cada una de ellas dentro del sistema.

## 4. Arquitectura por capas

La arquitectura del proyecto se organiza en cuatro capas, cada una de ellas con una responsabilidad claramente definida.

| Capa                | Responsabilidad  |
| ------------------- | ---------------- |
| Interfaz de usuario | **Presentar**    |
| Aplicación          | **Coordinar**    |
| Dominio             | **Modelar**      |
| Infraestructura     | **Proporcionar** |

Estos cuatro verbos describen el recorrido que sigue una operación desde que el usuario interactúa con la aplicación hasta que el sistema necesita utilizar un servicio técnico externo.

De forma simplificada, dicho recorrido puede representarse mediante el siguiente esquema:

```text
Usuario
    │
    ▼
Interfaz de usuario
(Presentar)
    │
    ▼
aplicación
(Coordinar)
    │
    ▼
Dominio
(Modelar)
    │
    ▼
Infraestructura
(Proporcionar)
```

La interfaz de usuario presenta la información y recoge las acciones del usuario. La capa de aplicación coordina la ejecución de dichas acciones utilizando los componentes adecuados. El dominio modela las reglas de negocio y garantiza la coherencia del sistema. Finalmente, la infraestructura proporciona los servicios técnicos necesarios para que la aplicación pueda interactuar con su entorno.

Los apartados siguientes describen cada una de estas capas con mayor detalle, indicando sus responsabilidades, los principales componentes que las integran, sus dependencias y las responsabilidades que quedan expresamente fuera de su ámbito.

### 4.1 Interfaz de usuario (UI)

#### Responsabilidad

La capa de interfaz de usuario constituye el punto de interacción entre el usuario y el sistema.

Su responsabilidad consiste en presentar la información, recoger las acciones del usuario y delegarlas en la capa de aplicación, que será la encargada de coordinar la ejecución de la lógica de negocio.

La interfaz no implementa reglas de negocio ni modifica directamente el estado de la aplicación. Su función es representar el estado actual del sistema y reaccionar a los cambios producidos en él.

#### Componentes principales

La capa de interfaz de usuario está formada principalmente por:

- `App`, como punto de entrada de la aplicación.
- Componentes de presentación (`TaskForm`, `TaskList`, `TaskItem`, `TaskActions`, `TaskFilters`, `TaskPrioritySelect`).
- Hooks específicos de la interfaz (`useTasks`, `useLocalStorage`).
- Presenters y utilidades orientadas exclusivamente a la representación de la información.

Cada uno de estos elementos participa únicamente en la construcción de la interfaz y evita incorporar lógica de negocio que corresponda a otras capas.

#### Dependencias

La interfaz depende únicamente de la capa de aplicación para ejecutar las operaciones disponibles y obtener el estado necesario para su representación.

No conoce la implementación interna del Store, del Reducer ni de la infraestructura de persistencia.

Esta dependencia unidireccional permite modificar la implementación interna del sistema sin afectar a los componentes de la interfaz.

#### Responsabilidades excluidas

La capa de interfaz de usuario no debe:

- Implementar reglas de negocio.
- Modificar directamente el estado de la aplicación.
- Acceder directamente a los mecanismos de persistencia.
- Conocer la implementación interna del dominio.
- Contener lógica que dificulte su reutilización o sus pruebas.

Estas restricciones contribuyen a mantener una separación clara entre la presentación y la lógica de negocio, favoreciendo una arquitectura más mantenible y fácil de evolucionar.

### 4.2 Capa de aplicación

#### Responsabilidad

La capa de aplicación actúa como coordinadora del sistema.

Su responsabilidad consiste en transformar las acciones iniciadas por la interfaz de usuario en operaciones sobre el dominio, coordinando los distintos componentes necesarios para llevarlas a cabo.

No implementa las reglas de negocio fundamentales, sino que orquesta su ejecución utilizando los elementos proporcionados por el dominio y la infraestructura.

Esta separación permite mantener una distinción clara entre **coordinar una operación** y **definir cómo funciona el negocio**.

#### Componentes principales

La capa de aplicación está formada por los componentes responsables de coordinar el funcionamiento del sistema.

Entre ellos se incluyen principalmente:

- Casos de uso, que representan las operaciones que la aplicación pone a disposición de la interfaz de usuario.
- Componentes encargados de coordinar la ejecución de dichas operaciones y traducirlas en cambios sobre el estado de la aplicación.
- Mecanismos de gestión del estado responsables de mantener el estado global del sistema y notificar sus modificaciones.
- Elementos de composición, cuya finalidad es construir y ensamblar las distintas dependencias de la aplicación.
- Componentes auxiliares que proporcionan capacidades de soporte, como la gestión del historial u otros mecanismos necesarios para coordinar el comportamiento del sistema.

Todos estos elementos participan en la coordinación del funcionamiento de la aplicación sin incorporar reglas propias del dominio.

#### Dependencias

La capa de aplicación depende del dominio para ejecutar las reglas de negocio y de la infraestructura cuando necesita acceder a servicios técnicos, como la persistencia.

Por su parte, la interfaz de usuario depende exclusivamente de esta capa para ejecutar las operaciones disponibles, evitando conocer los detalles internos del sistema.

Esta organización convierte a la capa de aplicación en el punto de unión entre la interfaz, el dominio y la infraestructura, manteniendo las dependencias dirigidas hacia el núcleo del sistema.

#### Responsabilidades excluidas

La capa de aplicación no debe:

- Implementar reglas de negocio propias del dominio.
- Contener lógica de presentación.
- Acceder directamente a la interfaz de usuario.
- Duplicar comportamientos ya definidos en las entidades o en los Value Objects.
- Introducir dependencias innecesarias entre las distintas capas.

Su misión consiste exclusivamente en coordinar la ejecución de las operaciones del sistema, manteniendo una separación clara entre la orquestación de los procesos y la definición de las reglas de negocio.

### 4.3 Dominio

#### Responsabilidad

El dominio constituye el núcleo de la arquitectura y concentra el conocimiento propio de la aplicación.

Su responsabilidad consiste en modelar las reglas de negocio, definir el comportamiento de las entidades y garantizar la coherencia del estado mediante objetos que representan conceptos del dominio.

El dominio permanece independiente de la interfaz de usuario, de la infraestructura y de cualquier tecnología concreta, permitiendo que las reglas de negocio evolucionen sin verse condicionadas por aspectos externos al problema que la aplicación pretende modelar.

#### Componentes principales

El dominio está formado principalmente por:

- Entidades (`Task`, `TaskList`).
- Value Objects (`TaskId`, `TaskText`, `Priority` y otros objetos de valor).
- Reducers puros responsables de aplicar las transformaciones del estado.
- Selectores que encapsulan las operaciones de consulta sobre dicho estado.
- Tipos y modelos que representan los conceptos propios de la aplicación.

Todos estos elementos describen el comportamiento del sistema desde la perspectiva del negocio, sin depender de mecanismos de presentación o de persistencia.

#### Dependencias

El dominio no depende de ninguna otra capa de la arquitectura.

Las capas superiores utilizan el dominio para ejecutar las reglas de negocio, pero el dominio permanece completamente ajeno a la forma en que esas operaciones son iniciadas o a la tecnología utilizada para persistir los datos.

Esta independencia favorece la reutilización, facilita las pruebas y reduce el impacto de futuras modificaciones tecnológicas.

#### Responsabilidades excluidas

El dominio no debe:

- Conocer la interfaz de usuario.
- Acceder directamente a mecanismos de persistencia.
- Depender de frameworks o bibliotecas externas.
- Contener lógica específica de coordinación de la aplicación.
- Implementar detalles de infraestructura.

Su única responsabilidad consiste en representar y proteger las reglas de negocio del sistema, garantizando que permanezcan coherentes con independencia del entorno en el que se ejecuten.

### 4.4 Infraestructura

#### Responsabilidad

La capa de infraestructura proporciona los servicios técnicos que permiten al sistema interactuar con su entorno.

Su responsabilidad consiste en implementar aquellos mecanismos cuya finalidad no pertenece al dominio de la aplicación, como la persistencia de datos o la integración con servicios externos.

La infraestructura actúa como un conjunto de adaptadores que permiten aislar las reglas de negocio de los detalles tecnológicos, facilitando la sustitución o evolución de dichos mecanismos sin afectar al resto del sistema.

#### Componentes principales

La capa de infraestructura está formada principalmente por:

- Adaptadores de persistencia (`localStorageTaskRepository`).
- Modelos de intercambio de datos (`StoredTask`).
- Utilidades técnicas relacionadas con la comunicación entre el sistema y su entorno.

Estos componentes encapsulan los detalles de implementación necesarios para acceder a recursos externos, manteniendo el resto de la arquitectura independiente de dichas tecnologías.

#### Dependencias

La infraestructura depende del dominio para conocer los modelos con los que trabaja, pero no modifica las reglas de negocio ni coordina el comportamiento de la aplicación.

Las capas superiores utilizan la infraestructura a través de la capa de aplicación, evitando establecer dependencias directas con los mecanismos técnicos.

Esta organización permite sustituir la tecnología utilizada para la persistencia o la integración con otros sistemas sin alterar el funcionamiento del dominio.

#### Responsabilidades excluidas

La capa de infraestructura no debe:

- Implementar reglas de negocio.
- Coordinar la ejecución de los casos de uso.
- Contener lógica de presentación.
- Modificar directamente el comportamiento del dominio.
- Introducir dependencias desde el dominio hacia tecnologías concretas.

Su única misión consiste en proporcionar los servicios técnicos necesarios para que la aplicación pueda interactuar con el entorno sin comprometer la independencia del resto de la arquitectura.

## 5. Flujo de escritura del estado

Las capas descritas en el capítulo anterior representan la organización estructural del sistema.

Sin embargo, comprender una arquitectura no consiste únicamente en conocer sus componentes, sino también en entender cómo colaboran entre sí durante la ejecución de una operación.

Este capítulo describe el recorrido que sigue una modificación del estado desde que el usuario inicia una acción hasta que el nuevo estado queda consolidado y persistido.

El recorrido descrito corresponde a una operación de escritura sobre el estado. El flujo de lectura se presenta en el capítulo siguiente, donde se describe cómo la información llega nuevamente a la interfaz de usuario.

Cada etapa del proceso tiene una responsabilidad concreta y participa en la operación sin invadir las responsabilidades de las demás, manteniendo el principio de separación de responsabilidades que guía toda la arquitectura.

Usuario
│
▼
Interfaz de usuario
│
▼
Caso de uso
│
▼
Coordinador de acciones
(taskActions)
│
▼
Gestor del estado
(tasksStore)
│
▼
Reducer
│
▼
Nuevo estado
│
▼
Suscriptores
│
├────────► Persistencia
│
└────────► Interfaz de usuario

La persistencia no constituye una responsabilidad del Store. El Store únicamente publica los cambios de estado; son los componentes suscritos quienes deciden cómo reaccionar ante ellos. En la implementación actual, uno de esos suscriptores se encarga de mantener sincronizado el estado con localStorage.

## 6. Flujo de lectura del estado

Una vez actualizado el estado de la aplicación, la arquitectura debe garantizar que la información llegue nuevamente a la interfaz de usuario de forma coherente y eficiente.

Este capítulo describe el recorrido que sigue el estado desde su almacenamiento en el Store hasta su representación en la interfaz, mostrando cómo cada componente participa en el proceso sin asumir responsabilidades que pertenecen a otras partes del sistema.

Al igual que el flujo de escritura descrito en el capítulo anterior, cada etapa desempeña una función específica y mantiene una separación clara de responsabilidades, favoreciendo una arquitectura predecible, fácilmente testeable y sencilla de evolucionar.

Estado global
(Store)
│
▼
Consultas
(Selectores)
│
▼
Adaptador UI
(useTasks)
│
▼
Componentes
│
▼
Usuario

El recorrido comienza en el Store, que actúa como fuente única de verdad de la aplicación.

Los selectores obtienen únicamente la información necesaria para cada operación de lectura, encapsulando la lógica de consulta y evitando que la interfaz conozca la estructura interna del estado.

El hook `useTasks` conecta el sistema de estado con React mediante `useSyncExternalStore`, proporcionando a los componentes una vista consistente y actualizada del estado de la aplicación.

Finalmente, los componentes de la interfaz representan dicha información al usuario, limitándose a su presentación y evitando incorporar lógica de negocio o dependencias con otras capas del sistema.

Este flujo mantiene la separación entre lectura y modificación del estado, permitiendo que ambas evolucionen de forma independiente y favoreciendo una arquitectura más mantenible.

La escritura y la lectura del estado siguen recorridos diferentes, aunque ambos comparten la misma fuente de verdad: el Store. Esta separación permite especializar cada flujo según su propósito —modificar o consultar el estado— manteniendo una arquitectura más clara, predecible y fácil de evolucionar.

## 7. Organización del proyecto

La estructura del proyecto refleja directamente la arquitectura descrita en los capítulos anteriores.

La organización del código no responde únicamente a criterios de orden, sino que persigue reforzar la separación de responsabilidades entre las distintas capas del sistema y facilitar su evolución a medida que el proyecto crece.

Cada directorio agrupa elementos con una finalidad común, evitando dependencias innecesarias y favoreciendo una navegación coherente por el código fuente.

Una posible representación de la organización actual del proyecto es la siguiente:

src/
├── application/
│ ├── history/
│ └── tasks/
│ └── useCases/
│
├── domain/
│ └── tasks/
│ └── entities/
│
├── infrastructure/
│ └── taskRepository/
│
├── store/
│ └── middleware/
│
├── ui/
│ ├── components/
│ ├── hooks/
│ ├── presenters/
│ └── constants/
│
├── hooks/
├── tests/
└── utils/

La estructura mostrada corresponde al estado actual del proyecto. Puede evolucionar con el tiempo, siempre que dicha evolución respete los principios arquitectónicos descritos en este documento.

| Directorio        | Finalidad                                          |
| ----------------- | -------------------------------------------------- |
| `application/`    | Coordinación de casos de uso y gestión del estado. |
| `domain/`         | Modelo de dominio y reglas de negocio.             |
| `infrastructure/` | Adaptadores y servicios técnicos.                  |
| `store/`          | Infraestructura genérica del sistema de estado.    |
| `ui/`             | Componentes, hooks y elementos de presentación.    |
| `tests/`          | Pruebas automatizadas.                             |
| `utils/`          | Utilidades compartidas.                            |

La estructura del proyecto no pretende reflejar únicamente una organización de directorios, sino materializar físicamente la arquitectura del sistema.

Mantener esta correspondencia entre la organización del código y las responsabilidades de cada capa facilita la comprensión del proyecto, reduce el acoplamiento entre módulos y hace que las futuras refactorizaciones resulten más sencillas y seguras.

La organización de directorios podrá evolucionar con el tiempo, siempre que continúe reflejando las responsabilidades arquitectónicas descritas en este documento y no se convierta en el criterio que determine dichas responsabilidades.

## 8. Componentes principales

### 8.1 Store

#### Objetivo

El Store constituye la fuente única de verdad (_Single Source of Truth_) de la aplicación.

Su objetivo es mantener el estado global del sistema y ofrecer un punto centralizado desde el que consultar, modificar y notificar los cambios producidos durante la ejecución de la aplicación.

#### Responsabilidad

El Store desempeña tres funciones fundamentales dentro de la arquitectura:

- **Conservar** el estado global de la aplicación como fuente única de verdad.
- **Coordinar** las modificaciones del estado mediante el reducer.
- **Publicar** los cambios realizados para que los componentes suscritos puedan reaccionar de forma consistente.

Estas tres responsabilidades definen su papel dentro del sistema y permiten comprender por qué el Store constituye el punto central de la arquitectura.

En consecuencia, el Store es responsable de:

- Mantener el estado actual de la aplicación.
- Aplicar las modificaciones de estado mediante el reducer.
- Notificar a los componentes suscritos cuando el estado cambia.
- Exponer una API sencilla y predecible para consultar y actualizar el estado.

El Store no implementa reglas de negocio. Su función consiste exclusivamente en gestionar el ciclo de vida del estado y coordinar su propagación al resto del sistema.

#### Funcionamiento

El Store se construye a partir de un reducer y de un estado inicial.

Cada modificación del estado sigue siempre el mismo recorrido:

```text
dispatch(action)
        │
        ▼
Reducer
        │
        ▼
Nuevo estado
        │
        ▼
Notificación a los suscriptores
```

Los componentes interesados en conocer el estado no consultan directamente el reducer, sino que se suscriben al Store utilizando la interfaz pública que este proporciona.

Este diseño garantiza que todas las modificaciones del estado sigan un único punto de entrada y que todos los consumidores reciban una visión coherente y sincronizada de la aplicación.

#### Relación con otros componentes

El Store ocupa una posición central dentro de la arquitectura y colabora con varios componentes del sistema:

- Los casos de uso solicitan modificaciones del estado mediante las acciones correspondientes.
- El reducer calcula el nuevo estado a partir de la acción recibida.
- Los selectores obtienen la información necesaria para las operaciones de lectura.
- El hook `useTasks` conecta el Store con React mediante `useSyncExternalStore`.
- Los componentes suscritos reaccionan automáticamente cuando el estado cambia.
- La persistencia se implementa como una reacción a las notificaciones emitidas por el propio Store.

Esta organización permite mantener desacopladas las responsabilidades de modificación, consulta y persistencia del estado.

#### Decisiones arquitectónicas

Durante la evolución del proyecto se adoptaron varias decisiones que definen el comportamiento actual del Store:

- Mantener un único Store global como fuente de verdad de la aplicación.
- Utilizar un reducer puro para garantizar actualizaciones deterministas.
- Exponer una API mínima basada en `getState()`, `dispatch()`, `subscribe()` y `replaceState()`.
- Integrar React mediante `useSyncExternalStore`, evitando que el framework sea propietario del estado.
- Trasladar la persistencia desde un middleware a las suscripciones del Store, de modo que cualquier modificación del estado —incluyendo operaciones como Undo y Redo— siga exactamente el mismo mecanismo de notificación.

Estas decisiones han permitido construir un sistema de estado sencillo, predecible y fácilmente extensible, manteniendo una separación clara entre la gestión del estado, las reglas de negocio y los servicios técnicos.

### 8.2 Reducer

#### Objetivo

El reducer constituye el mecanismo encargado de transformar el estado de la aplicación de forma determinista a partir de las acciones recibidas.

Su objetivo es garantizar que todas las modificaciones del estado sigan un único procedimiento, predecible y libre de efectos secundarios.

#### Responsabilidad

El reducer desempeña tres funciones fundamentales dentro de la arquitectura:

- **Interpretar** la acción recibida.
- **Transformar** el estado aplicando las reglas del dominio.
- **Devolver** un nuevo estado sin modificar el estado anterior.

Estas tres responsabilidades permiten que la evolución del estado sea completamente determinista y fácilmente verificable mediante pruebas automatizadas.

En consecuencia, el reducer es responsable de:

- Interpretar las acciones enviadas por el Store.
- Delegar el comportamiento específico en las entidades y Value Objects del dominio.
- Construir un nuevo estado a partir del estado anterior.
- Garantizar la inmutabilidad durante todo el proceso de transformación.

El reducer no implementa directamente la lógica de negocio, sino que coordina la aplicación de dicha lógica utilizando los componentes del dominio.

#### Funcionamiento

Cada vez que el Store recibe una acción, el reducer analiza su tipo y determina qué transformación debe aplicarse al estado.

De forma simplificada, el proceso puede representarse así:

```text
Estado actual
        │
        ▼
Acción
        │
        ▼
Reducer
        │
        ▼
Entidades y Value Objects
        │
        ▼
Nuevo estado
```

Este flujo garantiza que todas las modificaciones del estado recorran siempre el mismo camino y produzcan resultados predecibles a partir de las mismas entradas.

#### Relación con otros componentes

El reducer mantiene una relación directa con varios componentes del sistema:

- Recibe las acciones enviadas por el Store.
- Utiliza las entidades y los Value Objects para aplicar las reglas del dominio.
- Devuelve un nuevo estado al Store para que este lo conserve y notifique a los componentes suscritos.

El reducer no conoce la interfaz de usuario, los casos de uso ni la infraestructura, permaneciendo completamente aislado de cualquier tecnología concreta.

#### Decisiones arquitectónicas

La implementación actual del reducer responde a varias decisiones arquitectónicas adoptadas durante la evolución del proyecto:

- Mantener el reducer como una función pura y determinista.
- Delegar el comportamiento específico en las entidades y Value Objects, evitando concentrar toda la lógica de negocio en un único punto.
- Garantizar la inmutabilidad del estado devolviendo siempre una nueva representación cuando se produce una modificación.
- Situar el reducer dentro del dominio, al considerarlo parte del mecanismo que aplica las reglas de negocio y no un simple componente técnico de gestión del estado.

Estas decisiones permiten mantener un modelo de estado predecible, fácilmente testeable y desacoplado tanto de la interfaz de usuario como de la infraestructura.

### 8.3 Casos de uso

#### Objetivo

Los casos de uso representan las operaciones que la aplicación permite realizar.

Su objetivo es convertir una intención procedente de la interfaz de usuario en una operación coordinada sobre el sistema, manteniendo separadas la presentación, la gestión del estado y las reglas de negocio.

Cada caso de uso expresa una acción concreta mediante un nombre y una responsabilidad claramente definidos, como añadir una tarea, editarla, cambiar su prioridad o alternar el estado de todas las tareas.

#### Responsabilidad

Los casos de uso desempeñan tres funciones fundamentales dentro de la arquitectura:

- **Recibir** la intención de ejecutar una operación.
- **Orquestar** los pasos necesarios para llevarla a cabo.
- **Delegar** el comportamiento en los componentes adecuados.

Estas funciones permiten que la interfaz exprese qué quiere hacer sin conocer cómo se implementa internamente la operación.

En consecuencia, los casos de uso son responsables de:

- Representar las operaciones disponibles en la aplicación.
- Validar las condiciones necesarias para iniciar una operación cuando corresponda.
- Coordinar la creación o utilización de objetos del dominio.
- Delegar la modificación del estado en las acciones de la capa de aplicación.
- Mantener cada operación aislada y fácilmente comprobable mediante pruebas.

Los casos de uso no deben concentrar las reglas fundamentales del negocio. Cuando una regla pertenece a una entidad, a un Value Object o a otro componente del dominio, el caso de uso debe limitarse a invocarla.

#### Funcionamiento

Cada caso de uso implementa una única operación de la aplicación.

De forma simplificada, su ejecución sigue este recorrido:

```text
Intención del usuario
        │
        ▼
Interfaz de usuario
        │
        ▼
Caso de uso
        │
        ▼
Objetos del dominio
        │
        ▼
taskActions
        │
        ▼
Store
```

La interfaz invoca el caso de uso correspondiente y le proporciona los datos necesarios.

El caso de uso coordina la operación, crea o utiliza los objetos del dominio cuando resulta necesario y delega finalmente la modificación del estado en `taskActions`.

Este diseño mantiene la interfaz aislada del Store y evita que los componentes de presentación tengan que conocer las acciones internas del sistema.

#### Relación con otros componentes

Los casos de uso actúan como frontera entre la interfaz de usuario y el resto de la aplicación:

- Son invocados desde la interfaz, principalmente a través de `useTasks`.
- Utilizan entidades y Value Objects para representar datos válidos del dominio.
- Delegan las modificaciones del estado en `taskActions`.
- Pueden consultar selectores o información del estado cuando una operación necesita tomar una decisión.
- Se construyen y exponen mediante el módulo de composición de la aplicación.

Esta posición les permite coordinar las operaciones sin acoplar la interfaz a los detalles internos del Store, del Reducer o de la infraestructura.

#### Decisiones arquitectónicas

La implementación actual de los casos de uso responde a varias decisiones arquitectónicas:

- Definir un caso de uso independiente para cada operación significativa.
- Utilizarlos como punto de entrada de la interfaz hacia la lógica de la aplicación.
- Mantenerlos fuera del dominio, ya que coordinan operaciones, pero no representan reglas de negocio fundamentales.
- Evitar que la UI despache acciones directamente sobre el Store.
- Mantener cada caso de uso pequeño, explícito y fácilmente testeable.
- Reutilizar entidades, Value Objects, selectores y acciones existentes antes de introducir lógica duplicada.

Estas decisiones permiten que las operaciones de la aplicación evolucionen sin trasladar complejidad a la interfaz ni debilitar la independencia del dominio.

### 8.4 Entidades

#### Objetivo

Las entidades representan los conceptos fundamentales del dominio cuyo significado permanece estable a lo largo del tiempo, independientemente de cómo evolucione su estado.

Su objetivo es encapsular tanto los datos como el comportamiento asociado a dichos conceptos, garantizando que las reglas de negocio permanezcan próximas a la información sobre la que actúan.

En la arquitectura actual, las principales entidades del dominio son `Task` y `TaskList`.

#### Responsabilidad

Las entidades desempeñan tres funciones fundamentales dentro de la arquitectura:

- **Representar** los conceptos principales del dominio.
- **Proteger** la coherencia de su propio estado.
- **Evolucionar** mediante operaciones que respetan las reglas del negocio.

Estas responsabilidades permiten que el comportamiento del sistema permanezca distribuido entre los propios objetos del dominio, evitando concentrarlo en otros componentes de la arquitectura.

En consecuencia, las entidades son responsables de:

- Mantener un estado válido durante todo su ciclo de vida.
- Implementar el comportamiento propio del dominio.
- Preservar los invariantes definidos por la aplicación.
- Colaborar con otras entidades y Value Objects cuando una operación lo requiere.

Las entidades no deben conocer la interfaz de usuario, el mecanismo de persistencia ni la forma en que son utilizadas por los casos de uso.

#### Funcionamiento

Las entidades evolucionan mediante operaciones propias que generan un nuevo estado coherente.

Cada modificación se realiza respetando las reglas del dominio y preservando la inmutabilidad de los objetos.

De forma simplificada, el proceso puede representarse así:

```text
Estado válido
      │
      ▼
Operación del dominio
      │
      ▼
Validación
      │
      ▼
Nuevo estado válido
```

Este enfoque sitúa el comportamiento junto a los datos y evita que las reglas de negocio se dispersen entre distintos componentes de la aplicación.

#### Relación con otros componentes

Las entidades constituyen el núcleo del dominio y colaboran con diversos componentes de la arquitectura:

- Son utilizadas por los casos de uso para representar las operaciones del negocio.
- Se apoyan en los Value Objects para encapsular conceptos con reglas propias.
- Son invocadas por el reducer para aplicar las transformaciones del estado.
- Permanecen completamente independientes de la interfaz de usuario, del Store y de la infraestructura.

Esta organización favorece un modelo de dominio cohesionado y desacoplado de los aspectos técnicos de la aplicación.

#### Decisiones arquitectónicas

La implementación actual de las entidades responde a varias decisiones arquitectónicas adoptadas durante la evolución del proyecto:

- Modelar `Task` como una entidad con comportamiento propio, en lugar de utilizar una estructura de datos pasiva.
- Incorporar `TaskList` como entidad responsable de las operaciones sobre colecciones de tareas.
- Delegar el comportamiento del dominio en las propias entidades, evitando trasladarlo al reducer o a los casos de uso.
- Mantener la inmutabilidad devolviendo nuevas instancias cuando una operación modifica el estado.
- Utilizar Value Objects para representar aquellos atributos que poseen reglas propias de validación o comparación.

Estas decisiones permiten construir un dominio más expresivo, cohesionado y resistente a los cambios tecnológicos o estructurales del resto de la aplicación.

### 8.5 Value Objects

#### Objetivo

Los Value Objects representan conceptos del dominio definidos exclusivamente por su valor y por las reglas que lo gobiernan.

Su objetivo es encapsular la validación, el comportamiento y la comparación de aquellos datos que poseen un significado propio dentro del modelo de dominio.

En la arquitectura actual, ejemplos de Value Objects son `TaskId`, `TaskText` y `Priority`.

#### Responsabilidad

Los Value Objects desempeñan tres funciones fundamentales dentro de la arquitectura:

- **Validar** los valores que representan.
- **Encapsular** el comportamiento asociado a dichos valores.
- **Comparar** objetos por su contenido y no por su identidad.

Estas responsabilidades permiten que las reglas asociadas a un dato permanezcan concentradas en un único lugar, evitando duplicarlas en distintos componentes de la aplicación.

En consecuencia, los Value Objects son responsables de:

- Garantizar que sus valores sean siempre válidos.
- Impedir la creación de estados inconsistentes.
- Proporcionar operaciones específicas relacionadas con el valor que representan.
- Facilitar comparaciones seguras y expresivas dentro del dominio.

Los Value Objects no contienen identidad propia ni representan elementos independientes del dominio. Su existencia depende del valor que encapsulan.

#### Funcionamiento

Cada Value Object valida el valor recibido durante su creación y únicamente permite construir instancias que respeten las reglas definidas para ese concepto.

De forma simplificada, el proceso puede representarse así:

```text
Valor recibido
       │
       ▼
Validación
       │
       ▼
Value Object
       │
       ▼
Valor válido para el dominio
```

Una vez creado, el Value Object actúa como una representación segura del dato, permitiendo que el resto del sistema trabaje siempre con valores coherentes.

#### Relación con otros componentes

Los Value Objects colaboran estrechamente con el resto del dominio:

- Son utilizados por las entidades para representar atributos con significado propio.
- Son empleados por los casos de uso al construir objetos del dominio.
- Son utilizados indirectamente por el reducer a través de las entidades.
- Permanecen completamente independientes de la interfaz de usuario, del Store y de la infraestructura.

Esta organización mantiene las reglas de validación próximas a los datos que representan y evita su dispersión por la aplicación.

#### Decisiones arquitectónicas

La implementación actual de los Value Objects responde a varias decisiones arquitectónicas adoptadas durante la evolución del proyecto:

- Sustituir tipos primitivos por objetos que representen conceptos del dominio.
- Centralizar las reglas de validación y comparación dentro de cada Value Object.
- Favorecer la expresividad del modelo utilizando tipos con significado propio.
- Reducir la duplicación de validaciones en entidades, casos de uso y componentes de la interfaz.
- Mantener los Value Objects inmutables para garantizar un comportamiento predecible y seguro.

Estas decisiones han permitido construir un dominio más expresivo, robusto y resistente a errores derivados del uso indiscriminado de tipos primitivos.

### 8.6 Selectores

#### Objetivo

Los selectores constituyen el mecanismo de consulta del estado de la aplicación.

Su objetivo es obtener únicamente la información necesaria para cada operación de lectura, encapsulando la lógica de consulta y evitando que los consumidores conozcan la estructura interna del Store.

Esta separación permite mantener desacopladas las operaciones de lectura y escritura del estado.

#### Responsabilidad

Los selectores desempeñan tres funciones fundamentales dentro de la arquitectura:

- **Consultar** el estado almacenado en el Store.
- **Derivar** la información necesaria para cada operación.
- **Aislar** a los consumidores de la representación interna del estado.

Estas responsabilidades permiten centralizar la lógica de lectura y reducir la duplicación de consultas repartidas por la aplicación.

En consecuencia, los selectores son responsables de:

- Obtener información del estado de forma consistente.
- Derivar datos calculados cuando resulta necesario.
- Encapsular la lógica de filtrado, agregación o transformación utilizada por la interfaz.
- Proporcionar una API estable para las operaciones de lectura.

Los selectores no modifican el estado ni contienen reglas de negocio relacionadas con las operaciones de escritura.

#### Funcionamiento

Los selectores reciben el estado actual y devuelven únicamente la información necesaria para la operación solicitada.

De forma simplificada, el proceso puede representarse así:

```text
Store
    │
    ▼
Selector
    │
    ▼
Información derivada
    │
    ▼
Consumidor
```

Este modelo permite reutilizar las mismas consultas desde distintos puntos de la aplicación sin duplicar lógica de acceso al estado.

#### Relación con otros componentes

Los selectores mantienen una relación directa con varios componentes del sistema:

- Consultan el estado almacenado en el Store.
- Son utilizados por los casos de uso cuando necesitan tomar decisiones basadas en el estado actual.
- Son consumidos por `useTasks` y por la interfaz de usuario para obtener la información que debe mostrarse.
- Permanecen completamente independientes del reducer, de la persistencia y de la infraestructura.

Esta organización mantiene claramente separadas las responsabilidades de lectura y modificación del estado.

#### Decisiones arquitectónicas

La implementación actual de los selectores responde a varias decisiones arquitectónicas adoptadas durante la evolución del proyecto:

- Centralizar toda la lógica de consulta del estado.
- Evitar que la interfaz conozca la estructura interna del Store.
- Incorporar selectores derivados para encapsular cálculos reutilizables.
- Introducir memoización únicamente cuando aporta un beneficio real de rendimiento.
- Mantener los selectores como funciones puras, independientes del resto de componentes.

Estas decisiones permiten construir una capa de lectura coherente, reutilizable y fácilmente testeable, reforzando la separación entre consulta y modificación del estado.

### 8.7 Persistencia

#### Objetivo

La persistencia garantiza que el estado de la aplicación pueda conservarse más allá del ciclo de vida de la ejecución.

Su objetivo es almacenar y recuperar el estado utilizando un mecanismo externo al dominio, permitiendo que la información permanezca disponible entre distintas sesiones de la aplicación.

En la implementación actual, este mecanismo se basa en `localStorage`.

#### Responsabilidad

La persistencia desempeña tres funciones fundamentales dentro de la arquitectura:

- **Guardar** el estado cuando se producen modificaciones.
- **Recuperar** el estado al iniciar la aplicación.
- **Adaptar** la representación del dominio al formato utilizado para su almacenamiento.

Estas responsabilidades permiten mantener completamente separadas las reglas de negocio de los aspectos técnicos relacionados con el almacenamiento de la información.

En consecuencia, la persistencia es responsable de:

- Serializar el estado del dominio antes de almacenarlo.
- Reconstruir el estado al cargar la aplicación.
- Adaptar los objetos del dominio al formato persistente y viceversa.
- Mantener aislados los detalles propios del mecanismo de almacenamiento.

La persistencia no implementa reglas de negocio ni participa en la coordinación de las operaciones del sistema.

#### Funcionamiento

La persistencia se basa en las notificaciones emitidas por el Store.

Cada vez que el estado cambia, los componentes suscritos pueden reaccionar de forma independiente. Uno de ellos se encarga de sincronizar el nuevo estado con el mecanismo de almacenamiento.

De forma simplificada, el proceso puede representarse así:

```text
Store
    │
    ▼
Notificación
    │
    ▼
Repositorio de persistencia
    │
    ▼
Adaptación de datos
    │
    ▼
localStorage
```

En el arranque de la aplicación se realiza el recorrido inverso, recuperando la información almacenada y reconstruyendo las entidades del dominio antes de inicializar el Store.

#### Relación con otros componentes

La persistencia mantiene una relación limitada con el resto del sistema:

- Recibe las notificaciones emitidas por el Store cuando el estado cambia.
- Utiliza los modelos del dominio para reconstruir el estado durante la carga.
- Encapsula los detalles propios de `localStorage` mediante un repositorio especializado.
- Permanece completamente independiente de la interfaz de usuario, del reducer y de los casos de uso.

Esta organización evita que el resto de la aplicación conozca cómo o dónde se almacenan los datos.

#### Decisiones arquitectónicas

La implementación actual de la persistencia responde a varias decisiones arquitectónicas adoptadas durante la evolución del proyecto:

- Mantener la persistencia fuera del dominio y de la lógica de negocio.
- Implementar la sincronización mediante las suscripciones del Store en lugar de utilizar un middleware específico.
- Centralizar la adaptación entre el dominio y el formato persistente mediante `StoredTask`.
- Aislar el acceso a `localStorage` dentro de un repositorio especializado.
- Diseñar la persistencia de forma que el mecanismo de almacenamiento pueda sustituirse en el futuro sin afectar al dominio ni a la capa de aplicación.

Estas decisiones permiten mantener una arquitectura más desacoplada, donde la persistencia actúa como un servicio técnico independiente y cualquier modificación del estado —incluidas operaciones como Undo y Redo— sigue exactamente el mismo mecanismo de sincronización.

### 8.8 Historial (Undo / Redo)

#### Objetivo

El historial proporciona un mecanismo para recuperar estados anteriores de la aplicación y restaurarlos cuando resulta necesario.

Su objetivo es permitir operaciones de deshacer y rehacer sin alterar el funcionamiento del resto de la arquitectura, reutilizando el mismo flujo de actualización del estado que emplea cualquier otra operación del sistema.

#### Responsabilidad

El historial desempeña tres funciones fundamentales dentro de la arquitectura:

- **Registrar** los estados necesarios para permitir su recuperación.
- **Restaurar** estados previamente registrados mediante la operación de deshacer.
- **Rehacer** estados restaurados cuando la operación inversa resulta posible.

Estas responsabilidades permiten incorporar navegación temporal sobre el estado sin modificar las reglas de negocio ni la lógica del Store.

En consecuencia, el historial es responsable de:

- Mantener el registro de los estados anteriores y posteriores.
- Gestionar las pilas de Undo y Redo.
- Determinar cuándo una operación de deshacer o rehacer está disponible.
- Proporcionar el estado que debe restaurarse en cada operación.

El historial no modifica directamente el estado de la aplicación ni implementa reglas de negocio. Su única responsabilidad consiste en administrar la evolución temporal del estado.

#### Funcionamiento

Cada modificación del estado registra previamente la situación actual antes de aplicar la nueva operación.

Cuando se ejecuta una operación de Undo o Redo, el historial devuelve el estado correspondiente y este se restaura utilizando el mismo mecanismo empleado por cualquier otra modificación del sistema.

De forma simplificada, el proceso puede representarse así:

```text
Estado actual
      │
      ▼
History
      │
      ├────────► Undo Stack
      │
      └────────► Redo Stack
                 │
                 ▼
         Estado restaurado
                 │
                 ▼
             Store
```

La restauración del estado no sigue un camino especial. Una vez recuperado el estado correspondiente, el Store lo publica a través de sus mecanismos habituales de notificación, permitiendo que la interfaz y la persistencia reaccionen exactamente igual que ante cualquier otra modificación.

#### Relación con otros componentes

El historial mantiene una relación estrecha con la capa de aplicación:

- Es utilizado por `taskActions` para registrar los cambios del estado.
- Restaura estados mediante el Store utilizando `replaceState()`.
- Se beneficia automáticamente del sistema de suscripciones del Store, que actualiza tanto la interfaz como la persistencia tras cada restauración.
- Permanece completamente independiente del dominio y de la infraestructura.

Esta integración permite incorporar Undo y Redo sin introducir flujos alternativos ni comportamientos especiales para el resto de componentes.

#### Decisiones arquitectónicas

La implementación actual del historial responde a varias decisiones arquitectónicas adoptadas durante la evolución del proyecto:

- Implementar el historial mediante una clase genérica (`History<T>`), independiente del dominio concreto de la aplicación.
- Mantener separadas las pilas de Undo y Redo para gestionar correctamente la navegación temporal del estado.
- Restaurar el estado utilizando `replaceState()`, reutilizando el comportamiento normal del Store.
- Evitar mecanismos específicos de persistencia o notificación para Undo y Redo, permitiendo que estas operaciones recorran exactamente el mismo flujo que cualquier otra modificación del estado.
- Mantener el historial como una responsabilidad propia de la capa de aplicación y no del dominio.

Estas decisiones permiten incorporar funcionalidad avanzada sin aumentar el acoplamiento entre componentes ni alterar los principios arquitectónicos que sustentan el resto del sistema.

### Síntesis de responsabilidades

Los componentes descritos en este capítulo pueden resumirse mediante los siguientes verbos, que reflejan la responsabilidad principal de cada uno dentro de la arquitectura:

| Componente    | Responsabilidades                        |
| ------------- | ---------------------------------------- |
| Store         | **Conservar · Coordinar · Publicar**     |
| Reducer       | **Interpretar · Transformar · Devolver** |
| Casos de uso  | **Recibir · Orquestar · Delegar**        |
| Entidades     | **Representar · Proteger · Evolucionar** |
| Value Objects | **Validar · Encapsular · Comparar**      |
| Selectores    | **Consultar · Derivar · Aislar**         |
| Persistencia  | **Guardar · Recuperar · Adaptar**        |
| Historial     | **Registrar · Restaurar · Rehacer**      |

Esta síntesis no sustituye la descripción detallada de cada componente, sino que ofrece una visión global de sus responsabilidades principales y proporciona un lenguaje común para comprender la arquitectura del sistema.

## 9. Decisiones arquitectónicas relevantes

La arquitectura actual del proyecto es el resultado de una serie de decisiones adoptadas a lo largo de su evolución.

Cada una de ellas respondió a un problema concreto y fue incorporada únicamente después de haber sido implementada, evaluada y validada mediante la práctica.

Este capítulo resume las decisiones que han tenido un mayor impacto sobre la estructura del sistema.

La justificación detallada de estas decisiones se documentará en sus correspondientes ADR (Architecture Decision Records) a medida que dichos documentos se incorporen al proyecto.

### 9.1 Un único Store global

Problema

El estado comenzaba a dispersarse entre distintos componentes.

Decisión

Mantener un único Store como fuente de verdad.

Impacto

Arquitectura más sencilla y comportamiento predecible.

### 9.2 Reducer como parte del dominio

Decisión

Situar el reducer dentro del dominio.

Motivación

Aplica reglas del negocio, no infraestructura.

Impacto

Mayor cohesión del dominio.

### 9.3 Casos de uso como punto de entrada

Decisión

Toda modificación del estado comienza en un caso de uso.

Motivación

Desacoplar la UI del Store.

Impacto

Interfaz más simple y operaciones reutilizables.

### 9.4 Value Objects

Decisión

Sustituir tipos primitivos por Value Objects.

Motivación

Proteger invariantes y expresar el dominio.

Impacto

Modelo más seguro y expresivo.

### 9.5 Persistencia mediante suscripciones

Decisión

Persistir reaccionando a los cambios del Store.

Motivación

Eliminar responsabilidades innecesarias del middleware.

Impacto

Un único flujo para todas las modificaciones del estado.

### 9.6 Documentación modular

Decisión

Separar la documentación por responsabilidad.

Motivación

Evitar duplicidades.

Impacto

Documentación más mantenible.

### 9.7 Conclusión

Las decisiones resumidas en este capítulo comparten un mismo criterio: introducir únicamente aquellas soluciones que aportan un beneficio claro al problema que resuelven.

La arquitectura actual no persigue aplicar patrones de diseño por sí mismos, sino construir un sistema coherente, mantenible y capaz de evolucionar mediante pequeñas refactorizaciones sucesivas.

Este mismo criterio constituye la referencia para evaluar cualquier cambio futuro en la arquitectura del proyecto.

## 10. Estado actual de la arquitectura

La arquitectura del proyecto ha alcanzado un nivel de estabilidad que permite incorporar nuevas funcionalidades mediante pequeñas extensiones o refactorizaciones localizadas, sin necesidad de modificar su estructura fundamental.

El sistema presenta una separación clara entre la interfaz de usuario, la coordinación de las operaciones, el dominio, la infraestructura y la gestión del estado. Esta organización facilita la comprensión del código, reduce el acoplamiento entre componentes y favorece su evolución.

Las principales decisiones arquitectónicas adoptadas durante el desarrollo se encuentran consolidadas y han demostrado su utilidad mediante la implementación de nuevas funcionalidades, la incorporación de pruebas automatizadas y sucesivas refactorizaciones.

La arquitectura mantiene un equilibrio entre simplicidad y capacidad de evolución. Los componentes incorporados responden a necesidades reales del proyecto y su permanencia se justifica por el valor que aportan al conjunto del sistema.

Como consecuencia de esta madurez, el foco de las futuras iteraciones deja de estar en redefinir la arquitectura y pasa a centrarse en ampliar las capacidades funcionales del proyecto, preservando los principios descritos en este documento.

La arquitectura ya no constituye el principal objeto de desarrollo del proyecto; pasa a ser la base sobre la que continuará evolucionando el dominio y sus funcionalidades.

Las futuras decisiones arquitectónicas deberán evaluarse utilizando los principios descritos en este documento, preservando la coherencia alcanzada por el sistema.

## 11. Relación con el resto de la documentación

Este documento constituye la referencia principal de la arquitectura del proyecto.

Su propósito es describir el estado actual del sistema, los principios que guían su diseño, la organización de sus componentes y las decisiones arquitectónicas que sustentan su estructura.

No obstante, la arquitectura representa únicamente una parte de la documentación técnica del proyecto. El resto de documentos desarrollan aspectos específicos que complementan la información presentada aquí y permiten profundizar en diferentes áreas según las necesidades de cada lector.

La documentación se organiza de forma que cada documento tenga una responsabilidad claramente definida y evite duplicar información presente en otros.

En particular:

| Documento              | Responsabilidad principal                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| `INTRODUCTION.md`      | Guía de navegación y organización general de la documentación del proyecto.               |
| `GLOSSARY.md`          | Definición de la terminología común utilizada en toda la documentación del proyecto.      |
| `VISION.md`            | Propósito del proyecto, principios fundamentales y dirección estratégica a largo plazo.   |
| `PRODUCT.md`           | Definición funcional del producto, su modelo conceptual y sus capacidades.                |
| `ARCHITECTURE.md`      | Organización técnica del sistema, principios arquitectónicos y decisiones de diseño.      |
| `DEVELOPMENT_GUIDE.md` | Organización del entorno de desarrollo, convenciones y forma de trabajo sobre el código.  |
| `TESTING.md`           | Estrategia de pruebas, organización del testing y criterios de validación.                |
| `ADR/`                 | Justificación detallada de las decisiones arquitectónicas más relevantes.                 |
| `PROJECT_STATUS.md`    | Estado actual del proyecto, funcionalidades implementadas y próximos objetivos.           |
| `PROJECT_JOURNAL.md`   | Registro histórico de las sesiones de desarrollo y de la evolución del proyecto.          |
| `ROADMAP.md`           | Líneas estratégicas de evolución y posibles desarrollos futuros.                          |
| `DESIGN_JOURNAL.md`    | Hipótesis, ideas y reflexiones de diseño pendientes de evaluación o incorporación futura. |

Esta organización permite que cada documento pueda evolucionar de forma independiente, manteniendo una alta cohesión, evitando redundancias y facilitando el mantenimiento de la documentación a largo plazo.

En conjunto, estos documentos forman un sistema de documentación coherente, en el que cada uno cumple una función específica y complementa a los demás sin sustituirlos.

**La mejor arquitectura no es la que incorpora más patrones, sino la que conserva únicamente aquellos que siguen aportando valor al dominio que modela.**
