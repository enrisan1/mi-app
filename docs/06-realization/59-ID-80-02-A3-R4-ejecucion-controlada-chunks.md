# ID-80-02-A3-R4 — Ejecución controlada de cambios por chunk con CodeMirror

**Fecha:** 16/11/2026  
**Estado:** TESTIGO PREPARADO; validación técnica y humana pendientes.

---

# 1. Objetivo

Comprobar F4 sin romper la separación:

```text
F1 detectar
≠
F2 juzgar
≠
F3 decidir
≠
F4 ejecutar
≠
F5 validar
```

La navegación nunca debe modificar el documento.

La ejecución sólo debe producirse tras una acción explícita sobre el chunk activo.

---

# 2. Alcance

El testigo añade:

- aplicación explícita `A → B` del chunk activo;
- recomputación posterior del diff por `MergeView`;
- snapshot previo completo de B;
- deshacer explícito de la última aplicación.

No añade:

- aplicación automática;
- decisión de pertinencia;
- aceptación múltiple;
- persistencia;
- integración en `App.tsx`;
- edición libre del producto.

---

# 3. Operación

```text
chunk activo
↓
persona pulsa "Aplicar chunk activo A → B"
↓
se copia únicamente el rango A del chunk
↓
se sustituye únicamente el rango B correspondiente
↓
MergeView recomputa chunks
↓
resultado visible
```

La reversión del testigo:

```text
snapshot B previo
↓
"Deshacer última aplicación"
↓
restauración B
↓
recomputación
```

El snapshot completo de B es deliberadamente simple y reversible para este testigo;
no se propone todavía como arquitectura definitiva de undo.

---

# 4. Tests preregistrados

- `T-A3-R4-01`: aplica sólo el chunk elegido A sobre B.
- `T-A3-R4-02`: sin chunk válido no modifica nada.
- `T-A3-R4-03`: conserva snapshot y deshace.
- `T-A3-R4-04`: deshacer sin snapshot no modifica B.
- `T-A3-R4-05`: navegar y ejecutar permanecen separados; el cambio sólo aparece tras llamada explícita.

---

# 5. Observables humanos

- `O-R4-01`: navegar no altera B.
- `O-R4-02`: el chunk activo puede aplicarse de forma comprensible.
- `O-R4-03`: tras aplicar, desaparece o cambia únicamente la diferencia elegida.
- `O-R4-04`: el resto de diferencias permanece disponible.
- `O-R4-05`: deshacer restaura la situación previa.
- `O-R4-06`: la persona entiende qué dirección se ejecuta: A → B.
- `O-R4-07`: el sistema no decide qué cambio aplicar.

---

# 6. Falsadores

R4 debe considerarse insuficiente si:

1. navegar modifica B;
2. aplicar un chunk altera otros chunks no elegidos;
3. el resultado no se recomputa de forma verificable;
4. deshacer no restaura B;
5. la dirección A → B resulta ambigua;
6. la interfaz induce a aplicación accidental;
7. detectar una diferencia desencadena ejecución sin decisión explícita.

---

# 7. Archivos

```text
src/realizations/comparison/CodeMirrorChunkExecution.ts
src/realizations/comparison/CodeMirrorChunkExecution.test.ts
src/realizations/comparison/CodeMirrorMergeHuman.harness.ts
codemirror-merge-human.html
```

---

# 8. Estado

```text
R4
→ preparado

tests
→ pendientes

contraste humano
→ pendiente

selección definitiva de mecanismo F4
→ NO
```


---

# 9. Validación técnica

Se ejecutó:

```text
npx vitest run src/realizations/comparison/CodeMirrorChunkExecution.test.ts
```

Resultado:

```text
Test Files  1 passed (1)
Tests       5 passed (5)
```

Quedan comprobados automáticamente:

- aplicación de un único chunk elegido;
- ausencia de modificación sin chunk válido;
- conservación de snapshot previo de B;
- restauración mediante deshacer;
- separación entre navegación y ejecución.

---

# 10. Contraste humano

La secuencia ejecutada fue:

1. navegar con `Coordinado: siguiente A+B`;
2. verificar que B conserva su versión original;
3. pulsar `Aplicar chunk activo A → B`;
4. comprobar que desaparece sólo esa diferencia y el resto permanece;
5. pulsar `Deshacer última aplicación`;
6. comprobar que reaparece exactamente la diferencia aplicada y B vuelve al estado anterior.

Resultado observado:

```text
1. navegación
→ correcta

2. B antes de ejecutar
→ sin cambios

3. aplicación explícita
→ realizada

4. efecto
→ desaparece sólo la diferencia elegida
→ resto de diferencias permanece

5. deshacer
→ realizado

6. restauración
→ correcta
→ diferencia reaparece
```

---

# 11. Resultado sobre F4 y F5

## F4 — ejecución

```text
detección
≠
navegación
≠
ejecución
```

La ejecución requiere una acción humana explícita.

El testigo permite aplicar únicamente el chunk activo de A sobre B.

Resultado:

```text
F4
→ SUFICIENCIA MATERIAL observada en el alcance del testigo
```

## F5 — validación

Tras ejecutar:

- el diff se recomputa;
- la diferencia aplicada desaparece;
- las diferencias restantes permanecen visibles;
- la persona puede comprobar el nuevo estado.

Además, la reversión devuelve B al estado previo y la diferencia reaparece.

Resultado:

```text
F5
→ SUFICIENCIA MATERIAL observada en el alcance del testigo
```

---

# 12. Separación de autoridad

El flujo observado queda:

```text
F1 detectar
→ CodeMirror

F2 juzgar pertinencia
→ persona

F3 decidir aplicar
→ persona

F4 ejecutar chunk elegido
→ sistema tras acción explícita

F5 validar resultado
→ persona apoyada por recomputación del diff
```

No se observó:

- aplicación automática al navegar;
- decisión automática de pertinencia;
- ejecución de chunks no elegidos.

---

# 13. Limitaciones del testigo

La reversión actual usa un snapshot completo de B.

Eso es adecuado para un testigo reversible, pero no constituye todavía una
arquitectura definitiva de undo/redo.

Tampoco se ha evaluado todavía:

- aplicación B → A;
- aceptación/rechazo semánticamente diferenciados;
- edición libre de texto;
- persistencia;
- historial multioperación;
- conflictos entre operaciones sucesivas;
- integración en `App.tsx`.

---

# 14. Resultado consolidado de R4

```text
tests automáticos
→ GREEN 5/5

navegación sin modificación
→ comprobada

aplicación explícita de un único chunk
→ comprobada

recomputación del diff
→ comprobada

persistencia de otros cambios
→ comprobada

deshacer
→ comprobado

F4
→ SUFICIENCIA MATERIAL en este alcance

F5
→ SUFICIENCIA MATERIAL en este alcance
```

R4 demuestra que CodeMirror puede soportar la cadena:

```text
detectar
→ orientar
→ decidir
→ ejecutar cambio concreto
→ validar
→ revertir
```

sin colapsar F1…F5 en una única operación automática.

La selección arquitectónica definitiva y la política final de edición/undo
permanecen abiertas.
