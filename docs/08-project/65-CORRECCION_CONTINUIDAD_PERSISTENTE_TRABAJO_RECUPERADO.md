# Corrección de continuidad persistente del trabajo recuperado

## Estado

**Cerrada — corrección técnica desplegada y validada humanamente en la aplicación pública.**

**Fecha del registro técnico:** 10/11/2026.

**Fecha del cierre final:** 10/11/2026.

Este documento registra la derivación, refutación, corrección técnica y validación pública de la actuación 65. La publicación y la validación humana que estaban pendientes al cierre técnico se completaron posteriormente, según la evidencia comunicada por la persona responsable para este cierre.

# 1. Origen empírico y pérdida N64-02

El uso humano post-lanzamiento aportó la siguiente evidencia: una persona recuperó y seleccionó un material ordinario, produjo un nuevo trabajo, vio «Nuevo trabajo constituido» y, después de una recarga normal del navegador, perdió ese resultado.

La pérdida se identifica aquí como **N64-02 — Continuidad persistente del nuevo trabajo constituido desde material recuperado**:

```text
material anterior → localización → selección
→ nuevo trabajo constituido → interrupción/recarga
→ trabajo perdido
```

La inspección del código confirmó que el manejador sólo ejecutaba `setConstitutedWork(newWork)`: el resultado dependía del estado React efímero. La evidencia humana originó la actuación; los tests de desmontaje/remontaje reprodujeron técnicamente la falta de recuperación.

N64-02 se distingue de N64-01, relativo a la coexistencia del nuevo trabajo ordinario con una trayectoria post-V1 previa y a la elección Y/R. La actuación 65 no resuelve esa otra cuestión ni presupone su resolución.

# 2. Relación con PV-006 y alcance heredado de 58

`02-PRODUCT.md`, apartado 9, compromete preservar suficientemente las posibilidades que sigan siendo pertinentes después de un cambio introducido por la plataforma. La mera supervivencia física no basta, pero tampoco se exige una realización técnica concreta ni preservación universal.

En este caso el trabajo estaba constituido y seguía siendo pertinente para continuar la actividad. Su desaparición después de una interrupción normal proporcionó fundamento para una corrección realizativa local respecto de PV-006, sin cambiar el compromiso de Product.

`58-REDUCCION_DIFERENCIA_MATERIAL_LOCALIZACION_SELECTIVA_EN_RECORRIDO_ORDINARIO.md`, apartado 15, había cerrado correctamente la reactivación local del material y dejado expresamente sin derivar que el nuevo trabajo debiera convertirse en `ru2m1.previous`, `ordinary.materials` o PostV1 current. Esas relaciones requerían fundamento adicional si posteriormente resultaban necesarias.

El episodio post-lanzamiento aporta ese fundamento para la persistencia y continuidad ordinaria ahora exigidas. No convierte retrospectivamente 58 en una actuación incumplida ni establece la relación con PostV1 current.

# 3. Primera derivación: H65-A

El primer criterio fue:

**C65-01:** el trabajo constituido desde un material recuperado debe sobrevivir a una interrupción, reaparecer disponible y permitir actuar posteriormente desde él.

Se compararon guardar únicamente como `previous`, actualizar además el estado de continuación post-V1, añadir a materiales y crear una persistencia específica. Se seleccionó provisionalmente **H65-A**: guardar `newWork` como `ru2m1.previous` antes de confirmar visiblemente su constitución.

La hipótesis reutilizaba la semántica de antecedente operativo existente. Tras remontar, `ResumeExperience` lee `previous`, lo muestra como «Aportación anterior» y permite producir una aportación nueva desde él.

## 3.1 Primer rojo y verde inicial

Se añadió en `src/App.test.tsx` el test:

> conserva tras interrupción el trabajo constituido desde material recuperado y permite producir una aportación posterior desde él

El fixture preparaba dos materiales y `previous = "Trabajo previo"`. La persona inspeccionaba, seleccionaba B y constituía «Trabajo nuevo desde material recuperado». La visibilidad inicial pasaba, pero la recuperación tras remontaje falló con código 1:

```text
esperado: Trabajo nuevo desde material recuperado
obtenido: Trabajo previo
```

Se aplicó H65-A, sin modificar colección, retained ni Post-V1. El test pasó completo, incluidas las aserciones de antecedente recuperado y «Continuación posterior». App obtuvo 21/21 tests; la suite global 328/328, con typecheck, build y diff check satisfactorios.

Ese verde acreditó C65-01, no la seguridad de la sustitución bajo constituciones sucesivas.

# 4. Contraejemplo y descarte de H65-A

La auditoría posterior preguntó si el `previous` desplazado estaba necesariamente conservado en materiales. La formación ordinaria desde vacío produce:

| Transición | previous | retained | ordinary.materials |
| --- | --- | --- | --- |
| Primera aportación X | X | ausente | ausente |
| Recarga y creación de A | A | X | [A] |
| Recarga y creación de B | B | X | [A, B] |

En ese estado B está conservado en la colección. Sin embargo, H65-A no mantiene esa propiedad:

| Transición con H65-A | previous | retained | ordinary.materials |
| --- | --- | --- | --- |
| Recuperar B y constituir W1 | W1 | X | [A, B] |
| Recargar | W1 | X | [A, B] |
| Recuperar material y constituir W2 | W2 | X | [A, B] |

W1 desaparecía tras la segunda sustitución y recarga. El contraejemplo se reprodujo mediante UI desde almacenamiento vacío en una ejecución efímera con almacenamiento en memoria; no requirió corrupción ni manipulación de claves.

El setup del primer test era sintético: con H65-A su relación `previous` fuera de materiales sí podía alcanzarse, pero el recorrido desde vacío deja además retained=X. La segunda prueba parte de vacío y elimina esa limitación de representatividad.

## 4.1 Segundo rojo

Se añadió un único test de regresión:

> preserva un trabajo constituido desde material recuperado cuando otro trabajo posterior lo sustituye como antecedente

Construye X, A, B, W1 y W2 exclusivamente mediante UI, intercalando desmontajes/remontajes. Comprueba la recuperación de W1 y después de W2. Finalmente expresa una necesidad, solicita inspección y exige el texto exacto «Trabajo recuperado W1» entre los materiales inspeccionables.

La primera ejecución detectó una ambigüedad del selector del propio test. Se corrigió únicamente el selector y se repitió la ejecución. La aserción roja semántica falló con código 1:

```text
esperado entre materiales inspeccionables: Trabajo recuperado W1
obtenido: [Material anterior A, Material anterior B]

previous = Trabajo recuperado W2
retained = X
materials = [A, B]
```

Por tanto, **H65-A quedó refutada como solución suficiente**. La regresión no se justificó mediante una supuesta garantía de retained: esa entrada conserva otra aportación, no un historial de valores desplazados.

# 5. H65-C mínima e implementación final

El contraejemplo justificó un segundo criterio:

**C65-02:** cuando otro trabajo sustituya al constituido como antecedente operativo, el anterior debe seguir recuperable mediante «Materiales anteriores».

Se seleccionó **H65-C mínima**: conservar cada trabajo constituido tanto como nuevo antecedente operativo como material de la colección ordinaria existente. La ampliación a materiales responde a C65-02, no a una convención ni a una exigencia retroactiva de 58.

La producción se modificó exclusivamente en el manejador de «Continuar con este material» de `src/App.tsx`. El orden implementado es:

1. `localStorageResumeRepository.savePrevious(newWork)`.
2. Construcción de `nextMaterials` añadiendo `{ id: mN, content: newWork }` a la colección actual, con el identificador localizado ya utilizado por App.
3. `setOrdinaryMaterials(nextMaterials)`.
4. Persistencia de `nextMaterials` en `ordinary.materials`.
5. `setConstitutedWork(newWork)`.

Se reutilizan claves, representación y capacidad de localización existentes. No se añadieron helpers ni abstracciones en producción. Los dos tests permanecieron sin cambios durante este verde.

No se compara por contenido para deduplicar: el mecanismo permite materiales textualmente iguales producidos por actuaciones distintas. Esto no establece una política general de identidad o duplicados.

# 6. Propiedades técnicas demostradas

| Criterio | Evidencia | Resultado |
| --- | --- | --- |
| C65-01 | Trabajo visible al constituirse; tras remontar aparece exactamente como «Aportación anterior»; permite crear «Continuación posterior», con aserciones de antecedente y actuación actual | SATISFECHO TÉCNICAMENTE |
| C65-02 | Trayectoria UI desde vacío; tras constituir W2 y remontar, W1 sigue entre los materiales inspeccionables | SATISFECHO TÉCNICAMENTE |

Una reproducción efímera adicional, cargando el código fuente actual en memoria con DOM simulado, permitió observar:

```text
ru2m1.previous = Trabajo recuperado W2
ru2m1.retained = X

ordinary.materials = [
  { id: m1, content: Material anterior A },
  { id: m2, content: Material anterior B },
  { id: m3, content: Trabajo recuperado W1 },
  { id: m4, content: Trabajo recuperado W2 }
]
```

W2 se recuperó como aportación anterior; W1 pudo inspeccionarse y seleccionarse. A y B permanecieron conservados. El montaje vacío no escribió entradas y la inspección/selección no modificó la persistencia. Retained siguió siendo X.

Los tests existentes de selección humana y limpieza de `newWork`/`constitutedWork` al cambiar necesidad o material siguieron pasando. No se introdujo preselección ni escritura por mero montaje. La persistencia se realiza al constituir realmente el trabajo.

# 7. Validaciones finales observadas

| Control | Resultado | Código de salida |
| --- | --- | --- |
| Segundo test focalizado, C65-02 | 1 pasado; W1 inspeccionable tras W2 | 0 |
| Primer test focalizado, C65-01 | 1 pasado; recuperación y actuación posterior | 0 |
| `src/App.test.tsx` completo | 22/22 pasados | 0 |
| `CI=true npm test -- --run` | 37 archivos; 329/329 tests pasados; 0 fallidos | 0 |
| `npm run typecheck` | Sin diagnósticos | 0 |
| `npm run build` | Build correcto; 30 módulos transformados | 0 |
| `git diff --check` tras implementación | Sin salida | 0 |

Son resultados locales ya observados, no una validación humana de la corrección publicada. No se han repetido tests ni build para esta edición exclusivamente documental.

# 8. Alcance negativo y límites

La actuación no deriva historial general, persistencia ilimitada, deduplicación, nueva infraestructura, Architecture, P6, nuevo Product Value ni nuevo horizonte.

No modifica `ru2m1.retained`, `availablePostV1Current`, `ResumeExperience`, el repositorio de reanudación ni `PostV1IntegratedExperience`. No introduce otra clave de persistencia.

No resuelve la coexistencia Y/R, nomenclatura R1/S1, sincronización de las vistas ya montadas, corrupción de localStorage, almacenamiento denegado/cuota ni garantías de atomicidad entre claves. Tampoco README, CI, ESLint u otras deudas. No garantiza conservación arbitraria de cualquier estado previo fabricado externamente, de toda versión histórica o de ejecuciones concurrentes.

Los controles positivos se limitan a los recorridos válidos ejercidos. No establecen robustez, compatibilidad ni disponibilidad universales.

58 y Product permanecen intactos. La evidencia posterior justifica una corrección local adicional; no reescribe los cierres históricos.

# 9. Estado histórico al cierre técnico y criterio de finalización

Antes del despliegue, el estado registrado era:

```text
CORRECCIÓN TÉCNICA LOCAL
→ DEMOSTRADA

C65-01 / C65-02
→ SATISFECHOS TÉCNICAMENTE

PUBLICACIÓN DE LA CORRECCIÓN
→ PENDIENTE

VALIDACIÓN HUMANA POST-DESPLIEGUE
→ PENDIENTE

CIERRE FINAL DE LA ACTUACIÓN 65
→ PENDIENTE
```

El criterio de cierre entonces pendiente requería publicar la revisión autorizada y contrastar humanamente en la aplicación pública <https://enrisan1.github.io/mi-app/> la recuperación del trabajo constituido y su conservación al producir otro. La secuencia de comprobación prevista era:

1. Recuperar y seleccionar un material ordinario.
2. Constituir un nuevo trabajo W1 y comprobar su resultado visible.
3. Recargar y comprobar W1 como «Aportación anterior», con posibilidad de producir una actuación posterior desde él.
4. Constituir después otro trabajo W2 y recargar; comprobar W2 como aportación anterior.
5. Expresar una necesidad y examinar materiales: W1 debe seguir localizable; seleccionar W1 y comprobar su contenido.

La revisión desplegada y la evidencia humana se registran en el apartado siguiente. El build y los tests locales no se utilizaron como sustitutos de esa validación pública.

# 10. Despliegue y validación humana pública

La evidencia operativa y humana aportada para el cierre establece:

- Commit: `fffb1eb`, `fix(product): preserve recovered work continuity`.
- Push a `origin/feature/task-filters`: completado. La inspección local al registrar el cierre muestra HEAD y esa referencia en `fffb1eb`.
- Despliegue: **Deploy to GitHub Pages #4 → Success**, rama `feature/task-filters`, commit desplegado `fffb1eb`.
- Aplicación pública: <https://enrisan1.github.io/mi-app/>.

No se presenta esta evidencia comunicada como una ejecución remota o prueba humana realizada por el agente durante la edición documental.

| Criterio | Evidencia humana pública comunicada | Resultado |
| --- | --- | --- |
| C65-01 | Material anterior → selección humana → «Trabajo público W1» → «Continuar con este material» → recarga → W1 reaparece como «Aportación anterior» | PASS PÚBLICO |
| C65-02 | W1 persistido → nueva localización → constitución de «Trabajo público W2» → recarga → aportación anterior=W2 → nueva inspección → W1 y W2 aparecen entre los materiales | PASS PÚBLICO |

El contraste público acredita recuperación y conservación localizable bajo constituciones sucesivas. La capacidad de producir una aportación ordinaria posterior desde el trabajo recuperado quedó además demostrada por el test de C65-01 del apartado 6; no se atribuye a la secuencia humana una interacción adicional no descrita. La selección posterior de W1 se había comprobado en la reproducción técnica del mismo apartado.

Con la revisión publicada, los resultados técnicos y los PASS públicos expresamente confirmados por la persona responsable, **el criterio de finalización queda satisfecho en el alcance probado**. No permanece pendiente la publicación ni la validación humana de esta corrección.

# 11. Resultado final y continuidad

```text
ACTUACIÓN 65
→ CERRADA

N64-02
→ INSUFICIENCIA LOCAL CORREGIDA
  en el alcance probado

C65-01
→ PASS TÉCNICO Y PÚBLICO

C65-02
→ PASS TÉCNICO Y PÚBLICO

PUBLICACIÓN Y VALIDACIÓN HUMANA DE LA CORRECCIÓN
→ COMPLETADAS
```

Se conserva íntegramente el alcance negativo del apartado 8. Este cierre no resuelve ni absorbe N64-01, la coexistencia o elección Y/R entre trabajo ordinario y trayectoria integrada previa, la inteligibilidad de R1/S1 ni otras diferencias de la actuación 64 que permanezcan abiertas. No declara cerrado globalmente PV-006 ni la actuación 64.

La aplicación del Manual distingue la dependencia concreta satisfecha de las cuestiones ajenas a ella: la publicación y el contraste humano de 65 dejan de estar pendientes; las restantes cuestiones de 64 conservan su estatuto y no se cierran por arrastre. No se deriva P6, nuevo Product Value, Architecture, Realization ni nuevo horizonte.
