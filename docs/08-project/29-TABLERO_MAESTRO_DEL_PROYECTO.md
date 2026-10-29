# Tablero maestro del proyecto

## Estado

**Vigente.**

Este documento constituye el tablero maestro sintético del estado estratégico del proyecto.

No sustituye los documentos canónicos de detalle.

Su función es mantener en un único punto:

- la secuencia estratégica vigente;
- el estado de V1;
- la relación entre T0 y T1;
- el cierre del ciclo post-V1;
- la próxima actuación justificable.

---

# 1. Regla de uso

El tablero sirve para orientación y reanudación.

La demostración detallada permanece en los documentos fuente.

Por tanto:

```text
TABLERO
→ orientación y estado vigente

DOCUMENTOS CANÓNICOS
→ definición, evidencia y justificación
```

Si existe discrepancia entre este tablero y un documento normativo o de cierre, prevalece el documento canónico correspondiente.

---

# 2. Secuencia estratégica vigente

```text
PROJECT CHARTER
↓
PLATFORM VISION
↓
ESTRATEGIA DE CONVERGENCIA
↓
DELIMITACIÓN DE V1
↓
MAPA DE CAPACIDADES
↓
MAPA DE DEPENDENCIAS
↓
CRITERIOS DE FINALIZACIÓN
↓
T0 — ESTADO INICIAL AUDITADO
↓
CICLO POST-V1 P1–P5
↓
R-INT-01 — INTEGRACIÓN POST-V1
↓
T1 — REEVALUACIÓN DE V1
↓
ESTADO VIGENTE
↓
COMPARACIÓN CON PLATFORM VISION
↓
SIGUIENTE HORIZONTE JUSTIFICABLE
```

No debe introducirse automáticamente una nueva prioridad, P6 o una nueva Realization antes de completar la comparación con `PLATFORM_VISION`.

---

# 3. Documentos canónicos principales

```text
00-PROJECT_CHARTER.md
01-PLATFORM_VISION.md
11-ESTRATEGIA_DE_CONVERGENCIA_AL_PRODUCTO_FINAL.md
12-DELIMITACION_DE_V1.md
13-MAPA_DE_CAPACIDADES_DE_V1.md
14-MAPA_DE_DEPENDENCIAS_DE_V1.md
15-CRITERIOS_DE_FINALIZACION_DE_V1.md
16-ESTADO_ACTUAL_DE_V1.md
27-PRIORIZACION_Y_ROADMAP_POST_V1.md
28-REEVALUACION_T1_DE_V1.md
29-TABLERO_MAESTRO_DEL_PROYECTO.md
```

---

# 4. V1 — Capacidades esenciales

V1 conserva nueve capacidades esenciales:

```text
C-V1-01 — Incorporar materia de trabajo

C-V1-02 — Transformar mediante trabajo

C-V1-03 — Constituir un resultado utilizable

C-V1-04 — Recuperar el resultado alcanzado
           después de una interrupción

C-V1-05 — Reanudar y continuar el trabajo

C-V1-06 — Distinguir y relacionar materiales
           o resultados pertinentemente

C-V1-07 — Reutilizar un material o resultado
           en otro contexto pertinente

C-V1-08 — Preservar determinación humana efectiva
           cuando corresponda

C-V1-09 — Preservar posibilidades pertinentes
           frente a cambios de la plataforma
```

---

# 5. V1 — Criterios individuales

El conjunto mínimo contiene catorce criterios:

```text
CF-V1-01
CF-V1-02
CF-V1-03.a
CF-V1-03.b
CF-V1-04.a
CF-V1-04.b
CF-V1-05
CF-V1-06.a
CF-V1-06.b
CF-V1-06.c
CF-V1-07.a
CF-V1-07.b
CF-V1-08
CF-V1-09
```

---

# 6. T0 — Diagnóstico original

Fuente:

```text
16-ESTADO_ACTUAL_DE_V1.md
```

Resultado:

```text
14 / 14 criterios individuales
→ SATISFECHOS

CC-V1-00
→ SATISFECHA

CG-V1-01
→ SATISFECHO

CG-V1-02
→ SATISFECHO
```

Conclusión T0:

```text
V1
→ suficientemente realizada
según el alcance y los criterios vigentes
```

T0 permanece como estado histórico.

No debe reescribirse retroactivamente con evidencia posterior.

---

# 7. Ciclo post-V1

El roadmap post-V1 realizó cinco hitos mínimos:

```text
P1 — Estado significativo estable
→ REALIZADO

P2 — Publicación individual mínima
→ REALIZADO

P3 — Publicación evaluable
→ REALIZADO

P4 — Colaboración mínima
→ REALIZADO

P5 — Intercambio / difusión
→ REALIZADO
```

Fuente principal:

```text
27-PRIORIZACION_Y_ROADMAP_POST_V1.md
```

---

# 8. R-INT-01 — Integración post-V1

Después de P1–P5 se realizó:

```text
R-INT-01 — Integración post-V1
```

Trayectoria integrada:

```text
current R1
↓
S1
↓
P1
↓
EvaluationSupport
↓
Collaboration
↓
X1
↓
D1
↓
current R2
```

Resultado:

```text
R-INT-01
→ IMPLEMENTADA Y VALIDADA

CR-INT-01
→ SATISFECHA
```

La integración conserva invariantes los estados derivados de S1 durante la evolución posterior del trabajo actual.

No introduce una capacidad funcional adicional a P1–P5.

---

# 9. T1 — Reevaluación posterior

Fuente:

```text
28-REEVALUACION_T1_DE_V1.md
```

T1 compara:

```text
T0
+
evidencia posterior P1–P5
+
R-INT-01
↓
estado revalidado de V1
```

Resultado individual:

| Criterio | T1 |
|---|---|
| CF-V1-01 | SATISFECHO |
| CF-V1-02 | SATISFECHO |
| CF-V1-03.a | SATISFECHO |
| CF-V1-03.b | SATISFECHO |
| CF-V1-04.a | SATISFECHO |
| CF-V1-04.b | SATISFECHO |
| CF-V1-05 | SATISFECHO |
| CF-V1-06.a | SATISFECHO |
| CF-V1-06.b | SATISFECHO |
| CF-V1-06.c | SATISFECHO |
| CF-V1-07.a | SATISFECHO |
| CF-V1-07.b | SATISFECHO |
| CF-V1-08 | SATISFECHO |
| CF-V1-09 | SATISFECHO |

Resultado global:

```text
14 / 14 criterios individuales
→ SATISFECHOS

CC-V1-00
→ SATISFECHA

CG-V1-01
→ SATISFECHO

CG-V1-02
→ SATISFECHO
```

Conclusión:

```text
T1
→ CERRADO

V1
→ SUFICIENTEMENTE REALIZADA
SEGÚN EL ALCANCE Y LOS CRITERIOS VIGENTES
```

---

# 10. Relación T0 → T1

```text
T0
→ diagnóstico original

P1–P5
→ nueva evidencia funcional

R-INT-01
→ integración post-V1

T1
→ reevaluación posterior
```

T1 no sustituye T0.

La relación correcta es:

```text
T0
↓
nueva evidencia
↓
T1
```

y no:

```text
T1
→ reescritura de T0
```

---

# 11. Cambios observados entre T0 y T1

La evidencia posterior:

```text
REFUERZA
```

numerosos criterios de V1.

En dos criterios:

```text
CF-V1-01
CF-V1-05
```

la evidencia posterior no vuelve a demostrar directamente la estructura completa exigida, pero tampoco aporta contradicción.

Por tanto:

```text
T0 → T1

criterios degradados
= 0

criterios parcialmente satisfechos
= 0

criterios no satisfechos
= 0
```

---

# 12. Estado vigente del proyecto

El estado estratégico vigente es:

```text
V1
→ cerrada y revalidada en T1

roadmap P1–P5
→ realizado

R-INT-01
→ realizada

T1
→ cerrado
```

No existe actualmente un hueco identificado que obligue a reabrir V1.

---

# 13. Lo que el estado vigente NO significa

El cierre de T1 no significa:

```text
proyecto terminado
```

ni:

```text
PLATFORM_VISION completamente realizada
```

ni:

```text
producto final alcanzado
```

ni:

```text
P6 derivado
```

ni:

```text
nueva Realization obligatoria
```

ni:

```text
ausencia de capacidades futuras posibles
```

---

# 14. Separación entre V1 y horizonte de producto

Debe mantenerse la siguiente distinción:

```text
V1 suficientemente realizada
≠
Platform Vision completamente realizada
```

V1 es un alcance estratégicamente delimitado.

`PLATFORM_VISION` continúa funcionando como horizonte de largo plazo.

Por tanto, el cierre de V1 no autoriza por sí solo a elegir la siguiente actuación.

---

# 15. Próxima actuación estratégica

La siguiente actuación justificable es:

> **comparar sistemáticamente el estado alcanzado del producto —incluidos V1, P1–P5, R-INT-01 y T1— con `PLATFORM_VISION`, identificar únicamente las diferencias estratégicas todavía relevantes y, a partir de ellas, determinar el siguiente horizonte justificable sin presuponer P6, una nueva capacidad ni una nueva Realization.**

La secuencia inmediata es:

```text
TABLERO MAESTRO ACTUALIZADO
↓
PLATFORM_VISION
↓
comparación sistemática
↓
diferencias estratégicas reales
↓
priorización
↓
siguiente horizonte justificable
```

---

# 16. Regla de reanudación

Si el trabajo se interrumpe después de este punto, la reanudación deberá comenzar por:

```text
1. leer 29-TABLERO_MAESTRO_DEL_PROYECTO.md;

2. confirmar que T1 sigue siendo el estado vigente;

3. comprobar si existe evidencia posterior a T1;

4. si no existe evidencia que obligue a revisar T1,
   continuar con la comparación sistemática
   frente a PLATFORM_VISION;

5. no abrir automáticamente P6
   ni una nueva Realization.
```

---

# 17. Estado resultante

```text
CHARTER
✓

PLATFORM VISION
✓ vigente como horizonte

V1
✓ delimitada

9 capacidades esenciales
✓ definidas

14 criterios individuales
✓ definidos

T0
✓ cerrado

P1–P5
✓ realizados

R-INT-01
✓ realizada

T1
✓ cerrado

TABLERO MAESTRO
✓ actualizado
```

Próxima cuestión:

> **¿Qué diferencias estratégicas reales permanecen entre el estado alcanzado del producto en T1 y `PLATFORM_VISION`, y cuál de ellas, si existe, justifica el siguiente horizonte de desarrollo?**
