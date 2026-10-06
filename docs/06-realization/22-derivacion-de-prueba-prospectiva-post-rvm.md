# Derivación de prueba prospectiva post-RVM

## 1. Propósito

Este documento determina si, tras el cierre de la primera realización vertical mínima post-RCA, existe fundamento positivo para una actuación posterior y, en caso afirmativo, cuál es su alcance mínimo.

La derivación parte exclusivamente del estado cerrado alcanzado por:

```text
21-cierre-de-la-primera-realizacion-vertical-minima-post-rca.md
```

No presupone una siguiente fase del proyecto.

No deriva automáticamente:

- ampliación de la realización;
- ampliación de arquitectura;
- interfaz gráfica;
- persistencia;
- base de datos;
- edición del corpus;
- integración con Git;
- modificación del motor;
- ni una nueva funcionalidad de plataforma.

La cuestión consiste en determinar qué diferencia relevante permanece positivamente justificada después del cierre alcanzado.

---

# 2. Estado de partida

La primera realización vertical mínima post-RCA ha quedado:

```text
DERIVADA
→ CONSTRUIDA
→ PROBADA
→ CORREGIDA
→ SOMETIDA A REGRESIÓN
→ DOCUMENTADA
→ AUDITADA
→ CERRADA EN SU ALCANCE
```

Dentro de ese alcance quedaron satisfechos:

```text
RR-RCA-01
RR-RCA-02
RR-RCA-03

AR-RVM-01…07

SUCCESS-RVM-RCA-01

Valid-RCA
Valid⁺
RF-RCA-01
```

También quedó ejercitado el contrato técnico observable:

```text
exit 0
├── RECOVERY_OK
└── RECOVERY_OK_ZERO_RESULTS

exit 2
├── INPUT_INVALID
└── CORRESPONDENCE_INVALIDATED

exit 3
└── RECOVERY_FAILED

exit 4
└── OUTPUT_WRITE_FAILED
```

No permanecen discrepancias técnicas conocidas dentro del contrato definido para `rca_probe.py`.

No permanecen criterios de aceptación pendientes dentro del alcance de la primera realización vertical mínima.

---

# 3. Pregunta de derivación

Se formula:

## POST-RVM-Q00 — Existencia de una siguiente actuación justificable

> ¿Existe, después del cierre de la primera realización vertical mínima post-RCA, alguna diferencia positivamente demostrada que justifique una nueva actuación?

La respuesta no puede obtenerse mediante:

```text
realización cerrada
→ siguiente fase convencional
```

ni mediante:

```text
existe código experimental
→ continuar desarrollándolo
```

ni mediante:

```text
podría ser útil una capacidad
→ construirla
```

La actuación posterior sólo puede derivarse de una pérdida, diferencia o necesidad actualmente demostrada.

---

# 4. Examen de posibles continuaciones

## 4.1. Nueva responsabilidad estructural

No se ha demostrado ninguna situación perteneciente al alcance actual que requiera una responsabilidad estructural adicional.

Resultado:

```text
nueva responsabilidad
→ NO derivada
```

## 4.2. Ampliación de arquitectura

Los casos ejercitados han podido representarse y sostenerse mediante la arquitectura mínima existente.

No se ha identificado un caso perteneciente al alcance que resulte estructuralmente irrepresentable.

Resultado:

```text
ampliación arquitectónica
→ NO derivada
```

## 4.3. Modificación del motor de recuperación

Los casos utilizados para cerrar la primera realización vertical mínima no han demostrado una nueva insuficiencia específica del motor v2 que deba ser corregida antes de continuar.

Resultado:

```text
modificación del motor v2
→ NO derivada
```

## 4.4. Modificación de `rca_probe.py`

Las incidencias detectadas durante las pruebas fueron corregidas y sometidas a regresión.

El contrato técnico definido ha quedado ejercitado completamente.

Resultado:

```text
modificación de rca_probe.py
→ NO derivada
```

## 4.5. UI, persistencia, base de datos y otras capacidades

No existe evidencia actual que demuestre que cualquiera de estas capacidades sea necesaria para realizar la situación mínima cerrada.

Resultado:

```text
UI
persistencia
base de datos
historial
Git
edición automática
colaboración
usuarios
permisos
→ NO derivados
```

---

# 5. Diferencia residual de evidencia

Aunque la primera realización vertical mínima ha quedado cerrada, la evidencia utilizada para su cierre pertenece a dos familias determinadas.

## 5.1. Casos documentales históricos conocidos

```text
RVM-EXP-01
→ L65

RVM-EXP-02
→ L8
```

Ambos corresponden a situaciones documentales cuya trayectoria histórica era conocida y que pudieron utilizarse como casos de reconstrucción y validación.

## 5.2. Controles técnicos deliberadamente construidos

```text
resultado vacío
fallo instrumental
entrada inválida
pérdida de correspondencia
fallo de escritura
regresión
```

Estos casos fueron construidos expresamente para ejercer el contrato técnico.

## 5.3. Situación todavía no observada

No se ha utilizado todavía la realización cerrada en una situación que cumpla simultáneamente:

```text
aportación documental real
+
aparición prospectiva
+
no utilizada durante la construcción
+
no utilizada durante la corrección
+
no utilizada durante la regresión
+
resultado humano todavía no conocido al comenzar la prueba
+
realización congelada antes de observar el caso
```

Existe por tanto una diferencia entre:

```text
evidencia actualmente disponible
→ histórica + controlada
```

y:

```text
situación ordinaria para la que fue derivada la realización
→ prospectiva
```

Esta diferencia pertenece a la evidencia de transferencia de la realización.

No constituye por sí misma:

- defecto funcional;
- defecto técnico;
- carencia arquitectónica;
- nueva responsabilidad.

---

# 6. Resultado de la derivación positiva

La diferencia residual permite derivar una actuación mínima:

> **Someter la primera realización vertical mínima cerrada a una prueba prospectiva sobre una aportación documental real que no haya sido utilizada durante su construcción, corrección, regresión o cierre.**

La actuación derivada no consiste en desarrollar una nueva realización.

Consiste en utilizar la realización ya cerrada sin modificarla y observar si puede sostener una nueva situación real dentro del alcance para el que fue derivada.

Se establece:

## R-POST-RVM-POS

> Existe fundamento positivo para realizar una prueba prospectiva de transferencia de la primera realización vertical mínima post-RCA antes de derivar nuevas capacidades técnicas o estructurales.

---

# 7. Pregunta experimental prospectiva

Se formula:

## POST-RVM-Q01 — Transferencia a una situación prospectiva

> ¿Puede la primera realización vertical mínima post-RCA, sin modificación de su código, del motor v2 ni de su arquitectura, sostener una nueva situación real de comparación documental no utilizada durante su construcción, corrección, regresión o cierre?

La pregunta termina en la capacidad de constituir una situación utilizable para comparación humana.

No pregunta si la realización puede decidir correctamente qué debe hacerse con la aportación.

---

# 8. Unidad de prueba

La primera ejecución prospectiva deberá utilizar:

```text
1 aportación candidata real
+
1 estado de corpus fijado antes de la comparación
+
la RVM cerrada
```

La candidata no deberá seleccionarse porque se conozca de antemano qué antecedentes debería recuperar.

El estado del corpus deberá fijarse antes de realizar la decisión humana sobre la aportación.

La utilización de una primera candidata no implica que cualquier caso prospectivo individual proporcione necesariamente evidencia suficiente para responder `POST-RVM-Q01`.

Un caso podrá resultar:

```text
concluyente
```

o:

```text
no concluyente
```

sin que esta última posibilidad constituya por sí misma un fallo de la realización.

---

# 9. Condiciones de admisibilidad y selección de la candidata

Para que una candidata pueda utilizarse en la prueba deberá satisfacer:

## CP-PROS-01 — Realidad documental

La candidata debe pertenecer a una situación documental real del trabajo ordinario.

## CP-PROS-02 — Novedad respecto de la RVM

No debe haber sido utilizada durante:

- construcción de `rca_probe.py`;
- corrección de `rca_probe.py`;
- diseño de los criterios;
- regresión;
- cierre documental de la RVM.

## CP-PROS-03 — Ausencia de resultado preparado

No deberá elegirse porque ya se conozca qué ocurrencia concreta debe recuperar la realización.

## CP-PROS-04 — Estado previo disponible

Debe poder fijarse un estado de corpus anterior a cualquier incorporación derivada de la propia candidata.

## CP-PROS-05 — Decisión humana todavía abierta

Al comenzar la ejecución no deberá fijarse como resultado experimental:

```text
incorporar
no incorporar
incorporar parcialmente
eliminar
reformular
```

La decisión permanecerá abierta hasta después de observar la situación producida.

## RS-PROS-01 — Selección no adaptativa

La candidata utilizada será la primera aportación real que, después del cierre y congelación de este protocolo, satisfaga `CP-PROS-01…05` dentro del trabajo documental ordinario.

No podrá descartarse una candidata admisible para sustituirla por otra porque parezca más favorable, más interesante o más adecuada para la realización.

Si varias candidatas admisibles aparecen en una misma situación sin un orden temporal distinguible, se utilizará un criterio contingente independiente de su contenido:

```text
1. ruta documental normalizada en orden lexicográfico;
2. dentro de la misma ruta, línea o referencia documental ascendente.
```

Este criterio sólo resuelve la selección experimental.

No constituye una regla del dominio ni una nueva responsabilidad arquitectónica.

Por tanto:

```text
caso surgido del trabajo ordinario
→ selección según regla previa
```

y no:

```text
resultado deseado
→ búsqueda de un caso favorable
```

---

# 10. Congelación previa

Antes de conocer el resultado de la prueba deberán mantenerse sin modificación:

```text
experiments/r-exp-rca-01/r_exp_rca01_v2.py
experiments/rvm-rca/rca_probe.py
```

También permanecen congelados:

```text
RR-RCA-01…03
AR-RVM-01…07
SUCCESS-RVM-RCA-01
Valid-RCA
Valid⁺
RF-RCA-01
```

Una vez auditado y cerrado este documento, permanecerá igualmente congelado como protocolo previo al caso.

No se permitirá durante la prueba:

- ajustar el motor a la candidata;
- modificar pesos o canales a partir del resultado;
- cambiar el parser;
- modificar la presentación para corregir el caso;
- ampliar la arquitectura;
- introducir una nueva unidad estructural;
- alterar los criterios después de conocer la salida.

Los parámetros técnicos de la primera ejecución deberán quedar fijados antes de observar el resultado.

Cuando no exista una razón previa positivamente justificada para utilizar otro valor, se conservará el parámetro ya empleado en las pruebas de cierre:

```text
--context-lines 4
```

Si aparece una pérdida, primero deberá registrarse.

Sólo después podrá clasificarse y determinarse si justifica una actuación posterior.

---

# 11. Observaciones de transferencia

La prueba no deriva nuevas responsabilidades ni nuevos criterios de aceptación arquitectónicos.

Se observará si los compromisos ya cerrados pueden transferirse a la nueva situación.

## P-RVM-01 — Candidata situada

La candidata debe quedar identificada y vinculada al estado de entrada utilizado.

## P-RVM-02 — Recuperación prospectivamente informativa

Cuando la recuperación produzca uno o más antecedentes, éstos deberán proporcionar material efectivo para la comparación humana si el caso ha de aportar evidencia positiva sobre la utilidad prospectiva de la recuperación.

No se exige exhaustividad.

Una recuperación válida con cero resultados:

```text
RECOVERY_OK_ZERO_RESULTS
```

no constituye:

```text
fallo instrumental
```

ni demuestra:

```text
ausencia de antecedentes
```

Tampoco basta por sí sola para corroborar prospectivamente la utilidad de los antecedentes recuperados.

Si el caso devuelve cero resultados válidos y, como consecuencia, no permite ejercer suficientemente propiedades necesarias para responder `POST-RVM-Q01`, el resultado deberá clasificarse como evidencia prospectiva insuficiente conforme a `N`, y no como fallo de la realización.

## P-RVM-03 — Ocurrencias identificables

Cuando existan antecedentes recuperados, éstos deben mantener referencia a ocurrencias documentales concretas.

## P-RVM-04 — Procedencia y contexto

Cuando existan antecedentes recuperados, su procedencia y contexto deben permanecer disponibles durante la comparación.

## P-RVM-05 — Situación conjunta

La candidata y los antecedentes recuperados, incluidos cero antecedentes cuando ése sea el resultado válido, deben poder mantenerse dentro de la situación instrumental correspondiente.

## P-RVM-06 — Granularidad

Cuando existan relaciones parciales observables, la situación debe permitir examinarlas sin perder el anclaje documental de las partes consideradas.

## P-RVM-07 — Ausencia de reconstrucción instrumental externa significativa

Cuando existan antecedentes recuperados, la persona no debería tener que reconstruir mediante acciones externas la relación básica entre:

```text
candidata
+
antecedentes
+
procedencia
+
contexto
```

## P-RVM-08 — Neutralidad

La realización no debe transformar sus resultados instrumentales en afirmaciones sobre:

- verdad;
- equivalencia;
- novedad;
- redundancia;
- relevancia;
- incorporación;
- eliminación.

## P-RVM-09 — Correspondencia

Las referencias y relaciones sólo podrán mantenerse como válidas mientras permanezca establecida su correspondencia con los estados sobre los que fueron constituidas.

## P-RVM-10 — Frontera humana

La decisión documental posterior deberá permanecer humana.

Estas observaciones no constituyen nuevas responsabilidades.

Son una aplicación prospectiva de compromisos ya consolidados.

---

# 12. Pregunta operacional central

La observación principal de la prueba será:

> **¿Puede una persona realizar la comparación documental utilizando la situación producida por la RVM sin tener que reconstruir externamente las relaciones instrumentales que la realización fue derivada precisamente para hacer disponibles?**

Esta cuestión deberá evaluarse antes de considerar cualquier modificación técnica.

Cuando el caso no produzca material suficiente para ejercerla, la pregunta no deberá responderse artificialmente de forma positiva ni negativa.

Podrá permanecer abierta mediante clasificación `N`.

---

# 13. Clasificación de resultados

Si aparece una pérdida se utilizará la clasificación ya empleada durante la primera realización vertical.

## A — Defecto de realización

La arquitectura y la técnica permiten la situación, pero la realización concreta no conserva o presenta adecuadamente una relación necesaria.

## B — Insuficiencia de técnica

La pérdida pertenece al mecanismo técnico utilizado para realizar una responsabilidad ya derivada.

## C — Insuficiencia del criterio experimental

La observación demuestra que el criterio empleado no permite evaluar correctamente la situación que pretendía evaluar.

## D — Insuficiencia arquitectónica

Aparece una situación positivamente perteneciente al alcance que no puede representarse o sostenerse mediante las responsabilidades, unidades, relaciones o invariantes actualmente disponibles.

La clasificación `D` exige evidencia positiva.

No puede inferirse únicamente porque la realización concreta falle.

## E — Sin pérdida relevante observada

La realización sostiene la situación prospectiva y el caso ejerce suficientemente los compromisos necesarios para responder `POST-RVM-Q01` sin mostrar una nueva pérdida que justifique modificación técnica o estructural.

Este resultado es plenamente válido.

Una prueba prospectiva no está obligada a generar una nueva tarea.

## N — Evidencia prospectiva insuficiente

La ejecución es contractualmente válida, pero el caso no ejerce suficientemente una o varias de las propiedades necesarias para responder `POST-RVM-Q01`.

Puede ocurrir, entre otros supuestos, cuando:

```text
RECOVERY_OK_ZERO_RESULTS
```

impide observar prospectivamente:

```text
utilidad de antecedentes recuperados
+
ocurrencias recuperadas
+
procedencia/contexto de antecedentes
+
comparación granular entre candidata y antecedentes
```

`N` no significa:

```text
fallo técnico
```

ni:

```text
éxito prospectivo
```

ni:

```text
carencia arquitectónica
```

Significa únicamente:

```text
caso válido
+
evidencia insuficiente
→ POST-RVM-Q01 permanece abierta
```

`N` no pertenece a la clasificación A/B/C/D de pérdidas.

Es una clasificación del poder evidencial del caso.

---

# 14. Regla de no actuación durante la prueba

Se establece:

## RP-PROS-01 — Observar antes de modificar

> Ninguna pérdida observada durante la prueba prospectiva autoriza por sí misma una modificación inmediata de la realización, del motor o de la arquitectura.

La secuencia obligatoria será:

```text
observación
        ↓
determinación de suficiencia evidencial
        ↓
si es suficiente:
clasificación A / B / C / D / E

si no es suficiente:
clasificación N
        ↓
determinación de fundamento positivo
        ↓
sólo entonces:
posible actuación
```

No deberá utilizarse:

```text
resultado inesperado
→ modificar código
→ volver a ejecutar
```

porque convertiría la prueba prospectiva en ajuste interactivo al caso.

Una repetición técnica no constituye por sí misma una modificación adaptativa cuando la primera ejecución no haya producido una salida experimental interpretable debido a una incidencia externa o instrumental independiente del contenido del caso.

En tal supuesto:

- deberá conservarse la evidencia de la ejecución fallida;
- deberá registrarse la causa de la repetición;
- no podrá modificarse el motor;
- no podrá modificarse `rca_probe.py`;
- no podrán alterarse los criterios;
- no podrán ajustarse parámetros como respuesta al contenido observado.

Una ejecución válida pero no concluyente clasificada como `N` no autoriza a modificar la realización para convertir el mismo caso en concluyente.

---

# 15. Exclusiones

La prueba prospectiva no autoriza:

- modificar el corpus como parte de la recuperación;
- automatizar la decisión humana;
- crear una interfaz;
- introducir persistencia;
- crear una base de datos;
- registrar automáticamente decisiones;
- modificar Git;
- generalizar la RVM a comparación corpus↔corpus;
- construir gestión general del corpus;
- añadir embeddings;
- modificar el motor v2 durante la prueba;
- ajustar la realización al caso antes de clasificar cualquier pérdida.

---

# 16. Resultado posible de éxito

La prueba podrá considerarse prospectivamente positiva cuando un caso suficientemente informativo permita observar:

```text
candidata real nueva
+
estado previo del corpus
+
RVM cerrada e inalterada
        ↓
situación conjunta disponible
+
antecedentes materialmente útiles
+
ocurrencias identificables
+
procedencia/contexto conservados
+
granularidad utilizable
+
correspondencia conservada
+
frontera humana preservada
+
sin reconstrucción instrumental externa significativa
```

No será necesario que:

```text
todos los antecedentes posibles sean recuperados
```

ni que:

```text
la realización determine la decisión humana correcta
```

ni que:

```text
la técnica quede demostrada como óptima general
```

Una ejecución válida con:

```text
RECOVERY_OK_ZERO_RESULTS
```

no se considerará automáticamente un resultado prospectivamente negativo.

Cuando no permita ejercer suficientemente las propiedades necesarias para responder la pregunta de transferencia se clasificará:

```text
N
→ evidencia prospectiva insuficiente
```

---

# 17. Resultado posible de no éxito o no conclusión

Una prueba prospectiva negativa no implicará automáticamente:

```text
arquitectura incorrecta
```

ni:

```text
motor v2 debe modificarse
```

ni:

```text
RVM cerrada inválida retrospectivamente
```

El resultado deberá clasificarse primero.

Sólo una pérdida que demuestre una insuficiencia estructural dentro del alcance positivamente derivado podrá constituir fundamento para reabrir la arquitectura.

De forma independiente, un caso podrá resultar:

```text
N
→ no concluyente
```

sin que exista pérdida demostrada.

En ese supuesto:

```text
POST-RVM-Q01
→ permanece abierta
```

y no se deriva por ello una modificación de la RVM.

La necesidad de obtener evidencia prospectiva adicional deberá determinarse desde el estado resultante, sin seleccionar retrospectivamente un caso para forzar una conclusión favorable.

---

# 18. Estado de los artefactos antes de la prueba

Después de cerrar y auditar este protocolo, pero antes de seleccionar la candidata, deberá comprobarse y registrar externamente:

```text
SHA-256 de:
docs/06-realization/22-derivacion-de-prueba-prospectiva-post-rvm.md

SHA-256 de:
experiments/r-exp-rca-01/r_exp_rca01_v2.py

SHA-256 de:
experiments/rvm-rca/rca_probe.py
```

La huella de este propio documento no deberá incorporarse dentro de él después de calcularla, porque hacerlo modificaría el archivo cuya correspondencia pretende controlar.

Deberá conservarse como evidencia experimental externa al protocolo cerrado.

Cuando se determine el caso deberán registrarse además:

```text
ruta de la candidata
línea o referencia candidata
SHA-256 del texto candidato
ruta del corpus
SHA-256 del estado de corpus
```

Estas huellas no constituyen unidades arquitectónicas.

Son controles contingentes de correspondencia experimental.

---

# 19. Orden de ejecución

La prueba deberá realizarse en este orden:

```text
1. cerrar y auditar este protocolo
2. registrar externamente las huellas del protocolo, motor y adaptador
3. esperar la primera candidata que satisfaga CP-PROS-01…05
4. aplicar RS-PROS-01 si fuese necesario resolver entre candidatas simultáneas
5. fijar el estado previo del corpus
6. registrar las huellas del caso
7. realizar la primera ejecución prospectiva con la RVM cerrada e inalterada
8. conservar íntegramente la salida y los códigos observados
9. determinar si el caso proporciona evidencia suficiente
10. si es suficiente, realizar la comparación humana y clasificar A/B/C/D/E
11. si no es suficiente, clasificar N
12. sólo después determinar si existe una nueva actuación justificable
```

La candidata no deberá utilizarse para modificar el protocolo antes de ejecutar la prueba.

La expresión:

```text
primera ejecución prospectiva
```

no significa que toda repetición física esté prohibida.

Significa que el resultado de esa primera ejecución no puede utilizarse para adaptar la realización y presentar después una ejecución ajustada como si perteneciera al mismo control prospectivo original.

Las repeticiones debidas a incidencias externas o instrumentales deberán someterse a `RP-PROS-01`.

---

# 20. Condición de cierre de la prueba prospectiva

La prueba podrá cerrar `POST-RVM-Q01` cuando exista evidencia suficiente para responderla y cualquier pérdida observada haya sido clasificada.

El cierre podrá concluir:

```text
E
→ no aparece nueva pérdida relevante
→ transferencia prospectiva corroborada en el caso
→ no se deriva automáticamente nueva actuación
```

o:

```text
A / B / C / D
→ pérdida identificada
→ se examina si existe fundamento positivo
  para una actuación posterior
```

También puede producirse:

```text
N
→ ejecución válida
→ evidencia insuficiente
→ POST-RVM-Q01 permanece abierta
→ no se deriva automáticamente modificación alguna
```

`N` no constituye cierre positivo ni negativo de `POST-RVM-Q01`.

Impide forzar una conclusión cuando el primer caso prospectivo no ejerce suficientemente la propiedad investigada.

Ninguno de estos resultados deberá predeterminarse.

---

# 21. Resultado de esta derivación

La derivación queda establecida como:

```text
primera RVM cerrada
        ↓
pérdida estructural conocida
→ NO

defecto técnico conocido
→ NO

nueva capacidad positivamente exigida
→ NO

diferencia residual de evidencia
→ SÍ

evidencia existente
→ histórica + controlada

situación de destino
→ prospectiva

        ↓

actuación positivamente derivada
→ prueba prospectiva de transferencia
  de la RVM cerrada
```

Por tanto:

> **La siguiente actuación justificable es someter la primera realización vertical mínima post-RCA, sin modificarla, a una prueba prospectiva con una aportación documental real no utilizada durante su desarrollo, corrección, regresión o cierre.**

---

# 22. Consecuencia metodológica

El cierre de esta derivación no obliga a ejecutar inmediatamente una nueva implementación.

Tampoco presupone que la prueba vaya a descubrir una insuficiencia.

Se mantiene:

```text
prueba prospectiva
≠
búsqueda de una excusa para continuar desarrollando
```

La prueba puede legítimamente concluir:

```text
E
→ no se observa pérdida nueva
→ no se deriva automáticamente nueva actuación
```

o:

```text
N
→ el caso no proporciona evidencia suficiente
→ no se fuerza una conclusión
→ no se modifica la RVM por ese solo hecho
```

La continuidad del proyecto deberá seguir dependiendo de evidencia positiva y no de una secuencia convencional de fases.

---

# 23. Estado final

```text
POST-RVM-Q00
→ respondida

diferencia residual
→ evidencia prospectiva todavía no obtenida

R-POST-RVM-POS
→ establecido

POST-RVM-Q01
→ formulada

selección de candidata
→ regla no adaptativa definida

resultado vacío válido
→ distinguido de fallo
→ distinguido de evidencia prospectiva suficiente

resultado no concluyente N
→ definido

primera ejecución
→ no adaptativa
→ repetición técnica excepcional regulada

protocolo
→ deberá congelarse mediante huella externa tras su auditoría

protocolo prospectivo
→ DERIVADO
→ DELIMITADO
→ PREVIO A LA SELECCIÓN DEL CASO

nueva funcionalidad
→ NO derivada

ampliación arquitectónica
→ NO derivada
```

El siguiente paso será auditar y cerrar este protocolo y, una vez cerrado, registrar externamente las huellas del propio protocolo, del motor v2 y de `rca_probe.py` antes de seleccionar la aportación candidata.

---
