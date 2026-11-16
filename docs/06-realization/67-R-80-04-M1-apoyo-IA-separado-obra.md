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
