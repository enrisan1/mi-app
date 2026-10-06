# Cierre de la primera realización vertical mínima post-RCA

## 1. Propósito

Este documento consolida el resultado de la primera realización vertical mínima derivada tras el cierre de RCA.

Su objetivo es dejar constancia de:

- qué debía realizarse;
- qué medios técnicos mínimos se utilizaron;
- qué casos se ejecutaron;
- qué defectos aparecieron durante la realización;
- cómo fueron corregidos;
- qué criterios de aceptación quedaron satisfechos;
- qué límites permanecen vigentes;
- y por qué puede declararse cerrada esta primera realización dentro de su alcance.

Este documento no amplía la arquitectura mínima post-RCA.

Tampoco deriva nuevas responsabilidades, unidades estructurales, funciones de plataforma ni decisiones sobre realizaciones posteriores.

---

# 2. Antecedente

La derivación positiva posterior a RCA estableció que existía una diferencia específica todavía no realizada de forma integrada:

> hacer disponible temporalmente, como una situación de trabajo conjunta, una aportación candidata junto con antecedentes relevantes del corpus y su procedencia/contexto suficiente para que una persona pueda compararlos sin reconstruir manualmente esas relaciones.

La responsabilidad de interpretar las relaciones recuperadas debía permanecer humana.

Por tanto, la realización no debía determinar:

- verdad;
- equivalencia;
- novedad;
- redundancia;
- relevancia;
- incorporación;
- eliminación.

La realización debía terminar antes de esas decisiones.

---

# 3. Responsabilidades estructurales realizadas

La primera realización vertical mínima debía hacer operativas las tres responsabilidades irreducibles derivadas.

## 3.1. RR-RCA-01 — Recuperar antecedentes relacionados

> Hacer disponibles antecedentes del corpus potencialmente relacionados con una aportación candidata.

## 3.2. RR-RCA-02 — Contextualizar antecedentes

> Mantener disponible para una ocurrencia recuperada su procedencia y contexto, de forma que puedan ampliarse o ajustarse durante la comparación sin perder la identidad ni el anclaje documental de la ocurrencia.

La realización no certifica semánticamente que un contexto sea suficiente.

Hace posible disponer de él y ampliarlo conservando la referencia documental.

## 3.3. RR-RCA-03 — Constituir y mantener la situación de comparación

> Mantener temporalmente disponible como una única situación de trabajo la aportación candidata junto con los antecedentes contextualizados necesarios para que una persona pueda compararlos sin reconstruir manualmente esa relación.

---

# 4. Pregunta experimental

La realización fue sometida a la siguiente pregunta:

## RVM-RCA-Q01

> ¿Puede una realización mínima tomar una aportación candidata real, recuperar del corpus antecedentes potencialmente relacionados, mantener para cada uno referencia de ocurrencia, procedencia y contexto, y presentar todo ello como una situación conjunta suficientemente estable para que una persona pueda realizar la comparación sin reconstruir manualmente esas relaciones?

El máximo resultado permitido era:

```text
situación de comparación utilizable
```

y no:

```text
decisión documental
```

---

# 5. Realización técnica utilizada

La realización experimental quedó constituida por dos piezas técnicamente diferenciadas.

## 5.1. Motor de recuperación

Se reutilizó el motor previamente construido y congelado:

```text
experiments/r-exp-rca-01/r_exp_rca01_v2.py
```

Este motor ya había sido sometido a diagnóstico, revisión, regresión y prueba ciega durante RCA.

No se construyó un nuevo recuperador simplificado porque ello habría reintroducido limitaciones ya conocidas de realizaciones anteriores.

Durante las pruebas de la realización vertical mínima el motor permaneció sin modificaciones.

SHA-256 registrado durante las ejecuciones:

```text
1df7a7745e8ed8772ff49d4a348f01e8b953312bab6c422dfff5ffae864d93b6
```

## 5.2. Adaptador de situación de comparación

Se construyó:

```text
experiments/rvm-rca/rca_probe.py
```

Su función no consiste en decidir sobre los antecedentes recuperados.

Su responsabilidad experimental consiste en:

- establecer la candidata;
- comprobar su correspondencia cuando existe un control esperado;
- ejecutar el motor;
- conservar la estructura instrumental de la recuperación;
- identificar ocurrencias documentales concretas;
- mantener procedencia;
- mantener estado del corpus;
- proporcionar contexto;
- constituir un informe conjunto de comparación;
- distinguir estados instrumentales diferentes;
- preservar explícitamente la frontera de decisión humana.

---

# 6. Estructura instrumental conservada

El motor v2 distingue entre:

```text
antecedentes principales
+
reserva especializada
```

y dentro de la reserva puede distinguir canales:

```text
WORD
CHAR
LSA
```

Estas categorías pertenecen exclusivamente a la estructura técnica contingente del motor.

No constituyen:

- clasificación semántica;
- nuevas responsabilidades arquitectónicas;
- nuevas unidades del dominio;
- nuevas entidades conceptuales.

Una unidad técnica de recuperación puede remitir a una o varias ocurrencias documentales concretas.

Las ocurrencias permanecen diferenciadas por su localización documental aunque compartan contenido.

Por tanto:

```text
unidad técnica de recuperación
        ↓
1..n ocurrencias documentales
```

no implica:

```text
unidad técnica de recuperación
=
unidad estructural del dominio
```

---


# 7. Contrato técnico observable

La realización distingue diferentes resultados observables sin equiparar todos ellos a un mismo tipo de estado documental.

El contrato queda establecido así:

```text
exit 0
├── RECOVERY_OK
└── RECOVERY_OK_ZERO_RESULTS

exit 2
├── INPUT_INVALID
└── CORRESPONDENCE_INVALIDATED

exit 3
└── RECOVERY_FAILED

exit 4
└── OUTPUT_WRITE_FAILED
```

Estas condiciones no se materializan todas de la misma forma.

```text
RECOVERY_OK
RECOVERY_OK_ZERO_RESULTS
CORRESPONDENCE_INVALIDATED
RECOVERY_FAILED
→ pueden quedar consignados en un informe producido por la realización
```

En cambio:

```text
INPUT_INVALID
→ rechazo previo a la ejecución del motor
→ observable mediante stderr
→ exit 2
→ no constituye una situación de comparación válida
→ no requiere producir un informe de comparación
```

y:

```text
OUTPUT_WRITE_FAILED
→ fallo al producir materialmente el informe
→ observable mediante stderr
→ exit 4
→ no puede quedar consignado en el propio informe cuya escritura ha fallado
```

Por tanto:

```text
código de salida
≠
status documental necesariamente persistido
```

El contrato preserva especialmente:

```text
resultado vacío válido
≠
fallo instrumental
```

```text
entrada inválida
≠
fallo del recuperador
```

```text
éxito técnico del recuperador
≠
correspondencia conservada
```

y:

```text
imposibilidad de producir el informe
≠
resultado de recuperación
```

---

# 8. Criterios de aceptación

La primera realización vertical mínima fue evaluada mediante los siguientes criterios.

## AR-RVM-01 — Recuperación útil

La realización debe recuperar antecedentes materialmente útiles para la comparación y no puede satisfacer el criterio mediante una política trivial de ausencia permanente o recuperación arbitraria.

## AR-RVM-02 — Procedencia y contexto

La procedencia y el contexto de cada ocurrencia recuperada deben permanecer disponibles dentro de la situación de comparación sin obligar a reconstruirlos mediante búsquedas externas.

## AR-RVM-03 — Situación conjunta

La candidata y los antecedentes contextualizados deben permanecer disponibles como una misma situación de trabajo durante la comparación.

## AR-RVM-04 — Granularidad

Debe ser posible trabajar con diferencias parciales sin perder la relación entre la parte examinada y su procedencia documental.

## AR-RVM-05 — Neutralidad

La realización no debe convertir recuperación o proximidad instrumental en equivalencia, novedad, redundancia, relevancia o decisión documental.

## AR-RVM-06 — Ausencia de reconstrucción instrumental externa

La persona no debe necesitar reproducir manualmente la cadena:

```text
buscar
→ localizar
→ abrir
→ recuperar procedencia
→ reconstruir contexto
→ recordar relaciones
→ volver a la candidata
```

para constituir la situación básica de comparación.

## AR-RVM-07 — Distinción entre vacío y fallo

La realización debe distinguir una recuperación válida con cero antecedentes de una imposibilidad instrumental de realizar la recuperación.

---

# 9. RVM-EXP-01 — L65

## 9.1. Candidata

Fuente:

```text
/home/enrisan/Escritos/Hispanidad/Libro Hispanidad/Justicia real en la américa española - César pérez guevara.md
```

Línea:

```text
65
```

SHA-256 del texto candidato:

```text
124b4d5afa2810600c1443a1771cc54a064d249ed3af9227a5ec7bd40e5414b5
```

## 9.2. Corpus de control

Se utilizó el estado histórico anterior a la depuración e incorporación posteriores:

```text
/home/enrisan/Escritos/Hispanidad/Libro Hispanidad/copias-seguridad/Y tú de quién eres - antes primera depuración RCA.md
```

Estado:

```text
2747 líneas
```

SHA-256:

```text
5fb24b916cf89069d4901d52c48abd9381167b464772608aca07be6f80f90af9
```

Se utilizó como control histórico la ocurrencia:

```text
2739
```

## 9.3. Primera ejecución

La primera versión de `rca_probe.py` produjo:

```text
RECOVERY_OK
motor = 0
21 ocurrencias documentales únicas
control 2739 = PRESENT
```

La recuperación era materialmente correcta, pero apareció un defecto de realización.

El adaptador había expandido correctamente las ocurrencias documentales concretas, pero había eliminado de la presentación la estructura mediante la cual el motor distinguía:

- núcleo principal;
- reserva especializada;
- canal WORD;
- canal CHAR;
- canal LSA;
- posición dentro de cada grupo;
- metadatos W/C/L;
- agrupación de varias ocurrencias bajo una misma unidad recuperada.

Como consecuencia, una persona tenía que inspeccionar la evidencia bruta del motor para reconstruir manualmente esas relaciones.

Esto impedía considerar satisfecho `AR-RVM-06`.

## 9.4. Clasificación del defecto

El defecto fue clasificado como:

```text
A — defecto de realización/adaptador
```

y no como:

```text
B — insuficiencia de la técnica de recuperación
C — insuficiencia del criterio de aceptación
D — carencia arquitectónica
```

Por tanto:

- no se modificó el motor;
- no se modificó la arquitectura;
- no se modificó el corpus.

Se corrigió exclusivamente `rca_probe.py`.

La versión anterior quedó conservada como:

```text
experiments/rvm-rca/rca_probe_v1.py
```

## 9.5. Segunda ejecución

Tras corregir el adaptador se obtuvo:

```text
RECOVERY_OK

unidades de recuperación: 9
antecedentes principales: 5
reserva especializada: 4
ocurrencias documentales únicas: 21
```

La estructura quedó conservada como:

```text
Principal 1
→ 2739

Principal 2
→ 226
→ 366
→ 1600
→ 1691

Principal 3
→ 238
→ 378
→ 1612
→ 1703

Principal 4
→ 59

Principal 5
→ 240
→ 380
→ 1614
→ 1705
```

Reserva especializada:

```text
WORD 1
→ 13

WORD 2
→ 451
→ 624
→ 1899

LSA 1
→ 976
→ 2238

LSA 2
→ 83
```

No apareció reserva CHAR en esta ejecución.

La ocurrencia histórica `2739` permaneció recuperada y contextualizada.

Resultado:

```text
RVM-EXP-01
→ superado
```

---

# 10. RVM-EXP-02 — L8

## 10.1. Candidata

Fuente:

```text
/home/enrisan/Escritos/Hispanidad/Libro Hispanidad/Madre Patria - Marcelo Gullo.md
```

Línea:

```text
8
```

Texto candidato:

> Tan sincero y profundo fue ese cuestionamiento que el 15 de abril de 1550 Carlos V ordenó detener la conquista de las nuevas tierras hasta que la cuestión estuviese definitivamente resuelta.

SHA-256 del texto:

```text
9c972cae8a748e7b6386b524e28f8048f9231cd0dbd6814b71e4785c3c42dd83
```

## 10.2. Corpus histórico

Se localizó y verificó el estado exacto anterior a las incorporaciones positivas de la prueba ciega RCA v2:

```text
/home/enrisan/Escritos/Hispanidad/Libro Hispanidad/copias-seguridad/Y tú de quién eres - antes incorporacion RCA v2 L6.md
```

Estado:

```text
1633 líneas
```

SHA-256:

```text
240f49596f112146286941bdd49ebb36c1e9aebf2aedc99675b8222435a67030
```

Este estado evita contaminar la prueba con la incorporación posterior derivada precisamente de L8.

## 10.3. Resultado instrumental

La realización produjo:

```text
RECOVERY_OK

unidades de recuperación: 9
antecedentes principales: 5
reserva especializada: 4
ocurrencias documentales únicas: 15
```

Las quince ocurrencias documentales fueron:

```text
267
303
359
532
562
580
608-609
851
881
1028
1054
1146
1357
1520
1556
```

## 10.4. Diferencia granular observable

Entre los antecedentes recuperados aparecieron formulaciones que ya representaban:

```text
Carlos V
+
cuestionamiento de la legitimidad
+
suspensión o detención de la conquista
+
controversia de Valladolid
+
1550
```

Entre ellas:

```text
1550 controversia de Valladolid
...
se detiene la conquista
```

y formulaciones que describían la suspensión de nuevas exploraciones mientras se resolvía la legitimidad de la conquista.

La fecha exacta:

```text
15 de abril de 1550
```

aparecía en la candidata pero no en las ocurrencias contextualizadas recuperadas.

Esto no permite afirmar:

```text
la fecha exacta no existe en el corpus
```

porque:

```text
recuperado ≠ exhaustivo
```

Sí permite afirmar que la realización hizo disponible una situación en la que una persona podía observar:

```text
parte ampliamente representada
+
parte potencialmente diferencial
```

sin que la realización decidiese cuál debía incorporarse.

Este resultado reproduce la estructura de la decisión humana histórica de L8:

```text
conservar parcialmente
```

donde se incorporó la fecha exacta vinculada a la decisión de Carlos V y no se trató como nueva la detención de la conquista ya representada.

Resultado:

```text
RVM-EXP-02
→ superado
```

---

# 11. AR-RVM-07 — Control de resultado vacío

Para comprobar que:

```text
cero resultados
≠
fallo instrumental
```

se construyó un motor mínimo de control:

```text
experiments/rvm-rca/fixtures/engine-zero.py
```

junto con:

```text
experiments/rvm-rca/fixtures/corpus-zero.md
experiments/rvm-rca/fixtures/candidate-zero.md
```

El motor terminó correctamente y declaró:

```text
Núcleo principal: 0
Reserva especializada: 0
```

La realización produjo:

```text
status = RECOVERY_OK_ZERO_RESULTS
código del motor = 0
unidades de recuperación = 0
antecedentes principales = 0
reserva especializada = 0
ocurrencias documentales únicas = 0
exit = 0
```

El informe conservó explícitamente:

> Ninguna ubicación recuperada. Esto no demuestra ausencia de antecedentes.

y:

> Cero resultados no demuestra ausencia de antecedentes.

Resultado:

```text
resultado vacío válido
→ distinguido correctamente
```

---

# 12. AR-RVM-07 — Control de fallo instrumental

Se construyó además:

```text
experiments/rvm-rca/fixtures/engine-failure.py
```

Este motor produce deliberadamente:

```text
Fallo instrumental deliberado de control.
```

y termina con:

```text
exit interno = 7
```

La realización produjo:

```text
status = RECOVERY_FAILED
código del motor = 7
unidades de recuperación = 0
ocurrencias documentales únicas = 0
exit de rca_probe.py = 3
```

El informe conservó explícitamente:

> Fallo del motor ≠ recuperación válida con cero resultados.

Resultado:

```text
fallo instrumental
→ distinguido correctamente
```

Por tanto:

```text
AR-RVM-07
→ satisfecho
```

---

# 13. Control de `exit 2` — `INPUT_INVALID`

Para ejercitar la primera rama de `exit 2` se proporcionó deliberadamente una precondición falsa:

```text
SHA-256 esperado de la candidata
≠
SHA-256 real del texto candidato
```

Se utilizó como SHA esperado:

```text
0000000000000000000000000000000000000000000000000000000000000000
```

mientras que el SHA real era:

```text
42469569da596d4ad8be192072f1e5316e4fa9a70e707b9ee2ce51546b023ccf
```

La realización produjo:

```text
INPUT_INVALID:
SHA de candidata distinto:
42469569da596d4ad8be192072f1e5316e4fa9a70e707b9ee2ce51546b023ccf
```

y terminó con:

```text
exit = 2
```

La validación falló antes de alcanzar la ejecución del motor.

Por tanto:

```text
precondición inválida
→ INPUT_INVALID
→ motor no ejecutado
→ ninguna situación de comparación válida constituida
→ exit 2
```

La ausencia de informe en este caso no constituye un fallo adicional.

Expresa que la realización rechazó la entrada antes de constituir una situación de comparación sobre ella.

Resultado:

```text
INPUT_INVALID
→ ejercitado
→ comportamiento contractual corroborado
```

---

# 14. Control de `exit 2` — `CORRESPONDENCE_INVALIDATED`

Para ejercitar la segunda rama de `exit 2` se utilizaron copias desechables:

```text
experiments/rvm-rca/fixtures/corpus-correspondence.md
experiments/rvm-rca/fixtures/candidate-correspondence.md
```

y un motor de control:

```text
experiments/rvm-rca/fixtures/engine-correspondence-change.py
```

Este motor termina técnicamente de forma correcta, pero modifica deliberadamente el corpus durante su ejecución.

El estado inicial del corpus era:

```text
SHA-256 antes:
5a2f1de9dda9a032e849e0b7846aa74e55b7fe349eccc519fc031e98bf75c4ba
```

El motor terminó con:

```text
código del motor = 0
```

pero el estado posterior del corpus fue:

```text
SHA-256 después:
cff0048e56386636c8643286053b2ff592d7357b2fa49a0760f2f20a70f031e5
```

La candidata permaneció estable.

El motor también permaneció estable.

La realización detectó exclusivamente:

```text
Cambió durante la ejecución: corpus
```

y produjo:

```text
status = CORRESPONDENCE_INVALIDATED
código del motor = 0
exit de rca_probe.py = 2
```

Por tanto:

```text
entrada inicialmente válida
        ↓
motor ejecutado correctamente
        ↓
corpus modificado durante la ejecución
        ↓
correspondencia perdida
        ↓
CORRESPONDENCE_INVALIDATED
        ↓
exit 2
```

Este resultado corrobora una distinción esencial:

```text
éxito técnico del recuperador
≠
validez de la situación de comparación
```

También proporciona evidencia experimental directa para:

```text
OG-RCA-01 — Garantía de correspondencia
```

según la cual una realización no puede mantener como válida una relación cuando deja de poder establecer que continúa correspondiendo al referente y estado sobre los que fue constituida.

Resultado:

```text
CORRESPONDENCE_INVALIDATED
→ ejercitado
→ comportamiento contractual corroborado
```

---

# 15. Control de `exit 4` y regresión posterior

## 15.1. Discrepancia detectada

Tras superar los criterios experimentales se detectó una discrepancia localizada entre el contrato declarado y la implementación técnica.

El contrato preveía:

```text
exit 4
→ fallo al producir o escribir el informe
```

pero la creación y escritura del informe no traducían explícitamente un `OSError` al código contractual correspondiente.

La corrección realizada se limitó a envolver:

```text
creación del directorio de salida
+
escritura del informe
```

mediante:

```text
try
...
except OSError
→ OUTPUT_WRITE_FAILED
→ return 4
```

No se modificó:

```text
recuperación
parsing
agrupación principal/reserva
identificación de ocurrencias
contextualización
correspondencia
frontera humana
ni ningún criterio de aceptación
```

La versión inmediatamente anterior quedó conservada como:

```text
experiments/rvm-rca/rca_probe_v2.py
```

Una comparación directa confirmó que el tratamiento de `OSError` era la única diferencia sustantiva respecto de la versión que ya había superado las pruebas anteriores.

## 15.2. Prueba deliberada de fallo de escritura

Para ejercer el contrato se proporcionó como `--output` una ruta que ya existía como directorio:

```text
experiments/rvm-rca/fixtures/output-is-directory
```

La recuperación instrumental subyacente podía ejecutarse, pero `write_text()` no podía crear el informe sobre esa ruta.

La realización produjo mediante `stderr`:

```text
OUTPUT_WRITE_FAILED:
[Errno 21] Is a directory
```

y terminó con:

```text
exit = 4
```

No se produjo un informe válido.

Esto es precisamente lo esperado, porque:

```text
OUTPUT_WRITE_FAILED
```

no constituye un `status` documental que deba aparecer dentro del informe.

Es una condición terminal que expresa la imposibilidad de producirlo.

Resultado:

```text
fallo de escritura
→ identificado
→ distinguido de los estados de recuperación
→ traducido a exit 4
```

## 15.3. Regresión posterior

Después de introducir el tratamiento de `OSError` se repitió el caso de recuperación válida con cero resultados.

Se obtuvo:

```text
status = RECOVERY_OK_ZERO_RESULTS
código del motor = 0
unidades de recuperación = 0
ocurrencias documentales únicas = 0
exit = 0
```

Por tanto:

```text
corrección del fallo de escritura
→ no alteró el comportamiento normal previamente validado
```

---

# 16. Evaluación consolidada

## 16.1. Criterios de aceptación

| Criterio                                            | Evidencia principal                    | Estado   |
| --------------------------------------------------- | -------------------------------------- | -------- |
| AR-RVM-01 — Recuperación útil                       | L65 + L8                               | Cumplido |
| AR-RVM-02 — Procedencia y contexto                  | L65 + L8                               | Cumplido |
| AR-RVM-03 — Situación conjunta                      | L65 + L8                               | Cumplido |
| AR-RVM-04 — Granularidad                            | especialmente L8                       | Cumplido |
| AR-RVM-05 — Neutralidad                             | L65 + L8 + controles                   | Cumplido |
| AR-RVM-06 — Sin reconstrucción instrumental externa | L65 + L8 tras corrección del adaptador | Cumplido |
| AR-RVM-07 — Vacío distinguible de fallo             | controles ZERO y FAILURE               | Cumplido |

Resultado:

```text
AR-RVM-01
AR-RVM-02
AR-RVM-03
AR-RVM-04
AR-RVM-05
AR-RVM-06
AR-RVM-07
→ satisfechos dentro del alcance sometido a prueba
```

## 16.2. `SUCCESS-RVM-RCA-01`

El criterio global de éxito de la primera realización vertical mínima exigía comprobar conjuntamente ocho condiciones.

| Condición                                                                        | Evidencia                                    | Estado   |
| -------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| L65 y L8 pueden introducirse como candidatas                                     | RVM-EXP-01 + RVM-EXP-02                      | Cumplida |
| se recuperan antecedentes materialmente útiles                                   | L65 + L8                                     | Cumplida |
| cada antecedente conserva ocurrencia, procedencia y contexto                     | informes de ambas ejecuciones                | Cumplida |
| candidata y antecedentes permanecen en una situación conjunta                    | informes de comparación                      | Cumplida |
| pueden observarse comparaciones parciales                                        | especialmente L8                             | Cumplida |
| se conserva la validez estructural exigida mientras existe correspondencia       | controles de estado + prueba de invalidación | Cumplida |
| no es necesaria la reconstrucción instrumental externa de las relaciones básicas | L65 + L8                                     | Cumplida |
| la realización no adopta la decisión intelectual o documental                    | frontera humana explícita                    | Cumplida |

Por tanto:

```text
SUCCESS-RVM-RCA-01
→ satisfecho dentro del alcance experimental definido
```

Esta conclusión no significa que la recuperación sea exhaustiva ni que la técnica utilizada constituya una solución general óptima.

Significa exclusivamente que la primera vertical mínima consiguió realizar el resultado para el cual fue positivamente derivada.

## 16.3. `Valid-RCA`, `Valid⁺` y `RF-RCA-01`

La realización también debía preservar los compromisos de validez y frontera derivados de la arquitectura mínima.

### `Valid-RCA`

Durante las ejecuciones válidas se conservaron:

```text
referente candidato
+
referencia a ocurrencia concreta
+
procedencia
+
estado del corpus
+
anclaje documental
+
granularidad utilizable
```

La correspondencia no se presupone ilimitadamente.

Cuando el corpus cambió durante la ejecución, la realización dejó de considerar válida la situación y produjo:

```text
CORRESPONDENCE_INVALIDATED
```

Por tanto, dentro de los casos ejercitados:

```text
Valid-RCA
→ preservado mientras se conserva la correspondencia
→ invalidado explícitamente cuando ésta se pierde
```

### `Valid⁺`

En las ejecuciones válidas de L65 y L8 se constituyó una situación conjunta formada por:

```text
candidata situada
+
0..n antecedentes situados
+
procedencia
+
contexto
+
relaciones instrumentales conservadas
```

sin pérdida conocida de las condiciones específicas exigidas a una situación de comparación constituida.

El control de correspondencia mostró además que una configuración cuyo estado deja de corresponder no continúa tratándose como `Valid⁺`.

Por tanto:

```text
Valid⁺
→ corroborado en las situaciones válidas ejercitadas
```

sin convertir esta corroboración experimental en una demostración universal para realizaciones futuras.

### `RF-RCA-01`

La frontera humana permaneció explícita durante todas las ejecuciones.

La realización no determinó:

```text
verdad
equivalencia
novedad
redundancia
relevancia
incorporación
eliminación
```

Por tanto:

```text
RF-RCA-01
→ preservado
```

La salida máxima observada siguió siendo:

```text
situación disponible para comparación humana
```

y no:

```text
decisión documental
```

---

# 17. Evidencia experimental consolidada

```text
RVM-EXP-01 — L65
→ caso documental real
→ antecedente histórico fuerte recuperado
→ procedencia y contexto conservados
→ estructura principal/reserva preservada
→ superado
```

```text
RVM-EXP-02 — L8
→ caso documental real
→ representación parcial observable
→ diferencia granular potencial disponible
→ decisión permanece humana
→ superado
```

```text
AR-RVM-07-Z
→ recuperación válida con cero antecedentes
→ RECOVERY_OK_ZERO_RESULTS
→ exit 0
→ superado
```

```text
AR-RVM-07-F
→ fallo instrumental deliberado
→ RECOVERY_FAILED
→ exit 3
→ superado
```

```text
CONTROL-EXIT2-INPUT
→ precondición deliberadamente inválida
→ INPUT_INVALID
→ motor no ejecutado
→ exit 2
→ superado
```

```text
CONTROL-EXIT2-CORRESPONDENCE
→ motor técnicamente correcto
→ corpus cambia durante la ejecución
→ CORRESPONDENCE_INVALIDATED
→ exit 2
→ superado
```

```text
CONTROL-EXIT4-OUTPUT
→ imposibilidad deliberada de escribir el informe
→ OUTPUT_WRITE_FAILED por stderr
→ exit 4
→ superado
```

```text
regresión posterior
→ RECOVERY_OK_ZERO_RESULTS
→ exit 0
→ camino normal conservado
→ superada
```

El contrato técnico observable queda por tanto ejercitado en todas las ramas actualmente definidas:

```text
exit 0
✔

exit 2 — INPUT_INVALID
✔

exit 2 — CORRESPONDENCE_INVALIDATED
✔

exit 3
✔

exit 4
✔
```

---

## 17.1. Artefactos de evidencia

La evidencia persistida utilizada para este cierre queda localizada principalmente en:

```text
experiments/rvm-rca/rvm-exp-01-l65.md
→ primera ejecución de L65 previa a la corrección del adaptador

experiments/rvm-rca/rvm-exp-01-l65-v2.md
→ ejecución corregida de L65

experiments/rvm-rca/rvm-exp-02-l8.md
→ ejecución de L8

experiments/rvm-rca/ar-rvm-07-zero.md
→ recuperación válida con cero resultados

experiments/rvm-rca/ar-rvm-07-failure.md
→ fallo instrumental deliberado

experiments/rvm-rca/ar-rvm-exit2-correspondence-invalidated.md
→ pérdida deliberada de correspondencia

experiments/rvm-rca/ar-rvm-07-zero-after-write-fix.md
→ regresión posterior a la corrección del fallo de escritura
```

Las versiones intermedias del adaptador se conservan como:

```text
experiments/rvm-rca/rca_probe_v1.py
experiments/rvm-rca/rca_probe_v2.py
experiments/rvm-rca/rca_probe.py
```

Dos controles no producen un informe persistido por la propia naturaleza del resultado:

```text
INPUT_INVALID
→ rechazo previo a constituir una situación de comparación
→ evidencia observable mediante stderr + exit 2

OUTPUT_WRITE_FAILED
→ imposibilidad de escribir el informe
→ evidencia observable mediante stderr + exit 4
```

Sus resultados quedan consolidados documentalmente en las secciones 13 y 15 de este documento.


# 18. Invariantes y fronteras preservadas

La realización conserva las distinciones estructurales establecidas por la arquitectura mínima.

## 18.1. Recuperación no equivale a decisión

```text
recuperar
≠
decidir
```

## 18.2. Coincidencia no equivale a equivalencia

```text
encontrar coincidencia
≠
demostrar equivalencia
```

## 18.3. Relación no equivale a redundancia

```text
contenido relacionado
≠
redundancia
```

## 18.4. Resultado vacío no equivale a ausencia

```text
cero recuperaciones
≠
ausencia demostrada de antecedentes
```

## 18.5. Fallo no equivale a vacío

```text
fallo instrumental
≠
recuperación válida sin resultados
```

## 18.6. Recuperado no equivale a exhaustivo

```text
conjunto recuperado
≠
conjunto completo demostrado de antecedentes relevantes
```

## 18.7. Situación de comparación no equivale a decisión documental

```text
situación disponible
≠
incorporación
≠
eliminación
≠
reformulación
```

La responsabilidad de interpretar y decidir permanece humana.

## 18.8. Éxito técnico no equivale a correspondencia válida

```text
motor termina correctamente
≠
situación necesariamente válida
```

La prueba de `CORRESPONDENCE_INVALIDATED` mostró que:

```text
código del motor = 0
+
corpus modificado durante la ejecución
→ correspondencia perdida
→ situación invalidada
```

Por tanto:

```text
éxito de ejecución
≠
Valid-RCA
≠
Valid⁺ automático
```

La correspondencia debe conservarse positivamente.

---

# 19. Elementos no derivados

La realización y sus pruebas no justifican por sí mismas introducir:

- interfaz gráfica;
- base de datos;
- persistencia entre sesiones;
- modelo general de relaciones;
- clasificación automática de equivalencia;
- detección automática de redundancia;
- decisión automática de novedad;
- decisión automática de relevancia;
- edición automática del corpus;
- integración con Git;
- gestión general del corpus;
- comparación autónoma corpus↔corpus;
- colaboración;
- usuarios;
- permisos;
- historial general de decisiones;
- embeddings;
- arquitectura general de recuperación;
- generalización de RCA a cualquier dominio.

La ausencia de estas capacidades no constituye una carencia de la primera realización vertical mínima porque ninguna de ellas forma parte de su alcance positivamente derivado.

---

# 20. Resultado de cierre

La evidencia obtenida permite declarar:

> **La primera realización vertical mínima post-RCA queda cerrada dentro de su alcance positivamente derivado.**

Este cierre significa que:

1. las tres responsabilidades irreducibles derivadas han podido realizarse conjuntamente;
2. los dos casos documentales reales previstos han sido ejecutados satisfactoriamente;
3. los siete criterios `AR-RVM-01…07` han sido satisfechos;
4. `SUCCESS-RVM-RCA-01` ha quedado satisfecho dentro del alcance experimental definido;
5. `Valid-RCA`, `Valid⁺` y `RF-RCA-01` han quedado corroborados dentro de los casos ejercitados;
6. las dos incidencias técnicas detectadas durante la realización —pérdida de estructura instrumental en la primera versión del adaptador y ausencia inicial de tratamiento contractual del fallo de escritura— fueron corregidas de forma localizada;
7. el contrato técnico observable ha quedado implementado y ejercitado en todas sus ramas actualmente definidas;
8. la frontera de interpretación y decisión humana se ha conservado;
9. no ha aparecido ninguna evidencia que obligue a ampliar la arquitectura mínima;
10. no ha sido necesario modificar el motor de recuperación v2;
11. el corpus real no ha sido modificado por la realización;
12. no se han derivado nuevas responsabilidades estructurales.

El resultado puede expresarse como:

```text
responsabilidades derivadas
+
arquitectura mínima
+
realización vertical
+
casos documentales reales
+
controles contractuales
+
regresión
        ↓
sin pérdida estructural conocida
dentro del alcance sometido a prueba
```

---

# 21. Alcance exacto del cierre

El cierre no afirma que:

```text
la recuperación sea exhaustiva
```

ni que:

```text
el motor empleado sea una solución óptima general
```

ni que:

```text
RCA pueda resolver cualquier corpus o cualquier situación documental
```

ni que:

```text
la arquitectura global de la plataforma esté realizada
```

ni que:

```text
toda realización posterior esté determinada
```

El resultado debe interpretarse exclusivamente como:

```text
primera realización vertical mínima
+
contrato técnico asociado
+
casos de aceptación definidos
→ cerrados dentro de su alcance
```

## 21.1. Compatibilidad con el resultado histórico de `R-EXP-RCA-01`

El cierre de esta primera realización vertical mínima no sustituye ni convierte en falsa la conclusión histórica obtenida durante las primeras pruebas de `R-EXP-RCA-01`.

Aquella investigación había establecido:

```text
utilidad local
→ corroborada

suficiencia general
→ no establecida
```

La conclusión actual se refiere a un objeto y a un alcance diferentes.

```text
R-EXP-RCA-01 histórico
→ evaluación de una realización experimental de recuperación
→ suficiencia general no establecida
```

mientras que:

```text
primera realización vertical mínima post-RCA
→ realización positivamente derivada
→ motor v2 congelado
+
adaptador de situación de comparación
+
contrato explícito
+
casos y criterios previamente delimitados
```

Por tanto:

```text
cierre de la RVM post-RCA
≠
declaración de suficiencia general del recuperador RCA
```

No existe contradicción entre ambos resultados.

La conclusión actual permanece estrictamente limitada a:

```text
primera realización vertical mínima
+
alcance positivamente derivado
+
criterios expresamente definidos
+
evidencia actualmente ejercitada
```

---

# 22. Consecuencia metodológica

El cierre de esta realización no genera automáticamente una siguiente fase.

No debe inferirse:

```text
realización cerrada
→ UI
```

ni:

```text
realización cerrada
→ base de datos
```

ni:

```text
realización cerrada
→ implementación de plataforma
```

ni:

```text
realización cerrada
→ ampliación de arquitectura
```

Cualquier actuación posterior deberá ser derivada positivamente a partir del estado consolidado del proyecto y no de una secuencia convencional de desarrollo.

---

# 23. Estado final

```text
Primera realización vertical mínima post-RCA
→ DERIVADA
→ CONSTRUIDA
→ PROBADA
→ CORREGIDA
→ SOMETIDA A REGRESIÓN
→ CERRADA EN SU ALCANCE
```

No permanecen discrepancias técnicas conocidas dentro del contrato definido para `rca_probe.py`.

No permanecen criterios de aceptación pendientes dentro del alcance de esta realización.

---
