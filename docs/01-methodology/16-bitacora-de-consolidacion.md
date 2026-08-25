# Ficha de bitácora

## Documento: 00-protocolo-de-trabajo.md

## Fecha:

2026-08-05

## Motivo:

Incorporación del principio CT-1
"Derivación del marco teórico".

## Resultado:

Se incorpora al protocolo metodológico un procedimiento general para la construcción de cuerpos teóricos autónomos, distinguiéndolo de los principios metodológicos generales (PM).

## Auditorías superadas:

- Responsabilidad del marco teórico.
- Irreducibilidad de sus componentes.
- Orden lógico de construcción.
- Integración en el protocolo metodológico.

# Observaciones:

Este principio pasa a formar parte de la metodología general del proyecto y será aplicable a cualquier futuro cuerpo teórico autónomo.

---

# Ficha de bitácora

## Documento: 00-R-U2-M1.md

## Fecha:

2026-08-26

## Motivo:

Reconsolidación de `R-U2-M1` tras su primera observación instrumental de uso y la resolución de la necesidad local derivada de dicha observación.

## Resultado:

Se completa el primer ciclo de observación y evolución local de `R-U2-M1`.

La observación `OU-RU2M1-001` localiza `F-OU001-01`; su investigación establece `L-OU001-01` y deriva `RU2M1-U01`.

La investigación de realización selecciona `MR-U01-01`, que es construida y validada mediante `RV-MR-U01-01`.

`R-U2-M1` queda reconsolidada dentro de su alcance actual, conservando las propiedades anteriormente validadas e incorporando la observabilidad local de la aceptación de `X` y la estabilidad del antecedente restaurado durante una ejecución.

Se incorporan al cuerpo vigente de Realization:

- `01-protocolo-de-observacion-de-uso-R-U2-M1.md`;
- `02-OU-RU2M1-001.md`;
- `03-investigacion-F-OU001-01.md`;
- `04-investigacion-RU2M1-U01.md`.

`PROJECT_STATUS.md` queda actualizado para reflejar el estado resultante.

## Auditorías superadas:

- Trazabilidad `OU-RU2M1-001 → F-OU001-01 → L-OU001-01 → RU2M1-U01 → MR-U01-01 → RV-MR-U01-01`.
- Conservación de las propiedades previamente validadas de `R-U2-M1`.
- Observabilidad de la aceptación efectiva de un `X` válido en `S1`.
- Conservación de `S1` tras la aceptación de `X` durante la misma ejecución.
- Constitución de `S2(X)` únicamente en una nueva ejecución con `X` restaurado.
- Validación específica de `R-U2-M1`: 45/45 pruebas superadas.
- Validación global: 184/184 pruebas superadas.
- Build de producción correcto.
- Comprobación de integridad mediante `git diff --check`.
- Ausencia de propagación no justificada a Product o Architecture.

# Observaciones:

La primera observación instrumental proporciona evidencia positiva local de uso, pero no demuestra utilidad general de `R-U2-M1`.

La modificación realizada responde exclusivamente a una pérdida demostrada durante el uso y no convierte sus mecanismos concretos en requisitos de Product ni en decisiones arquitectónicas.

No queda derivada automáticamente ninguna actuación posterior. Una nueva apertura requerirá nuevo fundamento positivo independiente.

---
