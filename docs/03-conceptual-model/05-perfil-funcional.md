# 05-perfil-funcional.md

# Perfil funcional

## Propósito

Este documento identifica y justifica el conjunto mínimo de funciones estructurales que realizan las exigencias establecidas en `04-exigencias-estructurales.md`.

No describe todavía una firma concreta, un conjunto de primitivas ni una implementación determinada.

Su objetivo consiste en determinar qué funciones independientes debe realizar cualquier teoría estructural capaz de satisfacer las exigencias estructurales previamente identificadas.

---

# Posición dentro de la arquitectura

El perfil funcional constituye el nivel de transición entre las exigencias estructurales y las distintas realizaciones concretas de la teoría.

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
        ↓
Axiomas
        ↓
Reconstrucciones
        ↓
Modelo de plataforma
```

Todo lo que aparece a partir de este documento constituye una realización, formalización o consecuencia del perfil funcional aquí establecido.

---

# Objetivo

Determinar el conjunto mínimo de funciones estructurales necesarias para satisfacer las exigencias definidas en `04-exigencias-estructurales.md`.

La investigación no pretende fijar una firma concreta.

Pretende identificar las funciones irreducibles que cualquier realización válida deberá implementar.

---

# Hipótesis de trabajo

## PF-001

Toda teoría estructural capaz de satisfacer las exigencias actualmente aceptadas requiere tres familias funcionales independientes:

- individuación;
- articulación estructural;
- articulación evolutiva.

Las auditorías realizadas hasta la fecha apoyan provisionalmente que este conjunto constituye el perfil funcional mínimo conocido.

---

# Relación con las exigencias estructurales

Cada función constituye una realización suficiente de una exigencia estructural.

```text
ES-001
        ↓
CAN-F1

ES-002
        ↓
CAN-F2

ES-003
        ↓
CAN-F3
```

Las funciones no sustituyen a las exigencias.

Las realizan.

Nada obliga a que toda teoría válida implemente dichas exigencias mediante exactamente las mismas funciones.

Lo único exigible es que cualquier realización proporcione capacidades estructuralmente equivalentes.

---

# Perfil funcional actual

## CAN-F1 — Individuación

### Función

Permitir reconocer cuándo varios elementos deben tratarse como el mismo o como distintos.

### Realiza

ES-001.

### Consecuencias

Hace posible reconstruir:

- persistencia de identidad;
- identidad estructural;
- la base necesaria para las reconstrucciones evolutivas posteriores.

### Auditoría

Las auditorías realizadas indican que esta función no puede eliminarse ni absorberse por ninguna otra sin perder capacidad reconstructiva.

**Estado:** Consolidada provisionalmente.

---

## CAN-F2 — Articulación estructural

### Función

Permitir expresar organización estructural entre elementos previamente individuados.

### Realiza

ES-002.

### Consecuencias

Hace posible reconstruir:

- relaciones;
- dependencia;
- composición;
- teoría de la parte;
- teoría de la copia;
- demás extensiones conservativas de naturaleza estructural.

### Auditoría

Las auditorías realizadas indican que esta función no puede reducirse a CAN-F1 ni a CAN-F3.

**Estado:** Consolidada provisionalmente.

---

## CAN-F3 — Articulación evolutiva

### Función

Permitir expresar diferencias compatibles con la continuidad estructural de un mismo elemento.

### Realiza

ES-003.

### Consecuencias

Hace posible reconstruir:

- evolución;
- historia;
- transformación;
- versionado;
- reconstrucción de evoluciones.

### Auditoría

Las auditorías realizadas indican que esta función no puede reconstruirse únicamente mediante individuación y articulación estructural.

**Estado:** Consolidada provisionalmente.

---

# Independencia funcional

Las tres funciones son independientes.

Ninguna puede eliminarse sin dejar de satisfacer alguna de las exigencias estructurales.

Las auditorías realizadas muestran el siguiente resultado.

| Función | ¿Puede eliminarse? | ¿Puede absorberse por otra? | Estado   |
| ------- | ------------------ | --------------------------- | -------- |
| CAN-F1  | No                 | No                          | Revisada |
| CAN-F2  | No                 | No                          | Revisada |
| CAN-F3  | No                 | No                          | Revisada |

La independencia funcional no implica independencia lógica.

Cada función desempeña una responsabilidad propia dentro del perfil funcional.

---

# Relación entre funciones y exigencias

Aunque las funciones sean independientes, las exigencias que realizan mantienen una dependencia lógica.

```text
ES-001
Capacidad de distinguir elementos
        ↓
ES-002
Capacidad de organizarlos
        ↓
ES-003
Capacidad de expresar continuidad y diferencia
```

Esta dependencia refleja que:

- no puede organizarse aquello que previamente no puede distinguirse;
- no puede expresarse una transformación coherente sobre una organización inexistente.

La dependencia pertenece a las exigencias, no al perfil funcional.

---

# Relación con la firma

El perfil funcional no determina una firma concreta.

Una firma constituye únicamente una realización particular del perfil funcional.

La realización actualmente utilizada por la teoría es:

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

La investigación no afirma que ésta sea la única realización posible.

Afirma únicamente que constituye la realización mínima actualmente conocida.

## Neutralidad de realización

Firmas diferentes pueden implementar exactamente el mismo perfil funcional.

La equivalencia entre dichas firmas depende exclusivamente de que preserven las capacidades estructurales realizadas por CAN-F1, CAN-F2 y CAN-F3.

---

# Relación con las reconstrucciones

Las funciones del perfil permiten reconstruir conceptos más complejos sin ampliar el núcleo funcional.

Entre ellos:

- colección;
- historia;
- región estructural;
- configuración estructural;
- teoría de la parte;
- teoría de la copia;
- teoría de la dependencia.

Estas reconstrucciones se desarrollan en `12-reconstrucciones.md`.

---

# Completitud relativa

Las auditorías realizadas apoyan provisionalmente la siguiente tesis.

## PF-COMP-001

El perfil funcional actual es completo respecto del catálogo fenomenológico aceptado y respecto de las ampliaciones que satisfacen los criterios de admisión establecidos por la teoría.

La demostración detallada se desarrolla en:

- `14-auditoria-de-completitud.md`;
- `15-validacion-de-la-metateoria.md`.

---

# Criterio de ampliación

La incorporación de una nueva función estructural sólo estará justificada cuando se demuestre simultáneamente que:

1. el fenómeno pertenece legítimamente al dominio estructural;
2. no puede reconstruirse mediante ninguna combinación de CAN-F1, CAN-F2 y CAN-F3;
3. no constituye una reconstrucción derivada;
4. no es una especialización de una función existente;
5. no pertenece al marco lógico ni a la metateoría.

Mientras estas condiciones no se satisfagan conjuntamente, el perfil funcional permanecerá inalterado.

---

# Estado actual

Las auditorías realizadas hasta la fecha apoyan provisionalmente las siguientes conclusiones:

- CAN-F1 constituye una función irreducible;
- CAN-F2 constituye una función irreducible;
- CAN-F3 constituye una función irreducible;
- ninguna función adicional ha demostrado ser necesaria para reconstruir el catálogo fenomenológico aceptado ni las ampliaciones auditadas hasta el momento.

En consecuencia, el perfil funcional aquí descrito constituye el núcleo funcional provisionalmente consolidado de la teoría y el punto de partida para la construcción de la firma y de la caracterización axiomática.
