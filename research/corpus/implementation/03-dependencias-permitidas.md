# Dependencias permitidas

# Propósito

Este documento establece las condiciones bajo las cuales una competencia realizativa puede requerir legítimamente significado arquitectónico previamente disponible para ejercer su responsabilidad.

Su finalidad consiste en determinar los criterios que regulan la disponibilidad legítima del significado arquitectónico durante la cooperación entre competencias.

El documento no define dependencias entre componentes, módulos o tecnologías.

Únicamente determina las condiciones arquitectónicas que autorizan o restringen la utilización de significado arquitectónico previamente disponible.

Las dependencias permitidas no constituyen el fenómeno arquitectónico primario, sino la expresión estructural de las condiciones que regulan la disponibilidad legítima del significado arquitectónico.

---

# Naturaleza de las dependencias arquitectónicas

Las dependencias arquitectónicas no constituyen relaciones estructurales autónomas entre competencias.

Toda dependencia arquitectónica deriva de la necesidad de disponer legítimamente de significado arquitectónico previamente constituido para el ejercicio de una competencia.

En consecuencia, las dependencias no describen vínculos permanentes entre realizadores.

Describen exclusivamente las condiciones bajo las cuales una competencia puede ejercer legítimamente su responsabilidad utilizando significado arquitectónico disponible.

Las restricciones arquitectónicas constituyen la expresión complementaria del mismo principio, determinando qué significado no podrá ponerse legítimamente a disposición de una competencia.

---

# Alcance

Este documento pertenece exclusivamente al nivel de implementación del núcleo.

Su objeto consiste en definir las condiciones que regulan la disponibilidad legítima del significado arquitectónico entre competencias realizativas.

En consecuencia, este documento no establece:

- dependencias entre módulos;
- dependencias entre paquetes;
- dependencias entre clases;
- dependencias entre tecnologías;
- dependencias de despliegue;
- dependencias físicas;
- dependencias de implementación.

Todos estos aspectos pertenecen a decisiones particulares de realización y quedan fuera del alcance del presente documento.

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

Las dependencias permitidas determinan las condiciones bajo las cuales las competencias realizativas pueden ejercer legítimamente su responsabilidad utilizando significado arquitectónico previamente disponible.

Su definición precede al establecimiento de las fronteras del dominio y de las restricciones definitivas de la implementación.

---

# Objetivo

Determinar las condiciones arquitectónicas que regulan la disponibilidad legítima del significado arquitectónico requerido por el ejercicio de las competencias realizativas.

A partir de dichas condiciones podrán derivarse posteriormente las dependencias operacionales, las restricciones de implementación y las relaciones permitidas entre los distintos mecanismos concretos de realización.

El documento no describe relaciones entre realizadores.

Describe exclusivamente las condiciones que legitiman la utilización de significado arquitectónico previamente disponible durante el ejercicio de una competencia.

# Principio de derivación

Las dependencias arquitectónicas no constituyen relaciones autónomas entre competencias realizativas.

Toda dependencia legítima deriva exclusivamente de la necesidad de disponer de significado arquitectónico previamente disponible para el ejercicio de una competencia.

En consecuencia, las dependencias arquitectónicas no regulan relaciones entre realizadores.

Regulan las condiciones bajo las cuales una competencia puede utilizar legítimamente significado arquitectónico producido o puesto a disposición durante la cooperación.

---

# Disponibilidad legítima del significado arquitectónico

Una competencia sólo podrá ejercer legítimamente su responsabilidad cuando disponga del significado arquitectónico requerido para realizar el acto correspondiente.

La disponibilidad del significado constituye una precondición semántica del ejercicio de la competencia.

Dicha disponibilidad deberá respetar íntegramente las garantías establecidas por el contrato fundamental de cooperación arquitectónica.

Toda utilización de significado arquitectónico presupone, por tanto:

- la legitimidad del significado disponible;
- la integridad del significado puesto a disposición;
- la conservación de dicho significado durante la cooperación.

---

# Precondiciones semánticas

Las precondiciones semánticas determinan el significado arquitectónico que una competencia puede requerir legítimamente para ejercer una responsabilidad concreta.

Estas precondiciones no pertenecen a la competencia considerada de forma aislada.

Pertenecen al acto realizativo concreto que dicha competencia pretende ejercer.

En consecuencia, una misma competencia podrá:

- ejercer determinadas responsabilidades sin requerir significado previamente disponible;
- requerir significado arquitectónico previamente disponible para otras responsabilidades.

La dependencia arquitectónica no constituye una propiedad permanente del realizador.

Constituye una condición particular del ejercicio de una responsabilidad determinada.

---

# Dependencias permitidas

Toda dependencia arquitectónica será legítima únicamente cuando el significado requerido:

- resulte arquitectónicamente necesario para el ejercicio de la competencia;
- haya sido legítimamente constituido;
- se encuentre disponible conforme al contrato fundamental de cooperación;
- pueda utilizarse sin alterar el significado arquitectónico previamente establecido.

Las dependencias permitidas derivan exclusivamente de estas condiciones.

No constituyen relaciones independientes entre competencias.

---

# Restricciones arquitectónicas

Las restricciones arquitectónicas representan la expresión complementaria del mismo principio.

Su función consiste en determinar qué significado arquitectónico no podrá ponerse legítimamente a disposición de una competencia durante el ejercicio de una responsabilidad determinada.

En consecuencia, las dependencias permitidas y las restricciones arquitectónicas no describen fenómenos distintos.

Ambas constituyen manifestaciones complementarias de las condiciones que regulan la disponibilidad legítima del significado arquitectónico.

# Independencia respecto de la implementación

Las condiciones definidas en este documento son independientes de cualquier realización técnica concreta.

La legitimidad de la disponibilidad del significado arquitectónico deberá preservarse con independencia de:

- la organización del código;
- los mecanismos de comunicación;
- la estructura de módulos o paquetes;
- las tecnologías empleadas;
- los mecanismos de persistencia;
- la distribución física de la implementación.

Toda realización válida deberá respetar las condiciones arquitectónicas aquí establecidas.

---

# Relación con las competencias y los contratos

Las competencias realizativas determinan las responsabilidades que pueden ejercerse dentro del núcleo.

Los contratos arquitectónicos regulan la cooperación mediante la cual el significado arquitectónico se pone legítimamente a disposición de otras competencias.

Las dependencias permitidas determinan las condiciones bajo las cuales dicho significado puede ser requerido y utilizado durante el ejercicio de una responsabilidad concreta.

En consecuencia:

- las competencias definen **qué puede realizarse**;
- los contratos regulan **cómo puede cooperarse**;
- las dependencias permitidas determinan **qué significado puede requerirse legítimamente** para ejercer una competencia.

Los tres documentos constituyen niveles complementarios de la implementación del núcleo.

---

# Criterio para futuras extensiones

Toda nueva competencia incorporada al núcleo deberá justificar las precondiciones semánticas necesarias para el ejercicio de sus responsabilidades.

No será necesario introducir nuevas clases de dependencias mientras dichas precondiciones puedan expresarse mediante las condiciones de disponibilidad legítima del significado arquitectónico definidas en este documento.

La incorporación de una nueva categoría de dependencia arquitectónica sólo podrá justificarse cuando se demuestre la existencia de una forma irreducible de disponibilidad o restricción del significado que no pueda describirse mediante los principios aquí establecidos.

---

# Estabilidad arquitectónica

Las dependencias arquitectónicas no constituyen una propiedad permanente de los realizadores.

Constituyen una consecuencia del ejercicio de responsabilidades concretas dentro del núcleo.

En consecuencia, la evolución de las competencias no altera necesariamente las dependencias arquitectónicas.

Únicamente modificará las condiciones de disponibilidad del significado cuando aparezcan nuevas responsabilidades cuya realización requiera precondiciones semánticas adicionales.

---

# Estado

Documento consolidado provisionalmente.

La presente especificación constituye la referencia arquitectónica para la disponibilidad legítima del significado arquitectónico durante el ejercicio de las competencias realizativas del núcleo.

Su modificación requerirá la reapertura formal de la auditoría correspondiente conforme al protocolo de trabajo del proyecto.
