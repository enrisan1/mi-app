# 00-marco-teorico.md

# Marco teórico y metodológico

## 1. Objetivo

Este documento define el marco teórico y metodológico utilizado para construir y auditar teorías estructurales mínimas a partir de un catálogo de fenómenos.

Su finalidad no es describir un dominio concreto ni presentar el modelo conceptual resultante, sino establecer las reglas que deben seguirse durante el proceso de investigación para garantizar que las conclusiones obtenidas sean coherentes, reproducibles y estén justificadas por los fenómenos observados.

Los principios aquí descritos son independientes del dominio investigado y constituyen la base metodológica de toda la arquitectura documental.

---

# 2. Alcance

Este documento regula exclusivamente el método de investigación.

No establece:

- el modelo conceptual del dominio;
- los axiomas de una teoría concreta;
- las reconstrucciones aceptadas;
- las operaciones de una plataforma;
- las conclusiones obtenidas durante una investigación particular.

Todos esos contenidos pertenecen a documentos posteriores.

---

# 3. Principios metodológicos

## PM-001 — Modelar situaciones, no conceptos

Toda investigación comienza analizando situaciones reales.

Los conceptos de la teoría deben descubrirse como consecuencia del estudio de dichas situaciones y nunca imponerse previamente.

---

## PM-002 — Primacía fenomenológica

Los fenómenos preceden a cualquier construcción teórica.

Ningún concepto, papel estructural, función, firma o axioma podrá incorporarse a la teoría si no está justificado por al menos un fenómeno previamente identificado.

---

## PM-003 — Hipótesis explícitas

Toda investigación comenzará formulando una hipótesis claramente identificable.

Las hipótesis constituyen propuestas de trabajo y no resultados aceptados.

---

## PM-004 — Falsación sistemática

El objetivo de la investigación no consiste en confirmar hipótesis, sino en intentar refutarlas mediante análisis sistemáticos, reducciones, reconstrucciones alternativas y contraejemplos.

Una hipótesis sólo se mantiene mientras resista dichos intentos de refutación.

---

## PM-005 — Conservación reconstructiva

Antes de introducir un nuevo elemento teórico deberá demostrarse que los elementos previamente aceptados no permiten reconstruir el fenómeno estudiado.

Si la reconstrucción tiene éxito, el nuevo elemento no deberá incorporarse.

---

## PM-006 — Reducción máxima

Toda investigación intentará reducir el número de elementos primitivos de la teoría sin disminuir su capacidad reconstructiva.

La simplicidad constituye un criterio metodológico, nunca un objetivo independiente de la explicación de los fenómenos.

---

## PM-007 — Separación entre observaciones y conclusiones

Las observaciones describen hechos obtenidos durante la investigación.

Las conclusiones interpretan dichos hechos.

Ambas deben mantenerse siempre diferenciadas.

---

## PM-008 — Separación entre investigación y teoría

La investigación documenta el proceso seguido.

La teoría documenta únicamente el conocimiento actualmente aceptado.

Las hipótesis descartadas permanecen registradas en la investigación, pero no forman parte del modelo vigente.

---

## PM-009 — Conservación del razonamiento

Toda investigación deberá registrar, al menos:

- hipótesis inicial;
- método utilizado;
- fenómenos estudiados;
- observaciones;
- reconstrucciones realizadas;
- conclusiones;
- estado de la investigación.

El objetivo es preservar el razonamiento completo que condujo a cada decisión.

---

## PM-010 — Neutralidad respecto de la implementación

Durante la investigación conceptual no deberán introducirse:

- decisiones tecnológicas;
- estructuras de software;
- funcionalidades;
- restricciones de implementación;
- optimizaciones.

La teoría debe descubrirse antes de diseñar su implementación.

---

# 4. Procedimiento general de investigación

Toda investigación seguirá el siguiente algoritmo.

## Paso 1

Identificar un fenómeno cuya explicación forme parte del objetivo de la teoría.

---

## Paso 2

Intentar reconstruir dicho fenómeno utilizando exclusivamente los elementos previamente aceptados.

---

## Paso 3

Si la reconstrucción tiene éxito, no incorporar nuevos elementos.

Continuar con el siguiente fenómeno.

---

## Paso 4

Si la reconstrucción fracasa, identificar la diferencia mínima responsable del fracaso.

---

## Paso 5

Intentar derivar dicha diferencia a partir de los elementos ya aceptados.

---

## Paso 6

Sólo cuando la derivación resulte imposible, aceptar provisionalmente un nuevo candidato teórico.

---

## Paso 7

Repetir el procedimiento hasta que todos los fenómenos aceptados hayan sido reconstruidos o se haya agotado justificadamente la reducción.

---

# 5. Método de reducción

La reducción constituye el procedimiento principal de descubrimiento de la teoría.

Consiste en eliminar sistemáticamente elementos candidatos comprobando, tras cada eliminación, si el catálogo de fenómenos continúa siendo reconstruible.

Una reducción sólo será aceptada cuando elimine una diferencia estructural real.

No constituye una reducción válida sustituir una función por otra representación equivalente.

---

# 6. Método de falsación

Toda propuesta teórica deberá someterse, cuando resulte aplicable, a los siguientes procedimientos de comprobación:

- reconstrucciones alternativas;
- reducción conceptual;
- contraejemplos;
- auditorías de minimalidad;
- auditorías de completitud;
- comparación entre modelos alternativos.

El objetivo consiste en descubrir las limitaciones de la propuesta, no confirmar su corrección.

---

# 7. Criterios de aceptación

Un resultado podrá incorporarse provisionalmente a la teoría cuando satisfaga simultáneamente las siguientes condiciones.

## CA-001 — Cobertura fenomenológica

Explica al menos un fenómeno previamente aceptado.

---

## CA-002 — Necesidad

Su eliminación impide reconstruir algún fenómeno del catálogo.

---

## CA-003 — Irreductibilidad

No puede derivarse a partir de los elementos previamente aceptados.

---

## CA-004 — Coherencia

No contradice los resultados consolidados de la teoría.

---

## CA-005 — Reproducibilidad

El procedimiento que conduce al resultado puede repetirse obteniendo las mismas conclusiones.

---

# 8. Criterios de agotamiento de la reducción

La reducción deberá detenerse provisionalmente cuando cualquier reducción adicional deje de simplificar la teoría del dominio y pase a analizar exclusivamente:

- el lenguaje utilizado para expresarla;
- su formalización lógica;
- conceptos pertenecientes a un nivel superior de la arquitectura;
- cuestiones puramente metateóricas.

La reducción deja entonces de actuar sobre el dominio y comienza a actuar sobre la descripción del dominio.

---

# 9. Criterios de clasificación conceptual

Todo concepto incorporado durante la investigación deberá clasificarse antes de aceptarse.

## Nivel 1 — Núcleo estructural

Conceptos cuya ausencia impide reconstruir fenómenos fundamentales del dominio.

---

## Nivel 2 — Reconstrucciones

Conceptos obtenidos a partir del núcleo estructural sin ampliar el conjunto de funciones fundamentales.

---

## Nivel 3 — Modelo de plataforma

Operaciones, responsabilidades y mecanismos que actúan sobre el dominio ya reconstruido.

---

## Nivel 4 — Teoría de frontera

Conceptos que describen la relación entre el dominio estructural y entidades externas al mismo.

---

## Nivel 5 — Metateoría

Conceptos cuyo objeto de estudio es la propia teoría y no el dominio investigado.

---

# 10. Criterios de cierre de una investigación

Una investigación podrá cerrarse provisionalmente cuando ocurra alguna de las siguientes situaciones:

- la hipótesis resulte refutada;
- la hipótesis haya resistido los intentos sistemáticos de falsación;
- la investigación deje de producir nuevos resultados verificables;
- las reducciones posteriores sólo generen conceptos pertenecientes a niveles superiores de la arquitectura.

El cierre de una investigación no implica que sus conclusiones sean definitivas.

Toda conclusión consolidada permanece abierta a futuras revisiones si aparecen nuevos fenómenos o nuevas evidencias.

---

# 11. Evolución del conocimiento

El conocimiento generado durante el proyecto seguirá el siguiente flujo documental:

```text
Investigación
        ↓
Fenómenos fundamentales
        ↓
Reducción de fenómenos
        ↓
Exigencias estructurales
        ↓
Perfil funcional
        ↓
Axiomas
        ↓
Modelo conceptual
        ↓
Reconstrucciones
        ↓
Modelo de plataforma
        ↓
Auditoría de completitud
        ↓
Validación de la metateoría
```

Cada documento utilizará únicamente resultados consolidados en los documentos anteriores.

Este criterio garantiza la trazabilidad completa de todas las decisiones adoptadas durante la investigación.

---

# 12. Estado del documento

Este documento constituye el marco teórico y metodológico general de la investigación.

No depende de un dominio concreto y establece las reglas que deberán seguir todas las investigaciones desarrolladas dentro de este proyecto.
