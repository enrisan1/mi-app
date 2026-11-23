# DF-ENG-BASE-03 — Caracterización de seguridad del tooling

Fecha: 23/11/2026

## 1. Hallazgo inicial

Tras `npm ci`, `npm audit` informó:

~~~text
15 vulnerabilities
→ 7 moderate
→ 8 high
~~~

No se aplicó `npm audit fix`.

## 2. Separación runtime / desarrollo

La comprobación:

~~~text
npm audit --omit=dev
→ found 0 vulnerabilities
~~~

demuestra que el árbol de producción no contiene vulnerabilidades conocidas por npm audit en el estado inspeccionado.

Por tanto:

~~~text
producto desplegado
→ 0 vulnerabilidades npm conocidas

tooling / desarrollo
→ 15 vulnerabilidades
~~~

## 3. Raíces materiales

`npm explain` reduce el conjunto a cinco raíces de tooling:

~~~text
vitest / @vitest/coverage-v8
→ @vitest/mocker

vite
→ postcss
→ nanoid
→ source-map-js

eslint
→ minimatch
→ brace-expansion

eslint-plugin-react-hooks
→ browserslist
→ baseline-browser-mapping
→ zod

jsdom
→ undici
→ source-map-js
~~~

No son quince decisiones independientes.

## 4. Incidencia del resolvedor npm

Con:

~~~text
Node 20.20.2
npm 10.8.2
legacy-peer-deps=false
~~~

`npm audit fix --dry-run --json` falla internamente con:

~~~text
Cannot read properties of null (reading 'edgesOut')
~~~

La misma simulación, ejecutada temporalmente con npm 11.21.1, sí produce un plan de remediación. No fue necesario modificar npm global ni activar `legacy-peer-deps`.

## 5. Plan compatible observado

El dry-run con npm 11 propone, entre otros:

~~~text
vite       8.0.16 → 8.3.8
eslint    10.5.0  → 10.15.0
zod        4.4.3  → 4.6.7
undici     7.28.0 → 7.30.2
postcss    8.5.15 → 8.5.33
source-map-js 1.2.1 → 1.2.4
nanoid     3.3.12 → 3.3.20
browserslist 4.28.2 → 4.29.6
baseline-browser-mapping 2.10.37 → 2.11.39
brace-expansion 5.0.6 → 5.1.0
~~~

No se requirió `--force`.

## 6. Verificación de dependencias directas

`npm outdated vitest @vitest/coverage-v8 vite eslint` establece para el proyecto:

~~~text
@vitest/coverage-v8
Current 4.1.9
Wanted  4.1.12
Latest  5.1.1

vitest
Current 4.1.9
Wanted  4.1.12
Latest  4.1.12

vite
Current 8.0.16
Wanted  8.3.8
Latest  8.3.8

eslint
Current 10.5.0
Wanted  10.15.0
Latest  10.15.0
~~~

La línea adicional de coverage con `Wanted 4.1.9` corresponde a la relación peer desde el Vitest actualmente instalado, no al rango directo del proyecto. La raíz del proyecto admite 4.1.12.

## 7. Reducción final

~~~text
DF-ENG-BASE-03
→ REAL

ámbito
→ cadena de desarrollo

runtime
→ no afectado según npm audit --omit=dev

exposición material actual
→ no demostrada

remediación
→ disponible

salto major necesario
→ NO

--force
→ NO

cambio compatible de dependencias
→ SÍ
~~~

## 8. Obligación derivada

Se deriva:

**OB-ENG-SEC-01 — eliminar las vulnerabilidades conocidas de la cadena de desarrollo mediante una actualización compatible de las raíces controladas, preservando la baseline limpia y sin saltos major innecesarios.**

Criterio de cierre:

~~~text
npm audit
→ 0 vulnerabilidades

npm audit --omit=dev
→ 0 vulnerabilidades

npm run typecheck
→ PASS

npx vitest run --maxWorkers=1
→ PASS

npm run lint
→ PASS

npm run build
→ PASS
~~~

## 9. Primera actuación

**R-ENG-SEC-01 — actualizar de forma coordinada y compatible Vitest/coverage, Vite y ESLint hasta las versiones Wanted, dejar que npm resuelva las transitivas y validar el resultado completo antes de aceptar el cambio.**

No se autoriza `npm audit fix --force`, cambio de major ni relajación de peers.
