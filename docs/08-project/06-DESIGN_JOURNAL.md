1. Propósito

2. Evolución del dominio

3. Evolución del modelo conceptual

4. Transparencia editorial

5. Modelo de publicación

6. Modelo de monetización

7. Otras ideas

# DESIGN_JOURNAL.md

# 1. Propósito

Este documento recoge ideas, hipótesis y reflexiones relacionadas con la evolución del diseño del producto y de la arquitectura del proyecto.

Su finalidad es preservar aquellas propuestas que, aun no formando parte de la documentación oficial, puedan resultar valiosas para orientar futuras decisiones de diseño.

El contenido de este documento no constituye una especificación del producto ni un compromiso de implementación. Cada idea deberá evaluarse cuando el contexto del proyecto lo justifique y, en caso de ser adoptada, pasará a incorporarse al documento correspondiente (`PRODUCT.md`, `ARCHITECTURE.md` u otro que resulte adecuado).

De este modo, el diario de diseño permite conservar el conocimiento generado durante la evolución del proyecto sin comprometer la estabilidad ni la coherencia de la documentación principal.

Una idea permanecerá en este documento mientras no exista justificación suficiente para incorporarla a otro cuerpo documental, descartarla o reformularla.

La presencia de una propuesta en este documento no constituye evidencia a favor de su incorporación ni genera por sí misma una obligación de investigación.

Las propuestas que alcancen suficiente madurez podrán incorporarse a las líneas estratégicas definidas en `ROADMAP.md` antes de formar parte de la documentación oficial del proyecto.

Cuando una propuesta sea finalmente adoptada e implementada, su incorporación quedará reflejada en `PROJECT_JOURNAL.md` como parte de la evolución histórica del proyecto.

## 1.1. Estado del corpus histórico auditado

El corpus histórico reconstruido de este documento ha sido sometido a una auditoría sistemática respecto del Product actualmente consolidado.

La auditoría examinó las familias históricas de propuestas intentando determinar si, una vez eliminadas las soluciones concretas mediante las que fueron formuladas, alguna conservaba una posibilidad humana cuya pérdida justificara un nuevo compromiso de Product, la modificación de un compromiso existente o la apertura de una nueva vertical.

El resultado de la auditoría no identificó ningún residuo positivo independiente que requiera actualmente:

- modificar `PRODUCT.md`;
- modificar `PV-001`;
- derivar `PV-002`;
- ni incorporar como compromiso de Product alguna de las capacidades históricas examinadas.

Las propuestas históricas se conservan en este documento como registro de la evolución del proyecto.

Su conservación documental no les confiere vigencia normativa ni las convierte en compromisos, requisitos o líneas de desarrollo pendientes.

La justificación completa de la reevaluación y de su resultado se conserva en `07-AUDITORIA_HISTORICA_DEL_DESIGN_JOURNAL.md`.

### Condición de reapertura

El cierre afecta al corpus histórico auditado y al estado actual de la evidencia.

Una propuesta podrá reabrirse si aparece nueva evidencia capaz de mostrar una pérdida humana concreta que no pueda reducirse a los compromisos vigentes y que proporcione un fundamento positivo independiente de la propia solución histórica.

No constituyen por sí mismos fundamento suficiente para la reapertura:

- la presencia histórica de una propuesta en este documento;
- su utilidad técnica o conveniencia de implementación;
- su semejanza con funcionalidades habituales;
- ni su posible utilidad futura todavía no justificada.

**Estado del corpus histórico auditado:** cerrado respecto del Product actualmente consolidado.

# 2. Hipótesis sobre el producto y su dominio

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

...
↓
HIPÓTESIS HISTÓRICA DE PRODUCTO
↓
no incorporable automáticamente

Este enfoque permitiría ampliar el modelo colaborativo sin alterar el significado del concepto de Documento ni del resto del dominio.

---

# 3. Hipótesis de organización del producto

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

     ↓

candidatos históricos
↓
someter a rederivación
↓
¿qué situación justifican?
↓
¿siguen siendo necesarios?

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

La monetización también podría evolucionar hacia un modelo basado en distintos niveles de acceso al conocimiento. No deben influir todavía en la definición del MVP salvo que durante su derivación aparezca una necesidad que las justifique.

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
