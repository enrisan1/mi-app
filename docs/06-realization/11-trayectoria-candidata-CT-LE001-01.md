# Trayectoria candidata `CT-LE001-01`

## Estado

**Identificador:** `CT-LE001-01`
**Naturaleza:** trayectoria humana candidata de `LE-001`.
**Origen empírico:** `OU-RU2M1-003`.
**Compromiso de Product relacionado:** `PV-001`.
**Estado:** candidata seleccionada; reconstrucción extremo a extremo establecida; condiciones realizativas mínimas derivadas; trayectoria completa todavía no observada.
**Realización inicialmente disponible para su ejercicio:** `R-U2-M1`.

---

# 1. Propósito

Este documento formaliza una trayectoria humana candidata surgida de evidencia
obtenida durante `OU-RU2M1-003`.

Su propósito consiste en:

- reconstruir la situación humana observada sin convertir prematuramente sus
  mecanismos contingentes en requisitos;
- determinar su relación con los compromisos vigentes de Product;
- establecer si existe fundamento suficiente para seleccionarla como candidata
  a la primera trayectoria humana integrada perseguida por `LE-001`;
- derivar las condiciones realizativas mínimas necesarias para poder ejercerla;
- y delimitar qué cuestiones permanecen todavía abiertas a evidencia.

El documento no deriva una arquitectura ni prescribe una implementación.

---

# 2. Origen empírico

Durante `OU-RU2M1-003` se realizó una actividad real de revisión de un artículo
todavía en elaboración.

Durante esa actividad fue necesario comparar dos versiones del artículo.

La persona observó que localizar una diferencia y modificarla inmediatamente,
repitiendo ese ciclo diferencia por diferencia, hacía la actividad demasiado
tediosa.

Como respuesta, decidió separar ambas actuaciones:

```text
primero
→ localizar las diferencias
→ conservar información que permita reencontrarlas

después
→ utilizar esa información
→ reencontrar las diferencias
→ realizar las modificaciones
```

La actuación produjo durante `OU-RU2M1-003` la aportación:

```text
para poder hacer los cambios adecuadamente hay primero que anotar la localización de los mismos en una nota aparte después de localizarlos para poder encontrarlos en el momento de hacer las modificaciones porque hacer uno a uno es muy tedioso.
```

La observación de esta situación no estableció una insuficiencia de
`R-U2-M1`.

`OU-RU2M1-003` fue evaluada dentro de su propio alcance como:

```text
B — Evidencia positiva local
```

con:

```text
consecuencia
→ ninguna
```

La situación tratada en este documento constituye un resultado empírico
distinto aparecido durante aquella actividad y no una reinterpretación de la
evaluación de `R-U2-M1`.

---

# 3. Situación humana candidata

La situación se formula del siguiente modo:

> Durante la revisión de un artículo todavía en elaboración, una persona
> compara dos versiones para localizar los cambios existentes entre ellas. Al
> comprobar que localizar una diferencia y modificarla inmediatamente,
> repitiendo ese ciclo una por una, hace la actividad excesivamente tediosa,
> decide separar ambas actuaciones: primero localizar las diferencias y
> conservar información suficiente para poder reencontrarlas; posteriormente
> utilizar esa información para realizar las modificaciones.

Esta formulación describe una situación humana.

No presupone:

```text
comparador automático de versiones
✘

sistema de notas
✘

lista estructurada de diferencias
✘

marcadores
✘

historial
✘

editor integrado
✘

algoritmo diff
✘
```

Estos elementos podrían constituir realizaciones contingentes, pero no forman
parte de la situación actualmente establecida.

---

# 4. Diferencia humana identificada

La diferencia relevante puede formularse como:

> Una actuación posterior puede evitar tener que reconstruir parte del trabajo
> de localización realizado anteriormente cuando aquello producido durante la
> localización permanece disponible de forma suficiente para incidir en la
> actuación posterior.

La diferencia puede representarse contrafácticamente:

```text
sin disponibilidad posterior
de aquello producido durante la localización
↓
la actuación posterior puede requerir
reconstruir trabajo ya realizado
```

frente a:

```text
con disponibilidad posterior
de aquello producido durante la localización
↓
la actuación posterior puede partir
del trabajo realizado anteriormente
```

La primera parte de esta diferencia —la aparición de la estrategia destinada a
evitar la reconstrucción— quedó establecida empíricamente durante
`OU-RU2M1-003`.

Su incidencia posterior completa todavía no ha sido observada.

---

# 5. Reducción frente a `PV-001`

El valor humano consolidado por `PV-001` establece que:

> las posibilidades posteriores de actuación puedan depender también de
> aportaciones procedentes de situaciones anteriores.

La situación candidata puede reconstruirse respecto de `PV-001` como:

```text
situación anterior
→ localización de diferencias

aportación anterior
→ información suficiente
  para reencontrar posteriormente
  aquello localizado

situación posterior
→ modificación del artículo

incidencia
→ la aportación anterior puede intervenir
  en el reencuentro de las diferencias
  y en la actuación posterior
```

La correspondencia estructural es:

```text
PV-001

situación anterior
↓
aportación
↓
situación posterior
↓
posibilidades de actuación
dependientes de la aportación anterior
```

y:

```text
CT-LE001-01

localización
↓
L
↓
modificación posterior
↓
posibilidad de reencontrar
y actuar sobre lo localizado
```

donde `L` designa provisionalmente:

> aquello producido durante la localización que resulte suficiente para que una
> actuación posterior pueda reencontrar aquello pertinente.

---

# 6. Resultado de la reducción

La evidencia actualmente disponible no establece un valor humano independiente
de `PV-001`.

En particular, no se ha establecido como valor autónomo de Product:

```text
comparar configuraciones
→ no establecido

localizar diferencias
→ no establecido

separar una actividad en fases
→ no establecido

automatizar la correspondencia
entre localización y modificación
→ no establecido
```

La diferencia humana actualmente demostrada puede ser explicada mediante
`PV-001`.

Por tanto:

```text
reducción a PV-001
✔

residuo independiente de Product
→ no establecido

nueva vertical de Product
→ no justificada

nueva investigación de Product
→ no justificada
```

---

# 7. Selección como candidata de `LE-001`

La reducción a `PV-001` no elimina el valor de la situación para `LE-001`.

La situación posee:

```text
origen en actividad humana real
✔

dificultad real observada
✔

cambio efectivo de actuación
✔

aportación producida
✔

situación anterior identificable
✔

situación posterior identificable
✔

relación con PV-001 establecida
✔
```

Esto proporciona fundamento suficiente para seleccionarla como:

> **candidata a la primera trayectoria humana integrada de `LE-001`.**

La selección no equivale a afirmar que la trayectoria completa esté ya
suficientemente justificada.

En particular:

```text
selección como candidata
✔

trayectoria completa empíricamente observada
○

consolidación como primera trayectoria humana integrada
○
```

---

# 8. Reconstrucción extremo a extremo

La trayectoria candidata se reconstruye como:

```text
CT-LE001-01

S1 — localización
↓
persona compara dos versiones
↓
identifica diferencias relevantes
↓
produce L
↓
L contiene información suficiente
para intentar reencontrar posteriormente
aquello localizado

        ↓
separación entre situaciones
        ↓

S2(L) — modificación
↓
L vuelve a estar disponible
↓
la persona utiliza L
↓
reencuentra aquello
que había localizado
↓
realiza una o más modificaciones
sobre el artículo
```

La trayectoria no presupone que todas estas actuaciones deban ocurrir dentro
de una misma plataforma.

Pueden coexistir operaciones externas mientras la relación necesaria entre las
situaciones permanezca realizable.

---

# 9. Estatuto de `L`

`L` no designa una solución técnica.

No implica necesariamente:

```text
lista
nota
marcador
enlace
anotación estructurada
registro por diferencia
posición automática
```

`L` designa únicamente una aportación producida durante `S1` que conserva
información suficiente para que pueda intentar utilizarse posteriormente en
`S2`.

Una única `L` podrá contener información relativa a varias diferencias.

Por tanto:

```text
pluralidad de diferencias
≠
pluralidad necesaria de aportaciones
```

---

# 10. Condiciones realizativas mínimas

## `CR-CT01-01 — Constitución de la aportación anterior`

Durante `S1` debe poder quedar establecida una aportación `L` procedente de la
actividad de localización.

```text
actividad de localización
↓
L distinguible
```

La condición no prescribe la estructura interna de `L`.

---

## `CR-CT01-02 — Continuidad entre situaciones`

`L` debe poder atravesar la separación entre `S1` y `S2`.

```text
S1
↓
L
↓
separación
↓
S2
```

La condición no prescribe el mecanismo mediante el que se realiza esa
continuidad.

---

## `CR-CT01-03 — Reaparición posterior`

Durante `S2`, `L` debe poder volver a quedar a disposición de la persona antes
o durante la actuación para la que resulte pertinente.

La mera existencia interna de `L` no basta.

```text
L conservada
+
L disponible en S2
↓
posible incidencia posterior
```

---

## `CR-CT01-04 — Correspondencia suficiente`

`L` debe conservar información suficiente para que la persona pueda establecer
una correspondencia entre aquello conservado y aquello sobre lo que debe actuar
posteriormente.

La condición mínima es:

> `L` debe conservar suficiente capacidad de referencia para que, en la
> situación posterior concreta, la persona pueda reencontrar aquello
> pertinente.

La correspondencia no necesita ser interpretada por la plataforma.

Puede permanecer como una operación humana externa a ella.

La satisfacción efectiva de esta condición deberá establecerse mediante
observación.

El mero intento de reencontrar aquello pertinente no basta para considerar
satisfecha la condición.

---

## `CR-CT01-05 — Incidencia efectiva`

Para que la trayectoria quede empíricamente completada, no basta con que `L`
reaparezca.

Debe poder ser utilizada de forma que produzca una diferencia relevante en la
actuación posterior.

```text
L disponible
↓
L utilizada
↓
incidencia posterior
```

La incidencia efectiva no puede establecerse únicamente por derivación.

Debe observarse.

---

## `CR-CT01-06 — Actuación posterior efectiva`

La trayectoria debe alcanzar una actuación efectiva sobre aquello reencontrado.

En la situación actualmente candidata:

```text
reencontrar
↓
modificar
```

La realización de al menos una modificación permitirá observar localmente el
tramo posterior completo.

---

# 11. Condiciones no derivadas

La trayectoria no deriva actualmente necesidad de:

```text
comparador automático de versiones
✘

versionado interno
✘

algoritmo diff
✘

editor integrado
✘

almacenamiento interno del artículo
✘

almacenamiento interno de ambas versiones
✘

marcadores persistentes
✘

colección estructurada de diferencias
✘

enlaces automáticos
✘

historial de modificaciones
✘

nueva arquitectura
✘
```

La incorporación de cualquiera de estos elementos requeriría fundamento
posterior independiente.

---

# 12. Relación preliminar con `R-U2-M1`

`R-U2-M1` permite actualmente:

```text
S1
→ recibir una aportación textual
→ conservarla

separación

S2
→ restaurar la aportación
→ presentarla nuevamente
```

Si:

```text
X := L
```

entonces la realización existente parece poder proporcionar inicialmente:

```text
CR-CT01-01
→ constitución de L

CR-CT01-02
→ continuidad de L

CR-CT01-03
→ reaparición de L
```

`CR-CT01-04` podría quedar satisfecha si la propia aportación textual conserva
información interpretable suficiente para que la persona establezca la
correspondencia posteriormente.

`CR-CT01-05` y `CR-CT01-06` dependen de la actividad humana efectiva y no
pueden establecerse antes del uso.

Por tanto:

```text
suficiencia prima facie de R-U2-M1
para intentar ejercer CT-LE001-01
→ sí

suficiencia demostrada
→ no

modificación de R-U2-M1
→ no derivada
```

---

# 13. Relación con Architecture

Las condiciones realizativas establecidas describen diferencias que deben poder
producirse durante la trayectoria.

No determinan todavía responsabilidades, componentes o mecanismos
arquitectónicos concretos.

En particular:

```text
continuidad de L
≠
repositorio necesariamente nuevo

correspondencia suficiente
≠
sistema automático de referencias

reaparición de L
≠
mecanismo técnico concreto
```

Por tanto:

```text
condiciones realizativas mínimas
✔ establecidas

necesidad arquitectónica
→ no establecida

derivación de Architecture
→ no justificada actualmente
```

---

# 14. Incertidumbre empírica restante

La principal cuestión todavía no resuelta es:

> ¿Puede una `L` producida durante una actividad real de localización atravesar
> una separación entre situaciones, reaparecer posteriormente y ser utilizada
> efectivamente para reencontrar aquello localizado y realizar al menos una
> modificación?

Esta cuestión no requiere actualmente mayor generalización teórica.

Requiere evidencia de uso.

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
la posible aplicación de la categoría C.

No se reparará `L` durante la observación.



---

# 16. Estado resultante

```text
CT-LE001-01
✔ origen empírico establecido
✔ situación humana formulada
✔ diferencia humana identificada
✔ reducción frente a PV-001 realizada
✔ residuo independiente de Product no establecido
✔ candidata de LE-001 seleccionada
✔ reconstrucción extremo a extremo establecida
✔ condiciones realizativas mínimas derivadas
○ trayectoria completa todavía no observada

PV-001
→ suficiente para explicar
  el valor humano actualmente establecido

R-U2-M1
→ aparentemente suficiente
  para intentar ejercer la candidata
→ ninguna modificación derivada

Architecture
→ no derivada

siguiente necesidad de conocimiento
→ empírica
→ observar CT-LE001-01 completa
```

---

# 17. Punto de continuación

La siguiente actuación justificable consiste en formalizar y posteriormente
ejercer un protocolo específico de observación de `CT-LE001-01`.

El protocolo deberá:

```text
observar una actividad humana real
+
mantener R-U2-M1 sin modificación previa
+
distinguir preparación de trayectoria
+
registrar L literalmente
+
observar una situación posterior real
+
determinar si L reaparece
+
determinar si L es utilizada
+
determinar si permite reencontrar
+
determinar si se realiza una modificación
+
evaluar la incidencia posterior
```

El resultado de esa observación deberá conservarse como nueva evidencia antes
de decidir cualquier investigación, modificación realizativa o derivación
arquitectónica.

---
