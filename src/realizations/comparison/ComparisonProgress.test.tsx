import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

type DetectionItem = {
  id: string;
  sourceA: string;
  sourceB: string;
};

type ComparisonProgressProps = {
  detections: DetectionItem[];
  activeDetectionId: string | null;
};

type ComparisonProgressComponent = (
  props: ComparisonProgressProps,
) => ReactElement | null;

async function loadProgress(): Promise<ComparisonProgressComponent> {
  const modules = import.meta.glob<{
    ComparisonProgress: ComparisonProgressComponent;
  }>("./ComparisonProgress.tsx");

  const load = modules["./ComparisonProgress.tsx"];

  expect(
    load,
    "R-80-02-M7 ausente: falta ./ComparisonProgress.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-02-M7 ausente");
  }

  return (await load()).ComparisonProgress;
}

const DETECTIONS: DetectionItem[] = [
  { id: "d-1", sourceA: "ocho", sourceB: "doce" },
  { id: "d-2", sourceA: "viernes", sourceB: "miércoles" },
  { id: "d-3", sourceA: "cinco días", sourceB: "ocho días" },
];

describe("R-80-02-M7 — referencia discreta de progreso", () => {
  it("[T-80-02-M7-01] identifica la detección activa", async () => {
    const Progress = await loadProgress();

    render(
      <Progress
        detections={DETECTIONS}
        activeDetectionId="d-2"
      />,
    );

    expect(
      screen.getByLabelText(/^progreso comparativo$/i),
    ).toHaveAttribute("data-active-detection-id", "d-2");
  });

  it("[T-80-02-M7-02] muestra el ordinal correcto y el total", async () => {
    const Progress = await loadProgress();

    render(
      <Progress
        detections={DETECTIONS}
        activeDetectionId="d-2"
      />,
    );

    expect(screen.getByLabelText(/^progreso comparativo$/i)).toHaveTextContent(
      /2\s+de\s+3/i,
    );
  });

  it("[T-80-02-M7-03] no atribuye importancia, prioridad ni preferencia", async () => {
    const Progress = await loadProgress();

    render(
      <Progress
        detections={DETECTIONS}
        activeDetectionId="d-2"
      />,
    );

    expect(screen.queryByText(/importante/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/prioridad/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/preferid[oa]/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/recomendad[oa]/i)).not.toBeInTheDocument();
  });

  it("[T-80-02-M7-04] no mueve automáticamente superficies externas", async () => {
    const Progress = await loadProgress();

    const firstPanel = document.createElement("div");
    const secondPanel = document.createElement("div");

    Object.defineProperty(firstPanel, "scrollTop", {
      configurable: true,
      writable: true,
      value: 120,
    });
    Object.defineProperty(secondPanel, "scrollTop", {
      configurable: true,
      writable: true,
      value: 80,
    });

    document.body.append(firstPanel, secondPanel);

    render(
      <Progress
        detections={DETECTIONS}
        activeDetectionId="d-3"
      />,
    );

    expect(firstPanel.scrollTop).toBe(120);
    expect(secondPanel.scrollTop).toBe(80);

    firstPanel.remove();
    secondPanel.remove();
  });

  it("[T-80-02-M7-05] el ordinal corresponde al identificador activo", async () => {
    const Progress = await loadProgress();

    render(
      <Progress
        detections={DETECTIONS}
        activeDetectionId="d-3"
      />,
    );

    expect(screen.getByLabelText(/^progreso comparativo$/i)).toHaveTextContent(
      /3\s+de\s+3/i,
    );
  });

  it("[T-80-02-M7-06] representa correctamente primera y última detección", async () => {
    const Progress = await loadProgress();

    const { rerender } = render(
      <Progress
        detections={DETECTIONS}
        activeDetectionId="d-1"
      />,
    );

    expect(screen.getByLabelText(/^progreso comparativo$/i)).toHaveTextContent(
      /1\s+de\s+3/i,
    );

    rerender(
      <Progress
        detections={DETECTIONS}
        activeDetectionId="d-3"
      />,
    );

    expect(screen.getByLabelText(/^progreso comparativo$/i)).toHaveTextContent(
      /3\s+de\s+3/i,
    );
  });

  it("[T-80-02-M7-07] sin detecciones no inventa progreso", async () => {
    const Progress = await loadProgress();

    render(
      <Progress
        detections={[]}
        activeDetectionId={null}
      />,
    );

    expect(screen.queryByLabelText(/^progreso comparativo$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/\d+\s+de\s+\d+/i)).not.toBeInTheDocument();
  });

  it("[T-80-02-M7-08] un identificador activo inexistente no inventa ordinal", async () => {
    const Progress = await loadProgress();

    render(
      <Progress
        detections={DETECTIONS}
        activeDetectionId="d-99"
      />,
    );

    expect(screen.queryByLabelText(/^progreso comparativo$/i)).not.toBeInTheDocument();
  });
});
