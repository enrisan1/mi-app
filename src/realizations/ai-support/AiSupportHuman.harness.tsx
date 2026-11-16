import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AI_SUPPORT_EVIDENCE } from "./AiSupportEvidence.fixture";
import { AiSupportBaseline } from "./AiSupportBaseline";
import { SeparatedAiSupportExperience } from "./SeparatedAiSupportExperience";

function props() {
  return {
    work: AI_SUPPORT_EVIDENCE.work,
    support: AI_SUPPORT_EVIDENCE.support,
    evidenceId: AI_SUPPORT_EVIDENCE.evidenceId,
    system: AI_SUPPORT_EVIDENCE.system,
    model: AI_SUPPORT_EVIDENCE.model,
  };
}

const baselineRoot = document.getElementById("ai-support-baseline-root");
const witnessRoot = document.getElementById("ai-support-witness-root");

if (!baselineRoot || !witnessRoot) {
  throw new Error("Faltan raíces del harness TH-80-04-01");
}

createRoot(baselineRoot).render(
  <StrictMode>
    <AiSupportBaseline {...props()} />
  </StrictMode>,
);

createRoot(witnessRoot).render(
  <StrictMode>
    <SeparatedAiSupportExperience {...props()} />
  </StrictMode>,
);
