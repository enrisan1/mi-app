import type { ComponentType } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Contrato contingente de TW-HPOST-01/V1, no ontología general.
// Sólo C cruza la frontera P1 -> P2; esta clave es local a R-HPOST-M1.
const CONTEXT_KEY = "handoff.context";
const PRIVATE_MARKER = "Nota privada de P1 que no forma parte del relevo";

type WitnessContext = {
  objective: string;
  mandatoryConditions: string[];
  discardedAlternatives: { alternative: string; failedCondition: string }[];
  survivingAlternative: string;
  establishedChecks: string[];
  openQuestion: string;
  nextAction: string;
  finalDecisionPending: boolean;
  finalDecision: string | null;
};

type P1Work = WitnessContext & { privateNotes: string };
type WitnessProps =
  | { participant: "P1"; initialWork: P1Work }
  | { participant: "P2" };
type HandoffModule = { HandoffExperience: ComponentType<WitnessProps> };

// El glob permite recoger y ejecutar los cuatro tests aunque aún no exista
// producción. La aserción falla por ausencia de la realización, no por un
// import estático irresoluble. No hay mock ni implementación de sustitución.
async function loadFreshExperience() {
  vi.resetModules();
  const modules = import.meta.glob<HandoffModule>("./HandoffExperience.tsx");
  const load = modules["./HandoffExperience.tsx"];
  expect(
    load,
    "R-HPOST-M1 ausente: falta ./HandoffExperience.tsx",
  ).toBeTypeOf("function");
  if (!load) throw new Error("R-HPOST-M1 ausente");
  return (await load()).HandoffExperience;
}

function mainWitness(): P1Work {
  return {
    objective: "Seleccionar una alternativa que satisfaga K1, K2 y K3",
    mandatoryConditions: ["K1", "K2", "K3"],
    discardedAlternatives: [
      { alternative: "M1", failedCondition: "K2" },
      { alternative: "M3", failedCondition: "K2" },
      { alternative: "M4", failedCondition: "K3" },
    ],
    survivingAlternative: "M2",
    establishedChecks: ["M2/K1 satisfecho", "M2/K2 satisfecho"],
    openQuestion: "M2/K3",
    nextAction: "Comprobar exclusivamente M2/K3",
    finalDecisionPending: true,
    finalDecision: null,
    privateNotes: PRIVATE_MARKER,
  };
}

function variantWitness(): P1Work {
  return {
    objective: "Seleccionar una alternativa que satisfaga K1, K2 y K3",
    mandatoryConditions: ["K1", "K2", "K3"],
    discardedAlternatives: [
      { alternative: "N1", failedCondition: "K1" },
      { alternative: "N2", failedCondition: "K3" },
      { alternative: "N4", failedCondition: "K2" },
    ],
    survivingAlternative: "N3",
    establishedChecks: ["N3/K1 satisfecho", "N3/K3 satisfecho"],
    openQuestion: "N3/K2",
    nextAction: "Comprobar exclusivamente N3/K2",
    finalDecisionPending: true,
    finalDecision: null,
    privateNotes: PRIVATE_MARKER,
  };
}

function expectedContext(work: P1Work): WitnessContext {
  const { privateNotes: _privateNotes, ...context } = work;
  return context;
}

async function constituteContext(work: P1Work) {
  const Experience = await loadFreshExperience();
  const user = userEvent.setup();
  const p1 = render(<Experience participant="P1" initialWork={work} />);

  await user.click(screen.getByRole("button", { name: /^constituir S1$/i }));
  expect(screen.getByLabelText("Estado alcanzado")).toHaveTextContent("S1");
  expect(screen.getByLabelText("Decisión final")).toHaveTextContent("pendiente");
  // S1 privado no constituye implícitamente un contexto entregable.
  expect(localStorage.getItem(CONTEXT_KEY)).toBeNull();

  await user.click(
    screen.getByRole("button", { name: /^constituir contexto de relevo$/i }),
  );
  p1.unmount();

  const serialized = localStorage.getItem(CONTEXT_KEY);
  expect(serialized).not.toBeNull();
  expect(JSON.parse(serialized!)).toEqual(expectedContext(work));
  expect(serialized).not.toContain(PRIVATE_MARKER);
  expect(serialized).not.toContain("privateNotes");
  return serialized!;
}

async function mountNewP2(serializedContext: string | null) {
  // Se destruye TODO el almacenamiento de P1. Sólo se entrega una copia
  // serializada de C: ningún initialWork, callback ni objeto privado llega a P2.
  localStorage.clear();
  if (serializedContext !== null) {
    localStorage.setItem(CONTEXT_KEY, serializedContext);
  }
  const Experience = await loadFreshExperience();
  return render(<Experience participant="P2" />);
}

function expectOpenActivity(context: WitnessContext) {
  expect(screen.getByLabelText("Objetivo vigente")).toHaveTextContent(
    context.objective,
  );
  expect(screen.getByLabelText("Alternativa superviviente")).toHaveTextContent(
    context.survivingAlternative,
  );
  expect(screen.getByLabelText("Cuestión abierta")).toHaveTextContent(
    `${context.openQuestion} pendiente`,
  );
  expect(screen.getByLabelText("Siguiente actuación")).toHaveTextContent(
    context.nextAction,
  );
  for (const check of context.establishedChecks) {
    expect(screen.getByLabelText("Comprobaciones establecidas")).toHaveTextContent(check);
  }
  expect(screen.getByLabelText("Decisión final")).toHaveTextContent("pendiente");
  expect(screen.queryByText(PRIVATE_MARKER)).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: /^continuar$/i })).toBeDisabled();
}

async function completeOpenQuestion(context: WitnessContext, evidence: string) {
  const user = userEvent.setup();
  await user.type(screen.getByRole("textbox", { name: /^nueva evidencia$/i }), evidence);
  await user.click(screen.getByRole("button", { name: /^continuar$/i }));

  expect(screen.getByLabelText("Estado alcanzado")).toHaveTextContent("S2");
  expect(screen.getByLabelText("Decisión final")).toHaveTextContent(
    `${context.survivingAlternative} seleccionada`,
  );
  expect(screen.getByLabelText("Cuestión cerrada")).toHaveTextContent(context.openQuestion);
  expect(screen.queryByLabelText("Cuestión abierta")).not.toBeInTheDocument();
  for (const condition of context.mandatoryConditions) {
    expect(screen.getByLabelText("Comprobaciones establecidas")).toHaveTextContent(
      `${context.survivingAlternative}/${condition} satisfecho`,
    );
  }
  // La continuación debe mantener los descartes y sus razones de S1.
  for (const discarded of context.discardedAlternatives) {
    expect(screen.getByLabelText(`Descarte ${discarded.alternative}`)).toHaveTextContent(
      discarded.failedCondition,
    );
  }
}

describe("R-HPOST-M1 — relevo contextual TW-HPOST-01", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
    vi.resetModules();
  });

  it("[T-HPOST-01] P1 constituye C abierto y persistente que sobrevive a su desmontaje", async () => {
    const serialized = await constituteContext(mainWitness());
    const context = JSON.parse(serialized) as WitnessContext;
    expect(context.discardedAlternatives).toEqual([
      { alternative: "M1", failedCondition: "K2" },
      { alternative: "M3", failedCondition: "K2" },
      { alternative: "M4", failedCondition: "K3" },
    ]);
    expect(context.survivingAlternative).toBe("M2");
    expect(context.openQuestion).toBe("M2/K3");
    expect(context.finalDecisionPending).toBe(true);
    expect(context.finalDecision).toBeNull();
  });

  it("[T-HPOST-02] P2 nuevo recibe sólo C y cierra M2/K3 con E4 sin reconstruir S1", async () => {
    const serialized = await constituteContext(mainWitness());
    await mountNewP2(serialized);
    const context = JSON.parse(serialized) as WitnessContext;
    expectOpenActivity(context);

    // Evidencia ajena a la cuestión no debe bastar para seleccionar M2.
    const user = userEvent.setup();
    const input = screen.getByRole("textbox", { name: /^nueva evidencia$/i });
    await user.type(input, "E4: M4 satisface K3");
    expect(screen.getByRole("button", { name: /^continuar$/i })).toBeDisabled();
    expect(screen.getByLabelText("Decisión final")).toHaveTextContent("pendiente");
    await user.clear(input);

    await completeOpenQuestion(context, "E4: M2 satisface K3");
  });

  it("[T-HPOST-03] sin constituir C, P2 no puede continuar desde S1 aunque reciba E4", async () => {
    const Experience = await loadFreshExperience();
    const user = userEvent.setup();
    const p1 = render(<Experience participant="P1" initialWork={mainWitness()} />);
    await user.click(screen.getByRole("button", { name: /^constituir S1$/i }));
    expect(screen.getByLabelText("Estado alcanzado")).toHaveTextContent("S1");
    p1.unmount();
    expect(localStorage.getItem(CONTEXT_KEY)).toBeNull();

    await mountNewP2(null);
    await user.type(
      screen.getByRole("textbox", { name: /^nueva evidencia$/i }),
      "E4: M2 satisface K3",
    );
    expect(screen.getByRole("button", { name: /^continuar$/i })).toBeDisabled();
    expect(screen.getByLabelText("Disponibilidad de contexto")).toHaveTextContent(
      "Sin contexto de relevo",
    );
    expect(screen.queryByLabelText("Cuestión cerrada")).not.toBeInTheDocument();
    expect(screen.queryByText(/^M2 seleccionada$/)).not.toBeInTheDocument();
  });

  it("[T-HPOST-04] V1 continúa N3/K2 desde sus datos y selecciona N3 con E4-V1", async () => {
    const serialized = await constituteContext(variantWitness());
    await mountNewP2(serialized);
    const context = JSON.parse(serialized) as WitnessContext;
    expectOpenActivity(context);
    expect(context.survivingAlternative).toBe("N3");
    expect(context.openQuestion).toBe("N3/K2");
    await completeOpenQuestion(context, "E4-V1: N3 satisface K2");
    expect(screen.queryByText(/^M2 seleccionada$/)).not.toBeInTheDocument();
  });
});
