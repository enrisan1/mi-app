# ID-80-02-A3-R1 — REA de CodeMirror Merge

**Fecha:** 16/11/2026  
**Estado:** REA inicial completada; selección realizativa todavía no autorizada.  
**Candidato:** `@codemirror/merge`.  
**Base de código inspeccionada:** repositorio oficial archivado de GitHub, versión `6.12.1`.  
**Versión publicada actual observada:** `6.12.3`.  
**Regla de cautela:** los resultados ejecutados de `diff/presentableDiff` corresponden al código fuente `6.12.1`; antes de adoptar la dependencia deberá verificarse que `6.12.3` conserva el comportamiento relevante.

---

# 1. Objetivo

Reconstruir:

1. cómo calcula diferencias;
2. cómo representa cambios y chunks;
3. qué posiciones conserva en A/B;
4. cómo alinea ambos paneles;
5. cómo navega entre cambios;
6. cómo ejecuta revert/accept/reject;
7. qué APIs son públicas;
8. cómo se comporta frente a los casos que hicieron fallar nuestro detector.

---

# 2. Flujo interno reconstruido

```text
D1 + D2
↓
diff(a,b)
↓
Change[]
↓
presentableDiff(a,b)
↓
Change[] normalizados para presentación
↓
Chunk.build(...)
↓
Chunk[]
↓
decoraciones + gutters + spacers
↓
MergeView
↓
navegación / revert / validación
```

---

# 3. Cálculo de diferencias

## 3.1. diff

El algoritmo está inspirado explícitamente en diff-match-patch y usa una variante de Myers O(ND).

Antes de la búsqueda general:

- elimina prefijo idéntico;
- elimina sufijo idéntico;
- intenta localizar un texto dentro del otro;
- intenta un half-match;
- sólo después cae en la búsqueda Myers.

Puede limitar coste mediante:

- `scanLimit`;
- `timeout`.

Si se supera el límite, puede usar un algoritmo más rápido e impreciso.

Desde `DiffConfig.override` puede sustituirse completamente el algoritmo de detección.

## 3.2. precisión

El módulo conserva internamente si el último diff tuvo que degradarse.

Al construir chunks, esa información llega a:

```text
Chunk.precise
```

Por tanto:

```text
detección obtenida
≠
detección necesariamente precisa
```

y el consumidor puede distinguir ambos estados.

Esto es una mejora estructural frente a nuestro detector experimental, que no expresa degradación de confianza algorítmica.

---

# 4. presentableDiff

`presentableDiff` no sustituye el algoritmo de diff.

Su función es transformar el `Change[]` bruto para una presentación más comprensible.

Opera principalmente mediante:

- normalización;
- fusión de cambios adyacentes;
- expansión a límites de palabra cuando se cumplen sus reglas;
- realineación de ciertas inserciones/eliminaciones a límites de línea;
- eliminación de pequeños intervalos sin cambios entre diferencias cercanas.

## 4.1. propiedad importante

No siempre expande una diferencia a palabra completa.

El código establece explícitamente:

```text
Don't touch short insertions or deletions
```

para inserciones/eliminaciones de hasta tres caracteres.

Por tanto, un fragmento de palabra puede seguir apareciendo cuando representa una inserción/eliminación corta real.

---

# 5. Representación de Change

Cada `Change` conserva cuatro offsets:

```text
fromA
toA
fromB
toB
```

Por tanto, una diferencia no se representa como:

```text
"busca este texto"
```

sino como:

```text
rango exacto en A
+
rango exacto en B
```

Las inserciones se representan con:

```text
fromA == toA
```

y las eliminaciones con:

```text
fromB == toB
```

Esta propiedad elimina la ambigüedad estructural que nuestro testigo M5 dejó abierta al usar `indexOf(fragment)`.

---

# 6. Chunk

Un `Chunk` agrupa cambios pertenecientes a líneas relacionadas.

Conserva:

```text
changes[]
fromA
toA
fromB
toB
precise
```

Los `Change` internos están almacenados relativos al inicio del chunk.

Para recuperar una posición absoluta:

```text
A → chunk.fromA + change.fromA
B → chunk.fromB + change.fromB
```

## 6.1. ámbito de chunk

El chunk se expande a líneas completas alrededor de los cambios.

Cambios consecutivos cercanos pueden quedar agrupados en el mismo chunk.

Esto separa:

```text
diferencia textual fina
→ Change

unidad navegable / visual
→ Chunk
```

---

# 7. Resultado sobre el par largo Boreal

Se ejecutó de forma aislada una copia fiel del `src/diff.ts` oficial 6.12.1.

No se instaló `@codemirror/merge` en `mi-app`.

## 7.1. diff bruto

Resultado:

```text
54 Change
precise = true
```

El diff bruto es demasiado fragmentario para presentación humana directa.

Ejemplos:

```text
"d" → "cat"
"di" → "v"
"c" → "int"
...
```

## 7.2. presentableDiff

Resultado:

```text
29 Change presentables
precise = true
```

## 7.3. agrupación equivalente a Chunk

Aplicando la lógica oficial de expansión a líneas:

```text
6 chunks
```

Distribución:

```text
Chunk 1 → líneas 5–7
Chunk 2 → líneas 11–13
Chunk 3 → líneas 17–19
Chunk 4 → líneas 23–25
Chunk 5 → líneas 29–31
Chunk 6 → líneas 35–37
```

Esto resulta especialmente relevante para orientación:

```text
29 cambios finos
↓
6 unidades navegables
```

---

# 8. Casos problemáticos de nuestro detector

## 8.1. tres → cuatro

Caso:

```text
Durante las primeras cuatro semanas se incorporarán tres expedientes...
Durante las primeras cinco semanas se incorporarán cuatro expedientes...
```

`diff` bruto:

```text
"uatr" → "inc"
"" → "cua"
"es" → "o"
```

`presentableDiff`:

```text
"cuatro" → "cinco"
"tres" → "cuatro"
```

**Resultado:** el caso que nuestro detector había presentado de forma defectuosa queda convertido en sustituciones de palabras completas.

## 8.2. todos / subpalabra

Caso control:

```text
"todos"
→
"dos"
```

Resultado:

```text
diff:
"to" → ""

presentableDiff:
"to" → ""
```

**Conclusión:** CodeMirror no garantiza siempre palabra completa. Una eliminación corta real permanece como subfragmento.

Esto no es un falso positivo: `to` es exactamente el material eliminado.

Pero confirma que:

```text
presentableDiff
≠
segmentador semántico de palabras universal
```

## 8.3. todos los lunes → todos los martes

Caso:

```text
todos los lunes a primera hora
todos los martes a primera hora
```

Resultado:

```text
diff:
"lun" → "mart"

presentableDiff:
"lunes" → "martes"
```

**Resultado:** `todos` permanece correctamente sin marcar.

## 8.4. inserción

```text
La referencia debe prevalecer.
La referencia debe prevalecer y dejar constancia.
```

Resultado presentable:

```text
"" → " y dejar constancia"
```

La procedencia queda representada correctamente como inserción en B.

## 8.5. eliminación

```text
La alternativa permanece disponible para contingencias.
La alternativa permanece disponible.
```

Resultado:

```text
" para contingencias" → ""
```

## 8.6. sustitución

```text
La decisión será el viernes.
La decisión será el miércoles.
```

`diff` bruto produce tres cambios de caracteres.

`presentableDiff` produce:

```text
"viernes" → "miércoles"
```

---

# 9. Limitaciones observadas en el mismo par real

Aunque mejora claramente la presentación, aparecen cambios parciales de palabra:

```text
"do" → "cator"
```

dentro de:

```text
doce → catorce
```

y:

```text
"quince" → "sema"
```

dentro de:

```text
quincenal → semanal
```

Por tanto, queda refutada la hipótesis fuerte:

```text
presentableDiff siempre produce unidades lingüísticamente completas
```

La conclusión sostenible es más limitada:

```text
presentableDiff reduce de forma material la fragmentación del diff bruto
y suele realinear sustituciones a límites de palabra,
pero no garantiza segmentación lingüística perfecta.
```

---

# 10. Alineación de paneles

La alineación no se implementa mediante scroll sincronizado porcentual.

El flujo reconstruido es:

```text
Chunk[]
↓
identificar regiones sin cambios
↓
comparar altura vertical real en A/B
↓
insertar Spacer en el lado que queda más arriba
↓
hacer coincidir los siguientes tramos sin cambios
```

Los `Spacer` son widgets de altura calculada.

Esto significa:

- los documentos pueden tener distinta longitud;
- los cambios pueden ocupar alturas distintas;
- la alineación se recupera en tramos estables;
- no se obliga a que ambos paneles tengan el mismo `scrollTop`.

En regiones sin cambios muy grandes, el algoritmo añade puntos adicionales de alineación dentro del viewport para evitar deriva por alturas estimadas.

**Correspondencia con nuestra investigación:**

```text
M6 — independencia de paneles
+
necesidad de correspondencia
→
alineación espacial por chunks,
no scroll lock continuo
```

Este mecanismo merece contraste humano específico.

---

# 11. Navegación

Las APIs públicas son:

```text
goToNextChunk
goToPreviousChunk
```

El comando:

1. obtiene los chunks del estado;
2. determina en qué lado está el editor;
3. localiza el chunk siguiente/anterior;
4. mueve la selección al inicio del rango correspondiente;
5. ejecuta `EditorView.scrollIntoView`.

Por tanto:

```text
navegación
→ posición real
→ scroll al chunk
```

No es equivalente a nuestro M7:

```text
cambiar sólo "3 de 11"
```

## 11.1. límite relevante

El comando actúa sobre el editor sobre el que se ejecuta.

No se ha encontrado en esta REA que `goToNextChunk` desplace automáticamente ambos editores a la vez.

Por tanto, para satisfacer literalmente:

```text
activar diferencia
→ ambos paneles muestran sus rangos correspondientes
```

podría ser necesario un pequeño adaptador que use:

- `MergeView.a`;
- `MergeView.b`;
- `MergeView.chunks`;
- los rangos públicos del chunk;
- `EditorView.scrollIntoView` en ambos lados.

Esto parece posible usando API pública, pero todavía no ha sido realizado.

---

# 12. Ejecución de cambios

## 12.1. split MergeView

`revertControls` permite mostrar controles entre chunks.

Al activar un control, el código:

1. identifica el chunk;
2. selecciona source/destination;
3. toma el rango fuente mediante `chunk.from*/to*`;
4. despacha un cambio únicamente sobre el rango destino;
5. etiqueta la transacción como `userEvent: "revert"`.

Después se recomputan los chunks.

## 12.2. unifiedMergeView

La API pública expone:

```text
acceptChunk(...)
rejectChunk(...)
```

Por tanto, existe una separación clara entre:

```text
detectar chunk
≠
activar ejecución
```

La ejecución no necesita producirse automáticamente al detectar.

---

# 13. APIs públicas relevantes

El índice público exporta:

```text
Change
diff
presentableDiff
DiffConfig

getChunks
goToNextChunk
goToPreviousChunk

MergeConfig
DirectMergeConfig
MergeView

unifiedMergeView
acceptChunk
rejectChunk
getOriginalDoc
originalDocChangeEffect
updateOriginalDoc

uncollapseUnchanged
mergeViewSiblings

Chunk
```

## 13.1. APIs suficientes para nuestro alcance

A priori existen APIs públicas para:

- F1: `diff`, `presentableDiff`, `Chunk.build`;
- representación verificable: rangos A/B;
- navegación: `goToNextChunk`, `goToPreviousChunk`;
- acceso directo al modelo: `MergeView.a/b/chunks`;
- F4 condicionada: revert / accept / reject;
- actualización incremental de chunks.

No aparece necesidad inicial de depender de APIs privadas para el núcleo investigado.

---

# 14. Relación con F1…F5

## F1 — detección

**Cobertura alta.**

Además:

```text
Change
→ rango verificable A/B

Chunk
→ unidad navegable

precise
→ degradación detectable
```

## F2 — juicio

**No invadido por defecto.**

El algoritmo detecta cambios, no establece relevancia.

## F3 — decisión

**No invadido por defecto.**

Revert/accept/reject requieren una acción.

## F4 — ejecución

**Cobertura alta potencial.**

La biblioteca ya dispone de mecanismos por chunk.

## F5 — validación

**Cobertura alta.**

Tras la modificación se recomputan chunks y el estado comparativo permanece disponible.

---

# 15. Relación con PC-80-02-04…06

## PC-80-02-04 — localización directa

**Muy favorable.**

La detección conserva offsets exactos, no fragmentos ambiguos buscados posteriormente.

## PC-80-02-05 — copresencia lateral

**Muy favorable.**

`MergeView` mantiene A/B lado a lado.

## PC-80-02-06 — orientación durante recorrido

**Favorable, pero todavía no demostrado humanamente.**

Mecanismos relevantes:

- chunks como unidades mayores;
- navegación real;
- `scrollIntoView`;
- alineación mediante spacers;
- posibilidad de colapsar regiones sin cambios.

No debe confundirse disponibilidad técnica con suficiencia humana.

---

# 16. Comparación con nuestro detector experimental

| Propiedad | detector propio | CodeMirror |
| --- | --- | --- |
| rango A/B explícito | no | sí |
| posición estable | no; búsqueda posterior | sí |
| palabra presentable | limitada | mejor, no perfecta |
| chunks | no | sí |
| navegación real | no | sí |
| alineación | no | sí |
| señal de imprecisión | no | sí |
| ejecución por chunk | no | sí |
| algoritmo sustituible | no | sí mediante override |

La diferencia más importante no es sólo que su diff sea mejor.

Es que la arquitectura ya conserva la cadena:

```text
Change
→ posiciones
→ Chunk
→ representación
→ navegación
→ acción
→ recomputación
```

Nuestro testigo había intentado reconstruir esas piezas separadamente sin un modelo posicional común.

---

# 17. Resultado de R1

```text
ID-80-02-A3-R1
→ REA inicial favorable a continuar con CodeMirror

pero

adopción
→ NO autorizada todavía
```

## Hechos favorables

1. rangos A/B explícitos;
2. chunks navegables;
3. alineación sin scroll lock simple;
4. navegación real mediante posición;
5. ejecución separada de detección;
6. APIs públicas suficientes;
7. algoritmo reemplazable;
8. mejora material frente a nuestro detector en los casos principales.

## Debilidades

1. `presentableDiff` no garantiza palabra completa;
2. navegación estándar no mueve necesariamente ambos paneles;
3. la suficiencia humana de orientación todavía no está probada;
4. los tests ejecutados usan el código 6.12.1 y deben confirmarse sobre 6.12.3 antes de adopción.

---

# 18. Siguiente actuación

No se justifica volver a crear M8 desde cero.

Se deriva:

`ID-80-02-A3-R2 — contraste mínimo CodeMirror vs Monaco sobre el mismo corpus`.

Antes de instalar una biblioteca en `mi-app`, R2 deberá comparar al menos:

1. calidad de detección sobre Boreal;
2. unidades presentables;
3. estructura de rangos;
4. navegación;
5. alineación;
6. posibilidad de mover ambos paneles a un mismo cambio;
7. complejidad mínima de integración;
8. capacidad de mantener F2/F3 bajo autoridad humana.

Sólo después deberá decidirse si procede un testigo realizativo con una dependencia externa.
