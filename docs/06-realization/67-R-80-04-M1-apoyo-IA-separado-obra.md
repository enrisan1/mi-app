# R-80-04-M1 — Testigo mínimo de apoyo IA separado de la obra

**Fecha:** 16/11/2026  
**Estado:** ABIERTA; reducción del baseline, diseño realizativo y pruebas pendientes.  
**Obligación:** `OB-80-NEXT-03`.  
**Compromiso Product:** `C-PV-80-04 — Apoyo auxiliar de IA separado de la obra`.

---

# 1. Objetivo

Demostrar, en un alcance mínimo y falsable, que una persona puede disponer de
apoyo realmente procedente de IA durante una actividad de creación manteniéndolo
funcionalmente separado de la obra, de modo que recibir o conservar ese apoyo no
lo convierta por sí mismo en contenido de la obra.

La actuación deberá además contrastar si esa frontera produce una diferencia
humana material frente a una alternativa sin separación funcional suficiente.

---

# 2. Situación humana

```text
obra en curso
+
apoyo generado por IA
↓
la persona quiere consultar ese apoyo

sin que

apoyo IA
→ se convierta automáticamente en obra
```

La diferencia constitutiva es:

```text
contenido de la obra
≠
apoyo auxiliar de IA
```

---

# 3. Criterio mínimo candidato — CR-80-04-M1

La suficiencia exige conjuntamente:

1. existe una obra o actividad creativa identificable;
2. existe al menos una aportación auxiliar de procedencia IA acreditable;
3. la aportación está asociada a esa obra;
4. el apoyo permanece distinguible del contenido de la obra;
5. recibir o conservar el apoyo no modifica automáticamente la obra;
6. la persona puede consultar el apoyo sin que éste adquiera por sí mismo
   estatuto de contenido;
7. la procedencia IA es suficientemente reconocible;
8. la separación funcional produce una diferencia humana material frente a un
   baseline sin esa frontera suficiente.

---

# 4. Separaciones necesarias

La actuación debe preservar:

```text
apoyo IA
≠
obra

procedencia
≠
incorporación

consultar
≠
adoptar

separación funcional
≠
simple decoración visual
```

No debe introducir por necesidad:

- generación continua;
- agente autónomo;
- múltiples modelos;
- edición automática;
- incorporación automática;
- razonamiento interno del modelo;
- historial universal;
- conservación indefinida;
- integración en App;
- arquitectura definitiva.

---

# 5. Incertidumbres que deben reducirse antes de construir

## U1 — baseline justo

Debe fijarse una alternativa que use el mismo apoyo IA sin una frontera funcional
suficiente, evitando construir un baseline artificialmente peor.

## U2 — procedencia IA real

Debe definirse una forma mínima de acreditar que al menos una aportación usada
en el contraste procede realmente de una IA.

Un simple fixture etiquetado como “IA” no basta para cerrar esta obligación.

## U3 — diferencia entre separación y etiquetado

Debe poder distinguirse:

```text
apoyo mezclado o copresente dentro de la superficie de obra
+
marca de procedencia

frente a

apoyo funcionalmente separado
+
obra preservada
```

para comprobar si la separación añade valor independiente.

---

# 6. Estrategia de validación propuesta

```text
M1-A
→ baseline con el mismo apoyo IA
→ sin frontera funcional suficiente

M1-B
→ apoyo IA funcionalmente separado de la obra

TH-80-04-01
→ contraste humano directo
```

No se diseñarán todavía componentes ni tests hasta reducir U1 y U2 de forma
suficiente.

---

# 7. Falsadores iniciales

R-80-04-M1 deberá considerarse insuficiente si:

1. el apoyo usado no tiene procedencia IA acreditable;
2. el apoyo se incorpora automáticamente a la obra;
3. la obra cambia por el mero hecho de recibir o conservar apoyo;
4. la separación es sólo una etiqueta sin diferencia funcional;
5. el baseline pierde información o recibe apoyo de peor calidad;
6. la persona no observa diferencia material entre separación y alternativa;
7. el testigo sólo funciona introduciendo agentes, edición automática o
   infraestructura no comprometida.

---

# 8. Estado

```text
OB-80-NEXT-03
→ ACEPTADA

R-80-04-M1
→ ABIERTA

reducción baseline/procedencia
→ PENDIENTE

diseño realizativo
→ PENDIENTE

tests
→ PENDIENTES

contraste humano
→ PENDIENTE
```


---

# 9. Reducción de U1 — baseline justo

## 9.1 Variable controlada

M1-A y M1-B deberán usar conjuntamente:

~~~text
misma obra inicial
+
mismo apoyo IA literal
+
misma procedencia declarada
+
mismo momento de presentación
+
misma posibilidad de lectura
~~~

No podrá variar entre recorridos:

- el contenido del apoyo;
- su calidad;
- su extensión;
- el modelo que lo produjo;
- la obra de partida;
- ni la información de procedencia.

La única variable experimental será:

~~~text
estatuto funcional del apoyo
respecto de la obra
~~~

## 9.2 Baseline seleccionado — M1-A

El baseline será:

~~~text
una única superficie/contenido de obra
+
bloque de apoyo IA insertado dentro
de ese mismo contenido
+
marca explícita de procedencia IA
~~~

El bloque puede estar claramente rotulado, por ejemplo:

~~~text
[APOYO IA]
...
~~~

pero forma parte del mismo valor editable/persistido que constituye la obra.

Por tanto:

~~~text
procedencia visible
→ SÍ

información disponible
→ SÍ

pérdida de apoyo
→ NO

frontera funcional obra/apoyo
→ NO
~~~

El baseline no se hará peor mediante pérdida de datos, menor calidad del apoyo,
ocultación de procedencia ni pasos adicionales.

Su única limitación será que:

~~~text
apoyo etiquetado
→ comparte estatuto operativo con el contenido de la obra
~~~

## 9.3 Razón de selección

Esta forma permite contrastar directamente:

~~~text
etiquetado de procedencia dentro de la obra
vs
separación funcional fuera de la obra
~~~

sin introducir diferencias ajenas a C-PV-80-04.

Resultado:

~~~text
U1 — baseline justo
→ REDUCIDA
→ M1-A definido
~~~

---

# 10. Reducción de U2 — procedencia IA real

## 10.1 Qué debe demostrarse

No es necesario demostrar en R-80-04-M1:

- calidad general de un modelo;
- integración API;
- disponibilidad de red;
- proveedor definitivo;
- prompt engineering;
- reproducibilidad exacta del modelo.

Sí es necesario demostrar:

~~~text
al menos una aportación concreta
usada en M1-A y M1-B
→ fue generada realmente por una IA
~~~

## 10.2 Mecanismo mínimo de acreditación

Se utilizará una evidencia de procedencia externa al estado funcional de los
componentes.

Para una aportación concreta se conservarán conjuntamente:

~~~text
identificador de evidencia
+
fecha
+
sistema/modelo generador declarado
+
prompt exacto
+
salida exacta utilizada
~~~

El testigo recibirá esa salida como dato controlado.

Por tanto:

~~~text
generación real
→ ocurre una vez fuera del componente

tests funcionales
→ usan la salida literal ya acreditada

dependencia de red/API durante tests
→ NO
~~~

Esto permite tener a la vez:

- procedencia IA real;
- tests deterministas;
- mismo apoyo literal en M1-A y M1-B;
- ninguna integración prematura de proveedor.

## 10.3 Límite epistemológico

La aplicación no verificará criptográficamente que el texto fue generado por
IA.

La acreditación pertenece al expediente experimental de R-80-04-M1, del mismo
modo que una observación humana pertenece a la evidencia de una actuación y no
al runtime del producto.

La condición quedará satisfecha sólo para la aportación documentada, no para
cualquier texto arbitrariamente etiquetado como IA.

Resultado:

~~~text
U2 — procedencia IA real
→ REDUCIDA
→ evidencia externa reproducible documentalmente
  + salida literal controlada
~~~

---

# 11. Reducción de U3 — etiquetado frente a separación funcional

## 11.1 Definición negativa

No bastará para M1-B:

- otro color;
- otro borde;
- una etiqueta “IA”;
- un encabezado;
- una posición lateral;
- ni un icono.

Esas diferencias pueden ser sólo presentación.

## 11.2 Criterio funcional

Habrá separación funcional cuando se cumplan conjuntamente:

1. la obra y el apoyo son estados distinguibles;
2. recibir/conservar apoyo no modifica el valor que constituye la obra;
3. editar la obra no requiere editar/eliminar el apoyo;
4. consultar el apoyo no lo convierte en contenido de la obra;
5. persistir o recuperar la obra no exige tratar el apoyo como parte de su
   contenido;
6. puede comprobarse por separado qué es obra y qué es apoyo.

En M1-A, por contraste:

~~~text
obra + bloque [APOYO IA]
→ mismo contenido persistido/editable
~~~

En M1-B:

~~~text
obra
→ estado de obra

apoyo IA
→ estado auxiliar asociado

consultar apoyo
↛ modificar obra
~~~

## 11.3 Discriminante humano

TH-80-04-01 no preguntará si una interfaz “se ve mejor”.

Preguntará si la separación funcional mejora materialmente:

- claridad sobre qué constituye la obra;
- capacidad de consultar apoyo sin adoptarlo;
- control sobre el estatuto autoral del contenido;
- ausencia de trabajo posterior para retirar apoyo que nunca se quiso
  incorporar.

Resultado:

~~~text
U3 — etiquetado vs separación funcional
→ REDUCIDA
→ diferencia definida por estado y comportamiento,
  no por apariencia
~~~

---

# 12. Contrato experimental resultante

## M1-A — procedencia etiquetada sin frontera funcional suficiente

~~~text
obra inicial O
+
apoyo IA X acreditado
↓
mismo contenido editable/persistido

X
→ visible como [APOYO IA]
→ pero forma parte del contenido de obra
~~~

## M1-B — apoyo auxiliar funcionalmente separado

~~~text
obra inicial O
+
mismo apoyo IA X acreditado
↓
dos estados funcionalmente distintos

obra
→ permanece O salvo edición humana explícita

apoyo
→ asociado a O
→ consultable
→ persistible si el testigo lo requiere
→ no forma parte del contenido de obra
~~~

## Control principal

~~~text
O
→ idéntica en M1-A y M1-B

X
→ idéntico en M1-A y M1-B

procedencia de X
→ idéntica

única variable
→ frontera funcional
~~~

---

# 13. Estado tras reducción

~~~text
U1 — baseline justo
→ REDUCIDA

U2 — procedencia IA real
→ REDUCIDA

U3 — etiquetado vs separación funcional
→ REDUCIDA

incertidumbre metodológica bloqueante
antes del diseño
→ NINGUNA IDENTIFICADA
~~~

La siguiente actuación ya puede ser:

~~~text
diseñar M1-A
+
diseñar M1-B
+
preregistrar tests RED
+
registrar una evidencia concreta de procedencia IA
~~~

sin crear todavía los componentes de producción.


---

# 14. Diseño realizativo definitivo de M1-A

Archivo previsto de producción:

~~~text
src/realizations/ai-support/AiSupportBaseline.tsx
~~~

Entrada controlada:

~~~text
work
support
evidenceId
system
model
~~~

Todas las entradas proceden del fixture experimental asociado a
`E-IA-80-04-M1-01`.

Contrato observable:

~~~text
obra O
+
[APOYO IA]
+
apoyo X

→ una única superficie editable

procedencia IA
→ visible por separado como información
→ no cambia el hecho de que X forme parte
  del mismo valor funcional de la obra
~~~

M1-A debe conservar tanto O como X al volver a ejecutarse. No puede perder apoyo
ni recibir una versión degradada.

Su limitación constitutiva es sólo:

~~~text
obra
y
apoyo etiquetado

→ mismo estado funcional editable
~~~

---

# 15. Diseño realizativo definitivo de M1-B

Archivo previsto de producción:

~~~text
src/realizations/ai-support/SeparatedAiSupportExperience.tsx
~~~

Entrada controlada:

~~~text
work
support
evidenceId
system
model
~~~

Debe recibir exactamente los mismos valores que M1-A.

Contrato observable:

~~~text
obra O
→ estado editable propio

apoyo X
→ estado auxiliar propio
→ asociado a O
→ consultable
→ procedencia IA visible

editar O
↛ editar X

consultar X
↛ incorporar X a O

volver a ejecutar
→ O y X siguen recuperables
→ X no aparece dentro del valor de O
~~~

No se prescribe:

- panel lateral;
- modal;
- pestaña;
- color;
- icono;
- operación de promoción;
- proveedor IA;
- API;
- SDK;
- almacenamiento concreto.

La separación exigida es funcional y observable, no gráfica.

---

# 16. Observables definitivos

## O-80-04-M1-01 — obra identificable

La persona puede reconocer el contenido que constituye la obra.

## O-80-04-M1-02 — apoyo IA identificable

La aportación X es visible y reconocible como apoyo de IA.

## O-80-04-M1-03 — procedencia acreditada y común

M1-A y M1-B presentan la misma X y la misma evidencia
`E-IA-80-04-M1-01`.

## O-80-04-M1-04 — baseline sin pérdida artificial

M1-A conserva obra, apoyo y procedencia; su desventaja no procede de pérdida de
información.

## O-80-04-M1-05 — frontera funcional en M1-B

En M1-B la obra y el apoyo ocupan estados funcionalmente distinguibles.

## O-80-04-M1-06 — no incorporación automática

En M1-B, recibir, mostrar o consultar X no modifica el valor de la obra.

## O-80-04-M1-07 — independencia de edición

Editar la obra en M1-B no obliga a editar ni elimina el apoyo X.

## O-80-04-M1-08 — recuperación separada

Tras una nueva ejecución, obra y apoyo siguen recuperables sin que X deba formar
parte del contenido de la obra.

## O-80-04-M1-09 — diferencia humana material

En TH-80-04-01 la persona puede determinar si la frontera funcional aporta una
diferencia material frente a M1-A en:

- claridad sobre qué constituye la obra;
- consulta de apoyo sin adopción;
- control sobre estatuto autoral;
- trabajo necesario para retirar apoyo no incorporado.

---

# 17. Falsadores definitivos

R-80-04-M1 será insuficiente si ocurre cualquiera de estos casos:

1. M1-A y M1-B no usan exactamente la misma obra O;
2. M1-A y M1-B no usan exactamente la misma aportación X;
3. la procedencia IA de X no queda documentalmente acreditada;
4. M1-A pierde X, lo oculta o ofrece menos información que M1-B;
5. M1-B sólo cambia color, posición, borde, título o etiqueta;
6. X aparece dentro del valor que constituye la obra en M1-B sin acción humana
   explícita;
7. editar la obra en M1-B elimina, modifica o exige reescribir X;
8. recuperar la obra obliga a tratar X como parte de su contenido;
9. el contraste depende de un proveedor, agente, API o automatización no
   comprometidos;
10. TH-80-04-01 no muestra diferencia humana material entre ambas trayectorias.

No será falsador que M1-B carezca de una operación para incorporar X a la obra:
esa capacidad no forma parte de la obligación actual.

---

# 18. Tests rojos preregistrados

Se fija un fixture común:

~~~text
src/realizations/ai-support/AiSupportEvidence.fixture.ts
~~~

que contiene literalmente:

- la obra O;
- el apoyo X;
- `E-IA-80-04-M1-01`;
- sistema;
- modelo.

## M1-A

~~~text
src/realizations/ai-support/AiSupportBaseline.test.tsx
~~~

Tests:

~~~text
T-80-04-A01
→ obra y apoyo aparecen en una única superficie editable

T-80-04-A02
→ misma procedencia IA acreditada visible

T-80-04-A03
→ no existe estado auxiliar funcionalmente separado

T-80-04-A04
→ editar la única superficie edita el valor
  que contiene también el apoyo

T-80-04-A05
→ obra combinada y apoyo no se pierden
  al volver a ejecutar
~~~

## M1-B

~~~text
src/realizations/ai-support/SeparatedAiSupportExperience.test.tsx
~~~

Tests:

~~~text
T-80-04-B01
→ obra y apoyo están en regiones funcionalmente distinguibles

T-80-04-B02
→ mismo apoyo X y misma procedencia que M1-A

T-80-04-B03
→ recibir/consultar apoyo no modifica la obra

T-80-04-B04
→ editar la obra no elimina ni exige editar el apoyo

T-80-04-B05
→ obra y apoyo se recuperan por separado
  tras nueva ejecución

T-80-04-B06
→ la separación se demuestra conductualmente,
  no sólo mediante etiqueta visual
~~~

Total preregistrado:

~~~text
M1-A
→ 5 tests

M1-B
→ 6 tests

total
→ 11 tests
~~~

---

# 19. Gate del rojo

Los componentes de producción todavía no existen:

~~~text
./AiSupportBaseline.tsx
./SeparatedAiSupportExperience.tsx
~~~

Por tanto, el resultado esperado de la primera ejecución es:

~~~text
M1-A
→ 5/5 RED
→ exclusivamente por ausencia de AiSupportBaseline.tsx

M1-B
→ 6/6 RED
→ exclusivamente por ausencia de SeparatedAiSupportExperience.tsx
~~~

No se considerará rojo válido un fallo previo de:

- sintaxis;
- imports;
- fixture;
- entorno;
- infraestructura;
- o configuración de tests.

Sólo después de observar ese rojo válido podrá comenzar la implementación de
M1-A.

---

# 20. Estado resultante

~~~text
U1
→ REDUCIDA

U2
→ REDUCIDA

U3
→ REDUCIDA

M1-A
→ DISEÑADO

M1-B
→ DISEÑADO

observables
→ DEFINITIVOS

falsadores
→ DEFINITIVOS

tests RED
→ PREREGISTRADOS
→ todavía no ejecutados

componentes de producción
→ NO CREADOS

TH-80-04-01
→ PENDIENTE
~~~


---

# 21. Verificación del rojo inicial

Ejecución comunicada:

~~~text
npx vitest run \
  src/realizations/ai-support/AiSupportBaseline.test.tsx \
  src/realizations/ai-support/SeparatedAiSupportExperience.test.tsx
~~~

Resultado:

~~~text
Test Files  2 failed (2)
Tests       11 failed (11)
~~~

Distribución:

~~~text
M1-A
→ 5/5 RED

M1-B
→ 6/6 RED
~~~

Todos los fallos alcanzan exactamente las ausencias preregistradas:

~~~text
R-80-04-M1-A ausente
→ falta ./AiSupportBaseline.tsx

R-80-04-M1-B ausente
→ falta ./SeparatedAiSupportExperience.tsx
~~~

No aparece fallo previo de sintaxis, imports, fixture, entorno o infraestructura.

Por tanto:

~~~text
ROJO INICIAL
→ VÁLIDO

gate de implementación
→ SUPERADO
~~~

La siguiente actuación técnica queda limitada a implementar primero M1-A y
verificar sus 5 tests antes de crear M1-B.
