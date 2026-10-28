import { useState } from "react";

type Phase = "setup" | "experiment";
type Condition = "positive" | "negative";
type CandidateId = "A" | "B" | "C" | "D";

const candidates = [
  {
    id: "A",
    cue: "Material A",
    content:
      "Una nota anterior sobre una cuestión distinta relacionada con α.",
  },
  {
    id: "B",
    cue: "Material B",
    content:
      "Un resultado anterior sobre una cuestión distinta relacionada con β.",
  },
  {
    id: "C",
    cue: "Material C",
    content:
      "Un material anterior que desarrolla el argumento γ necesario para reconsiderar la cuestión actual.",
  },
  {
    id: "D",
    cue: "Material D",
    content:
      "Una observación anterior sobre una cuestión distinta relacionada con δ.",
  },
] as const;

const need =
  "Necesito volver a considerar el material anterior que desarrollaba el argumento γ.";

export function SelectiveLocalizationExperiment() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [condition, setCondition] = useState<Condition | null>(null);
  const [inspectionOpen, setInspectionOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] =
    useState<CandidateId | null>(null);
  const [directControlOpen, setDirectControlOpen] = useState(false);

  const start = (nextCondition: Condition) => {
    setPhase("experiment");
    setCondition(nextCondition);
    setInspectionOpen(false);
    setSelectedCandidate(null);
    setDirectControlOpen(false);
  };

  if (phase === "setup") {
    return (
      <section>
        <h1>Experimento de localización selectiva posterior</h1>

        <p>Materiales constituidos:</p>

        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.id}>
              <strong>{candidate.cue}</strong>: {candidate.content}
            </li>
          ))}
        </ul>

        <button type="button" onClick={() => start("positive")}>
          Iniciar condición positiva
        </button>

        <button type="button" onClick={() => start("negative")}>
          Iniciar condición negativa
        </button>
      </section>
    );
  }

  const controlCandidate = candidates.find(
    (candidate) => candidate.id === "C",
  )!;

  return (
    <section>
      <h1>Experimento de localización selectiva posterior</h1>

      <p>{need}</p>

      {condition === "positive" && !inspectionOpen && (
        <button type="button" onClick={() => setInspectionOpen(true)}>
          Examinar materiales previos
        </button>
      )}

      {condition === "positive" && inspectionOpen && (
        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.id}>
              <strong>{candidate.cue}</strong>: {candidate.content}
              <button
                type="button"
                onClick={() => setSelectedCandidate(candidate.id)}
              >
                Considerar {candidate.id}
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedCandidate !== null && (
        <p>Material considerado: {selectedCandidate}</p>
      )}

      {condition === "negative" && !directControlOpen && (
        <button type="button" onClick={() => setDirectControlOpen(true)}>
          Proporcionar material de control
        </button>
      )}

      {condition === "negative" && directControlOpen && (
        <div>
          <p>Material proporcionado directamente:</p>
          <p>
            <strong>{controlCandidate.cue}</strong>: {controlCandidate.content}
          </p>
        </div>
      )}
    </section>
  );
}
