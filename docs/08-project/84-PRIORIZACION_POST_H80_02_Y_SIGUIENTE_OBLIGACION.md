# Priorización post-H-80-02 y derivación de la siguiente obligación

**Fecha:** 16/11/2026  
**Estado:** PRIORIDAD ACEPTADA; OB-80-NEXT-01 posteriormente realizada y cerrada.

---

# 1. Punto de partida

Tras la evaluación final post-reapertura:

```text
H-80-02
→ SUFICIENTEMENTE REALIZADO

residuo constitutivo bloqueante
→ NINGUNO ESTABLECIDO
```

La siguiente actuación no debe continuar por inercia técnica la vertical de
comparación.

Quedan tres compromisos Product post-KGV no realizados en este ciclo:

- `C-PV-80-01 — Captura inmediata de aportaciones emergentes`;
- `C-PV-80-03 — Identidad autoral elegible`;
- `C-PV-80-04 — Apoyo auxiliar de IA separado de la obra`.

La actuación 83 no estableció prioridad entre ellos.

---

# 2. Regla de priorización

No se usa puntuación artificial.

Se comparan cualitativamente:

- contribución humana y frecuencia;
- evidencia disponible y prueba pendiente;
- independencia frente a compromisos ya satisfechos;
- coste y complejidad del primer contraste;
- reversibilidad;
- riesgo de sobreconstrucción;
- valor de aprendizaje de la siguiente actuación.

La prioridad no equivale a importancia absoluta del compromiso.

---

# 3. C-PV-80-01 — captura inmediata

## Valor

La diferencia humana es directa:

```text
aparece una idea durante actividad intelectual
↓
recorrido ordinario exige cambiar de contexto
↓
fricción + posible pérdida + coste de reconstrucción

frente a

captura breve y fiable
↓
continuidad de la actividad
```

La actuación 82 la caracterizó como diferencia cotidiana simple y la 83 como
valor local pero potencialmente frecuente.

## Estado de evidencia

Existe fundamento humano explícito, pero no una observación formal específica.

Ésa es precisamente una incertidumbre barata de resolver.

## Alcance mínimo

Ya está delimitado por Product:

```text
aportación breve
+
acción de captura de baja fricción
+
conservación fiable
+
referencia temporal suficiente
+
recuperación posterior
```

No exige todavía clasificación, IA, inbox universal, multimodalidad ni interfaz
concreta.

## Riesgo

Principal riesgo: convertir captura en acumulación no gestionada.

Ese riesgo no es constitutivo de la primera prueba; sólo debe abrirse si aparece
materialmente.

## Primera actuación discriminante

Comparar:

```text
recorrido ordinario actual
vs
captura mínima contextual
```

y observar:

- número/calidad de cambios de contexto;
- posibilidad de conservar la aportación;
- capacidad de reanudar inmediatamente la actividad;
- recuperabilidad posterior;
- fricción nueva introducida.

La prueba es pequeña, reversible y de alto valor informativo.

---

# 4. C-PV-80-03 — identidad autoral elegible

## Valor

La diferencia semántica es muy clara:

```text
identidad operativa
≠
identidad autoral
```

y el primer alcance también es finito:

```text
1 identidad operativa
+
0..N identidades autorales
+
selección explícita por obra/publicación
```

## Estado de evidencia

La necesidad ha sido formulada explícitamente, pero no existe un caso ejercido
documentado donde la ausencia de alias persistente produzca una pérdida material.

La aparición histórica de una frase sobre alias en una realización anterior
constituye contenido producido en aquella observación, no evidencia de uso de un
sistema de identidad autoral.

## Consecuencia

Es una candidata fuerte, pero antes de convertirla en la siguiente vertical
conviene un caso humano mínimo que discrimine entre:

```text
alias persistente reutilizable
vs
simple campo de firma libre por obra
```

Ese contraste sigue pendiente.

---

# 5. C-PV-80-04 — apoyo auxiliar de IA separado de la obra

## Valor

Posee valor estratégico potencialmente amplio:

```text
apoyo IA disponible
+
separación funcional respecto de la obra
```

## Estado de evidencia

Tiene antecedentes parciales sobre atribución y determinación humana, pero no un
ejercicio específico de la situación Product seleccionada.

La reapertura de H-80-02 utilizó C-PV-80-04 para separar conceptualmente apoyo,
juicio y obra, pero el mecanismo finalmente probado para detección textual fue
`@codemirror/merge`, un comparador determinista.

Por tanto:

```text
H-80-02
→ NO satisface por sí mismo C-PV-80-04
```

## Riesgo

Es el compromiso con mayor riesgo de expansión hacia:

- generación;
- procedencia;
- agentes;
- autonomía;
- múltiples IA;
- edición automática.

Además mantiene la mayor reserva de absorción parcial por PV-005/PV-006.

## Consecuencia

No existe fundamento para priorizarlo sólo porque el trabajo reciente haya
tratado mecanismos auxiliares.

Necesita una reducción específica y un caso real de creación asistida.

---

# 6. Comparación cualitativa post-H-80-02

| Dimensión | C-PV-80-01 | C-PV-80-03 | C-PV-80-04 |
| --- | --- | --- | --- |
| frecuencia humana esperable | alta/cotidiana | contextual | potencialmente alta si IA es habitual |
| claridad de diferencia | alta | muy alta | alta tras reducción |
| evidencia ejercida específica | pendiente | pendiente | pendiente |
| alcance mínimo | especialmente limpio | limpio | limpio pero conceptualmente más acoplado |
| riesgo de absorción | bajo | bajo | medio |
| riesgo de inflación | bajo-medio | medio | alto |
| prueba mínima reversible | muy directa | requiere discriminar alias vs firma libre | requiere situación IA real |
| valor de aprendizaje inmediato | alto | alto | alto, pero más costoso de aislar |

No se deriva una jerarquía universal.

Sí se deriva una mejor **siguiente actuación**.

---

# 7. Contraargumentos

## “Identidad autoral puede ser técnicamente más sencilla”

Puede ser cierto, pero la prioridad estratégica no se decide por facilidad de
implementación aislada.

C-PV-80-03 todavía tiene una incertidumbre humana previa:

> ¿hace falta una identidad autoral persistente reutilizable o basta una firma
> libre por obra?

Construir primero el modelo persistente podría sobreconstruir.

## “Apoyo IA está más alineado con la evolución futura”

También puede ser cierto estratégicamente.

Pero su mayor acoplamiento y riesgo de expansión hacen que una Realization
prematura tenga más probabilidad de mezclar capacidades distintas.

## “Captura puede producir un inbox problemático”

Es un riesgo real, pero Product excluye por ahora organización posterior.

Sólo debe convertirse en dependencia si la prueba mínima demuestra que la
captura suficiente genera una pérdida independiente por acumulación.

---

# 8. Derivación

La mejor siguiente obligación no es todavía “implementar captura”.

Es resolver la incertidumbre mínima necesaria de C-PV-80-01:

```text
C-PV-80-01
↓
¿puede una aportación breve conservarse
con interrupción suficientemente reducida,
seguir siendo recuperable
y permitir reanudar la actividad?
↓
contraste mínimo recorrido ordinario
vs captura contextual
```

Por tanto, se propone:

**OB-80-NEXT-01 — demostrar la realizabilidad y suficiencia mínima de la captura contextual inmediata de una aportación breve durante una actividad intelectual.**

---

# 9. Primera actuación derivada

`R-80-01-M1 — testigo mínimo de captura contextual`.

Debe demostrar, sin presuponer arquitectura:

1. existe una actividad intelectual en curso;
2. emerge una aportación breve;
3. la persona puede capturarla sin abandonar materialmente la actividad;
4. la captura se conserva de forma fiable;
5. queda referencia temporal suficiente;
6. puede recuperarse posteriormente;
7. tras capturar, la persona puede continuar la actividad;
8. la captura no se incorpora automáticamente a la obra ni se clasifica.

La realización debe compararse contra un baseline ordinario que obligue a
cambiar de contexto.

---

# 10. Decisión propuesta

```text
siguiente compromiso a trabajar
→ C-PV-80-01

siguiente obligación
→ OB-80-NEXT-01

primera actuación
→ R-80-01-M1

C-PV-80-03
→ permanece vigente
→ siguiente candidata fuerte

C-PV-80-04
→ permanece vigente
→ requiere reducción/caso IA específico
```

Esta propuesta debe aceptarse antes de abrir la realización.


---

# 11. HUMAN GATE

**Fecha:** 16/11/2026

La persona responsable acepta explícitamente:

```text
OB-80-NEXT-01
→ ACEPTADA como siguiente obligación

R-80-01-M1
→ AUTORIZADA su apertura
```

Esto autoriza:

- tratar `C-PV-80-01` como siguiente vertical activa;
- abrir el testigo mínimo de captura contextual;
- derivar criterios y pruebas para esa actuación.

No autoriza todavía:

- integración en `App.tsx`;
- arquitectura definitiva;
- inbox universal;
- clasificación;
- IA;
- captura multimodal;
- modificación automática de contenido;
- consolidación de Product más allá de `C-PV-80-01`.

## Resultado

```text
siguiente compromiso activo
→ C-PV-80-01

siguiente obligación
→ OB-80-NEXT-01 — ACEPTADA

primera actuación
→ R-80-01-M1 — ABIERTA
```
