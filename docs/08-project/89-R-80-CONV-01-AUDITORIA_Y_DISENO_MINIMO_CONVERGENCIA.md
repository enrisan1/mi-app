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


---

# 17. Criterios de satisfacción ordinaria

La satisfacción ordinaria no exige copiar literalmente las Realizations.

Exige que el resultado humano comprometido sea practicable desde el producto
ordinario y que las fronteras constitutivas ya demostradas permanezcan
observables.

## 17.1 CSO-80-01 — captura inmediata

`C-PV-80-01` podrá considerarse suficientemente disponible ordinariamente
cuando se cumplan conjuntamente:

1. existe una actividad/trabajo ordinario identificable en curso;
2. desde esa misma situación puede invocarse una captura breve sin sustituir
   materialmente la actividad principal;
3. sólo una acción humana explícita conserva la aportación;
4. la captura conserva una referencia temporal suficiente;
5. conservarla no modifica automáticamente el contenido de la actividad;
6. después de capturar, la actividad previa continúa inmediatamente disponible;
7. la captura queda recuperable posteriormente desde el producto ordinario;
8. recuperar la captura no exige convertirla automáticamente en contenido,
   clasificación, tarea o instrucción de IA.

No se exige todavía:

- búsqueda universal;
- taxonomía;
- inbox;
- captura externa;
- multimodalidad.

Falsador ordinario principal:

~~~text
capturar o recuperar
→ obliga a abandonar materialmente
  el trabajo ordinario
~~~

o:

~~~text
captura
→ se incorpora automáticamente
  al contenido de la obra
~~~

---

## 17.2 CSO-80-02 — comparación humana

`C-PV-80-02` podrá considerarse suficientemente disponible ordinariamente
cuando:

1. la persona puede llevar dos materiales textuales relacionados del producto
   ordinario a una misma actividad comparativa;
2. ambos permanecen distinguibles;
3. la presentación es suficientemente simultánea para evitar reconstrucción
   secuencial relevante;
4. las diferencias presentadas son inspeccionables y verificables respecto de
   sus fuentes;
5. el sistema no decide qué diferencia es pertinente ni qué versión debe
   prevalecer;
6. la persona puede determinar la actuación posterior;
7. salir de la comparación no destruye ni colapsa indebidamente las fuentes.

La disponibilidad ordinaria de comparación **no exige por sí sola** que toda
operación experimental R5 quede convertida en función de producto.

Si el producto ofrece ejecución de cambios desde la comparación, entonces sí
deberá conservar:

~~~text
decisión humana previa
+
ejecución determinada
+
resultado verificable
+
reversión suficiente cuando corresponda
~~~

No se exige:

- comparación semántica;
- merge automático;
- destino libre arbitrario;
- control de versiones universal.

Falsador principal:

~~~text
comparar
→ obliga a alternar secuencialmente
  hasta perder la simultaneidad suficiente
~~~

o:

~~~text
detección
→ decide por la persona qué debe conservarse
~~~

---

## 17.3 CSO-80-03 — identidad autoral elegible

`C-PV-80-03` podrá considerarse suficientemente disponible ordinariamente
cuando:

1. existe una identidad operativa principal identificable;
2. existe al menos una identidad autoral reutilizable distinta;
3. una obra ordinaria identificable puede asociarse mediante elección explícita
   a una identidad autoral;
4. seleccionar autoría no modifica el contenido de la obra;
5. seleccionar autoría no modifica la identidad operativa;
6. una misma identidad autoral puede reutilizarse en otra obra sin recrearla
   como texto nuevo;
7. obras distintas pueden conservar autorías distintas;
8. la asociación obra↔autoría sobrevive al ciclo ordinario de recuperación que
   corresponda.

No se exige:

- autenticación;
- identidad legal;
- anonimato fuerte;
- reputación;
- múltiples cuentas.

Falsador principal:

~~~text
identidad operativa
→ determina forzosamente la firma
~~~

o:

~~~text
alias
→ sólo texto efímero no reutilizable
~~~

---

## 17.4 CSO-80-04 — apoyo auxiliar de IA separado

`C-PV-80-04` podrá considerarse suficientemente disponible ordinariamente
cuando:

1. existe una obra ordinaria identificable en curso;
2. la persona puede solicitar opcionalmente al menos una aportación auxiliar
   realmente procedente de IA para esa obra;
3. el apoyo queda asociado de forma reconocible a la obra correspondiente;
4. obra y apoyo permanecen en estados funcionalmente distinguibles;
5. recibir, consultar o conservar el apoyo no modifica automáticamente la obra;
6. editar la obra no obliga a editar ni elimina el apoyo;
7. la persona puede reconocer suficientemente la procedencia auxiliar IA;
8. recuperar la obra no exige tratar el apoyo como parte de su contenido;
9. el producto no atribuye automáticamente el apoyo IA a la identidad autoral
   elegida para la obra.

No se exige:

- generación continua;
- agente autónomo;
- múltiples modelos;
- razonamiento interno;
- incorporación automática;
- conservación indefinida.

Falsador principal:

~~~text
solicitar/recibir apoyo IA
→ inserta automáticamente el apoyo
  en el contenido de la obra
~~~

o:

~~~text
autoría de la obra
→ absorbe la procedencia del apoyo IA
~~~

---

# 18. Q5 — reducción de estado y persistencia

La persistencia no debe unificarse por anticipado.

La reducción mínima es:

| Compromiso | Estado que debe persistir | Puede compartir `ordinary.materials` | Debe conservar estado propio |
| --- | --- | --- | --- |
| C-PV-80-01 | capturas + referencia temporal | puede reutilizar el contexto/material actual | SÍ, porque captura ≠ obra |
| C-PV-80-02 | fuentes seleccionadas sólo si la continuidad ordinaria lo exige | SÍ como origen de documentos | SÍ para estado comparativo transitorio si se persiste |
| C-PV-80-03 | identidades reutilizables + asociación obra↔autoría | la obra puede proceder del sustrato ordinario | SÍ para metadato autoral |
| C-PV-80-04 | apoyo IA asociado + procedencia suficiente | la obra puede proceder del sustrato ordinario | SÍ, porque apoyo ≠ obra |

Regla:

~~~text
sustrato compartido
→ SÍ

almacenamiento único indiferenciado
→ NO derivado
~~~

No se introduce todavía un repositorio universal ni un esquema único de obra.

Q5 queda suficientemente reducida para comenzar integración incremental.

---

# 19. Derivación del primer hito verificable

No existe dependencia constitutiva que imponga qué compromiso debe integrarse
primero.

Se comparan por:

1. tamaño mínimo del cambio;
2. reutilización del sustrato ordinario;
3. reversibilidad;
4. riesgo de acoplamiento;
5. capacidad de validar el patrón de convergencia;
6. dependencia técnica adicional.

## 19.1 C-PV-80-01

Ventajas:

- reutiliza una actividad ordinaria ya existente;
- puede reutilizar persistencia local sin cambiar el modelo de obra;
- no requiere dependencia nueva;
- mantiene estado propio pequeño;
- permite comprobar por primera vez que una capacidad post-KGV puede coexistir
  con App sin alterar el trabajo actual;
- es fácilmente reversible.

Riesgo principal:

- confundir captura con `ordinary.materials` o incorporarla automáticamente al
  trabajo.

## 19.2 C-PV-80-03

Ventajas:

- realización pequeña y ya demostrada;
- sin dependencia externa.

Mayor coste de convergencia:

- requiere decidir qué objeto ordinario cuenta como “obra” para conservar la
  asociación obra↔autoría;
- introduce metadato persistente asociado a obras.

No debe resolverse antes de observar cómo se integra una capacidad post-KGV
simple alrededor del sustrato actual.

## 19.3 C-PV-80-04

Ventajas:

- frontera funcional ya muy bien definida.

Mayor coste:

- la disponibilidad ordinaria real exige una aportación realmente IA asociada
  a una obra, no sólo fixture experimental;
- introduce procedencia y estado auxiliar;
- debe coordinarse cuidadosamente con autoría sin absorberla.

## 19.4 C-PV-80-02

Es la integración con mayor superficie:

- dos materiales;
- UI comparativa especializada;
- dependencia CodeMirror ya incorporada al repositorio pero no al recorrido
  ordinario;
- navegación/detección;
- posibles operaciones de ejecución;
- mayor riesgo de convertir el harness en arquitectura accidental.

No existe razón para usarla como primera prueba de convergencia.

---

# 20. Primer hito — HITO-80-CONV-01

**HITO-80-CONV-01 — captura contextual ordinaria sin regresión del recorrido vigente.**

El hito se alcanza cuando `C-PV-80-01` satisface `CSO-80-01` dentro del
recorrido ordinario de `App`, conservando el comportamiento previo relevante.

Debe demostrar:

~~~text
App ordinaria
+
actividad actual
↓
captura contextual invocable
↓
aportación breve conservada
+
marca temporal
+
actividad no sustituida
+
captura recuperable
+
sin incorporación automática
↓
recorrido ordinario previo
→ sigue funcionando
~~~

No exige todavía:

- integrar 80-02;
- integrar 80-03;
- integrar 80-04;
- reorganizar App;
- crear arquitectura definitiva;
- unificar almacenamiento.

## 20.1 Criterio verificable del hito

El hito queda satisfecho si:

1. todos los observables de `CSO-80-01` pasan en tests de integración de App;
2. la suite existente de App relevante permanece verde;
3. la captura no altera las claves/estados ordinarios salvo el estado propio
   explícitamente introducido;
4. existe contraste humano breve que confirme que la captura sigue siendo
   contextual dentro de la experiencia ordinaria;
5. no aparece una regresión material en creación, recuperación o continuación
   ordinaria.

---

# 21. Orden mínimo de integración

El orden propuesto es:

~~~text
1. C-PV-80-01 — captura inmediata
2. C-PV-80-03 — identidad autoral elegible
3. C-PV-80-04 — apoyo IA separado
4. C-PV-80-02 — comparación humana
~~~

Este orden **no expresa importancia**.

Expresa reducción de riesgo.

## 21.1 Por qué 80-01 primero

Valida el patrón mínimo:

~~~text
capacidad post-KGV
+
App existente
→ coexistencia sin regresión
~~~

con el menor cambio de estado.

## 21.2 Por qué 80-03 después

Una vez validado el patrón de integración incremental, puede introducirse
metadato persistente asociado a una obra.

Eso ayuda además a fijar una noción operativa mínima de obra sin universalizarla.

## 21.3 Por qué 80-04 después de 80-03

80-04 necesita una obra identificable y debe conservar explícitamente:

~~~text
autoría de obra
≠
procedencia IA
~~~

No existe dependencia constitutiva entre ambos, pero integrar primero la
identidad autoral permite comprobar después esa separación dentro de una obra
ordinaria ya enriquecida.

Esto es una **ventaja de secuencia**, no una dependencia normativa.

## 21.4 Por qué 80-02 al final

La comparación tiene mayor complejidad de interacción y estado.

Integrarla después permite reutilizar un producto ordinario ya enriquecido sin
hacer que CodeMirror determine prematuramente la estructura de App.

---

# 22. Falsadores de la estrategia de convergencia

El orden o el hito deberán revisarse si aparece cualquiera de estos casos:

1. integrar captura exige modificar de forma amplia el modelo ordinario de obra;
2. la captura sólo puede satisfacerse fusionándola con `ordinary.materials` y
   perdiendo su estatuto propio;
3. una regresión de App demuestra que 80-01 no es el cambio menos acoplado;
4. 80-03 exige una definición general de obra no justificada;
5. 80-04 exige proveedor/arquitectura cuya decisión deba resolverse antes de
   poder formular un test integrable;
6. 80-02 revela una dependencia material previa que contradiga el grafo actual;
7. cualquier integración colapsa una frontera constitutiva documentada en §14.

---

# 23. Cierre de Q6, Q7 y Q8

~~~text
Q5 — estado/persistencia
→ SUFICIENTEMENTE REDUCIDA

Q6 — satisfacción ordinaria
→ RESUELTA
→ CSO-80-01…04 definidos

Q7 — primer hito
→ RESUELTA
→ HITO-80-CONV-01

Q8 — orden mínimo
→ RESUELTA
→ 80-01 → 80-03 → 80-04 → 80-02
~~~

No permanece una incertidumbre estratégica que impida comenzar la primera
integración.

---

# 24. Evaluación de CR-80-CONV-01

| Condición | Estado |
| --- | --- |
| mapa de disponibilidad ordinaria | SATISFECHO |
| matriz composición/separación | SATISFECHA |
| dependencias reales | SATISFECHAS / ninguna arista constitutiva |
| criterios por compromiso | SATISFECHOS — CSO-80-01…04 |
| primer hito | SATISFECHO — HITO-80-CONV-01 |
| orden mínimo | SATISFECHO |
| falsadores | DEFINIDOS |
| incertidumbre bloqueante | NINGUNA IDENTIFICADA |

Resultado:

~~~text
CR-80-CONV-01
→ SATISFECHO
~~~

---

# 25. Cierre de R-80-CONV-01

~~~text
R-80-CONV-01
→ CERRADA

resultado
→ existe recorrido convergente mínimo

primer hito
→ HITO-80-CONV-01

primera integración derivable
→ C-PV-80-01 en App ordinaria

producción modificada durante R-80-CONV-01
→ NO
~~~

La siguiente actuación constructiva deberá formularse bajo PM-10 y quedar
limitada a HITO-80-CONV-01.

No autoriza todavía la integración simultánea de los otros tres compromisos.
