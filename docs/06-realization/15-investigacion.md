# 15-investigacion.md

# Investigación de la fase de realización

## Propósito

Este documento registra las investigaciones desarrolladas durante la fase de realización del proyecto.

Su finalidad consiste en preservar la reconstruibilidad epistemológica del conocimiento obtenido durante dicha fase, permitiendo reconstruir, auditar y, cuando resulte necesario, reabrir cualquier investigación sobre bases objetivas.

No constituye un documento de teoría consolidada.

Tampoco constituye una bitácora cronológica del proyecto.

Su responsabilidad consiste exclusivamente en preservar la justificación racional que conduce desde las hipótesis iniciales hasta las conclusiones consolidadas o el cierre de cada investigación.

---

# Posición dentro de la arquitectura documental

```text
00-metodologia.md
        │
        ▼
15-investigacion.md
        │
        ▼
Documentos de realización
        │
        ▼
16-bitacora-de-consolidacion.md
```

Cada documento desempeña una responsabilidad diferente.

- **00-metodologia.md** define el procedimiento general de investigación utilizado en todo el proyecto.
- **15-investigacion.md** registra el desarrollo lógico de las investigaciones pertenecientes a la fase de realización.
- **Los documentos de realización** contienen exclusivamente el conocimiento consolidado.
- **16-bitacora-de-consolidacion.md** registra las modificaciones introducidas en el proyecto como consecuencia de las investigaciones realizadas.

---

# Objetivo

Preservar la evidencia mínima suficiente para que cualquier investigación perteneciente a la fase de realización pueda reconstruirse, auditarse y, cuando resulte necesario, reabrirse sin perder la justificación racional de las decisiones previamente adoptadas.

El documento debe permitir conocer:

- qué problema originó la investigación;
- qué hipótesis fueron formuladas;
- qué intentos de falsación se realizaron;
- qué observaciones resultaron relevantes;
- qué reducciones se obtuvieron;
- qué principios quedaron consolidados;
- qué hipótesis fueron descartadas;
- por qué la investigación permanece abierta o se considera cerrada.

---

# Alcance

Este documento registra exclusivamente la evolución lógica de las investigaciones pertenecientes a la fase de realización.

Su alcance comprende:

- preguntas de investigación;
- hipótesis de trabajo;
- intentos de falsación;
- observaciones relevantes;
- reducciones obtenidas;
- principios consolidados;
- hipótesis descartadas;
- razones que justifican la apertura, continuidad o cierre de cada investigación.

Quedan expresamente fuera de su alcance:

- la metodología general del proyecto;
- el contenido consolidado de los documentos de realización;
- la evolución cronológica del proyecto;
- la implementación de las conclusiones alcanzadas.

---

# Investigaciones

Este apartado registra exclusivamente las investigaciones pertenecientes a la fase de realización.

Cada investigación constituye una unidad autónoma de trabajo y será incorporada únicamente cuando haya sido formalmente abierta conforme a la metodología del proyecto.

Las conclusiones consolidadas de dichas investigaciones se trasladarán posteriormente a los documentos correspondientes de la fase de realización.

---

## R-000 — Papel estructural del documento de investigación

**Estado:** Cerrada.

### Pregunta

> ¿Qué función arquitectónica debe cumplir este documento dentro de la fase de realización?

### Hipótesis

Existe una responsabilidad documental irreducible que no puede ser absorbida por los documentos consolidados ni por la bitácora y que exige un documento específico para preservar la reconstruibilidad epistemológica de la fase de realización.

### Conclusiones

#### Sobre la función del documento de investigación

La investigación confirma la necesidad de un documento específico cuya responsabilidad consiste en preservar la justificación racional de las decisiones adoptadas durante la fase de realización.

El documento no incorpora conocimiento arquitectónico nuevo.

Su finalidad consiste en preservar el proceso de investigación que justifica la consolidación de dicho conocimiento.

Se concluye igualmente que:

- la responsabilidad del documento es distinta de la metodología, de la teoría consolidada y de la bitácora;
- las dependencias entre investigaciones son derivables del contenido de las propias investigaciones y no requieren una representación documental independiente;
- la estructura del documento debe derivarse de su responsabilidad arquitectónica y no de criterios puramente organizativos.

#### Sobre la suficiencia probatoria de la operacionalización

La investigación posterior a `Q-EX001-01` ha permitido revisar las condiciones provisionales `COE-*` introducidas para determinar qué debe satisfacer una operacionalización experimental capaz de proporcionar evidencia suficiente de la incidencia exigida por `CR-PV001-01`.

La revisión ha mostrado que las `COE-*` provisionales no constituyen cuatro condiciones epistemológicas autónomas.

Su contenido puede reducirse sin pérdida a una distinción entre condiciones de suficiencia epistemológica, condiciones metodológicas de aceptación, pruebas metodológicas de evaluación y decisiones contingentes de operacionalización.

##### Condiciones epistemológicas de suficiencia

Para que una estructura probatoria `EP` constituya evidencia suficiente de una hipótesis `H` relativa a la incidencia posterior de `A`, deben satisfacerse dos condiciones epistemológicas mínimas:

```text
CES-01 — Anclaje epistemológico

La propiedad o estructura por la que EP cuenta probatoriamente
debe guardar una conexión no accidental y epistemológicamente
pertinente con el fenómeno respecto del cual pretende informar.
```

```text
CES-02 — Adecuación de contenido

El contenido que EP sustenta en virtud de ese anclaje
debe autorizar íntegramente el contenido requerido por H,
sin que la inferencia exceda aquello que EP permite sostener.
```

No se ha identificado una tercera condición epistemológica independiente cuya ausencia pueda hacer insuficiente a `EP` una vez satisfechas ambas.

Los posibles defectos examinados —accidentalidad, correlación, mera sucesión, compatibilidad, insuficiencia de fuerza, circularidad, pérdida de pertinencia o composición inválida— pueden reconstruirse como pérdidas de `CES-01`, de `CES-02` o como problemas metodológicos para establecer su satisfacción.

##### Reconstrucción de las `COE-*` provisionales

`COE-01` —presencia efectiva— no sobrevive como condición epistemológica autónoma.

La necesidad de establecer aquello anteriormente disponible cuya incidencia se pretende atribuir queda comprendida por el anclaje epistemológico, mientras que la necesidad de alcanzar las posibilidades humanas posteriores pertenece a la adecuación de contenido.

La exigencia provisional de que una `P` particular sea identificable en `S2` no puede mantenerse si presupone una manifestación o ejercicio efectivo que `CR-PV001-01` no exige.

`COE-02` —posterioridad— tampoco sobrevive como condición autónoma.

La posterioridad pertenece al contenido de `H` y queda, por tanto, comprendida por `CES-02`.

La separación `S1/S2` puede constituir una forma contingente de representar u operacionalizar dicha posterioridad y puede contribuir al anclaje en una estructura probatoria concreta, pero no constituye una condición epistemológica universal.

`COE-03` —relación de incidencia— tampoco introduce una condición adicional.

La incidencia relevante pertenece al contenido mismo de `H`.

Cuando `EP` sólo sustenta sucesión, asociación, compatibilidad u otra relación más débil, falla la adecuación de contenido.

Cuando la atribución a `A` carece de una conexión no accidental y epistemológicamente pertinente con el fenómeno, falla el anclaje epistemológico.

`COE-04` —capacidad discriminante— tampoco sobrevive como condición epistemológica autónoma.

Su función provisional agrupaba distintas maneras de intentar determinar si la atribución de incidencia era accidental, circular, meramente correlacional o insuficientemente sustentada.

Estas comprobaciones pertenecen al nivel metodológico de evaluación de la satisfacción de las `CES`.

La existencia de vías o explicaciones alternativas no constituye por sí misma una pérdida, ya que `CR-PV001-01` no exige exclusividad causal ni una dependencia contrafactual del tipo:

```text
con A → P
sin A → ¬P
```

Una explicación alternativa resulta probatoriamente relevante cuando muestra que aquello que confería fuerza atributiva a `EP` puede quedar desvinculado de la incidencia de `A`.

##### Condición metodológica de aceptación

La suficiencia epistemológica de `EP` debe distinguirse de la autorización metodológica para aceptar que dicha suficiencia ha quedado establecida.

Se obtiene así una condición metodológica distinta:

```text
CMA-01 — Aceptabilidad metodológicamente justificada
```

La atribución de que `EP` satisface las `CES` podrá aceptarse cuando:

1. su justificación sea suficientemente auditable respecto de los elementos necesarios para establecer las `CES`;

2. haya sido sometida a control crítico mediante pruebas seleccionadas y justificadas a partir de los modos de fallo probatoriamente relevantes identificables en su estructura;

3. no permanezca una falsación pertinente no resuelta cuya supervivencia impida establecer alguna `CES` requerida.

La auditabilidad suficiente no exige reconstruibilidad completa.

Pueden intervenir componentes internamente opacos siempre que puedan auditarse las garantías, condiciones de aplicabilidad y relaciones inferenciales necesarias para justificar su contribución probatoria.

La frontera relevante no se encuentra, por tanto, entre transparencia y opacidad, sino entre:

```text
opacidad irrelevante
↓
no impide establecer las CES

y

opacidad probatoriamente relevante
↓
impide auditar algún elemento necesario
para establecer las CES
```

El control crítico y la ausencia de una falsación bloqueante cumplen funciones distintas.

El primero constituye una exigencia sobre el procedimiento de evaluación.

La segunda constituye una exigencia sobre el estado alcanzado en el momento de la aceptación.

La mera ausencia de falsaciones conocidas no sustituye al control crítico, ya que puede deberse simplemente a que la justificación no haya sido sometida a pruebas pertinentes.

##### Pruebas metodológicas de evaluación

No se ha identificado un conjunto mínimo de pruebas concretas que deba aplicarse universalmente a toda `EP`.

Lo universal es la obligación de control crítico establecida por `CMA-01`, no los instrumentos particulares mediante los que dicho control se realiza.

Las pruebas metodológicas de evaluación se clasifican como:

```text
PME
↓
pruebas dirigidas contra modos de fallo
probatoriamente relevantes de una justificación
```

Su pertinencia debe derivarse de la estructura concreta de la justificación.

Una vulnerabilidad es probatoriamente relevante cuando puede darse en dicha estructura y su realización derrotaría o volvería insuficiente la justificación de alguna `CES` requerida.

Por tanto, pruebas contra circularidad, accidentalidad, reducción a correlación, mera sucesión, compatibilidad, composición u otras no constituyen obligaciones universales.

Deben aplicarse cuando el modo de fallo correspondiente sea pertinente para la justificación examinada.

La selección de las `PME` debe ser ella misma justificable y auditable.

No se exige agotar todas las vulnerabilidades concebibles, pero ninguna vulnerabilidad pertinente identificada o justificadamente exigible por la estructura conocida puede quedar sin control sin una razón documentada.

##### Decisiones experimentales de operacionalización

Las `PME` deben distinguirse de los procedimientos concretos mediante los que se hacen ejecutables.

Una `PME` se individúa por el modo de fallo probatoriamente relevante contra el que dirige el control crítico, no por el procedimiento experimental empleado.

Las decisiones concretas mediante las que una prueba se hace observable pertenecen a:

```text
DEO
↓
decisiones experimentales de operacionalización
```

Por tanto:

```text
PME
≠
DEO
```

Una misma `PME` puede realizarse mediante distintas `DEO`, y una misma estructura experimental puede utilizarse para distintas `PME` si cambia la vulnerabilidad que pretende ponerse a prueba.

Esta distinción permite localizar correctamente el contraste `E+ / E−` de `EX-PV001-01`.

El contraste:

```text
E+ / E−
```

no constituye una condición epistemológica, una condición metodológica de aceptación ni una `PME`.

Constituye una decisión contingente de operacionalización utilizada por `EX-PV001-01`.

Su insuficiencia para proporcionar por sí solo evidencia de la incidencia general exigida por `CR-PV001-01` no elimina la necesidad de control crítico que motivó su construcción ni impide que pueda conservar capacidad probatoria respecto de una hipótesis más estrecha.

##### Estructura resultante

La investigación permite distinguir finalmente cuatro categorías:

```text
CES
↓
qué debe ser cierto para que EP
sea evidencia suficiente de H

CMA
↓
qué debe quedar metodológicamente establecido
para aceptar que EP satisface las CES

PME
↓
qué modo de fallo probatoriamente relevante
se intenta someter a prueba

DEO
↓
cómo se operacionaliza concretamente
esa prueba en un dispositivo experimental
```

La relación entre ellas no constituye una simple cadena lineal.

La construcción experimental produce una estructura probatoria mediante decisiones contingentes de operacionalización, mientras que la evaluación parte de la justificación de esa estructura, identifica sus vulnerabilidades pertinentes y selecciona las `PME` necesarias para intentar falsarla.

De forma esquemática:

```text
construcción

EX
↓
DEO
↓
EP


evaluación

EP
↓
justificación de EP → H
↓
vulnerabilidades probatoriamente relevantes
↓
PME pertinentes
↓
control crítico
↓
evaluación de satisfacción de CES
↓
CMA-01
↓
aceptación / no aceptación
```

La distinción impide convertir una decisión contingente de construcción experimental en una obligación epistemológica o teórica.

##### Conclusión de la reducción

Las cuatro `COE-*` provisionales han cumplido su función investigadora, pero no deben conservarse como cuatro condiciones autónomas ni sustituirse retrospectivamente por las nuevas categorías.

Su reducción constituye un resultado de la investigación y debe mantenerse trazable.

El resultado mínimo obtenido es:

```text
suficiencia epistemológica
↓
CES-01 — Anclaje epistemológico
CES-02 — Adecuación de contenido

aceptación metodológica
↓
CMA-01 — Aceptabilidad metodológicamente justificada

control crítico
↓
PME pertinentes a las vulnerabilidades
de la justificación concreta

construcción experimental
↓
DEO contingentes del dispositivo experimental
```

No se ha derivado una obligación de utilizar contraste contrafactual, reexposición de `A`, traza de contenido, conducta, autoinforme, cadena mediadora ni ningún otro indicador particular.

Estas posibilidades pertenecen al nivel contingente de operacionalización experimental y pueden utilizarse, cuando resulte justificado, para realizar las PME pertinentes al caso concreto.

La investigación dispone así de un criterio más débil y general para continuar la búsqueda de evidencia de `CR-PV001-01` sin convertir el indicador experimental elegido en una nueva obligación de la teoría.

---

# Investigaciones previstas

Las siguientes investigaciones constituyen actualmente el plan de trabajo de la fase de realización.

Serán abiertas formalmente e incorporadas a este documento conforme se desarrollen.

- R-001 — Principios de realización
- R-002 — Realización de las competencias
- R-003 — Realización de los contratos
- R-004 — Realización del significado
- R-005 — Organización del núcleo

---

## R-002 — Realización de las competencias

**Estado:** Cerrada nuevamente tras reapertura.

---

### Pregunta

> ¿Introduce la realización de las competencias arquitectónicas fenómenos, responsabilidades o principios propios que amplíen el modelo previamente consolidado durante la teoría conceptual, la ingeniería y la implementación?

---

### Hipótesis inicial

La realización de una competencia arquitectónica podría introducir fenómenos irreducibles propios que exigieran ampliar el modelo arquitectónico mediante nuevas responsabilidades, sujetos, principios o criterios de preservación.

La investigación intentará falsar esta hipótesis.

---

### Desarrollo de la investigación

La investigación se desarrolló mediante una secuencia de auditorías fenomenológicas orientadas a identificar posibles fenómenos propios de la realización de las competencias.

Entre las principales cuestiones investigadas se encuentran:

- existencia de una forma software arquitectónicamente necesaria de realizar una competencia;
- realización individual o cooperativa;
- sujeto de autoridad;
- relación de realización;
- obligaciones del realizador;
- fidelidad de la realización;
- correspondencia realizativa;
- conformidad;
- identidad operativa;
- preservación de competencias;
- condiciones generales de preservación;
- verificación local y sistémica;
- alcance de la demostración arquitectónica;
- criterio de individuación;
- no sustituibilidad semántica;
- fundamentación de E-001.

Cada hipótesis fue sometida a intentos sistemáticos de falsación antes de aceptarse, reducirse o descartarse.

---

### Observaciones relevantes

La investigación mostró un comportamiento extraordinariamente estable.

Las nuevas hipótesis formuladas tendían sistemáticamente a uno de los siguientes resultados:

- reducirse a principios previamente consolidados;
- reinterpretarse como mecanismos de aplicación o demostración de dichos principios;
- quedar fuera del alcance arquitectónico de la realización al pertenecer a decisiones tecnológicas, organizativas o de implementación.

No apareció ningún fenómeno arquitectónico irreducible específico de la realización de las competencias.

---

### Hipótesis reducidas

Durante la investigación fueron analizadas y finalmente reducidas, entre otras, las siguientes propuestas:

- sujeto de autoridad;
- identidad operativa;
- correspondencia realizativa;
- conformidad;
- estados realizativos;
- nuevas responsabilidades de la plataforma;
- criterio específico de individuación;
- criterio autónomo de no sustituibilidad semántica.

Todas ellas pudieron explicarse mediante principios previamente consolidados o como fundamentaciones de dichos principios.

---

### Principios consolidados

La investigación consolida los siguientes resultados:

- la realización no introduce nuevas competencias arquitectónicas;
- la autoridad permanece en la competencia y no se traslada al realizador;
- los realizadores únicamente materializan competencias previamente definidas;
- la realización no genera nuevas responsabilidades arquitectónicas;
- preservar una competencia consiste en preservar íntegramente sus invariantes arquitectónicos;
- la demostración de preservación debe abarcar el mismo sujeto arquitectónico cuya identidad pretende garantizar;
- las verificaciones locales constituyen únicamente evidencias auxiliares;
- la verificación arquitectónica posee necesariamente alcance sistémico;
- los principios PRR-1, PRR-2 y reconstruibilidad constituyen un sistema suficiente para justificar la legitimidad de las transformaciones conservativas.

---

### Auditoría de cobertura fenomenológica

La investigación verificó la cobertura completa de las principales familias fenomenológicas asociadas a la realización de las competencias:

| Familia fenomenológica      | Resultado                                             |
| --------------------------- | ----------------------------------------------------- |
| Identidad de la competencia | Reducida a la preservación de invariantes             |
| Sujetos de la realización   | Sin nuevos sujetos arquitectónicos                    |
| Responsabilidades           | Sin nuevas responsabilidades                          |
| Conservación                | Consolidada mediante PRR-1, PRR-2 y reconstruibilidad |
| Verificación                | Consolidada mediante verificación sistémica           |
| Fundamentación              | Reducida a la teoría conceptual                       |

No se identificaron familias fenomenológicas adicionales propias de la realización de las competencias.

---

### Consecuencias para la arquitectura

La investigación confirma que la fase de realización no amplía la ontología arquitectónica previamente consolidada.

Su función consiste exclusivamente en garantizar la preservación de los principios establecidos durante la teoría conceptual, la ingeniería y la implementación.

En consecuencia, `01-realizacion-de-las-competencias.md` deberá limitarse a formular los principios normativos necesarios para realizar una competencia arquitectónica preservando íntegramente dichos principios, sin introducir nuevos elementos arquitectónicos.

---

### Razones del cierre

La investigación se considera cerrada por las siguientes razones:

- el espacio fenomenológico propio de la realización de las competencias ha sido exhaustivamente explorado;
- no se han identificado fenómenos arquitectónicos irreducibles nuevos;
- las hipótesis adicionales formuladas resultan sistemáticamente reducibles a principios previamente consolidados o quedan fuera del alcance arquitectónico de la investigación;
- la auditoría de cobertura confirma que todas las familias fenomenológicas relevantes han sido investigadas.

El cierre no responde al agotamiento de nuevas preguntas, sino a la saturación conceptual del fenómeno investigado.

---

### Estado final

**Investigación cerrada.**

---

### Reapertura de la investigación

**Fecha:** 14/08/2026

`R-002` se reabre como consecuencia de una pérdida detectada durante la investigación de una realización concreta en la vertical de Product.

La reapertura no invalida los resultados previamente consolidados ni modifica retrospectivamente el cierre anterior.

La nueva evidencia cuestiona exclusivamente la completitud de dicho cierre al haber aparecido una distinción que no ha podido ser absorbida por los principios consolidados de `R-002`.

#### Pérdida detectada — Indeterminación de la pertenencia realizativa

Los resultados consolidados de `R-002` permiten establecer las obligaciones de una realización ya identificada respecto de una competencia, evaluar la preservación sistémica de sus invariantes y justificar la legitimidad conservativa de determinadas transformaciones o sustituciones.

Sin embargo, no se ha localizado entre dichos resultados un criterio que permita determinar, dada una configuración `Ω` que satisface los invariantes `INV-K` de una competencia `K`, qué parte de `Ω` puede recibir el estatuto de realización de `K` y qué parte constituye únicamente condición, entorno o mera copresencia.

La identificación:

```text
Σ materializa K
        ≡
Σ pertenece a Ω
y
Ω satisface INV-K
```

no elimina la pérdida.

Dicha identificación atribuiría estatuto realizativo a cualquier elemento arbitrariamente incorporado a una configuración satisfaciente.

El caso de control que hizo visible la pérdida puede expresarse como:

```text
E satisface INV-K

Ω = <Σ∅, E>

Σ∅ pertenece a Ω

Ω satisface INV-K
```

La mera incorporación de `Σ∅` no puede proporcionar por sí sola un criterio suficiente para atribuirle la materialización de `K` sin reducir `materializar` a mera copresencia en una configuración satisfaciente.

#### Auditoría de los resultados anteriores

La pérdida fue contrastada con los principios consolidados de `R-002`.

La preservación íntegra de los invariantes y la verificación sistémica permiten establecer la corrección de una configuración respecto de una competencia, pero no determinan por sí mismas qué parte de dicha configuración constituye su realización.

Se reconstruyeron además, a partir exclusivamente de los resultados consolidados supervivientes de `R-002`, las mejores reducciones actualmente justificables de:

- `correspondencia realizativa`;
- criterio autónomo de `no sustituibilidad semántica`.

La reconstrucción de `correspondencia realizativa` permite reducir la fidelidad de una realización ya identificada respecto de su competencia a la autoridad normativa de ésta y a la preservación íntegra de sus invariantes.

No proporciona, sin embargo, un criterio para determinar qué cuenta inicialmente como realizador dentro de una configuración satisfaciente.

La reconstrucción del criterio autónomo de `no sustituibilidad semántica` permite reducir la legitimidad semántica de una sustitución a la preservación íntegra de los invariantes de la competencia.

Tampoco permite determinar si aquello que se sustituye poseía inicialmente estatuto realizativo.

Por tanto, ninguna de ambas reducciones absorbe la pérdida detectada.

La revisión del historial Git no permitió recuperar las cadenas justificativas individuales originales de esas dos reducciones.

El primer estado versionado localizado de la fase `06-realization` ya registra ambas como hipótesis reducidas.

Este resultado constituye una limitación de reconstruibilidad documental, pero no se toma por sí mismo como evidencia de falsedad de las reducciones anteriores.

#### Prueba de eliminación

Se examinó si la pérdida podía eliminarse identificando:

```text
Σ materializa K
```

con:

```text
Σ pertenece a una configuración Ω
que satisface INV-K
```

La identificación no resultó conservativa.

Permitiría incorporar arbitrariamente elementos adicionales a `Ω` y atribuirles, por su sola copresencia, el mismo estatuto realizativo respecto de `K`.

Por tanto, la diferencia entre materialización y mera pertenencia a una configuración satisfaciente no ha podido ser eliminada con los resultados actualmente consolidados.

La pérdida sobrevive provisionalmente.

#### Pertenencia de la pérdida

La pérdida no depende de una competencia particular ni de una decisión específica de Product.

Tampoco pertenece a la operacionalización experimental, a las condiciones de suficiencia epistemológica ni al gobierno de las transformaciones conservativas.

Su forma general es:

```text
competencia K
        ↓
invariantes INV-K
        ↓
configuración Ω que satisface INV-K
        ↓
¿qué permite atribuir a una parte Σ de Ω
la materialización de K?
```

La pérdida afecta directamente a la relación general entre una competencia y aquello que puede contar como su realización concreta.

Por tanto, se adscribe a `R-002 — Realización de las competencias`.

#### Nueva pregunta de investigación

`Q-R002-01`:

> Dada una competencia `K` y una configuración `Ω` en la que sus >invariantes `INV-K` se satisfacen, ¿qué debe ser necesariamente >cierto para que pueda atribuirse a una parte `Σ` de `Ω` la >materialización de `K`, sin reducir > dicha atribución a la >mera pertenencia de `Σ` a una configuración
> satisfaciente?

La pregunta no presupone que la respuesta deba adoptar la forma de una contribución causal, necesidad funcional, papel funcional, diferencia estructural, soporte mínimo, dependencia, no sustituibilidad ni ninguna otra propiedad positiva determinada.

La investigación deberá intentar primero reducir nuevamente la pérdida a resultados ya consolidados.

Sólo si dicha reducción fracasa estará justificada la introducción de un resultado adicional.

#### Caso de control

`TC-R002-01 — Copresencia arbitraria`

```text
E satisface INV-K

Ω = <Σ∅, E>

Σ∅ puede incorporarse o retirarse
sin que su mera incorporación determine
por sí misma su estatuto realizativo respecto de K
```

Toda hipótesis candidata deberá mostrar si permite determinar el estatuto de `Σ∅` sin presuponer previamente que `Σ∅` es o no es realizador.

#### Estado de la reapertura

```text
R-002
→ Reabierta.

cierre anterior
→ conservado como resultado histórico

resultados consolidados anteriores
→ no falsados por la reapertura

completitud del cierre anterior
→ suspendida

pérdida de pertenencia realizativa
→ no reducida con la evidencia disponible

Q-R002-01
→ abierta

TC-R002-01
→ caso de control activo
```

#### Investigación de `Q-R002-01`

La investigación intentó reducir la pérdida de pertenencia realizativa utilizando exclusivamente resultados ya consolidados, sin introducir previamente una teoría positiva de qué significa materializar una competencia.

Se examinó si la atribución:

```text
materializa(Σ,K)
```

podía derivarse de alguna de las siguientes condiciones:

- pertenencia a una configuración satisfaciente;
- preservación íntegra de `INV-K`;
- verificación sistémica;
- semántica particular de `K`;
- relevancia semántica;
- participación no gratuita;
- necesidad individual;
- suficiencia local;
- causalidad;
- minimalidad satisfactiva;
- eliminabilidad;
- ejercicio de una responsabilidad;
- contribución positivamente orientada;
- correspondencia realizativa;
- no sustituibilidad semántica.

Ninguna de estas vías permitió derivar de manera general una atribución realizativa determinada sin introducir contenido adicional no autorizado por la mera satisfacción de la competencia.

La investigación mostró además que la pérdida no depende específicamente del caso inicial de copresencia arbitraria.

Se contrastaron progresivamente tres clases de contraejemplo:

`Σ∅`
→ mera copresencia

`Σ¬`
→ relevancia condicionante

`Σ+`
→ relevancia positivamente orientada
sin atribución realizativa determinada

La supervivencia de la pérdida tras retirar las propiedades particulares de estos casos mostró que ninguno de ellos constituye su fundamento.

La cuestión general permanece en la diferencia entre:

`Ω` satisface `INV-K`

y

`materializa(Σ,K)`

para una parte determinada `Σ ⊆ Ω`.

#### Resultado `RS-R002-01`

No implicación de la atribución realizativa por satisfacción sistémica

Dada una competencia `K`, una configuración `Ω` y una parte `Σ` ⊆ `Ω`, el hecho de que Ω satisfaga los invariantes `INV-K` no autoriza por sí solo la atribución:

`materializa(Σ,K)`

En consecuencia:

`Ω` ⊨ `INV-K`

no implica por sí mismo:

`materializa(Σ,K)`

para una parte determinada `Σ` ⊆ `Ω`.

La satisfacción sistémica y la atribución realizativa constituyen
pretensiones semánticamente no intercambiables.

El resultado no excluye que la atribución pueda quedar determinada por fundamentos adicionales legítimos cuando éstos existan.

Tampoco exige que dichos fundamentos adopten una forma universal común.

#### Prueba de eliminación de `RS-R002-01`

Se examinó si `RS-R002-01` podía eliminarse conservando únicamente las normas generales de suficiencia justificativa y no sobreextensión.

La eliminación no resultó conservativa.

Dichas normas permiten establecer que una conclusión no puede reclamar más contenido que el autorizado por su justificación, pero no establecen por sí mismas la diferencia semántica específica entre:

`Ω` satisface `INV-K`

y:

`materializa(Σ,K)`

Sin `RS-R002-01`, dicha diferencia tendría que presuponerse para aplicar la norma general precisamente al contenido atributivo cuya autonomía se está investigando.

Por tanto, las normas generales regulan las consecuencias justificativas del resultado, pero no absorben su contenido semántico específico.

`RS-R002-01` sobrevive a la prueba de eliminación.

#### Independencia respecto de los contraejemplos

Se examinó si RS-R002-01 dependía de los casos `Σ∅`, `Σ¬` o `Σ+`.

La pérdida continuó siendo formulable una vez retiradas las propiedades específicas de:

- copresencia arbitraria;
- relevancia meramente condicionante;
- contribución positivamente orientada.

Los tres casos conservan valor falsador, pero ninguno constituye el fundamento del resultado.

`RS-R002-01` sobrevive, por tanto, independientemente de ellos.

#### Alcance y estatuto de `RS-R002-01`

`RS-R002-01` posee alcance general dentro de `R-002` únicamente como una no implicación.

No afirma que toda competencia produzca necesariamente indeterminación realizativa.

No excluye que la semántica particular de una competencia o fundamentos adicionales legítimos permitan determinar una atribución concreta.

Afirma únicamente que no existe una inferencia general basada
exclusivamente en:

`Ω` ⊨ `INV-K`

que autorice:

`materializa(Σ,K)`

para una parte determinada de `Ω`.

`RS-R002-01` constituye un resultado semántico negativo específico de la realización de las competencias.

No introduce:

- una nueva competencia;
- una nueva responsabilidad arquitectónica;
- una nueva entidad;
- una nueva relación arquitectónica fundamental;
- un criterio atributivo universal;
- una obligación de existencia de una delimitación realizativa;
- una obligación de unicidad de dicha delimitación;
- ni una propiedad ontológica de indeterminación.

Cuando los fundamentos disponibles no autorizan el contenido adicional reclamado por una atribución realizativa determinada, dicha atribución debe permanecer suspendida.

Esta consecuencia no constituye un principio adicional de `R-002`, sino una aplicación de las obligaciones generales de suficiencia justificativa y no sobreextensión ya consolidadas.

#### Resolución de `Q-R002-01`

`Q-R002-01` queda resuelta.

La investigación no ha derivado una propiedad positiva universal que una parte `Σ` deba poseer para materializar una competencia `K`.

Ha demostrado, en cambio, que la atribución:

`materializa(Σ,K)`

no puede obtener su autorización exclusivamente del hecho de que una configuración `Ω` que contiene a `Σ` satisfaga `INV-K`.

Cuando se afirme una atribución realizativa determinada, los fundamentos que la justifican deberán autorizar el contenido atributivo reclamado por dicha afirmación.

Esta última obligación no constituye una nueva responsabilidad de la realización, sino una aplicación local de las normas generales de justificación ya consolidadas.

#### Revisión del cierre anterior

La reapertura no falsifica los resultados anteriormente consolidados relativos a:

- ausencia de nuevas competencias arquitectónicas;
- permanencia de la autoridad normativa en la competencia;
- ausencia de nuevas responsabilidades arquitectónicas;
- preservación íntegra de los invariantes;
- alcance sistémico de la verificación;
- legitimidad de las transformaciones conservativas;
- reducción de `correspondencia realizativa` dentro de su alcance;
- reducción del criterio autónomo de `no sustituibilidad semántica`
  dentro de su alcance.

Sí queda corregida la afirmación de completitud del cierre anterior.

En particular, ya no puede sostenerse como conclusión vigente que no exista ningún resultado irreducible específico de la realización de las competencias.

La reapertura ha identificado y consolidado:

`RS-R002-01`
→ satisfacción sistémica
no implica por sí sola
atribución realizativa determinada

El cierre anterior permanece conservado como resultado histórico y como registro reconstruible del estado de la investigación antes de la nueva evidencia.

#### Razones del nuevo cierre

La investigación puede cerrarse nuevamente porque:

- la pérdida que motivó la reapertura ha sido aislada;
- se agotaron las vías de reducción identificadas utilizando resultados previamente consolidados;
- `RS-R002-01` sobrevivió a una prueba específica de eliminación;
- el resultado sobrevivió independientemente de los contraejemplos `Σ∅`, `Σ¬` y `Σ+`;
- su alcance y estatuto han sido delimitados;
- no ha sido necesario introducir una teoría positiva universal de la materialización;
- no se ha introducido nueva ontología, competencia ni responsabilidad arquitectónica;
- y `Q-R002-01` ha quedado respondida sin dejar una pérdida identificada pendiente dentro de su alcance.

El nuevo cierre no restablece la antigua afirmación de saturación
fenomenológica absoluta.

Establece únicamente que la pérdida concreta que justificó la reapertura
ha sido investigada hasta obtener un resultado estable, falsable y
suficientemente delimitado.

#### Estado final tras la reapertura

`R-002`
→ cerrada nuevamente

`Q-R002-01`
→ resuelta

`RS-R002-01`
→ consolidado

`TC-R002-01`
→ caso de control completado

resultados consolidados anteriores
→ conservados dentro de su alcance

correspondencia realizativa
→ reducción conservada dentro de su alcance

criterio autónomo de no sustituibilidad semántica
→ reducción conservada dentro de su alcance

completitud del cierre anterior
→ corregida por RS-R002-01

nueva ontología
→ no introducida

nueva competencia
→ no introducida

nueva responsabilidad arquitectónica
→ no introducida

**Investigación cerrada nuevamente.**

---

## R-PV001-001 — Primera realización experimental de PV-001

**Estado:** En progreso.

---

### Origen

La investigación se abre a partir de `PV-001`, primera vertical consolidada en `docs/08-project/PRODUCT.md`.

`PV-001` compromete que aquello que una situación hace disponible pueda intervenir posteriormente de manera que las posibilidades humanas en una situación posterior puedan depender también de lo anteriormente disponible.

La vertical no exige:

- que toda situación haga que algo nuevo quede disponible;
- que todo lo disponible sea utilizado posteriormente;
- que las situaciones pertenezcan a una misma actividad;
- que mantengan un mismo propósito;
- que formen una secuencia continua;
- ni que aquello disponible posea una naturaleza semántica determinada.

Las propiedades adicionales de casos particulares no forman parte del compromiso salvo demostración independiente.

### Pregunta

> Dado `PV-001`, ¿qué debe ser necesariamente realizable para satisfacer su compromiso sin introducir estructura, semántica ni responsabilidades que Product no haya justificado?

---

### Hipótesis inicial

Para satisfacer `PV-001` podría ser necesaria una capacidad realizativa específica encargada de preservar entre situaciones aquello que una situación anterior hizo disponible, de forma que pudiera intervenir posteriormente en las posibilidades humanas.

Esta capacidad podría exigir:

- conservar aquello que fue puesto a disposición;
- mantener alguna forma de continuidad entre situaciones;
- permitir su recuperación posterior;
- preservar diferencias relevantes durante las transformaciones intermedias;
- y establecer una responsabilidad específica encargada de garantizar dicha preservación.

La investigación intentará falsar esta hipótesis reduciendo sucesivamente cada una de estas exigencias.

---

### Desarrollo de la investigación

#### 1. Diferencia mínima exigida por `PV-001`

Se partió de dos situaciones:

```text
S1
↓
algo A queda disponible

S2
↓
posibilidades humanas posteriores
```

La mera sucesión entre `S1` y `S2` no basta para satisfacer `PV-001`.

Tampoco basta cualquier diferencia causal entre ambas situaciones.

Si `A` y `B` pueden sustituirse uno por otro sin producir ninguna diferencia relevante respecto de las posibilidades humanas posteriores consideradas, no queda demostrado que aquello puesto a disposición en `S1` intervenga posteriormente.

Se obtiene provisionalmente:

#### D-001 — Diferencia dependiente de lo anteriormente disponible

> Para satisfacer `PV-001` debe ser posible que exista en una situación posterior una diferencia relevante cuya producción dependa de aquello que una situación anterior hizo disponible.

`D-001` no establece todavía:

- qué debe conservarse;
- mediante qué mecanismo;
- si debe recuperarse literalmente `A`;
- si debe mantenerse su identidad;
- ni qué forma debe adoptar la diferencia posterior.

---

#### 2. Continuidad y recuperación

Se examinó si `D-001` exigía que `A` permaneciera disponible como algo distinguible hasta `S2`.

Se consideró el caso:

```text
S1
↓
A
↓
transformación
↓
B

A desaparece

S2
↓
B interviene
```

El caso mostró que `PV-001` puede seguir siendo satisfecho si la posibilidad posterior depende de `A` mediante `B`.

Por tanto, no se demostró necesidad universal de:

- persistencia literal de `A`;
- continuidad material;
- identidad representacional;
- ni recuperación posterior de `A`.

Se examinó igualmente si era necesario un acto explícito de consulta o recuperación.

Tampoco se demostró.

`A` puede producir efectos posteriores mediante una mediación sin que una persona o la realización ejecuten una operación identificable de recuperación.

La exigencia mínima permanece en la dependencia relevante establecida por `D-001`.

---

#### 3. Intento de derivación arquitectónica

Se examinó si `D-001` requería una responsabilidad arquitectónica específica:

```text
R-D001
```

encargada de preservar la capacidad de producir posteriormente la diferencia relevante.

También se formuló provisionalmente:

```text
GP-001
```

como garantía de preservación de la posibilidad de incidencia comprometida por `PV-001`.

Se planteó inicialmente si `GP-001` debía satisfacerse después de cada transformación individual.

El análisis mostró que una cadena:

```text
A → B → C → ... → P
```

puede contener transformaciones intermedias que no preserven aisladamente todas las diferencias de `A` y, sin embargo, permitir que el resultado global conserve la incidencia relevante.

Se obtiene:

#### C-D001-03

> `GP-001` es una garantía sistémica end-to-end exigible respecto del compromiso de `PV-001`; no se ha demostrado que constituya un invariante de cada transformación interna.

Se intentó posteriormente localizar fronteras concretas de exigibilidad mediante:

```text
FC-001
CE-PV001
```

Sin embargo, los intentos de definir dichas fronteras recurriendo a la disponibilidad de la propia capacidad que debía exigirse introdujeron circularidad.

No se encontró en Product una condición antecedente suficiente que permitiera derivar independientemente esas fronteras.

Las construcciones `FC-001` y `CE-PV001` fueron reducidas.

La condición podía expresarse más débilmente como propiedad global:

> La realización no debe hacer imposible la clase de incidencia comprometida por `PV-001`.

---

#### 4. Reducción de capacidades arquitectónicas

Se examinó si la posibilidad requerida por `PV-001` constituía una nueva capacidad arquitectónica:

```text
K-PV001
```

Se intentó reconstruirla utilizando exclusivamente recursos arquitectónicos previamente consolidados.

El caso mínimo fue reducido sucesivamente intentando eliminar:

- individuación adicional;
- articulación estructural adicional;
- reglas generales nuevas de composición;
- fundamentos adicionales de compatibilidad;
- y una capacidad específica `K-PV001`.

Se comprobó que relaciones concretamente fundadas podían proporcionar la estructura necesaria para construir el caso sin introducir una nueva capacidad arquitectónica fundamental.

Cuando la compatibilidad necesaria para una composición concreta podía justificarse mediante los fundamentos de las relaciones participantes, no era necesario postular un fundamento adicional independiente.

Finalmente, `K-PV001` no conservaba contenido arquitectónico propio: una vez reconstruido el caso mediante relaciones existentes, `K-PV001` se limitaba a volver a declarar que la incidencia comprometida por `PV-001` podía producirse.

No quedó demostrada la necesidad de:

- `R-D001` como nueva responsabilidad fundamental;
- `K-PV001` como nueva capacidad;
- `GP-001` como nueva garantía arquitectónica autónoma;
- una nueva regla general de composición;
- ni una nueva frontera arquitectónica específica de `PV-001`.

---

#### 5. Paso a realización concreta

La reducción arquitectónica produjo un resultado negativo relevante:

> `PV-001` no exige, para el caso estudiado, ampliar previamente la arquitectura consolidada.

La pregunta dejó entonces de ser:

> ¿qué nueva responsabilidad arquitectónica necesita `PV-001`?

y pasó a ser:

> ¿cuál es la construcción concreta mínima capaz de satisfacer `PV-001`, introduciendo el menor número posible de decisiones y haciendo que cada una pueda justificarse directamente por el compromiso?

Se alcanzó así la frontera entre justificación estructural y realización concreta.

---

#### 6. Reducción de la primera realización

Entre las mediaciones compatibles con `PV-001` se buscó una primera realización:

- débil;
- mínima;
- fácilmente falsable;
- y sin pretensión de necesidad universal.

Se escogió provisionalmente la conservación directa de aquello que `S1` hace disponible.

La decisión fue sometida posteriormente a reducción.

##### Contenido de `A`

Se examinó si era necesario determinar previamente qué es `A`.

No se encontró necesidad de atribuirle estructura semántica particular.

Para el primer experimento basta una representación técnica concreta cuya elección no se proyecte sobre Product.

Se seleccionó una única `string`.

##### Mecanismo de conservación

Para conservar una sola `string` durante una única ejecución se compararon mecanismos de almacenamiento.

No se encontró necesidad de:

- base de datos;
- fichero;
- `localStorage`;
- repositorio;
- colección;
- ni estructura de almacenamiento independiente.

Una variable en memoria de proceso resultó suficiente para el caso mínimo.

##### Separación entre `S1` y `S2`

Se examinó si ambas situaciones debían materializarse como:

- funciones;
- operaciones;
- componentes;
- transacciones;
- interfaces;
- o procesos separados.

No se demostró ninguna de esas necesidades.

Para el experimento basta que existan dos momentos distinguibles de una misma ejecución:

```text
momento anterior
↓
A queda disponible
↓
el momento termina

momento posterior
↓
puede producirse la incidencia
```

La distinción entre ambos momentos es situacional y experimental, no arquitectónica.

##### Incidencia humana

Se examinó si `S2` debía contener una acción humana explícita.

No se encontró dicha necesidad.

La disponibilidad de `A` puede modificar las posibilidades humanas abiertas aunque la persona no ejecute ninguna acción.

Tampoco se demostró que la realización deba producir automáticamente esa diferencia.

Puede bastar con que vuelva a poner `A` a disposición de forma que una persona pueda apoyarse en ella.

La interpretación o aprovechamiento de `A` no se incorpora por ello como responsabilidad automática de la realización.

---

#### 7. Construcción del caso experimental

La reducción condujo a:

```text
S1
↓
A
↓
conservación directa
↓
S2
↓
A vuelve a estar disponible
↓
posible incidencia humana
```

Esto planteó un riesgo de trivialización.

Un mecanismo que simplemente guarde y vuelva a mostrar `A` puede funcionar técnicamente sin demostrar que `PV-001` ha sido satisfecho.

Por tanto, fue necesario distinguir:

```text
mediación técnica
≠
evidencia de PV-001
```

La mediación técnica puede reducirse a conservar y volver a poner `A` a disposición.

La evidencia requiere comprobar que la disponibilidad procedente de `S1` puede producir una diferencia relevante en las posibilidades humanas posteriores.

Esta distinción condujo al diseño de `EX-PV001-01`.

---

### Observaciones relevantes

La investigación produjo las siguientes observaciones:

- la dependencia exigida por `PV-001` es más débil que la persistencia literal de aquello puesto a disposición;
- recuperación y consulta explícitas no son necesarias universalmente;
- la incidencia puede atravesar transformaciones intermedias;
- la preservación relevante posee carácter global respecto del compromiso y no necesariamente local respecto de cada transformación;
- no se ha demostrado una nueva responsabilidad arquitectónica específica;
- tampoco se ha demostrado una nueva capacidad arquitectónica irreducible;
- la primera realización puede seleccionarse contingentemente sin convertir sus mecanismos en propiedades de Product;
- una representación técnica mínima puede utilizarse sin atribuir naturaleza equivalente a aquello que Product compromete;
- la separación situacional entre `S1` y `S2` no obliga a introducir una frontera técnica;
- la interpretación humana no debe incorporarse automáticamente como comportamiento de la realización;
- y la corrección técnica de un mecanismo de conservación no constituye por sí sola evidencia suficiente de `PV-001`.

---

### Hipótesis y construcciones reducidas

Durante la investigación fueron reducidas o descartadas como exigencias necesarias:

- persistencia literal de `A`;
- identidad representacional de `A`;
- recuperación obligatoria;
- consulta humana explícita;
- `R-D001` como nueva responsabilidad arquitectónica fundamental;
- `K-PV001` como nueva capacidad arquitectónica;
- `GP-001` como garantía arquitectónica autónoma adicional;
- `FC-001` como frontera independiente;
- `CE-PV001` como condición independiente de exigibilidad;
- una nueva regla general de composición;
- necesidad de preservar todas las diferencias particulares de `A`;
- obligación de preservar la incidencia después de cada transformación interna;
- necesidad de una estructura de almacenamiento independiente;
- necesidad de persistencia entre ejecuciones;
- necesidad de modelar `S1` y `S2` como operaciones técnicas separadas;
- necesidad de que la realización interprete `A`;
- y necesidad de que produzca automáticamente la posibilidad humana posterior.

La reducción de estas construcciones no implica que no puedan aparecer en realizaciones posteriores.

Implica únicamente que `PV-001` y el caso investigado no han demostrado todavía su necesidad.

---

### Criterio de realización

#### CR-PV001-01

> Una realización candidata satisface el criterio mínimo de `PV-001` cuando permite que aquello que una situación anterior hizo disponible pueda producir, directamente o mediante mediaciones derivadas, una diferencia relevante en las posibilidades humanas de una situación posterior.

El criterio no exige universalmente:

- persistencia literal;
- recuperación;
- consulta;
- representación determinada;
- mecanismo concreto de almacenamiento;
- identidad técnica;
- ni transformación específica.

---

### Decisiones de realización provisionales

Las siguientes decisiones pertenecen exclusivamente a la primera realización experimental.

No constituyen exigencias universales de `PV-001`.

#### DR-PV001-01 — Conservación directa

La primera realización experimental utilizará conservación directa entre el momento anterior y el posterior.

No se afirma que toda realización de `PV-001` deba conservar directamente aquello que fue puesto a disposición.

#### DR-PV001-02 — Representación mediante `string`

La aportación `A` se representará mediante una única `string`.

Esta elección no atribuye naturaleza textual a las aportaciones comprometidas por Product.

#### DR-PV001-03 — Memoria de proceso

`A` se conservará únicamente durante una ejecución.

No se introduce persistencia entre ejecuciones.

#### DR-PV001-04 — Variable directa

La conservación se realizará mediante una variable directa.

No se introduce una abstracción de almacenamiento independiente mientras no aparezca una pérdida que la justifique.

#### DR-PV001-05 — Dos momentos distinguibles

`S1` y `S2` se realizarán como dos momentos distinguibles de una misma ejecución.

La distinción no constituye una frontera arquitectónica.

---

### Experimento `EX-PV001-01`

#### Objetivo

Comprobar si la primera realización seleccionada puede proporcionar evidencia concreta de la incidencia comprometida por `PV-001`.

#### Aportación

```text
A = "La llave está en el cajón."
```

#### Situación posterior

```text
S2:

"Necesitas encontrar la llave."
```

#### Posibilidad considerada

```text
P:

"dirigirse al cajón para buscar la llave"
```

#### E+ — Condición positiva

```text
S1
↓
A queda disponible
↓
A se conserva
↓
S1 termina
↓
S2
↓
A vuelve a estar disponible
```

Se comprobará si una persona puede apoyarse en `A` para reconocer `P`.

#### E− — Condición negativa

```text
S1
↓
A queda disponible
↓
S1 termina
↓
S2
↓
A no está disponible
```

Se comprobará si `P` deja de estar abierta en los mismos términos en virtud de la aportación procedente de `S1`.

#### Variable experimental

La única diferencia controlada entre `E+` y `E−` será:

```text
disponibilidad de A en S2
```

Las demás condiciones del caso deberán mantenerse equivalentes.

#### Predicción

```text
Poss(S2 | A disponible)
        ≠
Poss(S2 | A ausente)
```

respecto de `P`.

La predicción no exige que la persona ejecute efectivamente `P`.

#### Condiciones de control

La información proporcionada por `A` no deberá estar disponible en `S2` por otra vía controlada dentro del experimento.

Si `P` ya queda abierta en los mismos términos independientemente de `A`, el contraste no permitirá atribuir la diferencia a aquello que `S1` hizo disponible.

Esta condición pertenece al diseño experimental y no constituye una propiedad universal de Product.

---

### Criterio de evidencia

#### CE-EX001-01

> `EX-PV001-01` proporciona evidencia a favor de esta realización de `PV-001` si, manteniendo constantes las demás condiciones, la disponibilidad de `A` en `E+` permite a una persona identificar una posibilidad `P` atribuible a `A` que no queda abierta en los mismos términos en `E−`.

---

### Criterio de falsación

#### CF-EX001-01

`EX-PV001-01` no proporciona evidencia a favor de esta realización si ocurre cualquiera de las siguientes condiciones:

- `E+` y `E−` no producen ninguna diferencia relevante respecto de `P`;
- la diferencia observada depende de una variable distinta de `A`;
- `P` ya queda abierta en los mismos términos en `E−`;
- `A` no procede realmente de aquello que quedó disponible en `S1`;
- o la separación entre `S1` y `S2` no permite establecer una situación posterior respecto del primer momento.

La falsación de `EX-PV001-01` no falsifica automáticamente `PV-001`.

Deberá determinarse si la pérdida afecta:

- al diseño experimental;
- a alguna decisión `DR-PV001-*`;
- a la mediación seleccionada;
- o a la suficiencia de la construcción concreta.

No deberá añadirse estructura nueva antes de identificar dicha pérdida.

---

### Pruebas técnicas previstas

Las pruebas automatizadas verificarán exclusivamente las propiedades técnicas de la construcción.

#### T-EX001-01 — Estado inicial

Al comenzar el experimento:

- `S1` está activa;
- puede introducirse `A`;
- existe una acción para finalizar `S1`;
- `S2` todavía no está activa.

#### T-EX001-02 — Transición

Tras introducir `A` y finalizar `S1`:

- `S1` deja de estar activa;
- `S2` pasa a estar activa;
- `A` continúa conservada durante la ejecución.

#### T-EX001-03 — Condición `E+`

En `E+`, al alcanzar `S2`, `A` vuelve a ponerse a disposición.

#### T-EX001-04 — Condición `E−`

En `E−`, al alcanzar `S2`, `A` no vuelve a ponerse a disposición.

#### T-EX001-05 — Control de equivalencia

`E+` y `E−` mantienen el mismo contexto experimental salvo por la disponibilidad de `A`.

#### T-EX001-06 — Separación entre momentos

La finalización de `S1` no depende de ninguna interacción posterior en `S2`.

---

### Límites de la evidencia técnica

Las pruebas técnicas pueden demostrar:

```text
A se introduce
↓
A se conserva
↓
S1 termina
↓
S2 aparece
↓
E+ vuelve a poner A a disposición
E− no vuelve a poner A a disposición
```

No pueden demostrar por sí solas:

```text
A
↓
produce una diferencia
en posibilidades humanas
```

Esta segunda relación pertenece al contraste experimental.

No deberá introducirse en la interfaz una posibilidad artificial cuya mera presencia haga verdadero por construcción aquello que el experimento pretende comprobar.

La corrección técnica constituye evidencia necesaria para el mecanismo seleccionado, pero no evidencia suficiente de `PV-001`.

---

### Resultado de la construcción y verificación técnica

`EX-PV001-01` ha sido construido conforme a las decisiones de realización provisionales `DR-PV001-01`–`DR-PV001-05`.

La construcción mantiene:

- conservación directa de `A`;
- representación de `A` mediante una única `string`;
- conservación exclusivamente en memoria de proceso;
- utilización de una variable directa;
- y distinción entre `S1` y `S2` como dos momentos de una misma ejecución.

No ha sido necesario introducir:

- persistencia entre ejecuciones;
- repositorio;
- `localStorage`;
- estructura de almacenamiento independiente;
- nueva capacidad arquitectónica;
- nueva responsabilidad;
- ni una frontera técnica adicional entre `S1` y `S2`.

La construcción se mantiene aislada de la aplicación histórica y no introduce sus decisiones experimentales como propiedades generales del producto ni como arquitectura normativa.

Las pruebas técnicas `T-EX001-01`–`T-EX001-06` han sido ejecutadas satisfactoriamente.

En particular, se ha verificado que:

- `S1` constituye el momento inicial;
- `A` puede introducirse durante `S1`;
- `S1` puede finalizar después de dicha introducción;
- la finalización de `S1` activa `S2`;
- `A` permanece conservada durante la ejecución;
- en `E+`, `A` vuelve a estar disponible en `S2`;
- en `E−`, `A` no vuelve a estar disponible en `S2`;
- `E+` y `E−` mantienen equivalente el contexto técnico restante;
- y la finalización de `S1` no depende de ninguna interacción posterior en `S2`.

La construcción supera asimismo las verificaciones generales de no regresión aplicables al proyecto:

- suite completa de pruebas;
- comprobación de tipos;
- análisis estático;
- y construcción del proyecto.

Durante la verificación se detectó una pérdida metodológica posible entre un criterio documentado y la prueba utilizada como evidencia de su satisfacción.

La pérdida no pertenecía a `PV-001` ni exigía modificar la realización experimental.

Fue reducida a una obligación operacional general de trazabilidad entre criterio y evidencia y consolidada en la documentación de desarrollo como `RT-DV-001`.

La corrección de dicha pérdida permitió reforzar las pruebas hasta verificar las condiciones constitutivas de los criterios técnicos y no únicamente consecuencias compatibles con ellos.

Estos resultados permiten considerar técnicamente validada la mediación seleccionada para `EX-PV001-01`.

No permiten todavía determinar si `CE-EX001-01` queda satisfecho.

En particular, las pruebas técnicas no demuestran que la disponibilidad de `A` produzca una diferencia relevante en las posibilidades humanas de `S2`.

Esa relación permanece pendiente del contraste experimental `E+ / E−`.

---

### Pérdida detectada durante la preparación del contraste experimental

Durante la preparación de la ejecución humana del contraste `E+ / E−` se identificó una posible pérdida experimental que no había sido revelada por la verificación técnica de la construcción.

La condición `E−` había sido definida como:

```text
S1
↓
A queda disponible
↓
S1 termina
↓
S2
↓
A no está disponible
```

La construcción técnica realiza esta condición haciendo que A no vuelva a ponerse a disposición mediante la realización al alcanzar `S2`.

Sin embargo, la preparación del contraste mostró que esta ausencia técnica no implica necesariamente que A haya dejado de estar disponible para la persona.

Para que A proceda realmente de aquello que quedó disponible en `S1`, la persona participante ha tenido acceso a A durante ese primer momento.

Por tanto, al alcanzar S2 bajo E− puede darse el siguiente recorrido:

```text
S1
↓
A queda disponible
↓
la persona accede a A
↓
S1 termina
↓
S2
↓
la realización no vuelve a poner A a disposición
↓
la persona puede conservar A mediante su memoria
↓
P puede continuar abierta en virtud de A
```

Se obtiene así una distinción que no había sido explicitada durante el diseño inicial del contraste:

```text
A no vuelve a estar disponible mediante la realización en S2
≠
A deja de estar disponible para la persona en S2
```

La pérdida afecta potencialmente a la capacidad discriminante de `E−`.

`CE-EX001-01` exige que la disponibilidad de A en E+ permita identificar una posibilidad `P` atribuible a A que no quede abierta en los mismos términos en `E−`.

A su vez, `CF-EX001-01` establece expresamente que el experimento no proporciona evidencia a favor de esta realización si P ya queda abierta en los mismos términos en `E−`.

La memoria de la persona constituye, por tanto, una vía posible mediante la cual A podría continuar interviniendo en S2 aun cuando la realización no vuelva a ponerla a disposición.

Esta observación no invalida las pruebas técnicas `T-EX001-01–T-EX001-06`.

En particular, permanece técnicamente demostrado que:

```text
E+
↓
la realización vuelve a poner A a disposición en S2

E−
↓
la realización no vuelve a poner A a disposición en S2
```

La pérdida aparece al intentar utilizar esta diferencia técnica para establecer el contraste humano requerido por `CE-EX001-01`.

Tampoco puede concluirse todavía que `EX-PV001-01` haya sido falsado.

No se ha ejecutado aún el contraste humano y, por tanto, no existe evidencia experimental que permita determinar si `CE-EX001-01` queda satisfecho o si concurre efectivamente alguna condición de `CF-EX001-01`.

La pérdida identificada obliga, sin embargo, a suspender provisionalmente la ejecución del contraste antes de introducir participantes, porque su capacidad para discriminar la incidencia atribuible a la disponibilidad de `A` no está
todavía justificada.

Conforme al criterio de falsación ya establecido, no deberá añadirse estructura nueva ni modificarse la construcción antes de determinar dónde reside exactamente la pérdida.

Queda abierta la siguiente cuestión:

> **Q-EX001-01 — ¿Puede construirse `E−` de modo que `P` no quede abierta en > los mismos términos en virtud de `A`, manteniendo que `A` proceda realmente > de `S1` y sin introducir una diferencia adicional capaz de explicar por sí misma el
> contraste?**

La cuestión deberá examinar si pueden satisfacerse simultáneamente las siguientes condiciones:

1. `A` procede realmente de aquello que quedó disponible en `S1`.
2. `E+` y `E−` mantienen equivalentes las demás condiciones relevantes del experimento.
3. La diferencia entre ambas condiciones permanece atribuible a la disponibilidad relevante de `A`.
4. `P` no queda ya abierta en los mismos términos en `E−` en virtud de una vía alternativa no discriminada por el experimento.

Hasta resolver `Q-EX001-01`, la construcción de `EX-PV001-01` permanece técnicamente validada, pero la ejecución de su contraste humano `E+ / E−` queda provisionalmente suspendida.

---

### Q-EX001-01 — Capacidad discriminante del contraste `E+ / E−`

#### Pregunta

¿Puede el contraste `E+ / E−` distinguir suficientemente la incidencia de `A` sobre las posibilidades humanas posteriores para proporcionar evidencia a favor de `R-PV001-001`, manteniendo suficientemente equivalentes las demás
condiciones relevantes?

#### Origen de la pregunta

La pregunta apareció durante la preparación del contraste humano de `EX-PV001-01`.

La condición `E−` elimina la nueva puesta a disposición de `A` en `S2`, pero la persona participante necesariamente ha tenido acceso a `A` durante `S1`.

Por tanto, la ausencia de reexposición no implica necesariamente ausencia de incidencia posterior de `A`, ya que ésta puede continuar mediante conservación cognitiva.

La pérdida inicialmente detectada fue:

```text
A no vuelve a estar disponible mediante la realización en S2
≠
A deja de estar disponible para la persona en S2
```

La investigación de `Q-EX001-01` se dirigió a determinar si esta diferencia invalida el contraste o revela una exigencia experimental indebidamente añadida.

#### Intento de falsación

Se examinó primero si `CE-EX001-01` exige que `E−` garantice previamente que `P` no quede abierta en virtud de `A`.

La respuesta fue negativa.

Si `P` aparece también en `E−`, el resultado puede registrarse como ausencia del diferencial exigido por `CE-EX001-01`, pero ello no demuestra por sí mismo que `A` no haya incidido.

Se examinó después si la conservación cognitiva de `A` constituye
necesariamente una variable extraña respecto de `PV-001`.

También se rechazó esta interpretación.

Puede existir legítimamente el recorrido:

```text
S1
↓
A queda disponible
↓
la persona accede a A
↓
conservación cognitiva
↓
S2
↓
A incide posteriormente
↓
P
```

La memoria puede constituir, por tanto, una mediación de la incidencia de `A` y no necesariamente una causa independiente de ella.

A continuación se examinó si `R-PV001-001` exige que `A` vuelva a ponerse a disposición en `S2`.

**Entre las decisiones `DR-PV001-*` se encuentran la conservación directa de `A` durante una ejecución y la distinción entre `S1` y `S2`, pero no se identificó ninguna decisión que convierta la reexposición de `A` en `S2` en condición necesaria de la realización.**

La reexposición aparece en `EX-PV001-01` como una decisión experimental contingente destinada a hacer observable la incidencia.

Por tanto:

```text
R-PV001-001
↓
A se conserva entre S1 y S2

no implica necesariamente

S2
↓
A debe volver a ponerse a disposición
```

Se examinó entonces si `CR-PV001-01` exige una dependencia causal
contrafactual:

```text
con A → P
sin A → ¬P
```

No se encontró tal exigencia.

La formulación mínima compatible con `CR-PV001-01` exige que `A` pueda producir, directa o mediadamente, una diferencia relevante en las posibilidades humanas posteriores.

Esto requiere una incidencia positiva atribuible a `A`, pero no se derivó la obligación adicional de demostrar que, en ausencia de `A`, dicha diferencia desaparecería.

Se consideró también la posibilidad de sustituir el contraste por una trazabilidad de contenido:

```text
A[x]
↓
P[x]
```

Esta posibilidad tampoco pudo elevarse a exigencia general, ya que `CR-PV001-01` admite mediaciones transformativas en las que la incidencia de `A` no conserve necesariamente un elemento reconocible de su contenido.

De ello se obtuvo una distinción entre:

```text
criterio general de evidencia
↓
debe permitir atribuir a A una incidencia posterior
más allá de la mera sucesión

y

operacionalización experimental
↓
debe elegir necesariamente algún indicador observable contingente
```

Un contraste contrafactual, una traza de contenido, un comportamiento, un autoinforme corroborado u otro indicador pueden constituir estrategias experimentales posibles, pero ninguna de ellas queda convertida por ello en obligación de `CR-PV001-01`.

#### Resultado

`E+ / E−` puede constituir legítimamente una operacionalización contingente.

Sin embargo, el contraste concreto definido por `EX-PV001-01` no proporciona por sí solo evidencia suficiente de la incidencia general `A → P` que pretende contrastar.

En `E−` se elimina:

```text
reexposición de A en S2
```

pero no necesariamente:

```text
incidencia posterior de A
```

porque puede permanecer abierta la vía:

```text
A disponible en S1
↓
conservación cognitiva
↓
incidencia en S2
↓
P
```

Por ello, si se obtiene:

```text
E+ → P
E− → P
```

la ausencia de diferencial no permite concluir que `A` carezca de incidencia.

Y si se obtiene:

```text
E+ → P
E− → ¬P
```

el diferencial observado tampoco basta por sí mismo, bajo el diseño humano previsto, para atribuirlo específicamente a la reexposición de `A`, ya que pueden intervenir diferencias relevantes entre participantes.

El contraste conserva capacidad probatoria respecto de una hipótesis más estrecha:

```text
la reexposición de A en S2
puede producir un efecto adicional sobre P
```

pero dicha hipótesis no equivale al compromiso mínimo de `CR-PV001-01`.

#### Conclusión

`Q-EX001-01` queda resuelta.

La pérdida detectada no pertenece a `PV-001`, a `CR-PV001-01` ni, con la evidencia disponible, a `R-PV001-001`.

Se localiza en la adecuación probatoria del dispositivo `EX-PV001-01` para el objetivo experimental que se le había asignado.

La variable:

```text
disponibilidad de A en S2
```

es una decisión contingente de operacionalización y no una exigencia derivada
de la realización.

El contraste `E+ / E−` técnicamente construido permanece válido como dispositivo para contrastar específicamente un posible efecto adicional de la reexposición, pero no queda justificado como evidencia suficiente, por sí solo, de la incidencia general exigida por `CR-PV001-01`.

Por tanto:

```text
PV-001
→ no falsado

CR-PV001-01
→ no falsado

R-PV001-001
→ no falsada

EX-PV001-01
→ construcción técnicamente validada
→ capacidad probatoria insuficiente para el objetivo originalmente asignado

contraste humano E+ / E−
→ no procede ejecutarlo para inferir la satisfacción de CR-PV001-01 en los términos inicialmente previstos
```

#### Estado

**Resuelta.**

La investigación no continuará intentando eliminar la memoria ni reparar el contraste `E+ / E−` como si su estructura diferencial fuese una obligación de `PV-001`.

El siguiente paso consistirá en determinar qué operacionalización experimental contingente puede proporcionar evidencia suficiente de la incidencia exigida por `CR-PV001-01` sin convertir el indicador elegido en una nueva obligación de la teoría.

---

### Resultado provisional

La realización `R-PV001-001` permanece como realización mínima derivada de `PV-001`.

`EX-PV001-01` ha sido construido y su mediación técnica ha sido validada mediante `T-EX001-01`–`T-EX001-06`.

La investigación de `Q-EX001-01` resolvió la pérdida detectada durante la preparación del contraste humano `E+ / E−`.

La pérdida no fue localizada en `PV-001`, en `CR-PV001-01` ni, con la evidencia disponible, en `R-PV001-001`.

Se determinó que la disponibilidad de `A` en `S2` constituye una decisión contingente de operacionalización introducida por `EX-PV001-01` y no una exigencia necesaria derivada de la realización.

La construcción distingue técnicamente entre:

```text
E+
↓
la realización vuelve a poner A a disposición en S2

E−
↓
la realización no vuelve a poner A a disposición en S2
```

Esta distinción permanece técnicamente validada.

Sin embargo, no equivale necesariamente a:

```text
E+
↓
A puede incidir posteriormente

E−
↓
A no puede incidir posteriormente
```

porque `A`, después de haber quedado disponible en `S1`, puede continuar incidiendo posteriormente mediante conservación cognitiva u otra mediación compatible con `CR-PV001-01`.

La investigación posterior ha permitido precisar además que `CR-PV001-01` no exige una dependencia causal contrafactual del tipo:

```text
con A → P
sin A → ¬P
```

ni exige que una posibilidad particular tenga que aparecer o ejercerse efectivamente en `S2`.

El compromiso mínimo investigado consiste en que `A` pueda incidir de manera relevante en la configuración de las posibilidades humanas posteriores y que dicha configuración dependa efectivamente, en el sentido requerido por el compromiso, de esa incidencia.

La evidencia de esta incidencia no queda ligada a una forma experimental particular.

No se ha derivado una obligación de utilizar reexposición de `A`, contraste contrafactual, traza de contenido, conducta, autoinforme, cadena mediadora ni ningún otro indicador determinado.

La revisión de las condiciones provisionales `COE-*` ha permitido reducir las exigencias de suficiencia probatoria a dos condiciones epistemológicas:

```text
CES-01 — Anclaje epistemológico

CES-02 — Adecuación de contenido
```

`CES-01` exige que aquello por lo que una estructura probatoria `EP` cuenta como evidencia mantenga una conexión no accidental y epistemológicamente pertinente con el fenómeno investigado.

`CES-02` exige que el contenido sustentado por `EP` autorice íntegramente la hipótesis `H` que pretende establecerse, sin exceder aquello que la evidencia permite sostener.

No se ha identificado una tercera condición epistemológica independiente cuya ausencia haga insuficiente a `EP` una vez satisfechas ambas.

La suficiencia epistemológica debe distinguirse de la autorización metodológica para aceptar que dicha suficiencia ha quedado establecida.

Se ha obtenido para ello:

```text
CMA-01 — Aceptabilidad metodológicamente justificada
```

La atribución de que `EP` satisface las `CES` requiere:

```text
a) auditabilidad suficiente;

b) control crítico mediante pruebas justificadamente
   pertinentes para la estructura de la justificación;

c) ausencia de una falsación pertinente no resuelta
   cuya supervivencia impida establecer alguna CES requerida.
```

No se ha identificado un conjunto universal de pruebas experimentales concretas.

Las pruebas metodológicas de evaluación (`PME`) deben seleccionarse en función de los modos de fallo probatoriamente relevantes de la justificación concreta.

Una `PME` se individúa por la vulnerabilidad contra la que dirige el control crítico y no por el procedimiento experimental empleado para ejecutarla.

Las decisiones concretas mediante las que una prueba se hace observable pertenecen al nivel contingente de las decisiones experimentales de operacionalización (`DEO`).

Por tanto:

```text
CES
↓
condiciones de suficiencia epistemológica

CMA
↓
condición de aceptación metodológica

PME
↓
pruebas pertinentes frente a vulnerabilidades
de la justificación concreta

DEO
↓
decisiones contingentes mediante las que
esas pruebas se operacionalizan
```

Esta distinción permite precisar el estatuto de `EX-PV001-01`.

El contraste `E+ / E−` constituye una decisión contingente de operacionalización.

Permanece técnicamente válido para investigar específicamente un posible efecto adicional de la reexposición de `A` en `S2`, pero no proporciona por sí solo evidencia suficiente de la incidencia general exigida por `CR-PV001-01`.

Su insuficiencia para ese objetivo no falsifica `PV-001`, `CR-PV001-01` ni `R-PV001-001`, ni convierte el contraste diferencial en una obligación que deba ser reparada.

Por tanto, el estado provisional queda establecido como:

```text
PV-001
→ no falsado

CR-PV001-01
→ no falsado

R-PV001-001
→ no falsada

EX-PV001-01
→ construido
→ técnicamente validado
→ capacidad probatoria insuficiente para el objetivo originalmente asignado
→ potencialmente conservable para una hipótesis más estrecha
  relativa al efecto adicional de la reexposición

Q-EX001-01
→ resuelta

COE-*
→ revisadas
→ no sobreviven como cuatro condiciones epistemológicas autónomas
→ reducidas sin pérdida a la estructura CES / CMA / PME / DEO

CES-01
→ anclaje epistemológico

CES-02
→ adecuación de contenido

CMA-01
→ aceptabilidad metodológicamente justificada

PME
→ seleccionadas en función de las vulnerabilidades
  probatoriamente relevantes de cada justificación

DEO
→ contingentes respecto del dispositivo experimental

contraste humano E+ / E−
→ no procede ejecutarlo para inferir la satisfacción de CR-PV001-01
  en los términos inicialmente previstos
```

La investigación permanece abierta.

El problema pendiente ya no consiste en reparar el contraste `E+ / E−` ni en determinar abstractamente qué forma universal debe poseer toda evidencia de incidencia.

La investigación dispone ahora de criterios para evaluar una estructura probatoria sin convertir su operacionalización concreta en obligación de la teoría.

El siguiente paso consiste en aplicar estos criterios al caso específico de `CR-PV001-01`: formular con precisión la hipótesis `H` que debe quedar sustentada, proponer una estructura probatoria `EP`, identificar las vulnerabilidades probatoriamente relevantes de su justificación, determinar las `PME` pertinentes y sólo entonces seleccionar las `DEO` necesarias para hacer ejecutables dichas pruebas.

---

### Razones para mantener abierta la investigación

La investigación permanece abierta porque la corrección técnica de `EX-PV001-01` no constituye todavía evidencia suficiente de la incidencia comprometida por `PV-001`.

La construcción y su verificación técnica han sido completadas.

La investigación de `Q-EX001-01` mostró que el contraste `E+ / E−` definido por `EX-PV001-01` no proporciona por sí solo evidencia suficiente de la incidencia general exigida por `CR-PV001-01`.

La pérdida fue localizada en la adecuación probatoria del dispositivo experimental para el objetivo originalmente asignado, sin que resultaran falsados `PV-001`, `CR-PV001-01` ni, con la evidencia disponible, `R-PV001-001`.

La investigación posterior ha permitido superar el problema de determinar abstractamente qué condiciones debe satisfacer una operacionalización experimental.

Se han establecido:

```text
CES-01
→ anclaje epistemológico

CES-02
→ adecuación de contenido

CMA-01
→ aceptabilidad metodológicamente justificada
```

y se ha distinguido entre:

```text
PME
→ pruebas seleccionadas en función de las vulnerabilidades
  probatoriamente relevantes de la justificación concreta

DEO
→ decisiones contingentes mediante las que
  dichas pruebas se operacionalizan
```

Por tanto, la investigación ya no permanece abierta por ausencia de criterios generales de suficiencia probatoria.

Permanece abierta porque dichos criterios todavía no han sido aplicados hasta obtener una estructura probatoria concreta capaz de sustentar `CR-PV001-01`.

Queda pendiente:

1. formular con precisión la hipótesis H cuyo establecimiento proporcionaría evidencia pertinente respecto de `CR-PV001-01`;
2. proponer una estructura probatoria `EP` candidata a sustentar dicha hipótesis;
3. justificar provisionalmente la relación `EP` → `H` y evaluar su satisfacción de `CES-01` y `CES-02`;
4. identificar los modos de fallo probatoriamente relevantes de esa justificación;
5. seleccionar y justificar las `PME` pertinentes para someter dichos modos de fallo a control crítico;
6. determinar las `DEO` necesarias para hacer ejecutables las PME seleccionadas, sin convertir ninguna decisión contingente de operacionalización en una obligación de `CR-PV001-01`;
7. determinar, a partir de lo anterior, si `EX-PV001-01` puede conservarse para el nuevo objetivo probatorio, debe reformularse o resulta necesario derivar un nuevo dispositivo experimental;
8. construir y validar técnicamente cualquier modificación o nuevo dispositivo que resulte necesario;
9. ejecutar únicamente entonces la contrastación humana correspondiente;
10. evaluar la evidencia obtenida mediante las `CES` y determinar, conforme a `CMA-01`, si puede aceptarse metodológicamente como evidencia suficiente de `H`;
11. determinar la incidencia del resultado sobre el estatuto de `R-PV001-001` respecto de `CR-PV001-01`;
12. decidir, a partir de dicha evaluación, si las decisiones `DR-PV001-`\* deben conservarse, reducirse o sustituirse.

La investigación sólo podrá cerrarse cuando la estructura probatoria finalmente obtenida haya sido evaluada respecto de las `CES`, haya satisfecho las exigencias metodológicas de CMA-01 y proporcione base suficiente para determinar el estatuto de R-PV001-001 respecto de `CR-PV001-01`.

---

## Punto de continuación

> Formular con precisión la hipótesis `H` cuyo establecimiento proporcionaría evidencia pertinente respecto de `CR-PV001-01`, determinando exactamente qué debe quedar sustentado acerca de la incidencia de `A` en la configuración de las posibilidades humanas posteriores, sin introducir en `H` exigencias no derivadas de `PV-001` o `CR-PV001-01` y sin presuponer todavía qué estructura probatoria `EP`, qué `PME`, qué `DEO` ni qué dispositivo experimental deberán utilizarse para establecerla.

---
