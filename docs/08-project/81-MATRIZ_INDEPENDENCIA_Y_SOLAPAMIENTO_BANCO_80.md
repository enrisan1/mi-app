# Matriz de independencia y solapamiento del banco 80

**Estado:** CERRADA EN SU FUNCIÓN REDUCTIVA — candidatas, mecanismos, agregaciones y dependencias discriminados; prioridad Product todavía no decidida.

**Fecha:** 14/11/2026.

# 1. Propósito

Esta actuación reduce las entradas de `80-BANCO_DE_SITUACIONES_HUMANAS_Y_NECESIDADES_POST_KGV.md` para determinar:

- qué entradas contienen una diferencia humana suficientemente independiente para poder pasar a evaluación Product;
- cuáles siguen siendo candidatas pero requieren evidencia o discriminación adicional;
- cuáles describen sobre todo mecanismos subordinados;
- cuáles son agregaciones demasiado amplias para ser seleccionables;
- y cuáles funcionan mejor como condiciones transversales o dependencias de otras candidatas.

La matriz **no establece prioridad** y **no selecciona compromisos Product**.

# 2. Regla de clasificación

Se utilizan cinco estatutos no ordinales.

## CI — candidata independiente

Existe una situación humana y una diferencia suficientemente distinguible de las demás como para poder formular una ficha propia de candidata.

No significa que su valor esté ya justificado ni que Product deba seleccionarla.

## CC — candidata condicionada

Existe un posible núcleo humano independiente, pero falta una comprobación concreta de independencia, materialidad, novedad respecto de cierres anteriores o evidencia de uso.

## MS — mecanismo subordinado

La entrada describe principalmente una forma posible de interacción o implementación. No debe competir directamente como situación Product mientras no sobreviva una necesidad humana propia.

## FA — familia/agregación demasiado amplia

La entrada agrupa varias situaciones, operaciones o valores que no pueden seleccionarse legítimamente como una sola obligación sin reducción adicional.

## TD — transversal/dependencia

La entrada puede aportar valor en varias candidatas, pero su mejor estatuto actual no es el de objetivo Product autónomo, sino el de propiedad, condición o capacidad potencialmente necesaria para otras situaciones.

# 3. Matriz principal

| ID | Núcleo humano reconstruido | Solapamientos principales | Independencia actual | Amplitud | Evidencia pendiente | Disposición |
| --- | --- | --- | --- | --- | --- | --- |
| **SH-80-01** | Conservar una idea en el momento en que aparece sin romper innecesariamente la actividad en curso. | SH-80-03, SH-80-04, SH-80-06, IA-80-D | **Alta**: la fricción de captura existe aunque después no haya clasificación, IA ni cola de revisión. | Acotable. | Contrastar la magnitud de la interrupción y qué contexto mínimo debe conservarse. | **CI** |
| **SH-80-02** | Comparar simultáneamente varios documentos/versiones para reconocer diferencias y decidir correcciones sin reconstrucción mental secuencial excesiva. | SH-80-07, SH-80-12, SH-80-13, IA-80-C | **Alta**: comparar múltiples artefactos es una actividad distinta de navegar, revertir o soportar formatos. | Acotable si se limita el primer caso. | Precisar tipo de comparación y situación mínima real. | **CI** |
| **SH-80-03** | Clasificar una nota en el momento en que se reconoce su destino pertinente, evitando una tarea administrativa separada posterior. | SH-80-01, SH-80-04, SH-80-12, IA-80-D | **Media**: puede ser una diferencia propia, pero también una etapa de captura/organización ya absorbida históricamente. | Acotable. | Demostrar pérdida independiente respecto de 4.2/IOR/59 y de SH-80-01. | **CC** |
| **SH-80-04** | Reducir carga administrativa para preservar atención creativa mediante delegación a IA. | SH-80-01, 03, 09, 10; IA-80-C/D | **No como unidad única**: contiene muchas tareas con riesgos y valores distintos. | **Muy amplia**. | Descomponer por clase de tarea, autoridad y reversibilidad. | **FA** |
| **SH-80-05** | Separar identidad de cuenta de identidad autoral, permitiendo varias firmas/seudónimos según obra o contexto. | SH-80-13, IA-80-C, IA-80-E | **Alta**: la diferencia persiste aunque no exista colaboración ni portabilidad. | Acotable. | Precisar alcance de autoría, privacidad y cambio de alias. | **CI** |
| **SH-80-06** | Acceso rápido y contextual a operaciones con baja carga visual. | SH-80-01, SH-80-08, SH-80-11 | **Baja en su formulación actual**: la “rosa de los vientos” es una solución. | Acotable como interacción, no como Product. | Demostrar que el acceso actual a acciones produce una pérdida humana independiente y comparar alternativas. | **MS** |
| **SH-80-07** | Revertir/rehacer actuaciones sin mezclar indebidamente historiales de actividades diferentes. | SH-80-02, SH-80-09, SH-80-10, IA-80-C | **Posible**, pero todavía conceptual: “actividad” y consistencia causal no están delimitadas. | Media. | Caso humano donde undo global produzca pérdida real; unidad mínima de reversión. | **CC / TD** |
| **SH-80-08** | Reducir ruido visual y adaptar la presencia/posición de la interfaz a la actividad de la persona. | SH-80-06, SH-80-11 | **No demostrada como Product independiente**: mezcla necesidad de baja carga con decisiones de apariencia y posicionamiento. | Media/amplia. | Evidencia de que la rigidez/ruido actual limita una actividad; separar estética de función. | **CC / MS** |
| **SH-80-09** | Recibir asistencia de IA sin mezclar ni atribuir automáticamente sus aportaciones al contenido final de la obra. | SH-80-04, SH-80-10, IA-80-C | **Alta** si se elimina el requisito literal de “archivo espejo”. La separación obra/apoyo es propia. | Acotable. | Delimitar frontera, promoción manual y procedencia; contrastar con PV-005/PV-006. | **CI** |
| **SH-80-10** | Disponer de trabajo auxiliar autónomo de agentes dentro de objetivos y límites humanos. | SH-80-04, SH-80-09, SH-80-13, IA-80-C/E | **No como unidad actual**: agrega autonomía, persistencia, creación, búsqueda, modificación y gobierno. | **Muy amplia**. | Identificar una primera situación humana concreta donde la autonomía auxiliar produzca valor independiente. | **FA** |
| **SH-80-11** | Interacción manos libres / accesible mediante mirada. | SH-80-06, SH-80-08 | **No demostrada como necesidad general propia**; es una modalidad de entrada. | Acotable técnicamente. | Caso humano concreto de accesibilidad o productividad y análisis de si corresponde a integración con SO/hardware. | **MS / CC** |
| **SH-80-12** | Mantener navegabilidad y recuperabilidad cognitiva dentro de documentos largos aunque todo el contenido siga físicamente presente. | SH-80-02, SH-80-03, IA-80-A | **Media-alta**: el problema intra-documento es distinto de organización entre documentos, pero debe falsarse absorción por 4.2/59. | Acotable. | Caso real mínimo donde encabezados/búsqueda actuales sean insuficientes. | **CC con fuerte potencial CI** |
| **SH-80-13** | Trabajar de forma continua con materiales de formatos heterogéneos y, cuando corresponda, colaborativamente. | SH-80-02, SH-80-05, SH-80-10, IA-80-E | **No como formulación universal**: mezcla interoperabilidad, edición nativa, archivo, difusión y colaboración. | **Muy amplia**. | Dividir “continuidad multiformato” de “colaboración” y elegir formatos/situaciones concretos. | **FA** |
| **IA-80-A** | Reencontrar información pertinente que la persona no recuerda buscar. | SH-80-03, SH-80-12, IA-80-B | **Posible y distinguible** de búsqueda explícita, pero es propuesta del asistente sin validación humana propia. | Acotable. | Validación de que esta pérdida ocurre y criterios para no imponer sugerencias. | **CC** |
| **IA-80-B** | Retomar una actividad reconstruyendo intención, materiales, estado y decisión pendiente, no sólo documentos aislados. | SH-80-12, SH-80-01, H-POST/PV-001/PV-006 | **Posible**: amplía continuidad desde artefactos a contexto de actividad, pero puede solaparse con cierres H-POST. | Acotable. | Demostrar diferencia no absorbida por continuidad contextual ya cerrada. | **CC** |
| **IA-80-C** | Conocer procedencia y autor de transformaciones significativas y poder relacionarlas con reversión/control. | SH-80-02, 05, 07, 09, 10 | **Baja como candidata autónoma actual**: defendibilidad/procedencia ya fueron parcialmente absorbidas; puede ser necesaria transversalmente. | Transversal. | Sólo reabrir si una candidata concreta demuestra que sin esa procedencia pierde valor o seguridad. | **TD** |
| **IA-80-D** | Revisar y decidir qué hacer con material capturado en un inbox creciente. | SH-80-01, SH-80-03, SH-80-04 | **Dependiente**: el problema aparece sólo si captura rápida genera acumulación relevante. | Acotable. | Evidencia de acumulación y pérdida posterior; no anticiparla. | **TD / CC condicionada a SH-80-01** |
| **IA-80-E** | Trasladar una obra entre herramientas/personas sin perder contexto pertinente. | SH-80-05, SH-80-13, IA-80-C, H-POST/PV-006 | **Posible**, pero parte de continuidad/portabilidad histórica y propuesta del asistente. | Media. | Situación real de traslado y pérdida concreta no absorbida por PV-006/H-POST. | **CC** |

# 4. Solapamientos estructurales relevantes

## 4.1 Captura, clasificación y revisión

```text
SH-80-01
→ núcleo: capturar sin romper actividad

SH-80-03
→ posible núcleo distinto:
   decidir destino/clasificación cuando
   el contexto todavía está presente

IA-80-D
→ consecuencia posterior:
   revisar acumulación
```

No deben fusionarse automáticamente.

La relación más plausible es:

```text
captura
↓
eventual clasificación
↓
eventual revisión de inbox
```

Pero cada eslabón necesita demostrar su pérdida propia.

**Conclusión:** SH-80-01 permanece independiente; SH-80-03 queda condicionada; IA-80-D queda subordinada/condicional.

## 4.2 Interfaz y acceso a acciones

```text
SH-80-06
rosa/command surface
+
SH-80-08
minimalismo espacial
+
SH-80-11
mirada
```

Las tres comparten una preocupación de interacción de baja fricción, pero sólo SH-80-08 contiene parcialmente una necesidad humana general; SH-80-06 y SH-80-11 describen mecanismos concretos.

**Conclusión:** no crear una candidata “interfaz futura” agregada. Primero demostrar una pérdida humana de interacción; luego comparar mecanismos.

## 4.3 IA auxiliar, separación creativa y agentes

```text
SH-80-04
delegación administrativa
+
SH-80-09
separación obra / apoyo IA
+
SH-80-10
espacio autónomo de agentes
```

No son equivalentes.

- SH-80-09 tiene una diferencia humana discriminable: proteger la frontera entre obra y asistencia.
- SH-80-04 es una familia de tareas administrativas.
- SH-80-10 es un marco operativo amplio de autonomía artificial.

**Conclusión:** SH-80-09 sobrevive como candidata propia. SH-80-04 y SH-80-10 deben dividirse antes de Product.

## 4.4 Comparación, navegación y multiformato

```text
SH-80-02
→ comparar varios documentos

SH-80-12
→ navegar dentro de uno largo

SH-80-13
→ continuidad entre formatos
```

Aunque pueden compartir vistas o infraestructura, sus diferencias humanas son distintas.

**Conclusión:** SH-80-02 permanece independiente; SH-80-12 puede ser independiente si supera el contraste con 4.2/59; SH-80-13 debe dividirse.

## 4.5 Autoría, procedencia y colaboración

```text
SH-80-05
→ quién firma / identidad autoral

IA-80-C
→ quién produjo qué transformación

SH-80-13
→ trabajo multiformato y colaborativo
```

La autoría por alias no se reduce a procedencia técnica ni a colaboración.

**Conclusión:** SH-80-05 es independiente. IA-80-C es transversal; colaboración sólo debe aparecer cuando una situación concreta la requiera.

## 4.6 Reversión y procedencia

SH-80-07 puede necesitar IA-80-C para saber qué acción se revierte, pero la procedencia no demuestra por sí sola la necesidad de undo contextual.

```text
reversibilidad
≠
procedencia

pero

reversibilidad causal segura
→ puede depender de procedencia suficiente
```

**Conclusión:** SH-80-07 permanece condicionada; IA-80-C no se eleva a candidata autónoma.

# 5. Agregaciones que deben dividirse antes de Product

## 5.1 SH-80-04 — delegación administrativa a IA

Debe convertirse en candidatas pequeñas por tarea humana, por ejemplo:

```text
clasificación sugerida
archivo/movimiento
registro de metadatos
preparación de materiales
seguimiento de tareas administrativas
conversión de formatos
```

Sólo deben sobrevivir las que demuestren una diferencia humana propia.

## 5.2 SH-80-10 — espacio de agentes

Debe reducirse a una primera situación humana, no a “agentes que hacen lo que necesiten”.

Posibles dimensiones separables:

```text
trabajo auxiliar persistente
autonomía limitada
preparación proactiva
modificación autorizada
búsqueda/recuperación
registro y auditoría
```

La autoridad estratégica seguirá siendo humana.

## 5.3 SH-80-13 — sistema multiformato universal

Debe abandonar la formulación “cualquier formato” y separar al menos:

```text
A. incorporar/visualizar materiales heterogéneos
B. editar algunos formatos nativamente
C. relacionarlos dentro de una actividad
D. transferirlos/exportarlos
E. colaborar sobre ellos
```

Estas operaciones pueden requerir compromisos diferentes.

# 6. Candidatas que sobreviven con independencia suficiente

Sin seleccionar todavía ninguna por Product, sobreviven como candidatas humanas distinguibles:

```text
CI-80-01
← SH-80-01
Captura inmediata con interrupción cognitiva mínima

CI-80-02
← SH-80-02
Comparación simultánea de documentos/versiones

CI-80-03
← SH-80-05
Identidad autoral múltiple separada de identidad de cuenta

CI-80-04
← SH-80-09
Asistencia de IA separada del contenido autoral final
```

Estas cuatro pueden pasar a ficha completa de Manual 17 §13.1.2 sin depender de que otra entrada se seleccione primero.

# 7. Candidatas condicionadas que no deben descartarse

Quedan suficientemente plausibles para conservarse, pero necesitan una reducción concreta antes de comparación Product:

```text
CC-80-01
← SH-80-03
Clasificación en el momento de reconocimiento del destino

CC-80-02
← SH-80-07
Reversibilidad contextual por actividad/operación

CC-80-03
← SH-80-08
Interfaz de baja carga visual y adaptable

CC-80-04
← SH-80-12
Navegabilidad estructural de documentos largos

CC-80-05
← IA-80-A
Reaparición contextual de información olvidada

CC-80-06
← IA-80-B
Recuperación de contexto de actividad

CC-80-07
← IA-80-E
Portabilidad con contexto pertinente
```

Para las propuestas IA-80-A/B/E se requiere además aceptación o evidencia humana suficiente antes de tratarlas con el mismo peso que las situaciones aportadas por la persona responsable.

# 8. Entradas no aptas todavía para comparación Product

## Mecanismos subordinados

```text
SH-80-06
→ superficie radial / command surface

SH-80-11
→ cursor por mirada
```

Pueden convertirse en realizaciones candidatas después de que exista una necesidad Product correspondiente.

## Familias demasiado amplias

```text
SH-80-04
→ delegación administrativa general a IA

SH-80-10
→ espacio operativo general para agentes

SH-80-13
→ sistema universal multiformato colaborativo
```

Necesitan descomposición.

## Transversales/dependencias

```text
IA-80-C
→ procedencia de transformaciones

IA-80-D
→ revisión del material capturado
```

No deben competir como objetivo autónomo en el estado actual.

# 9. Dependencias provisionales

No son todavía dependencias obligatorias de Product; sólo relaciones a comprobar si una candidata es seleccionada.

| Origen | Posible dependencia o relación | Estatuto |
| --- | --- | --- |
| SH-80-01 | IA-80-D | sólo si la captura genera acumulación problemática |
| SH-80-02 | IA-80-C | sólo si correcciones/fusiones requieren procedencia |
| SH-80-05 | IA-80-C | posible para atribución de cambios, no para mera firma |
| SH-80-07 | IA-80-C | probable si undo debe ser causal y auditable |
| SH-80-09 | IA-80-C | probable para distinguir aportación humana/IA |
| SH-80-10 | IA-80-C | fuerte si agentes modifican recursos |
| SH-80-13 | IA-80-E | relacionada, pero portabilidad no es condición universal de multiformato |
| SH-80-12 | IA-80-A | complementaria; navegación no exige recomendación automática |

# 10. Matriz de independencia entre candidatas supervivientes

| Par | Relación | Conclusión |
| --- | --- | --- |
| SH-80-01 ↔ SH-80-02 | captura frente a comparación | independientes |
| SH-80-01 ↔ SH-80-05 | captura frente a autoría | independientes |
| SH-80-01 ↔ SH-80-09 | captura frente a asistencia IA | independientes |
| SH-80-02 ↔ SH-80-05 | comparación frente a autoría | independientes |
| SH-80-02 ↔ SH-80-09 | comparación frente a asistencia IA | independientes; pueden combinarse en casos futuros |
| SH-80-05 ↔ SH-80-09 | identidad autoral frente a separación IA/obra | independientes aunque ambas afecten autoría/procedencia |

Por tanto no existe fundamento para fusionar las cuatro candidatas CI en una única candidata superior.

# 11. Riesgos de falsa independencia

Antes de Product deberán vigilarse especialmente:

1. **SH-80-03**: podría ser sólo organización ya reducida o una fase de SH-80-01.
2. **SH-80-07**: podría ser una propiedad transversal de edición y no una situación Product.
3. **SH-80-08**: podría reducirse a preferencia de interfaz si no aparece una diferencia funcional.
4. **SH-80-12**: podría quedar absorbida por organización/recuperación si no se demuestra una pérdida intra-documento específica.
5. **IA-80-A/B/E**: son propuestas del asistente; su plausibilidad no equivale a fundamento humano aceptado.
6. **SH-80-04/10/13**: su amplitud puede ocultar varias candidatas independientes y producir falsos compromisos universales.

# 12. Resultado reductivo

La matriz produce:

```text
ENTRADAS TOTALES
→ 18

CANDIDATAS INDEPENDIENTES
→ 4

CANDIDATAS CONDICIONADAS
→ 7

MECANISMOS SUBORDINADOS
→ 2

FAMILIAS DEMASIADO AMPLIAS
→ 3

TRANSVERSALES / DEPENDENCIAS
→ 2
```

La suma clasifica cada entrada por su estatuto predominante actual; no mide importancia ni prioridad.

# 13. Consecuencia estratégica

El banco 80 ya no es una lista plana.

Existe ahora un conjunto mínimo de candidatas suficientemente independientes para pasar a formulación completa:

```text
SH-80-01
SH-80-02
SH-80-05
SH-80-09
```

Las demás no se descartan: quedan reducidas a su estatuto correspondiente.

No procede todavía escoger una de las cuatro por intuición, facilidad técnica ni orden de enumeración.

El siguiente paso metodológico debe consistir en completar para estas cuatro la **ficha mínima de candidata de Manual 17 §13.1.2** y compararlas cualitativamente por:

- diferencia humana;
- valor;
- novedad frente a cierres;
- evidencia;
- alcance;
- falsabilidad;
- relaciones;
- y decisión estratégica que cambiarían.

Sólo después puede decidirse cuál debe someterse primero al procedimiento de Product.

# 14. Estado resultante

```text
MATRIZ DE INDEPENDENCIA Y SOLAPAMIENTO
→ COMPLETADA

BANCO 80
→ REDUCIDO

SH-80-01 / 02 / 05 / 09
→ CANDIDATAS INDEPENDIENTES

SH-80-03 / 07 / 08 / 12
+ IA-80-A / B / E
→ CANDIDATAS CONDICIONADAS

SH-80-06 / 11
→ MECANISMOS SUBORDINADOS

SH-80-04 / 10 / 13
→ FAMILIAS A DESCOMPONER

IA-80-C / D
→ TRANSVERSALES / DEPENDENCIAS

PRIORIDAD PRODUCT
→ NO DECIDIDA

SIGUIENTE ACTUACIÓN
→ fichas §13.1.2 de las cuatro candidatas independientes
```
