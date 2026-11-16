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


---

# 11. Diseño realizativo de M1-A y M1-B

## 11.1. M1-A — baseline con cambio de contexto

Archivo previsto de producción:

```text
src/realizations/capture/ContextualCaptureBaseline.tsx
```

Contrato observable:

```text
actividad principal visible
↓
"Ir a capturar una idea"
↓
actividad principal deja de estar montada/visible
↓
superficie separada de captura
↓
guardar
↓
la persona debe pulsar "Volver a la actividad"
↓
actividad principal vuelve a estar disponible
```

El baseline no representa una solución incorrecta. Representa el recorrido
ordinario contra el cual se medirá si la captura contextual produce una
diferencia humana material.

### Tests preregistrados

```text
T-80-01-A01
→ existe actividad intelectual identificable

T-80-01-A02
→ abrir captura sustituye materialmente la superficie principal

T-80-01-A03
→ guardar no devuelve automáticamente a la actividad;
   exige una vuelta explícita

T-80-01-A04
→ el contenido de trabajo sobrevive al recorrido de ida y vuelta
```

El cuarto test evita confundir:

```text
cambio de contexto
≠
pérdida de datos
```

La desventaja a contrastar es la interrupción/reconstrucción humana, no una
corrupción artificial del baseline.

---

## 11.2. M1-B — testigo de captura contextual

Archivo previsto de producción:

```text
src/realizations/capture/ContextualCaptureExperience.tsx
```

Contrato observable:

```text
actividad principal permanece visible
+
"Capturar aportación"
↓
aparece captura contextual
↓
aportación breve
↓
"Conservar"
↓
captura persistida con marca temporal
↓
captura se cierra
↓
actividad principal sigue disponible
↓
captura recuperable posteriormente
```

### Tests preregistrados

```text
T-80-01-B01
→ abrir captura mantiene identificable la actividad principal

T-80-01-B02
→ sólo una acción explícita conserva la aportación

T-80-01-B03
→ la captura conserva referencia temporal observable

T-80-01-B04
→ conservar no modifica el contenido principal

T-80-01-B05
→ tras conservar puede continuarse inmediatamente la actividad

T-80-01-B06
→ una ejecución posterior recupera la captura

T-80-01-B07
→ cancelar no conserva ni altera la actividad

T-80-01-B08
→ capturar no clasifica ni incorpora automáticamente
```

---

# 12. Decisiones de diseño deliberadamente no tomadas

Los tests no prescriben todavía:

- modal;
- popover;
- panel lateral;
- posición exacta;
- tecla rápida;
- apariencia;
- repositorio definitivo;
- número máximo de capturas;
- clasificación;
- búsqueda;
- inbox;
- IA.

Sí prescriben propiedades funcionales porque derivan directamente de
`C-PV-80-01` y `CR-80-01-M1`.

La persistencia mínima puede usar un mecanismo local del testigo, pero eso no
constituirá todavía arquitectura definitiva.

---

# 13. Estado de tests rojos

Se han creado:

```text
src/realizations/capture/ContextualCaptureBaseline.test.tsx
src/realizations/capture/ContextualCaptureExperience.test.tsx
```

Los tests cargan dinámicamente:

```text
./ContextualCaptureBaseline.tsx
./ContextualCaptureExperience.tsx
```

que todavía no existen.

Por diseño, el estado esperado es:

```text
M1-A
→ RED por ausencia del baseline

M1-B
→ RED por ausencia del testigo
```

Este estado debe comprobarse mediante ejecución antes de implementar producción.

No se aceptará como rojo válido un fallo adicional de sintaxis, entorno o
infraestructura que impida alcanzar el falsador previsto.

---

# 14. Gate para comenzar implementación

Sólo después de comprobar que:

```text
tests ejecutan
+
fallan por ausencia de los dos componentes
+
no aparece un fallo previo no relacionado
```

se implementará primero `ContextualCaptureBaseline.tsx` y después
`ContextualCaptureExperience.tsx`, manteniendo los cambios pequeños y
verificables.


---

# 15. Validación técnica

## M1-A — baseline

Ejecución:

```text
npx vitest run src/realizations/capture/ContextualCaptureBaseline.test.tsx
```

Resultado comunicado:

```text
Test Files  1 passed (1)
Tests       4 passed (4)
```

Resultado:

```text
M1-A
→ GREEN 4/4
```

## M1-B — captura contextual

La primera ejecución produjo 8 timeouts de 5 s.

La inspección del patrón mostró que todos los tests quedaban bloqueados bajo
`vi.useFakeTimers()`; no apareció un incumplimiento funcional específico del
testigo.

Se corrigió sólo el arnés:

- eliminación de fake timers;
- validación de referencia temporal mediante `<time datetime>` parseable y
  contenido visible;
- sin cambios de producción para resolver el timeout.

Nueva ejecución:

```text
npx vitest run src/realizations/capture/ContextualCaptureExperience.test.tsx
```

Resultado comunicado:

```text
Test Files  1 passed (1)
Tests       8 passed (8)
```

Resultado:

```text
M1-B
→ GREEN 8/8
```

## Estado técnico consolidado

```text
baseline
→ 4/4 GREEN

captura contextual
→ 8/8 GREEN

total
→ 12/12 propiedades automatizadas satisfechas
  en los dos testigos
```

Esto no demuestra todavía reducción humana de fricción.

---

# 16. TH-80-01-01 — contraste humano preparado

Se añade:

```text
src/realizations/capture/ContextualCaptureHuman.harness.tsx
contextual-capture-human.html
```

La página presenta en una misma sesión:

```text
M1-A — baseline con cambio de contexto
+
M1-B — captura contextual mínima
```

El contraste debe usar la misma actividad y la misma aportación en ambos casos.

## Caso humano sugerido

Actividad principal:

```text
Estoy redactando una explicación sobre por qué una decisión debe conservar
separadas la detección, el juicio y la ejecución.
```

Aportación emergente:

```text
Comprobar después si esta separación también debe aplicarse a la validación.
```

## Observación baseline

1. escribir la actividad;
2. pulsar `Ir a capturar una idea`;
3. registrar la aportación;
4. guardar;
5. volver explícitamente a la actividad;
6. observar si ha sido necesario reconstruir mentalmente el punto de trabajo.

## Observación testigo

1. escribir la misma actividad;
2. pulsar `Capturar aportación`;
3. registrar la misma aportación;
4. conservar;
5. continuar inmediatamente el texto principal;
6. comprobar posteriormente que la captura sigue disponible.

## Pregunta discriminante

> ¿La captura contextual reduce materialmente la ruptura de contexto y el coste
> de reanudar la actividad respecto del baseline?

## Resultado aún pendiente

```text
TH-80-01-01
→ PENDIENTE DE CONTRASTE HUMANO
```


---

# 17. Primer contraste humano y corrección del baseline

La primera observación humana produjo dos resultados distintos.

## 17.1. Resultado válido sobre ruptura de contexto

La persona observó:

```text
M1-B
→ facilita mucho mejor la aportación de nuevas ideas
→ el texto principal permanece visible
→ no se pierde de vista la actividad

M1-A
→ insertar la idea obliga a abandonar temporalmente
   el trabajo principal
```

Este resultado responde directamente a la pregunta discriminante principal:

```text
captura contextual
→ reduce materialmente la ruptura de contexto
```

La evidencia es positiva y no depende de la recuperación posterior.

## 17.2. Hallazgo adicional sobre recuperabilidad

La persona observó además que:

```text
M1-B
→ muestra "Capturas conservadas"
→ permite utilizar posteriormente las ideas
  sin abandonar la actividad principal

M1-A
→ tras volver al trabajo,
  la idea guardada no disponía de una vía explícita de consulta
```

Este segundo contraste no era metodológicamente limpio.

El baseline debía representar:

```text
recuperación posible
+
cambio de contexto necesario
```

y no:

```text
recuperación ausente
```

Por tanto, no se usa esa diferencia inicial como evidencia contra M1-A.

## 17.3. Corrección

Se añade al baseline:

```text
"Ir a capturas guardadas"
↓
actividad principal deja de estar visible
↓
captura previamente guardada queda accesible
↓
"Volver a la actividad"
```

Se añade:

```text
T-80-01-A05
→ recuperar posteriormente la idea exige
  abandonar de nuevo la actividad
```

La corrección conserva el propósito del baseline:

```text
datos no perdidos
+
captura recuperable

pero

captura y recuperación
→ requieren cambio de contexto
```

## 17.4. Estado del contraste humano

La conclusión principal sobre interrupción queda:

```text
O-80-01-M1-07
→ evidencia positiva inicial
```

Pero TH-80-01-01 no se cierra todavía por completo hasta comprobar:

1. que el baseline corregido conserva y recupera la idea;
2. que esa recuperación sigue exigiendo cambio de contexto;
3. que M1-B mantiene su ventaja humana cuando ambos recorridos son funcionalmente recuperables.


---

# 18. Revalidación técnica del baseline corregido

Ejecución comunicada:

```text
npx vitest run src/realizations/capture/ContextualCaptureBaseline.test.tsx
```

Resultado:

```text
Test Files  1 passed (1)
Tests       5 passed (5)
```

Por tanto:

```text
M1-A corregido
→ GREEN 5/5

recuperación de captura
→ técnicamente disponible

recuperación sin cambio de contexto
→ NO comprometida por el baseline
```

El contraste humano pendiente queda reducido a una comprobación breve de la
diferencia de experiencia entre:

```text
M1-A
→ recuperar exige salir de la actividad

M1-B
→ recuperar permanece copresente con la actividad
```
