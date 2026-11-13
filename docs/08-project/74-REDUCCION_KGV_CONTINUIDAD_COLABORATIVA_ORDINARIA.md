# Actuación 74 — Reducción KGV de la continuidad colaborativa ordinaria

**Estado:** CERRADA EN EL ALCANCE DE CR-KGV-01 — GREEN verificado; GAP-KGV-01-R2 reducido/cerrado en el caso contrastado.

**Fecha:** 13/11/2026.

# 1. Origen

La auditoría KGV distinguió entre capacidad realizativa demostrada y capacidad ordinariamente accesible.

La continuidad colaborativa entre dos personas e instancias reales ya fue demostrada en Q05 mediante:

```text
MIN-CC-01
=
sharedResult
+
firstContribution.participant
+
firstContribution.content
```

y una mediación explícita `X-CC-01`.

La comprobación humana posterior sobre el recorrido ordinario de `App` mostró que, al recibir el mismo contenido intelectual como texto libre, el segundo participante:

- reconoció que el texto había quedado guardado;
- no reconoció suficientemente la estructura «resultado compartido + aportación de A»;
- no identificó una actuación posterior disponible;
- expresó que no parecía posible hacer nada más.

La pérdida no se atribuye a transporte, persistencia, backend, cuentas o sincronización: el contenido llegó y permaneció visible.

# 2. GAP reducido

## GAP-KGV-01-R2 — Suficiencia de la mediación ordinaria para continuidad colaborativa

> El recorrido ordinario conserva materialmente el contenido recibido, pero no hace suficientemente reconocibles el resultado compartido, la aportación antecedente y la actuación disponible para continuar el mismo trabajo.

No se deriva importar `CollaborationExperience` completa ni introducir infraestructura multiusuario.

# 3. Hipótesis mínima de corrección

`H-KGV-C1`:

> Si `App` puede recibir explícitamente el antecedente mínimo ya demostrado por Q05, presentar separadamente el resultado compartido y la aportación antecedente, y orientar una aportación posterior desde ese contexto, la pérdida observada puede corregirse sin backend, cuentas, sincronización ni transporte automático.

Esta hipótesis queda **confirmada en el alcance de CR-KGV-01** por la implementación mínima y las verificaciones registradas en los apartados 8–10.

# 4. CR-KGV-01 — Criterio mínimo de corrección ordinaria

La corrección mínima quedará satisfecha únicamente si se cumplen conjuntamente:

```text
a. una instancia ordinaria de App puede recibir
   un antecedente colaborativo mínimo;

b. el antecedente contiene exclusivamente:
   - sharedResult;
   - firstContribution.participant;
   - firstContribution.content;

c. App no reduce esos elementos a un único texto
   presentado como mera aportación propia;

d. antes de actuar, la persona puede distinguir
   observacionalmente:
   - el resultado compartido;
   - la aportación antecedente de A;

e. antes de actuar, App hace reconocible
   la actuación disponible:
   continuar a partir del resultado compartido
   y de la aportación antecedente;

f. la persona puede introducir una nueva aportación
   desde ese contexto;

g. esa aportación queda constituida
   como continuación reconocible del antecedente recibido;

h. un antecedente inválido o incompleto
   no constituye contexto colaborativo válido;

i. la corrección no exige:
   backend,
   cuentas,
   autenticación,
   permisos,
   sincronización,
   transporte automático,
   identidad real,
   ni importar CollaborationExperience completa.
```

Los discriminantes principales son `d`, `e`, `g` y `h`.

# 5. Tests RED fijados

Se fijan exclusivamente:

- `T-KGV-01` — recepción y reconocimiento estructurado del antecedente mínimo;
- `T-KGV-02` — constitución de una continuación de B desde ese antecedente;
- `T-KGV-03` — rechazo de antecedente inválido o incompleto.

No se modifica producción en esta fase.

# 6. Regla RED

La fase RED sólo puede considerarse válida si:

1. los tests compilan y se ejecutan;
2. fallan contra la producción actual;
3. el fallo corresponde a la ausencia de la capacidad ordinaria descrita por `CR-KGV-01`;
4. los tests históricos no se modifican para obtener el rojo.

No se acepta como evidencia RED un fallo por error sintáctico, importación rota o fixture inválido.

# 7. No derivaciones

Esta actuación no deriva todavía:

```text
Architecture
backend
API
cuentas
usuarios
autenticación
permisos
WebSocket
sincronización
tiempo real
transporte automático
refactor general
integración completa de CollaborationExperience
```

La siguiente decisión depende exclusivamente del resultado observado de `T-KGV-01…03`.


# 8. Ejecución RED y transición incremental a GREEN

La fase RED se ejecutó en una rama aislada sin modificar `feature/task-filters`.

Resultado inicial observado:

```text
T-KGV-01 → FAIL
T-KGV-02 → FAIL
T-KGV-03 → FAIL
```

La causa común inicial fue la ausencia en `App` de una entrada accesible denominada «Antecedente compartido recibido». El DOM renderizado correspondía correctamente a la App ordinaria, por lo que el fallo no procedía de importación, compilación, fixture inválido o render roto.

Durante la primera transición a GREEN apareció un defecto del propio mecanismo de fixture: `userEvent.type` interpretaba las llaves del JSON como sintaxis especial. Se corrigió exclusivamente la forma de introducir el JSON mediante `fireEvent.change`, sin alterar las expectativas funcionales de `T-KGV-01…03`.

La implementación se realizó de forma incremental:

1. receptor y presentación estructurada mínimos → `T-KGV-01` GREEN;
2. aportación y continuación mínima de B → `T-KGV-02` GREEN;
3. validación de `MIN-CC-01` → `T-KGV-03` GREEN.

No se adelantaron en cada paso capacidades pertenecientes al test siguiente.

# 9. Resultado GREEN de CR-KGV-01

La implementación ordinaria resultante permite:

- recibir explícitamente un antecedente colaborativo mínimo;
- conservar separadamente `sharedResult` y la aportación antecedente de A;
- mostrar una orientación situacional antes de la actuación de B;
- introducir una aportación de B;
- constituirla como continuación reconocible;
- rechazar como contexto colaborativo un antecedente incompleto o inválido.

La validación mínima exige conjuntamente:

```text
sharedResult
→ string no vacío

firstContribution.participant
→ exactamente "A"

firstContribution.content
→ string no vacío
```

No se añadió backend, API, cuenta, autenticación, permiso, sincronización, transporte automático, identidad real ni integración completa de `CollaborationExperience`.

Resultado específico:

```text
T-KGV-01 → PASS
T-KGV-02 → PASS
T-KGV-03 → PASS
```

Tras la revisión del diff, `T-KGV-03` se reforzó sin modificar producción y quedó ejecutado contra cinco variantes no válidas del mismo contrato:

- JSON mal formado;
- `sharedResult` vacío;
- `firstContribution` ausente;
- `firstContribution.participant` distinto de `"A"`;
- `firstContribution.content` vacío.

Las cinco fueron rechazadas sin constituir contexto colaborativo.

**CR-KGV-01 → SATISFECHO EN EL ALCANCE FIJADO.**

# 10. Verificación de no regresión

Después de alcanzar GREEN se ejecutaron, en este orden:

1. tests históricos de `App`;
2. typecheck;
3. suite completa.

Resultados observados:

```text
src/App.test.tsx
→ 28/28 PASS

npm run typecheck
→ PASS

suite completa
→ 39 archivos PASS
→ 346/346 tests PASS

src/App.kgv.test.tsx
→ 3/3 PASS
```

No se detectó regresión dentro de la cobertura existente.

# 11. Cierre de GAP-KGV-01-R2

El gap se formuló como pérdida de mediación ordinaria: el contenido podía llegar y permanecer visible, pero el segundo participante no podía reconocer suficientemente la estructura del antecedente ni la actuación disponible para continuar.

La corrección mínima ahora hace observables precisamente esas diferencias y permite constituir la continuación de B sin reconstruir la actividad desde cero.

Por tanto:

```text
GAP-KGV-01-R2
→ REDUCIDO / CERRADO
  EN EL ALCANCE DE CR-KGV-01
```

Este cierre no demuestra:

- colaboración general;
- simultaneidad;
- identidad de usuarios;
- persistencia interdispositivo automática;
- sincronización;
- transporte automático;
- suficiencia universal de la App para cualquier colaboración;
- clausura global del proyecto.

Sí demuestra que la pérdida concreta aislada por `GAP-KGV-01-R2` puede corregirse mediante una mediación ordinaria mínima y sin la infraestructura no derivada.

# 12. Estado y siguiente gate

La actuación 74 queda cerrada técnicamente y documentalmente en el alcance anterior.

No se consolida todavía en `feature/task-filters` por este documento. El siguiente gate es revisar el diff completo de la rama de trabajo frente a `822a25f` y decidir su consolidación.
