# External Radar

## Estado

**RADAR EXTERNO ACTIVO COMO ARTEFACTO DE REFERENCIA — NO CONSTITUYE ROADMAP NI DERIVACIÓN ESTRATÉGICA**

---

# 1. Propósito

Este documento mantiene un radar operativo de mecanismos, estándares, enfoques y capacidades externas que pueden resultar pertinentes para el proyecto.

Su función no consiste en determinar qué debe implementarse.

Su función consiste en conservar de forma sintética:

- qué oportunidades externas han sido identificadas;
- cuáles han sido examinadas;
- qué resultado produjo su examen;
- qué responsabilidad podrían asumir;
- cuáles son sus límites;
- bajo qué condición tendría sentido reabrirlas.

El radar evita dos pérdidas simétricas:

```text
olvidar conocimiento externo ya adquirido
```

y:

```text
convertir tecnología disponible
en necesidad de producto no demostrada
```

---

# 2. Regla fundamental

La presencia de una tecnología, estándar, arquitectura, modelo o capacidad en este radar no implica:

```text
roadmap
capacidad derivada
Product Value
prioridad
Realization
Architecture
Implementation
dependencia tecnológica
decisión de adopción
nuevo horizonte estratégico
```

Por tanto:

```text
ESTAR EN EL RADAR
≠
ESTAR DERIVADO
```

y:

```text
RESULTADO EXTERNO FAVORABLE
≠
NECESIDAD ACTUAL DEL PRODUCTO
```

## 2.1. Nivel de autoridad

`EXTERNAL_RADAR.md` pertenece al cuerpo estratégico del proyecto en sentido amplio, pero no constituye una fuente estratégica canónica de derivación.

Su nivel de autoridad es:

```text
REFERENCIA ESTRATÉGICA AUXILIAR
→ operativa
→ informativa
→ no normativa para derivación
```

El radar se encuentra subordinado a los documentos que establecen o consolidan el marco estratégico del proyecto, entre ellos:

```text
00-PROJECT_CHARTER.md
→ marco constitutivo

01-PLATFORM_VISION.md
→ horizonte de producto

11-ESTRATEGIA_DE_CONVERGENCIA_AL_PRODUCTO_FINAL.md
→ estrategia de convergencia

12-DELIMITACION_DE_V1.md
→ alcance de V1

13-MAPA_DE_CAPACIDADES_DE_V1.md
→ capacidades de V1

14-MAPA_DE_DEPENDENCIAS_DE_V1.md
→ dependencias de V1

15-CRITERIOS_DE_FINALIZACION_DE_V1.md
→ criterios de finalización

16-ESTADO_ACTUAL_DE_V1.md
→ estado consolidado de V1

29-TABLERO_MAESTRO_DEL_PROYECTO.md
→ estado estratégico vigente e integración de resultados
```

Por tanto, una contradicción entre el radar y una fuente estratégica canónica no deberá resolverse otorgando prioridad al radar por ser más reciente.

Deberá revisarse la entrada del radar y determinar si:

```text
la oportunidad externa
→ continúa siendo compatible con el marco estratégico vigente

o

el marco estratégico
→ ha sido modificado legítimamente mediante una derivación independiente
```

La presencia de una entrada en este documento tampoco puede utilizarse como fundamento suficiente para modificar por sí sola:

```text
PROJECT_CHARTER
PLATFORM_VISION
Product Value
V1
capacidades
criterios
roadmap
Realization
Architecture
Implementation
nuevo horizonte estratégico
```

En síntesis:

```text
EXTERNAL_RADAR
→ conserva conocimiento externo reutilizable

DOCUMENTOS ESTRATÉGICOS CANÓNICOS
→ establecen el marco y los compromisos del proyecto

TABLERO MAESTRO
→ consolida el estado estratégico vigente
```

---

# 3. Dirección de derivación

La dirección válida es:

```text
necesidad, pérdida o diferencia propia demostrada
→ identificación del mecanismo externo pertinente
→ recuperación del conocimiento conservado en el radar
→ prueba específica
→ eventual derivación
```

No deberá utilizarse la dirección inversa:

```text
tecnología o estándar disponible
→ búsqueda de una función que justifique incorporarlo
```

La disponibilidad de una solución no demuestra la existencia del problema que resolvería.

---

# 4. Relación con otros documentos

Este radar no sustituye:

```text
29-TABLERO_MAESTRO_DEL_PROYECTO.md
→ estado estratégico vigente

43-PANORAMA_EXTERNO_PLATAFORMAS_ESTANDARES_E_IA.md
→ exploración amplia del panorama externo

44-MATRIZ_COMPARATIVA_PANORAMA_EXTERNO_VS_PROYECTO.md
→ comparación y priorización de oportunidades externas

45–53
→ estudios y pruebas específicas de las líneas priorizadas
```

La relación es:

```text
43
→ descubre

44
→ compara y prioriza

45–53
→ somete a prueba

EXTERNAL_RADAR
→ conserva el resultado reutilizable

29
→ determina el estado estratégico vigente
```

---

# 5. Criterio de entrada

Un elemento puede incorporarse al radar cuando exista fundamento suficiente para conservarlo como referencia futura.

Ese fundamento puede proceder, entre otros casos, de:

- una comparación externa relevante;
- un estándar compatible con problemas ya observados;
- una tecnología que permita formular una diferencia comprobable;
- un mecanismo que haya superado una prueba conceptual o experimental;
- una capacidad externa cuya posible utilidad pueda delimitarse sin derivarla como requisito.

La novedad, popularidad o disponibilidad comercial no constituyen por sí solas criterio suficiente.

---

# 6. Estados posibles del radar

Las entradas podrán adoptar, entre otros, los siguientes estados:

```text
IDENTIFICADA
→ existe una oportunidad externa potencial

PRIORIZADA
→ existe fundamento para examinarla

EN ESTUDIO
→ existe una investigación o prueba abierta

CERRADA — FAVORABLE LIMITADO
→ demostró utilidad en un alcance delimitado

CERRADA — INSUFICIENTE
→ no demostró la capacidad examinada

REDUCIDA
→ su diferencia respecto del proyecto dejó de ser relevante

DESCARTADA EN EL ESTADO ACTUAL
→ no existe fundamento para continuar su examen
```

Un estado favorable no equivale a adopción.

---

# 7. Regla de reactivación

Una línea cerrada sólo deberá reabrirse si aparece una nueva necesidad propia que:

1. sea suficientemente demostrada;
2. sea pertinente para la responsabilidad cubierta por la línea;
3. no esté ya suficientemente resuelta;
4. permita formular una prueba concreta;
5. pueda modificar una decisión actualmente consolidada.

La reactivación deberá partir de la nueva evidencia, no de la mera existencia previa de la entrada en el radar.

---

# 8. Radar consolidado

## L-EXT-01 — PROV-O

**Estado:**

```text
CERRADA — FAVORABLE LIMITADO
```

**Responsabilidad examinada:**

```text
procedencia
+
reconstrucción de trayectoria
```

**Resultado principal:**

PROV-O puede proporcionar una capa mínima de vocabulario de procedencia compatible con trayectorias ya existentes en el proyecto sin sustituir los conceptos propios del dominio.

Vocabulario mínimo cuya utilidad fue demostrada en el alcance probado:

```text
Entity
Activity
used
wasGeneratedBy
wasDerivedFrom
specializationOf
```

**Límite:**

No se derivó:

```text
RDF obligatorio
OWL
SPARQL
triplestore
grafo general del producto
ontología completa
```

La semántica de estados, pérdidas, diferencias, correspondencias y decisiones continúa perteneciendo al dominio del proyecto.

**Documentos principales:**

```text
45-ESTUDIO_PROV_O_Y_RECONSTRUCCION_DE_TRAYECTORIA.md
46-RESULTADO_P_PROV_01_REPRESENTACION_MINIMA_V0_T1_T2.md
47-RESULTADO_P_PROV_02_Y_CIERRE_L_EXT_01.md
```

**Condición de reactivación:**

```text
aparece una necesidad propia
de reconstrucción explícita de procedencia o trayectoria
que la representación actual no pueda satisfacer suficientemente
```

---

## L-EXT-02 — Web Annotation

**Estado:**

```text
CERRADA — FAVORABLE LIMITADO
```

**Responsabilidad examinada:**

```text
anclaje granular
de partes concretas de materiales
```

**Resultado principal:**

Los mecanismos de Web Annotation permiten representar de forma adecuada distintos tipos de localización:

```text
SpecificResource + FragmentSelector
→ fragmentos temporales

SpecificResource + TextQuoteSelector
→ fragmentos textuales

Resource completo
→ cuando el recurso completo constituye el extremo pertinente
```

**Límite:**

Web Annotation no sustituye el concepto propio de:

```text
Correspondence
```

Los Selectors indican qué parte participa.

El dominio continúa determinando:

```text
qué extremos están relacionados
qué significa la relación
por qué es pertinente
```

Permanece además una condición transversal:

```text
identidad suficientemente estable de la fuente
```

sin haberse derivado una solución tecnológica concreta para ella.

**Documentos principales:**

```text
48-CONSOLIDACION_P_WA_01_P_WA_02_Y_CONTINUIDAD_L_EXT_02.md
49-RESULTADO_P_WA_03_Y_CIERRE_L_EXT_02.md
```

**Condición de reactivación:**

```text
aparece una necesidad propia
de localizar de forma estable y verificable
partes concretas de materiales
```

---

## L-EXT-03 — RO-Crate

**Estado:**

```text
CERRADA — FAVORABLE LIMITADO
```

**Responsabilidad examinada:**

```text
composición
autodescripción
portabilidad
identidad declarada de una unidad de trabajo
```

**Resultado principal:**

RO-Crate puede representar un conjunto heterogéneo de materiales como unidad portable y autodescriptiva sin exigir que todos los recursos externos se incorporen físicamente al paquete.

En el alcance probado permitió distinguir:

```text
payload físico
→ incluido en la unidad

fuentes externas
→ descritas como entidades relacionadas

identidad de la unidad
→ declarada independientemente de su ruta local
```

**Límite:**

La prueba no demostró por sí sola:

```text
autenticidad
autoridad
firma
versionado completo
repositorio
sincronización
persistencia global de identificadores
```

Tampoco convierte RO-Crate en mecanismo de:

```text
procedencia
anclaje granular
semántica de dominio
```

**Documentos principales:**

```text
50-RESULTADO_P_ROC_01_Y_DERIVACION_P_ROC_02.md
51-RESULTADO_P_ROC_02_Y_CIERRE_L_EXT_03.md
```

**Condición de reactivación:**

```text
aparece una necesidad propia
de transportar, conservar o intercambiar
una composición heterogénea de materiales
como unidad autodescriptiva
```

---

## L-EXT-04 — Objetos tipados

**Estado:**

```text
CERRADA — FAVORABLE LIMITADO
```

**Responsabilidad examinada:**

```text
estructura semántica consultable
de entidades del dominio
```

**Resultado principal:**

Una entidad documental actual puede representarse como objeto estructurado manteniendo:

```text
identidad
formulación
contextos históricos
estados contextuales
```

y permitiendo consultas estructuradas que actualmente exigen lectura e interpretación documental.

La prueba sobre `F-PROS-MU-02` mostró que pueden distinguirse:

```text
Difference
DifferenceState
context
methodologicalState
```

sin imponer un estado fijo a la diferencia general ni duplicar la semántica de PROV-O.

**Límite principal:**

Una representación persistente introduciría un riesgo nuevo:

```text
documentos
+
objetos estructurados
→ posible duplicación de autoridad
→ posible desincronización
```

Por ello no se derivó un modelo general de objetos.

**Documento principal:**

```text
52-RESULTADO_P_TYP_01_Y_CIERRE_L_EXT_04.md
```

**Condición de reactivación:**

```text
aparece una necesidad propia
de consultar, validar, relacionar o navegar
entidades del dominio de forma estructurada
y el coste documental actual resulta insuficiente
```

---

## L-EXT-05 — IA verificable

**Estado:**

```text
CERRADA — FAVORABLE LIMITADO
```

**Responsabilidad examinada:**

```text
asistencia mediante propuestas
verificables, trazables y reversibles
```

**Resultado principal:**

Se demostró que puede formularse al menos una operación de IA bajo el contrato:

```text
entrada delimitada
→ IA propone una relación o se abstiene
→ identifica evidencia
→ justifica
→ resultado independiente permite verificar
→ humano valida
→ sistema consolida
```

La prueba incluyó:

```text
P-AI-01-A
→ control negativo documental
→ abstención ante evidencia insuficiente

P-AI-01-B
→ control positivo prospectivo ciego
→ propuesta correcta confirmada mediante clave independiente
```

**Principio conservado:**

```text
IA
→ propone

evidencia
→ permite comprobar

humano
→ valida

sistema
→ consolida
```

**Límite:**

No se demostró:

```text
fiabilidad general
autonomía decisoria
necesidad de agentes
necesidad de API
necesidad de RAG
necesidad de memoria autónoma
necesidad de integrar un LLM en el producto
```

La procedencia relevante debe permanecer fuera de la memoria implícita del modelo.

**Documento principal:**

```text
53-RESULTADO_P_AI_01_Y_CIERRE_L_EXT_05.md
```

**Condición de reactivación:**

```text
aparece una tarea propia concreta
cuya asistencia mediante IA
pueda formularse con:
entrada
salida esperada
evidencia
criterio de error
abstención
verificación
reversibilidad
```

---

# 9. Separación de responsabilidades

El resultado combinado de las cinco líneas permite conservar la siguiente separación:

```text
PROV-O
→ procedencia y trayectoria

Web Annotation
→ localización granular

RO-Crate
→ composición, autodescripción y portabilidad

objetos tipados
→ estructura semántica consultable

IA verificable
→ propuesta asistida y comprobable

dominio del proyecto
→ pertinencia
→ función
→ pérdida humana
→ Difference
→ Correspondence
→ decisiones
→ continuidad
→ consolidación
```

Ninguna de estas capas sustituye automáticamente a las demás.

---

# 10. Estado estratégico asociado

El cierre favorable limitado de las cinco líneas no produjo:

```text
nueva pérdida humana independiente
nuevo residuo humano independiente
nueva candidata para GATE-NH-01
P6
nueva capacidad
nueva Realization
Architecture
Implementation
nuevo horizonte
```

Por tanto, el radar es compatible con el estado consolidado:

```text
DERIVACIÓN ESTRATÉGICA
→ CERRADA

SIGUIENTE HORIZONTE
→ NO DERIVADO

SUFICIENCIA SIN SIGUIENTE HORIZONTE DERIVADO
→ MANTENIDA
```

El estado estratégico vigente deberá consultarse en:

```text
29-TABLERO_MAESTRO_DEL_PROYECTO.md
```

---

# 11. Incorporación de futuras entradas

Una futura oportunidad externa podrá añadirse al radar sin necesidad de abrir inmediatamente una investigación.

La entrada mínima deberá registrar:

```text
identificador
nombre
origen
responsabilidad potencial
relación con el proyecto
estado
evidencia disponible
riesgo de solapamiento
condición de reactivación
documentos relacionados
```

Cuando no exista evidencia suficiente para algo más, el estado deberá permanecer:

```text
IDENTIFICADA
```

La incorporación al radar no deberá utilizarse como argumento para su propia adopción.

---

# 12. Regla de mantenimiento

El radar deberá actualizarse cuando ocurra alguno de estos hechos:

```text
se identifica una oportunidad externa relevante
se abre una investigación sobre una entrada
se obtiene nueva evidencia
se cierra una prueba
cambia el estado de una línea
aparece una necesidad propia que reactiva una entrada
una entrada deja de ser pertinente
```

No necesita actualizarse simplemente porque aparezca una nueva versión comercial, biblioteca o tendencia, salvo que ese cambio afecte materialmente a una cuestión ya pertinente para el proyecto.

---

# 13. Punto de reanudación del radar

Estado actual:

```text
L-EXT-01
→ CERRADA — FAVORABLE LIMITADO

L-EXT-02
→ CERRADA — FAVORABLE LIMITADO

L-EXT-03
→ CERRADA — FAVORABLE LIMITADO

L-EXT-04
→ CERRADA — FAVORABLE LIMITADO

L-EXT-05
→ CERRADA — FAVORABLE LIMITADO

líneas externas actualmente abiertas
→ NINGUNA

entrada externa que obligue a nueva derivación
→ NINGUNA
```

El radar permanece disponible como memoria operativa.

La siguiente entrada o reactivación deberá proceder de nueva evidencia suficientemente pertinente, no de la necesidad de mantener actividad.
