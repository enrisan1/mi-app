# 10 Preguntas abiertas

# Preguntas abiertas

## Propósito

Este documento registra las cuestiones que permanecen genuinamente abiertas después de la consolidación provisional de los resultados obtenidos en:

```text
02-fenomenos-fundamentales.md
03-reduccion-de-fenomenos.md
04-exigencias-estructurales.md
05-perfil-funcional.md
06-axiomas.md
07-conclusiones-consolidadas.md
08-regimen-de-especializacion.md
09-validacion-por-casos.md
12-reconstrucciones-conservativas.md
13-marco-de-realizacion.md
14-auditoria-global-de-cobertura.md
15-auditoria-de-la-metateoria.md
```

Su función no consiste en volver a investigar esos documentos.

Tampoco pretende enumerar todas las preguntas imaginables sobre el dominio.

Su función es más restringida:

> Registrar aquellas cuestiones cuyo estado actual no permite todavía una resolución suficientemente justificada y cuya respuesta futura podría modificar, extender, restringir o falsar algún resultado consolidado.

---

# Estado documental

`10-preguntas-abiertas.md` se construye por primera vez.

La primera versión completa fue sometida a auditoría específica de:

```text
apertura real
+
irreducibilidad
+
proporcionalidad
```

La auditoría produjo una depuración del conjunto inicial:

```text
18 preguntas
↓
15 preguntas abiertas irreducibles
+
1 línea externa de comprobación
```

La presente versión incorpora íntegramente dicha depuración.

---

# Justificación documental

Una teoría falsable necesita distinguir entre:

```text
resultado consolidado
```

y:

```text
cuestión todavía no resuelta
```

Sin esta separación aparecen dos riesgos opuestos.

## Riesgo 1 — Clausura prematura

Considerar que una cuestión está resuelta simplemente porque los documentos consolidados actuales no han encontrado un falsador.

## Riesgo 2 — Reapertura permanente

Tratar cualquier duda imaginable como razón suficiente para mantener todos los resultados permanentemente abiertos.

`10` debe evitar ambos extremos.

Por tanto:

```text
consolidado provisionalmente
≠
definitivamente cerrado
```

pero también:

```text
pregunta concebible
≠
pregunta abierta relevante
```

---

# Relación con otros documentos

## `10` no sustituye a `02`

`02-fenomenos-fundamentales.md` registra regiones fenomenológicas y contrastes.

`10` registra cuestiones todavía no resueltas sobre el estado consolidado.

---

## `10` no sustituye a `09`

`09-validacion-por-casos.md` somete resultados a casos concretos.

`10` sólo registra casos o familias todavía no explorados cuando existe una razón independiente para considerar que podrían modificar un resultado.

---

## `10` no sustituye a `12`

`12-reconstrucciones-conservativas.md` comprueba si determinados contenidos históricos sobreviven tras eliminar categorías anteriores.

`10` registra únicamente dificultades reconstructivas todavía no resueltas.

---

## `10` no sustituye a `14`

`14-auditoria-global-de-cobertura.md` determina si existe actualmente algún hueco detectado dentro del alcance declarado.

`10` puede registrar cuestiones cuya investigación futura revele un hueco sin que dicho hueco esté actualmente demostrado.

Por tanto:

```text
COBERTURA_GLOBAL_ACTUAL = PASS
```

es compatible con:

```text
PreguntasAbiertas ≠ ∅
```

---

## `10` no sustituye a `15`

`15-auditoria-de-la-metateoria.md` audita el método investigador.

`10` puede registrar cuestiones metateóricas todavía no resueltas, pero no vuelve a realizar dicha auditoría.

---

# Criterios de admisión

Una cuestión `Q` sólo debe formar parte de este documento si cumple simultáneamente:

## `PA-A — Apertura real`

> La cuestión no ha sido ya resuelta por un resultado consolidado.

## `PA-I — Irreducibilidad`

> La cuestión realiza un trabajo distinto de las demás preguntas abiertas.

## `PA-P — Proporcionalidad`

> Su importancia justifica mantenerla como pregunta abierta y no como simple nota, riesgo o actuación futura.

Además debe satisfacer:

```text
PA-1 — No está resuelta.

PA-2 — No es una mera posibilidad lógica.

PA-3 — Puede formularse suficientemente.

PA-4 — Puede identificarse qué resultado podría afectar.

PA-5 — Puede indicarse qué evidencia permitiría avanzar.

PA-6 — Su existencia no obliga todavía a reapertura.
```

---

# Estados posibles

Cada pregunta podrá encontrarse en uno de los siguientes estados.

## `PA-OPEN`

Existe una indeterminación real y todavía no hay evidencia suficiente para resolverla.

## `PA-RESOLVED`

La cuestión ha recibido una respuesta suficientemente justificada.

## `PA-FALSIFIER`

La investigación ha producido evidencia suficiente para activar la reapertura de algún resultado consolidado.

## `PA-DROPPED`

La cuestión deja de considerarse genuinamente abierta porque se demuestra que:

- estaba ya resuelta;
- era puramente terminológica;
- estaba mal formulada;
- carecía de incidencia;
- duplicaba otra pregunta;
- o dependía de una presuposición descartada.

---

# Regla de no reapertura automática

Se consolida:

```text
PA-OPEN
⇏
TD-2
```

Una pregunta abierta no constituye por sí sola un falsador.

La reapertura sólo procede cuando aparece evidencia suficiente.

La secuencia correcta es:

```text
pregunta
↓
investigación
↓
evidencia
↓
evaluación
↓
posible TD-2
```

y no:

```text
pregunta
↓
TD-2 automático
```

---

# `PA-01 — Contraste universal irreducible no identificado`

## Pregunta

> ¿Existe dentro del alcance declarado algún contraste cuya conservación requiera una diferencia universal positiva que no haya sido detectada por las regiones fenomenológicas ni por las reconstrucciones actuales?

## Motivación

Actualmente:

```text
F_irreducibles_universales = ∅
```

pero este resultado depende del corpus investigado.

La cobertura actual no demuestra que todo contraste futuro sea reducible.

## Resultado potencialmente afectado

Principalmente:

```text
03
```

y potencialmente:

```text
04
05
06
07
14
```

## Evidencia relevante

Un caso que:

1. pertenezca al alcance declarado;
2. produzca una discriminación necesaria;
3. no pueda reconstruirse conservativamente;
4. sobreviva a cambios de representación y realización;
5. no sea exclusivamente local a una especialización.

## Estado

```text
PA-01 — PA-OPEN
```

---

# `PA-02 — Exhaustividad de las regiones fenomenológicas`

## Pregunta

> ¿Las regiones actualmente utilizadas cubren suficientemente las clases de contraste relevantes para el dominio o existe una región fenomenológica independiente todavía no identificada?

## Motivación

```text
cobertura del corpus actual
≠
exhaustividad del espacio fenomenológico
```

Puede aparecer una región nueva incluso aunque sus contrastes resulten después reducibles.

Por tanto esta cuestión no se reduce a `PA-01`.

## Resultado potencialmente afectado

```text
02
03
14
```

## Evidencia relevante

Una familia de casos que:

- no pueda localizarse razonablemente en ninguna región existente;
- posea contrastes propios;
- no sea mera combinación de regiones actuales.

## Estado

```text
PA-02 — PA-OPEN
```

---

# `PA-03 — Frontera entre universal y especializado`

## Pregunta

> ¿Existe algún contenido actualmente localizado como especializado que deba promoverse al nivel universal porque resulte necesariamente requerido por toda especialización pertinente?

## Motivación

Actualmente:

```text
local
⇏
universal
```

pero la dirección inversa no está clausurada.

Podría aparecer una propiedad `X` tal que:

```text
∀E pertinente:
X ∈ E
```

por una razón común e independiente.

## Resultado potencialmente afectado

```text
05
06
07
08
```

## Evidencia relevante

Una propiedad cuya eliminación produzca la misma pérdida estructural en todas las especializaciones pertinentes.

La mera recurrencia empírica no basta.

## Estado

```text
PA-03 — PA-OPEN
```

---

# `PA-04 — Emergencia por interacción de especializaciones`

## Pregunta

> ¿Pueden varias especializaciones individualmente locales producir, al interactuar, una obligación conceptual que no pertenezca íntegramente a ninguna de ellas por separado?

## Motivación

La cuestión es:

```text
E₁ + E₂
→
¿obligación transversal nueva?
```

`14` no detectó actualmente una propiedad emergente global.

Pero futuras interacciones pueden introducir presión nueva.

## Resultado potencialmente afectado

```text
05
06
08
14
```

## Evidencia relevante

Un caso donde:

1. varias especializaciones sean válidas separadamente;
2. su interacción produzca una discriminación necesaria;
3. ésta no pueda localizarse enteramente en ninguna especialización;
4. no sea mero artefacto técnico de integración.

## Estado

```text
PA-04 — PA-OPEN
```

---

# `PA-05 — Frontera entre especialización y realización`

## Pregunta

> ¿Existe algún mecanismo aparentemente técnico cuya sustitución altere necesariamente una discriminación conceptual, demostrando que su estatuto no era puramente realizativo?

## Motivación

Actualmente:

```text
hecho técnico
⇏
hecho conceptual
```

pero esa frontera debe permanecer falsable.

## Resultado potencialmente afectado

```text
08
13
```

## Evidencia relevante

Un mecanismo `M` tal que:

```text
sustituir M
→
pérdida conceptual inevitable
```

aunque permanezcan constantes los demás compromisos relevantes.

## Estado

```text
PA-05 — PA-OPEN
```

---

# `PA-06 — Robustez de las reconstrucciones conservativas`

## Pregunta

> ¿Alguna reconstrucción actualmente aceptada falla cuando se aplica a una clase de caso suficientemente distinta de aquellas utilizadas durante su formulación?

## Motivación

Actualmente:

```text
RC-PASS = 19
RC-FAIL = 0
RC-OPEN = 0
```

pero:

```text
RC-PASS actual
≠
validez para todo caso futuro
```

## Resultado potencialmente afectado

```text
12
```

y según la reconstrucción:

```text
03
04
05
06
07
```

## Evidencia relevante

Un caso donde una reconstrucción:

- pierda una discriminación;
- requiera una categoría eliminada;
- dependa de equivalente funcional encubierto;
- o necesite externalización injustificada.

## Estado

```text
PA-06 — PA-OPEN
```

---

# `PA-07 — Frontera configuración / interpretación en casos límite`

## Pregunta

> ¿Existe algún caso dentro del alcance de la plataforma en el que la distinción operacional entre configuración registrada, interpretación expresada y actividad interpretativa exterior deje de bastar para conservar los contrastes necesarios?

## Motivación

Actualmente se conserva:

```text
configuración
≠
interpretación expresada
≠
actividad interpretativa
≠
conocimiento
```

La cuestión no pretende decidir metafísicamente qué es conocimiento.

Busca comprobar si esta frontera operacional es suficiente para el alcance del sistema.

## Resultado potencialmente afectado

Principalmente:

```text
07
```

y las fronteras utilizadas por:

```text
09
12
13
14
```

## Evidencia relevante

Un caso donde las distinciones actuales no permitan localizar sin pérdida:

- una configuración;
- una interpretación registrada;
- una transformación automatizada;
- o una actividad interpretativa exterior.

## Estado

```text
PA-07 — PA-OPEN
```

---

# `PA-08 — Equivalencia de representaciones con distinta capacidad discriminativa`

## Pregunta

> ¿Cuándo dos representaciones técnicamente distintas pueden considerarse conceptualmente equivalentes y cuándo una diferencia representacional modifica realmente las discriminaciones disponibles?

## Motivación

Se conserva:

```text
contenido
≠
representación
```

pero ello no implica:

```text
todas las representaciones
son conceptualmente equivalentes
```

## Resultado potencialmente afectado

```text
12
13
14
```

## Evidencia relevante

Dos representaciones `R₁` y `R₂` tales que para alguna cuestión conceptual pertinente `Q`:

```text
Q(R₁) ≠ Q(R₂)
```

## Estado

```text
PA-08 — PA-OPEN
```

---

# `PA-09 — Criterio independiente de equivalencia reconstructiva`

## Pregunta

> ¿Puede formularse un criterio suficientemente general para decidir cuándo dos reconstrucciones conservan realmente el mismo contenido diferencial sin introducir una nueva categoría universal de equivalencia?

## Motivación

Las reducciones utilizan expresiones como:

```text
mismo contenido diferencial
equivalente funcional
reconstrucción conservativa
```

Existe el riesgo de que estas expresiones presupongan aquello que pretenden comprobar.

## Resultado potencialmente afectado

Principalmente:

```text
12
15
```

y metodológicamente futuras reducciones.

## Restricción

No podrá resolverse simplemente introduciendo:

```text
EquivalenciaUniversal
```

como nueva primitiva.

## Evidencia relevante

Un criterio que:

- funcione sobre reconstrucciones heterogéneas;
- no dependa de denominaciones históricas;
- permita detectar pérdidas;
- no presuponga identidad universal;
- posea contraejemplos concebibles.

## Estado

```text
PA-09 — PA-OPEN
```

---

# `PA-10 — Alcance efectivo del dominio`

## Pregunta

> ¿El alcance del dominio puede delimitarse mediante criterios suficientemente independientes, o existen casos frontera cuya inclusión o exclusión alteraría materialmente los resultados universales?

## Motivación

`RM-04` establece:

```text
toda afirmación universal
requiere dominio explícito
```

Por tanto la delimitación del dominio no puede depender circularmente de las propiedades que después se declaran universales.

## Resultado potencialmente afectado

Potencialmente:

```text
02–15
```

## Evidencia relevante

Casos frontera cuya inclusión o exclusión:

1. modifique un resultado universal;
2. y no pueda decidirse mediante criterios independientes de ese resultado.

## Estado

```text
PA-10 — PA-OPEN
```

---

# `PA-11 — Dependencia de la selección del corpus`

## Pregunta

> ¿Hasta qué punto los resultados negativos actuales dependen de la selección histórica de casos y contrastes utilizada durante la investigación?

## Motivación

`15` falsó:

```text
H-MT-E_fuerte
```

pero dejó abierta la posibilidad de sesgos:

- prácticos;
- terminológicos;
- dependientes del investigador;
- dependientes del corpus.

Por tanto:

```text
método suficientemente neutral
+
corpus sesgado
→
¿resultado sesgado?
```

permanece abierto.

## Resultado potencialmente afectado

```text
02
03
14
15
```

## Evidencia relevante

Una ampliación sistemática del corpus mediante familias de casos seleccionadas independientemente de las categorías históricas del proyecto.

## Estado

```text
PA-11 — PA-OPEN
```

---

# `PA-12 — Exhaustividad de las restricciones metateóricas`

## Pregunta

> ¿`RM-01…RM-08` cubren suficientemente las condiciones necesarias para una investigación no arbitraria, o existe alguna obligación o familia de error metateórico independiente todavía no identificada?

## Motivación

La primera versión distinguía:

```text
suficiencia de RM
```

de:

```text
existencia de una obligación metateórica adicional
```

La auditoría de irreducibilidad mostró que ambas cuestiones eran una misma pregunta.

También queda absorbida aquí la cuestión sobre posibles nuevas formas de falsación.

## Resultado potencialmente afectado

Principalmente:

```text
15
```

y las investigaciones futuras reguladas por sus restricciones.

## Evidencia relevante

Un caso donde:

```text
RM-01…RM-08
```

se cumplan y, sin embargo, aparezca:

- una eliminación ilegítima;
- una conservación arbitraria;
- una nueva clase de falsador;
- o una obligación investigadora independiente no cubierta.

## Estado

```text
PA-12 — PA-OPEN
```

---

# `PA-13 — Relación entre PCD y restricciones metateóricas`

## Pregunta

> ¿Alguna de `RM-01…RM-08` debe incorporarse formalmente al PCD o debe mantenerse estrictamente la separación entre disciplina documental y disciplina metateórica?

## Motivación

Actualmente:

```text
99
→ disciplina documental

15
→ disciplina metateórica
```

y las `RM` no fueron importadas automáticamente al protocolo.

La frontera sigue abierta.

## Resultado potencialmente afectado

```text
15
99
```

## Evidencia relevante

Una situación donde el PCD permita consolidar correctamente un documento cuya investigación viole una `RM` de modo que el defecto no quede detectado documentalmente.

## Estado

```text
PA-13 — PA-OPEN
```

---

# `PA-14 — Criterio de suficiencia para cerrar una investigación`

## Pregunta

> ¿Cuándo existe evidencia suficiente para congelar provisionalmente una investigación sin exigir una exploración indefinida del espacio de contraejemplos?

## Motivación

Debe evitarse:

```text
cierre prematuro
```

pero también:

```text
investigación infinita
```

El PCD regula cómo cerrar documentalmente.

No determina por completo cuándo existe suficiente fundamento intelectual para hacerlo.

## Resultado potencialmente afectado

Principalmente:

```text
15
99
```

y la metodología futura.

## Evidencia relevante

Un criterio que combine, por ejemplo:

- heterogeneidad de pruebas;
- ausencia de falsadores encontrados;
- estabilidad reconstructiva;
- cobertura del alcance;
- condiciones explícitas de reapertura;

sin convertir la ausencia de contraejemplos en demostración absoluta.

## Estado

```text
PA-14 — PA-OPEN
```

---

# `PA-15 — Criterio de generalización desde evidencia local`

## Pregunta

> ¿Bajo qué condiciones una colección suficientemente amplia y heterogénea de resultados locales puede justificar una hipótesis o conclusión universal sin convertir la mera recurrencia en prueba de universalidad?

## Motivación

Actualmente:

```text
recurrente
⇏
universal
```

Pero tampoco debería adoptarse el extremo:

```text
ninguna cantidad
de evidencia local
puede apoyar jamás
una generalización
```

Esta cuestión es distinta de `PA-03`.

`PA-03` pregunta si existe algo necesariamente presente en toda especialización pertinente.

`PA-15` pregunta qué fuerza epistemológica puede tener la evidencia local acumulada.

## Resultado potencialmente afectado

```text
08
15
```

y potencialmente los resultados universales vacíos.

## Evidencia relevante

Una familia de especializaciones suficientemente heterogénea donde aparezca la misma obligación por una razón común independiente y sometible a falsación.

## Estado

```text
PA-15 — PA-OPEN
```

---

# Líneas externas de comprobación

No toda actuación futura relevante debe clasificarse como pregunta abierta.

La auditoría de proporcionalidad identificó una actuación legítima que conviene registrar separadamente.

---

# `LEC-01 — Auditoría externa independiente de la metateoría`

## Objeto

Realizar, cuando resulte posible, una reconstrucción independiente del proceso investigador sin depender de las clasificaciones históricas ni de la autoauditoría actual.

## Justificación

`15` reconoce:

```text
autoevaluación
≠
validación independiente absoluta
```

La cuestión histórica:

> ¿una auditoría externa reproduciría los resultados actuales?

no se conserva como `PA` porque sólo puede responderse realizando efectivamente esa auditoría.

Por tanto su estatuto correcto es:

```text
línea externa de comprobación
```

y no:

```text
pregunta conceptual abierta
```

## Posible impacto

Principalmente:

```text
15
```

y, si apareciese un fallo suficientemente fuerte, los documentos afectados por el criterio cuestionado.

## Estado

```text
LEC-01 — PENDIENTE
```

---

# Preguntas históricas que no se reabren

No se reincorporan automáticamente cuestiones como:

```text
¿existe P-001?

¿existe CAN-F1?

¿existe CAN-F2?

¿existe CAN-F3?

¿S y V son irreducibles?

¿CE y TV son irreducibles?

¿Formar-U y Reconstruir son distintos?

¿U y Φ son irreducibles?

¿K es una categoría uniforme?

¿existe capacidad relacional n-aria fundamental?

¿PMG-1 y PMG-2 son principios universales?
```

Estas cuestiones ya produjeron resultados reconstructivos.

Su importancia histórica no las convierte nuevamente en preguntas abiertas.

Sólo podrán reabrirse mediante evidencia nueva que satisfaga las condiciones correspondientes.

---

# Falsas preguntas abiertas

No deberán admitirse cuestiones como:

```text
¿podría existir algo
completamente diferente?
```

si no especifican:

- qué contraste introducirían;
- qué resultado afectarían;
- qué evidencia sería relevante.

Tampoco preguntas puramente terminológicas como:

```text
¿podríamos llamar X
de otro modo?
```

cuando no alteran ninguna discriminación.

---

# Auditoría de irreducibilidad del conjunto

El conjunto final queda:

```text
PA-01 — Contraste universal nuevo

PA-02 — Nueva región fenomenológica

PA-03 — Promoción de especializado a universal

PA-04 — Emergencia entre especializaciones

PA-05 — Frontera especialización/realización

PA-06 — Robustez reconstructiva

PA-07 — Frontera configuración/interpretación

PA-08 — Equivalencia representacional

PA-09 — Equivalencia reconstructiva

PA-10 — Alcance del dominio

PA-11 — Dependencia del corpus

PA-12 — Exhaustividad metateórica

PA-13 — Frontera RM/PCD

PA-14 — Suficiencia para cierre

PA-15 — Generalización desde evidencia local
```

No se detecta actualmente una reducción completa de una pregunta a otra.

Existen dependencias parciales, pero no identidad funcional.

---

# Resultado de la depuración

La primera versión contenía:

```text
18 preguntas abiertas
```

La auditoría produjo:

```text
PA-13 anterior
+
PA-14 anterior
+
contenido relevante de PA-18 anterior
        ↓
nueva PA-12
```

La antigua:

```text
PA-12 — Auditoría externa
```

pasa a:

```text
LEC-01
```

La antigua `PA-07` se restringe a una cuestión operacional dentro del alcance de la plataforma.

La antigua `PA-17` se reformula como:

```text
PA-15 — Criterio de generalización
desde evidencia local
```

Resultado:

```text
Preguntas abiertas irreducibles:
15

Líneas externas de comprobación:
1
```

---

# Prioridad epistemológica

## Prioridad máxima

```text
PA-09 — Equivalencia reconstructiva

PA-10 — Alcance efectivo del dominio

PA-11 — Dependencia de la selección del corpus
```

Estas preguntas atacan presupuestos potencialmente transversales del proceso completo.

---

## Prioridad alta

```text
PA-01
PA-02
PA-03
PA-06
PA-12
PA-14
```

Pueden afectar resultados universales, reconstrucciones o la disciplina general del método.

---

## Prioridad media

```text
PA-04
PA-05
PA-07
PA-08
PA-13
PA-15
```

Pueden modificar fronteras o criterios concretos, pero no existe actualmente evidencia de fallo global.

---

## Comprobación externa

```text
LEC-01
```

Su realización aportaría independencia respecto de la autoauditoría metateórica.

---

# Matriz de impacto

| Pregunta | Impacto principal            |
| -------- | ---------------------------- |
| `PA-01`  | `03–07`, `14`                |
| `PA-02`  | `02`, `03`, `14`             |
| `PA-03`  | `05`, `06`, `07`, `08`       |
| `PA-04`  | `05`, `06`, `08`, `14`       |
| `PA-05`  | `08`, `13`                   |
| `PA-06`  | `03–07`, `12`                |
| `PA-07`  | `07`, `09`, `12`, `13`, `14` |
| `PA-08`  | `12`, `13`, `14`             |
| `PA-09`  | `12`, `15`                   |
| `PA-10`  | `02–15`                      |
| `PA-11`  | `02`, `03`, `14`, `15`       |
| `PA-12`  | `15`                         |
| `PA-13`  | `15`, `99`                   |
| `PA-14`  | `15`, `99`                   |
| `PA-15`  | `08`, `15`                   |

---

# Compatibilidad con `14`

Actualmente:

```text
COBERTURA_GLOBAL_ACTUAL = PASS
```

y:

```text
PA-OPEN = 15
```

No existe contradicción.

`14` afirma:

> No se ha detectado actualmente ningún hueco dentro del corpus y alcance declarados.

`10` afirma:

> Existen cuestiones cuya investigación futura podría modificar ese estado.

Por tanto:

```text
cobertura actual
+
apertura futura
```

son compatibles.

---

# Compatibilidad con `15`

Actualmente:

```text
FIABILIDAD_METATEÓRICA_INTERNA
=
APOYADA_PROVISIONALMENTE
```

y permanecen abiertas cuestiones como:

```text
PA-09
PA-10
PA-11
PA-12
PA-13
PA-14
PA-15
```

Esto tampoco constituye contradicción.

El carácter:

```text
PROVISIONAL
```

de `15` exige precisamente mantener falsadores y problemas metateóricos abiertos.

---

# Regla de promoción a reapertura

Una pregunta `PA-n` sólo producirá `TD-2` cuando aparezca evidencia `E` tal que:

```text
E
→
contradicción
o
pérdida
o
insuficiencia demostrada
```

respecto de un resultado consolidado.

Entonces:

```text
PA-n
↓
PA-FALSIFIER
↓
identificación documental
↓
TD-2
```

---

# Regla de resolución

Una pregunta podrá pasar a:

```text
PA-RESOLVED
```

cuando exista una respuesta suficientemente justificada.

La resolución deberá registrar:

1. pregunta original;
2. investigación realizada;
3. evidencia;
4. respuesta;
5. documentos afectados;
6. existencia o no de reapertura;
7. nuevas condiciones de falsación.

---

# Regla de eliminación

Una pregunta podrá pasar a:

```text
PA-DROPPED
```

si se demuestra que:

- ya estaba resuelta;
- era redundante;
- dependía de una categoría eliminada;
- carecía de incidencia reconstructiva;
- era puramente terminológica;
- o su función pertenece realmente a otro tipo documental.

---

# Regla de incorporación de nuevas preguntas

Una nueva cuestión deberá pasar por:

```text
candidata
↓
PA-A
PA-I
PA-P
PA-1…PA-6
↓
admisión
o
rechazo
```

Esto evita que `10` crezca indefinidamente como inventario de posibilidades.

---

# Resultado cuantitativo

```text
Preguntas de la primera versión:
18

Preguntas tras depuración:
15

Preguntas fusionadas:
2

Pregunta absorbida parcialmente:
1

Preguntas reclasificadas:
1

Líneas externas de comprobación:
1

PA-OPEN:
15

PA-RESOLVED:
0

PA-FALSIFIER:
0

PA-DROPPED:
0

TD-2 activados:
0
```

---

# Resultado conceptual

El estado actual queda:

```text
TEORÍA CONSOLIDADA
+
PREGUNTAS ABIERTAS CONTROLADAS
+
LÍNEAS EXTERNAS DE COMPROBACIÓN
```

y no:

```text
TEORÍA CERRADA
```

ni:

```text
TEORÍA INDETERMINADA
```

La apertura queda estructurada sin deshacer la consolidación alcanzada.

---

# Conclusiones

## `PA-C1`

Una pregunta abierta sólo pertenece a `10` cuando representa una indeterminación real con incidencia identificable.

## `PA-C2`

La existencia de una pregunta abierta no constituye por sí sola evidencia suficiente para reabrir un documento.

## `PA-C3`

Las preguntas históricas ya resueltas no recuperan automáticamente el estado abierto.

## `PA-C4`

Todo resultado consolidado permanece potencialmente falsable, pero no toda posibilidad lógica constituye un falsador.

## `PA-C5`

El conjunto de preguntas puede crecer, reducirse y modificarse sin alterar automáticamente la teoría consolidada.

## `PA-C6`

Una pregunta sólo activa reapertura cuando produce evidencia suficiente de pérdida, contradicción o insuficiencia.

## `PA-C7`

La cobertura global actual y la existencia de preguntas abiertas son compatibles.

## `PA-C8`

La fiabilidad metateórica provisional exige conservar explícitamente cuestiones capaces de ponerla a prueba.

## `PA-C9`

Una actuación futura relevante puede requerir registro sin constituir necesariamente una pregunta abierta; de ahí la separación de `LEC-01`.

## `PA-C10`

Las preguntas abiertas también están sometidas a reducción: su mera existencia histórica no justifica su conservación documental.

---

# Resultado final

El conjunto vigente es:

```text
PA = {
  PA-01,
  PA-02,
  PA-03,
  PA-04,
  PA-05,
  PA-06,
  PA-07,
  PA-08,
  PA-09,
  PA-10,
  PA-11,
  PA-12,
  PA-13,
  PA-14,
  PA-15
}
```

con:

```text
∀Q ∈ PA:
estado(Q) = PA-OPEN
```

y:

```text
LEC = {
  LEC-01
}
```

con:

```text
estado(LEC-01) = PENDIENTE
```

No se activa actualmente ninguna reapertura.

---

# Control de impacto documental

La presente construcción no proporciona evidencia suficiente para reabrir:

```text
02
03
04
05
06
07
08
09
12
13
14
15
99
```

Resultado:

```text
REAPERTURAS INMEDIATAS = 0
```

---

# Condición de actualización

`10-preguntas-abiertas.md` deberá actualizarse cuando:

1. se formule una nueva pregunta que supere los criterios de admisión;
2. una pregunta pase a `PA-RESOLVED`;
3. una pregunta pase a `PA-FALSIFIER`;
4. una pregunta pase a `PA-DROPPED`;
5. cambie algún resultado consolidado al que una pregunta haga referencia;
6. cambie el alcance declarado del dominio;
7. una auditoría revele redundancias entre preguntas;
8. aparezca una nueva línea externa de comprobación suficientemente justificada.

---

# Siguiente documento

Una vez consolidado provisionalmente `10-preguntas-abiertas.md`, el siguiente documento del orden de construcción será:

```text
11-glosario.md
```

Su función no será crear una ontología ni convertir el vocabulario recurrente en categorías conceptuales.

Deberá registrar:

```text
término
+
definición contextual
+
estatuto
+
nivel
+
vigencia
+
uso histórico cuando proceda
+
advertencias contra reificación
```

con especial cuidado respecto del vocabulario eliminado o externalizado.

---

## Pendiente

Permanecen abiertas:

```text
PA-01…PA-15
```

Permanece pendiente como comprobación externa:

```text
LEC-01
```

Ninguna de ellas activa actualmente una reapertura documental.
