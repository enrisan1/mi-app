# R-80-04-M1 — Testigo mínimo de apoyo IA separado de la obra

**Fecha:** 16/11/2026  
**Estado:** ABIERTA; reducción del baseline, diseño realizativo y pruebas pendientes.  
**Obligación:** `OB-80-NEXT-03`.  
**Compromiso Product:** `C-PV-80-04 — Apoyo auxiliar de IA separado de la obra`.

---

# 1. Objetivo

Demostrar, en un alcance mínimo y falsable, que una persona puede disponer de
apoyo realmente procedente de IA durante una actividad de creación manteniéndolo
funcionalmente separado de la obra, de modo que recibir o conservar ese apoyo no
lo convierta por sí mismo en contenido de la obra.

La actuación deberá además contrastar si esa frontera produce una diferencia
humana material frente a una alternativa sin separación funcional suficiente.

---

# 2. Situación humana

```text
obra en curso
+
apoyo generado por IA
↓
la persona quiere consultar ese apoyo

sin que

apoyo IA
→ se convierta automáticamente en obra
```

La diferencia constitutiva es:

```text
contenido de la obra
≠
apoyo auxiliar de IA
```

---

# 3. Criterio mínimo candidato — CR-80-04-M1

La suficiencia exige conjuntamente:

1. existe una obra o actividad creativa identificable;
2. existe al menos una aportación auxiliar de procedencia IA acreditable;
3. la aportación está asociada a esa obra;
4. el apoyo permanece distinguible del contenido de la obra;
5. recibir o conservar el apoyo no modifica automáticamente la obra;
6. la persona puede consultar el apoyo sin que éste adquiera por sí mismo
   estatuto de contenido;
7. la procedencia IA es suficientemente reconocible;
8. la separación funcional produce una diferencia humana material frente a un
   baseline sin esa frontera suficiente.

---

# 4. Separaciones necesarias

La actuación debe preservar:

```text
apoyo IA
≠
obra

procedencia
≠
incorporación

consultar
≠
adoptar

separación funcional
≠
simple decoración visual
```

No debe introducir por necesidad:

- generación continua;
- agente autónomo;
- múltiples modelos;
- edición automática;
- incorporación automática;
- razonamiento interno del modelo;
- historial universal;
- conservación indefinida;
- integración en App;
- arquitectura definitiva.

---

# 5. Incertidumbres que deben reducirse antes de construir

## U1 — baseline justo

Debe fijarse una alternativa que use el mismo apoyo IA sin una frontera funcional
suficiente, evitando construir un baseline artificialmente peor.

## U2 — procedencia IA real

Debe definirse una forma mínima de acreditar que al menos una aportación usada
en el contraste procede realmente de una IA.

Un simple fixture etiquetado como “IA” no basta para cerrar esta obligación.

## U3 — diferencia entre separación y etiquetado

Debe poder distinguirse:

```text
apoyo mezclado o copresente dentro de la superficie de obra
+
marca de procedencia

frente a

apoyo funcionalmente separado
+
obra preservada
```

para comprobar si la separación añade valor independiente.

---

# 6. Estrategia de validación propuesta

```text
M1-A
→ baseline con el mismo apoyo IA
→ sin frontera funcional suficiente

M1-B
→ apoyo IA funcionalmente separado de la obra

TH-80-04-01
→ contraste humano directo
```

No se diseñarán todavía componentes ni tests hasta reducir U1 y U2 de forma
suficiente.

---

# 7. Falsadores iniciales

R-80-04-M1 deberá considerarse insuficiente si:

1. el apoyo usado no tiene procedencia IA acreditable;
2. el apoyo se incorpora automáticamente a la obra;
3. la obra cambia por el mero hecho de recibir o conservar apoyo;
4. la separación es sólo una etiqueta sin diferencia funcional;
5. el baseline pierde información o recibe apoyo de peor calidad;
6. la persona no observa diferencia material entre separación y alternativa;
7. el testigo sólo funciona introduciendo agentes, edición automática o
   infraestructura no comprometida.

---

# 8. Estado

```text
OB-80-NEXT-03
→ ACEPTADA

R-80-04-M1
→ ABIERTA

reducción baseline/procedencia
→ PENDIENTE

diseño realizativo
→ PENDIENTE

tests
→ PENDIENTES

contraste humano
→ PENDIENTE
```
