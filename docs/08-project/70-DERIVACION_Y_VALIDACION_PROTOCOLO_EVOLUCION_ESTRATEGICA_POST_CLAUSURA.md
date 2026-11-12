# Actuación 70 — Derivación y validación del protocolo de evolución estratégica post-clausura

**Fecha de apertura:** 12/11/2026.

**Estado:** ACTUACIÓN 70 → ABIERTA.

**Fase actual:** apertura y delimitación del problema. H70-A y C70-* son provisionales; el protocolo definitivo todavía no existe ni queda aceptado por este documento.

# 1. Estado de partida y preservación de los cierres

La apertura parte de [69](69-REEVALUACION_FINAL_Y_CIERRE_RESIDUO_ACTUACION_64.md), [estado](09-PROJECT_STATUS.md) y [bitácora](10-PROJECT_JOURNAL.md), consolidados en `24f05eb`, `docs(project): close actuation 64 residual review`. La inspección local previa a esta edición confirmó ese HEAD y un árbol de trabajo limpio.

El producto final del alcance vigente está alcanzado; el lanzamiento está satisfecho; 64, 65, 67, 68 y 69 están cerradas. No queda residuo demostrado pendiente de 64. Desde el alcance anterior no quedó siguiente actuación automática ni estratégicamente derivada, ni nuevo horizonte derivado: el estado era estable salvo nuevo fundamento positivo suficiente.

Estos cierres permanecen válidos en su alcance. 70 no los reabre, no convierte sus límites en incumplimientos y no reinterpreta retrospectivamente su continuidad estratégica.

# 2. Hecho posterior y derivación de la actuación metodológica

**Hecho posterior:** la persona responsable adopta explícitamente, mediante el encargo de apertura, la decisión estratégica de continuar evolucionando el proyecto después de alcanzar el producto final correspondiente al alcance vigente.

Esta decisión proporciona fundamento para estudiar cómo formar legítimamente posibles horizontes. No implica por sí sola V2, P6, nuevo Product Value, Architecture, Realization, funcionalidad ni horizonte concreto. No demuestra una pérdida nueva del producto cerrado.

La derivación de 70 es localizada:

```text
decisión humana explícita de continuar
↓
necesidad de determinar cómo formar o descartar legítimamente un horizonte
↓
incertidumbre sobre la suficiencia operativa de la metodología existente
↓
actuación metodológica con alcance y criterio verificable: 70
```

El resultado requerido pertenece por responsabilidad a Methodology; su apertura y trazabilidad se registran en `08-project`. La decisión humana justifica contrastar esa incertidumbre, sin prejuzgar que haga falta una norma nueva. El encargo actual autoriza sólo la apertura: no ejecutar todavía la investigación completa ni aplicar los tres carriles a candidatas concretas.

# 3. Delimitación del problema frente al Manual vigente

Se ha leído el [Manual 17](../01-methodology/17-manual-de-continuidad-estrategica.md). La lectura inicial permite distinguir:

| Contenido verificado | Alcance para el problema de 70 |
| --- | --- |
| Apartado 6.1, Rama A | Deriva actuación desde obligación o dependencia necesaria de un objetivo/compromiso vigente. No exige esperar una pérdida espontánea. |
| Apartado 6.2, Rama B | Trata nueva evidencia emergente, reducción, independencia y gate correspondiente. |
| Apartados 7 y 11, Pasos 5 y 9 | Separan mejora técnica de brecha y exigen fundamento positivo, obligación pendiente, independencia, alcance, criterio de finalización y dependencias coherentes antes de abrir horizonte. |
| Apartado 13, árbol operativo | Tras Product satisfecho prevé reevaluar Product ↔ PLATFORM_VISION y preguntar si existe nuevo objetivo estratégico justificable; admite derivarlo o permanecer estable. |
| Apartados 10, 12, 15 y 18 | Exigen criterio previo, punto de reanudación, comprobación de las seis fuentes y fundamento suficiente para abrir actuaciones. |

Por tanto, sería incorrecto afirmar que el Manual sólo permite continuar por fallos o que ignora toda evolución posterior a una clausura. Contiene condiciones y una transición explícita hacia posibles objetivos nuevos.

La situación específica a contrastar es:

```text
producto vigente legítimamente cerrado
+ sin obligación pendiente del alcance anterior
+ sin nueva pérdida necesaria
+ decisión humana explícita de continuar estratégicamente
↓
¿cómo se deriva —o se descarta— un nuevo horizonte?
```

En el texto de 17 no se explicita una secuencia particular para generar y comparar candidatas desde esa decisión inicial ni una combinación de los tres carriles de H70-A. Esa ausencia de explicitación particular no demuestra por sí sola insuficiencia: el procedimiento mínimo podría reconstruirse suficientemente mediante las reglas existentes, Product y los demás cuerpos competentes.

**Resultado de la lectura de apertura:** cuestión operativa delimitada; insuficiencia metodológica todavía no demostrada y suficiencia completa tampoco establecida. El contraste posterior deberá demostrar una laguna real o refutarla reconstruyendo cómo se aplican las fuentes vigentes al caso. No se amplía aquí el significado de «obligación pendiente» del Paso 9 para convertir una aspiración en compromiso.

# 4. Pregunta principal

¿Qué procedimiento mínimo, verificable y no circular permite que un proyecto cuyo producto vigente ha alcanzado legítimamente su clausura pueda, ante una decisión humana explícita de continuar evolucionándolo, explorar, seleccionar y cerrar un posible nuevo horizonte sin:

1. Reabrir retrospectivamente el producto ya cerrado.
2. Convertir PLATFORM_VISION o posibilidades imaginables en backlog.
3. Depender indefinidamente de buscar nuevos fallos o pérdidas.
4. Seleccionar arbitrariamente funcionalidades.
5. Convertir toda mejora técnica posible en obligación.
6. Obligar a abrir siempre otro horizonte.

# 5. Hipótesis de trabajo pendiente de contraste

**H70-A — Formación triangular del nuevo horizonte.** Es una hipótesis, no un protocolo aceptado ni una secuencia normativa.

```text
DECISIÓN HUMANA DE CONTINUAR
↓
FASE DE FORMACIÓN DEL HORIZONTE
├── exploración estratégica
├── análisis de madurez técnica
└── uso real intensivo
↓
síntesis y reducción comparativa
↓
¿existe candidato suficientemente justificado?
├── NO → estado estable
└── SÍ → nuevo horizonte explícito con:
         objetivo final, alcance, no-alcance, fundamento,
         dependencias y criterio verificable de clausura
```

H70-A podrá aceptarse, reformularse, reducirse, dividirse o rechazarse. Ni el número de carriles ni su necesidad, independencia, orden o combinación se consideran demostrados. Tampoco se presupone que los tres deban ejecutarse siempre o con igual intensidad.

# 6. Función preliminar de los tres carriles

| Carril provisional | Pregunta de contraste | Resultado candidato y límite |
| --- | --- | --- |
| A. Exploración estratégica | ¿Qué estados futuros aportarían un aumento significativo de capacidad o valor respecto del producto ya cerrado? | Candidatas estratégicas; no requisitos automáticos. |
| B. Madurez técnica | ¿Qué límites de la realización actual serían materialmente relevantes para sostener candidatas estratégicas futuras? | Distinguir «sería técnicamente mejor» de «sería necesario para sostener un horizonte candidato». CI, base de datos, Architecture, concurrencia u observabilidad no se convierten automáticamente en backlog. |
| C. Uso real intensivo | ¿Qué nuevas formas de trabajo, límites estructurales, posibilidades valiosas no comprometidas, recurrencias o necesidades futuras aparecen y qué candidatas confirman o debilitan? | Evidencia para formar y contrastar candidatas. Su propósito no es principalmente buscar más fallos del producto cerrado; los defectos reales que aparezcan podrán registrarse con su alcance propio. |

Estas funciones orientan preguntas de investigación, sin abrir todavía campañas de uso, auditorías técnicas, funcionalidades ni horizontes concretos.

# 7. Riesgos a contrastar

| Riesgo | Pérdida que el futuro procedimiento debe evitar |
| --- | --- |
| R70-01 | Bucle de validación infinita del producto ya cerrado. |
| R70-02 | Reapertura retrospectiva del alcance anterior. |
| R70-03 | Expansión especulativa de PLATFORM_VISION. |
| R70-04 | Desarrollo dirigido por funcionalidades sin necesidad estratégica. |
| R70-05 | Madurez técnica genérica convertida en backlog obligatorio. |
| R70-06 | Apertura automática de horizontes sucesivos. |
| R70-07 | Investigación indefinida cuando mayor precisión no puede cambiar una decisión. |
| R70-08 | Selección de candidata sólo porque es técnicamente posible. |
| R70-09 | Horizonte sin criterio previo de clausura que recrea un proceso infinito. |

# 8. Criterios provisionales de validación

Los criterios se derivan provisionalmente de la pregunta y sus riesgos; no prescriben aún la solución.

| Criterio | Propiedad que deberá contrastarse |
| --- | --- |
| C70-01 — Separación de clausuras | Producto anterior cerrado no equivale a proyecto definitivamente terminado; un nuevo horizonte no equivale a reabrir el producto cerrado. |
| C70-02 — Fuente legítima de exploración | Reconocer la decisión humana de continuar como fundamento para formar candidatas, sin convertirla por sí sola en horizonte concreto. |
| C70-03 — No arbitrariedad | Cada candidata dispone de fundamento identificable y se compara con alternativas. |
| C70-04 — Triangulación | Determinar si y cómo combinar exploración estratégica, madurez técnica y uso real, sin dar por necesaria H70-A. |
| C70-05 — Salida negativa | Poder concluir legítimamente que no existe nuevo horizonte suficientemente justificado. |
| C70-06 — Clausura previa del horizonte | No aceptar un horizonte sin objetivo final, alcance, no-alcance y criterio verificable de finalización. |
| C70-07 — Convergencia | Definir cómo derivar actuaciones hacia el cierre de un horizonte aceptado sin depender exclusivamente de pérdidas espontáneas. |
| C70-08 — Evolución no infinita | Cerrar un horizonte no obliga a abrir otro. |
| C70-09 — Compatibilidad | Compatibilidad con PROJECT_CHARTER, PLATFORM_VISION, PRODUCT, Manual 17, PM-10 y metodología vigente, respetando competencias. |
| C70-10 — Operacionalidad | Concreción suficiente para aplicarse al proyecto actual y producir una decisión verificable sobre la existencia o inexistencia de un primer horizonte post-clausura. |

Ningún C70-* se declara superado en esta apertura.

# 9. Fuentes verificadas y contraste pendiente

Se ha verificado que existen los siguientes archivos con estos nombres exactos. Su inclusión fija el mínimo del contraste posterior; no significa que la auditoría completa de compatibilidad ya esté realizada.

| Fuente | Responsabilidad en el contraste |
| --- | --- |
| [00-PROJECT_CHARTER.md](00-PROJECT_CHARTER.md) | Identidad, perímetro y evolución justificada; apertura sin compromiso automático, especialmente apartados 5, 12 y 14. |
| [01-PLATFORM_VISION.md](01-PLATFORM_VISION.md) | Dirección de largo plazo y separación entre capacidades deseadas y compromisos. |
| [02-PRODUCT.md](02-PRODUCT.md) | Competencia de selección de situaciones valiosas y tránsito a compromisos; contrastar especialmente apartados 2 y 3. |
| [00-protocolo-de-trabajo.md](../01-methodology/00-protocolo-de-trabajo.md) | Metodología transversal; PM-10 está localizado en el apartado «PM-10 — Desarrollo guiado por necesidad productiva». |
| [17-manual-de-continuidad-estrategica.md](../01-methodology/17-manual-de-continuidad-estrategica.md) | Suficiencia o laguna del procedimiento actual; lectura inicial delimitada en el apartado 3. |
| [18-protocolo-operativo-agentico.md](../01-methodology/18-protocolo-operativo-agentico.md) | Autonomía operativa y gates sin ampliación de autoridad estratégica. |
| [54-ESTRATEGIA_GLOBAL_DE_CONVERGENCIA_POST_T1_AL_PRODUCTO_FINAL.md](54-ESTRATEGIA_GLOBAL_DE_CONVERGENCIA_POST_T1_AL_PRODUCTO_FINAL.md) | Antecedente de convergencia hacia clausura; no importar sus fases como obligaciones nuevas. |
| [60-AUDITORIA_CIERRE_CONVERGENCIA_MATERIAL_Y_DETERMINACION_PRODUCTO_FINAL.md](60-AUDITORIA_CIERRE_CONVERGENCIA_MATERIAL_Y_DETERMINACION_PRODUCTO_FINAL.md) | Alcance del cierre material anterior. |
| [61-DETERMINACION_CRITERIO_CANONICO_CLAUSURA_PRODUCTO_FINAL.md](61-DETERMINACION_CRITERIO_CANONICO_CLAUSURA_PRODUCTO_FINAL.md) | Criterio de clausura del producto y distinción respecto del fin absoluto del proyecto. |
| [62-AUDITORIA_PREPARACION_OPERATIVA_Y_LANZAMIENTO_PRODUCTO_FINAL.md](62-AUDITORIA_PREPARACION_OPERATIVA_Y_LANZAMIENTO_PRODUCTO_FINAL.md) | Lanzamiento satisfecho y límites no bloqueantes. |
| [69-REEVALUACION_FINAL_Y_CIERRE_RESIDUO_ACTUACION_64.md](69-REEVALUACION_FINAL_Y_CIERRE_RESIDUO_ACTUACION_64.md) | Ausencia de residuo demostrado y continuidad legítima previa. |
| [09-PROJECT_STATUS.md](09-PROJECT_STATUS.md) y [10-PROJECT_JOURNAL.md](10-PROJECT_JOURNAL.md) | Estado de partida y cronología de la decisión posterior. |

PM-10 exige partir de necesidades materiales y no de la posibilidad de ampliar teoría o técnica; prescribe investigar sólo el conflicto necesario y terminar cuando haya fundamento para continuar o descartar. Su aplicabilidad a la formación de candidatas todavía no comprometidas debe contrastarse sin inventar una necesidad productiva concreta.

# 10. Resultados posibles y condiciones de refutación

| Resultado posible | Evidencia requerida y consecuencia |
| --- | --- |
| A — Protocolo derivable | Demostrar laguna/metanecesidad real y procedimiento compatible validado frente a C70-*. Sólo entonces podrá proponerse incorporación a Methodology y aplicación posterior al proyecto. |
| B — Manual actual suficiente | Reconstruir un procedimiento operativo suficiente desde Methodology vigente, con trazabilidad de cada paso. Refuta la supuesta laguna; no crear protocolo redundante y documentar cómo aplicarlo. |
| C — Necesidad real, protocolo todavía no derivable | Demostrar la necesidad y aislar la condición o evidencia indispensable que falta. No fingir solución ni declarar cumplido el cierre de 70. |
| D — H70-A inadecuada | Mostrar que los tres carriles no superan el contraste; reformular, reducir, dividir o sustituir la hipótesis. Su rechazo no demuestra por sí solo que desaparezca la necesidad. |

A/B contrastan la necesidad de norma nueva; C identifica bloqueo; D puede exigir otra hipótesis antes de resolver A/B/C. No se selecciona ahora ninguno ni se conserva H70-A por preferencia previa.

# 11. Criterio de finalización de 70

70 sólo podrá cerrarse cuando:

1. Se determine si existe realmente la laguna metodológica.
2. Se contraste H70-A.
3. Se establezca el papel de exploración estratégica, madurez técnica y uso real.
4. Se defina una regla de formación y selección de horizonte, nueva o reconstruida de las fuentes vigentes según el resultado.
5. Exista una salida negativa legítima.
6. Todo horizonte aceptado requiera criterio de clausura previo.
7. Se defina el paso de horizonte aceptado a convergencia.
8. Se compruebe compatibilidad con los cuerpos competentes.
9. El procedimiento sea aplicable al estado actual.
10. Pueda decidirse qué ocurre inmediatamente después de cerrar 70.

Un resultado C o D que deje estas condiciones pendientes no permite declarar terminada la actuación como si ya existiera procedimiento suficiente.

# 12. Límites de esta apertura y punto de reanudación

Esta fase crea únicamente este documento y actualiza estado y bitácora. No redacta el protocolo definitivo, no crea archivo en Methodology ni modifica el Manual 17. No abre V2, P6, Product Value, Architecture, Realization, funcionalidad ni horizonte. No modifica código/tests ni ejecuta git add, commit, push o deployment.

```text
ACTUACIONES 64, 65, 67, 68 Y 69 → PERMANECEN CERRADAS
PRODUCTO DEL ALCANCE ANTERIOR → PERMANECE CERRADO
ACTUACIÓN 70 → ABIERTA, METODOLÓGICA
FUNDAMENTO → DECISIÓN HUMANA EXPLÍCITA POSTERIOR DE CONTINUAR
H70-A → HIPÓTESIS PENDIENTE DE CONTRASTE
PROTOCOLO DEFINITIVO → TODAVÍA NO EXISTE
NUEVO HORIZONTE → NO ABIERTO NI DERIVADO
PUNTO DE REANUDACIÓN
→ CONTRASTAR FUENTES Y DERIVAR O REFUTAR EL PROTOCOLO,
  SIN PRESUPONER LA LAGUNA NI LA SOLUCIÓN TRIANGULAR
```
