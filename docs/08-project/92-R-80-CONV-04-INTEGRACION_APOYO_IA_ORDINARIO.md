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


---

# 42. Scaffold y RED del Worker preregistrados

Tras GREEN 9/9 del cliente se crea únicamente el scaffold del borde servidor:

~~~text
workers/ai-support/src/index.ts
workers/ai-support/src/index.test.ts
workers/ai-support/wrangler.jsonc
~~~

El handler existe y es importable, pero devuelve deliberadamente:

~~~text
501
not_implemented
~~~

No llama todavía a OpenAI.

Se añade además a `.gitignore`:

~~~text
.dev.vars
.dev.vars.*
workers/**/.dev.vars
workers/**/.dev.vars.*
~~~

para impedir versionar secretos locales.

No se incorpora aún Wrangler como dependencia porque las pruebas contractuales
del handler pueden ejecutarse con el Vitest existente y Web APIs estándar.

---

# 43. Tests preregistrados del Worker

La suite contiene siete contratos:

~~~text
T-WORKER-80-04-01
→ método distinto de POST = 405

T-WORKER-80-04-02
→ origen no autorizado = 403
→ proveedor no llamado

T-WORKER-80-04-03
→ payload malformado = 400

T-WORKER-80-04-04
→ payload excesivo = 413
→ proveedor no llamado

T-WORKER-80-04-05
→ rate limit agotado = 429
→ proveedor no llamado

T-WORKER-80-04-06
→ Responses API válida
→ 200
→ contenido + procedencia mínima

T-WORKER-80-04-07
→ fallo upstream
→ 502 controlado
→ secreto no expuesto
~~~

El fixture de Responses API reproduce la estructura HTTP documentada:

~~~text
response.id
response.model
response.output[]
  → message
  → content[]
  → output_text.text
~~~

No se presupone un campo HTTP agregado `output_text` que sólo algunos SDK
ofrecen como conveniencia.

---

# 44. Configuración todavía incompleta a propósito

`wrangler.jsonc` fija únicamente:

~~~text
name
main
compatibility_date
ALLOWED_ORIGIN
MODEL
~~~

No contiene:

~~~text
OPENAI_API_KEY
rate-limit namespace real
account id
ruta de producción
~~~

El binding de Rate Limiting se añadirá sólo cuando exista un namespace real de
la cuenta Cloudflare; no se inventa un identificador.

---

# 45. Gate RED del Worker

Debe ejecutarse con el Vitest ya existente:

~~~text
npx vitest run workers/ai-support/src/index.test.ts
~~~

Resultado esperado:

~~~text
Test Files
→ 1 failed

Tests
→ 7 failed
~~~

La causa esperada es comportamiento todavía no implementado:

~~~text
actual status
→ 501

expected
→ 405 / 403 / 400 / 413 / 429 / 200 / 502
~~~

Este RED será válido porque:

- el Worker existe;
- el test puede importarlo;
- no falta dependencia;
- no depende de red;
- no requiere secreto real.

Sólo después de observar ese RED se implementará la lógica del Worker.


---

# 46. RED del Worker confirmado

Ejecución comunicada:

~~~text
npx vitest run workers/ai-support/src/index.test.ts
~~~

Resultado:

~~~text
Test Files  1 failed (1)
Tests       7 failed (7)
~~~

Patrón observado:

~~~text
actual
→ 501

expected
→ 405
→ 403
→ 400
→ 413
→ 429
→ 200
→ 502
~~~

Todos los tests alcanzan el handler real y fallan únicamente por
`not_implemented`.

Por tanto:

~~~text
RED WORKER
→ VÁLIDO

gate de implementación Worker
→ SUPERADO
~~~


---

# 47. Implementación del contrato del Worker

Tras RED válido se implementa únicamente el handler preregistrado.

Responsabilidades implementadas:

~~~text
POST only
origin check
payload validation
payload size limits
rate limiter binding
OPENAI_API_KEY server-side
Responses API via fetch
reasoning effort low
sin tools
extracción output[].content[].output_text
traducción a content + provenance
fallo upstream → 502 controlado
~~~

No se incorpora:

~~~text
Wrangler dependency
secreto real
namespace real de rate limiting
deploy
dominio de producción
autenticación general
persistencia servidor
~~~

Siguiente gate:

~~~text
npx vitest run workers/ai-support/src/index.test.ts
~~~

Sólo después de GREEN se avanzará a comprobar conjuntamente cliente + Worker y
a preparar el despliegue real.


---

# 48. GREEN del Worker

Ejecución comunicada:

~~~text
npx vitest run workers/ai-support/src/index.test.ts
~~~

Resultado:

~~~text
Test Files  1 passed (1)
Tests       7 passed (7)
~~~

Por tanto:

~~~text
Worker contract
→ GREEN 7/7

cliente ordinario
→ GREEN 9/9

borde cliente↔Worker
→ cada lado validado aisladamente
~~~

No se ha desplegado todavía ningún Worker ni se ha configurado secreto real.

Siguiente gate:

~~~text
npx vitest run \
  src/App.ai-support.integration.test.tsx \
  workers/ai-support/src/index.test.ts
~~~

Objetivo:

~~~text
cliente
+
Worker
→ GREEN conjunto
~~~

Sólo después de ese resultado se preparará el despliegue real mínimo y la
prueba con proveedor IA real.


---

# 49. GREEN conjunto cliente + Worker

Ejecución comunicada:

~~~text
npx vitest run \
  src/App.ai-support.integration.test.tsx \
  workers/ai-support/src/index.test.ts
~~~

Resultado:

~~~text
Test Files  2 passed (2)
Tests       16 passed (16)
~~~

Por tanto:

~~~text
cliente
→ GREEN 9/9

Worker
→ GREEN 7/7

cliente + Worker
→ GREEN 16/16

contrato funcional del borde
→ SATISFECHO
~~~

---

# 50. Revalidación previa a despliegue real

Antes de configurar credenciales o desplegar se revalidan las dependencias
externas que afectan materialmente a seguridad y operabilidad.

## 50.1 Modelo API

La documentación vigente de OpenAI confirma:

~~~text
gpt-6-luna
→ modelo API vigente
→ orientado a tareas focalizadas/de alto volumen

Responses API
→ interfaz vigente para nuevas integraciones
~~~

Por tanto:

~~~text
D-80-04-IMPL-02
→ SE MANTIENE
~~~

## 50.2 Rate Limiting de Cloudflare

La documentación vigente de Cloudflare confirma que:

~~~text
Rate Limiting binding
→ disponible

period
→ 10 o 60 segundos

namespace_id
→ obligatorio
→ entero positivo expresado como string

decisión de límite
→ aproximada/local por ubicación

IP como key
→ NO recomendada como identificador estable
  cuando puede representar múltiples usuarios
~~~

El Worker actual usa:

~~~text
CF-Connecting-IP
→ X-Forwarded-For
→ "unknown"
~~~

como clave del rate limiter.

Eso fue suficiente para el contrato funcional preregistrado, pero no constituye
todavía una protección pública suficientemente fundada frente a abuso de una
credencial OpenAI de pago.

Se abre únicamente:

**B-80-04-DEPLOY-01 — protección mínima suficientemente segura del endpoint
público antes de exponer una credencial OpenAI real.**

Hasta resolverlo:

~~~text
OPENAI_API_KEY real
→ NO CONFIGURAR

Worker público con proveedor real
→ NO DESPLEGAR

GitHub Pages
→ SIN CAMBIOS
~~~

El bloqueo no reabre:

- Product;
- CSO-80-04;
- frontera obra/apoyo;
- contrato cliente↔Worker;
- elección de Responses API;
- elección inicial de gpt-6-luna.

Sólo afecta al borde de exposición pública de una credencial facturable.


---

# 51. Apertura localizada de B-80-04-DEPLOY-01

Se abre únicamente:

**B-80-04-DEPLOY-01 — protección mínima suficientemente segura del endpoint
público antes de exponer una credencial OpenAI real.**

No se reabre:

- C-PV-80-04;
- CSO-80-04;
- HITO-80-CONV-03;
- frontera obra/apoyo;
- contrato funcional cliente↔Worker;
- OpenAI Responses API;
- modelo inicial;
- persistencia local del apoyo.

Durante esta reducción:

~~~text
producción
→ SIN CAMBIOS

Worker público real
→ NO DESPLEGAR

OPENAI_API_KEY real
→ NO CONFIGURAR
~~~

---

# 52. Propiedad que debe conseguir la protección

La protección mínima no necesita demostrar identidad civil ni cuenta de usuario.

Debe conseguir conjuntamente:

1. dificultar de forma material la automatización anónima masiva;
2. impedir replay trivial de una prueba válida;
3. evitar que una simple clave copiable del bundle permita consumir la API;
4. limitar ráfagas aun después de superar la barrera primaria;
5. limitar económicamente el daño residual si las otras capas fallan;
6. mantener la App pública sin exigir cuenta general;
7. mantener secretos exclusivamente en servidor;
8. no introducir infraestructura persistente innecesaria.

No se exige seguridad absoluta frente a una persona determinada dispuesta a
resolver desafíos repetidamente.

---

# 53. Alternativa A — Rate Limiting aproximado como única barrera

Forma:

~~~text
request
→ Worker Rate Limiting
→ OpenAI
~~~

Cloudflare documenta que el Rate Limiting de Workers:

- es aproximado;
- se aplica localmente por ubicación;
- puede dejar pasar solicitudes por encima del umbral;
- recomienda usar como clave un identificador estable de usuario o clase;
- no recomienda IP como identificador estable cuando varios usuarios pueden
  compartirla.

En el producto actual no existe:

~~~text
userId
API key por usuario
tenantId
sesión autenticada
~~~

Por tanto el rate limit por IP no puede cumplir por sí solo la función de
barrera primaria sin riesgo simultáneo de:

~~~text
falso agrupamiento de usuarios legítimos
+
evasión mediante cambio de IP/proxy
+
carácter sólo aproximado
~~~

Resultado:

~~~text
A
→ INSUFICIENTE COMO ÚNICA BARRERA

rate limiting
→ CONSERVAR COMO DEFENSA SECUNDARIA DE RÁFAGA
→ NO tratar como identidad de usuario
~~~

---

# 54. Alternativa B — Turnstile por solicitud sensible

Forma:

~~~text
App
→ Turnstile Managed
→ token
→ Worker
→ Siteverify
→ si válido: OpenAI
~~~

Propiedades relevantes de Turnstile:

~~~text
token
→ validación server-side obligatoria
→ un solo uso
→ caduca aproximadamente a los 5 minutos

Managed mode
→ puede resolver sin interacción visible
→ puede pedir interacción cuando detecta riesgo
~~~

La validación server-side puede comprobar adicionalmente:

~~~text
success
hostname
action
~~~

El secreto de Turnstile permanece en Worker.

Ventajas:

- no exige cuenta ni identidad permanente;
- está diseñado para proteger una acción sensible frente a automatización;
- token de un solo uso reduce replay;
- encaja con GitHub Pages + Worker;
- la sitekey es pública por diseño;
- el secret de validación permanece servidor;
- puede probarse con claves de test sin usar OpenAI real.

Limitaciones:

- no demuestra que exista una persona única;
- no impide que una persona o automatización capaz de superar desafíos genere
  consumo;
- añade una dependencia cliente + Siteverify;
- cada solicitud protegida necesita token válido nuevo.

Resultado:

~~~text
B
→ SUFICIENTE COMO BARRERA PRIMARIA MÍNIMA
→ SELECCIONADA
~~~

---

# 55. Alternativa C — autenticación ligera con Cloudflare Access / OTP

Forma:

~~~text
persona
→ email / OTP
→ Cloudflare Access
→ Worker
→ OpenAI
~~~

Cloudflare Access puede proteger el Worker antes de que éste ejecute y puede
usar OTP por email para personas autorizadas.

Ventajas:

- aporta identidad autenticada más estable;
- permite rate limiting y políticas por sujeto más fiables;
- reduce notablemente abuso anónimo.

Costes y conflicto con el alcance actual:

- exige política de usuarios autorizados;
- introduce login;
- introduce email como dato operacional;
- convierte el endpoint en recurso para una población previamente definida;
- altera materialmente la experiencia pública actual;
- aproxima el proyecto a un modelo de cuentas/autorización que C-PV-80-04 no
  exige.

Resultado:

~~~text
C
→ SEGURIDAD MAYOR
→ NO SELECCIONADA PARA EL BORDE MÍNIMO
→ reservar si el producto adopta posteriormente autenticación
  o si Turnstile resulta insuficiente en evidencia real
~~~

---

# 56. Alternativa D — secreto compartido embebido en cliente

Forma:

~~~text
bundle Vite
→ shared secret
→ Worker
~~~

Resultado:

~~~text
D
→ DESCARTADA
~~~

Razón:

~~~text
secreto enviado al navegador
→ deja de ser secreto
→ puede copiarse y automatizarse fuera de la App
~~~

Ni variable VITE_* ni localStorage resuelven este problema.

---

# 57. Alternativa E — token firmado propio / sesión anónima

Forma conceptual:

~~~text
challenge inicial
→ servidor emite token corto firmado
→ varias solicitudes usan token
~~~

Ventajas:

- podría evitar ejecutar Turnstile en cada solicitud;
- permitiría un identificador pseudónimo estable durante una sesión;
- permitiría rate limiting por sesión.

Costes:

- introduce emisión y validación de sesión;
- obliga a diseñar expiración, renovación y revocación;
- si el challenge inicial sigue siendo Turnstile, añade complejidad sin eliminar
  esa dependencia;
- incrementa el alcance antes de disponer de evidencia de que una validación
  Turnstile por solicitud sea insuficiente.

Resultado:

~~~text
E
→ NO SELECCIONADA AHORA
→ posible optimización posterior si la fricción real lo justifica
~~~

---

# 58. Capa económica independiente — límite estricto OpenAI

OpenAI permite configurar límites de gasto por proyecto y aplicar un límite
estricto que hace fallar futuras solicitudes una vez alcanzado el gasto
registrado, aunque la aplicación no es instantánea y puede existir un pequeño
sobrepaso.

Esto no autentica ni distingue bots.

Su responsabilidad es distinta:

~~~text
Turnstile
→ reducir automatización abusiva

rate limiting
→ frenar ráfagas

hard spend limit OpenAI
→ limitar impacto económico residual
~~~

Por tanto:

~~~text
hard spend limit
→ OBLIGATORIO antes de exposición pública real
→ defensa de última instancia
→ NO sustituto de Turnstile
~~~

Se recomienda utilizar un proyecto OpenAI dedicado a esta integración para que
la contención económica quede aislada de otros usos API.

El importe exacto del límite será una decisión operativa humana antes del
despliegue y no una propiedad de Product.

---

# 59. Decisión — protección mínima pública

Se decide:

**EDGE-PROTECT-80-04-01 — defensa en profundidad mínima sin identidad de
cuenta.**

Capas:

~~~text
1. origen permitido + HTTPS
   ↓
2. Turnstile Managed
   ↓
3. Siteverify server-side
   - token obligatorio
   - single-use
   - expiración propia de Turnstile
   - hostname esperado
   - action esperada
   ↓
4. payload y output acotados
   ↓
5. Rate Limiting de Cloudflare
   - protección secundaria de ráfaga
   - IP sólo como señal gruesa
   - NO como identidad de usuario
   ↓
6. OpenAI project dedicado
   - modelo permitido acotado
   - hard spend limit activo
   ↓
7. OpenAI Responses API
~~~

Esta combinación se selecciona porque:

- añade una barrera anti-automatización real sin introducir login;
- evita secreto compartido en cliente;
- conserva el rate limit en la responsabilidad que realmente puede cumplir;
- añade contención económica independiente;
- mantiene reversible la arquitectura;
- no modifica C-PV-80-04.

---

# 60. Cambio mínimo de contrato necesario

La decisión de seguridad obliga a ampliar sólo el request técnico:

~~~text
AiSupportRequest {
  workId
  workContent
  request
  turnstileToken
}
~~~

`turnstileToken`:

- no forma parte de la obra;
- no forma parte del apoyo;
- no se persiste;
- se usa una sola vez;
- sólo autoriza intentar esa solicitud.

El Worker deberá validar el token antes de llamar a OpenAI.

Se deberá usar una `action` específica, por ejemplo:

~~~text
ai_support
~~~

y comprobar en Siteverify:

~~~text
success = true
hostname = hostname esperado
action = ai_support
~~~

No se deriva ninguna identidad personal de este token.

---

# 61. Consecuencia sobre el rate limiter existente

El test preregistrado:

~~~text
T-WORKER-80-04-05
→ rate limit antes de OpenAI
~~~

sigue siendo válido.

Pero cambia su interpretación:

~~~text
antes
→ protección pública principal candidata

ahora
→ defensa secundaria contra ráfaga
~~~

La clave IP podrá conservarse inicialmente sólo como señal gruesa, con un umbral
lo bastante amplio para minimizar falsos positivos.

No se declarará:

~~~text
IP
→ usuario

IP
→ cuota individual fiable
~~~

Si se necesitara posteriormente una cuota individual real, deberá aparecer un
identificador estable fundado por otro mecanismo.

---

# 62. Falsadores de la solución de despliegue

EDGE-PROTECT-80-04-01 será insuficiente si:

1. el Worker acepta una solicitud sin token Turnstile válido;
2. el token no se valida server-side;
3. se acepta replay de un token ya usado;
4. no se comprueban hostname/action esperados;
5. el secreto Turnstile llega al bundle;
6. el secreto OpenAI llega al bundle;
7. el rate limiter vuelve a tratarse como identidad fiable;
8. no existe límite económico duro antes del despliegue público;
9. un fallo de Turnstile permite continuar hacia OpenAI;
10. la protección obliga a crear cuenta/login sin una nueva justificación.

---

# 63. Estado de B-80-04-DEPLOY-01

~~~text
alternativas comparadas
→ rate limiting sólo
→ Turnstile
→ Access/OTP
→ secreto compartido cliente
→ sesión anónima firmada

decisión
→ Turnstile Managed como barrera primaria
→ rate limiting como capa secundaria
→ hard spend limit OpenAI como contención económica

autenticación general
→ NO introducida

B-80-04-DEPLOY-01
→ RESUELTO

producción
→ SIN CAMBIOS

deploy real
→ TODAVÍA NO EJECUTADO

secretos reales
→ TODAVÍA NO CONFIGURADOS
~~~

Siguiente actuación legítima:

~~~text
actualizar diseño técnico mínimo
+
preregistrar RED específico de Turnstile
+
implementar validación con claves de test
+
sólo después preparar configuración real
~~~


---

# 64. Preregistro RED — protección Turnstile

Se autoriza únicamente el preregistro de tests de protección del borde público.

Alcance:

~~~text
documentación
→ ACTUALIZAR

tests Worker
→ AÑADIR RED

producción Worker
→ NO MODIFICAR

Turnstile real
→ NO CONFIGURAR

secretos reales
→ NO CONFIGURAR

deploy
→ NO EJECUTAR
~~~

La finalidad de este corte no es hacer funcionar Turnstile, sino fijar antes de
la implementación las propiedades observables que deberá satisfacer.

## 64.1 Orden mínimo de procesamiento preregistrado

El orden esperado queda:

~~~text
POST
↓
origen permitido
↓
JSON y payload válidos
↓
límites de tamaño
↓
turnstileToken presente
↓
Siteverify server-side
  success = true
  hostname = esperado
  action = ai_support
↓
rate limiting secundario
↓
configuración OpenAI válida
↓
OpenAI Responses API
~~~

Las validaciones locales baratas preceden a Siteverify para no consumir una
validación remota ante solicitudes ya inválidas.

Turnstile debe preceder siempre al rate limiting operativo que protege la
llamada facturable y, en todo caso, a OpenAI.

## 64.2 T-WORKER-80-04-08 — token obligatorio

~~~text
request válido salvo turnstileToken ausente
→ 400
→ Siteverify NO llamado
→ OpenAI NO llamado
~~~

Propiedad falsada si una solicitud sin token puede alcanzar OpenAI.

## 64.3 T-WORKER-80-04-09 — rechazo de Siteverify

~~~text
turnstileToken presente
+
Siteverify success = false
→ 403
→ OpenAI NO llamado
~~~

Un fallo de la barrera primaria debe cerrar la petición.

## 64.4 T-WORKER-80-04-10 — hostname obligatorio

~~~text
Siteverify success = true
+
hostname != hostname esperado
→ 403
→ OpenAI NO llamado
~~~

No basta con que el token sea criptográficamente válido; debe corresponder al
sitio esperado.

## 64.5 T-WORKER-80-04-11 — action obligatoria

~~~text
Siteverify success = true
+
hostname correcto
+
action != ai_support
→ 403
→ OpenAI NO llamado
~~~

El token de otra acción no autoriza apoyo IA.

## 64.6 T-WORKER-80-04-12 — orden de capas con token válido

~~~text
Siteverify válido
→ rate limiter
→ OpenAI
~~~

El test deberá observar exactamente ese orden una vez superadas las
validaciones locales.

## 64.7 T-WORKER-80-04-13 — replay rechazado

El replay no se implementará mediante una base de datos propia de tokens.

Se preregistra la propiedad de Turnstile:

~~~text
mismo token
→ primera validación Siteverify aceptada
→ segunda validación Siteverify rechazada
→ segunda solicitud NO alcanza OpenAI
~~~

El test simulará el comportamiento de single-use de Siteverify. No se deriva
estado persistente adicional en el Worker.

## 64.8 Seam de prueba

Los tests reutilizarán el seam HTTP ya existente mediante `fetchImpl`.

Se distinguirán dos destinos:

~~~text
https://challenges.cloudflare.com/turnstile/v0/siteverify
https://api.openai.com/v1/responses
~~~

No se introduce SDK de Turnstile ni abstracción general nueva en este corte.

## 64.9 Estado esperado tras el preregistro

~~~text
T-WORKER-80-04-01…07
→ deben permanecer GREEN

T-WORKER-80-04-08…13
→ deben quedar RED por ausencia deliberada de implementación

workers/ai-support/src/index.ts
→ SIN CAMBIOS
~~~

El siguiente gate será ejecutar únicamente:

~~~text
npx vitest run workers/ai-support/src/index.test.ts
~~~

y comprobar que el rojo corresponde a las seis propiedades nuevas, no a
regresiones de los siete contratos ya consolidados.


---

# 65. GREEN — validación mínima Turnstile

Ejecución comunicada:

~~~text
npx vitest run workers/ai-support/src/index.test.ts
~~~

Resultado:

~~~text
Test Files  1 passed (1)
Tests       13 passed (13)
~~~

Por tanto:

~~~text
T-WORKER-80-04-01…07
→ GREEN
→ contratos históricos conservados

T-WORKER-80-04-08…13
→ GREEN
→ protección Turnstile satisfecha en el seam determinista

Worker contract
→ GREEN 13/13
~~~

La implementación mínima acreditada incluye:

~~~text
turnstileToken
→ obligatorio

Siteverify
→ server-side

success
→ true obligatorio

hostname
→ debe coincidir con el derivado de ALLOWED_ORIGIN

action
→ ai_support

orden
→ validaciones locales
→ Siteverify
→ rate limiter
→ OpenAI

replay
→ rechazado según comportamiento single-use simulado de Siteverify
→ sin base de datos propia de tokens
~~~

No se ha incorporado:

~~~text
secretos reales
→ NO

deploy
→ NO

SDK Turnstile
→ NO

sesiones
→ NO

autenticación general
→ NO

persistencia servidor
→ NO

cambios cliente
→ NO
~~~

Estado resultante:

~~~text
EDGE-PROTECT-80-04-01
→ IMPLEMENTADO EN EL WORKER
→ VALIDADO 13/13

B-80-04-DEPLOY-01
→ RESUELTO

producción pública real
→ TODAVÍA NO DESPLEGADA

TURNSTILE_SECRET_KEY real
→ TODAVÍA NO CONFIGURADA

OPENAI_API_KEY real
→ TODAVÍA NO CONFIGURADA
~~~

El siguiente paso legítimo no es ampliar arquitectura.

Es decidir y preparar de forma controlada la configuración real mínima necesaria
para una prueba de despliegue, manteniendo separadas las credenciales reales del
código y conservando la posibilidad de reversión.


---

# 66. Configuración mínima real previa a prueba de despliegue

Se prepara únicamente la configuración necesaria para poder realizar una prueba
real y reversible del borde público.

No se despliega todavía y no se introducen secretos en el repositorio.

## 66.1 Configuración versionable del Worker

`workers/ai-support/wrangler.jsonc` deberá declarar:

~~~text
name
→ mi-app-ai-support

main
→ src/index.ts

ALLOWED_ORIGIN
→ https://enrisan1.github.io

MODEL
→ gpt-6-luna

secretos requeridos
→ TURNSTILE_SECRET_KEY
→ OPENAI_API_KEY

AI_SUPPORT_RATE_LIMITER
→ namespace_id = "800401"
→ limit = 10
→ period = 60
~~~

El valor 10/60 se adopta sólo como umbral operativo inicial para la prueba de
despliegue. No representa identidad individual ni cuota de producto y podrá
revisarse con evidencia posterior.

El namespace `800401` se reserva para este binding mientras no exista colisión
con otro namespace de la misma cuenta Cloudflare. Cloudflare exige un entero
positivo expresado como string y que namespaces distintos usen identificadores
distintos cuando no se desea compartir contadores.

## 66.2 Secretos que NO se versionan

Valores sensibles:

~~~text
TURNSTILE_SECRET_KEY
→ secreto real del widget Turnstile

OPENAI_API_KEY
→ clave del proyecto OpenAI dedicado
~~~

No deberán aparecer en:

~~~text
git
wrangler.jsonc vars
VITE_*
bundle
localStorage
documentación
capturas
logs
~~~

Para desarrollo local podrán residir en:

~~~text
workers/ai-support/.dev.vars
~~~

ya cubierto por `.gitignore`.

Para Worker desplegado deberán almacenarse como secretos de Cloudflare.

## 66.3 Turnstile — valores reales

Se requiere crear un widget Turnstile:

~~~text
modo
→ Managed

hostname autorizado
→ enrisan1.github.io

sitekey
→ pública
→ cliente

secret key
→ privada
→ TURNSTILE_SECRET_KEY

action emitida por cliente
→ ai_support
~~~

La sitekey puede formar parte de configuración pública del frontend porque no es
un secreto.

La secret key sólo se utiliza en Siteverify desde el Worker.

## 66.4 Claves de prueba Turnstile frente a claves reales

Cloudflare proporciona sitekeys y secrets de prueba para automatización.

Sirven para comprobar:

~~~text
render básico del widget
generación de token dummy
success/failure de Siteverify
timeout-or-duplicate simulado
~~~

Pero existe una limitación material:

~~~text
Siteverify con secret de prueba exitoso
→ hostname = example.com
→ action ausente
~~~

Por tanto las claves de prueba NO pueden satisfacer de extremo a extremo el
Worker actual, que exige conjuntamente:

~~~text
hostname = enrisan1.github.io
action = ai_support
~~~

Conclusión:

~~~text
tests unitarios deterministas
→ mocks
→ ya GREEN

prueba de integración básica de Turnstile
→ puede usar claves de prueba

prueba real Worker + hostname + action
→ requiere widget real + secret real
~~~

No se relajarán las comprobaciones de hostname/action para acomodar claves de
prueba.

## 66.5 Proyecto OpenAI dedicado

Antes de una prueba real facturable se requiere:

~~~text
proyecto OpenAI dedicado
→ esta integración

modelo permitido
→ gpt-6-luna

OPENAI_API_KEY
→ generada dentro de ese proyecto

monthly spend limit
→ valor humano explícito

Enforce hard limit
→ ACTIVADO
~~~

El límite exacto de gasto no se fija en código ni documentación técnica porque
es una decisión operativa humana. Debe establecerse antes de introducir la
clave real en Cloudflare.

Las alertas de gasto no sustituyen al hard limit.

## 66.6 Autenticación operativa de despliegue

Wrangler necesitará autenticación contra la cuenta Cloudflare para desplegar.

Esa autenticación pertenece al entorno operativo del usuario y no al Worker:

~~~text
credencial Wrangler / sesión Cloudflare
→ fuera del repo
→ NO binding del Worker
→ NO variable de producto
~~~

## 66.7 Qué puede probarse sin secretos reales

Sin secretos reales pueden mantenerse:

~~~text
Vitest 13/13
→ contrato Worker completo por seam

validación payload
→ local

hostname/action
→ mocks

replay
→ mocks de Siteverify

rate limiter
→ contrato unitario
~~~

También puede probarse Turnstile de forma aislada con claves dummy, aceptando
sus limitaciones.

## 66.8 Qué exige secretos reales

La primera prueba remota completa exige conjuntamente:

~~~text
widget Turnstile real
+
token real emitido desde enrisan1.github.io
+
TURNSTILE_SECRET_KEY real en Worker
+
binding AI_SUPPORT_RATE_LIMITER desplegado
+
proyecto OpenAI dedicado
+
hard spend limit activo
+
OPENAI_API_KEY real en Worker
~~~

Sólo entonces puede acreditarse:

~~~text
browser real
→ Turnstile real
→ Siteverify hostname/action reales
→ rate limit de Cloudflare
→ OpenAI real
→ respuesta real
~~~

## 66.9 Bloqueo restante antes del deploy real

El Worker está preparado para recibir `turnstileToken`, pero el cliente
ordinario todavía no genera ese token.

Por tanto la configuración de servidor puede prepararse ahora, pero una prueba
end-to-end desde la App requiere después una integración cliente mínima de
Turnstile que:

~~~text
renderice widget Managed
use sitekey pública
emita action = ai_support
obtenga token
incluya turnstileToken en AiSupportRequest
no persista el token
renueve token por solicitud
~~~

Esto no reabre C-PV-80-04; es la adaptación mínima del cliente necesaria para
usar la protección ya decidida.

## 66.10 Estado resultante

~~~text
wrangler declarativo
→ PREPARADO

secretos requeridos
→ DECLARADOS POR NOMBRE

secretos reales
→ NO CONFIGURADOS

Turnstile real
→ NO CREADO TODAVÍA

OpenAI project dedicado
→ NO ACREDITADO TODAVÍA

hard spend limit
→ NO ACREDITADO TODAVÍA

deploy
→ NO EJECUTADO

cliente Turnstile
→ PENDIENTE
~~~


---

# 67. Preregistro RED — Turnstile mínimo en cliente

Se abre únicamente la adaptación mínima del cliente necesaria para consumir el
Worker ya protegido.

Alcance:

~~~text
sitekey
→ pública
→ VITE_TURNSTILE_SITE_KEY

renderizado
→ explícito
→ apropiado para SPA

action
→ ai_support

ejecución
→ al solicitar apoyo

token
→ efímero
→ enviado como turnstileToken
→ NO persistido
→ nuevo por solicitud

secret key
→ NO cliente
→ NO VITE_*
~~~

No se modifica C-PV-80-04 ni se introduce autenticación, sesión o identidad.

## 67.1 T-CONV-80-04-10 — configuración del widget

Al solicitar apoyo, el cliente deberá invocar Turnstile explícitamente con:

~~~text
sitekey
→ VITE_TURNSTILE_SITE_KEY

action
→ ai_support

execution
→ execute
~~~

y ejecutar el widget antes de enviar la petición al Worker.

## 67.2 T-CONV-80-04-11 — token en el contrato

Tras recibir un token válido:

~~~text
AiSupportRequest
→ workId
→ workContent
→ request
→ turnstileToken
~~~

El token deberá corresponder al emitido para esa solicitud.

## 67.3 T-CONV-80-04-12 — ausencia de persistencia

El token no deberá aparecer en:

~~~text
localStorage
ordinary.materials
ordinary.ai-support
capturas
autorías
~~~

Su ciclo de vida termina con la solicitud.

## 67.4 T-CONV-80-04-13 — token nuevo por solicitud

Dos solicitudes consecutivas deberán obtener dos ejecuciones Turnstile y enviar
los respectivos tokens emitidos, sin reutilizar el anterior.

## 67.5 Estrategia determinista

Los tests no cargarán la red real de Cloudflare.

Se inyectará/stubeará la API global explícita de Turnstile:

~~~text
turnstile.render
turnstile.execute
turnstile.remove
~~~

El contrato real del script se mantendrá en producción mediante:

~~~text
https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit
~~~

## 67.6 Gate RED

Antes de implementar:

~~~text
T-CONV-80-04-01…09
→ deben permanecer GREEN

T-CONV-80-04-10…13
→ deben quedar RED por ausencia de integración cliente
~~~

Sólo tras observar ese RED se autoriza la implementación mínima.
