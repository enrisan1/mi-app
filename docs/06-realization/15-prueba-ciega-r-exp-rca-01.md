# Primera prueba ciega de `R-EXP-RCA-01`

## Propósito

Este documento registra y evalúa la primera prueba ciega de:

```text
R-EXP-RCA-01
— Recuperación previa para comparación de aportaciones
```

La realización experimental surge con posterioridad a la evidencia consolidada en:

```text
14-evidencia-empirica-incorporacion-organizacion-recuperacion.md
```

El documento 14 había establecido, dentro del alcance observado, que una actividad
real de incorporación, organización y recuperación podía generar situaciones en
las que una nueva aportación debía ponerse en relación con material anterior.

La investigación posterior identificó una dificultad concreta:

> antes de incorporar nueva documentación a un corpus amplio, la persona puede
> necesitar recuperar antecedentes relevantes ya presentes para poder comparar
> qué aporta realmente la nueva información sin depender exclusivamente de su
> memoria ni recorrer manualmente todo el corpus.

A partir de esa situación se construyó `R-EXP-RCA-01`.

La presente prueba no pretende validar una solución general ni establecer una
responsabilidad nueva de Product o Architecture.

Su objetivo es más limitado:

> comprobar si una versión experimental concreta puede recuperar antecedentes
> suficientemente relevantes y presentarlos en una cantidad manejable para apoyar
> una comparación humana previa a la incorporación.

---

# 1. Posición de la prueba

La secuencia documental relevante es:

```text
14-evidencia-empirica-incorporacion-organizacion-recuperacion.md
        ↓
aparición de una dificultad concreta
de recuperación comparativa
        ↓
formulación de H-RCA-02
        ↓
construcción de R-EXP-RCA-01
        ↓
congelación de una versión experimental
        ↓
primera prueba ciega
        ↓
presente documento
```

La prueba pertenece al plano de Realization.

No constituye una ampliación automática de Product, Architecture ni de las
exigencias estructurales previamente consolidadas.

---

# 2. Situación experimental

La situación investigada puede expresarse de forma mínima como:

```text
corpus documental C
        +
aportación candidata I
        ↓
necesidad de determinar
qué antecedentes de C
pueden ser relevantes para I
        ↓
recuperación previa
        ↓
comparación humana
        ↓
decisión sobre I
```

La dificultad no consiste necesariamente en localizar una coincidencia textual
exacta.

Una aportación nueva puede guardar relación con material anterior mediante:

```text
coincidencia literal
reformulación
cobertura parcial
información distribuida
dato contradictorio
ejemplo adicional
perspectiva diferente
formulación expresivamente más útil
```

Por tanto, una búsqueda textual simple podía resultar insuficiente en algunos
casos observados.

---

# 3. Hipótesis experimental

Se formuló:

```text
H-RCA-02
— Recuperación comparativa previa
```

con la hipótesis:

> La combinación de recuperación textual y recuperación por similitud de contenido
> puede presentar un conjunto manejable de antecedentes relevantes que permita a
> una persona comparar una aportación nueva con material previo antes de decidir
> su incorporación.

La hipótesis no atribuye al mecanismo la responsabilidad de decidir:

```text
qué es verdadero;
qué es nuevo en sentido semántico;
qué debe conservarse;
qué debe eliminarse;
qué debe redactarse;
qué posición debe ocupar una aportación;
ni si dos expresiones significan exactamente lo mismo.
```

Esas operaciones continúan requiriendo interpretación humana.

---

# 4. Realización experimental

La realización utilizada fue:

```text
R-EXP-RCA-01
— Recuperación previa para comparación de aportaciones
```

Su función experimental consistía en:

```text
aportación candidata
        ↓
recuperación textual
        +
recuperación por similitud de contenido
        ↓
fusión y priorización
        ↓
conjunto reducido de antecedentes
        ↓
presentación de localización y contexto
        ↓
comparación humana
```

El prototipo utilizado se encuentra en:

```text
experiments/r-exp-rca-01/r_exp_rca01.py
```

---

# 5. Congelación previa

Antes de realizar la prueba ciega se congeló la versión experimental.

La versión quedó registrada mediante:

```text
commit 45b6f80
experiment(realization): freeze RCA-01 retrieval prototype
```

Se conservaron:

```text
r_exp_rca01.py
r_exp_rca01.py.sha256
requirements.txt
```

y se excluyó del repositorio el entorno virtual local:

```text
experiments/r-exp-rca-01/.venv/
```

La comprobación de integridad previa produjo:

```text
experiments/r-exp-rca-01/r_exp_rca01.py:
La suma coincide
```

Las dependencias congeladas fueron:

```text
cloudpickle==3.1.2
joblib==1.6.0
narwhals==2.25.0
numpy==2.5.3
scikit-learn==1.9.0
scipy==1.18.1
threadpoolctl==3.6.0
```

No se modificó `r_exp_rca01.py` durante la prueba.

Esta condición era necesaria para distinguir:

```text
rendimiento de una versión previamente fijada
        ≠
ajuste posterior a los casos observados
```

---

# 6. Material de la prueba

## 6.1. Corpus previo

El corpus utilizado para la recuperación fue el documento de trabajo:

```text
¿Y tú de quién eres?
```

Se trata de un corpus amplio en el que coexistían:

```text
texto en elaboración;
documentación incorporada;
notas;
extractos;
copias históricas;
material reutilizado;
y bloques parcialmente duplicados.
```

La existencia de duplicaciones conocidas no se eliminó artificialmente antes de
la prueba.

El prototipo mantenía las localizaciones de apariciones repetidas, aunque
indexaba una sola vez los textos normalizados idénticos.

---

## 6.2. Documentación candidata

Como documentación nueva se utilizó:

```text
Justicia real en la américa española - César pérez guevara.md
```

Este documento no había sido utilizado durante la construcción ni durante las
comprobaciones iniciales de la versión congelada del prototipo.

Por tanto, podía utilizarse como material para una primera prueba ciega.

---

# 7. Procedimiento

La prueba siguió el siguiente esquema:

```text
documentación nueva
        ↓
selección de aportación candidata
        ↓
ejecución de R-EXP-RCA-01
        ↓
registro de los primeros resultados
        ↓
comparación con antecedentes recuperados
        ↓
valoración humana
        ↓
auditoría posterior del corpus
        ↓
detección de antecedentes omitidos
        ↓
evaluación del rendimiento
```

Durante la primera pasada no se modificó el prototipo.

La auditoría manual posterior se utilizó para distinguir:

```text
antecedente inexistente
        de
antecedente existente pero no recuperado

y

antecedente recuperado
        de
antecedente suficientemente priorizado
```

---

# 8. Criterios de evaluación

La prueba consideró positiva una recuperación cuando:

```text
el antecedente relevante
→ aparecía entre los resultados manejables;

la cantidad de resultados
→ permitía comparación práctica;

la comparación
→ podía realizarse sin recorrer extensamente el corpus;

la recuperación
→ ayudaba a confirmar o modificar una decisión humana.
```

Se consideró fallo relevante cuando:

```text
un antecedente conocido y pertinente
→ no aparecía;

aparecía demasiado abajo
→ para formar parte del conjunto manejable;

coincidencias superficiales
→ desplazaban antecedentes mejores;

era necesario realizar múltiples búsquedas manuales;

o la unidad candidata utilizada
→ impedía representar adecuadamente la aportación.
```

---

# 9. Resultado técnico general

La prueba produjo evidencia positiva y negativa.

Se observaron resultados positivos en:

```text
coincidencias textuales directas
→ recuperación eficaz;

antecedentes parciales
→ recuperación útil en varios casos;

reformulaciones
→ recuperación posible en determinados casos;

información distribuida
→ recuperación parcial;

datos contradictorios
→ capacidad de hacer visibles antecedentes incompatibles;

foco humano opcional
→ mejora real de determinados resultados.
```

Pero también aparecieron fallos no suficientemente visibles durante las
comprobaciones previas:

```text
priorización deficiente;

unidades muy breves excesivamente favorecidas;

antecedentes sustantivos fuera del conjunto reducido;

falsos negativos prácticos;

insuficiencia de la línea física
como unidad candidata general.
```

---

# 10. Fallo de priorización

Uno de los resultados principales de la prueba fue comprobar que:

```text
antecedente indexado
        ≠
antecedente útilmente recuperado
```

Un antecedente puede existir dentro del índice y, sin embargo, ocupar una posición
tan baja que no llegue a mostrarse dentro del conjunto reducido destinado a la
comparación humana.

La secuencia observada fue:

```text
antecedente relevante
        ↓
correctamente indexado
        ↓
puntuación insuficiente
        ↓
posición baja
        ↓
fuera del top manejable
        ↓
falso negativo práctico
```

Este comportamiento apareció claramente en la documentación sobre los Welser y
también en otros casos de la prueba.

---

# 11. Interferencia de unidades breves

La prueba mostró que determinados encabezados o textos muy cortos podían recibir
una puntuación alta por compartir gran parte de su pequeño vocabulario con la
aportación candidata.

Se observó:

```text
unidad muy corta
+
coincidencia léxica elevada
        ↓
posición artificialmente alta
```

mientras que:

```text
párrafo sustantivo
+
mayor contenido relevante
        ↓
posición inferior
```

Esto produjo casos en los que encabezados como:

```text
Leyes de Indias
```

podían desplazar párrafos que contenían información mucho más útil para la
comparación.

El resultado justifica investigar posteriormente el tratamiento de unidades
demasiado breves.

No se deriva todavía cuál debe ser el mecanismo concreto de corrección.

---

# 12. Insuficiencia de la línea física como unidad candidata

El prototipo recibía una candidata mediante:

```text
--line N
```

La prueba mostró que:

```text
línea física Markdown
        ≠ necesariamente
unidad humana de aportación
```

El caso de los Welser fue especialmente claro.

La documentación estaba distribuida en varias líneas que, consideradas
conjuntamente, formaban una única aportación contextual:

```text
1528
→ inicio de la capitulación

actuación de los Welser
→ explotación y esclavización

1546
→ revocación de la capitulación
```

Separar esas líneas como candidatas independientes destruía parte de la
configuración necesaria para valorar el episodio.

Por tanto:

```text
unidad candidata = línea física
→ insuficiente como regla general
```

---

# 13. Caso inverso: unidad candidata demasiado grande

La prueba mostró también el problema contrario.

En determinados casos, el párrafo completo podía contener sólo un fragmento
realmente diferencial respecto del corpus.

La aportación sobre protección jurídica reforzada mostró:

```text
párrafo completo
        ↓
contenido principal ya representado
        +
pequeño detalle adicional
```

La persona consideró que el detalle podía merecer conservación si pudiera
aislarse, pero no pudo justificar con claridad conservar necesariamente el
párrafo completo sólo por ese incremento.

Por tanto:

```text
línea
→ puede ser demasiado pequeña

párrafo
→ puede ser demasiado grande
```

La unidad pertinente para la comparación no puede identificarse a priori con una
unidad física fija del documento.

---

# 14. Evaluación humana de casos seleccionados

## 14.1. Caso Welser — líneas 3–9

### Material previo

El corpus ya contenía información sobre:

```text
los Welser;
la búsqueda de oro;
la esclavización de indígenas;
el incumplimiento de legislación;
y el final de la concesión.
```

### Aportación nueva

La nueva documentación proporcionaba una configuración más compacta del episodio:

```text
1528
→ capitulación

actuación posterior
→ explotación
→ búsqueda rápida de riqueza
→ esclavización
→ incumplimiento

1546
→ revocación por el Consejo de Indias
```

### Diferencia informativa

La persona consideró relevantes los dos hitos cronológicos precisos:

```text
1528
→ comienzo

1546
→ final
```

### Diferencia expresiva

La decisión de conservar la aportación completa no dependió únicamente de los
datos nuevos.

La nueva formulación se consideró útil porque:

```text
expresaba el fenómeno
con mayor concisión;

reducía la cantidad de lenguaje
necesaria para comunicarlo;

y proporcionaba recursos lingüísticos
aprovechables para la redacción posterior.
```

### Decisión

```text
CONSERVAR LA APORTACIÓN COMPLETA
```

### Resultado

El caso demuestra localmente:

```text
contenido parcialmente ya representado
        +
formulación expresivamente útil
        ↓
aportación todavía pertinente
```

Por tanto:

```text
redundancia informativa
        ⇏
ausencia de utilidad documental
```

---

# 15. Juicio de residencia — líneas 25–27

## 15.1. Línea 25

La nueva aportación incorporaba información sobre:

```text
origen del juicio de residencia
→ Baja Edad Media

función
→ fiscalización del oficial real
  al finalizar su cargo
```

El origen histórico no estaba suficientemente representado en los antecedentes
examinados.

### Decisión

```text
CONSERVAR
```

por diferencia informativa positiva.

---

## 15.2. Línea 27

La enumeración de funcionarios sometidos al juicio de residencia estaba ya
representada en el corpus con mayor extensión.

El antecedente previo contenía más casos.

Sin embargo, la formulación nueva fue considerada:

```text
más concisa;
más clara;
más pedagógica;
y más aprovechable
para la futura redacción.
```

La persona consideró probable una futura composición del tipo:

```text
formulación concisa nueva
        +
algún caso adicional
del antecedente más extenso
        ↓
redacción final
```

### Decisión

```text
CONSERVAR
```

### Resultado

El caso vuelve a mostrar:

```text
menor cantidad de información
        ≠
menor utilidad documental
```

Una aportación puede ser informativamente menos extensa y, sin embargo, resultar
más útil como recurso expresivo.

---

# 16. Significado social y jurídico de «blanco» — línea 41

Los antecedentes del corpus trataban principalmente la cuestión desde una
perspectiva jurídica:

```text
indígena
→ vasallo
→ derechos
→ protección
→ consecuencias legales
```

La nueva aportación abordaba la cuestión desde una perspectiva complementaria.

La valoración humana distinguió:

```text
antecedentes
→ qué posición legal tenía el individuo

L41
→ quién podía ser percibido o comprendido
  como igual dentro de determinadas
  categorías sociales y jurídicas
```

La aportación permitía observar el fenómeno no sólo desde la norma y sus efectos,
sino también desde la posición social o individual implicada.

### Decisión

```text
CONSERVAR
```

### Motivo

```text
perspectiva complementaria
```

### Resultado

Se observa:

```text
mismo ámbito general
        +
perspectiva distinta
        ↓
utilidad adicional
```

La diferencia pertinente no tiene que consistir necesariamente en un hecho nuevo.

Puede consistir en una perspectiva distinta desde la que el material resulta
utilizable.

---

# 17. Protección jurídica reforzada — línea 65

La aportación describía una disposición según la cual determinadas ofensas,
injurias o malos tratos cometidos contra indígenas debían castigarse con mayor
rigor que los mismos delitos cometidos contra españoles.

El contenido principal ya estaba representado en el corpus.

La diferencia adicional se concentraba principalmente en:

```text
identificación más precisa
de la disposición legal
```

La persona valoró esa diferencia como:

```text
positiva
pero pequeña
```

Si pudiera incorporarse únicamente el detalle diferencial:

```text
→ sería útil conservarlo
```

Si para conservarlo fuese necesario mantener todo el párrafo:

```text
→ el beneficio sería reducido
```

### Decisión

```text
NO CONCLUYENTE
```

### Resultado

La ausencia de una decisión binaria no constituye un fallo de la observación.

El caso muestra que:

```text
diferencia existente
        ≠
diferencia necesariamente suficiente
para justificar una actuación concreta
```

y que una comparación puede producir legítimamente una zona intermedia.

---

# 18. Diferencias pertinentes observadas

La prueba mostró que la comparación entre nueva documentación y antecedentes no
puede reducirse a:

```text
nuevo
/
duplicado
```

Durante la actividad aparecieron diferencias pertinentes de tipos distintos:

```text
información factual nueva;

precisión cronológica;

identificación más concreta
de una norma o fuente;

evidencia adicional
para una afirmación existente;

formulación más concisa;

formulación más pedagógica;

mayor utilidad expresiva;

perspectiva complementaria;

fragmento marginal utilizable;

combinación distinta
de información previamente existente.
```

Estas formas no se consolidan aquí como categorías universales ni como una nueva
ontología.

Se registran únicamente como diferencias efectivamente observadas durante la
actividad humana.

---

# 19. Consecuencia para la responsabilidad experimental

La prueba permite precisar mejor qué no debe hacer `R-EXP-RCA-01`.

El mecanismo no debe intentar resolver automáticamente:

```text
¿es la candidata redundante?

¿es semánticamente nueva?

¿debe conservarse?

¿debe eliminarse?

¿qué fragmento debe utilizarse?

¿qué versión está mejor redactada?

¿qué perspectiva es más valiosa?

¿qué afirmación es verdadera?
```

Su responsabilidad experimental es más limitada:

```text
aportación candidata
        ↓
recuperación de antecedentes
potencialmente relevantes
        ↓
presentación manejable
        ↓
comparación humana
```

A partir de ahí:

```text
identificación de diferencias
        ↓
valoración
        ↓
decisión
```

continúan siendo operaciones humanas.

---

# 20. Separación entre rendimiento técnico y decisión humana

La prueba confirmó que deben mantenerse separadas dos preguntas:

```text
A.
¿recuperó correctamente
los antecedentes relevantes?

B.
¿qué decidió hacer la persona
después de verlos?
```

No existe equivalencia entre ambas.

## Welser

```text
recuperación
→ insuficiente en priorización

decisión humana
→ conservar
```

## Juicio de residencia

```text
recuperación
→ útil

decisión humana
→ conservar
```

## Significado de «blanco»

```text
recuperación automática
→ inicialmente insuficiente

foco humano
→ mejora sustantiva

decisión humana
→ conservar
```

## Protección reforzada

```text
antecedente
→ recuperable

diferencia
→ mínima

decisión humana
→ no concluyente
```

Por tanto:

```text
calidad de recuperación
        ≠
valor final de la aportación
```

---

# 21. Utilidad del foco humano

La opción de introducir un foco adicional había sido incluida como mecanismo
experimental auxiliar.

La prueba proporcionó evidencia positiva de su utilidad.

En determinados casos:

```text
candidata original
        ↓
resultados insuficientes
        ↓
foco humano conceptual
        ↓
antecedentes más pertinentes
```

El foco no sustituye la recuperación automática.

Tampoco elimina el fallo cuando un antecedente importante requiere demasiada
intervención para aparecer.

Su resultado se limita a establecer:

```text
foco humano opcional
→ útil localmente
```

No se establece:

```text
foco humano siempre suficiente
✘

ausencia de necesidad de mejorar
la recuperación automática
✘
```

---

# 22. Resultado respecto de H-RCA-02

La hipótesis establecía que una combinación de recuperación textual y por
similitud de contenido podía presentar antecedentes manejables para apoyar una
comparación humana previa.

La prueba proporciona evidencia positiva para varios componentes:

```text
recuperación de antecedentes relevantes
→ corroborada localmente

cantidad manejable
→ corroborada en varios casos

utilidad para comparación previa
→ corroborada

reducción de búsqueda manual extensa
→ corroborada en determinados casos

utilidad del foco humano
→ corroborada localmente
```

Sin embargo, aparecieron también fallos incluidos dentro de las condiciones
adversas previstas:

```text
antecedentes relevantes
fuera del conjunto mostrado
→ observado

coincidencias superficiales
que desplazan material mejor
→ observado

ruido procedente
de unidades breves
→ observado

dependencia ocasional
de foco humano
→ observada

falsos negativos prácticos
→ observados
```

Por tanto:

```text
H-RCA-02
→ apoyo empírico parcial
```

pero:

```text
suficiencia general
→ NO establecida
```

La hipótesis no queda rechazada como inútil.

Tampoco queda corroborada en una forma suficientemente fuerte como para declarar
satisfactoria la realización actual.

---

# 23. Resultado respecto de R-EXP-RCA-01

La primera prueba ciega permite establecer localmente:

```text
utilidad de recuperación previa
→ corroborada

mejora respecto de búsqueda textual simple
en algunos casos observados
→ corroborada

recuperación de reformulaciones
→ corroborada parcialmente

recuperación de antecedentes parciales
→ corroborada

apoyo a comparación humana
→ corroborado

utilidad del foco humano
→ corroborada
```

También permite establecer:

```text
fiabilidad de priorización
→ insuficiente

top reducido como garantía
de recuperación relevante
→ insuficiente

tratamiento de unidades muy breves
→ insuficiente

unidad candidata fija
→ insuficiente

ausencia de falsos negativos prácticos
→ no establecida

fiabilidad general
→ no establecida

suficiencia de R-EXP-RCA-01
→ NO establecida
```

El resultado puede resumirse como:

> `R-EXP-RCA-01` demuestra utilidad experimental real dentro del alcance observado,
> pero la primera prueba ciega revela insuficiencias concretas que impiden considerar
> establecida su suficiencia como mecanismo de recuperación comparativa previa.

---

# 24. Fallos experimentalmente corroborados

La prueba proporciona fundamento positivo para investigar al menos los siguientes
fallos:

## F-RCA-01 — Priorización insuficiente

```text
antecedente pertinente
→ indexado
→ posición demasiado baja
→ no mostrado
```

---

## F-RCA-02 — Sobrevaloración de unidades breves

```text
encabezado o fragmento corto
→ coincidencia elevada
→ posición alta
→ desplazamiento de material sustantivo
```

---

## F-RCA-03 — Unidad candidata física insuficiente

```text
línea física
→ puede fragmentar
una aportación humana mayor
```

y:

```text
párrafo completo
→ puede contener
sólo un fragmento diferencial
```

Por tanto:

```text
unidad física fija
→ insuficiente
```

---

## F-RCA-04 — Correspondencia distribuida o reformulada insuficientemente priorizada

En algunos casos el corpus contenía material pertinente distribuido o expresado
mediante formulaciones distintas, pero el mecanismo no consiguió situarlo siempre
en posiciones suficientemente altas.

---

# 25. Modificaciones justificables

Los fallos anteriores proporcionan fundamento para investigar una revisión local
de la realización experimental.

Una versión posterior podría justificadamente estudiar:

```text
mejora de la priorización;

tratamiento específico
de encabezados y unidades muy breves;

representación de candidatas
de extensión variable;

mejora de la recuperación
de correspondencias distribuidas
o reformuladas.
```

La prueba no justifica introducir automáticamente:

```text
clasificación semántica definitiva;

detección automática de redundancia;

decisión automática de incorporación;

evaluación de veracidad;

reescritura automática;

fusión automática de aportaciones;

ontología nueva;

ni otras funciones no derivadas
de los fallos observados.
```

Cualquier modificación posterior deberá poder trazarse a una insuficiencia
efectivamente observada o a nuevo fundamento positivo independiente.

---

# 26. Alcance del resultado

La prueba establece únicamente:

```text
una versión concreta
de R-EXP-RCA-01
        +
un corpus concreto
        +
una documentación candidata concreta
        +
una actividad humana concreta
        ↓
evidencia local
```

No permite afirmar:

```text
fiabilidad general
✘

validez universal
✘

ausencia de falsos negativos
✘

suficiencia para cualquier corpus
✘

suficiencia para cualquier tipo
de documentación
✘

capacidad de interpretar
por la persona
✘

capacidad de decidir
la incorporación
✘
```

---

# 27. Relación con Product

La prueba no identifica una carencia nueva en Product.

No se deriva:

```text
nueva vertical de Product
→ no

modificación de PV-001
→ no

PV-002
→ no
```

La actividad observada continúa siendo compatible con el compromiso vigente según
el cual aquello procedente de situaciones anteriores puede incidir en las
posibilidades humanas de una situación posterior.

La presente prueba investiga una realización concreta de apoyo a esa incidencia.

---

# 28. Relación con Architecture

Los fallos observados pertenecen a la realización experimental concreta.

No se ha demostrado que requieran:

```text
nuevo componente arquitectónico;

nueva responsabilidad estructural;

nueva firma;

nuevo contrato arquitectónico;

ni modificación de Architecture.
```

Por tanto:

```text
modificación de Architecture
→ no derivada
```

---

# 29. Relación con las exigencias estructurales

La prueba tampoco establece una nueva exigencia estructural.

La necesidad humana de distinguir una aportación, relacionarla con antecedentes y
mantener correspondencias puede continuar tratándose dentro de las exigencias y
resultados estructurales previamente consolidados.

La aparición de una dificultad de realización no implica por sí sola:

```text
nueva exigencia estructural
```

Por tanto:

```text
nueva exigencia estructural
→ no derivada
```

---

# 30. Estatuto del documento candidato utilizado

Una vez realizada esta prueba:

```text
Justicia real en la américa española - César pérez guevara.md
```

deja de poder utilizarse como documentación ciega para una nueva versión ajustada
a partir de estos resultados.

Desde este momento puede utilizarse como:

```text
caso diagnóstico
+
caso de regresión
```

pero no como prueba ciega independiente de una versión que haya sido modificada
conociendo sus resultados.

---

# 31. Condición para una segunda prueba ciega

Si se construye una versión posterior, una nueva prueba deberá cumplir al menos:

```text
versión modificada
        ↓
congelación previa
        ↓
documentación nueva
no utilizada para diseñarla
        ↓
ejecución antes
de auditoría manual
        ↓
registro de resultados
        ↓
comparación humana
        ↓
auditoría posterior
de antecedentes omitidos
```

La versión no deberá modificarse durante la primera pasada de la nueva prueba.

---

# 32. Resultado metodológico adicional

La actividad mostró una diferencia importante entre:

```text
recuperar similitud
```

y:

```text
comprender por qué
una aportación sigue siendo útil
```

Una aportación puede conservar valor por:

```text
contenido nuevo;

mayor precisión;

procedencia;

evidencia;

formulación;

perspectiva;

combinación de elementos;

o utilidad para una elaboración posterior.
```

El mecanismo puede ayudar a poner materiales en relación.

No puede inferirse de ello que deba determinar automáticamente esas diferencias.

Este resultado refuerza la separación:

```text
recuperación
        ↓
configuraciones disponibles

interpretación
        ↓
fuera de la realización

decisión humana
        ↓
actuación posterior
```

---

# 33. Resultado final

La primera prueba ciega de `R-EXP-RCA-01` produce un resultado mixto y
experimentalmente informativo.

Se establece localmente que:

```text
la recuperación previa
de antecedentes
        ↓
puede mejorar de forma real
la comparación documental
```

y que:

```text
R-EXP-RCA-01
→ posee utilidad efectiva
dentro del alcance observado
```

Al mismo tiempo se establece que la versión congelada presenta insuficiencias
concretas:

```text
priorización deficiente;

sobrevaloración de unidades breves;

falsos negativos prácticos;

unidad candidata física insuficiente;

recuperación imperfecta
de determinadas correspondencias.
```

La actividad humana mostró además:

```text
recuperar antecedentes
        ≠
detectar duplicados

contenido ya presente
        ≠
aportación necesariamente inútil

menor cantidad de información
        ≠
menor utilidad expresiva

contenido semejante
        +
perspectiva distinta
        → puede conservar valor

diferencia pequeña
        → puede producir una decisión
          legítimamente no concluyente
```

Por tanto:

```text
R-EXP-RCA-01
→ útil localmente

R-EXP-RCA-01
→ insuficiente como realización estable

H-RCA-02
→ apoyo empírico parcial

suficiencia general
→ no establecida

revisión experimental localizada
→ justificable

Product
→ sin modificación derivada

Architecture
→ sin modificación derivada

nueva exigencia estructural
→ no derivada
```

---

# Estado

**Cerrado — primera prueba ciega de `R-EXP-RCA-01` completada.**

La prueba establece utilidad local de la realización experimental y documenta
insuficiencias concretas suficientes para justificar, si se continúa esta línea,
una revisión localizada del prototipo.

No se deriva de este cierre la obligación de construir inmediatamente una nueva
versión.

Cualquier actuación posterior deberá mantener la separación entre:

```text
evidencia obtenida
        ↓
fallo corroborado
        ↓
modificación justificable
```

y evitar introducir funciones no sustentadas por la observación.

---
