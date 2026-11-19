# Aceptación de H-PROJ-INT-01 y relevo a convergencia

**Fecha:** 18/11/2026  
**Estado:** HORIZONTE ACEPTADO — relevo a metodología de convergencia.  
**Precedente:** `99-G-PROJ-HOR-01_GATE_HORIZONTE_PLATAFORMA_INTEGRADA.md`.

---

# 1. Decisión humana

La persona responsable decide:

> **ACEPTAR `H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual`.**

Esta aceptación es posterior y distinta de:

- la reducción `RED-PROJ-01`;
- la formulación del horizonte;
- la satisfacción del gate constitutivo;
- la determinación `RP-PROJ-INT-01` de correspondencia Product.

---

# 2. Formulación aceptada

> **H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual**
>
> Hacer materialmente practicable, desde el punto ordinario de entrada del producto, un recorrido persistente de creación, desarrollo, reanudación, recuperación y reutilización de trabajo textual, con acceso contextual a las operaciones auxiliares ya justificadas que resulten pertinentes, preservando determinación humana y posibilidades anteriores necesarias.

---

# 3. Condiciones constitutivas preservadas

La aceptación conserva íntegramente el resultado de `G-PROJ-HOR-01`:

~~~text
HOR-01 → SATISFECHO
HOR-02 → SATISFECHO
HOR-03 → SATISFECHO
HOR-04 → SATISFECHO
HOR-05 → SATISFECHO
HOR-06 → SATISFECHO
HOR-07 → SATISFECHO
HOR-08 → SATISFECHO

G-PROJ-HOR-01
→ 8/8 SATISFECHOS
~~~

No se amplía el alcance ni se modifica el no-alcance.

---

# 4. Correspondencia Product

Se conserva:

~~~text
RP-PROJ-INT-01
→ el horizonte integra de forma coherente
  situaciones Product ya seleccionadas

nuevo compromiso Product
→ NO requerido actualmente
~~~

La aceptación no modifica `PRODUCT.md`.

Si durante la convergencia apareciese una situación humana independiente no cubierta por los compromisos vigentes, deberá volver a Product antes de incorporarse al horizonte.

---

# 5. Alcance aceptado

El horizonte comprende un núcleo:

~~~text
individual
+
textual
+
persistente
+
reanudable
+
capaz de recuperar/reutilizar antecedentes
+
capaz de aplicar operaciones auxiliares
  desde el contexto del trabajo actual
~~~

Con propiedades mínimas:

- trabajo actual inequívoco;
- creación/desarrollo textual ordinario;
- persistencia y reanudación;
- recuperación de antecedentes;
- continuidad antecedente → resultado;
- operaciones auxiliares contextuales;
- determinación humana;
- preservación de posibilidades pertinentes.

---

# 6. No-alcance preservado

No se incorporan automáticamente al horizonte:

- colaboración multiusuario ordinaria;
- publicación;
- multiformato general;
- sincronización distribuida;
- CRDT;
- agentes autónomos;
- MCP;
- RAG;
- grafo general;
- ontología general;
- versionado universal;
- branching;
- snapshots universales;
- restauración universal;
- workflow configurable;
- taxonomía general;
- búsqueda semántica;
- autenticación general;
- permisos complejos;
- revisión editorial multirol;
- interoperabilidad universal;
- arquitectura final;
- modelo de datos final.

---

# 7. Criterio de finalización vigente

Se conserva `CF-HPI-01 — recorrido integrado textual ordinario verificable`.

El horizonte podrá cerrarse sólo cuando una persona pueda ejecutar desde el producto ordinario, sin reconstrucción externa relevante:

~~~text
crear/retomar
↓
desarrollar
↓
conservar/interrumpir
↓
reanudar
↓
recuperar antecedente
↓
usar/comparar/consultar apoyo cuando proceda
↓
producir continuación o revisión
↓
conservar
↓
volver a reanudar
~~~

manteniendo las condiciones `CF-HPI-01-A…J` definidas en 99.

---

# 8. Efecto de la aceptación

La aceptación produce:

~~~text
H-PROJ-INT-01
→ ACEPTADO

formación/gate constitutivo
→ CERRADOS

metodología de continuidad especializada
→ TERMINA PARA ESTA DECISIÓN

metodología de convergencia
→ TOMA EL RELEVO
~~~

No produce automáticamente:

~~~text
Architecture
→ NO

Realization
→ NO

Implementation
→ NO

nuevo Product Value
→ NO

nuevo compromiso Product
→ NO
~~~

---

# 9. Relevo según Manual 17 §13.1.5

La secuencia obligatoria pasa a ser:

~~~text
horizonte aceptado
↓
alcance
↓
capacidades
↓
dependencias
↓
criterios de finalización
↓
estado actual
↓
huecos
↓
prioridades
↓
hitos
↓
roadmap
↓
actuaciones
~~~

El primer paso no consiste en programar.

Debe reconstruirse el alcance ya aceptado en términos de capacidades necesarias y después comprobar cuáles están ya materialmente presentes y cuáles faltan.

---

# 10. Punto de reanudación

Siguiente actuación legítima:

> **CONV-HPI-01 — reconstrucción de alcance y capacidades de `H-PROJ-INT-01`.**

Debe:

1. preservar `N-PROJ-01`, `R-PROJ-01`, `I-PROJ-01` y `F-PROJ-01`;
2. convertir el alcance del horizonte en capacidades verificables sin presuponer arquitectura;
3. distinguir capacidades ya existentes de capacidades realmente ausentes;
4. no abrir implementación antes de completar dependencias, criterios, estado y huecos.

---

# 11. Estado formal

~~~text
H-PROJ-INT-01
→ ACEPTADO

HUMAN GATE
→ SUPERADO

G-PROJ-HOR-01
→ CERRADO

RED-PROJ-01
→ CERRADA

GATE-PROJ-01
→ SIGUE NO SATISFECHO
  hasta materializar y validar el horizonte

siguiente actuación
→ CONV-HPI-01
  alcance + capacidades

Architecture
→ NO DERIVADA

Realization
→ NO DERIVADA

Implementation
→ NO DERIVADA
~~~


---

# 12. Resultado de CONV-HPI-01

La actuación [101](101-CONV-HPI-01_ALCANCE_Y_MAPA_DE_CAPACIDADES.md) ejecuta los dos primeros pasos del relevo:

~~~text
alcance
→ CERRADO

capacidades
→ DETERMINADAS
~~~

Mapa resultante:

~~~text
C-HPI-01 → establecer trabajo textual actual
C-HPI-02 → desarrollar trabajo actual
C-HPI-03 → conservar y reanudar
C-HPI-04 → recuperar antecedentes
C-HPI-05 → reutilizar antecedentes
C-HPI-06 → captura contextual
C-HPI-07 → comparación contextual
C-HPI-08 → apoyo IA separado/contextual
C-HPI-09 → determinación humana
C-HPI-10 → preservación + distinción/procedencia suficiente
~~~

No se han evaluado todavía dependencias, estado actual, huecos ni prioridades.

Siguiente actuación:

~~~text
CONV-HPI-02
→ mapa de dependencias
  de C-HPI-01…C-HPI-10
~~~


---

# 13. Resultado de CONV-HPI-02

La actuación [102](102-CONV-HPI-02_MAPA_MINIMO_DE_DEPENDENCIAS.md) determina el grafo funcional mínimo.

~~~text
C-HPI-02 ─┐
          ├→ C-HPI-05
C-HPI-04 ─┘
~~~

No se conservan otras aristas directas.

Las capacidades transversales `C-HPI-09/10` no se convierten en prerrequisitos fijos de todas las demás.

Estado:

~~~text
CONV-HPI-02
→ CERRADA

criterios de finalización
→ PENDIENTES

siguiente actuación
→ CONV-HPI-03
~~~


---

# 14. Resultado de CONV-HPI-03

La convergencia dispone ya de:

~~~text
alcance
✓

capacidades
✓

dependencias
✓

criterios de finalización
✓
~~~

La actuación [103](103-CONV-HPI-03_CRITERIOS_DE_FINALIZACION.md) operacionaliza `CF-HPI-01` mediante criterios individuales, dependenciales y globales.

Estado actual del relevo:

~~~text
siguiente etapa
→ ESTADO ACTUAL

actuación
→ CONV-HPI-04
~~~

No se derivan aún huecos ni implementación.


---

# 15. Resultado de CONV-HPI-04

El relevo dispone ya de evaluación material actual.

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
~~~

Resultado global:

~~~text
CF-HPI-01
→ NO SATISFECHO

H-PROJ-INT-01
→ ABIERTO
~~~

La insuficiencia se concentra en identidad operacional común del trabajo, contextualización auxiliar, continuidad antecedente→resultado y reconstrucción externa relevante.

Estas zonas todavía no se consideran huecos formales.

Siguiente actuación:

~~~text
CONV-HPI-05
→ derivación y reducción de huecos
~~~


---

# 16. Resultado de CONV-HPI-05

El relevo dispone ya de mapa mínimo de huecos:

~~~text
GAP-HPI-01
→ contexto operativo común y persistente

GAP-HPI-02
→ continuidad material antecedente → resultado
~~~

Los huecos son independientes como obligaciones, aunque una solución técnica futura pudiera compartir mecanismos.

Estado del relevo:

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
prioridades
~~~

Siguiente actuación: `CONV-HPI-06`.


---

# 17. Resultado de CONV-HPI-06

El relevo dispone ya de prioridad y primer hito verificable:

~~~text
GAP-HPI-01
→ prioridad 1

GAP-HPI-02
→ prioridad 2

HITO-HPI-01
→ Contexto operativo común verificable
→ MHPI-01…08
→ regla 8/8
~~~

Siguiente actuación:

~~~text
CONV-HPI-07
→ roadmap mínimo hacia HITO-HPI-01
~~~


---

# 18. Resultado de CONV-HPI-07

El relevo dispone ya de roadmap mínimo hacia el primer hito:

~~~text
R-HPI-01
→ DERIVADA
→ contrato realizativo mínimo + tests rojos

R-HPI-02
→ NO INICIADA

R-HPI-03
→ NO INICIADA
~~~

No se deriva Architecture.

Implementation sólo podrá abrirse después de cerrar R-HPI-01 con rojo correcto.


---

# 8. Resultado de cierre posterior

La convergencia derivada desde esta aceptación concluye en [118](118-R-RESHPI-03_VALIDACION_FORMAL_Y_CIERRE_H_PROJ_INT_01.md).

Resultado final del horizonte aceptado:

~~~text
H-PROJ-INT-01
→ ACEPTADO
→ REALIZADO
→ VALIDADO
→ SATISFECHO
→ CERRADO
~~~

El cierre se limita al alcance aceptado en este documento y no deriva Architecture, Implementation ni ampliaciones del no-alcance.
