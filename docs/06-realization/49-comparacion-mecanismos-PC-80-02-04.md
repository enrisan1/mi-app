# Comparación de mecanismos para PC-80-02-04 — localización directa en la fuente

**Fecha:** 16/11/2026  
**Estado:** comparación cerrada; mecanismo mínimo seleccionado, testigo todavía no construido.  
**Propiedad:** `PC-80-02-04 — Localización directa de la detección en su fuente`.  
**Entrada empírica:** `TH-80-02-03 → B — MEJORA PARCIAL`.

---

# 1. Problema reducido

El detector literal ya permite saber que existe una diferencia y qué fragmentos
participan en ella.

La pérdida residual aparece después:

```text
detección conocida
↓
lista auxiliar separada
↓
persona debe buscar el mismo fragmento dentro del documento
↓
relocalización manual
↓
fricción antes de inspeccionar o modificar
```

Por tanto, la propiedad mínima no es “mostrar mejor la lista”.

Es:

> cuando una diferencia ya ha sido detectada, la persona puede localizar el
> fragmento correspondiente en la fuente de forma suficientemente directa, sin
> una nueva búsqueda manual.

---

# 2. Criterios de comparación

Se comparan las alternativas según:

1. reducción directa de relocalización;
2. trazabilidad D1/D2;
3. carga visual;
4. número de interacciones adicionales;
5. compatibilidad con textos largos;
6. neutralidad respecto de relevancia;
7. reversibilidad;
8. complejidad de implementación;
9. riesgo de sobreconstrucción;
10. utilidad posterior para revisión o edición.

---

# 3. Alternativa A — resaltado inline

## 3.1. Definición

La diferencia detectada se representa directamente sobre el texto fuente.

Ejemplos posibles:

- fondo resaltado;
- subrayado;
- borde;
- marca tipográfica;
- color.

La propiedad no depende del estilo concreto.

## 3.2. Fortalezas

### Relocalización

Es la alternativa más directa:

```text
detección
→ ya está situada donde ocurre
```

No exige navegación adicional.

### Trazabilidad

La procedencia queda ligada físicamente a D1/D2.

### Carga de interacción

Puede funcionar sin clic previo.

### Utilidad posterior

Es una buena base para:

- inspección;
- selección de una diferencia;
- posible edición posterior;
- navegación adicional si luego fuese necesaria.

### Neutralidad

Resaltar que algo cambió no exige decidir si ese cambio es importante.

## 3.3. Debilidades

### Carga visual

Muchas diferencias pueden saturar el documento.

### Granularidad

El detector debe poder asociar cada detección a una posición o rango fuente.

### Accesibilidad

No debe depender exclusivamente del color.

## 3.4. Riesgo principal

Confundir “resaltado” con “relevancia”. El estilo debe expresar diferencia, no
importancia.

---

# 4. Alternativa B — anclaje / navegación

## 4.1. Definición

La lista auxiliar permanece, pero cada detección dispone de una acción para
llevar directamente al fragmento fuente.

Modelo:

```text
detección 4
→ activar
→ documento se posiciona en fragmento 4
```

## 4.2. Fortalezas

### Escalabilidad

Funciona bien en documentos largos.

### Menor carga visual persistente

No es necesario marcar todas las diferencias de forma intensa.

### Encaja con lista existente

Puede reutilizar `R-80-02-M3`.

## 4.3. Debilidades

### Interacción adicional

Cada diferencia exige una acción de navegación.

### Separación persiste

La detección y la fuente siguen siendo dos lugares distintos.

### Ida y vuelta

Puede aparecer una nueva carga:

```text
lista
→ fuente
→ volver a lista
→ siguiente detección
```

## 4.4. Riesgo principal

Reducir la búsqueda pero mantener un recorrido mecánico repetitivo.

---

# 5. Alternativa C — presentación contextual

## 5.1. Definición

Cada detección se muestra acompañada de suficiente contexto inmediato de D1/D2,
sin requerir inicialmente abrir el documento completo.

Ejemplo conceptual:

```text
contexto previo
[fragmento D1]
contexto posterior

contexto previo
[fragmento D2]
contexto posterior
```

## 5.2. Fortalezas

### Juicio rápido

Puede permitir evaluar muchas diferencias sin navegar por los documentos.

### Reduce dependencia del documento completo

Especialmente útil cuando el cambio es local.

### Compatible con lista auxiliar

Puede enriquecer `R-80-02-M3` sin tocar la fuente.

## 5.3. Debilidades

### La fuente sigue separada

El contexto es una representación derivada.

### Riesgo de contexto insuficiente

Para algunos cambios, el significado depende de párrafos o secciones más amplias.

### Duplicación

Reproduce parte del contenido fuera del documento.

## 5.4. Riesgo principal

Crear un segundo espacio de lectura que vuelva a exigir reconciliar representación
y fuente cuando haya que actuar.

---

# 6. Comparación cualitativa

| Criterio | Resaltado inline | Anclaje / navegación | Presentación contextual |
| --- | --- | --- | --- |
| Elimina búsqueda manual | Muy alta | Alta | Alta para inspección |
| Une detección y fuente | Muy alta | Media-alta | Media |
| Interacciones extra | Muy bajas | Medias | Bajas |
| Escala a textos largos | Alta con control visual | Muy alta | Alta |
| Riesgo de saturación | Medio | Bajo | Medio |
| Trazabilidad | Muy alta | Muy alta | Alta |
| Neutralidad | Alta | Alta | Alta |
| Complejidad | Baja-moderada | Moderada | Moderada |
| Reversibilidad | Alta | Alta | Alta |
| Base para edición posterior | Muy alta | Alta | Media |
| Sobreconstrucción inicial | Baja | Baja-moderada | Moderada |

---

# 7. Contraargumento más fuerte contra el resaltado inline

Con muchas diferencias, marcar todos los fragmentos puede saturar el texto y
hacerlo más difícil de leer.

Ese riesgo es real.

Pero no obliga todavía a descartar el mecanismo. Puede tratarse después mediante:

- intensidad visual contenida;
- mostrar/ocultar diferencias;
- resaltar sólo la detección activa;
- navegación complementaria;
- agrupación posterior.

Ninguna de esas ampliaciones debe introducirse antes de demostrar que el inline
resuelve la relocalización observada.

---

# 8. Contraargumento más fuerte a favor de navegación

La navegación es probablemente más robusta en documentos muy largos y con muchas
diferencias.

Sin embargo, el problema observado no fue “no puedo llegar al fragmento”, sino:

> sé qué cambió, pero tengo que buscar manualmente dónde está.

El resaltado inline elimina esa búsqueda de forma más directa y con menos pasos.

Por tanto, navegación queda como complemento o escalado si el inline demuestra
problemas de saturación o longitud.

---

# 9. Resultado de la comparación

Se selecciona:

`M-80-02-04 — Marcado inline neutral de diferencias`.

Definición:

> Las diferencias detectadas quedan representadas directamente sobre sus
> fragmentos fuente en D1 y D2 mediante una marca visual no semántica, de modo que
> la persona pueda localizar inmediatamente dónde ocurre cada cambio.

“No semántica” significa:

- no expresa importancia;
- no expresa corrección;
- no expresa preferencia;
- no decide qué debe modificarse.

No se prescribe color, subrayado ni estilo concreto.

---

# 10. Alternativas conservadas

## Anclaje / navegación

Estado:

`ALT-80-02-04-B — complemento condicionado`.

Se reconsiderará si:

- el documento es muy largo;
- hay muchas diferencias;
- el inline produce saturación;
- o la persona necesita recorrer cambios en orden.

## Presentación contextual

Estado:

`ALT-80-02-04-C — apoyo condicionado`.

Se reconsiderará si:

- el juicio puede resolverse con contexto local;
- navegar al documento completo resulta innecesariamente costoso;
- o se necesita una vista de revisión compacta.

---

# 11. Testigo realizativo derivado

Se deriva:

`R-80-02-M5 — Testigo de marcado inline neutral`.

Entrada mínima:

```text
D1
D2
detections[]
```

Salida:

```text
D1
→ fragmentos detectados marcados en su posición fuente

D2
→ fragmentos detectados marcados en su posición fuente
```

Sin:

- edición;
- aceptar/rechazar;
- navegación automática;
- relevancia;
- recomendación;
- decisión;
- aplicación de cambios.

---

# 12. Condiciones mínimas de R-80-02-M5

## CM5-01 — localización en D1

Cada fragmento `sourceA` no vacío puede localizarse directamente en D1.

## CM5-02 — localización en D2

Cada fragmento `sourceB` no vacío puede localizarse directamente en D2.

## CM5-03 — integridad

El marcado no modifica el contenido textual de D1/D2.

## CM5-04 — correspondencia

La persona puede distinguir qué marcas pertenecen a la misma detección.

## CM5-05 — neutralidad

La marca sólo expresa “diferencia detectada”.

## CM5-06 — pluralidad

Varias diferencias pueden coexistir sin perder identidad individual.

## CM5-07 — inserción/eliminación

Cuando uno de los lados de una detección sea vacío, la ausencia debe poder
representarse sin inventar texto fuente.

---

# 13. Riesgo técnico ya visible

El `DetectionItem` actual sólo conserva:

```text
id
sourceA
sourceB
```

Eso puede ser insuficiente cuando el mismo fragmento aparece varias veces en un
documento.

Por tanto, el testigo no debe asumir que buscar por texto sea una solución final.

La primera implementación podrá usar casos sin ambigüedad, pero deberá
considerarse explícitamente como hipótesis pendiente la necesidad de posiciones
o rangos de origen:

```text
sourceA + posiciónA
sourceB + posiciónB
```

No se ampliará el contrato hasta que un caso lo exija.

---

# 14. Decisión

```text
PC-80-02-04
↓
comparación de mecanismos
↓
M-80-02-04
— marcado inline neutral
↓
R-80-02-M5
— testigo de marcado inline neutral

anclaje/navegación
→ complemento condicionado

presentación contextual
→ apoyo condicionado

siguiente actuación
→ derivar tests RED de R-80-02-M5
```
