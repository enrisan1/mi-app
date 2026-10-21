# Investigación de consecuencias previsibles de actuaciones suficientemente encomendadas

**Fecha de apertura:** 21/10/2026

**Estado:** En progreso

## 1. Origen de la investigación

La investigación se abre después del cierre de la investigación 29.

El estado vigente no deriva automáticamente una nueva actuación de Product,
Realization, Architecture o implementación.

Durante el cierre de la investigación 28 había quedado identificada, sin
fundamento suficiente para abrir automáticamente otra investigación, una
cuestión independiente:

> la posible necesidad de advertencias preventivas ante consecuencias no
> contempladas de actuaciones suficientemente encomendadas.

Esa cuestión había quedado separada de `PV-005` y `PV-006`, pero no se había
demostrado todavía una situación empírica suficiente que justificara
investigarla por derecho propio.

Con posterioridad se han localizado dos experiencias reales distintas en las
que aparece provisionalmente una misma estructura.

### Caso A — uso del grafo multiagente

La persona encomendó legítimamente una investigación mediante un grafo
multiagente.

La actuación realizó el trabajo solicitado, pero durante su ejecución se
observaron consecuencias adicionales relevantes relacionadas con un consumo
elevado de cuota y con límites de uso.

El conocimiento previo de esas consecuencias habría podido modificar la forma
de encomendar la actuación, por ejemplo utilizando un número menor de agentes
o reservando el grafo completo para actuaciones de mayor importancia.

### Caso B — archivo local y fallo posterior de sincronización

La persona creó legítimamente un archivo en el sistema de origen.

El archivo era válido y estaba disponible localmente, pero posteriormente la
sincronización con otro dispositivo dejó al menos un elemento sin completar
correctamente la trayectoria prevista.

Con la evidencia histórica actualmente recuperada no se ha demostrado todavía
la causa exacta del fallo ni que determinadas características del nombre del
archivo fueran responsables de él.

Por tanto, tampoco se ha demostrado todavía que un conocimiento previo de esa
causa hubiera permitido modificar la actuación inicial.

Los dos casos pertenecen a mecanismos técnicos diferentes:

```text
Caso A
→ consumo de un recurso limitado

Caso B
→ compatibilidad de un material dentro de una trayectoria entre dispositivos
```

La investigación no presupone que ambos casos expresen realmente una misma
diferencia humana.

Su apertura se justifica precisamente para intentar reducir o falsar esa
aparente coincidencia.

---

## 2. Pregunta de investigación

> Cuando una persona ha encomendado suficientemente una actuación y esa
> actuación puede producir una consecuencia adicional previsible que podría
> modificar razonablemente la forma en que la persona la encomendaría, ¿existe
> una diferencia humana independiente entre poder considerar esa consecuencia
> antes de la actuación y conocerla únicamente después de iniciarla o
> ejecutarla?

La investigación deberá reducir esta pregunta antes de derivar cualquier
compromiso, advertencia, mecanismo, estructura o realización.

---

## 3. Situación humana inicial

La situación candidata puede representarse provisionalmente así:

```text
persona
        ↓
encomienda suficientemente A
        ↓
A puede ejecutarse correctamente
        +
A puede producir C
        ↓
C no constituye la finalidad solicitada
        +
C es previsible antes de A
        +
C puede ser relevante para cómo
la persona encomendaría A
```

Se comparan inicialmente dos situaciones.

### S-A — Consecuencia conocida suficientemente antes de actuar

```text
persona quiere encomendar A
        ↓
C puede entrar en su consideración
        ↓
la persona puede:
    mantener A
    modificar A
    elegir A'
    o no ejecutar todavía A
        ↓
actuación resultante
```

### S-B — Consecuencia conocida después

```text
persona encomienda A
        ↓
A comienza o se ejecuta
        ↓
C se manifiesta o se hace reconocible
        ↓
la persona descubre entonces
una consecuencia que habría podido
modificar la forma de encomendar A
```

La diferencia entre `S-A` y `S-B` constituye el primer objeto de falsación.

---

## 4. Diferencia inicialmente observada

La investigación no parte de que toda consecuencia deba comunicarse ni de que
toda actuación requiera una advertencia.

La diferencia provisional es más limitada:

```text
misma finalidad humana
        +
actuación suficientemente encomendada
        +
consecuencia adicional previsible C
        +
C puede alterar razonablemente
la forma de realizar la encomienda
        ↓
diferencia entre:

C disponible para consideración previa

y

C conocida sólo después
de iniciar o ejecutar la actuación
```

Debe comprobarse si esta diferencia:

- existe realmente en ambos casos;
- es humanamente relevante;
- depende sólo de las particularidades técnicas de cada caso;
- o puede reducirse a compromisos ya consolidados.

---

## 5. Primera hipótesis candidata

### H-I30-01 — Consideración previa de consecuencias relevantes

Hipótesis provisional:

> Cuando una actuación suficientemente encomendada puede producir una
> consecuencia adicional previsible que podría modificar razonablemente la
> forma en que la persona la encomendaría, puede existir una diferencia humana
> relevante entre que esa consecuencia pueda entrar en consideración antes de
> la actuación y que sólo sea conocida después de iniciarla o ejecutarla.

Esta hipótesis no constituye todavía:

- un compromiso de Product;
- una obligación general de advertencia;
- una necesidad de Realization;
- una responsabilidad arquitectónica;
- una clasificación general de riesgos;
- ni una exigencia de implementación.

Deberá ser reducida o falsada.

---

## 6. Relación provisional con PV-005 y PV-006

### PV-005

`PV-005 — Determinación humana efectiva` protege, dentro de su alcance, una
decisión relevante cuya resolución todavía corresponde a la persona mientras
las alternativas permanecen efectivamente abiertas.

En los casos que fundamentan I30, la actuación ya puede haber sido
suficientemente encomendada.

Por tanto, la investigación deberá comprobar si:

```text
consecuencia C
        ↓
forma parte todavía de una decisión
cuya resolución corresponde a la persona
        ↓
PV-005 puede absorber suficientemente el caso
```

o si, por el contrario:

```text
la actuación A
✔ suficientemente encomendada

pero

la consideración previa de C
→ introduce una diferencia distinta
```

I30 no deberá derivar una exigencia nueva si la diferencia puede reconstruirse
suficientemente mediante `PV-005`.

### PV-006

`PV-006 — Continuidad de posibilidades pertinentes` resulta aplicable cuando
un cambio introducido por la plataforma afecta a un material o trabajo y deben
preservarse suficientemente las posibilidades que continúan siendo
pertinentes.

En el caso de sincronización podría existir posteriormente una pérdida de
disponibilidad o participación suficientemente cubierta por `PV-006`.

La investigación deberá distinguir:

```text
después del cambio
→ preservación de posibilidades pertinentes
→ posible ámbito de PV-006
```

de:

```text
antes de la actuación
→ posibilidad de considerar una consecuencia
que podría modificar la encomienda
→ objeto candidato de I30
```

I30 no deberá derivar una exigencia independiente si esa distinción no resiste
la reducción frente a `PV-006`.

### Residuo provisional

La diferencia todavía no absorbida que deberá investigarse es:

```text
A está suficientemente encomendada
        +
A puede ejecutarse correctamente
        +
A posee una consecuencia adicional C
        +
C es previsible
        +
C puede cambiar razonablemente
cómo la persona encomendaría A
        +
C sólo entra en consideración
después de iniciar o ejecutar A
```

Debe comprobarse si este residuo es real, independiente y humanamente
relevante.

---

## 7. No presuposiciones

La apertura de esta investigación no establece:

- que toda consecuencia deba anticiparse;
- que toda consecuencia previsible sea relevante;
- que la plataforma pueda determinar autónomamente qué importa a la persona;
- que deba existir una clasificación general de riesgos;
- que deba existir una clasificación general de consecuencias;
- que toda actuación requiera confirmación;
- que toda actuación requiera advertencia;
- que toda consecuencia deba mostrarse antes de actuar;
- que la persona deba aceptar explícitamente cada consecuencia;
- que el sistema deba impedir una actuación;
- que el sistema pueda revocar una encomienda humana;
- que deba existir un mecanismo universal de consentimiento;
- que deba existir un sistema general de estimación de costes;
- que deba existir un sistema general de compatibilidad;
- que los casos de cuota y sincronización sean estructuralmente equivalentes;
- que `PV-005` resulte insuficiente;
- que `PV-006` resulte insuficiente;
- una nueva vertical de Product;
- una realización;
- una arquitectura;
- una interfaz de advertencias;
- ni modificación de código.

La investigación deberá derivar cualquier necesidad posterior únicamente a
partir de diferencias que resistan falsación.

---

## 8. Preguntas de falsación iniciales

La investigación deberá contrastar, entre otras, las siguientes posibilidades:

1. ¿El caso del grafo multiagente se reduce completamente a un problema local de
   gestión de cuota?

2. ¿El incidente de Syncthing puede atribuirse suficientemente a una causa
   previsible anterior a la actuación inicial, o sólo se ha demostrado un fallo
   posterior de sincronización cuya causa permanece indeterminada?

3. ¿La semejanza entre ambos casos desaparece al eliminar el vocabulario común
   de «consecuencia» y «advertencia»?

4. ¿Puede una actuación estar suficientemente encomendada si una consecuencia
   que modificaría materialmente la encomienda permanece desconocida?

5. ¿La diferencia observada pertenece todavía a una decisión protegida por
   `PV-005`?

6. ¿La pérdida observada en el caso de sincronización queda suficientemente
   absorbida por `PV-006`?

7. ¿Es necesaria una consecuencia efectivamente conocida por el sistema o basta
   con que exista información accesible para la persona?

8. ¿Qué significa que una consecuencia sea `previsible` sin convertir esa
   propiedad en una obligación general de predicción?

9. ¿Qué significa que una consecuencia sea `relevante` sin atribuir al runtime
   autoridad para determinar autónomamente qué debe importar a la persona?

10. ¿La consecuencia necesita ser reversible o irreversible para que exista la
    diferencia?

11. ¿La diferencia persiste cuando la actuación puede detenerse después de
    descubrir la consecuencia?

12. ¿Persiste cuando la consecuencia puede repararse completamente sin pérdida?

13. ¿Existe alguna situación en la que una consecuencia sea previsible y pueda
    modificar la actuación, pero su conocimiento previo no aporte ninguna
    diferencia humana pertinente?

14. ¿Puede eliminarse uno de los dos casos sin perder el supuesto residuo
    común?

15. ¿Permanece alguna diferencia independiente después de reducir los casos
    frente a `PV-005` y `PV-006`?

---

## 9. Método inmediato

La siguiente actuación no consiste en diseñar una interfaz de advertencias ni
un sistema general de riesgos.

Deberán reconstruirse por separado los dos casos empíricos que fundamentan la
apertura y comprobar en cada uno:

```text
¿qué actuación fue realmente encomendada?

¿fue ejecutada correctamente?

¿qué consecuencia adicional apareció?

¿esa consecuencia era técnicamente previsible?

¿cuándo llegó efectivamente a conocimiento de la persona?

¿habría cambiado realmente la forma de encomendar la actuación?

¿qué diferencia se pierde si la consecuencia sólo se conoce después?

¿la diferencia queda absorbida por PV-005?

¿la diferencia queda absorbida por PV-006?

¿qué elemento puede eliminarse sin perder el fenómeno?

¿qué diferencia, si alguna, permanece independiente?
```

Después deberán compararse ambos casos intentando construir una reducción en la
que no sea necesario postular ningún principio común.

Sólo una diferencia que sobreviva a esa reducción podrá utilizarse como
fundamento para una exigencia posterior.

---

## 10. Estado de apertura

La investigación queda abierta.

Todavía no se ha demostrado:

```text
H-I30-01
→ necesaria

caso de cuota
→ instancia de un fenómeno general

caso de sincronización
→ instancia del mismo fenómeno

consideración previa
→ diferencia humana independiente

consecuencia previsible
→ categoría estructural necesaria

consecuencia relevante
→ determinable por el runtime

advertencia preventiva
→ necesaria

PV-005
→ insuficiente

PV-006
→ insuficiente

nueva vertical de Product
→ derivada

Realization
→ derivada

Architecture
→ derivada

modificación de código
→ derivada
```

La apertura establece únicamente que existen dos experiencias reales
suficientemente distintas como para justificar la investigación reductiva de
su aparente coincidencia.

---

## 11. Casos empíricos iniciales

### 11.1 C-A — Consumo de cuota durante una actuación multiagente

#### Propósito del caso

Reconstruir la utilización real del grafo multiagente y determinar si la
diferencia observada depende exclusivamente de la gestión local de cuota o si
sobrevive al eliminar esa particularidad técnica.

#### Trayectoria inicial

```text
necesidad de investigación
        ↓
encomienda de actuación multiagente
        ↓
ejecución del grafo
        ↓
trabajo solicitado realizado
        +
consumo elevado de cuota
        ↓
avisos y límites de uso
        ↓
cambio posterior de política:
uso selectivo del grafo
```

#### Pregunta específica

> ¿La diferencia entre conocer antes o durante la ejecución el impacto relevante
> sobre la cuota modifica una decisión humana todavía no absorbida por los
> compromisos existentes, o se trata únicamente de una cuestión instrumental de
> gestión de recursos?

---

### 11.2 C-B — Archivo local y fallo posterior de sincronización

#### Propósito del caso

Reconstruir una experiencia real en la que un archivo válido y disponible en
el sistema de origen no completó posteriormente su trayectoria prevista de
sincronización con otro dispositivo.

El caso se mantiene como candidato porque podría revelar una consecuencia
previsible de una actuación inicial correctamente realizada.

Sin embargo, con la evidencia histórica actualmente recuperada no se ha
demostrado todavía la causa exacta del fallo ni que ésta pudiera haberse
conocido suficientemente antes de la actuación inicial.

#### Trayectoria inicial

```text
creación legítima del archivo
        ↓
archivo válido y disponible localmente
        ↓
intento de sincronización
        ↓
al menos un elemento
permanece sin sincronizar
        ↓
causa exacta
?
todavía no demostrada
```

#### Pregunta específica

¿El fallo posterior de sincronización observado revela una consecuencia
previsible de la actuación inicial que habría podido modificar la forma de
encomendarla, o constituye únicamente una incidencia técnica cuya causa y
previsibilidad todavía no están demostradas?

#### Estado empírico

archivo válido y disponible localmente
✔ demostrado

trayectoria de sincronización realmente intentada
✔ demostrado

fallo posterior de sincronización
✔ demostrado

causa atribuida al nombre del archivo
✘ no demostrada con la evidencia recuperada

sincronización correcta tras cambiar el nombre
✘ no demostrada con la evidencia recuperada

capacidad de constituir instancia de H-I30-01
✘ no demostrada

---

### 11.3 Contraste entre ambos casos

La investigación deberá intentar demostrar que:

```text
C-A
≠
C-B
```

en todo aquello que pueda ser estructuralmente relevante.

En particular deberá comprobar si, después de eliminar:

```text
cuota
coste
agentes
Syncthing
nombres de archivo
sistemas de archivos
dispositivos
```

permanece todavía una misma diferencia humana.

Si no permanece, la coincidencia queda falsada.

Si permanece, deberá someterse de nuevo a reducción frente a los compromisos ya
consolidados antes de proponer cualquier consecuencia para Product.

### 11.4 Estado de los casos

```text
C-A — Consumo de cuota durante una actuación multiagente

    ✔ experiencia real localizada
    ✔ consecuencia posterior observada
    ✔ cambio posterior de política de uso observado
    → reconstrucción reductiva realizada
    → pérdida humana independiente por conocimiento tardío no demostrada


C-B — Archivo local y fallo posterior de sincronización

    ✔ experiencia real localizada
    ✔ archivo válido y disponible localmente
    ✔ fallo posterior de sincronización observado
    ✘ causa exacta no demostrada
    ✘ efecto de un cambio de nombre no demostrado
    ✘ pertenencia al mismo fenómeno que C-A no demostrada


coincidencia estructural entre C-A y C-B

    ✘ no demostrada con la evidencia disponible
```

La reconstrucción posterior de C-A y C-B no ha permitido demostrar que C-B
satisfaga las condiciones de la hipótesis ni que ambos casos establezcan una
coincidencia estructural independiente.

---

# 12. Reducción y cierre de I30

## 12.1 Resultado de C-A

La reconstrucción reductiva de `C-A` permitió separar dos niveles.

Por una parte, el caso contiene propiedades contingentes de la modalidad de uso
ejercida:

```text
cuota
ventana temporal concreta
número de agentes
coste relativo del grafo completo
avisos de consumo
interrupciones por límite
```

Estas propiedades explican la política local posterior de uso selectivo, pero no
constituyen por sí mismas una diferencia humana general.

Después de eliminarlas permanece únicamente el siguiente residuo:

```text
una actuación correctamente encomendada
        ↓
produce una consecuencia adicional
        ↓
la consecuencia no forma parte del resultado principal
        ↓
su conocimiento posterior modifica de hecho
la forma de encomendar actuaciones semejantes
```

Sin embargo, la investigación no ha demostrado que, en el primer ejercicio, el
conocimiento tardío eliminara una posibilidad humana concreta que no pudiera
recuperarse después.

El caso puede reconstruirse suficientemente como:

```text
primer ejercicio
        ↓
descubrimiento de una propiedad práctica
        ↓
aprendizaje
        ↓
adaptación de actuaciones posteriores
```

Por tanto:

```text
C-A
→ demuestra aprendizaje práctico
→ demuestra relevancia posterior de la consecuencia
→ no demuestra todavía pérdida humana independiente
  por conocimiento tardío
```

---

## 12.2 Resultado de C-B

`C-B` conserva únicamente los siguientes hechos demostrados:

```text
archivo válido y disponible localmente
✔

trayectoria de sincronización intentada
✔

fallo posterior de sincronización
✔
```

No ha quedado demostrado:

```text
causa exacta del fallo
✘

atribución del fallo al nombre del archivo
✘

sincronización correcta del mismo archivo tras cambiar el nombre
✘

condición de expiración conocida antes de la actuación
✘

oportunidad temporal perdida
✘
```

La revisión específica del componente temporal no ha localizado una estructura
de la forma:

```text
posibilidad disponible
        ↓
condición temporal de expiración
        ↓
persona desconoce esa condición
        ↓
expiración
        ↓
posibilidad deja definitivamente de poder ejercerse
```

La evidencia disponible muestra, en cambio, una incidencia técnica posterior en
una trayectoria de sincronización que continuó siendo reintentable.

Por tanto:

```text
C-B
→ incidente técnico real
→ causa todavía indeterminada
→ no constituye una instancia demostrada de oportunidad temporal expirada
→ no satisface todavía H-I30-01
```

---

## 12.3 Contraste con pérdidas ya absorbidas

Durante la reducción se examinó además un caso histórico en el que:

```text
X y Y
→ permanecían simultáneamente disponibles

después de aceptar Y e interrumpir
→ Y permanecía disponible
→ X dejaba de estar disponible
```

La pérdida de `X` eliminaba posibilidades posteriores todavía pertinentes.

Ese caso demuestra que puede existir una pérdida humana real descubierta después
de una actuación.

Sin embargo, esa diferencia quedó absorbida por el compromiso ya consolidado de
`PV-002`.

Por tanto:

```text
pérdida real
✔

independencia para I30
✘
```

La mera existencia de una pérdida posterior no basta para justificar una nueva
diferencia relativa a consecuencias previas.

---

## 12.4 Contraejemplo de oportunidad temporal

Para intentar falsar la reducción se construyó deliberadamente el siguiente caso
lógico:

```text
existe una actuación P
ya determinada por la persona

+

P sólo conserva el valor buscado
si se realiza antes de T

+

T es conocido o determinable
por la plataforma antes de ocurrir

+

la persona no dispone suficientemente de T

+

T ocurre

+

P deja de poder realizarse
con el valor que dependía de ser anterior a T
```

El caso se formuló de forma que:

```text
la decisión humana sobre P
→ ya está resuelta

la ocurrencia de T
→ no corresponde decidirla a la persona

la posibilidad P
→ no puede preservarse después de T
  porque su valor es constitutivamente anterior a T
```

Este contraejemplo resiste provisionalmente una reducción directa a:

```text
PV-005
→ porque la decisión ya estaba tomada

PV-006
→ porque la oportunidad no continúa existiendo después de T

practicabilidad local de PV-002
→ porque aquella investigación se refería a disponibilidad posterior
  de una aportación y no estableció una teoría general de oportunidades
```

---

## 12.5 Búsqueda empírica del contraejemplo temporal

Se buscó en el material histórico disponible una situación real que satisficiera
simultáneamente:

```text
1. posibilidad P disponible y practicable;
2. persona ya decidida a ejercer P;
3. condición T de expiración;
4. T conocida o determinable por la plataforma;
5. T no disponible suficientemente para la persona;
6. ocurrencia de T;
7. pérdida efectiva de P;
8. descubrimiento posterior;
9. diferencia no absorbida por compromisos existentes.
```

No se localizó un caso histórico que satisfaga simultáneamente todas estas
condiciones.

Los candidatos examinados se reducen respectivamente a:

```text
C-A
→ aprendizaje legítimo y gestión local de recursos

C-B
→ incidencia técnica sin causa ni expiración demostradas

caso X/Y
→ pérdida real ya absorbida por PV-002

otros casos preventivos
→ riesgos conocidos que fueron neutralizados antes de producir pérdida
```

Por tanto:

```text
oportunidad temporal
→ residuo lógico provisional

caso empírico real
→ no localizado

fundamento positivo independiente
→ insuficiente
```

---

## 12.6 Resultado reductivo final

La hipótesis:

```text
H-I30-01 — Consideración previa de consecuencias relevantes
```

no queda confirmada como diferencia humana independiente con la evidencia
actualmente disponible.

La investigación permite establecer:

```text
diferencia descriptiva entre conocer antes y conocer después
✔ posible

pérdida humana independiente demostrada por C-A
✘

pertenencia demostrada de C-B al mismo fenómeno
✘

oportunidad temporal no reducida
por los contrastes realizados
✔ provisionalmente

oportunidad temporal empíricamente demostrada
✘

nuevo compromiso de Product
✘ no derivado

nueva Realization
✘ no derivada

Architecture
✘ no derivada

modificación de código
✘ no derivada
```

La evidencia ejercida no demuestra que la consideración previa de consecuencias
constituya por sí misma una necesidad humana independiente de los compromisos ya
consolidados.

Cuando aparece una pérdida humana real demostrada en los casos estudiados, ésta resulta absorbible por compromisos existentes.

Cuando aparece un residuo conceptualmente no absorbido, falta todavía evidencia
empírica que lo establezca como diferencia humana real.

---

## 12.7 Condición de cierre o reapertura

I30 no deberá avanzar hacia Product, Realization, Architecture o código mientras
no aparezca fundamento positivo independiente.

Una reapertura material requerirá como mínimo evidencia empírica de una situación
en la que:

```text
una consecuencia sea suficientemente conocida
o determinable antes de actuar

+

su disponibilidad previa permita ejercer
una posibilidad humana concreta

+

esa posibilidad deje efectivamente
de estar disponible después

+

la pérdida no quede absorbida
por compromisos ya consolidados
```

La mera existencia de:

```text
riesgo
previsibilidad abstracta
irreversibilidad
coste
advertencia posible
o utilidad hipotética
```

no será suficiente.

Con la evidencia actualmente disponible, I30 queda cerrada dentro de su alcance documentado, sin derivar una nueva vertical de Product, una nueva Realization, Architecture ni modificación de código.

---
