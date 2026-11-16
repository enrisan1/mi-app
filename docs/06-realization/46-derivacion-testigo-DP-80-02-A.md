# Derivación del testigo mínimo de DP-80-02-A — detección auxiliar verificable

**Fecha:** 16/11/2026  
**Estado:** derivación cerrada; construcción todavía no iniciada.  
**Dependencia:** `DP-80-02-A — Detección auxiliar verificable`.  
**Entradas:** `C-PV-80-02`, `C-PV-80-04`, `PV-005` y reapertura conceptual de `H-80-02`.

---

# 1. Obligación reducida

`DP-80-02-A` no exige todavía demostrar una IA general capaz de comparar
cualquier documento.

La obligación mínima es:

> El sistema puede recibir una detección auxiliar de diferencias entre D1 y D2,
> presentarla de forma separada de la obra y suficientemente verificable para que
> la persona pueda inspeccionar su procedencia, sin que el sistema determine por
> sí mismo qué diferencia es importante ni qué modificación debe realizarse.

Deben distinguirse dos incertidumbres:

```text
U1 — forma del apoyo
¿puede presentarse una detección sin invadir juicio o decisión?

U2 — calidad del detector
¿puede un detector real localizar diferencias con suficiencia?
```

Mezclarlas en un único experimento impediría saber qué ha fallado.

---

# 2. Consecuencia metodológica

El primer testigo debe resolver sólo `U1`.

Por tanto, el detector utilizado por el testigo puede ser un proveedor
controlado de diferencias conocidas.

Eso NO demostrará que una IA real detecte correctamente diferencias.

Sí permitirá demostrar:

- la separación entre detección y juicio;
- la trazabilidad hasta D1/D2;
- la neutralidad respecto de pertinencia;
- la ausencia de modificación automática;
- la preservación de la decisión humana.

Después deberá existir una prueba independiente para `U2` con un detector real.

---

# 3. Unidad mínima de detección

Se define provisionalmente:

`DetectionItem`

con sólo los campos necesarios para verificar procedencia:

```text
id
sourceA
sourceB
```

donde:

- `id` identifica la detección;
- `sourceA` contiene el fragmento observado en D1;
- `sourceB` contiene el fragmento observado en D2.

No se incluye:

- importancia;
- severidad;
- recomendación;
- versión correcta;
- acción sugerida;
- confianza semántica;
- decisión;
- texto de reemplazo.

La ausencia de esos campos es deliberada: pertenecen a etapas posteriores o
introducirían autoridad no derivada.

---

# 4. Condiciones mínimas del testigo

## CT-DP-A-01 — dos fuentes preservadas

D1 y D2 continúan disponibles como fuentes de la detección.

## CT-DP-A-02 — detecciones separadas de la obra

Los resultados auxiliares no modifican ni se convierten automáticamente en
contenido de D1 o D2.

## CT-DP-A-03 — procedencia verificable

Para cada detección, la persona puede inspeccionar qué fragmento procede de D1 y
qué fragmento procede de D2.

## CT-DP-A-04 — neutralidad de pertinencia

El testigo no etiqueta una diferencia como:

- importante;
- irrelevante;
- correcta;
- incorrecta;
- preferida;
- obligatoria.

## CT-DP-A-05 — ausencia de decisión automática

El testigo no selecciona qué versión debe prevalecer ni ejecuta cambios.

## CT-DP-A-06 — pluralidad

Puede presentar más de una detección sin colapsarlas en una conclusión global.

## CT-DP-A-07 — inspección humana

La persona puede recorrer las detecciones individualmente y conservar la
posibilidad de contrastarlas con los fragmentos fuente.

---

# 5. Alternativas de testigo consideradas

## A — llamar ya a un LLM real

Ventaja:

- aproxima directamente el uso futuro.

Problemas:

- mezcla U1 y U2;
- introduce red, modelo, prompt, variabilidad y coste;
- un fallo no permitiría saber si falla el detector o la frontera funcional;
- dificulta tests deterministas;
- aumenta sobreconstrucción.

**Resultado:** no seleccionado como primer testigo.

## B — algoritmo de diff completo

Ventaja:

- detección determinista real.

Problemas:

- prescribe una tecnología que Product no exige;
- abre decisiones sobre granularidad, inserciones, borrados y alineación;
- puede resolver más de lo necesario para demostrar U1.

**Resultado:** no seleccionado como primer testigo.

## C — proveedor controlado de detecciones + superficie auxiliar verificable

Ventajas:

- aísla U1;
- permite tests deterministas;
- demuestra separación entre apoyo y obra;
- demuestra trazabilidad;
- demuestra neutralidad;
- no presupone tecnología del detector;
- es reversible y mínimo.

Limitación:

- no demuestra capacidad real de detección.

**Resultado:** seleccionado.

---

# 6. Testigo seleccionado

`R-80-02-M3 — Testigo de detección auxiliar verificable`.

Entrada:

```text
D1
+
D2
+
detections[]
```

Salida mínima:

```text
obra / fuentes
→ D1 intacto
→ D2 intacto

apoyo auxiliar
→ detección 1
   → fragmento D1
   → fragmento D2
→ detección 2
   → fragmento D1
   → fragmento D2
...
```

La superficie de apoyo debe quedar semánticamente separada de los documentos.

No existe transición automática:

```text
detección
↛ importancia
↛ decisión
↛ modificación
```

---

# 7. Qué significa “verificable”

En este testigo, verificabilidad NO significa demostrar que el detector tiene
razón materialmente.

Significa que una detección no se presenta como una afirmación opaca.

La persona puede reconstruir:

```text
esta detección
↓
afirma diferencia entre
↓
fragmento X de D1
y
fragmento Y de D2
```

La veracidad de que X/Y constituyan una diferencia correctamente detectada
pertenece a U2.

---

# 8. Contrato realizativo mínimo

Una forma mínima suficiente sería:

```ts
type DetectionItem = {
  id: string;
  sourceA: string;
  sourceB: string;
};

type AuxiliaryDetectionExperienceProps = {
  first: string;
  second: string;
  detections: DetectionItem[];
};
```

El nombre del componente y la representación concreta son contingentes.

No se requiere:

- API;
- modelo;
- prompt;
- streaming;
- almacenamiento;
- edición;
- botones de aceptar/rechazar;
- clasificación;
- puntuación;
- explicación generada;
- ni integración en App.

---

# 9. Tests mínimos derivados

## T-80-02-M3-01 — preservación de fuentes

D1 y D2 se muestran o permanecen accesibles íntegros y sin modificación.

## T-80-02-M3-02 — separación auxiliar

Las detecciones aparecen en una región identificable como apoyo auxiliar, no
como contenido de D1/D2.

## T-80-02-M3-03 — trazabilidad de procedencia

Cada detección muestra de forma distinguible `sourceA` y `sourceB`.

## T-80-02-M3-04 — pluralidad

Dos o más detecciones permanecen separadas e inspeccionables individualmente.

## T-80-02-M3-05 — neutralidad de relevancia

La representación no contiene decisión de importancia, preferencia o corrección.

## T-80-02-M3-06 — ausencia de ejecución

Ninguna interacción de inspección modifica D1 ni D2.

---

# 10. Test negativo necesario

`T-80-02-M3-07 — detección no equivale a decisión`.

Dado un conjunto de detecciones, la mera existencia de una diferencia no debe
producir:

- selección automática de D1;
- selección automática de D2;
- texto corregido;
- modificación de las fuentes;
- ni conclusión normativa.

Este test protege la frontera entre F1 y F2/F3.

---

# 11. Gate de suficiencia técnica

`R-80-02-M3` podrá declararse técnicamente suficiente sólo si:

```text
fuentes preservadas
+
apoyo separado
+
procedencia verificable
+
pluralidad
+
neutralidad
+
ausencia de ejecución
```

quedan demostradas conjuntamente.

Eso sólo valida U1.

---

# 12. Gate posterior obligatorio — detector real

Tras validar U1 deberá abrirse una investigación separada:

`ID-80-02-A1 — suficiencia del detector de diferencias`.

Su pregunta será:

> ¿Puede un detector concreto localizar diferencias reales entre dos documentos
> con una calidad suficiente para reducir trabajo mecánico sin introducir
> omisiones o falsas detecciones que destruyan el valor buscado?

Ahí sí deberán compararse, si procede:

- diff determinista;
- LLM;
- enfoque híbrido;
- u otros mecanismos.

No debe asumirse de antemano que “IA” sea superior a un diff clásico para
diferencias textuales literales.

---

# 13. Resultado de la derivación

```text
DP-80-02-A
↓
separar U1 forma / U2 detector
↓
R-80-02-M3
— detección auxiliar verificable
↓
primero tests RED de frontera funcional
↓
después implementación mínima
↓
después ID-80-02-A1 para detector real
```

La siguiente actuación constructiva justificada es crear únicamente los tests
RED de `R-80-02-M3`, sin implementar todavía detector alguno.
