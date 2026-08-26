# Investigación de atribución de `F-OU002-01`

## Estado

**Fecha:** 26/08/2026

**Origen:** `OU-RU2M1-002`

**Fenómeno observado:** `F-OU002-01`

**Estado:** investigación de atribución cerrada; causa técnica establecida; ninguna pérdida necesaria ni modificación derivada.

---

# 1. Propósito

Esta investigación determina dónde se origina la diferencia observada durante
`OU-RU2M1-002` entre la estructura multilineal de una aportación realizada
durante `S1` y el contenido posteriormente disponible en `S2(X)`.

La investigación no pretende seleccionar una solución.

En particular, no presupone:

- que `R-U2-M1` deba admitir contenido multilineal;
- que la interfaz deba utilizar un `textarea`;
- que exista una pérdida respecto de `RU2-N03`;
- que deba modificarse Product;
- ni que deba derivarse Architecture.

---

# 2. Fenómeno de partida

Durante `OU-RU2M1-002` la aportación introducida durante `S1` contenía una
separación interna entre dos fragmentos.

Después de la interrupción, el contenido disponible en `S2(X)` no presentaba
visualmente esa separación.

El fenómeno fue registrado provisionalmente como:

```text
F-OU002-01
— No conservación visual de una separación interna de X en S2(X)
```

La observación no estableció dónde se producía la diferencia.

---

# 3. Hipótesis de atribución

Se consideraron las siguientes posibilidades:

```text
H1
la estructura se pierde antes de persistir X

H2
la persistencia o restauración transforma X

H3
el dato conserva la estructura,
pero la representación en S2(X) la oculta

H4
interviene otra transformación no identificada
```

---

# 4. Evidencia sobre persistencia

`localStorageResumeRepository` realiza directamente:

```ts
localStorage.setItem(KEY, value);
```

y:

```ts
localStorage.getItem(KEY);
```

La suite existente comprueba además que un valor como:

```text
"\n  X\t "
```

se conserva sin normalización.

Por tanto:

```text
persistencia
→ capaz de conservar saltos de línea
→ no introduce por sí misma la pérdida observada
```

---

# 5. Evidencia sobre el modelo

`createFromPrevious` devuelve:

```ts
{
  previous,
  current,
}
```

sin normalizar ninguno de los dos valores.

Las pruebas existentes comprueban también la conservación exacta de los
valores recibidos.

Por tanto:

```text
modelo
→ no explica F-OU002-01
```

---

# 6. Inspección del dato de OU-RU2M1-002

Después de la trayectoria se inspeccionó el valor real persistido mediante:

```js
JSON.stringify(localStorage.getItem("ru2m1.previous"));
```

El valor almacenado ya no contenía:

```text
\n
```

ni:

```text
\n\n
```

en la posición correspondiente a la separación observada originalmente.

La inspección de:

```js
document.querySelector('[aria-label="Antecedente"]')?.textContent;
```

produjo el mismo valor.

Por tanto:

```text
valor persistido
=
valor restaurado
```

respecto de la estructura investigada.

La pérdida antecede a la persistencia.

---

# 7. Investigación del mecanismo de captura

`ResumeExperience` utiliza:

```tsx
<input
  value={currentInput}
  ...
/>
```

para capturar la aportación durante `S1`.

Se realizó la siguiente prueba instrumental:

```js
const pruebaInput = document.createElement("input");
pruebaInput.type = "text";
pruebaInput.value = "A\n\nB";
JSON.stringify(pruebaInput.value);
```

Resultado:

```text
"AB"
```

Como control discriminante se realizó:

```js
const pruebaTextarea = document.createElement("textarea");
pruebaTextarea.value = "A\n\nB";
JSON.stringify(pruebaTextarea.value);
```

Resultado:

```text
"A\n\nB"
```

La segunda prueba no selecciona `textarea` como solución.

Su única función consiste en demostrar que la desaparición de la estructura
multilineal no constituye una propiedad inevitable del valor textual ni de la
persistencia.

---

# 8. Atribución técnica

La evidencia permite establecer:

```text
aportación humana multilineal
↓
captura mediante input monolínea
↓
estructura multilineal no representable
↓
valor de currentInput ya reducido
↓
persistencia literal
↓
restauración literal
```

Por tanto:

```text
H1
✔ confirmada

H2
✘ descartada para F-OU002-01

H3
✘ descartada como causa originaria de F-OU002-01

H4
✘ no necesaria para explicar el fenómeno
```

La causa técnica de `F-OU002-01` queda localizada en el mecanismo contingente
utilizado para capturar la aportación durante `S1`.

---

# 9. Relación con `RU2-N03`

`RU2-N03` establece:

```text
El X disponible posteriormente debe corresponder
con aquello procedente de S1.
```

`R-U2-M1` utiliza conservación literal como mecanismo contingente de
correspondencia.

El invariante `I-RU2M1-04` expresa:

```text
X_S1 === X_S2
```

La validación consolidada concreta esta propiedad mediante:

```text
El X restaurado corresponde literalmente con el X persistido.
```

La evidencia de `OU-RU2M1-002` no contradice esta propiedad:

```text
X persistido
=
X restaurado
```

La diferencia investigada aparece antes, durante la constitución del valor
que puede llegar a persistirse como `X`.

Por tanto:

```text
violación de RU2-N03
✘ no establecida

violación de I-RU2M1-04
✘ no establecida
```

---

# 10. Refinamiento interpretativo del fenómeno

La denominación observacional inicial:

```text
No conservación visual de una separación interna de X en S2(X)
```

presuponía provisionalmente que la separación observada pertenecía ya a
`X_S1`.

La investigación permite una formulación más precisa:

```text
F-OU002-01
— Diferencia observable entre la estructura multilineal
  de la aportación realizada en S1
  y el X disponible en S2(X)
```

Este refinamiento no altera los hechos registrados en `OU-RU2M1-002`.

Distingue:

```text
aportación humana
≠ necesariamente
X constituido por la realización
```

---

# 11. Alcance de la atribución

La investigación demuestra una restricción contingente de la interfaz:

```text
el mecanismo actual de captura
no permite que una estructura multilineal
forme parte del X constituido mediante esa superficie
```

No demuestra que `R-U2-M1` esté obligada actualmente a admitir esa estructura.

Durante `OU-RU2M1-002` la persona:

```text
reconoció X
↓
pudo continuar
↓
produjo Y
```

y declaró que la realización parecía suficiente para el caso observado,
aunque señaló la necesidad de vigilar la representación y la posible
corrección posterior.

Por tanto, la observación no demuestra que la restricción impida la
reanudación realizada en esa trayectoria.

---

# 12. Nota sobre representación posterior

La inspección de la representación de `X` produjo:

```text
white-space: normal
```

Este mecanismo puede colapsar visualmente whitespace presente en un nodo de
texto.

No constituye la causa originaria de `F-OU002-01`, porque en la trayectoria
observada los saltos ya estaban ausentes del valor persistido.

Sin embargo, impide derivar que una eventual modificación aislada del
mecanismo de captura bastaría por sí sola para conservar visualmente una
estructura multilineal.

No se deriva ninguna modificación de esta observación técnica.

---

# 13. Resultado

```text
F-OU002-01
✔ fenómeno real observado

atribución técnica
✔ establecida

origen
→ mecanismo monolínea de captura durante S1

persistencia
✘ no causa la pérdida

modelo
✘ no causa la pérdida

restauración
✘ no causa la pérdida

representación posterior
✘ no causa originaria

RU2-N03
✔ no refutado

I-RU2M1-04
✔ no refutado

pérdida necesaria de R-U2-M1
○ no establecida

modificación de R-U2-M1
○ no derivada

Product
○ ninguna consecuencia derivada

Architecture
○ ninguna consecuencia derivada
```

---

# 14. Consecuencia

La investigación de atribución queda cerrada.

La existencia de una restricción contingente de captura no constituye por sí
misma fundamento suficiente para ampliar la realización.

En particular:

```text
<input>
→ <textarea>
```

no queda derivado como solución.

Cualquier ampliación futura de las formas que pueden constituirse como `X`
requeriría una justificación independiente basada en una necesidad
demostrada, no únicamente en la existencia de una alternativa técnica.

---

# 15. Estado de cierre

```text
F-OU002-01
✔ atribución resuelta
✔ frontera causal localizada
✔ relación con RU2-N03 examinada
✔ ninguna contradicción establecida
✔ ninguna solución seleccionada
✔ ninguna modificación derivada
```

La investigación queda cerrada dentro de su alcance.

---
