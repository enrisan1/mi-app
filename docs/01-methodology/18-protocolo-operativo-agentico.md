# Protocolo operativo agéntico

## Estado

**Norma metodológica operativa vigente.**

Este documento regula la ejecución práctica de actuaciones ya justificadas cuando intervienen agentes, herramientas conectadas, repositorios, entornos de desarrollo u otros mecanismos capaces de realizar directamente operaciones de lectura, validación o modificación.

No sustituye a:

```text
00-protocolo-de-trabajo.md
→ metodología transversal del proyecto

17-manual-de-continuidad-estrategica.md
→ derivación de la siguiente actuación justificable

99-protocolo-de-consolidacion-documental.md
→ consolidación y reapertura documental
```

Su función específica es determinar **cómo debe ejecutarse una actuación ya justificada**, con el mayor grado razonable de autonomía operativa compatible con:

- trazabilidad;
- evidencia;
- reversibilidad;
- control humano sobre las decisiones sustantivas;
- intervención mínima;
- y ausencia de modificaciones no justificadas.

---

# 1. Problema operativo

El procedimiento histórico de trabajo utilizó con frecuencia una secuencia del tipo:

```text
agente
↓
propone una consulta o comando
↓
usuario lo ejecuta
↓
usuario copia el resultado
↓
agente interpreta el resultado
↓
propone la siguiente consulta
```

Este procedimiento posee una ventaja:

```text
no asumir como ejecutada
una operación que no ha sido comprobada
```

pero introduce una latencia muy elevada cuando se aplica también a operaciones ordinarias de lectura, búsqueda o validación.

En proyectos de gran tamaño puede convertir al usuario en un mero intermediario entre:

```text
agente
↔
repositorio / terminal / herramienta
```

aunque no exista ninguna decisión humana sustantiva que adoptar.

Por tanto debe distinguirse entre:

```text
necesidad de evidencia
```

y:

```text
necesidad de intervención humana
```

La primera permanece obligatoria.

La segunda sólo debe producirse cuando exista una razón suficiente.

---

# 2. Principio general

Cuando un agente disponga de acceso directo al recurso necesario:

> deberá realizar autónomamente las operaciones de lectura, inspección y validación no destructiva pertinentes a la actuación.

Por tanto:

```text
acceso directo disponible
+
operación no destructiva
+
operación pertinente al objetivo vigente
↓
ejecución autónoma
```

No deberá utilizarse al usuario como intermediario manual salvo que:

```text
el recurso necesario
sólo sea accesible
desde un entorno
al que el agente no tenga acceso
```

La autonomía operativa:

```text
≠
autonomía estratégica
```

y:

```text
capacidad técnica de ejecutar una acción
≠
fundamento para ejecutarla
```

---

# 3. Separación de responsabilidades

La operación del proyecto distingue cuatro funciones principales.

## 3.1 Dirección y derivación

Corresponde a la capa estratégica y metodológica determinar:

```text
qué problema existe

qué cuerpo es competente

qué actuación está justificada

cuál es su alcance

qué criterio permite cerrarla
```

El Manual de continuidad estratégica conserva autoridad sobre esta derivación.

---

## 3.2 Ejecución agéntica

El agente operativo puede:

```text
leer

buscar

comparar

analizar

ejecutar controles

realizar cambios ya justificados

ejecutar pruebas

construir versiones auditables

preparar evidencia
```

dentro del alcance autorizado.

No puede derivar por mera iniciativa técnica:

```text
nuevos compromisos de Product

nuevo horizonte

nueva Architecture

nueva Realization

nueva Implementation

nueva investigación sustantiva
```

---

## 3.3 Control humano

La intervención humana se reserva principalmente para:

```text
decisiones estratégicas

cambio de alcance

alternativas materialmente distintas

riesgos relevantes

acciones externas significativas

publicación

despliegue

consolidación cuando corresponda

situaciones donde el fundamento sea ambiguo
```

---

## 3.4 Infraestructura conectada

Herramientas como:

```text
GitHub

agentes de código

entornos de desarrollo

sistemas de CI

conectores

servicios externos
```

son mecanismos operativos.

Su disponibilidad:

```text
no modifica
la autoridad metodológica
del proyecto
```

---

# 4. Niveles de operación

Las operaciones se clasifican según su impacto.

---

## Nivel 0 — Lectura e inspección

Incluye:

```text
lectura de archivos

búsqueda de texto

inspección de estructura

git status

git log

git diff

consulta de historial

consulta de referencias

inspección de configuración

análisis estático sin modificación

consulta documental
```

Regla:

> cuando exista acceso directo, estas operaciones podrán ejecutarse autónomamente sin aprobación individual.

El agente deberá agrupar las consultas relacionadas.

---

## Nivel 1 — Validación no destructiva

Incluye, cuando no provoquen efectos persistentes relevantes:

```text
tests

build

lint

type checking

validación de formatos

git diff --check

análisis estático

comprobaciones documentales

verificaciones de consistencia
```

Regla:

> podrán ejecutarse autónomamente cuando formen parte de la validación necesaria de una actuación ya justificada.

El agente deberá comprobar el resultado antes de utilizarlo como fundamento de un paso posterior.

---

## Nivel 2 — Modificación reversible

Incluye:

```text
edición de código

edición documental

creación de tests

creación de archivos

refactorización localizada

cambio de configuración reversible
```

Sólo podrá realizarse cuando exista previamente:

```text
objetivo justificado

alcance determinado

criterio de cierre

cambio suficientemente localizado
```

Antes de consolidar deberán comprobarse:

```text
diff

tests pertinentes

build cuando corresponda

compatibilidad con el alcance

ausencia de cambios colaterales injustificados
```

---

## Nivel 3 — Consolidación

Incluye:

```text
git add

git commit

consolidación documental

adopción formal de una versión
```

La consolidación:

```text
no debe producirse
como efecto colateral
de una modificación
```

Debe existir previamente una versión suficientemente auditada.

Las reglas específicas de consolidación documental continúan regidas por el PCD.

---

## Nivel 4 — Acción externa o de impacto elevado

Incluye:

```text
git push

merge

release

deploy

publicación

migración

acciones destructivas

modificaciones irreversibles

cambios sobre servicios externos

operaciones sobre datos reales
```

Estas acciones requieren control adicional cuando puedan producir consecuencias externas significativas o de difícil reversión.

El grado de autorización necesario dependerá de su impacto.

---

# 5. Trabajo por lotes de evidencia

Las operaciones de Nivel 0 y Nivel 1 relacionadas con una misma cuestión deberán, siempre que sea razonable, ejecutarse como un lote de trabajo o verificación.

En vez de:

```text
consulta 1
→ usuario
→ resultado

consulta 2
→ usuario
→ resultado

consulta 3
→ usuario
→ resultado
```

deberá preferirse:

```text
pregunta de trabajo
↓
conjunto de lecturas
+
búsquedas
+
validaciones
↓
evidencia consolidada
↓
conclusión
```

El tamaño del lote deberá estar limitado por:

```text
coherencia del objetivo

capacidad de verificar resultados

riesgo de ocultar decisiones sustantivas

necesidad de preservar trazabilidad
```

---

# 6. Regla de continuidad interna

Cuando el resultado de una comprobación determine la siguiente operación técnica y no aparezca ninguna decisión sustantiva:

```text
resultado A
↓
permite decidir técnicamente B
↓
ejecutar B
```

No será necesaria una interrupción humana intermedia.

Pero cuando el resultado revele:

```text
cambio de alcance

contradicción conceptual

alternativas con consecuencias distintas

riesgo material

necesidad de una nueva actuación

fundamento insuficiente
```

el agente deberá detener esa línea y devolver la decisión al nivel competente.

---

# 7. Gates humanos

La intervención humana se concentra en cuatro gates principales.

## G0 — Definición

Determina:

```text
objetivo

problema

alcance

restricciones relevantes
```

---

## G1 — Decisión sustantiva

Se activa cuando aparecen:

```text
alternativas materialmente distintas

cambio estratégico

ampliación de alcance

conflicto entre cuerpos

riesgo relevante
```

---

## G2 — Aprobación de cambio relevante

Se utiliza cuando una modificación:

```text
afecta materialmente al producto

modifica compromisos

posee consecuencias externas

introduce riesgo difícilmente reversible
```

---

## G3 — Consolidación o publicación

Se utiliza cuando corresponda antes de:

```text
consolidación formal

push relevante

merge

release

deploy

publicación
```

La existencia de estos gates no implica que toda actuación deba atravesar necesariamente los cuatro.

---

# 8. Regla de acceso insuficiente

Si una información necesaria existe únicamente en un entorno al que el agente no tiene acceso:

```text
evidencia necesaria
+
sin acceso directo
↓
intervención humana mínima necesaria
```

En ese caso deberá solicitarse únicamente:

```text
la operación mínima

o

el resultado mínimo
```

necesario para continuar.

No deberá reconstruirse artificialmente todo el proceso manual cuando pueda obtenerse el resto mediante herramientas disponibles.

---

# 9. Uso de GitHub

Cuando GitHub esté conectado y contenga el estado pertinente del repositorio, podrá utilizarse directamente para:

```text
leer archivos

buscar referencias

consultar estructura

consultar historial

inspeccionar ramas

revisar commits

examinar PR

examinar issues

examinar CI disponible
```

Estas consultas pertenecen ordinariamente a Nivel 0.

La existencia de permisos técnicos de escritura:

```text
no autoriza
su utilización automática
```

Las escrituras remotas deberán respetar los niveles 2–4 y las reglas de consolidación correspondientes.

---

# 10. Repositorio local y agente de código

Cuando una actuación requiera:

```text
working tree no publicado

ejecución de tests locales

build local

modificación de código

inspección del entorno real

pruebas de ejecución

interacción con herramientas instaladas
```

deberá preferirse, cuando esté disponible, un agente con acceso directo al repositorio y al entorno local.

El usuario no deberá actuar como puente manual salvo ausencia de una alternativa disponible.

---

# 11. Relación con la investigación multiagente

La investigación multiagente experimental definida en `AGENTS.md` conserva su estatuto específico.

Por tanto:

```text
autonomía operativa
≠
eliminación del HUMAN GATE
```

cuando una investigación concreta lo exige.

Igualmente:

```text
trabajo por lotes
≠
mezclar las conclusiones
de agentes que deben investigar
de forma independiente
```

Las restricciones específicas de una metodología experimental prevalecen dentro de su alcance.

---

# 12. Trazabilidad mínima

Toda actuación ejecutada con autonomía deberá permitir reconstruir:

```text
qué se comprobó

qué evidencia apareció

qué cambios se realizaron, cuando los hubo

qué validaciones se ejecutaron

qué resultado tuvieron

qué incertidumbre permanece
```

No es necesario reproducir cada operación trivial cuando el conjunto pueda describirse de manera suficiente.

La trazabilidad debe preservar:

```text
decisiones

evidencia

cambios

resultados
```

no el ruido operativo accidental.

---

# 13. Disciplina de modificación

Toda actuación material deberá seguir, como mínimo, esta secuencia:

```text
objetivo justificado
↓
criterio de cierre
↓
inspección suficiente
↓
hipótesis o cambio mínimo
↓
ejecución
↓
validación
↓
revisión del resultado
↓
consolidación cuando proceda
```

La autonomía modifica la eficiencia de la ejecución.

No modifica:

```text
la necesidad de fundamento

la necesidad de evidencia

la obligación de verificar

la responsabilidad del cuerpo competente
```

---

# 14. Principio de intervención humana significativa

El criterio rector del protocolo será:

> la persona debe intervenir cuando sea necesario su juicio, autoridad o autorización, no cuando únicamente sea necesario ejecutar mecánicamente una consulta que el agente puede realizar directamente.

Por tanto:

```text
intervención humana
→ decisión

no:

intervención humana
→ transporte rutinario de información
```

---

# 15. Criterio de evaluación del protocolo

Este protocolo deberá considerarse útil únicamente si consigue simultáneamente:

```text
menos latencia operativa

menos intervención manual rutinaria

igual o mayor trazabilidad

igual o mayor control de cambios

igual o mayor capacidad de auditoría
```

Si la autonomía reduce la capacidad de verificar qué ocurrió, deberá revisarse.

Si un control humano no aporta decisión, evidencia o reducción de riesgo, deberá examinarse si puede eliminarse.

---

# 16. Regla final

El proyecto adopta como modo ordinario:

```text
derivación rigurosa
+
ejecución agéntica autónoma
+
validación verificable
+
gates humanos sólo donde aporten valor
```

y abandona como procedimiento general:

```text
consulta trivial
↓
usuario ejecuta
↓
usuario copia
↓
agente continúa
```

salvo cuando las limitaciones reales de acceso hagan necesario ese mecanismo.
