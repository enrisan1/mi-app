# Corrección de determinación humana entre trabajo ordinario y trayectoria integrada

## Estado

**Actuación 67 — CERRADA: corrección desplegada y validada humanamente en la aplicación pública.**

**Fecha:** 10/11/2026.

N64-01, insuficiencia realizativa local demostrada respecto de PV-005, queda corregida en el alcance probado, desplegada y validada humanamente en producción. La evidencia de publicación y validación pública comunicada por la persona responsable cierra el criterio de finalización, según el apartado 11. Los apartados 1–10 conservan el proceso y el cierre técnico previo en su contexto histórico.

# 1. Origen y discriminación humana de N64-01

La actuación 65 cerró N64-02: pérdida del nuevo trabajo constituido desde material recuperado, corregida mediante H65-C mínima, desplegada y validada públicamente. Permaneció N64-01: coexistencia entre Y, trabajo ordinario actual, y R, trayectoria integrada previa persistida.

Antes de 67, sin R persistida App ofrecía «Continuar con este trabajo» y Y podía iniciar PostV1IntegratedExperience. Con R persistida esa acción desaparecía y sólo se ofrecía «Retomar trayectoria integrada existente». R prevalecía automáticamente y Y no podía elegirse como ruta integrada.

La prueba discriminante humana posterior estableció expresamente que la elección de qué ruta continuar correspondía a la persona. Existían alternativas Y/R y una decisión relevante sobre cuál continuar hacia integración; la plataforma la resolvía de hecho a favor de R. Esa evidencia suministró la condición que Product no determina por sí solo y permitió discriminar N64-01 respecto de PV-005. No se afirma un incumplimiento global de PV-005 ni se retroproyecta esta conclusión sobre el cierre de 65.

# 2. Compromiso competente y límites

La formulación vigente de `02-PRODUCT.md`, apartado 8.1, es:

> Cuando una actividad incluya una decisión relevante cuya resolución corresponda a la persona y permanezcan alternativas todavía disponibles, la plataforma deberá poder preservar la posibilidad efectiva de que la persona determine esa resolución.

PV-005 no atribuye automáticamente toda decisión a la persona, no prescribe interfaz ni confirmación, no exige intervención humana en operaciones técnicas ya determinadas y no introduce una teoría general de autoría o propiedad. Aquí la correspondencia de la elección Y/R a la persona procede de la determinación humana explícita para esta situación concreta.

# 3. Reducción e hipótesis H67-C

Se descartó como innecesario introducir dos trayectorias integradas persistentes simultáneas, una colección de trayectorias, historial integrado, backup general de R, nueva Architecture o nueva clave persistente general.

PV-005 exige preservar la determinación mientras ambas alternativas permanecen abiertas. Elegir explícitamente Y permite sustituir R en este caso concreto. PV-006 no obliga a conservar indefinidamente una posibilidad legítimamente abandonada; esto no establece una autorización general de eliminación.

**H67-C reducida:**

- Antes de elegir: Y permanece preservado ordinariamente, R permanece en `post-v1-integrated.state` y ambas alternativas son visibles.
- Elección R: recuperar R sin borrar el estado integrado; Y permanece ordinariamente preservado.
- Elección Y: decisión explícita de sustitución, eliminación únicamente de `post-v1-integrated.state` e inicio de PostV1IntegratedExperience con `initialCurrent=Y`; Y pasa a ser current y S1 no se constituye automáticamente.

La lectura de useLocalStorage justificó el orden: si la clave existe prevalece el estado persistido sobre initialCurrent; si se elimina antes del montaje, el estado inicial desde Y se persiste mediante el mecanismo existente.

# 4. Implementación localizada

En `src/App.tsx` el booleano de continuación se sustituye por una elección `null | "existing" | "current"`. Con null permanece la entrada ordinaria. La elección existing monta PostV1IntegratedExperience sin initialCurrent; current la monta con el trabajo disponible, sin volver a priorizar el snapshot hasPersistedPostV1.

Cuando coexisten Y y R aparecen simultáneamente «Continuar con este trabajo sustituyendo la trayectoria integrada anterior» y «Retomar trayectoria integrada existente». La consecuencia de sustituir R es visible antes del clic, sin diálogo adicional.

Elegir R únicamente establece existing. Elegir Y elimina sincrónicamente sólo `post-v1-integrated.state` en el handler del clic y después establece current. La eliminación no ocurre durante render, en un efecto ni en un inicializador. Sin trayectoria previa, continuar el trabajo actual establece current sin eliminar ninguna clave.

No se modifican PostV1IntegratedExperience, useLocalStorage ni ResumeExperience.

## Coherencia del trabajo recién constituido

H65-C actualizaba `ru2m1.previous` y `ordinary.materials`, pero no `availablePostV1Current`. Dentro de la misma sesión la futura integración podía seguir apuntando al trabajo anterior pese a la persistencia correcta del nuevo.

67 añade `setAvailablePostV1Current(newWork)` después de persistir ordinariamente el nuevo trabajo y antes de la confirmación visible. Es sincronización del estado de App con el antecedente ordinario vigente; no es una nueva persistencia. No se modifica retained ni el contrato de materiales.

# 5. Primer ciclo rojo y verde de producción

Se añadieron inicialmente sólo T67-01, elección humana entre trabajo ordinario actual y trayectoria existente, y T67-06, integración del trabajo recién constituido desde material recuperado.

Resultado rojo: App.test.tsx, 24 tests, 22 PASS y 2 FAIL. Ambos fallaron con:

```text
Unable to find an accessible element with the role "button" and name /continuar con este trabajo/i
```

Los 22 tests históricos pasaban. El test que exigía ocultar la continuación de Y se mantuvo intacto durante el rojo.

Tras modificar únicamente producción: 24 tests, 23 PASS y 1 FAIL. T67-01 y T67-06 pasaron; el único fallo fue el contrato histórico que todavía exigía que el botón no existiera con R persistida.

T67-06 alcanzó las aserciones finales: current fue exactamente «W recién constituido», no «Y anterior». Este contraste protege también la corrección del snapshot. El rojo inicial se detuvo en la ausencia del botón y no aisló dinámicamente el snapshot como causa independiente; su existencia se estableció por lectura del handler y el verde ejerció la coherencia final.

# 6. Segundo tramo rojo/verde: actualización deliberada del contrato histórico

El rojo residual no se trató como un refactor accidental. Se sustituyó deliberadamente la expectativa obsoleta de ocultación de Y, superada por el fundamento humano de PV-005, por la presencia simultánea de ambas acciones.

Se conservó el propósito válido del test histórico: elegir R recupera «R2 existente», no lo sustituye por «Y nuevo» y mantiene Y en `ru2m1.previous`. No se cambió su nombre ni se añadieron otras trayectorias en ese paso. Resultado: 24/24 PASS.

# 7. Contrastes funcionales finales

Se añadieron después T67-02, T67-03, T67-04 y T67-05, sin modificar producción. Resultado focal observado: **App.test.tsx, 28/28 PASS, 0 FAIL**, código 0.

| Test | Evidencia demostrada |
| --- | --- |
| T67-01 | Ambas alternativas disponibles antes de decidir, sin entrada automática en integración. |
| T67-02 | Elegir R conserva current, stable, published, evaluation, collaboration, artifact y received íntegramente; Y permanece en previous. |
| T67-03 | Elegir Y produce current=Y y stable, published, evaluation, collaboration, artifact y received a null; previous sigue siendo Y. |
| T67-04 | Elegir Y, desmontar/remontar y retomar integración recupera Y, no R anterior, sin S1 automático. |
| T67-05 | Antes de elegir, Y está intacto, R conserva exactamente su serialización, integración no está montada y no ocurre sustitución ni constitución de S1 nuevo. |
| T67-06 | El trabajo recién constituido desde material recuperado en la misma sesión es exactamente el utilizado para integración; no se usa el snapshot anterior. |

El test histórico actualizado sigue pasando. Las pruebas son automatizadas con montaje y desmontaje de componentes; no constituyen validación humana en navegador público.

# 8. Validación técnica global y procedencia

La persona responsable comunica para este registro la validación global ya realizada. Se conserva exactamente ese resultado; no se vuelve a ejecutar durante la edición documental:

```text
suite global
Test Files → 37 passed / 37
Tests → 335 passed / 335

npm run typecheck
→ tsc --noEmit
→ código 0
→ sin errores

npm run build
→ vite v8.0.16
→ 30 modules transformed
→ build satisfactorio

git diff --check
→ código 0
→ sin salida
```

El resultado focal 28/28 y los ciclos anteriores fueron observados durante esta sesión. Los resultados globales anteriores se registran como evidencia técnica comunicada; no como comandos ejecutados durante este paso documental.

Antes de documentar, los únicos cambios eran `src/App.test.tsx` y `src/App.tsx`. El notice informativo de npm 10.8.2 a npm 12.2.2 no fue una incidencia ni motivó actualizar npm o alterar el entorno.

# 9. Estado histórico al cierre técnico y criterio de cierre final

**Corrección técnica local implementada y validada; publicación y validación humana pública pendientes.** No se declara cierre final de 67 ni corrección pública de N64-01.

El cierre final requiere:

1. Consolidar y publicar la revisión con autorización.
2. Abrir <https://enrisan1.github.io/mi-app/> con coexistencia efectiva de Y ordinario y R integrada previa.
3. Comprobar humanamente que ambas alternativas aparecen antes de elegir.
4. Elegir R y comprobar recuperación de R, sin sustitución por Y, manteniendo Y ordinariamente disponible.
5. Repetir desde estado equivalente y elegir Y: Y pasa a current integrado, R deja de ser la trayectoria activa como consecuencia de la decisión y S1 no se constituye automáticamente.
6. Recargar y comprobar recuperación de la trayectoria iniciada desde Y.
7. Registrar el commit desplegado y la evidencia humana.

# 10. Límites y continuidad al cierre técnico

No se declara satisfacción universal ni cierre global de PV-005 o PV-006, ni resolución general de conflictos entre trayectorias. No se introduce colección, historial integrado, backup de trayectorias abandonadas, sincronización entre pestañas o resistencia general a corrupción/cuota de localStorage.

No se resuelve la primera aportación sin antecedente ni se deriva nueva Architecture, P6, nuevo Product Value o nuevo horizonte. Tampoco se cierra por arrastre la actuación 64: la inteligibilidad R1/S1 conserva su estatuto separado y requiere evidencia específica.

La actuación 65 permanece cerrada y N64-02 corregida en su alcance probado. Para 67 la dependencia pendiente es su publicación autorizada y contraste humano público, dentro de esta misma actuación. La reaplicación del Manual no transforma este cierre técnico en cierre final ni deriva otra actuación por continuidad automática. El punto de reanudación es revisar y consolidar cuando se autorice, publicar y ejercer el criterio anterior; no abrir otra línea estratégica.


# 11. Publicación, validación humana pública y cierre final

**Fecha del cierre final: 10/11/2026.** Este apartado actualiza el estado técnico previo sin reescribir las fases roja/verde. La publicación y las observaciones de navegador siguientes son evidencia comunicada por la persona responsable; no constituyen una nueva ejecución remota ni un test automatizado durante esta edición.

## Publicación

- Commit técnico-documental: `4f5f6bc`, `fix(product): preserve human choice between Y and R`.
- Push a `origin/feature/task-filters`: completado; HEAD y origin/feature/task-filters quedaron en `4f5f6bc` según la evidencia aportada.
- **Deploy to GitHub Pages #5 → Success**.
- Rama: `feature/task-filters`; commit desplegado: `4f5f6bc`.
- Aplicación pública: <https://enrisan1.github.io/mi-app/>.

## Coexistencia antes de elegir

La entrada ordinaria mostraba «Aportación anterior: Trabajo público W2». Estaban disponibles simultáneamente «Continuar con este trabajo sustituyendo la trayectoria integrada anterior» y «Retomar trayectoria integrada existente», sin montaje automático de la integración. T67-01 y T67-05 obtuvieron PASS público en esa observación humana. La igualdad exacta de la serialización de R antes de elegir conserva además su prueba técnica; no se atribuye a la observación visual una inspección completa de localStorage.

## Ruta R

Al pulsar «Retomar trayectoria integrada existente» apareció Integración post-V1 con trabajo actual «este es un texto de prueba.» y estado estable S1 con ese mismo contenido. Se recuperó R; Trabajo público W2 no la sustituyó y el S1 previo siguió presente.

Tras recarga normal, la entrada ordinaria volvió a mostrar «Aportación anterior: Trabajo público W2» y ambas alternativas. T67-02 obtuvo PASS público y se comprobó que elegir R no destruye Y ordinario. La conservación íntegra de todos los campos de R, incluidos los no inspeccionados visualmente, permanece acreditada por el test técnico.

## Ruta Y y persistencia tras recarga

Desde el estado equivalente, elegir «Continuar con este trabajo sustituyendo la trayectoria integrada anterior» mostró trabajo actual «Trabajo público W2», estado estable todavía no constituido y la acción «Constituir S1 desde R1». Y pasó a current integrado, R dejó de ser la trayectoria integrada activa y S1 no se constituyó automáticamente: **T67-03 → PASS público**.

Después de recargar, la aplicación volvió a la entrada ordinaria. Al pulsar «Retomar trayectoria integrada existente» se recuperó «Trabajo público W2»; no reapareció «este es un texto de prueba.» y seguía sin existir S1 constituido automáticamente: **T67-04 → PASS público**.

## Resultado y criterio final satisfecho

| Contraste | Resultado final |
| --- | --- |
| T67-01 | PASS técnico y público. |
| T67-02 | PASS técnico y público. |
| T67-03 | PASS técnico y público. |
| T67-04 | PASS técnico y público. |
| T67-05 | PASS técnico y público, con la observación humana delimitada arriba. |
| T67-06 | PASS técnico; coherencia ejercida indirectamente en producción, sin prueba pública independiente del recorrido completo. |

T67-06 no se repitió humanamente desde cero como material recuperado → W recién constituido → integración inmediata sin recarga. Utilizar Trabajo público W2 como Y ordinario actual no demuestra por sí solo ese recorrido aislado. No se declara PASS público independiente de T67-06.

El criterio del apartado 9 queda satisfecho: revisión consolidada y publicada, coexistencia visible, elección R con conservación observable de R y Y, elección Y con sustitución explícita sin S1 automático, recuperación de Y tras recarga y registro de commit desplegado y evidencia humana.

```text
ACTUACIÓN 67 → CERRADA
N64-01 → INSUFICIENCIA LOCAL RESPECTO DE PV-005
       → CORREGIDA EN EL ALCANCE PROBADO
       → DESPLEGADA
       → VALIDADA HUMANAMENTE EN PRODUCCIÓN
```

## Límites y punto de reanudación

No se cierra globalmente PV-005 ni PV-006. N64-02 fue resuelta por 65 respecto de PV-006 y N64-01 por 67 respecto de PV-005, cada una en su alcance; no se fusionan en satisfacción universal. Permanecen todos los límites materiales del apartado 10.

La actuación 64 no se cierra automáticamente. La inteligibilidad R1/S1 conserva su estatuto separado hasta contraste específico. En el alcance aquí documentado no se identifica otra diferencia demostrada pendiente además de esa cuestión; el siguiente paso es reexaminar el residuo de 64 y decidir si permite cerrarla o si requiere actuación propia. Esa reevaluación no presupone una solución ni deriva automáticamente P6, nueva Architecture, nuevo Product Value o nuevo horizonte.
