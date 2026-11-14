import { useState } from "react";

type ComparisonSituation = {
  first: string;
  second: string;
};

function hasContent(value: string): boolean {
  return value.trim().length > 0;
}

export function ComparisonExperience() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [comparison, setComparison] = useState<ComparisonSituation | null>(null);
  const [considered, setConsidered] = useState<string | null>(null);

  const canConstitute = hasContent(first) && hasContent(second);

  if (comparison !== null) {
    return (
      <section aria-label="Situación comparativa activa">
        <article>
          <h2>Documento 1</h2>
          <p aria-label="Documento 1 activo">{comparison.first}</p>
          <button
            type="button"
            onClick={() => setConsidered(comparison.first)}
          >
            Considerar documento 1
          </button>
        </article>

        <article>
          <h2>Documento 2</h2>
          <p aria-label="Documento 2 activo">{comparison.second}</p>
          <button
            type="button"
            onClick={() => setConsidered(comparison.second)}
          >
            Considerar documento 2
          </button>
        </article>

        {considered !== null && (
          <p aria-label="Documento considerado">{considered}</p>
        )}

        <button
          type="button"
          onClick={() => {
            setComparison(null);
            setConsidered(null);
          }}
        >
          Salir de comparación
        </button>
      </section>
    );
  }

  return (
    <section>
      <label>
        Documento 1
        <textarea
          value={first}
          onChange={(event) => setFirst(event.target.value)}
        />
      </label>

      <label>
        Documento 2
        <textarea
          value={second}
          onChange={(event) => setSecond(event.target.value)}
        />
      </label>

      <button
        type="button"
        disabled={!canConstitute}
        onClick={() => {
          if (!canConstitute) {
            return;
          }

          setComparison({
            first,
            second,
          });
          setConsidered(null);
        }}
      >
        Constituir comparación
      </button>
    </section>
  );
}
