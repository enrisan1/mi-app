import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type StableState = {
  id: string;
  content: string;
};

function hasContent(value: string): boolean {
  return value.trim().length > 0;
}

export function StableStateExperience() {
  const [current, setCurrent] = useLocalStorage<string>(
    "stable-state.current",
    "",
  );

  const [stable, setStable] = useLocalStorage<StableState | null>(
    "stable-state.stable",
    null,
  );

  const [initialInput, setInitialInput] = useState("");
  const [evolutionInput, setEvolutionInput] = useState("");

  if (!hasContent(current)) {
    return (
      <section>
        <h1>Estado significativo estable</h1>

        <label>
          Trabajo inicial
          <textarea
            value={initialInput}
            onChange={(event) => setInitialInput(event.target.value)}
          />
        </label>

        <button
          type="button"
          disabled={!hasContent(initialInput)}
          onClick={() => {
            if (!hasContent(initialInput)) {
              return;
            }

            setCurrent(initialInput);
            setInitialInput("");
          }}
        >
          Constituir trabajo
        </button>
      </section>
    );
  }

  return (
    <section>
      <h1>Estado significativo estable</h1>

      <section aria-labelledby="current-work-heading">
        <h2 id="current-work-heading">Trabajo actual</h2>
        <p className="preserve-whitespace" aria-label="Contenido del trabajo actual">
          {current}
        </p>

        <button
          type="button"
          disabled={stable !== null}
          onClick={() => {
            if (stable === null) {
              setStable({
                id: "S1",
                content: current,
              });
            }
          }}
        >
          Conservar como referencia estable
        </button>
      </section>

      {stable !== null && (
        <section aria-labelledby="stable-reference-heading">
          <h2 id="stable-reference-heading">Referencia estable</h2>
          <p aria-label="Identificador de referencia">{stable.id}</p>
          <p
            className="preserve-whitespace"
            aria-label="Contenido de referencia estable"
          >
            {stable.content}
          </p>
        </section>
      )}

      <section aria-labelledby="evolution-heading">
        <h2 id="evolution-heading">Continuar trabajando</h2>

        <label>
          Evolución
          <textarea
            value={evolutionInput}
            onChange={(event) => setEvolutionInput(event.target.value)}
          />
        </label>

        <button
          type="button"
          disabled={!hasContent(evolutionInput)}
          onClick={() => {
            if (!hasContent(evolutionInput)) {
              return;
            }

            setCurrent(evolutionInput);
            setEvolutionInput("");
          }}
        >
          Evolucionar
        </button>
      </section>
    </section>
  );
}
