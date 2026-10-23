# Registro experimental de interoperabilidad y delimitación de PV-005 / PV-006

## Estatuto documental

Este documento incorpora al corpus canónico del proyecto la evidencia obtenida
durante una trayectoria experimental posterior al cierre de la investigación
30.

La trayectoria se ejerció inicialmente fuera del repositorio, en:

    ~/Escritos/trabajo-el-quinto-milagro/

Ese espacio funcionó como laboratorio de materiales y transformaciones. La
incorporación de este registro a `docs/06-realization/` preserva la
trazabilidad de la evidencia que posteriormente justificó una clarificación de
`PV-005` y `PV-006` en Product.

Este documento:

- no abre una investigación 31;
- no constituye una nueva vertical de Product;
- no modifica por sí mismo `PV-005` ni `PV-006`;
- no deriva Architecture ni Implementation;
- no convierte los artefactos externos del laboratorio en documentación
  normativa;
- conserva la secuencia experimental necesaria para reconstruir el fundamento
  de la delimitación posteriormente consolidada.

## Relación con el estado consolidado

La trayectoria experimental distinguió progresivamente:

    representación
    ≠ practicabilidad

    practicabilidad
    ≠ correspondencia con el destino pretendido

    acceso
    ≠ procedencia

y finalmente mostró mediante P6 que:

    PV-005 ≠ PV-006

en el sentido funcional ejercido por el contraste.

P6 produjo un residuo respecto de `PV-006` aun manteniendo iguales el resultado
y las posibilidades posteriores identificadas. Ese residuo no quedó
independiente respecto del conjunto del producto, porque correspondía al ámbito
ya protegido por `PV-005`: quién ejerce una decisión relevante mientras las
alternativas permanecen abiertas.

La delimitación resultante quedó consolidada en:

    docs/08-project/02-PRODUCT.md

mediante el commit:

    36696ac — docs(product): clarify PV-005 and PV-006 boundaries

y sincronizada en:

    docs/08-project/09-PROJECT_STATUS.md

mediante:

    f5766df — docs(project): sync status after PV boundary clarification

## Evidencia experimental incorporada

A continuación se conserva el registro experimental elaborado durante la
trayectoria. Sus resultados intermedios deben leerse cronológicamente: las
hipótesis provisionales anteriores no prevalecen sobre las reducciones y
resultados posteriores del mismo registro.

---

# Registro de pruebas de interoperabilidad

## Propósito

Ejercer una trayectoria de trabajo intelectual entre materiales y aplicaciones heterogéneas para observar qué capacidades, relaciones y posibilidades sobreviven a las transformaciones entre formatos y superficies de trabajo.

Este registro documenta resultados experimentales. No establece todavía requisitos de producto ni compromisos de diseño.

---

## P1 — Markdown en Obsidian

Material de control:

- texto estructurado;
- encabezados;
- lista;
- imagen SVG;
- referencia a la fuente PDF F0.

Resultado en Obsidian:

- texto visible: ✔
- estructura visible: ✔
- imagen SVG visible: ✔
- enlace a F0 visible: ✔
- apertura efectiva de F0: ✔
- contenido Markdown editable: ✔

La relación entre el material de trabajo y F0 era practicable dentro de Obsidian.

---

### Evidencia observada en Obsidian

Se comprobó primero la relación entre la ficha F1 y la fuente original F0.

F1 contenía:

    [[../fuente/F0-el-quinto-milagro.pdf]]

La ruta correspondiente fue comprobada físicamente y resolvía al archivo:

    ~/Escritos/trabajo-el-quinto-milagro/fuente/F0-el-quinto-milagro.pdf

Al ejercer la relación desde Obsidian:

- el enlace era reconocible: ✔
- F0 podía abrirse desde F1: ✔
- F0 se mostraba dentro de Obsidian: ✔
- F0 podía consultarse: ✔
- F0 no se convertía por ello en contenido Markdown editable: ✔

Por tanto:

    relación representada
        +
    destino físicamente existente
        +
    aplicación capaz de resolver la representación
        ↓
    relación practicable

Posteriormente se creó P1 como material de control compuesto por:

- texto;
- encabezados;
- lista;
- imagen SVG;
- enlace a F0.

La imagen se incorporó mediante:

    ![[imagenes/I1-control.svg]]

y F0 mediante:

    [[../fuente/F0-el-quinto-milagro.pdf]]

En Obsidian se observó:

- texto visible: ✔
- encabezados visibles: ✔
- párrafos visibles: ✔
- lista visible: ✔
- SVG visible: ✔
- enlace a F0 visible: ✔
- apertura efectiva de F0: ✔
- edición del contenido Markdown: ✔

La prueba demuestra, dentro del alcance ensayado, que Obsidian podía mantener
en una misma superficie de trabajo materiales heterogéneos y relaciones
practicables entre ellos.

### Contraste de representación al abandonar Obsidian

La representación anterior era funcional dentro de Obsidian.

Sin embargo, al entregar directamente a Pandoc las expresiones:

    ![[imagenes/I1-control.svg]]

y:

    [[../fuente/F0-el-quinto-milagro.pdf]]

Pandoc no las interpretó como imagen embebida y enlace navegable, sino como
texto literal en el ODT resultante.

Por tanto, el contraste observado es:

    misma representación textual
        +
    distinto intérprete
        ↓
    distinta capacidad efectiva

Esto no demuestra que Markdown, ODT o Pandoc sean incompatibles en general.
La posterior prueba con Markdown estándar demostró que la imagen y el enlace
sí podían conservarse cuando se utilizaba una representación comprendida por
la transformación y un contexto adecuado de resolución.

---

## P2 — Conversión Markdown → ODT

### P2A — Sintaxis específica de Obsidian

La conversión mediante Pandoc de expresiones como:

    ![[imagenes/I1-control.svg]]

y:

    [[../fuente/F0-el-quinto-milagro.pdf]]

no produjo una imagen embebida ni un enlace ODT funcional.

La sintaxis específica de Obsidian quedó representada como texto literal.

Resultado:

- texto general: ✔
- sintaxis wiki conservada como texto: ✔
- imagen interpretada como recurso: ✘
- enlace interpretado como relación navegable: ✘

### P2B/P2C — Markdown estándar

Al sustituir la sintaxis específica por Markdown estándar:

    ![I1 — imagen de control](imagenes/I1-control.svg)

y:

    [F0 — fuente PDF](../fuente/F0-el-quinto-milagro.pdf)

Pandoc pudo representar correctamente tanto la imagen como el enlace cuando la conversión se ejecutó desde un contexto de resolución adecuado.

Resultado:

- imagen embebida en ODT: ✔
- enlace estructuralmente representado: ✔

La resolución de recursos externos depende también del contexto desde el que se realiza la conversión.

---

## P2D — Enlace absoluto en ODT

Se creó una variante cuyo enlace a F0 era:

    file:///home/enrisan/Escritos/trabajo-el-quinto-milagro/fuente/F0-el-quinto-milagro.pdf

Inspección de `content.xml`:

    <text:a xlink:type="simple" xlink:href="file:///home/enrisan/Escritos/trabajo-el-quinto-milagro/fuente/F0-el-quinto-milagro.pdf" office:name="">

Resultado en LibreOffice Writer:

- enlace reconocido: ✔
- destino correcto: ✔
- apertura efectiva de F0: ✔

Por tanto, en P2D la relación era tanto representada como practicable.

---

## P3 — Exportación ODT → PDF

### Exportación a `pruebas/salidas/pdf/`

El ODT P2D contenía un enlace absoluto correcto.

Después de exportarlo a PDF, `pdfinfo -url` mostró:

    ../../fuente/F0-el-quinto-milagro.pdf

La exportación había representado el destino como ruta relativa.

Desde:

    pruebas/salidas/pdf/

esa ruta no conduce a la ubicación real de F0.

Resultado:

- texto visible: ✔
- estructura visual: ✔
- imagen visible: ✔
- enlace presente: ✔
- destino pretendido reconocible: ✔
- apertura efectiva de F0: ✘

### Prueba de control: exportación a `pruebas/salidas/`

Se exportó de nuevo el mismo ODT sin modificarlo.

`pdfinfo -url` volvió a mostrar exactamente:

    ../../fuente/F0-el-quinto-milagro.pdf

Sin embargo, desde:

    pruebas/salidas/

esa ruta sí resuelve correctamente a:

    fuente/F0-el-quinto-milagro.pdf

Al pulsar el enlace, F0 se abrió correctamente.

Resultado:

- mismo ODT de origen: ✔
- misma transformación: ✔
- misma ruta almacenada en el PDF: ✔
- distinta ubicación física del PDF: ✔
- enlace practicable desde `salidas/`: ✔
- enlace no practicable desde `salidas/pdf/`: ✔

---

## Resultado experimental

La pérdida funcional observada en la primera exportación no es atribuible al formato PDF por sí mismo.

La evidencia muestra la combinación siguiente:

    relación lógica conservada
            +
    representación del destino como ruta relativa
            +
    cambio del contexto físico de resolución
            ↓
    posible pérdida de practicabilidad

En concreto:

    mismo destino pretendido
    + misma ruta relativa almacenada
    + distinta ubicación del documento
    = distinta posibilidad efectiva de ejercer la relación

La prueba permite distinguir al menos:

1. existencia de la relación lógica;
2. representación concreta de esa relación;
3. contexto desde el que se resuelve;
4. practicabilidad efectiva de la relación.

También demuestra que:

> Una relación puede sobrevivir formalmente a una transformación y dejar de ser practicable si su representación depende de un contexto de resolución que ha cambiado.

---

## Alcance

Este resultado corresponde exclusivamente a la trayectoria ensayada:

    Markdown / Obsidian
        → Pandoc
        → ODT
        → LibreOffice Writer
        → PDF

No se deriva todavía de él:

- un requisito nuevo de producto;
- una solución general de interoperabilidad;
- una preferencia universal por rutas absolutas o relativas;
- una arquitectura de almacenamiento;
- una nueva investigación formal.

El resultado queda registrado como evidencia experimental para su evaluación posterior.

---

## P4 — Variante controlada: relación practicable con destino incorrecto

### Propósito

Intentar falsar una interpretación débil de PV-006 según la cual una posibilidad
podría considerarse preservada simplemente porque la relación sigue siendo
técnicamente ejercitable.

La pregunta experimental fue:

> ¿Puede una relación seguir siendo visible y practicable y, aun así, dejar de
> preservar la posibilidad originalmente realizada?

### Preparación

El PDF situado en:

    pruebas/salidas/pdf/P2D-enlace-absoluto.pdf

contenía la referencia relativa:

    ../../fuente/F0-el-quinto-milagro.pdf

Desde esa ubicación, la referencia resolvía hacia:

    pruebas/fuente/F0-el-quinto-milagro.pdf

Inicialmente ese destino no existía y el enlace no era practicable.

Para la prueba se creó deliberadamente en esa ubicación un segundo PDF distinto
del F0 original, con el mismo nombre de archivo pero con contenido inequívoco de
control:

    DOCUMENTO DE CONTROL
    ESTE DOCUMENTO NO ES F0.

El F0 original no fue modificado.

### Resultado observado

Al pulsar en `F0 — fuente PDF` desde el PDF de trabajo:

- el enlace estaba presente: ✔
- el enlace era pulsable: ✔
- se abrió un documento PDF: ✔
- la navegación fue técnicamente efectiva: ✔
- el documento abierto era el documento de control: ✔
- el documento abierto no era el F0 originalmente pretendido: ✔

Por tanto:

    enlace presente
        +
    enlace practicable
        +
    apertura efectiva de un recurso
        ≠
    retorno al material pretendido

### Contraste obtenido

La prueba permite separar tres niveles:

    1. representación
       ¿existe una representación de la relación?

    2. practicabilidad
       ¿puede ejercerse esa representación?

    3. correspondencia
       ¿su ejercicio conduce realmente al destino pretendido?

En la variante ensayada:

    representación     ✔
    practicabilidad    ✔
    correspondencia    ✘

Por tanto:

    representación ≠ practicabilidad
    practicabilidad ≠ correspondencia con el destino pretendido

### Evaluación frente a PV-006

La posibilidad pertinente anterior no consistía simplemente en:

    pulsar un enlace

ni en:

    abrir algún PDF

sino en:

    desde el material de trabajo
        → volver al F0 concreto

Después de la variante controlada:

    acción de pulsar el enlace     ✔
    apertura de un recurso         ✔
    retorno al F0 pretendido       ✘

Por ello, la posibilidad pertinente no quedó suficientemente preservada.

La variante falsifica una interpretación débil de PV-006 basada únicamente en
la supervivencia formal o en la practicabilidad técnica de la relación.

No falsifica, sin embargo, la absorción del fenómeno por PV-006, porque la
posibilidad pertinente "volver a F0" sigue siendo precisamente aquello que se
ha perdido.

### Resultado de la falsación

    variante controlada realizada                     ✔
    relación formal presente                           ✔
    relación técnicamente practicable                  ✔
    destino pretendido preservado                      ✘
    posibilidad pertinente "volver a F0"               ✘

    interpretación débil de PV-006
    como mera practicabilidad técnica                  falsada ✔

    absorción del fenómeno por PV-006                  sobrevive ✔
    residuo independiente demostrado                   ✘

### Consecuencia experimental

La preservación suficiente de una posibilidad no puede establecerse únicamente
comprobando:

- que una representación sigue existiendo;
- que una acción sigue siendo ejecutable;
- o que la acción produce algún resultado.

Debe comprobarse que la posibilidad pertinente originalmente disponible sigue
siendo efectivamente realizable en la situación resultante.

### Alcance

Esta prueba no establece todavía:

- un requisito nuevo de producto;
- una obligación general de preservar nombres, rutas o enlaces;
- una teoría independiente de identidad de recursos;
- una solución arquitectónica;
- ni una nueva investigación formal.

El resultado permanece como evidencia experimental para posteriores intentos
de falsar la absorción del fenómeno por PV-006.

---

## P6 — Contraste de agencia con posibilidades posteriores conservadas

### Propósito

Comprobar si puede permanecer una diferencia humanamente relevante entre dos
situaciones cuando:

- el resultado material final es el mismo;
- los materiales disponibles son los mismos;
- las posibilidades posteriores identificables son las mismas;

pero difiere quién resolvió una decisión mientras las alternativas estaban
abiertas.

La prueba se diseñó específicamente para intentar encontrar una diferencia que
no pudiera reducirse a una posibilidad posterior perdida y, por tanto, que no
quedara absorbida por PV-006.

### Protocolo previo

Antes de construir los dos estados se fijó el protocolo
`P6-PROTOCOLO-agencia.md`.

La decisión de control tenía dos alternativas:

    X
    Y

El resultado final sería en ambos casos:

    X

Después del resultado debían permanecer disponibles en ambos casos exactamente
las mismas posibilidades identificables:

- consultar X;
- editar X;
- sustituir X por Y;
- eliminar X;
- volver a decidir entre X e Y;
- continuar trabajando.

La única variable pretendida era:

    quién ejerció la decisión original

### P6A — Decisión ejercida por la persona

Se construyó:

    P6A-decision-persona.md

Condición:

    mientras X e Y seguían abiertas,
    la persona eligió X

Estado posterior:

- resultado: X;
- consultar X: ✔
- editar X: ✔
- sustituir X por Y: ✔
- eliminar X: ✔
- volver a decidir entre X e Y: ✔
- continuar trabajando: ✔

### P6B — Decisión ejercida por la plataforma

Se construyó:

    P6B-decision-plataforma.md

Condición:

    mientras X e Y seguían abiertas,
    la plataforma eligió X antes de que
    la persona hubiera resuelto la elección

Estado posterior:

- resultado: X;
- consultar X: ✔
- editar X: ✔
- sustituir X por Y: ✔
- eliminar X: ✔
- volver a decidir entre X e Y: ✔
- continuar trabajando: ✔

### Verificación de la variable aislada

La comparación mediante `diff` mostró que, fuera del título, la única diferencia
sustantiva entre P6A y P6B era:

    P6A:
    la persona eligió X

    P6B:
    la plataforma eligió X antes de que
    la persona hubiera resuelto la elección

El resultado final y las posibilidades posteriores declaradas permanecían
iguales.

### Resultado experimental

El contraste queda:

    P6A
    resultado final: X
    posibilidades posteriores: conservadas
    decisor original: persona

    P6B
    resultado final: X
    posibilidades posteriores: conservadas
    decisor original: plataforma

Por tanto, no se identificó una posibilidad posterior cuya pérdida explicara la
diferencia entre ambos estados.

Sin embargo, permanecía una diferencia:

    quién resolvió la decisión mientras
    las alternativas seguían abiertas

La diferencia corresponde al acontecimiento de decisión y no únicamente al
estado material posterior.

### Evaluación frente a PV-006

En la construcción de P6:

- resultado material final diferente: ✘
- materiales posteriores diferentes: ✘
- posibilidades posteriores identificadas diferentes: ✘
- diferencia de agencia: ✔

Por tanto, la diferencia entre P6A y P6B no queda explicada simplemente como:

    pérdida de una posibilidad posterior pertinente

Resultado:

    residuo respecto de PV-006 ✔

La prueba falsifica, dentro de su alcance controlado, una interpretación según
la cual PV-006 pudiera absorber toda diferencia humanamente relevante siempre
que ésta pudiera evaluarse únicamente desde las posibilidades disponibles en el
estado posterior.

### Contraste con PV-005

La diferencia residual no constituye, sin embargo, un residuo independiente
respecto del conjunto de compromisos existentes.

PV-005 cubre precisamente la situación en la que una decisión relevante cuya
resolución corresponde a la persona debe permanecer en manos de ésta mientras
las alternativas continúan abiertas.

En P6:

    P6A
    → la persona ejerce la decisión

    P6B
    → la plataforma ejerce la decisión
      antes de que la persona la haya resuelto

Por tanto:

    residuo respecto de PV-006                     ✔
    diferencia de agencia                          ✔
    absorción por PV-005                           ✔
    residuo independiente del conjunto             ✘
    nuevo compromiso de producto necesario         ✘

### Consecuencia conceptual

P6 proporciona un contraejemplo controlado a la posible reducción de PV-005 y
PV-006 a una única exigencia.

Dentro del alcance de esta prueba:

    PV-005
    → atiende a quién ejerce una decisión
      mientras las alternativas siguen abiertas

    PV-006
    → atiende a la preservación suficiente
      de posibilidades pertinentes tras un cambio

Puede existir una diferencia relevante de agencia aun cuando las posibilidades
posteriores identificadas permanezcan iguales.

Por tanto:

    PV-005 ≠ PV-006

al menos en el sentido funcional puesto a prueba por P6.

### Alcance

P6 no establece:

- un nuevo requisito de producto;
- un nuevo PV;
- una nueva arquitectura;
- una teoría general de agencia;
- que toda intervención automática sea problemática;
- ni que las posibilidades posteriores enumeradas agoten universalmente todas
  las posibilidades concebibles.

El resultado demuestra únicamente, dentro del contraste construido, que la
diferencia de quién ejerció la decisión original no necesita manifestarse como
una pérdida de las posibilidades posteriores identificadas y que esa diferencia
ya dispone de cobertura específica en PV-005.
