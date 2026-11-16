import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextualCaptureBaseline } from "./ContextualCaptureBaseline";
import { ContextualCaptureExperience } from "./ContextualCaptureExperience";

const baselineRoot = document.getElementById("capture-baseline-root");
const witnessRoot = document.getElementById("capture-witness-root");

if (baselineRoot === null) {
  throw new Error("Falta #capture-baseline-root");
}

if (witnessRoot === null) {
  throw new Error("Falta #capture-witness-root");
}

createRoot(baselineRoot).render(
  <StrictMode>
    <ContextualCaptureBaseline />
  </StrictMode>,
);

createRoot(witnessRoot).render(
  <StrictMode>
    <ContextualCaptureExperience />
  </StrictMode>,
);
