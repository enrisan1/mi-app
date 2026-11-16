import { InlineDetectionExperience } from "./InlineDetectionExperience";

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
        <InlineDetectionExperience
          first={first}
          second=""
          detections={detections.map((detection) => ({
            ...detection,
            sourceB: "",
          }))}
        />
      </section>

      <section
        aria-label="Panel documento 2"
        data-scroll-surface="independent"
        style={{
          maxHeight: "24rem",
          overflow: "auto",
        }}
      >
        <InlineDetectionExperience
          first=""
          second={second}
          detections={detections.map((detection) => ({
            ...detection,
            sourceA: "",
          }))}
        />
      </section>
    </section>
  );
}
