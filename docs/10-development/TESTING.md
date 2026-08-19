# TESTING

1. Objetivo

2. Principios de testing

3. Estrategia de pruebas

   3.1 Testing por responsabilidad

   3.2 Pruebas unitarias del dominio

   3.3 Pruebas de casos de uso

   3.4 Pruebas del Store

   3.5 Pruebas de hooks

   3.6 Pruebas de componentes

   3.7 Pruebas de integración

4. Organización de los tests

5. Convenciones de testing

6. Cuándo añadir o modificar pruebas

7. Ejecución y validación

8. Cobertura

9. Evalución de la estrategia

10. Relación con el resto de la documentación

# 1. Objetivo

Este documento define la estrategia de pruebas del proyecto y establece los criterios que deben seguirse para verificar el comportamiento, la integración y la evolución del sistema.

Su propósito es proporcionar una referencia común para organizar las pruebas, determinar qué responsabilidades deben verificarse en cada nivel de pruebas y evitar duplicidades innecesarias entre distintos tipos de test.

La estrategia de testing debe mantenerse alineada con la arquitectura del proyecto. Cada prueba deberá centrarse en la responsabilidad del componente que valida, respetando los límites existentes entre dominio, aplicación, gestión del estado e interfaz de usuario.

Este documento no sustituye las instrucciones generales de validación definidas en `DEVELOPMENT_GUIDE.md` y `AGENTS.md`. Su función consiste en desarrollar específicamente cómo deben diseñarse, organizarse y mantenerse las pruebas automatizadas del proyecto.

El objetivo final de la estrategia de testing es proporcionar confianza para modificar y hacer evolucionar el sistema sin introducir regresiones, favoreciendo al mismo tiempo pruebas claras, útiles y sostenibles.

En conjunto, este documento constituye la referencia principal para comprender la estrategia de pruebas del proyecto y orienta la organización, diseño y evolución del sistema de testing.

# 2. Principios de testing

La estrategia de pruebas del proyecto tiene como finalidad proporcionar confianza para evolucionar el sistema sin comprometer su comportamiento, su arquitectura ni la coherencia entre sus componentes.

Las pruebas constituyen un elemento esencial del proceso de desarrollo y deben evolucionar junto con el código. Cada modificación relevante del sistema deberá ir acompañada de las pruebas necesarias para verificar su comportamiento y prevenir regresiones.

Cada nivel de pruebas deberá validar únicamente las responsabilidades que le correspondan dentro de la arquitectura del sistema, evitando duplicidades entre los distintos niveles de testing.

Las pruebas deberán ser claras, deterministas y fáciles de mantener. Su objetivo no consiste en aumentar el número de tests, sino en proporcionar información útil sobre el comportamiento del sistema y facilitar la detección de errores cuando el proyecto evolucione.

La cobertura de pruebas constituye un indicador de apoyo y no un objetivo en sí mismo. La prioridad será siempre verificar el comportamiento y las responsabilidades más relevantes del sistema antes que alcanzar un porcentaje determinado de cobertura.

La estrategia de testing deberá favorecer pruebas rápidas, independientes y suficientemente expresivas para que cualquier desarrollador pueda comprender con facilidad qué comportamiento está siendo validado y por qué.

La arquitectura del proyecto determina la estrategia de pruebas. Las pruebas deberán adaptarse a las responsabilidades definidas por el diseño del sistema y no condicionar su organización salvo que ello suponga una mejora justificada de la propia arquitectura.

# 3. Estrategia de pruebas

La estrategia de pruebas del proyecto se organiza siguiendo la misma separación de responsabilidades definida por la arquitectura del sistema.

Cada nivel de la aplicación deberá validarse mediante el tipo de prueba más adecuado para las responsabilidades que desempeña, evitando que un mismo comportamiento sea comprobado de forma redundante en distintos niveles.

Las pruebas se distribuyen de forma progresiva, comenzando por los componentes más independientes del sistema y avanzando hacia aquellos que integran un mayor número de responsabilidades.

Esta organización permite detectar los errores lo antes posible, facilita el mantenimiento de las pruebas y reduce el coste de validar la evolución del proyecto.

La estrategia distingue los siguientes niveles de testing:

- Pruebas unitarias del dominio.
- Pruebas de casos de uso.
- Pruebas del Store.
- Pruebas de hooks.
- Pruebas de componentes.
- Pruebas de integración.

Cada uno de estos niveles se desarrolla en los apartados siguientes.

Dominio ───────────► Pruebas del dominio

Aplicación ───────────► Pruebas de casos de uso

Store ───────────► Pruebas del Store

Hooks ───────────► Pruebas de hooks

UI ───────────► Pruebas de componentes

Sistema ───────────► Pruebas de integración

# 3.1 Testing por responsabilidad

La estrategia de testing del proyecto se basa en el principio de "testing por responsabilidad". Cada prueba deberá validar la responsabilidad del componente sobre el que actúa y ejecutarse en el nivel más próximo posible a dicha responsabilidad.

Antes de añadir una nueva prueba deberá identificarse qué responsabilidad ha cambiado y seleccionar el nivel de testing que mejor permita verificarla, evitando duplicidades innecesarias entre distintos niveles del sistema.

Principio operativo

Selecciona siempre el nivel de prueba más próximo a la responsabilidad que ha cambiado. Utiliza niveles superiores únicamente cuando el comportamiento dependa de la interacción entre varios componentes del sistema.

Estrategia de pruebas
│
├── 3.1 Testing por responsabilidad
│ │
│ └── Principio operativo
│
├── 3.2 Dominio
├── 3.3 Casos de uso
├── 3.4 Store
├── 3.5 Hooks
├── 3.6 Componentes
└── 3.7 Integración

# 3.2 Pruebas unitarias del dominio

Responsabilidad: verificar las reglas de negocio.

Las pruebas unitarias del dominio verifican el comportamiento de las entidades, los Value Objects, los agregados y cualquier otro componente responsable de representar las reglas de negocio del sistema.

Estas pruebas constituyen el nivel más fundamental de la estrategia de testing y deberán ejecutarse de forma completamente aislada, sin depender de la interfaz de usuario, la persistencia, el Store o cualquier otra infraestructura externa.

Su objetivo es comprobar que el dominio expresa correctamente las reglas del negocio, preserva sus invariantes y responde de forma consistente ante los distintos escenarios previstos.

Las pruebas del dominio deberán centrarse exclusivamente en el comportamiento observable de cada componente, evitando validar detalles internos de implementación que puedan cambiar sin modificar la responsabilidad del elemento probado.

Siempre que una modificación altere una regla de negocio, un Value Object, una entidad o un agregado, deberán revisarse las pruebas unitarias correspondientes antes de considerar completada la tarea.

Las pruebas del dominio deberán ser rápidas, deterministas e independientes, constituyendo la primera línea de defensa frente a regresiones funcionales.

Principio operativo

Si una modificación afecta únicamente a las reglas del dominio, la primera prueba que debe añadirse o modificarse será una prueba unitaria del dominio.

Cambio realizado
│
├── Regla de negocio
├── Value Object
├── Entidad
└── Agregado
│
▼
Prueba unitaria del dominio

### 3.3 Pruebas de casos de uso

Responsabilidad: verificar la coordinación.

Las pruebas de casos de uso verifican la coordinación de las operaciones de aplicación que permiten ejecutar una acción concreta sobre el sistema.

Su objetivo es comprobar que cada caso de uso interpreta correctamente la intención de la operación, utiliza las dependencias necesarias y provoca el resultado esperado sin asumir responsabilidades que pertenecen al dominio, al Store, a la persistencia o a la interfaz de usuario.

Estas pruebas deberán centrarse en el comportamiento observable del caso de uso, verificando aspectos como:

- la validación de las condiciones previas necesarias para ejecutar la operación;
- la utilización correcta de las dependencias proporcionadas;
- la selección de la acción o flujo correspondiente;
- la propagación adecuada de los resultados o errores;
- la coordinación entre las reglas del dominio y los mecanismos de aplicación.

Las dependencias externas al caso de uso deberán sustituirse por dobles de prueba cuando resulte necesario para mantener el aislamiento y comprobar exclusivamente su responsabilidad de coordinación.

#### No deben probar

Las pruebas de casos de uso no deberán validar directamente:

- la implementación interna de entidades, Value Objects o agregados;
- el funcionamiento real del Store;
- la persistencia en `localStorage` u otros sistemas externos;
- el comportamiento visual de los componentes;
- la integración completa entre varias capas.

Estas responsabilidades deberán comprobarse en sus niveles de testing correspondientes.

> **Principio operativo**
>
> Si una modificación afecta a la coordinación de una operación de aplicación, a la elección entre distintos flujos o al uso de sus dependencias, añade o actualiza primero una prueba del caso de uso.

### 3.4 Pruebas del Store

Responsabilidad: verificar la gestión del estado.

Las pruebas del Store verifican el comportamiento del mecanismo responsable de mantener el estado de la aplicación, aplicar las acciones y notificar sus cambios a los consumidores.

Su objetivo es comprobar que el Store conserva un estado coherente, delega correctamente las transiciones al reducer y expone una interfaz estable para consultar, modificar y observar el estado.

Estas pruebas deberán centrarse en comportamientos como:

- la obtención del estado actual;
- la aplicación de acciones mediante `dispatch`;
- la actualización del estado después de cada transición;
- la notificación a los suscriptores;
- la cancelación de suscripciones;
- la sustitución controlada del estado cuando esta capacidad exista;
- la ejecución correcta de los middlewares configurados;
- la conservación del orden esperado durante el procesamiento de una acción.

Las pruebas del Store deberán utilizar estados y acciones suficientemente simples para comprobar su contrato sin depender innecesariamente de la interfaz de usuario o de casos de uso concretos.

Cuando el Store se configure con middlewares, deberán comprobarse de forma separada las responsabilidades propias del Store y los efectos añadidos por cada middleware, evitando que una única prueba mezcle varios comportamientos difíciles de aislar.

#### No deben probar

Las pruebas del Store no deberán validar directamente:

- las reglas internas de entidades, Value Objects o agregados;
- las decisiones de coordinación propias de los casos de uso;
- la representación visual de los datos;
- el comportamiento de hooks o componentes;
- el funcionamiento real de sistemas externos de persistencia;
- el flujo completo de la aplicación.

Estas responsabilidades deberán comprobarse en sus niveles de testing correspondientes.

> **Principio operativo**
>
> Si una modificación afecta a la gestión del estado, al contrato de `dispatch`, a las suscripciones, a la sustitución del estado o al procesamiento mediante middlewares, añade o actualiza primero una prueba del Store.

### 3.5 Pruebas de hooks

Responsabilidad: verificar la adaptación entre aplicación e interfaz.

Las pruebas de hooks verifican la lógica de integración que conecta la interfaz de usuario con el estado y los casos de uso de la aplicación.

Su objetivo es comprobar que cada hook expone correctamente los datos y operaciones que necesitan los componentes, mantiene la sincronización con el estado y traduce adecuadamente las interacciones de la interfaz hacia las responsabilidades de la aplicación.

Estas pruebas deberán centrarse en comportamientos como:

- la lectura del estado actual;
- la actualización de los valores expuestos cuando cambia el Store;
- la suscripción y cancelación de suscripciones;
- la exposición de casos de uso y operaciones de aplicación;
- la transformación o selección de datos cuando forme parte de la responsabilidad del hook;
- el mantenimiento de un contrato estable para los componentes consumidores;
- la coordinación correcta con APIs de React como `useSyncExternalStore`.

Los hooks deberán probarse mediante una representación mínima de su entorno de ejecución, evitando incorporar componentes visuales complejos cuando no resulten necesarios para validar su comportamiento.

Cuando un hook actúe únicamente como adaptador entre la interfaz y la aplicación, sus pruebas deberán centrarse en ese contrato de adaptación y no repetir las pruebas internas de los casos de uso o del Store.

#### No deben probar

Las pruebas de hooks no deberán validar directamente:

- las reglas internas del dominio;
- las transiciones puras del reducer;
- la implementación interna del Store;
- la presentación visual de los componentes;
- los estilos o detalles del marcado;
- el flujo completo de interacción de la aplicación.

Estas responsabilidades deberán comprobarse en sus niveles de testing correspondientes.

> **Principio operativo**
>
> Si una modificación afecta a los datos u operaciones que un hook expone a la interfaz, a su sincronización con el estado o a su contrato con los componentes, añade o actualiza primero una prueba del hook.

### 3.6 Pruebas de componentes

Responsabilidad: verificar el comportamiento observable.

Las pruebas de componentes verifican que la interfaz de usuario representa correctamente la información recibida y responde de forma adecuada a las interacciones realizadas por el usuario.

Su objetivo es comprobar el comportamiento observable de cada componente desde la perspectiva de quien utiliza la aplicación, evitando depender de detalles internos de implementación.

Estas pruebas deberán centrarse en comportamientos como:

- la representación correcta de textos, controles y estados visibles;
- la respuesta ante acciones del usuario;
- la emisión de eventos o llamadas a las funciones recibidas mediante propiedades;
- la activación o desactivación de controles según el estado proporcionado;
- la edición, eliminación, selección o actualización de elementos cuando formen parte de la responsabilidad del componente;
- la gestión de estados condicionales, mensajes y elementos accesibles;
- la conservación del contrato definido entre el componente y sus consumidores.

Las pruebas deberán interactuar con los componentes utilizando los mismos elementos que utilizaría una persona, priorizando consultas basadas en roles, nombres accesibles, etiquetas y contenido visible.

Siempre que resulte posible, deberán evitarse consultas dependientes de clases CSS, estructuras internas del marcado o detalles que puedan cambiar sin modificar el comportamiento del componente.

Los componentes deberán probarse de forma aislada cuando su responsabilidad pueda validarse mediante propiedades y eventos controlados. Cuando el comportamiento dependa de la interacción real con hooks, estado u otros componentes, deberá utilizarse una prueba de integración.

#### No deben probar

Las pruebas de componentes no deberán validar directamente:

- las reglas internas del dominio;
- la lógica de los casos de uso;
- las transiciones del reducer;
- la implementación interna del Store;
- la persistencia real de los datos;
- el flujo completo de varias capas cuando pueda probarse de forma más específica;
- detalles puramente visuales que no afecten al comportamiento o a la accesibilidad.

Estas responsabilidades deberán comprobarse en sus niveles de testing correspondientes.

> **Principio operativo**
>
> Si una modificación afecta a lo que un componente muestra, a cómo responde a una interacción o al contrato de propiedades y eventos que expone, añade o actualiza primero una prueba del componente.

### 3.7 Pruebas de integración

Las pruebas de integración verifican la colaboración entre varios componentes del sistema cuando el comportamiento depende de la interacción entre distintas capas o responsabilidades.

Su objetivo es comprobar que los diferentes elementos del proyecto funcionan correctamente como un conjunto, manteniendo la coherencia del flujo completo sin sustituir las pruebas específicas de cada nivel.

Estas pruebas deberán centrarse en comportamientos como:

- la interacción entre casos de uso, Store, hooks y componentes;
- la propagación correcta del estado a través de varias capas;
- la coordinación entre diferentes módulos durante la ejecución de una funcionalidad;
- la integración de los mecanismos de persistencia cuando formen parte del escenario validado;
- la verificación de flujos completos representativos del comportamiento del usuario.

Las pruebas de integración deberán construirse reutilizando componentes reales siempre que ello permita validar el comportamiento conjunto del sistema. No deberán utilizarse para repetir pruebas que ya estén suficientemente cubiertas mediante pruebas unitarias o de niveles inferiores.

Su número deberá mantenerse razonablemente reducido, priorizando escenarios representativos sobre la repetición exhaustiva de casos ya comprobados en otros niveles de testing.

#### No deben probar

Las pruebas de integración no deberán sustituir:

- las pruebas unitarias del dominio;
- las pruebas de casos de uso;
- las pruebas del Store;
- las pruebas de hooks;
- las pruebas de componentes.

Cada uno de estos niveles continuará siendo responsable de validar su propio comportamiento de forma aislada.

> **Principio operativo**
>
> Si una modificación afecta a la interacción entre varias responsabilidades del sistema o introduce un nuevo flujo completo de funcionamiento, añade o actualiza una prueba de integración que valide dicho comportamiento conjunto.

# 4. Organización de los tests

Las pruebas deberán organizarse de forma que resulte sencillo identificar qué responsabilidad validan, qué parte del sistema cubren y dónde deben modificarse cuando evolucione el comportamiento correspondiente.

La estructura de los tests deberá mantener la coherencia con la organización del código fuente y con los niveles definidos por la estrategia de testing.

La ubicación de una prueba deberá facilitar la identificación de la responsabilidad que valida, ya sea situándola junto al código correspondiente o agrupándola con pruebas relacionadas en un directorio común.

La organización actual podrá evolucionar junto con la estructura del proyecto, pero deberá preservar los siguientes criterios:

- Agrupar las pruebas según la responsabilidad que validan.
- Mantener una relación clara entre el archivo de producción y sus pruebas.
- Evitar concentrar comportamientos no relacionados en un mismo archivo.
- Separar las pruebas aisladas de los escenarios de integración cuando pertenezcan a responsabilidades distintas.
- Utilizar nombres estables y descriptivos que permitan localizar rápidamente la cobertura existente.
- Evitar duplicar una misma prueba en distintos directorios o niveles.

## 4.1 Ubicación

El proyecto utiliza actualmente dos formas válidas de organizar físicamente las pruebas:

1. **Pruebas centralizadas**, agrupadas dentro de `src/tests/`.
2. **Pruebas colocadas junto al código que validan**, dentro del área funcional o técnica correspondiente.

La carpeta `src/tests/` contiene principalmente pruebas cuya ubicación centralizada facilita la consulta conjunta o que fueron creadas siguiendo etapas anteriores de la organización del proyecto.

Por ejemplo:

```text
src/
└── tests/
    ├── TaskForm.test.jsx
    ├── TaskItem.test.jsx
    ├── TaskList.test.jsx
    ├── tasksSelectors.test.ts
    ├── tasksStore.test.ts
    └── useTasks.test.jsx
```

Otros tests se sitúan junto a la responsabilidad que validan, especialmente cuando pertenecen claramente a un caso de uso, módulo o capacidad concreta.

Por ejemplo:

```text
src/
├── application/
│   ├── history/
│   │   ├── undo.ts
│   │   ├── undo.test.ts
│   │   ├── redo.ts
│   │   └── redo.test.ts
│   │
│   └── tasks/
│       └── useCases/
│           ├── toggleAll.ts
│           └── toggleAll.test.ts
```

La existencia de ambas estrategias refleja la evolución incremental del proyecto y no implica que una de ellas sea incorrecta.

Al añadir una nueva prueba, deberá elegirse la ubicación que facilite mejor la comprensión y el mantenimiento de la responsabilidad validada.

Como criterio general:

- Sitúa la prueba junto al módulo cuando exista una relación directa y exclusiva entre ambos.
- Utiliza una ubicación centralizada cuando la prueba cubra una responsabilidad transversal, una integración entre varias áreas o cuando dicha organización sea coherente con los tests relacionados existentes.
- Mantén juntos los tests que validen responsabilidades equivalentes.
- Evita trasladar pruebas existentes únicamente para imponer uniformidad, salvo que exista una reorganización justificada de la estrategia de testing.

La estructura podrá evolucionar hacia una mayor colocación de los tests junto al código o hacia directorios especializados cuando aumenten el tamaño y la complejidad del proyecto. Cualquier reorganización deberá realizarse de forma deliberada y consistente.

## 4.2 Nombres de los archivos

Los archivos de prueba deberán utilizar el nombre del componente o responsabilidad validada seguido del sufijo `.test`.

Ejemplos:

```text
Task.test.ts
Priority.test.ts
toggleAll.test.ts
tasksStore.test.ts
useTasks.test.tsx
TaskItem.test.tsx
```

El nombre deberá indicar con claridad qué elemento constituye el objeto principal de la prueba.

Cuando un archivo valide un flujo de integración completo, su nombre deberá describir el comportamiento o recorrido comprobado en lugar de un único componente.

## 4.3 Organización interna

Dentro de cada archivo, las pruebas deberán agruparse por comportamiento observable.

Se utilizarán bloques descriptivos que permitan reconocer:

- el componente o responsabilidad validada;
- el escenario ejecutado;
- el resultado esperado.

Las pruebas relacionadas deberán mantenerse próximas entre sí, evitando archivos excesivamente extensos que mezclen responsabilidades diferentes.

Cuando una responsabilidad requiera numerosos escenarios, el archivo podrá dividirse siguiendo comportamientos o capacidades claramente diferenciados.

## 4.4 Evolución de la estructura

La organización física de las pruebas podrá evolucionar cuando la estructura actual dificulte su localización o mantenimiento.

Una reorganización deberá estar justificada por una necesidad real, como:

- aumento significativo del número de pruebas;
- incorporación de nuevos tipos de testing;
- aparición de nuevos dominios;
- separación de pruebas unitarias, integración o extremo a extremo;
- necesidad de alinear mejor los tests con la estructura del código.

La reorganización no deberá modificar la responsabilidad de las pruebas ni provocar duplicidades entre niveles.

La organización física de las pruebas constituye un medio para facilitar su comprensión y mantenimiento. La responsabilidad que valida cada prueba deberá seguir siendo el criterio principal para decidir su ubicación y evolución.

# 5. Convenciones de testing

Las convenciones de testing establecen los criterios comunes que deben seguirse al escribir, modificar y mantener las pruebas automatizadas del proyecto.

Su finalidad es favorecer pruebas claras, deterministas y fáciles de comprender, evitando que su mantenimiento resulte más complejo que el propio comportamiento que validan.

## 5.1 Describir comportamiento

Las pruebas deberán describir el comportamiento observado y el escenario en el que se produce.

Se evitarán nombres genéricos como:

```text
works correctly
handles data
test component
```

Se preferirán descripciones concretas, por ejemplo:

```text
should mark all tasks as completed when pending tasks exist
should restore the previous state after undo
should disable the action when no completed tasks exist
```

Cada prueba deberá permitir comprender, sin revisar su implementación completa:

- qué escenario se está preparando;
- qué acción se ejecuta;
- qué resultado se espera.

## 5.2 Mantener una estructura clara

Las pruebas deberán seguir una secuencia comprensible basada en tres momentos:

```text
Preparar
│
▼
Actuar
│
▼
Comprobar
```

La preparación del escenario, la ejecución de la acción y las verificaciones deberán mantenerse claramente diferenciadas.

Podrá utilizarse el patrón Arrange–Act–Assert como referencia, sin necesidad de añadir comentarios cuando la propia estructura del test resulte suficientemente clara.

## 5.3 Probar comportamiento observable

Las pruebas deberán validar resultados y efectos observables, evitando depender de detalles internos de implementación.

No deberán comprobarse directamente:

- funciones privadas;
- variables internas;
- estructuras temporales;
- llamadas internas que no formen parte del contrato;
- detalles del marcado sin relevancia funcional;
- estados intermedios que puedan cambiar sin alterar el comportamiento.

Las pruebas deberán permanecer válidas cuando se refactorice la implementación sin modificar la responsabilidad del elemento probado.

## 5.4 Preservar la trazabilidad entre criterio y evidencia

Cuando una prueba declare verificar un criterio, requisito, contrato o comportamiento documentado, deberá poder establecerse una correspondencia explícita entre:

```text
criterio documentado
        ↓
condiciones que lo constituyen
        ↓
comportamiento implementado
        ↓
condiciones verificadas por la prueba
        ↓
evidencia obtenida
```

La prueba deberá comprobar las condiciones relevantes que hacen verdadero el criterio y no únicamente una consecuencia más débil compatible con él.

El nombre del test, la referencia a un identificador documental o el hecho de que la prueba termine satisfactoriamente no constituyen por sí mismos evidencia de que el criterio haya sido satisfecho.

Cuando el criterio establezca propiedades como:

- ausencia;
- exclusividad;
- equivalencia;
- invariancia;
- conservación;
- correspondencia;
- o dependencia entre condiciones;

la prueba deberá verificar también que no se introducen diferencias relevantes incompatibles con dichas propiedades.

Por ejemplo:

```text
criterio:
"puede introducirse A"

no queda demostrado por:
"A aparece en pantalla"

debe comprobarse:
que A puede ser introducida mediante
el comportamiento previsto por el criterio
```

Del mismo modo:

```text
criterio:
"E+ y E− sólo difieren en la disponibilidad de A"

no queda demostrado únicamente por:
"A aparece en E+ y no aparece en E−"

debe comprobarse además:
que no se introduce otra diferencia relevante
entre ambas condiciones
```

> **RT-DV-001 — Trazabilidad entre criterio y evidencia**
>
> Cuando una prueba afirme satisfacer un criterio documentado, deberá verificar las condiciones que constituyen dicho criterio con suficiente fuerza para que el éxito de la prueba pueda utilizarse legítimamente como evidencia de su satisfacción.

## 5.5 Mantener el aislamiento

Cada prueba deberá poder ejecutarse de forma independiente y producir siempre el mismo resultado.

No deberá depender de:

- el orden de ejecución de otros tests;
- estado compartido no restablecido;
- datos dejados por pruebas anteriores;
- valores temporales no controlados;
- recursos externos reales cuando puedan sustituirse por dobles de prueba.

Cuando una prueba modifique estado global, almacenamiento, temporizadores, mocks o suscripciones, deberá restaurarlos al finalizar.

## 5.6 Utilizar datos mínimos y expresivos

Los escenarios deberán construirse utilizando únicamente los datos necesarios para demostrar el comportamiento comprobado.

Se evitarán configuraciones extensas que introduzcan información irrelevante o dificulten identificar qué condición provoca el resultado.

Los datos de prueba deberán ser fáciles de reconocer y expresar la intención del escenario.

Cuando varias pruebas compartan una preparación compleja, podrá extraerse una función auxiliar siempre que esta no oculte las condiciones relevantes del test.

## 5.7 Limitar cada prueba a un comportamiento principal

Cada prueba deberá perseguir un objetivo claramente identificable.

Podrá contener varias comprobaciones cuando todas ellas describan un mismo resultado observable, pero deberá evitar validar comportamientos independientes dentro de un único test.

Cuando un fallo dificulte determinar qué responsabilidad se ha roto, la prueba deberá dividirse en escenarios más específicos.

## 5.8 Evitar duplicidades entre niveles

Un comportamiento ya validado en un nivel inferior no deberá repetirse exhaustivamente en niveles superiores.

Las pruebas de niveles superiores deberán centrarse en la colaboración entre responsabilidades, no en volver a comprobar todas las reglas internas de cada componente.

Antes de añadir un test, deberá revisarse si el comportamiento ya está cubierto y si el nuevo escenario aporta una protección diferente o necesaria.

## 5.9 Utilizar dobles de prueba con criterio

Las pruebas deberán describir el comportamiento observado y utilizarse únicamente cuando ayuden a aislar una responsabilidad o controlar una dependencia.

No deberán emplearse para reproducir internamente toda la implementación del sistema ni para comprobar interacciones irrelevantes.

Siempre que resulte posible, deberán preferirse valores y colaboradores reales simples frente a configuraciones extensas de mocks.

Las interacciones deberán comprobarse solo cuando formen parte del contrato o de la responsabilidad del elemento probado.

## 5.10 Priorizar la perspectiva del usuario en la interfaz

Las pruebas de componentes deberán interactuar con la interfaz utilizando elementos accesibles y comportamientos visibles.

Se priorizarán consultas basadas en:

- roles;
- nombres accesibles;
- etiquetas;
- textos visibles;
- estados percibidos por el usuario.

Se evitarán selectores basados únicamente en clases CSS, posiciones dentro del DOM o atributos creados exclusivamente para facilitar el test, salvo que no exista una alternativa razonable.

## 5.11 Mantener los tests junto con el código

Cuando cambie un comportamiento, deberán revisarse inmediatamente sus pruebas.

No deberán conservarse tests que describan requisitos obsoletos ni modificarse expectativas únicamente para hacer que la suite vuelva a pasar sin comprobar antes si el nuevo resultado es correcto.

Los tests forman parte del diseño y de la documentación ejecutable del sistema. Su contenido deberá mantenerse alineado con el comportamiento real del proyecto.

> **Principio general**
>
> Una buena prueba debe fallar cuando se rompe el comportamiento que protege y seguir pasando cuando únicamente cambia la implementación interna.

# 6. Cuándo añadir o modificar pruebas

Las pruebas deberán revisarse siempre que una modificación altere el comportamiento observable, las reglas del dominio, los contratos entre componentes o la forma en que varias responsabilidades colaboran entre sí.

La decisión de añadir, modificar o mantener las pruebas existentes deberá basarse en el comportamiento afectado y en el nivel de testing más próximo a la responsabilidad que ha cambiado.

## 6.1 Añadir nuevas pruebas

Deberá añadirse una nueva prueba cuando:

- se incorpore un comportamiento que todavía no esté cubierto;
- se introduzca una nueva regla de negocio o invariante;
- se añada un caso de uso o un flujo funcional;
- aparezca un nuevo escenario relevante, incluidos casos límite y condiciones de error;
- se incorpore una nueva interacción entre varias responsabilidades;
- se corrija un error que no estaba detectado por la suite existente;
- una modificación revele una situación que pueda producir regresiones en el futuro.

Cuando se corrija un defecto, deberá añadirse siempre que resulte posible una prueba que falle antes de la corrección y pase después de aplicarla.

Esta prueba deberá proteger el comportamiento corregido para evitar que el mismo problema vuelva a introducirse posteriormente.

## 6.2 Modificar pruebas existentes

Deberán modificarse las pruebas existentes cuando cambie legítimamente el comportamiento que describen.

Antes de actualizar una expectativa, deberá comprobarse que el nuevo resultado responde a una decisión válida del producto o del diseño y no a un error introducido durante la implementación.

No deberán modificarse pruebas únicamente para conseguir que la suite vuelva a pasar.

Cuando cambie un contrato, deberán revisarse todas las pruebas relacionadas con:

- sus consumidores;
- sus implementaciones;
- sus adaptadores;
- los flujos que dependan de él;
- los escenarios de integración afectados.

## 6.3 No modificar pruebas ante una refactorización interna

Una refactorización que preserve el comportamiento observable no debería requerir cambios sustanciales en las pruebas.

Si una reorganización interna obliga a modificar numerosos tests sin que haya cambiado el comportamiento, deberá revisarse si dichas pruebas están excesivamente acopladas a la implementación.

Podrán actualizarse configuraciones, datos auxiliares o dobles de prueba cuando resulte necesario, pero las expectativas principales deberán continuar describiendo el mismo comportamiento.

## 6.4 Revisar las pruebas ante cambios documentales o arquitectónicos

Un cambio exclusivamente documental no requerirá normalmente nuevas pruebas automatizadas.

Sin embargo, cuando la documentación refleje una nueva decisión funcional o arquitectónica que vaya a materializarse en el sistema, deberán identificarse las pruebas necesarias antes o durante su implementación.

Cuando cambien las responsabilidades entre capas, módulos o componentes, deberá revisarse también la distribución de las pruebas para garantizar que cada comportamiento continúa validándose en el nivel adecuado.

## 6.5 Evitar pruebas innecesarias

No deberá añadirse una prueba nueva cuando:

- el comportamiento ya esté suficientemente protegido en el nivel adecuado;
- el nuevo test repita exactamente una comprobación existente;
- únicamente valide detalles internos sin relevancia funcional;
- compruebe código trivial que no contiene decisiones ni comportamiento significativo;
- aumente el mantenimiento de la suite sin aportar protección adicional.

La ausencia de una prueba nueva deberá ser una decisión consciente basada en la cobertura existente, no una omisión accidental.

## 6.6 Revisar el impacto completo

Antes de considerar finalizada una modificación, deberá revisarse si afecta a pruebas de otros niveles.

Por ejemplo:

```text
Cambio en el dominio
│
├── Revisar pruebas unitarias del dominio
├── Revisar casos de uso afectados
└── Revisar integraciones que dependan de la regla

Cambio en un contrato
│
├── Revisar implementaciones
├── Revisar consumidores
├── Revisar dobles de prueba
└── Revisar escenarios de integración

Cambio en la interfaz
│
├── Revisar pruebas del componente
├── Revisar contrato del hook
└── Revisar flujos de integración afectados
```

> **Principio operativo**
>
> Añade o modifica una prueba cuando cambie el comportamiento que debe proteger. No cambies una prueba únicamente porque haya cambiado la implementación.

# 7. Ejecución y validación

La ejecución de las pruebas constituye una parte esencial del proceso de validación del proyecto y deberá realizarse de forma sistemática antes de considerar finalizada cualquier modificación relevante.

La estrategia de testing tiene como objetivo proporcionar confianza en la evolución del sistema. Por ello, la ejecución de las pruebas deberá entenderse como una actividad continua durante el desarrollo y no únicamente como una comprobación final.

## 7.1 Ejecución de la suite

Las pruebas deberán ejecutarse utilizando las herramientas definidas por el proyecto y siguiendo el proceso descrito en `DEVELOPMENT_GUIDE.md`.

La suite deberá ejecutarse siempre que una modificación pueda afectar al comportamiento del sistema, verificando que no se introducen regresiones en funcionalidades previamente implementadas.

Cuando resulte posible, se recomienda ejecutar primero las pruebas directamente relacionadas con la modificación realizada y, posteriormente, la suite completa antes de integrar el cambio.

## 7.2 Interpretación de los resultados

El resultado de la ejecución deberá analizarse antes de modificar el código o las propias pruebas.

Una prueba que falla no implica necesariamente que la implementación sea incorrecta, del mismo modo que una prueba que pasa no garantiza por sí sola la ausencia de errores.

Ante un fallo deberán identificarse, al menos, las siguientes posibilidades:

- la implementación contiene un defecto;
- la prueba describe un comportamiento que ha cambiado deliberadamente;
- la prueba presenta un error en su diseño o en sus expectativas;
- la documentación ya no refleja el comportamiento actual del sistema.

La causa del fallo deberá determinarse antes de modificar cualquiera de estos elementos.

## 7.3 Validación completa

Una modificación podrá considerarse correctamente validada cuando:

- las pruebas correspondientes al comportamiento modificado se hayan ejecutado correctamente;
- no existan regresiones conocidas en el resto de la suite;
- la documentación afectada permanezca alineada con el comportamiento del sistema;
- el cambio mantenga la coherencia con la estrategia de testing definida para el proyecto.

## 7.4 Validación continua

La validación deberá realizarse durante todo el ciclo de desarrollo y no únicamente al finalizar una tarea.

La ejecución frecuente de las pruebas permite detectar errores de forma temprana, simplifica su localización y reduce el impacto de las regresiones durante la evolución del proyecto.

> **Principio operativo**
>
> Ejecuta las pruebas con la frecuencia necesaria para mantener la confianza en el comportamiento del sistema. Antes de modificar una prueba que falla, determina si el cambio corresponde a una regresión, a una evolución legítima del comportamiento o a un problema en la propia prueba.

Proceso de validación continua

Modificar
│
▼
Validar inmediatamente
│
▼
Continuar desarrollando
│
▼
Validar de nuevo
│
▼
Suite completa

La validación no es el último paso del desarrollo; es una actividad que acompaña continuamente la evolución del proyecto.

# 8. Cobertura

La cobertura de pruebas constituye un indicador del alcance de la estrategia de testing, pero no representa por sí misma una medida de la calidad del software.

Su finalidad consiste en ayudar a identificar áreas del sistema que todavía no disponen de una validación suficiente, orientando la evolución de la suite de pruebas sin sustituir el criterio técnico.

Un porcentaje elevado de cobertura no garantiza la ausencia de errores, del mismo modo que una cobertura inferior no implica necesariamente una baja calidad del proyecto.

La prioridad será siempre proteger los comportamientos, responsabilidades y flujos más relevantes del sistema antes que incrementar artificialmente los porcentajes de cobertura.

## 8.1 Cobertura basada en responsabilidades

La cobertura deberá evaluarse principalmente desde la perspectiva de las responsabilidades del sistema y no únicamente mediante métricas cuantitativas.

Antes de aumentar la cobertura de una parte del proyecto, deberá comprobarse si las responsabilidades que desempeña ya se encuentran suficientemente protegidas mediante los niveles de testing adecuados.

Las áreas con mayor impacto funcional, mayor complejidad o mayor probabilidad de evolución deberán recibir una atención prioritaria.

## 8.2 Interpretación de la cobertura

La información proporcionada por las herramientas de cobertura deberá utilizarse como apoyo para identificar posibles carencias de la suite de pruebas.

No deberá emplearse como criterio exclusivo para decidir la calidad de una modificación ni para justificar la incorporación de pruebas que no aporten una protección real al comportamiento del sistema.

Cuando una zona presente una cobertura reducida, deberá analizarse si:

- existe realmente una responsabilidad sin proteger;
- el comportamiento ya está validado desde otro nivel de testing;
- la cobertura corresponde a código trivial o sin decisiones relevantes;
- resulta conveniente incorporar nuevas pruebas.

## 8.3 Evolución de la cobertura

La cobertura deberá aumentar de forma natural conforme evolucione el proyecto.

No se establecerán objetivos numéricos independientes de las necesidades reales del sistema.

Cada nueva funcionalidad, responsabilidad o comportamiento relevante deberá contribuir a mejorar la cobertura allí donde aporte un incremento efectivo de la confianza en el funcionamiento del proyecto.

> **Principio operativo**

> Utiliza la cobertura para descubrir qué comportamientos todavía no están suficientemente protegidos. No escribas pruebas únicamente para aumentar un porcentaje.

Cobertura
│
▼
Identificar responsabilidades
insuficientemente protegidas
│
▼
Incorporar pruebas
cuando aporten valor
│
▼
Mayor confianza
│
▼
Evolución segura

La cobertura no mide cuánto código está probado, sino cuánto conocimiento del sistema permanece protegido frente a regresiones.

# 9. Evolución de la estrategia

La estrategia de testing deberá evolucionar junto con el proyecto para continuar proporcionando un nivel adecuado de confianza durante su desarrollo.

La incorporación de nuevas funcionalidades, responsabilidades, tecnologías o formas de colaboración podrá requerir la adaptación de la estrategia de pruebas, siempre que dicha evolución preserve los principios fundamentales definidos en este documento.

La evolución de la estrategia deberá responder a necesidades reales del proyecto y no a la adopción automática de nuevas herramientas, metodologías o tendencias.

## 9.1 Cuándo revisar la estrategia

La estrategia de testing deberá revisarse cuando se produzcan cambios significativos, como:

- la incorporación de nuevos niveles de responsabilidad;
- modificaciones relevantes en la arquitectura;
- la aparición de nuevos tipos de pruebas;
- cambios importantes en el proceso de desarrollo;
- la incorporación de nuevos mecanismos de automatización o colaboración.

Toda revisión deberá analizar el impacto sobre la organización de las pruebas, su mantenimiento y la coherencia con el resto de la documentación.

## 9.2 Conservación de los principios

La evolución de la estrategia no deberá alterar los principios fundamentales establecidos por el proyecto.

En particular, deberán mantenerse:

- el testing por responsabilidades;
- la separación entre niveles de prueba;
- la prioridad del comportamiento frente a la implementación;
- la utilización de la cobertura como indicador y no como objetivo;
- la validación continua durante el desarrollo.

Las nuevas prácticas deberán integrarse respetando estos principios, garantizando la coherencia con la arquitectura y con el proceso general de desarrollo.

## 9.3 Mejora continua

La experiencia obtenida durante el desarrollo del proyecto deberá utilizarse para perfeccionar progresivamente la estrategia de testing.

Las dificultades encontradas, las regresiones detectadas y las lecciones aprendidas podrán dar lugar a la incorporación de nuevas recomendaciones, siempre que contribuyan a mejorar la calidad, la claridad y el mantenimiento de la suite de pruebas.

Toda modificación de la estrategia deberá quedar reflejada en la documentación correspondiente para preservar la coherencia del proyecto y facilitar su comprensión por futuros colaboradores y agentes de desarrollo.

> **Principio operativo**

> La estrategia de testing debe evolucionar junto con el proyecto, pero sus principios fundamentales deberán permanecer estables mientras continúen representando correctamente la forma de desarrollar y validar el sistema.

# 10. Relación con el resto de la documentación

Este documento forma parte del sistema documental del proyecto y define la estrategia de testing que guía el diseño, la organización y el mantenimiento de las pruebas automatizadas.

Su contenido complementa al resto de la documentación, manteniendo una separación clara de responsabilidades entre los distintos documentos.

En particular:

| Documento              | Responsabilidad principal                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `INTRODUCTION.md`      | Guía de navegación y organización general de la documentación del proyecto.                                           |
| `GLOSSARY.md`          | Definición de la terminología común utilizada en toda la documentación del proyecto.                                  |
| `VISION.md`            | Propósito del proyecto, principios fundamentales y dirección estratégica a largo plazo.                               |
| `PRODUCT.md`           | Definición funcional del producto, sus conceptos fundamentales y las capacidades que deben proteger las pruebas.      |
| `ARCHITECTURE.md`      | Organización técnica del sistema y responsabilidades sobre las que se construye la estrategia de testing.             |
| `DEVELOPMENT_GUIDE.md` | Proceso de desarrollo, flujo de trabajo y criterios generales de validación.                                          |
| `TESTING.md`           | Estrategia de pruebas, organización de la suite y criterios para su evolución.                                        |
| `AGENTS.md`            | Instrucciones operativas para los agentes de desarrollo durante su colaboración con el proyecto.                      |
| `PROJECT_STATUS.md`    | Estado actual del proyecto y actuaciones o puntos de reanudación que hayan quedado justificadamente establecidos.     |
| `PROJECT_JOURNAL.md`   | Registro histórico del desarrollo y de las decisiones adoptadas.                                                      |
| `ROADMAP.md`           | Líneas estratégicas de evolución cuya vigencia haya quedado justificada respecto del estado consolidado del proyecto. |
| `DESIGN_JOURNAL.md`    | Ideas, hipótesis y propuestas de diseño pendientes de evaluación o incorporación.                                     |

La estrategia de testing deberá mantenerse alineada con el producto, la arquitectura y el proceso de desarrollo, garantizando que las pruebas evolucionen junto con el sistema y continúen validando las responsabilidades que les corresponden.

Ningún documento sustituye a otro. Cada uno aborda una responsabilidad específica y todos contribuyen conjuntamente a preservar la calidad, la coherencia y la evolución del sistema.
