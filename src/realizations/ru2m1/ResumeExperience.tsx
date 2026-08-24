import { useState } from "react";
import {
  createFromPrevious,
  isResumeAvailable,
  type SituatedResult,
} from "./resumeModel";
import { localStorageResumeRepository } from "./localStorageResumeRepository";

export function ResumeExperience() {
  const restoredPrevious = localStorageResumeRepository.loadPrevious();

  const [currentInput, setCurrentInput] = useState("");
  const [result, setResult] = useState<SituatedResult | null>(null);

  if (!isResumeAvailable(restoredPrevious)) {
    return (
      <section>
        <h1>Ahora</h1>

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
            if (isResumeAvailable(currentInput)) {
              localStorageResumeRepository.savePrevious(currentInput);
            }
          }}
        >
          Terminar por ahora
        </button>
      </section>
    );
  }

  if (result !== null) {
    return (
      <section>
        <h1>De antes</h1>

        <p aria-label="Antecedente">{result.previous}</p>

        <p aria-label="Actuación actual">{result.current}</p>
      </section>
    );
  }

  return (
    <section>
      <h1>De antes</h1>

      <p aria-label="Aportación anterior">{restoredPrevious}</p>

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
