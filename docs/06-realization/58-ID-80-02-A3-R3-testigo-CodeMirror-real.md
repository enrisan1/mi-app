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
