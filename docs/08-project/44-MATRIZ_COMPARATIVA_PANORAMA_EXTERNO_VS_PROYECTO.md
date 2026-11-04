# Matriz comparativa del panorama externo frente al proyecto

## Estado

**MATRIZ COMPARATIVA CERRADA — GATE-EXT-01 SUPERADO SELECTIVAMENTE**

## Fecha

04/11/2026

## Dependencia

Este documento deriva directamente de:

```text
43-PANORAMA_EXTERNO_PLATAFORMAS_ESTANDARES_E_IA.md
```

y debe interpretarse conjuntamente con el estado estratégico vigente consolidado en:

```text
29-TABLERO_MAESTRO_DEL_PROYECTO.md
42-REEVALUACION_RESIDUO_POST_Q05_Y_RESTAURACION_DE_SUFICIENCIA.md
```

---

# 1. Propósito

El documento 43 respondió principalmente:

> ¿Qué existe fuera del proyecto que resulta comparable, relevante o potencialmente reutilizable?

Este documento responde una pregunta diferente:

> **¿Qué parte de ese panorama externo representa realmente una diferencia pertinente respecto del proyecto, qué parte ya está absorbida y qué hallazgos justifican una profundización interna?**

---

# 2. Regla fundamental

La existencia externa de una función no constituye por sí misma una diferencia del proyecto.

Se distingue entre:

```text
función externa
```

y:

```text
necesidad interna demostrada
```

De forma equivalente:

```text
competidor tiene X
≠
proyecto necesita X
```

---

# 3. Estado estratégico de partida

Antes de la investigación externa:

```text
V1
→ SUFICIENTEMENTE REALIZADA

T1
→ CERRADO

D-00...D-05
→ REDUCIDAS

Q04
→ DIFERENCIA HUMANA INDEPENDIENTE DEMOSTRADA

Q05
→ DIFERENCIA REDUCIDA EN EL CASO ENSAYADO

residuo humano independiente post-Q05
→ NO DEMOSTRADO

derivación estratégica
→ CERRADA POST-Q05

siguiente horizonte
→ NO DERIVADO

suficiencia sin siguiente horizonte derivado
→ RESTABLECIDA
```

Por tanto, el panorama externo se evalúa desde un estado de:

> **suficiencia vigente sin nueva obligación estratégica derivada.**

---

# 4. Consecuencia metodológica

El documento 44 no busca responder:

> ¿Qué podríamos añadir?

Busca responder:

> **¿Qué evidencia externa cambia realmente lo que sabíamos acerca de nuestras necesidades, representaciones o posibilidades?**

---

# 5. Unidad de comparación

La unidad principal no será:

```text
producto
```

sino:

```text
patrón
capacidad
estándar
mecanismo
```

Un mismo patrón puede aparecer en varios productos.

---

# 6. Dimensiones comparativas

Cada candidato se evalúa mediante:

```text
D1 — problema externo que resuelve

D2 — equivalente interno actual

D3 — diferencia observable

D4 — evidencia interna disponible

D5 — estándar o patrón reutilizable

D6 — riesgo de sobregeneralización

D7 — coste conceptual

D8 — posibilidad de prueba

D9 — relación con pérdida humana demostrada

D10 — resultado de GATE-EXT-01
```

---

# 7. Estados de reducción

Cada candidato terminará clasificado como:

```text
R-A
→ YA ABSORBIDO

R-B
→ EQUIVALENTE CONCEPTUAL YA EXISTENTE

R-C
→ MEJORA POSIBLE NO ESTRATÉGICA

R-D
→ DIFERENCIA POTENCIAL SUSCEPTIBLE DE PRUEBA

R-E
→ ESTÁNDAR ÚTIL PARA ALGO YA EXISTENTE

R-F
→ SOLUCIÓN TÉCNICA PREMATURA

R-G
→ CANDIDATA REAL A PROFUNDIZACIÓN
```

---

# 8. Relación con GATE-EXT-01

Según 43, un hallazgo pasa `GATE-EXT-01` cuando satisface al menos una condición:

```text
A
→ coincide con una pérdida humana ya observada

B
→ ofrece un estándar para algo que ya hacemos
  y puede reducir complejidad propia

C
→ revela una diferencia concreta
  susceptible de prueba

D
→ evita inventar una solución propietaria
  para un problema ya derivado

E
→ permite una comparación empírica
  que pueda falsar una suposición del proyecto
```

---

# 9. Restricción adicional

Pasar `GATE-EXT-01` significa:

```text
merece profundización
```

y NO significa:

```text
merece implementación
```

---

# 10. Matriz maestra resumida

| Candidato                          | Equivalente interno               | Diferencia principal              | Reducción | GATE-EXT-01              |
| ---------------------------------- | --------------------------------- | --------------------------------- | --------- | ------------------------ |
| H-EXT-01 PROV-O                    | procedencia implícita/documentada | estándar formal                   | R-E / R-G | PASA                     |
| H-EXT-02 Web Annotation            | enlaces C1                        | modelo interoperable granular     | R-E / R-G | PASA                     |
| H-EXT-03 RO-Crate                  | carpeta material C1               | empaquetado portable estructurado | R-E / R-G | PASA                     |
| H-EXT-04 tecnología ≠ necesidad    | metodología propia                | ninguna                           | R-A       | NO APLICA                |
| H-EXT-05 procedencia fuera del LLM | trazabilidad documental           | principio arquitectónico          | R-B / R-E | PASA como principio      |
| O-EXT-01 visual operativo          | mapas auxiliares                  | mapa como vista viva              | R-C / R-D | NO PASA todavía          |
| O-EXT-02 objetos tipados           | IDs + Markdown                    | semántica ejecutable              | R-D / R-G | PASA                     |
| O-EXT-03 plataforma / IA separadas | separación conceptual existente   | interfaz explícita                | R-C / R-F | NO PASA                  |
| O-EXT-04 evidencia → trayectoria   | trazabilidad parcial              | navegación unificada              | R-D / R-G | PASA                     |
| O-EXT-05 IA verificable            | metodología de pruebas            | operacionalización IA             | R-C / R-D | PASA con prioridad media |
| O-EXT-06 relaciones sugeridas      | relaciones manuales               | inferencia candidata              | R-C / R-D | NO PASA todavía          |
| O-EXT-07 IA sobre estructura       | documentos estructurados          | razonamiento estructural          | R-D       | NO PASA todavía          |
| O-EXT-08 contexto persistente      | tablero + docs de relevo          | objeto operativo persistente      | R-B / R-C | NO PASA                  |
| O-EXT-09 MCP                       | sin interfaz externa derivada     | interoperabilidad                 | R-F       | NO PASA                  |
| O-EXT-10 material activo           | materiales pasivos                | operaciones asociadas             | R-F       | NO PASA                  |

---

# 11. H-EXT-01 — PROV-O

Candidato:

> PROV-O podría cubrir una parte significativa del modelo de procedencia que el proyecto necesitaría si esa necesidad se deriva posteriormente.

---

# 12. Problema externo

PROV-O modela:

```text
entidades
actividades
agentes
derivaciones
atribuciones
uso
generación
asociación
```

---

# 13. Equivalente interno actual

El proyecto ya conserva, aunque de forma heterogénea:

```text
materiales
resultados
transformaciones
participaciones
evidencias
antecedentes
trayectorias
```

Ejemplos:

```text
V0
T1
T2
I1
N1

Q04
Q05

F-PROS-MU-02
MIN-CC-01
MED-CC-01
```

---

# 14. Diferencia real

La diferencia no consiste en que nosotros carezcamos completamente de procedencia.

La diferencia consiste en que actualmente esa procedencia está distribuida entre:

```text
documentos
texto
identificadores
convenciones
relaciones narrativas
```

PROV-O ofrece:

```text
modelo formal
+
vocabulario estándar
+
interoperabilidad
```

---

# 15. Pérdida humana asociada

No se ha demostrado todavía una pérdida humana causada específicamente por no usar PROV-O.

Por tanto:

```text
PROV-O
≠
capacidad humana nueva derivada
```

---

# 16. Valor potencial

Sí existe una segunda razón:

```text
ya hacemos procedencia
+
existe estándar
→ podría evitar modelo propietario innecesario
```

Esto satisface:

```text
GATE-EXT-01-B
GATE-EXT-01-D
```

---

# 17. Resultado H-EXT-01

```text
H-EXT-01
→ R-E — ESTÁNDAR ÚTIL PARA ALGO YA EXISTENTE
→ R-G — CANDIDATA REAL A PROFUNDIZACIÓN

GATE-EXT-01
→ PASA
```

Prioridad:

```text
MUY ALTA
```

---

# 18. Pregunta derivable

> ¿Qué parte de nuestras entidades, actividades, participantes y derivaciones puede representarse mediante PROV-O sin pérdida y qué parte queda fuera?

---

# 19. H-EXT-02 — Web Annotation

Candidato:

> Web Annotation podría representar parte de las relaciones granulares ya ejercitadas en C1.

---

# 20. Equivalente interno

C1 ya ejercitó:

```text
vídeo
↔ timestamp

vídeo
↔ imagen

vídeo
↔ transcripción

comentario
↔ fragmento

comentario
↔ sección
```

---

# 21. Diferencia externa

Actualmente esas relaciones dependen de:

```text
Markdown
enlaces Obsidian
timestamps
encabezados
convenciones
```

Web Annotation aporta:

```text
Annotation
Body
Target
Selector
Motivation
Agent
```

como estructura normalizada.

---

# 22. Evidencia interna

A diferencia de muchos candidatos externos, aquí no partimos de una función hipotética.

Ya existe un caso concreto:

```text
C1
```

con materiales reales y relaciones verificadas.

---

# 23. Posibilidad de falsación

La hipótesis puede probarse directamente:

> ¿Puede representarse C1 mediante Web Annotation conservando las relaciones actualmente relevantes?

Resultado posible:

```text
sí
parcialmente
no
```

---

# 24. Resultado H-EXT-02

```text
H-EXT-02
→ R-E
→ R-G

GATE-EXT-01-B
→ SATISFECHO

GATE-EXT-01-E
→ SATISFECHO

GATE-EXT-01
→ PASA
```

Prioridad:

```text
MUY ALTA
```

---

# 25. H-EXT-03 — RO-Crate

Candidato:

> RO-Crate podría proporcionar una forma interoperable de empaquetar materiales heterogéneos de trabajo.

---

# 26. Equivalente interno

Existe ya:

```text
C1-material-trabajo/
```

con:

```text
V0
T2
I1
N1
```

y relaciones asociadas.

---

# 27. Diferencia

Actualmente:

```text
carpeta
+
archivos
+
convenciones
```

RO-Crate propone:

```text
carpeta
+
archivos
+
metadatos legibles por máquina
+
relaciones
+
identidad de Research Object
```

---

# 28. Pérdida humana

No se ha demostrado que el formato actual impida utilizar C1.

Por tanto:

```text
RO-Crate
≠
necesidad humana demostrada
```

---

# 29. Razón para profundizar

Sin embargo, ofrece una comparación empírica extremadamente barata:

```text
C1 actual
vs
C1 representado como RO-Crate
```

y podría revelar:

```text
qué relaciones sobreviven
qué relaciones faltan
qué información exige
qué información resulta redundante
```

---

# 30. Resultado H-EXT-03

```text
H-EXT-03
→ R-E
→ R-G

GATE-EXT-01-B
→ SATISFECHO

GATE-EXT-01-E
→ SATISFECHO

GATE-EXT-01
→ PASA
```

Prioridad:

```text
ALTA
```

inferior inicialmente a:

```text
PROV-O
Web Annotation
```

---

# 31. H-EXT-04 — Tecnología disponible ≠ necesidad derivada

Este hallazgo no es una capacidad externa.

Es una regla metodológica.

---

# 32. Correspondencia interna

Coincide directamente con la reducción realizada tras Q04/Q05:

```text
estado no compartido
≠
necesidad automática de backend

continuidad interdispositivo
≠
necesidad automática de sync

colaboración
≠
necesidad automática de CRDT
```

---

# 33. Resultado H-EXT-04

```text
H-EXT-04
→ R-A — YA ABSORBIDO

GATE-EXT-01
→ NO APLICA
```

Se conserva como regla transversal.

---

# 34. H-EXT-05 — Procedencia fuera del LLM

Candidato:

> La procedencia debería representarse fuera de la memoria implícita del LLM.

---

# 35. Correspondencia interna

Nuestro proyecto ya separa:

```text
documentación canónica
```

de:

```text
memoria conversacional
```

y exige:

```text
evidencia
trazabilidad
documentos
pruebas
```

para consolidar resultados.

---

# 36. Diferencia

La literatura externa refuerza la decisión metodológica.

No introduce por sí sola una capacidad nueva.

---

# 37. Resultado H-EXT-05

```text
H-EXT-05
→ R-B — EQUIVALENTE CONCEPTUAL YA EXISTENTE
→ R-E — PRINCIPIO EXTERNO COMPATIBLE

GATE-EXT-01
→ PASA COMO PRINCIPIO TRANSVERSAL
```

No requiere necesariamente una investigación separada.

Debe incorporarse a:

```text
estudio de PROV-O
estudio de IA
```

si éstos se abren.

---

# 38. O-EXT-01 — Representación visual operativa

Origen principal:

```text
Heptabase
```

---

# 39. Estado interno

El proyecto dispone de:

```text
Mapa de situación del proyecto — T1
mapa visual T0/T1
Tablero Maestro
```

pero el mapa es principalmente:

```text
representación
```

no:

```text
vista operativa editable sobre objetos del sistema
```

---

# 40. Diferencia

Existe una diferencia funcional real:

```text
mapa estático/auxiliar
vs
mapa operativo
```

---

# 41. Falta de evidencia

No se ha demostrado:

```text
pérdida humana
error
imposibilidad de continuidad
coste intolerable
```

causado por el carácter auxiliar de nuestros mapas.

---

# 42. Resultado O-EXT-01

```text
O-EXT-01
→ R-C — MEJORA POSIBLE NO ESTRATÉGICA
→ R-D — DIFERENCIA POTENCIAL

GATE-EXT-01
→ NO PASA EN EL ESTADO ACTUAL
```

Permanece en radar.

---

# 43. O-EXT-02 — Objetos tipados

Origen:

```text
Tana
Capacities
```

---

# 44. Estado interno

El proyecto utiliza entidades conceptualmente tipadas:

```text
Capability
Criterion
Difference
Test
Gate
Realization
Material
Participant
```

pero no están implementadas generalmente como objetos ejecutables del sistema.

---

# 45. Problema potencial

Actualmente preguntas del tipo:

```text
¿qué diferencias siguen abiertas?

¿qué pruebas redujeron una diferencia?

¿qué criterio depende de qué realización?
```

requieren frecuentemente:

```text
búsqueda documental
lectura
interpretación
```

---

# 46. Diferencia concreta

Un modelo tipado permitiría potencialmente:

```text
consultar
filtrar
validar
navegar
relacionar
```

sin reconstrucción puramente textual.

---

# 47. Precaución

No está demostrado todavía que esta operación sea:

```text
necesaria
```

ni que un modelo de objetos resulte mejor que el sistema documental actual.

---

# 48. Posibilidad de prueba

La diferencia sí es falsable.

Podría tomarse una entidad existente, por ejemplo:

```text
F-PROS-MU-02
```

y representarla provisionalmente como objeto tipado.

Después comparar:

```text
qué puede expresarse
qué se pierde
qué consultas nuevas aparecen
qué duplicación introduce
```

---

# 49. Resultado O-EXT-02

```text
O-EXT-02
→ R-D
→ R-G

GATE-EXT-01-C
→ SATISFECHO

GATE-EXT-01-E
→ SATISFECHO

GATE-EXT-01
→ PASA
```

Prioridad:

```text
ALTA
```

pero posterior inicialmente a los estudios de estándares.

---

# 50. O-EXT-03 — Separación plataforma / IA

Origen:

```text
Capacities
Tana
MCP ecosystem
```

---

# 51. Estado interno

Nuestro proyecto ya distingue conceptualmente:

```text
producto
metodología
ChatGPT
Codex
herramientas
```

Ningún proveedor de IA está actualmente consolidado como componente obligatorio del dominio.

---

# 52. Diferencia

La diferencia externa sería una interfaz explícita de desacoplamiento.

Pero todavía no existe una necesidad derivada de:

```text
varios proveedores
agentes externos
API pública
MCP
```

---

# 53. Resultado O-EXT-03

```text
O-EXT-03
→ R-C
→ R-F — SOLUCIÓN TÉCNICA PREMATURA

GATE-EXT-01
→ NO PASA
```

---

# 54. O-EXT-04 — Evidencia → trayectoria

Origen principal:

```text
Gemini Notebook
+
nuestro propio trabajo de procedencia
```

---

# 55. Estado externo

Gemini Notebook permite:

```text
respuesta
→ cita
→ fuente
```

---

# 56. Estado interno

Nuestro proyecto dispone de relaciones distribuidas entre:

```text
afirmación
material
transformación
participación
resultado
antecedente
```

pero no existe todavía una navegación única operacional del tipo:

```text
resultado
→ por qué existe
→ quién participó
→ qué evidencia utilizó
→ de qué antecedente procede
```

---

# 57. Diferencia real

Esta diferencia está mucho más alineada con nuestra trayectoria que una función externa arbitraria.

Puede formularse:

> ¿Puede una persona reconstruir directamente la genealogía de un resultado sin tener que recorrer manualmente múltiples documentos?

---

# 58. Evidencia actual

El proyecto ha invertido considerable trabajo en:

```text
trazabilidad documental
documentos de cierre
relevos
tablero maestro
Q03-Q05
```

Esto sugiere que la reconstrucción de contexto es un problema real del trabajo, aunque todavía no demuestra una pérdida producto-específica.

---

# 59. Resultado O-EXT-04

```text
O-EXT-04
→ R-D
→ R-G

GATE-EXT-01-C
→ SATISFECHO

GATE-EXT-01-E
→ SATISFECHO

GATE-EXT-01
→ PASA
```

Prioridad:

```text
MUY ALTA
```

y estrechamente relacionada con:

```text
H-EXT-01
H-EXT-02
```

---

# 60. O-EXT-05 — Operaciones de IA verificables

Origen principal:

```text
Elicit
Tana
agentes científicos
```

---

# 61. Correspondencia interna

Nuestra metodología ya exige:

```text
prueba
resultado
evidencia
```

y evita que una conclusión generada por IA se convierta automáticamente en canónica.

---

# 62. Diferencia

Todavía no existe un catálogo explícito de operaciones de IA sobre el conocimiento con contratos verificables.

Por ejemplo:

```text
buscar
extraer
proponer relación
clasificar
reconstruir procedencia
```

---

# 63. Resultado O-EXT-05

```text
O-EXT-05
→ R-C
→ R-D

GATE-EXT-01-C
→ SATISFECHO EN PRINCIPIO

GATE-EXT-01
→ PASA CON PRIORIDAD MEDIA
```

No justifica implementar IA.

Justifica, como máximo, estudiar tareas concretas.

---

# 64. O-EXT-06 — Relaciones sugeridas automáticamente

Origen:

```text
ResearchRabbit
Connected Papers
IA semántica
```

---

# 65. Estado interno

Las relaciones relevantes se construyen actualmente de manera principalmente explícita y humana.

---

# 66. Diferencia

Los sistemas externos muestran:

```text
relaciones declaradas
+
relaciones calculadas
```

---

# 67. Riesgo

Añadir relaciones sugeridas puede:

```text
aumentar descubrimiento
```

pero también:

```text
introducir ruido
crear falsas asociaciones
reducir diversidad
sobrecargar al usuario
```

---

# 68. Evidencia faltante

No existe actualmente evidencia de que el proyecto sufra por:

```text
relaciones no descubiertas
```

de una manera que justifique automatización.

---

# 69. Resultado O-EXT-06

```text
O-EXT-06
→ R-C
→ R-D

GATE-EXT-01
→ NO PASA TODAVÍA
```

Permanece en radar de IA.

---

# 70. O-EXT-07 — IA sobre estructura

Origen:

```text
Notion
Tana
Capacities
Heptabase
```

---

# 71. Diferencia

Una IA que entiende objetos estructurados puede realizar consultas más fuertes que una IA limitada a texto.

---

# 72. Dependencia oculta

Sin embargo:

```text
IA sobre estructura
```

presupone:

```text
estructura operacional suficientemente explícita
```

Por tanto, este candidato depende conceptualmente de:

```text
O-EXT-02
```

---

# 73. Resultado O-EXT-07

```text
O-EXT-07
→ R-D

GATE-EXT-01
→ NO PASA COMO INVESTIGACIÓN INDEPENDIENTE
```

Debe esperar al resultado de:

```text
O-EXT-02
```

---

# 74. O-EXT-08 — Contexto persistente de proyecto

Origen:

```text
Perplexity Projects
Notion
otros workspaces persistentes
```

---

# 75. Estado interno

El proyecto ya dispone de una fuerte infraestructura de continuidad:

```text
PROJECT_STATUS
Tablero Maestro
documentos de cierre
bitácoras
relevos
Git
historial documental
```

---

# 76. Diferencia

Un Project externo puede encapsular ese contexto de forma más automática.

Pero el problema funcional:

```text
retomar trabajo
```

ya está ampliamente cubierto internamente.

---

# 77. Resultado O-EXT-08

```text
O-EXT-08
→ R-B
→ R-C

GATE-EXT-01
→ NO PASA
```

Puede inspirar mejoras de experiencia, no una nueva investigación estratégica.

---

# 78. O-EXT-09 — MCP

Origen:

```text
ecosistema MCP
Tana
Capacities
Heptabase
Paper2Agent
```

---

# 79. Diferencia

Actualmente el proyecto no expone una interfaz estándar para agentes externos.

---

# 80. Falta de necesidad derivada

No existe todavía una actuación humana demostrada que requiera:

```text
ChatGPT
Claude
Codex
otros agentes
```

trabajando sobre una misma API del producto.

---

# 81. Riesgo de inversión prematura

Implementar MCP ahora introduciría:

```text
interfaces
seguridad
contratos
versionado
permisos
superficie de mantenimiento
```

antes de saber qué operaciones debe exponer el dominio.

---

# 82. Resultado O-EXT-09

```text
O-EXT-09
→ R-F — SOLUCIÓN TÉCNICA PREMATURA

GATE-EXT-01
→ NO PASA
```

MCP queda en radar tecnológico.

---

# 83. O-EXT-10 — Material de conocimiento activo

Origen:

```text
Paper2Agent
```

---

# 84. Diferencia

La idea transforma:

```text
material
```

en:

```text
material
+
operaciones
+
interfaces
+
agente
```

---

# 85. Estado interno

Nuestros materiales actualmente son principalmente:

```text
contenidos
+
relaciones
+
metadatos
```

---

# 86. Falta de evidencia

No se ha demostrado que necesiten convertirse en agentes u objetos ejecutables.

---

# 87. Resultado O-EXT-10

```text
O-EXT-10
→ R-F

GATE-EXT-01
→ NO PASA
```

Se conserva como referencia exploratoria.

---

# 88. Comparación por productos

La reducción anterior permite ahora comparar productos sin confundirlos con capacidades completas.

---

# 89. Obsidian

Lo que ya compartimos:

```text
archivos
enlaces
recuperación
material heterogéneo
localidad
```

Lo potencialmente distinto:

```text
operatividad visual futura
colaboración futura
```

Resultado:

```text
REFERENTE OPERATIVO ACTUAL
NO DERIVA NUEVA CAPACIDAD
```

---

# 90. Heptabase

Aporta principalmente:

```text
estructura visual operativa
+
IA sobre esa estructura
```

Resultado:

```text
FUERTE REFERENTE DE EXPERIENCIA
NO PASA GATE POR SÍ MISMO
```

---

# 91. Tana

Aporta:

```text
objetos tipados
+
campos
+
consultas
+
MCP
```

Resultado:

```text
O-EXT-02
→ PASA

MCP
→ NO PASA
```

---

# 92. Capacities

Aporta:

```text
objetos
+
IA externa desacoplada
```

Resultado:

```text
REFERENTE ARQUITECTÓNICO
SIN DERIVACIÓN ACTUAL DE MCP
```

---

# 93. Gemini Notebook

Aporta:

```text
multimodalidad
+
grounding
+
citas
+
navegación a fuente
```

Resultado:

```text
O-EXT-04
→ PASA
```

Es uno de los productos externos de mayor relevancia conceptual.

---

# 94. Elicit

Aporta:

```text
IA
→ operaciones separadas
→ evidencia verificable
```

Resultado:

```text
O-EXT-05
→ PASA CON PRIORIDAD MEDIA
```

---

# 95. ResearchRabbit / Connected Papers

Aportan:

```text
descubrimiento de relaciones no declaradas
```

Resultado:

```text
O-EXT-06
→ NO PASA TODAVÍA
```

---

# 96. Notion

Aporta:

```text
estructura
+
búsqueda
+
agentes
+
fuentes conectadas
```

Resultado:

```text
REFERENTE DE INTEGRACIÓN
NO DERIVA NUEVA CAPACIDAD
```

---

# 97. Glean

Aporta:

```text
conocimiento distribuido
+
permisos
+
búsqueda organizacional
```

Resultado:

```text
PERMISOS
→ NO DERIVADOS

CUENTAS
→ NO DERIVADAS
```

---

# 98. Perplexity Projects

Aporta:

```text
persistencia de contexto
```

Resultado:

```text
PROBLEMA AMPLIAMENTE ABSORBIDO POR NUESTRA METODOLOGÍA
```

---

# 99. Ranking de relevancia para el proyecto

## Nivel 1 — Referentes directos

```text
Gemini Notebook
Heptabase
Tana
Obsidian
Capacities
```

---

# 100. Nivel 2 — Referentes funcionales

```text
Elicit
Notion
Perplexity Projects
ResearchRabbit
Connected Papers
```

---

# 101. Nivel 3 — Referentes organizacionales

```text
Glean
```

principalmente para necesidades futuras de:

```text
permisos
organización
conocimiento distribuido
```

si alguna vez se derivan.

---

# 102. Infraestructura prioritaria

```text
PROV-O
Web Annotation
RO-Crate
```

---

# 103. Infraestructura en radar

```text
MCP
CRDT
local-first
GraphRAG
Agentic RAG
```

---

# 104. Primera reducción global

De los:

```text
5 hallazgos H-EXT
10 oportunidades O-EXT
```

no pasan todos a profundización.

---

# 105. Candidatos que pasan GATE-EXT-01

Se consolidan:

```text
C-EXT-01
→ PROV-O

C-EXT-02
→ Web Annotation

C-EXT-03
→ RO-Crate

C-EXT-04
→ objetos tipados

C-EXT-05
→ evidencia → trayectoria

C-EXT-06
→ operaciones de IA verificables
```

---

# 106. Candidatos que NO pasan actualmente

```text
representación visual operativa
separación plataforma / IA como capacidad
relaciones sugeridas
IA sobre estructura como línea independiente
contexto persistente de proyecto
MCP
materiales activos
CRDT
sync
backend
cuentas
permissions
```

---

# 107. Importancia de la reducción

Esto evita transformar:

```text
15 hallazgos y oportunidades
```

en:

```text
15 líneas de producto
```

La reducción produce únicamente:

```text
6 candidatos de profundización
```

y algunos están estrechamente relacionados.

---

# 108. Reducción adicional por dependencia

Los seis candidatos no son independientes.

---

# 109. Grupo P — Procedencia

```text
C-EXT-01
PROV-O

C-EXT-05
evidencia → trayectoria
```

podrían formar una única investigación.

---

# 110. Grupo A — Anotación granular

```text
C-EXT-02
Web Annotation
```

puede probarse directamente sobre:

```text
C1
```

---

# 111. Grupo R — Research Object

```text
C-EXT-03
RO-Crate
```

también puede probarse directamente sobre:

```text
C1
```

---

# 112. Grupo O — Objetos estructurados

```text
C-EXT-04
objetos tipados
```

puede probarse sobre una entidad existente del corpus.

---

# 113. Grupo IA — IA verificable

```text
C-EXT-06
operaciones de IA verificables
```

no debería comenzar todavía con una arquitectura.

Debería comenzar con:

```text
una tarea
+
una entrada
+
una salida esperada
+
evidencia
+
criterio de error
```

---

# 114. Orden comparativo resultante

Por combinación de:

```text
relevancia
evidencia interna
coste de prueba
posibilidad de falsación
riesgo de sobrediseño
```

se propone provisionalmente:

```text
1. PROV-O + evidencia → trayectoria

2. Web Annotation aplicado a C1

3. RO-Crate aplicado a C1

4. objetos tipados

5. operaciones de IA verificables
```

---

# 115. Razón del primer lugar de PROV-O

PROV-O afecta a una cuestión transversal ya presente en múltiples líneas:

```text
C1
RVM
RCA
Q03
Q04
Q05
documentos de derivación
```

La procedencia no pertenece únicamente a un caso aislado.

---

# 116. Razón del segundo lugar de Web Annotation

Dispone de:

```text
caso real existente
+
material real
+
relaciones reales
+
estándar real
```

y la prueba puede realizarse sin modificar el producto.

---

# 117. Razón del tercer lugar de RO-Crate

También posee un caso real:

```text
C1-material-trabajo
```

pero su pregunta se refiere más a:

```text
portabilidad
empaquetado
interoperabilidad
```

que a una pérdida actualmente central.

---

# 118. Razón del cuarto lugar de objetos tipados

Puede resultar profundamente relevante.

Sin embargo, introducir prematuramente:

```text
ontología
modelo de objetos
base estructurada
```

podría cambiar gran parte del sistema documental sin necesidad demostrada.

Primero debe probarse en pequeño.

---

# 119. Razón del quinto lugar de IA

La IA es transversal y atractiva, pero presenta el mayor riesgo de:

```text
abrir demasiadas posibilidades
```

antes de saber:

```text
qué tarea concreta necesita ayuda
```

Por ello debe estudiarse después de clarificar estructura y procedencia.

---

# 120. Qué NO se deriva de esta matriz

No se deriva:

```text
P6
nuevo Product Value
nueva capacidad
nueva Realization
Architecture
Implementation
```

---

# 121. Tampoco se deriva

```text
knowledge graph
RDF store
triplestore
base de datos
backend
API
MCP server
CRDT
sync
cuentas
roles
permisos
agentes múltiples
```

---

# 122. GATE-EXT-01 — Resultado global

Resultado:

```text
GATE-EXT-01
→ SUPERADO SELECTIVAMENTE
```

Esto significa:

```text
algunos hallazgos externos
→ justifican profundización
```

pero:

```text
panorama externo completo
→ NO se transforma en roadmap
```

---

# 123. Candidatos que superan el gate

```text
H-EXT-01 / C-EXT-01
→ PROV-O + procedencia

H-EXT-02 / C-EXT-02
→ Web Annotation

H-EXT-03 / C-EXT-03
→ RO-Crate

O-EXT-02 / C-EXT-04
→ objetos tipados

O-EXT-04 / C-EXT-05
→ evidencia → trayectoria

O-EXT-05 / C-EXT-06
→ IA verificable
```

---

# 124. Consolidación de dependencias

Para evitar investigaciones duplicadas:

```text
C-EXT-01
+
C-EXT-05
→ una sola línea inicial
```

Por tanto, quedan realmente:

```text
L-EXT-01
procedencia y trayectoria

L-EXT-02
anotación granular

L-EXT-03
Research Object portable

L-EXT-04
objetos tipados

L-EXT-05
IA verificable
```

---

# 125. Línea L-EXT-01

Título provisional:

> **Procedencia explícita y reconstrucción de trayectoria**

Objeto inicial:

```text
PROV-O
+
O-EXT-04
```

Pregunta:

> ¿Puede un modelo estándar de procedencia representar suficientemente las trayectorias ya existentes en el proyecto y permitir reconstruir por qué un resultado existe?

---

# 126. Línea L-EXT-02

Título provisional:

> **Anotación granular interoperable**

Objeto:

```text
Web Annotation
+
C1
```

Pregunta:

> ¿Puede C1 representarse mediante Web Annotation sin pérdida relevante respecto de sus relaciones actuales?

---

# 127. Línea L-EXT-03

Título provisional:

> **Portabilidad del material de trabajo**

Objeto:

```text
RO-Crate
+
C1-material-trabajo
```

Pregunta:

> ¿Puede el material de trabajo convertirse en un Research Object portable preservando sus relaciones relevantes?

---

# 128. Línea L-EXT-04

Título provisional:

> **Entidades del proyecto como objetos tipados**

Objeto inicial:

```text
F-PROS-MU-02
```

Pregunta:

> ¿Qué se gana, qué se pierde y qué complejidad aparece al representar una entidad documental actual como objeto estructurado?

---

# 129. Línea L-EXT-05

Título provisional:

> **Operaciones de IA verificables**

Pregunta:

> ¿Qué tarea concreta del proyecto puede realizar o asistir una IA de forma verificable, trazable y reversible?

---

# 130. Orden recomendado de profundización

```text
L-EXT-01
↓
L-EXT-02
↓
L-EXT-03
↓
reevaluación
```

Sólo después:

```text
L-EXT-04
L-EXT-05
```

si siguen siendo pertinentes.

---

# 131. Nueva regla de parada

No debe aprobarse ahora automáticamente:

```text
45
46
47
48
49
```

como bloque completo.

Debe abrirse únicamente:

```text
primera línea prioritaria
```

y reevaluar después de su resultado.

---

# 132. Próxima actuación justificable

La primera profundización mejor fundada es:

```text
L-EXT-01
→ procedencia explícita y reconstrucción de trayectoria
```

por reunir:

```text
problema transversal ya presente
+
estándar existente
+
posibilidad de comparación
+
potencial reducción de modelo propietario
+
relación directa con evidencia → trayectoria
```

---

# 133. Documento candidato siguiente

Si se acepta esta reducción:

```text
45-ESTUDIO_PROV_O_Y_RECONSTRUCCION_DE_TRAYECTORIA.md
```

---

# 134. Qué deberá evitar 45

No deberá comenzar diseñando:

```text
ontología propia
RDF
triplestore
API
grafo
base de datos
```

Deberá comenzar únicamente por:

```text
casos existentes
→ mapear a PROV-O
→ identificar correspondencias
→ identificar pérdidas
→ identificar elementos sobrantes
```

---

# 135. Casos sugeridos para 45

Como mínimo:

```text
CASO-P1
V0 → T1 → T2

CASO-P2
Q04 → F-PROS-MU-02 → Q05 → reducción

CASO-P3
una aportación A → antecedente transferible → continuación B
```

---

# 136. Criterio de éxito de 45

No será:

```text
PROV-O funciona
```

sino poder determinar:

```text
qué representa bien

qué representa parcialmente

qué no representa

qué obliga a reinterpretar

qué mejora realmente

qué complejidad añade
```

---

# 137. Criterio de fracaso productivo

También será un resultado válido:

```text
PROV-O
→ no adecuado para nuestras trayectorias
```

si la comparación lo demuestra.

---

# 138. Estado de la investigación externa

Después de esta matriz:

```text
43
→ PANORAMA EXTERNO DOCUMENTADO

44
→ REDUCCIÓN COMPARATIVA REALIZADA

GATE-EXT-01
→ SUPERADO SELECTIVAMENTE
```

---

# 139. Estado estratégico

La superación selectiva de `GATE-EXT-01`:

```text
NO
```

reabre todavía:

```text
GATE-NH-01
```

porque:

```text
oportunidad de investigación
≠
pérdida humana independiente demostrada
```

---

# 140. Relación entre gates

```text
GATE-EXT-01
→ permite profundizar una evidencia externa
```

mientras que:

```text
GATE-NH-01
→ permite justificar una nueva derivación estratégica
```

No deben confundirse.

---

# 141. Estado vigente de GATE-NH-01

```text
GATE-NH-01
→ SUPERADO históricamente en Q04

F-PROS-MU-02
→ REDUCIDA posteriormente en Q05

residuo humano independiente post-Q05
→ NO DEMOSTRADO

nueva candidata actual
→ NO IDENTIFICADA
```

Por tanto:

```text
derivación estratégica
→ CONTINÚA CERRADA
```

---

# 142. Conclusión principal

La investigación externa no ha demostrado que el proyecto necesite copiar a sus referentes.

Ha producido algo más útil:

```text
separación entre
    funciones atractivas
    y
    hallazgos realmente pertinentes
```

---

# 143. Conclusión sobre estándares

Los tres estándares con mayor relevancia inmediata son:

```text
1. PROV-O
2. Web Annotation
3. RO-Crate
```

porque se pueden contrastar contra casos que ya existen.

---

# 144. Conclusión sobre productos

Los productos de mayor valor comparativo actual son:

```text
Gemini Notebook
Heptabase
Tana
Capacities
Obsidian
```

pero por razones diferentes.

No existe fundamento para imitarlos como paquetes completos.

---

# 145. Conclusión sobre IA

La investigación no justifica:

```text
añadir IA
```

de forma genérica.

Sí justifica mantener como línea candidata:

```text
IA
→ tarea delimitada
→ resultado comprobable
→ evidencia
→ revisión humana
```

---

# 146. Conclusión sobre MCP

```text
MCP
→ relevante
→ prometedor
→ no derivado
```

Debe permanecer como referencia hasta que exista una interfaz o conjunto de operaciones que realmente necesiten interoperabilidad agéntica.

---

# 147. Conclusión sobre CRDT/local-first

```text
local-first
→ conceptualmente relevante

CRDT
→ técnicamente relevante

necesidad actual
→ NO DEMOSTRADA
```

Q04/Q05 no derivan esas tecnologías.

---

# 148. Resultado final de 44

```text
MATRIZ COMPARATIVA
→ CERRADA

15 candidatos iniciales
→ REDUCIDOS

6 candidatos pasan GATE-EXT-01

6 candidatos
→ agrupados en 5 líneas

primera línea prioritaria
→ L-EXT-01

nuevo horizonte
→ NO DERIVADO

derivación estratégica
→ CONTINÚA CERRADA
```

---

# 149. Próxima actuación justificable

> **Profundizar únicamente L-EXT-01 — procedencia explícita y reconstrucción de trayectoria — mediante una comparación limitada de casos existentes contra PROV-O.**

---

# 150. Regla de continuidad

No abrir simultáneamente:

```text
L-EXT-02
L-EXT-03
L-EXT-04
L-EXT-05
```

Después de L-EXT-01 deberá reevaluarse:

```text
qué aprendimos
qué candidatos siguen vivos
si cambia el orden
si alguna línea queda absorbida
```

---

# 151. Estado final

> **44 — MATRIZ COMPARATIVA CERRADA; GATE-EXT-01 SUPERADO SELECTIVAMENTE; L-EXT-01 PRIORIZADA; SIN NUEVO HORIZONTE DERIVADO.**
