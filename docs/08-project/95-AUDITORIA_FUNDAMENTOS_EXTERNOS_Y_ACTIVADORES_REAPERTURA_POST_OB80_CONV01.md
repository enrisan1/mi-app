# Auditoría de fundamentos externos y activadores de reapertura post-OB-80-CONV-01

**Fecha:** 18/11/2026  
**Estado:** CERRADA — no se identifica fundamento actual suficiente para reaplicar el Manual 17; se precisan activadores externos de reapertura futura.  
**Precedentes:** `43`, `44`, estudios `45–53`, `EXTERNAL_RADAR.md`, `94-REAPLICACION_MANUAL17_POST_OB80_CONV01_Y_ESTADO_ESTABLE.md`.

---

# 1. Objeto

Esta auditoría parte de un extracto de propuesta de investigación externa redactado días antes y contrasta sus líneas propuestas con:

- las investigaciones externas efectivamente realizadas;
- sus cierres posteriores;
- el estado estratégico vigente;
- las condiciones actuales del Manual 17.

La pregunta es:

> ¿Conserva aquel programa externo algún residuo, diferencia o fundamento que permita reaplicar ahora el Manual 17 y abrir una actuación estratégica?

La auditoría distingue entre:

~~~text
programa de investigación histórico
≠
obligación actualmente pendiente

resultado externo favorable
≠
necesidad actual de Product

condición de reactivación futura
≠
fundamento actual suficiente
~~~

---

# 2. Reconstrucción del programa externo propuesto

El extracto proponía una secuencia aproximada:

~~~text
investigación externa
↓
panorama
↓
matriz comparativa
↓
selección de hallazgos
↓
profundización
↓
contraste con el proyecto
↓
reducción
↓
pruebas pequeñas
↓
decisión
~~~

Las líneas principales sugeridas eran:

1. PROV-O / procedencia;
2. Web Annotation / anotación granular;
3. RO-Crate / portabilidad;
4. objetos tipados;
5. MCP / agentes;
6. capacidades de IA verificables;
7. comparación empírica con sistemas externos;
8. radar externo permanente.

La propuesta establecía además una restricción metodológica correcta:

~~~text
lo interesante
≠
lo derivado
~~~

y subordinaba cualquier adopción a una diferencia propia suficientemente demostrada.

---

# 3. Qué parte del programa fue efectivamente consumada

La propuesta no permanece como programa pendiente.

Posteriormente se realizaron:

~~~text
43
→ PANORAMA EXTERNO DOCUMENTADO

44
→ MATRIZ COMPARATIVA CERRADA

GATE-EXT-01
→ SUPERADO SELECTIVAMENTE
~~~

La reducción de 44 produjo cinco líneas reales de profundización:

~~~text
L-EXT-01
→ procedencia y trayectoria / PROV-O

L-EXT-02
→ anotación granular / Web Annotation

L-EXT-03
→ Research Object portable / RO-Crate

L-EXT-04
→ objetos tipados

L-EXT-05
→ IA verificable
~~~

Las cinco fueron posteriormente ejecutadas y cerradas como:

~~~text
CERRADA — FAVORABLE LIMITADO
~~~

Por tanto, no permanece una obligación histórica del tipo:

~~~text
"realizar 43–53"
~~~

porque esa cadena ya fue consumada en su parte pertinente.

---

# 4. Diferencia entre GATE-EXT-01 y Manual 17

`GATE-EXT-01` respondió:

> ¿Merece este hallazgo externo una profundización específica?

El Manual 17 / `GATE-NH-01` responde:

> ¿Existe una necesidad, pérdida o diferencia propia suficientemente demostrada que justifique una nueva derivación estratégica?

Por tanto:

~~~text
GATE-EXT-01 superado
≠
GATE-NH-01 abierto

estándar útil
≠
necesidad de producto

mecanismo externo viable
≠
obligación estratégica
~~~

El documento 44 ya dejó explícita esta separación.

---

# 5. Auditoría de L-EXT-01 — Procedencia y trayectoria

## 5.1 Resultado conservado

PROV-O demostró utilidad limitada para representar:

- entidades;
- actividades;
- uso;
- generación;
- derivación;
- especialización.

No se derivó:

- RDF obligatorio;
- OWL;
- SPARQL;
- triplestore;
- grafo general;
- ontología completa.

## 5.2 Condición de reactivación

La condición conservada en el radar es:

~~~text
aparece una necesidad propia
de reconstrucción explícita de procedencia o trayectoria
que la representación actual no pueda satisfacer suficientemente
~~~

## 5.3 Contraste actual

No se ha identificado después de los cierres una situación humana concreta en la que una actuación pertinente quede bloqueada o degradada porque la procedencia o trayectoria actuales sean insuficientes.

Resultado:

~~~text
L-EXT-01
→ CERRADA — FAVORABLE LIMITADO

activador actual
→ NO SATISFECHO

fundamento Manual 17
→ NO
~~~

---

# 6. Auditoría de L-EXT-02 — Anotación granular

## 6.1 Resultado conservado

Web Annotation mostró utilidad para localizar de forma explícita:

- fragmentos temporales;
- fragmentos textuales;
- recursos completos.

No sustituye la semántica propia de `Correspondence`.

## 6.2 Condición de reactivación

~~~text
aparece una necesidad propia
de localizar de forma estable y verificable
partes concretas de materiales
~~~

## 6.3 Contraste actual

No existe evidencia nueva de una tarea humana que fracase por falta de localización granular estable y verificable.

Resultado:

~~~text
L-EXT-02
→ CERRADA — FAVORABLE LIMITADO

activador actual
→ NO SATISFECHO

fundamento Manual 17
→ NO
~~~

---

# 7. Auditoría de L-EXT-03 — Portabilidad / RO-Crate

## 7.1 Resultado conservado

RO-Crate mostró que una composición heterogénea puede representarse como unidad portable y autodescriptiva, distinguiendo:

- payload físico;
- fuentes externas;
- identidad declarada de la unidad.

No demostró por sí solo autenticidad, autoridad, firma, versionado completo, repositorio o sincronización.

## 7.2 Condición de reactivación

~~~text
aparece una necesidad propia
de transportar, conservar o intercambiar
una composición heterogénea de materiales
como unidad autodescriptiva
~~~

## 7.3 Relación con IA-80-E

Existe una proximidad conceptual con:

~~~text
IA-80-E
→ trasladar una obra entre herramientas/personas
  sin perder contexto pertinente
~~~

Pero la combinación:

~~~text
RO-Crate viable
+
IA-80-E conservada
~~~

no demuestra por sí sola una pérdida actual.

Falta:

~~~text
traslado real
+
pérdida concreta
+
insuficiencia no absorbida por PV-006 / H-POST
~~~

Resultado:

~~~text
L-EXT-03
→ CERRADA — FAVORABLE LIMITADO

IA-80-E
→ NO activada

fundamento Manual 17
→ NO
~~~

---

# 8. Auditoría de L-EXT-04 — Objetos tipados

## 8.1 Resultado conservado

La prueba mostró que una entidad documental puede representarse estructuradamente conservando:

- identidad;
- formulación;
- contexto;
- estados contextuales.

También reveló un riesgo:

~~~text
documentos
+
objetos persistentes
→ doble autoridad
→ posible desincronización
~~~

## 8.2 Condición de reactivación

~~~text
aparece una necesidad propia
de consultar, validar, relacionar o navegar
entidades del dominio de forma estructurada
+
el coste documental actual resulta insuficiente
~~~

## 8.3 Contraste actual

El corpus es amplio y complejo, pero no se ha demostrado que esa complejidad produzca actualmente:

- una decisión que no pueda tomarse;
- una validación que no pueda realizarse;
- un error recurrente material;
- una relación necesaria que no pueda reconstruirse;
- una pérdida humana independiente.

Por tanto:

~~~text
corpus grande
≠
insuficiencia demostrada

L-EXT-04
→ CERRADA — FAVORABLE LIMITADO

activador actual
→ NO SATISFECHO
~~~

---

# 9. Auditoría de L-EXT-05 — IA verificable

## 9.1 Resultado conservado

Se demostró un contrato mínimo válido:

~~~text
entrada delimitada
↓
IA propone o se abstiene
↓
evidencia
↓
justificación
↓
verificación independiente
↓
validación humana
↓
consolidación
~~~

La línea no demostró necesidad general de:

- agentes;
- API;
- RAG;
- memoria autónoma;
- autonomía decisoria;
- integración universal de LLM.

## 9.2 Evolución posterior

Después se seleccionó y convergió:

~~~text
C-PV-80-04
→ apoyo auxiliar de IA separado de la obra
~~~

Esto amplía la capacidad demostrada, pero no crea automáticamente nuevas tareas IA obligatorias.

## 9.3 Condición de reactivación

~~~text
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
~~~

## 9.4 Contraste actual

Las tareas propuestas históricamente —descubrir relacionados, proponer relaciones, extraer estructura, reconstruir procedencia, detectar contradicciones o huecos— siguen siendo posibilidades.

No se ha demostrado que alguna de ellas sea actualmente necesaria para resolver una pérdida o decisión estratégica vigente.

Resultado:

~~~text
L-EXT-05
→ CERRADA — FAVORABLE LIMITADO

activador actual
→ NO SATISFECHO

fundamento Manual 17
→ NO
~~~

---

# 10. MCP, agentes y otras oportunidades no seleccionadas

El programa histórico también contenía MCP, agentes, CRDT, local-first, representación visual y otras líneas.

La reducción posterior determinó:

~~~text
MCP
→ solución técnica prematura

materiales activos
→ referencia exploratoria

CRDT
→ necesidad actual no demostrada

local-first
→ conceptualmente relevante
→ no derivado

agentes
→ sin situación humana concreta independiente
~~~

Su mera madurez tecnológica o disponibilidad externa no modifica ese estatuto.

Resultado:

~~~text
oportunidades externas no seleccionadas
→ radar
→ no backlog
→ no obligación
~~~

---

# 11. Comparación externa mediante C1

La propuesta histórica sugería ejecutar un mismo caso en múltiples herramientas externas.

Esa comparación habría sido una fuente válida de evidencia si una decisión dependiera de ella.

Sin embargo, después se realizaron:

- panorama externo;
- reducción comparativa;
- cinco profundizaciones;
- pruebas específicas sobre estándares y mecanismos.

No existe actualmente una decisión estratégica cuya resolución requiera ejecutar de nuevo C1 en un conjunto de productos.

Resultado:

~~~text
benchmark comparativo C1
→ potencialmente informativo
→ NO necesario actualmente
→ NO derivado
~~~

---

# 12. External Radar como sensor vivo

El radar conserva una función vigente:

~~~text
memoria operativa
+
sensor de reactivación futura
~~~

Pero su propia regla exige que una reapertura parta de nueva evidencia y no de la existencia de una entrada previa.

La dirección válida permanece:

~~~text
necesidad propia demostrada
↓
mecanismo externo pertinente
↓
recuperar conocimiento del radar
↓
prueba específica
↓
eventual derivación
~~~

No:

~~~text
tecnología disponible
↓
buscar una necesidad
~~~

---

# 13. Cinco activadores externos supervivientes

La auditoría permite precisar cinco sensores concretos:

## ACT-EXT-01 — Procedencia insuficiente

~~~text
situación humana real
+
necesidad de reconstruir procedencia/trayectoria
+
representación actual insuficiente
~~~

## ACT-EXT-02 — Anclaje granular insuficiente

~~~text
tarea humana real
+
necesidad de localizar establemente fragmentos
+
mecanismo actual insuficiente
~~~

## ACT-EXT-03 — Portabilidad insuficiente

~~~text
traslado/intercambio real
+
composición heterogénea
+
pérdida de contexto o estructura pertinente
+
no absorbida por cierres vigentes
~~~

## ACT-EXT-04 — Coste documental estructural

~~~text
operación real de consulta/validación/relación/navegación
+
coste documental actual materialmente insuficiente
~~~

## ACT-EXT-05 — Tarea IA verificable necesaria

~~~text
tarea humana concreta
+
asistencia IA capaz de cambiar materialmente el resultado
+
contrato verificable
+
insuficiencia actual demostrada
~~~

Estos activadores son:

~~~text
sensores de reapertura
≠
backlog
≠
roadmap
≠
obligaciones pendientes
~~~

---

# 14. Evaluación actual de los activadores

| Activador | Evidencia actual suficiente | Insuficiencia actual demostrada | Puede cambiar decisión vigente | Estado |
| --- | --- | --- | --- | --- |
| ACT-EXT-01 — procedencia | NO | NO | NO | INACTIVO |
| ACT-EXT-02 — anclaje granular | NO | NO | NO | INACTIVO |
| ACT-EXT-03 — portabilidad | NO | NO | NO | INACTIVO |
| ACT-EXT-04 — coste documental estructural | NO | NO | NO | INACTIVO |
| ACT-EXT-05 — tarea IA verificable | NO | NO | NO | INACTIVO |

Resultado:

~~~text
activadores conocidos
→ 5

activadores satisfechos actualmente
→ 0
~~~

---

# 15. Contraste con Manual 17

## Rama A

No aparece obligación vigente que exija activar ninguna de estas líneas.

~~~text
RAMA A
→ SIN CONTINUIDAD DERIVADA
~~~

## Rama B

El extracto y los cierres externos son conocimiento ya existente, no evidencia emergente nueva.

La presente auditoría tampoco descubre una pérdida humana independiente.

~~~text
RAMA B
→ SIN CONTINUIDAD DERIVADA
~~~

## GATE-NH-01

~~~text
nueva pérdida humana independiente
→ NO

alcance discriminable nuevo
→ NO

criterio de cierre para una decisión vigente
→ NO

GATE-NH-01
→ NO SE ABRE
~~~

---

# 16. Veredicto

~~~text
programa externo histórico
→ CONSUMADO EN SU PARTE PERTINENTE

líneas externas principales
→ CERRADAS — FAVORABLE LIMITADO

residuos conceptuales
→ CONSERVADOS COMO SENSORES

activadores externos supervivientes
→ 5

activadores actualmente satisfechos
→ 0

fundamento actual para reaplicar Manual 17
→ NINGUNO DEMOSTRADO

estado estratégico
→ NO CAMBIA

proyecto
→ ESTADO ESTABLE
→ SIN NUEVA ACTUACIÓN ESTRATÉGICA ABIERTA
~~~

---

# 17. Punto de reanudación refinado

Además de los activadores generales ya registrados en 94, la evidencia externa podrá justificar una nueva reaplicación cuando aparezca al menos uno de estos hechos:

~~~text
ACT-EXT-01
→ procedencia/trayectoria actual insuficiente

ACT-EXT-02
→ localización granular actual insuficiente

ACT-EXT-03
→ portabilidad/intercambio con pérdida pertinente

ACT-EXT-04
→ coste documental estructural materialmente insuficiente

ACT-EXT-05
→ tarea IA concreta, necesaria y verificable
~~~

La aparición de uno de estos hechos no abre automáticamente una nueva actuación.

Deberá volver a comprobarse:

~~~text
necesidad propia
+
pérdida o insuficiencia observable
+
independencia
+
alcance
+
criterio de cierre
+
decisión que puede cambiar
~~~

Hasta entonces:

~~~text
Manual 17
→ NO REABIERTO

External Radar
→ SENSOR ACTIVO

proyecto
→ ESTADO ESTABLE
~~~


---

# 18. Corrección metodológica posterior

La auditoría [96](96-AUDITORIA_Y_CORRECCION_CRITERIO_ESTADO_ESTABLE_MANUAL17.md) no modifica el resultado específico de esta actuación:

~~~text
ACT-EXT-01…05
→ 0 / 5 activados

reapertura por fundamento externo
→ NO
~~~

Pero corrige una inferencia global:

~~~text
ausencia de activador externo
≠
estabilidad global del proyecto
~~~

Por tanto:

~~~text
External Radar
→ no reabre continuidad por sí mismo

ciclo post-OB-80-CONV-01
→ localmente estable

GATE-PROJ-01
→ NO EVALUADO

estado global
→ NO DETERMINADO
~~~
