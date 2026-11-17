# R-80-CONV-04 — Integración ordinaria mínima de apoyo IA separado de la obra

**Fecha:** 17/11/2026  
**Estado:** FORMULADA; construcción NO autorizada.  
**Obligación:** `OB-80-CONV-01`.  
**Compromiso:** `C-PV-80-04 — Apoyo auxiliar de IA separado de la obra`.  
**Precedente:** `HITO-80-CONV-02` satisfecho mediante `R-80-CONV-03`.

---

# 1. Aplicación de PM-10

PM-10 exige:

~~~text
necesidad material de producto
↓
hipótesis mínima de realización o arquitectura
↓
contraste con compromisos consolidados
↓
¿existe bloqueo material?
├─ no → construir
└─ sí → investigar sólo el conflicto
~~~

La necesidad material está suficientemente identificada:

~~~text
C-PV-80-04
→ compromiso Product vigente

R-80-04-M1
→ realizabilidad mínima demostrada

CSO-80-04
→ criterio de disponibilidad ordinaria ya definido

App ordinaria
→ dispone de obras/materiales
→ dispone de identidad autoral
→ dispone de captura contextual
→ NO dispone de apoyo IA real asociado a obra

orden mínimo de convergencia
→ 80-01 → 80-03 → 80-04 → 80-02

80-01
→ completado

80-03
→ completado
~~~

Por tanto:

~~~text
necesidad productiva de C-PV-80-04
→ SUFICIENTEMENTE IDENTIFICADA
~~~

---

# 2. Diferencia material pendiente

La App contiene actualmente una acción:

~~~text
Solicitar asistencia
~~~

pero esa respuesta está codificada localmente.

Por tanto no satisface:

~~~text
aportación auxiliar
→ realmente procedente de IA
~~~

La diferencia pendiente no es sólo visual ni de persistencia.

Es conjuntamente:

~~~text
obra ordinaria identificable
+
solicitud opcional de apoyo
+
respuesta realmente IA
+
asociación reconocible a esa obra
+
estado auxiliar separado
+
procedencia reconocible
~~~

---

# 3. Hipótesis mínima de integración

La hipótesis mínima de producto es:

> permitir que la persona seleccione una obra ordinaria identificable,
> solicite opcionalmente una aportación auxiliar realmente generada por IA para
> esa obra, reciba esa aportación en un estado funcional separado del contenido
> de la obra y pueda reconocer suficientemente su procedencia.

La integración deberá preservar:

~~~text
obra
≠
apoyo IA

autoría de obra
≠
procedencia del apoyo IA

captura humana
≠
apoyo IA

consultar apoyo
≠
incorporar apoyo

solicitar apoyo
≠
modificar obra
~~~

---

# 4. Hito verificable derivado

Se define:

**HITO-80-CONV-03 — apoyo IA real, opcional, asociado y funcionalmente separado
de una obra ordinaria.**

El hito deberá demostrar:

~~~text
obra ordinaria
→ identificable

solicitud humana
→ explícita y opcional

respuesta
→ realmente procedente de IA

asociación
→ reconocible respecto de la obra

estado de apoyo
→ separado del contenido

obra
→ no cambia al solicitar/recibir/conservar apoyo

edición de obra
→ no elimina ni reescribe apoyo por necesidad

procedencia
→ suficientemente visible

autoría de obra
→ no absorbe procedencia IA
~~~

---

# 5. Sustrato ordinario reutilizable

La integración podrá reutilizar:

~~~text
ordinary.materials
→ obras/materiales ordinarios

ordinary.author-identities
ordinary.work-authorships
→ autoría de obra

ordinary.contextual-captures
→ captura humana independiente
~~~

No se deriva un repositorio universal.

Para este hito:

~~~text
obra ordinaria candidata
→ material identificable en ordinary.materials
~~~

como decisión local y reversible, igual que en HITO-80-CONV-02.

---

# 6. Estado mínimo propuesto

El apoyo IA deberá conservar estado propio.

Hipótesis mínima:

~~~text
AiSupport {
  id
  materialId
  content
  provenance
  createdAt
}
~~~

La procedencia mínima deberá permitir reconocer, dentro del alcance disponible:

~~~text
sistema/proveedor
+
modelo si está disponible
+
momento
+
identificador/evidencia suficiente
~~~

No se prescribe todavía el esquema definitivo.

El apoyo no se almacenará dentro de:

~~~text
ordinary.materials
ordinary.contextual-captures
ordinary.work-authorships
~~~

---

# 7. CSO-80-04 traducido a observables

## O-CONV-80-04-01 — obra identificable

Existe una obra ordinaria identificable a la que pedir apoyo.

## O-CONV-80-04-02 — solicitud opcional

La persona decide explícitamente si solicita apoyo.

## O-CONV-80-04-03 — procedencia IA real

La respuesta usada en producto ordinario procede realmente de una IA y no de
un fixture o literal local.

## O-CONV-80-04-04 — asociación

El apoyo queda asociado de forma reconocible a la obra correspondiente.

## O-CONV-80-04-05 — separación funcional

Obra y apoyo se conservan en estados distintos.

## O-CONV-80-04-06 — no incorporación automática

Solicitar, recibir o conservar apoyo no modifica `ordinary.materials`.

## O-CONV-80-04-07 — independencia de edición

Modificar posteriormente la obra no obliga a modificar o eliminar el apoyo.

## O-CONV-80-04-08 — procedencia visible

La persona puede reconocer suficientemente que el apoyo procede de IA.

## O-CONV-80-04-09 — recuperación compatible

Recuperar una obra no exige tratar el apoyo como contenido de la obra.

## O-CONV-80-04-10 — autoría separada

La identidad autoral elegida para la obra no se atribuye automáticamente al
apoyo IA.

## O-CONV-80-04-11 — captura separada

Una captura humana no se convierte en apoyo IA ni viceversa.

---

# 8. Falsadores

La integración será insuficiente si:

1. la respuesta no tiene procedencia IA real acreditable;
2. el apoyo se inserta automáticamente en el contenido de la obra;
3. solicitar apoyo modifica `ordinary.materials`;
4. editar la obra obliga a editar/eliminar el apoyo;
5. el apoyo sólo se diferencia mediante etiqueta o color pero comparte estado;
6. la autoría de la obra se atribuye al apoyo;
7. una captura contextual se trata como apoyo IA;
8. se introduce generación continua sin necesidad;
9. se introduce agente autónomo;
10. se expone una credencial secreta en el cliente;
11. la solución exige adoptar arquitectura general de IA no justificada.

---

# 9. Contraste con R-80-04-M1

R-80-04-M1 ya redujo:

~~~text
apoyo IA
≠
obra

procedencia
≠
incorporación

consultar
≠
adoptar

separación funcional
≠
etiquetado
~~~

También estableció que un fixture etiquetado como IA no basta para acreditar
procedencia.

En el experimento:

~~~text
generación real
→ ocurrió fuera del componente

tests
→ usaron salida literal acreditada

integración API/proveedor
→ NO fue necesaria
~~~

Eso era suficiente para una Realization controlada.

No es suficiente por sí mismo para disponibilidad ordinaria porque CSO-80-04
exige que la persona pueda solicitar opcionalmente una aportación realmente IA
para la obra.

---

# 10. Contraste con la App ordinaria

La App actual contiene:

~~~text
Solicitar asistencia
→ respuesta local codificada

ordinary.materials
→ obras ordinarias

identidad autoral
→ asociación obra↔autoría

captura contextual
→ estado humano separado
~~~

No contiene:

~~~text
cliente IA
endpoint de servidor
proveedor IA
función serverless
broker de generación
mecanismo equivalente
~~~

La búsqueda del repositorio no encuentra infraestructura reutilizable de este
tipo.

`package.json` contiene React/Vite y dependencias de UI/test, pero ninguna
integración de proveedor IA.

---

# 11. Bloqueo material identificado

Se identifica:

**B-80-04-AI-01 — borde seguro mínimo para obtener una aportación IA real desde
el recorrido ordinario.**

La pregunta bloqueante es:

> ¿Cuál es el mecanismo mínimo y seguro mediante el que la App ordinaria puede
> solicitar una aportación realmente IA para una obra sin exponer secretos en
> el cliente ni convertir esta actuación en una arquitectura general de IA?

Esta incertidumbre sí puede modificar materialmente la solución.

Por tanto:

~~~text
PM-10
→ NO autoriza todavía construcción

investigación localizada
→ NECESARIA
~~~

---

# 12. Alternativas mínimas a contrastar

La investigación de B-80-04-AI-01 deberá comparar sólo alternativas capaces de
satisfacer el hito.

## A — backend/endpoint mínimo del propio proyecto

~~~text
cliente
→ endpoint propio
→ proveedor IA
~~~

Ventajas:
- secreto fuera del navegador;
- contrato controlable;
- separación clara.

Costes:
- introduce superficie servidor/despliegue;
- requiere decidir entorno de ejecución.

## B — función serverless mínima

~~~text
cliente
→ función serverless
→ proveedor IA
~~~

Ventajas:
- secreto fuera del cliente;
- infraestructura acotada;
- puede encajar con despliegue estático + función externa.

Costes:
- dependencia de plataforma;
- configuración y despliegue adicionales.

## C — proveedor/local runtime sin secreto remoto

Ejemplo conceptual:

~~~text
cliente
→ servicio IA local controlado
~~~

Ventajas:
- puede evitar credencial remota.

Costes:
- disponibilidad no universal;
- dependencia del entorno local;
- puede no representar el producto ordinario desplegable.

## D — salida IA preacreditada

~~~text
obra
→ apoyo literal previamente generado
~~~

Ventaja:
- determinismo.

Problema decisivo:
- no satisface por sí sola la condición ordinaria de solicitud de una
  aportación realmente IA para esa obra.

Por tanto D puede servir a tests o fixtures, pero no cerrar CSO-80-04.

---

# 13. Criterios para resolver B-80-04-AI-01

La alternativa elegida deberá satisfacer conjuntamente:

1. la persona puede provocar una solicitud real desde el recorrido ordinario;
2. la respuesta procede realmente de IA;
3. no se expone secreto de proveedor en el cliente;
4. la solución puede asociar la respuesta a una obra ordinaria;
5. la procedencia puede mostrarse suficientemente;
6. los tests funcionales pueden seguir siendo deterministas mediante seam,
   mock o contrato equivalente;
7. no exige agente autónomo;
8. no exige generación continua;
9. no obliga a resolver autenticación general;
10. no obliga a definir arquitectura universal de IA;
11. es compatible con el despliegue previsto o permite declarar explícitamente
    su alcance local si ése fuera el resultado aceptado.

---

# 14. Decisión que NO se toma todavía

No se decide todavía:

- proveedor concreto;
- modelo concreto;
- API concreta;
- backend definitivo;
- plataforma serverless;
- esquema de credenciales;
- política de costes;
- rate limiting;
- autenticación general;
- interfaz final;
- persistencia definitiva;
- incorporación de apoyo a obra.

Estas decisiones sólo podrán adoptarse si son necesarias para resolver
B-80-04-AI-01.

---

# 15. Estrategia de tests futura, aún no autorizada

Una vez resuelto B-80-04-AI-01, la actuación constructiva deberá preregistrar
tests para:

~~~text
solicitud explícita
respuesta IA por seam controlable
asociación a obra
no modificación de ordinary.materials
persistencia/recuperación si se exige
procedencia visible
separación de autoría
separación de captura
error de proveedor sin corrupción de obra
~~~

Los tests no deberán depender de red real.

La procedencia real se acreditará por una prueba de integración/control humano
separada de los tests deterministas.

---

# 16. Validación posterior prevista

Tras resolver el bloqueo y construir:

~~~text
1. suite específica C-PV-80-04
2. App histórica
3. R-80-04-M1
4. captura integrada
5. identidad autoral integrada
6. criterio diferencial TypeScript
7. suite canónica completa
8. contraste humano ordinario con IA real
~~~

---

# 17. Criterio de cierre futuro

La actuación sólo podrá cerrarse cuando:

~~~text
B-80-04-AI-01
→ RESUELTO

integración mínima
→ CONSTRUIDA

CSO-80-04
→ SATISFECHO

HITO-80-CONV-03
→ SATISFECHO

contraste humano
→ POSITIVO

regresiones
→ NO OBSERVADAS
~~~

---

# 18. Estado resultante bajo PM-10

~~~text
C-PV-80-04
→ necesidad productiva suficiente

hipótesis mínima
→ formulada

HITO-80-CONV-03
→ DERIVADO

B-80-04-AI-01
→ BLOQUEO MATERIAL ABIERTO

R-80-CONV-04
→ FORMULADA
→ NO ABIERTA PARA CONSTRUCCIÓN

producción
→ SIN CAMBIOS
~~~

La siguiente actuación legítima no es construir.

Es reducir únicamente:

~~~text
B-80-04-AI-01
→ borde seguro mínimo de obtención de IA real
~~~

---

# 19. HUMAN GATE

Decisión pendiente:

> ¿ACEPTAS abrir la reducción localizada de `B-80-04-AI-01` dentro de
> `R-80-CONV-04`, sin modificar producción, para decidir el mecanismo mínimo
> y seguro de obtención de una aportación IA real?

Hasta esa decisión:

~~~text
producción
→ SIN CAMBIOS

tests nuevos
→ NO AUTORIZADOS

dependencias
→ SIN CAMBIOS

infraestructura
→ SIN CAMBIOS
~~~


---

# 20. Apertura de la reducción localizada B-80-04-AI-01

La persona responsable autoriza únicamente:

~~~text
B-80-04-AI-01
→ REDUCIR

producción
→ NO MODIFICAR

tests
→ NO PREREGISTRAR TODAVÍA

dependencias
→ NO MODIFICAR
~~~

La reducción se mantiene localizada en el borde de obtención segura de una
aportación IA real.

---

# 21. Restricción de despliegue vigente

El producto ordinario público utiliza actualmente:

~~~text
GitHub Pages
→ frontend estático
→ build Vite
→ despliegue manual
~~~

Este destino fue elegido previamente como primer destino reversible, no como
requisito universal del producto.

La consecuencia relevante para B-80-04-AI-01 es:

~~~text
GitHub Pages
→ puede servir HTML/CSS/JS estático
→ no proporciona runtime servidor para custodiar secretos
  ni ejecutar una llamada privilegiada a proveedor IA
~~~

Por tanto:

~~~text
credencial de proveedor en bundle Vite
→ DESCARTADA

VITE_* con secreto
→ DESCARTADO

llamada directa desde navegador
con secreto embebido
→ DESCARTADA
~~~

La frontera de confianza debe quedar fuera del cliente.

---

# 22. Comparación de alternativas

## 22.1 A — backend propio persistente

Forma:

~~~text
GitHub Pages
→ backend propio
→ proveedor IA
~~~

### Ventajas

- secreto fuera del navegador;
- control completo de contrato y políticas;
- extensible a persistencia, autenticación o colas si fueran necesarias.

### Costes

- introduce servicio servidor permanente;
- añade superficie operativa y de despliegue;
- obliga a decidir hosting y ciclo de vida servidor;
- ofrece capacidades no requeridas por C-PV-80-04.

### Evaluación

~~~text
seguridad
→ suficiente

capacidad
→ superior a la necesaria

simplicidad/reversibilidad
→ peor que función serverless mínima
~~~

Resultado:

~~~text
A
→ NO SELECCIONADA
→ sobreconstruye el borde actual
~~~

---

## 22.2 B — función serverless mínima externa

Forma:

~~~text
GitHub Pages
→ POST HTTPS
→ función serverless mínima
→ proveedor IA
~~~

Responsabilidades irreducibles de la función:

1. recibir una solicitud acotada;
2. validar formato y tamaño;
3. construir la llamada mínima al proveedor;
4. usar secreto sólo en runtime servidor;
5. recibir la respuesta;
6. devolver contenido + metadatos de procedencia suficientes;
7. devolver error controlado sin modificar obra.

No tendrá, en el alcance inicial:

- base de datos;
- sesiones;
- autenticación general;
- memoria conversacional;
- agentes;
- colas;
- herramientas;
- historial servidor;
- almacenamiento de obras;
- almacenamiento de capturas;
- almacenamiento de autorías.

### Ventajas

- mantiene el secreto fuera del navegador;
- no obliga a abandonar GitHub Pages;
- introduce una única frontera nueva;
- puede desplegarse y retirarse independientemente;
- permite tests deterministas del cliente mediante seam/mock;
- permite prueba real separada contra proveedor;
- minimiza estado y acoplamiento.

### Costes

- añade un segundo destino de despliegue;
- exige CORS explícito si usa dominio distinto;
- exige gestión de secreto y límites de uso;
- añade dependencia operativa externa.

### Evaluación

~~~text
seguridad
→ suficiente

capacidad
→ ajustada

reversibilidad
→ alta

compatibilidad con Pages
→ alta

superficie nueva
→ mínima entre alternativas válidas
~~~

Resultado:

~~~text
B
→ SELECCIONADA COMO BORDE MÍNIMO
~~~

---

## 22.3 C — servicio IA local controlado

Forma:

~~~text
browser local
→ runtime IA local
~~~

### Ventajas

- puede evitar secreto remoto;
- útil para desarrollo o pruebas locales;
- control fuerte del entorno.

### Costes

- exige instalación/runtime adicional;
- no está disponible en la App pública de GitHub Pages por defecto;
- convierte el entorno local en requisito operacional;
- no satisface de forma suficiente el recorrido ordinario público ya adoptado.

Resultado:

~~~text
C
→ NO SELECCIONADA PARA PRODUCTO ORDINARIO
→ posible herramienta local futura
~~~

---

## 22.4 D — salida IA preacreditada

Forma:

~~~text
respuesta IA real generada previamente
→ literal controlado
→ App
~~~

### Ventajas

- determinista;
- útil para tests;
- útil para contrastes aislados;
- ya demostró valor en R-80-04-M1.

### Limitación decisiva

No permite:

~~~text
persona
→ solicita ahora apoyo IA para esta obra
→ recibe respuesta realmente generada
~~~

Resultado:

~~~text
D
→ NO SATISFACE CSO-80-04 EN PRODUCTO ORDINARIO
→ se conserva como estrategia de fixtures/tests
~~~

---

# 23. Decisión del borde mínimo seguro

Se decide:

**B-80-04-AI-EDGE-01 — endpoint serverless mínimo externo como frontera de
confianza entre la App estática y el proveedor IA.**

Topología:

~~~text
App en GitHub Pages
        |
        | POST HTTPS
        v
endpoint serverless mínimo
        |
        | credencial sólo servidor
        v
proveedor IA
        |
        v
respuesta auxiliar + procedencia
        |
        v
App
→ estado de apoyo separado
→ ordinary.materials intacto
~~~

La decisión selecciona la categoría arquitectónica del borde.

No selecciona todavía:

- proveedor serverless;
- proveedor IA;
- modelo;
- SDK;
- nombre de endpoint;
- dominio;
- política económica definitiva.

---

# 24. Contrato mínimo del borde

## 24.1 Solicitud

El cliente enviará únicamente lo necesario para producir apoyo sobre una obra.

Contrato conceptual:

~~~text
AiSupportRequest {
  workId
  workContent
  request
}
~~~

Donde:

- `workId` permite asociación local;
- `workContent` aporta contexto mínimo;
- `request` expresa qué apoyo solicita la persona.

No se envían por defecto:

- capturas contextuales;
- identidad operativa;
- identidad autoral;
- historial completo;
- otros materiales;
- estado post-v1.

Cualquier ampliación requerirá justificación propia.

## 24.2 Respuesta

Contrato conceptual:

~~~text
AiSupportResponse {
  content
  provenance {
    system
    model?
    requestId?
  }
}
~~~

La respuesta no contiene una obra modificada.

Regla:

~~~text
endpoint
→ devuelve apoyo

endpoint
→ NO devuelve nuevo ordinary.material
→ NO decide incorporación a obra
~~~

---

# 25. Propiedad y persistencia

La función serverless será inicialmente sin estado.

~~~text
persistencia servidor
→ NO

persistencia de apoyo
→ responsabilidad cliente/local
  si el hito exige recuperación
~~~

La App conservará el apoyo en un estado propio, separado de:

~~~text
ordinary.materials
ordinary.contextual-captures
ordinary.author-identities
ordinary.work-authorships
~~~

Esto minimiza el nuevo borde y evita duplicar contenido de usuario en un
servidor sin necesidad.

---

# 26. Seguridad mínima obligatoria

La implementación futura deberá cumplir:

1. secreto del proveedor sólo en runtime serverless;
2. ningún secreto en `VITE_*`, bundle o localStorage;
3. endpoint sólo por HTTPS;
4. método permitido inicialmente `POST`;
5. tipo de contenido esperado explícito;
6. límite de tamaño de entrada;
7. CORS restringido a orígenes permitidos cuando corresponda;
8. errores sin eco de secreto ni respuesta interna sensible;
9. timeout acotado;
10. ausencia de ejecución de herramientas/agentes;
11. ausencia de incorporación automática de respuesta a la obra.

Si el endpoint queda públicamente invocable sin autenticación, deberá
establecerse al menos una protección mínima contra abuso antes de considerarlo
apto para despliegue público.

La forma exacta de esa protección no se deriva todavía.

---

# 27. Tratamiento de procedencia

La procedencia que recibe el cliente deberá venir del borde servidor, no de un
campo editable por la persona.

Mínimo:

~~~text
system
→ identificador del sistema/proveedor

model
→ cuando el proveedor lo permita o el servidor lo conozca

requestId
→ cuando exista
~~~

La App podrá añadir localmente:

~~~text
createdAt
materialId
~~~

La procedencia no se atribuirá a la identidad autoral de la obra.

---

# 28. Pruebas deterministas frente a prueba real

Se separan dos niveles:

## 28.1 Tests funcionales

~~~text
cliente
→ seam AiSupportGateway
→ fake/mock determinista
~~~

Verifican:

- solicitud explícita;
- asociación;
- separación;
- no modificación de obra;
- persistencia local;
- tratamiento de errores;
- autoría/captura intactas.

No usan red real.

## 28.2 Prueba de integración real

~~~text
App/cliente de integración
→ endpoint desplegado
→ proveedor IA real
~~~

Verifica:

- respuesta realmente IA;
- secreto no presente en cliente;
- procedencia suficiente;
- error controlado.

Esta prueba deberá realizarse antes del contraste humano final.

---

# 29. Evaluación del bloqueo

La pregunta original era:

> ¿Cuál es el mecanismo mínimo y seguro mediante el que la App ordinaria puede
> solicitar una aportación realmente IA para una obra sin exponer secretos en
> el cliente ni convertir esta actuación en una arquitectura general de IA?

Respuesta:

~~~text
GitHub Pages
→ mantiene frontend ordinario

+
endpoint serverless externo mínimo
→ único borde privilegiado

+
secreto sólo servidor
→ proveedor IA

+
respuesta apoyo + procedencia
→ cliente

+
estado local separado
→ obra intacta
~~~

Por tanto:

~~~text
B-80-04-AI-01
→ RESUELTO
~~~

---

# 30. Qué queda abierto tras resolver el bloqueo

La reducción NO decide todavía:

~~~text
Cloudflare Workers
vs
Vercel Functions
vs
otra plataforma serverless equivalente
~~~

porque esa elección no modifica la frontera funcional ya decidida y puede
hacerse en el momento mínimo de implementación atendiendo a disponibilidad,
coste y despliegue.

Tampoco decide proveedor/modelo IA.

Quedan como decisiones de implementación acotadas:

~~~text
D-80-04-IMPL-01
→ plataforma serverless concreta

D-80-04-IMPL-02
→ proveedor/modelo IA concreto

D-80-04-IMPL-03
→ protección mínima contra abuso para endpoint público
~~~

Ninguna de ellas exige reabrir Product ni R-80-04-M1.

---

# 31. Estado resultante de R-80-CONV-04

~~~text
R-80-CONV-04
→ REDUCCIÓN B-80-04-AI-01 ABIERTA Y COMPLETADA

B-80-04-AI-01
→ RESUELTO

borde mínimo
→ endpoint serverless externo

construcción
→ TODAVÍA NO INICIADA

tests
→ TODAVÍA NO PREREGISTRADOS

producción
→ SIN CAMBIOS

dependencias
→ SIN CAMBIOS
~~~

Bajo PM-10 desaparece el bloqueo arquitectónico principal.

El siguiente paso legítimo pasa a ser:

~~~text
formular el diseño constructivo mínimo
+
preregistrar tests RED
+
resolver sólo las decisiones de implementación
que sean necesarias para construir
~~~

antes de tocar producción.


---

# 32. Diseño constructivo mínimo

Tras resolver `B-80-04-AI-01`, la construcción queda reducida a dos unidades
con una frontera explícita.

## 32.1 Cliente ordinario

Responsabilidad:

~~~text
App
→ seleccionar obra ordinaria
→ recoger petición humana de apoyo
→ invocar gateway
→ recibir apoyo
→ conservarlo en estado propio
→ mostrar contenido + procedencia
~~~

Persistencia cliente propuesta:

~~~text
ordinary.ai-support
~~~

Forma mínima:

~~~text
AiSupport {
  id: string
  materialId: string
  request: string
  content: string
  provenance: {
    system: string
    model?: string
    requestId?: string
  }
  createdAt: string
}
~~~

La App no almacenará el apoyo dentro de `ordinary.materials`.

## 32.2 Gateway cliente

Se prevé una unidad pequeña:

~~~text
src/ai-support/aiSupportGateway.ts
~~~

Responsabilidad exclusiva:

~~~text
AiSupportRequest
→ POST a VITE_AI_SUPPORT_ENDPOINT
→ validar respuesta mínima
→ devolver AiSupportResponse
→ normalizar error
~~~

`VITE_AI_SUPPORT_ENDPOINT` es configuración pública y NO contiene secreto.

## 32.3 Worker

Se prevé:

~~~text
workers/ai-support/
→ Worker Cloudflare mínimo
~~~

Responsabilidad:

~~~text
POST /ai-support
→ validar origen/método/payload
→ aplicar protección de abuso
→ llamar OpenAI Responses API
→ devolver sólo apoyo + procedencia
~~~

No almacena obras ni apoyos.

---

# 33. Decisiones de implementación imprescindibles

## D-80-04-IMPL-01 — plataforma serverless

Decisión:

~~~text
Cloudflare Workers
→ SELECCIONADO
~~~

Razones:

- runtime serverless aislado del frontend estático;
- secretos server-side;
- `fetch` nativo suficiente para llamar proveedor;
- rate limiting disponible en el propio Worker;
- despliegue independiente y reversible;
- no obliga a migrar GitHub Pages.

No se añade Cloudflare Pages ni base de datos.

## D-80-04-IMPL-02 — proveedor y modelo inicial

Decisión:

~~~text
proveedor
→ OpenAI API

API
→ Responses API

modelo inicial
→ gpt-6-luna

reasoning effort
→ low

tools
→ NINGUNA
~~~

Justificación:

- el hito requiere apoyo textual auxiliar, no máxima capacidad general;
- `gpt-6-luna` está orientado a tareas acotadas y coste reducido;
- el modelo puede sustituirse más adelante sin alterar la frontera
  `obra ≠ apoyo`;
- no se habilitan web search, file search, function calling ni otros tools.

La llamada inicial usará HTTP directo desde Worker a Responses API.

No se introduce SDK OpenAI mientras `fetch` directo sea suficiente.

## D-80-04-IMPL-03 — secreto

~~~text
OPENAI_API_KEY
→ Cloudflare Worker Secret
→ nunca VITE_*
→ nunca localStorage
→ nunca repositorio
~~~

Para desarrollo local se usará `.dev.vars` no versionado.

Al construir el Worker deberá añadirse `.dev.vars*` a `.gitignore`.

## D-80-04-IMPL-04 — protección mínima contra abuso

Para el primer despliegue público:

~~~text
Cloudflare Rate Limiting binding
→ por IP
→ sólo ruta /ai-support

+
límite de longitud de payload

+
límite de salida del modelo

+
CORS al origen autorizado
~~~

La cifra concreta del rate limit será configuración de despliegue y no forma
parte del contrato Product.

CORS no se tratará como mecanismo de autenticación.

No se introduce todavía login general.

## D-80-04-IMPL-05 — prompt mínimo

El Worker enviará instrucciones estables equivalentes a:

~~~text
proporciona apoyo auxiliar sobre la obra;
responde a la petición concreta;
no declares que el apoyo ha sido incorporado a la obra;
no reescribas automáticamente la obra;
devuelve sólo el apoyo solicitado
~~~

Entrada:

~~~text
obra
+
petición humana
~~~

No se enviarán por defecto:

- identidad operativa;
- alias autoral;
- capturas;
- otros materiales;
- historial post-v1.

## D-80-04-IMPL-06 — salida y procedencia

El Worker devolverá:

~~~text
{
  content,
  provenance: {
    system: "OpenAI",
    model: "gpt-6-luna",
    requestId
  }
}
~~~

`requestId` se incluirá cuando la API/proveedor lo haga disponible.

La App añadirá localmente:

~~~text
materialId
createdAt
~~~

## D-80-04-IMPL-07 — tratamiento de errores

~~~text
fallo red/proveedor/validación
→ NO crea apoyo
→ NO modifica obra
→ muestra estado de error recuperable
~~~

No habrá reintentos automáticos en la primera versión.

---

# 34. Archivos inicialmente previstos para construcción

Después de RED válido, el cambio deberá limitarse inicialmente a:

~~~text
src/App.tsx
src/ai-support/aiSupportGateway.ts
src/App.ai-support.integration.test.tsx

workers/ai-support/src/index.ts
workers/ai-support/wrangler.jsonc

.gitignore
package.json / lock
→ sólo si Wrangler se incorpora como herramienta reproducible
~~~

No se autoriza modificar:

~~~text
ResumeExperience
PostV1IntegratedExperience
realizaciones consolidadas de captura
realizaciones consolidadas de autoría
comparación
rutas
~~~

salvo evidencia material nueva.

---

# 35. Tests RED preregistrados

Se crea:

~~~text
src/App.ai-support.integration.test.tsx
~~~

con nueve pruebas.

## T-CONV-80-04-01 — solicitud explícita

La App ofrece selección de obra, petición y acción `Solicitar apoyo IA`, pero
no invoca el gateway antes de la acción humana.

## T-CONV-80-04-02 — contrato mínimo de solicitud

La llamada contiene exactamente el contexto mínimo:

~~~text
workId
workContent
request
~~~

y usa `VITE_AI_SUPPORT_ENDPOINT`.

## T-CONV-80-04-03 — separación obra/apoyo

La respuesta aparece como apoyo asociado a la obra y
`ordinary.materials` permanece byte-a-byte igual.

## T-CONV-80-04-04 — procedencia separada de autoría

Se muestran:

~~~text
system
model
requestId
~~~

y el alias de la obra no se usa como procedencia del apoyo.

## T-CONV-80-04-05 — recuperación

El apoyo persiste en estado propio y reaparece tras desmontar/remontar App.

## T-CONV-80-04-06 — independencia de edición

Una modificación posterior del contenido de la obra no obliga a modificar ni
eliminar el apoyo ya conservado.

## T-CONV-80-04-07 — independencia de captura y autoría

Solicitar apoyo no modifica:

~~~text
ordinary.contextual-captures
ordinary.author-identities
ordinary.work-authorships
~~~

## T-CONV-80-04-08 — captura humana no es obra IA

Una captura humana no aparece como obra seleccionable por el mero hecho de
existir.

## T-CONV-80-04-09 — fallo seguro

Un 503/fallo de proveedor:

~~~text
→ muestra error
→ no modifica ordinary.materials
→ no crea apoyo falso
~~~

---

# 36. Estrategia de test del Worker

Los tests de App son RED ahora y no dependen de red real.

El Worker tendrá posteriormente pruebas propias para:

1. rechazar método distinto de POST;
2. rechazar origen no permitido;
3. rechazar payload malformado o excesivo;
4. no exponer `OPENAI_API_KEY`;
5. traducir una respuesta válida de OpenAI al contrato mínimo;
6. devolver error controlado ante fallo del proveedor;
7. aplicar rate limit.

Esas pruebas se preregistrarán al crear el scaffold del Worker, porque importar
un Worker inexistente ahora produciría un RED inválido de infraestructura y no
de comportamiento.

---

# 37. Gate RED actual

Debe ejecutarse:

~~~text
npx vitest run src/App.ai-support.integration.test.tsx
~~~

Resultado esperado inicialmente:

~~~text
Test Files
→ 1 failed

Tests
→ 9 failed
~~~

La causa válida deberá alcanzar la capacidad ausente, por ejemplo:

~~~text
Unable to find role="region"
name="Apoyo auxiliar de IA"
~~~

No será RED válido:

- error de import;
- error de sintaxis;
- ausencia de `fetch` en entorno;
- error de configuración Vitest;
- DEUDA-TSC-COMP-01.

---

# 38. Estado tras diseño y preregistro

~~~text
B-80-04-AI-01
→ RESUELTO

diseño constructivo mínimo
→ FORMULADO

D-80-04-IMPL-01
→ Cloudflare Workers

D-80-04-IMPL-02
→ OpenAI Responses API / gpt-6-luna

D-80-04-IMPL-03
→ secreto server-side

D-80-04-IMPL-04
→ rate limiting + límites + CORS

tests App
→ PREREGISTRADOS

RED
→ NO CONFIRMADO TODAVÍA

producción
→ SIN CAMBIOS

Worker
→ NO CREADO TODAVÍA

dependencias
→ SIN CAMBIOS
~~~

Sólo un RED válido autorizará comenzar la construcción del cliente y del
gateway. El scaffold del Worker se construirá después de ese gate y sus pruebas
propias precederán a su lógica de proveedor.


---

# 39. Verificación del RED inicial

Ejecución comunicada:

~~~text
npx vitest run src/App.ai-support.integration.test.tsx
~~~

Resultado:

~~~text
Test Files  1 failed (1)
Tests       9 failed (9)
~~~

La App ordinaria se monta correctamente y mantiene visibles:

~~~text
Captura contextual
Identidad autoral
Autorías de obras
Ahora
Continuidad compartida
Materiales anteriores
~~~

El fallo alcanza exactamente la capacidad ausente preregistrada:

~~~text
Unable to find an accessible element
with role "region"
and name "Apoyo auxiliar de IA"
~~~

No aparece un fallo previo de imports, sintaxis, entorno ni configuración.

Por tanto:

~~~text
RED INICIAL
→ VÁLIDO

gate de construcción cliente
→ SUPERADO

App + gateway cliente
→ AUTORIZADOS

Worker
→ TODAVÍA NO CONSTRUIDO
~~~


---

# 40. Primer tramo de construcción — cliente y gateway

Tras RED válido se implementa únicamente:

~~~text
src/ai-support/aiSupportGateway.ts
src/App.tsx
~~~

El gateway:

~~~text
VITE_AI_SUPPORT_ENDPOINT
→ POST JSON
→ valida AiSupportResponse
→ normaliza fallo mediante excepción
~~~

No contiene secreto ni proveedor.

La App añade:

~~~text
region "Apoyo auxiliar de IA"
selección de obra
petición humana
acción "Solicitar apoyo IA"
estado ordinary.ai-support
procedencia separada
error recuperable
~~~

No se modifica:

~~~text
ordinary.materials
ordinary.contextual-captures
ordinary.author-identities
ordinary.work-authorships
~~~

como efecto de conservar apoyo IA.

El Worker y sus dependencias siguen sin construirse.

Siguiente gate:

~~~text
npx vitest run src/App.ai-support.integration.test.tsx
~~~

Sólo si el cliente alcanza GREEN se abrirá el scaffold del Worker y se
preregistrarán sus pruebas antes de implementar la llamada real a OpenAI.


---

# 41. GREEN del tramo cliente

Ejecución comunicada:

~~~text
npx vitest run src/App.ai-support.integration.test.tsx
~~~

Resultado:

~~~text
Test Files  1 passed (1)
Tests       9 passed (9)
~~~

Por tanto:

~~~text
cliente ordinario
→ GREEN 9/9

gateway HTTP
→ contrato funcional satisfecho bajo fetch simulado

gate cliente
→ SUPERADO
~~~

Siguiente paso preregistrado:

~~~text
crear scaffold mínimo de Worker
+
preregistrar sus tests
+
mantener todavía sin implementar
la llamada real a OpenAI
~~~
