# TH-80-02-03 — Contraste humano de detección literal auxiliar

**Fecha de apertura:** 16/11/2026  
**Estado:** prerregistrado; ejecución humana pendiente.  
**Mecanismo:** `R-80-02-M4 — detección literal determinista`.  
**Superficie:** `R-80-02-M3 — detección auxiliar verificable`.  
**Pregunta:** si una salida literal determinista permite verificar diferencias reales sin obligar a releer exhaustivamente ambos documentos.

---

# 1. Hipótesis

`H-TH-80-02-03`:

> Para dos documentos relacionados con varias diferencias literales distribuidas,
> una lista trazable de detecciones reduce materialmente el trabajo de localización
> y permite a la persona verificar los cambios sin recorrer de nuevo ambos textos
> completos de forma exhaustiva.

---

# 2. Falsadores

La hipótesis queda debilitada o refutada si ocurre materialmente alguno de estos casos:

1. la persona necesita releer ambos documentos completos para confiar en la salida;
2. una diferencia real queda omitida;
3. una diferencia aparece fragmentada en piezas difíciles de interpretar;
4. el detector genera tanto ruido que obliga a reconstruir manualmente la comparación;
5. la procedencia D1/D2 resulta ambigua;
6. la persona no puede distinguir detección de relevancia/decisión.

---

# 3. Observables

`O1` — necesidad de relectura exhaustiva.  
`O2` — facilidad de localizar cada diferencia desde la salida auxiliar.  
`O3` — claridad de procedencia D1/D2.  
`O4` — fragmentación o ruido.  
`O5` — confianza suficiente para pasar al juicio humano sin repetir la búsqueda manual.  
`O6` — presencia de diferencias omitidas o falsas.  
`O7` — tiempo/carga percibida respecto del contraste manual extenso previo.

---

# 4. Materiales

Se utilizará una pareja nueva de documentos, `D1-C` y `D2-C`, con estructura paralela y diferencias literales distribuidas.

La persona no recibirá previamente:

- el número de diferencias;
- su localización;
- su relevancia;
- ni una lista de cambios esperados.

El evaluador conserva la verdad de referencia únicamente para contrastar cobertura.

---

# 5. Regla de ejecución

La persona deberá trabajar primero con la salida auxiliar del detector.

Podrá consultar D1 y D2 para verificar cada detección, pero **no deberá iniciar una relectura comparativa completa** salvo que considere que la salida no es suficiente para confiar en ella.

Si decide releer ambos textos de forma exhaustiva, deberá indicar por qué.

---

# 6. Resultado posible

```text
A — SUFICIENCIA MATERIAL
→ la salida permite verificar diferencias sin relectura exhaustiva

B — MEJORA PARCIAL
→ reduce carga, pero sobreviven ruido/omisiones/fragmentación materiales

C — INSUFICIENTE
→ sigue siendo necesario releer exhaustivamente ambos textos
```

---

# 7. Límite

Este caso sólo evalúa diferencias literales.

No evalúa:

- equivalencia semántica;
- contradicciones expresadas mediante paráfrasis;
- bloques movidos complejos;
- ni relevancia de los cambios.
