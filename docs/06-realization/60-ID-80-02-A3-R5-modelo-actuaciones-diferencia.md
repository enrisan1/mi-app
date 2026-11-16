# ID-80-02-A3-R5 — Modelo mínimo de actuaciones sobre una diferencia textual

**Fecha:** 16/11/2026  
**Estado:** DERIVACIÓN FUNCIONAL; implementación pendiente.

---

# 1. Fundamento

R3 y R4 demostraron que un mecanismo maduro puede:

- detectar diferencias;
- mantener correspondencia entre A y B;
- orientar a la persona sobre un chunk;
- aplicar explícitamente A → B;
- recomputar el diff;
- deshacer.

Sin embargo, R4 sólo probó una operación de ejecución y no cubre todavía el
espacio completo de decisiones humanas posibles sobre una diferencia.

La siguiente actuación no debe añadir controles por conveniencia técnica. Debe
identificar primero qué operaciones son necesarias para no restringir
artificialmente C-PV-80-02.

---

# 2. Pregunta

Dado un chunk que relaciona un rango de A con un rango de B, ¿qué actuaciones
mínimas necesita la persona para decidir qué hacer con esa diferencia?

---

# 3. Casos mínimos independientes

## OPA-01 — Mantener sin cambios

La persona puede considerar pertinente la diferencia y decidir no modificar
ningún documento.

```text
A ≠ B
→ mantener A
→ mantener B
```

Detectar no obliga a resolver.

## OPA-02 — Aplicar A → B

El contenido correspondiente de A debe sustituir el rango asociado de B.

```text
rango A
→ sustituye rango B
```

R4 ya ha demostrado realizabilidad mínima de esta operación.

## OPA-03 — Aplicar B → A

Operación simétrica:

```text
rango B
→ sustituye rango A
```

No debe presumirse cubierta por haber probado A → B.

## OPA-04 — Composición parcial dentro de la correspondencia

La persona quiere conservar contenido del destino e incorporar sólo una parte
del contenido de la otra fuente.

Ejemplo:

```text
A:
El plazo será de cinco días y deberá notificarse por escrito.

B:
El plazo será de ocho días.

decisión humana:
conservar "ocho días"
+
incorporar "y deberá notificarse por escrito"

resultado B:
El plazo será de ocho días y deberá notificarse por escrito.
```

Esta operación no es equivalente a A → B ni a B → A.

## OPA-05 — Incorporación en destino libre

La persona quiere tomar contenido de una fuente e incorporarlo en una posición
elegida de la otra que no coincide necesariamente con el rango emparejado por
el detector.

```text
selección fuente
+
posición destino elegida
→ insertar/reemplazar explícitamente
```

El detector no debe decidir ese destino.

---

# 4. Independencia

Las operaciones no son sustitutas completas entre sí:

| Operación | Puede cubrirla A→B/B→A |
| --- | --- |
| mantener ambos | no |
| sustitución completa | sí |
| composición parcial | no |
| inserción en destino libre | no |

Por tanto, limitar la interfaz a A → B/B → A impondría una falsa dicotomía:
elegir una versión completa del chunk incluso cuando la decisión humana sea
conservar parte de ambas.

---

# 5. Modelo funcional mínimo candidato

```text
diferencia detectada
        ↓
persona examina A/B
        ↓
┌────────────────────────────────┐
│ mantener sin cambios           │
│ aplicar A → B                  │
│ aplicar B → A                  │
│ componer/incorporar parcialmente│
└────────────────────────────────┘
        ↓
ejecución determinada
        ↓
diff recomputado
        ↓
validación
        ↓
deshacer si procede
```

La incorporación en destino libre debe evaluarse separadamente porque amplía
la operación desde el chunk emparejado a una selección/destino arbitrarios.

---

# 6. Relación con F1…F5

```text
F1 detectar
→ sistema

F2 juzgar pertinencia
→ persona

F3 elegir actuación
→ persona

F4 ejecutar la actuación determinada
→ sistema

F5 validar resultado
→ persona apoyada por recomputación y reversión
```

La composición parcial no autoriza al sistema a generar por sí mismo una tercera
versión. La persona debe determinar qué conservar, qué incorporar y dónde.

---

# 7. Siguiente reducción

Antes de implementar R5 hay que responder dos preguntas distintas:

## Q-R5-01

¿C-PV-80-02 exige sólo resolver diferencias correspondientes o también permite
trabajo editorial sobre contenido relacionado?

## Q-R5-02

Si exige composición parcial, ¿el mecanismo mínimo suficiente es:

A. edición directa del documento destino alrededor del chunk;

B. selección de fragmento fuente + inserción explícita en destino;

C. ambas?

No debe elegirse una variante por comodidad de CodeMirror.

---

# 8. Orden de validación propuesto

La secuencia mínima es:

```text
R5-A
→ probar B → A

R5-B
→ probar composición parcial dentro de un chunk

R5-C
→ sólo si sigue siendo necesario:
   probar incorporación en destino libre
```

Así se conserva falsación progresiva: no se construye selección/destino libre
si la edición local alrededor del chunk ya satisface la necesidad.

---

# 9. Estado resultante

```text
R4
→ demuestra ejecución controlada A → B

aplicación completa
→ NO

B → A
→ pendiente

composición parcial
→ pendiente

incorporación en destino libre
→ pendiente de necesidad

siguiente actuación
→ R5-A: testigo simétrico B → A
```


---

# 10. Resultado R5-A — simetría B → A

**Fecha:** 16/11/2026

## 10.1. Validación automática

Se ejecutó:

```text
npx vitest run src/realizations/comparison/CodeMirrorChunkExecution.test.ts
```

Resultado:

```text
Test Files  1 passed (1)
Tests       9 passed (9)
```

Los cuatro tests nuevos de R5-A comprobaron:

- aplicación exclusiva del chunk elegido de B sobre A;
- ausencia de modificación sin chunk válido;
- snapshot y restauración de A;
- preservación intacta de B durante B → A.

## 10.2. Contraste humano

Secuencia observada:

1. navegación a un chunk;
2. A y B permanecen sin cambios;
3. acción explícita `Aplicar chunk activo B → A`;
4. desaparece sólo esa diferencia;
5. A adopta el contenido correspondiente de B;
6. las demás diferencias permanecen;
7. `Deshacer última aplicación` restaura A;
8. reaparece exactamente la diferencia aplicada.

Resultado:

```text
B → A
→ SUFICIENCIA MATERIAL observada en el alcance del testigo
```

La simetría básica queda por tanto demostrada:

```text
A → B
→ comprobado

B → A
→ comprobado

navegar
→ no modifica

deshacer
→ funciona en ambas direcciones
```

---

# 11. Derivación de R5-B

La simetría no resuelve todavía el caso en que la persona no quiere sustituir
todo un rango por el otro, sino conservar parte del destino e incorporar sólo
una parte de la fuente.

R5-B queda definido como:

```text
composición parcial dentro de una correspondencia detectada
```

Pregunta:

> ¿Puede la persona construir deliberadamente un resultado mixto a partir de A
> y B dentro del contexto del chunk, sin que el sistema elija por ella qué
> conservar ni qué incorporar?

Ejemplo canónico:

```text
A:
El plazo será de cinco días y deberá notificarse por escrito.

B:
El plazo será de ocho días.

decisión:
conservar "ocho días"
+
incorporar "y deberá notificarse por escrito"

resultado:
El plazo será de ocho días y deberá notificarse por escrito.
```

R5-B no autoriza todavía:

- selección arbitraria fuera del chunk;
- destino libre en cualquier posición del documento;
- generación automática de una tercera versión;
- integración definitiva de edición.

La siguiente actuación debe buscar el mecanismo mínimo suficiente para esta
composición local.
