import {
  MergeView,
  goToNextChunk,
  goToPreviousChunk,
} from "@codemirror/merge";
import {
  revealChunkOnBothSides,
  type CoordinatedMerge,
} from "./CodeMirrorMergeWitness";

const FIRST = `Programa de transición del archivo Boreal

1. Preparación inicial

El programa Boreal se desarrollará durante doce semanas y comenzará con una fase de preparación documental. En esta fase se revisarán los expedientes activos, se identificarán duplicidades y se verificará que cada registro disponga de una referencia temporal suficiente. El grupo inicial estará formado por dieciocho expedientes procedentes de tres áreas distintas.

La preparación incluirá una sesión de coordinación todos los lunes a primera hora. En esa sesión se revisarán incidencias abiertas, se asignarán responsables y se comprobará si existe algún bloqueo que impida continuar con la incorporación prevista.

2. Incorporación progresiva

Durante las primeras cuatro semanas se incorporarán tres expedientes por jornada de trabajo. Cada expediente deberá quedar asociado a una persona responsable y a una categoría operativa. Los registros sin categoría podrán mantenerse provisionalmente durante un máximo de seis días.

Si un expediente contiene documentación contradictoria, se marcará para revisión manual y no podrá pasar a la siguiente fase hasta que una persona responsable confirme cuál de las referencias debe prevalecer.

3. Seguimiento de incidencias

Las incidencias se revisarán dos veces por semana, los martes y los jueves. Cuando aparezcan tres incidencias del mismo tipo dentro de un mismo bloque, se abrirá una revisión específica del procedimiento correspondiente.

La alternativa Kappa permanecerá disponible para aquellos casos en los que el flujo principal no pueda completarse por una incidencia técnica. Cada uso de Kappa deberá quedar registrado con fecha, responsable y motivo.

4. Revisión intermedia

Al finalizar la sexta semana se realizará una revisión intermedia. Para considerar satisfactoria esta fase, al menos quince de los dieciocho expedientes deberán haber completado el recorrido sin incidencias críticas.

La revisión incluirá una comparación entre los tiempos previstos y los tiempos reales de incorporación. Si la desviación media supera dos jornadas, el equipo deberá revisar el ritmo de entrada antes de ampliar el piloto.

5. Consolidación

Entre las semanas siete y diez se mantendrá el ritmo de incorporación y se comprobará la estabilidad de los criterios aplicados. No se realizarán modificaciones automáticas sobre los expedientes. Cualquier cambio deberá quedar autorizado por la persona responsable y registrado en la ficha correspondiente.

Durante esta etapa se mantendrá una reunión quincenal con el equipo de soporte para revisar incidencias técnicas y decidir si alguna requiere una actuación específica.

6. Cierre

La decisión final se adoptará el último viernes de la semana doce. Si permanecen incidencias críticas abiertas, la decisión podrá aplazarse hasta cinco días.

Si el resultado es positivo, se elaborará una propuesta limitada de adopción ordinaria. La propuesta deberá incluir alcance, responsables, riesgos pendientes y condiciones para una revisión posterior.`;

const SECOND = `Programa de transición del archivo Boreal

1. Preparación inicial

El programa Boreal se desarrollará durante catorce semanas y comenzará con una fase de preparación documental. En esta fase se revisarán los expedientes activos, se identificarán duplicidades y se verificará que cada registro disponga de una referencia temporal suficiente. El grupo inicial estará formado por veinticuatro expedientes procedentes de cuatro áreas distintas.

La preparación incluirá una sesión de coordinación todos los martes a primera hora. En esa sesión se revisarán incidencias abiertas, se asignarán responsables y se comprobará si existe algún bloqueo que impida continuar con la incorporación prevista.

2. Incorporación progresiva

Durante las primeras cinco semanas se incorporarán cuatro expedientes por jornada de trabajo. Cada expediente deberá quedar asociado a una persona responsable y a una categoría operativa. Los registros sin categoría podrán mantenerse provisionalmente durante un máximo de cuatro días.

Si un expediente contiene documentación contradictoria, se marcará para revisión manual y no podrá pasar a la siguiente fase hasta que una persona responsable confirme cuál de las referencias debe prevalecer y deje constancia de la decisión.

3. Seguimiento de incidencias

Las incidencias se revisarán tres veces por semana, los lunes, miércoles y viernes. Cuando aparezcan dos incidencias del mismo tipo dentro de un mismo bloque, se abrirá una revisión específica del procedimiento correspondiente.

La alternativa Kappa queda desactivada para aquellos casos en los que el flujo principal no pueda completarse por una incidencia técnica.

4. Revisión intermedia

Al finalizar la séptima semana se realizará una revisión intermedia. Para considerar satisfactoria esta fase, al menos veinte de los veinticuatro expedientes deberán haber completado el recorrido sin incidencias críticas.

La revisión incluirá una comparación entre los tiempos previstos y los tiempos reales de incorporación. Si la desviación media supera una jornada, el equipo deberá revisar el ritmo de entrada antes de ampliar el piloto.

5. Consolidación

Entre las semanas ocho y doce se mantendrá el ritmo de incorporación y se comprobará la estabilidad de los criterios aplicados. No se realizarán modificaciones automáticas sobre los expedientes. Cualquier cambio deberá quedar autorizado por la persona responsable, registrado en la ficha correspondiente y revisado por una segunda persona.

Durante esta etapa se mantendrá una reunión semanal con el equipo de soporte para revisar incidencias técnicas y decidir si alguna requiere una actuación específica.

6. Cierre

La decisión final se adoptará el último miércoles de la semana catorce. Si permanecen incidencias críticas abiertas, la decisión podrá aplazarse hasta ocho días.

Si el resultado es positivo, se elaborará una propuesta limitada de adopción ordinaria. La propuesta deberá incluir alcance, responsables, riesgos pendientes, condiciones para una revisión posterior y un plan de reversión.`;

const root = document.getElementById("codemirror-merge-root");
const status = document.getElementById("codemirror-merge-status");
const nativePrevious = document.getElementById("native-previous");
const nativeNext = document.getElementById("native-next");
const coordinatedPrevious = document.getElementById("coordinated-previous");
const coordinatedNext = document.getElementById("coordinated-next");

if (
  !root ||
  !status ||
  !nativePrevious ||
  !nativeNext ||
  !coordinatedPrevious ||
  !coordinatedNext
) {
  throw new Error("Faltan nodos del harness CodeMirror Merge");
}

const merge = new MergeView({
  a: { doc: FIRST },
  b: { doc: SECOND },
  parent: root,
  highlightChanges: true,
  gutter: true,
  collapseUnchanged: false,
  diffConfig: {
    scanLimit: 500,
  },
});

merge.a.contentDOM.setAttribute("contenteditable", "false");
merge.b.contentDOM.setAttribute("contenteditable", "false");

let coordinatedIndex = 0;

function updateStatus(prefix: string) {
  const total = merge.chunks.length;
  status.textContent =
    total === 0
      ? `${prefix}: sin chunks`
      : `${prefix}: chunk ${coordinatedIndex + 1} de ${total}`;
}

nativePrevious.addEventListener("click", () => {
  goToPreviousChunk(merge.a);
  status.textContent = "Navegación nativa: anterior en A";
});

nativeNext.addEventListener("click", () => {
  goToNextChunk(merge.a);
  status.textContent = "Navegación nativa: siguiente en A";
});

coordinatedPrevious.addEventListener("click", () => {
  if (merge.chunks.length === 0) return;
  coordinatedIndex =
    (coordinatedIndex - 1 + merge.chunks.length) % merge.chunks.length;
  revealChunkOnBothSides(
    merge as unknown as CoordinatedMerge,
    coordinatedIndex,
  );
  updateStatus("Navegación coordinada");
});

coordinatedNext.addEventListener("click", () => {
  if (merge.chunks.length === 0) return;
  coordinatedIndex = (coordinatedIndex + 1) % merge.chunks.length;
  revealChunkOnBothSides(
    merge as unknown as CoordinatedMerge,
    coordinatedIndex,
  );
  updateStatus("Navegación coordinada");
});

if (merge.chunks.length > 0) {
  revealChunkOnBothSides(
    merge as unknown as CoordinatedMerge,
    coordinatedIndex,
  );
}

updateStatus("Inicial");
