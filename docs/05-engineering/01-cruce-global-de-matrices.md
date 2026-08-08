# Cruce global de matrices

# Propósito

Este documento constituye la justificación estructural de la arquitectura consolidada del núcleo.

Su finalidad consiste en demostrar que todas las responsabilidades arquitectónicas poseen un fundamento explícito, que todas las dependencias permanecen justificadas y que la arquitectura forma un sistema estructuralmente coherente.

No describe la arquitectura del núcleo.

Tampoco documenta el proceso de investigación que condujo a ella.

La arquitectura vigente se especifica en:

- `00-arquitectura-del-nucleo.md`

La validación de que dicha arquitectura cubre íntegramente el alcance de la teoría conceptual se desarrolla en:

- `02-auditoria-fenomenologica-final-de-cobertura.md`

---

# Objetivo

Demostrar que la arquitectura consolidada constituye una consecuencia necesaria de la teoría conceptual y que todas sus responsabilidades, dependencias, restricciones y mecanismos de realización permanecen estructuralmente justificados.

---

# Posición dentro de la documentación

La justificación estructural ocupa el nivel intermedio entre la especificación arquitectónica y la validación fenomenológica.

```text
Teoría conceptual consolidada
            │
            ▼
Arquitectura del núcleo
            │
            ▼
Justificación estructural
            │
            ▼
Validación fenomenológica
```

Cada uno de estos documentos responde a una pregunta distinta.

- La arquitectura responde: **¿Qué estructura debe implementarse?**
- La justificación responde: **¿Por qué esa estructura resulta necesaria y coherente?**
- La validación responde: **¿Por qué dicha estructura cubre completamente el alcance declarado?**

---

# Alcance

Este documento demuestra exclusivamente propiedades estructurales de la arquitectura del núcleo.

En particular justifica:

- la derivación de las responsabilidades arquitectónicas;
- las obligaciones normativas que gobiernan dichas responsabilidades;
- las condiciones objetivas de realización y verificación;
- la consistencia transversal del sistema completo.

No estudia:

- decisiones de implementación;
- tecnologías concretas;
- rendimiento;
- persistencia;
- infraestructura;
- interfaces de usuario;
- validación fenomenológica.

---

# Organización de la justificación estructural

La justificación estructural se organiza mediante cuatro matrices complementarias.

Cada matriz demuestra una propiedad arquitectónica distinta e irreducible.

Ninguna matriz puede sustituir a otra y ninguna incorpora competencias justificativas pertenecientes a otra.

Las propiedades demostradas son:

| Matriz                                                | Propiedad justificada                              |
| ----------------------------------------------------- | -------------------------------------------------- |
| Matriz de derivación                                  | Necesidad de las responsabilidades arquitectónicas |
| Matriz de obligaciones normativas                     | Corrección normativa de dichas responsabilidades   |
| Matriz de responsabilidades realizativas y evidencias | Verificabilidad objetiva de la realización         |
| Cruce global                                          | Consistencia transversal del sistema completo      |

La eliminación de cualquiera de estas matrices impediría justificar una propiedad arquitectónica que ninguna otra puede demostrar.

---

# Criterios de lectura

Las matrices deben interpretarse como demostraciones complementarias.

Cada una responde a una pregunta distinta.

**Matriz de derivación**

> ¿Por qué existe esta responsabilidad arquitectónica?

---

**Matriz de obligaciones normativas**

> ¿Qué debe cumplir esta responsabilidad para preservar la teoría?

---

**Matriz de responsabilidades realizativas y evidencias**

> ¿Cómo puede verificarse objetivamente el cumplimiento de dichas obligaciones?

---

**Cruce global**

> ¿Permanecen compatibles todas las respuestas anteriores cuando se consideran conjuntamente?

Sólo la lectura conjunta de las cuatro matrices proporciona la justificación estructural completa de la arquitectura.

---

# Matriz de derivación

## Finalidad

La matriz de derivación demuestra que cada responsabilidad arquitectónica constituye una consecuencia necesaria de la teoría conceptual consolidada.

Su función consiste exclusivamente en justificar la existencia de las responsabilidades del núcleo.

No establece obligaciones normativas.

No define mecanismos de realización.

No verifica implementaciones.

No demuestra la consistencia transversal del sistema.

Estas responsabilidades corresponden a las matrices posteriores.

---

_A partir de este punto se incorpora la matriz de derivación consolidada, manteniendo su estructura, contenido y terminología, eliminando únicamente referencias evolutivas o históricas ("actualización", "cambios respecto de la versión anterior", etc.) y adaptando las introducciones al presente documento como justificación estructural canónica._

# Matriz de obligaciones normativas

## Finalidad

La matriz de obligaciones normativas demuestra que cada responsabilidad arquitectónica queda sometida a un conjunto explícito de restricciones necesarias para preservar la fidelidad de la teoría conceptual.

Su función consiste exclusivamente en justificar las obligaciones que gobiernan el comportamiento de las responsabilidades arquitectónicas.

No justifica la existencia de dichas responsabilidades.

No define mecanismos de realización.

No establece evidencias de verificación.

No demuestra la consistencia transversal del sistema.

Estas responsabilidades corresponden a las restantes matrices.

---

## Competencia justificativa

La matriz responde únicamente a la siguiente cuestión:

> **¿Qué debe cumplir cada responsabilidad arquitectónica para conservar íntegramente la teoría conceptual?**

Las obligaciones aquí recogidas constituyen criterios normativos.

No describen implementaciones concretas.

No prescriben tecnologías.

No sustituyen las responsabilidades arquitectónicas cuya existencia ha sido previamente justificada.

---

## Alcance de la demostración

La matriz demuestra que:

- toda responsabilidad arquitectónica posee obligaciones explícitas;
- ninguna obligación carece de fundamento arquitectónico;
- las obligaciones preservan la separación entre las distintas responsabilidades;
- ninguna obligación introduce competencias pertenecientes a otra responsabilidad.

---

_A partir de este punto se incorpora la matriz consolidada de obligaciones normativas, conservando íntegramente su contenido técnico y su estructura justificativa. Únicamente se eliminan referencias históricas, evolutivas o relativas a versiones anteriores del documento._

---

# Matriz de responsabilidades realizativas y evidencias

## Finalidad

La matriz de responsabilidades realizativas y evidencias demuestra que todas las obligaciones arquitectónicas admiten una realización objetiva y una verificación igualmente objetiva.

Su función consiste exclusivamente en justificar que el cumplimiento de la arquitectura puede comprobarse mediante evidencias explícitas.

No justifica la existencia de las responsabilidades arquitectónicas.

No establece obligaciones normativas.

No demuestra la consistencia transversal del sistema.

Estas responsabilidades pertenecen a las restantes matrices.

---

## Competencia justificativa

La matriz responde únicamente a la siguiente cuestión:

> **¿Cómo puede verificarse objetivamente que una realización respeta las obligaciones definidas por la arquitectura?**

Las evidencias aquí recogidas no constituyen mecanismos de implementación.

Constituyen únicamente criterios objetivos que permiten verificar el cumplimiento de las responsabilidades y obligaciones previamente justificadas.

---

## Alcance de la demostración

La matriz demuestra que:

- toda obligación arquitectónica dispone de una realización identificable;
- toda realización puede verificarse mediante evidencias objetivas;
- ninguna evidencia sustituye a las obligaciones que pretende verificar;
- la verificabilidad permanece separada tanto de la fundamentación como de la normativa.

---

_A partir de este punto se incorpora la matriz consolidada de responsabilidades realizativas y evidencias, manteniendo íntegramente su contenido técnico y su organización. Únicamente se eliminan referencias evolutivas y cualquier formulación asociada al proceso histórico de consolidación del documento._

# Cruce global

## Finalidad

El cruce global demuestra que las propiedades justificadas por las matrices anteriores permanecen compatibles cuando se consideran conjuntamente.

Su función consiste exclusivamente en justificar la consistencia transversal de la arquitectura consolidada.

No incorpora nuevas responsabilidades.

No establece nuevas obligaciones.

No introduce nuevas evidencias.

Su finalidad consiste únicamente en demostrar que las relaciones entre todos los componentes arquitectónicos permanecen completas, coherentes y cerradas.

---

## Competencia justificativa

El cruce global responde únicamente a la siguiente cuestión:

> **¿Permanece estructuralmente coherente el sistema completo cuando todas las responsabilidades, obligaciones y evidencias se consideran simultáneamente?**

La respuesta exige comprobar que no existen:

- responsabilidades sin fundamento;
- obligaciones sin responsabilidad;
- realizaciones sin obligación;
- evidencias sin realización;
- dependencias incompatibles;
- cadenas justificativas incompletas.

---

## Alcance de la demostración

El cruce global demuestra que:

- todas las cadenas de fundamentación permanecen cerradas;
- todas las dependencias poseen una justificación explícita;
- todas las obligaciones encuentran una realización verificable;
- todas las realizaciones conservan la separación de responsabilidades;
- la arquitectura constituye un sistema estructuralmente consistente.

---

_A partir de este punto se incorpora el cruce global consolidado, manteniendo íntegramente la matriz desarrollada durante la investigación. Únicamente se eliminan referencias evolutivas, históricas o relativas a versiones anteriores._

---

# Diagnóstico global

El análisis conjunto de las cuatro matrices permite establecer las siguientes conclusiones.

## Fundamentación

Toda responsabilidad arquitectónica deriva explícitamente de la teoría conceptual consolidada.

No existen componentes cuya incorporación carezca de fundamento.

---

## Corrección normativa

Todas las responsabilidades quedan gobernadas por obligaciones explícitas.

No aparecen restricciones incompatibles ni responsabilidades normativas sin destinatario.

---

## Verificabilidad

Toda obligación admite una realización objetiva y una evidencia igualmente objetiva.

No existen exigencias cuya comprobación dependa de interpretaciones externas al modelo.

---

## Consistencia transversal

Las relaciones entre responsabilidades, obligaciones, realizaciones y evidencias forman una cadena continua.

No aparecen saltos justificativos ni dependencias implícitas.

---

# Conclusiones

La arquitectura consolidada constituye un sistema estructuralmente justificado.

Las cuatro matrices demuestran conjuntamente que:

- toda responsabilidad posee un fundamento explícito;
- toda responsabilidad queda sometida a obligaciones necesarias;
- toda obligación dispone de mecanismos objetivos de realización y verificación;
- todas las relaciones permanecen estructuralmente coherentes cuando se consideran conjuntamente.

Cada matriz demuestra una propiedad distinta e irreducible:

| Matriz                                      | Propiedad demostrada     |
| ------------------------------------------- | ------------------------ |
| Derivación                                  | Necesidad                |
| Obligaciones normativas                     | Corrección normativa     |
| Responsabilidades realizativas y evidencias | Verificabilidad objetiva |
| Cruce global                                | Consistencia transversal |

La eliminación de cualquiera de ellas impediría justificar una propiedad arquitectónica necesaria que ninguna otra matriz puede demostrar.

En consecuencia, la justificación estructural de la arquitectura queda constituida por un sistema mínimo de demostraciones complementarias.

---

# Relación con el resto de la documentación

La presente justificación demuestra la coherencia estructural de la arquitectura consolidada.

No sustituye a la especificación arquitectónica, contenida en:

- `00-arquitectura-del-nucleo.md`

Tampoco sustituye a la validación fenomenológica desarrollada en:

- `02-auditoria-fenomenologica-final-de-cobertura.md`

Los tres documentos forman conjuntamente el bloque documental de ingeniería del núcleo:

```text
00 Arquitectura del núcleo
            │
            ▼
01 Cruce global de matrices
            │
            ▼
02 Auditoría fenomenológica final de cobertura
```

Cada documento posee una función principal distinta:

- **00** especifica.
- **01** justifica.
- **02** valida.

---

# Estado

Justificación estructural consolidada provisionalmente.

El documento constituye la referencia vigente para la fundamentación de la arquitectura del núcleo respecto del alcance actual de la teoría conceptual.

Toda modificación futura requerirá la reapertura formal de la auditoría correspondiente conforme al Protocolo de Consolidación Documental (PCD).
