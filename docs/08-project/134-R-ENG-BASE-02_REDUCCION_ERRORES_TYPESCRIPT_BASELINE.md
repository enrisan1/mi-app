# 134 — R-ENG-BASE-02 / Reducción de los 29 errores TypeScript de baseline

**Fecha:** 23/11/2026
**Estado:** CERRADA — los 29 errores pueden reducirse mediante correcciones locales de tipado sin cambiar comportamiento, contratos ni arquitectura.
**Precedente:** 133-CI-ENG-BASE-01_AUDITORIA_TRANSFERIBILIDAD_BASELINE.md.
**Producción:** SIN CAMBIOS.

# 1. Objeto

Reducir los 29 errores TypeScript vigentes y determinar si pueden eliminarse mediante correcciones locales de tipado, sin:

- alterar comportamiento observable;
- cambiar contratos funcionales;
- introducir arquitectura nueva;
- debilitar strict;
- desactivar noUncheckedIndexedAccess;
- desactivar exactOptionalPropertyTypes;
- usar casts forzados para silenciar errores;
- usar non-null assertions para ocultar incertidumbre.

# 2. Baseline empírica

~~~text
npm run typecheck
→ 29 errores
→ 6 archivos

src/App.tsx
→ 15

ComparisonProgress.test.tsx
→ 1

InlineDetectionExperience.test.tsx
→ 1

InlineDetectionExperience.tsx
→ 1

LateralComparisonExperience.test.tsx
→ 1

detectLiteralDifferences.ts
→ 10
~~~

Configuración relevante:

~~~text
strict → true
noUncheckedIndexedAccess → true
exactOptionalPropertyTypes → true
jsx → react-jsx
~~~

No se considera legítimo resolver la deuda debilitando estas garantías globales.

# 3. Grupo A — App.tsx / asociación de trayectoria IA

Patrón observado:

~~~text
matchingTrajectoryAssociations.length === 1
↓
association = matchingTrajectoryAssociations[0]
~~~

Con noUncheckedIndexedAccess, TypeScript conserva association como posible undefined. Esto genera 8 errores: siete accesos posteriores y el spread hacia saveAssociatedTrajectory.

La corrección local segura es estrechar explícitamente association antes de entrar en el mismo bloque funcional. No requiere modificar AssociatedTrajectory, persistencia, IA, KnowledgeTrajectory, casts ni non-null assertions.

Protección existente:

~~~text
App.knowledge-trajectory.ai-convergence.test.tsx
→ T-CSYS-AI-01
→ T-CSYS-AI-02
→ T-CSYS-AI-03
~~~

Clasificación:

~~~text
errores → 8
causa → narrowing insuficiente ante acceso indexado
cambio semántico necesario → NO
corrección local → SÍ
~~~

# 4. Grupo B — App.tsx / conditionIds y razón de decisión

Se construyen exactamente tres identificadores de condición, pero TypeScript infiere un array general. Con noUncheckedIndexedAccess, los accesos fijos y el acceso dinámico conservan posible undefined.

La corrección segura consiste en expresar conditionIds como tupla de tres strings y estrechar explícitamente failedConditionId tras el índice dinámico. No requiere cambiar DecisionReasonInput, KnowledgeTrajectory, relaciones ni aceptar undefined.

Protección existente:

~~~text
App.knowledge-trajectory.reason-convergence.test.tsx
→ T-CSYS-DEC-01
→ T-CSYS-DEC-02
→ T-CSYS-DEC-03
~~~

Clasificación:

~~~text
errores → 7
causa → array general usado como estructura fija + acceso dinámico no estrechado
cambio semántico necesario → NO
corrección local → SÍ
~~~

# 5. Grupo C1 — comparación / namespace JSX

Cuatro errores Cannot find namespace JSX aparecen en tres tests y una implementación. Son referencias explícitas a JSX.Element en una baseline React moderna con react-jsx.

La corrección local consiste en usar tipos React importados explícitamente, por ejemplo ReactElement, ReactElement | null o ReactElement[] según cada contrato existente.

No requiere cambiar props, componentes, JSX renderizado, comportamiento ni tsconfig.

Clasificación:

~~~text
errores → 4
causa → referencia de tipo JSX no disponible
cambio semántico necesario → NO
corrección local → SÍ
~~~

# 6. Grupo C2 — comparación / matriz LCS

detectLiteralDifferences.ts construye una matriz rectangular completamente inicializada, pero TypeScript no presume que filas y celdas indexadas numéricamente existan.

La corrección segura debe hacer explícita la invariante mediante comprobaciones locales de fila/celda o una función interna de lectura segura que lance únicamente si una celda estructuralmente obligatoria no existe.

No requiere cambiar el algoritmo LCS, LiteralDetection, la salida, noUncheckedIndexedAccess, casts ni non-null assertions.

Protección existente:

~~~text
detectLiteralDifferences.test.ts
→ T-80-02-M4-01…08
~~~

Clasificación:

~~~text
errores → 10
causa → indexación segura exigida por TypeScript
cambio semántico necesario → NO
corrección local → SÍ
~~~

# 7. Mapa consolidado

~~~text
A — App / association → 8 errores → narrowing local
B — App / conditionIds → 7 errores → tupla + narrowing local
C1 — comparison / JSX → 4 errores → tipos React explícitos
C2 — comparison / LCS → 10 errores → comprobación explícita de invariantes
TOTAL → 29
~~~

En ninguno de los cuatro patrones aparece necesidad de nuevo modelo de dominio, contrato, persistencia, arquitectura, UX o relajación de TypeScript.

# 8. Contraargumentos

Usar non-null assertions se rechaza porque silencia incertidumbre sin demostrar la invariante. Cambiar tsconfig se rechaza porque elimina señal en vez de corregir la baseline.

Los 15 errores de App no demuestran fallo funcional: los recorridos correspondientes permanecen verdes en la suite serial completa de 83/83 archivos y 598/598 tests.

Los 14 errores históricos de comparación pasan a ser relevantes ahora no porque hayan cambiado retrospectivamente, sino porque CI-ENG-BASE-02 introduce una nueva necesidad: una intervención ordinaria necesita señal TypeScript inequívoca.

# 9. Orden seguro de implementación

~~~text
R-ENG-BASE-03-A
→ App association
→ 8 errores
→ tests AI convergence
→ typecheck diferencial

R-ENG-BASE-03-B
→ App conditionIds
→ 7 errores
→ reason-convergence focal/serial
→ typecheck diferencial

R-ENG-BASE-03-C
→ comparison JSX
→ 4 errores
→ M5/M6/M7
→ typecheck diferencial

R-ENG-BASE-03-D
→ comparison LCS
→ 10 errores
→ M4
→ typecheck
→ suite serial global
→ lint
→ build
~~~

Cada lote debe conservar verdes los tests existentes antes de pasar al siguiente.

# 10. Gate de reducción

Pregunta: ¿Los 29 errores actuales pueden eliminarse mediante correcciones locales de tipado sin alterar comportamiento, contratos ni arquitectura?

Resultado:

~~~text
SÍ

cambio funcional requerido → NO
cambio contractual requerido → NO
cambio arquitectónico requerido → NO
nueva abstracción de dominio → NO
corrección local segura → SÍ
tests protectores existentes → SÍ
~~~

# 11. Resultado

~~~text
R-ENG-BASE-02 → CERRADA
OB-ENG-BASE-01 → CONFIRMADA
criterio final → npm run typecheck → exit 0
~~~

No se modifica producción en esta actuación.

La siguiente actuación justificable es R-ENG-BASE-03-A: corregir exclusivamente el subgrupo App/association, 8 errores, sin cambiar comportamiento, y validar antes de continuar.