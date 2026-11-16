# ID-80-02-A3-R2 — CodeMirror Merge vs Monaco Diff Editor sobre el mismo marco

**Fecha:** 16/11/2026  
**Estado:** comparación funcional y arquitectónica completada; contraste algorítmico exacto de Monaco sobre Boreal queda como evidencia pendiente.  
**Candidatos:** `@codemirror/merge` y Monaco Diff Editor.  
**Corpus de referencia:** Boreal usado en `TH-80-02-05/06`.

---

# 1. Objetivo

Enfrentar ambos candidatos contra los mismos criterios:

1. calidad del diff;
2. representación de rangos;
3. navegación;
4. alineación;
5. capacidad de llevar ambos paneles al mismo cambio;
6. orientación global;
7. preservación de F1…F5;
8. complejidad mínima de integración.

---

# 2. Control de versiones

## CodeMirror Merge

Versión estable actual observada:

```text
6.12.3
```

La REA ejecutada en R1 usó código fuente oficial `6.12.1`.

Entre 6.12.1 y 6.12.3 debe verificarse el comportamiento antes de adopción, pero
no se ha identificado en esta investigación un cambio conceptual del modelo
`Change → Chunk → MergeView`.

## Monaco

La versión estable actual observada es:

```text
0.57.0
```

La referencia inicial a 0.55.1 queda por tanto desactualizada.

La API pública actual mantiene Diff Editor side-by-side y opciones de algoritmo
`advanced`, `legacy`, `advanced-external` y `advanced-wasm`.

---

# 3. Calidad del diff — CodeMirror

R1 sí pudo ejecutar de forma aislada el algoritmo oficial.

Sobre Boreal:

```text
diff()
→ 54 Change
→ precise = true

presentableDiff()
→ 29 Change presentables
→ 6 chunks de líneas
```

Casos favorables observados:

```text
tres → cuatro
→ palabras completas

lunes → martes
→ palabras completas

viernes → miércoles
→ palabras completas
```

Limitaciones observadas:

```text
doce → catorce
→ puede quedar como "do" → "cator"

quincenal → semanal
→ puede quedar como "quince" → "sema"

todos → dos
→ "to" → ""
```

Por tanto:

```text
presentableDiff
→ reduce materialmente fragmentación
≠ garantiza unidades lingüísticas perfectas
```

---

# 4. Calidad del diff — Monaco

## 4.1. Arquitectura reconstruida

El algoritmo `advanced` parte de un `DefaultLinesDiffComputer`.

Su flujo es:

```text
líneas originales/modificadas
↓
alineación de líneas
↓
Dynamic Programming para entradas pequeñas
o Myers para entradas grandes
↓
optimización de SequenceDiff
↓
refinamiento a nivel carácter
↓
extendDiffsToEntireWordIfAppropriate
↓
heurísticas para matches demasiado cortos
↓
DetailedLineRangeMapping[]
```

Además puede:

- ignorar o considerar whitespace;
- computar movimientos;
- extender a subpalabras;
- indicar `hitTimeout`.

## 4.2. Diferencia conceptual frente a CodeMirror

CodeMirror parte esencialmente de offsets de caracteres y después construye chunks.

Monaco hace explícitamente:

```text
alineación de líneas
↓
refinamiento interno por caracteres/palabras
```

Esto es especialmente prometedor para textos largos estructurados en párrafos.

## 4.3. Evidencia que NO se obtuvo

No se consiguió ejecutar de forma aislada el `DefaultLinesDiffComputer` actual
sobre Boreal sin introducir la infraestructura interna de VS Code/Monaco.

Por tanto, no se atribuyen cifras inventadas de:

- número de mappings;
- número de innerChanges;
- segmentación exacta de `tres/cuatro`;
- ni resultado exacto de `dos/todos`.

La evidencia disponible para Monaco en este apartado es estructural y de código,
no todavía un resultado experimental simétrico.

---

# 5. Representación de rangos

## CodeMirror

Unidad fina:

```text
Change
fromA/toA
fromB/toB
```

Unidad navegable:

```text
Chunk
fromA/toA
fromB/toB
changes[]
precise
```

Ventaja:

- offsets absolutos simples;
- API pública directa;
- fácil composición con un adaptador React.

## Monaco

Unidad de alto nivel:

```text
DetailedLineRangeMapping
original: LineRange
modified: LineRange
innerChanges: RangeMapping[]
```

Cada `RangeMapping` conserva:

```text
originalRange
modifiedRange
```

con línea y columna.

Ventaja:

- estructura explícitamente jerárquica;
- línea/párrafo como unidad de correspondencia;
- inner changes dentro de cada hunk.

### Resultado comparativo

Ambos corrigen la debilidad de nuestro detector propio:

```text
texto del fragmento
+ indexOf posterior
```

Ambos conservan posiciones originales/modificadas verificables.

---

# 6. Navegación

## CodeMirror

APIs públicas:

```text
goToNextChunk
goToPreviousChunk
```

Comportamiento reconstruido:

```text
seleccionar chunk
↓
usar rango del lado activo
↓
mover selección
↓
EditorView.scrollIntoView(...)
```

Navega realmente al cambio.

## Monaco

API pública:

```text
IDiffEditor.goToDiff("next" | "previous")
IDiffEditor.revealFirstDiff()
```

El código actual:

```text
elige DiffMapping
↓
setPosition(modified.startLine)
↓
revealRangeInCenter(modified range)
```

También navega realmente al cambio.

Monaco dispone además de:

- Diff Review / Accessible Diff Viewer;
- navegación siguiente/anterior accesible;
- overview ruler configurable.

### Resultado

Ambos superan claramente M7:

```text
"3 de 11"
≠
navegación

CodeMirror / Monaco
→ llevan a una diferencia real
```

---

# 7. Alineación

## CodeMirror

Mecanismo:

```text
Chunk[]
↓
tramos sin cambios
↓
medición de alturas
↓
Spacer en el lado necesario
↓
realineación de los siguientes tramos
```

No exige scrollTop idéntico.

## Monaco

El código reconstruido calcula `computeRangeAlignment` sobre:

```text
DiffMapping[]
+
altura real de líneas
+
view zones
+
line wrapping
```

Después genera view zones de alineación.

Tiene además sincronización de offsets de scroll entre original/modificado dentro
del Diff Editor.

### Diferencia

CodeMirror:

```text
alineación por spacers
+ modelo relativamente simple
```

Monaco:

```text
alineación más integrada con wrapping,
view zones y sincronización del widget
```

### Resultado

Ambos poseen mecanismos maduros superiores a nuestro M6 simple.

Monaco parece más sofisticado visualmente, pero también más complejo.

---

# 8. Llevar ambos paneles al mismo cambio

## CodeMirror

La navegación estándar actúa sobre el editor que recibe el comando.

Pero `MergeView` expone públicamente:

```text
a
b
chunks
```

y cada chunk contiene rangos A/B.

Por tanto, un adaptador podría:

```text
chunk n
↓
scrollIntoView(A range)
+
scrollIntoView(B range)
```

sin depender inicialmente de internals privados.

**Estado:** factibilidad alta, no implementada.

## Monaco

`goToDiff` centra por defecto el rango del editor modificado.

El widget dispone internamente de mappings original/modificado y de
`mapToOtherSide`, pero no toda esa superficie es necesariamente contrato público
estable.

Desde la API pública se obtienen:

- editor original;
- editor modificado;
- navegación del Diff Editor;
- line changes / mappings expuestos mediante el estado público correspondiente.

Un adaptador puede probablemente revelar rangos en ambos editores, pero requiere
más verificación sobre qué datos de mapping son API pública estable en 0.57.0.

**Estado:** factibilidad alta probable, evidencia pública menos simple que en CodeMirror.

---

# 9. Orientación global

## CodeMirror

Mecanismos:

- chunks;
- gutters;
- navegación;
- collapseUnchanged;
- alineación;
- selección visible.

No ofrece de fábrica una vista global tan rica como Meld/Monaco.

## Monaco

Mecanismos:

- overview ruler;
- hideUnchangedRegions;
- navegación siguiente/anterior;
- Diff Review / Accessible Diff Viewer;
- gutters/indicadores;
- posibilidad de mostrar movimientos.

### Resultado

Para el problema humano concreto:

```text
"pierdo el sentido de dónde estoy"
```

Monaco ofrece de fábrica más mecanismos de orientación global.

Eso no demuestra todavía que sean mejores humanamente para nuestro caso, pero sí
reduce la cantidad de interfaz que habría que inventar.

---

# 10. F1…F5

| Función | CodeMirror | Monaco |
| --- | --- | --- |
| F1 detección | alta; API directa `diff/presentableDiff` | alta; Diff Editor advanced |
| F2 juicio | no invadido | no invadido |
| F3 decisión | no invadido | no invadido |
| F4 ejecución | revert / accept / reject según modalidad | revert/edit operations disponibles |
| F5 validación | chunks recomputados | diff recomputado / vista persistente |

Ambos son compatibles con nuestra separación conceptual.

---

# 11. Sustituibilidad del algoritmo

## CodeMirror

Ventaja fuerte:

```text
DiffConfig.override
```

permite reemplazar el algoritmo manteniendo la infraestructura de representación.

## Monaco

La API actual permite seleccionar:

```text
advanced
legacy
advanced-external
advanced-wasm
```

Pero el mecanismo de proveedor/servicio externo es más pesado que una simple función
`override(a,b)`.

### Resultado

Para investigación y adaptación incremental:

```text
CodeMirror
→ mayor modularidad algorítmica visible
```

---

# 12. Complejidad de integración

## CodeMirror

Para nuestro alcance mínimo:

- paquetes CodeMirror;
- dos EditorView;
- MergeView;
- adaptador React de ciclo de vida.

Superficie relativamente acotada.

## Monaco

Requiere:

- Monaco Editor completo;
- configuración ESM;
- workers;
- modelos;
- Diff Editor;
- gestión de recursos.

La propia documentación de Monaco recuerda que el paquete incorpora build ESM y
workers y que el contrato versionado real es fundamentalmente `monaco.d.ts`.

### Resultado

```text
CodeMirror
→ menor coste inicial probable

Monaco
→ más infraestructura, más capacidades incorporadas
```

---

# 13. Matriz consolidada

| Criterio | CodeMirror Merge | Monaco Diff Editor |
| --- | --- | --- |
| corpus Boreal ejecutado | **sí** | **no todavía** |
| detector aislable | muy alto | bajo-medio |
| rango original/modificado | alto | alto |
| granularidad jerárquica | Change + Chunk | LineMapping + innerChanges |
| palabra presentable | buena, no perfecta | diseño explícito word-aware; resultado exacto pendiente |
| navegación real | sí | sí |
| centrar ambos lados por defecto | no | no demostrado |
| adaptador ambos lados | simple probable | posible, más API a verificar |
| alineación | spacers | view zones + scroll integration |
| overview global | medio | alto |
| regiones sin cambios | sí | sí |
| señal de degradación | `precise` | `hitTimeout` |
| algoritmo sustituible | función override | proveedores/algoritmos externos |
| integración React/Vite | menor complejidad | mayor complejidad |
| F2/F3 humanos | compatible | compatible |

---

# 14. Conclusión provisional

No existe evidencia suficiente para declarar que Monaco produce un diff
algorítmicamente mejor sobre Boreal, porque esa ejecución exacta no se ha podido
realizar en aislamiento.

Sí existe evidencia suficiente para afirmar:

## CodeMirror

Fortaleza principal:

```text
modularidad
+
rangos simples
+
algoritmo aislable
+
adaptabilidad
```

## Monaco

Fortaleza principal:

```text
orientación/navegación visual más rica
+
alineación muy integrada
+
widget diff más completo
```

---

# 15. Decisión de R2

Se mantiene:

```text
CAND-A3-01 CodeMirror
→ candidato preferente para primer testigo integrable

CAND-A3-02 Monaco
→ control fuerte
→ especialmente valioso como referencia de orientación
```

La razón NO es que CodeMirror haya demostrado un diff superior a Monaco.

La razón es:

```text
evidencia ejecutable más directa
+
menor complejidad de integración
+
modelo posicional suficiente
+
override algorítmico
+
capacidad de construir exactamente la interacción necesaria
```

---

# 16. Condición antes de adoptar

Antes de consolidar CodeMirror como dependencia del producto debe construirse un
testigo aislado que pruebe:

1. Boreal con `@codemirror/merge` estable actual;
2. navegación real siguiente/anterior;
3. alineación;
4. adaptador que centre ambos lados en el mismo chunk;
5. comportamiento de los casos `tres/cuatro`, `todos/dos`, inserción y sustitución;
6. preservación de F2/F3;
7. coste real de integración React/Vite.

Ese testigo debe permanecer aislado de `App.tsx`.

---

# 17. Estado

```text
ID-80-02-A3-R2
→ comparación funcional completada

CodeMirror
→ preferencia provisional para primer testigo

Monaco
→ no descartado
→ referencia fuerte de orientación

selección definitiva
→ NO

siguiente
→ derivar testigo aislado con CodeMirror estable actual
   sin integración en App
```
