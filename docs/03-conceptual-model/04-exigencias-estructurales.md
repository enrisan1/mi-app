# 04-exigencias-estructurales.md

# Exigencias estructurales

## Propósito

Este documento establece las exigencias estructurales mínimas que debe satisfacer cualquier teoría estructural capaz de reconstruir el catálogo fenomenológico definido por esta investigación.

Las exigencias estructurales no describen una firma concreta, un conjunto específico de primitivas ni una implementación determinada.

Su función consiste en delimitar las capacidades mínimas que toda teoría válida debe proporcionar para reconstruir los fenómenos fundamentales, con independencia del formalismo mediante el que dichas capacidades se realicen.

---

# Posición dentro de la arquitectura

Las exigencias estructurales constituyen el nivel de transición entre la reducción fenomenológica y la construcción de la teoría.

Se obtienen a partir del análisis de los fenómenos irreducibles y sirven de base para derivar posteriormente el perfil funcional.

```text
Presupuestos metateóricos
        ↓
Marco lógico
        ↓
Catálogo fenomenológico
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

---

# Alcance

Las exigencias estructurales no determinan:

- qué primitivas debe poseer una teoría;
- cómo deben implementarse dichas primitivas;
- cuál debe ser la firma mínima;
- qué símbolos deben utilizarse;
- qué axiomas concretos deben adoptarse.

Únicamente determinan qué capacidades mínimas debe ofrecer una teoría para reconstruir el catálogo fenomenológico.

Distintas teorías pueden satisfacer exactamente las mismas exigencias mediante perfiles funcionales diferentes.

Las exigencias tampoco delimitan el dominio material de aplicación.

Describen exclusivamente las capacidades necesarias para reconstruir los fenómenos estructurales previamente aceptados.

---

# Relación con el marco lógico

Las exigencias estructurales presuponen un marco lógico que proporciona, entre otros recursos:

- variables;
- igualdad;
- desigualdad;
- cuantificación;
- sustitución;
- co-referencia;
- reglas generales de inferencia.

Estos recursos no forman parte de las exigencias estructurales.

Las exigencias comienzan allí donde termina el formalismo lógico y comienza la caracterización estructural del dominio.

---

# Relación con los presupuestos metateóricos

La teoría presupone determinadas condiciones generales que no pretende reconstruir.

Entre ellas:

- la posibilidad de establecer diferencias;
- la posibilidad de referirse a elementos del modelo;
- la existencia de modelos susceptibles de interpretación.

Estos presupuestos pertenecen a la metateoría y quedan fuera del alcance del presente documento.

Las exigencias describen cómo una teoría utiliza dichos presupuestos para reconstruir el dominio, no cómo los fundamenta.

---

# Relación con la reducción fenomenológica

Las exigencias estructurales se formulan únicamente sobre fenómenos previamente aceptados como pertenecientes al dominio estructural.

No constituyen todavía funciones ni primitivas.

Representan el nivel intermedio entre la descripción de los fenómenos y la construcción de una teoría capaz de reconstruirlos.

---

# Exigencias estructurales

## ES-001 — Capacidad de distinguir elementos relevantes

Toda teoría válida debe proporcionar un mecanismo estructural que permita tratar como distinguibles aquellos elementos cuya diferencia resulte necesaria para reconstruir el catálogo fenomenológico.

Esta exigencia:

- no determina cómo debe realizarse dicha distinción;
- no presupone una noción concreta de identidad;
- no impone una representación determinada.

Únicamente exige que la teoría disponga de algún mecanismo capaz de distinguir los elementos cuando ello resulte necesario para explicar los fenómenos.

---

## ES-002 — Capacidad de expresar organización estructural

Toda teoría válida debe poder expresar organización estructural entre los elementos distinguidos mediante ES-001.

La teoría debe ser capaz de representar dependencias, conexiones o articulaciones suficientes para reconstruir el catálogo fenomenológico.

Esta exigencia no determina la naturaleza concreta de dichas articulaciones.

Únicamente exige que exista algún mecanismo capaz de expresarlas.

---

## ES-003 — Capacidad de expresar continuidad estructural a través de la diferencia

Toda teoría válida debe poder expresar diferencias compatibles con la continuidad estructural de los elementos previamente organizados.

La teoría debe permitir distinguir entre:

- continuidad;
- diferencia;
- cambio efectivo.

No se prescribe el mecanismo mediante el cual dicha continuidad sea representada.

Únicamente se exige que pueda reconstruirse.

---

# Dependencia entre las exigencias

Las exigencias no constituyen una colección independiente.

Existe entre ellas una dependencia lógica.

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

Las exigencias forman, por tanto, una jerarquía de capacidades y no una simple enumeración de requisitos independientes.

---

# Independencia respecto del perfil funcional

Las exigencias estructurales no deben confundirse con el perfil funcional.

Las exigencias establecen **qué capacidades** debe satisfacer una teoría.

El perfil funcional establece **qué funciones** realizan efectivamente dichas capacidades.

Una misma exigencia puede admitir distintas realizaciones funcionales.

Las exigencias son, por tanto, más generales que cualquier perfil funcional concreto.

---

# Independencia respecto de la firma

Las exigencias tampoco deben confundirse con la firma.

Una firma constituye únicamente una realización concreta del perfil funcional.

Nada obliga a que todas las teorías utilicen las mismas primitivas.

Lo único exigible es que cualquier firma permita realizar un perfil funcional capaz de satisfacer las exigencias estructurales.

---

# Criterio de legitimidad

Una teoría satisface este documento cuando proporciona mecanismos suficientes para cumplir las tres exigencias estructurales aquí establecidas.

La forma concreta de dichos mecanismos pertenece al perfil funcional y a la firma adoptados por cada teoría.

La suficiencia de estas exigencias será posteriormente contrastada mediante la auditoría del perfil funcional y la auditoría de completitud.

---

# Consecuencias metodológicas

De las exigencias estructurales se derivan los siguientes principios de trabajo.

## Minimalidad

No debe introducirse ninguna función adicional mientras las exigencias puedan satisfacerse mediante las ya existentes.

---

## Equivalencia funcional

Dos perfiles funcionales diferentes serán estructuralmente equivalentes si satisfacen exactamente las mismas exigencias estructurales.

---

## Neutralidad de la firma

La elección de una firma concreta no altera las exigencias estructurales mientras conserve las capacidades requeridas por este documento.

---

## Invarianza estructural

Toda modificación de la firma que preserve el cumplimiento de las exigencias estructurales constituye una extensión conservativa de la teoría.

---

# Estado de la teoría

Las auditorías realizadas hasta la fecha no han identificado ninguna exigencia estructural adicional necesaria para reconstruir el catálogo fenomenológico aceptado.

Las tres exigencias formuladas en este documento constituyen, por tanto, el conjunto mínimo provisionalmente consolidado sobre el que se deriva el perfil funcional.

Su aceptación definitiva continúa abierta a futuras auditorías de completitud y a la aparición de posibles contraejemplos.
