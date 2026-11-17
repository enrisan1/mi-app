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
