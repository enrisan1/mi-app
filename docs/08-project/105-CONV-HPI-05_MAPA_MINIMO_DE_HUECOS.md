# CONV-HPI-05 — Derivación y reducción de huecos materiales de H-PROJ-INT-01

**Fecha:** 18/11/2026  
**Estado:** CERRADA — cuatro zonas de insuficiencia reducidas a dos huecos materiales independientes; prioridades todavía no determinadas.  
**Horizonte:** `H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual`.  
**Precedente:** `104-CONV-HPI-04_ESTADO_MATERIAL_ACTUAL.md`.

---

# 1. Objeto

Esta actuación ejecuta únicamente el sexto paso del relevo de Manual 17 §13.1.5:

~~~text
horizonte aceptado
↓
alcance
↓
capacidades
↓
dependencias
↓
criterios
↓
estado actual
↓
HUECOS
~~~

Parte de cuatro zonas observadas:

~~~text
Z1
→ identidad operacional común del trabajo actual

Z2
→ asociación contextual de elementos auxiliares

Z3
→ continuidad reconocible antecedente → resultado

Z4
→ recorrido global sin reconstrucción externa relevante
~~~

Debe determinar:

- cuáles expresan el mismo defecto material;
- cuáles son consecuencias de otro;
- cuáles requieren cierre independiente;
- cuál es el mapa mínimo de huecos reales.

No prioriza todavía ni formula hitos.

---

# 2. Criterio de hueco independiente

Una insuficiencia sólo se conserva como hueco autónomo cuando:

~~~text
1. tiene un resultado material propio observable

2. no desaparece necesariamente
   al cerrar otro hueco

3. puede falsarse con evidencia propia

4. su cierre cambia al menos
   un criterio no satisfecho/parcial

5. no es sólo síntoma,
   consecuencia o formulación global
   de otras carencias
~~~

No se exige que cada hueco termine correspondiendo a:

- un componente;
- un archivo;
- una tabla;
- una entidad;
- una actuación de código.

---

# 3. Análisis de Z1 — identidad operacional común

Z1 explica directamente:

~~~text
C01-A → parcial
C01-B → no satisfecho
C04-C → parcial
G01    → parcial
G02    → parcial
~~~

y participa en:

~~~text
G04 → parcial
G06 → no satisfecho
~~~

La evidencia actual muestra varios contextos locales:

- `ru2m1.previous`;
- `PostV1 current`;
- `selectedMaterialId`;
- `selectedAiSupportMaterialId`;
- selecciones A/B;
- capturas sin referencia de trabajo.

No existe una referencia operacional común suficiente que permita expresar:

~~~text
este es el trabajo actual
+
estos elementos/operaciones
pertenecen a su contexto
~~~

Z1 constituye por tanto una carencia material propia.

---

# 4. Relación Z1 ↔ Z2

Z2 observaba:

~~~text
captura
→ sin asociación al trabajo

comparación
→ sin contexto persistente de actividad

IA
→ ya asociada materialmente mediante materialId
~~~

La pregunta es si Z2 es independiente de Z1.

## 4.1 Hipótesis de independencia

Supóngase que existe un mecanismo específico para:

- añadir `materialId` a capturas;
- guardar algún identificador de contexto en comparaciones;

pero sigue sin existir una identidad operacional común de trabajo actual.

Entonces cada auxiliar podría quedar asociado a **algún** material, pero seguiría sin quedar resuelto:

- cuál es el trabajo actual del recorrido;
- si ese material coincide con el trabajo activo;
- cómo se mantiene el contexto al pasar a PostV1;
- cómo se articula recuperación/reutilización con los auxiliares.

La asociación aislada no satisface el horizonte.

## 4.2 Hipótesis de absorción

Supóngase en cambio que existe una capacidad material suficiente para mantener:

~~~text
trabajo actual inequívoco
+
contexto operativo persistente
+
asociación de elementos pertinentes
a ese contexto
~~~

Entonces:

- captura puede quedar contextualizada;
- comparación puede ejecutarse respecto del mismo contexto;
- IA ya puede reutilizar esa referencia común;
- C01-B, C06-B, C07-B y parte de C10-C pueden cerrarse bajo una misma obligación.

Resultado:

~~~text
Z2
→ NO es hueco independiente

Z2
→ manifestación específica
  de la ausencia de contexto operativo común
~~~

Se absorbe Z2 en el hueco derivado de Z1.

---

# 5. GAP-HPI-01 — Contexto operativo común y persistente

Se deriva:

> **GAP-HPI-01 — ausencia de un contexto operativo común y suficientemente persistente que identifique el trabajo textual actual y permita asociar a él los elementos y operaciones pertinentes del recorrido ordinario.**

## 5.1 Obligación material

El cierre deberá hacer posible, sin presuponer arquitectura:

~~~text
trabajo actual
→ inequívocamente reconocible

interrupción/reanudación
→ conserva la referencia pertinente

antecedente seleccionado
→ puede coexistir respecto de ese trabajo

captura pertinente
→ queda asociada al contexto

comparación pertinente
→ conserva su contexto de actividad

apoyo IA
→ puede referirse al mismo contexto común
  sin perder su separación
~~~

No exige:

- una entidad llamada Workspace;
- una tabla Context;
- una URL determinada;
- estado global React;
- un único almacenamiento;
- conservar toda interacción.

## 5.2 Criterios afectados

Principalmente:

~~~text
C01-A
C01-B
C04-C
C06-B
C07-B
C10-C [parcialmente]

G01
G02
G04
G06 [parcialmente]
~~~

---

# 6. Análisis de Z3 — continuidad antecedente → resultado

Z3 procede de:

~~~text
C05-A → parcial
C05-C → no satisfecho
D01    → parcial
D02    → parcial
C10-C → parcial
G03    → parcial
G06    → no satisfecho
~~~

La evidencia actual conserva:

~~~text
selectedMaterialId
→ durante la interacción

nuevo trabajo
→ {id, content}
~~~

pero al constituirse el resultado desaparece materialmente la relación:

~~~text
resultado nuevo
← antecedente utilizado
~~~

Esto es diferente de identificar el trabajo actual.

Una plataforma puede saber perfectamente cuál es el trabajo activo y, sin embargo, no conservar qué antecedente concreto participó en una continuación/revisión.

Por tanto Z3 no queda absorbido automáticamente por GAP-HPI-01.

---

# 7. GAP-HPI-02 — Continuidad material antecedente → resultado

Se deriva:

> **GAP-HPI-02 — ausencia de una continuidad material suficientemente reconocible entre un antecedente recuperado y el resultado posterior producido mediante su reutilización.**

## 7.1 Obligación material

El cierre deberá permitir observar, cuando esa relación sea pertinente:

~~~text
antecedente recuperado
+
desarrollo humano
↓
nuevo resultado
↓
continuidad antecedente → resultado
suficientemente reconocible
~~~

sin exigir:

- grafo general;
- provenance universal;
- versionado completo;
- merge;
- relaciones semánticas arbitrarias;
- conservar relaciones irrelevantes.

## 7.2 Criterios afectados

Principalmente:

~~~text
C05-A
C05-C
C10-C [parcialmente]

D01
D02

G03
G06 [parcialmente]
~~~

---

# 8. Prueba de independencia GAP-HPI-01 / GAP-HPI-02

## 8.1 Cerrar GAP-HPI-01 dejando abierto GAP-HPI-02

Supóngase:

~~~text
trabajo actual común
→ SÍ

captura contextual
→ SÍ

comparación contextual
→ SÍ

auxiliares bajo mismo contexto
→ SÍ

pero

resultado posterior
→ no conserva qué antecedente intervino
~~~

Persistirían:

~~~text
C05-C → NO SATISFECHO
D01/D02 → PARCIALES
G03 → PARCIAL
G06 → todavía falla
      respecto de antecedente→resultado
~~~

Por tanto:

~~~text
GAP-HPI-02
→ independiente de GAP-HPI-01
~~~

## 8.2 Cerrar GAP-HPI-02 dejando abierto GAP-HPI-01

Supóngase:

~~~text
resultado
→ conserva antecedente utilizado

pero

trabajo actual común
→ NO

captura
→ sin contexto

comparación
→ sin contexto de actividad

PostV1 / ordinary materials
→ contextos separados
~~~

Persistirían:

~~~text
C01-B → NO SATISFECHO
C06-B → NO SATISFECHO
C07-B → NO SATISFECHO

G01/G02/G04 → PARCIALES
G06 → todavía falla
      por reconstrucción de contexto operativo
~~~

Por tanto:

~~~text
GAP-HPI-01
→ independiente de GAP-HPI-02
~~~

Resultado:

~~~text
GAP-HPI-01
↔ GAP-HPI-02
→ DOS OBLIGACIONES INDEPENDIENTES
~~~

---

# 9. Análisis de Z4 — reconstrucción externa relevante

Z4 es el síntoma global:

~~~text
la persona debe reconstruir mentalmente
información que el producto no materializa
~~~

La reconstrucción observada tiene dos fuentes:

### Fuente A

~~~text
qué trabajo está activo
+
a qué trabajo pertenece captura/comparación
+
cómo se conectan los contextos locales
~~~

→ GAP-HPI-01

### Fuente B

~~~text
qué antecedente originó
el resultado posterior
~~~

→ GAP-HPI-02

No se identifica un tercer tipo independiente de reconstrucción material dentro del alcance aceptado.

Por tanto:

~~~text
Z4
→ NO es hueco autónomo

Z4
→ consecuencia global
  de GAP-HPI-01 + GAP-HPI-02
~~~

El cierre de ambos deberá ser suficiente para volver a evaluar G06.

---

# 10. Mapa mínimo de huecos

La reducción final es:

~~~text
Z1 ───────────────┐
                  ├→ GAP-HPI-01
Z2 ─ manifestación┘
   contextual

Z3 ─────────────────→ GAP-HPI-02

Z4
→ consecuencia de
  GAP-HPI-01 + GAP-HPI-02
~~~

Por tanto:

~~~text
huecos candidatos iniciales
→ 4 zonas

huecos reales mínimos
→ 2
~~~

---

# 11. GAP-HPI-01 — formulación consolidada

> **Contexto operativo común y persistente del trabajo actual**

Debe conseguir que, dentro del producto ordinario:

~~~text
trabajo textual actual
+
antecedentes pertinentes
+
operaciones auxiliares pertinentes
~~~

puedan participar bajo un contexto suficientemente común y reconocible a través del recorrido.

### No-alcance específico

No obliga a:

- rediseñar todas las entidades existentes;
- unificar físicamente todo almacenamiento;
- hacer persistente cada estado efímero de UI;
- introducir proyecto/workspace;
- enlazar cualquier objeto con cualquier otro.

---

# 12. GAP-HPI-02 — formulación consolidada

> **Continuidad material reconocible entre antecedente reutilizado y resultado posterior**

Debe conseguir que, cuando un antecedente recuperado intervenga en una continuación/revisión:

~~~text
antecedente
→ participación humana
→ resultado posterior
~~~

no desaparezca materialmente al constituirse el resultado.

### No-alcance específico

No obliga a:

- historial universal;
- grafo general;
- versionado completo;
- registro causal exhaustivo;
- provenance de toda acción.

---

# 13. Cobertura de criterios insuficientes

| Criterio | Hueco responsable |
| --- | --- |
| C01-A | GAP-HPI-01 |
| C01-B | GAP-HPI-01 |
| C04-C | GAP-HPI-01 |
| C05-A | GAP-HPI-02 |
| C05-C | GAP-HPI-02 |
| C06-B | GAP-HPI-01 |
| C07-B | GAP-HPI-01 |
| C10-C | GAP-HPI-01 + GAP-HPI-02 |
| D01 | GAP-HPI-02 |
| D02 | GAP-HPI-02 |
| G01 | GAP-HPI-01 |
| G02 | GAP-HPI-01 |
| G03 | GAP-HPI-01 + GAP-HPI-02 |
| G04 | GAP-HPI-01 |
| G06 | GAP-HPI-01 + GAP-HPI-02 |

Resultado:

~~~text
criterio insuficiente sin hueco explicativo
→ NINGUNO IDENTIFICADO
~~~

---

# 14. Relación entre los dos huecos

No se establece dependencia funcional estricta entre GAP-HPI-01 y GAP-HPI-02.

Es posible conceptualmente:

- conservar relación antecedente→resultado sin tener contexto auxiliar común;
- tener contexto común y perder la relación antecedente→resultado.

Por tanto:

~~~text
GAP-HPI-01
→ independiente

GAP-HPI-02
→ independiente

orden de resolución
→ TODAVÍA NO DETERMINADO
~~~

Una implementación concreta podría compartir mecanismo o representación para ambos.

Eso no elimina su independencia como obligaciones.

---

# 15. Ausencia de tercer hueco

No se deriva un hueco específico para:

- persistencia/reanudación;
- desarrollo textual;
- IA;
- determinación humana;
- conservación básica;
- comparación visual A/B;
- recuperación de pluralidad.

Sus criterios relevantes están ya satisfechos o sus insuficiencias quedan cubiertas por GAP-HPI-01/02.

Tampoco se deriva un hueco separado llamado:

~~~text
"integración global"
~~~

porque sería circular:

~~~text
horizonte no integrado
→ falta integración
~~~

sin localizar qué diferencia material debe cerrarse.

---

# 16. Falsadores de la reducción

La reducción a dos huecos será incorrecta si evidencia posterior demuestra cualquiera de estos casos:

1. cerrar GAP-HPI-01 y GAP-HPI-02 deja un criterio actualmente insuficiente sin explicación;
2. aparece una reconstrucción externa relevante distinta de contexto común y continuidad antecedente→resultado;
3. una operación auxiliar requiere una obligación independiente no absorbible por el contexto común;
4. C-HPI-05 exige otra propiedad independiente de la relación antecedente→resultado;
5. el cierre de uno de los huecos implica necesariamente el cierre del otro, demostrando que no eran independientes.

Hasta entonces:

~~~text
mapa mínimo
→ 2 huecos
~~~

---

# 17. Resultado de CONV-HPI-05

~~~text
Z1
→ GAP-HPI-01

Z2
→ absorbida por GAP-HPI-01

Z3
→ GAP-HPI-02

Z4
→ consecuencia de GAP-HPI-01 + GAP-HPI-02

huecos reales mínimos
→ 2

GAP-HPI-01
→ contexto operativo común y persistente

GAP-HPI-02
→ continuidad material antecedente→resultado

independencia
→ DEMOSTRADA

prioridad
→ NO DETERMINADA

hitos
→ NO FORMULADOS

CONV-HPI-05
→ CERRADA
~~~

---

# 18. Siguiente actuación legítima

La secuencia continúa:

~~~text
alcance
✓
capacidades
✓
dependencias
✓
criterios
✓
estado actual
✓
huecos
✓
↓
PRIORIDADES
~~~

Se deriva:

> **CONV-HPI-06 — determinación de prioridad entre GAP-HPI-01 y GAP-HPI-02 y reducción del primer hito verificable.**

Deberá evaluar, sin presuponer arquitectura:

- cuál bloquea más criterios globales;
- si uno habilita evidencia necesaria para el otro;
- riesgo de construir una solución local que luego deba rehacerse;
- qué orden minimiza trabajo desechable;
- cuál permite formular el primer hito materialmente verificable.

No deberá todavía abrir Implementation por el mero hecho de priorizar un hueco.
