# Actuación 76 — Reducción KGV de recuperabilidad operativa ante persistencia incompatible

**Estado:** CERRADA EN EL ALCANCE DE CR-KGV-03 — GREEN verificado; GAP-KGV-03 reducido/cerrado para el caso contrastado de estado post-V1 estructuralmente incompatible.

**Fecha:** 14/11/2026.

# 1. Origen

La reevaluación de `KGV-07 — sostenibilidad suficiente` posterior al cierre de `GAP-KGV-01-R2` y `GAP-KGV-02` distinguió una incertidumbre técnica restante procedente de la actuación 62:

- un estado persistido corrupto o estructuralmente incompatible podía impedir el uso normal del producto;
- no existía una vía ordinaria de recuperación;
- la recuperación sólo era posible mediante intervención técnica externa sobre `localStorage`.

La falsación conceptual posterior estableció que `KGV-07` no exige robustez universal ni recuperación perfecta de cualquier dato, pero sí una condición mínima de recuperabilidad operativa cuando una anomalía pertinente de la persistencia puede dejar inutilizable el producto.

# 2. GAP-KGV-03

## GAP-KGV-03 — Recuperabilidad operativa mínima ante fallo pertinente de persistencia

> El producto depende de persistencia local para partes de su recorrido ordinario. Un estado persistido corrupto o incompatible puede impedir que alcance un estado utilizable y no existía una vía ordinaria suficiente para recuperar la operabilidad sin intervención técnica externa.

La pérdida derivada no era:

- ausencia de backend;
- ausencia de copias de seguridad remotas;
- falta de sincronización;
- imposibilidad de recuperar cualquier byte dañado;
- ni obligación de soportar cualquier navegador o política de almacenamiento.

La pérdida era estrictamente:

```text
estado persistido no utilizable
→ bloqueo de trayectoria ordinaria
→ ninguna salida ordinaria de recuperación
```

# 3. CR-KGV-03 — criterio mínimo de cierre

`GAP-KGV-03` se considera cerrado en su alcance sólo si:

1. existe una clase pertinente de fallo del estado persistido capaz de impedir el uso ordinario;
2. el fallo no deja al producto bloqueado sin salida accesible desde la propia experiencia;
3. el producto reconoce suficientemente que el estado persistido no puede utilizarse;
4. existe una actuación ordinaria reconocible para volver a un estado utilizable;
5. la actuación no requiere DevTools, edición manual de `localStorage`, comandos, claves internas, JSON ni conocimiento técnico externo;
6. no exige reconstrucción manual ni reinstalación;
7. el estado independiente utilizable no se elimina silenciosamente sin justificación;
8. si el estado afectado no puede recuperarse, puede descartarse explícitamente mediante decisión reconocible;
9. después de la recuperación el producto vuelve a un estado operativo y permite una actuación válida;
10. no se derivan backend, cuentas, sincronización, backup remoto, migración universal ni tolerancia frente a cualquier corrupción imaginable.

Los discriminantes principales fueron reconocimiento, actuación ordinaria, no destrucción silenciosa, descarte explícito y recuperación efectiva de la operabilidad.

# 4. Tests discriminantes

Se añadieron únicamente:

- **T-KGV-06** — ante una trayectoria post-V1 persistida estructuralmente incompatible, el producto ofrece una vía ordinaria reconocible de recuperación.
- **T-KGV-07** — esa vía devuelve efectivamente a la App ordinaria y permite realizar una actuación válida.

El fixture usa JSON sintácticamente válido pero una estructura de colaboración incompatible: existe `collaboration`, pero no una `firstContribution` utilizable.

# 5. RED inicial

Con producción intacta:

```text
T-KGV-01…05 → PASS
T-KGV-06 → FAIL
T-KGV-07 → FAIL
```

La causa observada fue de producción:

```text
Retomar trayectoria integrada existente
→ lectura de collaboration.firstContribution.participant
→ TypeError
→ trayectoria bloqueada
```

No fue un fallo de selector ni del fixture.

Commit de tests RED:

```text
a4cbc273a417710e373403f42434cbe68ca6539a
test(kgv): add red persistence recovery tests
```

# 6. GREEN incremental

## 6.1 T-KGV-06

Se modificó únicamente `PostV1IntegratedExperience.tsx` para detectar una colaboración persistida incompatible antes de acceder a `firstContribution`.

La experiencia pasó a mostrar:

```text
La trayectoria integrada guardada contiene un estado incompatible.

[Descartar estado incompatible]
```

sin realizar todavía el descarte efectivo.

Resultado:

```text
T-KGV-01…06 → PASS
T-KGV-07 → FAIL
```

`T-KGV-07` falló después de pulsar la actuación porque la recuperación efectiva todavía no se había aplicado.

Commit:

```text
38fbdd566406ea3240db06dd8282e897e0179be4
feat(kgv): expose recovery action for incompatible persisted state
```

## 6.2 T-KGV-07

La recuperación efectiva se mantuvo localizada:

- `PostV1IntegratedExperience` elimina únicamente `post-v1-integrated.state`;
- notifica a `App`;
- `App` abandona la trayectoria incompatible y vuelve al recorrido ordinario.

No se utiliza `localStorage.clear()`.

Commits:

```text
0e5f0d29649e95e9b0fdda3ed5b1866d25838660
feat(kgv): return to ordinary app after incompatible post-v1 discard

37070a64510537d98b28f9362bbc25a878e27370
feat(kgv): discard only incompatible post-v1 persistence
```

Resultado KGV:

```text
T-KGV-01…07 → 7/7 PASS
```

# 7. Verificación de regresión

Se ejecutó un gate separado sobre el estado GREEN:

```text
PostV1IntegratedExperience.test.tsx
→ 14/14 PASS

App.test.tsx
→ 28/28 PASS

npm run typecheck
→ PASS

suite completa canónica
→ 39 archivos PASS
→ 350/350 tests PASS
```

La suite incluye:

```text
App.kgv.test.tsx
→ 7/7 PASS
```

No se detectaron regresiones históricas.

# 8. Aislamiento de persistencias independientes

Se realizó además una prueba efímera específica, no conservada en la rama canónica, sembrando simultáneamente:

```text
ordinary.materials
ru2m1.previous
ru2m1.retained
post-v1-integrated.state ← incompatible
```

Después de:

```text
Retomar trayectoria integrada existente
→ Descartar estado incompatible
```

se comprobó:

```text
post-v1-integrated.state
→ eliminado

ordinary.materials
→ idéntico al valor anterior

ru2m1.previous
→ idéntico al valor anterior

ru2m1.retained
→ idéntico al valor anterior
```

La primera versión del test efímero exigía erróneamente que reapareciera el estado vacío de App. Falló porque `ru2m1.previous` se había conservado correctamente y, por tanto, App volvió legítimamente en modo de reanudación. La expectativa se corrigió para comprobar únicamente el retorno a App ordinaria.

Repetición final:

```text
prueba específica de aislamiento → PASS
suite con prueba adicional
→ 40 archivos PASS
→ 351/351 tests PASS
```

El test y workflow temporales fueron retirados después. En la rama canónica permanece únicamente `.github/workflows/deploy.yml`.

# 9. Cierre de CR-KGV-03

La cadena demostrada es:

```text
estado post-V1 persistido estructuralmente incompatible
→ App permite intentar reanudación
→ incompatibilidad reconocida antes del crash
→ actuación ordinaria "Descartar estado incompatible"
→ usuario decide descartar
→ se elimina sólo post-v1-integrated.state
→ App ordinaria vuelve a estar operativa
→ persistencias independientes permanecen intactas
→ actuación ordinaria posterior posible
```

Por tanto:

```text
CR-KGV-03
→ SATISFECHO EN EL ALCANCE CONTRASTADO

GAP-KGV-03
→ REDUCIDO / CERRADO
  para incompatibilidad estructural post-V1 demostrada
```

# 10. Límites y no derivaciones

La actuación no demuestra ni exige:

- recuperación perfecta de cualquier dato corrupto;
- recuperación automática de cualquier versión histórica;
- migraciones universales;
- tolerancia frente a cualquier corrupción externa;
- disponibilidad de `localStorage` en todo entorno;
- manejo completo de `SecurityError`;
- manejo completo de cuota o fallos de escritura;
- backend;
- cuentas;
- autenticación;
- sincronización;
- copias de seguridad remotas;
- persistencia multiusuario;
- robustez universal;
- SLA;
- madurez empresarial.

Los hallazgos de actuación 62 sobre almacenamiento denegado y cuota/escritura permanecen conceptualmente separados. Esta actuación no los declara corregidos ni los convierte automáticamente en nuevas obligaciones.

# 11. Consecuencia para KGV-07

Después de cerrar `GAP-KGV-03`, la sostenibilidad ya no queda abierta por incompatibilidad estructural de `post-v1-integrated.state` dentro del caso contrastado.

La única cuestión técnica potencialmente material restante procedente de 62 es si la **indisponibilidad completa de `localStorage`**, reproducida mediante `SecurityError`, constituye una obligación independiente necesaria para `KGV-07` o un requisito de entorno legítimamente excluible.

El manejo de cuota/escritura permanece como carencia no demostrada materialmente y no se eleva por esta actuación a gap independiente.

El cierre de esta actuación no decide todavía `KGV-07`; deja preparada su reevaluación separada.
