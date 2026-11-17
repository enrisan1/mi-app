# R-80-CONV-02 — Primera integración constructiva post-KGV: captura contextual ordinaria

**Fecha:** 17/11/2026  
**Estado:** FORMULADA; construcción pendiente de HUMAN GATE.  
**Obligación:** `OB-80-CONV-01`.  
**Hito:** `HITO-80-CONV-01 — captura contextual ordinaria sin regresión del recorrido vigente`.  
**Compromiso:** `C-PV-80-01 — Captura inmediata de aportaciones emergentes`.

---

# 1. Aplicación de PM-10

PM-10 exige:

~~~text
necesidad material de producto
↓
hipótesis mínima de realización/arquitectura
↓
contraste con compromisos consolidados
↓
¿bloqueo material?
├─ no → construir
└─ sí → investigar sólo el conflicto
~~~

La necesidad material ya está establecida:

~~~text
C-PV-80-01
→ compromiso Product vigente

R-80-01-M1
→ realizabilidad mínima demostrada

App ordinaria
→ no ofrece todavía captura contextual suficiente

HITO-80-CONV-01
→ derivado y verificable
~~~

Por tanto:

~~~text
necesidad productiva
→ SUFICIENTEMENTE IDENTIFICADA
~~~

---

# 2. Hipótesis mínima de construcción

La hipótesis mínima es:

> incorporar al recorrido ordinario de `App` una operación de captura breve que
> pueda invocarse sin sustituir materialmente la actividad en curso, conserve la
> aportación con referencia temporal y permita recuperarla posteriormente sin
> incorporarla automáticamente al contenido ordinario.

No se presupone que `ContextualCaptureExperience` deba montarse literalmente.

La realización existente actúa como patrimonio probatorio y referencia de
propiedades, no como arquitectura obligatoria.

---

# 3. Alcance constructivo mínimo

La actuación puede modificar exclusivamente lo necesario para que `App` haga
practicable `CSO-80-01`.

Debe existir en el recorrido ordinario:

~~~text
actividad/trabajo ordinario visible
+
acción "Capturar aportación" o equivalente
↓
campo breve contextual
↓
acción humana explícita de conservación
↓
captura persistida
+
referencia temporal
↓
captura se cierra
+
actividad sigue disponible
↓
consulta posterior de capturas
~~~

---

# 4. Estado y persistencia

Se mantiene la separación:

~~~text
ordinary.materials
→ materiales/trabajos ordinarios

capturas contextuales
→ estado propio
~~~

La primera hipótesis de persistencia puede reutilizar el formato probado por
R-80-01-M1:

~~~text
Capture {
  id
  text
  capturedAt
}
~~~

pero no se eleva todavía ese tipo a modelo general del producto.

La clave de persistencia deberá ser propia y no reutilizar:

~~~text
ordinary.materials
ru2m1.previous
ru2m1.retained
post-v1-integrated.state
~~~

Una captura no debe aparecer automáticamente en ninguna de esas estructuras.

---

# 5. Reutilización permitida

Puede reutilizarse de R-80-01-M1:

- la estructura mínima de captura;
- carga/guardado defensivo;
- marca temporal ISO;
- flujo abrir → escribir → conservar/cancelar;
- lista posterior de capturas.

No debe copiarse por inercia:

- el encabezado o composición visual del testigo;
- su superficie de “actividad principal” artificial;
- nombres de almacenamiento experimentales si interfieren con el producto;
- decisiones de interfaz no derivadas.

---

# 6. CSO-80-01 traducido a observables de integración

## O-CONV-80-01-01 — actividad ordinaria preservada

Al abrir la captura sigue siendo identificable y utilizable el trabajo ordinario
que estaba en curso.

## O-CONV-80-01-02 — captura explícita

Sólo una acción humana explícita conserva la aportación.

## O-CONV-80-01-03 — referencia temporal

La captura conservada contiene una referencia temporal suficiente y observable.

## O-CONV-80-01-04 — no incorporación automática

Conservar una captura no modifica:

- el contenido actual;
- `ordinary.materials`;
- `ru2m1.previous`;
- `ru2m1.retained`;
- ni una trayectoria post-V1 existente,

salvo que otra operación ordinaria ya prevista los modifique por su propio
contrato.

## O-CONV-80-01-05 — continuidad inmediata

Tras conservar o cancelar la captura, la actividad ordinaria sigue disponible
sin reconstrucción material del recorrido.

## O-CONV-80-01-06 — recuperación posterior

Tras desmontar y volver a montar `App`, la captura sigue consultable desde el
producto ordinario.

## O-CONV-80-01-07 — separación de estatuto

Una captura recuperada permanece como captura y no se convierte por sí misma en:

- material ordinario;
- contenido de una obra;
- clasificación;
- tarea;
- instrucción de IA.

## O-CONV-80-01-08 — regresión cero relevante

Los recorridos previamente validados de `App` continúan funcionando.

---

# 7. Falsadores de la construcción

La actuación será insuficiente si ocurre cualquiera de estos casos:

1. abrir captura sustituye materialmente la actividad ordinaria;
2. conservar captura modifica el contenido ordinario;
3. una captura aparece automáticamente en `ordinary.materials`;
4. la captura altera `ru2m1.previous` o `ru2m1.retained`;
5. elimina o sobrescribe `post-v1-integrated.state`;
6. no existe recuperación posterior;
7. cancelar conserva datos;
8. la referencia temporal no es suficientemente identificable;
9. para satisfacer el hito es necesario introducir clasificación, IA, búsqueda,
   inbox o arquitectura general;
10. la integración rompe pruebas previas relevantes de `App`.

---

# 8. Estrategia de tests antes de producción

Antes de modificar `App.tsx` deberán añadirse tests de integración específicos
en un archivo nuevo, por ejemplo:

~~~text
src/App.capture.integration.test.tsx
~~~

La separación en archivo propio evita mezclar inicialmente el nuevo contrato con
la suite histórica de App.

## T-CONV-80-01-01

~~~text
render App
↓
abrir captura
↓
actividad ordinaria continúa presente
~~~

## T-CONV-80-01-02

~~~text
escribir captura
↓
cancelar
↓
no se conserva
↓
actividad ordinaria no cambia
~~~

## T-CONV-80-01-03

~~~text
escribir captura
↓
conservar
↓
aparece como captura conservada
+
referencia temporal válida
~~~

## T-CONV-80-01-04

~~~text
estado ordinario preexistente conocido
+
conservar captura
↓
ordinary.materials
ru2m1.previous
ru2m1.retained
post-v1-integrated.state
→ permanecen sin modificación atribuible a captura
~~~

## T-CONV-80-01-05

~~~text
captura conservada
↓
unmount
↓
render App
↓
captura recuperable
~~~

## T-CONV-80-01-06

~~~text
captura conservada
↓
no aparece como material ordinario
ni contenido incorporado
~~~

## T-CONV-80-01-07

~~~text
después de capturar
↓
puede continuarse el recorrido ordinario
de creación/continuación
~~~

---

# 9. Gate RED

La primera ejecución deberá realizarse antes de tocar producción.

Resultado válido esperado:

~~~text
tests nuevos
→ RED

causa
→ App todavía no ofrece
  la operación contextual exigida
~~~

No será rojo válido un fallo por:

- sintaxis;
- imports;
- entorno;
- configuración;
- selectors ambiguos derivados del propio test;
- dependencia inexistente.

Sólo cuando el fallo alcance el comportamiento ausente previsto podrá comenzar
la modificación de producción.

---

# 10. Cambio de producción permitido

Tras RED válido, la implementación deberá ser el cambio menor capaz de hacer
verdes los tests.

Preferencia inicial:

~~~text
App
→ incorpora estado/flujo mínimo de captura
  o compone una unidad pequeña reutilizable

sin alterar
→ main.tsx
→ rutas
→ dependencias
→ PostV1IntegratedExperience
→ ResumeExperience
→ realizaciones consolidadas
~~~

Si durante la implementación se descubre que integrar directamente el estado en
`App` lo hace crecer o acoplarse de forma desproporcionada, podrá extraerse una
unidad pequeña de captura.

Eso será una decisión local de mantenibilidad, no una nueva arquitectura.

---

# 11. Archivos autorizables

La construcción debería limitarse inicialmente a:

~~~text
src/App.tsx
src/App.capture.integration.test.tsx
~~~

y, sólo si resulta necesario para mantener el cambio pequeño:

~~~text
src/components/...
o
src/realizations/capture/...
~~~

No se autoriza modificar otros recorridos para “aprovechar” la actuación.

---

# 12. Validación posterior

Después del primer verde específico deberán ejecutarse, en este orden:

~~~text
1. suite nueva de captura integrada

2. src/App.test.tsx

3. tests de R-80-01-M1
   para comprobar que el patrimonio realizativo
   no ha sido accidentalmente roto

4. typecheck

5. suite canónica completa
~~~

Cada gate deberá observarse antes de interpretar el siguiente.

No se considerará alcanzado HITO-80-CONV-01 sólo porque compile.

---

# 13. Contraste humano final del hito

Después de los gates técnicos, una comprobación humana breve deberá verificar en
la App ordinaria:

1. comenzar o retomar un trabajo;
2. abrir captura;
3. conservar una idea breve;
4. comprobar que el trabajo seguía presente;
5. continuar el trabajo;
6. recuperar posteriormente la captura.

Pregunta:

> ¿La captura conserva en el producto ordinario la ventaja contextual observada
> en R-80-01-M1 sin interferir materialmente con el recorrido previo?

Sólo una respuesta positiva permite cerrar el componente humano del hito.

---

# 14. Criterio de cierre de R-80-CONV-02

La actuación podrá cerrarse cuando:

~~~text
tests específicos de integración
→ GREEN

regresión App
→ GREEN

patrimonio R-80-01-M1
→ GREEN

typecheck
→ PASS

suite canónica
→ PASS

contraste humano ordinario
→ POSITIVO

CSO-80-01
→ SATISFECHO

HITO-80-CONV-01
→ SATISFECHO
~~~

---

# 15. Qué NO se deriva de este cierre

Aunque el hito se alcance, no quedarán autorizadas automáticamente:

- identidad autoral;
- apoyo IA;
- comparación;
- reorganización general de App;
- arquitectura compartida para los cuatro compromisos;
- nuevo horizonte;
- nuevo Product Value.

El punto de continuidad será reaplicar el orden ya derivado y comprobar si
procede abrir la integración de `C-PV-80-03`.

---

# 16. HUMAN GATE de construcción

La formulación bajo PM-10 queda completa.

La decisión pendiente es:

> ¿ACEPTAS abrir `R-80-CONV-02` y comenzar por preregistrar los tests RED de
> integración de captura contextual en `App`, manteniendo producción intacta
> hasta observar un rojo válido?

Hasta esa decisión:

~~~text
R-80-CONV-02
→ FORMULADA
→ NO ABIERTA

HITO-80-CONV-01
→ DERIVADO
→ NO SATISFECHO

producción
→ SIN CAMBIOS

siguiente paso autorizado
→ NINGUNO hasta HUMAN GATE
~~~


---

# 17. Resultado del HUMAN GATE

La persona responsable decide:

~~~text
R-80-CONV-02
→ ABRIR
~~~

La autorización queda limitada al orden preregistrado:

~~~text
1. crear tests de integración
2. observar RED válido
3. sólo entonces modificar producción
~~~

Estado:

~~~text
R-80-CONV-02
→ ABIERTA

producción
→ todavía SIN CAMBIOS
~~~

---

# 18. Tests RED preregistrados

Se crea:

~~~text
src/App.capture.integration.test.tsx
~~~

con siete pruebas:

~~~text
T-CONV-80-01-01
→ abrir captura mantiene la actividad ordinaria

T-CONV-80-01-02
→ cancelar no conserva ni altera estado ordinario

T-CONV-80-01-03
→ conservar produce captura + referencia temporal válida

T-CONV-80-01-04
→ captura no modifica estados ordinarios preexistentes

T-CONV-80-01-05
→ captura sobrevive a desmontaje/remontaje de App

T-CONV-80-01-06
→ captura no se convierte en ordinary.materials
  ni en ru2m1.previous/retained

T-CONV-80-01-07
→ después de capturar puede continuar el recorrido ordinario
~~~

Cada test verifica primero que existe el recorrido ordinario y sólo después
intenta invocar la nueva operación.

El contrato accesible mínimo utilizado por el arnés es:

~~~text
Capturar aportación
Aportación breve
Conservar
Cancelar
~~~

Estos nombres no constituyen arquitectura ni diseño visual definitivo; son el
contrato observable inicial del hito y pueden revisarse si la implementación
mínima demuestra una alternativa equivalente mejor.

---

# 19. Gate actual

Los tests han sido preregistrados, pero no se declara RED todavía.

Debe ejecutarse localmente:

~~~text
npx vitest run src/App.capture.integration.test.tsx
~~~

Resultado esperado:

~~~text
Test Files
→ 1 failed

Tests
→ 7 failed

causa esperada
→ ausencia del botón/operación
  "Capturar aportación" en App
~~~

Sólo si los fallos alcanzan esa ausencia —sin fallos previos de sintaxis,
imports, entorno o selectores— quedará superado el gate RED.

Hasta observar el resultado:

~~~text
tests
→ PREREGISTRADOS

RED
→ NO CONFIRMADO

App.tsx
→ SIN CAMBIOS

implementación
→ NO AUTORIZADA TODAVÍA
~~~


---

# 20. Verificación del RED inicial

Ejecución comunicada:

~~~text
npx vitest run src/App.capture.integration.test.tsx
~~~

Resultado:

~~~text
Test Files  1 failed (1)
Tests       7 failed (7)
~~~

Los siete fallos alcanzan el comportamiento ausente preregistrado:

~~~text
Unable to find an accessible element
with role "button"
and name "Capturar aportación"
~~~

El recorrido ordinario sí se encuentra montado durante los fallos, incluyendo:

~~~text
Dónde estás
Un problema para pensar
Ahora
Crear
Continuidad compartida
~~~

No se observa un fallo previo de sintaxis, imports, entorno o configuración.

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

# 21. Primera ejecución GREEN parcial y corrección del arnés

Primera ejecución tras implementar la captura:

~~~text
Test Files  1 failed (1)
Tests       2 failed | 5 passed (7)
~~~

La evidencia visible muestra que la captura ya funciona y permanece conservada,
pero dos aserciones del arnés estaban acopladas a estados históricos concretos
de `ResumeExperience`.

## T-CONV-80-01-07

Tras crear el primer trabajo ordinario desde estado vacío, `ResumeExperience`
muestra:

~~~text
role="status"
Lo que has aportado
Trabajo ordinario posterior
~~~

y no el label `Actuación actual`, que pertenece al recorrido de reanudación.

Por tanto se corrige sólo el test para observar el resultado ordinario real.

## T-CONV-80-01-04

El caso precarga `ru2m1.previous`; por contrato histórico eso lleva a
`ResumeExperience` a estado `Retomar`, no `Ahora`.

El helper se corrige para aceptar ambas formas legítimas de actividad ordinaria:

~~~text
Ahora
o
Retomar
~~~

No se modifica producción.

Estado:

~~~text
producción
→ SIN CAMBIOS respecto de 06e247c

tests
→ corregidos sólo en expectativas históricas

siguiente gate
→ reejecutar src/App.capture.integration.test.tsx
~~~


---

# 22. GREEN de la suite específica de integración

Reejecución comunicada tras corregir únicamente el arnés:

~~~text
npx vitest run src/App.capture.integration.test.tsx
~~~

Resultado:

~~~text
Test Files  1 passed (1)
Tests       7 passed (7)
~~~

Por tanto:

~~~text
suite específica de captura integrada
→ GREEN 7/7

producción
→ sin cambios adicionales desde 06e247c

gate 1 de validación posterior
→ SUPERADO
~~~

Siguiente gate preregistrado:

~~~text
npx vitest run src/App.test.tsx
~~~

No se avanza todavía a tests de R-80-01-M1, typecheck ni suite canónica hasta
observar esta regresión histórica de App.


---

# 23. GREEN de la regresión histórica de App

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
regresión histórica de App
→ GREEN 28/28

gate 2 de validación posterior
→ SUPERADO
~~~

No se observa regresión en los recorridos históricos cubiertos por `App.test.tsx`.

Siguiente gate preregistrado:

~~~text
npx vitest run \
  src/realizations/capture/ContextualCaptureBaseline.test.tsx \
  src/realizations/capture/ContextualCaptureExperience.test.tsx
~~~

No se avanza todavía a typecheck ni a la suite canónica hasta observar este
resultado.
