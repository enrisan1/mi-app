import {
  a0,
  a1,
  aControl,
  x1,
  x2,
  x3,
  type ARef,
  type GGamma,
  type XRef,
} from "./ExPv00102";

export const experimentalGGamma: GGamma = new Map<ARef, XRef>([
  [a0, x1],
  [a1, x3],
  [aControl, x2],
]);

export const experimentalTerminalX: XRef = x3;

export const experimentalPartPossibleH = true;
