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
