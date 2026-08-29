# Protocolo mínimo de observación de uso de `R-U2-M1`

## Estado

**Identificador:** `POU-RU2M1-01`
**Naturaleza:** protocolo local de observación de uso.
**Ámbito:** `R-U2-M1`.
**Estado:** tres aplicaciones completadas; suficiencia instrumental inicial conservada; insuficiencia preobservacional local identificada y corregida; revisión ejercida formalmente en `OU-RU2M1-003`; suficiencia instrumental local de la versión revisada establecida; suficiencia general no establecida.
**Realización observada:** `R-U2-M1`.
**Resultado de referencia:** `RC-RU2M1-01`.

---

## 1. Propósito

Este documento establece el protocolo mínimo para observar `R-U2-M1`
en una situación efectiva de uso sin modificar previamente la realización.

Su finalidad consiste en obtener evidencia sobre lo que ocurre cuando una
persona utiliza la realización para atravesar una trayectoria de reanudación:

```text
S1
↓
producción o alcance de X
↓
interrupción
↓
S2(X)
↓
posibilidad posterior de actuación
↓
Y, si la persona decide producirlo
```

La observación pretende localizar fenómenos de uso que puedan:

- aportar evidencia positiva dentro de la situación observada;
- revelar una dificultad cuya atribución todavía deba investigarse;
- revelar una insuficiencia observable;
- revelar una pérdida concreta;
- mostrar una dependencia necesaria todavía no satisfecha;
- o no producir ningún fundamento para modificar la realización.

El protocolo no presupone que `R-U2-M1` sea insuficiente.

---

## 2. Justificación de la observación

`R-U2-M1` ha sido construida, validada y auditada como primera realización
contingente destinada al uso dentro del alcance actualmente establecido.

Su validación técnica demuestra que puede realizar la estructura para la que
fue construida.

No demuestra, sin embargo, utilidad general para personas o situaciones no
observadas.

El estado actual permite por tanto distinguir:

```text
realización destinada al uso
        ↓
validación técnica disponible
        ↓
observación de uso posible
```

de:

```text
realización destinada al uso
        ↓
suposición de insuficiencias
        ↓
ampliación automática
```

La segunda trayectoria queda excluida.

La observación se justifica precisamente porque permite obtener evidencia
antes de decidir si existe fundamento para una actuación posterior.

---

## 3. Objeto de observación

El objeto de observación es exclusivamente `R-U2-M1` en su forma actualmente
consolidada.

No se observará una versión ampliada, corregida o adaptada durante la misma
trayectoria.

La realización deberá conservar durante la observación sus mecanismos
actuales, incluidos aquellos que permanecen contingentes.

La observación no convierte esos mecanismos en requisitos de Product.

---

## 4. Pregunta de observación

La pregunta principal es:

> **¿Qué ocurre cuando una persona utiliza `R-U2-M1` para reanudar una
> actividad tras una interrupción y qué diferencias, dificultades, pérdidas
> o necesidades aparecen durante esa trayectoria?**

Esta pregunta no presupone:

- que deba aparecer una dificultad;
- que `R-U2-M1` deba modificarse;
- que la persona deba producir necesariamente `Y`;
- que toda dificultad observada sea atribuible a la realización;
- ni que una posibilidad imaginada constituya una necesidad.

---

## 5. Unidad mínima de observación

Una observación completa requiere una trayectoria constituida por:

```text
S1
↓
X
↓
interrupción
↓
S2(X)
```

La producción posterior de `Y` es observable cuando ocurre, pero no se
establece como obligación de la persona.

Por tanto:

```text
ausencia voluntaria de Y
≠
fallo automático de R-U2-M1
```

La cuestión relevante es qué posibilidades quedan efectivamente disponibles
en `S2(X)` y qué ocurre cuando la persona se encuentra en esa situación.

---

## 6. Condiciones de la observación

### 6.1. Actividad real

Siempre que sea posible, la observación deberá producirse durante una
actividad intelectual real para la persona.

No se deberá inventar una tarea artificial únicamente para obtener un
resultado favorable.

La actividad concreta podrá variar entre observaciones.

---

### 6.2. Realización sin modificación

Durante una trayectoria de observación no deberá modificarse `R-U2-M1`.

Si aparece una dificultad:

```text
observar
↓
registrar
↓
analizar posteriormente
```

y no:

```text
observar
↓
corregir inmediatamente
↓
continuar como si fuera la misma observación
```

Una modificación produciría una realización diferente y rompería la
trazabilidad de la trayectoria observada.

---

### 6.3. Interrupción

La interrupción deberá producir una separación efectiva entre `S1` y `S2`.

No se establece una duración mínima universal.

Deberá registrarse:

- cuándo terminó `S1`;
- cuándo comenzó `S2`;
- y el intervalo transcurrido.

La duración concreta pertenece a la observación y no constituye un requisito
general de `R-U2`.

---

### 6.4. No imposición semántica

No deberá exigirse que `Y`:

- continúe semánticamente `X`;
- responda a `X`;
- desarrolle `X`;
- tenga el mismo propósito;
- ni pertenezca a una tarea o workflow predefinido.

La libertad semántica de la actuación posterior debe conservarse.

---

### 6.5. Constitución preobservacional de `S1`

Antes de iniciar una aplicación completa del protocolo, deberá comprobarse que
la ejecución destinada a constituir `S1` comenzó:

```text
sin X válido restaurado
```

Esta condición procede de la especificación vigente de `R-U2-M1`.

Si la ejecución comienza con un `X` válido restaurado, constituye `S2(X)` y
no el `S1` requerido para iniciar una nueva trayectoria completa:

```text
ejecución comienza
con X válido restaurado
↓
S2(X)
↓
no iniciar todavía
S1 → X → interrupción → S2(X)
```

En ese caso, la trayectoria no deberá considerarse iniciada.

Antes de iniciarla deberá disponerse de una ejecución que satisfaga la
condición de `S1`.

El protocolo no prescribe el mecanismo técnico mediante el que se alcance esa
condición.

Por tanto:

```text
ejecución destinada a S1
sin X válido restaurado
=
condición protocolaria

pero

borrado de localStorage
ausencia absoluta de estado previo
u otro mecanismo concreto
=
no derivados
```

Cualquier actuación necesaria para preparar esa condición deberá distinguirse
del inicio efectivo de la trayectoria observada.

---

## 7. Separación entre evidencia e interpretación

Toda observación deberá distinguir explícitamente al menos tres tipos de
registro.

### 7.1. Hecho observado

Algo directamente observable durante la trayectoria.

Ejemplos:

```text
X fue introducido.
La situación terminó.
La aplicación fue cerrada.
X estaba disponible al regresar.
La persona realizó una acción.
Se produjo Y.
La persona abrió otra herramienta.
```

---

### 7.2. Declaración de la persona

Algo expresado por la persona durante o después de la trayectoria.

Ejemplos:

```text
"No recuerdo a qué se refería esto."

"Esto me basta para continuar."

"Necesitaría ver también otra cosa."
```

Una declaración constituye evidencia de lo que la persona expresa.

No deberá transformarse automáticamente en una propiedad objetiva de la
realización.

---

### 7.3. Interpretación

Una explicación propuesta posteriormente sobre los hechos observados.

Ejemplo:

```text
Interpretación:
la dificultad podría depender de que X no conserva suficiente contexto.
```

Las interpretaciones deberán permanecer identificadas como tales hasta que
dispongan de evidencia suficiente.

Por tanto:

```text
hecho
≠
declaración
≠
interpretación
```

---

## 8. Trayectoria mínima de observación

### Fase 1 — Situación `S1`

Registrar:

- fecha y hora;
- actividad que la persona estaba realizando;
- actuación realizada en `R-U2-M1`;
- valor literal de `X`, cuando proceda;
- circunstancias relevantes observables.

No deberán añadirse interpretaciones durante este registro.

---

### Fase 2 — Interrupción

Registrar:

- final de `S1`;
- forma de interrupción;
- inicio posterior de `S2`;
- tiempo transcurrido.

No se establece previamente qué duración debería producir una reanudación
"correcta".

---

### Fase 3 — Situación `S2(X)`

Observar antes de intervenir sobre la realización.

Registrar:

- qué presenta la realización;
- qué hace inicialmente la persona;
- si utiliza `X`;
- si ignora `X`;
- si necesita realizar actuaciones externas;
- si manifiesta una dificultad;
- si manifiesta que puede continuar;
- y cualquier otra diferencia directamente observable.

---

### Fase 4 — Actuación posterior

Si la persona produce `Y`, registrar:

- el valor de `Y`;
- la acción mediante la que se produjo;
- cualquier actuación intermedia observable;
- y cualquier recurso externo utilizado.

La mera existencia de `Y` no deberá interpretarse automáticamente como prueba
de utilidad.

La ausencia de `Y` tampoco deberá interpretarse automáticamente como fallo.

---

### Fase 5 — Registro posterior

Una vez terminada la trayectoria podrán registrarse:

- declaraciones de la persona;
- dificultades observadas;
- posibles pérdidas;
- posibles insuficiencias;
- hipótesis explicativas;
- posibilidades imaginadas durante el uso.

Estas categorías deberán permanecer diferenciadas.

---

## 9. Fenómenos especialmente relevantes

Sin convertirlos en una lista cerrada ni presuponer que deban aparecer,
merecen atención fenómenos como:

- imposibilidad de reanudar una actuación que la persona esperaba poder
  realizar;
- necesidad de reconstruir externamente algo que resultaba necesario;
- pérdida de algo necesario entre `S1` y `S2`;
- imposibilidad de reconocer o utilizar lo anteriormente disponible;
- necesidad de recurrir a otra herramienta para restablecer una condición
  necesaria;
- actuación innecesaria impuesta por la realización;
- dificultad producida por una decisión contingente de `R-U2-M1`;
- diferencia positiva producida por la presencia de `X`;
- suficiencia de la realización para la situación observada.

Esta lista funciona como guía de atención.

No constituye un catálogo anticipado de requisitos.

---

## 10. Clasificación posterior de los resultados

Cada fenómeno observado deberá clasificarse provisionalmente en una de las
siguientes situaciones.

### A. Sin insuficiencia observable

La trayectoria puede realizarse y no aparece una pérdida relevante.

Resultado:

```text
no se deriva modificación
```

---

### B. Evidencia positiva local

La observación muestra una diferencia favorable o una posibilidad efectiva
en la situación concreta.

Resultado:

```text
evidencia positiva para el caso observado
```

No permite generalizar utilidad a otras personas o situaciones.

---

### C. Dificultad de atribución no establecida

Aparece una dificultad, pero todavía no se ha demostrado que proceda de
`R-U2-M1`.

Resultado:

```text
fenómeno registrado
↓
atribución pendiente
↓
ninguna modificación derivada
```

---

### D. Posibilidad o mejora imaginada

Durante el uso aparece una idea que podría incorporarse.

Resultado:

```text
posibilidad registrada
↓
ninguna necesidad demostrada
↓
ninguna implementación derivada
```

---

### E. Insuficiencia o pérdida candidata

Aparece una pérdida concreta o una imposibilidad cuya relación con
`R-U2-M1` dispone de evidencia suficiente para merecer investigación.

Resultado:

```text
fenómeno observado
↓
pérdida candidata
↓
nueva investigación justificable
```

Esto no autoriza todavía una modificación.

---

### F. Incompatibilidad con la realización consolidada

Aparece evidencia que pone en cuestión alguna propiedad que `R-U2-M1`
afirma satisfacer dentro de su alcance.

Resultado:

```text
evidencia incompatible
↓
reapertura de R-U2-M1
```

La reapertura deberá realizarse explícitamente.

---

## 11. Criterio para abrir una actuación posterior

Una observación no deberá convertirse directamente en una nueva
funcionalidad.

La cadena mínima será:

```text
observación
↓
fenómeno
↓
análisis de atribución
↓
pérdida o necesidad demostrable
↓
determinación del cuerpo competente
↓
investigación
↓
actuación, sólo si queda justificada
```

Para considerar que existe fundamento para investigar una modificación de
`R-U2-M1` deberán concurrir, al menos:

1. un fenómeno efectivamente observado;
2. una diferencia relevante respecto de la situación de uso;
3. evidencia suficiente de que la realización interviene en esa diferencia;
4. una pérdida, imposibilidad o necesidad concreta;
5. ausencia de una respuesta suficiente dentro de la realización actual.

Incluso cuando estas condiciones se cumplan:

```text
investigación justificada
≠
solución ya determinada
```

---

## 12. Conclusiones que una observación aislada no permite

Una observación individual no permite concluir que:

1. `R-U2-M1` sea útil en general;
2. `R-U2-M1` sea inútil en general;
3. `PV-001` haya quedado completamente realizado;
4. toda persona necesite la misma trayectoria;
5. toda reanudación de actividad adopte la forma `X → Y`;
6. una dificultad observada constituya automáticamente un requisito;
7. una petición de la persona constituya automáticamente una necesidad de
   Product;
8. una posibilidad imaginada deba implementarse;
9. los mecanismos contingentes de `R-U2-M1` deban generalizarse;
10. deba derivarse una arquitectura a partir de la observación;
11. una experiencia satisfactoria elimine la necesidad de futuras
    observaciones;
12. una experiencia insatisfactoria invalide por sí sola `PV-001`.

---

## 13. Primera aplicación del protocolo

La primera aplicación podrá realizarse con la propia persona que desarrolla
el proyecto.

Su estatuto será:

```text
observación instrumental inicial
```

y no:

```text
validación general con usuarios
```

Su finalidad principal será doble:

1. observar una primera trayectoria real de `R-U2-M1`;
2. comprobar que este protocolo permite registrar y discriminar los fenómenos
   sin anticipar soluciones.

Si el protocolo resulta insuficiente para registrar un fenómeno efectivamente
observado, podrá revisarse el protocolo sin que ello implique modificar
`R-U2-M1`.

---

## 14. Ficha mínima de observación

Cada observación podrá conservarse mediante la siguiente ficha.

```text
Identificador:
Fecha:

Realización:
R-U2-M1

Versión / commit observado:

Persona:
[autobservación / participante]

Actividad real:

Condición preobservacional
--------------------------
Ejecución iniciada sin X válido restaurado: [sí / no]
Actuaciones preparatorias, si existieron:

S1
--
Inicio:
Actuación realizada:
X:
Otros hechos observados:

Interrupción
------------
Inicio:
Fin:
Duración:
Forma de interrupción:

S2(X)
-----
Inicio:
X disponible:
Primera actuación observable:
Actuaciones posteriores:
Y, si existe:
Recursos externos utilizados:

Hechos observados
-----------------

Declaraciones de la persona
---------------------------

Interpretaciones posteriores
----------------------------

Posibles pérdidas o insuficiencias
----------------------------------

Posibilidades o mejoras imaginadas
----------------------------------

Clasificación provisional
-------------------------
[A / B / C / D / E / F]

Consecuencia
------------
[ninguna /
 observación adicional /
 investigación de atribución /
 investigación justificable /
 reapertura de R-U2-M1]

Observaciones sobre el propio protocolo
---------------------------------------
```

---

## 15. Criterio de suficiencia del protocolo

El protocolo no tiene éxito cuando descubre necesariamente un problema.

Tiene éxito cuando permite reconstruir de forma trazable:

```text
situación
↓
hechos observados
↓
declaraciones
↓
interpretaciones
↓
posible pérdida o ausencia de ella
↓
consecuencia justificable
```

sin transformar una observación, una preferencia o una idea en una
modificación automática del producto.

---

## 16. Condición de cierre de la primera aplicación

Una primera aplicación será suficiente para evaluar este protocolo cuando
haya producido una trayectoria completa o haya revelado de forma trazable por
qué dicha trayectoria no pudo completarse.

Después de esa aplicación deberá decidirse exclusivamente entre:

```text
protocolo suficiente
→ puede utilizarse en observaciones posteriores cuando exista razón para ello

protocolo insuficiente
→ revisar únicamente el protocolo

fenómeno relevante observado
→ investigar el fenómeno

ningún fenómeno relevante observado
→ no derivar nueva actuación
```

No se establece de antemano un número obligatorio de observaciones.

La repetición deberá justificarse por lo que se necesite conocer.

---

## 17. Relación con `R-U2-M1`

Este protocolo no modifica:

- `RU2-N01…RU2-N05`;
- `MO-01r`;
- `CY-01`;
- `CY-02`;
- `SCU-01`;
- `RC-RU2M1-01`;
- la especificación de `R-U2-M1`;
- ni sus mecanismos actuales.

Su función consiste únicamente en proporcionar una forma disciplinada de
obtener evidencia de uso susceptible de justificar —o de no justificar— una
investigación posterior.

---

## 18. Estado resultante

```text
POU-RU2M1-01
✔ protocolo mínimo derivado
✔ primera aplicación completada
✔ suficiencia instrumental inicial observada
✔ segunda aplicación completada
✔ insuficiencia preobservacional local localizada
✔ investigación de suficiencia preobservacional completada
✔ condición constitutiva de S1 identificada en R-U2-M1
✔ condición preobservacional incorporada al protocolo
✔ ficha mínima ampliada para registrar su cumplimiento
✔ revisión ejercida en una nueva aplicación formal
✔ tercera aplicación completada
✔ suficiencia instrumental local de la versión revisada establecida
○ suficiencia general no establecida

OU-RU2M1-001
✔ primera aplicación realizada
✔ trayectoria completada
✔ fenómeno relevante localizado
✔ RP-POU-RU2M1-01 formulado provisionalmente

OU-RU2M1-002
✔ segunda aplicación realizada
✔ trayectoria completada
✔ evidencia positiva local obtenida
✔ F-OU002-01 localizado
✔ cuestión preobservacional del protocolo localizada

investigación preobservacional
✔ abierta con fundamento positivo
✔ condición constitutiva de S1 reconstruida
✔ insuficiencia atribuida a POU-RU2M1-01
✔ investigación cerrada
→ documentada en
  07-investigacion-suficiencia-preobservacional-POU-RU2M1-01.md

revisión de POU-RU2M1-01
✔ modificación mínima derivada
✔ condición preobservacional explicitada
✔ mecanismo técnico dejado abierto
✔ trazabilidad incorporada a la ficha
✔ nueva aplicación formal realizada
✔ nueva evidencia de aplicación obtenida

OU-RU2M1-003
✔ tercera aplicación formal realizada
✔ condición preobservacional ejercida y satisfecha
✔ trayectoria completa observada
✔ clasificación B — Evidencia positiva local
✔ consecuencia: ninguna
✔ evaluación posterior cerrada

RP-POU-RU2M1-02
✔ suficiencia instrumental local de la versión revisada establecida por
  OU-RU2M1-003
```

La primera aplicación prevista por este protocolo se realizó en
`OU-RU2M1-001`.

La segunda aplicación se realizó en `OU-RU2M1-002` y permitió localizar una
insuficiencia preobservacional relativa a la constitución inicial de `S1`.

La investigación posterior estableció que una aplicación completa del
protocolo debe comenzar mediante una ejecución iniciada sin un `X` válido
restaurado.

Esta condición fue incorporada al protocolo sin prescribir el mecanismo
técnico mediante el que debía satisfacerse.

La versión revisada fue ejercida posteriormente mediante `OU-RU2M1-003`.

La aplicación permitió distinguir una ejecución inicialmente constituida como
`S2(X anterior)` del `S1` requerido, preparar de forma diferenciada una nueva
ejecución, satisfacer explícitamente la condición preobservacional y observar
una trayectoria completa.

La evidencia obtenida permite establecer `RP-POU-RU2M1-02` exclusivamente como
resultado local sobre la suficiencia instrumental de la versión revisada en
esta aplicación.

No establece:

```text
suficiencia general de POU-RU2M1-01
→ no

suficiencia universal del protocolo
→ no

utilidad general de R-U2-M1
→ no

necesidad de nuevas observaciones
→ no

necesidad de nueva investigación
→ no
```

La apertura de nuevas observaciones continúa sin quedar establecida
automáticamente y deberá justificarse por aquello que sea necesario conocer.

---
