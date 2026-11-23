# 133 — CI-ENG-BASE-01 / Auditoría empírica de transferibilidad de la baseline

**Fecha:** 23/11/2026  
**Estado:** CERRADA — auditoría empírica completada; salida B — fricción localizada de transferibilidad, sin dependencia estructural de historia extensa.  
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
→ EJECUTADO

npm ci
→ PASS
→ 249 paquetes instalados
→ 15 vulnerabilidades reportadas por npm audit
  (7 moderate, 8 high)
→ no se ejecuta npm audit fix por quedar fuera del alcance

npm run typecheck
→ FAIL conocido
→ 29 errores / 6 archivos
→ coincide con baseline ya documentada

npx vitest run --maxWorkers=2
→ 82/83 archivos PASS
→ 596/598 tests PASS
→ 2 timeouts en reason-convergence

npx vitest run --maxWorkers=1
→ 83/83 archivos PASS
→ 598/598 tests PASS

npm run lint
→ PASS

npm run build
→ PASS
→ warning no bloqueante por chunk >500 kB

git status --short
→ sin salida
→ árbol limpio
~~~

---

# 5. Design Friction DF-ENG-BASE-01 — contrato de typecheck no autosuficiente

Se identifica una fricción concreta.

README afirma que las validaciones disponibles deben superarse sin errores y prescribe:

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
baseline TypeScript vigente conocida
→ 29 errores / 6 archivos
→ 15 en src/App.tsx
→ 14 en patrimonio de comparación

DEUDA-TSC-COMP-01
→ explica los 14 errores históricos de comparación
→ no explica por sí sola los 15 de App.tsx

typecheck global
→ no sano
→ baseline conocida
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

# 9. Cierre empírico de R-ENG-BASE-01

La ejecución del checkout actual queda completada.

La suite paralela con dos workers reproduce únicamente la sensibilidad ya conocida de reason-convergence:

~~~text
--maxWorkers=2
→ 2 timeouts
→ T-CSYS-DEC-01 / T-CSYS-DEC-02
~~~

La ejecución serial del mismo checkout produce:

~~~text
83/83 archivos PASS
598/598 tests PASS
~~~

Por tanto:

~~~text
fallo funcional de reason-convergence
→ NO DEMOSTRADO

regresión de producto
→ NO DEMOSTRADA

sensibilidad de harness / carga
→ REPRODUCIDA
→ YA CONOCIDA
~~~

Las salidas consideradas eran:

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

# 10. Resultado final

La auditoría se cierra con:

~~~text
R-ENG-BASE-01
→ CERRADA

SALIDA
→ B — FRICCIÓN LOCALIZADA
~~~

Fundamento:

~~~text
baseline técnica
→ instalable

build
→ reproducible

lint
→ verde

suite serial completa
→ 83/83 archivos
→ 598/598 tests

código/tests pertinentes
→ localizables desde estado vigente

historia extensa
→ NO demostrada como requisito operativo

dependencia estructural
→ NO demostrada
~~~

Sobreviven tres fricciones o límites diferenciados:

~~~text
DF-ENG-BASE-01
→ contrato de typecheck no autosuficiente
→ 29 errores conocidos sin explicación en la entrada técnica ordinaria
→ FRICCIÓN REAL DE TRANSFERIBILIDAD

DF-ENG-BASE-02
→ sensibilidad de reason-convergence bajo --maxWorkers=2
→ suite serial completamente verde
→ LÍMITE DE HARNESS / CARGA
→ no regresión funcional

DF-ENG-BASE-03
→ npm ci reporta 15 vulnerabilidades
→ 7 moderate / 8 high
→ hallazgo de dependencia
→ NO evaluado todavía como obligación estratégica
~~~

También permanece el warning de bundle >500 kB como límite de build no bloqueante.

Conclusión sobre CI-ENG-BASE-01:

~~~text
baseline de ingeniería
→ MATERIALMENTE TRANSFERIBLE

autosuficiencia perfecta
→ NO

dependencia material de reconstruir historia extensa
→ NO DEMOSTRADA

insuficiencia estructural
→ NO

fricción localizada
→ SÍ
~~~

No se deriva todavía saneamiento de TypeScript, cambio de tests, npm audit fix, code splitting ni CI general automática.

La siguiente decisión debe reducir si DF-ENG-BASE-01 constituye una obligación técnica real de consolidación mínima o si basta con alinear la documentación de entrada con la baseline conocida.
