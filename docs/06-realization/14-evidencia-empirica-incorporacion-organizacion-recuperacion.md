# Evidencia empírica de incorporación, organización y recuperación de información

## Estado

**Naturaleza:** evidencia empírica obtenida mediante actividad humana real.
**Ámbito:** incorporación, elaboración, organización y recuperación de información procedente de vídeos.
**Compromiso de Product relacionado:** `PV-001`.
**Realización previa relacionada:** `R-U2-M1`.
**Estado:** prueba cerrada con resultado positivo dentro de su alcance; estabilización local obtenida; generalización no establecida.

---

# 1. Propósito

Este documento consolida la evidencia obtenida durante una actividad humana real
de incorporación, organización y recuperación de información procedente de
vídeos.

La actividad no fue iniciada para validar una solución técnica previamente
diseñada.

Surgió de una necesidad independiente: procesar vídeos previamente seleccionados,
obtener de ellos información considerada relevante, conservarla, organizarla y
poder utilizarla posteriormente.

El propósito de este documento consiste en:

- reconstruir la trayectoria efectivamente realizada;
- separar las diferencias humanas observadas de los mecanismos instrumentales
  contingentes utilizados para realizarlas;
- identificar resultados realizativamente relevantes surgidos durante el uso;
- reducir dichos resultados frente a los compromisos vigentes de Product;
- determinar su relación con `R-U2-M1`;
- establecer qué consecuencias quedan justificadas;
- y delimitar expresamente qué resultados no han sido derivados.

El documento no prescribe una arquitectura ni convierte las funciones de las
herramientas utilizadas en requisitos del futuro producto.

---

# 2. Origen de la actividad

La actividad partió de una intención previa de la persona: procesar una
colección de vídeos seleccionados para extraer información sobre distintos
temas.

La trayectoria inicialmente pretendida podía describirse de forma sencilla:

```text
vídeo
↓
obtener transcripción
↓
leer
↓
extraer información relevante
↓
clasificarla
↓
conservarla
```

Para realizarla se utilizaron provisionalmente herramientas externas ya
disponibles, principalmente:

```text
YouTube
→ fuente audiovisual
→ transcripción disponible

Firefox
→ acceso y extracción instrumental de la transcripción

Obsidian
→ conservación
→ elaboración
→ organización
→ relación
→ recuperación
```

Estos mecanismos fueron utilizados como infraestructura contingente.

Su presencia en la trayectoria no los convierte en requisitos normativos del
proyecto.

---

# 3. Trayectoria humana observada

La actividad finalmente ejercida adquirió una forma más rica:

```text
selección de una fuente
↓
incorporación de su transcripción
↓
preservación de la fuente
↓
lectura e interpretación
↓
identificación de aportaciones pertinentes
↓
elaboración de aportaciones distinguibles
↓
organización según contextos de uso
↓
establecimiento de relaciones cuando resultan pertinentes
↓
separación temporal
↓
necesidad posterior de recuperación
↓
reencontrado de una aportación
↓
reconstrucción de su procedencia y contexto
↓
posibilidad de nueva actuación
```

Durante la trayectoria, determinadas aportaciones incorporadas produjeron además
nuevas preguntas o necesidades de contraste que no formaban parte de la fuente
original:

```text
aportación procedente de una fuente
↓
interpretación
↓
nueva pregunta
↓
incorporación distinguible de esa pregunta
↓
posible investigación posterior
```

La actividad permitió, por tanto, observar no sólo conservación, sino también
multiplicidad, procedencia, relaciones, organización contextual, recuperación y
derivación posterior.

---

# 4. Evolución instrumental durante la prueba

La forma inicial de trabajo fue modificada únicamente cuando el uso produjo una
diferencia observable.

Entre las principales correcciones instrumentales aparecieron las siguientes.

## 4.1 Conservación de correspondencia temporal

Inicialmente se obtuvo una transcripción limpia sin marcas temporales.

Durante el uso se observó que esa simplificación dificultaba regresar al lugar
concreto del vídeo del que procedía una aportación.

Se pasó entonces a conservar las marcas temporales de la transcripción.

El resultado generalizable no es:

```text
toda fuente necesita timestamps
```

sino:

```text
una aportación derivada
↓
puede necesitar conservar
información suficiente
↓
para reencontrar el contexto pertinente
de su fuente
```

La marca temporal constituye únicamente la realización contingente utilizada
para fuentes audiovisuales.

## 4.2 Separación entre fuente y elaboración

La repetición de metadatos de procedencia en cada aportación resultó redundante.

Se estableció una separación entre:

```text
transcripción
→ fuente preservada

aportación temática
→ elaboración producida posteriormente
→ enlace a la fuente
```

Esta solución concreta pertenece a Obsidian.

La diferencia observada consiste en la necesidad de mantener distinguibles la
fuente y las elaboraciones producidas a partir de ella.

## 4.3 Agrupación por fuente

Cuando una misma fuente produjo varias aportaciones, una sucesión plana de
entradas dificultaba reconocer visualmente dónde terminaban las aportaciones de
una fuente y comenzaban las de otra.

Se introdujo una agrupación por vídeo.

La solución instrumental adoptada utilizó jerarquía Markdown y separadores.

El resultado empírico subyacente consiste en la necesidad local de poder
reconocer qué aportaciones proceden de una misma fuente.

## 4.4 Recuperación

La recuperación fue ejercida posteriormente mediante búsqueda.

Se observaron tres casos:

```text
expresión exacta recordada
→ recuperación eficaz

palabra distintiva recordada
→ recuperación eficaz dentro del alcance observado

descripción semántica formulada con otras palabras
→ recuperación no obtenida mediante el mecanismo textual utilizado
```

La prueba no deriva por ello una necesidad de búsqueda semántica.

Establece únicamente que una situación posterior puede comenzar sin conocer la
localización exacta de la aportación que se desea recuperar.

## 4.5 Distinción de cuestiones surgidas durante el procesamiento

Durante el procesamiento de una fuente apareció una cuestión de contraste que
no procedía del vídeo.

Para evitar confundirla con el contenido de la fuente se conservó como
aportación diferenciada.

Su presentación mediante un callout y una identidad cromática constituye una
solución contingente de Obsidian.

La diferencia observada es la necesidad de poder distinguir una nueva aportación
producida durante la interpretación de aquello de lo que procede.

---

# 5. Criterio de estabilización y cierre

La prueba no se cerró por alcanzar únicamente un número predeterminado de
vídeos.

Se adoptó como criterio local de estabilización:

```text
ejercicio completo de la trayectoria
+
capacidad de recuperación comprobada
+
ausencia de problemas bloqueantes
+
tres vídeos consecutivos
procesados sin modificación estructural importante
```

Se procesaron seis vídeos.

Los primeros usos permitieron localizar y corregir problemas instrumentales y
estructurales del procedimiento.

Tras las últimas modificaciones relevantes se obtuvieron tres aplicaciones
consecutivas completas sin necesidad de introducir una modificación estructural
adicional.

Por tanto:

```text
trayectoria ejercida
✔

correcciones derivadas del uso
✔

tres usos consecutivos estables
✔

problema bloqueante pendiente
→ no identificado

criterio local de cierre
✔ satisfecho
```

La estabilización es local.

No establece suficiencia general ni escalabilidad indefinida.

---

# 6. Resultados realizativamente relevantes observados

Los resultados siguientes se consideran evidencia empírica positiva dentro del
alcance de la prueba.

No se establece que sean condiciones universales ni mutuamente irreducibles.

---

## 6.1 `RE-IOR-01 — Multiplicidad distinguible`

Durante la actividad fue necesario conservar simultáneamente múltiples
aportaciones procedentes de distintas situaciones y fuentes.

La situación observada requiere que las aportaciones puedan permanecer
disponibles sin sustituirse necesariamente unas a otras y puedan continuar
siendo distinguibles posteriormente.

Puede representarse como:

```text
A1
A2
A3
...
An
↓
continuidad simultánea
↓
distinción posterior suficiente
```

La prueba no establece qué estructura técnica debe realizar esa multiplicidad.

En particular, no deriva necesariamente:

```text
archivos
carpetas
filas
objetos
registros
base de datos
```

---

## 6.2 `RE-IOR-02 — Correspondencia de procedencia`

Una aportación elaborada a partir de una fuente necesitó conservar información
suficiente para permitir posteriormente reconstruir su procedencia y reencontrar
el contexto pertinente.

En las fuentes audiovisuales utilizadas se realizó mediante:

```text
aportación
↓
fuente
+
intervalo temporal
```

La condición observada es más general:

> una aportación derivada puede necesitar conservar correspondencia suficiente
> con aquello de lo que procede para que una situación posterior pueda regresar
> al contexto pertinente.

La prueba no establece que dicha correspondencia deba realizarse mediante
marcas temporales.

---

## 6.3 `RE-IOR-03 — Relaciones entre aportaciones`

Durante la elaboración aparecieron aportaciones cuya utilidad posterior dependía
también de conservar una relación con otras aportaciones.

Se observaron relaciones tales como:

```text
ejemplo
→ respecto de una tesis

explicación material
→ respecto de una posibilidad jurídica

aportación posterior
→ respecto de una aportación anterior
```

La evidencia establece que:

> unas aportaciones pueden necesitar conservar relaciones significativas con
> otras para intervenir posteriormente en una actuación humana.

La prueba no deriva una sintaxis concreta de enlaces ni un modelo relacional
determinado.

---

## 6.4 `RE-IOR-04 — Pluralidad contextual`

Una misma aportación pudo resultar pertinente respecto de varios contextos de
organización o uso.

Por ejemplo, una aportación conservada principalmente en un ámbito histórico
podía mantener relación también con religión o filosofía.

La evidencia observada puede formularse como:

> una aportación no necesita quedar limitada necesariamente a un único contexto
> posterior de organización o utilización.

La prueba no establece como solución necesaria:

```text
etiquetas
carpetas múltiples
duplicación
enlaces
vistas
clasificación many-to-many
```

---

## 6.5 `RE-IOR-05 — Recuperación desde indicios`

La recuperación posterior fue posible aun cuando la persona no conocía de
antemano la localización exacta de la aportación.

Se observaron situaciones en las que la recuperación comenzó mediante:

```text
expresión exacta recordada
```

o:

```text
palabra distintiva recordada
```

sin recordar necesariamente:

```text
archivo
ubicación
fuente
posición exacta
```

Por tanto:

> una situación posterior puede requerir reencontrar una aportación a partir de
> indicios parciales y sin disponer inicialmente de su localización exacta.

La prueba no establece la necesidad de recuperación semántica mediante
interpretación automática.

---

## 6.6 `RE-IOR-06 — Derivación distinguible`

Durante el procesamiento de una aportación surgieron nuevas preguntas y
aportaciones que no pertenecían a la fuente original.

Fue necesario poder distinguir:

```text
A
→ aportación procedente de la fuente

B
→ aportación producida posteriormente
  durante la interpretación de A
```

y conservar, cuando resultaba pertinente:

```text
B
→ relación con A
```

Por tanto:

> una nueva aportación producida durante una situación posterior puede necesitar
> permanecer distinguible de aquello de lo que procede y conservar una relación
> suficiente con ese antecedente.

La prueba no deriva como elementos normativos los campos, callouts, colores o
tipos documentales concretos utilizados para realizar esa distinción.

---

# 7. Estatuto de `RE-IOR-01` ... `RE-IOR-06`

Los seis resultados anteriores poseen el siguiente estatuto:

```text
observados durante actividad humana real
✔

relevantes para la realización local de la trayectoria
✔

ejercidos conjuntamente mediante infraestructura disponible
✔

condiciones realizativas universales
→ no establecido

mutuamente irreducibles
→ no establecido

firma fundamental
→ no derivada

responsabilidades arquitectónicas
→ no derivadas
```

Por tanto, este documento no los presenta como una nueva teoría realizativa
cerrada.

Constituyen evidencia empírica disponible para futuras investigaciones o
realizaciones cuando aparezca fundamento suficiente para utilizarlos.

---

# 8. Reducción frente a `PV-001`

`PV-001` establece como valor humano que:

> las posibilidades posteriores de actuación puedan depender también de
> aportaciones procedentes de situaciones anteriores.

La trayectoria observada conserva esa forma:

```text
situación anterior
↓
incorporación de una aportación
↓
continuidad
↓
situación posterior
↓
reencontrado / relación / utilización
↓
nuevas posibilidades de actuación
dependientes de aquello incorporado
```

Los resultados `RE-IOR-01` ... `RE-IOR-06` describen aspectos realizativamente
relevantes observados durante una realización más rica de esa continuidad.

No se ha establecido una diferencia humana independiente que exija introducir
un nuevo valor de Product.

Por tanto:

```text
reducción frente a PV-001
✔

nuevo valor humano independiente
→ no establecido

PV-002
→ no derivado

modificación de PRODUCT.md
→ no derivada
```

---

# 9. Relación con `R-U2-M1`

`R-U2-M1` constituye una realización contingente deliberadamente mínima capaz de
preservar una aportación `X` a través de una interrupción para que pueda quedar
disponible en una situación posterior.

Su forma básica permanece:

```text
S1
↓
X
↓
interrupción
↓
S2(X)
↓
Y
```

La trayectoria observada durante esta prueba contiene una multiplicidad y una
red de correspondencias superior:

```text
A1 ... An
↓
continuidad simultánea

fuentes
↕
aportaciones derivadas

aportaciones
↔
otras aportaciones

contextos múltiples

separación temporal
↓
recuperación posterior
```

Por tanto:

> `R-U2-M1` no constituye una realización suficiente para reproducir
> conjuntamente la trayectoria observada en esta prueba.

Este resultado no constituye una deficiencia de `R-U2-M1`.

La realización conserva correctamente el alcance para el que fue derivada.

En consecuencia:

```text
insuficiencia de R-U2-M1
para reproducir toda la nueva trayectoria
✔ establecida localmente

modificación de R-U2-M1
→ no derivada

reapertura de R-U2-M1
→ no derivada

sustitución de R-U2-M1
→ no derivada
```

---

# 10. Suficiencia instrumental externa observada

Aunque `R-U2-M1` no reproduce la trayectoria completa, la actividad humana pudo
ser realizada mediante infraestructura externa disponible.

Dentro del alcance de la prueba:

```text
YouTube
+
Firefox
+
Obsidian
+
procedimiento humano
↓
trayectoria completada
```

No se observó una pérdida o bloqueo que impidiera continuar la actividad.

Las fricciones instrumentales aparecidas pudieron resolverse localmente sin que
fuera necesario que el proyecto asumiera técnicamente las capacidades
correspondientes.

Por tanto:

```text
condiciones realizativamente relevantes
✔ observadas

instrumentación externa suficiente
para la actividad local
✔ observada

necesidad humana actual
de sustituir dicha infraestructura
→ no establecida
```

La suficiencia es provisional y local.

No establece que la infraestructura externa sea suficiente en cualquier escala,
situación o trayectoria futura.

---

# 11. Resultados no derivados

La prueba no deriva:

```text
nuevo compromiso de Product
→ no

PV-002
→ no

modificación de PV-001
→ no

modificación de R-U2-M1
→ no

nueva realización obligatoria
→ no

arquitectura software
→ no

nueva responsabilidad arquitectónica
→ no

base de datos
→ no

sistema propio de transcripciones
→ no

motor de búsqueda semántica
→ no

sistema de etiquetas
→ no

taxonomía universal
→ no

identidad cromática por fuente como requisito
→ no

sustitución de Obsidian
→ no

nueva línea estratégica
→ no
```

La posibilidad técnica de construir alguno de esos mecanismos no constituye
fundamento suficiente para derivarlo.

---

# 12. Límites de la evidencia

La prueba establece resultados únicamente dentro de su alcance observado.

No demuestra:

```text
validez para otras personas
→ no establecida

validez para cualquier tipo de fuente
→ no establecida

escalabilidad a miles de fuentes
→ no establecida

suficiencia indefinida de archivos temáticos
→ no establecida

suficiencia general de búsqueda textual
→ no establecida

necesidad de búsqueda semántica
→ no establecida

universalidad de la organización temática utilizada
→ no establecida

suficiencia general de Obsidian
→ no establecida

necesidad general de una plataforma propia
→ no establecida
```

La ausencia de esas generalizaciones no constituye una carencia que deba
investigarse sin fundamento adicional.

---

# 13. Resultado consolidado

La prueba se cierra con resultado positivo dentro de su alcance.

Puede reconstruirse del siguiente modo:

```text
actividad humana real
↓
incorporación de múltiples fuentes y aportaciones
↓
organización y elaboración
↓
relaciones y procedencia
↓
separación temporal
↓
recuperación posterior
↓
nueva actuación posible
```

Durante dicha trayectoria quedaron observados seis resultados
realizativamente relevantes:

```text
RE-IOR-01
→ multiplicidad distinguible

RE-IOR-02
→ correspondencia de procedencia

RE-IOR-03
→ relaciones entre aportaciones

RE-IOR-04
→ pluralidad contextual

RE-IOR-05
→ recuperación desde indicios

RE-IOR-06
→ derivación distinguible
```

Los seis resultados:

```text
→ quedan disponibles como evidencia empírica;
→ no quedan establecidos como irreducibles;
→ no derivan un nuevo compromiso de Product;
→ no derivan modificación de R-U2-M1;
→ no derivan Architecture;
→ no derivan por sí mismos una nueva realización propia.
```

La infraestructura externa disponible permitió completar suficientemente la
actividad observada.

Por tanto, no se ha establecido una pérdida humana actual que exija que el
proyecto reproduzca mediante una realización propia la trayectoria completa.

---

# 14. Consecuencia para el estado del proyecto

La prueba produce simultáneamente un resultado positivo y una consecuencia
estratégica negativa legítima.

Resultado positivo:

```text
nueva evidencia empírica realizativamente relevante
→ sí

RE-IOR-01 ... RE-IOR-06
→ establecidos dentro del alcance observado
```

Consecuencia estratégica:

```text
pérdida humana que obligue a construcción propia
→ no identificada

nuevo compromiso de Product
→ no derivado

nueva Architecture
→ no derivada

nueva realización obligatoria
→ no derivada

nueva línea estratégica
→ no justificada por esta prueba
```

Por tanto, el estado resultante es:

```text
prueba de incorporación,
organización y recuperación
✔ cerrada positivamente

PV-001
✔ suficiente para explicar
  la diferencia humana observada

RE-IOR-01 ... RE-IOR-06
✔ evidencia disponible

R-U2-M1
✔ mantiene intacto su alcance
→ no reproduce conjuntamente
  la trayectoria más rica observada
→ modificación no derivada

instrumentación externa
✔ suficiente provisionalmente
  dentro del alcance observado

Architecture
→ no derivada

línea estratégica concreta vigente
→ ninguna nueva establecida

actuación posterior automáticamente derivada
→ ninguna
```

Una actuación posterior sólo deberá seleccionarse cuando nueva evidencia,
una pérdida concreta, una necesidad no satisfecha, una incompatibilidad,
un nuevo compromiso u otro fundamento positivo independiente produzca una
diferencia capaz de justificarla.

La mera disponibilidad de `RE-IOR-01` ... `RE-IOR-06` no constituye por sí
misma esa justificación.

---
