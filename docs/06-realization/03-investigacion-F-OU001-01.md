# Investigación de atribución de `F-OU001-01`

## Estado

**Objeto investigado:** `F-OU001-01 — Ausencia de manifestación observable de terminación de S1`.
**Realización afectada:** `R-U2-M1`.
**Observación de origen:** `OU-RU2M1-001`.
**Pérdida derivada:** `L-OU001-01`.
**Necesidad local derivada:** `RU2M1-U01`.
**Estado:** investigación de atribución cerrada respecto del fenómeno observado; selección de solución fuera del alcance de este documento y continuada posteriormente en `04-investigacion-RU2M1-U01.md`.

---

## Propósito

Este documento investiga el fenómeno:

```text
F-OU001-01
```

localizado durante `OU-RU2M1-001`, con el fin de determinar:

1. si constituye un incumplimiento de las condiciones ya consolidadas de `R-U2`;
2. si puede atribuirse al comportamiento concreto de `R-U2-M1`;
3. si produce una pérdida real durante el uso;
4. y, en caso afirmativo, qué necesidad mínima puede derivarse sin anticipar todavía una solución.

La investigación no tiene como objetivo seleccionar ni implementar una modificación de software.

---

## 1. No existe incumplimiento de `RU2-N01…RU2-N05`

Lo que exigía la realización era:

```text
S1
↓
producción de X
↓
persistencia de X
↓
interrupción
↓
nueva ejecución
↓
restauración de X
↓
S2(X)
```

Y eso ocurrió efectivamente durante `OU-RU2M1-001`.

| Condición                          | Resultado en `OU-RU2M1-001` |
| ---------------------------------- | --------------------------- |
| `RU2-N01` — producir `X`           | PASS                        |
| `RU2-N02` — atravesar interrupción | PASS                        |
| `RU2-N03` — correspondencia        | PASS                        |
| `RU2-N04` — incidencia posterior   | PASS local                  |
| `RU2-N05` — testigo `Y`            | PASS                        |
| `MO-01r`                           | PASS                        |
| libertad semántica                 | PASS                        |

El documento canónico tampoco exige que, al persistir `X`, aparezca una confirmación visual.

La especificación de la ejecución inicial dice solamente:

```text
Ahora

[Aportación actual: X]

[Terminar por ahora]
```

y establece que:

> una aportación válida puede ser persistida como `X`.

Por tanto, no debe reabrirse `RC-RU2M1-01` como si la observación hubiera demostrado que la auditoría anterior era incorrecta.

El fenómeno localizado pertenece a otro nivel:

```text
satisfacción formal de R-U2
≠
ausencia de toda dificultad durante el uso
```

---

## 2. Apareció una pérdida que la especificación no había captado

El hecho observado fue:

```text
persona introduce X
↓
pulsa "Terminar por ahora"
↓
X queda correctamente persistido
↓
la interfaz no cambia
↓
la persona declara:
"no sucede nada"
```

Para determinar si la actuación había funcionado fue necesario salir de la propia experiencia de uso y ejecutar una inspección técnica:

```javascript
localStorage.getItem("ru2m1.previous");
```

La consulta confirmó que `X` había sido correctamente persistido.

Este hecho permite distinguir dos estados técnicamente diferentes:

```text
A

botón pulsado
+
X correctamente aceptado
```

y:

```text
B

botón pulsado
+
ningún efecto
```

Sin embargo, la propia superficie de uso no permitía a la persona distinguir entre ambos.

Por tanto existe una diferencia real:

```text
con manifestación observable
→ la persona puede saber que X ha sido aceptado
→ puede abandonar la actividad disponiendo de esa información

sin manifestación observable
→ la persona no puede distinguir éxito de ausencia de efecto
→ debe asumirlo o comprobarlo mediante un medio externo
```

La diferencia no depende de una preferencia estética sobre la interfaz.

Afecta a la posibilidad de conocer, desde la propia situación de uso, si la actuación que debe preceder a la interrupción ha producido efectivamente su resultado.

---

## 3. Formulación de la pérdida sin anticipar una solución

Se deriva:

### `L-OU001-01 — Pérdida de observabilidad de la aceptación de X antes de la interrupción`

> Después de ejecutar la actuación mediante la que `R-U2-M1` acepta un `X` válido para hacerlo disponible tras la interrupción, la persona no puede distinguir, mediante la propia superficie de uso, entre la aceptación efectiva de `X` y la ausencia de efecto.

La atribución dispone además de apoyo directo en la implementación observada:

```ts
onClick={() => {
  if (isResumeAvailable(currentInput)) {
    localStorageResumeRepository.savePrevious(currentInput);
  }
}}
```

La actuación realiza exclusivamente:

```text
validar X
↓
savePrevious(X)
```

No produce ningún cambio observable de estado en la interfaz.

Por tanto, no estamos ante:

```text
causa desconocida
```

sino ante:

```text
comportamiento observado
        +
implementación que explica
por qué ese comportamiento ocurre
```

La pérdida puede atribuirse al comportamiento concreto de `R-U2-M1` sin necesidad de suponer todavía qué mecanismo debería reemplazarlo.

---

## 4. Derivación de una necesidad local

De `L-OU001-01` puede derivarse una condición nueva en el nivel de Realization/use.

No se deriva un nuevo compromiso de Product.

### `RU2M1-U01 — Observabilidad de la aceptación previa a la interrupción`

> Cuando la persona ejecuta en `S1` la actuación mediante la que un `X` válido queda aceptado para su disponibilidad posterior, la realización debe producir una diferencia observable suficiente para que la persona pueda distinguir la aceptación efectiva de `X` de la ausencia de efecto, sin necesidad de inspección técnica externa.

Esta necesidad es deliberadamente más pobre que cualquier solución concreta.

No establece:

```text
mostrar mensaje
```

ni:

```text
cambiar de pantalla
```

ni:

```text
mostrar "Guardado"
```

ni ninguna otra forma determinada de interfaz.

La necesidad derivada es únicamente:

```text
aceptación efectiva
≠
ausencia de efecto

y esa diferencia
debe resultar observable
para la persona
```

Por tanto:

```text
RU2M1-U01
→ necesidad local

solución técnica o visual concreta
→ todavía no derivada
```

---

## 5. Restricción sobre cualquier solución posterior

La pérdida no puede resolverse simplemente haciendo que, al pulsar `Terminar por ahora`, aparezca inmediatamente:

```text
De antes
```

La especificación vigente de `R-U2-M1` conserva la trayectoria:

```text
persistencia de X
↓
interrupción
↓
nueva ejecución
↓
restauración de X
↓
S2(X)
```

La separación entre:

```text
X producido y guardado en S1
```

y:

```text
X restaurado posteriormente en S2(X)
```

realiza trabajo estructural dentro de la realización.

Mostrar inmediatamente `S2(X)` después de la persistencia podría colapsar:

```text
S1
↓
interrupción
↓
S2(X)
```

en:

```text
S1
↓
S2(X)
```

dentro de una misma ejecución.

Por tanto deberá conservarse la discriminación:

```text
confirmar que X ha sido aceptado
≠
constituir inmediatamente S2(X)
```

Cualquier solución candidata deberá satisfacer `RU2M1-U01` sin eliminar la separación efectiva entre la situación inicial y la situación posterior de reanudación.

---

## 6. Explicación técnica del fenómeno

Actualmente `ResumeExperience` obtiene el antecedente mediante:

```ts
const restoredPrevious = localStorageResumeRepository.loadPrevious();
```

La lectura se realiza durante el renderizado del componente.

Al pulsar `Terminar por ahora`, la actuación:

```ts
localStorageResumeRepository.savePrevious(currentInput);
```

modifica `localStorage`, pero no ejecuta ninguna actualización de estado React.

Por ello:

```text
savePrevious(X)
↓
localStorage cambia
↓
estado React no cambia
↓
no se solicita nuevo render
↓
la superficie permanece aparentemente igual
```

Este comportamiento explica `F-OU001-01`.

Existe además una restricción técnica adicional.

Si después de `savePrevious()` se introdujera ingenuamente una actualización de estado que provocara un nuevo render, entonces:

```ts
const restoredPrevious = localStorageResumeRepository.loadPrevious();
```

podría leer inmediatamente el `X` recién guardado.

La misma ejecución podría pasar entonces a satisfacer:

```text
existe X válido restaurado
```

y entrar en la rama visual:

```text
De antes
```

sin que hubiera ocurrido todavía la interrupción y nueva ejecución que forman parte de la trayectoria seleccionada.

Por tanto debe conservarse explícitamente:

```text
X guardado en la ejecución actual
        ≠
X restaurado en una ejecución posterior
```

Esta restricción no determina todavía cómo debe implementarse `RU2M1-U01`.

Sólo excluye soluciones que eliminen inadvertidamente una propiedad ya justificada de `R-U2-M1`.

---

## 7. Resultado de la investigación de atribución

La investigación produce la siguiente cadena:

```text
F-OU001-01
✔ fenómeno observado

        ↓

atribución
✔ atribuible al comportamiento de R-U2-M1

        ↓

¿viola RU2-N01…RU2-N05?
✘ no

        ↓

¿invalida RC-RU2M1-01?
✘ no

        ↓

¿produce una pérdida de uso real?
✔ sí

        ↓

L-OU001-01
✔ pérdida establecida

        ↓

RU2M1-U01
✔ necesidad local derivada

        ↓

¿determina una solución?
✘ no

        ↓

solución
○ todavía no determinada

        ↓

modificación de software
○ todavía no realizada
```

La observación de uso no ha refutado la realización formal.

Ha descubierto una necesidad humana que la validación formal anterior no contenía.

Esto permite distinguir:

```text
R-U2-M1 satisface
las condiciones para las que fue construida
```

de:

```text
R-U2-M1 no puede presentar
ninguna pérdida adicional durante el uso
```

La primera afirmación permanece consolidada.

La segunda nunca había sido establecida.

---

## 8. Conclusiones permitidas

Dentro del alcance de esta investigación puede afirmarse que:

1. `F-OU001-01` ocurrió durante una trayectoria real de observación;
2. la persistencia de `X` funcionó correctamente;
3. el fenómeno no constituye un incumplimiento de `RU2-N01…RU2-N05`;
4. el fenómeno no invalida `RC-RU2M1-01`;
5. la superficie de uso no permitía distinguir la aceptación efectiva de `X` de la ausencia de efecto;
6. fue necesaria una comprobación técnica externa para establecer que la actuación había funcionado;
7. esa diferencia constituye `L-OU001-01`;
8. de la pérdida puede derivarse `RU2M1-U01`;
9. `RU2M1-U01` pertenece al nivel local de Realization/use;
10. ninguna solución concreta ha quedado todavía justificada.

---

## 9. Conclusiones prohibidas

Esta investigación no permite concluir que:

1. `PV-001` deba modificarse;
2. `R-U2` deba modificarse;
3. `RC-RU2M1-01` sea incorrecto;
4. `R-U2-M1` deba descartarse;
5. deba mostrarse un mensaje de confirmación;
6. deba aparecer la palabra `Guardado`;
7. deba producirse una navegación;
8. deba cambiarse de pantalla;
9. deba desaparecer el formulario;
10. deba constituirse inmediatamente `S2(X)`;
11. deba utilizarse un nuevo estado React concreto;
12. deba modificarse `localStorage`;
13. deba crearse `R-U2-M2`;
14. exista ya una arquitectura justificable a partir de esta pérdida;
15. cualquier mejora imaginable de la interfaz quede autorizada.

---

## 10. Estado resultante al cierre de la atribución

```text
R-U2-M1
✔ continúa validada dentro de su alcance

RC-RU2M1-01
✔ permanece consolidado

OU-RU2M1-001
✔ primera observación completada

F-OU001-01
✔ fenómeno observado
✔ atribución establecida

L-OU001-01
✔ pérdida establecida

RU2M1-U01
✔ necesidad local derivada

solución
○ no determinada

modificación de R-U2-M1
○ no realizada
```

---

## 11. Punto de reanudación al cierre de la atribución

La siguiente actuación justificable consiste en investigar cómo puede realizarse:

```text
RU2M1-U01
```

conservando simultáneamente:

```text
observabilidad de la aceptación de X
```

y:

```text
S1
↓
X
↓
persistencia
↓
interrupción
↓
nueva ejecución
↓
S2(X)
```

La siguiente investigación deberá reducir las soluciones candidatas hasta determinar la realización mínima que:

1. haga observable la aceptación efectiva de `X`;
2. permita distinguirla de la ausencia de efecto;
3. no requiera inspección técnica externa;
4. no constituya prematuramente `S2(X)`;
5. no introduzca capacidades ajenas a `RU2M1-U01`;
6. y no convierta una decisión contingente de interfaz en requisito general de Product.

Hasta completar esa reducción no deberá modificarse `R-U2-M1`.

---
