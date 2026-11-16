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


---

# 9. Ejecución humana

**Fecha:** 16/11/2026

## 9.1. Observación

La persona informó:

- los cambios se localizan directamente y sin búsqueda manual;
- las marcas facilitan la localización;
- la intensidad visual actual resulta algo excesiva;
- color e intensidad parecen depender de preferencias personales;
- la correspondencia entre D1 y D2 queda clara;
- para textos cortos, la disposición actual es suficiente cuando ambos caben en
  la misma pantalla;
- para textos largos, disponer los documentos uno encima del otro vuelve a
  dificultar la comparación;
- una disposición contigua/lateral permitiría mantener ambos textos presentes de
  forma más útil cuando crece la longitud.

## 9.2. Resultado del caso

```text
TH-80-02-04
→ A — SUFICIENCIA MATERIAL
   respecto de PC-80-02-04

marcado inline
→ elimina la relocalización manual observada en TH-80-02-03
→ mantiene clara la correspondencia D1/D2
```

Por tanto:

`PC-80-02-04 — Localización directa de la detección en su fuente`

queda satisfecha en el alcance observado.

---

# 10. Cuestión visual separada

Se registra:

`COND-80-02-VIS-01 — intensidad visual configurable`.

Fundamento:

- la marca actual cumple su función;
- la intensidad resulta subjetivamente fuerte;
- color e intensidad pueden depender de la persona.

Estado:

- no bloquea PC-80-02-04;
- no se convierte todavía en obligación estructural;
- puede tratarse después como preferencia/personalización de presentación.

No debe confundirse:

```text
ser visible
≠
usar un color fijo
≠
usar una intensidad fija
```

---

# 11. Nueva propiedad residual estructural

La observación sobre textos largos no pertenece ya a la localización de la
detección.

Se deriva provisionalmente:

`PC-80-02-05 — Copresencia lateral de fuentes extensas`.

Formulación:

> Cuando dos documentos relacionados son suficientemente extensos como para no
> caber conjuntamente en una misma pantalla mediante disposición vertical, la
> persona puede mantener ambos disponibles de forma contigua para contrastar
> fragmentos correspondientes sin alternancia vertical material.

La propiedad no prescribe todavía:

- columnas 50/50;
- ancho fijo;
- sincronización de scroll;
- scroll independiente;
- paneles redimensionables;
- ni disposición permanente.

La necesidad aparece sólo cuando la longitud hace material la pérdida de
copresencia vertical.

---

# 12. Relación con evidencia previa

Esta observación es coherente con `TH-80-02-02`, donde los textos largos
demostraron pérdida material de copresencia y necesidad de conservar posiciones
independientes.

La diferencia es:

```text
TH-80-02-02
→ demostró necesidad de continuidad de posición

TH-80-02-04
→ muestra que, una vez añadidas detecciones inline,
   la disposición vertical todavía puede degradar la comparación extensa
```

Por tanto, no se trata de volver atrás a M2, sino de combinar:

```text
marcado inline
+
copresencia espacial suficiente
```

sin presuponer todavía el mecanismo exacto.

---

# 13. Consecuencia

```text
R-80-02-M5
→ humanamente suficiente para PC-80-02-04

COND-80-02-VIS-01
→ personalización visual condicionada, no bloqueante

PC-80-02-05
→ nueva propiedad residual estructural para textos extensos

siguiente cuestión
→ comparar mecanismos mínimos para PC-80-02-05
   antes de construir otro testigo
```
