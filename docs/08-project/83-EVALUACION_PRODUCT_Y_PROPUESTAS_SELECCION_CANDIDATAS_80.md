# Evaluación Product y propuestas de selección de candidatas post-KGV

**Estado:** VALOR EVALUADO — cuatro candidatas con valor justificado en alcance delimitado; propuestas de selección formuladas; HUMAN GATE pendiente.

**Fecha:** 14/11/2026.

# 1. Propósito

Esta actuación aplica el procedimiento de `PRODUCT.md §3` a las cuatro candidatas formuladas en la actuación 82:

- `CI-80-01` — captura inmediata con interrupción cognitiva mínima;
- `CI-80-02` — comparación simultánea de documentos/versiones;
- `CI-80-03` — identidad autoral múltiple separada de identidad de cuenta;
- `CI-80-04` — asistencia de IA separada del contenido autoral final.

La actuación separa estrictamente:

```text
situación candidata
↓
compatibilidad
↓
diferencia humana
↓
valor y alcance
↓
valor justificado o refutado
↓
propuesta de selección o no selección
↓
HUMAN GATE
↓
compromiso Product sólo si se acepta
```

No se modificará `PRODUCT.md` antes de la aceptación humana correspondiente.

# 2. Regla Product aplicable

Product exige que el valor pueda reconstruirse como:

```text
situación candidata
↓
diferencia producida al hacerla practicable
↓
diferencia para las personas
↓
valor atribuido
↓
justificación explícita
↓
alcance
```

Una valoración positiva:

```text
NO equivale
→ selección
→ prioridad
→ arquitectura
→ realización
→ implementación
```

La selección constituye una decisión posterior y diferenciada.

# 3. Test de independencia frente a compromisos vigentes

Para evitar crear compromisos redundantes se aplica el siguiente test:

> ¿Puede existir un producto que satisfaga suficientemente todos los compromisos Product actuales y, aun así, no haga practicable la situación candidata?

Si la respuesta es **sí**, la candidata no queda absorbida por mera implicación.

Después debe comprobarse todavía si la diferencia ausente tiene valor humano suficiente.

# 4. CI-80-01 — captura inmediata con interrupción cognitiva mínima

## 4.1 Situación

Durante una actividad intelectual aparece una idea que la persona desea conservar.

El recorrido ordinario puede exigir cambiar de contexto, localizar un destino documental, registrar la idea y después reconstruir la actividad interrumpida.

## 4.2 Compatibilidad

La situación es compatible con:

- Charter — trabajo intelectual con información y contenidos;
- Platform Vision 4.1, 4.2 y 4.6;
- compromisos Product vigentes.

No exige modificar ningún resultado previo.

## 4.3 Test de absorción

Puede existir un producto que satisfaga PV-001…PV-006 y C-PV-POST-01 y que, sin embargo:

```text
permita trabajar con materiales
+
preserve continuidad
+
permita reanudar
+
respete determinación humana

pero

no ofrezca ninguna forma de conservar
una idea emergente sin abandonar
materialmente el contexto actual
```

Por tanto:

```text
absorción necesaria por Product vigente
→ NO
```

## 4.4 Diferencia humana

```text
sin situación practicable
→ cambio de contexto
→ mayor fricción
→ posible pérdida de la idea
→ coste de reconstrucción de la actividad

con situación practicable
→ conservación inmediata suficiente
→ menor ruptura
→ continuidad de la actividad
```

## 4.5 Valor justificado

El valor se atribuye a:

> **mantener abierta la posibilidad de conservar una aportación intelectual emergente sin exigir una interrupción desproporcionada de la actividad en curso.**

El valor no depende de que la idea sea finalmente buena, útil o incorporada a una obra.

Depende de que la persona pueda decidir conservarla antes de que desaparezca y continuar su actividad con fricción reducida.

## 4.6 Alcance justificado

Primer alcance Product:

```text
idea/aportación breve
+
acción de captura de baja fricción
+
conservación fiable
+
referencia temporal suficiente
+
posibilidad posterior de recuperar lo capturado
```

No se seleccionan todavía:

- clasificación automática;
- IA;
- inbox universal;
- captura multimodal;
- cualquier aplicación externa;
- interfaz concreta.

## 4.7 Veredicto de valor

```text
CI-80-01
→ VALOR JUSTIFICADO
  EN ALCANCE DELIMITADO
```

## 4.8 Propuesta de selección

Se formula provisionalmente:

**C-PV-80-01 — Captura inmediata de aportaciones emergentes**

> Cuando durante una actividad intelectual aparezca una aportación que la persona quiera conservar, el producto deberá poder hacer practicable su conservación con una interrupción operativa suficientemente reducida para no obligar a abandonar innecesariamente la actividad en curso.

### Delimitación

- no prescribe interfaz;
- no exige clasificación inmediata;
- no exige IA;
- no exige capturar desde cualquier software externo;
- no garantiza ausencia total de interrupción;
- no compromete todavía organización posterior.

**Propuesta Product:** SELECCIONAR, pendiente de HUMAN GATE.

# 5. CI-80-02 — comparación simultánea de documentos/versiones

## 5.1 Situación

La persona necesita comparar dos documentos o versiones relacionados para reconocer diferencias y decidir actuaciones posteriores.

Existe antecedente empírico directo en `CT-LE001-01 / OT-CTLE001-001`.

## 5.2 Compatibilidad

Compatible con:

- Platform Vision 4.1 — comparación de estados;
- 4.3 — relaciones/comparación;
- 4.6 — revisión y continuidad;
- Product vigente.

No exige versionado universal.

## 5.3 Test de absorción

Puede existir un producto que satisfaga todos los compromisos actuales y que permita:

- conservar documentos;
- reutilizarlos;
- reanudar trabajo;
- mantener estados pertinentes;

pero obligue a comparar cada documento de manera secuencial y externa.

Por tanto:

```text
absorción necesaria
→ NO
```

El antecedente histórico tampoco la absorbe: demostró que un comparador automático no era necesario para satisfacer PV-001, no que la comparación carezca de valor Product propio.

## 5.4 Diferencia humana

```text
comparación secuencial
→ alternancia
→ reconstrucción mental
→ mayor carga para reconocer diferencias

comparación suficientemente simultánea
→ contraste directo
→ menor reconstrucción
→ apoyo a decisiones de corrección/conservación
```

## 5.5 Valor justificado

Existe evidencia humana real de que la comparación de dos versiones era:

- necesaria;
- tediosa y lenta con el método inicial;
- suficientemente relevante para buscar otra herramienta.

El valor Product se atribuye a:

> **hacer practicable una comparación humana suficientemente directa entre documentos relacionados para reducir el coste de reconocer diferencias relevantes y actuar posteriormente sobre ellas.**

## 5.6 Alcance justificado

Primer alcance Product:

```text
2 documentos textuales relacionados
+
presentación suficientemente simultánea
+
posibilidad de reconocer diferencias
+
la persona decide qué significan
y qué actuación posterior corresponde
```

No se seleccionan:

- comparación universal de formatos;
- comparación semántica automática;
- merge automático;
- control de versiones general;
- historial universal;
- corrección automática.

## 5.7 Veredicto de valor

```text
CI-80-02
→ VALOR JUSTIFICADO
  CON APOYO EMPÍRICO DIRECTO
```

## 5.8 Propuesta de selección

**C-PV-80-02 — Comparación humana de documentos relacionados**

> Cuando una actividad requiera reconocer diferencias entre dos documentos textuales relacionados, el producto deberá poder hacer practicable una comparación suficientemente simultánea para que la persona pueda identificar las diferencias pertinentes y decidir las actuaciones posteriores.

### Delimitación

- dos documentos en el alcance inicial;
- texto;
- la plataforma no decide qué diferencia es importante;
- no prescribe algoritmo;
- no exige merge;
- no exige versionado general.

**Propuesta Product:** SELECCIONAR, pendiente de HUMAN GATE.

# 6. CI-80-03 — identidad autoral múltiple

## 6.1 Situación

Una persona posee una identidad operativa en la plataforma, pero puede querer firmar distintas obras con uno o varios alias o seudónimos.

## 6.2 Compatibilidad

Compatible con:

- Charter — creación y difusión;
- Platform Vision 4.4 — autoría/transparencia;
- 4.5 — publicación;
- PV-005 — la elección de autoría puede corresponder a la persona.

No exige alterar procedencia interna ni identidad técnica de cuenta.

## 6.3 Test de absorción

Puede existir un producto que satisfaga completamente Product vigente y:

```text
conozca una identidad de usuario
+
publique obras
+
preserve decisiones humanas

pero

obligue a usar una única firma
o no conserve identidades autorales reutilizables
```

Nada en PV-005 obliga a ofrecer múltiples identidades autorales.

Por tanto:

```text
absorción necesaria
→ NO
```

## 6.4 Diferencia humana

```text
identidad operativa única
≠
identidad autoral necesariamente única
```

La diferencia consiste en permitir que la persona determine bajo qué identidad autoral presenta una obra sin multiplicar artificialmente su identidad operativa.

## 6.5 Valor justificado

El valor se atribuye a:

- autonomía de presentación autoral;
- continuidad de un seudónimo entre obras;
- separación entre identidad interna de uso e identidad pública;
- evitar cuentas redundantes sólo para cambiar la firma.

No se atribuye valor universal: la situación importa a personas que utilizan más de una identidad autoral.

## 6.6 Alcance justificado

Primer alcance:

```text
1 perfil operativo
+
0..N identidades autorales elegidas
+
selección explícita de una identidad
para una obra/publicación
```

No incluye:

- verificación legal;
- anonimato fuerte;
- reputación;
- permisos;
- delegación de autoría;
- múltiples cuentas;
- ocultación frente al sistema.

## 6.7 Veredicto de valor

```text
CI-80-03
→ VALOR JUSTIFICADO
  EN ALCANCE AUTORAL DELIMITADO
```

La evidencia es principalmente declarativa y de coherencia humana, no una trayectoria empírica ejercida como CI-80-02.

Product no exige que todo valor deba haberse observado previamente para ser justificable.

## 6.8 Propuesta de selección

**C-PV-80-03 — Identidad autoral elegible**

> El producto deberá poder permitir que una persona mantenga una identidad operativa principal y elija, para una obra o publicación, una identidad autoral reutilizable distinta cuando así lo determine.

### Delimitación

- la identidad autoral no sustituye necesariamente la identidad interna;
- no implica anonimato;
- no prescribe modelo de cuentas;
- no prescribe autenticación;
- no determina visibilidad pública de datos internos.

**Propuesta Product:** SELECCIONAR, pendiente de HUMAN GATE.

# 7. CI-80-04 — asistencia de IA separada de la obra

## 7.1 Situación

Una persona desarrolla una obra y desea recibir apoyo de IA en forma de ideas, anotaciones, información técnica o cuestiones auxiliares sin que ese material pase automáticamente a constituir contenido de la obra.

## 7.2 Compatibilidad

Compatible con:

- Charter;
- Platform Vision 4.4;
- PV-005 — determinación humana efectiva;
- PV-006 — continuidad de posibilidades pertinentes.

No exige modificar estos compromisos.

## 7.3 Test de absorción

Debe distinguirse dos niveles.

### Nivel A — autoridad sobre incorporación

PV-005 ya protege:

```text
si incorporar una aportación a la obra
es una decisión relevante
que sigue correspondiendo a la persona
→ la plataforma debe preservar
  la posibilidad efectiva de decidirla
```

Esa parte **sí está absorbida**.

### Nivel B — situación de apoyo IA disponible

Sin embargo, puede existir un producto que satisfaga plenamente PV-005/PV-006 y que:

```text
nunca ofrezca apoyo auxiliar de IA
o
sólo permita IA actuando directamente
sobre contenido ya constituido
```

PV-005 no compromete que exista una situación de apoyo IA lateral, separado y reutilizable.

Por tanto:

```text
autoridad humana sobre incorporación
→ ABSORBIDA POR PV-005

disponibilidad de apoyo IA auxiliar
separado de la obra
→ NO ABSORBIDA
```

## 7.4 Diferencia humana

La candidata debe reducirse para evitar duplicar PV-005.

La diferencia independiente es:

> **poder disponer de aportaciones auxiliares de IA que apoyen el trabajo sin que deban constituirse como contenido de la obra.**

La selección humana sobre incorporación permanece protegida por PV-005 y no debe duplicarse como nuevo valor.

## 7.5 Valor justificado

El valor independiente reside en combinar:

```text
acceso a apoyo IA
+
separación funcional respecto de la obra
```

de manera que la persona pueda consultar, conservar o descartar apoyo sin transformar automáticamente el estatuto autoral del contenido principal.

Esto permite aprovechar IA manteniendo una distinción clara entre:

- material auxiliar;
- obra constituida.

## 7.6 Alcance justificado

Primer alcance Product:

```text
1 obra
+
posibilidad opcional de recibir
aportaciones auxiliares de IA
+
esas aportaciones permanecen
diferenciadas de la obra
```

La incorporación posterior, si se permite, seguirá sometida a PV-005.

No incluye:

- agentes autónomos;
- edición automática;
- generación continua;
- múltiples IA;
- razonamiento interno del modelo;
- obligación de conservar todo apoyo;
- formato literal de “archivo espejo”.

## 7.7 Veredicto de valor

```text
CI-80-04 original
→ REDUCIDA PARCIALMENTE

componente de determinación humana
→ ABSORBIDO POR PV-005

residuo independiente:
apoyo IA auxiliar separado de la obra
→ VALOR JUSTIFICADO
  EN ALCANCE DELIMITADO
```

## 7.8 Propuesta de selección

**C-PV-80-04 — Apoyo auxiliar de IA separado de la obra**

> El producto deberá poder hacer disponible, de forma opcional, apoyo auxiliar de IA asociado a una obra sin que ese apoyo adquiera por sí mismo el estatuto de contenido de la obra.

### Delimitación

- el apoyo puede consistir en ideas, anotaciones, información técnica o cuestiones;
- no prescribe archivo espejo;
- no compromete generación de texto final;
- no autoriza incorporación automática;
- la decisión relevante de incorporación sigue regida por PV-005;
- no deriva autonomía agéntica.

**Propuesta Product:** SELECCIONAR EN FORMULACIÓN REDUCIDA, pendiente de HUMAN GATE.

# 8. Comparación de valor Product

La evaluación produce:

| Candidata | Compatibilidad | Valor | Independencia frente a Product vigente | Resultado |
| --- | --- | --- | --- | --- |
| CI-80-01 | compatible | justificado | independiente | propuesta de selección |
| CI-80-02 | compatible | justificado con evidencia directa | independiente | propuesta de selección |
| CI-80-03 | compatible | justificado | independiente | propuesta de selección |
| CI-80-04 | compatible | justificado tras reducción | independencia parcial: determinación absorbida; apoyo IA no absorbido | propuesta de selección reducida |

No se asigna prioridad entre ellas.

# 9. ¿Debe alguna quedar fuera por falta de evidencia?

Se examina el contraargumento:

> sólo CI-80-02 posee evidencia empírica ejercida suficiente; las demás deberían esperar.

Product no establece que el valor sólo pueda justificarse mediante observación experimental previa.

Sí exige reconstruir explícitamente:

- situación;
- diferencia;
- personas;
- valor;
- alcance.

CI-80-01, CI-80-03 y CI-80-04 poseen fundamento humano explícito comunicado por la persona responsable y diferencias delimitables.

La menor evidencia empírica deberá influir posteriormente en:

- validación;
- criterio de satisfacción;
- realización;
- posible revisión;

pero no impide por sí sola justificar valor Product en el alcance expresado.

Por tanto:

```text
valor indeterminado por falta de experimento
→ NO
```

# 10. Compatibilidad conjunta

No se identifica incompatibilidad necesaria entre los cuatro compromisos candidatos.

Pueden coexistir porque regulan situaciones distintas:

```text
C-PV-80-01
→ captura

C-PV-80-02
→ comparación

C-PV-80-03
→ identidad autoral

C-PV-80-04
→ apoyo IA auxiliar
```

No existe fundamento para resolver prioridad mediante Product en este momento.

# 11. Decisión de selección propuesta

Tras justificar el valor, Product puede formular las siguientes propuestas:

```text
C-PV-80-01
→ PROPUESTA: SELECCIONAR

C-PV-80-02
→ PROPUESTA: SELECCIONAR

C-PV-80-03
→ PROPUESTA: SELECCIONAR

C-PV-80-04
→ PROPUESTA: SELECCIONAR
  EN FORMULACIÓN REDUCIDA
```

Esto no significa todavía que sean compromisos vigentes.

Los precedentes del proyecto para nuevas verticales Product utilizan un HUMAN GATE antes de consolidar la selección.

# 12. Qué se aceptaría

Aceptar una propuesta convertiría únicamente su resultado delimitado en compromiso Product.

No aceptaría:

- la solución técnica inicialmente imaginada;
- prioridad;
- arquitectura;
- implementación;
- satisfacción;
- generalización universal;
- las candidatas condicionadas del banco 80;
- las familias amplias SH-80-04/10/13.

# 13. HUMAN GATE pendiente

Las cuatro decisiones son independientes.

## Gate P80-01

> ¿ACEPTAS que Product seleccione `C-PV-80-01 — Captura inmediata de aportaciones emergentes` con la formulación y delimitación del apartado 4?

## Gate P80-02

> ¿ACEPTAS que Product seleccione `C-PV-80-02 — Comparación humana de documentos relacionados` con la formulación y delimitación del apartado 5?

## Gate P80-03

> ¿ACEPTAS que Product seleccione `C-PV-80-03 — Identidad autoral elegible` con la formulación y delimitación del apartado 6?

## Gate P80-04

> ¿ACEPTAS que Product seleccione `C-PV-80-04 — Apoyo auxiliar de IA separado de la obra` con la formulación reducida y delimitación del apartado 7?

Hasta decisión explícita:

```text
valor
→ JUSTIFICADO

selección Product
→ PROPUESTA

compromiso vigente
→ NO TODAVÍA
```
