# Prueba prospectiva de participación humana real post-T1

## Estado

Cerrada en el alcance ejercitado.

---

# 1. Propósito

Después del cierre de T1 y de la consolidación global de `D-00…D-05`, el proyecto quedó en estado de:

```text
SUFICIENCIA SIN SIGUIENTE HORIZONTE DERIVADO
```

La reapertura estratégica quedó condicionada por:

```text
GATE-NH-01
— Gate de nuevo horizonte
```

La búsqueda retrospectiva en el corpus no identificó evidencia nueva suficiente para superar dicho gate.

Por ello se decidió realizar una prueba prospectiva en una frontera todavía no ejercitada:

```text
participación de dos personas humanas reales
```

sin presuponer:

```text
multiusuario técnico
cuentas
autenticación
backend
red
dos dispositivos
sesiones independientes
edición concurrente
```

La pregunta prospectiva fue:

> ¿Puede la Realization mínima de colaboración ya existente sostener una trayectoria en la que Participante A y Participante B sean dos personas humanas distintas, manteniendo participación pertinente, atribución reconocible y continuidad del trabajo, sin introducir previamente infraestructura multiusuario real?

---

# 2. Antecedente funcional

`P4 — Colaboración mínima` había demostrado que:

```text
dos participantes funcionalmente distinguibles
+
un resultado compartido
+
una aportación atribuida a A
+
una aportación atribuida a B
+
continuidad entre ambas
+
persistencia
```

podían coexistir dentro de `R-P4-C1`.

Su alcance excluía expresamente:

```text
identidades personales
usuarios autenticados
multiusuario real
```

Por tanto, la diferencia prospectiva no consistía en volver a probar P4, sino en sustituir:

```text
participantes funcionales
```

por:

```text
dos personas humanas distintas
```

sin modificar inicialmente la Realization.

---

# 3. Clasificación prospectiva

Se distinguieron tres resultados posibles.

## E — Suficiencia

```text
las dos personas pueden completar la trayectoria
+
la segunda persona puede continuar pertinentemente
+
la atribución permanece reconocible
+
no aparece una pérdida humana nueva
```

Resultado:

```text
GATE-NH-01
→ no abierto
```

## D — Diferencia positiva

```text
aparece una actuación humana concreta necesaria
+
el estado actual no permite realizarla suficientemente
```

Resultado:

```text
pérdida candidata
→ evaluación contra GATE-NH-01
```

## N — Evidencia insuficiente

```text
la prueba no permite aislar limpiamente
la diferencia investigada
```

Resultado:

```text
no demuestra suficiencia
no demuestra pérdida
```

---

# 4. PROS-MU-Q01

La primera prueba utilizó:

```text
dos personas reales
mismo dispositivo
misma Realization
relevo inmediato
```

La trayectoria técnica fue completada.

Sin embargo, durante la revisión posterior se detectó contaminación metodológica:

```text
la persona B había recibido externamente
una instrucción sobre qué debía hacer
```

La instrucción no procedía de la aplicación.

Por tanto, aunque la trayectoria técnica se completó, no podía afirmarse que la Realization hubiera proporcionado por sí sola orientación suficiente.

Resultado revisado:

```text
PROS-MU-Q01
→ N — EVIDENCIA CONTAMINADA / INSUFICIENTE
```

---

# 5. PROS-MU-Q02

La segunda prueba introdujo una diferencia adicional:

```text
A
↓
interrupción efectiva
↓
cierre completo de Firefox
↓
reapertura
↓
B
```

La persistencia técnica quedó demostrada:

```text
resultado compartido
✔ recuperado

aportación de A
✔ recuperada

atribución
✔ conservada
```

Sin embargo, la persona B volvió a recibir una instrucción externa sobre qué actuación realizar.

Por tanto:

```text
persistencia tras interrupción
✔ demostrada

suficiencia de orientación humana
? no evaluada limpiamente
```

Resultado:

```text
PROS-MU-Q02
→ N — EVIDENCIA INSUFICIENTE
```

---

# 6. PROS-MU-Q03

La tercera prueba intentó aislar una relación más exigente entre aportaciones.

La persona A formuló una objeción concreta.

Después de una interrupción efectiva, la persona B recibió externamente la instrucción de responder específicamente a la aportación de A.

La persona B pudo responder pertinentemente.

Sin embargo, durante la revisión humana posterior declaró que, sin esa instrucción externa, no habría tenido claro qué debía hacer.

Esto obligó a reinterpretar la evidencia.

La pérdida observada no consistía inicialmente en:

```text
falta de multiusuario
```

ni en:

```text
falta demostrada de relación explícita entre aportaciones
```

sino en:

```text
insuficiente reconocibilidad de la actuación disponible para B
```

Se formuló provisionalmente:

```text
F-PROS-MU-01
— Orientación insuficiente de la actuación de B
```

---

# 7. Evaluación de F-PROS-MU-01 contra GATE-NH-01

La evaluación provisional fue:

```text
1. caso concreto
✔

2. actuación humana identificable
✔

3. pérdida observable o falsable
✔

4. indicio de insuficiencia actual
✔ localmente

5. independencia respecto de capacidades existentes
✘ no demostrada
```

La investigación previa sobre orientación situacional ya había consolidado una propiedad según la cual la persona debe poder reconocer suficientemente:

```text
dónde se encuentra
+
qué procede de una actuación anterior
+
qué puede hacer ahora
```

La formulación consolidada incluía explícitamente:

```text
Aportación anterior

Qué puedes hacer ahora

Aportación actual
```

Por tanto:

```text
F-PROS-MU-01
→ instancia local de orientación situacional ya existente
→ no nueva necesidad humana independiente
→ no supera GATE-NH-01
```

---

# 8. Corrección mínima

La insuficiencia fue tratada como gap local de `CollaborationExperience`.

Se añadió exclusivamente orientación para la persona B:

```text
Qué puedes hacer ahora

Continúa el trabajo a partir del resultado compartido
y la aportación de A.
```

No se modificaron:

```text
estado
persistencia
atribución
modelo de participantes
estructura colaborativa
backend
red
identidad
autenticación
```

---

# 9. RED → GREEN

Se añadió:

```text
T-P4-09
— makes B's available action explicit before B contributes
```

Resultado inicial:

```text
8 tests previos
✔ PASS

T-P4-09
✘ FAIL
```

El fallo correspondió a la ausencia del encabezado:

```text
Qué puedes hacer ahora
```

Después de introducir la orientación mínima:

```text
T-P4-09
✔ PASS

suite CollaborationExperience
→ 9 / 9 tests
```

La suite global posterior produjo:

```text
36 archivos
316 / 316 tests
→ PASS
```

`git diff --check`:

```text
PASS
```

El `typecheck` global continuó mostrando errores en archivos no modificados por esta actuación:

```text
src/App.tsx
src/realizations/ru2m1/ResumeExperience.test.tsx
src/realizations/selective-localization/SelectiveLocalizationExperience.test.tsx
```

Por tanto, no quedó establecido un `typecheck` global verde.

---

# 10. PROS-MU-Q03-R

Después de la corrección se repitió la prueba bajo una condición más estricta.

La persona B:

```text
no recibió ninguna pregunta externa
no recibió ninguna explicación de A
no recibió instrucciones procedentes del experimento
```

Sólo pudo utilizar la información mostrada por la propia Realization.

Después de una interrupción efectiva:

```text
resultado compartido
✔ recuperado

aportación de A
✔ recuperada

orientación
✔ visible

campo de B
✔ disponible
```

La persona B declaró:

```text
¿supo qué debía hacer sólo por la aplicación?
→ sí

¿necesitó explicación externa?
→ no

¿la orientación fue suficientemente clara?
→ sí

¿su aportación se apoyó en resultado + A?
→ sí

¿sin la orientación habría tenido la misma claridad?
→ no
```

La persona A declaró:

```text
¿la aportación de B continúa pertinentemente el trabajo?
→ sí
```

No quedó señalado un residuo adicional de pertinencia.

Resultado:

```text
PROS-MU-Q03-R
→ E — SUFICIENCIA EN EL CASO EJERCITADO
```

---

# 11. Resultado de F-PROS-MU-01

La cadena completa queda:

```text
Q01
→ N por contaminación externa

Q02
→ N por contaminación externa

Q03
→ aparece F-PROS-MU-01

F-PROS-MU-01
→ atribuida a orientación situacional existente

corrección mínima
→ T-P4-09 RED → GREEN

Q03-R
→ E
→ suficiencia humana observada
```

Por tanto:

```text
F-PROS-MU-01
→ RESUELTA LOCALMENTE

orientación situacional
→ suficiente para absorber la diferencia observada

nuevo Product Value
→ no derivado

P6
→ no derivado

nueva capacidad
→ no derivada

nueva Realization
→ no derivada

Architecture
→ no derivada

nuevo horizonte
→ no derivado
```

---

# 12. Alcance de la conclusión

La prueba demuestra únicamente que, en el caso ejercitado:

```text
dos personas humanas distintas
+
mismo dispositivo
+
misma Realization
+
participación sucesiva
+
interrupción efectiva
+
persistencia
+
orientación explícita
```

pueden completar suficientemente la trayectoria mínima observada.

No demuestra:

```text
multiusuario real general
dos dispositivos
sesiones independientes
acceso simultáneo
red
autenticación
identidad personal persistente
más de dos personas
colaboración prolongada
edición concurrente
```

La ausencia de evidencia sobre esas fronteras no constituye por sí misma una pérdida ni deriva una actuación posterior.

---

# 13. Resultado respecto de GATE-NH-01

La prueba prospectiva sí produjo una pérdida local observable:

```text
B no reconocía suficientemente
qué actuación debía realizar
```

pero dicha pérdida fue reducible a una propiedad ya consolidada de orientación situacional.

Después de aplicar esa propiedad:

```text
pérdida local
→ resuelta

residuo humano independiente
→ no demostrado
```

Por tanto:

```text
GATE-NH-01
→ NO SUPERADO
```

El estado estratégico previo se conserva:

```text
SUFICIENCIA SIN SIGUIENTE HORIZONTE DERIVADO
```

---

# 14. Condición de reapertura

La frontera de participación humana real podrá volver a investigarse sólo si aparece evidencia concreta de una pérdida que no quede absorbida por:

```text
orientación situacional
atribución
continuidad
persistencia
relaciones ya realizadas
capacidades vigentes
```

y que satisfaga suficientemente:

```text
GATE-NH-01
```

No deberá derivarse automáticamente:

```text
multiusuario
backend
red
cuentas
autenticación
Architecture
P6
```

a partir de esta prueba.

---

# 15. Estado resultante

```text
PROS-MU-Q01
→ N

PROS-MU-Q02
→ N

PROS-MU-Q03
→ identifica F-PROS-MU-01

F-PROS-MU-01
→ absorbida por orientación situacional existente

T-P4-09
→ RED → GREEN

suite focalizada
→ 9 / 9 PASS

suite global
→ 316 / 316 PASS

PROS-MU-Q03-R
→ E

GATE-NH-01
→ NO SUPERADO

nuevo horizonte
→ NO DERIVADO
```

---
