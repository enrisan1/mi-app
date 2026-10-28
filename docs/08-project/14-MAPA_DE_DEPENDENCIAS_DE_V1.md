# Mapa de dependencias de V1

## Estado

**Primer mapa reducido de dependencias funcionales necesarias entre las capacidades esenciales definidas en `13-MAPA_DE_CAPACIDADES_DE_V1.md`.**

Este documento determina qué capacidades de V1 requieren funcionalmente la existencia de otras capacidades del mismo mapa.

No define todavía:

- orden de implementación;
- prioridades;
- criterios completos de finalización;
- estado actual de realización;
- huecos;
- hitos;
- roadmap;
- arquitectura;
- mecanismos técnicos.

Su función consiste únicamente en distinguir:

```text
dependencia funcional necesaria
≠
secuencia narrativa
≠
orden conveniente de construcción
≠
preferencia arquitectónica
```

---

# 1. Fundamento

`13-MAPA_DE_CAPACIDADES_DE_V1.md` consolidó nueve capacidades esenciales:

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

La existencia de una secuencia de uso entre varias de estas capacidades no implica por sí sola que exista una dependencia funcional entre ellas.

Por tanto, el análisis se realizó aplicando a cada capacidad la pregunta:

> **¿Puede esta capacidad existir plenamente sin que exista otra capacidad del mapa de la que dependa funcionalmente?**

Cuando la respuesta es negativa por razones funcionales, existe una dependencia candidata.

Cuando la respuesta es afirmativa, aunque una capacidad aparezca antes que otra en una trayectoria concreta, no se establece dependencia funcional.

---

# 2. Tipos de relación utilizados

El mapa distingue tres tipos de relación.

## 2.1. Dependencia funcional directa

Existe cuando una capacidad B no puede realizarse plenamente sin A y no existe otra cadena de dependencias que haga redundante esa relación.

Se representa como:

```text
A
↓
B
```

y significa:

```text
B depende funcionalmente de A
```

---

## 2.2. Dependencia transitiva

Existe cuando B necesita A únicamente a través de una o varias capacidades intermedias.

Por ejemplo:

```text
A
↓
B
↓
C
```

implica:

```text
C depende transitivamente de A
```

pero no obliga a registrar:

```text
A
↓
C
```

como dependencia directa.

---

## 2.3. Ausencia de dependencia necesaria

Dos capacidades pueden:

- aparecer en la misma trayectoria;
- reforzarse;
- compartir una futura realización técnica;
- utilizar los mismos materiales;
- o resultar convenientes en un determinado orden;

sin que una dependa funcionalmente de la otra.

Por tanto:

```text
relación de uso
≠
dependencia funcional
```

---

# 3. Criterio de reducción

Una dependencia directa sólo se conserva cuando su eliminación permite una situación en la que la capacidad dependiente aparenta existir pero pierde alguna condición necesaria de su definición.

Una dependencia se elimina cuando:

```text
ya queda garantizada
por un camino funcional alternativo
```

Por tanto, el objetivo no consiste en registrar todas las relaciones posibles, sino en obtener el **grafo mínimo de dependencias necesarias**.

El análisis realizado en este documento se limita a dependencias funcionales entre las nueve capacidades actualmente identificadas.

Por tanto:

```text
ausencia de dependencia interna
≠
demostración de ausencia de cualquier prerrequisito posible
```

Una fase posterior o nueva evidencia podrá revelar que una capacidad requiere una condición o capacidad todavía no identificada.

En ese caso deberá revisarse primero el mapa de capacidades antes de incorporar la nueva dependencia.

---

# 4. C-V1-01 — Incorporar materia de trabajo

## Resultado

C-V1-01 no presenta ninguna dependencia funcional necesaria respecto de las demás capacidades del mapa.

Puede existir una capacidad de incorporación aunque el producto todavía no permita:

- transformar;
- constituir resultados;
- recuperar;
- continuar;
- relacionar;
- reutilizar;
- o activar las condiciones transversales.

Por tanto:

```text
C-V1-01
→ sin dependencia funcional interna necesaria
```

Esto no significa que C-V1-01 sea suficiente para V1.

Significa únicamente que su existencia funcional no requiere la existencia de otra de las nueve capacidades actualmente identificadas.

---

# 5. C-V1-02 — Transformar mediante trabajo

## Resultado

C-V1-02 tampoco presenta dependencia funcional necesaria respecto de las demás capacidades.

Un producto podría permitir transformar algo que ya participa en una actividad aunque careciera de una capacidad general de incorporación.

Por tanto:

```text
C-V1-02
→ sin dependencia funcional interna necesaria
```

En particular:

```text
C-V1-02
⇏
C-V1-01
```

La trayectoria:

```text
incorporar
↓
trabajar
```

expresa una secuencia necesaria para una realización concreta de V1, pero no una dependencia funcional universal entre ambas capacidades.

---

# 6. C-V1-03 — Constituir un resultado utilizable

C-V1-03 exige que el resultado sea un estado constituido mediante el trabajo.

Sin C-V1-02 podría existir:

```text
M
↓
declaración de resultado
↓
R
```

sin una diferencia significativa producida por la actividad humana.

Eso no satisface la definición de resultado establecida para V1.

Por tanto:

```text
C-V1-02
↓
C-V1-03
```

## Dependencia D-V1-01

> **C-V1-03 depende funcionalmente de C-V1-02.**

Esta dependencia es directa e irreducible.

---

# 7. C-V1-04 — Recuperar el resultado alcanzado después de una interrupción

C-V1-04 requiere la existencia del resultado que deberá sobrevivir a la interrupción y volver a estar accesible.

Sin C-V1-03 no queda constituido el `R` que C-V1-04 está definida para recuperar.

Por tanto:

```text
C-V1-03
↓
C-V1-04
```

## Dependencia D-V1-02

> **C-V1-04 depende funcionalmente de C-V1-03.**

Como C-V1-03 depende de C-V1-02, también existe:

```text
C-V1-04
→ dependencia transitiva de C-V1-02
```

pero esa relación no se registra como arista directa adicional.

---

# 8. C-V1-05 — Reanudar y continuar el trabajo

C-V1-05 exige:

```text
R recuperado
↓
nueva actividad
↓
R'
```

Por tanto, necesita que el resultado haya sido recuperado después de la interrupción.

Sin C-V1-04 podría existir continuidad inmediata o una nueva actividad independiente, pero no reanudación desde `R` recuperado.

Por tanto:

```text
C-V1-04
↓
C-V1-05
```

## Dependencia D-V1-03

> **C-V1-05 depende funcionalmente de C-V1-04.**

Inicialmente se consideró además una dependencia directa:

```text
C-V1-02
↓
C-V1-05
```

porque continuar requiere producir una nueva diferencia.

Sin embargo, esa necesidad ya queda garantizada mediante:

```text
C-V1-02
↓
C-V1-03
↓
C-V1-04
↓
C-V1-05
```

Por tanto, la relación directa C-V1-02 → C-V1-05 es redundante por transitividad y no forma parte del grafo mínimo.

---

# 9. C-V1-06 — Distinguir y relacionar materiales o resultados pertinentemente

C-V1-06 no presenta dependencia funcional necesaria respecto de las demás capacidades del mapa.

La capacidad requiere:

```text
A ≠ B

y

A
│
relación pertinente
│
B
```

pero A y B pueden existir por causas distintas.

No es necesario que:

- hayan sido incorporados mediante C-V1-01;
- hayan sido transformados mediante C-V1-02;
- sean resultados de C-V1-03;
- hayan sido recuperados;
- ni hayan sido reutilizados.

Por tanto:

```text
C-V1-06
→ sin dependencia funcional interna necesaria
```

---

# 10. C-V1-07 — Reutilizar en otro contexto pertinente

C-V1-07 tampoco presenta una dependencia funcional fija respecto de las demás capacidades del mapa.

Un material o resultado puede volver a participar en otro contexto sin que el producto proporcione necesariamente una capacidad general de incorporación ni una relación explícita entre varios materiales.

La reutilización puede implicar una nueva participación contextual, pero ello no equivale necesariamente a C-V1-01.

C-V1-01 exige el paso desde no participar en una actividad a participar efectivamente en ella.

C-V1-07 puede satisfacerse cuando un elemento que ya participa en una actividad vuelve a participar en otro contexto pertinente dentro de esa misma actividad.

Por tanto:

```text
reutilización contextual
⇏
dependencia necesaria de incorporación
```

y:

```text
C-V1-07
→ sin dependencia funcional interna necesaria
```

En particular:

```text
C-V1-07
⇏
C-V1-06
```

y:

```text
C-V1-06
⇏
C-V1-07
```

La relación entre ambas capacidades es de pertenencia a la misma dimensión de pluralidad contextual, no de dependencia funcional necesaria.

---

# 11. C-V1-08 — Preservar determinación humana efectiva cuando corresponda

C-V1-08 es una capacidad transversal de activación condicionada.

Su supuesto puede aparecer durante:

```text
incorporación
transformación
constitución de resultados
recuperación
continuación
relación
reutilización
```

o durante otra situación posterior.

No depende universalmente de ninguna capacidad operativa concreta.

Por tanto:

```text
C-V1-08
→ sin dependencia funcional fija
```

Tampoco depende de C-V1-09.

La existencia de una decisión humana pertinente no presupone necesariamente un cambio introducido por la plataforma.

---

# 12. C-V1-09 — Preservar posibilidades pertinentes frente a cambios de la plataforma

C-V1-09 es también una capacidad transversal de activación condicionada.

Puede activarse cuando un cambio introducido por la plataforma afecta a cualquier dimensión del trabajo.

No existe una capacidad operativa concreta cuya presencia sea condición universal para su existencia.

Por tanto:

```text
C-V1-09
→ sin dependencia funcional fija
```

Tampoco depende de C-V1-08.

Puede existir una pérdida de posibilidad pertinente sin que exista ninguna decisión humana pendiente.

---

# 13. Resultado de la prueba sistemática

El análisis inicial produjo cuatro dependencias directas candidatas:

```text
D-01  C-V1-02 → C-V1-03

D-02  C-V1-03 → C-V1-04

D-03  C-V1-04 → C-V1-05

D-04  C-V1-02 → C-V1-05
```

Posteriormente se realizó una reducción transitiva.

La relación:

```text
C-V1-02 → C-V1-05
```

resultó redundante porque ya queda garantizada por:

```text
C-V1-02
↓
C-V1-03
↓
C-V1-04
↓
C-V1-05
```

Por tanto:

```text
4 dependencias directas candidatas
↓
reducción transitiva
↓
3 dependencias directas irreducibles
```

---

# 14. Dependencias directas irreducibles

El mapa mínimo contiene únicamente estas tres dependencias directas:

```text
D-V1-01

C-V1-02 Transformar mediante trabajo
↓
C-V1-03 Constituir un resultado utilizable
```

```text
D-V1-02

C-V1-03 Constituir un resultado utilizable
↓
C-V1-04 Recuperar el resultado alcanzado
         después de una interrupción
```

```text
D-V1-03

C-V1-04 Recuperar el resultado alcanzado
         después de una interrupción
↓
C-V1-05 Reanudar y continuar el trabajo
```

---

# 15. Dependencias transitivas derivadas

De las dependencias directas anteriores se derivan:

```text
C-V1-04
depende transitivamente de
C-V1-02
```

porque:

```text
C-V1-02
↓
C-V1-03
↓
C-V1-04
```

También:

```text
C-V1-05
depende transitivamente de
C-V1-03
```

mediante:

```text
C-V1-03
↓
C-V1-04
↓
C-V1-05
```

y:

```text
C-V1-05
depende transitivamente de
C-V1-02
```

mediante:

```text
C-V1-02
↓
C-V1-03
↓
C-V1-04
↓
C-V1-05
```

Estas dependencias son consecuencias del grafo y no se registran como aristas independientes.

---

# 16. Capacidades sin dependencia funcional interna necesaria

Las siguientes capacidades no presentan dependencias funcionales necesarias respecto de otras capacidades del mapa:

```text
C-V1-01 Incorporar materia de trabajo

C-V1-02 Transformar mediante trabajo

C-V1-06 Distinguir y relacionar
         materiales o resultados pertinentemente

C-V1-07 Reutilizar en otro contexto pertinente

C-V1-08 Preservar determinación humana efectiva
         cuando corresponda

C-V1-09 Preservar posibilidades pertinentes
         frente a cambios de la plataforma
```

La ausencia de dependencia interna no significa:

```text
capacidad opcional
```

ni:

```text
capacidad aislada del producto
```

Significa únicamente:

```text
su existencia funcional
no requiere la existencia de otra
de las nueve capacidades actualmente identificadas
```

---

# 17. Matriz de dependencias

La matriz funcional queda:

```text
Fila = capacidad dependiente
Columna = capacidad necesaria
```

| Capacidad | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 |
|---|---|---|---|---|---|---|---|---|---|
| C-V1-01 | — | — | — | — | — | — | — | — | — |
| C-V1-02 | — | — | — | — | — | — | — | — | — |
| C-V1-03 | — | D | — | — | — | — | — | — | — |
| C-V1-04 | — | T | D | — | — | — | — | — | — |
| C-V1-05 | — | T | T | D | — | — | — | — | — |
| C-V1-06 | — | — | — | — | — | — | — | — | — |
| C-V1-07 | — | — | — | — | — | — | — | — | — |
| C-V1-08 | — | — | — | — | — | — | — | — | — |
| C-V1-09 | — | — | — | — | — | — | — | — | — |

donde:

```text
D = dependencia funcional directa

T = dependencia transitiva

— = ausencia de dependencia funcional necesaria
```

---

# 18. Mapa mínimo de dependencias

El grafo reducido queda:

```text
C-V1-01 Incorporar
        [sin dependencia interna necesaria]


C-V1-02 Transformar
        ↓
C-V1-03 Constituir resultado utilizable
        ↓
C-V1-04 Recuperar resultado tras interrupción
        ↓
C-V1-05 Reanudar y continuar


C-V1-06 Distinguir y relacionar
        [sin dependencia interna necesaria]


C-V1-07 Reutilizar
        [sin dependencia interna necesaria]


C-V1-08 Determinación humana efectiva
        [transversal; sin dependencia fija]


C-V1-09 Continuidad de posibilidades pertinentes
        [transversal; sin dependencia fija]
```

---

# 19. Diferencia entre trayectoria y dependencia

La trayectoria definida en `12-DELIMITACION_DE_V1.md` contiene:

```text
incorporar
↓
trabajar
↓
R
↓
interrumpir
↓
recuperar
↓
continuar
```

Sin embargo, el mapa de dependencias no reproduce literalmente esa secuencia.

En particular:

```text
C-V1-02
no depende funcionalmente
de C-V1-01
```

aunque una trayectoria concreta de V1 utilice primero incorporación y después transformación.

Por tanto:

```text
orden de participación
en una trayectoria
≠
dependencia funcional
entre capacidades
```

Esta distinción deberá conservarse en fases posteriores.

---

# 20. Diferencia entre familia y cadena de dependencias

Las capacidades:

```text
C-V1-06 Distinguir y relacionar

C-V1-07 Reutilizar
```

pertenecen conjuntamente a:

```text
MC-2 Pluralidad contextual
```

pero no existe entre ellas una dependencia funcional necesaria.

Por tanto:

```text
pertenecer a la misma familia
≠
depender funcionalmente
```

La familia expresa una agrupación funcional dentro del alcance de V1.

No constituye automáticamente una secuencia.

---

# 21. Naturaleza transversal de C-V1-08 y C-V1-09

C-V1-08 y C-V1-09 no deben representarse como nodos finales de una cadena.

Su forma de participación es transversal.

Puede expresarse como:

```text
                     C-V1-08
            determinación humana
                    ╱ │ ╲
                   ╱  │  ╲
────────────────────────────────
 capacidades o situaciones afectadas
────────────────────────────────
                   ╲  │  ╱
                    ╲ │ ╱
                     C-V1-09
           continuidad de posibilidades
```

La aparición de una situación concreta puede activar una de estas capacidades respecto de otra capacidad operativa.

Ese vínculo constituye:

```text
relación de activación contextual
```

no:

```text
dependencia funcional fija
```

---

# 22. Dependencia funcional y orden de implementación

Este mapa no determina el orden en que deberá construirse el software.

Una capacidad sin dependencia funcional podría, por razones de implementación, necesitar desarrollarse después de otra.

Del mismo modo, varias capacidades podrían realizarse mediante una misma estructura técnica.

Por tanto:

```text
dependencia funcional
≠
orden de implementación
```

y:

```text
independencia funcional
≠
independencia técnica
```

La decisión sobre arquitectura e implementación corresponderá a fases posteriores.

---

# 23. Dependencia funcional y Architecture

El descubrimiento de una dependencia funcional no autoriza automáticamente una estructura arquitectónica.

Por ejemplo:

```text
C-V1-03 depende de C-V1-02
```

no implica necesariamente:

```text
módulo Transform
↓
módulo Result
```

ni:

```text
servicio A
↓
servicio B
```

El mapa expresa requisitos de posibilidad del producto, no topología de software.

Por tanto:

```text
grafo funcional
≠
grafo arquitectónico
```

---

# 24. Ausencia de nuevas capacidades derivadas

El análisis de dependencias no ha demostrado hasta ahora la necesidad de introducir una décima capacidad esencial.

En particular, no se ha derivado como capacidad autónoma:

```text
persistencia
almacenamiento
versionado
historial
identidad
organización general
navegación
búsqueda
usuarios
permisos
sincronización
```

Algunos de estos elementos podrán resultar técnicamente necesarios para realizar capacidades ya existentes.

Eso no los convierte todavía en nuevas capacidades funcionales de V1.

---

# 25. Condición de estabilidad del mapa de dependencias

El mapa se considera estable dentro de su alcance mientras no aparezca evidencia que demuestre que:

```text
una dependencia directa puede eliminarse;

una dependencia actualmente transitiva
requiere una relación directa adicional;

una capacidad considerada independiente
requiere realmente otra capacidad;

existe una dependencia circular;

o aparece una capacidad nueva
como prerrequisito funcional necesario.
```

Cualquiera de estas situaciones obligará a revisar el mapa antes de utilizarlo como fundamento de fases posteriores.

---

# 26. Estado resultante

El proyecto dispone ahora de:

```text
PLATFORM_VISION
        ↓
DELIMITACIÓN DE V1
        ↓
MAPA DE CAPACIDADES DE V1
        ↓
MAPA DE DEPENDENCIAS DE V1
```

El estado de dependencias es:

```text
9 capacidades esenciales

3 dependencias funcionales directas irreducibles

3 dependencias transitivas derivadas

6 capacidades sin dependencia funcional
interna necesaria
```

Las tres dependencias directas forman una única cadena:

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

# 27. Próxima actuación derivada

Una vez establecidos:

```text
alcance de V1
+
capacidades esenciales
+
dependencias funcionales
```

la siguiente actuación estratégica consiste en derivar los **criterios de finalización de V1**.

Estos criterios deberán permitir determinar:

```text
cuándo una capacidad puede considerarse
suficientemente realizada;

cómo comprobar su integración;

qué dependencias deben estar satisfechas;

qué evidencia resulta necesaria;

y cuándo el conjunto puede considerarse
completo dentro del alcance de V1.
```

No deberán confundirse con:

```text
detalles de implementación
ni
preferencias arquitectónicas
```

---

# 28. Punto de reanudación

La siguiente pregunta del proyecto pasa a ser:

> **¿Qué condiciones observables deben cumplirse para considerar suficientemente realizada cada una de las nueve capacidades esenciales y, a partir de ellas, V1 en su conjunto?**

La respuesta deberá constituir el primer criterio de finalización de V1.

---