# AGENTS.md

Antes de actuar sobre el repositorio, utiliza
`docs/00-introduction/INTRODUCTION.md` como puerta de entrada al sistema
documental. Identifica desde ella el cuerpo competente y aplica las normas
canónicas pertinentes, en particular
`docs/01-methodology/00-protocolo-de-trabajo.md` y
`docs/01-methodology/99-protocolo-de-consolidacion-documental.md`; este archivo
no las sustituye.

## Procedimiento operativo

- Ejecuta mecánicamente sólo cambios ya justificados: localiza impactos reales,
  modifica los archivos competentes, actualiza las referencias y afirmaciones
  de estado vigente afectadas, ejecuta tests, build y controles pertinentes, y
  presenta el diff.
- No inventes compromisos de Product, Architecture, Realization o Engineering,
  ni decisiones conceptuales que el encargo o una fuente competente no hayan
  proporcionado o derivado explícitamente. Si una consecuencia conceptual es
  ambigua o excede el alcance, detén esa parte y solicita decisión humana.
- Conserva la evidencia y las afirmaciones históricas correctas en su contexto.
  Distingue historia de estado vigente y no retroproyectes el estado actual.
- Modifica sólo los documentos cuya responsabilidad resulte realmente afectada;
  no propagues ni dupliques una conclusión en documentos no competentes.
- No abras investigaciones ni introduzcas capas, abstracciones, funcionalidades
  o documentos por convención, continuidad histórica o anticipación.
- No toques archivos ajenos a la tarea ni añadas, borres o modifiques archivos
  `untracked` preexistentes salvo instrucción explícita.
- No ejecutes `git add` ni `git commit` salvo petición explícita.

## Cierre

Antes de finalizar una modificación, ejecuta los controles disponibles que
correspondan: tests afectados, suite global cuando proceda, build y
`git diff --check`. Informa de los archivos modificados, los controles
ejecutados, sus resultados y cualquier incertidumbre que requiera decisión
humana.
