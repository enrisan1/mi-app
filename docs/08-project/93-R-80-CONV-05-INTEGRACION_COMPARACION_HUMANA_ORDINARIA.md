# R-80-CONV-05 — Integración ordinaria mínima de comparación humana de documentos relacionados

**Fecha:** 18/11/2026  
**Estado:** CERRADA; `CSO-80-02` y `HITO-80-CONV-04` satisfechos.  
**Obligación:** `OB-80-CONV-01`.  
**Compromiso:** `C-PV-80-02 — Comparación humana de documentos relacionados`.  
**Precedente:** `HITO-80-CONV-03` satisfecho mediante `R-80-CONV-04`.

---

# 1. Fundamento

El orden mínimo de convergencia derivado en `R-80-CONV-01` fue:

~~~text
1. C-PV-80-01 — captura inmediata
2. C-PV-80-03 — identidad autoral elegible
3. C-PV-80-04 — apoyo IA separado
4. C-PV-80-02 — comparación humana
~~~

Tras el cierre de `R-80-CONV-04`, los tres primeros compromisos estaban suficientemente disponibles en el recorrido ordinario y permanecía pendiente únicamente `C-PV-80-02`.

La realizabilidad de este compromiso ya había sido demostrada en `H-80-02`. La actuación no debía reabrir investigación constitutiva ni importar literalmente todo el patrimonio experimental de `src/realizations/comparison/`.

---

# 2. Aplicación de PM-10

La reducción partió de:

~~~text
necesidad material
→ dos materiales ordinarios relacionados
  deben poder compararse suficientemente
  dentro del producto ordinario

hipótesis mínima
→ selección humana A/B
→ superficie comparativa read-only
→ diferencias verificables
→ decisión humana preservada
→ fuentes intactas
~~~

La inspección del patrimonio experimental separó propiedades necesarias de mecanismos contingentes.

Patrimonio retenido conceptualmente:

~~~text
@codemirror/merge
+
MergeView
+
fuente A read-only
+
fuente B read-only
+
highlightChanges
+
gutter
~~~

Patrimonio no convertido en producto en este corte:

- `detectLiteralDifferences`;
- `InlineDetectionExperience`;
- `LateralComparisonExperience` como componente literal;
- `ComparisonProgress`;
- ejecución A → B;
- ejecución B → A;
- undo;
- composición parcial;
- destino libre;
- persistencia de sesión comparativa;
- comparación semántica;
- merge automático;
- apoyo IA dentro de la comparación.

Resultado:

~~~text
bloqueo material
→ NINGUNO IDENTIFICADO

dependencia nueva
→ NO

persistencia nueva
→ NO

DEUDA-TSC-COMP-01
→ NO BLOQUEANTE
~~~

---

# 3. HITO-80-CONV-04

**HITO-80-CONV-04 — comparación ordinaria read-only suficientemente simultánea y verificable de dos materiales textuales relacionados, sin modificación ni decisión automática sobre las fuentes.**

Observables:

~~~text
O-CONV-80-02-01
→ A y B proceden de ordinary.materials

O-CONV-80-02-02
→ A y B son elegidos explícitamente por la persona

O-CONV-80-02-03
→ A y B permanecen simultáneamente visibles y distinguibles

O-CONV-80-02-04
→ las diferencias son verificables respecto de A y B

O-CONV-80-02-05
→ el sistema no atribuye importancia, corrección o preferencia

O-CONV-80-02-06
→ entrar en comparación no modifica las fuentes

O-CONV-80-02-07
→ inspeccionar no modifica las fuentes

O-CONV-80-02-08
→ salir conserva íntegros los materiales

O-CONV-80-02-09
→ no existe ejecución automática A→B/B→A ni merge
~~~

---

# 4. Prerregistro RED

Se creó:

~~~text
src/App.comparison.integration.test.tsx
~~~

con nueve pruebas `T-CONV-80-02-01…09`.

El RED inicial observado fue:

~~~text
Test Files  1 failed (1)
Tests       9 failed (9)
~~~

La causa alcanzó la ausencia preregistrada de la región accesible:

~~~text
Comparación de documentos
~~~

sin fallo previo de sintaxis, imports, entorno o configuración.

Resultado:

~~~text
RED INICIAL
→ VÁLIDO

gate de implementación
→ SUPERADO
~~~

---

# 5. Implementación mínima

Se incorporó:

~~~text
src/OrdinaryComparison.tsx
→ wrapper read-only de @codemirror/merge

src/App.tsx
→ selección Documento A / Documento B
→ exige dos materiales distintos
→ acción explícita Comparar
→ región Comparación activa
→ acción Salir de comparación
~~~

No se añadió persistencia de sesión.

`ordinary.materials` continúa siendo la fuente de los documentos y no es modificado por la actividad comparativa.

Commits constructivos:

~~~text
ac25a21
→ test(comparison): preregister ordinary comparison integration

cb2aede
→ feat(comparison): add read-only ordinary comparison view

914b81d
→ feat(comparison): integrate ordinary read-only comparison
~~~

---

# 6. Validación técnica

## 6.1 Suite específica

~~~text
Test Files  1 passed (1)
Tests       9 passed (9)
~~~

## 6.2 Regresión dirigida

~~~text
Test Files  14 passed (14)
Tests       127 passed (127)
~~~

El bloque incluyó:

- integración comparativa nueva;
- App histórica;
- captura contextual;
- identidad autoral;
- apoyo IA;
- patrimonio histórico de `comparison/`.

## 6.3 TypeScript diferencial

`npm run typecheck` mantiene exactamente:

~~~text
14 errores
5 archivos
~~~

todos pertenecientes a `DEUDA-TSC-COMP-01`:

- `ComparisonProgress.test.tsx`;
- `InlineDetectionExperience.test.tsx`;
- `InlineDetectionExperience.tsx`;
- `LateralComparisonExperience.test.tsx`;
- `detectLiteralDifferences.ts`.

No aparece ningún error nuevo en:

~~~text
src/App.tsx
src/OrdinaryComparison.tsx
src/App.comparison.integration.test.tsx
~~~

Resultado:

~~~text
regresión TypeScript atribuible a R-80-CONV-05
→ NO OBSERVADA

DEUDA-TSC-COMP-01
→ ABIERTA
→ PREEXISTENTE
→ AJENA A ESTE CIERRE
~~~

## 6.4 Suite canónica

~~~text
Test Files  59 passed (59)
Tests       498 passed (498)
~~~

## 6.5 Build y limpieza

~~~text
npm run build
→ PASS

git diff --check
→ sin salida

git status --short
→ sin salida
~~~

HEAD validado:

~~~text
914b81d
→ feature/task-filters
→ origin/feature/task-filters
~~~

Observación no bloqueante:

~~~text
bundle JS
→ 491.95 kB
→ 151.78 kB gzip
~~~

Se registra como coste técnico de incorporar CodeMirror al recorrido ordinario, no como falsador del hito.

---

# 7. Contraste humano ordinario

La pregunta de contraste fue:

> ¿Puedes reconocer y recorrer las diferencias entre ambos materiales sin tener que reconstruir mentalmente una versión después de abandonar la otra, manteniendo claro en todo momento qué pertenece a A y qué pertenece a B?

Resultado comunicado:

~~~text
TH-80-CONV-05
→ POSITIVO
~~~

La persona confirma que puede reconocer y recorrer las diferencias manteniendo clara la pertenencia A/B sin reconstrucción secuencial relevante.

---

# 8. Evaluación de CSO-80-02

| Condición | Estado |
| --- | --- |
| dos materiales ordinarios en una misma actividad comparativa | SATISFECHA |
| fuentes distinguibles | SATISFECHA |
| simultaneidad suficiente | SATISFECHA |
| diferencias verificables respecto de fuentes | SATISFECHA |
| sistema no decide pertinencia ni prevalencia | SATISFECHA |
| actuación posterior permanece humana | SATISFECHA |
| salir no destruye ni colapsa fuentes | SATISFECHA |

Resultado:

~~~text
CSO-80-02
→ SATISFECHO
~~~

No se declara:

- comparación semántica;
- merge automático;
- edición desde el comparador;
- control de versiones;
- persistencia de sesión comparativa;
- suficiencia universal fuera del alcance probado.

---

# 9. Cierre de HITO-80-CONV-04

La evidencia técnica y humana converge:

~~~text
suite específica
→ 9/9 PASS

regresión dirigida
→ 127/127 PASS

suite canónica
→ 498/498 PASS

build
→ PASS

TypeScript diferencial
→ 0 errores nuevos

contraste humano
→ POSITIVO

CSO-80-02
→ SATISFECHO
~~~

Por tanto:

~~~text
HITO-80-CONV-04
→ SATISFECHO
~~~

---

# 10. Cierre de R-80-CONV-05

~~~text
R-80-CONV-05
→ CERRADA

resultado
→ C-PV-80-02 suficientemente disponible
  en el recorrido ordinario probado

regresión atribuible
→ NO OBSERVADA
~~~

`DEUDA-TSC-COMP-01` permanece abierta y no es absorbida por este cierre.

---

# 11. Evaluación final de OB-80-CONV-01

La obligación aceptada fue:

> determinar y hacer verificable la disponibilidad ordinaria mínima y coherente de C-PV-80-01…C-PV-80-04 dentro del producto, reutilizando o reduciendo las Realizations existentes sin convertir automáticamente sus mecanismos experimentales en arquitectura final.

Estado acumulado:

| Compromiso | CSO | Hito | Actuación | Estado |
| --- | --- | --- | --- | --- |
| `C-PV-80-01` | `CSO-80-01` | `HITO-80-CONV-01` | `R-80-CONV-02` | SATISFECHO / CERRADA |
| `C-PV-80-03` | `CSO-80-03` | `HITO-80-CONV-02` | `R-80-CONV-03` | SATISFECHO / CERRADA |
| `C-PV-80-04` | `CSO-80-04` | `HITO-80-CONV-03` | `R-80-CONV-04` | SATISFECHO / CERRADA |
| `C-PV-80-02` | `CSO-80-02` | `HITO-80-CONV-04` | `R-80-CONV-05` | SATISFECHO / CERRADA |

También permanece satisfecha la condición metodológica de la obligación:

~~~text
Realizations experimentales
→ reutilizadas o reducidas selectivamente

integración literal automática
→ NO

arquitectura final universal
→ NO PRESUPUESTA
~~~

No queda ninguno de los cuatro compromisos post-KGV pendiente de disponibilidad ordinaria mínima dentro del alcance aceptado.

Por tanto:

~~~text
OB-80-CONV-01
→ COMPLETAMENTE SATISFECHA
  EN SU ALCANCE ACEPTADO

fase de convergencia/productización post-KGV
→ CERRADA EN ESTE ALCANCE
~~~

---

# 12. Límites del cierre

El cierre de `OB-80-CONV-01` no implica:

- que el producto sea universalmente completo;
- que no exista deuda técnica;
- que `DEUDA-TSC-COMP-01` esté resuelta;
- que toda Realization histórica deba integrarse;
- que se derive automáticamente una nueva Architecture, Realization o Implementation;
- que deba abrirse un nuevo horizonte;
- que deba seleccionarse un nuevo compromiso Product.

El estado posterior exige una nueva derivación desde el estado vigente antes de abrir otra actuación estratégica.

~~~text
OB-80-CONV-01
→ SATISFECHA

R-80-CONV-05
→ CERRADA

siguiente actuación estratégica
→ NO PRESUPUESTA
→ debe derivarse nuevamente
~~~
