import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import type { EstablishedResolution } from "./realizations/ru2m1/ResumeExperience";

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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App
      resolution={resolution}
      secondResolution={secondResolution}
      thirdResolution={thirdResolution}
    />
  </React.StrictMode>,
);
