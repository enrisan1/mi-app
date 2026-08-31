# Protocolo de observación de `CT-LE001-01`

## Estado

**Identificador:** `POT-CTLE001-01`
**Naturaleza:** protocolo local de observación de `CT-LE001-01`, formulado durante su estatuto de trayectoria candidata.
**Trayectoria observada:** `CT-LE001-01`.
**Origen de la trayectoria:** situación empírica aparecida durante `OU-RU2M1-003`.
**Compromiso de Product relacionado:** `PV-001`.
**Realización instrumental inicial:** `R-U2-M1`.
**Estado:** primera aplicación formal completada mediante `OT-CTLE001-001`; resultado `A — Trayectoria completa con incidencia positiva local`; repetición no derivada; suficiencia general no establecida.

---

# 1. Propósito

Este documento establece el procedimiento mínimo para observar en una actividad
humana real la trayectoria candidata `CT-LE001-01`.

La pregunta principal es:

> ¿Puede una aportación `L` producida durante una situación anterior de
> localización atravesar una separación entre situaciones, volver a estar
> disponible posteriormente y ser utilizada efectivamente para reencontrar
> aquello localizado y realizar al menos una modificación?

El objeto principal de observación es la trayectoria humana.

`R-U2-M1` se utiliza inicialmente como realización instrumental disponible para
hacer posible la continuidad de `L`.

El protocolo no tiene como finalidad primaria:

```text
volver a evaluar POU-RU2M1-01
→ no

demostrar utilidad general de R-U2-M1
→ no

buscar una nueva funcionalidad
→ no

derivar Architecture
→ no

demostrar una nueva vertical de Product
→ no
```

---

# 2. Fundamento

`CT-LE001-01` fue reconstruida a partir de una situación humana aparecida
durante `OU-RU2M1-003`.

La trayectoria candidata quedó definida como:

```text
S1 — localización
↓
persona compara dos versiones
↓
identifica diferencias
↓
produce L

        ↓
separación entre situaciones
        ↓

S2(L) — modificación
↓
L vuelve a estar disponible
↓
la persona utiliza L
↓
reencuentra aquello localizado
↓
realiza una o más modificaciones
```

La reducción realizada frente a `PV-001` no estableció un valor humano
independiente.

La principal incertidumbre restante es empírica:

```text
L producida
↓
L conservada
↓
L reaparece
↓
¿L es efectivamente utilizada?
↓
¿permite reencontrar?
↓
¿produce una diferencia relevante
en la actuación posterior?
```

Esta incertidumbre justifica la presente observación.

---

# 3. Alcance

La aplicación del protocolo deberá observar una actividad real en la que una
persona:

1. compare dos versiones de un artículo u otro material real que esté
   efectivamente revisando;
2. localice diferencias que pretenda modificar posteriormente;
3. produzca una aportación `L` destinada a permitir su reencuentro posterior;
4. termine la situación de localización;
5. reanude posteriormente la actividad;
6. recupere `L`;
7. utilice `L`;
8. intente reencontrar aquello localizado;
9. y realice al menos una modificación cuando ello resulte posible.

La actividad no deberá crearse únicamente para satisfacer el protocolo.

Debe corresponder a una necesidad real de trabajo.

---

# 4. Estatuto de `L`

`L` designa:

> una aportación producida durante `S1` que contiene información que la persona
> considera suficiente para intentar reencontrar posteriormente aquello
> localizado.

El protocolo no prescribe su forma.

`L` puede ser:

```text
una única aportación
→ sí

una aportación que incluya varias localizaciones
→ sí

texto libre
→ sí
```

No se exige:

```text
una aportación por diferencia
✘

lista estructurada
✘

marcadores
✘

enlaces
✘

identificadores automáticos
✘

posiciones calculadas por software
✘
```

El contenido de `L` deberá surgir de la actividad real.

No deberá diseñarse previamente para garantizar el éxito de la observación.

---

# 5. Condiciones realizativas observadas

La observación tomará como referencia las condiciones mínimas derivadas en
`CT-LE001-01`.

```text
CR-CT01-01
→ constitución de L

CR-CT01-02
→ continuidad entre situaciones

CR-CT01-03
→ reaparición posterior

CR-CT01-04
→ correspondencia suficiente

CR-CT01-05
→ incidencia efectiva

CR-CT01-06
→ actuación posterior efectiva
```

Estas condiciones constituyen criterios de observación.

No prescriben mecanismos técnicos.

---

# 6. Realización instrumental

La primera aplicación utilizará `R-U2-M1` sin modificación previa.

La hipótesis instrumental mínima es:

```text
X := L
```

de modo que:

```text
S1
→ L se introduce como aportación textual
→ R-U2-M1 conserva L

separación

S2
→ R-U2-M1 restaura L
→ R-U2-M1 vuelve a presentar L
```

La utilización de `R-U2-M1` no implica que la trayectoria candidata sea una
extensión normativa de esa realización.

Tampoco implica que una insuficiencia observada durante la trayectoria deba ser
atribuida automáticamente a `R-U2-M1`.

---

# 7. Condición preobservacional

Antes de constituir formalmente `S1`, la ejecución destinada a recibir `L`
debe comenzar sin una aportación válida anterior restaurada que convierta ya la
situación inicial en una situación posterior dependiente de otra trayectoria.

Debe comprobarse:

```text
ejecución destinada a S1
↓
sin X válido restaurado
```

Si la realización se encuentra inicialmente en una situación equivalente a:

```text
S2(X anterior)
```

esa ejecución no constituye `S1` de `CT-LE001-01`.

Podrá realizarse una actuación preparatoria contingente para obtener una nueva
ejecución apta.

---

# 8. Preparación instrumental

Toda actuación destinada únicamente a preparar `R-U2-M1` deberá distinguirse
de la trayectoria observada.

Por tanto:

```text
preparación
≠
S1
```

Una posible actuación técnica actual podría consistir en eliminar el valor
persistido utilizado por `R-U2-M1`.

Ese mecanismo es contingente.

No constituye requisito de `CT-LE001-01` ni de este protocolo.

La ficha deberá registrar:

```text
estado inicial de R-U2-M1

si existía antecedente válido restaurado

acción preparatoria realizada, si existió

comprobación posterior

momento exacto en que comienza S1
```

---

# 9. Constitución de `S1`

`S1` sólo queda constituida cuando comienza una actividad humana real de
localización.

Debe existir:

```text
material real
+
necesidad real de comparación
+
intención efectiva de localizar
diferencias para modificarlas después
```

No es suficiente abrir dos documentos únicamente para ejecutar la prueba.

La persona deberá proceder con su actividad normal.

---

# 10. Producción de `L`

Durante `S1`, la persona producirá libremente la información que considere
necesaria para poder reencontrar posteriormente aquello localizado.

Cuando esa información quede suficientemente formada para la persona:

```text
actividad de localización
↓
L
```

`L` deberá introducirse en `R-U2-M1` sin transformación destinada a mejorar su
posterior rendimiento.

Deberá registrarse literalmente.

No se corregirán:

```text
ortografía
✘

estructura
✘

precisión
✘

orden
✘

formulación
✘
```

salvo que la propia persona realice espontáneamente esos cambios antes de dar
por terminada `S1`.

---

# 11. Finalización de `S1`

`S1` termina cuando la persona considera finalizada la fase de localización que
quiere separar de la modificación posterior.

Deberá registrarse:

```text
hora de inicio de S1

actividad realizada

hechos relevantes observados

L literal

hora de finalización

razón declarada para finalizar S1
```

La razón declarada deberá registrarse como declaración, no como hecho
observado.

---

# 12. Separación entre situaciones

La separación entre `S1` y `S2` debe ser real.

El protocolo no establece una duración mínima.

No se prescribe:

```text
horas determinadas
✘

un día
✘

una semana
✘
```

La separación puede deberse:

- al procedimiento de trabajo;
- a una pausa;
- a otra actividad;
- a una interrupción externa;
- o a cualquier circunstancia real que diferencie las dos situaciones.

Deberán registrarse:

```text
inicio de la separación

fin de la separación

duración efectiva

circunstancias relevantes
```

La duración no determina por sí misma la validez de la trayectoria.

---

# 13. Constitución de `S2(L)`

`S2(L)` comienza cuando la persona retoma realmente la actividad con intención
de realizar las modificaciones correspondientes.

Antes de utilizar `L` deberá observarse si `R-U2-M1` la vuelve a presentar.

Se registrará:

```text
hora de inicio

¿L reaparece?
sí / no

contenido restaurado literalmente

¿coincide con L?
sí / no / diferencia observada
```

La reaparición de `L` establece como máximo evidencia relativa a continuidad y
disponibilidad.

No establece todavía incidencia.

---

# 14. Utilización efectiva de `L`

El núcleo de la observación comienza cuando la persona utiliza o intenta
utilizar `L`.

Deberá registrarse factualmente:

```text
¿consulta L?

¿qué parte de L utiliza?

¿qué actuación realiza a partir de ella?

¿intenta establecer correspondencia
con el material original?

¿reencuentra aquello localizado?
```

No deberá inferirse utilización sólo porque `L` esté visible.

Debe existir alguna actuación atribuible a su consulta.

---

# 15. Correspondencia suficiente

`CR-CT01-04` se considerará localmente satisfecha cuando la persona, utilizando
información contenida en `L`, consiga establecer la correspondencia entre:

```text
información conservada en L
↕
lugar o elemento sobre
el que pretende actuar
```

y pueda reencontrar aquello pertinente para la actuación posterior.

La plataforma no necesita establecer automáticamente esa correspondencia.

Puede ser completamente interpretada por la persona.

El intento de establecer la correspondencia forma parte de una aplicación
válida del protocolo, pero no basta para considerar satisfecha
`CR-CT01-04`.

Si `L` reaparece pero no permite reencontrar suficientemente aquello
localizado, deberá conservarse esa dificultad como evidencia.

En ese caso la trayectoria no podrá considerarse completa y deberá evaluarse
la posible aplicación de la categoría `C`.

No se reparará `L` durante la observación.

---

# 16. Actuación posterior

Cuando la persona reencuentre aquello localizado deberá continuar con su
actividad real.

La trayectoria alcanzará su tramo posterior mínimo cuando se produzca:

```text
L utilizada
↓
elemento reencontrado
↓
modificación efectiva
```

Una sola modificación puede ser suficiente para observar localmente la cadena
completa.

No es necesario completar todas las modificaciones pendientes.

---

# 17. Criterio de trayectoria completa

La aplicación sólo podrá considerarse una observación completa de
`CT-LE001-01` cuando concurran:

```text
S1 real
✔

L producida durante S1
✔

L conservada
✔

separación real
✔

S2 real
✔

L reaparece
✔

L es utilizada
✔

mediante L se consigue
reencontrar aquello localizado
✔

se realiza al menos una modificación
sobre aquello reencontrado
✔
```

La satisfacción conductual de estos pasos no establece automáticamente
incidencia humana relevante.

Ésta deberá evaluarse separadamente.

---

# 18. Evaluación de incidencia

Después de la actuación posterior deberá distinguirse:

```text
uso de L
≠
incidencia relevante de L
```

La persona deberá responder, en la medida en que pueda hacerlo, a dos preguntas:

> ¿Qué diferencia, si alguna, produjo disponer de `L` en la forma en que
> realizaste la modificación?

y:

> ¿Qué habrías tenido que hacer de forma diferente si `L` no hubiera estado
> disponible?

Las respuestas deberán registrarse como declaraciones.

No deberán transformarse automáticamente en hechos.

---

# 19. Hechos, declaraciones e interpretaciones

La ficha deberá mantener separados:

```text
hechos observados

declaraciones de la persona

interpretaciones posteriores

posibles pérdidas

posibles insuficiencias

posibilidades imaginadas

consecuencia justificable
```

Una declaración como:

```text
"ya recordaba dónde estaba"
```

no equivale automáticamente a demostrar ausencia de incidencia.

Del mismo modo:

```text
"esto sería útil después de una semana"
```

constituye una posibilidad imaginada mientras no exista evidencia
correspondiente.

---

# 20. Regla de no intervención

Durante `S2` no deberá modificarse la trayectoria con el propósito de producir
un resultado positivo.

No deberá:

```text
mejorarse L después de observar una dificultad
✘

añadirse información de localización
para salvar la prueba
✘

reescribirse L
✘

añadirse un mecanismo nuevo
✘

modificarse R-U2-M1
✘

indicarse a la persona
cómo debería interpretar L
✘
```

Si aparece una dificultad, deberá conservarse como evidencia.

---

# 21. Categorías de resultado

## `A — Trayectoria completa con incidencia positiva local`

Se utilizará cuando:

```text
L reaparece
+
L se utiliza
+
L permite reencontrar
+
se realiza una modificación
+
se establece una diferencia posterior
relevante atribuible localmente
a la disponibilidad de L
```

Este resultado constituirá evidencia positiva local de la trayectoria
candidata.

---

## `B — Trayectoria conductualmente completa; incidencia relevante no establecida`

Se utilizará cuando:

```text
L reaparece
+
L se utiliza
+
se reencuentra
+
se modifica
```

pero la evidencia disponible no permite establecer que disponer de `L`
produjera una diferencia humana relevante en la actuación posterior.

---

## `C — Trayectoria incompleta por correspondencia insuficiente de L`

Se utilizará cuando `L` reaparezca pero su contenido resulte insuficiente para
reencontrar de forma adecuada aquello localizado.

Este resultado podrá constituir evidencia de una pérdida candidata.

No establecerá automáticamente:

```text
insuficiencia de R-U2-M1
→ no

necesidad de nueva funcionalidad
→ no

necesidad de Architecture
→ no
```

La atribución deberá investigarse separadamente si existe fundamento positivo.

---

## `D — Trayectoria no evaluable por causa externa`

Se utilizará cuando la trayectoria no pueda completarse por una circunstancia
que no permita evaluar las condiciones relevantes.

Por ejemplo:

```text
actividad abandonada

material ya no disponible

modificación deja de ser necesaria

interrupción externa definitiva
```

El resultado no contará como evidencia positiva ni negativa de suficiencia de
la trayectoria.

---

## `E — Problema instrumental candidato`

Se utilizará cuando aparezca una dificultad relativa a la capacidad
instrumental mediante la que `L` debería:

```text
constituirse

conservarse

restaurarse

presentarse
```

La clasificación `E` no implica por sí misma una insuficiencia establecida de
`R-U2-M1`.

Requerirá atribución posterior antes de justificar cualquier modificación.

---

# 22. Consecuencias permitidas

La observación podrá justificar:

```text
conservar evidencia positiva
→ sí

considerar suficientemente observada
la trayectoria en esta aplicación
→ según resultado

identificar una pérdida candidata
→ sí

abrir investigación posterior
→ sólo si existe fundamento positivo
```

No podrá justificar automáticamente:

```text
nueva vertical de Product
✘

modificación de PV-001
✘

modificación de R-U2-M1
✘

nueva realización
✘

Architecture
✘

funcionalidad concreta
✘
```

---

# 23. Ficha mínima

```text
OBSERVACIÓN
Identificador:
Fecha:
Versión de R-U2-M1:

PREPARACIÓN

estado inicial:

¿existía X válido restaurado?
sí / no

acción preparatoria, si existió:

comprobación posterior:

S1 — LOCALIZACIÓN

hora de inicio:

actividad real:

material comparado:

hechos observados:

L literal:
"..."

hora de finalización:

razón declarada para separar
localización y modificación:
"..."

SEPARACIÓN

inicio:

fin:

duración:

circunstancias relevantes:

S2(L) — MODIFICACIÓN

hora de inicio:

¿L reaparece?
sí / no

L restaurada literalmente:
"..."

¿coincide con L?
sí / no

¿la persona consulta L?
sí / no

parte de L utilizada:

actuación realizada a partir de L:

¿se intenta establecer correspondencia?
sí / no

¿se reencuentra aquello localizado?
sí / no

¿se realiza una modificación?
sí / no

modificación realizada:

DECLARACIONES POSTERIORES

diferencia que produjo disponer de L:
"..."

qué habría sido necesario hacer sin L:
"..."

dificultades declaradas:
"..."

INTERPRETACIÓN POSTERIOR

hechos:

declaraciones:

interpretaciones:

posible pérdida:

atribución:
establecida / no establecida / no procede

EVALUACIÓN

trayectoria conductualmente completa:
sí / no

incidencia positiva local:
sí / no / no establecida

clasificación:
A / B / C / D / E

consecuencia justificable:
```

---

# 24. Relación con `POU-RU2M1-01`

Esta observación no constituye por sí misma una cuarta aplicación formal de
`POU-RU2M1-01`.

Los protocolos tienen objetos diferentes:

```text
POU-RU2M1-01
→ observa R-U2-M1
  dentro de una trayectoria de reanudación

POT-CTLE001-01
→ observa CT-LE001-01
  como trayectoria humana candidata
```

La reutilización de determinadas precauciones metodológicas, incluida la
distinción preobservacional entre una ejecución con antecedente restaurado y
una ejecución apta para comenzar `S1`, no identifica ambos protocolos.

---

# 25. Estado resultante

```text
POT-CTLE001-01
✔ objeto de observación delimitado
✔ pregunta empírica establecida
✔ realización instrumental inicial definida
✔ condición preobservacional establecida
✔ preparación separada de trayectoria
✔ criterio de S1 definido
✔ estatuto de L definido
✔ criterio de S2(L) definido
✔ utilización efectiva diferenciada de reaparición
✔ correspondencia suficiente operacionalizada
✔ actuación posterior mínima definida
✔ criterio de trayectoria completa definido
✔ evaluación de incidencia separada
✔ categorías A–E establecidas
✔ regla de no intervención establecida
✔ ficha mínima definida
○ primera aplicación formal todavía no realizada
```

---

# 26. Punto de continuación

Una vez congelado este protocolo, la siguiente actuación será constituir su
primera aplicación formal únicamente cuando exista una actividad real apta para
`S1`.

La observación deberá comenzar sin modificar previamente `R-U2-M1`.

Durante la aplicación:

```text
actividad real
↓
evidencia
↓
registro
↓
evaluación
```

y sólo después:

```text
¿aparece diferencia relevante?
↓
investigación únicamente
si existe fundamento positivo
```

Ninguna conclusión sobre Architecture, nueva realización o modificación de
Product deberá anticiparse al resultado empírico.

---

# 27. Primera aplicación formal

La primera aplicación formal del protocolo se realizó mediante:

```text
OT-CTLE001-001
```

La aplicación completó la trayectoria prevista y obtuvo:

```text
A — Trayectoria completa con incidencia positiva local
```

Las seis condiciones realizativas de `CT-LE001-01` fueron satisfechas
localmente.

No apareció una insuficiencia del protocolo que justifique su modificación.

---

# 28. Estado posterior a la primera aplicación

```text
POT-CTLE001-01
✔ primera aplicación formal completada
✔ trayectoria completa observada
✔ incidencia positiva local observada
✔ ninguna insuficiencia instrumental nueva establecida
○ suficiencia general no establecida
→ segunda aplicación no derivada automáticamente
```

La primera aplicación aporta evidencia suficiente para la decisión local que
la justificaba.

No existe actualmente fundamento para repetirla únicamente con el objetivo de
aumentar precisión o confianza.

---
