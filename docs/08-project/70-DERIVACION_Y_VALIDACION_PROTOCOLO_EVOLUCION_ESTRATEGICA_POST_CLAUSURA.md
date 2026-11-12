# Actuación 70 — Derivación y validación del protocolo de evolución estratégica post-clausura

**Fecha de apertura:** 12/11/2026.

**Estado:** ACTUACIÓN 70 → ABIERTA.

**Fase actual:** contraste sustantivo completado. H70-A ha sido reformulada como H70-B; R70-B-01…04 han sido derivados y C70-01…C70-10 quedan satisfechos en el alcance metodológico de esta actuación. Permanece pendiente la incorporación normativa mínima al Manual 17 y el cierre documental formal de 70.

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

# 13. Resultado del contraste sustantivo

Las secciones 1–12 conservan el registro de apertura y las hipótesis provisionales con las que comenzó la actuación. No deben reinterpretarse como estado final. El contraste posterior produjo una reducción progresiva de la cuestión metodológica.

La hipótesis de una laguna amplia en la continuidad estratégica quedó refutada. La metodología vigente ya contiene:

- separación entre cierre local y terminación del proyecto;
- fundamento positivo;
- convergencia planificada y evidencia emergente;
- formulación, evaluación y selección de situaciones candidatas en Product;
- reducción de diferencias;
- criterios previos de finalización;
- salida estable sin actuación;
- reglas para no derivar automáticamente un nuevo horizonte;
- convergencia desde un horizonte aceptado;
- PM-10 para pasar desde necesidad de producto suficientemente identificada a realización o arquitectura mínima;
- y protocolo operativo agéntico para ejecutar actuaciones ya justificadas.

La laguna superviviente quedó reducida a:

> **L70-01R — Suficiencia y clausura de la formación estratégica post-clausura.**

Su núcleo es determinar cuándo la exploración posterior a una clausura ha formado y contrastado un conjunto suficiente de alternativas para seleccionar una dirección estratégica o concluir legítimamente que ninguna justifica abrir un nuevo horizonte.

La laguna no consiste, por tanto, en ausencia de metodología general de continuidad ni de convergencia. Consiste en una falta localizada de operacionalización entre:

```text
Product vigente satisfecho
↓
reevaluar Product ↔ PLATFORM_VISION
↓
¿existe nuevo objetivo estratégico justificable?
```

y la constitución suficientemente cerrable de ese posible nuevo objetivo.

# 14. Resultado de H70-A y reformulación como H70-B

H70-A no supera el contraste en su forma original.

La estructura:

```text
exploración estratégica
+
madurez técnica
+
uso real intensivo
```

trataba provisionalmente los tres carriles como componentes aproximadamente equivalentes. El contraste demostró que no poseen la misma función ni autoridad.

Resultado:

```text
H70-A
→ REFORMULADA
```

La hipótesis superviviente se formula como:

> **H70-B — Formación estratégica post-clausura con fuentes diferenciadas, síntesis comparativa y gates de clausura.**

Su estructura consolidada es:

```text
DECISIÓN HUMANA EXPLÍCITA DE CONTINUAR
↓
DELIMITACIÓN
→ Charter + cierres vigentes
↓
FORMACIÓN DE CANDIDATAS
├── exploración estratégica deliberada
└── evidencia de uso real
↓
REDUCCIÓN INICIAL
↓
EVALUACIÓN PRODUCT
→ situación
→ compatibilidad
→ diferencia humana
→ valor
↓
APTITUD TÉCNICA CONDICIONAL
→ sólo cuando viabilidad, dependencia, alcance,
  sostenibilidad o riesgo sean materialmente relevantes
↓
SÍNTESIS COMPARATIVA
↓
GATE DE CLAUSURA DE FORMACIÓN
├── CONTINUAR localizadamente
├── CERRAR SIN HORIZONTE
└── FORMULAR HORIZONTE
     ↓
     GATE CONSTITUTIVO
     ├── NO ACEPTAR
     └── ACEPTAR HORIZONTE
          ↓
          CONVERGENCIA VIGENTE
```

La madurez técnica no constituye fuente primaria equivalente de horizonte. Una deuda, limitación o posibilidad técnica sólo adquiere relevancia estratégica cuando afecta materialmente a una candidata de Product suficientemente formada o puede traducirse independientemente a una diferencia humana justificable.

Tampoco se establece una obligación de «uso real intensivo». El uso real deberá aportar únicamente la evidencia necesaria para resolver las incertidumbres materialmente capaces de cambiar la decisión.

# 15. Especificación consolidada del procedimiento

## 15.1. R70-B-01 — Cobertura de formación

La cobertura es **decisional, no exhaustiva**.

Se considera suficiente cuando:

1. está identificada la decisión estratégica abierta;
2. se ha contrastado siempre la dirección estratégica interna del proyecto;
3. cada perspectiva adicional actualmente identificada capaz de cambiar materialmente la decisión ha sido examinada o excluida con justificación explícita;
4. las candidatas no proceden únicamente de posibilidad técnica o atractivo de implementación;
5. no permanece identificada una perspectiva omitida con una pregunta concreta cuya respuesta pueda cambiar materialmente la selección o la salida negativa.

Las perspectivas de referencia son:

- **P70-COV-1 — Dirección estratégica interna:** PROJECT_CHARTER + PLATFORM_VISION + PRODUCT + estado y cierres vigentes. Obligatoria.
- **P70-COV-2 — Evidencia de uso real:** pertinente cuando exista producto utilizable y una cuestión empírica capaz de informar la decisión.
- **P70-COV-3 — Contraste externo:** condicional; se incluye cuando plataformas, estándares, investigación o patrones externos puedan materialmente cambiar la valoración.
- **P70-COV-4 — Patrimonio y evidencia histórica:** investigaciones, experimentos, diferencias reducidas, oportunidades no derivadas y realizaciones históricas pertinentes, sin convertir existencia histórica en vigencia automática.
- **P70-COV-5 — Aptitud técnica:** filtro condicionado, no fuente primaria obligatoria de horizonte.

Se formaliza:

> **G70-COV-01 — Cobertura suficiente de formación.**

No exige demostrar que no existe ninguna otra posibilidad imaginable. Exige que no permanezca identificada una perspectiva pertinente no contrastada cuya respuesta pueda cambiar materialmente la decisión actual.

## 15.2. R70-B-02 — Ficha comparativa común de candidata

Toda candidata que pretenda entrar en síntesis comparativa deberá permitir reconstruir, como mínimo:

1. **FC-01 — Identificación y procedencia.**
2. **FC-02 — Situación candidata**, formulada sin presuponer una solución técnica.
3. **FC-03 — Diferencia humana** que produciría hacer practicable la situación.
4. **FC-04 — Valor y alcance:** para quién, por qué y con qué alcance.
5. **FC-05 — Compatibilidad y perímetro:** Charter, Platform Vision, Product y demás cuerpos aplicables.
6. **FC-06 — Novedad e independencia:** qué parte ya está satisfecha, absorbida, reducida o cerrada.
7. **FC-07 — Evidencia:** hechos, inferencias, hipótesis, contradicciones y pendientes.
8. **FC-08 — Discriminabilidad:** qué variable podría aislarse y qué observación podría apoyar, reducir o falsar la candidata.
9. **FC-09 — Relación con otras candidatas:** independencia, solapamiento, complementariedad, alternativa o dependencia.
10. **FC-10 — Aptitud técnica relevante**, sólo cuando afecte materialmente a viabilidad, sostenibilidad, riesgo, alcance o dependencia.
11. **FC-11 — Capacidad para cambiar una decisión estratégica.**
12. **FC-12 — Estado de reducción:** absorbida, reducida, descartada, pendiente de evidencia, pendiente de reducción, apta para profundización, apta para comparación final o seleccionable por Product.

La comparación es cualitativa y reductiva. No se adopta una suma de puntos ni pesos numéricos que simulen conmensurabilidad entre dimensiones heterogéneas.

Se formaliza:

> **G70-CMP-01 — Aptitud para síntesis comparativa.**

Una candidata sólo entra en comparación final cuando su situación, diferencia humana, valor, compatibilidad, novedad, evidencia, discriminabilidad, relaciones y efecto decisional estén suficientemente formulados o cuando la incertidumbre restante sea concreta y resoluble.

## 15.3. R70-B-03 — Clausura de formación y constitución de horizonte

Se distinguen dos gates.

### G70-FORM-01 — Clausura de la formación estratégica

Se supera cuando:

1. G70-COV-01 está satisfecho;
2. toda candidata superviviente posee ficha comparable suficiente;
3. candidatas absorbidas, duplicadas, agregadas, meramente técnicas o sin fundamento suficiente han sido reducidas;
4. las relaciones entre candidatas están identificadas;
5. no queda una comprobación concreta pendiente cuya respuesta pueda cambiar materialmente la existencia, valor, selección o relación de una candidata, ni la salida negativa.

Sus salidas son:

```text
CONTINUAR
→ sólo ante incertidumbre concreta
→ actuación mínima
→ criterio de cierre previo

CERRAR SIN HORIZONTE
→ formación cerrada
→ nuevo horizonte no derivado
→ estado estable

FORMULAR HORIZONTE
→ existe candidata o conjunto suficientemente justificado
→ todavía no implica horizonte aceptado
```

### G70-HOR-01 — Constitución suficiente de nuevo horizonte

Un horizonte candidato sólo puede aceptarse cuando se establezcan previamente:

1. **HOR-01 — Objetivo final.**
2. **HOR-02 — Fundamento positivo.**
3. **HOR-03 — Alcance.**
4. **HOR-04 — No-alcance.**
5. **HOR-05 — Resultado o compromiso Product correspondiente.**
6. **HOR-06 — Dependencias conocidas materialmente relevantes.**
7. **HOR-07 — Criterio verificable de finalización.**
8. **HOR-08 — Posibles resultados de cierre**, incluidos satisfacción, reducción, falsación o aparición de dependencia material nueva.

La secuencia completa queda:

```text
FORMACIÓN
↓
G70-FORM-01
├── CONTINUAR
├── CERRAR SIN HORIZONTE
└── FORMULAR HORIZONTE
     ↓
     G70-HOR-01
     ├── NO ACEPTAR
     │    ├── CONTINUAR localizadamente, si existe
     │    │   incertidumbre concreta capaz de cambiar la decisión
     │    └── CERRAR SIN HORIZONTE, en otro caso
     └── ACEPTAR HORIZONTE
          ↓
          CONVERGENCIA
```

Un horizonte aceptado debe ser cerrable. Una dirección indefinida como «mejorar continuamente la plataforma» puede pertenecer a la visión de largo plazo, pero no constituye por sí sola un horizonte operativo suficiente.

## 15.4. R70-B-04 — Compatibilidad y relevo metodológico

La auditoría final no identifica contradicción normativa.

La distribución de responsabilidades queda:

| Cuerpo | Responsabilidad |
| --- | --- |
| PROJECT_CHARTER | Identidad, propósito y perímetro superior. |
| PLATFORM_VISION | Dirección estratégica y espacio de posibilidades; no backlog. |
| PRODUCT | Formulación, compatibilidad, valor, selección y delimitación de compromisos. |
| Manual 17 | Continuidad estratégica y derivación del siguiente estado justificable. |
| H70-B | Especialización del nodo post-clausura para formar, comparar y clausurar posibles horizontes. |
| Estrategia 11 / 54 | Convergencia deliberada desde un horizonte aceptado. |
| PM-10 | Desde necesidad de producto suficientemente identificada hacia hipótesis mínima de realización o arquitectura y construcción/investigación localizada. |
| Protocolo 18 | Ejecución operativa de actuaciones ya justificadas, con trazabilidad, reversibilidad y gates humanos sustantivos. |

H70-B no sustituye ninguno de esos cuerpos. Su competencia termina cuando G70-HOR-01 permite **ACEPTAR HORIZONTE**. Desde ese punto toma el relevo la metodología vigente de convergencia.

La decisión de aceptar un horizonte constituye decisión estratégica sustantiva y permanece bajo control humano. El trabajo agéntico puede preparar evidencia, lecturas, comparaciones y validaciones dentro de una actuación ya justificada, pero autonomía operativa no equivale a autoridad para crear compromisos u horizontes.

# 16. Evaluación final C70-01…C70-10

Con R70-B-01…04 incorporados, el resultado final es:

| Criterio | Resultado | Fundamento consolidado |
| --- | --- | --- |
| C70-01 — Separación de clausuras | **SATISFECHO** | El producto anterior permanece cerrado; la continuación parte de una decisión posterior y un eventual horizonte no reabre retrospectivamente el alcance anterior. |
| C70-02 — Fuente legítima de exploración | **SATISFECHO** | La decisión humana de continuar justifica formar candidatas, pero no selecciona por sí sola Product, capacidad ni horizonte. |
| C70-03 — No arbitrariedad | **SATISFECHO** | R70-B-01 exige cobertura decisional y R70-B-02 fundamento, reducción y comparación reconstruibles. |
| C70-04 — Triangulación | **SATISFECHO** | H70-A fue reformulada: exploración estratégica y uso real son fuentes; madurez técnica es filtro condicionado. |
| C70-05 — Salida negativa | **SATISFECHO** | G70-FORM-01 permite cerrar legítimamente sin horizonte y volver a estado estable. |
| C70-06 — Clausura previa del horizonte | **SATISFECHO** | G70-HOR-01 impide aceptar un horizonte sin objetivo, alcance, no-alcance y criterio verificable de finalización. |
| C70-07 — Convergencia | **SATISFECHO** | Un horizonte aceptado pasa a Estrategia 11/54 y no depende exclusivamente de pérdidas espontáneas. |
| C70-08 — Evolución no infinita | **SATISFECHO** | Ni la formación obliga a producir horizonte ni cerrar un horizonte obliga a abrir el siguiente. |
| C70-09 — Compatibilidad | **SATISFECHO** | R70-B-04 verifica encaje con los cuerpos competentes sin invasión de responsabilidades. |
| C70-10 — Operacionalidad | **SATISFECHO** | El procedimiento ya determina cobertura, ficha, comparación, continuidad, salida negativa, formulación, aceptación y relevo posterior. |

Resultado:

```text
C70-01 … C70-10
→ 10 / 10 SATISFECHOS
```

# 17. Resultado A/B/C/D y estado de las hipótesis

La actuación resuelve sus alternativas iniciales:

```text
B — Manual actual completamente suficiente
→ RECHAZADO
```

La metodología vigente proporciona la mayor parte de las reglas, pero no operacionaliza suficientemente la cobertura, comparación y clausura de la formación post-clausura.

```text
C — necesidad real pero protocolo no derivable
→ RECHAZADO
```

La pieza faltante ha podido derivarse.

```text
D — H70-A inadecuada
→ CONFIRMADO COMO RESULTADO INTERMEDIO
```

H70-A no sobrevive en su forma triangular simétrica, pero su insuficiencia queda resuelta mediante H70-B.

Resultado final:

```text
A — PROTOCOLO DERIVABLE
→ CONFIRMADO
```

Más precisamente:

> Existe una necesidad metodológica localizada, pero no justifica una metodología paralela completa. La solución mínima es especializar el Manual 17 para operacionalizar la formación, comparación y clausura de un posible nuevo horizonte después de la clausura legítima del Product vigente.

H70-B queda:

```text
H70-B
→ NO REFUTADA
→ REDUCIDA
→ OPERACIONALIZADA
→ COMPATIBLE
→ C70-01…C70-10 SATISFECHOS
→ VALIDADA EN EL ALCANCE DE ACTUACIÓN 70
```

# 18. Estado resultante y siguiente actuación documental

La investigación sustantiva de 70 queda resuelta. Esto no equivale todavía al cierre documental formal de la actuación, porque la norma derivada aún no ha sido incorporada a Methodology.

Estado actual:

```text
PRODUCTO DEL ALCANCE ANTERIOR
→ PERMANECE CERRADO

ACTUACIONES 64, 65, 67, 68 Y 69
→ PERMANECEN CERRADAS

ACTUACIÓN 70
→ ABIERTA
→ CONTRASTE SUSTANTIVO COMPLETADO

H70-A
→ REFORMULADA

H70-B
→ VALIDADA EN EL ALCANCE DE 70

C70-01…C70-10
→ 10 / 10 SATISFECHOS

RESULTADO A
→ CONFIRMADO

NUEVO HORIZONTE
→ NO ABIERTO
→ NO DERIVADO TODAVÍA
```

La siguiente actuación documental mínima es:

```text
incorporar en Manual 17
únicamente la especialización operativa consolidada
↓
sin trasladar la investigación histórica completa
↓
verificar compatibilidad documental
↓
actualizar estado y bitácora
↓
decidir cierre formal de Actuación 70
```

Esta conclusión no autoriza todavía a aplicar el protocolo para seleccionar un horizonte concreto hasta que su incorporación normativa mínima quede consolidada.

