# R-80-CONV-03 — Integración ordinaria mínima de identidad autoral elegible

**Fecha:** 17/11/2026  
**Estado:** FORMULADA; apertura pendiente de HUMAN GATE.  
**Obligación:** `OB-80-CONV-01`.  
**Compromiso:** `C-PV-80-03 — Identidad autoral elegible`.  
**Precedente:** `HITO-80-CONV-01` satisfecho mediante `R-80-CONV-02`.

---

# 1. Aplicación de PM-10

PM-10 exige:

~~~text
necesidad material de producto
↓
hipótesis mínima de realización o arquitectura
↓
contraste con compromisos consolidados
↓
¿existe bloqueo material?
├─ no → construir
└─ sí → investigar sólo el conflicto
~~~

La necesidad material ya está suficientemente identificada:

~~~text
C-PV-80-03
→ compromiso Product vigente

R-80-03-M1
→ realizabilidad mínima demostrada

CSO-80-03
→ criterio de disponibilidad ordinaria ya definido

App ordinaria
→ conserva obras/materiales identificables
→ NO ofrece todavía identidad autoral reutilizable
  ni asociación obra↔autoría

orden mínimo de convergencia
→ 80-01 → 80-03 → 80-04 → 80-02

80-01
→ ya integrado y cerrado
~~~

Por tanto:

~~~text
necesidad productiva de C-PV-80-03
→ SUFICIENTEMENTE IDENTIFICADA
~~~

---

# 2. Hipótesis mínima de realización

La hipótesis mínima es:

> permitir que la persona mantenga una identidad operativa principal estable,
> cree y conserve una o más identidades autorales reutilizables y asocie
> explícitamente una de ellas a una obra ordinaria ya identificable, sin
> modificar por ello el contenido de la obra ni la identidad operativa.

La asociación puede producirse después de que la obra exista.

No se deriva que la identidad autoral deba elegirse obligatoriamente durante el
acto de creación de la obra.

Esto permite reutilizar el sustrato ordinario existente sin modificar
`ResumeExperience`.

---

# 3. Qué cuenta como obra ordinaria en este hito

Para este alcance mínimo:

~~~text
obra ordinaria identificable
→ material ya presente en ordinary.materials
~~~

Esta decisión es local al hito.

No establece:

- una definición universal de obra;
- un nuevo modelo general de documento;
- que todo material ordinario sea siempre una obra;
- ni que futuras capacidades deban depender de `ordinary.materials`.

El uso de `ordinary.materials` se justifica porque ya constituye el sustrato
ordinario mediante el que App conserva y recupera trabajos producidos por la
persona.

---

# 4. Hito verificable

Se define:

**HITO-80-CONV-02 — identidad autoral reutilizable asociable a obras ordinarias
sin alterar contenido ni identidad operativa.**

El hito deberá demostrar:

~~~text
identidad operativa
→ estable e identificable

catálogo autoral
→ creado explícitamente por la persona
→ persistente
→ reutilizable

obra ordinaria
→ seleccionable

persona
→ elige identidad autoral para esa obra

asociación
→ persiste

contenido de la obra
→ no cambia

identidad operativa
→ no cambia
~~~

---

# 5. Estado mínimo propuesto

No se reutilizará el contenido de `ordinary.materials` para almacenar autoría.

Se mantienen estados separados:

~~~text
ordinary.materials
→ contenido de obras/materiales

identidades autorales
→ catálogo propio

asociaciones autorales
→ obra/material ID ↔ identidad autoral ID
~~~

Hipótesis mínima de datos:

~~~text
AuthorIdentity {
  id
  label
}

WorkAuthorship {
  materialId
  authorIdentityId
}
~~~

Las claves de persistencia deberán ser propias.

No se prescribe aún su nombre definitivo, pero no deberán reutilizar ni
sobrescribir:

~~~text
ordinary.materials
ordinary.contextual-captures
ru2m1.previous
ru2m1.retained
post-v1-integrated.state
~~~

---

# 6. Identidad operativa mínima

El compromiso exige una identidad operativa principal identificable, pero no
un sistema de cuentas.

Para este hito puede representarse mediante un valor estable y explícito del
producto, por ejemplo:

~~~text
identidad operativa
→ Usuario principal
~~~

Ese valor:

- no es una cuenta adicional;
- no exige autenticación;
- no se convierte automáticamente en firma;
- no cambia al seleccionar una identidad autoral.

No se deriva todavía que el usuario deba poder editar la identidad operativa.

---

# 7. Catálogo autoral mínimo

Una identidad autoral no puede ser mero texto libre repetido para cada obra.

Por tanto, el producto deberá permitir al menos:

~~~text
crear identidad autoral
↓
conservarla
↓
volver a seleccionarla
en otra obra
~~~

Caso mínimo verificable:

~~~text
identidad operativa
→ Usuario principal

identidad autoral A
→ creada una vez

identidad autoral B
→ creada una vez

obra 1
→ A

obra 2
→ B

obra 3
→ A reutilizada
~~~

No se prescribe:

- nombre real;
- seudónimo concreto;
- avatar;
- biografía;
- reputación;
- perfil público;
- verificación legal.

---

# 8. CSO-80-03 traducido a observables de integración

## O-CONV-80-03-01 — identidad operativa estable

La App muestra una identidad operativa principal identificable.

## O-CONV-80-03-02 — identidad autoral reutilizable

La persona puede crear una identidad autoral distinta de la operativa y ésta
queda disponible posteriormente sin volver a escribirla como valor nuevo.

## O-CONV-80-03-03 — elección explícita por obra

Una obra ordinaria identificable puede seleccionarse y asociarse
explícitamente a una identidad autoral existente.

## O-CONV-80-03-04 — contenido inalterado

Asignar o cambiar autoría no modifica el contenido conservado en
`ordinary.materials`.

## O-CONV-80-03-05 — identidad operativa inalterada

Asignar autoría no modifica la identidad operativa.

## O-CONV-80-03-06 — reutilización

La misma identidad autoral puede asociarse a otra obra sin recrearla.

## O-CONV-80-03-07 — diferenciación entre obras

Obras distintas pueden conservar identidades autorales distintas.

## O-CONV-80-03-08 — recuperación

Tras desmontar y volver a montar App:

- el catálogo autoral sigue disponible;
- las asociaciones obra↔autoría siguen identificables.

## O-CONV-80-03-09 — independencia respecto de captura

Las capturas contextuales existentes no adquieren autoría automáticamente y la
gestión autoral no modifica `ordinary.contextual-captures`.

---

# 9. Falsadores

La integración será insuficiente si ocurre cualquiera de estos casos:

1. la identidad operativa determina obligatoriamente la autoría;
2. la identidad autoral es sólo texto efímero introducido de nuevo por obra;
3. asignar autoría modifica el contenido de `ordinary.materials`;
4. asignar autoría modifica `ru2m1.previous` o `ru2m1.retained`;
5. asignar autoría modifica o elimina capturas contextuales;
6. las asociaciones se pierden al recargar;
7. una misma identidad no puede reutilizarse;
8. demostrar el caso exige cuentas múltiples o autenticación;
9. la solución introduce reputación, permisos, anonimato fuerte o verificación
   legal;
10. la integración exige modificar `ResumeExperience` sin que aparezca una
    necesidad material nueva que lo justifique.

---

# 10. Contraste con patrimonio consolidado

## C-PV-80-03

La hipótesis satisface la formulación Product:

~~~text
identidad operativa principal
+
identidad autoral reutilizable distinta
+
elección humana por obra
~~~

sin ampliar el compromiso.

## R-80-03-M1

Se conservan las propiedades demostradas:

~~~text
identidad operativa
≠
identidad autoral

identidad autoral
→ reutilizable

selección de firma
≠
modificación de contenido
~~~

No se copia literalmente el testigo.

## HITO-80-CONV-01

La captura contextual permanece independiente:

~~~text
captura
≠
obra
≠
autoría
~~~

No se deriva autoría para capturas.

## C-PV-80-04 futuro

La actuación preserva la frontera necesaria para la integración posterior:

~~~text
identidad autoral de la obra
≠
procedencia del apoyo IA
~~~

No se integra todavía apoyo IA.

---

# 11. Bloqueos materiales

Tras el contraste no aparece un bloqueo material que obligue a investigación.

La cuestión que antes estaba abierta:

> ¿qué objeto ordinario cuenta como obra para asociar autoría?

queda reducida localmente mediante:

~~~text
en HITO-80-CONV-02
→ ordinary.materials actúa como sustrato de obras identificables
~~~

sin universalizar esa decisión.

Por tanto:

~~~text
incompatibilidad conocida
→ NINGUNA

incertidumbre material bloqueante
→ NINGUNA IDENTIFICADA
~~~

PM-10 permite pasar a construcción incremental después del HUMAN GATE.

---

# 12. Estrategia de tests antes de producción

Antes de modificar producción deberá crearse una suite específica, por ejemplo:

~~~text
src/App.author-identity.integration.test.tsx
~~~

con tests preregistrados.

## T-CONV-80-03-01

Identidad operativa principal visible y estable.

## T-CONV-80-03-02

Crear una identidad autoral la convierte en opción reutilizable.

## T-CONV-80-03-03

Asignar una identidad autoral a una obra conserva el contenido exacto de esa
obra.

## T-CONV-80-03-04

La misma identidad puede reutilizarse en una segunda obra sin recrearla.

## T-CONV-80-03-05

Dos obras distintas pueden conservar identidades autorales distintas.

## T-CONV-80-03-06

Las asociaciones sobreviven a desmontaje/remontaje de App.

## T-CONV-80-03-07

Asignar autoría no modifica:

~~~text
ru2m1.previous
ru2m1.retained
ordinary.contextual-captures
post-v1-integrated.state
~~~

## T-CONV-80-03-08

Una captura contextual no aparece como obra seleccionable para autoría por el
mero hecho de existir.

---

# 13. Gate RED

Primero se crearán los tests.

Antes de modificar producción deberán ejecutarse y alcanzar un RED válido por
ausencia de la capacidad autoral ordinaria.

No será RED válido un fallo previo de:

- sintaxis;
- imports;
- entorno;
- selectores defectuosos;
- deuda TypeScript preexistente de comparación.

Sólo después podrá modificarse producción.

---

# 14. Cambio de producción permitido

Tras RED válido, el cambio deberá ser el menor capaz de satisfacer los tests.

Preferencia:

~~~text
App
→ reutiliza ordinary.materials
→ incorpora/comparte una unidad pequeña
  para catálogo y asociaciones autorales

sin modificar
→ ResumeExperience
→ PostV1IntegratedExperience
→ main.tsx
→ rutas
→ dependencias
→ realizaciones consolidadas
~~~

Si el estado autoral vuelve `App.tsx` desproporcionadamente complejo, podrá
extraerse una unidad pequeña dedicada.

Eso será una decisión local de mantenibilidad, no arquitectura definitiva.

---

# 15. Archivos inicialmente autorizables

La construcción debería limitarse a:

~~~text
src/App.tsx
src/App.author-identity.integration.test.tsx
~~~

y, sólo si la separación local mejora materialmente el cambio:

~~~text
src/components/...
o
src/realizations/author-identity/...
~~~

No se autoriza modificar otras capacidades para aprovechar la actuación.

---

# 16. Validación posterior

Secuencia prevista:

~~~text
1. suite específica de identidad autoral integrada

2. src/App.test.tsx

3. tests de R-80-03-M1

4. comprobar no regresión de captura integrada

5. criterio diferencial TypeScript
   mientras DEUDA-TSC-COMP-01 siga abierta

6. suite canónica completa

7. contraste humano ordinario
~~~

La deuda `DEUDA-TSC-COMP-01` no se corrige dentro de esta actuación salvo que
aparezca evidencia de dependencia material nueva.

---

# 17. Contraste humano final

El contraste deberá verificar en la App ordinaria:

1. reconocer la identidad operativa;
2. disponer de varias obras ordinarias;
3. crear una identidad autoral A;
4. crear una identidad autoral B;
5. asociar obra 1 a A;
6. asociar obra 2 a B;
7. reutilizar A en otra obra;
8. recargar;
9. comprobar que catálogo y asociaciones sobreviven;
10. comprobar que contenido y captura contextual permanecen intactos.

Pregunta discriminante:

> ¿La App permite elegir y reutilizar identidades autorales distintas de la
> identidad operativa para obras ordinarias sin interferir materialmente con
> el contenido ni con el recorrido ya existente?

---

# 18. Criterio de cierre

La actuación podrá cerrarse cuando:

~~~text
suite específica
→ GREEN

regresión App
→ GREEN

R-80-03-M1
→ GREEN

captura integrada
→ sin regresión

criterio diferencial TypeScript
→ SATISFECHO

suite canónica
→ GREEN

contraste humano
→ POSITIVO

CSO-80-03
→ SATISFECHO

HITO-80-CONV-02
→ SATISFECHO
~~~

---

# 19. Qué NO se deriva

El cierre no autorizará automáticamente:

- cuentas múltiples;
- autenticación;
- identidad legal;
- anonimato fuerte;
- reputación;
- permisos;
- delegación de autoría;
- publicación pública;
- integración de apoyo IA;
- integración de comparación;
- arquitectura global de identidad.

---

# 20. HUMAN GATE

La formulación bajo PM-10 queda completa.

Decisión pendiente:

> ¿ACEPTAS abrir `R-80-CONV-03` y comenzar por preregistrar los tests RED de
> integración de identidad autoral sobre obras ordinarias, manteniendo
> producción intacta hasta observar un rojo válido?

Hasta esa decisión:

~~~text
R-80-CONV-03
→ FORMULADA
→ NO ABIERTA

HITO-80-CONV-02
→ DERIVADO
→ NO SATISFECHO

producción
→ SIN CAMBIOS

siguiente paso autorizado
→ NINGUNO hasta HUMAN GATE
~~~


---

# 21. Resultado del HUMAN GATE

La persona responsable decide:

~~~text
R-80-CONV-03
→ ABRIR
~~~

La autorización queda limitada a:

~~~text
1. preregistrar tests de integración
2. observar RED válido
3. sólo entonces modificar producción
~~~

Estado:

~~~text
R-80-CONV-03
→ ABIERTA

producción
→ SIN CAMBIOS
~~~

---

# 22. Tests RED preregistrados

Se crea:

~~~text
src/App.author-identity.integration.test.tsx
~~~

con ocho pruebas:

~~~text
T-CONV-80-03-01
→ identidad operativa principal visible

T-CONV-80-03-02
→ identidad autoral creada queda reutilizable

T-CONV-80-03-03
→ asignar autoría no modifica contenido de obra

T-CONV-80-03-04
→ misma identidad reutilizable en otra obra

T-CONV-80-03-05
→ obras distintas conservan autorías distintas

T-CONV-80-03-06
→ catálogo y asociaciones sobreviven a remount

T-CONV-80-03-07
→ autoría no modifica estados ordinarios ni capturas

T-CONV-80-03-08
→ captura contextual no se convierte en obra autorable
~~~

Contrato observable inicial del arnés:

~~~text
Identidad operativa
Identidad autoral
Nueva identidad autoral
Crear identidad autoral
Obra ordinaria
Asignar autoría
~~~

Este vocabulario es contrato de prueba inicial, no arquitectura ni diseño visual
definitivo.

---

# 23. Gate actual

Debe ejecutarse:

~~~text
npx vitest run src/App.author-identity.integration.test.tsx
~~~

Resultado esperado:

~~~text
Test Files
→ 1 failed

Tests
→ 8 failed
~~~

La causa válida deberá ser la ausencia de la capacidad autoral ordinaria, por
ejemplo la inexistencia de:

~~~text
Identidad operativa
o
región "Identidad autoral"
~~~

No se considerará RED válido un fallo previo de sintaxis, imports, entorno,
selectores defectuosos ni DEUDA-TSC-COMP-01.

Hasta observar el resultado:

~~~text
tests
→ PREREGISTRADOS

RED
→ NO CONFIRMADO

producción
→ SIN CAMBIOS

implementación
→ NO AUTORIZADA TODAVÍA
~~~


---

# 24. Verificación del RED inicial

Ejecución comunicada:

~~~text
npx vitest run src/App.author-identity.integration.test.tsx
~~~

Resultado:

~~~text
Test Files  1 failed (1)
Tests       8 failed (8)
~~~

La evidencia de fallo muestra que App se monta correctamente con su recorrido
ordinario, incluyendo:

~~~text
Ahora
Captura contextual
Capturas conservadas
Continuidad compartida
Materiales anteriores
~~~

El fallo alcanza exactamente la capacidad ausente preregistrada:

~~~text
Unable to find an accessible element
with role "region"
and name "Identidad autoral"
~~~

No aparece un fallo previo de sintaxis, imports, entorno o configuración.

Por tanto:

~~~text
RED INICIAL
→ VÁLIDO

gate de implementación
→ SUPERADO

App.tsx
→ AUTORIZADA modificación mínima
~~~


---

# 25. Primera ejecución GREEN parcial y corrección del arnés

Primera ejecución tras implementar identidad autoral:

~~~text
Test Files  1 failed (1)
Tests       1 failed | 7 passed (8)
~~~

El único fallo aparece en `T-CONV-80-03-03`.

La producción muestra correctamente dos ocurrencias legítimas de:

~~~text
Obra ordinaria uno
~~~

1. una opción del selector de obra;
2. la obra ya asociada dentro de la región `Autorías de obras`.

El test usaba una consulta global:

~~~text
getByText("Obra ordinaria uno")
~~~

que resulta ambigua después de implementar la capacidad.

Se corrige únicamente el arnés para verificar el contenido dentro de:

~~~text
region "Autorías de obras"
~~~

No se modifica producción.

Estado:

~~~text
producción
→ SIN CAMBIOS

tests
→ corregidos sólo para desambiguar selector

siguiente gate
→ reejecutar src/App.author-identity.integration.test.tsx
~~~


---

# 26. GREEN de la suite específica de identidad autoral integrada

Reejecución comunicada:

~~~text
npx vitest run src/App.author-identity.integration.test.tsx
~~~

Resultado:

~~~text
Test Files  1 passed (1)
Tests       8 passed (8)
~~~

Por tanto:

~~~text
suite específica de identidad autoral
→ GREEN 8/8

producción
→ sin cambios adicionales desde 53a5230

gate 1 de validación posterior
→ SUPERADO
~~~

Siguiente gate preregistrado:

~~~text
npx vitest run src/App.test.tsx
~~~

No se avanza todavía a R-80-03-M1, captura integrada, criterio diferencial
TypeScript ni suite canónica hasta observar esta regresión histórica de App.


---

# 27. Regresión histórica parcial y ajuste de alcance del test

Ejecución:

~~~text
npx vitest run src/App.test.tsx
~~~

Resultado:

~~~text
Test Files  1 failed (1)
Tests       1 failed | 27 passed (28)
~~~

El único fallo pertenece al test:

~~~text
permite localizar y seleccionar humanamente
un material ordinario ante una necesidad posterior
~~~

La expectativa histórica usaba consultas globales para afirmar que:

~~~text
Material anterior A
Material anterior B
~~~

no estaban presentes antes de abrir `Materiales anteriores`.

Tras integrar identidad autoral esos contenidos aparecen legítimamente como
opciones del selector `Obra ordinaria`, aunque continúan ocultos dentro del
recorrido histórico `Materiales anteriores` hasta la acción explícita de
inspección.

Por tanto, el fallo no demuestra regresión funcional.

Se corrige únicamente el test histórico para acotar la ausencia a:

~~~text
region "Materiales anteriores"
~~~

que es la responsabilidad que el test pretendía verificar.

Estado:

~~~text
producción
→ SIN CAMBIOS

App.test.tsx
→ selector histórico acotado a su región

siguiente gate
→ reejecutar App.test.tsx
~~~


---

# 28. Corrección del import del arnés histórico

La reejecución de `App.test.tsx` alcanza:

~~~text
ReferenceError: within is not defined
~~~

Causa:

~~~text
el ajuste del test histórico introdujo within(...)
pero App.test.tsx no lo importaba todavía
~~~

Se corrige exclusivamente el import desde `@testing-library/react`.

No se modifica producción.

Estado:

~~~text
producción
→ SIN CAMBIOS

App.test.tsx
→ arnés corregido

siguiente gate
→ reejecutar App.test.tsx
~~~


---

# 29. Segundo ajuste de alcance del test histórico

La nueva reejecución alcanza el mismo test histórico, pero después de abrir
`Materiales anteriores`.

El fallo proviene de una segunda consulta global:

~~~text
getByText("Material anterior A")
~~~

que ahora encuentra legítimamente:

1. la opción del selector `Obra ordinaria`;
2. el contenido mostrado dentro de `Materiales anteriores`.

Se acota también esta comprobación positiva a la región histórica
`Materiales anteriores`.

No se modifica producción.

Estado:

~~~text
producción
→ SIN CAMBIOS

App.test.tsx
→ ambas fases del test histórico acotadas a su región

siguiente gate
→ reejecutar App.test.tsx
~~~


---

# 30. GREEN de regresión histórica de App

Ejecución comunicada:

~~~text
npx vitest run src/App.test.tsx
~~~

Resultado:

~~~text
Test Files  1 passed (1)
Tests       28 passed (28)
~~~

Por tanto:

~~~text
regresión histórica App
→ GREEN 28/28

gate 2 de validación posterior
→ SUPERADO
~~~

Siguiente gate preregistrado:

~~~text
npx vitest run \
  src/realizations/author-identity/AuthorIdentityBaseline.test.tsx \
  src/realizations/author-identity/AuthorIdentityExperience.test.tsx
~~~

No se avanza todavía a captura integrada, criterio diferencial TypeScript ni
suite canónica hasta observar este patrimonio realizativo.


---

# 31. GREEN del patrimonio realizativo R-80-03-M1

Ejecución comunicada:

~~~text
npx vitest run \
  src/realizations/author-identity/AuthorIdentityBaseline.test.tsx \
  src/realizations/author-identity/AuthorIdentityExperience.test.tsx
~~~

Resultado:

~~~text
Test Files  2 passed (2)
Tests       11 passed (11)
~~~

Por tanto:

~~~text
R-80-03-M1
→ GREEN 11/11

gate 3 de validación posterior
→ SUPERADO
~~~

Siguiente gate preregistrado:

~~~text
npx vitest run \
  src/App.capture.integration.test.tsx \
  src/realizations/capture/ContextualCaptureBaseline.test.tsx \
  src/realizations/capture/ContextualCaptureExperience.test.tsx
~~~

No se avanza todavía al criterio diferencial TypeScript ni a la suite canónica
hasta observar esta regresión de captura.


---

# 32. GREEN de regresión de captura contextual

Ejecución comunicada:

~~~text
npx vitest run \
  src/App.capture.integration.test.tsx \
  src/realizations/capture/ContextualCaptureBaseline.test.tsx \
  src/realizations/capture/ContextualCaptureExperience.test.tsx
~~~

Resultado:

~~~text
Test Files  3 passed (3)
Tests       20 passed (20)
~~~

Por tanto:

~~~text
captura contextual integrada
→ GREEN

patrimonio R-80-01-M1
→ GREEN

gate 4 de validación posterior
→ SUPERADO
~~~

Siguiente gate preregistrado:

~~~text
npm run typecheck
~~~

El resultado se evaluará mediante criterio diferencial mientras
`DEUDA-TSC-COMP-01` continúe abierta.

No se avanza todavía a la suite canónica completa hasta observar y clasificar
el resultado de TypeScript.


---

# 33. Criterio diferencial TypeScript — CTD-80-CONV-03

Ejecución comunicada:

~~~text
npm run typecheck
~~~

Resultado global:

~~~text
tsc --noEmit
→ FAIL

14 errores
→ 5 archivos
→ todos en src/realizations/comparison/
~~~

Archivos afectados:

~~~text
src/realizations/comparison/ComparisonProgress.test.tsx
src/realizations/comparison/InlineDetectionExperience.test.tsx
src/realizations/comparison/InlineDetectionExperience.tsx
src/realizations/comparison/LateralComparisonExperience.test.tsx
src/realizations/comparison/detectLiteralDifferences.ts
~~~

Errores observados:

~~~text
TS2503
→ Cannot find namespace 'JSX'

TS2532
→ Object is possibly 'undefined'

TS2345
→ number | undefined no asignable a number
~~~

Se verifica contra el commit inmediatamente anterior a la implementación
autoral:

~~~text
b1136bed990060799312a2df029028e88d068520
~~~

Resultado de comparación:

~~~text
ComparisonProgress.test.tsx
→ UNCHANGED

InlineDetectionExperience.test.tsx
→ UNCHANGED

InlineDetectionExperience.tsx
→ UNCHANGED

LateralComparisonExperience.test.tsx
→ UNCHANGED

detectLiteralDifferences.ts
→ UNCHANGED

package.json
→ UNCHANGED

tsconfig.json
→ UNCHANGED
~~~

Además, el typecheck no informa errores en:

~~~text
src/App.tsx
src/App.author-identity.integration.test.tsx
src/App.test.tsx
src/App.capture.integration.test.tsx
src/realizations/author-identity/*
src/realizations/capture/*
~~~

Por tanto:

~~~text
CTD-80-CONV-03
→ SATISFECHO

regresión TypeScript atribuible
a integración autoral
→ NO OBSERVADA

typecheck global
→ CONTINÚA FAIL

DEUDA-TSC-COMP-01
→ ABIERTA
→ PREEXISTENTE
→ AJENA A R-80-CONV-03
~~~

El gate diferencial no declara el repositorio globalmente limpio de TypeScript.
Sólo establece que la integración autoral no introduce nuevos errores
atribuibles.

Siguiente gate:

~~~text
npm test -- --run
~~~
