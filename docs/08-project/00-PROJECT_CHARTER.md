# PROJECT_CHARTER.md

# 1. Propósito

Este documento establece la referencia constitutiva superior del proyecto.

Su responsabilidad consiste en preservar la identidad, la finalidad y el perímetro superior del proyecto, así como las condiciones bajo las cuales éstos pueden evolucionar o modificarse legítimamente.

Su función es proporcionar una referencia estable frente a la que puedan contrastarse las distintas interpretaciones, productos, investigaciones, dominios, decisiones, arquitecturas, realizaciones e implementaciones desarrolladas durante la evolución del proyecto.

La finalidad de esta carta no es impedir que el proyecto cambie.

Su finalidad es impedir que cambie inadvertidamente.

Una evolución interna del proyecto y una modificación del propio proyecto no son equivalentes y deberán poder distinguirse.

Este documento no constituye:

- una especificación de producto;
- una hoja de ruta;
- un registro de ideas;
- una descripción del estado actual;
- una historia del proyecto;
- un procedimiento de investigación;
- una arquitectura software;
- ni una enumeración de funcionalidades obligatorias.

Los documentos y cuerpos especializados conservan sus respectivas competencias dentro del marco definido por esta carta.

---

# 2. Identidad del proyecto

El proyecto tiene como finalidad construir progresivamente un producto digital real, útil, sostenible y evolutivo orientado a ampliar las posibilidades humanas de trabajo intelectual con información y contenidos.

El producto constituye el resultado perseguido por el proyecto.

La investigación conceptual, la ingeniería, la arquitectura, la realización, la implementación, las herramientas auxiliares y los experimentos técnicos constituyen medios, cuerpos especializados o actividades subordinadas a esa finalidad.

Ninguno de ellos constituye por sí mismo el proyecto completo.

La identidad del proyecto no queda determinada por una tecnología concreta, una arquitectura particular, una implementación histórica, un dominio especializado ni una única interpretación desarrollada durante su evolución.

---

# 3. Perímetro superior

El proyecto nació dentro de un espacio de necesidades y posibilidades humanas más amplio que cualquiera de las soluciones concretas mediante las que éstas puedan realizarse.

Ese espacio incluye actividades relacionadas, entre otras, con:

- crear e incorporar información;
- conservarla;
- organizarla;
- consultarla y leerla;
- trabajar intelectualmente sobre ella;
- transformarla;
- relacionarla;
- desarrollarla;
- recuperarla y reutilizarla;
- compartirla;
- comunicarla;
- publicarla;
- y utilizarla en contextos posteriores.

Esta enumeración caracteriza el horizonte histórico del proyecto.

No constituye:

- una lista de requisitos;
- un backlog;
- una secuencia de desarrollo;
- una obligación de implementación;
- una definición anticipada de verticales de Product;
- ni una afirmación de que todas estas posibilidades deban formar parte del producto final.

Cada posibilidad concreta deberá adquirir, cuando corresponda, su estatuto mediante el cuerpo competente y la justificación necesaria.

La ausencia actual de una posibilidad en `PRODUCT.md` no demuestra por sí misma que dicha posibilidad haya sido descartada, del mismo modo que su presencia histórica no demuestra que deba ser incorporada.

Deberán distinguirse, cuando resulte relevante:

- lo consolidado;
- lo investigado y descartado;
- lo reformulado;
- lo aplazado;
- lo todavía no investigado;
- y lo meramente imaginado.

---

# 4. Integridad del proyecto

El proyecto deberá conservar la distinción entre el todo y sus partes.

Una investigación, dominio, teoría, modelo, plataforma, arquitectura, herramienta, realización o implementación podrá adquirir una importancia central sin convertirse por ello automáticamente en la finalidad o el alcance completo del proyecto.

Ninguna especialización podrá redefinir silenciosamente el proyecto del que procede.

Cuando una evolución interna produzca una interpretación que parezca exigir modificar la identidad, finalidad o perímetro superior establecidos por esta carta, dicha modificación deberá tratarse explícitamente como una posible modificación del proyecto y no como una consecuencia automática de la especialización que la haya producido.

---

# 5. Principios rectores

## 5.1. Primacía de la finalidad

Las soluciones, tecnologías, arquitecturas y estructuras documentales permanecen subordinadas a la finalidad del proyecto.

La existencia previa de una solución no constituye por sí misma razón suficiente para conservarla.

## 5.2. Distinción entre problema y solución

Las soluciones históricas no deberán confundirse con las necesidades, situaciones o posibilidades que pretendían atender.

Una solución podrá ser sustituida, reformulada o descartada sin que desaparezca necesariamente el problema que la originó.

Del mismo modo, la existencia histórica de una solución no demuestra que el problema al que pretendía responder siga perteneciendo al producto.

## 5.3. Subordinación de las partes

Todo dominio, investigación, modelo, arquitectura, herramienta o implementación constituye una parte del proyecto con una responsabilidad limitada.

Su desarrollo interno no amplía por sí mismo dicha responsabilidad.

## 5.4. No sustitución silenciosa

Ninguna parte especializada podrá ocupar el lugar del proyecto completo sin que exista una decisión explícita y suficientemente justificada de modificación del alcance superior.

La coherencia interna de una nueva interpretación no basta para demostrar que dicha interpretación deba redefinir el proyecto.

## 5.5. Justificación de la evolución

La mera continuidad histórica no constituye razón suficiente para abrir una nueva actuación.

Tampoco la mera existencia de una posibilidad, idea, tecnología o solución genera por sí misma una obligación de investigación o implementación.

Las nuevas actuaciones deberán encontrar su justificación en el cuerpo competente.

## 5.6. Trazabilidad del cambio

Las modificaciones sustanciales de la identidad, finalidad o perímetro superior del proyecto deberán ser explícitas y trazables.

Una modificación del proyecto deberá poder distinguirse posteriormente de una evolución realizada dentro del proyecto.

## 5.7. Apertura sin compromiso automático

El proyecto permanece abierto a nuevas ideas, necesidades, posibilidades y soluciones.

La apertura a una posibilidad no implica su adopción.

Ninguna idea se convierte en objetivo, requisito o compromiso por el mero hecho de resultar atractiva, ambiciosa o técnicamente posible.

## 5.8. Evolución incremental y revisable

El producto podrá desarrollarse incrementalmente.

Las decisiones adoptadas en una etapa podrán ser revisadas cuando aparezca nueva evidencia o una justificación suficiente.

La estabilidad documental no implica inmutabilidad.

---

# 6. Relación con `VISION.md`

`VISION.md` interpreta y desarrolla la dirección, filosofía y principios vigentes del proyecto.

`PROJECT_CHARTER.md` no sustituye esa responsabilidad.

La visión podrá evolucionar, profundizarse o reformularse mientras permanezca compatible con la identidad, finalidad y perímetro superior del proyecto.

Cuando una modificación de `VISION.md` implique modificar esos elementos superiores, no deberá tratarse únicamente como una evolución de la visión.

Deberá reconocerse que está en cuestión la propia carta del proyecto.

De este modo, `PROJECT_CHARTER.md` constituye una referencia frente a la que puede auditarse incluso la evolución de `VISION.md`.

---

# 7. Relación con `PLATFORM_VISION.md`

`PLATFORM_VISION.md` desarrolla una determinada visión de la plataforma que pueda resultar adecuada para realizar el producto.

La plataforma no se identifica automáticamente con el proyecto completo.

Su alcance, naturaleza y evolución deberán permanecer compatibles con la identidad y el perímetro superior establecidos por esta carta.

La importancia adquirida por una determinada concepción de plataforma durante el desarrollo del proyecto no constituye por sí misma evidencia suficiente para convertirla en definición exhaustiva del producto o del proyecto.

---

# 8. Relación con `PRODUCT.md`

`PRODUCT.md` determina los compromisos de producto que hayan sido suficientemente justificados dentro del proyecto.

Esta carta no selecciona verticales, funcionalidades, prioridades ni compromisos concretos de Product.

La existencia de una posibilidad dentro del horizonte del proyecto no obliga a `PRODUCT.md` a incorporarla.

Product podrá:

- seleccionarla;
- investigarla;
- reformularla;
- aplazarla;
- descartarla;
- o no haberla evaluado todavía,

según corresponda.

Sin embargo, una decisión interna de Product no podrá modificar implícitamente la identidad o el perímetro superior del proyecto.

Cuando una decisión pretenda modificar ese perímetro, deberá reconocerse como una cuestión de alcance del proyecto y justificarse frente a esta carta.

---

# 9. Relación con el conocimiento

El trabajo con conocimiento constituye una dimensión relevante del proyecto.

Su investigación conceptual y las estructuras desarrolladas alrededor de ella podrán proporcionar fundamentos, capacidades y modelos valiosos para el producto.

Sin embargo, el conocimiento, su modelado o una plataforma especializada en trabajar con él no se identificarán automáticamente con el producto completo.

La posición que finalmente corresponda al conocimiento dentro del producto deberá resultar de la investigación y reconstrucción competentes, no de su importancia histórica ni de la profundidad alcanzada por su desarrollo teórico.

Esta cláusula no presupone cuál deberá ser ese resultado.

---

# 10. Relación con el patrimonio técnico existente

Las implementaciones desarrolladas durante la historia del proyecto, incluida la Todo App y su evolución arquitectónica, constituyen patrimonio técnico y experimental.

Pueden proporcionar:

- conocimiento de ingeniería;
- técnicas reutilizables;
- experimentos;
- componentes;
- patrones;
- pruebas;
- infraestructura;
- y evidencia obtenida mediante implementación real.

Su existencia no obliga a que el producto futuro conserve su arquitectura, tecnologías, modelo de dominio o decisiones de diseño.

Tampoco obliga a descartarlas.

Su reutilización deberá justificarse por su adecuación al producto que resulte consolidado y no únicamente por su existencia histórica.

El laboratorio técnico permanece subordinado al producto y no determina por sí mismo su alcance.

---

# 11. Relación entre finalidad e implementación

El proyecto deberá mantener una relación justificable entre su finalidad y aquello que finalmente se implementa.

De manera general pueden aparecer relaciones como:

```text
finalidad del proyecto
        ↓
producto
        ↓
responsabilidades y compromisos
        ↓
investigación cuando resulte necesaria
        ↓
ingeniería y arquitectura cuando resulten necesarias
        ↓
realización
        ↓
implementación
        ↓
uso y nueva evidencia
        ↓
revisión y evolución
```

Este esquema no constituye:

una secuencia temporal obligatoria;
una hoja de ruta;
una prescripción arquitectónica;
ni la obligación de atravesar todos esos cuerpos en cada actuación.

Expresa únicamente que las decisiones especializadas y las implementaciones deberán conservar una relación justificable con las responsabilidades de las que proceden.

La implementación puede producir nueva evidencia capaz de provocar revisiones en cuerpos anteriores sin que ello elimine las diferencias de responsabilidad entre dichos cuerpos.

---

# 12. Nuevas ideas y posibilidades

El proyecto deberá disponer de mecanismos que permitan conservar nuevas ideas y posibilidades sin convertirlas automáticamente en compromisos.

Las ideas concretas no pertenecen a esta carta.

Su conservación y evaluación corresponderán a los cuerpos documentales y metodológicos competentes.

La aparición de una nueva posibilidad podrá justificar posteriormente:

- una investigación;
- una modificación de Product;
- una nueva línea estratégica;
- una herramienta;
- un experimento;
- o incluso una revisión de esta carta,

pero ninguna de esas consecuencias se deriva automáticamente de su mera formulación.

La imaginación permanece abierta.

El compromiso permanece sujeto a justificación.

---

# 13. Condiciones de modificación de la carta

`PROJECT_CHARTER.md` es un documento estable, pero no inmutable.

Su modificación estará justificada cuando exista evidencia suficiente de que debe cambiar alguno de los elementos cuya custodia le corresponde, entre ellos:

- la identidad del proyecto;
- su finalidad;
- su perímetro superior;
- sus principios constitutivos;
- o las condiciones generales bajo las que se distingue una evolución interna de una modificación del propio proyecto.

No será necesario modificar esta carta por el mero hecho de que:

- cambie el estado del proyecto;
- finalice o se abra una investigación;
- aparezca una nueva vertical de Product;
- cambie el Roadmap;
- se adopte una nueva arquitectura;
- se sustituya una tecnología;
- se implemente una nueva funcionalidad;
- o aparezca una nueva idea.

Cuando una modificación de la carta resulte necesaria, deberá:

- identificarse expresamente qué elemento constitutivo se propone modificar;
- justificarse mediante evidencia o razones suficientes;
- distinguirse el nuevo estado del anterior;
- evaluarse su efecto sobre los cuerpos que dependan de ese elemento;
- y conservarse trazabilidad de la decisión en la documentación histórica competente.

La modificación no deberá presentarse como una simple actualización editorial cuando altere materialmente el proyecto definido por esta carta.

---

# 14. Criterio de continuidad del proyecto

El proyecto conserva su continuidad mientras sus evoluciones puedan entenderse como desarrollos, revisiones o sustituciones realizadas dentro de la identidad y el perímetro superior vigentes.

Cuando una propuesta requiera modificar esos elementos para poder ser incorporada, deberá reconocerse que no estamos únicamente ante una nueva actuación interna.

Estamos ante una posible modificación del propio proyecto.

La pregunta de control superior será:

¿Seguimos desarrollando el proyecto que hemos decidido emprender o estamos proponiendo modificarlo?

Ambas posibilidades son legítimas.

Lo que esta carta excluye es que puedan confundirse.

---

# 15. Estatuto documental

`PROJECT_CHARTER.md` constituye la referencia de identidad, finalidad y perímetro superior del proyecto.

Su autoridad se limita a esa responsabilidad.

No sustituye las competencias propias de:

- `VISION.md`;
- `PLATFORM_VISION.md`;
- `PRODUCT.md`;
- `DESIGN_JOURNAL.md`;
- `ROADMAP.md`;
- `PROJECT_STATUS.md`;
- `PROJECT_JOURNAL.md`;
- la metodología;
- la metateoría;
- los cuerpos de investigación conservados en `research/corpus/`;
- Architecture;
- Development;
- ni ningún otro cuerpo competente del proyecto.

Cada uno de esos cuerpos conserva su responsabilidad propia dentro de su ámbito.

Los resultados conservados en `research/corpus/` no adquieren autoridad sobre el proyecto principal por su sola existencia, pero tampoco quedan subordinados retrospectivamente a la carta fuera de las relaciones de aplicabilidad que deban justificarse en cada caso.

La carta proporciona el marco superior frente al que puede comprobarse si su evolución continúa perteneciendo al mismo proyecto o implica una modificación explícita de éste.

La aplicación operativa de los principios establecidos en esta carta corresponderá a la metodología vigente del proyecto.

---

# 16. Regla final

`PROJECT_CHARTER.md` no existe para decidir de antemano todas las respuestas del proyecto.

Existe para preservar la pregunta a la que esas respuestas deben seguir perteneciendo.

El proyecto puede aprender, cambiar de soluciones, abandonar ideas, incorporar otras nuevas, reconstruir sus modelos, sustituir sus tecnologías e incluso revisar su propia visión.

Cuando cambie aquello que define qué proyecto estamos realizando, ese cambio deberá ser reconocido, justificado y conservado como tal.

---
