# R-RESHPI-01 — Contrato rojo de primera creación y contexto común

**Fecha:** 18/11/2026
**Estado:** CERRADA — T-RESHPI-01…08 materializados; patrón PASS / FAIL×6 / PASS confirmado; producción no modificada.
**Horizonte:** H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual.
**Residuo:** RES-HPI-01 — Convergencia inmediata de la primera creación con el contexto operativo común.
**Precedente:** [115](115-CONV-HPI-11_REDUCCION_RES_HPI_01_Y_CONTRATO_MINIMO.md).

---

# 1. Objeto

Esta actuación materializa el contrato previo fijado por CONV-HPI-11 sin modificar producción.

Archivo creado:

~~~text
src/App.reshpi.test.tsx
~~~

Los ocho tests montan únicamente <App /> y ejercen controles ordinarios.

---

# 2. Condiciones del setup

Para los tests de primera creación:

~~~text
ru2m1.previous
→ ausente

ordinary.materials
→ puede contener A/B
  cuando la comparación lo exige

W1
→ NO se precarga
  como material
  ni como current
~~~

Para el control de rama retomada:

~~~text
W0
→ previous existente
→ material ordinario existente

A/B
→ materiales previos distinguibles
~~~

---

# 3. T-RESHPI-01 — patrimonio de primera creación

Recorrido:

~~~text
sin previous
→ escribir W1
→ Crear
~~~

Comprobaciones:

- aparece «Lo que has aportado»;
- W1 permanece visible;
- ru2m1.previous contiene W1.

Resultado observado:

~~~text
T-RESHPI-01
→ PASS
~~~

Esto confirma que la creación básica ya existe y que el residuo no es incapacidad para crear/persistir texto.

---

# 4. T-RESHPI-02 — constitución inmediata del contexto común

Tras Crear W1, el selector ordinario de obra para apoyo IA se usa como testigo observable de qué trabajo está disponible como contexto común.

Se exige que W1 aparezca como opción y quede seleccionado como valor efectivo sin segunda actuación humana.

Resultado:

~~~text
T-RESHPI-02
→ FAIL
~~~

Razón material: W1 no aparece en la superficie ordinaria de obras/contexto inmediatamente después de la primera creación.

---

# 5. T-RESHPI-03 — captura inmediata

Recorrido:

~~~text
Crear W1
→ Capturar aportación
→ Conservar C1
~~~

Se exige que la propia captura haga reconocible W1.

Resultado:

~~~text
T-RESHPI-03
→ FAIL
~~~

Razón material: la captura se conserva, pero no incluye W1 como contexto.

---

# 6. T-RESHPI-04 — comparación inmediata

Con A/B ya existentes:

~~~text
Crear W1
→ seleccionar A/B
→ Comparar
~~~

La comparación se abre y mantiene A/B distinguibles, pero se exige además que haga reconocible W1 como contexto de actividad.

Resultado:

~~~text
T-RESHPI-04
→ FAIL
~~~

Razón material: la comparación activa no contiene W1 como contexto.

---

# 7. T-RESHPI-05 — IA inmediata

Después de Crear W1, sin elegir manualmente otra obra, el selector de apoyo IA debe adoptar W1.

Resultado:

~~~text
T-RESHPI-05
→ FAIL
~~~

Razón material: el selector no adopta W1; por tanto el botón no puede depender de W1 como contexto común sin una segunda selección.

---

# 8. T-RESHPI-06 — persistencia del contexto creado

Recorrido:

~~~text
Crear W1
→ unmount
→ mount App
~~~

Se comprueba primero que ResumeExperience sí recupera W1 como aportación anterior y después que una operación contextual lo reconozca como trabajo actual.

Resultado:

~~~text
T-RESHPI-06
→ FAIL
~~~

Razón material: W1 reaparece como previous, pero la superficie de IA no lo adopta como contexto común.

Esto confirma que el defecto no se limita a la renderización inicial.

---

# 9. T-RESHPI-07 — A/B no contaminados y W1 current

Con A/B existentes, el test comprueba primero que ambos siguen disponibles en comparación y después exige W1 como current.

Resultado:

~~~text
T-RESHPI-07
→ FAIL
~~~

Razón material:

~~~text
A/B
→ permanecen disponibles

W1 current
→ ausente
~~~

Por tanto el fallo no procede de pérdida o contaminación de A/B.

---

# 10. T-RESHPI-08 — control de rama retomada

Setup:

~~~text
W0
→ previous
→ ordinary material

A/B
→ materiales previos
~~~

El caso comprueba en una misma ejecución:

- captura bajo W0;
- comparación A/B bajo W0;
- IA con W0 como obra por defecto.

Resultado:

~~~text
T-RESHPI-08
→ PASS
~~~

Esto preserva el control positivo de la rama ya válida.

---

# 11. Patrón focal observado

Vitest produjo exactamente:

~~~text
T-RESHPI-01 → PASS
T-RESHPI-02 → FAIL
T-RESHPI-03 → FAIL
T-RESHPI-04 → FAIL
T-RESHPI-05 → FAIL
T-RESHPI-06 → FAIL
T-RESHPI-07 → FAIL
T-RESHPI-08 → PASS
~~~

Resumen:

~~~text
8 tests
→ 2 PASS
→ 6 FAIL

patrón
→ PASS / FAIL×6 / PASS
~~~

El patrón coincide exactamente con CONV-HPI-11.

---

# 12. Revisión de causalidad de los seis rojos

Los fallos no proceden de:

- import roto;
- render fallido;
- selector inexistente por error de setup;
- fixture inválido;
- pérdida de A/B;
- rama retomada rota.

Todos alcanzan la superficie pertinente y fallan en la condición material esperada:

~~~text
W1
→ no constituido como contexto común
~~~

Los fallos observados se distribuyen así:

~~~text
T02 → W1 no disponible/seleccionado como obra común
T03 → captura sin W1
T04 → comparación sin W1
T05 → IA sin W1
T06 → remount recupera texto pero no contexto común
T07 → A/B siguen; W1 current no aparece
~~~

---

# 13. Preservación de evidencia HPI previa

Se ejecutaron conjuntamente:

~~~text
src/App.hpi.test.tsx
src/App.hpi.validation.test.tsx
src/App.hpi2.test.tsx
src/App.hpi2.validation.test.tsx
src/App.hpi.global.validation.test.tsx
~~~

Resultado:

~~~text
5 archivos
20/20 tests PASS
~~~

Por tanto el contrato rojo no altera las validaciones previas.

---

# 14. Regresión completa previa

Se ejecutó la suite completa excluyendo únicamente el contrato rojo deliberado:

~~~text
npx vitest run --exclude src/App.reshpi.test.tsx
~~~

Resultado:

~~~text
64/64 archivos PASS
518/518 tests PASS
~~~

Por tanto no se observa ninguna regresión en el patrimonio previo.

---

# 15. Producción inalterada

Se comprobó explícitamente el diff desde el baseline de CONV-HPI-11 sobre:

~~~text
src/App.tsx
src/realizations/ru2m1/ResumeExperience.tsx
~~~

Resultado:

~~~text
sin diferencias
~~~

R-RESHPI-01 no modifica producción.

---

# 16. Diff check

~~~text
git diff --check
→ PASS
~~~

---

# 17. Decisión

Se decide:

> **R-RESHPI-01 queda SATISFECHA y CERRADA como actuación de contrato rojo.**

No significa que RES-HPI-01 esté satisfecho.

Significa que la diferencia material pendiente está ahora fijada por evidencia ejecutable y discriminante.

Estado:

~~~text
R-RESHPI-01
→ CLOSED

T-RESHPI-01…08
→ MATERIALIZADOS

patrón
→ PASS / FAIL×6 / PASS
→ CONFIRMADO

producción
→ SIN CAMBIOS

RES-HPI-01
→ ABIERTO
~~~

---

# 18. Siguiente actuación justificable

Se deriva:

> **R-RESHPI-02 — determinar y realizar la mínima diferencia de producción capaz de convertir T-RESHPI-02…07 en verdes sin romper T-RESHPI-01/08, HPI-01, HPI-02, la validación global ni los 518 tests previos.**

No se deriva todavía Architecture.