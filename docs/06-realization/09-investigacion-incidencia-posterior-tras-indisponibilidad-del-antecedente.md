# Investigación de incidencia posterior tras indisponibilidad del antecedente

## 1. Propósito

Este documento investiga una cuestión realizativa surgida durante el examen de una situación humana histórica posteriormente reducida, en Product, a una diferencia ya cubierta por `PV-001`.

La investigación no pretende:

- ampliar `PV-001`;
- derivar una nueva vertical de Product;
- modificar `R-U2-M1`;
- convertir la reiterabilidad interna en requisito;
- derivar una nueva arquitectura;
- ni introducir una funcionalidad de producto.

Su finalidad consiste exclusivamente en determinar si puede realizarse una trayectoria en la que una aportación `Y`, producida y hecha disponible después de la incidencia de un antecedente `X`, conserve capacidad de incidencia posterior cuando `X` deja de estar disponible antes de dicha incidencia, sin que `Y` haya sido previamente transformada en el antecedente de una nueva aplicación.

---

# 2. Origen de la investigación

Durante una reevaluación posterior de situaciones humanas conservadas en el corpus histórico se examinó el siguiente patrón:

```text
X interviene
↓
persona produce Y
↓
Y queda disponible
↓
X deja de estar disponible
↓
Y puede intervenir posteriormente
```

La diferencia humana asociada fue sometida a reducción respecto de `PV-001`.

El examen no identificó un valor humano independiente adicional.

La diferencia relevante pudo expresarse como:

```text
Y puede incidir posteriormente
        ≠
Y no puede incidir posteriormente
```

Por tanto, dentro del alcance investigado:

```text
nuevo compromiso de Product
✘ no derivado

modificación de PV-001
✘ no derivada

segunda vertical
✘ no derivada
```

Sin embargo, el análisis reveló una cuestión distinta perteneciente a Realization.

---

# 3. Resultado previo relevante

`R-U2-M1` realiza localmente una trayectoria de la forma:

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

y permite constituir una antecedencia operativa local:

```text
X → Y
```

La investigación previa de reiteración mostró además que `R-U2-M1` no contiene una transición interna especificada de la forma:

```text
S2(Xn)
↓
Xn+1 queda preparado
↓
interrupción
↓
S2(Xn+1)
```

Se demostró, no obstante, una composición externa mediante:

```text
R-U2-M1
+
mediación humana trazable
+
R-U2-M1
```

La composición observada permitió que algo procedente de una primera aplicación interviniera en una segunda trayectoria sin establecer:

- reiterabilidad interna de `R-U2-M1`;
- una nueva responsabilidad realizativa;
- una nueva condición irreducible;
- una realización autónoma `R*`;
- ni una modificación de código.

---

# 4. Límite de la evidencia previa

La investigación anterior de composición no ejerció exactamente la situación ahora considerada.

Su trayectoria fue compatible con:

```text
producción de Y1
↓
mediación humana sobre Y1
↓
obtención o formulación de X2
↓
preparación de una nueva aplicación
↓
nuevo S1 sin X1 restaurado
```

Por tanto, la evidencia previa permite establecer:

```text
Y1
↓
mediación humana
↓
X2
↓
segunda aplicación
```

pero no permite establecer:

```text
Y1 queda disponible
↓
X1 deja de estar disponible
↓
ninguna preparación Y1 → X2
↓
interrupción
↓
Y1 sigue disponible
↓
Y1 interviene posteriormente
```

En consecuencia:

```text
nuevo S1 sin X1 restaurado
≠
evidencia de incidencia de Y1
después de desaparecer X1
```

La equivalencia entre ambos casos queda rechazada como inferencia.

---

# 5. Inspección de la realización vigente

La inspección de `R-U2-M1` muestra dos ciclos de vida distintos.

## 5.1. Ciclo de `X`

`X` puede recorrer:

```text
producción
↓
aceptación
↓
persistencia
↓
interrupción
↓
restauración
↓
S2(X)
```

La realización utiliza actualmente una única entrada persistida:

```text
ru2m1.previous
```

El repositorio asociado permite:

```text
savePrevious(value)
loadPrevious()
```

Guardar un nuevo valor sustituye al anteriormente conservado.

---

## 5.2. Ciclo de `Y`

En `S2(X)`, la producción de `Y` constituye localmente:

```text
SituatedResult
=
{
  previous: X,
  current: Y
}
```

pero `Y` no es persistida mediante el repositorio utilizado por la realización.

Su disponibilidad queda limitada al estado de la ejecución en la que fue producida.

No existe actualmente una trayectoria validada:

```text
Y
↓
persistencia
↓
interrupción
↓
restauración
```

Por tanto:

> **`R-U2-M1` no dispone actualmente de un mecanismo que permita ejercer directamente la trayectoria investigada.**

Este resultado describe una frontera de la realización vigente.

No constituye por sí mismo una pérdida respecto de su alcance consolidado.

---

# 6. Pregunta de investigación

La pregunta principal es:

> **¿Puede una aportación `Y`, después de haber sido producida y hecha disponible mediante una situación en la que intervino `X`, conservar capacidad de incidencia posterior cuando `X` deja de estar disponible antes de dicha incidencia, sin requerir que `Y` haya sido previamente transformada en el antecedente de una nueva aplicación?**

La cuestión no presupone que la respuesta deba ser afirmativa.

Tampoco presupone que una respuesta negativa constituya una insuficiencia de `R-U2-M1`.

---

# 7. Situación mínima investigada

La trayectoria mínima es:

```text
S1
↓
X queda disponible
↓
interrupción
↓
S2(X)
↓
persona produce Y
↓
Y queda disponible
↓
X deja de estar disponible
↓
ninguna operación Y → X2
↓
interrupción
↓
situación posterior
↓
¿Y puede intervenir?
```

La desaparición de `X` debe producirse:

```text
después de:
Y queda disponible

pero

antes de:
incidencia posterior de Y
```

---

# 8. Hipótesis

Los estados consignados en este apartado corresponden al momento de formulación de las hipótesis. Su evaluación final se registra posteriormente en los apartados 24.9 y 26.3.

## 8.1. `H-DX1 — Equivalencia con la composición previamente observada`

> La investigación anterior de composición ya proporciona evidencia suficiente para la situación ahora investigada.

### Estado inicial

```text
RECHAZADA
```

La investigación anterior permitió mediación sobre el resultado precedente antes de constituir la nueva aplicación.

No demostró la incidencia de `Y` después de la indisponibilidad de `X` sin preparación previa de un nuevo antecedente.

---

## 8.2. `H-DX2 — Incidencia posterior sin preparación previa`

> Una realización puede hacer que `Y`, una vez producida y hecha disponible, conserve capacidad de incidencia posterior después de que `X` deje de estar disponible, sin requerir una operación previa que transforme `Y` en `X2`.

### Estado inicial

```text
ABIERTA
```

La investigación ha derivado ya una realización experimental candidata capaz de someter esta hipótesis a prueba.

---

## 8.3. `H-DX3 — Dependencia realizativa necesaria`

> Para conservar la incidencia posterior de `Y` después de la indisponibilidad de `X` es necesaria una condición realizativa adicional no reducible a las capacidades actualmente disponibles.

### Estado inicial

```text
ABIERTA
```

La mera incapacidad de `R-U2-M1` para ejercer la trayectoria no demuestra esta hipótesis.

Debe descartarse primero que la trayectoria pueda obtenerse mediante una realización mínima o mediante composición de capacidades ya justificadas sin introducir una nueva responsabilidad irreducible.

---

## 8.4. `H-DX4 — Refutación de R-U2-M1`

> Si `R-U2-M1` no puede ejercer la trayectoria investigada, queda refutada dentro de su alcance consolidado.

### Estado inicial

```text
RECHAZADA COMO INFERENCIA
```

`R-U2-M1` no afirma actualmente proporcionar continuidad posterior de `Y`.

La ausencia de una capacidad no incluida en su alcance no constituye incumplimiento de una garantía consolidada.

Una eventual reapertura de `R-U2-M1` requeriría fundamento independiente adicional.

---

# 9. Derivación de la indisponibilidad de `X`

## 9.1. Distinciones necesarias

La indisponibilidad de `X` no debe confundirse con:

```text
X no aparece en pantalla
```

ni con:

```text
X no es utilizada
```

ni con:

```text
X deja de existir universalmente
```

La investigación sólo necesita determinar si `X` continúa perteneciendo a aquello que la realización puede hacer intervenir posteriormente.

Se introduce, exclusivamente como notación investigativa:

```text
Disp_R(Z, S)
```

con el significado:

> En la situación `S`, la realización `R` proporciona una vía mediante la cual `Z` puede intervenir en las posibilidades de actuación sin que una persona tenga que volver a aportar, reconstruir o reintroducir `Z`.

Por tanto:

```text
existencia(X)
≠
disponibilidad_R(X)
```

---

## 9.2. Criterio de indisponibilidad

### `DX-C01 — Indisponibilidad posterior del antecedente`

> Un antecedente `X` se considerará indisponible para la situación posterior investigada cuando, después de haber estado disponible y de ejecutarse la retirada experimental correspondiente, una nueva situación constituida tras una interrupción no pueda obtener mediante la realización una incidencia de `X` sin una nueva aportación, reconstrucción o reintroducción externa de `X`.

En forma abstracta:

```text
antes de la retirada:

Disp_R(X, S2) = verdadero
```

después:

```text
retirada de X
↓
interrupción
↓
nueva situación S3
```

y:

```text
Disp_R(X, S3) = falso
```

---

## 9.3. Necesidad de interrupción

No constituye evidencia suficiente:

```text
S2(X)
↓
retirar almacenamiento de X
↓
seguir observando la misma ejecución
```

porque `X` podría continuar presente en:

- estado de memoria;
- variables locales;
- closures;
- estado React;
- objetos ya constituidos;
- u otros mecanismos pertenecientes a la ejecución previa.

La prueba fuerte exige:

```text
retirada de X
↓
interrupción
↓
nueva situación
↓
nueva comprobación de disponibilidad
```

---

## 9.4. Discriminabilidad local

La situación decisiva de la investigación exige:

```text
Disp_R(X) = falso
Disp_R(Y) = verdadero
```

Por tanto:

### `DX-C02 — Discriminabilidad local de disponibilidad`

> La realización experimental deberá poder distinguir, dentro del caso investigado, la disponibilidad de `X` de la disponibilidad de `Y`, de modo que pueda constituirse observacionalmente el estado en el que `X` no está disponible mientras `Y` continúa disponible.

Esto no deriva:

```text
identidad universal
✘

colecciones
✘

IDs persistentes
✘

dos repositorios
✘

historial
✘
```

Sólo exige discriminación local suficiente para el experimento.

---

## 9.5. Derivaciones

```text
D-DX01

indisponibilidad de X
≠
inexistencia de X
≠
no visualización de X
≠
no utilización de X
```

```text
D-DX02

X deja de estar disponible
cuando una situación posterior,
tras una interrupción,
ya no puede obtener su incidencia
mediante la realización
sin reintroducción externa.
```

```text
D-DX03

la indisponibilidad debe ser
observacionalmente comprobable.
```

```text
D-DX04

la prueba requiere alcanzar:

Disp_R(X) = falso
Disp_R(Y) = verdadero
```

```text
D-DX05

la realización experimental
debe distinguir localmente
la disponibilidad de X
y la disponibilidad de Y.
```

---

# 10. Derivación de la permanencia de `Y`

## 10.1. Permanencia no equivale a reaparición

No basta con observar:

```text
Y antes
↓
interrupción
↓
algo equivalente a Y después
```

Podrían existir varias explicaciones:

```text
Y fue conservada por la realización
✔ caso investigado
```

```text
Y se perdió
↓
la persona la recordó y reintrodujo
✘
```

```text
Y se reconstruyó desde otra fuente
✘
```

```text
Y fue preparada previamente como X2
✘
```

Por tanto:

```text
aparición posterior de Y
≠
permanencia de Y
```

---

## 10.2. Criterio de permanencia

### `DX-C03 — Permanencia de disponibilidad de Y`

> `Y` permanece disponible a través de una interrupción cuando ha quedado disponible antes de dicha interrupción y una situación posterior puede volver a proporcionar su incidencia mediante la realización, sin una nueva aportación o reconstrucción externa de `Y`, existiendo correspondencia suficiente entre la aportación disponible antes y después de la interrupción.

En forma abstracta:

```text
Disp_R(Y_pre, S2) = verdadero
↓
interrupción
↓
Disp_R(Y_post, S3) = verdadero
```

junto con:

```text
Corr_R(Y_pre, Y_post) = verdadero
```

---

## 10.3. Ausencia de preparación previa

### `DX-C04 — Ausencia de preparación antecedente`

> La permanencia experimental de `Y` no podrá atribuirse a una operación previa a la indisponibilidad de `X` cuya función sea transformar, copiar, seleccionar o reintroducir `Y` como antecedente de una nueva aplicación.

Queda excluido:

```text
Y queda disponible
↓
Y → X2
↓
X desaparece
↓
interrupción
↓
X2 reaparece
```

El caso investigado es:

```text
Y queda disponible
↓
X desaparece
↓
interrupción
↓
Y continúa disponible
```

---

## 10.4. Separabilidad local

### `DX-C05 — Separabilidad local de disponibilidad`

> Dentro del caso investigado, la disponibilidad posterior de `Y` deberá poder mantenerse cuando la disponibilidad posterior de `X` haya cesado.

Formalmente:

```text
¬Disp_R(X, S3)
∧
Disp_R(Y, S3)
```

Esto no implica independencia ontológica.

Sólo exige separabilidad operativa local.

---

## 10.5. Continuidad transinterrupción

### `DX-C06 — Continuidad transinterrupción`

> La disponibilidad de `Y` deberá atravesar la interrupción utilizada por el experimento.

No se prescribe todavía el mecanismo mediante el cual se realiza esa continuidad.

---

## 10.6. Correspondencia transinterrupción

### `DX-C07 — Correspondencia transinterrupción`

> Debe existir un criterio explícito que permita atribuir la `Y` disponible después de la interrupción a la `Y` que había quedado disponible antes de ella.

No se deriva identidad literal universal.

---

## 10.7. Derivaciones

```text
D-DX06

permanencia de Y
≠
mera reaparición posterior de Y
```

```text
D-DX07

la permanencia exige:

disponibilidad antes
+
disponibilidad después
+
correspondencia entre ambas
```

```text
D-DX08

la disponibilidad posterior de Y
debe obtenerse sin reintroducción
o reconstrucción externa de Y
```

```text
D-DX09

para esta investigación,
la permanencia no puede obtenerse
mediante preparación previa Y → X2
```

```text
D-DX10

la situación decisiva debe satisfacer:

Disp_R(X, S3) = falso
Disp_R(Y, S3) = verdadero
```

```text
D-DX11

disponibilidad posterior de Y
≠
incidencia efectiva de Y
```

```text
D-DX12

la continuidad de Y
debe atravesar una interrupción
```

```text
D-DX13

se necesita correspondencia
entre Y anterior y posterior,

pero no se ha derivado
identidad literal universal.
```

---

# 11. Derivación del estado mínimo

La realización necesita conservar dos disponibilidades localmente distinguibles.

La forma abstracta mínima es:

```text
E = (A_X, A_Y)
```

donde:

```text
A_X ∈ {∅, X}
A_Y ∈ {∅, Y}
```

El espacio de estados localmente relevante contiene:

```text
(∅, ∅)
(X, ∅)
(X, Y)
(∅, Y)
```

La trayectoria investigada sólo requiere:

```text
E0
(X, ∅)

↓ producir y hacer disponible Y

E1
(X, Y)

↓ retirar X sin retirar Y

E2
(∅, Y)

↓ interrupción

E3
(∅, Y)
```

---

## 11.1. Separación local de disponibilidad

### `DX-S01 — Separación local de disponibilidad`

> La realización experimental debe representar de manera distinguible la disponibilidad de `X` y la disponibilidad de `Y`, de forma que la retirada de una no determine automáticamente el estado de la otra.

---

## 11.2. Procedencia no necesaria como estado persistido

La realización no necesita conservar internamente:

```text
Y derivedFrom X
```

para poder constituir `C3`.

La relación `X → Y` puede quedar demostrada por la trayectoria experimental.

### `DX-S02 — No necesidad de procedencia persistida`

> La realización experimental no necesita conservar internamente una relación persistente `X → Y` para constituir `C3`; la procedencia puede pertenecer al registro de la trayectoria experimental.

---

## 11.3. No sustitución de papel

No sirve:

```text
previous = X
↓
previous = Y
```

porque `Y` habría sustituido a `X` dentro del mismo papel realizativo.

### `DX-S03 — No sustitución de papel`

> Hacer disponible `Y` para la prueba no deberá realizarse sustituyendo `X` por `Y` dentro del mismo papel realizativo utilizado para constituir una nueva aplicación.

Esto no significa que `Y` no pueda desempeñar posteriormente un papel antecedente.

Significa que no puede ser preparada como tal antes de la desaparición de `X`.

---

## 11.4. Fases experimentales

### `DX-S04 — Fase no necesaria como estado sustantivo`

> Las etiquetas `C0…C4` pertenecen inicialmente al protocolo de investigación y no deberán incorporarse al estado de la realización salvo que se demuestre que son necesarias para ejercer la trayectoria.

Tampoco se deriva la necesidad de conservar un historial de fases.

---

## 11.5. Estado suficiente para correspondencia

### `DX-S05 — Estado suficiente para correspondencia`

> El estado conservado deberá contener información suficiente para establecer, mediante un criterio explícito, la correspondencia entre la `Y` disponible antes y después de la interrupción.

---

## 11.6. Derivaciones

```text
D-DX14

para alcanzar C3,
la disponibilidad de X y Y
debe ser localmente distinguible
```

```text
D-DX15

el estado decisivo debe poder representar:

A_X = ∅
A_Y = Y
```

```text
D-DX16

sólo Y necesita continuidad positiva
a través de la interrupción;
X debe permanecer indisponible
```

```text
D-DX17

la realización no necesita conservar
internamente la procedencia X → Y
para constituir C3
```

```text
D-DX18

Y no puede obtener su continuidad
mediante sustitución del papel
ocupado previamente por X
```

```text
D-DX19

las fases C0…C4 y el historial
pertenecen inicialmente
al protocolo experimental,
no al estado sustantivo
```

```text
D-DX20

el estado conservado de Y
debe ser suficiente para comprobar
su correspondencia transinterrupción
```

---

# 12. Derivación de la incidencia posterior

La mera presencia posterior de `Y` sólo demuestra conservación.

La incidencia requiere una diferencia observable en las posibilidades de actuación.

Se introduce provisionalmente:

```text
Act_R(S)
```

como las actuaciones que la realización hace posibles en una situación `S`.

El contraste mínimo será:

```text
S3−

X no disponible
Y no disponible
↓
actuaciones posibles = A
```

frente a:

```text
S3+

X no disponible
Y disponible
↓
actuaciones posibles = A + B
```

con:

```text
B ∈ Act_R(S3+)
B ∉ Act_R(S3−)
```

---

## 12.1. Criterio de incidencia

### `DX-C08 — Incidencia observable de Y`

> `Y` produce una incidencia posterior cuando, manteniendo constantes las demás condiciones relevantes de la situación posterior, su disponibilidad hace posible al menos una actuación que no resulta posible cuando `Y` no está disponible.

---

## 12.2. Actuación experimental `B(Y)`

Se selecciona como instrumento mínimo:

```text
B(Y)
=
constituir una antecedencia local Y → Z
```

Con `Y` disponible:

```text
Y
+
Z válida
↓
Y → Z
✔
```

Sin `Y`:

```text
∅
+
Z válida
↓
Y → Z
✘
```

La función de `Y` como antecedente en esta situación posterior no constituye preparación previa `Y → X2`.

La distinción temporal es:

```text
PROHIBIDO

Y producida
↓
Y preparada como X2
↓
X desaparece
↓
interrupción
```

frente a:

```text
VÁLIDO

Y producida
↓
Y permanece disponible
↓
X desaparece
↓
interrupción
↓
Y sigue disponible
↓
sólo entonces Y interviene
como antecedente de una nueva actuación
```

---

## 12.3. Criterio de incidencia posterior

### `DX-C09 — Criterio de incidencia posterior`

La incidencia posterior se considerará demostrada si, después de:

```text
Y queda disponible
↓
X deja de estar disponible
↓
interrupción
```

se constituye una situación en la que:

```text
X
✘ no disponible

Y
✔ disponible
```

y esa disponibilidad permite ejercer una actuación `B(Y)` que:

```text
con Y
✔ puede constituirse

sin Y
✘ no puede constituirse
```

sin:

- reintroducción externa de `Y`;
- reconstrucción humana de `Y`;
- preparación previa de `Y` como nuevo antecedente;
- ni utilización posterior de `X`.

---

## 12.4. Derivaciones

```text
D-DX21

reaparición posterior de Y
≠
incidencia posterior de Y
```

```text
D-DX22

la incidencia requiere
una diferencia observable
en las posibilidades de actuación
```

```text
D-DX23

el contraste mínimo es:

X− Y−
vs.
X− Y+
```

```text
D-DX24

debe existir una actuación B
tal que:

B posible con Y
B imposible sin Y
```

```text
D-DX25

la incidencia efectiva puede probarse
ejercitando posteriormente B
```

```text
D-DX26

Y puede desempeñar un papel antecedente
en la situación posterior

sin que ello implique que Y hubiera sido
preparada previamente como X2
```

```text
D-DX27

la preparación previa:

Y → X2
→ desaparición de X

queda excluida,

pero:

desaparición de X
→ interrupción
→ Y → Z

es una trayectoria válida
para probar incidencia posterior
```

---

# 13. Derivación del criterio de correspondencia

Se introduce:

```text
Corr_R(Y_pre, Y_post)
```

con el significado:

> La disponibilidad de `Y_post` en la situación posterior procede, mediante una trayectoria realizativa trazable, de la `Y_pre` que había quedado disponible antes de la interrupción.

La igualdad observable por sí sola no basta:

```text
Y_pre = "ABC"

...

Y_post = "ABC"
```

no demuestra correspondencia si la procedencia de `Y_post` no puede establecerse.

---

## 13.1. Criterio conceptual

### `DX-C10 — Correspondencia por continuidad realizativa`

> Existe correspondencia suficiente entre la `Y` anterior y la posterior cuando la disponibilidad posterior puede atribuirse trazablemente a la disponibilidad constituida antes de la interrupción mediante la continuidad proporcionada por la realización, sin intervención externa que vuelva a aportar, reconstruir o sustituir `Y`.

La correspondencia queda excluida si `Y_post` puede explicarse por:

- reintroducción humana;
- reconstrucción;
- una fuente alternativa;
- derivación posterior desde `X`;
- o preparación previa como `X2`.

---

## 13.2. Witness experimental

Para la primera realización experimental se selecciona:

```text
Y_pre === Y_post
```

como criterio contingente de verificación.

Su estatuto es:

```text
identidad literal
→ witness experimental contingente
```

y no:

```text
identidad literal
→ necesidad universal
```

---

## 13.3. Discriminabilidad de `Y`

### `DX-C11 — Discriminabilidad de la Y experimental`

> La `Y` utilizada en la prueba deberá ser suficientemente discriminable para que su aparición posterior no pueda atribuirse razonablemente a otro estado previamente disponible dentro de la realización experimental.

Puede utilizarse un contenido opaco y distintivo.

No se deriva de ello la necesidad de un identificador universal.

---

## 13.4. Control contrastivo

Puede reforzarse la correspondencia mediante dos ejecuciones independientes:

```text
PRUEBA A

Y = YA
↓
interrupción
↓
debe reaparecer YA
```

```text
PRUEBA B

Y = YB
↓
interrupción
↓
debe reaparecer YB
```

sin intercambiarse los valores entre ambas trayectorias.

---

## 13.5. Derivaciones

```text
D-DX28

correspondencia
≠
identidad literal
```

```text
D-DX29

la correspondencia mínima requiere
continuidad realizativa trazable
entre disponibilidad anterior
y disponibilidad posterior
```

```text
D-DX30

la correspondencia queda invalidada
si Y posterior puede explicarse
por reintroducción, reconstrucción
o una fuente alternativa
```

```text
D-DX31

la realización experimental necesita
una Y suficientemente discriminable
para atribuir la disponibilidad posterior
a la aportación experimental anterior
```

```text
D-DX32

para la primera prueba puede adoptarse:

Y_pre === Y_post

como criterio contingente
de verificación
```

```text
D-DX33

el criterio conceptual y su witness
experimental deben mantenerse separados:

Corr_R
→ continuidad trazable

witness inicial
→ conservación literal
```

---

# 14. Realización experimental candidata `R-DX1-M1`

## 14.1. Estatuto

Se deriva provisionalmente:

```text
R-DX1-M1
```

con el siguiente estatuto:

```text
naturaleza
→ realización experimental candidata

objeto
→ ejercer la trayectoria DX

relación con R-U2-M1
→ separada
→ no la modifica
→ puede reutilizar como instrumento
  la antecedencia operativa local X → Y

estatuto normativo
→ ninguno todavía
```

---

## 14.2. Trayectoria

La candidata deberá poder ejercer:

```text
E0
X ✔
Y ✘

↓ interrupción

S2(X)
↓
persona produce Y
↓
Y queda disponible

E1
X ✔
Y ✔

↓ retirar exclusivamente X

E2
X ✘
Y ✔

↓ interrupción real

E3
X ✘
Y ✔
Corr(Y_pre, Y_post) ✔

↓
persona realiza B(Y)
↓
produce Z

E4
Y → Z
```

---

## 14.3. Rechazo de una única posición compartida

Una única posición persistente de la forma:

```text
previous = X
```

seguida de:

```text
previous = Y
```

produciría:

```text
X
↓
Y sustituye a X
↓
Y ocupa el papel de nuevo antecedente
```

Esto constituye una forma de preparación:

```text
Y → X2
```

y no permite ejercer limpiamente la prueba.

---

## 14.4. Rechazo inicial de un único registro atómico

Una estructura:

```text
{
  x: X,
  y: Y
}
```

podría representar formalmente:

```text
{
  x: null,
  y: Y
}
```

pero una retirada de `X` obligaría potencialmente a reescribir conjuntamente el registro que contiene `Y`.

Eso introduciría la ambigüedad:

```text
¿Y permaneció?

o

¿la operación que retiró X
volvió a guardar Y?
```

Por tanto, no se selecciona como primer witness experimental.

No queda falsada como realización posible en general.

---

## 14.5. Mecanismo seleccionado

Se seleccionan dos posiciones persistentes independientemente direccionables:

```text
PX
→ disponibilidad de X

PY
→ disponibilidad de Y
```

de modo que:

```text
PX = X
PY = Y
```

pueda transformarse mediante:

```text
removeX()
```

en:

```text
PX = ∅
PY = Y
```

sin realizar ninguna escritura sobre `PY`.

---

## 14.6. Medio contingente

Se selecciona provisionalmente:

```text
localStorage
```

como medio experimental de continuidad transinterrupción.

Podrán utilizarse dos claves independientes, por ejemplo:

```text
dx1.x
dx1.y
```

Su estatuto es:

```text
localStorage
→ medio experimental contingente

dos claves
→ medio experimental contingente

independencia operativa X/Y
→ diferencia exigida por la prueba
```

---

## 14.7. Operaciones mínimas

La candidata deberá proporcionar funcionalmente:

```text
saveX(value)
loadX()
removeX()

saveY(value)
loadY()
```

Una operación:

```text
removeY()
```

puede existir como infraestructura de preparación o control experimental, sin convertirse por ello en responsabilidad sustantiva de la trayectoria positiva.

---

## 14.8. Constitución de `Y`

El orden deberá ser:

```text
X disponible
+
Y válida
↓
constituir X → Y
↓
hacer disponible Y
```

No:

```text
persona escribe Y
↓
persistir Y
↓
afirmar después que X intervino
```

Puede reutilizarse como instrumento el criterio local ya existente de constitución de antecedencia operativa.

---

## 14.9. Retirada de `X`

La operación crítica deberá satisfacer:

```text
precondición:

loadX() = X
loadY() = Y
```

después:

```text
removeX()
```

postcondición:

```text
loadX() = null
loadY() = Y
```

y además:

```text
removeX()
↓
NO llama a saveY()
NO reconstruye Y
NO mueve Y
NO copia Y
NO sustituye X por Y
```

---

## 14.10. Interrupción

La prueba de `C3` exigirá:

```text
C2
↓
fin de ejecución
↓
nueva ejecución
↓
nueva lectura de PX
↓
nueva lectura de PY
```

obteniendo:

```text
PX = ∅
PY = Y
```

Mantener valores en memoria dentro de la misma ejecución no constituye una interrupción válida.

---

## 14.11. Incidencia posterior

Después de alcanzar `C3`:

```text
X = ∅
Y = Y
```

la persona podrá aportar `Z`.

La prueba de incidencia será:

```text
Y
+
Z
↓
Y → Z
```

mientras que:

```text
∅
+
Z
↓
Y → Z
```

deberá resultar imposible.

---

## 14.12. Separación entre lo derivado y lo contingente

### Derivado de la prueba

```text
disponibilidad distinguible X/Y
retirada de X sin retirada de Y
continuidad transinterrupción de Y
ausencia de Y → X2 previa
correspondencia pre/post
incidencia posterior discriminable
```

### Seleccionado contingentemente

```text
localStorage
dos claves
strings
conservación literal
React
reutilización de createFromPrevious
nombres concretos de claves
```

Ningún resultado experimental positivo podrá elevar automáticamente los elementos contingentes a necesidad universal.

---

# 15. Contratos de `R-DX1-M1`

## 15.1. `C-DX01 — Distinción de disponibilidades`

> La realización deberá poder representar y observar separadamente la disponibilidad de `X` y la disponibilidad de `Y`.

Deberá distinguir al menos:

```text
(X, ∅)
(X, Y)
(∅, Y)
(∅, ∅)
```

---

## 15.2. `C-DX02 — Constitución válida de Y`

> `Y` sólo podrá considerarse constituida dentro del experimento cuando exista un `X` válido disponible y una actuación actual válida produzca `Y`.

```text
X válida
+
Y válida
↓
X → Y
```

No podrá constituirse experimentalmente:

```text
∅ → Y
```

---

## 15.3. `C-DX03 — Disponibilidad posterior de Y`

> Después de constituirse `X → Y`, la candidata deberá poder hacer disponible `Y` más allá de la ejecución actual.

```text
X → Y
↓
fin de ejecución
↓
Y recuperable
```

---

## 15.4. `C-DX04 — Retirada independiente de X`

> Cuando `X` y `Y` estén disponibles, retirar `X` deberá dejar `X` indisponible sin modificar la disponibilidad ni el contenido de `Y`.

```text
Given:
X = X1
Y = Y1

When:
removeX()

Then:
X = ∅
Y = Y1
```

Además:

```text
removeX()
NO reescribe Y
NO copia Y
NO reconstruye Y
NO sustituye X por Y
```

---

## 15.5. `C-DX05 — Ausencia de preparación previa Y → X2`

> Entre la constitución de `Y` y la retirada de `X`, ninguna operación de la trayectoria experimental podrá colocar `Y` en el papel persistente utilizado para constituir un nuevo antecedente.

Queda excluido:

```text
X → Y
↓
guardar Y como nuevo previous
↓
retirar X
```

---

## 15.6. `C-DX06 — Continuidad transinterrupción de Y`

> Una vez alcanzado `(∅, Y)`, una interrupción deberá permitir constituir posteriormente una nueva situación que vuelva a presentar `(∅, Y)` mediante nuevas lecturas.

---

## 15.7. `C-DX07 — Correspondencia de Y`

> Debe existir correspondencia trazable entre la `Y` constituida antes de la interrupción y la disponible después.

Para `R-DX1-M1` se selecciona:

```text
Y_pre === Y_post
```

como witness contingente.

---

## 15.8. `C-DX08 — Incidencia posterior`

> Una vez alcanzado `C3 = (∅, Y)`, la disponibilidad de `Y` deberá permitir constituir una actuación posterior que no pueda constituirse cuando `Y` no está disponible.

```text
X = ∅
Y = Y1
+
Z válida
↓
Y1 → Z
✔
```

frente a:

```text
X = ∅
Y = ∅
+
Z válida
↓
Y → Z
✘
```

---

## 15.9. `C-DX09 — Control negativo`

> La candidata deberá demostrar que la misma situación posterior, sin `Y`, no permite constituir la actuación dependiente de `Y`.

El contraste obligatorio será:

```text
X− Y−
→ B ✘
```

frente a:

```text
X− Y+
→ B ✔
```

---

## 15.10. `C-DX10 — Opacidad semántica`

> El funcionamiento de la candidata no deberá depender del significado lingüístico de `X`, `Y` o `Z`.

Contenidos válidos semánticamente distintos deberán conservar la misma estructura experimental.

---

# 16. Casos de prueba prerregistrados

## `T-DX01 — Disponibilidad inicial de X`

```text
Given:
X = ∅
Y = ∅

When:
se hace disponible X1

Then:
X = X1
Y = ∅
```

---

## `T-DX02 — Constitución y disponibilidad de Y`

```text
Given:
X = X1
Y = ∅

When:
se constituye X1 → Y1
y Y1 queda disponible

Then:
X = X1
Y = Y1
```

---

## `T-DX03 — Retirada independiente de X`

```text
Given:
X = X1
Y = Y1

When:
se retira X

Then:
X = ∅
Y = Y1
```

---

## `T-DX04 — Conservación literal de Y durante la retirada`

```text
Given:
X = X1
Y = Y1

When:
removeX()

Then:
Y === Y1
```

---

## `T-DX05 — Ausencia de escritura sobre Y durante removeX`

```text
Given:
X = X1
Y = Y1

When:
removeX()

Then:
número de escrituras sobre Y = 0
```

---

## `T-DX06 — Continuidad transinterrupción`

```text
Given:
X = ∅
Y = Y1

When:
termina la ejecución
y una nueva ejecución realiza nuevas lecturas

Then:
X = ∅
Y = Y1
```

---

## `T-DX07 — Incidencia posterior positiva`

```text
Given:
X = ∅
Y = Y1
después de una interrupción

When:
la persona aporta Z1

Then:
puede constituirse Y1 → Z1
```

---

## `T-DX08 — Control negativo de incidencia`

```text
Given:
X = ∅
Y = ∅

When:
la persona aporta el mismo Z1

Then:
no puede constituirse Y → Z1
```

---

## `T-DX09 — Y vacía no constituye resultado válido`

```text
Given:
X = X1

When:
se intenta producir Y = ""
o sólo espacios

Then:
Y no queda disponible
```

---

## `T-DX10 — Ausencia de X impide constituir X → Y`

```text
Given:
X = ∅

When:
se intenta constituir una Y
como resultado de X → Y

Then:
la operación es rechazada
```

---

## `T-DX11 — Correspondencia literal`

```text
Given:
la trayectoria utiliza Y1

When:
se atraviesa la interrupción

Then:
Y_post === Y1
sin reintroducción externa
```

---

## `T-DX12 — Control contrastivo de correspondencia`

Primera trayectoria:

```text
Y = YA
↓
interrupción
↓
Y_post = YA
```

Segunda trayectoria independiente:

```text
Y = YB
↓
interrupción
↓
Y_post = YB
```

Debe evitarse:

```text
trayectoria A → YB
trayectoria B → YA
```

---

## `T-DX13 — Misma ejecución no demuestra C3`

```text
Given:
X = X1
Y = Y1

When:
se retira X
pero no se produce interrupción

Then:
el resultado no se acepta
como evidencia de C3
```

---

## `T-DX14 — Preparación previa invalida la trayectoria`

```text
Given:
Y1 ha sido producida

When:
Y1 se prepara como nuevo antecedente
antes de retirar X1

Then:
la trayectoria se clasifica
como experimentalmente inválida
para esta investigación
```

No constituye éxito aunque posteriormente `Y1` reaparezca.

---

## `T-DX15 — Conservación sin incidencia`

```text
Given:
X = ∅
Y = Y1
después de una interrupción

When:
Y1 sólo vuelve a mostrarse

Then:
se demuestra conservación

pero:

incidencia posterior
✘ todavía no demostrada
```

---

# 17. Prueba contractual crítica de `removeX()`

La operación decisiva deberá satisfacer:

```text
Given:
X = "X-01"
Y = "Y-01"

When:
removeX()

Then:
loadX() === null
loadY() === "Y-01"
```

Pero esa comprobación no basta por sí sola.

También deberá demostrarse:

```text
Given:
X = X1
Y = Y1

When:
removeX()

Then:
writeY count = 0
```

La distinción buscada es:

```text
Y permanece
```

frente a:

```text
al retirar X,
la operación vuelve a guardar Y
```

Ambos mecanismos podrían producir externamente:

```text
X = ∅
Y = Y
```

pero sólo el primero constituye un witness limpio de continuidad independiente respecto de la retirada.

---

# 18. Pruebas integradas

## 18.1. `T-DX-INTEGRATION-01 — Trayectoria positiva completa`

### Fase 1 — Estado inicial

```text
X = ∅
Y = ∅
```

Se hace disponible:

```text
X = X1
```

---

### Fase 2 — Constitución de `Y`

Tras una nueva ejecución:

```text
restaurar X1
↓
persona produce Y1
↓
constituir X1 → Y1
↓
hacer disponible Y1
```

Comprobar:

```text
X = X1
Y = Y1
```

---

### Fase 3 — Retirada de `X`

Ejecutar:

```text
removeX()
```

Comprobar:

```text
X = ∅
Y = Y1
```

y además:

```text
Y no fue reescrita
```

---

### Fase 4 — Interrupción real

```text
terminar ejecución
↓
crear nueva ejecución
↓
realizar nuevas lecturas
```

No se reutilizará estado en memoria de la ejecución anterior.

---

### Fase 5 — Constitución de `C3`

Comprobar:

```text
X = ∅
Y = Y1
```

y:

```text
Y_post === Y_pre
```

sin:

```text
reintroducción externa
reconstrucción humana
preparación previa Y → X2
```

---

### Fase 6 — Incidencia

La persona aporta:

```text
Z1
```

Debe poder constituirse:

```text
Y1 → Z1
```

Resultado esperado:

```text
✔
```

---

## 18.2. `T-DX-INTEGRATION-02 — Control negativo`

La situación posterior se constituye con:

```text
X = ∅
Y = ∅
```

Después de una nueva ejecución, la persona aporta:

```text
Z1
```

Se intenta constituir:

```text
Y → Z1
```

Resultado esperado:

```text
✘
```

El contraste queda:

```text
T-DX-INTEGRATION-01

X− Y+
→ Y → Z ✔
```

frente a:

```text
T-DX-INTEGRATION-02

X− Y−
→ Y → Z ✘
```

La variable discriminante es exclusivamente la disponibilidad de `Y`.

---

## 18.3. `T-DX-NO-PREPARATION-01 — Ausencia de preparación anticipada`

Durante:

```text
X1 → Y1
↓
Y1 queda disponible
↓
removeX()
```

deberá poder demostrarse que no ha ocurrido ninguna operación equivalente a:

```text
saveX(Y1)
setPrevious(Y1)
preparePrevious(Y1)
```

o cualquier otra operación cuya función sea colocar `Y1` en el papel preparado para una nueva aplicación antes de que `X1` deje de estar disponible.

Después de alcanzar `C3`, en cambio:

```text
Y1 → Z1
```

es válido, porque constituye precisamente la incidencia posterior sometida a prueba.

---

# 19. Criterio de aceptación y falsos positivos

## 19.1. Criterio de aceptación

No se considerará corroborada `H-DX2` por el mero hecho de que algunos tests unitarios pasen.

La aceptación experimental requerirá, como mínimo:

```text
C-DX01 … C-DX10
✔

T-DX-INTEGRATION-01
✔

T-DX-INTEGRATION-02
✔

T-DX-NO-PREPARATION-01
✔
```

Sólo entonces podrá afirmarse, dentro del alcance de la candidata:

> **Se ha ejercido una trayectoria en la que `Y`, constituida durante una situación en la que intervino `X`, permaneció disponible después de que `X` dejara de estar disponible y atravesó una interrupción antes de producir una incidencia posterior, sin haber sido preparada previamente como antecedente de una nueva aplicación.**

---

## 19.2. Falso positivo: misma ejecución

No constituye evidencia de `C3`:

```text
S2(X)
↓
Y producida
↓
retirada del almacenamiento de X
↓
Y sigue visible en la misma ejecución
```

Esto sólo demostraría que un estado ya constituido no cambia retroactivamente.

---

## 19.3. Falso positivo: preparación previa

No constituye evidencia:

```text
Y
↓
guardar como nuevo X2
↓
retirar X
↓
interrupción
↓
restaurar X2
```

Este caso reproduce una forma de composición previamente investigada.

---

## 19.4. Falso positivo: reconstrucción humana

No constituye evidencia:

```text
Y desaparece
↓
persona recuerda Y
↓
persona vuelve a introducir Y
```

La investigación pretende comprobar continuidad proporcionada por la realización.

---

## 19.5. Falso positivo: reescritura de Y al retirar X

No constituye witness limpio:

```text
X = X1
Y = Y1

↓ operación de retirada

reescribir todo el estado
como:

X = ∅
Y = Y1
```

si la permanencia de `Y` depende de que la propia operación de retirada vuelva a guardarla.

---

## 19.6. Falso positivo: mera visualización

No basta:

```text
Y reaparece
```

Debe demostrarse además:

```text
con Y
→ B(Y) posible

sin Y
→ B(Y) imposible
```

---

## 19.7. Falso positivo: valor constante o residual

La reaparición posterior de un valor idéntico no demuestra correspondencia si puede proceder de:

- una constante;
- un valor residual;
- otra posición previamente disponible;
- una fuente alternativa.

La trayectoria debe proporcionar procedencia trazable.

---

# 20. Propiedades no derivadas

La investigación no demuestra que sean necesarias:

- independencia ontológica entre `X` e `Y`;
- persistencia universal;
- conservación indefinida;
- historial;
- versionado;
- múltiples repositorios como requisito general;
- dos claves como requisito general;
- documentos;
- anotaciones;
- fuentes;
- proyectos;
- espacios de trabajo;
- grafos;
- relaciones semánticas;
- identidad literal universal;
- publicación;
- colaboración;
- bases de datos;
- `localStorage`;
- React;
- ni ninguna estructura histórica concreta.

Tampoco demuestra:

```text
todo Y
↓
debe sobrevivir
a la desaparición de todo antecedente
```

La investigación queda limitada al caso explícitamente formulado.

---

# 21. Relación con `R-U2-M1`

Durante esta investigación:

```text
R-U2-M1
→ permanece intacta
```

La incapacidad actual de `R-U2-M1` para realizar directamente:

```text
X → Y
↓
Y permanece disponible
↓
X desaparece
↓
interrupción
↓
Y incide
```

describe una frontera de su alcance vigente.

No constituye una refutación.

La candidata:

```text
R-DX1-M1
```

no es:

```text
ampliación automática de R-U2-M1
```

ni:

```text
sustitución de R-U2-M1
```

Puede reutilizar resultados locales ya validados como instrumentos sin transferir automáticamente sus demás compromisos.

Una eventual modificación de `R-U2-M1` requerirá una derivación posterior independiente.

---

# 22. Relación con Product

La diferencia humana de partida continúa siendo reducible, dentro del alcance investigado, a `PV-001`.

Por tanto:

```text
esta investigación
↓
no modifica PV-001
no amplía PV-001
no deriva PV-002
no deriva una nueva vertical
no amplía Product
```

Un resultado positivo demostraría únicamente que la trayectoria investigada es realizable.

Un resultado negativo de la candidata tampoco demostraría automáticamente una nueva necesidad de Product.

Cualquier consecuencia posterior sobre Product requerirá fundamento positivo independiente.

---

# 23. Estado actual de la investigación

```text
pregunta de investigación
✔ formulada
✔ respondida

diferencia respecto de la composición anterior
✔ localizada

R-U2-M1
✔ inspeccionada

frontera de R-U2-M1
✔ determinada
✔ no constituye incumplimiento de su alcance

indisponibilidad de X
✔ derivada

permanencia de Y
✔ derivada

estado mínimo
✔ derivado

incidencia posterior
✔ definida

criterio de correspondencia
✔ definido

realización experimental candidata R-DX1-M1
✔ derivada
✔ implementada
✔ corroborada como witness experimental ejecutable

mecanismo contingente inicial
✔ seleccionado

contratos
✔ prerregistrados
✔ satisfechos

casos de prueba
✔ prerregistrados
✔ ejecutados

criterio de aceptación
✔ fijado
✔ satisfecho

falsos positivos
✔ identificados
✔ controlados

fase RED
✔ observada

fase GREEN específica
✔ 20/20 tests

suite global
✔ 204/204 tests

TypeScript
✔ sin errores

trayectoria automatizada positiva
✔ ejercida

control negativo
✔ ejercido

ausencia de preparación previa Y → X2
✔ ejercida

correspondencia transinterrupción
✔ ejercida mediante witness literal contingente

suficiencia de la evidencia
✔ auditada
✔ aceptada

validación observacional humana adicional
→ necesidad investigada
→ no justificada

interfaz experimental adicional
→ no derivada

H-DX1
→ rechazada

H-DX2
→ corroborada a nivel de realización ejecutable
  dentro de R-DX1-M1

H-DX3
→ no corroborada
→ sin residuo positivo pendiente

H-DX4
→ rechazada como inferencia

R-DX1-M1
→ conservar como witness experimental ejecutable
→ no ampliar sin nuevo fundamento

R-U2-M1
→ intacta

Product
→ intacto

nueva responsabilidad normativa
→ no derivada

obligaciones pendientes
→ ninguna

residuo positivo pendiente
→ ninguno actualmente identificado

auditoría de clausura
✔ realizada

investigación
→ CERRADA
```

---

# 24. Resultado preobservacional de `R-DX1-M1`

## 24.1. Fase RED

Después de prerregistrar los contratos y casos de prueba se crearon las pruebas ejecutables antes de implementar el mecanismo específico de `R-DX1-M1`.

La primera ejecución produjo:

```text
dxAntecedenceInstrument.test.ts
→ 7 tests superados

localStorageDxRepository.test.ts
→ suite no recopilable:
  ./localStorageDxRepository no existía

rdx1m1Protocol.test.ts
→ suite no recopilable:
  ./localStorageDxRepository no existía
```

El resultado distinguió:

```text
instrumento de antecedencia reutilizado
→ ya existente y operativo

mecanismo específico de R-DX1-M1
→ todavía inexistente
```

La fase RED quedó por tanto observada antes de implementar la candidata.

---

## 24.2. Implementación mínima

Después de la fase RED se implementó exclusivamente el mecanismo persistente mínimo derivado para `R-DX1-M1`.

La realización utiliza dos posiciones persistentes independientemente direccionables:

```text
PX
→ disponibilidad experimental de X

PY
→ disponibilidad experimental de Y
```

mediante dos claves contingentes de `localStorage`.

La operación:

```text
removeX()
```

actúa exclusivamente sobre la posición correspondiente a `X`.

No realiza:

```text
saveY()
reescritura de Y
copia de Y
movimiento de Y
sustitución de X por Y
```

No se introdujeron:

- modificaciones de `R-U2-M1`;
- interfaz experimental;
- historial;
- relación persistida `X → Y`;
- preparación automática `Y → X2`;
- modelo de dominio adicional;
- ni interpretación semántica de los contenidos.

---

## 24.3. Fase GREEN específica

Tras implementar exclusivamente el mecanismo mínimo se ejecutó:

```text
npx vitest run src/realizations/rdx1m1
```

Resultado:

```text
Test Files  3 passed (3)
Tests      20 passed (20)
```

Distribución:

```text
localStorageDxRepository.test.ts
→ 9 tests superados

dxAntecedenceInstrument.test.ts
→ 7 tests superados

rdx1m1Protocol.test.ts
→ 4 tests superados
```

Los contratos ejecutables prerregistrados quedaron satisfechos dentro del alcance de la candidata.

---

## 24.4. Validación global

Se ejecutó posteriormente la suite completa del proyecto.

Resultado:

```text
Test Files  24 passed (24)
Tests      204 passed (204)
```

Se ejecutó también:

```text
npx tsc --noEmit
```

sin producir errores.

No se observaron regresiones en las pruebas existentes ni errores globales de tipado derivados de `R-DX1-M1`.

---

## 24.5. Trayectoria positiva ejercida

La prueba integrada positiva ejerció:

```text
X disponible
Y no disponible
↓
X → Y
↓
X disponible
Y disponible
↓
retirada de X
↓
X no disponible
Y disponible
↓
interrupción instrumentada
↓
nueva carga y nuevas lecturas
↓
X no disponible
Y disponible
↓
Y → Z
```

Antes de la retirada:

```text
X = X1
Y = Y1
```

Después de:

```text
removeX()
```

se obtuvo:

```text
X = ∅
Y = Y1
```

sin realizar ninguna escritura persistente durante la retirada.

Después de la interrupción instrumentada y de nuevas lecturas se volvió a obtener:

```text
X = ∅
Y = Y1
```

Sólo entonces `Y1` fue utilizada como antecedente de una nueva actuación:

```text
Y1 → Z1
```

---

## 24.6. Control negativo de incidencia

La trayectoria de control constituyó una situación posterior con:

```text
X = ∅
Y = ∅
```

Ante el mismo tipo de actuación posterior:

```text
Z1
```

no pudo constituirse:

```text
Y → Z1
```

El contraste ejecutado fue por tanto:

```text
X− Y+
→ Y → Z ✔
```

frente a:

```text
X− Y−
→ Y → Z ✘
```

La disponibilidad de `Y` constituye la diferencia controlada entre ambas situaciones.

---

## 24.7. Ausencia de preparación previa `Y → X2`

La trayectoria positiva no colocó `Y` en la posición correspondiente a `X` antes de retirar `X`.

Después de constituir:

```text
X1 → Y1
```

se mantuvo:

```text
X = X1
Y = Y1
```

y no:

```text
X = Y1
```

Sólo posteriormente se ejecutó:

```text
removeX()
```

produciendo:

```text
X = ∅
Y = Y1
```

La continuidad posterior de `Y` no puede atribuirse, dentro de la candidata implementada, a una preparación previa de `Y` como nuevo `X`.

---

## 24.8. Correspondencia transinterrupción

La candidata utilizó como witness experimental contingente:

```text
Y_pre === Y_post
```

La conservación literal permitió atribuir sin ambigüedad la disponibilidad posterior a la `Y` hecha disponible antes de la interrupción.

Este resultado no deriva:

```text
identidad literal
→ necesidad universal de correspondencia
```

La identidad literal conserva exclusivamente su estatuto de instrumento experimental para esta candidata.

---

## 24.9. Estado de las hipótesis

### `H-DX1 — Equivalencia con la composición previamente observada`

```text
RECHAZADA
```

La investigación anterior no había ejercido la trayectoria ahora contrastada.

---

### `H-DX2 — Incidencia posterior sin preparación previa`

```text
CORROBORADA
A NIVEL DE REALIZACIÓN EJECUTABLE
DENTRO DE R-DX1-M1
```

La candidata ejerció una trayectoria en la que `Y` permaneció disponible después de que `X` dejara de estar disponible y produjo posteriormente una incidencia sin haber sido preparada antes como `X2`.

Por tanto, `R-DX1-M1` constituye un contraejemplo ejecutable frente a la afirmación fuerte:

```text
la incidencia posterior de Y
después de la indisponibilidad de X

requiere necesariamente

preparar previamente Y como X2
```

---

### `H-DX3 — Dependencia realizativa necesaria`

```text
NO CORROBORADA
```

La investigación no ha demostrado una condición realizativa adicional irreducible.

La trayectoria pudo ejercerse mediante una candidata mínima compuesta por:

```text
antecedencia operativa local
+
disponibilidades distinguibles
+
retirada independiente de X
+
continuidad transinterrupción de Y
```

Este resultado no autoriza por sí solo una afirmación universal acerca de todas las realizaciones posibles.

---

### `H-DX4 — Refutación de R-U2-M1`

```text
RECHAZADA COMO INFERENCIA
```

Nada en el experimento convierte la frontera previamente conocida de `R-U2-M1` en incumplimiento de su alcance consolidado.

---

## 24.10. Límite de la evidencia obtenida

La interrupción de la prueba integrada fue instrumentada mediante:

```text
vi.resetModules()
+
nueva importación
+
nuevas lecturas del estado persistido
```

Por tanto, el resultado demuestra ejecutablemente:

```text
ausencia posterior de X
✔

continuidad persistente de Y
✔

nueva lectura de Y
✔

correspondencia literal pre/post
✔

incidencia posterior Y → Z
✔

ausencia de preparación previa Y → X2
✔
```

No debe afirmarse, a partir de esta prueba por sí sola, que se haya observado una nueva ejecución humana independiente de la experiencia.

En este punto preobservacional todavía no se había determinado si una ejecución humana independiente aportaría una diferencia epistemológica relevante respecto de la evidencia ejecutable obtenida.

---

## 24.11. Resultado preobservacional

Dentro del alcance ejecutable de `R-DX1-M1` se ha corroborado que:

> **una aportación `Y`, después de haber sido producida y hecha disponible en una situación en la que intervino `X`, puede conservar disponibilidad y producir una incidencia posterior después de que `X` deje de estar disponible, sin haber sido previamente preparada como antecedente de una nueva aplicación.**

El resultado demuestra realizabilidad.

No deriva automáticamente:

```text
nueva responsabilidad universal de Realization
✘

modificación de R-U2-M1
✘

nueva arquitectura
✘

modificación de PV-001
✘

nueva vertical de Product
✘
```

En este punto de la investigación permanecían abiertas únicamente:

```text
suficiencia de la evidencia ejecutable
→ pendiente de auditoría

necesidad de validación observacional adicional
→ todavía no determinada

consecuencias legítimas del resultado
→ pendientes de auditoría de clausura
```

Estas cuestiones fueron examinadas posteriormente en los apartados 25 y 26.

---

# 25. Auditoría de suficiencia de la evidencia

## 25.1. Propósito

Después de obtener un resultado ejecutable positivo mediante `R-DX1-M1`, queda abierta una cuestión metodológica:

> **¿La corroboración de `H-DX2` requiere además una validación observacional independiente mediante una nueva ejecución humana, o la evidencia ejecutable ya obtenida es suficiente para discriminar la hipótesis dentro del alcance investigado?**

Esta auditoría no pretende:

- ampliar la realización experimental;
- introducir una interfaz;
- elevar `localStorage` a requisito;
- reforzar retrospectivamente el criterio de aceptación;
- modificar `R-U2-M1`;
- ni derivar nuevas consecuencias de Product.

Su finalidad consiste exclusivamente en determinar si existe una diferencia epistemológica relevante entre la evidencia ya obtenida y una eventual validación observacional adicional.

---

## 25.2. Evidencia ya disponible

La investigación dispone actualmente de evidencia ejecutable para la trayectoria:

```text
X disponible
Y no disponible
↓
X → Y
↓
X disponible
Y disponible
↓
retirada de X
↓
X no disponible
Y disponible
↓
interrupción instrumentada
↓
nueva carga
↓
nuevas lecturas
↓
X no disponible
Y disponible
↓
Y → Z
```

La candidata ha demostrado además:

```text
disponibilidad distinguible de X/Y
✔

constitución válida X → Y
✔

retirada de X
✔

ausencia posterior de X
✔

removeX() sin reescritura de Y
✔

continuidad persistente de Y
✔

correspondencia literal Y_pre / Y_post
✔

ausencia de preparación previa Y → X2
✔

incidencia posterior Y → Z
✔

control negativo X− Y−
✔
```

El contraste ejecutado es:

```text
X− Y+
→ Y → Z ✔
```

frente a:

```text
X− Y−
→ Y → Z ✘
```

---

## 25.3. Diferencia que debería aportar una validación adicional

Una validación observacional independiente sólo estará justificada si permite al menos una de estas tres cosas:

```text
A.
ejercer una condición relevante
que las pruebas actuales no ejercen
```

o:

```text
B.
falsar H-DX2 mediante un resultado
compatible con el éxito de las pruebas actuales
```

o:

```text
C.
comprobar una responsabilidad
que pertenezca realmente al alcance
derivado de R-DX1-M1
```

Si una observación adicional no satisface ninguna de estas condiciones, constituirá únicamente una repetición de la misma trayectoria mediante otro dispositivo de observación.

---

## 25.4. Hipótesis de auditoría

### `H-VO1 — Necesidad de validación humana independiente`

> La corroboración de `H-DX2` requiere una ejecución humana independiente de la trayectoria experimental.

### Estado inicial

```text
ABIERTA
```

---

### `H-VO2 — Necesidad de una interrupción técnica más fuerte`

> La interrupción investigada sólo puede considerarse suficientemente ejercida si se produce mediante una recarga real del navegador, cierre de la aplicación u otra ruptura técnica equivalente.

### Estado inicial

```text
ABIERTA
```

---

### `H-VO3 — Suficiencia de la evidencia ejecutable`

> La evidencia ejecutable ya obtenida discrimina `H-DX2` dentro del alcance derivado de `R-DX1-M1` sin necesidad de introducir una validación humana adicional.

### Estado inicial

```text
ABIERTA
```

---

## 25.5. Auditoría de `H-VO1`

Una ejecución humana podría adoptar aproximadamente esta forma:

```text
persona aporta X
↓
interrupción
↓
persona produce Y desde X
↓
Y queda disponible
↓
persona retira X
↓
nueva ejecución
↓
Y reaparece
↓
persona produce Z desde Y
```

Sin embargo, una interfaz de este tipo introduciría principalmente:

```text
eventos de interfaz
renderizado
botones
interacción humana
ciclo de vida de componentes
navegación
```

Ninguna de esas diferencias pertenece a la pregunta formulada en `H-DX2`.

La diferencia investigada es:

```text
X → Y
↓
Y disponible
↓
X indisponible
↓
interrupción
↓
Y disponible
↓
Y → Z
```

y esa trayectoria ya ha sido ejercida ejecutablemente.

Por tanto, la presencia de una persona realizando manualmente las mismas transiciones no añade por sí sola una condición discriminante.

### Resultado

```text
H-VO1
→ RECHAZADA
```

No se ha identificado fundamento para considerar necesaria una validación humana independiente de `H-DX2`.

---

## 25.6. Auditoría de `H-VO2`

La prueba automatizada utiliza como interrupción:

```text
vi.resetModules()
↓
nueva importación
↓
nuevas lecturas
```

Esto no equivale técnicamente a:

```text
recarga completa del navegador
```

ni a:

```text
cierre y reapertura de la aplicación
```

ni a:

```text
reinicio del proceso
```

Sin embargo, la investigación no derivó ninguna de esas fronteras técnicas como condición necesaria.

La condición prerregistrada fue:

```text
retirada de X
↓
interrupción
↓
nueva situación
↓
nueva obtención mediante la realización
```

No fue:

```text
retirada de X
↓
reinicio completo de un navegador
```

Por tanto, exigir ahora una recarga real del navegador modificaría retrospectivamente el criterio experimental después de conocido el resultado.

Además, `localStorage` fue seleccionado como medio contingente de continuidad, no como objeto de la investigación.

La pregunta investigada no es:

> ¿resiste `Y` todos los posibles ciclos técnicos de vida de un navegador?

sino:

> ¿puede existir una trayectoria en la que `Y` siga disponible después de que `X` haya dejado de estar disponible y antes de producir incidencia posterior?

### Resultado

```text
H-VO2
→ NO DERIVADA
```

No existe fundamento actualmente identificado para convertir una interrupción técnica más fuerte en condición del experimento.

---

## 25.7. Capacidad falsadora de una observación adicional

Debe comprobarse si una validación humana podría producir:

```text
tests ejecutables
✔

pero

H-DX2
✘
```

sin introducir una condición distinta de las prerregistradas.

Dentro del alcance actual no se ha identificado una trayectoria de ese tipo.

Los tests ya verifican:

```text
X e Y distinguibles
✔

X → Y
✔

Y disponible
✔

X retirada
✔

Y no reescrita durante la retirada
✔

X ausente tras nuevas lecturas
✔

Y presente tras nuevas lecturas
✔

Y_pre === Y_post
✔

Y → Z posible con Y
✔

Y → Z imposible sin Y
✔

Y no preparada previamente como X2
✔
```

Una observación manual que repitiera esos mismos pasos no introduciría una nueva variable capaz de falsar `H-DX2`.

---

## 25.8. Auditoría de `H-VO3`

`H-DX2` afirma la posibilidad de una trayectoria realizativa:

```text
Y producida en una situación con X
↓
Y queda disponible
↓
X deja de estar disponible
↓
interrupción
↓
Y continúa disponible
↓
Y produce incidencia posterior
```

sin:

```text
preparación previa Y → X2
```

`R-DX1-M1` proporciona un caso ejecutable de esa trayectoria.

La prueba no depende del significado de los contenidos y contiene un control negativo que discrimina la incidencia de `Y`.

Por tanto, para refutar la afirmación fuerte:

```text
la incidencia posterior de Y
requiere necesariamente
preparar previamente Y como X2
```

basta la existencia de una realización válida en la que dicha preparación no ocurre.

La candidata constituye ese contraejemplo dentro del alcance experimental especificado.

### Resultado

```text
H-VO3
→ CORROBORADA
```

La evidencia ejecutable actual resulta suficiente para discriminar `H-DX2` dentro del alcance de `R-DX1-M1`.

---

## 25.9. Resultado consolidado de la auditoría

La auditoría produce:

```text
H-VO1
→ rechazada

H-VO2
→ no derivada

H-VO3
→ corroborada
```

Por tanto:

> **No se ha identificado ninguna diferencia epistemológica relevante que justifique construir una interfaz o realizar una validación observacional humana independiente para la cuestión investigada.**

La evidencia ejecutable actualmente disponible satisface los criterios prerregistrados y discrimina la trayectoria objeto de `H-DX2`.

---

## 25.10. Consecuencias negativas

La auditoría no demuestra:

```text
que la observación humana
nunca sea necesaria
✘
```

ni:

```text
que vi.resetModules()
sea universalmente equivalente
a cualquier interrupción
✘
```

ni:

```text
que localStorage
sea un mecanismo suficiente
para cualquier realización futura
✘
```

ni:

```text
que toda validación realizativa
pueda resolverse mediante tests
✘
```

El resultado queda restringido a:

```text
esta pregunta
+
esta candidata
+
estos contratos
+
este criterio de aceptación
```

---

## 25.11. Consecuencia sobre la realización experimental

No se deriva fundamento para añadir:

```text
interfaz React
✘

flujo manual
✘

nuevo protocolo humano
✘

recarga obligatoria del navegador
✘

nueva persistencia
✘
```

Por tanto:

```text
R-DX1-M1
→ no ampliar
```

La candidata deberá permanecer en la forma mínima ya corroborada salvo que una investigación posterior derive una responsabilidad diferente.

---

## 25.12. Estado tras la auditoría

```text
validación observacional independiente
→ necesidad investigada
→ no justificada

interfaz experimental
→ no derivada

interrupción técnica adicional
→ no derivada

H-DX2
→ corroborada a nivel ejecutable
  dentro de R-DX1-M1

H-DX3
→ no corroborada

R-DX1-M1
→ suficiente para la discriminación realizada
→ no ampliar

R-U2-M1
→ intacta

Product
→ sin modificación derivada
```

La cuestión que mantenía abierta la investigación al final del resultado preobservacional queda resuelta:

```text
validación observacional independiente
→ necesidad investigada
→ no justificada

interfaz experimental
→ no derivada

interrupción técnica adicional
→ no derivada

H-DX2
→ corroborada a nivel ejecutable
  dentro de R-DX1-M1

H-DX3
→ no corroborada

R-DX1-M1
→ suficiente para la discriminación realizada
→ no ampliar

R-U2-M1
→ intacta

Product
→ sin modificación derivada
```

La suficiencia de la evidencia queda, por tanto, cerrada dentro del alcance de esta investigación.

A partir de este resultado se realizó la auditoría de clausura documentada en el apartado 26, destinada a comprobar si permanecía alguna hipótesis, obligación, consecuencia o residuo positivo cuya resolución debiera preceder al cierre.

---

# 26. Auditoría de clausura

## 26.1. Propósito

Esta auditoría determina si la investigación puede considerarse cerrada después de:

- formular y reducir la situación investigada;
- localizar el límite de la evidencia anterior;
- derivar las condiciones de una prueba discriminante;
- derivar `R-DX1-M1`;
- prerregistrar contratos y casos de prueba;
- observar la fase RED;
- implementar la candidata mínima;
- obtener la fase GREEN;
- validar globalmente el proyecto;
- evaluar las hipótesis;
- y auditar la suficiencia de la evidencia obtenida.

La clausura no exige demostrar que no pueda formularse ninguna investigación futura relacionada.

Exige determinar si queda algún resultado pendiente cuya resolución sea necesaria para responder la pregunta de investigación o para tratar correctamente las consecuencias derivadas de su respuesta.

---

## 26.2. Pregunta sometida a clausura

La pregunta principal fue:

> **¿Puede una aportación `Y`, después de haber sido producida y hecha disponible mediante una situación en la que intervino `X`, conservar capacidad de incidencia posterior cuando `X` deja de estar disponible antes de dicha incidencia, sin requerir que `Y` haya sido previamente transformada en el antecedente de una nueva aplicación?**

La investigación ha ejercido mediante `R-DX1-M1` la trayectoria:

```text
X disponible
↓
X → Y
↓
Y disponible
↓
X deja de estar disponible
↓
Y permanece disponible
↓
interrupción
↓
X continúa indisponible
Y continúa disponible
↓
Y → Z
```

sin una preparación previa:

```text
Y → X2
```

Por tanto, la pregunta principal dispone de una respuesta experimental positiva dentro del alcance definido:

> **Sí. La trayectoria es realizable sin preparación previa de `Y` como antecedente de una nueva aplicación.**

---

## 26.3. Auditoría de las hipótesis

### `H-DX1 — Equivalencia con la composición previamente observada`

Hipótesis:

> La investigación anterior de composición ya proporcionaba evidencia suficiente para el caso investigado.

Resultado:

```text
RECHAZADA
```

La composición anterior utilizó mediación previa para obtener un nuevo antecedente y no ejerció la trayectoria posteriormente investigada.

No queda obligación pendiente asociada a `H-DX1`.

---

### `H-DX2 — Incidencia posterior sin preparación previa`

Hipótesis:

> `Y` puede conservar capacidad de incidencia posterior después de que `X` deje de estar disponible sin requerir preparación previa `Y → X2`.

Resultado:

```text
CORROBORADA
A NIVEL DE REALIZACIÓN EJECUTABLE
DENTRO DE R-DX1-M1
```

`R-DX1-M1` proporciona un caso ejecutable suficiente para falsar la afirmación de necesidad:

```text
incidencia posterior de Y
↓
requiere necesariamente
preparación previa Y → X2
```

No queda obligación experimental pendiente para responder `H-DX2`.

---

### `H-DX3 — Dependencia realizativa necesaria`

Hipótesis:

> La trayectoria requiere una condición realizativa adicional irreducible no reducible a capacidades ya disponibles.

Resultado:

```text
NO CORROBORADA
```

La investigación ha necesitado una candidata con:

```text
disponibilidades distinguibles
+
retirada independiente de X
+
continuidad transinterrupción de Y
```

pero no ha demostrado que esa estructura constituya una responsabilidad realizativa general irreducible.

La existencia de `R-DX1-M1` demuestra realizabilidad, pero no convierte sus medios contingentes en necesidades universales.

No existe evidencia positiva actualmente identificada que obligue a prolongar la investigación para establecer una nueva condición irreducible.

Por tanto:

```text
H-DX3 no corroborada
≠
pregunta pendiente obligatoria
```

y tampoco:

```text
H-DX3 no corroborada
→ rechazada universalmente
```

La hipótesis queda cerrada en este expediente como **no corroborada**, sin derivación normativa.

---

### `H-DX4 — Refutación de R-U2-M1`

Hipótesis:

> La incapacidad de `R-U2-M1` para ejercer directamente la trayectoria refuta su alcance vigente.

Resultado:

```text
RECHAZADA COMO INFERENCIA
```

La capacidad investigada no pertenecía a las garantías consolidadas de `R-U2-M1`.

No existe obligación de modificar, ampliar o reabrir `R-U2-M1`.

---

## 26.4. Auditoría de los contratos

Los contratos prerregistrados fueron:

```text
C-DX01 — Distinción de disponibilidades
C-DX02 — Constitución válida de Y
C-DX03 — Disponibilidad posterior de Y
C-DX04 — Retirada independiente de X
C-DX05 — Ausencia de preparación previa Y → X2
C-DX06 — Continuidad transinterrupción de Y
C-DX07 — Correspondencia de Y
C-DX08 — Incidencia posterior
C-DX09 — Control negativo
C-DX10 — Opacidad semántica
```

La ejecución específica produjo:

```text
Test Files  3 passed (3)
Tests      20 passed (20)
```

Los contratos necesarios para discriminar la pregunta investigada quedaron ejercidos por las pruebas específicas.

No se ha identificado ningún contrato prerregistrado cuya comprobación continúe pendiente.

---

## 26.5. Auditoría del criterio de aceptación

El criterio de aceptación exigía, como mínimo:

```text
C-DX01 … C-DX10
✔

T-DX-INTEGRATION-01
✔

T-DX-INTEGRATION-02
✔

T-DX-NO-PREPARATION-01
✔
```

La ejecución obtuvo:

```text
tests específicos
→ 20/20

suite global
→ 204/204

TypeScript
→ sin errores
```

La trayectoria positiva y su control negativo fueron ejercidos.

No queda ningún criterio de aceptación pendiente.

---

## 26.6. Auditoría de falsos positivos

La investigación había identificado expresamente los siguientes falsos positivos:

### Misma ejecución

```text
X retirado
+
Y todavía presente en memoria
```

No fue utilizado como evidencia suficiente de `C3`.

La prueba exigió nuevas lecturas después de la interrupción instrumentada.

Resultado:

```text
EXCLUIDO
```

---

### Preparación previa de `Y`

```text
Y → X2
↓
retirada de X
```

La candidata conservó `X` e `Y` en posiciones distintas y no sustituyó `X` por `Y`.

Resultado:

```text
EXCLUIDO
```

---

### Reconstrucción humana

La prueba no dependió de que una persona recordara o reintrodujera `Y`.

Resultado:

```text
EXCLUIDO
```

---

### Reescritura de `Y` durante la retirada de `X`

`removeX()` no realiza escrituras persistentes sobre `Y`.

Resultado:

```text
EXCLUIDO
```

---

### Mera visualización de `Y`

La evidencia no se limitó a la presencia posterior de `Y`.

Se ejerció posteriormente:

```text
Y → Z
```

y se contrastó con la ausencia de `Y`.

Resultado:

```text
EXCLUIDO
```

---

### Valor constante o residual

La correspondencia fue sometida a pruebas con valores distinguibles y conservación literal como witness contingente.

Resultado:

```text
CONTROLADO DENTRO DEL ALCANCE EXPERIMENTAL
```

No queda identificado un falso positivo prerregistrado cuya resolución continúe pendiente.

---

## 26.7. Auditoría de suficiencia de la evidencia

La auditoría específica de suficiencia produjo:

```text
H-VO1
validación humana independiente necesaria
→ rechazada

H-VO2
interrupción técnica más fuerte necesaria
→ no derivada

H-VO3
evidencia ejecutable suficiente
→ corroborada
```

No se ha identificado una condición adicional que justifique:

```text
interfaz React
flujo manual
recarga obligatoria del navegador
nuevo protocolo humano
```

Por tanto, la ausencia de una validación observacional manual no constituye una obligación pendiente.

---

## 26.8. Auditoría de `R-DX1-M1`

`R-DX1-M1` ha cumplido la responsabilidad experimental para la que fue derivada.

Su resultado positivo establece:

```text
la trayectoria investigada
→ realizable
```

No establece:

```text
R-DX1-M1
→ realización normativa general
```

ni:

```text
sus mecanismos contingentes
→ necesidades universales
```

La candidata conserva el estatuto de:

> **realización experimental corroborada dentro del alcance de esta investigación y utilizable como witness ejecutable de realizabilidad.**

No se deriva fundamento para:

```text
ampliar R-DX1-M1
✘

generalizar R-DX1-M1
✘

convertirla en arquitectura
✘

incorporarla a R-U2-M1
✘
```

Su implementación y sus pruebas pueden conservarse como patrimonio experimental y evidencia reproducible de la investigación.

---

## 26.9. Auditoría de `R-U2-M1`

La investigación partió de una frontera conocida:

```text
R-U2-M1
→ realiza X → Y localmente

pero

→ no proporciona directamente
  continuidad posterior de Y
```

El resultado obtenido no convierte esa frontera en defecto.

No se ha derivado:

```text
nueva obligación de R-U2-M1
✘

modificación de garantías
✘

reapertura de su validación
✘

ampliación de código
✘
```

Por tanto:

```text
R-U2-M1
→ permanece intacta
```

---

## 26.10. Auditoría de Product

La diferencia humana investigada había sido previamente reducible a `PV-001`:

```text
Y puede incidir posteriormente
≠
Y no puede incidir posteriormente
```

El experimento ha demostrado una forma de realizar esa diferencia bajo una condición particular de desaparición del antecedente.

No ha demostrado una nueva diferencia humana independiente.

Por tanto no se deriva:

```text
modificación de PV-001
✘

PV-002
✘

nueva vertical
✘

nuevo compromiso de Product
✘
```

El resultado pertenece a Realization y no altera la clausura previa de Product respecto de la situación que originó la investigación.

---

## 26.11. Auditoría de los medios contingentes

La candidata utilizó:

```text
localStorage
dos claves
strings
conservación literal
createFromPrevious
vi.resetModules()
```

como instrumentos contingentes.

El éxito de la prueba no deriva que ninguno de ellos sea necesario universalmente.

Por tanto no queda una obligación de trasladarlos a:

```text
arquitectura
Product
modelo conceptual
R-U2-M1
otras realizaciones
```

Los medios contingentes quedan localizados y no generan deuda normativa pendiente.

---

## 26.12. Búsqueda de residuo positivo

Después de resolver la pregunta principal y auditar sus consecuencias se busca un residuo que satisfaga simultáneamente:

```text
diferencia positiva identificada
+
no resuelta por el resultado actual
+
perteneciente al alcance de la investigación
+
cuya resolución pueda cambiar
una conclusión actualmente consolidada
```

No se ha identificado tal residuo.

Permanece un resultado positivo:

```text
existe una realización
en la que:

X → Y
↓
X deja de estar disponible
↓
Y permanece disponible
↓
Y incide posteriormente
```

pero ese resultado es precisamente la respuesta obtenida, no una cuestión pendiente.

Tampoco constituye residuo positivo:

```text
¿podrían existir otros mecanismos?
```

porque la investigación era de realizabilidad, no de enumeración exhaustiva de realizaciones posibles.

Ni:

```text
¿podría hacerse con una interfaz?
```

porque no se ha derivado diferencia epistemológica que lo justifique.

Ni:

```text
¿es siempre necesario separar físicamente X e Y?
```

porque esa universalización no pertenece a la pregunta investigada y no dispone de fundamento positivo propio.

Resultado:

```text
residuo positivo pendiente
→ ninguno actualmente identificado
```

---

## 26.13. Obligaciones pendientes

Se auditan las posibles obligaciones resultantes:

```text
nueva prueba experimental
→ no derivada

nueva validación humana
→ no derivada

nueva interfaz
→ no derivada

modificación de R-DX1-M1
→ no derivada

modificación de R-U2-M1
→ no derivada

modificación de Product
→ no derivada

modificación de Architecture
→ no derivada

nueva condición realizativa irreducible
→ no derivada

nuevo compromiso normativo
→ no derivado
```

No queda ninguna obligación cuya resolución sea necesaria para la clausura de esta investigación.

---

## 26.14. Límites de la clausura

La clausura no establece:

```text
que toda Y deba sobrevivir a todo X
✘

que toda incidencia posterior
deba adoptar Y → Z
✘

que X e Y deban almacenarse
siempre por separado
✘

que la identidad literal
sea necesaria para correspondencia
✘

que localStorage
sea un mecanismo general
✘

que R-DX1-M1
sea una arquitectura
✘

que R-U2-M1 sea suficiente
para toda forma de PV-001
✘

que no puedan aparecer
nuevas situaciones futuras
con fundamento positivo propio
✘
```

La clausura afecta exclusivamente a la pregunta y al alcance definidos en este documento.

Una investigación futura sólo deberá abrirse si aparece nuevo fundamento positivo independiente, no por mera posibilidad lógica de ampliar el experimento.

---

## 26.15. Resultado de clausura

La auditoría encuentra:

```text
pregunta principal
→ respondida

H-DX1
→ rechazada

H-DX2
→ corroborada dentro de R-DX1-M1

H-DX3
→ no corroborada
→ sin residuo positivo pendiente

H-DX4
→ rechazada como inferencia

contratos
→ satisfechos

criterio de aceptación
→ satisfecho

falsos positivos
→ controlados

suficiencia de evidencia
→ auditada y aceptada

R-DX1-M1
→ corroborada como realización experimental

R-U2-M1
→ intacta

Product
→ intacto

obligaciones pendientes
→ ninguna

residuo positivo pendiente
→ ninguno actualmente identificado
```

Por tanto:

> **La investigación puede considerarse cerrada con resultado positivo de realizabilidad y sin derivación de una nueva responsabilidad normativa.**

Estado:

```text
INVESTIGACIÓN
→ CERRADA

resultado principal
→ trayectoria realizable

H-DX2
→ corroborada dentro del alcance experimental

nueva condición irreducible
→ no derivada

R-DX1-M1
→ conservar como witness experimental ejecutable

R-U2-M1
→ sin modificación

Product
→ sin modificación
```

---

## 26.16. Condición de reapertura

La investigación no deberá reabrirse por:

```text
deseo de probar otra implementación
✘

posibilidad de construir una interfaz
✘

interés en usar otro almacenamiento
✘

deseo de obtener más ejemplos
✘

mera existencia de mecanismos alternativos
✘
```

Sólo deberá considerarse una reapertura si aparece evidencia positiva capaz de cuestionar alguna conclusión de clausura, por ejemplo:

```text
un contraejemplo relevante
al criterio experimental utilizado

una condición no ejercida
que pertenezca demostrablemente
a la pregunta original

una incompatibilidad descubierta
entre el resultado y un compromiso
ya consolidado

o

un nuevo fundamento positivo
que revele una diferencia
irreducible previamente no identificada
```

En ausencia de una condición de este tipo, la clausura deberá conservarse.

---
