# TH-80-02-04 — Contraste humano de marcado inline neutral

**Fecha de apertura:** 16/11/2026  
**Estado:** prerregistrado; ejecución humana pendiente.  
**Mecanismo:** `R-80-02-M5 — marcado inline neutral`.  
**Antecedente:** `TH-80-02-03 → B — MEJORA PARCIAL`.  
**Variable aislada:** presentación separada vs. localización inline.

---

# 1. Pregunta

> ¿El marcado inline neutral permite verificar y localizar directamente cada
> diferencia sin tener que buscar manualmente su posición dentro de los documentos?

---

# 2. Hipótesis

`H-TH-80-02-04`:

> Manteniendo el mismo detector y los mismos documentos de TH-80-02-03, situar
> cada diferencia directamente sobre D1/D2 elimina materialmente la relocalización
> manual observada con la lista auxiliar separada.

---

# 3. Falsadores

La hipótesis queda debilitada o refutada si ocurre materialmente alguno de estos casos:

1. la persona sigue buscando manualmente dónde está cada cambio;
2. las marcas dificultan más la lectura de lo que ayudan;
3. no queda claro qué fragmentos de D1 y D2 pertenecen a la misma detección;
4. alguna diferencia queda marcada en una aparición incorrecta;
5. el número de marcas produce saturación visual material;
6. la persona necesita volver a una lista separada para orientarse.

---

# 4. Observables

`O1` — necesidad de relocalización manual.  
`O2` — facilidad de identificar dónde ocurre cada cambio.  
`O3` — claridad de correspondencia D1/D2.  
`O4` — carga visual / saturación.  
`O5` — facilidad de pasar desde “hay una diferencia” a “aquí está”.  
`O6` — utilidad percibida para una eventual actuación posterior.  
`O7` — aparición incorrecta en fragmentos repetidos, si ocurre.

---

# 5. Materiales

Se reutilizan exactamente D1-C y D2-C de `TH-80-02-03`.

Esto evita introducir un caso nuevo y permite comparar directamente:

```text
TH-80-02-03
→ lista separada

TH-80-02-04
→ marcado inline
```

El detector permanece siendo `R-80-02-M4`.

---

# 6. Regla de ejecución

La persona deberá observar primero los dos documentos marcados.

No deberá usar una lista externa de diferencias.

Podrá recorrer ambos documentos libremente y deberá indicar:

- si localiza inmediatamente los cambios;
- si necesita buscar algún fragmento;
- si las marcas resultan claras o molestas;
- si la correspondencia entre D1 y D2 se entiende;
- y si considera que este formato facilitaría actuar después sobre cada cambio.

---

# 7. Resultado posible

```text
A — SUFICIENCIA MATERIAL
→ desaparece la relocalización manual observada en TH-80-02-03

B — MEJORA PARCIAL
→ reduce la relocalización, pero sobreviven fricciones materiales

C — INSUFICIENTE
→ sigue siendo necesario buscar manualmente los cambios
```

---

# 8. Límite

Este contraste no evalúa todavía:

- edición;
- aceptar/rechazar cambios;
- navegación entre diferencias;
- semántica;
- relevancia;
- ni ejecución automática.
