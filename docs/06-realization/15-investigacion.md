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

La investigación se abre a partir de `PV-001`, primera vertical consolidada en `docs/08-project/02-PRODUCT.md`.

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

## Continuación de la investigación de `R-PV001-001`

La investigación se reanuda desde la obligación pendiente de formular con
precisión la hipótesis cuyo establecimiento proporcionaría evidencia pertinente
respecto de `CR-PV001-01`.

El tramo anterior había establecido que:

- `EX-PV

---

### 1. Formulación de la hipótesis `H`

Se examinó inicialmente qué debe quedar sustentado para proporcionar evidencia pertinente respecto de `CR-PV001-01`.

El criterio exige que `A` pueda producir, directa o mediadamente, una diferencia relevante en las posibilidades humanas posteriores.

No exige:

- exclusividad causal;
- necesidad de `A`;
- suficiencia de `A`;
- dependencia contrafactual general;
- persistencia literal de su contenido;
- reexposición;
- ni que toda diferencia de `A` produzca necesariamente una diferencia
  posterior.

Se formula así:

#### H-PV001-01

> Existe una realización admisible en la que una diferencia >atribuible a `A` puede intervenir, directa o mediadamente, en >la configuración de una diferencia relevante de las >posibilidades humanas posteriores.

La formulación posee alcance existencial.

No afirma:

```text
∀A:
ΔA → ΔPoss
```

ni:

```text
sin A → ¬Poss
```

ni exige una relación universal de determinación.

---

### 2. Primera descomposición de la estructura probatoria

Para sustentar `H-PV001-01` deben establecerse dos pretensiones distintas.

La primera concierne al origen de una diferencia intermedia.

La segunda concierne a la relevancia de esa diferencia respecto de las posibilidades humanas posteriores.

Se obtiene:

```text
EP
=
EP-01
∧
EP-02
```

#### EP-01 — Origen atribuible a `A`

Debe quedar establecido que una diferencia observable `Δx` tiene su origen en una diferencia previa de `A` dentro de la realización considerada.

Se expresa provisionalmente como:

```text
Origin_A(Δx)
```

La pretensión no exige que `x` conserve semánticamente `A`.

Tampoco exige identidad representacional, copia de contenido ni una mediación particular.

---

#### EP-02 — Relevancia diferencial respecto de las posibilidades humanas

Debe quedar establecido que la diferencia intermedia `x` puede ser relevante para una diferencia en las posibilidades humanas posteriores consideradas.

Durante la investigación se examinó si esta pretensión exigía desde el principio una relación fuerte de dependencia.

No se obtuvo dicha exigencia.

La pregunta quedó satisfecha mediante una relación más débil:

```text
RDL_W(x, Disp_W)
```

donde `RDL` expresa relevancia diferencial local dentro del testigo y `Disp_W` expresa la disponibilidad de la posibilidad humana considerada en dicho testigo.

La investigación comprobó que las condiciones supervivientes previamente derivadas para `H` no exigían una noción adicional de necesidad, suficiencia o dependencia contrafactual general.

Por tanto, no se elevó `RDL` a una noción más fuerte de dependencia.

---

### 3. Estructura probatoria superviviente

La forma mínima obtenida es:

```text
EP-01
Origin_A(Δx)

EP-02
RDL_W(x, Disp_W)
```

y:

```text
EP
=
Origin_A(Δx)
∧
RDL_W(x, Disp_W)
```

La inferencia candidata es:

```text
Origin_A(Δx)
∧
RDL_W(x, Disp_W)
─────────────────────
H-PV001-01
```

La fuerza de esta inferencia es exclusivamente local y existencial.

No autoriza la conclusión:

```text
Δx → ΔDisp_W
```

como ley general.

Tampoco autoriza:

```text
A → Disp_W
```

como relación necesaria o suficiente universal.

---

### 4. Auditoría de `EP-01` frente a `CES-01`

`EP-01` debe satisfacer `CES-01 — Anclaje epistemológico`.

La vulnerabilidad fundamental identificada es:

```text
A cambia
x cambia

pero

Δx no procede realmente de ΔA
```

Una mera coincidencia entre diferencias no proporcionaría un anclaje epistemológicamente suficiente.

La estructura mínima deberá permitir establecer:

```text
A₀ ≠ A₁

misma constitución experimental relevante

A₀ → x₀
A₁ → x₁

x₀ ≠ x₁
```

sin definir `x₀/x₁` mediante aquello que posteriormente se pretenda demostrar respecto de `Disp_W`.

Se obtiene así la vulnerabilidad específica de `EP-01`:

```text
VF-OR01
```

> La diferencia `Δx` podría tener un origen distinto de `A` o >quedar determinada por una variable adicional no controlada.

---

### 5. `PME-OR01`

Para intentar falsar `VF-OR01` se selecciona:

#### PME-OR01 — Prueba de origen de `Δx`

La prueba deberá intentar falsar:

```text
Origin_A(Δx)
```

manteniendo constante la constitución experimental relevante y variandoúnicamente la realización de `A` que alimenta la producción de `x`.

La prueba no exige todavía ninguna forma concreta de:

- representación de `A`;
- mecanismo `A → x`;
- observación de `x`;
- estructura posterior de `Disp_W`.

Éstas pertenecen al nivel de `DEO`.

---

### 6. `DEO-OR01`

Para hacer ejecutable `PME-OR01` se deriva una operacionalización mínima:

```text
A_repr
↓
g_Γ
↓
x
```

donde:

- `A_repr` constituye una representación técnica contingente de `A`;
- `g_Γ` constituye una regla experimental contingente de producción de `x`;
- `x` debe ser objetivamente discriminable antes de utilizar cualquier
  clasificación posterior.

Ninguna propiedad de:

```text
CR-Term
CompletesStruct
Disp_W
```

puede utilizarse para constituir `g_Γ` ni para individualizar `x`.

Se conserva así la distinción:

```text
PME-OR01
≠
DEO-OR01
```

La primera se individúa por la vulnerabilidad que intenta falsar.

La segunda constituye únicamente una forma contingente de hacer esa prueba ejecutable.

---

### 7. Auditoría de `EX-PV001-01` frente a `PME-OR01 + DEO-OR01`

Se examinó si el dispositivo ya construido `EX-PV001-01` podía:

1. conservarse sin modificación;
2. conservarse mediante una modificación mínima;
3. o debía sustituirse.

`EX-PV001-01` ya proporciona:

- dos momentos distinguibles `S1/S2`;
- una representación técnica de `A`;
- una variable en memoria;
- conservación durante una ejecución;
- y una transición sin interacción posterior en `S2`.

Sin embargo, su diferencia experimental está constituida directamente por:

```text
condition = E+ / E−
```

y:

```text
E+ → A se muestra en S2
E− → A no se muestra en S2
```

Esta estructura no realiza la nueva prueba de origen requerida.

La diferencia posterior se encuentra directamente codificada por la condición experimental.

Por tanto:

```text
EX-PV001-01
→ no puede conservarse sin modificación
```

pero la infraestructura técnica superviviente tampoco obliga a descartar todo el dispositivo.

Se obtiene:

```text
EX-PV001-01
→ conservable parcialmente
→ requiere reformulación estructural
```

---

### 8. Investigación de la adaptación `A_repr → x`

Se examinó inicialmente si la conservación directa ya existente podía actuar como generador mínimo mediante:

```text
g = id
```

de modo que:

```text
x = estado técnico conservado de A
```

La posibilidad fue auditada contra el dominio previamente exigido para `x`.

Se comprobó que la mera conservación de una `string` no podía identificarse automáticamente con el dominio utilizado posteriormente por la relación experimental de relevancia sin introducir una adaptación no justificada.

Por tanto:

```text
g = id
```

no pudo mantenerse como reducción completa de la costura.

---

### 9. Reducción de la adaptación hacia el dominio de relevancia

Se investigó entonces si la relación `Γ` utilizada para evaluar relevancia podía aceptar directamente el estado conservado de `A`.

La respuesta fue negativa sin una adaptación explícita.

Se introdujo provisionalmente:

```text
g_Γ : A_repr → Dom(Γ)
```

y se auditó cuál podía ser su contenido mínimo.

`g_Γ` debía:

- conservar discriminación entre realizaciones distintas de `A`;
- no introducir significado adicional;
- no consultar `Γ`;
- y no codificar directamente:

```text
CTRRel = true / false
```

en sus salidas.

---

### 10. Eliminación de selección retrospectiva de referentes

Se examinó si podían seleccionarse dos referentes:

```text
ξ₀ / ξ₁ ∈ Dom(Γ)
```

sin consultar previamente `Γ`.

La investigación descartó cualquier procedimiento que eligiera
retrospectivamente el par precisamente porque producía el resultado favorable.

Se exigió que los referentes:

- pudieran individualizarse antes e independientemente de `Γ`;
- fueran distinguibles por identidad;
- y no contuvieran propiedades equivalentes a
  `conectado/no conectado`.

Esto permitió conservar una correspondencia:

```text
A₀ / A₁
↓
g_Γ
↓
ξᵃ / ξᵇ
↓
Γ
```

sin introducir libertad posterior entre la salida de `g_Γ` y el `x` utilizado por `EP-02`.

---

### 11. Reapertura de `EP-02`

Una vez estabilizada `EP-01`, se investigó cuál era la operacionalización observable mínima de:

```text
RDL_W(x, Disp_W)
```

sin copiar al dispositivo toda la maquinaria abstracta utilizada durante la construcción del testigo.

La primera forma considerada fue:

```text
Build_W
+
p*
+
CR-Disp
```

Se buscó una acción corporal y una interfaz tan pobres como fuera posible que permitieran distinguir:

```text
Disp_W = true
Disp_W = false
```

sin codificar directamente el booleano.

---

### 12. Eliminación de `ExistsContinuation`

Se examinó provisionalmente una relación:

```text
ExistsContinuation(I₁,F,S)
```

como criterio observable de disponibilidad.

La relación no sobrevivió como fundamento independiente.

Si las configuraciones que contenían la continuación eran seleccionadas en función del resultado buscado, la construcción simplemente desplazaba el booleano de disponibilidad a otra tabla.

Por tanto `ExistsContinuation` fue eliminado como primitiva de la
operacionalización.

---

### 13. Investigación de la generación `x → Rel_S`

Se examinó si `x` podía generar diferencias estructurales mediante una regla común:

```text
x → Rel_S
```

capaz de producir tanto:

```text
Δx ∧ ΔRel
```

como:

```text
Δx ∧ ¬ΔRel.
```

Se rechazó una tabla del tipo:

```text
ξᵃ → arista presente
ξᵇ → arista ausente
```

porque codificaba directamente la diferencia buscada.

---

### 14. Reducción de `Λ(x,κ)` y del referente invariante `κ`

Se investigó provisionalmente:

```text
Λ(x,κ)
```

sobre un dominio de tres referentes.

El objetivo era obtener una regla neutral capaz de producir:

- un caso diferencial favorable;
- y un control `Δx ∧ ¬ΔRel`.

Sin embargo, la introducción de un referente invariante `κ` resultó depender de una estructura añadida específicamente para convertir diferencias de identidad de `x` en diferencias de relación.

Se examinó asimismo una construcción en la que una relación aparecía cuando:

```text
x = κ.
```

Aunque esta construcción podía evitar circularidad lógica, seguía careciendo de un fundamento más básico que justificara por qué una mera coincidencia de identidad debía producir una relación estructural.

La vía fue abandonada.

---

### 15. Eliminación de `Attach`, compatibilidad y transmisión

Se investigó si la estructura podía reconstruirse mediante:

- posiciones;
- fronteras;
- adscripción de referentes;
- `Attach`;
- compatibilidad;
- transmisión;
- o unión de segmentos.

Cada intento trasladaba la misma obligación a una relación adicional cuya legitimidad debía volver a justificarse.

No sobrevivió una necesidad independiente de:

```text
Attach
Match
Join
```

ni de una interfaz general de transmisión.

---

### 16. Reconstrucción desde la constitución de `p*`

La investigación volvió entonces a la propia constitución de la acción mínima
`p*`.

Se separaron dos pretensiones:

```text
PartPossible_h
```

y:

```text
CompletesStruct.
```

La primera expresa que la participación humana considerada puede formar parte de la realización.

La segunda expresa que la misma realización posee una continuación estructural capaz de completar `p*`.

Se investigó qué modificación estructural mínima podía variar:

```text
CompletesStruct
```

manteniendo:

```text
PartPossible_h
```

invariante.

---

### 17. Eliminación de `Q_σ / R_σ / q_F / Reach`

Se exploró inicialmente una realización mediante:

```text
Q_σ
R_σ
q_F
Reach_Rσ(q_F)
```

Se auditó sucesivamente:

- la constitución neutral de `R_σ`;
- la independencia de `F`;
- la pertenencia de `F` a la misma `σ*`;
- la correspondencia `q_F ↔ F`;
- el origen desde el que debía calcularse `Reach`;
- y la representación técnica de la participación corporal.

Cada paso mostraba riesgo de selección retrospectiva del nodo, ruta u origen
que debía producir la completabilidad.

La maquinaria fue progresivamente reducida.

Finalmente no quedó justificada la necesidad de conservar:

```text
Q_σ
R_σ
q_F
q_h
Reach
```

en la operacionalización mínima.

---

### 18. Eliminación de `SAMEWAY`, `w*` y `Ways(σ*)`

Se examinó posteriormente cómo impedir que:

```text
PartPossible_h
```

y:

```text
CompletesStruct
```

fueran satisfechas por dos subrealizaciones independientes reunidas artificialmente bajo una realización mayor.

Se formuló provisionalmente una condición de no factorización:

```text
SAMEWAY-01
```

y posteriormente un testigo común:

```text
w*
```

perteneciente a:

```text
Ways(σ*).
```

La auditoría mostró que esta capa podía eliminarse si `σ*` se individualizaba con la granularidad correcta.

La propia `σ*` podía actuar como único testigo concreto de ambas propiedades.

Por tanto fueron eliminados:

```text
SAMEWAY
w*
Ways(σ*)
```

sin pérdida, conservándose únicamente la obligación de que
`PartPossible_h` y `CompletesStruct` se establezcan sobre la misma realización concreta.

---

### 19. Núcleo reducido de `Disp_W`

Después de las eliminaciones, el núcleo superviviente quedó:

```text
Disp_W
:=
PartPossible_h
∧
CompletesStruct
```

dentro de la misma `σ*`.

No se requiere una relación adicional de acoplamiento.

La disponibilidad de la posibilidad humana considerada queda realizada cuando:

1. la participación humana relevante es posible;
2. y la misma realización posee la propiedad estructural necesaria para
   completar `p*`.

---

### 20. Reducción de `CompletesStruct`

`CompletesStruct` permanecía como única pieza cuya operacionalización no había sido suficientemente reducida.

Se examinó si era necesario conservar transitabilidad técnica mediante
`Q_σ/R_σ/q_F`.

No se encontró dicha necesidad.

Se derivó una alternativa más pobre mediante una continuación admisible determinista:

```text
Cont(σ*,S) → E_S
```

y un criterio terminal:

```text
CR-Term(E_S).
```

Cuando la continuación admisible es única, resulta suficiente:

```text
CompletesStruct(σ*,F,S)
⇔
CR-Term(E_S).
```

La falsedad de `CompletesStruct` puede entonces quedar cerrada sin búsqueda sobre un espacio de rutas, siempre que la constitución del dispositivo excluya una segunda continuación relevante.

---

### 21. Dominio neutral de resultados

Para evitar que la continuación determinista tradujera directamente cada `x` en:

```text
terminal / no terminal
```

se exigió un dominio con al menos tres referentes neutrales.

Debe ser posible obtener:

```text
x₁ ≠ x₂
```

con distinta clasificación terminal y, simultáneamente:

```text
x₂ ≠ x₃
```

con la misma clasificación terminal.

Esto proporciona el control:

```text
Δx
∧
¬ΔCompletesStruct.
```

La diferencia de `x` no puede, por tanto, contener por definición la diferencia de completabilidad.

---

### 22. Eliminación de `K` y `β`

Se examinó si `x` debía contener un discriminador recuperable:

```text
k
```

o si debía construirse:

```text
β : X → K
```

para alimentar la capa posterior.

La auditoría mostró que una asignación inyectiva adicional no aportaba contenido probatorio respecto de utilizar directamente la identidad ya establecida de `x`.

Por tanto fueron eliminados:

```text
K
β.
```

---

### 23. Adaptación mínima `Out`

Para mantener separados el dominio de `EP-01` y el resultado observable de `EP-02` sin introducir una nueva tabla, se derivó una copia tipada uniforme:

```text
Out : X → O_X
```

con:

```text
Out(x₁) = Out(x₂)
⇔
x₁ = x₂.
```

`Out`:

- preserva exactamente la discriminación de `x`;
- no consulta terminalidad;
- no consulta `Disp_W`;
- y no añade significado.

Su función es exclusivamente de integración entre ambos niveles.

---

### 24. Representante terminal independiente

La clasificación terminal requiere un representante:

```text
xᵗ ∈ X
```

y:

```text
t = Out(xᵗ).
```

Se define:

```text
CR-Term_F(Out(x))
⇔
Out(x) = Out(xᵗ)
```

y, por inyectividad de `Out`:

```text
CR-Term_F(Out(x))
⇔
x = xᵗ.
```

La elección de `xᵗ` constituye una `DEO`.

No puede derivarse de:

```text
g_Γ(A₀)
g_Γ(A₁)
```

ni del resultado posterior de `Disp_W`.

---

### 25. Auditoría global de independencia

La cadena superviviente quedó:

```text
A
↓
g_Γ
↓
x
↓
Out(x)
↓
CR-Term
↓
CompletesStruct
        │
PartPossible_h
        │
        ▼
      Disp_W
```

por una vía, y:

```text
F
↓
xᵗ
↓
Out(xᵗ)
```

por otra.

Las dependencias permitidas son:

```text
A → g_Γ → x
x → Out(x)

F → xᵗ → Out(xᵗ)

Out(x), Out(xᵗ)
→ CR-Term

CR-Term
→ CompletesStruct

PartPossible_h
∧
CompletesStruct
→ Disp_W
```

Quedan prohibidas:

```text
CR-Term → g_Γ
xᵗ → g_Γ
g_Γ(A) → elección de xᵗ
Disp_W esperado → elección de xᵗ
Disp_W esperado → selección de ramas
CompletesStruct → selección de ramas
CR-Term → PartPossible_h
x = xᵗ → PartPossible_h.
```

Asimismo queda prohibido reparar un resultado desfavorable modificando
retrospectivamente:

- `g_Γ`;
- `xᵗ`;
- o el par principal.

---

### 26. Control de separabilidad

La estructura exige al menos tres referentes:

```text
X = {x¹, x², x³}.
```

Si:

```text
xᵗ = x¹
```

debe ser posible obtener:

```text
CR-Term(Out(x²))
=
CR-Term(Out(x³))
=
false
```

aunque:

```text
x² ≠ x³.
```

Con `PartPossible_h` mantenida invariante:

```text
Disp_W(x²)
=
Disp_W(x³)
=
false.
```

Por tanto:

```text
Δx
↛
ΔDisp_W
```

queda establecido por construcción.

La diferencia positiva del par principal no se encuentra así incorporada en la mera identidad de `x`.

---

### 27. Estructura probatoria final antes de construcción

La estructura superviviente queda:

```text
EP-01

A
↓
g_Γ
↓
x

Origin_A(Δx)
```

y:

```text
EP-02

x
↓
Out(x)
↓
CR-Term
↓
CompletesStruct
        │
PartPossible_h
        │
        ▼
      Disp_W
```

con:

```text
RDL_W(x,Disp_W)
```

evaluada mediante un contraste principal y un control de separabilidad.

La estructura completa es:

```text
EP
=
Origin_A(Δx)
∧
RDL_W(x,Disp_W).
```

---

### 28. Auditoría de la estructura frente a `CES-01`

`EP-01` puede proporcionar anclaje epistemológico si la diferencia de `A` es objetivamente establecida antes de la producción de `x` y la misma `g_Γ` relaciona dichas realizaciones con referentes discriminables.

`EP-02` puede proporcionar anclaje epistemológico porque:

- `Out` preserva identidad sin clasificar;
- `CR-Term` se fija independientemente;
- `CompletesStruct` deriva de una continuación determinista cerrada;
- `PartPossible_h` permanece independiente de la clasificación terminal;
- y `Disp_W` deriva exclusivamente de la conjunción de ambas propiedades.

No se requiere recuperar ninguna de las estructuras eliminadas.

---

### 29. Auditoría de la conjunción frente a `CES-02`

La conjunción:

```text
Origin_A(Δx)
∧
RDL_W(x,Disp_W)
```

autoriza una afirmación local de incidencia:

```text
A
puede producir,
directa o mediadamente,
una diferencia relevante
en las posibilidades humanas posteriores.
```

No autoriza una dependencia universal.

El control:

```text
Δx ∧ ¬ΔDisp_W
```

impide precisamente elevar la inferencia a:

```text
todo Δx → ΔDisp_W.
```

Por tanto la fuerza de `EP` permanece compatible con la fuerza mínima de `H-PV001-01`.

---

### 30. PME supervivientes de la estructura reducida

La auditoría final de la estructura antes de construcción identifica las siguientes pruebas pertinentes:

```text
PME-OR01
→ intentar falsar Origin_A(Δx)

PME-OUT01
→ intentar falsar neutralidad e inyectividad de Out

PME-TERM01 / PME-TERM02
→ intentar falsar independencia g_Γ / xᵗ

PME-BRANCH01
→ impedir selección retrospectiva del par principal

PME-COMP-CLOSE01
→ intentar falsar la clausura de la continuación

PME-DET01
→ comprobar que la continuación conserva Out(x)
  y no devuelve directamente terminalidad

PME-CRT01
→ intentar falsar la invariancia del criterio terminal

PME-PPINV01
→ intentar falsar la invariancia de PartPossible_h

PME-SIGMA01
→ comprobar que PP y CompletesStruct pertenecen
  a la misma realización concreta

PME-SEP01
→ exigir un caso Δx ∧ ¬ΔDisp_W

PME-SENS01
→ comprobar el contraste principal previamente fijado

PME-FAMILY01
→ impedir incorporación retrospectiva del caso de control.
```

Ninguna de estas pruebas exige recuperar:

```text
K
β
Q_σ
R_σ
Reach
q_F
q_h
P_σ
w*
Ways
SAMEWAY
Join
Attach
Match.
```

---

### 31. Decisiones experimentales mínimas supervivientes

La nueva realización requiere únicamente:

```text
DEO-01
representación técnica de A

DEO-02
dominio X con tres referentes discriminables

DEO-03
g_Γ : A_repr → X

DEO-04
Out : X → O_X

DEO-05
elección independiente de xᵗ

DEO-06
CR-Term respecto de Out(xᵗ)

DEO-07
situación paramétrica común S(Out(x))

DEO-08
continuación determinista y cerrada

DEO-09
fijación previa del par principal
y del caso de control.
```

Estas decisiones pertenecen exclusivamente a la operacionalización.

No constituyen propiedades de `PV-001`, `CR-PV001-01` ni `H-PV001-01`.

---

### 32. Decisión sobre el dispositivo experimental

La auditoría de `EX-PV001-01` y las reducciones posteriores permiten concluir:

```text
EX-PV001-01
→ no puede proporcionar directamente
  la nueva estructura probatoria
```

pero:

```text
infraestructura técnica de EX-PV001-01
→ parcialmente conservable
```

En particular pueden conservarse:

- estructura `S1 → S2`;
- introducción de `A`;
- estado en memoria durante una ejecución;
- transición bloqueada hasta la introducción;
- ausencia de interacción posterior en `S2`;
- infraestructura React/Vite/Vitest.

Debe eliminarse como productor de la diferencia probatoria:

```text
condition = E+ / E−
```

y específicamente:

```text
E+ → mostrar A
E− → ocultar A.
```

La nueva diferencia deberá surgir exclusivamente de la cadena reducida.

---

### 33. Derivación de `EX-PV001-02`

Se deriva un nuevo dispositivo experimental:

#### EX-PV001-02 — Operacionalización reducida de `EP`

Su estructura mínima deberá ser:

```text
A_repr
↓
g_Γ
↓
x
↓
Out(x)
↓
CR-Term
↓
CompletesStruct
        │
PartPossible_h
        │
        ▼
      Disp_W
```

con una vía terminal independiente:

```text
F
↓
xᵗ
↓
Out(xᵗ)
```

y las siguientes restricciones:

1. `A_repr` debe ser objetivamente distinguible antes de `g_Γ`;
2. `g_Γ` no podrá consultar `xᵗ`, `CR-Term`, `CompletesStruct` ni `Disp_W`;
3. `xᵗ` deberá fijarse independientemente de las salidas de `g_Γ`;
4. `Out` deberá preservar únicamente identidad y discriminación;
5. la continuación posterior deberá ser determinista y cerrada;
6. `PartPossible_h` deberá permanecer invariante respecto de `x`;
7. el par principal deberá fijarse antes de evaluar `Disp_W`;
8. deberá existir un control capaz de mostrar:

```text
Δx
∧
¬ΔDisp_W;
```

9. un resultado desfavorable del par principal no autorizará modificar
   `g_Γ`, `xᵗ` ni sustituir las ramas.

`EX-PV001-02` constituye una nueva operacionalización contingente.

No sustituye retrospectivamente `EX-PV001-01`.

`EX-PV001-01` permanece técnicamente válido dentro de su alcance ya
establecido respecto del efecto adicional de la reexposición.

---

### Estado al término de la derivación

```text
H-PV001-01
→ formulada

EP
→ derivada

EP-01
→ Origin_A(Δx)

EP-02
→ RDL_W(x,Disp_W)

CES-01
→ estructura candidata compatible

CES-02
→ inferencia candidata compatible
  con el alcance mínimo de H

PME
→ derivadas de las vulnerabilidades
  supervivientes

DEO
→ reducidas al conjunto mínimo
  necesario para hacer ejecutables
  las pruebas

EX-PV001-01
→ no reparado
→ parcialmente reutilizable
  como infraestructura

EX-PV001-02
→ derivado
→ todavía no construido
```

---

### 34. Construcción de `EX-PV001-02`

Una vez derivada la estructura mínima de `EX-PV001-02`, se inició su
construcción bajo una restricción metodológica explícita:

> La implementación no podrá decidir ninguna propiedad >probatoriamente relevante que no haya quedado previamente >derivada como `DEO` o fijada mediante un procedimiento >independiente.

La programación deberá limitarse a materializar la estructura ya obtenida.

Si durante la construcción aparece la necesidad de decidir:

- qué diferencia de `A` debe resultar favorable;
- qué `x` debe producir `Disp_W=true`;
- cuál debe ser el representante terminal;
- qué rama debe actuar como positiva;
- qué control debe producir el resultado deseado;
- o cualquier otra propiedad capaz de determinar el resultado probatorio,

la construcción deberá detenerse y dicha decisión deberá regresar al nivel de investigación.

La implementación se desarrolló, por tanto, mediante incrementos pequeños y auditables.

---

### 35. Incremento 1 — Constitución de `A_repr`, `X` y `g_Γ`

Se creó:

```text
src/experiments/ExPv00102.tsx
```

La primera versión materializó exclusivamente:

```text
A_repr
↓
g_Γ
↓
x
```

junto con la transición:

```text
S1
↓
S2
```

Se constituyó inicialmente un dominio técnico de tres referentes opacos:

```text
X = {x1, x2, x3}
```

cuya única propiedad relevante era su identidad diferenciable.

Se definió:

```text
GGamma = ReadonlyMap<ARef, XRef>
```

y una operación:

```text
applyGGamma(gGamma, a)
```

que obtiene el `x` correspondiente a una representación de `A`.

La realización concreta de `g_Γ` no fue incorporada al componente.

`ExPv00102` recibió:

```text
aRef
gGamma
```

como dependencias externas.

Por tanto, la construcción todavía no decidió:

```text
C_G
C_T
xᵗ
CR-Term
CompletesStruct
Disp_W.
```

La transición a `S2` quedó bloqueada mientras no hubiera sido obtenido un `x`.

La comprobación:

```text
npx tsc --noEmit
```

se ejecutó satisfactoriamente.

---

### 36. Primera validación técnica

Se creó:

```text
src/experiments/ExPv00102.test.tsx
```

con tres pruebas iniciales:

```text
T-EX002-01
X contiene tres referentes distintos.

T-EX002-02
una g_Γ suministrada externamente
permite obtener x al introducir A.

T-EX002-03
S2 no puede alcanzarse
antes de haber obtenido x.
```

Para las pruebas se utilizó una `g_Γ` local como fixture.

Dicho fixture no constituía todavía `C_G`.

Su única finalidad era comprobar que el mecanismo general aceptaba una realización externa de `g_Γ`.

Resultado:

```text
3 tests
→ satisfactorios

npx tsc --noEmit
→ sin errores
```

---

### 37. Incremento 2 — Adaptación neutral `Out`

Se añadió:

```text
Out : X → O_X
```

mediante una representación que conserva el referente fuente:

```text
Out(x)
→ { source: x }
```

y una relación de igualdad:

```text
sameOut(Out(xᵢ),Out(xⱼ))
⇔
xᵢ = xⱼ.
```

No se utilizó una tabla:

```text
x1 → o1
x2 → o2
x3 → o3
```

porque habría introducido una correspondencia adicional innecesaria.

La adaptación no consulta:

```text
xᵗ
CR-Term
CompletesStruct
Disp_W.
```

Se añadieron:

```text
T-EX002-04
Out conserva la identidad de un mismo x.

T-EX002-05
Out conserva la discriminación entre x distintos.
```

Resultado:

```text
5 tests
→ satisfactorios

npx tsc --noEmit
→ sin errores
```

---

### 38. Incremento 3 — `xᵗ` externo y `CR-Term`

Se introdujo la capacidad de evaluar:

```text
CR-Term_F(Out(x))
```

respecto de un `xᵗ` suministrado externamente.

La operación quedó reducida a:

```text
CR-Term_F(Out(x))
⇔
Out(x) = Out(xᵗ).
```

No se fijó todavía ninguna realización definitiva de `C_T`.

`xᵗ` permaneció como parámetro de la operación.

Se añadieron:

```text
T-EX002-06
CR-Term reconoce únicamente
el Out del xᵗ suministrado.

T-EX002-07
dos x distintos pueden compartir
clasificación no terminal.
```

La segunda prueba verifica:

```text
x2 ≠ x3

pero

CR-Term(Out(x2))
=
CR-Term(Out(x3))
=
false.
```

Por tanto:

```text
Δx
↛
ΔCR-Term
```

por mera constitución.

Resultado:

```text
7 tests
→ satisfactorios

npx tsc --noEmit
→ sin errores
```

---

### 39. Incremento 4 — `CompletesStruct`

Se materializó:

```text
CompletesStruct
```

como consecuencia del criterio terminal bajo la realización determinista ya derivada.

La operación mínima quedó:

```text
CompletesStruct(Out(x),xᵗ)
⇔
CR-Term(Out(x),xᵗ).
```

Esta equivalencia pertenece exclusivamente a la realización experimental seleccionada.

No constituye una definición universal de `CompletesStruct`.

Se añadieron:

```text
T-EX002-08
CompletesStruct=true
cuando la continuación única satisface CR-Term.

T-EX002-09
CompletesStruct=false
cuando la continuación única no satisface CR-Term.

T-EX002-10
dos x distintos pueden mantener
CompletesStruct=false.
```

Se conserva así:

```text
Δx
↛
ΔCompletesStruct.
```

Resultado:

```text
10 tests
→ satisfactorios

npx tsc --noEmit
→ sin errores
```

---

### 40. Incremento 5 — Conexión de `Out(x)` con `S2`

Hasta este punto `Out`, `CR-Term` y `CompletesStruct` habían sido comprobados como operaciones aisladas.

Se conectó entonces `Out(x)` con la situación técnica `S2`.

Al finalizar `S1`:

```text
x
↓
Out(x)
↓
S2
```

y `S2` expone el referente derivado.

No se añadió una nueva elección posterior.

Se añadieron:

```text
T-EX002-11
S2 expone exactamente
el Out(x) derivado por g_Γ.

T-EX002-12
S2 no ofrece nueva entrada ni elección
después de la continuación.
```

La segunda prueba verifica que, una vez alcanzada `S2`, no existen:

- botones;
- entradas de texto;
- selectores;
- ni otra interacción capaz de generar una segunda continuación relevante.

La realización queda así cerrada localmente:

```text
S1
↓
una única transición
↓
S2
↓
un único Out(x)
↓
sin nueva elección
```

Con ello quedan realizadas técnicamente las exigencias correspondientes a:

```text
PME-DET01
PME-COMP-CLOSE01.
```

Resultado:

```text
12 tests
→ satisfactorios

npx tsc --noEmit
→ sin errores
```

---

### 41. Incremento 6 — Integración de `CR-Term` y `CompletesStruct`

Se añadió al componente:

```text
terminalX : XRef
```

como dependencia externa.

El componente no fija internamente su valor.

En `S2` se calcula:

```text
Out(x)
↓
CR-Term(Out(x),terminalX)
↓
CompletesStruct.
```

Se añadieron:

```text
T-EX002-13
S2 calcula CR-Term y CompletesStruct verdaderos
para el xᵗ suministrado.

T-EX002-14
S2 calcula CR-Term y CompletesStruct falsos
para un x distinto de xᵗ.

T-EX002-15
dos x distintos pueden producir
el mismo CompletesStruct=false en S2.
```

La prueba `T-EX002-15` traslada al dispositivo integrado el control:

```text
x2 ≠ x3

pero

CompletesStruct(x2)
=
CompletesStruct(x3)
=
false.
```

Resultado:

```text
15 tests
→ satisfactorios

npx tsc --noEmit
→ sin errores
```

---

### 42. Incremento 7 — `PartPossible_h` como invariante externo

Se añadió:

```text
partPossibleH : boolean
```

como dependencia externa del componente.

No se calcula a partir de:

```text
x
terminalX
CR-Term
CompletesStruct.
```

La nueva implementación no pretende reconstruir nuevamente toda la derivación previa de `PartPossible_h`.

Su función consiste exclusivamente en conservar como invariante dentro del nuevo dispositivo el resultado previamente establecido.

Se añadieron:

```text
T-EX002-16
PartPossible_h permanece true
para los tres referentes de X.

T-EX002-17
PartPossible_h permanece true
tanto con CompletesStruct=true
como con CompletesStruct=false.
```

Se obtiene experimentalmente:

```text
PartPossible_h=true
∧
CompletesStruct=true
```

y:

```text
PartPossible_h=true
∧
CompletesStruct=false.
```

Por tanto ambas propiedades permanecen técnicamente independientes dentro de la realización.

Resultado:

```text
17 tests
→ satisfactorios

npx tsc --noEmit
→ sin errores
```

---

### 43. Incremento 8 — `Disp_W`

Se materializó finalmente:

```text
Disp_W
:=
PartPossible_h
∧
CompletesStruct.
```

La operación recibe exclusivamente:

```text
partPossibleH
complete
```

y no conoce:

```text
A
g_Γ
x
Out
xᵗ.
```

Por tanto `Disp_W` no puede reconstruir ni seleccionar ninguna de las ramas
anteriores.

Se añadieron:

```text
T-EX002-18
Disp_W deriva únicamente
de PartPossible_h y CompletesStruct.

T-EX002-19
S2 produce Disp_W=true
cuando ambas propiedades son true.

T-EX002-20
S2 produce Disp_W=false
cuando PartPossible_h=true
y CompletesStruct=false.

T-EX002-21
dos x distintos pueden conservar
el mismo Disp_W=false.
```

La última prueba establece:

```text
x2 ≠ x3

pero

Disp_W(x2)
=
Disp_W(x3)
=
false.
```

Por tanto:

```text
Δx
↛
ΔDisp_W
```

permanece satisfecho en el dispositivo completo.

Resultado:

```text
21 tests
→ satisfactorios

npx tsc --noEmit
→ sin errores
```

---

### 44. Auditoría intermedia de la construcción

Al alcanzar este punto se había construido ya:

```text
A_repr
↓
g_Γ
↓
x
↓
Out(x)
↓
CR-Term
↓
CompletesStruct
        │
PartPossible_h
        │
        ▼
      Disp_W
```

pero continuaban externos al componente:

```text
gGamma
terminalX
partPossibleH.
```

Por tanto todavía no se había fijado dentro de la implementación:

```text
C_G
C_T.
```

La construcción había demostrado la capacidad técnica del mecanismo, pero no había producido todavía una realización experimental definitiva.

Se mantuvo expresamente la distinción:

```text
mecanismo técnicamente validado
≠
configuración experimental fijada.
```

---

### 45. Pérdida detectada en `PME-OR01`

La auditoría postconstrucción provisional reveló una pérdida en el anclaje de `EP-01`.

Hasta ese momento:

```text
a0
a1
aControl
```

habían sido representados mediante identificadores técnicos opacos.

Sin embargo, la representación visible de `A` era idéntica en las distintas ejecuciones.

Por tanto podía formularse el contraejemplo:

```text
misma A observable
↓
etiqueta técnica distinta
↓
g_Γ
↓
x distinto
```

En ese caso no quedaría demostrado:

```text
Origin_A(Δx)
```

sino únicamente:

```text
Origin_ARef(Δx).
```

La pérdida pertenece directamente a `PME-OR01`.

No afecta a:

- `Out`;
- `CR-Term`;
- `CompletesStruct`;
- `PartPossible_h`;
- `Disp_W`;
- ni al control `Δx ∧ ¬ΔDisp_W`.

La construcción se detuvo en este punto para corregir únicamente el anclaje de
`A_repr`.

---

### 46. Corrección mínima de `A_repr`

Se eliminó la representación de `a0/a1/aControl` como meras etiquetas opacas.

Se definieron como realizaciones técnicas observables de `A`:

```text
a0
→ "La llave está en el cajón."

a1
→ "La llave está en la repisa."

aControl
→ "La llave está en la caja."
```

La diferencia se hace observable en `S1` antes de aplicar `g_Γ`.

No se añadió:

- identificador de rama;
- propiedad positiva/negativa;
- terminalidad;
- disponibilidad;
- ni ninguna propiedad relacionada con el resultado posterior.

La representación mínima contiene exclusivamente el contenido técnico observable de `A`.

Se añadieron:

```text
T-EX002-22
a0, a1 y aControl son
representaciones observables distintas de A.

T-EX002-23
la diferencia de A es observable
antes de aplicar g_Γ.
```

La secuencia queda:

```text
A₀_repr ≠ A₁_repr
        ↓
diferencia observable en S1
        ↓
g_Γ
        ↓
x₀ ≠ x₁.
```

Por tanto la objeción:

```text
a0 / a1
son meras etiquetas de rama
```

deja de sobrevivir.

`PME-OR01` queda técnicamente satisfecha respecto de esta vulnerabilidad.

Resultado:

```text
23 tests
→ satisfactorios

npx tsc --noEmit
→ sin errores
```

---

### 47. Estado técnico antes de fijar la configuración experimental

La construcción general queda validada con:

```text
23 pruebas automatizadas
```

y:

```text
npx tsc --noEmit
→ sin errores.
```

En este punto se encuentran materializadas las piezas:

```text
A_repr
g_Γ
X
Out
CR-Term
CompletesStruct
PartPossible_h
Disp_W
S1
S2
```

pero el componente continúa recibiendo externamente:

```text
gGamma
terminalX
partPossibleH.
```

Por tanto:

```text
C_G
C_T
```

todavía no pertenecen a la constitución interna del dispositivo.

La implementación no ha decidido durante la programación:

- qué `A` debe producir el referente terminal;
- qué rama debe resultar favorable;
- cuál debe ser el `xᵗ` definitivo;
- ni qué par debe producir `ΔDisp_W`.

La siguiente obligación consiste en fijar las decisiones contingentes `C_G` y `C_T` mediante un procedimiento independiente y auditable antes de convertir la construcción general en la configuración ejecutable definitiva de
`EX-PV001-02`.

---

### Estado de la construcción antes de `FIX-XGT-02`

```text
EX-PV001-02
→ construido como mecanismo general
→ técnicamente validado

tests
→ 23 satisfactorios

comprobación de tipos
→ satisfactoria

PME-OR01
→ vulnerabilidad de etiquetas de rama eliminada

PME-OUT01
→ técnicamente satisfecha

PME-COMP-CLOSE01
→ técnicamente satisfecha

PME-DET01
→ técnicamente satisfecha

PME-CRT01
→ técnicamente satisfecha

PME-PPINV01
→ invariancia técnicamente satisfecha

PME-SEP01
→ estructura técnicamente disponible

C_G
→ todavía no fijado como configuración definitiva

C_T
→ todavía no fijado como configuración definitiva

resultado del contraste principal
→ todavía no utilizado para modificar la configuración
```

---

### 48. `FIX-XGT-02` — Fijación independiente de `C_G` y `C_T`

La configuración provisional utilizada durante la construcción había sido ya ejecutada y observada antes de quedar documentalmente registrada mediante un procedimiento de fijación previa suficientemente auditable.

Por tanto, dicha configuración se conserva exclusivamente como evidencia de construcción y no se utiliza para establecer la independencia exigida entre `C_G` y `C_T`.

Para la configuración experimental definitiva se ejecuta una nueva fijación independiente:

```text
FIX-XGT-02
```

La fijación se realiza antes de cualquier evaluación conjunta de:

```text
g_Γ(A_i)
=
xᵗ
```

o de cualquier cálculo de:

```text
CR-Term
CompletesStruct
Disp_W.
```

#### Constitución previa congelada

Antes de las selecciones permanecen fijados:

```text
A_repr = {a0, a1, aControl}

X = {x1, x2, x3}

par principal = (a0, a1)

control = aControl

PartPossible_h = true
```

Estas decisiones no podrán modificarse como consecuencia del resultado posterior.

---

#### Fijación de `C_G`

Se selecciona una única biyección:

```text
g_Γ : A_repr → X
```

sin utilizar:

```text
xᵗ
CR-Term
CompletesStruct
Disp_W.
```

El resultado obtenido es:

```text
g_Γ(a0)       = x1
g_Γ(a1)       = x3
g_Γ(aControl) = x2
```

La asignación queda congelada.

---

#### Fijación de `C_T`

Mediante una selección independiente de `C_G` se fija:

```text
xᵗ ∈ X.
```

El resultado obtenido es:

```text
xᵗ = x3
```

La elección queda congelada.

No se ha utilizado para fijarla:

```text
g_Γ(a0)
g_Γ(a1)
g_Γ(aControl)
```

ni ningún resultado de `CR-Term`, `CompletesStruct` o `Disp_W`.

---

#### Regla de no reparación

A partir de este punto queda prohibido:

```text
cambiar g_Γ
```

```text
cambiar xᵗ
```

```text
cambiar el par principal
```

```text
promover aControl a rama principal
```

```text
repetir la fijación porque el resultado sea desfavorable
```

```text
introducir una nueva rama porque el resultado observado
no proporcione el contraste esperado
```

Si la configuración congelada no satisface posteriormente `PME-SENS01`, el
resultado deberá registrarse como desfavorable.

La ausencia de contraste no autorizará ninguna reparación de `FIX-XGT-02`.

---

#### Estado antes de evaluación

```text
C_G
→ fijado
→ congelado

C_T
→ fijado
→ congelado

par principal
→ (a0,a1)
→ congelado

control
→ aControl
→ congelado

resultado conjunto
→ todavía no evaluado

Disp_W(a0)
→ todavía no calculado

Disp_W(a1)
→ todavía no calculado

Disp_W(aControl)
→ todavía no calculado
```

El siguiente paso será materializar exactamente esta configuración congelada en `exPv00102.config.ts` y comprobar que la implementación reproduce dichas decisiones sin añadir ni modificar ninguna propiedad experimental.

Sólo después se ejecutarán las tres ramas y se evaluará el resultado conjunto.

---

### 49. Resultado observado de `FIX-XGT-02`

Una vez materializada correctamente la configuración congelada de
`FIX-XGT-02`, se ejecutaron las tres ramas previstas sin modificar:

- `C_G`;
- `C_T`;
- el par principal;
- el caso de control;
- ni `PartPossible_h`.

La primera tentativa de ejecución no correspondió realmente a
`FIX-XGT-02`, porque `exPv00102.config.ts` conservaba todavía la
configuración provisional utilizada durante la construcción.

La discrepancia fue detectada antes de completar ni evaluar el contraste.

No se modificó `FIX-XGT-02`.

Se corrigió exclusivamente la materialización técnica para hacerla coincidir con la configuración previamente fijada:

```text
C_G:

g_Γ(a0)       = x1
g_Γ(a1)       = x3
g_Γ(aControl) = x2

C_T:

xᵗ = x3

PartPossible_h:

true
```

La comprobación:

```bash
npx tsc --noEmit
```

finalizó sin errores antes de reiniciar la secuencia experimental.

---

#### Ejecución de `a0`

La rama:

```text
a0
```

produjo:

```text
Out(x) = x1
CR-Term = false
CompletesStruct = false
PartPossible_h = true
Disp_W = false
```

El resultado coincide con:

```text
g_Γ(a0) = x1
xᵗ = x3
x1 ≠ x3
```

por lo que:

```text
CR-Term = false
CompletesStruct = false
Disp_W = false.
```

---

#### Ejecución de `a1`

La rama:

```text
a1
```

produjo:

```text
Out(x) = x3
CR-Term = true
CompletesStruct = true
PartPossible_h = true
Disp_W = true
```

El resultado coincide con:

```text
g_Γ(a1) = x3
xᵗ = x3
```

por lo que:

```text
CR-Term = true
CompletesStruct = true
Disp_W = true.
```

---

#### Ejecución de `aControl`

La rama:

```text
aControl
```

produjo:

```text
Out(x) = x2
CR-Term = false
CompletesStruct = false
PartPossible_h = true
Disp_W = false
```

El resultado coincide con:

```text
g_Γ(aControl) = x2
xᵗ = x3
x2 ≠ x3
```

por lo que:

```text
CR-Term = false
CompletesStruct = false
Disp_W = false.
```

---

### 50. Evaluación de `PME-SENS01`

El par principal había sido fijado previamente como:

```text
(a0,a1).
```

Los resultados observados fueron:

```text
a0
→ x1
→ Disp_W = false

a1
→ x3
→ Disp_W = true.
```

Por tanto:

```text
Δx ≠ 0
∧
ΔDisp_W ≠ 0.
```

La diferencia de `x` correspondiente al par principal coincide con una diferencia de `Disp_W`.

No fue necesario:

- modificar `g_Γ`;
- modificar `xᵗ`;
- cambiar el par principal;
- repetir la fijación;
- ni introducir una nueva rama.

Se concluye:

```text
PME-SENS01
→ satisfecha.
```

La satisfacción de esta prueba no establece todavía una ley general:

```text
Δx → ΔDisp_W.
```

Su alcance permanece restringido al contraste principal de la realización experimental concreta.

---

### 51. Evaluación de `PME-SEP01`

El caso de control había sido fijado previamente como:

```text
aControl.
```

Se compara con `a0`:

```text
a0
→ x1
→ Disp_W = false

aControl
→ x2
→ Disp_W = false.
```

Se cumple:

```text
x1 ≠ x2
```

pero:

```text
Disp_W(x1)
=
Disp_W(x2)
=
false.
```

Por tanto:

```text
Δx ≠ 0
∧
ΔDisp_W = 0.
```

Se concluye:

```text
PME-SEP01
→ satisfecha.
```

La diferencia de identidad de `x` no contiene por sí misma una diferencia de `Disp_W`.

Este control impide interpretar la rama favorable del par principal como resultado inevitable de toda diferencia en `x`.

---

### 52. Auditoría de la regla de no reparación

Durante la ejecución válida de `FIX-XGT-02` no se modificaron:

```text
C_G
C_T
par principal
aControl
PartPossible_h.
```

La única corrección realizada antes de reiniciar las ejecuciones fue hacer que `exPv00102.config.ts` materializara efectivamente la configuración ya fijada.

Dicha corrección no dependió del resultado experimental de `FIX-XGT-02`, que todavía no había sido ejecutado con la configuración correcta.

Por tanto:

```text
regla de no reparación
→ respetada.
```

La configuración utilizada en las tres ejecuciones válidas permaneció invariante.

---

### 53. Estado de `FIX-XGT-02`

```text
FIX-XGT-02
→ ejecutado

C_G
→ fijado previamente
→ materializado
→ conservado

C_T
→ fijado previamente
→ materializado
→ conservado

par principal
→ (a0,a1)
→ conservado

control
→ aControl
→ conservado

PartPossible_h
→ true
→ conservado

PME-SENS01
→ satisfecha

PME-SEP01
→ satisfecha

regla de no reparación
→ satisfecha
```

La configuración congelada proporciona simultáneamente:

```text
contraste principal:

Δx
∧
ΔDisp_W
```

y:

```text
control:

Δx
∧
¬ΔDisp_W.
```

Por tanto, la diferencia favorable observada en el par principal no queda codificada por la mera existencia de una diferencia en `x`.

---

### 54. Punto de continuación

La construcción, fijación y ejecución de `EX-PV001-02` han quedado completadas.

El siguiente paso consiste en auditar conjuntamente la evidencia obtenida respecto de:

```text
PME-OR01
EP-01
EP-02
CES-01
CES-02
CMA-01
```

y determinar si la estructura probatoria resultante puede aceptarse metodológicamente como evidencia suficiente de `H-PV001-01`.

Sólo después procederá determinar la incidencia del resultado sobre:

```text
R-PV001-001
CR-PV001-01
```

y decidir si las decisiones de realización provisionales `DR-PV001-*` deben conservarse, reducirse o sustituirse.

---

### 55. Evaluación final de las `PME` de `EX-PV001-02`

Una vez construido el dispositivo, fijada independientemente su configuración mediante `FIX-XGT-02` y ejecutadas las tres ramas sin reparación posterior, se evalúan las pruebas metodológicas pertinentes.

#### `PME-OR01`

La realización observable de `A` queda establecida antes de la aplicación de
`g_Γ`:

```text
a0
→ "La llave está en el cajón."

a1
→ "La llave está en la repisa."
```

y posteriormente:

```text
g_Γ(a0) = x1
g_Γ(a1) = x3

x1 ≠ x3.
```

La diferencia de `A` no es una mera etiqueta oculta de rama.

Se concluye:

```text
PME-OR01
→ satisfecha.
```

---

#### `PME-OUT01`

`Out` conserva identidad y discriminación sin consultar:

```text
CR-Term
CompletesStruct
Disp_W.
```

Se concluye:

```text
PME-OUT01
→ satisfecha.
```

---

#### PME-SIGMA01

Su obligación era:

- comprobar que `PartPossible_h` y `CompletesStruct`
  pertenecen a la misma realización concreta

Esta PME apareció precisamente después de eliminar `SAMEWAY`, `w*` y `Ways(σ*)`: la reducción estableció que no hacía falta un testigo adicional si la propia σ\* era el único testigo concreto de ambas propiedades. La obligación superviviente fue únicamente que PartPossible_h y CompletesStruct quedasen establecidos sobre la misma realización concreta.

La construcción existente satisface eso. En `EX-PV001-02`, `Disp_W` recibe conjuntamente y exclusivamente:

`partPossibleH`
`complete`

y calcula:

`Disp_W` :=
`PartPossible_h`
∧
`CompletesStruct`

dentro de la misma realización de `S2`; no consulta otra rama, otro x, otro testigo ni otra continuación.

Además, las ejecuciones congeladas lo observan conjuntamente dentro de cada ejecución individual:

`a0`:
`CompletesStruct` = false
`PartPossible_h` = true
`Disp_W` = false

`a1`:
`CompletesStruct` = true
`PartPossible_h` = true
`Disp_W` = true

aControl:
CompletesStruct = false
PartPossible_h = true
Disp_W = false

No existe en la construcción una operación del tipo:

σa → PartPossible_h
σb → CompletesStruct
─────────────────────
combinar posteriormente

La conjunción se forma dentro de la misma ejecución técnica que ha producido el único Out(x) y el único CompletesStruct.

Por tanto:

PME-SIGMA01
→ SATISFECHA

Y la conclusión es importante: no hay que recuperar w*, Ways(σ*), SAMEWAY ni introducir un identificador técnico de trayectoria. La propia ejecución concreta de EX-PV001-02 proporciona la unidad necesaria.

Hay que limitar, eso sí, lo demostrado:

PME-SIGMA01
→ demuestra co-pertenencia a una misma realización técnica

NO demuestra
→ que esa realización posea ya por ello
anclaje fenomenológico humano suficiente

Es decir, no resuelve `Q-EX002-01`. Sólo elimina la posibilidad de que `Disp_W` haya sido formado artificialmente ensamblando `PartPossible_h` y CompletesStruct procedentes de realizaciones distintas.

---

#### PME-FAMILY01

Su obligación era:

- impedir incorporación retrospectiva
  del caso de control

Aquí la evidencia es especialmente fuerte porque `FIX-XGT-02` fija antes de la evaluación:

`A_repr` = {`a0`, `a1`, `aControl`}
`X` = {`x1`, `x2`, `x3`}

par principal = (a0,a1)
control = aControl
PartPossible_h = true

y declara que estas decisiones no pueden modificarse como consecuencia del resultado posterior.

Después queda congelada también la correspondencia:

g*Γ(a0) = x1
g*Γ(a1) = x3
g_Γ(aControl) = x2

antes de calcular conjuntamente CR-Term, CompletesStruct o Disp_W.

Más aún, la regla de no reparación prohíbe explícitamente:

cambiar el par principal
promover aControl a rama principal
repetir la fijación por resultado desfavorable
introducir otra rama después del resultado

Y el estado previo a la evaluación registra ya:

par principal
→ (a0,a1)
→ congelado

control
→ aControl
→ congelado

Disp_W(a0)
Disp_W(a1)
Disp_W(aControl)
→ todavía no calculados

Después se ejecutan exactamente esas tres ramas sin cambiar el caso de control. El propio registro declara que durante las ejecuciones válidas no se modificaron C_G, C_T, el par principal, el caso de control ni PartPossible_h.

Finalmente aControl produce:

aControl
→ x2
→ Disp_W=false

y sólo después se utiliza para comprobar:

`a0` → `x1` → `Disp_W`=false
`aControl` → `x2` → `Disp_W`=false

`x1` ≠ `x2`

obteniendo el control Δx ∧ ¬ΔDisp_W.

Por tanto no se produjo:

observar resultados
↓
buscar un tercer caso conveniente
↓
designarlo como control

sino:

constituir familia
↓
fijar aControl
↓
congelar configuración
↓
ejecutar
↓
observar resultado
↓
evaluar el control ya existente

Se concluye:

`PME-FAMILY01`
→ SATISFECHA

La incidencia de la primera tentativa con la configuración antigua tampoco derrota esta `PME`: aquella ejecución se descartó porque no materializaba `FIX-XGT-02`, y la corrección posterior hizo coincidir el archivo con una configuración que ya había sido fijada; no se cambió aControl después de observar el resultado válido.

#### Independencia de `g_Γ` y `xᵗ`

`FIX-XGT-02` fijó independientemente:

```text
C_G:

a0       → x1
a1       → x3
aControl → x2
```

y:

```text
C_T:

xᵗ = x3.
```

La configuración permaneció congelada durante las tres ejecuciones.

La regla de no reparación fue respetada.

Se concluye:

```text
PME-TERM01 / PME-TERM02
→ satisfechas.

PME-BRANCH01
→ satisfecha.
```

---

#### Clausura y determinismo

La situación posterior utiliza un único:

```text
Out(x)
```

derivado del `x` previamente producido.

No existe una nueva entrada, elección o segunda continuación relevante en
`S2`.

Se concluye:

```text
PME-DET01
→ satisfecha.

PME-COMP-CLOSE01
→ satisfecha.
```

---

#### Criterio terminal

El criterio terminal permanece:

```text
CR-Term(Out(x))
⇔
Out(x) = Out(xᵗ).
```

Además existen dos referentes distintos:

```text
x1 ≠ x2
```

que reciben la misma clasificación:

```text
CR-Term(x1) = false
CR-Term(x2) = false.
```

La mera diferencia de identidad no codifica terminalidad.

Se concluye:

```text
PME-CRT01
→ satisfecha.
```

---

#### Invariancia de `PartPossible_h`

Durante las tres ramas:

```text
PartPossible_h = true.
```

Su valor no cambia con:

```text
x
CR-Term
CompletesStruct
Disp_W.
```

Por tanto queda demostrado técnicamente que su valor se mantiene invariante dentro del dispositivo.

Se concluye:

```text
PME-PPINV01
→ satisfecha respecto de invariancia.
```

Esta prueba no establece todavía por sí misma que:

```text
PartPossible_h = true
```

posea anclaje suficiente en una posibilidad humana efectiva.

---

#### Sensibilidad

El par principal produce:

```text
a0 → x1 → Disp_W = false
a1 → x3 → Disp_W = true.
```

Por tanto:

```text
Δx
∧
ΔDisp_W.
```

Se concluye:

```text
PME-SENS01
→ satisfecha.
```

---

#### Separabilidad

El control produce:

```text
a0       → x1 → Disp_W = false
aControl → x2 → Disp_W = false.
```

con:

```text
x1 ≠ x2.
```

Por tanto:

```text
Δx
∧
¬ΔDisp_W.
```

Se concluye:

```text
PME-SEP01
→ satisfecha.
```

La mera diferencia de `x` no determina por construcción una diferencia de
`Disp_W`.

---

### 56. Evaluación de `EP-01`

`EP-01` exige:

```text
Origin_A(Δx).
```

La construcción establece:

```text
A0_repr ≠ A1_repr
```

antes de `g_Γ`, y una misma realización congelada de `g_Γ` produce:

```text
A0_repr → x1
A1_repr → x3

x1 ≠ x3.
```

No se ha identificado una variable posterior utilizada para seleccionar la salida de `g_Γ`.

La diferencia de `x` queda, dentro del dispositivo, atribuida a la diferencia de la representación de `A` que alimenta `g_Γ`.

Se concluye:

```text
EP-01
→ satisfecha.
```

La conclusión posee alcance exclusivamente interno a esta realización.

No establece una ley semántica general entre contenidos de `A` y referentes
de `X`.

---

### 57. Evaluación de `EP-02`

`EP-02` exige:

```text
RDL_W(x,Disp_W).
```

El dispositivo establece técnicamente:

```text
x
↓
Out(x)
↓
CR-Term
↓
CompletesStruct
        │
PartPossible_h
        │
        ▼
      Disp_W
```

y proporciona simultáneamente:

```text
x1 ≠ x3
∧
Disp_W(x1) ≠ Disp_W(x3)
```

y:

```text
x1 ≠ x2
∧
Disp_W(x1) = Disp_W(x2).
```

Esto demuestra que existe una relación diferencial local técnicamente discriminante entre `x` y el predicado construido `Disp_W`.

Sin embargo aparece una vulnerabilidad residual.

Dentro de `EX-PV001-02`:

```text
PartPossible_h = true
```

se introduce como condición externa.

Las pruebas establecen su invariancia, pero no establecen independientemente por qué dicho valor constituye realmente una posibilidad de participación
humana.

Asimismo:

```text
CompletesStruct
```

queda realizado en este dispositivo mediante el criterio terminal técnico.

Por tanto, el dispositivo demuestra actualmente:

```text
RDL(x, Disp_W_técnico)
```

pero todavía debe justificarse que:

```text
Disp_W_técnico
```

está epistemológicamente anclado en:

```text
una posibilidad humana posterior
```

y no únicamente en un predicado técnico al que se ha dado ese nombre.

Se obtiene:

```text
EP-02
→ estructuralmente realizada
→ anclaje fenomenológico todavía pendiente.
```

---

### 58. Evaluación de `CES-01`

`CES-01` exige que aquello por lo que `EP` cuenta como evidencia mantenga una conexión no accidental y epistemológicamente pertinente con el fenómeno.

Para `EP-01`:

```text
CES-01
→ satisfecha.
```

La diferencia de `A` es anterior a `g_Γ` y produce dentro del dispositivo una
diferencia discriminable de `x`.

Para `EP-02`, en cambio, permanece abierta la relación:

```text
PartPossible_h = true
+
CompletesStruct
↓
¿por qué esto constituye realmente
una posibilidad humana?
```

La invariancia de `PartPossible_h` no responde por sí sola a dicha pregunta.

Por tanto:

```text
CES-01
→ no satisfecha todavía para EP completa.
```

La pérdida queda localizada exclusivamente en el anclaje de `EP-02`.

---

### 59. Evaluación de `CES-02`

Si estuviera establecido que:

```text
Disp_W
```

representa efectivamente una diferencia relevante en las posibilidades humanas,
la conjunción:

```text
Origin_A(Δx)
∧
RDL_W(x,Disp_W)
```

autorizaría la afirmación local y existencial:

```text
A puede producir,
directa o mediadamente,
una diferencia relevante
en las posibilidades humanas posteriores.
```

La inferencia no exigiría:

```text
todo ΔA → ΔDisp_W

sin A → ¬Disp_W

A como causa exclusiva

A como condición necesaria

A como condición suficiente.
```

La fuerza inferencial de `EP` es, por tanto, compatible con la fuerza de
`H-PV001-01`.

Sin embargo, mientras no se cierre el anclaje pendiente de `EP-02`, el contenido efectivamente demostrado termina todavía en un predicado técnico de disponibilidad.

Se concluye:

```text
CES-02
→ inferencia correctamente limitada
→ satisfacción material todavía pendiente
  del cierre de CES-01 en EP-02.
```

---

### 60. Evaluación de `CMA-01`

`CMA-01` exige:

1. auditabilidad suficiente;
2. control crítico mediante las `PME` pertinentes;
3. ausencia de una falsación pertinente no resuelta capaz de impedir alguna
   `CES`.

Las dos primeras condiciones se encuentran ampliamente satisfechas:

```text
auditabilidad
→ satisfecha

control crítico
→ satisfecho
```

mediante:

- derivación previa;
- construcción incremental;
- 23 pruebas automatizadas;
- fijación independiente;
- regla de no reparación;
- contraste principal;
- control de separabilidad;
- y reconstrucción documental.

Sin embargo permanece abierta una vulnerabilidad probatoriamente relevante:

```text
¿PartPossible_h=true
y CompletesStruct
están independientemente anclados
en una posibilidad humana real,
o únicamente constituyen
una codificación técnica de Disp_W?
```

Esta vulnerabilidad afecta directamente a `CES-01`.

Por tanto:

```text
CMA-01
→ todavía no satisfecha.
```

No procede aceptar aún `EP` como evidencia suficiente de `H-PV001-01`.

---

### 61. Resultado de la evaluación

```text
PME-OR01
→ satisfecha

EP-01
→ satisfecha

PME-OUT01
→ satisfecha

PME-TERM01 / PME-TERM02
→ satisfechas

PME-BRANCH01
→ satisfecha

PME-DET01
→ satisfecha

PME-COMP-CLOSE01
→ satisfecha

PME-CRT01
→ satisfecha

PME-PPINV01
→ invariancia satisfecha

PME-SIGMA01
→ satisfecha

PME-SENS01
→ satisfecha

PME-SEP01
→ satisfecha

PME-FAMILY01
→ satisfecha

EP-02
→ estructuralmente realizada
→ anclaje fenomenológico pendiente

CES-01
→ satisfecha para EP-01
→ pendiente para EP-02

CES-02
→ inferencia correctamente limitada
→ no cerrable todavía

CMA-01
→ no satisfecha todavía

H-PV001-01
→ todavía no aceptada como establecida

EX-PV001-02
→ construido
→ técnicamente validado
→ configuración congelada ejecutada
→ capacidad probatoria todavía no suficiente
  mientras permanezca abierta la pérdida de anclaje de EP-02.
```

Todas las `PME` derivadas para la estructura reducida de `EX-PV001-02` han quedado sometidas a evaluación y satisfechas dentro de su alcance.

## No permanece ninguna obligación de control crítico pendiente distinta de la pérdida epistemológica formulada posteriormente como `Q-EX002-01`.

### 62. Pérdida residual

La pérdida superviviente puede formularse como:

```text
Q-EX002-01
```

> ¿Puede establecerse independientemente que la conjunción
> `PartPossible_h ∧ CompletesStruct` realizada por `EX-PV001-02` > constituye realmente disponibilidad de una posibilidad humana > posterior, sin definir dicha disponibilidad mediante el mismo > resultado técnico que pretende utilizarse como evidencia?

Hasta resolver esta pregunta no deberá:

- declararse satisfecha `CES-01`;
- declararse satisfecha `CMA-01`;
- aceptar `H-PV001-01` como establecida;
- ni determinar todavía favorablemente el estatuto de `R-PV001-001`
  respecto de `CR-PV001-01`.

---

### 63. `Q-EX002-01` — Anclaje fenomenológico de `Disp_W`

#### Estado

**Abierta.**

---

#### Pregunta

> ¿Puede establecerse independientemente que la conjunción
>
> ```text
> PartPossible_h
> ∧
> CompletesStruct
> ```
>
> realizada por `EX-PV001-02` constituye realmente la >disponibilidad de una posibilidad humana posterior, sin definir > dicha disponibilidad mediante el mismo resultado técnico que >pretende utilizarse como evidencia?

---

#### Origen de la pregunta

La pregunta aparece al evaluar `EP-02` frente a `CES-01`.

`EX-PV001-02` ha establecido técnicamente:

```text
x
↓
Out(x)
↓
CR-Term
↓
CompletesStruct
        │
PartPossible_h
        │
        ▼
      Disp_W
```

y ha demostrado además:

contraste principal:

```text
Δx
∧
ΔDisp_W
```

junto con:

```text
control:

Δx
∧
¬ΔDisp_W.
```

Todas las `PME` derivadas para esta estructura han quedado sometidas a control y satisfechas dentro de su alcance.

Por tanto, la pérdida ya no reside en:

- el origen de `Δx`;
- la neutralidad de Out;
- la independencia entre `g_Γ` y `xᵗ`;
- la clausura de la continuación;
- la invariancia de PartPossible_h;
- la pertenencia de PartPossible_h y CompletesStruct a una misma realización;
- la fijación previa del par principal;
- la incorporación del caso de control;
- la sensibilidad del contraste principal;
- ni la separabilidad entre `Δx` y `ΔDisp_W`.

La pérdida superviviente se encuentra exclusivamente en el significado probatorio de:

```text
Disp_W
:=
PartPossible_h
∧
CompletesStruct.
```

#### Forma exacta de la pérdida

---

La construcción demuestra:

```text
PartPossible_h = true
```

como condición técnica invariante del dispositivo.

También demuestra que:

`CompletesStruct`

puede tomar valores distintos mediante la continuación determinista y cerrada.

Y demuestra que:

`Disp_W`

deriva únicamente de ambas propiedades.

Sin embargo, de ello no se sigue todavía por sí solo:

```text
Disp_W = true
↓
existe realmente una posibilidad humana posterior disponible
```

porque esa inferencia requiere justificar previamente qué hace que:

```text
PartPossible_h
```

represente efectivamente participación humana posible y qué hace que:

```text
CompletesStruct
```

represente efectivamente la completabilidad de esa misma posibilidad.

La vulnerabilidad puede expresarse como:

```text
PartPossible_h
∧
CompletesStruct
        ↓
     Disp_W
```

frente a:

¿por qué esa conjunción cuenta como disponibilidad de una posibilidad humana?

#### Riesgo de circularidad

La investigación deberá intentar falsar especialmente la siguiente estructura:

```text
Disp_W
se define como
PartPossible_h ∧ CompletesStruct
```

y después

```text
PartPossible_h ∧ CompletesStruct
se considera evidencia de Disp_W
```

Si el único fundamento para interpretar ambas propiedades como disponibilidad humana fuera que su conjunción constituye `Disp_W`, la operacionalización sería circular respecto de `CES-01`.

No bastará, por tanto, con mostrar nuevamente que:

```text
Disp_W
=
PartPossible_h
∧
CompletesStruct.
```

Eso ya está técnicamente establecido.

Debe encontrarse un fundamento independiente de la propia definición de `Disp_W`.

#### Hipótesis inicial

Se formula provisionalmente:

`H-QEX002-01`

El anclaje de `Disp_W` puede quedar establecido sin modificar
`EX-PV001-02` si `PartPossible_h` y `CompletesStruct` pueden justificarse, independientemente de `Disp_W`, como condiciones constitutivas suficientes de la disponibilidad de la posibilidad humana concreta considerada.

La hipótesis no presupone que dicha justificación exista.

Será sometida a reducción e intento de falsación.

#### Descomposición provisional de la pregunta

La pérdida puede dividirse inicialmente en tres cuestiones:

`Q-PP`

¿Qué fundamento independiente autoriza interpretar
PartPossible_h=true como que la participación humana pertinente puede efectivamente formar parte de la realización?

`Q-CS`

¿Qué fundamento independiente autoriza interpretar
`CompletesStruct`=`true` como que la misma realización permite completar la posibilidad considerada?

`Q-CONJ`

Suponiendo justificadas ambas propiedades por separado, ¿autoriza su conjunción exactamente el contenido de disponibilidad humana reclamado por `Disp_W`, o permanece todavía una propiedad adicional no establecida?

Esta descomposición es provisional.

No implica todavía que las tres cuestiones sean irreducibles.

#### Primer criterio de reducción

La investigación deberá intentar, antes de introducir cualquier estructura nueva, recuperar los fundamentos ya disponibles para:

```text
PartPossible_h
CompletesStruct
p*
F
σ*
```

y comprobar si permiten establecer independientemente:

```text
PartPossible_h
→ participación humana posible
```

y:

`CompletesStruct`
→ completabilidad estructural de esa misma participación

sin utilizar como premisa:

`Disp_W`

ni el resultado favorable observado en:

`a1`.

Si ambos fundamentos ya existen y la conjunción no añade contenido no justificado, `Q-EX002-01` podrá reducirse sin modificar el dispositivo.

#### Restricción metodológica

Mientras `Q-EX002-01` permanezca abierta:

`EX-PV001-02`
→ no se modifica

`FIX-XGT-02`
→ permanece congelado

23 tests
→ permanecen como evidencia técnica válida

resultados de `a0`/`a1`/`aControl`
→ permanecen conservados

No deberá introducirse todavía:

- una nueva `DEO`;
- una nueva `PME`;
- un nuevo participante humano;
- una nueva situación;
- una nueva rama experimental;
- una nueva definición de Disp_W;
- ni una nueva propiedad de PartPossible_h o CompletesStruct.

Sólo si la pérdida no puede reducirse utilizando fundamentos ya existentes podrá justificarse posteriormente alguna nueva actuación.

#### Elementos que no deben utilizarse como fundamento

La investigación no podrá justificar el anclaje mediante:

```text
a1 → Disp_W=true
```

porque ese resultado presupone ya la operacionalización cuya pertinencia se
está auditando.

Tampoco bastará:

```text
PartPossible_h=true
porque así fue fijado en la configuración
```

ni:

```text
CompletesStruct=true
porque CR-Term=true
```

si no se demuestra independientemente por qué esas propiedades guardan la relación fenomenológica reclamada con la posibilidad humana considerada.

La corrección técnica no sustituye al anclaje epistemológico.

#### Condición de falsación de `H-QEX002-01`

La hipótesis quedará falsada si, después de agotar los fundamentos previamente derivados:

- PartPossible_h sólo puede interpretarse como participación humana posible porque se le asignó externamente el valor true;
- CompletesStruct sólo puede interpretarse como completabilidad humana porque fue definido mediante CR-Term;
- o la conjunción de ambas sólo puede considerarse disponibilidad humana porque el propio dispositivo la denomina `Disp_W`.

En cualquiera de esos casos:

`EP-02`
→ técnicamente válida
→ epistemológicamente insuficiente

y deberá determinarse qué pérdida concreta exige una nueva actuación.

#### Condición provisional de resolución favorable

`Q-EX002-01` podrá resolverse favorablemente si puede establecerse, sin modificar `EX-PV001-02`, una cadena justificativa independiente de la forma:

```text
fundamento previo de la participación humana
↓
PartPossible_h
```

y:

```text
fundamento previo de la completabilidad
↓
CompletesStruct
```

de manera que:

```text
PartPossible_h
∧
CompletesStruct
```

autorice exactamente:

disponibilidad de la posibilidad humana considerada

sin recurrir como premisa a:

`Disp_W`

ni al resultado del contraste experimental.

#### Incidencia sobre el estado de R-PV001-001

Mientras `Q-EX002-01` permanezca abierta:

`EP-01`
→ satisfecha

`EP-02`
→ estructuralmente realizada
→ anclaje fenomenológico pendiente

`CES-01`
→ satisfecha para `EP-01`
→ pendiente para `EP-02`

`CES-02`
→ fuerza inferencial correctamente limitada
→ cierre material pendiente

`CMA-01`
→ no satisfecha

`H-PV001-01`
→ no aceptada todavía

`R-PV001-001`
→ permanece en progreso

La apertura de `Q-EX002-01` no falsifica:

```text
EX-PV001-02
FIX-XGT-02
EP-01
```

ni ninguna de las `PME` ya satisfechas.

Localiza exclusivamente la última pérdida actualmente conocida en el anclaje epistemológico de `EP-02`.

### Punto de continuación

La primera actuación de `Q-EX002-01` será auditar la procedencia conceptual de:

`PartPossible_h`

y:

`CompletesStruct`

antes de su incorporación a `EX-PV001-02`, buscando determinar si sus significados relevantes ya habían quedado establecidos independientemente de `Disp_W`.

La investigación comenzará por `PartPossible_h`, por ser la única de las dos propiedades que `EX-PV001-02` recibe directamente como condición externa y cuya derivación previa no reconstruye dentro del dispositivo.

---

### 64. Resultado de reducción de `Q-PP`

#### `RS-QPP-01` — No derivación de `PartPossible_h(σ*) = true`

Se ha auditado la procedencia conceptual de:

```text
PartPossible_h
```

y los fundamentos previos disponibles para:

```text
p*
F
σ*
```

con el objetivo de determinar si alguno de ellos permite establecer independientemente:

```text
PartPossible_h(σ*) = true
```

sin utilizar como premisa:

```text
Disp_W
```

ni el resultado favorable observado en `EX-PV001-02`.

---

#### Genealogía reconstruida

La investigación de `EP-02` introdujo inicialmente:

```text
Build_W
+
p*
+
CR-Disp
```

y posteriormente volvió a la constitución de la acción mínima `p*`.

En ese punto se separaron dos pretensiones:

```text
PartPossible_h
```

y:

```text
CompletesStruct
```

La primera expresa:

```text
la participación humana considerada
puede formar parte de la realización
```

mientras que la segunda expresa:

```text
la misma realización posee
una continuación estructural
capaz de completar p*
```

Por tanto, `PartPossible_h` posee una procedencia conceptual anterior a `Disp_W`.

No fue introducida por `EX-PV001-02` ni derivada retrospectivamente del resultado experimental.

---

#### Auditoría de `p*`

Se examinó si la propia caracterización de:

```text
p*
```

como:

```text
acción corporal mínima
```

era suficiente para establecer:

```text
PartPossible_h(σ*) = true
```

No se obtuvo dicha derivación.

La denominación de `p*` como acción corporal establece el tipo de participación considerada, pero no demuestra por sí sola que exista una persona capaz de realizar `p*` dentro de la realización concreta `σ*`.

No se ha localizado una cadena independiente de la forma:

```text
constitución de p*
↓
realizabilidad humana de p*
↓
PartPossible_h(σ*) = true
```

Por tanto:

```text
p*
→ fundamento semántico de la participación considerada

p*
↛
PartPossible_h(σ*) = true
```

con la evidencia actualmente disponible.

---

#### Auditoría de `F`

`F` interviene en la constitución de la completabilidad.

La cadena superviviente es:

```text
F
↓
referencia terminal
↓
xᵗ
↓
CR-Term
↓
CompletesStruct
```

No se ha localizado una propiedad de `F` que implique:

```text
realizabilidad humana de p*
```

ni:

```text
PartPossible_h(σ*) = true
```

La investigación previa trató separadamente:

```text
independencia de F
pertenencia de F a σ*
representación técnica de la participación corporal
```

por lo que la pertenencia de `F` a la realización no puede identificarse
automáticamente con la posibilidad de participación humana.

Se concluye:

```text
F
↛
PartPossible_h(σ*) = true
```

---

#### Auditoría de `σ*`

La función superviviente de `σ*` consiste en proporcionar la unidad concreta de
realización sobre la que deben evaluarse conjuntamente:

```text
PartPossible_h
```

y:

```text
CompletesStruct
```

La reducción de:

```text
SAMEWAY
w*
Ways(σ*)
```

estableció que la propia `σ*` podía actuar como testigo común de ambas
propiedades.

Esto permite afirmar:

```text
PartPossible_h
y
CompletesStruct
deben pertenecer a la misma σ*
```

pero no permite inferir:

```text
PartPossible_h(σ*) = true
```

La pertenencia de una propiedad a la realización y el valor verdadero de dicha
propiedad constituyen afirmaciones distintas.

Por tanto:

```text
σ*
→ unidad de evaluación

σ*
↛
PartPossible_h(σ*) = true
```

---

#### Resultado

Las tres vías internas auditadas producen:

```text
p*
↛
PartPossible_h(σ*) = true

F
↛
PartPossible_h(σ*) = true

σ*
↛
PartPossible_h(σ*) = true
```

No se ha encontrado entre los fundamentos previamente derivados una propiedad
que permita establecer independientemente:

```text
PartPossible_h(σ*) = true
```

Se concluye:

```text
RS-QPP-01
```

> La constitución previamente disponible de `p*`, `F` y `σ*` no autoriza por sí sola la atribución `PartPossible_h(σ*) = true`.

---

#### Alcance del resultado

`RS-QPP-01` no establece:

```text
PartPossible_h(σ*) = false
```

Tampoco falsifica:

```text
p*
F
σ*
EX-PV001-02
FIX-XGT-02
```

Establece únicamente una no implicación:

```text
constitución actualmente disponible
de p*, F y σ*
↛
PartPossible_h(σ*) = true
```

La pérdida es, por tanto, justificativa y no una falsación empírica de la
participación humana.

---

#### Incidencia sobre `Q-PP`

Antes de esta auditoría, `Q-PP` preguntaba:

> ¿Qué fundamento independiente autoriza interpretar
> `PartPossible_h=true` como que la participación humana pertinente puede efectivamente formar parte de la realización?

Después de `RS-QPP-01`, la pregunta puede reducirse a:

```text
Q-PP-01
```

> ¿Qué condición mínima, independiente de `Disp_W`, debe establecerse para poder afirmar legítimamente que una persona puede realizar `p*` dentro de `σ*` y, por tanto, que `PartPossible_h(σ*) = true`?

Esta pregunta no presupone todavía qué forma deberá adoptar dicha condición.

---

#### Restricción metodológica superviviente

`RS-QPP-01` no autoriza todavía a introducir directamente:

- una nueva entidad humana;
- una nueva relación de capacidad;
- una nueva representación corporal;
- una nueva `DEO`;
- una nueva `PME`;
- ni una modificación de `EX-PV001-02`.

Antes deberá determinarse qué contenido probatorio mínimo falta realmente y si
puede formularse como una obligación independiente sin reconstruir
innecesariamente las estructuras ya eliminadas.

---

#### Estado

```text
Q-PP
→ reducida

genealogía de PartPossible_h
→ reconstruida

p*
→ auditado
→ insuficiente como fundamento de verdad

F
→ auditado
→ insuficiente como fundamento de verdad

σ*
→ auditada
→ suficiente como unidad de realización
→ insuficiente como fundamento de verdad

RS-QPP-01
→ establecido

PartPossible_h(σ*) = true
→ todavía no justificado independientemente

Q-PP-01
→ abierta
```

---

#### Punto de continuación

La siguiente actuación será determinar la obligación mínima necesaria para establecer:

```text
PartPossible_h(σ*) = true
```

sin definirla mediante `Disp_W`, sin utilizar el resultado experimental de `a1` y sin recuperar automáticamente las estructuras eliminadas durante la reducción anterior.

---

### 65. Derivación de la obligación mínima para `PartPossible_h(σ*) = true`

#### Punto de partida

`RS-QPP-01` ha establecido:

```text
constitución actualmente disponible
de p*, F y σ*
↛
PartPossible_h(σ*) = true
```

La pérdida no consiste en que:

```text
PartPossible_h(σ*) = false
```

sino en que todavía no existe fundamento suficiente para atribuirle el valor:

```text
true.
```

La investigación debe determinar ahora qué contenido mínimo falta para autorizar dicha atribución sin introducir prematuramente una realización técnica concreta.

---

#### Contenido exacto de la afirmación que debe justificarse

`PartPossible_h(σ*) = true` pretende afirmar:

```text
la participación humana correspondiente a p*
puede formar parte de σ*
```

Por tanto, la obligación mínima no puede consistir simplemente en establecer:

```text
p* existe
```

ni:

```text
p* pertenece conceptualmente
a la clase de acciones corporales
```

ni:

```text
p* ha sido incorporada
a la descripción de σ*.
```

Esas afirmaciones son compatibles con una situación en la que ninguna persona pueda efectivamente realizar `p*` dentro de `σ*`.

Lo que debe quedar justificado es más precisamente:

```text
existe una realización humanamente admisible de p*
dentro de las condiciones pertinentes de σ*.
```

Esta formulación expresa posibilidad de participación.

No exige todavía ejecución efectiva.

---

#### Eliminación de una exigencia de ejecución actual

Se examinó si para establecer:

```text
PartPossible_h(σ*) = true
```

sería necesario observar:

```text
una persona ejecuta efectivamente p*
en σ*.
```

Esta exigencia resulta más fuerte que el contenido que debe justificarse.

La investigación previa ya había establecido que una diferencia en las posibilidades humanas puede existir aunque la persona no ejecute efectivamente la acción considerada.

Por tanto:

```text
ejecución efectiva de p*
```

puede constituir eventualmente una forma contingente de evidencia, pero no es parte necesaria del contenido de `PartPossible_h`.

Se obtiene:

```text
actualización de p*
≠
posibilidad de participación mediante p*.
```

La obligación mínima debe permanecer en el segundo nivel.

---

#### Eliminación de capacidad humana abstracta

Tampoco basta con establecer:

```text
una persona podría realizar p*
en alguna situación posible.
```

`PartPossible_h` se predica de:

```text
σ*
```

y no de una capacidad humana abstracta desvinculada de la realización.

Por tanto debe excluirse una justificación de la forma:

```text
p* es humanamente realizable en general
↓
PartPossible_h(σ*) = true.
```

La posibilidad pertinente debe ser compatible con las condiciones concretas de la misma realización sobre la que posteriormente se establece:

```text
CompletesStruct.
```

Se obtiene:

```text
realizabilidad humana general de p*
↛
PartPossible_h(σ*) = true.
```

---

#### Eliminación de mera compatibilidad nominal

Tampoco basta:

```text
σ* no declara imposible p*
```

porque la ausencia de una prohibición explícita no establece por sí sola una posibilidad humana positiva.

Del mismo modo:

```text
p* aparece en la descripción de σ*
```

no autoriza:

```text
PartPossible_h(σ*) = true.
```

La investigación necesita un fundamento positivo suficiente para la atribución de posibilidad, aunque ese fundamento no tenga que adoptar una forma técnica particular.

---

#### Separación respecto de `CompletesStruct`

La obligación tampoco puede exigir que `p*` pueda ya completarse.

Si se exigiera:

```text
participación humana posible
⇔
p* puede completarse
```

se colapsarían nuevamente:

```text
PartPossible_h
```

y:

```text
CompletesStruct.
```

Pero la estructura reducida exige precisamente que sea posible mantener:

```text
PartPossible_h = true
∧
CompletesStruct = false
```

además de:

```text
PartPossible_h = true
∧
CompletesStruct = true.
```

Por tanto, el fundamento de `PartPossible_h` debe establecer únicamente que la participación humana correspondiente a `p*` puede entrar legítimamente en la realización.

No debe establecer todavía que dicha participación alcance `F` ni que la realización pueda completarla.

---

#### Separación respecto del resultado experimental

La obligación deberá poder evaluarse sin conocer:

```text
x
xᵗ
CR-Term
CompletesStruct
Disp_W
```

y sin utilizar:

```text
a0
a1
aControl
```

como fundamento de su verdad.

En particular queda excluida:

```text
a1 produce Disp_W=true
↓
PartPossible_h(σ*) = true.
```

La dirección justificativa deberá ser la inversa:

```text
fundamento independiente
de participación humana posible
↓
PartPossible_h(σ*) = true

y sólo posteriormente:

PartPossible_h
∧
CompletesStruct
↓
Disp_W.
```

---

#### Obligación mínima derivada

Puede formularse provisionalmente:

```text
OP-QPP-01
```

> Antes de atribuir `PartPossible_h(σ*) = true` deberá existir un fundamento
> independiente de `Disp_W`, `CompletesStruct` y de los resultados del
> contraste experimental cuyo contenido sea suficiente para establecer que la
> participación humana correspondiente a `p*` es realizable dentro de las
> condiciones pertinentes de la misma `σ*`.

La obligación no prescribe todavía cómo deberá obtenerse dicho fundamento.

---

#### Contenido mínimo de `OP-QPP-01`

Para satisfacer `OP-QPP-01` deberá poder justificarse conjuntamente:

```text
1. p* corresponde realmente a una participación humana posible;
```

```text
2. esa posibilidad no es meramente abstracta,
   sino compatible con las condiciones pertinentes de σ*;
```

```text
3. dicha compatibilidad se establece
   antes e independientemente de CompletesStruct y Disp_W;
```

```text
4. el fundamento no presupone
   PartPossible_h(σ*) = true
   como una de sus premisas.
```

No se deriva todavía la necesidad de:

```text
una entidad Human
una relación CanPerform
un participante experimental
una interfaz corporal específica
q_h
Reach
una ejecución efectiva de p*
```

Cualquiera de esas estructuras podría convertirse posteriormente en una operacionalización contingente si alguna prueba mostrara su necesidad.

Ninguna queda justificada todavía como parte de la obligación mínima.

---

#### Caso falsador mínimo

La obligación debe ser capaz de distinguir al menos entre:

```text
σ₊

p* está humanamente realizable
dentro de las condiciones pertinentes de σ₊
```

y:

```text
σ₀

p* puede seguir llamándose
“acción corporal mínima”

pero las condiciones de σ₀
no permiten establecer que una persona
pueda realizarla.
```

Si un fundamento candidato atribuyera:

```text
PartPossible_h = true
```

a ambos casos únicamente porque `p*` aparece nominalmente en ellos, no satisfaría `OP-QPP-01`.

Este contraste no constituye todavía una nueva `PME`.

Su función es delimitar el contenido que cualquier fundamento futuro deberá ser capaz de justificar.

---

#### Prueba de minimalidad

Si se elimina de `OP-QPP-01` la exigencia de un fundamento independiente, vuelve a ser admisible:

```text
PartPossible_h = true
porque así fue estipulado.
```

La pérdida reaparece.

Si se elimina la referencia a las condiciones de `σ*`, queda permitido:

```text
p* es realizable humanamente en abstracto
↓
PartPossible_h(σ*) = true
```

aunque `σ*` concreta no permita justificar esa participación.

La pérdida reaparece.

Si se exige, en cambio:

```text
ejecución efectiva
```

o:

```text
completabilidad de p*
```

se añade contenido más fuerte que la afirmación que debe justificarse.

Por tanto, la forma mínima superviviente es:

```text
fundamento independiente
+
realizabilidad humana de p*
+
compatibilidad con σ*
```

sin exigir:

```text
actualización
ni
completabilidad.
```

---

#### Resultado de la derivación

Se obtiene:

```text
RS-QPP-02
```

> La atribución `PartPossible_h(σ*) = true` requiere como mínimo un fundamento
> independiente cuyo contenido autorice afirmar que la participación humana
> correspondiente a `p*` es realizable dentro de las condiciones pertinentes
> de `σ*`; no requiere por sí misma que dicha participación sea efectivamente
> ejecutada ni que pueda completarse.

La estructura justificativa mínima queda:

```text
fundamento independiente J_PP
↓
participación humana correspondiente a p*
es realizable en σ*
↓
PartPossible_h(σ*) = true
```

con las restricciones:

```text
J_PP
↛ depende de Disp_W

J_PP
↛ depende de CompletesStruct

J_PP
↛ depende de CR-Term

J_PP
↛ depende del resultado de a0/a1/aControl.
```

`J_PP` representa aquí únicamente el lugar lógico del fundamento requerido.

No constituye todavía una nueva entidad, relación, `DEO` ni elemento del dispositivo.

---

#### Incidencia sobre `Q-PP-01`

`Q-PP-01` queda reducida desde:

```text
¿Qué condición mínima debe establecerse?
```

a:

```text
Q-PP-02
```

> ¿Qué fundamento concreto, ya observable o constituible de manera independiente, puede satisfacer `OP-QPP-01` para `p*` y `σ*` sin recuperar innecesariamente las estructuras previamente eliminadas?

---

#### Estado

```text
RS-QPP-01
→ establecido

OP-QPP-01
→ derivada

RS-QPP-02
→ establecido

ejecución humana efectiva
→ no necesaria

capacidad humana abstracta
→ insuficiente

mera presencia de p* en σ*
→ insuficiente

ausencia de prohibición
→ insuficiente

CompletesStruct
→ no puede utilizarse como fundamento

Disp_W
→ no puede utilizarse como fundamento

J_PP
→ lugar lógico del fundamento
→ todavía no operacionalizado

PartPossible_h(σ*) = true
→ todavía no demostrado

Q-PP-02
→ abierta
```

---

#### Punto de continuación

La siguiente actuación será intentar determinar si `OP-QPP-01` puede satisfacerse mediante una evidencia más débil que la introducción de un participante humano efectivo.

Deberá investigarse primero qué propiedad mínima y observable de la realización puede distinguir:

```text
participación humana realizable en σ*
```

de:

```text
participación meramente nombrada
o abstractamente concebible
```

sin utilizar `CompletesStruct`, `Disp_W` ni el resultado del contraste como criterio.

---

### 66. Auditoría de una evidencia más débil que la ejecución humana efectiva

#### Punto de partida

`OP-QPP-01` exige que, antes de atribuir:

```text
PartPossible_h(σ*) = true
```

exista un fundamento independiente cuyo contenido permita afirmar que la participación humana correspondiente a `p*` es realizable dentro de las condiciones pertinentes de `σ*`.

`RS-QPP-02` ha establecido además que esta obligación no exige por sí misma:

```text
ejecución humana efectiva de p*
```

ni:

```text
completabilidad de p*.
```

La siguiente cuestión consiste en determinar si puede existir una evidencia suficiente más débil que la ejecución humana efectiva.

---

#### Distinción entre ejecución y realizabilidad

Debe mantenerse separada la afirmación:

```text
Actual_h(p*,σ*)
```

entendida provisionalmente como:

```text
una persona ejecuta efectivamente p*
en σ*
```

de la afirmación:

```text
Possible_h(p*,σ*)
```

entendida provisionalmente como:

```text
una persona puede realizar p*
dentro de las condiciones pertinentes de σ*.
```

La primera implica, para la ejecución concreta observada, que la participación era realizable.

Por tanto:

```text
Actual_h(p*,σ*)
→
Possible_h(p*,σ*)
```

puede constituir una vía suficiente de justificación.

Pero la implicación inversa no es necesaria:

```text
Possible_h(p*,σ*)
↛
Actual_h(p*,σ*).
```

Una posibilidad puede existir aunque no sea actualizada.

Por tanto, exigir ejecución efectiva como condición constitutiva de:

```text
PartPossible_h(σ*) = true
```

añadiría contenido que la afirmación no reclama.

---

#### Primera reducción

La evidencia requerida por `OP-QPP-01` puede ser más débil que:

```text
una persona realiza efectivamente p*
```

si existe otro fundamento que autorice exactamente:

```text
una persona podría realizar p*
en σ*
```

sin presuponer esa misma conclusión.

Se obtiene:

```text
ejecución efectiva
→ suficiente en principio

ejecución efectiva
→ no necesaria.
```

La cuestión no es, por tanto, si debe incorporarse necesariamente un participante humano.

La cuestión pasa a ser:

```text
¿qué puede justificar realizabilidad humana
sin exigir actualización?
```

---

#### Separación entre evidencia sin participante y evidencia sin fundamento humano

Debe distinguirse:

```text
evidencia sin participante experimental
```

de:

```text
evidencia sin fundamento relativo a capacidades humanas.
```

La primera puede ser admisible.

La segunda no satisface `OP-QPP-01`.

Un fundamento que pretenda establecer:

```text
Possible_h(p*,σ*)
```

debe contener suficiente información para justificar precisamente la posibilidad de participación humana.

Por tanto, una descripción puramente estructural de `σ*` no basta si no existe una conexión independiente entre esa estructura y la capacidad humana pertinente.

Se obtiene:

```text
ausencia de participante experimental
≠
ausencia de anclaje humano.
```

---

#### Auditoría de una propiedad puramente técnica

Considérese provisionalmente una propiedad técnica:

```text
T(p*,σ*)
```

que pudiera ser comprobada íntegramente dentro del dispositivo.

Si únicamente se establece:

```text
T(p*,σ*) = true
```

para concluir:

```text
Possible_h(p*,σ*)
```

debe existir una justificación independiente de:

```text
T(p*,σ*)
→
Possible_h(p*,σ*).
```

Si dicha relación no existe, la pérdida sólo se desplaza:

```text
PartPossible_h = true
```

se sustituye por:

```text
T = true
```

sin haber explicado todavía por qué una persona puede realizar `p*`.

Por tanto:

```text
propiedad técnica observable
+
ausencia de puente justificativo humano
↛
PartPossible_h(σ*) = true.
```

---

#### Auditoría de la mera disponibilidad de una interfaz

Podría intentarse reducir la pérdida afirmando:

```text
σ* ofrece una interfaz
mediante la cual p* puede describirse técnicamente
```

y de ahí concluir:

```text
PartPossible_h(σ*) = true.
```

La inferencia no es suficiente.

La existencia de una interfaz demuestra, como máximo, que el dispositivo posee una estructura técnicamente disponible.

No demuestra por sí sola que:

```text
una persona pueda utilizarla
para realizar p*.
```

Por tanto:

```text
InterfaceAvailable(p*,σ*)
↛
Possible_h(p*,σ*)
```

salvo que exista un fundamento independiente que justifique esa relación.

La interfaz puede formar parte de una futura operacionalización.

No constituye por sí misma el fundamento buscado.

---

#### Auditoría de una descripción de acción permitida

También podría intentarse:

```text
σ* contiene una operación
correspondiente a p*
```

o:

```text
σ* admite técnicamente la transición
asociada a p*.
```

Esto tampoco basta.

Una transición técnicamente permitida puede existir sin ser:

- perceptible por una persona;
- accesible para una persona;
- ejecutable corporalmente por una persona;
- ni utilizable bajo las condiciones pertinentes de `σ*`.

Por tanto:

```text
TechnicalTransition(p*,σ*)
↛
Possible_h(p*,σ*).
```

La realizabilidad humana contiene una pretensión que no queda agotada por la mera posibilidad técnica de transición.

---

#### Auditoría de conocimiento humano externo

Existe, sin embargo, una posibilidad lógicamente distinta.

Podría disponerse de un fundamento independiente:

```text
J_H
```

relativo a capacidades humanas pertinentes, y de un fundamento:

```text
J_σ
```

relativo a las condiciones concretas de `σ*`.

Si ambos autorizan conjuntamente:

```text
J_H
∧
J_σ
↓
Possible_h(p*,σ*)
```

entonces podría establecerse:

```text
PartPossible_h(σ*) = true
```

sin observar una ejecución efectiva dentro de `EX-PV001-02`.

Esta vía sería epistemológicamente distinta de una estipulación porque el valor de `PartPossible_h` no procedería de:

```text
Disp_W
```

ni de:

```text
CompletesStruct
```

ni del resultado experimental.

Procedería de fundamentos independientes relativos a:

```text
capacidad humana pertinente
+
condiciones concretas de σ*.
```

---

#### Consecuencia importante

La investigación permite distinguir ahora tres niveles:

```text
Nivel 1

σ* contiene nominalmente p*
```

insuficiente.

```text
Nivel 2

σ* posee una estructura técnica
compatible con una realización de p*
```

todavía insuficiente si no se justifica su relación con capacidades humanas.

```text
Nivel 3

existe fundamento independiente suficiente para afirmar
que una persona puede realizar p*
bajo las condiciones pertinentes de σ*
```

suficiente para:

```text
PartPossible_h(σ*) = true.
```

`OP-QPP-01` exige alcanzar el tercer nivel.

No exige necesariamente actualización efectiva.

---

#### Prueba de reducción de un participante experimental

Se examina ahora si:

```text
participante humano efectivo
```

es una parte necesaria de la obligación.

Supóngase que existe un fundamento independiente suficientemente establecido:

```text
J_PP
↓
Possible_h(p*,σ*).
```

En ese caso:

```text
PartPossible_h(σ*) = true
```

puede justificarse sin que ninguna persona ejecute `p*` durante el experimento.

Por tanto:

```text
participante experimental
```

no pertenece necesariamente a la obligación mínima.

Se obtiene:

```text
HumanParticipant
→ posible medio de evidencia

HumanParticipant
↛ exigencia constitutiva de OP-QPP-01.
```

No queda justificada su incorporación automática a `EX-PV001-02`.

---

#### Prueba inversa

El resultado anterior no autoriza, sin embargo:

```text
eliminar toda referencia a capacidades humanas
```

porque entonces el fundamento podría reducirse nuevamente a:

```text
propiedad técnica de σ*
↓
PartPossible_h = true
```

sin establecer el contenido humano de la atribución.

Por tanto:

```text
participante humano concreto
→ eliminable como necesidad
```

pero:

```text
fundamento humano pertinente
→ no eliminable.
```

Esta distinción constituye el resultado principal de la auditoría.

---

#### Forma mínima refinada del fundamento

`J_PP` puede ahora precisarse sin convertirlo todavía en una entidad técnica.

Debe aportar conjuntamente:

```text
J_H
```

fundamento suficiente respecto de la capacidad humana necesaria para realizar
`p*`;

y:

```text
J_σ
```

fundamento suficiente respecto de que las condiciones pertinentes de `σ*` permiten ejercer esa capacidad.

La estructura justificativa mínima queda:

```text
J_H
+
J_σ
↓
Possible_h(p*,σ*)
↓
PartPossible_h(σ*) = true.
```

No debe inferirse que:

```text
J_H
```

y:

```text
J_σ
```

sean necesariamente dos objetos, documentos, pruebas o componentes distintos.

La separación es únicamente analítica.

Su función consiste en impedir dos reducciones ilegítimas:

```text
capacidad humana abstracta
sin condiciones de σ*
```

y:

```text
estructura de σ*
sin fundamento de capacidad humana.
```

---

#### Independencia respecto de `CompletesStruct`

La estructura anterior debe detenerse en:

```text
Possible_h(p*,σ*).
```

No puede incorporar:

```text
alcanzar F
```

ni:

```text
CR-Term = true
```

ni:

```text
CompletesStruct = true.
```

De otro modo reaparecería el colapso entre:

```text
participación posible
```

y:

```text
participación completada o completable.
```

Debe seguir siendo posible:

```text
J_PP satisfecho
↓
PartPossible_h = true

pero

CompletesStruct = false.
```

---

#### Independencia respecto de `Disp_W`

Igualmente:

```text
J_PP
```

debe poder constituirse y evaluarse antes de conocer:

```text
Disp_W.
```

La cadena válida deberá ser:

```text
J_PP
↓
PartPossible_h

posteriormente:

PartPossible_h
∧
CompletesStruct
↓
Disp_W.
```

y nunca:

```text
Disp_W=true
↓
J_PP
↓
PartPossible_h=true.
```

---

#### Resultado de la auditoría

Se obtiene:

```text
RS-QPP-03
```

> `PartPossible_h(σ*) = true` no exige necesariamente la ejecución efectiva de
> `p*` por un participante humano, pero sí exige un fundamento
> epistemológicamente independiente cuyo contenido conecte las capacidades
> humanas pertinentes con las condiciones concretas de `σ*`.

Por tanto:

```text
ejecución efectiva
→ suficiente en principio
→ no necesaria

participante experimental
→ no necesario

propiedad técnica aislada de σ*
→ insuficiente

capacidad humana abstracta
→ insuficiente

fundamento humano
+
fundamento situacional de σ*
→ forma justificativa mínima superviviente.
```

---

#### Incidencia sobre `OP-QPP-01`

`OP-QPP-01` puede refinarse como:

```text
OP-QPP-02
```

> Antes de atribuir `PartPossible_h(σ*) = true` deberá existir un fundamento
> independiente que autorice la afirmación de que las capacidades humanas
> pertinentes para `p*` pueden ejercerse bajo las condiciones relevantes de
> `σ*`, sin utilizar `CompletesStruct`, `Disp_W` ni los resultados del
> contraste como premisas.

`OP-QPP-02` no exige todavía:

- introducir un participante;
- realizar una prueba humana;
- crear una entidad `Human`;
- crear una relación `CanPerform`;
- recuperar `q_h`;
- recuperar `Reach`;
- modificar `EX-PV001-02`;
- ni decidir qué evidencia concreta realizará el fundamento.

---

#### Nueva pérdida reducida

La pregunta superviviente ya no es:

```text
¿hace falta ejecutar p*?
```

ni:

```text
¿hace falta introducir una persona
dentro del dispositivo?
```

La pregunta pasa a ser:

```text
Q-PP-03
```

> ¿Qué evidencia concreta puede establecer independientemente que las
> capacidades humanas pertinentes para `p*` son ejercibles bajo las
> condiciones de `σ*`, sin presuponer `PartPossible_h=true` y sin convertir
> esa evidencia en una nueva definición nominal de posibilidad humana?

---

#### Estado

```text
RS-QPP-01
→ establecido

RS-QPP-02
→ establecido

RS-QPP-03
→ establecido

OP-QPP-01
→ refinada

OP-QPP-02
→ derivada

ejecución humana efectiva
→ no necesaria

participante experimental
→ no necesario como obligación mínima

anclaje en capacidades humanas
→ necesario

anclaje en condiciones de σ*
→ necesario

propiedad puramente técnica
sin puente humano
→ insuficiente

PartPossible_h(σ*) = true
→ todavía no demostrado

Q-PP-03
→ abierta.
```

---

#### Punto de continuación

La siguiente actuación será investigar qué clases mínimas de evidencia podrían realizar `OP-QPP-02`.

La investigación deberá comparar, sin seleccionar todavía ninguna de ellas como solución:

```text
evidencia observacional humana
```

```text
evidencia independiente previamente establecida
sobre capacidades humanas
```

```text
evidencia constitutiva de las condiciones de σ*
con un puente humano previamente justificado
```

y cualquier reducción más débil que pueda aparecer.

El objetivo no será elegir todavía una implementación.

Será determinar cuál es la forma de evidencia más débil que puede satisfacer `OP-QPP-02` sin trasladar nuevamente la pérdida a otro nombre.

---

### 67. Auditoría comparativa de realizaciones posibles de `OP-QPP-02`

#### Punto de partida

`OP-QPP-02` exige:

> Antes de atribuir `PartPossible_h(σ*) = true` deberá existir un fundamento
> independiente que autorice la afirmación de que las capacidades humanas
> pertinentes para `p*` pueden ejercerse bajo las condiciones relevantes de
> `σ*`, sin utilizar `CompletesStruct`, `Disp_W` ni los resultados del
> contraste como premisas.

La investigación ha establecido ya que:

```text
ejecución humana efectiva
→ no necesaria como contenido constitutivo

participante experimental
→ no necesario como obligación mínima

propiedad puramente técnica de σ*
→ insuficiente

capacidad humana abstracta
→ insuficiente
```

La pérdida superviviente consiste en determinar qué forma mínima de evidencia
puede establecer:

```text
Possible_h(p*,σ*)
```

sin presuponer:

```text
PartPossible_h(σ*) = true.
```

La investigación comparará inicialmente tres familias de evidencia:

```text
EVID-H
→ evidencia observacional humana

EVID-C
→ evidencia independiente sobre capacidades humanas

EVID-Σ
→ evidencia constitutiva de σ*
   más un puente humano independientemente justificado
```

La clasificación es provisional.

No presupone que las tres familias sean irreducibles ni que alguna de ellas
deba sobrevivir.

---

#### 67.1. Auditoría de `EVID-H` — Evidencia observacional humana

Se formula provisionalmente:

```text
H-EVID-H01
```

> Una observación humana efectiva de `p*` dentro de `σ*` es necesaria para
> justificar `PartPossible_h(σ*) = true`.

La hipótesis es inicialmente plausible porque una ejecución efectiva puede
proporcionar evidencia directa de que la participación humana era posible.

Puede representarse:

```text
una persona h
↓
ejecuta p*
↓
dentro de σ*
↓
Possible_h(p*,σ*)
↓
PartPossible_h(σ*) = true.
```

La cuestión es si este recorrido es necesario o únicamente suficiente.

---

#### Prueba de eliminación de la ejecución efectiva

Supóngase que existe un fundamento independiente:

```text
J_PP
```

capaz de establecer antes de cualquier ejecución:

```text
Possible_h(p*,σ*).
```

Si dicho fundamento posee contenido suficiente para justificar que las
capacidades humanas pertinentes pueden ejercerse bajo las condiciones de `σ*`,
entonces:

```text
PartPossible_h(σ*) = true
```

queda autorizado aunque ninguna persona ejecute efectivamente `p*`.

La ausencia de actualización no elimina necesariamente una posibilidad.

Este resultado es compatible con una distinción ya establecida en la
investigación:

```text
posibilidad humana
≠
ejecución humana efectiva.
```

La investigación previa había concluido ya que una incidencia sobre
posibilidades humanas no requiere que la persona ejecute efectivamente la acción
correspondiente.

Por tanto:

```text
Actual_h(p*,σ*)
→ Possible_h(p*,σ*)
```

puede ser una forma fuerte de evidencia, pero:

```text
Possible_h(p*,σ*)
↛ requiere Actual_h(p*,σ*).
```

Se concluye:

```text
H-EVID-H01
→ falsada.
```

La observación humana efectiva no es necesaria para justificar
`PartPossible_h(σ*) = true`.

---

#### Alcance de la falsación

La falsación de `H-EVID-H01` no establece que una observación humana carezca de
valor probatorio.

Puede seguir siendo:

```text
EVID-H
→ evidencia suficiente en determinados casos
```

pero no:

```text
EVID-H
→ obligación mínima universal de OP-QPP-02.
```

Por tanto no queda justificado introducir automáticamente:

```text
participante humano
```

ni:

```text
ejecución efectiva de p*
```

en `EX-PV001-02`.

La investigación puede continuar buscando una forma más débil de evidencia.

---

#### 67.2. Auditoría de `EVID-C` — Evidencia independiente sobre capacidades humanas

Se considera ahora una segunda familia:

```text
EVID-C
```

cuya forma general sería:

```text
fundamento independiente sobre capacidades humanas
↓
capacidad relevante para p*
```

Puede representarse provisionalmente mediante:

```text
J_H
```

sin convertir `J_H` en una entidad técnica.

La hipótesis candidata es:

```text
H-EVID-C01
```

> Un fundamento independiente sobre capacidades humanas pertinentes puede ser
> suficiente, sin ejecución efectiva, para justificar
> `PartPossible_h(σ*) = true`.

La hipótesis debe intentar falsarse.

---

#### Primera prueba — capacidad humana abstracta

Supóngase que se establece únicamente:

```text
J_H
↓
una persona puede realizar p*
en alguna situación admisible.
```

Esto no permite todavía concluir:

```text
PartPossible_h(σ*) = true
```

porque la realización concreta `σ*` podría contener condiciones incompatibles
con el ejercicio de esa capacidad.

Puede darse:

```text
HumanCan(p*)
```

y simultáneamente:

```text
σ*
↓
condiciones que impiden ejercer p*.
```

Por tanto:

```text
capacidad humana abstracta
↛
Possible_h(p*,σ*).
```

La forma simple de `H-EVID-C01` queda falsada.

---

#### Resultado parcial de `EVID-C`

`EVID-C` no puede constituirse únicamente mediante conocimiento general del
tipo:

```text
los humanos pueden realizar acciones de esta clase.
```

El fundamento debe conservar referencia a las condiciones particulares de
`σ*`.

Por tanto:

```text
J_H
```

puede ser necesario como parte del anclaje humano, pero no es suficiente por sí
solo.

Se obtiene:

```text
J_H
→ fundamento humano pertinente

J_H
↛
PartPossible_h(σ*) = true
```

si no se combina con información independiente sobre `σ*`.

---

#### 67.3. Auditoría de `EVID-Σ` — Evidencia constitutiva de `σ*`

Se considera ahora:

```text
EVID-Σ
```

como evidencia derivada de propiedades constitutivas de la propia realización.

La hipótesis candidata es:

```text
H-EVID-Σ01
```

> Una propiedad constitutiva de `σ*` puede ser suficiente para establecer
> `PartPossible_h(σ*) = true` sin necesidad de observación humana.

La hipótesis debe distinguirse de la forma ya rechazada:

```text
σ* contiene nominalmente p*
↓
PartPossible_h = true.
```

---

#### Primera prueba — posibilidad técnica de la operación

Supóngase que `σ*` contiene una transición o interfaz correspondiente a `p*`:

```text
TechnicalPossible(p*,σ*) = true.
```

Esto permite afirmar únicamente que la realización posee una estructura
técnicamente compatible con cierta operación.

No establece por sí solo:

```text
una persona puede realizar esa operación.
```

Puede existir una transición técnicamente válida que:

- no sea accesible para una persona;
- no sea perceptible;
- requiera capacidades humanas inexistentes;
- exija condiciones físicamente incompatibles;
- o no corresponda realmente a la participación humana pretendida.

Por tanto:

```text
TechnicalPossible(p*,σ*)
↛
Possible_h(p*,σ*).
```

La forma puramente técnica de `H-EVID-Σ01` queda falsada.

---

#### Segunda prueba — mera ausencia de impedimento

Supóngase:

```text
σ* no contiene una prohibición conocida de p*.
```

Tampoco se deriva:

```text
Possible_h(p*,σ*).
```

La ausencia de evidencia de imposibilidad no constituye por sí sola evidencia
positiva suficiente de posibilidad.

Por tanto:

```text
¬KnownImpossible(p*,σ*)
↛
Possible_h(p*,σ*).
```

Esta vía queda eliminada.

---

#### Resultado parcial de `EVID-Σ`

La constitución de `σ*` puede aportar una parte necesaria del fundamento:

```text
J_σ
```

relativa a las condiciones bajo las que deberá ejercerse la participación.

Pero:

```text
J_σ
```

no puede establecer por sí sola la dimensión humana de la posibilidad.

Se obtiene:

```text
J_σ
→ fundamento situacional pertinente

J_σ
↛
PartPossible_h(σ*) = true
```

si no existe un puente independiente con capacidades humanas.

---

#### 67.4. Emergencia de una forma conjunta

Las tres auditorías producen:

```text
EVID-H
→ suficiente en principio
→ no necesaria

EVID-C aislada
→ insuficiente

EVID-Σ aislada
→ insuficiente.
```

La forma mínima superviviente no parece pertenecer exclusivamente a ninguna de
las tres familias.

Debe conectar:

```text
capacidades humanas pertinentes
```

con:

```text
condiciones concretas de σ*.
```

La estructura candidata es:

```text
J_H
+
J_σ
+
Bridge_HΣ
↓
Possible_h(p*,σ*)
↓
PartPossible_h(σ*) = true.
```

donde:

```text
Bridge_HΣ
```

representa únicamente la exigencia justificativa de que las capacidades
establecidas por `J_H` sean ejercibles bajo las condiciones establecidas por
`J_σ`.

No constituye todavía una nueva entidad o relación técnica.

---

#### Auditoría de `Bridge_HΣ`

Debe evitarse que:

```text
Bridge_HΣ
```

sea simplemente otro nombre para:

```text
PartPossible_h.
```

Si se definiera:

```text
Bridge_HΣ
:=
“las capacidades humanas pueden ejercerse en σ*”
```

y esa afirmación no dispusiera de fundamento independiente, la investigación
sólo habría renombrado la pérdida.

Por tanto:

```text
Bridge_HΣ
```

no puede ser una nueva premisa estipulada.

Debe ser una inferencia justificable a partir de:

```text
J_H
```

y:

```text
J_σ.
```

La forma válida deberá ser:

```text
J_H
∧
J_σ
⊢
Possible_h(p*,σ*)
```

y no:

```text
Possible_h(p*,σ*)
↓
Bridge_HΣ
↓
Possible_h(p*,σ*).
```

---

#### Condición de independencia

La inferencia:

```text
J_H
∧
J_σ
⊢
Possible_h(p*,σ*)
```

deberá ser constituible sin consultar:

```text
CompletesStruct
CR-Term
x
xᵗ
Disp_W
a0
a1
aControl.
```

Deberá poder conocerse incluso en una realización en la que posteriormente:

```text
CompletesStruct = false.
```

Esta condición conserva la independencia ya demostrada entre:

```text
PartPossible_h
```

y:

```text
CompletesStruct.
```

---

#### Caso de control conceptual

Para comprobar que el fundamento no se reduce a mera estructura técnica se
derivan dos casos conceptuales:

```text
σ_H+
```

con:

```text
J_H satisfecho
J_σ satisfecho
compatibilidad justificable
```

y:

```text
σ_H−
```

con:

```text
misma descripción nominal de p*
pero incompatibilidad entre
capacidad humana pertinente
y condiciones de σ*.
```

Un fundamento suficiente deberá permitir:

```text
σ_H+
→ PartPossible_h = true

σ_H−
→ no autorizado PartPossible_h = true.
```

No se exige todavía:

```text
PartPossible_h(σ_H−) = false.
```

Basta con que la atribución positiva no pueda emitirse sin fundamento.

Esto evita convertir ausencia de justificación en falsedad.

---

#### Prueba de minimalidad de la forma conjunta

Si se elimina:

```text
J_H
```

queda únicamente estructura técnica.

La pérdida reaparece.

Si se elimina:

```text
J_σ
```

queda únicamente capacidad humana abstracta.

La pérdida reaparece.

Si se exige:

```text
ejecución efectiva
```

se añade más contenido del necesario.

Si se exige:

```text
CompletesStruct
```

se colapsan de nuevo las dos ramas conceptuales.

Por tanto, la forma mínima superviviente es:

```text
fundamento humano
+
fundamento situacional
+
inferencia independiente de compatibilidad.
```

---

#### Resultado principal

Se obtiene:

```text
RS-QPP-04
```

> Ninguna de las siguientes formas, tomada aisladamente, constituye la
> obligación mínima necesaria para justificar `PartPossible_h(σ*) = true`:
>
> - observación humana efectiva;
> - capacidad humana abstracta;
> - propiedad puramente técnica de `σ*`.
>
> La forma justificativa mínima superviviente requiere un fundamento sobre las
> capacidades humanas pertinentes y un fundamento sobre las condiciones
> concretas de `σ*`, cuya combinación autorice independientemente la
> realizabilidad de `p*` en esa realización.

La estructura queda:

```text
J_H
∧
J_σ
⊢
Possible_h(p*,σ*)
↓
PartPossible_h(σ*) = true.
```

---

#### ¿Constituye esto ya una nueva obligación experimental?

No.

`RS-QPP-04` deriva una obligación epistemológica.

Todavía no determina:

```text
cómo obtener J_H
```

ni:

```text
cómo obtener J_σ
```

ni:

```text
qué procedimiento debe realizar la inferencia.
```

Por tanto no queda justificada todavía:

- una nueva interfaz;
- una prueba humana;
- una entidad `Human`;
- una función `CanPerform`;
- una nueva `DEO`;
- una nueva `PME`;
- ni una modificación de `EX-PV001-02`.

---

#### Reducción de `Q-PP-03`

`Q-PP-03` preguntaba:

> ¿Qué evidencia concreta puede establecer independientemente que las
> capacidades humanas pertinentes para `p*` son ejercibles bajo las condiciones
> de `σ*`?

Después de la auditoría, la pregunta puede refinarse:

```text
Q-PP-04
```

> ¿Pueden constituirse `J_H` y `J_σ` mediante hechos independientes y
> previamente fijables cuya combinación autorice
> `Possible_h(p*,σ*)`, o la determinación de esa compatibilidad requiere
> inevitablemente una observación humana específica de la realización?

Esta pregunta localiza ahora el punto exacto de decisión.

---

#### Estado

```text
EVID-H
→ auditada
→ suficiente en principio
→ no necesaria

EVID-C
→ auditada
→ capacidad humana abstracta insuficiente

EVID-Σ
→ auditada
→ propiedad técnica aislada insuficiente

J_H
→ necesario en la forma mínima superviviente

J_σ
→ necesario en la forma mínima superviviente

J_H ∧ J_σ
→ debe autorizar independientemente Possible_h

RS-QPP-04
→ establecido

PartPossible_h(σ*) = true
→ todavía no demostrado

Q-PP-04
→ abierta.
```

---

#### Punto de continuación

La siguiente actuación será intentar falsar la necesidad de observación humana específica preguntando si:

```text
J_H
```

y:

```text
J_σ
```

pueden fijarse independientemente antes de cualquier prueba de
`PartPossible_h`.

La investigación deberá determinar en particular si existe una construcción mínima del tipo:

```text
capacidad humana previamente establecida
+
requisitos mínimos de p*
+
condiciones observables de σ*
↓
compatibilidad
```

sin que la regla de compatibilidad vuelva a introducir subrepticiamente:

```text
PartPossible_h
```

como premisa.

---

### 68. Auditoría de la fijación independiente de `J_H` y `J_σ`

#### Punto de partida

`RS-QPP-04` ha establecido como forma justificativa mínima superviviente:

```text
J_H
∧
J_σ
⊢
Possible_h(p*,σ*)
↓
PartPossible_h(σ*) = true
```

donde:

```text
J_H
```

debe aportar fundamento relativo a las capacidades humanas pertinentes para
`p*`, y:

```text
J_σ
```

debe aportar fundamento relativo a las condiciones concretas de `σ*`.

La pregunta abierta es:

```text
Q-PP-04
```

> ¿Pueden constituirse `J_H` y `J_σ` mediante hechos independientes y
> previamente fijables cuya combinación autorice `Possible_h(p*,σ*)`, o la
> determinación de esa compatibilidad requiere inevitablemente una observación
> humana específica de la realización?

---

#### 68.1. Condición de independencia de `J_H`

`J_H` no puede fijarse observando:

```text
PartPossible_h(σ*) = true
```

ni:

```text
Disp_W = true.
```

Tampoco puede definirse mediante:

```text
una persona puede realizar p*
en σ*
```

porque esa formulación contendría ya la conclusión que debe justificar.

Para que `J_H` sea independiente, deberá referirse únicamente a capacidades
humanas pertinentes para la clase de participación implicada por `p*`.

Su forma lógica deberá ser anterior a la realización concreta:

```text
J_H
↓
capacidades humanas pertinentes
para realizar una participación
del tipo requerido por p*
```

sin consultar todavía:

```text
σ*
CompletesStruct
Disp_W.
```

Por tanto:

```text
J_H
```

puede, en principio, fijarse independientemente de `σ*`.

---

#### 68.2. Condición de independencia de `J_σ`

Análogamente, `J_σ` no puede contener:

```text
una persona puede realizar p* en σ*
```

porque incorporaría ya la conclusión.

Debe describir únicamente las condiciones de la realización que resultan
pertinentes para una eventual participación.

Su forma lógica deberá ser:

```text
J_σ
↓
condiciones observables o constitutivas
de σ*
```

sin consultar:

```text
PartPossible_h
CompletesStruct
Disp_W
```

ni los resultados del contraste.

Por tanto:

```text
J_σ
```

también puede, en principio, fijarse independientemente de la atribución de
posibilidad humana.

---

#### 68.3. El problema del encuentro

La independencia de:

```text
J_H
```

y:

```text
J_σ
```

no basta todavía.

Puede disponerse simultáneamente de:

```text
J_H = válido
```

y:

```text
J_σ = válido
```

sin que de ello se siga automáticamente:

```text
Possible_h(p*,σ*).
```

Hace falta determinar qué permite comparar ambos fundamentos sin introducir una
nueva premisa que ya contenga la posibilidad buscada.

La pérdida reaparecería si se introdujera simplemente:

```text
Compatible_Hσ
:=
Possible_h(p*,σ*).
```

y posteriormente:

```text
Compatible_Hσ
↓
PartPossible_h(σ*) = true.
```

Esta construcción sólo renombraría la conclusión.

---

#### 68.4. Reconstrucción desde los requisitos de `p*`

La comparación entre `J_H` y `J_σ` puede intentar reducirse a la propia
constitución independiente de `p*`.

Si `p*` es una participación determinada, su realización presupone ciertas
condiciones mínimas.

Puede introducirse provisionalmente, sólo como lugar lógico:

```text
Req(p*)
```

entendido como:

```text
condiciones mínimas cuya satisfacción
es necesaria para realizar p*
```

`Req(p*)` no constituye todavía:

- una nueva entidad técnica;
- una interfaz;
- una `DEO`;
- una `PME`;
- ni una modificación de `EX-PV001-02`.

Representa únicamente el contenido que debe poder extraerse de la especificación
independiente de `p*` para determinar qué capacidades y qué condiciones son
pertinentes.

---

#### Condición de independencia de `Req(p*)`

Para evitar circularidad:

```text
Req(p*)
```

deberá poder fijarse antes de conocer:

```text
PartPossible_h
CompletesStruct
Disp_W
```

y antes de evaluar conjuntamente:

```text
J_H
```

y:

```text
J_σ.
```

La dirección válida es:

```text
constitución independiente de p*
↓
Req(p*)
```

y no:

```text
resultado favorable
↓
selección retrospectiva de requisitos.
```

---

#### 68.5. Descomposición de los requisitos

Los requisitos de `p*` pueden distinguir provisionalmente dos lados:

```text
Req_H(p*)
```

correspondientes a capacidades que debe poder aportar una persona;

y:

```text
Req_σ(p*)
```

correspondientes a condiciones que debe ofrecer o permitir la realización.

La separación es analítica.

No presupone que existan dos estructuras independientes dentro del dispositivo.

La cadena candidata queda:

```text
p*
↓
Req_H(p*)
+
Req_σ(p*)
```

y después:

```text
J_H
⊨
Req_H(p*)
```

junto con:

```text
J_σ
⊨
Req_σ(p*).
```

Si ambas satisfacciones quedan independientemente establecidas, podría
autorizarse:

```text
Possible_h(p*,σ*).
```

---

#### 68.6. Auditoría del posible puente

Se formula provisionalmente:

```text
H-BRIDGE-01
```

> Si las capacidades humanas previamente establecidas satisfacen los requisitos
> humanos de `p*` y las condiciones de `σ*` satisfacen los requisitos
> situacionales de `p*`, entonces puede afirmarse
> `Possible_h(p*,σ*)`.

La hipótesis debe intentar falsarse.

---

#### Primer intento de falsación — requisito omitido

Supóngase que:

```text
J_H
⊨
Req_H(p*)
```

y:

```text
J_σ
⊨
Req_σ(p*)
```

pero existe una tercera condición necesaria para realizar `p*` que no aparece
en ninguno de los dos conjuntos.

Entonces:

```text
Possible_h(p*,σ*)
```

no estaría justificado.

Por tanto, `H-BRIDGE-01` sólo puede sobrevivir si:

```text
Req_H(p*)
∪
Req_σ(p*)
```

agota exactamente las condiciones pertinentes para la realizabilidad de `p*`
que están siendo reclamadas.

La exhaustividad no puede obtenerse retrospectivamente del resultado favorable.

Debe proceder de la constitución previa de `p*`.

---

#### Segundo intento de falsación — requisitos demasiado fuertes

Supóngase que `Req(p*)` incluye:

```text
alcanzar F
```

o:

```text
CompletesStruct = true.
```

Entonces:

```text
PartPossible_h
```

volvería a colapsar con:

```text
CompletesStruct.
```

La estructura dejaría de permitir:

```text
PartPossible_h = true
∧
CompletesStruct = false.
```

Por tanto, `Req(p*)` sólo puede contener condiciones para:

```text
iniciar o formar parte de la participación
```

y no condiciones para:

```text
completarla.
```

---

#### Tercer intento de falsación — requisitos seleccionados por `σ*`

Supóngase que los requisitos de `p*` se determinan después de observar qué
propiedades posee `σ*`.

Entonces podría construirse:

```text
σ*
↓
propiedades disponibles
↓
Req(p*) adaptado a esas propiedades
↓
compatibilidad garantizada.
```

La atribución de posibilidad quedaría asegurada por construcción.

Por tanto:

```text
Req(p*)
```

debe fijarse independientemente de la realización concreta que posteriormente
será evaluada.

---

#### Cuarto intento de falsación — capacidad seleccionada por `σ*`

Supóngase que `J_H` se constituye eligiendo precisamente una capacidad humana
que coincide con la estructura ya observada de `σ*`.

Entonces el encuentro:

```text
J_H
∧
J_σ
```

podría resultar favorable por selección retrospectiva.

Por tanto, cuando `J_H` sea contingente deberá quedar fijado antes de evaluar la
compatibilidad con `J_σ`.

La misma exigencia se aplica simétricamente a `J_σ`.

---

#### Resultado provisional de `H-BRIDGE-01`

Tras las reducciones anteriores, la hipótesis puede sobrevivir en una forma más
precisa:

```text
Req(p*)
→ fijado independientemente

J_H
→ fijado independientemente

J_σ
→ fijado independientemente

J_H satisface Req_H(p*)
∧
J_σ satisface Req_σ(p*)
↓
Possible_h(p*,σ*).
```

La inferencia no necesita una nueva propiedad positiva denominada
`Bridge_HΣ` si la compatibilidad consiste únicamente en comprobar la
satisfacción de requisitos previamente fijados.

Por tanto:

```text
Bridge_HΣ
```

puede reducirse a:

```text
satisfacción conjunta
de requisitos independientes de p*.
```

---

#### 68.7. Consecuencia sobre la necesidad de observación humana específica

Si:

```text
Req(p*)
J_H
J_σ
```

pueden constituirse independientemente y la satisfacción de los requisitos es
comprobable sin una ejecución humana efectiva, entonces:

```text
Possible_h(p*,σ*)
```

puede quedar justificado antes de cualquier observación humana específica de
esa realización.

Por tanto, la hipótesis:

```text
H-OBS-NEC-01
```

> La compatibilidad entre capacidad humana y `σ*` requiere necesariamente una
> observación humana específica dentro de la realización.

no sobrevive como necesidad lógica.

Se concluye:

```text
H-OBS-NEC-01
→ falsada como necesidad universal.
```

Esto no establece que la observación humana nunca sea necesaria en una
operacionalización concreta.

Establece únicamente que no pertenece por sí misma a la obligación mínima.

---

#### 68.8. Nueva condición crítica

La reducción descubre, sin embargo, una nueva condición previa:

```text
p*
```

debe estar suficientemente especificada para que puedan derivarse
independientemente:

```text
Req_H(p*)
Req_σ(p*).
```

Si `p*` continúa siendo únicamente:

```text
“acción corporal mínima”
```

sin una constitución que determine qué exige para poder realizarse, entonces:

```text
Req(p*)
```

no puede fijarse sin añadir contenido arbitrario.

En ese caso la pérdida no estaría ya en:

```text
J_H
```

ni en:

```text
J_σ
```

sino en la insuficiente especificación de:

```text
p*.
```

---

#### Caso de control

Considérense dos acciones nominalmente corporales:

```text
p₁
p₂
```

para las que se afirma únicamente:

```text
ambas son acciones corporales.
```

Si no se conocen requisitos adicionales, no puede determinarse si unas mismas
capacidades humanas y unas mismas condiciones de `σ*` permiten realizar:

```text
p₁
```

pero no:

```text
p₂.
```

Por tanto:

```text
“acción corporal”
```

no contiene granularidad suficiente para efectuar la comparación requerida.

El fundamento deberá proceder de una especificación de `p*` suficientemente
rica para discriminar sus requisitos de realización, pero no tan rica como para
incorporar ya:

```text
CompletesStruct
```

o:

```text
Disp_W.
```

---

#### Resultado principal

Se obtiene:

```text
RS-QPP-05
```

> La observación humana específica de `σ*` no es una condición necesaria para
> justificar `PartPossible_h(σ*) = true` si pueden fijarse independientemente:
>
> 1. los requisitos mínimos de participación derivados de `p*`;
> 2. el fundamento sobre las capacidades humanas pertinentes `J_H`;
> 3. el fundamento sobre las condiciones concretas de `σ*`, `J_σ`;
>
> y si la satisfacción conjunta de esos requisitos autoriza
> `Possible_h(p*,σ*)` sin utilizar `CompletesStruct`, `Disp_W` ni el resultado
> experimental.

La forma reducida queda:

```text
p*
↓
Req_H(p*) + Req_σ(p*)

J_H
⊨ Req_H(p*)

J_σ
⊨ Req_σ(p*)
        ↓
Possible_h(p*,σ*)
        ↓
PartPossible_h(σ*) = true.
```

---

#### Incidencia sobre `Q-PP-04`

La pregunta:

```text
¿pueden fijarse independientemente J_H y J_σ?
```

recibe una respuesta provisional:

```text
sí, en principio,
sin observación humana específica,
si existe una especificación independiente
suficiente de p*.
```

Por tanto `Q-PP-04` se reduce a:

```text
Q-PP-05
```

> ¿Está `p*` actualmente constituida con suficiente contenido independiente
> para derivar sus requisitos mínimos de participación, o la expresión
> “acción corporal mínima” carece todavía de la granularidad necesaria para
> construir `Req_H(p*)` y `Req_σ(p*)` sin añadir contenido retrospectivo?

---

#### Estado

```text
J_H
→ fijable independientemente en principio

J_σ
→ fijable independientemente en principio

observación humana específica
→ no necesaria como obligación universal

Bridge_HΣ
→ reducible en principio
  a satisfacción conjunta de requisitos

Req(p*)
→ debe fijarse antes del encuentro

Req(p*)
→ no puede contener completabilidad

Req(p*)
→ no puede derivarse retrospectivamente de σ*

p*
→ nueva pieza crítica a auditar
  respecto de su grado de especificación

RS-QPP-05
→ establecido

PartPossible_h(σ*) = true
→ todavía no demostrado

Q-PP-05
→ abierta.
```

---

#### Punto de continuación

La siguiente actuación será auditar exclusivamente la especificación actualmente
disponible de:

```text
p*
```

para determinar si contiene suficiente información independiente para derivar:

```text
Req_H(p*)
```

y:

```text
Req_σ(p*)
```

sin añadir una nueva definición de la acción y sin utilizar como guía:

```text
σ*
CompletesStruct
Disp_W
```

o los resultados de `EX-PV001-02`.

Si la especificación actual de `p*` no permite esa derivación, deberá registrarse formalmente que la pérdida ha sido localizada en la subespecificación de `p*` antes de decidir cualquier nueva actuación técnica.

---

### 69. Auditoría de la especificación disponible de `p*`

#### Punto de partida

`RS-QPP-05` ha establecido que:

```text
PartPossible_h(σ*) = true
```

podría justificarse sin una observación humana específica si pudieran fijarse
independientemente:

```text
Req_H(p*)
Req_σ(p*)
J_H
J_σ
```

de forma que:

```text
J_H
⊨
Req_H(p*)
```

y:

```text
J_σ
⊨
Req_σ(p*)
```

autorizaran:

```text
Possible_h(p*,σ*).
```

La cuestión abierta es:

```text
Q-PP-05
```

> ¿Está `p*` actualmente constituida con suficiente contenido independiente
> para derivar sus requisitos mínimos de participación, o la expresión
> “acción corporal mínima” carece todavía de la granularidad necesaria para
> construir `Req_H(p*)` y `Req_σ(p*)` sin añadir contenido retrospectivo?

---

#### 69.1. Reconstrucción de la especificación actualmente disponible

La reapertura de `EP-02` introdujo inicialmente:

```text
Build_W
+
p*
+
CR-Disp
```

y describió la búsqueda como la de:

```text
una acción corporal
y una interfaz tan pobres como fuera posible.
```

Posteriormente, al volver a la constitución de `p*`, la investigación separó:

```text
PartPossible_h
```

y:

```text
CompletesStruct.
```

La primera expresa:

```text
la participación humana considerada
puede formar parte de la realización
```

y la segunda:

```text
la misma realización posee
una continuación estructural
capaz de completar p*.
```

Sin embargo, entre:

```text
p*
→ acción corporal mínima
```

y:

```text
PartPossible_h
CompletesStruct
```

no aparece una especificación independiente de:

```text
qué debe hacer la persona
```

ni:

```text
qué condiciones debe proporcionar σ*
para que esa participación pueda iniciarse.
```

---

#### 69.2. Contenido que sí posee `p*`

La especificación disponible permite atribuir a `p*` al menos:

```text
1. carácter de participación;
2. carácter humano/corporal pretendido;
3. minimalidad;
4. diferencia conceptual respecto de su completabilidad.
```

En particular, la investigación preserva la separación:

```text
participación humana posible
≠
completabilidad estructural.
```

Por tanto, `p*` no es completamente vacía.

Posee suficiente contenido para identificar el tipo general de fenómeno que
quiere considerarse.

---

#### 69.3. Contenido que no aparece especificado

No se encuentra, sin embargo, una derivación independiente de condiciones del
tipo:

```text
Req_H(p*)
```

que permitan determinar:

```text
qué capacidad humana concreta
es necesaria para realizar p*.
```

Tampoco aparece:

```text
Req_σ(p*)
```

que permita determinar:

```text
qué debe ofrecer o permitir σ*
para que esa capacidad pueda ejercerse.
```

No se ha establecido, por ejemplo, si `p*` requiere:

```text
percibir algo
seleccionar algo
alcanzar algo
accionar algo
desplazarse
leer
recordar
emitir una respuesta
o cualquier otra capacidad determinada.
```

La lista anterior no constituye una propuesta de requisitos.

Muestra únicamente que la caracterización:

```text
acción corporal mínima
```

no discrimina entre acciones que podrían poseer requisitos humanos y
situacionales diferentes.

---

#### 69.4. Prueba de discriminación

Considérense dos acciones:

```text
p₁
p₂
```

de las que sólo sabemos:

```text
p₁ es una acción corporal mínima
p₂ es una acción corporal mínima.
```

Podría ocurrir que:

```text
p₁
```

requiera una capacidad humana que una determinada persona posee y que `σ*`
permite ejercer, mientras que:

```text
p₂
```

requiera otra capacidad o condición no disponible.

La especificación:

```text
acción corporal mínima
```

no permite distinguir esos casos.

Por tanto no permite derivar de manera determinada:

```text
Req_H(p₁)
≠
Req_H(p₂)
```

ni:

```text
Req_σ(p₁)
≠
Req_σ(p₂).
```

Se concluye que la especificación actual carece de granularidad suficiente para
realizar la comparación exigida por `OP-QPP-02`.

---

#### 69.5. Prueba de extracción de requisitos

Se intenta derivar:

```text
p*
↓
Req_H(p*)
```

utilizando exclusivamente:

```text
p* = acción corporal mínima.
```

El único requisito humano obtenible sin añadir contenido sería algo equivalente
a:

```text
la persona debe poder realizar
la acción corporal correspondiente.
```

Pero esta formulación es circular respecto de:

```text
Possible_h(p*,σ*).
```

No identifica una capacidad independiente contra la que pueda contrastarse
`J_H`.

Por tanto:

```text
“acción corporal mínima”
↛
Req_H(p*)
```

con suficiente contenido independiente.

Se intenta igualmente:

```text
p*
↓
Req_σ(p*).
```

La caracterización disponible tampoco permite establecer qué propiedad concreta
de `σ*` debe satisfacerse.

Cualquier requisito añadido en este punto tendría que proceder de información
no contenida actualmente en `p*`.

Por tanto:

```text
“acción corporal mínima”
↛
Req_σ(p*)
```

con suficiente contenido independiente.

---

#### 69.6. Auditoría de las estructuras previamente eliminadas

Durante la investigación se exploraron:

```text
Q_σ
R_σ
q_F
q_h
Reach
```

y se auditó, entre otras cuestiones:

```text
la representación técnica
de la participación corporal.
```

Estas estructuras fueron eliminadas porque no quedó justificada su necesidad en
la operacionalización mínima.

Su eliminación no obliga ahora a recuperarlas.

Pero tampoco produjo como residuo una especificación positiva equivalente de:

```text
qué exige p*
para ser humanamente realizable.
```

Por tanto, la eliminación fue conservativa respecto de la estructura técnica
que entonces se pretendía reducir, pero dejó sin resolver la obligación
epistemológica que `Q-EX002-01` ha hecho visible posteriormente.

No se concluye:

```text
q_h
Reach
Q_σ
R_σ
```

deben recuperarse.

Se concluye únicamente que:

```text
su eliminación
no proporciona por sí misma
Req_H(p*) ni Req_σ(p*).
```

---

#### 69.7. Riesgo de especificación retrospectiva

La pérdida no puede repararse ahora definiendo `p*` a partir de propiedades que
sabemos que posee `EX-PV001-02`.

Sería inválida una construcción como:

```text
observar σ*
↓
identificar lo que permite hacer
↓
definir p* precisamente como esa acción
↓
derivar requisitos que σ* ya satisface
↓
PartPossible_h = true.
```

La compatibilidad quedaría garantizada por construcción.

Tampoco puede elegirse una acción después de conocer:

```text
CompletesStruct
Disp_W
```

o el resultado favorable de:

```text
a1.
```

La especificación de `p*`, si debe ampliarse, tendrá que fijarse antes e
independientemente de esas propiedades.

---

#### 69.8. ¿Es la subespecificación necesariamente un defecto?

No necesariamente.

Durante la reducción anterior, mantener `p*` pobre pudo ser legítimo porque la
investigación buscaba evitar incorporar estructura humana innecesaria al
dispositivo.

La nueva pérdida aparece únicamente porque ahora se reclama una conclusión más
fuerte:

```text
PartPossible_h(σ*) = true
```

con anclaje fenomenológico independiente.

Por tanto, no debe reinterpretarse retrospectivamente la antigua
subespecificación como un error metodológico.

Debe registrarse como:

```text
especificación suficiente
para la reducción técnica anterior

pero

especificación insuficiente
para la nueva obligación epistemológica.
```

---

#### 69.9. Resultado principal

Se obtiene:

```text
RS-QPP-06
```

> La especificación actualmente disponible de `p*` como “acción corporal
> mínima” no posee suficiente contenido independiente para derivar
> `Req_H(p*)` y `Req_σ(p*)` sin introducir información adicional.

Más precisamente:

```text
p*
→ identifica una participación humana pretendida

p*
→ preserva la separación respecto de CompletesStruct

p*
↛ especifica capacidad humana concreta requerida

p*
↛ especifica condición concreta requerida de σ*

p*
↛ permite todavía construir
   una prueba independiente de compatibilidad.
```

---

#### 69.10. Localización de la pérdida

La pérdida de `Q-PP` queda ahora localizada con mayor precisión.

Ya no reside primariamente en:

```text
PartPossible_h
```

ni en:

```text
J_H
```

ni en:

```text
J_σ.
```

Reside antes de ellos:

```text
p*
↓
subespecificada
↓
no pueden derivarse Req_H / Req_σ
↓
no puede constituirse comparación independiente
↓
PartPossible_h(σ*) = true
permanece sin fundamento.
```

---

#### 69.11. Consecuencia metodológica

La investigación ha agotado la posibilidad de obtener el fundamento requerido
utilizando únicamente el contenido previamente disponible de:

```text
p*
F
σ*
PartPossible_h
```

sin añadir nada nuevo.

Por tanto queda satisfecha la condición metodológica que impedía introducir
estructura adicional mientras pudiera reducirse la pérdida a fundamentos ya
existentes.

Esto no autoriza todavía una implementación.

Autoriza únicamente pasar al siguiente nivel de investigación:

```text
¿qué contenido adicional mínimo
debe fijarse sobre p*
para hacer posible
una justificación independiente
de PartPossible_h?
```

---

#### 69.12. Nueva obligación

Puede formularse provisionalmente:

```text
OP-QPP-03
```

> Antes de intentar justificar `PartPossible_h(σ*) = true`, deberá fijarse una
> especificación de `p*` suficientemente informativa para derivar, sin
> consultar `σ*`, `CompletesStruct`, `Disp_W` ni los resultados
> experimentales:
>
> 1. los requisitos humanos mínimos de su participación;
> 2. los requisitos situacionales mínimos necesarios para que dicha
>    participación pueda iniciarse;
>
> sin incorporar entre esos requisitos la completabilidad de `p*`.

---

#### Restricciones de `OP-QPP-03`

La especificación adicional de `p*` deberá cumplir:

```text
independencia temporal
→ fijada antes de evaluar σ*
```

```text
independencia probatoria
→ no derivada de Disp_W
```

```text
independencia estructural
→ no derivada de CompletesStruct
```

```text
no trivialización
→ no definir p* como
  “aquello que puede hacerse en σ*”
```

```text
no sobreextensión
→ incluir sólo requisitos de participación,
  no de completabilidad
```

```text
auditabilidad
→ permitir derivar explícitamente
  Req_H(p*) y Req_σ(p*).
```

---

#### 69.13. ¿Implica `OP-QPP-03` recuperar una acción humana compleja?

No.

La obligación sólo exige suficiente discriminación para saber qué se necesita
para iniciar la participación.

La futura `p*` puede seguir siendo extremadamente pobre.

Por ejemplo, la forma lógica buscada podría ser tan pequeña como:

```text
p*
=
una transformación corporal
con una condición de entrada identificable
y una acción mínima identificable
```

pero esta formulación es únicamente ilustrativa.

No constituye todavía una elección de `p*`.

La investigación deberá derivar la forma mínima antes de seleccionar una
realización concreta.

---

#### 69.14. Reducción de `Q-PP-05`

`Q-PP-05` queda resuelta:

```text
p* actualmente disponible
→ insuficientemente especificada.
```

La nueva pregunta es:

```text
Q-PP-06
```

> ¿Cuál es el contenido mínimo que debe incorporarse a la especificación de
> `p*` para que puedan derivarse independientemente `Req_H(p*)` y
> `Req_σ(p*)`, sin reintroducir completabilidad, disponibilidad ni una
> realización técnica concreta?

---

#### Estado

```text
Q-PP-05
→ resuelta

p*
→ auditada

especificación actual
→ suficiente para la reducción técnica anterior
→ insuficiente para OP-QPP-02

Req_H(p*)
→ no derivable todavía

Req_σ(p*)
→ no derivable todavía

RS-QPP-06
→ establecido

OP-QPP-03
→ derivada

recuperación de q_h / Reach
→ no justificada

modificación de EX-PV001-02
→ no justificada

nueva especificación mínima de p*
→ investigación autorizada

Q-PP-06
→ abierta.
```

---

#### Punto de continuación

La siguiente actuación será derivar, todavía en el nivel de investigación y sin
seleccionar una acción concreta, la forma mínima que debe poseer la
especificación de `p*`.

La derivación deberá intentar eliminar sucesivamente cualquier componente que
no sea necesario para obtener:

```text
Req_H(p*)
```

y:

```text
Req_σ(p*)
```

hasta alcanzar la especificación más pobre que permita distinguir:

```text
participación humanamente realizable
```

de:

```text
participación únicamente nombrada.
```

---

### 70. Derivación de la especificación mínima de `p*`

#### Punto de partida

`RS-QPP-06` ha establecido que la caracterización actualmente disponible:

```text
p*
=
“acción corporal mínima”
```

es suficiente para identificar el tipo general de participación considerada,
pero no para derivar independientemente:

```text
Req_H(p*)
```

y:

```text
Req_σ(p*).
```

`OP-QPP-03` exige, por tanto, una especificación de `p*` suficientemente
informativa para derivar:

```text
requisitos humanos mínimos
+
requisitos situacionales mínimos
```

sin consultar:

```text
σ*
CompletesStruct
Disp_W
```

ni los resultados de `EX-PV001-02`.

La investigación debe determinar ahora cuál es la forma más pobre de esa
especificación.

---

#### 70.1. Primera exigencia — identidad de la participación

Una especificación de `p*` debe permitir distinguir:

```text
qué participación se considera
```

de:

```text
cualquier otra participación posible.
```

Si la especificación sólo afirma:

```text
existe alguna acción corporal
```

no puede determinarse qué capacidades humanas ni qué condiciones situacionales
son pertinentes.

Por tanto debe sobrevivir al menos:

```text
Act(p*)
```

entendido provisionalmente como:

```text
la operación corporal mínima
que constituye la participación considerada.
```

`Act(p*)` no describe todavía una ejecución efectiva.

Tampoco afirma que dicha operación sea realizable.

Sólo individualiza qué acción se está considerando.

---

#### Prueba de eliminación de `Act(p*)`

Si se elimina:

```text
Act(p*)
```

queda:

```text
p*
=
alguna participación humana.
```

A partir de esta formulación no pueden derivarse requisitos determinados.

Por tanto:

```text
Act(p*)
→ necesario para especificar p*.
```

---

#### 70.2. ¿Es suficiente identificar la operación?

Supóngase ahora:

```text
p*
=
Act(p*).
```

La mera identidad de la operación permite saber qué acción se considera, pero
no necesariamente bajo qué condiciones puede iniciarse.

Dos realizaciones pueden contener la misma acción nominal:

```text
Act(p*)
```

y diferir respecto de si una persona puede entrar efectivamente en esa
participación.

Por tanto:

```text
Act(p*)
↛
Possible_h(p*,σ*).
```

Debe sobrevivir alguna información adicional relativa a las condiciones de
inicio de la participación.

---

#### 70.3. Segunda exigencia — condiciones de iniciación

Se introduce provisionalmente:

```text
InitReq(p*)
```

como:

```text
conjunto mínimo de condiciones
que deben satisfacerse para que
la participación correspondiente a p*
pueda iniciarse.
```

La palabra:

```text
iniciarse
```

es esencial.

`InitReq(p*)` no debe incluir condiciones para:

```text
completar p*
```

ni para:

```text
alcanzar F.
```

Su alcance termina en la posibilidad de entrada efectiva en la participación.

---

#### Prueba de eliminación de `InitReq(p*)`

Si se conserva únicamente:

```text
Act(p*)
```

sin condiciones de iniciación, no puede distinguirse entre:

```text
σ₁
→ permite entrar en la participación
```

y:

```text
σ₂
→ contiene nominalmente la misma acción
  pero no permite iniciarla.
```

La pérdida reaparece.

Por tanto:

```text
InitReq(p*)
→ necesario.
```

---

#### 70.4. ¿Debe `InitReq(p*)` contener ya la división humano/situacional?

Podría definirse directamente:

```text
InitReq(p*)
=
Req_H(p*)
∪
Req_σ(p*).
```

Pero debe comprobarse si esa división forma parte de la especificación de
`p*` o si puede derivarse posteriormente.

Los requisitos de iniciación pueden clasificarse según aquello cuya
satisfacción reclaman:

```text
requisito que debe satisfacer
la capacidad humana pertinente
```

o:

```text
requisito que debe satisfacer
la situación/realización.
```

Por tanto, no es necesario introducir dos especificaciones primitivas
independientes.

Puede conservarse una única:

```text
InitReq(p*)
```

si cada requisito permite determinar qué lado debe satisfacerlo.

La separación:

```text
Req_H(p*)
Req_σ(p*)
```

puede derivarse de esa clasificación.

---

#### Resultado de la reducción

Se obtiene:

```text
Req_H(p*)
=
{ r ∈ InitReq(p*) |
  r debe satisfacerse por capacidades humanas }
```

y:

```text
Req_σ(p*)
=
{ r ∈ InitReq(p*) |
  r debe satisfacerse por condiciones de σ* }.
```

Esta formulación no presupone todavía una representación concreta de los
requisitos.

Sólo establece que deben ser clasificables por su lugar de satisfacción.

---

#### 70.5. Tercera exigencia candidata — resultado de la acción

Podría pensarse que `p*` necesita especificar además:

```text
Result(p*)
```

o:

```text
estado alcanzado al ejecutar p*.
```

Se intenta eliminar esta exigencia.

Para justificar:

```text
PartPossible_h(σ*) = true
```

sólo necesitamos saber si la persona puede entrar en la participación.

No necesitamos todavía demostrar:

```text
qué resultado produce
```

ni:

```text
si dicho resultado completa p*.
```

Esas propiedades pertenecen a la capa posterior de:

```text
CompletesStruct.
```

Por tanto:

```text
Result(p*)
```

no es necesario para la especificación mínima requerida por `Q-PP`.

Se elimina.

---

#### 70.6. Cuarta exigencia candidata — objetivo de la acción

Podría añadirse:

```text
Goal(p*)
```

como finalidad de la participación.

Sin embargo, para justificar únicamente:

```text
Possible_h(p*,σ*)
```

no es necesario establecer que la persona pueda alcanzar una finalidad
posterior.

Basta con que pueda iniciar la operación corporal identificada bajo sus
condiciones pertinentes.

Si el objetivo se utiliza para determinar si la acción puede completarse, la
especificación volvería a invadir:

```text
CompletesStruct.
```

Por tanto:

```text
Goal(p*)
```

no sobrevive como parte necesaria de la especificación mínima.

---

#### 70.7. Quinta exigencia candidata — trayectoria

También podría introducirse:

```text
Path(p*)
```

o una secuencia de pasos internos.

Esta estructura sólo sería necesaria si la propia participación mínima exigiera
más de una transición relevante para poder iniciarse.

No se ha demostrado dicha necesidad.

Además, una trayectoria podría reintroducir indirectamente estructuras ya
eliminadas como:

```text
Reach
Ways(σ*)
w*.
```

Por tanto:

```text
Path(p*)
```

queda eliminada como exigencia general.

La acción mínima podrá ser realizada técnicamente de formas más complejas si una
implementación concreta lo necesita, pero esa complejidad no pertenece todavía
a la especificación mínima derivada.

---

#### 70.8. Sexta exigencia candidata — agente concreto

Podría especificarse:

```text
Actor(p*) = h
```

para una persona determinada.

Tampoco es necesario.

La obligación consiste en justificar:

```text
una capacidad humana pertinente
puede ejercerse en σ*
```

no:

```text
una persona individual previamente identificada
puede ejercerla.
```

La especificación de `p*` debe permitir derivar qué capacidad se requiere.

No necesita seleccionar todavía quién la posee.

Por tanto:

```text
Actor(p*)
```

queda eliminado de la especificación mínima.

---

#### 70.9. Séptima exigencia candidata — interfaz concreta

Podría incluirse:

```text
Interface(p*)
```

como parte de la acción.

Pero una interfaz concreta pertenece a una realización posible de las
condiciones situacionales.

La especificación mínima debe indicar:

```text
qué condición necesita la participación
```

sin decidir todavía:

```text
qué dispositivo
qué botón
qué pantalla
qué objeto
qué mecanismo
```

la satisface.

Por tanto:

```text
Interface(p*)
```

no sobrevive como elemento necesario.

Su eventual necesidad deberá derivarse posteriormente de:

```text
Req_σ(p*).
```

---

#### 70.10. Forma mínima superviviente

Después de las eliminaciones, la especificación mínima candidata queda:

```text
Spec(p*)
=
<
  Act(p*),
  InitReq(p*)
>
```

donde:

```text
Act(p*)
```

individualiza la operación corporal mínima considerada;

y:

```text
InitReq(p*)
```

individualiza las condiciones mínimas necesarias para entrar en esa
participación.

De:

```text
InitReq(p*)
```

deberán poder derivarse:

```text
Req_H(p*)
```

y:

```text
Req_σ(p*).
```

No forma parte de `Spec(p*)`:

```text
resultado
objetivo final
terminalidad
trayectoria completa
participante concreto
interfaz concreta
completabilidad
disponibilidad
```

---

#### 70.11. Prueba de suficiencia estructural

Si disponemos de:

```text
Spec(p*)
=
<Act, InitReq>
```

puede preguntarse independientemente:

```text
¿qué capacidades humanas
satisfacen los requisitos de iniciación?
```

obteniendo:

```text
Req_H(p*)
```

y:

```text
¿qué condiciones debe ofrecer σ*
para satisfacer los requisitos restantes?
```

obteniendo:

```text
Req_σ(p*).
```

Posteriormente:

```text
J_H
⊨
Req_H(p*)
```

y:

```text
J_σ
⊨
Req_σ(p*)
```

permitirían evaluar:

```text
Possible_h(p*,σ*).
```

Por tanto, la forma posee en principio el contenido necesario para continuar la
cadena justificativa.

---

#### 70.12. Prueba de no sobreextensión

La especificación:

```text
Spec(p*)
=
<Act, InitReq>
```

no permite concluir por sí sola:

```text
PartPossible_h(σ*) = true.
```

Todavía deben satisfacerse:

```text
J_H
```

y:

```text
J_σ.
```

Tampoco permite concluir:

```text
CompletesStruct = true
```

porque no contiene condiciones de finalización.

Ni permite concluir:

```text
Disp_W = true
```

porque no contiene ninguna referencia a disponibilidad.

Por tanto, la especificación no incorpora anticipadamente los resultados que
posteriormente deberán probarse.

---

#### 70.13. Caso de control de trivialización

Considérese una especificación inválida:

```text
Spec_bad(p*)
=
<
  Act,
  “condiciones bajo las que p*
   puede ser realizada por una persona”
>
```

Esta forma no sirve porque:

```text
InitReq
```

contendría simplemente una reformulación de:

```text
Possible_h(p*,σ*).
```

La especificación válida debe poder enumerar o caracterizar condiciones
independientes cuya satisfacción pueda comprobarse sin usar como criterio la
propia posibilidad humana que se intenta demostrar.

Por tanto:

```text
InitReq(p*)
```

debe ser intensionalmente independiente de:

```text
Possible_h(p*,σ*).
```

---

#### 70.14. Caso de control de completabilidad

Considérese otra especificación inválida:

```text
Spec_bad2(p*)
=
<
  Act,
  condiciones para iniciar p*,
  condiciones para alcanzar F
>
```

Esta forma invade:

```text
CompletesStruct.
```

Si las condiciones de terminalidad formasen parte de `p*`, podría ocurrir:

```text
PartPossible_h = true
⇔
CompletesStruct = true
```

eliminando el contraste que la estructura reducida exige conservar.

Por tanto, la frontera de `Spec(p*)` debe detenerse antes de cualquier condición
terminal.

---

#### 70.15. Criterio de independencia temporal

La especificación deberá quedar fijada:

```text
antes de examinar σ*
```

y, con mayor razón, antes de conocer:

```text
CompletesStruct
Disp_W
a0/a1/aControl.
```

La secuencia válida será:

```text
Spec(p*)
↓
Req_H(p*)
Req_σ(p*)
↓
J_H
J_σ
↓
Possible_h(p*,σ*)
↓
PartPossible_h.
```

No:

```text
σ*
↓
propiedades disponibles
↓
construcción retrospectiva de Spec(p*)
↓
compatibilidad garantizada.
```

---

#### 70.16. Resultado principal

Se obtiene:

```text
RS-QPP-07
```

> La especificación mínima de `p*` necesaria para continuar la justificación de
> `PartPossible_h` debe individualizar:
>
> 1. la operación corporal mínima considerada;
> 2. las condiciones mínimas necesarias para iniciar dicha participación.
>
> No necesita especificar resultado, finalidad terminal, trayectoria completa,
> participante concreto, interfaz concreta ni completabilidad.

Formalmente:

```text
Spec(p*)
=
<
  Act(p*),
  InitReq(p*)
>
```

con:

```text
InitReq(p*)
↓
Req_H(p*)
+
Req_σ(p*).
```

---

#### 70.17. Nueva obligación

Se deriva:

```text
OP-QPP-04
```

> Toda especificación candidata de `p*` deberá permitir derivar
> independientemente sus requisitos humanos y situacionales mínimos de
> iniciación, sin utilizar `σ*`, `CompletesStruct`, `Disp_W` ni los resultados
> experimentales para seleccionar retrospectivamente dichos requisitos.

Además:

```text
OP-QPP-04a
```

> Ningún requisito de `p*` podrá contener como condición la finalización,
> terminalidad o completabilidad de la participación.

Y:

```text
OP-QPP-04b
```

> La especificación de `p*` deberá contener suficiente discriminación para que
> dos acciones corporales con requisitos diferentes puedan distinguirse antes
> de evaluar su realizabilidad en una `σ*` concreta.

---

#### 70.18. ¿Debe elegirse ya una acción concreta?

No.

Se ha derivado:

```text
qué debe contener la especificación
```

pero no:

```text
qué acción debe utilizarse.
```

Elegir ahora una acción concreta sin un procedimiento independiente podría
introducir selección retrospectiva.

Antes debe determinarse cómo fijar una candidata a `p*` sin consultar:

```text
σ*
CompletesStruct
Disp_W
```

y sin seleccionar precisamente una acción cuyos requisitos sepamos de antemano
que el dispositivo satisface.

---

#### Reducción de `Q-PP-06`

`Q-PP-06` preguntaba:

> ¿Cuál es el contenido mínimo que debe incorporarse a la especificación de
> `p*` para derivar independientemente `Req_H(p*)` y `Req_σ(p*)`?

Se responde:

```text
Spec(p*)
=
<
  Act(p*),
  InitReq(p*)
>
```

Por tanto:

```text
Q-PP-06
→ resuelta.
```

La nueva pregunta es:

```text
Q-PP-07
```

> ¿Mediante qué procedimiento puede fijarse una realización concreta de
> `Spec(p*) = <Act, InitReq>` antes e independientemente de `σ*`,
> `CompletesStruct`, `Disp_W` y los resultados del experimento, de modo que la
> acción elegida no sea seleccionada retrospectivamente por ser compatible con
> `EX-PV001-02`?

---

#### Estado

```text
Q-PP-06
→ resuelta

Spec(p*)
→ derivada

Act(p*)
→ necesario

InitReq(p*)
→ necesario

Req_H(p*)
→ derivable de InitReq

Req_σ(p*)
→ derivable de InitReq

resultado de p*
→ eliminado

objetivo terminal
→ eliminado

trayectoria completa
→ eliminada

participante concreto
→ eliminado

interfaz concreta
→ eliminada

completabilidad
→ excluida

RS-QPP-07
→ establecido

OP-QPP-04
→ derivada

OP-QPP-04a
→ derivada

OP-QPP-04b
→ derivada

PartPossible_h(σ*) = true
→ todavía no demostrado

Q-PP-07
→ abierta.
```

---

#### Punto de continuación

La siguiente actuación será derivar el procedimiento de fijación independiente
de una realización concreta de:

```text
Spec(p*)
=
<
  Act(p*),
  InitReq(p*)
>
```

antes de compararla con `σ*`.

El procedimiento deberá impedir que la acción, sus requisitos humanos o sus requisitos situacionales puedan alterarse después de conocer su compatibilidad con la realización.

Sólo después de congelar esa especificación podrá investigarse:

```text
J_H
⊨
Req_H(p*)
```

y:

```text
J_σ
⊨
Req_σ(p*).
```

---

### 71. Derivación del procedimiento de fijación independiente de `Spec(p*)`

#### Punto de partida

`RS-QPP-07` ha establecido:

```text
Spec(p*)
=
<
  Act(p*),
  InitReq(p*)
>
```

donde:

```text
Act(p*)
```

individualiza la operación corporal mínima considerada;

y:

```text
InitReq(p*)
```

individualiza las condiciones mínimas necesarias para iniciar dicha
participación.

De:

```text
InitReq(p*)
```

deben poder derivarse:

```text
Req_H(p*)
```

y:

```text
Req_σ(p*).
```

La cuestión abierta es:

```text
Q-PP-07
```

> ¿Mediante qué procedimiento puede fijarse una realización concreta de
> `Spec(p*) = <Act, InitReq>` antes e independientemente de `σ*`,
> `CompletesStruct`, `Disp_W` y los resultados del experimento, de modo que la
> acción elegida no sea seleccionada retrospectivamente por ser compatible con
> `EX-PV001-02`?

---

#### 71.1. Naturaleza del problema

La investigación no necesita todavía determinar:

```text
qué p* utilizar.
```

Necesita determinar primero:

```text
cómo puede elegirse legítimamente p*.
```

La diferencia es metodológicamente necesaria.

Si se seleccionara ahora una acción después de conocer:

```text
σ*
experimentalGGamma
experimentalTerminalX
CompletesStruct
Disp_W
```

o los resultados obtenidos mediante:

```text
a0
a1
aControl
```

podría escogerse precisamente una acción cuyos requisitos fueran satisfechos
por la realización ya construida.

En ese caso:

```text
PartPossible_h(σ*) = true
```

no constituiría una consecuencia independiente.

La selección de `p*` habría sido adaptada retrospectivamente al resultado que
se pretende justificar.

---

#### 71.2. Primera exigencia — anterioridad de la fijación

La primera condición necesaria es:

```text
Spec(p*)
```

debe quedar fijada antes de evaluar su compatibilidad con `σ*`.

Se deriva:

```text
PF-PP-01
```

> La realización concreta de `Spec(p*)` deberá quedar fijada antes de cualquier
> evaluación de `Req_σ(p*)` contra las condiciones de `σ*`.

La secuencia válida será:

```text
selección de p*
↓
fijación de Act(p*)
↓
fijación de InitReq(p*)
↓
derivación de Req_H(p*) / Req_σ(p*)
↓
congelación
↓
evaluación posterior contra J_H / J_σ.
```

No será válida:

```text
observación de σ*
↓
identificación de sus posibilidades
↓
selección de p*
↓
construcción de requisitos compatibles.
```

---

#### 71.3. Segunda exigencia — independencia respecto del resultado

La anterioridad temporal no basta.

Podría elegirse formalmente `p*` antes de ejecutar nuevamente el experimento
pero utilizando conocimiento ya adquirido sobre:

```text
CompletesStruct
Disp_W
```

o sobre las ejecuciones previas de:

```text
a0
a1
aControl.
```

Por tanto debe exigirse además independencia probatoria.

Se deriva:

```text
PF-PP-02
```

> La selección de `p*`, `Act(p*)` e `InitReq(p*)` no podrá justificarse mediante
> ninguna propiedad conocida de `CompletesStruct`, `Disp_W`, `CR-Term`, `x`,
> `xᵗ` ni mediante los resultados obtenidos por `a0`, `a1` o `aControl`.

La condición relevante no es sólo:

```text
se escribió antes
```

sino:

```text
su contenido no procede
del resultado que posteriormente debe auditarse.
```

---

#### 71.4. Tercera exigencia — independencia respecto de `σ*`

Debe examinarse una condición más fuerte.

Aunque no se utilizara:

```text
Disp_W
```

podría seleccionarse `p*` observando directamente qué operaciones permite
`σ*`.

Por ejemplo:

```text
σ* permite técnicamente la operación z
↓
se selecciona Act(p*) = z
↓
se derivan requisitos que σ* ya satisface.
```

La circularidad permanecería.

Por tanto:

```text
PF-PP-03
```

> La realización concreta de `Spec(p*)` deberá fijarse sin utilizar las
> propiedades particulares de `σ*` como criterio de selección.

Esto no significa que `σ*` no pueda ser conocida en absoluto.

Significa que:

```text
las propiedades de σ*
no pueden justificar
por qué se eligió precisamente esa p*.
```

---

#### 71.5. Cuarta exigencia — fijación conjunta de acción y requisitos

Podría intentarse:

```text
fijar Act(p*)
```

y dejar:

```text
InitReq(p*)
```

para después de observar `σ*`.

Esta estrategia tampoco es válida.

Una misma acción descrita de forma insuficientemente precisa podría recibir
distintos conjuntos de requisitos según aquello que convenga posteriormente.

Por tanto:

```text
PF-PP-04
```

> `Act(p*)` e `InitReq(p*)` deberán quedar fijados conjuntamente antes de
> evaluar la realización.

No será admisible:

```text
Act(p*) congelada
+
InitReq(p*) adaptable.
```

La unidad que debe congelarse es:

```text
Spec(p*)
=
<
  Act(p*),
  InitReq(p*)
>.
```

---

#### 71.6. Quinta exigencia — derivación previa de `Req_H` y `Req_σ`

La congelación de:

```text
InitReq(p*)
```

todavía podría dejar abierta su clasificación posterior.

Si un mismo requisito pudiera clasificarse después como:

```text
humano
```

o:

```text
situacional
```

según el resultado obtenido, permanecería una vía de reparación retrospectiva.

Por tanto se deriva:

```text
PF-PP-05
```

> Antes de evaluar `J_H` o `J_σ` deberán quedar derivados y fijados
> `Req_H(p*)` y `Req_σ(p*)`.

La secuencia completa pasa a ser:

```text
Spec(p*)
↓
Req_H(p*)
Req_σ(p*)
↓
CONGELACIÓN
↓
evaluación.
```

---

#### 71.7. Sexta exigencia — prohibición de reparación posterior

La experiencia de `FIX-XGT-01` proporciona una disciplina metodológica
relevante:

```text
fijar
↓
registrar
↓
evaluar
↓
no reparar.
```

La misma estructura debe aplicarse aquí.

Se deriva:

```text
PF-PP-06
```

> Una vez congelados `Spec(p*)`, `Req_H(p*)` y `Req_σ(p*)`, ninguno de ellos
> podrá modificarse después de conocer el resultado de su evaluación contra
> `J_H` y `J_σ`.

Si la evaluación produce:

```text
Possible_h(p*,σ*) = false
```

o:

```text
no demostrable
```

ese resultado deberá conservarse.

No podrá:

- cambiarse la acción;
- debilitarse un requisito;
- reclasificarse un requisito;
- eliminarse un requisito desfavorable;
- añadirse una propiedad favorable de `σ*`;
- ni sustituirse `p*` por otra candidata.

---

#### 71.8. Consecuencia de un resultado desfavorable

La prohibición anterior exige distinguir:

```text
candidato desfavorable
```

de:

```text
procedimiento inválido.
```

Si la fijación independiente es correcta y posteriormente resulta:

```text
J_H
⊭
Req_H(p*)
```

o:

```text
J_σ
⊭
Req_σ(p*)
```

no se sigue que el procedimiento haya fallado.

Se sigue:

```text
la p* fijada
no permite justificar
PartPossible_h(σ*) = true.
```

Ese resultado sería probatoriamente informativo.

Por tanto:

```text
resultado desfavorable
≠
autorización para seleccionar otra p*
dentro de la misma prueba.
```

---

#### 71.9. ¿Puede existir un conjunto previo de candidatas?

Debe auditarse ahora si el procedimiento exige una única candidata concebida
desde el principio.

No necesariamente.

Podría existir previamente un conjunto:

```text
P_Cand
=
{
  p₁,
  p₂,
  ...
}
```

si dicho conjunto se constituye independientemente de `σ*`.

Sin embargo, seleccionar después:

```text
p_i
```

porque resulta compatible con `σ*` reintroduciría la selección retrospectiva.

Por tanto, si existen varias candidatas, deberá fijarse también antes de la
evaluación:

```text
Sel_P
```

como regla independiente de selección.

Se deriva:

```text
PF-PP-07
```

> Si existe más de una candidata admisible a `p*`, deberá fijarse antes de la
> evaluación una regla independiente que determine cuál de ellas constituye la
> candidata experimental.

---

#### 71.10. Auditoría de una selección aleatoria

Una posibilidad sería:

```text
Sel_P
=
selección aleatoria
entre candidatas previamente fijadas.
```

La aleatoriedad impediría seleccionar deliberadamente la candidata favorable.

Sin embargo, no es necesaria.

También serían posibles, en principio:

```text
primera candidata según orden previamente fijado
```

o:

```text
candidata determinada por un criterio
independiente de σ*.
```

Por tanto:

```text
aleatoriedad
→ posible mecanismo

aleatoriedad
→ no necesaria.
```

Lo necesario es:

```text
independencia del criterio de selección.
```

---

#### 71.11. Auditoría de una elección arbitraria explícita

Podría simplemente fijarse:

```text
p* := p₁
```

antes de la evaluación.

¿Es suficiente?

Sí, siempre que:

```text
p₁
```

haya sido especificada independientemente y la elección no proceda de conocer
su compatibilidad con `σ*`.

La arbitrariedad previa no constituye por sí misma circularidad.

Lo metodológicamente prohibido es:

```text
selección guiada por el resultado.
```

Por tanto:

```text
elección previa explícita
→ admisible en principio.
```

---

#### 71.12. ¿Debe ocultarse `σ*` durante la fijación?

Podría imponerse un procedimiento ciego:

```text
quien fija p*
no conoce σ*.
```

Esto proporcionaría una garantía fuerte de independencia.

Pero debe comprobarse si es necesario.

La independencia puede quedar auditada documentalmente mediante:

```text
criterio previo
+
registro previo
+
congelación
+
prohibición de reparación.
```

Por tanto:

```text
cegamiento
→ garantía posible

cegamiento
→ no exigencia lógica necesaria.
```

No debe incorporarse al procedimiento mínimo salvo que posteriormente se
demuestre necesario.

---

#### 71.13. Forma mínima del procedimiento

Después de las reducciones, sobrevive:

```text
FIX-PSTAR-01
```

con la siguiente estructura:

```text
1. constituir una candidata p*
   independientemente de σ*;

2. fijar Act(p*);

3. fijar InitReq(p*);

4. derivar Req_H(p*);

5. derivar Req_σ(p*);

6. registrar conjuntamente:

   Spec(p*)
   Req_H(p*)
   Req_σ(p*);

7. congelar esos resultados;

8. sólo entonces evaluar:

   J_H ⊨ Req_H(p*)

   J_σ ⊨ Req_σ(p*);

9. registrar el resultado obtenido;

10. prohibir cualquier modificación
    de p*, Act, InitReq, Req_H o Req_σ
    motivada por ese resultado.
```

---

#### 71.14. Regla de no reparación

La regla puede formularse expresamente:

```text
NR-PSTAR-01
```

> Una vez ejecutada la fijación de `FIX-PSTAR-01`, ningún resultado posterior
> podrá utilizarse para modificar la candidata `p*`, su operación, sus
> requisitos de iniciación ni la clasificación de dichos requisitos dentro de
> la misma evaluación.

Si el resultado es desfavorable:

```text
se conserva.
```

Si aparece una razón teórica independiente para construir posteriormente otra
`p*`, deberá constituir:

```text
una nueva investigación
o
una nueva realización experimental,
```

no una reparación de la actual.

---

#### 71.15. Registro mínimo necesario

Para que `FIX-PSTAR-01` sea auditable deberán registrarse antes de la evaluación:

```text
C_P
```

como candidata concreta seleccionada;

```text
C_Act
```

como realización concreta de `Act(p*)`;

```text
C_Init
```

como conjunto fijado de requisitos de iniciación;

```text
C_RH
```

como requisitos clasificados del lado humano;

```text
C_Rσ
```

como requisitos clasificados del lado situacional;

y:

```text
C_Sel
```

como criterio mediante el cual fue elegida la candidata si existía más de una
posibilidad.

Estos nombres representan posiciones documentales del procedimiento.

No constituyen todavía elementos de la realización técnica.

---

#### 71.16. Orden de fijación y evaluación

El orden obligatorio queda:

```text
FASE I — CONSTITUCIÓN

C_P
↓
C_Act
↓
C_Init
↓
C_RH + C_Rσ
```

```text
FASE II — REGISTRO Y CONGELACIÓN

registrar
↓
congelar
↓
NR-PSTAR-01 activa
```

```text
FASE III — EVALUACIÓN HUMANA

J_H
⊨?
C_RH
```

```text
FASE IV — EVALUACIÓN SITUACIONAL

J_σ
⊨?
C_Rσ
```

```text
FASE V — DERIVACIÓN

si ambas satisfacciones están justificadas:

Possible_h(p*,σ*) = true
↓
PartPossible_h(σ*) = true
```

No se permite invertir ninguna dependencia justificativa.

---

#### 71.17. Independencia respecto de `CompletesStruct`

Incluso después de fijar:

```text
PartPossible_h(σ*) = true
```

la evaluación de:

```text
CompletesStruct
```

debe permanecer separada.

La cadena continúa siendo:

```text
FIX-PSTAR-01
↓
PartPossible_h
```

y separadamente:

```text
continuación estructural
↓
CR-Term
↓
CompletesStruct.
```

Sólo después:

```text
PartPossible_h
∧
CompletesStruct
↓
Disp_W.
```

Por tanto `FIX-PSTAR-01` no puede contener ningún criterio relativo a:

```text
xᵗ
CR-Term
terminalidad
resultado estructural.
```

---

#### 71.18. Relación con `FIX-XGT-01`

Los dos procedimientos poseen una estructura metodológica común:

```text
fijación independiente
↓
registro
↓
congelación
↓
evaluación
↓
prohibición de reparación.
```

Pero sus objetos son distintos.

`FIX-XGT-01` fija independientemente las decisiones necesarias para evaluar la
rama estructural correspondiente a:

```text
CompletesStruct.
```

`FIX-PSTAR-01` deberá fijar independientemente las decisiones necesarias para
justificar:

```text
PartPossible_h.
```

No deben fusionarse.

La independencia entre ambas fijaciones preserva precisamente la separación:

```text
PartPossible_h
≠
CompletesStruct.
```

---

#### 71.19. Resultado principal

Se obtiene:

```text
RS-QPP-08
```

> Una realización concreta de `Spec(p*)` puede fijarse sin selección
> retrospectiva mediante un procedimiento que determine y registre
> independientemente `Act(p*)`, `InitReq(p*)`, `Req_H(p*)` y `Req_σ(p*)`,
> congele esas decisiones antes de compararlas con `J_H` y `J_σ` y prohíba
> cualquier reparación posterior motivada por el resultado.

La estructura mínima es:

```text
FIX-PSTAR-01
↓
Spec(p*) congelada
+
Req_H(p*) congelado
+
Req_σ(p*) congelado
↓
evaluación independiente
↓
resultado conservado.
```

---

#### 71.20. Nueva obligación procedimental

Se deriva:

```text
OP-QPP-05
```

> Antes de evaluar `PartPossible_h(σ*)`, deberá ejecutarse
> `FIX-PSTAR-01`, dejando registrada y congelada una especificación concreta de
> `p*` y sus requisitos humanos y situacionales antes de cualquier comparación
> con `J_H` y `J_σ`.

Se deriva además:

```text
OP-QPP-05a
```

> El resultado de la evaluación no podrá utilizarse para modificar ninguna
> decisión fijada por `FIX-PSTAR-01`.

Y:

```text
OP-QPP-05b
```

> Si la candidata fijada resulta desfavorable, el resultado deberá conservarse
> como resultado de la investigación; una nueva candidata requerirá una nueva
> actuación explícitamente diferenciada y no podrá presentarse como reparación
> de la anterior.

---

#### 71.21. Qué no ha quedado todavía decidido

`FIX-PSTAR-01` no determina aún:

```text
C_P
C_Act
C_Init
C_RH
C_Rσ.
```

Tampoco determina todavía:

```text
J_H
```

ni:

```text
J_σ.
```

Por tanto:

```text
PartPossible_h(σ*) = true
```

continúa sin estar demostrado.

Lo que ahora queda establecido es el procedimiento mediante el cual esa
demostración podrá intentarse sin circularidad retrospectiva.

---

#### Reducción de `Q-PP-07`

`Q-PP-07` preguntaba cómo fijar una realización concreta de `Spec(p*)` de forma
independiente.

La respuesta es:

```text
FIX-PSTAR-01.
```

Por tanto:

```text
Q-PP-07
→ resuelta.
```

La siguiente pregunta pasa a ser:

```text
Q-PP-08
```

> ¿Qué candidata concreta debe fijar `FIX-PSTAR-01` como `p*`, y cuáles son
> exactamente `Act(p*)`, `InitReq(p*)`, `Req_H(p*)` y `Req_σ(p*)`, si la
> selección debe realizarse sin utilizar ninguna propiedad de `σ*`,
> `CompletesStruct`, `Disp_W` o los resultados ya conocidos de
> `EX-PV001-02`?

---

#### Estado

```text
Q-PP-07
→ resuelta

FIX-PSTAR-01
→ derivado

NR-PSTAR-01
→ derivada

anterioridad de la fijación
→ necesaria

independencia respecto del resultado
→ necesaria

independencia respecto de σ*
→ necesaria

fijación conjunta de Act e InitReq
→ necesaria

clasificación previa Req_H / Req_σ
→ necesaria

regla de selección independiente
→ necesaria si existen varias candidatas

selección aleatoria
→ no necesaria

cegamiento
→ no necesario

prohibición de reparación
→ necesaria

resultado desfavorable
→ debe conservarse

RS-QPP-08
→ establecido

OP-QPP-05
→ derivada

OP-QPP-05a
→ derivada

OP-QPP-05b
→ derivada

PartPossible_h(σ*) = true
→ todavía no demostrado

Q-PP-08
→ abierta.
```

---

#### Punto de continuación

La siguiente actuación ya no consiste en seguir enriqueciendo abstractamente
`p*`.

Consiste en **ejecutar formalmente la fase de fijación de
`FIX-PSTAR-01`**.

Pero antes de observar nuevamente la realización deberá quedar registrado:

```text
C_P
C_Act
C_Init
C_RH
C_Rσ
```

y, si procede:

```text
C_Sel.
```

Sólo después de congelar esas decisiones podrá abrirse la evaluación de:

```text
J_H
⊨?
C_RH
```

y:

```text
J_σ
⊨?
C_Rσ.
```

El resultado deberá conservarse aunque sea desfavorable para
`EX-PV001-02`.

---

### 72. Fijación concreta de `C_P`, `C_Act`, `C_Init`, `C_RH` y `C_Rσ`

#### Propósito

`FIX-PSTAR-01` exige fijar antes de cualquier evaluación contra `σ*`:

```text
C_P
C_Act
C_Init
C_RH
C_Rσ
```

y conservar posteriormente esas decisiones aunque el resultado sea
desfavorable.

La fijación se realiza exclusivamente a partir de la estructura previamente
derivada:

```text
Spec(p*)
=
<
  Act(p*),
  InitReq(p*)
>
```

con las restricciones:

```text
p*
→ participación humana corporal mínima

InitReq
→ sólo condiciones de iniciación

Req_H
→ requisitos del lado humano

Req_σ
→ requisitos del lado situacional

CompletesStruct
→ excluida

Disp_W
→ excluida

resultado experimental
→ excluido

σ*
→ no utilizada para seleccionar la candidata.
```

---

#### 72.1. Regla de selección utilizada

No se ha derivado la necesidad de una clase concreta de acción corporal.

Por tanto, la candidata puede fijarse mediante una elección previa explícita,
siempre que:

```text
1. sea corporal;
2. sea mínima;
3. pueda individualizarse sin referencia a σ*;
4. no incorpore un objetivo terminal;
5. no presuponga una interfaz concreta;
6. no presuponga completabilidad;
7. y sus condiciones de iniciación puedan formularse independientemente.
```

Se adopta como regla de selección:

```text
C_Sel
```

> Elegir una acción corporal voluntaria elemental cuya iniciación pueda
> describirse sin referencia a un objeto externo determinado, una interfaz,
> una finalidad posterior, `σ*`, `CompletesStruct` o `Disp_W`.

Esta regla se fija antes de cualquier evaluación de compatibilidad con `σ*`.

---

#### 72.2. Fijación de `C_P`

Se fija:

```text
C_P
=
p* :=
“elevar voluntariamente una mano
desde una posición corporal de reposo”
```

La candidata se selecciona porque permite individualizar una participación
corporal mínima sin introducir:

```text
objeto externo
interfaz
destino
resultado terminal
trayectoria
F
CompletesStruct
Disp_W.
```

No se afirma que esta acción sea necesaria para toda realización de
`PartPossible_h`.

Constituye exclusivamente la candidata concreta de `FIX-PSTAR-01`.

---

#### 72.3. Fijación de `C_Act`

De `C_P` se deriva:

```text
C_Act
```

como:

```text
Act(p*)
=
iniciar voluntariamente
la elevación de una mano
desde su posición corporal de reposo.
```

La operación queda delimitada en su inicio.

No forma parte de `C_Act`:

```text
alcanzar una altura determinada
mantener la mano elevada
tocar un objeto
señalar
pulsar
agarrar
alcanzar F
ni producir ningún resultado posterior.
```

La acción queda, por tanto, detenida antes de toda condición de
completabilidad.

---

#### 72.4. Derivación de `C_Init`

Se pregunta ahora qué debe ser cierto únicamente para que:

```text
C_Act
```

pueda iniciarse.

La derivación debe evitar tanto requisitos puramente nominales como condiciones
de terminación.

Sobrevive el siguiente conjunto mínimo:

```text
C_Init
=
{
  I1,
  I2,
  I3
}
```

donde:

```text
I1
→ existe capacidad de producir
   voluntariamente el movimiento corporal
   correspondiente al inicio de C_Act;
```

```text
I2
→ la mano considerada puede encontrarse
   en una posición desde la que
   el movimiento pueda iniciarse;
```

```text
I3
→ las condiciones inmediatas de la realización
   no impiden físicamente
   el inicio del movimiento.
```

---

#### 72.5. Auditoría de `I1`

`I1` no afirma:

```text
la persona ejecuta p*
```

ni:

```text
la persona completa p*.
```

Afirma únicamente que existe la capacidad humana pertinente para iniciar el
movimiento voluntario especificado.

Por tanto:

```text
I1
→ requisito humano de iniciación.
```

No depende de:

```text
σ*
CompletesStruct
Disp_W.
```

---

#### 72.6. Auditoría de `I2`

`I2` podría interpretarse de dos formas:

```text
capacidad corporal humana
```

o:

```text
condición de la situación.
```

Para evitar ambigüedad se reduce su contenido.

La posibilidad anatómica o motora de adoptar una posición desde la que iniciar
el movimiento pertenece a la capacidad humana y queda absorbida por:

```text
I1.
```

Lo único que debe sobrevivir separadamente es que la situación no coloque la
mano en una condición externa que haga imposible iniciar el movimiento.

Por tanto `I2` no necesita conservarse como requisito independiente.

Se elimina:

```text
I2
→ absorbido por I1 / I3.
```

---

#### 72.7. Auditoría de `I3`

`I3` afirma únicamente:

```text
las condiciones inmediatas de σ*
no bloquean físicamente
el inicio de C_Act.
```

No exige:

```text
que la acción pueda completarse
```

ni:

```text
que produzca un resultado útil.
```

Permite distinguir, por ejemplo:

```text
mano libre para iniciar movimiento
```

de:

```text
mano físicamente inmovilizada
de forma que el movimiento
no pueda iniciarse.
```

Por tanto:

```text
I3
→ requisito situacional de iniciación.
```

---

#### 72.8. `C_Init` reducido

Después de eliminar `I2` como requisito independiente:

```text
C_Init
=
{
  I_H,
  I_σ
}
```

donde:

```text
I_H
=
la persona posee capacidad voluntaria suficiente
para iniciar la elevación de la mano considerada;
```

y:

```text
I_σ
=
las condiciones inmediatas de la realización
no impiden físicamente
el inicio de dicha elevación.
```

Esta pareja constituye el conjunto mínimo fijado de condiciones de iniciación
para la candidata seleccionada.

---

#### 72.9. Fijación de `C_RH`

De:

```text
C_Init
```

se clasifica del lado humano:

```text
C_RH
=
{
  RH-01
}
```

con:

```text
RH-01
```

> Existe capacidad motora voluntaria suficiente para iniciar la elevación de la
> mano considerada desde una posición corporal de reposo.

`RH-01` no exige:

```text
ejecución efectiva
resultado determinado
terminalidad
completabilidad.
```

Su objeto es exclusivamente la capacidad necesaria para iniciar `C_Act`.

---

#### 72.10. Fijación de `C_Rσ`

Del lado situacional se fija:

```text
C_Rσ
=
{
  Rσ-01
}
```

con:

```text
Rσ-01
```

> Las condiciones físicas inmediatas de la realización no inmovilizan ni
> bloquean la mano considerada de modo que resulte imposible iniciar su
> elevación voluntaria.

`Rσ-01` no exige:

```text
espacio suficiente para completar un recorrido
alcanzar una posición final
interactuar con un objeto
alcanzar F
CompletesStruct = true.
```

Sólo exige ausencia del impedimento físico incompatible con el inicio.

---

#### 72.11. Estructura congelada

La fijación concreta queda:

```text
C_P
=
“elevar voluntariamente una mano
desde una posición corporal de reposo”
```

```text
C_Act
=
“iniciar voluntariamente
la elevación de esa mano”
```

```text
C_Init
=
{
  capacidad voluntaria de iniciar el movimiento,
  ausencia de bloqueo físico situacional
}
```

```text
C_RH
=
{
  RH-01:
  capacidad motora voluntaria suficiente
  para iniciar el movimiento
}
```

```text
C_Rσ
=
{
  Rσ-01:
  ausencia de inmovilización o bloqueo físico
  que impida iniciar el movimiento
}
```

---

#### 72.12. Comprobación contra las restricciones de `Spec(p*)`

##### Operación corporal identificable

```text
C_Act
→ sí.
```

##### Condiciones de iniciación explícitas

```text
C_Init
→ sí.
```

##### Requisitos humanos derivables

```text
C_RH
→ sí.
```

##### Requisitos situacionales derivables

```text
C_Rσ
→ sí.
```

##### Dependencia de `σ*` para seleccionar la acción

```text
→ no.
```

##### Dependencia de `CompletesStruct`

```text
→ no.
```

##### Dependencia de `Disp_W`

```text
→ no.
```

##### Dependencia de `a0/a1/aControl`

```text
→ no.
```

##### Inclusión de terminalidad

```text
→ no.
```

##### Inclusión de completabilidad

```text
→ no.
```

##### Inclusión de una interfaz concreta

```text
→ no.
```

---

#### 72.13. Caso falsador conservado

La especificación permite ahora distinguir al menos:

```text
σ_H+
```

en la que:

```text
RH-01
→ satisfecho

Rσ-01
→ satisfecho
```

de:

```text
σ_H−
```

en la que:

```text
RH-01
→ satisfecho

Rσ-01
→ no satisfecho
```

por ejemplo porque la mano esté físicamente inmovilizada.

En el segundo caso no podría concluirse:

```text
PartPossible_h(σ_H−) = true
```

a partir de la especificación congelada.

Por tanto, la candidata no hace verdadera la posibilidad humana por mera
definición.

---

#### 72.14. Ausencia de garantía de resultado favorable

La fijación realizada no establece todavía:

```text
RH-01 = true
```

ni:

```text
Rσ-01 = true
```

para la realización concreta que deberá auditarse.

Por tanto tampoco establece todavía:

```text
Possible_h(p*,σ*) = true
```

ni:

```text
PartPossible_h(σ*) = true.
```

La configuración podría resultar:

```text
favorable
```

o:

```text
desfavorable.
```

Ambos resultados deberán conservarse.

Esta indeterminación es precisamente una condición de legitimidad de la
fijación.

---

#### 72.15. Regla de no reparación

Desde este punto quedan congelados:

```text
C_P
C_Act
C_Init
C_RH
C_Rσ
C_Sel.
```

No podrá modificarse posteriormente:

```text
“elevar una mano”
```

por otra acción porque resulte incompatible con `σ*`.

Tampoco podrá:

- eliminarse `RH-01`;
- debilitarse `Rσ-01`;
- reclasificarse un requisito;
- añadirse una excepción favorable;
- introducirse una interfaz concreta para garantizar el resultado;
- ni reformularse la acción después de observar la evaluación.

Se activa:

```text
NR-PSTAR-01.
```

---

#### 72.16. Resultado de `FIX-PSTAR-01`

Se registra:

```text
FIX-PSTAR-01
→ FASE DE FIJACIÓN COMPLETADA
```

con:

```text
C_Sel
→ elección previa explícita
  de una acción corporal voluntaria elemental

C_P
→ elevar voluntariamente una mano
  desde reposo

C_Act
→ iniciar voluntariamente
  la elevación de esa mano

C_Init
→ capacidad voluntaria
  +
  ausencia de bloqueo físico

C_RH
→ RH-01

C_Rσ
→ Rσ-01

NR-PSTAR-01
→ activa.
```

---

#### 72.17. Alcance de la fijación

La fijación no modifica:

```text
EX-PV001-02
```

ni:

```text
FIX-XGT-02.
```

No altera:

```text
g_Γ
xᵗ
CR-Term
CompletesStruct
Disp_W.
```

Tampoco sustituye todavía el valor técnico:

```text
PartPossible_h = true
```

presente en la configuración experimental.

Ese valor continúa epistemológicamente pendiente hasta realizar las
evaluaciones derivadas de `C_RH` y `C_Rσ`.

---

#### Resultado principal

Se obtiene:

```text
RS-QPP-09
```

> `FIX-PSTAR-01` ha permitido constituir y congelar una candidata concreta de
> `p*` y sus requisitos mínimos de iniciación sin utilizar `σ*`,
> `CompletesStruct`, `Disp_W` ni los resultados de `EX-PV001-02` como criterio
> de selección.

La cadena queda preparada:

```text
C_RH
↓
J_H
⊨?

C_Rσ
↓
J_σ
⊨?
```

y sólo después:

```text
si ambas evaluaciones son favorables:

Possible_h(p*,σ*) = true
↓
PartPossible_h(σ*) = true.
```

---

#### Estado

```text
Q-PP-08
→ resuelta mediante fijación concreta

FIX-PSTAR-01
→ ejecutado en su fase de fijación

C_P
→ fijado

C_Act
→ fijado

C_Init
→ fijado

C_RH
→ fijado

C_Rσ
→ fijado

C_Sel
→ fijado

NR-PSTAR-01
→ activa

J_H
→ todavía no evaluado

J_σ
→ todavía no evaluado

PartPossible_h(σ*) = true
→ todavía no justificado

EX-PV001-02
→ sin modificación.
```

---

#### Punto de continuación

La siguiente actuación deberá respetar el orden ya derivado.

Primero se auditará:

```text
J_H
⊨
C_RH
```

es decir:

> ¿qué fundamento independiente permite establecer que la capacidad motora
> voluntaria requerida por `RH-01` está satisfecha para la participación
> humana considerada?

Sólo después se auditará:

```text
J_σ
⊨
C_Rσ.
```

La evaluación no podrá modificar ninguna de las decisiones congeladas por `FIX-PSTAR-01`.

---

### 73. Auditoría de `J_H` frente a `C_RH`

#### Punto de partida

`FIX-PSTAR-01` ha dejado congelado:

```text
C_RH
=
{
  RH-01
}
```

con:

```text
RH-01
```

> Existe capacidad motora voluntaria suficiente para iniciar la elevación de la
> mano considerada desde una posición corporal de reposo.

La siguiente obligación consiste en determinar si existe un fundamento:

```text
J_H
```

tal que:

```text
J_H
⊨
RH-01.
```

La evaluación debe realizarse sin modificar:

```text
C_P
C_Act
C_Init
C_RH
C_Rσ
C_Sel.
```

`NR-PSTAR-01` permanece activa.

---

#### 73.1. Contenido exacto que debe demostrar `J_H`

`RH-01` no exige:

```text
que toda persona pueda elevar una mano
```

ni:

```text
que una persona determinada complete p*
```

ni:

```text
que la acción sea ejecutada
durante EX-PV001-02.
```

Su contenido mínimo es existencial respecto de la participación considerada:

```text
existe capacidad humana efectiva suficiente
para iniciar C_Act.
```

Por tanto, `J_H` debe autorizar al menos:

```text
∃h :
Cap_h(h,C_Act)
```

donde esta expresión representa únicamente:

```text
existe alguna persona
cuya capacidad motora voluntaria
es suficiente para iniciar C_Act.
```

No se introduce todavía:

```text
Human
Cap_h
```

como entidades técnicas del experimento.

La notación sólo explicita el contenido probatorio de `RH-01`.

---

#### 73.2. Auditoría de la mera plausibilidad ordinaria

Podría intentarse:

```text
elevar una mano
es una acción humana ordinaria
↓
RH-01 = true.
```

Esta inferencia no es suficiente dentro de la investigación.

La denominación:

```text
acción humana ordinaria
```

describe la plausibilidad de la candidata, pero no constituye por sí misma un
registro independiente de que la capacidad requerida esté efectivamente
satisfecha.

Aceptar esa inferencia permitiría:

```text
C_P fue elegida como acción humana
↓
por tanto existe la capacidad humana
requerida por C_P.
```

La verdad de `RH-01` quedaría absorbida parcialmente por el criterio mediante el
que se describió la propia candidata.

Por tanto:

```text
plausibilidad ordinaria
↛
J_H suficiente.
```

---

#### 73.3. Auditoría de la definición de `C_P`

Tampoco puede utilizarse:

```text
C_P
=
“elevar voluntariamente una mano”
```

para concluir directamente:

```text
RH-01 = true.
```

`C_P` especifica:

```text
qué acción se considera
```

pero no:

```text
que exista efectivamente
una persona capaz de realizarla.
```

De otro modo reaparecería la pérdida previamente detectada:

```text
acción denominada humana
↓
capacidad humana presupuesta.
```

Por tanto:

```text
C_P
↛
RH-01.
```

---

#### 73.4. Auditoría de `EX-PV001-02`

`EX-PV001-02` tampoco puede constituir `J_H`.

El dispositivo contiene actualmente:

```text
PartPossible_h = true
```

como condición externa.

Utilizar ese valor produciría:

```text
PartPossible_h = true
↓
RH-01
↓
PartPossible_h = true.
```

La justificación sería circular.

Tampoco pueden utilizarse:

```text
a0
a1
aControl
CompletesStruct
Disp_W
```

porque ninguno de esos resultados constituye evidencia independiente sobre la
capacidad motora humana requerida.

Por tanto:

```text
EX-PV001-02
↛
J_H.
```

---

#### 73.5. Auditoría de `EX-PV001-01`

La investigación anterior contempló una persona participante y formuló
posibilidades humanas concretas.

Sin embargo, el contraste humano correspondiente no llegó a ejecutarse.

Las pruebas técnicas de `EX-PV001-01` establecieron únicamente propiedades del
dispositivo.

El propio análisis distinguió:

```text
corrección técnica
≠
evidencia suficiente
sobre posibilidades humanas.
```

Por tanto, la infraestructura previa tampoco proporciona actualmente:

```text
J_H
⊨
RH-01.
```

---

#### 73.6. Resultado de la búsqueda de fundamento previo

Se han auditado como posibles fundamentos ya disponibles:

```text
carácter ordinario de la acción
C_P
EX-PV001-02
EX-PV001-01
```

y ninguno permite derivar independientemente:

```text
RH-01.
```

Se obtiene:

```text
fundamento humano previo documentado
→ no localizado.
```

Por tanto:

```text
J_H
→ todavía no constituido.
```

---

#### 73.7. ¿Implica esto que `RH-01` sea falso?

No.

La ausencia actual de `J_H` significa:

```text
RH-01
→ no demostrado todavía
```

y no:

```text
RH-01
→ falso.
```

Debe mantenerse la distinción:

```text
ausencia de fundamento
≠
evidencia de ausencia de capacidad.
```

---

#### 73.8. Formas posibles de constituir `J_H`

Una evidencia suficiente podría adoptar distintas formas.

Por ejemplo:

```text
E_H1
→ observación directa
  de una persona iniciando C_Act
```

o:

```text
E_H2
→ evidencia independiente previamente establecida
  de que una persona posee
  la capacidad motora requerida
```

u otra forma que autorice directamente:

```text
∃h :
Cap_h(h,C_Act).
```

La investigación no debe seleccionar todavía una forma por conveniencia.

Primero debe determinar cuál es la mínima evidencia necesaria.

---

#### 73.9. Auditoría de `E_H1` — ejecución observada

Si se observa:

```text
una persona
↓
inicia voluntariamente
la elevación de una mano
```

entonces, para esa ejecución:

```text
la capacidad requerida existía.
```

Por tanto:

```text
E_H1
→ suficiente para RH-01.
```

Pero ya se ha establecido anteriormente:

```text
ejecución efectiva
→ no necesaria universalmente.
```

Por tanto:

```text
E_H1
→ suficiente
→ no necesaria.
```

---

#### 73.10. Auditoría de una declaración no corroborada

Podría utilizarse:

```text
una persona afirma
“puedo elevar una mano”
```

como fundamento.

Sin información adicional, esa declaración constituye evidencia acerca de una
capacidad declarada, pero no demuestra necesariamente la capacidad motora
efectiva requerida por `RH-01`.

Por tanto:

```text
autodeclaración aislada
↛
J_H suficiente
```

salvo que se derive una justificación adicional de su fuerza probatoria.

No se incorpora dicha vía.

---

#### 73.11. Auditoría de conocimiento general sobre seres humanos

Otra posibilidad sería utilizar:

```text
los seres humanos normalmente
pueden elevar una mano
```

para derivar:

```text
existe alguna persona capaz de hacerlo.
```

La inferencia podría ser plausible, pero introduciría un fundamento empírico
externo que actualmente no forma parte de la investigación documentada.

No debe incorporarse silenciosamente como premisa.

Si se desea utilizar esa vía, deberá:

```text
identificarse
fijarse
justificarse
y registrarse
```

como `J_H`.

Por tanto, con la evidencia actualmente registrada:

```text
conocimiento general implícito
↛
J_H documentado.
```

---

#### 73.12. Obligación mínima superviviente

Se deriva:

```text
OP-JH-01
```

> Antes de afirmar que `C_RH` está satisfecho deberá registrarse un fundamento
> independiente cuyo contenido permita establecer que existe al menos una
> persona con capacidad motora voluntaria suficiente para iniciar `C_Act`.

El fundamento deberá ser anterior e independiente de:

```text
PartPossible_h
CompletesStruct
Disp_W
```

y no podrá proceder únicamente de que:

```text
C_P
```

haya sido denominada acción corporal humana.

---

#### 73.13. Prueba de minimalidad

No es necesario demostrar:

```text
todas las personas pueden realizar C_Act.
```

Eso sería más fuerte que `RH-01`.

Tampoco es necesario demostrar:

```text
la persona completa C_Act.
```

porque sólo interesa su iniciación.

Ni:

```text
la persona ejecuta C_Act
dentro de EX-PV001-02.
```

porque la capacidad puede establecerse independientemente del dispositivo.

Por tanto, el contenido mínimo continúa siendo:

```text
∃h :
capacidad voluntaria suficiente
para iniciar C_Act.
```

---

#### 73.14. Nueva cuestión

La auditoría produce:

```text
Q-JH-01
```

> ¿Qué procedimiento mínimo debe utilizarse para fijar y registrar un
> fundamento independiente de la existencia de la capacidad humana exigida por
> `RH-01`, sin convertir una ejecución humana dentro de `EX-PV001-02` en una
> nueva condición necesaria del experimento?

---

#### 73.15. Resultado principal

Se obtiene:

```text
RS-QPP-10
```

> Ningún fundamento ya documentado permite todavía concluir
> `J_H ⊨ C_RH`. La verdad de `RH-01` no puede derivarse de la denominación de
> `C_P`, del valor técnico de `PartPossible_h`, ni de las pruebas anteriores de
> `EX-PV001-01` o `EX-PV001-02`.

Por tanto:

```text
C_RH
→ fijado

J_H
→ pendiente de constitución

J_H ⊨ C_RH
→ todavía no demostrado.
```

---

#### 73.16. Incidencia sobre `FIX-PSTAR-01`

La fase de fijación permanece válida:

```text
FIX-PSTAR-01
→ no modificada.
```

No se modifica:

```text
C_P
C_Act
C_Init
C_RH
C_Rσ.
```

El resultado actual es simplemente:

```text
evaluación humana
→ todavía abierta.
```

`NR-PSTAR-01` continúa activa.

---

#### Estado

```text
C_RH
→ fijado

RH-01
→ contenido probatorio delimitado

plausibilidad ordinaria
→ insuficiente como registro

C_P
→ insuficiente como fundamento

EX-PV001-01
→ no aporta J_H actualmente

EX-PV001-02
→ no puede aportar J_H sin circularidad

E_H1
→ suficiente en principio
→ no necesaria

J_H
→ todavía no constituido

OP-JH-01
→ derivada

RS-QPP-10
→ establecido

Q-JH-01
→ abierta

PartPossible_h(σ*) = true
→ todavía no justificado.
```

---

#### Punto de continuación

La siguiente actuación será derivar el procedimiento mínimo para constituir:

```text
J_H
```

sin modificar `FIX-PSTAR-01`.

Deberá compararse al menos:

```text
observación directa mínima
```

frente a:

```text
fundamento empírico independiente
sobre capacidad humana
```

y determinar cuál de ellos puede proporcionar la evidencia más pobre y
auditable de:

```text
RH-01
```

sin introducir una nueva obligación humana dentro de `EX-PV001-02`.

Sólo después de fijar y evaluar `J_H` podrá abrirse:

```text
J_σ
⊨
C_Rσ.
```

---

### 74. Auditoría comparativa y derivación del procedimiento mínimo para `J_H`

#### Punto de partida

`RS-QPP-10` ha establecido:

```text
C_RH
→ fijado

J_H
→ todavía no constituido

J_H ⊨ C_RH
→ todavía no demostrado
```

con:

```text
C_RH
=
{
  RH-01
}
```

y:

```text
RH-01
```

> Existe capacidad motora voluntaria suficiente para iniciar la elevación de la
> mano considerada desde una posición corporal de reposo.

La cuestión abierta es:

```text
Q-JH-01
```

> ¿Qué procedimiento mínimo debe utilizarse para fijar y registrar un
> fundamento independiente de la existencia de la capacidad humana exigida por
> `RH-01`, sin convertir una ejecución humana dentro de `EX-PV001-02` en una
> nueva condición necesaria del experimento?

La investigación comparará inicialmente:

```text
E_H1
→ observación directa mínima
```

y:

```text
E_H2
→ fundamento empírico independiente
  sobre capacidad humana.
```

La comparación no presupone todavía cuál deberá utilizarse.

---

#### 74.1. Criterio probatorio que debe satisfacer cualquier candidata

El contenido de `RH-01` es existencial y mínimo.

Debe establecerse:

```text
∃h :
una persona posee capacidad motora voluntaria
suficiente para iniciar C_Act.
```

Por tanto, una evidencia candidata será suficiente si permite inferir:

```text
existe al menos una realización humana efectiva
de la capacidad requerida
```

sin depender de:

```text
PartPossible_h
CompletesStruct
Disp_W
EX-PV001-02
```

ni modificar:

```text
C_P
C_Act
C_Init
C_RH
C_Rσ.
```

No se requiere demostrar:

```text
∀h
```

ni establecer una capacidad humana universal.

---

#### 74.2. `E_H1` — Observación directa mínima

Se considera:

```text
E_H1
```

como una observación independiente en la que una persona:

```text
1. se encuentra con una mano en reposo;

2. recibe una indicación simple
   de elevar voluntariamente esa mano;

3. inicia efectivamente la elevación.
```

El contenido observado sería:

```text
posición de reposo
↓
indicación de iniciar C_Act
↓
inicio observable de la elevación
```

sin exigir:

```text
altura final determinada
mantenimiento de la posición
interacción con un objeto
completabilidad
ni resultado posterior.
```

---

#### 74.3. Suficiencia de `E_H1`

Si una persona inicia efectivamente:

```text
C_Act
```

entonces existe al menos una persona para la cual estaba presente la capacidad
motora necesaria para iniciar esa acción.

Por tanto:

```text
E_H1
↓
existe una ejecución efectiva
del inicio de C_Act
↓
existía capacidad suficiente
para ese inicio
↓
RH-01.
```

Se obtiene:

```text
E_H1
→ suficiente para RH-01.
```

La inferencia no utiliza:

```text
PartPossible_h
CompletesStruct
Disp_W.
```

Por tanto puede constituir un fundamento independiente.

---

#### 74.4. ¿Añade `E_H1` más contenido del necesario?

Sí, parcialmente.

`RH-01` exige:

```text
capacidad
```

mientras que `E_H1` observa:

```text
actualización efectiva de esa capacidad.
```

Por tanto:

```text
E_H1
```

es probatoriamente más fuerte que la mera afirmación requerida.

Sin embargo, la actualización observada se utiliza únicamente como:

```text
evidencia contingente de capacidad
```

y no como parte de la definición de:

```text
PartPossible_h.
```

No se deriva:

```text
PartPossible_h = true
⇔
una persona ejecutó p*.
```

La relación válida es únicamente:

```text
ejecución observada
→ evidencia suficiente de capacidad.
```

Por tanto, la mayor fuerza de `E_H1` no produce por sí misma sobreextensión
conceptual.

---

#### 74.5. Separación entre `E_H1` y `EX-PV001-02`

La observación no debe incorporarse a:

```text
EX-PV001-02.
```

Debe constituirse previamente y de manera independiente.

La estructura será:

```text
E_H1
↓
J_H
↓
RH-01
```

y sólo posteriormente:

```text
J_H
+
J_σ
↓
Possible_h(p*,σ*)
↓
PartPossible_h(σ*) = true.
```

Por tanto:

```text
persona observada en E_H1
≠
participante necesario de EX-PV001-02.
```

La evidencia humana pertenece al fundamento previo de `PartPossible_h`, no a
la ejecución del contraste estructural.

---

#### 74.6. Auditoría de la voluntariedad

Una mera observación de:

```text
la mano se mueve
```

no basta para `RH-01`.

El movimiento podría no demostrar:

```text
capacidad voluntaria.
```

Por tanto la observación deberá incluir una condición mínima capaz de
discriminar movimiento meramente ocurrido de acción iniciada voluntariamente.

La forma más pobre superviviente es:

```text
indicación simple previa
↓
inicio congruente de la acción solicitada.
```

No se pretende demostrar filosófica o neurofisiológicamente la voluntad.

Sólo establecer operacionalmente que la persona puede iniciar la acción
corporal especificada en respuesta a una indicación ordinaria.

Se deriva:

```text
OBS-H01
```

> La evidencia observacional de `RH-01` deberá incluir una indicación previa
> de iniciar `C_Act` y la observación posterior de un inicio congruente de dicha
> acción.

---

#### 74.7. Caso negativo de `E_H1`

Si la persona no inicia la acción, no podrá concluirse automáticamente:

```text
RH-01 = false.
```

Podrían existir:

```text
otras personas capaces
```

o:

```text
razones contingentes
por las que esa observación concreta
no produjo la acción.
```

Por tanto:

```text
E_H1 favorable
→ suficiente para RH-01

E_H1 desfavorable
↛ falsedad de RH-01.
```

Esto significa que una única observación directa funciona como prueba positiva
existencial, pero no como prueba exhaustiva negativa.

---

#### 74.8. `E_H2` — Fundamento empírico independiente sobre capacidad humana

Se considera ahora una segunda vía:

```text
E_H2
```

consistente en utilizar evidencia empírica previamente establecida que permita
afirmar:

```text
existen seres humanos
con capacidad motora voluntaria
para elevar una mano.
```

Esta evidencia podría proceder, en principio, de:

```text
conocimiento empírico documentado
observaciones previas independientes
literatura pertinente
u otro fundamento registrable.
```

La investigación no selecciona todavía ninguna fuente concreta.

---

#### 74.9. Suficiencia potencial de `E_H2`

Si existe un fundamento independiente que autorice:

```text
∃h :
Cap_h(h,C_Act)
```

entonces puede concluirse:

```text
RH-01
```

sin realizar una nueva observación humana.

Por tanto:

```text
E_H2
→ potencialmente suficiente.
```

Esto confirma nuevamente:

```text
observación humana nueva
→ no necesaria en sentido lógico.
```

---

#### 74.10. Coste probatorio de `E_H2`

Sin embargo, `E_H2` introduce nuevas obligaciones.

Sería necesario determinar:

```text
qué fuente
```

```text
qué afirmación exacta contiene
```

```text
qué población cubre
```

```text
si la capacidad descrita coincide con C_Act
```

y:

```text
si la inferencia existencial requerida
está realmente autorizada.
```

Por tanto, una vía aparentemente más débil operacionalmente puede requerir una
cadena justificativa documental más amplia:

```text
fuente empírica
↓
interpretación de la fuente
↓
correspondencia con C_Act
↓
existencia de capacidad
↓
RH-01.
```

---

#### 74.11. Comparación entre `E_H1` y `E_H2`

La comparación produce:

```text
E_H1
→ evidencia directa
→ local
→ existencial
→ suficiente si favorable
→ requiere una observación humana mínima
```

frente a:

```text
E_H2
→ evidencia indirecta
→ puede evitar nueva observación
→ requiere fundamento documental externo
→ requiere justificar correspondencia con C_Act.
```

Ambas pueden satisfacer:

```text
J_H.
```

Ninguna constituye una exigencia universal de `PartPossible_h`.

La cuestión es cuál constituye la realización contingente más pobre para esta
investigación.

---

#### 74.12. Prueba de minimalidad comparativa

`RH-01` es una afirmación existencial:

```text
existe al menos una persona
con la capacidad requerida.
```

Una única observación favorable de:

```text
C_Act
```

permite satisfacer directamente esa forma lógica.

No exige:

```text
generalización poblacional
```

ni:

```text
teoría sobre capacidad motora humana
```

ni:

```text
correspondencia entre una descripción externa
y C_Act.
```

Por tanto, para esta realización concreta:

```text
E_H1
```

requiere menos mediación justificativa que:

```text
E_H2.
```

Se obtiene:

```text
E_H1
→ realización contingente mínima preferible
  de J_H
```

sin elevarla a necesidad universal.

---

#### 74.13. Decisión de realización provisional

Se deriva:

```text
DR-JH-01
```

> Para esta investigación, `J_H` se intentará constituir mediante una
> observación directa mínima e independiente de una persona capaz de iniciar
> `C_Act` en respuesta a una indicación simple.

Esta decisión es contingente.

No establece:

```text
toda justificación de PartPossible_h
debe incluir observación humana.
```

Sólo selecciona la forma más pobre actualmente identificada para satisfacer:

```text
RH-01.
```

---

#### 74.14. Procedimiento mínimo

Se deriva:

```text
FIX-JH-01
```

con la siguiente estructura:

```text
FASE I — fijación previa

C_Act
→ ya congelado por FIX-PSTAR-01

criterio favorable
→ fijado antes de observar
```

El criterio favorable será:

```text
CE-JH-01
```

> Tras una indicación simple de elevar voluntariamente una mano desde reposo,
> se observa el inicio congruente de dicha elevación.

---

```text
FASE II — observación independiente
```

1. una persona mantiene inicialmente una mano en reposo;

2. se le indica que eleve voluntariamente esa mano;

3. se observa únicamente si inicia la elevación;

4. no se exige completar ningún recorrido;

5. no se consulta `EX-PV001-02`;

6. no se evalúan `CompletesStruct` ni `Disp_W`.

---

```text
FASE III — registro
```

Si se observa:

```text
CE-JH-01 = satisfecho
```

se registra:

```text
J_H
→ constituido

J_H ⊨ RH-01.
```

Si no se observa:

```text
CE-JH-01
```

se registra únicamente:

```text
esta observación
→ no establece RH-01.
```

No se inferirá automáticamente:

```text
RH-01 = false.
```

---

#### 74.15. Regla de no reparación

Se deriva:

```text
NR-JH-01
```

> Después de iniciar `FIX-JH-01` no podrá modificarse `C_Act`, debilitarse
> `RH-01` ni redefinirse el criterio favorable para hacer coincidir la
> observación con el resultado deseado.

En particular, no podrá cambiarse:

```text
elevar una mano
```

por:

```text
mover un dedo
asentir
hablar
pulsar una tecla
```

si la observación resultara desfavorable.

`FIX-PSTAR-01` permanece congelado.

---

#### 74.16. Independencia respecto de `σ*`

`FIX-JH-01` debe establecer únicamente:

```text
capacidad humana.
```

No deberá comprobar todavía:

```text
si σ* permite ejercerla.
```

Esa pregunta pertenece a:

```text
J_σ
⊨
C_Rσ.
```

Por tanto podrá darse:

```text
J_H ⊨ C_RH
```

y posteriormente:

```text
J_σ ⊭ C_Rσ.
```

La separación entre capacidad humana y condiciones situacionales queda
preservada.

---

#### 74.17. Independencia respecto de completabilidad

La observación deberá detenerse en:

```text
inicio de la elevación.
```

No deberá comprobar:

```text
alcanzar una altura final
```

ni:

```text
completar una trayectoria.
```

Por tanto:

```text
FIX-JH-01
```

no proporciona evidencia directa sobre:

```text
CompletesStruct.
```

Se conserva:

```text
PartPossible_h
≠
CompletesStruct.
```

---

#### 74.18. Resultado de la auditoría comparativa

Se obtiene:

```text
RS-QPP-11
```

> Tanto una observación humana directa como un fundamento empírico externo
> podrían, en principio, constituir `J_H`, pero para la afirmación existencial
> mínima fijada en `RH-01`, una única observación directa favorable del inicio
> de `C_Act` proporciona la realización contingente más pobre y con menor
> mediación justificativa actualmente identificada.

No se concluye:

```text
E_H1
→ necesario universalmente.
```

Se concluye:

```text
E_H1
→ suficiente
→ contingentemente seleccionado.
```

---

#### 74.19. Nueva estructura probatoria

La cadena queda:

```text
FIX-PSTAR-01
↓
C_Act
C_RH
congelados
↓
FIX-JH-01
↓
CE-JH-01
↓
J_H
↓
RH-01.
```

Sólo posteriormente deberá abrirse:

```text
J_σ
⊨
C_Rσ.
```

---

#### Estado

```text
Q-JH-01
→ resuelta en el nivel procedimental

E_H1
→ suficiente
→ seleccionada contingentemente

E_H2
→ potencialmente suficiente
→ no seleccionada

DR-JH-01
→ derivada

FIX-JH-01
→ derivado

CE-JH-01
→ derivado

NR-JH-01
→ derivada

J_H
→ todavía no constituido materialmente

RH-01
→ todavía no satisfecho materialmente

FIX-PSTAR-01
→ permanece congelado

EX-PV001-02
→ permanece sin modificación.
```

---

#### Punto de continuación

La siguiente actuación ya no es una nueva derivación abstracta.

Deberá decidirse si se ejecuta materialmente:

```text
FIX-JH-01
```

registrando el resultado antes de continuar.

Sólo si:

```text
CE-JH-01
→ satisfecho
```

podrá registrarse:

```text
J_H
⊨
C_RH.
```

Después, y no antes, se procederá a la auditoría independiente de:

```text
J_σ
⊨
C_Rσ.
```

---

### 75. Ejecución material de `FIX-JH-01`

#### Punto de partida

`FIX-JH-01` ha quedado derivado como procedimiento contingente para constituir:

```text
J_H
```

mediante una observación humana directa mínima.

El criterio favorable previamente fijado es:

```text
CE-JH-01
```

> Tras una indicación simple de elevar voluntariamente una mano desde reposo,
> se observa el inicio congruente de dicha elevación.

`NR-JH-01` permanece activa.

No puede modificarse:

```text
C_P
C_Act
C_Init
C_RH
C_Rσ
```

ni el propio criterio favorable después de conocer el resultado.

---

#### 75.1. Condiciones previas a la observación

Antes de iniciar la observación deberá mantenerse:

```text
C_Act
=
iniciar voluntariamente
la elevación de una mano
desde una posición corporal de reposo
```

y:

```text
RH-01
=
existe capacidad motora voluntaria suficiente
para iniciar C_Act.
```

La observación deberá limitarse exclusivamente a determinar si existe evidencia
positiva suficiente para:

```text
J_H ⊨ RH-01.
```

No deberá evaluarse todavía:

```text
C_Rσ
```

ni:

```text
σ*
```

ni:

```text
CompletesStruct
Disp_W.
```

---

#### 75.2. Procedimiento de observación

La ejecución material será:

```text
1. seleccionar una persona;

2. mantener una de sus manos inicialmente en reposo;

3. formular una indicación simple equivalente a:

   “eleva esa mano”;

4. observar únicamente si se inicia
   voluntariamente la elevación;

5. detener la evaluación en el momento
   en que el inicio resulte observable.
```

No es necesario:

```text
alcanzar una altura determinada
mantener la mano elevada
completar un recorrido
interactuar con ningún objeto
utilizar EX-PV001-02.
```

---

#### 75.3. Registro del resultado

Deberá registrarse uno y sólo uno de los siguientes resultados.

##### Resultado favorable

Si se observa:

```text
posición inicial de reposo
↓
indicación
↓
inicio congruente de elevación
```

se registra:

```text
CE-JH-01
→ satisfecha

J_H
→ constituido

J_H ⊨ RH-01
→ satisfecho.
```

La inferencia queda:

```text
observación efectiva
del inicio de C_Act
↓
existía capacidad motora voluntaria
suficiente para ese inicio
↓
RH-01.
```

---

##### Resultado no favorable

Si no se observa el inicio congruente:

```text
CE-JH-01
→ no satisfecha en esta observación.
```

No podrá concluirse automáticamente:

```text
RH-01 = false.
```

Sólo podrá registrarse:

```text
esta observación
no proporciona J_H suficiente.
```

No se podrá cambiar:

```text
C_Act
```

ni seleccionar otra acción dentro de esta misma evaluación.

---

#### 75.4. Regla de no reparación durante la ejecución

Una vez iniciada `FIX-JH-01` no podrá:

- sustituirse la acción de elevar una mano;
- cambiarse la mano observada por conveniencia después del resultado;
- reducirse el criterio a cualquier movimiento;
- aceptar un movimiento involuntario como resultado favorable;
- exigir menos que el inicio congruente fijado;
- ni reinterpretar posteriormente una observación desfavorable como favorable.

La observación deberá juzgarse únicamente contra:

```text
CE-JH-01
```

tal como fue fijado previamente.

---

#### 75.5. Independencia del dispositivo experimental

Durante `FIX-JH-01` no deberá consultarse:

```text
a0
a1
aControl
x
xᵗ
CR-Term
CompletesStruct
Disp_W.
```

El resultado de la observación humana no debe depender de qué rama de
`EX-PV001-02` produce el contraste favorable.

Por tanto:

```text
FIX-JH-01
⊥
FIX-XGT-02.
```

La independencia entre ambas fijaciones queda preservada.

---

#### 75.6. Pérdida procedimental residual

La derivación anterior ha fijado la estructura general de `FIX-JH-01` y el contenido sustantivo de:

```text
CE-JH-01
```

pero todavía permanece una pérdida procedimental antes de que la observación pueda ejecutarse sin grados de libertad probatoriamente relevantes.

La formulación:

```text
indicación simple
```

no determina todavía de manera suficiente:

```text
quién fija la indicación

quién la comunica

cuál es su contenido exacto

cómo se determina la mano considerada

qué libertades permanecen abiertas
durante la observación
```

Estas indeterminaciones no modifican:

```text
C_P
C_Act
C_Init
C_RH
C_Rσ
```

pero podrían permitir que decisiones adoptadas durante la ejecución alterasen la interpretación del resultado.

Por tanto, todavía no procede ejecutar materialmente:

```text
FIX-JH-01.
```

La pérdida no se encuentra en el contenido de `RH-01` ni en la necesidad de constituir `J_H`.

Se encuentra exclusivamente en la especificación procedimental necesaria para ejecutar la observación sin reparación retrospectiva.

---

#### 75.7. Obligación previa a la ejecución

Antes de ejecutar materialmente `FIX-JH-01` deberá cerrarse la pérdida procedimental residual mediante una fijación independiente de los elementos necesarios para que:

```text
resultado observado
```

pueda evaluarse exclusivamente contra un criterio determinado antes de conocer dicho resultado.

La siguiente actuación no consiste, por tanto, en modificar:

```text
C_Act
RH-01
CE-JH-01
```

ni en introducir una nueva forma de evidencia.

Consiste exclusivamente en auditar y fijar la operacionalización de la indicación ya derivada.

Deberá preservarse:

```text
NR-PSTAR-01
NR-JH-01
```

y cualquier decisión adicional deberá justificarse únicamente por la necesidad de eliminar grados de libertad procedimentales de `FIX-JH-01`.

Sólo una vez cerrada esta fijación podrá autorizarse la ejecución material de la observación.

---

#### 75.8. Auditoría y fijación de la indicación de `FIX-JH-01`

##### Punto de partida

`FIX-JH-01` ha establecido que la evidencia observacional destinada a constituir:

```text
J_H
```

debe permitir evaluar:

```text
RH-01
```

cuyo contenido permanece congelado como:

> Existe capacidad motora voluntaria suficiente para iniciar la elevación de la
> mano considerada desde una posición corporal de reposo.

El criterio favorable previamente derivado es:

```text
CE-JH-01
```

> Tras una indicación simple de elevar voluntariamente una mano desde reposo,
> se observa el inicio congruente de dicha elevación.

Sin embargo, la expresión:

```text
indicación simple
```

no determina todavía:

```text
1. quién fija la indicación;
2. quién la comunica;
3. cuál es su contenido exacto;
4. cómo se determina la mano considerada;
5. qué libertades permanecen abiertas durante la observación.
```

Mientras estos elementos permanezcan indeterminados, el procedimiento conserva
grados de libertad que podrían afectar a la interpretación del resultado.

Por tanto, antes de ejecutar materialmente `FIX-JH-01`, debe auditarse y fijarse
su indicación.

---

##### 75.8.1. ¿Quién debe establecer la indicación?

Se consideran inicialmente tres posibilidades:

```text
A
→ la persona observada determina la acción;

B
→ quien administra la observación decide
  durante la ejecución qué indicación formular;

C
→ la investigación fija previamente
  la indicación que posteriormente será comunicada.
```

La opción:

```text
A
```

no resulta suficiente.

Si la persona observada pudiera decidir libremente qué acción realizar, ya no
se estaría contrastando necesariamente:

```text
C_Act.
```

La evidencia podría corresponder a una acción distinta.

Por tanto:

```text
persona observada
↛ autoridad para determinar la indicación.
```

---

##### 75.8.2. Auditoría de la decisión del administrador

La opción:

```text
B
```

también introduce una libertad innecesaria.

Si quien administra la observación pudiera decidir en el momento:

```text
qué decir
cómo formularlo
qué precisión exigir
qué movimiento aceptar
```

el contenido de la prueba podría variar después de conocer:

```text
la persona observada
las circunstancias de la observación
o incluso una primera respuesta.
```

Esto debilitaría la auditabilidad de:

```text
FIX-JH-01.
```

Por tanto:

```text
administrador
→ puede transmitir la indicación

administrador
↛ puede determinar libremente su contenido.
```

---

##### 75.8.3. Autoridad superviviente

Sobrevive:

```text
C
```

La indicación debe quedar determinada por la propia investigación antes de la
observación.

Se deriva:

```text
AI-JH-01
```

> La autoridad para fijar el contenido de la indicación utilizada en
> `FIX-JH-01` pertenece al protocolo de investigación y no a la persona
> observada ni a quien administra materialmente la observación.

La distribución de responsabilidades queda:

```text
investigación
→ fija la indicación

administrador
→ reproduce la indicación fijada

persona observada
→ responde o no responde mediante C_Act.
```

---

##### 75.8.4. Qué debe determinar la indicación

La indicación no debe constituir una nueva definición de:

```text
p*
```

ni de:

```text
C_Act.
```

Ambos elementos ya están congelados por:

```text
FIX-PSTAR-01.
```

Su única función consiste en proporcionar una condición antecedente que permita
interpretar un movimiento posterior como evidencia congruente de iniciación
voluntaria de:

```text
C_Act.
```

Por tanto:

```text
IND-JH
```

debe referirse exactamente a:

```text
inicio de la elevación
de la mano considerada.
```

No debe introducir propiedades adicionales de la acción.

---

##### 75.8.5. Prueba de sobreespecificación

Considérese:

```text
“Levanta la mano hasta arriba.”
```

Esta indicación introduce:

```text
una extensión del movimiento
+
una condición final.
```

Pero:

```text
RH-01
```

sólo exige capacidad para:

```text
iniciar la elevación.
```

Por tanto la indicación exigiría más que el requisito auditado.

Se elimina.

---

Considérese:

```text
“Levanta la mano durante cinco segundos.”
```

Introduce:

```text
duración
+
mantenimiento de un estado posterior.
```

Tampoco pertenece a:

```text
C_Act.
```

Se elimina.

---

Considérese:

```text
“Toca este objeto con la mano.”
```

Introduce:

```text
objeto
trayectoria
destino
resultado.
```

Todos esos elementos fueron excluidos de la especificación mínima de `p*`.

Se elimina.

---

##### 75.8.6. Prueba de subespecificación

Considérese:

```text
“Mueve la mano.”
```

Esta indicación es demasiado amplia.

Podría satisfacerse mediante:

```text
movimiento lateral
descenso
rotación
movimiento de dedos
```

sin iniciar:

```text
la elevación de la mano.
```

Por tanto:

```text
“Mueve la mano.”
↛
indicación suficientemente discriminante.
```

Se elimina.

---

Considérese:

```text
“Haz un movimiento con la mano.”
```

La pérdida es todavía mayor.

No individualiza:

```text
C_Act.
```

Se elimina.

---

##### 75.8.7. Contenido mínimo superviviente

Después de las eliminaciones, la indicación debe contener únicamente:

```text
1. referencia a la mano previamente determinada;

2. solicitud de elevarla;

3. libertad temporal suficiente
   para que el inicio pueda atribuirse
   a la respuesta de la persona
   y no a una manipulación externa.
```

No necesita contener:

```text
altura
velocidad
duración
trayectoria final
objeto
objetivo
explicación del experimento.
```

---

##### 75.8.8. Auditoría de la expresión «voluntariamente»

Podría formularse:

```text
“Eleva voluntariamente esa mano.”
```

Sin embargo, la palabra:

```text
voluntariamente
```

no añade una operación observable independiente.

Además, podría introducir en la propia indicación el término cuya presencia se
pretende inferir operacionalmente mediante:

```text
indicación previa
+
respuesta congruente.
```

No es necesario pedir a la persona que clasifique su propia acción como
voluntaria.

Por tanto:

```text
“voluntariamente”
→ no necesario en IND-JH.
```

Se elimina de la formulación mínima.

Esto no modifica:

```text
RH-01.
```

La voluntariedad continúa formando parte del requisito humano.

Lo que se elimina es únicamente su repetición lingüística dentro de la
instrucción.

---

##### 75.8.9. Auditoría de «cuando quieras»

Se considera:

```text
“Cuando quieras, eleva esa mano.”
```

frente a:

```text
“Eleva esa mano.”
```

La expresión:

```text
cuando quieras
```

no modifica la acción solicitada.

Su función es evitar imponer una sincronización externa innecesaria como:

```text
ahora
a la cuenta de tres
cuando aparezca una señal.
```

Sin embargo, `RH-01` tampoco exige libertad temporal indefinida.

Por tanto:

```text
“cuando quieras”
→ no necesaria lógicamente
```

pero puede conservarse como condición procedimental pobre que evita añadir un
requisito temporal artificial.

Se mantiene contingentemente.

---

##### 75.8.10. Problema de referencia de «esa mano»

La formulación candidata:

```text
“Cuando quieras, eleva esa mano.”
```

presupone que:

```text
esa mano
```

ha sido determinada previamente.

Pero:

```text
C_Act
```

fue congelado como:

```text
iniciar voluntariamente
la elevación de una mano
desde una posición corporal de reposo.
```

No se fijó:

```text
mano derecha
```

ni:

```text
mano izquierda.
```

Modificar ahora `C_Act` para seleccionar una de ellas violaría:

```text
NR-PSTAR-01.
```

Por tanto, la determinación de la mano debe resolverse dentro del procedimiento
de observación sin alterar `C_Act`.

---

##### 75.8.11. Alternativas para determinar la mano

Se consideran:

```text
M1
→ el protocolo fija derecha;

M2
→ el administrador elige una mano;

M3
→ la persona observada elige una mano
   antes de comenzar la observación;

M4
→ se acepta retrospectivamente
   cualquiera que se haya movido.
```

`M1` exigiría enriquecer retrospectivamente:

```text
C_Act.
```

Se elimina.

`M2` introduce una elección contingente del administrador que no es necesaria.

Se elimina.

`M4` sería claramente retrospectiva:

```text
primero movimiento
↓
después identificación
de la mano considerada.
```

Se elimina.

Sobrevive:

```text
M3.
```

---

##### 75.8.12. Regla de determinación de la mano

Se fija:

```text
SEL-HAND-01
```

> Antes de comenzar la observación, la persona observada seleccionará una de
> sus manos para la prueba. La mano seleccionada deberá encontrarse inicialmente
> en una posición corporal de reposo y permanecerá como la única mano
> considerada durante esa ejecución de `FIX-JH-01`.

Esta elección no modifica:

```text
C_Act.
```

Simplemente instancia:

```text
una mano
```

como:

```text
la mano considerada
en esta observación.
```

La selección ocurre antes del resultado.

Por tanto:

```text
SEL-HAND-01
→ compatible con NR-PSTAR-01.
```

---

##### 75.8.13. ¿Puede cambiarse de mano después?

No.

Una vez realizada:

```text
SEL-HAND-01
```

la selección queda congelada durante esa observación.

No podrá utilizarse:

```text
mano A
→ resultado desfavorable
↓
probar mano B
→ resultado favorable
```

y presentar únicamente la segunda como resultado de la misma ejecución.

Se deriva:

```text
NR-HAND-01
```

> Una vez seleccionada la mano considerada, ésta no podrá sustituirse dentro de
> la misma ejecución de `FIX-JH-01` como consecuencia del resultado observado.

Esto no implica que una observación desfavorable demuestre:

```text
RH-01 = false.
```

Sólo impide reparar esa observación.

---

##### 75.8.14. Fijación de la indicación

Con la mano ya determinada mediante:

```text
SEL-HAND-01
```

se fija:

```text
IND-JH-01
```

como:

> **«Cuando quieras, eleva esa mano.»**

Esta formulación contiene únicamente:

```text
referencia a la mano previamente seleccionada
+
acción de elevar
+
ausencia de sincronización externa innecesaria.
```

No contiene:

```text
resultado terminal
altura
duración
objeto
trayectoria completa
interfaz
σ*
CompletesStruct
Disp_W.
```

---

##### 75.8.15. ¿Quién comunica `IND-JH-01`?

La indicación puede ser comunicada por:

```text
la persona que administra FIX-JH-01.
```

Su función queda limitada a:

```text
transmitir IND-JH-01
```

sin modificar su contenido sustantivo.

No deberá:

```text
añadir explicaciones
demostrar el movimiento
guiar físicamente la mano
establecer una altura objetivo
explicar el criterio favorable
ni reformular la acción.
```

Se deriva:

```text
ADM-JH-01
```

> Quien administre `FIX-JH-01` actuará únicamente como transmisor de
> `IND-JH-01` y observador del resultado, sin introducir instrucciones
> adicionales que modifiquen `C_Act` o `CE-JH-01`.

---

##### 75.8.16. Auditoría de la demostración visual

Podría el administrador acompañar la indicación mostrando:

```text
cómo elevar una mano.
```

No es necesario.

Además introduciría:

```text
imitación
```

como posible mediación de la respuesta.

Dado que la indicación verbal mínima ya individualiza suficientemente la
acción, la demostración añade estructura sin necesidad demostrada.

Por tanto:

```text
demostración visual
→ eliminada.
```

---

##### 75.8.17. Auditoría de ayuda física

Cualquier asistencia física:

```text
tocar la mano
empujarla
levantarla parcialmente
guiar el brazo
```

destruiría la inferencia buscada.

Ya no podría distinguirse adecuadamente:

```text
capacidad motora de la persona
```

de:

```text
movimiento producido externamente.
```

Por tanto:

```text
ayuda física
→ prohibida.
```

Se deriva:

```text
OBS-JH-02
```

> Durante la observación no podrá proporcionarse asistencia física que
> contribuya causalmente al inicio de `C_Act`.

---

##### 75.8.18. ¿Debe explicarse a la persona qué se está probando?

Para satisfacer:

```text
RH-01
```

no es necesario que la persona conozca:

```text
PartPossible_h
Q-EX002-01
FIX-PSTAR-01
EX-PV001-02
Disp_W.
```

Explicar estas estructuras no aporta evidencia adicional sobre la capacidad
motora requerida.

Por tanto:

```text
explicación teórica
→ no necesaria.
```

Esto no establece ninguna regla general sobre información a participantes en
investigación humana.

Sólo establece que dicha información no forma parte del contenido lógico
necesario para derivar:

```text
J_H ⊨ RH-01.
```

---

##### 75.8.19. Estructura completa de la indicación

La estructura congelada queda:

```text
SEL-HAND-01
↓
persona observada selecciona una mano
↓
mano seleccionada en reposo
↓
selección congelada
↓
administrador comunica IND-JH-01
↓
“Cuando quieras, eleva esa mano.”
↓
observación
↓
inicio congruente / no inicio.
```

La autoridad queda distribuida:

```text
protocolo
→ fija IND-JH-01

persona observada
→ selecciona previamente la mano
→ decide cuándo iniciar la respuesta

administrador
→ comunica la indicación
→ observa

resultado
→ se juzga exclusivamente contra CE-JH-01.
```

---

##### 75.8.20. Revisión de `CE-JH-01`

La auditoría permite precisar el criterio favorable sin modificar su contenido sustantivo.

Se conserva:

```text
CE-JH-01
```

como:

> Tras la selección previa de una mano en reposo y la comunicación de
> `IND-JH-01`, se observa el inicio congruente de la elevación de esa misma
> mano.

Esta precisión elimina grados de libertad procedimentales, pero no modifica:

```text
C_Act
```

ni:

```text
RH-01.
```

---

##### 75.8.21. Prueba de independencia

La estructura fijada no utiliza:

```text
σ*
```

ni:

```text
PartPossible_h
```

ni:

```text
CompletesStruct
```

ni:

```text
Disp_W
```

ni:

```text
a0
a1
aControl
```

ni:

```text
experimentalGGamma
experimentalTerminalX.
```

Por tanto:

```text
IND-JH-01
```

y:

```text
SEL-HAND-01
```

permanecen independientes del resultado experimental cuya fundamentación se
investiga.

---

##### 75.8.22. Prueba de no reparación de `p*`

No se ha modificado:

```text
C_P
=
elevar voluntariamente una mano
desde una posición corporal de reposo
```

ni:

```text
C_Act
=
iniciar voluntariamente
la elevación de esa mano.
```

La expresión:

```text
esa mano
```

se obtiene mediante una instanciación procedimental previa de:

```text
una mano.
```

Por tanto:

```text
SEL-HAND-01
↛ modificación de C_Act.
```

`NR-PSTAR-01` permanece satisfecha.

---

##### 75.8.23. Resultado principal

Se obtiene:

```text
RS-QPP-12
```

> La indicación de `FIX-JH-01` puede fijarse independientemente sin modificar
> `C_Act`: la investigación determina previamente su contenido, la persona
> observada selecciona antes de la observación cuál de sus manos constituye la
> instancia de «una mano», y el administrador se limita a comunicar la
> indicación fijada y observar el resultado.

Se fijan:

```text
SEL-HAND-01
```

> La persona observada selecciona antes de la prueba una mano que permanecerá
> como mano considerada durante toda la ejecución.

```text
IND-JH-01
```

> **«Cuando quieras, eleva esa mano.»**

```text
ADM-JH-01
```

> El administrador transmite `IND-JH-01` sin añadir instrucciones que alteren
> la acción o el criterio favorable.

```text
OBS-JH-02
```

> No se proporciona asistencia física para iniciar el movimiento.

y:

```text
NR-HAND-01
```

> La mano seleccionada no puede sustituirse dentro de la misma ejecución como
> consecuencia del resultado observado.

---

##### 75.8.24. Incidencia sobre `FIX-JH-01`

`FIX-JH-01` queda ahora suficientemente especificado para su ejecución
material:

```text
FASE 0
→ seleccionar una mano

FASE 1
→ colocar/mantener esa mano en reposo

FASE 2
→ comunicar:
  “Cuando quieras, eleva esa mano.”

FASE 3
→ observar

FASE 4
→ registrar:
  inicio congruente / no inicio.
```

No queda abierta durante la ejecución ninguna decisión probatoriamente relevante
sobre:

```text
qué mano cuenta
qué acción se solicita
qué instrucción se comunica
qué movimiento constituye el criterio favorable.
```

---

#### 75.9. Estado definitivo previo a la ejecución

```text
FIX-JH-01
→ auditado procedimentalmente

AI-JH-01
→ establecida

SEL-HAND-01
→ fijada

IND-JH-01
→ fijada

ADM-JH-01
→ fijada

OBS-JH-02
→ fijada

NR-HAND-01
→ activa

CE-JH-01
→ precisado
→ contenido sustantivo conservado

C_P
→ sin modificación

C_Act
→ sin modificación

C_RH
→ sin modificación

NR-PSTAR-01
→ preservada

J_H
→ todavía no constituido materialmente.
```

---

#### Punto de continuación

La auditoría de la indicación queda cerrada.

El siguiente paso ya puede ser la ejecución material de:

```text
FIX-JH-01.
```

La ejecución deberá registrar únicamente:

```text
mano seleccionada
→ [derecha / izquierda]

posición inicial
→ reposo

IND-JH-01
→ “Cuando quieras, eleva esa mano.”

resultado observado
→ [inicio congruente / no inicio]
```

Sólo después de registrar ese resultado podrá decidirse:

```text
J_H
⊨
C_RH
```

o:

```text
J_H
→ no constituido por esta observación.
```

Ninguno de los elementos fijados en esta auditoría podrá modificarse en función del resultado.

---

### 76. Registro y evaluación de la ejecución material de `FIX-JH-01`

#### Punto de partida

`FIX-JH-01` quedó previamente fijado como procedimiento destinado a constituir:

```text
J_H
```

mediante una observación humana directa mínima.

La auditoría de `75.1` dejó congelados:

```text
SEL-HAND-01
IND-JH-01
ADM-JH-01
OBS-JH-02
NR-HAND-01
CE-JH-01.
```

El criterio favorable quedó fijado como:

```text
CE-JH-01
```

> Tras la selección previa de una mano en reposo y la comunicación de
> `IND-JH-01`, se observa el inicio congruente de la elevación de esa misma
> mano.

La ejecución material se realiza sin modificar ninguno de estos elementos.

---

#### 76.1. Registro de la selección de la mano

De acuerdo con:

```text
SEL-HAND-01
```

la persona observada seleccionó previamente:

```text
mano seleccionada
→ mano derecha.
```

La mano derecha quedó desde ese momento como:

```text
mano considerada
```

para toda la ejecución de:

```text
FIX-JH-01.
```

No se produjo sustitución posterior de la mano seleccionada.

Por tanto:

```text
NR-HAND-01
→ preservada.
```

---

#### 76.2. Posición inicial observada

Antes de comunicar:

```text
IND-JH-01
```

la mano derecha seleccionada se encontraba:

```text
sobre la rodilla derecha
de la persona observada.
```

Esta posición constituye, para la ejecución realizada, la posición corporal
inicial registrada.

Se observa:

```text
mano derecha
↓
sobre rodilla derecha
↓
posición inicial de reposo.
```

No se modifica retrospectivamente la definición general de:

```text
posición corporal de reposo.
```

Se registra únicamente la posición concreta utilizada en esta ejecución.

---

#### 76.3. Comunicación de `IND-JH-01`

El administrador comunicó la indicación previamente fijada:

> **«Cuando quieras, eleva esa mano.»**

Por tanto:

```text
IND-JH-01
→ comunicada.
```

La indicación utilizada coincide con la formulación congelada antes de la
observación.

No se registra modificación de:

```text
acción solicitada
criterio favorable
mano considerada.
```

---

#### 76.4. Resultado observado

Después de recibir:

```text
IND-JH-01
```

la persona observada:

```text
inició la elevación de la mano derecha
```

y posteriormente:

```text
la elevó hasta una altura
un poco inferior a la del hombro.
```

La mano permaneció aproximadamente:

```text
diez segundos
```

en esa situación y posteriormente:

```text
volvió a colocarse
sobre la rodilla derecha.
```

La secuencia observada queda registrada como:

```text
mano derecha en reposo
sobre rodilla derecha
↓
IND-JH-01
↓
inicio de elevación
de la misma mano
↓
elevación hasta una altura
algo inferior al hombro
↓
aproximadamente diez segundos
↓
retorno de la mano derecha
a la rodilla derecha.
```

---

#### 76.5. Separación entre observación completa y contenido probatorio

La ejecución produjo más comportamiento observable del exigido por:

```text
CE-JH-01.
```

En particular se observaron:

```text
altura alcanzada
duración aproximada
retorno posterior a la posición inicial.
```

Sin embargo, ninguno de estos elementos pertenece al criterio favorable
previamente fijado.

`CE-JH-01` exige únicamente:

```text
inicio congruente
de la elevación
de la mano previamente seleccionada.
```

Por tanto:

```text
altura alcanzada
→ registrada
→ probatoriamente innecesaria
```

```text
duración aproximada
→ registrada
→ probatoriamente innecesaria
```

```text
retorno a la rodilla
→ registrado
→ probatoriamente innecesario.
```

No se utilizará ninguno de esos elementos para fortalecer retrospectivamente
el criterio favorable.

---

#### 76.6. Evaluación contra `CE-JH-01`

Se comprueban las condiciones previamente fijadas.

##### Selección previa de una mano

```text
mano derecha
→ seleccionada previamente

resultado
→ satisfecho.
```

##### Posición inicial de reposo

```text
mano derecha
→ sobre rodilla derecha

resultado
→ satisfecho.
```

##### Comunicación de `IND-JH-01`

```text
“Cuando quieras, eleva esa mano.”

resultado
→ satisfecha.
```

##### Correspondencia entre mano seleccionada y mano elevada

```text
mano seleccionada
=
mano derecha

mano que inicia la elevación
=
mano derecha

resultado
→ satisfecho.
```

##### Inicio congruente de elevación

```text
inicio de elevación
→ observado

resultado
→ satisfecho.
```

Por tanto:

```text
CE-JH-01
→ SATISFECHO.
```

---

#### 76.7. Incidencia sobre `E_H1`

`E_H1` había sido definido como:

```text
observación directa mínima
de una persona iniciando C_Act
tras una indicación previamente fijada.
```

La ejecución proporciona:

```text
persona observada
+
mano previamente seleccionada
+
posición inicial de reposo
+
IND-JH-01
+
inicio congruente de C_Act.
```

Por tanto:

```text
E_H1
→ obtenido materialmente.
```

---

#### 76.8. Constitución de `J_H`

La inferencia previamente autorizada era:

```text
E_H1
↓
existe una ejecución humana efectiva
del inicio de C_Act
↓
existía capacidad motora voluntaria
suficiente para iniciar C_Act
↓
RH-01.
```

La ejecución material ha proporcionado:

```text
E_H1.
```

Por tanto puede constituirse:

```text
J_H
```

mediante el registro observacional obtenido.

Se establece:

```text
J_H
→ constituido.
```

---

#### 76.9. Evaluación de `J_H ⊨ RH-01`

`RH-01` permanece congelado como:

> Existe capacidad motora voluntaria suficiente para iniciar la elevación de la
> mano considerada desde una posición corporal de reposo.

La observación registra que una persona:

```text
seleccionó previamente una mano
↓
la mantuvo inicialmente en reposo
↓
recibió IND-JH-01
↓
inició congruentemente
la elevación de esa misma mano.
```

Por tanto existe evidencia positiva de al menos una realización humana de la
capacidad requerida.

Se concluye:

```text
J_H
⊨
RH-01.
```

Y, dado que:

```text
C_RH
=
{
  RH-01
}
```

se obtiene:

```text
J_H
⊨
C_RH.
```

---

#### 76.10. Alcance exacto de la conclusión

La observación permite concluir:

```text
existe al menos una persona
para la que se ha observado
capacidad suficiente
para iniciar C_Act.
```

No permite concluir:

```text
todas las personas
pueden realizar C_Act.
```

Tampoco permite concluir:

```text
cualquier persona
puede realizar C_Act
en cualquier situación.
```

Ni:

```text
C_Act puede iniciarse necesariamente
dentro de σ*.
```

Esta última cuestión pertenece exclusivamente a:

```text
J_σ
⊨
C_Rσ.
```

---

#### 76.11. No derivación de completabilidad

Aunque la persona observada continuó elevando la mano después del inicio, esa
continuación no puede utilizarse para concluir:

```text
CompletesStruct = true.
```

La completabilidad relevante para `EX-PV001-02` posee una genealogía
independiente.

Por tanto:

```text
continuación del movimiento observado
↛
CompletesStruct.
```

Tampoco:

```text
altura alcanzada
↛
CR-Term
```

ni:

```text
retorno a la rodilla
↛
Disp_W.
```

La observación humana queda estrictamente limitada a:

```text
J_H.
```

---

#### 76.12. No derivación todavía de `PartPossible_h`

Aunque:

```text
J_H
⊨
C_RH
```

ha quedado satisfecho, todavía falta evaluar:

```text
J_σ
⊨
C_Rσ.
```

La cadena permanece:

```text
J_H
⊨
C_RH
→ satisfecho
```

pero:

```text
J_σ
⊨
C_Rσ
→ pendiente.
```

Por tanto todavía no puede concluirse:

```text
Possible_h(p*,σ*) = true
```

ni:

```text
PartPossible_h(σ*) = true.
```

Hacerlo ahora eliminaría precisamente la independencia que la investigación ha
construido.

---

#### 76.13. Auditoría de no reparación

Después de conocer el resultado favorable no se ha modificado:

```text
C_P
C_Act
C_Init
C_RH
C_Rσ
```

ni:

```text
SEL-HAND-01
IND-JH-01
CE-JH-01.
```

Tampoco se ha incorporado como requisito favorable ninguna propiedad observada
posteriormente como:

```text
altura
duración
retorno.
```

Por tanto:

```text
NR-PSTAR-01
→ preservada

NR-JH-01
→ preservada

NR-HAND-01
→ preservada.
```

---

#### 76.14. Resultado principal

Se obtiene:

```text
RS-QPP-13
```

> La ejecución material de `FIX-JH-01` produjo una observación favorable según
> el criterio `CE-JH-01` fijado previamente: tras seleccionar la mano derecha,
> mantenerla inicialmente en reposo sobre la rodilla derecha y recibir
> `IND-JH-01`, la persona observada inició congruentemente la elevación de esa
> misma mano. Esta observación constituye `J_H` suficiente para satisfacer
> `RH-01`.

Formalmente:

```text
CE-JH-01
→ satisfecho

E_H1
→ obtenido

J_H
→ constituido

J_H
⊨
RH-01

C_RH
=
{ RH-01 }

∴

J_H
⊨
C_RH.
```

---

#### 76.15. Cierre de la rama humana

La pérdida anteriormente localizada en:

```text
J_H
```

queda cerrada para esta realización.

Se obtiene:

```text
rama humana de FIX-PSTAR-01
→ satisfecha.
```

Esto no demuestra todavía la posibilidad humana completa en:

```text
σ*.
```

Demuestra únicamente el componente:

```text
capacidad humana requerida
→ satisfecha.
```

---

#### Estado

```text
FIX-JH-01
→ ejecutado

mano seleccionada
→ derecha

posición inicial
→ mano derecha sobre rodilla derecha

IND-JH-01
→ comunicada

inicio congruente
→ observado

altura posterior
→ registrada
→ no utilizada probatoriamente

duración aproximada
→ registrada
→ no utilizada probatoriamente

retorno a posición inicial
→ registrado
→ no utilizado probatoriamente

CE-JH-01
→ satisfecho

E_H1
→ obtenido

J_H
→ constituido

J_H ⊨ RH-01
→ satisfecho

J_H ⊨ C_RH
→ satisfecho

NR-HAND-01
→ preservada

NR-JH-01
→ preservada

NR-PSTAR-01
→ preservada

PartPossible_h(σ*) = true
→ todavía no demostrado

J_σ ⊨ C_Rσ
→ siguiente obligación.
```

---

#### Punto de continuación

La rama humana ha quedado cerrada.

La siguiente actuación debe abrir, por primera vez desde la congelación de
`FIX-PSTAR-01`, la auditoría independiente de:

```text
J_σ
⊨
C_Rσ
```

donde permanece fijado:

```text
C_Rσ
=
{
  Rσ-01
}
```

y:

```text
Rσ-01
```

> Las condiciones físicas inmediatas de la realización no inmovilizan ni
> bloquean la mano considerada de modo que resulte imposible iniciar su
> elevación voluntaria.

La siguiente auditoría deberá determinar qué evidencia independiente puede constituir:

```text
J_σ
```

sin utilizar:

```text
PartPossible_h = true
```

como premisa, sin derivarla de:

```text
CompletesStruct
```

y sin modificar la realización congelada de `EX-PV001-02`.

---

### 77. Auditoría de `J_σ` frente a `C_Rσ`

#### Punto de partida

La rama humana de `FIX-PSTAR-01` ha quedado cerrada mediante:

```text
J_H
⊨
C_RH.
```

Permanece pendiente la segunda obligación independiente:

```text
J_σ
⊨
C_Rσ.
```

`FIX-PSTAR-01` dejó congelado:

```text
C_Rσ
=
{
  Rσ-01
}
```

con:

```text
Rσ-01
```

> Las condiciones físicas inmediatas de la realización no inmovilizan ni
> bloquean la mano considerada de modo que resulte imposible iniciar su
> elevación voluntaria.

La cuestión ahora no consiste en determinar nuevamente si una persona posee la
capacidad requerida.

Eso ya ha quedado establecido mediante:

```text
J_H.
```

La única cuestión admisible es:

```text
¿contiene σ* condiciones físicas inmediatas
que impidan iniciar C_Act?
```

---

#### 77.1. Separación estricta entre `J_H` y `J_σ`

La estructura derivada exige mantener:

```text
J_H
→ fundamento del lado humano

J_σ
→ fundamento del lado situacional.
```

Por tanto:

```text
J_H ⊨ C_RH
```

no permite inferir:

```text
J_σ ⊨ C_Rσ.
```

Que una persona haya demostrado capacidad para iniciar:

```text
C_Act
```

fuera de la evaluación de `σ*` no demuestra que:

```text
σ*
```

permita ejercer esa capacidad.

Podría existir:

```text
capacidad humana suficiente
+
situación físicamente bloqueante.
```

Por tanto:

```text
J_H
↛
J_σ.
```

La segunda rama conserva contenido probatorio propio.

---

#### 77.2. Contenido exacto que debe demostrar `J_σ`

`Rσ-01` no exige demostrar:

```text
que σ* permita completar p*
```

ni:

```text
que σ* conduzca a F
```

ni:

```text
que exista una trayectoria terminal
```

ni:

```text
que CompletesStruct = true.
```

Exige únicamente establecer:

```text
ausencia de una condición física inmediata
que haga imposible iniciar C_Act.
```

Por tanto, el contenido probatorio mínimo de `J_σ` es:

```text
en σ*
no existe un bloqueo físico inmediato
que impida iniciar
la elevación de la mano considerada.
```

La cuestión queda deliberadamente restringida al:

```text
inicio.
```

---

#### 77.3. Auditoría de `CompletesStruct` como posible fundamento

Podría intentarse:

```text
CompletesStruct = true
↓
Rσ-01.
```

Esta inferencia no es admisible.

`CompletesStruct` pertenece a la estructura:

```text
x
↓
Out(x)
↓
CR-Term
↓
CompletesStruct.
```

Su objeto es determinar si la continuación estructural satisface el criterio
terminal fijado.

`Rσ-01`, en cambio, pregunta por:

```text
condiciones físicas inmediatas
para iniciar una acción corporal.
```

Ambas propiedades poseen genealogías diferentes.

Además, en `EX-PV001-02` existen ejecuciones con:

```text
CompletesStruct = false
```

para las cuales precisamente se pretende conservar abierta la posibilidad de:

```text
PartPossible_h = true.
```

Por tanto:

```text
CompletesStruct
↛
Rσ-01.
```

Se elimina como fundamento de `J_σ`.

---

#### 77.4. Auditoría de `Disp_W` como posible fundamento

Tampoco puede utilizarse:

```text
Disp_W
```

para establecer:

```text
Rσ-01.
```

La definición congelada es:

```text
Disp_W
:=
PartPossible_h
∧
CompletesStruct.
```

Utilizarla produciría una inversión de dependencia:

```text
Disp_W
↓
PartPossible_h
↓
Rσ-01
↓
PartPossible_h.
```

La circularidad sería inmediata.

Por tanto:

```text
Disp_W
↛
J_σ.
```

---

#### 77.5. Auditoría de `PartPossible_h = true`

El valor técnico actualmente suministrado a:

```text
EX-PV001-02
```

tampoco puede constituir:

```text
J_σ.
```

Precisamente estamos investigando si dicho valor puede justificarse mediante:

```text
J_H
+
J_σ.
```

Utilizarlo como evidencia de `Rσ-01` produciría:

```text
PartPossible_h = true
↓
Rσ-01
↓
Possible_h(p*,σ*)
↓
PartPossible_h = true.
```

Por tanto:

```text
PartPossible_h
↛
J_σ.
```

---

#### 77.6. Auditoría de la ejecución de `FIX-JH-01`

La observación material realizada en:

```text
FIX-JH-01
```

demostró que una persona pudo iniciar:

```text
C_Act
```

en las condiciones concretas de aquella observación.

Sin embargo, `FIX-JH-01` fue construido deliberadamente como fundamento:

```text
humano
```

e independiente de:

```text
σ*.
```

Si utilizáramos ahora aquella misma observación para afirmar directamente:

```text
Rσ-01
```

estaríamos identificando sin demostración:

```text
situación de FIX-JH-01
=
σ*.
```

Esa identidad no ha sido establecida.

Por tanto:

```text
FIX-JH-01
↛
J_σ
```

mientras no exista una derivación independiente que demuestre que las
condiciones físicas relevantes de aquella observación pertenecen efectivamente
a:

```text
σ*.
```

---

#### 77.7. Auditoría de la mera descripción de `σ*`

Podría intentarse localizar en la constitución previa de:

```text
σ*
```

una propiedad que establezca directamente:

```text
ausencia de inmovilización
o bloqueo físico.
```

Ésta sería una vía legítima si dicha propiedad hubiera sido fijada:

```text
antes de PartPossible_h
```

y:

```text
independientemente de p*
```

o al menos antes de conocer qué resultado produciría la evaluación conjunta.

La forma requerida sería:

```text
propiedad previa Pσ
↓
Pσ pertenece a la constitución independiente de σ*
↓
Pσ implica ausencia de bloqueo físico inmediato
↓
Rσ-01.
```

Por tanto, antes de introducir una nueva observación situacional debe
preguntarse:

```text
¿contiene ya la constitución independiente de σ*
una propiedad suficiente para Rσ-01?
```

---

#### 77.8. Restricción contra la lectura retrospectiva

No sería legítimo revisar ahora la descripción de:

```text
σ*
```

y reinterpretar una propiedad ambigua como:

```text
“esto significa que la mano estaba libre”
```

únicamente porque necesitamos satisfacer:

```text
Rσ-01.
```

La evidencia deberá cumplir:

```text
anterioridad
+
independencia
+
suficiencia.
```

Por tanto:

```text
propiedad previa explícita
→ candidata legítima
```

mientras que:

```text
reinterpretación favorable posterior
→ insuficiente.
```

Se deriva:

```text
CR-Jσ-01
```

> Una propiedad documental previa de `σ*` sólo podrá constituir fundamento de
> `Rσ-01` si su contenido anterior a esta auditoría implica por sí mismo la
> ausencia del bloqueo físico relevante, sin reinterpretación introducida para
> satisfacer el requisito recién formulado.

---

#### 77.9. Primera vía candidata: fundamento constitutivo previo

Se define:

```text
E_σ1
```

como:

> Evidencia ya presente en la constitución independiente de `σ*` cuyo contenido
> permita establecer que las condiciones físicas inmediatas no impiden iniciar
> `C_Act`.

La cadena sería:

```text
constitución previa de σ*
↓
E_σ1
↓
ausencia de bloqueo físico inmediato
↓
Rσ-01.
```

Si existe:

```text
E_σ1
```

suficiente, no será necesario realizar ninguna nueva observación de:

```text
σ*.
```

Esta vía posee prioridad metodológica porque reutiliza únicamente propiedades
ya fijadas.

---

#### 77.10. Segunda vía candidata: observación independiente de `σ*`

Si la constitución previa de:

```text
σ*
```

no contiene información suficiente, podría ser necesario constituir:

```text
E_σ2
```

mediante una observación específica de las condiciones físicas inmediatas de la
realización.

Pero esa observación no debería consistir en:

```text
hacer que la persona ejecute p*
dentro de σ*.
```

Eso mezclaría nuevamente:

```text
capacidad humana
+
condición situacional.
```

La observación debería limitarse, si fuera necesaria, a comprobar:

```text
presencia / ausencia
de bloqueo físico inmediato.
```

Por ejemplo, conceptualmente:

```text
¿la mano considerada está inmovilizada?
¿existe una barrera física que impida iniciar su elevación?
```

sin comprobar:

```text
si alcanza un destino
si completa una trayectoria
si produce F.
```

---

#### 77.11. Tercera vía candidata: inferencia desde una propiedad física más básica

También podría existir:

```text
E_σ3
```

si la realización contiene una propiedad física previa más básica de la cual se
derive necesariamente:

```text
Rσ-01.
```

La estructura sería:

```text
Pσ*
↓
propiedad física previa
↓
ausencia necesaria
del bloqueo relevante
↓
Rσ-01.
```

Esta vía sería preferible a una nueva observación si:

```text
Pσ*
```

está realmente documentada con anterioridad y la implicación puede demostrarse
sin añadir supuestos.

---

#### 77.12. Comparación preliminar de las vías

Las posibilidades quedan:

```text
E_σ1
→ propiedad explícita
  ya presente en la constitución de σ*

E_σ2
→ nueva observación independiente
  de las condiciones físicas inmediatas

E_σ3
→ derivación desde una propiedad física
  previa más básica.
```

El orden metodológico adecuado es:

```text
primero
→ buscar E_σ1

si no existe
→ buscar E_σ3

sólo si ambas fracasan
→ considerar E_σ2.
```

La razón es que una nueva observación no debe introducirse mientras exista una
base previa suficiente.

---

#### 77.13. Qué no puede decidirse todavía

En este punto no debe afirmarse:

```text
Rσ-01 = true
```

ni:

```text
Rσ-01 = false.
```

Tampoco debe diseñarse todavía un procedimiento experimental concreto para:

```text
E_σ2.
```

Primero debe agotarse la auditoría documental de:

```text
σ*.
```

La obligación inmediata es reconstructiva, no experimental.

---

#### 77.14. Obligación documental superviviente

Se deriva:

```text
OP-Jσ-01
```

> Reconstruir la constitución de `σ*` anterior a la introducción de
> `PartPossible_h` y determinar si contiene una propiedad explícita o una
> consecuencia física derivable que establezca la ausencia del bloqueo
> inmediato definido por `Rσ-01`.

La reconstrucción deberá preservar:

```text
orden histórico
```

y:

```text
dependencias lógicas.
```

No podrá introducir como propiedades previas formulaciones creadas después de:

```text
Rσ-01.
```

---

#### 77.15. Criterio de éxito de la reconstrucción

La reconstrucción será favorable sólo si puede localizarse:

```text
Pσ
```

tal que:

```text
Pσ
→ fijada antes de PartPossible_h
```

```text
Pσ
→ pertenece a la constitución independiente de σ*
```

y:

```text
Pσ
⊨
ausencia de bloqueo físico
que impida iniciar C_Act.
```

Entonces podrá constituirse:

```text
J_σ
=
Pσ
+
derivación correspondiente.
```

y concluir:

```text
J_σ
⊨
C_Rσ.
```

---

#### 77.16. Criterio de fracaso de la reconstrucción

Si la documentación previa sólo establece propiedades como:

```text
estructura
continuación
terminalidad
clasificación
resultado
```

pero ninguna permite determinar:

```text
condiciones físicas inmediatas
de la acción corporal
```

entonces deberá registrarse:

```text
constitución previa de σ*
↛
Rσ-01.
```

En ese caso:

```text
J_σ
→ no constituido documentalmente
```

y deberá abrirse la cuestión de una evidencia situacional independiente.

Ese resultado no invalidaría todavía:

```text
p*
```

ni demostraría:

```text
PartPossible_h = false.
```

Sólo mostraría una pérdida probatoria adicional.

---

#### 77.17. Regla de no reparación

Desde este momento queda activa:

```text
NR-Jσ-01
```

> La constitución histórica de `σ*` no podrá enriquecerse retrospectivamente
> con una propiedad física destinada a satisfacer `Rσ-01`.

Si la propiedad necesaria no existe previamente:

```text
se registrará su ausencia.
```

No podrá añadirse y presentarse posteriormente como si hubiese formado parte de
la constitución original.

Una eventual nueva evidencia deberá identificarse explícitamente como:

```text
nueva evidencia
```

y no como:

```text
propiedad histórica recuperada.
```

---

#### 77.18. Resultado principal

Se obtiene:

```text
RS-QPP-14
```

> `J_σ` no puede derivarse de `J_H`, `PartPossible_h`, `CompletesStruct`,
> `Disp_W` ni de la mera ejecución de `FIX-JH-01`. Antes de introducir una
> nueva observación debe reconstruirse la constitución independiente de `σ*`
> para determinar si ya contiene una propiedad física previa suficiente para
> satisfacer `Rσ-01`.

La estructura queda:

```text
J_H
⊨
C_RH
→ cerrado

J_σ
⊨
C_Rσ
→ abierto
↓
reconstrucción histórica de σ*
↓
¿existe Pσ suficiente?
      /          \
    sí            no
    ↓             ↓
derivar J_σ    registrar pérdida
    ↓             ↓
C_Rσ          estudiar E_σ2
```

---

#### Estado

```text
J_H ⊨ C_RH
→ satisfecho

C_Rσ
→ congelado

Rσ-01
→ congelado

CompletesStruct
→ descartado como fundamento

Disp_W
→ descartado como fundamento

PartPossible_h
→ descartado como fundamento

FIX-JH-01
→ insuficiente por sí mismo para J_σ

E_σ1
→ candidata prioritaria

E_σ3
→ candidata derivativa secundaria

E_σ2
→ candidata observacional
→ todavía no autorizada

CR-Jσ-01
→ establecido

OP-Jσ-01
→ derivada

NR-Jσ-01
→ activa

J_σ
→ todavía no constituido

J_σ ⊨ C_Rσ
→ todavía no demostrado

PartPossible_h(σ*) = true
→ todavía no justificado completamente.
```

---

#### Punto de continuación

La siguiente actuación debe ser exclusivamente:

```text
reconstruir la constitución histórica de σ*
anterior a PartPossible_h.
```

La pregunta concreta será:

> **¿Qué propiedades habían quedado realmente fijadas para `σ*` antes de
> introducir `PartPossible_h`, y contiene alguna de ellas —por sí misma o
> mediante una derivación necesaria— información suficiente para establecer
> que las condiciones físicas inmediatas no bloquean el inicio de `C_Act`?**

Sólo después de esa reconstrucción podrá decidirse si:

```text
E_σ1
```

o:

```text
E_σ3
```

existen realmente, o si será necesario abrir una nueva constitución
observacional:

```text
E_σ2.
```

---

### 78. Reconstrucción histórica de la constitución de `σ*` anterior a `PartPossible_h`

#### Propósito

`OP-Jσ-01` exige reconstruir:

```text
la constitución de σ*
anterior a la introducción de PartPossible_h
```

para determinar si ya existía:

```text
Pσ
```

tal que:

```text
Pσ
→ propiedad previa de σ*

Pσ
⊨
ausencia de bloqueo físico inmediato
para iniciar C_Act

∴

J_σ
⊨
C_Rσ.
```

La reconstrucción debe ser estrictamente histórica.

No se permite:

```text
añadir ahora una propiedad física a σ*
```

ni:

```text
reinterpretar retrospectivamente
una propiedad anterior
para hacerla satisfacer Rσ-01.
```

Permanece activa:

```text
NR-Jσ-01.
```

---

#### 78.1. Primer estrato: constitución anterior a la reducción de `Disp_W`

Antes de alcanzar la forma reducida:

```text
Disp_W
:=
PartPossible_h
∧
CompletesStruct
```

se exploró una representación de la realización mediante:

```text
Q_σ
R_σ
q_F
Reach_Rσ(q_F).
```

La documentación registra que se auditaron:

```text
constitución neutral de R_σ
independencia de F
pertenencia de F a la misma σ*
correspondencia q_F ↔ F
origen desde el que debía calcularse Reach
representación técnica de la participación corporal.
```

Sin embargo, aquella maquinaria fue progresivamente eliminada porque introducía
riesgos de selección retrospectiva del:

```text
nodo
ruta
origen
```

que debía producir la completabilidad.

Por tanto, la reconstrucción histórica no puede recuperar ahora:

```text
Q_σ
R_σ
q_F
q_h
Reach
```

como propiedades supervivientes de `σ*`.

Formalmente:

```text
Q_σ
R_σ
q_F
q_h
Reach
→ eliminados.
```

---

#### 78.2. ¿Contenía `R_σ` una propiedad física útil para `Rσ-01`?

La documentación indica que se examinó:

```text
la constitución neutral de R_σ
```

pero el resultado de esa investigación fue precisamente la eliminación de:

```text
R_σ
```

de la operacionalización mínima.

No ha sobrevivido documentalmente una propiedad del tipo:

```text
mano libre
```

```text
ausencia de inmovilización
```

```text
espacio físico disponible
```

o:

```text
ausencia de barrera corporal.
```

Por tanto no puede reconstruirse legítimamente:

```text
R_σ
↓
ausencia de bloqueo físico
↓
Rσ-01.
```

Hacerlo recuperaría una estructura previamente eliminada y le atribuiría un
contenido que no quedó conservado.

Se concluye:

```text
antiguo R_σ
↛
E_σ1.
```

---

#### 78.3. Segundo estrato: eliminación del acoplamiento adicional

Posteriormente se investigó si era necesario garantizar que:

```text
PartPossible_h
```

y:

```text
CompletesStruct
```

pertenecieran a una misma vía interna de la realización.

Se introdujeron provisionalmente:

```text
SAMEWAY-01
w*
Ways(σ*).
```

La auditoría mostró que esta capa era eliminable si:

```text
σ*
```

se individualizaba con la granularidad adecuada.

La propia:

```text
σ*
```

podía funcionar como único testigo concreto de ambas propiedades.

Por tanto sobrevivió únicamente:

```text
PartPossible_h
y
CompletesStruct
```

deben establecerse sobre:

```text
la misma realización concreta σ*.
```

---

#### 78.4. Qué establece realmente esta individualización de `σ*`

La reducción anterior proporciona una propiedad importante:

```text
σ*
→ unidad concreta común
  de PartPossible_h
  y CompletesStruct.
```

Pero no establece:

```text
σ*
→ espacio físicamente libre
```

ni:

```text
σ*
→ ausencia de inmovilización corporal
```

ni:

```text
σ*
→ posibilidad física de iniciar p*.
```

La propia auditoría posterior de:

```text
PME-SIGMA01
```

confirmó exactamente este límite.

`PME-SIGMA01` quedó satisfecha porque:

```text
PartPossible_h
```

y:

```text
CompletesStruct
```

se calculan dentro de una misma realización técnica.

Pero se registró expresamente que esto demuestra:

```text
co-pertenencia
a una misma realización técnica
```

y no demuestra:

```text
anclaje fenomenológico humano suficiente.
```



Por tanto:

```text
unidad de σ*
↛
Rσ-01.
```

---

#### 78.5. Tercer estrato: núcleo reducido de `Disp_W`

Después de las eliminaciones quedó:

```text
Disp_W
:=
PartPossible_h
∧
CompletesStruct
```

dentro de:

```text
la misma σ*.
```

La documentación establece que no era necesaria una relación adicional de
acoplamiento.

Pero esta reducción presupone ya:

```text
PartPossible_h
```

como uno de sus dos términos.

Por tanto no puede utilizarse para fundamentar:

```text
Rσ-01
```

sin circularidad.

Se conserva:

```text
núcleo reducido de Disp_W
↛
E_σ1.
```

---

#### 78.6. Cuarto estrato: constitución estructural de `CompletesStruct`

Una vez reducido `Disp_W`, la investigación se concentró en:

```text
CompletesStruct.
```

Se eliminó la necesidad de transitabilidad mediante:

```text
Q_σ
R_σ
q_F.
```

En su lugar se derivó:

```text
Cont(σ*,S)
→
E_S
```

junto con:

```text
CR-Term(E_S).
```

Cuando la continuación admisible es única:

```text
CompletesStruct(σ*,F,S)
⇔
CR-Term(E_S).
```



Esta constitución establece propiedades de:

```text
continuación estructural
resultado
terminalidad.
```

No establece propiedades de:

```text
condiciones físicas corporales
de iniciación.
```

Por tanto:

```text
Cont(σ*,S)
↛
Rσ-01
```

y:

```text
CR-Term
↛
Rσ-01.
```

---

#### 78.7. Quinto estrato: dominio neutral `X`

La investigación introdujo posteriormente un dominio neutral con al menos tres
referentes:

```text
X
=
{
  x1,
  x2,
  x3
}.
```

La finalidad era impedir que la identidad de:

```text
x
```

codificara por definición:

```text
CompletesStruct.
```

Se exigió que pudieran existir:

```text
x1 ≠ x2
```

con distinta clasificación terminal y:

```text
x2 ≠ x3
```

con la misma clasificación terminal.

Así se obtuvo el control:

```text
Δx
∧
¬ΔCompletesStruct.
```



Esta estructura proporciona:

```text
neutralidad
identidad
discriminación.
```

Pero no contiene información acerca de:

```text
mano
cuerpo
espacio físico
inmovilización
bloqueo.
```

Por tanto:

```text
X
↛
E_σ1
```

y:

```text
X
↛
E_σ3.
```

---

#### 78.8. Sexto estrato: `Out`

Posteriormente se derivó:

```text
Out : X → O_X
```

como adaptación mínima destinada a mantener separados:

```text
dominio de EP-01
```

y:

```text
resultado observable de EP-02.
```

La documentación registra que `Out` conserva identidad y discriminación sin
consultar:

```text
CR-Term
CompletesStruct
Disp_W.
```



Por tanto `Out` constituye una adaptación estructural neutral.

No contiene una propiedad física capaz de establecer:

```text
Rσ-01.
```

Se concluye:

```text
Out
↛
E_σ1
```

y:

```text
Out
↛
E_σ3.
```

---

#### 78.9. Séptimo estrato: realización técnica de `EX-PV001-02`

La realización técnica finalmente construida establece conjuntamente, dentro de
cada ejecución:

```text
PartPossible_h
CompletesStruct
Disp_W.
```

La auditoría de `PME-SIGMA01` mostró que:

```text
Disp_W
```

recibe:

```text
partPossibleH
complete
```

y calcula:

```text
PartPossible_h
∧
CompletesStruct
```

dentro de una única realización de `S2`.

Esto permite afirmar:

```text
misma ejecución técnica
→ mismo testigo σ*.
```

Pero nuevamente no permite afirmar:

```text
misma ejecución técnica
→ ausencia de bloqueo físico corporal.
```

La documentación ya había limitado expresamente el alcance de esta prueba a:

```text
co-pertenencia técnica.
```



Por tanto:

```text
realización técnica de EX-PV001-02
↛
Rσ-01.
```

---

#### 78.10. Inventario reconstruido de propiedades supervivientes de `σ*`

La reconstrucción permite reunir las propiedades que sí quedaron asociadas a la
realización:

```text
Pσ-01
→ σ* constituye una realización concreta
  suficientemente individualizada
  para servir como testigo común
  de PartPossible_h y CompletesStruct.
```

```text
Pσ-02
→ σ* admite la estructura de continuación
  utilizada para obtener E_S.
```

```text
Pσ-03
→ la continuación relevante puede evaluarse
  mediante CR-Term.
```

```text
Pσ-04
→ la realización técnica conserva
  dentro de una misma ejecución
  PartPossible_h y CompletesStruct.
```

```text
Pσ-05
→ Disp_W se deriva en esa misma ejecución
  exclusivamente como conjunción
  de PartPossible_h y CompletesStruct.
```

Ninguna de estas propiedades afirma:

```text
ausencia de inmovilización corporal
```

ni:

```text
ausencia de barrera física
para iniciar C_Act.
```

---

#### 78.11. Auditoría de `E_σ1`

`E_σ1` requería:

> Evidencia ya presente en la constitución independiente de `σ*` cuyo contenido
> permita establecer que las condiciones físicas inmediatas no impiden iniciar
> `C_Act`.

Se comprueban las propiedades reconstruidas:

```text
Pσ-01
→ unidad de realización
↛ ausencia de bloqueo
```

```text
Pσ-02
→ continuación estructural
↛ ausencia de bloqueo
```

```text
Pσ-03
→ criterio terminal
↛ ausencia de bloqueo
```

```text
Pσ-04
→ co-pertenencia técnica
↛ ausencia de bloqueo
```

```text
Pσ-05
→ derivación de Disp_W
↛ ausencia de bloqueo.
```

Por tanto:

```text
E_σ1
→ NO localizado.
```

---

#### 78.12. Auditoría de `E_σ3`

`E_σ3` requería una propiedad física previa más básica:

```text
Pσ*
```

de la cual pudiera derivarse necesariamente:

```text
ausencia de bloqueo físico inmediato.
```

La reconstrucción no ha localizado una propiedad previa de:

```text
posición corporal
libertad de movimiento
espacio
restricción mecánica
inmovilización
accesibilidad física
```

u otra propiedad equivalente.

Las propiedades supervivientes son:

```text
estructurales
técnicas
relacionales
o clasificatorias.
```

No son propiedades físicas corporales.

Por tanto no existe una cadena documentada:

```text
Pσ*
↓
propiedad física previa
↓
Rσ-01.
```

Se concluye:

```text
E_σ3
→ NO localizado.
```

---

#### 78.13. Importancia de las eliminaciones históricas

Este resultado no autoriza a recuperar:

```text
R_σ
Reach
q_h
SAMEWAY
w*
Ways(σ*).
```

Esos elementos fueron eliminados porque no sobrevivieron las correspondientes
auditorías de necesidad.

La ausencia actual de fundamento físico no demuestra que aquellas estructuras
deban restaurarse.

Demuestra únicamente:

```text
la reducción estructural
no conservó una propiedad física
suficiente para Rσ-01.
```

Por tanto:

```text
pérdida probatoria actual
↛
restauración automática
de estructuras eliminadas.
```

---

#### 78.14. Resultado de `OP-Jσ-01`

La obligación era:

```text
reconstruir la constitución histórica de σ*
```

y determinar si contenía:

```text
Pσ
```

suficiente para:

```text
Rσ-01.
```

La reconstrucción produce:

```text
constitución histórica de σ*
→ reconstruida

E_σ1
→ no localizado

E_σ3
→ no localizado.
```

Por tanto:

```text
constitución previa de σ*
↛
Rσ-01.
```

Y:

```text
J_σ
→ no puede constituirse
  exclusivamente mediante
  la documentación previa de σ*.
```

---

#### 78.15. Naturaleza exacta de la pérdida

La pérdida no consiste en haber demostrado:

```text
Rσ-01 = false.
```

Tampoco consiste en haber demostrado:

```text
σ*
→ bloqueante.
```

Lo único establecido es:

```text
no existe actualmente
fundamento documental previo suficiente
para afirmar Rσ-01.
```

Debe mantenerse:

```text
no demostrado
≠
falso.
```

Por tanto:

```text
Rσ-01
→ epistemológicamente abierto.
```

---

#### 78.16. Incidencia sobre `PartPossible_h`

Actualmente tenemos:

```text
J_H
⊨
C_RH
```

pero:

```text
J_σ
⊨
C_Rσ
→ no demostrado.
```

Por tanto la cadena:

```text
C_RH
+
C_Rσ
↓
Possible_h(p*,σ*)
↓
PartPossible_h(σ*) = true
```

no puede cerrarse todavía.

Se conserva:

```text
PartPossible_h(σ*) = true
→ técnicamente utilizado
→ epistemológicamente no justificado todavía.
```

---

#### 78.17. ¿Debe invalidarse `EX-PV001-02`?

No todavía.

La reconstrucción no ha demostrado:

```text
PartPossible_h(σ*) = false.
```

Ha demostrado únicamente que:

```text
su justificación
no puede proceder
de la constitución documental previa de σ*.
```

Por tanto:

```text
EX-PV001-02
→ permanece intacto

resultado experimental
→ permanece intacto

Q-EX002-01
→ permanece abierto.
```

No debe repararse el experimento.

---

#### 78.18. Activación de la vía observacional `E_σ2`

El orden metodológico establecido en la auditoría anterior era:

```text
1. buscar E_σ1

2. si fracasa,
   buscar E_σ3

3. sólo si ambas fracasan,
   considerar E_σ2.
```

Ahora se ha obtenido:

```text
E_σ1
→ no localizado

E_σ3
→ no localizado.
```

Por tanto queda legitimado abrir:

```text
E_σ2.
```

Esto no significa todavía que cualquier nueva observación sea válida.

Debe derivarse primero qué observación situacional mínima podría establecer:

```text
Rσ-01
```

sin volver a introducir:

```text
capacidad humana
completabilidad
terminalidad
Disp_W
```

en el criterio.

---

#### 78.19. Restricción fundamental para `E_σ2`

La nueva evidencia deberá comprobar exclusivamente:

```text
condiciones físicas inmediatas de σ*
```

respecto del:

```text
inicio de C_Act.
```

No podrá utilizar como criterio:

```text
la persona consigue elevar la mano
```

sin auditoría adicional, porque eso volvería a fusionar:

```text
C_RH
```

y:

```text
C_Rσ.
```

La pregunta de `E_σ2` debe permanecer:

```text
¿existe en σ*
una condición física inmediata
que inmovilice o bloquee
la mano considerada
de modo que iniciar C_Act
resulte físicamente imposible?
```

---

#### 78.20. Regla de no reparación preservada

`NR-Jσ-01` produce ahora una consecuencia concreta.

No podrá añadirse a la constitución histórica de `σ*`:

```text
“la mano estaba libre”
```

ni:

```text
“no existía bloqueo físico”
```

como si estas propiedades hubieran formado parte de la realización original.

Si una nueva observación permite establecerlas, deberán registrarse como:

```text
E_σ2
→ evidencia nueva
```

con fecha y posición lógica posteriores a la reconstrucción histórica.

Esto preserva la diferencia entre:

```text
lo que σ* ya contenía documentalmente
```

y:

```text
lo que posteriormente
se ha comprobado sobre σ*.
```

---

#### 78.21. Resultado principal

Se obtiene:

```text
RS-QPP-15
```

> La reconstrucción histórica de `σ*` no localiza ninguna propiedad previa,
> explícita o derivable, suficiente para establecer `Rσ-01`. La constitución
> superviviente de `σ*` fija unidad de realización, continuación estructural,
> terminalidad y co-pertenencia técnica, pero no contiene una propiedad física
> corporal que garantice ausencia de inmovilización o bloqueo para iniciar
> `C_Act`.

Formalmente:

```text
E_σ1
→ no localizado

E_σ3
→ no localizado

∴

constitución histórica de σ*
↛
Rσ-01

∴

J_σ
→ todavía no constituido.
```

Este resultado autoriza:

```text
abrir E_σ2
```

pero no:

```text
suponer su resultado.
```

---

#### Estado

```text
OP-Jσ-01
→ ejecutada

constitución histórica de σ*
→ reconstruida

Q_σ
→ eliminado históricamente
→ no recuperado

R_σ
→ eliminado históricamente
→ no recuperado

q_F
q_h
Reach
→ eliminados
→ no recuperados

SAMEWAY
w*
Ways(σ*)
→ eliminados
→ no recuperados

unidad concreta de σ*
→ conservada

continuación estructural
→ conservada

CR-Term
→ conservado

co-pertenencia técnica
→ conservada

propiedad física corporal previa
→ no localizada

E_σ1
→ no localizado

E_σ3
→ no localizado

Rσ-01
→ no demostrado
→ no refutado

J_σ
→ todavía no constituido

J_H ⊨ C_RH
→ permanece satisfecho

NR-Jσ-01
→ preservada

EX-PV001-02
→ sin modificación

PartPossible_h(σ*) = true
→ todavía no justificado completamente

E_σ2
→ ahora autorizado para investigación.
```

---

#### Punto de continuación

La siguiente auditoría debe derivar:

```text
E_σ2
```

sin ejecutarlo todavía.

La pregunta será:

> **¿Cuál es la observación situacional mínima capaz de establecer
> `Rσ-01` sobre la misma `σ*`, sin utilizar la ejecución exitosa de `C_Act`
> como criterio y sin introducir información sobre `CompletesStruct`,
> `CR-Term` o `Disp_W`?**

Deberá fijarse antes de cualquier observación:

```text
qué propiedad física se observa
qué cuenta como bloqueo
qué cuenta como ausencia de bloqueo
quién realiza la observación
qué información puede consultar
y qué resultado constituye evidencia suficiente.
```

Sólo después de congelar esas decisiones podrá ejecutarse materialmente:

```text
E_σ2.
```

---

### 79. Auditoría y derivación de `E_σ2`

#### Punto de partida

`RS-QPP-15` ha establecido:

```text
E_σ1
→ no localizado

E_σ3
→ no localizado

constitución histórica de σ*
↛
Rσ-01

J_σ
→ todavía no constituido.
```

La vía restante autorizada es:

```text
E_σ2
```

entendida como:

> una observación independiente y explícitamente nueva de las condiciones
> físicas inmediatas de la realización, destinada exclusivamente a determinar
> si existe o no un bloqueo físico que impida iniciar `C_Act`.

La auditoría debe derivar ahora la forma mínima de esa observación antes de
ejecutarla.

Permanece fijado:

```text
C_Rσ
=
{
  Rσ-01
}
```

con:

```text
Rσ-01
```

> Las condiciones físicas inmediatas de la realización no inmovilizan ni
> bloquean la mano considerada de modo que resulte imposible iniciar su
> elevación voluntaria.

---

#### 79.1. Objeto exacto de `E_σ2`

`E_σ2` no debe volver a evaluar:

```text
capacidad humana
```

porque:

```text
J_H
⊨
C_RH
```

ya ha quedado satisfecho.

Tampoco debe evaluar:

```text
CompletesStruct
CR-Term
Disp_W.
```

Su único objeto es:

```text
condición física inmediata de σ*
respecto del inicio de C_Act.
```

Por tanto la pregunta observacional mínima queda:

```text
¿existe una condición física inmediata
de la realización
que inmovilice o bloquee
la mano considerada
de modo que iniciar su elevación
resulte físicamente imposible?
```

---

#### 79.2. Auditoría de una ejecución directa de `C_Act`

Podría intentarse constituir `E_σ2` haciendo que una persona:

```text
intente elevar la mano dentro de σ*.
```

Si la eleva, podría parecer que:

```text
Rσ-01
```

queda demostrado.

Sin embargo, esta observación mezcla nuevamente:

```text
capacidad humana
+
condición situacional.
```

Un resultado favorable sería compatible con:

```text
J_H
+
J_σ
```

pero no permitiría mantener separadas ambas fuentes probatorias.

La investigación ya ha construido deliberadamente:

```text
J_H
⊨
C_RH
```

como rama independiente.

Por tanto:

```text
ejecución de C_Act dentro de σ*
→ evidencia conjunta posible

pero

ejecución de C_Act dentro de σ*
↛ forma mínima preferible de E_σ2.
```

Se elimina como primera realización de `E_σ2`.

---

#### 79.3. Consecuencia de la eliminación

La observación situacional debe poder realizarse sin exigir:

```text
que la persona intente mover la mano.
```

Debe limitarse a determinar si existe alguna condición física presente que haga
imposible ese inicio.

La estructura buscada será:

```text
observar condiciones físicas inmediatas
↓
clasificar presencia / ausencia
de bloqueo relevante
↓
Rσ-01.
```

---

#### 79.4. ¿Qué cuenta como bloqueo relevante?

No cualquier condición física es pertinente.

`Rσ-01` sólo excluye condiciones que hagan:

```text
físicamente imposible
iniciar la elevación.
```

Por tanto no deben contar como bloqueo:

```text
incomodidad leve
preferencia de la persona
falta de motivación
duda
lentitud
posición poco habitual
dificultad no impeditiva.
```

La propiedad observada debe tener fuerza suficiente para:

```text
impedir físicamente
el inicio de C_Act.
```

---

#### 79.5. Forma mínima de bloqueo

Se introduce provisionalmente:

```text
Block_σ(C_Act)
```

como lugar lógico para:

```text
una condición física de σ*
que impide causalmente
el inicio de C_Act.
```

No constituye todavía una nueva entidad técnica.

Su función es delimitar el criterio observacional.

La relación buscada es:

```text
Block_σ(C_Act)
→ presente
↓
Rσ-01 no satisfecho
```

y:

```text
Block_σ(C_Act)
→ ausente
↓
Rσ-01 satisfecho
```

siempre que la observación sea suficiente para detectar los bloqueos relevantes.

---

#### 79.6. Riesgo de circularidad del criterio negativo

Debe evitarse definir:

```text
ausencia de bloqueo
:=
la mano podría elevarse.
```

Eso sería equivalente a:

```text
Possible_h(p*,σ*)
```

y reintroduciría la conclusión.

La observación debe identificar condiciones físicas concretas de la realización,
no posibilidad humana abstracta.

Por tanto la forma válida será:

```text
condiciones físicas observables
↓
presencia / ausencia de inmovilización
o impedimento mecánico relevante
```

y no:

```text
“parece posible mover la mano”.
```

---

#### 79.7. Primera familia de bloqueos candidatos

Para `C_Act`:

```text
iniciar la elevación de una mano
```

un bloqueo físico inmediato podría incluir, por ejemplo:

```text
mano o brazo sujetos mecánicamente;
```

```text
mano atrapada bajo una estructura
que impide iniciar la elevación;
```

```text
restricción física externa
que inmoviliza el miembro;
```

```text
barrera rígida en contacto inmediato
que impide cualquier comienzo
de movimiento ascendente.
```

Estas formulaciones no constituyen todavía una lista exhaustiva.

Sirven para identificar la clase de fenómeno que `E_σ2` debe ser capaz de
detectar.

---

#### 79.8. Auditoría de exhaustividad

No es necesario que `E_σ2` enumere todas las formas físicamente posibles de
bloqueo del universo.

La obligación es local:

```text
evaluar la realización concreta σ*.
```

Por tanto basta con determinar si en esa realización concreta existe alguna
condición física observable de la clase relevante.

La exhaustividad requerida es:

```text
respecto de las condiciones presentes en σ*
```

y no:

```text
respecto de todas las formas imaginables de inmovilización.
```

---

#### 79.9. ¿Debe tocarse o manipularse la mano?

No.

Manipular físicamente la mano para comprobar si está libre podría:

```text
alterar las condiciones observadas
```

o:

```text
introducir asistencia externa.
```

Además, una observación visual o descriptiva puede ser suficiente si la
situación es clara.

Por tanto:

```text
manipulación física
→ no necesaria.
```

Se elimina como exigencia general.

---

#### 79.10. ¿Puede preguntarse a la persona?

Podría preguntarse:

```text
“¿tienes la mano bloqueada?”
```

Pero una respuesta verbal sería:

```text
autoinforme
```

y no observación independiente de la condición física.

Podría servir como información auxiliar, pero no debe constituir por sí sola
`J_σ`.

Por tanto:

```text
autoinforme
→ no suficiente como E_σ2 mínimo.
```

---

#### 79.11. Forma observacional mínima superviviente

La forma más pobre superviviente es:

```text
observación directa
de la disposición física inmediata
de la mano y el brazo considerados
dentro de σ*
```

con el único objetivo de determinar:

```text
si existe una restricción mecánica
o una barrera física inmediata
que impida iniciar la elevación.
```

No se exige:

```text
mover la mano
```

ni:

```text
pedir que se mueva.
```

---

#### 79.12. Criterio favorable

Se deriva:

```text
CE-Jσ-01
```

> La observación de las condiciones físicas inmediatas de la realización no
> identifica ninguna inmovilización, sujeción, atrapamiento o barrera física
> presente que haga imposible iniciar la elevación de la mano considerada.

Si:

```text
CE-Jσ-01
→ satisfecho
```

podrá constituirse:

```text
J_σ
```

como evidencia situacional suficiente para:

```text
Rσ-01.
```

---

#### 79.13. Criterio desfavorable

Se deriva:

```text
CF-Jσ-01
```

> Se observa una condición física inmediata de la realización que inmoviliza,
> sujeta, atrapa o bloquea la mano o el brazo considerados de modo que iniciar
> la elevación resulta físicamente imposible.

Si:

```text
CF-Jσ-01
→ satisfecho
```

entonces:

```text
Rσ-01
→ no satisfecho.
```

En ese caso no podrá concluirse:

```text
PartPossible_h(σ*) = true
```

para la candidata congelada.

---

#### 79.14. Caso indeterminado

Debe contemplarse una tercera posibilidad.

Puede ocurrir que la observación no permita determinar con suficiente claridad
si una condición presente es realmente bloqueante.

Se deriva:

```text
CI-Jσ-01
```

> La observación no permite clasificar de manera suficiente la presencia o
> ausencia de un bloqueo físico inmediato relevante.

En ese caso:

```text
J_σ
→ no constituido.
```

No podrá convertirse:

```text
incertidumbre
```

en:

```text
ausencia de bloqueo.
```

---

#### 79.15. Importancia del tercer resultado

La estructura correcta no es binaria:

```text
bloqueo / no bloqueo
```

si la evidencia es insuficiente.

Debe preservarse:

```text
favorable
desfavorable
indeterminado.
```

Así se evita:

```text
no veo bloqueo
↓
por tanto no existe.
```

El resultado favorable exige observación suficiente de las condiciones
relevantes.

---

#### 79.16. ¿Quién debe realizar la observación?

Se consideran:

```text
O1
→ la propia persona observada;

O2
→ el administrador;

O3
→ otro observador independiente.
```

`O3` podría aportar mayor independencia, pero no se ha demostrado su necesidad.

`O1` introduciría autoinforme o autoevaluación.

La opción mínima es:

```text
O2
→ administrador.
```

El administrador ya está presente como agente procedimental y puede limitarse a
observar las condiciones físicas sin intervenir.

Se deriva:

```text
ADM-Jσ-01
```

> El administrador realizará la observación situacional sin manipular la mano,
> el brazo ni las condiciones físicas relevantes.

---

#### 79.17. Separación respecto de `ADM-JH-01`

Aunque pueda ser la misma persona física quien administre ambas observaciones,
sus funciones probatorias son distintas.

En:

```text
FIX-JH-01
```

observa:

```text
respuesta humana a IND-JH-01.
```

En:

```text
E_σ2
```

observa:

```text
condiciones físicas de σ*.
```

Por tanto:

```text
misma persona administradora
≠
misma evidencia.
```

Las dos observaciones deben registrarse por separado.

---

#### 79.18. ¿Qué información puede conocer el administrador?

No es necesario ocultarle:

```text
C_Act
```

porque debe saber qué clase de bloqueo es relevante.

Pero no necesita consultar:

```text
CompletesStruct
Disp_W
a0
a1
aControl
```

ni conocer cuál rama produce el resultado favorable.

Se deriva:

```text
BLIND-Jσ-01
```

como restricción mínima:

> Para realizar `E_σ2`, el administrador puede conocer `C_Act` y `Rσ-01`, pero
> no utilizará información sobre `CompletesStruct`, `Disp_W` ni los resultados
> de las ejecuciones de `EX-PV001-02` para clasificar la condición física.

No se exige cegamiento absoluto.

Se exige independencia del resultado experimental.

---

#### 79.19. ¿Debe observarse la misma mano de `FIX-JH-01`?

Aquí aparece una cuestión crítica.

`C_Act` se fijó sobre:

```text
una mano.
```

Durante `FIX-JH-01` se instanció mediante:

```text
SEL-HAND-01
→ mano derecha.
```

La rama situacional debe evaluar:

```text
la mano considerada
```

para la misma participación.

Cambiar ahora a la otra mano produciría:

```text
J_H
→ mano derecha

J_σ
→ mano izquierda.
```

La composición:

```text
J_H
+
J_σ
```

ya no estaría necesariamente referida a la misma instancia de `p*`.

Por tanto debe preservarse:

```text
mano considerada
=
mano derecha.
```

Se deriva:

```text
SAME-HAND-01
```

> `E_σ2` deberá evaluar las condiciones físicas inmediatas correspondientes a
> la misma mano derecha previamente fijada por `SEL-HAND-01`.

Esto no modifica `C_Act`.

Preserva la identidad de la instancia ya seleccionada.

---

#### 79.20. ¿Debe evaluarse la misma situación física de `FIX-JH-01`?

No necesariamente.

`FIX-JH-01` fue diseñado para establecer:

```text
J_H
```

independientemente de:

```text
σ*.
```

Por tanto no puede asumirse que sus condiciones físicas sean:

```text
σ*.
```

`E_σ2` debe observar:

```text
la realización que cuenta como σ*
```

y no simplemente reutilizar la situación en la que se constituyó `J_H`.

Se conserva:

```text
misma mano
→ sí

misma situación de FIX-JH-01
→ no presupuesta.
```

---

#### 79.21. Problema de identificación material de `σ*`

Para ejecutar `E_σ2` deberá poder señalarse:

```text
qué situación concreta
constituye materialmente σ*
```

en el momento de la observación.

Si no puede identificarse esa realización, no será posible afirmar que la
ausencia de bloqueo observada pertenece a:

```text
σ*.
```

Por tanto se deriva una obligación previa:

```text
ID-σ-01
```

> Antes de ejecutar `E_σ2` deberá identificarse de manera suficiente la
> realización concreta que cuenta como `σ*` para `EX-PV001-02`, sin modificar
> retrospectivamente su constitución.

---

#### 79.22. Alcance de `ID-σ-01`

`ID-σ-01` no exige introducir:

```text
un nuevo identificador técnico dentro del componente.
```

La auditoría anterior de `PME-SIGMA01` ya mostró que no era necesario recuperar:

```text
w*
Ways(σ*)
SAMEWAY.
```

La identificación puede ser documental o procedimental.

Lo único necesario es que pueda afirmarse:

```text
esta es la realización concreta
sobre la que se evalúan
PartPossible_h y CompletesStruct.
```

---

#### 79.23. Riesgo de crear una nueva `σ*`

No será válido preparar una situación física especialmente libre para:

```text
E_σ2
```

y declararla posteriormente:

```text
σ*.
```

Eso constituiría una nueva realización.

La observación debe recaer sobre:

```text
la realización ya comprometida
por EX-PV001-02.
```

Se deriva:

```text
NR-Eσ2-01
```

> `E_σ2` no podrá alterar las condiciones físicas de la realización con el fin
> de producir un resultado favorable antes de observarlas.

---

#### 79.24. ¿Puede retirarse un obstáculo antes de observar?

No.

Si existe:

```text
obstáculo físico
```

y se elimina antes de registrar la condición:

```text
σ* original
↓
modificación
↓
σ* observada.
```

La evidencia ya no correspondería necesariamente a la misma realización.

Por tanto:

```text
retirada previa de bloqueo
→ prohibida.
```

---

#### 79.25. ¿Puede colocarse deliberadamente la mano en reposo?

Debe distinguirse entre:

```text
instanciar la condición inicial ya fijada
```

y:

```text
modificar σ* para eliminar un bloqueo.
```

`C_Act` exige:

```text
mano considerada
desde una posición corporal de reposo.
```

Por tanto, la evaluación situacional deberá referirse a una instancia de la
realización en la que esa condición inicial sea legítimamente parte de la
observación.

Pero no debe forzarse una posición específica que elimine una restricción que
la realización impondría de otro modo.

Este punto no puede resolverse todavía sin identificar materialmente:

```text
σ*.
```

Por tanto queda subordinado a:

```text
ID-σ-01.
```

---

#### 79.26. Procedimiento mínimo derivado

Se deriva provisionalmente:

```text
FIX-Jσ-01
```

con la siguiente estructura:

```text
FASE 0
→ identificar materialmente σ*
   mediante ID-σ-01
```

```text
FASE 1
→ conservar la mano considerada:
   mano derecha
```

```text
FASE 2
→ no modificar las condiciones físicas
   relevantes de σ*
```

```text
FASE 3
→ administrador observa
   la disposición física inmediata
   de mano y brazo
```

```text
FASE 4
→ clasificar únicamente contra:

   CE-Jσ-01
   CF-Jσ-01
   CI-Jσ-01
```

```text
FASE 5
→ registrar el resultado
   sin reparación posterior.
```

---

#### 79.27. Regla de no reparación

Se deriva:

```text
NR-Jσ-02
```

> Una vez identificada `σ*` e iniciada la observación, no podrá modificarse la
> posición física relevante, retirarse una restricción, sustituirse la mano
> considerada ni reinterpretarse el criterio de bloqueo como consecuencia del
> resultado observado.

---

#### 79.28. Derivación de `J_σ`

Si:

```text
CE-Jσ-01
→ satisfecho
```

se podrá registrar:

```text
E_σ2
→ favorable

J_σ
→ constituido

J_σ
⊨
Rσ-01.
```

Dado que:

```text
C_Rσ
=
{
  Rσ-01
}
```

se obtendrá:

```text
J_σ
⊨
C_Rσ.
```

---

#### 79.29. Resultado desfavorable

Si:

```text
CF-Jσ-01
→ satisfecho
```

se obtiene:

```text
Rσ-01
→ no satisfecho.
```

Entonces:

```text
J_H
⊨
C_RH

pero

J_σ
⊭
C_Rσ.
```

Y, para la candidata congelada:

```text
Possible_h(p*,σ*)
→ no establecido como verdadero.
```

No podrá cambiarse:

```text
p*
```

ni:

```text
la mano considerada.
```

---

#### 79.30. Resultado indeterminado

Si:

```text
CI-Jσ-01
→ satisfecho
```

se registrará:

```text
J_σ
→ no constituido.
```

La investigación permanecerá abierta.

No podrá interpretarse la incertidumbre como:

```text
Rσ-01 = true.
```

---

#### 79.31. Prueba de independencia de `E_σ2`

La forma derivada no utiliza como criterio:

```text
PartPossible_h
CompletesStruct
Disp_W
x
xᵗ
a0
a1
aControl.
```

Tampoco exige:

```text
ejecutar C_Act.
```

Por tanto:

```text
E_σ2
```

puede constituir una evidencia propiamente situacional e independiente de la
rama humana.

---

#### 79.32. Prueba de suficiencia

Si se observa de manera suficiente que:

```text
no existe inmovilización
ni barrera física inmediata
que impida iniciar
la elevación de la mano derecha
```

en:

```text
σ*
```

entonces el contenido coincide exactamente con:

```text
Rσ-01.
```

No se requiere inferencia adicional relativa a:

```text
completabilidad
```

o:

```text
capacidad humana.
```

Por tanto:

```text
CE-Jσ-01
→ suficiente para Rσ-01.
```

---

#### 79.33. Prueba de no sobreextensión

`E_σ2` no autoriza por sí solo:

```text
PartPossible_h = true.
```

Sólo autoriza:

```text
J_σ
⊨
C_Rσ.
```

Todavía debe componerse con:

```text
J_H
⊨
C_RH.
```

La cadena seguirá siendo:

```text
J_H
⊨
C_RH

J_σ
⊨
C_Rσ
        ↓
Possible_h(p*,σ*)
        ↓
PartPossible_h(σ*) = true.
```

Por tanto `E_σ2` no incorpora anticipadamente la conclusión completa.

---

#### 79.34. Resultado principal

Se obtiene:

```text
RS-QPP-16
```

> La evidencia situacional mínima `E_σ2` puede constituirse mediante una
> observación directa de las condiciones físicas inmediatas de la misma
> realización `σ*`, limitada a determinar si existe una inmovilización,
> sujeción, atrapamiento o barrera física que haga imposible iniciar la
> elevación de la mano derecha previamente fijada, sin ejecutar `C_Act` ni
> consultar `CompletesStruct`, `Disp_W` o los resultados experimentales.

Se derivan:

```text
CE-Jσ-01
→ ausencia observable suficiente
  de bloqueo físico inmediato
```

```text
CF-Jσ-01
→ presencia observable
  de bloqueo físicamente impeditivo
```

```text
CI-Jσ-01
→ evidencia insuficiente
  para clasificar.
```

---

#### 79.35. Nueva obligación previa a la ejecución

Antes de ejecutar:

```text
FIX-Jσ-01
```

debe resolverse:

```text
ID-σ-01.
```

La pregunta inmediata pasa a ser:

```text
Q-Jσ-01
```

> ¿Qué realización material concreta cuenta como `σ*` en `EX-PV001-02` para
> que `E_σ2` pueda observar sus condiciones físicas sin crear retrospectivamente
> una nueva realización?

No puede ejecutarse legítimamente:

```text
E_σ2
```

hasta resolver esta identificación.

---

#### Estado

```text
E_σ2
→ auditado

ejecución directa de C_Act
→ eliminada como forma mínima

observación física situacional
→ forma mínima superviviente

CE-Jσ-01
→ derivado

CF-Jσ-01
→ derivado

CI-Jσ-01
→ derivado

ADM-Jσ-01
→ derivado

BLIND-Jσ-01
→ derivado

SAME-HAND-01
→ derivado

mano considerada
→ derecha

ID-σ-01
→ nueva obligación crítica

NR-Eσ2-01
→ derivada

NR-Jσ-02
→ derivada

FIX-Jσ-01
→ derivado
→ todavía no ejecutable

J_σ
→ todavía no constituido

J_H ⊨ C_RH
→ permanece satisfecho

PartPossible_h(σ*) = true
→ todavía no justificado completamente.
```

---

#### Punto de continuación

La siguiente auditoría debe resolver exclusivamente:

```text
ID-σ-01.
```

La pregunta será:

> **¿Qué constituye exactamente la realización concreta `σ*` de
> `EX-PV001-02` en términos suficientes para que una observación física pueda
> recaer sobre ella sin alterar su identidad ni crear una realización nueva?**

La auditoría deberá distinguir al menos entre:

```text
σ* como ejecución técnica del componente
```

```text
σ* como situación material completa
en la que esa ejecución ocurre
```

y:

```text
σ* como combinación posterior
de ambas.
```

Sólo después de fijar qué significado estaba ya comprometido por la
investigación podrá ejecutarse `FIX-Jσ-01`.

---

### 80. Auditoría de `ID-σ-01` — Identificación material de la realización `σ*`

#### Punto de partida

La derivación de `E_σ2` ha mostrado que una observación situacional sólo puede
proporcionar:

```text
J_σ
⊨
C_Rσ
```

si recae efectivamente sobre:

```text
la misma σ*
```

respecto de la cual deben establecerse:

```text
PartPossible_h
```

y:

```text
CompletesStruct.
```

Por tanto se derivó:

```text
ID-σ-01
```

> Antes de ejecutar `E_σ2` deberá identificarse de manera suficiente la
> realización concreta que cuenta como `σ*` para `EX-PV001-02`, sin modificar
> retrospectivamente su constitución.

La cuestión no consiste todavía en determinar:

```text
si existe bloqueo físico.
```

Consiste en determinar primero:

```text
qué es exactamente σ*
```

con el grado de concreción ya comprometido por la investigación.

---

#### 80.1. Reconstrucción del significado superviviente de `σ*`

Durante la reducción previa se examinó cómo impedir que:

```text
PartPossible_h
```

y:

```text
CompletesStruct
```

fueran satisfechas por dos subrealizaciones independientes y posteriormente
combinadas.

Se introdujeron provisionalmente:

```text
SAMEWAY
w*
Ways(σ*)
```

pero fueron eliminados.

La conclusión superviviente fue:

```text
la propia σ*
puede actuar como único testigo concreto
de ambas propiedades.
```

Por tanto quedó preservada únicamente la obligación:

```text
PartPossible_h
y
CompletesStruct
deben establecerse sobre
la misma realización concreta σ*.
```

---

#### 80.2. Cómo quedó realizada posteriormente esa unidad

La construcción y auditoría de `EX-PV001-02` proporcionaron una realización
concreta de esa exigencia.

Dentro de una única ejecución:

```text
g_Γ
↓
x
↓
Out(x)
↓
CR-Term
↓
CompletesStruct
```

y simultáneamente:

```text
partPossibleH
```

son utilizados para producir:

```text
Disp_W
:=
PartPossible_h
∧
CompletesStruct.
```

La auditoría de `PME-SIGMA01` concluyó que no existe una composición de la
forma:

```text
σa
→ PartPossible_h

σb
→ CompletesStruct

después
↓
combinar.
```

La conjunción se forma dentro de:

```text
la misma ejecución técnica.
```

Por tanto, el testigo concreto que sobrevivió documentalmente como realización
de `σ*` es:

```text
una ejecución concreta de EX-PV001-02.
```

---

#### 80.3. Primer resultado de identificación

Puede establecerse:

```text
ID-σ-TECH-01
```

> En la realización actualmente documentada de `EX-PV001-02`, `σ*` queda
> individualizada por una ejecución técnica concreta dentro de la cual se
> producen el único `Out(x)`, el único `CompletesStruct`, el valor suministrado
> de `PartPossible_h` y la correspondiente conjunción `Disp_W`.

Por tanto:

```text
σ*
→ identificable técnicamente.
```

No es necesario recuperar:

```text
w*
Ways(σ*)
SAMEWAY
```

ni introducir un nuevo identificador técnico de trayectoria.

---

#### 80.4. Límite explícito de esa identificación

La propia auditoría que estableció:

```text
PME-SIGMA01
→ satisfecha
```

limitó expresamente su fuerza.

La realización común demuestra:

```text
co-pertenencia
a una misma realización técnica.
```

Pero no demuestra:

```text
anclaje fenomenológico humano suficiente.
```

Esta limitación es ahora decisiva.

De la identificación:

```text
σ*
=
ejecución técnica concreta
```

no se derivó:

```text
persona determinada
```

ni:

```text
cuerpo determinado
```

ni:

```text
mano determinada
```

ni:

```text
posición corporal
```

ni:

```text
espacio físico inmediato
```

ni:

```text
restricciones mecánicas del entorno.
```

---

#### 80.5. Primera hipótesis candidata — `σ*` como ejecución técnica

Se formula:

```text
H-IDσ-01
```

> La `σ*` comprometida por la reducción y realizada por `EX-PV001-02` es
> únicamente la ejecución técnica concreta del dispositivo.

Esta hipótesis posee apoyo directo en:

```text
PME-SIGMA01
```

porque la unidad probada fue:

```text
misma ejecución técnica.
```

Debe comprobarse si esa identificación permite ejecutar:

```text
E_σ2.
```

---

#### 80.6. Prueba de suficiencia de la ejecución técnica

`E_σ2` pretende observar:

```text
condiciones físicas inmediatas
de mano y brazo
```

para determinar:

```text
ausencia / presencia
de inmovilización o bloqueo físico.
```

Pero una ejecución técnica de `EX-PV001-02` contiene:

```text
aRef
gGamma
terminalX
partPossibleH
x
Out(x)
CR-Term
CompletesStruct
Disp_W
estado S1/S2.
```

No contiene como parte previamente constituida:

```text
mano
brazo
persona
posición corporal
restricción mecánica
espacio físico.
```

Por tanto:

```text
σ*_tech
↛
objeto suficiente
para E_σ2.
```

La ejecución técnica puede ser identificada.

Pero no posee las propiedades materiales que `E_σ2` necesita observar.

---

#### 80.7. Segunda hipótesis candidata — `σ*` como situación material completa

Podría proponerse:

```text
H-IDσ-02
```

> `σ*` debe entenderse como la situación material completa en la que ocurre la
> ejecución de `EX-PV001-02`, incluyendo persona, cuerpo y entorno físico.

Esta interpretación permitiría aparentemente observar:

```text
mano
brazo
bloqueos
condiciones físicas.
```

Sin embargo debe determinarse si esa amplitud estaba ya comprometida antes de
la presente auditoría.

---

#### 80.8. Auditoría histórica de `H-IDσ-02`

La reconstrucción previa no ha localizado una constitución de `σ*` que
individualice:

```text
persona
+
dispositivo
+
cuerpo
+
entorno físico
```

como una única realización material.

Lo que sobrevivió de la eliminación de:

```text
SAMEWAY
w*
Ways(σ*)
```

fue únicamente:

```text
misma realización concreta
```

y la construcción posterior realizó esa unidad mediante:

```text
una misma ejecución técnica.
```

La auditoría correspondiente limitó explícitamente el resultado a:

```text
co-pertenencia técnica.
```

Por tanto no puede inferirse retrospectivamente:

```text
misma realización técnica
=
situación material completa.
```

Se concluye:

```text
H-IDσ-02
→ no sustentada por la constitución previa.
```

---

#### 80.9. Riesgo de ampliación retrospectiva

Si ahora definiéramos:

```text
σ*
:=
ejecución técnica
+
persona
+
mano
+
entorno físico
```

podríamos entonces observar:

```text
Rσ-01.
```

Pero esa operación produciría:

```text
σ*_original
↓
ampliación posterior
↓
σ*_material
```

y no una mera recuperación de contenido anteriormente constituido.

Por tanto:

```text
σ*_material
```

sería una realización enriquecida nueva.

No podría presentarse como si hubiese sido:

```text
la σ*
ya fijada
por EX-PV001-02.
```

Se activa aquí directamente:

```text
NR-Jσ-01.
```

---

#### 80.10. Tercera hipótesis candidata — combinación posterior de dos realizaciones

Podría intentarse:

```text
σ*_tech
+
situación física observada
↓
σ*_combined.
```

Esta vía tampoco resuelve la pérdida.

La investigación eliminó precisamente la posibilidad de satisfacer propiedades
relevantes en realizaciones independientes para después combinarlas.

Si:

```text
CompletesStruct
```

pertenece a:

```text
σ*_tech
```

mientras:

```text
Rσ-01
```

se obtiene en:

```text
σ*_phys
```

no puede suponerse sin fundamento adicional:

```text
σ*_tech
=
σ*_phys.
```

Ni puede construirse retrospectivamente:

```text
σ*_combined
```

únicamente para permitir la conjunción posterior.

Por tanto:

```text
H-IDσ-03
```

> Puede combinarse la ejecución técnica con una situación física observada y
> tratar el resultado como la `σ*` original.

queda falsada.

---

#### 80.11. Resultado inesperado de `ID-σ-01`

La auditoría descubre que la dificultad no consiste simplemente en:

```text
no sabemos dónde mirar
para observar Rσ-01.
```

La dificultad es más profunda:

```text
la σ* previamente constituida
carece del estrato físico corporal
sobre el que Rσ-01 pretende predicarse.
```

Por tanto existe una incompatibilidad de niveles:

```text
σ*
→ individualizada técnicamente

Rσ-01
→ propiedad física corporal.
```

La segunda no puede atribuirse a la primera sin una ampliación de la
realización.

---

#### 80.12. Incidencia sobre `E_σ2`

`E_σ2` había quedado autorizado porque:

```text
E_σ1
→ no localizado

E_σ3
→ no localizado.
```

Pero su derivación presupuso que era posible observar:

```text
condiciones físicas de la misma σ*.
```

`ID-σ-01` muestra que ese presupuesto no está satisfecho.

Por tanto:

```text
FIX-Jσ-01
```

no puede ejecutarse todavía.

Más precisamente:

```text
E_σ2
→ procedimentalmente derivado

pero

E_σ2
→ sin objeto material legítimamente identificado.
```

---

#### 80.13. Revisión de `Rσ-01`

Este resultado obliga a revisar la procedencia de:

```text
Rσ-01
```

sin modificarlo todavía.

`Rσ-01` fue derivado desde:

```text
C_P
↓
C_Act
↓
C_Init
↓
C_Rσ.
```

con:

```text
C_P
=
elevar voluntariamente una mano
desde una posición corporal de reposo.
```

Por tanto el contenido físico corporal de:

```text
Rσ-01
```

procede de la candidata concreta fijada posteriormente mediante:

```text
FIX-PSTAR-01.
```

No procedía de la constitución original de:

```text
σ*.
```

La cadena histórica real queda:

```text
σ*
→ inicialmente individualizada
  como realización técnica

posteriormente:

FIX-PSTAR-01
↓
p* corporal concreta
↓
Rσ-01 físico
```

Así se explica por qué:

```text
σ*
```

no contenía previamente las propiedades necesarias para evaluarlo.

---

#### 80.14. ¿Invalida esto `FIX-PSTAR-01`?

No automáticamente.

`FIX-PSTAR-01` sí satisfizo su obligación de:

```text
seleccionar y congelar
una p*
sin reparación retrospectiva.
```

El problema descubierto no es:

```text
p* fue seleccionada retrospectivamente.
```

El problema es:

```text
la candidata seleccionada
requiere para su evaluación situacional
un estrato de realización
que σ* no tenía constituido.
```

Por tanto:

```text
FIX-PSTAR-01
→ procedimentalmente válido

pero

compatibilidad ontológica
entre C_Rσ y σ*
→ no establecida.
```

---

#### 80.15. ¿Puede cambiarse ahora `p*`?

No.

`NR-PSTAR-01` permanece activa.

No sería admisible:

```text
p* corporal
→ descubre necesidad de mundo físico
↓
sustituir p*
por una acción puramente técnica
que EX-PV001-02 ya soporte.
```

Eso sería una reparación motivada por el resultado de la auditoría.

Por tanto:

```text
C_P
C_Act
C_Init
C_RH
C_Rσ
```

permanecen congelados.

El resultado desfavorable debe conservarse.

---

#### 80.16. ¿Puede ampliarse ahora `σ*`?

Tampoco dentro de la misma prueba.

Podría abrirse posteriormente una nueva realización que incluya:

```text
ejecución técnica
+
situación corporal
+
entorno físico relevante.
```

Pero debería identificarse expresamente como:

```text
nueva realización
```

y someterse nuevamente a las obligaciones de independencia necesarias.

No podría utilizarse para afirmar que:

```text
EX-PV001-02
```

ya poseía ese contenido.

Por tanto:

```text
ampliación de σ*
→ posible actuación futura

ampliación de σ*
↛ reparación admisible
  de la realización actual.
```

---

#### 80.17. Resultado de `ID-σ-01`

Se obtiene:

```text
RS-QPP-17
```

> La `σ*` efectivamente individualizada y realizada por `EX-PV001-02` queda
> identificada como una ejecución técnica concreta suficiente para garantizar
> la co-pertenencia de `PartPossible_h` y `CompletesStruct`, pero no como una
> situación material completa que incluya persona, cuerpo y condiciones físicas
> inmediatas. En consecuencia, `Rσ-01` no puede evaluarse sobre esa `σ*` sin
> ampliar retrospectivamente la realización o constituir una realización nueva.

Formalmente:

```text
σ*
=
σ*_tech
```

en el alcance actualmente demostrado.

Y:

```text
Rσ-01
→ exige estrato físico corporal.
```

Por tanto:

```text
σ*_tech
↛
objeto suficiente para evaluar Rσ-01.
```

---

#### 80.18. Resolución de `ID-σ-01`

`ID-σ-01` queda resuelta parcialmente de manera favorable y parcialmente de
manera negativa.

Puede identificarse:

```text
qué σ* existe.
```

La respuesta es:

```text
ejecución técnica concreta de EX-PV001-02.
```

Pero no puede identificarse:

```text
una situación material física
que sea ya esa misma σ*.
```

Por tanto:

```text
ID-σ-01
→ resuelta

identificación técnica
→ conseguida

identificación material suficiente para E_σ2
→ fallida.
```

---

#### 80.19. Incidencia sobre `J_σ`

El estado pasa a ser:

```text
J_H
⊨
C_RH
→ satisfecho
```

pero:

```text
J_σ
⊨
C_Rσ
→ no evaluable todavía
  sobre la σ* actualmente constituida.
```

Esto es más preciso que:

```text
J_σ
→ simplemente pendiente.
```

La pérdida ahora es:

```text
ausencia de sujeto realizativo
con el alcance material requerido
por C_Rσ.
```

---

#### 80.20. Incidencia sobre `PartPossible_h(σ*)`

La cadena pretendida era:

```text
J_H
⊨
C_RH

J_σ
⊨
C_Rσ
        ↓
Possible_h(p*,σ*)
        ↓
PartPossible_h(σ*) = true.
```

Ahora se obtiene:

```text
J_H
⊨
C_RH
→ sí
```

pero:

```text
C_Rσ
```

no dispone de un sujeto materialmente constituido dentro de:

```text
σ*_tech.
```

Por tanto:

```text
Possible_h(p*,σ*)
```

no puede derivarse.

Y:

```text
PartPossible_h(σ*) = true
```

continúa sin justificación independiente.

---

#### 80.21. Revisión de la localización de la pérdida

Antes de `ID-σ-01`, la pérdida parecía ser:

```text
falta evidencia física sobre σ*.
```

Después de la auditoría, la formulación correcta es:

```text
falta una realización
cuyo alcance permita predicar conjuntamente:

participación humana corporal
+
estructura técnica de completabilidad.
```

La pérdida no consiste ya únicamente en:

```text
observar mejor.
```

Consiste en:

```text
qué cuenta como realización suficiente
para sostener ambas ramas.
```

---

#### 80.22. Nueva pregunta reducida

Se deriva:

```text
Q-PP-09
```

> ¿Exige `PartPossible_h` que la realización `σ*` incluya constitutivamente el
> estrato material necesario para la participación humana considerada, o puede
> justificarse la participación mediante un fundamento externo relacionado con
> la ejecución técnica sin que dicho estrato pertenezca a `σ*`?

Esta pregunta es anterior a cualquier nueva observación física.

Debe resolverse antes de decidir si:

```text
σ*
```

debe ampliarse o si:

```text
J_σ
```

puede permanecer externo.

---

#### 80.23. Dos vías lógicamente abiertas

La investigación deja provisionalmente dos posibilidades.

##### Vía A — pertenencia constitutiva

```text
PartPossible_h(σ*)
```

exige que:

```text
las condiciones necesarias
para la participación humana
formen parte de la propia σ*.
```

Entonces la realización actual:

```text
σ*_tech
```

sería insuficiente para justificar:

```text
PartPossible_h.
```

Sería necesaria una nueva realización más amplia.

---

##### Vía B — fundamento externo relacionado

Podría ocurrir que:

```text
PartPossible_h(σ*)
```

admita un fundamento externo:

```text
J_H
+
J_ext
```

capaz de establecer que una participación humana puede relacionarse
legítimamente con:

```text
σ*_tech
```

sin que persona, cuerpo y entorno físico sean constituyentes internos de
`σ*`.

En ese caso no sería necesario ampliar materialmente la realización.

Pero debería derivarse una relación independiente suficiente entre:

```text
participación humana
```

y:

```text
σ*_tech.
```

Esa relación no está actualmente establecida.

---

#### 80.24. Prohibición de decidir entre las vías por conveniencia

No puede elegirse:

```text
Vía A
```

porque facilite una futura observación física.

Tampoco:

```text
Vía B
```

porque permita conservar intacto `EX-PV001-02`.

La decisión debe derivarse del contenido previamente reclamado por:

```text
PartPossible_h
```

y:

```text
p*.
```

No del coste de modificar la realización.

---

#### 80.25. Suspensión de `E_σ2`

Hasta resolver:

```text
Q-PP-09
```

se registra:

```text
E_σ2
→ SUSPENDIDO.
```

No:

```text
eliminado.
```

La forma observacional derivada continúa siendo válida condicionalmente.

Pero no puede ejecutarse mientras no exista:

```text
un sujeto de observación
legítimamente identificado
como la realización pertinente.
```

Del mismo modo:

```text
FIX-Jσ-01
→ suspendido.
```

---

#### 80.26. Preservación de los resultados anteriores

La nueva pérdida no invalida:

```text
RS-QPP-01 ... RS-QPP-16
```

en aquello que establecieron dentro de sus respectivos alcances.

En particular permanecen:

```text
genealogía de PartPossible_h
→ reconstruida
```

```text
p*
→ inicialmente subespecificada
```

```text
Spec(p*)
→ derivada
```

```text
FIX-PSTAR-01
→ ejecutado
```

```text
J_H
⊨
C_RH
→ satisfecho.
```

Lo que se ha descubierto es una nueva restricción sobre la posibilidad de
componer:

```text
C_RH
```

y:

```text
C_Rσ
```

sobre la misma realización.

---

#### 80.27. Resultado principal

Se consolida provisionalmente:

```text
RS-QPP-17
```

> La individualización técnica de `σ*` es suficiente para la unidad requerida
> por `PME-SIGMA01`, pero insuficiente para atribuirle directamente propiedades
> físicas corporales introducidas posteriormente por la especificación concreta
> de `p*`. La ejecución de `E_σ2` sobre una situación material externa no puede
> presentarse como observación de la misma `σ*` sin una justificación adicional
> de pertenencia o relación.

Y se deriva:

```text
OP-QPP-06
```

> Antes de continuar la constitución de `J_σ` deberá determinarse si las
> condiciones materiales necesarias para `p*` deben pertenecer
> constitutivamente a `σ*` o pueden proporcionar fundamento desde fuera de la
> realización técnica mediante una relación independientemente justificada.

---

#### Estado

```text
ID-σ-01
→ resuelta

σ*
→ identificada como ejecución técnica concreta

σ* como situación material completa
→ no establecida

H-IDσ-01
→ sobrevive

H-IDσ-02
→ no sustentada

H-IDσ-03
→ falsada

RS-QPP-17
→ establecido

OP-QPP-06
→ derivada

J_H ⊨ C_RH
→ satisfecho

C_Rσ
→ permanece congelado

J_σ ⊨ C_Rσ
→ no evaluable todavía sobre σ*_tech

E_σ2
→ derivado
→ suspendido

FIX-Jσ-01
→ suspendido

NR-PSTAR-01
→ preservada

NR-Jσ-01
→ preservada

EX-PV001-02
→ sin modificación

PartPossible_h(σ*) = true
→ todavía no justificado independientemente

Q-PP-09
→ abierta.
```

---

#### Punto de continuación

La siguiente auditoría deberá resolver:

```text
Q-PP-09.
```

La pregunta exacta será:

> **Cuando `PartPossible_h` afirma que «la participación humana considerada
> puede formar parte de la realización», ¿qué fuerza tiene exactamente la
> expresión «formar parte de la realización»?**

Deberá determinarse si implica necesariamente:

```text
condiciones humanas y materiales
⊆
σ*
```

o si permite:

```text
fundamento humano/material externo
+
relación justificable con σ*_tech.
```

La decisión deberá reconstruirse desde la propia genealogía de
`PartPossible_h` y no desde las necesidades introducidas posteriormente por
`FIX-PSTAR-01`.

Hasta resolver esta cuestión no debe ejecutarse ninguna nueva observación
física ni modificarse `EX-PV001-02`.

---

### 81. Auditoría de `Q-PP-09` — Fuerza de «formar parte de la realización» en `PartPossible_h`

#### Punto de partida

`RS-QPP-17` ha establecido:

```text
σ*
→ individualizada técnicamente
  como ejecución concreta de EX-PV001-02
```

pero:

```text
C_Rσ
→ exige una propiedad física corporal
```

que no puede predicarse directamente de:

```text
σ*_tech
```

sin ampliar retrospectivamente la realización.

Como consecuencia se abrió:

```text
Q-PP-09
```

> ¿Exige `PartPossible_h` que la realización `σ*` incluya constitutivamente el
> estrato material necesario para la participación humana considerada, o puede
> justificarse la participación mediante un fundamento externo relacionado con
> la ejecución técnica sin que dicho estrato pertenezca a `σ*`?

La cuestión debe resolverse reconstruyendo exclusivamente el contenido
previamente atribuido a:

```text
PartPossible_h
```

y, en particular, la fuerza de:

```text
“puede formar parte de la realización”.
```

No puede decidirse en función de cuál de las dos soluciones permita conservar
más fácilmente:

```text
EX-PV001-02.
```

---

#### 81.1. Formulación histórica superviviente de `PartPossible_h`

La reconstrucción desde `p*` produjo dos pretensiones:

```text
PartPossible_h
```

y:

```text
CompletesStruct.
```

La primera quedó formulada como:

```text
la participación humana considerada
puede formar parte de la realización.
```

La segunda como:

```text
la misma realización posee
una continuación estructural
capaz de completar p*.
```

Por tanto, desde su introducción:

```text
PartPossible_h
```

no fue definida simplemente como:

```text
existe alguna capacidad humana
en algún lugar externo.
```

Su contenido incorporaba explícitamente una referencia a:

```text
la realización.
```

---

#### 81.2. Primera consecuencia semántica

De:

```text
PartPossible_h(σ*)
```

no puede eliminarse completamente:

```text
σ*.
```

Una interpretación de la forma:

```text
existe una persona capaz de realizar p*
```

sin ninguna relación con:

```text
σ*
```

sería insuficiente.

Eso ya ha quedado confirmado por la separación entre:

```text
J_H
```

y:

```text
J_σ.
```

Por tanto:

```text
capacidad humana abstracta
↛
PartPossible_h(σ*).
```

Debe existir alguna relación justificativa entre:

```text
participación humana
```

y:

```text
realización σ*.
```

---

#### 81.3. ¿Implica «formar parte» pertenencia constitutiva efectiva?

Debe distinguirse:

```text
la participación humana
forma parte de σ*
```

de:

```text
la participación humana
puede formar parte de σ*.
```

`PartPossible_h` utiliza la segunda forma.

Por tanto no afirma necesariamente:

```text
participación humana actual
⊆
σ*.
```

Ni exige:

```text
una persona ejecutando efectivamente p*
como constituyente presente de σ*.
```

La investigación ya había separado:

```text
posibilidad de participación
```

de:

```text
ejecución efectiva.
```

Por tanto:

```text
PartPossible_h(σ*)
↛
participación humana actualmente realizada
dentro de σ*.
```

---

#### 81.4. Primer intento — pertenencia material constitutiva fuerte

Se formula:

```text
H-PP-IN01
```

> `PartPossible_h(σ*)` exige que persona, cuerpo y condiciones físicas
> materiales formen parte constitutiva de `σ*`.

Si esta hipótesis fuera correcta:

```text
σ*
```

debería contener necesariamente:

```text
persona
cuerpo
mano
condiciones físicas de participación.
```

Sin embargo, esa exigencia no aparece en la formulación original de:

```text
PartPossible_h.
```

La formulación exige:

```text
posibilidad de formar parte
```

no:

```text
presencia constitutiva actual
de todos los soportes materiales
de esa participación.
```

Por tanto la hipótesis añade más contenido que el previamente establecido.

Se obtiene:

```text
H-PP-IN01
→ falsada en su forma fuerte.
```

No puede derivarse que:

```text
persona
+
cuerpo
+
entorno físico
⊆
σ*
```

sean constituyentes necesarios de toda realización capaz de satisfacer
`PartPossible_h`.

---

#### 81.5. Alcance de la falsación

La falsación anterior no establece:

```text
las condiciones materiales
son irrelevantes.
```

Establece únicamente:

```text
no se ha derivado
que deban pertenecer constitutivamente
a σ* como partes actuales.
```

Todavía debe existir fundamento suficiente para afirmar:

```text
la participación humana puede incorporarse
o entrar legítimamente en relación con σ*.
```

La cuestión pasa a ser qué fuerza posee esa relación.

---

#### 81.6. Segundo intento — relación externa arbitraria

Se formula el extremo contrario:

```text
H-PP-EXT01
```

> Basta con que exista externamente una persona capaz de `p*`; no es necesaria
> ninguna propiedad ni relación adicional respecto de `σ*`.

Esta hipótesis tampoco sobrevive.

Si fuera válida:

```text
J_H
⊨
C_RH
```

bastaría por sí solo para:

```text
PartPossible_h(σ*) = true.
```

Pero entonces cualquier realización técnica podría satisfacer
`PartPossible_h` siempre que existiera externamente alguna persona capaz de la
acción, incluso si la realización no admitiera ninguna participación de esa
clase.

La referencia:

```text
“formar parte de la realización”
```

quedaría vacía.

Por tanto:

```text
H-PP-EXT01
→ falsada.
```

---

#### 81.7. Forma intermedia superviviente

Después de eliminar ambos extremos queda:

```text
participación humana
→ no necesita ser constituyente actual de σ*

pero

participación humana
→ debe poder incorporarse legítimamente
  a la realización concreta σ*.
```

La fuerza mínima superviviente de:

```text
“puede formar parte”
```

es, por tanto:

```text
σ*
debe admitir la incorporación
de la participación humana considerada
sin dejar de ser la misma realización pertinente.
```

Esto es más fuerte que:

```text
capacidad humana externa.
```

Pero más débil que:

```text
persona/cuerpo actualmente contenidos
como partes constitutivas de σ*.
```

---

#### 81.8. ¿Existía ya una relación de incorporación?

Debe comprobarse ahora si la investigación conservó alguna relación que
realizara:

```text
participación humana
↔
σ*.
```

Históricamente se investigaron:

```text
Attach
Match
Join
compatibilidad
transmisión
posiciones
fronteras
adscripción de referentes.
```

Estas estructuras fueron eliminadas porque cada una trasladaba la obligación a
una relación adicional cuya legitimidad debía volver a justificarse.

No sobrevivió una necesidad independiente de:

```text
Attach
Match
Join
```

ni de una interfaz general de transmisión.

Por tanto no puede recuperarse ahora ninguna de ellas como si hubiese quedado
consolidada.

---

#### 81.9. Consecuencia de esas eliminaciones

La eliminación de esas relaciones mostró:

```text
no se había demostrado
la necesidad de una maquinaria relacional general.
```

Pero no estableció:

```text
ninguna relación entre participación
y realización es necesaria.
```

Ese segundo enunciado sería más fuerte.

La pérdida actual hace visible precisamente el residuo que entonces no necesitó
operacionalizarse:

```text
si PartPossible_h habla de
“formar parte de σ*”

debe existir alguna condición
que haga legítima esa atribución.
```

Por tanto:

```text
Attach/Match/Join
→ siguen eliminados

pero

relación justificativa mínima
participación ↔ σ*
→ no eliminable.
```

---

#### 81.10. ¿Puede esa relación ser puramente conceptual?

Supóngase:

```text
Rel_Hσ
```

definida únicamente como:

```text
“la participación humana
está conceptualmente relacionada con σ*”.
```

Esta formulación no basta.

No permitiría distinguir:

```text
σ1
→ admite efectivamente esa participación
```

de:

```text
σ2
→ sólo es descrita conceptualmente
   junto a esa participación.
```

Reaparecería la misma pérdida observada previamente con:

```text
mera copresencia
mera denominación
mera compatibilidad.
```

Por tanto:

```text
relación puramente nominal
↛
PartPossible_h.
```

---

#### 81.11. Contenido mínimo de la relación superviviente

La relación debe tener fuerza suficiente para establecer:

```text
la participación correspondiente a p*
puede entrar en la realización σ*
bajo condiciones compatibles
con la identidad de esa misma realización.
```

Puede representarse provisionalmente como:

```text
Admits_h(σ*,p*)
```

entendido exclusivamente como lugar lógico para:

```text
σ* admite la participación humana
correspondiente a p*.
```

Esta notación no introduce todavía:

```text
una función técnica
una entidad
una interfaz
una nueva PME
ni una modificación de EX-PV001-02.
```

Sólo explicita el contenido que la expresión:

```text
“puede formar parte”
```

ya exige justificar.

---

#### 81.12. Auditoría de circularidad de `Admits_h`

No sería válido definir:

```text
Admits_h(σ*,p*)
:=
PartPossible_h(σ*).
```

Eso sólo cambiaría el nombre de la pérdida.

Tampoco:

```text
Admits_h
=
Disp_W.
```

La dirección válida deberá ser:

```text
fundamentos independientes
↓
Admits_h(σ*,p*)
↓
PartPossible_h(σ*) = true.
```

Por tanto:

```text
Admits_h
```

es una conclusión intermedia que debe derivarse, no una premisa estipulada.

---

#### 81.13. Incidencia sobre `J_H`

`J_H` ha establecido:

```text
existe capacidad humana suficiente
para iniciar C_Act.
```

Esto constituye una parte necesaria del fundamento.

Pero no establece:

```text
σ*
admite esa participación.
```

Por tanto:

```text
J_H
→ conserva validez

J_H
↛
Admits_h(σ*,p*).
```

La rama humana no necesita repetirse ni modificarse.

---

#### 81.14. Revisión de `J_σ`

Hasta ahora se había formulado `J_σ` como fundamento de:

```text
ausencia de bloqueo físico
dentro de σ*.
```

Esa formulación procedía de:

```text
C_Rσ
```

derivado para la candidata corporal concreta.

`ID-σ-01` mostró que:

```text
σ*_tech
```

no contiene un estrato físico sobre el que predicar directamente ese requisito.

La nueva auditoría permite precisar el problema:

```text
J_σ
```

no necesita demostrar necesariamente:

```text
una propiedad física interna de σ*.
```

Debe demostrar algo más fundamental:

```text
σ*_tech
admite una forma legítima
de incorporación de la participación
correspondiente a p*.
```

Sólo si esa admisión depende de condiciones físicas externas habrá que
fundamentarlas posteriormente.

---

#### 81.15. ¿Supone esto modificar `C_Rσ`?

No todavía.

`C_Rσ` permanece congelado por:

```text
FIX-PSTAR-01.
```

El resultado actual no autoriza:

```text
eliminar Rσ-01
```

ni:

```text
sustituirlo por Admits_h.
```

Lo que se ha descubierto es que la cadena:

```text
C_Rσ
→ propiedad interna de σ*
```

había presupuesto una forma de pertenencia más fuerte que la genealogía de
`PartPossible_h` exige necesariamente.

Por tanto debemos distinguir:

```text
requisito material de la participación
```

de:

```text
lugar ontológico donde dicho requisito
debe quedar satisfecho.
```

`FIX-PSTAR-01` fijó lo primero.

No fijó necesariamente lo segundo.

---

#### 81.16. Relectura no reparadora de `Rσ-01`

`Rσ-01` afirma:

> Las condiciones físicas inmediatas de la realización no inmovilizan ni
> bloquean la mano considerada de modo que resulte imposible iniciar su
> elevación voluntaria.

La expresión:

```text
“de la realización”
```

fue introducida al clasificar:

```text
Req_σ(p*).
```

Pero la auditoría actual muestra que no estaba previamente establecido que:

```text
condiciones físicas
```

debieran ser constituyentes internos de:

```text
σ*_tech.
```

Por tanto existe una posible sobreespecificación en la redacción de:

```text
Rσ-01.
```

No se corrige todavía.

Se registra la posible pérdida y se audita su núcleo.

---

#### 81.17. Núcleo independiente de `Rσ-01`

Si retiramos únicamente la atribución ontológica:

```text
“de la realización”
```

sin retirar la condición material fijada, queda:

```text
Rmat-01
```

> Las condiciones físicas pertinentes para la incorporación de la
> participación no inmovilizan ni bloquean la mano considerada de modo que
> resulte imposible iniciar su elevación voluntaria.

El contenido material permanece:

```text
ausencia de bloqueo.
```

Lo que deja de presuponerse es:

```text
esas condiciones físicas
son partes internas de σ*_tech.
```

Debe auditarse si esta reducción conserva íntegramente el requisito fijado o si
constituiría una reparación prohibida.

---

#### 81.18. Prueba de eliminación de la pertenencia interna

Supóngase una realización:

```text
σ*_tech
```

que ofrece un punto legítimo de participación humana, mientras las condiciones
corporales concretas que permiten utilizarlo pertenecen al contexto material en
el que se ejecuta.

Si:

```text
la participación puede incorporarse
a σ*_tech
```

y:

```text
las condiciones materiales relevantes
permiten iniciar p*
```

entonces el contenido de:

```text
PartPossible_h
```

puede quedar satisfecho sin que:

```text
mano
brazo
entorno físico
```

sean componentes internos del dispositivo técnico.

Por tanto la pertenencia material interna no es necesaria.

La eliminación de:

```text
condiciones físicas ⊆ σ*_tech
```

es conservativa respecto del contenido mínimo de:

```text
“puede formar parte”.
```

---

#### 81.19. Prueba inversa — ¿basta el contexto material externo?

No.

Aunque el contexto permita físicamente:

```text
C_Act
```

todavía debe existir una relación legítima entre esa acción y:

```text
σ*_tech.
```

De otro modo tendríamos:

```text
persona puede elevar una mano
+
entorno no lo impide
+
ejecución técnica cualquiera
```

y se concluiría indebidamente:

```text
PartPossible_h(σ*) = true.
```

Por tanto se necesitan dos componentes distintos:

```text
J_mat
→ condiciones materiales
  permiten la participación
```

y:

```text
J_rel
→ σ*_tech admite
  esa participación como pertinente
  a la realización.
```

La forma mínima pasa a ser:

```text
J_H
+
J_mat
+
J_rel
↓
PartPossible_h(σ*) = true.
```

---

#### 81.20. ¿Había quedado ya `J_rel` establecido?

Debe intentarse reducirlo utilizando resultados previos.

`PME-SIGMA01` establece:

```text
PartPossible_h
y
CompletesStruct
```

sobre una misma ejecución técnica.

Pero utiliza:

```text
PartPossible_h
```

como dato ya suministrado.

Por tanto no puede justificar:

```text
J_rel
```

sin circularidad.

Tampoco:

```text
g_Γ
Out
CR-Term
CompletesStruct
```

contienen por sí mismos una conexión con la participación corporal concreta
fijada posteriormente.

Por tanto:

```text
J_rel
→ no localizado todavía.
```

---

#### 81.21. Resultado de la comparación entre las dos vías

La vía:

```text
A
→ condiciones humanas/materiales
  deben pertenecer constitutivamente a σ*
```

resulta demasiado fuerte.

No se deriva de:

```text
“puede formar parte”.
```

La vía:

```text
B
→ fundamento externo
  sin ninguna relación constitutiva o admisiva
  con σ*
```

resulta demasiado débil.

Vacía la referencia a:

```text
la realización.
```

Sobrevive una tercera forma:

```text
C
```

```text
la participación humana
no necesita estar actualmente contenida
como parte material interna de σ*

pero

debe existir fundamento independiente
de que σ* admite esa participación

y

las condiciones materiales pertinentes
deben permitir su iniciación.
```

---

#### 81.22. Forma mínima superviviente de `PartPossible_h`

Se obtiene la siguiente estructura:

```text
J_H
→ existe capacidad humana pertinente

J_mat
→ las condiciones materiales pertinentes
  permiten iniciar p*

J_rel
→ la realización σ*
  admite esa participación
        ↓
PartPossible_h(σ*) = true.
```

Esta forma conserva:

```text
referencia efectiva a σ*
```

sin exigir:

```text
persona
cuerpo
entorno
⊆
σ*_tech.
```

---

#### 81.23. Consecuencia sobre `E_σ2`

`E_σ2` había sido derivado para observar:

```text
condiciones físicas de la misma σ*.
```

La auditoría actual muestra que esa formulación era demasiado fuerte.

La observación física puede seguir siendo pertinente para:

```text
J_mat.
```

Pero ya no necesita pretender observar:

```text
propiedades físicas internas de σ*_tech.
```

Por tanto:

```text
E_σ2
→ no eliminado
```

pero:

```text
E_σ2
→ reclasificado provisionalmente
  como candidato para J_mat
```

y no como fundamento completo de:

```text
J_σ.
```

---

#### 81.24. Consecuencia sobre la suspensión de `FIX-Jσ-01`

`FIX-Jσ-01` fue suspendido porque carecía de un objeto material que pudiera
identificarse como:

```text
la misma σ*.
```

Ese impedimento desaparece parcialmente si la evidencia física debe recaer
sobre:

```text
contexto material pertinente
```

y no sobre:

```text
σ*_tech como objeto físico.
```

Sin embargo, todavía no puede ejecutarse porque falta establecer:

```text
J_rel.
```

Si no existe relación legitimada entre:

```text
p*
```

y:

```text
σ*_tech
```

la observación material seguiría siendo probatoriamente irrelevante para:

```text
PartPossible_h.
```

Por tanto:

```text
E_σ2
→ continúa suspendido

pero

motivo de suspensión
→ actualizado.
```

---

#### 81.25. Nueva localización de la pérdida

La pérdida ya no es:

```text
σ* carece de cuerpo.
```

Ésa era consecuencia de una interpretación demasiado fuerte de pertenencia.

La pérdida mínima es ahora:

```text
¿qué fundamento independiente
establece que la participación corporal
fijada como p*
es una participación admisible
de σ*_tech?
```

Formalmente:

```text
J_rel
→ ?
```

Ésta es anterior a:

```text
J_mat.
```

---

#### 81.26. ¿Puede `A` proporcionar `J_rel`?

Debe descartarse una vía inmediata.

`A` constituye la variación operacional de:

```text
EP-01
```

y produce mediante:

```text
g_Γ
```

un referente:

```text
x.
```

Pero la candidata corporal concreta:

```text
p*
=
elevar una mano
```

fue fijada mucho después y de forma independiente.

No existe actualmente una derivación:

```text
A
↓
admisión de elevar una mano
como participación en σ*_tech.
```

Por tanto:

```text
A
↛
J_rel
```

con la construcción actualmente disponible.

---

#### 81.27. ¿Puede `S1/S2` proporcionar `J_rel`?

`S1` y `S2` estructuran la realización técnica.

Pero ninguna de las propiedades ya demostradas de:

```text
S1
S2
```

establece:

```text
entrada humana corporal
```

ni:

```text
admisión de C_Act.
```

De hecho, la clausura de `S2` fue demostrada precisamente como ausencia de
nueva entrada o elección después de la continuación.

Por tanto:

```text
S1/S2
↛
J_rel
```

para la `p*` corporal actualmente congelada.

---

#### 81.28. ¿Implica esto que la candidata `p*` sea desfavorable?

Todavía no de manera definitiva.

Se ha establecido:

```text
J_rel
→ no localizado
en la construcción existente.
```

Esto significa que la candidata fijada:

```text
elevar una mano
```

no dispone todavía de un punto de incorporación justificado a:

```text
σ*_tech.
```

Puede ocurrir que una propiedad ya existente pero todavía no auditada proporcione
ese fundamento.

Pero no puede suponerse.

Por tanto:

```text
candidata p*
→ en riesgo probatorio
```

pero todavía:

```text
no falsada definitivamente.
```

---

#### 81.29. Resultado principal

Se obtiene:

```text
RS-QPP-18
```

> La expresión `PartPossible_h(σ*)` no exige que persona, cuerpo y entorno
> físico sean constituyentes materiales actuales de `σ*`, pero tampoco puede
> reducirse a una capacidad humana externa sin relación con la realización. Su
> contenido mínimo exige que la participación humana correspondiente a `p*`
> sea admisible respecto de la misma `σ*` y que las condiciones materiales
> pertinentes permitan su iniciación.

La estructura mínima queda:

```text
J_H
+
J_rel
+
J_mat
↓
PartPossible_h(σ*) = true.
```

donde:

```text
J_H
→ capacidad humana pertinente
```

```text
J_rel
→ admisión de esa participación
  por la realización σ*
```

```text
J_mat
→ condiciones materiales pertinentes
  permiten iniciarla.
```

---

#### 81.30. Resolución de `Q-PP-09`

La alternativa inicial:

```text
A
→ pertenencia constitutiva material completa
```

frente a:

```text
B
→ fundamento completamente externo
```

era una falsa dicotomía.

Se obtiene:

```text
Q-PP-09
→ RESUELTA
```

mediante una tercera forma:

```text
participación no necesariamente
materialmente interna a σ*

pero

necesariamente relacionada
de forma justificable con σ*
```

junto con:

```text
condiciones materiales externas
suficientes para su iniciación.
```

---

#### 81.31. Incidencia sobre `Rσ-01`

La auditoría descubre que:

```text
Rσ-01
```

combina dos cuestiones que deben mantenerse separadas:

```text
condición material
```

y:

```text
atribución de esa condición
a la propia realización.
```

Su núcleo material permanece congelado:

```text
ausencia de bloqueo
para iniciar C_Act.
```

Pero queda cuestionada la necesidad de que ese bloqueo sea una propiedad
interna de:

```text
σ*_tech.
```

No se modifica todavía `Rσ-01`.

Se registra:

```text
Rσ-01
→ pendiente de reducción conservativa
  contra RS-QPP-18.
```

---

#### 81.32. Nueva obligación

Se deriva:

```text
OP-QPP-07
```

> Antes de reactivar `E_σ2` deberá auditarse si la construcción existente de
> `EX-PV001-02` contiene algún fundamento independiente que permita afirmar que
> la participación corporal concreta fijada como `p*` es admitida como una
> participación pertinente de `σ*_tech`.

Este fundamento será:

```text
J_rel.
```

No podrá consistir simplemente en:

```text
PartPossible_h = true
```

porque ésa es precisamente la conclusión que se pretende justificar.

Tampoco podrá derivarse de:

```text
Disp_W
```

ni de:

```text
CompletesStruct.
```

---

#### 81.33. Criterio de éxito para `J_rel`

`J_rel` quedará constituido sólo si puede localizarse una propiedad previa o
independiente:

```text
P_rel
```

tal que:

```text
P_rel
→ pertenece a la constitución
  de σ*_tech
```

o a una relación previamente justificada con ella;

y:

```text
P_rel
⊨
la participación correspondiente a C_Act
puede incorporarse legítimamente
a σ*_tech.
```

Sin utilizar:

```text
PartPossible_h
Disp_W
resultado favorable.
```

---

#### 81.34. Criterio de fracaso para `J_rel`

Si la construcción sólo contiene:

```text
A
g_Γ
x
Out
CR-Term
CompletesStruct
S1
S2
```

sin ninguna propiedad que conecte:

```text
C_Act
```

con:

```text
σ*_tech,
```

deberá registrarse:

```text
J_rel
→ no constituido.
```

En ese caso la candidata concreta fijada por:

```text
FIX-PSTAR-01
```

resultará desfavorable respecto de la realización actual.

La regla de no reparación impedirá:

```text
cambiar p*
```

para buscar una acción que sí encaje.

---

#### 81.35. Estado

```text
Q-PP-09
→ resuelta

pertenencia material interna fuerte
→ no necesaria

fundamento humano totalmente externo
→ insuficiente

forma intermedia
→ superviviente

RS-QPP-18
→ establecido

J_H
→ constituido
→ satisfecho

J_rel
→ nueva pérdida inmediata

J_mat
→ todavía pendiente

Rσ-01
→ congelado
→ pendiente de auditoría reductiva

E_σ2
→ reclasificado provisionalmente
  como candidato a J_mat

E_σ2
→ continúa suspendido

FIX-Jσ-01
→ continúa suspendido

σ*_tech
→ conservada

EX-PV001-02
→ sin modificación

NR-PSTAR-01
→ preservada

PartPossible_h(σ*) = true
→ todavía no justificado

OP-QPP-07
→ derivada.
```

---

#### Punto de continuación

La siguiente auditoría debe concentrarse exclusivamente en:

```text
J_rel.
```

La pregunta será:

> **¿Contiene `EX-PV001-02`, antes e independientemente de
> `PartPossible_h`, alguna estructura que autorice considerar la acción corporal
> concreta `C_Act` —iniciar la elevación de la mano derecha— como una
> participación admisible de la realización técnica `σ*`?**

Deberán auditarse al menos:

```text
A
S1
transición S1 → S2
g_Γ
estructura de entrada del componente
```

sin modificar ninguna de ellas.

Si ninguna contiene ese vínculo, deberá registrarse el resultado desfavorable de
la candidata congelada antes de considerar cualquier nueva realización.

---

### 82. Auditoría constitutiva final de `J_rel`

#### 82.1. Punto de partida

`RS-QPP-18` ha establecido como forma mínima superviviente:

```text
J_H
+
J_rel
+
J_mat
↓
PartPossible_h(σ*) = true.
```

con:

```text
J_H
→ constituido
→ satisfecho
```

y:

```text
J_rel
→ pérdida inmediata pendiente
```

mientras:

```text
J_mat
→ todavía pendiente.
```

La obligación:

```text
OP-QPP-07
```

exige auditar, antes de reactivar cualquier evaluación material, si la construcción existente de:

```text
EX-PV001-02
```

contiene alguna propiedad previa o independientemente constituida que conecte:

```text
C_Act
```

con:

```text
σ*_tech
```

como participación de esa realización.

La auditoría debe realizarse:

```text
sin modificar EX-PV001-02
sin modificar σ*_tech
sin modificar FIX-PSTAR-01
sin modificar C_Act
sin utilizar PartPossible_h
sin utilizar Disp_W
sin utilizar el resultado favorable.
```

Se examinarán exclusivamente las estructuras ya prescritas:

```text
A
S1
transición S1 → S2
g_Γ
estructura de entrada del componente.
```

---

#### 82.2. Auditoría de `A`

`A` pertenece a la estructura probatoria de:

```text
EP-01
```

y su papel dentro de `EX-PV001-02` consiste en alimentar:

```text
g_Γ
```

para producir:

```text
x.
```

La cadena constituida es:

```text
A_repr
↓
g_Γ
↓
x.
```

La candidata corporal:

```text
C_Act
=
iniciar la elevación de la mano derecha
```

fue fijada posteriormente mediante:

```text
FIX-PSTAR-01
```

y de forma independiente de:

```text
A
g_Γ
x
σ*.
```

No existe en la construcción una relación previamente constituida de la forma:

```text
A
↓
C_Act forma parte de σ*_tech.
```

Por tanto:

```text
A
↛
J_rel.
```

---

#### 82.3. Auditoría de `S1`

`S1` pertenece constitutivamente a la realización técnica.

Permite:

```text
introducción de A
```

y precede a la continuación técnica hacia:

```text
S2.
```

Sin embargo ninguna propiedad previamente establecida de:

```text
S1
```

individualiza:

```text
C_Act
```

como entrada corporal humana ni como componente de:

```text
σ*_tech.
```

No existe:

```text
S1
↓
C_Act forma parte de σ*_tech.
```

Por tanto:

```text
S1
↛
J_rel.
```

---

#### 82.4. Auditoría de la transición `S1 → S2`

La transición técnica previamente constituida posee la forma:

```text
S1
↓
obtención de x
↓
continuación
↓
S2.
```

No posee la forma:

```text
S1
↓
C_Act
↓
S2.
```

La clausura de la continuación fue establecida precisamente de modo que no existiera una nueva entrada o elección posterior utilizada para producir el resultado.

Por tanto, introducir ahora:

```text
C_Act
```

como transición constitutiva entre:

```text
S1
```

y:

```text
S2
```

modificaría retrospectivamente la realización congelada.

Se obtiene:

```text
S1 → S2
↛
J_rel.
```

---

#### 82.5. Auditoría de `g_Γ`

`g_Γ` fue constituida como una transformación técnica:

```text
g_Γ :
A_repr
→
X.
```

Su función consiste exclusivamente en obtener:

```text
x
```

a partir de:

```text
A_repr.
```

No contiene como dominio, codominio, entrada, salida ni condición constitutiva:

```text
C_Act.
```

Tampoco existe una relación previamente derivada:

```text
g_Γ
↓
admisión de C_Act
como participación de σ*_tech.
```

Por tanto:

```text
g_Γ
↛
J_rel.
```

---

#### 82.6. Auditoría de la estructura de entrada del componente

La construcción de:

```text
EX-PV001-02
```

recibe inicialmente como dependencias externas:

```text
aRef
gGamma.
```

La estructura técnica posterior incorpora además las operaciones necesarias para realizar:

```text
A_repr
↓
g_Γ
↓
x
↓
Out(x)
↓
CR-Term
↓
CompletesStruct.
```

Pero:

```text
C_Act
```

no aparece constituida como:

```text
entrada del componente
evento de entrada
parámetro de la realización
transición
operación técnica
ni condición constitutiva de σ*_tech.
```

Introducirla ahora como alguno de esos elementos produciría una modificación retrospectiva de:

```text
EX-PV001-02
```

y vulneraría:

```text
NR-PSTAR-01
```

junto con las restricciones ya derivadas contra la reparación de la realización actual.

Por tanto:

```text
estructura de entrada
↛
J_rel.
```

---

#### 82.7. Resultado de la auditoría constitutiva

Las cinco estructuras prescritas por el punto de continuación han sido auditadas:

```text
A
S1
S1 → S2
g_Γ
estructura de entrada.
```

Ninguna contiene una propiedad previamente constituida que conecte:

```text
C_Act
```

con:

```text
σ*_tech
```

como participación de esa realización.

Tampoco permanece, dentro de la estructura ya constituida de `EX-PV001-02`, otra propiedad previamente derivada cuya auditoría deba preceder al resultado de la candidata congelada.

Se satisface, por tanto, el criterio de fracaso definido para:

```text
J_rel.
```

Se obtiene:

```text
J_rel
→ no constituido.
```

---

#### 82.8. Resultado principal

Se obtiene:

```text
RS-QPP-19
```

> La auditoría constitutiva final de `EX-PV001-02` no localiza ninguna propiedad previa o independientemente constituida que conecte la acción corporal concreta `C_Act` con `σ*_tech` como participación de esa realización. `A`, `S1`, la transición `S1 → S2`, `g_Γ` y la estructura de entrada pertenecen a la realización técnica, pero ninguna incorpora constitutivamente `C_Act`. Introducir ahora esa relación modificaría retrospectivamente la candidata congelada. Por tanto, `J_rel` no queda constituido.

La consecuencia inmediata es:

```text
FIX-PSTAR-01
→ resultado desfavorable
  respecto de EX-PV001-02.
```

La regla:

```text
NR-PSTAR-01
```

impide:

```text
cambiar p*
cambiar C_Act
incorporar C_Act retrospectivamente a σ*_tech
ampliar σ*_tech
```

para obtener un resultado distinto.

---

#### 82.9. Incidencia sobre `J_mat`

Después de:

```text
J_rel
→ no constituido
```

la forma mínima superviviente:

```text
J_H
+
J_rel
+
J_mat
↓
PartPossible_h(σ*) = true
```

ya no puede satisfacerse para la candidata congelada.

Por tanto, el resultado de:

```text
J_mat
```

ya no puede modificar el estatuto de:

```text
FIX-PSTAR-01.
```

Se registra:

```text
J_mat
→ no evaluado
→ evaluación ya no necesaria
  para decidir la candidata actual.
```

Esto no implica:

```text
J_mat
→ falso.
```

Implica únicamente que su evaluación ha dejado de poseer capacidad discriminante para esta candidata después del fracaso de:

```text
J_rel.
```

---

#### 82.10. Incidencia sobre `E_σ2` y `FIX-Jσ-01`

`E_σ2` había quedado reclasificado provisionalmente como candidato para:

```text
J_mat.
```

Su reactivación estaba subordinada a la constitución previa de:

```text
J_rel.
```

Dado que:

```text
J_rel
→ no constituido
```

no procede reactivar:

```text
E_σ2
```

ni:

```text
FIX-Jσ-01
```

para decidir la candidata actual.

Se obtiene:

```text
E_σ2
→ no reactivado

FIX-Jσ-01
→ no reactivado.
```

No se establece:

```text
E_σ2
→ inválido.
```

Su falta de ejecución deriva exclusivamente de que el fracaso previo de `J_rel` ya determina el resultado de la candidata.

---

#### 82.11. Incidencia sobre `PartPossible_h(σ*)`

El resultado obtenido no autoriza:

```text
PartPossible_h(σ*) = false.
```

La investigación ha establecido una pérdida probatoria, no una imposibilidad ontológica general de participación humana.

Lo establecido es:

```text
PartPossible_h(σ*) = true
→ no queda independientemente establecido
  mediante FIX-PSTAR-01
  para EX-PV001-02.
```

Debe conservarse la distinción:

```text
no establecido
≠
falso.
```

---

#### 82.12. Cierre de `Q-PP`

`Q-PP` fue abierta para determinar qué fundamento independiente podía establecer:

```text
PartPossible_h(σ*) = true
```

sin utilizar:

```text
Disp_W
CompletesStruct como fundamento circular
resultado favorable
ni reparación retrospectiva.
```

La secuencia:

```text
RS-QPP-01
↓
...
↓
RS-QPP-18
↓
RS-QPP-19
```

ha agotado los fundamentos previamente derivados aplicables a la realización actual y ha desembocado en una candidata concreta fijada mediante:

```text
FIX-PSTAR-01.
```

Su evaluación produce:

```text
J_H
→ constituido
→ satisfecho

J_rel
→ no constituido

J_mat
→ no necesario para decidir
  la candidata actual.
```

Por tanto:

```text
Q-PP
→ RESUELTA DESFAVORABLEMENTE
  respecto de EX-PV001-02.
```

Este cierre no establece:

```text
ninguna realización posible
puede satisfacer PartPossible_h.
```

Tampoco obliga a introducir inmediatamente otra realización.

Cualquier candidata o realización posterior deberá constituir:

```text
una nueva actuación
```

explícitamente diferenciada y no podrá presentarse como reparación de:

```text
FIX-PSTAR-01.
```

---

#### 82.13. Estado

```text
RS-QPP-19
→ establecido

OP-QPP-07
→ satisfecha mediante auditoría

J_H
→ constituido
→ satisfecho

J_rel
→ no constituido

J_mat
→ no evaluado
→ no necesario para decidir
  FIX-PSTAR-01

E_σ2
→ no reactivado

FIX-Jσ-01
→ no reactivado

FIX-PSTAR-01
→ resultado desfavorable

NR-PSTAR-01
→ preservada

PartPossible_h(σ*) = true
→ no establecido independientemente
  para EX-PV001-02

Q-PP
→ resuelta desfavorablemente
  respecto de EX-PV001-02.
```

---

### 83. Cierre de `Q-EX002-01`

#### 83.1. Recuperación de la hipótesis sometida a falsación

`Q-EX002-01` fue abierta para determinar si podía establecerse independientemente que:

```text
PartPossible_h
∧
CompletesStruct
```

realizados por:

```text
EX-PV001-02
```

constituyen realmente:

```text
disponibilidad de una posibilidad humana posterior
```

sin utilizar como fundamento:

```text
Disp_W
```

ni el resultado favorable del propio dispositivo.

Se formuló:

```text
H-QEX002-01
```

según la cual el anclaje podía quedar establecido si:

```text
PartPossible_h
```

y:

```text
CompletesStruct
```

podían justificarse independientemente como condiciones constitutivas de la disponibilidad considerada.

---

#### 83.2. Aplicación de la condición de falsación

La condición de falsación previamente fijada establece que:

```text
H-QEX002-01
```

queda falsada si, después de agotar los fundamentos previamente derivados, ocurre cualquiera de estas pérdidas:

```text
PartPossible_h
→ sólo puede sostenerse
  por el valor true asignado externamente
```

o:

```text
CompletesStruct
→ sólo puede sostenerse
  por su definición mediante CR-Term
```

o:

```text
PartPossible_h ∧ CompletesStruct
→ sólo cuenta como Disp_W
  porque el propio dispositivo
  lo denomina de ese modo.
```

La resolución de:

```text
Q-PP
```

ha establecido la primera de esas pérdidas para:

```text
EX-PV001-02.
```

Los fundamentos previamente derivados han sido agotados y:

```text
PartPossible_h(σ*) = true
```

no ha podido quedar independientemente establecido para la candidata congelada.

Por tanto:

```text
H-QEX002-01
→ FALSADA
  respecto de EX-PV001-02.
```

---

#### 83.3. Incidencia sobre `Q-CS`

La descomposición inicial de:

```text
Q-EX002-01
```

en:

```text
Q-PP
Q-CS
Q-CONJ
```

fue expresamente provisional y no estableció que las tres cuestiones fueran irreducibles ni que debieran ser necesariamente agotadas.

La condición de falsación de:

```text
H-QEX002-01
```

es disyuntiva.

Dado que:

```text
Q-PP
→ resultado desfavorable suficiente
  para falsar H-QEX002-01
```

la investigación de:

```text
Q-CS
```

ya no puede modificar el estatuto de la hipótesis para:

```text
EX-PV001-02.
```

Por tanto:

```text
Q-CS
→ no abierta
→ no necesaria para decidir Q-EX002-01
  respecto de EX-PV001-02.
```

No se establece:

```text
Q-CS
→ resuelta
```

ni:

```text
CompletesStruct
→ epistemológicamente insuficiente.
```

La cuestión queda simplemente fuera del camino necesario de cierre de la realización actual.

---

#### 83.4. Incidencia sobre `Q-CONJ`

`Q-CONJ` fue formulada bajo la condición:

```text
suponiendo justificadas
PartPossible_h
y
CompletesStruct
por separado.
```

Tras:

```text
Q-PP
→ resuelta desfavorablemente
```

esa condición de activación no se satisface.

Por tanto:

```text
Q-CONJ
→ no abierta
→ no activable para decidir
  Q-EX002-01 respecto de EX-PV001-02.
```

No se deriva ningún resultado acerca de la suficiencia general de la conjunción.

---

#### 83.5. Cierre de `Q-EX002-01`

La resolución favorable de:

```text
Q-EX002-01
```

requería una cadena independiente que alcanzara:

```text
PartPossible_h
```

y:

```text
CompletesStruct
```

y permitiera después constituir:

```text
Disp_W
```

sin circularidad.

La primera condición necesaria no ha podido quedar establecida para:

```text
EX-PV001-02.
```

Por tanto:

```text
Q-EX002-01
→ RESUELTA DESFAVORABLEMENTE
  respecto de EX-PV001-02.
```

La pérdida queda localizada en:

```text
anclaje fenomenológico de EP-02
```

y específicamente en:

```text
PartPossible_h.
```

---

#### 83.6. Consecuencia sobre `EP-02`

La condición de falsación de:

```text
H-QEX002-01
```

ya había fijado expresamente el resultado correspondiente:

```text
EP-02
→ técnicamente válida
→ epistemológicamente insuficiente.
```

Por tanto se sustituye el estado anterior:

```text
EP-02
→ estructuralmente realizada
→ anclaje fenomenológico pendiente
```

por:

```text
EP-02
→ estructuralmente realizada
→ técnicamente válida
→ epistemológicamente insuficiente
  respecto de H-PV001-01
  en EX-PV001-02.
```

No se modifica ninguna de las propiedades técnicas previamente demostradas.

---

#### 83.7. Consecuencia sobre `CES-01`

Antes del cierre de:

```text
Q-EX002-01
```

el estado era:

```text
CES-01
→ satisfecha para EP-01
→ pendiente para EP-02.
```

La pérdida que mantenía pendiente:

```text
CES-01
```

era precisamente el anclaje fenomenológico investigado por:

```text
Q-EX002-01.
```

Al resolverse desfavorablemente dicha investigación:

```text
CES-01
→ satisfecha para EP-01

CES-01
→ no satisfecha para EP-02
  en EX-PV001-02.
```

La pérdida no procede de la corrección técnica del dispositivo.

Procede de que:

```text
PartPossible_h
```

no dispone, para la realización actual, del fundamento independiente requerido para desempeñar el papel fenomenológico atribuido dentro de:

```text
EP-02.
```

---

#### 83.8. Consecuencia sobre `CES-02`

La evaluación anterior había establecido:

```text
CES-02
→ fuerza inferencial correctamente limitada
```

porque, suponiendo cerrado el anclaje de:

```text
EP-02,
```

la inferencia no excedía el contenido de:

```text
H-PV001-01.
```

Ese resultado no queda falsado.

Sin embargo:

```text
CES-01
→ no satisfecha para EP-02
```

impide alcanzar el cierre material necesario para que la estructura probatoria complete su función respecto de:

```text
H-PV001-01.
```

Por tanto:

```text
CES-02
→ fuerza inferencial correctamente limitada
→ cierre material no alcanzable
  en EX-PV001-02
  por fracaso previo de CES-01.
```

No se deriva:

```text
CES-02
→ no satisfecha
```

como pérdida independiente.

---

#### 83.9. Consecuencia sobre `CMA-01`

`CMA-01` exige:

```text
auditabilidad suficiente
+
control crítico pertinente
+
ausencia de una falsación superviviente
que impida establecer alguna CES.
```

La investigación ya había establecido:

```text
auditabilidad
→ satisfecha

control crítico
→ satisfecho.
```

La pérdida restante ha sido sometida a falsación y produce:

```text
CES-01
→ no satisfecha para EP-02.
```

Por tanto ya no procede mantener:

```text
CMA-01
→ todavía no satisfecha.
```

Se obtiene:

```text
CMA-01
→ no satisfecha
  para la estructura probatoria
  de EX-PV001-02.
```

---

#### 83.10. Consecuencia sobre `H-PV001-01`

El estado anterior era:

```text
H-PV001-01
→ todavía no aceptada como establecida.
```

La resolución desfavorable de:

```text
Q-EX002-01
```

elimina la suspensión, pero no establece la falsedad de:

```text
H-PV001-01.
```

Se obtiene:

```text
H-PV001-01
→ no establecida mediante
  EX-PV001-02.
```

Debe mantenerse:

```text
no establecida
≠
falsa.
```

---

#### 83.11. Consecuencia sobre `EX-PV001-02`

La resolución de:

```text
Q-EX002-01
```

no invalida la construcción técnica.

Se conserva:

```text
EX-PV001-02
→ construido
→ técnicamente validado
→ configuración congelada ejecutada.
```

Pero su estatuto probatorio queda determinado:

```text
EX-PV001-02
→ capacidad probatoria insuficiente
  para establecer H-PV001-01.
```

No deberá modificarse retrospectivamente para reparar esta pérdida.

Cualquier nueva operacionalización o realización requerirá una actuación posterior explícitamente diferenciada.

---

#### 83.12. Consecuencia sobre `R-PV001-001`

La insuficiencia probatoria de:

```text
EX-PV001-02
```

no constituye por sí misma una falsación de:

```text
R-PV001-001.
```

La investigación previa ya había establecido para:

```text
EX-PV001-01
```

que:

```text
fracaso de una operacionalización
↛
falsación automática
de la realización investigada.
```

Debe conservarse la misma distinción.

Por tanto:

```text
R-PV001-001
→ no falsada por Q-EX002-01
```

pero:

```text
R-PV001-001
→ no determinada favorablemente
  respecto de CR-PV001-01
  mediante EX-PV001-02.
```

No se modifica:

```text
PV-001
```

ni:

```text
CR-PV001-01
```

como consecuencia automática de este resultado.

---

#### 83.13. Resultado consolidado

```text
RS-QPP-19
→ establecido

Q-PP
→ resuelta desfavorablemente
  respecto de EX-PV001-02

FIX-PSTAR-01
→ resultado desfavorable

J_H
→ constituido
→ satisfecho

J_rel
→ no constituido

J_mat
→ no evaluado
→ no necesario para decidir
  la candidata actual

E_σ2
→ no reactivado

FIX-Jσ-01
→ no reactivado

PartPossible_h(σ*) = true
→ no establecido independientemente
  para EX-PV001-02

H-QEX002-01
→ falsada respecto de EX-PV001-02

Q-CS
→ no abierta
→ no necesaria para esta decisión

Q-CONJ
→ no abierta
→ no activable para esta decisión

Q-EX002-01
→ resuelta desfavorablemente
  respecto de EX-PV001-02

EP-01
→ satisfecha

EP-02
→ estructuralmente realizada
→ técnicamente válida
→ epistemológicamente insuficiente

CES-01
→ satisfecha para EP-01
→ no satisfecha para EP-02

CES-02
→ fuerza inferencial correctamente limitada
→ cierre material no alcanzable
  en EX-PV001-02
  por fracaso previo de CES-01

CMA-01
→ no satisfecha

H-PV001-01
→ no establecida mediante EX-PV001-02

EX-PV001-02
→ construido
→ técnicamente validado
→ configuración congelada ejecutada
→ capacidad probatoria insuficiente
  para establecer H-PV001-01

R-PV001-001
→ no falsada por este resultado
→ no determinada favorablemente
  respecto de CR-PV001-01
  mediante EX-PV001-02.
```

---

#### 83.14. Estado de `Q-EX002-01`

**Resuelta desfavorablemente respecto de `EX-PV001-02`.**

La investigación ha agotado la pérdida que impedía determinar el estatuto probatorio de:

```text
EP-02
```

para la operacionalización actual.

No procede continuar:

```text
Q-CS
```

ni:

```text
Q-CONJ
```

como obligaciones necesarias para decidir:

```text
Q-EX002-01
```

respecto de:

```text
EX-PV001-02.
```

Tampoco procede reparar:

```text
FIX-PSTAR-01
EX-PV001-02
σ*_tech
```

mediante modificación retrospectiva.

Cualquier actuación posterior destinada a investigar otra candidata, otra realización o una nueva operacionalización deberá abrirse y justificarse independientemente a partir del estado resultante.

---

### 84. Cierre de la investigación de `R-PV001-001`

El cierre de `Q-EX002-01` permite regresar a la obligación superior que había mantenido abierta la investigación de:

```text
R-PV001-001.
```

La secuencia probatoria posterior a `EX-PV001-01` había sido abierta para determinar si podía obtenerse una estructura probatoria capaz de establecer suficientemente que la primera realización experimental satisface:

```text
CR-PV001-01.
```

Después de la construcción y evaluación de:

```text
EX-PV001-02
```

y del cierre desfavorable de la pérdida superviviente en:

```text
Q-EX002-01,
```

procede determinar el estatuto final de la investigación de la candidata sin introducir una nueva operacionalización, una nueva realización ni una reparación de la candidata evaluada.

---

#### 84.1. Recuperación de la obligación original

La investigación de `R-PV001-001` se abrió a partir de:

```text
PV-001
```

para determinar qué debía ser necesariamente realizable para satisfacer su compromiso sin introducir estructura, semántica ni responsabilidades no justificadas.

La reducción realizada produjo:

```text
CR-PV001-01
```

como criterio mínimo de satisfacción:

> Una realización candidata satisface el criterio mínimo de `PV-001` cuando permite que aquello que una situación anterior hizo disponible pueda producir, directa o mediante mediaciones derivadas, una diferencia relevante en las posibilidades humanas de una situación posterior.

La investigación seleccionó posteriormente:

```text
R-PV001-001
```

como primera realización experimental.

Su selección fue expresamente:

```text
débil
+
mínima
+
fácilmente falsable
+
sin pretensión de necesidad universal.
```

Por tanto, la obligación original no consistía en obtener necesariamente una validación favorable de:

```text
R-PV001-001.
```

Consistía en construir una candidata suficientemente determinada para poder someterla a evaluación respecto de:

```text
CR-PV001-01.
```

No se deriva de la obligación original:

```text
R-PV001-001
→ debe resultar favorable
```

ni:

```text
resultado no favorable
→ obligación automática
  de reparar la candidata
```

ni:

```text
resultado no concluyente
→ obligación automática
  de producir sucesivamente
  nuevas realizaciones
  hasta obtener una favorable.
```

---

#### 84.2. Agotamiento de la secuencia de evaluación

Después de la insuficiencia probatoria de:

```text
EX-PV001-01,
```

la investigación mantuvo abierta `R-PV001-001` mediante una secuencia explícita destinada a:

```text
formular H
↓
derivar EP
↓
evaluar CES
↓
identificar vulnerabilidades
↓
derivar PME
↓
determinar DEO
↓
construir y validar
la estructura probatoria
↓
ejecutarla
↓
evaluar la evidencia
↓
determinar la incidencia
sobre R-PV001-001
↓
revisar DR-PV001-*.
```

Esa secuencia ha quedado agotada.

Se obtuvo:

```text
H-PV001-01
```

y se derivó la estructura probatoria:

```text
EP-01
+
EP-02.
```

Se derivó y construyó:

```text
EX-PV001-02.
```

Su configuración fue fijada independientemente y ejecutada bajo regla de no reparación.

Las `PME` derivadas fueron sometidas a evaluación dentro de su alcance.

La pérdida residual fue localizada en:

```text
EP-02
↓
anclaje fenomenológico de Disp_W
```

y formalizada como:

```text
Q-EX002-01.
```

La reducción de esa pérdida condujo a:

```text
Q-PP
```

y posteriormente a:

```text
RS-QPP-01
...
RS-QPP-19.
```

La auditoría final de la candidata prospectivamente fijada produjo:

```text
J_rel
→ no constituido.
```

De ello se obtuvo:

```text
Q-PP
→ cerrada desfavorablemente
```

y:

```text
Q-EX002-01
→ cerrada desfavorablemente
  respecto de EX-PV001-02.
```

Por tanto, no permanece sin ejecutar ninguna actuación perteneciente a la secuencia probatoria que había mantenido abierta la investigación de la primera candidata.

---

#### 84.3. Incidencia sobre `DR-PV001-01`–`DR-PV001-05`

La investigación había establecido como decisiones provisionales de realización:

```text
DR-PV001-01
→ conservación directa

DR-PV001-02
→ representación mediante string

DR-PV001-03
→ memoria de proceso

DR-PV001-04
→ variable directa

DR-PV001-05
→ dos momentos distinguibles.
```

Estas decisiones fueron introducidas expresamente como decisiones contingentes pertenecientes exclusivamente a la primera realización experimental.

No constituyen exigencias universales de:

```text
PV-001
```

ni propiedades necesarias de toda realización que satisfaga:

```text
CR-PV001-01.
```

La pérdida finalmente localizada en:

```text
J_rel
```

no ha sido atribuida a ninguna de estas decisiones.

No se ha establecido que:

```text
conservación directa
```

sea incorrecta;

ni que:

```text
representación mediante string
```

produzca la pérdida;

ni que:

```text
memoria de proceso
```

resulte insuficiente por ausencia de persistencia entre ejecuciones;

ni que:

```text
variable directa
```

deba sustituirse por una abstracción de almacenamiento;

ni que:

```text
S1 / S2
```

deban convertirse en una frontera arquitectónica distinta.

Por tanto:

```text
DR-PV001-01
DR-PV001-02
DR-PV001-03
DR-PV001-04
DR-PV001-05
→ conservadas.
```

Su conservación posee exclusivamente alcance reconstructivo respecto de la realización para la que fueron adoptadas.

No implica:

```text
DR-PV001-*
→ obligaciones para una realización futura.
```

Se establece:

```text
conservación documental
≠
vigencia prospectiva necesaria.
```

Cualquier realización futura deberá justificar independientemente sus propias decisiones de realización.

---

#### 84.4. Reducción de la condición anterior de cierre

Durante la continuación posterior a `EX-PV001-01` se había establecido:

> La investigación sólo podrá cerrarse cuando la estructura probatoria finalmente obtenida haya sido evaluada respecto de las `CES`, haya satisfecho las exigencias metodológicas de `CMA-01` y proporcione base suficiente para determinar el estatuto de `R-PV001-001` respecto de `CR-PV001-01`.

La reconstrucción genealógica posterior permite reducir el alcance de esta condición.

La obligación anterior justificó legítimamente continuar la investigación desde:

```text
EX-PV001-01
```

hacia una estructura probatoria nueva y someterla a evaluación.

Esa estrategia produjo:

```text
EX-PV001-02
```

y finalmente permitió determinar:

```text
CES-01
→ no satisfecha para EP-02

CMA-01
→ no satisfecha

H-PV001-01
→ no establecida mediante EX-PV001-02.
```

Si la condición anterior se interpretara como obligación de continuar produciendo estructuras probatorias hasta que alguna satisficiera necesariamente:

```text
CES
+
CMA-01
```

un resultado desfavorable de una candidata prospectivamente fijada no podría constituir nunca un cierre.

La investigación quedaría obligada a:

```text
candidata 1
→ resultado insuficiente
↓
candidata 2
→ resultado insuficiente
↓
candidata 3
→ ...
```

hasta obtener un resultado favorable.

No se ha localizado, antes e independientemente de aquella estrategia probatoria, ningún compromiso de:

```text
PV-001
```

de:

```text
CR-PV001-01
```

ni de la apertura de:

```text
R-PV001-001
```

que imponga esa obligación.

La condición anterior debe entenderse, por tanto, dentro de la estrategia histórica que justificó la continuación probatoria entonces abierta.

Su contenido superviviente puede reducirse a:

```text
la candidata debe ser sometida
a una evaluación suficientemente determinada

y

el resultado de esa evaluación
debe conservarse sin reparación.
```

El resultado puede ser:

```text
favorable
```

o:

```text
no favorable / no establecido.
```

No se deriva:

```text
resultado no favorable
→ obligación de continuar
  hasta obtener éxito probatorio.
```

La formulación histórica anterior se conserva sin modificación.

La presente reducción afecta exclusivamente a su fuerza normativa prospectiva después del agotamiento de la estrategia que justificó.

---

#### 84.5. Distinción entre cierre material y cierre de investigación

El cierre de `Q-EX002-01` ha establecido:

```text
EP-02
→ estructuralmente realizada
→ anclaje fenomenológico no establecido
```

y, por tanto:

```text
cierre material de EP-02
→ no alcanzable
  mediante EX-PV001-02.
```

Este resultado no debe confundirse con:

```text
imposibilidad de cerrar
la investigación de R-PV001-001.
```

Se distinguen:

```text
cierre material de la estructura probatoria
```

y:

```text
cierre epistemológico y documental
de la investigación que evalúa
la candidata.
```

El primero exigiría que la estructura probatoria completara satisfactoriamente la función para la que fue construida.

Eso no ha ocurrido.

El segundo exige que la candidata haya sido sometida al procedimiento de evaluación derivado y que su resultado pueda conservarse de manera determinada y reconstruible.

Eso sí ha ocurrido.

Por tanto:

```text
cierre material de EP-02
→ no alcanzado

pero

cierre de la investigación
de R-PV001-001
→ alcanzable.
```

El fracaso material de una vía probatoria puede constituir precisamente el resultado terminal de la investigación que la evalúa.

---

#### 84.6. Estatuto final de `R-PV001-001`

La evidencia obtenida no permite establecer:

```text
R-PV001-001
⊨
CR-PV001-01.
```

En particular:

```text
EP-02
→ anclaje fenomenológico no establecido

CES-01
→ no satisfecha para EP-02

CMA-01
→ no satisfecha

H-PV001-01
→ no establecida mediante EX-PV001-02.
```

Por tanto:

```text
R-PV001-001
→ no establecida favorablemente
  respecto de CR-PV001-01.
```

Sin embargo, la pérdida localizada pertenece a la capacidad probatoria de la estructura utilizada para establecer dicha satisfacción.

No se ha demostrado:

```text
R-PV001-001
⊭
CR-PV001-01.
```

Por tanto:

```text
R-PV001-001
→ no falsada.
```

El estatuto final queda:

```text
R-PV001-001
→ evaluada
→ no establecida favorablemente
  respecto de CR-PV001-01
→ no falsada
→ investigación de la primera candidata
  cerrada.
```

Este resultado no debe reducirse a:

```text
R-PV001-001
→ desfavorable
```

porque ello confundiría:

```text
insuficiencia de la evidencia disponible
```

con:

```text
falsedad de la realización candidata.
```

---

#### 84.7. Consecuencia sobre `CR-PV001-01` y `PV-001`

El resultado obtenido no falsifica:

```text
CR-PV001-01.
```

El criterio continúa expresando la propiedad mínima derivada para una realización candidata de:

```text
PV-001.
```

Tampoco se ha falsado:

```text
PV-001.
```

La investigación ha mostrado únicamente que:

```text
EX-PV001-02
```

no permite establecer suficientemente que:

```text
R-PV001-001
```

satisface:

```text
CR-PV001-01.
```

Por tanto:

```text
PV-001
→ conservado
→ no falsado

CR-PV001-01
→ conservado
→ no falsado

R-PV001-001
→ no establecida favorablemente
→ no falsada.
```

No se deriva de este resultado ninguna modificación del contenido de:

```text
PV-001
```

ni de:

```text
CR-PV001-01.
```

---

#### 84.8. Ausencia de obligación automática de nueva realización

El cierre de la investigación de:

```text
R-PV001-001
```

no deriva:

```text
EX-PV001-03
```

ni:

```text
R-PV001-002.
```

Tampoco deriva:

```text
una nueva operacionalización
```

ni:

```text
una reparación de EX-PV001-02.
```

La primera candidata ha sido evaluada bajo una configuración prospectivamente fijada y sometida a una regla de no reparación.

Su resultado debe conservarse.

Introducir inmediatamente una nueva candidata para superar la pérdida encontrada convertiría el resultado desfavorable de la evaluación anterior en criterio de reparación de la siguiente construcción sin haber derivado previamente la necesidad de esa nueva actuación.

Por tanto:

```text
resultado de R-PV001-001
↓
se conserva

pero

resultado de R-PV001-001
↛
nueva realización necesaria.
```

Cualquier actuación posterior destinada a investigar:

```text
otra candidata
```

o:

```text
otra realización
```

o:

```text
otra operacionalización
```

deberá abrirse y justificarse independientemente a partir del estado resultante.

---

#### 84.9. Resolución de la obligación pendiente sobre `DR-PV001-*`

La secuencia abierta después de `EX-PV001-01` incluía como última obligación:

```text
decidir si DR-PV001-*
deben conservarse,
reducirse
o sustituirse.
```

La auditoría final permite resolverla:

```text
DR-PV001-01
→ conservar

DR-PV001-02
→ conservar

DR-PV001-03
→ conservar

DR-PV001-04
→ conservar

DR-PV001-05
→ conservar.
```

La conservación se realiza exclusivamente como:

```text
decisiones contingentes
de la primera realización experimental.
```

No se eleva ninguna de ellas a:

```text
exigencia de PV-001
```

ni a:

```text
propiedad necesaria de CR-PV001-01
```

ni a:

```text
restricción de una futura realización.
```

Con esta resolución queda agotada la última actuación expresamente prevista en la secuencia de evaluación abierta después de `EX-PV001-01`.

---

#### 84.10. Estado

```text
R-PV001-001
→ investigación cerrada

R-PV001-001
→ evaluada

R-PV001-001
→ no establecida favorablemente
  respecto de CR-PV001-01

R-PV001-001
→ no falsada

EX-PV001-01
→ técnicamente validado
→ capacidad probatoria insuficiente
  para el objetivo general asignado

EX-PV001-02
→ construido
→ técnicamente validado
→ configuración congelada ejecutada
→ capacidad probatoria insuficiente
  para establecer H-PV001-01

EP-01
→ satisfecha dentro de su alcance

EP-02
→ estructuralmente realizada
→ anclaje fenomenológico no establecido

CES-01
→ no satisfecha para EP completa

CES-02
→ no requiere continuación independiente
  dentro de esta investigación

CMA-01
→ no satisfecha

H-PV001-01
→ no establecida mediante EX-PV001-02

Q-EX002-01
→ cerrada

Q-PP
→ cerrada

DR-PV001-01
DR-PV001-02
DR-PV001-03
DR-PV001-04
DR-PV001-05
→ conservadas como decisiones contingentes
  de la primera realización

PV-001
→ no falsado

CR-PV001-01
→ no falsado

nueva operacionalización
→ no derivada

nueva realización
→ no derivada.
```

---

#### 84.11. Consecuencia metodológica

La investigación establece una distinción que deberá preservarse en cualquier evaluación posterior:

```text
candidata no establecida
≠
candidata falsada
```

y:

```text
fracaso de una vía probatoria
≠
obligación de reparar
o sustituir la candidata.
```

Asimismo:

```text
cierre material no alcanzado
```

puede coexistir con:

```text
investigación cerrada
```

cuando el resultado negativo o insuficiente ha quedado determinado mediante el procedimiento de evaluación previamente fijado y puede conservarse sin reparación.

Esta distinción impide convertir el éxito probatorio en una condición implícita de terminación de una investigación falsable.

---

#### 84.12. Punto de continuación

El cierre de:

```text
R-PV001-001
```

no abre por sí mismo una nueva realización.

No permanece dentro de esta investigación ninguna obligación de:

```text
reparar EX-PV001-02
```

ni de:

```text
derivar EX-PV001-03
```

ni de:

```text
construir R-PV001-002.
```

Cualquier actuación posterior destinada a investigar una nueva candidata deberá derivarse y justificarse independientemente a partir del estado ahora alcanzado.

Por tanto, el siguiente paso no queda prescrito por la investigación cerrada.

Antes de iniciar una nueva actuación realizativa deberá determinarse, a partir de los compromisos todavía abiertos de la fase de realización, cuál es la siguiente actuación justificable sin restaurar como obligación la continuación histórica de esta rama.

---
