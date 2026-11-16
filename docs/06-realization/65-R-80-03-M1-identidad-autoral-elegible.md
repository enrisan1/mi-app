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
8. cambiar la identidad autoral asociada no modifica automáticamente el contenido
   de la obra;
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

Cambiar la autoría no cambia el contenido de la obra.

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
6. cambiar autoría altera automáticamente el contenido;
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
