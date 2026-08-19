import ReactDOM from "react-dom/client";

import ExPv00101 from "./ExPv00101";

const mode = import.meta.env.MODE;

if (mode !== "ex-positive" && mode !== "ex-negative") {
  throw new Error(`Modo experimental no válido: ${mode}`);
}

const condition = mode === "ex-positive" ? "E+" : "E−";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ExPv00101 condition={condition} />,
);
