import { useState } from "react";
import {
  createFromPrevious,
  isResumeAvailable,
  type SituatedResult,
} from "./resumeModel";
import { localStorageResumeRepository } from "./localStorageResumeRepository";

type EstablishedResolution =
  | { contribution: string; kind: "difference"; content: string }
  | { contribution: string; kind: "absence" };

type ResumeExperienceProps = {
  resolution?: EstablishedResolution;
};

export function ResumeExperience({ resolution }: ResumeExperienceProps) {
  const [restoredPrevious] = useState(() =>
    localStorageResumeRepository.loadPrevious(),
  );

  const [retainedPrevious] = useState(() =>
    localStorageResumeRepository.loadRetained(),
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
    const situatedResolution =
      resolution?.contribution === result.current ? resolution : undefined;

    return (
      <section>
        <h1>Retomar</h1>

        <h2>Aportación anterior</h2>
        <p aria-label="Antecedente">{result.previous}</p>

        <h2>Qué has hecho ahora</h2>
        <p aria-label="Actuación actual">{result.current}</p>

        {situatedResolution && (
          <div aria-labelledby="established-resolution-heading">
            <h2 id="established-resolution-heading">
              Qué ha quedado establecido para esta aportación
            </h2>

            {situatedResolution.kind === "difference" ? (
              <p>{situatedResolution.content}</p>
            ) : (
              <p>
                No hay una nueva diferencia establecida disponible para
                presentar.
              </p>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            localStorageResumeRepository.saveRetained(result.previous);
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

      {isResumeAvailable(retainedPrevious) && (
        <>
          <h2>Otra aportación disponible</h2>
          <p aria-label="Otra aportación disponible">{retainedPrevious}</p>
        </>
      )}

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
