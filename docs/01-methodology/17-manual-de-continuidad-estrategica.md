# Manual de continuidad estratégica tras el cierre de una investigación

## Estado

**Norma metodológica operativa vigente.**

Este documento especializa el procedimiento de continuidad del proyecto después
del cierre de una investigación, prueba, reducción, Realization o actuación
estratégica.

No sustituye a:

```text
00-protocolo-de-trabajo.md
→ protocolo metodológico transversal

01-investigacion.md
→ metodología de investigación

99-protocolo-de-consolidacion-documental.md
→ reglas de consolidación documental
```

Debe interpretarse de forma compatible con ellos.

Su función específica es determinar cómo pasar desde un resultado cerrado al
siguiente estado justificable del proyecto sin:

- detener indebidamente la convergencia por ausencia de una nueva pérdida
  espontánea;
- ni abrir nuevas actuaciones por mera posibilidad técnica.

La metodología aplicada aquí queda además respaldada, en el estado estratégico
actual del proyecto, por:

```text
docs/08-project/11-ESTRATEGIA_DE_CONVERGENCIA_AL_PRODUCTO_FINAL.md
docs/08-project/54-ESTRATEGIA_GLOBAL_DE_CONVERGENCIA_POST_T1_AL_PRODUCTO_FINAL.md
```

---

# 1. Propósito

Este manual define cómo debe continuar el proyecto cada vez que una investigación, prueba, reducción, Realization o actuación estratégica quede cerrada.

Su objetivo es evitar dos errores opuestos:

```text
ERROR A
investigación cerrada
+
ningún problema nuevo inmediato
→ detener el proyecto
```

y:

```text
ERROR B
investigación cerrada
+
existen muchas posibilidades futuras
→ elegir arbitrariamente una nueva construcción
```

La regla correcta es:

```text
cierre
↓
consolidación del resultado
↓
actualización del estado
↓
comprobación de continuidad estratégica
↓
derivación de la siguiente actuación sólo si existe fundamento suficiente
```

---

# 2. Principio fundamental

El cierre de una investigación responde únicamente a la cuestión que esa investigación tenía abierta.

Por tanto:

```text
investigación cerrada
≠
proyecto terminado
```

y:

```text
investigación cerrada
≠
ausencia de siguiente actuación
```

pero también:

```text
investigación cerrada
≠
autorización automática para abrir otra investigación
```

Después de cada cierre debe realizarse una fase explícita de derivación.

---

# 3. Paso 1 — Cerrar correctamente la investigación

Antes de buscar qué hacer después, debe quedar establecido:

```text
qué se investigó

qué hipótesis o diferencia estaba en juego

qué evidencia se obtuvo

qué quedó demostrado

qué quedó reducido

qué quedó falsado

qué permanece indeterminado

qué alcance tuvo el resultado
```

Debe evitarse convertir un resultado local en una conclusión general.

Ejemplo:

```text
suficiencia demostrada en un caso
≠
suficiencia general demostrada
```

Igualmente:

```text
una diferencia no encontrada
≠
imposibilidad de que exista otra diferencia
```

---

# 4. Paso 2 — Determinar qué cambia realmente

Después del cierre debe preguntarse:

> ¿Qué decisión, compromiso, dependencia o estado del proyecto cambia como consecuencia de este resultado?

Puede ocurrir una de estas situaciones:

```text
A. el resultado satisface una dependencia existente;

B. el resultado demuestra una nueva insuficiencia;

C. el resultado reduce o elimina una candidata anterior;

D. el resultado deja una incertidumbre relevante;

E. el resultado no modifica ninguna decisión estratégica vigente.
```

Sólo las consecuencias demostradas deben incorporarse al estado consolidado.

---

# 5. Paso 3 — Actualizar el estado estratégico

Debe actualizarse, cuando corresponda:

```text
estado del compromiso afectado

estado de la dependencia afectada

criterio de finalización

brecha pendiente

horizonte vigente

roadmap

punto de reanudación
```

La actualización debe distinguir siempre entre:

```text
hecho demostrado

inferencia razonable

hipótesis pendiente
```

No deben mezclarse.

---

# 6. Paso 4 — Comprobar las dos ramas de continuidad

Después de cada cierre deben revisarse siempre dos ramas independientes.

## 6.1 Rama A — Convergencia planificada

Pregunta:

> ¿Existe alguna dependencia necesaria de un objetivo o compromiso estratégico vigente que todavía no esté resuelta?

La cadena de derivación es:

```text
PROJECT CHARTER
+
PLATFORM_VISION
+
PRODUCT
+
estado actual
↓
objetivo o compromiso vigente
↓
obligación todavía pendiente
↓
dependencia necesaria
↓
fundamento positivo
↓
siguiente actuación estratégicamente derivada
```

Esta rama permite continuar el proyecto aunque no haya aparecido una nueva pérdida espontánea.

Ejemplos de fundamento válido:

```text
dependencia necesaria de un compromiso de Product

requisito necesario para alcanzar un hito

criterio de finalización todavía no satisfecho

incertidumbre que impide decidir si un compromiso está satisfecho
```

---

## 6.2 Rama B — Evidencia emergente

Pregunta:

> ¿Ha aparecido nueva evidencia que muestre una pérdida, insuficiencia, incompatibilidad o diferencia no absorbida por los cierres vigentes?

La cadena es:

```text
nueva evidencia
↓
posible diferencia
↓
reducción
↓
comprobación de independencia
↓
GATE correspondiente
↓
posible reapertura estratégica
```

En el estado actual del proyecto:

```text
GATE-NH-01
```

permanece como mecanismo para valorar una nueva diferencia humana independiente y discriminable.

Pero:

```text
GATE-NH-01
≠
condición universal para continuar el proyecto
```

Sólo pertenece a esta rama de evidencia emergente.

---

# 7. Paso 5 — Comprobar si existe una brecha real

No debe confundirse una limitación de implementación con una brecha de Product.

Para considerar que existe una brecha real deben cumplirse, como mínimo:

```text
1. existe un compromiso u objetivo vigente;

2. contiene una obligación todavía no satisfecha;

3. existe evidencia de que el estado actual no satisface esa obligación;

4. la diferencia pertenece al alcance comprometido;

5. no consiste únicamente en una generalización técnica deseable;

6. puede formularse un criterio verificable de cierre.
```

Por tanto:

```text
“se podría mejorar”
≠
brecha
```

y:

```text
“no existe una solución general”
≠
brecha
```

salvo que esa generalidad forme parte del compromiso.

---

# 8. Paso 6 — Determinar si la siguiente actuación ya está derivada

Una actuación puede quedar:

```text
AUTOMÁTICAMENTE DERIVADA

ESTRATÉGICAMENTE DERIVADA

NO DERIVADA
```

La ausencia de actuación automáticamente derivada es perfectamente válida.

Pero después debe comprobarse si existe una actuación estratégicamente derivada.

Ejemplo actual:

```text
ninguna actuación automáticamente derivada
+
PV-005 sigue siendo un compromiso vigente
+
su satisfacción realizativa suficiente no está establecida
↓
DEP-PV005-01
```

Por tanto:

```text
DEP-PV005-01
→ actuación estratégicamente derivada
```

aunque no haya aparecido una nueva pérdida espontánea.

---

# 9. Paso 7 — Elegir el tipo mínimo de actuación

Una vez identificada la dependencia, no debe saltarse directamente a Implementation.

Debe elegirse la actuación mínima capaz de resolverla.

Posibilidades:

```text
comprobación documental

auditoría

investigación reductiva

prueba prospectiva

Realization mínima

experimento

Architecture

Implementation
```

La pregunta correcta es:

> ¿Cuál es la intervención mínima necesaria para resolver la dependencia actualmente demostrada?

No:

> ¿Qué podemos construir ahora?

---

# 10. Paso 8 — Definir criterio de finalización antes de actuar

Toda nueva actuación debe tener un criterio explícito de cierre.

Debe poder escribirse antes de empezar:

```text
ACTUACIÓN
→ objetivo

EVIDENCIA NECESARIA
→ qué debe observarse

CRITERIO DE FINALIZACIÓN
→ qué resultado permite cerrarla

POSIBLES RESULTADOS
→ qué decisiones se tomarán después
```

Si no puede formularse un criterio verificable, la actuación todavía no está suficientemente derivada.

---

# 11. Paso 9 — No derivar automáticamente un nuevo horizonte

Una nueva brecha o actuación no implica automáticamente:

```text
P6

nuevo Product Value

nueva capacidad

nuevo horizonte

nueva Architecture

nueva Implementation
```

Un nuevo horizonte sólo debe abrirse cuando exista:

```text
fundamento positivo
+
obligación pendiente
+
independencia suficiente
+
alcance discriminable
+
criterio de finalización
+
conjunto de dependencias suficientemente coherente
```

Por tanto:

```text
brecha
≠
nuevo horizonte
```

y:

```text
actuación necesaria
≠
nuevo horizonte
```

---

# 12. Paso 10 — Actualizar el punto de reanudación

Cada cierre debe terminar con una sección inequívoca:

```text
ESTADO RESULTANTE

qué quedó cerrado
qué sigue vigente
qué quedó reducido
qué permanece pendiente

SIGUIENTE ACTUACIÓN AUTOMÁTICA
→ ...

SIGUIENTE ACTUACIÓN ESTRATÉGICAMENTE DERIVADA
→ ...

NUEVO HORIZONTE
→ derivado / no derivado

PUNTO DE REANUDACIÓN
→ actuación concreta
```

Esto evita que una conversación futura tenga que reconstruir todo el proyecto desde cero.

---

# 13. Árbol operativo resumido

Después de cerrar cualquier investigación:

```text
INVESTIGACIÓN CERRADA
↓
¿resultado consolidado?
├── NO → consolidarlo
└── SÍ
     ↓
¿cambia algún compromiso, dependencia o decisión?
├── SÍ → actualizar estado
└── NO → conservar estado
     ↓
COMPROBAR RAMA A
¿existe dependencia necesaria de objetivo/compromiso vigente?
├── SÍ → derivar actuación estratégica mínima
└── NO
     ↓
COMPROBAR RAMA B
¿existe nueva evidencia de diferencia independiente?
├── SÍ → reducir + aplicar gate cuando corresponda
└── NO
     ↓
¿queda alguna incertidumbre que bloquee una decisión estratégica?
├── SÍ → investigación/comprobación mínima
└── NO
     ↓
¿Product vigente está satisfecho?
├── NO → localizar dependencia pendiente
└── SÍ
     ↓
reevaluar relación Product ↔ PLATFORM_VISION
     ↓
¿existe nuevo objetivo estratégico justificable?
├── SÍ → derivarlo
└── NO → estado estable sin nueva actuación
```

---

# 14. Lista de comprobación rápida

Antes de cerrar definitivamente una investigación deben contestarse estas preguntas:

```text
[ ] ¿Qué quedó demostrado?

[ ] ¿Cuál es el alcance exacto del resultado?

[ ] ¿Qué no quedó demostrado?

[ ] ¿Se modifica algún compromiso de Product?

[ ] ¿Se satisface o elimina alguna dependencia?

[ ] ¿Aparece una nueva brecha real?

[ ] ¿Existe una dependencia estratégica previamente vigente?

[ ] ¿Apareció nueva evidencia independiente?

[ ] ¿Debe aplicarse GATE-NH-01?

[ ] ¿Existe una actuación automáticamente derivada?

[ ] ¿Existe una actuación estratégicamente derivada?

[ ] ¿Cuál es la actuación mínima necesaria?

[ ] ¿Tiene criterio verificable de finalización?

[ ] ¿Hace falta realmente un nuevo horizonte?

[ ] ¿Ha quedado actualizado el punto de reanudación?
```

---

# 15. Regla de seguridad metodológica

Si al finalizar una investigación no sabemos qué hacer después, no debe concluirse inmediatamente:

```text
“no existe siguiente actuación”
```

Primero deben comprobarse expresamente:

```text
1. compromisos vigentes;

2. criterios todavía no satisfechos;

3. dependencias necesarias;

4. hitos pendientes;

5. incertidumbres que bloquean decisiones;

6. nueva evidencia emergente.
```

Sólo después de comprobar esas seis fuentes puede declararse legítimamente un estado estable sin siguiente actuación.

---

# 16. Fórmula general de continuidad

La regla general del proyecto queda:

```text
CIERRE
↓
CONSOLIDACIÓN
↓
ESTADO ACTUAL
↓
OBJETIVOS Y COMPROMISOS VIGENTES
+
NUEVA EVIDENCIA
↓
DEPENDENCIAS REALES
↓
ACTUACIÓN MÍNIMA JUSTIFICADA
↓
CRITERIO DE FINALIZACIÓN
↓
VALIDACIÓN
↓
NUEVO ESTADO
```

La finalidad no es mantener siempre una actuación abierta.

La finalidad es que:

```text
si existe trabajo necesario
→ pueda derivarse sin esperar una crisis nueva

y

si no existe trabajo suficientemente justificado
→ no se invente artificialmente.
```

Ese equilibrio constituye la regla de continuidad del proyecto.

---

# 17. Aplicación obligatoria

Este manual deberá aplicarse cada vez que se cierre:

- una investigación;
- una prueba prospectiva;
- una reducción;
- una Realization;
- una actuación estratégica;
- o cualquier otra línea cuyo cierre pueda modificar el estado de continuidad del proyecto.

La aplicación deberá producir, cuando corresponda:

```text
estado resultante actualizado

dependencias pendientes identificadas

siguiente actuación automática
→ si existe

siguiente actuación estratégicamente derivada
→ si existe

nuevo horizonte
→ derivado / no derivado

punto de reanudación
→ explícito
```

Si el resultado del cierre no modifica ninguna dependencia, compromiso ni decisión estratégica, deberá indicarse expresamente.

La ausencia de modificación también constituye un resultado válido.

---

# 18. Relación con la apertura de nuevas actuaciones

Este manual no autoriza por sí mismo la apertura de ninguna investigación o construcción.

Su función es determinar si existe fundamento suficiente para abrirla.

Una nueva actuación sólo deberá abrirse cuando pueda identificarse:

```text
fundamento positivo suficiente
+
dependencia o diferencia concreta
+
alcance mínimo
+
criterio verificable de finalización
```

Cuando esa cadena no pueda establecerse, la actuación permanecerá no derivada.

Cuando pueda establecerse, deberá elegirse el tipo mínimo de actuación capaz de resolverla.

---

## Estado del documento

**Vigente como manual operativo de continuidad estratégica.**

Este documento deberá utilizarse como procedimiento ordinario de cierre y reanudación del proyecto.
