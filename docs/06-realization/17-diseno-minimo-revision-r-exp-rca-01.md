# Diseño mínimo de la revisión experimental de R-EXP-RCA-01

## Estado

**Derivado.**

Este documento define el diseño mínimo de una posible revisión experimental de `R-EXP-RCA-01`.

Su contenido se deriva de:

- la primera prueba ciega de `R-EXP-RCA-01`;
- el diagnóstico posterior consolidado en `16-diagnostico-post-prueba-r-exp-rca-01.md`.

Su función consiste en fijar qué cambios están positivamente justificados antes de modificar código.

No constituye todavía:

- una implementación;
- una nueva prueba;
- una validación de suficiencia general;
- una especificación definitiva de producto;
- una necesidad arquitectónica.

Durante la elaboración de este documento, `r_exp_rca01.py` permanece sin modificaciones.

---

# 1. Propósito

La primera versión experimental de `R-EXP-RCA-01` mostró utilidad local, pero el diagnóstico posterior identificó limitaciones que no podían reducirse a un simple ajuste de pesos.

La revisión mínima debe responder exclusivamente a los fallos y mecanismos positivamente apoyados por la evidencia observada.

El objetivo de este documento es distinguir:

```text
cambios exigidos por la evidencia
        ↓
decisiones experimentales necesarias
        ↓
parámetros provisionales
```

sin convertir resultados locales en propiedades generales.

---

# 2. Restricción metodológica

La revisión no deberá incorporar mecanismos nuevos únicamente porque resulten técnicamente posibles.

Todo cambio deberá poder relacionarse con una evidencia diagnóstica previa.

La revisión no deberá utilizarse para:

- decidir duplicación;
- decidir novedad;
- decidir complementariedad;
- establecer verdad o falsedad;
- recomendar eliminación;
- recomendar incorporación;
- fusionar automáticamente textos;
- sustituir la comparación humana.

La responsabilidad continúa siendo:

> recuperar antecedentes potencialmente útiles y presentarlos de forma que la persona pueda realizar la comparación.

---

# 3. Identidad de la revisión

La primera versión permanecerá congelada:

```text
experiments/r-exp-rca-01/r_exp_rca01.py
```

Su estatuto seguirá siendo:

```text
primera realización experimental
→ congelada
→ probada
→ históricamente reproducible
```

La revisión se implementará en un archivo nuevo:

```text
experiments/r-exp-rca-01/r_exp_rca01_v2.py
```

La revisión podrá importar de la primera versión aquellos componentes que permanezcan válidos, por ejemplo:

- `norm_text`;
- `parse_paragraphs`;
- `split_units`, si alguna función auxiliar continúa siendo necesaria;
- `Retriever`;
- utilidades de representación de ubicaciones.

No se modificará la primera versión para compartir código.

Tampoco se extraerán todavía componentes comunes a un tercer módulo.

La razón es mantener una trazabilidad clara entre:

```text
v1 congelada
↓
revisión experimental
```

sin introducir una refactorización adicional que no está exigida por la evidencia.

---

# 4. Diseño mínimo derivado

La investigación permite derivar los siguientes cambios mínimos.

| ID          | Evidencia consolidada                                                    | Exigencia                                 | Realización mínima                                     |
| ----------- | ------------------------------------------------------------------------ | ----------------------------------------- | ------------------------------------------------------ |
| `DM-RCA-01` | `F-RCA-03`: una línea física puede no coincidir con la aportación humana | candidata de extensión variable           | permitir una línea o un intervalo contiguo             |
| `DM-RCA-02` | el bloque humano L3–L9 mejoró la recuperación                            | consultar la unidad completa seleccionada | concatenar las líneas no vacías del intervalo          |
| `DM-RCA-03` | rótulos organizativos desplazaban antecedentes sustantivos               | distinguir organización y contenido       | mantenerlos indexados pero fuera de plazas sustantivas |
| `DM-RCA-04` | WORD, CHAR y LSA recuperan antecedentes diferentes                       | preservar canales antes de fusionarlos    | generar top-K independiente por canal                  |
| `DM-RCA-05` | la unión multicanal recuperó antecedentes ocultos                        | conservar candidatos de cualquier canal   | unión y deduplicación                                  |
| `DM-RCA-06` | un ranking global volvió a ocultar señales especializadas                | evitar una única lista homogénea          | separar núcleo y reserva                               |
| `DM-RCA-07` | RRF tuvo buen comportamiento como núcleo                                 | pequeño conjunto principal                | RRF top-N sobre el pool                                |
| `DM-RCA-08` | la especialización rescata antecedentes pero también ruido               | preservarla sin equipararla al núcleo     | reserva secundaria explícita                           |
| `DM-RCA-09` | gap alto indica especialización, no pertinencia                          | limitar su significado                    | usar gap sólo para seleccionar reserva                 |
| `DM-RCA-10` | L65 permaneció legítimamente inconcluso                                  | preservar frontera humana                 | ninguna clasificación automática                       |
| `DM-RCA-11` | los valores numéricos sólo tienen apoyo local                            | evitar universalización                   | tratarlos como parámetros experimentales               |

---

# 5. Entrada de candidata

## 5.1. Problema de la versión inicial

La primera versión obliga a seleccionar una línea física mediante:

```text
--line
```

El diagnóstico mostró que una línea puede no coincidir con la unidad humana realmente evaluada.

Por tanto:

```text
unidad candidata
≠ necesariamente línea física
```

---

## 5.2. Realización mínima

La revisión deberá permitir:

```text
una línea
```

o:

```text
un intervalo contiguo de líneas
```

La interfaz mínima podrá mantener:

```bash
--line 17
```

y añadir:

```bash
--from-line 3 --to-line 9
```

Ambas formas deberán ser mutuamente excluyentes.

Semánticamente:

```text
--line 17
=
intervalo 17–17
```

y:

```text
--from-line 3 --to-line 9
=
unidad candidata formada por las líneas 3–9
```

---

## 5.3. Construcción de la consulta

La consulta deberá construirse concatenando las líneas no vacías del intervalo seleccionado.

Por ejemplo:

```text
líneas 3–9
        ↓
eliminar líneas vacías
        ↓
concatenar en orden
        ↓
consulta única
```

La revisión no deberá introducir todavía:

- selección discontinua;
- fragmentos arbitrarios;
- detección automática de unidad semántica;
- selección automática del bloque humano.

La persona continúa determinando qué extensión constituye la aportación que desea comparar.

---

# 6. Segmentación

La revisión no utilizará segmentación automática como mecanismo principal de recuperación.

El diagnóstico mostró que segmentar puede destruir referentes necesarios.

Ejemplo observado:

```text
Los Welser ...
        ↓
segmentación
        ↓
Así, ...
```

La segunda unidad pierde el sujeto necesario para interpretar correctamente la relación.

Por tanto, la consulta principal deberá utilizar la unidad humana completa seleccionada.

La segmentación podrá mantenerse únicamente como recurso auxiliar si ya existe alguna funcionalidad manual como `--focus`, pero no formará parte de la nueva lógica central.

---

# 7. Unidades organizativas

## 7.1. Problema

Unidades breves como:

```text
Leyes de indias
Los Welser
Las leyes de indias julio henche
```

pueden ocupar posiciones altas de recuperación y desplazar antecedentes sustantivos.

Sin embargo:

```text
unidad breve
≠ necesariamente irrelevante
```

y:

```text
prefijo de separación
≠ unidad enteramente organizativa
```

---

## 7.2. Realización mínima

Las unidades organizativas permanecerán:

- en el corpus;
- en la vectorización;
- disponibles como estructura documental futura.

Pero no serán elegibles para ocupar plazas de antecedentes sustantivos en:

- top-K por canal;
- núcleo;
- reserva especializada.

---

## 7.3. Heurística provisional

La revisión podrá utilizar inicialmente la heurística diagnosticada:

```text
encabezado Markdown explícito
→ organizativo

separador puro
→ organizativo

prefijo gráfico + contenido
→ retirar prefijo antes de decidir

contenido breve
sin puntuación de frase
→ posible rótulo organizativo
```

Un valor diagnóstico inicial puede ser:

```text
máximo 8 palabras
```

pero este número no constituye una definición general de unidad organizativa.

La regla deberá evitar clasificar como organizativo un párrafo sustantivo únicamente porque comienza con:

```text
----------
```

---

# 8. Generación multicanal

## 8.1. Problema de la versión inicial

La versión inicial combina:

```text
WORD
CHAR
LSA
```

en un único score ponderado.

El diagnóstico mostró que esta combinación puede ocultar antecedentes útiles detectados fuertemente por un solo canal.

---

## 8.2. Nueva estructura

La revisión deberá generar candidatos de manera independiente:

```text
WORD → ranking propio
CHAR → ranking propio
LSA  → ranking propio
```

Después, cada canal aportará sus mejores candidatos sustantivos.

---

## 8.3. Información conservada por candidato

Cada candidato del pool deberá conservar como mínimo:

```text
text
locations
word_score
char_score
lsa_score
word_rank
char_rank
lsa_rank
```

También deberá poder derivarse posteriormente:

```text
dominant_channel
best_rank
second_best_rank
gap
rrf_score
```

No se incorporarán nuevos modelos de representación en esta revisión.

---

# 9. Pool intermedio

Cada canal aportará sus mejores candidatos sustantivos:

```text
WORD top K
CHAR top K
LSA top K
```

Después:

```text
unión
+
deduplicación
```

producirá el pool intermedio.

La deduplicación continuará apoyándose en la identidad documental ya utilizada por la primera versión.

---

# 10. Parámetro K

El diagnóstico encontró en el caso Welser:

```text
K = 8
```

como primer valor que conservaba conjuntamente los antecedentes de control estudiados.

Por tanto, la revisión podrá utilizar inicialmente:

```text
DEFAULT_TOP_K = 8
```

Su estatuto será:

```text
valor experimental reproducible
derivado de un caso diagnóstico local
```

No deberá interpretarse como:

```text
valor óptimo
```

ni:

```text
constante general
```

---

# 11. Núcleo principal

## 11.1. Función

El núcleo principal deberá responder a:

> qué antecedentes conviene revisar primero por presentar apoyo relativamente convergente entre los canales.

No deberá interpretarse como:

- conjunto de duplicados;
- conjunto de antecedentes verdaderos;
- clasificación definitiva de pertinencia.

---

## 11.2. RRF

Sobre el pool se calculará Reciprocal Rank Fusion:

```text
RRF(candidato)
=
Σ 1 / (k + rango_canal)
```

La revisión utilizará inicialmente:

```text
k = 60
```

como valor experimental.

---

## 11.3. Tamaño del núcleo

La presentación principal utilizará inicialmente:

```text
RRF top 5
```

Por tanto:

```text
DEFAULT_CORE_SIZE = 5
```

Su estatuto será provisional.

No se establece que cinco antecedentes constituyan un tamaño universalmente óptimo.

---

# 12. Reserva especializada

## 12.1. Motivación

El diagnóstico mostró dos fallos simétricos.

Si se eliminan las señales especializadas:

```text
→ pueden perderse antecedentes útiles
```

Si se promocionan automáticamente al núcleo:

```text
→ puede introducirse ruido
```

Por tanto, la revisión deberá preservar esas señales con un estatuto distinto.

---

## 12.2. Detección de especialización

Para cada candidato del pool se calcularán:

```text
mejor rango
segundo mejor rango
```

y:

```text
gap =
segundo mejor rango
-
mejor rango
```

También se registrará:

```text
dominant_channel
```

El gap sólo indica asimetría entre canales.

No implica:

- pertinencia;
- duplicación;
- novedad;
- complementariedad;
- verdad.

---

## 12.3. Selección provisional de reserva

La revisión utilizará inicialmente:

```text
gap >= 15
```

y:

```text
máximo 2 especialistas por canal
```

siempre que el candidato no pertenezca ya al núcleo.

Por tanto:

```text
DEFAULT_MIN_GAP = 15
DEFAULT_MAX_SPECIALISTS_PER_CHANNEL = 2
```

Estos valores permanecen experimentales.

---

# 13. Presentación estratificada

La revisión deberá mantener explícitamente dos secciones.

## 13.1. Presentación principal

```text
ANTECEDENTES PRINCIPALES
```

Debe contener exclusivamente el núcleo.

Su función es:

> indicar qué antecedentes conviene revisar primero.

---

## 13.2. Reserva especializada

```text
RESERVA ESPECIALIZADA
```

Debe contener las señales especializadas conservadas.

La salida deberá advertir explícitamente:

> Estas unidades no tienen el mismo estatuto que los antecedentes principales. Se conservan porque un canal detecta una señal que el consenso podría ocultar. Su pertinencia debe valorarla la persona.

---

## 13.3. No recombinación

La revisión no deberá volver a mezclar:

```text
núcleo
+
reserva
```

en un nuevo ranking global.

La distinción entre ambos es funcional y forma parte del diseño experimental.

---

# 14. Parámetros experimentales

Los parámetros deberán quedar reunidos de forma explícita en el código.

Por ejemplo:

```python
DEFAULT_TOP_K = 8
DEFAULT_CORE_SIZE = 5
DEFAULT_MIN_GAP = 15
DEFAULT_MAX_SPECIALISTS_PER_CHANNEL = 2
DEFAULT_RRF_K = 60
DEFAULT_ORGANIZATIONAL_MAX_WORDS = 8
```

Los nombres deberán expresar su carácter provisional.

No deberán utilizarse nombres como:

```text
OPTIMAL_K
```

o:

```text
MIN_RELEVANT_GAP
```

porque la evidencia disponible no permite esas afirmaciones.

---

# 15. Configuración de parámetros

En la primera implementación de la revisión no es necesario exponer estos parámetros mediante la CLI.

La finalidad inmediata es congelar una realización concreta y reproducible.

Permitir su ajuste libre durante la nueva prueba facilitaría:

```text
ajustar
→ observar
→ reajustar
```

y dificultaría distinguir validación de optimización posterior.

Por tanto, los valores permanecerán inicialmente fijados en código como parámetros experimentales explícitos.

---

# 16. Salida mínima

Una ejecución deberá mostrar al menos:

```text
APORTACIÓN A COMPARAR
---------------------
<texto seleccionado>
```

Después:

```text
PARÁMETROS EXPERIMENTALES
-------------------------
K=8
núcleo=5
gap=15
máx. especialistas/canal=2
```

A continuación:

```text
ANTECEDENTES PRINCIPALES
------------------------
1. ...
2. ...
3. ...
4. ...
5. ...
```

Cada resultado deberá mostrar:

- texto;
- ubicación o ubicaciones;
- rangos de canal relevantes.

Finalmente:

```text
RESERVA ESPECIALIZADA
---------------------
```

agrupada por:

```text
WORD
CHAR
LSA
```

Cada señal especializada podrá mostrar:

- texto;
- ubicación;
- canal dominante;
- rango;
- gap.

---

# 17. Procedencia

La procedencia deberá continuar siendo visible.

Cada antecedente deberá mantener sus ubicaciones dentro del corpus.

La revisión no deberá presentar fragmentos recuperados sin posibilidad de volver a localizar el material original.

Esto preserva:

```text
recuperación
→ correspondencia
→ retorno al corpus
→ comparación humana
```

---

# 18. Frontera humana

La revisión no deberá producir etiquetas como:

```text
DUPLICADO
NUEVO
COMPLEMENTARIO
REDUNDANTE
INCORPORAR
ELIMINAR
```

Tampoco deberá emitir recomendaciones automáticas equivalentes.

La salida deberá limitarse a:

```text
antecedentes principales
+
señales especializadas
```

La interpretación continúa fuera de la realización.

---

# 19. Mecanismos expresamente excluidos

La revisión mínima no incorporará:

- expansión alrededor de encabezados;
- expansión bidireccional;
- embeddings adicionales;
- modelos lingüísticos;
- detección automática de equivalencia semántica;
- clasificación automática de novedad;
- clasificación automática de duplicación;
- fusión automática de textos;
- recomendación de eliminación;
- recomendación de incorporación;
- selección automática de la unidad humana;
- nuevas exigencias de Product;
- nueva arquitectura.

Estos mecanismos no son necesarios para realizar la hipótesis derivada.

---

# 20. Contrato funcional mínimo

La responsabilidad de la revisión puede expresarse así:

> Dada una aportación seleccionada por la persona y un corpus, generar antecedentes mediante señales complementarias y presentarlos distinguiendo un núcleo principal de una reserva especializada, preservando procedencia y dejando en la persona la interpretación de su relación con la aportación.

---

# 21. Relación con los criterios CR-V2

La revisión deberá realizar al menos:

```text
CR-V2-01 — Priorización útil
CR-V2-02 — No dominación organizativa
CR-V2-03 — Extensión variable de candidata
CR-V2-04 — Correspondencia no literal útil
CR-V2-05 — Conservación de éxitos anteriores
CR-V2-06 — Frontera humana
CR-V2-07 — Preservación distinguible de especialización
```

La implementación no demostrará por sí sola que estos criterios se satisfacen de forma general.

Sólo permitirá someterlos a prueba.

---

# 22. Comprobación previa a una nueva prueba

Antes de congelar la revisión deberán verificarse al menos estas propiedades:

```text
selección de una línea
→ funciona

selección de intervalo
→ funciona

r_exp_rca01.py
→ permanece intacto

rótulos organizativos
→ no ocupan plazas sustantivas

WORD / CHAR / LSA
→ generan rankings independientes

pool
→ unión deduplicada

núcleo
→ separado de reserva

reserva
→ conserva especialización por canal

procedencia
→ visible

clasificación automática
→ inexistente
```

---

# 23. Regresión sobre casos conocidos

Los casos ya utilizados durante el diagnóstico podrán emplearse exclusivamente como regresión técnica.

No constituirán evidencia nueva.

En el caso Welser, la regresión esperada será aproximadamente:

```text
L1139 → núcleo
L1155 → núcleo
L1157 → reserva
L1162 → reserva
```

Si una modificación posterior destruye esta distribución deberá investigarse antes de congelar la revisión.

No deberá reajustarse automáticamente el mecanismo para restaurarla sin analizar la causa.

---

# 24. Congelación de la revisión

Una vez implementada y comprobada técnicamente:

```text
implementación
→ tests
→ regresión
→ revisión de diff
→ congelación
→ hash
→ commit
```

La versión deberá quedar estable antes de recibir material verdaderamente nuevo.

Los parámetros utilizados deberán quedar registrados junto con la versión congelada.

---

# 25. Condición para una nueva prueba

Una nueva prueba requerirá una aportación cuya relación con el corpus no haya sido inspeccionada previamente durante:

- la primera prueba;
- el diagnóstico;
- la implementación;
- la regresión.

Sólo entonces podrá evaluarse de nuevo de forma ciega la revisión.

La secuencia deberá ser:

```text
diseño derivado
↓
implementación
↓
comprobación técnica
↓
regresión conocida
↓
congelación
↓
aportación nueva
↓
prueba
↓
evaluación humana
```

---

# 26. Hipótesis experimental realizada por el diseño

La revisión pretende realizar operativamente:

`H-RCA-03 — Recuperación multicanal con presentación estratificada`.

La hipótesis sostiene que, si:

1. la persona puede representar una aportación con una extensión adecuada;
2. la recuperación conserva señales complementarias;
3. las unidades organizativas no desplazan antecedentes sustantivos;
4. los candidatos se deduplican;
5. la presentación distingue consenso y especialización;
6. la decisión permanece en la persona;

entonces puede ser posible ofrecer un conjunto manejable de antecedentes sin perder señales útiles detectadas únicamente por un canal.

La implementación de la revisión no validará la hipótesis.

Sólo construirá una realización apta para ponerla a prueba.

---

# 27. Parámetros provisionales de la primera revisión

La primera realización de la revisión utilizará provisionalmente:

```text
TOP_K = 8
CORE_SIZE = 5
MIN_GAP = 15
MAX_SPECIALISTS_PER_CHANNEL = 2
RRF_K = 60
ORGANIZATIONAL_MAX_WORDS = 8
```

Su estatuto será:

```text
parámetros experimentales congelables
para una primera prueba de la revisión
```

y no:

```text
propiedades universales del dominio
```

---

# 28. Resultado de la derivación

El diseño mínimo queda resumido en:

```text
R-EXP-RCA-01 v1
→ permanece congelada

R-EXP-RCA-01 v2
→ archivo nuevo

ENTRADA
→ unidad humana de 1..N líneas contiguas

GENERACIÓN
→ WORD top 8
→ CHAR top 8
→ LSA top 8
→ unidades organizativas fuera de plazas sustantivas
→ unión
→ deduplicación

PRESENTACIÓN PRINCIPAL
→ RRF top 5

RESERVA ESPECIALIZADA
→ gap >= 15
→ máximo 2 por canal
→ estatuto secundario explícito

SALIDA
→ texto
→ procedencia
→ rangos
→ distinción núcleo/reserva

INTERPRETACIÓN
→ permanece en la persona
```

Los valores numéricos constituyen la realización experimental inicial del diseño.

No se consideran propiedades generales.

---

# 29. Punto de cierre

Con este documento:

```text
diagnóstico
→ ya consolidado

diseño mínimo
→ derivado

r_exp_rca01.py
→ todavía sin modificar

r_exp_rca01_v2.py
→ todavía no creado

parámetros
→ definidos como experimentales

nueva prueba
→ todavía no iniciada
```

La siguiente actuación justificable consiste en implementar esta revisión mínima sin introducir mecanismos adicionales.

La secuencia queda:

```text
evidencia
↓
diagnóstico
↓
diseño derivado
↓
implementación
↓
comprobación
↓
congelación
↓
nueva prueba
```

---
