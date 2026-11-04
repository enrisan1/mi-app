import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type ParticipantId = "A" | "B";

type Contribution = {
  participant: ParticipantId;
  content: string;
};

type CollaborativeState = {
  sharedResult: string;
  firstContribution: Contribution | null;
  secondContribution: Contribution | null;
};

type MinimalCollaborativeAntecedent = {
  sharedResult: string;
  firstContribution: Contribution;
};

const INITIAL_STATE: CollaborativeState = {
  sharedResult: "",
  firstContribution: null,
  secondContribution: null,
};

function hasContent(value: string): boolean {
  return value.trim().length > 0;
}

function parseMinimalCollaborativeAntecedent(
  value: string,
): MinimalCollaborativeAntecedent | null {
  try {
    const parsed: unknown = JSON.parse(value);

    if (
      typeof parsed !== "object" ||
      parsed === null ||
      !("sharedResult" in parsed) ||
      !("firstContribution" in parsed)
    ) {
      return null;
    }

    const candidate = parsed as {
      sharedResult?: unknown;
      firstContribution?: unknown;
    };

    if (
      typeof candidate.sharedResult !== "string" ||
      !hasContent(candidate.sharedResult) ||
      typeof candidate.firstContribution !== "object" ||
      candidate.firstContribution === null
    ) {
      return null;
    }

    const contribution = candidate.firstContribution as {
      participant?: unknown;
      content?: unknown;
    };

    if (
      contribution.participant !== "A" ||
      typeof contribution.content !== "string" ||
      !hasContent(contribution.content)
    ) {
      return null;
    }

    return {
      sharedResult: candidate.sharedResult,
      firstContribution: {
        participant: "A",
        content: contribution.content,
      },
    };
  } catch {
    return null;
  }
}

export function CollaborationExperience() {
  const [state, setState] = useLocalStorage<CollaborativeState>(
    "collaboration.state",
    INITIAL_STATE,
  );

  const [sharedResultInput, setSharedResultInput] = useState("");
  const [firstContributionInput, setFirstContributionInput] =
    useState("");
  const [secondContributionInput, setSecondContributionInput] =
    useState("");
  const [transferableAntecedent, setTransferableAntecedent] =
    useState("");
  const [receivedAntecedentInput, setReceivedAntecedentInput] =
    useState("");

  const hasSharedResult = hasContent(state.sharedResult);

  if (!hasSharedResult) {
    return (
      <main>
        <h1>Colaboración mínima</h1>

        <label>
          Resultado compartido inicial
          <textarea
            value={sharedResultInput}
            onChange={(event) =>
              setSharedResultInput(event.target.value)
            }
          />
        </label>

        <button
          type="button"
          disabled={!hasContent(sharedResultInput)}
          onClick={() =>
            setState({
              sharedResult: sharedResultInput,
              firstContribution: null,
              secondContribution: null,
            })
          }
        >
          Constituir resultado compartido
        </button>

        <hr />

        <label>
          Antecedente transferible recibido
          <textarea
            value={receivedAntecedentInput}
            onChange={(event) =>
              setReceivedAntecedentInput(event.target.value)
            }
          />
        </label>

        <button
          type="button"
          disabled={!hasContent(receivedAntecedentInput)}
          onClick={() => {
            const antecedent = parseMinimalCollaborativeAntecedent(
              receivedAntecedentInput,
            );

            if (antecedent === null) {
              return;
            }

            setState({
              sharedResult: antecedent.sharedResult,
              firstContribution: antecedent.firstContribution,
              secondContribution: null,
            });
          }}
        >
          Recibir antecedente transferible
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Colaboración mínima</h1>

      <section aria-labelledby="shared-result-heading">
        <h2 id="shared-result-heading">
          Resultado compartido
        </h2>

        <p aria-label="Contenido del resultado compartido">
          {state.sharedResult}
        </p>
      </section>

      <section aria-labelledby="participant-a-heading">
        <h2 id="participant-a-heading">
          Participante A
        </h2>

        {state.firstContribution === null ? (
          <>
            <p>
              La primera aportación se realiza sobre el resultado
              compartido actual.
            </p>

            <label>
              Aportación de A
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
                setState((current) => ({
                  ...current,
                  firstContribution: {
                    participant: "A",
                    content: firstContributionInput,
                  },
                }))
              }
            >
              Aportar como participante A
            </button>
          </>
        ) : (
          <>
            <p aria-label="Participante de primera aportación">
              {state.firstContribution.participant}
            </p>

            <p aria-label="Contenido de primera aportación">
              {state.firstContribution.content}
            </p>

            <button type="button" disabled>
              Aportar como participante A
            </button>
          </>
        )}
      </section>

      {state.firstContribution !== null && (
        <section aria-labelledby="participant-b-heading">
          <h2 id="participant-b-heading">
            Participante B
          </h2>

          <p>
            B continúa desde el estado colaborativo que contiene
            el resultado compartido y la aportación de A.
          </p>

          <div aria-label="Contexto disponible para participante B">
            <p>
              Resultado compartido:{" "}
              <span>{state.sharedResult}</span>
            </p>

            <p>
              Aportación de A:{" "}
              <span>{state.firstContribution.content}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              const firstContribution = state.firstContribution;

              if (firstContribution === null) {
                return;
              }

              const antecedent: MinimalCollaborativeAntecedent = {
                sharedResult: state.sharedResult,
                firstContribution,
              };

              setTransferableAntecedent(JSON.stringify(antecedent));
            }}
          >
            Generar antecedente transferible
          </button>

          {transferableAntecedent !== "" && (
            <label>
              Antecedente transferible X-CC-01
              <textarea readOnly value={transferableAntecedent} />
            </label>
          )}

          {state.secondContribution === null ? (
            <>
              <h3>Qué puedes hacer ahora</h3>

              <p>
                Continúa el trabajo a partir del resultado compartido y la
                aportación de A.
              </p>

              <label>
                Aportación de B
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
                disabled={!hasContent(secondContributionInput)}
                onClick={() =>
                  setState((current) => ({
                    ...current,
                    secondContribution: {
                      participant: "B",
                      content: secondContributionInput,
                    },
                  }))
                }
              >
                Aportar como participante B
              </button>
            </>
          ) : (
            <>
              <p aria-label="Participante de segunda aportación">
                {state.secondContribution.participant}
              </p>

              <p aria-label="Contenido de segunda aportación">
                {state.secondContribution.content}
              </p>

              <button type="button" disabled>
                Aportar como participante B
              </button>
            </>
          )}
        </section>
      )}

      {state.firstContribution !== null &&
        state.secondContribution !== null && (
          <section aria-labelledby="collaborative-state-heading">
            <h2 id="collaborative-state-heading">
              Estado colaborativo
            </h2>

            <p aria-label="Resultado compartido colaborativo">
              {state.sharedResult}
            </p>

            <p aria-label="Aportación colaborativa de A">
              Participante A:{" "}
              {state.firstContribution.content}
            </p>

            <p aria-label="Aportación colaborativa de B">
              Participante B:{" "}
              {state.secondContribution.content}
            </p>
          </section>
        )}
    </main>
  );
}
