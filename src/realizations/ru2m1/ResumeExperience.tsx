import { useState } from "react";
import {
  createFromPrevious,
  isResumeAvailable,
  type SituatedResult,
} from "./resumeModel";
import { localStorageResumeRepository } from "./localStorageResumeRepository";

export type EstablishedResolution =
  | { contribution: string; kind: "difference"; content: string }
  | { contribution: string; kind: "absence" };

type ResumeExperienceProps = {
  resolution?: EstablishedResolution;
  secondResolution?: EstablishedResolution;
  thirdResolution?: EstablishedResolution;
};

export function ResumeExperience({
  resolution,
  secondResolution,
  thirdResolution,
}: ResumeExperienceProps) {
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

        {accepted ? (
          <div role="status">
            <h2>Lo que has aportado</h2>
            <p className="preserve-whitespace">{currentInput}</p>
          </div>
        ) : (
          <>
            <label>
              Introduce un texto libre
              <textarea
                value={currentInput}
                onChange={(event) => {
                  setCurrentInput(event.target.value);
                  setAccepted(false);
                }}
              />
            </label>

            <p>
              Al crear, este texto quedará disponible para retomarlo después.
            </p>

            <button
              type="button"
              onClick={() => {
                if (isResumeAvailable(currentInput)) {
                  localStorageResumeRepository.savePrevious(currentInput);
                  setAccepted(true);
                }
              }}
            >
              Crear
            </button>
          </>
        )}
      </section>
    );
  }

  if (result !== null) {
    const situatedResolution =
      resolution?.contribution === result.current
        ? resolution
        : secondResolution?.contribution === result.current
          ? secondResolution
          : thirdResolution?.contribution === result.current
            ? thirdResolution
            : undefined;

    return (
      <section>
        <h1>Retomar</h1>

        <h2>Aportación anterior</h2>
        <p className="preserve-whitespace" aria-label="Antecedente">{result.previous}</p>

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
      </section>
    );
  }

  return (
    <section>
      <h1>Retomar</h1>

      <h2>Aportación anterior</h2>
      <p className="preserve-whitespace" aria-label="Aportación anterior">{restoredPrevious}</p>

      {isResumeAvailable(retainedPrevious) && (
        <>
          <h2>Otra aportación disponible</h2>
          <p className="preserve-whitespace" aria-label="Otra aportación disponible">{retainedPrevious}</p>
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
            const nextResult = createFromPrevious(
              restoredPrevious,
              currentInput,
            );

            if (!isResumeAvailable(retainedPrevious)) {
              localStorageResumeRepository.saveRetained(nextResult.previous);
            }

            localStorageResumeRepository.savePrevious(nextResult.current);
            setResult(nextResult);
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
