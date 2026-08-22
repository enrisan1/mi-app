# Fronteras del dominio

# Propósito

Este documento define las fronteras arquitectónicas del núcleo mediante la delimitación de la autoridad sobre el significado arquitectónico.

Su finalidad consiste en determinar qué responsabilidades pertenecen necesariamente al núcleo y cuáles deben permanecer fuera de él para preservar la arquitectura consolidada.

El documento no clasifica tecnologías, componentes o infraestructuras.

Únicamente establece los criterios que determinan la distribución legítima de la autoridad arquitectónica.

---

# Naturaleza de las fronteras del dominio

Las fronteras del núcleo no delimitan tecnologías, capas o mecanismos de implementación.

Delimitan el ámbito dentro del cual puede ejercerse autoridad sobre el significado arquitectónico.

En consecuencia, una frontera arquitectónica no separa elementos internos y externos por su naturaleza técnica.

Separa responsabilidades según la autoridad que ejercen sobre el significado arquitectónico.

Toda responsabilidad cuya función consista en decidir, constituir, justificar, conservar o regular el significado arquitectónico pertenece necesariamente al núcleo.

Toda responsabilidad cuya función consista exclusivamente en realizar técnicamente dichas decisiones deberá permanecer fuera de él.

---

# Alcance

Este documento pertenece exclusivamente al nivel de implementación del núcleo.

Su objeto consiste en establecer los principios que delimitan la autoridad arquitectónica del núcleo respecto de los mecanismos externos de realización.

En consecuencia, este documento no determina:

- tecnologías de persistencia;
- mecanismos de comunicación;
- interfaces de usuario;
- protocolos de integración;
- sistemas de despliegue;
- infraestructuras de ejecución.

Todos estos aspectos constituyen realizaciones técnicas cuya organización queda fuera del alcance del presente documento.

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

Las fronteras del dominio constituyen la delimitación final de la autoridad arquitectónica del núcleo.

Su definición completa la especificación de la implementación antes de cualquier decisión tecnológica o estructural concreta.

---

# Objetivo

Determinar los principios que delimitan la autoridad exclusiva del núcleo sobre el significado arquitectónico y establecer los criterios que permiten distinguir las responsabilidades propias del núcleo de las responsabilidades propias de su realización técnica.

A partir de dichos principios podrán organizarse posteriormente las distintas infraestructuras, adaptadores y mecanismos de implementación sin alterar la arquitectura consolidada.

# Principio de delimitación

La frontera del núcleo no se establece mediante criterios tecnológicos, organizativos o de implementación.

Se establece exclusivamente mediante la distribución de la autoridad sobre el significado arquitectónico.

En consecuencia, toda responsabilidad deberá pertenecer íntegramente a uno de los dos ámbitos definidos por esta distribución:

- autoridad arquitectónica;
- autoridad realizativa.

No podrá existir una autoridad compartida sobre el significado arquitectónico.

---

# Autoridad arquitectónica

La autoridad arquitectónica pertenece exclusivamente al núcleo.

Su responsabilidad consiste en determinar el significado arquitectónico de los resultados producidos durante el ejercicio de las competencias realizativas.

En consecuencia, únicamente el núcleo podrá:

- constituir significado arquitectónico;
- determinar su legitimidad;
- establecer su justificación;
- regular las condiciones de cooperación entre competencias;
- determinar las condiciones de disponibilidad del significado arquitectónico.

Toda decisión que modifique cualquiera de estos aspectos pertenece necesariamente al núcleo.

---

# Autoridad realizativa

La autoridad realizativa pertenece exclusivamente a los mecanismos externos al núcleo.

Su responsabilidad consiste en materializar técnicamente las decisiones arquitectónicas sin modificar su significado.

En consecuencia, los mecanismos externos podrán decidir exclusivamente aspectos relativos a:

- almacenamiento;
- transporte;
- serialización;
- comunicación;
- representación;
- ejecución;
- integración tecnológica.

Estas decisiones no podrán alterar, sustituir ni reinterpretar el significado arquitectónico determinado por el núcleo.

---

# Exclusividad de la autoridad

La autoridad sobre el significado arquitectónico es indivisible.

No podrá compartirse simultáneamente entre el núcleo y un mecanismo externo.

Toda responsabilidad que otorgue a un mecanismo externo capacidad para decidir el significado arquitectónico dejará inmediatamente de pertenecer al ámbito de la realización técnica y pasará a formar parte del núcleo.

De forma simétrica, toda responsabilidad que únicamente materialice decisiones arquitectónicas permanecerá necesariamente fuera del núcleo.

---

# Principio de frontera

La frontera del dominio queda determinada por un único principio arquitectónico:

> Toda responsabilidad que ejerza autoridad sobre el significado arquitectónico pertenece necesariamente al núcleo.

> Toda responsabilidad que únicamente realice técnicamente dicho significado pertenece necesariamente a los mecanismos externos.

Las tecnologías concretas constituyen únicamente realizaciones particulares de este principio y no participan en la definición de la frontera arquitectónica.

# Independencia respecto de la implementación

La frontera del núcleo es independiente de cualquier organización técnica concreta.

La pertenencia de una responsabilidad al núcleo o a los mecanismos externos no depende de:

- la estructura del código;
- la distribución en módulos;
- la organización en capas;
- la tecnología utilizada;
- la infraestructura de ejecución;
- el patrón arquitectónico adoptado.

Depende exclusivamente de la autoridad que dicha responsabilidad ejerce sobre el significado arquitectónico.

---

# Relación con las competencias, los contratos y las dependencias

Las competencias realizativas determinan quién puede ejercer autoridad arquitectónica.

Los contratos arquitectónicos regulan cómo coopera dicha autoridad.

Las dependencias permitidas determinan bajo qué condiciones puede ponerse legítimamente a disposición el significado arquitectónico necesario para ejercer una responsabilidad.

Las fronteras del dominio delimitan el ámbito dentro del cual dicha autoridad puede ejercerse.

En consecuencia:

- las competencias determinan **quién ejerce la autoridad**;
- los contratos regulan **cómo coopera la autoridad**;
- las dependencias determinan **qué significado puede requerirse**;
- las fronteras determinan **dónde termina legítimamente esa autoridad**.

Los cuatro documentos constituyen niveles complementarios de la implementación del núcleo.

---

# Criterio para futuras extensiones

Toda nueva responsabilidad incorporada al sistema deberá justificar previamente el ámbito de autoridad que ejerce.

No será necesario modificar las fronteras del dominio mientras la nueva responsabilidad pueda clasificarse conforme al principio de distribución de la autoridad definido en este documento.

La incorporación de una nueva categoría arquitectónica sólo podrá justificarse cuando se demuestre la existencia de una forma irreducible de autoridad que no pueda clasificarse ni como autoridad arquitectónica ni como autoridad realizativa.

---

# Estabilidad arquitectónica

Las fronteras del dominio no dependen de los mecanismos concretos de realización.

La incorporación, sustitución o eliminación de tecnologías no modifica la frontera arquitectónica mientras permanezca inalterada la distribución de la autoridad sobre el significado arquitectónico.

En consecuencia, la evolución tecnológica del sistema no afecta a la arquitectura del núcleo.

Únicamente una modificación en la distribución de la autoridad arquitectónica requerirá la reapertura de la presente especificación.

---

# Estado

Documento consolidado provisionalmente.

La presente especificación constituye la referencia arquitectónica para la delimitación de la autoridad sobre el significado arquitectónico dentro de la implementación del núcleo.

Su modificación requerirá la reapertura formal de la auditoría correspondiente conforme al protocolo de trabajo del proyecto.
