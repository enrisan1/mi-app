import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import {
  createKnowledgeTrajectory,
  traceResult,
  traceResultParticipantProvenance,
} from "./realizations/knowledge-trajectory/KnowledgeTrajectory";
import {
  loadAssociatedTrajectory,
  saveAssociatedTrajectory,
} from "./realizations/knowledge-trajectory/knowledgeTrajectoryRepository";

const ENDPOINT = "https://ai-support.example.test/ai-support";
const TURNSTILE_SITE_KEY = "turnstile-public-test-sitekey";
const MATERIAL_ID = "m1";
const RESULT_ID = "R1";
const MATERIAL_CONTENT = "Síntesis ordinaria con trayectoria existente";
const AI_REQUEST = "Señala una cuestión que convendría revisar.";
const AI_RESPONSE =
  "Conviene comprobar si la conclusión distingue evidencia de inferencia.";

type TurnstileRenderOptions = {
  sitekey: string;
  action?: string;
  execution?: string;
  appearance?: string;
  callback: (token: string) => void;
  "error-callback"?: () => void;
};

function installTurnstileMock() {
  const optionsByWidget = new Map<string, TurnstileRenderOptions>();

  const render = vi.fn(
    (_container: HTMLElement, options: TurnstileRenderOptions) => {
      const widgetId = `widget-${optionsByWidget.size + 1}`;
      optionsByWidget.set(widgetId, options);
      return widgetId;
    },
  );

  const execute = vi.fn((widgetId: string) => {
    const options = optionsByWidget.get(widgetId);

    if (options === undefined) {
      throw new Error("unknown Turnstile widget");
    }

    options.callback("turnstile-token-1");
  });

  const remove = vi.fn((widgetId: string) => {
    optionsByWidget.delete(widgetId);
  });

  Object.defineProperty(globalThis, "turnstile", {
    configurable: true,
    writable: true,
    value: { render, execute, remove },
  });
}

function seedOrdinaryWorkWithTrajectory() {
  localStorage.setItem(
    "ordinary.materials",
    JSON.stringify([{ id: MATERIAL_ID, content: MATERIAL_CONTENT }]),
  );
  localStorage.setItem("ordinary.current-work-id", MATERIAL_ID);

  const trajectory = createKnowledgeTrajectory({
    source: {
      id: "F1",
      kind: "source",
      content: "Fuente inicial",
    },
    assertion: {
      id: "A1",
      kind: "assertion",
      content: MATERIAL_CONTENT,
    },
    transformation: {
      id: "T1",
      kind: "transformation",
      content: "Síntesis humana inicial",
    },
    participant: {
      id: "PH1",
      kind: "participant",
      content: "Usuario principal",
    },
    action: {
      id: "AC-H1",
      kind: "action",
      content: "Constituir síntesis",
    },
    result: {
      id: RESULT_ID,
      kind: "result",
      content: MATERIAL_CONTENT,
    },
  });

  saveAssociatedTrajectory({
    materialId: MATERIAL_ID,
    resultId: RESULT_ID,
    trajectory,
  });
}

function mockSuccessfulAiResponse() {
  return vi.spyOn(globalThis, "fetch").mockResolvedValue(
    new Response(
      JSON.stringify({
        content: AI_RESPONSE,
        provenance: {
          system: "OpenAI",
          model: "gpt-6-luna",
          requestId: "req-test-1",
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    ),
  );
}

async function requestAiSupport(user: ReturnType<typeof userEvent.setup>) {
  const region = screen.getByRole("region", {
    name: /^apoyo auxiliar de ia$/i,
  });

  await user.selectOptions(
    within(region).getByRole("combobox", {
      name: /^obra para apoyo ia$/i,
    }),
    MATERIAL_ID,
  );

  await user.type(
    within(region).getByRole("textbox", {
      name: /^qué apoyo necesitas$/i,
    }),
    AI_REQUEST,
  );

  await user.click(
    within(region).getByRole("button", {
      name: /^solicitar apoyo ia$/i,
    }),
  );

  expect(
    within(region).getByLabelText(/^apoyo ia de obra m1$/i),
  ).toHaveTextContent(AI_RESPONSE);
}

function loadTrajectory() {
  const trajectory = loadAssociatedTrajectory(MATERIAL_ID, RESULT_ID);
  expect(trajectory).not.toBeNull();
  return trajectory!;
}

function getSingleAiContribution() {
  const trajectory = loadTrajectory();
  const contributions = traceResultParticipantProvenance(
    trajectory,
    RESULT_ID,
  ).filter((contribution) => contribution.participantType === "ai");

  expect(contributions).toHaveLength(1);

  return {
    trajectory,
    contribution: contributions[0]!,
  };
}

describe("GAP-CONV-SYS-02 — apoyo IA ordinario integrado en la misma trayectoria", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
    vi.stubEnv("VITE_AI_SUPPORT_ENDPOINT", ENDPOINT);
    vi.stubEnv("VITE_TURNSTILE_SITE_KEY", TURNSTILE_SITE_KEY);
    installTurnstileMock();
    seedOrdinaryWorkWithTrajectory();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
  });

  it("[T-CSYS-AI-01] solicitar apoyo IA sobre m1 conserva la trayectoria R1 y añade una contribución IA con procedencia explícita", async () => {
    const before = loadTrajectory();
    const baseTrace = traceResult(before, RESULT_ID);

    const user = userEvent.setup();
    mockSuccessfulAiResponse();
    render(<App />);

    await requestAiSupport(user);

    const { trajectory, contribution } = getSingleAiContribution();

    expect(traceResult(trajectory, RESULT_ID)).toEqual(baseTrace);
    expect(contribution.aiProvenance).toEqual({
      system: "OpenAI",
      model: "gpt-6-luna",
      requestId: "req-test-1",
    });
  });

  it("[T-CSYS-AI-02] la contribución IA referencia participante, actuación y transformación reales dentro de la misma KnowledgeTrajectory", async () => {
    const user = userEvent.setup();
    mockSuccessfulAiResponse();
    render(<App />);

    await requestAiSupport(user);

    const { trajectory, contribution } = getSingleAiContribution();

    const participant = trajectory.entities.find(
      (entity) => entity.id === contribution.participantId,
    );
    const action = trajectory.entities.find(
      (entity) => entity.id === contribution.actionId,
    );
    const transformation = trajectory.entities.find(
      (entity) => entity.id === contribution.transformationId,
    );

    expect(participant?.kind).toBe("participant");
    expect(action?.kind).toBe("action");
    expect(transformation).toMatchObject({
      kind: "transformation",
      content: AI_RESPONSE,
    });

    expect(trajectory.relations).toContainEqual({
      from: contribution.participantId,
      to: contribution.actionId,
      type: "performs",
    });
    expect(trajectory.relations).toContainEqual({
      from: contribution.actionId,
      to: contribution.transformationId,
      type: "executes",
    });
  });

  it("[T-CSYS-AI-03] tras remontar App, R1 conserva la contribución IA y su system/model/requestId", async () => {
    const user = userEvent.setup();
    mockSuccessfulAiResponse();

    const firstExecution = render(<App />);
    await requestAiSupport(user);
    firstExecution.unmount();

    render(<App />);

    const { trajectory, contribution } = getSingleAiContribution();

    expect(contribution.aiProvenance).toEqual({
      system: "OpenAI",
      model: "gpt-6-luna",
      requestId: "req-test-1",
    });

    expect(
      trajectory.entities.some(
        (entity) =>
          entity.id === contribution.transformationId &&
          entity.kind === "transformation" &&
          entity.content === AI_RESPONSE,
      ),
    ).toBe(true);
  });
});
