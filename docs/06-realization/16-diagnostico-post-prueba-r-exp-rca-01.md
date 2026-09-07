# Diagnóstico posterior a la prueba de R-EXP-RCA-01

## Estado

**Consolidado.**

Este documento registra y consolida la investigación diagnóstica realizada después del cierre de la primera prueba ciega de `R-EXP-RCA-01`.

Su función no consiste en modificar retrospectivamente aquella prueba ni en presentar una segunda prueba ciega.

Los casos previamente conocidos se utilizan aquí como material diagnóstico y de regresión para investigar las causas de los fallos observados y derivar, cuando exista evidencia suficiente, condiciones para una posible revisión experimental posterior.

Durante esta fase no se modifica `r_exp_rca01.py`.

---

# 1. Propósito

La primera prueba de `R-EXP-RCA-01` corroboró utilidad local de la recuperación previa para comparación humana, pero dejó cuatro fallos diagnósticos:

- `F-RCA-01 — Priorización insuficiente`;
- `F-RCA-02 — Sobrevaloración de unidades breves`;
- `F-RCA-03 — Unidad candidata física insuficiente`;
- `F-RCA-04 — Correspondencia distribuida o reformulada insuficientemente priorizada`.

La investigación posterior tuvo como objetivo determinar qué mecanismos producían esos fallos y qué modificaciones podían estar justificadas antes de construir una revisión del prototipo.

La investigación no tuvo como objetivo:

- optimizar parámetros sobre el corpus;
- determinar automáticamente duplicación o novedad;
- establecer equivalencia semántica;
- sustituir la comparación humana;
- diseñar todavía una implementación definitiva;
- demostrar generalidad fuera del alcance observado.

---

# 2. Restricción metodológica

La investigación se realizó externamente al prototipo congelado.

`r_exp_rca01.py` permaneció sin modificaciones.

Las distintas variantes fueron ejecutadas mediante scripts diagnósticos que reutilizaban los componentes de recuperación existentes y modificaban únicamente:

- la unidad utilizada como candidata;
- la manera de separar unidades organizativas y sustantivas;
- la generación de candidatos por canales;
- la combinación diagnóstica de resultados;
- la forma de presentación de antecedentes.

Los casos ya conocidos de la primera prueba dejaron de tener estatuto de prueba ciega.

Su utilización posterior tiene exclusivamente estatuto diagnóstico y regresivo.

---

# 3. Resultado general

La investigación permite distinguir dos problemas que inicialmente aparecían mezclados:

```text
problema de representación de la aportación
+
problema de recuperación y presentación
```

La primera versión trataba una línea física como unidad candidata y fusionaba directamente varias señales de similitud en un único ranking.

Los diagnósticos posteriores muestran que ambos supuestos pueden ocultar antecedentes útiles.

El resultado consolidado no consiste todavía en un algoritmo definitivo.

Consiste en una estructura experimental mejor justificada:

```text
aportación humana de extensión variable
        ↓
generación multicanal
        ↓
distinción entre material sustantivo
y unidades organizativas
        ↓
unión y deduplicación
        ↓
núcleo principal por consenso
        +
reserva especializada distinguida
        ↓
comparación e interpretación humana
```

---

# 4. F-RCA-02 — Sobrevaloración de unidades breves

## 4.1. Observación

En varias consultas, unidades breves como:

```text
Leyes de indias
Los Welser
Las leyes de indias julio henche
```

ocupaban posiciones superiores a antecedentes sustantivos mucho más útiles para la comparación.

El problema no podía reducirse simplemente a longitud.

Una prueba basada en exclusión por número de palabras mejoraba algunos rankings, pero eliminaba indiscriminadamente numerosas unidades y no distinguía adecuadamente función documental y extensión textual.

---

## 4.2. Distinción entre unidad organizativa y unidad sustantiva

Se investigó una detección diagnóstica de unidades con apariencia de encabezado o rótulo.

Una primera heurística que clasificaba como separador cualquier unidad iniciada por secuencias como:

```text
----------
```

resultó excesivamente agresiva.

`parse_paragraphs()` podía haber unido el separador con un párrafo sustantivo posterior.

Por tanto:

```text
prefijo gráfico de separación
≠
unidad enteramente organizativa
```

La heurística se corrigió para examinar el contenido restante después de retirar el prefijo.

Con esta corrección, los párrafos largos precedidos por separadores dejaron de ser excluidos automáticamente.

---

## 4.3. Resultado

La separación diagnóstica entre rótulos organizativos y antecedentes sustantivos mejoró la priorización de casos concretos.

Por ejemplo, el antecedente sobre la recopilación de 1680 pasó de una posición inferior provocada parcialmente por rótulos como `Leyes de indias` a una posición incluida entre los antecedentes sustantivos principales.

Sin embargo, la investigación mostró también que un rótulo no debe ser considerado automáticamente ruido.

Un rótulo puede desempeñar una función estructural útil:

```text
rótulo
→ no necesariamente antecedente
→ pero potencialmente indicador de una región documental
```

Por tanto, la conclusión no es:

```text
eliminar encabezados
```

sino:

```text
distinguir estatuto organizativo
de estatuto sustantivo
```

---

# 5. Investigación de rótulos como anclas contextuales

## 5.1. Hipótesis diagnóstica

Se investigó si un rótulo bien relacionado con la candidata podía utilizarse como ancla para recuperar párrafos sustantivos cercanos.

El caso `Los Welser` resultó especialmente informativo.

El rótulo ocupaba una posición alta en la recuperación y estaba documentalmente próximo a varios antecedentes relevantes.

---

## 5.2. Expansión posterior

La expansión de los párrafos posteriores al rótulo permitió recuperar progresivamente antecedentes que el ranking directo situaba demasiado abajo.

Sin embargo, la recuperación dependía de la profundidad y no alcanzaba antecedentes situados antes del rótulo.

---

## 5.3. Expansión bidireccional

Se probó posteriormente una expansión hacia delante y hacia atrás.

La recuperación aumentó, pero también lo hizo rápidamente el número de candidatos.

En el caso Welser, recuperar los cuatro antecedentes de control mediante expansión bidireccional requirió una profundidad que generaba un conjunto superior al de otras estrategias ya consideradas demasiado amplias.

---

## 5.4. Resultado

La vecindad documental contiene señal útil.

Sin embargo:

```text
expansión contextual indiscriminada
→ aumenta recall
→ pero aumenta excesivamente ruido
```

Por tanto, la expansión alrededor de anclas no queda justificada como mecanismo general de la siguiente revisión.

Su utilidad local queda registrada, pero no se incorpora al mecanismo provisional de v2.

---

# 6. F-RCA-03 — Unidad candidata física insuficiente

## 6.1. Problema

La primera versión obliga a suministrar una línea física concreta como candidata.

La evaluación humana realizada durante la prueba mostró que la aportación valorada podía ocupar varias líneas y constituir una unidad intelectual mayor que la línea física utilizada por el programa.

El caso Welser permitió comprobar causalmente esta diferencia.

---

## 6.2. Comparación L7 frente a bloque humano L3–L9

Se comparó:

```text
L7 aislada
```

con:

```text
bloque humano L3–L9
```

El bloque reunía en una sola unidad:

- comienzo de la concesión;
- Carlos I;
- familia Welser;
- Venezuela;
- explotación;
- oro;
- esclavización;
- vulneración de las Leyes de Indias;
- revocación por el Consejo de Indias en 1546.

Los antecedentes de control experimentaron una mejora sustancial de ranking:

```text
             L7 aislada   bloque L3–L9

L1139             18            6
L1155             10            7
L1157             87           58
L1162             38           11
```

---

## 6.3. Resultado

`F-RCA-03` queda reforzado.

La unidad física no constituye únicamente una limitación de interfaz.

Puede degradar directamente la recuperación cuando no coincide con la unidad de aportación que la persona está realmente evaluando.

Por tanto:

```text
unidad candidata
≠ necesariamente línea física
```

Una revisión posterior deberá permitir representar una aportación humana de extensión variable.

No se establece todavía cómo deberá realizarse técnicamente esa selección.

---

# 7. F-RCA-01 y F-RCA-04 — Dilución de señales especializadas

## 7.1. Persistencia del falso negativo L1157

La utilización del bloque humano correcto mejoró varios antecedentes, pero `L1157` siguió apareciendo demasiado abajo en el ranking combinado.

Su comportamiento por canal fue aproximadamente:

```text
WORD → muy débil
CHAR → fuerte
LSA  → muy débil
```

La señal `CHAR` reconocía una correspondencia que los otros canales no priorizaban.

Al fusionar directamente los tres valores, esa señal quedaba diluida.

---

## 7.2. Complementariedad entre canales

Se investigó la recuperación independiente mediante:

- `WORD`;
- `CHAR`;
- `LSA`.

Con el bloque humano L3–L9 y los diez mejores antecedentes sustantivos de cada canal, la unión deduplicada produjo veinte candidatos y recuperó los cuatro controles.

Las vías observadas fueron:

```text
L1139 → WORD + CHAR + LSA
L1155 → WORD + LSA
L1157 → CHAR
L1162 → LSA
```

Esto demuestra localmente que los canales no son intercambiables.

Exigir acuerdo entre varios canales habría eliminado antecedentes útiles detectados únicamente por uno.

---

# 8. Reducción del pool de generación

## 8.1. Búsqueda del menor K

Se investigó el menor `top-K` por canal que mantuviera los cuatro antecedentes del caso Welser.

El primer valor que los conservó conjuntamente fue:

```text
K = 8
```

La unión de:

```text
WORD top 8
CHAR top 8
LSA top 8
```

produjo quince candidatos sustantivos únicos.

---

## 8.2. Estatuto de K=8

`K=8` no queda establecido como constante general.

Su estatuto es:

```text
mínimo empírico observado
en el caso diagnóstico utilizado
```

No se ha demostrado que sea suficiente para otros corpus o situaciones.

---

# 9. Fallo de los rerankings globales simples

Se probaron tres formas de ordenar el pool común:

- combinación ponderada existente (`CURRENT`);
- mejor posición alcanzada en cualquier canal (`BEST`);
- Reciprocal Rank Fusion (`RRF`).

Los tres métodos conservaron un problema importante.

En particular, `L1157`, que había entrado correctamente por `CHAR`, volvió a quedar cerca del final del conjunto.

Su perfil era aproximadamente:

```text
WORD → 117
CHAR → 8
LSA  → 102
```

Por tanto:

```text
generación multicanal
→ recupera L1157

reranking global
→ vuelve a ocultarlo
```

La investigación permite concluir que un único ranking global no garantiza por sí solo la preservación de señales especializadas.

---

# 10. Consenso y especialización

## 10.1. Distinción observada

Los antecedentes recuperados presentan perfiles diferentes.

Puede distinguirse diagnósticamente entre:

```text
antecedente de consenso
→ varios canales lo priorizan

antecedente especializado
→ un canal lo prioriza fuertemente
  mientras los demás apenas lo reconocen
```

Los controles del caso Welser ilustran distintos grados:

```text
L1139 → consenso fuerte
L1155 → consenso razonable
L1162 → especialización moderada
L1157 → especialización extrema
```

---

## 10.2. Gap de especialización

Se utilizó como diagnóstico la diferencia entre:

```text
mejor rango
y
segundo mejor rango
```

de cada candidato.

`L1157` mostró el mayor gap del pool.

Esto corroboró que su comportamiento era efectivamente especializado.

Sin embargo, otros candidatos con gaps elevados resultaron humanamente laterales o potencialmente ruidosos.

Por tanto:

```text
gap alto
→ evidencia de especialización de canal

gap alto
≠ evidencia de pertinencia humana
```

La especialización no puede utilizarse como sustituto de la comparación humana.

---

# 11. Núcleo por consenso

Se investigó `RRF` no como ranking definitivo de todos los candidatos, sino como mecanismo para construir un núcleo pequeño de antecedentes con apoyo relativamente convergente.

Se utilizó diagnósticamente:

```text
RRF top 5
```

La transferencia posterior mostró un comportamiento razonablemente estable en los casos observados.

El núcleo recuperó antecedentes principales en:

- Welser;
- recopilación de 1680;
- juicio de residencia;
- origen del juicio de residencia;
- definición jurídica de “blanco”;
- protección jurídica correspondiente al caso L65.

El estatuto de `RRF-5` permanece provisional.

No se ha demostrado que cinco resultados constituyan un tamaño universalmente óptimo.

---

# 12. Reserva especializada

## 12.1. Motivación

Eliminar las señales especializadas produciría falsos negativos como `L1157`.

Promocionarlas automáticamente al mismo nivel que el núcleo introduce ruido significativo.

Por tanto, ambos comportamientos son insuficientes:

```text
eliminar especialización
→ pérdida de antecedentes útiles

promocionar especialización
→ contaminación de la presentación principal
```

---

## 12.2. Investigación mediante gap y cuota

Se probaron:

- distintos umbrales de gap;
- cuotas máximas por canal;
- combinación de ambos mecanismos.

Los valores:

```text
gap ≥ 15
máximo 2 especialistas por canal
```

permitieron mantener los controles conocidos en los casos utilizados y limitar el tamaño de la reserva.

Sin embargo, aparecieron especialistas claramente laterales en los casos de transferencia.

Por tanto, esos parámetros no quedan consolidados como criterio de pertinencia.

---

# 13. Presentación estratificada

La última prueba mantuvo los cálculos congelados y modificó únicamente el estatuto de presentación:

```text
PRESENTACIÓN PRINCIPAL
→ núcleo RRF-5

RESERVA ESPECIALIZADA
→ señales secundarias
→ separadas explícitamente
→ no equivalentes al núcleo
```

La reserva se presentó con una advertencia funcional:

```text
estas unidades no tienen el mismo estatuto que el núcleo;
se conservan porque un canal detecta una señal
que el consenso podría ocultar;
su pertinencia debe valorarla la persona.
```

---

# 14. Resultado del caso Welser

La presentación estratificada produjo:

```text
NÚCLEO

L1139
L1155

RESERVA

L1157
L1162
```

Esto permite conservar simultáneamente:

- antecedentes favorecidos por consenso;
- antecedentes especializados que el consenso ocultaba.

La reserva evita que `L1157` desaparezca sin promoverlo artificialmente al mismo estatuto que los antecedentes principales.

---

# 15. Transferencia a otros casos

La misma regla congelada se aplicó posteriormente a casos conocidos que no se utilizaron para derivar la separación final de presentación.

## 15.1. L25 — aportación valorada como nueva

El núcleo recuperó antecedentes directamente relacionados con:

- derecho indiano;
- juicio de residencia;
- funcionarios sometidos a residencia.

La recuperación no permitió concluir que el elemento específico aportado por la candidata —su origen y formulación histórica concreta— ya estuviera incorporado.

La decisión humana previa de conservar la aportación como nueva no fue sustituida por el recuperador.

La reserva contenía también asociaciones laterales.

Su separación secundaria evitó otorgarles el mismo estatuto que al núcleo.

---

## 15.2. L41 — aportación valorada como complementaria

El núcleo recuperó antecedentes relacionados con:

- condición jurídica;
- vasallaje;
- derechos de los indígenas;
- integración jurídica.

La candidata aportaba una perspectiva diferente sobre el significado jurídico de “blanco” y “mestizo”.

La recuperación proporcionó material suficiente para una comparación humana entre proximidad y complementariedad.

La reserva volvió a contener varias asociaciones laterales, confirmando que especialización no equivale a pertinencia.

---

## 15.3. L65 — decisión humana inconclusa

El núcleo recuperó:

- la recopilación de 1680;
- disposiciones jurídicas relativas a indígenas;
- antecedentes de protección y ordenación jurídica.

La información recuperada no permitió convertir automáticamente el caso en:

- duplicado;
- nuevo;
- complementario.

La decisión permaneció legítimamente abierta.

Este resultado es compatible con la responsabilidad de `R-EXP-RCA-01`:

```text
recuperar antecedentes útiles
para una comparación humana
```

y no:

```text
decidir por la persona
```

---

# 16. Refinamiento de los fallos RCA

## F-RCA-01 — Priorización insuficiente

La combinación ponderada única puede ocultar señales fuertes de un canal cuando los demás canales puntúan débilmente.

El fallo queda corroborado localmente.

---

## F-RCA-02 — Sobrevaloración de unidades breves

Parte del problema procede de unidades que desempeñan función organizativa y ocupan posiciones de antecedentes sustantivos.

La longitud por sí sola no constituye un criterio suficiente.

Debe distinguirse función organizativa y contenido sustantivo.

---

## F-RCA-03 — Unidad candidata física insuficiente

Una línea física puede no corresponder a la aportación humana realmente evaluada.

La utilización de una unidad humana de extensión mayor produjo mejoras sustanciales de recuperación.

El fallo queda corroborado localmente también como problema de calidad de recuperación.

---

## F-RCA-04 — Correspondencia distribuida o reformulada insuficientemente priorizada

La investigación permite distinguir al menos dos mecanismos:

### F-RCA-04a — Pérdida de contexto o referente

La segmentación puede separar una formulación de su sujeto o contexto necesario.

Añadir contexto mínimo restauró señales en varios antecedentes del caso Welser.

### F-RCA-04b — Señal especializada diluida

Correspondencias léxicas, morfológicas o fragmentarias pueden ser captadas por un canal concreto —especialmente `CHAR` en el caso estudiado— y quedar ocultas por una fusión global.

No se establece que `CHAR` sea universalmente el canal apropiado.

Se establece únicamente que una señal especializada útil puede existir y no debe ser descartada por falta de consenso.

---

# 17. Criterios provisionales para una posible v2

Los diagnósticos permiten formular los siguientes criterios.

## CR-V2-01 — Priorización útil

La revisión deberá mejorar la probabilidad de que antecedentes útiles aparezcan en una cantidad humanamente revisable.

---

## CR-V2-02 — No dominación organizativa

Las unidades con función predominantemente organizativa no deberán desplazar automáticamente antecedentes sustantivos en la presentación principal.

---

## CR-V2-03 — Extensión variable de candidata

La persona deberá poder representar como candidata la unidad de aportación que realmente desea comparar, sin quedar limitada necesariamente a una línea física.

---

## CR-V2-04 — Correspondencia no literal útil

La generación deberá poder conservar antecedentes relacionados mediante señales distintas de la mera coincidencia literal global.

---

## CR-V2-05 — Conservación de éxitos anteriores

Una revisión no deberá destruir los casos útiles ya recuperados por la versión inicial.

---

## CR-V2-06 — Frontera humana

La realización deberá continuar limitándose a recuperación y presentación de antecedentes.

No deberá decidir automáticamente:

- verdad;
- falsedad;
- duplicación;
- novedad;
- complementariedad;
- incorporación;
- eliminación;
- reescritura.

---

## CR-V2-07 — Preservación distinguible de especialización

Una señal especializada que pueda resultar útil para la comparación no deberá perderse únicamente por falta de consenso entre canales.

Al mismo tiempo, la especialización no deberá conferir automáticamente a esa unidad el mismo estatuto que a los antecedentes del núcleo principal.

La presentación deberá permitir distinguir ambas clases de evidencia.

---

# 18. Mecanismo provisional derivado

La investigación justifica explorar en una revisión posterior una estructura semejante a:

```text
APORTACIÓN HUMANA
de extensión variable
        ↓
GENERACIÓN
        ↓
WORD
CHAR
LSA
        ↓
candidatos sustantivos
por canal
        ↓
unión
+
deduplicación
        ↓
┌──────────────────────────┐
│ NÚCLEO PRINCIPAL         │
│                          │
│ evidencia favorecida     │
│ por consenso             │
└──────────────────────────┘

┌──────────────────────────┐
│ RESERVA ESPECIALIZADA    │
│                          │
│ señales que un canal     │
│ detecta de forma         │
│ especialmente fuerte     │
└──────────────────────────┘
        ↓
COMPARACIÓN HUMANA
```

Este esquema constituye una hipótesis de realización posterior.

No constituye todavía diseño definitivo.

---

# 19. Parámetros que permanecen contingentes

Durante los diagnósticos se utilizaron valores concretos:

```text
K = 8
RRF top = 5
gap mínimo = 15
máximo de especialistas por canal = 2
```

Ninguno de ellos queda establecido como constante general.

Su estatuto es exclusivamente:

```text
parámetros diagnósticos
que permitieron estudiar
la estructura del mecanismo
```

No deberán convertirse en normativa de implementación sin nueva justificación.

---

# 20. Hipótesis para una revisión experimental

## H-RCA-03 — Recuperación multicanal con presentación estratificada

Si:

1. la persona puede representar la aportación mediante una unidad de extensión adecuada;
2. la recuperación genera candidatos mediante señales complementarias;
3. las unidades predominantemente organizativas se distinguen de los antecedentes sustantivos;
4. los candidatos se deduplican;
5. la presentación distingue un núcleo favorecido por consenso de una reserva de señales especializadas;
6. la interpretación final permanece en la persona;

entonces puede ser posible presentar un conjunto manejable de antecedentes que preserve tanto correspondencias convergentes como señales útiles detectadas por un solo canal, sin convertir la recuperación en una decisión automática sobre novedad, duplicación o incorporación.

Esta hipótesis recibe apoyo diagnóstico local.

Su suficiencia general no está establecida.

---

# 21. Límites de la evidencia

Los resultados obtenidos no permiten afirmar:

- que `K=8` sea óptimo;
- que `RRF-5` sea óptimo;
- que `gap=15` sea óptimo;
- que dos especialistas por canal sea un límite general;
- que los tres canales utilizados constituyan el conjunto mínimo o definitivo;
- que toda especialización sea pertinente;
- que toda unidad organizativa deba excluirse;
- que la presentación estratificada sea la interfaz final;
- que la estrategia generalice a otros corpus;
- que la revisión propuesta satisfaga todavía `H-RCA-02` de forma general;
- que exista una nueva exigencia de Product;
- que exista una nueva necesidad arquitectónica.

---

# 22. Consecuencia para R-EXP-RCA-01

La primera versión permanece congelada como realización experimental ya probada.

Los resultados posteriores no reescriben su prueba ciega.

La investigación diagnóstica proporciona fundamento positivo para considerar una revisión experimental posterior.

Esa revisión deberá tratarse como una modificación explícita de la realización y no como una reinterpretación retrospectiva de la versión ya probada.

Antes de modificar `r_exp_rca01.py` deberá decidirse explícitamente:

- qué parte del mecanismo provisional se incorpora;
- qué parámetros continúan siendo experimentales;
- cómo se representa una candidata de extensión variable;
- cómo se distingue núcleo y reserva en la salida;
- cómo se preserva la trazabilidad respecto de la versión congelada.

---

# 23. Resultado consolidado

La fase diagnóstica posterior a la primera prueba puede cerrarse con el siguiente resultado:

> La insuficiencia observada en `R-EXP-RCA-01` no se reduce a un problema de pesos del ranking. La investigación local muestra que intervienen al menos la representación de la unidad candidata, la interferencia de unidades organizativas, la complementariedad entre señales de recuperación y la pérdida de antecedentes especializados al imponer un único ranking global. Una estructura de generación multicanal seguida por una presentación estratificada —núcleo principal y reserva especializada— preservó los antecedentes de control en los casos estudiados y mantuvo la decisión interpretativa en la persona. Los mecanismos reciben apoyo diagnóstico local; sus parámetros concretos y su suficiencia general permanecen abiertos.

---

# 24. Punto de cierre

Con esta consolidación:

```text
diagnóstico posterior
→ cerrado

r_exp_rca01.py
→ todavía sin modificar

dirección experimental para posible v2
→ positivamente fundada

diseño definitivo
→ no establecido

parámetros generales
→ no establecidos

nueva prueba ciega
→ todavía no realizada
```

La siguiente modificación de la realización, si se emprende, deberá derivarse de esta consolidación y mantener separadas:

```text
evidencia ya observada
↓
decisión de diseño experimental
↓
implementación
↓
congelación de nueva versión
↓
nueva prueba
```

---
