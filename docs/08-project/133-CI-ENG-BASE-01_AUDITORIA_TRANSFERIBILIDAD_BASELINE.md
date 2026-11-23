# 133 — CI-ENG-BASE-01 / Auditoría empírica de transferibilidad de la baseline

**Fecha:** 23/11/2026  
**Estado:** ABIERTA — reducción y auditoría documental completadas; evidencia empírica de checkout limpio pendiente de ejecución local.  
**Precedente:** [132](132-REAPLICACION_GLOBAL_POST_DLOC_ESTABILIDAD_ESTRATEGICA.md).  
**Norma:** Manual 17 §13.1.2 + DEVELOPMENT_GUIDE + AGENTS.md.  
**Producción:** SIN CAMBIOS.

---

# 1. Candidata

## CI-ENG-BASE-01 — Transferibilidad operativa de la baseline de ingeniería

Pregunta reducida:

> ¿Puede una persona o agente competente comprender y modificar de forma segura el producto vigente a partir del estado actual del repositorio y de sus referencias técnicas competentes, sin depender materialmente de reconstruir la historia extensa del proyecto?

La formulación inicial más amplia incluía:

~~~text
reproducible
comprensible
verificable
evolutiva
~~~

La auditoría previa demuestra que tres dimensiones tienen ya evidencia suficiente:

~~~text
reproducibilidad
→ ampliamente demostrada

verificabilidad
→ ampliamente demostrada

evolutividad
→ ampliamente demostrada
~~~

Por tanto el residuo independiente se limita a:

~~~text
comprensibilidad
+
transferibilidad operativa
desde el estado vigente
~~~

---

# 2. Situación discriminante

Se adopta como situación:

~~~text
operador competente
+
checkout actual
+
documentación técnica vigente
+
tarea pequeña autorizada
↓
comprender alcance
↓
localizar código y tests
↓
validar baseline
↓
poder intervenir sin reconstrucción histórica sustancial
~~~

No se exige:

- onboarding universal;
- comprensión completa del corpus conceptual;
- eliminación de toda consulta histórica;
- ausencia total de deuda técnica;
- nueva arquitectura;
- nueva Implementation.

---

# 3. Fase 1 — entrada y orientación desde estado vigente

Las referencias actuales proporcionan:

~~~text
README.md
→ instalación
→ ejecución
→ comandos de validación
→ orden de lectura

ARCHITECTURE.md
→ arquitectura implementada vigente
→ responsabilidades y principios

DEVELOPMENT_GUIDE.md
→ flujo de trabajo
→ comandos
→ validación
→ organización del repositorio

TESTING.md
→ estrategia de pruebas

AGENTS.md
→ reglas operativas
→ preservar historia
→ no introducir abstracciones o actuaciones no derivadas
→ ejecutar controles pertinentes
~~~

Resultado provisional:

~~~text
entrada operativa
→ EXISTE

documentación técnica vigente
→ EXISTE

reglas para distinguir estado vigente de historia
→ EXISTEN
~~~

---

# 4. Fase 2 — reproducibilidad y validación

El repositorio declara como comandos canónicos:

~~~bash
npm install
npm run dev
npm run typecheck
npm test
npm run lint
npm run build
~~~

Existe además:

~~~text
package-lock.json
+
workflow manual de Pages
+
Node 22 en deployment
+
npm ci
+
npm run build
~~~

La evidencia histórica vigente demuestra:

~~~text
build/publicación reproducibles
→ sí

suite global previamente validada
→ sí

evolución incremental con regresión preservada
→ sí
~~~

Sin embargo, la ejecución exacta del checkout actual no puede observarse desde el conector GitHub empleado en esta actuación.

Por tanto:

~~~text
checkout limpio actual
→ PENDIENTE DE EJECUCIÓN EMPÍRICA LOCAL
~~~

---

# 5. Design Friction DF-ENG-BASE-01 — contrato de typecheck no autosuficiente

Se identifica una fricción concreta.

README afirma:

~~~text
“todas las validaciones disponibles
se superan sin errores”
~~~

y prescribe:

~~~bash
npm run typecheck
npm test
npm run build
~~~

DEVELOPMENT_GUIDE también prescribe:

~~~bash
npm run typecheck
npm test
npm run lint
~~~

Pero el estado vigente conserva:

~~~text
DEUDA-TSC-COMP-01
→ 14 errores TypeScript históricos
→ typecheck global no sano
→ deuda conocida y no bloqueante
~~~

README, DEVELOPMENT_GUIDE y AGENTS.md no contienen en su entrada operativa una advertencia equivalente que permita a un operador nuevo distinguir inmediatamente:

~~~text
regresión nueva
vs
baseline histórica conocida
~~~

Consecuencia:

> seguir literalmente la documentación técnica puede producir un rojo esperado cuyo significado correcto sólo aparece al consultar documentación de proyecto más profunda.

Clasificación provisional:

~~~text
DF-ENG-BASE-01
→ FRICCIÓN REAL DE TRANSFERIBILIDAD
→ localizada
→ no demuestra todavía dependencia estructural
~~~

---

# 6. Simulación de una tarea pequeña autorizada

Se utiliza únicamente como prueba de localización, sin modificar archivos:

> cambiar de forma autorizada el copy de la acción ordinaria “Examinar materiales anteriores”.

Búsqueda desde el estado vigente localiza directamente:

~~~text
producción ordinaria
→ src/App.tsx

tests ordinarios afectados
→ src/App.test.tsx
→ src/App.hpi.test.tsx
→ src/App.hpi.validation.test.tsx
→ src/App.hpi2.test.tsx
→ src/App.hpi2.validation.test.tsx
→ src/App.hpi.global.validation.test.tsx
→ src/App.human-continuity.test.tsx
→ src/App.knowledge-trajectory.ordinary-convergence.test.tsx
→ src/App.knowledge-trajectory.system-e2e.test.tsx
→ otros tests focales que referencian el copy
~~~

La misma cadena aparece también en:

~~~text
src/realizations/selective-localization/
→ patrimonio realizativo separado
~~~

y en documentación histórica.

AGENTS.md proporciona una regla suficiente para no propagar mecánicamente el cambio:

~~~text
preservar historia correcta
+
distinguir historia de estado vigente
+
modificar sólo cuerpos competentes
+
no tocar archivos ajenos a la tarea
~~~

Resultado:

~~~text
localización de producción
→ directa

localización de tests
→ directa

distinción estado vigente / patrimonio histórico
→ gobernada por reglas actuales

arqueología histórica necesaria
→ NO DEMOSTRADA
~~~

---

# 7. Ausencia de CI general automática

La rama canónica conserva únicamente:

~~~text
.github/workflows/deploy.yml
→ workflow manual de deployment
→ no CI general por push/PR
~~~

El HEAD documental actual no posee un workflow asociado que certifique automáticamente:

~~~text
typecheck
tests
lint
build
~~~

Esto implica que la baseline se valida actualmente mediante ejecución local o actuaciones específicas, no mediante una señal CI permanente.

Clasificación:

~~~text
ausencia de CI general
→ LÍMITE OPERATIVO
→ no insuficiencia por sí sola
~~~

Sólo adquiriría relevancia estratégica si impidiera una modificación segura o hiciera imposible distinguir regresiones de baseline.

---

# 8. Design Friction provisional

~~~text
DF-ENG-BASE-01
→ typecheck documentado como validación limpia
  pese a deuda histórica conocida
→ fricción localizada

DF-ENG-BASE-02
→ no existe CI general automática
→ límite operativo
→ no pérdida demostrada

dependencia estructural de historia extensa
→ NO DEMOSTRADA
~~~

---

# 9. Criterio de cierre de R-ENG-BASE-01

Falta únicamente ejecutar sobre el checkout actual:

~~~bash
npm ci
npm run typecheck
npx vitest run --maxWorkers=2
npm run lint
npm run build
git status --short
~~~

Registrar para cada comando:

- exit code;
- resultado;
- si coincide con la baseline conocida;
- cualquier error nuevo;
- si un operador puede interpretar el resultado usando sólo referencias vigentes.

La auditoría cerrará con una de estas salidas:

~~~text
A — BASELINE TRANSFERIBLE
→ documentación/código actuales bastan
→ no fricción material

B — FRICCIÓN LOCALIZADA
→ baseline transferible
→ uno o varios huecos concretos de orientación/validación
→ derivar sólo correcciones mínimas

C — DEPENDENCIA ESTRUCTURAL
→ actuar correctamente exige reconstrucción histórica sustancial
→ candidata a insuficiencia real
~~~

---

# 10. Estado provisional

La evidencia disponible favorece:

~~~text
SALIDA PROVISIONAL
→ B — FRICCIÓN LOCALIZADA
~~~

porque:

~~~text
baseline técnica
→ localizable y gobernada

código/tests pertinentes
→ localizables desde estado vigente

historia extensa
→ no demostrada como requisito operativo

pero

contrato de validación TypeScript
→ no es autosuficiente para un operador nuevo
~~~

No se autoriza todavía corregir README, DEVELOPMENT_GUIDE, typecheck ni DEUDA-TSC-COMP-01.

Primero debe cerrarse la ejecución empírica del checkout actual.
