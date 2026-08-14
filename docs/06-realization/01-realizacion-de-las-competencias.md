# 01-realizacion-de-las-competencias.md

# Realización de las competencias

## Propósito

Este documento establece los principios arquitectónicos que gobiernan la realización de las competencias fundamentales del núcleo.

Su finalidad consiste en determinar las condiciones generales que toda plataforma debe satisfacer para materializar una competencia arquitectónica preservando íntegramente la arquitectura consolidada durante la teoría conceptual, la ingeniería y la implementación.

No introduce nuevas competencias.

No redefine las competencias existentes.

No amplía la arquitectura del núcleo.

Su responsabilidad consiste exclusivamente en establecer cómo deben realizarse las competencias previamente definidas para garantizar la conservación íntegra de sus invariantes arquitectónicos.

---

# Posición dentro de la arquitectura

```text
Teoría conceptual
        │
        ▼
Ingeniería del núcleo
        │
        ▼
00-principios-de-realizacion.md
        │
        ▼
01-realizacion-de-las-competencias.md
        │
        ▼
02-contratos-arquitectonicos.md
        │
        ▼
03-dependencias-permitidas.md
        │
        ▼
04-fronteras-del-dominio.md
```

La teoría conceptual determina qué competencias existen y cuáles son sus propiedades fundamentales.

La ingeniería determina cómo deben organizarse dichas competencias dentro del núcleo software.

Los principios generales de realización establecen el marco normativo común que gobierna toda realización válida.

El presente documento aplica dicho marco específicamente a la realización de las competencias arquitectónicas.

Los documentos posteriores desarrollarán las implicaciones particulares relativas a los contratos, las dependencias permitidas y las fronteras del dominio.

---

# Objetivo

Determinar las condiciones generales que debe satisfacer cualquier realización software para materializar una competencia arquitectónica sin modificar su identidad, autoridad, responsabilidad ni los invariantes previamente consolidados.

El documento pretende establecer los principios que permiten distinguir entre una realización arquitectónicamente legítima y una realización que altera la arquitectura del núcleo.

---

# Alcance

Este documento estudia exclusivamente la realización de las competencias arquitectónicas fundamentales.

Su alcance comprende:

- la relación entre competencia y realización;
- la preservación de la identidad arquitectónica de las competencias;
- la conservación de la autoridad y de la responsabilidad arquitectónicas;
- las condiciones generales que deben satisfacer los realizadores;
- la cooperación entre múltiples realizadores cuando una misma competencia se materializa conjuntamente;
- los criterios generales de verificación de la preservación de las competencias.

### Frontera entre atribución y validez conservativa

Las condiciones establecidas en este documento regulan la validez
conservativa de una realización cuya atribución a una competencia esté justificada.

No constituyen por sí mismas un criterio suficiente para determinar qué parte de una configuración software materializa dicha competencia.

En particular, dada una competencia `K`, una configuración `Ω` y una parte `Σ ⊆ Ω`, la satisfacción o preservación sistémica de `INV-K` por `Ω` no autoriza por sí sola la atribución:

`materializa(Σ,K)`

La determinación de una atribución realizativa deberá estar justificada por fundamentos que autoricen específicamente dicho contenido cuando tal atribución sea necesaria.

Esta distinción no introduce una nueva competencia, responsabilidad, entidad ni relación arquitectónica fundamental.

Quedan expresamente fuera de su alcance:

- la definición de nuevas competencias;
- la modificación de las competencias consolidadas;
- la organización interna de la plataforma;
- las decisiones tecnológicas o de implementación;
- los contratos arquitectónicos entre competencias;
- las dependencias entre componentes;
- las fronteras del dominio.

Todas estas cuestiones serán desarrolladas en sus documentos específicos o permanecen reguladas por la teoría conceptual, la ingeniería del núcleo y los principios generales de realización.

---

# Principios generales

La realización de una competencia arquitectónica consiste en materializar software capaz de ejercer una competencia previamente definida por la arquitectura sin alterar su identidad, autoridad, responsabilidad ni los invariantes que la caracterizan.

La realización no constituye una fase de definición arquitectónica.

Constituye una fase de preservación.

En consecuencia, toda realización válida deberá satisfacer simultáneamente las siguientes condiciones generales:

- preservar íntegramente los invariantes arquitectónicos de la competencia;
- mantener inalteradas la autoridad y la responsabilidad previamente definidas;
- respetar las restricciones establecidas por la arquitectura del núcleo;
- justificar cualquier transformación mediante los principios generales de realización;
- permitir verificar objetivamente la conservación de la competencia realizada.

El incumplimiento de cualquiera de estas condiciones implica que la plataforma deja de realizar correctamente la competencia arquitectónica correspondiente.

---

# Realización de una competencia

## Competencia y realización

Una competencia arquitectónica existe con independencia de cualquier plataforma concreta.

La realización constituye el proceso mediante el cual una plataforma materializa dicha competencia preservando íntegramente su significado arquitectónico.

En consecuencia, la realización no crea competencias.

Únicamente incorpora una realización software capaz de ejercerlas conforme a las condiciones establecidas por la arquitectura.

Por ello, dos plataformas cuya atribución como realizaciones de una misma competencia esté justificada podrán diferir tecnológica, organizativa o estructuralmente sin que dichas diferencias afecten a su validez conservativa, siempre que ambas preserven íntegramente los invariantes arquitectónicos aplicables.

Las diferencias tecnológicas, organizativas o estructurales entre ambas plataformas no alteran la competencia realizada mientras dichos invariantes permanezcan íntegramente conservados.

---

## Preservación de la competencia

Toda realización deberá preservar la identidad arquitectónica de la competencia realizada.

Esta preservación comprende necesariamente:

- la identidad de la competencia;
- la autoridad que la arquitectura le atribuye;
- la responsabilidad que ejerce dentro del núcleo;
- los contratos que la afectan;
- los invariantes arquitectónicos previamente consolidados.

La realización no puede modificar ninguno de estos elementos.

Cualquier transformación que altere alguno de ellos deja de constituir una realización conservativa y pasa a requerir la reapertura de la fase arquitectónica correspondiente.

---

## Autoridad

La autoridad arquitectónica pertenece exclusivamente a la competencia.

Los realizadores software no adquieren autoridad propia por el hecho de materializar una competencia.

Su responsabilidad consiste únicamente en ejercer la autoridad previamente definida por la arquitectura respetando íntegramente sus límites.

En consecuencia, sustituir un realizador, reorganizar varios realizadores o modificar su cooperación no altera la autoridad arquitectónica mientras la competencia permanezca íntegramente preservada.

---

## Responsabilidad

La realización no introduce responsabilidades arquitectónicas nuevas.

Toda responsabilidad ejercida durante la realización deriva de las responsabilidades previamente definidas para la competencia correspondiente.

Los realizadores software podrán distribuir internamente el trabajo necesario para ejercer una competencia.

Sin embargo, dicha distribución no modifica la responsabilidad arquitectónica de la competencia realizada.

La plataforma únicamente materializa responsabilidades previamente existentes.

No crea responsabilidades arquitectónicas adicionales.

---

## Realizadores

Una competencia arquitectónica podrá ser realizada por uno o varios realizadores software.

El número de realizadores no constituye una propiedad arquitectónica de la competencia.

Constituye exclusivamente una decisión de realización.

En consecuencia:

- una misma competencia podrá materializarse mediante un único realizador;
- podrá distribuirse entre varios realizadores cooperantes;
- podrá reorganizarse internamente sin modificar la arquitectura del núcleo.

Una vez justificada su atribución realizativa, todas estas posibilidades serán arquitectónicamente equivalentes respecto de la conservación de la competencia siempre que preserven íntegramente sus invariantes.

La identidad arquitectónica pertenece a la competencia.

No a sus realizadores.

---

## Cooperación entre realizadores

Cuando una competencia sea realizada conjuntamente por varios realizadores, dicha cooperación no fragmenta la competencia arquitectónica.

La competencia continúa constituyendo una única autoridad y una única responsabilidad arquitectónicas.

La distribución del trabajo entre los distintos realizadores pertenece exclusivamente a la organización interna de la plataforma.

Por tanto:

- ningún realizador adquiere competencias arquitectónicas propias;
- la cooperación no modifica la autoridad de la competencia;
- la cooperación no altera la responsabilidad arquitectónica previamente consolidada.

Toda reorganización interna deberá preservar exactamente las mismas garantías arquitectónicas que una realización individual.

---

## Verificación

Toda realización cuya atribución a una competencia esté justificada deberá permitir demostrar objetivamente que continúa preservando las condiciones arquitectónicas exigidas para su realización conservativa.

La verificación regulada en este documento no consiste en comprobar la corrección técnica de una implementación ni en establecer por sí misma la atribución realizativa.

Consiste en demostrar que, dada una atribución realizativa justificada, la competencia conserva íntegramente su identidad arquitectónica.

En consecuencia, toda verificación deberá confirmar al menos:

- la preservación de la identidad de la competencia;
- la conservación de su autoridad arquitectónica;
- la conservación de su responsabilidad;
- la preservación de los invariantes arquitectónicos aplicables;
- la legitimidad de las transformaciones realizadas.

Las verificaciones locales únicamente constituyen evidencias parciales.

La demostración arquitectónica deberá abarcar necesariamente la competencia completa como sujeto arquitectónico de los invariantes cuya preservación pretende garantizar.

---

## Transformaciones conservativas

Toda modificación realizada sobre la plataforma deberá respetar los principios generales establecidos en `00-principios-de-realizacion.md`.

Una transformación será arquitectónicamente legítima únicamente cuando preserve íntegramente la competencia realizada.

En consecuencia, toda transformación deberá:

- mantener la identidad arquitectónica de la competencia;
- preservar la autoridad y la responsabilidad previamente consolidadas;
- conservar todos los invariantes aplicables;
- justificar la legitimidad de la transformación mediante los principios generales de realización;
- permitir reconstruir objetivamente dicha justificación.

Cuando una transformación modifique alguno de estos elementos, dejará de constituir una transformación conservativa.

En tal caso será necesaria la reapertura de la fase arquitectónica correspondiente antes de incorporar la modificación a la realización del núcleo.

---

# Consecuencias arquitectónicas

La realización de las competencias no constituye una fase de creación arquitectónica.

Constituye una fase de preservación arquitectónica.

En consecuencia:

- la arquitectura del núcleo permanece definida por la teoría conceptual, la ingeniería y los principios generales de realización;
- la realización únicamente materializa las competencias previamente consolidadas;
- distintas plataformas cuya atribución realizativa esté justificada podrán constituir realizaciones conservativamente legítimas de una misma competencia siempre que preserven íntegramente los invariantes arquitectónicos aplicables;
- toda reorganización interna de la plataforma será arquitectónicamente transparente mientras no modifique la identidad, la autoridad, la responsabilidad ni los invariantes de las competencias realizadas.

La validez conservativa de una realización cuya atribución esté
justificada no depende de la organización concreta del software utilizado para materializarla.

Dentro del alcance de este documento, dicha validez conservativa depende exclusivamente de la preservación íntegra de la arquitectura previamente consolidada.

---

# Límites

Este documento no define competencias arquitectónicas.

No modifica las competencias previamente consolidadas.

No introduce nuevas responsabilidades, autoridades, contratos ni invariantes arquitectónicos.

Tampoco establece decisiones relativas a tecnologías, lenguajes, plataformas, patrones de implementación o estructuras organizativas concretas.

Todas estas cuestiones pertenecen a sus correspondientes fases de investigación o a los documentos específicos de la arquitectura de realización.

---

# Conclusión

La realización de las competencias constituye la aplicación conservativa de la arquitectura previamente consolidada.

Su finalidad consiste exclusivamente en garantizar que las competencias definidas por la teoría conceptual puedan materializarse mediante plataformas software sin alterar la identidad arquitectónica del núcleo.

En consecuencia, toda realización válida deberá preservar íntegramente las competencias arquitectónicas previamente definidas y justificar objetivamente cualquier transformación realizada conforme a los principios generales establecidos para la fase de realización.

Con ello queda establecido el marco normativo específico para la realización de las competencias fundamentales del núcleo, sirviendo como base para el estudio de los contratos arquitectónicos, las dependencias permitidas y las restantes dimensiones de la realización.
