# ID-80-02-A3-R3 — Testigo aislado real con CodeMirror Merge 6.12.3

**Fecha:** 16/11/2026  
**Estado:** IMPLEMENTADO EN REMOTO; validación técnica y humana pendiente.  
**Dependencia:** `@codemirror/merge@6.12.3` fijada exactamente.  
**Integración en `App.tsx`:** NO.

---

# 1. Objetivo

Comprobar con la biblioteca real si el candidato CodeMirror reproduce en nuestro
proyecto las propiedades observadas durante REA:

1. detección presentable sobre casos problemáticos;
2. rangos verificables;
3. navegación anterior/siguiente real;
4. alineación de documentos con cambios de distinta longitud;
5. capacidad de revelar ambos lados del mismo `Chunk` mediante un adaptador mínimo.

---

# 2. Aislamiento

El testigo se limita a:

- `src/realizations/comparison/CodeMirrorMergeWitness.ts`;
- `src/realizations/comparison/CodeMirrorMergeWitness.test.ts`;
- `src/realizations/comparison/CodeMirrorMergeHuman.harness.ts`;
- `codemirror-merge-human.html`;
- dependencia fijada en `package.json`.

No modifica:

- `App.tsx`;
- realizaciones consolidadas;
- Product;
- Architecture;
- rutas ordinarias del producto.

---

# 3. Pruebas automáticas

Se exige comprobar:

## T-A3-CM-01

`tres → cuatro` aparece como sustitución completa.

## T-A3-CM-02

`todos los lunes → todos los martes` no marca `todos`.

## T-A3-CM-03

Una inserción conserva rango vacío en A.

## T-A3-CM-04

Una sustitución conserva rangos verificables en ambos lados.

## T-A3-CM-05

El adaptador coordinado usa el mismo chunk para revelar A y B.

## T-A3-CM-06

Un índice inexistente no mueve ningún panel.

---

# 4. Harness humano

Página:

```text
/codemirror-merge-human.html
```

Incluye dos familias de control:

## Navegación nativa

```text
Nativo: anterior en A
Nativo: siguiente en A
```

Usa directamente:

```text
goToPreviousChunk
goToNextChunk
```

## Navegación coordinada

```text
Coordinado: anterior A+B
Coordinado: siguiente A+B
```

Usa:

```text
Chunk n
↓
fromA
→ reveal A

fromB
→ reveal B
```

El adaptador no altera la decisión de pertinencia ni ejecuta cambios.

---

# 5. Observables humanos

`O-CM-01` — las diferencias problemáticas se marcan de modo comprensible.  
`O-CM-02` — siguiente/anterior lleva realmente a la diferencia.  
`O-CM-03` — la alineación permite conservar correspondencia entre lados.  
`O-CM-04` — el adaptador A+B mejora frente a navegación de un solo lado.  
`O-CM-05` — desaparece o disminuye materialmente la pérdida de orientación.  
`O-CM-06` — no aparece una fricción nueva mayor que la resuelta.

---

# 6. Falsadores

El candidato debe degradarse si se observa materialmente:

1. omisión de diferencias conocidas;
2. marcado engañoso comparable al detector propio;
3. navegación que no localiza el cambio;
4. alineación que empeora correspondencia;
5. adaptador coordinado que desplaza a rangos distintos del mismo cambio;
6. complejidad de integración desproporcionada;
7. interferencia con autoridad F2/F3.

---

# 7. Validación técnica pendiente

Antes de interpretar el harness deben quedar verdes:

```text
npm install
npm run typecheck
npx vitest run src/realizations/comparison/CodeMirrorMergeWitness.test.ts
```

El `package-lock.json` todavía no ha sido regenerado en remoto porque la
operación requiere resolver el paquete mediante npm en un entorno con acceso al
registro.

No debe fabricarse manualmente.

---

# 8. Estado

```text
R3
→ código preparado

dependencia real
→ declarada en package.json

package-lock
→ pendiente de regeneración local

tests
→ pendientes

harness humano
→ pendiente

selección definitiva CodeMirror
→ NO
```


---

# 9. Validación técnica y mecánica ejecutada

**Fecha:** 16/11/2026

## 9.1. Instalación real

Se instaló y verificó:

```text
@codemirror/merge@6.12.3
```

La comprobación mediante `npm ls @codemirror/merge` confirmó exactamente esa versión.

## 9.2. Typecheck del testigo nuevo

La primera ejecución de `npm run typecheck` reveló dos errores propios del nuevo harness:

1. uso inválido de `collapseUnchanged: false` frente al contrato real de 6.12.3;
2. estrechamiento insuficiente de nullabilidad para el nodo de estado.

Ambos se corrigieron.

La segunda ejecución ya no mostró errores en:

`CodeMirrorMergeHuman.harness.ts`.

Persisten 14 errores preexistentes en cinco archivos de la línea comparativa anterior, no introducidos por este testigo.

## 9.3. Tests automáticos

Se ejecutó:

```text
npx vitest run src/realizations/comparison/CodeMirrorMergeWitness.test.ts
```

Resultado:

```text
Test Files  1 passed (1)
Tests       6 passed (6)
```

Quedan por tanto comprobados en 6.12.3 real:

- `tres → cuatro` como sustitución completa;
- ausencia de marcado espurio de `todos` en `lunes → martes`;
- inserciones con rango vacío correcto;
- sustituciones con rangos verificables A/B;
- revelado coordinado de ambos lados del mismo chunk;
- ausencia de movimiento ante índice inexistente.

---

# 10. Ejecución humana del harness

La página `/codemirror-merge-human.html` cargó correctamente.

Se observaron:

- dos documentos laterales;
- diferencias marcadas directamente;
- seis chunks;
- funcionamiento de los cuatro controles de navegación.

## 10.1. Primer defecto del harness

Con un viewport demasiado alto, casi todos los chunks cabían simultáneamente y la prueba no forzaba navegación real.

Además, al recorrer:

```text
1 → 2 → ... → 6 → 1
```

el retorno `6 → 1` no devolvía inicialmente el viewport al principio.

Esto se atribuyó al adaptador/harness, no al algoritmo de detección.

Se corrigió:

- reduciendo la altura del viewport;
- controlando explícitamente el contenedor vertical compartido de `MergeView`.

## 10.2. Segundo defecto del harness

Tras la corrección anterior, la navegación sí llevaba al chunk correcto, pero mostraba sólo la primera línea modificada y dejaba fuera la referencia estructural inmediata, por ejemplo el título de sección.

Se corrigió dejando dos líneas de contexto anterior cuando existen.

## 10.3. Resultado mecánico final

Tras ambas correcciones, la persona confirma:

```text
la navegación coordinada funciona correctamente
```

Queda observado que:

- los chunks recorren `1 → 6 → 1`;
- el viewport se desplaza realmente al bloque correspondiente;
- ambos lados se posicionan sobre el mismo chunk;
- el retorno `6 → 1` vuelve correctamente al comienzo;
- se conserva contexto estructural anterior suficiente para mostrar el título de sección.

---

# 11. Resultado parcial de R3

```text
dependencia real 6.12.3
→ verificada

tests automáticos
→ GREEN 6/6

navegación coordinada A+B
→ FUNCIONAL

retorno cíclico 6 → 1
→ FUNCIONAL

contexto estructural previo
→ CONSERVADO

alineación visual básica
→ observable y operativa

pero

PC-80-02-06
→ todavía no puede declararse satisfecho sólo con esta validación mecánica
```

La siguiente pregunta ya no es técnica:

> ¿la composición real CodeMirror + navegación coordinada + contexto estructural
> reduce materialmente la pérdida de orientación humana observada en
> `TH-80-02-05` y `TH-80-02-06`?

Ese contraste humano debe hacerse antes de seleccionar definitivamente CodeMirror.


---

# 12. Contraste humano final de orientación y utilidad de controles

**Fecha:** 16/11/2026

La persona confirma:

- `Coordinado: anterior A+B` funciona correctamente;
- `Coordinado: siguiente A+B` funciona correctamente;
- la sensación de “no saber dónde estoy” al avanzar por documentos extensos se
  reduce considerablemente;
- la navegación nativa sobre A parece recorrer cambios, pero sin una indicación
  explícita de qué diferencia corresponde a cada pulsación aporta poca utilidad
  práctica como interfaz final;
- el testigo actual no ofrece todavía una acción visible para aplicar cambios.

## 12.1. Resultado sobre PC-80-02-06

La evidencia humana cambia respecto de M7:

```text
M7
→ ordinal sin localización
→ C — INSUFICIENTE

CodeMirror + navegación coordinada + contexto
→ localiza el cambio real
→ conserva correspondencia A/B
→ reduce considerablemente la desorientación
```

En este alcance, el mecanismo satisface materialmente la necesidad investigada de
orientación comparativa.

Resultado:

```text
PC-80-02-06
→ SUFICIENCIA MATERIAL observada en el alcance del testigo
```

Esto no equivale todavía a selección definitiva de CodeMirror para el producto.

## 12.2. Papel de la navegación nativa

Los controles:

```text
Nativo: anterior en A
Nativo: siguiente en A
```

han cumplido una función diagnóstica:

- demostrar que la biblioteca dispone de navegación real entre chunks;
- verificar el mecanismo base `goToPreviousChunk/goToNextChunk`.

No se justifican por ahora como interfaz final porque:

- sólo actúan sobre un lado;
- no explicitan suficientemente qué cambio está activo;
- son materialmente inferiores al adaptador coordinado A+B para el problema humano observado.

Por tanto:

```text
navegación nativa A
→ mecanismo base útil
→ NO seleccionada como interacción final
```

## 12.3. Aplicación de cambios

La ausencia de controles de cambio no es un fallo de esta validación de orientación.

El testigo R3 se delimitó deliberadamente a:

```text
F1 detectar
+
representar
+
navegar/alinear

sin ejecutar F4
```

La REA previa ya mostró que `@codemirror/merge` dispone de mecanismos de
ejecución por chunk:

- `revertControls` en `MergeView`;
- `acceptChunk`;
- `rejectChunk` en vista unificada.

Pero esos mecanismos no se activaron en R3 para no mezclar:

```text
orientación
≠
decisión
≠
ejecución
```

La observación humana justifica ahora investigar F4 como fase separada.

---

# 13. Resultado consolidado de R3

```text
detección presentable
→ suficiente en los casos ensayados

rangos A/B
→ verificables

navegación coordinada
→ funcional

alineación/correspondencia
→ funcional

contexto estructural
→ conservado

desorientación humana
→ reducida considerablemente

PC-80-02-06
→ SUFICIENCIA MATERIAL en este alcance

navegación nativa A
→ útil como mecanismo base
→ no útil como interfaz final

F4 — aplicación de cambios
→ NO evaluada todavía
→ siguiente incertidumbre separada
```

Se deriva como siguiente actuación candidata:

`ID-80-02-A3-R4 — evaluar ejecución controlada de cambios por chunk con CodeMirror`.

R4 deberá verificar que una persona puede:

1. seleccionar o activar un cambio identificado;
2. decidir explícitamente aplicar/revertir/rechazar la operación correspondiente;
3. ejecutar sólo el chunk elegido;
4. mantener separadas detección, juicio, decisión y ejecución;
5. ver el resultado recomputado inmediatamente;
6. deshacer la operación cuando proceda.

No debe interpretarse la disponibilidad técnica de `revert/accept/reject` como
autorización automática de cambios.
