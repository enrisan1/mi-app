import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";

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

type LateralComparisonExperienceComponent = (
  props: LateralComparisonExperienceProps,
) => ReactElement;

async function loadExperience(): Promise<LateralComparisonExperienceComponent> {
  const modules = import.meta.glob<{
    LateralComparisonExperience: LateralComparisonExperienceComponent;
  }>("./LateralComparisonExperience.tsx");

  const load = modules["./LateralComparisonExperience.tsx"];

  expect(
    load,
    "R-80-02-M6 ausente: falta ./LateralComparisonExperience.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-02-M6 ausente");
  }

  return (await load()).LateralComparisonExperience;
}

const FIRST = [
  "Sección uno. La fase inicial comprende ocho documentos.",
  "Sección dos. La alternativa Delta permanece disponible.",
  "Sección tres. La decisión será el viernes.",
  "Sección cuatro. El seguimiento continúa sin cambios.",
  "Sección cinco. La revisión final permanece pendiente.",
].join("\n\n");

const SECOND = [
  "Sección uno. La fase inicial comprende doce documentos.",
  "Sección dos. La alternativa Delta queda descartada.",
  "Sección tres. La decisión será el miércoles.",
  "Sección cuatro. El seguimiento continúa sin cambios.",
  "Sección cinco. La revisión final permanece pendiente.",
].join("\n\n");

const DETECTIONS: DetectionItem[] = [
  { id: "d-1", sourceA: "ocho", sourceB: "doce" },
  {
    id: "d-2",
    sourceA: "permanece disponible",
    sourceB: "queda descartada",
  },
  { id: "d-3", sourceA: "viernes", sourceB: "miércoles" },
];

describe("R-80-02-M6 — paneles comparativos laterales independientes", () => {
  it("[T-80-02-M6-01] presenta D1 y D2 dentro de una misma región comparativa", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    const region = screen.getByLabelText(/comparación lateral/i);

    expect(
      within(region).getByLabelText(/^panel documento 1$/i),
    ).toBeInTheDocument();

    expect(
      within(region).getByLabelText(/^panel documento 2$/i),
    ).toBeInTheDocument();
  });

  it("[T-80-02-M6-02] conserva posiciones de scroll independientes", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    const firstPanel = screen.getByLabelText(/^panel documento 1$/i);
    const secondPanel = screen.getByLabelText(/^panel documento 2$/i);

    Object.defineProperty(firstPanel, "scrollTop", {
      configurable: true,
      writable: true,
      value: 0,
    });
    Object.defineProperty(secondPanel, "scrollTop", {
      configurable: true,
      writable: true,
      value: 0,
    });

    firstPanel.scrollTop = 120;
    fireEvent.scroll(firstPanel);

    expect(firstPanel.scrollTop).toBe(120);
    expect(secondPanel.scrollTop).toBe(0);

    secondPanel.scrollTop = 80;
    fireEvent.scroll(secondPanel);

    expect(secondPanel.scrollTop).toBe(80);
    expect(firstPanel.scrollTop).toBe(120);
  });

  it("[T-80-02-M6-03] preserva las detecciones inline en ambos paneles", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    const firstPanel = screen.getByLabelText(/^panel documento 1$/i);
    const secondPanel = screen.getByLabelText(/^panel documento 2$/i);

    for (const detection of DETECTIONS) {
      expect(
        within(firstPanel).getByLabelText(
          new RegExp(`detección ${detection.id} documento 1`, "i"),
        ),
      ).toHaveTextContent(detection.sourceA);

      expect(
        within(secondPanel).getByLabelText(
          new RegExp(`detección ${detection.id} documento 2`, "i"),
        ),
      ).toHaveTextContent(detection.sourceB);
    }
  });

  it("[T-80-02-M6-04] conserva íntegro el texto de D1 y D2", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    expect(
      screen.getByLabelText(/^documento 1 fuente$/i).textContent,
    ).toBe(FIRST);

    expect(
      screen.getByLabelText(/^documento 2 fuente$/i).textContent,
    ).toBe(SECOND);
  });

  it("[T-80-02-M6-05] mantiene neutralidad sin relevancia, corrección ni preferencia", async () => {
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

  it("[T-80-02-M6-06] cada panel declara una superficie desplazable propia", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    const firstPanel = screen.getByLabelText(/^panel documento 1$/i);
    const secondPanel = screen.getByLabelText(/^panel documento 2$/i);

    expect(firstPanel).toHaveAttribute("data-scroll-surface", "independent");
    expect(secondPanel).toHaveAttribute("data-scroll-surface", "independent");
  });

  it("[T-80-02-M6-07] no sincroniza automáticamente ambos paneles", async () => {
    const Experience = await loadExperience();

    render(
      <Experience
        first={FIRST}
        second={SECOND}
        detections={DETECTIONS}
      />,
    );

    const firstPanel = screen.getByLabelText(/^panel documento 1$/i);
    const secondPanel = screen.getByLabelText(/^panel documento 2$/i);

    Object.defineProperty(firstPanel, "scrollTop", {
      configurable: true,
      writable: true,
      value: 40,
    });
    Object.defineProperty(secondPanel, "scrollTop", {
      configurable: true,
      writable: true,
      value: 15,
    });

    firstPanel.scrollTop = 160;
    fireEvent.scroll(firstPanel);

    expect(secondPanel.scrollTop).toBe(15);
  });
});
