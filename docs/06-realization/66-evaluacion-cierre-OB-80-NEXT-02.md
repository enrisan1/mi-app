# Evaluación de cierre de OB-80-NEXT-02

**Fecha:** 16/11/2026  
**Estado:** CIERRE BLOQUEADO POR INCONSISTENCIA FORMAL ÚNICA.  
**Obligación:** `OB-80-NEXT-02`.  
**Actuación:** `R-80-03-M1`.  
**Compromiso Product:** `C-PV-80-03 — Identidad autoral elegible`.

---

# 1. Pregunta

Determinar si la evidencia de R-80-03-M1 basta para declarar realizada
OB-80-NEXT-02 o si queda alguna condición constitutiva pendiente.

---

# 2. Evidencia disponible

```text
M1-A
→ 3/3 GREEN

M1-B
→ 8/8 GREEN

TH-80-03-01
→ POSITIVO
→ CERRADO en el alcance observado

R-80-03-M1
→ SUFICIENCIA MATERIAL OBSERVADA
```

La evidencia demuestra en el caso ejercido:

- identidad operativa principal identificable;
- identidades autorales distintas;
- selección explícita por obra;
- identidad operativa estable;
- reutilización de una misma identidad autoral;
- obras distintas con identidades autorales distintas;
- asociación obra↔autoría persistente tras nueva ejecución;
- selección de autoría sin modificación automática del contenido;
- firma no forzada a la identidad operativa.

---

# 3. Comprobación contra C-PV-80-03

Product compromete:

> El producto deberá poder permitir que una persona mantenga una identidad
> operativa principal y elija, para una obra o publicación, una identidad
> autoral reutilizable distinta cuando así lo determine.

El testigo satisface materialmente ese núcleo en el alcance observado.

Product no exige expresamente:

```text
cambiar retrospectivamente la identidad autoral
de una obra ya constituida
```

---

# 4. Inconsistencia formal detectada

El documento de priorización 85, en la formulación aceptada de OB-80-NEXT-02,
incluyó como condición mínima:

```text
7. cambiar la identidad autoral de una obra
   no modifica automáticamente su contenido
```

Posteriormente, durante el diseño TDD de R-80-03-M1, esa condición fue corregida
a:

```text
seleccionar la identidad autoral de una obra
no modifica automáticamente su contenido
```

La corrección tuvo fundamento metodológico:

- cambiar autoría después de constituir una obra no forma parte del compromiso
  Product;
- exigirlo habría añadido una capacidad no comprometida;
- los tests se mantuvieron deliberadamente neutrales respecto de edición
  posterior de autoría.

Sin embargo:

```text
criterio de actuación corregido
≠
modificación formal automática
  de una obligación ya aceptada
```

Por tanto, no puede declararse que todas las condiciones literales de
OB-80-NEXT-02 estén satisfechas mientras el texto aceptado conserve esa
formulación más fuerte.

---

# 5. Estado de las condiciones

| Condición aceptada | Estado |
| --- | --- |
| identidad operativa principal | SATISFECHA |
| identidad autoral distinta y reutilizable | SATISFECHA |
| elección explícita por obra | SATISFECHA |
| elección no modifica identidad operativa | SATISFECHA |
| reutilización en otra obra | SATISFECHA |
| distintas obras con autorías distintas | SATISFECHA |
| cambio posterior de autoría no altera contenido | NO EJERCIDA; además no derivada de Product |
| identidad operativa no forzada como firma | SATISFECHA |

Resultado literal:

```text
7/8 condiciones aceptadas
→ demostradas

1/8
→ no ejercida
→ probablemente sobreespecificada respecto de Product
```

---

# 6. Contraargumentos

## “El test B07 ya cubre la condición 7”

No.

B07 demuestra:

```text
seleccionar Alias B al constituir la obra
→ no modifica el contenido introducido
```

No demuestra:

```text
obra ya constituida con Alias A
→ cambiar después a Alias B
→ contenido permanece intacto
```

Confundir ambas trayectorias produciría un falso cierre.

## “Basta con implementar ahora el cambio posterior”

Tampoco está justificado automáticamente.

Eso satisfaría la literalidad de OB-80-NEXT-02, pero construiría una capacidad
que Product no exigió. El Manual 17 prohíbe ampliar una actuación por mera
posibilidad técnica.

---

# 7. Decisión de evaluación

Con la obligación tal como fue aceptada:

```text
OB-80-NEXT-02
→ NO CERRABLE TODAVÍA
```

No porque falte evidencia material del núcleo de C-PV-80-03, sino porque existe
una inconsistencia formal entre:

```text
obligación aceptada
vs
criterio realizativo corregido
```

No se deriva una nueva Realization ni nueva capacidad.

---

# 8. Resolución mínima necesaria

La resolución metodológicamente mínima es decidir explícitamente entre:

```text
A — RECTIFICAR OB-80-NEXT-02
    sustituir la condición sobre cambio posterior por:
    "seleccionar la identidad autoral de una obra
     no modifica automáticamente su contenido"

B — CONSERVAR LA REDACCIÓN ACEPTADA
    entonces debe ejercerse una actuación adicional mínima
    que pruebe cambio posterior de autoría sin alterar contenido
```

La opción A está mejor alineada con C-PV-80-03 y con la reducción TDD ya
realizada, pero requiere decisión humana porque modifica una condición de una
obligación previamente aceptada.

Hasta esa decisión:

```text
R-80-03-M1
→ SUFICIENCIA MATERIAL OBSERVADA

TH-80-03-01
→ POSITIVO

OB-80-NEXT-02
→ EVALUACIÓN DE CIERRE BLOQUEADA
  POR UNA ÚNICA INCONSISTENCIA FORMAL
```


---

# 9. Resolución humana de la inconsistencia

La persona responsable selecciona explícitamente:

```text
OPCIÓN A
→ RECTIFICAR OB-80-NEXT-02
```

La condición sobre cambio posterior de autoría deja de formar parte de la
obligación vigente y se sustituye por:

```text
seleccionar la identidad autoral de una obra
no modifica automáticamente su contenido
```

Esta resolución elimina la única inconsistencia formal identificada en esta
evaluación.

No se deriva actuación adicional.
