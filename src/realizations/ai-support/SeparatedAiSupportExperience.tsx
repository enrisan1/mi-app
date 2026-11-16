import { useState } from "react";

type SeparatedAiSupportExperienceProps = {
  work: string;
  support: string;
  evidenceId: string;
  system: string;
  model: string;
};

const WORK_STORAGE_KEY = "r80-04-m1.separated.work";
const SUPPORT_STORAGE_KEY = "r80-04-m1.separated.support";

function loadStored(key: string, fallback: string) {
  const stored = localStorage.getItem(key);
  return stored ?? fallback;
}

export function SeparatedAiSupportExperience({
  work,
  support,
  evidenceId,
  system,
  model,
}: SeparatedAiSupportExperienceProps) {
  const [workValue, setWorkValue] = useState(() =>
    loadStored(WORK_STORAGE_KEY, work),
  );
  const [supportValue] = useState(() =>
    loadStored(SUPPORT_STORAGE_KEY, support),
  );

  if (localStorage.getItem(SUPPORT_STORAGE_KEY) === null) {
    localStorage.setItem(SUPPORT_STORAGE_KEY, supportValue);
  }

  function updateWork(value: string) {
    setWorkValue(value);
    localStorage.setItem(WORK_STORAGE_KEY, value);
  }

  return (
    <main>
      <h1>Apoyo IA separado de la obra</h1>

      <section aria-label="Obra en curso">
        <h2>Obra en curso</h2>

        <label>
          Contenido de la obra
          <textarea
            value={workValue}
            onChange={(event) => updateWork(event.target.value)}
          />
        </label>
      </section>

      <section aria-label="Apoyo auxiliar de IA">
        <h2>Apoyo auxiliar de IA</h2>
        <p>{supportValue}</p>
      </section>

      <section aria-label="Procedencia del apoyo IA">
        <h2>Procedencia del apoyo IA</h2>
        <p>{evidenceId}</p>
        <p>{system}</p>
        <p>{model}</p>
      </section>
    </main>
  );
}
