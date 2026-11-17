# R-80-CONV-01 — Auditoría y diseño mínimo de convergencia post-KGV

**Fecha:** 17/11/2026  
**Estado:** ABIERTA.  
**Obligación:** `OB-80-CONV-01`.  
**Alcance:** auditoría y diseño; producción no modificada.

---

# 1. Objetivo

Determinar la forma mínima y coherente mediante la que los compromisos
`C-PV-80-01…C-PV-80-04` puedan quedar suficientemente disponibles en el
recorrido ordinario del producto, sin convertir automáticamente los testigos
experimentales existentes en arquitectura final.

---

# 2. Entradas

La actuación deberá contrastar conjuntamente:

~~~text
src/App.tsx
src/main.tsx
+
C-PV-80-01…04
+
Realizations post-KGV demostradas
+
estrategia de convergencia vigente
+
PM-10
~~~

Patrimonio realizativo relevante:

~~~text
C-PV-80-01
→ src/realizations/capture/ContextualCaptureExperience.tsx

C-PV-80-02
→ src/realizations/comparison/*
  + harness CodeMirror

C-PV-80-03
→ src/realizations/author-identity/AuthorIdentityExperience.tsx

C-PV-80-04
→ src/realizations/ai-support/SeparatedAiSupportExperience.tsx
~~~

---

# 3. Preguntas de auditoría

## Q1 — disponibilidad ordinaria

¿Qué parte de cada compromiso ya está mediada por el recorrido ordinario y qué
parte no?

## Q2 — composición

¿Qué compromisos pueden participar razonablemente en una misma trayectoria
humana sin perder su diferencia constitutiva?

## Q3 — separaciones necesarias

¿Qué elementos deben seguir separados aunque converjan en el mismo producto?

## Q4 — dependencias

¿Qué dependencia real existe entre captura, comparación, identidad autoral y
apoyo IA?

## Q5 — estado y persistencia

¿Qué estados pueden compartir soporte y cuáles requieren independencia para no
introducir acoplamientos artificiales?

## Q6 — satisfacción ordinaria

¿Qué observable mínimo permite declarar que cada compromiso está
suficientemente disponible en producto ordinario?

## Q7 — hito

¿Cuál es el primer hito mínimo verificable de convergencia?

## Q8 — orden

¿Qué secuencia de integración evita sobreconstrucción y conserva reversibilidad?

---

# 4. No-alcance

R-80-CONV-01 no autoriza:

- modificar `App.tsx`;
- modificar `main.tsx`;
- integrar componentes;
- añadir rutas;
- añadir dependencias;
- cambiar almacenamiento;
- definir arquitectura definitiva;
- desplegar;
- ni cerrar productización.

---

# 5. Evidencia necesaria

La actuación sólo podrá cerrarse cuando exista:

1. mapa explícito de disponibilidad ordinaria actual;
2. matriz de composición/separación entre C-PV-80-01…04;
3. dependencias reales y no supuestas;
4. criterios de satisfacción ordinaria por compromiso;
5. primer hito verificable;
6. orden mínimo de integración;
7. falsadores que impedirían declarar convergencia suficiente;
8. ausencia de incertidumbre bloqueante para comenzar la primera integración.

---

# 6. Posibles resultados

~~~text
A — existe recorrido convergente mínimo
→ derivar primer hito y actuación constructiva

B — parte de los compromisos ya está ordinariamente satisfecha
→ reducir alcance de convergencia

C — aparece incompatibilidad material
→ abrir investigación localizada

D — no puede justificarse convergencia coherente
→ revisar OB-80-CONV-01
~~~

---

# 7. Criterio de cierre — CR-80-CONV-01

R-80-CONV-01 podrá cerrarse cuando:

~~~text
mapa actual
+
composición/separación
+
dependencias
+
criterios por compromiso
+
hito mínimo
+
orden de integración
+
falsadores
↓
sean suficientes para comenzar
una primera actuación constructiva
sin presuponer arquitectura final
~~~

---

# 8. Estado de apertura

~~~text
OB-80-CONV-01
→ ACEPTADA

R-80-CONV-01
→ ABIERTA

producción
→ SIN CAMBIOS

siguiente paso
→ auditar disponibilidad ordinaria y relaciones
  entre los cuatro compromisos
~~~


---

# 9. Auditoría de disponibilidad ordinaria

Se contrasta el recorrido ordinario real de `src/App.tsx` y `src/main.tsx`
frente a los compromisos y a sus Realizations.

## 9.1 C-PV-80-01 — captura inmediata

### Patrimonio existente

El producto ordinario ya posee:

- una actividad textual en curso;
- persistencia de materiales ordinarios;
- recuperación posterior de esos materiales.

Pero no ofrece durante esa actividad una operación equivalente a:

~~~text
idea emergente
→ captura breve
→ conservación
→ retorno inmediato a la actividad
~~~

sin recorrer el flujo normal de creación/continuación.

`ContextualCaptureExperience` sí demuestra esa frontera.

Resultado:

~~~text
disponibilidad ordinaria plena
→ NO

patrimonio reutilizable
→ actividad en curso + ordinary.materials

diferencia pendiente
→ operación contextual de captura de baja fricción
~~~

## 9.2 C-PV-80-02 — comparación humana

### Patrimonio existente

`App` permite:

- conservar múltiples materiales;
- examinarlos;
- seleccionar uno;
- continuar desde él.

Pero esa actividad es secuencial.

No existe en el recorrido ordinario:

- presentación suficientemente simultánea de dos textos relacionados;
- navegación coordinada de diferencias;
- ejecución determinada A→B/B→A;
- composición parcial en contexto comparativo.

El patrimonio CodeMirror demuestra esas propiedades fuera del producto
ordinario.

Resultado:

~~~text
disponibilidad ordinaria plena
→ NO

patrimonio reutilizable
→ ordinary.materials como posibles fuentes

diferencia pendiente
→ actividad comparativa simultánea y verificable
~~~

## 9.3 C-PV-80-03 — identidad autoral elegible

### Patrimonio existente

`App` constituye trabajos y materiales, pero no mantiene una separación
observable entre:

~~~text
identidad operativa
≠
identidad autoral reutilizable elegible
~~~

`AuthorIdentityExperience` sí demuestra esa diferencia.

Resultado:

~~~text
disponibilidad ordinaria plena
→ NO

patrimonio reutilizable
→ noción ordinaria de trabajo/obra

diferencia pendiente
→ identidad autoral reutilizable asociable por obra
~~~

## 9.4 C-PV-80-04 — apoyo IA separado

### Patrimonio existente

`App` contiene una acción `Solicitar asistencia` en el caso del problema
intelectual inicial.

Ese antecedente demuestra que puede mostrarse asistencia separada de un texto,
pero no satisface el compromiso post-KGV porque:

- no está asociada a una obra editable en curso;
- no constituye un estado auxiliar persistible asociado a esa obra;
- no demuestra la misma frontera funcional validada por R-80-04-M1.

`SeparatedAiSupportExperience` sí demuestra dicha frontera.

Resultado:

~~~text
disponibilidad ordinaria plena
→ NO

patrimonio reutilizable
→ patrón existente de asistencia bajo solicitud

diferencia pendiente
→ apoyo IA asociado a obra y funcionalmente separado
~~~

---

# 10. Matriz de disponibilidad

| Compromiso | Disponible ordinariamente | Patrimonio ordinario reutilizable | Diferencia pendiente |
| --- | --- | --- | --- |
| C-PV-80-01 | NO | actividad actual + ordinary.materials | captura contextual de baja fricción |
| C-PV-80-02 | NO | pluralidad de materiales | comparación simultánea/verificable |
| C-PV-80-03 | NO | trabajo/obra ordinaria | identidad autoral reutilizable por obra |
| C-PV-80-04 | NO | asistencia bajo solicitud + trabajo textual | apoyo IA asociado y separado de obra |

No aparece ninguna fila que pueda cerrarse por equivalencia ordinaria como
ocurrió con C-PV-POST-01.

---

# 11. Matriz de composición y separación

Leyenda:

~~~text
C
→ composición natural posible

S
→ separación funcional necesaria

I
→ independencia; coexistencia posible sin dependencia

C/S
→ pueden compartir contexto pero deben mantener frontera propia
~~~

| | 80-01 Captura | 80-02 Comparación | 80-03 Autoría | 80-04 Apoyo IA |
| --- | --- | --- | --- | --- |
| **80-01 Captura** | — | I | I | C/S |
| **80-02 Comparación** | I | — | I | C/S |
| **80-03 Autoría** | I | I | — | C/S |
| **80-04 Apoyo IA** | C/S | C/S | C/S | — |

## 11.1 Captura ↔ comparación

No existe dependencia constitutiva.

Una captura podría convertirse posteriormente en material comparado, pero la
comparación no requiere que sus documentos procedan de captura contextual y la
captura no requiere comparación.

~~~text
relación
→ INDEPENDENCIA
~~~

## 11.2 Captura ↔ identidad autoral

La captura conserva una aportación emergente antes de que necesariamente exista
una obra constituida.

Asignarle autoría en el momento de captura ampliaría C-PV-80-01 sin fundamento.

~~~text
relación
→ INDEPENDENCIA
~~~

## 11.3 Captura ↔ apoyo IA

Pueden coexistir durante una misma actividad:

~~~text
obra en curso
+
apoyo IA separado
+
captura de una idea emergente
~~~

pero el contenido capturado no debe confundirse automáticamente con apoyo IA,
ni el apoyo IA debe convertirse en captura humana.

~~~text
relación
→ COMPOSICIÓN DE CONTEXTO
+
SEPARACIÓN DE PROCEDENCIA/ESTATUTO
~~~

## 11.4 Comparación ↔ identidad autoral

Dos obras comparadas pueden tener identidades autorales, pero C-PV-80-02 no
necesita identidad autoral para existir y C-PV-80-03 no necesita comparación.

~~~text
relación
→ INDEPENDENCIA
~~~

## 11.5 Comparación ↔ apoyo IA

Existe patrimonio previo donde apoyo auxiliar puede participar en detección.

Pero la realización cerrada de C-PV-80-02 preservó:

~~~text
F1 detectar
→ sistema posible

F2 juzgar pertinencia
→ persona

F3 decidir actuación
→ persona
~~~

Por tanto, integrar apoyo IA dentro de comparación es posible, no obligatorio.

Si coexistieran:

~~~text
detección/apoyo IA
≠
documento A
≠
documento B
≠
decisión humana
~~~

~~~text
relación
→ COMPOSICIÓN POSIBLE
+
SEPARACIÓN NECESARIA
~~~

## 11.6 Identidad autoral ↔ apoyo IA

Pueden coexistir en una misma obra, pero la identidad autoral elegida para la
obra no debe atribuir automáticamente el apoyo IA a esa identidad.

~~~text
obra
→ identidad autoral elegida

apoyo IA
→ procedencia auxiliar propia
→ fuera del estatuto de contenido
~~~

~~~text
relación
→ COMPOSICIÓN DE CONTEXTO
+
SEPARACIÓN AUTORAL NECESARIA
~~~

---

# 12. Matriz de dependencias

Se distingue:

~~~text
dependencia constitutiva
→ sin X no puede satisfacerse Y

sustrato compartido
→ X e Y pueden reutilizar elementos comunes
  sin que uno sea requisito del otro
~~~

| Compromiso | Dependencia constitutiva de otro C-PV-80-* | Sustrato ordinario necesario |
| --- | --- | --- |
| C-PV-80-01 | ninguna | actividad en curso + persistencia mínima de captura |
| C-PV-80-02 | ninguna | dos materiales textuales relacionados + superficie comparativa |
| C-PV-80-03 | ninguna | obra identificable + identidad operativa/autoral |
| C-PV-80-04 | ninguna | obra en curso + estado auxiliar IA separado |

Resultado:

~~~text
grafo constitutivo entre C-PV-80-01…04
→ SIN ARISTAS NECESARIAS
~~~

Esto impide justificar un orden de integración por dependencia lógica entre los
cuatro compromisos.

---

# 13. Sustrato convergente común

Aunque no existan dependencias entre compromisos, tres elementos del producto
ordinario pueden actuar como sustrato común:

~~~text
1. actividad/trabajo en curso

2. materiales ordinarios identificables

3. persistencia local ya utilizada por el producto
~~~

La convergencia no debe crear por anticipado una entidad universal nueva.

La hipótesis mínima es:

~~~text
App ordinaria
→ conserva su recorrido actual

capacidades post-KGV
→ se incorporan alrededor de los objetos/situaciones ya existentes
  cuando el compromiso lo necesita

sin exigir
→ un modelo de datos unificado total
~~~

---

# 14. Separaciones que no deben perderse durante convergencia

La matriz obliga a conservar al menos:

~~~text
captura humana
≠
apoyo IA

obra
≠
apoyo IA

identidad operativa
≠
identidad autoral

identidad autoral de la obra
≠
procedencia del apoyo IA

documento A
≠
documento B

detección auxiliar
≠
juicio de pertinencia

decisión humana
≠
ejecución automática
~~~

Una convergencia que colapse cualquiera de estas fronteras falsaría patrimonio
ya demostrado.

---

# 15. Conclusión de la auditoría

La auditoría produce cuatro resultados:

~~~text
1. ninguno de C-PV-80-01…04
   está suficientemente disponible hoy
   en el recorrido ordinario

2. ninguno depende constitutivamente
   de otro compromiso post-KGV

3. existe sustrato ordinario reutilizable
   suficiente para evitar construir
   cuatro productos paralelos

4. la convergencia debe ser compositiva,
   no fusional:
   compartir contexto cuando aporte valor
   conservando fronteras constitutivas
~~~

La ausencia de dependencias entre los cuatro compromisos significa que el orden
de integración deberá derivarse por:

- mínima modificación;
- reversibilidad;
- capacidad de validar el sustrato común;
- riesgo de acoplamiento;
- y valor para desbloquear las siguientes integraciones;

no por una dependencia lógica inexistente.

---

# 16. Estado tras auditoría y matriz

~~~text
Q1 — disponibilidad ordinaria
→ RESUELTA

Q2 — composición
→ RESUELTA en primera reducción

Q3 — separaciones necesarias
→ RESUELTA en primera reducción

Q4 — dependencias
→ RESUELTA

Q5 — estado/persistencia
→ parcialmente reducida:
   existe sustrato común,
   falta decidir uso mínimo por compromiso

Q6 — satisfacción ordinaria
→ PENDIENTE de formulación explícita

Q7 — primer hito
→ PENDIENTE

Q8 — orden de integración
→ PENDIENTE
~~~

R-80-CONV-01 permanece ABIERTA.

La siguiente actuación dentro de esta misma auditoría es formular los criterios
de satisfacción ordinaria por compromiso y, a partir de ellos, derivar el
primer hito verificable y el orden mínimo de integración.
