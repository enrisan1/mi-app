# 17-indice-general.md

# Índice general

## Propósito

Este documento proporciona el mapa general del corpus conceptual consolidado.

Su función consiste en permitir determinar, para cada documento:

- qué problema aborda;
- qué producto documental genera;
- qué nivel ocupa;
- de qué documentos recibe contexto;
- qué documentos pueden utilizar posteriormente sus resultados;
- qué relaciones documentales mantiene;
- qué estado de consolidación posee;
- y en qué orden resulta recomendable leerlo.

No constituye un resumen sustitutivo de la teoría.

No introduce:

- conceptos nuevos;
- resultados nuevos;
- primitivas;
- axiomas;
- funciones;
- relaciones conceptuales;
- responsabilidades sustantivas;
- criterios de reducción;
- ni reglas metateóricas nuevas.

La regla central es:

```text
índice documental
≠
teoría
```

y:

```text
orden de lectura
≠
orden deductivo necesario
```

---

# Estado documental

`17-indice-general.md` fue construido inicialmente después de la reconstrucción documental de `02–15`, `10`, `11` y `99`.

Posteriormente, la reparación de un error de clasificación física entre:

```text
docs/03-conceptual-model/
```

y:

```text
docs/04-governance/
```

permitió comprobar que el índice no representaba todavía de forma completa tres documentos pertenecientes al corpus:

```text
00-marco-teorico.md
01-investigacion.md
16-bitacora-de-consolidacion.md
```

La reapertura posterior de `00-marco-teorico.md` mediante `TD-2` confirmó que los tres poseen productos documentales propios e irreducibles.

Por tanto, la presente versión constituye una reapertura localizada de `17-indice-general.md`.

---

# Reapertura localizada

La presente versión se desarrolla mediante:

```text
TD-2 — Reapertura
```

La reapertura no se produce porque haya sido falsada la arquitectura documental fundamental establecida anteriormente.

Se produce porque el alcance del índice había quedado incompleto.

La situación detectada fue:

```text
arquitectura documental como red
        → válida

no linealización
        → válida

productos propios de 02–15, 10, 11, 17 y 99
        → válidos

representación funcional de 00
        → ausente

representación funcional de 01
        → ausente

representación funcional de 16
        → ausente
```

La reapertura tiene, por tanto, alcance exclusivamente:

```text
documental
+
navegacional
+
de sincronización
```

No reabre mediante esta actuación ningún resultado conceptual consolidado en `02–15`.

---

# Resultado de la auditoría localizada

La revisión produjo:

| Zona auditada                        | Resultado                 |
| ------------------------------------ | ------------------------- |
| Propósito del índice                 | `PASS`                    |
| `orden documental ≠ orden deductivo` | `PASS`                    |
| Tipos de relaciones documentales     | `PASS`                    |
| Arquitectura como red                | `PASS`                    |
| Bloques documentales                 | `RECONSTRUIDOS`           |
| Alcance del corpus                   | `RECONSTRUIDO`            |
| Mapa documental general              | `RECONSTRUIDO`            |
| Descripción individual de documentos | `AMPLIADA`                |
| Matriz funcional                     | `AMPLIADA`                |
| Matriz de niveles                    | `AMPLIADA`                |
| Dependencias principales             | `AMPLIADAS`               |
| Órdenes de lectura                   | `AJUSTADOS`               |
| Estado documental del corpus         | `ACTUALIZADO`             |
| Cifras finales                       | `ACTUALIZADAS`            |
| `IG-M1…IG-M6`                        | `PASS`                    |
| Criterios de incorporación/fusión    | `PASS`                    |
| No reificación documental            | `PASS`                    |
| No linealización                     | `PASS`                    |
| Irreducibilidad documental           | `PASS` tras ampliación    |
| Cobertura documental                 | `PASS` tras recalculación |

No se detectó ningún `FAIL` conceptual.

---

# Alcance

Este índice organiza el corpus completo actualmente conservado de:

```text
research/corpus/conceptual-model/
```

compuesto por:

```text
00-marco-teorico.md
01-investigacion.md
02-fenomenos-fundamentales.md
03-reduccion-de-fenomenos.md
04-exigencias-estructurales.md
05-perfil-funcional.md
06-axiomas.md
07-conclusiones-consolidadas.md
08-regimen-de-especializacion.md
09-validacion-por-casos.md
10-preguntas-abiertas.md
11-glosario.md
12-reconstrucciones-conservativas.md
13-marco-de-realizacion.md
14-auditoria-global-de-cobertura.md
15-auditoria-de-la-metateoria.md
16-bitacora-de-consolidacion.md
17-indice-general.md
```

El corpus contiene actualmente:

```text
18 archivos
```

El protocolo que regula transversalmente su construcción, revisión, congelación, reapertura y registro se conserva actualmente fuera de este corpus en:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
```

Su posición externa no elimina su aplicabilidad metodológica al corpus ni lo convierte en parte del contenido conceptual conservado en `research/corpus/conceptual-model/`.

La numeración no expresa por sí sola:

- orden lógico;
- prioridad epistemológica;
- secuencia temporal;
- dependencia deductiva;
- autoridad conceptual.

---

# Principio de interpretación del índice

La presencia de una flecha documental como:

```text
A
↓
B
```

significa:

> `B` puede utilizar resultados, contexto, restricciones o información procedente de `A`.

No significa necesariamente:

```text
A ⊢ B
```

ni:

```text
B es consecuencia lógica completa de A
```

Las reaperturas recientes han demostrado repetidamente que documentos sucesivos deben realizar su propia investigación y no importar automáticamente las conclusiones del nivel anterior.

Por tanto:

```text
dependencia documental
≠
deducción automática
```

---

# Tipos de relación documental

Se distinguen las siguientes relaciones principales.

## `ENTRADA`

Un documento utiliza otro como contexto, corpus, resultado o restricción inicial.

---

## `SALIDA`

Un documento produce un resultado susceptible de utilización posterior.

---

## `CONTROL`

Un documento audita, valida o restringe resultados de otro.

---

## `REFERENCIA`

Un documento permite interpretar vocabulario, estados o estructura sin aportar fundamento conceptual directo.

---

## `REAPERTURA`

Un documento puede producir evidencia que active `TD-2` sobre otro documento.

---

## `METODOLÓGICA`

Un documento regula las condiciones bajo las que se desarrolla una investigación sin determinar su resultado sustantivo.

---

## `HISTÓRICA`

Un documento conserva el camino investigador o documental que permite reconstruir cómo se alcanzó el estado vigente.

---

## `DOCUMENTAL`

Un documento regula construcción, revisión, congelación, registro o navegación del corpus.

---

# Capas documentales

El corpus puede organizarse funcionalmente en siete bloques.

```text
I.   Marco e investigación

II.  Base fenomenológica y reductiva

III. Reconstrucción del núcleo universal

IV.  Consolidación y especialización

V.   Prueba, reconstrucción y realización

VI.  Auditorías globales y metateóricas

VII. Apertura, terminología y navegación
```

Además existe una función transversal interna:

```text
16
→ memoria documental
```

y una relación metodológica externa:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
→ gobierno documental transversal aplicable
```

Esta organización es exclusivamente documental.

No constituye una nueva arquitectura conceptual del dominio.

---

# I — Marco e investigación

```text
00-marco-teorico.md
        │
        ↓
01-investigacion.md
```

La relación no es deductiva.

`00` regula las condiciones metodológicas de investigación.

`01` conserva el desarrollo histórico y justificativo de las investigaciones realizadas bajo marcos metodológicos sucesivos.

---

# II — Base fenomenológica y reductiva

```text
02-fenomenos-fundamentales.md
        ↓
03-reduccion-de-fenomenos.md
```

Su función conjunta consiste en conservar el corpus de situaciones y contrastes y determinar qué contenido diferencial resiste las pruebas de reducción.

---

# III — Reconstrucción del núcleo universal

```text
04-exigencias-estructurales.md
        ↓
05-perfil-funcional.md
        ↓
06-axiomas.md
```

Estos documentos investigan sucesivamente si sobreviven:

```text
exigencias estructurales universales positivas
        ↓
funciones universales necesarias
        ↓
firma y axiomas universales positivos
```

Sus resultados no se deducen automáticamente unos de otros.

Cada documento realiza su propia investigación.

---

# IV — Consolidación y especialización

```text
07-conclusiones-consolidadas.md
        ↓
08-regimen-de-especializacion.md
```

`07` integra el estado teórico vigente.

`08` determina qué ocurre cuando el núcleo universal no impone una estructura positiva, pero una especialización concreta puede justificar contenido local.

---

# V — Prueba, reconstrucción y realización

```text
09-validacion-por-casos.md

12-reconstrucciones-conservativas.md

13-marco-de-realizacion.md
```

Sus trabajos son distintos:

```text
09
→ ¿resiste el estado actual
   casos concretos?

12
→ ¿las eliminaciones conservan
   el contenido legítimo histórico?

13
→ ¿puede realizarse el contenido
   sin convertir decisiones técnicas
   en compromisos conceptuales?
```

No forman necesariamente una cadena única.

---

# VI — Auditorías globales y metateóricas

```text
14-auditoria-global-de-cobertura.md
        ↓
15-auditoria-de-la-metateoria.md
```

`14` audita el resultado teórico como conjunto.

`15` audita el procedimiento que produjo dicho resultado.

Por tanto:

```text
auditoría del objeto
≠
auditoría del método
```

---

# VII — Apertura, terminología y navegación

```text
10-preguntas-abiertas.md

11-glosario.md

17-indice-general.md
```

Sus funciones son:

```text
10
→ conservar cuestiones
   genuinamente abiertas

11
→ estabilizar vocabulario
   y estatutos

17
→ hacer navegable
   el corpus documental
```

No amplían automáticamente el núcleo conceptual.

---

# Memoria documental transversal

```text
16-bitacora-de-consolidacion.md
```

no pertenece a una única fase conceptual.

Registra cronológicamente:

- construcciones;
- revisiones;
- reaperturas;
- congelaciones;
- cambios de nombre;
- auditorías;
- decisiones de consolidación.

Su relación con el corpus es histórica y transversal.

Por tanto:

```text
posición en la bitácora
=
cronología de consolidación
```

y no:

```text
posición en la bitácora
=
numeración del documento
```

---

# Gobierno documental transversal

El protocolo conservado actualmente en:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
```

gobierna transversalmente este corpus en materia de:

- construcción;
- auditoría;
- revisión;
- congelación;
- reapertura;
- registro.

No pertenece a una fase conceptual concreta.

Por tanto:

```text
PCD
≠
premisa conceptual anterior a 00
```

y:

```text
PCD
≠
resultado teórico del dominio
```

---

# Mapa documental general

Una representación simplificada del corpus es:

```text
                  00
          Marco metodológico
                   │
                   │ regula
                   ↓
                  01
      Investigación y reaperturas
                   │
                   ↓
             02 → 03
                   ↓
             04 → 05 → 06
                   ↓
                  07
                   ↓
                  08
             ┌─────┴─────┐
             ↓           ↓
            09          12
                         ↓
                        13
             └─────┬─────┘
                   ↓
                  14
                   ↓
                  15
                   ↓
                  10
                   ↓
                  11
                   ↓
                  17
```

con:

```text
16
→ memoria histórica transversal
```

y con una relación metodológica externa:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
→ gobierno documental transversal aplicable
```

Este esquema es navegacional.

No representa una cadena deductiva estricta.

---

# `00-marco-teorico.md`

## Función propia

Establecer el marco metodológico general bajo el que se investigan, contrastan, reconstruyen, consolidan y reabren los resultados del Modelo Conceptual.

## Nivel

```text
METODOLÓGICO / METATEÓRICO
```

## Producto principal

Un marco de investigación compatible con:

```text
R-DPV-268
RM-01…RM-08
PCD
arquitectura documental no lineal
```

sin imponer por anticipado un núcleo conceptual positivo.

## Resultados relevantes

La reapertura `TD-2` reconstruyó:

```text
PM-001…PM-010
CA-001…CA-007
criterio de agotamiento
clasificación de resultados
criterio de cierre
arquitectura documental
```

y sustituyó:

```text
PM-006 — Reducción máxima
```

por:

```text
PM-006 — Economía teórica
sin sesgo eliminativista
```

## Distinción central

```text
método
≠
resultado sustantivo
```

## Relaciones principales

Actúa metodológicamente sobre las investigaciones del corpus.

No permite deducir automáticamente los resultados de `02–15`.

## Estado

✔ Consolidado provisionalmente

---

# `01-investigacion.md`

## Función propia

Conservar el desarrollo justificativo e histórico de las investigaciones del Modelo Conceptual.

## Nivel

```text
INVESTIGACIÓN / HISTÓRICO / JUSTIFICATIVO
```

## Producto principal

Registro acumulativo de:

```text
investigaciones 001–010
+
reapertura H-DPV-107
+
cierre R-DPV-268
```

## Distinción central

```text
historia de investigación
≠
estado teórico vigente
```

Las formulaciones anteriores deberán interpretarse en su contexto histórico.

Los resultados vigentes se determinan mediante:

- cierres posteriores;
- reaperturas;
- documentos consolidados competentes.

## Estado

✔ Vigente como registro acumulativo de investigación

---

# `02-fenomenos-fundamentales.md`

## Función propia

Registrar y organizar las regiones fenomenológicas y los contrastes que constituyen el corpus de investigación.

## Nivel

```text
FENOMENOLÓGICO
```

## Pregunta principal

> ¿Qué diferencias y situaciones debe ser capaz de conservar y someter a investigación la teoría?

## Entrada principal

Corpus de casos y contrastes.

## Salida principal

Regiones fenomenológicas y contrastes formulados sin presuponer automáticamente irreducibilidad.

## Resultado relevante

Las regiones funcionan como:

```text
regiones de investigación
```

y no como primitivas universales.

## Utilizado por

```text
03
09
14
10
```

## Estado

✔ Consolidado provisionalmente

---

# `03-reduccion-de-fenomenos.md`

## Función propia

Someter las regiones y contrastes de `02` a reducción sin utilizar como reductores presupuestos:

```text
identidad
persistencia
estructura
evolución
```

## Nivel

```text
FENOMENOLÓGICO / REDUCTIVO
```

## Entrada principal

`02-fenomenos-fundamentales.md`

## Salida principal

Determinación de qué contenido diferencial sobrevive sin exigir fenómenos universalmente irreducibles.

## Resultado principal

```text
F_irreducibles_universales = ∅
```

## Utilizado por

```text
04
07
09
12
14
10
```

## Estado

✔ Consolidado provisionalmente

---

# `04-exigencias-estructurales.md`

## Función propia

Investigar si los contrastes supervivientes obligan a introducir exigencias estructurales universales positivas.

## Nivel

```text
ESTRUCTURAL / METATEÓRICO
```

## Entrada principal

Resultados de `03`.

## Precaución

No importa automáticamente:

```text
F_irreducibles_universales = ∅
```

como demostración de su propio resultado.

Realiza su reconstrucción independientemente.

## Resultado principal

```text
ES_universales_positivas = ∅
```

## Contenido histórico conservado

```text
ES-001
ES-002
ES-003
```

sin conservar su antiguo estatuto generador de un perfil funcional positivo necesario.

## Utilizado por

```text
05
07
12
14
```

## Estado

✔ Consolidado provisionalmente

---

# `05-perfil-funcional.md`

## Función propia

Determinar si existe un conjunto mínimo de funciones universales necesarias.

## Nivel

```text
FUNCIONAL / METATEÓRICO
```

## Entrada principal

`04-exigencias-estructurales.md`

## Precaución

No importa automáticamente:

```text
ES_universales_positivas = ∅
```

como prueba de:

```text
PF_min = ∅
```

## Resultado principal

```text
PF_min = ∅
```

## Contenido histórico relevante

Reducción de:

```text
CAN-F1
CAN-F2
CAN-F3
```

como capacidades funcionales universales.

## Utilizado por

```text
06
07
12
14
```

## Estado

✔ Consolidado provisionalmente

---

# `06-axiomas.md`

## Función propia

Investigar de manera independiente si sobreviven:

- una firma conceptual universal positiva;
- sortes universales;
- formas relacionales universales;
- axiomas sustantivos universales.

## Nivel

```text
FORMAL / AXIOMÁTICO / METATEÓRICO
```

## Entrada principal

`05-perfil-funcional.md`

## Candidatos reconstruidos

```text
P-001
O
MA-001
MA-002
```

## Resultados principales

```text
Σ_min = ∅

Ax_min = ∅
```

## Precaución

```text
PF_min = ∅
```

no se utiliza como conclusión automática sobre firma o axiomas.

## Utilizado por

```text
07
08
12
14
```

## Estado

✔ Consolidado provisionalmente

---

# `07-conclusiones-consolidadas.md`

## Función propia

Integrar los resultados teóricos vigentes después de las reducciones y reconstrucciones fundamentales.

## Nivel

```text
CONSOLIDACIÓN TEÓRICA
```

## Entradas principales

```text
02
03
04
05
06
```

## Salida principal

Estado teórico consolidado.

## Función específica

No vuelve a investigar cada resultado.

Los organiza y expresa conjuntamente.

## Precaución

```text
consolidación
≠
demostración nueva
```

## Utilizado por

```text
08
09
12
13
14
10
11
```

## Estado

✔ Consolidado provisionalmente

---

# `08-regimen-de-especializacion.md`

## Función propia

Determinar qué estatuto posee el contenido positivo introducido dentro de alcances particulares cuando el núcleo universal no impone estructura positiva.

## Nivel

```text
ESPECIALIZACIÓN / METATEÓRICO
```

## Entrada principal

`07-conclusiones-consolidadas.md`

## Resultado principal

```text
RE_universal_positivo = ∅
```

compatible con:

```text
Σ_E ≠ ∅

Ax_E ≠ ∅
```

cuando estén localmente justificados.

## Distinción central

```text
núcleo universal vacío
≠
especialización vacía
```

## Utilizado por

```text
09
12
13
14
10
11
```

## Estado

✔ Consolidado provisionalmente

---

# `09-validacion-por-casos.md`

## Función propia

Someter los resultados consolidados a casos concretos y heterogéneos buscando falsadores.

## Nivel

```text
VALIDACIÓN / METODOLÓGICO
```

## Entradas principales

```text
07
08
```

junto con los casos seleccionados.

## Estados

```text
PASS
FAIL
OPEN
```

## Resultado actual

```text
Casos examinados = 10

PASS = 10
FAIL = 0
OPEN = 0
```

## Precaución

```text
PASS
≠
demostración definitiva
```

## Capacidad de reapertura

Puede producir falsadores de resultados anteriores.

## Utilizado por

```text
12
14
10
```

## Estado

✔ Consolidado provisionalmente

---

# `12-reconstrucciones-conservativas.md`

## Función propia

Comprobar que la eliminación de categorías históricas no haya eliminado también el contenido legítimo que aquellas expresaban.

## Nivel

```text
RECONSTRUCTIVO / METATEÓRICO
```

## Entradas principales

Resultados eliminativos de:

```text
03–08
```

y vocabulario histórico relevante.

## Pregunta principal

> ¿Puede conservarse el contenido legítimo sin restaurar fundamentalidad, universalidad o necesidad a la categoría histórica?

## Estados

```text
RC-PASS
RC-FAIL
RC-OPEN
```

## Resultado actual

```text
Reconstrucciones = 19

RC-PASS = 19
RC-FAIL = 0
RC-OPEN = 0
```

## Distinción central

```text
eliminación de categoría
≠
eliminación de contraste
```

## Utilizado por

```text
13
14
10
11
```

## Estado

✔ Consolidado provisionalmente

---

# `13-marco-de-realizacion.md`

## Función propia

Investigar la frontera entre compromisos conceptuales especializados y mecanismos técnicos de realización.

## Nivel

```text
REALIZACIÓN / METATEÓRICO
```

## Entradas principales

```text
08
12
```

## Pregunta principal

> ¿Qué debe conservar una realización concreta sin convertir sus decisiones técnicas en nuevos compromisos conceptuales?

## Resultado principal

```text
MR_universal_positivo = ∅
```

## Distinciones centrales

```text
hecho técnico
⇏
hecho conceptual
```

y:

```text
compromiso conceptual
⇏
implementación técnica única
```

## Utilizado por

```text
14
10
11
```

## Estado

✔ Consolidado provisionalmente

---

# `14-auditoria-global-de-cobertura.md`

## Función propia

Auditar transversalmente el sistema completo y comprobar si quedan:

- contrastes sin conservar;
- huecos;
- interfaces abiertas;
- pérdidas;
- propiedades emergentes;
- reintroducciones silenciosas.

## Nivel

```text
AUDITORÍA GLOBAL / METATEÓRICO
```

## Entradas principales

```text
02–13
```

## Resultado principal

```text
COBERTURA_GLOBAL_ACTUAL = PASS
```

## Resultados cuantitativos

```text
CG-PASS = 18
CG-FAIL = 0
CG-OPEN = 0

IF-PASS = 8
IF-FAIL = 0
```

## Precaución

```text
cobertura global actual
≠
completitud absoluta
```

## Utilizado por

```text
15
10
11
```

## Estado

✔ Consolidado provisionalmente

---

# `15-auditoria-de-la-metateoria.md`

## Función propia

Auditar el procedimiento investigador que produjo los resultados consolidados.

## Nivel

```text
METATEORÍA
```

## Entrada principal

Historia y resultados de:

```text
02–14
```

y, cuando corresponda, el marco metodológico de `00`.

## Hipótesis rivales principales

```text
H-MT-E
→ sesgo eliminativista

H-MT-P
→ sesgo positivista
```

## Resultado principal

```text
FIABILIDAD_METATEÓRICA_INTERNA
=
APOYADA_PROVISIONALMENTE
```

## Resultados adicionales

```text
H-MT-E_fuerte = FALSADA

H-MT-P_fuerte = FALSADA
```

## Restricciones metateóricas

```text
RM-01…RM-08
```

## Precaución

```text
autoevaluación
≠
validación independiente absoluta
```

## Utilizado por

```text
00
10
11
```

y por investigaciones futuras.

## Estado

✔ Consolidado provisionalmente

---

# `10-preguntas-abiertas.md`

## Función propia

Registrar únicamente cuestiones genuinamente abiertas cuya investigación futura pueda modificar, restringir, extender o falsar resultados consolidados.

## Nivel

```text
APERTURA CONTROLADA / METATEÓRICO / DOCUMENTAL
```

## Entradas principales

```text
00–15
```

cuando sean pertinentes.

## Estados

```text
PA-OPEN
PA-RESOLVED
PA-FALSIFIER
PA-DROPPED
```

## Regla central

```text
PA-OPEN
⇏
TD-2
```

## Resultado actual

```text
Preguntas abiertas = 15

PA-OPEN = 15

Reaperturas activadas = 0
```

## Línea externa

```text
LEC-01
```

## Prioridad máxima

```text
PA-09
PA-10
PA-11
```

## Utilizado por

```text
11
17
```

y futuras investigaciones.

## Estado

✔ Consolidado provisionalmente

---

# `11-glosario.md`

## Función propia

Registrar y estabilizar vocabulario transversal indicando:

```text
definición
+
estatuto
+
nivel
+
calificadores
+
advertencias
```

## Nivel

```text
TERMINOLÓGICO / DOCUMENTAL / METALINGÜÍSTICO
```

## Entradas principales

Corpus consolidado y preguntas abiertas de `10`.

## Regla central

```text
término definido
⇏
categoría conceptual vigente
```

## Distinción central

```text
inventario terminológico
≠
inventario ontológico
```

## Reglas anti-reificación

```text
GR-1…GR-8
```

## Precaución

```text
documento de origen
>
glosario
```

## Utilizado por

```text
17
```

y por la lectura futura del corpus.

## Estado

✔ Consolidado provisionalmente

---

# `16-bitacora-de-consolidacion.md`

## Función propia

Conservar la cronología documental de construcciones, revisiones, reaperturas, congelaciones y decisiones de consolidación.

## Nivel

```text
DOCUMENTAL / HISTÓRICO / TRANSVERSAL
```

## Producto principal

Memoria cronológica de la consolidación del corpus.

Actualmente distingue:

```text
primera edición
        ↓
cierre editorial
        ↓
segunda etapa
        ↓
reapertura y reconstrucción
        ↓
actuaciones posteriores
```

## Regla central

```text
posición en la bitácora
=
cronología de consolidación
```

y no:

```text
posición en la bitácora
=
número del documento
```

## Distinción central

```text
bitácora
≠
fuente sustantiva del resultado
```

Los documentos de origen conservan prioridad sobre los resúmenes contenidos en la bitácora.

## Estado

✔ Vigente como registro acumulativo

---

# `17-indice-general.md`

## Función propia

Proporcionar el mapa de navegación y arquitectura documental del corpus.

## Nivel

```text
DOCUMENTAL / NAVEGACIÓN
```

## Entradas principales

Todos los documentos vigentes del corpus.

## Salida principal

Mapa de:

```text
funciones
niveles
entradas
salidas
dependencias
estados
órdenes de lectura
```

## Restricción principal

```text
orden documental
≠
orden deductivo necesario
```

## Estado

```text
TD-2 — Reapertura localizada
```

hasta superar nuevamente el PCD.

---

# Relación externa con el Protocolo de Consolidación Documental

El Protocolo de Consolidación Documental posee actualmente su referencia canónica en:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
```

## Función respecto del corpus

Regular el ciclo documental aplicable a la construcción, revisión, congelación y reapertura de los documentos consolidables del corpus.

## Estatuto

```text
EXTERNO AL CORPUS
+
DOCUMENTAL / TRANSVERSAL
```

El PCD no constituye un documento integrante de `conceptual-model`.

Su aplicabilidad al corpus no lo convierte en resultado conceptual ni en premisa teórica.

## Aplicación

Se aplica a los documentos consolidables del corpus cuando corresponda según la metodología vigente.

## Ciclo general

```text
PCD-1
Auditoría conceptual
        ↓
PCD-2
Versión completa auditable
        ↓
PCD-3
Revisión y aceptación explícita
        ↓
PCD-4
Congelación provisional
        ↓
PCD-5
Registro en bitácora
```

## Modos documentales

Conservan el estatuto definido por el protocolo canónico vigente.

## Precaución

```text
consolidación documental
≠
verdad conceptual
```

y:

```text
aplicabilidad del PCD
≠
pertenencia documental al corpus
```

---

# Matriz funcional general

| Documento | Producto propio                              |
| --------- | -------------------------------------------- |
| `00`      | Marco metodológico                           |
| `01`      | Historia y justificación de la investigación |
| `02`      | Corpus fenomenológico organizado             |
| `03`      | Reducción de fenómenos                       |
| `04`      | Estatuto de exigencias estructurales         |
| `05`      | Estatuto del perfil funcional                |
| `06`      | Estatuto de firma y axiomas                  |
| `07`      | Estado teórico consolidado                   |
| `08`      | Régimen de especialización                   |
| `09`      | Validación por casos                         |
| `10`      | Registro controlado de apertura              |
| `11`      | Estabilización terminológica                 |
| `12`      | Reconstrucción conservativa                  |
| `13`      | Frontera conceptual/realizativa              |
| `14`      | Cobertura global                             |
| `15`      | Auditoría del método                         |
| `16`      | Memoria cronológica de consolidación         |
| `17`      | Navegación documental                        |

Cada producto realiza una función distinta.

---

# Matriz de niveles

| Documento | Nivel principal                           |
| --------- | ----------------------------------------- |
| `00`      | Metodológico / metateórico                |
| `01`      | Investigación / histórico / justificativo |
| `02`      | Fenomenológico                            |
| `03`      | Fenomenológico / reductivo                |
| `04`      | Estructural / metateórico                 |
| `05`      | Funcional / metateórico                   |
| `06`      | Formal / axiomático / metateórico         |
| `07`      | Consolidación teórica                     |
| `08`      | Especialización / metateoría              |
| `09`      | Validación metodológica                   |
| `10`      | Apertura controlada                       |
| `11`      | Terminología                              |
| `12`      | Reconstrucción / metateoría               |
| `13`      | Realización / metateoría                  |
| `14`      | Auditoría global                          |
| `15`      | Metateoría                                |
| `16`      | Documental / histórico / transversal      |
| `17`      | Navegación documental                     |

---

# Matriz de resultados principales

| Documento | Resultado principal                                            |
| --------- | -------------------------------------------------------------- |
| `00`      | Marco metodológico reconstruido y compatible con `RM-01…RM-08` |
| `01`      | Historia acumulativa de investigación y reaperturas            |
| `03`      | `F_irreducibles_universales = ∅`                               |
| `04`      | `ES_universales_positivas = ∅`                                 |
| `05`      | `PF_min = ∅`                                                   |
| `06`      | `Σ_min = ∅`, `Ax_min = ∅`                                      |
| `08`      | `RE_universal_positivo = ∅`                                    |
| `09`      | `10 PASS / 0 FAIL / 0 OPEN`                                    |
| `12`      | `19 RC-PASS / 0 RC-FAIL / 0 RC-OPEN`                           |
| `13`      | `MR_universal_positivo = ∅`                                    |
| `14`      | `COBERTURA_GLOBAL_ACTUAL = PASS`                               |
| `15`      | `FIABILIDAD_METATEÓRICA_INTERNA = APOYADA_PROVISIONALMENTE`    |
| `10`      | `15 PA-OPEN`, `1 LEC pendiente`                                |
| `11`      | `COBERTURA TERMINOLÓGICA = PASS`                               |
| `16`      | Memoria cronológica acumulativa                                |
| `17`      | Mapa completo del corpus                                       |

`02` y `07` no se reducen apropiadamente a una única ecuación de resultado.

---

# Cadena de resultados universales negativos

El corpus contiene actualmente:

```text
F_irreducibles_universales = ∅

ES_universales_positivas = ∅

PF_min = ∅

Σ_min = ∅

Ax_min = ∅

RE_universal_positivo = ∅

MR_universal_positivo = ∅
```

Estos resultados aparecen en documentos diferentes y fueron obtenidos mediante investigaciones propias.

No debe interpretarse:

```text
F = ∅
↓ automático
ES = ∅
↓ automático
PF = ∅
↓ automático
Σ = ∅
↓ automático
Ax = ∅
```

Cada transición fue sometida a reconstrucción independiente.

Por tanto:

```text
secuencia documental
≠
cadena deductiva trivial
```

---

# Relación con `00-marco-teorico.md`

Los resultados vacíos anteriores no son supuestos metodológicos de `00`.

El marco metodológico debe poder producir en futuras investigaciones:

```text
∅
```

o:

```text
{X}
```

si la evidencia diferencial lo exige.

Por tanto:

```text
resultado histórico vacío
≠
sesgo metodológico hacia el vacío
```

---

# Contenido positivo superviviente

Los resultados negativos anteriores no equivalen a ausencia de contenido.

Sobreviven, entre otros:

```text
marco metodológico ≠ ∅

historia de investigación ≠ ∅

corpus fenomenológico ≠ ∅

contrastes ≠ ∅

especializaciones posibles ≠ ∅

Σ_E puede ser ≠ ∅

Ax_E puede ser ≠ ∅

relaciones locales posibles

criterios locales posibles

reconstrucciones conservativas posibles

realizaciones concretas posibles

preguntas abiertas ≠ ∅

RM-01…RM-08

PCD

memoria documental
```

Por tanto:

```text
núcleo universal positivo vacío
≠
teoría vacía
```

---

# Dependencias conceptuales principales

## Dependencia fenomenológica

```text
02
→
03
```

---

## Dependencia reconstructiva del núcleo

```text
03
→
04
→
05
→
06
```

con reconstrucción propia en cada transición.

---

## Dependencia de consolidación

```text
02–06
→
07
```

---

## Dependencia de especialización

```text
07
→
08
```

---

## Dependencia de prueba

```text
07 + 08
→
09
```

---

## Dependencia reconstructiva histórica

```text
03–09
→
12
```

---

## Dependencia realizativa

```text
08 + 12
→
13
```

---

## Dependencia de cobertura

```text
02–13
→
14
```

---

## Dependencia metateórica

```text
00 + 02–14
→
15
```

`15` puede posteriormente producir restricciones capaces de exigir reapertura de `00`, como ocurrió con `RM-01…RM-08`.

---

## Dependencia de apertura

```text
00–15
→
10
```

cuando las cuestiones correspondientes posean impacto identificable.

---

## Dependencia terminológica

```text
corpus vigente
→
11
```

---

## Dependencia de navegación

```text
00–17
→
17
```

en el sentido de que `17` debe representar fielmente el conjunto documental interno vigente de `conceptual-model`.

La relación con el PCD deberá representarse como interfaz metodológica externa y no como pertenencia al conjunto documental indexado.

---

# Dependencias transversales

## `00 — Relación metodológica`

```text
00
→
condiciones metodológicas
de investigación
```

No constituye una premisa sustantiva de los resultados.

---

## `01 — Relación histórico-justificativa`

```text
01
→
camino de investigación
y reapertura
```

Permite reconstruir cómo se alcanzaron determinados resultados.

---

## `16 — Relación histórico-documental`

```text
16
→
cronología de consolidación
```

No sustituye los documentos de origen.

---

## PCD — Relación externa de gobierno documental

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
        ↓
procedimientos de
construcción,
revisión,
congelación
y reapertura
```

Esta relación es metodológica y documental, pero externa al perímetro interno de `conceptual-model`.

---

# Relaciones de control retrospectivo

El corpus contiene controles hacia atrás.

```text
09
→ puede falsar resultados de 03–08

12
→ puede falsar eliminaciones de 03–08

13
→ puede revelar pérdidas entre
   especialización y realización

14
→ puede reabrir 02–13

15
→ puede cuestionar el método
   empleado en 00 y 02–14

10
→ puede producir PA-FALSIFIER
   y activar TD-2

11
→ puede detectar reificaciones
   o inconsistencias terminológicas

17
→ puede detectar incoherencias
   en la arquitectura documental

16
→ puede revelar discontinuidades
   en la historia de consolidación
```

Por tanto, la estructura documental no es puramente lineal.

---

# Estructura real de dependencias

Una representación simplificada es:

```text
                  00
                   │
                   ↓
                  01

02 → 03 → 04 → 05 → 06 → 07 → 08
│          │          │      │
│          └──────────┴──────┴────→ 12
│                                  ↓
│                                 13
│                                  │
├────────────────→ 09 ─────────────┤
│                                  ↓
└──────────────────────────────→ 14
                                   ↓
                                  15
                                   ↓
                                  10
                                   ↓
                                  11
                                   ↓
                                  17
```

con:

```text
00
→ regulación metodológica transversal interna

16
→ memoria histórica transversal interna
```

con una relación externa adicional:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
→ gobierno documental transversal aplicable
```

La figura no pretende representar todas las dependencias argumentativas internas.

---

# Orden recomendado de lectura — Comprensión conceptual completa

Para comprender el marco y el estado conceptual:

```text
00
↓
02
↓
03
↓
04
↓
05
↓
06
↓
07
↓
08
↓
09
↓
12
↓
13
↓
14
↓
15
↓
10
↓
11
↓
17
```

`01` y `16` deben consultarse cuando se necesite reconstruir la historia justificativa o documental.

---

# Orden recomendado de lectura — Entrada rápida

Para un lector que necesite comprender primero el estado general:

```text
07-conclusiones-consolidadas.md
        ↓
14-auditoria-global-de-cobertura.md
        ↓
15-auditoria-de-la-metateoria.md
        ↓
10-preguntas-abiertas.md
        ↓
11-glosario.md
```

Cuando necesite comprender el método:

```text
00-marco-teorico.md
```

Después podrá reconstruir los fundamentos mediante:

```text
02
03
04
05
06
08
09
12
13
```

---

# Orden recomendado de lectura — Reconstrucción histórica

Para comprender cómo se llegó al estado actual:

```text
00
↓
01
↓
02
↓
03
↓
04
↓
05
↓
06
↓
07
↓
08
↓
09
↓
12
↓
13
↓
14
↓
15
↓
10
↓
11
↓
16
↓
17
```

`16` proporciona la cronología de consolidación que complementa la historia justificativa conservada en `01`.

---

# Orden recomendado de lectura — Investigación futura

Antes de iniciar una nueva investigación:

```text
00
↓
15
↓
10
↓
11
```

y, transversalmente, el protocolo metodológico aplicable:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
```

El PCD regula el procedimiento documental de la investigación, pero no constituye una etapa conceptual dentro del orden interno de lectura.

Después deberán consultarse los documentos específicamente afectados por la nueva cuestión.

y después los documentos específicamente afectados por la nueva cuestión.

Deberán respetarse especialmente:

```text
PM-001…PM-010
CA-001…CA-007
RM-01…RM-08
PCD
```

---

# Orden recomendado de lectura — Realización futura

Para estudiar una realización concreta:

```text
00
↓
07
↓
08
↓
12
↓
13
↓
11
```

con consulta de:

```text
14
```

para cobertura y:

```text
15
```

para restricciones metateóricas.

---

# Orden recomendado de lectura — Auditoría futura

Para una auditoría transversal:

```text
00
↓
14
↓
15
↓
10
```

pero cualquier resultado deberá contrastarse con los documentos de origen correspondientes.

---

# Documentos que no deben confundirse

## `00` y `15`

```text
00
→ marco metodológico general

15
→ auditoría del método empleado
```

Por tanto:

```text
método
≠
auditoría del método
```

---

## `01` y `16`

```text
01
→ historia justificativa
   de la investigación

16
→ historia documental
   de la consolidación
```

---

## `16` y el PCD

```text
16
→ registra qué ocurrió
   dentro de la historia documental
   de conceptual-model

PCD
→ regula cómo debe
   realizarse la consolidación
```

Por tanto:

```text
memoria documental interna
≠
gobierno metodológico externo
```

---

## `03` y `04`

```text
03
→ reduce fenómenos

04
→ investiga exigencias estructurales
```

---

## `04` y `05`

```text
04
→ exigencias

05
→ capacidades funcionales
```

Actualmente ambos resultados son vacíos, pero sus preguntas son diferentes.

---

## `05` y `06`

```text
05
→ perfil funcional

06
→ firma y axiomas
```

---

## `09` y `12`

```text
09
→ falsación por casos

12
→ conservación tras
   eliminación histórica
```

---

## `12` y `13`

```text
12
→ reconstrucción conceptual

13
→ realización
```

---

## `14` y `15`

```text
14
→ cobertura del sistema

15
→ fiabilidad del método
```

---

## `10` y `14`

```text
14
→ huecos actualmente detectados

10
→ preguntas capaces de producir
     huecos o falsadores futuros
```

Por tanto:

```text
COBERTURA_GLOBAL_ACTUAL = PASS
```

es compatible con:

```text
PA-OPEN = 15
```

---

## `10` y `11`

```text
10
→ cuestiones abiertas

11
→ vocabulario
```

El glosario no debe resolver preguntas abiertas mediante definición.

---

## `11` y `17`

```text
11
→ qué significan los términos

17
→ dónde está cada resultado
   y qué función cumple cada documento
```

---

## `15` y el `PCD`

```text
15
→ restricciones metateóricas
   internas al cuerpo

PCD
→ protocolo documental
   transversal externo
```

Actualmente:

```text
RM-01…RM-08
```

no se incorporan automáticamente al PCD.

Esta relación permanece abierta en:

```text
PA-13
```

---

# Estado documental del corpus durante esta reapertura

| Documento                              | Estado                         |
| -------------------------------------- | ------------------------------ |
| `00-marco-teorico.md`                  | ✔ Consolidado provisionalmente |
| `01-investigacion.md`                  | ✔ Vigente / integrado          |
| `02-fenomenos-fundamentales.md`        | ✔ Consolidado provisionalmente |
| `03-reduccion-de-fenomenos.md`         | ✔ Consolidado provisionalmente |
| `04-exigencias-estructurales.md`       | ✔ Consolidado provisionalmente |
| `05-perfil-funcional.md`               | ✔ Consolidado provisionalmente |
| `06-axiomas.md`                        | ✔ Consolidado provisionalmente |
| `07-conclusiones-consolidadas.md`      | ✔ Consolidado provisionalmente |
| `08-regimen-de-especializacion.md`     | ✔ Consolidado provisionalmente |
| `09-validacion-por-casos.md`           | ✔ Consolidado provisionalmente |
| `10-preguntas-abiertas.md`             | ✔ Consolidado provisionalmente |
| `11-glosario.md`                       | ✔ Consolidado provisionalmente |
| `12-reconstrucciones-conservativas.md` | ✔ Consolidado provisionalmente |
| `13-marco-de-realizacion.md`           | ✔ Consolidado provisionalmente |
| `14-auditoria-global-de-cobertura.md`  | ✔ Consolidado provisionalmente |
| `15-auditoria-de-la-metateoria.md`     | ✔ Consolidado provisionalmente |
| `16-bitacora-de-consolidacion.md`      | ✔ Vigente / acumulativo        |
| `17-indice-general.md`                 | ◐ Reabierto mediante `TD-2`    |

El Protocolo de Consolidación Documental aplicable al corpus se conserva externamente en:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
```

Su estado documental no forma parte del cómputo interno de `conceptual-model`.

Una vez superado nuevamente el `PCD` de `17`, el corpus podrá expresarse como:

```text
archivos internos del corpus = 18

archivos internos vigentes = 18

documentos internos en reapertura = 0
```

---

# Estado teórico resumido

El estado vigente incluye:

```text
F_irreducibles_universales = ∅

ES_universales_positivas = ∅

PF_min = ∅

Σ_min = ∅

Ax_min = ∅

RE_universal_positivo = ∅

MR_universal_positivo = ∅
```

junto con:

```text
COBERTURA_GLOBAL_ACTUAL = PASS
```

y:

```text
FIABILIDAD_METATEÓRICA_INTERNA
=
APOYADA_PROVISIONALMENTE
```

y:

```text
PA-OPEN = 15
```

---

# Estatuto del resumen anterior

El bloque precedente es únicamente un mapa de resultados.

No sustituye las pruebas de los documentos correspondientes.

En caso de conflicto:

```text
documento de origen
>
17-indice-general.md
```

---

# Preguntas abiertas de prioridad máxima

El índice registra como navegación:

```text
PA-09
Criterio independiente
de equivalencia reconstructiva

PA-10
Alcance efectivo del dominio

PA-11
Dependencia de la selección del corpus
```

Su contenido completo pertenece a:

```text
10-preguntas-abiertas.md
```

---

# Restricciones metateóricas vigentes

Las investigaciones futuras deberán consultar:

```text
RM-01 — Carga bilateral

RM-02 — Reconstrucción no nominal

RM-03 — Externalización justificada

RM-04 — Dominio explícito

RM-05 — Dependencia probatoria

RM-06 — Simetría de reapertura

RM-07 — Conservación diferencial

RM-08 — Tres salidas
```

Su auditoría principal pertenece a:

```text
15-auditoria-de-la-metateoria.md
```

y su incorporación metodológica transversal se refleja actualmente en:

```text
00-marco-teorico.md
```

---

# Línea externa pendiente

Permanece registrada:

```text
LEC-01
Auditoría externa independiente
de la metateoría
```

Su estatuto completo pertenece a:

```text
10-preguntas-abiertas.md
```

---

# Principios de mantenimiento del índice

## `IG-M1 — No duplicación`

El índice no debe copiar íntegramente el contenido de cada documento.

Debe limitarse a:

- función;
- producto;
- estado;
- relaciones;
- navegación.

---

## `IG-M2 — Prioridad del origen`

En caso de discrepancia:

```text
documento de origen
>
índice
```

---

## `IG-M3 — Actualización por cambio estructural`

El índice deberá actualizarse cuando cambie:

- nombre de un documento;
- función documental;
- estado;
- dependencia;
- orden recomendado de lectura;
- producto principal;
- conjunto de documentos;
- relación transversal relevante.

No necesita actualizarse por toda modificación interna menor.

---

## `IG-M4 — No inferencia conceptual`

```text
relación documental
⇏
relación conceptual
```

---

## `IG-M5 — No linealización indebida`

El orden de lectura no deberá presentarse como:

- jerarquía ontológica;
- arquitectura necesaria;
- secuencia deductiva universal.

---

## `IG-M6 — No completitud absoluta`

La presencia de todos los documentos actuales en el índice no significa que la arquitectura documental futura esté cerrada definitivamente.

---

# Criterio de incorporación de nuevos documentos

Un nuevo documento conceptual sólo debería incorporarse al índice cuando posea:

1. producto propio;
2. función independiente;
3. nivel identificable;
4. frontera con documentos existentes;
5. necesidad documental justificada;
6. ausencia de absorción completa por otro documento.

---

# Criterio de eliminación o fusión documental

Un documento deberá reconsiderarse si:

```text
todo su producto
```

puede ser producido íntegramente por otro sin pérdida funcional.

Entonces deberá auditarse:

```text
mantener
fusionar
renombrar
eliminar
```

sin conservarlo únicamente por tradición histórica.

---

# Auditoría de no reificación documental

Debe comprobarse que expresiones como:

```text
marco metodológico
investigación
base fenomenológica
núcleo universal
especialización
realización
auditoría
memoria documental
```

utilizadas para organizar documentos no se conviertan en:

- planos;
- capas ontológicas;
- autoridades;
- componentes conceptuales necesarios.

La agrupación documental:

```text
I
II
III
IV
V
VI
VII
```

es exclusivamente navegacional.

Por tanto:

```text
bloque documental
⇏
nivel ontológico
```

Resultado:

```text
NO REIFICACIÓN DOCUMENTAL — PASS
```

---

# Auditoría de no linealización

La estructura general contiene órdenes de lectura.

Pero existen:

- controles retrospectivos;
- reaperturas;
- dependencias transversales;
- reconstrucciones;
- auditorías.

Por tanto, el corpus funciona como:

```text
red documental
```

más que como:

```text
cadena deductiva lineal
```

Resultado:

```text
NO LINEALIZACIÓN INDEBIDA — PASS
```

---

# Auditoría de irreducibilidad documental

Se comprueba que cada documento posee un producto no producido íntegramente por los demás:

```text
00 → método

01 → investigación

02 → corpus fenomenológico

03 → reducción fenomenológica

04 → exigencias

05 → perfil funcional

06 → firma y axiomas

07 → consolidación

08 → especialización

09 → validación

10 → apertura

11 → terminología

12 → reconstrucción conservativa

13 → realización

14 → cobertura global

15 → auditoría del método

16 → memoria documental

17 → navegación

PCD externo → protocolo documental
```

Se comprueba especialmente:

```text
00 ≠ 15
```

porque:

```text
marco metodológico
≠
auditoría del método
```

También:

```text
01 ≠ 16
```

porque:

```text
historia justificativa
de investigación
≠
historia documental
de consolidación
```

Y:

```text
16 ≠ PCD
```

porque:

```text
registrar qué ocurrió
≠
regular cómo debe ocurrir
```

No se detecta actualmente absorción completa de un documento por otro.

Resultado:

```text
IRREDUCIBILIDAD DOCUMENTAL — PASS
```

---

# Auditoría de cobertura documental relativa

Respecto de las funciones actualmente reconocidas:

```text
regular el método

investigar

identificar fenómenos

reducir

evaluar exigencias

evaluar perfil

evaluar firma y axiomas

consolidar

especializar

validar

reconstruir

realizar

auditar cobertura

auditar método

mantener apertura

estabilizar vocabulario

registrar historia documental

navegar

gobernar consolidación
```

todas poseen actualmente un lugar documental.

No se identifica una función reconocida sin ubicación.

Resultado:

```text
COBERTURA DOCUMENTAL ACTUAL — PASS
```

Este resultado es relativo al estado actual del corpus.

No demuestra clausura documental absoluta.

---

# Conclusiones consolidadas

## `IG-C1`

> El corpus debe interpretarse como una red documental con dependencias, controles y relaciones transversales, no como una cadena deductiva lineal.

## `IG-C2`

> El orden recomendado de lectura no constituye una jerarquía ontológica ni una arquitectura necesaria del dominio.

## `IG-C3`

> Cada documento del corpus actual posee un producto propio no absorbido íntegramente por los demás.

## `IG-C4`

> `00-marco-teorico.md` regula el método general sin constituir una premisa sustantiva de los resultados posteriores.

## `IG-C5`

> `01-investigacion.md` conserva la historia justificativa de las investigaciones sin sustituir el estado teórico vigente.

## `IG-C6`

> `16-bitacora-de-consolidacion.md` conserva la cronología documental y su orden responde a la historia de consolidación, no a la numeración de los documentos.

## `IG-C7`

> `99-protocolo-de-consolidacion-documental.md` actúa transversalmente y no como premisa conceptual.

## `IG-C8`

> `17-indice-general.md` posee función exclusivamente navegacional y documental.

## `IG-C9`

> Los resultados resumidos en el índice mantienen como fuente autoritativa sus documentos de origen.

## `IG-C10`

> Existe cobertura documental suficiente respecto de las funciones actualmente reconocidas sin que ello implique clausura absoluta.

## `IG-C11`

> Las relaciones documentales no deben proyectarse automáticamente como relaciones conceptuales.

## `IG-C12`

> Método, investigación, memoria documental, navegación y gobierno documental constituyen funciones diferentes y no deben confundirse por su transversalidad.

---

# Resultado de la reapertura localizada

La reapertura de `17-indice-general.md` conserva:

```text
arquitectura documental como red
```

y:

```text
orden documental
≠
orden deductivo necesario
```

pero amplía su representación desde un corpus funcionalmente descrito a partir de `02` hacia el corpus completo de 19 archivos.

El cambio puede resumirse:

```text
17 versión anterior
        ↓
arquitectura correcta
pero alcance incompleto
        ↓
detección de 00 / 01 / 16
        ↓
reapertura TD-2
        ↓
incorporación funcional
de 00 / 01 / 16
        ↓
actualización de:
alcance
bloques
mapa
matrices
dependencias
órdenes de lectura
estados
irreducibilidad
cobertura
        ↓
arquitectura documental completa
```

---

# Resultado final del corpus

Una vez superado el PCD de esta reapertura, la arquitectura documental vigente quedará:

```text
CORPUS
│
├── Marco e investigación
│   ├── 00
│   └── 01
│
├── Fenómenos y reducción
│   ├── 02
│   └── 03
│
├── Reconstrucción del núcleo
│   ├── 04
│   ├── 05
│   └── 06
│
├── Consolidación y especialización
│   ├── 07
│   └── 08
│
├── Prueba, reconstrucción y realización
│   ├── 09
│   ├── 12
│   └── 13
│
├── Auditorías
│   ├── 14
│   └── 15
│
├── Apertura y referencia
│   ├── 10
│   ├── 11
│   └── 17
│
├── Memoria documental transversal
│   └── 16
│
└── Gobierno documental transversal
    └── 99
```

con:

```text
estructura documental
≠
estructura fundamental del dominio
```

---

# Control de impacto documental

La reapertura localizada de `17-indice-general.md` no proporciona evidencia suficiente para reabrir conceptualmente:

```text
00
01
02
03
04
05
06
07
08
09
10
11
12
13
14
15
16
99
```

La reapertura tiene únicamente finalidad de:

```text
sincronización
+
navegación
+
representación documental
```

Resultado:

```text
REAPERTURAS CONCEPTUALES ADICIONALES = 0
```

---

# Condición de actualización

`17-indice-general.md` deberá actualizarse si:

1. se crea un nuevo documento consolidado;
2. se elimina o fusiona un documento;
3. cambia una denominación;
4. cambia una función documental;
5. cambia una dependencia relevante;
6. un documento pasa a `TD-2`;
7. cambia un orden recomendado de lectura;
8. cambia sustancialmente el estado documental del corpus;
9. se modifica la arquitectura documental general;
10. aparece una nueva relación transversal relevante.

---

# Condición de reapertura

`17-indice-general.md` deberá reabrirse mediante `TD-2` cuando deje de representar fielmente el corpus.

Entre los posibles falsadores documentales se incluyen:

- un documento vigente omitido;
- un documento inexistente incluido;
- una función mal atribuida;
- una dependencia falsa;
- un estado incorrecto;
- una relación transversal omitida;
- una linealización presentada indebidamente como deducción;
- una arquitectura documental obsoleta;
- una discrepancia entre el árbol físico y el corpus declarado.

La presente reapertura constituye un ejemplo de aplicación de esta condición.

---

# Estado de la reapertura

```text
TD-2
        ↓
detección de alcance incompleto
        ↓
00 / 01 / 16
no representados funcionalmente
        ↓
auditoría localizada
        ↓
núcleo arquitectónico de 17
PASS
        ↓
ampliación de alcance
        ↓
reconstrucción de mapa,
matrices,
dependencias
y órdenes
        ↓
irreducibilidad documental
PASS
        ↓
cobertura documental
PASS
```

---

# Resultado de la revisión previa a la congelación

Antes de la congelación provisional de la reapertura localizada de `17-indice-general.md` se han ejecutado los controles establecidos al final de la versión completa auditable.

La revisión ha comprobado tanto la coherencia interna del índice como su correspondencia con el árbol físico actualmente vigente de:

```text
docs/03-conceptual-model/
```

---

## Controles ejecutados

| Control                                                                                            | Resultado |
| -------------------------------------------------------------------------------------------------- | --------- |
| Representación de los 19 archivos reales del corpus                                                | `PASS`    |
| Delimitación funcional de `00`, `01` y `16`                                                        | `PASS`    |
| Ausencia de conversión de relaciones transversales en dependencias deductivas                      | `PASS`    |
| Compatibilidad de los órdenes de lectura con la nueva posición funcional de `00`                   | `PASS`    |
| Distinción entre `01-investigacion.md` y `16-bitacora-de-consolidacion.md`                         | `PASS`    |
| Distinción entre `16-bitacora-de-consolidacion.md` y `99-protocolo-de-consolidacion-documental.md` | `PASS`    |
| Completitud de las matrices funcional y de niveles                                                 | `PASS`    |
| Conservación del carácter relativo de la cobertura documental                                      | `PASS`    |
| Coherencia de las cifras finales con el árbol físico                                               | `PASS`    |
| Ausencia de reaperturas conceptuales adicionales                                                   | `PASS`    |

Se ha realizado además un control cruzado específico sobre la relación entre estructura física y estructura conceptual:

| Control adicional                                                                                        | Resultado |
| -------------------------------------------------------------------------------------------------------- | --------- |
| Ausencia de proyección de la organización física del directorio como arquitectura conceptual del dominio | `PASS`    |

---

# Resultado global

```text
controles ejecutados = 11

PASS = 11

FAIL = 0

OPEN = 0
```

No se ha identificado ninguna objeción que obligue a modificar nuevamente la reconstrucción antes de su congelación provisional.

---

# Resultado sobre el alcance del índice

La reapertura ha permitido corregir la incompletitud de representación detectada en la versión anterior.

El índice representa ahora los 19 archivos actualmente existentes en:

```text
docs/03-conceptual-model/
```

incluyendo expresamente las funciones propias de:

```text
00-marco-teorico.md

01-investigacion.md

16-bitacora-de-consolidacion.md
```

La ampliación no introduce nuevos resultados conceptuales.

Corrige exclusivamente:

```text
alcance
+
navegación
+
representación documental
```

---

# Resultado sobre `00-marco-teorico.md`

`00` queda correctamente representado como:

```text
marco metodológico general
```

y no como:

```text
premisa sustantiva
de los resultados conceptuales
```

Su relación con el corpus es metodológica y transversal.

La incorporación de `00` no transforma:

```text
00
↓
02
↓
03
...
```

en una cadena deductiva.

---

# Resultado sobre `01-investigacion.md`

`01` queda correctamente representado como:

```text
historia justificativa
de la investigación
```

Su producto propio consiste en conservar:

```text
investigaciones 001–010
+
reapertura H-DPV-107
+
cierre R-DPV-268
```

Queda consolidada la distinción:

```text
historia de investigación
≠
estado teórico vigente
```

---

# Resultado sobre `16-bitacora-de-consolidacion.md`

`16` queda correctamente representado como:

```text
memoria documental
de la consolidación
```

Su posición y estructura responden a:

```text
cronología real
de la consolidación
```

y no a:

```text
numeración
de los documentos
```

Queda consolidado:

```text
01
≠
16
```

porque:

```text
01
→ conserva cómo se investigó
   y justificó

16
→ conserva cómo se consolidó
   documentalmente
```

---

# Resultado sobre `16` y `99`

Se conserva la distinción:

```text
16
→ registra qué ocurrió

99
→ regula cómo debe
   realizarse la consolidación
```

Por tanto:

```text
memoria documental
≠
gobierno documental
```

La existencia histórica de una determinada práctica no la convierte automáticamente en regla del PCD.

Del mismo modo, una regla del PCD no implica que toda etapa histórica anterior se realizara conforme a ella.

---

# Resultado sobre la arquitectura documental

La reapertura no falsifica la conclusión fundamental anterior:

```text
corpus
=
red documental
```

y no:

```text
corpus
=
cadena deductiva lineal
```

La incorporación de `00`, `01` y `16` refuerza esta conclusión.

El corpus posee ahora relaciones:

```text
conceptuales
metodológicas
históricas
documentales
de control
de reapertura
de referencia
```

que no pueden reducirse a una única secuencia lineal.

---

# Resultado sobre los bloques documentales

La organización navegacional queda:

```text
I.   Marco e investigación

II.  Base fenomenológica y reductiva

III. Reconstrucción del núcleo universal

IV.  Consolidación y especialización

V.   Prueba, reconstrucción y realización

VI.  Auditorías globales y metateóricas

VII. Apertura, terminología y navegación
```

con dos funciones transversales:

```text
16
→ memoria documental

99
→ gobierno documental
```

Estos bloques poseen función exclusivamente navegacional.

Queda reafirmado:

```text
bloque documental
⇏
nivel ontológico
```

---

# Resultado sobre las matrices

La matriz funcional representa los 19 documentos del corpus.

La matriz de niveles representa igualmente los 19 documentos.

No se identifica:

```text
documento sin producto propio
```

ni:

```text
función reconocida
sin ubicación documental
```

---

# Resultado sobre la irreducibilidad documental

Se mantiene:

```text
IRREDUCIBILIDAD DOCUMENTAL = PASS
```

con el conjunto completo:

```text
00 → método

01 → investigación

02 → corpus fenomenológico

03 → reducción

04 → exigencias

05 → perfil funcional

06 → firma y axiomas

07 → consolidación

08 → especialización

09 → validación

10 → apertura

11 → terminología

12 → reconstrucción

13 → realización

14 → cobertura global

15 → auditoría del método

16 → memoria documental

17 → navegación

99 → protocolo documental
```

Se comprueba especialmente:

```text
00 ≠ 15

01 ≠ 16

16 ≠ 99
```

---

# Resultado sobre la cobertura documental

Respecto de las funciones actualmente reconocidas:

```text
regular el método

investigar

identificar fenómenos

reducir

evaluar exigencias

evaluar perfil

evaluar firma y axiomas

consolidar

especializar

validar

reconstruir

realizar

auditar cobertura

auditar método

mantener apertura

estabilizar vocabulario

registrar historia documental

navegar

gobernar consolidación
```

todas poseen actualmente una ubicación documental identificada.

Resultado:

```text
COBERTURA DOCUMENTAL ACTUAL = PASS
```

Este resultado mantiene alcance relativo.

Por tanto:

```text
cobertura documental actual
≠
clausura documental absoluta
```

---

# Resultado sobre las cifras

El árbol físico contiene:

```text
19 archivos
```

y el índice representa:

```text
19 archivos
```

Durante la revisión:

```text
17
=
TD-2 — Reapertura localizada
```

Una vez congelada provisionalmente esta versión:

```text
archivos del corpus = 19

archivos vigentes = 19

documentos en reapertura = 0
```

---

# Resultado sobre reaperturas adicionales

La reconstrucción de `17` no ha producido evidencia suficiente para reabrir conceptualmente:

```text
00
01
02
03
04
05
06
07
08
09
10
11
12
13
14
15
16
99
```

Resultado:

```text
REAPERTURAS CONCEPTUALES ADICIONALES = 0
```

---

# Control cruzado físico / conceptual

Se ha comprobado expresamente que la reparación física entre:

```text
docs/03-conceptual-model/
```

y:

```text
docs/04-governance/
```

no ha sido proyectada como una nueva estructura conceptual.

Queda reafirmado:

```text
ubicación física
≠
estatuto conceptual
```

y:

```text
estructura del directorio
≠
arquitectura fundamental del dominio
```

Resultado:

```text
CONTROL FÍSICO / CONCEPTUAL = PASS
```

---

# Estado final de la reapertura

```text
TD-2
        ↓
detección de alcance incompleto
        ↓
00 / 01 / 16
no representados funcionalmente
        ↓
reconstrucción localizada
        ↓
representación completa
de los 19 archivos
        ↓
11 controles
        ↓
11 PASS
0 FAIL
0 OPEN
        ↓
IRREDUCIBILIDAD DOCUMENTAL
PASS
        ↓
COBERTURA DOCUMENTAL
PASS
        ↓
NO LINEALIZACIÓN
PASS
        ↓
NO REIFICACIÓN
PASS
        ↓
REAPERTURAS CONCEPTUALES
0
        ↓
PCD-3 SUPERADO
```

---

# Estado documental

La revisión conjunta correspondiente a `PCD-3` queda superada.

No se identifica ninguna objeción que impida el paso a:

```text
PCD-4 — Congelación provisional
```

de `17-indice-general.md`.

No quedan cuestiones pendientes dentro del alcance propio de esta reapertura localizada.

La aparición futura de:

- un documento vigente omitido;
- un documento inexistente incluido;
- una función mal atribuida;
- una dependencia falsa;
- un estado incorrecto;
- una relación transversal no representada;
- una discrepancia entre árbol físico y corpus declarado;
- o una arquitectura documental obsoleta

podrá activar un nuevo:

```text
TD-2
```

sobre `17-indice-general.md`.

---

---

# Nueva reapertura localizada por desacoplamiento documental

## Motivo de la reapertura

Con posterioridad al cierre documental anteriormente registrado, la organización general del repositorio fue revisada para distinguir con mayor precisión entre:

- los cuerpos de investigación conservados;
- la metodología transversal del proyecto;
- y los documentos vigentes del proyecto principal.

Como resultado de esta reorganización, el Protocolo de Consolidación Documental dejó de conservarse como documento interno de `conceptual-model` y pasó a disponer de una referencia metodológica transversal única en:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
```

El corpus conceptual se conserva actualmente en:

```text
research/corpus/conceptual-model/
```

Esta modificación altera el perímetro documental representado por `17-indice-general.md`, pero no modifica por sí misma los resultados conceptuales conservados en el corpus.

Por tanto, procede una nueva reapertura localizada de `17` destinada exclusivamente a restaurar la correspondencia entre el índice y la organización documental actualmente vigente.

---

# Alcance de la reapertura

La reapertura afecta a:

```text
17-indice-general.md
```

en aquellos lugares en los que el documento representaba:

- `99-protocolo-de-consolidacion-documental.md` como integrante interno de `conceptual-model`;
- un corpus compuesto por 19 documentos;
- matrices internas que incluían `99`;
- dependencias documentales que trataban `99` como nodo interno;
- órdenes de lectura que incorporaban `99` como etapa del corpus;
- o estados documentales que contabilizaban el protocolo dentro del perímetro de `conceptual-model`.

La corrección establece actualmente:

```text
conceptual-model
        =
18 documentos internos
```

y:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
        =
interfaz metodológica externa aplicable
```

Por tanto:

```text
aplicabilidad metodológica
        ≠
pertenencia documental
```

y:

```text
PCD aplicable a conceptual-model
        ⇏
PCD integrante de conceptual-model
```

---

# Límites de la reapertura

Esta reapertura no constituye una nueva investigación conceptual.

No modifica:

- los fenómenos investigados;
- las reducciones realizadas;
- las exigencias estructurales obtenidas;
- el perfil funcional;
- la firma ni los axiomas;
- las conclusiones consolidadas;
- el régimen de especialización;
- los resultados de validación;
- las reconstrucciones conservativas;
- el marco de realización;
- la auditoría global de cobertura;
- la auditoría de la metateoría;
- las preguntas abiertas;
- el glosario;
- ni la historia de consolidación previamente registrada.

Tampoco modifica retrospectivamente las afirmaciones históricas de este documento que describen correctamente estados anteriores del repositorio.

Por tanto:

```text
reorganización documental posterior
        ⇏
falsación retrospectiva
```

y:

```text
cambio de ubicación del PCD
        ⇏
cambio de resultado conceptual
```

---

# Auditoría de impacto

## Impacto sobre el perímetro documental

Antes de la reorganización aquí registrada, el índice representaba:

```text
conceptual-model
        =
19 archivos
```

incluyendo:

```text
99-protocolo-de-consolidacion-documental.md
```

La organización vigente distingue:

```text
research/corpus/conceptual-model/
        =
18 archivos
```

y:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
        =
protocolo metodológico transversal externo
```

El cambio afecta, por tanto, al perímetro documental representado por el índice.

---

## Impacto sobre la función de `17`

La función propia de `17-indice-general.md` permanece inalterada:

```text
17
→ navegación documental
```

Lo que cambia es el conjunto documental que debe representar fielmente.

La dependencia de navegación pasa a expresarse como:

```text
00–17
        ↓
17
```

respecto del corpus interno, junto con la relación externa:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
        ↓
gobierno documental transversal aplicable
```

---

## Impacto sobre el PCD

El PCD conserva su función metodológica.

Su traslado fuera de `conceptual-model` no elimina su aplicabilidad cuando corresponda según la metodología vigente.

Se mantiene:

```text
PCD
        ↓
construcción
revisión
congelación
reapertura
registro
```

pero se establece explícitamente:

```text
función transversal del PCD
        ≠
pertenencia a conceptual-model
```

El protocolo no constituye:

- un resultado conceptual;
- una premisa conceptual;
- una etapa deductiva del corpus;
- ni un documento interno de `research/corpus/conceptual-model/`.

---

## Impacto sobre las matrices

Las matrices funcionales y de niveles de `17` pasan a representar exclusivamente los documentos internos:

```text
00–17
```

con las numeraciones efectivamente existentes dentro del corpus.

El PCD deja de aparecer como fila interna de dichas matrices.

Su función permanece representada mediante una relación metodológica externa.

---

## Impacto sobre los órdenes de lectura

Los órdenes de lectura conceptuales no deben incorporar el PCD como una etapa interna.

Cuando resulte metodológicamente pertinente consultarlo, deberá indicarse transversalmente mediante su referencia canónica:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
```

Por tanto:

```text
consulta metodológica transversal
        ≠
etapa conceptual de lectura
```

---

## Impacto sobre las dependencias

Las dependencias conceptuales internas permanecen inalteradas.

La relación con el PCD se reclasifica exclusivamente como:

```text
relación metodológica externa
```

y no como dependencia constitutiva interna del corpus.

No se deriva ninguna nueva dependencia conceptual como consecuencia del traslado.

---

## Impacto sobre la historia documental

Las secciones históricas de `17` que registran estados anteriores en los que `99` pertenecía al corpus conservan su validez histórica.

En particular, las referencias anteriores a:

```text
19 archivos
```

o a:

```text
99
```

como integrante del corpus no deben reinterpretarse como descripciones del estado vigente cuando formen parte de una auditoría o cierre histórico anterior.

Se establece:

```text
descripción histórica correcta
        +
reorganización posterior
        ⇏
necesidad de reescritura retrospectiva
```

La nueva reapertura complementa esa historia mediante la incorporación del estado posterior.

---

# Resultado de la auditoría de impacto

No se ha identificado ninguna pérdida conceptual producida por el desacoplamiento documental del PCD.

La modificación afecta a:

```text
perímetro documental
navegación
matrices
dependencias documentales
órdenes de lectura
estado documental
```

pero no a:

```text
resultados conceptuales
resultados metateóricos
resultados de validación
preguntas abiertas
```

Por tanto:

```text
IMPACTO_CONCEPTUAL = NO IDENTIFICADO
```

y:

```text
IMPACTO_DOCUMENTAL = LOCALIZADO EN 17
```

No existe fundamento derivado de esta reorganización para reabrir automáticamente `00–16`.

---

# Estado de la reapertura actual

La reapertura queda caracterizada como:

```text
tipo
→ documental localizada

documento afectado
→ 17-indice-general.md

causa
→ modificación del perímetro documental
  por externalización del PCD

resultado conceptual afectado
→ ninguno identificado

documentos conceptuales adicionales
que deban reabrirse
→ ninguno derivado
```

El estado documental vigente del corpus es:

| Documento                              | Estado                                     |
| -------------------------------------- | ------------------------------------------ |
| `00-marco-teorico.md`                  | ✔ Conservado                               |
| `01-investigacion.md`                  | ✔ Conservado                               |
| `02-fenomenos-fundamentales.md`        | ✔ Conservado                               |
| `03-reduccion-de-fenomenos.md`         | ✔ Conservado                               |
| `04-exigencias-estructurales.md`       | ✔ Conservado                               |
| `05-perfil-funcional.md`               | ✔ Conservado                               |
| `06-axiomas.md`                        | ✔ Conservado                               |
| `07-conclusiones-consolidadas.md`      | ✔ Conservado                               |
| `08-regimen-de-especializacion.md`     | ✔ Conservado                               |
| `09-validacion-por-casos.md`           | ✔ Conservado                               |
| `10-preguntas-abiertas.md`             | ✔ Conservado                               |
| `11-glosario.md`                       | ✔ Conservado                               |
| `12-reconstrucciones-conservativas.md` | ✔ Conservado                               |
| `13-marco-de-realizacion.md`           | ✔ Conservado                               |
| `14-auditoria-global-de-cobertura.md`  | ✔ Conservado                               |
| `15-auditoria-de-la-metateoria.md`     | ✔ Conservado                               |
| `16-bitacora-de-consolidacion.md`      | ✔ Conservado / acumulativo                 |
| `17-indice-general.md`                 | ✔ Reapertura documental localizada cerrada |

El protocolo metodológico aplicable se conserva externamente en:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
```

y no se contabiliza entre los documentos internos del corpus.

Por tanto:

```text
archivos internos de conceptual-model = 18

PCD externo aplicable = 1

pertenencia del PCD al corpus = no
```

---

# Criterio de cierre

La reapertura podrá cerrarse cuando se haya comprobado que:

1. el perímetro vigente de `research/corpus/conceptual-model/` está representado correctamente;
2. ninguna matriz vigente contabiliza el PCD como documento interno;
3. ninguna dependencia vigente presenta el PCD como nodo constitutivo del corpus;
4. ningún orden de lectura vigente lo presenta como etapa conceptual interna;
5. las referencias históricas permanecen conservadas como descripciones de estados anteriores;
6. la referencia canónica al PCD apunta a:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
```

7. no se ha introducido ninguna modificación conceptual no justificada durante la corrección documental;
8. y `git diff --check` no detecta errores formales.

# Resultado de los controles de cierre

Se han ejecutado los controles establecidos para esta reapertura.

| Control                                                                                         | Resultado |
| ----------------------------------------------------------------------------------------------- | --------- |
| Correspondencia del perímetro vigente con `research/corpus/conceptual-model/`                   | `PASS`    |
| Exclusión del PCD de las matrices documentales internas vigentes                                | `PASS`    |
| Exclusión del PCD como nodo constitutivo de las dependencias internas vigentes                  | `PASS`    |
| Exclusión del PCD como etapa conceptual interna de los órdenes de lectura vigentes              | `PASS`    |
| Preservación de las referencias históricas a los estados anteriores                             | `PASS`    |
| Referencia canónica al PCD en `docs/01-methodology/99-protocolo-de-consolidacion-documental.md` | `PASS`    |
| Ausencia de modificaciones conceptuales derivadas del desacoplamiento documental                | `PASS`    |
| `git diff --check`                                                                              | `PASS`    |

Resultado global:

```text
controles = 8

PASS = 8

FAIL = 0

OPEN = 0
```

Se establece, por tanto:

```text
REAPERTURA_DOCUMENTAL_LOCALIZADA_17 = CERRADA
```

El cierre posee alcance exclusivamente documental.

No implica:

- nueva consolidación conceptual de `00–16`;
- ratificación adicional de sus resultados;
- modificación de sus alcances;
- ni clausura definitiva frente a futuras pérdidas o falsadores.

---

# Estado resultante

Tras el cierre:

```text
research/corpus/conceptual-model/
        ↓
18 documentos internos
        ↓
17 representa fielmente
el perímetro documental vigente
```

con:

```text
docs/01-methodology/99-protocolo-de-consolidacion-documental.md
        ↓
gobierno documental transversal
externo y aplicable
```

y manteniendo:

```text
historia anterior
        → preservada

resultados conceptuales
        → no modificados

PCD
        → aplicable
        → externo al corpus

17
        → actualizado
        → nuevamente coherente
          con el estado documental vigente
```

---
