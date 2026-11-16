# Evaluación final post-reapertura de H-80-02

**Fecha:** 16/11/2026  
**Estado:** decisión de suficiencia post-reapertura.  
**Horizonte:** `H-80-02 — Comparación humana suficientemente simultánea de dos textos relacionados`.  
**Compromiso Product:** `C-PV-80-02 — Comparación humana de documentos relacionados`.

---

# 1. Pregunta de decisión

Determinar si la evidencia acumulada después de la reapertura estratégica de
`H-80-02` permite declarar el horizonte suficientemente realizado o si
persiste alguna condición constitutiva o dependencia necesaria que obligue a
continuar esta vertical antes de cerrarla.

La decisión no pregunta todavía si:

- CodeMirror debe ser la arquitectura definitiva;
- la experiencia debe integrarse ya en `App.tsx`;
- el historial/undo de producción está diseñado;
- existe un comparador universal;
- ni toda mejora técnicamente posible debe incorporarse.

---

# 2. Criterio constitutivo vigente

La evaluación anterior estableció `CR-80-02` como criterio conjuntivo:

1. D1 y D2 incorporables o seleccionables en una misma actividad;
2. D1 y D2 distinguibles;
3. simultaneidad suficiente sin sustitución repetida;
4. el sistema no decide pertinencia;
5. la persona decide la actuación posterior.

La reapertura estratégica no anuló esas condiciones. Añadió dos dependencias de
dirección realizativa:

- `DP-80-02-A — detección auxiliar verificable`;
- `DP-80-02-B — ejecución determinada y verificable`.

Por tanto, la decisión post-reapertura debe comprobar ambos niveles:

```text
CR-80-02
+
DP-80-02-A
+
DP-80-02-B
```

---

# 3. Reevaluación de CR-80-02

## CR-80-02-01 — D1 y D2 en una misma actividad

**SATISFECHO.**

La experiencia CodeMirror mantiene A y B en una única situación comparativa.

No aparece evidencia posterior que contradiga esta condición.

## CR-80-02-02 — D1 y D2 distinguibles

**SATISFECHO.**

A y B conservan identidad visual y operacional separada.

Las operaciones `A → B` y `B → A` hacen además explícita la dirección de
actuación y no colapsan las dos fuentes.

## CR-80-02-03 — simultaneidad suficiente sin sustitución repetida

**SATISFECHO EN EL ALCANCE OBSERVADO.**

La evidencia post-reapertura es más fuerte que la disponible en la evaluación
anterior:

- paneles laterales;
- alineación/correspondencia;
- diferencias inline;
- navegación coordinada A+B;
- contexto estructural previo;
- reducción considerable de la sensación humana de “no saber dónde estoy”.

`PC-80-02-04`, `PC-80-02-05` y `PC-80-02-06` han quedado materialmente
cubiertos en los testigos ejercidos.

No se demuestra escala arbitraria ni documentos de longitud universal. Esa
generalización no forma parte del compromiso vigente.

## CR-80-02-04 — el sistema no decide pertinencia

**SATISFECHO.**

CodeMirror detecta y representa diferencias, pero no decide:

- qué diferencia importa;
- cuál debe prevalecer;
- si debe modificarse;
- ni cómo debe componerse una tercera formulación.

La persona conserva F2.

## CR-80-02-05 — la persona decide la actuación posterior

**SATISFECHO CON EVIDENCIA REFORZADA.**

Los testigos permiten que la persona decida entre:

- no modificar;
- aplicar A → B;
- aplicar B → A;
- componer parcialmente un resultado propio.

La existencia de controles de ejecución no convierte la detección en decisión
automática.

---

# 4. DP-80-02-A — detección auxiliar verificable

**SATISFECHA EN EL ALCANCE OBSERVADO.**

La REA y R3 demostraron con `@codemirror/merge@6.12.3` real:

- detección presentable;
- rangos A/B verificables;
- asociación de diferencias a chunks;
- marcado inline;
- navegación al fragmento fuente;
- alineación de las posiciones correspondientes.

Los tests automáticos de R3 quedaron:

```text
6/6 GREEN
```

El contraste humano confirmó que la representación permite inspeccionar la
procedencia de la diferencia.

La detección es sistema auxiliar, no juicio de pertinencia.

---

# 5. DP-80-02-B — ejecución determinada y verificable

**SATISFECHA EN EL ALCANCE OBSERVADO.**

R4 y R5 demostraron:

```text
A → B
→ aplica sólo el chunk elegido

B → A
→ aplica sólo el chunk elegido

navegar
→ no modifica

diff
→ se recomputa tras ejecutar

deshacer
→ restaura el estado previo
```

Los tests automáticos alcanzaron:

```text
9/9 GREEN
```

La evidencia humana confirmó ambas direcciones y la reversión.

R5-B mostró además que, cuando la decisión no consiste en sustituir un chunk
completo, la persona puede componer parcialmente el destino sin que el sistema
genere por sí mismo una tercera versión.

---

# 6. Flujo F1…F5 resultante

La realización observada preserva la separación buscada en la reapertura:

```text
F1 — detectar
→ sistema

F2 — juzgar pertinencia
→ persona

F3 — decidir actuación
→ persona

F4 — ejecutar una operación ya determinada
→ sistema tras acción explícita

F5 — validar
→ persona apoyada por diff recomputado y reversión
```

No se ha observado colapso de F1, F2, F3 y F4 en una aceptación automática.

---

# 7. Residuos examinados

## 7.1. Integración en App.tsx

**Residuo real, no constitutivo de H-80-02.**

Los testigos siguen aislados.

Esto impide afirmar que la aplicación final esté completada o que la experiencia
esté integrada en producto, pero no invalida la evidencia realizativa del
horizonte.

Debe resolverse en una actuación de integración/convergencia posterior si el
mecanismo es seleccionado para producto.

## 7.2. Arquitectura definitiva de edición y undo

**Residuo real, no constitutivo.**

El snapshot completo usado por los testigos es suficiente para reversibilidad
experimental, pero no constituye política definitiva de historial/undo.

No hace fallar ninguna condición de `CR-80-02`.

## 7.3. Selección arbitraria + destino libre

**No demostrado necesario.**

R5-B resolvió el caso que motivó la duda mediante edición local en contexto.

`R5-C` no tiene fundamento positivo actual y no debe convertirse en requisito
por posibilidad técnica.

## 7.4. Escala documental arbitraria

**Hipótesis de extensión.**

No existe evidencia de que el alcance comprometido requiera escala libro o
longitud universal.

## 7.5. Navegación nativa de un solo lado

**Mecanismo inferior, no bloqueo.**

La navegación nativa sirvió como mecanismo base, pero la evidencia humana
prefiere la navegación coordinada A+B.

No es una capacidad pendiente.

## 7.6. Intensidad visual configurable

**Mejora condicionada, no bloqueo.**

La preferencia sobre intensidad de marcado depende de persona/contexto y no se
ha demostrado necesaria para practicabilidad.

## 7.7. Historial multioperación, persistencia y conflictos sucesivos

**Pendientes de diseño de producto/arquitectura, no de suficiencia del
horizonte.**

La evidencia actual demuestra la operación mínima y verificable, no una política
completa de edición persistente.

## 7.8. Deuda técnica del repositorio

El `typecheck` global conserva 14 errores preexistentes ajenos al testigo
CodeMirror.

Además, la consolidación de la dependencia requiere que el `package-lock.json`
real generado localmente quede incorporado si finalmente se adopta la
dependencia.

Son cuestiones de consolidación/reproducibilidad, no evidencia negativa sobre
`H-80-02`.

---

# 8. Contraargumento más fuerte

El contraargumento más fuerte es:

> un testigo aislado que todavía no está integrado en la aplicación y que no
> tiene arquitectura definitiva de edición/undo no permite declarar “realizado”
> el horizonte.

La primera mitad es correcta si “realizado” se interpreta como “producto final
integrado”.

Pero ésa no es la regla usada para `H-80-02`.

La regla vigente distingue:

```text
suficiencia realizativa del horizonte
≠
integración final de producto
≠
arquitectura definitiva
```

La evidencia requerida para el horizonte es demostrar que el resultado humano
comprometido es realizable y practicable dentro del alcance justificado.

Esa evidencia existe.

Por tanto, convertir integración, historial completo o universalidad en
condiciones de cierre ampliaría retroactivamente el compromiso.

---

# 9. Decisión

```text
CR-80-02-01
→ SATISFECHO

CR-80-02-02
→ SATISFECHO

CR-80-02-03
→ SATISFECHO EN ALCANCE OBSERVADO

CR-80-02-04
→ SATISFECHO

CR-80-02-05
→ SATISFECHO

DP-80-02-A
→ SATISFECHA EN ALCANCE OBSERVADO

DP-80-02-B
→ SATISFECHA EN ALCANCE OBSERVADO
```

Resultado:

```text
H-80-02
→ SUFICIENTEMENTE REALIZADO POST-REAPERTURA

residuo constitutivo bloqueante
→ NINGUNO ESTABLECIDO
```

No se justifica continuar expandiendo esta vertical para demostrar capacidad
adicional antes de cerrar H-80-02.

---

# 10. Qué queda abierto después del cierre

El cierre de H-80-02 no significa que la aplicación esté terminada.

Quedan abiertas, en la fase que corresponda:

- selección arquitectónica definitiva del mecanismo;
- integración convergente en producto;
- política de edición y undo/redo;
- persistencia;
- historial multioperación;
- tratamiento de conflictos sucesivos;
- consolidación de dependencia y lockfile;
- deuda global de typecheck;
- mejoras condicionadas de presentación.

Estas cuestiones deben justificarse por la siguiente obligación de
convergencia/productización y no mantener artificialmente abierto H-80-02.

---

# 11. Consecuencia

La vertical puede salir del ciclo exploratorio de Realization:

```text
H-80-02
→ cerrar como suficientemente realizado

CodeMirror + adaptadores/testigos
→ evidencia realizativa reusable

siguiente paso
→ volver al mapa global de horizontes y determinar la siguiente obligación
   estratégica, o abrir convergencia/productización sólo si el mapa vigente la
   exige
```
