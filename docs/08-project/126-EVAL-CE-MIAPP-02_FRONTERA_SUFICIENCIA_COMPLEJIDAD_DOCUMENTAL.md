# EVAL-CE-MIAPP-02 — Frontera de suficiencia en investigación documental materialmente más compleja

**Fecha:** 19/11/2026
**Estado:** CERRADA EN SU FASE ESTRUCTURAL — suficiencia técnica demostrada en el caso complejo; suficiencia humana/ergonómica NO DETERMINADA.
**Precedente:** [125](125-RED-CE-MIAPP-01_REDUCCION_GAP_Y_CRITERIO_MINIMO.md).

---

# 1. Pregunta

> ¿Sigue siendo suficiente mi-app cuando una investigación documental supera el caso mínimo y exige manejar simultáneamente múltiples materiales, varios estados epistemológicos, relaciones entre fuentes y resultados, comparación y continuidad entre sesiones?

No se pregunta si una interfaz especializada sería más cómoda.

Se pregunta si aparece una pérdida material capaz de justificar desarrollo.

---

# 2. Complejidad material adoptada

La complejidad no se define por longitud de texto aislada.

Se ejercitan conjuntamente cuatro dimensiones:

1. **multiplicidad de materiales** — 12 fuentes/documentos previos;
2. **pluralidad epistemológica** — varios resultados acreditados, hipótesis, cuestiones abiertas y pendientes;
3. **relaciones** — referencias explícitas entre estados y fuentes concretas;
4. **continuidad operativa** — reanudación, comparación, localización de una fuente y producción de trabajo posterior.

Esta escala no se declara umbral universal. Es una variación material respecto del caso mínimo.

---

# 3. Hipótesis

~~~text
H1 — insuficiencia estructural
→ al aumentar la complejidad, las capacidades ordinarias
  dejan de permitir continuidad material suficiente

H2 — suficiencia estructural conservada
→ el producto mantiene las posibilidades necesarias
  sin nueva producción

H3 — insuficiencia humana/ergonómica
→ estructuralmente es posible, pero el coste humano
  de localizar, navegar, comparar o reconstruir
  puede volverse excesivo
~~~

---

# 4. Trayectoria discriminante

Se añadió únicamente:

~~~text
src/App.ce-miapp-scale.test.tsx
~~~

Producción no fue modificada.

El estado inicial contiene:

~~~text
12 materiales documentales
+
1 estado de investigación actual
+
2 resultados acreditados
+
2 hipótesis
+
2 cuestiones abiertas
+
2 actuaciones pendientes
+
referencias cruzadas a fuentes
~~~

La trayectoria exige:

1. reanudar exactamente el estado complejo;
2. comparar Fuente 03 y Fuente 09 manteniendo visible el contexto actual;
3. expresar una necesidad de localización;
4. examinar los 13 materiales disponibles;
5. localizar Fuente 07;
6. continuar desde ella produciendo una nueva síntesis;
7. interrumpir y reanudar;
8. recuperar la nueva síntesis;
9. conservar Fuente 07 como antecedente reconocible;
10. conservar el estado previo entre los materiales.

---

# 5. Incidencias de la prueba

Primera ejecución:

~~~text
run 44593759612
→ FAIL
→ selector ambiguo del test
→ no fallo semántico de producto
~~~

Segunda ejecución:

~~~text
run 44593962512
→ FAIL
→ error sintáctico introducido al corregir el selector
→ no fallo semántico de producto
~~~

Se corrigió exclusivamente el test.

---

# 6. Evidencia autoritativa

Workflow temporal:

~~~text
CE-MIAPP scale validation
run → 44594213297
job → 135808027173
~~~

Resultado:

~~~text
src/App.ce-miapp-scale.test.tsx
→ 1/1 PASS

Test Files
→ 1/1 PASS

Tests
→ 1/1 PASS
~~~

Duración observada:

~~~text
2.34 s total
1.34 s test
~~~

El workflow temporal fue eliminado tras la validación.

---

# 7. Resultado estructural

La trayectoria demuestra que, en esta variación materialmente más compleja, la App ordinaria puede:

- mantener múltiples materiales;
- preservar un estado epistemológico compuesto;
- reanudarlo tras interrupción;
- comparar materiales dentro de ese contexto;
- localizar una fuente concreta;
- producir una continuación;
- conservar la relación de antecedente;
- y mantener accesible el estado anterior.

Por tanto:

~~~text
H1 — insuficiencia estructural
→ REFUTADA EN EL CASO EJERCITADO

H2 — suficiencia estructural conservada
→ CONFIRMADA
~~~

No se deriva desarrollo por carencia estructural.

---

# 8. Límite de la evidencia

El test automatizado no puede demostrar:

- que localizar una fuente entre muchos materiales sea humanamente rápido;
- que la lectura acumulada no produzca carga cognitiva excesiva;
- que las referencias textuales sean suficientes para investigaciones mucho mayores;
- que la navegación no resulte tediosa;
- que la comparación siga siendo practicable en textos largos;
- ni que la persona no deba reconstruir mentalmente relaciones que el test sólo verifica como presentes.

Estas propiedades pertenecen a suficiencia humana/ergonómica, no a mera capacidad estructural.

Por tanto:

~~~text
H3 — insuficiencia humana/ergonómica
→ NO DEMOSTRADA
→ NO REFUTADA
→ NO DETERMINADA
~~~

---

# 9. Frontera resultante

La frontera actual queda:

~~~text
caso mínimo
→ suficiente

caso complejo ejercitado
→ estructuralmente suficiente

límite humano de escala
→ todavía no determinado
~~~

No existe base para afirmar que:

~~~text
más complejidad
→ exige automáticamente
  buscador / etiquetas / grafo / dashboard / nueva arquitectura
~~~

---

# 10. Qué evidencia sí podría justificar desarrollo

Una evolución sólo quedaría fundada si una observación humana real mostrara, por ejemplo:

- incapacidad práctica para localizar un material pertinente;
- reconstrucción repetida de relaciones ya establecidas;
- pérdida o confusión de estados epistemológicos pese a estar conservados;
- coste de alternancia/comparación que impida razonablemente la tarea;
- necesidad de mantener relaciones que el texto autodescriptivo ya no haga practicables;
- o abandono de posibilidades pertinentes por la carga del mecanismo actual.

La mera preferencia por una interfaz más cómoda no basta.

---

# 11. Decisión estratégica

~~~text
insuficiencia estructural
→ NO

desarrollo necesario
→ NO DERIVADO

insuficiencia humana a escala
→ INCERTIDUMBRE ABIERTA NO BLOQUEANTE

Product
→ SIN CAMBIOS

RAMA A
→ SIN CONTINUIDAD DERIVADA

RAMA B
→ SIN NUEVA PÉRDIDA DEMOSTRADA

ESTABILIDAD GLOBAL
→ CONSERVADA
~~~

---

# 12. Posible evaluación futura

Si se decide continuar investigando esta frontera, la siguiente actuación legítima no sería desarrollo, sino:

> **OBS-CE-MIAPP-01 — contraste humano de una investigación documental compleja usando la App ordinaria, midiendo localización, reconstrucción, alternancia, continuidad y pérdida de orientación, sin introducir previamente mecanismos nuevos.**

Esta actuación queda identificada como posibilidad metodológica, no como obligación estratégica automática.

---

# 13. Estado final

~~~text
EVAL-CE-MIAPP-02
→ CERRADA EN FASE ESTRUCTURAL

suficiencia estructural
→ DEMOSTRADA EN EL CASO COMPLEJO EJERCITADO

suficiencia humana/ergonómica
→ NO DETERMINADA

desarrollo
→ NO DERIVADO

ESTABILIDAD GLOBAL
→ CONSERVADA
~~~