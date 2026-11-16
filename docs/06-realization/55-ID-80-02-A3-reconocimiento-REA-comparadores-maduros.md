# ID-80-02-A3 — Reconocimiento y REA de mecanismos maduros de comparación textual

**Fecha de apertura:** 16/11/2026  
**Estado:** ABIERTA — reconocimiento comparativo inicial completado; REA interna y contraste realizativo pendientes.  
**Origen:** `TH-80-02-06 → C — INSUFICIENTE` y `ID-80-02-A2 — calidad del mecanismo de detección/alineación`.

---

# 1. Motivo

La cadena experimental propia demostró valor en detección automática, marcado inline, copresencia lateral y posición independiente, pero también mostró dos límites materiales:

- pérdida de orientación global en recorridos extensos;
- errores observables del detector literal experimental, incluyendo segmentaciones espurias y diferencias no marcadas.

Continuar añadiendo navegación o sincronización sobre ese detector supondría optimizar una base todavía no suficientemente fiable.

Se abre por tanto una investigación `reuse-first / evidence-first`:

```text
necesidad fundamentada
↓
reconocimiento de soluciones maduras
↓
comparación funcional
↓
REA de mecanismos
↓
contraste contra núcleo teórico
↓
adaptación/reutilización cuando proceda
↓
construcción propia sólo para diferencias no cubiertas
```

# 2. Pregunta de investigación

¿Qué mecanismos maduros ya existentes permiten satisfacer o aproximar:

- `C-PV-80-02`;
- `PC-80-02-04 — localización directa de la detección en su fuente`;
- `PC-80-02-05 — copresencia lateral de fuentes extensas`;
- `PC-80-02-06 — referencia de posición comparativa durante el recorrido`;

preservando además la separación:

```text
F1 detectar
≠
F2 juzgar pertinencia
≠
F3 decidir
≠
F4 ejecutar
≠
F5 validar
```

# 3. Candidatos

Se comparan inicialmente:

1. CodeMirror Merge;
2. Monaco Diff Editor;
3. Meld;
4. diff2html.

La comparación distingue producto/aplicación, mecanismo reusable y patrón de interacción.

# 4. CodeMirror Merge

## 4.1. Hechos comprobados

`@codemirror/merge` proporciona una interfaz de diff/merge para CodeMirror.

Dispone de:

- `MergeView` de dos documentos;
- vista unificada alternativa;
- construcción de `Chunk[]` de cambios;
- marcado de texto insertado/eliminado;
- gutters de cambio;
- colapso de regiones sin cambios;
- controles de revert opcionales;
- comandos `goToNextChunk` y `goToPreviousChunk`;
- configuración del algoritmo de diff;
- posibilidad de sustituir el algoritmo mediante `DiffConfig.override`.

La versión publicada observada en la metadata consultada es `6.12.1`. Licencia: MIT.

El repositorio histórico de GitHub quedó archivado en abril de 2026 porque el proyecto se trasladó a su repositorio canónico propio; ese archivo no debe interpretarse por sí solo como abandono del paquete.

## 4.2. Correspondencia con nuestras propiedades

- `PC-80-02-04`: cobertura alta. Los chunks se representan directamente sobre los fragmentos fuente.
- `PC-80-02-05`: cobertura alta. `MergeView` presenta ambos documentos en comparación dividida.
- `PC-80-02-06`: cobertura alta potencial. Hay navegación anterior/siguiente por chunks y mecanismos de alineación.

## 4.3. F1…F5

| Función | Ajuste inicial |
| --- | --- |
| F1 — detección | Alto |
| F2 — juicio | Compatible: no necesita decidir relevancia |
| F3 — decisión | Compatible: controles bajo acción humana |
| F4 — ejecución | Alto potencial mediante revert/accept/reject según modalidad |
| F5 — validación | Alto: resultado visible y recomputable |

## 4.4. Preguntas REA

- calidad concreta del diff con nuestros textos naturales;
- representación de sustituciones frente al fallo observado `dos` dentro de `todos`;
- mecanismo de alineación espacial;
- comportamiento de navegación en textos largos;
- adaptación de controles de merge sin introducir decisión automática;
- coste mínimo de integración en React/Vite.

**Estatuto:** `CAND-A3-01 — candidato principal para REA e integración experimental`.

# 5. Monaco Diff Editor

## 5.1. Hechos comprobados

Monaco Editor es el editor web derivado de las fuentes de VS Code. Su Diff Editor ofrece comparación lado a lado.

La API actual expone, entre otras opciones:

- algoritmos de diff `advanced`, `legacy`, `advanced-external` y `advanced-wasm`;
- visualización de movimientos;
- ocultación de regiones no modificadas;
- vista accesible de diferencias;
- control de edición del documento original;
- límites de tiempo y tamaño para el cálculo.

Licencia: MIT. La versión estable mostrada por la página oficial consultada es `0.55.1`.

## 5.2. Correspondencia

- `PC-80-02-04`: cobertura alta probable.
- `PC-80-02-05`: cobertura alta.
- `PC-80-02-06`: cobertura media-alta potencial; la navegación concreta requiere REA adicional.

## 5.3. F1…F5

| Función | Ajuste inicial |
| --- | --- |
| F1 — detección | Alto |
| F2 — juicio | Compatible |
| F3 — decisión | Compatible; interacción concreta pendiente de REA |
| F4 — ejecución | Medio / por determinar |
| F5 — validación | Alto |

## 5.4. Riesgos / preguntas

- mayor superficie funcional de la estrictamente necesaria;
- integración ESM y workers;
- evitar depender de internals privados;
- estudiar navegación entre cambios;
- evaluar comportamiento con texto natural;
- comparar calidad de diff con CodeMirror.

**Estatuto:** `CAND-A3-02 — control fuerte y alternativa de integración`.

# 6. Meld

## 6.1. Hechos comprobados

Meld es una aplicación madura de comparación visual que permite:

- comparar dos o tres archivos lado a lado;
- resaltar diferencias;
- representar visualmente la correspondencia entre bloques;
- mostrar una vista global vertical de cambios;
- navegar anterior/siguiente entre cambios;
- editar archivos;
- reemplazar, insertar o eliminar bloques entre documentos;
- actualizar la comparación durante la edición.

Tecnología principal declarada: Python, GTK y GtkSourceView. Licencia: GPLv2 o posterior, salvo excepciones indicadas por el proyecto.

## 6.2. Correspondencia

- `PC-80-02-04`: cobertura alta.
- `PC-80-02-05`: cobertura alta.
- `PC-80-02-06`: cobertura muy alta como patrón de interacción, porque combina visión global, navegación y correspondencia.

## 6.3. F1…F5

| Función | Ajuste inicial |
| --- | --- |
| F1 — detección | Alto |
| F2 — juicio | Compatible |
| F3 — decisión | Alto: la persona elige la operación |
| F4 — ejecución | Alto: replace/insert/delete por cambio |
| F5 — validación | Alto: comparación viva y visible |

## 6.4. Límite

No es una biblioteca React/web integrable directamente. Su valor inicial es de REA de mecanismos e interacción, no de reutilización directa de código.

**Estatuto:** `CAND-A3-03 — referencia principal de interacción/REA`.

# 7. diff2html

## 7.1. Hechos comprobados

diff2html genera representaciones HTML a partir de entrada Git diff o unified diff.

Ofrece:

- vista línea a línea;
- vista lado a lado;
- números de línea origen/destino;
- líneas insertadas/eliminadas;
- matching de líneas y palabras;
- resaltado de cambios;
- scroll sincronizado opcional en la capa UI;
- cabeceras sticky.

Licencia: MIT.

## 7.2. Límite estructural

diff2html no parte primariamente de dos documentos crudos; su entrada natural es un diff ya producido. Por tanto no resuelve por sí solo el F1 completo `D1 + D2 → diferencias`.

## 7.3. Correspondencia

- `PC-80-02-04`: alta si el diff de entrada es correcto.
- `PC-80-02-05`: alta.
- `PC-80-02-06`: media; scroll sincronizado y cabeceras ayudan, pero no se ha demostrado aún un mecanismo equivalente a navegación por chunks más visión global.

## 7.4. F1…F5

| Función | Ajuste inicial |
| --- | --- |
| F1 — detección | Bajo como solución autónoma |
| F2 — juicio | Compatible |
| F3 — decisión | Bajo: principalmente visualización |
| F4 — ejecución | Bajo |
| F5 — validación | Medio-alto como representación |

**Estatuto:** `CAND-A3-04 — referencia ligera de representación`.

# 8. Matriz comparativa

| Criterio | CodeMirror Merge | Monaco Diff Editor | Meld | diff2html |
| --- | --- | --- | --- | --- |
| Dos documentos crudos como entrada | Sí | Sí | Sí | No directamente |
| Detección propia | Alta | Alta | Alta | Depende del diff |
| Marcado en fuente | Alto | Alto | Alto | Alto |
| Lado a lado | Sí | Sí | Sí | Sí |
| Navegación entre cambios | Sí | A investigar | Sí | No equivalente demostrado |
| Referencia global | Media-alta | A investigar | Muy alta | Media |
| Aplicación por cambio | Sí, según modalidad | A investigar | Sí | No |
| Neutralidad F2 | Compatible | Compatible | Compatible | Compatible |
| Web integrable | Sí | Sí | No directamente | Sí |
| Encaje React/Vite | Alto potencial | Alto potencial con mayor infraestructura | Bajo directo | Alto para visualización |
| Licencia | MIT | MIT | GPLv2+ | MIT |
| Valor principal | integración + mecanismo | control/alternativa | patrón de interacción | representación |

# 9. Lectura contra F1…F5

Las soluciones maduras tienden a separar de hecho:

```text
detección de change blocks/chunks
↓
representación
↓
acción humana sobre un cambio
↓
ejecución
↓
recomputación / inspección del resultado
```

Esta estructura es compatible inicialmente con la separación `F1…F5`.

Condición no negociable: no debe adoptarse ningún mecanismo que transforme automáticamente una diferencia detectada en una diferencia considerada pertinente ni en una modificación aplicada sin determinación suficiente.

# 10. Resultado del reconocimiento inicial

No se selecciona todavía una biblioteca para integración definitiva.

Orden de investigación:

1. **CodeMirror Merge** — prioridad de REA.
2. **Monaco Diff Editor** — control comparativo fuerte.
3. **Meld** — referencia de interacción: overview, correspondencia, navegación y ejecución por bloque.
4. **diff2html** — referencia de representación y separación entre algoritmo de diff y visualizador.

# 11. Falsadores de la prioridad CodeMirror

La prioridad deberá abandonarse o rebajarse si:

1. reproduce falsos positivos/negativos materiales en nuestros casos;
2. su navegación no resuelve la pérdida de orientación;
3. la alineación de chunks degrada textos naturales extensos;
4. obliga a introducir semántica de código incompatible con textos generales;
5. su integración mínima exige complejidad desproporcionada;
6. Monaco demuestra de forma materialmente mejor las propiedades relevantes.

# 12. Siguiente fase

La investigación no autoriza todavía instalar ninguna dependencia en producción.

Se deriva:

`ID-80-02-A3-R1 — REA comparativa de CodeMirror Merge`.

Debe reconstruir:

1. cómo genera diferencias/chunks;
2. cómo representa posiciones/rangos en A y B;
3. cómo alinea ambos paneles;
4. cómo implementa navegación anterior/siguiente;
5. cómo realiza revert/accept/reject;
6. qué APIs son públicas;
7. qué partes pueden probarse aisladamente;
8. qué ocurre con los casos concretos que hicieron fallar nuestro detector.

Después deberá repetirse el núcleo mínimo sobre Monaco como control antes de autorizar una selección realizativa.

# 13. Fuentes del reconocimiento

Fuentes oficiales o repositorios oficiales consultados el 16/11/2026:

- CodeMirror Reference Manual — https://codemirror.net/docs/ref/
- @codemirror/merge — repositorio histórico https://github.com/codemirror/merge y repositorio canónico indicado por el propio proyecto https://code.haverbeke.berlin/codemirror/merge
- Monaco Editor — https://microsoft.github.io/monaco-editor/
- Monaco Editor API — https://microsoft.github.io/monaco-editor/typedoc/
- Monaco Editor repository — https://github.com/microsoft/monaco-editor
- Meld — https://meldmerge.org/
- Meld Help — file comparison y change handling
- diff2html — https://github.com/rtfpessoa/diff2html

# 14. Estado

```text
ID-80-02-A3
→ ABIERTA

reconocimiento externo inicial
→ COMPLETADO

selección tecnológica
→ NO realizada

CAND-A3-01 CodeMirror Merge
→ prioridad de REA

CAND-A3-02 Monaco
→ control fuerte

CAND-A3-03 Meld
→ referencia de interacción

CAND-A3-04 diff2html
→ referencia de representación

siguiente
→ ID-80-02-A3-R1
   REA de CodeMirror Merge
   + contraste con nuestros casos fallidos
```