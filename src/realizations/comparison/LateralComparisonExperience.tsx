import { renderMarkedSource } from "./InlineDetectionExperience";

type DetectionItem = {
  id: string;
  sourceA: string;
  sourceB: string;
};

type LateralComparisonExperienceProps = {
  first: string;
  second: string;
  detections: DetectionItem[];
};

export function LateralComparisonExperience({
  first,
  second,
  detections,
}: LateralComparisonExperienceProps) {
  return (
    <section
      aria-label="Comparación lateral"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
      }}
    >
      <section
        aria-label="Panel documento 1"
        data-scroll-surface="independent"
        style={{
          maxHeight: "24rem",
          overflow: "auto",
        }}
      >
        <h2>Documento 1</h2>
        <div aria-label="Documento 1 fuente">
          {renderMarkedSource(first, detections, "A")}
        </div>
      </section>

      <section
        aria-label="Panel documento 2"
        data-scroll-surface="independent"
        style={{
          maxHeight: "24rem",
          overflow: "auto",
        }}
      >
        <h2>Documento 2</h2>
        <div aria-label="Documento 2 fuente">
          {renderMarkedSource(second, detections, "B")}
        </div>
      </section>
    </section>
  );
}
