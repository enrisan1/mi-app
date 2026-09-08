# Prueba ciega de R-EXP-RCA-01 v2

## Estado

**Consolidado.**

Este documento registra la primera prueba con material no inspeccionado previamente de la realización congelada `R-EXP-RCA-01 v2`.

La realización sometida a prueba fue congelada antes de seleccionar la aportación candidata.

---

# 1. Realización sometida a prueba

Archivo:

```text
experiments/r-exp-rca-01/r_exp_rca01_v2.py
```

Commit de congelación:

```text
9c1866b
```

SHA-256:

```text
1df7a7745e8ed8772ff49d4a348f01e8b953312bab6c422dfff5ffae864d93b6
```

Parámetros congelados:

```text
TOP_K = 8
CORE_SIZE = 5
MIN_GAP = 15
MAX_SPECIALISTS_PER_CHANNEL = 2
RRF_K = 60
ORGANIZATIONAL_MAX_WORDS = 8
```

---

# 2. Condición de la prueba

La candidata fue seleccionada antes de inspeccionar mediante el recuperador su relación con el corpus.

No se modificaron previamente:

- algoritmo;
- parámetros;
- canales;
- heurística organizativa;
- presentación núcleo/reserva.

Los casos utilizados durante la prueba inicial, el diagnóstico y la regresión no se utilizarán para modificar la realización durante esta prueba.

---

# 3. Archivo candidato

Archivo:

```text
Madre Patria - Marcelo Gullo.md
```

Unidad humana seleccionada:

```text
L4–L10
```

La selección se realizó mediante una regla neutral: utilizar la primera unidad sustantiva completa del nuevo archivo.

---

# 4. Aportación candidata

La unidad seleccionada comprende:

- el cuestionamiento sobre el derecho a conquistar;
- la prioridad de la justicia frente al poder o la riqueza;
- la suspensión de nuevas conquistas ordenada por Carlos V en 1550;
- la valoración atribuida a Lewis Hanke sobre conquista y justicia.

La relación de esta aportación con el corpus no ha sido inspeccionada antes de fijarla como candidata.

---

# 5. Corpus

Corpus de comparación:

```text
Y tú de quién eres.md
```

La búsqueda manual en el corpus queda suspendida hasta obtener la salida de la realización congelada.

---

# 6. Secuencia de prueba

```text
candidata fijada
↓
integridad de v2
↓
ejecución sin reajuste
↓
conservación de salida
↓
evaluación humana
↓
evaluación experimental
```

---

# 7. Estado previo a la ejecución

```text
candidata
→ fijada

relación con el corpus
→ no inspeccionada

v2
→ congelada

salida
→ todavía no observada

evaluación humana
→ todavía no realizada
```

---

# 8. Ejecución de la realización congelada

La realización congelada se ejecutó sobre:

```text
Corpus:
Y tú de quién eres.md

Candidata:
Madre Patria - Marcelo Gullo.md

Unidad humana:
L4–L10
```

La ejecución se realizó sin modificar:

```text
algoritmo
parámetros
canales
heurística organizativa
presentación
```

Los parámetros utilizados fueron exactamente los congelados:

```text
K = 8
núcleo = 5
gap >= 15
máximo de especialistas por canal = 2
RRF-k = 60
```

La ejecución informó:

```text
Corpus:
1196 párrafos

Textos únicos indexados:
554

Pool intermedio:
19

Núcleo principal:
5

Reserva especializada:
5
```

No se realizó ninguna búsqueda manual en el corpus antes de obtener esta salida.

---

# 9. Aportación sometida a comparación

La candidata seleccionada estaba compuesta por cuatro unidades físicas principales:

```text
L4
L6
L8
L10
```

y contenía conjuntamente:

- el cuestionamiento sobre el derecho de conquista;
- la afirmación de excepcionalidad histórica de España;
- una justificación moral basada en la primacía de lo justo frente al poder y la riqueza;
- la detención de la conquista ordenada por Carlos V;
- la fecha exacta del 15 de abril de 1550;
- una valoración atribuida a Lewis Hanke sobre la conquista española y la justicia.

La realización no recibió ninguna clasificación previa de estos elementos como nuevos, redundantes o complementarios.

---

# 10. Núcleo principal recuperado

La presentación principal produjo cinco antecedentes.

Para la evaluación humana resultaron especialmente relevantes los siguientes.

## 10.1. Antecedente A

Ubicaciones:

```text
L248
L388
L665
L1622
L1713
L1940
```

El antecedente expone:

- convocatoria de teólogos y juristas;
- discusión sobre la legitimidad de la conquista;
- excepcionalidad del cuestionamiento;
- intervención de Carlos V.

Las distintas ubicaciones corresponden al mismo texto recuperado por el sistema.

Por tanto, antes incluso de comparar con la candidata, la presentación hizo visible que un mismo contenido aparece físicamente en múltiples lugares del corpus.

---

## 10.2. Antecedente C

Ubicaciones:

```text
L693–L694
L1968–L1969
```

Se trata de una nota documental relacionada con:

- Leyes Nuevas de 1542;
- encomiendas;
- Bartolomé de las Casas;
- Ginés de Sepúlveda;
- detención temporal de la expansión y conquista.

Las dos ubicaciones contienen el mismo material recuperado.

Su formulación sobre la detención de la conquista es breve y general.

---

# 11. Reserva especializada recuperada

La reserva especializada produjo cinco señales secundarias.

La señal que adquirió mayor importancia durante la comparación humana fue recuperada por `CHAR`.

## 11.1. Antecedente B

Ubicaciones:

```text
L966
L1231
L2228
L2477
```

Contenido:

```text
Es el único imperio en la historia de la humanidad
que detuvo su avance para cuestionarse
si era moral el conquistar otros territorios ajenos.
```

Perfil de recuperación:

```text
WORD = 45
CHAR = 4
LSA  = 68

gap = 41
```

El antecedente no entró en el núcleo principal.

Fue conservado exclusivamente debido al mecanismo de reserva especializada.

Las cuatro ubicaciones corresponden al mismo texto recuperado.

---

# 12. Comparación humana

Después de obtener la salida de la realización congelada se realizó la comparación humana entre:

```text
candidata L4–L10
```

y los antecedentes recuperados.

La evaluación no se realizó sobre la base de scores o rangos.

Se comparó el contenido documental de las aportaciones.

---

# 13. Evaluación humana del antecedente A

El antecedente A aparece en:

```text
L248
L388
L665
L1622
L1713
L1940
```

Todas estas ubicaciones contienen el mismo contenido recuperado.

Esto genera dos cuestiones distintas:

```text
1. relación entre A y la candidata nueva;

2. necesidad de conservar múltiples
   apariciones físicas de A en el corpus.
```

Ambas deben mantenerse separadas.

---

## 13.1. Relación con L4

La candidata L4 afirma esencialmente que era la primera y única vez que una unidad política se cuestionaba si tenía derecho a conquistar un territorio.

La evaluación humana determinó que ese contenido se encuentra suficientemente representado por A.

Por tanto:

```text
L4
→ no necesita incorporarse
```

La razón no es una clasificación automática de duplicación.

La persona determina que la aportación funcional de L4 ya está suficientemente realizada por el antecedente existente.

---

## 13.2. Relación con L6

L6 introduce una justificación adicional:

```text
poder
y
riqueza
no constituyen el criterio último

↓

lo decisivo es aquello que se considera justo
```

La evaluación humana considera que esta dimensión moral no está suficientemente expresada por A.

Por tanto:

```text
L6
→ conservar
```

L6 no se conserva simplemente por utilizar palabras diferentes.

Se conserva porque introduce una explicación del fundamento moral atribuido a la actuación.

---

## 13.3. Multiplicidad física de A

La recuperación mostró seis ubicaciones del mismo antecedente.

La primera valoración humana es que no parece necesario conservar automáticamente las seis.

Sin embargo:

```text
igualdad textual
≠
redundancia funcional demostrada
```

Antes de eliminar copias deberá comprobarse si alguna de las ubicaciones desempeña una función contextual distinta debido a:

- posición;
- procedencia;
- estructura documental;
- relación con material vecino;
- función de recordatorio;
- cualquier otra razón local.

Por tanto, la posible depuración del grupo A queda pendiente de una inspección contextual posterior.

No forma parte de la decisión de incorporación de la candidata.

---

# 14. Evaluación humana del antecedente B

El antecedente B aparece en:

```text
L966
L1231
L2228
L2477
```

Las cuatro ubicaciones contienen el mismo texto recuperado.

Su contenido expresa directamente:

```text
detención del avance
+
cuestionamiento moral
+
excepcionalidad histórica
```

La evaluación humana considera que B constituye una formulación mejor que una parte de L8.

---

## 14.1. Relación con L8

L8 contiene al menos dos aportaciones distinguibles.

### Aportación 1

La parte inicial incorpora:

- la fecha exacta del hecho;
- la referencia específica al 15 de abril de 1550;
- una explicación relacionada con la motivación personal y moral atribuida al rey.

Esta parte se considera útil.

Por tanto:

```text
parte inicial de L8
→ conservar
```

---

### Aportación 2

La parte posterior vuelve a expresar esencialmente:

```text
detención de la conquista
+
cuestionamiento moral
```

El antecedente B realiza esta función de manera considerada superior por la persona.

Por tanto:

```text
parte posterior de L8
→ no incorporar
```

La decisión resulta de una comparación entre formulaciones disponibles, no de una etiqueta automática de redundancia.

---

## 14.2. Incidencia efectiva de la reserva

Este resultado tiene especial importancia experimental.

B no pertenecía al núcleo.

Su perfil era:

```text
WORD = 45
CHAR = 4
LSA  = 68
```

La fuerte señal de `CHAR` habría quedado oculta por una presentación limitada al consenso.

La reserva especializada conservó el antecedente.

Posteriormente, la persona utilizó ese antecedente para decidir que parte de L8 no debía incorporarse.

Por tanto, se observa la trayectoria:

```text
señal especializada
↓
reserva
↓
antecedente preservado
↓
comparación humana
↓
cambio efectivo en la decisión
de incorporación
```

---

# 15. Evaluación humana del antecedente C

El antecedente C aparece en:

```text
L693–L694
L1968–L1969
```

Las dos ubicaciones contienen el mismo material.

La referencia a la detención de la conquista aparece de forma:

```text
general
+
breve
+
documental
```

La evaluación humana considera que ese contenido está mejor realizado por:

```text
A / L248
B / L966
y partes útiles de la nueva candidata L4–L10
```

Por tanto, C aparece como material documental potencialmente superado.

Sin embargo, antes de eliminar alguna de sus apariciones deberá comprobarse su función contextual.

La prueba no transforma automáticamente:

```text
contenido superado
```

en:

```text
borrar archivo o párrafo
```

---

# 16. Evaluación humana de L10

L10 introduce una valoración atribuida a Lewis Hanke.

La persona considera útil conservarla porque proporciona una perspectiva distinta de la de los protagonistas directamente implicados en los acontecimientos.

La valoración se interpreta como una voz:

```text
posterior temporalmente
+
externa nacionalmente
```

respecto del acontecimiento descrito.

Por tanto:

```text
L10
→ conservar
```

El valor atribuido a esta unidad no consiste necesariamente en aportar un hecho histórico completamente nuevo.

Su aportación es también documental y perspectivística:

```text
hechos conocidos
+
valoración desde una voz externa
```

---

# 17. Decisión humana final sobre la candidata

La candidata completa no recibe una única clasificación global.

La evaluación humana la descompone:

```text
L4
→ no incorporar
→ contenido suficientemente cubierto por A

L6
→ conservar
→ añade justificación moral

L8
→ conservar parcialmente

   parte inicial
   → conservar
   → fecha exacta
   → explicación/motivación moral

   parte posterior
   → no incorporar
   → B realiza mejor esa función

L10
→ conservar
→ aporta una perspectiva externa
   considerada documentalmente útil
```

Por tanto:

```text
candidata L4–L10
≠ completamente redundante

candidata L4–L10
≠ completamente nueva
```

La comparación permite una decisión más fina:

```text
descomposición
+
selección
+
conservación parcial
```

---

# 18. Incidencia sobre la situación humana original

Antes de disponer del recuperador, una situación posible era:

```text
nuevo bloque documental
↓
contiene algún elemento útil
↓
se conserva o copia el bloque completo
↓
crecimiento progresivo del corpus
↓
repetición y dificultad posterior
```

En esta prueba se produjo una trayectoria diferente:

```text
nuevo bloque documental
↓
recuperación previa
↓
antecedentes concretos
↓
comparación humana
↓
separación de contenido
↓
parte se descarta
+
parte se conserva
+
parte se conserva parcialmente
```

Por tanto, la recuperación incidió efectivamente en la actuación humana posterior.

No se limitó a mostrar coincidencias.

---

# 19. Observación O-V2-01 — Utilidad ciega de la presentación estratificada

En una aportación no utilizada durante:

- diseño;
- diagnóstico;
- regresión;

la realización presentó antecedentes suficientes para efectuar una comparación humana práctica.

La evidencia permite registrar:

> **O-V2-01 — Utilidad ciega de la presentación estratificada.** La combinación de núcleo principal y reserva especializada permitió localizar antecedentes utilizables para comparar una aportación nueva sin realizar previamente una búsqueda manual extensa por el corpus.

Esta observación tiene alcance local.

No demuestra suficiencia general.

---

# 20. Observación O-V2-02 — Incidencia efectiva de una señal especializada

El antecedente B:

```text
L966
L1231
L2228
L2477
```

no entró en el núcleo.

Fue conservado por `CHAR` en la reserva especializada.

La persona determinó posteriormente que B realizaba mejor que parte de L8 una función documental relevante.

Como consecuencia, parte de L8 no será incorporada.

Por tanto:

> **O-V2-02 — Incidencia efectiva de una señal especializada.** En la primera prueba ciega de v2, una señal preservada exclusivamente por la reserva especializada incidió efectivamente en la decisión humana de no incorporar una parte de la candidata.

Esta observación proporciona apoyo empírico independiente de los casos utilizados para diseñar la reserva.

---

# 21. CR-V2-07 — Preservación distinguible de especialización

Antes de la prueba se había establecido:

```text
señal especializada
→ debe poder conservarse

pero

especialización
≠ pertinencia
```

La nueva prueba muestra:

```text
antecedente B
→ no alcanza núcleo

CHAR
→ señal fuerte

reserva
→ lo conserva

comparación humana
→ determina pertinencia efectiva

decisión
→ parte de L8 no se incorpora
```

Por tanto:

```text
CR-V2-07
→ recibe corroboración ciega local
```

No se establece que:

- todo especialista sea útil;
- `CHAR` sea siempre el canal adecuado;
- `gap >= 15` sea óptimo;
- dos especialistas por canal sea un límite general.

---

# 22. Ruido observado

La prueba también mostró resultados de utilidad desigual.

En el núcleo aparecieron unidades relacionadas de manera más lateral con la candidata.

Entre ellas se encontraban contenidos sobre:

- lengua e Hispanidad;
- recursos, oro y plata;
- notas documentales.

La reserva también contenía señales laterales.

Por tanto:

```text
recuperación útil
→ SÍ

recuperación libre de ruido
→ NO
```

La existencia de ruido no impidió la comparación humana en esta prueba.

Tampoco permite afirmar que la priorización actual sea óptima.

---

# 23. LR-V2-01 — Detección organizativa incompleta

La limitación observada durante la regresión reapareció en la prueba ciega.

Entró en el núcleo una unidad con forma de nota documental:

```text
- leyes nuevas de 1542. Mismo video.
Encomiendas min 42.
Bartolomé de las casas [...]
detención dos años de la expansión y conquista [...]
```

La unidad no cumple la forma de rótulo breve reconocida por la heurística actual y por ello permaneció elegible.

Esto permite reforzar:

> **LR-V2-01 — Detección organizativa incompleta.** La heurística provisional puede permitir que unidades documentales no sustantivas ocupen plazas principales cuando no presentan la forma de rótulo breve reconocida por la regla.

La limitación ya no aparece únicamente en un caso de regresión conocido.

Ha reaparecido durante una prueba con material nuevo.

Por tanto:

```text
LR-V2-01
→ corroborada también mediante evidencia ciega local
```

La realización congelada no se modifica como consecuencia de esta observación.

---

# 24. Multiplicidad física visible

La presentación mostró múltiples ubicaciones para varios antecedentes:

```text
A
→ 6 ubicaciones

B
→ 4 ubicaciones

C
→ 2 ubicaciones
```

El recuperador había deduplicado esos textos para el ranking y conservado sus ubicaciones.

Durante la comparación humana esta información hizo visible una posible redundancia física interna del corpus.

Puede registrarse la siguiente observación:

> **O-V2-03 — Visibilidad de multiplicidad física.** La conservación de todas las ubicaciones de un mismo texto recuperado permite hacer visible a la persona que una misma configuración textual está presente en múltiples posiciones del corpus.

La observación no implica:

```text
multiplicidad
→ borrar automáticamente
```

porque diferentes apariciones pueden desempeñar funciones contextuales distintas.

La decisión de depuración requiere inspección humana posterior.

---

# 25. Separación entre incorporación y depuración

La prueba ha generado dos líneas de actuación distintas.

## 25.1. Incorporación de la candidata

Ya existe una decisión humana sobre:

```text
L4
L6
L8
L10
```

---

## 25.2. Depuración del corpus existente

Se han identificado grupos que pueden requerir revisión:

```text
A:
248 / 388 / 665 / 1622 / 1713 / 1940

B:
966 / 1231 / 2228 / 2477

C:
693–694 / 1968–1969
```

La segunda actuación no deberá confundirse con la primera.

Antes de eliminar copias deberá comprobarse:

```text
posición
contexto
procedencia
función documental
```

La prueba termina antes de realizar esa depuración.

---

# 26. Evaluación de los criterios fijados antes de la prueba

## 26.1. Recuperación

Pregunta:

```text
¿Aparecen antecedentes que permitan
realizar una comparación práctica?
```

Resultado:

```text
SÍ
```

A y B resultaron directamente utilizables.

---

## 26.2. Manejabilidad

Pregunta:

```text
¿El núcleo principal constituye
una cantidad revisable sin búsqueda
manual extensa?
```

Resultado:

```text
SÍ, con reserva
```

Cinco antecedentes constituyeron una cantidad manejable.

Sin embargo, parte del núcleo presentó ruido.

---

## 26.3. Reserva especializada

Pregunta:

```text
¿La reserva preserva alguna señal útil
que el núcleo podría ocultar?
```

Resultado:

```text
SÍ
```

El antecedente B constituye un caso positivo claro.

---

## 26.4. Ruido

Pregunta:

```text
¿El núcleo o la reserva introducen
ruido que dificulte la comparación?
```

Resultado:

```text
SÍ
```

Existió ruido tanto en núcleo como en reserva.

No impidió completar la comparación en esta prueba.

---

## 26.5. Procedencia

Pregunta:

```text
¿Puede la persona volver desde los
antecedentes a sus ubicaciones?
```

Resultado:

```text
SÍ
```

Las ubicaciones permanecieron visibles.

Además permitieron detectar multiplicidad física.

---

## 26.6. Incidencia humana

Pregunta:

```text
¿La recuperación permite una decisión
humana mejor informada?
```

Resultado:

```text
SÍ
```

La persona pudo:

- descartar L4;
- conservar L6;
- conservar parcialmente L8;
- descartar una parte de L8 debido a B;
- conservar L10.

---

# 27. Evaluación de H-RCA-03

`H-RCA-03 — Recuperación multicanal con presentación estratificada` proponía que una realización capaz de:

1. representar una aportación con extensión adecuada;
2. conservar señales complementarias;
3. distinguir material organizativo y sustantivo;
4. deduplicar candidatos;
5. presentar separadamente consenso y especialización;
6. mantener la decisión en la persona;

podría ofrecer un conjunto manejable de antecedentes sin perder señales útiles detectadas únicamente por un canal.

La prueba proporciona:

```text
unidad humana multilínea
→ operativa

generación multicanal
→ operativa

núcleo
→ produjo antecedentes útiles

reserva
→ preservó antecedente decisivo

procedencia
→ preservada

decisión humana
→ efectivamente realizada
```

Al mismo tiempo:

```text
detección organizativa
→ incompleta

ruido
→ presente
```

Por tanto:

> **H-RCA-03 recibe una primera corroboración ciega local.**

No se considera validada de forma general.

---

# 28. Relación con H-RCA-02

La hipótesis anterior:

`H-RCA-02 — Recuperación comparativa previa`

recibía apoyo parcial tras la primera prueba.

La nueva prueba aporta evidencia adicional de que la recuperación previa puede presentar antecedentes suficientes para efectuar una comparación humana antes de incorporar material.

Sin embargo, no se establece todavía:

- suficiencia general;
- comportamiento en otros corpus;
- estabilidad ante otros tipos de aportación;
- optimalidad de la cantidad presentada.

Por tanto, su estatuto no deberá ampliarse más allá del alcance empírico observado.

---

# 29. Qué no demuestra la prueba

La prueba no demuestra:

- que `K=8` sea óptimo;
- que `CORE_SIZE=5` sea óptimo;
- que `gap=15` sea óptimo;
- que dos especialistas por canal sea una cuota general;
- que `RRF-k=60` sea óptimo;
- que la heurística de ocho palabras sea suficiente;
- que toda reserva contenga material útil;
- que todo núcleo sea limpio;
- que la v2 funcione igual en otros corpus;
- que la v2 determine novedad o redundancia;
- que deban eliminarse automáticamente las copias físicas detectadas;
- que exista una nueva exigencia de Product;
- que exista una nueva necesidad arquitectónica.

---

# 30. Resultado consolidado de la prueba

La primera prueba ciega de `R-EXP-RCA-01 v2` produjo una trayectoria completa:

```text
aportación nueva
↓
selección previa de unidad humana
↓
realización congelada
↓
recuperación multicanal
↓
núcleo principal
+
reserva especializada
↓
antecedentes concretos
↓
comparación humana
↓
decisión diferenciada de incorporación
```

La candidata no fue tratada como un bloque indivisible.

La comparación permitió decidir:

```text
L4
→ no incorporar

L6
→ conservar

L8
→ conservar parcialmente

L10
→ conservar
```

Una señal especializada de la reserva influyó directamente en esta decisión.

---

# 31. Resultados empíricos derivados

Quedan registrados:

## O-V2-01 — Utilidad ciega de la presentación estratificada

La presentación núcleo/reserva permitió realizar una comparación práctica sobre una aportación no utilizada durante el desarrollo de la revisión.

---

## O-V2-02 — Incidencia efectiva de una señal especializada

Una señal conservada exclusivamente mediante la reserva especializada incidió directamente en una decisión humana de no incorporar parte de la candidata.

---

## O-V2-03 — Visibilidad de multiplicidad física

La conservación de todas las ubicaciones de textos deduplicados hizo visible la presencia de múltiples copias físicas en el corpus.

---

## LR-V2-01 — Detección organizativa incompleta

La limitación previamente observada reapareció con material nuevo y queda corroborada localmente.

---

# 32. Estatuto de los resultados

Los resultados anteriores tienen estatuto:

```text
observación empírica local
```

No:

```text
generalización universal
```

La prueba proporciona evidencia nueva porque:

- la candidata fue fijada antes de observar la salida;
- la realización estaba congelada;
- los parámetros estaban congelados;
- no se inspeccionó previamente la relación con el corpus;
- no se modificó el recuperador durante la evaluación.

---

# 33. Estado de la realización después de la prueba

La prueba no produce ninguna modificación automática de:

```text
r_exp_rca01_v2.py
```

La versión sometida a prueba sigue siendo la identificada por:

```text
Commit:
9c1866b

SHA-256:
1df7a7745e8ed8772ff49d4a348f01e8b953312bab6c422dfff5ffae864d93b6
```

Cualquier modificación posterior deberá constituir una nueva revisión explícita.

No deberá alterar retrospectivamente la realización sometida a esta prueba.

---

# 34. Actuaciones posteriores distinguidas

La prueba deja posibles actuaciones posteriores de naturaleza diferente.

## 34.1. Incorporación documental

Aplicar la decisión humana sobre:

```text
L4
L6
L8
L10
```

---

## 34.2. Revisión de multiplicidad física

Examinar contextual y documentalmente los grupos:

```text
A
B
C
```

antes de decidir si determinadas copias pueden eliminarse.

---

## 34.3. Investigación de LR-V2-01

La detección organizativa incompleta queda ahora mejor fundada empíricamente.

Sin embargo:

```text
capacidad para investigarla
≠
obligación inmediata de modificar la realización
```

Cualquier revisión deberá justificarse separadamente.

---

# 35. Punto de cierre

La primera prueba ciega de `R-EXP-RCA-01 v2` puede cerrarse con el siguiente estado:

```text
candidata nueva
→ probada

realización
→ permaneció congelada

recuperación práctica
→ positiva localmente

núcleo
→ útil pero con ruido

reserva especializada
→ utilidad efectiva observada

procedencia
→ preservada

decisión humana
→ completada

H-RCA-03
→ primera corroboración ciega local

LR-V2-01
→ corroborada localmente con material nuevo

generalización
→ no establecida

depuración del corpus
→ todavía no realizada

modificación de v2
→ no realizada
```

La prueba demuestra localmente que la recuperación previa puede intervenir de forma efectiva en la decisión humana sobre qué conservar de una nueva aportación, sin asumir la responsabilidad de decidir automáticamente novedad, redundancia o incorporación.

---
