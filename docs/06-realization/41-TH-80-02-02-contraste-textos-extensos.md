# TH-80-02-02 — Protocolo de contraste humano de dos textos extensos relacionados

**Fecha de apertura:** 14/11/2026  
**Estado:** prerregistrado; ejecución humana todavía no realizada.  
**Horizonte:** `H-80-02 — Comparación humana suficientemente simultánea de dos textos relacionados`.  
**Antecedente:** `TH-80-02-01`, cerrado con resultado `B — DIFERENCIA INSUFICIENTE` para textos breves.  
**Pregunta nueva:** si la suficiencia observada con textos breves se conserva cuando D1 y D2 dejan de caber simultáneamente en la superficie ordinaria.

---

# 1. Propósito

Este caso contrasta una hipótesis nueva y más reducida que la utilizada en
`TH-80-02-01`.

No se pregunta si dos textos pueden estar presentes en la misma actividad. Eso
ya está demostrado.

La pregunta es:

> Cuando dos textos relacionados son suficientemente extensos para no permanecer
> simultáneamente visibles en la disposición ordinaria, ¿puede la persona seguir
> contrastándolos de forma suficientemente directa o empieza a depender
> materialmente de desplazamiento, relocalización y memoria?

El caso no presupone:

- vista lado a lado;
- columnas;
- scroll sincronizado;
- resaltado;
- diff automático;
- anclajes;
- edición;
- ni conservación automática de diferencias.

---

# 2. Hipótesis

## `H-TH-80-02-02`

> La extensión suficiente de D1 y D2 hace que la disposición ordinaria vertical
> pierda continuidad comparativa, obligando a la persona a relocalizar
> repetidamente fragmentos correspondientes o a reconstruirlos desde memoria.

Esta hipótesis debe poder ser refutada.

Si el baseline ordinario sigue permitiendo comparar directamente sin una pérdida
material, no habrá fundamento para introducir un mecanismo adicional.

---

# 3. Fenómeno candidato

`F-80-02-LONG-01 — Pérdida de continuidad comparativa por separación espacial
de fragmentos relacionados`.

La pérdida no consiste en la mera existencia de desplazamiento.

```text
scroll
≠
fallo
```

La pérdida sólo aparece si el desplazamiento provoca de forma material:

```text
fragmento de D1
↓
desplazamiento
↓
fragmento de D2
↓
pérdida de correspondencia
o
dependencia de memoria
o
relocalización repetida
```

---

# 4. Diseño del caso

El caso utilizará dos documentos relacionados, `D1-L` y `D2-L`, con estructura
semejante y diferencias distribuidas entre:

- zona inicial;
- primer tercio;
- zona media;
- último tercio;
- cierre.

Los textos no se diseñan para ser artificialmente difíciles. Su única función es
superar la extensión que permitió en `TH-80-02-01` mantener D1 y D2 enteros a la
vista al mismo tiempo.

La persona no conocerá:

- cuántas diferencias existen;
- dónde están;
- cuáles son relevantes;
- ni si alguna diferencia anterior del caso breve se repite.

---

# 5. D1-L — versión anterior

## Plan de despliegue del programa Atlas

El programa Atlas tiene como objetivo probar durante un periodo limitado un nuevo
procedimiento de revisión documental antes de decidir si debe incorporarse al
trabajo ordinario. La prueba se realizará con un conjunto reducido de documentos
internos y no modificará por sí misma los procedimientos vigentes fuera del
piloto. La finalidad principal es comprobar si el nuevo procedimiento permite
detectar contradicciones relevantes sin aumentar de forma desproporcionada la
carga de revisión.

La fase inicial comenzará con un grupo de ocho documentos seleccionados por el
equipo coordinador. Cada documento deberá contener una versión anterior y una
versión posterior, ambas identificadas de forma inequívoca. El equipo podrá
incorporar documentos adicionales durante el piloto, pero sólo si pertenecen al
mismo tipo de actividad y si su incorporación no altera los criterios de
evaluación definidos al inicio.

Antes de que un documento entre en revisión deberán existir al menos dos fuentes
independientes que permitan comprobar los datos principales que aparecen en él.
Si alguna fuente no está disponible, el documento podrá permanecer en espera
hasta que se complete la evidencia. La ausencia temporal de una fuente no
invalidará por sí misma el resto del piloto ni obligará a retirar otros
documentos ya admitidos.

La revisión de cada pareja documental se realizará por una persona distinta de
quien haya preparado la versión posterior. Esa separación pretende reducir el
riesgo de que la persona autora dé por supuestos cambios que para un tercero no
resultan evidentes. Cuando no sea posible asignar una persona diferente, deberá
dejarse constancia de la excepción y el documento no contará como evidencia
principal para la decisión final del piloto.

Durante la comparación, la persona revisora deberá identificar diferencias que
puedan cambiar el significado operativo del documento. No será necesario anotar
variaciones puramente tipográficas salvo que alteren una cifra, un nombre, una
fecha o una obligación. La revisión deberá conservar la posibilidad de volver a
consultar ambas versiones hasta que se haya formulado una conclusión sobre las
diferencias consideradas pertinentes.

La alternativa Delta permanecerá disponible como vía de continuidad si durante
el piloto aparece una incompatibilidad que impida aplicar temporalmente el nuevo
procedimiento. Delta no será el recorrido preferente, pero podrá utilizarse para
evitar que una incidencia aislada bloquee completamente la actividad. Cada uso
de Delta deberá quedar registrado para distinguir una excepción operativa de una
adopción permanente.

Al terminar cada revisión se conservará una nota breve con las diferencias que
la persona haya considerado materialmente relevantes y con la actuación que
proponga a continuación. Esa nota no modificará automáticamente ninguno de los
dos documentos comparados. Si se considera necesaria una corrección, deberá
abrirse una actuación separada que identifique qué versión contiene el dato que
debe revisarse y qué fundamento permite corregirlo.

El equipo coordinador revisará semanalmente las incidencias acumuladas. Una
incidencia repetida en al menos tres documentos deberá examinarse para determinar
si pertenece al procedimiento o a los propios materiales. Las incidencias
aisladas podrán mantenerse abiertas hasta disponer de evidencia suficiente para
atribuirlas, sin que su mera aparición obligue a cambiar el piloto.

La fase operativa tendrá una duración inicial de cuatro semanas. Al final de la
tercera semana se realizará una revisión intermedia destinada únicamente a
detectar bloqueos o riesgos que impidan completar la prueba. Esa revisión
intermedia no podrá convertir el piloto en permanente ni ampliar su alcance sin
una decisión posterior explícita.

Para declarar completada la prueba deberán haberse revisado al menos seis de los
ocho documentos iniciales, deberá existir registro de las incidencias relevantes
y deberá poder reconstruirse qué decisión humana se tomó después de cada
comparación. Los documentos excluidos por falta de evidencia se contabilizarán
por separado y no se considerarán revisiones fallidas.

La decisión final deberá adoptarse antes del último viernes del mes en que
termine la fase operativa. Si para esa fecha existen incidencias abiertas que
puedan alterar materialmente la conclusión, la decisión podrá aplazarse una
semana, pero deberá mantenerse el piloto congelado durante ese periodo: no se
incorporarán documentos nuevos ni se ampliarán las reglas existentes.

Si el resultado es positivo, la siguiente actuación será preparar una propuesta
de integración limitada del procedimiento en el trabajo ordinario. Si el
resultado es negativo, el piloto se cerrará conservando la evidencia obtenida.
En ambos casos, la decisión final corresponderá a la persona responsable del
programa Atlas y no podrá ser sustituida automáticamente por el número de
diferencias detectadas.

---

# 6. D2-L — versión posterior

## Plan de despliegue del programa Atlas

El programa Atlas tiene como objetivo probar durante un periodo limitado un nuevo
procedimiento de revisión documental antes de decidir si debe incorporarse al
trabajo ordinario. La prueba se realizará con un conjunto reducido de documentos
internos y no modificará por sí misma los procedimientos vigentes fuera del
piloto. La finalidad principal es comprobar si el nuevo procedimiento permite
detectar contradicciones relevantes sin aumentar de forma desproporcionada la
carga de revisión.

La fase inicial comenzará con un grupo de doce documentos seleccionados por el
equipo coordinador. Cada documento deberá contener una versión anterior y una
versión posterior, ambas identificadas de forma inequívoca. El equipo podrá
incorporar documentos adicionales durante el piloto, pero sólo si pertenecen al
mismo tipo de actividad y si su incorporación no altera los criterios de
evaluación definidos al inicio.

Antes de que un documento entre en revisión deberán existir al menos dos fuentes
independientes que permitan comprobar los datos principales que aparecen en él.
Si alguna fuente no está disponible, el documento podrá permanecer en espera
hasta que se complete la evidencia. La ausencia temporal de una fuente no
invalidará por sí misma el resto del piloto ni obligará a retirar otros
documentos ya admitidos.

La revisión de cada pareja documental se realizará por una persona distinta de
quien haya preparado la versión posterior. Esa separación pretende reducir el
riesgo de que la persona autora dé por supuestos cambios que para un tercero no
resultan evidentes. Cuando no sea posible asignar una persona diferente, deberá
dejarse constancia de la excepción y el documento no contará como evidencia
principal para la decisión final del piloto.

Durante la comparación, la persona revisora deberá identificar diferencias que
puedan cambiar el significado operativo del documento. No será necesario anotar
variaciones puramente tipográficas salvo que alteren una cifra, un nombre, una
fecha o una obligación. La revisión deberá conservar la posibilidad de volver a
consultar ambas versiones hasta que se haya formulado una conclusión sobre las
diferencias consideradas pertinentes.

La alternativa Delta quedará descartada desde el inicio como vía de continuidad
si durante el piloto aparece una incompatibilidad que impida aplicar
temporalmente el nuevo procedimiento. Una incidencia que impida continuar deberá
detener la actividad afectada hasta que exista una resolución explícita. No se
utilizará una vía alternativa para mantener esa parte del trabajo en curso.

Al terminar cada revisión se conservará una nota breve con las diferencias que
la persona haya considerado materialmente relevantes y con la actuación que
proponga a continuación. Esa nota no modificará automáticamente ninguno de los
dos documentos comparados. Si se considera necesaria una corrección, deberá
abrirse una actuación separada que identifique qué versión contiene el dato que
debe revisarse y qué fundamento permite corregirlo.

El equipo coordinador revisará semanalmente las incidencias acumuladas. Una
incidencia repetida en al menos dos documentos deberá examinarse para determinar
si pertenece al procedimiento o a los propios materiales. Las incidencias
aisladas podrán mantenerse abiertas hasta disponer de evidencia suficiente para
atribuirlas, sin que su mera aparición obligue a cambiar el piloto.

La fase operativa tendrá una duración inicial de seis semanas. Al final de la
tercera semana se realizará una revisión intermedia destinada únicamente a
detectar bloqueos o riesgos que impidan completar la prueba. Esa revisión
intermedia no podrá convertir el piloto en permanente ni ampliar su alcance sin
una decisión posterior explícita.

Para declarar completada la prueba deberán haberse revisado al menos nueve de los
doce documentos iniciales, deberá existir registro de las incidencias relevantes
y deberá poder reconstruirse qué decisión humana se tomó después de cada
comparación. Los documentos excluidos por falta de evidencia se contabilizarán
por separado y no se considerarán revisiones fallidas.

La decisión final deberá adoptarse antes del último miércoles del mes en que
termine la fase operativa. Si para esa fecha existen incidencias abiertas que
puedan alterar materialmente la conclusión, la decisión podrá aplazarse una
semana, pero deberá mantenerse el piloto congelado durante ese periodo: no se
incorporarán documentos nuevos ni se ampliarán las reglas existentes.

Si el resultado es positivo, la siguiente actuación será preparar una propuesta
de integración limitada del procedimiento en el trabajo ordinario. Si el
resultado es negativo, el piloto se cerrará conservando la evidencia obtenida.
En ambos casos, la decisión final corresponderá a la persona responsable del
programa Atlas y no podrá ser sustituida automáticamente por el número de
diferencias detectadas.

---

# 7. Diferencias conocidas por el evaluador

Esta sección no debe utilizarse para orientar a la persona durante la prueba.

Las diferencias preparadas son:

1. tamaño del grupo inicial: `8 → 12 documentos`;
2. alternativa Delta: `disponible como continuidad → descartada`;
3. umbral para revisar incidencia repetida: `3 → 2 documentos`;
4. duración inicial del piloto: `4 → 6 semanas`;
5. umbral mínimo de revisiones: `6 de 8 → 9 de 12`;
6. fecha límite de decisión: `último viernes → último miércoles`.

Las diferencias están distribuidas a lo largo de los textos para impedir que una
única zona visible resuelva por sí sola la comparación.

---

# 8. Instrucción humana

Se dará únicamente esta instrucción:

> **Compara ambas versiones e indica qué diferencias consideras pertinentes para
> decidir si la versión posterior cambia materialmente el plan. Explica al final
> qué ha cambiado y qué consecuencias tendría.**

No se indicará el número ni la posición de las diferencias.

---

# 9. Observables

## O1 — continuidad de referencia

¿Puede la persona mantener una correspondencia estable entre fragmentos de D1-L
y D2-L?

## O2 — relocalización repetida

¿Debe volver a buscar de forma reiterada el mismo fragmento de uno de los textos
después de consultar el otro?

## O3 — dependencia de memoria

¿Debe retener contenido sustantivo en memoria para compararlo con un fragmento
que no puede mantener accesible?

## O4 — pérdida de posición

¿Pierde de forma material el lugar del texto que estaba contrastando?

## O5 — identidad de versión

¿Confunde qué formulación pertenece a D1-L o D2-L?

## O6 — diferencias reales

¿La conclusión se apoya en diferencias efectivamente presentes?

## O7 — pertinencia humana

¿La persona decide qué diferencias son materialmente relevantes sin que el
sistema lo determine?

## O8 — apoyo externo

¿Necesita usar una hoja, nota u otro medio externo para conservar diferencias o
posiciones de comparación?

El apoyo externo no constituye por sí solo un FAIL. Debe registrarse para saber
qué función está cumpliendo.

---

# 10. Falsadores

## `F-LONG-01 — No aparece pérdida por extensión`

La persona compara D1-L y D2-L con suficiente continuidad sin relocalización o
memoria materialmente superiores al caso breve.

Resultado: la hipótesis queda refutada dentro del alcance observado.

## `F-LONG-02 — Pérdida atribuible a contenido, no a separación espacial`

La dificultad procede de comprender el texto, no de mantener correspondencia
entre versiones.

Resultado: no puede atribuirse a la geometría o disponibilidad comparativa.

## `F-LONG-03 — Aprendizaje previo contamina el caso`

La persona conoce previamente las diferencias concretas de D1-L/D2-L.

Resultado: el caso deja de ser suficientemente discriminante y deberá repetirse
con materiales nuevos.

---

# 11. Criterio `CS-80-02-02`

Se considerará demostrada una pérdida material de continuidad comparativa sólo
si aparecen conjuntamente:

1. imposibilidad práctica de mantener ambos fragmentos correspondientes
   suficientemente accesibles;
2. relocalización repetida, pérdida de posición o dependencia de memoria;
3. relación observable entre esa dificultad y la separación espacial de los
   fragmentos;
4. mantenimiento de la capacidad humana para decidir pertinencia;
5. ausencia de una explicación alternativa más fuerte basada únicamente en la
   complejidad semántica del texto.

No se utilizarán umbrales artificiales de tiempo, clics o número de scrolls.

---

# 12. Posibles resultados

## A — HIPÓTESIS REFUTADA

`F-LONG-01` se cumple.

```text
textos extensos
→ baseline sigue siendo suficiente
→ no se deriva mecanismo nuevo
```

## B — PÉRDIDA MATERIAL DEMOSTRADA

`CS-80-02-02` queda satisfecho.

```text
separación espacial
→ pérdida de continuidad comparativa
→ reducir propiedad mínima necesaria
→ sólo después estudiar mecanismos
```

## C — RESULTADO INDETERMINADO

La dificultad aparece, pero no puede atribuirse con suficiente seguridad a la
separación espacial.

```text
nueva evidencia
→ atribución insuficiente
→ no modificar interfaz
```

---

# 13. Condición de ejecución

Este protocolo se ejecutará primero sobre un baseline controlado que presente
D1-L y D2-L mediante el recorrido ordinario.

No se modificará `ComparisonExperience` antes de observar el baseline.

Si el baseline demuestra una pérdida material, una segunda condición podrá
utilizarse después para contrastar una realización mínima dirigida únicamente a
la propiedad reducida.

Hasta entonces:

```text
TH-80-02-02
→ PRERREGISTRADO

baseline extenso
→ PENDIENTE

modificación de interfaz
→ NO DERIVADA
```

---

# 14. Ficha de ejecución

```text
Fecha:
Persona:
Condición:
Precondición de materiales verificada:

O1:
O2:
O3:
O4:
O5:
O6:
O7:
O8:

Falsadores:
Conclusión humana:
Resultado A/B/C:
Limitaciones:
Nueva propiedad mínima, si procede:
```
