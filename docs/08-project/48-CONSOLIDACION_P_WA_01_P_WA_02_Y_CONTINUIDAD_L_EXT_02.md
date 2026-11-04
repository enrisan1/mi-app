# Consolidación de P-WA-01 y P-WA-02 y continuidad de L-EXT-02

## Estado

**P-WA-01 CERRADA — P-WA-02 CERRADA CON CONDICIÓN — L-EXT-02 CONTINÚA ABIERTA**

## Fecha

4 de noviembre de 2026.

## Derivación

Este documento deriva de:

- `43-PANORAMA_EXTERNO_PLATAFORMAS_ESTANDARES_E_IA.md`;
- `44-MATRIZ_COMPARATIVA_PANORAMA_EXTERNO_VS_PROYECTO.md`;
- `45-ESTUDIO_PROV_O_Y_RECONSTRUCCION_DE_TRAYECTORIA.md`;
- `46-RESULTADO_P_PROV_01_REPRESENTACION_MINIMA_V0_T1_T2.md`;
- `47-RESULTADO_P_PROV_02_Y_CIERRE_L_EXT_01.md`;
- `29-investigacion-continuidad-participacion-materiales-heterogeneos.md`;
- `30-reduccion-de-pertinencia-sobrevenida-en-C1.md`;
- `31-cierre-de-C1-en-I29.md`;
- `32-cierre-de-investigacion-29.md`;
- los materiales reales conservados del caso C1.

---

# 1. Objeto

El presente documento consolida los resultados de las dos primeras pruebas realizadas dentro de:

```text
L-EXT-02
→ anclaje granular mediante W3C Web Annotation
```

Las pruebas consolidadas son:

```text
P-WA-01
→ contraste del modelo Web Annotation
   con una correspondencia real V0 ↔ T2

P-WA-02
→ separación entre:
   semántica propia de Correspondence
   y mecanismos estándar de selección
```

El documento no pretende cerrar todavía `L-EXT-02`.

Su función es:

```text
cerrar P-WA-01
+
cerrar P-WA-02
+
fijar sus límites
+
derivar la siguiente prueba discriminante
```

---

# 2. Pregunta general de L-EXT-02

La pregunta abierta en 47 fue:

> **¿Puede el W3C Web Annotation Data Model representar suficientemente las correspondencias granulares ya observadas en C1 —por ejemplo, entre un fragmento temporal de V0, una sección de T2, I1 y N1— mejorando su localización y reconstrucción sin imponer una estructura desproporcionada ni sustituir la semántica propia del proyecto?**

Esta pregunta permanece abierta.

P-WA-01 y P-WA-02 responden únicamente a una parte de ella.

---

# 3. Alcance ensayado

El alcance ensayado hasta este punto queda limitado a una correspondencia concreta entre:

```text
V0
→ VID-20190119-WA0001.mp4

T2
→ T2-transcripcion-corregida.md

N1
→ N1-comentario.md
```

No se ensayan todavía:

```text
I1
V0-reducido
otras correspondencias de T2
colecciones completas de anotaciones
persistencia
sincronización
RDF
JSON-LD operativo
almacenamiento
consulta
interfaz de usuario
```

---

# 4. Regla contra expansión

La presencia de un estándar externo adecuado para una parte del problema no autoriza a adoptar el estándar completo.

Se mantiene la regla:

```text
compatibilidad conceptual
≠
adopción tecnológica
```

Y también:

```text
representabilidad
≠
necesidad de implementación
```

---

# 5. Evidencia material utilizada

Durante la prueba se comprobó que la antigua ruta de trabajo:

```text
~/Escritos/C1-material-trabajo/
```

ya no contenía los materiales esperados.

La búsqueda real permitió recuperar el conjunto de trabajo en otra ubicación.

Esto mostró que:

```text
material
≠
ubicación física concreta
```

La observación será relevante posteriormente para la identidad de las fuentes.

---

# 6. Conjunto material recuperado

En la carpeta de trabajo recuperada se encontraron conjuntamente:

```text
N1-comentario.md
T2-transcripcion-corregida.md
V0-reducido.mp4
VID-20190119-WA0001.mp4
imagenes/
reduccion-v0/
```

Esto permitió volver al material real de C1 sin depender únicamente de la documentación consolidada.

---

# 7. Primera constatación documental

Los documentos 29–32 demostraban que C1 había ejercido:

```text
correspondencias entre materiales
```

y, específicamente:

```text
correspondencias entre N1, T2 y V0
```

Pero esos documentos no preservaban por sí solos el detalle de todas las correspondencias concretas.

---

# 8. Consecuencia

No era metodológicamente suficiente reconstruir una pareja concreta a partir del recuerdo del experimento.

Fue necesario volver al material real.

---

# 9. Correspondencias recuperadas

`N1-comentario.md` conserva, entre otras, correspondencias explícitas como:

```text
V0 @ 00:38
→ “Todo el sistema intenta crear el mayor caos posible,
   el mayor desorden posible.”

V0 @ 00:58
→ “Crea la vida porque eso absorbe radiación solar.”

V0 @ 01:25
→ “...porque aumenta la entropía.”

V0 @ 01:50
→ “Crear orden para poder después crear más caos.”
```

---

# 10. Correspondencia elegida

Para reducir al mínimo el caso ensayado se eligió:

```text
V0 @ 00:58

↔

T2
“Crea la vida porque eso absorbe radiación solar.”
```

---

# 11. Razón de la elección

Esta correspondencia presenta varias ventajas metodológicas.

Primero, aparece explícitamente ejercida en N1.

Segundo, el fragmento temporal de V0 está identificado.

Tercero, el pasaje correspondiente existe literalmente en T2.

Cuarto, la misma afirmación es utilizada posteriormente por N1 para formular un contraste interpretativo.

---

# 12. Evidencia en N1

N1 contiene:

```text
V0:
00:58

T2:
T2 — radiación y vida
```

y conserva la afirmación:

```text
“Crea la vida porque eso absorbe radiación solar.”
```

---

# 13. Evidencia temporal

El enlace ejercido en N1 apunta a:

```text
VID-20190119-WA0001.mp4#t=58
```

con representación humana:

```text
00:58
```

---

# 14. Evidencia textual

La inspección numerada de T2 demostró que:

```text
línea 18
→ ## T2-Radiación-y-vida

línea 20
→ Crea la vida porque eso absorbe radiación solar.
```

Por tanto, el fragmento textual relevante es identificable de manera mucho más precisa que mediante el encabezado de sección.

---

# 15. Diferencia entre sección y pasaje

El enlace de Obsidian utilizado originalmente apunta a:

```text
T2-Radiación-y-vida
```

Ese mecanismo localiza una sección.

Pero la correspondencia material ejercida por N1 utiliza específicamente:

```text
“Crea la vida porque eso absorbe radiación solar.”
```

Por tanto:

```text
sección
≠
pasaje exacto relevante
```

---

# 16. Primera oportunidad externa

Web Annotation dispone de mecanismos para identificar segmentos concretos de recursos.

El caso permite comprobar si esos mecanismos pueden mejorar la explicitud de la correspondencia ya ejercida.

---

# 17. Hipótesis H-WA-SUF

Se formuló:

```text
H-WA-SUF
```

con sentido provisional:

> un subconjunto reducido del modelo Web Annotation puede representar suficientemente el anclaje granular ejercido en C1, mejorar su reconstrucción y conservar la semántica propia del proyecto sin introducir complejidad desproporcionada.

---

# 18. Hipótesis H-WA-GAP

Se formuló también:

```text
H-WA-GAP
```

según la cual:

> el modelo puede requerir artificios semánticos, introducir una asimetría Body/Target inadecuada, no representar correctamente la correspondencia conjunta o añadir complejidad superior a la ganancia obtenida.

---

# 19. P-WA-01

La primera prueba recibió la denominación:

```text
P-WA-01
```

Su pregunta fue:

> **¿Puede el núcleo normativo de Web Annotation representar fielmente la correspondencia real V0@00:58 ↔ pasaje de T2 sin deformar la relación ejercida en C1?**

---

# 20. Modelo básico de Web Annotation

El modelo distingue principalmente:

```text
Annotation
Body
Target
```

Una Annotation representa una relación dirigida entre recursos.

El Body está relacionado con el Target y normalmente es, de algún modo, acerca de él.

---

# 21. Primera representación considerada

La primera posibilidad fue:

```text
T2 fragment
→ Body

V0 fragment
→ Target
```

---

# 22. Problema de la primera representación

La correspondencia real de C1 no demuestra que:

```text
T2
→ sea una anotación acerca de V0
```

Tampoco demuestra necesariamente la relación inversa.

Por tanto, esa representación introduciría una asimetría no derivada del caso.

---

# 23. Segunda representación considerada

Se consideró entonces:

```text
Annotation
├── Body
│   └── observación de N1
├── Target
│   └── V0@00:58
└── Target
    └── pasaje T2
```

Esta alternativa parecía inicialmente más fiel.

---

# 24. Razón de su atractivo

N1 sí formula una observación acerca del material.

Además, V0 y T2 intervienen conjuntamente en el razonamiento.

Esto permitía pensar:

```text
N1
→ Body

V0 + T2
→ Targets
```

---

# 25. Restricción normativa relevante

El Web Annotation Data Model establece que, cuando una Annotation tiene múltiples Bodies o Targets:

```text
cada Body
→ se considera relacionado
→ con cada Target individualmente
```

No se interpreta automáticamente que el Body se aplique al conjunto indivisible de Targets.

---

# 26. Consecuencia para C1

El caso C1 requiere algo más preciso.

La observación de N1 utiliza conjuntamente:

```text
V0@00:58
+
pasaje de T2
```

porque existe una correspondencia entre ambos.

Por tanto:

```text
dos Targets independientes
≠
necesariamente la correspondencia conjunta ejercida
```

---

# 27. Apéndice no normativo

El propio Web Annotation Data Model discute en un apéndice no normativo posibles conjuntos como:

```text
Composite
List
Independents
```

para casos en los que varios recursos deben interpretarse conjuntamente o con una estructura específica.

---

# 28. Límite metodológico

Ese apéndice no autoriza a tratar la propuesta como parte necesaria del núcleo normativo ensayado.

Por tanto, P-WA-01 no debe resolverse incorporando automáticamente `Composite`.

---

# 29. Resultado de la representación completa

La representación:

```text
Annotation
+
Body N1
+
dos Targets
```

no demuestra por sí sola que la correspondencia conjunta de C1 haya quedado preservada.

---

# 30. Pero el anclaje sí funciona

Aunque la Annotation completa presenta ese límite, el modelo contiene mecanismos suficientemente expresivos para localizar cada extremo.

---

# 31. Specific Resource

Un `SpecificResource` permite representar:

```text
un recurso fuente
+
una selección más específica de ese recurso
```

La selección puede describirse mediante un `Selector`.

---

# 32. Extremo V0

El extremo temporal puede representarse conceptualmente como:

```text
SpecificResource(V0-58)

source
→ V0

selector
→ FragmentSelector
```

---

# 33. FragmentSelector

`FragmentSelector` describe un segmento mediante una sintaxis de fragmento correspondiente al tipo de recurso.

El estándar contempla expresamente su aplicación a segmentos de vídeo.

---

# 34. Correspondencia con el mecanismo existente

El mecanismo local ya utilizado:

```text
#t=58
```

demuestra que C1 necesitaba seleccionar un punto o fragmento temporal.

No se asume, sin embargo, que la sintaxis concreta utilizada por Media Extended deba adoptarse automáticamente como serialización futura.

---

# 35. Distinción

Debe mantenerse:

```text
necesidad conceptual
→ seleccionar fragmento temporal

mecanismo actual
→ enlace de Obsidian / Media Extended

posible mecanismo estándar
→ FragmentSelector
```

---

# 36. Extremo T2

El extremo textual puede representarse mediante:

```text
SpecificResource(T2-frase)

source
→ T2

selector
→ TextQuoteSelector
```

---

# 37. TextQuoteSelector

`TextQuoteSelector` permite seleccionar una secuencia textual mediante:

```text
exact
prefix
suffix
```

`exact` contiene el texto seleccionado.

`prefix` y `suffix` pueden aportar contexto adicional para distinguir coincidencias.

---

# 38. Aplicación al caso

En el caso ensayado:

```text
exact
→ “Crea la vida porque eso absorbe radiación solar.”
```

---

# 39. Ganancia frente al encabezado

El mecanismo original:

```text
#T2-Radiación-y-vida
```

identifica una sección.

El selector textual puede identificar:

```text
la afirmación exacta utilizada por N1
```

---

# 40. Primera ganancia demostrada

Por tanto:

```text
Web Annotation selector
→ mayor granularidad textual potencial
```

respecto al enlace de sección ya ejercido.

---

# 41. No sustitución de Obsidian

El resultado no demuestra que el enlace actual de Obsidian deba eliminarse.

Demuestra únicamente que existe una representación estándar capaz de describir de manera más precisa el segmento textual relevante.

---

# 42. Resultado P-WA-01-C1

Localización de:

```text
V0@00:58
```

Resultado:

```text
SUPERADA
```

---

# 43. Resultado P-WA-01-C2

Localización del pasaje textual exacto de T2.

Resultado:

```text
SUPERADA
```

---

# 44. Resultado P-WA-01-C3

Representación fiel de la correspondencia conjunta mediante una Annotation normativa con múltiples Targets.

Resultado:

```text
NO DEMOSTRADA
```

---

# 45. Resultado P-WA-01-C4

Ausencia de asimetría Body/Target artificial.

Resultado:

```text
NO RESUELTA
```

si se fuerza la correspondencia completa dentro de la estructura básica Body/Target.

---

# 46. Resultado P-WA-01-C5

Ganancia observable de granularidad.

Resultado:

```text
SUPERADA
```

---

# 47. Resultado consolidado de P-WA-01

```text
anclaje granular
→ suficientemente representable

Correspondence completa
→ no suficientemente demostrada mediante Annotation básica
```

---

# 48. Clasificación de P-WA-01

```text
P-WA-01
→ CERRADA CON RESULTADO MIXTO
```

No es un fracaso del estándar.

Tampoco es una confirmación global.

---

# 49. Hallazgo P-WA-01-01

> **La parte más útil de Web Annotation para C1 no es necesariamente la relación Body/Target, sino sus mecanismos de selección granular.**

---

# 50. Hallazgo P-WA-01-02

> **Un par de Targets no representa automáticamente una correspondencia que deba interpretarse conjuntamente.**

---

# 51. Hallazgo P-WA-01-03

> **La sección T2-Radiación-y-vida era una localización válida, pero más gruesa que el pasaje efectivamente utilizado por N1.**

---

# 52. Hallazgo P-WA-01-04

> **El caso permite separar semántica de relación y mecanismo de localización.**

---

# 53. Derivación de P-WA-02

A partir de P-WA-01 se formuló una alternativa más limitada:

```text
Correspondence
→ dominio propio

localización de sus extremos
→ mecanismos estándar de selección
```

---

# 54. Pregunta de P-WA-02

La segunda prueba preguntó:

> **¿Puede conservarse la correspondencia como concepto propio del proyecto y utilizar únicamente Specific Resource + Selectors para identificar sus dos extremos sin pérdida semántica ni complejidad desproporcionada?**

---

# 55. Regla de P-WA-02

La prueba prohíbe reinterpretar:

```text
Correspondence
```

como:

```text
Annotation
```

salvo que el caso lo justifique explícitamente.

---

# 56. Representación conceptual mínima

La representación pasa a ser:

```text
Correspondence C1-58
│
├── extremo A
│   └── selección V0@00:58
│
└── extremo B
    └── selección textual T2
```

---

# 57. Responsabilidad del dominio

El proyecto conserva:

```text
Correspondence
```

y con ella la semántica de:

```text
qué materiales están relacionados
por qué están relacionados
qué significa esa relación
qué uso humano tuvo
```

---

# 58. Responsabilidad del selector

La capa estándar responde únicamente a:

```text
¿dónde está exactamente el extremo?
```

---

# 59. Representación del extremo A

```text
ResourceSelection(V0-58)

source
→ V0

selector
→ FragmentSelector
→ fragmento temporal correspondiente a 00:58
```

---

# 60. Representación del extremo B

```text
ResourceSelection(T2-radiacion-frase)

source
→ T2

selector
→ TextQuoteSelector

exact
→ “Crea la vida porque eso absorbe radiación solar.”
```

---

# 61. Contexto textual opcional

Si fuera necesario desambiguar la cita, podrían incorporarse:

```text
prefix
suffix
```

No se consideran obligatorios en el caso ensayado mientras `exact` sea suficientemente discriminante.

---

# 62. Ausencia de Body/Target artificial

La representación de P-WA-02 no necesita afirmar:

```text
V0 → Body
T2 → Target
```

ni:

```text
T2 → Body
V0 → Target
```

---

# 63. Ausencia de múltiples Targets problemáticos

Tampoco necesita utilizar:

```text
Annotation
→ Target V0
→ Target T2
```

para expresar la correspondencia conjunta.

---

# 64. Primera consecuencia

El principal problema semántico observado en P-WA-01 desaparece.

---

# 65. Segunda consecuencia

Los mecanismos de selección pueden reutilizarse sin transferir al estándar la semántica de `Correspondence`.

---

# 66. Tercera consecuencia

Se reduce el acoplamiento entre:

```text
modelo externo
```

y:

```text
dominio propio
```

---

# 67. Identidad de source

Durante P-WA-02 apareció una condición adicional.

Todo selector necesita referirse a una fuente reconocible.

En el modelo conceptual:

```text
Specific Resource
→ source
→ recurso
```

---

# 68. Hallazgo empírico sobre ubicación

Durante la prueba se comprobó que la ruta histórica utilizada para localizar C1 ya no coincidía con la ubicación actual recuperada.

Por tanto:

```text
ruta local
→ puede cambiar
```

---

# 69. Consecuencia de identidad

Una representación robusta no debería identificar conceptualmente el material únicamente mediante:

```text
ruta física actual
```

---

# 70. Distinción necesaria

Debe distinguirse conceptualmente:

```text
identidad del material
```

de:

```text
ubicación actual del archivo
```

---

# 71. Ejemplo conceptual

```text
V0
→ identidad estable del material

ubicación A
→ localización histórica

ubicación B
→ localización posterior
```

---

# 72. Precisión epistemológica

P-WA-02 no determina qué tecnología debe utilizarse para esa identidad.

No se deriva:

```text
UUID
URI propia
URN
hash
base de datos
catálogo central
servidor
```

---

# 73. Condición de robustez

Sí queda derivada una condición conceptual:

> **para que el anclaje pueda reconstruirse de forma robusta a través del tiempo, la identidad de la fuente no debería depender exclusivamente de su ruta física mutable.**

---

# 74. Naturaleza de la condición

Esta condición no debe presentarse como una obligación tecnológica específica del estándar.

Es una condición del proyecto para mantener reconstruibilidad longitudinal.

---

# 75. P-WA-02-C1

¿Localiza suficientemente V0@00:58?

```text
SÍ
```

---

# 76. P-WA-02-C2

¿Localiza suficientemente el pasaje concreto de T2?

```text
SÍ
```

---

# 77. P-WA-02-C3

¿Conserva `Correspondence` como concepto propio?

```text
SÍ
```

---

# 78. P-WA-02-C4

¿Evita una asimetría Body/Target no demostrada?

```text
SÍ
```

---

# 79. P-WA-02-C5

¿Evita depender de la interpretación de múltiples Targets como conjunto?

```text
SÍ
```

---

# 80. P-WA-02-C6

¿Introduce semántica externa falsa?

```text
NO
```

Resultado:

```text
SUPERADO
```

---

# 81. P-WA-02-C7

¿Existe ganancia respecto al mecanismo existente?

```text
SÍ
```

La ganancia observada es:

```text
sección
→ pasaje exacto
```

y:

```text
anclaje propio
→ mecanismo estándar describible
```

---

# 82. P-WA-02-C8

¿La complejidad parece proporcionada?

En el alcance ensayado:

```text
SÍ, CON CONDICIÓN
```

La condición es mantener reducido el vocabulario utilizado y no introducir la infraestructura completa de Web Annotation.

---

# 83. P-WA-02-C9

¿Es independiente de una ruta local mutable?

No automáticamente.

La representación necesita una identidad de fuente suficientemente estable.

---

# 84. Resultado de P-WA-02-C9

```text
CONDICIÓN ABIERTA DE IDENTIDAD
```

No constituye por sí sola una refutación del patrón de selección.

---

# 85. Resultado consolidado de P-WA-02

```text
Correspondence propia
+
dos selecciones estándar

→ representación conceptualmente suficiente
  en el caso ensayado
```

con condición:

```text
source
→ identidad suficientemente estable
```

---

# 86. Clasificación de P-WA-02

```text
P-WA-02
→ SUPERADA CON CONDICIÓN DE IDENTIDAD DE SOURCE
```

---

# 87. Hallazgo P-WA-02-01

> **La semántica de correspondencia no necesita ser absorbida por Web Annotation para aprovechar sus mecanismos de anclaje granular.**

---

# 88. Hallazgo P-WA-02-02

> **Specific Resource + Selector puede funcionar como una capa transversal de localización independiente del significado de la relación que conecta los fragmentos.**

---

# 89. Hallazgo P-WA-02-03

> **El valor principal observado no está en adoptar una Annotation completa, sino en estandarizar cómo se describen los extremos de relaciones propias.**

---

# 90. Hallazgo P-WA-02-04

> **Una ruta local mutable no debe confundirse con la identidad conceptual del material.**

---

# 91. Hallazgo P-WA-02-05

> **La necesidad de identidad estable de la fuente fue revelada por el propio experimento y no debe resolverse anticipadamente mediante una tecnología concreta.**

---

# 92. Estado de H-WA-SUF

La hipótesis inicial era demasiado amplia.

No se demuestra todavía:

```text
Web Annotation completo
→ suficientemente adecuado para todas las correspondencias C1
```

---

# 93. Refinamiento de H-WA-SUF

El resultado defendible es:

```text
H-WA-SUF
→ SOSTENIDA PARCIALMENTE Y REFINADA
```

con contenido:

> **los mecanismos de selección granular de Web Annotation resultan suficientes en el caso V0@00:58 ↔ pasaje T2 ensayado cuando la semántica de Correspondence permanece en el dominio propio.**

---

# 94. Estado de H-WA-GAP

La hipótesis de deformación sí detectó un problema real cuando se intentó representar directamente la correspondencia mediante la estructura básica de Annotation con varios Targets.

---

# 95. Refinamiento de H-WA-GAP

Por tanto:

```text
H-WA-GAP
→ SOSTENIDA PARCIALMENTE
```

para:

```text
modelización directa de Correspondence
como Annotation básica
```

pero:

```text
H-WA-GAP
→ NO SOSTENIDA
```

respecto al uso reducido de:

```text
Specific Resource
+
Selectors
```

como capa de anclaje.

---

# 96. Resultado epistemológico

Las dos hipótesis no quedan reducidas a una oposición binaria.

La prueba demuestra una separación más precisa:

```text
Annotation completa
→ no justificada todavía

Selectors
→ útiles en el alcance ensayado
```

---

# 97. Núcleo actualmente justificado

El vocabulario externo actualmente justificado para esta línea queda reducido a:

```text
SpecificResource
source
selector
FragmentSelector
TextQuoteSelector
exact
```

y, cuando sea necesario:

```text
prefix
suffix
conformsTo
```

---

# 98. Elementos no justificados todavía

No quedan justificados todavía como necesarios:

```text
Annotation
Body
Motivation
Composite
List
Independents
Choice
State
TimeState
CssSelector
XPathSelector
RangeSelector
SvgSelector
DataPositionSelector
```

Esto no significa que sean inadecuados.

Significa que aún no han sido derivados por los casos ensayados.

---

# 99. Regla de minimización

Se mantiene:

```text
usar sólo el vocabulario necesario
para representar una diferencia realmente observada
```

---

# 100. Relación con PROV

Los resultados de L-EXT-01 y L-EXT-02 empiezan a mostrar una separación funcional estable.

---

# 101. Función de PROV

PROV responde principalmente a preguntas como:

```text
¿de qué procede este resultado?
¿qué actividad lo produjo?
¿qué materiales fueron utilizados?
¿qué estados históricos pertenecen a la misma entidad?
```

---

# 102. Función de Selectors

Los Selectors responden principalmente a:

```text
¿qué fragmento concreto del recurso está implicado?
```

---

# 103. Función del dominio propio

El dominio del proyecto conserva preguntas como:

```text
¿qué significa la correspondencia?
¿qué diferencia humana expresa?
¿qué criterio satisface?
¿qué reducción ocurrió?
¿qué gate fue superado?
¿qué continuidad fue reconocida?
```

---

# 104. Separación de capas

La separación provisional queda:

```text
dominio propio
→ significado

PROV
→ procedencia y trayectoria

Selectors
→ anclaje granular
```

---

# 105. Posible complementariedad

En el caso C1:

```text
PROV
→ V0 participa en obtención/corrección de T2

Selectors
→ V0@00:58
   y
   frase concreta de T2

Correspondence
→ declara que esos dos extremos están relacionados
```

---

# 106. Ganancia de reconstrucción

La combinación permitiría reconstruir no sólo:

```text
V0
→ T2
```

sino:

```text
qué parte concreta de V0
↔
qué parte concreta de T2
```

sin obligar a PROV a representar la semántica de correspondencia ni a Web Annotation a representar procedencia.

---

# 107. Ausencia de adopción tecnológica

Nada de lo anterior deriva:

```text
RDF store
triplestore
SPARQL
JSON-LD persistente
servidor de anotaciones
plugin de anotaciones
base de datos de grafos
```

---

# 108. Tampoco deriva cambio de producto

No se deriva ninguna nueva función visible del producto.

---

# 109. Tampoco deriva arquitectura

No se deriva una nueva arquitectura de almacenamiento o intercambio.

---

# 110. Tampoco deriva nuevo horizonte

El resultado no modifica:

```text
GATE-NH-01
```

ni reabre una derivación estratégica cerrada.

---

# 111. Estado estratégico

Se conserva:

```text
suficiencia sin siguiente horizonte derivado
```

---

# 112. Relación con GATE-EXT-01

`GATE-EXT-01` autorizó profundizar externamente cuando un estándar podía:

```text
representar algo ya ejercido
reducir complejidad propia
o revelar una diferencia concreta y comprobable
```

---

# 113. Cumplimiento parcial

P-WA-01 y P-WA-02 demuestran que la línea cumple al menos:

```text
estandarización de anclajes ya ejercidos
+
ganancia concreta de granularidad
+
capacidad de comparación empírica
```

---

# 114. Pero GATE-EXT-01 no cierra L-EXT-02

La utilidad de un primer caso no demuestra suficiencia transversal.

---

# 115. Razón para mantener L-EXT-02 abierta

Hasta ahora sólo se ha probado un tipo de correspondencia:

```text
vídeo
↔
texto
```

---

# 116. Riesgo de cierre prematuro

Cerrar L-EXT-02 ahora convertiría un único caso favorable en una conclusión general sobre materiales heterogéneos.

Eso no está justificado.

---

# 117. Necesidad de un segundo caso

Debe comprobarse si el mismo patrón funciona con otro tipo de material.

---

# 118. Caso candidato

El siguiente caso preferente es:

```text
I1
↔
V0@00:25
```

---

# 119. Razón de elección

I1 es un fotograma procedente de V0.

Esto introduce:

```text
imagen
↔
vídeo
```

en lugar de:

```text
texto
↔
vídeo
```

---

# 120. Valor discriminante

El caso permitirá comprobar si:

```text
Correspondence propia
+
selectors estándar
```

continúa siendo suficiente cuando uno de los extremos es una imagen.

---

# 121. Diferencia con P-WA-02

P-WA-02 utilizó:

```text
FragmentSelector
+
TextQuoteSelector
```

El nuevo caso puede requerir:

```text
fragmento temporal de V0
+
identificación de I1 completo
```

o, si hubiera selección interna de la imagen:

```text
selector de región
```

---

# 122. Regla contra anticipación

No debe presuponerse que I1 requiera un `SvgSelector`.

Primero debe reconstruirse qué relación real fue ejercida.

---

# 123. P-WA-03

Se deriva provisionalmente:

```text
P-WA-03
```

---

# 124. Pregunta candidata de P-WA-03

> **¿Puede el patrón Correspondence propia + mecanismos estándar de selección representar suficientemente la relación real I1 ↔ V0@00:25 sin pérdida semántica ni incorporación de complejidad innecesaria?**

---

# 125. Evidencia requerida

P-WA-03 deberá recuperar primero:

```text
I1 real
enlace temporal real a V0
contexto real de N1
función real de I1
```

---

# 126. Prohibición metodológica

No se diseñará primero una representación estándar para después intentar encajar el material.

El orden será:

```text
evidencia real
→ relación ejercida
→ representación mínima candidata
→ comparación
```

---

# 127. Criterios de P-WA-03

La siguiente prueba deberá comprobar al menos:

```text
localización
fidelidad semántica
granularidad
complejidad
dependencia de identidad
ganancia de reconstrucción
```

---

# 128. Posible resultado A

Si el mismo patrón funciona sin vocabulario significativo adicional:

```text
generalidad de la capa de anclaje
→ reforzada
```

---

# 129. Posible resultado B

Si requiere nuevas construcciones proporcionadas:

```text
capa
→ ampliable de forma controlada
```

---

# 130. Posible resultado C

Si la representación exige artificios o complejidad excesiva:

```text
límite de aplicabilidad
→ demostrado
```

---

# 131. L-EXT-02 permanece falsable

La siguiente prueba puede confirmar o debilitar la hipótesis.

No se diseña como mera confirmación.

---

# 132. Comparación P-WA-01 / P-WA-02

```text
P-WA-01
→ prueba Annotation completa

resultado
→ granularidad útil
→ correspondencia conjunta problemática
```

frente a:

```text
P-WA-02
→ conserva Correspondence en dominio propio
→ usa Selectors sólo para localizar extremos

resultado
→ suficiente en el caso ensayado
→ con condición de identidad de source
```

---

# 133. Reducción conceptual obtenida

El estudio externo ha reducido el problema de:

```text
¿debemos adoptar Web Annotation?
```

a:

```text
¿qué mínima parte de Web Annotation
mejora realmente el proyecto?
```

---

# 134. Respuesta provisional

La respuesta actual es:

```text
mecanismos de selección granular
```

no:

```text
modelo completo de Annotation
```

---

# 135. Principio emergente

> **No adoptar ontologías o estándares como bloques indivisibles; reutilizar únicamente las capas cuya necesidad haya sido derivada de casos propios.**

---

# 136. Relación con L-EXT-01

El mismo principio apareció en PROV.

---

# 137. Resultado paralelo

```text
L-EXT-01
→ PROV mínimo

L-EXT-02
→ Selectors mínimos
```

---

# 138. Diferencia importante

L-EXT-01 está cerrada.

L-EXT-02 no.

---

# 139. Razón

PROV ya fue ensayado sobre:

```text
P1
→ trayectoria V0→T1→T2

P2
→ trayectoria metodológica Q04→Q05
```

Web Annotation sólo ha sido ensayado hasta ahora sobre:

```text
V0@00:58 ↔ T2
```

---

# 140. Consecuencia

La evidencia de L-EXT-02 todavía tiene menor diversidad que la alcanzada en L-EXT-01.

---

# 141. Estado de P-WA-01

```text
P-WA-01
→ CERRADA
```

Resultado:

```text
anclaje granular
→ favorable

Annotation básica como representación completa
→ insuficientemente demostrada
```

---

# 142. Estado de P-WA-02

```text
P-WA-02
→ CERRADA
```

Resultado:

```text
SUPERADA CON CONDICIÓN
```

---

# 143. Condición de P-WA-02

```text
source
→ debe disponer de identidad suficientemente estable
   para soportar reconstrucción longitudinal
```

---

# 144. Estado de H-WA-SUF

```text
H-WA-SUF
→ SOSTENIDA PARCIALMENTE Y REFINADA
```

---

# 145. Estado de H-WA-GAP

```text
H-WA-GAP
→ SOSTENIDA PARCIALMENTE
   respecto a modelización directa como Annotation

→ NO SOSTENIDA
   respecto a Selectors como capa de anclaje
```

---

# 146. Estado de L-EXT-02

```text
L-EXT-02
→ ABIERTA
```

---

# 147. Estado de adopción

```text
Web Annotation completo
→ NO ADOPTADO

Selectors
→ conceptualmente prometedores
   en el alcance ensayado
```

---

# 148. Estado de implementación

```text
implementación
→ NO DERIVADA
```

---

# 149. Estado de arquitectura

```text
arquitectura
→ NO DERIVADA
```

---

# 150. Estado de producto

```text
producto
→ SIN CAMBIO DERIVADO
```

---

# 151. Estado estratégico

```text
nuevo horizonte
→ NO DERIVADO
```

---

# 152. Fuentes externas normativas

La evaluación conceptual se contrastó con:

```text
W3C Web Annotation Data Model
W3C Selectors and States
```

Se utilizaron únicamente para determinar la semántica de:

```text
Annotation
Body
Target
SpecificResource
source
selector
FragmentSelector
TextQuoteSelector
multiple Targets
```

---

# 153. Separación de evidencias

Debe distinguirse:

```text
evidencia C1
→ materiales reales del proyecto

semántica del estándar
→ recomendaciones W3C

conclusiones
→ comparación realizada en P-WA-01 / P-WA-02
```

---

# 154. Ausencia de circularidad

La conclusión favorable sobre Selectors no se obtiene porque el documento 47 los considerara prometedores.

Se obtiene porque:

```text
1. se recuperó el material real;
2. se identificó una correspondencia real;
3. se comprobó su granularidad;
4. se contrastó con el estándar;
5. se detectó un fallo del modelo completo;
6. se ensayó una representación reducida;
7. ésta conservó la semántica del caso.
```

---

# 155. Hallazgo global 48-01

> **La correspondencia V0@00:58 ↔ pasaje T2 puede conservarse como relación propia y utilizar mecanismos estándar para localizar sus extremos sin transferir al estándar su semántica metodológica.**

---

# 156. Hallazgo global 48-02

> **El Web Annotation Data Model completo no ha demostrado todavía ser la unidad adecuada de adopción para las correspondencias de C1.**

---

# 157. Hallazgo global 48-03

> **Specific Resource y Selectors constituyen una unidad de reutilización más pequeña y mejor ajustada al problema observado.**

---

# 158. Hallazgo global 48-04

> **La granularidad textual obtenida mediante TextQuoteSelector supera conceptualmente al enlace de sección cuando la correspondencia real recae sobre una afirmación concreta.**

---

# 159. Hallazgo global 48-05

> **Los múltiples Targets de una Annotation no deben utilizarse para representar automáticamente una correspondencia conjunta entre materiales.**

---

# 160. Hallazgo global 48-06

> **La identidad estable de los materiales aparece como condición transversal para que los selectores puedan conservar valor reconstructivo cuando los archivos cambian de ubicación.**

---

# 161. Hallazgo global 48-07

> **La identidad estable queda derivada como necesidad conceptual, no como decisión tecnológica.**

---

# 162. Hallazgo global 48-08

> **PROV y Selectors muestran funciones complementarias: procedencia frente a localización granular.**

---

# 163. Hallazgo global 48-09

> **La semántica humana y metodológica continúa perteneciendo al dominio propio del proyecto.**

---

# 164. Hallazgo global 48-10

> **El patrón de integración externa que está emergiendo es selectivo y por capas, no sustitutivo.**

---

# 165. Riesgo principal

El principal riesgo de la línea externa sería convertir:

```text
compatibilidad con estándares
```

en:

```text
reconstrucción del proyecto alrededor de estándares
```

La evidencia disponible no justifica ese cambio.

---

# 166. Regla para continuar

Cada término externo adicional deberá superar una necesidad concreta.

---

# 167. Regla de no acumulación

No se incorporará vocabulario únicamente porque pertenezca al mismo estándar.

---

# 168. Regla de reversibilidad conceptual

Mientras no exista derivación de arquitectura:

```text
las representaciones estándar
→ permanecen como modelos conceptuales comparativos
```

y no comprometen implementación futura.

---

# 169. Próxima prueba

La siguiente prueba justificable es:

```text
P-WA-03
```

sobre:

```text
I1
↔
V0@00:25
```

---

# 170. Pregunta de P-WA-03

> **¿Puede el patrón Correspondence propia + mecanismos estándar de selección representar suficientemente la relación real entre I1 y V0@00:25, manteniendo la función ejercida por el fotograma y sin introducir vocabulario o complejidad que no aporte una ganancia reconstructiva observable?**

---

# 171. Orden de trabajo de P-WA-03

La prueba deberá proceder:

```text
material real
→ correspondencia real
→ función real
→ representación mínima
→ contraste
→ evaluación
```

---

# 172. Condición para cerrar L-EXT-02

Este documento no predetermina cuántas pruebas adicionales serán necesarias.

Como mínimo, P-WA-03 deberá determinar si el patrón observado:

```text
vídeo ↔ texto
```

se mantiene también en:

```text
vídeo ↔ imagen
```

Después deberá reevaluarse si queda alguna incertidumbre discriminante que justifique continuar.

---

# 173. Resultado consolidado

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
  para Selectors como anclaje

SpecificResource + Selectors
→ VIABLES CONCEPTUALMENTE
  PARA EL CASO ENSAYADO

Correspondence
→ PERMANECE EN DOMINIO PROPIO

identidad estable de source
→ CONDICIÓN DERIVADA
  SIN SOLUCIÓN TECNOLÓGICA PRESUPUESTA

L-EXT-02
→ ABIERTA

P-WA-03
→ DERIVADA

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

# 174. Próxima actuación justificable

> **Ejecutar P-WA-03 mediante la reconstrucción de la relación real I1 ↔ V0@00:25, comenzando por recuperar el fotograma, su enlace temporal y su función efectiva en N1, y sólo después contrastar esa relación con los mecanismos mínimos de selección estándar.**

---

# 175. Cierre

> **48 — P-WA-01 CERRADA; P-WA-02 SUPERADA CON CONDICIÓN DE IDENTIDAD DE SOURCE; H-WA-SUF SOSTENIDA PARCIALMENTE Y REFINADA; SPECIFIC RESOURCE + SELECTORS CONFIRMADOS COMO CAPA CONCEPTUALMENTE VIABLE DE ANCLAJE EN EL CASO V0↔T2; L-EXT-02 PERMANECE ABIERTA; P-WA-03 DERIVADA SOBRE I1↔V0@00:25; SIN DERIVACIÓN DE PRODUCTO, ARQUITECTURA, IMPLEMENTACIÓN NI NUEVO HORIZONTE.**
