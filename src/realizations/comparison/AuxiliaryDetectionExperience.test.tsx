import type { ComponentType } from "react";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

type DetectionItem = {
  id: string;
  sourceA: string;
  sourceB: string;
};

type AuxiliaryDetectionExperienceModule = {
  AuxiliaryDetectionExperience: ComponentType<{
    first: string;
    second: string;
    detections: DetectionItem[];
  }>;
};

// RED de R-80-02-M3.
// La carga dinámica mantiene la ausencia de producción como causa explícita
// mientras todavía no existe ./AuxiliaryDetectionExperience.tsx.
async function loadAuxiliaryDetectionExperience() {
  vi.resetModules();

  const modules =
    import.meta.glob<AuxiliaryDetectionExperienceModule>(
      "./AuxiliaryDetectionExperience.tsx",
    );
  const load = modules["./AuxiliaryDetectionExperience.tsx"];

  expect(
    load,
    "R-80-02-M3 ausente: falta ./AuxiliaryDetectionExperience.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-02-M3 ausente");
  }

  return (await load()).AuxiliaryDetectionExperience;
}

const FIRST = [
  "Plan Atlas",
  "La fase inicial comprende ocho documentos.",
  "La alternativa Delta permanece disponible.",
].join("\n");

const SECOND = [
  "Plan Atlas",
  "La fase inicial comprende doce documentos.",
  "La alternativa Delta queda descartada.",
].join("\n");

const DETECTIONS: DetectionItem[] = [
  {
    id: "d-1",
    sourceA: "ocho documentos",
    sourceB: "doce documentos",
  },
  {
    id: "d-2",
    sourceA: "Delta permanece disponible",
    sourceB: "Delta queda descartada",
  },
];

async function renderExperience() {
  const AuxiliaryDetectionExperience =
    await loadAuxiliaryDetectionExperience();

  render(
    <AuxiliaryDetectionExperience
      first={FIRST}
      second={SECOND}
      detections={DETECTIONS}
    />,
  );
}

afterEach(() => {
  cleanup();
  vi.resetModules();
});

describe("R-80-02-M3 — detección auxiliar verificable", () => {
  it("[T-80-02-M3-01] preserva D1 y D2 íntegros", async () => {
    await renderExperience();

    expect(screen.getByLabelText(/^documento 1 fuente$/i).textContent).toBe(FIRST);
    expect(screen.getByLabelText(/^documento 2 fuente$/i).textContent).toBe(SECOND);
  });

  it("[T-80-02-M3-02] mantiene las detecciones en una región auxiliar separada", async () => {
    await renderExperience();

    const support = screen.getByLabelText(/^apoyo auxiliar de detecciones$/i);
    expect(support).toBeInTheDocument();

    expect(
      within(screen.getByLabelText(/^documento 1 fuente$/i)).queryByText(/ocho documentos/i),
    ).not.toBeNull();
    expect(
      within(screen.getByLabelText(/^documento 2 fuente$/i)).queryByText(/doce documentos/i),
    ).not.toBeNull();
    expect(within(support).getByText("ocho documentos")).toBeInTheDocument();
    expect(within(support).getByText("doce documentos")).toBeInTheDocument();
  });

  it("[T-80-02-M3-03] conserva procedencia distinguible D1/D2 en cada detección", async () => {
    await renderExperience();

    const firstDetection = screen.getByLabelText(/^detección d-1$/i);

    expect(
      within(firstDetection).getByLabelText(/^fragmento documento 1$/i),
    ).toHaveTextContent("ocho documentos");
    expect(
      within(firstDetection).getByLabelText(/^fragmento documento 2$/i),
    ).toHaveTextContent("doce documentos");
  });

  it("[T-80-02-M3-04] mantiene varias detecciones separadas e inspeccionables", async () => {
    await renderExperience();

    const firstDetection = screen.getByLabelText(/^detección d-1$/i);
    const secondDetection = screen.getByLabelText(/^detección d-2$/i);

    expect(firstDetection).toBeInTheDocument();
    expect(secondDetection).toBeInTheDocument();
    expect(firstDetection).not.toBe(secondDetection);
  });

  it("[T-80-02-M3-05] no atribuye relevancia, preferencia ni corrección", async () => {
    await renderExperience();

    expect(screen.queryByText(/importante/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/irrelevante/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/correct[oa]/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/preferid[oa]/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/relevancia/i)).not.toBeInTheDocument();
  });

  it("[T-80-02-M3-06] inspeccionar detecciones no modifica D1 ni D2", async () => {
    await renderExperience();
    const user = userEvent.setup();

    const first = screen.getByLabelText(/^documento 1 fuente$/i);
    const second = screen.getByLabelText(/^documento 2 fuente$/i);
    const detection = screen.getByLabelText(/^detección d-1$/i);

    expect(first.textContent).toBe(FIRST);
    expect(second.textContent).toBe(SECOND);

    await user.click(detection);

    expect(first.textContent).toBe(FIRST);
    expect(second.textContent).toBe(SECOND);
  });

  it("[T-80-02-M3-07] una detección no produce decisión ni ejecución automática", async () => {
    await renderExperience();

    expect(screen.queryByText(/usar documento 1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/usar documento 2/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/aplicar cambio/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/texto corregido/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/decisión automática/i)).not.toBeInTheDocument();
  });
});