# Derivación ejecutable de C-D03A-01 sobre PROJECT_CHARTER

## Estado

**Ejecución derivada. No ejecutada.**

Este documento concreta la prueba:

```text
C-D03A-01
— Procedencia de una declaración estratégica reconstruida
```

correspondiente a:

```text
D-03a
— Disponibilidad de procedencia pertinente
```

La prueba reutiliza material ya existente en:

```text
docs/08-project/00-PROJECT_CHARTER.md
```

No requiere modificación de código, nueva Realization, nueva feature, nuevo contenido de Product ni nueva Architecture.

---

# 1. Resultado de la auditoría previa

La auditoría del corpus descartó como caso principal C1 porque las pérdidas de atribución/procedencia allí observadas fueron reducidas principalmente a `PV-006`.

También descartó como caso principal I31 / conservación de defendibilidad porque esa pérdida quedó comprendida expresamente por `PV-006`.

Como candidato principal se seleccionó:

```text
PROJECT_CHARTER
```

porque contiene una declaración estratégica R y una información de procedencia P físicamente separadas.

---

# 2. Objetivo experimental

Determinar si la disponibilidad de información sobre la procedencia de una declaración estratégica cambia justificadamente el estatuto con el que una persona puede utilizar esa declaración.

---

# 3. Material fuente

La sección:

```text
# 18. Declaración de rumbo
```

contiene R.

La sección:

```text
# 19. Procedencia de esta primera versión
```

contiene P.

---

# 4. Fragmento R

## R — Declaración de rumbo

Se utilizará exclusivamente el contenido declarativo de:

```text
# 18. Declaración de rumbo
```

R establece que el proyecto existe para construir progresivamente un producto real, útil y sostenible alrededor de necesidades humanas de crear, incorporar, organizar, utilizar, desarrollar, compartir, publicar, difundir y preservar información y conocimiento; que el desarrollo sirve también como laboratorio de ingeniería y recorrido educativo documentado; que investigación, teoría, arquitectura y herramientas son medios subordinados a ese propósito; y que todo cambio de rumbo debe ser consciente, justificable y trazable.

Para la ejecución:

```text
R
=
contenido íntegro de la declaración de rumbo
```

No se incluirá junto a R la sección 19 ni información equivalente.

---

# 5. Invariancia de R

```text
R(S+) = R(S−)
```

No podrá cambiar una palabra, el orden, la puntuación ni el contexto experimental mostrado.

---

# 6. Fragmento P

## P — Procedencia pertinente

P se reduce a los dos hechos mínimos expresados por la sección 19:

```text
P1
→ esta primera versión fue reconstruida
  a partir de tramos históricos
  aportados durante la revisión
  de agosto de 2026

P2
→ la carta no pretende inventar
  ahora un producto nuevo,
  sino conservar una referencia
  reconstruida
```

---

# 7. Reducción experimental de P

P se presentará como:

```text
Esta primera versión fue reconstruida
a partir de materiales históricos
del propio proyecto.

Su finalidad no era inventar
un producto nuevo,
sino conservar una referencia
reconstruida del rumbo anterior.
```

Esta formulación es una reducción experimental fiel y no constituye contenido normativo nuevo.

---

# 8. Actuación A

## A — Clasificación del estatuto de R

Pregunta congelada:

> **Con la información disponible, ¿qué estatuto está justificado atribuir a esta declaración al utilizarla como antecedente para evaluar la continuidad del rumbo del proyecto?**

Opciones:

```text
A1
La evidencia disponible permite tratarla
como reconstrucción de un rumbo anterior
del proyecto.

A2
La evidencia disponible permite tratarla
como una propuesta nueva introducida
al redactar este documento.

A3
La evidencia disponible no permite
decidir justificadamente entre A1 y A2.
```

---

# 9. Razón de A3

A3 conserva la indeterminación justificada como resultado legítimo y evita forzar una conclusión cuando la evidencia sea insuficiente.

---

# 10. S+ — Procedencia disponible

La persona recibe:

```text
R
+
P
+
A
```

Orden:

```text
1. mostrar R;
2. mostrar P;
3. formular A;
4. registrar respuesta;
5. solicitar justificación breve.
```

---

# 11. S− — Procedencia no disponible

La persona recibe:

```text
R
+
A
```

P no aparece.

Orden:

```text
1. mostrar exactamente R;
2. no mostrar P ni equivalente;
3. formular exactamente A;
4. registrar respuesta;
5. solicitar justificación breve.
```

---

# 12. Igualdad obligatoria

Deben ser idénticos:

```text
R
pregunta A
opciones A1/A2/A3
orden de opciones
persona evaluadora
criterio de respuesta
```

Sólo cambia P.

---

# 13. Contaminación por lenguaje

En S− no podrá aparecer:

```text
reconstruida
rumbo original
fuentes históricas
referencia histórica
```

ni equivalentes.

---

# 14. Contaminación por encabezados

R se mostrará bajo:

```text
MATERIAL R
```

y no bajo un encabezado que revele procedencia.

---

# 15. Contaminación por contexto previo

Durante la ejecución no deberán consultarse la sección 17, la sección 19 completa, `PROJECT_JOURNAL`, conversaciones históricas, commits relacionados ni otros documentos que expliquen la génesis del Charter.

---

# 16. C-01 — Identidad de R

```text
R(S+) = R(S−)
```

Resultado requerido:

```text
C-01 ✓
```

---

# 17. C-02 — Identidad de A

```text
A(S+) = A(S−)
```

Resultado requerido:

```text
C-02 ✓
```

---

# 18. C-03 — No inferencia explícita desde R

R no debe contener por sí mismo una afirmación equivalente a que reconstruye el rumbo histórico anterior.

Resultado requerido:

```text
C-03 ✓
```

---

# 19. C-04 — P no contiene el veredicto

P informa de procedencia, pero no incluye una instrucción del tipo:

```text
seleccione A1
```

---

# 20. C-05 — Misma posibilidad material

En ambos estados se mantiene la posibilidad de leer, comprender, usar, comparar y evaluar R.

---

# 21. C-06 — Misma autoridad decisoria

En ambos estados:

```text
persona
→ decide

sistema
→ presenta evidencia
```

---

# 22. Registro mínimo

```text
Estado:
S+ / S−

R mostrado:
sí

P mostrado:
sí / no

Pregunta:
idéntica

Respuesta:
A1 / A2 / A3

Justificación humana:
texto libre breve
```

---

# 23. Orden obligatorio

```text
S−
↓
registro
↓
S+
↓
registro
```

No deberá ejecutarse S+ antes de S−.

---

# 24. Limitación del contraste

La ejecución S− → S+ es un contraste intra-persona secuencial, no un ensayo independiente entre sujetos.

---

# 25. Observación principal

La observación discriminante fuerte sería:

```text
S−
→ A3

S+
→ A1
```

con una justificación coherente basada específicamente en la disponibilidad de P.

---

# 26. R-C-D03A-A — Resultado positivo fuerte

```text
S− → A3
S+ → A1
```

y la justificación confirma que el cambio depende de P.

---

# 27. R-C-D03A-B — Resultado positivo débil

```text
S− → A1
S+ → A1
```

pero cambia la calidad justificativa:

```text
S−
→ inferencia probable

S+
→ atribución respaldada
  por evidencia explícita
```

Esto será indicio, no confirmación fuerte.

---

# 28. R-C-D03A-C — Resultado negativo

Si P no modifica justificadamente decisión, fundamento, estatuto atribuible o actuación posterior:

```text
D-03a
→ NO CONFIRMADA EN C-D03A-01
```

---

# 29. R-C-D03A-D — Reducción a PV-006

Si la pérdida consiste únicamente en que una posibilidad pertinente previamente disponible dejó de conservarse:

```text
D-03a
→ REDUCIDA A PV-006
```

---

# 30. R-C-D03A-E — Residuo independiente provisional

Sólo podrá considerarse un residuo específico si R y todas sus posibilidades ordinarias permanecen disponibles, la decisión sigue siendo humana y, aun así, sin P no puede establecerse justificadamente un estatuto relevante de R mientras que con P sí.

Además, esa diferencia no deberá quedar suficientemente explicada por `PV-005` o `PV-006`.

---

# 31. Solicitud de justificación

Después de A1/A2/A3 se preguntará únicamente:

> **Indica brevemente qué información disponible justifica tu respuesta.**

---

# 32. Construcción física mínima de S−

S− será un texto temporal:

```text
MATERIAL R

[declaración de rumbo]

PREGUNTA A

A1
A2
A3

JUSTIFICACIÓN
```

No se modificará `PROJECT_CHARTER.md`.

---

# 33. Construcción física mínima de S+

S+ será idéntico y añadirá entre R y A:

```text
INFORMACIÓN P

Esta primera versión fue reconstruida
a partir de materiales históricos
del propio proyecto.

Su finalidad no era inventar
un producto nuevo,
sino conservar una referencia
reconstruida del rumbo anterior.
```

---

# 34. Verificación previa obligatoria

Antes de ejecutar:

```text
1. R copiado fielmente;
2. R idéntico en S+ y S−;
3. A idéntica;
4. P sólo aparece en S+;
5. S− no contiene pistas equivalentes;
6. PROJECT_CHARTER no ha sido modificado;
7. no se ha incorporado información posterior
   sobre la historia del Charter.
```

---

# 35. Consecuencias negativas

Incluso un resultado fuerte no deriva:

```text
P6
nueva capacidad de Product
autoría obligatoria
metadatos obligatorios
historial general
modelo de procedencia
feature
Realization
Architecture
```

---

# 36. Estado resultante

```text
D-03a
→ candidata

C-D03A-01
→ caso seleccionado

R
→ fijado

P
→ fijado y reducido

A
→ congelada

S−
→ definido

S+
→ definido

controles
→ definidos

resultados posibles
→ definidos

ejecución
→ NO REALIZADA

P6
→ NO DERIVADO

nueva capacidad
→ NO DERIVADA

Realization
→ NO DERIVADA
```

---

# 37. Próxima actuación

La siguiente actuación justificable es exclusivamente:

> **construir primero la presentación S− a partir del fragmento R de `PROJECT_CHARTER`, verificar que no contiene ninguna pista equivalente a P y ejecutar la pregunta A antes de mostrar o construir S+.**

Regla:

```text
S−
primero

S+
después
```
