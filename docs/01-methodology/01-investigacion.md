# Investigación metodológica

## Propósito

Este documento organiza, desarrolla y conserva las investigaciones pertenecientes al cuerpo `Methodology`.

Su función consiste en mantener separado el desarrollo investigativo de los resultados metodológicos posteriormente incorporados a los documentos normativos del proyecto.

Puede conservar, cuando resulte pertinente:

- preguntas;
- hipótesis;
- modelos exploratorios;
- candidatos;
- pruebas;
- contraejemplos;
- intentos de falsación;
- resultados positivos;
- resultados negativos;
- alternativas descartadas;
- auditorías;
- reducciones;
- cierres;
- límites conocidos;
- y condiciones de reapertura.

No constituye por sí mismo el protocolo metodológico vigente.

Los resultados suficientemente estables que modifiquen la metodología general deberán trasladarse al documento competente correspondiente.

En particular:

```text
investigación metodológica
        ↓
resultado suficientemente estable
        ↓
00-protocolo-de-trabajo.md
```

La historia de consolidación de esos resultados corresponde a:

```text
16-bitacora-de-consolidacion.md
```

y su tratamiento documental se rige por:

```text
99-protocolo-de-consolidacion-documental.md
```

---

## Estatuto documental

Este archivo desempeña principalmente la función documental:

```text
Investigación
```

dentro del ámbito o cuerpo de responsabilidad:

```text
Methodology
```

Por tanto:

```text
investigación
≠
especificación vigente

investigación
≠
norma metodológica

resultado exploratorio
⇏
incorporación automática al protocolo
```

Las hipótesis descartadas, los modelos intermedios y los conceptos utilizados únicamente para someter a prueba una investigación podrán conservarse aquí aunque posteriormente no sean incorporados a la metodología consolidada.

---

# Investigación — Dependencia lógica y orden temporal

## Estado de la investigación

**Objeto investigado:** relación entre dependencia lógica y organización temporal de varias líneas de trabajo.

**Ámbito:** metodología general del proyecto.

**Estado de la investigación:** cerrada dentro del alcance examinado.

**Resultado principal:** rechazada la necesidad de una linealidad temporal global y rechazado también el paralelismo libre; corroborado, dentro del alcance investigado, un paralelismo controlado por dependencias.

**Consecuencia metodológica:** existe fundamento para incorporar a `00-protocolo-de-trabajo.md` un principio general que separe dependencia lógica y orden temporal.

**Modelo exploratorio `v0.3`:** conservado como resultado de investigación; no trasladable automáticamente a Methodology.

**Modificación de `99-protocolo-de-consolidacion-documental.md`:** no derivada.

**Nota de lectura:** este documento formaliza una investigación realizada antes de su incorporación al corpus documental. Conserva por ello la evolución real del razonamiento, incluidos modelos posteriormente reducidos, conceptos no consolidados y resultados negativos. El cierre histórico de la investigación no implica por sí mismo la consolidación documental de este archivo.

---

# 1. Antecedente de apertura — Prueba de control global

Antes de plantear la cuestión sobre linealidad temporal se realizó una prueba de control del estado global del proyecto.

La prueba no detectó un desvío del propósito general, pero sí identificó un riesgo de desplazamiento del esfuerzo hacia la metadocumentación.

Los ciclos anteriores habían producido:

```text
más conocimiento
+
más control metodológico
+
más trazabilidad
```

sin producir simultáneamente nueva superficie funcional del producto.

La conclusión no fue que ese trabajo hubiera sido innecesario.

La señal de control fue que continuar encadenando ciclos documentales semejantes sin nueva evidencia comenzaba a ofrecer rendimiento decreciente.

La prueba reafirmó además:

> **No existe un siguiente paso automático único.**

Podían existir varias líneas candidatas, por ejemplo:

```text
nuevas situaciones de Product

uso natural adicional

construcción física incremental

experimentación técnica

Architecture
```

pero:

```text
posible
≠
justificado

pendiente
≠
siguiente tarea
```

Cada línea continuaba necesitando fundamento positivo propio.

Este resultado hizo pertinente una nueva cuestión metodológica:

> **Si pueden existir varias líneas justificables, ¿debe una permanecer necesariamente cerrada antes de poder abrir otra independiente?**

La prueba de control constituye así un antecedente de apertura.

No constituye por sí misma una demostración del modelo de trabajo paralelo posteriormente investigado.

---

# 2. Pregunta metodológica inicial

Hasta ese momento gran parte del desarrollo se había producido mediante secuencias locales del tipo:

```text
pregunta
↓
investigación
↓
resultado
↓
consolidación
↓
siguiente cuestión
```

Ese modo de trabajo había permitido mantener un alto grado de control sobre las dependencias y las decisiones.

Sin embargo, la existencia de varias posibles líneas legítimas abrió una cuestión metodológica distinta:

> **¿Debe el estudio avanzar obligatoriamente de manera lineal, de modo que una línea no pueda comenzar hasta cerrar por completo la anterior?**

La pregunta no pretendía justificar paralelismo por razones de velocidad ni permitir la apertura indiscriminada de actividades.

Pretendía determinar si la secuencia temporal global utilizada hasta entonces era:

```text
metodológicamente necesaria
```

o únicamente:

```text
una práctica histórica compatible
con determinados tipos de dependencia
```

La primera distinción obtenida fue:

```text
orden lógico
≠
orden temporal
```

Una dependencia lógica puede imponer una precedencia concreta.

La mera existencia simultánea de dos cuestiones no demuestra por sí misma esa dependencia.

---

# 3. Alcance de la investigación

La investigación no pretende establecer una teoría universal sobre organización del trabajo.

Su alcance queda restringido a determinar qué puede justificarse para este proyecto a partir de:

- su metodología vigente;
- las responsabilidades documentales ya separadas;
- las trayectorias reales producidas durante `R-U2-M1`;
- las relaciones entre Product, Realization y otros cuerpos;
- y pruebas contrafactuales destinadas a buscar fallos en el modelo propuesto.

No se pretende demostrar:

```text
que todo trabajo deba realizarse en paralelo
```

ni:

```text
que toda dependencia admita paralelismo
```

ni:

```text
que una cantidad determinada de líneas
sea óptima o metodológicamente necesaria
```

La cuestión es más limitada:

> **¿Puede el proyecto mantener legítimamente varias líneas de trabajo abiertas cuando no existe entre ellas una dependencia que obligue a una secuencia temporal?**

---

# 4. Modelo inicial de trabajo paralelo — `v0.1`

Como primera aproximación se representó el proyecto como un conjunto de posibles líneas derivadas de un estado consolidado:

```text
                     ┌→ Product
                     │
                     ├→ uso / evidencia
estado consolidado ──┼→ Realization
                     │
                     ├→ experimentación técnica
                     │
                     └→ investigación específica
```

La existencia gráfica de una rama no justificaba su apertura.

Cada línea debía poseer fundamento propio.

---

## 4.1. Unidad de trabajo propuesta

Se propuso describir cada línea mediante:

```text
Pregunta
¿Qué necesitamos averiguar, construir o comprobar?

Fundamento
¿Por qué está justificado hacerlo ahora?

Cuerpo responsable
¿A quién pertenece?

Entradas
¿Qué resultados utiliza?

Resultado admisible
¿Qué puede producir legítimamente?

Límites
¿Qué no puede concluir ni modificar?

Dependencias
¿Qué necesita?

Criterio de cierre
¿Cuándo deja de requerir trabajo?

Estado
¿En qué situación se encuentra?
```

Esta estructura surgió como instrumento de investigación.

No se consideró todavía normativa metodológica.

---

## 4.2. Estados exploratorios de una línea

El modelo inicial utilizó:

```text
CANDIDATA
↓
¿fundamento positivo?
↓
ABIERTA
↓
trabajo
↓
BLOQUEADA / RESUELTA
↓
CONSOLIDADA
↓
CERRADA
```

Interpretación provisional:

### Candidata

Existe una posibilidad de trabajo, pero todavía no fundamento suficiente para abrirla.

### Abierta

Dispone de pregunta, fundamento y criterio de cierre.

### Bloqueada

Necesita un resultado externo.

La aparición de un bloqueo local no implicaría automáticamente el bloqueo del proyecto.

### Resuelta

La pregunta investigada ha recibido respuesta.

### Consolidada

Sus consecuencias legítimas han sido trasladadas a los cuerpos competentes.

### Cerrada

No requiere trabajo adicional mientras no aparezca evidencia nueva.

Estos estados fueron útiles para razonar sobre el modelo.

No se ha demostrado que deban convertirse en una taxonomía metodológica oficial.

---

## 4.3. Tipos de dependencia considerados

### Dependencia fuerte

```text
A
↓
B no puede decidirse válidamente sin A
```

Esta dependencia sí impone secuencia.

### Dependencia débil

`A` puede mejorar o informar `B`, pero `B` puede comenzar legítimamente sin esperar el cierre completo de `A`.

### Independencia

```text
A

B
```

Ambas líneas pueden avanzar sin que una determine justificativamente a la otra.

### Dependencia de convergencia

```text
A ─────┐
       ↓
   integración
       ↑
B ─────┘
```

Dos líneas pueden desarrollarse separadamente pero necesitan reconciliar sus resultados antes de producir una consolidación común.

Esta clasificación fue utilizada como instrumento analítico.

No se ha demostrado la necesidad de trasladarla íntegramente a Methodology.

---

## 4.4. Familias de líneas inicialmente consideradas

Se distinguieron provisionalmente:

```text
Product
Uso / evidencia
Realization
Experimentación técnica
Architecture
```

La consolidación documental se trató de forma diferente:

```text
Consolidación documental
≠
línea sustantiva autónoma
```

Su función consiste en registrar o estabilizar cambios de estado producidos por las líneas competentes.

---

## 4.5. Apertura de líneas

El modelo inicial propuso que una línea sólo pudiera abrirse cuando existieran:

```text
pregunta concreta
+
fundamento positivo
+
cuerpo competente
+
resultado admisible
+
criterio de cierre
```

Por tanto:

```text
"podríamos investigar X"
⇏
debe abrirse X
```

La posibilidad de trabajar sobre una cuestión no constituye fundamento suficiente.

---

## 4.6. Propagación

Se propuso:

```text
resultado en A
↓
¿afecta realmente a la responsabilidad de B?
```

Si la respuesta es afirmativa:

```text
propagar únicamente
la consecuencia legítima
```

Si es negativa:

```text
conservar el resultado en A
```

Esto preservaba distinciones ya importantes en el proyecto:

```text
evidencia
≠
requisito

realización
≠
Product

experimento
≠
Architecture

problema local
≠
problema transversal
```

---

## 4.7. No contagio de autoridad

La posibilidad de trabajo simultáneo planteó un riesgo:

```text
A produce evidencia relevante para B
↓
A adquiere autoridad sobre B
```

Ese paso fue rechazado.

La regla exploratoria formulada fue:

> **Las líneas intercambian evidencia, no autoridad.**

Por ejemplo:

```text
Realization
→ puede producir evidencia para Product

Realization
⇏ puede modificar Product por sí sola
```

---

## 4.8. WIP

Como recomendación práctica se consideró:

```text
2 líneas principales
+
1 secundaria
```

aproximadamente:

```text
WIP ≈ 3
```

Sin embargo, no se obtuvo ninguna prueba que justificara `3` como número metodológicamente necesario.

Por tanto:

```text
WIP limitado
✔ recomendación operativa posible

WIP = 3
✘ norma no derivada
```

---

## 4.9. Prioridad

Cuando coexistieran varias líneas legítimas se consideró como heurística:

```text
1. desbloqueo
2. producción de evidencia
3. irreversibilidad de una decisión
4. coste
```

con preferencia general por:

```text
más información
+
menor coste
+
menor compromiso irreversible
```

Esta propuesta no fue establecida como regla normativa de Methodology.

---

## 4.10. Experimentos

La investigación reconoció que una realización o experimento puede preceder a una decisión normativa siempre que no se confundan sus estatutos.

Por tanto:

```text
prototipo
⇏ solución seleccionada

funciona
⇏ requisito de Product

estructura utilizada
⇏ Architecture
```

Esta distinción permite obtener evidencia física sin transformar automáticamente cada mecanismo construido en una decisión definitiva del proyecto.

---

## 4.11. Consolidación por hitos

Se propuso como regla práctica:

```text
actividad
⇏ consolidación

cambio de estado
→ puede requerir consolidación
```

La documentación debería responder a cambios relevantes como:

- apertura justificada de una línea;
- establecimiento o rechazo de un resultado;
- modificación de un artefacto normativo;
- cierre de una investigación;
- cambio del estado global.

No a la mera existencia de actividad diaria.

---

# 5. Primera prueba contra casos reales

El modelo inicial fue sometido a casos ya producidos por el propio proyecto.

El objetivo no consistía en reinterpretarlos para hacerlos encajar, sino en comprobar si proporcionaban evidencia a favor o en contra de la necesidad de una linealidad temporal global.

---

## 5.1. Caso `OU-RU2M1-001`

La trayectoria real fue:

```text
OU-RU2M1-001
↓
F-OU001-01
↓
L-OU001-01
↓
RU2M1-U01
↓
MR-U01-01
↓
validación
```

Dentro de esta cadena existe secuencialidad necesaria.

No podía justificarse `MR-U01-01` antes de demostrar la pérdida correspondiente.

Por tanto:

```text
secuencialidad local necesaria
✔
```

Sin embargo, de ello no se sigue:

```text
linealidad temporal global
```

Otra investigación perteneciente a un cuerpo independiente podría haber avanzado simultáneamente sin alterar esa cadena.

Resultado:

```text
dependencia local
→ puede imponer secuencia

dependencia local
⇏ bloqueo temporal de todo el proyecto
```

---

## 5.2. Caso `OU-RU2M1-002`

Una misma observación produjo dos cuestiones diferentes:

```text
                         OU-RU2M1-002
                               │
                 ┌─────────────┴─────────────┐
                 ↓                           ↓
         F-OU002-01               cuestión preobservacional
                 │                           │
                 ↓                           ↓
       atribución técnica         investigación POU
                 │                           │
                 ↓                           ↓
       no modificación             modificación documental
```

El caso mostró que una misma evidencia puede originar consecuencias legítimas pertenecientes a responsabilidades diferentes.

Resultado exploratorio:

> **Una misma evidencia puede bifurcarse en varias líneas legítimas pertenecientes a responsabilidades diferentes.**

Esto proporcionó fundamento para introducir en el modelo una regla de bifurcación.

---

## 5.3. Caso Product / Realization

La historia del proyecto ya había establecido:

```text
mecanismo de Realization
⇏ compromiso de Product
```

Por tanto, Product y Realization no necesitan constituir necesariamente una única cadena temporal mientras se conserve la separación de responsabilidades y autoridad.

El paralelismo temporal no elimina la frontera normativa.

---

## 5.4. Caso Architecture

Architecture fue utilizada como control negativo.

Si el modelo paralelo significara:

```text
hay capacidad disponible
↓
abrir Architecture
```

el modelo estaría introduciendo líneas sin fundamento.

El caso confirmó:

```text
trabajo paralelo
≠
abrir todas las líneas posibles
```

Architecture continúa necesitando fundamento positivo independiente.

---

# 6. Carencias encontradas en `v0.1`

La primera prueba mostró que el modelo inicial permitía paralelismo, pero no controlaba suficientemente algunos efectos de la concurrencia.

---

## 6.1. Fijación de entradas

Se planteó:

```text
Línea A
observa R-U2-M1

mientras

Línea B
modifica R-U2-M1
```

La pregunta resultante fue:

> **¿Sobre qué estado de `R-U2-M1` está realmente trabajando A?**

Una línea no debería depender abstractamente de:

```text
R-U2-M1
```

sino de:

```text
R-U2-M1 @ estado determinado
```

Si durante la investigación:

```text
V0
↓
V1
```

la línea no debe adoptar silenciosamente `V1`.

Las posibilidades consideradas fueron:

```text
continuar explícitamente sobre V0
```

o:

```text
evaluar V1 y actualizar la entrada
```

o:

```text
reformular/cerrar la investigación
```

De aquí surgió la idea de fijación explícita del estado o versión de las entradas.

---

## 6.2. Escritura concurrente

Se examinó también:

```text
A ─┐
B ─┼→ Product
C ─┘
```

Varias líneas pueden producir consecuencias relevantes para un mismo cuerpo.

Eso no autoriza a introducirlas normativamente de forma independiente y descoordinada.

Se propuso entonces un:

```text
punto de convergencia
```

capaz de comprobar:

```text
compatibilidad
no contradicción
alcance
precedencia
estado resultante
```

La función detectada resultó importante para las pruebas posteriores.

La necesidad del término `punto de convergencia` como concepto normativo independiente no quedó demostrada.

---

# 7. Modelo `v0.2`

Después de la prueba contra casos reales, el modelo quedó ampliado aproximadamente a:

```text
1. fundamento de apertura
2. paralelismo por independencia
3. secuencialidad local
4. bifurcación
5. no contagio de autoridad
6. fijación de entradas/versiones
7. actualización explícita
8. propiedad de escritura por cuerpo
9. convergencia
10. WIP limitado
```

`v0.2` resolvía algunas carencias de `v0.1`, pero todavía no había sido sometido a un caso adversarial donde una dependencia cambiara mientras otra línea trabajaba sobre ella.

---

# 8. Prueba contrafactual adversarial

Para buscar un fallo real del modelo se construyó deliberadamente el siguiente escenario:

```text
Product @ P0
↓
Realization B trabaja legítimamente sobre P0

mientras

otra línea Product A
produce nueva evidencia
↓
P0 → P1
```

Se añadió además la condición:

```text
M1
✔ compatible con P0

M1
✘ incompatible con P1
```

La prueba pretendía determinar qué debía ocurrir con un resultado producido legítimamente sobre una entrada que dejaba de ser vigente antes de su consolidación actual.

---

# 9. Validez histórica y vigencia actual

La prueba obligó a distinguir:

```text
resultado inválido
```

de:

```text
resultado válido respecto de una entrada
que ya no es vigente
```

Por tanto:

```text
M1
✔ válido respecto de P0

M1
✘ no automáticamente vigente respecto de P1
```

La aparición de `P1` no convierte retrospectivamente en inválido todo el trabajo realizado sobre `P0`.

La consecuencia es más precisa:

```text
validez histórica
≠
vigencia actual
```

Un resultado puede conservar legitimidad respecto del fundamento sobre el que fue producido y, al mismo tiempo, requerir una reevaluación antes de considerarlo vigente respecto de un fundamento posterior.

De aquí surgió una formulación más general:

```text
resultado
≠
verdad flotante

resultado
=
conclusión
+
fundamento
+
estado de entradas
+
alcance
```

Cuando cambia una entrada:

```text
resultado
✘ no se elimina automáticamente

vigencia
→ debe reevaluarse
```

---

# 10. Prueba de impacto

A partir del escenario anterior se formuló la pregunta:

```text
P0 → P1
↓
¿qué afirmaciones de B dependían
de la parte modificada?
```

Se distinguieron exploratoriamente varios casos:

```text
sin impacto
→ continuar

cambio compatible
→ actualizar después de comprobar conservación

potencialmente incompatible
→ suspender consolidación y auditar

incompatible
→ rebasar, reformular o cerrar
```

Durante esta fase se utilizaron provisionalmente códigos `N0–N3`.

Esos códigos fueron únicamente una herramienta de razonamiento.

No se demostró que constituyan vocabulario metodológico necesario.

Por tanto:

```text
N0–N3
✘ no incorporar como taxonomía normativa
```

---

## 10.1. Barrera de consolidación

La prueba produjo la siguiente condición:

> **Una línea no debe consolidar un resultado normativo si una dependencia fuerte ha cambiado desde la entrada utilizada y el impacto no ha sido evaluado.**

Esquema:

```text
B usa P0

P0 → P1

↓
CONSOLIDAR(B)
✘

hasta evaluar:

IMPACTO(P0 → P1, B)
```

Esta función resultó necesaria dentro del modelo exploratorio.

Posteriormente se comprobó que el PCD vigente ya la realiza mediante controles más básicos.

Por tanto, `barrera de consolidación` no necesita convertirse en un término nuevo de Methodology.

---

## 10.2. Rebase localizado

Si:

```text
M1
├─ A
├─ B
└─ C
```

y sólo `B` depende de una premisa modificada:

```text
A
✔ conservar

B
○ revisar

C
✔ conservar
```

el cambio de una dependencia no justifica reconstruir automáticamente todo el resultado.

Durante esta fase se utilizó la expresión:

```text
rebase localizado
```

para describir esa actuación.

La función de revisión localizada resultó útil.

La necesidad del término `rebase` como vocabulario metodológico oficial todavía no estaba establecida y fue evaluada posteriormente.

---

## 10.3. Prueba inversa Realization → Product

Se examinó también el sentido contrario.

Si Realization obtiene repetidamente evidencia de una imposibilidad:

```text
Realization
→ evidencia E
```

no puede concluir por sí misma:

```text
Product está equivocado
↓
modificar Product
```

Debe producir evidencia capaz, en su caso, de justificar una investigación dentro del cuerpo competente.

Se confirmó así:

```text
evidencia
≠
autoridad
```

---

## 10.4. Conflicto entre líneas del mismo cuerpo

Se estudió:

```text
A → C1
B → C2

C1 ∧ C2
→ contradicción
```

La solución no puede consistir en consolidar independientemente ambas conclusiones ni en seleccionar automáticamente una de ellas.

La contradicción debe producir una nueva investigación sobre cuestiones como:

```text
mala formulación
diferenciación de situaciones
incompatibilidad real
alcance
```

Esto reforzó la necesidad funcional de convergencia antes de consolidar resultados incompatibles pertenecientes a una misma responsabilidad.

---

# 11. Modelo `v0.3`

Después de las pruebas realizadas sobre `v0.1` y `v0.2`, el modelo exploratorio quedó aproximadamente formado por:

```text
1. Fundamento de apertura
2. Paralelismo por independencia
3. Secuencialidad local
4. Bifurcación de evidencia
5. No contagio de autoridad
6. Fijación de versión/estado de entradas
7. Actualización explícita de entradas
8. Propiedad de escritura por cuerpo
9. Prueba de impacto ante cambio de dependencia
10. Barrera de consolidación
11. Rebase localizado
12. Punto de convergencia
13. Detección de incompatibilidad
14. Conservación de resultados históricos válidos
15. WIP limitado
```

Sin embargo:

```text
modelo v0.3
=
resultado de investigación
```

no:

```text
modelo v0.3
=
metodología consolidada
```

Su función era hacer explícitos los problemas que el trabajo simultáneo debía ser capaz de resolver.

La necesidad normativa independiente de cada uno de sus quince componentes todavía debía ser auditada.

---

# 12. Formalización de hipótesis

Después de construir y someter a prueba los modelos exploratorios se formalizaron tres hipótesis rivales.

Esta formalización se realizó después de las pruebas anteriores y no debe interpretarse como si `H1`, `H2` y `H3` hubieran estado formalmente definidas desde el inicio.

---

## 12.1. `H1 — Linealidad temporal fuerte`

Hipótesis:

```text
una línea abierta
↓
impide abrir otra
hasta cerrarse
```

Resultado:

```text
H1
✘ rechazada
```

Los casos examinados muestran secuencialidad local cuando existe dependencia fuerte, pero no demuestran una obligación de mantener una única línea temporal para todo el proyecto.

---

## 12.2. `H2 — Paralelismo libre`

Hipótesis:

```text
toda línea legítima
puede avanzar simultáneamente
sin controles adicionales
```

Resultado:

```text
H2
✘ rechazada
```

La prueba adversarial demuestra que este modelo puede producir resultados aparentemente válidos sobre entradas que ya no son vigentes, consolidaciones incompatibles o conflictos no evaluados.

La coexistencia temporal por sí sola no elimina la necesidad de controlar dependencias.

---

## 12.3. `H3 — Paralelismo controlado por dependencias`

Hipótesis:

```text
varias líneas pueden coexistir
si:

fundamento propio
+
dependencias respetadas
+
entradas identificables
+
autoridad separada
+
impacto y convergencia controlados
```

Resultado:

```text
H3
✔ corroborada dentro del alcance investigado
```

La investigación no establece que `H3` sea universalmente válida.

Establece únicamente que los casos reales y contrafactuales examinados no requieren una secuencia temporal global cuando las dependencias relevantes permanecen controladas.

---

# 13. Resultado metodológico formal

La investigación produjo el siguiente resultado:

> **La metodología del proyecto no requiere una secuencia temporal única. La secuencialidad obligatoria deriva de dependencias lógicas concretas, no de la mera coexistencia de líneas de trabajo. Pueden mantenerse simultáneamente varias líneas cuando cada una disponga de fundamento positivo independiente y su interacción preserve dependencias, alcance, autoridad, trazabilidad y coherencia de consolidación.**

Condensación:

```text
dependencia lógica
→ puede imponer orden

mera coexistencia temporal
⇏ dependencia
```

El resultado pertenece al ámbito de Methodology.

Sin embargo:

```text
resultado metodológico formal
⇏ trasladar íntegramente v0.3
```

Era necesario auditar el cuerpo metodológico vigente antes de decidir qué parte del resultado requería incorporación normativa.

---

# 14. Auditoría de `00-protocolo-de-trabajo.md`

Se auditó:

```text
docs/01-methodology/00-protocolo-de-trabajo.md
```

con el objetivo de determinar:

1. si el resultado ya estaba expresado;
2. si podía reducirse a un principio existente;
3. qué modificación mínima podía estar justificada;
4. y qué partes del modelo exploratorio debían permanecer exclusivamente en investigación.

---

## 14.1. Competencia

`00-protocolo-de-trabajo.md` define la metodología general y transversal del proyecto.

La cuestión:

```text
¿cómo pueden organizarse temporalmente
varias líneas legítimas
sin violar sus dependencias?
```

pertenece a esa responsabilidad.

Resultado:

```text
competencia de 00-protocolo-de-trabajo.md
✔
```

---

## 14.2. `PM-1 — Descubrir antes de diseñar`

El texto vigente en el momento de la auditoría incluía:

> La investigación precede siempre al diseño.

La investigación sobre orden temporal mostró que esta frase puede interpretarse excesivamente como una precedencia global.

La formulación más precisa considerada fue:

> **La investigación necesaria para justificar una solución precede al diseño de esa solución.**

Esta precisión conserva la precedencia necesaria:

```text
investigación justificativa de X
↓
diseño de X
```

sin introducir:

```text
toda investigación existente
↓
todo diseño posterior del proyecto
```

Estado:

```text
precisión de PM-1
○ candidata

incorporación documental
○ pendiente
```

---

## 14.3. `PM-2`

No se detectó incidencia relacionada con la investigación actual.

---

## 14.4. `PM-3 — Consolidar únicamente el conocimiento aceptado`

`PM-3` refuerza la separación entre:

```text
investigación
```

y:

```text
resultado metodológico consolidado
```

Por tanto, el modelo `v0.3`, sus hipótesis rechazadas y sus términos exploratorios no deben trasladarse íntegramente a `00`.

---

## 14.5. `PM-4 — Separación de responsabilidades`

`PM-4` es compatible con el trabajo paralelo y protege la separación de autoridad.

Sin embargo:

```text
responsabilidades separadas
⇏
regla sobre simultaneidad temporal
```

No absorbe por sí solo el resultado investigado.

---

## 14.6. `PM-5 — Separación entre teoría y realización`

Durante la auditoría se detectó una incidencia terminológica distinta:

```text
título:
Separación entre teoría y realización

contenido:
teoría conceptual
arquitectura software
implementación
```

sin mención expresa del cuerpo `Realization`.

Esta cuestión no procede de la investigación sobre paralelismo y no dispone todavía de fundamento suficiente para ser resuelta dentro del mismo ciclo.

Por tanto:

```text
incidencia PM-5
⚠ localizada

resolución dentro de esta investigación
✘
```

No debe incorporarse accidentalmente al cierre actual.

---

## 14.7. `PM-6`

Exige justificación para las incorporaciones al proyecto.

Contribuye a impedir la apertura arbitraria de líneas, pero no determina si dos líneas ya justificadas pueden coexistir temporalmente.

---

## 14.8. `PM-7 — Preferencia por la simplicidad`

`PM-7` favorece reducir el modelo exploratorio antes de consolidarlo.

En particular:

```text
función ya realizada por una regla existente
↓
no introducir nueva abstracción
```

si no se demuestra necesidad independiente.

---

## 14.9. `PM-8 — Separación entre investigación, especificación y justificación`

`PM-8` protege directamente la separación:

```text
v0.1 / v0.2 / v0.3
H1 / H2 / H3
pruebas
contraejemplos
resultados negativos
        ↓
Investigación
```

frente a:

```text
principio metodológico aceptado
        ↓
00-protocolo-de-trabajo.md
```

Por tanto:

```text
modelo v0.3 completo
✘ no trasladar a 00
```

---

## 14.10. Irreducibilidad del nuevo resultado

Ninguno de `PM-1…PM-8` expresa de manera suficiente:

```text
dependencia lógica
puede imponer orden temporal

mera coexistencia de líneas
no establece precedencia por sí sola
```

En particular:

```text
PM-4
→ separa responsabilidades

PM-6
→ exige fundamento

PM-7
→ exige simplicidad

PM-8
→ separa funciones documentales
```

pero ninguno determina directamente la relación entre dependencia y simultaneidad.

Resultado:

```text
nuevo principio metodológico
✔ irreducible respecto de PM-1…PM-8
```

---

## 14.11. Objetivos

Se examinó si el apartado `Objetivos` debía incorporar una formulación específica sobre trabajo paralelo.

Una posibilidad considerada fue:

```text
preservar las dependencias justificativas
sin imponer secuencias temporales no derivadas
```

Sin embargo, introducir explícitamente como objetivo:

```text
permitir trabajo paralelo
```

habría convertido un mecanismo posible en objetivo metodológico.

Aplicando `PM-7`, se concluyó:

```text
modificación de Objetivos
✘ no necesaria
```

El nuevo principio general es suficiente para expresar la distinción sin duplicarla en `Objetivos`.

---

## 14.12. Gestión de cambios

El apartado vigente ya exige:

```text
Actualizar los documentos dependientes.
```

y remite al PCD cuando un cambio afecta a documentos consolidados o a sus dependencias.

Por tanto:

```text
añadir aquí otro análisis de impacto
↓
duplicaría funciones del PCD
```

Resultado:

```text
Gestión de cambios
✔ compatible

modificación
✘ no derivada
```

---

## 14.13. Organización documental — incidencia localizada

Durante la auditoría se encontró:

```markdown
## Según el dominio
```

mientras el contenido de la sección ya afirma:

```text
Según el ámbito o cuerpo de responsabilidad...
```

La corrección candidata es:

```markdown
## Según el ámbito o cuerpo de responsabilidad
```

sin modificar el contenido de la sección.

Esta incidencia:

```text
✘ no deriva del trabajo paralelo
```

Fue detectada incidentalmente durante la auditoría y debe mantenerse diferenciada del fundamento del nuevo principio.

---

## 14.14. Principio de estabilidad

El protocolo establece que los documentos consolidados constituyen una base estable para las actuaciones posteriores:

> que requieran apoyarse en ellos.

Esta precisión ya distingue:

```text
B depende de A
→ B requiere A como fundamento estable

C no depende de A
⇏ C debe esperar necesariamente a A
```

Resultado:

```text
Principio de estabilidad
✔ compatible

modificación
✘ no necesaria
```

---

## 14.15. `CT-1`

`CT-1` establece:

```text
Competencia científica
↓
Objeto de estudio
↓
Alcance disciplinar
↓
Integración
```

Este orden debe conservarse porque cada nivel presupone el anterior.

Por tanto:

```text
CT-1
✔ ejemplo legítimo de secuencialidad lógica

CT-1
✘ evidencia de linealidad temporal global
```

No requiere modificación.

---

# 15. Auditoría de `99-protocolo-de-consolidacion-documental.md`

La prueba adversarial había identificado varias funciones necesarias:

```text
versionado
impacto
dependencias
convergencia
compatibilidad
control previo a consolidación
```

La cuestión era determinar si el PCD vigente ya realizaba esas funciones o si el paralelismo había revelado una carencia documental nueva.

La pregunta de auditoría fue:

> **¿El PCD vigente ya impide consolidar un resultado cuando una dependencia relevante ha cambiado durante su elaboración sin evaluar el impacto, o el trabajo paralelo revela una carencia del PCD?**

Resultado:

> **El PCD ya contiene prácticamente todos los controles necesarios. No se ha demostrado una carencia que justifique modificar `99` por causa del trabajo paralelo.**

---

## 15.1. Dependencias

El PCD ya permite reconstruir:

```text
qué afirma cada documento
sobre qué justificación descansa
qué cambios sufrió
qué resultados dependen de él
cuándo debe reabrirse
```

Además contempla reapertura por:

```text
cambio de fundamento
resultado externo que invalida una dependencia
incompatibilidad
contradicción
```

---

## 15.2. Reapertura por dependencia

El PCD ya contiene:

```text
resultado externo modificado
↓
análisis de dependencia
↓
¿afecta realmente?
↓
sí
↓
reapertura reconstructiva
```

Esta estructura coincide con una de las necesidades encontradas durante la prueba adversarial.

---

## 15.3. Intervención mínima

El PCD establece:

```text
cambio en D1
↓
identificar dependencias reales
↓
reabrir únicamente
los documentos realmente afectados
```

y distingue:

```text
anterioridad documental
⇏
dependencia conceptual
```

Esto realiza funcionalmente el `rebase localizado` identificado durante la investigación sin necesidad de adoptar ese término.

---

## 15.4. Prueba de impacto

La aplicación del PCD a cambios dependientes ya contiene:

```text
resultado modificado
↓
análisis de impacto
↓
documentos afectados
```

y distingue:

```text
sin dependencia real
→ mantener congelado

dependencia real afectada
→ reapertura localizada
```

Por tanto:

```text
"prueba de impacto"
✔ función necesaria

nueva abstracción normativa
✘ no necesaria
```

---

## 15.5. Control previo a consolidación

`PCD-1` permite auditar:

```text
dependencias
compatibilidad externa
coherencia
independencia
```

y `PCD-2` exige una versión completa capaz de comprobar:

```text
coherencia global
terminología
dependencias
referencias
ausencia de restos obsoletos
resultado final
```

Estas funciones realizan lo que durante `v0.3` se denominó:

```text
barrera de consolidación
```

Por tanto:

```text
función
✔ existente

término nuevo
✘ no necesario
```

---

## 15.6. No modificación silenciosa

El PCD considera sustantivos los cambios de:

```text
dependencias
alcance
conclusiones
criterios
relaciones con otros documentos
```

Una modificación concurrente relevante no puede, por tanto, quedar absorbida legítimamente sin revisión.

---

## 15.7. Control de compatibilidad y convergencia

El PCD ya obliga a comparar documentos cuando una modificación conceptualmente anterior puede afectar a otros resultados consolidados posteriormente.

Esto cubre funcionalmente:

```text
línea A cambia fundamento
+
línea B produce otro resultado
↓
antes de consolidar
comprobar compatibilidad
```

Por tanto:

```text
convergencia
✔ necesidad funcional

"Punto de convergencia"
✘ nueva entidad normativa no necesaria
```

---

## 15.8. Orden conceptual y cronología

El propio PCD distingue:

```text
orden conceptual
≠
orden de bitácora
```

y prohíbe reconstruir retrospectivamente la historia documental para hacer coincidir la cronología real con el orden conceptual final.

Esto constituye evidencia interna adicional a favor de:

```text
orden justificativo
≠
cronología obligatoria global
```

---

## 15.9. Documento y versión

El PCD distingue:

```text
documento
≠
versión del documento
```

y conserva versiones históricas sustituidas.

Esto soporta directamente el resultado adversarial:

```text
resultado válido respecto de P0
```

puede conservar valor histórico aunque:

```text
P1
```

pase a ser vigente.

No es necesario introducir una nueva taxonomía para expresar esa diferencia.

---

## 15.10. Resultado de la auditoría del PCD

La comparación produjo:

```text
modelo v0.3
↓
identifica:
versionado
impacto
dependencias
convergencia
control de consolidación
rebase localizado

PCD vigente
↓
ya contiene:
documento/versión
análisis de impacto
reapertura por dependencia
intervención mínima
compatibilidad
dependencias
coherencia
propagación documental
historia real
cronología ≠ orden conceptual
```

Por tanto:

```text
nueva función documental necesaria
✘ no demostrada

modificación de 99
✘ no justificada
```

`99-protocolo-de-consolidacion-documental.md` no debe modificarse únicamente para introducir el modelo paralelo.

---

# 16. Primera reducción después de las auditorías

La primera reducción del modelo exploratorio descartó la necesidad de incorporar a Methodology:

```text
modelo v0.3 completo
```

o una combinación formada por:

```text
principio general
+
procedimiento operativo autónomo
```

El PCD ya realizaba gran parte del tratamiento operativo.

En esta etapa se formuló como candidato una versión todavía relativamente extensa de `PM-9`:

```markdown
## PM-9 — Separación entre dependencia lógica y orden temporal

El trabajo del proyecto no deberá presuponerse temporalmente lineal.

Podrán mantenerse abiertas simultáneamente varias líneas de trabajo cuando
cada una disponga de fundamento positivo suficiente y no exista entre ellas
una dependencia lógica que obligue a establecer un orden.

La simultaneidad no elimina las dependencias justificativas propias de cada
línea ni autoriza la apertura de actuaciones que carezcan de fundamento
independiente.

Cuando una línea dependa de resultados susceptibles de cambiar, deberán
permanecer identificables los fundamentos sobre los que trabaja.

Si un fundamento relevante cambia, su impacto deberá evaluarse antes de
consolidar como vigente cualquier resultado afectado.

El tratamiento documental de las dependencias modificadas, su propagación y
los controles de compatibilidad se regirán por el Protocolo de Consolidación
Documental.
```

Esta formulación representó una reducción importante respecto de `v0.3`.

Ya no introducía:

```text
15 reglas independientes
```

ni:

```text
una sección operativa autónoma
```

Conservaba, sin embargo, dentro del propio `PM-9`:

- identificación de fundamentos;
- evaluación de impacto;
- y remisión explícita al PCD.

Esta formulación debe conservarse como una etapa real de la investigación.

No constituye necesariamente la formulación normativa final.

---

# 17. Reducción adicional a consecuencia normativa candidata

La auditoría posterior mostró que incluso parte de las salvaguardas incluidas en la formulación anterior ya estaba realizada suficientemente por el PCD.

En particular:

```text
identificación de dependencias
análisis de impacto
propagación
compatibilidad
reapertura localizada
```

no necesitan duplicarse dentro del principio metodológico si su tratamiento documental ya está definido en `99`.

La reducción general quedó:

```text
modelo v0.3
15 componentes exploratorios
↓
auditoría de necesidad
↓
funciones ya cubiertas por 00 / 99
+
instrumentos únicamente exploratorios
+
un resultado general irreducible
```

El resultado irreducible es:

```text
dependencia lógica
puede imponer orden

mera coexistencia temporal
no establece por sí sola precedencia
```

De esta reducción surgió como candidato mínimo:

```markdown
## PM-9 — Separación entre dependencia lógica y orden temporal

La existencia de una dependencia lógica puede imponer un orden entre
actuaciones, pero la mera coexistencia de varias líneas de trabajo no
establece por sí misma una relación de precedencia.

Podrán mantenerse abiertas simultáneamente varias líneas cuando cada una
disponga de fundamento positivo suficiente y no exista entre ellas una
dependencia que obligue a establecer un orden.

El trabajo simultáneo no elimina las dependencias justificativas internas ni
autoriza la apertura de líneas carentes de fundamento propio.
```

Estado:

```text
justificación investigada
✔

candidato normativo
✔

incorporación en 00-protocolo-de-trabajo.md
○ pendiente

norma metodológica vigente
✘ todavía no
```

La diferencia entre las dos formulaciones debe conservarse porque documenta una reducción real:

```text
PM-9 intermedio
↓
aún contiene controles operativos

auditoría de redundancia
↓
PCD ya realiza esos controles

PM-9 mínimo
↓
conserva sólo el resultado metodológico irreducible
```

Por tanto:

```text
01-investigacion.md
→ conserva investigación, pruebas,
  modelos, alternativas, formulaciones intermedias
  y resultados negativos

00-protocolo-de-trabajo.md
→ deberá conservar únicamente
  el resultado metodológico finalmente aceptado

99-protocolo-de-consolidacion-documental.md
→ conserva el procedimiento documental ya vigente
```

---

# 18. Resultados negativos de la investigación

La investigación no sólo produjo un candidato positivo.

También estableció resultados negativos que deben conservarse para impedir que propuestas descartadas reaparezcan posteriormente como si permanecieran abiertas.

---

## 18.1. Linealidad temporal fuerte

```text
una línea abierta
↓
bloquea necesariamente todas las demás
```

Resultado:

```text
✘ rechazado
```

---

## 18.2. Paralelismo libre

```text
toda línea legítima
puede avanzar simultáneamente
sin controles adicionales
```

Resultado:

```text
✘ rechazado
```

---

## 18.3. Apertura por mera posibilidad

```text
"podemos trabajar en X"
↓
abrir X
```

Resultado:

```text
✘ no justificado
```

Cada línea continúa requiriendo fundamento positivo propio.

---

## 18.4. Autoridad por producción de evidencia

```text
A produce evidencia para B
↓
A adquiere autoridad sobre B
```

Resultado:

```text
✘ rechazado
```

---

## 18.5. `WIP = 3`

```text
máximo metodológicamente necesario
= 3
```

Resultado:

```text
✘ no demostrado
```

Puede mantenerse como recomendación operativa, no como norma derivada.

---

## 18.6. `N0–N3`

Resultado:

```text
herramienta exploratoria
✔

taxonomía metodológica oficial
✘
```

---

## 18.7. `rebase`

Durante la investigación se utilizó:

```text
rebase localizado
```

como denominación exploratoria de una revisión limitada a las partes realmente afectadas por un cambio de fundamento.

La auditoría posterior estableció:

```text
revisión localizada
✔ función útil

"rebase"
✘ término metodológico necesario no demostrado
```

---

## 18.8. Estado `DESFASADO`

No se demostró necesidad de crear un estado documental nuevo para representar resultados históricamente válidos cuya entrada haya cambiado.

La distinción vigente entre documento, versión, reapertura y vigencia ya proporciona recursos suficientes.

---

## 18.9. `barrera de consolidación`

Resultado:

```text
función
✔ necesaria

nuevo término normativo
✘ innecesario
```

El PCD ya realiza esa función.

---

## 18.10. `punto de convergencia`

Resultado:

```text
compatibilidad antes de consolidación conjunta
✔ necesaria

nueva entidad metodológica autónoma
✘ no demostrada
```

---

## 18.11. Traslado íntegro de `v0.3`

```text
modelo exploratorio útil
↓
copiar sus 15 reglas a Methodology
```

Resultado:

```text
✘ no justificado
```

---

## 18.12. Modificación de `99`

```text
trabajo paralelo
↓
modificar PCD
```

Resultado:

```text
✘ no justificado
```

El PCD ya contiene las funciones relevantes.

---

## 18.13. Sección operativa autónoma

Se consideró inicialmente que el nuevo principio pudiera requerir además una regla operativa o sección independiente.

La auditoría mostró:

```text
parte operativa
→ ya cubierta por PCD
```

Por tanto:

```text
PM-9
+
sección operativa autónoma
✘ no necesario
```

---

# 19. Impacto documental derivado

La auditoría produjo un impacto documental inicialmente muy contenido.

## `00-protocolo-de-trabajo.md`

```text
→ modificación sustantiva localizada
→ incorporar resultado metodológico aceptado
```

Además permanecen como candidatas derivadas o incidencias localizadas:

```text
precisión de PM-1
○

corrección de encabezado
"Según el dominio"
→
"Según el ámbito o cuerpo de responsabilidad"
○
```

Estas cuestiones deberán evaluarse explícitamente antes de modificar `00`.

---

## `99-protocolo-de-consolidacion-documental.md`

```text
→ no modificar
```

La investigación no ha demostrado una carencia funcional que justifique su reapertura.

---

## `16-bitacora-de-consolidacion.md`

```text
→ registrar posteriormente
  la reconsolidación de 00,
  si ésta se produce
```

---

## `PROJECT_STATUS.md` / `PROJECT_JOURNAL.md`

```text
→ evaluar después de consolidar 00
  si existe impacto real
```

No actualizar automáticamente.

---

## Product

```text
→ no modificar
```

---

## Realization

```text
→ no modificar
```

---

## Architecture

```text
→ no modificar
```

---

## Código

```text
→ no modificar
```

Regla general:

```text
resultado metodológico
↓
análisis de impacto
↓
actualizar únicamente
dependientes reales
```

---

# 20. Cierre de la investigación

La pregunta inicial era:

> **¿Debe el proyecto trabajar mediante una única secuencia temporal, impidiendo abrir una nueva línea hasta cerrar la anterior?**

La investigación permite responder:

```text
no
```

pero tampoco permite concluir:

```text
toda línea legítima puede avanzar
simultáneamente sin controles
```

El resultado queda delimitado así:

> **La secuencialidad necesaria procede de dependencias lógicas concretas, no de la mera coexistencia temporal de varias líneas. Cuando dos líneas poseen fundamento positivo independiente y ninguna depende justificativamente de la otra de forma que imponga precedencia, pueden permanecer abiertas simultáneamente.**

La investigación establece además que el paralelismo no elimina:

- el fundamento propio de cada línea;
- las dependencias justificativas internas;
- la separación de responsabilidades;
- los límites de autoridad;
- la trazabilidad;
- la evaluación de impacto;
- ni la coherencia previa a consolidaciones convergentes.

Sin embargo, la auditoría documental demuestra que buena parte de estos controles ya pertenece al PCD y no necesita ser duplicada en el nuevo principio metodológico.

Estado final de la investigación:

```text
H1 — linealidad temporal fuerte
✘ rechazada

H2 — paralelismo libre
✘ rechazada

H3 — paralelismo controlado por dependencias
✔ corroborada dentro del alcance investigado

modelo v0.3
✔ conservado como investigación
✘ no consolidado como normativa

PM-9
✔ suficientemente justificado
  como consecuencia normativa candidata

99-PCD
✔ suficiente dentro del alcance auditado
✘ modificación no derivada
```

La investigación puede cerrarse porque:

- la pregunta inicial ha recibido una respuesta delimitada;
- las dos hipótesis extremas han sido refutadas;
- la hipótesis intermedia ha sobrevivido a casos reales y a una prueba adversarial;
- los principales riesgos de concurrencia han sido identificados;
- esos riesgos han sido contrastados con el PCD vigente;
- se ha comprobado qué funciones ya estaban cubiertas;
- las abstracciones innecesarias han sido reducidas;
- y puede formularse una consecuencia normativa mínima sin trasladar el aparato exploratorio completo.

El cierre no implica que todo problema futuro de coordinación entre líneas quede resuelto.

Implica únicamente que, con la evidencia examinada, no existe fundamento para mantener abierta la pregunta general sobre si el proyecto necesita una única secuencia temporal global.

---

# 21. Límites conocidos

La investigación no demuestra:

```text
un número óptimo de líneas simultáneas
```

ni:

```text
una política universal de prioridad
```

ni:

```text
que todas las líneas independientes
deban abrirse
```

ni:

```text
que el paralelismo sea preferible
en todos los casos
```

ni:

```text
que H3 sea universalmente válida
fuera del alcance del proyecto investigado
```

Tampoco determina anticipadamente qué líneas concretas deben abrirse después de este cierre.

Por tanto:

```text
posibilidad de paralelismo
⇏ obligación de paralelizar

línea candidata
⇏ línea justificada

línea bloqueada
⇏ proyecto bloqueado

línea independiente posible
⇏ apertura automática
```

---

# 22. Condiciones de reapertura

La investigación deberá reabrirse si aparece evidencia capaz de cuestionar de forma relevante su resultado o su alcance.

Entre otras posibilidades:

- un caso real donde dos líneas sin dependencia lógica identificada no puedan coexistir sin producir una pérdida metodológica necesaria;
- evidencia de que los controles actuales de dependencia, autoridad, trazabilidad o compatibilidad resultan insuficientes para mantener la validez de resultados simultáneos;
- una situación en la que un cambio de fundamento no pueda tratarse correctamente mediante los mecanismos vigentes del PCD;
- evidencia de que el PCD permite una consolidación afectada por una dependencia modificada sin detectar ni evaluar su impacto;
- evidencia de que el principio derivado permite abrir líneas sin fundamento positivo propio;
- evidencia de que la distinción entre dependencia lógica y orden temporal genera contradicciones con otros principios metodológicos consolidados;
- o un nuevo caso suficientemente distinto de los examinados que invalide las condiciones bajo las que `H3` fue corroborada.

No constituirán por sí solas condiciones suficientes de reapertura:

```text
la existencia de una nueva línea
```

ni:

```text
la mera preferencia por trabajar
de forma secuencial o paralela
```

ni:

```text
la aparición de un nuevo término
para describir mecanismos ya cubiertos
```

ni:

```text
el deseo de completar el modelo v0.3
como arquitectura metodológica
```

La reapertura deberá responder a evidencia nueva capaz de afectar al resultado establecido.

---

# Estado de la investigación

```text
prueba de control global
✔ conservada únicamente como antecedente de apertura

pregunta sobre linealidad temporal
✔ investigada

modelo v0.1
✔ formulado y sometido a prueba

prueba contra casos reales
✔ realizada

modelo v0.2
✔ derivado

prueba adversarial
✔ realizada

validez histórica ≠ vigencia actual
✔ distinguida

prueba de impacto
✔ desarrollada

modelo v0.3
✔ derivado como modelo exploratorio

H1
✘ rechazada

H2
✘ rechazada

H3
✔ corroborada dentro del alcance investigado

resultado metodológico formal
✔ obtenido

auditoría de 00
✔ realizada

Objetivos
✔ auditados
✘ modificación no derivada

Gestión de cambios
✔ auditada
✘ modificación no derivada

auditoría de 99
✔ realizada

modificación de 99
✘ no justificada

PM-9 intermedio
✔ conservado como etapa de reducción

reducción adicional
✔ realizada

PM-9 mínimo
✔ justificado como candidato normativo
○ pendiente de incorporación documental

investigación histórica
✔ cerrada dentro del alcance examinado
```

---
