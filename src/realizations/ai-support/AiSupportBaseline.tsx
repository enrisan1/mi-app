import { useState } from "react";

type AiSupportBaselineProps = {
  work: string;
  support: string;
  evidenceId: string;
  system: string;
  model: string;
};

const STORAGE_KEY = "r80-04-m1.baseline";

type BaselineState = {
  combined: string;
};

function loadState(initialCombined: string): BaselineState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return { combined: initialCombined };
    }

    const parsed = JSON.parse(raw);

    if (
      typeof parsed === "object" &&
      parsed !== null &&
      typeof parsed.combined === "string"
    ) {
      return parsed as BaselineState;
    }

    return { combined: initialCombined };
  } catch {
    return { combined: initialCombined };
  }
}

function saveState(state: BaselineState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function AiSupportBaseline({
  work,
  support,
  evidenceId,
  system,
  model,
}: AiSupportBaselineProps) {
  const initialCombined = `${work}\n\n[APOYO IA]\n${support}`;
  const [combined, setCombined] = useState(
    () => loadState(initialCombined).combined,
  );

  function updateCombined(value: string) {
    setCombined(value);
    saveState({ combined: value });
  }

  return (
    <main>
      <h1>Apoyo IA — baseline etiquetado</h1>

      <label>
        Contenido de la obra
        <textarea
          value={combined}
          onChange={(event) => updateCombined(event.target.value)}
        />
      </label>

      <section aria-label="Procedencia del apoyo IA">
        <h2>Procedencia del apoyo IA</h2>
        <p>{evidenceId}</p>
        <p>{system}</p>
        <p>{model}</p>
      </section>
    </main>
  );
}
