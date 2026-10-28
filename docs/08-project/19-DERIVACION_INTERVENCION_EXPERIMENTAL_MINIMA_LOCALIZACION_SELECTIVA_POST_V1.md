# Derivación de intervención experimental mínima para localización selectiva posterior

## Estado

```text id="j98dte"
V1
→ suficientemente realizada

primer objetivo post-V1
→ delimitado

CPV1-01 — Localización selectiva posterior
→ diferencia funcional nueva identificada

CF-PV1-01
→ parcialmente satisfecho por evidencia existente

prueba discriminante
→ derivada

ejecución completa con comportamiento existente
→ no disponible

causa
→ ausencia de un S+ limpio

intervención experimental mínima
→ derivada en este documento

feature de producto
→ NO DERIVADA

nueva Realization
→ NO DERIVADA

Architecture
→ NO DERIVADA
```

---

# 1. Propósito

Este documento deriva la intervención experimental mínima necesaria para ejecutar la prueba discriminante definida en:

```text id="6qmstn"
docs/08-project/18-DERIVACION_PRUEBA_DISCRIMINANTE_LOCALIZACION_SELECTIVA_POST_V1.md
```

La prueba anterior requiere contrastar:

```text id="4vzqsz"
S+
localización selectiva posible
```

con:

```text id="5otmqq"
S−
localización selectiva no disponible
```

y:

```text id="jvsiz5"
S−R
candidato entregado directamente
para controlar reconocimiento
y reutilización
```

El análisis del comportamiento ya existente mostró que:

- existen materiales suficientes;
- existen patrones de persistencia e interrupción reutilizables;
- existen capacidades de reconocimiento y reutilización ya demostradas;
- puede aproximarse un brazo negativo;
- no se ha identificado un comportamiento existente que proporcione un `S+` limpio sin caer en preselección del objetivo, navegación trivial o ayuda externa.

Por tanto, se justifica derivar una intervención experimental mínima.

Este documento no deriva todavía una feature de producto ni una nueva Realization.

---

# 2. Pregunta de derivación

La cuestión que debe resolver este documento es:

> **¿Cuál es la modificación mínima necesaria para representar `S+` y ejecutar `PD-01..PD-04`, manteniendo constantes las capacidades ya existentes y sin convertir el experimento en una implementación anticipada de `CPV1-01` como capacidad aceptada del producto?**

---

# 3. Principio rector

La intervención debe introducir únicamente:

```text id="81sszm"
una posibilidad experimental
de reducir una pluralidad conservada
hasta un candidato suficientemente reconocible
```

y nada más.

La regla principal es:

> **Todo comportamiento añadido que no sea necesario para ejecutar discriminantemente `S+ / S− / S−R` queda fuera de la intervención mínima.**

---

# 4. Separación entre soporte experimental y capacidad de producto

Debe mantenerse explícitamente:

```text id="s84jge"
soporte experimental
≠
feature de producto
```

y:

```text id="b8ot0m"
soporte experimental
≠
Realization
```

y:

```text id="y0fe34"
soporte experimental
≠
Architecture
```

La intervención tiene autoridad únicamente para:

```text id="ty7pqr"
representar una variable causal
```

y permitir observar:

```text id="bnhjob"
qué cambia cuando existe
o no existe
una posibilidad efectiva
de localización selectiva posterior
```

No establece todavía cómo debe comportarse el producto final.

---

# 5. Elementos experimentales reutilizados

La intervención no necesita introducir nuevamente capacidades ya disponibles.

Puede reutilizar:

```text id="h8h0p8"
persistencia local
```

cuando resulte suficiente.

Puede reutilizar:

```text id="s4f47y"
interrupción / remount
```

como patrón ya ejercitado.

Puede reutilizar:

```text id="irv1fb"
pluralidad de materiales
```

como condición experimental.

Puede reutilizar:

```text id="8fsvor"
reconocimiento humano
```

y:

```text id="qz0p07"
reutilización pertinente
```

como capacidades ya demostradas.

La intervención no debe volver a derivarlas como capacidades nuevas.

---

# 6. Elementos mínimos de la prueba

Se mantienen los cuatro candidatos experimentales:

```text id="xbab41"
A
B
C
D
```

y una necesidad posterior:

```text id="rn3itb"
P
```

La representación abstracta continúa siendo:

```text id="jv0ly4"
A → cuestión α

B → cuestión β

C → argumento γ

D → cuestión δ
```

La necesidad `P` debe permitir formular una cuestión funcional equivalente a:

> volver a considerar el material anterior en el que aparecía el argumento γ.

Sin proporcionar:

```text id="0a90r3"
C
```

como identificador del objetivo.

---

# 7. Estado base común

Antes de separar `S+` y `S−` debe existir un estado común:

```text id="9yavc8"
A, B, C y D
→ conservados

A, B, C y D
→ suficientemente distinguibles una vez accesibles

ninguno
→ abierto como objeto activo

ninguno
→ seleccionado

ninguno
→ marcado como pertinente

P
→ formulada funcionalmente

C
→ no identificado explícitamente por P
```

Este estado constituye la base común de ambos brazos.

---

# 8. Variable experimental

La única variable que debe diferenciar `S+` de `S−` es:

```text id="z3lj60"
posibilidad efectiva
de inspeccionar/reducir
la pluralidad conservada
```

En términos operacionales:

```text id="5jh3n9"
S+
→ IE-03 presente

S−
→ IE-03 ausente
```

Todo lo demás debe mantenerse constante.

---

# 9. IE-01 — Conservación de candidatos

## IE-01

> **Mantener A, B, C y D conservados durante la separación y la actividad posterior, sin que ninguno quede automáticamente convertido en objetivo activo.**

IE-01 no constituye una nueva capacidad.

Es soporte experimental necesario para que exista una pluralidad sobre la que ejecutar la prueba.

Debe garantizar:

```text id="2t9hfd"
A existe

B existe

C existe

D existe
```

tanto en `S+` como en `S−`.

---

# 10. IE-02 — Presentación de necesidad funcional

## IE-02

> **Presentar la necesidad posterior P de forma funcional, sin identificar directamente C ni proporcionar una ruta, enlace o instrucción que sustituya la localización evaluada.**

IE-02 debe permitir:

```text id="32p61g"
persona comprende
qué tipo de material necesita considerar
```

sin convertir la consigna en:

```text id="u1bf46"
"abre C"
```

o equivalente.

---

# 11. IE-03 — Inspección experimental de candidatos

## IE-03

> **Sólo en S+, permitir que la persona solicite bajo demanda la inspección de la pluralidad conservada mediante representaciones suficientemente discriminantes de A, B, C y D, sin preseleccionar C ni declarar cuál es el candidato pertinente.**

IE-03 constituye la única variable nueva de interés experimental.

Su función es permitir la transición:

```text id="fwoypq"
pluralidad conservada
↓
actuación humana
↓
candidatos inspeccionables
↓
reducción de pluralidad
```

IE-03 no debe:

```text id="p6hvip"
seleccionar C automáticamente

ordenar C como "mejor resultado"

marcar C como pertinente

ocultar los demás candidatos
de manera que C quede determinado

resolver P por la persona
```

---

# 12. Forma mínima de IE-03

La operación puede adoptar una forma conceptualmente equivalente a:

```text id="zvfo5m"
[Examinar materiales previos]
```

Tras la actuación:

```text id="u2yi55"
A → representación mínima discriminante

B → representación mínima discriminante

C → representación mínima discriminante

D → representación mínima discriminante
```

La persona puede entonces:

```text id="2q5qxd"
inspeccionar
↓
comparar
↓
seleccionar candidato
```

La representación concreta no queda prescrita.

---

# 13. IE-03 no debe convertirse en búsqueda general

La intervención no debe introducir:

```text id="0ktk1o"
campo de búsqueda general

indexación

ranking

full-text search

búsqueda semántica

sinónimos

persistencia de consultas
```

porque esas funciones abrirían preguntas que no son necesarias para ejecutar la prueba.

La suficiencia de IE-03 depende únicamente de:

```text id="ysfmac"
hacer inspeccionable una pluralidad
cuando antes no estaba inmediatamente disponible
```

---

# 14. IE-04 — Selección humana de candidato

## IE-04

> **Después de inspeccionar los candidatos en S+, permitir que la persona seleccione uno de ellos como candidato a considerar para P, sin que la plataforma convierta esa selección en una declaración automática de pertinencia.**

IE-04 debe preservar:

```text id="xfyziz"
persona selecciona
```

y no:

```text id="41wstu"
runtime decide pertinencia
```

La plataforma puede registrar:

```text id="gq5rpk"
candidato seleccionado
```

pero no inferir normativamente:

```text id="zqx4sm"
candidato pertinente
```

---

# 15. IE-05 — Entrega directa de C en control posterior

## IE-05

> **En S−R, permitir proporcionar directamente C después de haber constatado la ausencia de localización suficiente en S−, con el único fin de controlar reconocimiento y reutilización.**

IE-05 no participa en la demostración de localización.

Su finalidad es aislar causalmente la variable.

La trayectoria es:

```text id="luxkva"
S−
↓
localización no disponible
↓
IE-05
↓
C entregado directamente
↓
persona reconoce C
↓
persona puede reutilizar C
```

---

# 16. Resumen de comportamientos IE

La intervención queda limitada a:

```text id="evzjo2"
IE-01
mantener A, B, C y D conservados

IE-02
presentar P sin identificar C

IE-03
sólo en S+:
permitir inspeccionar candidatos

IE-04
permitir selección humana
después de inspección

IE-05
en S−R:
entregar C directamente
como control
```

Sólo:

```text id="5rl0qr"
IE-03
```

constituye la variable causal nueva.

---

# 17. Estado S+ resultante

Con la intervención:

```text id="oyw2bk"
S+

A, B, C, D conservados
+
P
+
IE-03
+
IE-04
```

debe permitir:

```text id="gwt6vi"
persona solicita inspección
↓
pluralidad se vuelve inspeccionable
↓
persona examina candidatos
↓
persona reduce pluralidad
↓
persona selecciona C
↓
persona puede decidir
si C responde a P
```

---

# 18. Estado S− resultante

El brazo negativo debe conservar:

```text id="9hlumo"
A, B, C, D

P

persistencia

contenido

reconocibilidad

reutilización potencial
```

pero excluir:

```text id="dgdemg"
IE-03
```

Por tanto:

```text id="xhlt5f"
S−

A, B, C, D conservados
+
P
-
posibilidad suficiente
de inspección/reducción
```

---

# 19. Estado S−R resultante

Después de S−:

```text id="ok7zsq"
S−R

S−
+
IE-05
```

debe permitir:

```text id="wtzrx9"
C entregado directamente
↓
reconocimiento humano
↓
reutilización posible
```

sin introducir retrospectivamente localización.

---

# 20. Invariantes entre S+ y S−

Deben mantenerse idénticos:

```text id="s31rlh"
A

B

C

D

contenido de A-D

necesidad P

mecanismo de persistencia

separación temporal/contextual

persona evaluadora

reconocibilidad de C

posibilidad de reutilizar C
una vez disponible
```

Sólo puede variar:

```text id="sbcgtw"
IE-03
```

---

# 21. Invariante de identidad de C

C debe permanecer exactamente igual entre:

```text id="r66aav"
S+

S−

S−R
```

La prueba no será causalmente interpretable si C cambia de:

- contenido;
- identificador funcional;
- representación relevante;
- capacidad de reutilización.

---

# 22. T-IE-01 — Ausencia de preselección

## T-IE-01

> **En S+, antes de activar IE-03, C no aparece abierto, seleccionado, marcado como pertinente ni proporcionado como respuesta directa a P.**

Este test protege contra:

```text id="owgf4n"
objetivo preseleccionado
```

---

# 23. T-IE-02 — Disponibilidad de inspección en S+

## T-IE-02

> **En S+, existe una actuación observable mediante la cual la persona puede hacer inspeccionable la pluralidad conservada.**

El test debe verificar:

```text id="hk7yzo"
IE-03 disponible
```

y que su activación cambia el estado observable.

---

# 24. T-IE-03 — Ausencia de selección automática

## T-IE-03

> **La activación de IE-03 no selecciona automáticamente C ni declara ningún candidato como pertinente.**

Debe poder observarse:

```text id="wcbjdo"
IE-03 activada
↓
varios candidatos siguen disponibles
↓
decisión humana todavía abierta
```

---

# 25. T-IE-04 — Ausencia de IE-03 en S−

## T-IE-04

> **S− conserva los mismos candidatos y la misma necesidad P, pero no ofrece la actuación experimental IE-03 ni otra actuación funcionalmente equivalente que permita reducir la pluralidad.**

Este test protege la pureza del brazo negativo.

---

# 26. T-IE-05 — Entrega directa en S−R

## T-IE-05

> **Después de S−, S−R permite proporcionar directamente C como control posterior, sin modificar previamente A, B, C, D ni P.**

La entrega debe ser explícitamente control experimental.

No debe reinterpretarse como localización.

---

# 27. T-IE-06 — Identidad de C entre estados

## T-IE-06

> **C conserva el mismo contenido y la misma capacidad de reconocimiento/reutilización relevante entre S+, S− y S−R.**

Este test impide atribuir la diferencia observada a una modificación del material.

---

# 28. Resumen de tests automáticos

La cobertura mínima esperada es:

```text id="gtkruh"
T-IE-01
C no preseleccionado en S+

T-IE-02
IE-03 disponible y observable en S+

T-IE-03
IE-03 no selecciona automáticamente C

T-IE-04
S− conserva fixtures pero no IE-03

T-IE-05
S−R permite entregar directamente C

T-IE-06
C permanece equivalente
entre S+, S− y S−R
```

Estos tests verifican condiciones experimentales.

No sustituyen la evaluación humana.

---

# 29. Qué no deben afirmar los tests

Los tests no deben codificar:

```text id="qzvrpe"
C es pertinente
```

ni:

```text id="bwo3lq"
C es el candidato correcto
```

ni:

```text id="nzvtt7"
la persona debería elegir C
```

Pueden comprobar únicamente:

```text id="2h8r5b"
C existe

C puede inspeccionarse

C puede seleccionarse

C no está preseleccionado

C puede entregarse directamente
en S−R
```

La pertinencia permanece como evaluación humana.

---

# 30. Relación entre T-IE y PD

Los tests `T-IE-01..T-IE-06` no sustituyen:

```text id="55kyj7"
PD-01
PD-02
PD-03
PD-04
```

La relación es:

```text id="99wtvu"
T-IE
→ garantiza condiciones
del experimento

PD
→ evalúa el comportamiento
humano discriminante
```

Por tanto:

```text id="60xtcr"
tests verdes
≠
prueba humana concluida
```

---

# 31. Regla de suficiencia experimental

Se fija la siguiente regla:

> **La intervención experimental es suficientemente mínima si permite ejecutar discriminantemente `S+`, `S−` y `S−R`, satisfacer las condiciones estructurales verificadas por `T-IE-01..T-IE-06` y evaluar `PD-01..PD-04`, sin introducir ningún comportamiento adicional necesario para responder una cuestión distinta.**

---

# 32. Regla reductiva

Toda propuesta de comportamiento adicional debe superar este test:

> **Si el comportamiento puede eliminarse y la prueba `S+ / S− / S−R` sigue siendo ejecutable y discriminante, ese comportamiento no pertenece a la intervención mínima.**

Formalmente:

```text id="9hrjjh"
comportamiento X
↓
eliminar X
↓
PD-01..PD-04 siguen evaluables
```

entonces:

```text id="q2xv7r"
X
→ FUERA DE ALCANCE
```

---

# 33. Consecuencia de la regla reductiva

Quedan fuera, salvo demostración posterior de necesidad:

```text id="g34x1c"
buscador general

campo de búsqueda libre

full-text search

búsqueda semántica

ranking

indexación

tags

carpetas

colecciones

favoritos

grafo

navegación general por relaciones

historial

versionado

provenance general

backend

base de datos nueva

store general

dominio nuevo
```

---

# 34. Persistencia

No se deriva persistencia nueva.

Si un mecanismo existente permite mantener:

```text id="qv0ktl"
A
B
C
D
```

durante la separación experimental, debe reutilizarse.

La persistencia funciona aquí como:

```text id="v5eb27"
infraestructura
```

y no como:

```text id="4xzqgo"
variable experimental
```

---

# 35. Separación temporal o contextual

No se deriva un nuevo modelo de sesión.

Puede reutilizarse un patrón ya disponible de:

```text id="rwjf1k"
remount
```

o:

```text id="eyxlo0"
interrupción efectiva
```

si elimina suficientemente la disponibilidad inmediata.

La prueba no debe ampliar su alcance para investigar interrupción.

---

# 36. Modelo de datos

No se deriva un modelo de dominio nuevo.

Puede utilizarse una estructura experimental mínima equivalente a:

```text id="amwbrn"
Candidate {
  id
  cue
  content
}
```

si resulta suficiente.

Esta representación no constituye:

```text id="sgx9c9"
entidad de dominio
```

ni prescribe nombres futuros del producto.

---

# 37. Ubicación conceptual del código

La implementación futura, si se autoriza, debe conservar carácter experimental.

No debe ubicarse ni nombrarse de forma que presuponga:

```text id="m7b4hu"
feature/search

domain/library

workspace

knowledge graph
```

o equivalentes.

La ubicación y nomenclatura concretas deberán preservar explícitamente que se trata de:

```text id="8jgik3"
experimento
```

o soporte de prueba discriminante.

---

# 38. Prohibición de generalización silenciosa

El código no debe ampliar implícitamente IE-03 hacia:

```text id="3guvvk"
buscar cualquier contenido

consultar arbitrariamente todo el repositorio

clasificar automáticamente

recomendar candidatos

ordenar por relevancia

recordar consultas

crear una API general de recuperación
```

Cualquier generalización deberá derivarse posteriormente de forma explícita.

---

# 39. Condición de aceptación del soporte experimental

El soporte podrá considerarse suficientemente implementado únicamente si:

```text id="h9f8gb"
IE-01..IE-05
→ presentes en el alcance requerido

T-IE-01..T-IE-06
→ verdes

S+
→ ejecutable

S−
→ ejecutable

S−R
→ ejecutable

PD-01..PD-04
→ evaluables humanamente
```

No se exige todavía que:

```text id="f5yq60"
PD-01..PD-04
→ satisfechos
```

porque eso pertenece a la ejecución de la prueba, no a la construcción de su soporte.

---

# 40. Qué demostraría el soporte y qué no

Si la intervención se implementa correctamente, demostrará únicamente:

> **que existe un entorno controlado suficiente para contrastar causalmente la presencia y ausencia de una posibilidad de localización selectiva posterior.**

No demostrará todavía:

```text id="wc968i"
CPV1-01 satisfecha en producto
```

ni:

```text id="6jyken"
feature necesaria
```

ni:

```text id="1x42oh"
arquitectura validada
```

ni:

```text id="jv4x70"
V2 derivada
```

---

# 41. Condición para abrir implementación experimental

Después de consolidar este documento podrá justificarse código únicamente si la implementación propuesta:

1. realiza `IE-01..IE-05`;
2. no añade comportamientos fuera de esos IE salvo infraestructura ya existente;
3. permite verificar `T-IE-01..T-IE-06`;
4. mantiene una única diferencia causal entre S+ y S−;
5. no introduce una feature general de organización o búsqueda;
6. no presupone una nueva Architecture.

---

# 42. Condición para derivar posteriormente una Realization

Incluso después de ejecutar el experimento:

```text id="sb92gh"
experimento positivo
≠
Realization automáticamente derivada
```

Una Realization sólo podrá evaluarse si la evidencia resultante muestra que:

```text id="a3mg8g"
CPV1-01
→ constituye un hueco real

y

su satisfacción
→ está estratégicamente justificada
```

dentro del objetivo post-V1 ya delimitado.

---

# 43. Estado resultante

```text id="z225rz"
PRUEBA DISCRIMINANTE
→ derivada

EJECUCIÓN CON COMPORTAMIENTO EXISTENTE
→ insuficiente

INTERVENCIÓN EXPERIMENTAL MÍNIMA
→ DERIVADA

IE-01
→ definido

IE-02
→ definido

IE-03
→ definido
→ única variable causal nueva

IE-04
→ definido

IE-05
→ definido

T-IE-01
→ definido

T-IE-02
→ definido

T-IE-03
→ definido

T-IE-04
→ definido

T-IE-05
→ definido

T-IE-06
→ definido

REGLA DE SUFICIENCIA
→ definida

REGLA REDUCTIVA
→ definida

FEATURE DE PRODUCTO
→ NO DERIVADA

NUEVA REALIZATION
→ NO DERIVADA

ARCHITECTURE
→ NO DERIVADA
```

---

# 44. Conclusión

La intervención experimental necesaria puede reducirse a una diferencia extremadamente pequeña.

No se necesita implementar todavía:

```text id="jjf5zc"
búsqueda

organización general

clasificación

Library

Workspace

grafo

backend
```

La única novedad causal es:

> **hacer inspeccionable bajo demanda una pluralidad conservada de candidatos en el brazo positivo, sin preseleccionar ni declarar cuál es pertinente.**

Esta novedad queda formalizada como:

```text id="0l4z7v"
IE-03
```

y se controla mediante:

```text id="j3dfjf"
S+
→ IE-03 presente

S−
→ IE-03 ausente

S−R
→ C entregado directamente
```

Todo comportamiento adicional deberá justificarse independientemente.

---

# 45. Próxima actuación

La siguiente actuación justificable es:

> **comprobar mecánicamente este documento, consolidarlo y, sólo después, derivar el cambio técnico mínimo necesario para implementar `IE-01..IE-05` y `T-IE-01..T-IE-06`, sin ampliar el alcance experimental.**
