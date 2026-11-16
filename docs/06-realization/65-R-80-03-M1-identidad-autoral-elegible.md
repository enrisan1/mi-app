# R-80-03-M1 — Testigo mínimo de identidad autoral elegible

**Fecha:** 16/11/2026  
**Estado:** ABIERTA; diseño realizativo y pruebas pendientes.  
**Obligación:** OB-80-NEXT-02.  
**Compromiso Product:** C-PV-80-03 — Identidad autoral elegible.

---

# 1. Objetivo

Demostrar, en un alcance mínimo y falsable, que una persona puede operar con una
identidad principal y elegir para distintas obras identidades autorales
reutilizables sin que la identidad operativa determine forzosamente la firma.

La actuación no pretende todavía diseñar un sistema general de cuentas,
autenticación o identidad.

---

# 2. Situación humana

~~~text
una persona
↓
opera con una identidad principal
↓
dispone de varias identidades autorales reutilizables
↓
elige cuál firma cada obra
~~~

La diferencia constitutiva es:

~~~text
identidad operativa
≠
identidad autoral
~~~

---

# 3. Criterio mínimo candidato — CR-80-03-M1

La suficiencia exige conjuntamente:

1. existe una identidad operativa principal identificable;
2. existe al menos una identidad autoral distinta de la operativa;
3. la identidad autoral es reutilizable y no mero texto libre efímero;
4. la persona elige explícitamente la identidad autoral de una obra;
5. la elección de autoría no modifica la identidad operativa;
6. una misma identidad autoral puede reutilizarse en otra obra;
7. obras distintas pueden quedar asociadas a identidades autorales distintas;
8. seleccionar la identidad autoral de una obra no modifica automáticamente su
   contenido;
9. la identidad operativa no se convierte obligatoriamente en firma autoral.

---

# 4. Caso mínimo

~~~text
identidad operativa
→ Usuario principal

identidades autorales
→ Alias A
→ Alias B

obra 1
→ Alias A

obra 2
→ Alias B

obra 3
→ Alias A reutilizado
~~~

El caso debe demostrar que Alias A es el mismo valor autoral reutilizable en
obra 1 y obra 3, no dos cadenas introducidas independientemente.

---

# 5. Separaciones necesarias

La actuación debe mantener:

~~~text
identidad operativa
≠
identidad autoral

identidad autoral
≠
cuenta adicional

selección de firma
≠
modificación de contenido

seudónimo
≠
anonimato fuerte
~~~

No debe introducir por necesidad:

- múltiples cuentas;
- login;
- autenticación;
- verificación legal;
- reputación;
- permisos;
- delegación;
- colaboración;
- ocultación de identidad interna.

---

# 6. Observables

## O-80-03-M1-01

La persona puede reconocer cuál es la identidad operativa vigente.

## O-80-03-M1-02

Puede reconocer las identidades autorales disponibles como entidades reutilizables.

## O-80-03-M1-03

Puede seleccionar explícitamente una identidad autoral para una obra.

## O-80-03-M1-04

La obra conserva identificable la identidad autoral seleccionada.

## O-80-03-M1-05

Una misma identidad autoral puede usarse de nuevo en otra obra sin recrearla.

## O-80-03-M1-06

Otra obra puede usar una identidad autoral diferente.

## O-80-03-M1-07

Seleccionar la autoría no cambia el contenido de la obra.

## O-80-03-M1-08

La identidad operativa permanece estable durante las selecciones.

---

# 7. Falsadores

R-80-03-M1 debe considerarse insuficiente si:

1. la firma queda forzosamente igualada a la identidad operativa;
2. el supuesto alias sólo es un campo libre sin persistencia/reutilización;
3. reutilizar una identidad exige volver a escribirla como valor nuevo;
4. la elección de firma altera la identidad operativa;
5. una obra no conserva de forma identificable la autoría elegida;
6. seleccionar autoría altera automáticamente el contenido;
7. demostrar el caso exige introducir cuentas múltiples o autenticación;
8. la separación sólo existe como etiqueta visual sin comportamiento distinguible.

---

# 8. Estrategia de validación

La secuencia será:

~~~text
M1-A
→ baseline mínimo con identidad operativa usada como firma obligatoria

M1-B
→ testigo con identidades autorales reutilizables elegibles

TH-80-03-01
→ contraste humano directo
~~~

El baseline debe permitir publicar/constituir obras, pero sin separación entre
identidad operativa y autoral.

El testigo debe permitir la separación sin añadir complejidad no comprometida.

---

# 9. Pregunta discriminante humana

> ¿La posibilidad de elegir y reutilizar identidades autorales distintas de la
> identidad operativa produce una diferencia material frente a estar obligado a
> firmar cada obra con la identidad operativa?

---

# 10. Estado

~~~text
OB-80-NEXT-02
→ ACEPTADA

R-80-03-M1
→ ABIERTA

diseño realizativo
→ PENDIENTE

tests
→ PENDIENTES

contraste humano
→ PENDIENTE
~~~


---

# 11. Diseño realizativo de M1-A y M1-B

## 11.1. M1-A — baseline con firma operativa obligatoria

Archivo previsto de producción:

~~~text
src/realizations/author-identity/AuthorIdentityBaseline.tsx
~~~

Contrato observable:

~~~text
identidad operativa
→ Usuario principal

obra
→ contenido elegido por la persona
→ firma = Usuario principal

identidad autoral distinta seleccionable
→ NO
~~~

El baseline no debe impedir crear una obra. Su limitación específica es que la
identidad operativa determina forzosamente la firma.

### Tests preregistrados

~~~text
T-80-03-A01
→ identidad operativa principal identificable

T-80-03-A02
→ una obra queda firmada necesariamente
  con la identidad operativa

T-80-03-A03
→ no existe identidad autoral distinta seleccionable
~~~

---

## 11.2. M1-B — testigo de identidad autoral elegible

Archivo previsto de producción:

~~~text
src/realizations/author-identity/AuthorIdentityExperience.tsx
~~~

Contrato observable:

~~~text
identidad operativa
→ Usuario principal

catálogo autoral reutilizable
→ Alias A
→ Alias B

obra 1
→ selección explícita Alias A

obra 2
→ selección explícita Alias B

obra 3
→ reutilización del mismo Alias A
~~~

La reutilización no se demostrará mediante un campo de texto libre repetido.
Alias A y Alias B deben existir como opciones autorales estables seleccionables.

### Tests preregistrados

~~~text
T-80-03-B01
→ distingue identidad operativa de identidades autorales elegibles

T-80-03-B02
→ permite elegir explícitamente Alias A para una obra

T-80-03-B03
→ elegir autoría no modifica la identidad operativa

T-80-03-B04
→ obras distintas pueden usar identidades autorales distintas

T-80-03-B05
→ Alias A puede reutilizarse en otra obra
  sin duplicar/recrear la identidad

T-80-03-B06
→ conserva asociación obra-autoría tras nueva ejecución

T-80-03-B07
→ seleccionar autoría no modifica el contenido de la obra

T-80-03-B08
→ la firma no queda forzada a la identidad operativa
~~~

---

# 12. Decisiones deliberadamente no tomadas

Los tests no prescriben:

- base de datos;
- modelo definitivo de perfil;
- creación/edición de alias por la persona;
- número arbitrario de alias;
- login;
- autenticación;
- publicación real;
- visibilidad pública de la identidad operativa;
- privacidad;
- identidad legal;
- reputación;
- permisos;
- colaboración.

El caso mínimo puede partir de dos identidades autorales ya disponibles porque
la obligación actual es demostrar separación, selección y reutilización, no
diseñar todavía el ciclo de administración de identidades.

Tampoco se exige cambiar la autoría después de haber constituido una obra. Esa
capacidad sería una ampliación no necesaria para demostrar C-PV-80-03 en este
testigo.

---

# 13. Estado de tests rojos

Se han creado:

~~~text
src/realizations/author-identity/AuthorIdentityBaseline.test.tsx
src/realizations/author-identity/AuthorIdentityExperience.test.tsx
~~~

Los tests cargan dinámicamente:

~~~text
./AuthorIdentityBaseline.tsx
./AuthorIdentityExperience.tsx
~~~

que todavía no existen.

Por diseño, el resultado esperado es:

~~~text
M1-A
→ RED por ausencia de AuthorIdentityBaseline.tsx

M1-B
→ RED por ausencia de AuthorIdentityExperience.tsx
~~~

No se considerará rojo válido un fallo de sintaxis, entorno o infraestructura
que impida alcanzar esas ausencias previstas.

---

# 14. Gate para comenzar implementación

Sólo después de observar:

~~~text
tests ejecutan
+
M1-A falla por ausencia del baseline
+
M1-B falla por ausencia del testigo
+
no existe fallo previo no relacionado
~~~

se implementará primero M1-A y se verificará en verde antes de crear M1-B.


---

# 15. Verificación del rojo inicial

Ejecución comunicada:

~~~text
npx vitest run \
  src/realizations/author-identity/AuthorIdentityBaseline.test.tsx \
  src/realizations/author-identity/AuthorIdentityExperience.test.tsx
~~~

Resultado:

~~~text
Test Files  2 failed (2)
Tests       11 failed (11)
~~~

Distribución:

~~~text
M1-A
→ 3/3 RED

M1-B
→ 8/8 RED
~~~

Todos los fallos alcanzan exactamente las ausencias preregistradas:

~~~text
R-80-03-M1-A ausente
→ falta ./AuthorIdentityBaseline.tsx

R-80-03-M1-B ausente
→ falta ./AuthorIdentityExperience.tsx
~~~

No aparece fallo previo de sintaxis, infraestructura o entorno.

Por tanto:

~~~text
ROJO INICIAL
→ VÁLIDO

gate de implementación
→ SUPERADO
~~~

La siguiente actuación técnica queda limitada a implementar primero M1-A y
verificar sus 3 tests antes de crear M1-B.


---

# 16. Validación técnica

## M1-A — baseline

Ejecución comunicada:

~~~text
npx vitest run src/realizations/author-identity/AuthorIdentityBaseline.test.tsx
~~~

Resultado:

~~~text
Test Files  1 passed (1)
Tests       3 passed (3)
~~~

Por tanto:

~~~text
M1-A
→ GREEN 3/3
~~~

## M1-B — identidad autoral elegible

Ejecución comunicada:

~~~text
npx vitest run src/realizations/author-identity/AuthorIdentityExperience.test.tsx
~~~

Resultado:

~~~text
Test Files  1 passed (1)
Tests       8 passed (8)
~~~

Por tanto:

~~~text
M1-B
→ GREEN 8/8
~~~

## Estado técnico consolidado

~~~text
M1-A
→ 3/3 GREEN

M1-B
→ 8/8 GREEN

total
→ 11/11 propiedades automatizadas satisfechas
~~~

Esto demuestra propiedades funcionales del testigo, pero no todavía que la
diferencia sea materialmente valiosa para una persona.

---

# 17. TH-80-03-01 — contraste humano pendiente

Debe compararse:

~~~text
M1-A
→ identidad operativa = firma obligatoria

M1-B
→ identidad operativa separada
→ identidad autoral elegible y reutilizable
~~~

La prueba humana debe usar varias obras para que la reutilización sea observable.

Caso sugerido:

~~~text
identidad operativa
→ Usuario principal

obra 1
→ título/contenido breve
→ intención de firmar como Alias A

obra 2
→ contenido distinto
→ intención de firmar como Alias B

obra 3
→ contenido distinto
→ intención de volver a firmar como Alias A
~~~

Pregunta discriminante:

> ¿La posibilidad de mantener una identidad operativa estable y elegir/reutilizar
> identidades autorales distintas produce una diferencia material frente a estar
> obligado a firmar todas las obras con la identidad operativa?

Estado:

~~~text
TH-80-03-01
→ PENDIENTE
~~~
