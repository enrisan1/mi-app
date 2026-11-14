import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../../App";

const materials = [
  {
    "id": "th-80-02-d1",
    "content": "Plan de revisión\n\nEl objetivo es preparar una nota pública sobre el experimento Alfa.\n\nAntes de cerrar la nota deben comprobarse dos fuentes independientes.\n\nLa alternativa Delta permanece disponible si la evidencia principal resulta insuficiente.\n\nLa revisión humana final debe completarse antes del viernes.\n\nSi las comprobaciones se completan, el piloto continuará durante dos semanas antes de una nueva evaluación.\n\nLa decisión final corresponde a la persona responsable de la nota."
  },
  {
    "id": "th-80-02-d2",
    "content": "Plan de revisión\n\nEl objetivo es preparar una nota pública sobre el experimento Alfa.\n\nAntes de cerrar la nota deben comprobarse tres fuentes independientes.\n\nLa alternativa Delta queda descartada aunque la evidencia principal resulte insuficiente.\n\nLa revisión humana final debe completarse antes del miércoles.\n\nSi las comprobaciones se completan, el piloto continuará durante cuatro semanas antes de una nueva evaluación.\n\nLa decisión final corresponde a la persona responsable de la nota."
  }
];

localStorage.setItem("ordinary.materials", JSON.stringify(materials));

const root = document.createElement("div");
root.id = "comparison-baseline-root";
document.body.append(root);

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
