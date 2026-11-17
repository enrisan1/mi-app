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
