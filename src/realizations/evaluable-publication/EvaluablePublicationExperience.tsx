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

type EvaluationSupport = {
  publishedId: string;
  criterion: string;
  evidence: string;
};

function hasContent(value: string): boolean {
  return value.trim().length > 0;
}

export function EvaluablePublicationExperience() {
  const [current, setCurrent] = useLocalStorage<string | null>(
    "evaluable-publication.current",
    null,
  );

  const [stable, setStable] = useLocalStorage<StableState | null>(
    "evaluable-publication.stable",
    null,
  );

  const [published, setPublished] =
    useLocalStorage<PublishedState | null>(
      "evaluable-publication.published",
      null,
    );

  const [evaluation, setEvaluation] =
    useLocalStorage<EvaluationSupport | null>(
      "evaluable-publication.evaluation",
      null,
    );

  const [initialInput, setInitialInput] = useState("");
  const [criterionInput, setCriterionInput] = useState("");
  const [evidenceInput, setEvidenceInput] = useState("");
  const [evolutionInput, setEvolutionInput] = useState("");

  if (current === null) {
    return (
      <main>
        <h1>Publicación evaluable mínima</h1>

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
          onClick={() => setCurrent(initialInput)}
        >
          Constituir trabajo
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Publicación evaluable mínima</h1>

      <section aria-labelledby="current-work-heading">
        <h2 id="current-work-heading">Trabajo actual</h2>

        <p aria-label="Contenido del trabajo actual">
          {current}
        </p>
      </section>

      <section aria-labelledby="stable-reference-heading">
        <h2 id="stable-reference-heading">
          Referencia estable
        </h2>

        {stable === null ? (
          <button
            type="button"
            onClick={() =>
              setStable({
                id: "S1",
                content: current,
              })
            }
          >
            Conservar como referencia estable
          </button>
        ) : (
          <>
            <p aria-label="Identificador de referencia estable">
              {stable.id}
            </p>

            <p aria-label="Contenido de referencia estable">
              {stable.content}
            </p>

            <button type="button" disabled>
              Conservar como referencia estable
            </button>
          </>
        )}
      </section>

      {stable !== null && (
        <section aria-labelledby="publication-heading">
          <h2 id="publication-heading">
            Estado publicado
          </h2>

          {published === null ? (
            <button
              type="button"
              onClick={() =>
                setPublished({
                  id: "P1",
                  content: stable.content,
                })
              }
            >
              Publicar referencia estable
            </button>
          ) : (
            <>
              <p aria-label="Identificador de estado publicado">
                {published.id}
              </p>

              <p aria-label="Contenido de estado publicado">
                {published.content}
              </p>

              <button type="button" disabled>
                Publicar referencia estable
              </button>
            </>
          )}
        </section>
      )}

      {published !== null && (
        <section aria-labelledby="evaluation-heading">
          <h2 id="evaluation-heading">
            Soporte evaluativo
          </h2>

          {evaluation === null ? (
            <>
              <p>
                El criterio y la evidencia que se indiquen a
                continuación quedarán asociados al estado publicado{" "}
                <strong>{published.id}</strong>.
              </p>

              <label>
                Criterio
                <textarea
                  value={criterionInput}
                  onChange={(event) =>
                    setCriterionInput(event.target.value)
                  }
                />
              </label>

              <label>
                Evidencia
                <textarea
                  value={evidenceInput}
                  onChange={(event) =>
                    setEvidenceInput(event.target.value)
                  }
                />
              </label>

              <button
                type="button"
                disabled={
                  !hasContent(criterionInput) ||
                  !hasContent(evidenceInput)
                }
                onClick={() =>
                  setEvaluation({
                    publishedId: published.id,
                    criterion: criterionInput,
                    evidence: evidenceInput,
                  })
                }
              >
                Asociar soporte evaluativo
              </button>
            </>
          ) : (
            <>
              <p aria-label="Estado publicado evaluado">
                {evaluation.publishedId}
              </p>

              <h3>Criterio asociado</h3>
              <p aria-label="Criterio asociado">
                {evaluation.criterion}
              </p>

              <h3>Evidencia asociada</h3>
              <p aria-label="Evidencia asociada">
                {evaluation.evidence}
              </p>

              <button type="button" disabled>
                Asociar soporte evaluativo
              </button>
            </>
          )}
        </section>
      )}

      <section aria-labelledby="evolution-heading">
        <h2 id="evolution-heading">Continuar trabajando</h2>

        <label>
          Evolución
          <textarea
            value={evolutionInput}
            onChange={(event) =>
              setEvolutionInput(event.target.value)
            }
          />
        </label>

        <button
          type="button"
          disabled={!hasContent(evolutionInput)}
          onClick={() => {
            setCurrent(evolutionInput);
            setEvolutionInput("");
          }}
        >
          Evolucionar
        </button>
      </section>
    </main>
  );
}
