# Cierre de la prueba prospectiva post-RVM

## 1. Propósito

Este documento registra y cierra la primera prueba prospectiva derivada tras el cierre de la realización vertical mínima post-RCA.

La prueba fue definida en:

```text
docs/06-realization/22-derivacion-de-prueba-prospectiva-post-rvm.md
```

Su objetivo no consistía en desarrollar una nueva realización, ampliar la arquitectura ni mejorar el mecanismo de recuperación.

La cuestión sometida a prueba era:

> **POST-RVM-Q01 — ¿Puede la RVM congelada sostener una nueva situación real de comparación documental, no utilizada durante su construcción, corrección, regresión o cierre, manteniendo disponibles la candidata y antecedentes contextualizados suficientes para que una persona realice la comparación sin reconstruir manualmente las relaciones instrumentales esenciales?**

La prueba debía realizarse:

- sobre una candidata documental real;
- aparecida después de la congelación del protocolo;
- sin seleccionar el caso por resultar favorable;
- sin adaptar código, arquitectura, criterios o parámetros al resultado esperado;
- manteniendo humanas las decisiones de equivalencia, novedad, redundancia, relevancia e incorporación.

---

## 2. Estado congelado previo a la prueba

Antes de seleccionar la candidata prospectiva se fijaron externamente los siguientes artefactos:

### 2.1. Protocolo prospectivo

```text
docs/06-realization/22-derivacion-de-prueba-prospectiva-post-rvm.md
```

SHA-256:

```text
3ba65a26851551a3dec9e022980ee85e1afd48684ac413b0020c86f18bcea914
```

### 2.2. Motor RCA

```text
experiments/r-exp-rca-01/r_exp_rca01_v2.py
```

SHA-256:

```text
1df7a7745e8ed8772ff49d4a348f01e8b953312bab6c422dfff5ffae864d93b6
```

### 2.3. Adaptador RVM

```text
experiments/rvm-rca/rca_probe.py
```

SHA-256:

```text
4754c627d33a96f9c00e55d6054ac0d34cefd370f73f8cc27314476b2d2723c7
```

La fijación quedó registrada en:

```text
experiments/rvm-rca/post-rvm-prospective-freeze.sha256
```

Estos artefactos permanecieron sin modificación durante la prueba.

---

## 3. Selección de la primera candidata prospectiva

La primera candidata real que satisfizo las condiciones del protocolo procedía de:

```text
/home/enrisan/Escritos/YouTube/01-transcripciones/Esto de nuestro querido amigo Zunzunegui es puro cine.md
```

SHA-256 del archivo fuente:

```text
b5e66f03382d6aadaaeeb2903aa5fb25da32b851f70ecc46ae5bf905ce58313c
```

La candidata seleccionada correspondía a:

- línea lógica 29 completa;
- línea lógica 30 completa;
- línea lógica 31 hasta `indígenas.`;
- exclusión de las marcas temporales de transcripción, tratadas como procedencia y no como contenido candidato.

Contenido candidato:

```text
Pero jamás hubo en América un ejército de ocupación. Para 1530 hay 10,000 españoles. Para 1580 hay 30,000. Para 1600, a ver, 1650 hay 60,000 españoles y 750,000 indígenas.
```

La vacilación:

```text
Para 1600, a ver, 1650
```

se conservó inicialmente porque formaba parte del contenido fuente.

No se normalizó antes de la comparación.

---

## 4. Admisibilidad de la candidata

La candidata satisfizo las condiciones prospectivas establecidas.

### CP-PROS-01 — Situación documental real

Cumplida.

La candidata apareció durante trabajo documental ordinario y no fue construida para probar la realización.

### CP-PROS-02 — Novedad respecto de los casos RVM

Cumplida.

No había sido utilizada en:

- construcción;
- corrección;
- regresión;
- cierre;
- validación previa de la RVM.

### CP-PROS-03 — Ausencia de resultado preparado

Cumplida.

No se conocía de antemano qué antecedentes recuperaría el mecanismo ni qué decisión documental produciría la comparación humana.

### CP-PROS-04 — Estado previo del corpus disponible

Cumplida.

Corpus:

```text
/home/enrisan/Escritos/Hispanidad/Libro Hispanidad/Y tú de quién eres.md
```

Estado previo:

```text
1653 líneas
```

SHA-256:

```text
bfa8087d0cbd7ce28f5e1140062c3ddcfbbfc0aeb66bb8f9798fb6179028fd4d
```

### CP-PROS-05 — Decisión humana abierta

Cumplida.

Antes de la recuperación no se había decidido:

- si la candidata ya estaba representada;
- si era diferencial;
- si debía incorporarse;
- si debía reformularse;
- ni dónde debía intervenirse documentalmente.

---

## 5. Regla de selección no adaptativa

La selección fue compatible con:

```text
RS-PROS-01
```

La candidata no fue descartada ni sustituida por otra por resultar:

- poco favorable;
- demasiado favorable;
- poco interesante;
- difícil;
- ambigua;
- o incómoda para la realización.

Fue sometida a prueba como primera candidata real admisible aparecida después de la congelación.

---

## 6. Fixture técnico de candidata

El adaptador congelado exige una candidata identificable mediante archivo y línea.

Dado que la candidata real abarcaba varias líneas y sólo una parte de la última, se creó exclusivamente un fixture técnico de una línea:

```text
experiments/rvm-rca/fixtures/post-rvm-prospective-candidate-01.md
```

El fixture contiene exactamente la candidata lógica seleccionada.

SHA-256 del archivo:

```text
83d1b5884212d8e1cd47e489fa0f6ad61d0fd36d7e8a5dd46035e9d79f894228
```

La creación del fixture:

- no modificó la fuente;
- no modificó el corpus;
- no modificó el motor;
- no modificó el adaptador;
- no modificó el protocolo;
- no alteró criterios de aceptación;
- no preparó antecedentes esperados.

El estado inicial del caso quedó registrado en:

```text
experiments/rvm-rca/post-rvm-prospective-case-01.sha256
```

---

## 7. Primer intento: incidente instrumental previo a la ejecución

El primer intento fue rechazado con:

```text
INPUT_INVALID
exit 2
```

El valor esperado utilizado inicialmente para el texto candidato fue:

```text
83d1b5884212d8e1cd47e489fa0f6ad61d0fd36d7e8a5dd46035e9d79f894228
```

El adaptador calculó:

```text
53c39ed4c510182721f8343c67382ffcd6a0fd7c9213a552921b26e317f00693
```

La diferencia fue explicada por la convención de bytes:

```text
83d1...
→ contenido del fixture incluyendo LF final

53c39...
→ texto candidato validado por el adaptador sin LF final
```

No existía diferencia intelectual ni documental entre ambas representaciones.

El incidente no alcanzó el motor ni produjo una situación válida de comparación.

Quedó preservado en:

```text
experiments/rvm-rca/post-rvm-prospective-01-input-invalid.md
```

---

## 8. Clasificación del incidente inicial

El incidente fue clasificado como una discrepancia instrumental en la expectativa externa del hash.

No se identificó:

- defecto semántico;
- defecto arquitectónico;
- pérdida de correspondencia;
- necesidad de modificar el motor;
- necesidad de modificar el adaptador;
- necesidad de modificar el protocolo;
- ni necesidad de cambiar criterios o parámetros.

El protocolo permitía repetición cuando el intento quedaba impedido por un incidente externo o instrumental previo a la observación válida, siempre que:

- se preservara la evidencia del intento;
- no se alterara la realización;
- no se alteraran criterios;
- no se alteraran parámetros para favorecer un resultado.

Estas condiciones se mantuvieron.

---

## 9. Repetición técnica autorizada

La repetición utilizó como expectativa del texto candidato:

```text
53c39ed4c510182721f8343c67382ffcd6a0fd7c9213a552921b26e317f00693
```

No se modificó ningún otro elemento.

La ejecución produjo:

```text
RECOVERY_OK
exit 0
```

Informe:

```text
experiments/rvm-rca/post-rvm-prospective-01.md
```

Resultados instrumentales:

```text
10 unidades de recuperación
5 principales
5 de reserva especializada
13 ocurrencias documentales únicas
```

Se mantuvieron estables durante la ejecución:

```text
candidata
corpus
motor
adaptador
```

El corpus conservó durante toda la recuperación:

```text
bfa8087d0cbd7ce28f5e1140062c3ddcfbbfc0aeb66bb8f9798fb6179028fd4d
```

---

## 10. Antecedentes principales recuperados

Los antecedentes principales fueron:

### 10.1. Ocurrencias 418 y 1479

Ambas contenían:

```text
En 1556 hay 15000 españoles en América
```

dentro del mismo texto documental reproducido en dos posiciones diferentes.

Clasificación humana:

```text
P — representación parcial real
```

El antecedente ya representaba:

- una afirmación cuantitativa sobre población española;
- en América;
- durante el siglo XVI;
- con una magnitud relativamente reducida.

No representaba:

- 10.000 españoles en 1530;
- 30.000 españoles en 1580;
- 60.000 españoles en 1650;
- 750.000 indígenas en 1650;
- la serie temporal conjunta;
- ni la afirmación sobre inexistencia de un ejército de ocupación.

---

### 10.2. Ocurrencias 1238–1242

Contenido relativo a:

- universidades;
- indígenas;
- población urbana;
- desarrollo institucional hispanoamericano.

Clasificación:

```text
C — contextual
```

No existía solapamiento representacional con las proposiciones concretas de la candidata.

---

### 10.3. Ocurrencia 955

Contenido:

```text
Si hay algo que define la colonización española en América es su carácter urbano: no se coloniza el campo, se fundan ciudades.
```

Clasificación:

```text
C — contextual con proximidad conceptual alta
```

La relación era pertinente para contextualizar la naturaleza de la presencia española, pero:

```text
fundación de ciudades
≠
inexistencia de ejército de ocupación
```

---

### 10.4. Ocurrencia 1076

Contenido relativo a:

- actuación de los Welser;
- esclavización de indígenas;
- tensiones y conflictos;
- colonizadores españoles.

Clasificación:

```text
C — contextual lateral
```

No representaba ninguna de las proposiciones concretas de la candidata.

---

### 10.5. Ocurrencia 891

Contenido relativo a:

- separación entre las “repúblicas” de españoles e indios;
- razones de seguridad;
- posible ataque indígena;
- protección de estructuras sociales nativas.

Clasificación:

```text
C — contextual fuerte respecto de seguridad
```

La relación con la afirmación sobre ejército de ocupación era pertinente, pero no representacional.

---

## 11. Reserva especializada recuperada

### 11.1. WORD 1 — ocurrencia 25

Contenido demográfico sobre indígenas en California.

Clasificación:

```text
C — contextual demográfico
```

---

### 11.2. WORD 2 — ocurrencia 1235

Contenido:

```text
150.000 licenciados
```

desde las universidades españolas de América.

Clasificación:

```text
N? — no representacional
```

La semejanza era principalmente formal, cuantitativa y temática general.

---

### 11.3. CHAR 1 — ocurrencia 458

Contenido demográfico sobre población indígena en California.

Clasificación:

```text
C — contextual demográfico
```

---

### 11.4. CHAR 2 — ocurrencias 405, 988 y 1461

Las tres ocurrencias contenían el mismo texto sobre universidades españolas frecuentadas por indígenas.

Sin embargo, sus contextos no eran idénticos.

Clasificación:

```text
405
→ C — contextual débil

988
→ C — contextual demográfico

1461
→ C — contextual demográfico/histórico fuerte
```

La observación confirmó localmente que:

```text
texto idéntico
≠
situación documental idéntica
```

y que:

```text
ocurrencia
≠
texto
```

No se derivó de ello ninguna decisión automática sobre multiplicidad o redundancia.

---

### 11.5. LSA 1 — ocurrencias 1060–1061

Contenido relativo a:

- conquista;
- avance español;
- vencer pueblos;
- dominio territorial.

Clasificación:

```text
C — contextual fuerte respecto de conquista y dominio
```

Este antecedente fue especialmente relevante para delimitar la interpretación posible de la afirmación:

```text
jamás hubo en América un ejército de ocupación
```

pero no representaba ni decidía esa afirmación.

---

## 12. Comparación humana consolidada

La candidata fue descompuesta en:

```text
H1 → jamás hubo en América un ejército de ocupación

H2 → 1530: 10.000 españoles

H3 → 1580: 30.000 españoles

H4 → 1650: 60.000 españoles

H5 → 1650: 750.000 indígenas

HR → serie temporal y relación conjunta entre H2–H5
```

La comparación completa determinó:

### 12.1. Parte ya representada

El corpus ya contenía un antecedente cuantitativo compatible con el mismo eje demográfico:

```text
1556 → 15.000 españoles en América
```

Por tanto:

```text
eje demográfico
→ parcialmente representado
```

---

### 12.2. Parte diferencial

Permanecieron diferenciales:

```text
H1 → inexistencia de ejército de ocupación

H2 → 10.000 españoles en 1530

H3 → 30.000 españoles en 1580

H4 → 60.000 españoles en 1650

H5 → 750.000 indígenas en 1650

HR → serie 1530 → 1580 → 1650
```

---

## 13. Clasificación humana de la candidata

La candidata completa fue clasificada como:

```text
P — PARCIALMENTE REPRESENTADA
```

Esta clasificación no implicaba todavía ninguna decisión documental.

Se mantuvo:

```text
comparación
≠
decisión
```

---

## 14. Delimitación de la afirmación sobre ejército de ocupación

La comparación mostró que:

```text
conquista
≠
ejército permanente de ocupación
```

pero también que:

```text
«jamás hubo ejército de ocupación»
```

podía resultar semánticamente ambigua si no se precisaba qué tipo de presencia militar pretendía negar.

Los antecedentes recuperados documentaban:

- conquista;
- enfrentamiento;
- avance;
- victoria sobre pueblos;
- dominio territorial;
- organización de seguridad.

No permitían concluir:

```text
existió un ejército permanente de ocupación
```

ni:

```text
no existió un ejército permanente de ocupación
```

Por ello, esta parte de la candidata no fue considerada suficientemente delimitada para incorporación documental inmediata.

---

## 15. Decisión documental

La decisión humana fue:

```text
INCORPORACIÓN PARCIAL CON REFORMULACIÓN
```

### 15.1. Parte incorporable

Se decidió incorporar:

```text
1530 → 10.000 españoles

1580 → 30.000 españoles

1650 → 60.000 españoles

1650 → 750.000 indígenas

serie conjunta:
1530 → 1580 → 1650
```

### 15.2. Parte no incorporada

No se incorporó:

```text
jamás hubo en América un ejército de ocupación
```

Motivo:

> la afirmación permanecía diferencial, pero requería una delimitación semántica adicional antes de poder consolidarse documentalmente.

### 15.3. Reformulación de oralidad

Tampoco se incorporó literalmente:

```text
Para 1600, a ver, 1650
```

La vacilación se interpretó exclusivamente como autocorrección oral hacia:

```text
1650
```

---

## 16. Localización documental de la incorporación

La RVM había recuperado como antecedente más directamente relacionado las ocurrencias:

```text
418
1479
```

Ambas contenían:

```text
En 1556 hay 15000 españoles en América
```

No existía una razón positiva para multiplicar la nueva información en las dos ocurrencias.

Se decidió intervenir únicamente en:

```text
línea 418
```

y conservar sin modificación:

```text
línea 1479
```

La selección de 418 actuó como desempate documental mínimo entre dos ocurrencias equivalentes respecto de la información a incorporar.

No se dedujo de ello que 1479 fuera redundante ni que debiera eliminarse.

---

## 17. Verificación física previa a la modificación

Antes de modificar el corpus se comprobó físicamente:

```text
líneas 414–422
```

y se verificó que:

- la línea 418 seguía conteniendo el antecedente esperado;
- la numeración no había cambiado;
- el corpus seguía exactamente en el estado congelado.

SHA-256 verificada:

```text
bfa8087d0cbd7ce28f5e1140062c3ddcfbbfc0aeb66bb8f9798fb6179028fd4d
```

---

## 18. Intervención documental realizada

Antes de intervenir se creó:

```text
/home/enrisan/Escritos/Hispanidad/Libro Hispanidad/copias-seguridad/Y tú de quién eres - antes incorporación prospectiva 01.md
```

La modificación sustituyó exclusivamente:

```text
En 1556 hay 15000 españoles en América
```

por:

```text
En 1530 hay 10.000 españoles en América; en 1556, 15.000; en 1580, 30.000; y en 1650, 60.000 españoles y 750.000 indígenas
```

La intervención:

- conservó el dato previo de 1556;
- incorporó el diferencial demográfico;
- no incorporó la afirmación sobre ejército de ocupación;
- no incorporó la vacilación oral;
- no modificó la ocurrencia 1479;
- no modificó otras partes del corpus.

---

## 19. Verificación posterior

El `diff` contra la copia de seguridad mostró una única sustitución en la línea 418.

### 19.1. Copia de seguridad

```text
1653 líneas
```

SHA-256:

```text
bfa8087d0cbd7ce28f5e1140062c3ddcfbbfc0aeb66bb8f9798fb6179028fd4d
```

### 19.2. Corpus posterior

```text
1653 líneas
```

SHA-256:

```text
b86160cfc53227a284c7c532f3b02565451973538d5e1e5b62023cbd0493e1b9
```

No hubo cambio en el número de líneas.

---

## 20. Evaluación de las observaciones prospectivas

### P-RVM-01 — Candidata situada

Cumplida.

### P-RVM-02 — Recuperación suficientemente informativa

Cumplida.

La recuperación permitió distinguir efectivamente entre:

```text
ya representado
diferencial
contextual
no representacional
```

### P-RVM-03 — Ocurrencias identificables

Cumplida.

### P-RVM-04 — Procedencia y contexto disponibles

Cumplida.

### P-RVM-05 — Situación conjunta de comparación

Cumplida.

### P-RVM-06 — Granularidad útil

Cumplida.

La persona pudo comparar la candidata con antecedentes de granularidad diversa sin requerir homogeneización previa.

### P-RVM-07 — Ausencia de reconstrucción instrumental significativa externa

Cumplida.

La comparación humana pudo realizarse utilizando las relaciones, procedencias y contextos preparados por la RVM.

No fue necesario reconstruir externamente una nueva red de antecedentes para decidir el caso.

### P-RVM-08 — Neutralidad

Cumplida.

La realización no decidió:

- equivalencia;
- novedad;
- redundancia;
- relevancia;
- incorporación.

### P-RVM-09 — Correspondencia

Cumplida.

La correspondencia con candidata, corpus y estados se conservó durante la ejecución válida.

### P-RVM-10 — Frontera humana

Cumplida.

La clasificación:

```text
P — parcialmente representada
```

la decisión:

```text
incorporación parcial con reformulación
```

y la intervención documental fueron realizadas humanamente.

---

## 21. Clasificación del resultado prospectivo

El caso se clasifica como:

```text
E — ÉXITO PROSPECTIVO
```

No corresponde a:

```text
N — evidencia prospectiva insuficiente
```

porque el caso tuvo potencia suficiente para ejercer materialmente la función cuya transferencia se pretendía observar.

La recuperación produjo antecedentes suficientemente informativos para realizar una comparación y una decisión documental reales.

Tampoco se observó ninguna pérdida que obligara a clasificar el resultado dentro de las categorías adversas A–D establecidas por el protocolo.

---

## 22. Respuesta a POST-RVM-Q01

La prueba permite responder positivamente:

> **Sí. La realización vertical mínima congelada ha sostenido una situación real, nueva y prospectiva de comparación documental, haciendo disponibles una candidata junto con antecedentes relevantes y contexto suficiente para que una persona pudiera realizar la comparación y la decisión documental sin reconstruir manualmente las relaciones instrumentales esenciales y sin transferir a la realización responsabilidades interpretativas o decisorias.**

---

## 23. Cadena prospectiva observada

La trayectoria efectivamente recorrida fue:

```text
candidata documental real
        ↓
identificación situada
        ↓
RVM congelada
        ↓
recuperación
        ↓
antecedentes + ocurrencias
        ↓
procedencia + contexto
        ↓
situación conjunta de comparación
        ↓
comparación humana
        ↓
P — parcialmente representada
        ↓
decisión humana
        ↓
incorporación parcial con reformulación
        ↓
localización documental humana
        ↓
modificación física controlada
        ↓
nuevo estado verificable del corpus
```

---

## 24. Responsabilidades que permanecieron humanas

Durante toda la prueba permanecieron fuera de la realización:

```text
determinar equivalencia
determinar novedad
determinar redundancia
determinar relevancia
interpretar el alcance de «ejército de ocupación»
descomponer intelectualmente la candidata
clasificarla como parcialmente representada
decidir qué parte incorporar
decidir qué parte no incorporar
reformular el contenido
elegir la ocurrencia documental de intervención
modificar el corpus
```

La realización preparó la situación instrumental.

No sustituyó la comparación intelectual ni la decisión documental.

---

## 25. Resultados locales adicionales

La prueba prospectiva volvió a hacer visibles varias distinciones ya detectadas durante RCA:

```text
recuperar
≠
decidir
```

```text
relación temática
≠
representación
```

```text
coincidencia cuantitativa o léxica
≠
equivalencia
```

```text
texto idéntico
≠
redundancia demostrada
```

```text
ocurrencia
≠
texto
```

```text
aportación
≠
unidad indivisible de decisión
```

```text
parte diferencial
≠
incorporación automática
```

```text
incorporación
≠
adición literal de la candidata
```

Estas observaciones son resultados locales del caso.

No se generalizan automáticamente fuera de su alcance.

---

## 26. Ausencia de necesidad de modificación de la RVM

La prueba no ha demostrado una necesidad positiva de modificar:

- el motor RCA;
- el adaptador RVM;
- las responsabilidades derivadas;
- las unidades estructurales;
- las invariantes;
- los contratos;
- la arquitectura mínima;
- el protocolo prospectivo;
- los criterios de aceptación.

El incidente inicial `INPUT_INVALID` quedó explicado por una diferencia externa de convención en el cálculo de hash y no requirió modificar la realización.

---

## 27. Ausencia de necesidad de expansión arquitectónica

La prueba tampoco demuestra por sí misma necesidad de introducir:

- interfaz gráfica;
- base de datos;
- persistencia adicional;
- embeddings;
- historial permanente;
- edición automática;
- decisión automática;
- clasificación automática;
- gestión general del corpus;
- nuevas unidades arquitectónicas;
- nuevas responsabilidades.

La prueba prospectiva evaluaba transferencia de la realización mínima ya derivada.

Su éxito no constituye autorización automática para ampliar el sistema.

---

## 28. Artefactos de evidencia

### Congelación

```text
experiments/rvm-rca/post-rvm-prospective-freeze.sha256
```

### Fixture de candidata

```text
experiments/rvm-rca/fixtures/post-rvm-prospective-candidate-01.md
```

### Estado inicial del caso

```text
experiments/rvm-rca/post-rvm-prospective-case-01.sha256
```

### Incidente instrumental

```text
experiments/rvm-rca/post-rvm-prospective-01-input-invalid.md
```

### Ejecución válida

```text
experiments/rvm-rca/post-rvm-prospective-01.md
```

### Copia física previa a la incorporación

```text
/home/enrisan/Escritos/Hispanidad/Libro Hispanidad/copias-seguridad/Y tú de quién eres - antes incorporación prospectiva 01.md
```

### Corpus resultante

```text
/home/enrisan/Escritos/Hispanidad/Libro Hispanidad/Y tú de quién eres.md
```

SHA-256 final observado:

```text
b86160cfc53227a284c7c532f3b02565451973538d5e1e5b62023cbd0493e1b9
```

---

## 29. Declaración de cierre

La primera prueba prospectiva post-RVM queda cerrada con resultado:

```text
E — ÉXITO PROSPECTIVO
```

y con respuesta positiva a:

```text
POST-RVM-Q01
```

La prueba demuestra, dentro del alcance observado, que la realización vertical mínima congelada puede transferirse a una nueva situación documental real sin adaptación al caso y manteniendo la frontera entre preparación instrumental y responsabilidad humana.

---

## 30. Estado resultante

Al cierre de este documento:

```text
RCA
→ cerrado en su alcance documentado

arquitectura mínima post-RCA
→ cerrada en su alcance positivamente derivado

primera RVM post-RCA
→ cerrada

prueba prospectiva post-RVM
→ ejecutada y cerrada

resultado prospectivo
→ E

POST-RVM-Q01
→ respuesta positiva

motor
→ sin modificación

adaptador
→ sin modificación

arquitectura
→ sin ampliación derivada de la prueba

corpus
→ modificado únicamente por la decisión documental humana
```

No se deriva automáticamente de este cierre una nueva actuación.

Cualquier actuación posterior deberá justificarse positivamente a partir del estado resultante del proyecto y no por continuidad histórica, secuencia convencional de fases ni mera existencia de posibilidades técnicas.

---
