# Cierre de la Realization integrada

## Estado

**Cerrado en el alcance ejercitado.**

## Propósito

Este documento consolida el cierre de la Realization integrada construida y evaluada a partir de la trayectoria mínima H0–H7.

No introduce una nueva hipótesis experimental.

Su función consiste en:

- reunir la evidencia técnica y humana obtenida;
- determinar si el contrato realizativo mínimo ha quedado suficientemente ejercitado;
- delimitar estrictamente el alcance de la conclusión;
- registrar los residuos que no quedan justificados como nuevas actuaciones.

---

# 1. Origen

La Realization integrada se abrió para comprobar si las capacidades previamente ejercitadas de forma separada podían coexistir en una única trayectoria funcional mínima.

El contrato adoptado exigía que una persona pudiera:

1. partir de un antecedente X;
2. constituir desde él un trabajo Y;
3. evolucionar Y conservando la participación pertinente de X;
4. mantener una decisión relevante abierta a resolución humana;
5. interrumpir la actividad;
6. recuperar y reanudar efectivamente el trabajo;
7. reutilizar posteriormente una aportación pertinente del trabajo anterior en un contexto funcionalmente distinto.

La cuestión no consistía en construir una plataforma general.

Consistía en determinar si una realización mínima podía sostener conjuntamente esas funciones sin introducir capacidades no justificadas.

---

# 2. Contrato experimental H0–H7

La trayectoria utilizada quedó organizada del siguiente modo:

## H0 — antecedente previo

Existe X antes de que exista Y.

## H1 — constitución de trabajo

La persona constituye Y utilizando efectivamente X.

## H2 — evolución conservativa

Y puede evolucionar sin perder X ni convertir cada evolución en un nuevo trabajo independiente.

## H3 — determinación humana

Una decisión relevante permanece abierta a resolución de la persona.

## H4 — fijación previa a interrupción

Antes de interrumpir permanecen disponibles los elementos mínimos necesarios para continuar:

- X;
- Y;
- la relación practicable entre ambos;
- una aportación Q localizable dentro de Y.

## H5 — recuperación

Después de una interrupción operativa real, el contexto suficiente puede recuperarse sin reconstrucción externa.

## H6 — reanudación

Lo recuperado permite realizar una nueva actuación.

La recuperación no queda reducida a mera visualización.

## H7 — reutilización pertinente

Una aportación Q del trabajo anterior puede participar efectivamente en un nuevo contexto funcionalmente distinto cuando la persona determina que Q es pertinente.

La reutilización no debe imponerse cuando no exista pertinencia.

---

# 3. Realization técnica

La Realization quedó materializada mediante:

- `src/realizations/integrated/IntegratedExperience.tsx`;
- `src/realizations/integrated/IntegratedExperience.test.tsx`.

El acceso manual para evaluación se habilitó mediante un acceso experimental desde `src/main.tsx`.

La Realization mantiene un estado técnico deliberadamente reducido.

No se introdujeron:

- fases generales;
- modos;
- tipos de operación;
- identificadores generales;
- grafos;
- historial;
- versionado;
- selección técnica de Q;
- relaciones persistidas generales;
- búsqueda;
- colaboración;
- sincronización.

---

# 4. Estado mínimo utilizado

La Realization utiliza como estado persistente principal:

```text
persistentState = { previous: X, current: Y }
```

Antes de H1 no existe todavía ese par.

La constitución de Y da lugar al estado persistente.

Los demás elementos permanecen locales a las actuaciones que los necesitan.

Entre ellos:

- entrada para primer trabajo;
- entrada de evolución;
- decisión de suficiencia;
- entrada de nuevo trabajo;
- indicador local de constitución.

No se introdujo un objeto técnico independiente para Q.

Q permanece como contenido localizable dentro de Y.

---

# 5. Evidencia automatizada

La suite específica de `IntegratedExperience` terminó con:

```text
9 tests
9 verdes
0 fallos
```

La suite global del proyecto terminó con:

```text
27 archivos de test
246 tests
246 verdes
0 fallos
```

La trayectoria automatizada integrada demostró técnicamente:

- inicio con X antes de Y;
- constitución de Y;
- evolución conservando X;
- disponibilidad de decisión humana;
- persistencia mediante almacenamiento local;
- recuperación tras nuevo montaje;
- continuación desde el estado recuperado;
- constitución separada de un nuevo trabajo;
- composición de H0–H7 dentro de una única trayectoria técnica.

---

# 6. Correcciones derivadas de la auditoría técnica

La auditoría previa a la ejecución humana identificó dos sobreextensiones de estado.

## 6.1. Decisión de suficiencia

Inicialmente una decisión:

```text
Y1 es suficiente
```

podía permanecer activa después de evolucionar:

```text
Y1 → Y2
```

Eso habría atribuido a Y2 una determinación humana tomada únicamente sobre Y1.

La corrección establecida fue:

```text
evolucionar Y
→ invalidar sufficient
```

La propiedad quedó cubierta mediante prueba específica.

## 6.2. Constitución de nuevo trabajo

Inicialmente un Z constituido desde un Y podía seguir mostrándose como constituido después de evolucionar el antecedente Y.

La corrección establecida fue:

```text
evolucionar Y
→ invalidar constituted
```

No fue necesario introducir historial, relación persistida ni nueva abstracción.

---

# 7. IR-HUMAN-01

El primer ensayo humano integrado quedó registrado en:

`35-ir-human-01-ensayo-humano-trayectoria-integrada.md`

Su resultado fue:

**C. INDETERMINACIÓN PARCIAL.**

## Evidencia obtenida

`IR-HUMAN-01` demostró:

- H0;
- H1;
- H2;
- fijación previa de Q;
- H3;
- H4;
- interrupción operativa real;
- H5;
- H6;
- separación estructural entre Y y Z.

La interrupción operativa real quedó registrada entre:

- 16:57 — interrupción;
- 17:05 — reanudación.

Durante el intervalo se realizó una actividad distinta:

- lectura de un libro.

Al regresar:

- X seguía disponible;
- Y podía reconocerse;
- Q podía volver a localizarse;
- el trabajo podía continuar sin reconstrucción externa.

## Indeterminación

H7 no quedó demostrado en su dimensión de reutilización humana pertinente.

El primer Z había sido preespecificado por el protocolo.

Al repetir H7 sin predefinir Z, la persona no identificó ningún nuevo contexto en el que Q resultara realmente pertinente.

La ausencia de pertinencia no fue considerada fallo técnico.

---

# 8. Resultado conceptual de IR-HUMAN-01

El experimento permitió distinguir:

```text
trabajo nuevo
≠
reutilización obligatoria de trabajo anterior
```

Un nuevo trabajo puede:

- depender de aportaciones anteriores cuando son pertinentes;
- o ser independiente cuando no existe tal pertinencia.

La Realization no debe convertir la existencia de antecedentes en una dependencia obligatoria.

---

# 9. IR-HUMAN-02

La indeterminación específica de H7 fue aislada posteriormente en:

`36-ir-human-02-reutilizacion-pertinente-contexto-distinto.md`

El experimento evaluó únicamente H7.

No repitió H0–H6.

---

# 10. Contexto C2

C2 fue fijado antes de preguntar si Q era pertinente.

El contexto consistió en evaluar una función denominada `Reanudar proyecto` dentro de una aplicación de edición de imágenes.

La aplicación:

- recuperaba la última imagen;
- recuperaba las capas;
- mantenía sus nombres y orden;
- pero impedía nuevas operaciones de edición hasta exportar y reimportar el proyecto.

La tarea consistía en formular un criterio para decidir si esa función podía considerarse satisfactoria para continuar el trabajo.

---

# 11. Pertinencia de Q en C2

Q había sido fijado previamente como:

> Volver a mostrar el contenido no basta: debe ser posible realizar una nueva actuación desde lo recuperado.

Ante C2, la persona consideró Q pertinente.

La justificación dada fue:

> porque no es posible reanudar un proyecto sino es posible realizar nuevas actuaciones a partir de lo anterior.

La pertinencia quedó establecida antes de redactar Z.

---

# 12. Producción libre de Z

El protocolo no proporcionó el contenido de Z.

La persona redactó libremente:

> Reanudar un proyecto implica trabajar sobre cualquier aspecto creado en participaciones anteriores al punto de reinicio. Si no hay posibilidad de acceso a dichas funciones el reinicio quedaría incompleto.

Después de constituir Z, se comprobó que:

- Y seguía presente;
- Z aparecía separado;
- Z no sustituía a Y.

La persona confirmó además:

- que había utilizado efectivamente Q para producir Z;
- que no habría redactado Z de la misma manera sin Q.

---

# 13. Resultado de IR-HUMAN-02

`IR-HUMAN-02` quedó cerrado con:

**H7 demostrado en el alcance ejercitado.**

Se obtuvo evidencia conjunta de que:

- C2 fue fijado independientemente;
- Q resultó pertinente;
- la pertinencia pudo explicarse;
- Z fue redactado libremente;
- Q participó efectivamente en Z;
- Y y Z permanecieron distinguibles;
- Z cumplió una función distinta de Y;
- la reutilización no fue impuesta.

---

# 14. Evaluación conjunta

Los dos experimentos deben conservar sus resultados históricos separados.

## IR-HUMAN-01

Resultado:

**C. INDETERMINACIÓN PARCIAL.**

Demostró H0–H6 y H7 estructural.

No resolvió reutilización pertinente.

## IR-HUMAN-02

Resultado:

**H7 demostrado en el alcance ejercitado.**

Resolvió específicamente la indeterminación dejada por `IR-HUMAN-01`.

No reinterpreta retrospectivamente el primer experimento.

---

# 15. Suficiencia integrada

Considerados conjuntamente:

```text
IR-HUMAN-01
+
IR-HUMAN-02
+
evidencia automatizada
```

queda cubierta la trayectoria mínima que motivó esta Realization.

La evidencia permite sostener, en el alcance ejercitado, que una persona puede:

1. disponer de un antecedente X;
2. hacerlo participar efectivamente en la constitución de Y;
3. evolucionar Y conservando la continuidad pertinente;
4. resolver personalmente una decisión relevante;
5. interrumpir realmente la actividad;
6. recuperar el contexto suficiente;
7. realizar una nueva actuación desde lo recuperado;
8. reconocer una aportación Q del trabajo anterior;
9. determinar si Q resulta pertinente para un nuevo contexto;
10. utilizar efectivamente Q cuando resulta pertinente;
11. constituir un nuevo trabajo Z sin sustituir Y;
12. mantener independencia cuando no existe pertinencia.

---

# 16. Clasificación global

La Realization integrada queda clasificada como:

**A. SUFICIENCIA INTEGRADA EN EL ALCANCE EJERCITADO.**

Esta clasificación se refiere únicamente al contrato experimental mínimo H0–H7.

No constituye una afirmación de suficiencia general o universal.

---

# 17. Alcance de la conclusión

La conclusión queda limitada a la trayectoria efectivamente ejercitada.

Se ha demostrado una realización concreta suficiente para ese recorrido.

No se ha demostrado que:

- cualquier material pueda incorporarse;
- cualquier trabajo pueda evolucionar del mismo modo;
- cualquier interrupción pueda recuperarse;
- cualquier aportación anterior resulte pertinente;
- cualquier contexto nuevo admita reutilización;
- cualquier número de antecedentes pueda manejarse;
- la Realization constituya una plataforma general.

---

# 18. Elementos no justificados como nuevas capacidades

Los resultados no proporcionan fundamento independiente para introducir:

- múltiples usuarios;
- colaboración;
- sincronización;
- backend;
- base de datos;
- búsqueda general;
- etiquetas;
- grafos;
- historial general;
- versionado;
- undo general;
- procedencia general;
- selección técnica de Q;
- referencias persistentes generales;
- automatización de pertinencia;
- agentes;
- decisiones automáticas en lugar de la persona.

---

# 19. Relación con PV-005

La Realization aporta evidencia concreta de que una decisión relevante puede mantenerse abierta para resolución humana.

También mostró que una decisión previa no debe transferirse automáticamente cuando cambia el objeto sobre el que se tomó.

Eso motivó la invalidación de `sufficient` al evolucionar Y.

La evidencia es compatible con PV-005.

No amplía su formulación ni deriva un nuevo Product Value.

---

# 20. Relación con PV-006

La Realization aporta evidencia concreta de continuidad suficiente de posibilidades pertinentes durante:

- evolución;
- interrupción;
- recuperación;
- reanudación;
- reutilización posterior.

La suficiencia observada no exige identidad literal de todos los estados ni persistencia de todos los elementos locales.

La evidencia es compatible con PV-006.

No amplía su formulación ni deriva un nuevo Product Value.

---

# 21. Residuos

Después de `IR-HUMAN-01` existía un residuo experimental preciso:

> reutilización humana pertinente de Q en un contexto funcionalmente distinto.

`IR-HUMAN-02` resolvió ese residuo dentro del alcance ejercitado.

No queda identificado, dentro del contrato H0–H7, ningún residuo independiente que requiera otra actuación experimental inmediata.

---

# 22. Ausencia de derivaciones automáticas

El cierre de esta Realization no proporciona por sí mismo fundamento para abrir:

- una nueva investigación;
- Architecture;
- Implementation;
- una nueva fase de desarrollo;
- una generalización de `IntegratedExperience`.

Cualquier actuación posterior deberá justificarse de forma independiente.

---

# 23. Estado del código

Al cierre experimental:

- `IntegratedExperience` dispone de cobertura específica;
- la trayectoria integrada dispone de prueba automatizada;
- la suite específica se encuentra verde;
- la suite global del proyecto se encuentra verde;
- no se han observado regresiones derivadas de la Realization en el alcance cubierto por los tests.

Los artefactos técnicos permanecen delimitados dentro de la Realization integrada y del acceso experimental necesario para su ejecución manual.

---

# 24. Conclusión

La Realization integrada ha cumplido la función para la que fue abierta.

La combinación de evidencia automatizada y humana demuestra, dentro del alcance ejercitado, una trayectoria continua en la que:

- un antecedente puede participar en un trabajo;
- ese trabajo puede evolucionar;
- una decisión relevante puede permanecer en manos de la persona;
- el trabajo puede sobrevivir a una interrupción real;
- puede reanudarse operativamente;
- una aportación anterior puede reutilizarse cuando resulta pertinente;
- y esa reutilización no se convierte en obligación cuando no corresponde.

Por tanto:

> **la Realization integrada queda cerrada como suficiente en el alcance experimental H0–H7 ejercitado.**

El cierre no introduce nuevas exigencias ni presupone cuál deberá ser la siguiente actuación del proyecto.

---

## Estado final

**Realization integrada: CERRADA.**

**Clasificación: A. SUFICIENCIA INTEGRADA EN EL ALCANCE EJERCITADO.**

**Residuo experimental independiente dentro de H0–H7: ninguno identificado.**
