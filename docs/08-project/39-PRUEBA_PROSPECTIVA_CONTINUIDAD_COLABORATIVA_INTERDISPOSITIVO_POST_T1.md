# Prueba prospectiva de continuidad colaborativa interdispositivo post-T1

## Estado

**Cerrado en el alcance de la prueba prospectiva `PROS-MU-Q04`.**

Resultado principal:

```text
PROS-MU-Q04
→ D — diferencia positiva observada

F-PROS-MU-02
→ diferencia humana independiente demostrada

GATE-NH-01
→ SUPERADO
```

Este resultado no deriva todavía una solución técnica concreta ni prescribe backend, cuentas, autenticación, sincronización automática, red o arquitectura distribuida.

---

# 1. Propósito

Este documento registra y cierra la prueba prospectiva:

```text
PROS-MU-Q04
— continuidad del mismo trabajo entre
  dos personas reales y dos dispositivos distintos
```

La prueba se deriva después de:

```text
PROS-MU-Q01
PROS-MU-Q02
PROS-MU-Q03
PROS-MU-Q03-R
```

documentadas en:

```text
docs/08-project/38-PRUEBA_PROSPECTIVA_PARTICIPACION_HUMANA_REAL_POST_T1.md
```

`PROS-MU-Q03-R` había demostrado suficiencia en el caso ejercido cuando dos personas reales participaban sucesivamente sobre el mismo estado disponible en un único dispositivo.

La cuestión abierta posterior era si esa suficiencia se conservaba cuando la segunda persona debía continuar desde un dispositivo distinto.

---

# 2. Antecedente inmediato

La secuencia prospectiva anterior produjo:

```text
F-PROS-MU-01
— orientación insuficiente de la actuación de B
```

Esta pérdida fue reducida a una aplicación local de una capacidad ya existente de orientación situacional.

Se realizó una corrección mínima en:

```text
CollaborationExperience
```

haciendo explícito para B:

```text
Qué puedes hacer ahora
```

y:

```text
Continúa el trabajo a partir del resultado compartido
y la aportación de A.
```

La repetición controlada:

```text
PROS-MU-Q03-R
```

mostró que B podía:

```text
reconocer la situación
↓
comprender qué podía hacer
↓
responder al resultado compartido
y a la aportación de A
```

sin explicación externa.

Por tanto:

```text
PROS-MU-Q03-R
→ E — suficiencia en el caso ejercido
```

y:

```text
F-PROS-MU-01
→ absorbida por capacidad ya existente
```

No quedó demostrado entonces ningún nuevo horizonte.

---

# 3. Nueva frontera ejercida

La siguiente frontera se formuló sin presuponer:

```text
backend
cuentas
autenticación
multiusuario general
red
sincronización
colaboración en tiempo real
```

La única modificación relevante respecto de `PROS-MU-Q03-R` sería:

```text
dispositivo A
≠
dispositivo B
```

manteniendo en lo posible:

```text
dos personas reales
misma Realization
misma trayectoria pretendida
participación sucesiva
interrupción efectiva
ausencia de instrucciones externas a B
```

La pregunta prospectiva quedó formulada como:

> ¿Puede una segunda persona continuar suficientemente el mismo trabajo iniciado por otra cuando ambas actúan en dispositivos distintos y ya no comparten el mismo estado local de la aplicación?

---

# 4. Diseño de PROS-MU-Q04

La prueba se dividió en las siguientes dimensiones:

```text
R1 — Recepción

R2 — Reconocimiento

R3 — Orientación

R4 — Continuación

R5 — Retorno / continuidad posterior
```

## R1 — Recepción

Se observaría si B dispone materialmente del resultado compartido y de la aportación previa de A.

## R2 — Reconocimiento

Si el estado anterior está disponible, se observaría si B puede reconocer qué trabajo se ha realizado previamente.

## R3 — Orientación

Se observaría si B comprende qué puede hacer a continuación sin instrucción externa.

## R4 — Continuación

Se observaría si B puede producir una aportación pertinente a la trayectoria anterior.

## R5 — Retorno / continuidad posterior

Se observaría si la aportación de B puede pasar a formar parte reconocible de la misma trayectoria.

---

# 5. Condición de parada

Se fijó previamente la siguiente regla:

```text
si una dimensión anterior falla
↓
no se interpretarán las posteriores
como pérdidas independientes ya demostradas
```

En particular:

```text
si R1 falla
↓
R2–R5 no deberán ejercerse artificialmente
mediante información compensatoria externa
```

Esta condición evita introducir como parte de la prueba precisamente el mecanismo cuya ausencia se pretende observar.

---

# 6. Control contra contaminación

Durante `PROS-MU-Q04` no debía proporcionarse a B:

```text
explicación verbal de A;
captura de pantalla;
copia del contenido;
mensaje manual;
archivo;
copia de localStorage;
instrucción específica sobre qué responder;
otro medio externo equivalente.
```

Cualquiera de estos mecanismos podría constituir posteriormente una solución candidata de transferencia.

No debía introducirse durante esta prueba porque habría modificado la pregunta experimental.

---

# 7. Configuración real utilizada

La prueba utilizó:

```text
Persona A
→ portátil HP EliteBook
→ Ubuntu
→ navegador del dispositivo A

Persona B
→ teléfono Android
→ navegador del dispositivo B
```

Ambos dispositivos accedieron a la misma aplicación servida mediante Vite desde la red local.

La aplicación estuvo disponible en:

```text
dispositivo A
→ localhost:5173

dispositivo B
→ dirección de red local del dispositivo A:5173
```

La accesibilidad desde el segundo dispositivo fue verificada antes de realizar la actuación de A.

Por tanto, la prueba no evaluaba:

```text
si B podía abrir la aplicación
```

sino:

```text
si B podía continuar
el estado de trabajo previamente constituido por A.
```

---

# 8. Estado inicial del dispositivo B

Antes de constituirse el trabajo de Q04 en el dispositivo A, el teléfono de B abrió correctamente:

```text
?realization=collaboration
```

y mostró el estado inicial vacío de:

```text
Colaboración mínima
```

Esto confirmó simultáneamente:

```text
la aplicación era accesible desde B
```

y:

```text
el navegador de B no estaba reutilizando
el estado local previamente almacenado por A.
```

No se introdujo ningún mecanismo adicional de transferencia.

---

# 9. Constitución del trabajo por A

Para `PROS-MU-Q04` se utilizó un contenido nuevo.

Resultado compartido:

```text
Propuesta:
Cuando una investigación modifica una conclusión anterior,
debería conservarse información suficiente para que otra persona
pueda comprender qué cambio se produjo y por qué.
```

A añadió:

```text
También debería saberse quién modificó la conclusión
y qué relación tiene con el proyecto.
```

El estado observado en el dispositivo A quedó constituido como:

```text
sharedResult
→ Propuesta:
  Cuando una investigación modifica una conclusión anterior,
  debería conservarse información suficiente para que otra persona
  pueda comprender qué cambio se produjo y por qué.

firstContribution
→ participant = A
→ content =
  También debería saberse quién modificó la conclusión
  y qué relación tiene con el proyecto.

secondContribution
→ null
```

Esto estableció el antecedente que B debía intentar continuar.

Después de esta actuación A dejó de intervenir.

---

# 10. Observación de B

B abrió o recargó en el teléfono:

```text
?realization=collaboration
```

sin recibir información adicional sobre el contenido creado por A.

La pantalla mostró únicamente el estado inicial:

```text
Resultado compartido inicial
```

con el campo vacío.

No aparecieron:

```text
el resultado compartido constituido por A;
la aportación de A;
el contexto previo de la trayectoria;
la orientación de continuidad correspondiente al estado posterior a A.
```

Por tanto:

```text
R1 — RECEPCIÓN
→ FALLA
```

---

# 11. Consecuencia de la condición de parada

Al fallar `R1`, no se intentó compensar la ausencia mediante una explicación externa.

Por tanto:

```text
R2 — Reconocimiento
→ no ejercido independientemente

R3 — Orientación
→ no ejercido independientemente

R4 — Continuación
→ no ejercido como dimensión independiente

R5 — Retorno / continuidad posterior
→ no ejercido
```

Esto no significa que estas dimensiones hayan sido refutadas independientemente.

Significa que la trayectoria necesaria para poder ejercerlas quedó interrumpida anteriormente.

La pérdida observada se localiza en:

```text
R1
→ disponibilidad del antecedente colaborativo
```

---

# 12. Debrief humano de B

Sin mostrarle el dispositivo A ni transmitirle el contenido anterior, se preguntó a B:

> 1. Viendo solamente esa pantalla del teléfono, ¿puedes saber cuál era el trabajo que había iniciado A?

Respuesta:

```text
No.
```

Segunda pregunta:

> 2. ¿Podrías continuar ese mismo trabajo desde la aplicación sin que alguien te transmita información adicional?

Respuesta:

```text
No.
```

Tercera pregunta:

> 3. ¿Qué información te faltaría, en tus propias palabras, para poder continuar?

Respuesta:

```text
Falta la información que indique en qué consiste el proyecto
y las instrucciones necesarias para poder utilizarlo.
```

---

# 13. Interpretación del debrief

Las dos primeras respuestas confirman directamente una pérdida humana observable:

```text
B no sabe cuál era el trabajo previo
```

y:

```text
B no puede continuar ese mismo trabajo
sin recibir información adicional.
```

La tercera respuesta contiene dos elementos:

```text
información sobre el trabajo/proyecto previo;
instrucciones para poder utilizarlo.
```

No se deriva de ella una segunda pérdida independiente de orientación general.

La razón es que B ha accedido a un estado inicial vacío y no al estado posterior a la actuación de A.

Por tanto, la insuficiencia de orientación observada en este punto podría depender de la ausencia anterior del propio antecedente colaborativo.

No debe aislarse todavía como una pérdida diferente.

---

# 14. Formulación de F-PROS-MU-02

Se formula:

```text
F-PROS-MU-02
— Indisponibilidad del estado colaborativo necesario
  para la continuación entre instancias reales distintas
```

## Actuación humana afectada

```text
B intenta continuar
la misma trayectoria iniciada por A.
```

## Pérdida observada

```text
B no dispone del resultado compartido
ni de la aportación previa de A
desde el contexto real en el que debe continuar.
```

## Consecuencia humana observada

```text
B no puede reconocer
cuál era el trabajo anterior

y

B no puede continuar ese mismo trabajo
sin recibir información externa adicional.
```

---

# 15. Clasificación de PROS-MU-Q04

Las categorías previstas eran:

```text
E
→ suficiencia en el caso ejercido

D
→ diferencia positiva observable

N
→ prueba contaminada o insuficiente
```

El resultado es:

```text
PROS-MU-Q04
→ D — DIFERENCIA POSITIVA
```

No corresponde `E` porque la continuidad pretendida falla antes de que B pueda ejercerla.

No corresponde `N` porque:

```text
la aplicación fue accesible;
A constituyó un estado real;
B utilizó un dispositivo real distinto;
no se transfirió manualmente el antecedente;
no se proporcionó instrucción compensatoria;
la pérdida fue observable;
B confirmó humanamente su efecto.
```

---

# 16. Distinción entre causa técnica y pérdida humana

La implementación actual de:

```text
CollaborationExperience
```

persiste:

```text
CollaborativeState
```

mediante:

```text
useLocalStorage
```

con:

```text
sharedResult
firstContribution
secondContribution
```

El almacenamiento local de cada navegador constituye una explicación técnica suficiente de por qué el segundo dispositivo no recibió ese estado en este caso.

Sin embargo:

```text
localStorage separado
```

no constituye por sí mismo la formulación de la pérdida.

La pérdida relevante es:

```text
B no dispone del antecedente
que necesita para continuar
la misma trayectoria humana.
```

Por tanto:

```text
mecanismo técnico observado
≠
pérdida humana formulada
```

---

# 17. Reducción contra P4 — colaboración mínima

`P4` ya había realizado mínimamente una trayectoria del tipo:

```text
R1
↓
A1
↓
B1
```

`PROS-MU-Q03-R` demostró además que, cuando el estado anterior está disponible, B puede comprender suficientemente qué debe hacer sin instrucción externa adicional.

Por tanto, `F-PROS-MU-02` no puede reducirse a:

```text
falta de colaboración mínima
```

ni a:

```text
falta de orientación situacional
```

porque esas funciones habían resultado suficientes en el caso anterior bajo disponibilidad del mismo estado.

La nueva variable discriminante es:

```text
dispositivo A
≠
dispositivo B
```

y con ella:

```text
estado local disponible para A
≠
estado disponible para B
```

---

# 18. Reducción contra P5 — intercambio / difusión

P5 había establecido la diferencia:

```text
persistencia local
≠
intercambio entre instancias
```

mediante:

```text
OriginState
↓
ExchangeArtifact X1
↓
DestinationState
```

La Realization:

```text
R-P5-X1
```

fue cerrada como:

```text
REALIZADA MÍNIMAMENTE
```

y:

```text
CR-P5-01
→ SATISFECHA
```

El artefacto utilizado fue:

```text
ExchangeArtifact
→ id
→ sourcePublishedId
→ content
```

y el estado destino:

```text
ReceivedState
→ sourceArtifactId
→ content
```

La implementación actual confirma:

```text
originPublished.content
↓
exchangeArtifact.content
↓
destinationReceived.content
```

---

# 19. Alcance negativo de P5

P5 había excluido expresamente:

```text
dos dispositivos reales
dos usuarios reales
Internet
servidor
backend
API
cuentas
login
mensajería
sincronización
red
WebSocket
destinatarios reales
```

Además, su propia derivación establecía:

```text
Tampoco deberá integrar todavía dentro de X1
la trayectoria colaborativa de P4.
```

y:

```text
Para P5 mínimo basta con transferir
un único contenido publicado.
```

Por tanto, P5 realiza:

```text
transferencia funcional mínima de contenido publicado
```

pero no demuestra:

```text
continuidad de un estado colaborativo
entre personas reales
en dispositivos reales distintos.
```

---

# 20. Diferencia entre P5 y F-PROS-MU-02

La diferencia discriminante queda formulada como:

```text
P5:
hacer disponible un contenido publicado
a otra instancia funcional

≠

Q04:
hacer disponible a otra persona,
desde otra instancia real,
el estado colaborativo necesario
para continuar la misma trayectoria.
```

También:

```text
transferir P1.content
≠
hacer disponible:

sharedResult
+
firstContribution
+
posición de continuidad de B
```

Por tanto:

```text
F-PROS-MU-02
→ NO REDUCIDA A P5
```

---

# 21. Contraste con la integración posterior de P1–P5

La auditoría posterior a P5 identificó, entre otras, las discontinuidades:

```text
G-INT-01
— pérdida de continuidad identificativa al entrar en P4

G-INT-04
— duplicación/desconexión del estado publicado
  utilizado para intercambio
```

La integración posterior resolvió esas discontinuidades reutilizando relaciones ya existentes y no derivó una capacidad funcional nueva.

El cierre documental correspondiente estableció que:

```text
G-INT-01..04
→ RESUELTAS
```

pero no estableció:

```text
transferencia del estado colaborativo completo
entre dos dispositivos reales
```

---

# 22. Comprobación de implementación

La implementación actual de:

```text
ExchangeExperience
```

contiene:

```text
type ExchangeArtifact = {
  id: string;
  sourcePublishedId: string;
  content: string;
};
```

y:

```text
type ReceivedState = {
  sourceArtifactId: string;
  content: string;
};
```

Al generarse `X1`:

```text
content = originPublished.content
```

y al recibirse:

```text
content = exchangeArtifact.content
```

No aparecen en el intercambio:

```text
firstContribution
secondContribution
CollaborativeState
```

La implementación actual de:

```text
CollaborationExperience
```

mantiene separadamente:

```text
sharedResult
firstContribution
secondContribution
```

persistidos en el almacenamiento local de su propia instancia.

---

# 23. Comprobación de IntegratedExperience

La implementación actual de:

```text
src/realizations/integrated/IntegratedExperience.tsx
```

trabaja con:

```text
SituatedResult
→ previous
→ current
```

y operaciones de:

```text
primer trabajo
evolución
suficiencia
reutilización
```

No contiene una trayectoria que transporte:

```text
CollaborativeState
```

hacia:

```text
ExchangeArtifact
```

ni demuestra:

```text
A en dispositivo 1
↓
estado colaborativo transferido
↓
B en dispositivo 2
↓
continuación
```

Por tanto, la implementación disponible no absorbe `F-PROS-MU-02`.

---

# 24. Resultado reductivo

Después del contraste con:

```text
P4
P5
integración post-P5
implementación actual
```

el resultado es:

```text
F-PROS-MU-02
→ no reducible a orientación situacional;

F-PROS-MU-02
→ no reducible a colaboración mínima ya realizada;

F-PROS-MU-02
→ no reducible al intercambio mínimo de contenido de P5;

F-PROS-MU-02
→ no absorbida por la integración existente.
```

Por tanto:

```text
F-PROS-MU-02
→ DIFERENCIA HUMANA INDEPENDIENTE DEMOSTRADA
```

dentro del alcance ejercido.

---

# 25. Evaluación de GATE-NH-01

El criterio de reapertura estratégica exigía:

```text
1. caso concreto;

2. actuación humana identificable;

3. pérdida observable y falsable;

4. indicio razonable de insuficiencia
   de las capacidades actuales;

5. posibilidad de discriminación no circular
   respecto de las capacidades ya realizadas.
```

## 25.1 Caso concreto

```text
✓ SATISFECHO
```

Caso ejercido:

```text
dos personas reales
+
dos dispositivos reales
+
misma trayectoria pretendida
+
participación sucesiva
```

## 25.2 Actuación humana identificable

```text
✓ SATISFECHO
```

Actuación:

```text
B intenta continuar
el trabajo iniciado previamente por A.
```

## 25.3 Pérdida observable y falsable

```text
✓ SATISFECHO
```

Se observó:

```text
B no recibe el resultado compartido
ni la aportación de A.
```

B confirmó:

```text
no sabe cuál era el trabajo previo
```

y:

```text
no puede continuar ese mismo trabajo
sin información adicional.
```

## 25.4 Indicio razonable de insuficiencia actual

```text
✓ SATISFECHO
```

La Realization colaborativa conserva su estado únicamente dentro de la instancia local que lo constituyó.

El segundo dispositivo accede correctamente a la aplicación pero no al antecedente colaborativo necesario.

## 25.5 Discriminación no circular

```text
✓ SATISFECHO
```

La diferencia no queda absorbida por:

```text
orientación situacional;
P4 — colaboración mínima;
P5 — intercambio mínimo;
integración posterior existente.
```

La pérdida sólo aparece al ejercer una nueva condición material:

```text
continuación del mismo trabajo
desde una instancia real distinta.
```

---

# 26. Resultado de GATE-NH-01

Por tanto:

```text
GATE-NH-01
→ SUPERADO
```

Este resultado modifica el estado estratégico posterior a la consolidación reductiva D-00…D-05.

La formulación anterior:

```text
SUFICIENCIA SIN SIGUIENTE HORIZONTE DERIVADO
```

ya no puede mantenerse sin cualificación como estado estratégico vigente.

Ha aparecido nueva evidencia prospectiva positiva que justifica reabrir la derivación.

---

# 27. Qué queda demostrado

Dentro del alcance observado queda demostrado que:

> Cuando una segunda persona real debe continuar desde una instancia real distinta el mismo trabajo colaborativo iniciado previamente por otra persona, la disponibilidad exclusivamente local del estado colaborativo puede impedir que la segunda persona reconozca y continúe esa trayectoria.

También queda demostrado que la pérdida no se resuelve simplemente mediante la orientación ya añadida a B, porque esa orientación sólo puede ejercerse cuando el antecedente colaborativo está disponible.

---

# 28. Qué NO queda demostrado

`PROS-MU-Q04` no demuestra que el producto necesite necesariamente:

```text
backend;
base de datos remota;
cuentas;
login;
autenticación;
servidor;
API;
cloud;
sincronización automática;
WebSocket;
tiempo real;
modelo multiusuario general;
permisos;
identidades persistentes;
arquitectura cliente-servidor.
```

Estas son posibles soluciones o infraestructuras.

No constituyen todavía necesidades derivadas.

Tampoco se ha demostrado que la continuidad deba producirse:

```text
automáticamente;
inmediatamente;
bidireccionalmente;
en tiempo real.
```

---

# 29. Contraargumento principal

La explicación alternativa más fuerte es:

> La pérdida observada podría resolverse mediante una transferencia explícita y mínima del estado necesario, sin introducir ninguna infraestructura general de multiusuario o sincronización.

Esta alternativa es compatible con la evidencia disponible.

Por tanto, el resultado de Q04 no justifica saltar directamente a una arquitectura distribuida.

---

# 30. Hipótesis mínima posterior

P5 proporciona un patrón conceptual que puede reutilizarse como hipótesis:

```text
estado de origen
↓
artefacto transferible
↓
estado de destino
```

Aplicado provisionalmente a la nueva pérdida:

```text
CollaborativeState de A
↓
representación transferible
↓
instancia de B
↓
estado suficiente para continuar
```

Una posible representación conceptual mínima podría conservar:

```text
sharedResult
firstContribution
```

sin presuponer todavía:

```text
canal de transporte;
formato definitivo;
persistencia remota;
cuentas;
sincronización.
```

Esta formulación constituye únicamente una hipótesis de reducción posterior.

No es todavía una Realization derivada.

---

# 31. Nueva pregunta estratégica

La siguiente pregunta justificable pasa a ser:

> ¿Cuál es la mínima información y la mínima mediación necesarias para que una segunda persona pueda continuar suficientemente, desde una instancia real distinta, la trayectoria colaborativa iniciada por otra persona?

Esta pregunta debe resolverse antes de decidir:

```text
qué artefacto;
qué mecanismo de transporte;
qué arquitectura;
qué infraestructura
```

deberán utilizarse.

---

# 32. Regla para la siguiente actuación

La siguiente actuación deberá:

```text
partir de F-PROS-MU-02;
```

y no de una tecnología candidata.

Deberá intentar reducir la pérdida mediante la intervención mínima capaz de:

```text
hacer disponible a B
el antecedente colaborativo necesario
para continuar
```

manteniendo inicialmente fuera de alcance:

```text
backend general
cuentas
autenticación
sincronización automática
tiempo real
multiusuario completo
```

Si una solución más pequeña resulta suficiente, no deberá escalarse innecesariamente.

---

# 33. Estado resultante

Después de `PROS-MU-Q04`:

```text
PROS-MU-Q01
→ N

PROS-MU-Q02
→ N

PROS-MU-Q03
→ D

F-PROS-MU-01
→ orientación insuficiente de B

F-PROS-MU-01
→ reducida y corregida localmente

PROS-MU-Q03-R
→ E

PROS-MU-Q04
→ D

R1 — recepción interdispositivo
→ FALLA

F-PROS-MU-02
→ indisponibilidad del estado colaborativo
  necesario para la continuación
  entre instancias reales distintas

F-PROS-MU-02
→ DIFERENCIA HUMANA INDEPENDIENTE DEMOSTRADA

GATE-NH-01
→ SUPERADO
```

---

# 34. Cierre

`PROS-MU-Q04` constituye la primera prueba prospectiva posterior al cierre reductivo D-00…D-05 que produce una pérdida humana concreta, observable y no reducida a las capacidades ya realizadas.

La evidencia no autoriza todavía una solución técnica concreta.

Sí autoriza:

```text
reabrir la derivación estratégica
```

para determinar la mínima mediación necesaria que permita:

```text
A inicia trabajo
↓
estado colaborativo pertinente
↓
instancia real distinta
↓
B reconoce el antecedente
↓
B puede continuar
```

sin presuponer de antemano cómo debe implementarse esa continuidad.

La siguiente actuación justificable será reducir `F-PROS-MU-02` hasta identificar la mínima diferencia funcional necesaria antes de derivar cualquier nueva Realization o decisión arquitectónica.

---
