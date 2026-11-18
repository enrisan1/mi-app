# CONV-HPI-08 — Reducción de GAP-HPI-02 y segundo hito verificable

**Fecha:** 18/11/2026
**Estado:** CERRADA — GAP-HPI-02 reducido y segundo hito verificable formulado; mecanismo, arquitectura y roadmap todavía no derivados.
**Horizonte:** H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual.
**Precedente:** 108-R-HPI-03_VALIDACION_HITO_HPI_01.md.

---

# 1. Objeto

Tras declarar satisfecho HITO-HPI-01 y cerrado GAP-HPI-01 en su alcance, esta actuación vuelve únicamente a:

> **GAP-HPI-02 — ausencia de una continuidad material suficientemente reconocible entre un antecedente recuperado y el resultado posterior producido mediante su reutilización.**

Debe determinar cuál es la diferencia material todavía abierta, qué patrimonio ya existe, qué prueba mínima puede falsar que el hueco siga abierto y cuál es el siguiente hito verificable. No determina mecanismo de persistencia, forma de datos, arquitectura, archivos ni implementación.

---

# 2. Estado de partida

El primer hito ya ha establecido trabajo actual común y persistente, coexistencia con antecedente seleccionado y contextualización de captura, comparación e IA. Por tanto GAP-HPI-02 no es un problema general de contexto.

El comportamiento actual permite:

~~~text
antecedente A
→ seleccionado por la persona

nuevo trabajo W2
→ escrito y constituido
→ persistido como ordinary.material

pero después

W2
→ no conserva materialmente
  que A intervino en su constitución
~~~

---

# 3. Patrimonio que no debe reconstruirse

La App ordinaria ya dispone de pluralidad de materiales, selección humana de antecedente, actividad textual humana, acción explícita «Continuar con este material», persistencia del nuevo resultado y actualización del trabajo actual.

Eso significa que no falta recuperar, seleccionar ni producir un resultado. Falta conservar suficientemente la relación entre el antecedente reutilizado y ese resultado.

---

# 4. Diferencia material residual

La diferencia queda reducida a:

~~~text
durante la interacción
A + actividad humana → W2
→ relación reconocible

después de constituir W2
y perder el estado transitorio de selección
→ relación A → W2 desaparece
~~~

El hueco consiste en que la plataforma no puede responder después, cuando sea pertinente, qué antecedente recuperado intervino en la actividad que produjo un resultado, salvo reconstrucción externa.

---

# 5. Qué significa «intervino»

Este hito no exige demostrar semánticamente que palabras, ideas o fragmentos concretos de A aparezcan en W2, ni establecer causalidad intelectual completa.

En el alcance actual basta con demostrar operacionalmente:

~~~text
la persona recuperó A
→ seleccionó A como antecedente
→ desarrolló nuevo contenido
→ ejecutó la acción que constituye W2
  como continuación con ese material

y después

el producto puede reconocer
esa relación A → W2
~~~

La evidencia exigida es de continuidad operacional reconocible, no de derivación semántica exhaustiva.

---

# 6. Hipótesis insuficientes

## 6.1 Coexistencia momentánea

Que A y W2 sean visibles mientras la misma vista React permanece abierta no basta; falla tras interrupción o remontaje.

## 6.2 Último antecedente global

Conservar sólo el último antecedente seleccionado tampoco basta. En una secuencia A→W2 y B→W3 haría imposible distinguir correctamente W2 de W3.

## 6.3 Inferencia por contenido

Inferir la relación por semejanza textual confunde similitud con intervención y elimina la decisión humana explícita como fundamento.

---

# 7. Hito mínimo verificable

> **HITO-HPI-02 — Continuidad reconocible entre antecedente reutilizado y resultado posterior.**

Resultado exigido:

> Desde la App ordinaria, una persona puede recuperar y seleccionar un antecedente, desarrollar y constituir un resultado textual posterior mediante ese recorrido, y volver a reconocer después —incluida una reanudación pertinente— qué antecedente intervino en la producción de ese resultado, sin reconstruir externamente la relación y sin atribuirla a otros resultados.

---

# 8. Alcance

HITO-HPI-02 incluye únicamente antecedente recuperado, selección humana explícita, actividad textual posterior, nuevo resultado diferenciable, continuidad antecedente→resultado reconocible después, discriminación entre relaciones distintas y persistencia suficiente para reanudación.

No incluye grafo universal de procedencia, historial completo de edición, versionado general, merge, diff semántico, trazabilidad por fragmentos, causalidad intelectual completa, múltiples antecedentes por resultado ni relaciones N:M generales.

---

# 9. Criterios de HITO-HPI-02

## MHPI2-01 — Antecedente efectivamente recuperado y seleccionado

Debe existir un recorrido ordinario donde un material A perteneciente a materiales anteriores sea recuperado y seleccionado explícitamente por la persona. No basta con inyectarlo mediante props, fixture o conocimiento externo.

## MHPI2-02 — Resultado posterior diferenciado

En el mismo recorrido, A seleccionado + actividad humana de desarrollo deben producir un resultado W2 textual y distinguible de A. Esto operacionaliza el nuevo resultado y permite ejercitar D02 en el mismo recorrido.

## MHPI2-03 — Relación A → W2 reconocible después

Una vez constituido W2 y desaparecido el estado transitorio de selección, debe poder reconocerse materialmente que A fue el antecedente seleccionado en la actividad que produjo W2.

La relación no puede depender exclusivamente de memoria humana, orden temporal supuesto, similitud textual, un «último antecedente» global ni mantener abierta la misma vista React.

## MHPI2-04 — Persistencia a través de interrupción relevante

Después de desmontar/remontar o reanudar de forma equivalente, W2 debe seguir reconocible como resultado y A como su antecedente pertinente sin reconstrucción manual de la relación.

## MHPI2-05 — Discriminación y ausencia de atribución falsa

Debe existir una variación con dos relaciones distintas:

~~~text
A → W2
B → W3
~~~

y debe poder comprobarse:

~~~text
W2 → A
W3 → B

W2 ≠ B
W3 ≠ A
~~~

Este control descarta relación al último antecedente global, al trabajo más reciente, hardcode de un único antecedente o asociación basada sólo en orden de creación.

## MHPI2-06 — Entrada ordinaria y alcance reducido

La evidencia debe ejercerse desde la App ordinaria sin props especiales, edición manual de JSON, harness aislado ni Realization inaccesible desde el producto. Tampoco se exige conservar relaciones irrelevantes para el caso probado.

---

# 10. Cobertura del hueco residual

| Criterio previo | Cobertura por HITO-HPI-02 |
| --- | --- |
| C05-A antecedente efectivo | MHPI2-01 + MHPI2-02 en el mismo recorrido |
| C05-B nuevo resultado | MHPI2-02 |
| C05-C continuidad reconocible | MHPI2-03 + MHPI2-04 |
| C10-C procedencia mínima | MHPI2-03 |
| D01 C04→C05 | MHPI2-01…03 en un recorrido conectado |
| D02 C02→C05 | MHPI2-02 + resultado reutilizable |
| G03 trayectoria longitudinal | MHPI2-04 junto al patrimonio ya satisfecho |
| G06 sin reconstrucción externa | MHPI2-03/04/06 |

---

# 11. Caso positivo mínimo

~~~text
W1 actual
↓
examinar materiales anteriores
↓
seleccionar A
↓
desarrollar W2
↓
constituir W2
↓
perder estado transitorio / interrumpir
↓
volver a W2
↓
reconocer:
W2 ← A
~~~

No es necesario introducir una segunda operación auxiliar para satisfacer este hito.

---

# 12. Control negativo mínimo

~~~text
A → W2
B → W3
↓
interrupción
↓
W2 reconoce A
W3 reconoce B

y no:

W2 → B
W3 → A
~~~

Este control es obligatorio para descartar falsos positivos de «último antecedente».

---

# 13. Variación material mínima

La futura validación deberá cambiar al menos antecedente A→B y resultado W2→W3. No se exige variar además el tipo de operación, porque el objeto específico del hito es la relación reutilización→resultado.

---

# 14. Regla de satisfacción

~~~text
MHPI2-01…MHPI2-06
→ 6/6 SATISFECHOS
=
HITO-HPI-02 SATISFECHO

< 6/6
=
HITO-HPI-02 NO SATISFECHO
~~~

No se utiliza puntuación parcial.

---

# 15. No prescripción técnica

De la formulación del hito no se deduce que la solución deba llamarse sourceMaterialId, parentId, derivedFrom, provenance, edge, graph, version, revision o lineage.

Tampoco se deduce una tabla adicional, store, React Context, repository, base de datos, entidad de dominio nueva ni Architecture.

---

# 16. ¿Hace falta Architecture?

Con la evidencia actual, no.

El siguiente paso sólo necesita decidir realizativamente qué observación demuestra que A pertenece a W2, qué información mínima debe sobrevivir y cómo probar que A→W2 no se confunde con B→W3.

~~~text
Architecture
→ NO DERIVADA

siguiente cuerpo necesario
→ reducción realizativa mínima
  + tests discriminantes
~~~

---

# 17. Resultado de CONV-HPI-08

~~~text
GAP-HPI-02
→ confirmado como hueco residual independiente

núcleo material
→ la relación antecedente reutilizado → resultado
  desaparece tras la constitución

HITO-HPI-02
→ Continuidad reconocible entre
  antecedente reutilizado
  y resultado posterior

criterios
→ MHPI2-01…06

control negativo
→ A→W2
  B→W3
  sin atribución cruzada

variación mínima
→ antecedente + resultado

Architecture
→ NO DERIVADA

mecanismo técnico
→ NO DECIDIDO
~~~

La siguiente actuación justificable es construir el roadmap mínimo de HITO-HPI-02 y determinar qué contrato realizativo y qué tests deben preceder a cualquier modificación de producción.