# 06 Axiomas

# Firma y axiomatización

## Propósito

Este documento investiga si la teoría conceptual requiere una firma universal mínima y, en caso afirmativo, qué axiomas sustantivos universales deben añadirse a dicha firma.

Históricamente, `06-axiomas.md` formalizaba una realización concreta del perfil funcional:

```text
CAN-F1 → P-001
CAN-F2 → MA-001
CAN-F3 → MA-002
```

con una segunda sorte auxiliar:

```text
O
```

y concluía provisionalmente que la teoría podía realizarse mediante:

```text
Sortes:
    P-001
    O

Predicados:
    MA-001ₙ
    MA-002
```

sin axiomas sustantivos generales adicionales.

La reapertura de `05-perfil-funcional.md` ha producido como resultado consolidado:

```text
PF_min = ∅.
```

Este resultado constituye la **entrada** de la presente investigación.

No se inferirá automáticamente de él:

```text
firma conceptual universal = ∅
```

ni:

```text
axiomas sustantivos universales = ∅.
```

Ambas conclusiones deberán obtenerse mediante pruebas propias de este documento.

---

# Objetivo

La investigación debe responder separadamente a dos cuestiones:

```text
Q1
¿existe algún compromiso lingüístico
o formal universal necesario,
aunque no realice una función
del perfil?

Q2
si existe tal compromiso,
¿requiere axiomas sustantivos
universales adicionales?
```

La respuesta a `Q1` no viene determinada únicamente por:

```text
PF_min = ∅.
```

Una teoría sin funciones universales podría, en principio, seguir necesitando:

- una sorte conceptual universal;
- un tipo de término;
- una forma relacional;
- una igualdad conceptual;
- un símbolo de orden;
- una estructura mínima;
- o cualquier otro compromiso formal cuya eliminación produjera una pérdida propia.

Por tanto dichos candidatos deberán examinarse independientemente.

---

# Distinción entre niveles

Este documento distingue:

```text
dominio conceptual
```

de:

```text
lenguaje de representación
```

y de:

```text
marco lógico.
```

Una característica puede ser necesaria para formular una representación sin convertirse por ello en compromiso conceptual universal.

Por ejemplo:

```text
variables;
igualdad lógica;
cuantificación;
paréntesis;
orden sintáctico;
dominio lógico;
```

pueden pertenecer al formalismo adoptado.

Su utilización no demuestra automáticamente que exista una categoría conceptual correspondiente en el dominio.

---

# Criterio de componente universal de firma

Un componente `C` sólo podrá permanecer en la firma conceptual mínima si se demuestra conjuntamente que:

1. su eliminación produce una pérdida concreta respecto del corpus;
2. la pérdida no depende de una función eliminada del antiguo perfil;
3. `C` no constituye únicamente un recurso de un formalismo particular;
4. no pertenece ya al marco lógico;
5. no puede sustituirse conservativamente mediante otra representación;
6. su necesidad no se deriva únicamente de decisiones de tipado;
7. su interpretación puede formularse sin presuponer aquello que pretende introducir;
8. conserva una pérdida exclusiva bajo auditoría global;
9. y su incorporación no reintroduce nominalmente `CAN-F1`, `CAN-F2` o `CAN-F3`.

---

# Firma histórica

La firma anteriormente consolidada era:

```text
Sortes:
    P-001
    O

Predicados:
    MA-001ₙ : P-001ⁿ → Prop
    para n ≥ 2

    MA-002 : P-001 × O × O → Prop
```

Su interpretación era:

```text
P-001
→ individuación;

MA-001
→ articulación estructural;

MA-002
→ articulación evolutiva;

O
→ soporte representacional
  para las ocupaciones
  de MA-002.
```

Esta firma debe conservarse como estado histórico.

No puede mantenerse como firma mínima vigente únicamente porque fue una realización adecuada del antiguo perfil.

---

# Reconstrucción de `P-001`

## Estatuto histórico

`P-001` era una sorte de participantes estructurales.

Sus términos podían:

```text
ser argumentos de MA-001;
ser referente común de MA-002;
ser comparados mediante igualdad;
reaparecer en varias articulaciones.
```

Su función principal era realizar:

```text
CAN-F1 — Individuación.
```

---

## Pérdida del fundamento funcional

La eliminación de `CAN-F1` retira la principal justificación histórica de `P-001`.

Pero esto no basta para eliminar la sorte.

La prueba independiente debe preguntar:

> ¿hay alguna discriminación conceptual que sólo pueda conservarse si todos los términos relevantes pertenecen a una categoría universal `P-001`?

---

## Prueba de eliminación

Eliminamos la sorte:

```text
P-001.
```

Permitimos que cada representación concreta determine directamente qué términos utiliza y qué condiciones deben satisfacer.

Seguimos pudiendo:

- distinguir términos cuando el caso lo exige;
- conservar referencias;
- formular relaciones;
- reutilizar términos;
- representar colecciones;
- establecer identidades locales;
- documentar continuidad o historia cuando un criterio particular las justifique.

La posibilidad de escribir:

```text
x = y
```

cuando el marco lógico dispone de igualdad tampoco obliga a que `x` e `y` pertenezcan a una sorte conceptual universal `P-001`.

---

## Prueba inversa

Conservemos:

```text
P-001
```

pero retiremos todos los criterios específicos que determinan:

```text
qué términos son relevantes;
qué significa su identidad;
qué relaciones pueden mantener;
qué usos están autorizados.
```

La mera pertenencia a `P-001` no permite reconstruir ninguna de esas propiedades.

Por tanto su contenido conceptual independiente resulta insuficiente.

---

## Resultado

No se identifica una pérdida exclusiva que obligue a conservar:

```text
P-001
```

como sorte conceptual universal.

### Estado

```text
P-001

estatuto histórico:
sorte fundamental
realizadora de CAN-F1

estatuto vigente:
ELIMINADA
como sorte conceptual universal
```

Su eliminación no prohíbe que formalismos particulares introduzcan tipos o entidades equivalentes cuando sean útiles.

---

# Reconstrucción de `MA-001`

## Estatuto histórico

La familia:

```text
MA-001ₙ : P-001ⁿ → Prop
```

realizaba:

```text
CAN-F2 — Articulación estructural.
```

Su aridad variable permitía representar organizaciones de dos o más participantes.

Históricamente no se postulaban para ella propiedades universales como:

```text
simetría;
transitividad;
reflexividad;
funcionalidad;
totalidad.
```

Su contenido general quedaba prácticamente reducido a:

```text
tipado
+
aridad.
```

---

## Pérdida del fundamento funcional

La reapertura de `05` mostró que `CAN-F2**`, entendido como capacidad relacional n-aria, puede externalizarse al nivel representacional.

Por tanto ya no podemos justificar:

```text
MA-001ₙ
```

diciendo que toda teoría debe realizar una capacidad universal de articulación estructural.

Debemos preguntar si la propia forma n-aria constituye, independientemente, un compromiso conceptual universal.

---

## Prueba por formalismos alternativos

Consideremos dos representaciones capaces de conservar exactamente las mismas discriminaciones del corpus.

Una utiliza:

```text
Rₙ(x₁,...,xₙ)
```

y otra utiliza una estructura formal diferente que conserva de manera reconstructivamente equivalente:

```text
agrupación;
papeles;
asignaciones;
dependencias;
```

sin poseer literalmente un predicado n-ario equivalente a `MA-001ₙ`.

Si ambas preservan los contrastes pertinentes, la teoría no dispone de fundamento para declarar que la primera refleja una forma conceptual universal que la segunda debe contener.

---

## Prueba de eliminación

Retiramos:

```text
MA-001.
```

Seguimos pudiendo exigir que una representación concreta no colapse situaciones que deba distinguir.

Si una determinada formalización necesita relaciones n-arias, podrá introducirlas.

Si otra formalización resuelve conservativamente el mismo problema mediante otros recursos, también será admisible.

No aparece una pérdida conceptual que sólo pueda atribuirse a `MA-001`.

---

## Resultado

```text
MA-001
```

deja de estar justificada como componente universal de la firma.

### Estado

```text
MA-001

estatuto histórico:
realización formal de CAN-F2

estatuto vigente:
ELIMINADA
como forma conceptual universal

uso posible:
recurso de representaciones concretas
```

---

# Reconstrucción de `MA-002`

## Estatuto histórico

La forma:

```text
MA-002 : P-001 × O × O → Prop
```

realizaba:

```text
CAN-F3 — Articulación evolutiva.
```

Una instancia:

```text
MA-002(p; φ, ψ)
```

contenía:

- un referente común `p`;
- dos ocupaciones;
- posiciones no intercambiables;
- orientación expresada mediante orden argumental.

---

## Pérdida del fundamento funcional

La investigación posterior eliminó:

```text
CAN-F3
```

como función universal irreducible.

También neutralizó como primitivas:

```text
evolución;
estado;
continuidad;
mismo sujeto;
polaridad fundamental;
trayectoria universal.
```

Por tanto la justificación histórica de `MA-002` queda retirada.

---

## Prueba independiente

Debemos preguntar:

> ¿existe alguna discriminación del corpus que sólo pueda conservarse mediante una forma universal de tres argumentos con un referente y dos polos ordenados?

La investigación anterior ya mostró que diferencias de:

```text
orden;
papel;
orientación;
vinculación;
transformación;
```

pueden quedar expresadas mediante criterios y relaciones concretas sin exigir una forma universal evolutiva.

Un formalismo puede utilizar una relación binaria dirigida.

Otro puede utilizar una relación n-aria.

Otro puede representar explícitamente condiciones de transición.

Otro puede no reificar ninguna transición cuando la cuestión evaluada no lo necesita.

No aparece una forma común obligatoria.

---

## Prueba de eliminación

Eliminamos:

```text
MA-002.
```

Seguimos pudiendo conservar cada contraste histórico mediante recursos específicos cuando resulte necesario.

No se pierde:

```text
orden pertinente;
diferencia entre posiciones;
historia;
transformación concreta;
criterios locales de sucesión;
vínculos específicos.
```

Lo que se elimina es únicamente la obligación de representarlos mediante una única forma universal.

---

## Resultado

```text
MA-002
```

no conserva una pérdida representacional o conceptual exclusiva.

### Estado

```text
MA-002

estatuto histórico:
realización formal de CAN-F3

estatuto vigente:
ELIMINADA
como forma conceptual universal
```

---

# Reconstrucción de `O`

## Estatuto histórico

`O` era una sorte auxiliar.

No realizaba una cuarta función del perfil.

Su necesidad histórica era expresamente:

```text
representacional.
```

Permitía:

- distinguir las dos ocupaciones de `MA-002`;
- reutilizarlas;
- compararlas;
- componer varias instancias evolutivas.

---

## Consecuencia inicial

Precisamente porque su justificación histórica ya era representacional, la eliminación de:

```text
MA-002
```

debilita radicalmente la necesidad de:

```text
O.
```

Pero debe hacerse igualmente una prueba independiente.

---

## Prueba de eliminación

Retiramos:

```text
O.
```

Cualquier representación concreta que necesite distinguir:

```text
estados;
ocupaciones;
configuraciones;
valores;
momentos;
polos;
```

puede introducir los términos apropiados bajo sus propios criterios.

No existe una razón para que todos esos recursos pertenezcan a una única sorte conceptual universal.

---

## Prueba inversa

Conservando:

```text
O
```

pero retirando `MA-002` y los criterios particulares, no podemos determinar:

```text
qué es una ocupación;
cuándo dos ocupaciones coinciden;
qué significa su orden;
qué constituye una transición;
cómo deben componerse.
```

La sorte carece de contenido independiente suficiente.

---

## Resultado

```text
O
```

no sobrevive como sorte conceptual universal.

### Estado

```text
O

estatuto histórico:
sorte auxiliar representacional

estatuto vigente:
ELIMINADA
como compromiso conceptual universal

uso posible:
recurso local de formalismos
que necesiten categorías equivalentes
```

---

# Resultado de la reconstrucción de la firma histórica

Los cuatro componentes históricos quedan:

```text
P-001
    → eliminado

O
    → eliminado

MA-001
    → eliminado

MA-002
    → eliminado
```

Pero esto sólo demuestra:

```text
Σ_histórica
no es necesaria.
```

Todavía no demuestra:

```text
Σ_min = ∅.
```

Sería posible que existiera un quinto componente universal no perteneciente a la firma histórica.

Por tanto se requiere una prueba de exhaustividad negativa.

---

# Búsqueda de compromisos formales residuales

Después de eliminar la firma histórica se examinan candidatos generales.

## Dominio lógico indiferenciado

Todo lenguaje formal suele cuantificar o interpretar variables sobre algún dominio.

Pero:

```text
dominio lógico
```

pertenece al marco formal adoptado.

No constituye por sí mismo una sorte conceptual del dominio investigado.

Por tanto no se incorpora como componente de la firma conceptual.

---

## Variables

Los símbolos:

```text
x,y,z,...
```

son recursos metalingüísticos o lógicos.

No constituyen categorías conceptuales.

---

## Igualdad

La igualdad puede ser proporcionada por el marco lógico.

Incluso cuando se utiliza:

```text
x = y
```

el significado conceptual de «misma obra», «mismo ejemplar», «misma configuración» o cualquier identidad especializada no queda automáticamente fijado por la igualdad lógica.

No se justifica, por tanto, una igualdad conceptual universal adicional.

---

## Relación universal

Se examinó anteriormente la posibilidad de conservar una única forma:

```text
Rₙ
```

como residuo universal.

La prueba de nivel mostró que esto pertenece a una posible representación.

No se requiere como componente conceptual obligatorio.

---

## Orientación universal

El orden argumental puede ser necesario en ciertos predicados.

Pero no todas las relaciones deben ser orientadas ni existe un operador universal de orientación requerido por el corpus.

No se incorpora.

---

## Tipos universales

La utilización de tipos o sortes puede mejorar una representación concreta.

Pero no se identifica una partición conceptual universal necesaria que toda realización deba conservar literalmente.

No se incorpora ninguna sorte general.

---

# Auditoría de interacción formal

Se examinó si:

```text
ausencia de P-001
+
ausencia de O
+
ausencia de MA-001
+
ausencia de MA-002
```

podría producir colectivamente una pérdida que no apareciera en las eliminaciones individuales.

No se identifica tal pérdida.

Una representación puede conservar simultáneamente:

```text
distinciones;
organizaciones;
orden;
dependencias;
transformaciones;
criterios locales;
```

sin reproducir ninguno de los cuatro componentes históricos como primitivas universales.

Tampoco aparece una propiedad formal emergente que obligue a crear una nueva firma común.

---

# Prueba de no trivialización de la firma vacía

La ausencia de firma conceptual universal no significa que cualquier representación sea admisible.

Una representación concreta continúa pudiendo ser rechazada porque:

```text
no permite responder
a las cuestiones para las que se propone;

colapsa contrastes necesarios;

introduce autoridad conceptual
no justificada;

pierde dependencias;

o utiliza recursos que no permiten
reconstruir los resultados pertinentes.
```

Estos fallos se evalúan respecto del formalismo y de las cuestiones concretas.

No obligan a postular una firma conceptual universal positiva.

Por tanto:

```text
Σ_min = ∅
```

no trivializa la representación.

---

# Resultado sobre la firma conceptual

Después de:

```text
eliminar P-001;
eliminar O;
eliminar MA-001;
eliminar MA-002;
buscar componentes residuales;
auditar interacción;
comprobar no trivialización;
```

no se identifica ningún compromiso lingüístico universal propio del dominio.

Por tanto:

```text
Σ_min = ∅.
```

Este resultado pertenece a `06-axiomas.md`.

No se deriva automáticamente de:

```text
PF_min = ∅.
```

---

# Parte II — Axiomas sustantivos

Una vez obtenida independientemente:

```text
Σ_min = ∅,
```

corresponde preguntar si puede existir, pese a ello, algún axioma sustantivo universal del dominio.

No se asumirá que:

```text
firma vacía
⇒
axiomas vacíos.
```

Un principio universal podría, en teoría, formularse en el metalenguaje o sobre cualquier interpretación admisible sin requerir símbolos conceptuales específicos.

---

# Criterio de axioma sustantivo universal

Un axioma `A` sólo podrá incorporarse si:

1. excluye situaciones que el corpus exige excluir;
2. posee contenido independiente del significado de «adecuado», «justificado» o «representado»;
3. no pertenece ya al marco lógico;
4. no constituye una regla metodológica;
5. no pertenece a un régimen evaluativo concreto;
6. no es una condición particular de una relación o fenómeno;
7. puede formularse sin reintroducir las funciones o componentes eliminados;
8. y su eliminación produce una pérdida propia.

---

# Revisión de candidatos históricos

El antiguo documento ya había concluido que no eran axiomas universales:

```text
simetría;
asimetría;
transitividad;
reflexividad;
irreflexividad;
funcionalidad;
totalidad;
unicidad;
existencia obligatoria;
participación obligatoria.
```

Estas conclusiones permanecen.

La eliminación de la firma histórica no proporciona razón para restaurar ninguna de ellas.

---

# Hipótesis existenciales

No se ha demostrado necesario postular:

```text
existe algún participante;
existe alguna ocupación;
existe alguna relación;
existe alguna transformación;
existe alguna colección;
existe alguna historia.
```

La teoría puede describir condiciones bajo las que tales cosas sean relevantes sin convertir su existencia en axioma universal.

Por tanto:

```text
axiomas existenciales universales
= ∅.
```

---

# Principios de identidad

No se postula:

```text
todo elemento posee identidad persistente;
```

ni:

```text
toda transformación conserva un sujeto;
```

ni ninguna variante universal equivalente.

Los criterios de identidad permanecen locales cuando sean necesarios.

---

# Principios de organización

No se postula:

```text
todo dominio contiene relaciones n-arias;
```

ni:

```text
toda organización debe representarse
mediante una relación determinada.
```

La necesidad de recursos organizativos depende de la representación y de la cuestión concreta.

---

# Principios de evolución

No se postula:

```text
todo cambio posee dos polos;
todo cambio está orientado;
toda historia se compone de transiciones;
toda transformación conserva continuidad.
```

Estos contenidos pueden aparecer en fenómenos particulares.

No han demostrado universalidad.

---

# Principios de justificación y adecuación

Los candidatos históricos posteriormente formulados como:

```text
EG-1;
EG-1*;
PMG-1;
PMG-2;
```

tampoco deben reintroducirse aquí como axiomas conceptuales.

Sus análisis posteriores los localizaron respectivamente en:

```text
definición contextual de adecuación;
regímenes evaluativos;
metodología crítica.
```

No pertenecen al núcleo axiomático del dominio.

---

# Búsqueda de axioma residual

Se examinó si todas las interpretaciones conceptualmente válidas deben satisfacer alguna propiedad común adicional que no sea:

- lógica;
- representacional;
- evaluativa;
- metodológica;
- o específica de un fenómeno.

No se identifica actualmente ninguna.

Toda restricción sustantiva superviviente examinada puede localizarse en contextos particulares sin convertirse en ley universal del dominio.

---

# Auditoría global de axiomatización

La ausencia conjunta de:

```text
firma conceptual universal
+
axiomas sustantivos universales
```

fue contrastada con el corpus.

No desaparece la capacidad para:

```text
distinguir casos;
formular resultados;
rechazar representaciones insuficientes;
establecer dependencias;
aplicar criterios locales;
revisar conclusiones;
falsar candidatos.
```

Estos trabajos pertenecen a otros niveles y no necesitan un núcleo axiomático positivo.

No se identifica una propiedad emergente global que obligue a introducir un axioma residual.

---

# Resultado axiomático

Sólo después de esta prueba independiente se establece:

```text
Ax_min = ∅.
```

Por tanto el resultado conjunto de `06` es:

```text
Σ_min = ∅

Ax_min = ∅.
```

---

# Revisión de `AX-MIN-001`

La tesis histórica:

```text
AX-MIN-001
```

afirmaba:

> La realización mínima actual del perfil funcional puede formalizarse mediante una firma tipada de dos sortes y dos modos de articulación, sin axiomas sustantivos generales adicionales.

La tesis contenía dos partes:

```text
A)
dos sortes
+
dos modos de articulación
son suficientes y mínimos;

B)
no se necesitan axiomas
sustantivos adicionales.
```

Después de la reapertura:

```text
A
→ FALSADA

B
→ CONSERVADA
  pero por una justificación
  más fuerte.
```

La ausencia de axiomas ya no depende de que las restricciones fundamentales hayan quedado codificadas en una firma tipada.

La conclusión vigente es:

```text
no se ha demostrado
ninguna firma conceptual universal

ni

ningún axioma sustantivo universal.
```

Por tanto `AX-MIN-001` deja de ser la tesis mínima vigente.

---

# Nueva tesis de cierre

## `AX-MIN-002`

> Respecto del corpus actualmente auditado, no se ha demostrado necesaria ninguna firma conceptual universal ni ningún axioma sustantivo universal propio del dominio.

Formalmente:

```text
Σ_min = ∅

Ax_min = ∅.
```

### Estado

```text
Validada provisionalmente
por eliminación,
búsqueda residual,
auditoría de nivel,
auditoría global
y no trivialización.
```

---

# Qué no significa `AX-MIN-002`

No significa:

```text
todo lenguaje sirve;
```

ni:

```text
toda interpretación es válida;
```

ni:

```text
no existen reglas;
```

ni:

```text
no existen relaciones;
```

ni:

```text
no existen restricciones.
```

Significa únicamente que esas propiedades no han demostrado necesitar un **núcleo formal conceptual universal**.

Una representación concreta puede requerir una firma rica.

Un fenómeno particular puede imponer relaciones y restricciones.

Una especialización puede introducir tipos y axiomas.

Nada de ello convierte esos recursos en componentes universales del dominio.

---

# Relación con el marco lógico

La teoría sigue necesitando algún medio para formular razonamientos.

Pero no corresponde a este documento determinar universalmente:

```text
qué lógica;
qué semántica formal;
qué sistema de tipos;
qué teoría de conjuntos;
qué metalenguaje.
```

Los compromisos de dichos marcos deberán declararse allí donde se adopten.

No deberán confundirse con la firma conceptual mínima.

Por tanto:

```text
firma conceptual vacía
≠
lenguaje formal vacío.
```

---

# Especializaciones

Una especialización puede introducir:

```text
tipos;
relaciones;
funciones;
predicados;
axiomas;
reglas;
operadores;
```

si los necesita para su alcance particular.

Su legitimidad deberá demostrarse localmente.

La eliminación de una firma universal no impide formalizaciones especializadas.

---

# Criterio de reapertura de la firma

`Σ_min = ∅` deberá reabrirse si aparece un componente `C` que:

1. pertenezca legítimamente al dominio conceptual;
2. sea requerido por múltiples realizaciones admisibles o por una pérdida independiente;
3. no pueda externalizarse a la representación;
4. no pertenezca al marco lógico;
5. no sea sustituible conservativamente;
6. produzca una pérdida concreta al eliminarse;
7. mantenga dicha pérdida bajo auditoría global;
8. y no sea reintroducción nominal de un candidato histórico eliminado.

---

# Criterio de reapertura axiomática

`Ax_min = ∅` deberá reabrirse si aparece una restricción `A` que:

1. deba satisfacer toda interpretación conceptual admisible;
2. excluya un caso que el corpus exige universalmente excluir;
3. no sea definicional;
4. no pertenezca al marco lógico;
5. no pertenezca a la metodología;
6. no dependa de un régimen evaluativo particular;
7. no sea específica de una especialización;
8. y produzca una pérdida concreta al eliminarse.

---

# Estado actual

```text
Entrada:
    PF_min = ∅

Firma histórica:
    P-001
    O
    MA-001
    MA-002

Reconstrucción:
    P-001  → eliminado
    O      → eliminado
    MA-001 → eliminado
    MA-002 → eliminado

Componentes universales
residuales identificados:
    ninguno

Firma conceptual mínima:
    Σ_min = ∅

Axiomas sustantivos
universales:
    Ax_min = ∅

Hipótesis existenciales
universales:
    ∅
```

---

# Decisión de cierre

> **La investigación de la firma y la axiomatización queda cerrada provisionalmente por reducción.**

La reapertura no concluye que formalizar la teoría sea imposible o innecesario.

Concluye que ninguna formalización concreta examinada ha demostrado constituir una estructura conceptual universal obligatoria.

La antigua firma:

```text
P-001
O
MA-001
MA-002
```

permanece documentada como realización histórica del antiguo perfil.

No permanece como firma conceptual mínima vigente.

El resultado consolidado es:

```text
Σ_min = ∅

Ax_min = ∅.
```

---

# Consecuencia documental

`06-axiomas.md` deja de proporcionar a los documentos posteriores:

```text
P-001
O
MA-001
MA-002
```

como componentes universales necesarios del núcleo conceptual.

Tampoco proporciona ya:

```text
AX-MIN-001
```

como tesis mínima vigente.

Su salida consolidada pasa a ser:

```text
Σ_min = ∅

Ax_min = ∅.
```

Esto no autoriza a reescribir automáticamente los documentos posteriores.

Cada resultado consolidado que dependa de la antigua firma deberá reabrirse y comprobar si:

```text
depende realmente
de P-001/O/MA-001/MA-002;

posee justificación independiente;

puede conservarse
sin la antigua firma;

o debe quedar únicamente
como resultado histórico.
```

**Estado del documento:** reabierto y reconstruido desde `PF_min = ∅`.

**Resultado:** firma conceptual mínima y axiomatización sustantiva universal vacías.

**Tipo de cierre:** cierre por reducción.

**Siguiente dependencia documental:** `07-conclusiones-consolidadas.md`.
