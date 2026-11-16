# Comparación de mecanismos para PC-80-02-05 — copresencia lateral de fuentes extensas

**Fecha:** 16/11/2026  
**Estado:** comparación cerrada; mecanismo mínimo seleccionado, testigo todavía no construido.  
**Propiedad:** `PC-80-02-05 — Copresencia lateral de fuentes extensas`.  
**Entradas:** `TH-80-02-02`, `R-80-02-M2`, `TH-80-02-04`, `R-80-02-M5`.

---

# 1. Problema reducido

La evidencia acumulada establece dos hechos distintos:

```text
TH-80-02-02
→ en textos largos, la disposición secuencial/vertical degrada la comparación

TH-80-02-04
→ el marcado inline elimina la relocalización de cada diferencia
→ pero, cuando los textos crecen, uno encima del otro vuelve a dificultar el contraste
```

La propiedad mínima es:

> mantener ambos documentos extensos simultáneamente disponibles de forma
> contigua para comparar fragmentos correspondientes sin alternancia vertical
> material.

No se investiga todavía:

- edición;
- sincronización semántica;
- diff side-by-side completo;
- minimapas;
- navegación por secciones;
- ni layout general de toda la aplicación.

---

# 2. Criterios de comparación

Se evalúan las alternativas según:

1. copresencia simultánea real;
2. conservación de posición en cada documento;
3. número de interacciones mecánicas;
4. compatibilidad con marcado inline;
5. claridad de correspondencia visual;
6. comportamiento con textos largos;
7. complejidad técnica;
8. riesgo de movimientos inesperados;
9. reversibilidad;
10. riesgo de sobreconstrucción.

---

# 3. Alternativa A — disposición lateral simple

## 3.1. Definición

D1 y D2 se muestran en dos columnas contiguas dentro del mismo flujo de página.

Modelo:

```text
| D1 | D2 |
```

sin imponer todavía contenedores de scroll propios.

## 3.2. Fortalezas

- máxima simplicidad;
- baja complejidad de implementación;
- hace visible la relación espacial D1/D2;
- compatible con marcado inline.

## 3.3. Debilidades

### Posición no independiente

Si ambos textos son largos, el scroll continúa siendo global.

Moverse para consultar una zona de D1 desplaza también la posición visual de D2.

### Dependencia de longitudes

Si los documentos tienen longitudes o densidades muy distintas, los fragmentos
correspondientes pueden dejar de quedar próximos.

## 3.4. Riesgo principal

Resolver la lateralidad aparente pero reintroducir el problema que M2 ya había
reducido: pérdida de posición independiente.

**Resultado:** insuficiente como mecanismo mínimo completo para PC-80-02-05.

---

# 4. Alternativa B — paneles laterales con posición independiente

## 4.1. Definición

D1 y D2 se muestran contiguos, cada uno en su propio panel desplazable.

Modelo:

```text
| panel D1 | panel D2 |
| scroll A | scroll B |
```

Cada panel conserva su propia posición.

## 4.2. Fortalezas

### Combina dos propiedades ya demostradas

Integra:

- lateralidad requerida por PC-80-02-05;
- independencia de posición demostrada útil en M2;
- marcado inline demostrado útil en M5.

### Menor alternancia

No obliga a saltar verticalmente entre documentos.

### Control humano

La persona decide qué panel mover y cuánto.

### Reversibilidad

Es una composición simple de capacidades ya exploradas.

## 4.3. Debilidades

### Espacio horizontal

Reduce el ancho disponible por documento.

### Pantallas estrechas

Puede degradarse en resoluciones pequeñas.

### No alinea automáticamente correspondencias

La persona todavía puede tener que desplazar uno de los paneles para aproximar
fragmentos relacionados.

## 4.4. Riesgo principal

Confundir independencia de scroll con necesidad de sincronización. La ausencia
de sincronización no es todavía un fallo demostrado.

**Resultado:** candidato mínimo preferente.

---

# 5. Alternativa C — paneles laterales con scroll sincronizado

## 5.1. Definición

Mover un panel provoca movimiento coordinado del otro.

Puede sincronizarse por:

- porcentaje;
- línea;
- bloque;
- detección;
- ancla.

## 5.2. Fortalezas

- puede mantener fragmentos paralelos visualmente próximos;
- reduce acciones cuando ambos textos conservan estructura muy parecida;
- resulta familiar en comparadores de versiones.

## 5.3. Debilidades

### Supuesto fuerte de correspondencia

La sincronización por posición sólo funciona bien si ambos textos tienen
estructura y longitud suficientemente paralelas.

### Movimientos inesperados

Mover D1 puede alterar D2 cuando la persona quería conservarlo fijo.

### Complejidad

Exige decidir qué significa “misma posición” entre documentos no idénticos.

### Interacción con inserciones/eliminaciones

Los desalineamientos acumulados pueden degradar la correspondencia.

## 5.4. Riesgo principal

Eliminar precisamente la independencia que M2 demostró valiosa.

**Resultado:** no seleccionado como comportamiento por defecto.

---

# 6. Alternativa D — navegación entre detecciones

## 6.1. Definición

La persona puede avanzar o retroceder por las diferencias detectadas.

Modelo:

```text
anterior ← detección n → siguiente
```

La navegación puede posicionar ambos paneles en los fragmentos correspondientes.

## 6.2. Fortalezas

### Escala a muchos cambios

Reduce búsqueda visual entre documentos largos.

### Aprovecha detecciones existentes

Puede usar los identificadores ya derivados.

### Correspondencia explícita

Puede llevar simultáneamente a ambos lados de una misma detección.

## 6.3. Debilidades

### No sustituye la copresencia

Es una ayuda de recorrido, no la propiedad base.

### Añade estado/interacción

Introduce detección activa, orden y controles.

### Puede ocultar contexto

Un recorrido “siguiente/siguiente” puede inducir revisión demasiado local.

## 6.4. Riesgo principal

Añadir navegación antes de demostrar que los paneles independientes no bastan.

**Resultado:** complemento condicionado.

---

# 7. Alternativa E — sincronización sólo al activar una detección

## 7.1. Definición

Los paneles permanecen independientes por defecto.

Sólo cuando la persona activa una detección, ambos se posicionan en los
fragmentos correspondientes.

Después vuelven a comportarse independientemente.

## 7.2. Fortalezas

- conserva independencia de M2;
- reduce relocalización entre lados;
- evita sincronización continua;
- combina bien con marcado inline y navegación futura.

## 7.3. Debilidades

- introduce detección activa;
- exige posiciones/rangos fiables;
- añade más comportamiento del necesario para probar primero PC-80-02-05.

## 7.4. Riesgo principal

Resolver prematuramente un problema de navegación que todavía no ha demostrado
ser material tras disponer los textos lateralmente.

**Resultado:** alternativa de escalado preferente si aparece fricción residual.

---

# 8. Comparación cualitativa

| Criterio | Lateral simple | Paneles independientes | Sync continuo | Navegación detecciones | Sync al activar |
| --- | --- | --- | --- | --- | --- |
| Copresencia real | Alta | Muy alta | Muy alta | Depende del layout | Muy alta |
| Posición independiente | Baja | Muy alta | Baja | Alta | Muy alta |
| Interacciones mecánicas | Medias | Bajas | Bajas | Bajas | Bajas |
| Compatible con M5 | Alta | Muy alta | Muy alta | Muy alta | Muy alta |
| Robustez ante longitudes distintas | Media | Alta | Baja-media | Alta | Alta |
| Complejidad | Muy baja | Baja-moderada | Alta | Moderada | Moderada-alta |
| Riesgo de movimiento inesperado | Bajo | Muy bajo | Alto | Medio | Bajo |
| Sobreconstrucción inicial | Baja | Baja | Alta | Media | Media |

---

# 9. Contraargumento más fuerte contra paneles independientes

Puede sostenerse que, si los cambios ya están detectados, obligar a desplazar
manualmente cada panel sigue siendo trabajo mecánico y que debería sincronizarse
todo desde el principio.

El argumento es válido sólo si esa fricción aparece materialmente.

La evidencia disponible dice:

- el scroll independiente ya mejoró mucho la comparación larga en M2;
- el problema posterior observado fue orientación estructural, no que la
  independencia fuese incorrecta;
- el marcado inline ahora reduce todavía más la búsqueda.

Por tanto, no existe base suficiente para concluir que la sincronización sea
necesaria antes de contrastar la composición más simple.

---

# 10. Selección

Se selecciona:

`M-80-02-05 — paneles laterales con posición independiente`.

Definición:

> D1 y D2 se presentan contiguos en superficies independientes, cada una con su
> propia posición de desplazamiento, conservando el marcado inline neutral de las
> diferencias.

La selección combina de forma mínima:

```text
M2
→ posición independiente

M5
→ localización inline

PC-80-02-05
→ copresencia lateral
```

sin introducir todavía:

- sincronización automática;
- navegación entre detecciones;
- paneles redimensionables;
- persistencia de posición;
- ni diseño responsive definitivo.

---

# 11. Alternativas conservadas

## ALT-80-02-05-C — sincronización continua

**Estado:** no seleccionada.

Se reconsiderará sólo si una prueba demuestra que la independencia obliga a un
trabajo mecánico material de realineación.

## ALT-80-02-05-D — navegación entre detecciones

**Estado:** complemento condicionado.

Se reconsiderará si el número o dispersión de cambios hace costoso recorrerlos.

## ALT-80-02-05-E — sincronización al activar detección

**Estado:** alternativa de escalado preferente.

Se reconsiderará si aparece la necesidad de llevar ambos paneles a una detección
sin perder independencia posterior.

---

# 12. Testigo realizativo derivado

Se deriva:

`R-80-02-M6 — Testigo de paneles comparativos laterales independientes`.

Entrada mínima:

```text
D1
D2
detections[]
```

Salida mínima:

```text
| D1 marcado | D2 marcado |
| scroll A    | scroll B    |
```

---

# 13. Condiciones mínimas de R-80-02-M6

## CM6-01 — lateralidad

D1 y D2 se presentan en una misma región comparativa contigua.

## CM6-02 — independencia de posición

Mover la posición de D1 no modifica la de D2 y viceversa.

## CM6-03 — marcado inline preservado

Las detecciones continúan situadas en sus fragmentos fuente.

## CM6-04 — integridad

No se modifica el contenido textual de D1/D2.

## CM6-05 — neutralidad

La disposición no atribuye relevancia, corrección ni preferencia.

## CM6-06 — longitud

Cada panel puede contener texto más largo que su altura visible y desplazarse
internamente.

## CM6-07 — ausencia de sincronización automática

No existe acoplamiento de scroll por defecto.

---

# 14. Riesgo técnico

La disposición lateral introduce dependencia del ancho disponible.

Eso no debe resolverse todavía mediante una arquitectura responsive completa.

Para el testigo basta demostrar la propiedad en un viewport de escritorio,
coherente con el entorno donde apareció la necesidad.

La adaptación a pantallas estrechas queda fuera de alcance hasta que exista una
necesidad observada.

---

# 15. Decisión

```text
PC-80-02-05
↓
comparación de mecanismos
↓
M-80-02-05
— paneles laterales con posición independiente
↓
R-80-02-M6
— testigo comparativo lateral independiente

sync continuo
→ no seleccionado

navegación
→ complemento condicionado

sync al activar detección
→ escalado preferente si aparece fricción residual

siguiente actuación
→ derivar únicamente tests RED de R-80-02-M6
```
