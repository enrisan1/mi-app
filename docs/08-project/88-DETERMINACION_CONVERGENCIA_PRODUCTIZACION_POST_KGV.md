# Determinación de convergencia/productización post-KGV tras estado estable

**Fecha:** 17/11/2026  
**Estado:** DECISIÓN ESTRATÉGICA PROPUESTA; apertura de convergencia justificada, pendiente de HUMAN GATE.

---

# 1. Pregunta

Determinar si el estado estable alcanzado después de cerrar las obligaciones
realizativas post-KGV justifica:

~~~text
A — abrir convergencia/productización
    de los compromisos post-KGV

o

B — permanecer en espera
    de nuevo fundamento humano
~~~

La decisión no pregunta todavía cómo integrar técnicamente cada testigo.

---

# 2. Regla aplicable

La estrategia de convergencia establece:

~~~text
soluciones locales correctas
≠
producto global coherente
~~~

y distingue:

~~~text
capacidad realizada
≠
capacidad integrada
≠
capacidad completada para producto
~~~

PM-10 establece además:

~~~text
necesidad material de producto
↓
hipótesis mínima de realización/arquitectura
↓
contraste
↓
construcción si no existe bloqueo material
~~~

Por tanto, una Realization suficiente puede cerrar una incertidumbre de
realizabilidad sin satisfacer por sí misma la disponibilidad ordinaria del
compromiso Product.

---

# 3. Qué estatuto tienen C-PV-80-01…04

Los cuatro fueron aceptados mediante HUMAN GATE y consolidados como compromisos
Product.

Su aceptación no estableció automáticamente:

- prioridad;
- arquitectura;
- implementación;
- satisfacción;
- integración.

Pero sí estableció obligaciones normativas del producto:

~~~text
C-PV-80-01
→ el producto deberá poder hacer practicable captura inmediata

C-PV-80-02
→ el producto deberá poder hacer practicable comparación suficientemente simultánea

C-PV-80-03
→ el producto deberá poder permitir identidad autoral elegible

C-PV-80-04
→ el producto deberá poder hacer disponible apoyo auxiliar IA separado
~~~

Las Realizations posteriores demostraron que esas situaciones son realizables
en los alcances trabajados.

No transformaron por sí mismas esos testigos en producto ordinario.

---

# 4. Auditoría material del recorrido ordinario actual

Se inspeccionan:

~~~text
src/App.tsx
src/main.tsx
~~~

## 4.1 C-PV-80-01 — captura inmediata

Existe:

~~~text
src/realizations/capture/ContextualCaptureExperience.tsx
~~~

pero no está montado ni mediado por el recorrido ordinario de App.

Resultado:

~~~text
realizabilidad
→ demostrada

disponibilidad ordinaria
→ NO demostrada
~~~

## 4.2 C-PV-80-02 — comparación

La evidencia CodeMirror vive en testigos/harnesses específicos de comparación.

App y main no ofrecen actualmente un recorrido ordinario equivalente para
comparar dos documentos textuales relacionados con la suficiencia demostrada.

Resultado:

~~~text
realizabilidad
→ suficientemente demostrada

disponibilidad ordinaria
→ NO demostrada
~~~

## 4.3 C-PV-80-03 — identidad autoral elegible

Existe:

~~~text
src/realizations/author-identity/AuthorIdentityExperience.tsx
~~~

pero App no ofrece identidad operativa + identidades autorales reutilizables
elegibles por obra.

Resultado:

~~~text
realizabilidad
→ demostrada

disponibilidad ordinaria
→ NO demostrada
~~~

## 4.4 C-PV-80-04 — apoyo IA separado

Existe:

~~~text
src/realizations/ai-support/SeparatedAiSupportExperience.tsx
~~~

pero App no ofrece apoyo IA asociado a una obra y funcionalmente separado de su
contenido.

Resultado:

~~~text
realizabilidad
→ demostrada

disponibilidad ordinaria
→ NO demostrada
~~~

---

# 5. Contraste con el precedente C-PV-POST-01

La actuación 73 estableció una regla importante:

~~~text
testigo separado
≠
integración literal obligatoria
~~~

si puede demostrarse que el recorrido ordinario ya hace practicable
suficientemente el mismo resultado humano.

Para C-PV-POST-01 se observó esa mediación ordinaria y no fue necesaria la
integración literal de HandoffExperience.

En C-PV-80-01…04 no se ha demostrado actualmente una mediación ordinaria
equivalente.

Por tanto, no puede aplicarse todavía la misma salida negativa a convergencia.

---

# 6. ¿Existe fundamento positivo para convergencia?

Sí.

La cadena es:

~~~text
compromisos Product aceptados
+
realizabilidad mínima demostrada
+
ausencia actual de disponibilidad ordinaria equivalente demostrada
↓
diferencia entre Product vigente y producto ordinario
↓
necesidad material de convergencia
~~~

Este fundamento no procede de una mejora técnica opcional.

Procede del propio estatuto Product de C-PV-80-01…04.

---

# 7. Por qué el estado estable de 87 no se invalida retroactivamente

87 estableció correctamente que, tras cerrar las obligaciones exploratorias:

~~~text
ninguna nueva investigación
ningún nuevo horizonte
ninguna nueva candidata Product
~~~

quedaban automáticamente derivados.

La presente evaluación formula una pregunta distinta:

> ¿los compromisos Product ya aceptados y realizables están suficientemente
> disponibles en el producto ordinario?

La inspección material responde negativamente.

Por tanto:

~~~text
estado estable exploratorio
→ válido

pero

estado final de productización post-KGV
→ NO establecido
~~~

La nueva actuación deriva de convergencia de compromisos existentes, no de
inventar otro compromiso.

---

# 8. Contraargumento principal

> Los testigos ya demuestran suficiente valor; integrarlos puede ser
> sobreconstrucción.

El argumento es correcto contra la integración literal de los testigos, pero no
contra toda convergencia.

La obligación Product no exige:

~~~text
copiar cada componente experimental a App
~~~

Exige:

~~~text
que el resultado humano comprometido
sea suficientemente practicable en el producto
~~~

Por eso la primera actuación no debe implementar cuatro features.

Debe determinar cuál es la convergencia mínima suficiente y qué patrimonio
experimental puede reutilizarse, reducirse, componerse o descartarse.

---

# 9. Decisión propuesta

~~~text
permanecer simplemente en espera
→ NO JUSTIFICADO

abrir nueva investigación humana
→ NO NECESARIO

abrir nuevo horizonte
→ NO DERIVADO

abrir fase de convergencia/productización post-KGV
→ SÍ JUSTIFICADO
~~~

La fase no cambia Product.

Tampoco presupone que los cuatro compromisos necesiten cuatro módulos
independientes en la interfaz final.

---

# 10. Primera obligación de convergencia propuesta

**OB-80-CONV-01 — determinar y hacer verificable la disponibilidad ordinaria
mínima y coherente de C-PV-80-01…C-PV-80-04 dentro del producto, reutilizando o
reduciendo las Realizations existentes sin convertir automáticamente sus
mecanismos experimentales en arquitectura final.**

Antes de construir debe establecer:

1. recorrido humano ordinario al que pertenece cada compromiso;
2. qué resultados pueden componerse en una misma experiencia;
3. qué separaciones siguen siendo necesarias;
4. dependencias entre los cuatro compromisos y el producto existente;
5. conflictos de estado/persistencia/interfaz;
6. criterio de satisfacción ordinaria para cada compromiso;
7. hito mínimo de convergencia;
8. orden de integración mínimo.

---

# 11. Primera actuación propuesta

**R-80-CONV-01 — auditoría y diseño mínimo de convergencia post-KGV.**

Debe producir:

~~~text
App actual
+
C-PV-80-01…04
+
Realizations demostradas
↓
mapa de disponibilidad ordinaria
↓
solapamientos y dependencias
↓
mínimo recorrido convergente
↓
criterios de finalización
↓
primer hito verificable
~~~

No debe modificar todavía:

- App;
- arquitectura;
- almacenamiento;
- rutas;
- dependencias;
- ni componentes de producción.

---

# 12. HUMAN GATE requerido

La apertura de una fase de convergencia material cambia el estado operativo del
proyecto aunque no cree un nuevo Product Value ni un nuevo horizonte.

Por tanto se propone el gate:

> ¿ACEPTAS abrir la fase de convergencia/productización post-KGV mediante
> `OB-80-CONV-01`, comenzando por `R-80-CONV-01` como auditoría y diseño
> mínimo, sin modificar todavía producción?

Hasta esa decisión:

~~~text
fundamento de convergencia
→ ESTABLECIDO

OB-80-CONV-01
→ PROPUESTA

R-80-CONV-01
→ NO ABIERTA

producción
→ SIN CAMBIOS
~~~


---

# 13. Resultado del HUMAN GATE

**Fecha:** 17/11/2026

Se evalúa la propuesta `OB-80-CONV-01` contra los criterios ya establecidos.

Fundamento observado:

- los cuatro compromisos `C-PV-80-01…04` están aceptados por Product;
- su realizabilidad mínima está demostrada;
- no existe disponibilidad ordinaria equivalente demostrada en `App`;
- la actuación propuesta es finita, verificable y previa a cualquier cambio de producción;
- no presupone arquitectura ni integración literal de los testigos.

El contraargumento principal —riesgo de sobreconstrucción— queda contenido por
el propio alcance de `R-80-CONV-01`, que sólo audita y diseña la convergencia
mínima suficiente antes de construir.

Decisión:

~~~text
OB-80-CONV-01
→ ACEPTADA

R-80-CONV-01
→ AUTORIZADA SU APERTURA

producción
→ SIN CAMBIOS

nuevo Product Value
→ NO

nuevo horizonte
→ NO
~~~

La aceptación no autoriza todavía ninguna modificación de `App`, arquitectura,
persistencia, rutas o componentes productivos.
