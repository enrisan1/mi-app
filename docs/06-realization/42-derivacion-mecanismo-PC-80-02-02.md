# Derivación realizativa de PC-80-02-02 — continuidad de correspondencia comparativa

**Fecha:** 14/11/2026
**Estado:** derivación cerrada; construcción todavía no iniciada.
**Entrada empírica:** `TH-80-02-02` — pérdida material demostrada con textos extensos.
**Propiedad mínima:** `PC-80-02-02 — Continuidad de correspondencia entre fragmentos comparados`.

---

# 1. Problema reducido

La evidencia observada no exige que dos documentos completos sean visibles a la
vez.

La pérdida aparece cuando:

```text
D1 largo + D2 largo
↓
un único flujo vertical de página
↓
consultar fragmento de D1
↓
desplazarse hasta fragmento correspondiente de D2
↓
se pierde o debilita la posición anterior
↓
relocalización / memoria / ralentización / riesgo de error
```

Por tanto, la propiedad a realizar es:

> Mientras D1 y D2 constituyen una situación comparativa activa, cada documento
> conserva una posición de lectura propia que permanece disponible cuando la
> persona consulta o desplaza el otro documento.

Esto es más reducido que exigir documentos completos simultáneamente visibles,
alineación automática, sincronización, detección automática de diferencias,
edición, anotación o una geometría concreta.

---

# 2. Condiciones mínimas del mecanismo

## CM-80-02-02-01 — doble referencia persistente

D1 y D2 permanecen ambos presentes dentro de la situación comparativa.

## CM-80-02-02-02 — posición independiente

Cada documento mantiene su propia posición de lectura.

## CM-80-02-02-03 — no interferencia

Desplazar o consultar D1 no altera la posición conservada de D2, y viceversa.

## CM-80-02-02-04 — recuperación inmediata

La persona puede volver al otro documento y encontrar el fragmento en la
posición en la que lo dejó, sin relocalización desde el principio o desde una
zona distante.

## CM-80-02-02-05 — neutralidad

El mecanismo no decide qué fragmentos corresponden, qué diferencias existen ni
cuáles son relevantes.

## CM-80-02-02-06 — no modificación

Comparar no modifica automáticamente el contenido de D1 ni D2.

---

# 3. Alternativas consideradas

## A — flujo vertical único

Ya fue ejercido en `TH-80-02-02`.

**Resultado:** descartado como mecanismo suficiente para textos extensos.

## B — simple disposición lado a lado con scroll global

Puede mejorar la copresencia, pero no garantiza la propiedad mínima: un único
desplazamiento puede seguir moviendo ambos documentos y destruir una posición
útil.

**Resultado:** insuficiente como propiedad mínima. La geometría lado a lado puede
ser una manifestación útil, pero no es por sí sola el mecanismo necesario.

## C — dos superficies persistentes con desplazamiento independiente

Modelo conceptual:

```text
superficie D1
→ posición p1

superficie D2
→ posición p2

mover D1
→ cambia p1
→ p2 permanece

mover D2
→ cambia p2
→ p1 permanece
```

Ventajas:

- ataca directamente la pérdida observada;
- conserva ambos términos de la comparación;
- preserva la posición de cada texto;
- no necesita inferir correspondencias;
- no automatiza diferencias;
- no requiere modificar los documentos;
- puede realizarse con una intervención local;
- es reversible;
- permite validación humana posterior.

Coste y complejidad: bajo-moderado.

Riesgo de sobreconstrucción: bajo si se limita a lectura y posición.

**Resultado:** candidata mínima preferida.

## D — fijar o anclar manualmente un fragmento

Puede conservar una referencia, pero introduce una actuación adicional,
selección explícita y estado de anclaje; además puede volverse repetitivo.

**Resultado:** no seleccionada como primera vía. Podrá reaparecer si C demuestra
insuficiencia en espacios estrechos u otros contextos.

## E — scroll sincronizado

Presupone correspondencia estructural entre documentos, puede fallar con
inserciones o eliminaciones, elimina independencia y añade automatismo no exigido.

**Resultado:** descartado como mecanismo mínimo.

## F — detección automática de diferencias

Resuelve un problema más amplio, introduce algoritmo y representación de
diferencias y aumenta el riesgo de sobreconstrucción.

**Resultado:** descartado en esta fase.

## G — anotación integrada de diferencias

Podría sustituir la hoja externa observada en `TH-80-02-01`, pero esa es una
dependencia diferente: conservar el resultado acumulado del contraste.

**Resultado:** fuera del alcance de `PC-80-02-02`.

---

# 4. Comparación cualitativa

| Alternativa | Satisface directamente PC | Complejidad | Reversibilidad | Sobreconstrucción | Supuestos adicionales |
| --- | --- | --- | --- | --- | --- |
| A. Flujo único | No | Muy baja | Muy alta | Muy baja | Ninguno |
| B. Lado a lado + scroll global | No garantizado | Baja | Alta | Baja | Geometría concreta |
| C. Dos superficies independientes | Sí, de forma directa | Baja-moderada | Alta | Baja | Ninguno semántico |
| D. Anclaje manual | Parcial / indirecto | Moderada | Alta | Moderada | Actuación de anclaje |
| E. Scroll sincronizado | No necesariamente | Moderada-alta | Media | Moderada | Correspondencia estructural |
| F. Diff automático | Excede la propiedad | Alta | Media | Alta | Algoritmo de diferencias |
| G. Anotación integrada | No resuelve la causa | Moderada | Alta | Moderada | Modelo de anotaciones |

---

# 5. Selección

Se selecciona:

`M-80-02-02 — Superficies comparativas con posición independiente`.

Definición:

> En una situación comparativa activa entre D1 y D2, ambos documentos se
> presentan mediante superficies de lectura persistentes e independientes, de
> modo que cada una conserva su posición cuando la persona desplaza o consulta
> la otra.

La palabra “superficie” es neutral respecto de columnas, orientación horizontal
o vertical, tamaño exacto, CSS, componente, scrollbar o diseño final.

Para un testigo concreto podrá utilizarse una disposición lado a lado como
manifestación contingente si el espacio lo permite. Esa geometría no adquiere
por ello estatuto normativo.

---

# 6. Realization candidata

`R-80-02-M2 — Testigo de continuidad de posición comparativa`.

Estado realizativo mínimo:

```text
SC(D1,D2)
↓
superficie persistente D1 en p1
+
superficie persistente D2 en p2
↓
desplazar D1
→ p1 cambia
→ p2 permanece
↓
desplazar D2
→ p2 cambia
→ p1 permanece
```

No incluye diff, resaltado, alineación automática, scroll sincronizado,
anotaciones, edición, persistencia entre sesiones, integración en `App.tsx` ni
modificación de Product.

---

# 7. Tests realizativos mínimos derivados

## T-80-02-M2-01 — dualidad persistente

Con D1 y D2 largos, ambos permanecen montados dentro de la situación comparativa.

## T-80-02-M2-02 — independencia D1 → D2

Cambiar la posición de lectura de D1 no altera la posición de D2.

## T-80-02-M2-03 — independencia D2 → D1

Cambiar la posición de lectura de D2 no altera la posición de D1.

## T-80-02-M2-04 — neutralidad

La realización no introduce ni presenta diferencias calculadas automáticamente.

## T-80-02-M2-05 — no modificación

El recorrido comparativo conserva íntegros D1 y D2.

Estos tests sólo pueden demostrar el mecanismo estructural. La suficiencia
humana de `PC-80-02-02` requerirá después repetir una observación con textos
extensos.

---

# 8. Gate antes de construir

La derivación permite una prueba RED mínima únicamente si:

1. los tests se limitan a `R-80-02-M2`;
2. no se modifica `App.tsx`;
3. no se cambia el compromiso Product;
4. no se introducen diff, sincronización ni anotación;
5. la geometría concreta se trata como contingente;
6. tras GREEN se repite contraste humano con textos extensos antes de declarar
   satisfecha `PC-80-02-02`.

Con estas condiciones:

```text
PC-80-02-02
→ M-80-02-02
→ R-80-02-M2
→ tests RED mínimos
```

La siguiente actuación constructiva queda justificada.
