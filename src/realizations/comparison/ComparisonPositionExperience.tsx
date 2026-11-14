import type { CSSProperties } from "react";

type ComparisonPositionExperienceProps = {
  first: string;
  second: string;
};

const surfaceStyle: CSSProperties = {
  maxHeight: "20rem",
  overflow: "auto",
  whiteSpace: "pre-wrap",
};

export function ComparisonPositionExperience({
  first,
  second,
}: ComparisonPositionExperienceProps) {
  return (
    <section aria-label="Situación comparativa con posición independiente">
      <article>
        <h2>Documento 1</h2>
        <div
          aria-label="Superficie documento 1"
          style={surfaceStyle}
          tabIndex={0}
        >
          {first}
        </div>
      </article>

      <article>
        <h2>Documento 2</h2>
        <div
          aria-label="Superficie documento 2"
          style={surfaceStyle}
          tabIndex={0}
        >
          {second}
        </div>
      </article>
    </section>
  );
}