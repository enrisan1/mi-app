# Derivación de Realization mínima — Conservación de defendibilidad

## Estado inicial de la derivación

**Derivación abierta a partir del cierre de I31.**

La actuación parte del resultado consolidado en:

```text
38-investigacion-31-de-exploracion-a-resultado-defendible.md
```

I31 estableció, dentro del alcance ejercitado:

```text
resultado disponible
≠
resultado defendible
```

e identificó como residuo funcional:

```text
C  = criterio pertinente

E* = base justificativa suficientemente comprobable

R  = resultado
```

con la relación:

```text
C + E*
↓
posibilidad humana efectiva
de comprobar la inferencia pertinente
↓
R defendible
```

El resultado quedó comprendido por `PV-006` y no justificó un nuevo Product Value.

Sin embargo, la Realization integrada cerrada no había ejercitado específicamente la conservación de defendibilidad bajo transformación o reducción.

---

## Diferencia realizativa pendiente

La diferencia mínima pendiente era:

```text
R permanece disponible
+
la base justificativa cambia
+
la persona conserva capacidad efectiva
de comprobar por qué R sigue justificado
```

frente al contraste:

```text
R permanece disponible
+
se pierde una condición justificativa necesaria
+
R deja de poder defenderse desde el estado conservado
```

No se derivaron de esta diferencia:

- historial;
- versionado;
- provenance;
- grafo argumental;
- explicación automática;
- persistencia;
- Architecture;
- Implementation general.

---

## Contrato funcional mínimo

La futura Realization debía distinguir funcionalmente:

```text
C — criterio

E — base justificativa inicial

E* — base justificativa transformada

R — resultado
```

sin presuponer que fueran entidades técnicas independientes.

La trayectoria mínima candidata quedó reducida a:

```text
M0 — constituir C + E + R defendible

M1 — transformar E → E*

M2 — comprobar que el mismo R
     sigue defendible desde C + E*

M3 — eliminar una condición justificativa necesaria
     manteniendo E* + R

M4 — comprobar que R permanece
     pero deja de ser defendible
```

---

## Invariantes de partida

La derivación fijó como condiciones mínimas:

```text
R antes = R después
```

durante toda la trayectoria;

```text
C
```

permanece durante la transformación positiva;

```text
E → E*
```

debe constituir una transformación real;

la suficiencia no puede depender de conservar literalmente `E`;

y la comprobación posterior debe ser humana, sin sustituirse por una afirmación automática del sistema.

---

## Hipótesis realizativa

> Una Realization que conserve suficientemente el criterio pertinente y una base justificativa transformada puede preservar la defendibilidad del mismo resultado sin conservar literalmente la exploración original.

La hipótesis adversaria era:

> Conservar `C + E*` no aporta una capacidad funcional distinta de conservar simplemente `R` o una conclusión ya resuelta por el sistema.

---

## Primera actuación derivada

Antes de modificar código debía comprobarse que la trayectoria:

```text
M0 → M4
```

era ejecutable y discriminante mediante una prueba manual.

La sección siguiente documenta la consolidación de esa ejecución.

---

# Consolidación del protocolo manual M0→M4

## Estado

**Protocolo manual validado en el alcance ejercitado.**

No se ha modificado código.

No se deriva todavía Architecture ni Implementation.

---

# 1. Objeto

La ejecución manual tenía como objetivo comprobar si la diferencia funcional obtenida en I31 podía ejercitarse mediante una trayectoria mínima donde:

```text
resultado disponible
≠
resultado defendible
```

y donde la defendibilidad pudiera conservarse después de una transformación real de la base justificativa.

---

# 2. Componentes funcionales

Se fijaron tres funciones:

```text
C  = criterio pertinente

E  = base justificativa inicial

R  = resultado
```

Caso utilizado:

```text
C:
seleccionar la alternativa con menor índice Q

E:
A → Q = 72
B → Q = 61

R:
seleccionar B
```

---

# 3. Ejecución M0

La persona respondió que B debía seleccionarse:

> por tener un menor índice Q.

Resultado:

```text
M0 ✓
```

Quedó comprobado que:

```text
C + E
↓
inferencia humana
↓
R
```

era suficiente para defender el resultado.

---

# 4. Transformación M1

La base original:

```text
A = 72
B = 61
```

fue sustituida por:

```text
E*:

Q(A) − Q(B) = +11
```

Los valores originales dejaron de formar parte del estado disponible.

Se mantuvieron:

```text
C:
seleccionar menor Q

R:
seleccionar B
```

La transformación fue real:

```text
E ≠ E*
```

pero conservó una relación derivable equivalente para el criterio ejercitado.

---

# 5. Ejecución M2

Desde:

```text
C:
seleccionar menor Q

E*:
Q(A) − Q(B) = +11

R:
seleccionar B
```

la persona pudo volver a defender R.

La base efectivamente utilizada fue:

> la resolución de la ecuación `Q(A) − Q(B) = +11`.

No necesitó recordar:

```text
72
61
```

ni aceptar una conclusión ya resuelta por el sistema.

Resultado:

```text
M2 ✓
```

Por tanto:

```text
transformación E → E*
```

no destruyó la defendibilidad.

---

# 6. Reducción M3

Se conservaron exactamente:

```text
E*:
Q(A) − Q(B) = +11

R:
seleccionar B
```

y se eliminó únicamente:

```text
C
```

No quedó disponible ninguna regla sobre cómo debía interpretarse Q para seleccionar una alternativa.

---

# 7. Ejecución M4

Desde el estado reducido, la persona indicó que B sólo podía seleccionarse:

> porque lo dice el sistema.

También indicó que no podía defender suficientemente R.

La información identificada como ausente fue:

> algún patrón que indique el modo de actuar.

La regla recordada de una etapa anterior fue reconocida explícitamente como externa al estado presente.

Resultado:

```text
M4 ✗
```

en el sentido esperado del contraste:

```text
R permanece
E* permanece
C desaparece
↓
defendibilidad se pierde
```

---

# 8. Resultado global

La trayectoria observada fue:

```text
M0
C + E + R
→ defendible ✓

M1
E → E*

M2
C + E* + R
→ defendible ✓

M3
eliminar C

M4
E* + R
→ defendible ✗
```

Por tanto, dentro del alcance ejercitado:

```text
preservación literal de E
→ no necesaria
```

mientras que:

```text
preservación funcional del criterio
+
base suficientemente comprobable
→ necesaria para la defendibilidad observada
```

---

# 9. Protocolo mínimo validado

La trayectoria inicialmente propuesta:

```text
H0 → H1 → H2 → H3 → H4 → H5 → H6 → H7
```

puede reducirse legítimamente a:

```text
M0 — constituir C + E + R defendible

M1 — transformar E → E*

M2 — comprobar que el mismo R
     sigue siendo defendible desde C + E*

M3 — eliminar una condición justificativa necesaria
     manteniendo E* + R

M4 — comprobar que R permanece
     pero deja de ser defendible
```

No se observa necesidad de más estados para la primera Realization.

---

# 10. Qué ha demostrado la ejecución manual

La ejecución manual demuestra que el contrato realizativo:

```text
M0 → M4
```

es:

- comprensible;
- ejecutable;
- discriminante;
- reductivo;
- y causalmente interpretable.

Por tanto, ya no hace falta una nueva investigación conceptual para saber si esta trayectoria puede existir.

---

# 11. Qué NO ha demostrado

La ejecución manual no ha demostrado todavía que sea necesario código para ejercer la diferencia.

En particular, la conversación ya fue capaz de proporcionar:

- C;
- E;
- E\*;
- R;
- la transformación;
- la reducción;
- las preguntas de comprobación;
- y el contraste humano.

Por tanto:

```text
fenómeno realizativo demostrable
≠
necesidad de soporte técnico demostrada
```

---

# 12. Análisis de necesidad técnica por etapa

## M0 — Constitución de C + E + R

Función necesaria:

```text
hacer disponibles C, E y R
```

Esto puede realizarse mediante:

- texto;
- documento;
- interfaz;
- cualquier soporte persistente o temporal.

No aparece todavía una necesidad técnica independiente.

### Clasificación

```text
soporte técnico nuevo:
NO DEMOSTRADO
```

---

## M1 — Transformación E → E\*

Función necesaria:

```text
sustituir o transformar una base justificativa
sin perder la relación pertinente
```

La transformación puede hacerse manualmente.

La Realization no requiere todavía que el sistema calcule:

```text
72 − 61 = 11
```

ni que genere E\* automáticamente.

Una transformación humana sigue siendo válida si el objetivo es comprobar conservación de defendibilidad.

### Clasificación

```text
transformación automática:
NO NECESARIA

capacidad de representar el nuevo estado:
SÍ
```

---

## M2 — Comprobación posterior

Función necesaria:

```text
poner C + E* + R a disposición de la persona
para que ésta realice la inferencia
```

La comprobación debe seguir siendo humana.

El sistema no necesita decidir si la inferencia es correcta mediante un motor explicativo.

Lo técnicamente necesario, si existe Realization ejecutable, sería únicamente que el estado correspondiente pueda ser presentado de forma estable.

### Clasificación

```text
motor de inferencia:
NO

explicación automática:
NO

presentación del estado:
SÍ, si se exige una Realization ejecutable
```

---

## M3 — Reducción causal

Función necesaria:

```text
mantener E* + R
mientras C deja de estar disponible
```

Ésta es una operación experimental.

Puede ejecutarse manualmente.

No requiere historial, undo ni versionado.

### Clasificación

```text
historial:
NO

versionado:
NO

capacidad de producir estado reducido:
SÍ
```

---

## M4 — Observación de pérdida

La pérdida de defendibilidad es una evaluación humana.

No debe sustituirse por:

```text
defendible = false
```

calculado por el sistema.

La aplicación sólo necesita permitir que la persona encuentre el estado reducido y responda desde él.

### Clasificación

```text
evaluación automática de defendibilidad:
NO

evidencia humana:
SÍ
```

---

# 13. Mínimo soporte técnico posible

Si se decide construir una Realization ejecutable, el soporte técnico mínimo podría reducirse a cuatro capacidades:

```text
T1 — mostrar C + E + R

T2 — pasar a un estado con C + E* + R

T3 — pasar a un estado con E* + R

T4 — impedir que el estado actual vuelva a exponer
     accidentalmente información eliminada
```

Nada más queda derivado por ahora.

---

# 14. Persistencia

La trayectoria `M0→M4` no contiene todavía:

- interrupción;
- cierre de aplicación;
- recuperación posterior;
- nueva sesión;
- reutilización tardía.

Por tanto:

```text
persistencia
```

no es necesaria para demostrar el contrato mínimo.

Añadir `localStorage` sólo para esta primera prueba introduciría una capacidad no derivada.

---

# 15. Transformación automática

Tampoco es necesario que el sistema transforme E en E\*.

Puede existir una transición experimental predeterminada:

```text
E:
A = 72
B = 61

↓ transición

E*:
Q(A) − Q(B) = +11
```

La Realization estaría demostrando:

```text
conservación de defendibilidad bajo transformación
```

no:

```text
capacidad general de resumir evidencias
```

---

# 16. Entrada libre

No es necesario que la primera Realization permita al usuario inventar:

- C;
- E;
- E\*;
- R.

Eso abriría un espacio de casos arbitrarios que no forma parte del contrato mínimo.

Una primera ejecución puede trabajar con un caso experimental fijado.

---

# 17. Estado técnico mínimo candidato

Si finalmente se implementa, basta provisionalmente distinguir algo equivalente a:

```text
"initial"
"transformed"
"reduced"
```

donde:

```text
initial
→ C + E + R

transformed
→ C + E* + R

reduced
→ E* + R
```

Estos nombres son sólo una representación candidata.

La derivación no obliga a usar:

- reducer;
- store;
- dominio;
- clases;
- enum;
- máquina de estados formal.

---

# 18. ¿Hace falta soporte técnico real?

La respuesta debe dividirse en dos niveles.

## Para demostrar conceptualmente la diferencia

```text
NO
```

Ya ha sido demostrada manualmente.

## Para constituir una Realization ejecutable dentro del producto

```text
SÍ, pero mínimo
```

Sólo se necesita hacer físicamente ejercitable la trayectoria:

```text
initial
↓
transformed
↓
reduced
```

manteniendo control exacto sobre qué información está disponible en cada estado.

---

# 19. Diferencia que el código tendría que aportar

El código no aportaría una nueva teoría.

Aportaría únicamente:

> un soporte físico reproducible en el que los estados de la trayectoria puedan ejercitarse sin depender de que el investigador reconstruya manualmente cada estado.

Ésta es la necesidad técnica positiva disponible.

---

# 20. Contrato técnico mínimo

Una primera implementación, si se abre, deberá permitir:

```text
Estado 1
C + E + R visibles

acción
→ transformar

Estado 2
C + E* + R visibles

acción
→ reducir

Estado 3
E* + R visibles
C ausente
```

La persona realizará externamente la evaluación de defendibilidad.

No se deriva todavía una UI específica para recoger sus respuestas.

---

# 21. Capacidades no justificadas

No hay fundamento para introducir:

```text
persistencia                    ✗
localStorage                    ✗
historial                       ✗
undo / redo                     ✗
provenance                      ✗
versionado                      ✗
edición libre                   ✗
criterios arbitrarios           ✗
evidencias arbitrarias          ✗
resultados arbitrarios          ✗
cálculo automático              ✗
motor de inferencia             ✗
explicaciones automáticas       ✗
backend                         ✗
base de datos                   ✗
Architecture                    ✗
```

---

# 22. Decisión

El protocolo manual:

```text
M0 → M4
```

queda **validado en el alcance ejercitado**.

La diferencia funcional ya no necesita nueva investigación conceptual.

Existe fundamento suficiente para una Realization técnica mínima únicamente porque:

```text
ejecución manual
→ depende de que el investigador prepare cada estado

Realization ejecutable
→ permitiría reproducir físicamente la misma trayectoria
   mediante estados controlados
```

Por tanto, el soporte técnico requerido se reduce a:

```text
representar
+
transicionar
+
ocultar/eliminar controladamente información
```

sin ninguna otra capacidad general.

---

# 23. Próxima actuación

La siguiente actuación justificable es derivar el **contrato RED mínimo antes de implementación**.

Debe determinar exactamente:

1. qué debe mostrar el estado inicial;
2. qué acción produce la transformación;
3. qué debe mostrar el estado transformado;
4. qué acción produce la reducción;
5. qué debe desaparecer;
6. qué debe permanecer;
7. qué observación automatizable puede probarse sin sustituir la evaluación humana;
8. qué evidencia seguirá siendo necesariamente manual.

Sólo después de fijar ese contrato podrá abrirse la primera prueba roja.

---

# Contrato RED mínimo — Realization de conservación de defendibilidad

## Estado

**Contrato previo a implementación.**

No se ha modificado todavía código de producción.

El contrato deriva exclusivamente del protocolo manual `M0→M4` ya validado.

---

# 1. Objetivo

Construir el soporte técnico mínimo necesario para reproducir físicamente esta trayectoria:

```text
Estado inicial
C + E + R
↓
transformación
Estado transformado
C + E* + R
↓
reducción
Estado reducido
E* + R
```

donde:

```text
C  = criterio pertinente

E  = base justificativa inicial

E* = base justificativa transformada

R  = resultado
```

El soporte técnico no deberá decidir si R es defendible.

Sólo deberá garantizar qué información está disponible en cada estado.

---

# 2. Caso experimental fijado

## Criterio C

```text
Seleccionar la alternativa con menor índice Q.
```

## Base inicial E

```text
Alternativa A: Q = 72
Alternativa B: Q = 61
```

## Base transformada E\*

```text
Q(A) − Q(B) = +11
```

## Resultado R

```text
Seleccionar B.
```

Estos valores pertenecen al caso experimental.

No se deriva todavía soporte para criterios, evidencias o resultados arbitrarios.

---

# 3. Estados observables

## S-RD-0 — Inicial

Debe estar disponible:

```text
C
E
R
```

Concretamente:

```text
C:
Seleccionar la alternativa con menor índice Q.

E:
A = 72
B = 61

R:
Seleccionar B.
```

Debe existir una actuación que permita producir la transformación.

---

## S-RD-1 — Transformado

Después de la transformación debe estar disponible:

```text
C
E*
R
```

y debe haber desaparecido la representación original:

```text
E
```

Concretamente:

```text
C:
Seleccionar la alternativa con menor índice Q.

E*:
Q(A) − Q(B) = +11

R:
Seleccionar B.
```

No deben continuar visibles:

```text
A = 72
B = 61
```

Debe existir una actuación que permita producir la reducción causal.

---

## S-RD-2 — Reducido

Después de la reducción deben permanecer:

```text
E*
R
```

y debe desaparecer:

```text
C
```

Concretamente:

```text
E*:
Q(A) − Q(B) = +11

R:
Seleccionar B.
```

No debe estar disponible ninguna regla equivalente a:

```text
seleccionar menor Q
```

---

# 4. Transiciones mínimas

Sólo se derivan dos transiciones:

```text
T-RD-01

S-RD-0
↓
transformar
↓
S-RD-1
```

y:

```text
T-RD-02

S-RD-1
↓
reducir
↓
S-RD-2
```

No se deriva:

- transición inversa;
- undo;
- redo;
- historial;
- navegación arbitraria;
- reinicio;
- persistencia.

---

# 5. Invariantes técnicos

## IT-RD-01 — Permanencia de R

Durante toda la trayectoria:

```text
R = Seleccionar B.
```

Debe permanecer observable en:

```text
S-RD-0
S-RD-1
S-RD-2
```

---

## IT-RD-02 — Permanencia de C hasta la reducción

C debe estar disponible en:

```text
S-RD-0
S-RD-1
```

y ausente en:

```text
S-RD-2
```

---

## IT-RD-03 — Sustitución efectiva de E

En `S-RD-1`:

```text
E*
```

debe estar presente y:

```text
E
```

debe estar ausente.

No vale mantener simultáneamente:

```text
E + E*
```

porque eso no reproduciría la reducción manual validada.

---

## IT-RD-04 — Permanencia de E\*

E\* debe permanecer idéntica entre:

```text
S-RD-1
```

y:

```text
S-RD-2
```

La única diferencia causal relevante entre esos estados deberá ser la desaparición de C.

---

## IT-RD-05 — No reintroducción oculta

Una vez eliminado un elemento del estado observable, ninguna actuación posterior de la trayectoria podrá volver a mostrarlo accidentalmente.

En particular:

```text
72 y 61
```

no deberán reaparecer después de `T-RD-01`.

Y:

```text
criterio C
```

no deberá reaparecer después de `T-RD-02`.

---

# 6. Qué pueden probar los tests automáticos

Los tests pueden demostrar:

```text
qué contenido aparece;
qué contenido desaparece;
qué contenido permanece;
qué transición está disponible;
qué transición se ha producido.
```

También pueden demostrar que:

```text
S-RD-1
```

y:

```text
S-RD-2
```

difieren únicamente en aquello previsto por el contrato observable.

---

# 7. Qué NO pueden probar los tests automáticos

Los tests no demostrarán:

```text
que una persona comprende E*;
que una persona puede defender R;
que R está correctamente justificado;
que la pérdida de C impide psicológicamente razonar;
que los datos son verdaderos;
que E* es empíricamente fiable.
```

En particular, un test de este tipo sería inválido:

```text
expect(result).toBeDefendable()
```

La defendibilidad seguirá requiriendo contraste humano.

---

# 8. Evidencia humana posterior

Una vez implementados y estabilizados los estados técnicos, deberá repetirse manualmente:

## En S-RD-1

Preguntar:

> ¿Por qué sigue estando justificado seleccionar B?

Éxito humano esperado:

```text
la persona utiliza C + E*
y realiza por sí misma la inferencia
```

sin necesitar `72` ni `61`.

---

## En S-RD-2

Preguntar:

> ¿Por qué debe seleccionarse B?

Contraste esperado:

```text
R sigue disponible
E* sigue disponible
pero falta el criterio
```

y la persona no puede defender R únicamente desde ese estado.

---

# 9. Separación de evidencias

La validación final deberá conservar esta distinción:

```text
evidencia automática
→ fidelidad de los estados y transiciones

evidencia humana
→ suficiencia o insuficiencia justificativa
```

Ninguna debe utilizarse como sustituto de la otra.

---

# 10. Primera prueba RED

La primera prueba no deberá intentar abarcar toda la trayectoria.

El primer requisito técnico mínimo es:

> La Realization comienza haciendo disponibles simultáneamente C, E y R.

Por tanto:

## RED-RD-01 — Constitución observable del estado inicial

Debe exigir:

```text
criterio visible
+
A = 72 visible
+
B = 61 visible
+
resultado B visible
+
actuación de transformación disponible
```

Esta prueba deberá escribirse **antes de existir la implementación suficiente para satisfacerla**.

El fallo inicial constituye la evidencia RED.

---

# 11. Segunda prueba RED

Sólo después de poner verde `RED-RD-01`:

## RED-RD-02 — Transformación conservativa observable

Después de ejecutar la actuación de transformación deberá cumplirse:

```text
C visible                         ✓
E* visible                        ✓
R visible                         ✓

A = 72                            ✗
B = 61                            ✗
```

Esto demuestra técnicamente:

```text
E → E*
```

manteniendo C y R.

No demuestra todavía defendibilidad.

---

# 12. Tercera prueba RED

Sólo después de poner verde `RED-RD-02`:

## RED-RD-03 — Reducción causal observable

Después de la reducción deberá cumplirse:

```text
E* visible                        ✓
R visible                         ✓

C                                 ✗
E original                        ✗
```

Así quedará físicamente reproducido:

```text
S-RD-1
C + E* + R

↓

S-RD-2
E* + R
```

---

# 13. Prueba de invariantes integrada

Después de las tres pruebas mínimas podrá añadirse una única prueba de trayectoria completa:

## RD-INTEGRATION-01

```text
render
↓
S-RD-0 comprobado

transformar
↓
S-RD-1 comprobado

reducir
↓
S-RD-2 comprobado
```

Esta prueba deberá verificar en una sola ejecución:

```text
R permanece siempre;

E desaparece exactamente al transformar;

E* aparece al transformar y permanece;

C desaparece únicamente al reducir.
```

No deberá añadirse antes de que las pruebas RED locales estén verdes.

---

# 14. Orden obligatorio de construcción

El orden será:

```text
RED-RD-01
↓ fallo observado
mínima producción
↓
GREEN-RD-01

RED-RD-02
↓ fallo observado
mínima producción
↓
GREEN-RD-02

RED-RD-03
↓ fallo observado
mínima producción
↓
GREEN-RD-03

RD-INTEGRATION-01
↓
trayectoria técnica completa
```

No se implementará por adelantado el estado siguiente simplemente porque ya conocemos el contrato.

---

# 15. Unidad técnica mínima candidata

La derivación requiere una unidad ejecutable específica para este experimento.

Nombre provisional:

```text
DefendabilityExperience
```

Ubicación candidata:

```text
src/realizations/defendability/DefendabilityExperience.tsx
```

y su prueba:

```text
src/realizations/defendability/DefendabilityExperience.test.tsx
```

Los nombres son contingentes.

No crean una entidad de dominio denominada `Defendability`.

---

# 16. Estado técnico mínimo candidato

La implementación puede comenzar con un estado local mínimo equivalente a:

```text
initial
transformed
reduced
```

No se deriva la necesidad de una estructura más compleja.

No se deriva:

```text
useReducer
store
repository
domain model
use case
middleware
```

---

# 17. Acciones técnicas candidatas

Sólo hacen falta conceptualmente:

```text
transform
reduce
```

Estas acciones pueden materializarse inicialmente como controles locales.

No constituyen todavía comandos de dominio ni casos de uso generales.

---

# 18. Acceso experimental

La nueva Realization no debe sustituir automáticamente la entrada ordinaria del producto.

El acceso deberá mantenerse experimental y separado mientras se valida.

Puede reutilizarse, si sigue vigente y resulta suficiente, el patrón ya utilizado para la Realization integrada:

```text
?realization=...
```

pero esta posibilidad deberá comprobarse contra el estado actual del código antes de modificar `main.tsx`.

No se presupone que el mecanismo siga existiendo ni que deba ampliarse.

---

# 19. No persistencia

El contrato RED no requiere:

```text
localStorage
remount
reload
interrupción real
recuperación
```

Por tanto no deberá introducirse persistencia en esta primera realización.

Si posteriormente aparece una necesidad de defender R después de una interrupción, deberá derivarse de forma separada.

---

# 20. No entrada libre

El contrato tampoco requiere inputs para introducir:

```text
C
E
E*
R
```

El caso puede estar fijado en la Realization experimental.

La entrada libre no incrementaría la fuerza de la primera prueba y ampliaría innecesariamente el espacio de comportamiento.

---

# 21. Condiciones de parada

La implementación deberá detenerse si aparece cualquiera de estas situaciones:

## P-RD-01

Para poner verde una prueba se necesita introducir una capacidad no derivada.

## P-RD-02

La implementación obliga a reinterpretar el contrato experimental.

## P-RD-03

Los estados técnicos no permiten reproducir limpiamente la diferencia manual.

## P-RD-04

Una prueba automática empieza a sustituir indebidamente la evaluación humana.

En esos casos se vuelve a la derivación antes de continuar.

---

# 22. Criterio de suficiencia técnica

La construcción técnica habrá alcanzado su límite cuando:

```text
RED-RD-01 ✓
RED-RD-02 ✓
RED-RD-03 ✓
RD-INTEGRATION-01 ✓
```

y no exista ninguna capacidad adicional necesaria para ejecutar manualmente el contraste humano.

En ese punto deberá detenerse el desarrollo automático.

---

# 23. Validación humana posterior

Sólo después de la suite verde deberá realizarse:

```text
TECH-HUMAN-RD-01
```

con la trayectoria:

```text
S-RD-0
↓
comprobación inicial

S-RD-1
↓
defensa desde C + E*

S-RD-2
↓
pérdida de defendibilidad
manteniendo R
```

La prueba humana utilizará el soporte técnico recién construido, no los estados preparados conversacionalmente.

---

# 24. Resultado exigido a la Realization

Para considerar realizada la diferencia derivada de I31 deberán concurrir ambas evidencias:

```text
evidencia técnica
+
evidencia humana
```

La evidencia técnica deberá mostrar que los estados obedecen al contrato.

La evidencia humana deberá mostrar que:

```text
S-RD-1 → defendible
S-RD-2 → no defendible
```

desde la información realmente disponible en cada estado.

---

# 25. Alcance explícitamente excluido

Continúan fuera del contrato:

```text
persistencia
historial
versionado
provenance
autenticidad de fuentes
edición libre
casos arbitrarios
criterios arbitrarios
evidencias arbitrarias
explicación automática
motor de inferencia
Architecture
backend
base de datos
IA
```

---

# 26. Estado del contrato RED

```text
caso experimental
→ FIJADO

estados observables
→ FIJADOS

transiciones
→ FIJADAS

invariantes
→ FIJADOS

evidencia automática
→ DELIMITADA

evidencia humana
→ DELIMITADA

primer RED
→ DERIVADO

Architecture
→ NO DERIVADA

persistencia
→ NO DERIVADA
```

---

# 27. Próxima actuación

La siguiente actuación justificable es exclusivamente:

> **crear `RED-RD-01`, ejecutarlo y observar su fallo antes de introducir la producción mínima que lo satisfaga.**

No debe implementarse todavía `S-RD-1`, `S-RD-2` ni la trayectoria completa.

---

# Consolidación de `TECH-HUMAN-RD-01`

## Estado

**Validación técnica y humana completada en el alcance ejercitado.**

---

# 1. Fundamento

El contrato RED derivado para la Realization de conservación de defendibilidad estableció una trayectoria técnica mínima:

```text
S-RD-0
C + E + R

↓ transformar

S-RD-1
C + E* + R

↓ reducir

S-RD-2
E* + R
```

donde:

```text
C  = criterio pertinente

E  = base justificativa inicial

E* = base justificativa transformada

R  = resultado
```

El objetivo técnico no consistía en decidir automáticamente si `R` era defendible.

La función del soporte era únicamente controlar qué información permanecía disponible o desaparecía en cada estado.

La evaluación de defendibilidad debía continuar siendo humana.

---

# 2. Realization construida

Se creó la unidad experimental:

```text
src/realizations/defendability/DefendabilityExperience.tsx
```

con su suite específica:

```text
src/realizations/defendability/DefendabilityExperience.test.tsx
```

La Realization utiliza únicamente estado local para distinguir:

```text
initial
transformed
reduced
```

No se introdujeron:

- persistencia;
- `localStorage`;
- historial;
- versionado;
- undo/redo;
- provenance;
- repositorios;
- stores;
- dominio nuevo;
- motor de inferencia;
- backend;
- Architecture.

---

# 3. Caso ejercitado

## Criterio C

```text
Seleccionar la alternativa con menor índice Q.
```

## Base inicial E

```text
Alternativa A: Q = 72
Alternativa B: Q = 61
```

## Base transformada E\*

```text
Q(A) − Q(B) = +11
```

## Resultado R

```text
Seleccionar B.
```

---

# 4. Desarrollo RED → GREEN

La construcción se realizó mediante ciclos mínimos separados.

## `RED-RD-01`

Se exigió inicialmente que la experiencia hiciera disponibles:

```text
C
E
R
acción Transformar
```

La primera ejecución falló porque:

```text
DefendabilityExperience
```

todavía no existía.

Se introdujo exclusivamente el componente mínimo necesario para constituir `S-RD-0`.

Resultado:

```text
GREEN-RD-01
```

---

## `RED-RD-02`

Se exigió que, después de `Transformar`:

```text
C permaneciera
E desapareciera
E* apareciera
R permaneciera
```

La prueba falló porque el botón todavía no producía ninguna transformación.

Se introdujo únicamente la transición:

```text
initial
↓
transformed
```

Resultado:

```text
GREEN-RD-02
```

---

## `RED-RD-03`

Se exigió que, después de la transformación, existiera una segunda actuación:

```text
Reducir
```

capaz de producir:

```text
S-RD-2
E* + R
```

eliminando `C`.

La prueba falló inicialmente porque la actuación `Reducir` no existía.

Se añadió exclusivamente la transición:

```text
transformed
↓
reduced
```

Resultado:

```text
GREEN-RD-03
```

---

# 5. Prueba integrada

Después de estabilizar las tres pruebas locales se añadió:

```text
RD-INTEGRATION-01
```

La prueba ejercitó en una sola ejecución:

```text
S-RD-0
↓
S-RD-1
↓
S-RD-2
```

y comprobó que:

```text
R
```

permanecía durante toda la trayectoria;

```text
E
```

desaparecía exactamente durante la transformación;

```text
E*
```

aparecía después de la transformación y permanecía durante la reducción;

y:

```text
C
```

desaparecía únicamente durante la reducción.

Resultado específico final:

```text
4 / 4 tests superados
```

---

# 6. Validación global

Después de completar la suite específica se ejecutó la suite global del proyecto.

Resultado:

```text
28 archivos de test superados
250 tests superados
```

No se observaron regresiones conocidas.

---

# 7. Acceso experimental

La Realization se hizo accesible mediante el mecanismo experimental ya existente en:

```text
src/main.tsx
```

Se añadió una nueva selección:

```text
?realization=defendability
```

sin sustituir:

```text
?realization=integrated
```

ni la entrada ordinaria de `App`.

La actuación no introdujo router ni navegación general.

---

# 8. `TECH-HUMAN-RD-01`

Después de la validación automática se ejercitó manualmente la trayectoria mediante la Realization técnica real.

La validación humana utilizó exclusivamente la información visible en cada estado.

---

# 9. `S-RD-0` — Estado inicial

La pantalla mostró:

```text
Seleccionar la alternativa con menor índice Q.

Alternativa A: Q = 72
Alternativa B: Q = 61

Seleccionar B.

[Transformar]
```

La persona indicó que B debía seleccionarse:

> porque el sistema indica que se debe elegir la alternativa con menor índice Q.

Confirmó además que podía defender suficientemente el resultado usando los índices Q visibles.

La base efectiva fue:

```text
C
+
E
```

Resultado:

```text
S-RD-0
DEFENDIBLE ✓
```

---

# 10. `S-RD-1` — Estado transformado

Después de pulsar:

```text
Transformar
```

la pantalla mostró:

```text
Seleccionar la alternativa con menor índice Q.

Q(A) − Q(B) = +11

Seleccionar B.

[Reducir]
```

Los valores:

```text
72
61
```

ya no estaban disponibles.

La persona indicó que B seguía justificado:

> por tener el menor índice Q.

También confirmó:

- que podía defender suficientemente `R`;
- que no necesitaba recordar `72` ni `61`;
- que podía realizar directamente la inferencia desde:

```text
Q(A) − Q(B) = +11
```

sin limitarse a aceptar una conclusión del sistema.

Resultado:

```text
S-RD-1
DEFENDIBLE ✓
```

La transformación:

```text
E → E*
```

conservó la defendibilidad sin conservar literalmente la base original.

---

# 11. `S-RD-2` — Estado reducido

Después de pulsar:

```text
Reducir
```

la pantalla conservó únicamente:

```text
Q(A) − Q(B) = +11

Seleccionar B.
```

Habían desaparecido:

```text
C
```

y los valores originales de `E`.

La persona indicó que B sólo podía seleccionarse:

> por indicación del sistema.

También confirmó que no podía defender suficientemente `R` utilizando únicamente el estado visible.

Identificó como información ausente:

> datos y un protocolo de cómo actuar.

La regla recordada de una etapa anterior fue reconocida explícitamente como información externa al estado actual.

Resultado:

```text
S-RD-2
DEFENDIBLE ✗
```

aunque:

```text
R
```

continuaba disponible.

---

# 12. Trayectoria técnico-humana observada

La ejecución completa produjo:

```text
S-RD-0
C + E + R
→ defendible ✓

↓ Transformar

S-RD-1
C + E* + R
→ defendible ✓

↓ Reducir

S-RD-2
E* + R
→ defendible ✗
```

La diferencia observada coincide con la derivada a partir de I31.

---

# 13. Resultado causal

La ejecución permite atribuir dos diferencias.

## Conservación bajo transformación

```text
E → E*
```

no destruyó la defendibilidad cuando permanecieron:

```text
C + E*
```

y la persona pudo efectuar por sí misma la inferencia pertinente.

Por tanto:

```text
conservación funcional
≠
conservación literal
```

queda reproducida técnicamente en el alcance ejercitado.

---

## Pérdida bajo reducción

Al mantener:

```text
E* + R
```

y eliminar únicamente:

```text
C
```

la defendibilidad desapareció mientras el resultado continuó disponible.

Por tanto:

```text
resultado disponible
≠
resultado defendible
```

queda reproducido también en la Realization técnica.

---

# 14. Separación de evidencias confirmada

La ejecución mantuvo la separación prevista:

```text
evidencia automática
→ fidelidad de estados y transiciones
```

frente a:

```text
evidencia humana
→ suficiencia justificativa
```

Los tests no intentaron determinar automáticamente si `R` era defendible.

La evaluación humana no sustituyó las comprobaciones técnicas sobre qué información estaba realmente disponible.

---

# 15. Resultado de la Realization

Dentro del alcance ejercitado:

```text
Realization técnica mínima
→ SUFICIENTE
```

Se ha reproducido una trayectoria donde:

```text
1. R está inicialmente defendido desde C + E;

2. E se transforma en E*;

3. R sigue defendible desde C + E*;

4. la representación original de E deja de estar disponible;

5. C se elimina manteniendo E* + R;

6. R sigue disponible;

7. la persona deja de poder defender R únicamente desde el estado conservado.
```

---

# 16. Alcance de la conclusión

La Realization no demuestra:

- defendibilidad universal;
- validez empírica de la evidencia;
- autenticidad de datos;
- procedencia;
- persistencia temporal;
- defendibilidad después de una interrupción;
- capacidad para criterios arbitrarios;
- capacidad para evidencias arbitrarias;
- historial;
- versionado;
- provenance;
- explicación automática;
- motor general de inferencia.

Demuestra exclusivamente la diferencia ejercitada en el caso fijado.

---

# 17. Capacidades técnicas no requeridas

La ejecución confirmó que no fueron necesarias:

```text
localStorage                    ✗
persistencia                    ✗
historial                       ✗
undo / redo                     ✗
versionado                      ✗
provenance                      ✗
repositorio                     ✗
store                           ✗
modelo de dominio nuevo         ✗
motor de inferencia             ✗
explicación automática          ✗
Architecture                    ✗
```

El soporte técnico mínimo se redujo efectivamente a:

```text
representar
+
transicionar
+
retirar controladamente información
```

---

# 18. Relación con I31

I31 había establecido:

```text
resultado disponible
≠
resultado defendible
```

y había identificado como residuo funcional:

```text
criterio pertinente
+
base justificativa suficientemente comprobable
```

La nueva Realization no modifica ese resultado.

Lo ejercita físicamente mediante un soporte técnico reproducible.

Por tanto:

```text
I31
→ diferencia funcional identificada y reducida

derivación posterior
→ contrato realizativo

DefendabilityExperience
→ witness técnico de esa diferencia
```

---

# 19. Relación con PV-006

La Realization no deriva un nuevo Product Value.

Continúa siendo una realización local de una posibilidad comprendida por:

```text
PV-006 — Continuidad de posibilidades pertinentes
```

La posibilidad ejercitada es:

```text
conservar la posibilidad de defender R
```

después de una transformación que modifica su base justificativa.

---

# 20. Estado de la derivación

Después de `TECH-HUMAN-RD-01`:

```text
protocolo manual
→ VALIDADO

contrato RED
→ EJERCITADO

suite específica
→ 4 / 4

suite global
→ 250 / 250

validación humana
→ COMPLETADA

diferencia funcional
→ REPRODUCIDA TÉCNICAMENTE

soporte técnico mínimo
→ SUFICIENTE EN EL ALCANCE EJERCITADO
```

---

# 21. Decisión provisional de cierre

No queda identificada dentro del contrato `M0→M4` ninguna capacidad técnica adicional necesaria para demostrar la diferencia derivada de I31.

Por tanto, no existe fundamento interno para continuar ampliando esta Realization con:

- persistencia;
- historial;
- nuevas representaciones;
- nuevos criterios;
- nuevas evidencias;
- generalización;
- Architecture.

La construcción debe detenerse en el alcance alcanzado.

---

# 22. Próxima actuación

La siguiente actuación no será añadir nueva funcionalidad.

Corresponde:

1. auditar el estado completo de `39-derivacion-realization-conservacion-defendibilidad.md`;
2. comprobar que la derivación, el protocolo manual, el contrato RED y `TECH-HUMAN-RD-01` forman una cadena documental coherente;
3. determinar si el documento puede cerrarse formalmente;
4. registrar posteriormente el hito en `PROJECT_JOURNAL.md`;
5. consolidar en Git únicamente después de esas comprobaciones.

Hasta esa auditoría:

```text
no ampliar código
no abrir Architecture
no introducir nuevas capacidades
```

---

# 23. Cierre formal

## Auditoría documental

Se ha auditado la estructura completa de:

```text
39-derivacion-realization-conservacion-defendibilidad.md
```

La revisión comprobó la continuidad entre:

```text
cierre de I31
↓
derivación realizativa
↓
contrato funcional mínimo
↓
protocolo manual M0→M4
↓
validación manual
↓
derivación de necesidad técnica
↓
contrato RED
↓
RED-RD-01
↓
RED-RD-02
↓
RED-RD-03
↓
RD-INTEGRATION-01
↓
TECH-HUMAN-RD-01
↓
resultado técnico-humano
```

No se ha identificado ninguna discontinuidad que requiera nueva investigación, nueva derivación funcional ni ampliación del soporte técnico.

---

## Resultado consolidado

La Realization ha reproducido en soporte técnico la diferencia funcional derivada de I31:

```text
resultado disponible
≠
resultado defendible
```

y ha mostrado además que:

```text
E → E*
```

puede conservar la defendibilidad sin conservar literalmente la representación original de la base justificativa, siempre que permanezcan disponibles:

```text
criterio pertinente
+
base justificativa suficientemente comprobable
```

para que la persona pueda efectuar la inferencia relevante.

La trayectoria ejercitada quedó:

```text
S-RD-0
C + E + R
→ defendible ✓

↓ transformación

S-RD-1
C + E* + R
→ defendible ✓

↓ reducción

S-RD-2
E* + R
→ defendible ✗
```

mientras:

```text
R
```

permaneció disponible en los tres estados.

---

## Evidencia concurrente

El cierre se apoya en dos tipos de evidencia distintos.

### Evidencia técnica

La suite específica verificó:

```text
RED-RD-01
RED-RD-02
RED-RD-03
RD-INTEGRATION-01
```

con resultado:

```text
4 / 4
```

La suite global registrada después de la construcción produjo:

```text
28 archivos de test superados
250 tests superados
```

sin regresiones conocidas en esa ejecución.

### Evidencia humana

`TECH-HUMAN-RD-01` confirmó:

```text
S-RD-0
→ defendible

S-RD-1
→ defendible sin recordar E original

S-RD-2
→ no defendible únicamente desde el estado disponible
```

La evaluación humana permaneció separada de las comprobaciones automáticas.

---

## Suficiencia alcanzada

El soporte técnico mínimo requerido quedó reducido a:

```text
representar
+
transicionar
+
retirar controladamente información
```

No apareció necesidad demostrada de introducir:

```text
persistencia
historial
versionado
provenance
repositorios
store
backend
base de datos
motor de inferencia
explicación automática
Architecture
```

Por tanto:

```text
Realization técnica mínima
→ SUFICIENTE EN EL ALCANCE EJERCITADO
```

---

## Relación con Product

El resultado no deriva un nuevo Product Value.

Permanece comprendido por:

```text
PV-006 — Continuidad de posibilidades pertinentes
```

como ejercicio específico de la posibilidad de conservar la defendibilidad de un resultado después de una transformación.

No se modifica `PV-005`.

---

## Alcance del cierre

El cierre no generaliza el resultado a:

- criterios arbitrarios;
- evidencias arbitrarias;
- resultados arbitrarios;
- persistencia temporal;
- interrupciones y reanudaciones;
- autenticidad de datos;
- provenance;
- explicación automática;
- inferencia automática.

Tampoco afirma que toda transformación de una base justificativa preserve defendibilidad.

El cierre se limita estrictamente a la diferencia funcional y al caso ejercitado.

---

## Decisión

La derivación iniciada a partir de I31 queda cerrada.

El protocolo manual queda validado.

El contrato RED queda ejercitado.

La Realization técnica queda realizada en el alcance derivado.

La validación humana queda completada.

No queda una capacidad pendiente cuya ausencia impida cerrar esta actuación.

Por tanto:

```text
DERIVACIÓN
→ CERRADA

REALIZATION MÍNIMA
→ CERRADA EN EL ALCANCE EJERCITADO

AMPLIACIÓN TÉCNICA
→ NO JUSTIFICADA

ARCHITECTURE
→ NO DERIVADA
```

---

## Estado resultante

`39-derivacion-realization-conservacion-defendibilidad.md` queda:

```text
CERRADO
```

La próxima actuación ya no pertenece al contenido de esta derivación.

Corresponde únicamente al cierre operativo del trabajo realizado:

```text
registrar el hito en PROJECT_JOURNAL.md
↓
verificar estado final del repositorio
↓
ejecutar comprobaciones finales necesarias
↓
consolidar en Git mediante selección explícita de archivos
```

No debe abrirse una nueva investigación, Realization, Architecture o Implementation como consecuencia automática de este cierre.

---
