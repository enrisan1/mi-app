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


---

# 8. Ejecución humana

**Fecha:** 16/11/2026

## 8.1. Observación

La persona informó que la lista auxiliar:

- permite identificar los cambios;
- reduce el trabajo de búsqueda respecto de una comparación manual completa;
- pero obliga a localizar después cada cambio uno a uno dentro de los documentos
  fuente si se quiere actuar sobre él;
- por ello, la identificación y la actuación siguen separadas espacialmente.

La persona propuso como posibilidad una representación directamente situada en
el texto, por ejemplo mediante subrayado o cambio de color.

Esa propuesta se registra como hipótesis de mecanismo, no como requisito.

## 8.2. Resultado del caso

```text
TH-80-02-03
→ B — MEJORA PARCIAL

R-80-02-M4
→ reduce materialmente la búsqueda de diferencias

pero

R-80-02-M3
→ presenta las detecciones en una lista separada
→ exige relocalizar manualmente el fragmento fuente
→ mantiene fricción antes de poder revisar o modificar
```

No se ha observado necesidad de releer exhaustivamente ambos documentos para
saber que existen diferencias.

Sí se ha observado una nueva carga:

```text
detección conocida
↓
buscar manualmente su ubicación exacta
↓
recién entonces puede inspeccionarse o actuarse
```

## 8.3. Propiedad residual

Se deriva provisionalmente:

`PC-80-02-04 — Localización directa de la detección en su fuente`.

Formulación:

> Cuando una diferencia ya ha sido detectada, la persona puede acceder de forma
> suficientemente directa al fragmento correspondiente de D1 y/o D2 sin tener
> que buscarlo manualmente dentro del documento completo.

La propiedad no prescribe:

- color;
- subrayado;
- resaltado;
- scroll automático;
- anclaje;
- vista lado a lado;
- ni edición inline.

Esas son alternativas de mecanismo todavía no comparadas.

## 8.4. Consecuencia

La siguiente cuestión ya no es mejorar el detector, sino decidir cuál es el
mecanismo mínimo que conecta:

```text
detección
→ fragmento fuente
```

con el menor coste y sin invadir juicio, decisión o edición.
