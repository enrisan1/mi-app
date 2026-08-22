# Protocolo de trabajo

# Propósito

Este documento define la metodología general de trabajo utilizada
durante el desarrollo del proyecto.

El Protocolo de Consolidación Documental (PCD) constituye una
disciplina documental específica dentro de esta metodología y se
define de forma independiente en
`99-protocolo-de-consolidacion-documental.md`.

Su objetivo consiste en garantizar que todas las investigaciones, auditorías y documentos consolidados se elaboren siguiendo un procedimiento uniforme, trazable y reproducible.

El protocolo no pertenece a una investigación concreta.

Constituye una norma transversal aplicable a todo el proyecto.

---

# Objetivos

El protocolo persigue los siguientes objetivos:

- mantener separadas investigación, especificación y justificación;
- garantizar la trazabilidad de las decisiones;
- evitar modificaciones parciales difíciles de seguir;
- asegurar que cada documento alcance un estado estable antes de servir como fundamento de otros;
- facilitar la reanudación del trabajo tras interrupciones prolongadas.

---

# Principios metodológicos

Todo el trabajo del proyecto deberá respetar los siguientes principios.

## PM-1 — Descubrir antes de diseñar

No se diseñará ninguna solución antes de comprender suficientemente el problema.

La investigación precede siempre al diseño.

---

## PM-2 — Refutar antes de consolidar

Toda hipótesis deberá someterse a intentos sistemáticos de refutación.

Sólo las hipótesis que resistan la auditoría podrán consolidarse.

---

## PM-3 — Consolidar únicamente el conocimiento aceptado

Los documentos consolidados describen únicamente el conocimiento aceptado correspondiente a la función que desempeñan.

Las hipótesis descartadas, los intentos fallidos y los razonamientos exploratorios permanecerán en la investigación correspondiente.

---

## PM-4 — Separación de responsabilidades

Cada documento debe tener una responsabilidad claramente definida.

No se duplicará información entre documentos salvo cuando resulte estrictamente necesario para su comprensión.

---

## PM-5 — Separación entre teoría y realización

La teoría conceptual, la arquitectura software y la implementación pertenecen a niveles distintos.

Ningún documento debe mezclar responsabilidades pertenecientes a planos diferentes.

---

## PM-6 — Justificación de toda incorporación

Ningún concepto, componente o responsabilidad podrá incorporarse al modelo sin justificar:

- su necesidad;
- su independencia;
- su contribución al sistema.

---

## PM-7 — Preferencia por la simplicidad

Entre dos soluciones equivalentes deberá preferirse siempre la más simple compatible con las exigencias del modelo.

La complejidad sólo se aceptará cuando resulte necesaria.

---

## PM-8 — Separación entre investigación, especificación y justificación

Todo documento consolidado deberá tener una única función principal.

Las funciones documentales fundamentales del proyecto son:

- **Investigación**: descubrir, formular y refutar hipótesis hasta obtener un resultado estable.
- **Especificación**: describir la estructura vigente aceptada.
- **Justificación**: demostrar que dicha estructura es necesaria, coherente o suficiente respecto del alcance declarado.

Un documento podrá contener referencias o breves contextualizaciones de otras funciones cuando resulten necesarias para su comprensión, pero no deberá asumir simultáneamente más de una función principal.

---

# Consolidación documental

La construcción, revisión, congelación, reapertura y registro
documental se rigen por el Protocolo de Consolidación Documental.

Referencia canónica:

`99-protocolo-de-consolidacion-documental.md`

El PCD forma parte de la metodología general, pero posee
responsabilidad documental propia y este documento no duplica
sus fases ni reglas operativas.

---

# Reapertura de documentos

los resultados consolidados pueden reabrirse cuando aparece nuevo fundamento

Todo resultado consolidado permanece reabrible.

Las condiciones y el procedimiento documental de reapertura
se rigen por el PCD.

Toda reapertura iniciará una nueva auditoría.

---

# Funciones documentales

La documentación del proyecto distingue tres funciones fundamentales.

## Investigación

Descubre y refuta hipótesis hasta obtener resultados estables.

Contiene, entre otros:

- preguntas;
- hipótesis;
- intentos de refutación;
- contraejemplos;
- razonamientos;
- alternativas descartadas.

---

## Especificación

Describe exclusivamente la estructura vigente aceptada.

Contiene:

- definiciones;
- principios consolidados;
- estructuras;
- responsabilidades;
- restricciones.

No incorpora las demostraciones que justifican dichas decisiones.

---

## Justificación

Demuestra que una especificación resulta necesaria, coherente o suficiente respecto del alcance declarado.

Contiene:

- pruebas de necesidad;
- pruebas de independencia;
- pruebas de suficiencia;
- relaciones de trazabilidad;
- auditorías de cobertura.

---

# Gestión de cambios

Las modificaciones deberán realizarse respetando las siguientes reglas.

- Evitar parches incoherentes.
- Mantener la consistencia terminológica.
- Actualizar los documentos dependientes.

Cuando un cambio afecte a un documento consolidado o a sus
dependencias, su tratamiento documental se realizará conforme al PCD.

---

# Organización documental

Siempre que resulte posible, la documentación distinguirá dos criterios complementarios de organización.

## Según el dominio

Según el ámbito o cuerpo de responsabilidad: metodología, cuerpos teóricos de dominio, metateoría, ingeniería, realización, implementación y demás ámbitos diferenciados que el proyecto justifique.

## Según la función documental

- investigación;
- especificación;
- justificación.

Todo documento deberá pertenecer claramente a un dominio y desempeñar una única función principal.

---

# Principio de estabilidad

Los documentos consolidados constituyen una base estable para las actuaciones posteriores del proyecto que requieran apoyarse en ellos.

Su modificación debe considerarse una excepción y nunca una práctica habitual.

La estabilidad documental forma parte de la propia metodología del proyecto.

---

# Construcción de cuerpos teóricos autónomos

Los principios metodológicos descritos anteriormente regulan la forma en que debe desarrollarse cualquier investigación del proyecto.

Sin embargo, cuando una investigación demuestra la existencia de un cuerpo teórico autónomo, resulta necesario establecer además el procedimiento mediante el cual dicha teoría debe incorporarse al proyecto.

Los principios contenidos en esta sección regulan la construcción de cuerpos teóricos completos y complementan, sin sustituirlos, a los principios metodológicos generales.

---

## CT-1 — Derivación del marco teórico

Todo cuerpo teórico autónomo deberá comenzar por un documento de marco identificado con el prefijo 00-, cuya denominación refleje adecuadamente la naturaleza del cuerpo teórico.

En los cuerpos teóricos ordinarios podrá utilizarse 00-marco-teorico.md. Cuando la naturaleza de la disciplina justifique una denominación más precisa, podrá emplearse una variante equivalente, siempre que conserve las responsabilidades establecidas por CT-1.

La responsabilidad irreducible de este documento consiste en establecer la identidad científica del cuerpo teórico al que pertenece.

El marco teórico no constituye una introducción documental ni un resumen del contenido de la teoría.

Su función consiste exclusivamente en determinar la competencia científica del nuevo cuerpo teórico dentro del proyecto.

Dicha identidad no debe definirse de forma intuitiva ni documental.

Debe derivarse metodológicamente a partir de las responsabilidades necesarias para determinar la competencia propia de la teoría.

En consecuencia, el contenido del marco teórico deberá construirse siguiendo una secuencia lógica derivativa.

---

### Responsabilidades irreducibles

La identidad científica de una teoría queda completamente determinada mediante las siguientes responsabilidades.

#### Competencia científica

Determina el problema científico cuya resolución corresponde exclusivamente a la teoría.

Responde a la pregunta:

> ¿Qué clase de conocimiento produce esta teoría?

---

#### Objeto de estudio

Determina la realidad sobre la cual ejerce la competencia científica previamente definida.

Responde a la pregunta:

> ¿Sobre qué realidad trabaja esta teoría?

---

#### Alcance disciplinar

Determina el ámbito dentro del cual la teoría puede ejercer legítimamente su competencia.

Incluye simultáneamente sus límites respecto del resto de cuerpos teóricos.

Responde a la pregunta:

> ¿Hasta dónde llega la competencia de esta teoría y dónde deja de ser competente?

---

#### Integración dentro del proyecto

Determina la relación estructural entre esta teoría y el resto de cuerpos teóricos del proyecto.

No redefine sus competencias.

Únicamente establece cómo cooperan entre sí.

Responde a la pregunta:

> ¿Cómo se integra esta teoría con las demás teorías del proyecto?

---

### Orden lógico de construcción

Las responsabilidades anteriores no constituyen una enumeración arbitraria.

Forman una cadena derivativa cuya alteración rompe la justificación metodológica del documento.

```text
Competencia científica
        ↓
Objeto de estudio
        ↓
Alcance disciplinar
        ↓
Integración dentro del proyecto
```

Cada nivel presupone necesariamente el anterior.

La competencia determina el problema científico que la teoría resuelve.

El objeto determina la realidad sobre la cual dicha competencia puede ejercerse.

El alcance determina hasta dónde resulta legítimo ejercer esa competencia.

Finalmente, la integración determina cómo coopera la teoría con el resto del proyecto respetando las fronteras previamente establecidas.

Este orden no responde a criterios expositivos.

Responde a la estructura lógica mediante la cual queda establecida la identidad científica de un cuerpo teórico autónomo.

---

### Criterio de aplicación

Este principio deberá aplicarse siempre que el proyecto incorpore un nuevo cuerpo teórico autónomo.

La creación de un nuevo documento `00-marco-teorico.md` no constituye una decisión documental.

Constituye la consecuencia metodológica de haber identificado una teoría que posee simultáneamente:

- una competencia científica propia;
- un objeto de estudio propio;
- un alcance disciplinar propio;
- una integración específica respecto del resto de teorías del proyecto.

---

### Consecuencia metodológica

Ningún cuerpo teórico deberá comenzar directamente por sus investigaciones, modelos, axiomas o validaciones.

La definición explícita de su identidad científica constituye una condición previa para el desarrollo legítimo de cualquier investigación posterior.

En consecuencia, toda teoría autónoma del proyecto deberá establecer primero su competencia científica antes de producir conocimiento dentro de ella.

---

# Estado

Protocolo vigente.

Este procedimiento será aplicable, salvo justificación explícita en contrario, a todas las investigaciones, auditorías y documentos consolidados del proyecto.

---
