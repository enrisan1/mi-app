# Auditoría histórica del Design Journal

## 1. Propósito

Este documento conserva la auditoría reconstructiva del corpus histórico de `DESIGN_JOURNAL.md` realizada respecto del Product actualmente consolidado.

Su propósito consiste en determinar si alguna de las ideas, hipótesis o propuestas históricas conserva, tras eliminar la solución concreta mediante la que fue formulada, una posibilidad humana cuya pérdida justifique:

- un nuevo compromiso de Product;
- una modificación de un compromiso existente;
- una nueva vertical de Product;
- o la reapertura de alguna decisión actualmente consolidada.

La auditoría no pretende decidir si las propuestas históricas son útiles, deseables o técnicamente convenientes.

Pretende determinar si detrás de alguna de ellas existe una pérdida humana irreducible que Product deba preservar.

---

## 2. Posición documental

Este documento pertenece a la documentación de justificación del proyecto.

No constituye:

- una especificación de Product;
- una ampliación de `PRODUCT.md`;
- un catálogo de funcionalidades;
- un roadmap;
- una fuente normativa independiente;
- ni una nueva versión de `DESIGN_JOURNAL.md`.

`DESIGN_JOURNAL.md` conserva las ideas, hipótesis y propuestas surgidas durante la evolución del proyecto.

El presente documento conserva la justificación mediante la cual su corpus histórico ha sido reevaluado respecto del Product actualmente consolidado.

La relación documental es:

```text
DESIGN_JOURNAL.md
        ↓
corpus histórico
        ↓
auditoría reconstructiva
        ↓
AUDITORIA_HISTORICA_DEL_DESIGN_JOURNAL.md
        ↓
resultado de cierre
        ↓
estado documental del proyecto
```

---

## 3. Fundamento de la auditoría

El contenido histórico de `DESIGN_JOURNAL.md` no constituye por sí mismo una especificación vigente del producto.

La existencia histórica de una propuesta tampoco demuestra que la posibilidad que pretendía realizar deba ser preservada por Product.

Por tanto, ninguna propuesta histórica puede recuperarse directamente como compromiso.

Debe ser reconstruida desde la situación humana que pudo originarla y sometida nuevamente al procedimiento de justificación vigente.

La auditoría adopta como principio:

> **La existencia histórica de una solución no constituye evidencia suficiente de la necesidad de conservarla.**

Y, de forma complementaria:

> **Una propuesta sólo puede producir un compromiso de Product cuando, después de eliminar su solución histórica, sobreviva una pérdida humana independientemente justificable.**

---

## 4. Objeto de auditoría

La auditoría comprende las familias históricas reconstruidas a partir de `DESIGN_JOURNAL.md` y de las copias históricas recuperadas durante la investigación.

### 4.1. Familias principales

- Participante.
- Transparencia editorial.
- Modelo de publicación.
- Modelo de monetización.

### 4.2. Universo histórico candidato de «Otras ideas»

- `OI-01` — Versionado.
- `OI-02` — Historial.
- `OI-03` — Comparación.
- `OI-04` — Citas.
- `OI-05` — Referencias.
- `OI-06` — Revisión por pares.
- `OI-07` — DOI interno.
- `OI-08` — Licencias.
- `OI-09` — Exportación.
- `OI-10` — Comentarios por párrafo.
- `OI-11` — Colecciones.

El inventario de «Otras ideas» se trata como universo histórico candidato.

Cuando la evidencia histórica disponible no permite determinar con certeza la ubicación exacta de una propuesta dentro de una versión concreta de `DESIGN_JOURNAL.md`, dicha incertidumbre documental no se convierte en evidencia favorable ni desfavorable respecto de su contenido.

La auditoría evalúa la propuesta reconstruida, no su mera clasificación histórica.

---

## 5. Alcance

La auditoría determina para cada familia:

1. qué solución histórica proponía;
2. qué vocabulario heredado debe eliminarse;
3. qué situación humana puede reconstruirse detrás de ella;
4. qué posibilidad humana candidata aparece;
5. qué ocurre al eliminar esa posibilidad;
6. si aparece una pérdida humana independiente;
7. si dicha pérdida puede reducirse a compromisos ya establecidos;
8. si queda algún residuo positivo;
9. y qué consecuencia, si alguna, corresponde a Product.

La auditoría incluye además una revisión transversal destinada a comprobar si residuos surgidos durante las pruebas individuales requieren una investigación propia.

Finalmente se realiza una auditoría global para determinar si el conjunto de propuestas históricas contiene alguna diferencia que no haya sido detectada al examinarlas individualmente.

---

## 6. Fuera de alcance

La auditoría no determina:

- qué funcionalidades convendría implementar;
- qué arquitectura debería realizar Product;
- qué interfaz debería utilizarse;
- qué mecanismos técnicos son preferibles;
- qué propuestas serían comercialmente valiosas;
- qué ideas podrían resultar útiles en el futuro;
- ni qué capacidades deberían formar parte de un roadmap.

Tampoco pretende demostrar que ninguna de las propuestas históricas pueda llegar a estar justificada en el futuro.

El objeto de la auditoría es más limitado:

> determinar si existe **actualmente**, a partir de la evidencia y de los compromisos consolidados, fundamento suficiente para derivar de ellas una obligación nueva de Product.

---

# 7. Método de reevaluación

## 7.1. Eliminación de la solución histórica

Cada propuesta se examina comenzando por eliminar el vocabulario mediante el que históricamente fue concebida.

Por ejemplo:

```text
DOI interno
↓
eliminar:
DOI
identificador
interno
publicación
documento
URL
localización
```

La eliminación pretende impedir que la solución histórica determine anticipadamente la situación que debe encontrarse.

No se pregunta:

> ¿por qué necesita Product esta funcionalidad?

Se pregunta:

> **¿qué situación humana pudo hacer valioso aquello que la propuesta histórica intentaba conseguir?**

---

## 7.2. Reconstrucción de la situación humana

Una vez eliminada la solución, se formula la situación mediante personas, actuaciones, diferencias y relaciones mínimas.

La reconstrucción debe evitar introducir como premisa:

- entidades de la solución histórica;
- vocabulario funcional;
- mecanismos técnicos;
- categorías normativas no justificadas;
- o compromisos que todavía no existen.

La situación reconstruida constituye una hipótesis de trabajo, no un compromiso.

---

## 7.3. Identificación de la posibilidad candidata

A partir de la situación reconstruida se identifica qué posibilidad humana parece desaparecer si se elimina la diferencia examinada.

La mera formulación de una posibilidad no proporciona todavía fundamento para Product.

Debe someterse a eliminación.

---

## 7.4. Prueba de eliminación

La prueba fundamental adopta la forma:

```text
situación S
        ↓
eliminar diferencia d
        ↓
conservar todas las demás
diferencias y relaciones pertinentes
        ↓
¿qué posibilidad humana
necesariamente desaparece?
```

Si ninguna posibilidad independientemente relevante desaparece, `d` no obtiene fundamento propio.

---

## 7.5. Prueba de reducción

Cuando aparece una pérdida candidata `L`, se comprueba si puede explicarse completamente mediante:

- un compromiso ya seleccionado;
- una diferencia ya justificada;
- una relación más general;
- una correspondencia suficientemente precisa;
- o una condición necesaria de otra posibilidad.

Si puede reducirse sin pérdida, no constituye un nuevo compromiso.

---

## 7.6. Prueba de independencia normativa

Una relación descriptiva no produce automáticamente una consecuencia normativa.

En particular:

```text
R(P1, A)
        ↛
P1 determina qué puede hacer P2 respecto de A
```

Cualquier condición sobre las posibilidades de una persona debe obtener fundamento independientemente.

No se derivan derechos, permisos, autoridad, propiedad, control o reciprocidad únicamente de relaciones descriptivas previas.

---

## 7.7. Prueba de pertinencia futura

La posibilidad de que una diferencia resulte útil para alguna actuación futura todavía desconocida no constituye fundamento suficiente para conservarla.

De lo contrario:

```text
posible pertinencia futura
        ↓
obligación de conservación
        ↓
conservar toda diferencia
potencialmente pertinente
```

La incertidumbre acerca de la relevancia futura no constituye evidencia de relevancia presente.

La apertura futura sólo puede generar obligaciones cuando ella misma haya sido independientemente seleccionada como compromiso.

---

## 7.8. Criterio de supervivencia

Una propuesta histórica deja un residuo positivo únicamente cuando:

1. eliminada la solución histórica;
2. reconstruida la situación humana;
3. eliminada la diferencia candidata;
4. conservadas las demás diferencias pertinentes;
5. aparece una pérdida humana concreta;
6. dicha pérdida no puede reducirse a compromisos vigentes;
7. y su relevancia no depende únicamente de la solución histórica o de una posible utilidad futura.

Sólo entonces existe fundamento para estudiar una ampliación de Product.

---

# 8. Auditoría de las familias principales

## 8.1. Participante

### Propuesta histórica

La familia histórica introducía diferencias relacionadas con participantes, roles, autoría e intervenciones.

### Reducción

Se eliminaron progresivamente:

- participante;
- identidad personal;
- autoría;
- roles;
- intervención como categoría especial;
- procedencia;
- historia.

La investigación examinó si una actuación posterior dependía de conservar quién intervino, cómo intervino o qué aportación correspondía a cada intervención.

El candidato más fuerte consistió en preservar determinadas correspondencias históricas para permitir que una persona posterior actuase selectivamente sobre diferencias relevantes.

Posteriormente se comprobó si dichas correspondencias debían conservarse como historia o si bastaba con preservar los elementos, diferencias y relaciones pertinentes.

### Resultado

No sobrevivió ninguna necesidad independiente de representar `Participante`, autoría, roles, procedencia o historia.

Cuando una actuación requiere distinguir una diferencia determinada, la obligación consiste en conservar suficiente discriminación y las relaciones pertinentes, no en introducir una categoría general de participante.

### Clasificación

**Reducida.**

### Residuo positivo

Ninguno.

---

## 8.2. Transparencia editorial

### Propuesta histórica

La familia histórica pretendía preservar determinadas diferencias relativas a aquello que había ocurrido anteriormente respecto de un resultado posteriormente disponible.

### Reconstrucción

El residuo más fuerte consistió en que algo anteriormente disponible pudiera incidir en posibilidades humanas posteriores.

### Reducción

La situación reconstruida coincide con el núcleo ya establecido por `PV-001`: las posibilidades posteriores pueden depender de aquello que fue hecho disponible en situaciones anteriores.

No apareció una diferencia adicional que justificara una nueva vertical ni una ampliación independiente de Product.

### Clasificación

**Absorbida por `PV-001`.**

### Residuo positivo independiente

Ninguno.

---

## 8.3. Modelo de publicación

### Propuesta histórica

La propuesta sustituía un único estado de publicación por varias dimensiones diferenciadas.

### Reducción

Se eliminaron:

- publicación;
- estado;
- privado;
- compartido;
- público;
- dimensiones;
- acceso;
- distribución;
- reutilización.

La investigación preguntó qué situación humana hacía insuficiente tratar varias decisiones como una sola.

Las diferencias inicialmente reconstruidas como:

```text
quién puede actuar
+
qué actuación puede realizar
```

pudieron expresarse mediante una relación general de posibilidades diferenciadas entre persona, actuación y aquello respecto de lo cual se actúa.

La independencia entre dimensiones no obtuvo fundamento propio.

Si Product selecciona determinadas diferencias de posibilidad, una realización debe conservarlas.

Pero de ello no se deriva una estructura universal de estados o dimensiones de publicación.

### Clasificación

**Reducida a una condición general de preservación de diferencias comprometidas.**

### Residuo positivo

Ninguno.

---

## 8.4. Modelo de monetización

### Propuesta histórica

La familia introducía mecanismos mediante los que determinadas posibilidades podían quedar condicionadas a una contraprestación.

### Reducción

Se eliminaron:

- dinero;
- precio;
- venta;
- pago;
- monetización;
- mecanismo económico concreto.

Se investigó primero la reciprocidad y posteriormente la posibilidad general de condicionar una actuación a que otra persona aportara algo.

La reciprocidad pudo reducirse a varias posibilidades condicionadas entre sí.

Posteriormente se comprobó que la mera existencia de una relación previa entre una persona y aquello respecto de lo que otra pretende actuar no justifica por sí misma la imposición de una condición.

Propiedad, consentimiento, sostenimiento, remuneración u otros posibles fundamentos tendrían que justificarse independientemente.

### Clasificación

**Cerrada por ausencia de fundamento independiente.**

### Residuo positivo

Ninguno.

---

# 9. Auditoría de «Otras ideas»

## 9.1. `OI-01 — Versionado`

La propuesta histórica sugería conservar configuraciones anteriores de algo que cambia.

La auditoría eliminó versión, estado anterior, recuperación y mecanismo histórico.

No se identificó una pérdida específicamente debida a no poder recuperar una configuración anteriormente disponible cuando todas las diferencias y relaciones justificadas permanecían conservadas.

La posible utilidad futura de una configuración anterior tampoco constituye fundamento suficiente.

**Resultado:** reducida.

**Residuo positivo:** ninguno.

---

## 9.2. `OI-02 — Historial`

Se investigaron separadamente:

- orden temporal;
- procedencia;
- correspondencia de varias configuraciones con un mismo elemento;
- trayectoria de cambios.

Cuando alguna de estas diferencias resulta necesaria para una actuación, puede expresarse como relación pertinente que debe justificarse por dicha actuación.

No apareció una necesidad independiente de conservar `Historial` como categoría general.

**Resultado:** reducida.

**Residuo positivo:** ninguno.

---

## 9.3. `OI-03 — Comparación`

Se comprobó que una persona puede necesitar determinar diferencias o semejanzas entre `A` y `B`.

Si dichas diferencias pueden derivarse íntegramente de lo ya disponible, la propuesta no justifica por sí misma una nueva capacidad de Product.

La dificultad práctica de obtener una diferencia derivable abrió la investigación transversal `PA-EP-001`.

**Resultado:** reducida.

**Residuo positivo directo:** ninguno.

**Residuo de investigación:** `PA-EP-001`.

---

## 9.4. `OI-04 — Citas`

Se eliminó el vocabulario de cita, bibliografía, documento, autor y formato.

La situación reconstruida preguntó si conservar una relación general entre `A` y `B` era suficiente cuando una actuación dependía de saber respecto de qué diferencia concreta de `A` se relacionaba `B`.

El resultado fue una exigencia de precisión relacional:

```text
referente B
        ↓
correspondencia suficientemente precisa
        ↓
diferencia pertinente de A
```

La precisión necesaria depende de la actuación comprometida.

No se deriva una capacidad general de citas.

**Resultado:** reducida a correspondencias pertinentes.

**Residuo positivo:** ninguno.

---

## 9.5. `OI-05 — Referencias`

La propuesta histórica hacía posible conservar conjuntos de elementos relacionados que pudieran considerarse conjuntamente.

Si todos los elementos, relaciones y diferencias de pertenencia o selección pertinentes permanecen disponibles, no apareció una pérdida independiente derivada de no introducir una unidad colectiva especial.

Cuando una actuación necesita dirigirse a la agrupación como referente, ésta puede tratarse como referente ordinario suficientemente discriminable.

**Resultado:** reducida.

**Residuo positivo:** ninguno.

---

## 9.6. `OI-06 — Revisión por pares`

Se eliminaron:

- pares;
- revisión;
- usuarios;
- documento;
- evaluación;
- calidad.

La situación reconstruida examinó qué valor podía existir en que una persona actuase sobre algo producido o mantenido por otra.

Posteriormente se comprobó si era necesario conservar las actuaciones como intervenciones históricas diferenciadas o si bastaba con preservar las diferencias y relaciones pertinentes resultantes.

No sobrevivió una categoría independiente de revisión.

**Resultado:** reducida.

**Residuo positivo:** ninguno.

---

## 9.7. `OI-07 — DOI interno`

Se eliminaron:

- DOI;
- identificador;
- interno;
- publicación;
- documento;
- URL;
- localización.

La reconstrucción examinó el valor de poder volver a distinguir inequívocamente aquello respecto de lo cual una persona pretende actuar aunque otras características cambien.

Se distinguieron:

- discriminabilidad;
- continuidad de discriminación;
- reutilización persistente de una forma de referencia.

Si todas las actuaciones y relaciones comprometidas pueden preservarse aunque cambie completamente la manera de distinguir un referente, no aparece una pérdida independiente por carecer de identificador persistente.

**Resultado:** reducida.

**Residuo positivo:** ninguno.

---

## 9.8. `OI-08 — Licencias`

La investigación eliminó propiedad, derecho, permiso y prohibición como premisas.

Se preguntó si una posibilidad de `P2` respecto de `A` debía poder depender legítimamente de una diferencia relacionada con `P1`.

Cuando todas las posibilidades legítimas permanecen preservadas, ninguna relación descriptiva previa entre `P1` y `A` permite derivar por sí misma autoridad normativa de `P1` sobre las actuaciones de `P2`.

Cualquier puente normativo necesita justificación independiente.

**Resultado:** cerrada por ausencia de fundamento normativo independiente.

**Residuo positivo:** ninguno.

---

## 9.9. `OI-09 — Exportación`

La propuesta fue reducida desde exportación y traslado hasta la continuidad de una posibilidad humana entre situaciones diferentes.

Si `X` está comprometida para varias situaciones, deben preservarse las condiciones necesarias para realizar `X` en ellas.

Si `X` sólo está comprometida en una situación concreta, la posibilidad de separar, trasladar o reutilizar aquello que la hace posible no constituye automáticamente un compromiso adicional.

**Resultado:** reducida.

**Residuo positivo:** ninguno.

---

## 9.10. `OI-10 — Comentarios por párrafo`

La investigación eliminó comentario, párrafo, granularidad y estructura interna.

Se comprobó que una actuación legítima puede depender de dirigirse a una diferencia discriminable dentro de algo que también puede considerarse como totalidad.

Pero si dicha diferencia ya puede tratarse como referente suficientemente discriminable y relacionado con los demás referentes pertinentes, no queda una pérdida específica que requiera representarla como «parte interna» ni proporcionar una capacidad especial de actuación granular.

**Resultado:** reducida.

**Residuo positivo:** ninguno.

---

## 9.11. `OI-11 — Colecciones`

Se investigó el valor de que una agrupación de elementos pudiera seguir siendo aquello respecto de lo cual una persona actúa aunque cambiaran sus componentes.

La prueba mostró que una agrupación sobre la que debe actuarse puede tratarse como referente ordinario suficientemente discriminable, cuyas relaciones con otros referentes pueden cambiar.

No apareció una posibilidad humana cuya condición irreducible fuera que dicho referente estuviera tipificado como colección o agrupación.

**Resultado:** reducida al aparato general de referentes, relaciones y continuidad pertinente.

**Residuo positivo:** ninguno.

---

# 10. Investigación transversal `PA-EP-001`

## 10.1. Origen

`PA-EP-001` surgió durante `OI-03 — Comparación`.

La pregunta inicial fue:

> ¿Cuándo puede Product afirmar legítimamente que una persona «puede» realizar una actuación: basta su posibilidad formal o deben cumplirse determinadas condiciones mínimas de realizabilidad humana efectiva?

La investigación examinó sucesivamente la relación entre:

- existencia de un resultado;
- alcanzabilidad;
- trayectoria causal;
- participación causal de una persona;
- discriminación de actuaciones;
- control;
- disponibilidad de actuación;
- y atribución de una posibilidad a una persona.

---

## 10.2. Resultados de reducción

La investigación estableció que:

```text
X puede existir
        ≠
P puede realizar X

X puede ser alcanzable
        ≠
P puede realizar X

existe una trayectoria causal hasta X
        ≠
P puede realizar X

P participa causalmente en X
        ≠
P puede realizar X
```

Sin embargo, los intentos de definir completamente la capacidad de actuar mediante ocurrencia, causalidad, bifurcaciones o relaciones entre estados terminaron:

- siendo demasiado débiles;
- o reintroduciendo en otro nivel una noción equivalente a que `P` puede actuar.

---

## 10.3. Límite de alcance

De esta dificultad no se deriva que Product deba introducir una ontología de:

- agencia;
- control;
- voluntad;
- intención;
- conocimiento;
- o disponibilidad.

La pregunta ontológica:

> ¿qué constituye que una actuación esté disponible para una persona?

no necesita ser resuelta por Product para conservar una posibilidad humana independientemente justificada.

---

## 10.4. Selección normativa

La mera existencia de una posibilidad humana tampoco basta para convertirla en compromiso.

La estructura resultante es:

```text
P puede d
        ↓
eliminar d
        ↓
¿aparece una pérdida humana independiente?
        │
        ├── no
        │    → no hay fundamento
        │      para conservar d
        │
        └── sí
             ↓
        falsación de la pérdida
             ↓
        si sobrevive:
        candidato a compromiso
```

Una posibilidad también puede obtener obligación derivada cuando resulte necesaria para satisfacer otro compromiso ya seleccionado.

---

## 10.5. Pertinencia futura

La posibilidad de que `d` resulte necesaria para alguna actuación futura todavía desconocida no proporciona fundamento presente para conservarla.

Aceptar ese criterio obligaría a conservar indiscriminadamente cualquier diferencia potencialmente pertinente.

La apertura futura sólo puede generar obligaciones cuando ella misma constituya un compromiso independientemente justificado.

---

## 10.6. Conclusiones de `PA-EP-001`

### `PA-EP-C1 — Irreductibilidad de la atribución`

Que un resultado pueda existir, ser alcanzable o producirse causalmente mediante una persona no equivale por sí mismo a que esa persona pueda realizar la actuación correspondiente.

### `PA-EP-C2 — Neutralidad ontológica de Product`

Product no necesita proporcionar una teoría constitutiva de la capacidad humana de actuar para preservar una posibilidad independientemente seleccionada.

### `PA-EP-C3 — Selección por pérdida`

La existencia de una posibilidad humana no constituye por sí misma fundamento para conservarla.

Su conservación requiere una pérdida humana independientemente justificable o su necesidad para satisfacer otro compromiso seleccionado.

### `PA-EP-C4 — No conservación por pertinencia futura especulativa`

La posible pertinencia futura todavía desconocida de una diferencia no constituye fundamento presente para conservarla.

### Estado

**Cerrada.**

### Impacto sobre Product

Ningún nuevo compromiso.

---

# 11. Auditoría transversal de residuos

Finalizada la auditoría individual, se revisaron conjuntamente todas las familias para comprobar si algún residuo aparecía repetidamente sin haber sido reconocido como compromiso independiente.

Los principales residuos recurrentes fueron:

- discriminación suficiente;
- precisión de las relaciones;
- correspondencias pertinentes;
- continuidad cuando una actuación la necesita;
- posibilidades diferenciadas de actuación;
- granularidad relativa a la actuación;
- atribución de posibilidades a personas;
- y conservación de condiciones necesarias para compromisos ya seleccionados.

Ninguno de estos residuos produjo por sí mismo una nueva vertical.

En todos los casos su fuerza normativa depende de una posibilidad humana independientemente seleccionada.

La estructura común es:

```text
compromiso C
        ↓
C necesita diferencia d
        ↓
la realización debe preservar d
```

y no:

```text
existe diferencia d
        ↓
Product debe comprometer d
```

---

# 12. Auditoría global de cierre

Se realizó finalmente una revisión del conjunto completo de familias históricas para determinar si alguna conservaba una pérdida humana no detectada durante las auditorías individuales.

El resultado global es:

| Familia                         | Resultado                              | Residuo positivo nuevo |
| ------------------------------- | -------------------------------------- | ---------------------- |
| Participante                    | Reducida                               | No                     |
| Transparencia editorial         | Absorbida en `PV-001`                  | No                     |
| Modelo de publicación           | Reducida                               | No                     |
| Modelo de monetización          | Sin fundamento independiente           | No                     |
| `OI-01` Versionado              | Reducida                               | No                     |
| `OI-02` Historial               | Reducida                               | No                     |
| `OI-03` Comparación             | Reducida                               | No                     |
| `OI-04` Citas                   | Reducida                               | No                     |
| `OI-05` Referencias             | Reducida                               | No                     |
| `OI-06` Revisión por pares      | Reducida                               | No                     |
| `OI-07` DOI interno             | Reducida                               | No                     |
| `OI-08` Licencias               | Sin fundamento normativo independiente | No                     |
| `OI-09` Exportación             | Reducida                               | No                     |
| `OI-10` Comentarios por párrafo | Reducida                               | No                     |
| `OI-11` Colecciones             | Reducida                               | No                     |
| `PA-EP-001`                     | Cerrada transversalmente               | No                     |

No se ha identificado ningún residuo positivo independiente que requiera actualmente ampliar Product.

---

# 13. Resultados transversales

La auditoría permite consolidar como resultados metodológicos los siguientes criterios.

## `RT-DJ-01 — Selección por pérdida`

La existencia de una posibilidad o diferencia no le confiere fuerza normativa.

Debe justificarse una pérdida humana independiente al eliminarla o su necesidad para satisfacer otro compromiso.

## `RT-DJ-02 — Suficiencia discriminativa`

Una realización debe conservar las discriminaciones necesarias para satisfacer los compromisos seleccionados.

No se deriva una obligación universal de maximizar discriminación.

## `RT-DJ-03 — Precisión relacional`

La precisión requerida de una relación depende de las diferencias que una posibilidad comprometida necesite conservar.

## `RT-DJ-04 — Granularidad relativa`

No existe una granularidad universalmente necesaria.

La granularidad requerida depende de aquello respecto de lo cual una actuación comprometida necesita poder discriminar.

## `RT-DJ-05 — Continuidad justificada`

Historia, procedencia, versiones, identificadores persistentes y otras formas de continuidad sólo adquieren obligación cuando una posibilidad independientemente justificada depende de ellas.

## `RT-DJ-06 — Neutralidad de realización`

La selección de una posibilidad humana no prescribe automáticamente el mecanismo mediante el cual deberá realizarse.

## `RT-DJ-07 — No importación normativa`

Una relación descriptiva no genera por sí misma derechos, permisos, autoridad, propiedad, reciprocidad u otras consecuencias normativas.

## `RT-DJ-08 — No justificación por futuro desconocido`

La posible utilidad futura de una diferencia no constituye fundamento presente para conservarla.

---

# 14. Impacto sobre Product

La auditoría histórica no deriva:

- una nueva posibilidad humana independiente;
- un nuevo compromiso de Product;
- una ampliación de la competencia general de Product;
- una modificación de `PV-001`;
- ni una segunda vertical.

La única absorción positiva identificada corresponde a la situación reconstruida detrás de Transparencia editorial, cuyo núcleo queda ya cubierto por `PV-001`.

Los demás resultados constituyen:

- reducciones a compromisos existentes;
- condiciones cuya pertinencia depende de compromisos independientes;
- posibles mecanismos de realización;
- o propuestas sin fundamento normativo actualmente suficiente.

---

# 15. Impacto sobre `PRODUCT.md`

La auditoría no identifica ninguna insuficiencia del `PRODUCT.md` vigente que requiera modificación.

En particular:

```text
PRODUCT.md
        → sin modificación

PV-001
        → sin modificación

PV-002
        → no derivada
```

Los resultados transversales de esta auditoría constituyen criterios de justificación e interpretación.

No deben incorporarse automáticamente a `PRODUCT.md` mientras no aparezca una necesidad documental propia dentro de la responsabilidad de Product.

---

# 16. Estatuto del corpus histórico

Las propuestas auditadas conservan valor histórico.

Su descarte como fuente actual de nuevos compromisos no implica:

- que fueran errores;
- que carezcan de utilidad posible;
- que no puedan convertirse en mecanismos válidos de realización;
- ni que nunca puedan volver a estar justificadas.

Implica únicamente que:

> **su existencia histórica y la evidencia actualmente disponible no proporcionan fundamento suficiente para derivar de ellas un compromiso adicional de Product.**

Por tanto, deben conservarse como registro histórico no normativo.

---

# 17. Condición de reapertura

La auditoría no establece una clausura absoluta del espacio de posibilidades humanas.

El corpus histórico podrá reabrirse cuando aparezca nueva evidencia capaz de mostrar, respecto de alguna propuesta:

1. una situación humana concreta;
2. una posibilidad legítima que desaparece al eliminar una diferencia;
3. una pérdida que no pueda reducirse a compromisos vigentes;
4. y un fundamento positivo independiente de la propia solución histórica.

No constituyen por sí mismos criterios suficientes de reapertura:

- la utilidad técnica de una propuesta;
- su presencia histórica en el proyecto;
- su semejanza con funcionalidades habituales;
- la posibilidad de que resulte útil en el futuro;
- la aparición de una implementación conveniente;
- ni la ausencia de prueba de que nunca vaya a ser necesaria.

La reapertura exige nueva evidencia de pérdida o fundamento positivo independiente.

---

# 18. Resultado final

La reconstrucción sistemática del corpus histórico auditado de `DESIGN_JOURNAL.md` no ha identificado ninguna posibilidad humana irreducible que justifique actualmente un nuevo compromiso de Product.

Las propuestas históricas han podido:

- reducirse a diferencias y relaciones cuya pertinencia depende de compromisos independientemente justificados;
- quedar absorbidas por compromisos ya existentes;
- identificarse como posibles mecanismos de realización;
- o cerrarse por ausencia de fundamento independiente.

La investigación transversal `PA-EP-001` tampoco deriva una nueva vertical.

Por tanto:

```text
búsqueda histórica del Design Journal
        → cerrada respecto del corpus auditado

residuo positivo pendiente
        → ninguno

PV-002
        → no derivada

modificación de PV-001
        → no justificada

modificación de PRODUCT.md
        → no justificada
```

El cierre afecta al corpus histórico auditado y al estado actual de la evidencia.

No implica saturación fenomenológica absoluta del Product.

---

# 19. Estado

**Estado:** cerrada.

La auditoría histórica del corpus reconstruido de `DESIGN_JOURNAL.md` queda completada respecto del Product actualmente consolidado.

Cualquier reapertura requerirá nueva evidencia conforme a los criterios establecidos en este documento.

---
