import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";

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

type InlineDetectionExperienceComponent = (
  props: InlineDetectionExperienceProps,
) => JSX.Element;

async function loadExperience(): Promise<InlineDetectionExperienceComponent> {
  const modules = import.meta.glob<{
    InlineDetectionExperience: InlineDetectionExperienceComponent;
  }>("./InlineDetectionExperience.tsx");

  const load = modules["./InlineDetectionExperience.tsx"];

  expect(
    load,
    "R-80-02-M5 ausente: falta ./InlineDetectionExperience.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-02-M5 ausente");
  }

  return (await load()).InlineDetectionExperience;
}

const FIRST = [
  "La fase inicial comprende ocho documentos.",
  "La alternativa Delta permanece disponible.",
  "La decisión será el viernes.",
].join("\n");

const SECOND = [
  "La fase inicial comprende doce documentos.",
  "La alternativa Delta queda descartada.",
  "La decisión será el miércoles.",
].join("\n");

const DETECTIONS: DetectionItem[] = [
  {
    id: "d-1",
    sourceA: "ocho",
    sourceB: "doce",
  },
  {
    id: "d-2",
    sourceA: "permanece disponible",
    sourceB: "queda descartada",
  },
  {
    id: "d-3",
    sourceA: "viernes",
    sourceB: "miércoles",
  },
];

describe("R-80-02-M5 — marcado inline neutral", () => {
  it("[T-80-02-M5-01] localiza cada fragmento de D1 dentro de su fuente", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    const firstSource = screen.getByLabelText(/^documento 1 fuente$/i);

    for (const detection of DETECTIONS) {
      if (detection.sourceA === "") continue;

      const mark = within(firstSource).getByLabelText(
        new RegExp(`detección ${detection.id} documento 1`, "i"),
      );

      expect(mark).toHaveTextContent(detection.sourceA);
    }
  });

  it("[T-80-02-M5-02] localiza cada fragmento de D2 dentro de su fuente", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    const secondSource = screen.getByLabelText(/^documento 2 fuente$/i);

    for (const detection of DETECTIONS) {
      if (detection.sourceB === "") continue;

      const mark = within(secondSource).getByLabelText(
        new RegExp(`detección ${detection.id} documento 2`, "i"),
      );

      expect(mark).toHaveTextContent(detection.sourceB);
    }
  });

  it("[T-80-02-M5-03] conserva íntegro el contenido textual de ambas fuentes", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    expect(screen.getByLabelText(/^documento 1 fuente$/i)).toHaveTextContent(FIRST);
    expect(screen.getByLabelText(/^documento 2 fuente$/i)).toHaveTextContent(SECOND);
  });

  it("[T-80-02-M5-04] conserva la identidad de una misma detección en D1 y D2", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    for (const detection of DETECTIONS) {
      const firstMark = screen.getByLabelText(
        new RegExp(`detección ${detection.id} documento 1`, "i"),
      );
      const secondMark = screen.getByLabelText(
        new RegExp(`detección ${detection.id} documento 2`, "i"),
      );

      expect(firstMark).toBeInTheDocument();
      expect(secondMark).toBeInTheDocument();
    }
  });

  it("[T-80-02-M5-05] no atribuye importancia, corrección ni preferencia", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    expect(screen.queryByText(/importante/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/irrelevante/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/correct[oa]/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/preferid[oa]/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/debe cambiar/i)).not.toBeInTheDocument();
  });

  it("[T-80-02-M5-06] mantiene varias detecciones distinguibles simultáneamente", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    for (const detection of DETECTIONS) {
      expect(
        screen.getByLabelText(
          new RegExp(`detección ${detection.id} documento 1`, "i"),
        ),
      ).toBeInTheDocument();

      expect(
        screen.getByLabelText(
          new RegExp(`detección ${detection.id} documento 2`, "i"),
        ),
      ).toBeInTheDocument();
    }
  });

  it("[T-80-02-M5-07] representa una inserción sin inventar texto en D1", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first="El informe se revisará hoy."
        second="El informe final se revisará hoy."
        detections={[
          {
            id: "insert-1",
            sourceA: "",
            sourceB: "final",
          },
        ]}
      />,
    );

    const firstSource = screen.getByLabelText(/^documento 1 fuente$/i);
    const secondSource = screen.getByLabelText(/^documento 2 fuente$/i);

    expect(
      within(firstSource).getByLabelText(/detección insert-1 documento 1/i),
    ).toBeEmptyDOMElement();

    expect(
      within(secondSource).getByLabelText(/detección insert-1 documento 2/i),
    ).toHaveTextContent("final");

    expect(firstSource).toHaveTextContent("El informe se revisará hoy.");
  });

  it("[T-80-02-M5-08] representa una eliminación sin inventar texto en D2", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first="El informe final se revisará hoy."
        second="El informe se revisará hoy."
        detections={[
          {
            id: "delete-1",
            sourceA: "final",
            sourceB: "",
          },
        ]}
      />,
    );

    const firstSource = screen.getByLabelText(/^documento 1 fuente$/i);
    const secondSource = screen.getByLabelText(/^documento 2 fuente$/i);

    expect(
      within(firstSource).getByLabelText(/detección delete-1 documento 1/i),
    ).toHaveTextContent("final");

    expect(
      within(secondSource).getByLabelText(/detección delete-1 documento 2/i),
    ).toBeEmptyDOMElement();

    expect(secondSource).toHaveTextContent("El informe se revisará hoy.");
  });
});
