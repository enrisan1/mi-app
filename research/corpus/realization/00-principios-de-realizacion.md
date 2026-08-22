# Principios de realización

## Propósito

Este documento identifica y justifica los principios generales que gobiernan toda realización válida del núcleo.

No define todavía componentes software concretos, patrones de diseño, tecnologías o decisiones de implementación.

Su objetivo consiste en establecer las condiciones generales que debe satisfacer cualquier transformación sobre una realización para preservar íntegramente la arquitectura establecida como aplicable dentro del alcance de la investigación.

---

# Posición dentro de la arquitectura

```text
Teoría
        ↓
Ingeniería del núcleo
        ↓
Implementación del núcleo
        ↓
Principios de realización
        ↓
Realización de las competencias
        ↓
Realización de los contratos
        ↓
Realización del significado
        ↓
Organización del núcleo
        ↓
Puntos de extensión
```

Los principios de realización constituyen el puente entre la arquitectura ya consolidada y las distintas organizaciones software capaces de realizarla fielmente.

No amplían la arquitectura.

Establecen las condiciones bajo las cuales una realización puede evolucionar sin dejar de representar el mismo núcleo.

---

# Objetivo

Determinar el conjunto mínimo de principios que permiten gobernar las transformaciones conservativas de una realización del núcleo.

La investigación no pretende descubrir nuevos principios arquitectónicos.

Pretende determinar bajo qué condiciones una transformación puede considerarse una realización conservativa de la arquitectura previamente consolidada.

Este documento presupone la atribución de las realizaciones sobre las que operan dichas transformaciones y no establece por sí mismo criterios para determinar qué configuración materializa una competencia concreta.

---

# Hipótesis de trabajo

## HR-001

> **Toda realización válida del núcleo deberá preservar íntegramente los invariantes arquitectónicos establecidos como aplicables a dicha realización.**

La investigación intentará falsar esta hipótesis.

Si se demuestra que alguna transformación legítima requiere modificar dichos invariantes o incorporar nuevos principios arquitectónicos, la hipótesis será rechazada.

Si, por el contrario, toda transformación legítima puede explicarse mediante la preservación de los principios ya consolidados, la hipótesis quedará provisionalmente aceptada.

---

# Consecuencia metodológica

La fase de realización no parte de la búsqueda de nuevos conceptos fundamentales.

Parte de la hipótesis de que la arquitectura del núcleo ya se encuentra completamente determinada.

Su objeto de estudio consiste en determinar qué transformaciones permiten reorganizar y evolucionar una realización software preservando íntegramente dicha arquitectura.

---

# Resultado de la investigación

La investigación comenzó planteando la posibilidad de que la fase de realización incorporara nuevos principios arquitectónicos necesarios para completar la teoría del núcleo.

Para ello se intentó construir contraejemplos que exigieran:

- nuevas competencias fundamentales;
- nuevos invariantes arquitectónicos;
- nuevas responsabilidades realizativas;
- nuevas formas irreducibles de cooperación;
- nuevos criterios de equivalencia arquitectónica;
- nuevos principios normativos para autorizar transformaciones.

Ninguno de estos intentos produjo un fenómeno irreducible adicional.

Las distintas propuestas acabaron reduciéndose sistemáticamente a principios establecidos como aplicables dentro del alcance de la investigación, o bien constituyeron mecanismos particulares para realizar dichos principios.

Como consecuencia, la investigación acepta provisionalmente la siguiente conclusión.

> **La fase de realización no amplía la arquitectura del núcleo.**

Su objeto consiste en gobernar las transformaciones que pueden aplicarse sobre una realización sin modificar los principios arquitectónicos previamente consolidados.

---

# Objeto de la realización

La unidad fundamental de esta fase no es el componente software, la tecnología utilizada ni la organización concreta del código.

La unidad fundamental de estudio es la **transformación conservativa**.

Una transformación conservativa consiste en una operación que modifica una realización preservando íntegramente los invariantes arquitectónicos del núcleo.

En consecuencia, dos realizaciones pueden diferir completamente en:

- organización del código;
- paradigma de programación;
- estructura modular;
- mecanismos técnicos;
- infraestructura utilizada;

y seguir constituyendo la misma realización arquitectónica siempre que preserven íntegramente dichos invariantes.

---

# Naturaleza de los principios de realización

Los principios de realización no describen nuevas propiedades del núcleo.

Describen las condiciones bajo las cuales una transformación puede considerarse arquitectónicamente legítima.

En consecuencia, estos principios pertenecen al gobierno de la evolución de una realización y no a la definición de la arquitectura del núcleo.

Su finalidad consiste en garantizar que toda evolución preserve íntegramente los resultados establecidos como aplicables a la realización considerada.

---

# Sistema normativo de la realización

La investigación identifica provisionalmente tres dimensiones irreducibles para autorizar una transformación conservativa.

## PRR-1 — Justificación conservativa

Toda transformación deberá disponer de una justificación suficiente que explique por qué preservará los invariantes arquitectónicos potencialmente afectados.

---

## PRR-2 — Proporcionalidad de las garantías

La profundidad de la justificación y de las garantías exigidas deberá ser proporcional al riesgo arquitectónico de la transformación.

---

## PRR-3 — Reconstruibilidad de la legitimidad

La legitimidad de una transformación deberá permanecer reconstruible con independencia del mecanismo concreto utilizado para conservar dicha reconstrucción.

La investigación no impone un mecanismo específico de trazabilidad.

Únicamente exige que la legitimidad de la autorización pueda reconstruirse posteriormente.

---

Estos tres principios constituyen provisionalmente el sistema normativo mínimo de la fase de realización.

La investigación permanecerá abierta a futura refutación si apareciera alguna transformación legítima cuya autorización requiriese un razonamiento irreducible a cualquiera de estos tres principios.

---

# Alcance de los principios de realización

Los principios definidos en este documento constituyen el marco normativo común para toda la fase de realización.

Ningún documento posterior de esta fase deberá introducir transformaciones que contradigan estos principios.

Toda transformación propuesta sobre una realización deberá justificarse conforme a ellos.

En consecuencia:

- `01-realizacion-de-las-competencias.md` deberá determinar cómo realizar las competencias preservando íntegramente los invariantes arquitectónicos.
- `02-realizacion-de-los-contratos.md` deberá aplicar los mismos principios a la cooperación entre competencias.
- `03-realizacion-del-significado.md` deberá estudiar las transformaciones que afectan a la realización del significado sin modificar su legitimidad arquitectónica.
- `04-organizacion-del-nucleo.md` deberá analizar distintas organizaciones software compatibles con una misma arquitectura.
- `05-puntos-de-extension.md` deberá establecer las condiciones bajo las cuales una extensión puede incorporarse sin alterar el núcleo consolidado.

Todos estos documentos constituyen aplicaciones particulares de los principios establecidos en este documento.

Ninguno de ellos podrá introducir principios realizativos adicionales sin justificar previamente la insuficiencia del sistema normativo aquí consolidado.

---

# Relación con otros cuerpos de investigación

Realization se conserva actualmente como un cuerpo de investigación autónomo dentro de:

```text
research/corpus/realization/
```

Su desarrollo histórico fue formulado en relación con resultados procedentes de la teoría conceptual, Engineering e Implementation.

Estas relaciones deberán interpretarse de acuerdo con el contexto en el que fueron investigadas.

La conservación de Realization bajo `research/corpus/` no convierte dichos cuerpos en fases necesarias de una secuencia de desarrollo del proyecto principal ni obliga a adoptar automáticamente sus resultados como presupuestos de toda investigación realizativa.

Cuando una investigación de Realization requiera utilizar un resultado conservado en otro cuerpo, deberá establecer explícitamente:

```text
resultado utilizado
        ↓
pertinencia para la cuestión investigada
        ↓
alcance de su aplicabilidad
        ↓
consecuencias realizativas justificadas
```

La mera existencia de un resultado en otro cuerpo de `research/corpus/` no basta para convertirlo en premisa necesaria de Realization.

Dentro de una investigación concreta podrán existir dependencias justificadas entre resultados.

Esto no implica una dependencia general entre los cuerpos documentales que los contienen.

---

# Criterio de reapertura

Toda transformación estudiada dentro de Realization deberá evaluarse respecto de los resultados que hayan sido establecidos como aplicables a la cuestión concreta.

Cuando durante su justificación se demuestre que la transformación entra en conflicto con alguno de esos resultados, deberá determinarse primero la naturaleza de la discrepancia.

Podrá tratarse, entre otros casos, de:

```text
error en la atribución de aplicabilidad

insuficiencia del resultado utilizado

falsador del resultado conservado

cambio de alcance

problema propio de Realization

problema perteneciente a otro cuerpo
```

Sólo cuando exista fundamento independiente para ello deberá reabrirse el documento o cuerpo correspondiente.

Por tanto:

```text
conflicto detectado
        ⇏
reapertura automática de una fase anterior
```

sino:

```text
conflicto detectado
        ↓
identificación de su naturaleza
        ↓
localización del resultado afectado
        ↓
justificación de la actuación correspondiente
```

Realization no constituye por sí misma un mecanismo general para modificar resultados pertenecientes a otros cuerpos.

Su competencia queda determinada por los problemas realizativos investigados en sus propios documentos y por las dependencias concretas cuya pertinencia haya sido establecida.

---

# Conclusión

La investigación realizada en este documento acepta provisionalmente la hipótesis de trabajo.

No se ha encontrado ninguna transformación legítima que exija ampliar el conjunto de principios arquitectónicos establecidos como aplicables dentro del alcance de esta investigación.

Como consecuencia, la investigación concluye provisionalmente que una realización válida del núcleo puede evolucionar mediante transformaciones conservativas gobernadas por el sistema normativo definido en este documento.

La presente conclusión permanecerá abierta a futura refutación si apareciera una transformación cuya legitimidad no pudiera justificarse mediante los principios aquí establecidos.
