# EVAL-CE-MIAPP-01 — Evaluación de CI-MIAPP-01 frente a Product y capacidad material

**Fecha:** 19/11/2026
**Estado:** CERRADA — RESULTADO B: diferencia absorbida por compromiso vigente, pero insuficientemente realizada en el caso evaluado.
**Candidata evaluada:** [123](123-CI-MIAPP-01_CANDIDATA_ESTADO_EPISTEMOLOGICO_INVESTIGACION.md).

---

# 1. Pregunta

> ¿CI-MIAPP-01 constituye una necesidad Product nueva e independiente, una diferencia ya cubierta por Product pero insuficientemente realizada, o una necesidad ya suficientemente atendida?

Se aplican tres falsadores principales:

~~~text
F1 — absorción por C-PV-POST-01
F2 — absorción por PV-006
F3 — suficiencia material de capacidades actuales
~~~

Las salidas son:

~~~text
A → ya suficientemente atendida
B → compromiso vigente insuficientemente realizado
C → necesidad Product nueva e independiente
~~~

---

# 2. Situación evaluada

CI-MIAPP-01 se formula así:

> Cuando una investigación se desarrolla durante varias sesiones, la persona necesita poder retomar suficientemente no sólo los materiales pertinentes, sino también la distinción entre qué resultados están acreditados, qué afirmaciones permanecen como hipótesis, qué cuestiones siguen abiertas y qué trabajo permanece pendiente, de modo que pueda continuar sin reconstruir desde cero ni confundir el estado intelectual alcanzado.

El valor no depende de una taxonomía literal de cuatro etiquetas.

Lo relevante es que las diferencias epistemológicas todavía pertinentes vuelvan a participar suficientemente en la continuación.

---

# 3. F1 — absorción por C-PV-POST-01

`C-PV-POST-01` selecciona una situación donde:

~~~text
actividad intelectual en curso
→ produce contexto provisional
→ ese contexto sigue siendo pertinente
→ su pérdida obligaría a reconstruir
  parte relevante del trabajo
~~~

y compromete:

~~~text
preservar suficientemente
la participación efectiva
de ese contexto
en la continuación
sin reconstrucción desde cero
~~~

En CI-MIAPP-01, saber:

- qué quedó suficientemente acreditado;
- qué sigue siendo hipótesis;
- qué cuestión permanece abierta;
- qué trabajo queda pendiente;

no es una propiedad ornamental.

Cuando esas distinciones son necesarias para continuar correctamente, forman parte del contexto provisional pertinente.

Contraargumento:

> C-PV-POST-01 no enumera estados epistemológicos ni exige una estructura de investigación.

Respuesta:

Eso no evita la absorción. El compromiso está formulado por función humana y no por representación. Exige preservar aquello del contexto que siga siendo pertinente para la continuación, sin prescribir su forma.

Por tanto:

~~~text
F1 — absorción por C-PV-POST-01
→ CONFIRMADA

CI-MIAPP-01
→ NO independiente respecto de C-PV-POST-01
~~~

Esto descarta Resultado C como salida principal.

---

# 4. Alcance histórico del cierre de C-PV-POST-01

El cierre previo no se interpreta como garantía universal.

71 y 73 establecieron satisfacción:

~~~text
H-POST-01
→ cerrado en alcance aceptado y demostrado

C-PV-POST-01
→ satisfacción realizativa suficiente
  en el alcance demostrado
~~~

El caso ejercitado se centró en relevo contextual y mediación suficiente para continuar.

Por tanto:

~~~text
nuevo caso material
→ puede revelar insuficiencia no ejercitada

sin que ello implique

cierre histórico incorrecto
~~~

---

# 5. F2 — absorción por PV-006

`PV-006` obliga a preservar posibilidades pertinentes:

~~~text
cuando la plataforma introduzca un cambio
que afecte a material o trabajo
~~~

CI-MIAPP-01 puede intersectar con PV-006 cuando, por ejemplo:

- una transformación;
- una sustitución de representación;
- una reorganización;
- una transición gestionada por la plataforma;

hace desaparecer la posibilidad de reconocer el estado epistemológico necesario.

Sin embargo, una simple interrupción temporal entre sesiones no es necesariamente un cambio introducido por la plataforma.

Por tanto PV-006 no absorbe por sí sola toda CI-MIAPP-01.

Resultado:

~~~text
F2 — absorción por PV-006
→ PARCIAL / CONDICIONAL

fundamento principal
→ C-PV-POST-01

fundamento transversal posible
→ PV-006 cuando exista cambio introducido por plataforma
~~~

---

# 6. F3 — suficiencia material de la App ordinaria

Se inspecciona la representación material actual.

## 6.1 Material ordinario

`OrdinaryMaterial` conserva:

~~~text
id
content
antecedentMaterialId?
~~~

No conserva una relación ordinaria explícita entre una afirmación/material y su estatuto dentro de la investigación.

## 6.2 Captura contextual

`ContextualCapture` conserva:

~~~text
id
text
capturedAt
workId?
~~~

Permite capturar texto asociado al trabajo actual, pero no mantiene por sí misma la diferencia entre:

~~~text
resultado acreditado
hipótesis
cuestión abierta
trabajo pendiente
~~~

## 6.3 Antecedentes y continuidad

La App conserva antecedentes y puede reconocer continuidad `W2 ← A`.

Eso demuestra procedencia mínima y continuidad entre materiales, no el estatuto epistemológico operativo de las afirmaciones o cuestiones que participan en una investigación.

## 6.4 HandoffExperience

Existe patrimonio realizativo que representa explícitamente:

~~~text
establishedChecks
openQuestion
nextAction
finalDecisionPending
finalDecision
~~~

Esto demuestra que el proyecto conoce una representación capaz de conservar parte de este tipo de contexto.

Pero:

~~~text
HandoffExperience
→ realización especializada / separada
≠
capacidad ordinaria demostrada de App
~~~

y no basta para declarar satisfecha CI-MIAPP-01 en el recorrido ordinario.

---

# 7. ¿Basta escribir manualmente las etiquetas dentro del texto?

La persona podría escribir literalmente:

~~~text
ACREDITADO: ...
HIPÓTESIS: ...
ABIERTO: ...
PENDIENTE: ...
~~~

dentro de un material o captura.

Eso demuestra que el producto puede **almacenar caracteres** que expresen esas distinciones.

No demuestra por sí solo que la plataforma preserve suficientemente su participación efectiva como contexto operativo.

Para considerar suficiente esa solución habría que demostrar, al menos, que después de una interrupción:

- las distinciones siguen localizables de forma razonable;
- permanecen asociadas al trabajo pertinente;
- pueden intervenir en la continuación sin reconstrucción material relevante;
- no dependen de recordar externamente qué convención se utilizó o dónde quedó escrita;
- y el caso real puede continuar sin volver a inferir el estado desde materiales dispersos.

Actualmente esa demostración no existe.

Por tanto:

~~~text
capacidad genérica de guardar texto
≠
suficiencia demostrada
de continuidad del contexto epistemológico
~~~

---

# 8. Resultado de F3

~~~text
F3 — suficiencia material actual
→ NO DEMOSTRADA
→ INSUFICIENTE PARA EL CASO EVALUADO
~~~

Esta conclusión es localizada.

No afirma que la App necesite una taxonomía fija, un gestor de investigación, etiquetas obligatorias, base de datos nueva ni interfaz concreta.

---

# 9. Decisión A / B / C

## Resultado A — capacidades suficientes

Requeriría demostrar que Product vigente y la App actual permiten ya continuar el caso sin reconstrucción relevante del estado epistemológico.

No se dispone de esa evidencia.

~~~text
A
→ RECHAZADO
~~~

## Resultado C — necesidad nueva e independiente

Requeriría que la diferencia humana no estuviera ya comprometida por Product.

F1 demuestra que, cuando estas distinciones son pertinentes para continuar, quedan comprendidas funcionalmente por C-PV-POST-01.

~~~text
C
→ RECHAZADO
~~~

## Resultado B — compromiso existente insuficientemente realizado

Concurren ambas condiciones:

~~~text
obligación Product aplicable
→ C-PV-POST-01

capacidad material suficiente en caso nuevo
→ NO demostrada
~~~

Por tanto:

> **EVAL-CE-MIAPP-01 → RESULTADO B.**

> **CI-MIAPP-01 no constituye un nuevo compromiso Product; constituye evidencia de una insuficiencia realizativa localizada respecto de C-PV-POST-01 en una investigación documental multi-sesión.**

---

# 10. Diferencia material reducida

Se identifica provisionalmente:

> **GAP-CE-MIAPP-01 — continuidad insuficiente del contexto epistemológico operativo en investigaciones multi-sesión.**

Formulación:

~~~text
materiales pertinentes
→ pueden conservarse

pero

distinción operativa entre
  acreditado / hipótesis / abierto / pendiente
→ no está demostrada como recuperable
  de forma suficiente

tras interrupción
→ puede requerirse reconstrucción relevante
~~~

El gap no prescribe representación.

---

# 11. Falsadores del gap

`GAP-CE-MIAPP-01` deberá cerrarse sin modificación de producto si se demuestra que una trayectoria ordinaria existente permite:

1. establecer durante una investigación al menos dos diferencias epistemológicas pertinentes;
2. interrumpir la actividad;
3. volver al trabajo desde la App ordinaria;
4. reconocer suficientemente esas diferencias y su asociación con el trabajo;
5. continuar una actuación pertinente sin reconstruirlas desde materiales dispersos.

Si esa trayectoria ya existe, el diagnóstico material de esta evaluación quedará refutado.

---

# 12. Consecuencia estratégica

El resultado B introduce evidencia posterior a la declaración de estabilidad global.

Según 122, un resultado B capaz de derivar obligación exige reevaluar esa estabilidad.

Ahora existe:

~~~text
compromiso vigente aplicable
+
insuficiencia material localizada
+
criterio falsable
~~~

Por tanto:

~~~text
ESTABILIDAD GLOBAL
→ YA NO ES EL ESTADO VIGENTE
→ permanece históricamente correcta para el estado anterior

RAMA A
→ REABIERTA
→ por obligación de C-PV-POST-01
~~~

No se deriva todavía una modificación de código.

---

# 13. Siguiente actuación mínima

No corresponde diseñar una solución todavía.

La mínima intervención es:

> **RED-CE-MIAPP-01 — reducir GAP-CE-MIAPP-01 contra las capacidades ordinarias existentes y determinar el criterio mínimo de satisfacción, separando: (a) insuficiencia real, (b) posibilidad ya disponible pero no ejercitada y (c) mecanismo meramente conveniente.**

Debe comenzar por una trayectoria discriminante sobre la App ordinaria antes de derivar Realization o Implementation.

---

# 14. Estado resultante

~~~text
EVAL-CE-MIAPP-01
→ CERRADA

CI-MIAPP-01
→ NO nueva necesidad Product independiente

C-PV-POST-01
→ absorción CONFIRMADA

PV-006
→ absorción PARCIAL / CONDICIONAL

capacidades materiales actuales
→ INSUFICIENCIA DEMOSTRADA EN EL CASO
  salvo falsación mediante trayectoria ordinaria ya existente

resultado
→ B

GAP-CE-MIAPP-01
→ ABIERTO

RAMA A
→ REABIERTA

ESTABILIDAD GLOBAL
→ NO VIGENTE EN EL NUEVO ESTADO

nuevo compromiso Product
→ NO

nuevo horizonte
→ NO

Architecture / Implementation
→ NO DERIVADAS

siguiente actuación
→ RED-CE-MIAPP-01
~~~