# Delimitación de V1

## Estado

**Delimitación estratégica de la primera versión suficientemente completa del producto.**

Este documento define qué alcance deberá realizarse para que el proyecto pueda disponer de una primera versión estratégicamente completa —V1— dentro de la visión establecida en `01-PLATFORM_VISION.md`.

No define todavía:

- el mapa completo de capacidades;
- sus dependencias;
- la arquitectura;
- la implementación;
- el roadmap;
- ni los mecanismos técnicos concretos mediante los cuales deberá realizarse V1.

Su función consiste únicamente en fijar un alcance suficientemente preciso para que esas derivaciones posteriores puedan realizarse sin arbitrariedad.

---

# 1. Fundamento

`01-PLATFORM_VISION.md` establece una visión estratégica de largo plazo que incluye, entre otras posibilidades:

- incorporación y creación;
- organización y recuperación;
- enriquecimiento;
- relaciones;
- reutilización;
- evolución;
- evaluación crítica;
- colaboración;
- publicación;
- preservación;
- continuidad.

La existencia de estas capacidades en la visión no implica que todas deban quedar realizadas en una primera versión.

Por tanto:

```text
PLATFORM_VISION
≠
alcance obligatorio de V1
```

La función de V1 consiste en constituir una primera realización suficientemente completa y coherente de esa visión, sin intentar agotarla.

---

# 2. Criterio general de delimitación

V1 deberá satisfacer simultáneamente dos condiciones.

## 2.1. Completitud longitudinal

Debe existir al menos una trayectoria humana que pueda recorrerse de principio a fin y que no dependa de mantener una única interacción continua.

La persona deberá poder:

```text
incorporar
↓
trabajar
↓
obtener un resultado utilizable
↓
interrumpir la actividad
↓
recuperar posteriormente el resultado
↓
continuar trabajando desde él
```

Por tanto, V1 no podrá reducirse a:

```text
demostraciones aisladas
funcionalidades independientes
experimentos desconectados
o una sesión efímera de trabajo
```

---

## 2.2. Representatividad mínima de la visión

La trayectoria longitudinal no será suficiente si todo el producto puede reducirse a:

```text
una persona
+
un único material
+
una única cadena temporal
```

V1 deberá realizar además una dimensión mínima de pluralidad contextual que demuestre que los materiales y resultados pueden participar en un trabajo relacionado y reutilizable.

---

# 3. Núcleo longitudinal de V1

La trayectoria mínima obligatoria de V1 será:

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

donde:

```text
M
=
material que pasa a participar efectivamente
en una actividad de trabajo
```

```text
R
=
resultado utilizable alcanzado mediante
la actividad realizada sobre el material
```

```text
R'
=
estado posterior producido al reanudar
la actividad desde R
```

Las expresiones `M`, `R`, `R'`, `material`, `resultado` y `contexto` utilizadas en esta delimitación tienen únicamente función operacional.

No establecen entidades fundamentales del dominio, identidades técnicas, estructuras persistentes ni un modelo conceptual obligatorio.

Su eventual formalización deberá derivarse posteriormente en el cuerpo competente.

---

# 4. Incorporación

V1 deberá permitir que algo que inicialmente no participa en una actividad pase a formar parte efectiva de ella.

Esta exigencia no determina si la incorporación se realizará mediante:

```text
creación
importación
selección
enlace
referencia
copia
u otro mecanismo
```

La estructura necesaria es únicamente:

```text
elemento que todavía no participa
en la actividad
↓
participación efectiva en el trabajo
```

---

# 5. Trabajo y transformación

V1 deberá permitir que la actividad humana produzca una diferencia significativa respecto del material incorporado.

Esta diferencia podrá consistir, según la situación, en operaciones como:

```text
modificar
anotar
seleccionar
reducir
relacionar
combinar
interpretar
derivar
o producir nuevo material
```

La enumeración anterior no constituye una lista obligatoria de funcionalidades de V1.

La exigencia mínima es:

```text
M
↓
actividad humana
↓
estado diferente atribuible al trabajo
```

Sin esta diferencia, V1 podría quedar reducida a almacenamiento o consulta de materiales.

---

# 6. Resultado utilizable

La actividad deberá poder alcanzar un estado que pueda reconocerse como resultado utilizable.

No se exige:

```text
una operación explícita de finalización
un objeto técnico denominado Result
un estado cerrado
o un botón de terminación
```

Sí se exige que pueda distinguirse suficientemente qué ha quedado constituido mediante el trabajo para que dicho resultado pueda participar posteriormente en otras actuaciones.

Por tanto:

```text
resultado
=
estado utilizable alcanzado mediante el trabajo
```

---

# 7. Interrupción real

La continuidad de V1 no deberá demostrarse únicamente dentro de una interacción ininterrumpida.

La trayectoria deberá contener una discontinuidad efectiva entre la producción y la recuperación del resultado:

```text
actividad A
↓
R
↓
interrupción
...
actividad posterior
↓
recuperación de R
```

La forma concreta de esa interrupción no se determina en este documento.

Su función consiste en impedir que:

```text
continuidad dentro de una misma sesión
```

sea confundida con:

```text
continuidad temporal efectiva del trabajo
```

---

# 8. Recuperación

Después de la interrupción, la persona deberá poder volver a acceder al resultado pertinente.

La recuperación deberá ser suficiente para que la persona pueda reconocer qué recupera y volver a situarse en la actividad.

No se exige todavía un sistema general de:

```text
búsqueda
indexación
clasificación
carpetas
catálogos
o navegación avanzada
```

pero V1 no podrá depender exclusivamente de que el resultado permanezca accidentalmente visible en el estado inmediato de la interfaz.

---

# 9. Continuación

La recuperación no bastará si el resultado sólo puede ser consultado.

La persona deberá poder volver a intervenir desde el estado recuperado y producir una nueva diferencia:

```text
R
↓
recuperación
↓
nueva actividad
↓
R'
```

Por tanto:

```text
recuperar para consultar
≠
recuperar para continuar
```

La capacidad de continuar desde un estado previamente alcanzado constituye una condición necesaria de V1.

---

# 10. Dimensión mínima adicional: pluralidad contextual

Además del núcleo longitudinal, V1 deberá realizar una dimensión mínima de pluralidad contextual.

La existencia de esta dimensión impide que V1 pueda satisfacerse mediante un único objeto aislado.

Deberá existir al menos una situación en la que:

```text
existan varios materiales o resultados
↓
puedan distinguirse suficientemente
↓
exista al menos una relación pertinente entre ellos
↓
esa relación pueda participar en el trabajo
↓
al menos uno pueda reutilizarse posteriormente
en otro contexto pertinente
```

---

# 11. Alcance mínimo de la pluralidad contextual

La pluralidad contextual no implica todavía un sistema general de organización o relaciones.

V1 no deberá presuponer necesariamente:

```text
jerarquías de carpetas
taxonomías
grafos generales
ontologías
bases de conocimiento
workspaces
sistemas universales de referencias
```

Lo mínimo que deberá demostrarse es:

```text
pluralidad
+
distinción suficiente
+
relación pertinente
+
reutilización contextual
```

Esto permite realizar de forma mínima aspectos de la visión relacionados con:

```text
organización contextual
relación
recuperación contextual
reutilización
```

sin convertir esas posibilidades en subsistemas generales prematuramente.

---

# 12. Reutilización

La reutilización deberá demostrar que un material o resultado previamente constituido puede participar nuevamente en otro contexto pertinente de trabajo.

Ese nuevo contexto podrá pertenecer o no a una actividad distinta de aquella en la que el material o resultado fue constituido inicialmente.

La estructura mínima será:

```text
contexto A
↓
se constituye R

...

contexto B
↓
R vuelve a participar pertinentemente
```

La reutilización no exige necesariamente:

```text
duplicación
copia física
identidad técnica estable
referencia mediante enlace
o mecanismo concreto de composición
```

La realización técnica deberá derivarse posteriormente.

---

# 13. Condición transversal: determinación humana efectiva

V1 queda sometida a los compromisos de Product vigentes dentro de su alcance.

Este documento no los redefine, sino que determina cómo condicionan la delimitación estratégica de V1.

Cuando durante una trayectoria aparezca una decisión:

```text
relevante
+
con alternativas todavía disponibles
+
cuya resolución corresponda a la persona
```

la plataforma deberá preservar la posibilidad efectiva de que esa resolución sea determinada por ella.

Esta condición no convierte:

```text
evaluar
decidir
confirmar
```

en etapas universales de toda trayectoria.

Tampoco prescribe:

```text
confirmaciones
avisos
diálogos
interfaz
o mecanismos técnicos concretos
```

Su aplicación dependerá de las situaciones pertinentes que efectivamente aparezcan dentro de V1.

---

# 14. Condición transversal: continuidad de posibilidades pertinentes

V1 queda igualmente sometida a los compromisos de Product vigentes relativos a la continuidad de posibilidades pertinentes.

Este documento no redefine ese compromiso.

Cuando la plataforma introduzca cambios que afecten al trabajo, deberá preservarse suficientemente aquello que continúe siendo necesario para mantener las posibilidades pertinentes de la situación resultante.

Por tanto:

```text
persistencia física de R
⇏
continuidad suficiente
```

y:

```text
preservación suficiente
≠
conservación literal de todo
```

La suficiencia dependerá de las posibilidades que sigan siendo pertinentes en cada situación.

---

# 15. Consecuencias condicionadas de la continuidad

La continuidad de posibilidades pertinentes podrá exigir, según la situación, conservar suficientemente elementos necesarios para:

```text
comprender
relacionar
reutilizar
continuar
comparar
revisar
o justificar
```

Sin embargo, V1 no deberá convertir automáticamente esas consecuencias en capacidades universales independientes.

En particular:

```text
trazabilidad general
versionado general
historial general
defendibilidad universal
```

no quedan establecidos por este documento como requisitos autónomos de V1.

Podrán resultar necesarios cuando una situación concreta demuestre que sin ellos se pierde una posibilidad pertinente.

---

# 16. Actividades suficientemente representadas por V1

La delimitación adoptada pretende realizar de forma mínima pero efectiva las siguientes familias de actividad de `PLATFORM_VISION.md`:

```text
constitución y transformación del trabajo
        → mediante incorporación, trabajo y resultado;

recuperación y organización contextual mínima
        → mediante pluralidad distinguible,
          contexto suficiente y recuperación;

relación y reutilización
        → mediante pluralidad contextual;

evolución
        → mediante R → interrupción → recuperación → R';

preservación y continuidad
        → mediante reanudación efectiva y PV-006.
```

La evaluación y determinación humana quedan representadas cuando la situación concreta las haga pertinentes mediante PV-005 y las condiciones derivadas de PV-006.

---

# 17. Elementos no obligatorios para V1

La visión de largo plazo permanece más amplia que esta primera versión.

Con la derivación actualmente disponible, no son obligatorias para cerrar V1 las siguientes capacidades perseguidas a más largo plazo:

```text
colaboración entre varias personas
intercambio entre personas
publicación
difusión
```

Su exclusión de V1 no significa rechazo, irrelevancia ni eliminación de `PLATFORM_VISION`.

Significa únicamente que no se ha demostrado que sean necesarias para cerrar esta primera versión.

Tampoco quedan establecidos como requisitos de V1 determinados modelos, estructuras o mecanismos posibles, entre ellos:

```text
gobierno
roles
permisos generales
organización avanzada
taxonomías generales
versionado general
historial general
trazabilidad universal
defendibilidad universal
```

Estos elementos no deberán incorporarse por anticipación.

Podrán resultar necesarios posteriormente si se demuestra que constituyen una dependencia de alguna capacidad ya justificada o que su ausencia impide realizar el alcance establecido.

En ambos casos:

```text
exclusión actual
≠
prohibición futura
```

sino:

```text
ausencia de fundamento suficiente
para convertirlos ahora
en requisitos obligatorios de V1
```

---

# 18. Frontera técnica

Esta delimitación no determina todavía:

```text
entidades de dominio
clases
interfaces
componentes React
stores
repositorios
base de datos
persistencia concreta
backend
API
modelo de archivos
modelo de relaciones
modelo de identidad
arquitectura
```

La existencia de una exigencia funcional no autoriza a anticipar su realización técnica.

Por tanto:

```text
alcance de V1
≠
diseño técnico de V1
```

---

# 19. Condiciones observables del alcance de V1

La delimitación deberá permitir posteriormente construir y validar al menos una trayectoria en la que una persona pueda:

```text
1. incorporar un material;

2. trabajar sobre él y producir una diferencia significativa;

3. alcanzar un resultado utilizable R;

4. interrumpir efectivamente la actividad;

5. recuperar posteriormente R;

6. continuar trabajando desde R;

7. producir un estado posterior R';

8. trabajar con una pluralidad de materiales o resultados;

9. establecer al menos una relación pertinente entre ellos;

10. reutilizar al menos un material o resultado
    en otro contexto de trabajo;
```

y, durante esa trayectoria:

```text
11. preservar la determinación humana efectiva
    cuando aparezca una decisión pertinente;

12. preservar suficientemente las posibilidades pertinentes
    afectadas por cambios introducidos por la plataforma.
```

Estas condiciones determinan qué debe quedar dentro del alcance de V1.

No constituyen todavía el criterio completo de finalización de V1.

Dicho criterio deberá derivarse posteriormente a partir del mapa de capacidades y de sus dependencias.

---

# 20. Condición de reducción

Una capacidad adicional no deberá incorporarse al alcance obligatorio de V1 únicamente porque:

```text
aparezca en PLATFORM_VISION;
sea habitual en productos semejantes;
resulte técnicamente conveniente;
parezca deseable;
o pueda implementarse.
```

Deberá demostrarse que:

```text
su ausencia impide completar
la trayectoria definida para V1

o

su ausencia impide realizar
una condición transversal obligatoria

o

su ausencia impide satisfacer
la representatividad mínima de la visión
establecida para V1

o

constituye una dependencia necesaria
de una capacidad ya justificada.
```

---

# 21. Condición de ampliación

V1 podrá ampliarse durante su derivación sólo cuando nueva evidencia demuestre que el alcance actual es insuficiente.

Toda ampliación deberá identificar:

```text
qué posibilidad necesaria falta;

qué parte de la trayectoria no puede completarse;

qué compromiso de Product queda sin realizar;

qué dimensión necesaria para la representatividad mínima
de V1 queda sin realizar;

o qué dependencia obligatoria ha sido descubierta.
```

La ampliación deberá realizarse mediante fundamento positivo y no por acumulación preventiva de funcionalidades.

---

# 22. Definición provisional de V1

A partir de la reducción realizada, V1 queda delimitada provisionalmente como:

> **Una primera versión de la plataforma en la que una persona puede incorporar materiales a una actividad, trabajar sobre ellos hasta constituir resultados utilizables, abandonar y recuperar posteriormente ese trabajo, continuar desde el estado alcanzado y hacer participar varios materiales o resultados en contextos relacionados y reutilizables, preservando durante esa trayectoria la determinación humana efectiva y la continuidad suficiente de las posibilidades pertinentes cuando corresponda.**

Esta definición establece el alcance estratégico.

No constituye todavía un criterio técnico de aceptación.

---

# 23. Estado resultante

La delimitación permite pasar de:

```text
PLATFORM_VISION amplia
```

a:

```text
V1 finita y reducible
```

sin confundir ambas.

El estado resultante puede expresarse como:

```text
PLATFORM_VISION
        ↓
DELIMITACIÓN DE V1
        │
        ├── núcleo longitudinal
        │   incorporar
        │   ↓
        │   trabajar
        │   ↓
        │   R
        │   ↓
        │   interrupción
        │   ↓
        │   recuperar
        │   ↓
        │   continuar
        │   ↓
        │   R'
        │
        ├── pluralidad contextual
        │   distinguir
        │   ↓
        │   relacionar
        │   ↓
        │   reutilizar
        │
        ├── sometimiento a PV-005
        │
        └── sometimiento a PV-006
```

---

# 24. Próxima actuación derivada

Una vez delimitado el alcance de V1, la siguiente actuación no consiste todavía en implementar funcionalidades.

Deberá construirse el **mapa de capacidades de V1**.

Ese mapa deberá derivar qué capacidades independientes son necesarias para realizar:

```text
núcleo longitudinal
+
pluralidad contextual
+
condiciones transversales
```

y deberá identificar y organizar las capacidades esenciales necesarias para realizar V1, distinguiendo cuando resulte pertinente:

```text
capacidades operativas esenciales

y

condiciones transversales esenciales
de activación condicionada
```

La determinación de qué capacidades se encuentran ya realizadas, parcialmente realizadas o ausentes corresponderá a una fase posterior, una vez establecidos el mapa, sus dependencias y los criterios de finalización de V1.

Una vez construido ese mapa, la actuación posterior consistirá en determinar las dependencias existentes entre las capacidades identificadas.

---

# 25. Punto de reanudación

La siguiente pregunta del proyecto pasa a ser:

> **¿Qué capacidades independientes debe proporcionar el producto para que la trayectoria y las condiciones definidas en esta delimitación puedan realizarse completamente?**

La respuesta deberá constituir el primer mapa de capacidades de V1.

---
