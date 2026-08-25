# Investigación de realización de `RU2M1-U01`

## Estado

**Necesidad investigada:** `RU2M1-U01 — Observabilidad de la aceptación previa a la interrupción`.
**Pérdida de origen:** `L-OU001-01`.
**Fenómeno de origen:** `F-OU001-01`.
**Observación de origen:** `OU-RU2M1-001`.
**Realización afectada:** `R-U2-M1`.
**Estado:** investigación cerrada dentro de su alcance; `MR-U01-01` seleccionada, construida y validada; resultado propagado posteriormente al documento canónico `00-R-U2-M1.md`.

---

## Propósito

Este documento investiga cómo realizar:

```text
RU2M1-U01
```

sin introducir capacidades que no hayan sido justificadas.

La necesidad establecida es:

> Cuando la persona ejecuta en `S1` la actuación mediante la que un `X`
> válido queda aceptado para su disponibilidad posterior, la realización
> debe producir una diferencia observable suficiente para que la persona
> pueda distinguir la aceptación efectiva de `X` de la ausencia de efecto,
> sin necesidad de inspección técnica externa.

La investigación no pretende rediseñar `R-U2-M1`.

Pretende localizar la modificación mínima que elimine:

```text
L-OU001-01
```

conservando las propiedades ya validadas de la realización.

---

## 1. Restricciones derivadas

Una solución candidata deberá satisfacer simultáneamente las siguientes
condiciones.

### `CU01-01 — Diferencia observable`

Después de aceptar correctamente un `X` válido debe producirse una diferencia
observable para la persona.

```text
X aceptado
≠
ningún efecto
```

---

### `CU01-02 — Correspondencia con aceptación efectiva`

La diferencia observable sólo debe producirse cuando `X` haya sido
efectivamente aceptado.

Por tanto:

```text
X inválido
↓
no persistido
↓
no confirmación de aceptación
```

---

### `CU01-03 — Permanencia en S1`

La diferencia observable no debe constituir inmediatamente `S2(X)`.

Debe conservarse:

```text
S1
↓
X aceptado
↓
manifestación observable
↓
interrupción
↓
nueva ejecución
↓
S2(X)
```

y no:

```text
S1
↓
X aceptado
↓
S2(X)
```

---

### `CU01-04 — Conservación de la interrupción`

`X` debe continuar atravesando una separación efectiva entre ejecuciones.

La solución no puede convertir la persistencia en mera continuidad del
estado React de una misma ejecución.

---

### `CU01-05 — Conservación literal de X`

La modificación no debe transformar, normalizar ni interpretar
semánticamente `X`.

---

### `CU01-06 — Sin nuevas obligaciones semánticas`

La solución no debe:

- interpretar `X`;
- determinar `Y`;
- recomendar una continuación;
- crear tareas;
- introducir workflows;
- ni establecer una relación semántica nueva.

---

### `CU01-07 — Sin inspección técnica externa`

La persona no debe necesitar:

```text
DevTools
localStorage
consola
logs internos
```

para conocer que `X` ha sido aceptado.

---

## 2. Criterios de selección

Entre varias soluciones que satisfagan `CU01-01…CU01-07` se preferirá la que:

1. introduzca menos estructura nueva;
2. imponga menos actuaciones adicionales a la persona;
3. conserve mejor las propiedades ya auditadas;
4. sea directamente verificable;
5. sea reversible;
6. y no anticipe capacidades futuras.

La economía se evalúa respecto de la realización completa y de la situación
humana, no únicamente mediante número de líneas de código.

---

## 3. Candidatas examinadas

### `C-U01-01 — Transición inmediata a S2(X)`

Después de persistir `X`, la interfaz podría volver a renderizarse y mostrar
inmediatamente:

```text
De antes
```

#### Ventaja

Produce una diferencia observable clara.

#### Problema

Colapsa:

```text
persistencia
↓
interrupción
↓
nueva ejecución
↓
S2(X)
```

en:

```text
persistencia
↓
S2(X)
```

La candidata incumple:

```text
CU01-03
CU01-04
```

#### Resultado

```text
C-U01-01
→ descartada
```

---

### `C-U01-02 — Notificación modal del navegador`

Después de persistir `X` podría ejecutarse, por ejemplo:

```ts
window.alert(...);
```

#### Ventajas

- produce una diferencia observable;
- no necesita modificar el estado React;
- no constituye `S2(X)`;
- requiere muy poca modificación técnica.

#### Problema

La persona debe realizar una actuación adicional obligatoria:

```text
X aceptado
↓
modal
↓
persona debe cerrarlo
↓
puede continuar
```

Esa actuación no procede de `RU2M1-U01`.

La necesidad exige que la aceptación sea observable.

No exige que la persona tenga que confirmar o cerrar una nueva interacción.

La economía técnica sería alta, pero la economía de la situación humana sería
menor.

#### Resultado

```text
C-U01-02
→ suficiente estructuralmente
→ no mínima respecto de la actuación humana
→ no seleccionada
```

---

### `C-U01-03 — Mutación imperativa del DOM`

Después de persistir `X` podría modificarse directamente algún elemento de la
interfaz:

```text
botón
texto
indicador
```

sin producir un nuevo render React.

#### Ventajas

- produce una diferencia observable;
- puede permanecer dentro de `S1`;
- evita inicialmente la transición a `S2(X)`.

#### Problema

Introduciría un estado visible de la realización que React no representa en
su propio estado:

```text
estado DOM
≠
estado representado por el componente
```

La solución introduciría dos fuentes de estado para resolver una necesidad
que puede realizarse mediante una sola.

Además, un render posterior podría sobrescribir la mutación.

#### Resultado

```text
C-U01-03
→ posible
→ innecesariamente frágil
→ no seleccionada
```

---

### `C-U01-04 — Estado local de aceptación dentro de S1`

La realización puede conservar explícitamente una diferencia local entre:

```text
S1
antes de aceptar X
```

y:

```text
S1
después de aceptar X
```

sin convertir esta diferencia en una nueva situación conceptual.

Conceptualmente:

```text
S1
│
├── X todavía no aceptado
│
└── X aceptado
        ↓
   manifestación observable
        ↓
   interrupción
        ↓
   nueva ejecución
        ↓
   S2(X)
```

La diferencia:

```text
X aceptado / X todavía no aceptado
```

pertenece únicamente al estado local de la interfaz durante `S1`.

No introduce una tercera situación equivalente a `S2`.

#### Problema técnico descubierto

La implementación actual contiene:

```ts
const restoredPrevious = localStorageResumeRepository.loadPrevious();
```

La lectura se ejecuta en cada render.

Si después de:

```ts
savePrevious(X);
```

se introdujera simplemente:

```ts
setAccepted(true);
```

se produciría un nuevo render.

En ese render:

```text
loadPrevious()
↓
encuentra X recién guardado
↓
isResumeAvailable(restoredPrevious) = true
↓
S2(X)
```

La misma ejecución podría constituir prematuramente `S2(X)`.

Por tanto, la candidata necesita conservar separadamente:

```text
antecedente restaurado al comienzo de la ejecución
```

de:

```text
X guardado durante la ejecución actual
```

---

## 4. Distinción necesaria entre restauración y persistencia

La observación de uso y la investigación técnica permiten hacer explícita una
distinción que ya estaba implícita en la especificación:

```text
restoredPrevious
```

debe representar:

> el antecedente disponible al comenzar la ejecución actual.

No debe significar:

> cualquier valor que exista en `localStorage` en cualquier instante de la
> ejecución.

Por tanto:

```text
X existente al comenzar ejecución
→ puede constituir S2(X)

X producido y guardado durante ejecución actual
→ sigue perteneciendo a S1
→ no constituye S2(X) hasta una ejecución posterior
```

Esta distinción puede expresarse como:

### `CU01-08 — Estabilidad del antecedente restaurado durante una ejecución`

> La determinación de si una ejecución comienza en `S1` o en `S2(X)` debe
> depender del antecedente restaurado al inicio de dicha ejecución y no de
> cambios posteriores producidos por la propia ejecución.

Esta condición no añade una nueva necesidad de Product.

Hace explícita una propiedad necesaria para conservar la transición ya
seleccionada por `R-U2-M1`.

---

## 5. Realización mínima seleccionada

Se selecciona:

### `MR-U01-01 — Confirmación local de aceptación dentro de S1`

La realización mínima consiste en mantener dos informaciones locales
independientes:

```text
antecedente restaurado al iniciar la ejecución
```

y:

```text
aceptación de X durante la ejecución actual
```

La primera determina:

```text
S1
o
S2(X)
```

La segunda determina exclusivamente si debe hacerse observable que el `X`
actual ha sido aceptado.

Conceptualmente:

```text
inicio de ejecución
↓
¿existía X válido previamente?

no
↓
S1
↓
persona produce X
↓
X válido
↓
persistencia
↓
accepted = true
↓
manifestación observable
↓
continúa siendo S1
↓
interrupción

----------------------------

nueva ejecución
↓
X ya existía al comenzar
↓
S2(X)
```

---

## 6. Contenido mínimo de la manifestación

`RU2M1-U01` no exige una frase concreta.

Sólo exige que la persona pueda distinguir:

```text
aceptado
```

de:

```text
sin efecto
```

Por tanto, una realización puede utilizar una indicación visible mínima.

Por ejemplo:

```text
Aportación preparada para después.
```

Esta formulación es contingente.

No forma parte de `RU2M1-U01`.

Podría sustituirse posteriormente por otra manifestación equivalente sin
alterar la necesidad realizada.

---

## 7. Estado técnico mínimo necesario

La realización candidata requiere conceptualmente:

```text
restoredPreviousAtStart
accepted
```

donde:

```text
restoredPreviousAtStart
→ valor cargado una sola vez al iniciar la ejecución

accepted
→ false inicialmente
→ true únicamente después de persistir X válido
```

No se necesita:

```text
nuevo repositorio
nuevo servicio
nuevo contexto
nuevo store
routing
navegación
estado global
historial
evento de dominio
```

---

## 8. Evidencia necesaria antes de modificar producción

La modificación deberá desarrollarse mediante pruebas.

Como mínimo deben quedar demostrados los siguientes casos.

### `T-U01-01 — X válido produce manifestación observable`

```text
S1
↓
X válido
↓
Terminar por ahora
↓
X persistido
↓
manifestación observable
```

---

### `T-U01-02 — La manifestación no constituye S2(X)`

Después de aceptar `X` en la ejecución actual:

```text
Ahora
```

debe seguir siendo la situación presentada.

No debe aparecer:

```text
De antes
```

en esa misma ejecución.

---

### `T-U01-03 — X inválido no produce falsa confirmación`

```text
X vacío o inválido
↓
no persistencia
↓
no manifestación de aceptación
```

---

### `T-U01-04 — La nueva ejecución continúa constituyendo S2(X)`

Después de:

```text
X válido
↓
aceptación observable
↓
desmontaje
↓
nuevo montaje
```

debe aparecer:

```text
S2(X)
```

con el mismo `X`.

---

### `T-U01-05 — Correspondencia literal conservada`

La modificación no debe alterar:

```text
X_S1 === X_S2
```

---

### `T-U01-06 — Trayectoria anterior permanece válida`

Debe seguir siendo posible:

```text
S1
↓
X
↓
interrupción
↓
S2(X)
↓
Y
```

sin imponer relación semántica entre `X` e `Y`.

---

## 9. Alcance de la modificación

Si `MR-U01-01` supera las pruebas anteriores, la modificación podrá afectar
únicamente a lo necesario para realizar:

```text
RU2M1-U01
+
CU01-08
```

No queda justificado modificar:

- `resumeModel`;
- `SituatedResult`;
- `createFromPrevious`;
- la semántica de `isResumeAvailable`;
- el formato persistido;
- la clave `ru2m1.previous`;
- `localStorageResumeRepository`;
- la producción de `Y`;
- Product;
- `PV-001`;
- ni ninguna arquitectura general.

---

## 10. Resultado de la reducción

```text
RU2M1-U01
✔ necesidad establecida

        ↓

CU01-01…CU01-07
✔ restricciones derivadas

        ↓

análisis de implementación
✔ riesgo de colapso S1 → S2(X) localizado

        ↓

CU01-08
✔ estabilidad del antecedente restaurado derivada

        ↓

C-U01-01
✘ transición inmediata descartada

C-U01-02
○ suficiente pero impone interacción adicional

C-U01-03
○ posible pero introduce estado DOM paralelo

C-U01-04
✔ satisface las condiciones con menor estructura suficiente

        ↓

MR-U01-01
✔ mecanismo mínimo seleccionado

        ↓

implementación
○ pendiente
```

---

## 11. Conclusiones permitidas

Puede afirmarse que:

1. `RU2M1-U01` admite una realización local sin modificar Product;
2. no es necesario constituir inmediatamente `S2(X)`;
3. no es necesario introducir navegación;
4. no es necesario introducir una abstracción arquitectónica nueva;
5. cualquier feedback que provoque un render exige conservar la diferencia
   entre antecedente restaurado al inicio y `X` guardado durante la ejecución;
6. esa diferencia ya viene exigida por la separación entre `S1` y `S2(X)`;
7. `MR-U01-01` constituye actualmente la candidata mínima preferible;
8. su validez deberá comprobarse mediante pruebas antes de considerarla
   realizada.

---

## 12. Conclusiones prohibidas

La investigación no permite concluir que:

1. Product requiera confirmaciones visuales;
2. toda persistencia deba mostrar un mensaje;
3. toda actuación deba producir feedback textual;
4. el texto concreto de confirmación sea normativo;
5. deba crearse una tercera situación conceptual;
6. deba aparecer una nueva entidad de dominio;
7. deba introducirse un store;
8. deba introducirse una máquina de estados;
9. deba modificarse `resumeModel`;
10. deba crearse `R-U2-M2`;
11. `MR-U01-01` quede validada antes de su construcción y prueba.

---

## 13. Estado resultante al cierre de la reducción

```text
F-OU001-01
✔ fenómeno

L-OU001-01
✔ pérdida

RU2M1-U01
✔ necesidad

CU01-01…CU01-08
✔ restricciones

MR-U01-01
✔ mecanismo mínimo seleccionado

modificación de software
○ pendiente

validación
○ pendiente
```

---

## 14. Punto de reanudación desde la reducción

La siguiente actuación justificable consiste en construir `MR-U01-01`
mediante TDD.

La primera modificación deberá ser una prueba que demuestre:

```text
X válido
↓
"Terminar por ahora"
↓
X correctamente persistido
↓
diferencia observable
↓
la ejecución continúa en S1
```

La implementación sólo deberá escribirse después de observar el fallo de esa
prueba sobre `R-U2-M1` en su estado actual.

---

## 15. Construcción y validación de `MR-U01-01`

La construcción se realizó mediante TDD.

Antes de modificar producción se introdujeron las pruebas correspondientes a:

```text
T-U01-01
T-U01-02
```

La primera ejecución produjo:

```text
20 tests
19 PASS
1 FAIL
```

El único fallo fue:

```text
makes the acceptance of a valid X observable in S1
```

La persistencia de `X` ya funcionaba y la ejecución permanecía en `S1`.

Por tanto, el fallo quedó localizado exactamente en:

```text
L-OU001-01
```

sin falsar las propiedades anteriores de `R-U2-M1`.

---

### 15.1. Realización construida

La implementación incorporó:

```text
restoredPrevious
→ fijado al comienzo de la ejecución

accepted
→ estado local de aceptación durante S1
```

La estructura resultante permite:

```text
S1
↓
X válido
↓
persistencia
↓
aceptación observable
↓
continúa S1
↓
interrupción
↓
nueva ejecución
↓
S2(X)
```

La manifestación contingente utilizada es:

```text
Aportación preparada para después.
```

Esta formulación no queda elevada a requisito general.

---

### 15.2. Validación de `T-U01-01…T-U01-06`

Se obtuvo:

```text
ResumeExperience.test.tsx
22 / 22 PASS
```

Quedaron cubiertas:

```text
T-U01-01
✔ X válido produce manifestación observable

T-U01-02
✔ la manifestación no constituye S2(X)

T-U01-03
✔ X inválido no produce falsa confirmación

T-U01-04
✔ una nueva ejecución constituye S2(X)

T-U01-05
✔ correspondencia literal conservada

T-U01-06
✔ trayectoria anterior conservada
```

---

### 15.3. Validación completa de `R-U2-M1`

La verificación conjunta de la realización produjo:

```text
resumeModel.test.ts
17 / 17 PASS

localStorageResumeRepository.test.ts
6 / 6 PASS

ResumeExperience.test.tsx
22 / 22 PASS

TOTAL
45 / 45 PASS
```

No se detectaron regresiones en el modelo, la persistencia ni la trayectoria
integrada.

---

### 15.4. Validación global

La suite completa del proyecto produjo:

```text
21 / 21 archivos de test
184 / 184 tests PASS
```

El build de producción mediante Vite finalizó correctamente.

Asimismo:

```text
git diff --check
```

no produjo ninguna salida.

Por tanto, no se detectaron errores de whitespace ni regresiones globales
cubiertas por las pruebas existentes.

---

### 15.5. Resultado

Puede consolidarse localmente:

#### `RV-MR-U01-01 — Realización validada de la observabilidad de aceptación`

`MR-U01-01` realiza `RU2M1-U01` mediante una diferencia observable local en
`S1` después de la aceptación efectiva de un `X` válido, conservando la
separación entre el `X` guardado durante la ejecución actual y el antecedente
restaurado en una ejecución posterior.

La modificación no altera:

- `resumeModel`;
- `SituatedResult`;
- `createFromPrevious`;
- `isResumeAvailable`;
- `localStorageResumeRepository`;
- el formato persistido;
- la clave de persistencia;
- la correspondencia literal de `X`;
- la libertad semántica de `Y`;
- ni la estructura `S1 → interrupción → S2(X) → Y`.

El resultado posee alcance local a `R-U2-M1`.

No se deriva de él una obligación general de Product ni una regla universal
de interfaz.

---

## 16. Estado final de la investigación

```text
F-OU001-01
✔ fenómeno observado

L-OU001-01
✔ pérdida establecida

RU2M1-U01
✔ necesidad local derivada

CU01-01…CU01-08
✔ restricciones satisfechas

MR-U01-01
✔ seleccionada
✔ construida
✔ validada

R-U2-M1
✔ propiedades anteriores conservadas
✔ pérdida observada corregida en la realización

suite global
✔ 184 / 184

build
✔ correcto

consolidación canónica
✔ realizada posteriormente en `00-R-U2-M1.md`
```

La propagación canónica posterior quedó realizada en
`00-R-U2-M1.md` dentro del alcance justificado por esta investigación.

La investigación queda cerrada dentro de su alcance.

Este documento no determina una actuación posterior ni justifica por sí
mismo ninguna propagación adicional a Product, Architecture u otros
cuerpos.

---