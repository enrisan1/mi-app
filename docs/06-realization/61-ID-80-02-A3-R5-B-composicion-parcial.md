# ID-80-02-A3-R5-B — Composición parcial dentro de una correspondencia

**Fecha:** 16/11/2026  
**Estado:** TESTIGO HUMANO PREPARADO; validación pendiente.

---

# 1. Objetivo

Comprobar si la composición parcial puede resolverse mediante el mecanismo mínimo:

```text
A visible como referencia
+
B editable por decisión explícita
+
diff recomputado durante la edición
```

sin introducir todavía selección arbitraria de fragmentos ni destino libre.

---

# 2. Caso controlado

```text
A:
El plazo será de cinco días y deberá notificarse por escrito.

B:
El plazo será de ocho días.
```

Decisión humana:

```text
conservar de B:
ocho días

incorporar de A:
y deberá notificarse por escrito
```

Resultado esperado:

```text
El plazo será de ocho días y deberá notificarse por escrito.
```

Ni A → B ni B → A producen por sí solos ese resultado.

---

# 3. Mecanismo del testigo

El harness añade una segunda comparación pequeña con tres acciones:

```text
Componer parcialmente en B
Finalizar composición
Cancelar composición
```

## Inicio

- B empieza no editable.
- La persona activa explícitamente la composición.
- Se guarda snapshot completo de B.
- B pasa a ser editable.
- A permanece visible y no editable.

## Durante la composición

- la persona decide qué conservar y qué escribir/incorporar;
- el sistema no genera una tercera versión;
- CodeMirror recomputa las diferencias conforme cambia B.

## Finalizar

- B vuelve a modo no editable;
- el resultado queda visible para validación;
- no hay persistencia de producto.

## Cancelar

- B se restaura al snapshot previo;
- termina el modo de edición.

---

# 4. Observables

- `O-R5B-01`: antes de activar composición, B no se modifica.
- `O-R5B-02`: al activar, B puede editarse y A permanece intacto.
- `O-R5B-03`: puede conservarse “ocho días”.
- `O-R5B-04`: puede incorporarse “y deberá notificarse por escrito”.
- `O-R5B-05`: el resultado mixto puede alcanzarse sin sustituir todo el chunk.
- `O-R5B-06`: el diff refleja el resultado.
- `O-R5B-07`: cancelar restaura B.
- `O-R5B-08`: finalizar deja el resultado para validación.

---

# 5. Falsadores

El mecanismo es insuficiente si:

1. activar edición modifica contenido por sí mismo;
2. no puede conservarse contenido de B mientras se incorpora parte de A;
3. la persona necesita salir del contexto comparativo para componer;
4. el diff deja de ser comprensible durante/después de editar;
5. cancelar no restaura B;
6. la edición local resulta tan torpe que exige selección/destino libre para el caso controlado.

---

# 6. Límite

R5-B no prueba:

- copiar automáticamente una selección de A;
- insertar en una posición arbitraria fuera del chunk;
- edición simultánea libre de ambos documentos;
- historial multioperación;
- persistencia.

Si el caso controlado se resuelve cómodamente, no se justificará todavía R5-C.

---

# 7. Estado

```text
R5-A
→ cerrado

R5-B
→ preparado

R5-C
→ condicionado al resultado humano de R5-B
```
