# Reconstrucción del esquema arquitectónico

## 1. Justificación histórica

La arquitectura histórica del núcleo fue organizada mediante cuatro planos:

```text
Plano constitutivo
        │
        ▼
Plano derivativo
        │
        ▼
Plano normativo
        │
        ▼
Plano realizativo
```

El esquema distinguía cuatro familias generales de responsabilidades.

El Plano constitutivo agrupaba las autoridades semánticas históricamente denominadas:

```text
RA-I
RA-E
RA-V
```

y les atribuía la constitución de:

- participantes;
- correlaciones estructurales;
- diferencias orientadas.

El Plano derivativo agrupaba operaciones que producían resultados objetivos a partir de resultados previamente disponibles, distinguiendo entre unidades derivadas y consecuencias derivadas.

Entre sus operaciones se encontraban:

```text
Componer-E
Componer-V
Reconstruir
Derivar-C
```

El Plano normativo agrupaba principios, obligaciones, contratos y restricciones destinados a gobernar la actuación de autoridades, operaciones derivadas y mecanismos de realización.

El Plano realizativo agrupaba mecanismos responsables de implementar las responsabilidades establecidas por los demás planos sin introducir contenido semántico propio.

La arquitectura histórica presentaba los cuatro planos como complementarios y sostenía que cada uno realizaba responsabilidades diferentes sin sustituir a los demás.

Asimismo, representaba entre ellos una organización general:

```text
constitutivo
        ↓
derivativo
        ↓
normativo
        ↓
realizativo
```

La reconstrucción individual del antiguo Plano constitutivo ha concluido que éste no sobrevive como categoría, subsistema, nivel o unidad arquitectónica necesaria.

Los resultados legítimos históricamente asociados a dicho plano permanecen conservados mediante sus fundamentos, dependencias y restricciones correspondientes.

Este resultado modifica uno de los componentes del esquema histórico, pero no permite inferir por sí solo la eliminación, conservación o reformulación de la arquitectura conjunta de cuatro planos.

La estructura completa debe, por tanto, someterse a una auditoría independiente.

---

## 2. Justificación de la reconstrucción

### Objeto de la auditoría

La presente auditoría no examina todavía por separado la necesidad del:

- Plano derivativo;
- Plano normativo;
- Plano realizativo.

Tampoco reabre la reconstrucción individual del antiguo Plano constitutivo.

Su objeto es exclusivamente la estructura conjunta:

```text
Constitutivo
        ↓
Derivativo
        ↓
Normativo
        ↓
Realizativo
```

considerada como posible organización arquitectónica necesaria.

La pregunta reconstructiva es:

> Si eliminamos la organización del núcleo en cuatro planos, pero conservamos íntegramente todos los resultados legítimos, responsabilidades, dependencias, restricciones y mecanismos cuya necesidad pueda demostrarse independientemente, ¿se pierde alguna propiedad que sólo pueda ser preservada mediante la existencia del esquema conjunto de cuatro planos?

La auditoría no presupone que la respuesta sea negativa.

La eliminación individual del antiguo Plano constitutivo no demuestra que la estratificación completa carezca de contenido propio.

Podría existir una propiedad global de la arquitectura que no apareciera al examinar aisladamente ninguno de sus componentes.

---

### Hipótesis de reconstrucción

Se somete a falsación la siguiente hipótesis:

```text
H-4P

El antiguo esquema de cuatro planos posee
al menos una propiedad arquitectónica necesaria
que no puede reducirse a los resultados,
responsabilidades, dependencias y restricciones
de sus componentes.
```

Si `H-4P` resiste, deberá identificarse explícitamente la propiedad irreducible que obliga a conservar alguna forma del esquema global.

Si no resiste, la organización en cuatro planos no podrá considerarse una consecuencia necesaria de los fundamentos reconstruidos, aunque algunos de sus componentes o distinciones puedan sobrevivir independientemente.

---

### Restricción metodológica

La auditoría deberá distinguir en todo momento entre:

```text
necesidad de una responsabilidad
```

y:

```text
necesidad del plano que históricamente
agrupaba esa responsabilidad.
```

Asimismo deberá distinguir entre:

```text
diferencia entre relaciones o competencias
```

y:

```text
necesidad de convertir esa diferencia
en estratos arquitectónicos.
```

La existencia de responsabilidades diferentes no demostrará por sí sola la necesidad de planos diferentes.

La existencia de dependencias dirigidas tampoco demostrará por sí sola una ordenación global entre planos.

Finalmente, la utilidad documental, explicativa o implementativa de una arquitectura por capas no constituirá evidencia suficiente de su necesidad conceptual.

---

### Fundamento reconstructivo inicial

La reconstrucción parte del resultado ya establecido para el antiguo Plano constitutivo:

```text
Plano constitutivo como unidad necesaria
        ✗

resultados legítimos
        ✓

funciones irreducibles
        ✓

fundamentos y dependencias
        ✓

restricciones sobre las relaciones
        ✓
```

Este resultado se utilizará únicamente como fundamento ya reconstruido.

No se inferirá de él:

```text
Plano derivativo innecesario
Plano normativo innecesario
Plano realizativo innecesario
```

ni tampoco:

```text
esquema completo innecesario.
```

Cada una de esas afirmaciones requerirá sus propias pruebas.

---

### Programa de pruebas

La reconstrucción del esquema completo deberá comprobar, al menos, las siguientes propiedades candidatas.

#### 1. Necesidad de estratificación

Comprobar si las responsabilidades del núcleo necesitan distribuirse en niveles arquitectónicos distintos o si sus diferencias pueden conservarse mediante competencias y relaciones sin estratificación global.

#### 2. Orden global

Comprobar si existe realmente una relación necesaria:

```text
Constitutivo
    ↓
Derivativo
    ↓
Normativo
    ↓
Realizativo
```

o si las dependencias efectivas forman un orden parcial que no coincide necesariamente con esa cadena.

#### 3. Separación de competencias

Comprobar si la distinción entre constituir, derivar, gobernar y realizar exige cuatro clases arquitectónicas o si basta con conservar las restricciones que impiden la transferencia ilegítima de competencias.

#### 4. Dependencia entre planos

Comprobar si las dependencias históricamente atribuidas a los planos son propiedades de los propios planos o proyecciones de dependencias existentes entre resultados, reglas, operaciones y mecanismos concretos.

#### 5. Exhaustividad de la partición

Comprobar si todo elemento legítimo del núcleo puede y debe clasificarse necesariamente en exactamente uno de los cuatro planos.

Deberá comprobarse especialmente la posibilidad de resultados o responsabilidades que:

- desempeñen más de uno de los papeles históricos;
- no encajen inequívocamente en ninguno;
- cambien de papel según la relación considerada.

#### 6. Exclusividad

Comprobar si los cuatro planos forman clases necesariamente disjuntas o si la aparente exclusividad procede de convertir papeles relativos en categorías absolutas.

#### 7. Clausura

Comprobar si cada plano posee un criterio independiente de pertenencia y una clausura propia que permita determinar dónde debe situarse cualquier nuevo resultado o responsabilidad.

#### 8. Completitud global

Comprobar si la unión de los cuatro planos constituye una arquitectura completa por razones independientes o si su completitud fue asumida a partir de la clasificación histórica.

#### 9. Propiedad emergente del conjunto

Comprobar específicamente si la combinación de los cuatro planos produce alguna propiedad necesaria que no pueda obtenerse conservando separadamente sus responsabilidades y relaciones.

Esta prueba será decisiva, puesto que constituye la razón principal para auditar el esquema completo antes de completar las auditorías individuales restantes.

#### 10. Sustitución relacional

Intentar eliminar completamente los planos y conservar únicamente:

```text
resultados
responsabilidades
operaciones
normas
mecanismos
```

junto con relaciones tales como:

```text
fundamenta
depende de
deriva de
gobierna
restringe
realiza
utiliza
conserva
```

y comprobar si aparece alguna pérdida necesaria.

#### 11. Reintroducción encubierta

Si la sustitución resulta posible, comprobar que expresiones como:

```text
nivel semántico
nivel derivativo
sistema normativo
capa realizativa
arquitectura de responsabilidades
```

no estén reconstruyendo silenciosamente los mismos cuatro planos bajo nuevas denominaciones.

#### 12. Contraejemplo arquitectónico

Intentar construir una realización hipotética que preserve todas las responsabilidades y restricciones legítimas del núcleo pero no utilice la partición histórica en cuatro planos.

Si dicha realización resulta conceptualmente válida, la necesidad del esquema quedará debilitada.

Si resulta imposible, deberá identificarse exactamente qué propiedad necesaria provoca su fracaso.

#### 13. Exhaustividad del contenido diferencial

Una vez realizadas las pruebas anteriores, comprobar si queda alguna propiedad históricamente atribuible al esquema completo —y no a alguno de sus planos por separado— que no haya sido sometida a reconstrucción.

---

### Criterio de supervivencia

El antiguo esquema de cuatro planos sólo sobrevivirá como estructura arquitectónica necesaria si puede identificarse al menos una propiedad `Q` tal que:

```text
Q es necesaria para realizar fielmente la teoría

y

Q no puede conservarse eliminando
la organización en cuatro planos.
```

No será suficiente demostrar que:

- los cuatro planos son descriptivamente útiles;
- facilitan la documentación;
- proporcionan una arquitectura comprensible;
- coinciden con una implementación conveniente;
- las responsabilidades que históricamente contenían siguen siendo necesarias.

Deberá demostrarse la necesidad de la **estructura conjunta**.

---

### Criterio de eliminación

El esquema podrá eliminarse como estructura necesaria si todas las propiedades legítimas que históricamente expresaba pueden conservarse mediante resultados, responsabilidades, relaciones y restricciones independientemente justificadas.

En tal caso, la eliminación del esquema no implicará automáticamente la eliminación de sus antiguos componentes.

Cada componente restante deberá conservarse, reformularse, dividirse, fusionarse o eliminarse exclusivamente conforme a su propia reconstrucción.

---

### Estado inicial de la reconstrucción

**Reconstrucción abierta.**

La necesidad del antiguo esquema arquitectónico de cuatro planos permanece indeterminada.

No se presupone su supervivencia, eliminación, reducción ni sustitución.

---

### Prueba de necesidad de estratificación

Se examinó si las diferencias existentes entre las responsabilidades históricamente agrupadas bajo los planos constitutivo, derivativo, normativo y realizativo exigen necesariamente que la arquitectura del núcleo se organice mediante estratos diferenciados.

La prueba elimina inicialmente las categorías:

```text
constitutivo
derivativo
normativo
realizativo
```

pero conserva íntegramente:

- los resultados legítimamente establecidos;
- las responsabilidades necesarias;
- las operaciones;
- las normas y restricciones;
- los mecanismos de realización;
- los fundamentos;
- las dependencias;
- las relaciones de conservación;
- las restricciones de competencia.

La pregunta es:

> Si se conservan íntegramente estas diferencias y relaciones, ¿se pierde alguna propiedad necesaria por no organizarlas en planos arquitectónicos?

#### Diferencia de responsabilidades

La reconstrucción debe conservar diferencias reales entre actividades como:

```text
fundamentar
derivar
gobernar
realizar
```

La existencia de estas diferencias no demuestra por sí misma:

```text
responsabilidades diferentes
        ⇒
estratos arquitectónicos diferentes
```

Las responsabilidades pueden mantenerse diferenciadas mediante sus propias condiciones de competencia y las relaciones que establecen con otros resultados.

Por ejemplo:

```text
R₁ fundamenta R₂

R₂ deriva de R₁

N gobierna R₂

M realiza R₂
```

permite distinguir cuatro relaciones sin necesidad de introducir previamente cuatro niveles que las contengan.

La diferencia semántica reside en las relaciones y en las restricciones que gobiernan cada una de ellas.

#### Separación de competencias

La eliminación de los planos tampoco obliga a fusionar competencias.

Puede conservarse:

```text
derivar
    ≠
gobernar

gobernar
    ≠
realizar

realizar
    ≠
redefinir

utilizar un fundamento
    ≠
adquirir autoridad sobre él
```

sin convertir cada competencia en una clase arquitectónica autónoma.

Por tanto:

```text
separación de competencias
        ⇏
separación en estratos
```

La estratificación constituye una posible representación de esas diferencias, pero su necesidad requiere una justificación adicional.

#### Dependencias

La existencia de dependencias dirigidas tampoco establece por sí misma una arquitectura estratificada.

Una relación:

```text
R₁ ──fundamenta──▶ R₂
```

establece una dirección justificativa entre dos resultados.

No establece necesariamente:

```text
Nivel A
   ↓
Nivel B
```

como propiedad global de la arquitectura.

Para obtener una estratificación sería necesario demostrar que las dependencias particulares inducen clases estables de elementos y que entre dichas clases existe un orden global independiente de las propias relaciones particulares.

Esa demostración no puede presuponerse.

#### Dependencias cruzadas

La representación mediante relaciones permite además que un mismo resultado participe de diferentes posiciones según la relación considerada.

Por ejemplo:

```text
R₁ ──fundamenta──▶ R₂ ──fundamenta──▶ R₃
```

En este caso `R₂` es simultáneamente:

```text
derivado respecto de R₁
```

y:

```text
fundamento respecto de R₃.
```

La existencia de este tipo de situación muestra que los papeles relacionales no determinan automáticamente clases arquitectónicas disjuntas.

Una estratificación sólo sería necesaria si pudiera demostrarse que, pese a estas relaciones relativas, existe alguna propiedad adicional que obliga a asignar cada resultado o responsabilidad a un nivel determinado.

#### Prueba de eliminación

Se elimina ahora toda referencia a planos:

```text
Plano constitutivo
Plano derivativo
Plano normativo
Plano realizativo
```

y se conservan exclusivamente los elementos y relaciones cuya necesidad pueda justificarse independientemente.

La arquitectura resultante puede expresar:

```text
qué resultados existen;

qué resultados fundamentan otros;

qué resultados derivan de otros;

qué normas gobiernan determinados resultados u operaciones;

qué mecanismos realizan determinadas responsabilidades;

qué contenidos deben conservarse;

qué competencias no pueden transferirse;

qué dependencias están permitidas o prohibidas.
```

No se identifica en esta eliminación una pérdida necesaria derivada exclusivamente de la ausencia de estratos.

Las diferencias entre responsabilidades permanecen expresables.

Las dependencias permanecen dirigidas.

Las restricciones de competencia permanecen vigentes.

Las condiciones de conservación permanecen disponibles.

#### Intento de reconstrucción de los estratos

La prueba puede invertirse.

Partiendo exclusivamente de:

```text
resultados
responsabilidades
relaciones
restricciones
```

se intenta reconstruir necesariamente:

```text
constitutivo
derivativo
normativo
realizativo.
```

Para que la reconstrucción fuese obligatoria tendría que existir un criterio independiente capaz de determinar:

```text
qué pertenece a cada estrato;
por qué pertenece a él;
por qué no puede pertenecer a otro;
por qué los estratos deben existir como unidades;
por qué las relaciones entre ellos deben establecerse a nivel de estrato.
```

La mera diferencia entre fundamentar, derivar, gobernar y realizar no proporciona todavía ese criterio.

Describe competencias diferentes, pero no demuestra que dichas competencias deban reificarse como niveles arquitectónicos.

#### Resultado de la prueba

No queda establecida:

```text
diferenciación de responsabilidades
        ⇒
estratificación arquitectónica
```

ni:

```text
dependencias dirigidas
        ⇒
niveles arquitectónicos
```

ni:

```text
separación de competencias
        ⇒
partición del núcleo en planos.
```

Eliminadas las categorías de plano y conservados los resultados, responsabilidades, relaciones y restricciones independientemente justificadas, no se identifica en esta prueba ninguna pérdida necesaria.

La estratificación histórica puede representar una forma de organizar dichas diferencias, pero su necesidad no se deriva de la mera existencia de las responsabilidades que organiza.

Por tanto, la necesidad de una arquitectura estratificada no queda reconstruida mediante los fundamentos examinados en esta prueba.

Este resultado no demuestra todavía que el antiguo esquema completo de cuatro planos sea eliminable.

Permanece abierta la posibilidad de que una propiedad posterior —por ejemplo un orden global, una condición de separación, una clausura, una propiedad emergente o alguna restricción sistémica— obligue a recuperar alguna forma de estratificación.

---

### Prueba de orden global

Se examinó si las dependencias efectivas entre los resultados, operaciones, normas y mecanismos históricamente distribuidos entre los cuatro planos obligan a reconstruir el orden arquitectónico:

```text
constitutivo
        ↓
derivativo
        ↓
normativo
        ↓
realizativo
```

La prueba no presupone la necesidad de los cuatro planos como unidades.

Pregunta exclusivamente si las dependencias conservadas inducen necesariamente un orden global equivalente al representado históricamente mediante ellos.

#### Distinción entre dependencia local y orden global

Una dependencia concreta puede establecer:

```text
R₁ ──fundamenta──▶ R₂
```

o:

```text
R₂ ──es gobernado por──▶ N
```

o:

```text
M ──realiza──▶ R₂
```

Cada relación posee una dirección determinada.

De ello no se sigue inmediatamente una relación entre clases completas:

```text
Fundamentos
        ↓
Derivados
        ↓
Normas
        ↓
Realizaciones.
```

Para reconstruir un orden global sería necesario demostrar que todas las dependencias relevantes pueden proyectarse sobre una misma relación de precedencia entre cuatro clases estables.

Por tanto:

```text
dirección de relaciones particulares
        ⇏
orden global entre estratos.
```

#### Relación entre fundamento y derivación

Los resultados derivados requieren fundamentos previamente disponibles en el sentido justificativo correspondiente.

Puede existir:

```text
R₁ ──fundamenta──▶ D
```

y, por tanto:

```text
D depende justificativamente de R₁.
```

Esta relación establece una precedencia local:

```text
R₁ ≺ D.
```

Sin embargo, no demuestra:

```text
todo lo constitutivo
        ≺
todo lo derivativo.
```

Además, un resultado derivado puede actuar posteriormente como fundamento:

```text
R₁ ──fundamenta──▶ R₂ ──fundamenta──▶ R₃.
```

`R₂` ocupa entonces posiciones diferentes según la dependencia considerada.

La precedencia pertenece a la relación justificativa concreta y no necesariamente a una clase global del resultado.

#### Relación entre derivación y normatividad

La cadena histórica sitúa:

```text
derivativo
        ↓
normativo.
```

Para que esta precedencia fuese necesaria habría que demostrar que toda norma depende para su contenido de resultados derivados previamente establecidos.

No se obtiene esa conclusión de la mera función de gobernar.

Una norma puede gobernar:

```text
una operación derivativa;
un resultado;
una relación de dependencia;
un mecanismo de realización;
```

sin que ello implique que la norma sea derivada de aquello que gobierna.

Debe distinguirse:

```text
N gobierna D
```

de:

```text
N depende justificativamente de D.
```

La primera relación no implica la segunda.

Del mismo modo, una operación puede estar sometida a una restricción normativa para ser admisible sin que dicha restricción tenga que ser conceptualmente posterior a la operación.

Por tanto, no queda establecida:

```text
derivación
        ≺
normatividad
```

como precedencia global.

#### Relación entre normatividad y realización

La cadena histórica sitúa también:

```text
normativo
        ↓
realizativo.
```

Aquí sí puede existir una dependencia necesaria en casos concretos.

Si un mecanismo `M` debe realizar una responsabilidad `R` bajo una restricción normativa `N`, puede establecerse:

```text
N ──restringe──▶ M
```

y:

```text
M ──realiza──▶ R.
```

En ese caso, la realización válida debe respetar `N`.

Pero esto demuestra:

```text
determinadas realizaciones
dependen normativamente
de determinadas restricciones
```

y no necesariamente:

```text
todo lo normativo
        ≺
todo lo realizativo.
```

Tampoco demuestra que las normas formen un estrato único que deba encontrarse globalmente antes que todos los mecanismos realizativos.

La dependencia permanece específica respecto de aquello que cada norma gobierna.

#### Dependencias que atraviesan la cadena

La representación lineal introduce además una cuestión adicional.

Un mecanismo realizativo puede realizar directamente una responsabilidad cuya justificación no pasa por un resultado derivado concreto:

```text
R ───────────────────────▶ M
      es realizado por
```

Del mismo modo, una norma puede gobernar directamente una responsabilidad o un resultado:

```text
N ──gobierna──▶ R
```

sin necesidad de que la relación atraviese sucesivamente:

```text
constitutivo
        ↓
derivativo
        ↓
normativo
        ↓
realizativo.
```

Por tanto, las dependencias efectivas pueden atravesar las fronteras históricas de los planos.

La cadena lineal no representa necesariamente la topología real de todas las dependencias.

#### Dependencias de naturaleza diferente

Existe además una dificultad más profunda.

Las relaciones:

```text
fundamenta
deriva de
gobierna
restringe
realiza
conserva
```

no son necesariamente instancias de una única relación general de precedencia.

Por ejemplo:

```text
R₁ fundamenta R₂
```

expresa una dependencia justificativa.

Mientras:

```text
N gobierna M
```

expresa una restricción normativa.

Y:

```text
M realiza R
```

expresa una relación realizativa.

Convertir todas ellas en:

```text
A ≺ B
```

puede eliminar precisamente la diferencia semántica que debe conservarse.

Por tanto, antes de construir un orden global habría que demostrar que existe una relación de precedencia común que preserve el significado de todas estas dependencias.

No se identifica tal reducción en los fundamentos actualmente examinados.

#### Prueba de eliminación del orden global

Se elimina ahora la cadena:

```text
constitutivo
        ↓
derivativo
        ↓
normativo
        ↓
realizativo
```

y se conservan todas las dependencias concretas justificadas:

```text
fundamenta
depende de
deriva de
gobierna
restringe
realiza
conserva.
```

La eliminación no impide determinar:

- qué resultado fundamenta otro;
- qué resultado deriva de determinados fundamentos;
- qué norma gobierna una operación, resultado o mecanismo;
- qué mecanismo realiza una responsabilidad;
- qué restricciones debe respetar una realización;
- qué contenidos deben conservarse;
- qué dependencias justificativas poseen precedencia;
- qué relaciones no pueden invertirse sin alterar su significado.

No se identifica una propiedad necesaria adicional que requiera ordenar globalmente todas estas relaciones mediante una única secuencia de planos.

#### Intento de reconstrucción de la cadena

La prueba se invierte finalmente.

Partiendo únicamente de las dependencias efectivas, se intenta reconstruir necesariamente:

```text
constitutivo
        ↓
derivativo
        ↓
normativo
        ↓
realizativo.
```

Para ello sería necesario demostrar simultáneamente que:

1. los elementos pueden agruparse de manera no circular en esas cuatro clases;
2. cada clase ocupa una posición única en el orden;
3. todas las dependencias relevantes respetan la misma dirección entre clases;
4. no existen dependencias legítimas que atraviesen niveles o que no puedan expresarse mediante la cadena;
5. las distintas clases de dependencia pueden proyectarse sobre una única relación de precedencia sin pérdida semántica.

Las dependencias examinadas no permiten establecer estas condiciones.

En particular, gobernar no equivale a depender justificativamente de aquello que se gobierna, realizar no equivale a ser conceptualmente posterior en el mismo sentido en que un derivado depende de sus fundamentos, y un resultado puede actuar como derivado en una relación y como fundamento en otra.

#### Resultado de la prueba

Las dependencias efectivas conservan direcciones necesarias en relaciones concretas, pero no obligan a reconstruir un orden arquitectónico global equivalente a:

```text
constitutivo
        ↓
derivativo
        ↓
normativo
        ↓
realizativo.
```

No queda establecida:

```text
precedencia justificativa local
        ⇒
precedencia arquitectónica global
```

ni:

```text
dirección de relaciones heterogéneas
        ⇒
una única relación de orden
```

ni:

```text
existencia de dependencias entre responsabilidades
        ⇒
cadena lineal entre cuatro planos.
```

Eliminado el orden global y conservadas todas las dependencias concretas, sus direcciones y sus restricciones, no se identifica en esta prueba ninguna pérdida necesaria.

Por tanto, la cadena histórica de cuatro planos no queda reconstruida como consecuencia necesaria de las dependencias actualmente establecidas.

Este resultado no demuestra todavía que todas las separaciones históricamente expresadas mediante los cuatro planos sean reducibles.

Permanece abierta la posibilidad de que determinadas incompatibilidades de competencia obliguen a conservar fronteras arquitectónicas aunque dichas fronteras no formen un orden lineal global.

---

### Prueba de separación de competencias

Se examinó si las diferencias entre las competencias históricamente distribuidas entre los planos constitutivo, derivativo, normativo y realizativo exigen conservar fronteras arquitectónicas entre clases diferenciadas de elementos, incluso si no resulta necesaria una estratificación global ni un orden lineal entre planos.

La prueba conserva todas las diferencias de competencia cuya necesidad pueda justificarse independientemente y elimina inicialmente la hipótesis adicional de que dichas diferencias deban corresponder a fronteras entre planos.

#### Competencias históricamente diferenciadas

El esquema histórico distinguía, en términos generales, competencias relativas a:

```text
constituir
derivar
gobernar
realizar
```

La reconstrucción del antiguo Plano constitutivo ya ha mostrado que la competencia históricamente expresada mediante `constituir` no exige por sí misma autoridades constitutivas diferenciadas ni una unidad arquitectónica denominada Plano constitutivo.

Permanecen, sin embargo, diferencias relevantes entre operaciones como:

```text
fundamentar
derivar
gobernar
restringir
realizar
conservar
```

La cuestión actual no es si estas diferencias existen.

La cuestión es si:

```text
competencias diferentes
        ⇒
fronteras arquitectónicas necesarias.
```

#### Diferencia entre competencia y portador de competencia

Debe distinguirse:

```text
qué puede hacerse
```

de:

```text
qué clase arquitectónica debe hacerlo.
```

Por ejemplo, una restricción puede establecer:

```text
M puede realizar R

M no puede redefinir R.
```

Esto determina la competencia de `M` respecto de `R`.

No determina todavía que `M` deba pertenecer a una clase global denominada:

```text
Plano realizativo.
```

Del mismo modo:

```text
N puede gobernar determinada operación

N no adquiere por ello autoridad
para modificar sus fundamentos.
```

La restricción diferencia competencias sin exigir que `N` pertenezca necesariamente a un Plano normativo autónomo.

Por tanto:

```text
restricción de competencia
        ⇏
clasificación arquitectónica del portador.
```

#### No transferencia de competencia

Existe una propiedad que sí debe conservarse.

El hecho de participar en una relación no concede automáticamente las competencias correspondientes a los demás participantes.

Por ejemplo:

```text
R₁ fundamenta D
```

no implica:

```text
D puede modificar R₁.
```

Asimismo:

```text
N gobierna D
```

no implica:

```text
N puede redefinir los fundamentos de D.
```

Y:

```text
M realiza R
```

no implica:

```text
M puede alterar el contenido de R.
```

Por tanto, sobrevive una restricción general:

```text
participación en una relación
        ⇏
transferencia de competencia.
```

Esta restricción es necesaria para conservar el contenido y estatus de resultados ajenos.

Pero puede formularse directamente sobre las relaciones correspondientes.

No exige todavía fronteras entre planos.

#### Incompatibilidad de competencias

Podría existir una razón más fuerte para mantener separaciones arquitectónicas si determinadas competencias fueran necesariamente incompatibles en un mismo portador.

Por ejemplo, podría postularse:

```text
si X realiza R,
X no puede gobernar R
```

o:

```text
si X deriva D,
X no puede establecer las normas
que gobiernan esa derivación.
```

Sin embargo, la diferencia entre dos competencias no demuestra su incompatibilidad de portador.

Para obtener:

```text
competencia A ≠ competencia B
        ⇒
A y B no pueden ser ejercidas por X
```

se necesita una premisa adicional.

Debe demostrarse que la coexistencia de ambas competencias en un mismo portador provoca necesariamente:

- pérdida de conservación;
- circularidad;
- conflicto de autoridad;
- modificación ilegítima de fundamentos;
- incapacidad de distinguir resultados;
- alguna otra pérdida reconstructiva concreta.

Sin esa demostración, la separación de responsabilidades no puede convertirse automáticamente en separación de componentes.

#### Un mismo portador con competencias diferenciadas

Consideremos un portador hipotético `X` que desempeñe dos competencias:

```text
X deriva D

X realiza R.
```

Mientras las reglas correspondientes permanezcan diferenciadas:

```text
al derivar D,
X debe conservar sus fundamentos;

al realizar R,
X no puede redefinir R;
```

no aparece únicamente por la coexistencia una contradicción necesaria.

Podemos expresar:

```text
competencia(X, derivar, D)

competencia(X, realizar, R)
```

sin inferir:

```text
X pertenece simultáneamente
a dos planos incompatibles.
```

Esto muestra que las competencias pueden atribuirse relacionalmente.

La existencia de varias competencias en un mismo portador no las fusiona.

#### Mismo portador respecto del mismo resultado

Probemos el caso más fuerte.

Supongamos que `X` participa respecto del mismo resultado `R` mediante relaciones diferentes:

```text
X gobierna R

X realiza R.
```

¿Aparece necesariamente una contradicción?

No por la mera concurrencia.

La contradicción surgiría si:

```text
gobernar R
```

concediera a `X` una capacidad incompatible con las restricciones de:

```text
realizar R.
```

Pero entonces la prohibición procedería de la incompatibilidad concreta entre esas competencias, no de la pertenencia a planos distintos.

La forma mínima de la restricción sería:

```text
si competencia A y competencia B
son incompatibles respecto de R,
ningún portador puede ejercer ambas
en las condiciones correspondientes.
```

No necesitamos:

```text
A ∈ Plano A

B ∈ Plano B

Plano A ≠ Plano B.
```

La restricción puede aplicarse directamente.

#### Separación semántica sin separación estructural

Las diferencias entre competencias deben permanecer semánticamente visibles.

No sería válida una reconstrucción que redujera:

```text
fundamenta
deriva
gobierna
realiza
```

a una relación indiferenciada:

```text
relacionado_con.
```

Eso destruiría información necesaria.

Por tanto, la eliminación de fronteras arquitectónicas no implica eliminación de diferencias semánticas.

La reconstrucción debe preservar:

```text
diferenciación semántica
        ✓

restricciones específicas
        ✓

no transferencia de competencia
        ✓
```

sin presuponer:

```text
clases arquitectónicas separadas
        ?
```

#### Competencia exclusiva

Podría sobrevivir todavía una propiedad más fuerte:

```text
determinada competencia sólo puede
ser ejercida por determinados portadores.
```

Esto tampoco reconstruye por sí mismo un plano.

Podemos expresar directamente:

```text
puede_ejercer(X,C)

no_puede_ejercer(Y,C)
```

o mediante las restricciones equivalentes adoptadas por la teoría.

Para reconstruir un plano sería necesario demostrar adicionalmente que todos los portadores de `C`:

1. forman una clase arquitectónica necesaria;
2. poseen un criterio independiente de pertenencia;
3. comparten propiedades adicionales por pertenecer a ella;
4. deben mantenerse separados de todos los portadores de otras competencias.

La exclusividad de una competencia no proporciona por sí sola esas propiedades.

#### Prueba de eliminación

Se eliminan las fronteras:

```text
constitutivo | derivativo | normativo | realizativo
```

y se conservan:

```text
competencias diferenciadas
+
condiciones de ejercicio
+
restricciones de transferencia
+
incompatibilidades efectivamente demostradas
+
obligaciones de conservación.
```

La reconstrucción continúa pudiendo determinar:

- quién puede realizar una operación;
- respecto de qué resultado puede realizarla;
- qué contenido debe conservar;
- qué competencias no obtiene por participar en una relación;
- qué combinaciones de competencias son incompatibles cuando dicha incompatibilidad esté demostrada;
- qué operaciones permanecen semánticamente distintas.

No se identifica una pérdida necesaria provocada exclusivamente por la eliminación de las fronteras entre planos.

#### Intento de reconstrucción de las fronteras

Partiendo únicamente de las competencias y sus restricciones, intentamos reconstruir:

```text
Plano constitutivo
Plano derivativo
Plano normativo
Plano realizativo.
```

Para ello sería necesario demostrar que las competencias inducen necesariamente cuatro clases de portadores:

```text
C₁
C₂
C₃
C₄
```

tales que:

```text
C₁ ∩ C₂ = ∅
C₁ ∩ C₃ = ∅
...
```

y que cada clase posee un criterio propio de pertenencia.

La mera diferencia semántica entre las competencias no establece esas condiciones.

Tampoco la no transferencia de competencia las establece.

Ni siquiera una incompatibilidad concreta entre dos competencias demostraría por sí sola la existencia de cuatro clases globalmente disjuntas.

#### Resultado de la prueba

La reconstrucción conserva una separación necesaria entre determinadas competencias en sentido semántico y normativo.

En particular, permanecen restricciones como:

```text
derivar
        ≠
modificar los fundamentos

gobernar
        ≠
constituir o redefinir lo gobernado

realizar
        ≠
determinar nuevamente el contenido realizado

participar en una relación
        ≠
adquirir las competencias de otros participantes.
```

Sin embargo, no queda establecida:

```text
separación semántica de competencias
        ⇒
separación arquitectónica de portadores
```

ni:

```text
no transferencia de competencia
        ⇒
fronteras entre planos
```

ni:

```text
incompatibilidad local de competencias
        ⇒
partición global del núcleo.
```

Eliminadas las fronteras históricas entre planos y conservadas las competencias, sus condiciones de ejercicio y sus restricciones, no se identifica en esta prueba ninguna pérdida necesaria.

Por tanto, la separación de competencias sobrevive como propiedad reconstructivamente relevante, pero no obliga, con los fundamentos actualmente examinados, a reconstruir los cuatro planos históricos ni clases arquitectónicas equivalentes.

Este resultado no determina todavía si las dependencias históricamente atribuidas a los planos poseen alguna propiedad colectiva propia.

Permanece abierta la posibilidad de que determinadas dependencias entre resultados, operaciones, normas y mecanismos sólo puedan conservarse mediante unidades arquitectónicas diferenciadas.

---

### Prueba de dependencia entre planos

Se examinó si las dependencias históricamente expresadas entre los planos constitutivo, derivativo, normativo y realizativo corresponden a propiedades necesarias de los propios planos o si constituyen una proyección arquitectónica de relaciones que pertenecen primariamente a resultados, operaciones, normas y mecanismos concretos.

La arquitectura histórica formulaba, entre otras, relaciones como:

```text
las operaciones derivadas consumen
resultados previamente constituidos;

las normas gobiernan
autoridades y operaciones;

los mecanismos realizativos implementan
responsabilidades definidas por la arquitectura.
```

Estas afirmaciones pueden interpretarse de dos maneras diferentes.

La interpretación fuerte sostiene:

```text
Plano A depende de Plano B.
```

La interpretación mínima sostiene:

```text
determinados elementos históricamente
clasificados en A mantienen relaciones
con determinados elementos
históricamente clasificados en B.
```

La prueba debe determinar cuál de estas dos estructuras está efectivamente justificada.

#### Dependencia entre resultados y operaciones derivadas

Consideremos una operación derivada `D` que utiliza determinados resultados:

```text
{R₁,...,Rₙ} ──fundamentan──▶ D
```

o, según la naturaleza exacta de la operación:

```text
D deriva E a partir de {R₁,...,Rₙ}.
```

La dependencia necesaria pertenece a `D` respecto de sus fundamentos concretos.

No se sigue de ella:

```text
Plano derivativo
        depende de
Plano constitutivo.
```

Para obtener esta segunda afirmación sería necesario demostrar adicionalmente que:

1. todos los fundamentos relevantes pertenecen necesariamente al Plano constitutivo;
2. todas las operaciones derivadas pertenecen necesariamente al Plano derivativo;
3. la dependencia entre determinados miembros se extiende a los planos como unidades;
4. dicha extensión posee contenido propio no reducible a las relaciones particulares.

La reconstrucción del antiguo Plano constitutivo ya ha mostrado que la primera condición no puede presuponerse.

Además, un resultado derivado puede convertirse posteriormente en fundamento de otra derivación:

```text
R₁ ──fundamenta──▶ R₂
                    │
                    ▼
               fundamenta
                    │
                    ▼
                   R₃
```

Por tanto, la condición de fundamento no coincide necesariamente con la pertenencia a una clase constitutiva.

La relación que sobrevive es:

```text
una operación derivada
depende de sus fundamentos pertinentes
```

y no:

```text
el Plano derivativo
depende del Plano constitutivo.
```

#### Dependencia entre normas y aquello que gobiernan

Consideremos ahora:

```text
N ──gobierna──▶ X
```

donde `X` puede ser:

- un resultado;
- una operación;
- una competencia;
- una relación;
- un mecanismo de realización.

La relación necesaria es específica:

```text
N gobierna X.
```

De ella no se sigue automáticamente:

```text
Plano normativo
        gobierna
Plano constitutivo
```

ni:

```text
Plano normativo
        gobierna
Plano derivativo.
```

La proyección sería válida sólo si la propiedad de gobernar perteneciese al plano como unidad y tuviera como objeto otro plano igualmente considerado como unidad.

No se ha identificado esa necesidad.

Además, `gobernar` no equivale a `depender justificativamente de`.

Puede ocurrir:

```text
N gobierna D
```

sin que:

```text
N derive de D
```

y sin que:

```text
D fundamente N.
```

Por tanto, describir la relación mediante una dependencia genérica entre planos puede incluso ocultar la naturaleza específica de la relación normativa.

Lo que debe conservarse es:

```text
qué norma gobierna qué elemento
y bajo qué restricciones.
```

No una dependencia colectiva entre dos contenedores arquitectónicos.

#### Dependencia entre mecanismos y responsabilidades

Consideremos:

```text
M ──realiza──▶ R
```

La relación establece que el mecanismo `M` realiza una responsabilidad `R` cuyo contenido debe conservar.

De ella puede derivarse una restricción:

```text
M no adquiere por realizar R
autoridad para redefinir R.
```

Pero no se sigue:

```text
Plano realizativo
        depende del
Plano normativo
```

ni tampoco, de forma general:

```text
Plano realizativo
        depende de
todos los planos anteriores.
```

Un mecanismo concreto puede depender simultáneamente de diferentes elementos:

```text
R ────────────────┐
                  │
N ────────────────┼──▶ M
                  │
C ────────────────┘
```

donde:

```text
R = responsabilidad que debe realizar;

N = restricción que debe respetar;

C = contrato o condición aplicable.
```

La dependencia efectiva posee varios fundamentos o condicionantes concretos.

Convertirla en:

```text
Normativo
    ↓
Realizativo
```

elimina información acerca de cuáles son esos fundamentos y qué tipo de relación mantiene cada uno con `M`.

#### Proyección de relaciones al nivel de los planos

Podemos formular ahora el problema general.

Supongamos:

```text
a ∈ A
b ∈ B

a ──r──▶ b
```

La arquitectura histórica puede representar esta situación como:

```text
A ──R──▶ B.
```

Pero la inferencia:

```text
a r b
        ⇒
A R B
```

no es válida por sí sola.

Para que la relación entre clases posea contenido arquitectónico propio debe demostrarse que:

1. `A` y `B` son clases independientemente necesarias;
2. la relación `R` está definida entre las clases y no sólo entre algunos de sus miembros;
3. la relación se conserva de manera suficientemente general entre sus miembros;
4. atribuirla a las clases añade alguna propiedad necesaria que no esté ya contenida en las relaciones particulares.

Sin estas condiciones, la relación entre planos constituye una generalización descriptiva de relaciones locales.

#### Dependencia total frente a dependencia parcial

Existe además una diferencia entre:

```text
algunos elementos de A
dependen de algunos elementos de B
```

y:

```text
A depende de B.
```

La segunda formulación puede sugerir una dependencia total:

```text
∀a ∈ A,
a depende de B
```

o incluso:

```text
∀a ∈ A, ∃b ∈ B:
a depende de b.
```

Las relaciones históricas examinadas no permiten asumir automáticamente ninguna de estas condiciones.

Por ejemplo, una determinada norma puede gobernar una operación derivada mientras otra gobierna directamente un mecanismo realizativo.

Asimismo, un mecanismo puede realizar directamente una responsabilidad que no sea resultado de una operación derivada concreta.

Las dependencias no necesitan respetar uniformemente las fronteras históricas.

#### Dependencias múltiples y cruzadas

La representación por planos puede ocultar además dependencias cruzadas:

```text
R₁ ──fundamenta──▶ D

N₁ ──gobierna────▶ D

N₂ ──restringe───▶ M

R₁ ──debe ser
     conservado por──▶ M

D ──produce──────▶ R₂

R₂ ──fundamenta──▶ D₂
```

Esta estructura no necesita adoptar la forma:

```text
Plano A
   ↓
Plano B
   ↓
Plano C
   ↓
Plano D.
```

Puede representarse directamente como un conjunto de relaciones heterogéneas entre elementos.

La topología relevante pertenece entonces a las dependencias mismas.

#### ¿Existe alguna propiedad emergente de la dependencia entre planos?

Podría sostenerse que, aunque cada relación sea local, su conjunto genera una propiedad colectiva:

```text
el Plano B depende globalmente del Plano A.
```

Para que esta propiedad fuese irreducible tendría que producir alguna consecuencia que no pudiera obtenerse inspeccionando las dependencias concretas.

Por ejemplo, debería permitir derivar legítimamente alguna restricción adicional:

```text
si A cambia, B debe necesariamente cambiar;
```

o:

```text
ningún miembro de B puede existir
sin algún miembro de A;
```

o alguna propiedad equivalente.

No se ha identificado todavía una consecuencia de esta clase que proceda exclusivamente de la relación entre planos y no de las dependencias particulares.

Por tanto, no queda establecida una dependencia colectiva irreducible.

#### Prueba de eliminación

Se eliminan ahora afirmaciones globales como:

```text
Plano derivativo depende del Plano constitutivo;

Plano normativo gobierna
los planos anteriores;

Plano realizativo depende
de los planos anteriores.
```

Se conservan todas las relaciones concretas justificadas:

```text
fundamenta
depende de
deriva de
gobierna
restringe
realiza
conserva.
```

La reconstrucción continúa pudiendo determinar:

- qué fundamentos requiere cada derivación;
- qué resultados produce cada operación;
- qué norma gobierna cada elemento;
- qué restricciones afectan a cada mecanismo;
- qué responsabilidad realiza cada mecanismo;
- qué contenidos debe conservar;
- qué dependencias justificativas o normativas existen;
- qué relaciones pueden o no invertirse.

No se identifica una pérdida necesaria provocada exclusivamente por eliminar las dependencias entre planos como unidades.

#### Intento de reconstrucción de las dependencias entre planos

Partiendo exclusivamente de las relaciones concretas, se intenta reconstruir necesariamente:

```text
Constitutivo ──▶ Derivativo

Normativo ──▶ Constitutivo / Derivativo

Normativo ──▶ Realizativo

otros vínculos globales equivalentes.
```

Para que dicha reconstrucción fuese necesaria habría que demostrar primero la existencia independiente de las clases implicadas y después demostrar que las relaciones particulares inducen una propiedad colectiva entre ellas.

Las pruebas realizadas hasta el momento no permiten establecer ninguna de las dos condiciones.

La dependencia entre elementos concretos permanece suficiente para conservar las propiedades identificadas.

#### Resultado de la prueba

Las dependencias históricamente descritas entre planos pueden reconstruirse mediante relaciones entre los resultados, operaciones, normas, responsabilidades y mecanismos concretos implicados.

No queda establecida:

```text
dependencia entre miembros
        ⇒
dependencia entre las clases
que los contienen
```

ni:

```text
relaciones locales heterogéneas
        ⇒
una relación arquitectónica
entre planos
```

ni:

```text
generalización descriptiva
de dependencias particulares
        ⇒
propiedad colectiva irreducible.
```

La afirmación histórica de que las operaciones derivadas consumen resultados previamente constituidos conserva un contenido legítimo cuando se reconstruye como dependencia de cada operación respecto de sus fundamentos pertinentes.

La afirmación de que las normas gobiernan autoridades y operaciones conserva su contenido cuando se reconstruye mediante relaciones normativas concretas entre normas y aquello que gobiernan.

La afirmación de que los mecanismos realizativos implementan responsabilidades conserva su contenido mediante relaciones concretas de realización y las correspondientes obligaciones de conservación.

No se identifica una propiedad adicional que requiera elevar estas relaciones al nivel de dependencias entre planos.

Por tanto, con los fundamentos actualmente examinados, las dependencias entre los antiguos planos no sobreviven como relaciones arquitectónicas irreducibles.

Sobreviven las dependencias concretas que dichas formulaciones históricas generalizaban.

Este resultado no determina todavía si los cuatro planos constituían una partición exhaustiva del núcleo.

Permanece abierta la posibilidad de que, aunque las relaciones entre planos sean reducibles a relaciones entre sus miembros, todo elemento legítimo deba clasificarse necesariamente en exactamente una de las cuatro categorías históricas.

---

### Prueba de exhaustividad de la partición

Se examinó si las cuatro categorías históricas:

```text
constitutivo
derivativo
normativo
realizativo
```

formaban una clasificación exhaustiva del núcleo, de manera que todo resultado, responsabilidad, operación, norma o mecanismo legítimo debiera quedar necesariamente comprendido en alguna de ellas.

La cuestión no consiste en comprobar si el corpus histórico consiguió distribuir los elementos entonces conocidos entre cuatro apartados.

Debe determinarse si existe un fundamento independiente que obligue a que cualquier elemento legítimo del núcleo, incluidos elementos todavía no considerados, pueda clasificarse mediante esas cuatro categorías sin introducir una categoría adicional ni dejar residuos no clasificables.

#### Forma fuerte de la tesis

La exhaustividad histórica puede representarse mediante:

```text
Núcleo = C ∪ D ∪ N ∪ R
```

donde:

```text
C = elementos constitutivos
D = elementos derivativos
N = elementos normativos
R = elementos realizativos.
```

Para que esta igualdad posea contenido reconstructivo no basta con definir retrospectivamente:

```text
Núcleo := C ∪ D ∪ N ∪ R.
```

Eso haría verdadera la exhaustividad por definición.

Debe existir un criterio independiente de `C`, `D`, `N` y `R` que determine qué pertenece legítimamente al núcleo y permita después comprobar que todos esos elementos quedan cubiertos por las cuatro categorías.

Por tanto, debe distinguirse:

```text
todo lo que hemos clasificado
está en alguna de las cuatro categorías
```

de:

```text
todo lo que puede pertenecer legítimamente al núcleo
debe pertenecer a alguna de las cuatro categorías.
```

Sólo la segunda afirmación establecería exhaustividad arquitectónica.

#### Dependencia respecto de los criterios de pertenencia

La prueba anterior de necesidad de estratificación no identificó un criterio independiente que obligara a reconstruir las cuatro clases.

La reconstrucción del antiguo Plano constitutivo tampoco identificó un criterio independiente de pertenencia a la categoría `constitutivo`.

Esta dificultad afecta directamente a la exhaustividad.

Si no podemos determinar independientemente:

```text
x ∈ C
```

no podemos demostrar simplemente a partir de la clasificación histórica que:

```text
∀x ∈ Núcleo:
x ∈ C ∪ D ∪ N ∪ R.
```

La exhaustividad requiere criterios de clasificación suficientemente independientes para que la prueba no sea circular.

#### Exhaustividad de responsabilidades frente a exhaustividad de planos

Podría existir una tesis más débil:

```text
toda responsabilidad necesaria
puede describirse mediante alguna de las diferencias
históricamente expresadas por los cuatro planos.
```

Incluso si esta afirmación resultara verdadera, no demostraría todavía:

```text
los cuatro planos forman
una partición exhaustiva del núcleo.
```

Una colección de descripciones puede cubrir todos los casos conocidos sin constituir por ello una taxonomía necesaria.

Por ejemplo, un elemento `X` podría participar en relaciones de:

```text
derivación
gobierno
realización
```

sin que sea necesario determinar una propiedad absoluta:

```text
tipo_arquitectónico(X) = derivativo | normativo | realizativo.
```

La cobertura de funciones no equivale a exhaustividad de clases.

#### Posibilidad de elementos definidos por otros papeles

Consideremos un elemento legítimo hipotético `X` cuya responsabilidad consista exclusivamente en preservar una condición de compatibilidad entre determinados resultados.

Podría expresarse:

```text
X garantiza compatibilidad(R₁,R₂).
```

La cuestión no es decidir ahora dónde debe clasificarse `X`.

La cuestión es si los fundamentos reconstruidos obligan a responder necesariamente:

```text
X es constitutivo
o
X es derivativo
o
X es normativo
o
X es realizativo.
```

Podría intentarse clasificarlo como normativo.

Pero esa clasificación necesitaría derivarse de un criterio previamente establecido de `normativo`, no simplemente de la necesidad de introducir `X` en alguna de las cuatro categorías.

Si la clasificación se decide porque:

```text
debe pertenecer a algún plano
```

y sabemos que debe pertenecer a algún plano porque:

```text
los cuatro planos son exhaustivos,
```

la demostración es circular.

#### Resultados con papeles relacionales variables

Las pruebas anteriores han mostrado además que algunos papeles son relativos a relaciones concretas.

Puede existir:

```text
R₁ ──fundamenta──▶ R₂ ──fundamenta──▶ R₃
```

de manera que `R₂` sea:

```text
derivado respecto de R₁
```

y:

```text
fundamento respecto de R₃.
```

Esto no demuestra por sí solo que la partición no sea exhaustiva, pero sí impide utilizar los papeles `fundamento` y `derivado` como criterios globales simples de clasificación.

La exhaustividad de los cuatro planos requeriría criterios adicionales capaces de clasificar casos de esta clase sin depender de la relación concreta considerada.

No se ha identificado todavía tal criterio.

#### Elementos transversales

También pueden existir restricciones cuya aplicación atraviese varias clases históricas.

Por ejemplo:

```text
N gobierna D
N gobierna M
N restringe una relación entre R₁ y R₂.
```

La misma norma puede afectar a operaciones, mecanismos y relaciones diferentes.

Esto no obliga a abandonar la categoría `normativo`, pero muestra que la cobertura arquitectónica no puede inferirse simplemente de una correspondencia:

```text
tipo de objeto
        ↔
plano.
```

La clasificación histórica parece depender en buena medida del papel desempeñado por el elemento.

La exhaustividad de una clasificación basada en papeles debe demostrarse sobre el conjunto de papeles posibles, no sólo sobre los elementos ya conocidos.

#### Posibilidad de una quinta categoría

La prueba más fuerte consiste en preguntar si los fundamentos existentes permiten excluir de antemano:

```text
X ∈ Núcleo

y

X ∉ C
X ∉ D
X ∉ N
X ∉ R.
```

Para excluir esta posibilidad necesitaríamos demostrar que las cuatro categorías agotan todas las formas legítimas de responsabilidad arquitectónica.

No basta con afirmar que hasta ahora no se ha encontrado una quinta clase.

La ausencia histórica de una quinta categoría establece, como máximo:

```text
ningún elemento entonces reconocido
obligó a introducir una quinta categoría.
```

No establece:

```text
ningún elemento legítimo puede
obligar a introducirla.
```

Esta diferencia es equivalente a la existente entre completitud relativa respecto de un catálogo conocido y completitud absoluta de una clasificación.

#### Relación con la completitud funcional

La completitud del perfil funcional:

```text
CAN-F1
CAN-F2
CAN-F3
```

no puede utilizarse directamente para demostrar la exhaustividad de los cuatro planos.

La primera establece, dentro de su alcance, que determinadas capacidades funcionales son suficientes respecto del catálogo fenomenológico aceptado.

La segunda exigiría demostrar que toda responsabilidad arquitectónica legítima pertenece necesariamente a una de cuatro categorías arquitectónicas.

Por tanto:

```text
completitud funcional
        ⇏
exhaustividad de la partición arquitectónica.
```

Transferir la primera propiedad a la segunda reproduciría el mismo salto de nivel ya identificado durante la reconstrucción del antiguo Plano constitutivo.

#### Prueba de eliminación

Se elimina la afirmación:

```text
todo elemento legítimo del núcleo
debe pertenecer a alguno
de los cuatro planos históricos.
```

Se conservan:

```text
los criterios independientes
de admisión al núcleo;

las responsabilidades necesarias;

las competencias diferenciadas;

las relaciones entre resultados;

las normas y restricciones;

los mecanismos necesarios;

las condiciones de conservación.
```

Ante un nuevo elemento `X`, la reconstrucción puede preguntar:

```text
¿qué responsabilidad realiza?

¿de qué fundamento procede?

¿qué relaciones mantiene?

¿qué competencia posee?

¿qué restricciones debe respetar?

¿puede eliminarse o absorberse?

¿qué capacidad se pierde si se elimina?
```

sin necesitar responder previamente:

```text
¿a cuál de los cuatro planos pertenece?
```

Por tanto, la eliminación de la exhaustividad de la clasificación no elimina el criterio de admisión ni la capacidad de auditar nuevos elementos.

#### Intento de reconstrucción de la exhaustividad

Partiendo exclusivamente de los resultados, responsabilidades, relaciones y restricciones justificadas, se intenta reconstruir:

```text
∀x ∈ Núcleo:
x ∈ C ∪ D ∪ N ∪ R.
```

Para ello sería necesario establecer:

1. un criterio independiente de pertenencia al núcleo;
2. criterios independientes para `C`, `D`, `N` y `R`;
3. que todo elemento admitido satisface al menos uno de esos cuatro criterios;
4. que no existe ninguna responsabilidad legítima fuera de ellos;
5. que la cobertura no depende simplemente de redefinir retrospectivamente las categorías para absorber cualquier contraejemplo.

Los fundamentos actualmente examinados no establecen conjuntamente estas condiciones.

En particular, la cobertura histórica de los elementos conocidos no demuestra la exhaustividad necesaria de la clasificación.

#### Resultado de la prueba

No queda establecida:

```text
clasificación de todos los elementos conocidos
        ⇒
exhaustividad arquitectónica
```

ni:

```text
completitud de determinadas
capacidades funcionales
        ⇒
completitud de una clasificación
en cuatro planos
```

ni:

```text
ausencia histórica de una quinta categoría
        ⇒
imposibilidad reconstructiva
de una responsabilidad no clasificable.
```

Eliminada la tesis de exhaustividad de la partición y conservados los criterios independientes de admisión, las responsabilidades, competencias, relaciones y restricciones necesarias, no se identifica ninguna pérdida reconstructiva.

La arquitectura puede evaluar nuevos elementos por aquello que realizan y por las relaciones que mantienen sin determinar previamente su pertenencia a alguno de los cuatro planos históricos.

Por tanto, con los fundamentos actualmente examinados, no queda reconstruida la necesidad de que:

```text
Núcleo =
Constitutivo
∪ Derivativo
∪ Normativo
∪ Realizativo.
```

La partición histórica puede haber proporcionado cobertura para los elementos entonces considerados sin constituir por ello una clasificación exhaustiva necesaria de todo elemento legítimo del núcleo.

Este resultado no determina todavía si las cuatro categorías eran mutuamente exclusivas.

Incluso una clasificación no demostrada como exhaustiva podría conservar diferencias reales entre clases disjuntas.

La exclusividad debe auditarse independientemente.

---

### Prueba de exclusividad

Se examinó si las categorías históricas:

```text
constitutivo
derivativo
normativo
realizativo
```

formaban clases necesariamente disjuntas, de manera que un mismo elemento no pudiera pertenecer legítimamente a más de una de ellas.

La cuestión puede expresarse mediante la tesis fuerte:

```text
C ∩ D = ∅
C ∩ N = ∅
C ∩ R = ∅
D ∩ N = ∅
D ∩ R = ∅
N ∩ R = ∅
```

donde:

```text
C = constitutivo
D = derivativo
N = normativo
R = realizativo.
```

Para que esta disyunción posea necesidad arquitectónica no basta con que el esquema histórico asignara cada elemento a un único plano.

Debe demostrarse que la pertenencia simultánea a dos categorías produciría necesariamente una contradicción, una pérdida semántica, una circularidad o una violación de alguna restricción independientemente justificada.

#### Clasificación de elementos frente a atribución de papeles

La arquitectura histórica tendía a clasificar determinados elementos según la responsabilidad principal que desempeñaban.

Esto permite representaciones como:

```text
X es derivativo

Y es normativo

Z es realizativo.
```

Sin embargo, las pruebas anteriores han mostrado que varias de las propiedades relevantes se expresan más precisamente mediante relaciones:

```text
X deriva R₂ de R₁

Y gobierna X

Z realiza R₂.
```

Debe distinguirse, por tanto:

```text
X desempeña el papel P
en una relación determinada
```

de:

```text
X pertenece globalmente
a la clase arquitectónica P.
```

La primera afirmación no implica necesariamente la segunda.

#### Relatividad de algunos papeles

Consideremos nuevamente:

```text
R₁ ──fundamenta──▶ R₂ ──fundamenta──▶ R₃.
```

Respecto de `R₁`, `R₂` es un resultado derivado.

Respecto de `R₃`, `R₂` desempeña el papel de fundamento.

Por tanto:

```text
derivado(R₂,R₁)
```

y:

```text
fundamento(R₂,R₃)
```

pueden ser simultáneamente verdaderos.

No existe contradicción porque las propiedades se refieren a relaciones diferentes.

Si `derivativo` se convierte en una propiedad absoluta:

```text
tipo(R₂) = derivativo
```

puede perderse esta relatividad.

El resultado muestra que, al menos para determinados papeles, la posición arquitectónica depende de la relación considerada.

#### Concurrencia de competencias diferentes

La prueba de separación de competencias mostró además que:

```text
competencia A ≠ competencia B
```

no implica:

```text
ningún portador puede ejercer A y B.
```

Supongamos:

```text
X deriva D

X realiza R.
```

No aparece una contradicción únicamente porque ambas competencias sean ejercidas por `X`.

Para prohibir esta combinación sería necesario demostrar una incompatibilidad concreta entre ellas.

Por tanto:

```text
derivación ≠ realización
```

no permite inferir:

```text
portadores(derivación)
∩
portadores(realización)
=
∅.
```

La diferencia semántica entre competencias no establece disyunción entre sus portadores.

#### Caso normativo y derivativo

Consideremos un elemento `X` que produce un resultado mediante una regla y que, respecto de otra operación, establece o incorpora una restricción aplicable.

Podría describirse:

```text
X desempeña una competencia derivativa
respecto de R₁
```

y:

```text
X desempeña una competencia normativa
respecto de R₂.
```

La mera concurrencia no produce contradicción.

La contradicción aparecería únicamente si una restricción independiente prohibiera que el mismo portador ejerciera ambas competencias en esas condiciones.

Por tanto, no puede inferirse:

```text
D ∩ N = ∅
```

de la mera diferencia entre:

```text
derivar
```

y:

```text
gobernar.
```

#### Caso normativo y realizativo

La misma prueba puede aplicarse a:

```text
N ∩ R.
```

Supongamos que un mecanismo `M` realiza una responsabilidad y además aplica una restricción durante dicha realización.

Puede expresarse:

```text
M realiza R

M aplica N a R.
```

Esto no significa necesariamente que `M` posea autoridad para modificar `N`.

Debe mantenerse:

```text
aplicar una norma
        ≠
determinar su contenido.
```

Pero esa separación de competencias puede preservarse directamente.

No exige concluir:

```text
todo portador realizativo
debe ser distinto
de todo portador normativo.
```

De nuevo, la no transferencia de autoridad no equivale a disyunción de portadores.

#### El caso del antiguo Plano constitutivo

La reconstrucción del antiguo Plano constitutivo proporciona además un caso especialmente relevante.

Las propiedades históricamente agrupadas bajo `constitutivo` no han permitido reconstruir una clase arquitectónica autónoma.

Las capacidades correspondientes sobreviven mediante resultados, fundamentos, dependencias y restricciones.

En consecuencia, cualquier afirmación:

```text
C ∩ X = ∅
```

requiere primero demostrar que `C` constituye una clase independientemente reconstruible.

No puede utilizarse la clasificación histórica del Plano constitutivo como fundamento para demostrar la exclusividad del esquema que precisamente estamos auditando.

#### Exclusividad de competencias frente a exclusividad de elementos

Podría sobrevivir una forma legítima de exclusividad.

Por ejemplo, dos competencias podrían ser incompatibles respecto del mismo objeto y bajo las mismas condiciones:

```text
incompatible(A,B,R).
```

En tal caso podría establecerse:

```text
¬(ejerce(X,A,R) ∧ ejerce(X,B,R)).
```

Esta sería una restricción real.

Pero su forma es local y condicional.

No establece:

```text
portadores(A)
∩
portadores(B)
=
∅
```

en todos los contextos.

Mucho menos establece que los portadores deban formar dos planos arquitectónicos globalmente disjuntos.

Por tanto, debe distinguirse:

```text
incompatibilidad local de competencias
```

de:

```text
exclusividad global de clases.
```

#### Posibilidad de elementos multifuncionales

La arquitectura debe admitir como posibilidad reconstructiva un elemento `X` que desempeñe distintas responsabilidades en relaciones diferentes:

```text
X ──deriva──▶ R₁

X ──gobierna──▶ R₂

X ──realiza──▶ R₃.
```

Esto no implica que las tres relaciones sean equivalentes.

Tampoco implica que sus competencias se fusionen.

Puede conservarse íntegramente:

```text
derivar ≠ gobernar ≠ realizar
```

al mismo tiempo que:

```text
portador(derivar)
=
portador(gobernar)
=
portador(realizar)
=
X
```

si ninguna restricción independiente lo prohíbe.

La diferenciación semántica pertenece a las competencias y relaciones, no necesariamente a la identidad de sus portadores.

#### Prueba de eliminación de la exclusividad

Se elimina ahora la condición:

```text
cada elemento del núcleo
pertenece como máximo
a uno de los cuatro planos.
```

Se conservan:

```text
competencias diferenciadas;

relaciones diferenciadas;

condiciones de ejercicio;

restricciones de autoridad;

incompatibilidades demostradas;

obligaciones de conservación;

prohibiciones de transferencia
ilegítima de competencia.
```

La reconstrucción continúa pudiendo impedir:

- que una derivación modifique ilegítimamente sus fundamentos;
- que una norma adquiera competencias que no le corresponden;
- que un mecanismo redefina aquello que sólo debe realizar;
- que una relación sea tratada como otra semánticamente distinta;
- que competencias efectivamente incompatibles sean ejercidas conjuntamente.

No se identifica ninguna pérdida necesaria producida exclusivamente por permitir que un mismo portador desempeñe diferentes papeles cuando ninguna incompatibilidad específica lo prohíba.

#### Intento de reconstrucción de la exclusividad

Partiendo exclusivamente de las responsabilidades y restricciones justificadas, se intenta reconstruir:

```text
C ∩ D = ∅
C ∩ N = ∅
C ∩ R = ∅
D ∩ N = ∅
D ∩ R = ∅
N ∩ R = ∅.
```

Para ello sería necesario demostrar que cada intersección produce necesariamente alguna pérdida.

No basta con afirmar que las competencias correspondientes son diferentes.

Sería necesario mostrar, para cada par:

```text
A, B
```

que:

```text
∃x:
x ∈ A ∩ B
```

produce una contradicción o viola una propiedad necesaria.

Los fundamentos actualmente examinados no proporcionan esa demostración general.

Las incompatibilidades que puedan existir deben establecerse individualmente y conservarse como restricciones específicas.

#### Riesgo de exclusividad por definición

Existe además un riesgo de circularidad.

Si definimos:

```text
derivativo =
todo aquello cuya competencia principal
es derivar
```

y después estipulamos que:

```text
un elemento sólo puede tener
una competencia principal,
```

la exclusividad se obtiene por definición.

Pero esa estipulación requiere justificación independiente.

No puede utilizarse como demostración de la arquitectura histórica.

Del mismo modo, asignar cada elemento documentalmente a un único apartado no demuestra que la realidad arquitectónica que representa sea disjunta.

#### Resultado de la prueba

No queda establecida:

```text
diferencia entre competencias
        ⇒
disyunción entre sus portadores
```

ni:

```text
papeles semánticamente distintos
        ⇒
clases arquitectónicas mutuamente exclusivas
```

ni:

```text
incompatibilidades locales
        ⇒
partición global disjunta.
```

Un mismo elemento puede, en principio, desempeñar papeles diferentes respecto de relaciones diferentes sin que las competencias correspondientes pierdan su identidad ni se transfieran entre sí.

Cuando dos competencias sean efectivamente incompatibles, dicha incompatibilidad deberá conservarse mediante una restricción específica y justificarse independientemente.

No se identifica una razón para elevar todas esas restricciones locales a la condición global:

```text
C, D, N y R
son clases mutuamente disjuntas.
```

Por tanto, con los fundamentos actualmente examinados, la exclusividad de los cuatro planos históricos no queda reconstruida como propiedad arquitectónica necesaria.

La disyunción observada en la arquitectura histórica puede proceder de haber convertido competencias y papeles relacionales en propiedades globales de los elementos y, posteriormente, haber utilizado esas propiedades para clasificarlos en planos separados.

Sobrevive la diferenciación de competencias.

Sobreviven las incompatibilidades que puedan demostrarse.

No sobrevive, por esta prueba, la necesidad de que sus portadores formen cuatro clases arquitectónicas mutuamente exclusivas.

Este resultado no determina todavía si cada uno de los antiguos planos poseía una clausura propia capaz de identificar independientemente sus miembros y preservar su identidad como unidad.

Esa cuestión requiere una prueba separada.

---

### Prueba de clausura

Se examinó si cada uno de los cuatro planos históricos —constitutivo, derivativo, normativo y realizativo— posee un criterio independiente de pertenencia y una clausura propia capaz de determinar qué elementos pertenecen a él, cuáles quedan fuera y qué operaciones preservan dicha pertenencia.

Para que un plano constituya una unidad arquitectónica reconstruible debería existir, al menos, un criterio `Cₚ` tal que:

```text
Cₚ(x)
    ⇔
x pertenece al plano P.
```

Además, si determinadas operaciones internas transforman o producen nuevos elementos, debería poder establecerse cuándo dichas operaciones preservan la pertenencia al plano.

La mera clasificación histórica de un elemento dentro de un apartado no satisface estas condiciones.

#### Plano constitutivo

La reconstrucción individual del antiguo Plano constitutivo ya ha mostrado que no se ha identificado un criterio autónomo de pertenencia.

Propiedades como:

```text
ser fundamental;
no ser derivado;
realizar una función irreducible;
servir de fundamento;
poseer primariedad semántica;
```

no permiten derivar necesariamente:

```text
x ∈ Constitutivo.
```

Tampoco se identificó una regla de clausura capaz de determinar qué nuevos resultados deberían incorporarse al plano.

Por tanto, para el antiguo Plano constitutivo:

```text
criterio de pertenencia
        ✗ no reconstruido

clausura
        ✗ no reconstruida.
```

Este resultado se conserva como fundamento ya establecido y no se reabre en la presente prueba.

#### Plano derivativo

Podría proponerse:

```text
x ∈ Derivativo
    ⇔
x deriva de otros resultados.
```

Pero esta formulación presenta varios problemas.

En primer lugar, debe distinguirse entre:

```text
un resultado derivado
```

y:

```text
una operación que produce
un resultado derivado.
```

Ambos podrían haber sido agrupados históricamente bajo una misma categoría sin poseer necesariamente el mismo criterio de pertenencia.

Además, un resultado derivado puede actuar posteriormente como fundamento:

```text
R₁ ⇒ R₂ ⇒ R₃.
```

`R₂` sigue siendo derivado respecto de `R₁`, pero desempeña un papel fundamental respecto de `R₃`.

Por tanto, `derivado` es al menos parcialmente un papel relativo a una dependencia.

Para reconstruir un Plano derivativo sería necesario un criterio más fuerte que:

```text
participa en alguna derivación.
```

También debería determinar:

- si pertenecen al plano las operaciones o sus resultados;
- si pertenecen ambos;
- si todo resultado derivado pertenece necesariamente;
- si una operación deja de pertenecer cuando actúa como fundamento de otra;
- qué nuevos tipos de derivación deben incorporarse al plano.

No se identifica actualmente un criterio independiente que resuelva estas cuestiones sin recurrir a la clasificación histórica.

#### Clausura derivativa

Podría postularse una regla:

```text
si R₁,...,Rₙ pertenecen
a determinados fundamentos
y D deriva E de ellos,
entonces E pertenece
al Plano derivativo.
```

Pero esta regla no está demostrada.

La derivación establece:

```text
E deriva de {R₁,...,Rₙ}.
```

No establece automáticamente:

```text
E ∈ Derivativo.
```

Añadir esta última afirmación convertiría una relación de procedencia en pertenencia a una clase arquitectónica.

Por tanto, no se reconstruye todavía una operación de clausura propia del Plano derivativo.

#### Plano normativo

Podría proponerse:

```text
x ∈ Normativo
    ⇔
x gobierna o restringe otro elemento.
```

Pero nuevamente debe distinguirse entre:

```text
una norma;
una restricción;
un principio;
un contrato;
un elemento que aplica una norma.
```

La relación:

```text
N gobierna X
```

permite identificar una función normativa de `N`.

No demuestra por sí sola que `N` deba pertenecer a una unidad arquitectónica denominada Plano normativo.

Además, un mismo elemento podría ejercer una competencia normativa respecto de un objeto y otra competencia distinta respecto de otro, sin que la prueba de exclusividad haya demostrado una incompatibilidad global.

Por tanto:

```text
gobierna(X,Y)
        ⇏
X ∈ Normativo
```

sin una regla adicional de clasificación.

#### Clausura normativa

Para reconstruir clausura necesitaríamos poder determinar, por ejemplo:

```text
si N₁ y N₂ son normativos,
¿una combinación de ambos
es necesariamente normativa?

si una regla deriva de otra norma,
¿permanece en el mismo plano?

si una restricción gobierna
un mecanismo realizativo,
¿su relación con ese mecanismo
afecta a su pertenencia?
```

No se ha identificado una regla general que permita responder estas cuestiones independientemente de la clasificación histórica.

Por tanto, tampoco queda establecida una clausura normativa propia.

#### Plano realizativo

Podría proponerse:

```text
x ∈ Realizativo
    ⇔
x realiza una responsabilidad.
```

Pero la relación:

```text
M realiza R
```

expresa directamente el papel de `M` respecto de `R`.

No demuestra todavía:

```text
M ∈ Realizativo.
```

Para convertir esta relación en pertenencia sería necesario demostrar que todos los portadores de relaciones de realización forman una clase arquitectónica necesaria.

La prueba de separación de competencias ya mostró que una competencia específica no determina automáticamente una clase de portadores.

#### Clausura realizativa

Tampoco se ha identificado una regla que determine:

```text
si M₁ y M₂ son mecanismos realizativos,
¿su composición pertenece necesariamente
al mismo plano?

si un mecanismo realiza varias responsabilidades
y además aplica una restricción normativa,
¿sigue perteneciendo exclusivamente
al Plano realizativo?

si un elemento deja de realizar una responsabilidad,
¿deja de pertenecer al plano?
```

Estas preguntas no pueden responderse únicamente a partir de la relación `realiza`.

La pertenencia colectiva sigue necesitando una regla adicional no reconstruida.

#### Criterios de entrada y salida

Una clase arquitectónica cerrada debería permitir responder, para cualquier elemento nuevo `X`:

```text
¿X entra en P?

¿X queda fuera de P?

¿qué cambio en X
haría que dejara de pertenecer?

¿qué transformación conserva
su pertenencia?
```

Con los fundamentos actualmente reconstruidos, estas preguntas pueden responderse respecto de competencias y relaciones concretas:

```text
X deriva R;
X gobierna R;
X realiza R;
X fundamenta R.
```

Pero no necesariamente respecto de la pertenencia a los cuatro planos.

Es posible describir completamente el papel de `X` sin determinar:

```text
plano(X) = ...
```

Por tanto, la clasificación no añade hasta ahora una propiedad necesaria para decidir su comportamiento arquitectónico.

#### Clausura por definición

Debe excluirse además una falsa reconstrucción.

Podríamos definir:

```text
Derivativo =
{X | X desempeña algún papel derivativo}

Normativo =
{X | X desempeña algún papel normativo}

Realizativo =
{X | X desempeña algún papel realizativo}.
```

Con estas definiciones las clases existirían trivially y serían cerradas respecto de sus propios predicados.

Pero esto no demostraría que sean planos arquitectónicos necesarios.

Serían únicamente extensiones de predicados descriptivos.

Para que constituyan unidades arquitectónicas debe demostrarse además que su pertenencia produce alguna propiedad necesaria independiente:

- identidad colectiva;
- autoridad;
- restricciones propias;
- precedencia;
- clausura no trivial;
- alguna otra consecuencia arquitectónica.

No se ha demostrado tal propiedad.

#### Prueba de eliminación

Se elimina la hipótesis de que los cuatro planos poseen clausuras propias y se conservan:

```text
las competencias;
las relaciones;
las condiciones de ejercicio;
las restricciones;
los fundamentos;
las reglas de conservación.
```

Ante cualquier elemento `X` continúa siendo posible determinar:

- qué hace;
- sobre qué actúa;
- qué puede modificar;
- qué debe conservar;
- de qué depende;
- qué produce;
- qué restricciones debe respetar.

No se identifica una pérdida necesaria por no disponer de una función adicional:

```text
plano(X).
```

#### Intento de reconstrucción de las clausuras

Para reconstruir los cuatro planos como clases cerradas sería necesario demostrar, para cada uno:

```text
C_P(X)
    ⇔
X ∈ P
```

junto con reglas de preservación de pertenencia.

Los fundamentos actualmente examinados no proporcionan tales criterios para los cuatro planos.

Las relaciones:

```text
deriva
gobierna
realiza
fundamenta
```

permiten clasificar papeles desempeñados por los elementos, pero no obligan por sí mismas a convertir esos papeles en pertenencia a clases arquitectónicas cerradas.

#### Resultado de la prueba

No queda reconstruida una clausura independiente para ninguno de los cuatro planos históricos como unidad arquitectónica.

Para el antiguo Plano constitutivo, la ausencia de criterio de pertenencia y clausura ya había sido establecida independientemente.

Para los planos derivativo, normativo y realizativo, las competencias históricamente asociadas permiten identificar relaciones y papeles:

```text
derivar
gobernar
realizar
```

pero no proporcionan por sí solas criterios suficientes para establecer:

```text
X ∈ Derivativo

X ∈ Normativo

X ∈ Realizativo.
```

Tampoco se han identificado reglas generales que determinen qué transformaciones preservan la pertenencia, cuándo un nuevo elemento debe incorporarse a cada plano o cuándo deja de pertenecer.

No queda establecida:

```text
papel derivativo
        ⇒
pertenencia a un Plano derivativo cerrado
```

ni:

```text
papel normativo
        ⇒
pertenencia a un Plano normativo cerrado
```

ni:

```text
papel realizativo
        ⇒
pertenencia a un Plano realizativo cerrado.
```

Las clases pueden definirse descriptivamente como conjuntos de elementos que desempeñan determinados papeles, pero esa definición no demuestra por sí misma que constituyan unidades arquitectónicas necesarias.

Por tanto, con los fundamentos actualmente examinados, las fronteras de los cuatro planos no quedan reconstruidas mediante criterios independientes de pertenencia y clausura.

Las competencias y relaciones sobreviven.

La clausura de los planos como unidades arquitectónicas no ha demostrado necesidad.

---

### Prueba de completitud global

Se examinó si el antiguo esquema arquitectónico formado por los planos constitutivo, derivativo, normativo y realizativo posee, considerado conjuntamente, una garantía de completitud arquitectónica que no pueda conservarse mediante las responsabilidades, relaciones y restricciones independientemente justificadas.

La prueba distingue entre:

```text
exhaustividad de la clasificación
```

y:

```text
completitud de la arquitectura.
```

La primera pregunta si todos los elementos legítimos deben quedar clasificados dentro de las cuatro categorías históricas.

La segunda pregunta si la presencia conjunta de dichas categorías garantiza que toda responsabilidad necesaria para realizar fielmente el núcleo queda cubierta.

#### Forma fuerte de la tesis

La hipótesis de completitud global puede expresarse provisionalmente como:

```text
{Constitutivo,
 Derivativo,
 Normativo,
 Realizativo}
        ↓
arquitectura suficiente
para realizar íntegramente el núcleo.
```

Para que esta afirmación posea necesidad reconstructiva no basta con demostrar que la arquitectura histórica funcionaba como organización suficiente de los elementos entonces conocidos.

Debe demostrarse que eliminar alguno de los cuatro planos, o eliminar la estructura conjunta que forman, provoca necesariamente una pérdida de capacidad arquitectónica.

La completitud global exige, por tanto, algo más fuerte que la mera cobertura histórica.

#### Completitud de responsabilidades

Podría sostenerse que los cuatro planos cubren conjuntamente cuatro necesidades irreducibles:

```text
establecer contenido;
derivar consecuencias;
gobernar actuaciones;
realizar responsabilidades.
```

Incluso si estas cuatro familias fueran suficientes para describir todas las responsabilidades conocidas, no se seguiría todavía que los planos que históricamente las agrupaban sean necesarios.

Debe distinguirse:

```text
completitud de las responsabilidades
        ≠
completitud de los contenedores
que las agrupan.
```

Si las responsabilidades pueden conservarse directamente mediante competencias y relaciones, la suficiencia de dichas responsabilidades no transfiere automáticamente completitud a la estructura de planos.

#### Relación con la eliminación del Plano constitutivo

La reconstrucción del antiguo Plano constitutivo proporciona una prueba importante.

Su eliminación como unidad arquitectónica no eliminó:

```text
CAN-F1
CAN-F2
CAN-F3

fundamentos
dependencias
conservación
compatibilidad
restricciones de dirección.
```

Por tanto, una de las cuatro unidades históricas ya ha podido eliminarse sin pérdida necesaria identificada.

Si la completitud global del esquema dependiera necesariamente de la presencia de los cuatro planos como planos, la eliminación del Plano constitutivo debería haber producido alguna insuficiencia arquitectónica.

No se ha identificado tal insuficiencia.

Esto no demuestra por sí solo que los otros tres planos sean eliminables, pero sí impide presuponer:

```text
cuatro planos
        ⇒
completitud necesaria.
```

#### ¿Qué garantía adicional podría aportar el conjunto?

Para que el esquema completo sobreviva por completitud debería existir alguna propiedad `Q` tal que:

```text
Q sólo esté garantizada
cuando existen conjuntamente
los cuatro planos.
```

Entre las posibles garantías se consideran:

- que todo resultado tenga fundamento;
- que toda derivación conserve sus fundamentos;
- que toda operación esté gobernada;
- que toda responsabilidad tenga realización;
- que no exista transferencia ilegítima de competencia;
- que las dependencias permanezcan coherentes;
- que la semántica del núcleo sea conservada.

Estas propiedades pueden formularse directamente como restricciones sobre resultados y relaciones.

Por ejemplo:

```text
si E deriva de {R₁,...,Rₙ},
debe conservar lo pertinente de sus fundamentos;
```

```text
si N gobierna X,
no adquiere por ello autoridad para redefinir X;
```

```text
si M realiza R,
debe preservar el contenido de R.
```

Ninguna de estas garantías exige por sí misma la existencia conjunta de cuatro planos.

#### Completitud como composición de componentes completos

Podría intentarse otra derivación:

```text
Plano constitutivo completo
+
Plano derivativo completo
+
Plano normativo completo
+
Plano realizativo completo
        ↓
arquitectura completa.
```

Pero esta estrategia falla antes de llegar a la conclusión.

La completitud del antiguo Plano constitutivo no fue reconstruida.

Tampoco se ha demostrado todavía una completitud independiente de los planos derivativo, normativo y realizativo.

Por tanto, no puede derivarse la completitud global mediante la suma de completitudes locales no establecidas.

Además:

```text
completitud de las partes
        ⇏
completitud del sistema
```

sin una regla que demuestre que la composición cubre todas las interacciones necesarias entre ellas.

Tal regla tampoco ha sido identificada.

#### Completitud por ausencia de una quinta familia

Podría sostenerse:

```text
no existe una quinta familia necesaria
de responsabilidad arquitectónica;
por tanto, los cuatro planos son completos.
```

Esta inferencia reproduce el problema detectado en la prueba de exhaustividad.

La ausencia histórica de una quinta categoría permite afirmar, como máximo:

```text
ninguna responsabilidad entonces reconocida
obligó a introducirla.
```

No establece:

```text
ninguna responsabilidad legítima futura
puede exigir otra organización.
```

Y aun si se demostrara que sólo existen cuatro familias irreducibles de responsabilidades, todavía sería necesario demostrar:

```text
cuatro familias de responsabilidad
        ⇒
cuatro planos arquitectónicos.
```

Esta dependencia no ha sido establecida.

#### Completitud funcional frente a completitud arquitectónica

La existencia de perfiles completos en cuerpos anteriores tampoco puede transferirse al esquema de cuatro planos.

Por ejemplo:

```text
CAN-F1
CAN-F2
CAN-F3
```

pueden constituir un perfil funcional completo respecto de su alcance auditado.

De ello no se sigue:

```text
la arquitectura de cuatro planos
es completa.
```

La primera afirmación versa sobre capacidades funcionales.

La segunda versa sobre una forma concreta de organización arquitectónica.

Transferir la completitud entre ambos niveles requeriría una correspondencia necesaria que no ha sido demostrada.

#### Contraejemplo reductivo

Consideremos una arquitectura hipotética `A*` que conserve íntegramente:

```text
resultados legítimos;
responsabilidades necesarias;
dependencias justificativas;
operaciones derivadas;
normas y restricciones;
mecanismos de realización;
reglas de conservación;
restricciones de competencia.
```

pero que no organice dichos elementos mediante:

```text
Constitutivo
Derivativo
Normativo
Realizativo.
```

Si `A*` continúa pudiendo garantizar:

```text
fundamentación;
derivación legítima;
gobierno;
realización;
conservación;
compatibilidad;
no transferencia de competencia;
```

entonces el esquema histórico de cuatro planos no puede ser condición necesaria de completitud.

Las pruebas realizadas hasta ahora no identifican una propiedad que `A*` no pueda expresar por carecer de los cuatro planos.

Por tanto, el contraejemplo permanece reconstructivamente posible.

#### Prueba de eliminación

Se elimina la afirmación:

```text
la arquitectura sólo es completa
si contiene los cuatro planos históricos.
```

Se conservan todas las responsabilidades y garantías cuya necesidad pueda demostrarse independientemente.

La reconstrucción continúa permitiendo comprobar:

- si toda responsabilidad necesaria está cubierta;
- si cada derivación posee fundamentos suficientes;
- si las restricciones normativas aplicables están presentes;
- si las responsabilidades que requieren realización poseen mecanismos adecuados;
- si las competencias están correctamente delimitadas;
- si las relaciones conservan su semántica;
- si aparecen nuevas responsabilidades irreducibles.

No se pierde el criterio de falsación de la arquitectura.

Si apareciera una nueva responsabilidad necesaria no cubierta, la arquitectura podría ampliarse independientemente de la existencia de planos.

#### Intento de reconstrucción de la completitud global

Partiendo únicamente de las responsabilidades, resultados, relaciones y restricciones justificadas, se intenta derivar:

```text
Arquitectura completa
        ⇔
Constitutivo
+
Derivativo
+
Normativo
+
Realizativo.
```

Para establecer esta equivalencia sería necesario demostrar:

1. que cada uno de los cuatro planos constituye una unidad necesaria;
2. que cada uno aporta una propiedad irreducible;
3. que las cuatro propiedades son conjuntamente suficientes;
4. que ninguna propiedad necesaria queda fuera de ellas;
5. que ninguna arquitectura sin esa partición puede conservar las mismas garantías.

Las pruebas realizadas hasta el momento no establecen estas condiciones.

#### Resultado de la prueba

No queda establecida:

```text
completitud de las responsabilidades
        ⇒
completitud de los cuatro planos
```

ni:

```text
ausencia de una quinta categoría conocida
        ⇒
completitud arquitectónica del esquema histórico
```

ni:

```text
conservación de fundamentación,
derivación, gobierno y realización
        ⇒
necesidad de organizar esas responsabilidades
en cuatro planos.
```

Eliminada la tesis de completitud global del esquema de cuatro planos y conservadas las responsabilidades, relaciones, restricciones y garantías independientemente justificadas, no se identifica ninguna pérdida necesaria.

La suficiencia arquitectónica debe evaluarse directamente respecto de las responsabilidades que la arquitectura debe realizar y de las propiedades que debe conservar.

No queda demostrado que dicha suficiencia requiera la presencia conjunta de los cuatro planos históricos.

Por tanto, con los fundamentos actualmente examinados, la completitud global del esquema arquitectónico de cuatro planos no queda reconstruida como propiedad necesaria.

Este resultado no excluye todavía la posibilidad de que la combinación de los cuatro planos produzca alguna propiedad emergente específica que no haya quedado recogida por las pruebas de completitud consideradas.

Esa posibilidad deberá someterse a una prueba independiente.

---

### Prueba de propiedad emergente

Se examinó si la interacción conjunta entre las responsabilidades históricamente asociadas a los planos constitutivo, derivativo, normativo y realizativo produce alguna propiedad sistémica necesaria que no pueda reconstruirse conservando separadamente los resultados, responsabilidades, relaciones y restricciones implicadas.

La prueba no pregunta si cada una de las responsabilidades históricas posee contenido legítimo.

Se admite provisionalmente que pueden existir necesidades relativas a:

```text
fundamentación;
derivación;
gobierno;
realización.
```

La cuestión es si su concurrencia produce una propiedad adicional `Q` tal que:

```text
Q no pertenezca aisladamente
a ninguna de esas responsabilidades

y

Q sólo pueda conservarse
manteniendo su organización conjunta
mediante el esquema de cuatro planos.
```

#### Criterio de emergencia

No toda propiedad del conjunto constituye una propiedad emergente irreducible.

Si:

```text
Q
```

puede reconstruirse completamente a partir de:

```text
R₁, R₂, ..., Rₙ
+
sus relaciones
+
las restricciones que gobiernan
esas relaciones,
```

entonces `Q` pertenece a la composición de dichos fundamentos y no demuestra por sí misma la necesidad de una unidad arquitectónica adicional.

Para justificar el esquema de cuatro planos sería necesario identificar una propiedad que desapareciera al eliminar la organización conjunta aun cuando se conservaran íntegramente todos sus componentes y relaciones.

#### Primera candidata: conservación semántica extremo a extremo

Podría sostenerse que los cuatro planos garantizan conjuntamente una cadena de conservación:

```text
fundamento
    ↓
derivación
    ↓
gobierno
    ↓
realización
```

de manera que el significado establecido en los fundamentos llegue intacto hasta su realización.

Esta garantía sería sistémica porque atraviesa varias responsabilidades.

Sin embargo, puede reconstruirse mediante obligaciones locales de conservación:

```text
si D deriva de R,
D conserva lo pertinente de R;

si N gobierna D,
N no redefine R ni D fuera de su competencia;

si M realiza R o D,
M conserva el contenido que debe realizar.
```

La composición de estas restricciones permite obtener conservación extremo a extremo sin introducir una propiedad adicional del conjunto de planos.

Por tanto:

```text
conservación sistémica
        =
composición de obligaciones
de conservación locales
```

mientras no aparezca un residuo independiente.

No queda establecida:

```text
conservación extremo a extremo
        ⇒
esquema de cuatro planos.
```

#### Segunda candidata: trazabilidad

Podría sostenerse que el esquema garantiza que todo resultado o mecanismo pueda remontarse hasta sus fundamentos:

```text
M
↑
R
↑
D
↑
F
```

Esta trazabilidad también posee valor sistémico.

Pero puede expresarse directamente mediante la composición de relaciones:

```text
M realiza R;

R deriva de D;

D depende de F.
```

La posibilidad de recorrer esas relaciones permite reconstruir la procedencia sin exigir que cada nodo pertenezca a un nivel global.

La trazabilidad pertenece a la estructura de dependencias.

No se identifica una propiedad adicional aportada por la pertenencia a cuatro planos.

Por tanto:

```text
trazabilidad
        ⇏
estratificación de cuatro planos.
```

#### Tercera candidata: preservación de autoridad

Otra posible propiedad emergente sería garantizar que ninguna competencia se transfiera ilegítimamente durante la cadena:

```text
fundamento
    ↓
derivación
    ↓
norma
    ↓
realización.
```

Podría existir una garantía sistémica:

```text
la autoridad permanece localizada
correctamente a través de todo el proceso.
```

Sin embargo, esta garantía puede reconstruirse mediante restricciones locales:

```text
usar un fundamento
    ≠
adquirir autoridad sobre él;

derivar un resultado
    ≠
adquirir autoridad para modificar sus fundamentos;

gobernar
    ≠
constituir lo gobernado;

realizar
    ≠
redefinir lo realizado.
```

La composición de estas restricciones preserva la localización de competencia a través de cadenas arbitrariamente largas.

No se necesita una autoridad superior ni una estructura de planos que posea la garantía como propiedad colectiva.

#### Cuarta candidata: coherencia sistémica

Podría afirmarse que el esquema completo garantiza simultáneamente:

```text
coherencia de fundamentos;
coherencia de derivaciones;
coherencia normativa;
coherencia realizativa.
```

La pregunta es si la compatibilidad global exige el esquema.

Supongamos un conjunto:

```text
{R₁, D₁, N₁, M₁}
```

que debe mantenerse conjuntamente.

La exigencia legítima es:

```text
los resultados y relaciones
deben ser conjuntamente admisibles.
```

Si una incompatibilidad aparece, debe identificarse entre los elementos o relaciones correspondientes.

No se obtiene una garantía adicional simplemente porque:

```text
R₁ ∈ Constitutivo
D₁ ∈ Derivativo
N₁ ∈ Normativo
M₁ ∈ Realizativo.
```

La pertenencia a planos no garantiza coherencia.

Y la coherencia puede existir sin dicha pertenencia.

Por tanto:

```text
coherencia sistémica
        ≠
coherencia por estratificación.
```

#### Quinta candidata: completitud del recorrido

Otra posible propiedad sería que cualquier responsabilidad atraviese necesariamente un ciclo completo:

```text
fundamentada
    ↓
derivada
    ↓
gobernada
    ↓
realizada.
```

Pero esta estructura no resulta universal.

Puede existir una responsabilidad que deba realizarse directamente sin requerir una operación derivativa particular.

Puede existir una norma que gobierne directamente un mecanismo.

Puede existir un resultado derivado que no requiera una realización software propia.

Por tanto, no se identifica un recorrido universal cuya completitud dependa de atravesar necesariamente los cuatro planos.

La existencia de caminos diferentes debilita la tesis de una propiedad emergente ligada a una cadena fija.

#### Sexta candidata: aislamiento de errores o desviaciones

Podría sostenerse que la separación en planos permite detectar dónde se produjo una desviación:

```text
error de fundamento;
error de derivación;
violación normativa;
error de realización.
```

Esta capacidad también puede conservarse sin planos si cada relación y responsabilidad mantiene su tipo.

Por ejemplo:

```text
fallo en fundamenta(...)
fallo en deriva(...)
violación de gobierna(...)
fallo en realiza(...)
```

permite localizar la desviación con mayor precisión que una referencia genérica al plano.

La diagnóstica pertenece a la diferenciación de relaciones, no necesariamente a la estratificación.

#### Séptima candidata: composición de garantías

Puede existir una propiedad más abstracta:

```text
G₁
+
G₂
+
G₃
+
G₄
        ↓
G_sistema.
```

donde cada `Gᵢ` sea una garantía local y `G_sistema` resulte de su composición.

Esta posibilidad no se niega.

Pero debe distinguirse:

```text
garantía compuesta
```

de:

```text
garantía emergente irreducible.
```

Si `G_sistema` puede demostrarse mediante:

```text
G₁ ∧ G₂ ∧ G₃ ∧ G₄
+
reglas de composición,
```

entonces su fundamento está completamente explicitado.

La existencia de una consecuencia sistémica no obliga a introducir una entidad arquitectónica que la posea.

Para justificar los cuatro planos sería necesario demostrar que la propiedad sistémica no puede obtenerse mediante la composición de garantías locales y relaciones concretas.

No se ha identificado hasta ahora ninguna propiedad de esta clase.

#### Prueba de eliminación conjunta

Se elimina completamente la organización:

```text
Constitutivo
Derivativo
Normativo
Realizativo
```

y se conservan:

```text
resultados;
fundamentos;
operaciones derivativas;
normas;
restricciones;
mecanismos de realización;
relaciones entre ellos;
garantías locales;
reglas de composición;
condiciones de conservación.
```

Se comprueba si siguen disponibles propiedades sistémicas como:

```text
conservación extremo a extremo;
trazabilidad;
preservación de autoridad;
compatibilidad global;
detección de desviaciones;
composición de garantías.
```

Todas ellas permanecen reconstruibles mediante la composición de resultados, relaciones y restricciones concretas.

No se identifica una propiedad que desaparezca únicamente por eliminar la agrupación de dichas responsabilidades en cuatro planos.

#### Intento de reconstrucción del esquema a partir de la propiedad sistémica

La prueba se invierte.

Supongamos que establecemos una propiedad sistémica `Q`, como:

```text
conservación semántica extremo a extremo.
```

Para derivar de ella:

```text
Q
    ⇒
Constitutivo
+
Derivativo
+
Normativo
+
Realizativo
```

sería necesario demostrar que ninguna otra organización de responsabilidades y relaciones puede satisfacer `Q`.

Pero una arquitectura relacional que conserve las mismas obligaciones locales puede satisfacer la propiedad sin utilizar la partición histórica.

Por tanto, las propiedades sistémicas examinadas no determinan una forma arquitectónica única.

#### Resultado de la prueba

La interacción entre fundamentación, derivación, gobierno y realización puede producir propiedades sistémicas legítimas.

Entre ellas pueden encontrarse:

```text
conservación extremo a extremo;
trazabilidad;
preservación de competencias;
compatibilidad global;
composición de garantías.
```

Sin embargo, estas propiedades resultan reconstruibles mediante la composición de relaciones, restricciones y garantías locales.

No se identifica una propiedad emergente irreducible cuya existencia dependa de mantener las responsabilidades organizadas bajo los cuatro planos históricos.

Por tanto, no queda establecida:

```text
propiedad sistémica
        ⇒
esquema de cuatro planos
```

ni:

```text
composición de garantías locales
        ⇒
unidad arquitectónica adicional
```

ni:

```text
interacción entre fundamentación,
derivación, gobierno y realización
        ⇒
estratificación necesaria.
```

La existencia de propiedades globales no se niega.

Lo que no queda demostrado es que dichas propiedades pertenezcan al esquema de cuatro planos como unidad irreducible en lugar de resultar de las relaciones y garantías que lo componen.

Eliminada la organización conjunta en cuatro planos y conservados todos los resultados, relaciones, restricciones y reglas de composición pertinentes, no se identifica en esta prueba ninguna pérdida sistémica necesaria.

Por tanto, con los fundamentos actualmente examinados, el antiguo esquema de cuatro planos no queda justificado mediante una propiedad emergente del conjunto.

---

### Prueba de sustitución relacional

Se examinó si el antiguo esquema arquitectónico formado por los planos constitutivo, derivativo, normativo y realizativo puede eliminarse completamente conservando todas las propiedades necesarias mediante:

- resultados;
- responsabilidades;
- operaciones;
- normas;
- mecanismos;
- relaciones entre ellos;
- restricciones sobre dichas relaciones.

La prueba elimina simultáneamente:

```text
Plano constitutivo

Plano derivativo

Plano normativo

Plano realizativo
```

como categorías, niveles, unidades de pertenencia y estructura global de organización.

No se eliminan las responsabilidades, resultados o restricciones históricamente agrupados bajo ellos cuando su necesidad haya sido establecida independientemente.

#### Estructura mínima conservada

La reconstrucción conserva elementos de distintas clases cuando resulten necesarios:

```text
R  = resultado

O  = operación

N  = norma o restricción

M  = mecanismo

C  = competencia o responsabilidad
```

y relaciones diferenciadas como:

```text
fundamenta

depende de

deriva de

produce

gobierna

restringe

realiza

utiliza

conserva

es compatible con
```

La reducción no presupone que ésta sea una lista cerrada.

Sólo conserva aquellas relaciones cuya necesidad pueda establecerse independientemente.

#### Fundamentación

Una relación justificativa puede expresarse directamente:

```text
R₁ ──fundamenta──▶ R₂
```

o:

```text
{R₁,...,Rₙ} ──fundamentan──▶ E.
```

Esta relación conserva:

- los fundamentos implicados;
- la dirección justificativa;
- la dependencia del resultado;
- las condiciones de conservación pertinentes.

No requiere clasificar previamente:

```text
R₁ ∈ Constitutivo

E ∈ Derivativo.
```

Además, un mismo resultado puede ocupar posiciones diferentes en dependencias distintas:

```text
R₁ ──▶ R₂ ──▶ R₃
```

de manera que `R₂` sea resultado respecto de `R₁` y fundamento respecto de `R₃`.

La representación relacional conserva esta relatividad sin necesidad de asignar a `R₂` un tipo arquitectónico global.

#### Derivación

Las operaciones derivativas pueden conservarse explícitamente:

```text
O deriva E
a partir de {R₁,...,Rₙ}.
```

La reconstrucción puede determinar:

- qué operación deriva;
- qué fundamentos utiliza;
- qué resultado produce;
- qué reglas de derivación aplica;
- qué contenidos debe conservar.

No se necesita un Plano derivativo para distinguir la operación derivativa de otras responsabilidades.

La identidad semántica de la derivación queda preservada por la relación y por las condiciones de ejercicio de la operación.

#### Normatividad

Las normas y restricciones pueden representarse directamente:

```text
N ──gobierna──▶ X

N ──restringe──▶ O

N ──restringe──▶ M.
```

La reconstrucción conserva:

```text
gobernar
    ≠
constituir;

gobernar
    ≠
derivar;

gobernar
    ≠
realizar.
```

También conserva la prohibición de que gobernar un resultado conceda automáticamente autoridad para modificarlo o reinterpretarlo.

No se requiere un Plano normativo para mantener esta separación semántica.

#### Realización

Los mecanismos necesarios pueden expresarse mediante:

```text
M ──realiza──▶ C
```

o la relación de realización concreta adoptada.

La reconstrucción conserva:

```text
realizar
    ≠
determinar el contenido realizado;

realizar
    ≠
adquirir autoridad sobre sus fundamentos.
```

Las normas aplicables al mecanismo pueden relacionarse directamente con él:

```text
N ──restringe──▶ M.
```

Y las responsabilidades que debe realizar pueden relacionarse igualmente:

```text
M ──realiza──▶ C.
```

No es necesario situar `N`, `M` y `C` en niveles globalmente ordenados para conservar estas relaciones.

#### Competencias

La eliminación de los planos no elimina la separación de competencias.

Puede conservarse directamente:

```text
competencia(X, derivar, R)

competencia(Y, gobernar, O)

competencia(Z, realizar, C)
```

junto con las correspondientes restricciones de ejercicio.

También puede conservarse:

```text
participar en una relación
    ≠
adquirir las competencias
de otros participantes.
```

Las incompatibilidades de competencia que resulten necesarias pueden expresarse localmente:

```text
incompatible(A,B,X).
```

No requieren convertir todas las competencias en clases arquitectónicas globalmente disjuntas.

#### Conservación semántica

La reducción conserva las obligaciones de preservación:

```text
uso
    ≠
modificación

uso
    ≠
reinterpretación

derivación
    ≠
alteración ilegítima de fundamentos

realización
    ≠
redefinición.
```

Estas restricciones pueden propagarse a través de cadenas de dependencias.

Por ejemplo:

```text
R₁ ──fundamenta──▶ R₂

R₂ ──realizado por──▶ M
```

permite exigir que `M` conserve aquello de `R₂` cuya validez depende de `R₁`, sin introducir un nivel intermedio de planos.

#### Trazabilidad

La reconstrucción relacional permite conservar la trazabilidad completa.

Dado:

```text
R₁ ──fundamenta──▶ D

O ──produce──────▶ D

N ──gobierna─────▶ O

M ──realiza──────▶ D
```

puede determinarse:

- de qué depende `D`;
- mediante qué operación se obtiene;
- qué norma gobierna esa operación;
- qué mecanismo realiza la responsabilidad correspondiente.

La trazabilidad se obtiene recorriendo las relaciones efectivamente establecidas.

No necesita una secuencia:

```text
Constitutivo
    ↓
Derivativo
    ↓
Normativo
    ↓
Realizativo.
```

#### Composición

Cuando varias relaciones deben conservarse conjuntamente, la reconstrucción puede expresar su composición:

```text
R₁ ──fundamenta──▶ R₂

R₂ ──fundamenta──▶ R₃
```

o:

```text
{R₁,R₂} ──fundamentan──▶ E.
```

También puede componer garantías:

```text
conservación(R₁,R₂)
+
conservación(R₂,R₃)
        ↓
conservación pertinente a través
de la cadena
```

si la regla de composición correspondiente queda justificada.

La existencia de propiedades compuestas no obliga a introducir una unidad arquitectónica que las posea.

#### Compatibilidad

Los elementos que deban mantenerse conjuntamente pueden estar sometidos a condiciones de compatibilidad:

```text
compatible(R₁,R₂,...,Rₙ).
```

La pertenencia a un mismo plano no es necesaria ni suficiente para dicha compatibilidad.

La condición puede evaluarse directamente sobre los resultados y relaciones relevantes.

#### Restricciones contra circularidad

Las dependencias justificativas pueden analizarse directamente:

```text
R₁ ⇒ R₂
R₂ ⇒ R₁
```

y someterse a las restricciones contra circularidades ilegítimas que establezca la teoría.

No se necesita una arquitectura de niveles para detectar o prohibir ciclos.

La aciclicidad, cuando resulte necesaria, constituye una propiedad de las dependencias, no de la estratificación.

#### Orden parcial

La eliminación de los planos tampoco elimina la precedencia justificativa.

Puede mantenerse:

```text
R₁ ≺ R₂
```

cuando:

```text
R₂ depende justificativamente de R₁.
```

El resultado general puede constituir un orden parcial determinado por las dependencias concretas.

No es necesario convertirlo en una cadena global entre clases enteras de elementos.

#### Elementos multifuncionales

La representación relacional permite además conservar casos en los que un mismo portador desempeña distintas competencias:

```text
X ──deriva──▶ R₁

X ──gobierna──▶ R₂

X ──realiza──▶ R₃.
```

Las relaciones siguen siendo semánticamente distintas.

No se necesita decidir que `X` pertenece esencialmente a uno de los antiguos planos.

Si alguna combinación resulta incompatible, la incompatibilidad deberá justificarse y expresarse específicamente.

#### Incorporación de nuevos elementos

Ante un nuevo elemento `X`, la reconstrucción puede evaluar:

```text
qué responsabilidad realiza;

qué fundamentos posee;

qué produce;

qué relaciones mantiene;

qué competencia ejerce;

qué restricciones debe respetar;

qué pierde la teoría si se elimina.
```

No es necesario determinar previamente:

```text
plano(X).
```

Por tanto, la eliminación de los planos no elimina la capacidad de ampliar, falsar o revisar la arquitectura.

#### Propiedades sistémicas

Las pruebas anteriores identificaron posibles propiedades globales como:

```text
conservación extremo a extremo;

trazabilidad;

preservación de competencias;

compatibilidad;

composición de garantías.
```

La reconstrucción relacional permite mantenerlas mediante composición de las relaciones y restricciones correspondientes.

No se identifica una propiedad sistémica adicional cuya expresión requiera la existencia de los cuatro planos.

#### Prueba de suficiencia

Se considera una arquitectura hipotética `A*` formada exclusivamente por:

```text
Resultados
+
Responsabilidades
+
Operaciones
+
Normas
+
Mecanismos
+
Relaciones
+
Restricciones.
```

`A*` no contiene:

```text
Constitutivo
Derivativo
Normativo
Realizativo
```

como planos arquitectónicos.

Sin embargo, `A*` conserva la capacidad de determinar:

- qué resultados están establecidos;
- qué resultados fundamentan otros;
- qué operaciones derivan nuevos resultados;
- qué fundamentos utiliza cada derivación;
- qué normas gobiernan cada elemento;
- qué mecanismos realizan cada responsabilidad;
- qué competencias posee cada portador;
- qué competencias son incompatibles;
- qué contenidos deben conservarse;
- qué dependencias están permitidas;
- qué dependencias están prohibidas;
- qué propiedades sistémicas resultan de su composición.

No se identifica, con los fundamentos actualmente examinados, una capacidad necesaria que `A*` pierda por carecer de los cuatro planos.

#### Comparación con el esquema histórico

El esquema histórico añadía a las relaciones anteriores una clasificación global:

```text
Constitutivo
Derivativo
Normativo
Realizativo.
```

Las pruebas precedentes no han reconstruido para dicha clasificación:

- necesidad de estratificación;
- orden global;
- fronteras de competencia;
- dependencias irreducibles entre planos;
- exhaustividad;
- exclusividad;
- clausura;
- completitud global;
- propiedad emergente irreducible.

La sustitución relacional elimina la clasificación y conserva aquello que ha demostrado necesidad.

No se identifica un residuo adicional.

#### Resultado de la prueba

El antiguo esquema de cuatro planos puede sustituirse, con los fundamentos actualmente examinados, por una estructura formada por:

```text
resultados
+
responsabilidades
+
operaciones
+
normas
+
mecanismos
+
relaciones
+
restricciones
```

sin pérdida necesaria identificada.

Sobreviven relaciones como:

```text
fundamenta
depende de
deriva de
produce
gobierna
restringe
realiza
utiliza
conserva
```

junto con las condiciones de competencia, compatibilidad, composición, conservación y dirección que correspondan.

No queda establecida:

```text
conservación de las responsabilidades históricas
        ⇒
conservación de sus planos
```

ni:

```text
preservación de las relaciones
        ⇒
preservación de una estratificación global.
```

La reducción conserva las diferencias semánticas necesarias sin convertirlas en pertenencia a clases arquitectónicas.

Con los fundamentos actualmente examinados, no se identifica ninguna propiedad necesaria cuya conservación exija mantener simultáneamente los cuatro planos históricos.

La sustitución relacional resulta, por tanto, reconstructivamente suficiente en esta prueba.

Este resultado no constituye todavía el cierre de la auditoría.

Debe comprobarse que la estructura resultante no reintroduzca encubiertamente los cuatro planos mediante nuevas denominaciones o agrupaciones con propiedades equivalentes.

---

### Prueba de reintroducción encubierta del esquema completo

Se examinó si la sustitución del antiguo esquema de cuatro planos por resultados, responsabilidades, operaciones, normas, mecanismos, relaciones y restricciones reintroduce implícitamente la misma estratificación mediante nuevas denominaciones o agrupaciones funcionalmente equivalentes.

La eliminación del esquema sólo puede considerarse efectiva si expresiones posteriores como:

```text
nivel semántico
nivel derivativo
sistema normativo
capa de realización
resultados fundamentales
resultados derivados
conjunto de normas
conjunto de mecanismos
```

no recuperan sin justificación independiente las propiedades colectivas previamente atribuidas a los antiguos planos.

#### Criterio de reintroducción

Una agrupación no reintroduce por sí misma un plano.

Puede utilizarse descriptivamente una expresión como:

```text
todas las normas aplicables a X
```

o:

```text
los mecanismos que realizan R
```

si únicamente abrevia un conjunto de elementos identificables mediante relaciones ya establecidas.

Existe reintroducción encubierta cuando la pertenencia a la agrupación comienza a producir propiedades adicionales como:

```text
identidad colectiva;
criterio propio de pertenencia;
clausura;
autoridad colectiva;
competencia colectiva;
exclusividad;
completitud;
precedencia global;
dependencia respecto de otras agrupaciones;
propiedades sistémicas no derivadas de sus miembros y relaciones.
```

En tal caso, la nueva agrupación deja de ser descriptiva y pasa a desempeñar el mismo papel arquitectónico que uno de los planos eliminados.

#### Etiquetas de nivel o capa

Expresiones como:

```text
nivel semántico
nivel normativo
capa realizativa
```

pueden parecer simples cambios terminológicos.

Su utilización sólo es reconstructivamente neutra si puede eliminarse sin modificar ninguna afirmación necesaria.

Por ejemplo:

```text
N gobierna R

M realiza R
```

no necesita convertirse en:

```text
N pertenece al nivel normativo

M pertenece a la capa realizativa.
```

Si dichas etiquetas se utilizan únicamente como ayudas expositivas, permanecen eliminables.

Si, en cambio, de ellas se deriva:

```text
todo lo normativo precede a todo lo realizativo;

ningún elemento normativo puede desempeñar
una competencia realizativa;

el nivel normativo posee autoridad colectiva;
```

se ha reconstruido una estratificación equivalente a la previamente eliminada.

#### Agrupación de todos los resultados derivados

Puede definirse descriptivamente:

```text
D* = {R | R deriva de algún fundamento}.
```

Esta colección no constituye por sí misma un Plano derivativo.

La relación:

```text
R deriva de F
```

continúa siendo la información reconstructivamente relevante.

La agrupación se reificaría si se afirmara adicionalmente que:

```text
D* posee identidad arquitectónica;

todo nuevo derivado entra necesariamente en D* como unidad;

D* es globalmente posterior a otra clase;

los miembros de D* sólo pueden desempeñar
competencias derivativas;

D* posee propiedades propias no reducibles
a las derivaciones individuales.
```

Ninguna de estas propiedades se sigue de la mera definición extensional del conjunto.

#### Agrupación de todas las normas

Del mismo modo puede describirse:

```text
N* = {N | N gobierna o restringe algún elemento}.
```

La existencia de esta colección no demuestra un Plano normativo.

Cada norma conserva:

```text
su contenido;
su fundamento;
su ámbito de aplicación;
aquello que gobierna;
sus restricciones de competencia.
```

La agrupación sólo reintroduciría el antiguo plano si comenzara a poseer propiedades como:

```text
autoridad normativa colectiva;

clausura propia;

competencia sobre cualquier elemento
por pertenecer a N*;

precedencia global respecto de mecanismos;

identidad del sistema normativo
independiente de sus normas y relaciones.
```

Estas propiedades requieren justificación independiente.

No proceden de la mera existencia de varias normas.

#### Agrupación de todos los mecanismos

También puede formarse descriptivamente:

```text
M* = {M | M realiza alguna responsabilidad}.
```

Esta agrupación no constituye necesariamente una capa realizativa.

Los mecanismos pueden analizarse individualmente mediante:

```text
M realiza R;

M debe conservar R;

N restringe M.
```

No es necesario atribuir a `M*`:

```text
identidad colectiva;
clausura;
competencia común;
exclusividad respecto de otros tipos de elementos;
posición global posterior en la arquitectura.
```

Si dichas propiedades se introdujeran por pertenecer a `M*`, se estaría reconstituyendo funcionalmente el antiguo Plano realizativo.

#### Agrupación por competencias

Existe un riesgo adicional al definir:

```text
Derivadores = {X | X puede derivar}

Gobernadores = {X | X puede gobernar}

Realizadores = {X | X puede realizar}.
```

Estas colecciones pueden ser útiles descriptivamente.

Pero las pruebas anteriores han mostrado que:

```text
competencia distinta
    ≠
clase arquitectónica distinta.
```

Un mismo portador puede desempeñar competencias diferentes respecto de objetos o relaciones distintas cuando ninguna incompatibilidad independiente lo prohíba.

Por tanto, las extensiones de los predicados de competencia no deben convertirse automáticamente en clases disjuntas de portadores.

#### Reintroducción de exclusividad

Una reducción sería falsa si después de eliminar los planos se afirmara:

```text
todo elemento pertenece exactamente a una
de las nuevas agrupaciones funcionales.
```

Esto recuperaría:

```text
exhaustividad
+
exclusividad
```

del antiguo esquema bajo nuevas etiquetas.

La arquitectura relacional no necesita una función global:

```text
tipo(X) =
fundamental |
derivado |
normativo |
realizativo.
```

Puede conservar directamente:

```text
deriva(X,...)
gobierna(X,...)
realiza(X,...)
fundamenta(X,...)
```

sin exigir una clasificación única de `X`.

#### Reintroducción de orden global

También debe evitarse reconstruir:

```text
Fundamentos
    ↓
Derivados
    ↓
Normas
    ↓
Mecanismos
```

como sustituto de:

```text
Constitutivo
    ↓
Derivativo
    ↓
Normativo
    ↓
Realizativo.
```

La precedencia legítima permanece local:

```text
R₁ precede justificativamente a R₂
cuando R₂ depende de R₁.
```

Las relaciones normativas y realizativas no deben reducirse automáticamente a la misma relación de precedencia.

Por tanto, ninguna agrupación descriptiva puede adquirir por defecto una posición global en una cadena.

#### Reintroducción de dependencias entre agrupaciones

Debe evitarse igualmente inferir:

```text
Derivados dependen de Fundamentos;

Normas gobiernan Derivados;

Mecanismos dependen de Normas;
```

como relaciones entre conjuntos completos cuando las afirmaciones justificadas son únicamente:

```text
R₂ depende de R₁;

N gobierna R₂;

M está restringido por N.
```

La relación entre miembros no debe proyectarse automáticamente al nivel de sus agrupaciones.

#### Reintroducción de autoridad colectiva

La pertenencia a una agrupación descriptiva tampoco fusiona competencias.

De:

```text
N₁ gobierna X

N₂ gobierna Y
```

no se sigue:

```text
{N₁,N₂}
posee autoridad colectiva
sobre {X,Y}.
```

Del mismo modo:

```text
M₁ realiza R₁

M₂ realiza R₂
```

no produce una autoridad o competencia colectiva de todos los mecanismos sobre todos los resultados realizados.

La autoridad y competencia permanecen ligadas a los resultados y relaciones que las justifican.

#### Reintroducción de completitud

Expresiones como:

```text
el sistema de normas contiene
todas las normas necesarias;
```

o:

```text
la capa realizativa contiene
todos los mecanismos válidos;
```

no pueden introducirse simplemente como consecuencias de haber recopilado los elementos conocidos.

La completitud de una agrupación requiere fundamentos propios.

La sustitución relacional no necesita afirmar completitud de ninguna colección global para evaluar nuevas normas, resultados u operaciones.

#### Prueba de eliminación de todas las etiquetas colectivas

Como comprobación fuerte se eliminan también expresiones como:

```text
fundamentos del núcleo;
resultados derivados;
sistema normativo;
capa realizativa;
arquitectura relacional;
red de dependencias.
```

Se conservan únicamente afirmaciones concretas como:

```text
R₁ fundamenta R₂;

O deriva E de {R₁,R₂};

N gobierna O;

N restringe M;

M realiza R₃;

X conserva R₁.
```

junto con las restricciones que gobiernan estas relaciones.

La eliminación de las etiquetas colectivas no provoca ninguna pérdida necesaria identificada.

Por tanto, ninguna de ellas es requerida para realizar la reducción.

#### Criterio general

Se conserva el siguiente criterio reconstructivo:

```text
Una agrupación es descriptiva
si puede eliminarse sin modificar
ningún resultado, competencia,
dependencia o restricción.
```

En cambio:

```text
Si pertenecer a una agrupación
confiere identidad, autoridad,
clausura, exclusividad, completitud,
precedencia o dependencia colectiva
no derivada de sus miembros,
la agrupación ha sido reificada
y requiere justificación independiente.
```

Este criterio se aplica tanto a los antiguos planos como a cualquier agrupación propuesta durante su reconstrucción.

#### Resultado de la prueba

La sustitución relacional del antiguo esquema de cuatro planos no requiere introducir nuevas unidades equivalentes a:

```text
Constitutivo
Derivativo
Normativo
Realizativo.
```

Las agrupaciones de:

```text
resultados derivados;
normas;
mecanismos;
fundamentos;
portadores de determinadas competencias;
```

pueden utilizarse como abreviaturas descriptivas sin constituir por ello clases arquitectónicas necesarias.

No queda establecida:

```text
agrupación descriptiva
    ⇒
unidad arquitectónica
```

ni:

```text
competencia compartida
    ⇒
identidad colectiva de sus portadores
```

ni:

```text
relaciones entre miembros
    ⇒
dependencias entre sus agrupaciones
```

ni:

```text
colección de elementos conocidos
    ⇒
clausura o completitud de la colección.
```

La reducción permanece genuina mientras los resultados, responsabilidades, competencias y restricciones se atribuyan directamente a los elementos y relaciones que los justifican.

Como prueba extrema, incluso las propias etiquetas colectivas pueden eliminarse sin pérdida reconstructiva identificada.

Por tanto, con los fundamentos actualmente examinados, la sustitución del antiguo esquema de cuatro planos no reintroduce necesariamente la misma estructura bajo nuevas denominaciones.

La eliminación puede mantenerse a nivel de resultados, operaciones, normas, mecanismos, relaciones y restricciones sin reconstruir identidad colectiva, clausura, autoridad, exclusividad u orden global equivalentes a los antiguos planos.

---

### Prueba de contraejemplo arquitectónico

Se examinó si puede construirse una arquitectura hipotética que elimine completamente los planos constitutivo, derivativo, normativo y realizativo y preserve, sin contradicción, todas las capacidades, competencias, dependencias, garantías y restricciones cuya necesidad ha sobrevivido a las pruebas anteriores.

La finalidad de esta construcción no consiste en proponer una nueva arquitectura canónica.

Su única función consiste en intentar falsar la necesidad del esquema histórico de cuatro planos.

Si existe al menos una arquitectura conceptualmente válida que preserve íntegramente las propiedades necesarias sin utilizar dicha partición, entonces los cuatro planos no pueden considerarse una consecuencia necesaria de esos fundamentos.

---

#### Definición del contraejemplo

Se considera una arquitectura hipotética:

```text
A*
```

que no contiene como categorías arquitectónicas:

```text
Constitutivo
Derivativo
Normativo
Realizativo
```

ni ninguna agrupación equivalente dotada de:

- identidad colectiva;
- clausura propia;
- autoridad colectiva;
- exclusividad;
- completitud;
- precedencia global;
- dependencia entre niveles.

`A*` contiene exclusivamente aquellos elementos cuya necesidad pueda justificarse independientemente.

---

#### Elementos de `A*`

La arquitectura admite, cuando resulten necesarios:

```text
Resultados
Responsabilidades
Operaciones
Normas
Restricciones
Mecanismos
Competencias
```

La pertenencia de un elemento a una de estas descripciones no implica por sí sola su pertenencia a una unidad arquitectónica superior.

Las denominaciones identifican aquello que el elemento es o hace, no el plano al que debe pertenecer.

---

#### Relaciones de `A*`

Los elementos pueden mantener relaciones diferenciadas como:

```text
fundamenta

depende de

deriva de

produce

gobierna

restringe

realiza

utiliza

conserva

es compatible con
```

Esta lista no constituye una firma cerrada de la arquitectura.

Sólo representa las relaciones necesarias identificadas hasta el momento.

Toda relación adicional deberá justificarse independientemente.

---

#### Capacidades estructurales

`A*` conserva íntegramente las capacidades estructurales irreducibles actualmente aceptadas:

```text
CAN-F1 — Individuación

CAN-F2 — Articulación estructural

CAN-F3 — Articulación evolutiva
```

y exige que cualquier realización preserve capacidades estructuralmente equivalentes.

La ausencia de un Plano constitutivo no altera esta exigencia.

Las realizaciones actualmente aceptadas pueden conservarse cuando posean fundamento independiente:

```text
P-001

MA-001

MA-002
```

sin convertirlas en miembros de una categoría arquitectónica colectiva.

---

#### Fundamentación

Los resultados conservan sus dependencias justificativas directamente.

Por ejemplo:

```text
R₁ ──fundamenta──▶ R₂
```

o:

```text
{R₁,R₂} ──fundamentan──▶ E.
```

La arquitectura puede determinar:

- qué resultado actúa como fundamento;
- qué resultado depende de él;
- qué contenido debe conservarse;
- qué precedencia justificativa resulta de la dependencia.

No necesita clasificar:

```text
R₁ = constitutivo

R₂ = derivativo.
```

Un mismo resultado puede ser:

```text
derivado respecto de determinados fundamentos
```

y simultáneamente:

```text
fundamento respecto de resultados posteriores.
```

---

#### Derivación

Una operación `O` puede producir un resultado `E` a partir de fundamentos:

```text
O({R₁,...,Rₙ}) → E.
```

La arquitectura registra:

- los fundamentos;
- la operación;
- el resultado;
- las garantías aplicables;
- las reglas de conservación.

`O` no adquiere autoridad para modificar sus fundamentos por utilizarlos.

La derivación queda semánticamente diferenciada sin necesidad de un Plano derivativo.

---

#### Gobierno

Una norma `N` puede gobernar o restringir determinados elementos:

```text
N ──gobierna──▶ O

N ──restringe──▶ M

N ──restringe──▶ relación(R₁,R₂).
```

La competencia normativa queda limitada a aquello que la justifica.

Se conserva:

```text
gobernar
    ≠
constituir

gobernar
    ≠
derivar

gobernar
    ≠
realizar.
```

El hecho de gobernar un resultado u operación no concede autoridad para redefinir su contenido.

No se requiere un Plano normativo.

---

#### Realización

Un mecanismo `M` puede realizar una responsabilidad `C`:

```text
M ──realiza──▶ C.
```

La realización debe conservar aquello que recibe como contenido a realizar.

Se mantiene:

```text
realizar
    ≠
determinar nuevamente el contenido realizado.
```

El mecanismo puede estar simultáneamente sometido a restricciones:

```text
N ──restringe──▶ M.
```

La relación realizativa permanece diferenciada sin necesidad de un Plano realizativo.

---

#### Competencias

Las competencias se atribuyen directamente a sus portadores y objetos:

```text
competencia(X, derivar, E)

competencia(Y, gobernar, O)

competencia(Z, realizar, C).
```

La arquitectura conserva:

```text
competencias diferentes
    ≠
competencias intercambiables.
```

Asimismo:

```text
participar en una relación
    ≠
adquirir las competencias
de los demás participantes.
```

Cuando dos competencias sean incompatibles respecto de un mismo objeto o contexto, la incompatibilidad se expresa específicamente:

```text
incompatible(A,B,X).
```

No se exige que los portadores de competencias distintas pertenezcan a clases globalmente disjuntas.

---

#### Conservación semántica

`A*` impone las restricciones necesarias de conservación:

```text
uso
    ≠
modificación

uso
    ≠
reinterpretación

derivación
    ≠
alteración ilegítima de fundamentos

gobierno
    ≠
redefinición de lo gobernado

realización
    ≠
redefinición de lo realizado.
```

Estas restricciones se aplican directamente a las relaciones correspondientes.

No existe una autoridad colectiva encargada de preservar el conjunto.

---

#### Precedencia

La precedencia se deriva únicamente de dependencias concretas.

Si:

```text
R₁ fundamenta R₂
```

entonces:

```text
R₁ ≺ R₂
```

en el sentido justificativo pertinente.

No se introduce:

```text
Nivel A ≺ Nivel B.
```

La estructura resultante puede constituir un orden parcial de dependencias sin convertirse en una secuencia global de estratos.

---

#### Composición

La arquitectura permite composiciones como:

```text
R₁ ──fundamenta──▶ R₂
R₂ ──fundamenta──▶ R₃
```

y:

```text
{R₁,R₂} ──fundamentan conjuntamente──▶ E.
```

Las operaciones de composición deben preservar los contenidos y competencias pertinentes de sus fundamentos.

La concurrencia de varios fundamentos no genera por sí sola una unidad arquitectónica adicional.

---

#### Compatibilidad

Cuando varios resultados o restricciones deban mantenerse conjuntamente, `A*` exige la compatibilidad que corresponda:

```text
compatible(R₁,R₂,...,Rₙ).
```

La compatibilidad no depende de que los elementos pertenezcan a una misma clase ni a clases diferentes.

Se evalúa directamente respecto de los contenidos y relaciones pertinentes.

---

#### Conservación de identidad

En articulaciones evolutivas compuestas, `A*` conserva la identidad previamente establecida de los participantes.

Por ejemplo:

```text
MA-002(p,o₁,o₂)

MA-002(p,o₂,o₃)
```

pueden componerse como evolución del mismo participante únicamente mientras los fundamentos permitan conservar:

```text
p = mismo participante.
```

La composición conserva una identidad previamente establecida; no la constituye nuevamente.

No se necesita una autoridad ni un plano específico para realizar esa conservación.

---

#### Restricciones contra circularidad

Las dependencias pueden analizarse directamente como un grafo.

Una estructura:

```text
R₁ ⇒ R₂

R₂ ⇒ R₁
```

puede rechazarse cuando constituya una circularidad justificativa ilegítima según las reglas aplicables.

La detección y prohibición de ciclos no requieren niveles arquitectónicos.

---

#### Trazabilidad

`A*` permite reconstruir el recorrido justificativo y operativo de cualquier resultado.

Por ejemplo:

```text
R₁ ──fundamenta────▶ E

O  ──produce───────▶ E

N  ──gobierna──────▶ O

M  ──realiza───────▶ E.
```

A partir de estas relaciones puede determinarse:

- de qué depende `E`;
- mediante qué operación se produce;
- qué restricciones gobiernan esa operación;
- qué mecanismo realiza la responsabilidad correspondiente.

La trazabilidad procede de las relaciones conservadas, no de atravesar cuatro planos.

---

#### Garantías sistémicas

`A*` conserva las propiedades globales identificadas durante las pruebas anteriores.

Entre ellas:

```text
conservación extremo a extremo;

trazabilidad;

preservación de competencias;

compatibilidad global;

composición de garantías.
```

Estas propiedades resultan de las garantías locales y de sus reglas legítimas de composición.

No requieren una entidad adicional encargada de poseerlas.

---

#### Incorporación de nuevos elementos

Ante un nuevo elemento `X`, `A*` no pregunta inicialmente:

```text
¿a qué plano pertenece X?
```

Pregunta:

```text
¿Qué responsabilidad realiza?

¿Qué fundamentos posee?

¿Qué resultado produce?

¿De qué depende?

¿Qué relaciones mantiene?

¿Qué competencias ejerce?

¿Qué restricciones debe respetar?

¿Qué propiedad se pierde si se elimina?

¿Puede absorberse por otro elemento?
```

Su admisión se decide mediante estas propiedades.

No se requiere una taxonomía previa de cuatro clases.

---

#### Ejemplo de configuración válida

Una configuración mínima de `A*` podría adoptar la forma:

```text
R₁ ──fundamenta──────────────▶ R₂
 │                              │
 │                              ├──fundamenta──▶ R₃
 │                              │
 │                              └──realizado por──▶ M
 │                                                   ▲
 │                                                   │
 └────────────debe conservarse por───────────────────┘

N₁ ──gobierna───────────────▶ operación(R₁ → R₂)

N₂ ──restringe───────────────────────────────▶ M
```

En esta configuración pueden recuperarse directamente:

- fundamentación;
- derivación;
- normatividad;
- realización;
- conservación;
- trazabilidad;
- delimitación de competencias.

No existe ningún nodo equivalente a:

```text
Plano constitutivo
Plano derivativo
Plano normativo
Plano realizativo.
```

---

#### Intento de falsación del contraejemplo

Para invalidar `A*` sería necesario identificar una propiedad necesaria `Q` tal que:

```text
Q se conserva
en el esquema histórico de cuatro planos
```

pero:

```text
Q no puede conservarse en A*
```

aun cuando `A*` mantenga íntegramente los mismos resultados, responsabilidades, operaciones, normas, mecanismos, relaciones y restricciones.

Las pruebas realizadas hasta el momento no identifican dicha propiedad.

`A*` conserva:

```text
capacidades estructurales;

fundamentación;

derivación;

gobierno;

realización;

separación semántica de competencias;

no transferencia de autoridad;

precedencia justificativa;

compatibilidad;

composición;

conservación;

trazabilidad;

restricciones contra circularidad;

garantías sistémicas.
```

No aparece una contradicción provocada exclusivamente por la ausencia de los cuatro planos.

---

#### Resultado de la prueba

Se ha construido una arquitectura hipotética `A*` que:

1. elimina completamente los planos constitutivo, derivativo, normativo y realizativo;
2. no los sustituye por clases arquitectónicas equivalentes;
3. conserva las capacidades funcionales irreducibles;
4. conserva resultados, responsabilidades, operaciones, normas y mecanismos legítimos;
5. preserva las diferencias semánticas entre fundamentar, derivar, gobernar y realizar;
6. conserva las restricciones de competencia y autoridad;
7. mantiene precedencia justificativa, conservación, compatibilidad y composición;
8. permite trazabilidad y garantías sistémicas;
9. permite auditar e incorporar nuevos elementos sin clasificarlos previamente en planos;
10. no presenta, con los fundamentos examinados, ninguna contradicción derivada de la ausencia de la estratificación histórica.

Por tanto, existe al menos un contraejemplo reconstructivamente posible a la tesis:

```text
Toda arquitectura válida del núcleo
debe organizarse mediante:

Constitutivo
+
Derivativo
+
Normativo
+
Realizativo.
```

La posibilidad de `A*` muestra que las propiedades necesarias identificadas hasta el momento no determinan de manera única el antiguo esquema de cuatro planos.

En consecuencia, la necesidad de dicho esquema queda falsada respecto de esos fundamentos, salvo que una prueba posterior identifique una propiedad legítima no conservada por `A*`.

Este resultado no establece que `A*` deba convertirse en la arquitectura canónica del proyecto.

`A*` constituye únicamente un contraejemplo a la necesidad del esquema histórico.

La arquitectura definitiva deberá derivarse posteriormente de los resultados reconstruidos y no adoptarse automáticamente a partir de este contraejemplo.

---

### Exhaustividad del contenido diferencial del esquema completo

Se examinó sistemáticamente si queda alguna propiedad históricamente atribuible al esquema completo formado por los planos constitutivo, derivativo, normativo y realizativo que no haya sido cubierta por las pruebas precedentes.

El objetivo de esta prueba no consiste en volver a demostrar individualmente los resultados ya obtenidos.

Consiste en comprobar la exhaustividad de la reconstrucción:

```text
¿hemos identificado y sometido a prueba
todo aquello que podía distinguir
al esquema de cuatro planos
de una arquitectura que conserve directamente
sus resultados, responsabilidades,
competencias, relaciones y restricciones?
```

La prueba se refiere exclusivamente al contenido diferencial del esquema como organización conjunta.

No reabre las propiedades particulares de `RA-I`, `RA-E`, `RA-V` ni las responsabilidades concretas históricamente situadas en otros planos cuando éstas ya poseen reconstrucciones independientes.

---

#### Criterio de contenido diferencial

Una propiedad pertenece al contenido diferencial del esquema si satisface simultáneamente:

1. fue atribuida históricamente al esquema completo o resulta razonablemente implicada por su organización;
2. no pertenece exclusivamente a uno de sus elementos particulares;
3. desaparecería o cambiaría necesariamente al eliminar la organización en cuatro planos;
4. no puede reconstruirse íntegramente mediante resultados, responsabilidades, competencias, relaciones y restricciones conservadas.

Si una propiedad puede conservarse sin los planos, no constituye contenido diferencial irreducible del esquema.

---

#### Estratificación

La primera propiedad candidata era la propia división del núcleo en:

```text
Constitutivo
Derivativo
Normativo
Realizativo.
```

La prueba de necesidad de estratificación examinó si dicha división era exigida por alguna diferencia arquitectónica necesaria.

No se identificó tal necesidad.

Sobrevivieron diferencias entre responsabilidades y competencias.

No sobrevivió la necesidad de convertirlas en cuatro estratos arquitectónicos.

Por tanto:

```text
diferenciación de responsabilidades       ✓

estratificación necesaria                 ✗
```

Esta propiedad queda cubierta.

---

#### Orden global

Se examinó si los cuatro planos debían mantener necesariamente la cadena histórica:

```text
Constitutivo
      ↓
Derivativo
      ↓
Normativo
      ↓
Realizativo.
```

Las dependencias efectivas permitieron reconstruir precedencias locales y órdenes parciales.

No permitieron derivar una precedencia total entre los cuatro planos.

Por tanto:

```text
precedencias justificadas localmente      ✓

orden global entre planos                 ✗
```

Esta propiedad queda cubierta.

---

#### Separación de competencias

Se examinó si las diferencias entre:

```text
fundamentar
derivar
gobernar
realizar
```

obligaban a distribuir sus portadores entre planos distintos.

La diferenciación semántica de competencias sobrevivió.

No sobrevivió la inferencia:

```text
competencias diferentes
        ⇒
planos diferentes.
```

Tampoco se demostró que un mismo portador no pudiera ejercer competencias distintas cuando ninguna incompatibilidad independiente lo prohibiera.

Por tanto:

```text
diferenciación de competencias            ✓

separación necesaria en planos            ✗
```

Esta propiedad queda cubierta.

---

#### Dependencias entre planos

Se examinaron afirmaciones históricas como:

```text
las operaciones derivadas consumen
resultados previamente constituidos;

las normas gobiernan
autoridades y operaciones;

los mecanismos realizativos
implementan responsabilidades.
```

Las dependencias legítimas pudieron reconstruirse entre elementos concretos mediante relaciones como:

```text
fundamenta
depende de
deriva de
gobierna
restringe
realiza
conserva.
```

No se justificó elevar dichas relaciones a dependencias irreducibles entre planos completos.

Por tanto:

```text
dependencias entre elementos              ✓

dependencias irreducibles entre planos    ✗
```

Esta propiedad queda cubierta.

---

#### Exhaustividad de la partición

Se examinó si todo elemento legítimo del núcleo debía pertenecer necesariamente a alguno de los cuatro planos:

```text
Núcleo = C ∪ D ∪ N ∪ R.
```

La cobertura histórica de los elementos conocidos no permitió demostrar la exhaustividad necesaria de la clasificación.

Tampoco la completitud funcional de otros cuerpos pudo transferirse legítimamente a la clasificación arquitectónica.

Por tanto:

```text
capacidad de clasificar casos conocidos   ✓

exhaustividad necesaria de los planos     ✗
```

Esta propiedad queda cubierta.

---

#### Exclusividad

Se examinó si las cuatro categorías debían ser mutuamente disjuntas:

```text
C ∩ D = ∅
C ∩ N = ∅
C ∩ R = ∅
D ∩ N = ∅
D ∩ R = ∅
N ∩ R = ∅.
```

Las diferencias entre competencias no permitieron inferir disyunción entre sus portadores.

Las incompatibilidades legítimas pueden expresarse como restricciones locales.

Por tanto:

```text
incompatibilidades específicas            ✓

exclusividad global de los planos         ✗
```

Esta propiedad queda cubierta.

---

#### Clausura

Se examinó si cada plano poseía criterios independientes capaces de determinar:

```text
qué entra;
qué queda fuera;
qué transformaciones conservan pertenencia;
cuándo aparece un nuevo miembro;
cuándo deja de pertenecer.
```

No se reconstruyeron criterios de clausura suficientes para las cuatro unidades arquitectónicas.

Las relaciones permiten determinar qué hacen los elementos sin determinar necesariamente a qué plano pertenecen.

Por tanto:

```text
criterios sobre relaciones y competencias ✓

clausura propia de los planos             ✗
```

Esta propiedad queda cubierta.

---

#### Completitud global

Se examinó si la combinación de los cuatro planos garantizaba por sí misma la suficiencia arquitectónica del núcleo.

No pudo derivarse:

```text
cuatro planos
        ⇒
arquitectura completa.
```

La suficiencia debe evaluarse respecto de responsabilidades y garantías necesarias, no respecto de la presencia de cuatro contenedores determinados.

Por tanto:

```text
completitud relativa de capacidades
cuando esté demostrada                     ✓

completitud del esquema de planos          ✗
```

Esta propiedad queda cubierta.

---

#### Propiedad emergente

Se examinó si la interacción conjunta de fundamentación, derivación, gobierno y realización producía alguna garantía sistémica irreducible.

Se consideraron, entre otras:

```text
conservación extremo a extremo;
trazabilidad;
preservación de competencias;
compatibilidad global;
composición de garantías;
detección de desviaciones.
```

Estas propiedades pudieron reconstruirse mediante composición de relaciones y garantías locales.

No se identificó una propiedad sistémica que exigiera los cuatro planos como unidad.

Por tanto:

```text
propiedades sistémicas                     ✓

propiedad emergente exclusiva
del esquema de cuatro planos               ✗
```

Esta propiedad queda cubierta.

---

#### Sustitución relacional

Se eliminó simultáneamente el esquema completo y se conservaron:

```text
resultados;
responsabilidades;
operaciones;
normas;
mecanismos;
competencias;
relaciones;
restricciones.
```

La reconstrucción mantuvo las capacidades y garantías identificadas sin necesidad de recuperar la clasificación histórica.

Por tanto:

```text
contenido necesario                        ✓

necesidad de sus contenedores históricos  ✗
```

La sustituibilidad del esquema queda cubierta.

---

#### Reintroducción encubierta

Se examinó si expresiones como:

```text
resultados fundamentales;
resultados derivados;
sistema normativo;
capa realizativa;
red de resultados;
conjunto de mecanismos;
```

reintroducían silenciosamente los planos eliminados.

Se estableció que una agrupación permanece descriptiva mientras no adquiera sin justificación independiente:

```text
identidad colectiva;
clausura;
autoridad;
exclusividad;
completitud;
precedencia global;
dependencia colectiva.
```

Incluso las etiquetas colectivas pueden eliminarse conservando las afirmaciones concretas.

Por tanto:

```text
agrupaciones descriptivas                  ✓

reintroducción necesaria de los planos     ✗
```

Esta propiedad queda cubierta.

---

#### Contraejemplo arquitectónico

Se construyó una arquitectura hipotética `A*` sin los cuatro planos que conserva:

```text
CAN-F1;
CAN-F2;
CAN-F3;

fundamentación;
derivación;
gobierno;
realización;

competencias;
restricciones;
conservación;
compatibilidad;
precedencia justificativa;
trazabilidad;
composición;
garantías sistémicas.
```

No se identificó contradicción derivada exclusivamente de la ausencia de los planos.

Por tanto, existe al menos una arquitectura reconstructivamente posible en la que:

```text
propiedades necesarias
        ✓

esquema de cuatro planos
        ausente.
```

Esta prueba proporciona un contraejemplo directo a la necesidad del esquema respecto de los fundamentos actualmente identificados.

---

#### Búsqueda de propiedades residuales

Cubiertas las propiedades anteriores, se buscó si podía quedar alguna característica adicional del esquema completo.

Se consideraron especialmente las siguientes posibilidades.

##### Identidad colectiva

Podría sostenerse que los cuatro planos forman conjuntamente una unidad arquitectónica con identidad propia.

Pero una identidad colectiva sólo tendría contenido diferencial si produjera alguna propiedad necesaria no reducible a sus elementos y relaciones.

No se ha identificado tal propiedad.

La mera denominación del conjunto:

```text
arquitectura de cuatro planos
```

no constituye una exigencia arquitectónica.

##### Frontera global

Podría existir una frontera que separara el esquema completo de aquello que queda fuera de él.

Sin embargo, la prueba de exhaustividad no reconstruyó que todo elemento legítimo deba pertenecer a uno de los cuatro planos.

La frontera debe establecerse mediante criterios independientes de pertenencia al núcleo, no mediante pertenencia a la partición histórica.

No aparece aquí contenido diferencial adicional.

##### Autoridad del esquema

Podría atribuirse al esquema como conjunto autoridad para determinar la posición o competencia de sus miembros.

Pero las auditorías de autoridades particulares y las pruebas de competencias no han identificado una fuente independiente de autoridad derivada de la mera pertenencia al esquema.

La autoridad debe localizarse donde exista fundamento específico para ella.

No aparece una autoridad colectiva residual.

##### Invariancia arquitectónica

Podría sostenerse que toda realización válida debe conservar la estructura de cuatro planos aunque cambien sus componentes internos.

Sin embargo, el contraejemplo `A*` muestra precisamente una realización reconstructivamente posible que conserva las propiedades necesarias sin conservar esa estructura.

Por tanto, la invariancia de la partición no puede derivarse de los fundamentos examinados.

##### Modularidad

Los planos podrían defenderse como módulos útiles para organizar responsabilidades.

Esta posibilidad no se niega.

Una clasificación puede poseer utilidad:

```text
documental;
pedagógica;
organizativa;
heurística;
implementativa.
```

sin constituir por ello una exigencia arquitectónica necesaria.

La utilidad modular no debe confundirse con irreducibilidad.

##### Economía descriptiva

Los cuatro planos pueden proporcionar una abreviación conveniente para hablar conjuntamente de determinados grupos de responsabilidades.

Tampoco esta propiedad exige su conservación en el núcleo.

Una abreviatura descriptiva puede mantenerse cuando resulte útil, siempre que no se le atribuyan propiedades arquitectónicas no justificadas.

##### Historia de la investigación

El esquema posee además valor histórico: registra una etapa mediante la cual se descubrieron y organizaron responsabilidades posteriormente reconstruidas.

Esta propiedad es real, pero pertenece a la historia de la investigación y a la documentación.

No constituye una propiedad estructural necesaria del núcleo.

---

#### Control de categorías residuales

Después de las pruebas realizadas, las propiedades históricamente asociables al esquema completo pueden distribuirse provisionalmente en tres grupos.

```text
A. Propiedades que sobreviven

- diferenciación de responsabilidades;
- diferenciación de competencias;
- fundamentación;
- derivación;
- gobierno;
- realización;
- restricciones de autoridad;
- conservación;
- compatibilidad;
- precedencias justificadas;
- trazabilidad;
- composición de garantías;
- propiedades sistémicas reconstruibles.
```

```text
B. Propiedades no reconstruidas como necesarias

- estratificación;
- orden global;
- separación de portadores por planos;
- dependencias entre planos;
- exhaustividad;
- exclusividad;
- clausura;
- completitud del esquema;
- propiedad emergente irreducible;
- identidad colectiva necesaria;
- autoridad colectiva;
- invariancia de la partición.
```

```text
C. Propiedades legítimas pero no estructuralmente fundamentales

- utilidad documental;
- modularidad expositiva;
- economía descriptiva;
- valor histórico;
- utilidad heurística.
```

Esta clasificación permite conservar el contenido legítimo sin mantener como estructural aquello que sólo posea valor documental o histórico.

---

#### Prueba de residuo

Se formula finalmente la pregunta más fuerte:

```text
Eliminadas todas las propiedades del grupo B
y reclasificadas las propiedades del grupo C,

¿queda alguna propiedad necesaria Q
que sólo pueda expresarse diciendo que
el núcleo está organizado en cuatro planos?
```

Con los fundamentos actualmente examinados, no se ha identificado tal `Q`.

Todo contenido necesario encontrado pertenece al grupo A y puede expresarse mediante elementos, responsabilidades, competencias, relaciones, restricciones y reglas de composición.

Por tanto, no queda actualmente un residuo diferencial positivo que obligue a conservar el esquema de cuatro planos como unidad arquitectónica.

---

#### Resultado de la prueba

La revisión sistemática no identifica ninguna propiedad históricamente atribuible al esquema completo de cuatro planos que permanezca simultáneamente:

1. necesaria;
2. específicamente atribuible al esquema como conjunto;
3. independiente de sus elementos y relaciones;
4. no cubierta por las pruebas precedentes;
5. imposible de reconstruir mediante la arquitectura relacional;
6. ausente del contraejemplo `A*`.

Las propiedades necesarias históricamente expresadas mediante el esquema sobreviven como:

```text
resultados;
responsabilidades;
competencias;
operaciones;
normas;
mecanismos;
relaciones;
restricciones;
garantías locales y compuestas.
```

Las propiedades colectivas específicamente atribuibles a la organización en cuatro planos no han demostrado irreducibilidad.

Por tanto, con el catálogo histórico y los fundamentos actualmente examinados, el contenido diferencial reconstruible del antiguo esquema completo de cuatro planos se considera agotado.

Este resultado no demuestra que futuras investigaciones no puedan descubrir una propiedad adicional.

Establece una conclusión más limitada:

```text
no queda actualmente ninguna propiedad
históricamente identificada o reconstructivamente
plausible del esquema completo
que no haya sido sometida a prueba.
```

En consecuencia, la reconstrucción puede considerarse suficientemente exhaustiva para pasar a la auditoría final del antiguo esquema de cuatro planos.

---

### Auditoría final del antiguo esquema de cuatro planos

Una vez agotado provisionalmente el contenido diferencial reconstruible del antiguo esquema formado por los planos constitutivo, derivativo, normativo y realizativo, se somete la reconstrucción obtenida a una auditoría final.

La finalidad de esta auditoría no consiste en demostrar nuevamente cada resultado particular.

Su objetivo consiste en comprobar que la eliminación del esquema como estructura arquitectónica necesaria:

1. representa fielmente aquello que históricamente se afirmaba;
2. cubre las propiedades relevantes del esquema;
3. elimina únicamente aquello cuya necesidad no ha podido justificarse;
4. conserva todos los resultados legítimos descubiertos mediante la arquitectura histórica;
5. no depende circularmente de la conclusión que pretende establecer;
6. no reintroduce los cuatro planos bajo nuevas denominaciones.

La reconstrucción sólo podrá considerarse provisionalmente cerrada si supera conjuntamente estos controles.

---

#### Fidelidad histórica

##### Objeto del control

Debe comprobarse que la reconstrucción no debilite artificialmente el esquema histórico para facilitar su eliminación.

El objeto sometido a prueba no era una simple clasificación documental formada por cuatro etiquetas.

El esquema atribuía relevancia arquitectónica a la diferenciación entre:

```text
Constitutivo

Derivativo

Normativo

Realizativo
```

y organizaba mediante ella responsabilidades relativas a:

```text
constitución o fundamentación;
derivación;
gobierno;
realización.
```

También aparecían asociadas históricamente ideas como:

- diferenciación de competencias;
- dependencias;
- precedencias;
- conservación;
- autoridad;
- garantías;
- realización de responsabilidades.

La reconstrucción no niega que estas diferencias existieran ni que fueran utilizadas productivamente durante la investigación.

##### Comprobación

Las pruebas realizadas no eliminaron directamente el esquema por considerarlo meramente terminológico.

Por el contrario, se examinó sucesivamente si poseía:

```text
estratificación necesaria;
orden global;
separación de competencias;
dependencias entre planos;
exhaustividad;
exclusividad;
clausura;
completitud;
propiedades emergentes;
contenido irreducible frente
a una sustitución relacional.
```

Posteriormente se comprobó:

```text
la posible reintroducción encubierta;
la existencia de un contraejemplo arquitectónico;
la exhaustividad de su contenido diferencial.
```

Por tanto, la reconstrucción tomó en consideración precisamente las propiedades fuertes que podían conferir realidad arquitectónica a los cuatro planos.

##### Resultado

No se detecta una reducción retrospectiva del esquema histórico a una simple taxonomía.

La reconstrucción reconoce que el esquema desempeñó una función arquitectónica efectiva durante una fase de la investigación y somete esa función, en su versión fuerte, a falsación.

```text
Fidelidad histórica
        ✔ superada provisionalmente.
```

---

#### Cobertura

##### Objeto del control

Debe comprobarse que ninguna propiedad relevante atribuible al esquema completo haya quedado fuera de la reconstrucción.

Una eliminación podría ser incorrecta aunque todas las propiedades examinadas fueran reducibles si quedara una propiedad diferencial no sometida a prueba.

##### Comprobación

La secuencia de pruebas cubrió:

```text
1. necesidad de estratificación;

2. orden global;

3. separación de competencias;

4. dependencia entre planos;

5. exhaustividad de la partición;

6. exclusividad;

7. clausura;

8. completitud;

9. propiedad emergente;

10. sustitución relacional;

11. reintroducción encubierta;

12. contraejemplo arquitectónico;

13. exhaustividad del contenido diferencial.
```

La última prueba realizó además una búsqueda explícita de propiedades residuales, incluyendo:

```text
identidad colectiva;
frontera global;
autoridad del esquema;
invariancia arquitectónica;
modularidad;
economía descriptiva;
valor histórico.
```

Las propiedades necesarias encontradas pudieron conservarse independientemente de los cuatro planos.

Las restantes resultaron no demostradas como necesarias o pertenecientes a funciones documentales, heurísticas o históricas.

##### Resultado

No se identifica actualmente una propiedad históricamente atribuible o reconstructivamente plausible del esquema completo que haya quedado fuera de la secuencia de pruebas.

```text
Cobertura
        ✔ superada provisionalmente.
```

---

#### Proporcionalidad

##### Objeto del control

Debe comprobarse que la reconstrucción no extraiga una conclusión más fuerte que la evidencia obtenida.

De:

```text
los cuatro planos no han demostrado
ser arquitectónicamente necesarios
```

no puede inferirse automáticamente:

```text
los cuatro planos carecían de utilidad;
```

ni:

```text
todo aquello que contenían era incorrecto;
```

ni:

```text
ninguna arquitectura futura puede
utilizar una organización semejante.
```

##### Comprobación

La conclusión alcanzada se limita a la necesidad reconstructiva.

Las pruebas permiten sostener:

```text
los fundamentos actualmente aceptados
no obligan a conservar
el esquema de cuatro planos
como estructura arquitectónica necesaria.
```

No permiten sostener:

```text
el esquema nunca fue útil;
```

ni:

```text
está prohibido utilizarlo
como organización documental;
```

ni:

```text
ninguna implementación válida
puede organizarse de forma semejante.
```

También se ha conservado expresamente su posible utilidad:

```text
histórica;
documental;
pedagógica;
heurística;
organizativa.
```

La existencia del contraejemplo `A*` tampoco se interpreta como demostración de que `A*` deba convertirse en la arquitectura definitiva.

`A*` demuestra únicamente que:

```text
propiedades necesarias identificadas
        ⇏
esquema único de cuatro planos.
```

##### Resultado

La fuerza de la conclusión permanece limitada a aquello que las pruebas permiten establecer.

```text
Proporcionalidad
        ✔ superada provisionalmente.
```

---

#### Conservación de resultados legítimos

##### Objeto del control

La eliminación de una estructura arquitectónica no puede provocar la eliminación de resultados cuya necesidad haya sido establecida independientemente.

Debe distinguirse:

```text
eliminar los planos
```

de:

```text
eliminar el contenido legítimo
que históricamente fue organizado mediante ellos.
```

##### Comprobación

La reconstrucción conserva las capacidades estructurales irreducibles actualmente aceptadas:

```text
CAN-F1 — Individuación

CAN-F2 — Articulación estructural

CAN-F3 — Articulación evolutiva
```

Conserva igualmente las realizaciones que posean fundamento independiente, entre ellas:

```text
P-001
MA-001
MA-002
```

sin convertirlas por ello en miembros necesarios de un Plano constitutivo.

También conserva, cuando estén justificadas:

```text
fundamentación;
dependencia;
derivación;
producción;
gobierno;
restricción;
realización;
uso;
conservación;
compatibilidad;
precedencia justificativa;
composición;
trazabilidad.
```

Se conservan además las diferencias semánticas necesarias:

```text
fundamentar
    ≠
derivar;

derivar
    ≠
gobernar;

gobernar
    ≠
realizar;

usar
    ≠
modificar;

realizar
    ≠
redefinir.
```

Asimismo sobreviven las restricciones contra transferencias ilegítimas de competencia o autoridad.

Las propiedades sistémicas legítimas tampoco desaparecen.

Pueden conservarse mediante composición de garantías locales cuando dicha composición esté justificada:

```text
conservación extremo a extremo;
trazabilidad;
compatibilidad;
preservación de competencias;
composición de garantías.
```

##### Resultado

La eliminación de los cuatro planos afecta a la organización colectiva cuya necesidad no ha sido reconstruida, no a los resultados legítimos descubiertos durante su utilización.

```text
Conservación de resultados legítimos
        ✔ superada provisionalmente.
```

---

#### Ausencia de circularidad

##### Objeto del control

Debe comprobarse que la eliminación del esquema no haya sido obtenida presuponiendo desde el principio una arquitectura sin planos.

Una reconstrucción circular adoptaría una forma como:

```text
los planos no son necesarios
porque todo debe representarse relacionalmente;

todo debe representarse relacionalmente
porque los planos no son necesarios.
```

Ese razonamiento sería inválido.

##### Comprobación

La investigación no partió de la afirmación:

```text
la arquitectura correcta es relacional.
```

La secuencia comenzó aceptando provisionalmente las propiedades históricas del esquema y preguntando si podían justificarse independientemente.

Cada propiedad fue sometida a pruebas específicas de eliminación o reconstrucción.

La sustitución relacional sólo se introdujo después de comprobar que:

```text
estratificación;
orden global;
separación por planos;
dependencias entre planos;
exhaustividad;
exclusividad;
clausura;
completitud;
```

no habían demostrado necesidad.

Posteriormente, la propia sustitución relacional fue sometida a:

```text
prueba de propiedad emergente;
prueba de reintroducción encubierta;
contraejemplo arquitectónico;
exhaustividad del contenido diferencial.
```

Además, `A*` no fue utilizada como premisa para demostrar que los planos eran innecesarios.

Fue construida posteriormente como intento de falsación de su necesidad.

La dirección argumentativa es:

```text
fundamentos independientes
        ↓
pruebas de las propiedades del esquema
        ↓
eliminación de propiedades no necesarias
        ↓
sustitución posible
        ↓
construcción de A*
        ↓
comprobación del resultado.
```

No:

```text
A* es correcta
        ↓
los planos son incorrectos.
```

##### Resultado

La conclusión no depende de presuponer la arquitectura obtenida.

```text
Ausencia de circularidad
        ✔ superada provisionalmente.
```

---

#### Ausencia de reintroducción nominal

##### Objeto del control

Debe comprobarse que los cuatro planos no hayan sido eliminados únicamente de nombre.

Una reconstrucción fallaría si sustituyera:

```text
Constitutivo
Derivativo
Normativo
Realizativo
```

por:

```text
nivel fundamental
nivel de derivación
nivel normativo
capa de realización
```

manteniendo exactamente:

```text
identidad colectiva;
clausura;
autoridad;
exclusividad;
orden global;
dependencias entre niveles.
```

##### Comprobación

La reconstrucción permite agrupaciones descriptivas como:

```text
resultados fundamentales;
resultados derivados;
normas;
mecanismos;
portadores de determinadas competencias.
```

pero ninguna de ellas adquiere por defecto:

```text
identidad arquitectónica propia;
clausura;
autoridad colectiva;
competencia colectiva;
exclusividad;
completitud;
precedencia global.
```

Las afirmaciones relevantes permanecen ligadas a elementos concretos:

```text
R₁ fundamenta R₂;

O deriva E;

N gobierna O;

N restringe M;

M realiza C.
```

No se proyectan automáticamente como:

```text
Fundamentos preceden a Derivados;

Normativo gobierna Derivativo;

Realizativo depende de Normativo.
```

La propia expresión:

```text
arquitectura relacional
```

tampoco constituye una nueva unidad obligatoria.

Puede eliminarse conservando las relaciones concretas.

Igualmente, `A*` no constituye un quinto plano ni una nueva estratificación.

Es únicamente una construcción utilizada para demostrar la posibilidad de conservar los resultados necesarios sin el esquema histórico.

##### Resultado

No se identifica actualmente una estructura nueva que reproduzca bajo otra terminología las propiedades colectivas no reconstruidas de los cuatro planos.

```text
Ausencia de reintroducción nominal
        ✔ superada provisionalmente.
```

---

#### Control cruzado

Los seis controles producen conjuntamente:

| Control                              | Resultado                   |
| ------------------------------------ | --------------------------- |
| Fidelidad histórica                  | ✔ Superado provisionalmente |
| Cobertura                            | ✔ Superado provisionalmente |
| Proporcionalidad                     | ✔ Superado provisionalmente |
| Conservación de resultados legítimos | ✔ Superado provisionalmente |
| Ausencia de circularidad             | ✔ Superado provisionalmente |
| Ausencia de reintroducción nominal   | ✔ Superado provisionalmente |

Ningún control exige restaurar el esquema de cuatro planos.

Tampoco aparece durante la auditoría una propiedad residual que obligue a reabrir alguna de las pruebas anteriores.

---

#### Resultado de la auditoría

La reconstrucción del antiguo esquema de cuatro planos supera provisionalmente los controles de:

```text
fidelidad histórica;
cobertura;
proporcionalidad;
conservación de resultados legítimos;
ausencia de circularidad;
ausencia de reintroducción nominal.
```

La auditoría confirma que la reconstrucción no depende de negar las diferencias legítimas históricamente expresadas mediante los planos.

Por el contrario, conserva aquellas diferencias que poseen fundamento independiente y elimina únicamente la necesidad de organizarlas mediante las cuatro unidades arquitectónicas:

```text
Constitutivo
Derivativo
Normativo
Realizativo.
```

No queda reconstruida como necesaria ninguna propiedad colectiva del esquema relativa a:

```text
estratificación;
orden global;
separación global de competencias;
dependencias entre planos;
exhaustividad;
exclusividad;
clausura;
completitud;
autoridad colectiva;
propiedad emergente irreducible;
invariancia de la partición.
```

Las propiedades legítimas sobreviven mediante:

```text
resultados;
responsabilidades;
competencias;
operaciones;
normas;
mecanismos;
relaciones;
restricciones;
garantías locales;
reglas justificadas de composición.
```

La arquitectura hipotética `A*` proporciona además un contraejemplo reconstructivamente posible a la tesis de que toda arquitectura válida del núcleo deba conservar necesariamente los cuatro planos.

La auditoría no establece que `A*` constituya la arquitectura definitiva.

Tampoco establece que el esquema histórico carezca de valor documental, heurístico o histórico.

Establece únicamente que, con los fundamentos y el catálogo actualmente examinados, la organización en cuatro planos no ha demostrado constituir una exigencia arquitectónica necesaria.

No se identifica ninguna deficiencia que obligue a reabrir la reconstrucción antes de formular su resultado.

**Estado de la auditoría:** superada provisionalmente.

En consecuencia, la reconstrucción del antiguo esquema de cuatro planos puede considerarse suficientemente auditada para formular su resultado consolidado.

---

## 3. Resultado de la reconstrucción

La reconstrucción del antiguo esquema arquitectónico formado por los planos constitutivo, derivativo, normativo y realizativo no permite conservar dicha organización como estructura necesaria del núcleo.

Las pruebas realizadas no han identificado ninguna propiedad irreducible que exija mantener simultáneamente:

```text
Plano constitutivo

Plano derivativo

Plano normativo

Plano realizativo
```

como clases arquitectónicas diferenciadas, ordenadas, exhaustivas, exclusivas, cerradas o colectivamente necesarias.

La necesidad de estratificación no ha quedado establecida.

Tampoco ha quedado establecido un orden global necesario:

```text
Constitutivo
    ↓
Derivativo
    ↓
Normativo
    ↓
Realizativo
```

Las dependencias justificadas permanecen como relaciones concretas entre resultados, operaciones, normas, mecanismos y responsabilidades, y no obligan a proyectarse como dependencias entre planos completos.

La diferenciación de competencias permanece necesaria, pero no exige que sus portadores pertenezcan a clases arquitectónicas mutuamente exclusivas.

En particular, sobreviven distinciones como:

```text
fundamentar
    ≠
derivar

derivar
    ≠
gobernar

gobernar
    ≠
realizar

utilizar
    ≠
modificar

realizar
    ≠
redefinir
```

así como las restricciones que impiden transferencias ilegítimas de competencia o autoridad.

Estas diferencias pueden conservarse directamente mediante las relaciones y condiciones de ejercicio correspondientes.

No se ha reconstruido tampoco que los cuatro planos constituyan una partición exhaustiva del núcleo.

La cobertura de los elementos históricamente conocidos no demuestra que todo elemento legítimo deba pertenecer necesariamente a alguna de esas cuatro categorías.

Del mismo modo, no se ha demostrado que dichas categorías sean mutuamente exclusivas.

Un mismo elemento puede desempeñar papeles diferentes respecto de relaciones diferentes, siempre que ninguna incompatibilidad independientemente justificada lo prohíba.

Por tanto, los papeles arquitectónicos no requieren convertirse en propiedades globales e invariantes de sus portadores.

No se ha identificado para los cuatro planos una clausura propia capaz de determinar de manera independiente:

```text
qué entra;

qué queda fuera;

qué transformaciones conservan pertenencia;

cuándo debe incorporarse un nuevo miembro;

cuándo deja de pertenecer.
```

Las relaciones y competencias permiten describir completamente el comportamiento de los elementos sin necesidad de una función adicional que determine:

```text
plano(X).
```

La completitud global del esquema tampoco ha quedado reconstruida.

La suficiencia arquitectónica debe evaluarse respecto de las responsabilidades necesarias, sus fundamentos, dependencias, restricciones y garantías, no respecto de la presencia de cuatro contenedores históricos determinados.

La ausencia de una quinta categoría conocida tampoco demuestra la completitud necesaria de las cuatro existentes.

La interacción conjunta entre fundamentación, derivación, gobierno y realización puede producir propiedades sistémicas legítimas.

Entre ellas pueden encontrarse:

```text
conservación extremo a extremo;

trazabilidad;

preservación de competencias;

compatibilidad global;

composición de garantías.
```

Sin embargo, estas propiedades resultan reconstruibles mediante la composición de relaciones, restricciones y garantías locales.

No se ha identificado una propiedad emergente irreducible cuya conservación requiera mantener el esquema de cuatro planos como unidad arquitectónica.

La sustitución completa del esquema por:

```text
resultados
+
responsabilidades
+
operaciones
+
normas
+
mecanismos
+
competencias
+
relaciones
+
restricciones
```

no ha producido ninguna pérdida necesaria identificada.

Permanecen relaciones como:

```text
fundamenta
depende de
deriva de
produce
gobierna
restringe
realiza
utiliza
conserva
```

junto con las condiciones de compatibilidad, precedencia justificativa, composición, conservación semántica y dirección que correspondan en cada caso.

Estas relaciones no constituyen una nueva estratificación.

Su función consiste en expresar directamente las dependencias y competencias justificadas.

Las agrupaciones descriptivas como:

```text
resultados fundamentales;
resultados derivados;
normas;
mecanismos;
fundamentos del núcleo;
sistema normativo;
capa realizativa;
```

pueden utilizarse cuando resulten útiles, siempre que permanezcan eliminables sin alterar ningún resultado, dependencia, competencia o restricción.

Su utilización no establece por sí misma:

- identidad colectiva;
- autoridad colectiva;
- clausura;
- exhaustividad;
- exclusividad;
- completitud;
- precedencia global;
- dependencia entre agrupaciones.

Cualquier propiedad de esta naturaleza requerirá justificación independiente.

La arquitectura hipotética `A*` demuestra además que puede construirse, con los fundamentos actualmente examinados, una configuración arquitectónica que preserve:

```text
capacidades estructurales;

fundamentación;

derivación;

gobierno;

realización;

competencias;

restricciones;

conservación;

compatibilidad;

composición;

trazabilidad;

precedencia justificativa;

garantías sistémicas;
```

sin utilizar los cuatro planos históricos.

`A*` constituye únicamente un contraejemplo a la necesidad del esquema.

No se adopta como arquitectura canónica ni determina la forma de una realización futura.

Su existencia establece únicamente que las propiedades necesarias identificadas no determinan de manera única:

```text
Constitutivo
+
Derivativo
+
Normativo
+
Realizativo.
```

La reconstrucción conserva, por tanto, las responsabilidades y diferencias legítimas históricamente organizadas mediante el esquema, pero no conserva como necesaria la estructura colectiva que las agrupaba.

El resultado reconstruido puede expresarse provisionalmente mediante:

```text
Resultados y responsabilidades legítimamente establecidos
        +
Operaciones, normas, mecanismos y competencias necesarias
        +
Relaciones justificadas entre ellos
        +
Restricciones y garantías aplicables a dichas relaciones
```

sin que resulte necesario introducir una partición arquitectónica previa en cuatro planos.

### Estado

**Reconstrucción completada.**

El antiguo esquema de cuatro planos no sobrevive, con los fundamentos actualmente examinados, como estructura arquitectónica necesaria del núcleo.

No quedan reconstruidas como necesarias:

```text
estratificación;
orden global;
partición exhaustiva;
exclusividad;
clausura;
completitud global;
autoridad colectiva;
dependencias entre planos;
propiedad emergente irreducible;
invariancia de la partición.
```

Permanecen conservados independientemente:

```text
resultados;
responsabilidades;
competencias;
operaciones;
normas;
mecanismos;
dependencias;
restricciones;
garantías locales y compuestas.
```

La eventual utilización futura de una organización en planos o capas podrá justificarse por razones documentales, heurísticas, implementativas u otras razones independientes.

No podrá considerarse, a partir de los fundamentos actualmente reconstruidos, una consecuencia necesaria de la teoría conceptual ni de la arquitectura mínima del núcleo.
