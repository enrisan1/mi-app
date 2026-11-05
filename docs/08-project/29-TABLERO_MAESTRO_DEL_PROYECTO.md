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
COMPARACIÓN CON PLATFORM VISION
↓
REDUCCIÓN D-00…D-05
↓
CONSOLIDACIÓN GLOBAL POST-T1
↓
ESTADO DE SUFICIENCIA
SIN SIGUIENTE HORIZONTE DERIVADO
```

La comparación con `PLATFORM_VISION` ha sido completada en el alcance `D-00…D-05`. No debe introducirse automáticamente una nueva prioridad, `P6`, un nuevo Product Value, una nueva capacidad, una nueva Realization, Architecture o Implementation sin nueva evidencia suficiente.

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
30-REDUCCION_DIFERENCIAS_D00_D01_POST_T1.md
31-PRIORIZACION_REDUCTIVA_D02_D05_POST_T1.md
32-DERIVACION_PRUEBA_D03A_PROCEDENCIA_PERTINENTE.md
33-RESULTADO_Y_CIERRE_REDUCTIVO_D03A_POST_T1.md
34-RESULTADO_Y_CIERRE_REDUCTIVO_D04_POST_T1.md
35-RESULTADO_Y_CIERRE_REDUCTIVO_D05_POST_T1.md
36-RESULTADO_Y_CIERRE_REDUCTIVO_D02_POST_T1.md
37-CONSOLIDACION_GLOBAL_D00_D05_POST_T1.md
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

PROS-MU-Q04
→ D — diferencia positiva observada

F-PROS-MU-02
→ diferencia humana independiente demostrada en Q04

GATE-NH-01
→ SUPERADO en Q04

PROS-MU-Q05
→ E — suficiencia demostrada en el alcance ensayado

MIN-CC-01
→ suficiente en el caso ensayado

MED-CC-01
→ suficiente en el caso ensayado

F-PROS-MU-02
→ reducida en el caso ensayado

nueva pérdida humana independiente derivada de Q05
→ no demostrada

derivación estratégica
→ reabierta históricamente por Q04
→ cerrada post-Q05

residuo humano independiente post-Q05
→ no demostrado

nueva candidata para GATE-NH-01
→ no identificada

siguiente horizonte
→ no derivado

suficiencia sin siguiente horizonte derivado
→ restablecida
```

No existe actualmente un hueco identificado que obligue a reabrir V1.

Q05 no invalida que `GATE-NH-01` fuese superado en Q04; demuestra posteriormente que la diferencia que provocó esa reapertura puede reducirse, en el caso ensayado, mediante un antecedente colaborativo mínimo y una mediación explícita.

La reevaluación posterior documentada en `42-REEVALUACION_RESIDUO_POST_Q05_Y_RESTAURACION_DE_SUFICIENCIA.md` determina que no queda demostrado un residuo humano independiente que justifique mantener abierta la derivación estratégica, por lo que se restablece la situación de suficiencia sin siguiente horizonte derivado.

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

# 15. Resultado de la comparación estratégica

La comparación sistemática entre el estado alcanzado después de T1 y `PLATFORM_VISION` ha sido completada en el alcance actualmente aislado.

La secuencia ejecutada fue:

```text
T1
↓
comparación con PLATFORM_VISION
↓
D-00 / D-01
↓
priorización reductiva D-02…D-05
↓
D-03a
↓
D-04
↓
D-05
↓
D-02
↓
consolidación global
```


Resultado consolidado:

```text
D-00 → reformulada / no discriminable
D-01 → reducida
D-02 → reducida
D-03a → reducida
D-04 → reducida
D-05 → reducida

P6 → no derivado
siguiente horizonte → no derivado
```

La justificación completa queda consolidada en `37-CONSOLIDACION_GLOBAL_D00_D05_POST_T1.md`.

---

# 16. Regla de reanudación

Si el trabajo se interrumpe después de este punto, la reanudación deberá comenzar por:

```text
1. leer 29-TABLERO_MAESTRO_DEL_PROYECTO.md;

2. leer 37-CONSOLIDACION_GLOBAL_D00_D05_POST_T1.md;

3. leer 38-PRUEBA_PROSPECTIVA_PARTICIPACION_HUMANA_REAL_POST_T1.md
   como primera evaluación prospectiva posterior al cierre D-00…D-05;

4. leer 39-PRUEBA_PROSPECTIVA_CONTINUIDAD_COLABORATIVA_INTERDISPOSITIVO_POST_T1.md
   como demostración de F-PROS-MU-02 y superación de GATE-NH-01;

5. leer 40-REDUCCION_F_PROS_MU_02_Y_DERIVACION_PROS_MU_Q05.md
   como reducción previa y derivación de PROS-MU-Q05;

6. leer 41-CIERRE_PROS_MU_Q05_CONTINUIDAD_COLABORATIVA_INTERDISPOSITIVO.md
   como cierre experimental vigente de Q05;

7. leer 42-REEVALUACION_RESIDUO_POST_Q05_Y_RESTAURACION_DE_SUFICIENCIA.md
   como cierre de la reevaluación post-Q05 y restauración de suficiencia;

8. comprobar si existe evidencia posterior
   que obligue a revisar este estado consolidado;

9. si aparece una candidata nueva,
   comprobar primero GATE-NH-01;

10. sólo si existe fundamento suficiente,
   abrir una nueva investigación estratégica;

11. no abrir automáticamente P6,
    nuevo Product Value,
    nueva capacidad,
    nueva Realization,
    Architecture
    ni Implementation.
```

Condición provisional de reapertura:

```text
GATE-NH-01
— Gate de nuevo horizonte
```

Para justificar una nueva investigación estratégica deberá existir al menos:

```text
caso concreto
+
actuación humana identificable
+
pérdida observable o falsable
+
indicio razonable de insuficiencia actual
+
posibilidad de discriminación no circular
```

La primera aplicación prospectiva posterior al cierre `D-00…D-05` quedó documentada en:

```text
38-PRUEBA_PROSPECTIVA_PARTICIPACION_HUMANA_REAL_POST_T1.md
```

Resultado de esa aplicación:

```text
frontera ejercitada
→ dos personas humanas reales
→ mismo dispositivo
→ participación sucesiva
→ interrupción efectiva

F-PROS-MU-01
→ orientación insuficiente de la actuación de B

reducción
→ atribuida a orientación situacional ya consolidada

corrección mínima
→ aplicada en CollaborationExperience

PROS-MU-Q03-R
→ E — suficiencia en el caso ejercitado

residuo humano independiente
→ no demostrado

GATE-NH-01
→ ejercitado
→ NO SUPERADO
```

La aplicación prospectiva posterior quedó documentada en:

```text
39-PRUEBA_PROSPECTIVA_CONTINUIDAD_COLABORATIVA_INTERDISPOSITIVO_POST_T1.md
```

Resultado:

```text
frontera ejercitada
→ dos personas humanas reales
→ dos dispositivos reales
→ misma trayectoria colaborativa pretendida
→ participación sucesiva
→ sin transferencia externa compensatoria

PROS-MU-Q04
→ D — diferencia positiva observada

R1 — recepción
→ FALLA

F-PROS-MU-02
→ indisponibilidad del estado colaborativo necesario
  para la continuación entre instancias reales distintas

reducción
→ no absorbida por orientación situacional
→ no absorbida por P4 — colaboración mínima
→ no absorbida por P5 — intercambio / difusión mínima
→ no absorbida por la integración existente

F-PROS-MU-02
→ DIFERENCIA HUMANA INDEPENDIENTE DEMOSTRADA

GATE-NH-01
→ SUPERADO

estado estratégico
→ derivación estratégica reabierta
→ sin P6, nueva Realization ni Architecture todavía derivados
```

La reducción posterior quedó documentada en:

```text
40-REDUCCION_F_PROS_MU_02_Y_DERIVACION_PROS_MU_Q05.md
```

y su ejecución y cierre en:

```text
41-CIERRE_PROS_MU_Q05_CONTINUIDAD_COLABORATIVA_INTERDISPOSITIVO.md
```

Resultado:

```text
PROS-MU-Q05
→ E — suficiencia demostrada en el alcance ensayado

R1–R6
→ 6/6 PASAN

H-Q05-SUF
→ SOSTENIDA EN EL ALCANCE ENSAYADO

H-Q05-GAP
→ NO SOSTENIDA EN EL CASO ENSAYADO

MIN-CC-01
→ SUFICIENTE EN EL CASO ENSAYADO

MED-CC-01
→ SUFICIENTE EN EL CASO ENSAYADO

F-PROS-MU-02
→ REDUCIDA EN EL CASO ENSAYADO

nueva pérdida humana independiente derivada de Q05
→ no demostrada

estado estratégico
→ pendiente de reevaluación posterior a Q05
→ sin P6, nueva capacidad, nueva Realization ni Architecture derivados
```

---

# 17. Estado resultante

```text
CHARTER
✓ vigente

PLATFORM VISION
✓ vigente como horizonte orientador

V1
✓ delimitada
✓ suficientemente realizada

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

COMPARACIÓN T1 ↔ PLATFORM_VISION
✓ completada en el alcance D-00…D-05

D-00
✓ reformulada / no discriminable

D-01
✓ reducida

D-02
✓ reducida

D-03a
✓ reducida

D-04
✓ reducida

D-05
✓ reducida

CONSOLIDACIÓN GLOBAL D-00…D-05
✓ cerrada

PRUEBA PROSPECTIVA DE PARTICIPACIÓN HUMANA REAL
✓ realizada en el alcance ejercitado

F-PROS-MU-01
→ detectada
→ absorbida por orientación situacional existente
→ resuelta localmente

PROS-MU-Q03-R
→ E — suficiencia en el caso ejercitado

GATE-NH-01
→ ejercitado inicialmente
→ NO SUPERADO en PROS-MU-Q03-R

PROS-MU-Q04
→ D — diferencia positiva observada

R1 — recepción interdispositivo
→ FALLA

F-PROS-MU-02
→ indisponibilidad del estado colaborativo necesario
  para la continuación entre instancias reales distintas

F-PROS-MU-02
→ DIFERENCIA HUMANA INDEPENDIENTE DEMOSTRADA

GATE-NH-01
→ SUPERADO

residuo humano independiente
→ demostrado en Q04 mediante F-PROS-MU-02

PROS-MU-Q05
→ E — suficiencia demostrada en el alcance ensayado

R1–R6
→ 6/6 PASAN

H-Q05-SUF
→ SOSTENIDA EN EL ALCANCE ENSAYADO

H-Q05-GAP
→ NO SOSTENIDA EN EL CASO ENSAYADO

MIN-CC-01
→ SUFICIENTE EN EL CASO ENSAYADO

MED-CC-01
→ SUFICIENTE EN EL CASO ENSAYADO

F-PROS-MU-02
→ REDUCIDA EN EL CASO ENSAYADO

nueva pérdida humana independiente derivada de Q05
→ no demostrada

P6
→ no derivado

nuevo Product Value
→ no derivado

nueva capacidad
→ no derivada

nueva Realization
→ no derivada

Architecture
→ no derivada automáticamente

Implementation
→ no derivada

residuo humano independiente post-Q05
→ NO DEMOSTRADO

nueva candidata para GATE-NH-01
→ NO IDENTIFICADA

estado estratégico
→ REAPERTURA HISTÓRICA POR Q04
→ DIFERENCIA REDUCIDA EN Q05
→ REEVALUACIÓN POST-Q05 CERRADA
→ DERIVACIÓN ESTRATÉGICA CERRADA POST-Q05

siguiente horizonte
→ NO DERIVADO

suficiencia sin siguiente horizonte derivado
→ RESTABLECIDA

reapertura estratégica
→ producida mediante GATE-NH-01 en Q04
→ cerrada tras la reducción y reevaluación post-Q05

TABLERO MAESTRO
✓ actualizado
```

La derivación estratégica fue reabierta legítimamente por Q04 mediante `GATE-NH-01`.

Q05 redujo posteriormente `F-PROS-MU-02` en el caso ensayado y no demostró una nueva pérdida humana independiente.

La reevaluación posterior documentada en `42-REEVALUACION_RESIDUO_POST_Q05_Y_RESTAURACION_DE_SUFICIENCIA.md` determina que no queda demostrado ningún residuo humano independiente y discriminable que justifique mantener abierta esa derivación.

Por tanto:

```text
DERIVACIÓN ESTRATÉGICA
→ CERRADA POST-Q05

SIGUIENTE HORIZONTE
→ NO DERIVADO

SUFICIENCIA SIN SIGUIENTE HORIZONTE DERIVADO
→ RESTABLECIDA
```

Esto no implica:

```text
proyecto terminado
PLATFORM_VISION completamente realizada
P6 derivado
nueva capacidad derivada
nueva Realization derivada
Architecture derivada
Implementation derivada
```

`GATE-NH-01` permanece disponible como condición de futura reapertura si aparece nueva evidencia que satisfaga nuevamente sus requisitos.

Próxima cuestión estratégica:

> **No existe actualmente una siguiente cuestión estratégica derivada que obligue a abrir un nuevo horizonte. Una nueva derivación deberá originarse únicamente si aparece nueva evidencia humana independiente y discriminable que satisfaga nuevamente `GATE-NH-01`.**

# 18. Actualización tras el cierre del panorama externo

Después de la restauración de suficiencia post-Q05 se realizó un examen externo sistemático documentado en `43–53`.

El conocimiento externo reutilizable resultante se mantiene de forma sintética en:

```text
EXTERNAL_RADAR.md
→ referencia estratégica auxiliar
→ no canónica para derivación
→ memoria operativa de oportunidades externas y condiciones de reactivación
```

El radar no modifica el estado estratégico por sí mismo y no sustituye los documentos fuente 43–53.

El examen abordó cinco líneas:

```text
L-EXT-01 — PROV-O
→ procedencia y reconstrucción de trayectoria

L-EXT-02 — Web Annotation
→ anclaje granular de partes concretas

L-EXT-03 — RO-Crate
→ composición, autodescripción y portabilidad

L-EXT-04 — objetos tipados
→ estructura semántica consultable

L-EXT-05 — IA verificable
→ propuesta asistida sometida a evidencia y validación
```

Las cinco líneas han quedado cerradas con resultado favorable limitado.

Su resultado no consiste en cinco nuevas capacidades derivadas del producto.

Consiste en un repertorio conceptual y experimental disponible para futuras derivaciones si una necesidad propia del proyecto vuelve a requerir alguno de estos mecanismos.

El efecto estratégico del panorama externo es:

```text
nueva pérdida humana independiente
→ NO DEMOSTRADA

nuevo residuo humano independiente
→ NO IDENTIFICADO

nueva candidata para GATE-NH-01
→ NO IDENTIFICADA

reapertura de GATE-NH-01
→ NO PRODUCIDA

P6
→ NO DERIVADO

nueva capacidad
→ NO DERIVADA

nueva Realization
→ NO DERIVADA

Architecture
→ NO DERIVADA

Implementation
→ NO DERIVADA

siguiente horizonte
→ NO DERIVADO
```

Los resultados externos no invalidan la restauración de suficiencia documentada en `42-REEVALUACION_RESIDUO_POST_Q05_Y_RESTAURACION_DE_SUFICIENCIA.md`.

Debe mantenerse la dirección de derivación:

```text
necesidad o pérdida propia demostrada
→ selección del mecanismo externo pertinente
→ prueba específica
→ eventual derivación
```

y no la dirección inversa:

```text
tecnología o estándar disponible
→ búsqueda posterior de una función que justifique incorporarlo
```

`GATE-NH-01` conserva su historia:

```text
Q04
→ GATE-NH-01 SUPERADO legítimamente

Q05
→ F-PROS-MU-02 reducida en el alcance ensayado

post-Q05
→ derivación estratégica cerrada

panorama externo 43–53
→ no produce nueva reapertura
```

Por tanto, el estado estratégico vigente después del cierre completo del panorama externo es:

```text
DERIVACIÓN ESTRATÉGICA
→ CERRADA

SIGUIENTE HORIZONTE
→ NO DERIVADO

SUFICIENCIA SIN SIGUIENTE HORIZONTE DERIVADO
→ MANTENIDA

PANORAMA EXTERNO PRIORITARIO
→ COMPLETADO EN L-EXT-01…L-EXT-05
```

La siguiente cuestión estratégica permanece sin derivar.

Una nueva derivación deberá originarse únicamente si aparece nueva evidencia humana independiente y discriminable que satisfaga nuevamente las condiciones de reapertura de `GATE-NH-01`.
