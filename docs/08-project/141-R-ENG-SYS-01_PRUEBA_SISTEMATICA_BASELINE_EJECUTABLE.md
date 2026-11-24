# 141 — Cierre de R-ENG-SYS-01 / prueba sistemática de la baseline ejecutable

**Fecha:** 24/11/2026  
**Estado:** CERRADA / SUPERADA.  
**Baseline de partida:** `225e9af`.  
**Commit material de SYS-04:** `08fe8a0 fix(app): tolerate invalid ordinary materials storage`.  
**Precedentes:** [138](138-CIERRE_R-ENG-BASE-04_BASELINE_INGENIERIA.md), [139](139-CI-ENG-BUILD-01_GATE_SELECCION_CONSTRUCCION.md), [140](140-R-ENG-HANDOFF-01_CIERRE_TRANSFERENCIA_TECNICA.md).

---

# 1. Pregunta

R-ENG-SYS-01 se abrió para responder:

> ¿Puede la baseline ejecutable actual construirse, ejecutarse, recorrerse, verificarse y modificarse ligeramente como un único sistema técnico coherente sin revelar una fricción material desconocida?

La actuación no pretendía:

- abrir nueva funcionalidad;
- optimizar arquitectura;
- eliminar toda deuda técnica;
- demostrar ausencia universal de defectos;
- convertir Platform Vision en backlog;
- derivar por inercia nueva construcción.

---

# 2. Contrato de la prueba

Se fijaron cuatro dimensiones:

~~~text
SYS-01
→ construcción reproducible

SYS-02
→ ejecución ordinaria real

SYS-03
→ recorridos críticos integrados

SYS-04
→ una modificación técnica pequeña,
  real y reversible
~~~

Criterios de éxito:

~~~text
C-SYS-01
→ instalación reproducible

C-SYS-02
→ typecheck + regresión + lint + build verdes

C-SYS-03
→ App ordinaria arranca y sigue utilizable

C-SYS-04
→ cuatro familias críticas verificables

C-SYS-05
→ modificación pequeña sin reconstrucción histórica material
  ni expansión desproporcionada

C-SYS-06
→ señal completa verde después del cambio
  y ausencia de cambios accidentales
~~~

STOP previstos:

~~~text
STOP-01
→ instalación/build no reproducible
  con causa no localizada

STOP-02
→ múltiples fallos aparentemente independientes
  en recorridos críticos

STOP-03
→ cambio pequeño exige alterar
  contrato estratégico imprevisto

STOP-04
→ acoplamiento estructural impide
  delimitar responsablemente el cambio

STOP-05
→ hace falta reconstrucción histórica material
  para saber qué modificar
~~~

Ningún STOP se activó.

---

# 3. SYS-01 — construcción reproducible

Baseline fijada:

~~~text
HEAD
→ 225e9af
~~~

Resultados:

~~~text
npm ci
→ PASS
→ 258 packages
→ 0 vulnerabilities

npm run typecheck
→ PASS

npm run test:regression
→ 83/83 archivos PASS
→ 598/598 tests PASS

npm run lint
→ PASS

npm run build
→ PASS
→ warning conocido de chunk >500 kB
~~~

Decisión:

~~~text
C-SYS-01
→ SATISFECHA

C-SYS-02
→ SATISFECHA

SYS-01
→ CERRADO POSITIVAMENTE
~~~

---

# 4. SYS-02 — ejecución ordinaria real

Se arrancó la aplicación con Vite y se ejerció manualmente el recorrido ordinario.

Evidencia observada:

~~~text
App
→ arranca y es accesible

entrada ordinaria
→ visible y utilizable

creación
→ "Prueba SYS-02 de ejecución ordinaria"
→ constituida correctamente

trabajo actual
→ reconocido por la App

recarga
→ persistencia conservada

reanudación
→ disponible

error fatal visible
→ ninguno
~~~

Decisión:

~~~text
C-SYS-03
→ SATISFECHA

SYS-02
→ CERRADO POSITIVAMENTE
~~~

---

# 5. SYS-03 — recorridos críticos integrados

Se verificaron explícitamente las cuatro familias fijadas en el handoff técnico.

## 5.1 I1 — continuidad ordinaria

~~~text
src/App.human-continuity.test.tsx
→ 8/8 PASS
~~~

## 5.2 I2 — capacidades auxiliares integradas

~~~text
src/App.capture.integration.test.tsx
src/App.comparison.integration.test.tsx
src/App.author-identity.integration.test.tsx
src/App.ai-support.integration.test.tsx

→ 4/4 archivos PASS
→ 37/37 tests PASS
~~~

## 5.3 I3 — trayectoria integrada

~~~text
src/App.knowledge-trajectory.system-e2e.test.tsx
src/App.knowledge-trajectory.final-convergence.test.tsx

→ 2/2 archivos PASS
→ 5/5 tests PASS
~~~

## 5.4 I4 — frontera externa IA

~~~text
workers/ai-support/src/index.test.ts
→ 1/1 archivo PASS
→ 14/14 tests PASS
~~~

La referencia histórica de 13 tests estaba desactualizada respecto del código vigente; la suite actual contiene 14.

Decisión:

~~~text
C-SYS-04
→ SATISFECHA

SYS-03
→ CERRADO POSITIVAMENTE
~~~

---

# 6. SYS-04 — modificación pequeña, real y reversible

## 6.1 Selección previa

La candidata seleccionada fue:

~~~text
PRE-A
→ hacer que App ordinaria pueda arrancar
  cuando ordinary.materials contiene JSON inválido

sin
→ sistema general de almacenamiento
→ migraciones
→ refactor global
→ revisión de todas las claves localStorage
→ nueva capacidad Product
~~~

## 6.2 RED

Se añadió:

~~~text
T-SYS-04-01
→ ordinary.materials inválido
  no impide iniciar la App ordinaria
~~~

Resultado inicial:

~~~text
1 FAIL / 8 PASS

causa
→ SyntaxError en JSON.parse
→ src/App.tsx
→ montaje de App abortado
~~~

Clasificación:

~~~text
defecto
→ REAL

alcance
→ LOCALIZADO

salida contractual
→ C — defecto localizado

STOP
→ ninguno
~~~

## 6.3 Corrección mínima

Se introdujo exclusivamente un loader defensivo:

~~~text
loadOrdinaryMaterials()
→ lee ordinary.materials
→ JSON inválido → []
→ valor no-array → []
~~~

y se reutilizó en los dos puntos de inicialización que antes parseaban directamente la misma clave:

~~~text
ordinaryMaterials
currentWorkId
~~~

No se creó una abstracción general de persistencia ni se modificaron otras claves.

## 6.4 Limpieza del cambio

Durante la edición manual apareció reformateo accidental amplio.

Se rechazó como parte de SYS-04 y se restauraron ambos archivos desde HEAD.

El cambio se reaplicó mediante sustitución exacta, obteniendo:

~~~text
src/App.human-continuity.test.tsx
→ +14 líneas

src/App.tsx
→ +18 / -10 líneas

git diff --check
→ limpio
~~~

Diff material final:

~~~text
→ T-SYS-04-01
→ loadOrdinaryMaterials()
→ dos usos del loader
→ ningún otro cambio funcional
~~~

## 6.5 Validación posterior

~~~text
src/App.human-continuity.test.tsx
→ 9/9 PASS

npm run typecheck
→ PASS

npm run test:regression
→ 83/83 archivos PASS
→ 599/599 tests PASS

npm run lint
→ PASS

npm run build
→ PASS
→ warning conocido de chunk >500 kB
~~~

Estado final del árbol antes del commit:

~~~text
M src/App.human-continuity.test.tsx
M src/App.tsx

git diff --check
→ sin salida
~~~

Commit material:

~~~text
08fe8a0
→ fix(app): tolerate invalid ordinary materials storage
~~~

Decisión:

~~~text
C-SYS-05
→ SATISFECHA

C-SYS-06
→ SATISFECHA

SYS-04
→ CERRADO POSITIVAMENTE
~~~

---

# 7. Resultado global de R-ENG-SYS-01

Mapa final:

~~~text
C-SYS-01
→ SATISFECHA

C-SYS-02
→ SATISFECHA

C-SYS-03
→ SATISFECHA

C-SYS-04
→ SATISFECHA

C-SYS-05
→ SATISFECHA

C-SYS-06
→ SATISFECHA

STOP-01…05
→ ninguno activado
~~~

Resultado:

~~~text
R-ENG-SYS-01
→ SUPERADA
→ CERRADA
~~~

La evidencia sostiene:

> La baseline ejecutable actual puede instalarse, construirse, ejecutarse, recorrer sus integraciones críticas y aceptar una modificación técnica pequeña sin revelar una fricción material desconocida que impida tratarla como un sistema técnico coherente.

---

# 8. Qué no demuestra el resultado

R-ENG-SYS-01 no demuestra:

- arquitectura óptima;
- ausencia de deuda técnica;
- ausencia universal de bugs;
- que cualquier cambio futuro será incremental;
- que el producto esté libre de límites conocidos;
- necesidad de nueva construcción;
- necesidad de nuevo Product, horizonte o Architecture.

El warning de chunk >500 kB permanece conocido y no bloqueante.

La sensibilidad temporal histórica de algunos tests permanece como límite conocido, sin regresión funcional demostrada en esta actuación.

---

# 9. Reaplicación de continuidad

Se contrasta el resultado con el estado previo y con Manual 17.

Precedentes:

~~~text
CI-ENG-BUILD-01
→ ninguna obligación de construcción independiente demostrada

R-ENG-HANDOFF-01
→ transferencia técnica ordinaria cerrada

estado estratégico previo
→ ESTABLE
~~~

Nueva evidencia de R-ENG-SYS-01:

~~~text
baseline como sistema técnico coherente
→ demostrada en el alcance probado

defecto ordinary.materials
→ localizado y resuelto

gap sistémico nuevo
→ ninguno demostrado

dependencia estratégica nueva
→ ninguna

compromiso Product insatisfecho nuevo
→ ninguno

incertidumbre bloqueante nueva
→ ninguna
~~~

Por tanto:

~~~text
cuestión de consolidación de baseline técnica
→ CERRADA AFIRMATIVAMENTE

obligación posterior independiente
→ NINGUNA DEMOSTRADA

siguiente actuación automática
→ NINGUNA

siguiente actuación estratégicamente derivada
→ NINGUNA

nuevo Product
→ NO

nuevo horizonte
→ NO

Architecture
→ NO DERIVADA

estado estratégico
→ PERMANECE ESTABLE
~~~

---

# 10. Punto de reanudación

La baseline técnica vigente queda consolidada en el alcance probado.

La reanudación no debe producirse por inercia técnica.

Debe existir nuevo fundamento positivo suficiente:

~~~text
NUEVA EVIDENCIA
o
NUEVA DECISIÓN
o
OBLIGACIÓN PENDIENTE DEMOSTRADA
o
PÉRDIDA HUMANA INDEPENDIENTE
o
FALSACIÓN DE UN CIERRE VIGENTE
o
BLOQUEO TÉCNICO DE UNA ACTUACIÓN NECESARIA
↓
reaplicar Manual 17
↓
derivar sólo la actuación mínima justificada
~~~

La mera posibilidad de mejorar código, arquitectura, bundle, CI o documentación no constituye por sí sola una obligación posterior.

