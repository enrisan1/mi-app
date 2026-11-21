import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import {
  traceResult,
  traceResultParticipantProvenance,
  traceResultReason,
} from "./realizations/knowledge-trajectory/KnowledgeTrajectory";
import { listAssociatedTrajectories } from "./realizations/knowledge-trajectory/knowledgeTrajectoryRepository";

const ENDPOINT = "https://ai-support.example.test/ai-support";
const TURNSTILE_SITE_KEY = "turnstile-public-test-sitekey";

const SOURCE_CONTENT = "Fuente inicial de la investigación ordinaria";
const SECOND_SOURCE = "Segunda fuente de contraste";
const HUMAN_SYNTHESIS =
  "Síntesis humana obtenida al continuar desde la fuente inicial";
const AI_REQUEST = "Revisa qué cuestión conviene comprobar antes de decidir.";
const AI_RESPONSE =
  "Conviene comprobar si la síntesis conserva procedencia y contexto verificable.";
const P2_CONTRIBUTION =
  "P2 incorpora la comprobación final y continúa desde el relevo recibido";

const DECISION = {
  objective: "Elegir una continuidad que preserve procedencia y contexto",
  condition1: "Conservar procedencia",
  condition2: "Permitir continuidad",
  condition3: "Mantener contexto verificable",
  discarded: "Reconstruir el contexto manualmente",
  selected: "Continuar desde la trayectoria persistida",
  evidence:
    "La trayectoria conserva fuente, síntesis, apoyo IA y contexto verificable",
  decision: "Seleccionar la continuidad desde la trayectoria persistida",
};

type TurnstileRenderOptions = {
  callback: (token: string) => void;
};

function installTurnstileMock() {
  const optionsByWidget = new Map<string, TurnstileRenderOptions>();

  Object.defineProperty(globalThis, "turnstile", {
    configurable: true,
    writable: true,
    value: {
      render: vi.fn(
        (_container: HTMLElement, options: TurnstileRenderOptions) => {
          const id = `widget-${optionsByWidget.size + 1}`;
          optionsByWidget.set(id, options);
          return id;
        },
      ),
      execute: vi.fn((id: string) => {
        const options = optionsByWidget.get(id);
        if (options === undefined) throw new Error("unknown Turnstile widget");
        options.callback("turnstile-token-e2e");
      }),
      remove: vi.fn((id: string) => {
        optionsByWidget.delete(id);
      }),
    },
  });
}

function mockAi() {
  vi.spyOn(globalThis, "fetch").mockResolvedValue(
    new Response(
      JSON.stringify({
        content: AI_RESPONSE,
        provenance: {
          system: "OpenAI",
          model: "gpt-6-luna",
          requestId: "req-e2e-1",
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    ),
  );
}

function seedOnlyOrdinaryStartingMaterials() {
  localStorage.setItem(
    "ordinary.materials",
    JSON.stringify([
      { id: "m1", content: SOURCE_CONTENT },
      { id: "m2", content: SECOND_SOURCE },
    ]),
  );
  localStorage.setItem("ordinary.current-work-id", "m1");
}

function findAssociationByMaterialContent(content: string) {
  const materials = JSON.parse(
    localStorage.getItem("ordinary.materials") ?? "[]",
  ) as Array<{ id: string; content: string }>;

  const material = materials.find((item) => item.content === content);
  expect(material).toBeDefined();

  return listAssociatedTrajectories().find(
    (association) => association.materialId === material!.id,
  );
}

async function createOrdinaryTrajectory(
  user: ReturnType<typeof userEvent.setup>,
) {
  await user.type(
    screen.getByRole("textbox", {
      name: /^qué necesitas considerar ahora$/i,
    }),
    "Continuar la investigación desde la fuente inicial",
  );
  await user.click(
    screen.getByRole("button", {
      name: /^examinar materiales anteriores$/i,
    }),
  );

  const previous = screen.getByRole("region", {
    name: /^materiales anteriores$/i,
  });
  await user.click(
    within(previous).getByRole("button", {
      name: /^usar este material 1$/i,
    }),
  );

  await user.type(
    screen.getByRole("textbox", { name: /^nuevo trabajo$/i }),
    HUMAN_SYNTHESIS,
  );
  await user.click(
    screen.getByRole("button", {
      name: /^continuar con este material$/i,
    }),
  );

  const association = findAssociationByMaterialContent(HUMAN_SYNTHESIS);
  expect(association).toBeDefined();
  return association!;
}

async function requestAiOnMaterial(
  user: ReturnType<typeof userEvent.setup>,
  materialId: string,
) {
  const ai = screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i });

  await user.selectOptions(
    within(ai).getByRole("combobox", { name: /^obra para apoyo ia$/i }),
    materialId,
  );
  await user.type(
    within(ai).getByRole("textbox", { name: /^qué apoyo necesitas$/i }),
    AI_REQUEST,
  );
  await user.click(
    within(ai).getByRole("button", { name: /^solicitar apoyo ia$/i }),
  );

  expect(
    within(ai).getByLabelText(
      new RegExp(`^apoyo ia de obra ${materialId}$`, "i"),
    ),
  ).toHaveTextContent(AI_RESPONSE);
}

async function openTrajectory(
  user: ReturnType<typeof userEvent.setup>,
  resultId: string,
) {
  const trajectories = screen.getByRole("region", {
    name: /^trayectorias de conocimiento$/i,
  });
  const article = within(trajectories).getByRole("article", {
    name: new RegExp(`^trayectoria de resultado ${resultId}$`, "i"),
  });

  await user.click(
    within(article).getByRole("button", {
      name: new RegExp(`^ver trayectoria de ${resultId}$`, "i"),
    }),
  );

  return screen.getByRole("region", {
    name: new RegExp(`^trayectoria de ${resultId}$`, "i"),
  });
}

async function registerDecision(
  user: ReturnType<typeof userEvent.setup>,
  resultId: string,
) {
  const trajectory = await openTrajectory(user, resultId);

  await user.click(
    within(trajectory).getByRole("button", {
      name: new RegExp(`^registrar decisión para ${resultId}$`, "i"),
    }),
  );

  const form = within(trajectory).getByRole("region", {
    name: new RegExp(`^decisión para ${resultId}$`, "i"),
  });

  const fill = async (name: RegExp, value: string) => {
    await user.type(within(form).getByRole("textbox", { name }), value);
  };

  await fill(/^objetivo de decisión$/i, DECISION.objective);
  await fill(/^condición obligatoria 1$/i, DECISION.condition1);
  await fill(/^condición obligatoria 2$/i, DECISION.condition2);
  await fill(/^condición decisiva$/i, DECISION.condition3);
  await fill(/^alternativa descartada$/i, DECISION.discarded);
  await fill(
    /^condición incumplida por la alternativa descartada$/i,
    DECISION.condition2,
  );
  await fill(/^alternativa seleccionada$/i, DECISION.selected);
  await fill(/^evidencia decisiva$/i, DECISION.evidence);
  await fill(/^decisión$/i, DECISION.decision);

  await user.click(
    within(form).getByRole("button", {
      name: new RegExp(`^constituir fundamento de ${resultId}$`, "i"),
    }),
  );
}

async function prepareHandoff(
  user: ReturnType<typeof userEvent.setup>,
  resultId: string,
) {
  const trajectory = await openTrajectory(user, resultId);

  await user.click(
    within(trajectory).getByRole("button", {
      name: new RegExp(`^preparar relevo de ${resultId}$`, "i"),
    }),
  );

  const transfer = within(trajectory).getByRole("textbox", {
    name: new RegExp(`^relevo entregable de ${resultId}$`, "i"),
  });

  return (transfer as HTMLTextAreaElement).value;
}

async function receiveAndContinueAsP2(
  user: ReturnType<typeof userEvent.setup>,
  transfer: string,
) {
  const shared = screen.getByRole("region", {
    name: /^continuidad compartida$/i,
  });

  fireEvent.change(
    within(shared).getByRole("textbox", {
      name: /^antecedente compartido recibido$/i,
    }),
    { target: { value: transfer } },
  );

  await user.click(
    within(shared).getByRole("button", {
      name: /^recibir antecedente compartido$/i,
    }),
  );

  await user.type(
    within(shared).getByRole("textbox", {
      name: /^aportación actual de b$/i,
    }),
    P2_CONTRIBUTION,
  );

  await user.click(
    within(shared).getByRole("button", {
      name: /^continuar trabajo compartido$/i,
    }),
  );

  expect(
    within(shared).getByLabelText(/^continuación de b$/i),
  ).toHaveTextContent(P2_CONTRIBUTION);
}

describe("R-CSYS-07 — escenario E2E de una investigación ordinaria gobernada por trayectorias", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
    vi.stubEnv("VITE_AI_SUPPORT_ENDPOINT", ENDPOINT);
    vi.stubEnv("VITE_TURNSTILE_SITE_KEY", TURNSTILE_SITE_KEY);
    installTurnstileMock();
    mockAi();
    seedOnlyOrdinaryStartingMaterials();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it("[T-CSYS-E2E-01] una sola investigación ordinaria converge desde fuente hasta resultado posterior reconstruible sin siembra manual de trayectorias", async () => {
    const user = userEvent.setup();
    const firstExecution = render(<App />);

    // 1. Trabajo ordinario → trayectoria creada por App.
    const r1 = await createOrdinaryTrajectory(user);
    const baseTrace = traceResult(r1.trajectory, r1.resultId);

    expect(
      r1.trajectory.entities.find((e) => e.id === baseTrace.sourceId)?.content,
    ).toBe(SOURCE_CONTENT);
    expect(
      r1.trajectory.entities.find((e) => e.id === baseTrace.assertionId)?.content,
    ).toBe(HUMAN_SYNTHESIS);

    // 2. Apoyo IA real del flujo de App → misma trayectoria.
    await requestAiOnMaterial(user, r1.materialId);

    const afterAi = findAssociationByMaterialContent(HUMAN_SYNTHESIS)!;
    const aiContributions = traceResultParticipantProvenance(
      afterAi.trajectory,
      afterAi.resultId,
    ).filter((contribution) => contribution.participantType === "ai");

    expect(aiContributions).toHaveLength(1);
    expect(aiContributions[0]?.aiProvenance).toEqual({
      system: "OpenAI",
      model: "gpt-6-luna",
      requestId: "req-e2e-1",
    });

    // 3. Decisión/fundamento real → misma trayectoria.
    await registerDecision(user, r1.resultId);

    const afterDecision = findAssociationByMaterialContent(HUMAN_SYNTHESIS)!;
    const reason = traceResultReason(
      afterDecision.trajectory,
      afterDecision.resultId,
    );
    expect(
      afterDecision.trajectory.entities.find(
        (entity) => entity.id === reason.decisionId,
      )?.content,
    ).toBe(DECISION.decision);

    // 4. Interrupción real: desmontar y recuperar solo desde persistencia.
    firstExecution.unmount();
    render(<App />);

    const recoveredR1 = findAssociationByMaterialContent(HUMAN_SYNTHESIS)!;
    expect(
      traceResultParticipantProvenance(
        recoveredR1.trajectory,
        recoveredR1.resultId,
      ).some((contribution) => contribution.participantType === "ai"),
    ).toBe(true);
    expect(
      traceResultReason(recoveredR1.trajectory, recoveredR1.resultId).decisionId,
    ).toBe(reason.decisionId);

    // 5. Relevo desde trayectoria persistida → P2 → resultado posterior.
    const transfer = await prepareHandoff(user, recoveredR1.resultId);
    expect(transfer.trim()).not.toBe("");

    await receiveAndContinueAsP2(user, transfer);

    const r2 = listAssociatedTrajectories().find(
      (association) =>
        association.continuation?.antecedentResultId === recoveredR1.resultId &&
        association.continuation.contribution === P2_CONTRIBUTION,
    );

    expect(r2).toBeDefined();

    // 6. Revisión posterior desde persistencia, sin reconstrucción externa.
    cleanup();
    render(<App />);

    const recoveredR2 = listAssociatedTrajectories().find(
      (association) => association.resultId === r2!.resultId,
    );
    expect(recoveredR2).toBeDefined();
    expect(recoveredR2?.continuation?.antecedentResultId).toBe(
      recoveredR1.resultId,
    );

    const r2Trace = traceResult(recoveredR2!.trajectory, recoveredR2!.resultId);
    expect(
      recoveredR2!.trajectory.entities.find(
        (entity) => entity.id === r2Trace.sourceId,
      )?.content,
    ).toContain(HUMAN_SYNTHESIS);
    expect(
      recoveredR2!.trajectory.entities.find(
        (entity) => entity.id === r2Trace.participantId,
      )?.content,
    ).toBe("P2");
    expect(
      recoveredR2!.trajectory.entities.find(
        (entity) => entity.id === r2Trace.actionId,
      )?.content,
    ).toBe("Continuar trabajo compartido");
    expect(
      recoveredR2!.trajectory.entities.find(
        (entity) => entity.id === r2Trace.resultId,
      )?.content,
    ).toBe(P2_CONTRIBUTION);

    // 7. El antecedente R1 sigue siendo reconstruible con procedencia IA y razón.
    const finalR1 = findAssociationByMaterialContent(HUMAN_SYNTHESIS)!;
    const finalAi = traceResultParticipantProvenance(
      finalR1.trajectory,
      finalR1.resultId,
    ).find((contribution) => contribution.participantType === "ai");

    expect(finalAi?.aiProvenance).toEqual({
      system: "OpenAI",
      model: "gpt-6-luna",
      requestId: "req-e2e-1",
    });

    const finalReason = traceResultReason(finalR1.trajectory, finalR1.resultId);
    expect(
      finalR1.trajectory.entities.find(
        (entity) => entity.id === finalReason.objectiveId,
      )?.content,
    ).toBe(DECISION.objective);
    expect(
      finalR1.trajectory.entities.find(
        (entity) => entity.id === finalReason.decisionId,
      )?.content,
    ).toBe(DECISION.decision);
  });
});
