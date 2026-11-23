# 138 — Cierre de R-ENG-BASE-04 / baseline de ingeniería

**Fecha:** 24/11/2026  
**Estado:** CERRADA.  
**Precedente:** [137](137-REEVALUACION_FINAL_BASELINE_INGENIERIA.md).

---

# 1. Objeto

R-ENG-BASE-04 se abrió para resolver los dos residuos de entrada técnica supervivientes tras el saneamiento de TypeScript y seguridad:

~~~text
DF-ENG-BASE-02
→ modo fiable de regresión completa no canonizado

DF-ENG-BASE-04
→ README con estado de proyecto obsoleto
~~~

---

# 2. DF-ENG-BASE-02 — canonización de regresión completa

Se añadió al repositorio:

~~~json
"test:regression": "vitest run --maxWorkers=1"
~~~

Se preservó:

~~~text
npm test
→ uso interactivo de Vitest durante desarrollo
~~~

Y se alinearon:

~~~text
README.md
DEVELOPMENT_GUIDE.md
TESTING.md
~~~

para que la regresión completa y no interactiva quede expresada como:

~~~bash
npm run test:regression
~~~

Commit:

~~~text
cee6567 chore(test): canonize reproducible regression suite
~~~

Validación material:

~~~text
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

Resultado:

~~~text
DF-ENG-BASE-02
→ RESUELTA EN SU ALCANCE
~~~

---

# 3. DF-ENG-BASE-04 — alineación del README

Se eliminó del README la descripción histórica:

~~~text
transición hacia diseño de ingeniería
diseño de ingeniería en preparación
implementación del núcleo pendiente
~~~

y se sustituyó por el estado vigente:

~~~text
aplicación software ejecutable
arquitectura técnica implementada y documentada
baseline de ingeniería validada
plataforma software en desarrollo
~~~

El detalle dinámico permanece delegado a PROJECT_STATUS.md.

Commit:

~~~text
5901b76 docs(readme): align project state with current baseline
~~~

Resultado:

~~~text
DF-ENG-BASE-04
→ RESUELTA
~~~

---

# 4. Reevaluación de CI-ENG-BASE-01

Pregunta:

> ¿Puede una persona o agente competente comprender y modificar de forma segura el producto vigente a partir del estado actual del repositorio y de sus referencias técnicas competentes, sin depender materialmente de reconstruir la historia extensa del proyecto?

Estado actual:

~~~text
entrada operativa
→ README / DEVELOPMENT_GUIDE / TESTING / AGENTS

estado técnico vigente
→ descrito sin contradicción material

typecheck
→ GREEN

regresión completa canónica
→ GREEN

lint
→ GREEN

build
→ GREEN

npm audit
→ GREEN

historia extensa
→ no requerida materialmente para una intervención ordinaria acotada
~~~

Decisión:

~~~text
CI-ENG-BASE-01
→ SATISFECHA
~~~

---

# 5. Reevaluación de CI-ENG-BASE-02

Pregunta:

> ¿Qué fricciones demostradas de la baseline deben corregirse para que una intervención ordinaria pueda partir de una señal técnica inequívoca, y cuáles pueden permanecer como límites no bloqueantes?

Mapa final:

~~~text
DF-ENG-BASE-01
→ RESUELTA
→ typecheck 29 → 0

DF-ENG-BASE-02
→ RESUELTA EN SU ALCANCE
→ regresión completa canonizada y validada

DF-ENG-BASE-03
→ RESUELTA
→ npm audit 15 → 0

DF-ENG-BASE-04
→ RESUELTA
→ README alineado
~~~

Permanecen únicamente:

~~~text
warning de chunk >500 kB
→ no bloqueante

ausencia de CI general automática
→ límite operativo
→ no pérdida demostrada

sensibilidad bajo mayor paralelismo
→ mitigada por comando canónico serial
→ no regresión funcional
~~~

Decisión:

~~~text
CI-ENG-BASE-02
→ SATISFECHA EN SU ALCANCE
~~~

---

# 6. Estado final de baseline

~~~text
R-ENG-BASE-04
→ CERRADA

CI-ENG-BASE-01
→ SATISFECHA

CI-ENG-BASE-02
→ SATISFECHA EN SU ALCANCE

baseline de ingeniería
→ reproducible
→ comprensible
→ verificable
→ evolutiva
→ transferible

señal técnica
→ inequívoca

fundamento suficiente para construir
→ SÍ, EN EL ALCANCE DE BASELINE
~~~

Este cierre no deriva por sí mismo una nueva funcionalidad ni una nueva fase de producto. Significa únicamente que cualquier actuación de construcción que quede justificada por una necesidad o decisión posterior puede comenzar desde una baseline técnica competente.
