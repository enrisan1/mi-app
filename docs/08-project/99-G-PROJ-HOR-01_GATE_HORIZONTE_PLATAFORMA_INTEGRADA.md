# G-PROJ-HOR-01 — Gate constitutivo de H-PROJ-INT-01

**Fecha:** 18/11/2026  
**Estado:** GATE CONSTITUTIVO COMPLETADO — 8/8 condiciones satisfechas; horizonte candidato pendiente de HUMAN GATE.  
**Horizonte candidato:** `H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual`.  
**Precedente:** `98-RED-PROJ-01_NUCLEO_MINIMO_PLATAFORMA_INTEGRADA.md`.

---

# 1. Objeto

Esta actuación somete `H-PROJ-INT-01` al gate constitutivo de horizonte definido por Manual 17 §13.1.4.

El gate exige establecer antes de aceptar el horizonte:

~~~text
HOR-01 → objetivo final
HOR-02 → fundamento positivo
HOR-03 → alcance
HOR-04 → no-alcance
HOR-05 → resultado o compromiso Product correspondiente
HOR-06 → dependencias conocidas materialmente relevantes
HOR-07 → criterio verificable de finalización
HOR-08 → posibles resultados de cierre
~~~

La satisfacción de estas ocho condiciones:

~~~text
FORMULAR HORIZONTE
→ posible

ACEPTAR HORIZONTE
→ todavía requiere HUMAN GATE
~~~

---

# 2. HOR-01 — Objetivo final

Se formula:

> **H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual**

Objetivo final:

> Hacer materialmente practicable, desde el punto ordinario de entrada del producto, un recorrido persistente de creación, desarrollo, reanudación, recuperación y reutilización de trabajo textual, con acceso contextual a las operaciones auxiliares ya justificadas que resulten pertinentes, preservando determinación humana y posibilidades anteriores necesarias.

El objetivo es finito porque no exige realizar toda Platform Vision ni convertir la plataforma en sistema universal.

Resultado:

~~~text
HOR-01
→ SATISFECHO
~~~

---

# 3. HOR-02 — Fundamento positivo

El fundamento no procede de una posibilidad técnica ni de una nueva función imaginada.

Procede de una distancia constitutiva demostrada:

~~~text
PROJECT_CHARTER
→ exige producto digital real, útil,
  sostenible y evolutivo
  orientado al trabajo intelectual

AUD-PROJ-01
→ producto material real: SÍ
→ suficiencia material de plataforma: NO

GATE-PROJ-01
→ NO SATISFECHO

RED-PROJ-01
→ distancia reducida a un núcleo
  integrador finito
~~~

La necesidad positiva es:

> las capacidades Product ya construidas deben poder participar en una actividad ordinaria coherente de trabajo intelectual, en vez de permanecer como recorridos separados cuya integración exige reconstrucción externa o navegación entre Realizations contingentes.

Resultado:

~~~text
HOR-02
→ SATISFECHO
~~~

---

# 4. HOR-03 — Alcance

El alcance aceptable queda limitado a una plataforma mínima:

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

Debe materializar:

### A. Trabajo actual

- crear o retomar un trabajo textual;
- reconocer inequívocamente cuál es el trabajo actual;
- desarrollarlo/modificarlo.

### B. Continuidad

- conservar;
- interrumpir;
- reanudar el mismo trabajo con contexto suficiente.

### C. Antecedentes

- localizar al menos material anterior pertinente;
- consultarlo;
- decidir reutilizarlo;
- mantener suficientemente reconocible su intervención en la continuación.

### D. Operaciones auxiliares contextuales

Cuando resulten pertinentes:

- captura contextual;
- comparación humana;
- apoyo IA separado.

### E. Propiedades transversales

- determinación humana;
- preservación de posibilidades pertinentes;
- procedencia/distinción suficiente;
- no destrucción indebida de antecedentes.

Resultado:

~~~text
HOR-03
→ SATISFECHO
~~~

---

# 5. HOR-04 — No-alcance

No forman parte del horizonte inicial:

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
- modelo de datos final;
- sustitución obligatoria de todas las Realizations históricas.

Tampoco se exige que identidad autoral sea constitutiva del recorrido mínimo, aunque `C-PV-80-03` permanece vigente y deberá conservarse.

Resultado:

~~~text
HOR-04
→ SATISFECHO
~~~

---

# 6. HOR-05 — Resultado Product correspondiente

## 6.1 Pregunta

¿H-PROJ-INT-01 introduce una nueva situación humana independiente que deba convertirse en un nuevo compromiso Product?

Resultado:

~~~text
NO
~~~

La situación humana relevante ya está distribuida entre compromisos Product vigentes.

## 6.2 Correspondencia

### PV-001

Permite que aquello hecho disponible en situaciones anteriores participe en situaciones posteriores.

### PV-002

Protege la disponibilidad conjunta de aportaciones anteriores y posteriores dentro de su alcance.

### PV-005

Preserva determinación humana cuando la resolución pertinente corresponde a la persona.

### PV-006

Exige preservar suficientemente las posibilidades que sigan siendo pertinentes cuando la plataforma introduce cambios.

### C-PV-POST-01

Exige preservar suficientemente el contexto provisional pertinente para continuar una actividad intelectual sin reconstrucción desde cero.

### C-PV-80-01

Permite conservar aportaciones emergentes con interrupción suficientemente reducida.

### C-PV-80-02

Permite comparación humana suficientemente simultánea de dos documentos relacionados.

### C-PV-80-04

Permite apoyo auxiliar IA asociado a una obra sin convertirlo automáticamente en contenido de la obra.

### C-PV-80-03

Permanece compromiso vigente de identidad autoral, pero no constituye dependencia necesaria para demostrar el primer núcleo individual.

## 6.3 Determinación Product

Se establece como resultado Product correspondiente:

> **RP-PROJ-INT-01 — Correspondencia Product del horizonte integrador.**

> El valor humano del horizonte no consiste en introducir una nueva situación Product independiente, sino en hacer practicables de forma coherente, desde un mismo recorrido ordinario, situaciones ya seleccionadas y vigentes. Por tanto, `H-PROJ-INT-01` no requiere crear un nuevo compromiso Product para superar el gate constitutivo; su autoridad Product procede del conjunto de compromisos vigentes anteriormente enumerados, dentro del alcance reducido por `N-PROJ-01 / R-PROJ-01 / I-PROJ-01 / F-PROJ-01`.

Esta determinación no amplía el contenido de los compromisos existentes.

Si durante la convergencia apareciese una situación humana independiente no cubierta por ellos, deberá volver a Product antes de incorporarse al horizonte.

Resultado:

~~~text
HOR-05
→ SATISFECHO

nuevo compromiso Product
→ NO requerido actualmente
~~~

---

# 7. HOR-06 — Dependencias conocidas materialmente relevantes

Se identifican sólo dependencias necesarias del horizonte, sin presuponer arquitectura.

## DEP-HPI-01 — Trabajo textual actual

Debe existir una representación operacional suficiente de un trabajo textual actual reconocible y desarrollable.

No se prescribe su estructura técnica.

## DEP-HPI-02 — Persistencia/reanudación

El trabajo actual y el contexto mínimo necesario deben sobrevivir una interrupción y permitir reanudación.

## DEP-HPI-03 — Recuperación de antecedentes

Debe poder localizarse y hacer participar al menos un antecedente pertinente sin destruir ni sustituir indebidamente el trabajo actual.

## DEP-HPI-04 — Continuidad antecedente → resultado

Debe conservarse suficiente relación operacional para reconocer que una continuación/revisión se apoya en un antecedente cuando esa relación sea pertinente.

No exige grafo general.

## DEP-HPI-05 — Contextualización de operaciones auxiliares

Captura, comparación y apoyo IA deben poder aplicarse al contexto pertinente sin exigir reconstrucción manual relevante sobre qué trabajo/material actúan.

## DEP-HPI-06 — Determinación humana

Las decisiones protegidas por `PV-005` deben permanecer humanas.

## DEP-HPI-07 — Preservación

Las transformaciones no pueden destruir posibilidades anteriores que continúen siendo pertinentes.

## DEP-HPI-08 — Entrada ordinaria

El recorrido debe ser demostrable desde la entrada ordinaria del producto.

No será suficiente depender de:

- fixtures especiales;
- props de prueba;
- JSON manual;
- harnesses;
- navegación obligatoria por Realizations experimentales.

Resultado:

~~~text
HOR-06
→ SATISFECHO
~~~

---

# 8. HOR-07 — Criterio verificable de finalización

Se define:

> **CF-HPI-01 — recorrido integrado textual ordinario verificable.**

El horizonte podrá declararse suficientemente realizado cuando una persona pueda ejecutar desde el producto ordinario, sin reconstrucción externa relevante:

~~~text
1. entrar

2. crear o retomar trabajo textual

3. desarrollar/modificar contenido

4. conservar e interrumpir

5. volver

6. reanudar el mismo trabajo

7. localizar un antecedente pertinente

8. consultarlo y decidir utilizarlo

9. cuando proceda:
   → capturar
   → comparar
   → solicitar apoyo IA

10. producir continuación o revisión humana

11. conservar el nuevo resultado

12. abandonar y volver a reanudarlo
~~~

manteniendo simultáneamente:

~~~text
CF-HPI-01-A
→ trabajo actual inequívoco

CF-HPI-01-B
→ continuidad tras interrupción

CF-HPI-01-C
→ antecedentes pertinentes recuperables

CF-HPI-01-D
→ uso de antecedente reconocible
  cuando sea pertinente

CF-HPI-01-E
→ operaciones auxiliares contextuales

CF-HPI-01-F
→ ayudas no se incorporan automáticamente
  al contenido principal

CF-HPI-01-G
→ determinación humana preservada

CF-HPI-01-H
→ posibilidades anteriores pertinentes
  suficientemente preservadas

CF-HPI-01-I
→ recorrido desde entrada ordinaria

CF-HPI-01-J
→ sin dependencia necesaria de fixtures,
  props especiales, JSON manual o harnesses
~~~

## Falsadores

El criterio falla si:

1. crear y retomar siguen siendo recorridos incompatibles o desconectados;
2. el contenido sólo puede constituirse como aportaciones aisladas y no desarrollarse como trabajo continuo;
3. recuperar antecedente sustituye indebidamente el trabajo actual;
4. una operación auxiliar requiere reconstruir manualmente su contexto;
5. la reanudación pierde contexto necesario;
6. el recorrido completo sólo existe en pruebas/harnesses;
7. el sistema decide automáticamente incorporación o prevalencia en decisiones humanas protegidas.

Resultado:

~~~text
HOR-07
→ SATISFECHO
~~~

---

# 9. HOR-08 — Posibles resultados de cierre

El horizonte admite cuatro salidas explícitas.

## A — SATISFECHO

~~~text
CF-HPI-01
→ SATISFECHO

H-PROJ-INT-01
→ CERRADO EN SU ALCANCE
~~~

Consecuencia:

- reaplicar `GATE-PROJ-01`;
- decidir si el núcleo integrado permite ya declarar suficiente realización material o si queda otra distancia constitutiva.

## B — PARCIAL / REDUCCIÓN ADICIONAL

Parte del recorrido se integra pero queda una dependencia concreta todavía necesaria.

Consecuencia:

~~~text
H-PROJ-INT-01
→ ABIERTO
→ reducir sólo la dependencia residual
~~~

## C — FALSADO EN SU FORMULACIÓN

La convergencia demuestra que el núcleo formulado no puede realizarse coherentemente sin introducir una diferencia constitutiva omitida.

Consecuencia:

- no ampliar automáticamente el horizonte;
- volver al cuerpo competente;
- revisar `N-PROJ-01 / R-PROJ-01 / I-PROJ-01 / F-PROJ-01`.

## D — CAMBIO PRODUCT NECESARIO

Aparece una situación humana independiente no cubierta por los compromisos vigentes y necesaria para el núcleo.

Consecuencia:

~~~text
detener expansión del horizonte
→ volver a Product
→ evaluar valor/selección
→ sólo después continuar
~~~

Resultado:

~~~text
HOR-08
→ SATISFECHO
~~~

---

# 10. Resultado conjunto del gate

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

El horizonte es:

~~~text
finito
+
discriminable
+
fundado positivamente
+
delimitado
+
vinculado a Product
+
con dependencias conocidas
+
verificablemente cerrable
~~~

---

# 11. HUMAN GATE

Manual 17 exige control humano significativo para aceptar un nuevo horizonte.

Por tanto:

~~~text
H-PROJ-INT-01
→ FORMULADO

GATE CONSTITUTIVO
→ 8/8 SATISFECHO

HORIZONTE
→ TODAVÍA NO ACEPTADO

ARCHITECTURE
→ NO DERIVADA

REALIZATION
→ NO DERIVADA

IMPLEMENTATION
→ NO DERIVADA
~~~

Decisión humana pendiente:

> **ACEPTAR o RECHAZAR H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual.**

---

# 12. Formulación sometida a aceptación

> **H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual**
>
> Hacer materialmente practicable, desde el punto ordinario de entrada del producto, un recorrido persistente de creación, desarrollo, reanudación, recuperación y reutilización de trabajo textual, con acceso contextual a las operaciones auxiliares ya justificadas que resulten pertinentes, preservando determinación humana y posibilidades anteriores necesarias.

Alcance y no-alcance son los establecidos en §§4–5 de este documento.

Si se acepta, el relevo deberá seguir Manual 17 §13.1.5:

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


---

# 13. Estado formal del HUMAN GATE

~~~text
G-PROJ-HOR-01
→ 8/8 SATISFECHOS

H-PROJ-INT-01
→ FORMULADO
→ NO ACEPTADO

HUMAN GATE
→ PENDIENTE
~~~
