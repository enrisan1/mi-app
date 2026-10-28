# Criterios de finalización de V1

## Estado

**Primer conjunto reducido de criterios observables necesarios para determinar cuándo las capacidades esenciales de V1 y V1 en su conjunto pueden considerarse suficientemente realizadas.**

Este documento deriva criterios de finalización a partir de:

```text
12-DELIMITACION_DE_V1.md
        ↓
13-MAPA_DE_CAPACIDADES_DE_V1.md
        ↓
14-MAPA_DE_DEPENDENCIAS_DE_V1.md
```

Su función consiste en establecer:

```text
qué deberá poder observarse
para considerar realizada
cada capacidad esencial

y

qué condiciones adicionales
deberán cumplirse
para considerar finalizada V1
como conjunto
```

No determina todavía:

- qué capacidades están ya realizadas;
- cuáles están parcialmente realizadas;
- cuáles están ausentes;
- qué huecos concretos existen;
- prioridades;
- orden de implementación;
- hitos;
- roadmap;
- arquitectura;
- mecanismos técnicos;
- componentes;
- pruebas técnicas concretas.

Por tanto:

```text
criterio de finalización
≠
mecanismo de implementación
```

y:

```text
condición observable
≠
prueba técnica concreta
```

---

# 1. Fundamento

`13-MAPA_DE_CAPACIDADES_DE_V1.md` estableció nueve capacidades esenciales:

```text
C-V1-01 Incorporar materia de trabajo

C-V1-02 Transformar mediante trabajo

C-V1-03 Constituir un resultado utilizable

C-V1-04 Recuperar el resultado alcanzado
         después de una interrupción

C-V1-05 Reanudar y continuar el trabajo

C-V1-06 Distinguir y relacionar
         materiales o resultados pertinentemente

C-V1-07 Reutilizar en otro contexto pertinente

C-V1-08 Preservar determinación humana efectiva
         cuando corresponda

C-V1-09 Preservar posibilidades pertinentes
         frente a cambios de la plataforma
```

`14-MAPA_DE_DEPENDENCIAS_DE_V1.md` estableció además tres dependencias funcionales directas irreducibles:

```text
C-V1-02
↓
C-V1-03
↓
C-V1-04
↓
C-V1-05
```

Los criterios de finalización deben permitir comprobar esas capacidades sin convertir sus mecanismos posibles en obligaciones prematuras.

---

# 2. Criterio general de inclusión

Un criterio de finalización se conserva únicamente cuando su ausencia permitiría afirmar que una capacidad está realizada aunque falte alguna condición necesaria de su definición.

Por tanto:

```text
criterio necesario
=
condición cuya ausencia
permite un falso positivo
de finalización
```

Durante la derivación se eliminaron:

- repeticiones de dependencias ya establecidas;
- condiciones de activación convertidas erróneamente en criterios autónomos;
- formulaciones negativas absorbidas por condiciones funcionales más fuertes;
- reglas de validación confundidas con capacidades;
- criterios globales redundantes.

El objetivo es obtener el conjunto mínimo suficiente para cerrar V1 sin inflarlo artificialmente.

---

# 3. Clases de condición utilizadas

El documento distingue cinco tipos de elemento.

## 3.1. Criterio observable propio

Condición que debe satisfacerse para considerar realizada una capacidad concreta.

Se identifica mediante:

```text
CF-V1-xx
```

o, cuando una capacidad necesita varios criterios irreducibles:

```text
CF-V1-xx.a
CF-V1-xx.b
...
```

---

## 3.2. Dependencia funcional

Condición ya establecida en `14-MAPA_DE_DEPENDENCIAS_DE_V1.md`.

No se duplica como criterio propio.

Por tanto:

```text
dependencia satisfecha
≠
criterio observable adicional
```

---

## 3.3. Condición de activación

Describe cuándo una capacidad transversal debe entrar en juego.

Se aplica especialmente a:

```text
C-V1-08
C-V1-09
```

La activación no constituye por sí sola un criterio independiente.

---

## 3.4. Regla de validación

Evita interpretar como satisfecho un criterio mediante una situación que sólo aparenta cumplirlo.

Por tanto:

```text
regla de validación
≠
capacidad nueva
```

---

## 3.5. Criterio global

Condición que no puede demostrarse mediante capacidades aisladas y que debe verificarse sobre V1 como realización integrada.

---

# 4. C-V1-01 — Incorporar materia de trabajo

## Criterio CF-V1-01

Existe al menos una situación en la que un elemento que no participaba en una actividad pasa a participar efectivamente en ella, pudiendo intervenir posteriormente en el trabajo.

La estructura observable es:

```text
no participa
↓
incorporación
↓
participa efectivamente
↓
puede intervenir en el trabajo
```

La mera presencia visual o técnica de un elemento no basta.

Por tanto:

```text
cargar
mostrar
seleccionar
o registrar
```

no demuestra necesariamente:

```text
incorporación funcional
```

---

# 5. C-V1-02 — Transformar mediante trabajo

## Criterio CF-V1-02

Existe al menos una situación en la que la intervención humana sobre materia de trabajo produce una diferencia significativa y observable respecto del estado anterior, atribuible a esa actividad de trabajo.

La estructura mínima es:

```text
estado M
↓
actividad humana pertinente
↓
estado diferente M'
```

Debe poder distinguirse:

```text
diferencia producida por el trabajo
```

de:

```text
cambio automático
ajeno a la intervención humana pertinente
```

El criterio no prescribe qué forma concreta adopta la transformación.

---

# 6. C-V1-03 — Constituir un resultado utilizable

C-V1-03 depende funcionalmente de C-V1-02.

La satisfacción de esa dependencia no se repite como criterio propio.

## Criterio CF-V1-03.a — Constitución reconocible

Puede reconocerse un estado `R` suficientemente constituido y distinguible del mero proceso de transformación que lo produjo.

Por tanto:

```text
transformación en curso
≠
resultado suficientemente constituido
```

No se exige:

```text
finalización explícita
estado cerrado
botón de terminar
objeto técnico Result
```

---

## Criterio CF-V1-03.b — Utilizabilidad posterior

El resultado `R` puede participar posteriormente en al menos otra actuación pertinente.

Por tanto:

```text
resultado observable
≠
resultado utilizable
```

si aquello constituido no puede volver a intervenir en una actuación posterior.

---

# 7. C-V1-04 — Recuperar el resultado alcanzado después de una interrupción

C-V1-04 depende funcionalmente de C-V1-03.

La existencia de `R` queda garantizada por esa dependencia y no se repite como criterio propio.

## Criterio CF-V1-04.a — Interrupción efectiva

Se produce una interrupción efectiva de la actividad.

La validación debe impedir confundir:

```text
continuidad inmediata
```

con:

```text
continuidad después de una interrupción
```

No se prescribe una duración universal de la interrupción.

Debe ser suficiente para que la recuperación posterior constituya una actuación genuinamente posterior.

---

## Criterio CF-V1-04.b — Recuperación reconocible

Después de la interrupción, el resultado alcanzado vuelve a estar efectivamente accesible y es suficientemente reconocible como el resultado existente antes de la interrupción.

La estructura mínima es:

```text
R
↓
interrupción
...
↓
recuperación
↓
R nuevamente accesible
y reconocible
```

No se exige todavía:

```text
identidad técnica universal
versionado
historial
mecanismo concreto de persistencia
```

---

# 8. C-V1-05 — Reanudar y continuar el trabajo

C-V1-05 depende funcionalmente de C-V1-04 y transitivamente de C-V1-03 y C-V1-02.

Estas dependencias no se duplican como criterios propios.

## Criterio CF-V1-05

Dado un resultado `R` recuperado, la persona puede volver a intervenir desde él y producir un resultado `R'` suficientemente reconocible como continuación del trabajo anterior.

La estructura observable es:

```text
R recuperado
↓
nueva intervención
↓
R'
```

donde:

```text
R'
```

debe guardar continuidad funcional suficiente con:

```text
R
```

Por tanto:

```text
R recuperado
+
actividad independiente
```

no demuestra necesariamente:

```text
reanudar y continuar
```

---

# 9. C-V1-06 — Distinguir y relacionar materiales o resultados pertinentemente

Esta capacidad conserva tres criterios irreducibles.

## Criterio CF-V1-06.a — Pluralidad distinguible

Existen al menos dos materiales o resultados suficientemente distinguibles.

La estructura mínima es:

```text
A ≠ B
```

No se exige un modelo general de identidad.

La distinción debe ser suficiente para que ambos puedan participar diferenciadamente en el trabajo.

---

## Criterio CF-V1-06.b — Relación pertinente

Puede establecerse entre al menos dos de esos elementos una relación pertinente.

La estructura mínima es:

```text
A
│
relación pertinente
│
B
```

Esta formulación no determina:

- dirección;
- simetría;
- cardinalidad;
- taxonomía;
- modelo de enlace;
- estructura de grafo;
- jerarquía.

---

## Criterio CF-V1-06.c — Participación funcional de la relación

La relación establecida participa efectivamente en alguna posibilidad pertinente de trabajo.

Por tanto:

```text
relación almacenada
o representada
```

no basta si no puede intervenir funcionalmente en la actividad.

La participación podrá manifestarse, entre otras formas posibles, mediante:

```text
comprender
seleccionar
comparar
transformar
interpretar
recuperar
reutilizar
```

sin que esta enumeración constituya una lista obligatoria.

---

# 10. C-V1-07 — Reutilizar en otro contexto pertinente

## Criterio CF-V1-07.a — Participación en otro contexto

Un mismo material o resultado que participa o ha participado en un contexto `A` puede volver a participar en un contexto `B` suficientemente distinto.

La estructura mínima es:

```text
contexto A
↓
elemento X

...

contexto B
↓
mismo elemento X
vuelve a participar
```

No se exige que el nuevo contexto corresponda necesariamente a:

```text
otro proyecto
otro usuario
otro workspace
otra sesión
```

La diferencia contextual debe ser funcionalmente suficiente, no ontológicamente predeterminada.

---

## Criterio CF-V1-07.b — Pertinencia de la reutilización

La participación del elemento en el contexto `B` es pertinente para la actividad desarrollada allí.

Por tanto:

```text
presencia en B
≠
reutilización pertinente
```

La mera copia o aparición accidental no satisface este criterio.

---

# 11. C-V1-08 — Preservar determinación humana efectiva cuando corresponda

C-V1-08 es una capacidad transversal de activación condicionada.

Su criterio incorpora directamente el supuesto de activación para evitar convertirlo en un criterio separado.

## Criterio CF-V1-08

En al menos una situación válida en la que concurran:

```text
decisión relevante
+
alternativas todavía disponibles
+
resolución correspondiente a la persona
```

la persona conserva una posibilidad efectiva de determinar esa resolución.

La capacidad queda demostrada únicamente si existe al menos un caso de validación en el que el supuesto se active efectivamente.

Por tanto:

```text
el supuesto no apareció
```

no constituye demostración suficiente de:

```text
capacidad para preservar
determinación humana efectiva
```

El criterio no exige universalmente:

```text
confirmaciones
avisos
diálogos
listas de alternativas
botones específicos
```

---

# 12. C-V1-09 — Preservar posibilidades pertinentes frente a cambios de la plataforma

C-V1-09 es también una capacidad transversal de activación condicionada.

## Criterio CF-V1-09

En al menos una situación válida en la que un cambio introducido por la plataforma afecta al trabajo y una posibilidad continúa siendo pertinente, esa posibilidad permanece suficientemente realizable en la situación resultante.

La estructura mínima es:

```text
situación S
↓
cambio introducido por la plataforma
↓
situación S'

posibilidad P pertinente en S
+
P sigue siendo pertinente en S'
↓
P permanece suficientemente realizable
```

La capacidad queda demostrada únicamente si existe al menos un caso de validación donde su supuesto se active efectivamente.

---

## Regla de validación RV-V1-09

La validación deberá distinguir:

```text
mera supervivencia física
del material o resultado
```

de:

```text
preservación suficiente
de la posibilidad pertinente
```

Por tanto:

```text
R permanece
```

no demuestra por sí solo:

```text
posibilidades pertinentes preservadas
```

Esta regla evita falsos positivos, pero no constituye una capacidad autónoma adicional.

---

# 13. Resultado reducido de criterios individuales

El conjunto mínimo derivado contiene catorce criterios observables:

```text
C-V1-01
└── CF-V1-01

C-V1-02
└── CF-V1-02

C-V1-03
├── CF-V1-03.a
└── CF-V1-03.b

C-V1-04
├── CF-V1-04.a
└── CF-V1-04.b

C-V1-05
└── CF-V1-05

C-V1-06
├── CF-V1-06.a
├── CF-V1-06.b
└── CF-V1-06.c

C-V1-07
├── CF-V1-07.a
└── CF-V1-07.b

C-V1-08
└── CF-V1-08

C-V1-09
└── CF-V1-09
```

Por tanto:

```text
9 capacidades esenciales
↓
14 criterios individuales mínimos
```

---

# 14. Elementos eliminados durante la reducción

La reducción no ha eliminado exigencias necesarias.

Ha reclasificado correctamente condiciones que no debían aparecer como criterios propios.

## 14.1. Dependencias absorbidas por el mapa de dependencias

No se conservan como criterios autónomos:

```text
existencia de transformación previa
para C-V1-03

existencia previa de R
para C-V1-04

existencia de R recuperado
para C-V1-05
```

porque ya están garantizadas mediante:

```text
C-V1-02
↓
C-V1-03
↓
C-V1-04
↓
C-V1-05
```

---

## 14.2. Condiciones de activación absorbidas

No se conservan como criterios separados:

```text
situación de decisión humana pertinente
```

ni:

```text
situación de cambio de plataforma
con posibilidad todavía pertinente
```

porque forman parte del antecedente de:

```text
CF-V1-08
CF-V1-09
```

---

## 14.3. Formulaciones negativas absorbidas

No se conserva como criterio autónomo:

```text
la plataforma no decide por sí sola
```

porque la condición funcional más fuerte es:

```text
la persona conserva
posibilidad efectiva
de determinar la resolución
```

---

## 14.4. Reglas de validación separadas

La distinción:

```text
resultado permanece
≠
posibilidad pertinente preservada
```

se conserva como regla de validación de C-V1-09, no como criterio funcional independiente.

---

# 15. Condición general de cobertura

La cobertura completa no constituye un criterio global autónomo adicional.

Funciona como condición general de cierre.

## CC-V1-00 — Cobertura completa

V1 no puede considerarse finalizada mientras permanezca insatisfecho alguno de los catorce criterios individuales derivados.

Por tanto:

```text
14 criterios individuales
↓
todos satisfechos
```

constituye una condición necesaria de finalización.

Para C-V1-08 y C-V1-09 esto exige validación positiva en al menos una situación donde sus respectivos supuestos se activen.

No es suficiente afirmar:

```text
no apareció el supuesto
```

para dar por demostrada la capacidad transversal.

---

# 16. Criterios globales candidatos

La derivación inicial produjo cinco criterios globales candidatos:

```text
CG inicial 1
Cobertura completa

CG inicial 2
Dependencias satisfechas

CG inicial 3
Trayectoria longitudinal integrada

CG inicial 4
Pluralidad contextual integrada

CG inicial 5
Compatibilidad transversal
```

Después de reducción:

```text
cobertura completa
→ reclasificada como CC-V1-00

dependencias satisfechas
→ absorbidas por integración longitudinal

trayectoria longitudinal integrada
→ sobrevive

pluralidad contextual integrada
→ redundante con criterios individuales

compatibilidad transversal
→ sobrevive
```

Por tanto:

```text
5 candidatos globales
↓
reducción
↓
2 criterios globales irreducibles
+
1 condición general de cobertura
```

---

# 17. CG-V1-01 — Integración longitudinal

Existe al menos una trayectoria observable y funcionalmente continua en la que:

```text
M
↓
incorporación
↓
transformación mediante trabajo
↓
R
↓
interrupción efectiva
↓
recuperación de ese R
↓
reanudación desde ese R
↓
R'
```

La trayectoria debe demostrar que:

```text
el R recuperado
corresponde funcionalmente
al R constituido antes de la interrupción
```

y que:

```text
el R desde el que se reanuda
corresponde funcionalmente
al R recuperado
```

sin exigir todavía una teoría universal de identidad técnica.

Este criterio demuestra conjuntamente:

```text
integración C-V1-01
+
C-V1-02
+
C-V1-03
+
C-V1-04
+
C-V1-05
```

y las dependencias directas:

```text
C-V1-02 → C-V1-03

C-V1-03 → C-V1-04

C-V1-04 → C-V1-05
```

Por tanto, no se mantiene un criterio global independiente de satisfacción de dependencias.

---

# 18. CG-V1-02 — Compatibilidad transversal

En toda situación utilizada para validar V1 en la que se active el supuesto de C-V1-08 o C-V1-09, la realización operativa deberá mantener satisfecha la condición transversal correspondiente.

Por tanto:

```text
si se activa C-V1-08
↓
debe preservarse
determinación humana efectiva
```

y:

```text
si se activa C-V1-09
↓
deben preservarse suficientemente
las posibilidades todavía pertinentes
```

El criterio no exige que todos los supuestos transversales aparezcan en toda trayectoria.

Por tanto:

```text
no activación en una situación concreta
≠
incumplimiento
```

pero:

```text
activación
+
violación
=
incompatibilidad con finalización de V1
```

---

# 19. Ausencia de criterio global adicional para pluralidad contextual

No se deriva un criterio global autónomo que obligue a integrar C-V1-06 y C-V1-07 dentro de una única trayectoria.

La dimensión de pluralidad contextual queda suficientemente comprobada mediante:

```text
CF-V1-06.a
pluralidad distinguible

CF-V1-06.b
relación pertinente

CF-V1-06.c
participación funcional de la relación

CF-V1-07.a
reutilización en otro contexto

CF-V1-07.b
pertinencia de la reutilización
```

Exigir adicionalmente:

```text
que el mismo elemento relacionado
sea necesariamente el reutilizado
```

o:

```text
que relación y reutilización
ocurran dentro de una única trayectoria
```

introduciría una exigencia no derivada del alcance actual.

Por tanto:

```text
pluralidad contextual completa
=
criterios propios satisfechos
```

sin requisito global adicional.

---

# 20. Ausencia de criterio global independiente de dependencias

Las únicas dependencias funcionales internas derivadas forman la cadena:

```text
C-V1-02
↓
C-V1-03
↓
C-V1-04
↓
C-V1-05
```

CG-V1-01 exige precisamente una trayectoria funcionalmente continua donde:

```text
transformación
↓
resultado
↓
recuperación
↓
continuación
```

participen de la misma continuidad.

Por tanto:

```text
dependencias satisfechas
```

queda demostrado mediante:

```text
CG-V1-01
```

y no constituye un criterio global adicional.

---

# 21. Reglas generales de validación

Los criterios de finalización deben aplicarse evitando falsos positivos.

## RV-V1-01 — Observabilidad funcional

No basta la mera existencia técnica de una estructura.

Debe existir comportamiento observable suficiente para afirmar que la capacidad participa efectivamente en la actividad.

---

## RV-V1-02 — No prescripción técnica

La validación de un criterio no podrá exigir un mecanismo técnico concreto salvo que ese mecanismo haya sido derivado independientemente como necesario.

Por tanto:

```text
criterio funcional
⇏
tecnología concreta
```

---

## RV-V1-03 — No sustitución por apariencia

No deberá considerarse satisfecho un criterio mediante una situación que sólo reproduce externamente su apariencia pero pierde la condición funcional relevante.

Ejemplos:

```text
mostrar un elemento
≠
incorporarlo funcionalmente

mostrar un resultado anterior
≠
recuperarlo suficientemente

abrir R
≠
reanudar desde R

guardar una relación
≠
hacerla participar en el trabajo

conservar R
≠
preservar toda posibilidad pertinente
```

---

## RV-V1-04 — Independencia de implementación

Dos criterios distintos podrán ser realizados técnicamente mediante el mismo mecanismo sin dejar por ello de constituir criterios funcionalmente diferentes.

Por tanto:

```text
mecanismo compartido
≠
criterios reducibles
```

---

# 22. Estructura completa de finalización

La estructura resultante queda:

```text
NIVEL 1
14 criterios individuales
        ↓

NIVEL 2
CC-V1-00
cobertura completa
        ↓

NIVEL 3
CG-V1-01
integración longitudinal
        +
CG-V1-02
compatibilidad transversal
        ↓

FINALIZACIÓN DE V1
```

No deben sumarse mecánicamente como si todos fueran criterios equivalentes.

La estructura distingue:

```text
criterios de capacidad
+
condición general de cobertura
+
criterios globales de integración
```

---

# 23. Condición de finalización de una capacidad individual

Una capacidad `C-V1-x` puede considerarse suficientemente realizada cuando:

```text
sus criterios propios están satisfechos
+
sus dependencias funcionales,
si existen,
están satisfechas
+
las reglas de validación aplicables
no muestran un falso positivo
```

Por tanto:

```text
criterio individual cumplido
≠
automáticamente capacidad finalizada
```

cuando la capacidad depende funcionalmente de otra todavía no satisfecha.

---

# 24. Condición de finalización de V1

V1 podrá considerarse suficientemente realizada cuando concurran simultáneamente las siguientes condiciones:

```text
1. se satisfacen los catorce criterios individuales;

2. se satisfacen las dependencias funcionales
   establecidas en el mapa de dependencias;

3. existe al menos una trayectoria longitudinal
   completa y funcionalmente continua
   conforme a CG-V1-01;

4. la pluralidad contextual queda realizada
   mediante los criterios propios de
   C-V1-06 y C-V1-07;

5. C-V1-08 y C-V1-09 han sido
   positivamente demostradas
   en situaciones donde sus supuestos
   se activan;

6. toda situación de validación en la que
   se active una condición transversal
   permanece compatible con CG-V1-02.
```

De forma reducida:

```text
criterios individuales satisfechos
+
dependencias satisfechas
+
integración longitudinal
+
pluralidad contextual realizada
+
capacidades transversales demostradas
+
compatibilidad transversal
=
V1 suficientemente realizada
```

---

# 25. Formulación compacta de cierre

La condición de finalización de V1 puede expresarse así:

> **V1 podrá considerarse suficientemente realizada cuando se satisfagan los catorce criterios observables mínimos correspondientes a sus nueve capacidades esenciales; sus dependencias funcionales estén satisfechas; exista al menos una trayectoria longitudinal funcionalmente continua que integre incorporación, transformación, constitución de resultado, interrupción, recuperación y continuación; la pluralidad contextual quede efectivamente realizada mediante relación y reutilización pertinentes; y las realizaciones utilizadas para validar V1 preserven la determinación humana efectiva y la continuidad suficiente de posibilidades pertinentes siempre que sus respectivos supuestos se activen.**

---

# 26. Lo que estos criterios no determinan

Los criterios de finalización no determinan todavía:

```text
qué capacidades ya existen
en el producto actual

qué capacidades están
parcialmente realizadas

qué capacidades están ausentes

qué código debe modificarse

qué componente debe construirse

qué arquitectura utilizar

qué mecanismo de persistencia elegir

qué orden de implementación seguir
```

Tampoco obligan a convertir cada criterio en:

```text
un test unitario
```

ni:

```text
un componente
```

ni:

```text
una historia de usuario
```

La futura evidencia de satisfacción podrá adoptar formas distintas siempre que sea suficiente y reproducible.

---

# 27. Condición de estabilidad de los criterios

El conjunto de criterios se considera estable dentro del alcance actual mientras no aparezca evidencia que demuestre que:

```text
un criterio puede eliminarse
sin permitir falsos positivos;

un criterio combina dos exigencias
realmente independientes;

una capacidad carece de
alguna condición observable necesaria;

una regla de validación
debe convertirse en criterio funcional;

una dependencia nueva modifica
la condición de finalización;

o el alcance de V1 cambia.
```

Cualquiera de estas situaciones obligará a revisar este documento antes de utilizarlo como fundamento definitivo de planificación.

---

# 28. Estado resultante

El proyecto dispone ahora de:

```text
PLATFORM_VISION
        ↓
DELIMITACIÓN DE V1
        ↓
MAPA DE CAPACIDADES
        ↓
MAPA DE DEPENDENCIAS
        ↓
CRITERIOS DE FINALIZACIÓN
```

El resultado actual es:

```text
9 capacidades esenciales

14 criterios individuales mínimos

1 condición general de cobertura

2 criterios globales irreducibles

reglas de validación
para impedir falsos positivos
```

---

# 29. Próxima actuación derivada

Una vez establecidos:

```text
alcance
+
capacidades
+
dependencias
+
criterios de finalización
```

la siguiente fase de la estrategia consiste en determinar el **estado actual de V1** respecto de esos criterios.

La pregunta deja de ser:

```text
¿qué debería proporcionar V1?
```

y pasa a ser:

```text
¿qué parte de lo exigido
por V1 está ya suficientemente realizada,
qué parte lo está sólo parcialmente
y qué parte permanece ausente?
```

Ese análisis deberá utilizar los criterios de este documento como referencia y no la mera existencia de código, documentos o experimentos.

Por tanto:

```text
artefacto existente
≠
capacidad necesariamente realizada
```

y:

```text
test existente
≠
criterio necesariamente satisfecho
```

---

# 30. Punto de reanudación

La siguiente pregunta del proyecto pasa a ser:

> **¿Cuál es el estado actual de cada uno de los catorce criterios de finalización de V1 —satisfecho, parcialmente satisfecho o no satisfecho— y qué evidencia disponible justifica cada clasificación?**

La respuesta deberá producir el primer diagnóstico sistemático del estado actual de V1 y permitir derivar posteriormente los huecos reales existentes.

---
