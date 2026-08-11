# Cierre de la auditoría de `PRODUCT.md`

**Fecha de cierre:** 08/08/2026

**Documento auditado:** `docs/08-project/PRODUCT.md`

**Resultado:** reconstrucción sustantiva requerida.

Las conclusiones de esta auditoría se refieren al estado de PRODUCT.md existente en la fecha de cierre. Las modificaciones posteriores del producto deberán interpretarse como resultados derivados de esta auditoría y no como parte de la evidencia originalmente examinada.

## Objeto de la auditoría

La auditoría ha examinado si el `PRODUCT.md` histórico podía mantenerse mediante correcciones incrementales o si, por el contrario, su fundamento debía reconstruirse a partir de los resultados consolidados del proyecto.

La investigación partió de la hipótesis:

## H-AP-001

> El `PRODUCT.md` histórico contiene una definición funcional suficientemente compatible con la teoría consolidada como para poder corregirse incrementalmente, sin necesidad de reconstruir sus fundamentos.

La hipótesis fue sometida a pruebas de eliminación, reconstrucción, reducción funcional, cambio de nivel, comparación de situaciones y fertilidad conservativa.

---

# 1. Resultado sobre el fundamento histórico

El `PRODUCT.md` histórico situaba `Documento` como concepto central y unidad fundamental del producto.

La eliminación de `Documento` mostró que:

- el problema práctico continuaba siendo formulable;
- las necesidades generales del producto sobrevivían;
- las capacidades históricas podían reconstruirse mediante estructuras más débiles;
- y era posible levantar una descripción funcional coherente sin introducir `Documento` como primitiva.

Posteriormente se comprobó que tampoco resultaban necesarias como categorías fundamentales:

- `Autor`;
- `Biblioteca`;
- `Colección`;
- `Nota`;
- `Fuente`;
- `Publicación`;
- ni otras categorías históricas equivalentes.

Estas categorías podrán reaparecer posteriormente como especializaciones, papeles situacionales o construcciones de producto cuando una necesidad concreta las justifique.

## C-AP-001 — Refutación del fundamento histórico

> El `PRODUCT.md` histórico no puede conservarse mediante una mera corrección incremental.
>
> Su fundamento debe reconstruirse porque presupone como conceptos centrales decisiones de producto cuya necesidad no resiste las pruebas de eliminación realizadas.

**Estado de H-AP-001:** Refutada.

---

# 2. Resultado sobre la competencia de Product

Durante la reducción se comprobó que Product no debe:

- definir la ontología del dominio;
- determinar qué constituye una configuración interpretable;
- establecer autoridad semántica sobre las relaciones;
- realizar interpretación;
- producir conocimiento;
- redefinir primitivas conceptuales;
- fijar arquitectura;
- ni imponer mecanismos técnicos.

Estas responsabilidades pertenecen a otros cuerpos del proyecto.

Product tampoco necesita disponer de un perfil funcional universal e irreducible.

Las funciones candidatas inicialmente identificadas —incorporar, conservar evolución, relacionar, organizar, atribuir, recuperar, operar sobre estatutos, dar acceso y otras formulaciones posteriores— pudieron:

- reducirse a resultados de otros cuerpos;
- absorberse unas en otras;
- reconstruirse como operaciones compuestas;
- o derivarse localmente de situaciones concretas.

La eliminación del último candidato funcional abstracto no produjo una pérdida que impidiera definir una vertical de producto.

## C-AP-002 — Competencia específica de Product

> La responsabilidad específica de Product no consiste en descubrir primitivas propias ni un perfil funcional universal.
>
> Product identifica, delimita y prioriza situaciones posibles del dominio cuya realización práctica se considera valiosa para determinados agentes.
>
> A partir de dichas situaciones se derivarán posteriormente las capacidades, responsabilidades, restricciones y realizaciones necesarias.

La relación queda establecida así:

```text
Dominio
        ↓
situaciones posibles

Product
        ↓
selección de situaciones valiosas
        ↓
compromisos de producto

Engineering
        ↓
responsabilidades necesarias

Implementation / Realization
        ↓
condiciones de realización

Arquitectura software
        ↓
realización concreta
```

---

# 3. Restricciones de competencia

La auditoría consolida las siguientes restricciones sobre Product.

## RS-P01 — Sin autoridad semántica

Product puede hacer operativas distinciones semánticas establecidas por los niveles competentes, pero no adquiere por ello autoridad para determinar su significado.

## RS-P02 — No colapso de diferencias pertinentes

Las operaciones derivadas de Product no deberán destruir diferencias cuya conservación resulte necesaria para usos o interpretaciones posteriores.

## RS-P03 — No apropiación del dominio

Product no deberá redefinir como conceptos propios las categorías mediante las que el Modelo Conceptual determina la pertenencia o estructura del dominio.

## RS-P04 — Separación entre operación funcional y operación conceptual

Las operaciones funcionales de Product no deberán identificarse automáticamente con operaciones previamente definidas por el Modelo Conceptual.

## RS-P05 — Conservación operacional

Las realizaciones derivadas de Product deberán preservar aquellas diferencias cuya pérdida impida mantener el valor de la situación que justificó su incorporación.

---

# 4. Regla de preferencia situacional

## RP-P01 — Preferencia por situaciones y papeles

> No deberá introducirse una categoría estable de producto cuando las diferencias necesarias puedan explicarse mediante los papeles que las realidades desempeñan en situaciones concretas.

En consecuencia:

```text
"X es Autor"
```

no deberá introducirse como fundamento cuando resulte suficiente expresar:

```text
X desempeña un papel de autoría
en una situación determinada
```

La misma regla se aplica a categorías como:

- Fuente;
- Nota;
- Revisor;
- Editor;
- Colección;
- Publicación;
- y otras construcciones futuras.

La clasificación estable sólo deberá introducirse cuando una pérdida demostrable obligue a ello.

---

# 5. Resultado sobre la búsqueda de una situación mínima universal

Durante la auditoría se investigaron sucesivamente candidatos basados en:

- preservación de relaciones;
- reconstrucción de contexto;
- continuidad temporal;
- continuidad contextual;
- actividad intelectual;
- reutilización interpretativa;
- procedencia interpretativa;
- reutilización acumulativa;
- y distintas formulaciones de disponibilidad funcional.

Las pruebas mostraron que ninguna de estas propiedades constituye por sí sola una situación mínima universal capaz de definir completamente la identidad de Product.

Algunas producen valor real, pero también pueden aparecer en productos o herramientas genéricas.

Otras resultan demasiado fuertes o dependen de condiciones que no son necesarias en todas las situaciones relevantes.

## C-AP-003 — Ausencia de situación atómica universal

> No se ha demostrado que Product necesite una única situación mínima universal cuya presencia determine por sí sola toda su identidad.
>
> La identidad del producto puede emerger del conjunto coherente de situaciones que Product selecciona y prioriza, sin que ninguna de ellas deba constituir una primitiva universal.

Por tanto:

```text
minimalidad ontológica
        ≠
idoneidad como primera vertical
```

---

# 6. Criterio de selección de la primera vertical

Abandonada la búsqueda de una primitiva universal, la primera vertical se evaluó mediante los siguientes criterios:

1. valor humano inmediato;
2. distinción suficiente frente a almacenamiento genérico;
3. debilidad estructural;
4. fertilidad para crecimiento posterior;
5. poder de validación de la dirección del producto.

Se compararon cinco candidatas:

```text
V-A — una configuración preservada

V-B — configuración + exteriorización

V-C — dos configuraciones + diferencia exteriorizada

V-D — reutilización / derivación

V-E — evolución preservada
```

El resultado comparativo mostró:

- V-A es estructuralmente muy débil, pero ofrece escaso poder de validación;
- V-B produce mayor valor, aunque permanece próxima al patrón recurso + anotación;
- V-D introduce prematuramente cuestiones de procedencia y derivación;
- V-E posee gran poder de validación, pero exige demasiada estructura para una primera vertical;
- V-C ofrece el mejor equilibrio provisional entre simplicidad, valor, fertilidad y capacidad de validación.

---

# 7. Primera vertical provisionalmente seleccionada

## PV-001 — Diferencia exteriorizada entre configuraciones

> **Una persona puede poner bajo el ámbito operativo de la plataforma dos configuraciones y exteriorizar una diferencia entre ellas de manera que ambas configuraciones y la diferencia establecida puedan volver a concurrir en una situación posterior de interpretación.**

La formulación no presupone:

- que las configuraciones sean documentos;
- que pertenezcan a categorías cerradas;
- que la diferencia corresponda a un tipo semántico universal;
- que exista una ontología relacional previa;
- que la plataforma realice la interpretación;
- ni que Product posea autoridad sobre el significado de la diferencia.

El valor de la vertical consiste en preservar una diferencia que el agente ha considerado suficientemente relevante como para exteriorizarla y permitir que vuelva a participar junto con las configuraciones afectadas en situaciones posteriores.

PV-001 no se considera una primitiva universal de Product.

Su estatuto es:

> **primera vertical provisionalmente seleccionada por su equilibrio entre valor, simplicidad, fertilidad y poder de validación.**

---

# 8. Prueba de fertilidad conservativa

PV-001 fue sometida a una prueba de extensión hacia:

```text
V-D — reutilización / derivación

V-E — evolución preservada
```

No se identificó ninguna incompatibilidad necesaria.

V-D puede emerger especializando determinadas diferencias para expresar procedencia, participación o derivación cuando tales distinciones hayan sido establecidas por el nivel competente.

V-E puede construirse mediante composición de múltiples situaciones y la incorporación de condiciones relativas a identidad, estado, transformación y correspondencia provenientes de los cuerpos teóricos responsables.

La ampliación no exige reinterpretar retrospectivamente las instancias iniciales de PV-001.

## C-AP-004 — Fertilidad conservativa de PV-001

> PV-001 puede actuar como semilla de situaciones posteriores más ricas sin obligar a modificar el significado de las situaciones inicialmente realizadas.
>
> Por tanto, supera provisionalmente la prueba de fertilidad conservativa.

---

# 9. Restricciones de conservación de PV-001

La fertilidad de la primera vertical depende de evitar que las contingencias de su primera realización se conviertan en leyes universales del producto.

## RC-V01 — Neutralidad relacional

La realización inicial no deberá presuponer que toda diferencia entre configuraciones sea simétrica, bidireccional o direccional de una única manera.

## RC-V02 — No colapso estructural

No deberá suponerse que todas las diferencias exteriorizadas poseen la misma naturaleza estructural o pueden representarse permanentemente mediante un único tipo universal de vínculo.

## RC-V03 — No universalización de la aridad

El hecho de que PV-001 utilice dos configuraciones no autoriza a suponer que toda estructura futura del producto deba ser binaria.

## RC-V04 — No subordinación accidental

La diferencia exteriorizada no deberá quedar estructuralmente subordinada a uno de sus términos cuando dicha decisión impida otorgarle posteriormente la autonomía que nuevas situaciones puedan exigir.

## RC-V05 — Apertura semántica

La primera vertical no deberá imponer como fundamento un catálogo cerrado de significados relacionales.

Las especializaciones semánticas futuras deberán introducirse únicamente cuando su necesidad haya sido justificada.

---

# 10. Consecuencia para el `PRODUCT.md` histórico

La estructura histórica basada en:

```text
Producto
        ↓
Conceptos fundamentales
        ↓
Capacidades fundamentales
        ↓
Evolución funcional
```

debe ser sustituida por una organización basada en:

```text
Propósito
        ↓
Problemas humanos
        ↓
Situaciones de producto
        ↓
Valor esperado
        ↓
Compromisos de Product
        ↓
Verticales seleccionadas
        ↓
Capacidades derivadas
```

Los antiguos conceptos y funcionalidades no deberán eliminarse automáticamente.

Cada uno deberá reclasificarse como:

```text
situación todavía justificable
        ↓
conservar / rederivar

hipótesis útil
        ↓
Design Journal

decisión histórica sin fundamento actual
        ↓
eliminar del documento normativo

capacidad futura
        ↓
Roadmap, cuando esté justificada
```

---

# 11. Estado de la auditoría

```text
Responsabilidad histórica de PRODUCT.md
        ✘ excesiva

Documento como unidad fundamental
        ✘ eliminado

Categorías históricas como primitivas
        ✘ no necesarias

Perfil funcional universal de Product
        ✘ no demostrado

Situación mínima universal
        ✘ no demostrada

Responsabilidad específica de Product
        ✔ establecida

Primera vertical candidata
        ✔ comparada

PV-001
        ✔ seleccionada provisionalmente

Fertilidad conservativa
        ✔ superada provisionalmente

Restricciones RC-V01–RC-V05
        ✔ establecidas
```

---

# 12. Resultado final

La auditoría determina que `PRODUCT.md` requiere una reconstrucción sustantiva.

El producto no deberá definirse mediante una ontología propia ni mediante un conjunto de conceptos o funciones declarados fundamentales de antemano.

Su estructura deberá partir de situaciones humanas seleccionadas por su valor y derivar de ellas los compromisos funcionales correspondientes.

La primera vertical provisionalmente seleccionada será PV-001.

Este resultado autoriza el paso desde la auditoría del producto histórico hacia la reconstrucción de `PRODUCT.md`.

---

# Próximo paso

Reconstruir `docs/08-project/PRODUCT.md` a partir de los resultados consolidados de esta auditoría.

La reconstrucción deberá comenzar por:

1. propósito del producto;
2. problema humano que pretende abordar;
3. competencia y límites de Product;
4. criterio de selección de situaciones;
5. primera vertical PV-001;
6. valor esperado;
7. restricciones RC-V01–RC-V05;
8. capacidades derivadas únicamente cuando resulten necesarias.

Los conceptos históricos no deberán reincorporarse salvo que puedan justificarse nuevamente a partir de situaciones concretas.
