# Auditoría y corrección del criterio de estado estable del Manual 17

**Fecha:** 18/11/2026
**Estado:** CERRADA EN SU FUNCIÓN METODOLÓGICA — defecto identificado y criterio corregido.
**Objeto:** reconstruir la diferencia entre satisfacción del Product vigente y realización material de la finalidad del proyecto.

---

# 1. Problema observado

El proyecto ha alcanzado repetidamente estados formulados como:

~~~text
Product vigente
→ suficientemente satisfecho

obligaciones abiertas
→ ninguna

Rama A
→ sin continuidad derivada

Rama B
→ sin continuidad derivada

proyecto
→ ESTADO ESTABLE
~~~

Sin embargo, la finalidad constitutiva superior permanece formulada en `PROJECT_CHARTER.md` como:

~~~text
construir progresivamente
un producto digital real,
útil,
sostenible
y evolutivo
orientado a ampliar
las posibilidades humanas
de trabajo intelectual
con información y contenidos
~~~

y `PLATFORM_VISION.md` conserva una visión a largo plazo de plataforma que acompaña actividades de creación, organización, enriquecimiento, conservación, intercambio, publicación, revisión, colaboración, consulta, trazabilidad y preservación.

La cuestión auditada es:

> ¿Puede el Manual 17 declarar estabilidad global del proyecto únicamente porque los compromisos Product actualmente seleccionados estén satisfechos y no haya una nueva pérdida emergente?

Resultado:

~~~text
NO
~~~

---

# 2. Hechos que no se corrigen

La auditoría no invalida los cierres locales anteriores.

Permanecen válidos:

- los compromisos Product aceptados;
- sus alcances;
- las pruebas y realizaciones realizadas;
- los cierres de `R-80-CONV-02…05`;
- la satisfacción de `OB-80-CONV-01`;
- la ausencia actual de nueva pérdida independiente en Rama B;
- la ausencia de dependencia pendiente dentro de los compromisos Product ya seleccionados.

Por tanto:

~~~text
cierre local de compromisos
→ CONSERVADO

evidencia técnica/humana
→ CONSERVADA

OB-80-CONV-01
→ SIGUE SATISFECHA
~~~

Lo que cambia es la inferencia posterior:

~~~text
Product vigente satisfecho
+
sin obligación Product pendiente
+
sin nueva evidencia emergente
≠
proyecto globalmente realizado
~~~

---

# 3. Defecto metodológico identificado

El árbol operativo de Manual 17 permitía:

~~~text
Product vigente satisfecho
↓
reevaluar Product ↔ Platform Vision
↓
sin nuevo fundamento suficiente
↓
estado estable sin nueva actuación
~~~

Ese nodo contenía una reducción ilegítima.

Product tiene autoridad para seleccionar compromisos concretos dentro del proyecto, pero no define por sí solo la totalidad de la finalidad constitutiva.

Por tanto:

~~~text
satisfacción de Product
→ condición necesaria para cerrar
  los compromisos Product vigentes

satisfacción de Product
→ NO condición suficiente
  para declarar agotamiento estratégico
  del proyecto completo
~~~

---

# 4. Diferencia entre Product y finalidad del proyecto

## 4.1 Product vigente

`PRODUCT.md` determina compromisos seleccionados y delimitados.

Cada compromiso puede quedar satisfecho dentro de su alcance sin afirmar que:

- toda Platform Vision esté realizada;
- el producto integrado perseguido exista en grado suficiente;
- todas las actividades representativas de la finalidad constitutiva sean practicables;
- no exista distancia material entre el artefacto actual y la plataforma perseguida.

## 4.2 Project Charter

El Charter establece una finalidad superior:

~~~text
producto digital real
+
útil
+
sostenible
+
evolutivo
+
trabajo intelectual
+
información y contenidos
~~~

Esta finalidad no es una lista de funcionalidades, pero tampoco es ornamental.

Constituye una referencia obligatoria para decidir si el proyecto completo puede considerarse materialmente realizado en grado suficiente.

## 4.3 Platform Vision

Platform Vision tampoco constituye backlog.

Pero sí expresa la dirección de largo plazo de la plataforma.

Por tanto:

~~~text
Platform Vision
≠ backlog

Platform Vision
≠ obligación de implementar
  todas sus posibilidades

pero

Platform Vision
→ referencia necesaria
  para evaluar distancia material
  entre producto actual
  y plataforma perseguida
~~~

---

# 5. El bucle que producía el criterio anterior

La dinámica observada puede reconstruirse así:

~~~text
seleccionar diferencia humana pequeña
↓
delimitar compromiso Product
↓
realizar testigo o integración mínima
↓
satisfacer compromiso en su alcance
↓
cerrar obligación
↓
no aparece nueva pérdida independiente
↓
declarar estado estable
~~~

Aplicado repetidamente, este procedimiento puede producir:

~~~text
convergencia local creciente
+
agotamiento artificial de continuidad
~~~

aunque permanezca una distancia material relevante respecto de la finalidad del proyecto.

Por tanto:

> Un procedimiento correcto para cerrar compromisos locales no es necesariamente suficiente para gobernar la convergencia global del proyecto.

---

# 6. Nueva distinción normativa

Se establecen dos estados diferentes.

## 6.1 Estabilidad local o de ciclo

Puede declararse cuando:

- la obligación o horizonte vigente queda cerrado;
- no quedan dependencias internas de ese ciclo;
- no existe incertidumbre que impida cerrar ese ciclo;
- no aparece evidencia emergente que obligue a reabrirlo.

Resultado posible:

~~~text
CICLO ACTUAL
→ ESTABLE / AGOTADO

siguiente actuación interna al ciclo
→ NINGUNA
~~~

Esto no afirma estabilidad global del proyecto.

## 6.2 Estabilidad global del proyecto

Sólo podrá declararse cuando, además de la estabilidad local, se haya evaluado explícitamente la realización material de la finalidad del proyecto.

Se introduce:

> **GATE-PROJ-01 — suficiencia material respecto de la finalidad del proyecto.**

---

# 7. GATE-PROJ-01

## 7.1 Pregunta

> ¿El producto material existente realiza suficientemente, dentro de un alcance explícito y defendible, la finalidad constitutiva vigente del proyecto y la dirección de plataforma que continúa siendo pertinente?

## 7.2 Condiciones mínimas

Antes de declarar estabilidad global deberán quedar evaluadas, como mínimo:

### GP-01 — Producto material real

~~~text
existe producto digital ejecutable
→ SÍ / NO
~~~

No basta documentación, modelo o testigo aislado.

### GP-02 — Integración material suficiente

~~~text
capacidades relevantes
→ participan en un producto ordinario coherente
  en grado suficiente
~~~

Una colección de realizaciones separadas no equivale automáticamente a plataforma integrada.

### GP-03 — Actividades representativas de la finalidad

Debe poder demostrarse que el producto permite realizar de forma ordinaria un conjunto coherente de actividades suficientemente representativas de la finalidad del Charter.

No exige todas las posibilidades históricas.

### GP-04 — Relación explícita con Platform Vision

Las direcciones centrales todavía pertinentes de Platform Vision deberán quedar, para el estado evaluado:

~~~text
materialmente presentes
o
reducidas justificadamente
o
aplazadas explícitamente
o
descartadas por el cuerpo competente
~~~

No podrán quedar simplemente ignoradas por ausencia de un compromiso Product reciente.

### GP-05 — Distancia material restante

Debe distinguirse:

~~~text
evolución opcional futura
~~~

de:

~~~text
constitución todavía incompleta
de la clase de plataforma perseguida
~~~

La estabilidad global sólo es posible en el primer caso.

### GP-06 — Coherencia entre cierre local y finalidad superior

No deberá existir una contradicción no resuelta del tipo:

~~~text
Product actual
→ satisfecho

pero

producto material
→ todavía no permite
  realizar suficientemente
  la clase de actividad
  que justifica la existencia del proyecto
~~~

---

# 8. Salidas de GATE-PROJ-01

## A — SATISFECHO

~~~text
GATE-PROJ-01
→ SATISFECHO
~~~

Permite, junto con el resto de condiciones del Manual, declarar:

~~~text
ESTABILIDAD GLOBAL DEL PROYECTO
~~~

No implica clausura irreversible ni producto perfecto.

## B — NO SATISFECHO

~~~text
GATE-PROJ-01
→ NO SATISFECHO
~~~

Consecuencia:

~~~text
ciclo local
→ puede estar cerrado

proyecto global
→ NO estable

distancia material
→ debe reducirse
  hasta una siguiente actuación finita
  y verificable
~~~

No autoriza convertir Platform Vision en backlog.

## C — NO DETERMINADO

~~~text
GATE-PROJ-01
→ NO DETERMINADO
~~~

Consecuencia:

~~~text
estabilidad global
→ NO declarable

siguiente actuación
→ auditoría mínima
  de distancia material
  Charter ↔ Platform Vision ↔ Product ↔ producto existente
~~~

---

# 9. Regla contra el feature creep

La corrección no transforma la amplitud del Charter o Platform Vision en obligaciones automáticas.

La dirección prohibida sigue siendo:

~~~text
Platform Vision contiene capacidad X
↓
implementar X
~~~

La dirección válida pasa a ser:

~~~text
finalidad constitutiva
+
producto material actual
↓
distancia material demostrada
↓
reducción
↓
objetivo finito
↓
Product / horizonte / actuación competente
~~~

Por tanto, la corrección evita simultáneamente:

~~~text
falso cierre global
~~~

y:

~~~text
roadmap infinito derivado de Vision
~~~

---

# 10. Relectura de los cierres recientes

## 10.1 OB-80-CONV-01

Permanece:

~~~text
OB-80-CONV-01
→ SATISFECHA
~~~

## 10.2 Documento 94

Su comprobación de Rama A, Rama B, seis fuentes de continuidad y ausencia de nueva obligación dentro del Product vigente permanece válida.

Se corrige únicamente su alcance:

~~~text
"ESTADO ESTABLE"
→ debe leerse como
  ESTABILIDAD LOCAL DEL CICLO
  POST-OB-80-CONV-01
~~~

No había sido aplicado todavía `GATE-PROJ-01`.

## 10.3 Documento 95

La ausencia de activadores externos sigue siendo válida.

Pero:

~~~text
0 / 5 activadores externos
→ no demuestra estabilidad global

sólo demuestra
→ ausencia de reapertura por esa fuente concreta
~~~

---

# 11. Estado actual después de la corrección

Hechos conservados:

~~~text
OB-80-CONV-01
→ SATISFECHA

compromisos Product vigentes
→ satisfechos en sus alcances demostrados

Rama A local
→ sin continuidad pendiente

Rama B
→ sin nueva diferencia independiente demostrada

ciclo post-OB-80-CONV-01
→ LOCALMENTE ESTABLE
~~~

Pero:

~~~text
GATE-PROJ-01
→ NO EVALUADO

realización material suficiente
de la finalidad global
→ NO DETERMINADA

distancia actual
producto material ↔ plataforma perseguida
→ NO RECONSTRUIDA BAJO ESTE CRITERIO
~~~

Por tanto:

~~~text
ESTABILIDAD GLOBAL DEL PROYECTO
→ NO PUEDE DECLARARSE

estado global
→ INDETERMINADO
  hasta aplicar GATE-PROJ-01
~~~

---

# 12. Siguiente actuación derivada

La corrección metodológica produce una actuación concreta y finita:

> **AUD-PROJ-01 — auditoría de realización material y distancia constitutiva del proyecto.**

Debe contrastar:

~~~text
PROJECT_CHARTER
+
PLATFORM_VISION
+
PRODUCT
+
producto ordinario material existente
+
recorridos efectivamente integrados
+
evidencia humana disponible
↓
qué finalidad ya está materialmente realizada
↓
qué parte sigue siendo dirección futura opcional
↓
qué distancia sigue siendo constitutiva
↓
si GATE-PROJ-01 puede satisfacerse
~~~

No debe todavía:

- seleccionar una nueva capacidad;
- formular un nuevo Product Value;
- abrir Architecture;
- abrir Implementation;
- convertir Platform Vision en backlog.

---

# 13. Criterio de cierre de AUD-PROJ-01

La auditoría podrá cerrarse cuando permita responder sin ambigüedad:

~~~text
GP-01 → ?
GP-02 → ?
GP-03 → ?
GP-04 → ?
GP-05 → ?
GP-06 → ?

GATE-PROJ-01
→ SATISFECHO
  / NO SATISFECHO
  / NO DETERMINADO POR INCERTIDUMBRE CONCRETA
~~~

Si queda una incertidumbre concreta capaz de cambiar esa salida, sólo entonces se derivará la comprobación mínima necesaria.

---

# 14. Veredicto metodológico

~~~text
criterio anterior
→ INSUFICIENTE PARA ESTABILIDAD GLOBAL

satisfacción de Product
→ necesaria pero no suficiente

seis fuentes de continuidad
→ suficientes para estabilidad local del ciclo
→ no suficientes para estabilidad global

GATE-PROJ-01
→ INTRODUCIDO

94
→ reclasificado como cierre local

95
→ conserva sus resultados
  sin probar estabilidad global

estado global actual
→ NO DETERMINADO

siguiente actuación estratégica
→ AUD-PROJ-01
~~~
