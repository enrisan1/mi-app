# Convergencia de H-POST-01 y validación del relevo contextual

**Estado: H-POST-01 CERRADO EN EL ALCANCE ACEPTADO Y DEMOSTRADO**

**Fecha de materialización:** 12/11/2026.

**Cierre documental:** 13/11/2026, conforme a los resultados y la decisión
formal comunicados por la persona responsable. La observación humana no se
repite durante esta edición. Los apartados 1–19 conservan la derivación, el
protocolo y el estado históricos anteriores a R4; el resultado vigente y el
punto de reanudación quedan en los apartados 20–23.

# 1. Procedencia, objeto y fuentes

**H-POST-01 — Continuidad del contexto intelectual en curso entre participantes
operativos → ACEPTADO mediante HUMAN GATE.** Su compromiso Product es
**C-PV-POST-01 — Continuidad del contexto intelectual provisional**, conservando
ese identificador, sin convertirlo en PV-007.

La secuencia de procedencia ya registrada es:

```text
G70-FORM-01 → FORMULAR HORIZONTE
C-PV-POST-01 → SELECCIONADO POR PRODUCT
G70-HOR-01 → HOR-01…HOR-08 = 8/8 SATISFECHOS
HUMAN GATE → ACEPTAR H-POST-01
formación estratégica post-clausura → CERRADA
relevo → metodología de convergencia
```

La aceptación está registrada en [estado](09-PROJECT_STATUS.md) y
[bitácora](10-PROJECT_JOURNAL.md); el compromiso, en [Product §10](02-PRODUCT.md).
La actuación [70](70-DERIVACION_Y_VALIDACION_PROTOCOLO_EVOLUCION_ESTRATEGICA_POST_CLAUSURA.md)
permanece cerrada como derivación metodológica. Su cierre no había abierto por
sí solo el horizonte: la aceptación estratégica posterior tiene estatuto propio.

Este documento materializa el relevo de [Manual 17 §13.1.5](../01-methodology/17-manual-de-continuidad-estrategica.md):

```text
horizonte aceptado → alcance → capacidades → dependencias
→ criterios de finalización → estado actual → huecos → prioridades
→ hitos → roadmap → actuaciones
```

No se inventa otra metodología. PM-10 se toma de
[Protocolo de trabajo](../01-methodology/00-protocolo-de-trabajo.md);
[Protocolo 18](../01-methodology/18-protocolo-operativo-agentico.md) gobierna la
operación autorizada sin conferir autoridad para ampliar compromisos.

Se contrastan como patrimonio, conservando sus contextos históricos:

- [27 — Priorización y roadmap post-V1](27-PRIORIZACION_Y_ROADMAP_POST_V1.md): estados estables, colaboración e intercambio ya realizados en sus alcances.
- [60 — Auditoría de convergencia material](60-AUDITORIA_CIERRE_CONVERGENCIA_MATERIAL_Y_DETERMINACION_PRODUCTO_FINAL.md): clasificación del patrimonio y cierre material del alcance anterior.
- [65 — Continuidad persistente del trabajo recuperado](65-CORRECCION_CONTINUIDAD_PERSISTENTE_TRABAJO_RECUPERADO.md): corrección posterior, sin retroproyectarla sobre 60.
- `src/realizations/ru2m1/ResumeExperience.tsx`, `src/realizations/integrated/IntegratedExperience.tsx`, `src/realizations/post-v1-integrated/PostV1IntegratedExperience.tsx`, `src/App.tsx` y `src/App.test.tsx`.
- `src/realizations/handoff/HandoffExperience.tsx` y `src/realizations/handoff/HandoffExperience.test.tsx`, trabajo válido todavía sin consolidación Git.

La derivación conceptual proporcionada por la persona responsable se materializa
aquí. Los resultados TDD y la auditoría adversarial fueron observados durante
los pasos técnicos anteriores de esta sesión; no se presentan como nuevas
ejecuciones durante esta edición documental. La lectura actual contrasta los
archivos existentes. No se realiza observación humana R4.

# 2. Alcance operativo

H-POST-01 comprende la continuidad de una actividad intelectual todavía en curso
cuando el trabajo pasa de un participante operativo a otro y contexto provisional
ya producido continúa siendo pertinente para su continuación. El horizonte exige
que ese contexto pueda volver a participar suficientemente en la actuación del
participante que toma el relevo, de modo que éste pueda continuar desde el estado
intelectual alcanzado sin reconstruir desde cero la parte relevante del trabajo
previo.

```text
actividad intelectual en curso
↓
P1 trabaja
↓
se produce contexto provisional pertinente
↓
relevo P1 → P2
↓
P2 continúa
↓
el contexto previo participa suficientemente
↓
continuación desde el estado alcanzado
```

**Contexto almacenado ≠ contexto operacionalmente disponible.** La presencia de
un objeto persistido no acredita por sí sola su participación en la continuación.

El no-alcance comprende memoria universal, historial total, persistencia
indefinida, identidad literal de representación, multiagente general,
sincronización universal, gestión general del conocimiento, arquitectura,
mecanismo técnico definitivo, modelo general de participantes e interfaz
definitiva. La expresión técnica «sin reconstrucción sustancial» se conserva
sólo como operacionalización del testigo; no sustituye la formulación de Product
«sin exigir reconstruir desde cero la parte relevante».

# 3. Capacidades

## CAP-HPOST-01 — Disponibilidad continuada del contexto pertinente

La plataforma puede hacer que el contexto provisional que continúa siendo
pertinente para una actividad intelectual en curso permanezca o vuelva a estar
suficientemente disponible para sostener su continuación.

| Criterio | Diferencia que debe acreditarse |
| --- | --- |
| CS-HPOST-01.1 — No pérdida funcional | Lo necesario para continuar no desaparece funcionalmente durante el relevo. |
| CS-HPOST-01.2 — Recuperabilidad efectiva | El contexto puede recuperarse efectivamente; su mera supervivencia física no basta. |
| CS-HPOST-01.3 — Conservación suficiente del estado intelectual | Se preserva suficientemente el punto de trabajo alcanzado, incluidas cuestiones cerradas y abiertas. |
| CS-HPOST-01.4 — Correspondencia con la actividad | El contexto recuperado corresponde a la actividad que continúa. |

## CAP-HPOST-02 — Incorporación operativa en el relevo

La plataforma puede hacer que ese contexto suficientemente preservado participe
en las posibilidades de actuación de un participante operativo distinto que toma
el relevo de la actividad.

| Criterio | Diferencia que debe acreditarse |
| --- | --- |
| CS-HPOST-02.1 — Disponibilidad para el nuevo participante | P2 dispone del contexto pertinente a través del relevo. |
| CS-HPOST-02.2 — Participación efectiva | El contexto interviene en la actuación posterior de P2. |
| CS-HPOST-02.3 — Continuación sin reconstrucción desde cero de la parte relevante | P2 reutiliza suficientemente el trabajo previo pertinente. |
| CS-HPOST-02.4 — Continuidad de la misma actividad | La actuación posterior continúa aquella actividad, no sólo inicia otra con datos parecidos. |

No se derivan otras capacidades en esta convergencia.

# 4. Dependencias y precondiciones de aplicabilidad

La reducción contrasta si existe una obligación necesaria adicional distinta de
los criterios constitutivos de las capacidades:

| Candidata | Resultado |
| --- | --- |
| DEP-HPOST-01 — Supervivencia contextual | NO SOBREVIVE como dependencia independiente: absorbida en CS-HPOST-01.1. |
| DEP-HPOST-02 — Reconocimiento suficiente de continuidad | NO SOBREVIVE como dependencia independiente: absorbida en CS-HPOST-01.4 y CS-HPOST-02.4. |

**Dependencias independientes demostradas → 0.** No se añaden dependencias para
rellenar una etapa del método.

| Precondición | Condición de aplicabilidad |
| --- | --- |
| PA-HPOST-01 | Actividad intelectual en curso. |
| PA-HPOST-02 | Contexto provisional todavía pertinente. |
| PA-HPOST-03 | Relevo entre participantes operativos. |

Estas precondiciones describen cuándo aplica el horizonte; no son dependencias
técnicas que la plataforma deba realizar.

# 5. Criterio de finalización

## CF-HPOST-01 — Continuidad operativa demostrada

H-POST-01 puede cerrarse cuando una realización practicable demuestre, mediante
una o más trayectorias observables que cubran las diferencias constitutivas, que
contexto provisional todavía pertinente producido durante una actividad
intelectual puede permanecer suficientemente disponible a través de un relevo
real entre participantes operativos y participar en la actuación del participante
que continúa, preservando suficientemente el estado intelectual alcanzado para
permitir continuación material sin exigir reconstruir desde cero la parte
relevante del contexto o trabajo ya elaborado.

La evidencia debe distinguir continuidad mediante contexto preservado de mera
conservación pasiva y de reconstrucción independiente.

**CV-HPOST-01 — Variación de robustez mínima** apoya este criterio mediante una
variación material de la trayectoria. No establece suficiencia universal.
CF-HPOST-01 no queda evaluado para cierre por el verde técnico de R3.

# 6. Estado previo del proyecto: auditoría del patrimonio

| Diferencia disponible antes de R-HPOST-M1 | Clasificación y fuente |
| --- | --- |
| Persistencia | Demostrada: ResumeExperience, IntegratedExperience y sus mecanismos existentes. |
| Recuperación tras interrupción | Demostrada: ResumeExperience y pruebas de remontaje en App. |
| Continuación temporal | Demostrada: antecedente recuperado seguido por nueva actuación; IntegratedExperience. |
| Conservación/localización de trabajo previo | Demostrada: recorrido ordinario y corrección 65, C65-01/C65-02. |
| Estado estable | Demostrado: patrimonio de 27 y `stable` en PostV1IntegratedExperience. |
| Participantes A/B diferenciados | Demostrados dentro del testigo colaborativo integrado. |
| Colaboración | Demostrada en el alcance mínimo del patrimonio de 27 y la trayectoria post-V1. |
| Intercambio/recepción | Demostrados: `artifact`/`received` y trayectoria integrada. |
| Relevo contextual efectivo P1 → P2 | NO demostrado previamente por la mera coexistencia de esas capacidades. |

La existencia conjunta de A/B y exchange/received en
`PostV1IntegratedExperience` no demostraba que P2 fuese nuevo respecto del estado
operativo de P1. Comparten una trayectoria persistida integrada; etiquetar dos
participantes o recibir un artefacto no acredita por sí solo ese relevo.

La auditoría 60 conserva su cierre dentro del alcance anterior. Su apartado 9.6
describe históricamente un trabajo reutilizado todavía no persistido; 65 aporta
la corrección posterior. No se retroproyecta la corrección ni se transforma el
nuevo horizonte en incumplimiento retrospectivo de los cierres anteriores.

# 7. Reducción de gaps

Las candidatas iniciales fueron:

- GAP-HPOST-01 — Relevo contextual efectivo entre participantes.
- GAP-HPOST-02 — Suficiencia del estado intelectual transferible.

La prueba de independencia pregunta si resolver la primera diferencia puede
considerarse logrado dejando pendiente la segunda. Un cruce que entrega datos
insuficientes no satisface relevo contextual efectivo; la suficiencia transferible
es constitutiva de ese relevo. A la inversa, conservar un estado suficiente sin
que cruce a otro participante no demuestra el relevo. No queda una segunda brecha
realizativa autónoma que requiera otra actuación.

```text
GAP-HPOST-01 → SOBREVIVE
GAP-HPOST-02 → NO SOBREVIVE como gap realizativo independiente
             → dimensión constitutiva de GAP-HPOST-01
```

## GAP-HPOST-01 — Relevo contextual efectivo entre participantes operativos

El proyecto no había demostrado una trayectoria en la que un participante
operativo distinto recibiera contexto provisional suficientemente representativo
del estado intelectual alcanzado por otro y pudiera continuar materialmente la
misma actividad desde ese punto sin reconstruir desde cero la parte relevante
del trabajo ya realizado.

Sus dimensiones internas son: a) cruce efectivo P1 → P2; b) suficiencia del estado
intelectual transferido; c) incorporación operativa por P2; d) continuación sin
reconstrucción desde cero de la parte relevante. GAP-HPOST-02 no se abre como
obligación autónoma. R3 aporta ahora evidencia técnica; falta R4 para evaluar el
hito y, después, el criterio de cierre.

# 8. Prioridad

**PR-HPOST-01 → cerrar GAP-HPOST-01.** Sólo sobrevive un gap; no existe
competición entre varias brechas realizativas que requiera priorización relativa.

# 9. HITO-HPOST-01 — Relevo contextual verificable

El hito exige conjuntamente:

| Criterio | Diferencia constitutiva |
| --- | --- |
| MHPOST-01 | Actividad no trivial. |
| MHPOST-02 | Estado previo identificable. |
| MHPOST-03 | Contexto provisional pertinente. |
| MHPOST-04 | Relevo real P1 → P2. |
| MHPOST-05 | Ausencia de estado oculto equivalente. |
| MHPOST-06 | Contexto suficiente disponible para P2. |
| MHPOST-07 | Continuación efectiva. |
| MHPOST-08 | Sin reconstrucción desde cero de la parte relevante. |
| MHPOST-09 | Discriminación frente a reconstrucción independiente. |
| MHPOST-10 | Variación material. |

Regla que se fija antes de la observación: **10/10 → HITO-HPOST-01 SATISFECHO;
<10/10 → HITO-HPOST-01 NO SATISFECHO.** Es una condición de decisión futura,
no un resultado ya obtenido. Ausencia de evidencia no cuenta como PASS.

# 10. Roadmap mínimo y actuaciones

| Paso | Actuación | Estado actual |
| --- | --- | --- |
| R1 | Operacionalizar testigo. | COMPLETADA conceptualmente. |
| R2 | Aplicar PM-10. | COMPLETADA. |
| R3 | Realizar solución mínima. | CERRADA TÉCNICAMENTE. |
| R4 | Validar HITO-HPOST-01. | PENDIENTE DE EJECUCIÓN HUMANA. |

No se añaden fases al roadmap. Los apartados siguientes documentan las
actuaciones y fijan la observación de R4 sin realizarla.

# 11. R1 — TW-HPOST-01

Actividad: seleccionar una alternativa que satisfaga conjuntamente K1 + K2 + K3.

| Estado S1 | Resultado alcanzado por P1 |
| --- | --- |
| M1 | Descartada por K2. |
| M3 | Descartada por K2. |
| M4 | Descartada por K3. |
| M2 | Única superviviente. |
| M2/K1 | Satisfecha. |
| M2/K2 | Satisfecha. |
| M2/K3 | Pendiente. |
| Decisión final | Pendiente. |
| Siguiente actuación | Comprobar M2/K3. |

C debe preservar funcionalmente objetivo, condiciones obligatorias, descartes,
razones, superviviente, comprobaciones establecidas, cuestión abierta, siguiente
actuación y decisión todavía pendiente. Es estructura contingente del testigo,
no ontología general de Product o Architecture.

Después del relevo, **E4 → M2 satisface K3**. S2 consiste en que M2 satisface
K1 + K2 + K3, se cierra M2/K3 y M2 queda seleccionada.

## Control negativo y variación

Sin C, P2 puede alcanzar eventualmente la misma respuesta, pero debe reconstruir
decisiones ya alcanzadas por P1. La discriminación humana requerida es
**CON C → continuación; SIN C → reconstrucción**. No basta comparar respuestas
finales iguales ni limitarse a observar un botón deshabilitado.

CV-HPOST-01 utiliza V1: N1 descartada por K1; N2 por K3; N4 por K2; N3
superviviente; N3/K1 y N3/K3 satisfechas; N3/K2 pendiente; decisión final pendiente.
**E4-V1 → N3 satisface K2 → N3 seleccionada.** Cambian alternativa y condición
abierta para contrastar dependencia de los datos de C frente a M2/K3 fijos.

**R1 → COMPLETADA**, como operacionalización conceptual. No significa que P1
haya producido humanamente S1 durante una observación ya realizada.

# 12. R2 — PM-10

| Hipótesis comparada | Resultado y fundamento |
| --- | --- |
| Opción A: ampliar ResumeExperience | REDUCIDA: su contrato no contiene frontera P1 → P2 ni participantes diferenciados; ampliarlo requeriría introducir varias diferencias nuevas. |
| Opción B: ampliar directamente PostV1IntegratedExperience | VIABLE PERO NO MÍNIMA: A/B y exchange/received existen, pero comparten el mismo estado persistente integrado y no demuestran aislamiento del estado operativo de P1. |

## H-RPOST-01 — Relevo mediante estado contextual explícito y aislado

La hipótesis superviviente exige la diferencia mínima:

```text
estado operativo de P1 ≠ contexto C entregable a P2
```

Realization derivada: **R-HPOST-M1 — Realization mínima de relevo contextual**.

```text
P1 → S1 → C persistente → P1 termina
P2 nuevo → sólo C + E4 → S2
```

**R2 → COMPLETADA. PM-10 → no deriva Architecture.** Aquí justifica construir
una realización mínima localizada, sin alterar realizaciones consolidadas ni
establecer infraestructura general.

# 13. R3 — Realización mínima y evidencia técnica

Archivos existentes, no modificados por esta documentación:

```text
src/realizations/handoff/HandoffExperience.tsx
src/realizations/handoff/HandoffExperience.test.tsx
```

## Secuencia TDD y controles observados

El ROJO inicial recogió cuatro tests y los cuatro fallaron por ausencia de
`HandoffExperience.tsx`; typecheck pasó. No hubo stub de producción ni import
estático irresoluble: un glob y una aserción hicieron explícita esa ausencia.

La implementación añadió un único archivo de producción. El test preexistente
permaneció intacto, verificado mediante SHA-256. Se observó primero T-HPOST-01 en
verde, después los dos primeros y los tres primeros; finalmente los cuatro.
Los pasos del control negativo y la variante no requirieron código adicional:
la lógica ya dependía de los datos de C.

| Control observado antes de esta edición | Resultado |
| --- | --- |
| T-HPOST-01 — Constitución y supervivencia de C | PASS. |
| T-HPOST-02 — P2 nuevo desde C incorpora E4 | PASS. |
| T-HPOST-03 — Sin C no hay continuación desde S1 | PASS técnico. |
| T-HPOST-04 — Variación N3/K2 | PASS. |
| Suite focal | 4/4 PASS. |
| Suite global | 38 archivos; 343/343 PASS. |
| Typecheck | PASS, código 0. |
| Build | PASS, Vite 8.0.16; 30 módulos transformados. |
| git diff --check | PASS, código 0. |

Comandos técnicos ya observados: `npm test -- --run src/realizations/handoff/HandoffExperience.test.tsx`,
`npm run typecheck`, `CI=true npm test -- --run`, `npm run build` y
`git diff --check`. No se repiten para esta edición exclusivamente documental.

C contiene `objective`, `mandatoryConditions`, `discardedAlternatives`,
`survivingAlternative`, `establishedChecks`, `openQuestion`, `nextAction`,
`finalDecisionPending` y `finalDecision`. Se proyecta explícitamente sin
`privateNotes`. La instancia nueva de P2 no recibe `initialWork`; el test desmonta
P1, borra el almacenamiento, entrega sólo C serializado y recarga el módulo.

La evidencia se interpreta mediante el formato contingente «identificador:
alternativa satisface condición». Sólo se continúa si la alternativa coincide
con la superviviente, la condición pertenece al objetivo, coincide la cuestión
abierta, la decisión sigue pendiente y las otras comprobaciones están
establecidas. S2 selecciona `context.survivingAlternative`; no hay nombres de
alternativa/condición hardcodeados en producción.

## Auditoría adversarial ya realizada

| Falso positivo examinado | Resultado en código y testigos auditados |
| --- | --- |
| FP-01 — P2 recibe más estado que C | REFUTADO. |
| FP-02 — C contiene conclusión final | REFUTADO. |
| FP-03 — Selección hardcodeada | REFUTADO. |
| FP-04 — E4 no es causalmente necesaria | REFUTADO: se requiere evidencia correspondiente; no su identificador literal. |
| FP-05 — Sin C existe otra ruta a S2 | REFUTADO en la realización auditada. |
| FP-06 — La variante pasa por coincidencia | REFUTADO por variante y lectura de la lógica parametrizada. |
| FP-07 — Sólo hay transporte sin continuación | REFUTADO: cambia comprobación, cuestión abierta y decisión. |
| FP-08 — No existe separación efectiva P1/P2 | REFUTADO entre instancias de la realización. |

Referencias de la auditoría sobre las versiones actuales: producción, líneas
44–60 (proyección), 73–101 (recuperación y habilitación), 142–154 (transición);
tests, líneas 87–119 (constitución y separación), 192–239 (trayectorias positiva,
negativa y variante). Estos resultados no se elevan a garantía universal,
aislamiento de procesos ni validación humana.

**R-HPOST-M1 → TÉCNICAMENTE DEFENDIBLE. R3 → CERRADA TÉCNICAMENTE.**

## Límites materiales que permanecen antes de R4

S1 se suministra como fixture; no se observa todavía su producción intelectual.
El test negativo demuestra que sin C no se habilita la transición, no que una
persona reconstruya efectivamente el trabajo. La evidencia es una afirmación en
formato local, sin validación independiente de su verdad. S2 no se persiste.
La realización sigue aislada de App: el build acredita compatibilidad del
producto existente, no acceso humano a handoff desde la aplicación publicada.

R4 deberá poder observar el análisis real de P1 y P2 y controlar la información
entregada. La UI actual recibe S1 ya estructurado, por lo que pulsar «Constituir
S1» con un fixture no acredita MHPOST-01. Antes de ejecutar R4 deberá disponerse
de un medio practicable de observación del testigo y documentarse cómo se
incorpora el S1 realmente producido, sin entregarlo como solución a P1. Esta
unidad no crea ese acceso ni modifica producción; registra el límite para no
sustituir observación humana por ejecución técnica.

# 14. Estado MHPOST antes de R4

| Criterio | Estado previo a R4 |
| --- | --- |
| MHPOST-01 | PARCIALMENTE DEMOSTRADO TÉCNICAMENTE |
| MHPOST-02 | DEMOSTRADO TÉCNICAMENTE |
| MHPOST-03 | DEMOSTRADO TÉCNICAMENTE |
| MHPOST-04 | DEMOSTRADO TÉCNICAMENTE |
| MHPOST-05 | DEMOSTRADO TÉCNICAMENTE |
| MHPOST-06 | DEMOSTRADO TÉCNICAMENTE |
| MHPOST-07 | DEMOSTRADO TÉCNICAMENTE |
| MHPOST-08 | DEMOSTRADO TÉCNICAMENTE |
| MHPOST-09 | DEMOSTRADO TÉCNICAMENTE |
| MHPOST-10 | DEMOSTRADO TÉCNICAMENTE |

MHPOST-01 es parcial porque S1 se proporciona como fixture en la realización
técnica; falta observar que P1 produzca realmente S1 mediante actividad
intelectual. El estado técnico de MHPOST-09 se limita a la discriminación
presencia/ausencia de C; la reconstrucción humana de R4 no está observada.
Ninguna fila significa PASS humano ni evaluación de CF-HPOST-01 para cierre.

# 15. R4 — Protocolo de observación humana fijado antes de ejecutar

## Roles y control de información

- **P1:** participante de origen que realiza el análisis inicial.
- **P2:** participante nuevo que toma el relevo sin conocer el estado privado de P1.
- **OBSERVADOR:** controla la información entregada y registra evidencia por criterio.

Antes de empezar se identificarán participantes, fecha, medio de observación,
versión del código y materiales entregados. El observador conservará problema y
evidencia inicial, S1 producido, C entregado, momento de E4 y actuaciones de P2.
No entregará a P2 notas privadas ni la solución S2 como instrucción.
Las reglas PASS/FAIL siguientes quedan fijadas ahora y no se ajustarán al
resultado de la sesión. Si falta evidencia, el criterio queda sin PASS.

## Fase A — Producción real de S1

P1 recibe únicamente problema inicial y evidencia inicial; E4 queda retenida.
Debe analizar y producir S1, no copiar el fixture del test. El problema exige
satisfacer K1, K2 y K3. La evidencia inicial del testigo permite establecer los
descartes M1/K2, M3/K2 y M4/K3 y las comprobaciones M2/K1 y M2/K2; M2/K3 todavía
no está resuelta. El observador registra las inferencias efectivamente realizadas
por P1 hasta el estado abierto, sin suministrarle la síntesis S1 como resultado.

## Fase B — Constitución de C

P1 constituye C desde el estado realmente alcanzado. El observador comprueba
objetivo, condiciones, descartes, razones, superviviente, comprobaciones,
cuestión abierta, siguiente actuación y decisión pendiente. C debe excluir notas
privadas, estado UI, una conclusión final todavía inexistente y estado oculto
adicional. Se registra exactamente el contenido entregable; conservar toda la
sesión sin reducción no prueba por sí solo suficiencia operativa.

## Fase C — Relevo efectivo

P1 termina y deja de participar; se desmonta su instancia. Se monta P2 nuevo,
que recibe sólo C como información procedente de P1. Se excluyen props privadas,
estado React anterior, otras claves equivalentes y explicaciones adicionales de
P1 u observador. Se registra cómo se aseguró esa frontera.

## Fase D — Reconocimiento anterior a E4

Antes de entregar E4, P2 debe identificar desde C: objetivo, descartes, razones,
superviviente, comprobaciones establecidas, cuestión abierta y siguiente
actuación. El observador registra lo que P2 reconoce, lo que solicita y si tiene
que rehacer decisiones previas. Todavía no debe existir selección final.

## Fase E — Continuación mediante E4

Se entrega únicamente la nueva evidencia: **E4 → M2 satisface K3**. P2 debe
producir S2 continuando S1: integrar la comprobación pendiente con las ya
establecidas y seleccionar M2. Se registra el uso concreto de C y E4 y la
reutilización de los descartes, no sólo el texto final generado por la interfaz.

## Fase F — Control negativo sin C

Se dispone del mismo problema, evidencia inicial y E4, pero sin C. El
participante del control no debe haber conocido C o S1 en el recorrido positivo;
se asegurará esa ausencia de contaminación antes de comparar. Debe observarse
qué decisiones previamente realizadas por P1 necesita reconstruir para llegar al
resultado. Puede alcanzar la misma respuesta final.

El bloqueo del botón de la realización técnica no sustituye esta observación:
se registra el análisis humano necesario con los materiales iniciales. Para
MHPOST-09 debe aparecer reconstrucción materialmente relevante sin C que no
aparecía con C. Si esa diferencia no se observa, no se registra PASS.

## Fase G — Variación material

Se repite el protocolo con N1/K1, N2/K3 y N4/K2 como descartes, N3 superviviente,
N3/K1 y N3/K3 establecidas y N3/K2 pendiente. Después del relevo se entrega
**E4-V1 → N3 satisface K2** y se observa N3 seleccionada. Debe reproducirse la
continuidad desde contexto, sin depender de memorizar M2/K3 o trasladar al
participante una conclusión ya resuelta.

# 16. Hoja de registro MHPOST — sin ejecutar

| Criterio | Evidencia humana requerida | PASS | FAIL | Observaciones |
| --- | --- | --- | --- | --- |
| MHPOST-01 | P1 produce realmente S1 mediante actividad intelectual | ☐ | ☐ | |
| MHPOST-02 | S1 queda identificable antes del relevo | ☐ | ☐ | |
| MHPOST-03 | C conserva información pertinente | ☐ | ☐ | |
| MHPOST-04 | P1 termina y P2 toma realmente el relevo | ☐ | ☐ | |
| MHPOST-05 | P2 sólo recibe C, sin estado privado equivalente | ☐ | ☐ | |
| MHPOST-06 | P2 identifica desde C el punto alcanzado | ☐ | ☐ | |
| MHPOST-07 | P2 transforma S1 en S2 mediante E4 | ☐ | ☐ | |
| MHPOST-08 | P2 no reconstruye desde cero la parte relevante | ☐ | ☐ | |
| MHPOST-09 | Sin C aparece reconstrucción relevante | ☐ | ☐ | |
| MHPOST-10 | La propiedad se reproduce en N3/K2 | ☐ | ☐ | |

# 17. Criterios PASS/FAIL fijados para R4

| Criterio | PASS | FAIL |
| --- | --- | --- |
| MHPOST-01 | P1 produce realmente S1. | S1 sólo se suministra como fixture. |
| MHPOST-02 | Antes del relevo se identifica qué está decidido, abierto y cuál es el siguiente paso. | El estado previo es ambiguo o sólo contiene materiales brutos. |
| MHPOST-03 | C conserva las partes necesarias para continuar. | C omite información relevante. |
| MHPOST-04 | P1 deja de participar y P2 toma realmente la actividad. | P1 continúa o P2 es sólo otra etiqueta de la misma situación operativa. |
| MHPOST-05 | P2 sólo dispone de C y nueva evidencia. | Dispone de estado privado equivalente de P1. |
| MHPOST-06 | P2 identifica el punto de continuación desde C. | Necesita reconstruir o solicitar información relevante. |
| MHPOST-07 | P2 convierte S1 en S2 usando E4. | Sólo repite o resume S1. |
| MHPOST-08 | Las decisiones cerradas de P1 se reutilizan. | P2 tiene que rehacer desde cero parte relevante ya resuelta. |
| MHPOST-09 | Sin C aparece reconstrucción relevante que no aparece con C. | La presencia de C no cambia materialmente la reconstrucción necesaria. |
| MHPOST-10 | La propiedad se reproduce con N3/K2. | Depende específicamente del fixture M2/K3. |

Las casillas permanecen vacías. No se computa «9/10 técnicos» como evaluación
humana; tampoco se convierte la suficiencia técnica parcial en satisfacción del
hito. El observador deberá distinguir fallo observado de criterio aún no
evaluado, sin registrar este último como PASS.

# 18. Estado final del documento antes de R4

```text
R1
→ COMPLETADA

R2
→ COMPLETADA

R3
→ CERRADA TÉCNICAMENTE

R4
→ PENDIENTE DE EJECUCIÓN HUMANA

HITO-HPOST-01
→ NO EVALUADO HUMANAMENTE

CF-HPOST-01
→ NO EVALUADO PARA CIERRE

H-POST-01
→ ABIERTO
```

# 19. Continuidad posterior y alcance negativo

**Siguiente actuación derivada → ejecutar R4 → registrar MHPOST-01…10 uno por
uno**, con el medio practicable y el control de información descritos antes de
la observación. Esta edición no ejecuta R4 ni altera los archivos de handoff.

Sólo si se obtienen **10/10 PASS humanos** podrá registrarse posteriormente
**HITO-HPOST-01 → SATISFECHO**. Después deberá reevaluarse separadamente
CF-HPOST-01 y sólo después, si procede, H-POST-01. Cumplir el hito no se convierte
en cierre automático del criterio ni del horizonte. Un resultado insuficiente
requerirá identificar la diferencia concreta, sin adaptar retrospectivamente
las condiciones de éxito ni inventar obligaciones generales.

Esta convergencia no deriva ni demuestra PV-007, P6, Architecture, memoria
universal, historial general, persistencia indefinida, multiagente general,
automatización general de relevancia ni producto universalmente terminado.
No prescribe mecanismo técnico definitivo, interfaz definitiva ni infraestructura
general; tampoco deriva backlog técnico por mera posibilidad de mejora.

Los documentos de estado y bitácora conservan la aceptación y el relevo
estratégico previamente registrados; esta unidad no los actualiza ni modifica
otros documentos. La diferencia de detalle se debe a que 71 materializa ahora
la convergencia posterior. La documentación de 27/60/65 sigue siendo histórica
en sus respectivos alcances; ninguna se reescribe para anticipar este horizonte.


# 20. R4 — Resultado humano y trazabilidad de la observación

La persona responsable comunica **MHPOST-01…MHPOST-10 → 10/10 PASS**.
Se registra la evidencia aportada, sin atribuir al agente una observación humana
independiente ni sustituirla por los resultados técnicos de R3.

## Trayectoria focal M

P1 constituye S1 mediante el análisis inicial. C conserva objetivo, condiciones,
descartes (M1/K2, M3/K2 y M4/K3), M2 como superviviente, M2/K1 y M2/K2
establecidos, M2/K3 pendiente y la siguiente actuación. Un P2 humano independiente
recupera C. Ante **E4: M2 satisface K3**, continúa la misma actividad desde el
estado intelectual alcanzado sin reconstruir desde cero la parte relevante.
**S2 → M2 seleccionada.** La realización técnica reproduce S2.

## Control negativo: intento inválido y repetición válida

El primer intento de control negativo **NO fue válido**: al participante sin C
se le entregó información demasiado reducida/procesada. Ese intento **no cuenta
como evidencia de MHPOST-09** y no se transforma retrospectivamente en PASS.

El control negativo válido se repitió con un **caso N nuevo y un participante
no expuesto**. Sin C tuvo que reconstruir los descartes, identificar la
alternativa superviviente y la cuestión pendiente antes de aplicar E4-V1.
Con C, otro P2 independiente recibió ya ese estado intelectual y sólo tuvo que
resolver la cuestión pendiente. Esta diferencia de actuación, aunque pueda
conducir a la misma respuesta final, sustenta MHPOST-09.

## Variación material N

N1 queda descartada por K1; N2 por K3; N4 por K2. N3 es la superviviente,
con N3/K1 y N3/K3 satisfechos y N3/K2 pendiente. P2 independiente continúa
desde C; **E4-V1: N3 satisface K2** resuelve la cuestión pendiente.
**S2 → N3 seleccionada. Reproducción técnica confirmada.**

| Criterio | Resultado humano comunicado | Evidencia |
| --- | --- | --- |
| MHPOST-01 | PASS | P1 constituye S1 mediante actividad intelectual. |
| MHPOST-02 | PASS | S1 identificable antes del relevo. |
| MHPOST-03 | PASS | C conserva contexto provisional pertinente. |
| MHPOST-04 | PASS | Relevo real a P2 humano independiente. |
| MHPOST-05 | PASS | P2 recupera C sin estado oculto equivalente. |
| MHPOST-06 | PASS | P2 recibe el estado intelectual suficiente para continuar. |
| MHPOST-07 | PASS | E4 permite continuar hasta S2, M2 seleccionada. |
| MHPOST-08 | PASS | Continúa sin reconstruir desde cero la parte relevante. |
| MHPOST-09 | PASS | Control válido N: reconstrucción sin C frente a continuación con C; primer intento excluido. |
| MHPOST-10 | PASS | Variación N3/K2 y reproducción técnica confirmadas. |

**R4 → CERRADO HUMANAMENTE.** Por la regla previa de 10/10,
**HITO-HPOST-01 — Relevo contextual verificable → SATISFECHO.**

# 21. Reevaluación separada de CF-HPOST-01

El criterio se contrasta después del hito, sin deducir su cierre únicamente
del cómputo de PASS ni del verde técnico de R3.

| Diferencia exigida dentro del alcance aceptado | Evidencia y resultado |
| --- | --- |
| Contexto provisional todavía pertinente | C conserva comprobaciones establecidas y cuestión pendiente antes de E4/E4-V1. Demostrado. |
| Disponibilidad suficiente a través de relevo real P1→P2 | P2 humano independiente recupera C y continúa. Demostrado. |
| Participación efectiva de C en la actuación de P2 | Usa el estado recibido para resolver la cuestión pendiente. Demostrado. |
| Preservación suficiente del estado intelectual | Se conservan objetivo, condiciones, descartes, superviviente, comprobaciones y siguiente actuación. Demostrado. |
| Continuación de la misma actividad | La selección pendiente en S1 se resuelve en S2 mediante la nueva evidencia. Demostrado. |
| Continuación sin reconstruir desde cero la parte relevante | P2 reutiliza el análisis previo conservado en C. Demostrado. |
| Discriminación frente a almacenamiento pasivo | C interviene en la continuación observable hasta S2. Demostrado. |
| Discriminación frente a reconstrucción independiente | En el control válido N, sin C se reconstruye lo que otro P2 recibe ya elaborado con C. Demostrado. |

Las trayectorias M y N, la discriminación humana válida y la reproducción técnica
satisfacen el criterio en el alcance aceptado; no establecen suficiencia universal.
**CF-HPOST-01 — Continuidad operativa demostrada → SATISFECHO.**

# 22. Comprobación final de clausura

| Elemento | Estado final |
| --- | --- |
| Obligaciones pendientes del alcance | Ninguna demostrada. |
| Dependencias independientes pendientes | Ninguna. |
| CF-HPOST-01 | SATISFECHO. |
| GAP-HPOST-01 | CERRADO. |
| PR-HPOST-01 | AGOTADA. |
| R1 | COMPLETADO. |
| R2 | COMPLETADO. |
| R3 | CERRADO TÉCNICAMENTE. |
| R4 | CERRADO HUMANAMENTE. |

Con el hito satisfecho, el criterio reevaluado separadamente y la comprobación
final sin obligación pendiente demostrada dentro del alcance:

**H-POST-01 — Continuidad del contexto intelectual en curso entre participantes
operativos → CERRADO EN EL ALCANCE ACEPTADO Y DEMOSTRADO.**

# 23. Límites y punto de reanudación vigente

La clausura no significa continuidad contextual universalmente resuelta,
Product universalmente realizado ni plataforma final completada. No abre
automáticamente otro horizonte, P6, nueva Architecture, nueva Realization,
nueva Implementation ni backlog nuevo. Los cierres anteriores se conservan
en sus alcances.

**Única siguiente actuación permitida y punto de reanudación:** volver a aplicar
el [Manual de continuidad estratégica](../01-methodology/17-manual-de-continuidad-estrategica.md)
para comprobar si existe alguna nueva obligación positiva que justifique
continuar. Esa comprobación queda pendiente: esta clausura no deriva todavía
la obligación ni abre ningún horizonte o actuación de construcción.

El resultado vigente se resume en [estado](09-PROJECT_STATUS.md) y se registra
cronológicamente en [bitácora](10-PROJECT_JOURNAL.md). El protocolo y los estados
previos de los apartados 1–19 permanecen como historia, no como pendientes actuales.
