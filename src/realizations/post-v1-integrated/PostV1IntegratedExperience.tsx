import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type StableState = {
  id: "S1";
  content: string;
};

type PublishedState = {
  id: "P1";
  sourceStableId: "S1";
  content: string;
};

type EvaluationSupport = {
  publishedId: "P1";
  criterion: string;
  evidence: string;
};

type Contribution = {
  participant: "A" | "B";
  content: string;
};

type CollaborativeState = {
  sourcePublishedId: "P1";
  sharedResult: string;
  firstContribution: Contribution;
  secondContribution: Contribution | null;
};

type ExchangeArtifact = {
  id: "X1";
  sourcePublishedId: "P1";
  content: string;
};

type ReceivedState = {
  sourceArtifactId: "X1";
  content: string;
};

type PostV1IntegratedState = {
  current: string | null;
  stable: StableState | null;
  published: PublishedState | null;
  evaluation: EvaluationSupport | null;
  collaboration: CollaborativeState | null;
  artifact: ExchangeArtifact | null;
  received: ReceivedState | null;
};

const INITIAL_STATE: PostV1IntegratedState = {
  current: null,
  stable: null,
  published: null,
  evaluation: null,
  collaboration: null,
  artifact: null,
  received: null,
};

function hasContent(value: string): boolean {
  return value.trim().length > 0;
}

type PostV1IntegratedExperienceProps = {
  initialCurrent?: string;
};

export function PostV1IntegratedExperience({
  initialCurrent,
}: PostV1IntegratedExperienceProps) {
  const initialState: PostV1IntegratedState =
    initialCurrent !== undefined && hasContent(initialCurrent)
      ? {
          ...INITIAL_STATE,
          current: initialCurrent,
        }
      : INITIAL_STATE;

  const [state, setState] =
    useLocalStorage<PostV1IntegratedState>(
      "post-v1-integrated.state",
      initialState,
    );

  const [currentInput, setCurrentInput] = useState("");
  const [evolutionInput, setEvolutionInput] = useState("");
  const [criterionInput, setCriterionInput] = useState("");
  const [evidenceInput, setEvidenceInput] = useState("");
  const [firstContributionInput, setFirstContributionInput] =
    useState("");
  const [secondContributionInput, setSecondContributionInput] =
    useState("");

  const {
    current,
    stable,
    published,
    evaluation,
    collaboration,
    artifact,
    received,
  } = state;

  return (
    <main>
      <h1>Integración post-V1</h1>

      <section aria-labelledby="current-heading">
        <h2 id="current-heading">Trabajo actual</h2>

        {current === null ? (
          <>
            <label>
              Contenido actual
              <textarea
                value={currentInput}
                onChange={(event) =>
                  setCurrentInput(event.target.value)
                }
              />
            </label>

            <button
              type="button"
              disabled={!hasContent(currentInput)}
              onClick={() =>
                setState({
                  ...state,
                  current: currentInput,
                })
              }
            >
              Constituir R1
            </button>
          </>
        ) : (
          <>
            <p aria-label="Contenido del trabajo actual">
              {current}
            </p>

            {stable !== null && (
              <>
                <label>
                  Evolución del trabajo actual
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
                    setState({
                      ...state,
                      current: evolutionInput,
                    });
                    setEvolutionInput("");
                  }}
                >
                  Evolucionar trabajo actual
                </button>
              </>
            )}
          </>
        )}
      </section>

      {current !== null && (
        <section aria-labelledby="stable-heading">
          <h2 id="stable-heading">Estado estable</h2>

          {stable === null ? (
            <button
              type="button"
              onClick={() =>
                setState({
                  ...state,
                  stable: {
                    id: "S1",
                    content: current,
                  },
                })
              }
            >
              Constituir S1 desde R1
            </button>
          ) : (
            <>
              <p aria-label="Identificador del estado estable">
                {stable.id}
              </p>

              <p aria-label="Contenido del estado estable">
                {stable.content}
              </p>
            </>
          )}
        </section>
      )}

      {stable !== null && (
        <section aria-labelledby="publication-heading">
          <h2 id="publication-heading">Publicación</h2>

          {published === null ? (
            <button
              type="button"
              onClick={() =>
                setState({
                  ...state,
                  published: {
                    id: "P1",
                    sourceStableId: stable.id,
                    content: stable.content,
                  },
                })
              }
            >
              Publicar P1 desde S1
            </button>
          ) : (
            <>
              <p aria-label="Identificador de la publicación">
                {published.id}
              </p>

              <p aria-label="Estado estable de origen">
                {published.sourceStableId}
              </p>

              <p aria-label="Contenido publicado">
                {published.content}
              </p>
            </>
          )}
        </section>
      )}

      {published !== null && (
        <section aria-labelledby="evaluation-heading">
          <h2 id="evaluation-heading">Soporte evaluativo</h2>

          {evaluation === null ? (
            <>
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
                  setState({
                    ...state,
                    evaluation: {
                      publishedId: published.id,
                      criterion: criterionInput,
                      evidence: evidenceInput,
                    },
                  })
                }
              >
                Asociar soporte evaluativo
              </button>
            </>
          ) : (
            <>
              <p aria-label="Publicación evaluada">
                {evaluation.publishedId}
              </p>

              <p aria-label="Criterio evaluativo">
                {evaluation.criterion}
              </p>

              <p aria-label="Evidencia evaluativa">
                {evaluation.evidence}
              </p>
            </>
          )}
        </section>
      )}

      {evaluation !== null && published !== null && (
        <section aria-labelledby="collaboration-heading">
          <h2 id="collaboration-heading">Colaboración</h2>

          {collaboration === null ? (
            <>
              <p aria-label="Publicación disponible para colaboración">
                {published.id}
              </p>

              <p aria-label="Resultado compartido">
                {published.content}
              </p>

              <label>
                Contribución de participante A
                <textarea
                  value={firstContributionInput}
                  onChange={(event) =>
                    setFirstContributionInput(event.target.value)
                  }
                />
              </label>

              <button
                type="button"
                disabled={!hasContent(firstContributionInput)}
                onClick={() =>
                  setState({
                    ...state,
                    collaboration: {
                      sourcePublishedId: published.id,
                      sharedResult: published.content,
                      firstContribution: {
                        participant: "A",
                        content: firstContributionInput,
                      },
                      secondContribution: null,
                    },
                  })
                }
              >
                Añadir A1
              </button>
            </>
          ) : (
            <>
              <p aria-label="Publicación de origen de la colaboración">
                {collaboration.sourcePublishedId}
              </p>

              <p aria-label="Resultado compartido">
                {collaboration.sharedResult}
              </p>

              <p aria-label="Participante de la primera contribución">
                {collaboration.firstContribution.participant}
              </p>

              <p aria-label="Primera contribución">
                {collaboration.firstContribution.content}
              </p>

              {collaboration.secondContribution === null ? (
                <>
                  <label>
                    Contribución de participante B
                    <textarea
                      value={secondContributionInput}
                      onChange={(event) =>
                        setSecondContributionInput(
                          event.target.value,
                        )
                      }
                    />
                  </label>

                  <button
                    type="button"
                    disabled={
                      !hasContent(secondContributionInput)
                    }
                    onClick={() =>
                      setState({
                        ...state,
                        collaboration: {
                          ...collaboration,
                          secondContribution: {
                            participant: "B",
                            content: secondContributionInput,
                          },
                        },
                      })
                    }
                  >
                    Añadir B1
                  </button>
                </>
              ) : (
                <>
                  <p aria-label="Participante de la segunda contribución">
                    {collaboration.secondContribution.participant}
                  </p>

                  <p aria-label="Segunda contribución">
                    {collaboration.secondContribution.content}
                  </p>
                </>
              )}
            </>
          )}
        </section>
      )}

      {collaboration !== null &&
        collaboration.secondContribution !== null &&
        published !== null && (
          <section aria-labelledby="exchange-heading">
            <h2 id="exchange-heading">Intercambio</h2>

            {artifact === null ? (
              <button
                type="button"
                onClick={() =>
                  setState({
                    ...state,
                    artifact: {
                      id: "X1",
                      sourcePublishedId: published.id,
                      content: published.content,
                    },
                  })
                }
              >
                Generar X1 desde P1
              </button>
            ) : (
              <>
                <p aria-label="Identificador del artefacto">
                  {artifact.id}
                </p>

                <p aria-label="Publicación de origen del artefacto">
                  {artifact.sourcePublishedId}
                </p>

                <p aria-label="Contenido del artefacto">
                  {artifact.content}
                </p>
              </>
            )}
          </section>
        )}

      {artifact !== null && (
        <section aria-labelledby="destination-heading">
          <h2 id="destination-heading">Destino</h2>

          {received === null ? (
            <button
              type="button"
              onClick={() =>
                setState({
                  ...state,
                  received: {
                    sourceArtifactId: artifact.id,
                    content: artifact.content,
                  },
                })
              }
            >
              Constituir D1 desde X1
            </button>
          ) : (
            <>
              <p aria-label="Artefacto de origen del estado recibido">
                {received.sourceArtifactId}
              </p>

              <p aria-label="Contenido recibido">
                {received.content}
              </p>
            </>
          )}
        </section>
      )}
    </main>
  );
}
