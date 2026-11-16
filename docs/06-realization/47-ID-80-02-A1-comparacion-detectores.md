# ID-80-02-A1 — Investigación de mecanismos para detección de diferencias

**Fecha:** 16/11/2026  
**Estado:** investigación comparativa cerrada; testigo realizativo seleccionado, todavía no construido.  
**Dependencia:** `DP-80-02-A — detección auxiliar verificable`.  
**Antecedente:** `R-80-02-M3` demuestra la frontera funcional U1; permanece abierta U2 — calidad del detector real.

---

# 1. Pregunta de investigación

> ¿Qué mecanismo permite localizar diferencias reales entre dos documentos
> textuales relacionados con calidad suficiente para reducir trabajo mecánico
> humano, manteniendo procedencia verificable y sin decidir por sí mismo qué
> diferencia es importante?

No se investiga todavía:

- edición automática;
- corrección automática;
- selección de versión correcta;
- merge;
- valoración de relevancia;
- ni generación de texto final.

---

# 2. Criterios de comparación

La evaluación se realiza cualitativamente según:

1. **Cobertura literal**  
   Capacidad para localizar adiciones, eliminaciones y sustituciones reales.

2. **Falsos negativos**  
   Riesgo de omitir diferencias presentes.

3. **Falsos positivos / ruido**  
   Riesgo de presentar como diferencia significativa lo que sólo es una
   consecuencia de alineación o reformateo.

4. **Verificabilidad**  
   Facilidad con la que la persona puede reconstruir exactamente qué fragmentos
   de D1 y D2 originan cada detección.

5. **Determinismo y repetibilidad**  
   Mismos textos → mismo resultado.

6. **Coste operativo**  
   Dependencias, latencia, consumo de recursos y necesidad de servicios externos.

7. **Complejidad realizativa**  
   Cantidad de decisiones técnicas adicionales necesarias.

8. **Riesgo de invadir F2/F3**  
   Tendencia del mecanismo a mezclar detección con interpretación, relevancia o
   recomendación.

9. **Escalabilidad textual**  
   Comportamiento razonable al crecer la longitud de los documentos.

10. **Valor de investigación**  
    Capacidad del testigo para falsar pronto una hipótesis relevante sin
    sobreconstrucción.

---

# 3. Alternativa A — diff determinista

## 3.1. Naturaleza

Compara representaciones textuales mediante un algoritmo determinista y produce
operaciones de diferencia entre ambas entradas.

Puede trabajar a distintas granularidades:

- línea;
- palabra;
- carácter;
- bloques derivados de una segmentación previa.

No se selecciona todavía una biblioteca ni implementación concreta.

## 3.2. Fortalezas

### Cobertura literal

Para diferencias textuales efectivamente presentes es la alternativa con mayor
capacidad de exhaustividad estructural dentro de la representación comparada.

Puede detectar de forma directa:

- inserciones;
- eliminaciones;
- sustituciones;
- cambios de cifras;
- cambios de fechas;
- cambios de palabras;
- modificaciones tipográficas.

### Verificabilidad

Es especialmente fuerte:

```text
fragmento D1
+
operación de diferencia
+
fragmento D2
```

pueden reconstruirse sin depender de una explicación generada.

### Determinismo

Con la misma entrada y configuración debe producir el mismo resultado.

### Coste

Puede ejecutarse localmente y sin llamadas externas.

### Frontera funcional

No necesita atribuir significado ni relevancia.

Por diseño encaja bien con:

```text
F1 detección
≠
F2 juicio
```

## 3.3. Debilidades

### Ruido de alineación

Un diff ingenuo puede producir mucho ruido cuando:

- un párrafo se desplaza;
- se reformatea el texto;
- cambia la segmentación;
- una reescritura amplia conserva parcialmente el significado.

### Semántica

No detecta por sí mismo equivalencia o contradicción semántica entre
formulaciones distintas.

Pero esa carencia no implica todavía incumplimiento de DP-80-02-A, porque el
problema actual es localizar diferencias textuales reales, no decidir su
significado.

## 3.4. Riesgo principal

Seleccionar demasiado pronto una granularidad o algoritmo concreto y confundir
la implementación inicial con la obligación del producto.

---

# 4. Alternativa B — LLM como detector directo

## 4.1. Naturaleza

Se entregan D1 y D2 a un modelo y se solicita que enumere las diferencias.

## 4.2. Fortalezas

### Capacidad semántica

Puede reconocer:

- paráfrasis;
- cambios de sentido;
- contradicciones;
- relaciones no literales;
- cambios desplazados estructuralmente.

### Presentación

Puede resumir diferencias en lenguaje humano y agrupar cambios relacionados.

Esto podría reducir mucho ruido en documentos complejos.

## 4.3. Debilidades

### Exhaustividad no garantizada

Un LLM puede omitir diferencias pequeñas o distribuidas, especialmente cuando:

- los documentos son largos;
- existen muchas diferencias;
- algunas parecen poco relevantes;
- el contexto excede o tensiona la ventana disponible.

Esto es particularmente problemático porque el objetivo de F1 es aliviar la
búsqueda mecánica. Una omisión silenciosa trasladaría otra vez a la persona la
obligación de verificar exhaustivamente ambos textos.

### Falsos positivos / reformulación

Puede describir como diferencia algo inferido más allá de la literalidad.

### Repetibilidad

La salida puede variar según:

- modelo;
- versión;
- prompt;
- temperatura/configuración;
- contexto.

### Verificabilidad

Puede mejorarse exigiendo citas o fragmentos fuente, pero sigue existiendo una
capa generativa entre la fuente y la detección.

### Riesgo de invadir F2

Un LLM tiende naturalmente a producir expresiones como:

- “cambio importante”;
- “principal diferencia”;
- “esto implica”;
- “debería corregirse”.

Eso acerca F1 a F2/F3 y requiere controles adicionales.

### Coste y dependencia

Introduce servicio externo/modelo, latencia, consumo y gestión de errores.

## 4.4. Riesgo principal

Usar capacidad semántica para resolver un problema inicialmente literal y, a
cambio, perder exhaustividad, determinismo y simplicidad de verificación.

---

# 5. Alternativa C — enfoque híbrido

## 5.1. Naturaleza

Modelo general:

```text
diff determinista
↓
conjunto exhaustivo de cambios literales
↓
LLM opcional
↓
agrupa / explica / relaciona
↓
persona juzga pertinencia
```

La IA no sustituye al diff como fuente primaria de detección, sino que opera
sobre detecciones ya trazables.

## 5.2. Fortalezas

### Cobertura + semántica

Combina:

- exhaustividad literal del diff;
- capacidad explicativa o agrupadora del LLM.

### Verificabilidad

La fuente primaria puede permanecer ligada a fragmentos concretos.

### Escalabilidad conceptual

Permite tratar después:

- movimientos;
- reescrituras;
- agrupaciones de cambios;
- posibles equivalencias semánticas.

## 5.3. Debilidades

### Complejidad

Introduce dos motores y una relación entre ellos.

Hay que decidir:

- qué salida del diff consume el LLM;
- cómo se agrupan cambios;
- qué ocurre si el LLM contradice la evidencia literal;
- cómo se evita que la capa semántica decida pertinencia;
- cómo se presenta la procedencia de una agrupación.

### Coste

Mayor que A y no justificado todavía por evidencia de insuficiencia de A.

### Riesgo de sobreconstrucción

Puede resolver problemas que aún no han sido demostrados en el alcance actual.

## 5.4. Riesgo principal

Construir desde el principio una arquitectura más rica de la necesaria antes de
haber comprobado si el diff determinista ya elimina la mayor parte del trabajo
mecánico.

---

# 6. Comparación cualitativa

| Criterio | Diff determinista | LLM directo | Híbrido |
| --- | --- | --- | --- |
| Cobertura literal | Alta | Media / no garantizada | Alta |
| Riesgo de omisión literal | Bajo | Medio-alto | Bajo |
| Ruido por alineación | Medio | Bajo-medio | Potencialmente bajo |
| Verificabilidad | Muy alta | Media | Alta |
| Determinismo | Muy alto | Bajo-medio | Alto en capa primaria |
| Coste operativo | Bajo | Medio-alto | Alto |
| Complejidad | Baja-moderada | Moderada | Alta |
| Riesgo de invadir F2/F3 | Muy bajo | Alto | Medio |
| Capacidad semántica | Baja | Alta | Alta |
| Reversibilidad | Alta | Alta | Media-alta |
| Sobreconstrucción inicial | Baja | Media | Alta |
| Valor como primer testigo | Muy alto | Medio | Bajo-medio |

---

# 7. Contraargumento más fuerte contra el diff

El argumento más fuerte es:

> si los textos están ampliamente reescritos o contienen bloques movidos, un diff
> literal puede producir tanto ruido que el usuario siga soportando una carga
> elevada.

Este riesgo es real.

Sin embargo, todavía no existe evidencia de que el dominio inicial requiera
resolver primero ese caso más complejo.

Los casos empíricos ejercidos hasta ahora contienen diferencias del tipo:

- cifras;
- fechas;
- frases;
- condiciones;
- disponibilidad de una alternativa.

En ese tipo de material, un detector literal puede resolver directamente la
parte mecánica ya observada.

Por tanto, el riesgo debe convertirse en falsador del primer testigo, no en
razón para saltar de inmediato a una solución híbrida.

---

# 8. Contraargumento más fuerte contra el LLM directo

Puede parecer que, puesto que la finalidad es aliviar trabajo humano, debería
usarse desde el principio la alternativa con mayor capacidad intelectual.

Ese razonamiento confunde:

```text
capacidad del mecanismo
con
adecuación al problema reducido
```

Para F1, omitir silenciosamente una diferencia literal es peor que presentar una
diferencia cuya relevancia todavía deba juzgar la persona.

El LLM directo añade capacidad semántica, pero debilita tres propiedades críticas
del detector primario:

- exhaustividad verificable;
- repetibilidad;
- separación limpia entre detección y juicio.

No queda seleccionado como detector primario inicial.

---

# 9. Resultado de la investigación

Se selecciona como primer mecanismo a contrastar:

`MD-80-02-A1 — diff determinista con procedencia verificable`.

La selección es provisional y realizativa, no normativa.

No significa:

- que Product exija diff;
- que un LLM quede descartado;
- que el híbrido no pueda ser superior después;
- que toda diferencia relevante sea literal.

Significa únicamente:

> el diff determinista es la hipótesis mínima con mejor relación entre cobertura
> literal, trazabilidad, determinismo, coste y separación F1/F2 para comprobar
> primero si puede eliminar el trabajo mecánico observado.

---

# 10. Falsadores de MD-80-02-A1

El mecanismo deberá considerarse insuficiente si, en casos representativos,
ocurre materialmente alguno de estos resultados:

1. omite diferencias literales reales;
2. fragmenta una única diferencia en ruido difícil de interpretar;
3. cambios de posición o reformateo generan una cantidad de falsos cambios que
   devuelve la carga mecánica a la persona;
4. no permite asociar de forma clara cada cambio con D1 y D2;
5. su salida necesita interpretación automática para ser utilizable;
6. la persona sigue necesitando releer exhaustivamente ambos documentos para
   confiar en que no falta nada.

Si aparece alguno de estos falsadores, la siguiente alternativa preferente será
evaluar el enfoque híbrido, no saltar automáticamente a LLM directo.

---

# 11. Testigo realizativo derivado

Se deriva:

`R-80-02-M4 — Testigo de detección literal determinista`.

Objetivo:

> dada una pareja D1/D2 con diferencias literales conocidas, producir de forma
> determinista un conjunto de detecciones trazables compatible con la interfaz
> conceptual de `R-80-02-M3`.

Alcance mínimo del primer testigo:

- sustitución de palabra o frase;
- inserción;
- eliminación;
- cambio numérico;
- múltiples diferencias independientes.

Fuera de alcance inicial:

- equivalencia semántica;
- bloques movidos complejos;
- reescrituras completas;
- resumen de relevancia;
- recomendación;
- edición.

---

# 12. Gate técnico de R-80-02-M4

El testigo será técnicamente suficiente si demuestra conjuntamente:

```text
mismas entradas
→ misma salida

diferencias conocidas
→ detectadas

cada detección
→ vinculable a fragmentos D1/D2

sin diferencias
→ salida vacía

detección
→ sin relevancia ni recomendación
```

Sólo después deberá realizarse un contraste humano para comprobar si la salida
reduce realmente el trabajo de localización frente a la comparación manual.

---

# 13. Decisión

```text
ID-80-02-A1
→ CERRADA

primer mecanismo seleccionado
→ MD-80-02-A1
   diff determinista con procedencia verificable

LLM directo
→ no seleccionado como detector primario inicial

híbrido
→ alternativa de escalado si el diff demuestra insuficiencia

siguiente actuación
→ derivar tests RED de R-80-02-M4
   sin implementar todavía el detector
```
