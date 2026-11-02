# Resultado y cierre reductivo de D-03a después de T1

## Estado

**Cerrado en el alcance investigado.**

Este documento registra el resultado de la investigación reductiva de:

```text
D-03a — Disponibilidad de procedencia pertinente
```

derivada de:

```text
D-03 — Transparencia informativa
```

después del cierre de T1 y de la priorización reductiva documentada en:

```text
31-PRIORIZACION_REDUCTIVA_D02_D05_POST_T1.md
```

La prueba general de suficiencia/discriminación había sido derivada en:

```text
32-DERIVACION_PRUEBA_D03A_PROCEDENCIA_PERTINENTE.md
```

La investigación posterior no ha demostrado una pérdida humana independiente atribuible específicamente a la disponibilidad de procedencia una vez satisfechos los compromisos ya existentes de:

```text
PV-005 — Determinación humana efectiva
PV-006 — Continuidad de posibilidades pertinentes
```

Resultado:

```text
D-03a
→ REDUCIDA

nuevo compromiso de Product
→ NO JUSTIFICADO

P6
→ NO DERIVADO

nueva Realization
→ NO DERIVADA

Architecture
→ NO DERIVADA
```

---

# 1. Objeto

La cuestión investigada fue:

> **Dado un resultado R que permanece disponible, legible, reconocible y susceptible de evaluación humana, ¿existe una pérdida específica cuando la persona deja de poder conocer una información de procedencia P pertinente para decidir cómo interpretar, valorar o utilizar R?**

La diferencia sólo podía justificar un nuevo compromiso si sobrevivía después de mantener constantes:

```text
contenido
acceso
persistencia
legibilidad
utilización
capacidad de evaluación
determinación humana
posibilidades pertinentes
```

y variar exclusivamente:

```text
P disponible
vs.
P no disponible
```

---

# 2. Condición de independencia

Para que `D-03a` sobreviviera como diferencia independiente debía poder demostrarse una situación de la forma:

```text
R disponible                       ✓
R utilizable                       ✓
capacidad humana de decidir        ✓
PV-005 satisfecha                  ✓
posibilidades pertinentes          ✓
PV-006 satisfecha                  ✓

P
→ no disponible

y aun así

pérdida humana específicamente
atribuible a la ausencia de P      ✓
```

Si la pérdida consistía en que desaparecía una posibilidad pertinente de:

```text
interpretar
evaluar
comparar
localizar
regresar
reutilizar
seleccionar
actuar
```

la diferencia quedaba comprendida por `PV-006`.

Si el residuo consistía en:

```text
quién ejercía una decisión relevante
mientras las alternativas permanecían abiertas
```

quedaba comprendido por `PV-005`.

---

# 3. Primer candidato — PROJECT_CHARTER

La primera auditoría del corpus seleccionó provisionalmente:

```text
docs/08-project/00-PROJECT_CHARTER.md
```

como posible caso experimental.

Se propuso una estructura:

```text
R
→ declaración estratégica

P
→ información sobre la reconstrucción histórica
  de esa declaración

A
→ actuación humana posterior
```

y se derivó provisionalmente:

```text
C-D03A-01
```

---

# 4. Primera ejecución como ensayo de protocolo

Se construyó inicialmente:

```text
S−
→ R + A

S+
→ R + P + A
```

La ejecución produjo:

```text
S−
→ A1

S+
→ A1
```

Sin embargo, esa ejecución no podía considerarse evidencia discriminante.

---

# 5. Primera incidencia — contaminación del participante

El participante conocía ya, por la propia preparación del experimento, la información que debía actuar como:

```text
P
```

Por tanto:

```text
S−
→ no era genuinamente ciego
```

La justificación proporcionada en S− utilizó conocimiento previo del proyecto que no estaba contenido únicamente en el material experimental presentado.

Resultado:

```text
ejecución
→ ensayo de protocolo

evidencia discriminante
→ NO
```

---

# 6. Segunda incidencia — equivalencia entre P y A

La formulación inicial de P incluía información equivalente a:

```text
la declaración fue reconstruida
a partir de materiales históricos

y

no pretendía inventar
un producto nuevo
```

mientras la actuación A pedía decidir entre:

```text
reconstrucción de rumbo anterior
vs.
propuesta nueva
```

Por tanto:

```text
P
≈ respuesta solicitada por A
```

Esto vulneraba la condición establecida en el documento 32:

```text
P
→ debe ser pertinente para A

pero

P
⇏ debe contener A
```

Resultado:

```text
diseño inicial
→ NO DISCRIMINANTE
```

---

# 7. Corrección provisional del diseño

Se intentó corregir la operacionalización manteniendo R y modificando:

```text
P
→ reducción

A
→ actuación posterior de uso
```

P quedó provisionalmente reducida a:

```text
Esta primera versión fue reconstruida
a partir de materiales históricos
del propio proyecto durante
la revisión de agosto de 2026.
```

A se reformuló como decisión sobre cómo utilizar R como posible evidencia histórica.

---

# 8. Tercera incidencia — contaminación interna de A2

La primera formulación corregida de A2 contenía:

```text
contrastarla con los materiales
históricos de origen
```

aunque precisamente:

```text
existencia de materiales históricos de origen
```

formaba parte del dominio informativo de P.

Por tanto:

```text
P formalmente ausente en S−
```

pero:

```text
A2
→ filtraba parte de P dentro de S−
```

Se corrigió A2 a:

```text
Utilizar R como antecedente relevante,
pero buscar evidencia adicional
antes de emplearla como evidencia suficiente
del rumbo anterior.
```

Esta corrección eliminó esa contaminación concreta.

---

# 9. Auditoría material de la fuente

Antes de ejecutar de nuevo la prueba se auditó materialmente:

```text
PROJECT_CHARTER.md
```

La comprobación mostró que el documento vigente contiene únicamente:

```text
# 1 ...
...
# 16. Regla final
```

No contiene:

```text
# 18. Declaración de rumbo

# 19. Procedencia de esta primera versión
```

que habían sido atribuidas provisionalmente al documento.

---

# 10. Búsqueda literal de R y P

Se buscaron en `PROJECT_CHARTER.md` expresiones distintivas del supuesto R y P:

```text
producto real
útil y sostenible
laboratorio de ingeniería
recorrido educativo
materiales históricos
reconstruida
inventar un producto nuevo
referencia reconstruida
```

No se obtuvo ninguna coincidencia pertinente.

---

# 11. Búsqueda global en el corpus

Se amplió la búsqueda a:

```text
docs/
```

El resultado mostró:

```text
partes conceptuales de R
→ aparecen en otros documentos,
  especialmente VISION.md

formulación completa de R usada en C-D03A-01
→ sólo aparecía en el propio documento 33

P atribuida a PROJECT_CHARTER
→ no apareció en el corpus como tal
```

Por tanto:

```text
R + P atribuidos a PROJECT_CHARTER
→ no constituyen material real
  del PROJECT_CHARTER vigente
```

---

# 12. Resultado del candidato PROJECT_CHARTER

El candidato queda clasificado como:

```text
PROJECT_CHARTER
→ CANDIDATO MATERIALMENTE FALLIDO
```

Motivo:

```text
R y P utilizados
→ no existen materialmente
  en la fuente a la que fueron atribuidos
```

No procede:

```text
corregir únicamente números de sección

reubicar retrospectivamente R/P
en otra fuente sin evidencia

fabricar una nueva P
para conservar el caso
```

---

# 13. Consecuencia metodológica

El fallo del candidato no falsifica `D-03a`.

Sólo establece:

```text
C-D03A-01 / PROJECT_CHARTER
→ descartado
```

Por tanto se regresó al corpus para intentar encontrar:

```text
R real
+
P real
+
relación R ↔ P real
+
A real
```

antes de derivar cualquier nueva ejecución.

---

# 14. Segundo candidato — correspondencia `medido / estimado`

En:

```text
docs/06-realization/28-investigacion-incorporacion-aportacion-sonora.md
```

se identificó un caso real donde:

```text
valores
→ conservados

procedencias
→ conservadas

correspondencia valor ↔ procedencia
→ perdida
```

El documento registra:

```text
procedencia
→ medido / estimado
```

---

# 15. Pérdida observada en `medido / estimado`

La pérdida de correspondencia reduce:

```text
posibilidades de interpretación
+
posibilidades de utilización
```

aunque:

```text
los valores sobrevivan
```

y:

```text
las etiquetas de procedencia sobrevivan
```

---

# 16. Reducción del segundo candidato

El propio documento utiliza este caso para justificar:

```text
C-PV-I28-02
— Continuidad de posibilidades pertinentes
```

La estructura causal es:

```text
correspondencia valor ↔ procedencia
→ necesaria para ciertas posibilidades

correspondencia perdida
→ posibilidades pertinentes perdidas
```

Por tanto:

```text
candidato medido / estimado
→ REAL

pero

pérdida
→ comprendida por PV-006
```

Resultado:

```text
residuo independiente D-03a
→ NO demostrado
```

---

# 17. Tercer candidato — RVM-RCA

Se examinó:

```text
docs/06-realization/21-cierre-de-la-primera-realizacion-vertical-minima-post-rca.md
```

La realización mantiene conjuntamente:

```text
aportación candidata
+
antecedentes recuperados
+
procedencia
+
contexto
+
relaciones instrumentales
```

para constituir:

```text
situación de comparación utilizable
```

---

# 18. Función de procedencia en RVM-RCA

La procedencia y el contexto permiten:

```text
conservar identidad documental
mantener anclaje
comparar
evitar reconstrucción externa
```

Si se retiran:

```text
procedencia + contexto
```

la persona debe reconstruir manualmente:

```text
buscar
→ localizar
→ abrir
→ recuperar procedencia
→ reconstruir contexto
→ recordar relaciones
→ volver a la candidata
```

---

# 19. Reducción de RVM-RCA

La procedencia no está aislada como información adicional sobre una capacidad que permanece intacta.

Forma parte de:

```text
la propia constitución
de la situación de comparación
```

Por tanto:

```text
P ausente
→ capacidad de comparación
  deja de estar suficientemente constituida
```

Resultado:

```text
RVM-RCA
→ candidato real

pero

variable única = P
→ NO

residuo independiente D-03a
→ NO demostrado
```

---

# 20. Cuarto candidato — procedencia histórica

En el documento 28 se distingue:

```text
procedencia histórica
```

de:

```text
orientación actual
```

La procedencia histórica explica:

```text
por qué llegó a existir el material
```

El contraste muestra que puede desaparecer cuando:

```text
ninguna responsabilidad,
resultado
o actuación vigente
depende ya de ella
```

---

# 21. Resultado sobre procedencia histórica

El corpus establece expresamente:

```text
existencia histórica
≠ razón suficiente para conservar
```

y:

```text
información histórica
→ puede desaparecer
  si ya no mantiene función pertinente
```

Por tanto:

```text
procedencia como mera genealogía
→ NO constituye necesidad independiente
```

---

# 22. Quinto candidato — datos observados / inferidos

Se examinó una serie:

```text
día 1
→ 10 observado

día 2
→ 12 inferido

día 3
→ 14 observado
```

El valor:

```text
12
```

puede conservarse numéricamente aunque desaparezca la información de que fue:

```text
inferido
```

---

# 23. Función de `observado / inferido`

La diferencia puede determinar actuaciones posteriores, por ejemplo:

```text
eliminar datos
que no procedan
de observación directa
```

El documento concluye que:

```text
procedencia epistémica
→ puede formar parte
  del estado relevante

cuando determina
posibilidades posteriores
de interpretación o actuación
```

---

# 24. Reducción de `observado / inferido`

La razón de conservar la procedencia no es:

```text
ser procedencia
```

sino:

```text
sostener posibilidades posteriores
de interpretación o actuación
```

Por tanto:

```text
procedencia epistémica
→ absorbida por N-AUD-02
  y posteriormente por PV-006
```

Resultado:

```text
residuo independiente D-03a
→ NO demostrado
```

---

# 25. Sexto candidato — procedencia de fuente original

En el mismo documento 28 se distingue:

```text
procedencia respecto del original
```

de:

```text
autoría interna de una indicación
```

La procedencia respecto del original permite:

```text
reconocer de qué aportación sonora
procede el material

+
regresar a ella
```

---

# 26. Procedencia global y correspondencia localizada

También se distingue:

```text
correspondencia localizada
```

de:

```text
procedencia global
respecto de la fuente original
```

La correspondencia localizada sólo permanece necesaria mientras exista una actuación que requiera:

```text
volver a una parte concreta
del original
```

---

# 27. Función de la procedencia respecto del original

El corpus no identifica un valor independiente de procedencia.

Identifica funciones como:

```text
reconocer la fuente
regresar a la fuente
consultar la fuente
```

Por tanto:

```text
procedencia
→ sostiene posibilidades concretas
```

---

# 28. Séptimo contraste — interoperabilidad F1 → F0

En:

```text
docs/06-realization/34-registro-experimental-interoperabilidad-delimitacion-pv005-pv006.md
```

se ejerció la relación entre:

```text
F1
→ ficha de trabajo

F0
→ fuente original
```

La relación era:

```text
representada
+
físicamente existente
+
practicable
```

---

# 29. Variante controlada de correspondencia

Se construyó una variante donde:

```text
representación     ✔
practicabilidad    ✔
correspondencia    ✘
```

La acción de:

```text
pulsar un enlace
```

continuaba disponible.

También:

```text
abrir un recurso
```

continuaba disponible.

Pero se perdía:

```text
volver al F0 concreto
```

---

# 30. Evaluación frente a PV-006

El propio documento concluye:

```text
interpretación débil de PV-006
como mera practicabilidad técnica
→ falsada
```

pero:

```text
absorción del fenómeno por PV-006
→ sobrevive
```

y:

```text
residuo independiente demostrado
→ NO
```

La razón es:

```text
posibilidad pertinente
→ volver al F0 concreto

esa posibilidad
→ perdida
```

---

# 31. Importancia del contraste F1 → F0

Este caso es especialmente relevante para `D-03a` porque demuestra que incluso cuando:

```text
la relación formal existe
la acción técnica funciona
algún recurso puede abrirse
```

la pérdida sigue evaluándose respecto de:

```text
la posibilidad humana concreta
que debía quedar preservada
```

y no respecto de:

```text
procedencia
```

como propiedad autónoma.

---

# 32. Intento explícito de falsar PV-006

El documento 34 construyó además:

```text
P6
```

para comprobar si podía existir una diferencia humana aunque las posibilidades posteriores permanecieran iguales.

En P6:

```text
resultado material final diferente        ✘
materiales posteriores diferentes         ✘
posibilidades posteriores diferentes      ✘
```

pero:

```text
quién resolvió la decisión
→ diferente
```

---

# 33. Residuo respecto de PV-006

En P6 se obtuvo:

```text
residuo respecto de PV-006
→ SÍ
```

porque:

```text
todas las posibilidades posteriores
identificadas
→ permanecían iguales
```

y aun así quedaba una diferencia humana.

---

# 34. Naturaleza del residuo

El residuo era:

```text
agencia
```

concretamente:

```text
quién ejerció una decisión relevante
mientras las alternativas
continuaban abiertas
```

---

# 35. Contraste frente a PV-005

El documento concluye:

```text
residuo respecto de PV-006        ✔
diferencia de agencia             ✔
absorción por PV-005              ✔
residuo independiente del conjunto ✘
nuevo compromiso de Product        ✘
```

Por tanto, el contraejemplo que consiguió escapar de PV-006 no produjo una nueva necesidad de procedencia.

Produjo:

```text
PV-005 — Determinación humana efectiva
```

---

# 36. Resultado acumulado

Los casos examinados quedan:

| Caso                  | Resultado                                                 |
| --------------------- | --------------------------------------------------------- |
| PROJECT_CHARTER       | candidato materialmente fallido                           |
| medido / estimado     | reducido a PV-006                                         |
| RVM-RCA               | procedencia constitutiva de la posibilidad de comparación |
| procedencia histórica | prescindible sin función pertinente                       |
| observado / inferido  | reducido a estado relevante / PV-006                      |
| fuente original       | sostiene reconocimiento y retorno                         |
| F1 → F0               | absorción por PV-006 sobrevive                            |
| P6                    | residuo frente a PV-006, absorbido por PV-005             |

---

# 37. Patrón observado

El corpus muestra consistentemente:

```text
si una procedencia sostiene
una posibilidad humana pertinente
↓
su pérdida es pérdida
de esa posibilidad
↓
PV-006
```

En cambio:

```text
si la procedencia ya no sostiene
ninguna posibilidad pertinente
↓
puede desaparecer
sin pérdida demostrada
```

Y cuando:

```text
todas las posibilidades posteriores
permanecen preservadas
```

pero persiste una diferencia humana, el residuo identificado en los contrastes disponibles corresponde a:

```text
agencia / determinación
→ PV-005
```

---

# 38. Hipótesis reductiva sometida a falsación

Se intentó falsar:

> **Toda procedencia cuya pérdida produce una pérdida humana relevante lo hace porque alguna posibilidad pertinente de interpretación, evaluación o actuación dependía de ella.**

El corpus examinado no proporciona un contraejemplo.

---

# 39. Resultado del test de falsación

No se ha encontrado una situación donde concurran simultáneamente:

```text
R disponible                       ✓
R utilizable                       ✓
PV-005 satisfecha                  ✓
PV-006 satisfecha                  ✓
posibilidades pertinentes          ✓

P ausente                          ✓

y además

pérdida humana independiente
específicamente debida
a la ausencia de procedencia       ✓
```

---

# 40. Conclusión reductiva sobre D-03a

Dentro del alcance investigado:

```text
D-03a
→ NO demuestra
  una pérdida humana independiente
```

Los casos de procedencia funcionalmente relevantes quedan comprendidos principalmente por:

```text
PV-006
```

y los residuos vinculados a quién ejerce una decisión quedan comprendidos por:

```text
PV-005
```

---

# 41. Formulación rigurosa de la conclusión

No se afirma:

```text
toda procedencia imaginable
es universalmente reducible
a PV-005 o PV-006
```

Se afirma:

> **El corpus y los contrastes disponibles no proporcionan evidencia positiva de una pérdida humana específicamente atribuible a la disponibilidad de procedencia que sobreviva después de satisfacer PV-005 y PV-006.**

Esta conclusión es suficiente para la decisión de roadmap actualmente necesaria.

---

# 42. Estatuto de D-03a

Por tanto:

```text
D-03a — Disponibilidad de procedencia pertinente
→ REDUCIDA
```

Más precisamente:

```text
procedencia funcionalmente necesaria
→ principalmente absorbida por PV-006

residuos de agencia
→ absorbidos por PV-005

procedencia sin función pertinente
→ no demuestra obligación de conservación
```

---

# 43. Consecuencia para D-03

La reducción de D-03a no demuestra automáticamente que:

```text
D-03 — Transparencia informativa
```

quede completamente cerrada en todas sus posibles formulaciones.

Demuestra que la primera reducción seleccionada:

```text
D-03a — Disponibilidad de procedencia pertinente
```

no justifica por sí misma una nueva capacidad.

Por tanto:

```text
D-03a
→ cerrada reductivamente

D-03 completo
→ no elevado a Product
```

Cualquier nueva subdiferencia de D-03 requeriría:

```text
base positiva independiente
+
pérdida humana propia
+
no absorción por PV-005/PV-006
+
prueba discriminante propia
```

---

# 44. Consecuencias negativas

Este resultado no deriva:

```text
P6
nueva capacidad de Product
nueva vertical
nueva Realization
Architecture
modelo general de procedencia
sistema de metadatos
autoría obligatoria
historial general
registro obligatorio de fuentes
```

---

# 45. Consecuencia para PROJECT_CHARTER

El caso:

```text
C-D03A-01 / PROJECT_CHARTER
```

queda descartado.

No deberá conservarse como:

```text
prueba pendiente de ejecución
```

sino como:

```text
candidato materialmente fallido
dentro de la trayectoria reductiva
```

Su fallo contribuyó positivamente a endurecer:

```text
verificación material de R
verificación material de P
independencia del participante
no equivalencia P/A
control de contaminación de opciones
```

---

# 46. Lecciones metodológicas

La investigación deja cinco reglas útiles.

## 46.1 Verificación material previa

Antes de derivar una prueba:

```text
R
P
```

deben localizarse literalmente en el corpus.

No basta:

```text
reconstrucción plausible
memoria del proyecto
equivalencia conceptual
```

---

## 46.2 Relación R ↔ P demostrada

No basta encontrar:

```text
R
```

en un documento y:

```text
P
```

en otro.

Debe demostrarse que:

```text
P
→ se refiere efectivamente a R
```

---

## 46.3 P no puede contener A

Debe comprobarse:

```text
P
⇏ A
```

no sólo literalmente sino:

```text
semánticamente
```

---

## 46.4 Las opciones de A tampoco pueden filtrar P

Aunque P no aparezca directamente en S−:

```text
A1 / A2 / A3
```

no pueden revelar información perteneciente al dominio de P.

---

## 46.5 Independencia informativa del participante

Una condición S− sólo es válida si:

```text
participante
→ no conoce P
```

por vías externas pertinentes.

---

# 47. Estado resultante

```text
T1
→ CERRADO

D-00
→ reformulada / no discriminable

D-01
→ reducida a CPV1-01

D-03
→ investigada mediante D-03a

D-03a
→ REDUCIDA

PROJECT_CHARTER
→ candidato fallido

procedencia funcional
→ absorbida principalmente por PV-006

residuo de agencia
→ absorbido por PV-005

nuevo compromiso de Product
→ NO JUSTIFICADO

P6
→ NO DERIVADO

nueva vertical
→ NO DERIVADA

nueva Realization
→ NO DERIVADA

Architecture
→ NO DERIVADA
```

---

# 48. Próxima actuación

Con `D-03a` cerrada reductivamente, la siguiente actuación no consiste en buscar indefinidamente nuevos ejemplos de procedencia.

Debe regresarse a la priorización reductiva resultante del documento 31 y examinar el siguiente candidato no resuelto:

```text
D-04 — Participación real sostenida
```

antes de abrir:

```text
P6
nueva capacidad
nueva Realization
Architecture
```

La cuestión siguiente será:

> **¿D-04 contiene una pérdida humana independiente que sobreviva a las capacidades ya realizadas y, especialmente, a PV-005, o queda también reducida por compromisos existentes?**

---
