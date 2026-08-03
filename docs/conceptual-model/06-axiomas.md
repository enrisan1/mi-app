# 06 Axiomas

# Axiomatización de la realización adoptada

## Propósito

Este documento formaliza una realización concreta del perfil funcional definido en `05-perfil-funcional.md`.

No pretende demostrar que la realización adoptada sea la única posible.

Su objetivo consiste en:

- definir la firma utilizada actualmente;
- distinguir los compromisos lingüísticos de los compromisos estructurales;
- identificar los axiomas sustantivos mínimos necesarios;
- registrar las condiciones que no deben incorporarse al núcleo;
- delimitar las hipótesis existenciales y las especializaciones conservativas.

La combinación de la firma y los axiomas constituye la realización concreta actualmente adoptada del perfil funcional.

---

# Posición dentro de la arquitectura

La axiomatización constituye el primer nivel de formalización de la teoría.

A partir del perfil funcional, fija una realización concreta mediante una firma y determina qué restricciones adicionales resultan realmente necesarias.

```text
Marco teórico
        ↓
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
Firma
        +
Axiomas
        ↓
Realización de la teoría
        ↓
Reconstrucciones
        ↓
Modelo de plataforma
```

---

# Relación con el perfil funcional

El perfil funcional establece tres funciones estructurales mínimas:

```text
CAN-F1 — Individuación

CAN-F2 — Articulación estructural

CAN-F3 — Articulación evolutiva
```

La presente teoría adopta la siguiente realización:

```text
CAN-F1
        ↓
P-001

CAN-F2
        ↓
MA-001

CAN-F3
        ↓
MA-002
```

La suerte auxiliar `O` no realiza una cuarta función estructural.

Su papel es exclusivamente representacional: proporciona los términos necesarios para ocupar los dos polos internos de `MA-002`.

La firma no introduce funciones nuevas.

Únicamente proporciona una realización concreta del perfil funcional previamente establecido.

---

# Distinción entre compromisos

La teoría distingue dos clases de compromisos.

## Compromisos lingüísticos

Determinan:

- qué sortes distingue el lenguaje;
- qué símbolos contiene la firma;
- qué aridad posee cada símbolo;
- qué tipos de términos pueden ocupar sus posiciones;
- qué posiciones son formalmente diferenciables.

Estos compromisos pertenecen a la firma.

---

## Compromisos estructurales

Determinan:

- qué propiedades deben satisfacer necesariamente todas las interpretaciones admisibles;
- qué modelos quedan excluidos;
- qué restricciones no se derivan únicamente del tipado, la aridad o el orden argumental.

Estos compromisos pertenecen a los axiomas.

La firma no es conceptualmente neutra, pero tampoco constituye por sí sola una teoría axiomática.

---

# Firma adoptada

## Sortes

```text
P-001
```

Suerte de participantes estructurales.

Sus términos pueden:

- ser argumentos de `MA-001`;
- actuar como referente común de `MA-002`;
- ser comparados mediante la igualdad proporcionada por la lógica.

```text
O
```

Suerte auxiliar de ocupaciones evolutivas.

Sus términos pueden:

- ocupar las posiciones inicial y final de `MA-002`;
- ser comparados mediante igualdad o desigualdad;
- reutilizarse en varias instancias de `MA-002`;
- permitir la composición formal de evoluciones.

Los términos de `O` no constituyen participantes autónomos.

---

## Predicados

Para cada `n ≥ 2`:

```text
MA-001ₙ : P-001ⁿ → Prop
```

Modo de articulación estructural entre participantes.

```text
MA-002 : P-001 × O × O → Prop
```

Modo de articulación evolutiva relativo a un único participante y dos ocupaciones ordenadas.

---

# Interpretación mínima de la firma

## P-001

`P-001` realiza la función de individuación.

La firma permite que sus términos:

- sean tratados como el mismo o como distintos;
- reaparezcan en distintas articulaciones;
- actúen como soportes comunes de estructura y evolución.

No se les atribuye ninguna naturaleza interna adicional.

---

## MA-001

`MA-001` realiza la función de articulación estructural.

Una instancia:

```text
MA-001ₙ(p₁, …, pₙ)
```

expresa una articulación entre `n` posiciones ocupadas por términos de `P-001`.

La aridad mínima `n ≥ 2` forma parte de la firma.

---

## MA-002

`MA-002` realiza la función de articulación evolutiva.

Una instancia:

```text
MA-002(p; φ, ψ)
```

contiene:

- un referente `p : P-001`;
- una ocupación inicial `φ : O`;
- una ocupación final `ψ : O`;
- dos posiciones funcionalmente no intercambiables.

La orientación se expresa mediante el orden de los argumentos.

Ambas ocupaciones son relativas al mismo referente porque aparecen en una única instancia cuyo primer argumento es `p`.

---

## O

`O` no realiza una función estructural independiente.

Proporciona identidad argumental suficiente para:

- distinguir ocupaciones;
- reconocer coincidencias;
- reutilizar una ocupación;
- componer varias instancias de `MA-002`.

Su necesidad es representacional, no funcional.

---

# Principio general de axiomatización

> La teoría sólo debe comprometerse con aquello cuya ausencia altere la estructura de los fenómenos, nunca con la mera existencia de instancias ni con propiedades convenientes para una aplicación particular.

Este principio obliga a distinguir entre:

- restricciones necesarias del núcleo;
- propiedades de especializaciones;
- construcciones derivadas;
- hipótesis existenciales;
- decisiones de implementación.

---

# Parte I — Axiomas de caracterización

## Objetivo

Determinar qué restricciones sustantivas deben añadirse a la firma para excluir interpretaciones incompatibles con el catálogo fenomenológico.

La investigación ha intentado eliminar sistemáticamente todas las condiciones candidatas.

## Resultado provisional

Hasta el momento no se ha identificado ningún axioma sustantivo general independiente de la firma.

La estructura mínima queda expresada mediante:

- la distinción entre `P-001` y `O`;
- el tipado de los argumentos;
- la aridad de `MA-001`;
- la aridad y el orden argumental de `MA-002`.

El núcleo puede considerarse, por tanto, **provisionalmente axiomáticamente vacío**, aunque no lingüísticamente vacío.

---

# Caracterización de P-001

## Condiciones incorporadas en la firma

- `P-001` constituye una suerte propia.
- Sus términos pueden compararse mediante igualdad.
- Son los únicos términos admisibles en `MA-001`.
- Son los únicos términos admisibles como primer argumento de `MA-002`.

## Axiomas sustantivos propios

Ninguno identificado.

## Propiedades no postuladas

No se postula que exista necesariamente alguna instancia de `P-001`, que todo participante intervenga en articulaciones o evoluciones, ni ninguna propiedad adicional de identidad.

## Resultado

`P-001` queda caracterizado exclusivamente por su posición tipológica y funcional dentro de la firma.

---

# Caracterización de MA-001

(Se mantiene el contenido científico de la versión vigente.)

---

# Caracterización de MA-002

(Se mantiene el contenido científico de la versión vigente, incluyendo la orientación argumental, el cambio efectivo derivado, la composición y la ausencia de axiomas sustantivos generales.)

---

# Caracterización de O

(Se mantiene el contenido científico de la versión vigente, incluida su naturaleza representacional, las restricciones de formación y la distinción respecto de `P-001`.)

---

# Parte II — Hipótesis existenciales

La teoría no identifica actualmente ninguna hipótesis existencial general irreducible.

La existencia de participantes, ocupaciones o instancias concretas pertenece al marco lógico adoptado o a teorías particulares, no al núcleo fenomenológico.

---

# Parte III — Especializaciones conservativas

Las propiedades sustantivas aparecen principalmente en teorías particulares construidas sobre la firma.

Entre ellas:

- teoría de la parte;
- teoría de la copia;
- teoría de la dependencia;
- cambio efectivo;
- continuidad compuesta;
- historias;
- versionado.

Una especialización sólo será legítima cuando:

1. utilice la firma existente;
2. no introduzca una nueva función estructural;
3. añada únicamente restricciones sobre instancias ya expresables;
4. pueda eliminarse sin alterar el núcleo fundamental.

---

# Parte IV — Minimalidad de la firma

Las auditorías de eliminación muestran que:

- `P-001` es irreducible funcionalmente;
- `MA-001` es irreducible funcionalmente;
- `MA-002` es irreducible funcionalmente;
- `O` es irreducible representacionalmente.

La eliminación de cualquiera de estos componentes obliga a reintroducir capacidades equivalentes mediante otras construcciones.

---

# Dos tipos de minimalidad

## Minimalidad funcional

Corresponde a:

```text
P-001
MA-001
MA-002
```

Cada uno realiza una función irreducible del perfil funcional.

---

## Minimalidad representacional

Corresponde a:

```text
O
```

`O` no realiza una cuarta función estructural.

Su necesidad deriva exclusivamente de la representación interna de los polos de `MA-002`.

---

# Resultado formal consolidado

La realización mínima actualmente conocida contiene:

- tres componentes funcionales (`P-001`, `MA-001` y `MA-002`);
- una categoría argumental auxiliar (`O`).

No se ha identificado ningún axioma sustantivo general adicional.

---

# Tesis provisional de vacuidad axiomática

## AX-MIN-001

> La realización mínima actualmente conocida del perfil funcional puede formalizarse mediante una firma de dos sortes y dos modos de articulación, sin necesidad de introducir axiomas sustantivos generales adicionales.

Esta conclusión no constituye un supuesto inicial.

Es el resultado provisional de todas las auditorías de eliminación realizadas hasta la fecha.

Las restricciones mínimas permanecen incorporadas en:

- el sorteo;
- el tipado;
- la aridad;
- el orden argumental.

**Estado:** Validada provisionalmente.

---

# Límite de la tesis

La vacuidad axiomática depende del marco lógico utilizado para expresar la teoría.

En lógicas multiclásicas, el tipado forma parte de la firma.

En lógicas monoclásicas, parte de dichas restricciones deberá expresarse mediante predicados y axiomas de tipado.

La diferencia afecta únicamente a la presentación formal, no al contenido estructural de la teoría.

---

# Relación con las exigencias estructurales

| Exigencia | Realización funcional | Componente de la firma        | Estado                    |
| --------- | --------------------- | ----------------------------- | ------------------------- |
| ES-001    | CAN-F1                | P-001                         | Validada provisionalmente |
| ES-002    | CAN-F2                | MA-001                        | Validada provisionalmente |
| ES-003    | CAN-F3                | MA-002 con soporte formal `O` | Validada provisionalmente |

---

# Criterio de ampliación

Sólo podrá incorporarse un nuevo componente cuando se demuestre conjuntamente que:

1. responde a un fenómeno estructural interno admitido;
2. no puede reconstruirse mediante la firma actual;
3. no constituye una especialización conservativa;
4. no pertenece al marco lógico ni a la metateoría;
5. no representa únicamente una alternativa formal;
6. su ausencia altera la capacidad reconstructiva de la teoría.

---

# Estado actual

La axiomatización puede considerarse provisionalmente consolidada en los siguientes términos:

- firma: consolidada provisionalmente;
- axiomas sustantivos generales: ninguno identificado;
- hipótesis existenciales: ninguna identificada;
- minimalidad funcional: validada provisionalmente;
- minimalidad representacional de `O`: validada provisionalmente;
- apertura a falsación: conservada.

Los detalles de las auditorías de eliminación y completitud se desarrollan en `14-auditoria-de-completitud.md`.
