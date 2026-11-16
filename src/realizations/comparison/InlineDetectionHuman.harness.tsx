import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InlineDetectionExperience } from "./InlineDetectionExperience";
import { detectLiteralDifferences } from "./detectLiteralDifferences";

const FIRST = "Plan de implantación del archivo Nexo\n\nEl archivo Nexo se probará durante seis semanas con un grupo inicial de diez expedientes. La finalidad es comprobar si el nuevo recorrido reduce errores de clasificación sin ralentizar la consulta ordinaria.\n\nCada expediente deberá tener una ficha principal, una referencia temporal y una persona responsable identificada. Los documentos sin fecha podrán incorporarse de forma provisional durante un máximo de cinco días.\n\nLa revisión semanal se realizará los viernes. Si aparecen dos incidencias del mismo tipo en una semana, el equipo deberá abrir una revisión específica antes de incorporar nuevos expedientes.\n\nLa opción Sigma permanecerá disponible como recorrido alternativo cuando el procedimiento principal no pueda completarse por una incidencia técnica. Cada uso deberá anotarse por separado.\n\nDurante la prueba no se modificará automáticamente ningún expediente. Cualquier corrección deberá quedar autorizada por la persona responsable del expediente.\n\nAl finalizar la cuarta semana se realizará una revisión intermedia. El piloto podrá ampliarse si al menos ocho de los diez expedientes han completado el recorrido sin incidencias críticas.\n\nLa decisión final se adoptará el último jueves del periodo de prueba. Si quedan incidencias abiertas, la decisión podrá aplazarse tres días.\n\nSi el resultado es positivo, se preparará una propuesta limitada de incorporación al trabajo ordinario.";
const SECOND = "Plan de implantación del archivo Nexo\n\nEl archivo Nexo se probará durante ocho semanas con un grupo inicial de doce expedientes. La finalidad es comprobar si el nuevo recorrido reduce errores de clasificación sin ralentizar la consulta ordinaria.\n\nCada expediente deberá tener una ficha principal, una referencia temporal y una persona responsable identificada. Los documentos sin fecha podrán incorporarse de forma provisional durante un máximo de tres días.\n\nLa revisión semanal se realizará los miércoles. Si aparece una incidencia del mismo tipo en una semana, el equipo deberá abrir una revisión específica antes de incorporar nuevos expedientes.\n\nLa opción Sigma queda descartada como recorrido alternativo cuando el procedimiento principal no pueda completarse por una incidencia técnica.\n\nDurante la prueba no se modificará automáticamente ningún expediente. Cualquier corrección deberá quedar autorizada por la persona responsable del expediente y registrada en la ficha principal.\n\nAl finalizar la quinta semana se realizará una revisión intermedia. El piloto podrá ampliarse si al menos diez de los doce expedientes han completado el recorrido sin incidencias críticas.\n\nLa decisión final se adoptará el último martes del periodo de prueba. Si quedan incidencias abiertas, la decisión podrá aplazarse cinco días.\n\nSi el resultado es positivo, se preparará una propuesta limitada de incorporación al trabajo ordinario.";

const detections = detectLiteralDifferences(FIRST, SECOND);

const root = document.getElementById("inline-detection-human-root");
if (root === null) throw new Error("Falta #inline-detection-human-root");

createRoot(root).render(
  <StrictMode>
    <InlineDetectionExperience
      first={FIRST}
      second={SECOND}
      detections={detections}
    />
  </StrictMode>,
);
