# Resultado P-WA-03 y cierre de L-EXT-02

## Estado

**P-WA-03 CERRADA — L-EXT-02 CERRADA CON RESULTADO FAVORABLE LIMITADO**

## Fecha

4 de noviembre de 2026.

## Derivación

Este documento deriva de:

- `43-PANORAMA_EXTERNO_PLATAFORMAS_ESTANDARES_E_IA.md`;
- `44-MATRIZ_COMPARATIVA_PANORAMA_EXTERNO_VS_PROYECTO.md`;
- `45-ESTUDIO_PROV_O_Y_RECONSTRUCCION_DE_TRAYECTORIA.md`;
- `46-RESULTADO_P_PROV_01_REPRESENTACION_MINIMA_V0_T1_T2.md`;
- `47-RESULTADO_P_PROV_02_Y_CIERRE_L_EXT_01.md`;
- `48-CONSOLIDACION_P_WA_01_P_WA_02_Y_CONTINUIDAD_L_EXT_02.md`;
- `29-investigacion-continuidad-participacion-materiales-heterogeneos.md`;
- `30-reduccion-de-pertinencia-sobrevenida-en-C1.md`;
- `31-cierre-de-C1-en-I29.md`;
- `32-cierre-de-investigacion-29.md`;
- los materiales reales recuperados del caso C1.

---

# 1. Objeto

El presente documento tiene dos funciones.

Primera:

```text
cerrar P-WA-03
```

mediante la comprobación del patrón de anclaje sobre una relación:

```text
vídeo
↔
imagen
```

Segunda:

```text
reevaluar L-EXT-02
```

y determinar si permanece alguna incertidumbre discriminante que justifique continuar añadiendo pruebas.

---

# 2. Estado previo

El documento 48 dejó:

```text
P-WA-01
→ CERRADA CON RESULTADO MIXTO

P-WA-02
→ SUPERADA CON CONDICIÓN

H-WA-SUF
→ SOSTENIDA PARCIALMENTE Y REFINADA

H-WA-GAP
→ SOSTENIDA PARCIALMENTE
  para Annotation directa

→ NO SOSTENIDA
  para Selectors como capa de anclaje

L-EXT-02
→ ABIERTA

P-WA-03
→ DERIVADA
```

---

# 3. Pregunta de P-WA-03

La pregunta derivada fue:

> **¿Puede el patrón Correspondence propia + mecanismos estándar de selección representar suficientemente la relación real entre I1 y V0@00:25, manteniendo la función ejercida por el fotograma y sin introducir vocabulario o complejidad que no aporte una ganancia reconstructiva observable?**

---

# 4. Regla metodológica

P-WA-03 debía proceder:

```text
material real
→ correspondencia real
→ función real
→ representación mínima
→ contraste
→ evaluación
```

No se permitía diseñar primero una representación estándar para después intentar encajar el material.

---

# 5. Material recuperado

La búsqueda sobre el conjunto real de C1 localizó:

```text
imagenes/I1-00-25.jpg
```

como archivo correspondiente a I1.

---

# 6. Referencia real en N1

N1 contiene:

```text
Origen en V0:
[[VID-20190119-WA0001.mp4#t=25|00:25]]
```

y posteriormente:

```text
Fotograma correspondiente:

![I1 — fotograma de V0 en 00:25](I1-00-25.jpg)
```

---

# 7. Primera relación demostrada

Por tanto, N1 establece explícitamente:

```text
V0 @ 00:25
↔
I1-00-25.jpg
```

Esta relación no fue reconstruida a partir de memoria.

Está materializada en N1.

---

# 8. Función contextual de I1

El contexto completo de N1 muestra:

```text
### Momento relevante

Origen en V0:
00:25

pregunta inicial

Fotograma correspondiente:
I1

## Continuación

comprobar qué se está afirmando exactamente
en el vídeo en este punto
```

---

# 9. Función real de I1

En el alcance documentado:

```text
I1
→ conserva visualmente el momento relevante
   correspondiente a V0@00:25
```

No aparece como una interpretación autónoma.

No aparece como una selección parcial de otra imagen.

---

# 10. Ausencia de selección interna

No existe evidencia de que sólo una región de I1 sea relevante.

Por tanto:

```text
selector espacial de I1
→ NO DERIVADO
```

---

# 11. Consecuencia

No queda justificado introducir:

```text
SvgSelector
selector de coordenadas
región rectangular
máscara
selector espacial propio
```

---

# 12. Representación mínima candidata

La representación mínima es:

```text
Correspondence C1-I1-25
│
├── extremo A
│   └── V0 @ 00:25
│
└── extremo B
    └── I1-00-25.jpg
```

---

# 13. Naturaleza del extremo A

El extremo A no utiliza todo V0.

Utiliza:

```text
un segmento temporal de V0
```

---

# 14. Naturaleza del extremo B

El extremo B sí utiliza:

```text
I1 completo
```

Por tanto:

```text
extremo
≠
necesariamente selección interna
```

---

# 15. Refinamiento del patrón

El patrón derivado de P-WA-02 había sido formulado provisionalmente como:

```text
Correspondence
+
selección A
+
selección B
```

P-WA-03 permite corregirlo.

---

# 16. Patrón refinado

La formulación más precisa pasa a ser:

```text
Correspondence
+
identificación suficiente de cada extremo
```

donde cada extremo puede ser:

```text
recurso completo
```

o:

```text
SpecificResource + Selector
```

si sólo una parte del recurso es pertinente.

---

# 17. Ganancia conceptual

Esta formulación reduce complejidad.

No obliga a crear selectores innecesarios.

---

# 18. Principio de granularidad suficiente

Se deriva:

> **cada extremo debe identificarse únicamente con la granularidad necesaria para reconstruir la relación ejercida.**

---

# 19. Aplicación a V0

Para V0:

```text
recurso completo
→ demasiado amplio
```

porque la relación recae específicamente sobre:

```text
00:25
```

---

# 20. Aplicación a I1

Para I1:

```text
recurso completo
→ suficientemente preciso
```

porque todo el fotograma constituye el material relevante.

---

# 21. Representación conceptual de V0

Puede representarse como:

```text
SpecificResource(V0-25)

source
→ V0

selector
→ FragmentSelector
→ fragmento temporal correspondiente a 00:25
```

---

# 22. Representación conceptual de I1

I1 puede representarse directamente como:

```text
I1-00-25.jpg
```

sin selector adicional.

---

# 23. Ausencia de simetría forzada

La correspondencia no exige que ambos extremos tengan la misma estructura técnica.

---

# 24. Simetría semántica

La relación puede mantener:

```text
A ↔ B
```

aunque:

```text
A
→ selección de recurso

B
→ recurso completo
```

---

# 25. Primera evaluación

P-WA-03 demuestra por tanto que:

```text
Correspondence propia
+
SpecificResource cuando haga falta
+
recurso completo cuando sea suficiente
```

puede representar el caso sin pérdida semántica observable.

---

# 26. Verificación material de I1

Para evitar depender únicamente de la afirmación documental de N1, se realizó una comprobación material.

---

# 27. Características de I1

El comando `file` mostró:

```text
JPEG
800 × 450
JFIF
comment:
Lavc60.31.102
```

---

# 28. Características de V0

`ffprobe` mostró para el vídeo:

```text
800 × 450
aproximadamente 28,87 fps
30 tbr
```

---

# 29. Compatibilidad material inicial

Las dimensiones de I1 coinciden exactamente con las dimensiones de V0.

Además, I1 conserva una referencia al codificador:

```text
Lavc60.31.102
```

compatible con la versión de libavcodec utilizada durante la extracción experimental.

---

# 30. Límite de esa evidencia

La coincidencia de dimensiones y codificador:

```text
refuerza
```

pero por sí sola no demuestra:

```text
I1 = fotograma V0@00:25
```

---

# 31. Extracción experimental

Se extrajo un fotograma de V0 en:

```text
00:25
```

a:

```text
/tmp/P-WA-03-V0-00-25.jpg
```

---

# 32. Carácter reversible

La extracción:

```text
no modificó
→ V0

no modificó
→ I1

no modificó
→ repositorio

no modificó
→ C1
```

El archivo experimental quedó en `/tmp`.

---

# 33. Resultado de FFmpeg

FFmpeg produjo:

```text
frame=1
```

con salida JPEG:

```text
800 × 450
encoder:
Lavc60.31.102 mjpeg
```

---

# 34. Verificación por hash

Se calculó SHA-256 de:

```text
I1-00-25.jpg
```

y:

```text
/tmp/P-WA-03-V0-00-25.jpg
```

---

# 35. Resultado del hash

Ambos archivos produjeron exactamente:

```text
e3af695bcda9dbac708571f5035adbfe4de48182ef8493795a90c1894b10c17e
```

---

# 36. Consecuencia probatoria

Por tanto:

```text
I1-00-25.jpg
=
fotograma extraído experimentalmente
de V0 en 00:25
```

a nivel binario.

---

# 37. Fuerza de la comprobación

No se trata únicamente de:

```text
similitud visual
```

ni de:

```text
mismas dimensiones
```

ni de:

```text
mismo codificador
```

sino de:

```text
identidad byte a byte
```

en la extracción efectuada.

---

# 38. Relación material demostrada

La relación:

```text
V0@00:25
↔
I1
```

queda por tanto sostenida simultáneamente por:

```text
N1
+
nombre del archivo
+
dimensiones
+
extracción experimental
+
SHA-256 idéntico
```

---

# 39. Resultado epistemológico

La hipótesis material de correspondencia entre I1 y V0@00:25 queda suficientemente demostrada para P-WA-03.

---

# 40. P-WA-03-C1 — correspondencia real

¿Existe una correspondencia real y documentada?

```text
SÍ
```

Resultado:

```text
SUPERADO
```

---

# 41. P-WA-03-C2 — localización temporal

¿Puede identificarse el extremo V0 con suficiente precisión?

```text
SÍ
```

mediante:

```text
fragmento temporal @00:25
```

Resultado:

```text
SUPERADO
```

---

# 42. P-WA-03-C3 — identificación de I1

¿Puede identificarse suficientemente el extremo imagen?

```text
SÍ
```

mediante:

```text
I1 completo
```

Resultado:

```text
SUPERADO
```

---

# 43. P-WA-03-C4 — selector interno de imagen

¿Es necesario seleccionar una región interna de I1?

```text
NO
```

en el caso ensayado.

Resultado:

```text
NO DERIVADO
```

---

# 44. P-WA-03-C5 — fidelidad semántica

¿La representación conserva la función real de I1?

```text
SÍ
```

I1 continúa siendo:

```text
fotograma correspondiente
al momento V0@00:25
```

---

# 45. P-WA-03-C6 — vocabulario adicional

¿Es necesario introducir un nuevo tipo significativo de Selector?

```text
NO
```

---

# 46. P-WA-03-C7 — complejidad

¿La complejidad crece desproporcionadamente?

```text
NO
```

El caso utiliza:

```text
recurso completo
+
FragmentSelector ya justificado
```

---

# 47. P-WA-03-C8 — ganancia reconstructiva

¿La representación permite reconstruir qué imagen corresponde a qué momento del vídeo?

```text
SÍ
```

---

# 48. P-WA-03-C9 — comprobabilidad

¿La correspondencia puede verificarse independientemente de la narración?

```text
SÍ
```

mediante la reproducción de la extracción y la comparación de hash.

---

# 49. Resultado consolidado de P-WA-03

```text
P-WA-03
→ SUPERADA
```

---

# 50. Hallazgo P-WA-03-01

> **No todo extremo de una correspondencia necesita un Selector; un recurso completo debe utilizarse directamente cuando ya tiene la granularidad adecuada.**

---

# 51. Hallazgo P-WA-03-02

> **La selección debe introducirse únicamente cuando la relación recae sobre una parte del recurso.**

---

# 52. Hallazgo P-WA-03-03

> **El patrón probado en vídeo↔texto también funciona en vídeo↔imagen sin crecimiento significativo de vocabulario.**

---

# 53. Hallazgo P-WA-03-04

> **I1 no necesita un selector espacial en el caso ensayado.**

---

# 54. Hallazgo P-WA-03-05

> **La relación I1↔V0@00:25 queda materialmente comprobada mediante identidad SHA-256 del fotograma original y la extracción reproducida.**

---

# 55. Generalización controlada

Después de P-WA-03 se dispone de dos familias heterogéneas:

```text
vídeo
↔
texto
```

y:

```text
vídeo
↔
imagen
```

---

# 56. Primera familia

P-WA-02 mostró:

```text
V0@00:58
↔
frase exacta de T2
```

---

# 57. Segunda familia

P-WA-03 mostró:

```text
V0@00:25
↔
I1 completo
```

---

# 58. Diferencia estructural

El primer caso necesita:

```text
selección temporal
+
selección textual
```

El segundo:

```text
selección temporal
+
recurso completo
```

---

# 59. Regla transversal resultante

La regla consolidada pasa a ser:

> **una Correspondence mantiene su semántica en el dominio propio y referencia cada extremo como recurso completo o como selección de recurso, según la granularidad realmente ejercida.**

---

# 60. Fórmula conceptual

```text
Correspondence
│
├── endpoint A
│   └── Resource | SpecificResource
│
└── endpoint B
    └── Resource | SpecificResource
```

---

# 61. Responsabilidad de Correspondence

`Correspondence` responde:

```text
qué extremos están relacionados
```

y, mediante la semántica propia del proyecto:

```text
qué significa esa relación
```

---

# 62. Responsabilidad de SpecificResource

`SpecificResource` responde:

```text
qué parte concreta del recurso
participa en la relación
```

---

# 63. Responsabilidad de Selector

`Selector` responde:

```text
cómo identificar ese segmento
dentro de la fuente
```

---

# 64. Responsabilidad del recurso completo

Cuando toda la unidad es relevante:

```text
Selector
→ innecesario
```

---

# 65. Economía conceptual

Esta regla evita:

```text
selectores ficticios
```

y:

```text
estructuras simétricas artificiales
```

---

# 66. Comprobación reductiva final

Tras P-WA-03 se examinó si dentro del conjunto:

```text
N1 ↔ T2 ↔ V0 ↔ I1
```

quedaba alguna relación real que exigiera otro mecanismo de selección.

---

# 67. Inventario de referencias de N1

N1 contiene referencias a:

```text
V0@00:25
I1
T2-Entropía-y-caos
T2-Radiación-y-vida
V0@00:38
V0@00:58
V0@01:25
V0@01:50
T2-Orden-y-caos
V0 completo
```

---

# 68. Categoría A

Referencias temporales de V0:

```text
00:25
00:38
00:58
01:25
01:50
```

Todas pertenecen a la misma familia:

```text
fragmento temporal
```

---

# 69. Mecanismo suficiente para A

```text
FragmentSelector
```

o mecanismo conceptualmente equivalente de selección temporal.

No se deriva otro tipo.

---

# 70. Categoría B

Referencias T2:

```text
T2-Entropía-y-caos
T2-Radiación-y-vida
T2-Orden-y-caos
```

---

# 71. Granularidad de B

Cuando la relación real recae sobre una afirmación concreta, el encabezado de sección puede refinarse mediante:

```text
TextQuoteSelector
```

---

# 72. Caso ya demostrado

En:

```text
T2-Radiación-y-vida
```

la relación real recae sobre:

```text
“Crea la vida porque eso absorbe radiación solar.”
```

---

# 73. Caso de 01:50

N1 contiene:

```text
V0@01:50

T2:
T2-Orden-y-caos

“Crear orden para poder después crear más caos.”
```

---

# 74. Naturaleza del caso 01:50

Este caso no introduce una familia nueva.

Repite:

```text
fragmento temporal
+
fragmento textual
```

---

# 75. Consecuencia

No deriva:

```text
nuevo Selector
```

---

# 76. Caso de 01:25

N1 contiene:

```text
V0@01:25

“...porque aumenta la entropía.”
```

y un contraste propio.

---

# 77. Ausencia de T2 en 01:25

En ese bloque no aparece una referencia T2.

Por tanto, no existe una selección textual ausente que deba reconstruirse artificialmente.

---

# 78. Consecuencia

El caso 01:25 requiere únicamente:

```text
fragmento temporal de V0
```

---

# 79. Categoría C

I1 aparece como:

```text
I1-00-25.jpg
```

recurso completo.

---

# 80. Mecanismo suficiente para C

```text
recurso completo
```

sin selector espacial.

---

# 81. Categoría D

N1 incluye también:

```text
![[VID-20190119-WA0001.mp4]]
```

---

# 82. Función de D

La incrustación corresponde a:

```text
V0 completo
```

---

# 83. Mecanismo suficiente para D

```text
recurso completo
```

sin Selector.

---

# 84. Resultado del inventario

Todas las referencias materiales identificadas quedan cubiertas por:

```text
A. recurso completo

B. fragmento temporal

C. fragmento textual
```

---

# 85. Ausencia de cuarta familia

No se encontró evidencia que derive:

```text
selector espacial de imagen
TextPositionSelector
DataPositionSelector
RangeSelector
SvgSelector
CssSelector
XPathSelector
State
Composite
List
Choice
otro mecanismo adicional
```

---

# 86. Precisión

La ausencia de derivación no significa:

```text
esos mecanismos son inútiles
```

Significa:

```text
el corpus ensayado
no exige actualmente esos mecanismos
```

---

# 87. Resultado de la comprobación reductiva

```text
nuevo tipo de anclaje pendiente
→ NO IDENTIFICADO
```

---

# 88. Implicación

No aparece una incertidumbre discriminante que justifique abrir:

```text
P-WA-04
```

únicamente para acumular otro caso semejante.

---

# 89. Regla contra acumulación de evidencia

Una línea experimental no debe mantenerse abierta sólo porque sea posible producir más ejemplos.

Debe permanecer abierta si existe:

```text
una incertidumbre relevante
que otra prueba pueda resolver
```

---

# 90. Estado tras P-WA-03

En este punto:

```text
pregunta sobre vídeo↔texto
→ suficientemente discriminada

pregunta sobre vídeo↔imagen
→ suficientemente discriminada

búsqueda de otro mecanismo
→ negativa
```

---

# 91. Reevaluación de H-WA-SUF

La formulación inicial amplia de H-WA-SUF no queda demostrada.

No puede afirmarse:

```text
todo Web Annotation
es suficiente para toda correspondencia
del proyecto
```

---

# 92. Formulación final de H-WA-SUF

La formulación sostenible es:

> **los mecanismos de Specific Resource y Selector resultan conceptualmente suficientes como capa de anclaje granular para las correspondencias heterogéneas ensayadas, siempre que la semántica de Correspondence permanezca en el dominio propio y que los recursos fuente dispongan de identidad suficientemente estable.**

---

# 93. Resultado de H-WA-SUF

```text
H-WA-SUF
→ SOSTENIDA EN EL ALCANCE ENSAYADO,
   TRAS REFINAMIENTO
```

---

# 94. Reevaluación de H-WA-GAP

H-WA-GAP sí detectó un límite real:

```text
forzar Correspondence
dentro de Annotation básica
→ puede deformar la relación
```

---

# 95. Reducción de H-WA-GAP

Ese problema desaparece cuando:

```text
Correspondence
→ dominio propio

Selectors
→ anclaje
```

---

# 96. Resultado final de H-WA-GAP

```text
H-WA-GAP
→ SOSTENIDA PARA LA ADOPCIÓN DIRECTA
   DE ANNOTATION COMO SUSTITUTO
   DE CORRESPONDENCE

→ NO SOSTENIDA PARA EL USO REDUCIDO
   DE SPECIFIC RESOURCE + SELECTORS
```

---

# 97. Resultado conceptual principal

El resultado de L-EXT-02 no es:

```text
adoptar Web Annotation
```

---

# 98. Resultado reducido

Es:

```text
reutilizar conceptualmente
los mecanismos mínimos de anclaje
cuando mejoren una relación ya existente
```

---

# 99. Núcleo actualmente justificado

Quedan conceptualmente justificados:

```text
Resource
SpecificResource
source
selector
FragmentSelector
TextQuoteSelector
exact
```

y, cuando sean necesarios:

```text
prefix
suffix
conformsTo
```

---

# 100. Regla sobre Selector

`Selector` sólo se introduce cuando:

```text
el recurso completo
es más amplio
que el extremo real de la relación
```

---

# 101. Regla sobre recurso completo

Cuando todo el recurso es el extremo real:

```text
recurso completo
→ suficiente
```

---

# 102. Vocabulario todavía no derivado

No quedan derivados como necesarios:

```text
Annotation
Body
Motivation
Composite
List
Choice
State
TimeState
TextPositionSelector
DataPositionSelector
RangeSelector
SvgSelector
CssSelector
XPathSelector
```

---

# 103. Relación con Selectors and States

El patrón observado es compatible con la idea de utilizar mecanismos de selección independientemente de una aplicación de anotaciones completa.

---

# 104. Consecuencia

No es necesario que:

```text
Correspondence
→ sea Annotation
```

para poder reutilizar:

```text
SpecificResource
+
Selector
```

---

# 105. Relación con PROV

L-EXT-01 y L-EXT-02 producen capas diferentes.

---

# 106. PROV

PROV permite representar:

```text
procedencia
actividad
derivación
trayectoria
contextualización histórica
```

---

# 107. Selectors

Selectors permiten representar:

```text
localización granular
```

---

# 108. Dominio propio

El dominio continúa representando:

```text
Correspondence
Difference
Criterion
Gate
Sufficiency
Reduction
continuidad humana
significado metodológico
```

---

# 109. Separación consolidada

```text
dominio propio
→ significado

PROV
→ procedencia y trayectoria

SpecificResource + Selectors
→ anclaje granular
```

---

# 110. Complementariedad observada en C1

Puede representarse:

```text
PROV
→ V0 participa en obtención/corrección de T2

Selectors
→ V0@00:58
   ↔ frase T2

Correspondence
→ establece la relación concreta
```

y:

```text
Selectors
→ V0@00:25

Resource
→ I1

Correspondence
→ vincula ambos extremos
```

---

# 111. Ganancia

Esta separación permite evitar que una única capa tenga que representar:

```text
procedencia
+
anclaje
+
semántica metodológica
```

---

# 112. Reducción de complejidad propia

No es necesario inventar desde cero:

```text
mecanismos propios
para describir fragmentos temporales
y fragmentos textuales
```

si un vocabulario estándar ya satisface esa función.

---

# 113. Pero no existe sustitución global

Los estándares externos no sustituyen:

```text
la semántica central del proyecto
```

---

# 114. Identidad estable de source

P-WA-02 reveló una condición transversal que permanece vigente.

---

# 115. Evidencia empírica

La ruta histórica:

```text
~/Escritos/C1-material-trabajo/
```

ya no coincidía con la ubicación actual recuperada.

---

# 116. Resultado

```text
ubicación física
≠
identidad conceptual del material
```

---

# 117. Condición

Para reconstrucción longitudinal robusta:

```text
source
→ necesita identidad suficientemente estable
```

---

# 118. Lo que no se ha determinado

No se ha decidido si esa identidad debe ser:

```text
URI
URN
UUID
hash
identificador interno
catálogo
otro mecanismo
```

---

# 119. Razón

Resolverlo ahora convertiría una condición conceptual en una decisión tecnológica no derivada.

---

# 120. Relación con el SHA-256 de I1

El uso experimental de SHA-256 demostró una identidad binaria concreta.

No demuestra que:

```text
hash
→ deba convertirse
   en identidad general del proyecto
```

---

# 121. Distinción

```text
hash usado como prueba
≠
hash adoptado como identidad de dominio
```

---

# 122. Estado de la condición

```text
identidad estable de source
→ CONDICIÓN TRANSVERSAL ABIERTA
```

pero:

```text
no constituye
una incertidumbre pendiente
sobre la suficiencia conceptual
de los Selectors
```

---

# 123. ¿Bloquea el cierre de L-EXT-02?

No.

---

# 124. Razón

L-EXT-02 preguntaba por:

```text
representación y utilidad
del anclaje granular
```

no por:

```text
arquitectura definitiva
de identidad de recursos
```

---

# 125. Regla epistemológica

Una línea puede cerrarse aunque revele una condición lateral si:

```text
la pregunta discriminante original
ya ha sido respondida
```

y:

```text
la condición lateral
no invalida el resultado
```

---

# 126. Evaluación global de L-EXT-02

## Cobertura

```text
ALTA EN EL ALCANCE ENSAYADO
```

---

# 127. Fidelidad semántica

```text
ALTA
```

si:

```text
Correspondence
→ permanece propia
```

---

# 128. Granularidad

```text
ALTA
```

para:

```text
vídeo temporal
+
texto citado
```

---

# 129. Heterogeneidad

```text
DEMOSTRADA
```

en:

```text
vídeo ↔ texto
vídeo ↔ imagen
```

---

# 130. Complejidad

```text
BAJA-MEDIA
```

mientras se mantenga el vocabulario reducido.

---

# 131. Extensibilidad

```text
ALTA
```

porque pueden añadirse otros Selectors si un caso futuro los deriva.

---

# 132. Riesgo de sobreextensión

```text
CONTROLABLE
```

mediante:

```text
regla de minimización
```

---

# 133. Interoperabilidad conceptual

```text
ALTA
```

en la descripción de segmentos.

---

# 134. Dependencia tecnológica

```text
NO DERIVADA
```

---

# 135. Resultado de P-WA-01

```text
P-WA-01
→ CERRADA CON RESULTADO MIXTO
```

---

# 136. Resultado de P-WA-02

```text
P-WA-02
→ SUPERADA CON CONDICIÓN
```

---

# 137. Resultado de P-WA-03

```text
P-WA-03
→ SUPERADA
```

---

# 138. Resultado de la comprobación reductiva

```text
nuevo mecanismo de selección necesario
→ NO IDENTIFICADO
```

---

# 139. Resultado de L-EXT-02

La pregunta de L-EXT-02 puede cerrarse.

---

# 140. Respuesta

> **Sí: los mecanismos mínimos de Specific Resource y Selector pueden representar suficientemente el anclaje granular de las correspondencias heterogéneas ensayadas y mejorar su reconstrucción sin imponer complejidad desproporcionada, siempre que la semántica de Correspondence permanezca en el dominio propio y que la identidad de source sea suficientemente estable.**

---

# 141. Límite de la respuesta

La respuesta no significa:

```text
Web Annotation completo
→ adoptado
```

---

# 142. Tampoco significa

```text
todo material futuro
→ cubierto necesariamente
```

---

# 143. Significa

```text
los casos reales ensayados
no justifican continuar
la investigación de L-EXT-02
```

---

# 144. Clasificación de L-EXT-02

```text
L-EXT-02
→ CERRADA CON RESULTADO FAVORABLE LIMITADO
```

---

# 145. Resultado externo útil

La principal aportación externa queda reducida a:

```text
SpecificResource
+
Selectors
```

como:

```text
capa conceptual transversal
de anclaje granular
```

---

# 146. No adopción de Annotation

```text
Annotation
→ NO DERIVADA COMO NECESARIA
```

---

# 147. No adopción de infraestructura

No se deriva:

```text
servidor de anotaciones
RDF store
triplestore
SPARQL
JSON-LD persistente
base de datos de grafos
plugin Web Annotation
```

---

# 148. No derivación de producto

```text
producto
→ SIN CAMBIO DERIVADO
```

---

# 149. No derivación de arquitectura

```text
arquitectura
→ SIN CAMBIO DERIVADO
```

---

# 150. No derivación de implementación

```text
implementación
→ NO DERIVADA
```

---

# 151. No derivación de horizonte

```text
nuevo horizonte
→ NO DERIVADO
```

---

# 152. Estado de GATE-NH-01

Este cierre no modifica la historia ni el estado vigente de:

```text
GATE-NH-01
```

---

# 153. Estado estratégico

Se conserva:

```text
suficiencia sin siguiente horizonte derivado
```

---

# 154. Relación con GATE-EXT-01

`GATE-EXT-01` permitió profundizar porque Web Annotation podía:

```text
estandarizar algo ya ejercido
+
revelar diferencias concretas
+
reducir complejidad propia
```

---

# 155. Resultado del gate externo

La línea ha cumplido esa función.

---

# 156. Lo que GATE-EXT-01 no implica

```text
resultado externo favorable
≠
nuevo horizonte estratégico
```

---

# 157. Comparación L-EXT-01 / L-EXT-02

```text
L-EXT-01
→ PROV mínimo
→ procedencia y trayectoria
→ CERRADA
```

```text
L-EXT-02
→ SpecificResource + Selectors
→ anclaje granular
→ CERRADA
```

---

# 158. Patrón transversal emergente

Los dos estudios externos producen el mismo principio:

```text
usar estándares
como capas pequeñas y delimitadas
```

no:

```text
reconstruir el dominio
alrededor de un estándar externo
```

---

# 159. Principio de integración externa

> **Una capa estándar debe incorporarse conceptualmente sólo cuando reduce un problema real ya observado y debe detenerse en el límite donde comienza la semántica propia del proyecto.**

---

# 160. Principio de no sustitución

> **La interoperabilidad no exige sustituir el modelo conceptual propio por el vocabulario externo.**

---

# 161. Principio de minimización

> **No se adopta vocabulario por pertenecer a un estándar; se utiliza únicamente cuando un caso propio demuestra su necesidad.**

---

# 162. Principio de granularidad

> **Un recurso completo se utiliza como extremo cuando toda la unidad es relevante; SpecificResource + Selector se utiliza sólo cuando el extremo real es una parte del recurso.**

---

# 163. Principio de identidad

> **La selección granular y la identidad longitudinal del recurso son problemas distintos y no deben confundirse.**

---

# 164. Principio de verificabilidad

> **Cuando una correspondencia puede comprobarse materialmente, la evidencia reproducible debe prevalecer sobre la mera descripción narrativa.**

---

# 165. Aplicación de verificabilidad en P-WA-03

```text
N1
→ afirma la correspondencia

FFmpeg
→ reproduce el fotograma

SHA-256
→ demuestra identidad binaria
```

---

# 166. Ganancia metodológica adicional

P-WA-03 no sólo probó Selectors.

También mostró que una correspondencia documental puede someterse a verificación material independiente.

---

# 167. Posible relevancia futura

Esta práctica podría resultar útil para:

```text
evidencia audiovisual
capturas
derivados
versiones
materiales transformados
```

pero no se deriva todavía como requisito general de producto.

---

# 168. Radar externo restante

Tras cerrar:

```text
L-EXT-01
L-EXT-02
```

permanecen en el radar del documento 44:

```text
L-EXT-03
→ RO-Crate

L-EXT-04
→ objetos tipados

L-EXT-05
→ IA verificable
```

---

# 169. Prioridad histórica establecida

El orden previamente establecido era:

```text
1. L-EXT-01
2. L-EXT-02
3. L-EXT-03
4. reevaluación
5. L-EXT-04 / L-EXT-05 según resultado
```

---

# 170. Consecuencia

Con L-EXT-01 y L-EXT-02 cerradas:

```text
L-EXT-03
→ siguiente línea externa candidata
```

según la priorización de 44.

---

# 171. Pero no debe abrirse automáticamente

La existencia de una prioridad histórica no sustituye una reevaluación.

---

# 172. Razón

L-EXT-01 y L-EXT-02 han producido nueva información:

```text
PROV mínimo
+
anclaje granular mínimo
+
separación de capas
+
condición de identidad estable
```

---

# 173. Posible efecto sobre L-EXT-03

RO-Crate debe reevaluarse ahora frente a ese estado actualizado.

No debe estudiarse sólo porque estuviera tercero en una lista previa.

---

# 174. Pregunta previa a L-EXT-03

Antes de abrirlo conviene preguntar:

> **¿Sigue existiendo, después de PROV y Selectors, una necesidad independiente de empaquetado portable de objetos heterogéneos que RO-Crate pueda representar sin duplicar las capas ya justificadas?**

---

# 175. Posibles resultados de esa reevaluación

```text
A.
L-EXT-03 sigue siendo discriminante
→ abrir estudio

B.
su función queda absorbida
→ reducir prioridad

C.
queda una diferencia más pequeña
→ reformular antes de estudiar
```

---

# 176. Regla para la continuación externa

No debe pasarse mecánicamente:

```text
L-EXT-02
→ L-EXT-03
```

Debe ejecutarse:

```text
cierre L-EXT-02
→ reevaluación del radar
→ siguiente línea sólo si sigue discriminante
```

---

# 177. Estado de la condición de identidad

La identidad estable de `source` debe permanecer registrada.

Pero no debe convertirse automáticamente en:

```text
nuevo proyecto
nueva arquitectura
nuevo horizonte
```

---

# 178. Razón

Todavía no se ha demostrado que:

```text
la ausencia de una solución técnica general
produzca una pérdida humana independiente actual
```

---

# 179. Relación con GATE-NH-01

Por tanto:

```text
condición de identidad estable
≠
nueva candidata demostrada para GATE-NH-01
```

---

# 180. Estado final de H-WA-SUF

```text
H-WA-SUF
→ SOSTENIDA EN EL ALCANCE ENSAYADO
   TRAS REFINAMIENTO
```

---

# 181. Estado final de H-WA-GAP

```text
H-WA-GAP
→ SOSTENIDA RESPECTO A
   LA SUSTITUCIÓN DE CORRESPONDENCE
   POR ANNOTATION BÁSICA

→ NO SOSTENIDA RESPECTO A
   SPECIFICRESOURCE + SELECTORS
   COMO CAPA REDUCIDA DE ANCLAJE
```

---

# 182. Estado final de P-WA-01

```text
P-WA-01
→ CERRADA
```

---

# 183. Estado final de P-WA-02

```text
P-WA-02
→ CERRADA
```

---

# 184. Estado final de P-WA-03

```text
P-WA-03
→ CERRADA Y SUPERADA
```

---

# 185. Estado final de L-EXT-02

```text
L-EXT-02
→ CERRADA
```

---

# 186. Núcleo Web Annotation retenido

```text
SpecificResource
source
selector
FragmentSelector
TextQuoteSelector
exact
```

con uso condicionado de:

```text
prefix
suffix
conformsTo
```

---

# 187. Núcleo no retenido como necesario

```text
Annotation
Body
Motivation
Composite
List
Choice
State
```

y demás Selectors no derivados.

---

# 188. Resultado de separación

```text
Correspondence
→ dominio propio

PROV
→ procedencia

Selectors
→ anclaje

Resource completo
→ cuando no hace falta selección
```

---

# 189. Ausencia de contradicción

Que `Annotation` no resulte necesaria no invalida Web Annotation.

La investigación identifica una parte más pequeña del estándar como mejor ajustada al caso.

---

# 190. Resultado metodológico

La reducción:

```text
estándar completo
→ subconjunto útil
```

es un resultado positivo.

---

# 191. Resultado de complejidad

La complejidad permanece contenida porque:

```text
no se incorpora
el modelo completo
```

---

# 192. Resultado de fidelidad

La fidelidad se conserva porque:

```text
la semántica propia
no se fuerza
dentro del vocabulario externo
```

---

# 193. Resultado de interoperabilidad

La interoperabilidad mejora potencialmente en:

```text
descripción de segmentos
```

sin exigir:

```text
interoperabilidad total del dominio
```

---

# 194. Precisión epistemológica final

El cierre es:

```text
favorable limitado
```

no:

```text
validación universal
```

---

# 195. Lo demostrado

Se ha demostrado suficientemente que:

```text
los anclajes reales ensayados
pueden describirse
con recursos completos
y Selectors estándar mínimos
```

---

# 196. Lo no demostrado

No se ha demostrado que:

```text
todos los futuros materiales
todas las futuras relaciones
todas las futuras interfaces
```

queden cubiertos.

---

# 197. Regla para futuros casos

Si en el futuro aparece una relación que requiera:

```text
otro Selector
```

deberá derivarse desde ese caso.

No se incorpora preventivamente.

---

# 198. Resultado consolidado

```text
P-WA-01
→ CERRADA CON RESULTADO MIXTO

P-WA-02
→ SUPERADA CON CONDICIÓN

P-WA-03
→ SUPERADA

comprobación reductiva final
→ NO IDENTIFICA
  NUEVO MECANISMO NECESARIO

H-WA-SUF
→ SOSTENIDA EN EL ALCANCE ENSAYADO,
  TRAS REFINAMIENTO

H-WA-GAP
→ SOSTENIDA PARA
  ANNOTATION COMO SUSTITUTO
  DE CORRESPONDENCE

→ NO SOSTENIDA PARA
  SPECIFICRESOURCE + SELECTORS
  COMO CAPA DE ANCLAJE

SpecificResource + Selectors
→ CONCEPTUALMENTE VIABLES
  COMO CAPA TRANSVERSAL
  DE ANCLAJE GRANULAR

Correspondence
→ PERMANECE EN DOMINIO PROPIO

recurso completo
→ SE USA CUANDO
  TODA LA UNIDAD ES RELEVANTE

identidad estable de source
→ CONDICIÓN TRANSVERSAL ABIERTA
  SIN SOLUCIÓN TECNOLÓGICA PRESUPUESTA

L-EXT-02
→ CERRADA CON RESULTADO
  FAVORABLE LIMITADO

producto
→ SIN CAMBIO

arquitectura
→ SIN CAMBIO

implementación
→ NO DERIVADA

nuevo horizonte
→ NO DERIVADO
```

---

# 199. Próxima actuación justificable

> **Reevaluar el radar externo posterior a L-EXT-01 y L-EXT-02, comenzando por comprobar si L-EXT-03 —RO-Crate— conserva una diferencia independiente y discriminante después de haber separado ya procedencia, anclaje granular y semántica propia, sin abrir todavía el estudio de RO-Crate ni presuponer que deba continuar como siguiente línea.**

---

# 200. Cierre

> **49 — P-WA-03 SUPERADA; CORRESPONDENCIA I1↔V0@00:25 MATERIALMENTE VERIFICADA; NO SE IDENTIFICA UN CUARTO MECANISMO DE ANCLAJE NECESARIO EN N1↔T2↔V0↔I1; H-WA-SUF SOSTENIDA EN EL ALCANCE ENSAYADO TRAS REFINAMIENTO; SPECIFIC RESOURCE + SELECTORS CONFIRMADOS COMO CAPA CONCEPTUALMENTE VIABLE DE ANCLAJE GRANULAR; CORRESPONDENCE PERMANECE EN EL DOMINIO PROPIO; L-EXT-02 CERRADA CON RESULTADO FAVORABLE LIMITADO; IDENTIDAD ESTABLE DE SOURCE MANTENIDA COMO CONDICIÓN TRANSVERSAL SIN SOLUCIÓN TECNOLÓGICA PRESUPUESTA; SIN DERIVACIÓN DE PRODUCTO, ARQUITECTURA, IMPLEMENTACIÓN NI NUEVO HORIZONTE.**
