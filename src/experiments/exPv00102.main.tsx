import ReactDOM from "react-dom/client";

import ExPv00102, {
  a0,
  a1,
  aControl,
  type ARef,
} from "./ExPv00102";

import {
  experimentalGGamma,
  experimentalTerminalX,
  experimentalPartPossibleH,
} from "./exPv00102.config";

const mode = import.meta.env.MODE;

const aRefByMode: Record<string, ARef> = {
  "ex-pv00102-a0": a0,
  "ex-pv00102-a1": a1,
  "ex-pv00102-control": aControl,
};

const aRef = aRefByMode[mode];

if (aRef === undefined) {
  throw new Error(
    `Modo experimental no válido para EX-PV001-02: ${mode}`,
  );
}

ReactDOM.createRoot(
  document.getElementById("root")!,
).render(
  <ExPv00102
    aRef={aRef}
    gGamma={experimentalGGamma}
    terminalX={experimentalTerminalX}
    partPossibleH={experimentalPartPossibleH}
  />,
);
