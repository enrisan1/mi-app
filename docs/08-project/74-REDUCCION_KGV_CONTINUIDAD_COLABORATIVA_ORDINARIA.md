# Actuación 74 — Reducción KGV de la continuidad colaborativa ordinaria

**Estado:** ABIERTA — criterio mínimo fijado; fase RED pendiente de verificación ejecutada.

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

Esta hipótesis no está todavía confirmada.

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
