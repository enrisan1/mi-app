# 11 Glosario

# Glosario

## Propósito

Este documento registra y estabiliza el vocabulario utilizado transversalmente por la teoría, la metateoría, las reconstrucciones, las validaciones y los documentos de realización.

Su función no consiste en definir una ontología del dominio.

Tampoco pretende convertir cada término utilizado en:

- concepto fundamental;
- tipo universal;
- relación universal;
- operación;
- axioma;
- componente arquitectónico.

La regla central es:

```text
término definido
⇏
categoría conceptual vigente
```

Un término puede aparecer en el glosario porque sea:

- vigente;
- histórico;
- eliminado;
- metalingüístico;
- metodológico;
- especializado;
- realizativo;
- documental;
- formal;
- contextual;
- evaluativo;
- o perteneciente a una frontera entre niveles.

Por tanto, cada entrada deberá distinguir entre:

```text
qué significa el término
```

y:

```text
qué estatuto posee actualmente
```

---

# Estado documental

`11-glosario.md` se construye por primera vez.

La primera versión completa fue sometida a auditoría específica de:

- no ontologización;
- reificación encubierta;
- consistencia de estatutos;
- cobertura terminológica;
- polisemia;
- compatibilidad con preguntas abiertas;
- invasión de otros niveles documentales.

La auditoría confirmó la estructura general del documento y detectó seis correcciones necesarias.

La presente segunda versión incorpora íntegramente esas correcciones.

---

# Justificación documental

La evolución de la teoría ha producido vocabulario con estatutos muy diferentes.

Conviven términos:

```text
vigentes
históricos
reducidos
eliminados como universales
metalingüísticos
metodológicos
locales
realizativos
documentales
formales
contextuales
```

Sin un glosario explícito existe un riesgo importante:

```text
aparición reiterada de X
        ↓
X parece importante
        ↓
X vuelve a interpretarse
como categoría fundamental
```

Ese razonamiento es inválido.

Por tanto:

```text
frecuencia terminológica
⇏
autoridad conceptual
```

El glosario debe impedir esa deriva.

---

# Qué no hace este documento

`11-glosario.md` no:

1. introduce nuevas primitivas;
2. amplía `Σ_min`;
3. amplía `Ax_min`;
4. reabre resultados eliminados;
5. convierte metavariables en objetos del dominio;
6. transforma términos históricos en términos vigentes;
7. decide por sí solo disputas conceptuales;
8. sustituye las definiciones contextuales de los documentos de origen;
9. resuelve preguntas que `10-preguntas-abiertas.md` mantiene explícitamente abiertas.

---

# Sistema de estatutos terminológicos

Cada término puede poseer un estatuto principal y, cuando resulte necesario, uno o varios calificadores de nivel, alcance o función.

La combinación de estatutos no introduce categorías ontológicas nuevas.

---

## Estatutos principales

### `VIGENTE`

El término se utiliza actualmente para expresar un resultado, distinción o herramienta todavía necesaria.

`VIGENTE` no significa automáticamente:

```text
universal
```

ni:

```text
fundamental
```

---

### `HISTÓRICO`

El término pertenece a una fase anterior y sigue apareciendo porque la historia de la investigación debe poder reconstruirse.

Su presencia no autoriza su reutilización como fundamento vigente.

---

### `ELIMINADO-COMO-UNIVERSAL`

El contenido local o diferencial asociado puede sobrevivir, pero el término deja de designar una categoría universal necesaria.

---

### `METALINGÜÍSTICO`

El término sirve para hablar acerca de:

- resultados;
- reglas;
- criterios;
- alcances;
- reconstrucciones;
- representaciones.

No constituye por ello una categoría del dominio.

---

### `METODOLÓGICO`

El término pertenece al proceso de investigación, prueba, auditoría o consolidación.

---

### `DOCUMENTAL`

El término regula documentos, versiones, estados o procedimientos del PCD.

---

### `ESPECIALIZADO`

El término puede aparecer legítimamente dentro de una especialización concreta sin pertenecer al núcleo universal.

---

### `REALIZATIVO`

El término pertenece a decisiones o mecanismos técnicos de realización.

---

### `EXTERNO`

El término designa una actividad o fenómeno que se mantiene fuera de la constitución interna de la plataforma o teoría cuando así se ha consolidado.

---

# Calificadores de estatuto

Los estatutos principales pueden combinarse con los siguientes calificadores.

## `FORMAL`

El término pertenece al lenguaje o aparato formal utilizado para representar una teoría o especialización.

## `LOCAL`

El término sólo queda justificado dentro de un alcance restringido.

## `CONTEXTUAL`

El significado o validez del término depende de condiciones o propósito explícitos.

## `EVALUATIVO`

El término se utiliza para valorar adecuación, suficiencia, pérdida, cobertura u otras propiedades de una formulación.

## `RESULTADO-METATEÓRICO`

El término designa un resultado consolidado acerca de la estructura de la teoría o de su investigación.

## `FRONTERA`

El término se utiliza principalmente para mantener una distinción entre niveles sin convertirse en categoría positiva universal.

---

# Regla sobre los calificadores

Los calificadores:

```text
FORMAL
LOCAL
CONTEXTUAL
EVALUATIVO
RESULTADO-METATEÓRICO
FRONTERA
```

no constituyen por sí mismos nuevos estatutos ontológicos.

Sirven únicamente para precisar el nivel o alcance del uso terminológico.

---

# Regla de lectura del glosario

Una entrada:

```text
X
```

deberá leerse siempre junto con:

```text
estatuto(X)
```

Por tanto:

```text
X está definido
```

no permite inferir:

```text
X existe universalmente
```

---

# A

## `Adeq`

### Definición

Notación metalingüística utilizada para expresar que una representación, especialización o realización resulta suficientemente adecuada respecto de un conjunto explícito de:

- cuestiones;
- alcance;
- compromisos;
- criterios.

Ejemplos de forma:

```text
Adeq(E;Q,A,C)
```

o:

```text
Adeq(R;E,Q,A)
```

### Estatuto

`VIGENTE — METALINGÜÍSTICO — EVALUATIVO`

### Advertencia

`Adeq` no constituye una relación conceptual universal.

No debe convertirse en:

```text
Adecuado(x,y)
```

como primitiva del dominio.

---

## `Aplicabilidad`

### Definición

Situación en la que se satisfacen las precondiciones específicas necesarias para utilizar una regla concreta en un caso concreto.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — LOCAL`

### Resultado histórico asociado

La antigua categoría:

```text
Applicable
```

fue reducida.

Actualmente:

```text
Applicable(R,c)
```

se despliega mediante las condiciones propias de `R`.

### Advertencia

```text
regla válida
≠
regla aplicable al caso
```

pero esa diferencia no requiere una relación universal `Applicable`.

---

## `Arquitectura`

### Definición

Organización concreta de responsabilidades, componentes y dependencias en una realización o sistema.

### Estatuto

`VIGENTE — REALIZATIVO`

### Advertencia

No debe inferirse:

```text
arquitectura técnica
=
arquitectura conceptual universal
```

ni debe recuperarse automáticamente el antiguo esquema arquitectónico de planos.

---

## `Auditoría`

### Definición

Procedimiento crítico orientado a buscar:

- pérdidas;
- incoherencias;
- reintroducciones;
- circularidades;
- dependencias indebidas;
- falsadores.

### Estatuto

`VIGENTE — METODOLÓGICO`

### Advertencia

Una auditoría no presupone resultado favorable.

---

## `Ax_E`

### Definición

Conjunto de axiomas o restricciones positivas justificadas localmente dentro de una especialización `E`.

### Estatuto

`VIGENTE — ESPECIALIZADO — FORMAL — METALINGÜÍSTICO`

### Relación con `Ax_min`

```text
Ax_E ≠ ∅
```

es compatible con:

```text
Ax_min = ∅
```

### Advertencia

Axioma local no implica axioma universal.

---

## `Ax_min`

### Definición

Conjunto mínimo de axiomas sustantivos universales cuya necesidad hubiera quedado demostrada para el dominio declarado.

### Estatuto

`VIGENTE — RESULTADO-METATEÓRICO`

### Estado consolidado

```text
Ax_min = ∅
```

### Advertencia

No significa:

```text
ninguna especialización
puede contener axiomas
```

---

# C

## `CAN-F1`

### Definición histórica

Capacidad funcional candidata asociada a individuación, discriminación y referencia.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Criterios locales como:

```text
mismo ejemplar
misma moneda
misma observación
```

pueden existir dentro de especializaciones concretas.

### Advertencia

No debe reintroducirse `CAN-F1` como capacidad universal simplemente porque múltiples casos necesiten discriminación.

---

## `CAN-F2`

### Definición histórica

Capacidad funcional candidata asociada a organización o realización relacional.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Relaciones locales como:

```text
AutorDe
EdiciónDe
Observa
PréstamoDe
```

pueden justificarse dentro de especializaciones.

### Advertencia

```text
relaciones locales
⇏
CAN-F2 universal
```

---

## `CAN-F3`

### Definición histórica

Capacidad funcional candidata asociada a evolución, transición, dirección o cambio.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Relaciones locales como:

```text
AntesDe
SiguienteVersión
Transición
TurnoAnterior
```

### Advertencia

```text
orden local
⇏
forma evolutiva universal
```

---

## `Caso`

### Definición

Situación concreta utilizada para someter resultados consolidados a prueba.

### Estatuto

`VIGENTE — METODOLÓGICO`

### Documento principal

`09-validacion-por-casos.md`

### Estados asociados

```text
PASS
FAIL
OPEN
```

---

## `CE`

### Definición histórica

Categoría o forma utilizada para representar una composición estructural compleja derivada de componentes relacionados.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Especializaciones concretas pueden definir:

- colecciones;
- composiciones;
- agrupaciones;
- unidades estructuradas;

mediante criterios locales.

### Advertencia

La posibilidad de formar localmente una colección o estructura compleja no restaura `CE` como categoría universal.

---

## `Cobertura`

### Definición

Situación en la que un contraste relevante se encuentra suficientemente:

```text
identificado
+
localizado
+
conservado
+
sometido a falsación
```

### Estatuto

`VIGENTE — METALINGÜÍSTICO — EVALUATIVO`

### Advertencia

```text
cobertura
≠
completitud absoluta
```

---

## `Completitud`

### Definición

Pretensión de que no falta ningún contenido relevante posible dentro de un espacio determinado.

### Estatuto

`METALINGÜÍSTICO — EVALUATIVO`

### Estado actual

No se consolida como propiedad global demostrada de la teoría.

### Advertencia

El proyecto sustituyó la antigua pretensión de:

```text
auditoría de completitud
```

por:

```text
auditoría global de cobertura
```

---

## `Componer-E`

### Definición histórica

Operación utilizada para formar una configuración estructurada a partir de componentes o relaciones estructurales.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Criterios locales de:

- colección;
- organización;
- composición;
- delimitación.

---

## `Componer-V`

### Definición histórica

Operación utilizada para formar una trayectoria o composición evolutiva.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Criterios locales de:

- secuencia;
- trayectoria;
- historia;
- transición.

---

## `Configuración`

### Definición

Término descriptivo utilizado en determinados documentos para referirse a contenido, disposición o registro considerado respecto de alguna cuestión concreta.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — CONTEXTUAL`

### Advertencia

`Configuración` no designa actualmente una sorte universal de la teoría.

Su utilización no implica que todo aquello perteneciente al dominio deba poder reducirse a una categoría única:

```text
Configuración
```

Tampoco restaura indirectamente `P-001`.

---

## `Configuración interpretable`

### Definición

Expresión utilizada históricamente y en determinados contextos para considerar una configuración respecto de una posible actividad interpretativa de un agente.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — FRONTERA`

### Función

Mantener la diferencia entre:

```text
contenido disponible
```

y:

```text
actividad interpretativa del agente
```

### Advertencia

«Interpretable» no se consolida como propiedad formal, ontológica ni universal de una clase fundamental de configuraciones.

La expresión no autoriza a introducir:

```text
Interpretable(x)
```

como primitiva de la teoría.

---

## `Conocimiento`

### Definición

Término utilizado por la teoría para referirse a aquello atribuido al plano cognoscitivo del agente como resultado de la interpretación, y no a una configuración gestionada directamente por la plataforma.

### Estatuto

`VIGENTE — EXTERNO — FRONTERA`

### Distinción consolidada

```text
configuración
≠
actividad interpretativa
≠
conocimiento del agente
```

### Advertencia

La definición no pretende resolver ontológicamente qué es el conocimiento.

Su función es preservar la frontera conceptual relevante para el alcance de la plataforma.

---

## `Conservación`

### Definición

Mantenimiento de una diferencia o contenido requerido a través de una transformación, representación o reconstrucción.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — CONTEXTUAL`

### Advertencia

No existe una forma universal única de conservación.

Siempre debe especificarse:

```text
qué se conserva
+
respecto de qué propósito
```

---

## `Contraste`

### Definición

Diferencia cuya preservación puede resultar relevante para responder una cuestión o mantener una discriminación.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — METODOLÓGICO`

### Importancia

Es una de las nociones transversales centrales después de la reducción del antiguo núcleo positivo.

### Advertencia

`Contraste` no constituye una nueva primitiva del dominio.

---

## `Correspondencia`

### Definición

Asociación concreta entre elementos, estados, representaciones, segmentos o resultados cuando una especialización determinada la justifica.

### Estatuto

`VIGENTE — LOCAL — ESPECIALIZADO`

### Categoría histórica

```text
Corr
```

### Estatuto de `Corr`

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

---

## `Criterio`

### Definición

Condición, regla o conjunto de condiciones utilizado para decidir una cuestión dentro de un contexto.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — CONTEXTUAL`

### Advertencia

No constituye una categoría uniforme universal.

La antigua metavariable:

```text
K
```

agrupó históricamente reglas heterogéneas.

No debe reificarse.

---

# D

## `Derivar`

### Definición histórica

Operación general candidata para producir un resultado desde fundamentos y un criterio.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Regímenes locales pueden expresar:

```text
fundamentos
+
regla
+
condiciones
→
resultado
```

sin introducir una operación universal `Derivar`.

---

## `Derivar-C`

### Definición histórica

Operación destinada a producir consecuencias o afirmaciones derivadas.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

---

## `Discriminación`

### Definición

Posibilidad de distinguir situaciones relevantes respecto de una cuestión concreta.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — CONTEXTUAL`

### Advertencia

No se considera actualmente una capacidad universal positiva del dominio.

---

## `Dominio`

### Definición

Alcance respecto del cual se formulan las afirmaciones universales de la teoría.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — RESULTADO-METATEÓRICO`

### Restricción relevante

`RM-04` exige que toda afirmación universal declare suficientemente su dominio de cuantificación.

### Pregunta abierta

```text
PA-10 — Alcance efectivo del dominio
```

### Advertencia

La delimitación exacta del dominio no debe considerarse completamente resuelta por esta entrada.

El glosario no proporciona por sí mismo un criterio definitivo de pertenencia.

No debe utilizarse la definición de `Dominio` para cerrar anticipadamente `PA-10`.

---

# E

## `Elemento`

### Definición

Término genérico utilizado para referirse a aquello sobre lo que se formula una afirmación en un contexto.

### Estatuto

`METALINGÜÍSTICO`

### Advertencia

No equivale a una sorte universal.

No restaura `P-001`.

---

## `Entidad`

### Definición

Término posible dentro de especializaciones o realizaciones concretas.

### Estatuto

`ESPECIALIZADO / REALIZATIVO`

### Advertencia

No existe actualmente una categoría universal `Entidad` demostrada.

Una entidad de base de datos tampoco equivale automáticamente a entidad conceptual.

---

## `Equivalencia reconstructiva`

### Definición provisional

Expresión evaluativa mediante la que se considera que dos formulaciones o reconstrucciones conservan las mismas discriminaciones relevantes respecto de un alcance.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — EVALUATIVO — ABIERTO`

### Pregunta asociada

```text
PA-09 — Criterio independiente de equivalencia reconstructiva
```

### Advertencia

No existe actualmente una:

```text
EquivalenciaUniversal
```

consolidada.

La definición es deliberadamente provisional para no resolver circularmente `PA-09`.

---

## `ES_universales_positivas`

### Definición

Conjunto de exigencias estructurales universales positivas cuya necesidad hubiera quedado demostrada para el dominio declarado.

### Estatuto

`VIGENTE — RESULTADO-METATEÓRICO`

### Estado consolidado

```text
ES_universales_positivas = ∅
```

### Advertencia

No significa que una especialización concreta no pueda imponer exigencias estructurales propias.

Significa que no se ha demostrado una exigencia estructural positiva necesaria para todo el dominio declarado.

---

## `Especialización`

### Definición

Construcción conceptual de alcance restringido que puede introducir compromisos adicionales justificados respecto de ese alcance.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — RESULTADO-METATEÓRICO`

### Resultado asociado

```text
RE_universal_positivo = ∅
```

### Advertencia

`Especialización` no constituye una categoría ontológica universal del dominio.

---

## `Evidencia`

### Definición

Material utilizado para satisfacer un criterio de prueba respecto de una obligación o afirmación concreta.

### Estatuto

`VIGENTE — METODOLÓGICO — LOCAL`

### Categoría histórica

```text
Evidence
```

### Estatuto de `Evidence`

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Reconstrucción

```text
obligación
+
criterio
+
material
+
evaluación
```

---

## `Externalización`

### Definición

Reubicación justificada de un contenido desde un nivel donde inicialmente se consideró hacia otro nivel más apropiado.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — METODOLÓGICO`

### Restricción

Según `RM-03`:

```text
declarar “otro nivel”
≠
demostrar “otro nivel”
```

---

# F

## `F_irreducibles_universales`

### Definición

Conjunto de fenómenos cuya irreducibilidad universal hubiera quedado demostrada.

### Estatuto

`VIGENTE — RESULTADO-METATEÓRICO`

### Estado consolidado

```text
F_irreducibles_universales = ∅
```

### Advertencia

No significa:

```text
fenómenos observados = ∅
```

El corpus fenomenológico sigue existiendo.

---

## `FAIL`

### Definición

Resultado de una prueba en la que se detecta el falsador, pérdida, contradicción o insuficiencia que la prueba estaba diseñada para buscar.

### Estatuto

`VIGENTE — METODOLÓGICO`

### Advertencia

Un `FAIL` debe identificar suficientemente:

- qué prueba ha fallado;
- qué pérdida o falsador aparece;
- qué resultado resulta afectado;
- qué documento puede necesitar reapertura.

Un `FAIL` local no implica automáticamente falsación de toda la teoría.

---

## `Falsador`

### Definición

Evidencia capaz de demostrar que un resultado consolidado debe reabrirse.

### Estatuto

`VIGENTE — METODOLÓGICO`

### Advertencia

```text
pregunta abierta
≠
falsador
```

---

## `Firma`

### Definición

Conjunto formal de sortes, relaciones u otros símbolos utilizados por una formulación.

### Estatuto

`VIGENTE — FORMAL`

### Distinción

```text
Σ_min
```

designa firma universal mínima.

```text
Σ_E
```

designa firma local de una especialización.

---

## `Formar-U`

### Definición histórica

Operación candidata para producir una unidad derivada desde fundamentos bajo un criterio de unidad.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

---

## `Fundamento`

### Definición

Información, premisa, resultado previo o material del que depende una conclusión o construcción concreta.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — LOCAL`

### Advertencia

No se consolida una sorte universal `Fundamento`.

---

# H

## `Historia`

### Definición

Secuencia, conjunto ordenado o registro de cambios cuando una especialización concreta lo requiere.

### Estatuto

`VIGENTE — LOCAL — ESPECIALIZADO`

### Advertencia

No restaura:

```text
V
CAN-F3
MA-002
```

---

# I

## `Identidad`

### Definición

Relación o criterio de «mismo» respecto de una cuestión concreta.

### Estatuto

`VIGENTE — LOCAL — METALINGÜÍSTICO`

### Advertencia

No existe actualmente una función universal de identidad consolidada.

```text
mismo ejemplar
```

y:

```text
misma obra
```

pueden utilizar criterios diferentes.

---

## `Identificador técnico`

### Definición

Mecanismo realizativo utilizado para distinguir, localizar o referir registros dentro de un sistema.

### Estatuto

`VIGENTE — REALIZATIVO`

### Ejemplos

```text
UUID
clave primaria
URI
hash
```

### Regla consolidada

```text
identificador técnico
⇏
identidad conceptual
```

---

## `Interpretación`

### Definición

Actividad atribuida a un agente mediante la cual una configuración es considerada o comprendida significativamente dentro de un contexto.

### Estatuto

`VIGENTE — EXTERNO — FRONTERA`

### Advertencia

La definición no pretende establecer una teoría general de la interpretación.

Su función es mantener la frontera entre:

```text
contenido registrado
```

y:

```text
actividad interpretativa del agente
```

Una interpretación expresada puede posteriormente registrarse como contenido.

Eso no convierte el acto interpretativo en operación interna universal de la plataforma.

---

## `Interpretación expresada`

### Definición

Contenido registrado que expresa el resultado de una actividad interpretativa previa.

### Estatuto

`VIGENTE — LOCAL — FRONTERA`

### Distinción

```text
interpretación expresada
≠
actividad interpretativa
```

---

# J

## `Justificación`

### Definición

Conjunto contextual de fundamentos, reglas, condiciones y razones que sostienen una conclusión.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — EVALUATIVO`

### Advertencia

No se consolida una relación universal:

```text
Justificación
```

como primitiva del dominio.

---

# K

## `K`

### Definición histórica

Metavariable utilizada para representar criterios, reglas, definiciones o esquemas heterogéneos.

### Estatuto

`HISTÓRICO — METALINGÜÍSTICO`

### Resultado consolidado

No se acepta `K` como categoría uniforme sustantiva.

### Advertencia

No debe convertirse en un contenedor universal capaz de absorber arbitrariamente todo contenido eliminado.

---

# L

## `LEC`

### Definición

`Línea externa de comprobación`.

### Estatuto

`VIGENTE — DOCUMENTAL — METODOLÓGICO`

### Uso actual

```text
LEC-01
```

designa la posible auditoría externa independiente de la metateoría.

### Advertencia

Una `LEC` no es una pregunta abierta `PA`.

---

## `Local`

### Definición

Válido o justificado dentro de un alcance restringido.

### Estatuto

`VIGENTE — METALINGÜÍSTICO`

### Regla

```text
local
⇏
universal
```

### Advertencia

Tampoco significa:

```text
local
=
arbitrario
```

---

# M

## `MA-001`

### Definición histórica

Forma axiomática o relacional asociada a la antigua articulación estructural.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

---

## `MA-002`

### Definición histórica

Forma axiomática o relacional asociada a la antigua articulación evolutiva.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

---

## `Metateoría`

### Definición

Nivel desde el que se estudian:

- criterios de investigación;
- reducción;
- justificación;
- universalidad;
- falsabilidad;
- niveles;
- condiciones de reapertura.

### Estatuto

`VIGENTE — METALINGÜÍSTICO`

### Documento principal

`15-auditoria-de-la-metateoria.md`

---

## `Metavariable`

### Definición

Símbolo utilizado para representar genéricamente objetos o expresiones durante una argumentación.

### Estatuto

`VIGENTE — FORMAL — METALINGÜÍSTICO`

### Advertencia

Una metavariable no constituye por sí misma una categoría del dominio.

---

## `MR_universal_positivo`

### Definición

Conjunto de condiciones o responsabilidades realizativas positivas universales cuya necesidad hubiera quedado demostrada.

### Estatuto

`VIGENTE — RESULTADO-METATEÓRICO`

### Estado consolidado

```text
MR_universal_positivo = ∅
```

---

# O

## `O`

### Definición histórica

Sorte o categoría candidata utilizada durante la reconstrucción axiomática.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Advertencia

No debe reintroducirse como suerte universal sin investigación independiente.

---

## `OPEN`

### Definición

Estado utilizado cuando la evidencia disponible no permite concluir legítimamente `PASS` ni `FAIL`.

### Estatuto

`VIGENTE — METODOLÓGICO`

### Restricción metateórica

`RM-08` exige preservar una tercera salida equivalente a:

```text
PASS
FAIL
OPEN
```

---

# P

## `P`

### Definición histórica

Categoría utilizada en antiguas formulaciones del dominio para participantes o unidades básicas.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

---

## `P-001`

### Definición histórica

Sorte fundamental candidata para elementos del dominio capaces de soportar afirmaciones.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Tipos locales pueden existir en especializaciones.

### Advertencia

```text
TipoLibro
TipoMoneda
TipoSensor
```

no restauran `P-001`.

---

## `PA`

### Definición

Prefijo utilizado para identificar preguntas abiertas consolidadas en `10-preguntas-abiertas.md`.

### Estatuto

`VIGENTE — DOCUMENTAL — METODOLÓGICO`

### Conjunto vigente

```text
PA-01…PA-15
```

---

## `PA-DROPPED`

### Definición

Estado de una pregunta que deja de pertenecer legítimamente al conjunto abierto.

### Estatuto

`VIGENTE — DOCUMENTAL`

---

## `PA-FALSIFIER`

### Definición

Estado alcanzado cuando una pregunta produce evidencia suficiente para activar reapertura.

### Estatuto

`VIGENTE — DOCUMENTAL — METODOLÓGICO`

---

## `PA-OPEN`

### Definición

Estado de una pregunta genuinamente abierta sin evidencia suficiente para resolverla.

### Estatuto

`VIGENTE — DOCUMENTAL`

### Regla

```text
PA-OPEN
⇏
TD-2
```

---

## `PA-RESOLVED`

### Definición

Estado de una pregunta que ha recibido respuesta suficientemente justificada.

### Estatuto

`VIGENTE — DOCUMENTAL`

---

## `PASS`

### Definición

Resultado de una prueba que no detecta el falsador buscado dentro del alcance declarado.

### Estatuto

`VIGENTE — METODOLÓGICO`

### Advertencia

```text
PASS
≠
verdad absoluta
```

---

## `PCD`

### Definición

`Protocolo de Consolidación Documental`.

### Estatuto

`VIGENTE — DOCUMENTAL`

### Documento

`99-protocolo-de-consolidacion-documental.md`

### Función

Regula:

```text
auditoría
→
versión completa
→
revisión
→
congelación provisional
→
bitácora
```

---

## `PF_min`

### Definición

Perfil funcional universal mínimo cuya necesidad hubiera quedado demostrada.

### Estatuto

`VIGENTE — RESULTADO-METATEÓRICO`

### Estado consolidado

```text
PF_min = ∅
```

---

## `PMG-1`

### Definición histórica

Principio según el cual ningún resultado debería adquirir más contenido o autoridad que el justificado por sus fundamentos y reglas.

### Estatuto

`HISTÓRICO — REDUCIDO-COMO-PRINCIPIO-SUSTANTIVO`

### Contenido superviviente

Control contextual de:

- alcance;
- condiciones;
- fundamentos;
- autoridad.

---

## `PMG-2`

### Definición histórica

Principio de reconstructibilidad verificable de las justificaciones.

### Estatuto

`HISTÓRICO — REUBICADO-METODOLÓGICAMENTE`

### Contenido superviviente

- bitácora;
- auditoría;
- trazabilidad;
- PCD;
- explicitación de fundamentos.

---

## `Procedencia`

### Definición

Explicación contextual de cómo se obtuvo, produjo o derivó un resultado.

### Estatuto

`VIGENTE — LOCAL — METALINGÜÍSTICO`

### Categoría histórica

```text
Prov
```

### Estatuto de `Prov`

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Reconstrucción

```text
fundamentos
+
regla
+
condiciones
+
transformaciones
+
resultados intermedios
```

---

# R

## `R`

### Definición histórica

Categoría utilizada para unidades o resultados reconstruidos.

### Estatuto histórico

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Uso metalingüístico actual

El símbolo `R` puede utilizarse también como metavariable para:

```text
resultado
```

cuando el contexto lo indique expresamente.

### Advertencia

```text
R histórico
≠
R metalingüístico
```

La coincidencia gráfica no implica identidad conceptual.

---

## `RA-I`

### Definición histórica

Autoridad o responsabilidad arquitectónica asociada a individuación.

### Estatuto

`HISTÓRICO — ELIMINADO`

---

## `RA-E`

### Definición histórica

Autoridad o responsabilidad arquitectónica asociada a articulación estructural.

### Estatuto

`HISTÓRICO — ELIMINADO`

---

## `RA-V`

### Definición histórica

Autoridad o responsabilidad arquitectónica asociada a articulación evolutiva.

### Estatuto

`HISTÓRICO — ELIMINADO`

---

## `RC-PASS`

### Definición

Resultado de una reconstrucción conservativa en la que el contenido legítimo permanece sin restaurar la fundamentalidad de la categoría histórica.

### Estatuto

`VIGENTE — METODOLÓGICO`

### Documento principal

`12-reconstrucciones-conservativas.md`

---

## `Realización`

### Definición

Sistema o mecanismo concreto que representa o ejecuta determinados compromisos conceptuales de una especialización.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — REALIZATIVO`

### Advertencia

No constituye una primitiva conceptual universal.

Una realización puede ser parcial respecto de una especialización si declara explícitamente el alcance que pretende realizar.

---

## `Reconstrucción conservativa`

### Definición

Demostración de que un contenido diferencial legítimo puede preservarse aunque se elimine la categoría histórica mediante la que se expresaba.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — METODOLÓGICO`

### Regla

```text
eliminación de categoría
≠
eliminación de contraste
```

---

## `Reconstruir`

### Definición histórica

Operación universal candidata destinada a formar unidades desde fundamentos heterogéneos.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

---

## `RE_universal_positivo`

### Definición

Conjunto de condiciones positivas universales específicas de especialización cuya necesidad hubiera quedado demostrada.

### Estatuto

`VIGENTE — RESULTADO-METATEÓRICO`

### Estado consolidado

```text
RE_universal_positivo = ∅
```

---

## `Relación`

### Definición

Asociación entre términos dentro de una representación o especialización concreta.

### Estatuto

`VIGENTE — LOCAL — FORMAL / ESPECIALIZADO`

### Advertencia

La recurrencia de relaciones no demuestra una relación universal única ni restaura `CAN-F2`.

---

## `Representación`

### Definición

Forma concreta mediante la que un contenido o distinción se expresa, registra o realiza.

### Estatuto

`VIGENTE — CONTEXTUAL — REALIZATIVO / METALINGÜÍSTICO`

### Distinción

```text
representación
≠
contenido
```

### Pregunta abierta relacionada

```text
PA-08 — Equivalencia de representaciones con distinta capacidad discriminativa
```

---

## `Resultado`

### Definición

Término genérico para una conclusión, salida, producto o contenido obtenido en una investigación o régimen concreto.

### Estatuto

`METALINGÜÍSTICO`

### Advertencia

No constituye una sorte fundamental.

---

## `RM`

### Definición

`Restricción metateórica`.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — METODOLÓGICO`

### Conjunto vigente

```text
RM-01…RM-08
```

---

## `RM-01 — Carga bilateral`

```text
no demostrar necesidad
≠
demostrar eliminabilidad
```

### Estatuto

`VIGENTE — METODOLÓGICO`

---

## `RM-02 — Reconstrucción no nominal`

```text
sustituir X por X'
funcionalmente equivalente
≠
reducir X
```

### Estatuto

`VIGENTE — METODOLÓGICO`

---

## `RM-03 — Externalización justificada`

```text
declarar “otro nivel”
≠
demostrar “otro nivel”
```

### Estatuto

`VIGENTE — METODOLÓGICO`

---

## `RM-04 — Dominio explícito`

Toda afirmación universal debe declarar suficientemente su dominio de cuantificación.

### Estatuto

`VIGENTE — METODOLÓGICO`

---

## `RM-05 — Dependencia probatoria`

Pruebas dependientes no deben contabilizarse como evidencias independientes.

### Estatuto

`VIGENTE — METODOLÓGICO`

---

## `RM-06 — Simetría de reapertura`

Los resultados negativos pueden reabrirse con la misma legitimidad que los positivos.

### Estatuto

`VIGENTE — METODOLÓGICO`

---

## `RM-07 — Conservación diferencial`

Una categoría sólo puede eliminarse si el contenido diferencial relevante permanece sin equivalente encubierto injustificado.

### Estatuto

`VIGENTE — METODOLÓGICO`

---

## `RM-08 — Tres salidas`

Toda auditoría sustantiva debe admitir:

```text
PASS
FAIL
OPEN
```

o estados funcionalmente equivalentes.

### Estatuto

`VIGENTE — METODOLÓGICO`

---

## `RR-1…RR-5`

### Definición histórica

Responsabilidades realizativas pertenecientes al antiguo Plano realizativo.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-INVENTARIO-UNIVERSAL`

### Advertencia

Pueden existir responsabilidades técnicas concretas en implementaciones futuras sin restaurar el antiguo conjunto `RR-*`.

---

# S

## `S`

### Definición histórica

Forma utilizada para representar organización estructural.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Relaciones y organizaciones locales.

---

## `Σ_E`

### Definición

Firma formal propia de una especialización concreta `E`.

### Estatuto

`VIGENTE — ESPECIALIZADO — FORMAL`

### Regla

```text
Σ_E ≠ ∅
```

es compatible con:

```text
Σ_min = ∅
```

---

## `Σ_min`

### Definición

Firma conceptual universal mínima cuya necesidad hubiera quedado demostrada.

### Estatuto

`VIGENTE — RESULTADO-METATEÓRICO`

### Estado consolidado

```text
Σ_min = ∅
```

---

## `Sorte`

### Definición

Categoría formal de elementos dentro de una firma.

### Estatuto

`VIGENTE — FORMAL`

### Advertencia

La existencia de sortes locales no implica sortes universales.

---

# T

## `TD-1`

### Definición

Construcción inicial de un documento previamente vacío.

### Estatuto

`VIGENTE — DOCUMENTAL`

---

## `TD-2`

### Definición

Reapertura de un documento previamente consolidado ante evidencia suficiente.

### Estatuto

`VIGENTE — DOCUMENTAL`

### Advertencia

```text
PA-OPEN
⇏
TD-2
```

---

## `Teoría`

### Definición

Conjunto organizado de resultados, contrastes, fronteras, reducciones, criterios y condiciones de falsación actualmente consolidados.

### Estatuto

`VIGENTE — METALINGÜÍSTICO`

### Advertencia

El estado:

```text
F = ES = PF = Σ = Ax = RE = MR = ∅
```

no significa:

```text
teoría = ∅
```

---

## `Trace`

### Definición histórica

Capacidad o relación uniforme de trazabilidad.

### Estatuto

`HISTÓRICO — REDUCIDO`

### Contenido superviviente

Recorrido de dependencias registradas cuando corresponda.

---

## `Trazabilidad`

### Definición

Posibilidad de reconstruir retrospectivamente dependencias, decisiones o fundamentos registrados.

### Estatuto

`VIGENTE — METODOLÓGICO / REALIZATIVO`

### Advertencia

No constituye necesariamente una capacidad conceptual universal.

---

## `TV`

### Definición histórica

Forma o unidad compleja asociada a una trayectoria evolutiva.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

---

# U

## `U`

### Definición histórica

Categoría de unidad derivada.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Un resultado puede ser tratado como unidad dentro de una especialización mediante criterios locales.

---

## `Universal`

### Definición

Predicado aplicable a una afirmación cuya autoridad se extiende al dominio explícitamente declarado de la teoría.

### Estatuto

`VIGENTE — METALINGÜÍSTICO`

### Advertencia

```text
universal
≠
verdadero en todo universo concebible
```

Debe especificarse el dominio pertinente.

---

## `Universalización`

### Definición

Promoción de un resultado local o especializado a una afirmación aplicable al dominio universal declarado.

### Estatuto

`VIGENTE — METALINGÜÍSTICO — METODOLÓGICO`

### Regla

```text
recurrencia local
⇏
universalidad automática
```

### Preguntas asociadas

```text
PA-03
PA-15
```

---

# V

## `V`

### Definición histórica

Forma binaria orientada utilizada para representar evolución, transición o trayectoria.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Orden, secuencia y transición pueden existir localmente.

---

## `Validación`

### Definición

Prueba mediante la que se intenta detectar falsadores en casos concretos.

### Estatuto

`VIGENTE — METODOLÓGICO`

### Documento

`09-validacion-por-casos.md`

### Advertencia

Validación no equivale a confirmación definitiva.

---

## `Vigencia`

### Definición

Estatuto documental que indica que un término o resultado se utiliza actualmente.

### Estatuto

`VIGENTE — DOCUMENTAL — METALINGÜÍSTICO`

### Advertencia

```text
vigente
⇏
universal
```

---

# Φ

## `Φ`

### Definición histórica

Categoría utilizada para consecuencias, afirmaciones o resultados derivados.

### Estatuto

`HISTÓRICO — ELIMINADO-COMO-UNIVERSAL`

### Contenido superviviente

Resultados locales derivados siguen siendo posibles.

---

# Glosario de resultados vacíos vigentes

Para evitar ambigüedad, se consolidan conjuntamente los principales resultados negativos vigentes.

---

## `F_irreducibles_universales = ∅`

Significa:

> No se ha demostrado una familia de fenómenos universalmente irreducibles.

No significa:

```text
corpus fenomenológico = ∅
```

---

## `ES_universales_positivas = ∅`

Significa:

> No se ha demostrado una exigencia estructural positiva necesaria para todo el dominio declarado.

No impide exigencias estructurales locales.

---

## `PF_min = ∅`

Significa:

> No se ha demostrado un perfil funcional universal positivo mínimo.

No impide funciones locales.

---

## `Σ_min = ∅`

Significa:

> No se ha demostrado una firma conceptual universal positiva mínima.

No impide:

```text
Σ_E ≠ ∅
```

---

## `Ax_min = ∅`

Significa:

> No se ha demostrado un conjunto positivo de axiomas sustantivos universales.

No impide:

```text
Ax_E ≠ ∅
```

---

## `RE_universal_positivo = ∅`

Significa:

> No se ha demostrado un régimen positivo universal específico de especialización.

No impide especializaciones conceptualmente ricas.

---

## `MR_universal_positivo = ∅`

Significa:

> No se ha demostrado un marco positivo universal específico de realización.

No impide realizaciones técnicas ricas.

---

# Regla común sobre los resultados vacíos

Ninguno significa:

```text
nada existe
```

ni:

```text
no pueden existir
estructuras positivas locales
```

ni:

```text
la teoría carece de contenido
```

Todos expresan ausencia de:

```text
necesidad universal positiva demostrada
```

en el nivel correspondiente.

---

# Mapa de estatutos del vocabulario histórico principal

| Término       | Estatuto actual                                                            |
| ------------- | -------------------------------------------------------------------------- |
| `P`           | Histórico / eliminado como universal                                       |
| `S`           | Histórico / eliminado como universal                                       |
| `V`           | Histórico / eliminado como universal                                       |
| `P-001`       | Histórico / eliminado como sorte universal                                 |
| `O`           | Histórico / eliminado como universal                                       |
| `MA-001`      | Histórico / eliminado como universal                                       |
| `MA-002`      | Histórico / eliminado como universal                                       |
| `CAN-F1`      | Histórico / eliminado como capacidad universal                             |
| `CAN-F2`      | Histórico / eliminado como capacidad universal                             |
| `CAN-F3`      | Histórico / eliminado como capacidad universal                             |
| `CE`          | Histórico / eliminado como categoría universal                             |
| `TV`          | Histórico / eliminado como categoría universal                             |
| `U`           | Histórico / eliminado como categoría universal                             |
| `R`           | Histórico como categoría; vigente sólo como metavariable cuando se indique |
| `Φ`           | Histórico / eliminado como categoría universal                             |
| `Componer-E`  | Histórico / eliminado como operación universal                             |
| `Componer-V`  | Histórico / eliminado como operación universal                             |
| `Formar-U`    | Histórico / eliminado como operación universal                             |
| `Reconstruir` | Histórico / eliminado como operación universal                             |
| `Derivar-C`   | Histórico / eliminado como operación universal                             |
| `Derivar`     | Histórico / eliminado como operación universal                             |
| `Corr`        | Histórico / eliminado como relación universal                              |
| `Applicable`  | Histórico / reducido                                                       |
| `Prov`        | Histórico / eliminado como relación universal                              |
| `Trace`       | Histórico / reducido                                                       |
| `Evidence`    | Histórico / reducido                                                       |
| `PMG-1`       | Histórico / reducido como principio sustantivo                             |
| `PMG-2`       | Histórico / reubicado metodológicamente                                    |
| `RA-I`        | Histórico / eliminado                                                      |
| `RA-E`        | Histórico / eliminado                                                      |
| `RA-V`        | Histórico / eliminado                                                      |
| `RR-1…RR-5`   | Histórico / eliminado como inventario universal                            |

---

# Mapa de términos vigentes por nivel

## Metateoría

```text
contraste
dominio
alcance
especialización
universalidad
reconstrucción conservativa
cobertura
falsador
justificación
externalización
RM-01…RM-08
```

---

## Metodología

```text
auditoría
PASS
FAIL
OPEN
validación
trazabilidad
carga de prueba
revisión
reapertura
```

---

## Documentación

```text
PCD
TD-1
TD-2
PA-OPEN
PA-RESOLVED
PA-FALSIFIER
PA-DROPPED
LEC
```

---

## Especialización

Potencialmente:

```text
tipos locales
relaciones locales
axiomas locales
criterios locales
orden local
identidad local
```

sin catálogo universal fijo.

---

## Realización

Potencialmente:

```text
UUID
tabla
nodo
documento
archivo
índice
caché
timestamp
evento técnico
persistencia
serialización
migración
```

sin autoridad conceptual automática.

---

## Exterior

```text
actividad interpretativa
conocimiento del agente
```

cuando no se incorporen posteriormente como configuraciones o contenidos expresados.

---

# Reglas anti-reificación

## `GR-1`

```text
término recurrente
⇏
primitiva
```

---

## `GR-2`

```text
término definido
⇏
término universal
```

---

## `GR-3`

```text
término histórico
⇏
término vigente
```

---

## `GR-4`

```text
metavariable
⇏
categoría del dominio
```

---

## `GR-5`

```text
tipo local
⇏
sorte universal
```

---

## `GR-6`

```text
relación local
⇏
relación universal
```

---

## `GR-7`

```text
mecanismo técnico
⇏
compromiso conceptual
```

---

## `GR-8`

```text
regla metodológica
⇏
axioma del dominio
```

---

# Estatuto de `GR-1…GR-8`

Estas reglas sirven exclusivamente para interpretar correctamente el glosario.

No constituyen nuevas restricciones sustantivas del dominio.

Su función es documental y metalingüística.

---

# Regla de incorporación de términos

Un término nuevo deberá añadirse al glosario cuando cumpla al menos una de estas condiciones:

1. aparezca transversalmente en varios documentos;
2. posea un estatuto que pueda resultar ambiguo;
3. exista riesgo de reificación;
4. haya cambiado de estatuto durante la investigación;
5. resulte necesario para reconstruir contenido histórico;
6. pertenezca a una nueva especialización estabilizada;
7. constituya una abreviatura documental relevante.

No es necesario incorporar todo vocabulario ocasional.

---

# Regla de actualización de estatuto

Si un término cambia de estatuto deberá registrarse:

```text
estatuto anterior
↓
motivo de cambio
↓
estatuto nuevo
```

No deberá simplemente modificarse la definición como si el estado anterior nunca hubiera existido.

Esto preserva la trazabilidad conceptual.

---

# Regla de términos polisémicos

Cuando un mismo símbolo o palabra posea varios usos deberán distinguirse explícitamente.

Ejemplo:

```text
R histórico
=
categoría de unidad reconstruida
```

frente a:

```text
R metalingüístico
=
resultado genérico
```

La coincidencia nominal no implica identidad conceptual.

---

# Regla de prioridad documental

Cuando exista conflicto entre una definición resumida del glosario y el documento donde se produjo el resultado:

```text
documento de origen
>
glosario
```

El glosario resume y estabiliza terminología.

No sustituye la justificación original.

---

# Auditoría de no ontologización

Debe comprobarse si el propio glosario está reconstruyendo silenciosamente una ontología mediante su índice de términos.

La prueba es:

> ¿Eliminar una entrada del glosario elimina una categoría del dominio?

En general:

```text
no
```

El glosario registra uso lingüístico y estatuto.

No crea objetos.

Por tanto:

```text
inventario terminológico
≠
inventario ontológico
```

---

# Auditoría de términos transversales sospechosos

Se examinan especialmente:

```text
elemento
relación
resultado
criterio
contexto
alcance
justificación
representación
especialización
realización
configuración
```

Todos aparecen repetidamente.

Pero ninguno adquiere por esa recurrencia estatuto de primitiva sustantiva universal.

Resultado:

```text
ANTI-REIFICACIÓN — PASS
```

---

# Auditoría del vocabulario vacío

Debe evitarse que los símbolos:

```text
F
ES
PF
Σ
Ax
RE
MR
```

se interpreten como categorías positivas supervivientes.

En expresiones como:

```text
PF_min = ∅
```

`PF_min` designa el lugar metateórico de una pregunta o resultado, no una capacidad positiva existente.

---

# Auditoría de vocabulario especializado

El glosario no enumera exhaustivamente:

```text
Libro
Edición
Ejemplar
Moneda
Sensor
Observación
Traducción
```

como términos universales.

Cuando aparezcan, deben entenderse como ejemplos de posibles conceptos de especialización.

Si alguna especialización futura se consolida documentalmente, podrá incorporarse vocabulario local adicional.

---

# Auditoría de vocabulario realizativo

De manera análoga:

```text
UUID
SQL
JSON
RDF
foreign key
timestamp
cache
event log
```

no constituyen vocabulario conceptual del núcleo.

Su presencia se justifica únicamente para explicar fronteras técnicas.

---

# Auditoría de compatibilidad con preguntas abiertas

El glosario no debe resolver por definición cuestiones que `10-preguntas-abiertas.md` mantiene abiertas.

Se controlan especialmente:

```text
PA-07
PA-08
PA-09
PA-10
```

Por ello:

- `Configuración interpretable` queda como expresión de frontera y no propiedad universal;
- `Conocimiento` e `Interpretación` reciben definiciones deliberadamente no metafísicas;
- `Equivalencia reconstructiva` permanece provisional;
- `Dominio` remite expresamente a `PA-10`;
- `Representación` no presupone equivalencia entre representaciones distintas.

Resultado:

```text
COMPATIBILIDAD CON PA — PASS
```

---

# Auditoría de cobertura terminológica

Se revisa el vocabulario histórico principal:

```text
P
S
V
P-001
O
MA-001
MA-002
CAN-F1
CAN-F2
CAN-F3
CE
TV
U
R
Φ
Componer-E
Componer-V
Formar-U
Reconstruir
Derivar-C
Derivar
Corr
Applicable
Prov
Trace
Evidence
PMG-1
PMG-2
RA-I
RA-E
RA-V
RR-1…RR-5
```

Todos poseen ahora entrada propia o estatuto explícitamente reconstruible en el documento.

No se detecta actualmente una omisión transversal necesaria.

Resultado:

```text
COBERTURA TERMINOLÓGICA — PASS
```

---

# Auditoría del sistema de estatutos

La primera versión utilizaba calificadores no definidos explícitamente.

La presente versión distingue:

```text
estatuto principal
+
calificador de nivel o alcance
```

mediante:

```text
FORMAL
LOCAL
CONTEXTUAL
EVALUATIVO
RESULTADO-METATEÓRICO
FRONTERA
```

Por tanto:

```text
variación descriptiva
≠
inestabilidad ontológica
```

Resultado:

```text
SISTEMA DE ESTATUTOS — PASS
```

---

# Resultado de la auditoría terminológica

No se identifica actualmente ningún término que, por ser incluido en este glosario, deba adquirir un estatuto conceptual positivo nuevo.

No se restaura:

```text
P
S
V
P-001
O
MA-001
MA-002
CAN-F1
CAN-F2
CAN-F3
CE
TV
U
R
Φ
Corr
Applicable
Prov
Trace
Evidence
RA-I
RA-E
RA-V
RR-1…RR-5
```

como fundamento vigente.

---

# Resultado de la segunda versión

Las seis correcciones introducidas son:

```text
1. normalización del sistema de estatutos;

2. incorporación de ES_universales_positivas;

3. incorporación de CE;

4. incorporación de FAIL;

5. reformulación de Configuración
   y Configuración interpretable;

6. neutralización de Conocimiento
   e Interpretación
   y control explícito de Dominio mediante PA-10.
```

Ninguna modifica los resultados consolidados de `02–15`.

Todas son correcciones internas de precisión terminológica.

---

# Resultado consolidable

Se proponen las siguientes conclusiones.

## `GLO-C1`

> El glosario registra vocabulario y estatuto; no constituye una ontología.

## `GLO-C2`

> La presencia, recurrencia o definición de un término no demuestra su universalidad ni fundamentalidad.

## `GLO-C3`

> Los términos históricos deben conservarse cuando sean necesarios para reconstruir el desarrollo de la teoría, pero su conservación documental no restaura su autoridad conceptual.

## `GLO-C4`

> Los términos locales, realizativos, metodológicos, formales y metalingüísticos deben distinguirse explícitamente de las categorías sustantivas del dominio.

## `GLO-C5`

> Los resultados vacíos expresan ausencia de necesidad universal positiva demostrada y no ausencia de contenido local o de teoría.

## `GLO-C6`

> Una metavariable puede ser indispensable para argumentar sin convertirse por ello en una categoría del dominio.

## `GLO-C7`

> Los cambios de estatuto terminológico deben registrarse de forma trazable.

## `GLO-C8`

> En caso de conflicto interpretativo, el documento donde se justificó un resultado posee prioridad sobre el resumen del glosario.

## `GLO-C9`

> Un término puede necesitar una definición de frontera sin que esa definición le otorgue una propiedad ontológica universal.

## `GLO-C10`

> El glosario no debe resolver mediante definición una cuestión que permanezca explícitamente abierta en `10-preguntas-abiertas.md`.

---

# Resultado final

El glosario queda organizado como:

```text
vocabulario
+
definición contextual
+
estatuto principal
+
calificadores
+
nivel
+
advertencias
```

y no como:

```text
lista de entidades
+
relaciones
+
operaciones
del dominio
```

Formalmente:

```text
Glosario
≠
Σ_min
```

y:

```text
Glosario
≠
OntologíaUniversal
```

---

# Control de impacto documental

La segunda versión de `11-glosario.md` no aporta evidencia suficiente para reabrir:

```text
02
03
04
05
06
07
08
09
10
12
13
14
15
99
```

Resultado:

```text
REAPERTURAS INMEDIATAS = 0
```

---

# Condición de actualización

`11-glosario.md` deberá actualizarse cuando:

1. aparezca un término transversal nuevo;
2. cambie el estatuto de un término vigente;
3. se reabra una categoría histórica;
4. una pregunta abierta produzca un nuevo concepto estabilizado;
5. una especialización requiera vocabulario local consolidado;
6. aparezca una ambigüedad terminológica relevante;
7. se descubra una reificación indebida causada por una entrada existente;
8. cambie alguno de los resultados vacíos actualmente consolidados;
9. una pregunta abierta obligue a modificar una definición actualmente marcada como provisional o de frontera.

---

# Siguiente documento

Una vez consolidado provisionalmente `11-glosario.md`, el siguiente documento del orden de construcción auditado será:

```text
17-indice-general.md
```

Su función será proporcionar el mapa documental final del corpus:

```text
documento
+
función
+
estado
+
nivel
+
entradas
+
salidas
+
dependencias
+
orden recomendado de lectura
```

sin introducir contenido teórico nuevo.

---

## Pendiente

Ninguno dentro del alcance propio del glosario.

Las actualizaciones futuras dependerán de cambios terminológicos, conceptuales o documentales posteriores.
