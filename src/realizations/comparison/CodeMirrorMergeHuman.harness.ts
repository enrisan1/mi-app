import {
  MergeView,
  goToNextChunk,
  goToPreviousChunk,
} from "@codemirror/merge";
import {
  revealChunkOnBothSides,
  type CoordinatedMerge,
} from "./CodeMirrorMergeWitness";
import {
  applyChunkAToB,
  applyChunkBToA,
  restoreA,
  restoreB,
  type ExecutableMerge,
  type ExecutionSnapshot,
  type ExecutionSnapshotA,
} from "./CodeMirrorChunkExecution";

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
const applyActive = document.getElementById("apply-active");
const applyActiveBToA = document.getElementById("apply-active-b-to-a");
const undoApply = document.getElementById("undo-apply");

if (
  !root ||
  !status ||
  !nativePrevious ||
  !nativeNext ||
  !coordinatedPrevious ||
  !coordinatedNext ||
  !applyActive ||
  !applyActiveBToA ||
  !undoApply
) {
  throw new Error("Faltan nodos del harness CodeMirror Merge");
}

const statusElement = status;

const merge = new MergeView({
  a: { doc: FIRST },
  b: { doc: SECOND },
  parent: root,
  highlightChanges: true,
  gutter: true,
  diffConfig: {
    scanLimit: 500,
  },
});

merge.a.contentDOM.setAttribute("contenteditable", "false");
merge.b.contentDOM.setAttribute("contenteditable", "false");

let coordinatedIndex = 0;
let executionSnapshotB: ExecutionSnapshot | null = null;
let executionSnapshotA: ExecutionSnapshotA | null = null;
let lastExecution: "A_TO_B" | "B_TO_A" | null = null;

function updateStatus(prefix: string) {
  const total = merge.chunks.length;
  statusElement.textContent =
    total === 0
      ? `${prefix}: sin chunks`
      : `${prefix}: chunk ${coordinatedIndex + 1} de ${total}`;
}

function revealCoordinated(index: number) {
  const chunk = revealChunkOnBothSides(
    merge as unknown as CoordinatedMerge,
    index,
  );

  if (!chunk) return;

  const lineA = merge.a.state.doc.lineAt(chunk.fromA).number;
  const lineB = merge.b.state.doc.lineAt(chunk.fromB).number;
  const contextFromA = merge.a.state.doc.line(Math.max(1, lineA - 2)).from;
  const contextFromB = merge.b.state.doc.line(Math.max(1, lineB - 2)).from;

  const topA = merge.a.lineBlockAt(contextFromA).top;
  const topB = merge.b.lineBlockAt(contextFromB).top;

  // Dejamos dos líneas de contexto anterior cuando existen. Así la
  // navegación no muestra sólo el primer cambio, sino también su referencia
  // estructural inmediata (por ejemplo, el título de la sección).
  merge.dom.scrollTop = Math.max(0, Math.min(topA, topB) - 8);
}

nativePrevious.addEventListener("click", () => {
  goToPreviousChunk(merge.a);
  statusElement.textContent = "Navegación nativa: anterior en A";
});

nativeNext.addEventListener("click", () => {
  goToNextChunk(merge.a);
  statusElement.textContent = "Navegación nativa: siguiente en A";
});

coordinatedPrevious.addEventListener("click", () => {
  if (merge.chunks.length === 0) return;
  coordinatedIndex =
    (coordinatedIndex - 1 + merge.chunks.length) % merge.chunks.length;
  revealCoordinated(coordinatedIndex);
  updateStatus("Navegación coordinada");
});

coordinatedNext.addEventListener("click", () => {
  if (merge.chunks.length === 0) return;
  coordinatedIndex = (coordinatedIndex + 1) % merge.chunks.length;
  revealCoordinated(coordinatedIndex);
  updateStatus("Navegación coordinada");
});

applyActive.addEventListener("click", () => {
  if (merge.chunks.length === 0) return;

  const beforeCount = merge.chunks.length;
  const appliedOrdinal = coordinatedIndex + 1;
  executionSnapshotB = applyChunkAToB(
    merge as unknown as ExecutableMerge,
    coordinatedIndex,
  );

  if (!executionSnapshotB) return;

  executionSnapshotA = null;
  lastExecution = "A_TO_B";

  if (merge.chunks.length > 0) {
    coordinatedIndex = Math.min(coordinatedIndex, merge.chunks.length - 1);
    revealCoordinated(coordinatedIndex);
  } else {
    coordinatedIndex = 0;
  }

  statusElement.textContent =
    `Aplicado A → B: chunk ${appliedOrdinal} de ${beforeCount}. ` +
    `Quedan ${merge.chunks.length} diferencias.`;
});

applyActiveBToA.addEventListener("click", () => {
  if (merge.chunks.length === 0) return;

  const beforeCount = merge.chunks.length;
  const appliedOrdinal = coordinatedIndex + 1;
  executionSnapshotA = applyChunkBToA(
    merge as unknown as ExecutableMerge,
    coordinatedIndex,
  );

  if (!executionSnapshotA) return;

  executionSnapshotB = null;
  lastExecution = "B_TO_A";

  if (merge.chunks.length > 0) {
    coordinatedIndex = Math.min(coordinatedIndex, merge.chunks.length - 1);
    revealCoordinated(coordinatedIndex);
  } else {
    coordinatedIndex = 0;
  }

  statusElement.textContent =
    `Aplicado B → A: chunk ${appliedOrdinal} de ${beforeCount}. ` +
    `Quedan ${merge.chunks.length} diferencias.`;
});

undoApply.addEventListener("click", () => {
  let restored = false;

  if (lastExecution === "A_TO_B") {
    restored = restoreB(
      merge as unknown as ExecutableMerge,
      executionSnapshotB,
    );
  } else if (lastExecution === "B_TO_A") {
    restored = restoreA(
      merge as unknown as ExecutableMerge,
      executionSnapshotA,
    );
  }

  if (!restored) {
    statusElement.textContent = "No hay una aplicación que deshacer.";
    return;
  }

  executionSnapshotA = null;
  executionSnapshotB = null;
  lastExecution = null;

  if (merge.chunks.length > 0) {
    coordinatedIndex = Math.min(coordinatedIndex, merge.chunks.length - 1);
    revealCoordinated(coordinatedIndex);
  } else {
    coordinatedIndex = 0;
  }

  updateStatus("Deshecha la última aplicación");
});

if (merge.chunks.length > 0) {
  revealCoordinated(coordinatedIndex);
}

updateStatus("Inicial");


const compositionRoot = document.getElementById("composition-root");
const compositionStatus = document.getElementById("composition-status");
const compositionStart = document.getElementById("composition-start");
const compositionFinish = document.getElementById("composition-finish");
const compositionCancel = document.getElementById("composition-cancel");

if (
  !compositionRoot ||
  !compositionStatus ||
  !compositionStart ||
  !compositionFinish ||
  !compositionCancel
) {
  throw new Error("Faltan nodos del testigo R5-B");
}

const compositionStatusElement = compositionStatus;

const compositionMerge = new MergeView({
  a: {
    doc: "El plazo será de cinco días y deberá notificarse por escrito.",
  },
  b: {
    doc: "El plazo será de ocho días.",
  },
  parent: compositionRoot,
  highlightChanges: true,
  gutter: true,
});

compositionMerge.a.contentDOM.setAttribute("contenteditable", "false");
compositionMerge.b.contentDOM.setAttribute("contenteditable", "false");

let compositionSnapshotB: string | null = null;
let compositionEditing = false;

function updateCompositionStatus(prefix: string) {
  compositionStatusElement.textContent =
    `${prefix}. Diferencias actuales: ${compositionMerge.chunks.length}`;
}

compositionStart.addEventListener("click", () => {
  if (compositionEditing) return;

  compositionSnapshotB = compositionMerge.b.state.doc.toString();
  compositionEditing = true;
  compositionMerge.b.contentDOM.setAttribute("contenteditable", "true");

  const chunk = compositionMerge.chunks[0];
  if (chunk) {
    compositionMerge.b.dispatch({
      selection: { anchor: chunk.fromB },
      scrollIntoView: true,
    });
  }

  compositionMerge.b.focus();
  updateCompositionStatus("Edición humana de B activada");
});

compositionFinish.addEventListener("click", () => {
  if (!compositionEditing) {
    updateCompositionStatus("No hay composición activa");
    return;
  }

  compositionEditing = false;
  compositionMerge.b.contentDOM.setAttribute("contenteditable", "false");
  compositionSnapshotB = null;
  updateCompositionStatus("Composición finalizada");
});

compositionCancel.addEventListener("click", () => {
  if (!compositionEditing || compositionSnapshotB === null) {
    updateCompositionStatus("No hay composición activa que cancelar");
    return;
  }

  compositionMerge.b.dispatch({
    changes: {
      from: 0,
      to: compositionMerge.b.state.doc.length,
      insert: compositionSnapshotB,
    },
    userEvent: "input.codeMirrorWitness.cancelComposition",
  });

  compositionEditing = false;
  compositionMerge.b.contentDOM.setAttribute("contenteditable", "false");
  compositionSnapshotB = null;
  updateCompositionStatus("Composición cancelada y B restaurado");
});

updateCompositionStatus("Inicial");
