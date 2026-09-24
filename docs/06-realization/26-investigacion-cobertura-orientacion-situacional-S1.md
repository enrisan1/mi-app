# Investigación de cobertura de orientación situacional en S1

**Fecha de apertura:** 23/09/2026
**Estado:** cerrada documentalmente dentro del alcance investigado.
**Ámbito:** `R-U2-M1`, situación inicial `S1`.
**Evidencia de entrada:** observación humana de uso de la realización vigente.
**Fenómeno observado y atribuido:** `F-OU004-01 — Insuficiente inteligibilidad de la actuación inicial`.
**Hipótesis principal:** `H-OS-S1-01`, cerrada con resultado positivo dentro del alcance observado.
**Modificación de código:** modificación local aplicada en `S1`; validación específica `30 / 30`; validación global `233 / 233`; build y `git diff --check` correctos.
**Nueva responsabilidad:** no derivada.
**Modificación de Product:** no derivada.

---

# 1. Propósito

Esta investigación examina si la orientación situacional ya demostrada y
realizada localmente en `R-U2-M1` posee cobertura suficiente en la situación
inicial `S1`.

La investigación no parte de una funcionalidad deseada ni de una solución
textual propuesta.

Parte de una diferencia observada durante el uso efectivo de la realización
vigente:

```text
persona sin conocimiento previo del mecanismo
+
S1 inicial
+
campo identificado como “Aportación actual”
+
actuación “Crear”
↓
la identificación del campo no permite reconocer suficientemente
qué actuación se espera realizar
```

El objetivo consiste en determinar si esta diferencia:

1. ya queda absorbida por alguna responsabilidad o evidencia vigente;
2. constituye una insuficiencia de cobertura de la orientación situacional ya
   demostrada;
3. es eliminable como mera preferencia de presentación;
4. o exige una nueva necesidad local independiente.

No se presupone ninguna de estas conclusiones.

---

# 2. Origen de la investigación

Durante una nueva trayectoria de uso de `R-U2-M1` se inició la realización
desde un `S1` limpio, sin antecedente restaurado.

La superficie observada era esencialmente:

```text
Ahora

Aportación actual
[             ]

[Crear]
```

Ante la pregunta de si, sin conocer el mecanismo interno, existía algún punto
en el que no resultara claro qué situación se tenía delante o qué papel
desempeñaban sus elementos, la persona señaló como principal dificultad la
expresión:

```text
Aportación actual
```

La observación fue que esa expresión no incitaba suficientemente a introducir
un contenido ni funcionaba como orientación mínima sobre la actuación
disponible.

La actuación:

```text
Crear
```

sí permitía inferir parcialmente que debía producirse algo, pero no permitía
conocer con precisión qué se esperaba introducir ni eliminaba por sí sola la
ambigüedad inicial.

Después de ejecutar `Crear`, la situación resultó más clara: la aportación
quedó visible como resultado de la actuación.

Tras una interrupción y nueva ejecución, la presencia conjunta de la
aportación anterior y de una nueva posibilidad de actuación permitió
comprender progresivamente el funcionamiento mediante el uso.

---

# 3. Separación entre observación y solución

Durante la observación apareció como ejemplo de posible mejora una expresión
similar a:

```text
Inserte un texto
```

Esta formulación no constituye una exigencia derivada.

Debe mantenerse la separación:

```text
fenómeno observado
→ insuficiente reconocimiento de la actuación disponible

solución candidata
→ una instrucción como “Inserte un texto”
```

La investigación no presupone:

- que deba utilizarse esa frase;
- que deba existir una instrucción textual;
- que la representación deba seguir siendo texto;
- que deba modificarse el `label`;
- que deba existir `placeholder`;
- ni que una solución concreta de interfaz sea necesaria.

---

# 4. Fenómeno provisional

## `F-OU004-01 — Insuficiente inteligibilidad de la actuación inicial`

En un `S1` inicial sin antecedente y antes de disponer de experiencia previa
sobre el funcionamiento de `R-U2-M1`, la superficie vigente no permite
reconocer suficientemente, por la propia identificación del campo, qué
actuación se espera que realice la persona.

La diferencia observada puede representarse provisionalmente así:

```text
S1 inicial
+
sin antecedente
+
sin experiencia previa
+
“Aportación actual”
+
“Crear”
↓
existencia de una actuación técnicamente disponible
pero orientación humana inicial insuficiente
sobre aquello que debe hacerse
```

La atribución del fenómeno queda resuelta posteriormente en esta investigación
mediante su absorción conceptual por la orientación situacional ya demostrada.

---

# 5. Evidencia negativa obtenida en la misma trayectoria

La observación no produjo evidencia de una insuficiencia general respecto de
la relación entre aportaciones posteriores.

Antes de ejecutar una segunda actuación, la persona esperaba:

```text
X ya visible
+
introducción de Y
+
Crear
↓
X e Y visibles conjuntamente
```

La realización produjo ese resultado.

No apareció contradicción entre la expectativa previa y el comportamiento
observado.

La persona interpretó:

```text
“Aportación anterior”
→ orden temporal de inserción

“Qué has hecho ahora”
→ aportación producida posteriormente
```

sin inferir necesariamente una relación semántica entre `X` e `Y`.

La posible relación de contenido entre ambas aportaciones fue atribuida al
autor y no al sistema.

Por tanto, esta trayectoria no justifica actualmente una necesidad relativa a:

- explicación anticipada de la cardinalidad de aportaciones;
- historial;
- colección;
- conservación ilimitada;
- relación semántica entre `X` e `Y`;
- explicación completa del funcionamiento futuro;
- ni modificación de las expresiones posteriores por mera preferencia.

---

# 6. Antecedente realizativo pertinente

La evidencia histórica más próxima es:

## `E-RU2M1-10 — Distinción visible entre antecedente y actuación presente`

`E-RU2M1-10` se obtuvo durante el uso ordinario de una situación de
reanudación.

La insuficiencia entonces observada consistía en que la superficie no hacía
suficientemente distinguibles:

```text
aportación procedente de una ejecución anterior
```

y:

```text
actuación disponible en la ejecución actual
```

La presentación examinada utilizaba:

```text
De antes

X

Aportación actual
[Y]
```

La investigación estableció expresamente que:

```text
“Aportación actual”
→ introducía una actuación presente
→ sin dejar claro si la persona debía
  esperar un resultado ya existente
  o iniciar una nueva actuación
```

La insuficiencia fue reducida entonces a:

```text
lo que procede de antes
≠
lo que puede hacerse ahora
```

y la realización incorporó localmente:

```text
Retomar

Aportación anterior
X

Qué puedes hacer ahora

Aportación actual
[Y]

[Crear]
```

La evidencia posterior estableció suficiencia local para aquella situación de
reanudación.

No estableció validez universal de los textos concretos ni una nueva
responsabilidad semántica general.

---

# 7. Orientación situacional previamente establecida

La investigación histórica de orientación distinguió:

```text
orientación situacional
→ reconocer dónde se encuentra la persona
  y distinguir lo procedente de una actuación anterior
  de lo que puede realizar ahora

orientación evaluativa
→ determinar cómo una actuación puede
  contribuir o beneficiar al proyecto
```

La orientación situacional fue realizada localmente mediante dos niveles:

1. orientación general en la entrada ordinaria del producto;
2. distinción operativa dentro de la situación de reanudación.

La evidencia vigente no demuestra todavía que aquella realización cubra
necesariamente un `S1` inicial sin antecedente.

---

# 8. Diferencia actualmente investigada

La situación histórica de `E-RU2M1-10` tenía la estructura:

```text
S2(X)

X procedente de antes
+
actuación presente disponible
↓
necesidad de distinguir ambos papeles
```

La situación observada ahora tiene la estructura:

```text
S1 inicial

sin X anterior
+
actuación presente todavía no ejercida
↓
dificultad para reconocer
qué actuación está disponible
```

Por tanto:

```text
distinción antecedente / actuación presente
≠ necesariamente
reconocimiento de la actuación presente
en ausencia de antecedente
```

La investigación debe determinar si ambas diferencias son instancias de una
misma propiedad local de orientación situacional.

---

# 9. Hipótesis principal

## `H-OS-S1-01`

Después de las modificaciones ya consolidadas de `R-U2-M1`, la realización
vigente de la orientación situacional puede ser insuficiente en un `S1`
inicial porque, antes de toda experiencia de uso, la superficie no permite
reconocer suficientemente la actuación disponible para producir `X`.

### Resultado

La hipótesis queda cerrada con resultado positivo dentro del alcance observado.

Las cinco pruebas de eliminación definidas por la investigación no consiguieron
eliminar la diferencia humana localizada:

```text
PE-OS-S1-01
→ la presencia de Crear no basta

PE-OS-S1-02
→ la orientación general de App no basta

PE-OS-S1-03
→ el aprendizaje posterior mediante uso no elimina
  la insuficiencia del primer contacto

PE-OS-S1-04
→ la diferencia no queda explicada como mera preferencia textual

PE-OS-S1-05
→ la eliminación completa de orientación operativa adicional
  conserva la insuficiencia observada
```

Además, `HA-OS-S1-01` estableció que el fenómeno no constituye una familia
independiente de necesidad, sino una nueva instancia local de la orientación
situacional ya demostrada.

Por tanto:

```text
realización vigente en S1 inicial
+
trayectoria humana observada
↓
orientación situacional insuficientemente realizada
para hacer reconocible la actuación presente
↓
H-OS-S1-01
✔ cerrada con resultado positivo dentro del alcance observado
```

Este cierre no establece generalidad respecto de otras personas, situaciones o
realizaciones.

Tampoco deriva:

- una nueva responsabilidad `RU2M1-U02`;
- una modificación de `RU2M1-U01`;
- una ampliación retrospectiva de `E-RU2M1-10`;
- una modificación de Product;
- una solución concreta de interfaz;
- ni una modificación inmediata de `ResumeExperience`.

La investigación permanece abierta únicamente para reducir la propiedad mínima
que deberá conservar una eventual corrección realizativa y determinar después
si procede una prueba RED.

---

# 10. Primera hipótesis de absorción

## `HA-OS-S1-01 — Absorción por orientación situacional`

### Resultado

La hipótesis de absorción queda establecida dentro del alcance conceptual
investigado.

`F-OU004-01` no introduce una diferencia humana de clase independiente respecto
de la orientación situacional ya observada históricamente.

La documentación vigente define esa orientación mediante:

```text
orientación situacional
→ reconocer dónde se encuentra la persona
  y distinguir lo procedente de una actuación anterior
  de lo que puede realizar ahora
```

y `E-RU2M1-10` redujo la insuficiencia entonces observada a:

```text
lo que procede de antes
≠
lo que puede hacerse ahora
```

La nueva observación elimina el primer polo porque ocurre en un `S1` inicial
sin antecedente, pero conserva el segundo:

```text
S1 inicial
↓
sin aportación procedente de antes
+
actuación presente disponible
↓
reconocer suficientemente
lo que puede realizarse ahora
```

Por tanto:

```text
F-OU004-01
→ nueva instancia observada
  de orientación situacional

nueva familia independiente de necesidad
→ no derivada
```

### Límite de la absorción

Esta absorción conceptual no amplía retrospectivamente el alcance validado de
`E-RU2M1-10`.

`E-RU2M1-10` permanece como evidencia y realización local obtenida en una
situación de reanudación `S2(X)`:

```text
S2(X)
↓
antecedente restaurado
+
actuación presente
↓
hacer distinguibles ambos papeles
```

La documentación vigente no demuestra que aquella realización cubriera también
un `S1` inicial.

Por tanto debe mantenerse la distinción:

```text
absorción conceptual por orientación situacional
→ establecida

cobertura realizativa histórica en S1
→ no demostrada
```

### Resultado para la investigación vigente

La evidencia actual establece una insuficiencia de cobertura realizativa de la
orientación situacional en `S1`, no una responsabilidad local independiente.

Puede expresarse así:

```text
orientación situacional
        │
        ├── contexto general
        │   → App
        │
        └── orientación de la situación operativa
              │
              ├── S2(X)
              │   → antecedente + actuación presente
              │   → E-RU2M1-10
              │
              └── S1
                  → actuación presente sin antecedente
                  → insuficiencia actualmente observada
```

Por tanto:

```text
HA-OS-S1-01
→ absorbida conceptualmente

F-OU004-01
→ conserva valor como evidencia local de uso

RU2M1-U02
→ no derivada

RU2M1-U01
→ sin modificación

E-RU2M1-10
→ sin ampliación retrospectiva

Product
→ sin cambios
```

La absorción queda cerrada dentro del alcance investigado.

---

# 11. Pruebas de absorción

## 11.1. `RU2-N01…RU2-N05`

Debe comprobarse si alguna condición necesaria de `R-U2` exige ya que la
persona pueda reconocer previamente cómo ejercer la actuación.

La distinción provisional es:

```text
S1 permite producir X
≠ necesariamente
la persona reconoce cómo producir X
```

No se considera establecida la absorción.

## 11.2. `CY-01` / `CY-02`

Debe comprobarse si la configuración y observabilidad de la actuación
posterior implican orientación previa sobre su ejercicio.

La distinción provisional es:

```text
actuación disponible / observable
≠ necesariamente
actuación reconocible antes de realizarla
```

No se considera establecida la absorción.

## 11.3. `RU2M1-U01`

`RU2M1-U01` exige distinguir:

```text
aceptación efectiva
≠
ausencia de efecto
```

después de que la persona ejecute la actuación correspondiente.

El fenómeno actual aparece antes:

```text
antes de Crear
→ ¿qué actuación puedo realizar?

después de Crear
→ ¿ha surtido efecto?
```

No se considera establecida la absorción por `RU2M1-U01`.

## 11.4. `E-RU2M1-10`

Ésta constituye la absorción candidata principal.

Debe determinarse si la propiedad ejercida mediante `E-RU2M1-10` era
únicamente:

```text
distinguir antecedente
de actuación presente
```

o si la evidencia permite reducirla legítimamente a:

```text
hacer reconocible la actuación presente
```

con independencia de que exista o no antecedente.

La investigación no debe ampliar retrospectivamente el alcance de
`E-RU2M1-10` sin demostrar esta reducción.

---

# 12. Pruebas de eliminación

Antes de derivar cualquier modificación deberán intentarse al menos las
siguientes eliminaciones.

## `PE-OS-S1-01 — Suficiencia de Crear`

Pregunta:

> ¿La presencia de `Crear` basta para hacer reconocible la actuación inicial,
> aunque `Aportación actual` sea ambigua?

La trayectoria observada proporciona evidencia negativa para esta hipótesis de
eliminación. La persona indicó que `Crear` ayudaba a intuir por dónde podía ir
la página, pero que no hacía suficientemente reconocible qué se esperaba
introducir en el campo.

Por tanto, dentro de la trayectoria observada, la suficiencia de `Crear` como
única orientación no queda establecida y `H-OS-S1-01` sobrevive a esta prueba.

Este resultado es estrictamente local. No prescribe una solución concreta ni
deriva todavía una modificación de la realización.

## `PE-OS-S1-02 — Suficiencia de la orientación general`

Pregunta:

> ¿La orientación general proporcionada por `App` basta para resolver la
> dificultad observada en `S1`?

La inspección de la superficie vigente muestra que `App` proporciona:

```text
Dónde estás

Estás utilizando la primera realización contingente destinada al uso
del proyecto.

La situación operativa concreta en la que te encuentras se muestra a
continuación.
```

Esta información permite reconocer el contexto general en el que se encuentra
la persona, pero no identifica por sí misma la actuación concreta disponible
en el campo mostrado posteriormente por `ResumeExperience`.

La diferencia puede expresarse así:

```text
orientación general de App
→ dónde se encuentra la persona

orientación operativa en S1
→ qué actuación puede realizar ahora
```

Por tanto, dentro de la realización vigente:

```text
suficiencia de la orientación general de App
para resolver F-OU004-01
→ no establecida

eliminación del fenómeno por esta vía
→ fallida

H-OS-S1-01
→ sobrevive a PE-OS-S1-02
```

Este resultado no exige trasladar orientación adicional a `App` ni determina
todavía que deba modificarse `ResumeExperience`.

## `PE-OS-S1-03 — Aprendizaje mediante uso`

Pregunta:

> ¿Es suficiente que la persona descubra el significado de la superficie
> mediante ensayo y observación posterior?

La trayectoria observada mostró que el funcionamiento se vuelve
progresivamente comprensible después de ejercer la primera actuación.

La persona pudo inferir parcialmente el funcionamiento mediante `Crear` y,
una vez producido el primer resultado, comprender con mayor claridad qué había
ocurrido y qué podía esperar de actuaciones posteriores.

Sin embargo, este aprendizaje ocurre después de haber ejercido una actuación
cuya finalidad no resultaba suficientemente reconocible en el primer contacto.

La diferencia puede expresarse así:

```text
aprendizaje posterior mediante uso
≠
orientación suficiente antes de la primera actuación
```

La misma trayectoria proporciona además un contraste relevante.

No resultó necesario conocer anticipadamente:

- cuántas aportaciones podrían mantenerse visibles;
- cuánto tiempo permanecerían disponibles;
- qué ocurriría después de futuras inserciones;
- ni toda la mecánica posterior de la realización.

Esas propiedades pudieron aprenderse razonablemente mediante el uso.

La insuficiencia localizada es más estrecha:

```text
no es necesario explicar anticipadamente
todo el comportamiento futuro

pero

la actuación actualmente ofrecida
debe poder reconocerse suficientemente
antes de tener que ejecutarla
para descubrir qué actuación era
```

Por tanto:

```text
eliminación de F-OU004-01
por aprendizaje posterior
→ fallida dentro de la trayectoria observada

H-OS-S1-01
→ sobrevive a PE-OS-S1-03
```

El resultado permanece estrictamente local.

No establece que toda interfaz deba ser autoexplicativa, que todo
comportamiento futuro deba anticiparse ni que toda persona necesite la misma
orientación.

## `PE-OS-S1-04 — Mera preferencia textual`

Pregunta:

> ¿La diferencia entre `Aportación actual` y expresiones alternativas constituye
> únicamente una preferencia de redacción?

Se compararon tres formulaciones manteniendo la misma estructura general de la
superficie:

```text
A

Ahora

Aportación actual
[             ]

[Crear]
```

```text
B

Ahora

Escribe una aportación
[             ]

[Crear]
```

```text
C

Ahora

Introduce un texto
[             ]

[Crear]
```

La observación humana produjo diferencias funcionales de comprensión.

En `A`, la estructura permitía intuir que podía introducirse algo en el campo,
pero la expresión `Aportación actual` no hacía suficientemente reconocible qué
se esperaba hacer. Era necesario probar `Crear` para descubrir con mayor
claridad el significado de la actuación.

En `B`, quedaba claro que debía escribirse algo, pero persistía una ambigüedad
sobre qué clase de aportación se esperaba: podía inferirse que era necesario
disponer de un tema, contexto o conocimiento previo sobre el que aportar.

En `C`, la persona reconoció que podía introducir texto libre y no necesitó
ejecutar `Crear` para descubrir qué actuación estaba disponible.

La comparación puede resumirse así:

```text
A
→ actuación sólo parcialmente inferible
→ prueba de Crear necesaria para comprenderla mejor

B
→ acción de escribir reconocible
→ persiste ambigüedad sobre el contenido esperado

C
→ acción y clase de entrada suficientemente reconocibles
→ no es necesario probar Crear para descubrir la actuación
```

Por tanto, dentro de la trayectoria observada:

```text
mera preferencia textual
→ no explica suficientemente la diferencia observada

capacidad de orientación de la formulación
→ funcionalmente relevante

frase concreta obligatoria
→ no derivada

H-OS-S1-01
→ sobrevive a PE-OS-S1-04
```

El resultado no convierte `Introduce un texto` en solución normativa ni exige
una formulación literal determinada.

La evidencia sólo muestra que distintas formulaciones pueden producir
diferencias relevantes en la capacidad de reconocer la actuación antes de
ejecutarla.

La prueba queda cerrada dentro del alcance observado.

## `PE-OS-S1-05 — Eliminación completa de orientación adicional`

Pregunta:

> ¿Puede eliminarse cualquier orientación adicional en `S1` sin perder una
> diferencia humana relevante?

La superficie vigente examinada ya constituye el caso de eliminación completa
de orientación operativa adicional dentro de `S1`:

```text
Ahora

Aportación actual
[             ]

[Crear]
```

La observación humana mostró que esta superficie permite inferir parcialmente
que existe una actuación posible, pero no permite reconocer suficientemente,
antes de ejercerla, qué se espera introducir en el campo.

La persona necesitó ejecutar `Crear` para comprender con mayor claridad el
significado de la actuación.

La comparación realizada en `PE-OS-S1-04` mostró además que una formulación
distinta podía hacer reconocible la actuación antes de ejecutarla, sin que de
ello se derive una frase concreta obligatoria.

La diferencia puede expresarse así:

```text
orientación operativa adicional = 0
↓
la incertidumbre inicial observada permanece

orientación suficiente
↓
la actuación puede reconocerse antes de ejecutarla
```

Por tanto, dentro de la trayectoria observada:

```text
eliminación completa de orientación adicional
→ pierde una diferencia humana observada

superficie vigente por sí sola
→ insuficiente para resolver F-OU004-01

H-OS-S1-01
→ sobrevive a PE-OS-S1-05
```

Este resultado permanece estrictamente local.

No demuestra una necesidad universal de orientación adicional, no prescribe
una solución concreta y no establece todavía una nueva responsabilidad ni una
modificación de `ResumeExperience`.

La prueba queda cerrada dentro del alcance observado.

---

# 13. Reducción de la propiedad mínima

## `PC-OS-S1-01 — Reconocibilidad de la actuación y de su entrada en S1`

En `S1` inicial, antes de ejercer la actuación y sin conocimiento previo del
mecanismo, la persona puede reconocer suficientemente la actuación disponible
y la entrada que puede proporcionar para ejercerla, sin tener que ejecutar la
propia actuación para descubrir cualquiera de ambas.

### Derivación

La reducción conserva únicamente las diferencias que sobrevivieron a las
pruebas de eliminación.

La comparación de superficies mostró:

```text
A — “Aportación actual”
→ la estructura permite inferir parcialmente que puede introducirse algo
→ la actuación no resulta suficientemente reconocible
→ es necesario probar Crear para comprenderla mejor
```

Por tanto, debe conservarse:

```text
reconocer suficientemente
la actuación disponible
```

La formulación:

```text
B — “Escribe una aportación”
```

permitía reconocer la acción de escribir, pero mantenía incertidumbre sobre
qué clase de contenido se esperaba y podía sugerir la existencia de un tema,
contexto o conocimiento previo requerido.

La inspección de `resumeModel` y de sus tests mostró, sin embargo, que la
realización no interpreta semánticamente el contenido y que la condición
mínima de disponibilidad es únicamente la existencia de contenido observable
no vacío:

```text
value.trim().length > 0
```

Por tanto, debe conservarse también:

```text
reconocer suficientemente
la entrada que puede proporcionar
para ejercer la actuación
```

sin introducir requisitos semánticos que `R-U2-M1` no exige.

Las pruebas `PE-OS-S1-03` y `PE-OS-S1-05` mostraron además que el aprendizaje
posterior mediante uso no elimina la pérdida observada en el primer contacto.

Por ello debe conservarse:

```text
antes de ejercer la actuación
+
sin tener que ejecutarla
para descubrir qué actuación es
o qué entrada puede proporcionarse
```

### Eliminaciones conservadas

La propiedad reducida no exige:

- explicar anticipadamente todo el comportamiento futuro;
- explicar cuántas aportaciones podrán conservarse;
- explicar relaciones futuras entre aportaciones;
- interpretar semánticamente el contenido;
- exigir un tema previo;
- exigir una relación entre `X` e `Y`;
- utilizar la frase `Introduce un texto`;
- utilizar la frase `Escribe una aportación`;
- utilizar un `label` concreto;
- utilizar `placeholder`;
- utilizar una instrucción textual;
- utilizar un componente concreto;
- modificar `App`;
- generalizar la propiedad a otras realizaciones;
- ni derivar una nueva responsabilidad independiente.

### Resultado de la reducción

```text
PC-OS-S1-01
✔ reducida dentro del alcance observado

propiedad mínima conservada
→ reconocibilidad de la actuación disponible
+
reconocibilidad de la entrada que puede proporcionarse
+
antes de tener que ejecutar la actuación para descubrir ambas
```

`PC-OS-S1-01` permanece en el nivel local de esta investigación y no constituye
por sí sola una nueva responsabilidad de Product o de `R-U2-M1`.

Su función es delimitar la diferencia observable que deberá conservar cualquier
eventual corrección realizativa y servir de criterio para una posible prueba
RED posterior.

---

## Validación realizativa mediante TDD de `PC-OS-S1-01`

Una vez reducida `PC-OS-S1-01`, se abrió una prueba realizativa limitada a
`S1`.

El objetivo no fue fijar una frase normativa, sino comprobar que la superficie
vigente no hacía reconocible, antes de actuar, la entrada que la persona podía
proporcionar.

### RED

Se añadió un test específico:

```text
makes the available input recognizable before creating X in S1
```

El test exigía que, antes de ejecutar `Crear`, el campo de `S1` tuviera un
nombre accesible capaz de hacer reconocible que la entrada disponible es texto.

La comprobación se mantuvo deliberadamente abierta respecto de una frase
literal completa:

```text
textbox
+
nombre accesible que contiene “texto”
+
Crear disponible
```

La primera ejecución específica produjo:

```text
ResumeExperience
→ 30 tests

29 pasan
1 falla
```

El único fallo fue el nuevo test.

La superficie vigente exponía:

```text
Ahora

Aportación actual
[input]

[Crear]
```

y Testing Library informó:

```text
textbox
Name "Aportación actual"
```

frente al criterio esperado:

```text
textbox
name /texto/i
```

Por tanto, el RED aisló la diferencia correspondiente a `PC-OS-S1-01` sin
introducir una regresión previa.

### GREEN local

La modificación de producción se limitó al `S1` inicial:

```text
Aportación actual
→
Introduce un texto
```

No se modificó la presentación de `S2(X)`, donde `Aportación actual` permanece
dentro de la orientación ya consolidada:

```text
Qué puedes hacer ahora

Aportación actual
[Y]
```

Los selectores de los tests que ejercían realmente `S1` se adaptaron al nuevo
nombre accesible.

La primera ejecución posterior a la modificación produjo:

```text
27 / 30
```

Los tres fallos restantes no correspondían a una insuficiencia de producción.

Eran tests de trayectorias más amplias que comenzaban creando `X` en `S1` pero
todavía utilizaban el selector histórico:

```text
name: /aportación actual/i
```

Se localizaron exactamente tres casos:

```text
real interruption and resumption
→ creación inicial de X en S1

real interruption and resumption
→ creación inicial de X en S1

complete R-U2-M1 trajectory
→ creación inicial de X en S1
```

Sólo esos tres selectores de `S1` fueron adaptados.

Los selectores que producen `Y` desde `S2(X)` conservaron:

```text
name: /aportación actual/i
```

### GREEN específico final

La validación específica posterior obtuvo:

```text
ResumeExperience
→ 30 / 30 tests
```

Quedaron verdes:

```text
first execution
→ 11 / 11

later execution
→ 4 / 4

real interruption and resumption
→ 2 / 2

S2(X) as an operative resumed situation
→ 3 / 3

producing Y from S2(X)
→ 5 / 5

complete R-U2-M1 trajectory
→ 5 / 5
```

### Alcance del GREEN

El GREEN específico establece únicamente que la modificación local:

- realiza el criterio automatizado derivado de `PC-OS-S1-01`;
- conserva la aceptación observable de `X`;
- conserva la interrupción y reanudación;
- conserva la constitución de `S2(X)`;
- conserva la producción libre de `Y`;
- conserva las trayectorias completas ya protegidas;
- y no modifica la orientación consolidada de `S2(X)`.

No demuestra por sí solo inteligibilidad humana general.

La expresión:

```text
Introduce un texto
```

permanece como manifestación contingente seleccionada para este GREEN.

El contrato automatizado protege una propiedad más estrecha mediante:

```text
name /texto/i
```

y no convierte la frase literal completa en una obligación normativa.

La validación técnica global posterior obtuvo:

```text
suite global
→ 26 archivos de test
→ 233 / 233 tests

build
→ PASS

git diff --check
→ PASS
```

## Observación humana posterior al GREEN

Después de completar el GREEN específico y la validación técnica global, se
repitió la trayectoria desde un `S1` limpio para comprobar si la modificación
había eliminado la pérdida humana que originó la investigación.

La superficie observada mostraba:

```text
Ahora

Introduce un texto
[             ]

[Crear]
```

Antes de ejecutar `Crear`, la persona respondió:

1. entendía que debía introducir un texto en la caja vacía;
2. seguía teniendo dudas sobre qué podía introducir porque la superficie no
   proporcionaba información al respecto;
3. no podía determinar todavía si, al ejecutar `Crear`, el texto se guardaría
   o se mostraría en pantalla.

La comparación con la superficie anterior permite establecer una mejora
localizada:

```text
antes
“Aportación actual”
→ no hacía suficientemente reconocible
  qué debía hacerse con el campo

después
“Introduce un texto”
→ hace reconocible que debe introducirse texto
```

Sin embargo, la observación posterior no establece suficiencia completa de la
corrección.

Persisten al menos dos diferencias humanas residuales:

```text
R-OS-S1-01
→ qué entrada puede proporcionarse
  continúa insuficientemente determinada
```

y:

```text
R-OS-S1-02
→ el efecto de la actuación “Crear”
  continúa insuficientemente determinado
  antes de ejecutarla
```

La segunda diferencia se manifestó mediante al menos dos expectativas todavía
compatibles con la superficie:

```text
Crear
→ guardar el texto

o

Crear
→ mostrar o fijar el texto en la superficie
```

Por tanto, el resultado humano posterior al GREEN es:

```text
reconocibilidad de que debe introducirse texto
✔ mejorada

reconocibilidad de la entrada que puede proporcionarse
→ insuficiencia residual observada

reconocibilidad del efecto de la actuación antes de ejecutarla
→ insuficiencia residual observada

suficiencia humana de PC-OS-S1-01
→ no establecida
```

### Relación con la validación automatizada

El test introducido para el primer RED protege:

```text
textbox
+
name /texto/i
```

y permanece verde.

La observación humana muestra, sin embargo, que ese criterio automatizado sólo
protege una parte de `PC-OS-S1-01`.

Debe mantenerse la distinción:

```text
validación técnica del criterio automatizado
✔ satisfecha

suficiencia humana completa de PC-OS-S1-01
→ no establecida
```

Por tanto, el GREEN técnico no se interpreta como demostración automática de
inteligibilidad humana.

### Resultado de la observación

La modificación:

```text
Aportación actual
→ Introduce un texto
```

se conserva provisionalmente como una mejora local validada técnicamente, pero
no permite cerrar todavía la investigación por suficiencia humana.

No se deriva de esta observación:

- una nueva responsabilidad;
- una modificación de Product;
- una ampliación de `E-RU2M1-10`;
- una solución textual definitiva;
- ni una segunda modificación de código inmediata.

Las dos insuficiencias residuales deberán reducirse por separado antes de
determinar si ambas pertenecen a `PC-OS-S1-01`, si alguna puede eliminarse o si
la propiedad mínima debe reformularse.

---

## Reducción y cierre de `R-OS-S1-01`

La primera insuficiencia residual observada después del GREEN fue:

```text
R-OS-S1-01
→ qué entrada puede proporcionarse
```

Para intentar eliminarla se compararon tres superficies manteniendo constante
la estructura restante de `S1`:

```text
A
Introduce un texto
[             ]
[Crear]
```

```text
B
Introduce un texto libre
[             ]
[Crear]
```

```text
C
Introduce cualquier texto
[             ]
[Crear]
```

La observación humana mostró que las tres formulaciones hacían reconocible la
función física del campo, pero no producían la misma orientación respecto del
contenido admisible.

En `A` permanecía una duda relevante:

```text
¿el texto debe estar relacionado
con algún tema, contexto o contenido previo?
```

La superficie no contenía información adicional que permitiera resolver esa
duda antes de actuar.

En `B` y `C`, en cambio, la persona entendió que no era necesario disponer de
un tema, contexto o conocimiento previo para poder introducir contenido.

La comparación permite separar:

```text
operación física
→ introducir texto

de

condición semántica de la entrada
→ si el texto debe responder a un tema o contexto previo
```

La insuficiencia residual no se reduce por tanto a una preferencia de estilo.

### Correspondencia con la realización

La inspección previa de `resumeModel` y de sus tests estableció que la
realización no interpreta semánticamente el contenido introducido.

La condición mínima protegida es:

```text
value.trim().length > 0
```

y los tests aceptan contenidos semánticamente distintos sin exigir relación
temática entre ellos.

Por tanto, la realización vigente no exige:

- un tema previo;
- un contexto previo;
- un conocimiento previo;
- ni una relación semántica determinada con otra aportación.

La duda observada en `A` corresponde así a una condición semántica que la
realización no impone.

### Resultado de la reducción

Dentro del alcance observado:

```text
R-OS-S1-01
✔ sobrevive como diferencia humana relevante

mera preferencia textual
→ no explica la diferencia

frase concreta obligatoria
→ no derivada

nueva responsabilidad independiente
→ no derivada
```

La propiedad mínima conservada es:

```text
en S1 inicial,
la persona puede reconocer
que la entrada no requiere
un tema, contexto o conocimiento previo
que R-U2-M1 no exige
```

Esta propiedad queda absorbida por el componente ya reducido de
`PC-OS-S1-01` relativo a:

```text
reconocer suficientemente
la entrada que puede proporcionar
para ejercer la actuación
```

Por tanto:

```text
R-OS-S1-01
→ atribuida a PC-OS-S1-01
→ no deriva PC nueva
→ no deriva RU2M1-U02
→ no modifica Product
```

### Límite de las formulaciones comparadas

La comparación no selecciona todavía una solución textual definitiva.

En particular:

```text
Introduce un texto libre
```

y:

```text
Introduce cualquier texto
```

eliminaron la duda observada, pero su suficiencia comparativa no convierte
ninguna de las dos frases en requisito normativo.

`Cualquier texto` podría además sugerir una ausencia absoluta de restricciones
que la realización no posee, puesto que el contenido vacío continúa siendo
inválido.

Por ello, el cierre de `R-OS-S1-01` conserva la propiedad de orientación y no
una redacción concreta.

### Relación con `R-OS-S1-02`

La misma observación mostró que resolver la libertad semántica de la entrada no
resuelve la duda sobre el efecto de `Crear`.

Incluso cuando la persona entiende qué puede introducir, permanece abierta la
pregunta:

```text
¿qué hará Crear con el texto?
```

Por tanto:

```text
R-OS-S1-01
✔ cerrada dentro del alcance observado

R-OS-S1-02
→ permanece abierta
```

No se deriva todavía una nueva modificación de código.

---

## Reducción y cierre de `R-OS-S1-02`

La segunda insuficiencia residual observada después del GREEN fue:

```text
R-OS-S1-02
→ el efecto de la actuación “Crear”
  continúa insuficientemente determinado
  antes de ejecutarla
```

La observación humana mostró que la expresión:

```text
Crear
```

es demasiado amplia para permitir anticipar por sí sola qué ocurrirá con el
trabajo introducido.

La incertidumbre no se reducía a curiosidad sobre la implementación.

Producía una diferencia práctica de confianza:

```text
si no se conoce qué ocurrirá con el trabajo
→ no resulta razonable comprometer contenido importante
→ se tiende a probar primero con contenido prescindible
→ el uso pleno de la realización queda aplazado
```

Por tanto, la diferencia humana observada no puede eliminarse simplemente como
aprendizaje posterior normal.

### Primera reducción

Se distinguieron tres posibles niveles de información previa:

```text
1. saber si el texto aparecerá inmediatamente en pantalla

2. saber si el texto se conservará y podrá retomarse después

3. saber exactamente cómo se almacena o recupera
```

Para intentar reducir la exigencia se examinó una superficie hipotética:

```text
Ahora

Introduce un texto libre
[                         ]

Al crear, este texto quedará disponible
para retomarlo después.

[Crear]
```

La observación humana mostró que esta información permitía confiar
razonablemente un texto importante a la página porque hacía explícito que el
trabajo no se perdería.

Persistía una duda sobre:

```text
cómo se conserva
o
cómo se recupera
```

pero esa duda no impedía necesariamente la primera actuación.

### Eliminaciones establecidas

La prueba permitió eliminar como requisitos mínimos previos:

```text
saber que el texto aparecerá inmediatamente
en la misma pantalla
→ no necesario
```

y:

```text
conocer el mecanismo exacto
de almacenamiento o recuperación
→ no necesario
```

Lo que sobrevivió fue una propiedad más pequeña:

```text
antes de ejecutar Crear,
la persona puede reconocer suficientemente
que el contenido producido seguirá disponible
para ser retomado posteriormente
```

sin necesidad de conocer todavía:

- cómo se persiste técnicamente;
- dónde se almacena;
- cuánto dura físicamente la persistencia;
- cómo se implementa la recuperación;
- un historial general;
- copias ilimitadas;
- ni una arquitectura de conservación.

### Correspondencia con `R-U2-M1`

La propiedad residual no exige introducir una capacidad nueva.

`R-U2-M1` ya realiza:

```text
X producido en S1
↓
interrupción
↓
nueva ejecución
↓
X disponible nuevamente
```

Por tanto, la insuficiencia observada no consiste en ausencia de continuidad,
sino en ausencia de orientación suficiente sobre una consecuencia realizativa
que ya existe.

Puede expresarse así:

```text
capacidad de continuidad
✔ ya realizada

reconocibilidad previa de esa continuidad
→ insuficiente en la superficie observada
```

### Resultado de la reducción

Dentro del alcance observado:

```text
R-OS-S1-02
✔ sobrevive como diferencia humana relevante

persistencia nueva
→ no derivada

historial nuevo
→ no derivado

mecanismo de recuperación nuevo
→ no derivado

nueva responsabilidad independiente
→ no derivada

Product
→ sin cambios
```

La propiedad mínima conservada es:

```text
en S1 inicial,
antes de ejecutar Crear,
la persona puede reconocer suficientemente
que el contenido producido seguirá disponible
para ser retomado posteriormente,
sin necesitar conocer todavía
el mecanismo concreto de conservación o recuperación
```

`R-OS-S1-02` queda por tanto cerrada dentro del alcance observado.

### Consecuencia para `PC-OS-S1-01`

El cierre de `R-OS-S1-02` muestra que la formulación vigente de
`PC-OS-S1-01` resulta incompleta.

La propiedad reducida anteriormente protegía:

```text
qué actuación está disponible
+
qué entrada puede proporcionarse
```

pero la observación posterior muestra que también debe examinarse:

```text
qué efecto relevante tendrá esa actuación
sobre la continuidad del trabajo
```

Por tanto:

```text
PC-OS-S1-01
→ revisión necesaria
```

Esta conclusión no modifica todavía la propiedad.

La siguiente actuación documental deberá comprobar si el nuevo componente
puede incorporarse conservativamente a `PC-OS-S1-01` o si exige otra
descomposición.

No se deriva todavía una nueva modificación de código.

### Observación separada no absorbida en este cierre

Durante la reducción apareció una diferencia adicional entre:

```text
sé para qué sirve la página
pero no conozco todavía su funcionamiento
```

y:

```text
he llegado a la página
y no sé para qué sirve ni cómo funciona
```

Esta diferencia no se incorpora a `R-OS-S1-02`.

Se conserva únicamente como observación pendiente para una investigación
posterior si llega a resultar necesaria.

---

## Revisión de `PC-OS-S1-01` tras `R-OS-S1-01` y `R-OS-S1-02`

Las dos insuficiencias residuales observadas después del primer GREEN han
quedado reducidas y cerradas dentro del alcance observado.

Sus resultados obligan a revisar la formulación anterior de `PC-OS-S1-01`.

La propiedad anterior protegía principalmente:

```text
qué actuación está disponible
+
qué entrada puede proporcionarse
```

La observación posterior mostró que esa formulación era incompleta.

`R-OS-S1-01` estableció que reconocer la mera operación de introducir texto no
basta si la superficie permite inferir requisitos semánticos que `R-U2-M1` no
exige.

`R-OS-S1-02` estableció además que reconocer qué introducir tampoco basta si la
persona no puede anticipar la continuidad mínima de su trabajo después de
ejecutar `Crear`.

### Prueba de independencia entre componentes

Dentro del alcance observado, los tres componentes conservados no quedan
absorbidos unos por otros.

```text
A — actuación disponible
→ qué puede hacer la persona ahora
```

Sin el componente de entrada:

```text
“Escribe una aportación”
→ permite reconocer que hay que escribir
→ pero deja abierta una exigencia temática o contextual inexistente
```

Por tanto:

```text
actuación reconocible
≠
entrada suficientemente reconocible
```

A su vez:

```text
A + B
→ actuación reconocible
+
entrada semánticamente libre reconocible
```

no absorbe el tercer componente.

La superficie:

```text
Introduce un texto libre
[             ]

[Crear]
```

permite reconocer qué hacer y qué entrada puede proporcionarse, pero no permite
anticipar suficientemente qué ocurrirá con el trabajo después de `Crear`.

Por tanto:

```text
actuación reconocible
+
entrada reconocible
≠
continuidad del trabajo reconocible
```

Finalmente, informar únicamente de que el trabajo se conservará no permite por
sí solo reconocer qué actuación concreta está disponible ni qué entrada puede
proporcionarse.

Por tanto, dentro del alcance observado:

```text
A — actuación disponible
✔ irreducible respecto de B y C

B — entrada que puede proporcionarse
✔ irreducible respecto de A y C

C — continuidad relevante del trabajo
✔ irreducible respecto de A y B
```

Esta irreducibilidad local no deriva tres responsabilidades independientes.

Los tres componentes continúan realizando una misma diferencia de orientación
situacional de la actuación presente en `S1`.

### `PC-OS-S1-01 — Reconocibilidad suficiente de la actuación presente en S1`

La formulación revisada queda establecida así:

> En `S1` inicial, antes de ejercer la actuación y sin conocimiento previo del
> mecanismo, la persona puede reconocer suficientemente:
>
> 1. qué actuación tiene disponible;
> 2. qué entrada puede proporcionar para ejercerla, sin tener que inferir
>    requisitos semánticos que `R-U2-M1` no exige;
> 3. y que el contenido producido seguirá disponible para ser retomado
>    posteriormente;
>
> sin tener que ejecutar primero la propia actuación para descubrir esas
> diferencias.

### Límites de la propiedad revisada

La propiedad revisada no exige:

- conocer cómo se persiste técnicamente el contenido;
- conocer dónde se almacena;
- conocer el mecanismo exacto de recuperación;
- conocer cuánto dura físicamente la persistencia;
- que el contenido aparezca inmediatamente en la misma pantalla;
- historial general;
- conservación ilimitada;
- copias ilimitadas;
- una frase concreta;
- un `label` concreto;
- un `placeholder`;
- un componente concreto de interfaz;
- modificar `App`;
- modificar `S2(X)`;
- una nueva responsabilidad `RU2M1-U02`;
- ni una modificación de Product.

### Relación con los resultados residuales

La revisión absorbe los dos residuos ya cerrados:

```text
R-OS-S1-01
→ componente B
→ reconocibilidad de la entrada que puede proporcionarse
```

```text
R-OS-S1-02
→ componente C
→ reconocibilidad previa de la continuidad del trabajo
```

El componente A conserva la diferencia ya establecida por la investigación
inicial:

```text
F-OU004-01
→ reconocibilidad de la actuación disponible
```

Por tanto:

```text
PC-OS-S1-01
✔ revisada tras R-OS-S1-01 y R-OS-S1-02

nueva propiedad independiente
→ no derivada

nueva responsabilidad local
→ no derivada

Product
→ sin cambios
```

### Consecuencia realizativa inmediata

La revisión de la propiedad no modifica por sí sola el código ni los tests.

La superficie GREEN actualmente validada:

```text
Ahora

Introduce un texto
[             ]

[Crear]
```

realiza sólo una parte de la propiedad revisada.

La suficiencia humana completa de `PC-OS-S1-01` continúa por tanto sin quedar
establecida.

Antes de una segunda modificación realizativa deberá derivarse qué diferencia
observable mínima falta todavía y formularse, si procede, una nueva prueba RED.

---

## Derivación de `DR-OS-S1-01`

Después de revisar `PC-OS-S1-01`, la superficie GREEN vigente se comparó
directamente con los tres componentes conservados por la propiedad revisada.

La propiedad exige reconocer suficientemente:

```text
A
→ qué actuación puede realizarse

B
→ qué entrada puede proporcionarse
  sin inferir requisitos semánticos
  que R-U2-M1 no exige

C
→ que el contenido producido seguirá disponible
  para retomarlo posteriormente
```

La superficie GREEN vigente es:

```text
Ahora

Introduce un texto
[             ]

[Crear]
```

### Componente A

La superficie permite reconocer que existe una actuación presente:

```text
introducir texto
+
ejecutar Crear
```

Dentro del alcance observado no se deriva una diferencia realizativa adicional
para `A`.

Por tanto:

```text
A
→ diferencia realizativa adicional no derivada
```

### Componente B

La expresión:

```text
Introduce un texto
```

hace reconocible el tipo físico de entrada, pero no elimina la posibilidad de
inferir que el texto deba responder a:

- un tema previo;
- un contexto previo;
- un conocimiento previo;
- o algún contenido de referencia no mostrado.

La reducción de `R-OS-S1-01` estableció que esas condiciones semánticas no son
exigidas por `R-U2-M1`.

Por tanto, la superficie vigente todavía no realiza suficientemente `B`.

### Componente C

La expresión:

```text
Crear
```

ofrece una actuación, pero no permite anticipar suficientemente que el
contenido producido seguirá disponible para ser retomado posteriormente.

La reducción de `R-OS-S1-02` estableció que no es necesario explicar:

- cómo se almacena;
- dónde se almacena;
- cómo se recupera;
- ni que aparezca inmediatamente en la misma pantalla.

Pero sí sobrevivió como diferencia relevante la reconocibilidad previa de la
continuidad del trabajo.

Por tanto, la superficie vigente todavía no realiza suficientemente `C`.

### Prueba de absorción entre B y C

Se intentó comprobar si uno de los dos componentes todavía ausentes podía
absorber al otro.

La evidencia ya obtenida permite establecer:

```text
B sin C

“Introduce un texto libre”
+
“Crear”

→ permite reconocer qué entrada puede proporcionarse
→ no permite reconocer suficientemente
  qué ocurrirá con la continuidad del trabajo
```

y:

```text
C sin B

informar de que el contenido
seguirá disponible posteriormente

→ permite anticipar continuidad
→ no elimina por sí solo
  la posible exigencia temática o contextual
  de la entrada
```

Por tanto:

```text
B
≠
C

B no absorbe C
C no absorbe B
```

Los dos componentes sobreviven como diferencias realizativas distintas dentro
de una misma propiedad `PC-OS-S1-01`.

### `DR-OS-S1-01 — Diferencia realizativa mínima pendiente en S1`

La diferencia mínima derivada queda formulada así:

> Antes de ejecutar `Crear`, la superficie de `S1` debe hacer observable
> suficientemente:
>
> 1. que la entrada no requiere un tema, contexto o conocimiento previo que
>    `R-U2-M1` no exige;
> 2. y que el contenido producido seguirá disponible para ser retomado
>    posteriormente.

La diferencia no prescribe:

- la expresión `Introduce un texto libre`;
- la expresión `Introduce cualquier texto`;
- una frase concreta sobre disponibilidad posterior;
- un `label`;
- un `placeholder`;
- un bloque informativo concreto;
- una disposición visual concreta;
- una modificación de `App`;
- una modificación de `S2(X)`;
- ni una explicación completa del funcionamiento de la realización.

Tampoco exige:

```text
cómo se almacena
cómo se persiste técnicamente
dónde se conserva
cómo se recupera exactamente
que aparezca inmediatamente en pantalla
historial
conservación ilimitada
```

### Consecuencia para el siguiente RED

`DR-OS-S1-01` queda suficientemente derivada para intentar formular una segunda
prueba RED.

Esa prueba no deberá presentarse como demostración automatizada de la
inteligibilidad humana.

Su función será únicamente proteger un proxy realizativo observable de los dos
componentes todavía ausentes:

```text
B
→ la superficie representa
  ausencia de requisito semántico previo

C
→ la superficie representa
  disponibilidad posterior del contenido
```

Los dos aspectos deberán mantenerse distinguibles para evitar que una única
coincidencia textual o una frase accidental oculte cuál de las dos diferencias
ha dejado de realizarse.

Por tanto:

```text
DR-OS-S1-01
✔ derivada

segundo RED
→ justificado conceptualmente
→ todavía no escrito

segunda modificación realizativa
→ todavía no autorizada
```

---

## Segundo RED de `DR-OS-S1-01`

Después de derivar `DR-OS-S1-01`, se formularon dos pruebas separadas para
proteger de manera independiente los dos componentes realizativos todavía
ausentes en `S1`.

La intención de estas pruebas no es demostrar automáticamente la suficiencia
humana de la orientación.

Su función es únicamente proteger proxies realizativos observables de:

```text
B
→ ausencia de requisito semántico previo para la entrada

C
→ disponibilidad posterior del contenido
```

### RED-B — proxy realizativo del componente B

Se añadió la prueba:

```ts
it("exposes a free-text cue before creating X in S1", () => {
  render(<ResumeExperience />);

  expect(
    screen.getByRole("textbox", {
      name: /texto libre/i,
    }),
  ).toBeInTheDocument();
});
```

La prueba exige que, antes de ejecutar `Crear`, la entrada exponga una señal
observable compatible con la ausencia de requisito temático o contextual
previo.

La expresión:

```text
/texto libre/i
```

se utiliza sólo como proxy realizativo local.

No constituye:

- una frase normativa obligatoria;
- una solución textual definitiva;
- ni una demostración automatizada de inteligibilidad humana.

### RED-C — proxy realizativo del componente C

Se añadió la prueba:

```ts
it("exposes a later-availability cue before creating X in S1", () => {
  render(<ResumeExperience />);

  expect(screen.getByText(/disponible/i)).toBeInTheDocument();
  expect(screen.getByText(/retom/i)).toBeInTheDocument();
});
```

La prueba exige que, antes de ejecutar `Crear`, la superficie represente de
forma observable la disponibilidad posterior del contenido.

Las expresiones:

```text
/disponible/i
+
/retom/i
```

son igualmente proxies realizativos locales.

No constituyen:

- una frase normativa obligatoria;
- una explicación completa del mecanismo de conservación;
- ni una demostración automatizada de confianza o suficiencia humana.

### Resultado del RED

La ejecución específica fue:

```text
src/realizations/ru2m1/ResumeExperience.test.tsx

32 tests
30 passed
2 failed
```

Los treinta tests anteriores permanecieron verdes.

Los dos únicos fallos correspondieron a las nuevas pruebas.

`RED-B` falló porque la superficie vigente exponía:

```text
Introduce un texto
```

como nombre accesible del `textbox`, y no contenía todavía una señal equivalente
a:

```text
texto libre
```

`RED-C` falló porque la superficie vigente no contenía todavía una señal de:

```text
disponibilidad posterior
+
retomabilidad posterior
```

El DOM mostrado por Vitest permanecía:

```text
Ahora

Introduce un texto
[input]

Crear
```

Por tanto, el RED no reveló regresiones en los comportamientos previamente
protegidos.

El resultado puede resumirse así:

```text
tests previos
✔ 30 / 30

RED-B
✘ falla como se esperaba

RED-C
✘ falla como se esperaba

suite específica
→ 30 / 32

producción
→ todavía sin modificar
```

### Límite de la evidencia automatizada

Debe mantenerse explícitamente:

```text
RED-B verde futuro
≠
suficiencia humana de B demostrada

RED-C verde futuro
≠
suficiencia humana de C demostrada
```

y:

```text
/texto libre/i
≠
redacción normativa obligatoria

/disponible/i + /retom/i
≠
redacción normativa obligatoria
```

La prueba automatizada sólo protege la presencia de señales observables
seleccionadas como proxies realizativos.

La suficiencia humana deberá comprobarse posteriormente mediante observación
después del GREEN correspondiente.

### Resultado

Dentro del alcance actual:

```text
DR-OS-S1-01
✔ derivada

segundo RED
✔ obtenido

RED-B
✔ fallo esperado confirmado

RED-C
✔ fallo esperado confirmado

regresiones en tests previos
→ no observadas

segunda modificación realizativa
→ todavía no aplicada
```

El siguiente paso consiste en derivar el GREEN mínimo capaz de satisfacer los
dos proxies sin ampliar la solución más allá de `DR-OS-S1-01`.

---

## Derivación de `GM-OS-S1-01`

Después de obtener el segundo RED con los dos fallos esperados, se derivó la
modificación mínima candidata capaz de satisfacer los proxies realizativos de
`B` y `C` sin ampliar `R-U2-M1`.

La derivación mantiene separadas tres capas:

```text
PC-OS-S1-01
→ propiedad normativa

DR-OS-S1-01
→ diferencia realizativa pendiente

GM-OS-S1-01
→ realización contingente mínima candidata
```

Los proxies automatizados continúan siendo sólo:

```text
B
→ /texto libre/i

C
→ /disponible/i + /retom/i
```

y no se convierten por ello en formulaciones normativas.

### Componente B

La superficie vigente muestra:

```text
Introduce un texto
```

La observación humana previa estableció que esta formulación hace reconocible
la operación física de introducir texto, pero deja abierta una posible
exigencia temática o contextual que `R-U2-M1` no impone.

La modificación mínima candidata consiste en:

```text
Introduce un texto
↓
Introduce un texto libre
```

Esta elección satisface el proxy automatizado de `B` y corresponde con la
diferencia humana ya observada.

No se establece que la expresión `Introduce un texto libre` sea una redacción
normativa obligatoria.

### Componente C

La superficie vigente no comunica antes de `Crear` que el trabajo continuará
disponible posteriormente.

La modificación mínima candidata consiste en añadir antes del botón:

```text
Al crear, este texto quedará disponible
para retomarlo después.
```

Esta información expresa únicamente la consecuencia realizativa que ya existe:

```text
X producido en S1
↓
interrupción
↓
nueva ejecución
↓
X disponible nuevamente
```

No introduce una capacidad nueva ni explica el mecanismo interno de
persistencia o recuperación.

### `GM-OS-S1-01 — GREEN mínimo candidato`

La superficie candidata de `S1` queda:

```text
Ahora

Introduce un texto libre
[                         ]

Al crear, este texto quedará disponible
para retomarlo después.

[Crear]
```

La modificación queda reducida a:

```text
B
→ modificar el label ya existente

C
→ añadir una señal visible
  sobre disponibilidad posterior
```

No modifica:

- estado;
- reglas de validez;
- persistencia;
- `resumeModel`;
- repositorio;
- comportamiento de `Crear`;
- `App`;
- `S2(X)`;
- Product;
- ni ninguna responsabilidad.

### Rechazo de ampliaciones innecesarias

No se deriva como necesaria ninguna de estas ampliaciones:

```text
explicar dónde se almacena
explicar cómo se recupera
explicar cuánto dura la persistencia
mostrar inmediatamente el mecanismo futuro
crear historial
cambiar el nombre de Crear
añadir navegación
añadir una nueva situación conceptual
```

Tampoco se selecciona `Crear y guardar` como solución mínima, porque:

```text
guardar
≠
hacer reconocible por sí solo
que el contenido podrá retomarse posteriormente
```

y porque modificar el nombre de una actuación ya consolidada introduciría más
cambio del necesario.

### Resultado esperado del GREEN técnico

Si `GM-OS-S1-01` se aplica correctamente, la ejecución específica esperada es:

```text
src/realizations/ru2m1/ResumeExperience.test.tsx

32 / 32
```

En particular:

```text
RED-B
→ GREEN esperado

RED-C
→ GREEN esperado

30 tests previos
→ deben permanecer verdes
```

Este resultado técnico no establecerá por sí solo la suficiencia humana de
`PC-OS-S1-01`.

Debe mantenerse:

```text
32 / 32
≠
suficiencia humana demostrada
```

Después del GREEN técnico será necesaria una nueva observación humana sobre la
superficie resultante.

### Resultado de la derivación

Dentro del alcance actual:

```text
GM-OS-S1-01
✔ derivada

alcance
→ sólo S1 inicial

segunda modificación realizativa
✔ justificada por DR-OS-S1-01
✔ delimitada por el segundo RED
→ todavía no aplicada

Product
→ sin cambios

App
→ sin cambios

S2(X)
→ sin cambios
```

La siguiente actuación consiste exclusivamente en aplicar
`GM-OS-S1-01` en `ResumeExperience.tsx` y ejecutar la suite específica antes de
cualquier otra modificación.

---

## Segundo GREEN técnico de `GM-OS-S1-01`

Después de registrar `GM-OS-S1-01`, se aplicó exclusivamente la modificación
realizativa delimitada para `S1` inicial.

La superficie pasó de:

```text
Ahora

Introduce un texto
[             ]

[Crear]
```

a:

```text
Ahora

Introduce un texto libre
[                         ]

Al crear, este texto quedará disponible
para retomarlo después.

[Crear]
```

La modificación de producción quedó limitada a:

```text
B
→ “Introduce un texto”
  ↓
  “Introduce un texto libre”

C
→ añadir una señal visible:
  “Al crear, este texto quedará disponible
   para retomarlo después.”
```

No se modificaron:

- estado;
- reglas de validez;
- persistencia;
- `resumeModel`;
- repositorio;
- comportamiento de `Crear`;
- `App`;
- `S2(X)`;
- Product;
- ni ninguna responsabilidad.

### Primera ejecución tras aplicar `GM-OS-S1-01`

La primera ejecución específica después de modificar producción produjo:

```text
src/realizations/ru2m1/ResumeExperience.test.tsx

32 tests
30 passed
2 failed
```

Los dos proxies introducidos en el segundo RED pasaron correctamente:

```text
RED-B
✔ GREEN

RED-C
✔ GREEN
```

Los dos fallos restantes correspondieron a pruebas anteriores.

Ambas contenían la aserción:

```ts
expect(screen.queryByText(/retomar/i)).not.toBeInTheDocument();
```

La nueva señal legítima de `S1`:

```text
Al crear, este texto quedará disponible
para retomarlo después.
```

contiene la palabra `retomarlo`, por lo que la consulta amplia
`queryByText(/retomar/i)` dejó de representar la intención original de esas
pruebas.

### Análisis de las dos aserciones obsoletas

Las dos pruebas pretendían proteger que una situación inicial `S1` no fuese
confundida con una situación de reanudación `S2(X)`.

La intención relevante era:

```text
S1
→ no presenta el heading conceptual “Retomar”
```

y no:

```text
S1
→ no puede contener ninguna cadena textual
  con la raíz “retomar”
```

Por tanto, las dos aserciones se ajustaron de:

```ts
screen.queryByText(/retomar/i);
```

a:

```ts
screen.queryByRole("heading", {
  name: /^retomar$/i,
});
```

El ajuste se aplicó exactamente en dos lugares:

1. la prueba que comprueba que una ejecución sin estado previo comienza en
   `S1`;
2. la prueba que comprueba que un valor restaurado inválido no constituye
   `S2(X)`.

Este cambio no amplía el comportamiento esperado de producción.

Reduce únicamente una coincidencia textual demasiado amplia y hace que las
pruebas vuelvan a proteger la diferencia conceptual que pretendían observar:

```text
texto auxiliar que contiene “retomar”
≠
heading de situación “Retomar”
```

### Resultado del segundo GREEN técnico

Después de ajustar únicamente esas dos aserciones, se volvió a ejecutar la
suite específica.

Resultado:

```text
Test Files
1 passed

Tests
32 passed / 32
```

Desglose relevante:

```text
first execution
✔ 13 / 13

later execution
✔ 4 / 4

real interruption and resumption
✔ 2 / 2

S2(X) as an operative resumed situation
✔ 3 / 3

producing Y from S2(X)
✔ 5 / 5

complete R-U2-M1 trajectory
✔ 5 / 5
```

Por tanto:

```text
RED-B
✔ GREEN

RED-C
✔ GREEN

30 tests anteriores
✔ permanecen verdes

suite específica
✔ 32 / 32
```

### Límite del GREEN técnico

El resultado técnico continúa sin demostrar por sí mismo la suficiencia humana
de `PC-OS-S1-01`.

Debe mantenerse:

```text
32 / 32
≠
suficiencia humana demostrada
```

Los tests sólo protegen proxies observables de `B` y `C`.

La suficiencia humana de la superficie resultante deberá evaluarse mediante una
nueva observación humana después de completar primero la validación técnica
global.

### Estado resultante

Dentro del alcance actual:

```text
GM-OS-S1-01
✔ aplicada en S1 inicial

RED-B
✔ GREEN

RED-C
✔ GREEN

ajuste de dos aserciones obsoletas
✔ realizado
✔ limitado a distinguir texto auxiliar de heading “Retomar”

suite específica
✔ 32 / 32

validación global
→ pendiente

build
→ pendiente

git diff --check global
→ pendiente

observación humana posterior al segundo GREEN
→ pendiente

suficiencia humana de PC-OS-S1-01
→ no establecida
```

La siguiente actuación consiste exclusivamente en completar la validación
técnica global antes de realizar la nueva observación humana.

---

## Validación técnica global posterior al segundo GREEN

Después de obtener el segundo GREEN técnico específico de `GM-OS-S1-01`, se
completó la validación técnica global antes de realizar una nueva observación
humana.

### Suite global

Se ejecutó:

```bash
npx vitest run
```

La primera ejecución global produjo dos fallos en `src/App.test.tsx`.

Ambos estaban causados por selectores que todavía esperaban la formulación
anterior de `S1`:

```text
Introduce un texto
```

mientras la superficie vigente ya mostraba:

```text
Introduce un texto libre
```

La inspección del archivo reveló tres coincidencias obsoletas de:

```ts
screen.getByLabelText("Introduce un texto");
```

Las tres pertenecían efectivamente a `S1`:

1. antes de solicitar asistencia inmediata;
2. después de solicitar esa misma asistencia, permaneciendo en `S1`;
3. en la prueba que hace accesible `R-U2-M1` desde el punto normal de entrada
   del producto.

Las tres expectativas se actualizaron a:

```ts
screen.getByLabelText("Introduce un texto libre");
```

No se modificó producción durante este ajuste.

Después de actualizar exclusivamente esas tres expectativas se volvió a
ejecutar la suite global.

Resultado:

```text
Test Files
26 passed / 26

Tests
235 passed / 235
```

Por tanto:

```text
suite global
✔ 26 / 26 archivos
✔ 235 / 235 tests
```

### Build

Se ejecutó:

```bash
npm run build
```

Resultado:

```text
vite v8.0.16 building client environment for production...
✓ 19 modules transformed.
✓ built in 261ms
```

Por tanto:

```text
build
✔ PASS
✔ 19 módulos transformados
```

### `git diff --check`

Se ejecutó:

```bash
git diff --check
```

El comando no produjo salida.

Por tanto:

```text
git diff --check
✔ PASS
```

### Resultado de la validación global

La validación técnica posterior al segundo GREEN queda:

```text
suite específica
✔ ResumeExperience 32 / 32

suite global
✔ 26 / 26 archivos
✔ 235 / 235 tests

build
✔ PASS

git diff --check
✔ PASS
```

No se observaron regresiones técnicas después de aplicar `GM-OS-S1-01` y
actualizar las expectativas de tests que habían quedado obsoletas por el cambio
de superficie.

### Límite de la validación técnica

La validación técnica completa no establece todavía la suficiencia humana de
`PC-OS-S1-01`.

Debe mantenerse:

```text
suite específica verde
+
suite global verde
+
build correcto
+
git diff --check correcto
≠
suficiencia humana demostrada
```

La siguiente actuación consiste exclusivamente en realizar una observación
humana posterior al segundo GREEN sobre la superficie resultante de `S1`.

No deberá realizarse una nueva modificación de código antes de esa observación.

---

## Observación humana posterior al segundo GREEN y cierre de `PC-OS-S1-01`

Después de completar la validación técnica global del segundo GREEN, se repitió
la observación humana sobre un `S1` limpio antes de ejecutar `Crear`.

La superficie observada era:

```text
Ahora

Introduce un texto libre
[                         ]

Al crear, este texto quedará disponible
para retomarlo después.

[Crear]
```

La observación se dirigió a los tres componentes conservados por
`PC-OS-S1-01`:

```text
A
→ qué actuación tiene disponible

B
→ qué entrada puede proporcionar
  sin inferir requisitos semánticos inexistentes

C
→ continuidad posterior del trabajo
```

### Declaraciones obtenidas

Respecto de `A`, la persona manifestó que entendía que podía crear un texto de
libre composición.

Añadió una diferencia de expectativa:

```text
“texto libre”
→ sugiere ahora una elaboración más sustancial
  que una mera anotación de ideas simples
```

Esta diferencia no se interpreta todavía como insuficiencia de
`PC-OS-S1-01`.

Respecto de `B`, la persona declaró que no tenía duda alguna de que podía
escribir lo que deseara y que no percibía una exigencia de tema o contexto
previo.

Respecto de `C`, la persona entendió que, al ejecutar `Crear`, el texto se
conservaría, aunque no supiera dónde ni mediante qué mecanismo.

La falta de conocimiento sobre el mecanismo concreto no impidió reconocer la
continuidad relevante ya reducida para `PC-OS-S1-01`.

Finalmente, al preguntar si confiaría un texto importante a la superficie, la
persona respondió que probablemente sí por la información ofrecida.

Sin embargo, señaló una dificultad distinta:

```text
la superficie invita a elaborar un texto libre
pero
el instrumento ofrecido es una caja de entrada
en la que sólo se ve una pequeña parte del contenido
```

y destacó como consecuencias:

```text
→ dificultad para ver el texto completo
→ dificultad para revisarlo
→ dificultad para corregirlo
→ dificultad para trabajar sobre el contenido
  antes de constituirlo
```

### Evaluación de los componentes A, B y C

Dentro de la trayectoria observada:

```text
A — actuación disponible
✔ suficientemente reconocible

B — entrada admisible
✔ suficientemente reconocible
✔ no se infiere tema, contexto o conocimiento previo obligatorio

C — continuidad del trabajo
✔ suficientemente reconocible
✔ no requiere conocer dónde ni cómo se conserva
```

La observación posterior al segundo GREEN no reproduce las pérdidas humanas que
motivaron `F-OU004-01`, `R-OS-S1-01` y `R-OS-S1-02`.

Por tanto:

```text
GM-OS-S1-01
✔ satisface humanamente A, B y C
  dentro del alcance observado
```

### Cierre por suficiencia de `PC-OS-S1-01`

La evidencia acumulada permite cerrar `PC-OS-S1-01` por suficiencia dentro del
alcance observado.

El cierre queda formulado así:

```text
PC-OS-S1-01
✔ suficiencia humana establecida
  dentro de S1 inicial y de la trayectoria observada
```

Este cierre no generaliza:

- a otras personas;
- a otras realizaciones;
- a `S2(X)`;
- a cualquier superficie futura;
- ni a una propiedad general de usabilidad.

Tampoco convierte las expresiones concretas:

```text
Introduce un texto libre
```

y:

```text
Al crear, este texto quedará disponible
para retomarlo después.
```

en formulaciones normativas obligatorias.

Siguen siendo una realización contingente que, en la observación realizada,
resultó suficiente para los componentes protegidos por `PC-OS-S1-01`.

### Aparición de una diferencia nueva

La observación humana hizo visible una diferencia que no coincide con la pérdida
de orientación ya cerrada.

La persona sabe:

```text
qué puede hacer
+
qué puede introducir
+
que el trabajo continuará disponible
```

pero cuestiona si el instrumento ofrecido permite realizar adecuadamente la
actividad que la propia superficie hace reconocible.

La diferencia provisional se formula así:

### `F-OU005-01 — Desajuste entre la elaboración anunciada y el instrumento disponible`

> En `S1`, la persona reconoce que puede producir un texto libre y que éste
> continuará disponible, pero el instrumento ofrecido para elaborarlo puede
> resultar insuficiente para revisar, corregir y trabajar el contenido antes de
> constituirlo.

El fenómeno se mantiene provisional porque todavía no se ha determinado:

- si constituye una pérdida humana irreducible;
- si queda absorbido por alguna responsabilidad ya existente;
- si depende de la formulación `texto libre`;
- si depende del control de entrada concreto;
- si ambos factores cooperan;
- ni qué propiedad mínima, si alguna, sobrevive a una prueba de eliminación.

### Separación respecto de `PC-OS-S1-01`

Debe conservarse:

```text
orientación suficiente
≠
instrumento necesariamente adecuado
```

El cierre de `PC-OS-S1-01` no absorbe automáticamente `F-OU005-01`.

La diferencia nueva aparece precisamente después de que la orientación haya
dejado de bloquear la comprensión de la actuación.

Por tanto:

```text
PC-OS-S1-01
✔ cerrada por suficiencia

F-OU005-01
→ fenómeno provisional
→ pendiente de reducción
```

### Límites inmediatos

De `F-OU005-01` no se deriva todavía:

- sustituir el `input` por un `textarea`;
- introducir un editor;
- añadir formato;
- añadir operaciones de edición;
- una nueva responsabilidad;
- una nueva capacidad;
- una modificación de Product;
- ni una modificación inmediata de código.

La observación sobre la expectativa de una elaboración más sustancial asociada
a la expresión `texto libre` se conserva como dato de la reducción futura, sin
declararla todavía causa suficiente del fenómeno.

---

## Reducción adicional de `F-OU005-01`

Después de formular provisionalmente `F-OU005-01`, se realizaron dos pruebas
de eliminación dirigidas a separar:

```text
amplitud de la entrada admitida
≠
capacidad práctica del instrumento
≠
funciones enriquecidas de edición
```

### `PE-OU005-02 — Suficiencia del instrumento actual`

Se compararon dos instrumentos manteniendo la posibilidad de introducir
contenido textual libre.

```text
A
→ caja actual de una sola línea

B
→ instrumento de varias líneas
  que permite ver varias frases,
  recorrer el contenido
  y corregirlo antes de Crear
```

La observación humana produjo:

```text
contenido de dos o tres palabras
+
A
→ suficientemente operativo
  si el contenido cabe o puede recorrerse cómodamente
```

```text
contenido de varias frases
+
A
→ deja de ser suficientemente operativo
→ aparece claramente el desajuste
```

y:

```text
contenido de varias frases
+
B
→ la pérdida observada desaparece
```

Por tanto, el instrumento actual no es inadecuado de forma absoluta.

Su insuficiencia aparece cuando la extensión del contenido exige una
inspección, recorrido y corrección que la caja de una sola línea deja de
realizar suficientemente.

Resultado:

```text
PE-OU005-02
→ eliminación fallida

instrumento actual
✔ puede ser suficiente para contenido breve
✘ no queda establecido como suficiente
  para contenido textual de extensión mayor
```

### `PE-OU005-03 — Necesidad de editor enriquecido`

Se comprobó si para eliminar la pérdida era necesario añadir funciones como:

- formato;
- negrita;
- títulos;
- barra de herramientas;
- u otras capacidades propias de un editor enriquecido.

La observación humana estableció que esas funciones no son necesarias para
eliminar la pérdida.

Una vez que la persona puede:

```text
ver
+
recorrer
+
corregir
suficientemente el contenido
```

el instrumento pasa a resultar funcional para la actividad observada.

Las funciones enriquecidas podrían aportar beneficios adicionales o aumentar
el atractivo comparativo de la realización, pero no forman parte del mínimo
necesario para eliminar `F-OU005-01`.

Resultado:

```text
PE-OU005-03
✔ editor enriquecido eliminado como requisito mínimo
```

### Formulación refinada de `F-OU005-01`

La evidencia obtenida permite sustituir la formulación provisional anterior por
una formulación más precisa:

### `F-OU005-01 — Insuficiente operabilidad de la entrada admitida antes de su constitución`

> En `S1`, la realización admite contenido textual sin una restricción derivada
> de brevedad, pero el instrumento disponible puede dejar de permitir una
> inspección, recorrido y corrección suficientes cuando el contenido supera una
> extensión breve antes de ejecutar `Crear`.

La formulación conserva dos límites importantes.

Primero:

```text
libertad semántica
≠
garantía de extensión ilimitada
```

No se deriva una obligación de soportar cualquier tamaño concebible de
contenido.

Segundo:

```text
ausencia de restricción derivada de brevedad
≠
permiso para presuponer que todo X será breve
```

La realización no puede eliminar la pérdida restringiendo retrospectivamente
la entrada a una `nota breve` cuando esa limitación no ha sido derivada.

### Mínimo que sobrevive

Después de `PE-OU005-02` y `PE-OU005-03`, el mínimo provisional que sobrevive
es:

```text
antes de Crear,
la persona puede:

inspeccionar
+
recorrer
+
corregir

suficientemente el contenido
que está elaborando
```

Este mínimo no exige todavía:

- un `textarea`;
- un editor enriquecido;
- Markdown;
- formato;
- negrita;
- títulos;
- vista previa;
- barra de herramientas;
- funciones competitivas;
- una dimensión concreta del control;
- ni ver simultáneamente todo el contenido.

### Estado tras las pruebas de eliminación

Dentro del alcance observado:

```text
F-OU005-01
✔ refinado

PE-OU005-02
→ eliminación fallida

PE-OU005-03
✔ editor enriquecido eliminado como requisito mínimo

propiedad mínima nueva
→ todavía no derivada

responsabilidad nueva
→ todavía no derivada

modificación de Product
→ no derivada

modificación de código
→ no autorizada
```

Antes de derivar una propiedad o responsabilidad nueva deberá auditarse el
corpus documental vigente para comprobar si esta necesidad ya tiene un
antecedente capaz de absorberla.

---

## Auditoría de absorción de `F-OU005-01`

Después de refinar `F-OU005-01` mediante `PE-OU005-02` y `PE-OU005-03`, se
auditó el corpus documental vigente antes de derivar una propiedad o
responsabilidad nueva.

La auditoría se dirigió inicialmente a:

```text
R-U2-M1
RU2M1-U01
POU-RU2M1-01
MR-U01-01
F-OU002-01
```

El objetivo fue comprobar si la necesidad observada:

```text
antes de Crear,
la persona puede inspeccionar,
recorrer y corregir suficientemente
el contenido que está elaborando
```

ya estaba contenida en una autoridad o resultado anterior.

### Candidato 1 — `RU2M1-U01`

`RU2M1-U01` regula la observabilidad de la aceptación de un `X` válido una vez
ejecutada la actuación mediante la que queda preparado para su disponibilidad
posterior.

Su objeto es:

```text
Crear
↓
aceptación efectiva de X
↓
diferencia observable suficiente
```

`F-OU005-01`, en cambio, aparece antes de `Crear`, mientras la persona todavía
está elaborando el contenido.

Por tanto:

```text
RU2M1-U01
→ observabilidad posterior a la actuación de constitución

F-OU005-01
→ operabilidad previa a la actuación de constitución

absorción
✘ no establecida
```

### Candidato 2 — condición preobservacional de `POU-RU2M1-01`

La investigación preobservacional de `POU-RU2M1-01` se refiere a las
condiciones necesarias para que una aplicación independiente constituya
válidamente la trayectoria:

```text
S1
↓
X
↓
interrupción
↓
S2(X)
```

Su objeto es la constitución inicial correcta de la situación observacional,
especialmente cuando puede existir un antecedente persistido de una aplicación
anterior.

No regula la capacidad humana para trabajar sobre el contenido durante su
elaboración.

Por tanto:

```text
POU-RU2M1-01
✘ no absorbe F-OU005-01
```

### Candidato 3 — `MR-U01-01`

`MR-U01-01` realiza localmente `RU2M1-U01`.

Su ámbito permanece en la manifestación suficiente de que la aceptación de
`X` ha producido efecto.

No contiene una obligación relativa a inspeccionar, recorrer o corregir el
contenido antes de `Crear`.

Por tanto:

```text
MR-U01-01
✘ no absorbe F-OU005-01
```

### Candidato 4 — «superficie libre para producir X»

`R-U2-M1` conserva la formulación:

```text
La persona dispone de una superficie libre para producir X.
```

Esta formulación constituye un antecedente material relevante porque sitúa la
producción de `X` en una superficie destinada a la actuación humana.

Sin embargo, el corpus previo no había establecido que:

```text
superficie libre
⇒
capacidad suficiente para inspeccionar,
recorrer y corregir contenido de extensión no breve
```

De hecho, la realización histórica siguió considerándose válida utilizando un
mecanismo monolínea de captura.

Por tanto, atribuir retrospectivamente ese significado fuerte a «superficie
libre» ampliaría el alcance histórico de la formulación.

Resultado:

```text
«superficie libre para producir X»
✔ antecedente relacionado

absorción de F-OU005-01
✘ no establecida
```

### Candidato principal — `F-OU002-01`

La auditoría localizó un antecedente histórico especialmente próximo.

`F-OU002-01` investigó una diferencia entre:

```text
aportación humana con estructura multilineal
```

y:

```text
X posteriormente disponible
```

La investigación estableció la trayectoria causal:

```text
aportación humana multilineal
↓
captura mediante input monolínea
↓
estructura multilineal no representable
↓
currentInput ya reducido
↓
persistencia literal
↓
restauración literal
```

La causa quedó localizada en el mecanismo contingente de captura durante
`S1`.

La investigación histórica concluyó además que la mera existencia de esa
restricción contingente no justificaba por sí misma:

```text
<input>
↓
<textarea>
```

ni una ampliación de `R-U2-M1`.

### Diferencia entre `F-OU002-01` y `F-OU005-01`

Los dos fenómenos afectan a la misma zona material de la realización, pero no
protegen la misma diferencia.

`F-OU002-01` trata de:

```text
qué forma textual
puede llegar a constituirse como X
```

`F-OU005-01` trata de:

```text
con qué suficiencia
puede la persona trabajar sobre el contenido
antes de constituir X
```

La distinción puede expresarse también temporalmente:

```text
F-OU002-01
→ pérdida en la forma que puede llegar a constituirse

F-OU005-01
→ pérdida durante la elaboración previa a la constitución
```

### Contraejemplo de absorción — texto largo sin saltos de línea

Para intentar absorber `F-OU005-01` dentro de `F-OU002-01` se considera el caso:

```text
X =
texto de varias frases
sin saltos de línea
```

En ese caso:

```text
estructura multilineal
→ ausente
```

por lo que la pérdida específica investigada por `F-OU002-01` no tiene por qué
aparecer.

El contenido puede seguir siendo una única secuencia textual representable por
el mecanismo monolínea.

Sin embargo, la observación humana realizada para `F-OU005-01` estableció que,
cuando el contenido alcanza varias frases, la caja de una sola línea deja de
ser suficientemente operativa para:

```text
inspeccionar
+
recorrer
+
corregir
```

el contenido antes de `Crear`.

Por tanto:

```text
texto largo sin saltos de línea
↓
F-OU002-01
→ no aparece necesariamente

F-OU005-01
→ sí puede aparecer
```

Este contraejemplo impide identificar ambos fenómenos.

### Resultado de la hipótesis de absorción

Se formula:

```text
HA-OU005-01 — Absorción de F-OU005-01 por antecedentes vigentes
```

Resultado:

```text
mismo medio contingente de captura implicado en F-OU002-01
✔

misma pérdida humana
✘

mismo momento de la trayectoria
✘

absorción completa por F-OU002-01
✘ refutada

absorción por RU2M1-U01
✘ no establecida

absorción por POU-RU2M1-01
✘ no establecida

absorción por MR-U01-01
✘ no establecida

absorción por «superficie libre para producir X»
✘ no establecida
```

### Relación conservada con `F-OU002-01`

La ausencia de absorción no implica independencia material completa.

Debe conservarse:

```text
F-OU002-01
        \
         → mecanismo monolínea de captura
        /
F-OU005-01
```

pero distinguiendo:

```text
F-OU002-01
→ limitación representacional
→ qué estructura puede formar parte de X

F-OU005-01
→ limitación operativa
→ con qué suficiencia puede la persona
  elaborar X antes de constituirlo
```

No se deriva todavía una categoría general que englobe ambos fenómenos.

### Compatibilidad con el cierre histórico de `F-OU002-01`

La situación actual no contradice que `F-OU002-01` terminara sin modificación.

Entonces existía:

```text
restricción técnica conocida
+
ninguna pérdida necesaria demostrada
↓
ninguna modificación derivada
```

La investigación actual aporta evidencia independiente posterior:

```text
misma zona material de la realización
+
pérdida humana distinta observada
+
pruebas de eliminación propias
↓
fundamento nuevo para continuar la reducción
```

Por tanto, no se reescribe retrospectivamente el resultado histórico de
`F-OU002-01`.

### Cierre de la auditoría de absorción

Dentro del corpus y del alcance auditados:

```text
antecedente F-OU002-01
✔ localizado

relación material con F-OU005-01
✔ establecida

absorción completa
✘ refutada

F-OU005-01
✔ conserva una diferencia humana propia

propiedad mínima
→ todavía no formulada

responsabilidad nueva
→ todavía no derivada

textarea
→ todavía no derivado

modificación de código
→ todavía no autorizada
```

La siguiente actuación deberá consistir exclusivamente en derivar, a partir del
mínimo sobreviviente, la propiedad mínima candidata correspondiente a
`F-OU005-01`.

La derivación deberá permanecer independiente de una solución técnica concreta.

---

## Reducción interna de la propiedad mínima candidata para `F-OU005-01`

Después de cerrar la auditoría de absorción se examinó si los dos componentes
que habían sobrevivido provisionalmente:

```text
inspeccionar suficientemente
+
corregir suficientemente
```

podían reducirse todavía más.

La prueba se realizó mediante tres casos conceptuales, sin modificar código ni
seleccionar ninguna solución técnica concreta.

### Caso A — inspección suficiente sin posibilidad de corrección

```text
la persona puede ver cómodamente
el contenido completo
+
no puede modificar lo ya escrito
```

La observación humana estableció que este caso sí permite producir un texto de
tres o cuatro frases.

Por tanto, no puede sostenerse:

```text
sin corrección
→ elaboración imposible
```

Sin embargo, la ausencia de corrección deja una pérdida relevante:

```text
contenido elaborado
+
error o diferencia detectada
+
imposibilidad de rectificar
↓
la persona puede no querer constituir
ese contenido mediante Crear
```

La referencia humana a «publicarlo» se interpreta únicamente como indicio de
que el contenido todavía puede no corresponder con aquello que la persona desea
constituir.

No se deriva ninguna noción de publicación.

### Caso B — modificación posible con inspección insuficiente

```text
la persona puede modificar el contenido
+
sólo puede inspeccionar una fracción mínima
de forma suficientemente incómoda
```

La observación humana calificó este instrumento como demasiado imperfecto para
habilitar un uso eficiente.

Por tanto, la mera posibilidad técnica de modificar no absorbe la necesidad de
inspección suficiente.

### Caso C — inspección y corrección suficientes

```text
la persona puede inspeccionar cómodamente
+
puede modificar lo escrito
antes de Crear
```

La observación humana estableció suficiencia completa para el caso considerado.

---

### `PE-OU005-04 — Eliminabilidad de la inspección suficiente`

Se intentó eliminar la inspección suficiente manteniendo la posibilidad de
modificar el contenido.

Resultado:

```text
modificación posible
+
inspección insuficiente
→ instrumento insuficiente para la elaboración observada
```

Por tanto:

```text
PE-OU005-04
✘ inspección suficiente no eliminable
```

La propiedad no puede reducirse a mera posibilidad técnica de modificación.

---

### `PE-OU005-05 — Eliminabilidad de la corrección previa`

Se intentó eliminar la posibilidad de corregir manteniendo una inspección
suficiente del contenido.

La observación mostró:

```text
inspección suficiente
+
ausencia de corrección
→ permite producir contenido
```

pero también:

```text
diferencia detectada
+
imposibilidad de rectificar
→ puede impedir que la persona quiera constituir
  el contenido observado
```

Por tanto, la corrección no es condición para que exista producción textual,
pero conserva una diferencia humana propia dentro de la elaboración previa.

Resultado:

```text
PE-OU005-05
✘ corrección previa no absorbida por la inspección
```

No se deriva que la persona deba corregir siempre.

Se deriva únicamente que, cuando detecta una diferencia entre:

```text
contenido actual
```

y:

```text
contenido que desea constituir
```

debe poder rectificarla antes de `Crear`.

---

### Formulación reducida de la propiedad mínima candidata

Después de `PE-OU005-04` y `PE-OU005-05`, la formulación candidata queda:

### `PC-OU005-01 — Operabilidad suficiente de la elaboración previa`

> En `S1`, antes de ejecutar la actuación mediante la que `X` queda
> constituido, la realización debe permitir que la persona pueda examinar
> suficientemente el contenido que está elaborando y rectificarlo cuando
> todavía no corresponde con el contenido que desea constituir, sin depender de
> que dicho contenido sea necesariamente breve.

Esta formulación reduce expresiones instrumentales anteriores como:

```text
ver
recorrer
corregir
```

a dos diferencias humanas:

```text
examinar suficientemente
+
rectificar cuando sea necesario
```

### Separación entre propiedad y realización

`PC-OU005-01` no determina:

- que todo el contenido deba verse simultáneamente;
- que exista scroll de una forma concreta;
- que se utilice un `textarea`;
- que se utilice un editor enriquecido;
- que exista formato;
- que exista Markdown;
- que existan títulos, negrita o barra de herramientas;
- una dimensión concreta del control;
- una longitud ilimitada;
- soporte obligatorio de estructura multilineal;
- edición posterior a `Crear`;
- ni una noción de publicación.

Tampoco convierte la palabra `corregir` en una obligación de modificar siempre
el contenido.

La exigencia reducida es:

```text
si la persona detecta que el contenido actual
no corresponde con el que desea constituir
↓
puede rectificarlo antes de Crear
```

### Relación con `F-OU002-01`

Debe mantenerse:

```text
F-OU002-01
→ qué estructura puede llegar a constituirse como X

PC-OU005-01
→ con qué suficiencia puede la persona trabajar
  sobre el contenido antes de constituir X
```

La propiedad candidata no absorbe ni reabre por sí misma `F-OU002-01`.

### Estado de cierre de la reducción interna

Dentro del alcance observado:

```text
PE-OU005-04
✘ inspección suficiente no eliminable

PE-OU005-05
✘ corrección previa no absorbida por la inspección

PC-OU005-01
✔ formulación mínima candidata derivada
✔ reducida a examen suficiente + rectificación cuando sea necesaria

responsabilidad nueva
→ todavía no derivada

textarea
→ todavía no derivado

modificación de código
→ todavía no autorizada
```

La siguiente actuación deberá examinar si `PC-OU005-01` constituye únicamente
una propiedad local necesaria de la realización o si existe fundamento
adicional para elevarla a responsabilidad.

Esa cuestión permanece abierta.

---

## Cierre de estatuto de `PC-OU005-01`

Después de derivar y reducir internamente `PC-OU005-01`, se examinó si la
propiedad exigía una responsabilidad realizativa independiente o si podía
permanecer como condición local de la actuación ya existente de producción de
`X`.

La hipótesis examinada fue:

```text
H-ER-OU005-01

PC-OU005-01 no constituye una responsabilidad realizativa independiente
si puede satisfacerse como condición local de la actuación ya existente
de producción de X, sin introducir:

- un resultado humano adicional;
- una nueva transición;
- un nuevo estado conceptual;
- una nueva autoridad;
- ni una actuación humana independiente.
```

### `PE-ER-OU005-01 — Independencia de resultado`

Se compararon dos realizaciones conceptuales.

Caso A:

```text
persona produce X
+
puede examinarlo suficientemente
+
puede rectificarlo cuando sea necesario
+
Crear
↓
X constituido
```

Caso B:

```text
persona produce X
↓
Revisar X
↓
X revisado
↓
Crear
↓
X constituido
```

La observación humana estableció que:

```text
A
✔ satisface completamente la necesidad observada
```

y que:

```text
B
✔ también podría satisfacerla
```

pero únicamente introduciendo un paso adicional que no aporta por sí mismo una
diferencia necesaria respecto de `A`.

La valoración de que un paso adicional podría ralentizar el proceso y tender a
ser desplazado por la persona si no aportase otras mejoras se conserva como
observación humana contextual.

No se convierte en una ley general de comportamiento ni forma parte de la
derivación mínima.

### Resultado de `PE-ER-OU005-01`

El caso A demuestra que `PC-OU005-01` puede satisfacerse completamente sin:

```text
resultado humano adicional
nueva transición
nuevo estado conceptual
actuación independiente de revisión
```

Por tanto:

```text
PE-ER-OU005-01
✔ independencia de resultado establecida
```

y:

```text
actuación «Revisar»
✘ necesaria

estado «X revisado»
✘ necesario

resultado intermedio independiente
✘ necesario
```

### Estatuto de `H-ER-OU005-01`

La hipótesis sobrevive dentro del alcance observado:

```text
H-ER-OU005-01
✔ no refutada
```

`PC-OU005-01` puede satisfacerse cualificando la actuación ya existente de
producción de `X`.

No se requiere introducir una actuación humana adicional ni un resultado
intermedio propio.

### Cierre de estatuto de `PC-OU005-01`

Se establece:

### `CE-PC-OU005-01 — Estatuto local de la operabilidad suficiente de la elaboración previa`

> `PC-OU005-01` constituye una propiedad local necesaria de la producción de
> `X` en `S1`, dentro del alcance observado. No introduce una responsabilidad
> realizativa independiente: condiciona suficientemente cómo debe poder
> ejercerse la elaboración de `X` antes de `Crear`.

La propiedad conserva su formulación:

### `PC-OU005-01 — Operabilidad suficiente de la elaboración previa`

> En `S1`, antes de ejecutar la actuación mediante la que `X` queda
> constituido, la realización debe permitir que la persona pueda examinar
> suficientemente el contenido que está elaborando y rectificarlo cuando
> todavía no corresponde con el contenido que desea constituir, sin depender de
> que dicho contenido sea necesariamente breve.

### Consecuencias negativas

El cierre de estatuto no deriva:

- `RU2M1-U02`;
- una nueva responsabilidad realizativa;
- una actuación `Revisar`;
- un estado conceptual `X revisado`;
- una transición adicional;
- un `textarea`;
- un editor enriquecido;
- formato;
- una dimensión concreta del control;
- una modificación de Product;
- ni una modificación de código.

### Estado tras el cierre de estatuto

Dentro del alcance observado:

```text
F-OU005-01
✔ diferencia humana propia

PC-OU005-01
✔ propiedad mínima derivada
✔ reducción interna cerrada
✔ estatuto local establecido

PE-ER-OU005-01
✔ independencia de resultado establecida

H-ER-OU005-01
✔ no refutada

CE-PC-OU005-01
✔ propiedad local necesaria de la producción de X en S1

RU2M1-U02
✘ no derivada

responsabilidad realizativa nueva
✘ no necesaria para satisfacer PC-OU005-01

actuación «Revisar»
✘ no necesaria

estado «X revisado»
✘ no necesario

textarea
→ todavía no derivado

modificación de código
→ todavía no realizada
```

La siguiente actuación deberá consistir exclusivamente en derivar la diferencia
realizativa mínima necesaria para satisfacer `PC-OU005-01`.

Esa derivación deberá permanecer independiente de una solución técnica
concreta.

---

## Derivación y cierre de `DR-OU005-01`

Después de cerrar el estatuto local de `PC-OU005-01`, se investigó qué
diferencia realizativa mínima debe existir para satisfacerla sin seleccionar
todavía una solución técnica concreta.

La propiedad local de partida es:

```text
PC-OU005-01
→ examinar suficientemente el contenido
+
→ rectificarlo cuando todavía no corresponde
  con el contenido que la persona desea constituir
```

La investigación se concentró en separar:

```text
capacidad técnica de modificación
≠
operabilidad suficiente de la rectificación

misma superficie
≠
acoplamiento operativo suficiente
```

### `PE-DR-OU005-01 — Suficiencia de modificación técnicamente posible`

Se examinó una realización conceptual con:

```text
visualización completa y actualizada del contenido
+
caja monolínea estrecha para modificarlo
+
reflejo inmediato de los cambios
```

La observación humana estableció que:

```text
inspección suficiente
✔

modificación técnicamente posible
✔

rectificación operativamente suficiente
✘
```

La realización permitiría ver perfectamente el contenido y observar
instantáneamente los cambios realizados, pero el mecanismo utilizado para
localizar y modificar una parte concreta seguiría resultando frustrante e
insuficientemente operativo para contenido de varias frases.

Por tanto:

```text
PE-DR-OU005-01
✘ mera posibilidad técnica de modificación no basta
```

La diferencia no puede reducirse a:

```text
ver suficientemente
+
poder modificar de cualquier manera
```

La rectificación debe ser también suficientemente operativa dentro de la
elaboración observada.

---

### `PE-DR-OU005-02 — Necesidad de edición integrada`

Se examinó si la inspección y la rectificación debían realizarse
necesariamente en una única superficie integrada.

Se consideró una realización conceptual en la que:

```text
la persona ve suficientemente el contenido completo
↓
selecciona directamente la parte que desea modificar
↓
esa parte queda inmediatamente disponible
en un campo de corrección
↓
la modificación se refleja inmediatamente
en el contenido examinado
```

La observación humana estableció que esta variante resulta suficientemente
operativa.

Por tanto:

```text
PE-DR-OU005-02
✘ edición integrada en una única superficie no necesaria
```

No se deriva:

```text
misma superficie para inspección y edición
→ necesaria
```

Lo que sí sobrevive es la necesidad de que ambas capacidades mantengan un
acoplamiento operativo suficiente.

### Qué fallaba en la variante anterior

La insuficiencia de la variante examinada en `PE-DR-OU005-01` no procedía de
utilizar dos superficies.

Procedía de:

```text
buena inspección
+
mecanismo de rectificación desacoplado
+
obligación de localizar y recorrer el contenido
mediante una caja monolínea estrecha
↓
rectificación insuficientemente operativa
```

La variante de `PE-DR-OU005-02` elimina esa pérdida mediante:

```text
identificación de qué se desea modificar
↓
acceso suficiente a esa parte
↓
rectificación
↓
reflejo suficientemente inmediato
en el contenido examinado
```

### Reducción de la noción de eficiencia

La observación humana utilizó también la idea de eficiencia.

Para evitar ampliar indebidamente el criterio, se reduce así:

```text
operabilidad suficiente
≠
rapidez máxima

operabilidad suficiente
≠
comodidad óptima

operabilidad suficiente
≠
ausencia total de fricción
```

El mínimo conservado es:

```text
la mecánica del instrumento
no impide ni dificulta de forma material
examinar y rectificar el contenido
dentro de la elaboración observada
```

No se deriva una exigencia general de optimización.

---

### Formulación de la diferencia realizativa mínima

Después de `PE-DR-OU005-01` y `PE-DR-OU005-02` se establece:

### `DR-OU005-01 — Operabilidad suficiente del medio de elaboración`

> Antes de `Crear`, la realización debe proporcionar un medio que permita a la
> persona examinar suficientemente el contenido que está elaborando y localizar
> y rectificar suficientemente aquello que desea modificar, manteniendo un
> acoplamiento operativo suficiente entre ambas capacidades y sin depender de
> que el contenido sea necesariamente breve.

La formulación conserva cuatro componentes:

```text
inspección suficiente
+
localización suficiente
+
rectificación suficiente
+
acoplamiento operativo suficiente
```

### Límites de `DR-OU005-01`

`DR-OU005-01` no determina:

- una misma superficie para inspeccionar y editar;
- un `textarea`;
- un editor enriquecido;
- formato;
- Markdown;
- títulos;
- negrita;
- barra de herramientas;
- una dimensión concreta;
- visualización simultánea de todo contenido posible;
- longitud ilimitada;
- rapidez óptima;
- comodidad máxima;
- ausencia total de fricción;
- ni edición posterior a `Crear`.

Tampoco exige una actuación independiente de revisión.

### Relación con `PC-OU005-01`

La relación queda:

```text
F-OU005-01
↓
PC-OU005-01
↓
DR-OU005-01
```

donde:

```text
PC-OU005-01
→ propiedad local necesaria

DR-OU005-01
→ diferencia realizativa mínima
  requerida para satisfacerla
```

`DR-OU005-01` no introduce una responsabilidad realizativa nueva.

### Estado de cierre

Dentro del alcance observado:

```text
PE-DR-OU005-01
✘ mera posibilidad técnica de modificación no basta

PE-DR-OU005-02
✘ edición integrada no necesaria

DR-OU005-01
✔ derivada
✔ reducida
✔ cerrada como diferencia realizativa mínima

responsabilidad realizativa nueva
✘ no derivada

RU2M1-U02
✘ no derivada

textarea
→ todavía no derivado

realización concreta mínima
→ todavía no seleccionada

modificación de código
→ todavía no realizada
```

La siguiente actuación deberá consistir exclusivamente en comparar
realizaciones mínimas concretas capaces de satisfacer `DR-OU005-01`.

La comparación deberá preservar la diferencia entre:

```text
satisfacer DR-OU005-01
≠
seleccionar una solución técnicamente más rica
```

---

## Selección y cierre de `MR-OU005-01`

Después de cerrar `DR-OU005-01`, se compararon realizaciones concretas mínimas
capaces de satisfacerla sin introducir todavía una decisión técnica de
implementación.

La diferencia realizativa de partida es:

```text
DR-OU005-01
→ inspección suficiente
+
→ localización suficiente
+
→ rectificación suficiente
+
→ acoplamiento operativo suficiente
```

Se compararon dos familias de realización.

### Realización A — superficie integrada de elaboración

```text
una única superficie
+
contenido visible en varias líneas
+
localización directa mediante cursor
+
rectificación directa sobre el contenido
```

### Realización B — inspección y rectificación coordinadas

```text
superficie de inspección suficiente
↓
mecanismo independiente de selección/localización
↓
campo separado de corrección
↓
sincronización inmediata entre ambas superficies
```

Ambas realizaciones pueden satisfacer `DR-OU005-01`.

La cuestión investigada fue si la separación introducida por `B` pertenecía al
mínimo necesario.

---

### `PE-MR-OU005-01 — Necesidad de separación entre inspección y rectificación`

La observación humana estableció que una única superficie que permita:

```text
ver varias líneas del contenido
+
colocar directamente el cursor
donde se desea modificar
+
rectificar allí mismo
```

satisface completamente la necesidad observada para un texto de varias frases,
sin que se eche en falta la separación funcional introducida por `B`.

Por tanto:

```text
PE-MR-OU005-01
✘ separación entre inspección y rectificación no necesaria
```

La realización B sigue siendo compatible con `DR-OU005-01`, pero sus mecanismos
adicionales no pertenecen al mínimo mientras no aporten una diferencia
independientemente necesaria.

Quedan eliminados del mínimo:

```text
segunda superficie
✘ necesaria

mecanismo independiente de selección
✘ necesario

campo separado de corrección
✘ necesario

sincronización entre dos superficies
✘ necesaria
```

La eliminación no demuestra que esos mecanismos sean incorrectos.

Demuestra únicamente que no son necesarios para satisfacer la pérdida
investigada.

---

### Selección de la realización mínima

Después de `PE-MR-OU005-01` se selecciona:

### `MR-OU005-01 — Superficie integrada de elaboración suficientemente operativa`

> Antes de `Crear`, una única superficie permite a la persona examinar
> suficientemente el contenido que está elaborando, localizar directamente
> aquello que desea modificar y rectificarlo en la propia superficie, sin
> depender de que el contenido sea necesariamente breve.

La realización mínima seleccionada satisface:

```text
inspección suficiente
✔

localización suficiente
✔

rectificación suficiente
✔

acoplamiento operativo suficiente
✔
```

### Separación entre realización y mecanismo técnico

`MR-OU005-01` no determina todavía el elemento técnico concreto que debe
materializarla.

Debe conservarse:

```text
MR-OU005-01
→ una única superficie integrada
  suficientemente operativa

textarea
→ todavía no seleccionado
```

Por tanto, `MR-OU005-01` no deriva todavía:

- un elemento HTML concreto;
- un `textarea`;
- un editor enriquecido;
- una librería de edición;
- formato;
- Markdown;
- una dimensión exacta;
- autoexpansión;
- contador de caracteres;
- límite de longitud;
- ni otras prestaciones no demostradas.

### Relación derivativa consolidada

La cadena queda:

```text
F-OU005-01
↓
PC-OU005-01
↓
DR-OU005-01
↓
MR-OU005-01
```

donde:

```text
F-OU005-01
→ pérdida humana observada

PC-OU005-01
→ propiedad local necesaria

DR-OU005-01
→ diferencia realizativa mínima

MR-OU005-01
→ realización mínima seleccionada
```

No se introduce una responsabilidad realizativa nueva.

### Estado de cierre de `MR-OU005-01`

Dentro del alcance observado:

```text
PE-MR-OU005-01
✘ separación inspección/rectificación no necesaria

MR-OU005-01
✔ seleccionada
✔ reducida
✔ cerrada como realización mínima concreta

segunda superficie
✘ necesaria

campo separado de corrección
✘ necesario

sincronización entre superficies
✘ necesaria

RU2M1-U02
✘ no derivada

responsabilidad realizativa nueva
✘ no derivada

textarea
→ todavía no seleccionado como mecanismo técnico

modificación de código
→ todavía no realizada
```

La siguiente actuación deberá consistir exclusivamente en comparar mecanismos
técnicos mínimos capaces de materializar `MR-OU005-01`.

La comparación deberá distinguir:

```text
realización mínima seleccionada
≠
mecanismo técnico concreto
```

y no deberá introducir prestaciones adicionales no derivadas.

---

## Selección y cierre de `MT-OU005-01`

Después de seleccionar y cerrar `MR-OU005-01`, se compararon mecanismos
técnicos mínimos capaces de materializarla sin introducir prestaciones no
derivadas.

La realización mínima de partida es:

```text
MR-OU005-01
→ una única superficie integrada
→ inspección suficiente
→ localización directa
→ rectificación directa
→ sin depender de que el contenido sea necesariamente breve
```

La comparación técnica se concentró en distinguir:

```text
realización mínima
≠
mecanismo técnico concreto
≠
prestaciones adicionales
```

---

### `PE-MT-OU005-01 — Suficiencia del input monolínea`

Se examinó si el `<input>` monolínea actual podía materializar
`MR-OU005-01`.

El mecanismo permite:

```text
escribir
+
modificar
+
desplazarse horizontalmente
```

pero, cuando el contenido supera una extensión breve:

```text
sólo una fracción reducida queda visible
↓
la inspección suficiente se degrada
↓
la localización de aquello que se desea modificar
depende de recorrer una superficie monolínea estrecha
```

La realización vuelve así a depender de que el contenido sea breve para
mantener una operabilidad suficiente.

Por tanto:

```text
PE-MT-OU005-01
✘ input monolínea insuficiente para materializar MR-OU005-01
```

La insuficiencia no procede de que el `<input>` sea incapaz de modificar texto.

Procede de que no satisface suficientemente la combinación ya derivada de:

```text
inspección
+
localización
+
rectificación
```

para contenido de varias frases.

---

### `PE-MT-OU005-02 — Necesidad de un mecanismo de edición más general`

Se compararon dos mecanismos técnicamente capaces de proporcionar una
superficie integrada multilínea:

```text
<textarea>
```

y:

```text
contenteditable
```

Ambos pueden proporcionar:

```text
varias líneas visibles
+
localización directa
+
cursor
+
selección
+
rectificación directa
```

Sin embargo, `contenteditable` introduce una capacidad de edición general sobre
contenido del DOM que no ha sido derivada como necesaria para esta
investigación.

La observación humana estableció que un `<textarea>` convencional satisface
completamente la necesidad observada.

Por tanto:

```text
<textarea>
✔ suficiente

contenteditable
✔ potencialmente suficiente

capacidad genérica de edición DOM
✘ necesaria
```

Resultado:

```text
PE-MT-OU005-02
✘ mecanismo de edición más general no necesario
```

La eliminación de `contenteditable` del mínimo no implica que sea incorrecto.

Implica únicamente que su capacidad adicional no es necesaria para materializar
`MR-OU005-01`.

---

### `PE-MT-OU005-03 — Necesidad de autoexpansión`

Se examinó si la superficie multilínea debía aumentar automáticamente su altura
a medida que crece el contenido.

La observación humana estableció que un `<textarea>` convencional con:

```text
varias líneas visibles
+
edición directa
+
desplazamiento interno cuando sea necesario
```

satisface completamente la necesidad observada.

Por tanto:

```text
PE-MT-OU005-03
✘ autoexpansión no necesaria
```

No se deriva una obligación de que la superficie muestre simultáneamente todo
el contenido posible.

---

### Selección del mecanismo técnico mínimo

Después de `PE-MT-OU005-01`, `PE-MT-OU005-02` y `PE-MT-OU005-03`, se
selecciona:

### `MT-OU005-01 — Área nativa de texto multilínea`

> `MR-OU005-01` se materializa mediante un control nativo de texto multilínea
> directamente editable que permite a la persona inspeccionar, localizar y
> rectificar suficientemente el contenido antes de `Crear`. En la realización
> web actual, el mecanismo técnico seleccionado es un `<textarea>`
> convencional.

El mecanismo seleccionado aporta exactamente las capacidades técnicas
necesarias para la realización investigada:

```text
superficie multilínea
+
edición directa
+
cursor
+
selección
+
rectificación
+
desplazamiento interno cuando sea necesario
```

### Límites de `MT-OU005-01`

La selección no deriva:

- autoexpansión;
- editor enriquecido;
- `contenteditable`;
- formato;
- Markdown;
- títulos;
- negrita;
- barra de herramientas;
- una dimensión exacta;
- un número exacto de filas;
- un límite de longitud;
- contador de caracteres;
- edición posterior a `Crear`;
- ni ninguna modificación de Product.

La dimensión visual concreta deberá justificarse únicamente si una prueba
posterior demuestra que afecta a la suficiencia de `MR-OU005-01`.

### Cadena derivativa consolidada

La cadena queda:

```text
F-OU005-01
↓
PC-OU005-01
↓
DR-OU005-01
↓
MR-OU005-01
↓
MT-OU005-01
↓
<textarea>
```

donde:

```text
F-OU005-01
→ pérdida humana observada

PC-OU005-01
→ propiedad local necesaria

DR-OU005-01
→ diferencia realizativa mínima

MR-OU005-01
→ realización mínima seleccionada

MT-OU005-01
→ mecanismo técnico mínimo seleccionado
```

No se deriva una responsabilidad realizativa nueva.

### Estado de cierre de `MT-OU005-01`

Dentro del alcance observado:

```text
PE-MT-OU005-01
✘ input monolínea insuficiente

PE-MT-OU005-02
✘ mecanismo de edición más general no necesario

PE-MT-OU005-03
✘ autoexpansión no necesaria

MT-OU005-01
✔ seleccionada
✔ reducida
✔ cerrada como mecanismo técnico mínimo

<textarea>
✔ seleccionado como mecanismo técnico

contenteditable
✘ necesario

autoexpansión
✘ necesaria

editor enriquecido
✘ necesario

RU2M1-U02
✘ no derivada

responsabilidad realizativa nueva
✘ no derivada

modificación de código
→ todavía no realizada
```

La siguiente actuación deberá consistir exclusivamente en abrir el RED técnico
mínimo que demuestre que la realización actual todavía no materializa
`MT-OU005-01`.

Ese RED deberá limitarse a la diferencia ya derivada y no introducir
prestaciones adicionales.

---

## RED técnico de `MT-OU005-01`

Después de seleccionar y cerrar `MT-OU005-01`, se abrió un RED técnico mínimo
destinado exclusivamente a comprobar si la realización actual materializaba el
mecanismo técnico ya derivado.

La diferencia técnica investigada fue:

```text
estado actual
→ <input> monolínea

MT-OU005-01
→ <textarea> multilínea
```

No se introdujeron en el RED:

- `rows`;
- altura concreta;
- estilos;
- autoexpansión;
- formato;
- Markdown;
- límite de longitud;
- ni ninguna otra prestación adicional.

### Test añadido

Se añadió un único test a:

```text
src/realizations/ru2m1/ResumeExperience.test.tsx
```

dentro de la primera ejecución de `S1`:

```tsx
it("uses the selected multiline text mechanism in initial S1", () => {
  render(<ResumeExperience />);

  const textbox = screen.getByRole("textbox", {
    name: /texto libre/i,
  });

  expect(textbox.tagName).toBe("TEXTAREA");
});
```

El test comprueba únicamente el mecanismo técnico seleccionado.

### Ejecución del RED

Se ejecutó:

```bash
npm test -- src/realizations/ru2m1/ResumeExperience.test.tsx
```

Resultado:

```text
Test Files
→ 1 failed

Tests
→ 32 passed
→ 1 failed
→ 33 total
```

Los 32 tests anteriores permanecieron verdes.

El único fallo correspondió al nuevo test:

```text
uses the selected multiline text mechanism in initial S1
```

con el resultado:

```text
Expected: "TEXTAREA"
Received: "INPUT"
```

### Interpretación

El RED confirma de forma aislada que:

```text
realización actual
→ continúa utilizando <input>

MT-OU005-01
→ selecciona <textarea>
```

Por tanto:

```text
RED-MT-OU005-01
✔ fallo esperado confirmado
✔ diferencia técnica aislada
✔ tests anteriores conservados
```

No se observó ninguna regresión adicional en la suite específica.

### Estado tras el RED

Dentro del alcance probado:

```text
MT-OU005-01
✔ mecanismo técnico previamente seleccionado

RED-MT-OU005-01
✔ escrito
✔ ejecutado
✔ fallo esperado confirmado

suite específica
→ 32 / 33

tests previos
✔ 32 / 32 continúan verdes

nuevo test
✘ 1 fallo esperado

producción
→ todavía no modificada

GREEN
→ todavía no abierto
```

La siguiente actuación deberá consistir exclusivamente en modificar la
realización de `S1` para sustituir el `<input>` actual por el `<textarea>`
seleccionado, conservando:

```text
value
onChange
setCurrentInput
setAccepted(false)
texto de orientación
Crear
```

No deberán introducirse en ese cambio:

```text
rows
estilos
autoexpansión
formato
Markdown
límite de longitud
ni otras prestaciones no derivadas
```

Después de esa única modificación deberá repetirse la suite específica para
comprobar el GREEN.

---

## GREEN técnico específico de `MT-OU005-01`

Después de registrar el RED técnico de `MT-OU005-01`, se realizó la modificación
mínima de producción prevista para materializar el mecanismo técnico
seleccionado.

La modificación se limitó a sustituir, en `S1` inicial:

```tsx
<input
  value={currentInput}
  onChange={(event) => {
    setCurrentInput(event.target.value);
    setAccepted(false);
  }}
/>
```

por:

```tsx
<textarea
  value={currentInput}
  onChange={(event) => {
    setCurrentInput(event.target.value);
    setAccepted(false);
  }}
/>
```

Se conservaron sin cambios:

```text
value
onChange
setCurrentInput
setAccepted(false)
texto de orientación
Crear
```

No se introdujeron:

```text
rows
estilos
autoexpansión
editor enriquecido
formato
Markdown
límite de longitud
ni otras prestaciones no derivadas
```

### Ejecución de la suite específica

Después de la modificación se ejecutó:

```bash
npm test -- src/realizations/ru2m1/ResumeExperience.test.tsx
```

Resultado:

```text
Test Files
✔ 1 passed

Tests
✔ 33 passed
✔ 33 total
```

El nuevo test:

```text
uses the selected multiline text mechanism in initial S1
```

pasó correctamente.

Los 32 tests anteriores permanecieron verdes.

### Interpretación del GREEN específico

El resultado establece:

```text
RED-MT-OU005-01
✔ había aislado la diferencia INPUT / TEXTAREA

modificación mínima
✔ aplicada

GREEN-MT-OU005-01
✔ confirmado en suite específica
```

Por tanto, dentro del alcance de la suite específica:

```text
MT-OU005-01
✔ materializado técnicamente en S1
```

sin introducir ninguna de las prestaciones excluidas durante la derivación.

### Estado tras el GREEN específico

```text
RED-MT-OU005-01
✔ confirmado

GREEN-MT-OU005-01
✔ confirmado en suite específica

suite específica
✔ 33 / 33

tests previos
✔ 32 / 32 continúan verdes

nuevo test
✔ 1 / 1 verde

MT-OU005-01
✔ materializado técnicamente en S1

suite global
→ todavía no ejecutada tras este cambio

build
→ todavía no comprobado tras este cambio

git diff --check
→ todavía no comprobado tras este cambio

validación humana del textarea en S1
→ todavía pendiente
```

La siguiente actuación deberá consistir exclusivamente en realizar la validación
técnica global posterior al GREEN específico.

El orden previsto es:

```bash
npm test
npm run build
git diff --check
```

Sólo después de una validación técnica global satisfactoria deberá abrirse la
observación humana del nuevo `<textarea>` en `S1`.

---

## Validación técnica global posterior al GREEN de `MT-OU005-01`

Después de confirmar el GREEN técnico específico de `MT-OU005-01`, se ejecutó
la validación técnica global prevista antes de abrir la observación humana del
nuevo `<textarea>` en `S1`.

La validación se realizó en este orden:

```bash
npm test
npm run build
git diff --check
```

### Suite global

Resultado:

```text
Test Files
✔ 26 / 26

Tests
✔ 236 / 236
```

La suite global quedó completamente verde.

El total aumentó de 235 a 236 tests como consecuencia del nuevo test técnico
introducido para `MT-OU005-01`.

No se observó ninguna regresión global.

### Build

Se ejecutó:

```bash
npm run build
```

Resultado:

```text
vite v8.0.16
✔ 19 modules transformed
✔ build completado
✔ 213 ms
```

El build de producción quedó completado correctamente.

### Comprobación de diff

Se ejecutó:

```bash
git diff --check
```

Resultado:

```text
sin salida
```

Por tanto:

```text
git diff --check
✔ PASS
```

### Cierre de la validación técnica global

El estado técnico posterior al GREEN queda:

```text
GREEN-MT-OU005-01
✔ confirmado en suite específica
✔ 33 / 33

suite global
✔ 26 / 26 archivos
✔ 236 / 236 tests

build
✔ PASS
✔ 19 módulos transformados

git diff --check
✔ PASS
```

Dentro del alcance técnico comprobado:

```text
MT-OU005-01
✔ materializado en S1
✔ sin regresiones automatizadas detectadas

validación técnica global
✔ cerrada
```

La validación técnica no establece todavía la suficiencia humana del nuevo
`<textarea>`.

### Estado tras la validación global

```text
RED-MT-OU005-01
✔ confirmado

GREEN-MT-OU005-01
✔ confirmado

validación técnica global
✔ cerrada

suite específica
✔ 33 / 33

suite global
✔ 26 / 26
✔ 236 / 236

build
✔ PASS

git diff --check
✔ PASS

validación humana del textarea en S1
→ todavía pendiente

cierre por suficiencia humana
→ todavía no establecido
```

La siguiente actuación deberá consistir exclusivamente en observar humanamente
el nuevo `<textarea>` en `S1`, utilizando contenido de varias frases y
comprobando si la realización permite efectivamente:

```text
examinar suficientemente
+
localizar suficientemente
+
rectificar suficientemente
```

antes de `Crear`.

No deberá modificarse código durante esa observación salvo que aparezca una
nueva diferencia demostrada.

---

## Observación humana y cierre por suficiencia de `MT-OU005-01`

Después de cerrar la validación técnica global posterior al GREEN, se realizó
la observación humana del `<textarea>` materializado en `S1`.

La prueba se efectuó antes de `Crear`, utilizando un texto de tres o cuatro
frases y realizando acciones de revisión y corrección sobre el propio
contenido.

### Observación sobre examen, localización y rectificación

La observación humana estableció:

```text
examen
✔ la persona puede moverse por el texto sin problemas

localización
✔ puede encontrar una palabra o frase concreta
✔ puede colocar el cursor en ella con suficiente facilidad

rectificación
✔ puede corregir
✔ puede borrar
✔ puede reescribir
  antes de Crear
```

Por tanto, los tres componentes operativos investigados quedan satisfechos:

```text
examinar suficientemente
✔

localizar suficientemente
✔

rectificar suficientemente
✔
```

### Observación residual sobre visibilidad simultánea

La comparación con la caja monolínea mostró una mejora suficiente, pero se
observó una limitación potencial:

```text
parte del texto puede quedar fuera
de la zona visible simultáneamente
↓
un error no advertido puede permanecer
↓
la persona puede pulsar Crear
creyendo que el texto ya es correcto
```

Esta observación no se convirtió automáticamente en una nueva insuficiencia.

Se abrió una última comprobación reductiva:

```text
si la persona decide revisar deliberadamente
todo el contenido antes de Crear
↓
¿puede hacerlo con normalidad
y sin dificultad material?
```

La respuesta humana fue positiva.

La revisión completa puede realizarse recorriendo el `<textarea>` con
normalidad y sin dificultad material.

### Clasificación de la diferencia residual

El resultado permite distinguir:

```text
capacidad de revisión completa
✔ presente

visibilidad simultánea de todo el contenido
✘ no necesaria para la suficiencia observada

mayor superficie visible
→ mejora posible
→ optimización potencial
→ no requisito mínimo derivado
```

No se deriva por esta observación:

- autoexpansión;
- una altura mayor obligatoria;
- un número concreto de filas;
- visualización simultánea de todo el contenido;
- editor enriquecido;
- formato;
- Markdown;
- ni otra prestación adicional.

### Cierre por suficiencia humana

Dentro del alcance observado se establece:

### `CS-MT-OU005-01 — Suficiencia humana del mecanismo técnico seleccionado`

> El `<textarea>` convencional materializado en `S1` permite examinar,
> localizar y rectificar suficientemente el contenido antes de `Crear`. La
> revisión completa del texto puede realizarse con normalidad y sin dificultad
> material, aunque no todo el contenido tenga que permanecer visible
> simultáneamente.

Por tanto:

```text
MT-OU005-01
✔ técnicamente materializado
✔ validado globalmente
✔ humanamente suficiente
```

La mejora potencial de mostrar una mayor porción del contenido permanece fuera
del mínimo demostrado.

### Cadena de cierre

La trayectoria queda:

```text
F-OU005-01
↓
PC-OU005-01
↓
DR-OU005-01
↓
MR-OU005-01
↓
MT-OU005-01
↓
<textarea>
↓
RED
↓
GREEN
↓
validación técnica global
↓
observación humana
↓
suficiencia
✔
```

### Estado tras la observación humana

```text
RED-MT-OU005-01
✔ confirmado

GREEN-MT-OU005-01
✔ confirmado

validación técnica global
✔ cerrada

CS-MT-OU005-01
✔ suficiencia humana establecida

MT-OU005-01
✔ cerrado por suficiencia dentro del alcance observado

examinar suficientemente
✔

localizar suficientemente
✔

rectificar suficientemente
✔

revisión completa deliberada
✔ posible con normalidad
✔ sin dificultad material

visibilidad simultánea de todo el texto
✘ no derivada como requisito mínimo

mayor superficie visible
→ mejora posible
→ no necesidad mínima demostrada

autoexpansión
✘ no necesaria

RU2M1-U02
✘ no derivada

responsabilidad realizativa nueva
✘ no derivada
```

Este cierre no generaliza la suficiencia a cualquier persona, contenido o
realización futura.

Tampoco convierte las mejoras posibles observadas en compromisos normativos.

---

# 14. Relación provisional entre S1 y S2(X)

La posible reducción común es:

```text
orientación situacional de la actuación presente
                    │
          ┌─────────┴─────────┐
          │                   │
         S1                 S2(X)
          │                   │
reconocer qué         reconocer X anterior
puede hacerse         +
ahora                 reconocer qué puede
                      hacerse ahora
                      +
                      distinguir ambos
```

Esta estructura es únicamente una hipótesis reductiva.

No constituye todavía una ampliación normativa de `E-RU2M1-10`.

---

# 15. Límites de la investigación

La investigación no pretende determinar:

1. una interfaz definitiva;
2. un lenguaje general de instrucciones;
3. una taxonomía de onboarding;
4. tutoriales;
5. ayuda contextual general;
6. documentación de usuario;
7. historial;
8. colección;
9. navegación;
10. semántica de las aportaciones;
11. relación necesaria entre `X` e `Y`;
12. número futuro de aportaciones;
13. Product como sistema autoexplicativo;
14. una obligación universal de inteligibilidad;
15. accesibilidad general de toda interfaz;
16. ni una nueva vertical de Product.

---

# 16. Conclusiones actualmente prohibidas

Con la evidencia disponible no puede concluirse todavía que:

1. exista `RU2M1-U02`;
2. deba modificarse `RU2M1-U01`;
3. deba modificarse `E-RU2M1-10`;
4. `E-RU2M1-10` cubra necesariamente `S1`;
5. `E-RU2M1-10` no pueda cubrir `S1`;
6. `Aportación actual` deba eliminarse;
7. deba utilizarse `Inserte un texto`;
8. sea necesaria una instrucción textual;
9. deba modificarse `resumeModel`;
10. deba modificarse el repositorio de persistencia;
11. deban modificarse `PV-001`, `PV-002`, `PV-003` o `PV-004`;
12. exista `PV-005`;
13. ni que la dificultad observada se generalice a otras personas o
    realizaciones.

---

# 17. Estado actual

```text
evidencia humana en S1 inicial
✔ obtenida

dificultad de reconocimiento inicial
✔ observada

contradicción X/Y posterior
→ no observada

E-RU2M1-10
✔ antecedente material relevante localizado

orientación situacional
✔ previamente demostrada
✔ realizada localmente en situación de reanudación

insuficiencia de cobertura realizativa en S1 inicial
✔ establecida dentro de la trayectoria observada

F-OU004-01
✔ observado y atribuido a orientación situacional

H-OS-S1-01
✔ cerrada con resultado positivo dentro del alcance observado

absorción por orientación situacional
✔ establecida dentro del alcance conceptual investigado

cobertura realizativa histórica en S1
→ no demostrada

PC-OS-S1-01
✔ reducida dentro del alcance observado

nueva responsabilidad local
→ no derivada

modificación local de R-U2-M1 en S1
✔ aplicada como candidata de realización de PC-OS-S1-01

validación específica automatizada
✔ ResumeExperience 30 / 30

observación humana posterior al GREEN
✔ realizada

reconocibilidad de que debe introducirse texto
✔ mejorada

R-OS-S1-01 — reconocibilidad de la entrada admisible
✔ cerrada dentro del alcance observado
✔ atribuida al componente de entrada de PC-OS-S1-01

R-OS-S1-02 — reconocibilidad del efecto de Crear antes de ejecutarlo
✔ cerrada dentro del alcance observado
✔ reducida a reconocibilidad previa de la continuidad del trabajo

PC-OS-S1-01
✔ revisada tras R-OS-S1-01 y R-OS-S1-02
✔ conserva tres componentes irreducibles dentro del alcance observado

DR-OS-S1-01
✔ derivada
✔ identificó B y C como diferencias entonces ausentes
✔ posteriormente materializadas mediante GM-OS-S1-01

segundo RED
✔ escrito y ejecutado

RED-B
✔ fallo esperado confirmado

RED-C
✔ fallo esperado confirmado

suite específica tras el RED
→ 30 / 32
→ 30 tests previos permanecen verdes
→ 2 fallos corresponden exclusivamente a B y C

GM-OS-S1-01
✔ derivada
✔ aplicada en S1 inicial
✔ limitada a B y C

RED-B
✔ GREEN

RED-C
✔ GREEN

ajuste de aserciones obsoletas sobre “retomar”
✔ realizado en exactamente 2 pruebas
✔ ahora distinguen texto auxiliar de heading “Retomar”

suite específica tras el segundo GREEN
✔ ResumeExperience 32 / 32

validación global
✔ 26 / 26 archivos
✔ 235 / 235 tests

build
✔ PASS
✔ 19 módulos transformados

git diff --check global
✔ PASS

observación humana posterior al segundo GREEN
✔ realizada

A — actuación disponible
✔ suficientemente reconocible

B — entrada admisible
✔ suficientemente reconocible

C — continuidad del trabajo
✔ suficientemente reconocible

PC-OS-S1-01
✔ cerrada por suficiencia dentro del alcance observado

F-OU005-01
✔ formulación refinada
✔ conserva una diferencia humana propia

PE-OU005-02
→ eliminación fallida

PE-OU005-03
✔ editor enriquecido eliminado como requisito mínimo

auditoría de absorción
✔ completada

HA-OU005-01
✘ absorción completa refutada

F-OU002-01
✔ antecedente material relacionado
✘ no absorbe F-OU005-01

contraejemplo de texto largo sin saltos de línea
✔ conserva F-OU005-01 sin exigir F-OU002-01

PE-OU005-04
✘ inspección suficiente no eliminable

PE-OU005-05
✘ corrección previa no absorbida por la inspección

PC-OU005-01
✔ propiedad mínima derivada
✔ examen suficiente + rectificación cuando sea necesaria
✔ estatuto local establecido

PE-ER-OU005-01
✔ independencia de resultado establecida

H-ER-OU005-01
✔ no refutada

CE-PC-OU005-01
✔ propiedad local necesaria de la producción de X en S1

PE-DR-OU005-01
✘ mera posibilidad técnica de modificación no basta

PE-DR-OU005-02
✘ edición integrada no necesaria

DR-OU005-01
✔ derivada
✔ reducida
✔ diferencia realizativa mínima cerrada

PE-MR-OU005-01
✘ separación inspección/rectificación no necesaria

MR-OU005-01
✔ seleccionada
✔ reducida
✔ realización mínima concreta cerrada

PE-MT-OU005-01
✘ input monolínea insuficiente

PE-MT-OU005-02
✘ mecanismo de edición más general no necesario

PE-MT-OU005-03
✘ autoexpansión no necesaria

MT-OU005-01
✔ seleccionada
✔ reducida
✔ mecanismo técnico mínimo cerrado

RED-MT-OU005-01
✔ escrito
✔ ejecutado
✔ fallo esperado confirmado

GREEN-MT-OU005-01
✔ confirmado en suite específica

suite específica tras GREEN
✔ 33 / 33

tests previos
✔ 32 / 32 continúan verdes

validación técnica global posterior
✔ cerrada

suite global posterior
✔ 26 / 26 archivos
✔ 236 / 236 tests

build posterior
✔ PASS
✔ 19 módulos transformados

git diff --check posterior
✔ PASS

CS-MT-OU005-01
✔ suficiencia humana establecida

MT-OU005-01
✔ cerrado por suficiencia dentro del alcance observado

examinar suficientemente
✔

localizar suficientemente
✔

rectificar suficientemente
✔

revisión completa deliberada
✔ posible con normalidad
✔ sin dificultad material

visibilidad simultánea de todo el texto
✘ no derivada como requisito mínimo

mayor superficie visible
→ mejora posible
→ no necesidad mínima demostrada

RU2M1-U02
✘ no derivada

responsabilidad realizativa nueva
✘ no necesaria

textarea
✔ seleccionado como mecanismo técnico mínimo
✔ materializado en S1
✔ humanamente suficiente

suficiencia humana de PC-OS-S1-01
✔ establecida dentro del alcance observado

Product
→ sin cambios

PV-005
→ no derivada
```

---

# 18. Cierre documental de esta investigación

La auditoría final de cierre no ha identificado ninguna cuestión necesaria
abierta derivada de la trayectoria investigada.

La cadena principal queda cerrada dentro del alcance observado:

```text
F-OU004-01
↓
PC-OS-S1-01
✔ cerrada por suficiencia

F-OU005-01
↓
PC-OU005-01
↓
DR-OU005-01
↓
MR-OU005-01
↓
MT-OU005-01
↓
<textarea>
↓
RED
↓
GREEN
↓
validación técnica global
↓
observación humana
↓
CS-MT-OU005-01
✔ cerrada por suficiencia
```

El resultado consolidado es:

```text
F-OU004-01
✔ resuelta dentro del alcance observado

PC-OS-S1-01
✔ cerrada por suficiencia

F-OU005-01
✔ resuelta dentro del alcance observado

PC-OU005-01
✔ cerrada como propiedad local necesaria

DR-OU005-01
✔ cerrada

MR-OU005-01
✔ cerrada

MT-OU005-01
✔ cerrada
✔ técnicamente materializada
✔ validada globalmente
✔ humanamente suficiente

RU2M1-U02
✘ no derivada

responsabilidad realizativa nueva
✘ no derivada

Product
→ sin cambios

PV-005
✘ no derivada

cuestión necesaria abierta
✘ ninguna identificada
```

Las siguientes diferencias permanecen fuera del mínimo demostrado:

```text
autoexpansión
✘ necesaria

dimensión concreta
✘ derivada como requisito

visibilidad simultánea de todo el texto
✘ derivada como requisito

mayor superficie visible
→ mejora posible
→ no necesidad mínima demostrada
```

La observación adicional sobre desconocer el propósito general de la página se
mantiene separada. No forma parte del cierre de esta investigación y no se abre
como fenómeno nuevo sin evidencia independiente.

Por tanto:

```text
26-investigacion-cobertura-orientacion-situacional-S1.md
✔ cerrada documentalmente dentro del alcance investigado
```

Este cierre no generaliza los resultados a cualquier persona, contenido,
situación o realización futura.
