import { useState } from "react";
import {
  continueFromPrevious,
  isContinuationAvailable,
  type ContinuationResult,
} from "./experimentModel";

export function Pv001Experiment() {
  const [previous, setPrevious] = useState<string | null>(null);
  const [previousInput, setPreviousInput] = useState("");
  const [continuationInput, setContinuationInput] = useState("");
  const [result, setResult] = useState<ContinuationResult | null>(null);

  if (previous === null) {
    return (
      <section>
        <h1>Situación 1</h1>

        <label>
          Idea inicial
          <input
            value={previousInput}
            onChange={(event) => setPreviousInput(event.target.value)}
          />
        </label>

        <button
          type="button"
          onClick={() => {
            if (isContinuationAvailable(previousInput)) {
              setPrevious(previousInput);
            }
          }}
        >
          Continuar
        </button>
      </section>
    );
  }

  if (result !== null) {
    return (
      <section>
        <h1>Situación 2</h1>

        <p aria-label="Aportación anterior">{result.previous}</p>

        <p aria-label="Continuación">{result.continuation}</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Situación 2</h1>

      <p aria-label="Aportación anterior">{previous}</p>

      <label>
        Continúa esta elaboración
        <input
          value={continuationInput}
          onChange={(event) => setContinuationInput(event.target.value)}
        />
      </label>

      <button
        type="button"
        onClick={() => {
          try {
            setResult(continueFromPrevious(previous, continuationInput));
          } catch {
            // Una entrada inválida no completa H(A).
          }
        }}
      >
        Finalizar
      </button>
    </section>
  );
}
