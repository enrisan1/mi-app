import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type StableState = {
  id: string;
  content: string;
};

type PublishedState = {
  id: string;
  content: string;
};

function hasContent(value: string): boolean {
  return value.trim().length > 0;
}

export function PublicationExperience() {
  const [current, setCurrent] = useLocalStorage<string>(
    "publication.current",
    "",
  );

  const [stable, setStable] = useLocalStorage<StableState | null>(
    "publication.stable",
    null,
  );

  const [published, setPublished] = useLocalStorage<PublishedState | null>(
    "publication.published",
    null,
  );

  const [initialInput, setInitialInput] = useState("");
  const [evolutionInput, setEvolutionInput] = useState("");

  if (!hasContent(current)) {
    return (
      <section>
        <h1>Publicación individual mínima</h1>

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
      <h1>Publicación individual mínima</h1>

      <section aria-labelledby="current-work-heading">
        <h2 id="current-work-heading">Trabajo actual</h2>
        <p
          className="preserve-whitespace"
          aria-label="Contenido del trabajo actual"
        >
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

          <p aria-label="Identificador de referencia estable">
            {stable.id}
          </p>

          <p
            className="preserve-whitespace"
            aria-label="Contenido de referencia estable"
          >
            {stable.content}
          </p>

          <button
            type="button"
            disabled={published !== null}
            onClick={() => {
              if (published === null) {
                setPublished({
                  id: "P1",
                  content: stable.content,
                });
              }
            }}
          >
            Publicar referencia estable
          </button>
        </section>
      )}

      {published !== null && (
        <section aria-labelledby="published-state-heading">
          <h2 id="published-state-heading">Estado publicado</h2>

          <p aria-label="Identificador de estado publicado">
            {published.id}
          </p>

          <p
            className="preserve-whitespace"
            aria-label="Contenido de estado publicado"
          >
            {published.content}
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
