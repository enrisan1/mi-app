# R-ENG-SEC-01 — Cierre de remediación de seguridad del tooling

Fecha: 23/11/2026

## 1. Objetivo

Eliminar las vulnerabilidades conocidas de la cadena de desarrollo mediante actualización compatible de las raíces controladas, preservando la baseline funcional y sin saltos major innecesarios.

## 2. Cambio aplicado

Dependencias directas actualizadas:

~~~text
vitest              ^4.1.9  → ^4.1.12
@vitest/coverage-v8 ^4.1.9  → ^4.1.12
vite                ^8.0.12 → ^8.3.8
eslint              ^10.3.0 → ^10.15.0
~~~

La resolución transitiva se completó con npm 11.21.1 sin `--force`.

Commit material:

~~~text
dd5d90b chore(deps): remediate development tooling vulnerabilities
~~~

## 3. Resultado de seguridad

Antes:

~~~text
npm audit
→ 15 vulnerabilities
→ 7 moderate
→ 8 high
~~~

Después:

~~~text
npm audit
→ found 0 vulnerabilities

npm audit --omit=dev
→ found 0 vulnerabilities
~~~

## 4. Validación de baseline

~~~text
npm run typecheck
→ PASS

npx vitest run --maxWorkers=1
→ 83/83 test files PASS
→ 598/598 tests PASS

npm run lint
→ PASS

npm run build
→ PASS
~~~

El build conserva únicamente el warning ya conocido de chunk >500 kB, no bloqueante y ajeno a esta actuación.

## 5. Integridad del repositorio

El cambio quedó limitado a:

~~~text
package.json
package-lock.json
~~~

Tras rebase sobre la documentación remota y push:

~~~text
HEAD
→ dd5d90b

origin/feature/task-filters
→ dd5d90b

git status --short
→ limpio
~~~

## 6. Cierre

~~~text
R-ENG-SEC-01
→ CERRADA

OB-ENG-SEC-01
→ SATISFECHA

DF-ENG-BASE-03
→ RESUELTA EN EL ALCANCE CARACTERIZADO

baseline
→ seguridad GREEN
→ typecheck GREEN
→ tests GREEN
→ lint GREEN
→ build GREEN
~~~

No se utilizaron saltos major, `--force`, relajación de peers ni cambios funcionales de producto.
