# 99 Protocolo de consolidación documental

# Protocolo de consolidación documental

## Propósito

Este documento establece el procedimiento mediante el cual los documentos del proyecto alcanzan, mantienen, pierden o recuperan un estado de consolidación.

Su objetivo consiste en garantizar que la documentación conserve:

- coherencia conceptual;
- trazabilidad histórica;
- separación entre investigación y consolidación;
- control explícito de cambios;
- posibilidad de falsación;
- ausencia de modificaciones silenciosas;
- correspondencia entre el estado declarado de un documento y el estado real de su justificación.

El protocolo recibe la denominación:

```text
PCD
Protocolo de Consolidación Documental
```

---

# Estatuto del protocolo

El PCD no pertenece al contenido sustantivo de la teoría.

No determina:

- fenómenos;
- exigencias;
- funciones;
- primitivas;
- firma;
- axiomas;
- modelo de gobierno;
- modelo operacional.

Su objeto es exclusivamente el **estado documental y justificativo** de los documentos que contienen esos resultados.

Por tanto:

```text
PCD
≠
teoría conceptual
```

y:

```text
regla documental
⇏
resultado teórico
```

El PCD regula cómo se consolida, revisa, reabre y registra un documento.

No determina qué debe afirmar ese documento.

---

# Origen del protocolo

El PCD se formaliza después de haber sido utilizado parcialmente como práctica de trabajo durante investigaciones y consolidaciones anteriores.

Históricamente se empleó una secuencia aproximada:

```text
auditoría conceptual
        ↓
entrega completa
        ↓
revisión conjunta
        ↓
congelación provisional
        ↓
registro en bitácora
```

La existencia histórica de esta práctica no demuestra por sí sola que todos sus componentes sean necesarios.

Por ello, este documento no se limita a transcribirla.

La somete a auditoría antes de convertirla en norma documental.

---

# Problema metodológico

Existe un riesgo de circularidad:

```text
hemos trabajado de determinada manera
        ↓
esa manera ha funcionado
        ↓
por tanto debe convertirse
en protocolo obligatorio
```

Esta inferencia no es válida.

Una práctica histórica puede contener:

- pasos accidentales;
- redundancias;
- convenciones locales;
- decisiones derivadas de circunstancias concretas;
- controles que podrían reducirse a otros más generales.

Por tanto, cada fase del PCD deberá justificar su función independientemente de su uso histórico.

---

# Objetivo mínimo

El protocolo deberá garantizar únicamente aquello que resulte necesario para poder determinar:

1. qué afirma actualmente cada documento;
2. sobre qué justificación descansa;
3. qué cambios ha sufrido;
4. si esos cambios fueron revisados;
5. cuál es su estado actual;
6. qué resultados posteriores dependen de él;
7. y cuándo debe reabrirse.

Todo requisito adicional deberá justificarse independientemente.

---

# Distinción fundamental: investigación y documentación

La investigación produce, somete a prueba, modifica o elimina resultados.

La consolidación documental registra de manera estable el estado alcanzado por esos resultados.

Por tanto:

```text
investigar
≠
consolidar
```

Un resultado puede haber sido investigado sin estar todavía consolidado.

Y un resultado consolidado puede ser posteriormente falsado.

Por tanto:

```text
consolidado
≠
verdadero definitivamente
```

La consolidación expresa:

> estado justificativo aceptado provisionalmente por el proyecto en un momento determinado.

---

# Tipos de intervención documental

El protocolo distingue tres modalidades principales de intervención.

## `TD-1 — Construcción inicial`

Se produce cuando un documento existe como archivo pero todavía no contiene contenido consolidado.

Esquema:

```text
documento vacío
        ↓
investigación / corpus disponible
        ↓
construcción inicial
        ↓
PCD
```

Ejemplos históricos:

```text
02-fenomenos-fundamentales.md
03-reduccion-de-fenomenos.md
```

y, en su momento inicial:

```text
04-exigencias-estructurales.md
05-perfil-funcional.md
06-axiomas.md
```

La construcción inicial no deberá describirse como reapertura.

---

## `TD-2 — Reapertura reconstructiva`

Se produce cuando existe una versión previamente consolidada y aparece evidencia suficiente para cuestionar alguna de sus afirmaciones.

Esquema:

```text
documento consolidado
        ↓
falsador / incompatibilidad /
nuevo resultado relevante
        ↓
reapertura
        ↓
reconstrucción
        ↓
nuevo PCD
```

Una reapertura reconstructiva puede originarse por:

- falsador interno;
- contraejemplo;
- contradicción;
- cambio de fundamento;
- resultado externo que invalida una dependencia;
- ampliación silenciosa detectada;
- circularidad;
- pérdida reconstructiva;
- cambio justificado de alcance.

Ejemplos históricos:

```text
04-exigencias-estructurales.md
05-perfil-funcional.md
06-axiomas.md
```

durante la investigación:

```text
H-DPV-107
        ↓
R-DPV-268
```

### Reapertura por dependencia

Cuando un resultado consolidado en otro documento modifica un fundamento utilizado localmente, el documento dependiente podrá requerir reapertura.

Esto no constituye un tipo autónomo de intervención.

Es un caso particular de `TD-2 — Reapertura reconstructiva`.

La secuencia será:

```text
resultado externo modificado
        ↓
análisis de dependencia
        ↓
¿afecta realmente al documento?
        ↓
sí
        ↓
reapertura reconstructiva
```

---

## `TD-3 — Revisión ordinaria`

Se produce cuando se comprueba un documento sin que exista inicialmente un falsador concreto.

Puede terminar:

```text
sin cambios
```

o descubrir:

```text
necesidad de reapertura
```

La revisión ordinaria no altera por sí misma el estado consolidado.

Por tanto:

```text
revisar
≠
reabrir
```

Una revisión sólo conduce a `TD-2` cuando descubre una razón sustantiva de reapertura.

---

# Principio de intervención mínima

Una modificación en un documento no autoriza automáticamente la reapertura completa de todos los documentos posteriores.

La regla será:

```text
cambio en D₁
        ↓
identificar dependencias reales
        ↓
reabrir únicamente
D₂...Dn afectados
```

Por tanto:

```text
anterioridad documental
⇏
dependencia conceptual
```

y:

```text
dependencia conceptual
⇏
reapertura total del documento
```

cuando una reapertura localizada resulte suficiente.

---

# Auditoría de las cinco fases históricas

# Fase histórica 1 — Auditoría conceptual

## Función

Comprobar que el contenido propuesto:

- responde al propósito del documento;
- no contiene contradicciones internas;
- no importa conclusiones no justificadas;
- respeta los niveles conceptuales;
- conserva los resultados legítimos;
- supera las pruebas específicas de su investigación;
- y no produce pérdidas o ampliaciones silenciosas.

## Alcance de la denominación

`Auditoría conceptual` es la denominación general de `PCD-1`.

Su contenido concreto depende de la función del documento.

Puede incluir auditoría:

- conceptual;
- reconstructiva;
- metodológica;
- documental;
- estructural;
- histórica;
- de cobertura;
- de referencias;
- de completitud;
- de compatibilidad;
- de dependencias.

Por tanto:

```text
PCD-1
≠
misma batería de pruebas
para todos los documentos
```

La regla es:

> cada documento deberá superar las auditorías pertinentes a las afirmaciones que pretende consolidar.

## Prueba de eliminación

Si se elimina esta fase, un documento puede pasar directamente de investigación a redacción consolidada sin comprobar que la conclusión realmente se sigue del corpus.

Se pierde control justificativo.

## Resultado

```text
NECESARIA
```

Se conserva.

---

# Fase histórica 2 — Entrega completa del documento

## Función histórica

Presentar el documento como una unidad completa y auditable.

Su finalidad es impedir que una consolidación resulte de una acumulación de parches cuya interacción global no haya sido examinada.

## Prueba de eliminación

Podrían validarse individualmente modificaciones locales mientras permanecen:

- contradicciones entre secciones;
- restos del modelo anterior;
- referencias obsoletas;
- ampliaciones silenciosas;
- incompatibilidades globales.

## Resultado

La necesidad real no consiste estrictamente en «entregar» un documento.

Consiste en disponer de una:

```text
VERSIÓN COMPLETA AUDITABLE
```

Por tanto se conserva la fase, reformulada como:

```text
PCD-2 — Versión completa auditable
```

---

# Fase histórica 3 — Revisión conjunta

## Función histórica

Someter la versión completa a revisión antes de declararla consolidada.

## Prueba de reducción

¿Es conceptualmente necesario que la revisión sea «conjunta»?

No.

Lo necesario es que exista una **decisión explícita de aceptación** después de disponer de la versión completa auditable.

La modalidad concreta mediante la que se realiza esa revisión pertenece al procedimiento de trabajo, no a la estructura necesaria del protocolo.

## Resultado

La fase se conserva reformulada como:

```text
PCD-3 — Revisión y aceptación explícita
```

No se convierte «conjunta» en propiedad universal del PCD.

---

# Fase histórica 4 — Congelación provisional

## Función

Adoptar explícitamente la decisión de que la versión aceptada deja de estar en edición ordinaria y pasa a estar protegida frente a modificaciones sustantivas silenciosas.

## Prueba de eliminación

Sin esta distinción no podría saberse si un documento:

- continúa abierto;
- puede utilizarse como fundamento;
- está pendiente de revisión;
- o representa el estado aceptado del proyecto.

## Resultado

```text
NECESARIA
```

La fase se conserva como:

```text
PCD-4 — Congelación provisional
```

pero debe distinguirse entre:

```text
decisión de congelación
```

y:

```text
consolidación documental completada
```

`PCD-4` adopta la decisión de congelación.

`PCD-5` registra formalmente dicha decisión y completa el ciclo documental.

---

# Fase histórica 5 — Registro en bitácora

## Función

Registrar:

- documento;
- fecha;
- estado;
- auditorías superadas;
- resultado consolidado;
- consecuencias;
- pendientes;
- relaciones documentales relevantes.

## Prueba de eliminación

Sin registro podría conservarse el contenido actual del documento, pero se perdería parte de:

```text
trazabilidad histórica;
estado de consolidación;
razón del cambio;
relación con decisiones anteriores
```

## Resultado

```text
NECESARIA
```

para el régimen documental adoptado por el proyecto.

---

# PCD consolidado

Tras auditar las fases históricas, el protocolo queda:

```text
PCD-1
Auditoría conceptual
        ↓

PCD-2
Versión completa auditable
        ↓

PCD-3
Revisión y aceptación explícita
        ↓

PCD-4
Congelación provisional
        ↓

PCD-5
Registro en bitácora
        ↓

CONSOLIDADO PROVISIONALMENTE
```

La estructura histórica de cinco fases sobrevive.

Dos denominaciones se precisan:

```text
“entrega completa”
→
“versión completa auditable”
```

y:

```text
“revisión conjunta”
→
“revisión y aceptación explícita”
```

La modificación elimina propiedades accidentales de la práctica histórica sin eliminar las funciones que justificaban las fases.

---

# `PCD-1 — Auditoría conceptual`

La auditoría deberá adaptarse al documento concreto.

No existe una lista universal cerrada de pruebas.

Podrá incluir, cuando corresponda:

- completitud;
- coherencia interna;
- compatibilidad externa;
- circularidad;
- independencia;
- reducción;
- clausura;
- exhaustividad;
- propiedad emergente;
- reintroducción encubierta;
- ampliación silenciosa;
- fidelidad histórica;
- localización de nivel;
- no trivialización;
- control de contraejemplos;
- control reconstructivo;
- dependencias;
- cobertura;
- referencias.

La regla no es:

```text
todo documento
debe superar
todas las auditorías posibles
```

sino:

> todo documento deberá superar las auditorías pertinentes a las afirmaciones que pretende consolidar.

---

# `PCD-2 — Versión completa auditable`

Después de la investigación deberá existir una versión completa del documento.

No se consolidarán exclusivamente:

- parches;
- fragmentos;
- diferencias;
- secciones aisladas;
- instrucciones de modificación.

La versión completa deberá permitir comprobar simultáneamente:

```text
coherencia global;
terminología;
dependencias;
referencias;
ausencia de restos obsoletos;
resultado final
```

Durante la investigación sí podrán utilizarse modificaciones parciales.

La prohibición afecta únicamente al momento de consolidación.

---

# `PCD-3 — Revisión y aceptación explícita`

La versión completa no pasa automáticamente a estado consolidado.

Debe existir una aceptación explícita posterior a su revisión.

La aceptación podrá:

```text
aprobar;
rechazar;
solicitar cambios;
devolver a investigación
```

Si se solicitan cambios sustantivos:

```text
PCD-2
deberá producir
una nueva versión completa auditable
```

antes de continuar.

La revisión puede realizarse mediante distintas modalidades.

Lo obligatorio es:

```text
revisión efectiva
+
decisión explícita
```

no una forma concreta de interacción.

---

# `PCD-4 — Congelación provisional`

Una vez aceptada la versión completa se adopta la decisión de:

```text
CONGELACIÓN PROVISIONAL
```

Desde ese momento:

1. la versión aceptada deja de estar en edición ordinaria;
2. no podrán introducirse cambios sustantivos silenciosos;
3. puede prepararse su registro como versión vigente;
4. cualquier modificación sustantiva posterior requerirá reapertura explícita.

Sin embargo:

```text
PCD-4
≠
ciclo documental completado
```

La consolidación formal se completa mediante:

```text
PCD-5
```

cuando la decisión y sus resultados quedan registrados en la bitácora.

Por tanto:

```text
congelado
≠
inmutable
```

sino:

```text
congelado
=
modificable sólo
mediante procedimiento explícito
```

---

# `PCD-5 — Registro en bitácora`

Toda consolidación provisional deberá producir una ficha de bitácora.

La ficha deberá contener, cuando resulte aplicable:

```text
Documento
Estado
Última revisión
Fases del PCD superadas
Auditorías superadas
Resultado de la consolidación
Consecuencias
Consecuencias documentales
Pendiente
```

Podrán añadirse apartados específicos cuando el documento lo requiera.

No todos los apartados necesitan tener la misma extensión ni estar separados artificialmente cuando no aporten contenido.

La estructura representa un:

```text
mínimo semántico
```

no una plantilla tipográfica rígida.

La ficha no sustituye al documento.

Resume su estado de consolidación y proporciona trazabilidad.

Una vez registrada la ficha:

```text
PCD-1…PCD-5
completados
        ↓
documento
CONSOLIDADO PROVISIONALMENTE
```

---

# Regla cronológica de la bitácora

La bitácora deberá preservar el orden real de los trabajos.

Por tanto:

```text
orden conceptual
≠
orden de bitácora
```

Si un documento conceptualmente anterior se construye después de otro, su ficha deberá registrarse en el momento real de su consolidación.

Ejemplo histórico:

```text
orden conceptual:

02 → 03 → 04 → 05 → 06
```

mientras que la secuencia reciente de consolidación fue:

```text
04 → 05 → 06 → 02 → 03
```

Reordenar retrospectivamente las fichas para hacerlas coincidir con la dependencia conceptual produciría una genealogía histórica falsa.

---

# Distinción entre documento y versión

Debe distinguirse siempre entre:

```text
documento
```

y:

```text
versión del documento
```

Una reapertura y posterior reconsolidación no sustituyen necesariamente al documento como unidad documental.

Sustituyen su versión vigente anterior.

Ejemplo:

```text
06-axiomas.md

versión anterior
→ histórica / sustituida

versión reconsolidada
→ vigente
```

El documento sigue siendo:

```text
06-axiomas.md
```

Por tanto, el estado:

```text
SUSTITUIDO
```

se reservará para casos en los que un documento completo deje realmente de desempeñar su función porque otro documento ocupa su lugar.

No deberá utilizarse simplemente para describir la aparición de una nueva versión del mismo documento.

---

# Regla de historia documental

Debe distinguirse siempre:

```text
documento originalmente vacío
```

de:

```text
documento previamente consolidado
que posteriormente se reabre
```

Un mismo documento puede recorrer:

```text
VACÍO
↓
CONSTRUCCIÓN INICIAL
↓
CONSOLIDACIÓN
↓
REAPERTURA
↓
RECONSTRUCCIÓN
↓
NUEVA CONSOLIDACIÓN
```

El hecho de que un documento fuese originalmente vacío no impide hablar posteriormente de reapertura si ya existía una versión consolidada en el momento de la nueva intervención.

---

# Regla de versión completa frente a parches

Durante investigación podrán utilizarse:

- modificaciones parciales;
- hipótesis;
- pruebas;
- tablas;
- sustituciones;
- notas;
- borradores.

Pero ninguna acumulación de estos elementos constituirá por sí sola una nueva versión consolidada.

Antes de `PCD-3` deberá existir siempre una versión completa auditable.

La finalidad es comprobar:

```text
efectos locales
+
interacciones globales
```

---

# Regla de no modificación silenciosa

Un documento congelado provisionalmente no deberá recibir cambios sustantivos sin reapertura explícita.

Se consideran sustantivos los cambios que afecten a:

- tesis;
- resultados;
- dependencias;
- definiciones;
- alcance;
- conclusiones;
- criterios;
- relaciones con otros documentos;
- fuerza normativa;
- condiciones de aplicación.

---

# Correcciones editoriales

Las correcciones puramente editoriales que no alteren el significado no requieren reapertura reconstructiva.

Por ejemplo:

- erratas;
- puntuación;
- formato;
- espacios;
- correcciones tipográficas;
- referencias puramente formales inequívocas.

La regla es:

```text
cambio editorial
sin modificación semántica
→
no reapertura
```

mientras que:

```text
cambio semántico
→
reapertura
```

La corrección editorial no podrá utilizarse para modificar silenciosamente:

- alcance;
- definición;
- dependencia;
- conclusión;
- fuerza normativa;
- estatuto conceptual.

---

# Regla de reapertura

Un documento consolidado deberá reabrirse cuando aparezca al menos uno de los siguientes casos:

```text
falsador;
contradicción interna;
incompatibilidad con resultado posterior;
dependencia invalidada;
contraejemplo;
pérdida reconstructiva;
ampliación silenciosa detectada;
circularidad detectada;
cambio justificado de alcance
```

La mera existencia de una formulación alternativa no obliga a reabrirlo.

La causa de reapertura deberá quedar explícita.

---

# Reapertura localizada

Siempre que sea posible, la reapertura deberá declarar su alcance.

Ejemplo:

```text
reabrir 04
exclusivamente sobre ES-001
```

Una reapertura localizada no autoriza automáticamente la modificación de otras partes del documento.

Si durante la investigación aparecen consecuencias más amplias, el alcance deberá ampliarse explícitamente.

---

# Propagación documental

Después de modificar un resultado consolidado deberá realizarse un análisis de impacto.

Para cada documento relacionado se preguntará:

```text
¿contiene una afirmación
que depende realmente
del resultado modificado?
```

Si no:

```text
NO REABRIR
```

Si sí:

```text
determinar alcance
        ↓
reabrir
```

No se utilizará:

```text
D₁ cambió
        ↓
todos los documentos posteriores
deben cambiar
```

---

# Control de compatibilidad

Cuando un documento conceptualmente anterior sea construido o modificado después de documentos posteriores ya consolidados, deberá realizarse un control explícito de compatibilidad.

Esquema:

```text
documento anterior
construido/modificado tardíamente
        ↓
resultado
        ↓
comparación con documentos
posteriores congelados
        ↓
compatible
    o
falsador
```

Si es compatible, los documentos posteriores permanecen congelados.

Si constituye un falsador, se reabrirán exclusivamente los afectados.

Este procedimiento fue aplicado al construir por primera vez:

```text
02
↓
03
```

después de la reconsolidación de:

```text
04
05
06
```

---

# Regla de no retroproyección

No deberá modificarse la historia documental para hacer que el orden real de investigación coincida artificialmente con el orden lógico final.

Tampoco deberá escribirse un documento tardío como si hubiese servido históricamente de fundamento a documentos anteriores.

Puede afirmarse:

```text
D₁ es conceptualmente anterior a D₂
```

sin afirmar:

```text
D₂ fue históricamente
derivado de D₁
```

La documentación deberá distinguir siempre:

```text
dependencia conceptual
```

de:

```text
cronología real de investigación
```

---

# Estados documentales

Se reconocen los siguientes estados principales:

```text
VACÍO

EN CONSTRUCCIÓN

EN INVESTIGACIÓN

EN REVISIÓN

CONGELADO PROVISIONALMENTE

CONSOLIDADO PROVISIONALMENTE

REABIERTO

SUSTITUIDO
```

Los estados deberán describir la situación real del documento y de su versión vigente.

---

# Estado `VACÍO`

El archivo existe, pero no contiene todavía contenido consolidado.

No constituye una versión teórica.

---

# Estado `EN CONSTRUCCIÓN`

Existe una primera propuesta de contenido, todavía no sometida completamente al PCD.

---

# Estado `EN INVESTIGACIÓN`

El documento o parte de él está siendo sometido a:

- hipótesis;
- pruebas;
- falsación;
- reducción;
- reconstrucción.

---

# Estado `EN REVISIÓN`

Existe una versión completa auditable pendiente de aceptación explícita.

---

# Estado `CONGELADO PROVISIONALMENTE`

La versión completa ha sido aceptada y se ha adoptado `PCD-4`.

No podrán introducirse modificaciones sustantivas salvo reapertura.

Todavía puede quedar pendiente:

```text
PCD-5 — Registro en bitácora
```

---

# Estado `CONSOLIDADO PROVISIONALMENTE`

El documento ha completado:

```text
PCD-1
PCD-2
PCD-3
PCD-4
PCD-5
```

y constituye el estado documental vigente.

---

# Estado `REABIERTO`

Una versión anteriormente consolidada ha vuelto a investigación por una razón explícita.

---

# Estado `SUSTITUIDO`

Se aplica al documento completo únicamente cuando deja de formar parte del corpus vigente porque otro documento asume su función.

No se utilizará para describir simplemente una nueva versión del mismo documento.

Las versiones históricas sustituidas podrán conservarse como antecedentes sin ser el estado vigente.

---

# Prohibición de autoridad por antigüedad

Una afirmación no adquiere mayor autoridad porque:

- aparezca en un documento antiguo;
- haya sido utilizada durante mucho tiempo;
- figure en múltiples documentos;
- haya servido de fundamento histórico.

La autoridad documental depende de su estado justificativo actual.

Por tanto:

```text
antigüedad
⇏
validez
```

---

# Prohibición de autoridad por consolidación

Tampoco:

```text
consolidado
⇒
incuestionable
```

Todo resultado consolidado permanece sometido a falsación.

La consolidación regula el procedimiento de modificación.

No elimina la posibilidad de revisión.

---

# Prohibición de consolidación por repetición

La aparición reiterada de una afirmación en varios documentos no la convierte en resultado consolidado independiente.

Siempre deberá identificarse:

```text
dónde se justifica
```

y:

```text
dónde únicamente
se utiliza o resume
```

Esto evita que una conclusión adquiera autoridad circular por repetición documental.

---

# Separación entre especificación, justificación e investigación

Todo documento deberá distinguir, cuando resulte pertinente:

```text
qué se afirma;
por qué se afirma;
qué permanece abierto
```

Por tanto:

```text
especificación
≠
justificación
≠
investigación
```

Una pregunta abierta no deberá presentarse como resultado.

Una hipótesis no deberá presentarse como especificación consolidada.

Y una conclusión consolidada deberá poder relacionarse con la investigación que la justifica.

---

# Trazabilidad mínima

El PCD no exige una única forma técnica de trazabilidad.

Exige únicamente que pueda reconstruirse suficientemente:

```text
resultado vigente
        ↓
documento que lo consolida
        ↓
investigación o auditoría
que lo justifica
        ↓
cambios posteriores relevantes
```

La implementación concreta de esta trazabilidad puede variar.

---

# Relación entre PCD y bitácora

El documento consolidado y su ficha de bitácora cumplen funciones distintas.

El documento contiene:

```text
resultado vigente
+
justificación necesaria
+
alcance
+
estructura interna
```

La bitácora contiene:

```text
estado
+
historia de consolidación
+
auditorías superadas
+
consecuencias
+
pendientes
```

Por tanto:

```text
documento
≠
ficha de bitácora
```

y ninguno sustituye al otro.

---

# Aplicación del PCD a documentos nuevos

Para un documento inicialmente vacío:

```text
VACÍO
↓
EN CONSTRUCCIÓN
↓
PCD-1
↓
PCD-2
↓
EN REVISIÓN
↓
PCD-3
↓
PCD-4
↓
CONGELADO PROVISIONALMENTE
↓
PCD-5
↓
CONSOLIDADO PROVISIONALMENTE
```

---

# Aplicación del PCD a documentos reabiertos

Para un documento previamente consolidado:

```text
CONSOLIDADO PROVISIONALMENTE
↓
falsador o causa de reapertura
↓
REABIERTO
↓
EN INVESTIGACIÓN
↓
reconstrucción
↓
PCD-1
↓
PCD-2
↓
EN REVISIÓN
↓
PCD-3
↓
PCD-4
↓
CONGELADO PROVISIONALMENTE
↓
PCD-5
↓
CONSOLIDADO PROVISIONALMENTE
```

La nueva consolidación sustituye como **versión vigente** a la anterior sin borrar su existencia histórica.

---

# Aplicación del PCD a revisiones ordinarias

Para un documento consolidado:

```text
CONSOLIDADO PROVISIONALMENTE
↓
revisión ordinaria
```

Si no aparece problema:

```text
PASS
↓
permanece
CONSOLIDADO PROVISIONALMENTE
```

Si aparece un falsador:

```text
FAIL
↓
TD-2
REAPERTURA RECONSTRUCTIVA
```

La revisión ordinaria no necesita producir automáticamente una nueva versión ni una nueva ficha de consolidación cuando no modifica el estado.

---

# Aplicación del PCD a cambios dependientes

Cuando cambia un fundamento externo:

```text
resultado modificado
↓
análisis de impacto
↓
documentos afectados
```

Para cada documento:

```text
sin dependencia real
→ mantener congelado
```

o:

```text
dependencia real afectada
→ TD-2
→ reapertura localizada
→ PCD
```

---

# Auditoría global del propio PCD

El protocolo debe superar las mismas cautelas metodológicas que impone a otros documentos.

---

## Completitud

Las cinco fases cubren:

```text
justificación
integración global
aceptación
estabilización provisional
trazabilidad
```

No se identifica una función documental necesaria adicional.

Resultado:

```text
PASS
```

---

## Independencia funcional

Las fases no son equivalentes.

Auditar no sustituye a disponer de versión completa.

Disponer de versión completa no sustituye a aceptarla.

Aceptar no establece por sí solo el régimen de modificación posterior.

Congelar no registra la historia.

Registrar no sustituye a la auditoría.

Resultado:

```text
PASS
```

---

## Ausencia de circularidad

El PCD no afirma:

```text
un documento es válido
porque ha superado el PCD
```

en sentido teórico.

Afirma únicamente:

```text
un documento está
consolidado documentalmente
porque ha superado el PCD
```

La validez de sus resultados depende de las auditorías sustantivas correspondientes.

Resultado:

```text
PASS
```

---

## Autoaplicación

El propio `99-protocolo-de-consolidacion-documental.md` puede someterse al PCD.

La secuencia es:

```text
PCD-1
auditoría del protocolo

PCD-2
versión completa auditable

PCD-3
revisión y aceptación

PCD-4
congelación provisional

PCD-5
registro en bitácora
```

No existe autovalidación porque:

```text
superar el PCD
```

determina únicamente su estado documental.

La justificación del protocolo procede de la auditoría independiente de sus funciones.

Resultado:

```text
PASS
```

---

## Ausencia de ampliación silenciosa

El PCD no autoriza a decidir contenido conceptual.

No puede utilizarse para inferir:

- primitivas;
- exigencias;
- funciones;
- axiomas;
- arquitectura;
- gobierno;
- operaciones.

Resultado:

```text
PASS
```

---

## No trivialización

El protocolo no se reduce a:

```text
revisar hasta estar de acuerdo
```

Impone funciones diferenciadas:

```text
auditar;
integrar;
aceptar;
congelar;
registrar
```

y reglas explícitas de:

- reapertura;
- propagación;
- control de compatibilidad;
- cronología;
- versionado.

Resultado:

```text
PASS
```

---

## No burocratización

El PCD no deberá aplicarse mecánicamente a modificaciones puramente editoriales.

La investigación permanece libre para utilizar:

- borradores;
- parches;
- hipótesis;
- pruebas;
- exploraciones.

El protocolo completo se activa cuando se pretende:

```text
establecer o modificar
el estado documental vigente
```

Resultado:

```text
PASS
```

---

## Ausencia de autoridad emergente

Las cinco fases conjuntamente no producen:

```text
verdad certificada
```

ni:

```text
autoridad epistemológica absoluta
```

Producen únicamente:

```text
estado documental controlado
```

Resultado:

```text
PASS
```

---

## Conservación de la historia

El protocolo distingue:

```text
orden conceptual
```

de:

```text
cronología documental
```

y distingue:

```text
documento
```

de:

```text
versión del documento
```

Por tanto puede preservar la historia real sin falsearla para acomodarla al esquema lógico posterior.

Resultado:

```text
PASS
```

---

## Falsabilidad

El propio PCD permanece revisable.

Si una fase futura demuestra ser:

- redundante;
- insuficiente;
- contraproducente;
- circular;
- incapaz de detectar una clase relevante de error documental;

`99-protocolo-de-consolidacion-documental.md` deberá reabrirse mediante el mismo procedimiento que regula.

Resultado:

```text
PASS
```

---

# Resultado de la auditoría

La práctica histórica del PCD no se conserva simplemente por tradición.

La auditoría identifica cinco funciones documentales diferenciadas:

```text
justificación
        ↓
integración global
        ↓
aceptación explícita
        ↓
estabilización provisional
        ↓
trazabilidad
```

Estas funciones justifican:

```text
PCD-1 — Auditoría conceptual

PCD-2 — Versión completa auditable

PCD-3 — Revisión y aceptación explícita

PCD-4 — Congelación provisional

PCD-5 — Registro en bitácora
```

La estructura de cinco fases queda provisionalmente justificada independientemente de su origen histórico.

---

# Condición de reapertura del PCD

Este documento deberá reabrirse si aparece evidencia de que:

1. alguna fase es redundante;
2. falta una función documental necesaria;
3. una fase produce circularidad;
4. el protocolo impide conservar correctamente la historia;
5. no distingue adecuadamente tipos de intervención;
6. permite modificaciones sustantivas silenciosas;
7. fuerza reaperturas innecesarias;
8. impide reaperturas necesarias;
9. confunde orden conceptual con cronología documental;
10. confunde documento con versión;
11. genera burocracia desproporcionada;
12. o convierte accidentalmente una práctica histórica en obligación injustificada.

---

# Estado

**Estado:** construido por primera vez.

**Origen:** formalización auditada de una práctica documental previamente utilizada.

**Fases históricas examinadas:** 5.

**Fases conservadas funcionalmente:** 5.

**Fases conservadas sin modificación conceptual:** `PCD-1`, `PCD-4`, `PCD-5`.

**Fases reformuladas:** `PCD-2`, `PCD-3`.

**Tipos principales de intervención:** construcción inicial, reapertura reconstructiva y revisión ordinaria.

**Cambios dependientes:** tratados como causa de reapertura reconstructiva cuando afectan realmente a una dependencia.

**Carácter de toda consolidación:** provisional.

**Distinción documento/versión:** explícita.

**Cambios editoriales:** no requieren reapertura si no alteran significado.

**Estatuto del propio PCD:** falsable y reabrible.

---

# Decisión

> **El proyecto adopta provisionalmente un Protocolo de Consolidación Documental de cinco fases, no por continuidad histórica, sino porque la auditoría independiente identifica cinco funciones documentales diferenciadas que deben conservarse.**

La forma consolidada es:

```text
PCD-1
Auditoría conceptual
        ↓
PCD-2
Versión completa auditable
        ↓
PCD-3
Revisión y aceptación explícita
        ↓
PCD-4
Congelación provisional
        ↓
PCD-5
Registro en bitácora
        ↓
CONSOLIDADO PROVISIONALMENTE
```

El protocolo regula cómo se estabilizan, revisan, reabren y modifican los documentos.

No determina qué debe afirmar la teoría.
