# 137 — Reevaluación final de la baseline de ingeniería

**Fecha:** 24/11/2026  
**Estado:** ABIERTA — queda una consolidación mínima de entrada técnica antes de declarar fundamento suficiente para construir.  
**Precedentes:** [133](133-CI-ENG-BASE-01_AUDITORIA_TRANSFERIBILIDAD_BASELINE.md), [136](136-R-ENG-SEC-01_CIERRE_REMEDIACION_TOOLING.md).

---

# 1. Punto de partida

Tras las actuaciones de saneamiento:

~~~text
npm audit
→ 0 vulnerabilities

npm audit --omit=dev
→ 0 vulnerabilities

npm run typecheck
→ PASS

npx vitest run --maxWorkers=1
→ 83/83 files PASS
→ 598/598 tests PASS

npm run lint
→ PASS

npm run build
→ PASS
~~~

Por tanto:

~~~text
DF-ENG-BASE-01
→ RESUELTA

DF-ENG-BASE-03
→ RESUELTA

baseline funcional
→ VERDE
~~~

---

# 2. Residuo real

La auditoría original dejó como límite:

~~~text
DF-ENG-BASE-02
→ sensibilidad de reason-convergence con --maxWorkers=2
→ suite serial verde
~~~

La reevaluación de la entrada técnica actual demuestra:

~~~text
package.json
→ "test": "vitest"

README.md
→ prescribe "npm test"

DEVELOPMENT_GUIDE.md
→ prescribe "npm test"

TESTING.md
→ remite a DEVELOPMENT_GUIDE
→ no define un comando canónico alternativo

suite completa empíricamente fiable
→ npx vitest run --maxWorkers=1
~~~

Por tanto, el problema superviviente no es únicamente la sensibilidad bajo carga. Es que el modo de regresión completa y reproducible conocido por la baseline no está canonizado como comando ordinario.

Clasificación:

~~~text
DF-ENG-BASE-02
→ FRICCIÓN OPERATIVA REAL
→ localizada
→ no funcional
→ no arquitectónica
→ corregible sin tocar producto
~~~

---

# 3. Segundo residuo de orientación

README.md conserva:

~~~text
fase de transición entre investigación conceptual y diseño de ingeniería
implementación del núcleo → pendiente
~~~

Ese estado ya no describe el repositorio vigente, que contiene una aplicación ejecutable, una suite global de 598 tests y una baseline de ingeniería validada.

Se identifica:

~~~text
DF-ENG-BASE-04
→ estado de entrada del README desalineado con el producto ejecutable vigente
→ fricción de orientación
→ no defecto funcional
~~~

---

# 4. Límites que no se convierten en obligación

Permanecen:

~~~text
warning de bundle >500 kB
→ no bloqueante

ausencia de CI general automática
→ límite operativo
→ no pérdida demostrada

sensibilidad histórica con mayor paralelismo
→ no regresión funcional
~~~

No se deriva:

~~~text
code splitting
CI general
refactorización de tests
cambio arquitectónico
nueva funcionalidad
~~~

---

# 5. Actuación mínima derivada

Se abre:

**R-ENG-BASE-04 — consolidación de la entrada técnica de la baseline.**

Alcance:

1. incorporar un comando canónico no interactivo y reproducible para la suite completa;
2. mantener `npm test` como modo de desarrollo si sigue siendo útil;
3. alinear README y DEVELOPMENT_GUIDE con el comando de validación real;
4. corregir exclusivamente el estado de entrada obsoleto del README;
5. reejecutar:
   - typecheck;
   - suite canónica;
   - lint;
   - build;
   - npm audit;
6. reevaluar CI-ENG-BASE-01/02.

Criterio de cierre:

~~~text
operador competente
+
checkout actual
+
README / DEVELOPMENT_GUIDE / TESTING
↓
puede instalar
↓
puede ejecutar aplicación
↓
puede ejecutar una regresión completa con salida inequívoca
↓
puede conocer el estado técnico vigente
↓
sin reconstruir historia extensa
~~~

---

# 6. Hipótesis de salida

Si R-ENG-BASE-04 se completa sin regresiones:

~~~text
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

fundamento suficiente para construir
→ SÍ, EN EL ALCANCE DE BASELINE
~~~

Esto no autoriza por sí solo una nueva funcionalidad. Autoriza que una actuación de construcción previamente justificada pueda comenzar desde una baseline técnica competente.
