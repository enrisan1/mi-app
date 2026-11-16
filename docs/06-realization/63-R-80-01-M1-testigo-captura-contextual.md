# R-80-01-M1 — Testigo mínimo de captura contextual inmediata

**Fecha:** 16/11/2026  
**Estado:** ABIERTA; diseño realizativo y pruebas pendientes.  
**Obligación:** `OB-80-NEXT-01`.  
**Compromiso Product:** `C-PV-80-01 — Captura inmediata de aportaciones emergentes`.

---

# 1. Objetivo

Demostrar, en un alcance mínimo y falsable, que durante una actividad intelectual
en curso una persona puede conservar una aportación breve con una interrupción
operativa suficientemente reducida, mantener la actividad disponible y recuperar
posteriormente lo capturado.

La actuación no pretende todavía diseñar un sistema general de notas.

---

# 2. Situación humana

```text
actividad intelectual en curso
↓
aparece una aportación breve
↓
la persona desea conservarla
sin abandonar innecesariamente la actividad
```

El baseline ordinario debe representar una captura que exige cambiar materialmente
de contexto antes de registrar la aportación.

El testigo debe representar una captura contextual mínima dentro de la misma
situación operativa.

---

# 3. Criterio mínimo candidato — CR-80-01-M1

La suficiencia exige conjuntamente:

1. existe una actividad intelectual identificable en curso;
2. la persona puede introducir una aportación breve sin sustituir materialmente
   esa actividad por otra superficie principal;
3. una acción explícita conserva la aportación;
4. la conservación es fiable dentro del testigo;
5. queda una referencia temporal suficiente;
6. la actividad previa permanece disponible inmediatamente después de capturar;
7. lo capturado puede recuperarse posteriormente;
8. la captura no se incorpora automáticamente a la obra/actividad ni se clasifica;
9. el mecanismo no exige IA.

---

# 4. Separaciones necesarias

La actuación debe mantener:

```text
capturar
≠
clasificar
≠
incorporar a una obra
≠
priorizar
≠
generar con IA
```

Una aportación capturada puede quedar pendiente de tratamiento posterior.

No debe convertirse por defecto en:

- tarea;
- requisito;
- nota clasificada;
- contenido definitivo;
- backlog;
- instrucción para IA.

---

# 5. Baseline

El baseline debe exigir, como mínimo:

```text
actividad A
↓
abandonar/cambiar a superficie B
↓
registrar aportación
↓
volver a A
↓
reconstruir posición/contexto
```

No se presupone que este recorrido sea siempre inaceptable.

La prueba debe observar si existe una diferencia material frente a la captura
contextual.

---

# 6. Testigo mínimo

El testigo candidato debe permitir:

```text
actividad A visible
+
invocación discreta de captura
+
campo breve
+
acción explícita "Conservar"
+
marca temporal
+
cierre inmediato de captura
+
actividad A sigue disponible
+
consulta posterior de capturas
```

No se selecciona todavía:

- modal, popover, panel lateral o atajo concreto;
- almacenamiento definitivo;
- taxonomía;
- búsqueda;
- agrupación;
- inbox;
- sincronización;
- captura desde aplicaciones externas.

---

# 7. Observables humanos

## O-80-01-M1-01

La persona identifica claramente cuál es la actividad principal antes de capturar.

## O-80-01-M1-02

Puede registrar una aportación breve sin perder materialmente la situación previa.

## O-80-01-M1-03

Tras conservar, puede continuar la actividad sin reconstrucción relevante del
punto en que estaba.

## O-80-01-M1-04

La aportación queda disponible para recuperación posterior.

## O-80-01-M1-05

La referencia temporal permite distinguir cuándo fue capturada.

## O-80-01-M1-06

La captura no aparece automáticamente incorporada al contenido principal.

## O-80-01-M1-07

El mecanismo contextual reduce materialmente la fricción frente al baseline.

---

# 8. Falsadores

R-80-01-M1 debe considerarse insuficiente si:

1. capturar obliga en la práctica a abandonar la actividad principal;
2. el contexto previo se pierde y debe reconstruirse de forma relevante;
3. la aportación no queda conservada de manera verificable;
4. no puede recuperarse posteriormente;
5. la captura altera automáticamente la actividad principal;
6. la marca temporal no permite distinguir capturas de forma suficiente;
7. la supuesta mejora frente al baseline no produce diferencia humana material;
8. la solución mínima sólo funciona añadiendo clasificación, IA o un sistema de
   organización no comprometido.

---

# 9. Estrategia de validación

La secuencia será:

```text
M1-A
→ construir baseline mínimo

M1-B
→ construir captura contextual mínima

TH-80-01-01
→ contraste humano directo baseline vs testigo

si aparece pérdida residual
→ reducirla antes de ampliar alcance
```

No se abrirá organización posterior mientras no exista evidencia de que sea
necesaria para satisfacer C-PV-80-01.

---

# 10. Estado

```text
OB-80-NEXT-01
→ ACEPTADA

R-80-01-M1
→ ABIERTA

diseño realizativo
→ PENDIENTE

tests
→ PENDIENTES

contraste humano
→ PENDIENTE
```
