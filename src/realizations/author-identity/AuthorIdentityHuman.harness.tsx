import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthorIdentityBaseline } from "./AuthorIdentityBaseline";
import { AuthorIdentityExperience } from "./AuthorIdentityExperience";

const baselineRoot = document.getElementById("author-identity-baseline-root");
const witnessRoot = document.getElementById("author-identity-witness-root");

if (baselineRoot === null) {
  throw new Error("Falta #author-identity-baseline-root");
}

if (witnessRoot === null) {
  throw new Error("Falta #author-identity-witness-root");
}

createRoot(baselineRoot).render(
  <StrictMode>
    <AuthorIdentityBaseline />
  </StrictMode>,
);

createRoot(witnessRoot).render(
  <StrictMode>
    <AuthorIdentityExperience />
  </StrictMode>,
);
