import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { LateralComparisonExperience } from "./LateralComparisonExperience";
import { ComparisonProgress } from "./ComparisonProgress";
import { detectLiteralDifferences } from "./detectLiteralDifferences";

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

const detections = detectLiteralDifferences(FIRST, SECOND);

function HumanContrast() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = detections[activeIndex] ?? null;

  return (
    <>
      <div aria-label="Control auxiliar del contraste">
        <button
          type="button"
          onClick={() => setActiveIndex((index) => Math.max(0, index - 1))}
          disabled={activeIndex === 0}
        >
          Registrar anterior
        </button>
        <button
          type="button"
          onClick={() =>
            setActiveIndex((index) =>
              Math.min(detections.length - 1, index + 1),
            )
          }
          disabled={activeIndex >= detections.length - 1}
        >
          Registrar siguiente
        </button>
        <p>
          Este control sólo cambia el ordinal. No mueve ni sincroniza los paneles.
        </p>
      </div>

      <ComparisonProgress
        detections={detections}
        activeDetectionId={active?.id ?? null}
      />

      <LateralComparisonExperience
        first={FIRST}
        second={SECOND}
        detections={detections}
      />
    </>
  );
}

const root = document.getElementById("progress-human-root");
if (root === null) throw new Error("Falta #progress-human-root");

createRoot(root).render(
  <StrictMode>
    <HumanContrast />
  </StrictMode>,
);
