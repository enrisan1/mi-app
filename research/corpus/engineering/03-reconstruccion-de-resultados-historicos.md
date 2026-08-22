# Reconstrucción de resultados históricos

## Propósito

Este documento reconstruye los resultados históricamente atribuidos a Engineering sin presuponer su supervivencia, su forma ni su autoridad final.

Cada unidad histórica se somete al protocolo de reconstrucción mediante:

1. justificación histórica;
2. justificación de la reconstrucción;
3. resultado de la reconstrucción.

La unidad histórica se mantiene provisionalmente indivisa mientras no aparezca evidencia suficiente de que contiene afirmaciones independientes.

La ubicación documental definitiva de los resultados que sobrevivan se determinará posteriormente, una vez exista evidencia suficiente para reconstruir la estructura documental resultante.

---

# RA-I

## 1. Justificación histórica

El corpus conceptual previo establece CAN-F1 — Individuación como
función estructural irreducible que realiza ES-001 y permite reconocer cuándo varios elementos deben tratarse como el mismo o como distintos.

La teoría utiliza P-001 como una realización válida de CAN-F1, pero declara explícitamente que el perfil funcional no determina una realización concreta y que firmas diferentes pueden preservar
capacidades estructuralmente equivalentes.

Posteriormente, la arquitectura consolidada introduce RA-I como
autoridad semántica del plano constitutivo y la representa mediante:

    RA-I → P

La documentación consolidada de Engineering afirma globalmente que
las responsabilidades arquitectónicas habían sido justificadas como necesarias, pero las matrices y pruebas concretas correspondientes no se conservan en los documentos examinados.

Las búsquedas realizadas sobre el corpus actual y el historial Git no han localizado una derivación explícita que establezca:

    CAN-F1 ⇒ RA-I

ni una formulación equivalente que demuestre que la necesidad funcional de individuación exige una autoridad o responsabilidad arquitectónica independiente RA-I.

Por tanto, puede reconstruirse históricamente la necesidad de CAN-F1, pero no la justificación específica del paso desde CAN-F1/P-001 hasta RA-I.

---

## 2. Justificación de la reconstrucción

### Eliminación de RA-I conservando CAN-F1

Se elimina provisionalmente RA-I manteniendo íntegramente CAN-F1 y
la condición establecida por el perfil funcional de que cualquier
realización válida preserve una capacidad estructuralmente equivalente
de individuación.

La eliminación no produce, con la evidencia disponible, pérdida de
ninguna propiedad necesaria atribuida a CAN-F1.

Continúan siendo exigibles:

- la capacidad de reconocer mismo y distinto;
- la individuación necesaria para la persistencia de identidad;
- la identidad estructural;
- la base requerida por las reconstrucciones evolutivas;
- la preservación de una capacidad funcionalmente equivalente en
  cualquier realización válida.

La prueba histórica de irreducibilidad de CAN-F1 tampoco establece la necesidad de RA-I: demuestra que la individuación no puede eliminarse funcionalmente sin ser reintroducida mediante recursos equivalentes.

La propiedad adicional atribuida históricamente a RA-I —su condición de autoridad semántica constitutiva de participantes— no ha demostrado hasta ahora ser necesaria para preservar CAN-F1.

En consecuencia, no puede establecerse:

    CAN-F1 ⇒ RA-I

y la eliminación de RA-I resulta provisionalmente admisible respecto
de CAN-F1.

### Prueba de soporte mediante `P-001`

La eliminación de `RA-I` conservando `CAN-F1` demuestra que la función de individuación no exige por sí misma una autoridad arquitectónica diferenciada.

Queda, sin embargo, una posibilidad adicional.

La realización adoptada por el Modelo Conceptual utiliza `P-001` como soporte de la individuación. Sus términos pueden actuar como referentes en articulaciones estructurales y como referente común en articulaciones evolutivas.

Debe comprobarse, por tanto, si esta función de soporte introduce una propiedad necesaria adicional que no pueda reducirse a `CAN-F1/P-001` y que obligue a reconstruir `RA-I`.

La hipótesis fuerte sería:

```text
CAN-F1
    ↓
P-001
    ↓
necesidad de una autoridad diferenciada
que produzca, constituya o determine P
    ↓
RA-I
```

Si esta implicación pudiera establecerse, `RA-I` conservaría contenido diferencial aunque la individuación considerada aisladamente no bastara para justificarla.

#### Distinción entre soporte individuado y autoridad constitutiva

`P-001` proporciona términos capaces de funcionar como referentes individuados.

Esta propiedad permite que otros resultados puedan formularse respecto de participantes distinguibles y reutilizables.

Pero deben distinguirse dos afirmaciones:

```text
P puede funcionar
como soporte individuado
```

y:

```text
P debe haber sido producido
por una autoridad constitutiva diferenciada.
```

La primera pertenece al contenido necesario reconstruido mediante `CAN-F1/P-001`.

La segunda introduciría una exigencia arquitectónica adicional.

La existencia de un referente individuado no determina por sí misma qué mecanismo, responsabilidad o autoridad debe establecerlo.

Para derivar `RA-I` sería necesario demostrar que la validez o identidad de `P` depende necesariamente de un acto constitutivo distinto de la propia capacidad de individuación que `P-001` realiza.

No se conserva en los fundamentos examinados una exigencia de este tipo.

#### Reutilización de `P`

El hecho de que un término de `P-001` pueda reutilizarse en diferentes articulaciones tampoco introduce por sí mismo una nueva competencia.

Puede expresarse:

```text
p
├── participa en una articulación estructural
├── participa en otra articulación estructural
└── actúa como referente de una articulación evolutiva
```

sin añadir:

```text
RA-I
    ↓
constituye p
    ↓
autoriza posteriormente
todos sus usos.
```

La reutilización exige que el referente permanezca suficientemente individuado para poder ser reconocido como el mismo cuando corresponda.

Esa exigencia pertenece a la capacidad de individuación y a las condiciones de identidad que deban conservarse.

No demuestra que la identidad deba ser conferida por una autoridad arquitectónica independiente.

#### Establecimiento y validez del referente

Podría sostenerse todavía que una cosa es poder representar un referente individuado y otra establecer que dicho referente cuenta efectivamente como participante válido.

Esta diferencia es conceptualmente posible, pero no basta para reconstruir `RA-I`.

Para ello sería necesario encontrar una exigencia independiente de la forma:

```text
todo participante válido
debe recibir su estatuto
de una única autoridad constitutiva
```

o, al menos:

```text
la determinación de P
constituye una competencia
irreducible respecto de CAN-F1/P-001.
```

No se ha identificado tal exigencia en los resultados reconstruidos.

La diferencia general entre expresabilidad y establecimiento no determina por sí sola la arquitectura encargada del establecimiento.

Incluso cuando un resultado necesite condiciones para ser considerado válido, esas condiciones pueden pertenecer a sus fundamentos, a la competencia que lo establece o a restricciones generales de conservación, sin requerir una autoridad `RA-I`.

#### Intento de eliminación

Eliminemos ahora específicamente la hipótesis de una autoridad que constituya `P`, conservando:

```text
CAN-F1;
P-001;
la capacidad de distinguir mismo y distinto;
la identidad necesaria de los referentes;
su reutilización;
su participación en articulaciones estructurales;
su función como referente en articulaciones evolutivas.
```

Tras la eliminación sigue siendo posible formular y conservar todo el contenido necesario identificado.

No desaparece:

- la individuación;
- el soporte individuado;
- la identidad del referente;
- su posibilidad de reutilización;
- su disponibilidad para otras articulaciones;
- ninguna condición de conservación independientemente justificada.

Lo único eliminado es la afirmación adicional:

```text
P debe proceder necesariamente
de una autoridad semántica
constitutiva e independiente RA-I.
```

No se identifica una propiedad necesaria que desaparezca con esa eliminación.

#### Resultado de la prueba

`P-001` constituye una realización válida de la capacidad de individuación y proporciona el soporte individuado requerido por otras articulaciones del Modelo Conceptual.

Pero:

```text
CAN-F1 / P-001
        ⇏
RA-I
```

La condición de soporte de `P-001` no exige por sí misma:

- una fuente constitutiva única;
- un acto autónomo de producción de `P`;
- una autoridad semántica diferenciada;
- una competencia exclusiva encargada de conferir identidad;
- una autorización posterior de los usos de `P`.

Por tanto, la función de soporte históricamente asociada a `RA-I` queda conservada mediante `CAN-F1/P-001` y las condiciones de identidad que posean fundamento independiente.

No queda reconstruida, a partir de `P-001`, una propiedad diferencial que obligue a conservar `RA-I` como autoridad arquitectónica autónoma.

### Prueba de precedencia respecto de estructura y evolución

Las pruebas anteriores muestran que ni `CAN-F1` ni su realización mediante `P-001` exigen por sí mismas una autoridad arquitectónica diferenciada `RA-I`.

Queda, sin embargo, una posible propiedad diferencial.

Las articulaciones estructurales y evolutivas requieren participantes individuados sobre los que poder formular sus resultados.

Podría sostenerse, por tanto, que `RA-I` resulta necesaria no por la individuación considerada aisladamente, sino porque estructura y evolución necesitan recibir referentes cuya identidad haya sido previamente fijada.

La hipótesis sería:

```text
individuación de p
        ↓
p disponible como referente
        ↓
articulación estructural / evolutiva
```

y, en su versión arquitectónica fuerte:

```text
RA-I
        ↓
constituye P
        ↓
RA-E / RA-V
```

La prueba debe determinar si la primera dependencia obliga realmente a conservar la segunda.

#### Dependencia funcional

`MA-001` y `MA-002` utilizan participantes individuados.

Una articulación estructural no puede determinar una relación entre participantes si éstos no pueden distinguirse como los participantes correspondientes.

Del mismo modo, una articulación evolutiva no puede expresar diferencias relativas a un mismo participante si éste no puede mantenerse como referente común de las ocupaciones implicadas.

Existe, por tanto, una dependencia legítima:

```text
articulación estructural
        ↓
requiere participantes individuables
```

y:

```text
articulación evolutiva
        ↓
requiere un participante individuable
capaz de actuar como referente común
```

Esta dependencia no puede eliminarse sin alterar el contenido de `CAN-F2` y `CAN-F3`.

#### Precedencia lógica y precedencia arquitectónica

La existencia de dicha dependencia permite establecer una precedencia en sentido lógico o relacional.

Para que una determinada articulación pueda referirse a `p`, debe ser posible identificar `p` como el participante correspondiente.

Puede expresarse:

```text
individuación(p)
        ≺
articulación(p, ...)
```

donde `≺` representa únicamente que la segunda presupone la disponibilidad del referente individuado.

Pero esta precedencia no equivale a:

```text
RA-I
        ≺
RA-E
```

ni a:

```text
RA-I
        ≺
RA-V.
```

La primera relación se establece entre condiciones necesarias para determinados resultados.

Las segundas introducirían un orden entre autoridades arquitectónicas.

Para derivarlas sería necesario demostrar adicionalmente que la individuación sólo puede ser proporcionada mediante `RA-I`.

Las pruebas anteriores no han establecido esa condición.

#### Preexistencia del referente

La expresión «referente previamente fijado» puede introducir una ambigüedad.

Puede significar:

```text
cuando una articulación utiliza p,
p debe ser identificable como referente
de esa articulación
```

o puede significar:

```text
antes de cualquier articulación,
una autoridad independiente debe ejecutar
un acto constitutivo que produzca p.
```

La primera afirmación está exigida por la dependencia funcional.

La segunda no se deriva de ella.

La precedencia necesaria es respecto de la **disponibilidad semántica del referente**, no respecto de un acontecimiento arquitectónico autónomo que necesariamente deba producirlo.

Por tanto, de:

```text
S(p₁,p₂)
```

se sigue que `p₁` y `p₂` deben poder ser individuados como participantes de la articulación.

Y de una articulación evolutiva relativa a `p` se sigue que `p` debe poder funcionar como referente individuado común.

Pero ninguna de estas condiciones establece:

```text
RA-I(p)
```

como operación previa necesaria.

#### Interacción con `CAN-F2/MA-001`

La dependencia de la articulación estructural respecto de participantes individuados puede expresarse directamente mediante la relación entre sus términos.

`MA-001` presupone participantes susceptibles de ser distinguidos y referidos.

La pérdida de `CAN-F1/P-001` impediría satisfacer correctamente esta condición.

La eliminación de `RA-I`, en cambio, no la elimina mientras se conserve íntegramente la capacidad de individuación.

Por tanto:

```text
CAN-F2 / MA-001
        → depende de individuación
```

pero no se obtiene:

```text
CAN-F2 / MA-001
        → depende de RA-I.
```

#### Interacción con `CAN-F3/MA-002`

La dependencia es todavía más visible en la articulación evolutiva.

La comparación o articulación entre ocupaciones requiere que éstas puedan atribuirse, cuando corresponda, al mismo participante.

Por tanto:

```text
CAN-F3 / MA-002
        → presupone identidad del referente
```

y dicha identidad requiere una capacidad de individuación suficientemente conservada.

Pero tampoco aquí aparece una propiedad que exija:

```text
RA-V
        → reciba P de RA-I
```

como relación necesaria entre autoridades.

La dependencia puede expresarse directamente:

```text
articulación evolutiva
        → depende de la identidad
          del participante correspondiente.
```

La identidad requerida permanece disponible mediante los resultados reconstruidos de individuación.

#### Intento de eliminación

Eliminemos específicamente toda precedencia arquitectónica atribuida a `RA-I` y conservemos:

```text
CAN-F1;
P-001;
CAN-F2 / MA-001;
CAN-F3 / MA-002;
la identidad de los participantes;
las dependencias entre resultados;
las restricciones necesarias sobre dichas dependencias.
```

La estructura sigue requiriendo participantes individuables.

La evolución sigue requiriendo un referente cuya identidad pueda conservarse entre las ocupaciones correspondientes.

Las dependencias permanecen expresables sin introducir:

```text
RA-I → RA-E
```

o:

```text
RA-I → RA-V.
```

No se pierde ninguna propiedad necesaria identificada.

Lo eliminado es únicamente la proyección de una precedencia entre resultados o condiciones sobre una precedencia entre autoridades arquitectónicas.

#### Resultado de la prueba

Existe una precedencia legítima asociada a la individuación:

```text
referente individuable
        ↓
posibilidad de utilizarlo
en articulaciones posteriores
```

pero dicha precedencia es **relacional**, no una precedencia necesaria entre autoridades.

Por tanto:

```text
dependencia de CAN-F2 respecto de individuación
        ⇏
precedencia de RA-I sobre RA-E
```

y:

```text
dependencia de CAN-F3 respecto de individuación
        ⇏
precedencia de RA-I sobre RA-V.
```

La interacción de `CAN-F1/P-001` con `CAN-F2/MA-001` y `CAN-F3/MA-002` conserva una dependencia real: estructura y evolución necesitan referentes adecuadamente individuados.

No conserva como necesaria la arquitectura:

```text
RA-I
        ↓
RA-E
RA-V
```

La propiedad legítima históricamente asociada a esa precedencia puede expresarse directamente mediante dependencias entre capacidades, referentes y articulaciones.

No queda reconstruida una propiedad diferencial de precedencia que obligue a conservar `RA-I` como autoridad arquitectónica autónoma.

### Exhaustividad del contenido diferencial de `RA-I`

Las pruebas anteriores han examinado tres posibles fuentes de necesidad independiente de `RA-I`:

```text
individuación;
soporte mediante P-001;
precedencia respecto de estructura y evolución.
```

Los resultados obtenidos muestran que:

```text
individuación
        → queda cubierta por CAN-F1;

soporte individuado
        → queda cubierto por CAN-F1/P-001;

precedencia
        → sobrevive como dependencia relacional
          respecto de referentes individuados,
          no como precedencia necesaria de RA-I.
```

Antes de cerrar la reconstrucción debe comprobarse si existe alguna cuarta propiedad históricamente atribuible a `RA-I` que no haya quedado absorbida por estas pruebas.

La búsqueda debe considerar especialmente las propiedades asociadas históricamente a su caracterización como:

```text
autoridad;
semántica;
constitutiva;
independiente;
fuente de P.
```

Si cualquiera de estos términos expresa una propiedad necesaria no reducible a los resultados ya conservados, `RA-I` no podría eliminarse todavía como unidad arquitectónica independiente.

#### Autoridad

La caracterización histórica de `RA-I` como autoridad podría indicar algo más fuerte que la mera capacidad de individuación.

Podría significar que existe una competencia exclusiva para determinar qué cuenta como participante y que esa competencia debe residir necesariamente en una única fuente.

La hipótesis sería:

```text
determinación válida de P
        ↓
requiere una competencia exclusiva
        ↓
requiere RA-I.
```

Sin embargo, las pruebas anteriores no han identificado una propiedad de la individuación que exija una fuente arquitectónica única.

Que un resultado deba estar válidamente determinado no implica que deba existir una autoridad autónoma dedicada exclusivamente a producir todos los resultados de esa clase.

La validez puede depender de los fundamentos del resultado y de las condiciones que una realización válida de `CAN-F1` deba preservar.

No se ha reconstruido una exigencia adicional de autoridad exclusiva.

Por tanto, la condición histórica de `autoridad` no aporta, con los fundamentos disponibles, contenido diferencial independiente.

#### Carácter semántico

`RA-I` fue caracterizada también como autoridad semántica.

Debe comprobarse si esta calificación expresa una propiedad irreducible.

La individuación posee indudablemente contenido semántico: distinguir mismo y distinto afecta a aquello sobre lo que pueden formularse posteriormente afirmaciones estructurales y evolutivas.

Pero de:

```text
la individuación tiene consecuencias semánticas
```

no se sigue:

```text
debe existir una autoridad semántica
arquitectónicamente independiente
encargada de constituirla.
```

La propiedad semántica pertenece al contenido preservado por la función de individuación y por su realización válida.

No se identifica una segunda propiedad que aparezca únicamente al introducir `RA-I`.

La calificación `semántica` describe, por tanto, la naturaleza del contenido tratado, pero no demuestra por sí misma la necesidad de una unidad arquitectónica diferenciada.

#### Carácter constitutivo

La caracterización de `RA-I` como constitutiva constituye una candidata más fuerte.

Podría sostenerse que `RA-I` no se limita a reconocer participantes ya disponibles, sino que establece aquello que cuenta como `P`.

En tal caso existiría aparentemente una diferencia entre:

```text
poder individuar p
```

y:

```text
constituir p como participante.
```

Esta posibilidad ha sido examinada mediante la prueba de soporte de `P-001`.

Para que la diferencia justificara `RA-I` sería necesario demostrar que el estatuto de participante requiere un acto constitutivo autónomo irreducible a las condiciones mediante las cuales el participante queda válidamente individuado.

No se ha localizado tal exigencia.

Eliminar el acto constitutivo atribuido a `RA-I`, conservando `CAN-F1/P-001` y todas las condiciones de identidad y validez independientemente justificadas, no elimina ninguna propiedad necesaria identificada.

Por tanto, `constitutiva` no conserva contenido diferencial suficiente para reconstruir `RA-I`.

#### Independencia

La arquitectura histórica atribuía independencia a `RA-I` respecto de otras autoridades constitutivas.

Esta propiedad podría interpretarse de dos maneras:

```text
independencia funcional
```

o:

```text
independencia de una autoridad arquitectónica.
```

La primera sí posee fundamento.

`CAN-F1` es funcionalmente irreducible: la individuación no puede eliminarse sin perder una capacidad estructural necesaria o reintroducirla mediante recursos equivalentes.

Pero:

```text
irreducibilidad de CAN-F1
        ⇏
independencia arquitectónica de RA-I.
```

La irreducibilidad demuestra que debe conservarse una capacidad funcionalmente equivalente de individuación.

No determina cuántos componentes, autoridades o responsabilidades debe contener una realización.

Por tanto, la independencia funcional superviviente no permite reconstruir la independencia de `RA-I` como autoridad.

#### Producción de `P`

La representación histórica:

```text
RA-I → P
```

podría contener todavía una propiedad diferencial no examinada: que `RA-I` sea específicamente la fuente productora de `P`.

Pero esta interpretación exigiría distinguir entre:

```text
existencia o disponibilidad de términos de P-001
```

y:

```text
resultado producido por una operación RA-I.
```

La documentación histórica permite reconstruir la asociación entre `RA-I` y `P`, pero no una exigencia independiente según la cual todo término de `P-001` deba ser resultado de una operación constitutiva diferenciada.

La prueba de soporte mostró además que pueden conservarse:

- individuación;
- identidad;
- reutilización;
- participación estructural;
- referencia evolutiva;

sin conservar la hipótesis de una autoridad productora de `P`.

Por tanto, la flecha histórica:

```text
RA-I → P
```

no puede reinterpretarse, sin fundamento adicional, como demostración de:

```text
P sólo puede existir válidamente
si ha sido producido por RA-I.
```

La producción de `P` no aporta una cuarta propiedad necesaria reconstruida.

#### Coherencia entre individuaciones

Queda una posibilidad adicional que no depende directamente de las etiquetas históricas anteriores.

Aunque cada individuación pudiera realizarse sin `RA-I`, podría ser necesaria una única autoridad para garantizar que distintas individuaciones sean mutuamente coherentes.

La hipótesis sería:

```text
individuación de p₁
+
individuación de p₂
+
individuaciones posteriores
        ↓
requieren una única fuente
para impedir determinaciones incompatibles.
```

Esta propiedad sería genuinamente diferencial si la coherencia global sólo pudiera preservarse mediante `RA-I`.

Sin embargo, la necesidad de coherencia no implica la necesidad de una autoridad única.

Lo que debe conservarse es que las determinaciones de identidad utilizadas conjuntamente sean compatibles con los fundamentos y restricciones aplicables.

Si dos resultados establecen incompatiblemente que determinadas ocurrencias son simultáneamente el mismo participante y participantes distintos bajo las mismas condiciones, existe un problema de consistencia de los resultados.

La solución necesaria es impedir o resolver dicha incompatibilidad.

No se deriva de ello que todas las individuaciones deban proceder de una misma autoridad arquitectónica.

Por tanto:

```text
coherencia entre individuaciones
        ⇏
unidad de autoridad RA-I.
```

La coherencia constituye una restricción sobre resultados compatibles, no una demostración de la existencia de `RA-I`.

#### Conservación intercontextual de la identidad

También podría atribuirse implícitamente a `RA-I` la garantía de que un participante conserve el mismo estatuto cuando es utilizado en diferentes articulaciones o cuerpos.

La propiedad legítima sería:

```text
si p es el mismo referente
en contextos compatibles,
su identidad no debe variar
arbitrariamente entre ellos.
```

Esta exigencia es necesaria para la reutilización de participantes.

Pero pertenece a la conservación de la identidad ya establecida y a las restricciones de compatibilidad entre usos.

No exige que una autoridad `RA-I` vuelva a constituir o ratificar `p` cada vez que otro resultado lo utilice.

Tampoco exige que `RA-I` monopolice la conservación posterior del resultado.

Por tanto, la invariancia intercontextual de la identidad conserva contenido legítimo, pero no contenido diferencial de `RA-I`.

#### Composición de individuaciones

Finalmente, debe comprobarse si operaciones complejas sobre participantes podrían exigir `RA-I` por razones composicionales.

Supongamos que múltiples resultados de individuación intervienen conjuntamente en una construcción posterior.

Para que la composición sea válida deben preservarse las identidades y distinciones relevantes.

Pero la composición no introduce una nueva necesidad de autoridad.

Si:

```text
I₁, I₂, ..., Iₙ
```

son determinaciones de individuación legítimas y compatibles, su utilización conjunta exige conservar aquello que cada una establece y las relaciones de compatibilidad entre ellas.

No se obtiene:

```text
composición de individuaciones
        ⇒
RA-I.
```

La composicionalidad conserva restricciones sobre los resultados; no reconstruye una fuente constitutiva común.

#### Búsqueda de una propiedad residual

Tras las pruebas realizadas, el contenido históricamente asociado a `RA-I` puede distribuirse del siguiente modo:

```text
individuación
        → CAN-F1;

soporte individuado
        → CAN-F1 / P-001;

identidad
        → condición conservada de individuación;

reutilización de participantes
        → identidad + conservación;

precedencia respecto de estructura/evolución
        → dependencia relacional;

autoridad
        → no demuestra fuente exclusiva necesaria;

carácter semántico
        → propiedad del contenido, no de una unidad arquitectónica;

constitución
        → no demuestra acto constitutivo autónomo necesario;

independencia
        → sobrevive como irreducibilidad funcional de CAN-F1,
          no como independencia de RA-I;

producción de P
        → asociación histórica sin necesidad reconstructiva demostrada;

coherencia entre individuaciones
        → restricción de compatibilidad;

conservación intercontextual
        → conservación de identidad;

composición
        → conservación y compatibilidad de resultados.
```

No se identifica una propiedad residual que requiera introducir nuevamente:

```text
RA-I
```

como autoridad semántica, constitutiva, independiente y arquitectónicamente diferenciada.

#### Resultado de la prueba

La búsqueda exhaustiva no identifica una cuarta propiedad históricamente atribuible a `RA-I` que posea necesidad arquitectónica independiente.

Las propiedades legítimas encontradas quedan conservadas mediante:

```text
CAN-F1;
P-001;
identidad;
dependencias relacionales;
compatibilidad;
conservación;
restricciones sobre los resultados.
```

Las propiedades que permanecen específicamente asociadas a la forma histórica de `RA-I`:

```text
autoridad diferenciada;
constitución autónoma;
fuente exclusiva de P;
independencia arquitectónica;
```

no han demostrado necesidad independiente.

Por tanto, dentro del corpus y de las propiedades examinadas, el contenido diferencial reconstruible de `RA-I` queda agotado.

No aparece una propiedad residual que obligue a revisar el resultado provisional:

```text
CAN-F1 / P-001
        ⇏
RA-I.
```

La reconstrucción puede pasar a su auditoría final sin mantener abierta una propiedad diferencial conocida de `RA-I`.

### Auditoría final de `RA-I`

Completadas las pruebas de reconstrucción de `RA-I`, se somete el resultado obtenido a una auditoría final destinada a comprobar que su eliminación como autoridad arquitectónica necesaria no proceda de una reducción insuficientemente justificada ni elimine contenido legítimo históricamente asociado a la individuación.

La auditoría aplica seis controles:

```text id="nn3hpa"
fidelidad histórica;
cobertura;
proporcionalidad;
conservación de resultados legítimos;
ausencia de circularidad;
ausencia de reintroducción nominal.
```

#### Fidelidad histórica

La reconstrucción parte de la caracterización históricamente documentada de `RA-I`.

El corpus previo establece `CAN-F1 — Individuación` como función estructural irreducible y utiliza `P-001` como una realización válida de dicha función.

La arquitectura histórica introduce posteriormente:

```text id="e14z97"
RA-I → P
```

y atribuye a `RA-I` el estatuto de autoridad semántica constitutiva asociada a participantes.

La reconstrucción no reduce anticipadamente `RA-I` a la mera capacidad de distinguir mismo y distinto.

También ha examinado las propiedades que podían estar contenidas explícita o implícitamente en su caracterización histórica:

- soporte mediante `P-001`;
- establecimiento o constitución de participantes;
- autoridad;
- carácter semántico;
- independencia;
- producción de `P`;
- precedencia respecto de estructura y evolución;
- coherencia entre individuaciones;
- conservación intercontextual de la identidad;
- composición de resultados de individuación.

Por tanto, la eliminación de `RA-I` no se obtiene a partir de una versión previamente debilitada de la unidad histórica.

La reconstrucción se considera fiel al objeto auditado.

#### Cobertura

Se comprueba que las pruebas realizadas cubren las posibles fuentes identificadas de contenido diferencial de `RA-I`.

La prueba de eliminación conservando `CAN-F1` examinó si la función irreducible de individuación exigía por sí misma la autoridad histórica.

La prueba de soporte mediante `P-001` examinó si la existencia, disponibilidad, reutilización o estatuto de referentes individuados requería una fuente constitutiva diferenciada.

La prueba de precedencia examinó si la dependencia de las articulaciones estructurales y evolutivas respecto de participantes individuados obligaba a reconstruir una precedencia arquitectónica de `RA-I`.

La prueba de exhaustividad examinó además:

```text id="k7u9bg"
autoridad;
semanticidad;
constitución;
independencia;
producción de P;
coherencia;
conservación intercontextual;
composición.
```

No se identifica una propiedad históricamente atribuible a `RA-I`, relevante para su necesidad arquitectónica, que permanezca sin examinar.

La cobertura se considera suficiente dentro del corpus reconstruido.

#### Proporcionalidad

La conclusión debe limitarse a aquello que las pruebas permiten establecer.

La reconstrucción no demuestra que:

```text id="uz5tmm"
la individuación sea prescindible;
```

ni que:

```text id="b83y8a"
P-001 deba eliminarse;
```

ni que:

```text id="n1bdbd"
ninguna arquitectura posible
pueda utilizar una autoridad equivalente a RA-I.
```

Tampoco demuestra que las condiciones de identidad, coherencia o conservación puedan ignorarse.

El resultado es más limitado:

```text id="sxtfbr"
los fundamentos reconstruidos
no obligan a introducir RA-I
como autoridad arquitectónica
autónoma y necesaria.
```

Una realización posterior podría separar la responsabilidad de individuación en un componente específico por razones propias de su diseño o competencia.

Lo que no podría afirmarse sin nueva justificación es que esa separación constituye una consecuencia necesaria del Modelo Conceptual.

La conclusión se considera proporcional a la evidencia obtenida.

#### Conservación de resultados legítimos

La eliminación de `RA-I` debe preservar todo aquello cuya necesidad posea fundamento independiente.

Permanece íntegramente:

```text id="58otdi"
CAN-F1 — Individuación
```

y debe conservarse en cualquier realización válida una capacidad estructuralmente equivalente.

Permanece igualmente `P-001` como realización adoptada por el Modelo Conceptual mientras conserve su justificación independiente.

Se preservan además:

- la distinción entre mismo y distinto;
- la identidad estructural necesaria;
- la disponibilidad de referentes individuados;
- la reutilización legítima de participantes;
- la posibilidad de utilizar participantes en articulaciones estructurales;
- la posibilidad de utilizarlos como referentes comunes en articulaciones evolutivas;
- la coherencia entre determinaciones de identidad;
- la conservación intercontextual de la identidad;
- las restricciones de compatibilidad aplicables;
- la composición legítima de resultados que dependan de participantes individuados.

También permanece la dependencia real:

```text id="6sf50e"
articulación estructural/evolutiva
        ↓
requiere referentes
adecuadamente individuados.
```

Lo que se elimina es únicamente la propiedad adicional:

```text id="7rwik7"
todo este contenido
debe ser producido, constituido
o gobernado necesariamente
por una autoridad autónoma RA-I.
```

No se identifica pérdida de un resultado legítimo derivada de esa eliminación.

La conservación se considera satisfecha.

#### Ausencia de circularidad

Debe comprobarse que la eliminación de `RA-I` no dependa de presuponer previamente su inexistencia.

La reconstrucción no argumenta:

```text id="bc2ic5"
RA-I no es necesaria
porque la arquitectura reconstruida
no contiene RA-I.
```

La conclusión procede de pruebas independientes.

Primero se conserva íntegramente `CAN-F1` y se comprueba si la eliminación de `RA-I` produce alguna pérdida.

Después se conserva `P-001` y se comprueba si su función de soporte exige una autoridad constitutiva.

A continuación se conservan las dependencias reales de estructura y evolución respecto de la individuación y se comprueba si esas dependencias obligan a introducir una precedencia entre autoridades.

Finalmente se buscan propiedades residuales históricamente asociadas a `RA-I`.

Tampoco se utiliza una inferencia de la forma:

```text id="m4ipf8"
p es válido porque RA-I lo constituye;

RA-I es necesaria porque
los p válidos deben ser constituidos por RA-I.
```

La identidad y validez que deban conservarse poseen fundamentos independientes de esa atribución arquitectónica.

No se identifica circularidad necesaria en la reconstrucción.

#### Ausencia de reintroducción nominal

Debe comprobarse finalmente que `RA-I` no haya sido eliminada sólo nominalmente.

La reconstrucción no sustituye:

```text id="9j8y7o"
RA-I
```

por una nueva unidad denominada, por ejemplo:

```text id="a6n1ae"
autoridad de individuación;
fuente de participantes;
constituidor de P;
gestor de identidad;
servicio de individuación;
```

a la que se atribuyan nuevamente las mismas propiedades necesarias.

`CAN-F1` expresa una capacidad funcional irreducible.

`P-001` constituye una realización de esa capacidad.

Las relaciones de identidad, dependencia, conservación y compatibilidad expresan propiedades de los resultados correspondientes.

Ninguna de estas unidades adquiere por ello:

- autoridad arquitectónica exclusiva;
- competencia constitutiva autónoma;
- monopolio sobre la producción de participantes;
- precedencia global sobre otras autoridades;
- independencia arquitectónica derivada únicamente de la irreducibilidad funcional.

Por tanto, la reconstrucción conserva el contenido necesario sin reconstruir silenciosamente `RA-I` bajo otra denominación.

La ausencia de reintroducción nominal se considera satisfecha.

#### Resultado de la auditoría final

Los seis controles resultan superados:

```text id="9agc1c"
Fidelidad histórica                    ✔
Cobertura                              ✔
Proporcionalidad                       ✔
Conservación de resultados legítimos  ✔
Ausencia de circularidad               ✔
Ausencia de reintroducción nominal     ✔
```

La auditoría no identifica una propiedad pendiente que obligue a revisar las pruebas precedentes.

Puede conservarse íntegramente:

```text id="dkmnyy"
CAN-F1;
P-001;
identidad;
individuación;
dependencias respecto de referentes individuados;
compatibilidad;
conservación;
composición legítima.
```

sin conservar como necesaria:

```text id="n4nj6d"
RA-I
```

ni ninguna autoridad arquitectónica equivalente cuya necesidad proceda únicamente de las propiedades históricamente atribuidas a ella.

La reconstrucción confirma, por tanto:

```text id="2g4aqa"
necesidad de individuación
        ⇏
necesidad de RA-I.
```

`RA-I` puede eliminarse como resultado arquitectónico necesario sin eliminar la función, los resultados ni las restricciones legítimas que históricamente motivaron su introducción.

La auditoría final permite cerrar la reconstrucción individual de `RA-I` y pasar a su resultado reconstruido sin mantener abierta ninguna propiedad diferencial conocida.

## 3. Resultado de la reconstrucción

La unidad histórica `RA-I` no queda justificada como resultado
necesario independiente.

La necesidad funcional históricamente asociada a `RA-I` —preservar
la capacidad de individuación— ya queda establecida por
`CAN-F1 — Individuación`.

En la realización adoptada por el Modelo Conceptual, dicha función
queda realizada mediante `P-001`, cuyos términos proporcionan soporte individuado, pueden reutilizarse en articulaciones estructurales y actúan como referente común de articulaciones evolutivas.

La dependencia de la estructura y la evolución respecto de referentes individuados queda expresada por el propio perfil funcional y por el tipado de `MA-001` y `MA-002`.

Las propiedades adicionales atribuidas históricamente a `RA-I` no han demostrado necesidad independiente:

- la existencia de una autoridad semántica diferenciada;
- un acto autónomo de constitución de `P`;
- la independencia de dicha autoridad respecto de otras autoridades
  constitutivas.

No se ha localizado ni reconstruido una dependencia que permita
establecer:

    CAN-F1 / P-001 ⇒ RA-I

ni otro fundamento del Modelo Conceptual que obligue a introducir una autoridad equivalente.

Por tanto, el contenido necesario históricamente asociado a `RA-I` ya queda establecido por resultados del Modelo Conceptual, mientras que su forma como autoridad arquitectónica autónoma no sobrevive a la reconstrucción como necesidad.

Esta conclusión no excluye que una realización posterior pueda adoptar una separación equivalente por razones contingentes o propias de su competencia; establece únicamente que dicha separación no puede presentarse, con los fundamentos examinados, como consecuencia necesaria del Modelo Conceptual.

---

# RA-E

## 1. Justificación histórica

El corpus conceptual previo establece `CAN-F2 — Articulación
estructural` como función estructural irreducible que realiza `ES-002`.

La realización adoptada por el Modelo Conceptual utiliza `MA-001`
como modo de articulación estructural y como realización de `CAN-F2`.

Posteriormente, la arquitectura consolidada introduce `RA-E` como
autoridad semántica perteneciente al plano constitutivo y la representa
mediante:

    RA-E → S

El mismo contexto atribuye al plano constitutivo la constitución de correlaciones estructurales. La correspondencia posicional entre `RA-E → S` y dicha enumeración permite identificar provisionalmente `S` como el resultado estructural históricamente atribuido a `RA-E`.

Esta identificación no establece que:

    S = MA-001

ni que `S` sea necesariamente una instancia de `MA-001`.

Las búsquedas realizadas sobre el corpus vigente y el historial Git no han localizado una definición independiente de `S`, ni una
derivación explícita que establezca:

    CAN-F2 ⇒ RA-E

    MA-001 ⇒ RA-E

o una relación equivalente que demuestre que la necesidad funcional de articulación estructural exige una autoridad semántica constitutiva independiente `RA-E`.

Por tanto, puede reconstruirse históricamente la existencia de
`CAN-F2`, su realización mediante `MA-001` y la posterior atribución a `RA-E` de la constitución de un resultado estructural `S`, pero no la derivación específica que conecta esos niveles.

## 2. Justificación de la reconstrucción

### Eliminación de RA-E conservando CAN-F2

Se elimina provisionalmente `RA-E` manteniendo íntegramente
`CAN-F2 — Articulación estructural`, su irreducibilidad funcional
y la exigencia de que cualquier realización válida preserve una
capacidad estructuralmente equivalente.

La eliminación no produce, con los fundamentos actualmente
disponibles, pérdida de ninguna propiedad necesaria establecida
por `CAN-F2`.

Continúan siendo exigibles la capacidad de expresar organización
estructural entre elementos individuados y las capacidades
reconstructivas que dependen de dicha articulación.

La irreducibilidad de `CAN-F2` demuestra la necesidad de preservar
la función de articulación estructural, pero no demuestra la
necesidad de una autoridad semántica diferenciada encargada de
constituir resultados estructurales.

Por tanto, no queda establecida:

    CAN-F2 ⇒ RA-E

La posible necesidad independiente de constituir o determinar
correlaciones estructurales no queda resuelta por esta prueba y
deberá someterse a examen separado.

### Eliminación de la autoridad constitutiva estructural

Se examinó si la diferencia entre poder expresar una articulación
estructural y establecer una articulación concreta exige una autoridad semántica diferenciada.

La diferencia resulta legítima:

    expresabilidad de una correlación
    ≠
    establecimiento de una correlación

`CAN-F2` exige preservar la capacidad de articulación estructural,
pero no determina por sí sola qué articulaciones concretas quedan
establecidas.

Sin embargo, de esta diferencia no se sigue la necesidad de una
autoridad constitutiva independiente.

Una correlación concreta puede quedar establecida por los fundamentos competentes sin que deba introducirse adicionalmente una autoridad
`RA-E` encargada de constituirla.

Por tanto, no queda establecida:

    determinación de correlaciones estructurales
        ⇒
    autoridad constitutiva diferenciada RA-E

La eliminación de `RA-E` conserva, no obstante, una distinción que
deberá mantenerse durante la reconstrucción:

    capacidad de expresar articulaciones
        ≠
    establecimiento de articulaciones concretas.

### Indeterminación histórica de `S`

La documentación conservada representa:

    RA-E → S

y atribuye al plano constitutivo la constitución de correlaciones
estructurales, pero no define independientemente `S`.

No puede determinarse históricamente si `S` designaba:

1. el modo o forma de articulación estructural; o
2. una correlación estructural concreta producida mediante dicho modo.

La reconstrucción no resuelve retrospectivamente esta indeterminación.

Ambas posibilidades se someten separadamente a prueba.

Si `S` designaba el modo estructural, su necesidad queda cubierta por la realización de `CAN-F2` mediante `MA-001`, sin que se haya demostrado la necesidad adicional de una autoridad constitutiva diferenciada.

Si `S` designaba una correlación estructural concreta, permanece la distinción entre la capacidad de expresar articulaciones y el
establecimiento de una articulación determinada, pero esta distinción no implica por sí misma que dicho establecimiento deba corresponder a una autoridad estructural independiente.

Por tanto, ninguna de las dos interpretaciones históricamente
compatibles de `S` establece hasta ahora la necesidad de `RA-E`.

### Eliminación de la unidad de autoridad estructural

Se examinó si la coherencia entre múltiples determinaciones
estructurales exige que todas ellas procedan de una única fuente
de autoridad.

La necesidad de coherencia no implica unidad de procedencia.

Determinaciones estructurales establecidas a partir de fundamentos
diferentes pueden mantenerse conjuntamente siempre que sean
compatibles bajo los términos de sus respectivos fundamentos.

La aparición de determinaciones incompatibles puede exigir reglas
de compatibilidad, precedencia o resolución, pero no demuestra por
sí misma que todas las determinaciones estructurales deban quedar
bajo una autoridad semántica única.

Por tanto, no queda establecida:

    coherencia de determinaciones estructurales
        ⇒
    unidad de autoridad estructural

ni, en particular:

    coherencia estructural ⇒ RA-E

Sobrevive únicamente la exigencia más débil de que las
determinaciones estructurales que deban mantenerse conjuntamente
sean conjuntamente admisibles.

### Eliminación de RA-E como autoridad de conservación

Se examinó si la estabilidad de las determinaciones estructurales
una vez establecidas exige una autoridad estructural diferenciada
encargada de impedir su modificación por otros cuerpos.

No se identifica tal necesidad.

Si las reglas generales de autoridad preservan el contenido y el
estatus de los resultados frente a cuerpos que carecen de autoridad sobre ellos, dichas reglas protegen igualmente los resultados estructurales.

Un cuerpo puede utilizar como fundamento un resultado establecido
por otro sin adquirir por ello autoridad para modificarlo.

Por tanto, la conservación requiere distinguir:

    uso de un resultado
        ≠
    autoridad sobre el resultado
        ≠
    capacidad de modificar el resultado

pero esta distinción es general y no específicamente estructural.

Tampoco la eventual revisión de una determinación estructural exige por sí misma `RA-E`: deberá realizarse conforme a las reglas generales que gobiernen la autoridad y revisión del resultado correspondiente.

La introducción de una autoridad `RA-E` adicional podría, además,
producir solapamiento entre la autoridad del cuerpo que estableció
el resultado y una supuesta autoridad transversal sobre su contenido estructural, requiriendo nuevas reglas de precedencia que no serían necesarias sin dicha duplicación.

Por tanto, no queda establecida:

    estabilidad de determinaciones estructurales
        ⇒
    autoridad de conservación RA-E.

### Prueba de invariancia intercorporal

Se examinó si las determinaciones estructurales requieren una
autoridad diferenciada que garantice que conserven el mismo contenido y estatus cuando son utilizadas por cuerpos distintos.

La prueba identifica una exigencia real:

    el mero cambio del cuerpo que utiliza un resultado
    no puede alterar su contenido ni su estatus.

Un cuerpo puede utilizar como fundamento un resultado establecido
por otro sin adquirir por ello autoridad para modificarlo o
reinterpretarlo.

Sin embargo, esta propiedad no resulta específicamente estructural.

La misma exigencia permanece cuando el resultado estructural se
sustituye por cualquier otro resultado legítimamente establecido.

Por tanto, la propiedad reconstruible es una invariancia general
de los resultados bajo cambio de usuario, no una invariancia cuya
garantía requiera una autoridad estructural diferenciada.

La eliminación de `RA-E` no impide conservar:

    B₁ establece D
    B₂ utiliza D
    B₃ utiliza D

sin que el contenido o estatus de D varíen por dicho uso.

Por tanto, no queda establecida:

    invariancia intercorporal de resultados estructurales
        ⇒
    RA-E

Sobrevive únicamente una exigencia general de conservación del
resultado frente a su utilización por cuerpos distintos.

### Prueba de composicionalidad

Se examinó el caso en que una determinación estructural no puede
establecerse a partir de un único fundamento, sino únicamente mediante la combinación irreducible de resultados pertenecientes a cuerpos diferentes:

    R₁ ⇏ S
    R₂ ⇏ S

    {R₁,R₂} ⇒ S

La combinación introduce una dependencia nueva que no puede
atribuirse reductivamente a ninguno de sus fundamentos.

Sin embargo, esta propiedad no demuestra la necesidad de una autoridad estructural diferenciada.

Los cuerpos participantes pueden conservar autoridad sobre sus
respectivos resultados mientras una regla general de composición
permite establecer el resultado conjunto sin alterar el contenido
ni el estatus de dichos fundamentos.

El hecho de que la conclusión `S` sea estructural no modifica esta
necesidad. Sustituida `S` por una conclusión no estructural, permanecen los mismos problemas de composición, conservación de fundamentos, autoridad sobre el resultado conjunto y compatibilidad.

Por tanto, la propiedad identificada pertenece a la composición de
resultados procedentes de autoridades diferentes y no específicamente
al carácter estructural de la conclusión.

Tampoco el hecho de que `S` no pertenezca constitutivamente a ninguno de los cuerpos participantes obliga a introducir `RA-E`; únicamente exige que exista un régimen legítimo para establecer resultados conjuntos sin transferir autoridad sobre sus fundamentos.

Por tanto, no queda establecida:

    composición intercorporal
    +
    conclusión estructural
        ⇒
    RA-E

### Exhaustividad del contenido diferencial

Se examinó si permanecía alguna propiedad históricamente atribuible
a `RA-E` que no hubiera sido sometida a reconstrucción.

La unidad histórica combina al menos las nociones de articulación
estructural, constitución de resultados estructurales, autoridad
semántica e independencia.

La articulación estructural queda cubierta por `CAN-F2` y, en la
realización adoptada, por `MA-001`.

La constitución fue examinada tanto bajo la interpretación de `S`
como modo estructural como bajo su interpretación como correlación
concreta. Ninguna interpretación exige una autoridad constitutiva
diferenciada.

La dimensión semántica queda cubierta por la conservación del
contenido y significado de los resultados frente a su utilización
por cuerpos diferentes.

La independencia necesaria identificada es independencia funcional
de `CAN-F2`, no independencia de un titular de autoridad.

Las pruebas adicionales de coherencia, conservación, invariancia
intercorporal y composición tampoco producen una necesidad específica
de `RA-E`.

No se identifica, por tanto, ninguna propiedad histórica diferencial
adicional de `RA-E` pendiente de reconstrucción.

La auditoría muestra, sin embargo, que varias propiedades legítimas
históricamente concentradas bajo `RA-E` sobreviven separadamente,
mientras que su reunión bajo una única autoridad estructural
constitutiva no ha demostrado necesidad.

### Auditoría final de `RA-E`

Completadas las pruebas de reconstrucción de `RA-E`, se somete el resultado obtenido a una auditoría final destinada a comprobar que su eliminación como autoridad semántica constitutiva diferenciada no proceda de una reducción insuficientemente justificada ni elimine contenido legítimo históricamente asociado a la articulación estructural.

La auditoría aplica seis controles:

```text
fidelidad histórica;
cobertura;
proporcionalidad;
conservación de resultados legítimos;
ausencia de circularidad;
ausencia de reintroducción nominal.
```

#### Fidelidad histórica

La reconstrucción parte de la caracterización efectivamente conservada de `RA-E`.

El corpus previo establece:

```text
CAN-F2 — Articulación estructural
```

como función estructural irreducible y utiliza `MA-001` como realización adoptada por el Modelo Conceptual.

La arquitectura histórica introduce posteriormente:

```text
RA-E → S
```

y atribuye al Plano constitutivo la constitución de correlaciones estructurales.

La reconstrucción no presupone retrospectivamente una identidad no documentada entre:

```text
S
```

y:

```text
MA-001.
```

Tampoco resuelve artificialmente la indeterminación histórica de `S`.

Se han conservado y examinado las dos interpretaciones compatibles con la documentación disponible:

```text
S como modo de articulación estructural;
```

y:

```text
S como correlación estructural concreta.
```

Además, la reconstrucción no reduce anticipadamente `RA-E` a `CAN-F2`, sino que examina las propiedades adicionales que podían justificar su existencia independiente:

- establecimiento de determinaciones estructurales;
- autoridad constitutiva;
- unidad de autoridad;
- coherencia entre determinaciones;
- conservación;
- invariancia intercorporal;
- composición;
- independencia.

Por tanto, `RA-E` no ha sido debilitada previamente para facilitar su eliminación.

La reconstrucción se considera fiel al objeto histórico auditado.

#### Cobertura

Las pruebas realizadas cubren las fuentes identificadas de posible contenido diferencial de `RA-E`.

La eliminación de `RA-E` conservando `CAN-F2` examinó si la irreducibilidad funcional de la articulación estructural exigía una autoridad arquitectónica diferenciada.

La eliminación de la autoridad constitutiva examinó la diferencia entre:

```text
expresabilidad
        ≠
establecimiento.
```

La prueba sobre `S` examinó las interpretaciones históricamente compatibles del resultado atribuido a `RA-E`.

La eliminación de la unidad de autoridad examinó si la coherencia entre determinaciones obligaba a concentrar su establecimiento en una única fuente.

La prueba de conservación examinó si los resultados estructurales necesitaban una autoridad específica encargada de proteger su contenido y estatus.

La invariancia intercorporal examinó su estabilidad frente al mero cambio del cuerpo que utiliza el resultado.

La composicionalidad examinó resultados estructurales obtenidos mediante fundamentos pertenecientes a autoridades diferentes.

Finalmente, la exhaustividad examinó conjuntamente:

```text
articulación estructural;
constitución;
semanticidad;
independencia;
coherencia;
conservación;
invariancia;
composición.
```

No se identifica una propiedad históricamente atribuible a `RA-E`, relevante para su necesidad arquitectónica, que permanezca sin examinar.

La cobertura se considera suficiente dentro del corpus reconstruido.

#### Proporcionalidad

La conclusión obtenida debe limitarse a aquello que las pruebas permiten establecer.

La reconstrucción no demuestra que:

```text
CAN-F2
```

sea prescindible.

Tampoco demuestra que:

```text
MA-001
```

deba eliminarse, ni que las determinaciones estructurales puedan carecer de fundamento suficiente.

No elimina la distinción entre expresabilidad y establecimiento.

No elimina las exigencias de coherencia, conservación, invariancia o composición cuando posean fundamento independiente.

Tampoco demuestra que ninguna realización futura pueda introducir un componente especializado en articulación estructural.

La conclusión es más limitada:

```text
los fundamentos reconstruidos
no obligan a reunir
las propiedades estructurales supervivientes
bajo una autoridad semántica
constitutiva e independiente RA-E.
```

Una realización posterior podría introducir una separación equivalente por razones propias de su competencia o diseño.

Lo que no puede afirmarse con los fundamentos reconstruidos es que dicha separación constituya una consecuencia necesaria del Modelo Conceptual.

La conclusión se considera proporcional a la evidencia obtenida.

#### Conservación de resultados legítimos

La eliminación de `RA-E` conserva todo contenido cuya necesidad posee fundamento independiente.

Permanece íntegramente:

```text
CAN-F2 — Articulación estructural
```

y la exigencia de que cualquier realización válida preserve una capacidad estructuralmente equivalente.

Permanece igualmente `MA-001` mientras conserve su justificación independiente como realización adoptada.

Se conserva la distinción:

```text
capacidad de expresar una articulación
        ≠
establecimiento de una articulación concreta.
```

Cuando una determinación concreta deba quedar establecida, permanece la exigencia de fundamento suficiente.

Se conservan además:

- compatibilidad entre resultados que deban mantenerse conjuntamente;
- distinción entre uso, autoridad y modificación;
- distinción entre uso y reinterpretación;
- conservación del contenido y estatus de los resultados;
- invariancia frente al mero cambio del cuerpo que utiliza un resultado;
- posibilidad de composición legítima de fundamentos procedentes de autoridades diferentes;
- preservación de esos fundamentos durante la composición;
- independencia funcional de `CAN-F2`.

La eliminación afecta únicamente a la tesis adicional:

```text
estas propiedades
        ↓
deben pertenecer conjuntamente
        ↓
a una autoridad semántica
constitutiva diferenciada RA-E.
```

No se identifica pérdida de un resultado legítimo como consecuencia de esa eliminación.

La conservación se considera satisfecha.

#### Ausencia de circularidad

La eliminación de `RA-E` no depende de presuponer previamente su inexistencia.

La reconstrucción no argumenta:

```text
RA-E no es necesaria
porque la arquitectura reconstruida
no contiene RA-E.
```

La conclusión procede de pruebas independientes sobre cada propiedad que podía justificarla.

Se conserva primero `CAN-F2` y se comprueba si `RA-E` añade una propiedad necesaria.

Se distingue después expresabilidad de establecimiento y se comprueba si la segunda exige una autoridad constitutiva.

La indeterminación histórica de `S` se conserva en lugar de resolverse mediante la propia hipótesis que se pretende demostrar.

Las exigencias de coherencia, conservación, invariancia y composición se formulan independientemente y después se comprueba si alguna obliga a introducir `RA-E`.

Tampoco se utiliza una inferencia circular de la forma:

```text
S es un resultado estructural válido
porque RA-E lo constituye;

RA-E es necesaria
porque los resultados estructurales válidos
deben ser constituidos por RA-E.
```

El establecimiento de una determinación requiere fundamento suficiente, pero dicho fundamento no presupone `RA-E`.

No se identifica circularidad necesaria en la reconstrucción.

#### Ausencia de reintroducción nominal

La reconstrucción no elimina `RA-E` para sustituirla por otra unidad que reproduzca silenciosamente sus propiedades.

No se introduce una nueva:

```text
autoridad estructural;
fuente estructural;
constituidor de correlaciones;
gestor de estructura;
nivel semántico estructural;
```

a la que se atribuyan automáticamente las competencias históricas de `RA-E`.

`CAN-F2` conserva una capacidad funcional.

`MA-001` conserva una realización.

Los resultados estructurales concretos conservan sus fundamentos.

Las reglas generales de autoridad y conservación preservan el contenido y estatus de los resultados.

Las restricciones de compatibilidad gobiernan la coexistencia de determinaciones cuando corresponda.

Las reglas de composición permiten obtener resultados conjuntos cuando exista fundamento suficiente.

Ninguno de estos elementos adquiere por ello:

- monopolio sobre las determinaciones estructurales;
- autoridad constitutiva transversal;
- competencia exclusiva de conservación;
- identidad colectiva como fuente de todo resultado estructural;
- independencia arquitectónica derivada únicamente de la irreducibilidad de `CAN-F2`.

La reconstrucción conserva, por tanto, las propiedades necesarias mediante unidades y relaciones más débiles sin reconstruir `RA-E` bajo otra denominación.

La ausencia de reintroducción nominal se considera satisfecha.

#### Resultado de la auditoría final

Los seis controles resultan superados:

```text
Fidelidad histórica                    ✔
Cobertura                              ✔
Proporcionalidad                       ✔
Conservación de resultados legítimos  ✔
Ausencia de circularidad               ✔
Ausencia de reintroducción nominal     ✔
```

La auditoría no identifica una propiedad pendiente que obligue a revisar las pruebas precedentes.

Pueden conservarse separadamente:

```text
CAN-F2;
MA-001;
expresabilidad estructural;
establecimiento mediante fundamento suficiente;
compatibilidad;
conservación;
invariancia intercorporal;
composición;
independencia funcional.
```

sin conservar como necesaria:

```text
RA-E.
```

No quedan establecidas implicaciones como:

```text
CAN-F2 ⇒ RA-E

MA-001 ⇒ RA-E

establecimiento estructural ⇒ RA-E

coherencia estructural ⇒ RA-E

conservación estructural ⇒ RA-E

invariancia intercorporal ⇒ RA-E

composición con conclusión estructural ⇒ RA-E.
```

La reconstrucción confirma, por tanto:

```text
necesidad de articulación estructural
        ⇏
necesidad de RA-E.
```

`RA-E` puede eliminarse como autoridad semántica constitutiva diferenciada sin eliminar las capacidades, resultados, fundamentos, garantías o restricciones legítimas históricamente concentradas bajo ella.

Su contenido necesario reconstruible sobrevive distribuido entre resultados y relaciones con fundamento independiente.

La auditoría final permite cerrar la reconstrucción individual de `RA-E` y pasar a su resultado reconstruido sin mantener abierta ninguna propiedad diferencial conocida.

## 3. Resultado de la reconstrucción

La unidad histórica `RA-E` no queda justificada como resultado necesario independiente en su forma de autoridad semántica constitutiva diferenciada.

La reconstrucción muestra, sin embargo, que bajo `RA-E` se encontraban concentradas varias propiedades distintas que no deben eliminarse conjuntamente con su forma arquitectónica histórica.

En consecuencia, `RA-E` no sobrevive como unidad indivisa. Su reconstrucción revela varias propiedades independientes que permiten conservar las necesidades legítimas examinadas sin reunirlas bajo una única autoridad estructural.

### Articulación estructural

La necesidad de disponer de capacidad de articulación estructural queda establecida por:

```text
CAN-F2 — Articulación estructural
```

y, en la realización actualmente adoptada por el Modelo Conceptual, mediante:

```text
MA-001
```

La irreducibilidad de `CAN-F2` exige preservar una capacidad estructuralmente equivalente en cualquier realización válida.

Esta necesidad no implica la existencia de una autoridad semántica diferenciada encargada de constituir resultados estructurales.

Por tanto, no queda establecida:

```text
CAN-F2 ⇒ RA-E
```

### Expresabilidad y establecimiento

La reconstrucción conserva la distinción entre:

```text
capacidad de expresar una articulación estructural
        ≠
establecimiento de una articulación determinada
```

`CAN-F2` exige la primera capacidad, pero no determina por sí sola qué articulaciones concretas quedan establecidas.

Cuando una determinación estructural concreta deba quedar establecida, requerirá fundamento suficiente.

De esta necesidad no se sigue que dicho establecimiento deba realizarse mediante una autoridad estructural diferenciada.

Por tanto, no queda establecida:

```text
establecimiento de una determinación estructural
        ⇒
RA-E
```

### Estatuto histórico de `S`

La documentación conservada representa:

```text
RA-E → S
```

y atribuye al plano constitutivo la constitución de correlaciones estructurales.

No se conserva, sin embargo, una definición independiente de `S` que permita determinar si designaba:

- el modo de articulación estructural; o
- una correlación estructural concreta.

La reconstrucción no resuelve retrospectivamente esta indeterminación.

Si `S` designaba el modo estructural, su necesidad queda cubierta por `CAN-F2` y, en la realización adoptada, por `MA-001`.

Si `S` designaba una correlación concreta, su establecimiento requiere fundamento suficiente, pero no queda demostrada la necesidad de una autoridad estructural independiente encargada de constituirla.

Ninguna de las dos interpretaciones históricamente compatibles establece, por tanto, la necesidad de `RA-E`.

### Coherencia entre determinaciones

Las determinaciones estructurales que deban mantenerse conjuntamente pueden estar sometidas a exigencias de compatibilidad.

Sin embargo:

```text
coherencia de las determinaciones
        ≠
unidad de la autoridad que las establece
```

Resultados estructurales procedentes de fundamentos o autoridades diferentes pueden mantenerse conjuntamente siempre que sean compatibles.

La posible existencia de conflictos exige un régimen capaz de tratarlos, pero no demuestra por sí misma que todas las determinaciones estructurales deban proceder de una única autoridad.

Por tanto, no queda establecida:

```text
coherencia estructural ⇒ RA-E
```

### Conservación

Una vez establecido un resultado, su utilización por otro cuerpo no concede a éste autoridad para modificarlo.

La reconstrucción conserva las distinciones:

```text
uso
≠
autoridad
≠
modificación
```

y:

```text
uso
≠
reinterpretación
```

La protección del contenido y del estatus de los resultados constituye una exigencia general y no específicamente estructural.

No se requiere, por tanto, una autoridad `RA-E` encargada de custodiar todas las determinaciones estructurales.

### Invariancia intercorporal

El mero cambio del cuerpo que utiliza un resultado no puede alterar su contenido ni su estatus.

Si:

```text
B₁ establece D

B₂ utiliza D
B₃ utiliza D
```

el resultado `D` debe permanecer conservado respecto de aquello que constituye su contenido y estatus mientras su mera utilización no produzca una revisión legítima.

Esta invariancia tampoco resulta específicamente estructural: permanece válida cuando `D` se sustituye por cualquier otro resultado legítimamente establecido.

Por tanto, no queda establecida:

```text
invariancia intercorporal de resultados estructurales
        ⇒
RA-E
```

### Composición

La reconstrucción contempla también el caso en que una determinación sólo aparece mediante la combinación irreducible de fundamentos pertenecientes a autoridades diferentes:

```text
R₁ ⇏ E
R₂ ⇏ E

{R₁, R₂} ⇒ E
```

La aparición de una dependencia conjunta exige preservar los fundamentos y disponer de un régimen legítimo para establecer el resultado producido por su combinación.

Esta necesidad permanece aunque `E` no sea estructural.

Por tanto, la propiedad reconstruida pertenece a la composición de resultados procedentes de autoridades diferentes y no específicamente al carácter estructural de la conclusión.

No queda establecida:

```text
composición intercorporal
+
conclusión estructural
        ⇒
RA-E
```

### Independencia

La independencia funcional de:

```text
CAN-F2
```

respecto de `CAN-F1` y `CAN-F3` permanece establecida.

Sin embargo:

```text
independencia funcional
        ≠
independencia de una autoridad
```

La irreducibilidad de la función de articulación estructural no exige que dicha función sea poseída o ejercida por un titular de autoridad arquitectónicamente independiente.

### Resultado

La reconstrucción no identifica ninguna propiedad necesaria que obligue a conservar `RA-E` como autoridad semántica constitutiva diferenciada.

No quedan establecidas dependencias como:

```text
CAN-F2 ⇒ RA-E

MA-001 ⇒ RA-E

determinación estructural ⇒ RA-E

coherencia estructural ⇒ RA-E

conservación estructural ⇒ RA-E

invariancia intercorporal ⇒ RA-E

composición con conclusión estructural ⇒ RA-E
```

Sin embargo, la eliminación de `RA-E` no elimina todo el contenido históricamente asociado a ella.

La reconstrucción conserva separadamente:

```text
1. necesidad de articulación estructural;

2. distinción entre expresabilidad y establecimiento;

3. necesidad de fundamento suficiente para las
   determinaciones que deban quedar establecidas;

4. compatibilidad de resultados que deban mantenerse
   conjuntamente;

5. conservación del contenido y estatus de resultados
   frente a su utilización por otros cuerpos;

6. invariancia del resultado frente al mero cambio
   del cuerpo que lo utiliza;

7. posibilidad de composición entre resultados
   procedentes de autoridades diferentes sin alterar
   sus fundamentos;

8. independencia funcional de la articulación estructural.
```

Estas propiedades no quedan justificadas como competencias de una única autoridad estructural. Su fundamento y autoridad deberán determinarse separadamente conforme a los resultados que las establecen.

Por tanto, `RA-E` no sobrevive a la reconstrucción como resultado autónomo ni como unidad indivisa.

Su contenido necesario reconstruible se descompone en resultados independientes, mientras que su reunión histórica bajo una única autoridad semántica constitutiva no ha demostrado necesidad.

Esta conclusión no excluye que una realización posterior pueda introducir una separación o componente equivalente por razones propias de su competencia. Establece únicamente que, con los fundamentos examinados, dicha separación no puede presentarse como consecuencia necesaria del Modelo Conceptual.

---

# RA-V

## 1. Justificación histórica

`RA-V` aparece históricamente en la arquitectura del núcleo como una de
las tres autoridades semánticas del denominado plano constitutivo:

    RA-I → P
    RA-E → S
    RA-V → V

El mismo documento atribuye al plano constitutivo la constitución de:

- participantes;
- correlaciones estructurales;
- diferencias orientadas.

Por correspondencia posicional, `RA-V → V` aparece asociada históricamente a la constitución de diferencias orientadas.

Sin embargo, las búsquedas realizadas sobre el corpus vigente y el
historial Git no han localizado una definición independiente de `V`, ni una derivación explícita que establezca la necesidad de `RA-V`.

La denominación `RA-V` aparece por primera vez en la reorganización documental que introduce la arquitectura de Engineering.

El Conceptual Model anterior sí establece independientemente una función
de articulación evolutiva:

    CAN-F3 — Articulación evolutiva

y adopta como realización:

    MA-002

caracterizada como un modo de articulación evolutiva relativo a un único participante y dos ocupaciones ordenadas.

La relación establecida por el Conceptual Model es:

    ES-003
        ↓
    CAN-F3
        ↓
    MA-002 con soporte formal O

Las auditorías del Conceptual Model consideran `CAN-F3` funcionalmente irreducible respecto de las restantes funciones del perfil.

No se ha localizado, sin embargo, una derivación histórica que establezca:

    CAN-F3 ⇒ RA-V

ni:

    MA-002 ⇒ RA-V

ni:

    V = CAN-F3

ni:

    V = MA-002.

Tampoco puede determinarse únicamente a partir de la expresión
`RA-V → V` si `V` designaba:

1. el modo de articulación evolutiva;
2. una diferencia orientada concreta;
3. algún resultado evolutivo de otra naturaleza.

Por tanto, la reconstrucción deberá conservar esta indeterminación y someter separadamente a prueba las propiedades históricamente recuperables, sin atribuir retrospectivamente a `V` una definición que el corpus conservado no proporciona.

## 2. Justificación de la reconstrucción

### Eliminación de RA-V respecto de CAN-F3

Se examinó si la eliminación de `RA-V`, conservando íntegramente
`CAN-F3` y exigiendo que cualquier realización preserve una capacidad
estructuralmente equivalente de articulación evolutiva, provoca alguna
pérdida necesaria.

No se identifica tal pérdida.

`CAN-F3` conserva la exigencia de poder expresar diferencias
compatibles con la continuidad estructural de un mismo elemento y
permanece funcionalmente irreducible respecto de las restantes
funciones del perfil.

La eliminación de una autoridad `RA-V` no elimina, por tanto, la
función de articulación evolutiva ni su independencia funcional.

No queda establecida:

    CAN-F3 ⇒ RA-V

ni:

    irreducibilidad de CAN-F3
        ⇒
    independencia de una autoridad RA-V

La evidencia histórica disponible tampoco establece una propiedad
adicional atribuible a `RA-V` que resulte necesaria y que `CAN-F3`
no pueda ya exigir por sí misma.

Esta prueba no resuelve todavía si debe distinguirse entre la
capacidad de expresar diferencias evolutivas y el establecimiento
de una diferencia evolutiva concreta.

### Expresabilidad y establecimiento de diferencias orientadas

Se examinó si la diferencia entre poder expresar una articulación
evolutiva y establecer una diferencia orientada concreta exige una
autoridad constitutiva diferenciada `RA-V`.

La diferencia resulta legítima:

    expresabilidad de V(p,o₁,o₂)
        ≠
    establecimiento de V(p,o₁,o₂)

`CAN-F3` exige preservar la capacidad de articulación evolutiva,
pero no determina por sí sola qué articulaciones concretas quedan
establecidas.

Cuando una diferencia orientada concreta deba quedar establecida,
su establecimiento requerirá fundamento suficiente.

La orientación tampoco demuestra la necesidad de `RA-V`.

Si la orientación pertenece a la forma de articulación, queda
preservada por el modo mediante el que se realiza `CAN-F3`.

Si la orientación de una instancia concreta debe determinarse,
dicha determinación deberá quedar sustentada por los fundamentos
pertinentes.

La referencia de la articulación evolutiva a un único participante
tampoco exige una autoridad evolutiva diferenciada. La identidad
del participante queda presupuestada por la capacidad de
individuación y debe conservarse durante la articulación.

Por tanto, no quedan establecidas:

    establecimiento de V(p,o₁,o₂)
        ⇒
    RA-V

ni:

    orientación de V(p,o₁,o₂)
        ⇒
    RA-V

ni:

    continuidad del participante en V(p,o₁,o₂)
        ⇒
    RA-V

Sobrevive la distinción entre capacidad de expresar articulaciones
evolutivas y establecimiento de articulaciones concretas, así como
la necesidad de fundamento suficiente para estas últimas, pero
ninguna de estas propiedades demuestra por sí misma la necesidad
de una autoridad constitutiva diferenciada `RA-V`.

### Prueba de continuidad del participante

Se examinó si la afirmación de que dos ocupaciones ordenadas `o₁` y
`o₂` corresponden al mismo participante `p` constituye un resultado
adicional de continuidad irreducible respecto de `CAN-F1` y `CAN-F3`
que pudiera justificar históricamente `RA-V`.

`CAN-F1` resulta necesario para preservar la individuación del
participante, pero no basta por sí solo para expresar diferencia
evolutiva.

`CAN-F3` resulta necesario para articular evolutivamente ocupaciones
ordenadas y, en la realización adoptada mediante `MA-002`, dicha
articulación es relativa a un único participante.

La concurrencia de ambas capacidades permite reconstruir:

    individuación de p
        +
    articulación evolutiva de o₁ y o₂ respecto de p
        ↓
    continuidad del mismo participante a través de la diferencia

La aparición de este resultado compuesto no demuestra una tercera
función irreducible de continuidad.

Eliminada una supuesta función adicional, la capacidad permanece
reconstruible mediante la individuación y la articulación evolutiva ya aceptadas.

Tampoco existe evidencia histórica localizada que atribuya
específicamente a `RA-V` la constitución o certificación de la
continuidad del participante.

Por tanto, no quedan establecidas:

    continuidad del participante
        ⇒
    función fundamental adicional

ni:

    continuidad del participante
        ⇒
    RA-V.

La continuidad aparece, con los fundamentos actualmente disponibles, como resultado reconstruible de la interacción entre individuación y articulación evolutiva, no como propiedad diferencial de una autoridad constitutiva `RA-V`.

### Prueba de orientación

Se examinó si el carácter orientado de una articulación evolutiva
constituye una propiedad independiente de `CAN-F3` que pudiera
justificar la existencia de `RA-V`.

La orientación no puede eliminarse sin pérdida.

Una articulación entre dos ocupaciones consideradas únicamente como
un conjunto no ordenado:

    {o₁,o₂}

no conserva la misma información que una articulación relativa a
ocupaciones ordenadas:

    (o₁,o₂)

La realización adoptada mediante `MA-002` incorpora ya esta
distinción al caracterizar la articulación evolutiva respecto de
un único participante y dos ocupaciones ordenadas.

Por tanto, la capacidad de expresar orientación pertenece a la
capacidad que una realización de `CAN-F3` debe preservar.

Debe distinguirse, sin embargo, entre:

    capacidad de expresar una articulación orientada
        ≠
    establecimiento de la orientación de una instancia concreta.

La primera queda cubierta por `CAN-F3` y por la forma adoptada
mediante `MA-002`.

La segunda requiere fundamento suficiente para establecer por qué
una instancia adopta:

    MA-002(p,o₁,o₂)

y no:

    MA-002(p,o₂,o₁).

Esta necesidad de fundamento no demuestra una función independiente
de orientación ni una autoridad constitutiva diferenciada.

Eliminadas ambas y conservados `CAN-F3`, una realización capaz de
preservar el orden de las ocupaciones y fundamentos suficientes para
las instancias concretas, no se identifica ninguna pérdida adicional.

Tampoco se deriva del carácter orientado, sin fundamento adicional,
una semántica temporal, causal o irreversible.

Por tanto, no quedan establecidas:

    orientación
        ⇒
    función fundamental independiente

ni:

    orientación
        ⇒
    RA-V.

La orientación sobrevive como propiedad necesaria de la articulación
evolutiva, no como propiedad diferencial de una autoridad `RA-V`.

### Prueba de dependencia entre continuidad y orientación

Se examinó si la concurrencia de continuidad del participante y
orientación de la diferencia produce una propiedad irreducible que
no pueda reconstruirse mediante las capacidades ya aceptadas y que
pudiera justificar `RA-V`.

La reconstrucción requiere simultáneamente:

    individuación del participante
        +
    articulación evolutiva
        +
    orden de las ocupaciones.

La eliminación de la individuación impide preservar que la diferencia
corresponda al mismo participante.

La eliminación de la articulación evolutiva impide expresar la
diferencia como evolución.

La eliminación del orden impide preservar la orientación.

Cada propiedad realiza, por tanto, un trabajo necesario.

Sin embargo, reunidas:

    CAN-F1
        +
    CAN-F3 / MA-002
        +
    orden incorporado a la articulación
        ↓
    diferencia orientada del mismo participante

no se identifica una propiedad adicional necesaria para obtener la estructura resultante.

Postular una función adicional cuya única responsabilidad consistiera en reunir estas condiciones reificaría su concurrencia sin añadir contenido diferencial demostrado.

La necesidad de que los fundamentos utilizados conjuntamente sean
compatibles tampoco resulta específicamente evolutiva y no exige una autoridad especializada.

Por tanto, no quedan establecidas:

    continuidad + orientación
        ⇒
    función fundamental adicional

ni:

    continuidad + orientación
        ⇒
    RA-V.

Incluso bajo la interpretación posible de `V` como una diferencia
orientada concreta de un mismo participante, su contenido resulta
reconstruible mediante las capacidades ya aceptadas.

Esta reconstrucción no establece retrospectivamente que `V` tuviera necesariamente dicho significado histórico.

### Conservación de identidad a través de una cadena evolutiva

Se examinó si la composición de múltiples articulaciones evolutivas
introduce una necesidad global de conservación de identidad que no
pueda reconstruirse mediante las capacidades ya aceptadas y que
pudiera justificar `RA-V`.

La validez local de cada articulación no basta por sí sola para
establecer una evolución compuesta de un único participante.

Una cadena:

    MA-002(p₁,o₁,o₂)
    MA-002(p₂,o₂,o₃)
    ...
    MA-002(pₙ,oₙ,oₙ₊₁)

sólo puede reconstruirse como evolución de un mismo participante
cuando las individuaciones implicadas resultan compatibles.

Existe, por tanto, una exigencia global de conservación de identidad
durante la composición.

Sin embargo, dicha exigencia no introduce una nueva constitución de
identidad.

Cuando todas las articulaciones están referidas al mismo participante:

    MA-002(p,o₁,o₂)
    MA-002(p,o₂,o₃)
    ...
    MA-002(p,oₙ₋₁,oₙ)

la continuidad global puede reconstruirse conservando durante la
composición la individuación ya establecida de `p`.

Si los fundamentos dejan de permitir dicha identidad, la composición
no puede conservarla legítimamente y la cadena deberá reconstruirse
conforme a aquello que los fundamentos permitan establecer.

La propiedad global descubierta es, por tanto, conservativa:

    composición evolutiva
        ⇒
    conservación de la identidad establecida
    en sus fundamentos

y no constitutiva:

    composición evolutiva
        ⇏
    nueva constitución de identidad.

No se identifica una función irreducible adicional encargada de
mantener globalmente la identidad ni una necesidad de autoridad
evolutiva diferenciada.

Por tanto, no quedan establecidas:

    cadena evolutiva
        ⇒
    función independiente de conservación de identidad

ni:

    conservación global de identidad
        ⇒
    RA-V.

La identidad a través de una evolución compuesta resulta
reconstruible mediante individuación, articulación evolutiva y
composición conservativa de sus fundamentos.

### Exhaustividad del contenido diferencial

Se examinó si permanecía alguna propiedad históricamente atribuible
a `RA-V` que no hubiera sido sometida a reconstrucción.

La evidencia histórica conservada atribuye a `RA-V` la relación:

    RA-V → V

y sitúa dicha autoridad en un plano encargado de constituir
diferencias orientadas.

La reconstrucción ha examinado separadamente las propiedades que
podrían justificar esa unidad histórica:

- necesidad de articulación evolutiva;
- diferencia;
- orientación;
- continuidad del participante;
- dependencia conjunta entre continuidad y orientación;
- conservación de identidad a través de cadenas evolutivas;
- constitución;
- conservación semántica;
- independencia.

La articulación evolutiva queda cubierta por `CAN-F3` y, en la
realización adoptada, por `MA-002`.

La orientación resulta necesaria, pero pertenece a la capacidad que la realización de `CAN-F3` debe preservar y no demuestra una función fundamental adicional.

La continuidad del participante resulta reconstruible mediante la
concurrencia de individuación y articulación evolutiva.

La combinación de continuidad y orientación tampoco introduce un
residuo funcional independiente.

La composición de varias articulaciones evolutivas introduce una
exigencia global de conservación de la identidad, pero dicha exigencia es conservativa respecto de los fundamentos y no constituye nuevamente la identidad del participante.

Las dimensiones constitutiva, semántica e independiente no producen una necesidad adicional de autoridad: la constitución especializada no ha demostrado irreducibilidad, la conservación semántica puede expresarse mediante reglas generales y la independencia necesaria permanece funcional, no institucional.

La indeterminación histórica del significado exacto de `V` tampoco impide esta conclusión: las interpretaciones relevantes compatibles con la evidencia han sido sometidas separadamente a prueba y ninguna exige una autoridad constitutiva diferenciada.

No se identifica, por tanto, ninguna propiedad diferencial pendiente de reconstrucción que pueda justificar `RA-V` como resultado necesario autónomo.

### Auditoría final de `RA-V`

Completadas las pruebas de reconstrucción de `RA-V`, se somete el resultado obtenido a una auditoría final destinada a comprobar que su eliminación como autoridad semántica constitutiva diferenciada no proceda de una reducción insuficientemente justificada ni elimine contenido legítimo históricamente asociado a la articulación evolutiva.

La auditoría aplica seis controles:

```text
fidelidad histórica;
cobertura;
proporcionalidad;
conservación de resultados legítimos;
ausencia de circularidad;
ausencia de reintroducción nominal.
```

#### Fidelidad histórica

La reconstrucción parte de la caracterización históricamente atribuida a `RA-V` y no de una versión previamente debilitada de ella.

El corpus establece:

```text
CAN-F3 — Articulación evolutiva
```

como capacidad funcional necesaria y utiliza `MA-002` como realización adoptada por el Modelo Conceptual.

La arquitectura histórica introduce posteriormente `RA-V` como autoridad diferenciada asociada a la constitución de diferencias evolutivas orientadas.

La reconstrucción no identifica anticipadamente `RA-V` con `CAN-F3`, sino que examina las propiedades adicionales que podían justificar su necesidad independiente.

En particular, se han considerado:

- articulación evolutiva;
- expresabilidad y establecimiento de diferencias orientadas;
- continuidad del participante;
- orientación;
- dependencia entre continuidad y orientación;
- conservación de identidad a través de cadenas evolutivas;
- constitución;
- conservación semántica;
- independencia.

La reconstrucción conserva además la distinción entre la capacidad de expresar:

```text
V(p,o₁,o₂)
```

y el establecimiento de que esa diferencia orientada efectivamente se da.

Por tanto, la eliminación de `RA-V` no se obtiene reduciendo previamente toda su competencia histórica a mera expresabilidad formal.

La reconstrucción se considera fiel al objeto auditado.

#### Cobertura

Las pruebas realizadas cubren las fuentes identificadas de posible contenido diferencial de `RA-V`.

La eliminación de `RA-V` respecto de `CAN-F3` examinó si la capacidad irreducible de articulación evolutiva exigía por sí misma una autoridad arquitectónica diferenciada.

La prueba de expresabilidad y establecimiento examinó si afirmar efectivamente una diferencia orientada requería una autoridad constitutiva independiente.

La prueba de continuidad examinó qué permite afirmar que ocupaciones diferentes corresponden al mismo participante.

La prueba de orientación aisló la asimetría propia de una diferencia evolutiva y comprobó si constituía una competencia independiente de la propia articulación.

La prueba de dependencia entre continuidad y orientación examinó si su combinación generaba una propiedad adicional irreducible.

La prueba sobre cadenas evolutivas examinó si la conservación de identidad a través de composiciones sucesivas exigía `RA-V` como garante común.

Finalmente, la exhaustividad buscó contenido residual asociado a:

```text
articulación evolutiva;
orientación;
continuidad;
combinación continuidad-orientación;
composición evolutiva;
constitución;
semanticidad;
independencia.
```

No se identifica una propiedad históricamente atribuible a `RA-V`, relevante para su necesidad arquitectónica, que permanezca sin examinar.

La cobertura se considera suficiente dentro del corpus reconstruido.

#### Proporcionalidad

La conclusión debe limitarse a aquello que las pruebas permiten establecer.

La reconstrucción no demuestra que:

```text
CAN-F3
```

sea prescindible.

Tampoco elimina `MA-002` mientras conserve fundamento independiente como realización válida de la articulación evolutiva.

No elimina la orientación.

No elimina la necesidad de distinguir entre expresabilidad y establecimiento.

No elimina la continuidad del participante cuando ésta sea necesaria para afirmar que diferentes ocupaciones corresponden al mismo referente.

No elimina la conservación de identidad a través de cadenas evolutivas ni las restricciones necesarias para que una composición de diferencias sea válida.

Tampoco demuestra que ninguna realización posterior pueda utilizar un componente especializado para tratar resultados evolutivos.

La conclusión es más limitada:

```text
los fundamentos reconstruidos
no obligan a reunir
las propiedades evolutivas supervivientes
bajo una autoridad semántica
constitutiva e independiente RA-V.
```

Una realización posterior podría introducir una separación equivalente por razones contingentes o propias de su competencia.

Lo que no puede presentarse, con los fundamentos reconstruidos, es esa separación como consecuencia necesaria del Modelo Conceptual.

La conclusión se considera proporcional a la evidencia obtenida.

#### Conservación de resultados legítimos

La eliminación de `RA-V` debe preservar todo resultado cuya necesidad posea fundamento independiente.

Permanece íntegramente:

```text
CAN-F3 — Articulación evolutiva
```

y la exigencia de que cualquier realización válida preserve una capacidad funcionalmente equivalente.

Permanece igualmente `MA-002` mientras conserve su justificación independiente.

Se preserva la orientación como propiedad necesaria de la articulación evolutiva cuando el orden entre las ocupaciones forma parte del resultado.

Se conserva la diferencia entre:

```text
poder expresar V(p,o₁,o₂)
```

y:

```text
establecer que V(p,o₁,o₂)
efectivamente se da.
```

El establecimiento continúa requiriendo fundamento suficiente, pero ese fundamento no queda identificado necesariamente con `RA-V`.

Se conserva también la continuidad del participante.

Cuando `o₁` y `o₂` se articulan como ocupaciones de un mismo `p`, debe preservarse el fundamento que permite tratarlas como correspondientes al mismo participante.

Esta propiedad no queda absorbida exclusivamente por `CAN-F3`, sino reconstruida mediante la interacción de la individuación preservada por `CAN-F1` con la articulación evolutiva de `CAN-F3`.

Se conservan además:

- la dependencia legítima entre continuidad y articulación;
- la orientación de las diferencias evolutivas;
- la compatibilidad entre continuidad y orientación;
- la identidad del participante a través de cadenas evolutivas;
- la composición conservativa de resultados evolutivos;
- las condiciones generales de conservación semántica;
- la independencia funcional de `CAN-F3`.

Lo que se elimina es únicamente la tesis adicional:

```text
estas propiedades
        ↓
deben ser constituidas,
reunidas o conservadas
        ↓
por una autoridad autónoma RA-V.
```

No se identifica pérdida de un resultado legítimo derivada de esa eliminación.

La conservación se considera satisfecha.

#### Ausencia de circularidad

Debe comprobarse que la eliminación de `RA-V` no dependa de presuponer previamente su inexistencia.

La reconstrucción no argumenta:

```text
RA-V no es necesaria
porque la arquitectura reconstruida
no contiene RA-V.
```

La conclusión procede de la eliminación sucesiva de las posibles propiedades que podían justificarla.

Se conserva primero `CAN-F3` y se comprueba si la articulación evolutiva exige `RA-V`.

Después se distingue expresabilidad de establecimiento y se comprueba si el segundo requiere una autoridad constitutiva diferenciada.

La continuidad del participante se examina independientemente de `RA-V`.

La orientación se aísla y se prueba como propiedad de la articulación evolutiva.

Posteriormente se estudia si continuidad y orientación generan conjuntamente un residuo adicional.

La conservación de identidad a través de cadenas evolutivas se prueba mediante composición sin presuponer una autoridad común.

Finalmente se examinan constitución, semanticidad e independencia como posibles propiedades residuales.

Tampoco se utiliza una inferencia de la forma:

```text
V(p,o₁,o₂) es válida
porque RA-V la constituye;

RA-V es necesaria
porque toda V válida
debe ser constituida por RA-V.
```

El establecimiento de una diferencia evolutiva requiere fundamento suficiente, pero la necesidad de ese fundamento se formula independientemente de `RA-V`.

No se identifica circularidad necesaria en la reconstrucción.

#### Ausencia de reintroducción nominal

Debe comprobarse finalmente que `RA-V` no haya sido eliminada sólo nominalmente.

La reconstrucción no introduce una nueva unidad denominada, por ejemplo:

```text
autoridad evolutiva;
constituidor de diferencias;
gestor de continuidad;
autoridad de transición;
fuente de V;
nivel semántico evolutivo;
```

a la que se atribuyan nuevamente las propiedades históricas de `RA-V`.

`CAN-F3` conserva una capacidad funcional.

`MA-002` conserva una realización de dicha capacidad.

`CAN-F1` conserva la individuación necesaria para reconocer el participante cuando corresponda.

La orientación permanece como propiedad de determinadas articulaciones evolutivas.

La continuidad se expresa mediante las relaciones necesarias entre individuación y articulación.

Las cadenas evolutivas conservan identidad mediante composición y restricciones de compatibilidad.

Las condiciones generales de fundamento y conservación preservan el contenido y estatus de los resultados.

Ninguno de estos elementos adquiere por ello:

- monopolio sobre el establecimiento de diferencias evolutivas;
- autoridad constitutiva transversal;
- competencia exclusiva sobre la continuidad;
- competencia exclusiva de conservación;
- identidad colectiva como fuente de todo resultado evolutivo;
- independencia arquitectónica derivada únicamente de la irreducibilidad funcional de `CAN-F3`.

La reconstrucción conserva, por tanto, las propiedades necesarias sin reconstruir silenciosamente `RA-V` bajo otra denominación.

La ausencia de reintroducción nominal se considera satisfecha.

#### Resultado de la auditoría final

Podemos cerrar la auditoría de RA-V con una conclusión fuerte:

```text
RA-V
│
├─ articulación evolutiva ───────→ CAN-F3
│                                  ↓
│                                  MA-002
│
├─ orientación ─────────────────→ propiedad preservada
│                                 por la articulación evolutiva
│
├─ continuidad ─────────────────→ CAN-F1 + CAN-F3
│
├─ continuidad + orientación ───→ sin residuo adicional
│
├─ cadenas evolutivas ──────────→ composición conservativa
│                                 de identidad
│
├─ constitución ────────────────→ sin función residual propia
│
├─ semántica ──────────────────→ conservación general
│
└─ independencia ──────────────→ independencia funcional,
                                  no institucional
```

No queda una propiedad necesaria residual cuya explicación requiera:

```text
RA-V
```

Los seis controles resultan superados:

```text
Fidelidad histórica                    ✔
Cobertura                              ✔
Proporcionalidad                       ✔
Conservación de resultados legítimos  ✔
Ausencia de circularidad               ✔
Ausencia de reintroducción nominal     ✔
```

La auditoría no identifica una propiedad pendiente que obligue a revisar las pruebas precedentes.

Puede conservarse íntegramente:

```text
CAN-F1;
CAN-F3;
MA-002;
orientación;
continuidad del participante;
establecimiento mediante fundamento suficiente;
conservación de identidad;
composición evolutiva;
conservación semántica;
independencia funcional.
```

sin conservar como necesaria:

```text
RA-V.
```

No quedan establecidas implicaciones como:

```text
CAN-F3 ⇒ RA-V

MA-002 ⇒ RA-V

orientación ⇒ RA-V

continuidad ⇒ RA-V

continuidad + orientación ⇒ RA-V

conservación de identidad ⇒ RA-V

composición evolutiva ⇒ RA-V.
```

La reconstrucción confirma, por tanto:

```text
necesidad de articulación evolutiva
        ⇏
necesidad de RA-V.
```

`RA-V` puede eliminarse como autoridad semántica constitutiva diferenciada sin eliminar las capacidades, resultados, fundamentos, garantías o restricciones legítimas históricamente concentradas bajo ella.

Su contenido necesario reconstruible sobrevive distribuido entre resultados y relaciones con fundamento independiente.

La auditoría final permite cerrar la reconstrucción individual de `RA-V` sin mantener abierta ninguna propiedad diferencial conocida.

## 3. Resultado de la reconstrucción

La unidad histórica `RA-V` no queda justificada como resultado necesario independiente en su forma de autoridad semántica constitutiva diferenciada.

La reconstrucción muestra, sin embargo, que las necesidades examinadas en torno a `RA-V` contienen propiedades evolutivas legítimas que deben conservarse aunque no requieran su reunión bajo una autoridad autónoma.

En consecuencia, `RA-V` no sobrevive como unidad indivisa. Su reconstrucción revela varias propiedades independientes que permiten conservar las necesidades legítimas examinadas sin postular una autoridad evolutiva diferenciada.

### Articulación evolutiva

La necesidad de disponer de capacidad de articulación evolutiva queda establecida por:

```text
CAN-F3 — Articulación evolutiva
```

y, en la realización actualmente adoptada por el Modelo Conceptual, mediante:

```text
MA-002
```

con el soporte formal correspondiente.

La irreducibilidad de `CAN-F3` exige preservar una capacidad estructuralmente equivalente en cualquier realización válida.

Esta necesidad no implica la existencia de una autoridad semántica diferenciada encargada de constituir resultados evolutivos.

Por tanto, no queda establecida:

```text
CAN-F3 ⇒ RA-V
```

ni:

```text
irreducibilidad de CAN-F3
        ⇒
independencia de una autoridad RA-V
```

### Expresabilidad y establecimiento

La reconstrucción conserva la distinción entre:

```text
capacidad de expresar una articulación evolutiva
        ≠
establecimiento de una articulación evolutiva concreta
```

`CAN-F3` exige la primera capacidad, pero no determina por sí sola qué diferencias evolutivas concretas quedan establecidas.

Cuando una articulación concreta deba quedar establecida, requerirá fundamento suficiente.

De esta necesidad no se sigue que dicho establecimiento deba realizarse mediante una autoridad evolutiva diferenciada.

Por tanto, no queda establecida:

```text
establecimiento de V(p,o₁,o₂)
        ⇒
RA-V
```

### Estatuto histórico de `V`

La documentación histórica conservada representa:

```text
RA-V → V
```

y atribuye al plano constitutivo la constitución de diferencias orientadas.

No se conserva, sin embargo, una definición independiente de `V` que permita determinar inequívocamente si designaba:

- el modo de articulación evolutiva;
- una diferencia orientada concreta;
- una diferencia orientada de un mismo participante;
- una evolución compuesta;
- u otro resultado evolutivo.

La reconstrucción no resuelve retrospectivamente esta indeterminación.

Las interpretaciones relevantes compatibles con la evidencia han sido sometidas separadamente a prueba y ninguna ha demostrado la necesidad de una autoridad `RA-V`.

### Orientación

La orientación constituye una propiedad necesaria de la articulación evolutiva.

Una articulación entre ocupaciones consideradas únicamente como conjunto no ordenado:

```text
{o₁,o₂}
```

no conserva la misma información que una articulación sobre ocupaciones ordenadas:

```text
(o₁,o₂)
```

La realización mediante `MA-002` incorpora esta distinción al articular evolutivamente un único participante respecto de dos ocupaciones ordenadas.

Debe distinguirse, sin embargo, entre:

```text
capacidad de expresar orientación
        ≠
orientación establecida de una instancia concreta
```

La primera pertenece a la capacidad que una realización de `CAN-F3` debe preservar.

La segunda requiere fundamento suficiente para establecer por qué corresponde:

```text
MA-002(p,o₁,o₂)
```

y no:

```text
MA-002(p,o₂,o₁)
```

La necesidad de orientación no demuestra una función fundamental adicional ni una autoridad constitutiva diferenciada.

Tampoco se deriva de la mera orientación, sin fundamento independiente, una semántica temporal, causal o irreversible.

Por tanto, no queda establecida:

```text
orientación ⇒ RA-V
```

### Continuidad del participante

La afirmación de que dos ocupaciones evolutivamente articuladas corresponden al mismo participante no constituye una función fundamental adicional.

La reconstrucción requiere la concurrencia de:

```text
CAN-F1 — Individuación
        +
CAN-F3 — Articulación evolutiva
```

La individuación permite conservar `p` como mismo referente.

La articulación evolutiva permite expresar diferencias entre ocupaciones ordenadas relativas a dicho participante.

Por tanto:

```text
individuación de p
        +
articulación evolutiva de o₁ y o₂ respecto de p
        ↓
continuidad del mismo participante a través de la diferencia
```

La continuidad aparece así como resultado reconstruible de la interacción entre capacidades ya aceptadas.

No queda establecida:

```text
continuidad del participante
        ⇒
función fundamental adicional
```

ni:

```text
continuidad del participante
        ⇒
RA-V
```

### Dependencia entre continuidad y orientación

Se examinó también si la concurrencia de continuidad y orientación produce un contenido irreducible adicional.

La reconstrucción exige simultáneamente:

```text
individuación del participante
        +
articulación evolutiva
        +
orden de las ocupaciones
```

Cada propiedad realiza un trabajo necesario.

Sin embargo, su reunión permite reconstruir:

```text
CAN-F1
        +
CAN-F3 / MA-002
        +
orden incorporado a la articulación
        ↓
diferencia orientada del mismo participante
```

sin identificar una propiedad residual adicional.

Postular una función cuya única responsabilidad consistiera en reunir estas condiciones reificaría su concurrencia sin aportar contenido diferencial demostrado.

Por tanto, no quedan establecidas:

```text
continuidad + orientación
        ⇒
función fundamental adicional
```

ni:

```text
continuidad + orientación
        ⇒
RA-V
```

### Conservación de identidad en composiciones evolutivas

La reconstrucción distingue entre:

```text
validez local de articulaciones evolutivas
        ≠
componibilidad global como evolución
del mismo participante
```

Una cadena:

```text
o₁ → o₂ → o₃ → ... → oₙ
```

sólo puede reconstruirse como evolución de un mismo participante cuando las individuaciones implicadas son compatibles.

Existe, por tanto, una exigencia global de conservación de identidad durante la composición.

Esta exigencia es conservativa:

```text
composición evolutiva
        ⇒
conservación de la identidad establecida
en sus fundamentos
```

y no constitutiva:

```text
composición evolutiva
        ⇏
nueva constitución de identidad
```

Cuando los fundamentos dejan de permitir conservar la identidad del participante, la composición tampoco puede mantenerla legítimamente.

No se identifica una función irreducible adicional encargada de constituir o certificar globalmente dicha identidad.

Por tanto, no quedan establecidas:

```text
cadena evolutiva
        ⇒
función independiente de conservación de identidad
```

ni:

```text
conservación global de identidad
        ⇒
RA-V
```

### Constitución

La reconstrucción no identifica una función constitutiva adicional que deba atribuirse a `RA-V`.

La necesidad del modo de articulación evolutiva queda cubierta por `CAN-F3` y su realización.

El establecimiento de instancias concretas requiere fundamento suficiente.

La continuidad del participante resulta reconstruible mediante individuación y articulación evolutiva.

La conservación de identidad a través de composiciones evolutivas preserva una identidad previamente establecida, pero no la constituye nuevamente.

Por tanto:

```text
necesidad de articulación evolutiva
        ⇏
necesidad de una autoridad constitutiva RA-V
```

### Conservación semántica

Una vez establecido un resultado evolutivo, su utilización por otro cuerpo no concede a éste autoridad para modificar su contenido o su estatus.

La reconstrucción conserva:

```text
uso
≠
autoridad
≠
modificación
```

y:

```text
uso
≠
reinterpretación
```

Esta conservación no resulta específicamente evolutiva.

No se requiere, por tanto, una autoridad `RA-V` encargada de custodiar semánticamente todos los resultados evolutivos.

### Independencia

La independencia funcional de:

```text
CAN-F3
```

respecto de las restantes funciones del perfil permanece establecida.

Sin embargo:

```text
independencia funcional
        ≠
independencia de una autoridad
```

La irreducibilidad de la articulación evolutiva no exige que dicha función sea poseída o ejercida por un titular de autoridad arquitectónicamente independiente.

### Resultado

La reconstrucción no identifica ninguna propiedad necesaria que obligue a conservar `RA-V` como autoridad semántica constitutiva diferenciada.

No quedan establecidas dependencias como:

```text
CAN-F3 ⇒ RA-V

MA-002 ⇒ RA-V

establecimiento de una diferencia orientada ⇒ RA-V

orientación ⇒ RA-V

continuidad del participante ⇒ RA-V

continuidad + orientación ⇒ RA-V

conservación global de identidad ⇒ RA-V

independencia funcional de CAN-F3 ⇒ RA-V
```

La eliminación de `RA-V` no elimina, sin embargo, las propiedades evolutivas legítimas establecidas durante la reconstrucción.

Permanecen justificadas, según sus respectivos fundamentos:

```text
1. la necesidad de articulación evolutiva;

2. la irreducibilidad funcional de CAN-F3;

3. la distinción entre expresabilidad y establecimiento
   de articulaciones evolutivas concretas;

4. la necesidad de fundamento suficiente para establecer
   instancias concretas;

5. la orientación como propiedad que la articulación
   evolutiva debe preservar;

6. la continuidad del participante como resultado
   reconstruible de individuación y articulación evolutiva;

7. la ausencia de un residuo funcional adicional al
   combinar continuidad y orientación;

8. la distinción entre validez evolutiva local y
   componibilidad evolutiva global;

9. la conservación de la identidad establecida durante
   la composición de articulaciones evolutivas;

10. la conservación del contenido y estatus de los
    resultados frente a su utilización posterior.
```

Estas propiedades no quedan justificadas como competencias de una única autoridad evolutiva. Su fundamento y autoridad deberán determinarse separadamente conforme a los resultados que las establezcan.

Por tanto, `RA-V` no sobrevive a la reconstrucción como resultado autónomo ni como unidad indivisa.

Su reconstrucción revela propiedades evolutivas necesarias y propiedades generales de conservación que pueden mantenerse sin reunirlas bajo una autoridad semántica constitutiva `RA-V`.

Esta conclusión no establece que una autoridad equivalente sea imposible ni prohíbe que una realización posterior introduzca una separación semejante por fundamentos propios.

Establece únicamente que, con los fundamentos históricos y reconstructivos examinados, la existencia de `RA-V` no puede derivarse como consecuencia necesaria del Modelo Conceptual.
