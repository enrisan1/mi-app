# Cierre de I31 — De exploración a resultado defendible

## Estado

**Cerrada en el alcance ejercitado.**

---

# 1. Pregunta de investigación

I31 se abrió para responder a la siguiente pregunta:

> ¿Puede un resultado permanecer disponible y operativo mientras se pierde la posibilidad efectiva de defenderlo porque dejan de estar disponibles o relacionadas las razones, evidencias o alternativas pertinentes que justificaron su obtención?

La investigación se originó a partir del caso:

> **De exploración a resultado defendible.**

La diferencia candidata era:

```text
resultado disponible
≠
resultado defendible
```

---

# 2. Hipótesis reductiva inicial

La investigación no partió de la necesidad de conservar toda la historia de exploración.

La hipótesis de trabajo fue:

> Para conservar la posibilidad de defender un resultado no es necesario conservar toda su historia de exploración; basta preservar aquello que siga siendo funcionalmente necesario para justificarlo.

I31 debía determinar qué, si algo, constituía ese residuo funcional.

---

# 3. Serie experimental

Se realizaron los casos controlados:

```text
CM-I31-02
CM-I31-03
CM-I31-04
CM-I31-05
CM-I31-06
```

Cada caso redujo una incertidumbre concreta del anterior.

---

# 4. CM-I31-02 — Separación entre disponibilidad y defendibilidad

Trayectoria observada:

```text
S0  P + A/B + E + J + R  → defendible ✓
S1  P + A/B + E + R      → defendible ✓
S2  P + A/B + R          → defendible ✗
S3  R                     → defendible ✗
```

## Resultado

La justificación textual explícita `J` podía desaparecer sin destruir la defendibilidad.

En cambio, al desaparecer la evidencia que permitía justificar la preferencia entre alternativas, el resultado permanecía presente pero dejaba de poder defenderse desde el estado conservado.

Se demostró así:

```text
resultado disponible
≠
resultado defendible
```

en el alcance ejercitado.

---

# 5. CM-I31-03 — Reducción de la evidencia

Trayectoria:

```text
T0  datos parciales + medias + criterio + R  → defendible ✓
T1  medias + criterio + R                    → defendible ✓
T2  comparación resuelta + criterio + R      → defendible ✗
T3  recomendación + R                        → defendible ✗
```

## Resultado

Los datos originales completos no eran necesarios.

Para el criterio ejercitado, las medias resumidas bastaban.

La desaparición relevante no consistía simplemente en tener menos información, sino en pasar de disponer de información desde la que la persona podía efectuar una valoración a recibir una conclusión ya resuelta.

---

# 6. CM-I31-04 — Transformación conservativa

Se probaron distintas representaciones de la relación pertinente:

```text
U1
A = 42
B = 36
→ defendible ✓

U2
A tarda 6 unidades más que B
→ defendible ✓

U3
media(A) − media(B) = +6
→ defendible ✓
```

## Resultado

No era necesario conservar:

- los datos originales;
- los valores absolutos;
- ni una representación determinada.

Una transformación reductiva podía conservar la defendibilidad siempre que mantuviera información suficiente para que la persona realizara la inferencia pertinente.

Por tanto:

```text
conservación literal
≠
conservación funcional
```

---

# 7. CM-I31-05 — Comprobación frente a aceptación

Se compararon dos situaciones.

## V1

```text
media(A) = 54
media(B) = 47
```

La persona podía comprobar:

```text
47 < 54
```

y obtener por sí misma el resultado.

Resultado:

```text
defendible ✓
```

## V2

El estado conservaba únicamente:

> El sistema ha determinado que B tiene menor tiempo medio que A.

Resultado:

```text
defendible ✗
```

## Diferencia observada

```text
poder comprobar la inferencia
≠
tener que aceptar la conclusión del sistema
```

La pérdida funcional no consistía en que el sistema proporcionara una respuesta incorrecta.

Consistía en que el estado ya no permitía a la persona comprobar por qué esa respuesta se seguía de una base disponible.

---

# 8. CM-I31-06 — Función independiente del criterio

CM-I31-06 debía resolver la última ambigüedad: si bastaba conservar evidencia y resultado o si también era funcionalmente necesario conservar el criterio que determina qué diferencias son pertinentes.

## 8.1. Primera instancia

Se utilizaron inicialmente las dimensiones:

```text
tiempo
precisión
```

El caso resultó **no discriminante**.

La precisión fue considerada legítimamente relevante para la decisión, de modo que el resultado no era suficientemente defendible ni siquiera en el estado basal.

Esta instancia se descartó como evidencia sobre la hipótesis.

No se corrigió retrospectivamente.

---

## 8.2. Segunda instancia

Se sustituyeron las magnitudes semánticamente cargadas por índices abstractos.

### W1′

```text
A:
K = 40
L = 98

B:
K = 30
L = 90

Regla:
seleccionar el menor K.

R:
Elegir B.
```

Resultado:

```text
defendible ✓
```

### W2′

Se mantuvieron exactamente:

```text
A:
K = 40
L = 98

B:
K = 30
L = 90

R:
Elegir B.
```

pero desapareció la regla que indicaba qué índice era pertinente.

Resultado:

```text
defendible ✗
```

## Diferencia causal

```text
W1′
criterio + evidencia + R
→ defendible ✓

W2′
evidencia + R
→ defendible ✗
```

Todos los valores seguían disponibles.

Lo que había desaparecido era la posibilidad de saber qué relación debía utilizarse para convertir esos valores en una razón para R.

---

# 9. Resultado global

La serie experimental demuestra, en el alcance ejercitado, que un resultado puede:

```text
seguir disponible
seguir siendo reconocible
seguir pudiendo ser mostrado
```

y, sin embargo:

```text
dejar de ser defendible
```

La pérdida aparece cuando desaparece aquello que permite comprobar suficientemente por qué el resultado se sigue de la base pertinente.

---

# 10. Reducciones obtenidas

No se ha demostrado necesaria la conservación de:

```text
historia completa de exploración          ✗
todas las alternativas históricas         ✗
datos brutos completos                    ✗
representación original de los datos      ✗
justificación textual explícita           ✗
valores absolutos originales              ✗
trayectoria completa de obtención         ✗
```

Tampoco bastan por sí solos:

```text
resultado R                               ✗
recomendación del sistema                 ✗
conclusión derivada no comprobable        ✗
evidencia sin criterio pertinente         ✗
```

---

# 11. Residuo funcional estable identificado

La investigación permite identificar el siguiente residuo funcional mínimo en el alcance ejercitado:

```text
C  = criterio pertinente

E* = base justificativa suficientemente conservada
     o transformada

R  = resultado
```

con la relación:

```text
C + E*
   ↓
posibilidad humana efectiva de comprobar
la inferencia pertinente
   ↓
R defendible
```

`E*` no designa una estructura técnica concreta.

Puede ser:

- evidencia original;
- evidencia resumida;
- una transformación;
- una diferencia;
- una relación cuantificada;
- otra representación funcionalmente equivalente.

Lo necesario no es su forma.

Lo necesario es que conserve suficientemente la posibilidad de comprobación pertinente.

---

# 12. Formulación del resultado de I31

> **La defendibilidad de un resultado requiere preservar suficientemente el criterio pertinente y una base justificativa desde la que la persona pueda comprobar la relación entre ese criterio y el resultado, sin depender de reconstrucción externa ni de la mera aceptación de una conclusión proporcionada por el sistema.**

Esta formulación describe una función.

No prescribe:

- historial;
- versionado;
- snapshots;
- provenance;
- grafos argumentales;
- explicaciones automáticas;
- almacenamiento de toda la evidencia;
- almacenamiento de todas las alternativas;
- una interfaz determinada.

---

# 13. Límite de la investigación

I31 ha estudiado:

```text
dados unos materiales conservados,
¿puede la persona comprobar suficientemente
por qué conducen a R?
```

No ha estudiado:

```text
¿son auténticos los materiales?

¿proceden realmente de la fuente indicada?

¿son empíricamente correctos?

¿puede verificarse externamente su procedencia?
```

Por tanto:

```text
defendibilidad interna
≠
verificación externa de autenticidad
```

Esta segunda cuestión no se deriva automáticamente como nueva investigación.

---

# 14. Relación con el caso 2 — historia útil

I31 también reduce la cuestión que había quedado abierta en el caso 2.

No es necesario conservar toda la historia anterior por el mero hecho de ser historia.

La investigación ha mostrado que partes de la trayectoria pueden eliminarse sin pérdida:

```text
datos brutos
justificación textual
valores absolutos
formas anteriores de representación
```

si continúa disponible aquello que mantiene una posibilidad pertinente.

Por tanto, la noción de:

```text
historia útil
```

queda funcionalmente subordinada a preguntas del tipo:

```text
¿qué posibilidad posterior depende todavía
de esta parte del pasado?
```

En I31 esa función concreta fue:

```text
defender R
```

No aparece fundamento positivo para abrir ahora una investigación independiente sobre conservación general de historial.

---

# 15. Relación con PV-006

PV-006 establece, en síntesis, que cuando la plataforma introduce un cambio que afecta a un material o trabajo debe preservar suficientemente, en la situación resultante, las posibilidades que continúen siendo pertinentes.

I31 ha identificado una de esas posibilidades:

```text
posibilidad de defender posteriormente un resultado
```

y ha demostrado que puede perderse aunque el resultado físico o lógico continúe disponible.

La estructura es:

```text
situación inicial
→ R defendible

cambio / reducción
→ R sigue presente
→ desaparece C o E*
→ R deja de ser defendible
```

Esto constituye directamente un caso de:

```text
pérdida de una posibilidad pertinente
como consecuencia de una transformación
```

Por tanto, en el nivel Product:

> **el resultado de I31 queda absorbido por PV-006.**

No aparece una exigencia independiente que requiera formular un nuevo Product Value.

---

# 16. Por qué la absorción por PV-006 no vuelve trivial I31

Que el resultado quede comprendido por PV-006 no significa que I31 haya sido redundante.

Antes de I31 no estaba determinado que:

```text
defender R
```

fuera una posibilidad funcionalmente distinguible de:

```text
conservar R
recuperar R
reutilizar R
```

I31 ha demostrado precisamente esa diferencia.

También ha reducido qué significa preservar suficientemente esa posibilidad.

PV-006 proporciona el compromiso general.

I31 proporciona una determinación funcional concreta de una clase de posibilidad cubierta por ese compromiso.

---

# 17. Relación con PV-005

Los experimentos también muestran una diferencia entre:

```text
la persona comprueba la inferencia
```

y:

```text
la persona acepta la conclusión del sistema
```

Esto es compatible con PV-005 y con la exigencia de determinación humana efectiva.

Sin embargo, I31 no ha investigado quién tiene autoridad para decidir ni ha demostrado una nueva exigencia de agencia independiente.

Por tanto:

> I31 no modifica ni amplía PV-005.

---

# 18. Relación con la Realization integrada cerrada

La Realization integrada ejercitó:

- incorporación;
- elaboración;
- evolución;
- decisión humana;
- interrupción;
- recuperación;
- continuación;
- reutilización en un contexto distinto.

No ejercitó específicamente:

```text
resultado obtenido
+
criterio justificativo
+
base justificativa
+
transformación o reducción
+
conservación o pérdida de defendibilidad
```

Por tanto:

```text
I31 no exige nuevo Product Value
```

pero:

```text
I31 sí identifica una diferencia funcional
no ejercitada por la Realization integrada.
```

---

# 19. ¿Exige otra derivación?

Sí, pero su naturaleza debe delimitarse.

No se justifica:

```text
nuevo Product Value                 ✗
nueva investigación conceptual      ✗
Architecture                         ✗
Implementation                       ✗
feature concreta                     ✗
```

Sí existe fundamento positivo para una:

> **derivación de Realization mínima centrada en la conservación de defendibilidad.**

La pregunta de esa derivación no será:

> ¿cómo implementamos explicaciones?

sino:

> ¿cuál es la realización mínima capaz de ejercer que un resultado siga siendo defendible después de una transformación, preservando suficientemente el criterio y una base comprobable sin imponer una representación concreta?

---

# 20. Límite mínimo de la futura derivación

Una eventual Realization deberá poder distinguir al menos:

```text
C  criterio
E* base justificativa
R  resultado
```

y permitir una trayectoria del tipo:

```text
constitución de C + E* + R
↓
transformación/reducción
↓
R permanece
↓
comprobación humana de que C + E* todavía justifican R
```

También deberá existir un contraste causal en el que:

```text
R permanece
pero desaparece C o la capacidad comprobable de E*
↓
defendibilidad se pierde
```

No deberá presuponerse:

- historial completo;
- explicación automática;
- grafo;
- provenance;
- versionado;
- IA explicativa;
- base de datos;
- arquitectura específica.

---

# 21. Clasificación final de I31

**A. DIFERENCIA FUNCIONAL DEMOSTRADA Y REDUCIDA EN EL ALCANCE EJERCITADO.**

Se ha demostrado que:

```text
resultado disponible
≠
resultado defendible
```

y se ha identificado un residuo funcional estable:

```text
criterio pertinente
+
base justificativa suficientemente comprobable
```

No se ha identificado un nuevo compromiso Product independiente.

El resultado queda comprendido por PV-006.

---

# 22. Estado final

```text
I31: CERRADA
```

Resultado:

```text
Diferencia funcional:
DEMOSTRADA

Residuo funcional:
IDENTIFICADO EN EL ALCANCE EJERCITADO

Nuevo Product Value:
NO JUSTIFICADO

Nueva investigación inmediata:
NO JUSTIFICADA

Derivación de Realization:
JUSTIFICADA
```

---

# 23. Próxima actuación

La siguiente actuación justificable es:

> **derivar una Realization mínima para ejercer la conservación de defendibilidad bajo transformación o reducción.**

La derivación deberá comenzar desde el resultado de I31 y no desde una solución técnica.

No deberá modificarse código hasta que esa derivación determine:

1. la diferencia mínima que debe ejercitarse;
2. el caso mínimo;
3. los estados necesarios;
4. los invariantes;
5. el criterio de éxito y falsación;
6. si una nueva Realization es efectivamente necesaria o si una ya existente puede ampliarse sin alterar su cierre histórico.
