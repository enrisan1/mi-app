import { useState } from "react";
import {
  createFromPrevious,
  isResumeAvailable,
  type SituatedResult,
} from "./resumeModel";
import { localStorageResumeRepository } from "./localStorageResumeRepository";

export function ResumeExperience() {
  const [restoredPrevious] = useState(() =>
    localStorageResumeRepository.loadPrevious(),
  );

  const [currentInput, setCurrentInput] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [result, setResult] = useState<SituatedResult | null>(null);

  if (!isResumeAvailable(restoredPrevious)) {
    return (
      <section>
        <h1>Ahora</h1>

        <label>
          Aportación actual
          <input
            value={currentInput}
            onChange={(event) => {
              setCurrentInput(event.target.value);
              setAccepted(false);
            }}
          />
        </label>

        <button
          type="button"
          onClick={() => {
            if (isResumeAvailable(currentInput)) {
              localStorageResumeRepository.savePrevious(currentInput);
              setAccepted(true);
            }
          }}
        >
          Terminar por ahora
        </button>

        {accepted && <p role="status">Aportación preparada para después.</p>}
      </section>
    );
  }

  if (result !== null) {
    return (
      <section>
        <h1>Retomar</h1>

        <h2>Aportación anterior</h2>
        <p aria-label="Antecedente">{result.previous}</p>

        <h2>Qué has hecho ahora</h2>
        <p aria-label="Actuación actual">{result.current}</p>

        <button
          type="button"
          onClick={() => {
            localStorageResumeRepository.savePrevious(result.current);
          }}
        >
          Terminar por ahora
        </button>
      </section>
    );
  }

  return (
    <section>
      <h1>Retomar</h1>

      <h2>Aportación anterior</h2>
      <p aria-label="Aportación anterior">{restoredPrevious}</p>

      <h2>Qué puedes hacer ahora</h2>

      <label>
        Aportación actual
        <input
          value={currentInput}
          onChange={(event) => setCurrentInput(event.target.value)}
        />
      </label>

      <button
        type="button"
        onClick={() => {
          try {
            setResult(createFromPrevious(restoredPrevious, currentInput));
          } catch {
            // Un Y inválido no constituye X → Y.
          }
        }}
      >
        Crear
      </button>
    </section>
  );
}
