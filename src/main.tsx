import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { SelectiveLocalizationExperiment } from "./experiments/selective-localization/SelectiveLocalizationExperiment";
import { DefendabilityExperience } from "./realizations/defendability/DefendabilityExperience";
import { IntegratedExperience } from "./realizations/integrated/IntegratedExperience";
import { PublicationExperience } from "./realizations/publication/PublicationExperience";
import { SelectiveLocalizationExperience } from "./realizations/selective-localization/SelectiveLocalizationExperience";
import { StableStateExperience } from "./realizations/stable-state/StableStateExperience";
import type { EstablishedResolution } from "./realizations/ru2m1/ResumeExperience";
import { EvaluablePublicationExperience } from "./realizations/evaluable-publication/EvaluablePublicationExperience";

import "./index.css";

const resolution: EstablishedResolution = {
  contribution:
    "PV-003 dispone de un witness realizativo ejecutable local dentro de R-U2-M1.",
  kind: "difference",
  content:
    "La suficiencia local de la misma experiencia no proporciona fundamento para derivar una realización autónoma para este witness.",
};

const secondResolution: EstablishedResolution = {
  contribution:
    "Para la única pareja concreta C/B ejercida, queda establecida una integración ordinaria local de PV-003.",
  kind: "difference",
  content:
    "Esta conclusión no establece integración general, satisfacción general o completa de PV-003 ni resolución para cualquier aportación.",
};

const thirdResolution: EstablishedResolution = {
  contribution:
    "Dos resoluciones reales distintas y previamente legitimadas pueden coexistir en la misma entrada ordinaria manteniendo correspondencias independientes.",
  kind: "difference",
  content:
    "La evidencia descarta imponer unicidad global de resolución, pero no establece cardinalidad arbitraria, colección ni búsqueda general de resoluciones.",
};

const searchParams = new URLSearchParams(window.location.search);

const experiment = searchParams.get("experiment");
const realization = searchParams.get("realization");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {experiment === "selective-localization" ? (
      <SelectiveLocalizationExperiment />
    ) : realization === "selective-localization" ? (
      <SelectiveLocalizationExperience />
    ) : realization === "integrated" ? (
      <IntegratedExperience />
    ) : realization === "defendability" ? (
      <DefendabilityExperience />
    ) : realization === "stable-state" ? (
      <StableStateExperience />
    ) : realization === "publication" ? (
      <PublicationExperience />
    ) : realization === "evaluable-publication" ? (
      <EvaluablePublicationExperience />
    ) : (
      <App
        resolution={resolution}
        secondResolution={secondResolution}
        thirdResolution={thirdResolution}
      />
    )}
  </React.StrictMode>,
);
