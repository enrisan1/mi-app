# Regresión y congelación de R-EXP-RCA-01 v2

## Estado

**Consolidado.**

Este documento registra la comprobación técnica, la regresión sobre casos conocidos y la congelación de `R-EXP-RCA-01 v2`.

La revisión fue construida a partir del diseño mínimo derivado en:

```text
17-diseno-minimo-revision-r-exp-rca-01.md
```

y de la investigación diagnóstica consolidada en:

```text
16-diagnostico-post-prueba-r-exp-rca-01.md
```

Su función es fijar el estado exacto de la realización inmediatamente anterior a una nueva prueba con material no inspeccionado previamente.

Este documento no constituye una nueva prueba ciega.

---

# 1. Propósito

El propósito de esta fase fue comprobar que la revisión experimental:

1. realizaba el diseño previamente derivado;
2. preservaba comportamientos conocidos importantes;
3. mantenía la frontera entre recuperación e interpretación humana;
4. podía congelarse sin reajustes posteriores derivados de observar los casos de regresión.

La secuencia seguida fue:

```text
diagnóstico consolidado
↓
diseño mínimo derivado
↓
implementación
↓
comprobación estática
↓
regresión conocida
↓
tests estructurales
↓
revisión final
↓
congelación
```

Sólo después de esta secuencia podrá iniciarse una nueva prueba con material no utilizado durante el diagnóstico o la regresión.

---

# 2. Relación con la primera realización

La primera realización permanece en:

```text
experiments/r-exp-rca-01/r_exp_rca01.py
```

La revisión se implementó separadamente en:

```text
experiments/r-exp-rca-01/r_exp_rca01_v2.py
```

La v1 no fue modificada durante la implementación de la v2.

La revisión importa de la primera realización componentes ya existentes, pero no utiliza su ranking ponderado final.

La relación implementada es:

```text
r_exp_rca01.py
        ↑
        │ reutilización
        │
r_exp_rca01_v2.py
```

La primera realización conserva por tanto su estatuto histórico independiente.

---

# 3. Integridad de la v1

La primera realización dispone de la huella:

```text
ce93f6ee5de62c1ee52b0d889b5c1fc10bf9f47536746e27988f0e4d14a9f461
```

registrada en:

```text
experiments/r-exp-rca-01/r_exp_rca01.py.sha256
```

Antes de congelar la v2 se verificó nuevamente:

```text
experiments/r-exp-rca-01/r_exp_rca01.py: La suma coincide
```

Por tanto, la revisión se construyó y congeló manteniendo íntegra la realización de referencia.

---

# 4. Implementación de la v2

La nueva realización quedó implementada en:

```text
experiments/r-exp-rca-01/r_exp_rca01_v2.py
```

con una extensión aproximada de:

```text
506 líneas
```

Su responsabilidad declarada es:

> recuperar antecedentes potencialmente pertinentes mediante señales complementarias y distinguir un núcleo principal favorecido por consenso de una reserva especializada con señales secundarias.

La implementación mantiene explícitamente fuera de su responsabilidad:

- duplicación;
- novedad;
- complementariedad;
- verdad;
- incorporación.

---

# 5. Parámetros experimentales congelados

La primera realización de v2 utiliza:

```text
DEFAULT_TOP_K = 8
DEFAULT_CORE_SIZE = 5
DEFAULT_MIN_GAP = 15
DEFAULT_MAX_SPECIALISTS_PER_CHANNEL = 2
DEFAULT_RRF_K = 60
DEFAULT_ORGANIZATIONAL_MAX_WORDS = 8
```

Estos valores tienen estatuto de:

```text
parámetros experimentales
```

y no de:

```text
constantes generales
```

ni:

```text
valores óptimos
```

La congelación preserva estos valores exactamente para que la siguiente prueba pueda realizarse sobre una realización estable.

---

# 6. Candidata de extensión variable

La v2 permite dos formas de entrada:

```text
--line N
```

para una candidata de una sola línea, y:

```text
--from-line A --to-line B
```

para una candidata formada por un intervalo contiguo.

La segunda forma responde al diagnóstico de `F-RCA-03`.

La aportación no es seleccionada automáticamente.

La persona determina qué intervalo constituye la unidad que desea comparar.

La realización concatena las líneas no vacías del intervalo y las trata como una consulta única.

---

# 7. Generación multicanal

La v2 conserva separadamente las señales:

```text
WORD
CHAR
LSA
```

No utiliza como mecanismo principal el score ponderado final de la v1.

Cada canal genera su propio ranking de antecedentes sustantivos.

Después:

```text
WORD top-K
∪
CHAR top-K
∪
LSA top-K
        ↓
unión
+
deduplicación
        ↓
pool intermedio
```

Este mecanismo responde a la evidencia de que diferentes antecedentes pueden ser recuperados por canales distintos.

---

# 8. Unidades organizativas

La v2 incorpora una heurística provisional para impedir que determinadas unidades predominantemente organizativas ocupen plazas sustantivas.

La heurística reconoce inicialmente:

- encabezados Markdown;
- separadores puros;
- determinados rótulos breves;
- prefijos gráficos que deben retirarse antes de decidir si el contenido restante es sustantivo.

Las unidades continúan indexadas.

La clasificación organizativa sólo afecta a su elegibilidad para:

- top-K;
- núcleo;
- reserva.

La implementación no afirma que una unidad organizativa carezca de información.

---

# 9. Núcleo principal

Sobre el pool intermedio se aplica Reciprocal Rank Fusion.

La primera revisión utiliza:

```text
RRF-k = 60
```

y presenta:

```text
top 5
```

como:

```text
ANTECEDENTES PRINCIPALES
```

El núcleo no constituye una clasificación automática de relevancia definitiva.

Su función es indicar qué antecedentes conviene revisar primero por disponer de apoyo relativamente convergente entre canales.

---

# 10. Reserva especializada

Los candidatos no incluidos en el núcleo pueden conservarse como señales especializadas.

Para cada candidato se calcula:

```text
mejor rango
segundo mejor rango
gap = segundo mejor rango - mejor rango
```

La primera revisión utiliza:

```text
gap >= 15
```

y:

```text
máximo 2 especialistas por canal
```

La reserva se presenta separadamente como:

```text
RESERVA ESPECIALIZADA
```

con la advertencia explícita de que esas unidades no tienen el mismo estatuto que el núcleo.

La especialización indica una señal fuerte o asimétrica de un canal.

No implica pertinencia humana.

---

# 11. Comprobación sintáctica

Antes de las regresiones se ejecutó la compilación sintáctica mediante el entorno virtual del experimento.

Resultado:

```text
py_compile
→ correcto
```

No se detectaron errores sintácticos.

---

# 12. Revisión estática

Antes de ejecutar la regresión conocida se comprobó que la v2 no utilizara accidentalmente mecanismos excluidos por el diseño.

En particular, no aparecieron:

```text
v1.rank
split_units
0.50
0.25
OPTIMAL
MIN_RELEVANT
```

También se comprobó que:

```text
r_exp_rca01.py
```

permanecía sin modificaciones.

---

# 13. Regresión conocida

Los casos ya utilizados durante la prueba inicial o el diagnóstico fueron empleados exclusivamente como:

```text
regresión técnica
```

y no como:

```text
evidencia nueva
```

Los casos utilizados fueron:

```text
Welser — bloque L3–L9
L25 — juicio de residencia
L41 — definición jurídica de “blanco”
L65 — protección jurídica / decisión humana inconclusa
```

---

# 14. Regresión Welser

La candidata utilizada fue el bloque humano:

```text
L3–L9
```

La ejecución produjo:

```text
Pool intermedio: 15
Núcleo principal: 5
Reserva especializada: 5
```

Los cuatro antecedentes de control conservaron la distribución esperada:

```text
L1139 → NÚCLEO
L1155 → NÚCLEO
L1157 → RESERVA
L1162 → RESERVA
```

La distribución es especialmente relevante porque reproduce la distinción que motivó la presentación estratificada:

```text
consenso
→ núcleo

especialización útil
→ reserva
```

`L1157` permaneció accesible gracias a la señal especializada de `CHAR`.

`L1162` permaneció accesible mediante la reserva asociada a `LSA`.

No fue necesario modificar la implementación para recuperar estos controles.

---

# 15. Regresión L25

La candidata correspondía a una aportación previamente valorada por la persona como nueva.

El núcleo recuperó antecedentes relacionados con:

- juicios de residencia;
- funcionarios sometidos a residencia;
- derecho indiano;
- mecanismos jurídicos de control.

La recuperación no produjo ninguna clasificación automática de redundancia o novedad.

La reserva presentó además asociaciones más laterales.

La separación núcleo/reserva permitió conservarlas sin otorgarles el mismo estatuto.

---

# 16. Regresión L41

La candidata correspondía a una aportación previamente valorada como complementaria.

El núcleo recuperó antecedentes relacionados con:

- condición jurídica;
- derechos;
- vasallaje;
- igualdad jurídica;
- situación jurídica de indígenas y esclavos.

La reserva conservó también asociaciones laterales o lexicalmente especializadas.

La salida permitió distinguir:

```text
antecedentes principales
```

de:

```text
señales secundarias
```

sin decidir automáticamente si la candidata era complementaria.

---

# 17. Regresión L65

La candidata correspondía a un caso cuya decisión humana previa había quedado inconclusa.

El núcleo recuperó antecedentes relacionados con:

- Recopilación de 1680;
- disposiciones jurídicas sobre indígenas;
- protección;
- organización y tratamiento jurídico.

La recuperación no convirtió el caso en:

- duplicado;
- nuevo;
- complementario.

La decisión permaneció abierta.

Este resultado es compatible con la frontera funcional prevista:

```text
recuperar antecedentes
≠
resolver la interpretación
```

---

# 18. Ausencia de reajuste posterior

Después de observar los resultados de Welser, L25, L41 y L65:

```text
no se modificaron
```

los parámetros:

```text
TOP_K
CORE_SIZE
MIN_GAP
MAX_SPECIALISTS_PER_CHANNEL
RRF_K
ORGANIZATIONAL_MAX_WORDS
```

Tampoco se introdujeron nuevos canales ni nuevas reglas de ranking.

La regresión se utilizó para comprobar la realización, no para reajustarla.

---

# 19. Limitación residual observada

## LR-V2-01 — Detección organizativa incompleta

Durante la regresión de L25 apareció en el núcleo la unidad:

```text
- juicios de residencia del video 'juicio de residencia a Salvador illa' autor Álvaro bernard
```

Su función parece documental u organizativa, pero no cumple la forma de rótulo breve reconocida por la heurística provisional.

Por tanto:

> La heurística provisional puede permitir que una unidad documental no sustantiva ocupe una plaza principal cuando no presenta la forma de rótulo breve reconocida por la regla actual.

Esta observación establece:

```text
detección organizativa
→ útil localmente

detección organizativa
→ incompleta
```

`CR-V2-02` recibe por tanto una realización parcial.

---

# 20. Tratamiento de LR-V2-01

La limitación no fue corregida después de observar la regresión.

No se modificó:

```text
8 palabras
```

por otro umbral.

Tampoco se introdujeron reglas específicas como:

```text
línea iniciada por "-"
→ excluir automáticamente
```

La razón es evitar que la realización se reajuste retrospectivamente utilizando los propios casos conocidos sobre los que se está realizando la regresión.

`LR-V2-01` queda registrada como limitación de la versión congelada.

No constituye por sí sola fundamento para reabrir la implementación antes de una nueva prueba.

---

# 21. Tests estructurales

Se creó:

```text
experiments/r-exp-rca-01/test_r_exp_rca01_v2.py
```

La batería utiliza `unittest` y no introduce dependencias externas adicionales.

Los tests comprueban propiedades estructurales como:

- candidata de una línea;
- candidata multilínea;
- rechazo de línea vacía;
- necesidad de `--to-line` para intervalo;
- rechazo de intervalo invertido;
- detección de encabezado Markdown;
- detección de separador puro;
- detección de rótulo breve;
- conservación de párrafo sustantivo precedido por separador;
- no clasificación como rótulo de una oración breve con puntuación;
- separación entre núcleo y reserva;
- exclusión de unidades organizativas del pool sustantivo.

Resultado:

```text
Ran 12 tests
OK
```

Los tests no utilizan Welser, L25, L41 o L65 como objetivos algorítmicos.

Por tanto, no convierten las decisiones humanas previas en condiciones que la implementación deba aprender a reproducir.

---

# 22. Integridad de la v2

La huella SHA-256 de la realización congelada es:

```text
1df7a7745e8ed8772ff49d4a348f01e8b953312bab6c422dfff5ffae864d93b6
```

registrada en:

```text
experiments/r-exp-rca-01/r_exp_rca01_v2.py.sha256
```

La comprobación previa a la congelación produjo:

```text
experiments/r-exp-rca-01/r_exp_rca01_v2.py: La suma coincide
```

También se volvió a comprobar simultáneamente la v1:

```text
experiments/r-exp-rca-01/r_exp_rca01.py: La suma coincide
experiments/r-exp-rca-01/r_exp_rca01_v2.py: La suma coincide
```

---

# 23. Dependencias

La v2 utiliza las mismas dependencias ya congeladas para el experimento.

No fue necesario modificar:

```text
experiments/r-exp-rca-01/requirements.txt
```

La revisión reutiliza además componentes de la v1.

Por tanto, la reproducibilidad de la v2 depende de:

```text
r_exp_rca01.py
+
r_exp_rca01_v2.py
+
requirements.txt
```

con las correspondientes huellas verificadas para las realizaciones ejecutables.

---

# 24. Commit de congelación

La v2 fue congelada en:

```text
9c1866b
```

con el mensaje:

```text
experiment(realization): freeze RCA-01 v2 retrieval prototype
```

El commit incorporó:

```text
experiments/r-exp-rca-01/r_exp_rca01_v2.py
experiments/r-exp-rca-01/r_exp_rca01_v2.py.sha256
experiments/r-exp-rca-01/test_r_exp_rca01_v2.py
```

Después del commit:

```text
git status --short
```

no mostró cambios pendientes.

---

# 25. Estatuto de la regresión

La regresión realizada permite afirmar localmente que:

- la implementación realiza el diseño derivado;
- la candidata multilínea funciona;
- los canales generan candidatos independientemente;
- el núcleo y la reserva permanecen separados;
- los antecedentes especializados conocidos pueden conservarse;
- la frontera interpretativa continúa fuera del recuperador;
- los tests estructurales pasan;
- existe al menos una limitación residual conocida en la detección organizativa.

La regresión no permite afirmar:

- suficiencia general;
- optimalidad de parámetros;
- universalidad de la heurística organizativa;
- pertinencia humana de toda señal especializada;
- superioridad general de la v2;
- éxito de la v2 sobre material no conocido.

---

# 26. Regresión y prueba ciega

Debe mantenerse la distinción:

```text
REGRESIÓN CONOCIDA
→ utiliza casos ya inspeccionados
→ comprueba realización y conservación
→ no aporta evidencia ciega nueva
```

frente a:

```text
NUEVA PRUEBA
→ utiliza una aportación no inspeccionada
→ ejecuta la versión congelada
→ obtiene resultados sin reajuste previo
→ permite nueva evaluación humana
```

Los casos de regresión no deberán reutilizarse como prueba de suficiencia de la v2.

---

# 27. Condición de inmutabilidad

A partir del commit:

```text
9c1866b
```

`r_exp_rca01_v2.py` deberá considerarse congelado para la siguiente prueba.

No deberán modificarse antes de dicha prueba:

```text
algoritmo
parámetros
heurística organizativa
canales
presentación
```

Si posteriormente apareciera fundamento para una modificación, deberá tratarse como una revisión distinta y no como corrección silenciosa de esta versión.

---

# 28. Condición para la siguiente prueba

La siguiente prueba deberá utilizar una aportación cuya relación con el corpus no haya sido inspeccionada previamente durante:

- la primera prueba;
- el diagnóstico;
- la derivación del diseño;
- la implementación;
- la regresión.

La candidata deberá seleccionarse antes de observar la salida de la v2.

Una vez seleccionada:

```text
candidata nueva
↓
v2 congelada
↓
recuperación
↓
presentación núcleo/reserva
↓
evaluación humana
```

No se modificarán parámetros después de conocer la candidata y antes de evaluar la salida.

---

# 29. Criterios de observación para la nueva prueba

La siguiente prueba deberá observar al menos:

## 29.1. Recuperación

¿Aparecen antecedentes que permitan realizar una comparación práctica?

## 29.2. Manejabilidad

¿El núcleo principal constituye una cantidad revisable sin búsqueda manual extensa?

## 29.3. Reserva

¿La reserva preserva alguna señal útil que el núcleo podría ocultar?

## 29.4. Ruido

¿La reserva o el núcleo introducen suficiente ruido como para dificultar la comparación?

## 29.5. Procedencia

¿La persona puede volver desde cada antecedente a su ubicación en el corpus?

## 29.6. Incidencia humana

¿La recuperación permite realizar una decisión humana mejor informada sobre la aportación?

La decisión concreta podrá ser:

```text
R
P
N?
C
```

u otra formulación humana pertinente.

La realización no deberá producirla automáticamente.

---

# 30. Resultado consolidado

La revisión experimental `R-EXP-RCA-01 v2` ha sido:

```text
derivada
↓
implementada
↓
comprobada sintácticamente
↓
revisada estáticamente
↓
sometida a regresión conocida
↓
verificada mediante 12 tests estructurales
↓
congelada
```

La regresión preservó los controles principales del caso Welser y mantuvo comportamiento funcional compatible con las decisiones humanas previas en L25, L41 y L65.

También hizo visible una limitación residual:

```text
LR-V2-01
→ detección organizativa incompleta
```

La limitación fue registrada y no corregida retrospectivamente.

La realización congelada queda identificada por:

```text
Commit:
9c1866b

SHA-256:
1df7a7745e8ed8772ff49d4a348f01e8b953312bab6c422dfff5ffae864d93b6
```

---

# 31. Punto de cierre

Con este documento:

```text
diagnóstico
→ consolidado

diseño mínimo
→ derivado

implementación v2
→ completada

regresión conocida
→ completada

tests estructurales
→ 12/12 OK

limitación residual
→ registrada

v2
→ congelada

nueva prueba ciega
→ todavía no iniciada
```

La siguiente actuación justificable consiste en seleccionar una aportación nueva y ejecutar sobre ella la realización congelada, sin modificar previamente el recuperador.

La secuencia queda:

```text
evidencia previa
↓
diagnóstico
↓
diseño
↓
implementación
↓
regresión
↓
congelación
↓
documentación de congelación
↓
nueva aportación
↓
nueva prueba
↓
evaluación humana
```

---
