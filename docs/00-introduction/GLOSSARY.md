1. Objetivo

2. Cómo utilizar este glosario

3. Principios terminológicos

4. Términos

   4.1 Proyecto
   4.1.1 Proyecto
   4.1.2 Producto
   4.1.3 Aplicación
   4.1.4 Sistema

   4.2 Arquitectura
   4.2.1 Arquitectura
   4.2.2 Diseño
   4.2.3 Organización
   4.2.4 Estructura

   4.3 Desarrollo
   4.3.1 Desarrollo
   4.3.2 Implementación
   4.3.3 Evolución
   4.3.4 Mantenimiento

   4.4 Testing
   4.4.1 Testing
   4.4.2 Prueba
   4.4.3 Test
   4.4.4 Validación
   4.4.5 Verificación

   4.5 Documentación
   4.5.1 Documento
   4.5.2 Documentación
   4.5.3 Sistema documental
   4.5.4 Documentación técnica

   4.6 Estado
   4.6.1 Estado
   4.6.2 Situación
   4.6.3 Progreso

   4.7 Ideas futuras
   4.7.1 Idea
   4.7.2 Hipótesis
   4.7.3 Propuesta
   4.7.4 Posibilidad
   4.7.5 Línea estratégica

5. Evolución del glosario

# 1. Objetivo

Este documento define el vocabulario de referencia del proyecto.

Su finalidad es establecer un significado preciso y estable para los principales términos utilizados en la documentación, el desarrollo del software y la colaboración entre desarrolladores humanos y agentes de desarrollo.

Cada término posee una definición única dentro del proyecto y debe utilizarse con el mismo significado en todos los documentos, evitando ambigüedades, interpretaciones inconsistentes y el uso de sinónimos cuando estos puedan alterar el sentido del concepto.

Este glosario no sustituye a la documentación especializada ni desarrolla en profundidad los distintos aspectos del proyecto. Su función consiste en proporcionar un lenguaje común que facilite la comprensión del sistema y preserve la coherencia terminológica durante su evolución.

En conjunto, `GLOSSARY.md` actúa como referencia del lenguaje del proyecto y contribuye a mantener un vocabulario consistente en toda la documentación.

# 2. Cómo utilizar este glosario

Este glosario constituye la referencia terminológica del proyecto y debe utilizarse como criterio común para la redacción de la documentación, el desarrollo del software y la colaboración entre desarrolladores humanos y agentes de desarrollo.

Cada término se presenta mediante una estructura homogénea que facilita su consulta y permite comprender tanto su significado como el contexto adecuado para su utilización.

Cada definición debe ser autosuficiente y proporcionar el contexto necesario para comprender el significado del término sin depender de la consulta de otros documentos. Las referencias incluidas en los ejemplos tienen un carácter ilustrativo y no forman parte de la definición del término.

De forma general, cada entrada incluye:

Definición, que establece el significado del término dentro del proyecto.
Ejemplo, que muestra un uso representativo del término en un contexto real.
No utilizar como sinónimo de, que identifica otros términos relacionados cuyo significado es diferente y ayuda a evitar ambigüedades.

Cuando un concepto evolucione o adquiera un significado distinto, deberá revisarse la entrada correspondiente de este glosario para mantener la coherencia terminológica del conjunto de la documentación.

Este documento actúa como referencia común para todo el sistema documental. En caso de duda sobre el significado de un término, prevalecerá siempre la definición establecida en este glosario.

# 3. Principios terminológicos

El lenguaje utilizado en la documentación constituye una parte esencial del proyecto y debe mantenerse coherente en todos los documentos, el código fuente y las comunicaciones relacionadas con su desarrollo.

Para preservar esa coherencia, el vocabulario del proyecto se rige por los siguientes principios:

Cada concepto debe tener un término preferente. Un mismo concepto debe designarse siempre mediante el mismo término cuando se utilice con el mismo significado.
Cada término debe mantener un significado estable. Un término no debe utilizarse para representar conceptos diferentes según el contexto.
Los términos relacionados no deben emplearse como sinónimos cuando representen conceptos distintos. Aunque puedan existir relaciones entre ellos, cada término debe conservar un significado propio dentro del proyecto.
La terminología debe evolucionar junto con el proyecto. Cuando un concepto cambie de significado o aparezcan nuevos conceptos relevantes, este glosario deberá actualizarse para mantener la coherencia del lenguaje.
En caso de discrepancia, prevalecerá la definición recogida en este glosario. Los demás documentos deberán utilizar los términos conforme al significado establecido aquí.

Estos principios permiten mantener un lenguaje común para todo el proyecto, facilitando la comunicación entre desarrolladores humanos y agentes de desarrollo, reduciendo ambigüedades y preservando la coherencia del sistema documental a lo largo de su evolución.

**Principio operativo**

Cada concepto del proyecto debe asociarse a un término preferente, y cada término debe conservar un significado único y estable en toda la documentación.

# 4. Términos

Los términos se presentan agrupados por afinidad conceptual para facilitar su consulta y mantener una visión coherente del lenguaje utilizado en el proyecto. Cada término dispone de una definición única que constituye la referencia terminológica para el resto de la documentación.

## 4.1 Proyecto

### 4.1.1 Proyecto

        Definición

        Conjunto completo del trabajo desarrollado, incluyendo el producto, el código fuente, la arquitectura, la documentación, el proceso de desarrollo, las pruebas y el repositorio.

        Ejemplo

        La documentación forma parte del proyecto.

        No utilizar como sinónimo de

        Producto
        Aplicación

### 4.1.2 Producto

        Definición

        Software que el proyecto pretende construir y cuya definición funcional se recoge en `PRODUCT.md`.

        Ejemplo

        El producto permite gestionar conocimiento.

        No utilizar como sinónimo de

        Proyecto
        Aplicación

### 4.1.3 Aplicación

        Definición

        Programa ejecutable utilizado por el usuario como materialización del producto.

        Ejemplo

        La aplicación conserva el estado mediante localStorage.

        No utilizar como sinónimo de

        Proyecto
        Producto

### 4.1.4 Sistema

        Definición

        Conjunto organizado de elementos que colaboran para cumplir una finalidad determinada.

        Ejemplo

        El sistema documental organiza la documentación del proyecto.

        No utilizar como sinónimo de

        Proyecto

        Producto

## 4.2 Arquitectura

### 4.2.1 Arquitectura

        Definición

        Conjunto de decisiones fundamentales que organizan el sistema y definen las responsabilidades y relaciones entre sus componentes.

        Ejemplo

        La arquitectura organiza el sistema en capas.

        No utilizar como sinónimo de

        Diseño
        Estructura

### 4.2.2 Diseño

        Definición

        Proceso o resultado de definir una solución concreta dentro de la arquitectura existente.

        Ejemplo

        El diseño de la API simplifica el acceso al dominio.

        No utilizar como sinónimo de

        Arquitectura

### 4.2.3 Organización

        Definición

        Distribución de los elementos de un conjunto según un criterio determinado.

        Ejemplo

        La organización de la documentación evita duplicidades.

        No utilizar como sinónimo de

        Arquitectura

### 4.2.4 Estructura

        Definición

        Disposición física o lógica de los elementos que forman un conjunto.

        Ejemplo

        La estructura de directorios sigue una jerarquía por responsabilidades.

        No utilizar como sinónimo de

        Arquitectura
        Organización

## 4.3 Desarrollo

### 4.3.1 Desarrollo

        Definición

        Proceso global de construcción, mejora y consolidación del proyecto.

        Ejemplo

        El desarrollo del proyecto es incremental.

        No utilizar como sinónimo de

        Implementación

### 4.3.2 Implementación

        Definición

        Materialización concreta de una funcionalidad o de una decisión de diseño en el código.

        Ejemplo

        Se ha completado la implementación de Undo/Redo.

        No utilizar como sinónimo de

        Desarrollo
        Evolución

### 4.3.3 Evolución

        Definición

        Transformación progresiva del proyecto a lo largo del tiempo.

        Ejemplo

        La evolución de la arquitectura ha reducido el acoplamiento.

        No utilizar como sinónimo de

        Implementación
        Progreso

### 4.3.4 Mantenimiento

        Definición

        Conjunto de actividades destinadas a conservar y mejorar la calidad, coherencia y utilidad del proyecto una vez establecida su base funcional.

        Ejemplo

        El mantenimiento incluye la actualización de la documentación.

        No utilizar como sinónimo de

        Evolución

## 4.4 Testing

### 4.4.1 Testing

        Definición

        Estrategia mediante la que el proyecto protege el comportamiento del sistema mediante pruebas automatizadas.

        Ejemplo

        La estrategia de testing se documenta en TESTING.md.

        No utilizar como sinónimo de

        Validación

### 4.4.2 Prueba

        Definición

        Comprobación destinada a confirmar un comportamiento del sistema.

        Ejemplo

        Las pruebas de integración verifican la interacción entre componentes.

        No utilizar como sinónimo de

        Test (cuando se haga referencia a un caso implementado)

### 4.4.3 Test

        Definición

        Prueba automatizada concreta implementada en código.

        Ejemplo

        Se han añadido dos tests para toggleAll.

        No utilizar como sinónimo de

        Testing

### 4.4.4 Validación

        Definición

        Proceso de comprobar que un cambio cumple los criterios establecidos para ser aceptado.

        Ejemplo

        Todo cambio debe superar el proceso de validación.

        No utilizar como sinónimo de

        Testing

### 4.4.5 Verificación

        Definición

        Comprobación puntual de una condición específica dentro del proceso de validación.

        Ejemplo

        Es necesario verificar que el selector devuelve únicamente tareas activas.

        No utilizar como sinónimo de

        Validación

## 4.5 Documentación

### 4.5.1 Documento

        Definición

        Unidad individual de información con una responsabilidad específica dentro del sistema documental.

        Ejemplo

        `ARCHITECTURE.md` es el documento responsable de la arquitectura.

        No utilizar como sinónimo de

        Documentación

### 4.5.2 Documentación

        Definición

        Conjunto de documentos que describen el proyecto desde distintas perspectivas.

        Ejemplo

        La documentación evoluciona junto con el software.

        No utilizar como sinónimo de

        Documento

### 4.5.3 Sistema documental

        Definición

        Conjunto organizado de documentos especializados que colaboran entre sí mediante responsabilidades claramente definidas.

        Ejemplo

        `INTRODUCTION.md` describe el sistema documental del proyecto.

        No utilizar como sinónimo de

        Documentación

### 4.5.4 Documentación técnica

         Definición

        Parte de la documentación dedicada a describir los aspectos técnicos del proyecto.

        Ejemplo

        ARCHITECTURE.md forma parte de la documentación técnica.

        No utilizar como sinónimo de

        Documentación

## 4.6 Estado

### 4.6.1 Estado

        Definición

        Condición actual del proyecto en un momento determinado.

        Ejemplo

        El estado del proyecto se recoge en PROJECT_STATUS.md.

        No utilizar como sinónimo de

        Evolución
        Progreso

### 4.6.2 Situación

        Definición

        Contexto o circunstancias en las que se encuentra el proyecto.

        Ejemplo

        La situación tecnológica favorece la incorporación de nuevas herramientas.

        No utilizar como sinónimo de

        Estado

### 4.6.3 Progreso

        Definición

        Grado de avance alcanzado respecto a un objetivo concreto.

        Ejemplo

        El progreso de la migración a TypeScript ha sido continuo.

        No utilizar como sinónimo de

        Evolución

## 4.7 Ideas futuras

### 4.7.1 Idea

        Definición

        Pensamiento inicial sobre una posible mejora o evolución del proyecto.

        Ejemplo

        Ha surgido una idea para reorganizar la biblioteca.

        No utilizar como sinónimo de

        Línea estratégica

### 4.7.2 Hipótesis

        Definición

        Idea razonada cuya utilidad todavía debe comprobarse.

        Ejemplo

        Existe la hipótesis de generalizar el concepto de Autor.

        No utilizar como sinónimo de

        Propuesta

### 4.7.3 Propuesta

        Definición

        Solución concreta planteada para su evaluación antes de decidir su adopción.

        Ejemplo

        Se presenta una propuesta para reorganizar el modelo de publicación.

        No utilizar como sinónimo de

        Línea estratégica

### 4.7.4 Posibilidad

        Definición

        Opción que podría considerarse en el futuro sin que exista todavía una decisión o una propuesta formal.

        Ejemplo

        La posibilidad de incorporar un backend remoto continúa abierta.

        No utilizar como sinónimo de

        Propuesta

### 4.7.5 Línea estratégica

        Definición

        Dirección de evolución aprobada para orientar el desarrollo futuro del proyecto.

        Ejemplo

        La colaboración mediante agentes constituye una línea estratégica del proyecto.

        No utilizar como sinónimo de

        Idea
        Hipótesis

5. Evolución del glosario

El glosario evoluciona junto con el proyecto y debe mantenerse alineado con el lenguaje utilizado en la documentación.

Un término deberá incorporarse al glosario cuando reúna las siguientes condiciones:

represente un concepto relevante para el proyecto;
aparezca de forma transversal en varios documentos;
exista riesgo de interpretaciones ambiguas o de utilizar distintos términos para referirse al mismo concepto.

Cuando cambie el significado de un término existente o aparezcan nuevos conceptos que cumplan estos criterios, deberá actualizarse la entrada correspondiente para preservar la coherencia terminológica del proyecto.
