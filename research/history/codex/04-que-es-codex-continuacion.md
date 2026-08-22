bueno paramos por ahora. luego lo retomamos

---

Perfecto. Creo que ha sido una sesión muy productiva.

Hemos conseguido dos cosas importantes:

1. **Consolidar definitivamente `VISION.md`**, comprobando que cada capítulo cumple una única responsabilidad y que no invade el ámbito de otros documentos.
2. **Auditar prácticamente todo `PRODUCT.md`**, verificando que mantiene una separación muy clara respecto a `VISION.md`, `ARCHITECTURE.md` y `ROADMAP.md`. Los cambios han sido mínimos y orientados casi siempre a mejorar la claridad, no a corregir problemas de estructura.

Además, ha surgido una mejora importante para el sistema documental:

- Creación de `docs/notes/DESIGN_JOURNAL.md` como espacio para conservar hipótesis y reflexiones de diseño sin mezclarlas con la documentación estable.

Creo que esa decisión refuerza mucho la arquitectura documental, porque ahora cada tipo de conocimiento tiene un lugar claro:

- **VISION.md** → propósito, visión y principios.
- **PRODUCT.md** → definición funcional del producto.
- **ARCHITECTURE.md** → diseño técnico y modelo de dominio.
- **DEVELOPMENT_GUIDE.md** → proceso de desarrollo.
- **TESTING.md** → estrategia de validación.
- **PROJECT_STATUS.md** → estado actual.
- **PROJECT_JOURNAL.md** → evolución histórica.
- **DESIGN_JOURNAL.md** → hipótesis y futuras líneas de diseño.

Cuando retomemos el trabajo, yo seguiría este orden:

1. Finalizar la auditoría de `PRODUCT.md` (si queda algún ajuste menor).
2. Auditar `ARCHITECTURE.md`, que probablemente será el documento donde más valor aporte esta metodología.
3. Continuar con `DEVELOPMENT_GUIDE.md` y `TESTING.md`, aplicando exactamente el mismo criterio de responsabilidades.

Creo que el método de auditoría ya está suficientemente probado. A partir de ahora no se trata tanto de reescribir documentos como de verificar que **cada conocimiento vive en un único lugar**, que era precisamente el objetivo que nos marcamos.

Que descanses, y la próxima vez continuamos desde aquí. Hemos dejado una base muy sólida para seguir avanzando.

---

¿me podrías reescribir design_journal.md en base al nuevo índice propuesto? 1. Propósito

2. Evolución del dominio

3. Evolución del modelo conceptual

4. Transparencia editorial

5. Modelo de publicación

6. Modelo de monetización

7. Otras ideas

hay que cambiar todo lo anterior y adaptarlo al nuevo índice

# 1. Propósito

Este documento recoge ideas, hipótesis y reflexiones relacionadas con la evolución del diseño del producto y de la arquitectura del proyecto.

Su finalidad es preservar aquellas propuestas que, aun no formando parte de la documentación oficial, puedan resultar valiosas para orientar futuras decisiones de diseño.

El contenido de este documento no constituye una especificación del producto ni un compromiso de implementación. Cada idea deberá evaluarse cuando el contexto del proyecto lo justifique y, en caso de ser adoptada, pasará a incorporarse al documento correspondiente (`PRODUCT.md`, `ARCHITECTURE.md` u otro que resulte adecuado).

De este modo, el diario de diseño permite conservar el conocimiento generado durante la evolución del proyecto sin comprometer la estabilidad ni la coherencia de la documentación principal.

Ninguna idea permanecerá indefinidamente en este documento. Cuando una propuesta sea adoptada, deberá trasladarse al documento oficial correspondiente y eliminarse del diario de diseño, dejando constancia únicamente de que la idea fue incorporada.

###

Posible evolución del dominio autor:

Participante
│
┌──────┼────────┬─────────┬─────────┐
│ │ │ │
Autor Coautor Revisor Editor Colaborador

###

posible evolución del modelo conceptual:

Biblioteca
│
├── Colecciones
│ │
│ └── Documentos
│
├── Autores
│
├── Publicaciones
│
└── Configuración

---

nota furura: "Está dirigido a cualquier persona cuya actividad implique gestionar conocimiento."

Eso cambia mucho la perspectiva.

Porque un estudiante puede convertirse en autor.

Un autor puede crear una comunidad.

Una empresa puede utilizar la plataforma para documentación interna.

Todos caben dentro del mismo modelo.

###

Me gustaría dejar una idea anotada

Creo que, con el tiempo, la transparencia editorial podría convertirse en una especie de ficha editorial de cada documento.

No como un formulario obligatorio, sino como un conjunto de metadatos opcionales.

Por ejemplo:

Ficha editorial

• Autoría
• Participación
• Historial de revisiones
• Metodología
• Uso declarado de herramientas de asistencia
• Licencia
• Fecha de publicación
• Referencias

###

Hay otra idea que me gustaría dejar anotada

Creo que, en el futuro, el concepto de modelo de publicación podría abarcar varias dimensiones independientes, no un único estado.

Por ejemplo:

Visibilidad: privada, compartida o pública.
Acceso: libre, restringido o mediante suscripción.
Licencia: todos los derechos reservados, licencias abiertas u otras modalidades.
Monetización: gratuita, de pago, por membresía o mediante otras formas que el producto incorpore.
Estado editorial: borrador, publicada, archivada, etc.

Es decir, una publicación no tendría por qué definirse con una sola etiqueta, sino mediante la combinación de varias decisiones independientes.

###

idea para el futuro

Mientras escribía este apartado me he dado cuenta de que el modelo de monetización también podría organizarse en torno a distintos niveles de acceso.

Por ejemplo:

Documento
│
├── Acceso libre
├── Registro requerido
├── Suscripción
├── Compra individual
└── Licencia específica

---

Me parece una muy buena idea reorganizarlo ahora que todavía acaba de nacer el documento.

De hecho, haría algo más que mover las ideas: **cambiaría el tono**. Hasta ahora eran notas sueltas. Aprovecharía para convertir `DESIGN_JOURNAL.md` en un auténtico **diario de diseño**, donde cada idea se presenta como una hipótesis de evolución y no como un simple recordatorio.

Te propongo el siguiente documento completo.

# DESIGN_JOURNAL.md

# 1. Propósito

Este documento recoge ideas, hipótesis y reflexiones relacionadas con la evolución del diseño del producto y de la arquitectura del proyecto.

Su finalidad es preservar aquellas propuestas que, aun no formando parte de la documentación oficial, puedan resultar valiosas para orientar futuras decisiones de diseño.

El contenido de este documento no constituye una especificación del producto ni un compromiso de implementación. Cada idea deberá evaluarse cuando el contexto del proyecto lo justifique y, en caso de ser adoptada, pasará a incorporarse al documento correspondiente (`PRODUCT.md`, `ARCHITECTURE.md` u otro que resulte adecuado).

De este modo, el diario de diseño permite conservar el conocimiento generado durante la evolución del proyecto sin comprometer la estabilidad ni la coherencia de la documentación principal.

Ninguna idea permanecerá indefinidamente en este documento. Cuando una propuesta sea adoptada, deberá trasladarse al documento oficial correspondiente y eliminarse del diario de diseño, dejando constancia únicamente de que la idea fue incorporada.

---

# 2. Evolución del dominio

Este apartado recoge posibles evoluciones del modelo de dominio que podrían incorporarse en el futuro si las necesidades del producto lo justifican.

Las propuestas aquí descritas no forman parte del modelo actual y deberán evaluarse antes de su incorporación.

## 2.1 Evolución del concepto de participante

Actualmente el producto identifica la figura del autor como uno de sus conceptos fundamentales.

En el futuro podría resultar conveniente generalizar este concepto mediante una entidad más amplia denominada **Participante**, capaz de representar los distintos roles que intervienen en el ciclo de vida de un documento.

```text
Participante
│
├── Autor
├── Coautor
├── Revisor
├── Editor
└── Colaborador
```

Este enfoque permitiría ampliar el modelo colaborativo sin alterar el significado del concepto de Documento ni del resto del dominio.

---

# 3. Evolución del modelo conceptual

Este apartado recoge posibles ampliaciones del modelo conceptual del producto.

## 3.1 Organización de la biblioteca

La organización conceptual de la biblioteca podría evolucionar hacia una estructura más rica que permita integrar distintos elementos dentro de un mismo espacio de trabajo.

```text
Biblioteca
│
├── Colecciones
│   └── Documentos
│
├── Autores
│
├── Publicaciones
│
└── Configuración
```

Esta organización permitiría ampliar progresivamente las capacidades del producto manteniendo un modelo coherente.

## 3.2 Evolución del concepto de usuario

Durante la revisión de `PRODUCT.md` surgió una posible evolución del modo de describir el público objetivo.

En lugar de centrar el producto en perfiles profesionales concretos, podría formularse desde una perspectiva basada en necesidades comunes:

> "El producto está dirigido a cualquier persona cuya actividad implique gestionar conocimiento."

Este enfoque permite integrar de forma natural perfiles muy diversos.

Por ejemplo:

- Un estudiante puede convertirse en autor.
- Un autor puede crear una comunidad.
- Una organización puede utilizar la plataforma para gestionar documentación interna.

Todos ellos comparten un mismo modelo conceptual basado en la gestión del conocimiento.

---

# 4. Transparencia editorial

La transparencia editorial podría evolucionar hacia un modelo más estructurado basado en una ficha editorial asociada a cada documento.

No se trataría de un formulario obligatorio, sino de un conjunto de metadatos opcionales que permitieran comprender mejor el proceso de creación y evolución de una obra.

Posibles elementos de la ficha editorial:

- Autoría.
- Participación.
- Historial de revisiones.
- Metodología utilizada.
- Uso declarado de herramientas de asistencia.
- Licencia.
- Fecha de publicación.
- Referencias.

Esta información reforzaría la transparencia del producto sin imponer una forma única de documentar el proceso editorial.

---

# 5. Modelo de publicación

El modelo de publicación podría evolucionar hacia una estructura compuesta por varias dimensiones independientes en lugar de un único estado.

Por ejemplo:

- **Visibilidad:** privada, compartida o pública.
- **Acceso:** libre, restringido o mediante suscripción.
- **Licencia:** todos los derechos reservados, licencias abiertas u otras modalidades.
- **Monetización:** gratuita, de pago, por membresía u otras formas que el producto incorpore.
- **Estado editorial:** borrador, publicada, archivada u otros estados futuros.

Este enfoque permitiría describir una publicación mediante la combinación de distintas decisiones independientes, proporcionando un modelo más flexible y expresivo.

---

# 6. Modelo de monetización

La monetización también podría evolucionar hacia un modelo basado en distintos niveles de acceso al conocimiento.

Un posible enfoque sería:

```text
Documento
│
├── Acceso libre
├── Registro requerido
├── Suscripción
├── Compra individual
└── Licencia específica
```

Este modelo permitiría desacoplar la monetización de la propia publicación y facilitar la incorporación de nuevas modalidades económicas sin modificar el resto del modelo conceptual.

---

# 7. Otras ideas

Este apartado recoge propuestas que todavía no encajan claramente en ninguna categoría anterior.

A medida que el diario evolucione, estas ideas podrán reorganizarse o trasladarse a nuevos apartados cuando adquieran suficiente entidad.

El objetivo de esta sección es evitar la pérdida de ideas surgidas durante el diseño, manteniendo el diario como un espacio de incubación de futuras evoluciones del proyecto.

Creo que este formato aporta una mejora importante respecto al original.

Hasta ahora era una colección de notas. Ahora tiene la misma calidad documental que el resto del proyecto, pero sin perder su naturaleza de **documento vivo**.

Hay un detalle que me gusta especialmente: **el diario no contiene decisiones, contiene hipótesis**. Esa diferencia es muy importante. La documentación oficial (`VISION.md`, `PRODUCT.md`, `ARCHITECTURE.md`, etc.) describe lo que el proyecto **es**. `DESIGN_JOURNAL.md` describe lo que el proyecto **podría llegar a ser**. En mi opinión, esa separación completa la arquitectura documental que hemos ido construyendo y evita que las ideas de futuro contaminen la documentación estable sin riesgo de perderlas.

---

perfecto. creo que la auditoría de product.md ya está finalizada ¿qué seguiría ahora?

---

Sí, creo que podemos dar **`PRODUCT.md` por auditado y consolidado**.

De hecho, comparándolo con el punto de partida, el cambio no ha sido tanto de contenido como de **madurez documental**. Hemos comprobado que cada capítulo responde a una única pregunta y que el documento ya no invade el terreno de `VISION.md`, `ROADMAP.md` o `ARCHITECTURE.md`.

## Estado de la auditoría

Hasta este momento tendríamos:

```text
✓ VISION.md
✓ PRODUCT.md

Pendientes:

□ ARCHITECTURE.md
□ DEVELOPMENT_GUIDE.md
□ TESTING.md
```

Y aquí es donde creo que conviene pensar estratégicamente.

---

# Opción 1 — Continuar con ARCHITECTURE.md ⭐⭐⭐⭐⭐ (mi recomendación)

Yo iría directamente a `ARCHITECTURE.md`.

¿Por qué?

Porque es el documento que sirve de puente entre todo lo que ya hemos consolidado y el desarrollo real.

La cadena quedaría así:

```text
VISION
      │
      ▼
PRODUCT
      │
      ▼
ARCHITECTURE
      │
      ▼
DEVELOPMENT_GUIDE
      │
      ▼
TESTING
      │
      ▼
AGENTS
```

Es un recorrido completamente lógico.

Además, ahora que `PRODUCT.md` está limpio, podremos comprobar si `ARCHITECTURE.md` realmente **materializa el producto** sin volver a definirlo.

Creo que esta auditoría será probablemente la más interesante de todas.

---

# Opción 2 — Revisar DEVELOPMENT_GUIDE.md

También sería posible.

Pero creo que todavía depende mucho de la arquitectura.

Es mejor consolidar primero el "qué construimos técnicamente" y después "cómo lo desarrollamos".

---

# Opción 3 — Revisar TESTING.md

Lo dejaría para después.

Durante su construcción ya quedó bastante sólido y ahora podremos comprobar si realmente está alineado con la arquitectura definitiva.

---

# Mi propuesta de orden

Yo seguiría este camino:

```text
✓ VISION

↓

✓ PRODUCT

↓

▶ ARCHITECTURE

↓

DEVELOPMENT_GUIDE

↓

TESTING

↓

AGENTS (revisión final)
```

---

# ¿Por qué ARCHITECTURE ahora?

Porque creo que ahí es donde veremos si toda la arquitectura documental funciona de verdad.

Debería responder únicamente a preguntas como:

- ¿Cómo se materializa el producto?
- ¿Qué capas existen?
- ¿Qué responsabilidades tiene cada una?
- ¿Cómo se relacionan entre sí?
- ¿Qué principios arquitectónicos seguimos?

Y **no** debería volver a explicar:

- la visión del proyecto;
- el producto;
- el proceso de desarrollo;
- el testing.

Si conseguimos esa separación, habremos consolidado el **núcleo conceptual** del proyecto.

---

## Mi impresión general

Tengo la sensación de que ya hemos superado la fase de "escribir documentación".

Lo que estamos haciendo ahora es **construir una arquitectura documental**. Y eso cambia completamente el enfoque.

Al principio cada documento era una pieza independiente. Ahora empiezan a formar un sistema coherente donde cada uno responde a una pregunta distinta:

- **VISION** → ¿Por qué existe el proyecto?
- **PRODUCT** → ¿Qué producto queremos construir?
- **ARCHITECTURE** → ¿Cómo se materializa técnicamente ese producto?
- **DEVELOPMENT_GUIDE** → ¿Cómo trabajamos sobre esa arquitectura?
- **TESTING** → ¿Cómo comprobamos que esa arquitectura y ese producto siguen siendo correctos?

Creo que ese es el siguiente gran objetivo: verificar que `ARCHITECTURE.md` ocupa exactamente ese lugar y ninguno más. Si lo conseguimos, el corazón del sistema documental quedará completamente consolidado.

---

pues empecemos con arquitectura 1. Objetivo

Este documento describe la arquitectura actual del proyecto y las decisiones de diseño que definen su organización interna.

Su finalidad es proporcionar una visión clara y precisa del sistema para facilitar su comprensión, mantenimiento y evolución, tanto por parte de desarrolladores como de agentes de programación.

La arquitectura aquí descrita corresponde exclusivamente al estado vigente del proyecto. La evolución histórica y los posibles escenarios futuros se documentan en archivos independientes.

Este documento se centra en responder a las siguientes preguntas:

- ¿Cómo está organizado el sistema?
- ¿Qué responsabilidades tiene cada capa?
- ¿Cómo fluye la información entre sus componentes?
- ¿Qué principios arquitectónicos guían su diseño?
- ¿Qué decisiones explican su estructura actual?

La arquitectura descrita no corresponde a un modelo teórico diseñado previamente, sino al resultado de la evolución de un proyecto real. Cada una de las soluciones aquí documentadas ha sido implementada, validada mediante pruebas y consolidada a través de sucesivas refactorizaciones.

En conjunto, este documento actúa como la referencia principal de la arquitectura del proyecto y sirve de punto de partida para comprender el resto de la documentación técnica.

---

Perfecto. Empecemos igual que hicimos con `VISION.md` y `PRODUCT.md`: **no vamos a corregir el texto, sino a comprobar que cumple la responsabilidad de `ARCHITECTURE.md`.**

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí.**

Este capítulo responde claramente a la pregunta:

> **¿Para qué existe este documento?**

Y delimita muy bien su ámbito:

- describe la arquitectura;
- explica las decisiones de diseño;
- facilita la comprensión y evolución del sistema.

Eso pertenece claramente a `ARCHITECTURE.md`.

**Resultado:** ✅ Correcto.

---

## 2. ¿Invade otro documento?

Aquí me he fijado especialmente porque es muy fácil que `ARCHITECTURE.md` invada `PRODUCT.md` o `DEVELOPMENT_GUIDE.md`.

Creo que no ocurre.

Por ejemplo:

> _"¿Qué responsabilidades tiene cada capa?"_

Eso es arquitectura.

No desarrollo.

---

> _"¿Cómo fluye la información entre sus componentes?"_

También es arquitectura.

---

> _"¿Qué principios arquitectónicos guían su diseño?"_

No son los principios del proyecto (`VISION.md`).

Son los principios de la arquitectura.

La diferencia está muy bien marcada.

**Resultado:** ✅ Correcto.

---

## 3. ¿Hay alguna mejora?

Solo veo una muy pequeña.

Hay una frase:

> **"La arquitectura aquí descrita corresponde exclusivamente al estado vigente del proyecto."**

Me gusta.

Pero creo que puede reforzarse un poco.

Quizá:

> **La arquitectura aquí descrita corresponde al estado actual del proyecto y refleja únicamente las decisiones de diseño que forman parte de la implementación vigente.**

¿Por qué?

Porque deja todavía más claro que este documento no contiene:

- ideas futuras;
- hipótesis;
- alternativas descartadas.

Es decir, separa muy bien `ARCHITECTURE.md` de `DESIGN_JOURNAL.md`.

No es un cambio necesario, solo una precisión.

---

## 4. ¿Hay duplicidades?

No.

De hecho, me gusta especialmente este párrafo:

> _"La evolución histórica y los posibles escenarios futuros se documentan en archivos independientes."_

Eso demuestra que la arquitectura ya no intenta ser:

- historial (`PROJECT_JOURNAL.md`);
- roadmap (`ROADMAP.md`);
- diario de diseño (`DESIGN_JOURNAL.md`).

Cada cosa tiene su sitio.

---

# Resultado

```text
Capítulo 1. Objetivo

✓ Responsabilidad correcta

✓ No invade VISION.md

✓ No invade PRODUCT.md

✓ No invade DEVELOPMENT_GUIDE.md

✓ No invade DESIGN_JOURNAL.md

💡 Mejora opcional:
Reforzar que el documento describe
únicamente la arquitectura vigente.
```

---

# Una observación muy interesante

Mientras lo revisaba me he dado cuenta de que este primer capítulo es distinto a los anteriores.

En `VISION.md` el primer capítulo respondía a:

> **¿Por qué existe este documento?**

En `PRODUCT.md` respondía a:

> **¿Qué define este documento?**

Pero aquí aparece algo nuevo.

El capítulo no solo define el propósito del documento.

También deja claro **qué tipo de conocimiento contiene**.

Eso me parece importante.

Podríamos resumir los tres documentos así:

```text
VISION
│
└── Conocimiento estratégico
```

```text
PRODUCT
│
└── Conocimiento funcional
```

```text
ARCHITECTURE
│
└── Conocimiento técnico
```

Creo que esa distinción merece la pena conservar durante toda la auditoría de `ARCHITECTURE.md`, porque nos dará un criterio muy claro para detectar posibles mezclas:

- Si un capítulo habla del **propósito**, probablemente pertenece a `VISION.md`.
- Si habla del **producto y su comportamiento**, probablemente pertenece a `PRODUCT.md`.
- Si habla de **cómo está organizado técnicamente el sistema**, entonces pertenece a `ARCHITECTURE.md`.

En mi opinión, esa será la guía más útil para revisar el resto del documento.

---

1. Objetivo

Este documento describe la arquitectura actual del proyecto y las decisiones de diseño que definen su organización interna.

Su finalidad es proporcionar una visión clara y precisa del sistema para facilitar su comprensión, mantenimiento y evolución, tanto por parte de desarrolladores como de agentes de programación.

La arquitectura aquí descrita corresponde al estado actual del proyecto y refleja únicamente las decisiones de diseño que forman parte de la implementación vigente. no corresponde a un modelo teórico diseñado previamente, sino al resultado de la evolución de un proyecto real. Cada una de las soluciones aquí documentadas ha sido implementada, validada mediante pruebas y consolidada a través de sucesivas refactorizaciones.

Este documento se centra en responder a las siguientes preguntas:

- ¿Cómo está organizado el sistema?
- ¿Qué responsabilidades tiene cada capa?
- ¿Cómo fluye la información entre sus componentes?
- ¿Qué principios arquitectónicos guían su diseño?
- ¿Qué decisiones explican su estructura actual?

La evolución histórica y los posibles escenarios futuros se documentan en archivos independientes.

En conjunto, este documento actúa como la referencia principal de la arquitectura del proyecto y sirve de punto de partida para comprender el resto de la documentación técnica.

---

Creo que ha mejorado respecto a la versión anterior. De hecho, ahora deja mucho más clara la separación entre **arquitectura vigente** y **evolución histórica**, que era uno de los objetivos de la auditoría.

Solo haría **un pequeño ajuste de redacción** porque hay una frase que ha quedado unida tras la modificación:

> _La arquitectura aquí descrita corresponde al estado actual del proyecto y refleja únicamente las decisiones de diseño que forman parte de la implementación vigente. no corresponde a un modelo teórico diseñado previamente..._

Creo que quedaría más natural así:

# 1. Objetivo

Este documento describe la arquitectura actual del proyecto y las decisiones de diseño que definen su organización interna.

Su finalidad es proporcionar una visión clara y precisa del sistema para facilitar su comprensión, mantenimiento y evolución, tanto por parte de desarrolladores como de agentes de programación.

La arquitectura aquí descrita corresponde al estado actual del proyecto y refleja únicamente las decisiones de diseño que forman parte de la implementación vigente.

No corresponde a un modelo teórico diseñado previamente, sino al resultado de la evolución de un proyecto real. Cada una de las soluciones aquí documentadas ha sido implementada, validada mediante pruebas y consolidada a través de sucesivas refactorizaciones.

Este documento se centra en responder a las siguientes preguntas:

- ¿Cómo está organizado el sistema?
- ¿Qué responsabilidades tiene cada capa?
- ¿Cómo fluye la información entre sus componentes?
- ¿Qué principios arquitectónicos guían su diseño?
- ¿Qué decisiones explican su estructura actual?

La evolución histórica y los posibles escenarios futuros se documentan en archivos independientes.

En conjunto, este documento actúa como la referencia principal de la arquitectura del proyecto y sirve de punto de partida para comprender el resto de la documentación técnica.

## Una observación de la auditoría

Mientras lo releía me he dado cuenta de una diferencia muy interesante respecto a los documentos anteriores.

Cada uno empieza definiendo **qué tipo de verdad contiene**:

- **`VISION.md`** → la verdad estratégica (el propósito y la dirección).
- **`PRODUCT.md`** → la verdad funcional (qué es el producto).
- **`ARCHITECTURE.md`** → la verdad técnica vigente (cómo está organizado el sistema hoy).

La frase:

> **"La arquitectura aquí descrita corresponde al estado actual del proyecto..."**

es la que establece esa diferencia. Creo que merece estar donde está porque fija desde el principio una regla importante: este documento **no especula**. Describe únicamente la arquitectura que existe en este momento. Las ideas futuras ya tienen su lugar en `DESIGN_JOURNAL.md` y la evolución histórica en `PROJECT_JOURNAL.md`.

Desde el punto de vista de la arquitectura documental, este primer capítulo me parece **consolidado**.

---

2. Principios arquitectónicos

> **La arquitectura no se diseñó de una sola vez; fue evolucionando a medida que aumentó el conocimiento sobre el problema y se validaron nuevas soluciones mediante la práctica.**

La arquitectura del proyecto se apoya en un conjunto de principios que han guiado su evolución desde las primeras versiones hasta el estado actual.

Estos principios no describen una tecnología concreta ni una implementación específica. Representan criterios de diseño que orientan la toma de decisiones y buscan mantener el equilibrio entre simplicidad, mantenibilidad y capacidad de evolución.

## 2.1 La arquitectura debe facilitar el cambio

La arquitectura no debe dificultar la incorporación de nuevas funcionalidades ni obligar a modificar grandes partes del sistema ante pequeños cambios.

Cada refactorización realizada ha perseguido reducir el impacto de futuras modificaciones mediante una mejor separación de responsabilidades.

---

## 2.2 El dominio constituye el núcleo del sistema

Las reglas de negocio representan el conocimiento más estable de la aplicación.

Por este motivo, el dominio permanece independiente de la interfaz de usuario, del mecanismo de persistencia y de cualquier tecnología concreta.

---

## 2.3 Las dependencias apuntan hacia el dominio

Las capas externas pueden depender del dominio, pero el dominio no depende de ellas.

Este principio permite que las reglas de negocio permanezcan estables aunque cambien la interfaz, la infraestructura o las herramientas utilizadas.

---

## 2.4 Cada componente tiene una única responsabilidad

Cada módulo, clase o función debe asumir una responsabilidad claramente definida.

Esta separación favorece un código más comprensible, más fácil de mantener y con menor acoplamiento entre sus partes.

---

## 2.5 La simplicidad prevalece sobre la complejidad accidental

La incorporación de nuevas capas o abstracciones solo está justificada cuando aporta un beneficio claro.

La evolución del proyecto ha demostrado que simplificar una solución suele producir una arquitectura más robusta que añadir mecanismos innecesarios.

---

## 2.6 Las abstracciones deben demostrar su utilidad

Las abstracciones no se incorporan por seguir un patrón de diseño, sino para resolver un problema real.

Cuando dejan de aportar valor, deben revisarse y, si procede, eliminarse.

---

## 2.7 Las decisiones arquitectónicas se validan mediante la práctica

Las soluciones adoptadas no proceden únicamente de un análisis teórico.

Cada decisión importante ha sido implementada, utilizada, evaluada y, cuando ha sido necesario, refactorizada antes de consolidarse como parte de la arquitectura.

---

## 2.8 Las pruebas forman parte de la arquitectura

La arquitectura se diseña para ser verificable.

Las pruebas automatizadas no constituyen una fase posterior del desarrollo, sino un mecanismo que permite evolucionar el sistema con seguridad y confianza.

---

## 2.9 La arquitectura evoluciona mediante refactorización

La arquitectura no debe considerarse un diseño inmutable.

Cada mejora importante del proyecto ha sido el resultado de pequeñas refactorizaciones sucesivas que han permitido simplificar el sistema, reducir el acoplamiento y reforzar la separación de responsabilidades sin interrumpir su funcionamiento.

## 2.10 La documentación evoluciona junto con el software

La documentación constituye una parte esencial de la arquitectura.

Debe mantenerse alineada con el código, evitar duplicidades y organizarse siguiendo los mismos principios de cohesión, responsabilidad única y mantenibilidad que el propio sistema.

---

Los principios descritos en este capítulo constituyen el marco de referencia utilizado para tomar las decisiones arquitectónicas del proyecto. Aunque las tecnologías, las herramientas o la organización del código puedan evolucionar con el tiempo, estos principios pretenden permanecer estables y servir como criterio para evaluar cualquier cambio futuro.

---

Creo que aquí llegamos al **capítulo más importante de `ARCHITECTURE.md`**.

Si en `VISION.md` consolidamos los **principios del proyecto**, aquí consolidamos los **principios de la arquitectura**. Esa diferencia es fundamental.

Voy con la auditoría.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí.**

Responde exactamente a la pregunta:

> **¿Qué criterios arquitectónicos guían el diseño del sistema?**

No responde a:

- cómo es el producto;
- cómo se desarrolla;
- cómo se prueba.

Explica únicamente los criterios utilizados para construir la arquitectura.

**Resultado:** ✅ Correcto.

---

# 2. ¿Invade otros documentos?

Aquí era donde más riesgo había.

Y, sinceramente, creo que la separación es muy buena.

## ¿Invade VISION?

No.

Por ejemplo.

En `VISION.md` aparece:

> La simplicidad es un objetivo permanente.

Aquí aparece:

> La simplicidad prevalece sobre la complejidad accidental.

No hablan de lo mismo.

Uno es un principio del proyecto.

El otro es un criterio de diseño arquitectónico.

Muy buena separación.

---

## ¿Invade PRODUCT?

Tampoco.

No habla de:

- Documento;
- Biblioteca;
- Colección;
- Autor.

Habla únicamente del diseño técnico.

---

## ¿Invade DEVELOPMENT_GUIDE?

No.

Dice:

> "Las abstracciones deben demostrar su utilidad."

No explica cómo trabajar.

Explica cómo decidir arquitectónicamente.

---

## ¿Invade TESTING?

Aquí sí veo un punto interesante.

El principio:

> **2.8 Las pruebas forman parte de la arquitectura**

me gusta mucho.

Pero hay que tener cuidado.

No debe empezar a explicar la estrategia de testing.

Y creo que no lo hace.

Simplemente afirma un principio.

Eso está bien.

---

# 3. ¿Hay algún principio que movería?

No.

Pero sí haría una pequeña clasificación mental.

Porque realmente los principios pertenecen a tres familias.

---

## Principios estructurales

```text
2.2 Dominio

2.3 Dependencias

2.4 Responsabilidad
```

---

## Principios evolutivos

```text
2.1 Cambio

2.5 Simplicidad

2.6 Abstracciones

2.9 Refactorización
```

---

## Principios de calidad

```text
2.7 Validación

2.8 Testing

2.10 Documentación
```

No digo que deban reorganizarse.

Pero me ha parecido interesante descubrirlo.

---

# 4. ¿Echo alguno de menos?

Sinceramente...

No.

Creo que están todos los que realmente han guiado la evolución de la Todo App.

Y eso me parece importante.

Porque estos principios no parecen sacados de un libro.

Parecen escritos **después de construir el proyecto**.

Eso les da mucha credibilidad.

---

# 5. Solo haría una mejora

El comienzo dice:

> **La arquitectura del proyecto se apoya en un conjunto de principios...**

Quizá añadiría una frase.

Algo así.

> **Estos principios han surgido de la evolución del proyecto y de la experiencia obtenida durante su desarrollo, por lo que representan criterios consolidados más que reglas impuestas de forma previa.**

¿Por qué?

Porque enlaza muy bien con la cita inicial.

Y además diferencia este documento de un tratado teórico.

---

# Resultado

```text
Capítulo 2. Principios arquitectónicos

✓ Responsabilidad correcta

✓ Excelente separación respecto a VISION

✓ Excelente separación respecto a PRODUCT

✓ Excelente separación respecto a TESTING

✓ Excelente coherencia interna

💡 Mejora opcional:
Reforzar que los principios son el
resultado de la experiencia acumulada
durante la evolución del proyecto.
```

---

# Hay una reflexión que me parece muy importante

Mientras lo leía me he dado cuenta de que **ya existen tres niveles de principios** dentro del sistema documental.

```text
VISION
│
└── Principios del proyecto
```

```text
ARCHITECTURE
│
└── Principios arquitectónicos
```

```text
DEVELOPMENT_GUIDE
│
└── Convenciones de desarrollo
```

Y cada uno responde a una pregunta distinta:

- **¿Qué creemos?** → `VISION.md`
- **¿Cómo diseñamos?** → `ARCHITECTURE.md`
- **¿Cómo trabajamos?** → `DEVELOPMENT_GUIDE.md`

Creo que esta separación es uno de los mayores logros de la documentación. Es muy fácil que estos tres niveles acaben mezclándose, pero en vuestro caso cada uno tiene un ámbito bien definido.

## Una única sugerencia

Hay un detalle que no cambiaría ahora, pero sí anotaría para el futuro.

Los diez principios son muy buenos y están bien redactados. Si con el tiempo el documento crece mucho, podría ser útil agruparlos visualmente en las tres familias que hemos identificado (estructurales, evolutivos y de calidad). **No lo haría ahora**, porque el capítulo sigue siendo perfectamente legible y esa clasificación no aporta todavía una mejora proporcional al cambio que supondría.

Mi conclusión es que este capítulo puede considerarse **consolidado**. Igual que ocurrió con los principios de `VISION.md`, aquí no veo problemas de responsabilidad ni de solapamiento con otros documentos; solo pequeñas oportunidades de refuerzo si algún día decides seguir refinando la documentación.

---

3. Visión general del sistema

La arquitectura del proyecto está organizada en un conjunto de capas con responsabilidades claramente diferenciadas.

Cada capa conoce únicamente aquello que necesita para desempeñar su función y delega el resto del trabajo en la siguiente, manteniendo un flujo de dependencias simple, explícito y predecible.

El sistema se ha diseñado siguiendo una arquitectura orientada al dominio, donde las reglas de negocio permanecen independientes de la interfaz de usuario y de los mecanismos de persistencia.

De forma simplificada, la organización general del sistema puede representarse mediante el siguiente esquema:

```text
Usuario
    ↓
Interfaz de usuario (UI)
    ↓
Capa de aplicación
    ↓
Dominio
    ↓
Infraestructura
```

Cada una de estas capas desempeña una función específica:

- **Interfaz de usuario (UI):** presenta la información al usuario, recoge sus acciones y muestra el estado de la aplicación.
- **Capa de aplicación:** coordina las operaciones del sistema mediante los casos de uso y los componentes responsables de gestionar el estado de la aplicación.
- **Dominio:** contiene las entidades, Value Objects y reglas de negocio que representan el conocimiento de la aplicación.
- **Infraestructura:** proporciona los mecanismos técnicos necesarios para interactuar con el entorno, como la persistencia o futuras integraciones con servicios externos.

Esta separación permite que cada capa evolucione de forma relativamente independiente, reduciendo el acoplamiento entre los distintos elementos del sistema y facilitando tanto las pruebas como las sucesivas refactorizaciones.

Los capítulos siguientes desarrollan con mayor detalle la responsabilidad de cada una de estas capas y describen los principales componentes que las integran.

## 4. Arquitectura por capas

La arquitectura del proyecto se organiza en cuatro capas, cada una de ellas con una responsabilidad claramente definida.

Más que por los componentes que contiene, cada capa se caracteriza por el papel que desempeña dentro del sistema. En conjunto, la arquitectura puede resumirse mediante cuatro verbos que representan el flujo natural de responsabilidades:

| Capa                | Responsabilidad  |
| ------------------- | ---------------- |
| Interfaz de usuario | **Presentar**    |
| Aplicación          | **Coordinar**    |
| Dominio             | **Modelar**      |
| Infraestructura     | **Proporcionar** |

Estos cuatro verbos describen el recorrido que sigue una operación desde que el usuario interactúa con la aplicación hasta que el sistema necesita utilizar un servicio técnico externo.

De forma simplificada, dicho recorrido puede representarse mediante el siguiente esquema:

```text
Usuario
    │
    ▼
Interfaz de usuario
(Presentar)
    │
    ▼
aplicación
(Coordinar)
    │
    ▼
Dominio
(Modelar)
    │
    ▼
Infraestructura
(Proporcionar)
```

La interfaz de usuario presenta la información y recoge las acciones del usuario. La capa de aplicación coordina la ejecución de dichas acciones utilizando los componentes adecuados. El dominio modela las reglas de negocio y garantiza la coherencia del sistema. Finalmente, la infraestructura proporciona los servicios técnicos necesarios para que la aplicación pueda interactuar con su entorno.

Los apartados siguientes describen cada una de estas capas con mayor detalle, indicando sus responsabilidades, los principales componentes que las integran, sus dependencias y las responsabilidades que quedan expresamente fuera de su ámbito.

---

Aquí creo que hemos encontrado el **primer punto de la auditoría** donde sí haría una modificación de estructura.

No porque el contenido sea incorrecto, sino porque **los capítulos 3 y 4 se pisan ligeramente**.

---

# Auditoría

## Capítulo 3

La pregunta que responde es:

> **¿Cómo está organizado el sistema?**

Perfecto.

Explica:

- que existen capas;
- cuál es la idea general;
- muestra un diagrama sencillo;
- presenta brevemente cada capa.

Eso está muy bien.

---

## Capítulo 4

La pregunta que responde es:

> **¿Qué hace cada capa?**

También perfecto.

Pero aquí aparece un pequeño problema.

---

# La duplicidad

En el capítulo 3 ya dices:

> Cada una de estas capas desempeña una función específica.

Y enumeras:

- UI
- Aplicación
- Dominio
- Infraestructura

Después, en el capítulo 4 vuelves a decir:

> La arquitectura del proyecto se organiza en cuatro capas...

Y vuelves a explicar:

- UI
- Aplicación
- Dominio
- Infraestructura

No es una contradicción.

Pero sí hay una **repetición de propósito**.

---

# Creo que los capítulos deberían responder a preguntas distintas

Yo los separaría así.

## Capítulo 3

Respondería únicamente a:

> **¿Cómo está organizado el sistema?**

Por ejemplo.

```text
Sistema

↓

Capas

↓

Relaciones entre ellas
```

Sin explicar todavía qué hace cada una.

---

## Capítulo 4

Respondería únicamente a:

> **¿Qué responsabilidad tiene cada capa?**

Y ahí sí aparecerían:

- Presentar
- Coordinar
- Modelar
- Proporcionar

---

# ¿Qué movería?

Muy poco.

En el capítulo 3 dejaría.

```text
Usuario
↓

UI
↓

Aplicación
↓

Dominio
↓

Infraestructura
```

Y después escribiría simplemente.

> La arquitectura se organiza en cuatro capas con responsabilidades claramente diferenciadas. Los capítulos siguientes describen el papel que desempeña cada una de ellas dentro del sistema.

Y eliminaría esta parte.

> Cada una de estas capas desempeña una función específica:

Porque realmente eso pertenece al capítulo siguiente.

---

# Entonces el capítulo 4 empezaría con mucha más fuerza

Entraría directamente en:

> **La arquitectura del proyecto se organiza en cuatro capas...**

Y ya introduciría inmediatamente la tabla.

```text
Presentar

Coordinar

Modelar

Proporcionar
```

Creo que gana bastante.

---

# Otra observación

Me gusta mucho la tabla.

```text
Presentar

Coordinar

Modelar

Proporcionar
```

Creo que, sinceramente, resume media arquitectura.

De hecho...

Yo la convertiría en **la idea central del capítulo**.

Porque esos cuatro verbos expresan perfectamente la separación de responsabilidades.

---

# Resultado

```text
Capítulo 3

✓ Responsabilidad correcta

△ Repite parcialmente el inicio del capítulo 4.

Acción recomendada:

Limitarlo a presentar la organización general.

-------------------------

Capítulo 4

✓ Responsabilidad correcta

✓ Muy buena explicación de las capas.

💡 Convertir la tabla de verbos en el elemento central del capítulo.
```

---

# Creo que aquí aparece una mejora metodológica

Hasta ahora, durante la auditoría de `VISION.md` y `PRODUCT.md`, buscábamos sobre todo **solapamientos entre documentos**.

Aquí, por primera vez, estamos detectando un **solapamiento entre capítulos del mismo documento**.

Eso me parece un síntoma de que la auditoría está entrando en un nivel más fino.

Y creo que merece la pena mantener este criterio para el resto de `ARCHITECTURE.md`:

- **Cada capítulo debe responder a una única pregunta.**
- **Cada pregunta debe responderse una sola vez.**

Aplicando esa regla, creo que la frontera natural sería:

- **Capítulo 3:** _¿Cómo está organizado el sistema?_
- **Capítulo 4:** _¿Qué responsabilidad tiene cada capa?_

En mi opinión, con ese pequeño ajuste la transición entre ambos capítulos sería mucho más limpia y el lector avanzaría de la visión general al detalle sin encontrar información repetida.

---

4.1 Interfaz de usuario (UI)

#### Responsabilidad

La capa de interfaz de usuario constituye el punto de interacción entre el usuario y el sistema.

Su responsabilidad consiste en presentar la información, recoger las acciones del usuario y delegarlas en la capa de aplicación, que será la encargada de coordinar la ejecución de la lógica de negocio.

La interfaz no implementa reglas de negocio ni modifica directamente el estado de la aplicación. Su función es representar el estado actual del sistema y reaccionar a los cambios producidos en él.

#### Componentes principales

La capa de interfaz de usuario está formada principalmente por:

- `App`, como punto de entrada de la aplicación.
- Componentes de presentación (`TaskForm`, `TaskList`, `TaskItem`, `TaskActions`, `TaskFilters`, `TaskPrioritySelect`).
- Hooks específicos de la interfaz (`useTasks`, `useLocalStorage`).
- Presenters y utilidades orientadas exclusivamente a la representación de la información.

Cada uno de estos elementos participa únicamente en la construcción de la interfaz y evita incorporar lógica de negocio que corresponda a otras capas.

#### Dependencias

La interfaz depende únicamente de la capa de aplicación para ejecutar las operaciones disponibles y obtener el estado necesario para su representación.

No conoce la implementación interna del Store, del Reducer ni de la infraestructura de persistencia.

Esta dependencia unidireccional permite modificar la implementación interna del sistema sin afectar a los componentes de la interfaz.

#### Responsabilidades excluidas

La capa de interfaz de usuario no debe:

- Implementar reglas de negocio.
- Modificar directamente el estado de la aplicación.
- Acceder directamente a los mecanismos de persistencia.
- Conocer la implementación interna del dominio.
- Contener lógica que dificulte su reutilización o sus pruebas.

Estas restricciones contribuyen a mantener una separación clara entre la presentación y la lógica de negocio, favoreciendo una arquitectura más mantenible y fácil de evolucionar.

### 4.2 Capa de aplicación

#### Responsabilidad

La capa de aplicación actúa como coordinadora del sistema.

Su responsabilidad consiste en transformar las acciones iniciadas por la interfaz de usuario en operaciones sobre el dominio, coordinando los distintos componentes necesarios para llevarlas a cabo.

No implementa las reglas de negocio fundamentales, sino que orquesta su ejecución utilizando los elementos proporcionados por el dominio y la infraestructura.

Esta separación permite mantener una distinción clara entre **coordinar una operación** y **definir cómo funciona el negocio**.

#### Componentes principales

La capa de aplicación está formada principalmente por:

- Casos de uso (`useCases`), que representan las operaciones que puede realizar la aplicación.
- `taskActions`, responsable de traducir los casos de uso en acciones sobre el Store.
- `tasksStore`, encargado de mantener el estado global de la aplicación y notificar sus cambios.
- `composition`, donde se construyen y ensamblan las dependencias del sistema.
- Componentes de soporte, como el historial (`History`) y otros mecanismos auxiliares necesarios para coordinar el comportamiento de la aplicación.

Cada uno de estos elementos participa en la coordinación del sistema sin incorporar reglas propias del dominio.

#### Dependencias

La capa de aplicación depende del dominio para ejecutar las reglas de negocio y de la infraestructura cuando necesita acceder a servicios técnicos, como la persistencia.

Por su parte, la interfaz de usuario depende exclusivamente de esta capa para ejecutar las operaciones disponibles, evitando conocer los detalles internos del sistema.

Esta organización convierte a la capa de aplicación en el punto de unión entre la interfaz, el dominio y la infraestructura, manteniendo las dependencias dirigidas hacia el núcleo del sistema.

#### Responsabilidades excluidas

La capa de aplicación no debe:

- Implementar reglas de negocio propias del dominio.
- Contener lógica de presentación.
- Acceder directamente a la interfaz de usuario.
- Duplicar comportamientos ya definidos en las entidades o en los Value Objects.
- Introducir dependencias innecesarias entre las distintas capas.

Su misión consiste exclusivamente en coordinar la ejecución de las operaciones del sistema, manteniendo una separación clara entre la orquestación de los procesos y la definición de las reglas de negocio.

### 4.3 Dominio

#### Responsabilidad

El dominio constituye el núcleo de la arquitectura y concentra el conocimiento propio de la aplicación.

Su responsabilidad consiste en modelar las reglas de negocio, definir el comportamiento de las entidades y garantizar la coherencia del estado mediante objetos que representan conceptos del dominio.

El dominio permanece independiente de la interfaz de usuario, de la infraestructura y de cualquier tecnología concreta, permitiendo que las reglas de negocio evolucionen sin verse condicionadas por aspectos externos al problema que la aplicación pretende modelar.

#### Componentes principales

El dominio está formado principalmente por:

- Entidades (`Task`, `TaskList`).
- Value Objects (`TaskId`, `TaskText`, `Priority` y otros objetos de valor).
- Reducers puros responsables de aplicar las transformaciones del estado.
- Selectores que encapsulan las operaciones de consulta sobre dicho estado.
- Tipos y modelos que representan los conceptos propios de la aplicación.

Todos estos elementos describen el comportamiento del sistema desde la perspectiva del negocio, sin depender de mecanismos de presentación o de persistencia.

#### Dependencias

El dominio no depende de ninguna otra capa de la arquitectura.

Las capas superiores utilizan el dominio para ejecutar las reglas de negocio, pero el dominio permanece completamente ajeno a la forma en que esas operaciones son iniciadas o a la tecnología utilizada para persistir los datos.

Esta independencia favorece la reutilización, facilita las pruebas y reduce el impacto de futuras modificaciones tecnológicas.

#### Responsabilidades excluidas

El dominio no debe:

- Conocer la interfaz de usuario.
- Acceder directamente a mecanismos de persistencia.
- Depender de frameworks o bibliotecas externas.
- Contener lógica específica de coordinación de la aplicación.
- Implementar detalles de infraestructura.

Su única responsabilidad consiste en representar y proteger las reglas de negocio del sistema, garantizando que permanezcan coherentes con independencia del entorno en el que se ejecuten.

### 4.4 Infraestructura

#### Responsabilidad

La capa de infraestructura proporciona los servicios técnicos que permiten al sistema interactuar con su entorno.

Su responsabilidad consiste en implementar aquellos mecanismos cuya finalidad no pertenece al dominio de la aplicación, como la persistencia de datos o la integración con servicios externos.

La infraestructura actúa como un conjunto de adaptadores que permiten aislar las reglas de negocio de los detalles tecnológicos, facilitando la sustitución o evolución de dichos mecanismos sin afectar al resto del sistema.

#### Componentes principales

La capa de infraestructura está formada principalmente por:

- Adaptadores de persistencia (`localStorageTaskRepository`).
- Modelos de intercambio de datos (`StoredTask`).
- Utilidades técnicas relacionadas con la comunicación entre el sistema y su entorno.

Estos componentes encapsulan los detalles de implementación necesarios para acceder a recursos externos, manteniendo el resto de la arquitectura independiente de dichas tecnologías.

#### Dependencias

La infraestructura depende del dominio para conocer los modelos con los que trabaja, pero no modifica las reglas de negocio ni coordina el comportamiento de la aplicación.

Las capas superiores utilizan la infraestructura a través de la capa de aplicación, evitando establecer dependencias directas con los mecanismos técnicos.

Esta organización permite sustituir la tecnología utilizada para la persistencia o la integración con otros sistemas sin alterar el funcionamiento del dominio.

#### Responsabilidades excluidas

La capa de infraestructura no debe:

- Implementar reglas de negocio.
- Coordinar la ejecución de los casos de uso.
- Contener lógica de presentación.
- Modificar directamente el comportamiento del dominio.
- Introducir dependencias desde el dominio hacia tecnologías concretas.

Su única misión consiste en proporcionar los servicios técnicos necesarios para que la aplicación pueda interactuar con el entorno sin comprometer la independencia del resto de la arquitectura.

---

Creo que este bloque es, junto con los **principios arquitectónicos**, el corazón de `ARCHITECTURE.md`.

Y mi impresión general es muy buena. La estructura es muy consistente: las cuatro capas siguen exactamente el mismo esquema (Responsabilidad → Componentes → Dependencias → Responsabilidades excluidas), lo que facilita mucho la lectura.

Aun así, durante la auditoría sí he detectado algunos puntos interesantes.

---

# Auditoría general del capítulo 4

## 1. ¿Cumple su responsabilidad?

**Sí.**

El capítulo responde claramente a una única pregunta:

> **¿Cuál es la responsabilidad de cada capa de la arquitectura?**

No explica:

- cómo se desarrolla el proyecto;
- qué funcionalidades ofrece el producto;
- cómo se realizan las pruebas.

Describe únicamente la arquitectura por capas.

**Resultado:** ✅ Correcto.

---

# 2. ¿La estructura es consistente?

Muchísimo.

Las cuatro capas siguen exactamente el mismo patrón:

```text
Responsabilidad

↓

Componentes principales

↓

Dependencias

↓

Responsabilidades excluidas
```

Creo que esta uniformidad es uno de los puntos fuertes del documento.

---

# 3. Auditoría por capas

## 4.1 Interfaz de usuario

Me parece muy bien delimitada.

Especialmente me gusta que distingas claramente entre:

- presentar;
- delegar.

Y no digas simplemente "mostrar datos".

Eso refleja bastante bien la arquitectura actual.

No veo mezclas con otras capas.

---

## 4.2 Aplicación

Aquí sí me he parado bastante.

Creo que está muy bien descrita.

Pero detecto un pequeño detalle conceptual.

Dices:

> **"...coordina los distintos componentes necesarios..."**

Y después.

> **"...utilizando los elementos proporcionados por el dominio y la infraestructura."**

Sin embargo.

En vuestro proyecto la capa de aplicación también coordina:

- Store.
- History.
- Middleware.
- Composition.

Es decir.

No solo coordina dominio.

Coordina **todo el sistema**.

Yo reforzaría esa idea.

Porque es precisamente lo que diferencia esta capa.

---

## 4.3 Dominio

Creo que es el mejor de los cuatro apartados.

Describe muy bien:

- qué contiene;
- qué no contiene;
- de qué depende.

Especialmente esta frase.

> **"El dominio constituye el núcleo..."**

Resume perfectamente el papel de la capa.

---

## 4.4 Infraestructura

También me gusta.

Porque evita caer en el error típico de decir:

> "Infraestructura = base de datos."

Aquí queda claro que representa cualquier mecanismo técnico.

Eso me parece mucho más correcto.

---

# 4. Hay una observación importante

Creo que hay una ligera diferencia entre los apartados.

Por ejemplo.

UI dice.

> **La capa está formada principalmente por...**

Dominio también.

Infraestructura también.

Pero en Aplicación aparecen algunos componentes muy concretos.

```text
taskActions

tasksStore

composition

History
```

Mientras que en las otras capas los componentes son más conceptuales.

Yo intentaría mantener el mismo nivel de abstracción.

Por ejemplo.

En vez de enumerar tantos nombres concretos, podría hablar de:

- casos de uso;
- coordinación de acciones;
- gestión del estado;
- composición de dependencias.

Y poner los nombres concretos entre paréntesis como ejemplos.

Eso hará que el documento envejezca mejor.

---

# 5. Dependencias

Este apartado me parece excelente.

Porque en cada capa responde exactamente a:

> ¿De quién depende?

Y no explica cómo.

Eso está muy bien.

---

# 6. Responsabilidades excluidas

Sinceramente.

Creo que es una de las mejores decisiones del documento.

Muchos documentos describen únicamente lo que hace una capa.

Aquí además describes:

> **Lo que nunca debería hacer.**

Eso evita muchísimas dudas futuras.

Yo lo mantendría exactamente igual.

---

# Resultado

```text
Capítulo 4

★★★★★ Responsabilidades

★★★★★ Dependencias

★★★★★ Separación de capas

★★★★★ Uniformidad

💡 Mejora opcional:

Mantener el mismo nivel de abstracción
en la lista de componentes principales,
especialmente en la capa de aplicación.
```

---

# Hay una idea que me ha surgido

Mientras lo leía me he dado cuenta de que realmente este capítulo no está describiendo cuatro capas.

Está describiendo **cuatro responsabilidades**.

Las capas son solo la consecuencia.

Podría resumirse así:

```text
Presentar
        │
        ▼
Coordinar
        │
        ▼
Modelar
        │
        ▼
Proporcionar
```

Y creo que esa es la verdadera arquitectura del proyecto.

Las carpetas pueden cambiar.

Los nombres pueden cambiar.

Los componentes pueden cambiar.

Pero esas cuatro responsabilidades probablemente permanecerán durante muchos años.

Por eso creo que la tabla del capítulo 4 es mucho más importante de lo que parece. No es simplemente un resumen; en realidad está expresando la **idea arquitectónica fundamental** del proyecto. Todo el resto del capítulo no hace más que desarrollar esas cuatro responsabilidades desde distintos puntos de vista (componentes, dependencias y límites). En mi opinión, esa es una señal de que el documento está bien diseñado: primero presenta la idea esencial y luego la desarrolla de forma sistemática.

---

¿me podrías reescribir el apartado de aplicación para eliminar los nombres concretos o en todo caso el apartado Componentes principales?

---

Sí. De hecho, creo que esa mejora hará que el documento sea más estable con el paso del tiempo.

En una arquitectura, lo importante no es que hoy exista `taskActions` o `tasksStore`, sino **qué tipo de componentes forman la capa**. Los nombres concretos cambian con las refactorizaciones; las responsabilidades permanecen.

Yo lo reescribiría así:

#### Componentes principales

La capa de aplicación está formada por los componentes responsables de coordinar el funcionamiento del sistema.

Entre ellos se incluyen principalmente:

- Casos de uso, que representan las operaciones que la aplicación pone a disposición de la interfaz de usuario.
- Componentes encargados de coordinar la ejecución de dichas operaciones y traducirlas en cambios sobre el estado de la aplicación.
- Mecanismos de gestión del estado responsables de mantener el estado global del sistema y notificar sus modificaciones.
- Elementos de composición, cuya finalidad es construir y ensamblar las distintas dependencias de la aplicación.
- Componentes auxiliares que proporcionan capacidades de soporte, como la gestión del historial u otros mecanismos necesarios para coordinar el comportamiento del sistema.

Todos estos elementos participan en la coordinación del funcionamiento de la aplicación sin incorporar reglas propias del dominio.

Creo que esta versión tiene varias ventajas:

- **No depende de nombres concretos**, por lo que resistirá mejor futuras refactorizaciones.
- **Describe responsabilidades**, que es el objetivo de `ARCHITECTURE.md`.
- Sigue siendo fácil reconocer la implementación actual (`useCases`, `taskActions`, `tasksStore`, `composition`, `History`) sin convertir el documento en un inventario de archivos.

## Incluso iría un paso más allá

Después de la auditoría de `VISION.md` y `PRODUCT.md`, creo que podemos establecer una regla para todo `ARCHITECTURE.md`:

> **Los componentes deben describirse por su responsabilidad y no por su nombre.**

El nombre concreto puede aparecer entre paréntesis cuando aporte contexto, por ejemplo:

- Casos de uso (`useCases`).
- Mecanismos de gestión del estado (`tasksStore`).
- Elementos de composición (`composition`).

Pero nunca debería ser el protagonista del texto.

En mi opinión, esa regla hará que `ARCHITECTURE.md` envejezca mucho mejor. Si dentro de dos años decides renombrar `taskActions` o sustituir `tasksStore`, probablemente no tendrás que modificar la documentación, porque lo importante seguirá siendo la función que desempeñan esos componentes, no el nombre que reciben en una versión concreta del código.

---

¿dónde debería ir esta regla Los componentes deben describirse por su responsabilidad y no por su nombre.?

---

Creo que esa regla es muy buena, pero **no la pondría en `ARCHITECTURE.md`**.

De hecho, durante la auditoría hemos ido descubriendo una idea importante:

- `ARCHITECTURE.md` debe **describir la arquitectura**.
- No debe explicar **cómo escribir la documentación**.

Y esta regla:

> **Los componentes deben describirse por su responsabilidad y no por su nombre.**

no es un principio arquitectónico. Es una **convención de documentación**.

## ¿Dónde la pondría?

Yo veo tres posibilidades.

### Opción 1 (mi favorita): `DEVELOPMENT_GUIDE.md`

Dentro del capítulo donde habláis de la documentación o de las convenciones de desarrollo.

Por ejemplo:

```text
Documentación técnica
│
├── Describir responsabilidades antes que implementaciones.
├── Evitar que la documentación dependa de nombres concretos.
├── Mantener un nivel de abstracción estable.
└── Actualizar la documentación junto con el código.
```

Ahí encaja perfectamente, porque es una regla para escribir documentación técnica.

---

### Opción 2: `AGENTS.md`

Como una directriz para los agentes de desarrollo.

Por ejemplo:

> Al actualizar la documentación arquitectónica, describe los componentes por la responsabilidad que desempeñan y no por el nombre concreto que reciben en el código, salvo cuando dicho nombre sea necesario para identificar una implementación específica.

También sería un buen sitio.

---

### Opción 3: `ARCHITECTURE.md`

Solo la pondría aquí si la reformulas como un **principio arquitectónico**.

Por ejemplo:

> **La arquitectura se organiza en torno a responsabilidades y no a implementaciones concretas.**

Eso sí pertenece a `ARCHITECTURE.md`.

Pero la versión:

> **Los componentes deben describirse...**

habla de cómo escribir documentación.

---

# Mi propuesta

Creo que esta regla es lo bastante buena como para convertirse en una **convención general de la documentación**.

La escribiría así:

> **La documentación arquitectónica debe describir los componentes por la responsabilidad que desempeñan y no por el nombre concreto que reciben en la implementación. Los nombres de clases, módulos o archivos podrán citarse como ejemplos cuando ayuden a identificar la implementación actual, pero no deberán constituir el elemento principal de la explicación.**

## Una reflexión

Mientras respondía me he dado cuenta de que esta regla es, en realidad, una aplicación del mismo principio que hemos seguido durante toda la auditoría:

- En `VISION.md` describimos **principios**, no decisiones puntuales.
- En `PRODUCT.md` describimos **conceptos**, no implementaciones.
- En `ARCHITECTURE.md` describimos **responsabilidades**, no nombres de archivos.

Es decir, la documentación siempre intenta situarse **un nivel por encima del código**. Esa idea me parece tan valiosa que sí la incorporaría al `DEVELOPMENT_GUIDE.md` como una convención de documentación, porque no solo sirve para `ARCHITECTURE.md`, sino para cualquier documento técnico que describa el proyecto.

---

pero en qué lugar de ARCHITECTURE.md. se pone La documentación arquitectónica debe describir los componentes por la responsabilidad que desempeñan y no por el nombre concreto que reciben en la implementación. Los nombres de clases, módulos o archivos podrán citarse como ejemplos cuando ayuden a identificar la implementación actual, pero no deberán constituir el elemento principal de la explicación.

---

Después de pensarlo, **no la pondría como un principio independiente** dentro de `ARCHITECTURE.md`.

Pero si quieres que esa idea quede reflejada en este documento (y creo que es buena idea), hay un lugar donde encaja de forma completamente natural:

## Al final del capítulo 1. Objetivo

Justo antes del último párrafo:

> **En conjunto, este documento actúa como la referencia principal...**

Añadiría un párrafo como este:

La arquitectura se describe atendiendo principalmente a las responsabilidades que desempeñan sus componentes y a las relaciones existentes entre ellos, evitando que la documentación dependa de nombres concretos de clases, módulos o archivos. Cuando dichos nombres aparecen, lo hacen únicamente como ejemplos que ayudan a identificar la implementación vigente, sin constituir el elemento principal de la explicación.

¿Por qué ahí?

Porque el capítulo 1 responde a:

> **¿Qué es este documento y cómo debe leerse?**

Y esta regla es precisamente una explicación de **cómo está escrita la documentación arquitectónica**.

No es un principio de diseño, sino un criterio de documentación.

---

## Yo no la pondría en el capítulo 2

Porque el capítulo 2 habla de principios como:

- simplicidad;
- dependencias;
- dominio;
- responsabilidad única.

Tu frase no pertenece a ese nivel.

No es un principio arquitectónico.

Es una convención documental.

---

## Tampoco la pondría en el capítulo 4

Porque allí ya estamos describiendo la arquitectura.

Llegaría demasiado tarde.

---

## Mi ubicación definitiva sería

```text
1. Objetivo
│
├── Qué describe.
├── Para qué sirve.
├── Qué no describe.
├── Cómo está escrita.   ← AQUÍ
└── Referencia principal.
```

Creo que esa posición tiene mucho sentido porque establece desde el principio el nivel de abstracción del documento. Después, cuando el lector llegue a "Componentes principales", ya entenderá por qué hablas de **casos de uso**, **mecanismos de gestión del estado** o **adaptadores de persistencia**, en lugar de convertir la documentación en un listado de nombres de archivos.

En mi opinión, esa es la ubicación más coherente dentro de `ARCHITECTURE.md`.

---

5. Flujo de escritura del estado

Las capas descritas en el capítulo anterior representan la organización estructural del sistema.

Sin embargo, comprender una arquitectura no consiste únicamente en conocer sus componentes, sino también en entender cómo colaboran entre sí durante la ejecución de una operación.

Este capítulo describe el recorrido que sigue una modificación del estado desde que el usuario inicia una acción hasta que el nuevo estado queda consolidado y persistido.

Cada etapa del proceso tiene una responsabilidad concreta y participa en la operación sin invadir las responsabilidades de las demás, manteniendo el principio de separación de responsabilidades que guía toda la arquitectura.

Usuario
│
▼
Interfaz de usuario
│
▼
Caso de uso
│
▼
taskActions
│
▼
Store
│
▼
Reducer
│
▼
Nuevo estado
│
▼
Suscriptores
│
├────────► Persistencia
│
└────────► Interfaz de usuario

La persistencia no constituye una responsabilidad del Store. El Store únicamente publica los cambios de estado; son los componentes suscritos quienes deciden cómo reaccionar ante ellos. En la implementación actual, uno de esos suscriptores se encarga de mantener sincronizado el estado con localStorage.

---

Este es el primer capítulo de `ARCHITECTURE.md` donde ya no hablamos de **estructura**, sino de **comportamiento**. Y creo que esa diferencia es muy importante.

Hasta ahora el documento respondía a estas preguntas:

- ¿Qué principios seguimos?
- ¿Cómo está organizado el sistema?
- ¿Qué responsabilidad tiene cada capa?

Ahora responde a una pregunta distinta:

> **¿Cómo colaboran esas capas cuando ocurre una operación?**

Eso me parece un cambio de nivel muy acertado.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí.**

Responde claramente a:

> **¿Cómo fluye una operación de escritura a través del sistema?**

No explica:

- la arquitectura de las capas (ya lo hizo el capítulo 4);
- el dominio;
- el producto.

Explica el comportamiento dinámico de la arquitectura.

**Resultado:** ✅ Correcto.

---

# 2. ¿Invade el capítulo 4?

No.

Y aquí hay una diferencia muy interesante.

El capítulo 4 decía:

> **¿Quién hace qué?**

Este capítulo dice:

> **¿En qué orden colaboran?**

Son preguntas distintas.

---

# 3. El diagrama

Aquí sí veo una oportunidad de mejora.

El diagrama actual mezcla dos niveles.

```text
Usuario
│
▼
Interfaz
│
▼
Caso de uso
│
▼
taskActions
│
▼
Store
│
▼
Reducer
│
▼
Nuevo estado
│
▼
Suscriptores
│
├────────► Persistencia
│
└────────► Interfaz
```

Fíjate.

Hasta ahora habíamos decidido una regla muy buena durante la auditoría:

> **Describir responsabilidades antes que implementaciones.**

Sin embargo aquí aparecen:

```text
taskActions

Store

Reducer
```

Son nombres de implementación.

---

# Creo que este capítulo admite una excepción

Y aquí viene algo interesante.

**Creo que en este caso sí está justificado utilizar nombres concretos.**

¿Por qué?

Porque este capítulo ya no describe una arquitectura abstracta.

Describe **el flujo real de la implementación actual**.

Y precisamente en el capítulo 1 escribimos:

> "...refleja la implementación vigente."

Por tanto.

Aquí sí tiene sentido.

---

# Pero haría un pequeño cambio

En vez de escribir.

```text
taskActions
```

escribiría.

```text
Coordinador de acciones
(taskActions)
```

En vez de.

```text
Store
```

escribiría.

```text
Gestor del estado
(tasksStore)
```

Y.

```text
Reducer
```

podría quedarse.

Porque realmente es un patrón ampliamente conocido.

Así el diagrama gana contexto.

---

# 4. El último párrafo

Me gusta muchísimo.

Especialmente.

> **"La persistencia no constituye una responsabilidad del Store."**

Creo que esa frase resume perfectamente una decisión arquitectónica importante.

Yo incluso la destacaría.

Porque desmonta una idea muy habitual.

---

# 5. Solo añadiría una frase

Después de:

> "Este capítulo describe..."

Quizá escribiría.

> **El recorrido descrito corresponde a una operación de escritura sobre el estado. El flujo de lectura se presenta en el capítulo siguiente, donde se describe cómo la información llega nuevamente a la interfaz de usuario.**

Eso prepara muy bien la transición.

---

# Resultado

```text
Capítulo 5

★★★★★ Responsabilidad

★★★★★ Flujo claramente explicado

★★★★★ Excelente transición desde el capítulo 4

💡 Mejora opcional:

Añadir una frase indicando que este
capítulo describe únicamente el flujo
de escritura y que el siguiente abordará
el flujo de lectura.
```

---

# Una reflexión

Mientras lo revisaba me he dado cuenta de algo que no habíamos visto antes.

`ARCHITECTURE.md` parece estar organizado en **tres niveles** muy claros:

```text
Principios

↓

Estructura

↓

Comportamiento
```

Es decir:

```text
Capítulo 2

¿Por qué está diseñada así?

↓

Capítulos 3 y 4

¿Cómo está organizada?

↓

Capítulos 5 y siguientes

¿Cómo funciona?
```

Creo que esa progresión es excelente.

Y hay otra consecuencia interesante: **a partir de este punto sí me parece correcto utilizar algunos nombres concretos** (`taskActions`, `tasksStore`, `Reducer`, etc.), porque ya no estás describiendo una arquitectura ideal o atemporal, sino **la implementación vigente**. Eso es coherente con el objetivo del documento y con la distinción que establecimos al principio entre describir responsabilidades y documentar cómo se materializan en el sistema actual.

---

6. Flujo de lectura del estado

Una vez actualizado el estado de la aplicación, la arquitectura debe garantizar que la información llegue nuevamente a la interfaz de usuario de forma coherente y eficiente.

Este capítulo describe el recorrido que sigue el estado desde su almacenamiento en el Store hasta su representación en la interfaz, mostrando cómo cada componente participa en el proceso sin asumir responsabilidades que pertenecen a otras partes del sistema.

Al igual que en el flujo de escritura, cada etapa desempeña una función específica y mantiene una separación clara de responsabilidades, favoreciendo una arquitectura predecible, fácilmente testeable y sencilla de evolucionar.

Store
│
▼
Selectores
│
▼
useTasks
│
▼
Componentes de la interfaz
│
▼
Usuario

El recorrido comienza en el Store, que actúa como fuente única de verdad de la aplicación.

Los selectores obtienen únicamente la información necesaria para cada operación de lectura, encapsulando la lógica de consulta y evitando que la interfaz conozca la estructura interna del estado.

El hook `useTasks` conecta el sistema de estado con React mediante `useSyncExternalStore`, proporcionando a los componentes una vista consistente y actualizada del estado de la aplicación.

Finalmente, los componentes de la interfaz representan dicha información al usuario, limitándose a su presentación y evitando incorporar lógica de negocio o dependencias con otras capas del sistema.

Este flujo mantiene la separación entre lectura y modificación del estado, permitiendo que ambas evolucionen de forma independiente y favoreciendo una arquitectura más mantenible.

La escritura y la lectura del estado siguen recorridos diferentes, aunque ambos comparten la misma fuente de verdad: el Store. Esta separación permite especializar cada flujo según su propósito —modificar o consultar el estado— manteniendo una arquitectura más clara, predecible y fácil de evolucionar.

---

Este capítulo me gusta mucho porque es el complemento natural del anterior. De hecho, juntos forman una unidad muy sólida:

- **Capítulo 5** → ¿Cómo se modifica el estado?
- **Capítulo 6** → ¿Cómo se consulta el estado?

Creo que esa simetría merece conservarse.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí.**

Responde claramente a la pregunta:

> **¿Cómo llega el estado hasta la interfaz de usuario?**

No vuelve a explicar:

- las capas;
- el dominio;
- el Store.

Describe únicamente el **flujo de lectura**.

**Resultado:** ✅ Correcto.

---

# 2. ¿Invade el capítulo 5?

No.

Y aquí hay una separación muy elegante.

Capítulo 5:

```text
Escribir
```

Capítulo 6:

```text
Leer
```

No hay repetición de contenido, sino complementariedad.

---

# 3. El diagrama

Aquí sí haría exactamente la misma reflexión que en el capítulo 5.

El diagrama actual es:

```text
Store
│
▼
Selectores
│
▼
useTasks
│
▼
Componentes de la interfaz
│
▼
Usuario
```

Y creo que, igual que hicimos con el flujo de escritura, puede mantener el equilibrio entre **responsabilidad** e **implementación**.

Por ejemplo:

```text
Estado global
(Store)
│
▼
Consultas
(Selectores)
│
▼
Adaptador UI
(useTasks)
│
▼
Componentes
│
▼
Usuario
```

No es imprescindible.

Pero mantiene el mismo criterio que propusimos para el capítulo anterior.

---

# 4. Hay una frase que destacaría

Esta:

> **"El recorrido comienza en el Store, que actúa como fuente única de verdad de la aplicación."**

Creo que es una decisión arquitectónica importante.

La destacaría porque resume uno de los pilares del proyecto.

---

# 5. El último párrafo

Me parece muy bueno.

Especialmente:

> **"La escritura y la lectura del estado siguen recorridos diferentes..."**

Creo que ese párrafo cierra perfectamente los capítulos 5 y 6.

---

# 6. Solo haría una pequeña mejora

Hay una frase:

> **"Al igual que en el flujo de escritura..."**

Yo escribiría:

> **Al igual que el flujo de escritura descrito en el capítulo anterior...**

Es un detalle mínimo, pero ayuda a enlazar ambos capítulos de forma explícita.

---

# Resultado

```text
Capítulo 6

★★★★★ Responsabilidad

★★★★★ Excelente simetría con el capítulo 5

★★★★★ Muy buena explicación del flujo de lectura

💡 Mejora opcional:

Mantener el mismo nivel de abstracción
que en el diagrama del flujo de escritura.
```

---

# Una observación que me parece importante

Mientras revisaba este capítulo me he dado cuenta de que **los capítulos 5 y 6 podrían considerarse una única unidad conceptual**.

Podrían resumirse así:

```text
Escritura del estado
        │
        ▼
Estado global (Store)
        ▲
        │
Lectura del estado
```

Es decir, el **Store** actúa como punto de encuentro entre ambos recorridos.

Eso me parece una idea arquitectónica muy potente.

De hecho, si tuviera que resumir toda la gestión del estado del proyecto en una sola imagen, probablemente sería esa. El capítulo 5 explica cómo el estado **entra** en el Store; el capítulo 6 explica cómo el estado **sale** del Store. Entre ambos describen el ciclo completo de una operación sobre el estado sin duplicar responsabilidades.

## Mi impresión

Hasta ahora, `ARCHITECTURE.md` está siguiendo una progresión muy natural:

```text
Principios
        │
        ▼
Estructura
        │
        ▼
Comportamiento
```

Y dentro del comportamiento ya tenemos el ciclo completo:

- **Escritura** del estado.
- **Lectura** del estado.

Creo que esta organización es incluso más clara que una descripción basada únicamente en capas, porque primero enseña **cómo está construido el sistema** y después **cómo se comporta**. Esa combinación hace que el documento sea mucho más útil tanto para una persona como para un agente de desarrollo que necesite comprender rápidamente la arquitectura.

---

7. Organización del proyecto

La estructura del proyecto refleja directamente la arquitectura descrita en los capítulos anteriores.

La organización del código no responde únicamente a criterios de orden, sino que persigue reforzar la separación de responsabilidades entre las distintas capas del sistema y facilitar su evolución a medida que el proyecto crece.

Cada directorio agrupa elementos con una finalidad común, evitando dependencias innecesarias y favoreciendo una navegación coherente por el código fuente.

La siguiente estructura muestra la organización principal del proyecto en el momento de redactar este documento.

src/
├── application/
│ ├── history/
│ └── tasks/
│ └── useCases/
│
├── domain/
│ └── tasks/
│ └── entities/
│
├── infrastructure/
│ └── taskRepository/
│
├── store/
│ └── middleware/
│
├── ui/
│ ├── components/
│ ├── hooks/
│ ├── presenters/
│ └── constants/
│
├── hooks/
├── tests/
└── utils/

La estructura mostrada corresponde al estado actual del proyecto. Puede evolucionar con el tiempo, siempre que dicha evolución respete los principios arquitectónicos descritos en este documento.

| Directorio        | Finalidad                                          |
| ----------------- | -------------------------------------------------- |
| `application/`    | Coordinación de casos de uso y gestión del estado. |
| `domain/`         | Modelo de dominio y reglas de negocio.             |
| `infrastructure/` | Adaptadores y servicios técnicos.                  |
| `store/`          | Infraestructura genérica del sistema de estado.    |
| `ui/`             | Componentes, hooks y elementos de presentación.    |
| `tests/`          | Pruebas automatizadas.                             |
| `utils/`          | Utilidades compartidas.                            |

La estructura del proyecto no pretende reflejar únicamente una organización de directorios, sino materializar físicamente la arquitectura del sistema.

Mantener esta correspondencia entre la organización del código y las responsabilidades de cada capa facilita la comprensión del proyecto, reduce el acoplamiento entre módulos y hace que las futuras refactorizaciones resulten más sencillas y seguras.

---

Creo que este capítulo está muy bien planteado, pero aquí sí veo **una mejora conceptual importante**. No es un problema de contenido, sino de **nivel de abstracción**.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

Sí.

Responde a:

> **¿Cómo se materializa la arquitectura en la organización del proyecto?**

Eso pertenece claramente a `ARCHITECTURE.md`.

**Resultado:** ✅ Correcto.

---

# 2. ¿Invade DEVELOPMENT_GUIDE.md?

No.

Y eso me gusta.

No explica:

- cómo crear carpetas;
- cómo nombrar archivos;
- convenciones.

Solo explica **por qué la estructura es así**.

---

# 3. ¿Invade PROJECT_STATUS.md?

Aquí sí detecto un pequeño riesgo.

Porque aparece un árbol muy concreto.

```text
src/
├── application/
├── domain/
...
```

Eso está bien.

Pero recuerda que ya decidimos una regla durante la auditoría:

> La documentación arquitectónica debe describir responsabilidades antes que implementaciones.

Y un árbol de directorios pertenece más a la **implementación vigente**.

No digo que deba desaparecer.

Solo que no debería ser el protagonista.

---

# Creo que el orden debería invertirse

Ahora mismo tienes.

```text
Introducción

↓

Árbol

↓

Tabla
```

Yo haría.

```text
Introducción

↓

Tabla de responsabilidades

↓

Árbol como ejemplo
```

¿Por qué?

Porque realmente lo importante es esto.

| Directorio  | Finalidad |
| ----------- | --------- |
| application | Coordinar |
| domain      | Modelar   |
| ...         | ...       |

No el nombre exacto de las carpetas.

El árbol simplemente demuestra cómo se ha materializado esa organización.

---

# 4. El árbol

Lo mantendría.

Pero cambiaría la frase introductoria.

En lugar de:

> "La siguiente estructura muestra..."

Quizá.

> **Una posible representación de la organización actual del proyecto es la siguiente:**

Eso transmite mejor que el árbol es una fotografía de la implementación.

No la arquitectura en sí.

---

# 5. El último párrafo

Me parece excelente.

Especialmente.

> **"...materializar físicamente la arquitectura..."**

Creo que resume perfectamente el objetivo del capítulo.

---

# Solo añadiría una idea

Después del último párrafo.

Algo como.

> **La organización de directorios podrá evolucionar con el tiempo, siempre que continúe reflejando las responsabilidades arquitectónicas descritas en este documento y no se convierta en el criterio que determine dichas responsabilidades.**

¿Por qué?

Porque expresa una idea muy importante.

La arquitectura define las carpetas.

No al revés.

---

# Resultado

```text
Capítulo 7

★★★★★ Responsabilidad

★★★★★ Excelente relación entre arquitectura y código

💡 Mejora opcional:

Presentar primero las responsabilidades
y después el árbol como ejemplo de la
implementación actual.
```

---

# Hay una idea que creo que merece la pena destacar

Mientras lo revisaba me he dado cuenta de que este capítulo responde a una pregunta muy concreta:

> **¿Cómo se refleja la arquitectura en el repositorio?**

Y eso me parece una pregunta distinta de:

- ¿Cómo está organizada la arquitectura? (capítulos 3 y 4).
- ¿Cómo funciona? (capítulos 5 y 6).

Por tanto, creo que el capítulo podría incluso llamarse:

> **Materialización de la arquitectura**

o

> **Arquitectura física del proyecto**

No digo que debas cambiar el título —**"Organización del proyecto"** es perfectamente válido y más intuitivo—, pero esa reflexión ayuda a entender su verdadera función.

## Mi conclusión

Hasta ahora, `ARCHITECTURE.md` sigue una progresión muy coherente:

```text
1. Objetivo

↓

2. Principios

↓

3. Visión general

↓

4. Capas

↓

5–6. Comportamiento

↓

7. Materialización en el código
```

Me parece una secuencia muy sólida. Y, igual que ocurrió con `VISION.md` y `PRODUCT.md`, los ajustes que estamos haciendo ya no son para corregir problemas de fondo, sino para afinar el nivel de abstracción y conseguir que **cada capítulo responda a una única pregunta y lo haga desde el nivel adecuado**. Creo que esa es una muy buena señal sobre la madurez del documento.

---

archivo que no entra

---

He revisado el contenido del capítulo 8 y, en conjunto, me parece uno de los más sólidos del documento. La estructura es muy consistente: cada componente sigue exactamente el mismo esquema (Objetivo → Responsabilidad → Funcionamiento → Relación con otros componentes → Decisiones arquitectónicas), lo que facilita mucho la lectura y la comparación entre ellos.

Dicho esto, sí haría algunas observaciones de cara a la auditoría.

---

# Valoración general

Creo que este capítulo responde claramente a una única pregunta:

> **¿Cuáles son los principales componentes de la arquitectura y qué responsabilidad desempeña cada uno?**

Eso pertenece por completo a `ARCHITECTURE.md`.

No invade:

- `PRODUCT.md`
- `DEVELOPMENT_GUIDE.md`
- `TESTING.md`

Así que, desde el punto de vista de la responsabilidad documental, está muy bien delimitado.

---

# Lo que más me gusta

Hay una progresión muy clara.

Hasta ahora el documento explicaba:

```text
Principios

↓

Capas

↓

Flujos

↓

Componentes
```

Y eso tiene mucho sentido.

Primero entiendes la arquitectura.

Luego cómo está organizada.

Después cómo funciona.

Y finalmente quién hace cada parte del trabajo.

Me parece un orden excelente.

---

# La estructura interna

La uniformidad es uno de los puntos fuertes.

Todos siguen exactamente el mismo patrón:

```text
Objetivo

↓

Responsabilidad

↓

Funcionamiento

↓

Relación con otros componentes

↓

Decisiones arquitectónicas
```

Yo no tocaría esa estructura.

De hecho, creo que es mejor que la de muchos libros de arquitectura.

---

# Solo veo dos mejoras conceptuales

## 1. Los componentes no están ordenados completamente por flujo

Ahora aparecen:

```text
Store

Reducer

Casos de uso

Entidades

Value Objects

Selectores

Persistencia

Historial
```

Pero el flujo real del sistema es aproximadamente:

```text
Casos de uso
        │
        ▼
Store
        │
        ▼
Reducer
        │
        ▼
Entidades
        │
        ▼
Value Objects
        │
        ▼
Selectores
        │
        ▼
Persistencia
```

No digo que debas cambiar el orden.

Pero me llamó la atención.

---

## 2. Hay distintos niveles de abstracción

Por ejemplo.

Store.

Reducer.

Casos de uso.

Son mecanismos arquitectónicos.

Mientras que.

Task.

Priority.

TaskList.

Son conceptos del dominio.

Y Persistencia.

Es infraestructura.

Es decir.

No pertenecen todos exactamente al mismo nivel.

---

# Yo probablemente haría una clasificación

No ahora.

Quizá cuando el proyecto sea mucho más grande.

Algo así.

```text
Estado

Store

Reducer

Selectores

----------------

Aplicación

Casos de uso

Historial

----------------

Dominio

Entidades

Value Objects

----------------

Infraestructura

Persistencia
```

Pero insisto.

Ahora mismo no es necesario.

---

# La síntesis final

Creo que es una idea magnífica.

La tabla.

```text
Store

Conservar

Coordinar

Publicar
```

Resume perfectamente cada componente.

De hecho.

Me gusta tanto como la tabla de las cuatro capas.

---

# Una observación importante

Creo que este capítulo marca el límite de `ARCHITECTURE.md`.

A partir de aquí **ya no describiría más componentes**.

Porque el documento podría empezar a convertirse en un manual del código.

Y creo que ese no debe ser su objetivo.

Este nivel me parece perfecto:

- suficiente para comprender la arquitectura;
- sin llegar a documentar cada clase.

---

# Mi única sugerencia metodológica

Hay una regla que durante la auditoría ha aparecido varias veces y que aquí también aplicaría.

Cuando hables de un componente, intenta que el nombre sea **el concepto arquitectónico** y no el nombre de un archivo.

Por ejemplo, el capítulo habla de **Store**, **Reducer**, **Casos de uso**, **Selectores** o **Persistencia**, que son conceptos arquitectónicos estables. En cambio, cuando aparecen referencias concretas como `useTasks`, `taskActions` o `replaceState()`, están bien porque ayudan a identificar la implementación actual, pero conviene que sigan siendo ejemplos y no el centro de la explicación. Ese equilibrio ya está bastante conseguido en este capítulo.

## Conclusión

Si tuviera que valorar la madurez de los documentos auditados hasta ahora, diría que:

- **`VISION.md`** define el propósito con claridad.
- **`PRODUCT.md`** define el producto sin mezclarse con la implementación.
- **`ARCHITECTURE.md`** describe la organización y el comportamiento del sistema con un nivel de abstracción muy adecuado.

Mi impresión es que la auditoría ya no está encontrando problemas de estructura, sino oportunidades de refinamiento. Eso suele ser una buena señal de que el sistema documental ha alcanzado un grado alto de coherencia.

---

9. Decisiones arquitectónicas relevantes

La arquitectura actual del proyecto es el resultado de una serie de decisiones adoptadas a lo largo de su evolución.

Cada una de ellas respondió a un problema concreto y fue incorporada únicamente después de haber sido implementada, evaluada y validada mediante la práctica.

Este capítulo resume las decisiones que han tenido un mayor impacto sobre la estructura del sistema.

La justificación detallada de cada una de ellas puede consultarse en los correspondientes documentos ADR (_Architecture Decision Records_).

### 9.1 Un único Store global

Decisión

Mantener un único Store como fuente de verdad.

Motivación

Centralizar el estado y simplificar la coordinación entre componentes.

Impacto

Arquitectura más sencilla y comportamiento predecible.

### 9.2 Reducer como parte del dominio

Decisión

Situar el reducer dentro del dominio.

Motivación

Aplica reglas del negocio, no infraestructura.

Impacto

Mayor cohesión del dominio.

### 9.3 Casos de uso como punto de entrada

Decisión

Toda modificación del estado comienza en un caso de uso.

Motivación

Desacoplar la UI del Store.

Impacto

Interfaz más simple y operaciones reutilizables.

### 9.4 Value Objects

Decisión

Sustituir tipos primitivos por Value Objects.

Motivación

Proteger invariantes y expresar el dominio.

Impacto

Modelo más seguro y expresivo.

### 9.5 Persistencia mediante suscripciones

Decisión

Persistir reaccionando a los cambios del Store.

Motivación

Eliminar responsabilidades innecesarias del middleware.

Impacto

Un único flujo para todas las modificaciones del estado.

### 9.6 Documentación modular

Decisión

Separar la documentación por responsabilidad.

Motivación

Evitar duplicidades.

Impacto

Documentación más mantenible.

### 9.7 Conclusión

Las decisiones resumidas en este capítulo comparten un mismo criterio: introducir únicamente aquellas soluciones que aportan un beneficio claro al problema que resuelven.

La arquitectura actual no persigue aplicar patrones de diseño por sí mismos, sino construir un sistema coherente, mantenible y capaz de evolucionar mediante pequeñas refactorizaciones sucesivas.

Este mismo criterio constituye la referencia para evaluar cualquier cambio futuro en la arquitectura del proyecto.

---

Creo que este es el **último gran capítulo conceptual** de `ARCHITECTURE.md` y, en mi opinión, cierra muy bien el documento.

Sin embargo, aquí sí haría una reflexión importante durante la auditoría.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

Sí.

Responde claramente a:

> **¿Qué decisiones explican por qué la arquitectura es como es hoy?**

Eso pertenece plenamente a `ARCHITECTURE.md`.

No habla de:

- funcionalidades del producto;
- proceso de desarrollo;
- planificación.

Habla de **decisiones arquitectónicas**.

**Resultado:** ✅ Correcto.

---

# 2. ¿Invade los ADR?

No.

Y esto me gusta mucho.

De hecho dices:

> _La justificación detallada... puede consultarse en los ADR._

Eso deja muy clara la separación.

Este documento responde a:

> ¿Qué decisiones son importantes?

Los ADR responderán a:

> ¿Cómo se tomó cada decisión?

Muy buena separación.

---

# 3. La estructura

Aquí sí creo que haría un pequeño cambio.

Ahora mismo cada decisión aparece como:

```text
Decisión

Motivación

Impacto
```

Me gusta.

Pero falta una cosa.

---

## ¿Qué problema resolvía?

Porque realmente toda decisión arquitectónica nace así:

```text
Problema

↓

Decisión

↓

Consecuencia
```

Por ejemplo.

### Un único Store global

Podría quedar.

```text
Problema

El estado comenzaba a dispersarse entre distintos componentes.

Decisión

Mantener un único Store como fuente de verdad.

Impacto

Arquitectura más sencilla...
```

No hace falta que sea largo.

Una frase.

Pero creo que ayuda muchísimo.

---

# 4. Hay otra observación

Las decisiones son muy buenas.

Pero en realidad representan distintas categorías.

Por ejemplo.

## Estado

```text
Store

Reducer

Persistencia
```

---

## Dominio

```text
Value Objects
```

---

## Aplicación

```text
Casos de uso
```

---

## Documentación

```text
Documentación modular
```

No digo que haya que agruparlas.

Pero me llamó la atención.

---

# 5. La conclusión

Me parece excelente.

Especialmente esta frase.

> **"...no persigue aplicar patrones..."**

Creo que resume perfectamente toda la evolución del proyecto.

---

# Solo cambiaría una frase

Esta.

> **"...introducir únicamente aquellas soluciones..."**

Quizá escribiría.

> **"...adoptar únicamente aquellas soluciones..."**

Porque "introducir" suena más a implementación.

"Adoptar" transmite mejor una decisión arquitectónica.

Es un detalle de estilo.

---

# Resultado

```text
Capítulo 9

★★★★★ Responsabilidad

★★★★★ Excelente cierre

★★★★★ Buena separación respecto a los ADR

💡 Mejora opcional:

Añadir una línea de "Problema"
antes de cada decisión para explicar
qué motivó realmente el cambio.
```

---

# Hay una reflexión que me parece muy importante

Mientras lo leía me he dado cuenta de que este capítulo **no pertenece realmente a la arquitectura**, sino a la **historia de la arquitectura**.

Y eso podría parecer un problema...

...pero creo que no lo es.

Porque no está contando la historia cronológica del proyecto.

Está respondiendo a una pregunta arquitectónica muy concreta:

> **¿Por qué la arquitectura es así y no de otra manera?**

Eso es diferente de `PROJECT_JOURNAL.md`, que responde a:

> **¿Qué ocurrió durante el desarrollo?**

Y también es diferente de un ADR, que responde a:

> **¿Cómo se analizó y justificó una decisión concreta?**

Por tanto, la separación quedaría así:

- **`ARCHITECTURE.md`** → Resume las decisiones que definen la arquitectura actual.
- **ADR** → Documentan en profundidad cada decisión individual.
- **`PROJECT_JOURNAL.md`** → Conserva la evolución histórica del proyecto.

Creo que esa distribución de responsabilidades es muy coherente.

## Una única recomendación adicional

Hay una frase que me llamó la atención:

> **"La justificación detallada de cada una de ellas puede consultarse en los correspondientes documentos ADR..."**

Si los ADR todavía no existen, yo matizaría ligeramente la redacción para no dar a entender que ya están disponibles. Por ejemplo:

> *La justificación detallada de estas decisiones se documentará en sus correspondientes ADR (*Architecture Decision Records*) a medida que dichos documentos se incorporen al proyecto.*

Si, en cambio, los ADR ya existen, entonces la redacción actual es perfecta.

En conjunto, diría que este capítulo **cierra `ARCHITECTURE.md` de una forma muy sólida**: primero explicas los principios, después la estructura, luego el comportamiento, más tarde los componentes y, finalmente, las decisiones que justifican por qué la arquitectura ha llegado a ser la que es hoy. Es un recorrido muy coherente y fácil de seguir.

---

10. Estado actual de la arquitectura

La arquitectura del proyecto ha alcanzado un nivel de estabilidad que permite incorporar nuevas funcionalidades mediante pequeñas extensiones o refactorizaciones localizadas, sin necesidad de modificar su estructura fundamental.

El sistema presenta una separación clara entre la interfaz de usuario, la coordinación de las operaciones, el dominio, la infraestructura y la gestión del estado. Esta organización facilita la comprensión del código, reduce el acoplamiento entre componentes y favorece su evolución.

Las principales decisiones arquitectónicas adoptadas durante el desarrollo se encuentran consolidadas y han demostrado su utilidad mediante la implementación de nuevas funcionalidades, la incorporación de pruebas automatizadas y sucesivas refactorizaciones.

La arquitectura mantiene un equilibrio entre simplicidad y capacidad de evolución. Los componentes incorporados responden a necesidades reales del proyecto y su permanencia se justifica por el valor que aportan al conjunto del sistema.

Como consecuencia, el foco de las futuras iteraciones deja de estar en redefinir la arquitectura y pasa a centrarse en ampliar las capacidades funcionales del proyecto preservando los principios descritos en este documento.

La arquitectura ya no constituye el principal objeto de desarrollo del proyecto; pasa a ser la base sobre la que continuará evolucionando el dominio y sus funcionalidades.

---

Creo que este capítulo funciona como el equivalente, dentro de `ARCHITECTURE.md`, al capítulo **"Qué significa completar el proyecto"** de `VISION.md`. No describe la arquitectura, sino **el grado de madurez que ha alcanzado**. Esa es una diferencia importante.

Voy con la auditoría.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

Sí.

Responde claramente a la pregunta:

> **¿En qué estado de madurez se encuentra actualmente la arquitectura?**

No explica:

- cómo está construida (ya lo hizo el resto del documento);
- cómo evolucionará el producto (eso pertenece a `PRODUCT.md` o `ROADMAP.md`);
- cómo se desarrolla (eso pertenece a `DEVELOPMENT_GUIDE.md`).

Describe únicamente el estado arquitectónico actual.

**Resultado:** ✅ Correcto.

---

# 2. ¿Invade `PROJECT_STATUS.md`?

Aquí sí me he detenido un poco.

A primera vista podría parecer que sí, porque habla del "estado actual".

Pero realmente no.

Hay una diferencia muy clara:

**`PROJECT_STATUS.md`** responde a:

> ¿Cuál es el estado actual del proyecto?

Mientras que este capítulo responde a:

> ¿Cuál es el estado de madurez de la arquitectura?

Por ejemplo, esta frase:

> _"La arquitectura del proyecto ha alcanzado un nivel de estabilidad..."_

es una valoración arquitectónica, no un informe de progreso.

Así que no veo solapamiento.

---

# 3. ¿Invade `ROADMAP.md`?

No.

La frase:

> _"El foco de las futuras iteraciones..."_

podría parecer planificación.

Pero en realidad no dice **qué** se va a hacer.

Dice **desde dónde parte la arquitectura**.

Es una consecuencia del estado actual.

---

# 4. Solo haría una pequeña mejora

Hay una frase que me gusta mucho:

> **"La arquitectura ya no constituye el principal objeto de desarrollo del proyecto..."**

Creo que resume perfectamente la situación.

Sin embargo, la frase anterior dice:

> _"Como consecuencia, el foco de las futuras iteraciones..."_

Quizá escribiría:

> **Como consecuencia de esta madurez, el foco de las futuras iteraciones...**

Es un matiz, pero enlaza mejor con todo el capítulo.

---

# 5. Echo de menos una idea

No porque falte realmente.

Sino porque reforzaría el cierre.

Quizá añadiría una última frase como:

> **Las futuras decisiones arquitectónicas deberán evaluarse utilizando los principios descritos en este documento, preservando la coherencia alcanzada por el sistema.**

¿Por qué?

Porque conecta el final con el capítulo 2.

Y cierra el documento en forma de círculo.

```text
Principios

↓

Arquitectura

↓

Estado actual

↓

Los principios siguen guiando la evolución
```

Me parece un cierre elegante.

---

# Resultado

```text
Capítulo 10

★★★★★ Responsabilidad

★★★★★ Excelente cierre

★★★★★ No invade PROJECT_STATUS

★★★★★ No invade ROADMAP

💡 Mejora opcional:

Cerrar el documento enlazando
explícitamente con los principios
arquitectónicos del capítulo 2.
```

---

# Una reflexión final sobre `ARCHITECTURE.md`

Después de revisar todos los capítulos, creo que el documento tiene una estructura muy coherente.

```text
1. Objetivo
        │
        ▼
2. Principios
        │
        ▼
3. Visión general
        │
        ▼
4. Capas
        │
        ▼
5. Flujo de escritura
        │
        ▼
6. Flujo de lectura
        │
        ▼
7. Organización del proyecto
        │
        ▼
8. Componentes principales
        │
        ▼
9. Decisiones arquitectónicas
        │
        ▼
10. Estado actual
```

Lo que más me gusta es que la progresión tiene una lógica muy clara:

- **Primero** explica los criterios de diseño.
- **Después** describe la estructura.
- **Luego** muestra el comportamiento.
- **A continuación** presenta cómo esa arquitectura se materializa en el código y cuáles son sus componentes.
- **Finalmente** explica por qué la arquitectura es así y cuál es su grado de madurez.

## Mi valoración global

Si tuviera que valorar el documento igual que hicimos con `VISION.md` y `PRODUCT.md`, diría:

```text
ARCHITECTURE.md

★★★★★ Responsabilidad

★★★★★ Coherencia interna

★★★★★ Separación respecto al resto de documentos

★★★★★ Nivel de abstracción

★★★★★ Preparado para evolucionar
```

Sinceramente, durante esta auditoría esperaba encontrar más solapamientos con `PRODUCT.md` o con `DEVELOPMENT_GUIDE.md`. Sin embargo, la mayor parte de los ajustes que hemos comentado han sido de **nivel de abstracción** o de **organización interna**, no de responsabilidad. Eso suele ser una buena señal: indica que la arquitectura documental ya está bastante consolidada y que los refinamientos actuales sirven para hacerla más clara y más resistente a la evolución del proyecto, no para corregir problemas de fondo.

---

11. La visión dentro del sistema documental

Este documento constituye la referencia principal de la arquitectura del proyecto.

Su propósito es describir el estado actual del sistema, los principios que guían su diseño, la organización de sus componentes y las decisiones arquitectónicas que sustentan su estructura.

No obstante, la arquitectura representa únicamente una parte de la documentación técnica del proyecto. El resto de documentos desarrollan aspectos específicos que complementan la información presentada aquí y permiten profundizar en diferentes áreas según las necesidades de cada lector.

La documentación se organiza de forma que cada documento tenga una responsabilidad claramente definida y evite duplicar información presente en otros.

En particular:

| Documento              | Contenido principal                                                              |
| ---------------------- | -------------------------------------------------------------------------------- |
| `PROJECT_STATUS.md`    | Estado actual del proyecto, funcionalidades implementadas y próximos objetivos.  |
| `PROJECT_JOURNAL.md`   | Registro histórico de las sesiones de desarrollo y de la evolución del proyecto. |
| `ROADMAP.md`           | Líneas de evolución previstas y posibles mejoras futuras.                        |
| `DEVELOPMENT_GUIDE.md` | Organización del entorno de desarrollo y pautas de trabajo sobre el código.      |
| `TESTING.md`           | Estrategia de pruebas y organización de los distintos niveles de testing.        |
| `ADR/`                 | Justificación detallada de las decisiones arquitectónicas más relevantes.        |
| `INTRODUCTION.md`      | Guía de navegación y organización general de la documentación del proyecto.      |

Esta organización permite que cada documento pueda evolucionar de forma independiente, manteniendo una alta cohesión, evitando redundancias y facilitando el mantenimiento de la documentación a largo plazo.

En conjunto, estos documentos forman un sistema de documentación coherente, en el que cada uno cumple una función específica y complementa a los demás sin sustituirlos.

---

La arquitectura no constituye un objetivo en sí misma, sino un medio para construir software comprensible, mantenible y capaz de evolucionar. Este documento refleja el estado actual de ese proceso y servirá como referencia para evaluar su evolución futura.

---

Creo que este capítulo confirma una pauta que ya hemos visto en `VISION.md` y `PRODUCT.md`: cerrar cada documento explicando **cómo encaja dentro del sistema documental**. Me parece una muy buena decisión porque da unidad a toda la documentación.

Vamos con la auditoría.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí.**

Responde claramente a:

> **¿Qué papel desempeña `ARCHITECTURE.md` dentro del sistema documental?**

No vuelve a explicar la arquitectura.

No resume el proyecto.

No describe el desarrollo.

Simplemente sitúa este documento dentro del conjunto.

**Resultado:** ✅ Correcto.

---

# 2. ¿Invade `INTRODUCTION.md`?

No.

Y aquí veo una diferencia muy clara.

`INTRODUCTION.md` debería responder a:

> **¿Cómo está organizada toda la documentación?**

Mientras que este capítulo responde a:

> **¿Cómo se relaciona `ARCHITECTURE.md` con los demás documentos?**

Es un enfoque distinto.

---

# 3. ¿Invade `PROJECT_STATUS.md` o `ROADMAP.md`?

No.

La tabla únicamente resume la responsabilidad de cada documento.

No desarrolla su contenido.

Eso está muy bien.

---

# 4. Solo haría una mejora

Hay algo que me llamó la atención.

La tabla no incluye:

- `VISION.md`
- `PRODUCT.md`

Y precisamente son los dos documentos que preceden a `ARCHITECTURE.md`.

Creo que deberían aparecer.

Por ejemplo:

| Documento         | Contenido principal                                          |
| ----------------- | ------------------------------------------------------------ |
| `VISION.md`       | Propósito, principios y dirección estratégica del proyecto.  |
| `PRODUCT.md`      | Definición funcional del producto y de su modelo conceptual. |
| `ARCHITECTURE.md` | Organización técnica del sistema y decisiones de diseño.     |

Y después continuar con el resto.

¿Por qué?

Porque ahora mismo la cadena documental queda incompleta.

---

# 5. El cierre

Me gusta muchísimo.

Especialmente esta frase.

> **"La arquitectura no constituye un objetivo en sí misma..."**

Creo que resume perfectamente la filosofía del proyecto.

No la tocaría.

---

# Resultado

```text
Capítulo 11

★★★★★ Responsabilidad

★★★★★ Excelente cierre documental

★★★★★ Buena separación respecto a INTRODUCTION

💡 Mejora recomendada:

Añadir VISION.md y PRODUCT.md a la tabla
para completar el recorrido documental.
```

---

# Una reflexión final sobre toda la auditoría

Después de revisar `ARCHITECTURE.md` de principio a fin, creo que podemos sacar una conclusión muy parecida a la que obtuvimos con `VISION.md` y `PRODUCT.md`.

## La progresión documental ya es muy clara

```text
VISION
        │
        ▼
¿Por qué existe el proyecto?

        │
        ▼

PRODUCT
        │
        ▼
¿Qué producto queremos construir?

        │
        ▼

ARCHITECTURE
        │
        ▼
¿Cómo está construido técnicamente?

        │
        ▼

DEVELOPMENT_GUIDE
        │
        ▼
¿Cómo trabajamos sobre esa arquitectura?

        │
        ▼

TESTING
        │
        ▼
¿Cómo comprobamos que sigue siendo correcta?
```

Creo que esa secuencia es uno de los mayores logros de la documentación.

---

# Mi valoración global de `ARCHITECTURE.md`

Si tuviera que resumir la auditoría completa, diría:

- **Responsabilidad:** Excelente.
- **Separación respecto al resto de documentos:** Excelente.
- **Nivel de abstracción:** Muy bueno.
- **Coherencia interna:** Muy alta.

Los únicos ajustes que hemos propuesto durante toda la revisión han sido, en esencia:

- evitar pequeñas repeticiones entre capítulos (como entre los capítulos 3 y 4);
- mantener un nivel de abstracción uniforme (describir responsabilidades antes que nombres concretos cuando corresponda);
- reforzar algunas transiciones entre capítulos;
- completar la tabla final con `VISION.md` y `PRODUCT.md`.

Eso significa que ya no estamos corrigiendo problemas estructurales, sino **afinando un documento que ya tiene una arquitectura muy sólida**.

## Mi única recomendación

Sí incorporaría `VISION.md` y `PRODUCT.md` a la tabla final. Después de todo el trabajo de auditoría, ahora forman parte del recorrido natural de cualquier lector que quiera comprender el proyecto desde el propósito hasta la implementación. Reflejarlos en este último capítulo cerraría el círculo y haría que la relación entre los grandes documentos quedara completamente explícita.

---

¿me puedes rehacer la tabla con las mejoras incorporadas?

---

Sí. Después de toda la auditoría, creo que merece la pena que esta tabla refleje la **columna vertebral** del sistema documental y no solo los documentos "auxiliares".

Yo la dejaría así:

| Documento              | Responsabilidad principal                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| `INTRODUCTION.md`      | Guía de navegación y organización general de la documentación del proyecto.               |
| `VISION.md`            | Propósito del proyecto, principios fundamentales y dirección estratégica a largo plazo.   |
| `PRODUCT.md`           | Definición funcional del producto, su modelo conceptual y sus capacidades.                |
| `ARCHITECTURE.md`      | Organización técnica del sistema, principios arquitectónicos y decisiones de diseño.      |
| `DEVELOPMENT_GUIDE.md` | Organización del entorno de desarrollo, convenciones y forma de trabajo sobre el código.  |
| `TESTING.md`           | Estrategia de pruebas, organización del testing y criterios de validación.                |
| `ADR/`                 | Justificación detallada de las decisiones arquitectónicas más relevantes.                 |
| `PROJECT_STATUS.md`    | Estado actual del proyecto, funcionalidades implementadas y próximos objetivos.           |
| `PROJECT_JOURNAL.md`   | Registro histórico de las sesiones de desarrollo y de la evolución del proyecto.          |
| `ROADMAP.md`           | Líneas estratégicas de evolución y posibles desarrollos futuros.                          |
| `DESIGN_JOURNAL.md`    | Hipótesis, ideas y reflexiones de diseño pendientes de evaluación o incorporación futura. |

Creo que esta versión tiene varias ventajas respecto a la anterior:

- **Completa el recorrido documental**, incorporando `VISION.md`, `PRODUCT.md` y `ARCHITECTURE.md`, que son el núcleo conceptual del proyecto.
- **Incluye `DESIGN_JOURNAL.md`**, que durante esta auditoría ha pasado a formar parte de la arquitectura documental.
- **Empieza por `INTRODUCTION.md`**, que actúa como puerta de entrada al sistema documental.
- **Ordena los documentos siguiendo un recorrido lógico**, desde el propósito del proyecto hasta su evolución futura, en lugar de agruparlos únicamente por afinidad.

De hecho, el orden refleja bastante bien el viaje que haría un lector que quisiera comprender el proyecto desde cero:

```text
INTRODUCTION
        │
        ▼
VISION
        │
        ▼
PRODUCT
        │
        ▼
ARCHITECTURE
        │
        ▼
DEVELOPMENT_GUIDE
        │
        ▼
TESTING
        │
        ▼
ADR
        │
        ▼
PROJECT_STATUS
        │
        ▼
PROJECT_JOURNAL
        │
        ▼
ROADMAP
        │
        ▼
DESIGN_JOURNAL
```

## Una pequeña sugerencia adicional

Ahora que `DESIGN_JOURNAL.md` forma parte del sistema documental, creo que sería conveniente que **todos los documentos** terminaran con un capítulo similar al que hemos ido construyendo:

> **"Relación con el resto de la documentación"**

No necesariamente con una tabla completa, pero sí dejando claro dónde encaja cada documento. Así cualquier lector —o cualquier agente de desarrollo— podría empezar por cualquier documento y entender inmediatamente cómo se relaciona con el resto del sistema. Esa coherencia transversal es, en mi opinión, uno de los mayores logros de la arquitectura documental que habéis construido.

---

perfecto. ¿qué viene ahora?

---

Creo que, después de estas últimas sesiones, podemos dar por **auditado `ARCHITECTURE.md`**.

Y, sinceramente, creo que ha quedado muy sólido. Igual que ocurrió con `VISION.md` y `PRODUCT.md`, los cambios que hemos hecho han sido principalmente de:

- nivel de abstracción;
- separación de responsabilidades;
- eliminación de pequeñas duplicidades;
- mejora de la narrativa del documento.

No hemos tenido que replantear ningún capítulo.

Eso es una muy buena señal.

---

## Estado de la auditoría

Hasta ahora tendríamos:

```text
✓ VISION.md

✓ PRODUCT.md

✓ ARCHITECTURE.md

Pendientes

□ DEVELOPMENT_GUIDE.md

□ TESTING.md
```

---

# ¿Qué seguiría?

Aquí creo que solo hay un orden lógico.

```text
VISION
        │
        ▼
PRODUCT
        │
        ▼
ARCHITECTURE
        │
        ▼
DEVELOPMENT_GUIDE
        │
        ▼
TESTING
```

Y hay un motivo.

---

## DEVELOPMENT_GUIDE ya no necesita definir nada

Antes sí.

Pero ahora ya tenemos perfectamente definidos:

- el propósito del proyecto;
- el producto;
- la arquitectura.

Eso significa que `DEVELOPMENT_GUIDE.md` solo tiene que responder a una pregunta:

> **¿Cómo se trabaja sobre este proyecto?**

Nada más.

---

## Creo que ahora podremos ser mucho más estrictos

Durante la auditoría seguramente eliminaremos cualquier contenido que realmente pertenezca a:

- `ARCHITECTURE.md`
- `TESTING.md`
- `PRODUCT.md`

Y dejaremos únicamente:

```text
Forma de trabajar

↓

Convenciones

↓

Proceso de desarrollo

↓

Documentación

↓

Colaboración

↓

Validación (desde el punto de vista del proceso)
```

---

# Después vendrá TESTING

Y entonces será muy fácil delimitarlo.

Porque responderá únicamente a:

> **¿Cómo demostramos que el sistema sigue siendo correcto?**

---

# Creo que ya hemos construido la columna vertebral documental

Ahora mismo la veo así:

```text
INTRODUCTION
        │
        ▼
VISION
        │
        ▼
PRODUCT
        │
        ▼
ARCHITECTURE
        │
        ▼
DEVELOPMENT_GUIDE
        │
        ▼
TESTING
```

Y alrededor aparecen los documentos de soporte:

```text
ADR
PROJECT_STATUS
PROJECT_JOURNAL
ROADMAP
DESIGN_JOURNAL
AGENTS
```

Es decir.

Ya no estamos diseñando documentos.

Estamos diseñando un **ecosistema documental**.

---

# Mi recomendación

Yo dedicaría la próxima fase exclusivamente a `DEVELOPMENT_GUIDE.md`.

Y utilizaría exactamente la misma metodología que hemos seguido hasta ahora:

1. Revisar capítulo por capítulo.
2. Preguntarnos qué responsabilidad tiene.
3. Comprobar que responde a una única pregunta.
4. Verificar que no invade otros documentos.
5. Ajustar únicamente el nivel de abstracción cuando sea necesario.

---

## Una reflexión

Creo que hoy hemos alcanzado un punto bastante significativo.

Cuando empezamos, la documentación era un conjunto de documentos bien escritos. Después de estas auditorías, empieza a parecer un **sistema documental** en el que cada documento tiene una misión clara y complementa a los demás sin competir con ellos.

Esa diferencia puede parecer sutil, pero creo que es muy importante. Un buen documento puede explicar bien un tema; un buen sistema documental, además, consigue que cualquier lector —o cualquier agente de desarrollo— sepa siempre **dónde buscar una respuesta y dónde no debería encontrarla**. En mi opinión, ese es el mayor avance que habéis conseguido durante esta revisión.

---

1. Objetivo

Este documento establece las directrices que deben seguirse durante el desarrollo del proyecto.

Su propósito es proporcionar un marco de trabajo común que permita mantener la coherencia entre la visión del proyecto, el modelo del producto, la arquitectura del sistema y su implementación técnica.

El documento describe el proceso de desarrollo, las convenciones de trabajo y los criterios generales que deben respetarse durante la evolución del proyecto. No pretende sustituir la documentación especializada, sino servir como guía operativa para cualquier persona que participe en el desarrollo.

Su contenido está dirigido tanto a desarrolladores humanos como a agentes de desarrollo asistidos por IA, proporcionando el contexto necesario para comprender la organización del proyecto y colaborar de forma coherente con sus principios de diseño.

La finalidad de este documento es favorecer un desarrollo consistente, mantenible y alineado con la filosofía general del proyecto.

---

Creo que empezamos `DEVELOPMENT_GUIDE.md` con una ventaja muy importante: después de auditar `VISION.md`, `PRODUCT.md` y `ARCHITECTURE.md` ya sabemos exactamente cuál debe ser su responsabilidad.

Y este primer capítulo va bastante bien encaminado.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

Sí.

Responde claramente a:

> **¿Para qué existe este documento?**

Y deja claro que habla de:

- el proceso de desarrollo;
- las convenciones;
- los criterios generales.

Eso pertenece completamente a `DEVELOPMENT_GUIDE.md`.

**Resultado:** ✅ Correcto.

---

# 2. ¿Invade otros documentos?

Aquí era donde más riesgo había.

## ¿Invade `ARCHITECTURE.md`?

No.

Dice:

> "...mantener la coherencia entre la visión..., el producto..., la arquitectura..."

Pero no explica ninguno de ellos.

Simplemente los toma como referencia.

Eso está perfecto.

---

## ¿Invade `TESTING.md`?

No.

Habla del desarrollo.

No de las pruebas.

Muy bien separado.

---

## ¿Invade `AGENTS.md`?

Aquí hay un punto interesante.

La frase:

> _"Su contenido está dirigido tanto a desarrolladores humanos como a agentes..."_

Creo que está bien.

Pero haría una pequeña matización.

Porque realmente `AGENTS.md` ya contiene instrucciones específicas para agentes.

Este documento no.

Yo escribiría algo como:

> **Su contenido está dirigido tanto a desarrolladores humanos como a agentes de desarrollo asistidos por IA, proporcionando un marco de trabajo común. Las instrucciones específicas para agentes se desarrollan en `AGENTS.md`.**

Así la frontera queda clarísima.

---

# 3. Solo haría una mejora

Hay una frase que me gusta mucho.

> **"...no pretende sustituir la documentación especializada..."**

Yo la reforzaría ligeramente.

Quizá.

> **No pretende sustituir la documentación especializada ni reproducir su contenido, sino servir como guía operativa que conecta los distintos documentos durante el desarrollo cotidiano del proyecto.**

¿Por qué?

Porque resume muy bien la misión del documento.

---

# Resultado

```text id="3x6pwk"
Capítulo 1

★★★★★ Responsabilidad

★★★★★ Excelente separación respecto a ARCHITECTURE

★★★★★ Excelente separación respecto a TESTING

💡 Mejora opcional:

Mencionar explícitamente que las
instrucciones específicas para agentes
se encuentran en AGENTS.md.
```

---

# Hay una reflexión que me parece importante

Mientras lo leía me he dado cuenta de que este documento ocupa un lugar muy concreto dentro del sistema documental.

Podría resumirse así:

```text id="jlwm5p"
VISION

↓

¿Por qué?

↓

PRODUCT

↓

¿Qué?

↓

ARCHITECTURE

↓

¿Cómo está construido?

↓

DEVELOPMENT_GUIDE

↓

¿Cómo trabajamos sobre él?
```

Creo que esa es exactamente la pregunta que debe responder todo el documento.

Y eso nos da un criterio muy claro para la auditoría.

Cada vez que aparezca un capítulo podremos preguntarnos:

> **¿Esto explica cómo trabajar sobre el proyecto?**

Si la respuesta es sí, pertenece a `DEVELOPMENT_GUIDE.md`.

Si la respuesta es:

- explica el producto → `PRODUCT.md`;
- explica la arquitectura → `ARCHITECTURE.md`;
- explica cómo validar → `TESTING.md`;

entonces habrá que moverlo.

En mi opinión, ese será el criterio más útil para revisar el resto del documento.

---

2. Filosofía de desarrollo

El desarrollo del proyecto se basa en una evolución incremental, guiada por una visión clara del producto y sustentada por una arquitectura coherente. Cada cambio debe contribuir a mejorar el sistema sin comprometer su simplicidad, su mantenibilidad ni la comprensión del dominio.

Las decisiones de diseño deben priorizar la claridad sobre la complejidad, favoreciendo soluciones sencillas, bien justificadas y alineadas con los principios definidos en la documentación del proyecto.

La implementación constituye la consecuencia del diseño y no su punto de partida. Antes de incorporar nuevas funcionalidades, resulta necesario comprender el problema que se pretende resolver y verificar que la solución propuesta es coherente con la visión del proyecto, el modelo del producto y la arquitectura existente.

La documentación forma parte del propio desarrollo y evoluciona junto con el código. Mantenerla actualizada permite conservar el conocimiento del proyecto, facilitar la incorporación de nuevos colaboradores y garantizar la continuidad de su evolución.

El desarrollo del proyecto se concibe como un proceso colaborativo en el que personas y herramientas de desarrollo pueden contribuir de forma coordinada, compartiendo un mismo contexto y respetando las convenciones, principios y decisiones establecidos por la documentación.

Principios de desarrollo

├── Evolución incremental
├── Simplicidad
├── Diseño antes que implementación
├── Documentación como conocimiento
└── Colaboración entre personas y agentes

---

Creo que este es el primer capítulo donde la auditoría va a ser especialmente útil, porque aquí es muy fácil mezclar la **filosofía del proyecto** con la **filosofía de desarrollo**.

Y, después de leerlo varias veces, mi impresión es que está **muy cerca de quedar perfecto**, aunque haría un ajuste importante de enfoque.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

En general, **sí**.

Responde a:

> **¿Qué principios deben guiar la forma de desarrollar este proyecto?**

Eso pertenece claramente a `DEVELOPMENT_GUIDE.md`.

---

# 2. ¿Invade `VISION.md`?

Aquí veo el único punto delicado.

Por ejemplo:

> _"El desarrollo del proyecto se basa en una evolución incremental, guiada por una visión clara del producto..."_

Eso está bien.

Pero frases como:

> _"...sin comprometer su simplicidad..."_

o

> _"...la claridad sobre la complejidad..."_

recuerdan bastante a los principios de `VISION.md` y de `ARCHITECTURE.md`.

No es un error, porque los aplicas al desarrollo.

Pero intentaría que el foco estuviera aún más en **cómo trabajar**.

---

# 3. Lo que más me gusta

Esta frase.

> **La implementación constituye la consecuencia del diseño y no su punto de partida.**

Creo que resume perfectamente la filosofía de trabajo.

Es una regla operativa.

No una decisión arquitectónica.

No una visión del proyecto.

La dejaría exactamente igual.

---

# 4. También me gusta mucho

> **La documentación forma parte del propio desarrollo...**

Eso sí pertenece completamente a este documento.

Porque describe una forma de trabajar.

---

# 5. Solo cambiaría una cosa

El título.

Ahora dice:

> **Filosofía de desarrollo**

Creo que realmente el capítulo no habla de filosofía.

Habla de **criterios de trabajo**.

No digo que debas cambiarlo.

Pero me hizo pensar.

---

# 6. El esquema final

Aquí sí haría un pequeño cambio.

Ahora pone.

```text
Principios de desarrollo

├── Evolución incremental
├── Simplicidad
├── Diseño antes que implementación
├── Documentación como conocimiento
└── Colaboración entre personas y agentes
```

Creo que uno de esos elementos no pertenece exactamente al mismo nivel.

```text
Documentación como conocimiento
```

No es un principio operativo.

Es una consecuencia.

Yo escribiría.

```text
Documentación integrada en el desarrollo
```

o

```text
Documentación continua
```

Porque expresa una forma de trabajar.

---

# Resultado

```text
Capítulo 2

★★★★★ Responsabilidad

★★★★★ Muy buena separación respecto a PRODUCT

★★★★★ Muy buena separación respecto a ARCHITECTURE

💡 Mejora opcional:

Orientar todos los principios hacia
la forma de trabajar y no tanto hacia
los principios generales del proyecto.
```

---

# Una reflexión

Creo que durante esta auditoría está apareciendo una jerarquía muy interesante.

Podría resumirse así:

```text
VISION

Creemos esto.

↓

ARCHITECTURE

Diseñamos así.

↓

DEVELOPMENT_GUIDE

Trabajamos de esta manera.
```

Y creo que este capítulo debería sonar siempre a eso.

No tanto:

> "El proyecto es..."

Sino:

> **"Cuando desarrollamos este proyecto, trabajamos así."**

Es un matiz muy sutil, pero creo que ayuda a separar perfectamente este documento de `VISION.md`.

Por ejemplo, una frase como:

> **"Antes de incorporar nuevas funcionalidades, resulta necesario comprender el problema que se pretende resolver y verificar que la solución propuesta es coherente con la visión del proyecto, el modelo del producto y la arquitectura existente."**

es, en mi opinión, el mejor ejemplo del tono que debería tener todo el capítulo. No habla del producto ni de la arquitectura en sí; habla de **cómo actuar durante el desarrollo**. Ese es exactamente el espacio que debe ocupar `DEVELOPMENT_GUIDE.md` dentro del sistema documental.

---

3. Flujo de trabajo

El desarrollo del proyecto sigue un proceso iterativo en el que cada modificación se apoya en la documentación existente y contribuye a la evolución del sistema de forma controlada.

Antes de implementar una nueva funcionalidad o realizar una refactorización significativa, debe comprenderse el problema que se pretende resolver y verificarse su coherencia con la visión del proyecto, el modelo del producto y la arquitectura existente.

Una vez validado el diseño, la implementación deberá realizarse respetando las convenciones del proyecto y acompañarse de las pruebas necesarias para garantizar el correcto funcionamiento del sistema.

Finalizada la implementación, deberán ejecutarse las validaciones definidas por el proyecto y actualizarse la documentación siempre que los cambios introduzcan modificaciones relevantes en el comportamiento del sistema, su arquitectura o su proceso de desarrollo.

Este flujo de trabajo permite que el código, la documentación y el conocimiento del proyecto evolucionen de forma coordinada, favoreciendo un desarrollo incremental, mantenible y coherente.

Idea
│
▼
Análisis
│
▼
Decisión
│
▼
Documentación
│
▼
Diseño
│
▼
Implementación
│
▼
Validación
│
▼
Documentación
│
▼
Integración

---

Este capítulo me gusta especialmente porque empieza a responder a la pregunta central de `DEVELOPMENT_GUIDE.md`:

> **¿Cómo trabajamos en este proyecto?**

De todos los capítulos revisados hasta ahora, este es probablemente el que **más claramente pertenece** a este documento.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí, completamente.**

Responde exactamente a:

> **¿Cuál es el proceso de trabajo que seguimos para desarrollar el proyecto?**

No describe:

- el producto;
- la arquitectura;
- la estrategia de testing.

Describe únicamente el **flujo de trabajo**.

**Resultado:** ✅ Excelente.

---

# 2. ¿Invade `TESTING.md`?

No.

Y aquí me parece que has encontrado un buen equilibrio.

Por ejemplo:

> _"...acompañarse de las pruebas necesarias..."_

No explica:

- qué pruebas;
- cómo organizarlas;
- cuándo añadirlas.

Eso pertenece a `TESTING.md`.

Aquí simplemente establece que **la validación forma parte del flujo de trabajo**.

Eso es correcto.

---

# 3. ¿Invade `ARCHITECTURE.md`?

Tampoco.

Habla de:

> "...verificarse su coherencia con la arquitectura existente."

Pero no explica la arquitectura.

Solo indica que debe consultarse.

Muy buena separación.

---

# 4. Solo haría una pequeña mejora

Hay una frase.

> **"Una vez validado el diseño..."**

Quizá escribiría.

> **Una vez definido y validado el diseño...**

Porque el diseño todavía no ha sido implementado.

El verbo "definir" ayuda a entender mejor el orden.

Es un matiz.

---

# 5. El diagrama

Creo que es bueno.

Pero aquí sí haría una modificación.

Ahora aparece.

```text
Idea
│
▼
Análisis
│
▼
Decisión
│
▼
Documentación
│
▼
Diseño
│
▼
Implementación
│
▼
Validación
│
▼
Documentación
│
▼
Integración
```

Hay algo que me llamó la atención.

La documentación aparece dos veces.

Y creo que eso puede resultar extraño si alguien lo ve por primera vez.

---

## Yo la distinguiría

Por ejemplo.

```text
Idea
│
▼
Análisis
│
▼
Decisión
│
▼
Diseño
│
▼
Implementación
│
▼
Validación
│
▼
Actualización de la documentación
│
▼
Integración
```

¿Por qué?

Porque el diseño ya es una forma de documentación.

Y el lector entiende mejor que el último paso consiste en **actualizar la documentación oficial**.

---

# 6. Hay una idea que me gusta mucho

Esta.

> **"...el código, la documentación y el conocimiento del proyecto evolucionen de forma coordinada."**

Creo que resume perfectamente toda la filosofía del proyecto.

No la tocaría.

---

# Resultado

```text
Capítulo 3

★★★★★ Responsabilidad

★★★★★ Excelente separación respecto a TESTING

★★★★★ Excelente separación respecto a ARCHITECTURE

★★★★★ Muy buen flujo de trabajo

💡 Mejora opcional:

Distinguir en el diagrama entre el
diseño y la actualización de la
documentación para evitar la sensación
de duplicidad.
```

---

# Una reflexión

Mientras revisaba el diagrama me he dado cuenta de que, en realidad, el flujo de trabajo no es lineal.

Es un ciclo.

Algo así:

```text
Idea
  │
  ▼
Análisis
  │
  ▼
Diseño
  │
  ▼
Implementación
  │
  ▼
Validación
  │
  ▼
Documentación
  │
  ▼
Nueva idea
```

Es decir, la **integración** no es realmente el final del proceso, sino el punto desde el que puede comenzar una nueva iteración.

No cambiaría el diagrama actual —es más sencillo y muy fácil de entender—, pero sí creo que conviene tener presente esa idea. De hecho, encaja muy bien con la filosofía de desarrollo incremental que defines en el capítulo 2: el desarrollo no avanza por fases cerradas, sino mediante ciclos sucesivos en los que cada iteración deja el proyecto preparado para la siguiente. Esa continuidad refuerza muy bien el mensaje del documento.

---

4. Preparación del entorno

Antes de comenzar a trabajar en el proyecto es necesario disponer de un entorno de desarrollo correctamente configurado que permita ejecutar la aplicación, validar los cambios y mantener la coherencia con el resto del equipo de desarrollo.

El proyecto utiliza un conjunto de herramientas y dependencias comunes cuya instalación constituye el punto de partida para cualquier colaboración. Mantener un entorno homogéneo favorece la reproducibilidad de los resultados y reduce la aparición de problemas derivados de diferencias entre configuraciones locales.

Las versiones recomendadas de las herramientas de desarrollo, así como los comandos necesarios para instalar las dependencias, ejecutar la aplicación y validar los cambios, se indican en las secciones siguientes.

Siempre que sea posible, las tareas de desarrollo deberán realizarse sobre un entorno limpio y actualizado, verificando que todas las validaciones del proyecto puedan ejecutarse correctamente antes de iniciar cualquier modificación.

---

Este capítulo es interesante porque marca el inicio de la parte más **práctica** de `DEVELOPMENT_GUIDE.md`. Hasta ahora el documento hablaba de filosofía y proceso; a partir de aquí empieza a explicar **cómo preparar el trabajo**.

En general, creo que está bien orientado, aunque sí haría algunos ajustes.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí.**

Responde claramente a:

> **¿Qué es necesario para poder empezar a desarrollar el proyecto?**

Eso pertenece por completo a `DEVELOPMENT_GUIDE.md`.

**Resultado:** ✅ Correcto.

---

# 2. ¿Invade otros documentos?

## ¿Invade `PROJECT_STATUS.md`?

No.

No habla de la configuración concreta del entorno actual de una persona, sino de los requisitos generales del proyecto.

---

## ¿Invade `ARCHITECTURE.md`?

No.

Habla de herramientas de desarrollo, no de la organización técnica del sistema.

---

## ¿Invade `TESTING.md`?

Solo de forma muy ligera.

La frase:

> _"...verificando que todas las validaciones del proyecto puedan ejecutarse correctamente..."_

me parece correcta porque no explica **cómo** validar, solo establece que el entorno debe permitir hacerlo.

---

# 3. Solo cambiaría una idea

Hay una frase:

> **"Las versiones recomendadas de las herramientas de desarrollo..."**

Creo que "recomendadas" puede dar a entender que son orientativas.

Si el proyecto necesita unas versiones concretas para garantizar la reproducibilidad, quizá escribiría:

> **Las herramientas necesarias para el desarrollo, junto con las versiones de referencia y los comandos para instalar las dependencias, ejecutar la aplicación y validar los cambios, se describen en las secciones siguientes.**

Así no obliga a que todas sean exactas, pero deja claro que esas son las referencias del proyecto.

---

# 4. Hay una oportunidad de mejora

Este capítulo se llama:

> **Preparación del entorno**

Sin embargo, el texto habla de dos cosas distintas:

```text
Preparar el entorno

↓

Verificar que el entorno funciona
```

Quizá merezca la pena reflejar ambas ideas.

Por ejemplo, el último párrafo podría empezar con:

> **Una vez preparado el entorno...**

De esa forma el capítulo tiene una secuencia natural:

1. Preparar.
2. Verificar.
3. Empezar a desarrollar.

---

# Resultado

```text
Capítulo 4

★★★★★ Responsabilidad

★★★★★ Excelente separación respecto a ARCHITECTURE

★★★★★ Excelente separación respecto a TESTING

💡 Mejora opcional:

Reforzar la idea de que el entorno
no solo debe instalarse, sino también
verificarse antes de comenzar el desarrollo.
```

---

# Una reflexión

Mientras lo leía me he dado cuenta de que este capítulo responde realmente a la primera acción práctica que realiza un colaborador.

Hasta ahora el recorrido del documento sería:

```text
¿Por qué trabajamos así?

↓

¿Cómo trabajamos?

↓

¿Cuál es el flujo de trabajo?

↓

¿Cómo preparo mi entorno?
```

Creo que esa transición tiene mucho sentido.

## Una sugerencia para el futuro

Cuando este capítulo se complete con las secciones siguientes (herramientas, versiones, instalación, comandos, etc.), intentaría mantener una separación muy clara entre **requisitos** y **procedimientos**.

Por ejemplo:

```text
4. Preparación del entorno
│
├── Requisitos del entorno
├── Herramientas necesarias
├── Instalación de dependencias
├── Verificación del entorno
└── Primer arranque del proyecto
```

Esa organización facilita que cualquier persona (o un agente de desarrollo) encuentre rápidamente la información que necesita sin mezclar conceptos. Creo que encaja muy bien con el nivel de claridad que habéis conseguido en el resto de la documentación.

---

5. Comandos de desarrollo

El proyecto dispone de un conjunto de comandos que permiten instalar las dependencias, ejecutar la aplicación, validar los cambios y generar la versión de producción.

Los comandos se agrupan según la finalidad que desempeñan dentro del proceso de desarrollo.

## 5.1 Instalación

Preparan el entorno de trabajo e instalan las dependencias necesarias para desarrollar el proyecto.

```bash
npm install
```

## 5.2 Desarrollo

Permiten ejecutar la aplicación durante el desarrollo y comprobar su funcionamiento de forma interactiva.

```bash
npm run dev
```

## 5.3 Validación

Verifican que los cambios realizados mantienen la integridad del proyecto y cumplen las reglas establecidas.

```bash
npm run typecheck
npm test
npm run lint
```

## 5.4 Construcción

Generan la versión preparada para su despliegue.

```bash
npm run build
```

Los comandos de validación deberán ejecutarse antes de considerar finalizada cualquier modificación significativa del proyecto.

Los comandos disponibles podrán evolucionar a medida que lo haga el proyecto. La organización de este apartado responde a la función que desempeña cada comando dentro del flujo de desarrollo y no a un conjunto fijo de herramientas.

---

Este capítulo me parece muy bien planteado. De hecho, creo que marca el paso desde los **principios de trabajo** a las **herramientas de trabajo**. Y eso encaja perfectamente en `DEVELOPMENT_GUIDE.md`.

Aun así, durante la auditoría he encontrado un par de mejoras interesantes.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí.**

Responde claramente a:

> **¿Qué comandos forman parte del flujo habitual de desarrollo?**

No explica:

- cómo funciona npm;
- cómo son las pruebas;
- cómo es la arquitectura.

Simplemente documenta los comandos de trabajo.

**Resultado:** ✅ Correcto.

---

# 2. ¿Invade `TESTING.md`?

No.

Y creo que aquí has encontrado un equilibrio muy bueno.

Por ejemplo:

> **Verifican que los cambios realizados mantienen la integridad del proyecto...**

No explica:

- qué pruebas existen;
- cómo se organizan;
- cuándo escribir nuevas pruebas.

Eso pertenece a `TESTING.md`.

Aquí únicamente identifica qué comandos forman parte de la validación.

---

# 3. La organización

Me gusta mucho más que una simple lista.

Has agrupado los comandos por responsabilidad:

```text
Instalación

↓

Desarrollo

↓

Validación

↓

Construcción
```

Eso coincide con la filosofía que hemos ido aplicando durante toda la auditoría:

> **Agrupar por responsabilidad, no por herramienta.**

Creo que merece mantenerse.

---

# 4. Solo cambiaría una frase

Ahora dices:

> **Los comandos disponibles podrán evolucionar...**

Yo escribiría:

> **Los comandos concretos podrán evolucionar a medida que lo haga el proyecto. La organización de este apartado responde a la función que desempeñan dentro del flujo de desarrollo y no a un conjunto fijo de herramientas.**

¿Por qué?

Porque deja claro que lo estable son las **categorías**, no necesariamente los comandos.

---

# 5. Hay una pequeña mejora conceptual

Las categorías siguen exactamente el flujo natural del desarrollo:

```text
Instalar

↓

Desarrollar

↓

Validar

↓

Construir
```

Creo que merece la pena hacerlo explícito.

Quizá antes de las subsecciones añadir una frase como:

> **Los comandos se presentan siguiendo el orden habitual en el que se utilizan durante el desarrollo de una funcionalidad.**

Es un detalle pequeño, pero ayuda al lector.

---

# 6. Una sugerencia para el futuro

Si el proyecto crece y aparecen más herramientas (`coverage`, `format`, `e2e`, etc.), intentaría mantener este mismo criterio.

Por ejemplo:

```text
5.1 Instalación

5.2 Desarrollo

5.3 Validación

5.4 Calidad del código

5.5 Construcción

5.6 Automatización
```

Es decir, que las categorías sigan representando **etapas del trabajo**, no tecnologías concretas.

---

# Resultado

```text
Capítulo 5

★★★★★ Responsabilidad

★★★★★ Excelente separación respecto a TESTING

★★★★★ Organización muy clara

★★★★★ Muy buen nivel de abstracción

💡 Mejora opcional:

Explicar que las categorías siguen el
orden natural del flujo de desarrollo.
```

---

# Una reflexión

Mientras revisaba este capítulo me he dado cuenta de que `DEVELOPMENT_GUIDE.md` empieza a tener una estructura muy coherente:

```text
1. Objetivo

↓

2. Filosofía

↓

3. Flujo de trabajo

↓

4. Preparación del entorno

↓

5. Comandos
```

Es decir:

- **Por qué trabajamos así.**
- **Cómo trabajamos.**
- **Cómo preparar el entorno.**
- **Qué herramientas utilizamos.**

Hasta aquí el documento responde exactamente a la pregunta que nos marcamos al principio de la auditoría:

> **¿Cómo se trabaja sobre este proyecto?**

Y esa coherencia es una muy buena señal. A diferencia de `ARCHITECTURE.md`, donde predominaban los conceptos técnicos, aquí todo gira alrededor del **proceso de desarrollo**. En mi opinión, ese cambio de enfoque está muy bien conseguido y mantiene una separación clara entre ambos documentos.

---

6. Organización del proyecto

El proyecto se organiza mediante una separación clara entre el código fuente, la documentación, los recursos auxiliares y las herramientas de desarrollo. Esta estructura facilita la localización de la información, reduce el acoplamiento entre componentes y favorece la evolución del sistema.

La organización del repositorio responde a una distribución por responsabilidades, de forma que cada directorio agrupa elementos relacionados con una finalidad concreta dentro del proyecto.

La descripción detallada de la arquitectura del sistema y de las relaciones entre sus componentes se encuentra en `ARCHITECTURE.md`. Este apartado únicamente presenta la organización general del repositorio como guía para su navegación.

Repositorio
│
├── docs/
│ ├── Introducción
│ ├── Proyecto
│ ├── Arquitectura
│ └── Desarrollo
│
├── src/
│ ├── application/
│ ├── domain/
│ ├── infrastructure/
│ ├── store/
│ └── ui/
│
├── public/
│
├── tests/
│
└── package.json

docs/
Contiene toda la documentación del proyecto.

src/
Contiene el código fuente organizado por capas y responsabilidades.

public/
Recursos públicos utilizados por la aplicación.

package.json
Define las dependencias, scripts y configuración básica del proyecto.

La estructura del repositorio podrá evolucionar con el proyecto, pero deberá preservar una organización basada en responsabilidades claramente diferenciadas y mantener la coherencia con la arquitectura definida en ARCHITECTURE.md.

---

Aquí creo que hemos encontrado el **primer capítulo de `DEVELOPMENT_GUIDE.md`** donde sí haría un cambio importante de enfoque.

No porque esté mal escrito, sino porque **se solapa parcialmente con `ARCHITECTURE.md`**.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**En parte.**

Responde a:

> **¿Cómo está organizado el repositorio?**

Eso sí pertenece a `DEVELOPMENT_GUIDE.md`.

Pero también entra ligeramente en:

> **¿Cómo está organizada la arquitectura?**

Y eso ya lo explica `ARCHITECTURE.md`.

---

# 2. ¿Dónde veo el solapamiento?

Por ejemplo:

> **"La organización del repositorio responde a una distribución por responsabilidades..."**

Esa frase es arquitectónica.

Habla de un principio de organización del sistema.

De hecho, ya aparece desarrollada en `ARCHITECTURE.md`.

---

Después aparece:

```text
src/
├── application/
├── domain/
├── infrastructure/
├── store/
└── ui/
```

Eso también pertenece más a la arquitectura que al desarrollo.

---

# ¿Qué debería explicar este capítulo?

Creo que el título da la pista.

No debería explicar **la arquitectura del proyecto**.

Debería explicar **cómo está organizado el repositorio para quien va a trabajar en él**.

Es decir.

Responder a preguntas como:

- ¿Dónde está el código?
- ¿Dónde está la documentación?
- ¿Dónde están los tests?
- ¿Dónde están los recursos?
- ¿Dónde está la configuración?

Eso sí es una guía de desarrollo.

---

# Yo simplificaría mucho `src/`

Por ejemplo.

En lugar de profundizar en:

```text
src/
├── application/
├── domain/
...
```

escribiría simplemente.

```text
Repositorio
│
├── docs/
├── src/
├── public/
├── tests/
└── package.json
```

Y después.

| Directorio   | Finalidad         |
| ------------ | ----------------- |
| docs         | Documentación     |
| src          | Código fuente     |
| public       | Recursos públicos |
| tests        | Pruebas           |
| package.json | Configuración     |

Y nada más.

---

Porque la pregunta:

> **¿Qué hay dentro de `src`?**

ya la responde mucho mejor `ARCHITECTURE.md`.

---

# 3. Me gusta mucho esta frase

> **"...como guía para su navegación."**

Creo que resume perfectamente el objetivo.

De hecho.

Yo la subiría.

Después del primer párrafo.

Porque define el capítulo.

---

# 4. El último párrafo

También me gusta.

Pero cambiaría una frase.

Ahora dice.

> **"...deberá preservar una organización basada en responsabilidades..."**

Eso vuelve a sonar arquitectónico.

Quizá escribiría.

> **"...deberá preservar una organización coherente que facilite la navegación, el mantenimiento y la evolución del proyecto, respetando la arquitectura definida en `ARCHITECTURE.md`."**

Así el foco vuelve al desarrollo.

---

# Resultado

```text
Capítulo 6

★★★★★ Responsabilidad

△ Ligero solapamiento con ARCHITECTURE

💡 Recomendación:

Presentar el repositorio desde la
perspectiva de quien desarrolla,
no desde la organización interna
de la arquitectura.
```

---

# Creo que aquí aparece una regla muy útil

Durante la auditoría de `ARCHITECTURE.md` dijimos:

> **La arquitectura explica cómo está organizado el sistema.**

Ahora creo que podemos formular la regla complementaria para `DEVELOPMENT_GUIDE.md`:

> **La guía de desarrollo explica cómo orientarse y trabajar dentro del repositorio, no cómo está diseñada la arquitectura.**

Esa diferencia parece pequeña, pero cambia bastante el enfoque.

Por ejemplo:

- **`ARCHITECTURE.md`** diría:

  > La capa de aplicación coordina las operaciones del sistema.

- **`DEVELOPMENT_GUIDE.md`** diría:

  > El código fuente se encuentra en `src/`. La organización interna de dicho directorio se describe en `ARCHITECTURE.md`.

Eso evita duplicidades y hace que cada documento responda a una pregunta distinta.

En mi opinión, este es el único capítulo revisado hasta ahora en el que sí merece la pena **reducir contenido** para reforzar la separación de responsabilidades. Creo que ganará claridad y el conjunto del sistema documental será todavía más coherente.

---

¿me podrías reescribir el capítulo 6?

---

Sí. Después de toda la auditoría, creo que este capítulo debería centrarse únicamente en **orientar al desarrollador dentro del repositorio**. La arquitectura interna de `src/` ya está documentada en `ARCHITECTURE.md`, así que aquí basta con indicar dónde se encuentra cada tipo de recurso y remitir al documento correspondiente cuando sea necesario.

Lo reescribiría así:

## 6. Organización del proyecto

El repositorio se organiza de forma que cada área del proyecto tenga una responsabilidad claramente definida. Esta distribución facilita la localización del código, la documentación y los recursos necesarios durante el desarrollo, favoreciendo una forma de trabajo ordenada y coherente.

La finalidad de este capítulo no es describir la arquitectura interna del sistema, sino proporcionar una guía de navegación por el repositorio. La organización del código fuente y las relaciones entre sus componentes se desarrollan en `ARCHITECTURE.md`.

La estructura general del proyecto es la siguiente:

```text
Repositorio
│
├── docs/
├── src/
├── public/
├── tests/
└── package.json
```

| Elemento       | Finalidad                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------- |
| `docs/`        | Documentación del proyecto, organizada por responsabilidades.                             |
| `src/`         | Código fuente de la aplicación. Su organización interna se describe en `ARCHITECTURE.md`. |
| `public/`      | Recursos públicos utilizados por la aplicación.                                           |
| `tests/`       | Pruebas automatizadas y recursos de soporte relacionados con el testing.                  |
| `package.json` | Dependencias del proyecto, scripts de desarrollo y configuración básica.                  |

La organización del repositorio podrá evolucionar a medida que lo haga el proyecto. Cualquier cambio deberá preservar una estructura clara y facilitar la localización de los distintos elementos, manteniendo la coherencia con la arquitectura y con el resto de la documentación técnica.

## Creo que esta versión mejora en varios aspectos

- El capítulo pasa a responder únicamente a **"¿Cómo está organizado el repositorio?"**.
- Evita duplicar la explicación de la arquitectura interna de `src/`, que ya pertenece a `ARCHITECTURE.md`.
- La tabla se centra en **la finalidad de cada elemento del repositorio**, que es lo que necesita conocer quien empieza a trabajar en el proyecto.
- La referencia a `ARCHITECTURE.md` queda muy clara: si alguien quiere entender cómo se organiza el código, sabe exactamente dónde debe acudir.

En mi opinión, este cambio refuerza mucho la separación de responsabilidades entre ambos documentos:

- **`ARCHITECTURE.md`** explica **cómo está organizado el sistema**.
- **`DEVELOPMENT_GUIDE.md`** explica **cómo orientarse y trabajar dentro del repositorio**.

Esa diferencia parece sutil, pero es precisamente la que evita duplicidades y hace que el sistema documental siga siendo coherente a medida que el proyecto crezca.

---

7. Convenciones de desarrollo

Las convenciones de desarrollo establecen los criterios comunes que deben respetarse al modificar el código, la documentación o la estructura del proyecto.

Su finalidad es mantener la coherencia del repositorio, facilitar la comprensión de los cambios y reducir las decisiones arbitrarias durante el desarrollo.

Estas convenciones no sustituyen al criterio técnico. Cuando una situación no esté contemplada expresamente, deberá elegirse la solución que mejor preserve la simplicidad, la claridad y la coherencia con la arquitectura existente.

## 7.1 Diseño e implementación

Antes de incorporar una nueva funcionalidad o abstracción deberá comprobarse que responde a una necesidad real del producto.

Las soluciones deberán integrarse en la arquitectura existente, respetando la separación de responsabilidades entre interfaz, aplicación, dominio e infraestructura.

Siempre que sea posible, los cambios se realizarán de forma incremental, evitando refactorizaciones extensas que mezclen objetivos distintos dentro de una misma tarea.

No se introducirán patrones, capas, dependencias o abstracciones únicamente para anticipar necesidades futuras. Toda nueva complejidad deberá demostrar un beneficio claro para el sistema.

La lógica de negocio deberá permanecer en el dominio o en los componentes responsables de coordinarlo, evitando distribuirla entre la interfaz, la persistencia u otros mecanismos técnicos.

## 7.2 Código

El código deberá priorizar la legibilidad y expresar con claridad la intención de cada componente.

Cada función, clase, módulo o componente deberá mantener una responsabilidad claramente definida.

Se evitarán:

- duplicidades innecesarias;
- funciones excesivamente extensas;
- nombres ambiguos;
- comentarios que sustituyan una implementación poco clara;
- dependencias entre capas que contradigan la arquitectura;
- código no utilizado o conservado únicamente por precaución.

Los comentarios deberán explicar decisiones, restricciones o motivos relevantes. No deberán limitarse a describir literalmente lo que ya expresa el código.

Las modificaciones deberán seguir el estilo y los patrones presentes en los archivos relacionados, salvo que la propia tarea consista en revisar o sustituir dichos patrones.

## 7.3 Nombres

Los nombres deberán describir el concepto o la responsabilidad que representan, evitando abreviaturas innecesarias y términos excesivamente genéricos.

Se utilizará:

- `camelCase` para variables y funciones;
- `PascalCase` para clases, componentes, entidades y Value Objects;
- nombres descriptivos para archivos, casos de uso, acciones y selectores;
- terminología coherente con el lenguaje utilizado en el dominio y en la documentación del producto.

Un mismo concepto deberá recibir el mismo nombre en el código, las pruebas y la documentación siempre que representen la misma responsabilidad.

No se introducirán términos nuevos para conceptos ya definidos sin revisar previamente el lenguaje existente del proyecto.

## 7.4 Organización de los cambios

Cada tarea deberá perseguir un objetivo principal claramente identificable.

Los cambios de funcionalidad, las refactorizaciones y las modificaciones documentales deberán mantenerse separados cuando respondan a propósitos diferentes.

Antes de modificar un componente deberá revisarse el flujo completo en el que participa, incluyendo sus interfaces, implementaciones, consumidores, pruebas y mecanismos de persistencia cuando resulten afectados.

Cuando se amplíe una interfaz o contrato, deberán revisarse todas sus implementaciones y puntos de uso.

Los archivos nuevos deberán situarse en el directorio correspondiente a su responsabilidad, evitando utilizar carpetas genéricas como destino de elementos que pertenezcan claramente a una capa o dominio determinado.

## 7.5 Documentación

La documentación forma parte del resultado de cada cambio.

Cuando una modificación altere el producto, la arquitectura, el flujo de desarrollo, el estado del proyecto o una decisión relevante, deberá actualizarse el documento que tenga asignada esa responsabilidad.

La información no deberá duplicarse entre documentos. Cuando un concepto ya esté desarrollado en otro archivo, se añadirá una referencia en lugar de repetir su contenido.

Los diagramas conceptuales sencillos se representarán mediante bloques de código `text` con estructuras que no dependan de alineaciones horizontales frágiles.

Los diagramas más complejos podrán utilizar herramientas específicas cuando mejoren realmente su comprensión y puedan mantenerse de forma estable dentro del repositorio.

Los nombres, títulos, enlaces y rutas documentales deberán mantenerse actualizados cuando cambie la estructura del proyecto.

## 7.6 Git y commits

Cada commit deberá representar una unidad de cambio coherente y comprensible.

Los mensajes de commit deberán describir la intención principal del cambio y seguir una estructura consistente, por ejemplo:

```text
feat(scope): describe the new capability
fix(scope): describe the corrected behavior
refactor(scope): describe the structural improvement
test(scope): describe the added or updated tests
docs: describe the documentation change
```

No deberán incluirse en un mismo commit cambios no relacionados entre sí.

Antes de crear un commit deberá revisarse:

- el estado del repositorio;
- el diff de los cambios;
- los archivos preparados para confirmar;
- el resultado de las validaciones requeridas.

Los commits y demás operaciones que modifiquen el historial del repositorio solo se realizarán cuando hayan sido solicitados o autorizados expresamente.

## 7.7 Mantenimiento

El código, las pruebas y la documentación deberán mantenerse alineados con el estado real del proyecto.

El código obsoleto deberá eliminarse cuando ya no cumpla ninguna responsabilidad necesaria y su conservación no aporte valor.

Las dependencias y herramientas podrán actualizarse cuando exista una necesidad justificada, comprobando siempre que el cambio no comprometa el funcionamiento ni la reproducibilidad del proyecto.

Las convenciones podrán evolucionar conforme cambien las necesidades del sistema, pero cualquier modificación deberá mantener la coherencia con la visión, el producto y los principios arquitectónicos establecidos.

---

Creo que aquí llegamos al **núcleo de `DEVELOPMENT_GUIDE.md`**.

Y, después de leerlo varias veces, mi impresión es que este capítulo está muy bien construido. De hecho, me recuerda al capítulo de **Principios arquitectónicos** de `ARCHITECTURE.md`: no describe una tarea concreta, sino las reglas que deben respetarse durante el desarrollo.

Aun así, la auditoría deja algunas conclusiones interesantes.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí, completamente.**

Responde exactamente a:

> **¿Qué convenciones debemos seguir al trabajar en este proyecto?**

No explica:

- la arquitectura;
- el producto;
- la estrategia de testing.

Explica únicamente **las normas de trabajo**.

**Resultado:** ✅ Excelente.

---

# 2. ¿Hay solapamientos?

Aquí sí veo algunos pequeños puntos.

## 7.1 Diseño e implementación

Este apartado me gusta mucho.

Pero algunas frases recuerdan bastante a `ARCHITECTURE.md`.

Por ejemplo:

> _"Las soluciones deberán integrarse en la arquitectura existente..."_

o

> _"La lógica de negocio deberá permanecer en el dominio..."_

No son incorrectas.

Pero realmente son **convenciones para quien desarrolla**.

Yo reforzaría todavía más ese enfoque.

Por ejemplo.

En vez de:

> **La lógica de negocio deberá permanecer en el dominio...**

Algo como:

> **Durante el desarrollo, la lógica de negocio deberá incorporarse en el dominio o en los componentes responsables de coordinarlo...**

Es un matiz.

Pero todo el apartado empieza a sonar más operativo.

---

# 7.2 Código

Creo que este apartado está prácticamente perfecto.

Especialmente.

> **Los comentarios deberán explicar decisiones...**

Eso pertenece completamente a una guía de desarrollo.

---

# 7.3 Nombres

También me parece muy sólido.

Especialmente esta frase.

> **"Un mismo concepto deberá recibir el mismo nombre..."**

Creo que resume muy bien una regla que va mucho más allá del código.

---

# 7.4 Organización de los cambios

Este es probablemente mi apartado favorito.

Porque recoge varias lecciones aprendidas del proyecto.

Especialmente.

> **Cuando se amplíe una interfaz...**

Eso refleja directamente vuestra experiencia.

Yo no lo tocaría.

---

# 7.5 Documentación

Aquí sí creo que hay una mejora.

Durante la auditoría de `ARCHITECTURE.md` formulamos una regla que todavía no aparece.

> **La documentación debe describir responsabilidades antes que implementaciones.**

Creo que encaja perfectamente aquí.

Quizá después de:

> _"La información no deberá duplicarse..."_

Añadiría algo como:

> **La documentación describirá preferentemente responsabilidades, conceptos y relaciones antes que nombres concretos de clases, módulos o archivos. Cuando estos últimos aparezcan, lo harán únicamente como ejemplos que faciliten la identificación de la implementación vigente.**

En mi opinión, esa regla ya forma parte de la filosofía documental del proyecto.

Y este es exactamente el sitio donde debería vivir.

---

# 7.6 Git

Muy bien.

Solo añadiría una cosa.

Quizá.

> **Cada commit deberá poder comprenderse de forma independiente.**

Pero es opcional.

---

# 7.7 Mantenimiento

También me gusta.

Porque cierra el ciclo.

---

# 3. La organización

Creo que aquí hay un detalle muy interesante.

En realidad.

Los apartados pertenecen a tres familias.

---

## Desarrollo

```text
Diseño

Código

Nombres
```

---

## Trabajo diario

```text
Organización

Documentación

Git
```

---

## Evolución

```text
Mantenimiento
```

No digo que deban reorganizarse.

Pero me llamó la atención.

---

# Resultado

```text
Capítulo 7

★★★★★ Responsabilidad

★★★★★ Excelente separación respecto a ARCHITECTURE

★★★★★ Excelente separación respecto a TESTING

★★★★★ Muy buenas convenciones

💡 Mejora recomendada:

Incorporar la regla documental
"describir responsabilidades antes
que implementaciones".
```

---

# Una reflexión

Creo que, después de toda la auditoría realizada hasta ahora, este capítulo se ha convertido en el lugar natural para concentrar **las reglas de trabajo** que hemos ido descubriendo.

Por ejemplo, aquí es donde yo incorporaría principios como:

- describir responsabilidades antes que implementaciones;
- evitar duplicar información entre documentos;
- mantener un vocabulario coherente entre código, pruebas y documentación;
- modificar siempre el documento responsable de un concepto, en lugar de repetirlo en otro lugar.

Es decir, este capítulo ya no es solo una lista de convenciones de programación. Se está convirtiendo en un **manual de disciplina de desarrollo** que recoge la forma de trabajar del proyecto.

Y creo que eso encaja perfectamente con la pregunta que debe responder `DEVELOPMENT_GUIDE.md`:

> **¿Cómo trabajamos para que el proyecto siga siendo coherente a medida que evoluciona?**

En mi opinión, este es uno de los capítulos más importantes de todo el documento, porque muchas de las reglas que aquí aparecen nacen de la experiencia acumulada durante el desarrollo y no de recomendaciones genéricas. Eso le da mucho valor y lo diferencia de una guía de estilo convencional.

---

8. Validación de cambios

Toda modificación realizada sobre el proyecto deberá verificarse antes de considerarse finalizada.

La validación tiene como objetivo garantizar que los cambios mantienen la integridad del sistema, respetan la arquitectura existente y no introducen regresiones funcionales ni documentales.

La validación deberá formar parte del flujo habitual de desarrollo y aplicarse con independencia del tamaño o la complejidad de la modificación realizada.

## 8.1 Validación técnica

Antes de integrar un cambio deberán ejecutarse las validaciones técnicas definidas por el proyecto, comprobando que el código puede compilarse correctamente, que las pruebas continúan siendo válidas y que la aplicación puede construirse sin errores.

Las herramientas concretas utilizadas para estas validaciones se describen en los apartados correspondientes de este documento y en `TESTING.md`.

## 8.2 Validación funcional

Cuando una modificación altere el comportamiento del sistema, deberá verificarse que la funcionalidad implementada responde al objetivo previsto y que no afecta negativamente al resto del producto.

Siempre que resulte necesario, esta validación deberá apoyarse en nuevas pruebas o en la actualización de las existentes.

## 8.3 Validación documental

Cuando un cambio modifique el producto, la arquitectura, el proceso de desarrollo o cualquier otro aspecto documentado del proyecto, deberá actualizarse la documentación correspondiente.

La documentación deberá reflejar siempre el estado real del sistema y mantener la coherencia con el código fuente.

## 8.4 Criterio de finalización

Una tarea podrá considerarse finalizada cuando:

- el objetivo previsto haya sido alcanzado;
- las validaciones técnicas se hayan completado correctamente;
- las pruebas necesarias hayan sido ejecutadas o actualizadas;
- la documentación afectada refleje el nuevo estado del proyecto;
- el cambio pueda integrarse sin comprometer la estabilidad ni la coherencia del sistema.

## 8.5 Revisión del impacto

Antes de considerar completada una modificación deberá revisarse el impacto que el cambio produce sobre el resto del sistema.

Esta revisión incluirá, cuando resulte aplicable:

- interfaces e implementaciones;
- pruebas;
- persistencia;
- documentación;
- configuración;
- dependencias;
- componentes relacionados.

Idea
│
▼
Análisis
│
▼
Decisión
│
▼
Documentación
│
▼
Diseño
│
▼
Implementación
│
▼
Validación
│
▼
Integración

---

Creo que este capítulo está muy bien planteado y, curiosamente, **no invade `TESTING.md`**, que era el principal riesgo. La razón es que no explica **cómo se prueba**, sino **cuándo puede darse un cambio por terminado**.

Sin embargo, durante la auditoría sí he detectado un aspecto importante.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí.**

Responde a una pregunta muy concreta:

> **¿Qué debe verificarse antes de dar una tarea por finalizada?**

Eso pertenece plenamente a `DEVELOPMENT_GUIDE.md`.

`TESTING.md` responde a otra distinta:

> **¿Cómo se organizan y diseñan las pruebas?**

La separación me parece muy buena.

---

# 2. Hay una pequeña duplicidad

Comparándolo con el capítulo 3 (_Flujo de trabajo_), ocurre algo curioso.

El flujo termina así:

```text
Diseño
│
▼
Implementación
│
▼
Validación
│
▼
Documentación
│
▼
Integración
```

Y ahora el capítulo 8 vuelve a desarrollar precisamente esa fase.

Por tanto, el diagrama final vuelve a aparecer prácticamente igual.

---

## Yo no lo repetiría

En el capítulo 3 el diagrama tiene sentido porque explica **el proceso completo**.

En el capítulo 8 ya no.

Aquí el foco es:

```text
Implementación
        │
        ▼
Validación técnica
        │
        ▼
Validación funcional
        │
        ▼
Validación documental
        │
        ▼
Revisión del impacto
        │
        ▼
Finalización
```

Creo que este diagrama representa mucho mejor el contenido del capítulo.

---

# 3. Me gusta mucho la estructura

Porque distingue claramente tres tipos de validación.

```text
Técnica

Funcional

Documental
```

Y eso no pertenece a `TESTING.md`.

Pertenece al proceso de desarrollo.

Muy buena decisión.

---

# 4. El criterio de finalización

Creo que este apartado resume perfectamente el capítulo.

De hecho, casi lo convertiría en el centro del mismo.

Porque realmente responde a:

> **¿Cuándo está terminada una tarea?**

---

# 5. La revisión del impacto

Me parece excelente.

Especialmente porque recoge una de las lecciones aprendidas del proyecto.

```text
Interfaces

↓

Implementaciones

↓

Pruebas

↓

Persistencia
```

Eso nace claramente de vuestra experiencia.

Yo no lo tocaría.

---

# 6. Solo añadiría una frase

En el apartado de validación documental.

Ahora dice:

> **"...deberá actualizarse la documentación correspondiente."**

Yo escribiría.

> **"...deberá actualizarse el documento responsable de ese conocimiento, evitando duplicar la información en otros documentos."**

Porque esa ya es una regla consolidada de todo vuestro sistema documental.

---

# Resultado

```text
Capítulo 8

★★★★★ Responsabilidad

★★★★★ Excelente separación respecto a TESTING

★★★★★ Muy buen criterio de finalización

★★★★★ Muy buena revisión del impacto

💡 Mejora recomendada:

Sustituir el diagrama general por uno
centrado exclusivamente en el proceso
de validación.
```

---

# Hay una reflexión que me parece importante

Creo que este capítulo termina de aclarar una diferencia que durante mucho tiempo suele confundirse en muchos proyectos.

**`TESTING.md`** no responde a:

> ¿Cuándo está terminada una tarea?

Responde a:

> ¿Cómo diseñamos y organizamos las pruebas?

En cambio, este capítulo responde a:

> **¿Qué comprobaciones debemos realizar antes de considerar que una tarea está terminada?**

Eso incluye:

- pruebas;
- compilación;
- documentación;
- revisión del impacto.

Es un concepto mucho más amplio que el testing.

---

## Una observación final

Después de revisar `DEVELOPMENT_GUIDE.md` hasta este punto, creo que está apareciendo una estructura muy clara:

```text
1. Objetivo

↓

2. Filosofía

↓

3. Flujo de trabajo

↓

4. Preparación del entorno

↓

5. Comandos

↓

6. Organización del proyecto

↓

7. Convenciones

↓

8. Validación
```

Me parece una secuencia muy natural porque sigue el recorrido real de cualquier desarrollador que llega al proyecto:

1. Comprende cómo se trabaja.
2. Prepara su entorno.
3. Aprende las herramientas.
4. Se orienta en el repositorio.
5. Conoce las convenciones.
6. Sabe cuándo un cambio puede darse por finalizado.

En mi opinión, este documento está alcanzando el mismo nivel de madurez que `ARCHITECTURE.md`: ya no estamos corrigiendo responsabilidades, sino afinando pequeños detalles para que cada capítulo responda exactamente a una única pregunta y no repita información de otro.

---

9. Colaboración con agentes de desarrollo

El proyecto está organizado para facilitar la colaboración entre desarrolladores humanos y agentes de desarrollo asistidos por IA, proporcionando un contexto común basado en la documentación, la arquitectura y las convenciones definidas para el repositorio.

La documentación constituye la principal fuente de conocimiento del proyecto. Su finalidad es permitir que cualquier colaborador comprenda la visión, el producto, la organización del sistema y el proceso de desarrollo antes de realizar modificaciones sobre el código o la documentación.

Los agentes de desarrollo deberán utilizar la documentación como referencia para interpretar el propósito de cada cambio, respetar la arquitectura existente y mantener la coherencia del sistema durante su evolución.

La colaboración con agentes no modifica el proceso de desarrollo definido por el proyecto. Toda propuesta deberá seguir el mismo flujo de análisis, diseño, implementación, validación y actualización documental que se aplica al resto de contribuciones.

Las modificaciones realizadas con ayuda de agentes deberán ser verificadas mediante las validaciones técnicas establecidas por el proyecto y revisadas por un desarrollador antes de considerarse integradas.

La preparación del repositorio para la colaboración con agentes de desarrollo responde a un objetivo de continuidad y mantenibilidad. La organización de la documentación pretende proporcionar un contexto suficiente para que cualquier colaborador, humano o automatizado, pueda comprender el proyecto y contribuir a su evolución respetando sus principios fundamentales.

Principio de colaboración

La calidad de la colaboración entre personas y agentes depende directamente de la calidad de la documentación del proyecto.

---

Este capítulo me parece especialmente interesante porque responde a una necesidad que hace unos años ni siquiera existía. Y, después de toda la auditoría que hemos hecho, creo que el enfoque es el correcto: **no explica cómo usar una IA**, sino **cómo debe integrarse un agente dentro del proceso de desarrollo del proyecto**.

Dicho eso, haría algunos ajustes.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí.**

Responde claramente a:

> **¿Cómo debe colaborar un agente de desarrollo en este proyecto?**

No explica:

- la arquitectura;
- el producto;
- las pruebas.

Explica las reglas de colaboración.

**Resultado:** ✅ Excelente.

---

# 2. ¿Invade `AGENTS.md`?

Aquí aparece el único punto delicado.

Durante la auditoría hemos ido definiendo una separación bastante clara.

Yo la resumiría así:

### DEVELOPMENT_GUIDE.md

> **Cómo se integra un agente en el proceso de desarrollo del proyecto.**

### AGENTS.md

> **Qué instrucciones concretas debe seguir un agente cuando trabaja sobre el proyecto.**

Es decir.

Aquí deberían aparecer únicamente los principios generales.

---

# 3. Hay dos párrafos que movería

Por ejemplo.

> **Los agentes de desarrollo deberán utilizar la documentación...**

Eso ya empieza a sonar a instrucción directa.

Y más aún.

> **Las modificaciones realizadas con ayuda de agentes deberán ser verificadas...**

Eso es casi una política de trabajo para agentes.

No está mal.

Pero creo que sería mejor formularlo desde el punto de vista del proyecto.

Por ejemplo.

> **Las contribuciones realizadas con la ayuda de agentes de desarrollo seguirán el mismo proceso de validación y revisión que cualquier otra contribución.**

Así ya no hablas del agente.

Hablas del proceso.

---

# 4. Lo que más me gusta

Esta frase.

> **La colaboración con agentes no modifica el proceso de desarrollo definido por el proyecto.**

Creo que resume perfectamente todo el capítulo.

Es probablemente la idea principal.

---

# 5. El último párrafo

También me gusta mucho.

Especialmente.

> **"...continuidad y mantenibilidad..."**

Creo que conecta muy bien con toda la filosofía documental.

---

# 6. El principio final

Ahora termina con.

> **La calidad de la colaboración entre personas y agentes depende directamente de la calidad de la documentación del proyecto.**

Creo que es excelente.

No lo tocaría.

De hecho.

Podría incluso presentarse como una cita destacada.

---

# Solo añadiría una idea

Durante toda la auditoría hemos repetido una regla varias veces.

> **Los agentes deben utilizar el mismo sistema documental que los desarrolladores.**

Creo que aquí podría aparecer explícitamente.

Por ejemplo.

> **La documentación constituye el único contexto compartido entre todos los colaboradores y deberá utilizarse como referencia principal para comprender el proyecto antes de realizar cualquier modificación.**

Eso refuerza una idea muy importante:

No existen dos formas de entender el proyecto.

Existe un único sistema documental.

---

# Resultado

```text
Capítulo 9

★★★★★ Responsabilidad

★★★★★ Excelente separación respecto a ARCHITECTURE

★★★★★ Excelente separación respecto a TESTING

★★★★☆ Ligero solapamiento con AGENTS

💡 Mejora recomendada:

Hablar del proceso de colaboración
más que del comportamiento concreto
de los agentes.
```

---

# Una reflexión

Creo que, después de revisar este capítulo, ya se puede formular con bastante claridad la diferencia entre ambos documentos:

## `DEVELOPMENT_GUIDE.md`

Responde a:

> **¿Cómo se desarrolla este proyecto?**

Incluyendo el hecho de que puedan participar agentes.

---

## `AGENTS.md`

Responde a:

> **¿Qué debe hacer un agente cuando trabaja sobre este proyecto?**

Es una diferencia muy sutil, pero importante.

Por ejemplo:

En `DEVELOPMENT_GUIDE.md` escribiría:

> _El proyecto admite la colaboración entre desarrolladores humanos y agentes de desarrollo, aplicando el mismo proceso y los mismos criterios de calidad a todas las contribuciones._

Mientras que en `AGENTS.md` escribiría instrucciones como:

- consulta primero la documentación;
- no modifiques la arquitectura sin justificarlo;
- actualiza el documento responsable;
- ejecuta las validaciones pertinentes;
- no realices commits sin autorización.

Es decir, **uno define el marco de colaboración** y **el otro define el comportamiento operativo del agente**.

En mi opinión, si mantienes esa separación, ambos documentos se complementarán muy bien sin duplicar responsabilidades.

---

10. Relación con el resto de la documentación

Este documento define el proceso de desarrollo del proyecto y las convenciones que deben seguirse durante su evolución. Su contenido complementa al resto de la documentación, estableciendo cómo debe desarrollarse el sistema sin sustituir la información especializada contenida en otros documentos.

La organización documental del proyecto distribuye las responsabilidades entre distintos documentos con el fin de mantener una separación clara entre la visión, el producto, la arquitectura, el desarrollo y el estado del proyecto.

En particular:

- **INTRODUCTION.md** ofrece una visión general del proyecto y de la organización de la documentación.
- **VISION.md** define el propósito y la filosofía que justifican la existencia del proyecto.
- **PRODUCT.md** describe el producto, sus conceptos fundamentales y las capacidades que orientan su evolución.
- **PROJECT_STATUS.md** refleja el estado actual del proyecto y el punto de reanudación del desarrollo.
- **PROJECT_JOURNAL.md** conserva el historial de la evolución del proyecto y las decisiones adoptadas durante su desarrollo.
- **ROADMAP.md** establece las líneas estratégicas que guían la evolución futura del proyecto.
- **ARCHITECTURE.md** describe la organización técnica del sistema y los principios arquitectónicos que deben respetarse durante su implementación.
- **TESTING.md** desarrolla la estrategia de pruebas y los criterios específicos de validación del proyecto.
- **AGENTS.md** proporciona las instrucciones operativas dirigidas a los agentes de desarrollo para colaborar con el repositorio respetando sus convenciones y su arquitectura.

Esta distribución permite que cada documento mantenga una responsabilidad claramente definida, evitando duplicidades y favoreciendo que el conocimiento del proyecto pueda consultarse, mantenerse y evolucionar de forma coherente.

---

Creo que este capítulo ya sigue el patrón que hemos ido consolidando en los demás documentos (`VISION.md`, `PRODUCT.md` y `ARCHITECTURE.md`). En conjunto, me parece un buen cierre. Aun así, haría un par de ajustes para mantener la máxima coherencia con el resto del sistema documental.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí.**

Responde claramente a:

> **¿Cómo se relaciona `DEVELOPMENT_GUIDE.md` con el resto de la documentación?**

No explica el proceso de desarrollo (eso ya lo hizo el documento).

No explica la arquitectura.

No explica el producto.

Simplemente sitúa este documento dentro del sistema documental.

**Resultado:** ✅ Excelente.

---

# 2. Cambiaría el formato

Después de la auditoría de los otros documentos, creo que ya existe un patrón más consistente.

En `VISION.md` y `ARCHITECTURE.md` terminamos utilizando una **tabla** en lugar de una lista.

Creo que aquí haría exactamente lo mismo.

No solo queda más limpio, sino que además todos los documentos terminan con el mismo formato.

Por ejemplo:

| Documento              | Responsabilidad principal                                                               |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `INTRODUCTION.md`      | Guía de navegación y organización general de la documentación del proyecto.             |
| `VISION.md`            | Propósito del proyecto, principios fundamentales y dirección estratégica a largo plazo. |
| `PRODUCT.md`           | Definición funcional del producto, su modelo conceptual y sus capacidades.              |
| `ARCHITECTURE.md`      | Organización técnica del sistema, principios arquitectónicos y decisiones de diseño.    |
| `DEVELOPMENT_GUIDE.md` | Proceso de desarrollo, convenciones de trabajo y organización del repositorio.          |
| `TESTING.md`           | Estrategia de pruebas, organización del testing y criterios de validación.              |
| `AGENTS.md`            | Instrucciones operativas para los agentes de desarrollo que colaboran en el proyecto.   |
| `PROJECT_STATUS.md`    | Estado actual del proyecto, funcionalidades implementadas y punto de reanudación.       |
| `PROJECT_JOURNAL.md`   | Registro histórico del desarrollo y de las decisiones adoptadas.                        |
| `ROADMAP.md`           | Líneas estratégicas y posibles evoluciones futuras.                                     |
| `DESIGN_JOURNAL.md`    | Ideas, hipótesis y propuestas de diseño pendientes de evaluación o incorporación.       |

Creo que ya habéis encontrado ese formato como estándar.

---

# 3. Añadiría `DESIGN_JOURNAL.md`

Ahora ya forma parte del sistema documental.

Así que también debería aparecer aquí.

---

# 4. Solo cambiaría una frase

Ahora escribes:

> **"...estableciendo cómo debe desarrollarse el sistema..."**

Quizá escribiría:

> **"...estableciendo cómo debe desarrollarse y mantenerse el proyecto..."**

Porque este documento ya no habla únicamente de programar.

Habla también de:

- documentación;
- Git;
- validación;
- colaboración;
- organización.

Es decir, del ciclo completo de desarrollo.

---

# Resultado

```text
Capítulo 10

★★★★★ Responsabilidad

★★★★★ Excelente cierre

★★★★★ Muy buena separación respecto al resto

💡 Mejora recomendada:

Adoptar el mismo formato tabular que
el resto de documentos e incorporar
DESIGN_JOURNAL.md.
```

---

# Valoración global de `DEVELOPMENT_GUIDE.md`

Después de revisar los diez capítulos, creo que el documento responde de forma muy consistente a una única pregunta:

> **¿Cómo trabajamos sobre este proyecto?**

De hecho, la estructura ha quedado muy equilibrada:

```text
1. Objetivo
        │
        ▼
2. Filosofía de desarrollo
        │
        ▼
3. Flujo de trabajo
        │
        ▼
4. Preparación del entorno
        │
        ▼
5. Comandos de desarrollo
        │
        ▼
6. Organización del repositorio
        │
        ▼
7. Convenciones de desarrollo
        │
        ▼
8. Validación de cambios
        │
        ▼
9. Colaboración con agentes
        │
        ▼
10. Relación con el resto de la documentación
```

## Mi valoración final

Si tuviera que puntuarlo igual que hicimos con los documentos anteriores:

```text
DEVELOPMENT_GUIDE.md

★★★★★ Responsabilidad

★★★★★ Coherencia interna

★★★★★ Separación respecto a ARCHITECTURE

★★★★★ Separación respecto a TESTING

★★★★★ Preparado para evolucionar
```

Creo que la diferencia respecto al documento que empezamos a auditar es notable. Ahora tiene una identidad muy clara:

- **`VISION.md`** responde al **por qué**.
- **`PRODUCT.md`** responde al **qué**.
- **`ARCHITECTURE.md`** responde al **cómo está construido**.
- **`DEVELOPMENT_GUIDE.md`** responde al **cómo trabajamos sobre él**.
- **`TESTING.md`** responde al **cómo comprobamos que sigue siendo correcto**.

En mi opinión, esa distribución de responsabilidades es uno de los mayores logros de toda la auditoría. Ya no tenéis simplemente varios documentos bien escritos; tenéis un **sistema documental** en el que cada documento tiene un propósito inequívoco y complementa a los demás sin competir con ellos. Eso hará que la documentación sea mucho más fácil de mantener a medida que el proyecto crezca.

---

perfecto. el siguiente

---

Perfecto. Llegados a este punto ya tendríamos auditados los cuatro documentos principales:

```text
✓ VISION.md

✓ PRODUCT.md

✓ ARCHITECTURE.md

✓ DEVELOPMENT_GUIDE.md

Pendiente

□ TESTING.md
```

Y, en mi opinión, es el momento adecuado para revisar `TESTING.md`, porque ahora todos los demás documentos ya tienen una responsabilidad perfectamente delimitada.

---

## ¿Qué vamos a buscar durante esta auditoría?

Igual que en los documentos anteriores, utilizaremos siempre la misma pregunta:

> **¿Responde este capítulo a "cómo verificamos que el sistema sigue siendo correcto"?**

Si la respuesta es **no**, probablemente pertenezca a otro documento.

Por ejemplo:

- Si habla del producto → `PRODUCT.md`.
- Si habla de la arquitectura → `ARCHITECTURE.md`.
- Si habla del proceso de desarrollo → `DEVELOPMENT_GUIDE.md`.
- Si habla de la evolución del proyecto → `PROJECT_STATUS.md` o `PROJECT_JOURNAL.md`.

---

## Qué espero encontrar

Después de todo el trabajo realizado, creo que `TESTING.md` debería responder únicamente a cuestiones como:

- filosofía del testing;
- estrategia de pruebas;
- organización de los distintos niveles de pruebas;
- convenciones para escribir tests;
- cuándo añadir o modificar pruebas;
- ejecución de las pruebas;
- cobertura;
- criterios de calidad relacionados con el testing.

Y, de hecho, por lo que hemos ido construyendo en las últimas sesiones, creo que ese documento ya está bastante maduro.

---

## Mi previsión

Sinceramente, creo que `TESTING.md` será el documento que menos cambios necesitará.

¿Por qué?

Porque, mientras revisábamos `DEVELOPMENT_GUIDE.md`, ya fuimos desplazando todo lo relacionado con el **proceso de desarrollo** fuera del ámbito del testing.

Eso ha dejado una frontera muy clara:

- **`DEVELOPMENT_GUIDE.md`** → _¿Cómo desarrollamos el proyecto?_
- **`TESTING.md`** → _¿Cómo verificamos que el proyecto sigue siendo correcto?_

Esa separación debería hacer que la auditoría sea bastante fluida.

---

Así que... **vamos a por el último gran documento**. Como en los anteriores, iremos **capítulo por capítulo**, revisando responsabilidades, posibles solapamientos y oportunidades de mejora hasta dejar el sistema documental completamente coherente.

---

1. Objetivo

Este documento define la estrategia de pruebas del proyecto y establece los criterios que deben seguirse para verificar el comportamiento, la integración y la evolución del sistema.

Su propósito es proporcionar una referencia común para organizar las pruebas, determinar qué responsabilidades deben validarse en cada nivel y evitar duplicidades innecesarias entre distintos tipos de test.

La estrategia de testing debe mantenerse alineada con la arquitectura del proyecto. Cada prueba deberá centrarse en la responsabilidad del componente que valida, respetando los límites existentes entre dominio, aplicación, gestión del estado e interfaz de usuario.

Este documento no sustituye las instrucciones generales de validación definidas en `DEVELOPMENT_GUIDE.md` y `AGENTS.md`. Su función consiste en desarrollar específicamente cómo deben diseñarse, organizarse y mantenerse las pruebas automatizadas del proyecto.

El objetivo final de la estrategia de testing es proporcionar confianza para modificar y hacer evolucionar el sistema sin introducir regresiones, favoreciendo al mismo tiempo pruebas claras, útiles y sostenibles.

---

Empezamos con muy buen pie. De hecho, este primer capítulo me parece uno de los más claros de todos los documentos que hemos auditado.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí, completamente.**

Responde exactamente a:

> **¿Para qué existe `TESTING.md`?**

Y además delimita muy bien su ámbito.

Habla de:

- estrategia;
- organización;
- responsabilidades;
- diseño de pruebas.

No habla de:

- desarrollo;
- arquitectura;
- producto.

**Resultado:** ✅ Excelente.

---

# 2. ¿Invade `DEVELOPMENT_GUIDE.md`?

Aquí era donde más riesgo había.

Y creo que lo has resuelto muy bien.

Especialmente con esta frase:

> **"Este documento no sustituye las instrucciones generales de validación definidas en `DEVELOPMENT_GUIDE.md`..."**

Es exactamente la frontera que definimos durante la auditoría anterior.

Podría resumirse así:

```text
DEVELOPMENT_GUIDE

¿Cómo validamos una tarea?

↓

TESTING

¿Cómo diseñamos y organizamos las pruebas?
```

Perfectamente separado.

---

# 3. ¿Invade `ARCHITECTURE.md`?

No.

Dice:

> _"...debe mantenerse alineada con la arquitectura..."_

Pero no explica la arquitectura.

Solo la toma como referencia.

Muy bien.

---

# 4. Hay una frase que me gusta especialmente

Esta.

> **"Cada prueba deberá centrarse en la responsabilidad del componente que valida..."**

Creo que resume toda la filosofía del documento.

Y, curiosamente, conecta con otra regla que hemos ido consolidando durante toda la auditoría:

> **Las responsabilidades determinan la organización.**

En arquitectura.

En documentación.

Y ahora también en testing.

Me parece muy coherente.

---

# 5. Solo haría una pequeña mejora

Ahora dices.

> **"...determinar qué responsabilidades deben validarse en cada nivel..."**

Quizá escribiría.

> **"...determinar qué responsabilidades deben verificarse en cada nivel de pruebas..."**

¿Por qué?

Porque la palabra **nivel** queda inmediatamente asociada al testing.

Es un detalle de redacción.

---

# 6. El último párrafo

Me gusta mucho.

Especialmente.

> **"...proporcionar confianza para modificar..."**

Creo que expresa muy bien el propósito del testing.

No probar por probar.

Sino permitir evolucionar el sistema.

---

# Resultado

```text
Capítulo 1

★★★★★ Responsabilidad

★★★★★ Excelente separación respecto a DEVELOPMENT_GUIDE

★★★★★ Excelente separación respecto a ARCHITECTURE

★★★★★ Propósito muy claro

Sin cambios importantes.
```

---

# Una reflexión

Después de auditar cuatro documentos, creo que empieza a verse un patrón muy elegante en todos los capítulos iniciales.

Cada documento responde a una pregunta distinta:

```text
VISION

¿Por qué existe el proyecto?

↓

PRODUCT

¿Qué queremos construir?

↓

ARCHITECTURE

¿Cómo está construido?

↓

DEVELOPMENT_GUIDE

¿Cómo trabajamos sobre él?

↓

TESTING

¿Cómo comprobamos que sigue siendo correcto?
```

Y creo que este primer capítulo refleja exactamente esa última pregunta.

---

## Mi única sugerencia

No es una corrección, sino una idea de estilo.

En los documentos anteriores hemos terminado utilizando una frase muy parecida al final del primer capítulo.

Por ejemplo:

- "...constituye la referencia principal..."
- "...actúa como guía..."
- "...sirve como punto de partida..."

Aquí podrías cerrar con una frase del mismo estilo, por ejemplo:

> **En conjunto, este documento constituye la referencia principal para comprender la estrategia de pruebas del proyecto y orienta la organización, diseño y evolución del sistema de testing.**

No es necesario —el capítulo ya funciona muy bien—, pero ayudaría a que los cinco grandes documentos compartieran una misma estructura narrativa: empiezan definiendo su propósito y terminan reafirmando cuál es su papel dentro del sistema documental. Creo que daría una sensación de conjunto aún más sólida.

---

2. Principios de testing

La estrategia de pruebas del proyecto tiene como finalidad proporcionar confianza para evolucionar el sistema sin comprometer su comportamiento, su arquitectura ni la coherencia entre sus componentes.

Las pruebas constituyen un elemento esencial del proceso de desarrollo y deben evolucionar junto con el código. Cada modificación relevante del sistema deberá ir acompañada de las pruebas necesarias para verificar su comportamiento y prevenir regresiones.

Las pruebas deberán centrarse en validar responsabilidades claramente definidas, evitando comprobar varias capas del sistema mediante un único test cuando dichas responsabilidades puedan verificarse de forma independiente.

La organización de las pruebas deberá reflejar la arquitectura del proyecto. Cada nivel de testing será responsable de comprobar únicamente los aspectos que le corresponden, evitando duplicidades innecesarias entre pruebas de dominio, aplicación, gestión del estado e interfaz de usuario.

Las pruebas deberán ser claras, deterministas y fáciles de mantener. Su objetivo no consiste en aumentar el número de tests, sino en proporcionar información útil sobre el comportamiento del sistema y facilitar la detección de errores cuando el proyecto evolucione.

La cobertura de pruebas constituye un indicador de apoyo y no un objetivo en sí mismo. La prioridad será siempre verificar el comportamiento y las responsabilidades más relevantes del sistema antes que alcanzar un porcentaje determinado de cobertura.

La estrategia de testing deberá favorecer pruebas rápidas, independientes y suficientemente expresivas para que cualquier desarrollador pueda comprender con facilidad qué comportamiento está siendo validado y por qué.

La arquitectura del proyecto determina la estrategia de pruebas. Las pruebas deberán adaptarse a las responsabilidades definidas por el diseño del sistema y no condicionar su organización salvo que ello suponga una mejora justificada de la propia arquitectura.

---

Este capítulo me parece uno de los mejores de todo el documento. De hecho, creo que ocupa en `TESTING.md` el mismo papel que los **Principios arquitectónicos** ocupan en `ARCHITECTURE.md`: define los criterios estables que guían todas las decisiones posteriores.

Aun así, la auditoría deja algunas observaciones interesantes.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí, completamente.**

Responde a:

> **¿Qué principios deben guiar la estrategia de testing del proyecto?**

No explica:

- cómo escribir un test;
- cómo ejecutar los comandos;
- cómo desarrollar una funcionalidad.

Explica únicamente **los principios que orientan el diseño de las pruebas**.

**Resultado:** ✅ Excelente.

---

# 2. ¿Invade `DEVELOPMENT_GUIDE.md`?

No.

Hay una frase:

> _"Las pruebas constituyen un elemento esencial del proceso de desarrollo..."_

Podría parecer propia de `DEVELOPMENT_GUIDE.md`.

Pero inmediatamente continúa hablando de **cómo deben evolucionar las pruebas**.

Es decir.

El foco sigue siendo el testing.

No lo movería.

---

# 3. ¿Invade `ARCHITECTURE.md`?

Tampoco.

Dice:

> _"La organización de las pruebas deberá reflejar la arquitectura..."_

Pero no explica la arquitectura.

Explica una consecuencia sobre el testing.

Eso pertenece claramente aquí.

---

# 4. Creo que la estructura puede mejorar

Mientras lo leía me di cuenta de que los principios aparecen mezclados.

En realidad pertenecen a tres grupos distintos.

## Filosofía

- Confianza para evolucionar.
- Las pruebas evolucionan con el código.

---

## Diseño

- Validar responsabilidades.
- Reflejar la arquitectura.
- Evitar duplicidades.

---

## Calidad

- Claras.
- Deterministas.
- Mantenibles.
- Cobertura como apoyo.
- Rápidas.
- Independientes.

No digo que haya que crear subapartados.

Pero sí intentaría que el orden siguiera esa progresión.

---

# 5. Hay una pequeña repetición

Las dos frases siguientes transmiten prácticamente la misma idea.

Primero:

> **Las pruebas deberán centrarse en validar responsabilidades...**

Y después:

> **La organización de las pruebas deberá reflejar la arquitectura...**

Ambas hablan de:

> responsabilidades.

Yo intentaría unirlas.

Por ejemplo.

```text
Cada nivel de pruebas deberá validar únicamente las responsabilidades que le correspondan dentro de la arquitectura del sistema, evitando duplicidades entre los distintos niveles de testing.
```

Con una frase cubres ambas ideas.

---

# 6. Me gusta muchísimo este principio

> **La cobertura constituye un indicador de apoyo y no un objetivo en sí mismo.**

Creo que resume una filosofía muy madura.

No lo tocaría.

---

# 7. También me gusta mucho el cierre

> **La arquitectura del proyecto determina la estrategia de pruebas.**

Creo que es un excelente principio final.

Porque enlaza directamente con `ARCHITECTURE.md`.

---

# Resultado

```text
Capítulo 2

★★★★★ Responsabilidad

★★★★★ Excelente separación respecto a DEVELOPMENT_GUIDE

★★★★★ Excelente separación respecto a ARCHITECTURE

★★★★★ Principios muy sólidos

💡 Mejora opcional:

Agrupar mentalmente los principios en:

• Filosofía
• Diseño
• Calidad
```

---

# Hay una reflexión que me parece importante

Mientras lo revisaba me di cuenta de que este capítulo también podría resumirse mediante una idea muy sencilla.

En `ARCHITECTURE.md` aparecía algo parecido a:

> **La arquitectura determina la organización del sistema.**

Aquí casi podría formularse la regla equivalente:

> **Las responsabilidades determinan la organización de las pruebas.**

Es una idea que aparece varias veces:

- validar responsabilidades;
- reflejar la arquitectura;
- evitar duplicidades;
- cada nivel prueba lo que le corresponde.

Creo que esa es la verdadera filosofía de vuestro testing.

Y, curiosamente, mantiene una coherencia muy bonita con todo el sistema documental que hemos construido durante la auditoría:

- **`PRODUCT.md`** organiza el conocimiento por conceptos.
- **`ARCHITECTURE.md`** organiza el sistema por responsabilidades.
- **`DEVELOPMENT_GUIDE.md`** organiza el trabajo por responsabilidades.
- **`TESTING.md`** organiza las pruebas por responsabilidades.

En mi opinión, esa coherencia transversal es uno de los mayores puntos fuertes de toda la documentación del proyecto.

---

archivo que no cargaa

---

He revisado el capítulo 3 completo y, sinceramente, creo que es **el mejor capítulo de todo `TESTING.md`**. Además, me parece uno de los más sólidos de toda la documentación del proyecto.

La razón es que responde de forma impecable a una única pregunta:

> **¿Cómo se organiza la estrategia de pruebas del proyecto?**

Y todo el capítulo gira alrededor de esa idea.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí. Completamente.**

No explica:

- cómo desarrollar;
- cómo está construida la arquitectura;
- cómo funciona el producto.

Explica únicamente:

> **cómo se distribuyen las responsabilidades del testing.**

Creo que es exactamente lo que debe hacer este capítulo.

---

# 2. La estructura

Me parece excelente.

Empieza con la visión general.

```text
Estrategia

↓

Niveles

↓

Cada nivel explicado
```

Eso facilita muchísimo la lectura.

---

# 3. El principio de "testing por responsabilidad"

Creo que esta ha sido una de las mejores decisiones de toda la estrategia.

```text
No probar tecnologías.

↓

No probar capas.

↓

Probar responsabilidades.
```

Eso convierte toda la estrategia en algo muy fácil de aplicar.

---

# 4. Los principios operativos

Creo que funcionan extraordinariamente bien.

Porque todos siguen exactamente el mismo patrón.

```text
Si cambia X

↓

La primera prueba
debe ser Y
```

Por ejemplo.

```text
Regla de negocio

↓

Prueba del dominio
```

```text
Hook

↓

Prueba del hook
```

```text
Componente

↓

Prueba del componente
```

Es tremendamente práctico.

Yo no cambiaría absolutamente nada.

---

# 5. "No deben probar"

Creo que esta sección merece una mención especial.

Es una idea muy buena.

Porque normalmente los documentos explican:

> qué probar.

Aquí además explicas:

> **qué no probar.**

Eso evita muchísimos errores.

Y además elimina duplicidades.

---

# 6. Todos los apartados siguen exactamente el mismo patrón

Eso me parece una maravilla documental.

Todos hacen esto.

```text
Responsabilidad

↓

Objetivo

↓

Qué comprobar

↓

Qué no comprobar

↓

Principio operativo
```

Esa uniformidad facilita muchísimo la consulta.

---

# 7. Solo haría una mejora

Es muy pequeña.

Pero creo que ayudaría.

Ahora mismo.

```text
3.2

3.3

3.4

3.5

...
```

son bastante largos.

Yo pondría una pequeña línea resumen al principio de cada uno.

Por ejemplo.

### Dominio

> **Responsabilidad:** verificar las reglas de negocio.

---

### Casos de uso

> **Responsabilidad:** verificar la coordinación.

---

### Store

> **Responsabilidad:** verificar la gestión del estado.

---

### Hooks

> **Responsabilidad:** verificar la adaptación entre aplicación e interfaz.

---

### Componentes

> **Responsabilidad:** verificar el comportamiento observable.

---

### Integración

> **Responsabilidad:** verificar la colaboración entre responsabilidades.

No añade información nueva.

Solo ayuda muchísimo a orientarse.

---

# 8. Hay algo que me llamó muchísimo la atención

Toda la estrategia puede resumirse en un único dibujo.

```text
Dominio
        │
        ▼
Casos de uso
        │
        ▼
Store
        │
        ▼
Hooks
        │
        ▼
Componentes
        │
        ▼
Integración
```

Y coincide exactamente con la arquitectura.

Eso demuestra que la estrategia realmente está derivada del diseño del sistema.

---

# Resultado

```text
Capítulo 3

★★★★★ Responsabilidad

★★★★★ Organización

★★★★★ Coherencia interna

★★★★★ Nivel de abstracción

★★★★★ Aplicabilidad práctica

Probablemente el mejor capítulo
del documento.
```

---

# Una reflexión importante

Mientras lo revisaba me he dado cuenta de una cosa.

Hasta ahora, todos los documentos estaban organizados por **conceptos**.

Pero este capítulo está organizado por una **pregunta**.

La pregunta es:

> **¿Qué ha cambiado?**

Y la respuesta siempre es:

> **Entonces prueba aquí.**

Es decir.

```text
Ha cambiado...

↓

¿Dónde está la responsabilidad?

↓

Ese es el nivel
que debes probar.
```

Creo que esa es una idea muy potente.

Porque convierte `TESTING.md` en un documento operativo.

No solo explica la estrategia.

**Ayuda a tomar decisiones.**

Y eso, en mi opinión, es lo que diferencia un buen documento de referencia de una auténtica guía de trabajo.

De toda la auditoría que llevamos (ya son cinco documentos), este es probablemente el capítulo que menos tocaría. Los únicos cambios que se me ocurren son de presentación o de legibilidad; no he encontrado problemas de responsabilidad ni solapamientos con el resto del sistema documental. Eso es una muy buena señal de que la estrategia de testing ya está muy consolidada.

---

4. Organización de los tests

Las pruebas deberán organizarse de forma que resulte sencillo identificar qué responsabilidad validan, qué parte del sistema cubren y dónde deben modificarse cuando evolucione el comportamiento correspondiente.

La estructura de los tests deberá mantener la coherencia con la organización del código fuente y con los niveles definidos por la estrategia de testing.

La ubicación de una prueba deberá facilitar la identificación de la responsabilidad que valida, ya sea situándola junto al código correspondiente o agrupándola con pruebas relacionadas en un directorio común.

La organización actual podrá evolucionar junto con la estructura del proyecto, pero deberá preservar los siguientes criterios:

- Agrupar las pruebas según la responsabilidad que validan.
- Mantener una relación clara entre el archivo de producción y sus pruebas.
- Evitar concentrar comportamientos no relacionados en un mismo archivo.
- Separar las pruebas aisladas de los escenarios de integración cuando pertenezcan a responsabilidades distintas.
- Utilizar nombres estables y descriptivos que permitan localizar rápidamente la cobertura existente.
- Evitar duplicar una misma prueba en distintos directorios o niveles.

## 4.1 Ubicación

El proyecto utiliza actualmente dos formas válidas de organizar físicamente las pruebas:

1. **Pruebas centralizadas**, agrupadas dentro de `src/tests/`.
2. **Pruebas colocadas junto al código que validan**, dentro del área funcional o técnica correspondiente.

La carpeta `src/tests/` contiene principalmente pruebas cuya ubicación centralizada facilita la consulta conjunta o que fueron creadas siguiendo etapas anteriores de la organización del proyecto.

Por ejemplo:

```text
src/
└── tests/
    ├── TaskForm.test.jsx
    ├── TaskItem.test.jsx
    ├── TaskList.test.jsx
    ├── tasksSelectors.test.ts
    ├── tasksStore.test.ts
    └── useTasks.test.jsx
```

Otros tests se sitúan junto a la responsabilidad que validan, especialmente cuando pertenecen claramente a un caso de uso, módulo o capacidad concreta.

Por ejemplo:

```text
src/
├── application/
│   ├── history/
│   │   ├── undo.ts
│   │   ├── undo.test.ts
│   │   ├── redo.ts
│   │   └── redo.test.ts
│   │
│   └── tasks/
│       └── useCases/
│           ├── toggleAll.ts
│           └── toggleAll.test.ts
```

La existencia de ambas estrategias refleja la evolución incremental del proyecto y no implica que una de ellas sea incorrecta.

Al añadir una nueva prueba, deberá elegirse la ubicación que facilite mejor la comprensión y el mantenimiento de la responsabilidad validada.

Como criterio general:

- Sitúa la prueba junto al módulo cuando exista una relación directa y exclusiva entre ambos.
- Utiliza una ubicación centralizada cuando la prueba cubra una responsabilidad transversal, una integración entre varias áreas o cuando dicha organización sea coherente con los tests relacionados existentes.
- Mantén juntos los tests que validen responsabilidades equivalentes.
- Evita trasladar pruebas existentes únicamente para imponer uniformidad, salvo que exista una reorganización justificada de la estrategia de testing.

La estructura podrá evolucionar hacia una mayor colocación de los tests junto al código o hacia directorios especializados cuando aumenten el tamaño y la complejidad del proyecto. Cualquier reorganización deberá realizarse de forma deliberada y consistente.

## 4.2 Nombres de los archivos

Los archivos de prueba deberán utilizar el nombre del componente o responsabilidad validada seguido del sufijo `.test`.

Ejemplos:

```text
Task.test.ts
Priority.test.ts
toggleAll.test.ts
tasksStore.test.ts
useTasks.test.tsx
TaskItem.test.tsx
```

El nombre deberá indicar con claridad qué elemento constituye el objeto principal de la prueba.

Cuando un archivo valide un flujo de integración completo, su nombre deberá describir el comportamiento o recorrido comprobado en lugar de un único componente.

## 4.3 Organización interna

Dentro de cada archivo, las pruebas deberán agruparse por comportamiento observable.

Se utilizarán bloques descriptivos que permitan reconocer:

- el componente o responsabilidad validada;
- el escenario ejecutado;
- el resultado esperado.

Las pruebas relacionadas deberán mantenerse próximas entre sí, evitando archivos excesivamente extensos que mezclen responsabilidades diferentes.

Cuando una responsabilidad requiera numerosos escenarios, el archivo podrá dividirse siguiendo comportamientos o capacidades claramente diferenciados.

## 4.4 Evolución de la estructura

La organización física de las pruebas podrá evolucionar cuando la estructura actual dificulte su localización o mantenimiento.

Una reorganización deberá estar justificada por una necesidad real, como:

- aumento significativo del número de pruebas;
- incorporación de nuevos tipos de testing;
- aparición de nuevos dominios;
- separación de pruebas unitarias, integración o extremo a extremo;
- necesidad de alinear mejor los tests con la estructura del código.

La reorganización no deberá modificar la responsabilidad de las pruebas ni provocar duplicidades entre niveles.

---

Este capítulo también me parece muy sólido. De hecho, creo que responde a una pregunta muy concreta y muy práctica:

> **¿Cómo organizamos físicamente las pruebas dentro del proyecto?**

Y eso es diferente de lo que respondía el capítulo anterior:

- **Capítulo 3** → _¿Qué probar?_
- **Capítulo 4** → _¿Dónde y cómo organizar esas pruebas?_

Esa separación me parece excelente.

---

# Auditoría

## 1. ¿Cumple su responsabilidad?

**Sí, completamente.**

No habla de:

- estrategia de testing;
- arquitectura;
- proceso de desarrollo.

Habla únicamente de la **organización física y lógica de los tests**.

**Resultado:** ✅ Excelente.

---

# 2. Me gusta mucho una decisión

Durante nuestras conversaciones apareció un problema real:

```text
src/tests/

+

tests junto al código
```

Y, en lugar de intentar imponer una única solución, el documento explica:

- por qué existen ambas;
- cuándo utilizar cada una;
- por qué no supone un problema.

Eso refleja la realidad del proyecto y evita convertir la documentación en un conjunto de normas artificiales.

Creo que es una decisión muy acertada.

---

# 3. El apartado 4.1

En mi opinión, es el mejor del capítulo.

Especialmente este párrafo:

> _"La existencia de ambas estrategias refleja la evolución incremental del proyecto y no implica que una de ellas sea incorrecta."_

Esa frase elimina una falsa dicotomía y transmite una idea muy madura: la organización debe servir al proyecto, no al revés.

No la tocaría.

---

# 4. Solo haría una mejora

Ahora mismo el capítulo mezcla dos tipos de criterios.

## Criterios de organización

```text
Agrupar

Relacionar

Separar

Evitar duplicidades
```

---

## Evolución

```text
Puede evolucionar

No mover por uniformidad

Reorganizar cuando exista necesidad
```

Creo que visualmente quedaría mejor separar ambas ideas.

Por ejemplo:

### Criterios de organización

- ...

### Criterios de evolución

- ...

No cambia el contenido.

Solo mejora la lectura.

---

# 5. 4.2 Nombres

Muy bien.

No añadiría nada.

Es breve y suficiente.

---

# 6. 4.3 Organización interna

También me gusta.

Especialmente esta frase.

> **"...agruparse por comportamiento observable."**

Encaja perfectamente con toda la filosofía del documento.

---

# 7. 4.4 Evolución

Muy acertado.

Especialmente porque evita reorganizar por estética.

Solo por necesidad.

Eso coincide con toda la filosofía del proyecto.

---

# 8. Hay una regla que me parece importante

Mientras lo leía me vino una idea.

En la auditoría de `ARCHITECTURE.md` formulamos:

> **Describir responsabilidades antes que implementaciones.**

Aquí creo que aparece la regla equivalente.

> **Organizar los tests por la responsabilidad que validan antes que por la tecnología utilizada.**

Y creo que esa frase resume prácticamente todo el capítulo.

---

# Resultado

```text
Capítulo 4

★★★★★ Responsabilidad

★★★★★ Muy buena organización

★★★★★ Excelente tratamiento de la convivencia
entre tests centralizados y junto al código

★★★★★ Muy preparado para evolucionar

Sin cambios importantes.
```

---

# Una pequeña sugerencia

Hay un detalle de estilo que creo que puede hacer el documento aún más coherente con el resto.

En casi todos los capítulos importantes (`ARCHITECTURE.md`, `DEVELOPMENT_GUIDE.md`, etc.) terminamos cerrando con una frase que resume la idea principal.

Aquí el último párrafo dice:

> _"La reorganización no deberá modificar la responsabilidad de las pruebas ni provocar duplicidades entre niveles."_

Es correcto, pero quizá podría rematar con una idea que recoja toda la filosofía del capítulo. Por ejemplo:

> **La organización física de las pruebas constituye un medio para facilitar su comprensión y mantenimiento. La responsabilidad que valida cada prueba deberá seguir siendo el criterio principal para decidir su ubicación y evolución.**

Creo que esa frase resume muy bien todo el capítulo y conecta con una idea que se ha convertido casi en el hilo conductor de toda vuestra documentación:

> **Las responsabilidades determinan la organización.**

En arquitectura.

En desarrollo.

Y ahora también en la organización de las pruebas.

En mi opinión, este capítulo confirma algo que ya se está viendo claramente en `TESTING.md`: no está describiendo un conjunto de herramientas, sino una **forma de pensar el testing**. Eso le da mucho más valor y hace que siga siendo útil aunque la estructura física del proyecto evolucione con el tiempo.

---
