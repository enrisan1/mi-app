# Resultado de P-AI-01 y cierre de L-EXT-05

**Estado:** P-AI-01 CERRADA CON RESULTADO FAVORABLE LIMITADO — L-EXT-05 CERRADA CON RESULTADO FAVORABLE LIMITADO

---

# 1. Propósito

Este documento consolida el resultado de la prueba `P-AI-01` y determina si dicho resultado permite cerrar la línea externa `L-EXT-05 — IA verificable`.

La cuestión examinada no consiste en determinar si una inteligencia artificial puede sustituir el juicio humano, operar autónomamente sobre el proyecto o convertirse en fuente de autoridad.

La cuestión es más limitada:

> ¿Existe al menos una tarea concreta del proyecto que una IA pueda realizar o asistir de forma verificable, trazable y reversible, manteniendo fuera del propio modelo la evidencia necesaria para comprobar el resultado?

La prueba se diseñó para examinar esa cuestión en el menor alcance suficiente.

---

# 2. Antecedentes

La comparación externa realizada previamente identificó una oportunidad relacionada con sistemas de IA capaces de:

- buscar;
- extraer;
- clasificar;
- proponer relaciones;
- detectar contradicciones;
- reconstruir procedencia;
- transformar materiales;
- planificar tareas;
- utilizar herramientas.

La existencia externa de estas capacidades no justificaba por sí sola su incorporación al proyecto.

Para que una operación asistida por IA pudiera resultar pertinente debía satisfacer al menos las siguientes condiciones:

1. existir una tarea concreta;
2. disponer de una entrada delimitada;
3. producir una salida examinable;
4. conservar evidencia suficiente para verificarla;
5. permitir detectar el error;
6. admitir abstención cuando la evidencia fuera insuficiente;
7. mantener el resultado como propuesta hasta su validación;
8. no convertir la memoria implícita del modelo en fuente de procedencia.

De esta reducción se derivó `P-AI-01`.

---

# 3. Principio metodológico de partida

La prueba se construyó bajo el siguiente principio:

```text
IA
→ propone

evidencia
→ permite comprobar

humano
→ valida

sistema
→ consolida
```

Este orden es parte del objeto de la prueba.

No se evaluó una secuencia en la que la IA:

```text
produce
→ decide
→ consolida
```

sin verificación independiente.

La procedencia y la evidencia permanecen, por tanto, fuera de la memoria implícita del modelo.

---

# 4. Operación seleccionada

La operación mínima escogida fue la **propuesta de correspondencia**.

Su forma general es:

```text
entrada delimitada
→ materiales candidatos

IA
→ propone una correspondencia
  o se abstiene

salida
→ relación propuesta
→ evidencia utilizada
→ justificación
→ incertidumbre

verificación independiente
→ contrasta la propuesta

humano
→ acepta, rechaza o mantiene abierta

sistema
→ sólo consolida después de validación
```

La elección de esta operación no convierte toda `Correspondence` en una operación de IA.

La responsabilidad semántica de `Correspondence` continúa perteneciendo al dominio del proyecto.

La IA únicamente puede proponer una relación candidata.

---

# 5. Criterios de la prueba

Se establecieron las siguientes condiciones.

## 5.1. R-AI-BLIND-01 — Desconocimiento de la respuesta correcta

En el control positivo, la respuesta correcta no debía estar disponible para la IA antes de registrar su propuesta.

## 5.2. R-AI-BLIND-02 — Separación entre evidencia y clave

La entrada podía contener evidencia suficiente para resolver el caso, pero no debía contener la clave que fijaba la respuesta correcta.

## 5.3. R-AI-EVID-01 — Evidencia suficiente

La propuesta debía poder justificarse utilizando únicamente elementos presentes en la entrada visible.

## 5.4. R-AI-ABSTAIN-01 — Abstención

Cuando la evidencia no permitiera cerrar una atribución, la operación debía admitir una salida equivalente a:

```text
NO DETERMINABLE CON LA EVIDENCIA DISPONIBLE
```

## 5.5. R-AI-REV-01 — Reversibilidad

La salida debía permanecer como propuesta experimental y no modificar ningún resultado canónico del proyecto.

## 5.6. R-AI-TRACE-01 — Trazabilidad

Debían poder distinguirse al menos:

```text
entrada
respuesta
evidencia
clave de comprobación
resultado de la comparación
```

---

# 6. Estructura de P-AI-01

`P-AI-01` se dividió en dos controles complementarios:

```text
P-AI-01-A
→ control negativo documental
→ examina abstención ante evidencia insuficiente

P-AI-01-B
→ control positivo prospectivo ciego
→ examina propuesta correcta ante evidencia suficiente
```

La combinación de ambos controles evita reducir la prueba a una mera capacidad de producir una respuesta afirmativa.

---

# 7. P-AI-01-A — Control negativo documental

## 7.1. Caso

El control se construyó a partir de un caso real del corpus.

La situación visible establecía:

- la persona pulsa «Terminar por ahora»;
- `X` queda correctamente persistido;
- la interfaz permanece aparentemente igual;
- la persona declara que al pulsar no sucede nada;
- posteriormente `X` reaparece;
- la actividad puede reanudarse;
- no está demostrado que la ausencia de manifestación visible impida la reanudación;
- no está demostrado que constituya una pérdida necesaria;
- no está demostrado que requiera modificar la realización.

La pregunta formulada fue:

> ¿La ausencia de manifestación observable de terminación de S1 constituye una pérdida real respecto de R-U2?

Las salidas permitidas fueron:

```text
SÍ
NO
NO DETERMINABLE CON LA EVIDENCIA DISPONIBLE
```

---

# 8. Resultado de P-AI-01-A

La respuesta registrada fue:

```text
NO DETERMINABLE CON LA EVIDENCIA DISPONIBLE
```

La justificación distinguió correctamente entre:

```text
fenómeno observado
```

y:

```text
atribución de pérdida real
```

No se produjo ninguno de los errores definidos:

```text
afirmar SÍ
→ NO

afirmar NO
→ NO

inventar una causa
→ NO

derivar una modificación
→ NO
```

Por tanto:

```text
P-AI-01-A
→ CONTROL NEGATIVO SUPERADO
```

---

# 9. Limitación metodológica de P-AI-01-A

`P-AI-01-A` no fue un control ciego respecto de la respuesta esperada.

La salida correcta había sido fijada durante el propio diseño del control.

Por ello, su resultado no debe utilizarse como demostración independiente de capacidad de descubrimiento.

Su función es más limitada:

```text
evidencia insuficiente
→ la operación admite abstención
→ no fuerza una atribución
```

El componente ciego de la prueba corresponde a `P-AI-01-B`.

---

# 10. P-AI-01-B — Control positivo prospectivo ciego

## 10.1. Preparación

Se creó un generador experimental fuera del repositorio:

```text
/tmp/P-AI-01-B/
```

El generador produjo de forma separada:

```text
VISIBLE.txt
CLAVE.txt
```

La selección de la fuente correcta se realizó mediante elección aleatoria local.

La clave no fue mostrada antes de registrar la respuesta.

---

# 11. Fijación de la entrada de P-AI-01-B

Antes de examinar la entrada se fijó su huella:

```text
SHA-256
6279da1e1571c7cc2ebdda2c4588e6bd5331e9d5279ad302554e7ebefb88fb24
```

La entrada contenía:

```text
FUENTE A
FUENTE B
MATERIAL X
```

y solicitaba determinar si `MATERIAL X` correspondía con:

```text
A
B
NINGUNA
NO DETERMINABLE
```

La clave permaneció oculta.

---

# 12. Respuesta registrada en P-AI-01-B

La propuesta registrada antes de revelar la clave fue:

```text
MATERIAL X
→ FUENTE A
```

La propuesta no se justificó por coincidencia literal.

Se identificaron correspondencias semánticas entre:

```text
“Durante la reanudación”
↔
“Al retomar el trabajo”
```

```text
“criterio pertinente”
↔
“regla relevante”
```

```text
“versión resumida de la evidencia”
↔
“representación reducida de la base”
```

```text
“comprobar el resultado”
↔
“verificar la conclusión”
```

También se señaló que los elementos característicos de `FUENTE B` no aparecían en `MATERIAL X`.

La incertidumbre se calificó como baja dentro del caso construido.

---

# 13. Revelación de la clave

Después de cerrar la respuesta se reveló `CLAVE.txt`.

La clave contenía:

```text
visible_sha256 =
6279da1e1571c7cc2ebdda2c4588e6bd5331e9d5279ad302554e7ebefb88fb24

respuesta_correcta =
A

fuente_no_seleccionada =
B

tipo_relacion =
transformacion_semantica_controlada
```

La huella coincidió exactamente con la fijada antes de examinar la entrada.

La respuesta correcta coincidió con la propuesta registrada.

Por tanto:

```text
P-AI-01-B
→ CONTROL POSITIVO SUPERADO
```

---

# 14. Evaluación de los criterios

## 14.1. R-AI-BLIND-01

```text
resultado
→ SATISFECHO EN P-AI-01-B
```

La respuesta correcta permaneció oculta hasta después de registrar la propuesta.

## 14.2. R-AI-BLIND-02

```text
resultado
→ SATISFECHO EN P-AI-01-B
```

La entrada contenía evidencia suficiente para resolver el caso, pero no contenía la clave.

## 14.3. R-AI-EVID-01

```text
resultado
→ SATISFECHO
```

La propuesta se justificó mediante elementos concretos de la entrada visible.

## 14.4. R-AI-ABSTAIN-01

```text
resultado
→ SATISFECHO EN P-AI-01-A
```

Ante evidencia insuficiente no se forzó una conclusión.

## 14.5. R-AI-REV-01

```text
resultado
→ SATISFECHO
```

Los experimentos se realizaron bajo `/tmp`.

Antes de comenzar el cierre documental se verificó:

```text
git status --short
→ sin salida
```

No se produjo modificación del repositorio durante las pruebas.

## 14.6. R-AI-TRACE-01

```text
resultado
→ SATISFECHO
```

La entrada, su huella, la respuesta, la clave y la comparación permanecieron distinguibles.

---

# 15. Resultado conjunto de P-AI-01

Los dos controles producen el siguiente resultado:

```text
evidencia insuficiente
→ abstención

evidencia suficiente en caso controlado
→ propuesta de relación

propuesta
→ acompañada de evidencia y justificación

respuesta
→ contrastable mediante mecanismo independiente

resultado
→ no consolidado automáticamente
```

Por tanto:

```text
P-AI-01
→ CERRADA CON RESULTADO FAVORABLE LIMITADO
```

---

# 16. Qué demuestra P-AI-01

Dentro del alcance probado, `P-AI-01` demuestra que puede definirse al menos una operación asistida por IA con las siguientes propiedades:

```text
tarea concreta
→ SÍ

entrada delimitada
→ SÍ

salida examinable
→ SÍ

evidencia explícita
→ SÍ

criterio de error
→ SÍ

abstención
→ SÍ

verificación independiente
→ SÍ

reversibilidad
→ SÍ

trazabilidad
→ SÍ
```

Esto basta para establecer que la IA no tiene que entrar en el proyecto como autoridad opaca.

Puede formularse como productor de propuestas sometidas a comprobación.

---

# 17. Qué no demuestra P-AI-01

`P-AI-01` no demuestra:

- fiabilidad general de una IA;
- fiabilidad sobre cualquier material;
- capacidad autónoma para decidir qué debe consolidarse;
- superioridad de una IA respecto de una persona;
- corrección general de relaciones semánticas propuestas por modelos;
- suficiencia de una única prueba para evaluar modelos concretos;
- robustez frente a materiales ambiguos, adversariales o extensos;
- estabilidad entre diferentes modelos o versiones;
- necesidad de una arquitectura de agentes;
- necesidad de incorporar un LLM al producto;
- necesidad de una API;
- necesidad de memoria autónoma;
- necesidad de RAG;
- necesidad de un grafo;
- necesidad de modificar la arquitectura actual;
- necesidad de abrir un nuevo horizonte estratégico.

Tampoco demuestra que toda operación de IA deba seguir exactamente el contrato ensayado.

---

# 18. Procedencia fuera del LLM

La prueba refuerza una separación ya compatible con la metodología del proyecto:

```text
memoria implícita del modelo
≠
procedencia canónica
```

La evidencia relevante debe permanecer accesible fuera del modelo.

La reconstrucción de por qué una propuesta fue aceptada no puede depender exclusivamente de que un modelo recuerde cómo llegó a ella.

Debe poder reconstruirse mediante elementos verificables.

---

# 19. Relación con las líneas externas anteriores

El resultado de `L-EXT-05` no sustituye los resultados de las líneas anteriores.

La separación resultante puede expresarse así:

```text
L-EXT-01 / PROV-O
→ procedencia y trayectoria

L-EXT-02 / Web Annotation
→ localización granular de partes concretas

L-EXT-03 / RO-Crate
→ composición, autodescripción y portabilidad

L-EXT-04 / objetos tipados
→ estructura semántica consultable del dominio

L-EXT-05 / IA verificable
→ propuesta asistida sometida a evidencia y validación
```

Estas responsabilidades son diferentes.

Ninguna de las cinco líneas justifica por sí sola convertir las otras en parte de una implementación.

---

# 20. Evaluación de L-EXT-05

La cuestión de `L-EXT-05` era:

> ¿Qué tarea concreta del proyecto puede realizar o asistir una IA de forma verificable, trazable y reversible?

`P-AI-01` proporciona una respuesta positiva limitada:

```text
tarea
→ propuesta de correspondencia

verificable
→ SÍ, en el alcance ensayado

trazable
→ SÍ, en el alcance ensayado

reversible
→ SÍ

capaz de abstención
→ SÍ, en el control negativo
```

Por tanto:

```text
L-EXT-05
→ CERRADA CON RESULTADO FAVORABLE LIMITADO
```

---

# 21. Consecuencia para el panorama externo

Tras este cierre:

```text
L-EXT-01
→ CERRADA CON RESULTADO FAVORABLE LIMITADO

L-EXT-02
→ CERRADA CON RESULTADO FAVORABLE LIMITADO

L-EXT-03
→ CERRADA CON RESULTADO FAVORABLE LIMITADO

L-EXT-04
→ CERRADA CON RESULTADO FAVORABLE LIMITADO

L-EXT-05
→ CERRADA CON RESULTADO FAVORABLE LIMITADO
```

Las cinco líneas externas priorizadas han sido examinadas.

El resultado no consiste en cinco nuevas capacidades de producto.

Consiste en cinco resultados conceptuales y experimentales delimitados que pueden utilizarse como referencia futura si una diferencia propia del proyecto vuelve a requerirlos.

---

# 22. Ausencia de derivación automática

El cierre favorable de `L-EXT-05` no produce automáticamente:

```text
nueva capacidad
nueva Realization
nueva arquitectura
nuevo componente de IA
nuevo agente
nuevo modelo de objetos
nuevo almacenamiento
nuevo servicio externo
nuevo horizonte estratégico
```

Para cualquiera de esas actuaciones sigue siendo necesaria una derivación independiente desde una necesidad o pérdida suficientemente demostrada.

---

# 23. P-AI-02

El resultado de `P-AI-01` permite imaginar pruebas posteriores, por ejemplo:

- relaciones más ambiguas;
- materiales reales no conocidos previamente;
- detección de contradicciones;
- extracción estructurada;
- reconstrucción asistida de procedencia;
- comparación entre modelos;
- pruebas adversariales;
- evaluación cuantitativa de errores.

Sin embargo, ninguna de ellas resulta necesaria para responder la cuestión actual de `L-EXT-05`.

Por tanto:

```text
P-AI-02
→ NO JUSTIFICADA EN EL ESTADO ACTUAL
```

Esto no significa que una prueba posterior carezca de interés.

Significa únicamente que no es necesaria para cerrar la pregunta actualmente abierta.

---

# 24. Estado final

```text
P-AI-01-A
→ CONTROL NEGATIVO SUPERADO

P-AI-01-B
→ CONTROL POSITIVO PROSPECTIVO CIEGO SUPERADO

P-AI-01
→ CERRADA CON RESULTADO FAVORABLE LIMITADO

L-EXT-05
→ CERRADA CON RESULTADO FAVORABLE LIMITADO

P-AI-02
→ NO JUSTIFICADA EN EL ESTADO ACTUAL
```

---

# 25. Conclusión

La investigación externa sobre IA no deriva una incorporación automática de inteligencia artificial al producto.

Sí permite establecer una conclusión más limitada.

Puede definirse una operación en la que una IA:

```text
recibe una entrada delimitada
→ propone una relación o se abstiene
→ identifica la evidencia utilizada
→ explicita una justificación
→ deja la decisión abierta a verificación
```

y en la que el proyecto conserva fuera del modelo los elementos necesarios para comprobar la propuesta.

El resultado mantiene la distribución de responsabilidades:

```text
IA
→ propone

evidencia
→ permite comprobar

humano
→ valida

sistema
→ consolida
```

Esta distribución resulta compatible con la metodología existente y evita convertir la memoria o la respuesta de un modelo en autoridad canónica.

Con ello queda cerrada `L-EXT-05` en el alcance actualmente justificado.
