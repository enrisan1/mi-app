import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ComparisonExperience } from "./ComparisonExperience";

const root = document.getElementById("comparison-harness-root");

if (root === null) {
  throw new Error("Falta #comparison-harness-root");
}

createRoot(root).render(
  <StrictMode>
    <ComparisonExperience />
  </StrictMode>,
);
