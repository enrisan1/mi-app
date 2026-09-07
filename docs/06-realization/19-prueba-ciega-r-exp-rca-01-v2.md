# Prueba ciega de R-EXP-RCA-01 v2

## Estado

**En curso.**

Este documento registra la primera prueba con material no inspeccionado previamente de la realización congelada `R-EXP-RCA-01 v2`.

La realización sometida a prueba fue congelada antes de seleccionar la aportación candidata.

---

# 1. Realización sometida a prueba

Archivo:

```text
experiments/r-exp-rca-01/r_exp_rca01_v2.py
```

Commit de congelación:

```text
9c1866b
```

SHA-256:

```text
1df7a7745e8ed8772ff49d4a348f01e8b953312bab6c422dfff5ffae864d93b6
```

Parámetros congelados:

```text
TOP_K = 8
CORE_SIZE = 5
MIN_GAP = 15
MAX_SPECIALISTS_PER_CHANNEL = 2
RRF_K = 60
ORGANIZATIONAL_MAX_WORDS = 8
```

---

# 2. Condición de la prueba

La candidata fue seleccionada antes de inspeccionar mediante el recuperador su relación con el corpus.

No se modificaron previamente:

- algoritmo;
- parámetros;
- canales;
- heurística organizativa;
- presentación núcleo/reserva.

Los casos utilizados durante la prueba inicial, el diagnóstico y la regresión no se utilizarán para modificar la realización durante esta prueba.

---

# 3. Archivo candidato

Archivo:

```text
Madre Patria - Marcelo Gullo.md
```

Unidad humana seleccionada:

```text
L4–L10
```

La selección se realizó mediante una regla neutral: utilizar la primera unidad sustantiva completa del nuevo archivo.

---

# 4. Aportación candidata

La unidad seleccionada comprende:

- el cuestionamiento sobre el derecho a conquistar;
- la prioridad de la justicia frente al poder o la riqueza;
- la suspensión de nuevas conquistas ordenada por Carlos V en 1550;
- la valoración atribuida a Lewis Hanke sobre conquista y justicia.

La relación de esta aportación con el corpus no ha sido inspeccionada antes de fijarla como candidata.

---

# 5. Corpus

Corpus de comparación:

```text
Y tú de quién eres.md
```

La búsqueda manual en el corpus queda suspendida hasta obtener la salida de la realización congelada.

---

# 6. Secuencia de prueba

```text
candidata fijada
↓
integridad de v2
↓
ejecución sin reajuste
↓
conservación de salida
↓
evaluación humana
↓
evaluación experimental
```

---

# 7. Estado previo a la ejecución

```text
candidata
→ fijada

relación con el corpus
→ no inspeccionada

v2
→ congelada

salida
→ todavía no observada

evaluación humana
→ todavía no realizada
```

---
