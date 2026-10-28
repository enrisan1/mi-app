# Derivación de prueba discriminante para localización selectiva posterior

## Estado

```text id="s4d4n0"
V1
→ suficientemente realizada

primer objetivo post-V1
→ delimitado

CPV1-01 — Localización selectiva posterior
→ diferencia funcional nueva identificada

CF-PV1-01
→ PARCIALMENTE SATISFECHO según evidencia actualmente disponible

hueco conceptual respecto de V1
→ DEMOSTRADO

hueco técnico/empírico
→ TODAVÍA NO DEMOSTRADO DE FORMA DISCRIMINANTE

siguiente actuación
→ prueba discriminante mínima derivada en este documento

nueva Realization
→ NO DERIVADA TODAVÍA
```

---

# 1. Propósito

Este documento deriva una prueba discriminante mínima para evaluar:

```text id="nbu9rg"
CPV1-01 — Localización selectiva posterior
```

La prueba se deriva después de constatar que la evidencia actualmente disponible:

- se aproxima significativamente a `CF-PV1-01`;
- demuestra pluralidad, conservación, recuperación, relaciones, reutilización y determinación humana en distintos casos;
- no contiene todavía una demostración positiva limpia de localización selectiva posterior que supere los falsos positivos definidos;
- tampoco contiene un control negativo suficientemente aislado para demostrar una carencia técnica específica de localización.

Por tanto, la finalidad del presente documento no consiste en diseñar una feature ni en abrir automáticamente una nueva Realization.

Consiste únicamente en fijar, antes de realizar ninguna nueva actuación experimental, una prueba capaz de discriminar entre:

```text id="a7zegm"
material conservado
```

y:

```text id="1p25th"
material efectivamente localizable
```

---

# 2. Antecedente inmediato

`docs/08-project/17-DELIMITACION_DEL_PRIMER_OBJETIVO_POST_V1.md` redujo el primer objetivo post-V1 a una única capacidad funcional nueva:

```text id="d06mu1"
CPV1-01
Localización selectiva posterior
```

y definió:

```text id="gl8mwb"
CF-PV1-01
```

como criterio mínimo de satisfacción.

También definió:

```text id="cqzj00"
CN-PV1-01
Persistencia sin localización efectiva
```

como control negativo principal.

La auditoría posterior de la evidencia existente clasificó provisionalmente:

```text id="d7dbpn"
CF-PV1-01
→ PARCIALMENTE SATISFECHO
```

porque ya existen evidencias de:

- pluralidad conservada;
- separación temporal o contextual;
- necesidad posterior de material previo;
- reconocimiento suficiente;
- determinación humana de pertinencia;

pero no se ha aislado todavía una situación en la que:

```text id="lg062d"
pluralidad conservada
+
objetivo no preseleccionado
+
necesidad posterior
+
localización selectiva interna
```

queden demostradas de forma no contaminada.

---

# 3. Pregunta experimental

La prueba debe responder exclusivamente a:

> **Dado un conjunto conservado de varios materiales o resultados y una actividad posterior en la que ninguno viene dado como objetivo inmediato, ¿puede una persona reducir esa pluralidad hasta localizar un candidato suficientemente reconocible usando únicamente las posibilidades disponibles en la situación evaluada?**

La prueba no pretende responder todavía:

- cómo debe organizarse el producto;
- qué interfaz debe usarse;
- qué modelo de datos es necesario;
- qué mecanismo de búsqueda conviene;
- cómo debe escalar la capacidad;
- qué arquitectura debería soportarla.

---

# 4. Hipótesis positiva

## H-PD-01

```text id="sr03jg"
Si existe una posibilidad efectiva
de localización selectiva posterior,

una persona podrá partir
de una necesidad posterior

y reducir una pluralidad conservada

hasta volver a poner a su disposición
un candidato suficientemente reconocible

sin recibir de antemano
la identidad exacta del elemento
y sin reconstrucción externa.
```

---

# 5. Hipótesis negativa

## H-PD-02

```text id="1ex13d"
La mera conservación de varios materiales,
aunque éstos sigan siendo reconocibles
y reutilizables si se presentan directamente,

no garantiza que puedan volver a localizarse
cuando ninguno viene dado
como objetivo inmediato.
```

Esta hipótesis representa la diferencia que debe aislar la prueba.

---

# 6. Principio de discriminación

La prueba debe mantener constantes todas las capacidades ya demostradas y variar únicamente:

```text id="n6ixt0"
posibilidad efectiva
de localización selectiva posterior
```

La interpretación deseada es:

```text id="bb44rh"
persistencia
≠
localización
```

y también:

```text id="7fu1te"
reconocimiento
≠
localización
```

y:

```text id="tbf7ov"
reutilización
≠
localización
```

La prueba será discriminante únicamente si la diferencia observada no puede explicarse por la pérdida de esas otras capacidades.

---

# 7. Material mínimo experimental

Se propone una pluralidad mínima de cuatro elementos:

```text id="cr19jn"
A
B
C
D
```

Este número no constituye un requisito de producto.

Se utiliza únicamente porque permite:

- pluralidad real;
- más de un candidato;
- reducción significativa del conjunto;
- aislamiento experimental manejable;
- evitar convertir escalabilidad en variable de la prueba.

---

# 8. Propiedades de los materiales

Los cuatro elementos deben cumplir:

1. todos permanecen conservados;
2. todos son suficientemente distinguibles una vez accesibles;
3. ninguno está inicialmente seleccionado en la fase de prueba;
4. al menos uno puede resultar funcionalmente pertinente para la actividad posterior;
5. no todos son funcionalmente equivalentes;
6. ninguno debe depender de un identificador proporcionado externamente durante la prueba.

Conceptualmente pueden representarse así:

```text id="w0ypmh"
A → cuestión α

B → cuestión β

C → argumento γ

D → cuestión δ
```

La representación concreta puede variar.

Lo importante es que exista una diferencia funcional reconocible entre candidatos.

---

# 9. Fase de constitución

En una primera actuación se constituyen o incorporan:

```text id="zmhul1"
A
B
C
D
```

La actuación inicial debe dejar cada elemento suficientemente reconocido como parte del conjunto de trabajo.

No es necesario que la persona memorice:

- rutas;
- identificadores técnicos;
- nombres exactos;
- posiciones;
- metadatos específicos.

La prueba posterior no debe depender de esa memorización.

---

# 10. Estado S0 — Pluralidad constituida

Se define:

## S0

```text id="z5sb1v"
A, B, C y D
→ existen

A, B, C y D
→ permanecen conservados

A, B, C y D
→ son distinguibles una vez accesibles
```

En este estado todavía no se evalúa `CPV1-01`.

---

# 11. Separación respecto de la actuación inmediata

Debe existir una separación efectiva entre la constitución de los materiales y la prueba de localización.

Puede adoptar la forma de:

```text id="8kl8du"
interrupción real
```

o:

```text id="qwojca"
cambio suficiente de actividad/contexto
```

La función de esta separación es impedir que:

```text id="cu4xk8"
C siga inmediatamente presente
```

y convertir la prueba en mera selección visual.

La separación no necesita demostrar de nuevo `C-V1-04`.

Su función es únicamente eliminar disponibilidad inmediata.

---

# 12. Estado S1 — Pluralidad conservada sin objetivo preseleccionado

Después de la separación:

## S1

```text id="o2j0ne"
A, B, C y D
→ siguen existiendo

ninguno
→ está abierto como objeto activo

ninguno
→ está seleccionado de antemano

ninguno
→ está señalado como pertinente

ninguno
→ aparece como respuesta directa
a la necesidad posterior
```

La persona no debe recibir:

```text id="kyi5is"
"busca C"
```

ni:

```text id="qf3f0j"
"C está en..."
```

ni:

```text id="hbd3zg"
enlace directo a C
```

como sustituto de la localización evaluada.

---

# 13. Necesidad posterior P

Se introduce una nueva actividad:

```text id="3ixsm5"
P
```

que requiere considerar material previo.

La consigna debe expresar una necesidad funcional.

Ejemplo abstracto:

> Para continuar esta actividad necesitas volver a considerar el material anterior en el que se formuló el argumento sobre γ.

La consigna puede proporcionar:

```text id="cnfqay"
criterio funcional suficiente
```

pero no:

```text id="ptvl5n"
identidad exacta del material
```

La persona debe resolver:

```text id="xan953"
¿qué elemento del conjunto
debo volver a considerar?
```

---

# 14. Condición positiva S+

Se define:

## S+

```text id="80bi9x"
S1
+
necesidad P
+
posibilidad efectiva
de localización selectiva
```

La plataforma o situación experimental puede proporcionar alguna posibilidad mínima de reducción.

No se prescribe cuál.

Podría ser:

- navegación;
- filtrado;
- búsqueda;
- relación;
- representación;
- agrupación;
- otro mecanismo.

El mecanismo no constituye todavía compromiso de producto.

---

# 15. Trayectoria esperada en S+

La actuación esperada es:

```text id="k73zdg"
{A, B, C, D}
↓
necesidad P
↓
acción humana de localización
↓
reducción de pluralidad
↓
candidato C
↓
C suficientemente reconocible
↓
persona puede decidir
si C resulta pertinente
```

La prueba positiva termina en esa posibilidad de decisión.

No exige todavía:

```text id="9j1k64"
uso efectivo de C
```

porque la reutilización pertinente ya está cubierta por `C-V1-07`.

---

# 16. Condición negativa S−

Se define:

## S−

```text id="6gqt6v"
S1
+
misma necesidad P
+
misma pluralidad conservada
+
misma reutilización potencial
+
ausencia de posibilidad suficiente
de localización selectiva
```

Deben mantenerse:

```text id="t5ravk"
A, B, C y D conservados      ✓

C sigue existiendo           ✓

C sigue siendo reconocible   ✓

C sigue siendo reutilizable
si se presenta directamente  ✓
```

pero:

```text id="cjympy"
la persona no puede pasar
desde la necesidad P

hasta volver a localizar C
dentro del conjunto
```

---

# 17. Qué debe variar entre S+ y S−

Entre ambos estados debe variar únicamente:

```text id="365x06"
posibilidad efectiva
de reducir la pluralidad
hasta un candidato pertinente
```

No deben variar:

```text id="r5tk6p"
contenido de A, B, C y D

identidad de los elementos

necesidad P

reconocibilidad de C

persistencia de C

reutilización potencial de C

persona evaluadora
```

Esta constancia es necesaria para que la prueba tenga interpretación causal.

---

# 18. Control posterior de reutilización

Después de comprobar la dificultad o imposibilidad de localización en `S−`, el experimento puede presentar directamente `C`.

Se define:

## S−R

```text id="1m6p4b"
S−
+
C entregado directamente
```

Resultado esperado:

```text id="4a1aio"
persona reconoce C
↓
puede decidir que C responde
a la necesidad P
↓
puede reutilizarlo
```

Si esto ocurre:

```text id="82d10y"
localización ✗

reconocimiento ✓

reutilización ✓
```

queda aislada específicamente la pérdida de localización selectiva.

---

# 19. Criterio PD-01 — Localización positiva

## PD-01

> **En S+, la persona puede reducir la pluralidad conservada hasta localizar C sin recibir de antemano su identidad exacta y sin depender de una reconstrucción externa que sustituya la capacidad evaluada.**

Resultado esperado:

```text id="9kbbiv"
PD-01
→ SATISFECHO
```

---

# 20. Criterio PD-02 — Reconocimiento suficiente

## PD-02

> **Una vez localizado C, la persona puede reconocerlo suficientemente para decidir si responde a la necesidad P.**

Resultado esperado:

```text id="6u0krn"
PD-02
→ SATISFECHO
```

Este criterio evita considerar suficiente una localización que devuelve un elemento imposible de identificar funcionalmente.

---

# 21. Criterio PD-03 — Pérdida específica en S−

## PD-03

> **En S−, manteniéndose C conservado, reconocible y potencialmente reutilizable, la persona no puede volver a localizarlo desde las posibilidades disponibles en la situación evaluada.**

Resultado esperado:

```text id="vk8kng"
PD-03
→ SATISFECHO
```

Este resultado constituye la realización experimental de:

```text id="74q3re"
CN-PV1-01
```

si las restantes condiciones permanecen constantes.

---

# 22. Criterio PD-04 — Aislamiento causal

## PD-04

> **Después de S−, cuando C se proporciona directamente, la persona puede reconocerlo y reutilizarlo pertinentemente para P.**

Resultado esperado:

```text id="xjl3s2"
PD-04
→ SATISFECHO
```

Este criterio excluye que el fracaso de S− se deba a:

- desaparición de C;
- corrupción de C;
- imposibilidad de reconocer C;
- pérdida de capacidad de reutilización;
- falta de pertinencia funcional.

---

# 23. Resultado discriminante fuerte

La prueba obtiene su resultado más fuerte cuando:

```text id="29h7d5"
S+
→ localización ✓

S−
→ localización ✗

S−R
→ reconocimiento ✓
→ reutilización ✓
```

En ese caso:

```text id="mmhctb"
persistencia
→ no explica la diferencia

reconocimiento
→ no explica la diferencia

reutilización
→ no explica la diferencia

localización selectiva
→ explica la diferencia observada
```

---

# 24. Falsos positivos que la prueba debe evitar

La prueba no será válida si depende únicamente de alguna de estas situaciones.

### 24.1 Recuperación conocida

```text id="r27hul"
C es el último resultado
↓
"continuar C"
```

Esto puede reducirse a `C-V1-04`.

---

### 24.2 Navegación trivial

```text id="11qt98"
A B C D
```

todos inmediatamente visibles y C ya reconocible sin necesidad de reducción.

Esto puede reducirse a selección inmediata.

---

### 24.3 Identidad suministrada

```text id="oc5f4e"
"abre C"
```

no constituye una necesidad funcional suficientemente independiente.

---

### 24.4 Reconstrucción externa

La prueba no debe depender de:

- notas externas;
- capturas;
- rutas anotadas;
- copias paralelas;
- historial externo;
- instrucciones del experimentador;
- reconstrucción manual ajena a la situación evaluada.

---

### 24.5 Candidato único

```text id="exjjem"
{C}
```

no produce selección real.

---

### 24.6 Candidatos funcionalmente equivalentes

Si cualquiera de:

```text id="kfpdxd"
A
B
C
D
```

sirve indistintamente para P, la reducción puede dejar de ser discriminante.

---

### 24.7 Pertinencia decidida por el runtime

La prueba no requiere que la plataforma determine autónomamente:

```text id="lu3czr"
"C es pertinente"
```

La capacidad evaluada es:

```text id="68owdy"
hacer posible localizar candidatos
```

no:

```text id="iaa79i"
sustituir la decisión humana
```

---

### 24.8 Aparición accidental

Si C aparece sin actuación causal de la persona orientada por P, no queda demostrada la capacidad.

---

### 24.9 Persistencia interna inaccesible

Si C permanece físicamente almacenado pero sólo puede recuperarse mediante:

- inspección interna;
- edición directa de almacenamiento;
- comandos técnicos ajenos a la situación evaluada;

entonces:

```text id="7h2fp1"
C almacenado
≠
C localizable
```

---

# 25. Relación con CF-PV1-01

La prueba se considera suficiente para evaluar `CF-PV1-01` porque introduce conjuntamente:

```text id="bvipjz"
pluralidad conservada

separación respecto de la actuación inmediata

objetivo no preseleccionado

necesidad posterior funcional

actuación humana de localización

reducción de pluralidad

reconocimiento suficiente

decisión humana de pertinencia
```

y además contiene un control negativo específico.

---

# 26. Relación con C-V1-04

La prueba no pretende volver a demostrar recuperación longitudinal.

La identidad de C no debe quedar determinada por:

```text id="lkow59"
ser el último resultado
```

ni por:

```text id="oxwdmx"
continuación automática
de la trayectoria anterior
```

Por tanto:

```text id="57pou6"
PD
≠
repetición de C-V1-04
```

---

# 27. Relación con C-V1-06

La pluralidad y distinción de materiales son condiciones de la prueba.

Pero el objeto evaluado no es:

```text id="8fa313"
distinguir A de B
cuando ambos están presentes
```

sino:

```text id="7c8jmr"
volver a localizar un candidato
cuando ninguno está inmediatamente dado
```

Por tanto:

```text id="lb95kr"
PD
≠
repetición de C-V1-06
```

---

# 28. Relación con C-V1-07

`PD-04` utiliza deliberadamente la reutilización como control.

La lógica es:

```text id="o2r8i0"
C no localizable en S−
```

pero:

```text id="b8n4vd"
C reutilizable cuando se entrega
```

Por tanto, el fracaso de S− no puede atribuirse simplemente a pérdida de `C-V1-07`.

---

# 29. Relación con PV-005

La necesidad P puede orientar la localización.

La plataforma puede proporcionar posibilidades para reducir candidatos.

Pero la prueba no debe exigir que el runtime decida definitivamente:

```text id="lrxpzt"
qué material es pertinente
```

Cuando esa resolución corresponde a la persona debe mantenerse:

```text id="ukpg1u"
PV-005
Determinación humana efectiva
```

---

# 30. Relación con PV-006

La prueba evalúa una posible instancia de:

```text id="nxm9cf"
posibilidad pertinente
de volver a localizar C
```

Si C continúa existiendo pero esa posibilidad desaparece, puede observarse:

```text id="r60zth"
material conservado
+
posibilidad pertinente perdida
```

Esto es compatible con el marco establecido por `PV-006`.

La prueba no modifica `PV-006`.

Únicamente permite observar una posible aplicación concreta.

---

# 31. Qué no se deriva de la prueba

La prueba no deriva:

```text id="jqsnb4"
buscador general

full-text search

búsqueda semántica

etiquetas

carpetas

colecciones

grafo

índice

ranking

backend

base de datos

nuevo store

nuevo dominio

nueva arquitectura
```

Tampoco deriva todavía una entidad `Library`, `Workspace`, `Document`, `Resource` o equivalente.

---

# 32. Qué no se evalúa

La prueba tampoco pretende evaluar:

- rendimiento;
- escalabilidad;
- cientos de materiales;
- calidad de ranking;
- precisión semántica;
- colaboración;
- publicación;
- permisos;
- sincronización;
- versionado;
- provenance general;
- historial completo.

Todos esos aspectos quedan fuera.

---

# 33. Criterio de suficiencia experimental

La prueba será considerada suficientemente discriminante si se verifican conjuntamente:

```text id="4yo1kw"
PD-01 ✓
PD-02 ✓
PD-03 ✓
PD-04 ✓
```

y no se identifica ningún falso positivo de los enumerados en este documento que explique el resultado.

---

# 34. Posibles resultados

La prueba puede producir varios resultados.

## R-PD-A — Diferencia confirmada

```text id="xftg5r"
PD-01 ✓
PD-02 ✓
PD-03 ✓
PD-04 ✓
```

Consecuencia:

> La localización selectiva posterior queda aislada como diferencia causal respecto de persistencia, reconocimiento y reutilización.

Esto demostraría empíricamente un hueco técnico si el estado negativo corresponde al comportamiento actualmente disponible.

---

## R-PD-B — Capacidad ya disponible

Si la situación existente permite satisfacer:

```text id="za3y62"
PD-01
PD-02
```

sin modificación experimental relevante, puede resultar que `CPV1-01` ya esté disponible de facto.

Consecuencia:

```text id="q6q0cx"
no derivar automáticamente
una nueva Realization
```

y reevaluar el siguiente hueco estratégico.

---

## R-PD-C — Prueba no discriminante

Si S+ y S− no pueden distinguirse limpiamente o intervienen otras pérdidas:

```text id="vrhw1c"
persistencia
reconocimiento
reutilización
```

la prueba no permite concluir sobre `CPV1-01`.

Consecuencia:

```text id="ys58sa"
reducir o rediseñar
la prueba
```

sin ampliar automáticamente el alcance.

---

## R-PD-D — Capacidad mal formulada

Si la prueba muestra que la distinción entre localización y capacidades V1 no puede sostenerse empíricamente como se esperaba, deberá revisarse:

```text id="84dv2n"
CPV1-01
```

en lugar de preservar la capacidad por compromiso previo.

---

# 35. Condición para derivar una Realization

Este documento no deriva una Realization.

Una Realization sólo podrá evaluarse posteriormente si:

```text id="xy5aps"
1. la prueba discriminante sigue siendo necesaria;

2. el comportamiento existente no satisface suficientemente CPV1-01;

3. el hueco puede aislarse de capacidades ya existentes;

4. se puede formular una intervención técnica mínima;

5. esa intervención no presupone arquitectura adicional no derivada.
```

Por tanto:

```text id="uc7e2f"
prueba derivada
≠
Realization derivada
```

---

# 36. Estado resultante

```text id="c77egw"
CPV1-01
→ diferencia conceptual superviviente

CF-PV1-01
→ parcialmente satisfecho
por evidencia disponible

CN-PV1-01
→ todavía no observado
de forma controlada

PRUEBA DISCRIMINANTE
→ DERIVADA

S0
→ definido

S1
→ definido

S+
→ definido

S−
→ definido

S−R
→ definido

PD-01
→ definido

PD-02
→ definido

PD-03
→ definido

PD-04
→ definido

NUEVA REALIZATION
→ TODAVÍA NO DERIVADA
```

---

# 37. Conclusión

La evidencia existente no justifica todavía implementar una solución de organización o búsqueda.

Sí justifica una actuación experimental más pequeña:

> **comprobar si la conservación de varios materiales puede separarse empíricamente de la posibilidad efectiva de volver a localizar selectivamente uno de ellos desde una necesidad posterior.**

La prueba queda estructurada alrededor de:

```text id="l6hwyr"
S+
localización posible

S−
localización no posible

S−R
material entregado directamente
y reutilización posible
```

Si la diferencia se confirma manteniendo constantes persistencia, reconocimiento y reutilización, `CPV1-01` habrá sido aislada empíricamente como capacidad distinta.

---

# 38. Próxima actuación

La siguiente actuación justificable es:

> **determinar si esta prueba discriminante puede ejecutarse utilizando comportamiento y materiales ya existentes en el proyecto, sin introducir todavía una nueva Realization.**

Sólo si eso no resulta posible deberá evaluarse una intervención experimental mínima.
