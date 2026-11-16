# Comparación de mecanismos para PC-80-02-06 — referencia de posición comparativa

**Fecha:** 16/11/2026  
**Estado:** comparación cerrada; mecanismo mínimo seleccionado, testigo todavía no construido.  
**Propiedad:** `PC-80-02-06 — Referencia de posición comparativa durante el recorrido`.  
**Entrada empírica:** `TH-80-02-05 → B — MEJORA PARCIAL`.

---

# 1. Problema reducido

La composición `M5 + M6` resolvió:

- localización inmediata de diferencias;
- copresencia lateral;
- posición independiente de ambos documentos.

La fricción residual aparece en una fase avanzada:

```text
muchos desplazamientos acumulados
↓
se mantiene el contenido visible
pero
↓
se pierde referencia global de dónde se está
↓
cuesta recuperar el siguiente punto de comparación
```

La propiedad mínima es:

> conservar una referencia suficiente de posición y poder continuar el recorrido
> comparativo sin perder orientación global.

No se busca todavía:

- automatizar el juicio;
- sincronizar permanentemente los paneles;
- imponer una navegación única;
- ni introducir un mapa estructural completo.

---

# 2. Criterios de comparación

Se evalúan las alternativas según:

1. recuperación de orientación global;
2. facilidad para continuar al siguiente cambio;
3. conservación de independencia de paneles;
4. número de interacciones adicionales;
5. compatibilidad con M5 + M6;
6. robustez ante longitudes y estructuras distintas;
7. carga visual;
8. complejidad técnica;
9. riesgo de movimientos inesperados;
10. sobreconstrucción.

---

# 3. Alternativa A — navegación entre detecciones

## 3.1. Definición

Se introduce un estado discreto de detección activa y controles:

```text
anterior ← detección n de N → siguiente
```

Al avanzar, la interfaz lleva la atención a la siguiente diferencia.

## 3.2. Fortalezas

### Progreso explícito

La persona sabe:

- qué diferencia está revisando;
- cuántas ha recorrido;
- cuántas quedan.

### Continuidad

Reduce la búsqueda manual del siguiente cambio.

### Compatibilidad

Encaja directamente con detecciones ya identificadas.

## 3.3. Debilidades

### Foco local

Puede favorecer una revisión demasiado secuencial y hacer perder contexto amplio.

### Estado nuevo

Introduce:

- detección activa;
- orden;
- controles;
- transición anterior/siguiente.

### No garantiza alineación por sí sola

Si sólo cambia el foco visual pero no posiciona ambos paneles, puede no resolver
por completo la pérdida observada.

## 3.4. Riesgo principal

Resolver “qué número de cambio llevo” sin resolver necesariamente “dónde están
sus fragmentos correspondientes”.

---

# 4. Alternativa B — sincronización al activar una detección

## 4.1. Definición

Los paneles permanecen independientes por defecto.

Cuando la persona activa una detección:

```text
detección n
↓
D1 se posiciona en sourceA
D2 se posiciona en sourceB
↓
después ambos paneles siguen independientes
```

## 4.2. Fortalezas

### Recuperación directa de correspondencia

Ataca exactamente el momento en que la persona ha perdido referencia.

### Conserva M2/M6

No existe acoplamiento permanente.

### Movimiento explícito

El desplazamiento ocurre sólo por una acción deliberada de la persona.

## 4.3. Debilidades

### Requiere posiciones fiables

Con el contrato actual `id/sourceA/sourceB`, localizar por texto puede ser ambiguo
si un fragmento se repite.

### No aporta progreso global por sí sola

Ayuda a “volver al cambio”, pero no necesariamente indica cuánto falta.

### Más comportamiento

Introduce activación y posicionamiento programático.

## 4.4. Riesgo principal

Obligar a ampliar demasiado pronto el contrato de detección con offsets/rangos.

---

# 5. Alternativa C — referencia estructural de posición

## 5.1. Definición

Se muestra una referencia estable de posición, por ejemplo:

- sección actual;
- detección actual / total;
- barra discreta de progreso;
- ancla nominal;
- indicador de tramo.

No mueve automáticamente los paneles.

## 5.2. Fortalezas

### Ataca directamente la desorientación

La persona mantiene una referencia global aunque haya desplazado mucho los paneles.

### Baja intrusión

Puede añadirse sin alterar el comportamiento del scroll.

### Conserva independencia

No introduce acoplamiento entre D1 y D2.

### Bajo riesgo técnico

Puede implementarse inicialmente con información ya disponible.

## 5.3. Debilidades

### No elimina toda navegación manual

Saber “dónde estoy” no lleva automáticamente al siguiente cambio.

### Puede ser insuficiente si la dispersión es grande

La persona puede conservar orientación y aun así necesitar varios desplazamientos.

## 5.4. Riesgo principal

Añadir un indicador informativo que mejore orientación pero no reduzca suficiente
trabajo mecánico.

---

# 6. Comparación cualitativa

| Criterio | Navegación detecciones | Sync al activar | Referencia estructural |
| --- | --- | --- | --- |
| Orientación global | Alta | Media | Muy alta |
| Ir al siguiente cambio | Muy alta | Alta | Media |
| Conserva independencia | Alta | Muy alta | Muy alta |
| Movimientos inesperados | Bajo | Bajo | Nulo |
| Requiere offsets/rangos | No necesariamente | Sí, preferible | No |
| Carga visual | Baja | Baja | Baja |
| Complejidad | Moderada | Moderada-alta | Baja |
| Robustez textos distintos | Alta | Alta si hay rangos | Muy alta |
| Sobreconstrucción inicial | Media | Media-alta | Muy baja |
| Valor como primer testigo | Alto | Medio | Muy alto |

---

# 7. Contraargumento más fuerte contra la referencia estructural

Puede sostenerse que un simple indicador de posición no elimina la necesidad de
moverse al siguiente cambio y, por tanto, no resuelve el trabajo mecánico.

Es correcto.

Pero la evidencia observada no fue primero “no encuentro el siguiente cambio”,
sino:

> pierdo el sentido de dónde estoy porque me faltan referencias.

Por tanto, antes de introducir movimiento automático conviene comprobar si una
referencia discreta basta para restaurar orientación.

---

# 8. Contraargumento más fuerte a favor de sincronización al activar

Es la alternativa más potente para recuperar correspondencia exacta.

Sin embargo, introduce una dependencia técnica nueva: posiciones/rangos
confiables por detección.

Ese problema todavía no ha sido demostrado como necesario para resolver la
fricción actual y podría forzar prematuramente una ampliación del contrato.

Por tanto, se conserva como escalado preferente si la referencia estructural
resulta insuficiente.

---

# 9. Selección

Se selecciona:

`M-80-02-06 — referencia discreta de progreso comparativo`.

Definición:

> La interfaz mantiene visible una referencia simple y no semántica de la posición
> de la persona dentro del recorrido de diferencias, de modo que pueda conservar
> orientación global sin alterar automáticamente la posición de los paneles.

Forma mínima propuesta:

```text
Diferencia 3 de 11
```

o equivalente funcional.

No se prescribe todavía:

- barra gráfica;
- porcentaje;
- minimapa;
- nombre de sección;
- ni estilo visual concreto.

---

# 10. Alternativas conservadas

## ALT-80-02-06-A — navegación anterior/siguiente

**Estado:** complemento condicionado.

Se reconsiderará si la referencia de progreso no basta para continuar el recorrido
con fluidez.

## ALT-80-02-06-B — sincronización al activar una detección

**Estado:** escalado preferente.

Se reconsiderará si la persona conserva orientación pero sigue necesitando buscar
manualmente los fragmentos correspondientes.

---

# 11. Testigo realizativo derivado

Se deriva:

`R-80-02-M7 — Testigo de referencia discreta de progreso`.

Entrada mínima:

```text
detections[]
activeDetectionId
```

Salida mínima:

```text
posición actual / total
```

Ejemplo:

```text
Diferencia 3 de 11
```

---

# 12. Condiciones mínimas de R-80-02-M7

## CM7-01 — posición actual

La interfaz identifica qué detección está activa.

## CM7-02 — total

La interfaz muestra cuántas detecciones existen.

## CM7-03 — neutralidad

No atribuye importancia ni prioridad.

## CM7-04 — estabilidad

La referencia no mueve automáticamente ninguno de los paneles.

## CM7-05 — correspondencia

La posición mostrada corresponde realmente al identificador activo.

## CM7-06 — límites

Primera y última detección se representan correctamente.

## CM7-07 — ausencia

Si no hay detecciones, no se inventa progreso.

---

# 13. Riesgo metodológico

Un ordinal como “3 de 11” puede mejorar orientación sin mejorar navegación.

Eso no debe ocultarse.

El objetivo del primer testigo es falsar si la pérdida observada necesita realmente
algo más que una referencia global.

Si el contraste humano sigue mostrando necesidad de movimiento guiado, entonces
se justificará abrir navegación o sync al activar.

---

# 14. Decisión

```text
PC-80-02-06
↓
comparación de mecanismos
↓
M-80-02-06
— referencia discreta de progreso comparativo
↓
R-80-02-M7
— testigo de referencia discreta de progreso

navegación anterior/siguiente
→ complemento condicionado

sync al activar detección
→ escalado preferente si M7 resulta insuficiente

siguiente actuación
→ derivar únicamente tests RED de R-80-02-M7
```
