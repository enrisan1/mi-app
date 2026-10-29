import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type PublishedState = {
  id: string;
  content: string;
};

type ExchangeArtifact = {
  id: string;
  sourcePublishedId: string;
  content: string;
};

type ReceivedState = {
  sourceArtifactId: string;
  content: string;
};

function hasContent(value: string): boolean {
  return value.trim().length > 0;
}

export function ExchangeExperience() {
  const [originPublished, setOriginPublished] =
    useLocalStorage<PublishedState | null>(
      "exchange.originPublished",
      null,
    );

  const [exchangeArtifact, setExchangeArtifact] =
    useLocalStorage<ExchangeArtifact | null>(
      "exchange.artifact",
      null,
    );

  const [destinationReceived, setDestinationReceived] =
    useLocalStorage<ReceivedState | null>(
      "exchange.destinationReceived",
      null,
    );

  const [originInput, setOriginInput] = useState("");

  if (originPublished === null) {
    return (
      <main>
        <h1>Intercambio / difusión mínima</h1>

        <section aria-labelledby="origin-heading">
          <h2 id="origin-heading">Instancia origen</h2>

          <label>
            Contenido de origen
            <textarea
              value={originInput}
              onChange={(event) =>
                setOriginInput(event.target.value)
              }
            />
          </label>

          <button
            type="button"
            disabled={!hasContent(originInput)}
            onClick={() =>
              setOriginPublished({
                id: "P1",
                content: originInput,
              })
            }
          >
            Constituir estado publicado de origen
          </button>
        </section>
      </main>
    );
  }

  return (
    <main>
      <h1>Intercambio / difusión mínima</h1>

      <section aria-labelledby="origin-heading">
        <h2 id="origin-heading">Instancia origen</h2>

        <p aria-label="Identificador del estado publicado de origen">
          {originPublished.id}
        </p>

        <p aria-label="Contenido del estado publicado de origen">
          {originPublished.content}
        </p>

        {exchangeArtifact === null ? (
          <button
            type="button"
            onClick={() =>
              setExchangeArtifact({
                id: "X1",
                sourcePublishedId: originPublished.id,
                content: originPublished.content,
              })
            }
          >
            Generar artefacto de intercambio
          </button>
        ) : (
          <button type="button" disabled>
            Generar artefacto de intercambio
          </button>
        )}
      </section>

      {exchangeArtifact !== null && (
        <section aria-labelledby="artifact-heading">
          <h2 id="artifact-heading">
            Artefacto de intercambio
          </h2>

          <p aria-label="Identificador del artefacto de intercambio">
            {exchangeArtifact.id}
          </p>

          <p aria-label="Estado publicado de origen del artefacto">
            {exchangeArtifact.sourcePublishedId}
          </p>

          <p aria-label="Contenido del artefacto de intercambio">
            {exchangeArtifact.content}
          </p>
        </section>
      )}

      <section aria-labelledby="destination-heading">
        <h2 id="destination-heading">
          Instancia destino
        </h2>

        {exchangeArtifact === null ? (
          <p role="status">
            No hay ningún artefacto disponible para recibir.
          </p>
        ) : destinationReceived === null ? (
          <>
            <p>
              El destino sólo puede constituir su estado recibido
              a partir del artefacto de intercambio disponible.
            </p>

            <button
              type="button"
              onClick={() =>
                setDestinationReceived({
                  sourceArtifactId: exchangeArtifact.id,
                  content: exchangeArtifact.content,
                })
              }
            >
              Recibir artefacto en destino
            </button>
          </>
        ) : (
          <>
            <p aria-label="Artefacto recibido en destino">
              {destinationReceived.sourceArtifactId}
            </p>

            <p aria-label="Contenido recibido en destino">
              {destinationReceived.content}
            </p>

            <button type="button" disabled>
              Recibir artefacto en destino
            </button>
          </>
        )}
      </section>
    </main>
  );
}
