# 13 Marco de realización

# Marco de realización

## Propósito

Este documento investiga qué condiciones debe satisfacer una realización concreta para conservar fielmente los compromisos conceptuales que una especialización haya justificado, sin convertir decisiones técnicas de representación, almacenamiento, procesamiento o acceso en compromisos conceptuales adicionales.

Su pregunta rectora es:

> ¿Qué debe conservar una realización para ser compatible con una especialización y qué decisiones puede adoptar libremente sin adquirir autoridad conceptual?

El documento no diseña:

- una arquitectura de software;
- una base de datos;
- una API;
- una interfaz;
- un sistema de persistencia;
- un formato de serialización;
- un lenguaje de programación;
- ni una infraestructura concreta.

Tampoco presupone que exista un conjunto universal positivo de responsabilidades realizativas.

---

# Estado documental

`13-marco-de-realizacion.md` se construye por primera vez.

La denominación histórica:

```text
13-modelo-operacional.md
```

fue sustituida antes de su construcción por:

```text
13-marco-de-realizacion.md
```

porque «modelo operacional» podía presuponer la existencia de:

- operaciones universales;
- entradas;
- resultados;
- transformaciones;
- capacidades funcionales fundamentales;

cuya necesidad ha dejado de estar demostrada.

---

# Justificación documental

La existencia de este documento queda justificada por una pregunta que no está resuelta íntegramente por `08` ni por `12`.

`08-regimen-de-especializacion.md` determina el estatuto de los compromisos conceptuales locales.

`12-reconstrucciones-conservativas.md` demuestra que el contenido legítimo histórico puede recuperarse sin restaurar el antiguo núcleo universal.

Pero todavía falta responder:

```text
especialización conceptual
        ↓
?
        ↓
sistema concreto
```

En particular:

> ¿qué debe ocurrir cuando un compromiso conceptual local debe ser representado, almacenado, consultado, calculado o transformado mediante mecanismos técnicos?

Por tanto:

```text
especializar
≠
realizar
```

y:

```text
reconstruir conservativamente
≠
realizar técnicamente.
```

---

# Entrada consolidada

La investigación parte de:

```text
F_irreducibles_universales = ∅

ES_universales_positivas = ∅

PF_min = ∅

Σ_min = ∅

Ax_min = ∅

RE_universal_positivo = ∅
```

junto con:

```text
especializaciones locales
pueden poseer:

Σ_E ≠ ∅

Ax_E ≠ ∅
```

y con el resultado reconstructivo:

```text
contenido legítimo local
puede conservarse
sin restaurar
la arquitectura histórica.
```

---

# Distinción fundamental

Debe mantenerse:

```text
compromiso conceptual C
```

distinto de:

```text
mecanismo técnico M
que realiza C.
```

Una especialización puede afirmar, por ejemplo:

```text
Existe TipoEjemplar
```

mientras una realización puede decidir representarlo mediante:

```text
tabla SQL;
clase;
documento JSON;
registro;
grafo;
estructura en memoria.
```

Ninguna de esas decisiones determina por sí sola qué es conceptualmente un ejemplar.

Por tanto:

```text
representación técnica
⇏
compromiso conceptual.
```

---

# Problema de autoridad

Una realización produce inevitablemente diferencias técnicas.

Por ejemplo:

```text
UUID
clave primaria
fila
documento
objeto
archivo
índice
caché
versión
timestamp
```

El riesgo es inferir:

```text
existe técnicamente X
        ↓
X pertenece conceptualmente
al dominio.
```

Esta inferencia no está autorizada.

---

# Hipótesis principal

## `H-MR-1`

> Existe un conjunto universal positivo mínimo de condiciones realizativas que toda realización compatible debe satisfacer.

Posibles candidatas históricas o intuitivas:

```text
fidelidad;
conservación;
reversibilidad;
trazabilidad;
identidad técnica estable;
persistencia;
completitud;
neutralidad;
interoperabilidad;
determinismo;
verificabilidad.
```

Cada una deberá ser sometida a reducción.

---

# Criterio de supervivencia

Una condición `MR-Ci` sólo podrá formar parte de un marco universal positivo si:

1. toda realización compatible debe satisfacerla;
2. posee contenido independiente;
3. no es mera reformulación de «realizar correctamente»;
4. no pertenece exclusivamente a una especialización concreta;
5. no es sólo una regla metodológica;
6. no es sólo una propiedad de una tecnología particular;
7. su eliminación produce una pérdida conceptual concreta;
8. dicha pérdida no puede evitarse mediante otra realización;
9. y la condición mantiene contenido estable bajo sustitución tecnológica.

---

# `MR-C1 — Fidelidad`

Podría proponerse:

> Toda realización debe ser fiel al contenido conceptual que realiza.

Esto parece inevitable.

Pero debemos preguntar si:

```text
fidelidad
```

constituye una propiedad positiva uniforme o simplemente significa:

```text
la realización no debe cambiar
aquello que debía conservar.
```

La dificultad es que «aquello que debía conservar» depende de la especialización.

Una realización bibliográfica puede necesitar conservar:

```text
obra
edición
ejemplar
```

mientras otra especialización puede no contener ninguna de esas categorías.

Por tanto no existe un contenido universal de fidelidad.

### Resultado provisional

```text
MR-C1
→ condición relacional
entre realización
y compromisos locales.
```

No aparece todavía una obligación positiva independiente del contenido realizado.

---

# `MR-C2 — Conservación`

Podría afirmarse:

> Toda transformación técnica debe conservar el significado conceptual.

Pero esto también resulta demasiado fuerte.

Algunas transformaciones técnicas pueden ser deliberadamente parciales.

Por ejemplo:

```text
vista simplificada
exportación parcial
índice de búsqueda
caché
proyección
```

no necesitan conservar toda la información del sistema.

Lo que sí deben conservar es aquello que su finalidad promete conservar.

La forma correcta es:

```text
transformación T
+
propósito P
+
contenido relevante C
        ↓
T debe preservar C
respecto de P.
```

La conservación es contextual.

### Resultado

```text
MR-C2
→ REDUCIDA
a obligaciones locales
de preservación.
```

---

# `MR-C3 — Reversibilidad`

Podría proponerse:

> Toda representación técnica debe permitir reconstruir completamente el contenido conceptual.

Esto no es universal.

Una vista, índice o exportación puede ser legítimamente no reversible.

La reversibilidad sólo es necesaria cuando una función concreta exige reconstrucción completa.

Por tanto:

```text
MR-C3
→ RECHAZADA
como condición universal.
```

---

# `MR-C4 — Persistencia`

Podría proponerse:

> Todo contenido conceptual debe persistirse.

No.

Puede existir contenido:

- calculado;
- temporal;
- generado bajo demanda;
- derivado;
- efímero;
- mantenido sólo durante una operación.

Persistencia técnica y existencia conceptual no son equivalentes.

Por tanto:

```text
MR-C4
→ RECHAZADA.
```

---

# `MR-C5 — Identidad técnica estable`

Podría proponerse:

> Toda unidad conceptual debe poseer un identificador técnico estable.

No.

Una realización puede identificar algo mediante:

- clave;
- composición de campos;
- posición;
- URI;
- hash;
- referencia externa;
- contexto;
- ningún identificador persistente explícito.

Además:

```text
UUID
⇏
identidad conceptual.
```

### Resultado

```text
MR-C5
→ RECHAZADA
como condición universal.
```

---

# `MR-C6 — Trazabilidad`

Una realización podría exigir:

> todo resultado debe permitir reconstruir técnicamente cómo fue producido.

Esto no siempre forma parte del contenido conceptual.

La trazabilidad puede ser:

- metodológicamente requerida;
- documentalmente requerida;
- requerida por una especialización;
- requerida por auditoría.

Pero no toda realización conceptual posible necesita una única forma universal de trazabilidad.

### Resultado

```text
MR-C6
→ METODOLOGÍA /
especialización /
realización local.
```

---

# `MR-C7 — Verificabilidad`

Podría afirmarse:

> Toda realización debe ser verificable.

Como requisito de ingeniería o metodología es razonable.

Pero no constituye una propiedad conceptual específica de la realización del dominio.

Además, qué prueba cuenta como verificación depende del compromiso concreto.

### Resultado

```text
MR-C7
→ METODOLOGÍA / INGENIERÍA.
```

---

# `MR-C8 — Neutralidad técnica`

Podría proponerse:

> Las decisiones técnicas deben ser semánticamente neutrales.

Esta formulación parece importante, pero es demasiado fuerte.

Una tecnología puede imponer decisiones que afecten legítimamente a la representación.

Por ejemplo:

```text
orden total
```

puede introducirse técnicamente para facilitar almacenamiento aunque el dominio sólo requiera orden parcial.

El problema aparece únicamente si ese orden técnico se interpreta después como hecho conceptual.

Por tanto el requisito real no es:

```text
tecnología sin efectos
```

sino:

```text
efectos técnicos
no adquieren automáticamente
autoridad conceptual.
```

### Resultado

```text
MR-C8
→ restricción negativa
de autoridad.
```

---

# `MR-C9 — Completitud representacional`

Podría proponerse:

> Toda realización debe representar íntegramente todos los compromisos de la especialización.

Tampoco es universalmente necesario.

Puede haber:

- subsistemas;
- vistas;
- proyecciones;
- servicios parciales;
- almacenes especializados.

La completitud sólo puede evaluarse respecto de una responsabilidad concreta.

### Resultado

```text
MR-C9
→ RECHAZADA
como obligación universal.
```

---

# `MR-C10 — Interoperabilidad`

No toda realización necesita interoperar con otras.

Es una propiedad de arquitectura o requisitos particulares.

```text
MR-C10
→ RECHAZADA.
```

---

# `MR-C11 — Determinismo`

Una realización puede ser:

- probabilística;
- concurrente;
- distribuida;
- no determinista;

sin alterar necesariamente los compromisos conceptuales.

Por tanto:

```text
MR-C11
→ RECHAZADA.
```

---

# `MR-C12 — Correspondencia uno-a-uno`

Podría suponerse:

```text
concepto
↔
estructura técnica
```

uno a uno.

Esto es falso en ambos sentidos.

Un compromiso conceptual puede requerir varias estructuras técnicas.

Y una estructura técnica puede participar en la realización de varios compromisos.

Por tanto:

```text
1 concepto
⇏
1 componente técnico
```

y:

```text
1 componente técnico
⇏
1 concepto.
```

### Resultado

```text
MR-C12
→ RECHAZADA.
```

---

# Resultado de la reducción

| Candidata                         | Resultado                         |
| --------------------------------- | --------------------------------- |
| `MR-C1` Fidelidad                 | relacional/contextual             |
| `MR-C2` Conservación              | obligaciones locales              |
| `MR-C3` Reversibilidad            | rechazada                         |
| `MR-C4` Persistencia              | rechazada                         |
| `MR-C5` Identidad técnica estable | rechazada                         |
| `MR-C6` Trazabilidad              | metodología/local                 |
| `MR-C7` Verificabilidad           | metodología/ingeniería            |
| `MR-C8` Neutralidad               | restricción negativa de autoridad |
| `MR-C9` Completitud               | rechazada                         |
| `MR-C10` Interoperabilidad        | rechazada                         |
| `MR-C11` Determinismo             | rechazada                         |
| `MR-C12` correspondencia 1:1      | rechazada                         |

No aparece una responsabilidad realizativa positiva universal autónoma.

---

# Residuo principal

Después de la reducción reaparece una restricción:

> una decisión de realización no puede adquirir autoridad conceptual sólo porque exista técnicamente.

Representémosla provisionalmente:

```text
MR-R1
```

con:

```text
Implementado(M)
⇏
ConceptualmenteNecesario(M).
```

---

# ¿`MR-R1` es una regla positiva de realización?

No.

Es una prohibición de inferencia entre niveles.

La misma disciplina ya aparece en otros puntos:

```text
recurso lógico
⇏
categoría conceptual

decisión local
⇏
necesidad universal

decisión técnica
⇏
compromiso conceptual.
```

Por tanto `MR-R1` no constituye un nuevo componente positivo universal.

---

# Segundo residuo

También parece permanecer:

```text
MR-R2
```

> cuando una realización afirma realizar un compromiso `C`, debe conservar las distinciones de `C` necesarias para la función que declara realizar.

Pero esto se aproxima a una forma contextual:

```text
Adeq(realización; compromiso, propósito).
```

Si definimos «realización adecuada» precisamente como la que conserva aquello que debe conservar, la formulación resulta parcialmente definicional.

Por tanto:

```text
MR-R2
→ criterio evaluativo contextual
```

no primitiva universal.

---

# Resultado provisional

No se identifica una condición que sea simultáneamente:

```text
positiva
+
universal
+
irreducible
+
específica de realización
+
conceptual.
```

Por tanto emerge:

```text
MR_universal_positivo = ∅
```

como candidato.

---

# Prueba mediante realizaciones alternativas

Supongamos una especialización bibliográfica con:

```text
Obra
Edición
Ejemplar
```

Podría realizarse mediante:

```text
R₁:
base de datos relacional
```

o:

```text
R₂:
grafo
```

o:

```text
R₃:
documentos JSON
```

o:

```text
R₄:
estructuras en memoria.
```

Si todas pueden conservar los contrastes requeridos, ninguna estructura técnica concreta es conceptualmente necesaria.

Esto falsifica cualquier intento de promover:

```text
tabla
nodo
documento
objeto
```

a categoría universal.

---

# Prueba de sustitución tecnológica

Una propiedad realizativa candidata será conceptualmente necesaria sólo si su eliminación mediante cambio tecnológico produce pérdida inevitable.

Consideremos:

```text
clave primaria numérica
```

Puede sustituirse por:

```text
UUID
clave compuesta
URI
hash
referencia externa.
```

Si el compromiso conceptual se conserva, ninguna de ellas es necesaria.

Lo mismo ocurre con:

```text
SQL
JSON
RDF
memoria
archivo.
```

---

# Prueba de múltiples representaciones

Un mismo contenido puede poseer varias representaciones simultáneas:

```text
modelo conceptual C
        ↓
tabla
        ↓
JSON
        ↓
vista
        ↓
caché.
```

No debe inferirse:

```text
multiplicidad técnica
⇒
multiplicidad conceptual.
```

---

# Prueba de una representación para varios compromisos

Una misma estructura técnica puede codificar simultáneamente varias diferencias conceptuales.

Por ejemplo una tabla podría incluir:

```text
obra
edición
ejemplar.
```

Eso tampoco convierte la tabla en una unidad conceptual correspondiente.

---

# Prueba de materialización técnica

Supongamos que un resultado calculado recibe:

```text
id = 1234
```

para poder almacenarlo.

No se sigue:

```text
el resultado
se ha convertido
en nueva entidad conceptual.
```

El corpus histórico ya advertía contra una inferencia análoga: asignar técnicamente un identificador a una consecuencia no la convertía automáticamente en participante conceptual.

En el estado actual la formulación es más general:

```text
identificación técnica
⇏
individuación conceptual.
```

---

# Prueba de consulta

Una consulta técnica puede:

```text
seleccionar;
ordenar;
agrupar;
proyectar;
presentar.
```

Pero no se sigue automáticamente que produzca:

```text
unidad conceptual;
relación conceptual;
resultado conceptual nuevo.
```

El corpus histórico ya distinguía consulta técnica de constitución semántica.

La distinción se conserva sin utilizar las antiguas autoridades.

---

# Prueba de clasificación automática

Un algoritmo puede asignar:

```text
clase = X.
```

Eso puede constituir:

1. mera salida técnica;
2. resultado de una regla especializada;
3. afirmación conceptual local;
4. hipótesis;
5. propuesta interpretativa.

El algoritmo por sí solo no decide cuál es su estatuto.

Por tanto:

```text
salida computacional
⇏
autoridad conceptual.
```

---

# Prueba de persistencia

Una base de datos puede persistir:

```text
registro A
```

durante años.

Eso no demuestra:

```text
persistencia conceptual de A.
```

Y eliminar físicamente un registro tampoco demuestra automáticamente desaparición conceptual de aquello que representaba.

Por tanto:

```text
persistencia técnica
≠
persistencia conceptual.
```

---

# Prueba de copia y réplica

Si:

```text
registro A
```

es replicado en:

```text
servidor 1
servidor 2
servidor 3
```

no aparecen automáticamente tres unidades conceptuales.

La cardinalidad técnica y conceptual deben mantenerse separadas.

---

# Prueba de serialización

Transformar:

```text
objeto en memoria
→ JSON
→ bytes
→ almacenamiento
```

no constituye automáticamente:

- una evolución conceptual;
- una nueva unidad;
- una nueva versión conceptual.

Puede ser simplemente una transformación representacional.

---

# Prueba de migración

Una migración:

```text
SQL
→
grafo
```

puede conservar íntegramente los compromisos conceptuales.

Si lo hace, la antigua estructura SQL no era conceptualmente necesaria.

La migración proporciona una prueba especialmente fuerte de:

```text
independencia representacional.
```

---

# Prueba de pérdida

Una realización sí falla cuando colapsa una distinción que la especialización necesita.

Ejemplo:

La especialización distingue:

```text
Obra
≠
Ejemplar.
```

Una realización almacena ambos indistintamente y ya no puede responder qué copia física posee una biblioteca.

Aquí aparece una pérdida real.

Pero el problema no es:

```text
violación de una primitiva universal.
```

Es:

```text
la realización concreta
no conserva un compromiso
de la especialización.
```

---

# Criterio reconstructivo de fallo

Podemos expresar metalingüísticamente:

```text
Realiza(R,E,Q)
```

cuando la realización `R` conserva suficientemente los compromisos de la especialización `E` necesarios para responder a una cuestión `Q`.

Esta notación no constituye una relación conceptual universal.

Es una herramienta evaluativa.

---

# Libertad realizativa

Cuando dos realizaciones:

```text
R₁
R₂
```

conservan igualmente los compromisos relevantes, la teoría no tiene fundamento para preferir conceptualmente una sobre otra.

La elección puede depender de:

- rendimiento;
- coste;
- simplicidad;
- escalabilidad;
- mantenibilidad;
- herramientas;
- seguridad;
- disponibilidad;
- preferencias de ingeniería.

Estas razones son legítimas.

Pero pertenecen al diseño técnico.

---

# Restricciones negativas de frontera

Aunque no sobreviva un marco positivo universal, sí permanecen prohibiciones derivadas de la separación de niveles.

Una realización no puede inferir automáticamente:

```text
1. identificador técnico
   → identidad conceptual;

2. fila / nodo / objeto
   → entidad conceptual;

3. clave foránea
   → relación conceptual fundamental;

4. timestamp
   → evolución conceptual;

5. secuencia física
   → trayectoria conceptual;

6. copia
   → nueva unidad conceptual;

7. persistencia
   → continuidad conceptual;

8. cálculo
   → afirmación conceptual autorizada;

9. clasificación automática
   → verdad conceptual;

10. esquema de base de datos
    → firma del dominio.
```

Estas restricciones no constituyen diez axiomas realizativos.

Son instancias de una frontera general:

```text
hecho técnico
⇏
hecho conceptual.
```

---

# Realización de firmas locales

Si una especialización posee:

```text
Σ_E
```

una realización debe ser capaz de representar suficientemente sus distinciones para las responsabilidades que asuma.

Pero:

```text
Σ_E
```

no determina una única estructura técnica.

Por tanto:

```text
firma local
⇏
esquema técnico único.
```

---

# Realización de axiomas locales

Si:

```text
Ax_E
```

contiene una restricción local, la realización puede:

- imponerla estructuralmente;
- comprobarla dinámicamente;
- validarla externamente;
- asumirla contractualmente.

La teoría no determina necesariamente cuál mecanismo usar.

Lo importante es no afirmar cumplimiento cuando la realización no puede sostenerlo.

---

# Restricciones técnicas adicionales

Una realización puede introducir restricciones más fuertes que la especialización.

Ejemplo:

```text
especialización:
nombre puede repetirse

realización:
UNIQUE(nombre)
```

Eso no modifica automáticamente la teoría.

Puede ser:

- limitación accidental;
- simplificación técnica;
- decisión de producto.

Pero debe distinguirse de una restricción conceptual.

---

# Pérdida por sobre-restricción

Una sobre-restricción técnica se vuelve problemática si impide representar casos que la especialización considera legítimos.

Entonces:

```text
R
```

no realiza completamente:

```text
E
```

respecto del alcance afectado.

No porque la restricción técnica sea «falsa conceptualmente», sino porque limita indebidamente la capacidad declarada de realización.

---

# Realización parcial

Debe permitirse:

```text
R
```

que sólo realice un subconjunto explícito de:

```text
E.
```

Por ejemplo:

```text
E
=
modelo bibliográfico completo
```

mientras:

```text
R
=
servicio de búsqueda
```

sólo necesita realizar aquello necesario para búsquedas.

Por tanto:

```text
realización parcial explícita
≠
realización incorrecta.
```

---

# Alcance declarado

La adecuación de una realización siempre depende de qué pretende realizar.

No puede evaluarse absolutamente:

```text
Adecuada(R)
```

sin especificar:

```text
respecto de qué
```

Por tanto la forma relevante es contextual:

```text
Adeq(R;E,Q,A)
```

como notación metalingüística.

No se introduce `Adeq` como relación fundamental.

---

# Representaciones derivadas

Una realización puede producir:

- índices;
- vistas;
- agregados;
- caches;
- proyecciones;
- resúmenes técnicos;
- materializaciones.

Estas estructuras pueden ser derivadas técnicamente sin adquirir automáticamente estatuto conceptual.

Si posteriormente una especialización quiere tratarlas conceptualmente, necesitará justificación independiente.

---

# Resultados calculados

Un cálculo técnico puede producir:

```text
D.
```

El estatuto de `D` dependerá del contexto.

Puede ser:

```text
dato auxiliar
resultado especializado
estimación
clasificación
hipótesis
simple cache.
```

No existe una operación conceptual universal `Derivar` que otorgue automáticamente estatuto a todo resultado computado.

---

# Prueba de independencia tecnológica

Consideremos un compromiso local `C`.

Si puede realizarse mediante:

```text
Tecnología A
Tecnología B
Tecnología C
```

con estructuras internas diferentes, entonces aquello que cambia entre las tecnologías no pertenece necesariamente a `C`.

Esta prueba permite separar:

```text
invariante conceptual
```

de:

```text
elección realizativa.
```

---

# Pero la independencia tecnológica tampoco es absoluta

No toda elección tecnológica es válida.

Una tecnología puede ser incapaz de conservar una diferencia necesaria.

Por tanto:

```text
tecnología intercambiable
```

sólo cuando:

```text
preserva las obligaciones
de la realización concreta.
```

---

# Resultado de la investigación

La hipótesis:

```text
H-MR-1:
existe un conjunto universal
positivo mínimo
de responsabilidades realizativas
```

no supera la reducción.

Las condiciones candidatas terminan en:

```text
obligaciones locales;
criterios evaluativos;
metodología;
ingeniería;
o restricciones negativas
de autoridad entre niveles.
```

No aparece una responsabilidad positiva universal específica de realización.

Por tanto:

```text
MR_universal_positivo = ∅.
```

---

# Qué sobrevive

Sobreviven:

```text
realizaciones concretas;
responsabilidades técnicas locales;
representaciones;
transformaciones técnicas;
restricciones técnicas;
mecanismos de persistencia;
mecanismos de consulta;
cálculos;
verificaciones;
migraciones;
copias;
réplicas.
```

Su legitimidad depende de aquello que pretendan realizar.

No forman conjuntamente un modelo operacional universal.

---

# Frontera principal

La conclusión central queda:

```text
decisión conceptual local
        ↓
puede exigir conservación
en una realización

pero

decisión técnica
        ⇏
compromiso conceptual.
```

---

# Relación con el antiguo plano realizativo

El corpus histórico utilizó responsabilidades:

```text
RR-1
RR-2
RR-3U
RR-3C
RR-4
RR-5
```

para realizar autoridades, cooperación, unidades derivadas, consecuencias, fundamentación y verificación.

Esas responsabilidades dependían de un núcleo histórico que incluía:

```text
RA-I
RA-E
RA-V
Componer-E
Componer-V
Reconstruir
Derivar-C.
```

Al haber dejado de sobrevivir universalmente esas categorías, no puede conservarse automáticamente el inventario `RR-*`.

El contenido legítimo que sí permanece es más débil:

> una realización no debe atribuirse autoridad conceptual propia ni destruir las diferencias que declara realizar.

---

# Diferencia respecto del modelo histórico

La cadena histórica podía formular:

```text
concepto
↓
autoridad / operación
↓
normativa
↓
responsabilidad realizativa.
```

El estado actual es más abierto:

```text
especialización E
+
compromisos locales C*
        ↓
realización R
        ↓
mecanismos técnicos elegidos
```

con evaluación contextual:

```text
¿R conserva C*
respecto de su propósito?
```

No existe una traducción universal fija de:

```text
C*
→
responsabilidad realizativa determinada.
```

---

# Auditoría de no trivialización

El resultado:

```text
MR_universal_positivo = ∅
```

no significa:

```text
cualquier implementación
realiza correctamente
cualquier especialización.
```

Una realización puede fallar por:

- pérdida de una distinción;
- sobre-restricción;
- representación insuficiente;
- inferencia técnica convertida indebidamente en conceptual;
- incumplimiento de axiomas locales;
- falsificación de alcance;
- mezcla de categorías locales distintas;
- pérdida de condiciones de un resultado.

Por tanto:

```text
ausencia de marco positivo universal
⇏
ausencia de criterios de evaluación.
```

---

# Auditoría de propiedad emergente

Se consideran conjuntamente:

```text
persistencia
+
identificación
+
representación
+
consulta
+
cálculo
+
trazabilidad
+
verificación.
```

No aparece una propiedad común específicamente conceptual que obligue a constituir un «Plano realizativo» o «Modelo operacional» universal.

Las responsabilidades pueden distribuirse libremente según la arquitectura técnica concreta.

---

# Auditoría de reintroducción encubierta

No deberán introducirse sustitutos como:

```text
EntidadTécnicaUniversal
IdentificadorUniversal
PersistenciaUniversal
TransformaciónUniversal
OperaciónUniversal
RepositorioUniversal
```

para reemplazar indirectamente categorías conceptuales eliminadas.

---

# Auditoría de dirección inversa

Debe poder recorrerse una realización desde abajo hacia arriba y preguntar:

```text
¿qué compromiso conceptual
justifica esta estructura técnica?
```

Las respuestas posibles incluyen:

```text
ninguno:
es puramente técnica;

uno:
realiza un compromiso local;

varios:
coopera en varios compromisos.
```

No toda estructura técnica necesita referente conceptual directo.

---

# Ejemplo: índice

```text
índice de base de datos
```

puede existir únicamente por rendimiento.

No necesita representar ningún concepto del dominio.

Por tanto:

```text
componente técnico
sin referente conceptual directo
```

puede ser perfectamente legítimo.

---

# Ejemplo: UUID

Un UUID puede utilizarse para:

```text
referencia técnica estable.
```

No se sigue:

```text
UUID
=
criterio conceptual de identidad.
```

Dos registros con UUID distintos pueden representar, según el caso, la misma unidad conceptual.

Y un mismo UUID mal reutilizado no garantiza identidad conceptual.

---

# Ejemplo: timestamp

Un timestamp puede servir para:

- auditoría;
- orden técnico;
- concurrencia;
- caché.

No implica automáticamente:

```text
estado
transición
evolución
historia conceptual.
```

---

# Ejemplo: tabla de unión

Una tabla de unión puede realizar una relación local.

Pero:

```text
tabla de unión
⇏
S universal
```

ni:

```text
foreign key
⇏
relación fundamental.
```

---

# Ejemplo: evento técnico

Un event log puede registrar cambios técnicos.

No todo evento técnico constituye:

```text
V
```

ni transición conceptual.

La especialización debe determinar si alguna diferencia registrada posee significado conceptual local.

---

# Resultado global

El marco de realización queda compuesto no por una lista positiva universal de responsabilidades, sino por una distinción de niveles y un criterio contextual de compatibilidad.

Puede resumirse:

```text
Especialización E
        ↓
compromisos locales C*
        ↓
Realización R
        ↓
mecanismos técnicos M*

condición:
M* debe ser suficiente
para las responsabilidades
que R declara respecto de C*.
```

Sin inferir:

```text
M*
→
nuevos compromisos conceptuales.
```

---

# Resultado principal

El resultado consolidable es:

```text
MR_universal_positivo = ∅.
```

No se ha demostrado un conjunto positivo universal de responsabilidades, estructuras o mecanismos realizativos.

Esto es compatible con realizaciones técnicas extremadamente ricas.

---

# Relación con `12-reconstrucciones-conservativas.md`

`12` establece:

```text
contenido legítimo
puede conservarse
sin arquitectura histórica.
```

`13` añade:

```text
una realización concreta
puede conservar dicho contenido
sin reproducir
una arquitectura técnica universal.
```

Por tanto:

```text
reconstruibilidad conceptual
≠
arquitectura realizativa única.
```

---

# Relación con `08-regimen-de-especializacion.md`

`08` permite:

```text
Σ_E ≠ ∅
Ax_E ≠ ∅.
```

`13` establece que dichos compromisos locales:

```text
no determinan
una única realización.
```

Y que las estructuras técnicas utilizadas para realizarlos:

```text
no amplían
por sí mismas Σ_E o Ax_E.
```

---

# Consecuencia para `14-auditoria-global-de-cobertura.md`

`14` deberá comprobar globalmente que el corpus consolidado cubra también la frontera entre:

```text
contenido conceptual
y
realización técnica.
```

En particular deberá preguntar si existe algún contraste que:

1. no pueda reconstruirse conceptualmente;
2. tampoco pueda realizarse sin una estructura universal adicional;
3. y haya quedado oculto por la actual separación de niveles.

---

# Condición de reapertura

`13-marco-de-realizacion.md` deberá reabrirse si aparece una condición `C` que:

1. toda realización compatible deba satisfacer;
2. sea positiva;
3. sea específicamente realizativa;
4. no sea definicional;
5. no dependa de una especialización concreta;
6. no sea sólo metodológica o de ingeniería;
7. no sea sustituible tecnológicamente;
8. produzca una pérdida conceptual inevitable al eliminarse;
9. y mantenga dicha pérdida bajo realizaciones alternativas.

También deberá reabrirse si una realización futura revela que una diferencia considerada técnica era en realidad conceptualmente irreducible.

---

# Estado

**Estado:** construido por primera vez.

**Hipótesis principal:** `H-MR-1`.

**Resultado:**

```text
MR_universal_positivo = ∅
```

**Modelo operacional universal:** no demostrado.

**Responsabilidades realizativas universales positivas:** ninguna demostrada.

**Realizaciones concretas:** permitidas.

**Arquitecturas técnicas:** libres bajo obligaciones locales.

**Correspondencia concepto/componente técnico 1:1:** rechazada.

**Autoridad conceptual de decisiones técnicas:** no automática.

**Adecuación de realización:** contextual.

---

# Decisión de cierre

> **No se ha demostrado un marco positivo universal de realización compuesto por responsabilidades, estructuras o mecanismos técnicos necesarios.**

La conclusión resistente es:

```text
realización técnica
de contenido conceptual
```

requiere conservar aquello que la responsabilidad concreta pretende realizar,

pero:

```text
hecho técnico
⇏
hecho conceptual
```

y:

```text
compromiso conceptual
⇏
implementación técnica única.
```

El resultado:

```text
MR_universal_positivo = ∅
```

no elimina la ingeniería.

Elimina únicamente la atribución automática de autoridad conceptual a decisiones de ingeniería.

---

# Siguiente documento

El siguiente documento del orden de construcción auditado es:

```text
14-auditoria-global-de-cobertura.md
```

Su pregunta rectora será:

> ¿El conjunto consolidado `02–13` cubre todos los contrastes legítimos, fronteras, pérdidas potenciales y niveles identificados, o queda algún contenido sin localizar que obligue a reabrir un resultado anterior?

`14` no deberá buscar «completitud absoluta».

Deberá comprobar **cobertura global respecto del corpus y alcance declarados**.

---

## Pendiente

Ninguno dentro del alcance propio de `13-marco-de-realizacion.md`.

La evaluación global de cobertura corresponde a `14-auditoria-global-de-cobertura.md`.
