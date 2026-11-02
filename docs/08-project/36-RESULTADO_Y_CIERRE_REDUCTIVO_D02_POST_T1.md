# Resultado y cierre reductivo de D-02 después de T1

## Estado

**Cerrado en el alcance investigado.**

Este documento registra el resultado de la reducción de:

```text
D-02 — Relaciones explorables
```

identificada después del cierre de T1 dentro de la comparación entre:

```text
T1
↔
PLATFORM_VISION
```

Resultado:

```text
D-02
→ REDUCIDA EN EL ALCANCE ACTUAL
```

La investigación sí ha demostrado que determinadas relaciones pueden ser funcionalmente necesarias.

No ha demostrado que esa necesidad requiera una capacidad general de:

```text
exploración relacional
grafo general
panel de relaciones
navegador de enlaces
navegación general por relaciones
```

ni una nueva capacidad de Product.

---

# 1. Objeto de D-02

`PLATFORM_VISION` contempla que las relaciones entre contenidos, actividades o contextos puedan facilitar:

```text
navegación
contextualización
descubrimiento
comparación
referencia
reutilización
trazabilidad
```

La formulación provisional fue:

```text
D-02 — Relaciones explorables
```

Esta formulación podía agrupar fenómenos distintos.

Entre ellos:

```text
existencia de relaciones
preservación de relaciones
reconocimiento de relaciones
recuperación de relaciones
dependencias
procedencia
correspondencias
navegación
descubrimiento
recorrido
exploración
grafo
```

No podía suponerse que todos constituyeran una única necesidad humana.

---

# 2. Regla de reducción

Para que D-02 justificara un nuevo compromiso debía demostrarse una pérdida humana que sobreviviera cuando:

```text
las relaciones pertinentes existen
los contenidos relacionados permanecen disponibles
los contenidos son localizables
las relaciones necesarias se conservan
la reutilización continúa siendo posible
la continuidad funcional permanece
```

y aun así:

```text
la ausencia de explorabilidad
→ produce una pérdida humana independiente
```

La mera existencia de una forma técnica posible de navegación no basta.

---

# 3. Distinción inicial

Se distingue:

```text
relación funcionalmente necesaria
```

de:

```text
capacidad general de explorar relaciones
```

La primera puede resultar indispensable para una actuación concreta.

La segunda constituye una generalización adicional que requiere justificación propia.

Por tanto:

```text
relación necesaria
≠
sistema relacional general
```

---

# 4. Antecedente POST-V1-02

Antes de la reducción de D-02 ya se había abierto:

```text
INVESTIGACIÓN POST-V1-02
— Continuidad de relaciones de participación
```

Su pregunta principal era si eliminar únicamente una relación previamente constituida, manteniendo conservados y localizables todos los materiales relacionados, podía producir una pérdida funcional irreducible.

---

# 5. Pregunta discriminante de POST-V1-02

La pregunta quedó formulada aproximadamente como:

```text
¿contiene R(A,B)
algo funcionalmente necesario
para una participación posterior
que no pueda reconstruirse
suficientemente desde A y B?
```

Esto aislaba correctamente la variable:

```text
relación
```

sin confundirla con:

```text
pérdida de material
fallo de localización
olvido humano
ausencia de contenido
```

---

# 6. H0-RP

La hipótesis nula fue:

```text
H0-RP
```

con el sentido:

```text
la pérdida de una relación
previamente constituida

→ no produce
  pérdida funcional irreducible
```

Según esta hipótesis:

```text
la relación necesaria
→ puede reconstruirse suficientemente
  mediante capacidades existentes
```

---

# 7. H1-RP

La hipótesis alternativa fue:

```text
H1-RP
```

con el sentido:

```text
la pérdida de una relación
previamente constituida

→ produce una pérdida funcional
  irreducible de participación posterior
```

---

# 8. CR-RP-01

Se formuló provisionalmente:

```text
CR-RP-01
— Condición discriminante de pérdida de relación
```

para aislar:

```text
materiales constantes
+
relación presente o ausente
+
posibilidad posterior afectada
```

La relación debía ser la única diferencia causal relevante.

---

# 9. No anticipación de capacidad

POST-V1-02 no asignó anticipadamente una nueva capacidad.

No derivó:

```text
capacidad relacional general
grafo
navegación
panel de relaciones
navegador de enlaces
```

porque la irreducibilidad todavía no estaba demostrada.

---

# 10. No derivación técnica

La investigación excluyó expresamente anticipar mecanismos como:

```text
panel de relaciones
grafo visual
navegador de enlaces
```

Tampoco derivó:

```text
Architecture
Realization
Implementation
```

sin resultado discriminante previo.

---

# 11. Estado de POST-V1-02

La investigación no llegó entonces a ejecutar su prueba propia:

```text
S+ / S− / S−R
```

El roadmap posterior estableció:

```text
INVESTIGACIÓN POST-V1-02
→ SUSPENDIDA
```

---

# 12. Motivo de suspensión

El motivo registrado fue:

```text
relevancia investigadora existente
+
prioridad estratégica no demostrada
```

La reapertura quedaba condicionada a que un hito posterior demostrara que preservar una relación constituía una dependencia necesaria.

---

# 13. D7 — Relaciones más ricas

El roadmap reformuló provisionalmente este espacio como:

```text
D7 — Relaciones más ricas
```

y reconoció que:

```text
relación mínima
→ ya forma parte de V1

preservación pertinente
→ ya forma parte de V1

capacidad relacional adicional
→ todavía no demostrada
```

Resultado:

```text
D7
→ NO PRIORITARIA
→ SUSPENDIDA
```

---

# 14. Evidencia posterior relevante

Aunque POST-V1-02 permaneciera suspendida, posteriormente apareció evidencia material sobre relaciones durante la integración P1–P5.

La auditoría integrada detectó:

```text
G-INT-01
— pérdida de continuidad identificativa
  al entrar en P4
```

---

# 15. Naturaleza de G-INT-01

La igualdad:

```text
sharedResult === published.content
```

no bastaba.

Esa igualdad sólo demostraba:

```text
igualdad textual
```

No demostraba:

```text
continuidad identificativa
```

con el mismo antecedente P1.

---

# 16. Relación funcional necesaria

La integración reveló que existía una diferencia real entre:

```text
mismo contenido
```

y:

```text
mismo antecedente identificado
```

Por tanto:

```text
una relación identificativa
→ puede ser funcionalmente necesaria
```

---

# 17. H-INT-COMP

La hipótesis integrada fue:

```text
H-INT-COMP
```

con la formulación:

> P1–P5 pueden componerse en una única trayectoria sin introducir una nueva capacidad funcional si los antecedentes existentes se reutilizan y las relaciones de procedencia necesarias se conservan explícitamente.

---

# 18. Resultado de H-INT-COMP

La prueba integrada estableció:

```text
H-INT-COMP
→ CONFIRMADA EN EL ALCANCE PROBADO
```

y:

```text
P1
P2
P3
P4
P5
→ FUNCIONALMENTE COMPONIBLES
  EN UNA ÚNICA TRAYECTORIA MÍNIMA
```

---

# 19. Ausencia de capacidad funcional adicional

CR-INT-01 registró expresamente:

```text
no se introduce
ninguna capacidad funcional
adicional a P1–P5
→ ✓
```

Por tanto:

```text
preservar relaciones necesarias
→ no exigió una capacidad funcional nueva
```

---

# 20. Resolución de G-INT-01

G-INT-01 quedó:

```text
pérdida de continuidad identificativa
al entrar en P4
→ RESUELTA
```

La solución fue preservar explícitamente:

```text
sourcePublishedId = P1
```

---

# 21. Significado de la solución

La colaboración no quedó vinculada a P1 únicamente por:

```text
igualdad textual
```

sino por:

```text
continuidad identificativa explícita
```

Por tanto:

```text
relación necesaria
→ preservada
```

sin:

```text
capacidad relacional general
```

---

# 22. G-INT-02

La integración resolvió también:

```text
G-INT-02
— duplicación del antecedente estable
```

mediante reutilización del mismo `S1`.

---

# 23. G-INT-03

Se resolvió:

```text
G-INT-03
— duplicación de la publicación antecedente
```

mediante reutilización del mismo `P1` por `EvaluationSupport`.

---

# 24. G-INT-04

Se resolvió:

```text
G-INT-04
— duplicación/desconexión
  del estado publicado
  utilizado para intercambio
```

generando `X1` desde el mismo `P1`.

---

# 25. Resultado integrado

El cierre de R-INT-01 estableció:

```text
R-INT-01
→ REALIZADA MÍNIMAMENTE

CR-INT-01
→ SATISFECHA

H-INT-COMP
→ CONFIRMADA

G-INT-01..04
→ RESUELTAS
```

---

# 26. Alcance de R-INT-01

La integración no estableció:

```text
P6
nueva prioridad funcional
modelo general de workflow
provenance general
grafo general
historial general
versionado general
```

Estableció únicamente que:

```text
las capacidades priorizadas
pueden componerse
sin perder diferencias funcionales
ni introducir capacidad nueva
```

---

# 27. Primera conclusión reductiva

La evidencia integrada demuestra:

```text
relaciones funcionalmente necesarias
→ SÍ
```

y:

```text
su pérdida puede producir discontinuidad
→ SÍ
```

pero también:

```text
capacidad relacional general
→ NO NECESARIA PARA RESOLVER
  EL CASO DEMOSTRADO
```

---

# 28. D-02 después de R-INT-01

Después de la Realization integrada ya no resulta correcto formular D-02 como:

```text
el producto carece
de relaciones funcionales
```

ni:

```text
el producto no puede conservar
relaciones necesarias
```

Ambas formulaciones quedan falsadas dentro del alcance probado.

---

# 29. Priorización reductiva posterior

El documento:

```text
31-PRIORIZACION_REDUCTIVA_D02_D05_POST_T1.md
```

volvió a formular:

```text
D-02 — Relaciones explorables
```

después de T1.

---

# 30. Servicios potenciales de las relaciones

La priorización reconoció que las relaciones pueden facilitar:

```text
navegación
contextualización
descubrimiento
comparación
referencia
reutilización
trazabilidad
```

Pero estas funciones no se consideraron automáticamente una capacidad nueva.

---

# 31. Solapamiento previo

La priorización observó que el proyecto ya poseía evidencia sobre:

```text
relaciones
participación
reutilización
procedencia
contexto
continuidad
```

y que I29 había examinado pérdidas asociadas a relaciones y composición sin demostrar un residuo independiente adicional.

---

# 32. Test discriminante de D-02

La pérdida adicional quedó formulada como:

```text
las relaciones existen
+
los contenidos son localizables
+
la reutilización es posible

pero

la persona pierde
una posibilidad pertinente
porque no puede recorrer,
descubrir o comparar
mediante esas relaciones
```

---

# 33. Resultado de la priorización

El documento 31 concluyó:

```text
esa pérdida adicional
→ NO ESTÁ DEMOSTRADA
```

Resultado:

```text
D-02
→ REDUCCIÓN ADICIONAL NECESARIA
→ NO PRIORIZADA PARA PRUEBA INMEDIATA
```

---

# 34. Irreducibilidad provisional

La matriz comparativa asignó a D-02:

```text
novedad
→ baja-media

irreducibilidad
→ baja

pérdida humana
→ todavía difusa

discriminabilidad
→ media si se descompone

resultado
→ REDUCIR
```

---

# 35. Diferencia residual real

Después de descontar:

```text
existencia de relaciones
preservación
procedencia
continuidad identificativa
localización
reutilización
```

sólo permanece como candidato:

```text
valor humano independiente
de la explorabilidad relacional
```

---

# 36. Explorabilidad

Se entiende aquí por explorabilidad algo distinto de conservar una relación conocida.

Podría comprender:

```text
partir de un elemento
descubrir otros relacionados
recorrer conexiones
comparar trayectorias
seguir referencias
investigar estructura relacional
```

---

# 37. Explorabilidad no demostrada como requisito independiente

La auditoría del corpus no ha identificado un caso donde:

```text
relaciones pertinentes
→ preservadas

contenidos
→ disponibles

localización
→ posible

reutilización
→ posible

continuidad funcional
→ preservada
```

pero:

```text
ausencia de exploración relacional general
→ produce pérdida humana independiente
```

---

# 38. Navegación como mecanismo

El corpus utiliza navegación en situaciones concretas.

Pero repetidamente distingue entre:

```text
necesidad humana
```

y:

```text
mecanismo concreto de navegación
```

No toda necesidad de recuperación, retorno o reconocimiento exige navegación general.

---

# 39. I28

I28 identificó situaciones en las que una persona debía poder:

```text
volver
localizar
retomar
recuperar
```

sin recorrer nuevamente todo un material.

Pero la investigación estableció que ello:

```text
no exige necesariamente
navegación automática
```

ni un mecanismo concreto de navegación.

---

# 40. PV-002

La investigación de practicabilidad/disponibilidad de PV-002 tampoco derivó:

```text
navegación general
```

como requisito necesario.

La disponibilidad de una posibilidad no se identifica con una forma concreta de navegación.

---

# 41. Localización selectiva

La investigación post-V1 sobre localización selectiva aisló una pérdida humana concreta:

```text
incapacidad de localizar
un contenido pertinente
sin ayuda indebida
```

La solución no derivó:

```text
grafo general
navegación general por relaciones
```

como capacidad necesaria.

---

# 42. Distinción localización / exploración

Se distingue:

```text
localizar algo necesario
```

de:

```text
explorar una red general
de relaciones
```

La primera ya ha sido demostrada como necesidad en casos concretos.

La segunda requiere evidencia adicional.

---

# 43. Grafo como representación

El proyecto ha utilizado grafos conceptualmente para representar:

```text
dependencias
reducciones
estructuras
```

pero eso no convierte automáticamente el grafo en una capacidad de Product.

---

# 44. Mapa de dependencias de V1

`14-MAPA_DE_DEPENDENCIAS_DE_V1.md` construyó:

```text
grafo mínimo de dependencias necesarias
```

Su objetivo no fue registrar todas las relaciones posibles.

Se redujeron relaciones redundantes por transitividad.

---

# 45. Grafo funcional frente a grafo de producto

La existencia de un:

```text
grafo funcional
```

en la documentación o análisis no implica:

```text
grafo arquitectónico
```

ni:

```text
grafo navegable para la persona
```

como obligación de Product.

---

# 46. Relación mínima frente a grafo general

El roadmap ya había formulado:

```text
la relación mínima
no requiere todavía
un grafo general
```

Esta distinción continúa vigente después de R-INT-01.

---

# 47. Panel de relaciones

No se ha demostrado una pérdida humana que exija:

```text
panel de relaciones
```

como mecanismo general.

---

# 48. Navegador de enlaces

Tampoco se ha demostrado una necesidad independiente de:

```text
navegador de enlaces
```

como capacidad general.

---

# 49. Grafo visual

Del mismo modo:

```text
grafo visual
```

permanece como posible mecanismo o representación.

No como capacidad derivada.

---

# 50. Primer residuo potencial — descubrimiento

El candidato más fuerte para reabrir D-02 sería:

```text
D-02a
— descubrimiento relacional
```

Una posible situación sería:

```text
la persona desconoce una relación pertinente

la relación existe

los materiales existen

pero

sin exploración relacional
no puede descubrir suficientemente
esa conexión
```

---

# 51. Falta de evidencia para D-02a

Ese caso es conceptualmente posible.

Pero no ha sido demostrado en el corpus actual.

No existe evidencia suficiente de que:

```text
descubrimiento relacional general
```

constituya una pérdida humana independiente.

---

# 52. Segundo residuo potencial — comparación relacional

Podría proponerse:

```text
D-02b
— comparación mediante estructura relacional
```

Pero el proyecto ya dispone de mecanismos de:

```text
comparación
recuperación
correspondencia
procedencia
contextualización
```

La necesidad de una estructura general de exploración para realizar esa comparación tampoco está demostrada.

---

# 53. Tercer residuo potencial — recorrido

Podría proponerse:

```text
D-02c
— recorrido de relaciones
```

Pero recorrer por sí mismo no constituye todavía un valor humano.

Debe demostrarse qué posibilidad pertinente desaparece sin ese recorrido.

Ese residuo no ha sido aislado.

---

# 54. Test fuerte de D-02

Para demostrar un residuo independiente debería encontrarse un caso con:

```text
relaciones pertinentes preservadas       ✔
contenidos preservados                   ✔
contenidos localizables                  ✔
reutilización posible                    ✔
continuidad funcional                    ✔
procedencia suficiente                   ✔
PV-006 satisfecha                        ✔

pero

posibilidad humana pertinente perdida
únicamente por falta de explorabilidad   ✔
```

No se ha encontrado ese caso.

---

# 55. Resultado de la falsación

Resultado:

```text
residuo independiente
de explorabilidad
→ NO DEMOSTRADO
```

---

# 56. Contraargumento más fuerte

La objeción más fuerte es:

> Una persona puede necesitar descubrir una relación pertinente que no conoce previamente, y la mera conservación de esa relación no garantiza que pueda encontrarla.

La objeción es conceptualmente válida.

---

# 57. Respuesta al contraargumento

La objeción identifica una posible futura situación de investigación.

Pero no demuestra todavía:

```text
qué relación debe descubrirse
qué actuación depende de ella
qué pérdida aparece sin explorabilidad
por qué localización, recuperación,
contextualización o reutilización
no resultan suficientes
```

Por tanto, no justifica todavía una nueva capacidad.

---

# 58. Condición para reabrir D-02

D-02 podrá reabrirse si aparece un caso donde:

```text
una relación pertinente ya existe
y permanece suficientemente conservada

los materiales relacionados
siguen disponibles

la localización ordinaria
es suficiente para cada material

la reutilización individual
continúa siendo posible

pero

una actuación humana pertinente
fracasa porque la persona
no puede descubrir o recorrer
la estructura relacional necesaria
```

Ese caso deberá demostrar que la pérdida no se reduce a:

```text
localización
recuperación
reconocimiento
procedencia
contextualización
PV-006
```

---

# 59. Resultado acumulado

La reducción queda:

```text
existencia de relaciones
→ demostrada

relaciones funcionalmente necesarias
→ demostradas

pérdida por desaparición
de relación identificativa
→ demostrada

preservación explícita
de relación necesaria
→ realizada

continuidad de procedencia
→ realizada

composición manteniendo relaciones
→ R-INT-01

capacidad funcional adicional
→ no necesaria en el caso probado

navegación general
→ no derivada

grafo general
→ no derivado

panel de relaciones
→ no derivado

navegador de enlaces
→ no derivado

valor humano independiente
de explorabilidad
→ no demostrado
```

---

# 60. Conclusión reductiva

Dentro del alcance investigado:

```text
D-02 — Relaciones explorables
→ REDUCIDA
```

La reducción principal es:

```text
relaciones pertinentes
→ deben conservarse cuando sostienen
  continuidad o posibilidades pertinentes

preservación funcional
→ capacidades existentes / PV-006

continuidad identificativa
→ realizada en R-INT-01

exploración relacional general
→ no demuestra todavía
  un valor humano independiente
```

---

# 61. Alcance exacto de la conclusión

No se afirma:

```text
las relaciones
→ irrelevantes
```

ni:

```text
grafo
→ nunca necesario
```

ni:

```text
navegación relacional
→ nunca necesaria
```

ni:

```text
descubrimiento relacional
→ nunca necesario
```

Se afirma:

> El proyecto ha demostrado que algunas relaciones pueden ser funcionalmente necesarias y que su pérdida puede producir discontinuidades reales. También ha demostrado que esas relaciones pueden conservarse explícitamente dentro de capacidades ya realizadas sin derivar por ello una capacidad relacional general. No se ha demostrado todavía una pérdida humana independiente producida específicamente por la ausencia de explorabilidad relacional.

---

# 62. Consecuencias negativas

D-02 no justifica actualmente:

```text
P6
nuevo Product Value
nueva capacidad de Product
nueva Realization
Architecture
Implementation
grafo general
grafo visual
panel de relaciones
navegador de enlaces
navegación general por relaciones
```

---

# 63. Relación con PV-006

Cuando perder una relación destruye:

```text
interpretación
reutilización
continuidad
procedencia
otra posibilidad pertinente
```

la obligación de preservación puede quedar dentro de:

```text
PV-006
— Continuidad de posibilidades pertinentes
```

Esto no significa que toda relación deba conservarse.

Sólo aquellas cuya pérdida afecte a posibilidades que continúan siendo pertinentes.

---

# 64. Relación con R-INT-01

R-INT-01 aporta evidencia directa de que:

```text
una relación identificativa
puede ser necesaria
```

y de que:

```text
puede conservarse explícitamente
sin capacidad funcional adicional
```

Este resultado constituye la evidencia reductiva posterior más fuerte para D-02.

---

# 65. Estado de POST-V1-02

POST-V1-02 permanece históricamente como investigación suspendida.

Su prueba específica:

```text
S+ / S− / S−R
```

no fue ejecutada bajo aquel diseño.

Sin embargo, la cuestión estratégica que pretendía esclarecer ha recibido evidencia posterior suficiente para la reducción actual:

```text
relaciones necesarias
→ sí

nueva capacidad relacional
→ no demostrada
```

Por tanto, no es necesario reabrir automáticamente POST-V1-02 para cerrar D-02 en el alcance actual.

---

# 66. Estado de las diferencias D-00…D-05

El estado acumulado queda:

```text
D-00
→ reformulada / no discriminable

D-01
→ reducida

D-02
→ reducida

D-03a
→ reducida

D-04
→ reducida

D-05
→ reducida
```

---

# 67. Resultado estratégico acumulado

Después de la reducción de todas las diferencias examinadas:

```text
D-00…D-05
```

no queda demostrada una pérdida humana independiente que justifique actualmente:

```text
P6
nuevo Product Value
nueva capacidad
nueva Realization
Architecture
```

---

# 68. Precisión estratégica

Este resultado no significa:

```text
PLATFORM_VISION
→ agotada universalmente
```

ni:

```text
producto final
→ completado
```

ni:

```text
no puedan aparecer
nuevas diferencias futuras
```

Significa únicamente:

> Las diferencias actualmente aisladas entre T1 y PLATFORM_VISION no proporcionan, después de su reducción, fundamento suficiente para derivar automáticamente un siguiente horizonte funcional.

---

# 69. Próxima actuación

La siguiente actuación ya no debe consistir en seleccionar automáticamente otra diferencia.

Debe consolidarse el resultado global de:

```text
D-00
D-01
D-02
D-03a
D-04
D-05
```

y determinar qué implica estratégicamente que ninguna de ellas haya justificado:

```text
P6
nuevo Product Value
nueva capacidad
nueva Realization
Architecture
```

---

# 70. Pregunta siguiente

La siguiente pregunta es:

> **¿Qué estado estratégico del proyecto resulta de haber cerrado reductivamente todas las diferencias D-00–D-05 sin obtener un residuo humano independiente que justifique un nuevo horizonte, y qué condiciones deberían cumplirse para que una actuación posterior vuelva a estar justificada?**

---

# 71. Estado resultante

```text
D-02
→ CERRADA EN EL ALCANCE INVESTIGADO

relaciones funcionalmente necesarias
→ DEMOSTRADAS

preservación de relaciones pertinentes
→ REALIZADA / CUBIERTA

explorabilidad relacional independiente
→ NO DEMOSTRADA

capacidad relacional general
→ NO JUSTIFICADA

nuevo Product Value
→ NO JUSTIFICADO

P6
→ NO JUSTIFICADO

nueva Realization
→ NO JUSTIFICADA

Architecture
→ NO DERIVADA

siguiente actuación
→ consolidación global
  del resultado D-00…D-05
```

---
