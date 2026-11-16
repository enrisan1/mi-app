# Reapertura conceptual de H-80-02 frente a C-PV-80-04

**Fecha:** 16/11/2026  
**Estado:** reapertura estratégica cerrada en reducción conceptual; no se modifica todavía Product ni Realization.  
**Motivo:** reconsiderar qué parte del trabajo comparativo debe realizar la persona y qué parte puede delegarse a IA como apoyo auxiliar.

---

# 1. Punto de partida

La vertical H-80-02 se había reducido inicialmente alrededor de la capacidad de
hacer practicable una comparación humana suficientemente simultánea entre dos
textos relacionados.

La evidencia posterior mostró dos hechos:

1. mejorar la copresencia y conservar posiciones independientes reduce
   materialmente la fricción de comparación;
2. incluso con esa mejora, localizar manualmente diferencias en textos largos
   sigue siendo trabajo mecánico, tedioso y de escalabilidad pobre.

Esto obliga a distinguir entre:

```text
trabajo necesario para conservar autoridad humana
vs
trabajo mecánico susceptible de delegación
```

---

# 2. Cinco funciones distintas

La actividad “comparar dos documentos” no es una sola operación.

## F1 — Detección

Localizar diferencias observables entre D1 y D2.

Ejemplos:

- cambios de palabras;
- cifras distintas;
- frases añadidas o eliminadas;
- diferencias de fechas;
- cambios estructurales.

Naturaleza predominante: mecánica / analítica.

## F2 — Juicio

Determinar qué diferencias importan para el propósito de la actividad.

Ejemplos:

- cambio puramente tipográfico;
- cambio operativo;
- contradicción material;
- modificación irrelevante para la decisión actual.

Naturaleza predominante: evaluativa.

## F3 — Decisión

Determinar qué debe hacerse a partir de la diferencia relevante.

Ejemplos:

- conservar D1;
- conservar D2;
- pedir evidencia;
- corregir;
- no modificar;
- posponer;
- combinar mediante una regla ya determinada.

Naturaleza predominante: resolutiva.

## F4 — Ejecución

Realizar operaciones ya suficientemente determinadas.

Ejemplos:

- reemplazar un fragmento;
- aplicar una corrección aprobada;
- insertar una formulación ya decidida;
- eliminar una parte cuya eliminación ya fue determinada.

Naturaleza predominante: operacional.

## F5 — Validación

Comprobar que el resultado ejecutado corresponde a la decisión adoptada.

Ejemplos:

- verificar que sólo cambió lo autorizado;
- comprobar ausencia de alteraciones colaterales;
- aceptar o rechazar el resultado.

Naturaleza predominante: control / cierre.

---

# 3. Qué exige realmente C-PV-80-02

C-PV-80-02 establece que:

> cuando sea necesario reconocer diferencias entre dos documentos relacionados,
> la comparación debe ser suficientemente practicable para que la persona pueda
> identificar las diferencias pertinentes y decidir actuaciones posteriores.

También establece explícitamente:

```text
la plataforma no decide qué diferencia es importante
```

Pero no establece:

```text
la persona debe localizar manualmente todas las diferencias
```

Ni tampoco:

```text
la persona debe ejecutar manualmente cada modificación
```

La interpretación anterior había aproximado demasiado:

```text
identificar diferencias pertinentes
≈
buscar manualmente diferencias
```

Esa equivalencia no está justificada.

Una interpretación compatible más precisa es:

```text
sistema puede detectar diferencias
↓
persona puede inspeccionarlas
↓
persona determina pertinencia
↓
persona decide actuación
```

---

# 4. Qué permite C-PV-80-04

C-PV-80-04 compromete apoyo auxiliar de IA asociado a una obra y separado de
ella.

Su delimitación impide que ese apoyo adquiera automáticamente estatuto de
contenido de la obra.

Esto permite considerar como apoyo auxiliar:

```text
IA
→ detecta diferencias
→ describe fragmentos afectados
→ presenta información técnica comparativa
→ formula posibles cuestiones
```

siempre que:

```text
resultado auxiliar
≠
contenido adoptado automáticamente
```

Por tanto, F1 —detección— encaja de forma natural como candidata a delegación IA
cuando la comparación esté asociada a una obra o actividad cubierta por el
alcance de C-PV-80-04.

No se deriva por ello una obligación universal de usar IA en toda comparación.

---

# 5. Frontera de PV-005

PV-005 protege la determinación humana efectiva cuando una decisión relevante
corresponde a la persona y permanecen alternativas abiertas.

Su delimitación establece además que:

- la persona no debe decidir cada operación;
- una operación técnica ya suficientemente determinada no exige intervención
  humana directa;
- una determinación suficientemente encomendada no necesita repetirse
  personalmente.

Esto permite separar:

```text
decidir qué cambio debe prevalecer
→ humano cuando esa resolución le corresponde

aplicar un cambio ya determinado
→ puede delegarse técnicamente
```

Así, F4 —ejecución— puede ser automatizable después de F3 sin vulnerar PV-005,
siempre que no se use la ejecución para resolver una decisión todavía abierta.

---

# 6. Asignación funcional revisada

## F1 — Detección

**Asignación preferente:** IA / sistema auxiliar.

Justificación:

- mecánica;
- repetitiva;
- escalabilidad humana pobre;
- no requiere por sí misma decidir relevancia.

La persona debe poder inspeccionar el resultado y, cuando importe, acceder al
fragmento fuente.

## F2 — Juicio de pertinencia

**Asignación necesaria:** persona, salvo que una regla previa suficientemente
determinada haya delegado explícitamente ese juicio.

En el alcance actual de C-PV-80-02, la plataforma no puede decidir por sí misma
qué diferencia es importante.

## F3 — Decisión posterior

**Asignación:** persona cuando la resolución relevante le corresponda.

PV-005 protege esa determinación.

## F4 — Ejecución

**Asignación preferente:** sistema / IA después de una decisión suficiente.

La ejecución manual no aporta valor cuando la operación está ya determinada.

## F5 — Validación

**Asignación:** humana o mixta según relevancia y riesgo.

Para cambios relevantes sobre una obra, la persona debe poder comprobar que lo
ejecutado corresponde a lo decidido.

La validación puede apoyarse en comprobaciones automáticas, pero éstas no deben
ocultar la relación entre decisión y resultado.

---

# 7. Flujo conceptual preferente

La cadena revisada es:

```text
D1 + D2
↓
F1 — detección auxiliar automática
↓
presentación verificable de diferencias
↓
F2 — juicio humano de pertinencia
↓
F3 — decisión humana cuando corresponda
↓
F4 — ejecución asistida / automática de lo ya decidido
↓
F5 — validación del resultado
```

Esta cadena preserva:

- autoridad humana;
- separación entre apoyo y obra;
- reducción de trabajo mecánico;
- trazabilidad entre diferencia, decisión y cambio;
- posibilidad de revisión.

---

# 8. Consecuencia sobre R-80-02-M1 y R-80-02-M2

Las realizaciones construidas no quedan invalidadas.

## R-80-02-M1

Aporta constitución explícita de una pareja comparativa.

Puede conservar valor como:

- fallback manual;
- superficie de inspección;
- mecanismo de verificación del resultado de detección automática.

## R-80-02-M2

Aporta posiciones independientes y mejora material de lectura.

Puede conservar valor como:

- instrumento de inspección detallada;
- apoyo para verificar diferencias detectadas;
- fallback cuando la detección automática no sea disponible o confiable.

Pero deja de ser razonable tratarla como dirección principal de optimización para
resolver la carga mecánica de localizar diferencias.

---

# 9. Relectura de H-80-02

La conclusión anterior:

```text
H-80-02 suficientemente realizado
```

permanece válida respecto del criterio que se evaluó:

```text
hacer practicable la comparación humana
```

pero deja de ser suficiente como conclusión estratégica sobre el mejor modo de
materializar el valor de Product.

Debe distinguirse:

```text
suficiencia constitutiva de H-80-02
✔ alcanzada en el alcance probado

dirección realizativa preferente del producto
○ reabierta
```

La reapertura no niega la evidencia anterior. Cambia la pregunta de diseño:

antes:
```text
¿cómo hacer que la persona encuentre diferencias con menor fricción?
```

ahora:
```text
¿cómo hacer que la persona conserve juicio y autoridad
mientras delega la detección y la ejecución mecánicas?
```

---

# 10. Dependencias nuevas

La composición H-80-02 + C-PV-80-04 + PV-005 sugiere dos dependencias nuevas que
todavía deben demostrarse realizativamente.

## DP-80-02-A — detección auxiliar verificable

El sistema puede producir una representación de diferencias entre D1 y D2 sin
atribuirles automáticamente relevancia y permitiendo a la persona verificar su
procedencia.

## DP-80-02-B — ejecución determinada y verificable

Una vez que una modificación ha sido suficientemente determinada, el sistema
puede aplicarla sin reabrir la decisión y dejando verificable qué cambió.

Estas dependencias no deben confundirse:

```text
detectar
≠
decidir
≠
ejecutar
```

---

# 11. Qué no queda autorizado todavía

Esta reapertura no autoriza todavía:

- un diff concreto;
- un LLM concreto;
- edición automática en producción;
- aceptación automática de cambios;
- merge automático;
- aplicación masiva de correcciones;
- autonomía agéntica;
- integración en App;
- ni modificación de Product.

Tampoco demuestra que toda comparación deba usar IA.

---

# 12. Resultado

```text
H-80-02
→ suficiencia constitutiva previa conservada

pero

estrategia realizativa
→ REABIERTA

F1 detección
→ candidata preferente a delegación IA

F2 juicio
→ humano en alcance actual

F3 decisión
→ humana cuando corresponda según PV-005

F4 ejecución
→ delegable tras determinación suficiente

F5 validación
→ humana o mixta, con trazabilidad

R-80-02-M2
→ deja de ser objetivo final
→ pasa a soporte de inspección / fallback

siguiente cuestión
→ derivar el testigo mínimo de DP-80-02-A:
   detección auxiliar verificable sin decisión automática de pertinencia
```
