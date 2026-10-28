# Mapa de capacidades de V1

## Estado

**Primer mapa reducido de capacidades esenciales necesarias para realizar el alcance definido en `12-DELIMITACION_DE_V1.md`.**

Este documento identifica y organiza las capacidades independientes que V1 deberá proporcionar para realizar completamente:

```text
núcleo longitudinal
+
pluralidad contextual
+
condiciones transversales
```

No define todavía:

- dependencias entre capacidades;
- criterios completos de finalización;
- prioridades;
- hitos;
- roadmap;
- arquitectura;
- implementación;
- mecanismos técnicos concretos.

Su función consiste únicamente en establecer qué capacidades deben existir dentro de V1 antes de determinar cómo se relacionan entre sí o cómo deberán realizarse técnicamente.

---

# 1. Fundamento

`12-DELIMITACION_DE_V1.md` estableció que V1 deberá realizar:

```text
1. una trayectoria longitudinal completa;

2. una dimensión mínima de pluralidad contextual;

3. determinación humana efectiva cuando corresponda;

4. continuidad suficiente de posibilidades pertinentes
   cuando corresponda.
```

La trayectoria longitudinal quedó expresada como:

```text
M
↓
INCORPORAR
↓
TRABAJAR / TRANSFORMAR
↓
R
↓
INTERRUPCIÓN
↓
RECUPERAR R
↓
CONTINUAR DESDE R
↓
R'
```

La pluralidad contextual quedó expresada como:

```text
varios materiales o resultados
↓
distinción suficiente
↓
relación pertinente
↓
participación en el trabajo
↓
reutilización en otro contexto
```

A partir de estas exigencias se realizó una derivación inicial de capacidades y posteriormente una reducción por pares y una reducción individual.

El resultado de esa reducción constituye el mapa definido en este documento.

---

# 2. Criterio de inclusión

Una capacidad forma parte del mapa de V1 únicamente cuando su eliminación impide satisfacer completamente alguna parte del alcance establecido en `12-DELIMITACION_DE_V1.md`.

Por tanto:

```text
capacidad esencial
=
capacidad cuya ausencia
impide realizar completamente V1
```

La inclusión no depende de:

```text
frecuencia habitual en otros productos
conveniencia técnica
facilidad de implementación
popularidad
sofisticación
o posibilidad de construirla
```

---

# 3. Estructura general del mapa

Las capacidades esenciales quedan organizadas en tres familias:

```text
V1
│
├── MC-1 Continuidad longitudinal del trabajo
│
├── MC-2 Pluralidad contextual
│
└── MC-3 Condiciones transversales
```

Estas familias tienen función descriptiva y organizativa.

No constituyen todavía módulos, capas, servicios, agregados, componentes ni unidades arquitectónicas.

---

# 4. MC-1 — Continuidad longitudinal del trabajo

Esta familia contiene las capacidades necesarias para que una persona pueda comenzar una actividad, producir un resultado, interrumpirla y continuar posteriormente desde el estado alcanzado.

Comprende cinco capacidades esenciales:

```text
C-V1-01 Incorporar materia de trabajo

C-V1-02 Transformar mediante trabajo

C-V1-03 Constituir un resultado utilizable

C-V1-04 Recuperar el resultado alcanzado
         después de una interrupción

C-V1-05 Reanudar y continuar el trabajo
```

---

# 5. C-V1-01 — Incorporar materia de trabajo

## Definición

El producto deberá permitir que algo que todavía no participa en una actividad pase a participar efectivamente en ella.

La estructura funcional mínima es:

```text
no participa
↓
incorporación
↓
participa en el trabajo
```

## Alcance

Esta capacidad no determina si la incorporación se realiza mediante:

```text
creación
importación
selección
referencia
enlace
copia
carga
u otro mecanismo
```

Tampoco determina la naturaleza del elemento incorporado.

## Razón de esencialidad

Si se elimina esta capacidad, V1 sólo podría operar sobre elementos que ya se encontraran previamente dentro del sistema.

Desaparecería la condición que permite iniciar la trayectoria definida en `12-DELIMITACION_DE_V1.md`.

Por tanto:

```text
sin incorporación
↓
no puede comenzar
la trayectoria de V1
```

---

# 6. C-V1-02 — Transformar mediante trabajo

## Definición

El producto deberá permitir que la actividad humana produzca una diferencia significativa respecto del material que participa en el trabajo.

La estructura mínima es:

```text
M
↓
actividad humana
↓
estado diferente
```

## Alcance

La transformación podrá realizarse mediante formas de intervención distintas según la situación.

Podrá incluir, sin que esta enumeración constituya una lista obligatoria:

```text
modificar
anotar
seleccionar
reducir
relacionar
combinar
interpretar
derivar
producir nuevo material
```

## Razón de esencialidad

Si esta capacidad desaparece, V1 podría quedar reducida a:

```text
incorporar
+
almacenar
+
recuperar
```

sin que la actividad humana produzca una diferencia atribuible al trabajo.

Por tanto:

```text
incorporación
≠
trabajo transformador
```

y la capacidad no puede ser absorbida por C-V1-01.

---

# 7. C-V1-03 — Constituir un resultado utilizable

## Definición

El producto deberá permitir que la actividad alcance un estado suficientemente constituido para participar posteriormente en otras actuaciones.

Ese estado se denomina operacionalmente:

```text
R
```

## Alcance

La capacidad no exige:

```text
una operación explícita de finalización
un objeto técnico denominado Result
un estado cerrado
un botón específico
```

Sí exige que pueda distinguirse suficientemente aquello que ha quedado constituido mediante el trabajo.

## Razón de esencialidad

La transformación continua no garantiza por sí sola que exista un estado utilizable posteriormente.

Sin esta capacidad podría existir:

```text
M
→ M1
→ M2
→ M3
→ ...
```

sin que pueda determinarse suficientemente:

```text
qué recuperar
qué continuar
qué reutilizar
```

Por tanto:

```text
transformar
≠
constituir resultado utilizable
```

---

# 8. C-V1-04 — Recuperar el resultado alcanzado después de una interrupción

## Definición

El producto deberá permitir que, después de una interrupción efectiva de la actividad, la persona vuelva a acceder al resultado alcanzado y pueda reconocer suficientemente qué está recuperando.

La estructura mínima es:

```text
R
↓
interrupción
...
recuperación
↓
R accesible nuevamente
```

## Alcance

Esta capacidad incorpora funcionalmente dos exigencias:

```text
continuidad temporal suficiente
+
acceso efectivo posterior
```

No establece qué mecanismo hace posible esa continuidad.

No presupone:

```text
localStorage
base de datos
archivo
servidor
backend
sincronización
```

Tampoco implica una capacidad general de recuperar estados históricos.

Por tanto:

```text
recuperar R tras una interrupción
≠
recuperar cualquier estado anterior
```

## Razón de esencialidad

Si esta capacidad desaparece, toda la trayectoria podría realizarse dentro de una única interacción continua.

Se perdería la diferencia entre:

```text
continuidad inmediata
```

y:

```text
continuidad temporal efectiva
```

La persistencia técnica aislada tampoco sería suficiente si la persona no pudiera recuperar efectivamente el resultado alcanzado.

---

# 9. C-V1-05 — Reanudar y continuar el trabajo

## Definición

Después de recuperar el resultado alcanzado, la persona deberá poder volver a intervenir desde él y producir una nueva diferencia.

La estructura mínima es:

```text
R
↓
recuperación
↓
nueva actividad
↓
R'
```

## Alcance

Esta capacidad no se satisface únicamente mediante:

```text
consultar
leer
visualizar
```

Lo relevante es que el resultado recuperado pueda volver a participar activamente en el trabajo.

## Razón de esencialidad

Sin esta capacidad, V1 podría convertirse en:

```text
producción
+
archivo
+
consulta posterior
```

La recuperación seguiría existiendo, pero no la continuidad efectiva de la actividad.

Por tanto:

```text
recuperar
≠
reanudar
```

---

# 10. MC-2 — Pluralidad contextual

Esta familia contiene las capacidades mínimas necesarias para impedir que V1 pueda satisfacerse mediante un único objeto aislado que evoluciona únicamente a través del tiempo.

Comprende dos capacidades esenciales:

```text
C-V1-06 Distinguir y relacionar
         materiales o resultados pertinentemente

C-V1-07 Reutilizar un material o resultado
         en otro contexto pertinente
```

---

# 11. C-V1-06 — Distinguir y relacionar materiales o resultados pertinentemente

## Definición

El producto deberá permitir que varios materiales o resultados sean suficientemente distinguibles y que pueda establecerse entre al menos algunos de ellos una relación pertinente capaz de participar en el trabajo.

La estructura mínima es:

```text
A ≠ B

A
│
relación pertinente
│
B
```

Esta representación no determina dirección, simetría, cardinalidad ni naturaleza conceptual de la relación.

## Alcance

La capacidad no determina:

```text
modelo de relación
tipo universal de enlace
identidad técnica
grafo
taxonomía
jerarquía
workspace
carpeta
```

Tampoco exige un sistema general de organización.

La distinción necesaria es únicamente la suficiente para que los elementos puedan participar pertinentemente en la actividad y en sus relaciones.

## Razón de esencialidad

La reutilización de un resultado en otro contexto no garantiza por sí sola que V1 permita relacionar varios materiales.

Sin esta capacidad sería posible satisfacer el resto del mapa mediante elementos independientes utilizados sucesivamente.

Desaparecería la dimensión relacional mínima establecida en `12-DELIMITACION_DE_V1.md`.

---

# 12. C-V1-07 — Reutilizar en otro contexto pertinente

## Definición

El producto deberá permitir que un material o resultado previamente constituido vuelva a participar pertinentemente en otro contexto de trabajo.

La estructura mínima es:

```text
contexto A
↓
R constituido

...

contexto B
↓
R participa nuevamente
```

## Alcance

El nuevo contexto podrá pertenecer o no a una actividad distinta.

La capacidad no determina si la reutilización se realiza mediante:

```text
referencia
enlace
copia
composición
inclusión
otra forma
```

## Razón de esencialidad

Una relación entre materiales dentro de un mismo contexto no demuestra que aquello ya producido pueda participar posteriormente en otro.

Por tanto:

```text
relacionar
≠
reutilizar
```

La eliminación de esta capacidad reduciría la pluralidad contextual a una pluralidad exclusivamente local.

---

# 13. MC-3 — Condiciones transversales

Estas condiciones derivan de compromisos vigentes de Product.

El presente mapa no redefine esos compromisos ni modifica su alcance normativo.

Identifica únicamente la capacidad que V1 deberá tener para poder satisfacerlos cuando sus respectivos supuestos se activen.

Esta familia contiene capacidades esenciales cuyo supuesto de activación no tiene por qué aparecer en todas las trayectorias.

Su carácter condicionado no las convierte en opcionales.

Comprende:

```text
C-V1-08 Preservar determinación humana efectiva
         cuando corresponda

C-V1-09 Preservar posibilidades pertinentes
         frente a cambios introducidos por la plataforma
```

---

# 14. C-V1-08 — Preservar determinación humana efectiva cuando corresponda

## Definición

Cuando dentro de una trayectoria aparezca una decisión relevante, existan alternativas todavía disponibles y la resolución corresponda a la persona, el producto deberá poder preservar la posibilidad efectiva de que sea ella quien determine esa resolución.

La condición puede expresarse como:

```text
decisión relevante
+
alternativas disponibles
+
resolución correspondiente a la persona
↓
determinación humana efectiva
```

## Alcance

Esta capacidad no exige universalmente:

```text
preguntar
confirmar
mostrar alternativas
mostrar avisos
presentar diálogos
```

Tampoco determina qué decisiones pertenecen a la persona en todos los contextos.

Su activación depende de la situación concreta.

## Razón de esencialidad

Si esta capacidad se elimina, una trayectoria podría satisfacer todas las demás capacidades mientras la plataforma resuelve automáticamente una decisión pertinente cuya determinación corresponde a la persona.

Eso sería incompatible con los compromisos de Product vigentes.

Por tanto:

```text
activación condicionada
≠
capacidad opcional
```

---

# 15. C-V1-09 — Preservar posibilidades pertinentes frente a cambios de la plataforma

## Definición

Cuando la plataforma introduzca un cambio que afecte al trabajo, deberá poder preservar suficientemente las posibilidades que continúen siendo pertinentes en la situación resultante.

La estructura general es:

```text
situación S
↓
cambio introducido por la plataforma
↓
situación S'

posibilidades todavía pertinentes
→ suficientemente preservadas
```

## Alcance

La capacidad no exige:

```text
conservar literalmente todo
mantener siempre todos los estados
versionar universalmente
guardar todo el historial
preservar toda representación anterior
```

Según la situación, podrá requerir conservar o transformar suficientemente aquello necesario para:

```text
comprender
relacionar
reutilizar
continuar
comparar
revisar
justificar
u otra posibilidad pertinente
```

## Razón de esencialidad

Sin esta capacidad podría mantenerse físicamente un resultado y, sin embargo, perderse alguna posibilidad necesaria para seguir trabajando pertinentemente con él.

Por ejemplo:

```text
R permanece
+
relación pertinente desaparece
```

o:

```text
R permanece
+
se pierde información necesaria
para una posibilidad todavía pertinente
```

Las demás capacidades del mapa no impiden por sí solas esta pérdida.

---

# 16. Resultado de la reducción

La derivación inicial produjo once capacidades candidatas.

La reducción por pares permitió absorber:

```text
mantener estado recuperable
+
recuperar estado
↓
recuperar el resultado alcanzado después de una interrupción
```

y:

```text
mantener pluralidad distinguible
+
establecer relaciones
↓
distinguir y relacionar pertinentemente
```

El mapa quedó reducido a nueve capacidades.

Posteriormente, cada una de esas nueve capacidades fue eliminada individualmente de forma hipotética.

En todos los casos, la eliminación produjo una pérdida que impedía satisfacer completamente `12-DELIMITACION_DE_V1.md`.

Por tanto:

```text
11 capacidades candidatas
↓
reducción por pares
↓
9 capacidades
↓
prueba individual de eliminación
↓
9 capacidades supervivientes
```

---

# 17. Clasificación resultante

Las nueve capacidades no tienen exactamente el mismo modo de activación.

## 17.1. Capacidades operativas esenciales

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
```

Estas capacidades deben poder realizarse efectivamente para completar la trayectoria y la pluralidad contextual definidas para V1.

---

## 17.2. Capacidades transversales esenciales de activación condicionada

```text
C-V1-08 Preservar determinación humana efectiva
         cuando corresponda

C-V1-09 Preservar posibilidades pertinentes
         frente a cambios de la plataforma
```

Su supuesto puede no aparecer en todas las situaciones.

Sin embargo, cuando aparece:

```text
el producto debe ser capaz
de satisfacer la condición
```

Por tanto:

```text
condicionada
≠
opcional
```

---

# 18. Mapa reducido de capacidades de V1

El mapa resultante queda:

```text
V1
│
├── MC-1 CONTINUIDAD LONGITUDINAL
│   │
│   ├── C-V1-01 Incorporar materia de trabajo
│   │
│   ├── C-V1-02 Transformar mediante trabajo
│   │
│   ├── C-V1-03 Constituir un resultado utilizable
│   │
│   ├── C-V1-04 Recuperar el resultado alcanzado
│   │            después de una interrupción
│   │
│   └── C-V1-05 Reanudar y continuar el trabajo
│
├── MC-2 PLURALIDAD CONTEXTUAL
│   │
│   ├── C-V1-06 Distinguir y relacionar
│   │            materiales o resultados pertinentemente
│   │
│   └── C-V1-07 Reutilizar
│                en otro contexto pertinente
│
└── MC-3 CONDICIONES TRANSVERSALES
    │
    ├── C-V1-08 Preservar determinación humana efectiva
    │            cuando corresponda
    │
    └── C-V1-09 Preservar posibilidades pertinentes
                 frente a cambios de la plataforma
```

---

# 19. Frontera conceptual

Las expresiones utilizadas en este mapa tienen función funcional y operacional.

En particular:

```text
material
resultado
estado
contexto
relación
```

no determinan por sí mismas:

```text
entidades fundamentales
agregados de dominio
identidades persistentes
modelos de datos
estructuras técnicas
```

El mapa expresa:

```text
qué debe poder hacer el producto
```

no:

```text
qué entidades debe contener
```

---

# 20. Frontera técnica

Este mapa no autoriza todavía a derivar directamente:

```text
componentes React
hooks
stores
repositorios
base de datos
API
backend
modelo de archivos
modelo de relaciones
servicios
clases
interfaces
```

Tampoco determina todavía cómo deberá realizarse la continuidad necesaria para C-V1-04.

Por tanto:

```text
capacidad
≠
solución técnica
```

---

# 21. Elementos deliberadamente no derivados

El mapa no contiene como capacidades esenciales autónomas:

```text
autenticación
usuarios
roles
permisos
colaboración multiusuario
publicación
difusión
versionado general
historial general
trazabilidad universal
defendibilidad universal
búsqueda global
taxonomías
carpetas
workspaces
sincronización
exportación
IA
```

Su ausencia del mapa no implica rechazo.

Significa únicamente que **no han sido derivados como capacidades esenciales autónomas para el alcance actual de V1**.

Podrán incorporarse posteriormente si:

```text
constituyen una dependencia necesaria
de una capacidad esencial

o

nueva evidencia demuestra que
el mapa actual es insuficiente.
```

---

# 22. Condición de estabilidad del mapa

El mapa se considera estable dentro de su alcance mientras no aparezca evidencia que demuestre que:

```text
una capacidad incluida puede eliminarse
sin pérdida funcional relevante;

una capacidad necesaria está ausente;

dos capacidades aparentemente independientes
son realmente reducibles;

o una capacidad requiere otra
que todavía no ha sido identificada.
```

La última posibilidad corresponde precisamente a la fase siguiente de trabajo: análisis de dependencias.

---

# 23. Estado resultante

El proyecto dispone ahora de:

```text
PLATFORM_VISION
        ↓
DELIMITACIÓN DE V1
        ↓
MAPA DE CAPACIDADES DE V1
```

El mapa contiene:

```text
7 capacidades operativas esenciales
+
2 capacidades transversales esenciales
  de activación condicionada
=
9 capacidades esenciales
```

Todavía no se ha determinado:

```text
qué capacidad depende de cuál;
qué criterios concretos permiten
considerar cada capacidad completada;
qué capacidades se encuentran ya realizadas,
parcialmente realizadas o ausentes;
qué huecos existen;
qué orden de construcción resulta justificable.
```

---

# 24. Próxima actuación derivada

La siguiente actuación consiste en determinar las **dependencias entre las capacidades de V1**.

El análisis deberá responder, para cada capacidad:

```text
¿puede existir independientemente?

¿qué capacidades necesita previamente?

¿qué capacidades desbloquea?

¿existen dependencias estrictas?

¿existen únicamente relaciones de conveniencia?

¿aparece alguna capacidad nueva
como dependencia necesaria?
```

La derivación deberá mantener separadas:

```text
dependencia funcional necesaria
≠
orden de implementación conveniente
```

y:

```text
dependencia
≠
preferencia arquitectónica
```

---

# 25. Punto de reanudación

La siguiente pregunta del proyecto pasa a ser:

> **¿Qué dependencias funcionales necesarias existen entre las nueve capacidades esenciales de V1?**

La respuesta deberá producir el primer mapa de dependencias de V1 sin anticipar todavía prioridades, arquitectura ni roadmap.

---
