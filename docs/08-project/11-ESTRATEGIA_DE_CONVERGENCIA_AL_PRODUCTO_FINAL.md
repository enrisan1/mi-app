# Estrategia de convergencia hacia el producto final

## Estado

**Marco estratégico vigente para orientar la continuación del proyecto hacia un producto final coherente.**

Este documento no redefine la visión estratégica del producto, ya establecida en `01-PLATFORM_VISION.md`, ni determina todavía el alcance concreto de V1, su arquitectura o su roadmap detallado.

Define el método mediante el cual deberán derivarse esos elementos y corrige una insuficiencia detectada en el modo de continuación utilizado hasta ahora.

---

# 1. Fundamento

El proyecto ha consolidado una metodología rigurosa para evitar que funcionalidades, compromisos o estructuras técnicas sean introducidos sin fundamento suficiente.

El procedimiento utilizado ha permitido trabajar mediante una cadena semejante a:

```text
situación real
↓
problema observado
↓
investigación
↓
reducción
↓
diferencia funcional o compromiso
↓
Realization mínima
↓
validación
```

Este procedimiento ha resultado útil para:

- impedir generalizaciones prematuras;
- evitar funcionalidades especulativas;
- distinguir evidencia de hipótesis;
- exigir fundamento positivo para las modificaciones;
- reducir los resultados hasta su contenido funcional necesario;
- conservar separadas Product, Realization, Architecture e Implementation;
- y detener una investigación cuando su pregunta queda suficientemente resuelta.

Sin embargo, su aplicación como mecanismo principal de continuación ha mostrado una insuficiencia estratégica.

---

# 2. Insuficiencia detectada

La exigencia:

> no introducir una nueva actuación sin fundamento positivo suficiente

es correcta.

Pero no puede interpretarse como:

> sólo puede desarrollarse aquello cuya necesidad aparezca accidentalmente mediante una nueva situación empírica.

Si se adopta esta segunda interpretación, el proyecto queda expuesto a una evolución contingente:

```text
aparece una situación
↓
se investiga
↓
se resuelve

aparece otra situación
↓
se investiga
↓
se resuelve

...
```

sin una garantía suficiente de que las actuaciones sucesivas converjan hacia un producto final determinado.

Esto produciría varios problemas.

---

## 2.1. Ausencia de dirección global

Podrían resolverse correctamente problemas locales sin saber si contribuyen de forma significativa al objetivo final.

---

## 2.2. Ausencia de prioridades

Una situación empírica secundaria podría recibir atención simplemente porque ha aparecido antes que una capacidad estructuralmente más importante.

---

## 2.3. Imposibilidad de estimar progreso

Sin una delimitación verificable del alcance que deba considerarse completado no puede determinarse:

```text
qué falta
qué está completado
qué es prioritario
qué depende de qué
cuánto se ha avanzado
cuándo puede considerarse terminado el proyecto
```

---

## 2.4. Riesgo de fragmentación

La acumulación de respuestas correctas a problemas independientes no garantiza por sí sola la constitución de un producto coherente.

```text
soluciones locales correctas
≠
producto global coherente
```

---

# 3. Distinción fundamental

El proyecto debe distinguir en adelante dos fuentes legítimas de dirección.

## Dirección empírica

Parte de:

```text
uso real
problema observado
pérdida
necesidad
incompatibilidad
nueva evidencia
```

y permite descubrir cuestiones que el plan previo no había previsto.

---

## Dirección estratégica

Parte de:

```text
horizonte estratégico vigente
↓
alcance de V1 delimitado
↓
capacidades necesarias
↓
dependencias
↓
criterios de finalización
↓
hitos
↓
actuaciones necesarias
```

y permite avanzar deliberadamente hacia un producto definido.

---

Las dos direcciones son necesarias.

```text
dirección estratégica
+
validación empírica
=
convergencia controlada hacia el producto
```

---

# 4. Corrección del principio de fundamento positivo

El principio de fundamento positivo se conserva, pero se amplía su interpretación.

Una actuación podrá quedar justificada mediante cualquiera de las siguientes fuentes:

```text
A. nueva evidencia empírica;

B. pérdida o problema observado;

C. necesidad no satisfecha;

D. incompatibilidad entre elementos existentes;

E. dependencia necesaria de un objetivo estratégico vigente;

F. requisito necesario para alcanzar un hito previamente justificado;

G. oportunidad suficientemente fundamentada capaz de modificar
   de forma relevante el producto o su trayectoria.
```

Por tanto:

```text
fundamento positivo
≠
únicamente problema empírico aparecido espontáneamente
```

Una dependencia demostrable respecto de un objetivo estratégico válido constituye también fundamento positivo.

---

# 5. Consecuencia metodológica

La pregunta:

> ¿Cuál es la siguiente actuación automáticamente derivada?

no debe utilizarse como única pregunta de continuación del proyecto.

Debe distinguirse entre:

```text
actuación automáticamente derivada
```

y:

```text
actuación estratégicamente derivada
```

Puede no existir ninguna actuación automáticamente derivada de una investigación cerrada y, sin embargo, existir una actuación perfectamente justificada porque sea necesaria para avanzar hacia un objetivo estratégico vigente.

---

# 6. Delimitación de la primera versión estratégicamente completa

El proyecto dispone ya de una visión estratégica de largo plazo expresada en:

```text
docs/08-project/01-PLATFORM_VISION.md
```

Por tanto, la continuación no requiere volver a definir desde cero qué plataforma se pretende construir.

`PLATFORM_VISION.md` establece el horizonte general hacia el que evoluciona el producto, incluyendo capacidades perseguidas, principios de evolución y situaciones humanas que la plataforma aspira a poder atender.

Sin embargo:

```text
visión estratégica de largo plazo
≠
alcance obligatorio de una primera versión completa
```

La visión puede contener capacidades cuya incorporación resulte valiosa a largo plazo sin que todas ellas deban estar realizadas para considerar terminada una primera versión coherente del producto.

Antes de continuar desarrollando nuevas funcionalidades deberá delimitarse qué subconjunto de esa visión constituye una **V1 estratégicamente completa**.

Esta delimitación deberá permitir responder al menos:

```text
¿qué actividad o conjunto de actividades
debe poder realizarse de principio a fin?

¿qué capacidades de PLATFORM_VISION
son esenciales para esa primera versión?

¿qué capacidades pueden quedar justificadamente
fuera de V1?

¿qué compromisos de Product deben quedar
efectivamente realizados en la experiencia final?

¿qué grado de integración debe alcanzarse
para que V1 constituya un producto y no
una colección de experimentos independientes?
```

La delimitación de V1 no deberá basarse en intentar incorporar el mayor número posible de capacidades.

Deberá identificar el conjunto mínimo suficientemente completo para constituir una realización coherente y utilizable del propósito estratégico seleccionado.

Por tanto:

```text
V1
≠
toda PLATFORM_VISION realizada
```

y:

```text
V1
≠
prototipo mínimo arbitrario
```

sino:

```text
V1
=
primera realización estratégicamente completa
de un alcance explícitamente delimitado
dentro de PLATFORM_VISION
```

---

# 7. Necesidad y derivación del criterio de finalización

El proyecto necesita un criterio explícito de terminación para V1.

Mientras no exista:

```text
¿queda algo por hacer?
→ siempre podría aparecer algo

¿está terminada V1?
→ no puede determinarse

¿qué falta?
→ no puede evaluarse con suficiente fundamento
```

Sin embargo, ese criterio no puede fijarse correctamente antes de conocer:

```text
alcance de V1
+
capacidades esenciales
+
dependencias necesarias
```

Por tanto, el criterio de finalización deberá **derivarse** después de delimitar V1 y analizar las capacidades y dependencias que hacen posible su realización.

La finalización no deberá significar:

```text
todas las posibilidades imaginables implementadas
```

ni:

```text
toda la visión de largo plazo agotada
```

sino:

```text
todas las capacidades esenciales de V1
suficientemente construidas
+
integradas
+
validadas
+
sin dependencias obligatorias abiertas
```

El criterio deberá permitir distinguir al menos:

```text
capacidad prevista pero no iniciada

capacidad parcialmente realizada

capacidad realizada pero no integrada

capacidad integrada pero no suficientemente validada

capacidad completada para V1

mejora posterior opcional
```

La definición concreta de estos criterios no se anticipa todavía.

Deberá obtenerse una vez conocido el mapa de capacidades de V1 y sus dependencias.

---

# 8. Mapa de capacidades de V1

Una vez delimitado el alcance de V1 deberá construirse un mapa jerárquico de las capacidades necesarias para realizarlo.

El mapa partirá de las capacidades perseguidas por `PLATFORM_VISION.md`, pero no las incorporará automáticamente todas a V1.

Cada capacidad deberá clasificarse, al menos, como:

```text
esencial para V1

necesaria como dependencia de una capacidad esencial

posterior a V1

opcional

experimental

o todavía no suficientemente justificada
```

Su forma general podrá ser:

```text
V1 ESTRATÉGICAMENTE COMPLETA
│
├── capacidad esencial A
│   ├── capacidad A1
│   ├── capacidad A2
│   └── capacidad A3
│
├── capacidad esencial B
│   ├── capacidad B1
│   └── capacidad B2
│
├── capacidad esencial C
│
└── experiencia integrada de V1
```

El mapa no deberá inventarse a partir de tecnologías ni reproducir automáticamente categorías históricas.

Deberá derivarse de:

```text
PLATFORM_VISION vigente
+
compromisos de Product
+
alcance seleccionado para V1
+
evidencia acumulada
```

Su objetivo será permitir determinar:

```text
qué necesita existir para completar V1;

qué capacidades ya existen total o parcialmente;

qué capacidades faltan;

qué capacidades dependen de otras;

qué elementos pertenecen realmente
a versiones posteriores.
```

La existencia de una capacidad en `PLATFORM_VISION.md` no implicará por sí sola que sea obligatoria para V1.

---

# 9. Dependencias

Las capacidades deberán relacionarse mediante dependencias explícitas.

Por ejemplo:

```text
A
↓
B
↓
D

C ─────┘
```

Esto permitirá distinguir:

```text
capacidad importante
≠
capacidad urgente

capacidad aislada
≠
prerrequisito estructural

posibilidad futura
≠
bloqueo actual
```

---

# 10. Priorización

Las actuaciones futuras no se priorizarán únicamente por orden de aparición.

Una candidata deberá evaluarse al menos según:

```text
1. contribución al alcance y finalización de V1;

2. dependencia de otras capacidades;

3. capacidad que desbloquea;

4. gravedad de la ausencia actual;

5. evidencia disponible;

6. coste y complejidad;

7. reversibilidad;

8. riesgo de sobreconstrucción;

9. necesidad de investigación previa;

10. valor para validar el conjunto del producto.
```

---

# 11. Hitos

El recorrido hacia el producto deberá dividirse en hitos comprobables.

Cada hito deberá responder:

```text
qué nueva capacidad global existe después de alcanzarlo;

qué requisitos satisface;

qué dependencias desbloquea;

qué evidencia demuestra su cumplimiento;

qué elementos permanecen pendientes.
```

Los hitos no deberán identificarse exclusivamente con commits, funcionalidades o fases técnicas.

Un hito representa un incremento significativo de capacidad del producto.

---

# 12. Roadmap

Sólo después de disponer de:

```text
PLATFORM_VISION vigente
+
alcance de V1 delimitado
+
mapa de capacidades de V1
+
dependencias
+
criterios de finalización de V1
+
estado actual frente a ese alcance
+
huecos identificados
+
prioridades
+
hitos
```

deberá construirse un roadmap.

El roadmap expresará:

```text
estado actual
↓
hito 1
↓
hito 2
↓
hito 3
↓
...
↓
V1 estratégicamente completa
```

Debe ser modificable ante nueva evidencia.

No tendrá carácter dogmático.

---

# 13. Función de la investigación

La investigación continúa siendo esencial.

Pero cambia su posición dentro de la estrategia.

No será necesario esperar siempre a que aparezca espontáneamente una nueva situación para justificar trabajo.

La investigación podrá utilizarse para:

```text
validar una capacidad prevista;

comprobar si realmente es necesaria;

falsar una hipótesis del roadmap;

reducir una capacidad demasiado amplia;

resolver una incertidumbre que bloquea un hito;

evaluar una alternativa;

incorporar evidencia empírica inesperada;

corregir el mapa estratégico.
```

---

# 14. Tratamiento de nuevas situaciones reales

Una situación real futura no deberá transformarse automáticamente en una nueva prioridad.

Primero deberá preguntarse:

```text
¿afecta a una capacidad esencial?

¿revela una pérdida relevante?

¿cambia alguna dependencia?

¿invalida una hipótesis vigente?

¿afecta a un hito?

¿obliga a reconsiderar una prioridad?
```

Si la respuesta es negativa:

```text
registrar si resulta útil
↓
no necesariamente investigar ahora
```

De esta forma se evita dedicar recursos a cuestiones secundarias únicamente porque hayan aparecido empíricamente.

---

# 15. Coherencia global

Cada actuación deberá poder situarse dentro de una cadena como:

```text
alcance de V1
↓
capacidad necesaria
↓
hito
↓
actuación
↓
evidencia
```

o, cuando proceda:

```text
nueva evidencia
↓
modificación del mapa
↓
capacidad o hito afectado
↓
actuación
```

Una actuación que no pueda relacionarse justificadamente con ninguna de estas cadenas deberá considerarse candidata a:

```text
aplazamiento
registro
o rechazo
```

---

# 16. Papel de Product

Los compromisos de Product existentes continúan siendo normativos dentro de su alcance.

Pero:

```text
Product Values
≠
plan completo de construcción
```

`PV-001`–`PV-006` expresan compromisos humanos consolidados.

No constituyen por sí solos:

- el mapa completo de capacidades;
- el roadmap;
- la arquitectura;
- la definición de producto terminado.

La nueva estrategia deberá utilizar Product como restricción y fundamento, no como sustituto de la planificación.

---

# 17. Papel de Architecture

La nueva perspectiva no implica abrir Architecture inmediatamente.

Architecture deberá derivarse cuando el mapa de capacidades y las dependencias del producto hagan necesario resolver cuestiones estructurales de software.

Por tanto:

```text
planificación estratégica
≠
Architecture
```

pero la planificación podrá localizar posteriormente una necesidad arquitectónica concreta.

---

# 18. Papel de Realization

Realization continuará permitiendo comprobar si una capacidad o diferencia funcional puede constituirse efectivamente.

Sin embargo:

```text
Realization
≠
dirección estratégica del proyecto
```

Una Realization no determina por sí sola cuál debe ser la siguiente capacidad del producto.

---

# 19. Nuevo ciclo general de desarrollo

El ciclo general pasa a ser:

```text
PLATFORM_VISION
        ↓
DELIMITACIÓN DEL ALCANCE DE V1
        ↓
MAPA DE CAPACIDADES DE V1
        ↓
DEPENDENCIAS
        ↓
CRITERIOS DE FINALIZACIÓN DE V1
        ↓
ESTADO ACTUAL
        ↓
HUECOS
        ↓
PRIORIDADES
        ↓
HITOS
        ↓
ROADMAP
        ↓
ACTUACIÓN
        ↓
REALIZATION / IMPLEMENTATION
        ↓
VALIDACIÓN
        ↓
EVIDENCIA DE USO
        ↓
REVISIÓN DEL MAPA
        ↺
```

La investigación puede intervenir en cualquier punto donde exista una incertidumbre capaz de modificar una decisión relevante.

La evidencia nueva podrá también obligar a revisar:

```text
alcance de V1
capacidades
dependencias
prioridades
o incluso PLATFORM_VISION
```

cuando exista fundamento suficiente para ello.

---

# 20. Próxima actuación derivada

La adopción de esta perspectiva permite derivar una actuación estratégica concreta.

La visión de largo plazo ya se encuentra expresada en:

```text
docs/08-project/01-PLATFORM_VISION.md
```

y ha sido actualizada para incorporar los resultados posteriores relativos a determinación humana efectiva y continuidad de posibilidades pertinentes.

Por tanto, no corresponde volver a definir el producto desde cero.

La siguiente actuación consiste en **delimitar el alcance de una primera versión estratégicamente completa —V1— dentro de esa visión**.

La secuencia será:

```text
1. tomar PLATFORM_VISION como horizonte estratégico vigente;

2. identificar las actividades humanas que podrían constituir
   una trayectoria completa y coherente para V1;

3. delimitar qué parte de esa visión debe formar parte
   obligatoria de la primera versión;

4. identificar las capacidades esenciales para realizarla;

5. distinguir capacidades posteriores, opcionales
   o todavía no justificadas;

6. establecer las dependencias entre las capacidades de V1;

7. comparar ese mapa con el estado actual del proyecto;

8. derivar los criterios concretos de finalización de V1;

9. identificar los huecos existentes;

10. priorizar dichos huecos;

11. derivar hitos;

12. construir un roadmap de convergencia.
```

Sólo después deberá seleccionarse la siguiente actuación constructiva concreta.

---

# 21. Estado resultante

La metodología anterior no se rechaza.

Queda incorporada dentro de un marco más amplio:

```text
rigor empírico
+
reducción
+
falsación
+
fundamento positivo
+
dirección estratégica
+
priorización
+
planificación de convergencia
```

El objetivo ya no será simplemente:

```text
resolver correctamente la siguiente cuestión que aparezca
```

sino:

```text
construir deliberadamente un producto coherente
mientras cada paso continúa sometido a justificación,
reducción y validación.
```

---

# 22. Punto de reanudación

El siguiente trabajo del proyecto no consiste todavía en añadir una nueva funcionalidad ni en abrir automáticamente otra investigación.

Tampoco consiste en volver a definir la visión general del producto.

PLATFORM_VISION.md proporciona ya el horizonte estratégico.

La pregunta de reanudación pasa a ser:

¿Qué subconjunto coherente de la visión definida en PLATFORM_VISION.md debe estar suficientemente realizado para constituir una primera versión estratégicamente completa del producto?

A partir de esa delimitación deberán derivarse:

capacidades esenciales de V1
↓
dependencias
↓
criterios de finalización
↓
estado actual frente al objetivo
↓
huecos
↓
prioridades
↓
hitos
↓
roadmap

La ausencia de una actuación técnica inmediata deja así de significar ausencia de dirección.

El proyecto dispone ahora de una actuación estratégica justificable: transformar su visión de largo plazo en un alcance de V1 finito, coherente y verificablemente terminable.

---
