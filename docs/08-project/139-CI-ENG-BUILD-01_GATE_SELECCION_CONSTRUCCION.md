# 139 — CI-ENG-BUILD-01 / Gate de selección de construcción

**Fecha:** 24/11/2026  
**Estado:** CERRADA — no existe actualmente una obligación de construcción independiente demostrada.  
**Precedentes:** [132](132-REAPLICACION_GLOBAL_POST_DLOC_ESTABILIDAD_ESTRATEGICA.md), [138](138-CIERRE_R-ENG-BASE-04_BASELINE_INGENIERIA.md).  
**Producción:** SIN CAMBIOS.

---

# 1. Pregunta

**CI-ENG-BUILD-01**

> ¿Existe ahora una necesidad, compromiso, gap o decisión vigente que justifique una nueva actuación de construcción?

La pregunta se formula después de haber demostrado que la baseline de ingeniería es suficientemente competente para soportar construcción posterior.

Se evita confundir:

~~~text
capacidad para construir
≠
obligación de construir
~~~

---

# 2. Fuente A — compromisos, horizontes, hitos y gaps vigentes

La reaplicación global post-DLOC estableció:

~~~text
H-POST-01
→ CERRADO EN SU ALCANCE

H-PROJ-INT-01
→ CERRADO EN SU ALCANCE

H-CONV-FINAL-01
→ CERRADO EN SU ALCANCE

HITO-CONV-SYS-01
→ CERRADO

CF-CSYS-09
→ CERRADO

D-LOC-01
→ CERRADA

CI-POST-CONV-01
→ CERRADA

GAP-CE-MIAPP-01
→ no vigente
~~~

y concluyó:

~~~text
compromiso Product vigente insatisfecho
→ ninguno identificado

horizonte aceptado abierto
→ ninguno

hito obligatorio pendiente
→ ninguno

gap material abierto perteneciente a un cierre vigente
→ ninguno

dependencia constitutiva pendiente
→ ninguna demostrada
~~~

La consolidación posterior de la baseline no introduce una nueva obligación de Product ni reabre ninguno de estos cierres.

Resultado:

~~~text
FUENTE A
→ NO DERIVA CONSTRUCCIÓN
~~~

---

# 3. Fuente B — Roadmap vigente

El estado actual de ROADMAP.md establece:

~~~text
línea estratégica concreta vigente
→ ninguna actualmente establecida

LE-001
→ cerrada por cumplimiento
→ ninguna dependencia interna necesaria todavía pendiente
→ ninguna actuación posterior automáticamente derivada

siguiente línea estratégica
→ ninguna actualmente establecida
→ deberá contar con fundamento positivo propio
~~~

También conserva el principio:

~~~text
trayectoria suficientemente justificada
→ prioridad de construcción y uso
  frente a generalización teórica adicional
~~~

Este principio determina prioridad **cuando existe una trayectoria suficientemente justificada**; no crea por sí mismo una trayectoria nueva ni una actuación pendiente.

Resultado:

~~~text
FUENTE B
→ NO DERIVA CONSTRUCCIÓN
~~~

---

# 4. Fuente C — Design Journal

El corpus histórico de DESIGN_JOURNAL.md está cerrado respecto del Product consolidado.

La única propuesta posterior viva identificada es:

~~~text
NP-001
→ Ingeniería inversa asistida por IA como recurso auxiliar de investigación
→ propuesta exploratoria no normativa
~~~

Su propio estatuto excluye expresamente:

~~~text
nuevo compromiso Product
→ NO

exigencia arquitectónica
→ NO

dependencia tecnológica
→ NO

obligación de investigación
→ NO

prioridad de desarrollo
→ NO

actuación pendiente de implementación
→ NO
~~~

Sólo podría evaluarse si una investigación concreta demostrase previamente una necesidad de conocer el funcionamiento interno de otra aplicación y la insuficiencia de los procedimientos ordinarios.

Esas condiciones no están actualmente demostradas.

Resultado:

~~~text
FUENTE C
→ NO DERIVA CONSTRUCCIÓN
~~~

---

# 5. Fuente D — nueva evidencia de ingeniería

Desde la reaplicación estratégica de 132 se han producido hechos nuevos:

~~~text
typecheck
→ 29 errores → 0

npm audit
→ 15 vulnerabilidades → 0

regresión completa canónica
→ 83/83 archivos
→ 598/598 tests

lint
→ PASS

build
→ PASS

README / DEVELOPMENT_GUIDE / TESTING
→ alineados con la baseline vigente
~~~

Estos hechos demuestran:

~~~text
capacidad técnica para intervenir
→ MAYOR

ambigüedad de baseline
→ REDUCIDA

deuda técnica conocida de TypeScript
→ RESUELTA MATERIALMENTE

seguridad del tooling
→ SANEADA
~~~

Pero no demuestran:

~~~text
nueva pérdida humana
→ NO

nuevo compromiso insatisfecho
→ NO

nuevo gap de producto
→ NO

falsación de cierre anterior
→ NO

nueva decisión de alcance
→ NO
~~~

Por tanto, la nueva evidencia de ingeniería **reduce fricción para una construcción futura**, pero no genera su objeto.

Resultado:

~~~text
FUENTE D
→ NO DERIVA CONSTRUCCIÓN
~~~

---

# 6. Límites conocidos que no superan el gate

Permanecen conocidos:

~~~text
warning de chunk >500 kB
→ no bloqueante

ausencia de CI general automática
→ límite operativo

sensibilidad histórica con mayor paralelismo
→ mitigada por test:regression serial

NP-001
→ propuesta exploratoria
~~~

Ninguno presenta evidencia actual de:

- pérdida funcional;
- pérdida humana;
- imposibilidad de evolución;
- bloqueo de compromiso;
- riesgo material que impida una intervención ordinaria;
- dependencia necesaria de una actuación abierta.

Por tanto no deben convertirse en trabajo de construcción por mantenimiento inercial.

---

# 7. Contraargumento más fuerte

El contraargumento principal es:

> Si la plataforma está “en desarrollo” y la baseline ya permite construir con seguridad, debería continuarse implementando hasta completar una plataforma más amplia.

La premisa mezcla dos niveles distintos.

~~~text
producto no perfecto / plataforma evolutiva
→ VERDADERO

baseline competente para construir
→ VERDADERO

actuación concreta actualmente obligatoria
→ NO SE SIGUE DE LAS DOS ANTERIORES
~~~

Para derivar una actuación concreta sigue siendo necesario un fundamento positivo propio: compromiso pendiente, pérdida humana independiente, gap material, decisión explícita de alcance o falsación de un cierre.

Ninguno está demostrado actualmente.

---

# 8. Decisión del gate

La comprobación completa produce:

~~~text
compromiso vigente insatisfecho
→ NINGUNO DEMOSTRADO

horizonte/hito abierto
→ NINGUNO

gap material vigente
→ NINGUNO

línea estratégica vigente
→ NINGUNA

propuesta exploratoria con prioridad
→ NINGUNA

nueva evidencia humana independiente
→ NINGUNA

falsación de cierre
→ NINGUNA

obligación técnica bloqueante
→ NINGUNA
~~~

Por tanto:

~~~text
CI-ENG-BUILD-01
→ CERRADA

SALIDA
→ NO EXISTE ACTUALMENTE
  UNA OBLIGACIÓN DE CONSTRUCCIÓN
  INDEPENDIENTE DEMOSTRADA
~~~

---

# 9. Estado resultante

~~~text
ESTADO ESTRATÉGICO
→ ESTABLE

BASELINE DE INGENIERÍA
→ COMPETENTE

CONSTRUCCIÓN NUEVA
→ NO DERIVADA

producción
→ SIN CAMBIOS

siguiente actuación automática
→ NINGUNA
~~~

No hay contradicción entre:

~~~text
fundamento suficiente para construir
→ SÍ

y

construcción actualmente justificada
→ NO
~~~

La primera proposición describe una **capacidad habilitante**.  
La segunda exige una **razón positiva de selección**.

---

# 10. Condición de reanudación

La construcción deberá reabrirse únicamente ante al menos uno de estos hechos:

~~~text
nuevo compromiso o decisión aceptada
o
gap material demostrado
o
pérdida humana independiente
o
falsación de un cierre
o
defecto/riesgo técnico que bloquee
una actuación ordinaria necesaria
↓
reaplicar el procedimiento competente
↓
reducir la actuación mínima verificable
↓
construir sólo entonces
~~~

Una mejora posible, una deuda no bloqueante, una propuesta exploratoria o la mera disponibilidad de una baseline sana no bastan por sí solas.
