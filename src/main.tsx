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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App resolution={resolution} />
  </React.StrictMode>,
);
