# Derivación de prueba de suficiencia/discriminación para D-03a — Disponibilidad de procedencia pertinente

## Estado

**Prueba derivada. No ejecutada.**

Este documento deriva exclusivamente una prueba mínima de suficiencia/discriminación para evaluar:

```text
D-03a — Disponibilidad de procedencia pertinente
```

No deriva todavía:

```text
nueva capacidad de Product
P6
feature
Realization
Architecture
modelo de metadatos
autoría general
historial general
sistema de fuentes
```

---

# 1. Antecedente

La priorización reductiva de D-02, D-03, D-04 y D-05 seleccionó provisionalmente `D-03a — Disponibilidad de procedencia pertinente` como candidata más limpia para una prueba discriminante.

---

# 2. Regla de reducción

La prueba no preguntará si los metadatos son útiles, si la autoría debe almacenarse o si un historial es conveniente.

Preguntará exclusivamente:

> **¿Se pierde una posibilidad humana pertinente cuando desaparece información necesaria para comprender de dónde procede un resultado, aun cuando el resultado mismo siga disponible y pueda seguir siendo leído, utilizado y evaluado?**

---

# 3. Definición provisional de procedencia pertinente

Para esta prueba:

```text
procedencia pertinente
```

significa:

> información sobre el origen o proceso de constitución de un resultado cuya disponibilidad puede cambiar justificadamente una actuación humana respecto de ese resultado.

No equivale necesariamente a autor, fecha, fuente, URL, versión, metodología, licencia o historial completo.

---

# 4. Pregunta experimental

> **Dado un resultado R que permanece disponible, legible, reconocible y susceptible de evaluación humana, ¿existe una pérdida específica cuando la persona deja de poder conocer una información de procedencia P que resulta pertinente para decidir cómo interpretar, valorar o utilizar R?**

---

# 5. H-D03A-01 — Hipótesis positiva

> Existe al menos una situación en la que la disponibilidad de información de procedencia pertinente permite una actuación humana que deja de estar justificadamente disponible cuando esa procedencia desaparece, aun manteniéndose intactos el contenido y las capacidades ordinarias sobre él.

```text
R + P
→ posibilidad humana A

R - P
→ A deja de estar
  justificadamente disponible
```

---

# 6. H-D03A-02 — Hipótesis negativa

> La información de procedencia no constituye una diferencia funcional independiente: cualquier actuación pertinente sigue siendo posible a partir del resultado disponible y de las capacidades ya existentes.

---

# 7. Principio de discriminación

Entre las condiciones positiva y negativa deberá variar únicamente:

```text
disponibilidad de P
```

Deben mantenerse constantes:

```text
contenido de R
identidad de R
acceso a R
persistencia de R
legibilidad de R
capacidad de usar R
capacidad humana de emitir juicio
criterio aplicable
```

---

# 8. Material mínimo

```text
R
→ un único resultado

P
→ una única información de procedencia

A
→ una actuación humana posterior
```

P deberá:

```text
1. ser verdadera dentro del experimento;
2. referirse efectivamente a la constitución o procedencia de R;
3. poder afectar racionalmente una actuación humana;
4. no revelar directamente qué decisión debe tomarse;
5. no convertirse en un veredicto de la plataforma.
```

---

# 9. Estado S+

```text
R + P
```

La persona puede consultar R, conocer P, interpretar su relevancia y decidir A.

---

# 10. Estado S−

```text
R
```

permanece exactamente igual, pero P no está disponible.

---

# 11. Variable única

Sólo debe variar:

```text
P disponible
vs.
P no disponible
```

No deberán variar R, tarea, persona, pregunta, alternativas, criterio ni entorno experimental.

---

# 12. Controles

## C-D03A-01 — Contenido

```text
R(S+) = R(S−)
```

## C-D03A-02 — Acceso

En ambos estados R debe poder abrirse, leerse, consultarse y utilizarse.

## C-D03A-03 — Juicio humano

En ambos estados la persona decide.

## C-D03A-04 — Evaluación

La persona puede evaluar R en ambas condiciones.

---

# 13. PD03A-01 — Disponibilidad positiva

En S+, la persona puede acceder a P y utilizarla pertinentemente para orientar una decisión sobre R sin que P determine automáticamente esa decisión.

---

# 14. PD03A-02 — Pérdida específica

En S−, R permanece completamente disponible y utilizable, pero la persona pierde una posibilidad relevante de interpretar, valorar o decidir respecto de R debido exclusivamente a la ausencia de P.

---

# 15. PD03A-03 — Irreducibilidad

La pérdida no deberá poder explicarse suficientemente mediante persistencia, localización, reconocimiento, reutilización, relaciones ya disponibles, determinación humana o continuidad de posibilidades.

Si alguno de esos compromisos absorbe completamente la diferencia:

```text
D-03a
→ REDUCIDA
```

---

# 16. PD03A-04 — Cambio de actuación

La presencia o ausencia de P deberá cambiar justificadamente al menos una posibilidad de actuación humana.

No basta:

```text
"es interesante saberlo"
```

---

# 17. PD03A-05 — No sustitución del juicio

```text
P
→ mejora las condiciones
  para el juicio humano

P
⇏ sustituye
  el juicio humano
```

---

# 18. Resultado discriminante fuerte

La diferencia sólo se confirma si:

```text
PD03A-01 ✓
PD03A-02 ✓
PD03A-03 ✓
PD03A-04 ✓
PD03A-05 ✓
```

---

# 19. Falsos positivos

No confirma D-03a que:

```text
R desaparezca
R sea difícil de localizar
R cambie entre condiciones
P contenga la respuesta
la plataforma decida por la persona
la persona simplemente prefiera más información
```

Tampoco basta una mera sensación subjetiva de confianza.

---

# 20. Relación con P3

P3 ya demuestra soporte mínimo de evaluación.

D-03a no puede formularse como capacidad general de evaluar.

La cuestión específica es si puede faltar una condición pertinente para evaluar informadamente aunque evaluar siga siendo posible.

---

# 21. Relación con PV-005

Si la única diferencia consiste en que otro agente decide por la persona:

```text
D-03a
→ reducida a PV-005
```

---

# 22. Relación con PV-006

Si la ausencia de P sólo significa que una posibilidad pertinente previamente existente dejó de conservarse, sin diferencia adicional específicamente vinculada a procedencia:

```text
D-03a
→ podría quedar absorbida por PV-006
```

La ejecución deberá comprobarlo expresamente.

---

# 23. Posibles resultados

## R-D03A-A — Diferencia confirmada

PD03A-01..05 satisfechos y pérdida no reducida.

## R-D03A-B — Capacidad ya cubierta

La diferencia queda explicada por P3, PV-005, PV-006, relaciones existentes u otra capacidad vigente.

## R-D03A-C — Prueba no discriminante

No puede mantenerse constante el resto de variables.

## R-D03A-D — Diferencia mal formulada

No puede encontrarse una actuación A para la que P sea realmente pertinente.

---

# 24. Consecuencias negativas

Incluso un resultado positivo no deriva automáticamente:

```text
P6
nueva capacidad
Realization
Architecture
metadatos
autoría
historial
sistema de fuentes
```

---

# 25. Estado resultante

```text
D-03a
→ formulada

pregunta experimental
→ definida

hipótesis positiva
→ definida

hipótesis negativa
→ definida

S+
→ definido

S−
→ definido

controles
→ definidos

PD03A-01..05
→ definidos

prueba
→ DERIVADA

prueba
→ NO EJECUTADA

P6
→ NO DERIVADO

nueva capacidad
→ NO DERIVADA

Realization
→ NO DERIVADA
```

---

# 26. Próxima actuación

La siguiente actuación justificable es:

> **auditar el corpus actual para encontrar un candidato real `R + P + A` reutilizable para D-03a, sin introducir todavía una nueva Realization ni una feature de producto.**
