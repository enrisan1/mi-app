import type { ReactElement } from "react";

type DetectionItem = {
  id: string;
  sourceA: string;
  sourceB: string;
};

type InlineDetectionExperienceProps = {
  first: string;
  second: string;
  detections: DetectionItem[];
};

type Side = "A" | "B";

export function renderMarkedSource(
  text: string,
  detections: DetectionItem[],
  side: Side,
) {
  const fragmentKey = side === "A" ? "sourceA" : "sourceB";
  const docNumber = side === "A" ? 1 : 2;

  const nonEmpty = detections
    .map((detection) => ({
      detection,
      fragment: detection[fragmentKey],
    }))
    .filter(({ fragment }) => fragment !== "");

  const occurrences = nonEmpty
    .map(({ detection, fragment }) => {
      const index = text.indexOf(fragment);
      return { detection, fragment, index };
    })
    .filter(({ index }) => index >= 0)
    .sort((left, right) => left.index - right.index);

  const nodes: ReactElement[] = [];
  let cursor = 0;

  for (const { detection, fragment, index } of occurrences) {
    if (index < cursor) {
      continue;
    }

    if (index > cursor) {
      nodes.push(
        <span key={`text-${docNumber}-${cursor}`}>
          {text.slice(cursor, index)}
        </span>,
      );
    }

    nodes.push(
      <mark
        key={`detection-${docNumber}-${detection.id}`}
        aria-label={`Detección ${detection.id} documento ${docNumber}`}
      >
        {fragment}
      </mark>,
    );

    cursor = index + fragment.length;
  }

  if (cursor < text.length) {
    nodes.push(
      <span key={`text-${docNumber}-tail`}>{text.slice(cursor)}</span>,
    );
  }

  for (const detection of detections) {
    const fragment = detection[fragmentKey];
    if (fragment !== "") {
      continue;
    }

    nodes.push(
      <mark
        key={`empty-${docNumber}-${detection.id}`}
        aria-label={`Detección ${detection.id} documento ${docNumber}`}
      />,
    );
  }

  return nodes;
}

export function InlineDetectionExperience({
  first,
  second,
  detections,
}: InlineDetectionExperienceProps) {
  return (
    <section aria-label="Comparación con diferencias situadas">
      <section>
        <h2>Documento 1</h2>
        <div aria-label="Documento 1 fuente">
          {renderMarkedSource(first, detections, "A")}
        </div>
      </section>

      <section>
        <h2>Documento 2</h2>
        <div aria-label="Documento 2 fuente">
          {renderMarkedSource(second, detections, "B")}
        </div>
      </section>
    </section>
  );
}
