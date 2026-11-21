import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import {
  createKnowledgeTrajectory,
  traceResultReason,
} from "./realizations/knowledge-trajectory/KnowledgeTrajectory";
import {
  loadAssociatedTrajectory,
  saveAssociatedTrajectory,
} from "./realizations/knowledge-trajectory/knowledgeTrajectoryRepository";

const MATERIAL_ID = "m1";
const RESULT_ID = "R1";

const DECISION_INPUT = {
  objective: "Elegir una alternativa que conserve procedencia y permita continuar",
  condition1: "Conservar procedencia",
  condition2: "Permitir continuación",
  decisiveCondition: "Mantener el contexto verificable",
  discardedAlternative: "Recrear el contexto manualmente",
  selectedAlternative: "Continuar desde la trayectoria persistida",
  decisiveEvidence: "La trayectoria recuperada conserva el antecedente y el resultado",
  decision: "Seleccionar la continuidad desde la trayectoria persistida",
};

function seedOrdinaryWorkWithTrajectory() {
  localStorage.setItem(
    "ordinary.materials",
    JSON.stringify([
      {
        id: MATERIAL_ID,
        content: "Trabajo ordinario con trayectoria pendiente de fundamento",
      },
    ]),
  );
  localStorage.setItem("ordinary.current-work-id", MATERIAL_ID);

  saveAssociatedTrajectory({
    materialId: MATERIAL_ID,
    resultId: RESULT_ID,
    trajectory: createKnowledgeTrajectory({
      source: {
        id: "F1",
        kind: "source",
        content: "Fuente inicial",
      },
      assertion: {
        id: "A1",
        kind: "assertion",
        content: "Afirmación inicial",
      },
      transformation: {
        id: "T1",
        kind: "transformation",
        content: "Transformación inicial",
      },
      participant: {
        id: "P1",
        kind: "participant",
        content: "Usuario principal",
      },
      action: {
        id: "AC1",
        kind: "action",
        content: "Constituir resultado",
      },
      result: {
        id: RESULT_ID,
        kind: "result",
        content: "Trabajo ordinario con trayectoria pendiente de fundamento",
      },
    }),
  });
}

async function openR1(user: ReturnType<typeof userEvent.setup>) {
  const trajectories = screen.getByRole("region", {
    name: /^trayectorias de conocimiento$/i,
  });

  const result = within(trajectories).getByRole("article", {
    name: /^trayectoria de resultado R1$/i,
  });

  await user.click(
    within(result).getByRole("button", {
      name: /^ver trayectoria de R1$/i,
    }),
  );

  return screen.getByRole("region", {
    name: /^trayectoria de R1$/i,
  });
}

async function registerDecision(user: ReturnType<typeof userEvent.setup>) {
  const trajectory = await openR1(user);

  await user.click(
    within(trajectory).getByRole("button", {
      name: /^registrar decisión para R1$/i,
    }),
  );

  const form = within(trajectory).getByRole("region", {
    name: /^decisión para R1$/i,
  });

  await user.type(
    within(form).getByRole("textbox", { name: /^objetivo de decisión$/i }),
    DECISION_INPUT.objective,
  );
  await user.type(
    within(form).getByRole("textbox", { name: /^condición obligatoria 1$/i }),
    DECISION_INPUT.condition1,
  );
  await user.type(
    within(form).getByRole("textbox", { name: /^condición obligatoria 2$/i }),
    DECISION_INPUT.condition2,
  );
  await user.type(
    within(form).getByRole("textbox", { name: /^condición decisiva$/i }),
    DECISION_INPUT.decisiveCondition,
  );
  await user.type(
    within(form).getByRole("textbox", { name: /^alternativa descartada$/i }),
    DECISION_INPUT.discardedAlternative,
  );
  await user.type(
    within(form).getByRole("textbox", {
      name: /^condición incumplida por la alternativa descartada$/i,
    }),
    DECISION_INPUT.condition2,
  );
  await user.type(
    within(form).getByRole("textbox", { name: /^alternativa seleccionada$/i }),
    DECISION_INPUT.selectedAlternative,
  );
  await user.type(
    within(form).getByRole("textbox", { name: /^evidencia decisiva$/i }),
    DECISION_INPUT.decisiveEvidence,
  );
  await user.type(
    within(form).getByRole("textbox", { name: /^decisión$/i }),
    DECISION_INPUT.decision,
  );

  await user.click(
    within(form).getByRole("button", {
      name: /^constituir fundamento de R1$/i,
    }),
  );
}

function loadReasonedTrajectory() {
  const trajectory = loadAssociatedTrajectory(MATERIAL_ID, RESULT_ID);
  expect(trajectory).not.toBeNull();
  return trajectory!;
}

function entityContent(trajectory: ReturnType<typeof loadReasonedTrajectory>, id: string) {
  return trajectory.entities.find((entity) => entity.id === id)?.content;
}

describe("GAP-CONV-SYS-03 — decisión ordinaria integrada en la misma trayectoria", () => {
  beforeEach(() => {
    localStorage.clear();
    seedOrdinaryWorkWithTrajectory();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it("[T-CSYS-DEC-01] desde R1 puede ejercerse una actuación ordinaria mínima de decisión sin sembrar razón desde el test", async () => {
    const user = userEvent.setup();
    render(<App />);

    await registerDecision(user);

    const trajectory = loadReasonedTrajectory();
    const reason = traceResultReason(trajectory, RESULT_ID);

    expect(reason.resultId).toBe(RESULT_ID);
  });

  it("[T-CSYS-DEC-02] la decisión constituye objetivo, condiciones, alternativas, evidencia y decisión dentro de la misma KnowledgeTrajectory", async () => {
    const user = userEvent.setup();
    render(<App />);

    await registerDecision(user);

    const trajectory = loadReasonedTrajectory();
    const reason = traceResultReason(trajectory, RESULT_ID);

    expect(entityContent(trajectory, reason.objectiveId)).toBe(
      DECISION_INPUT.objective,
    );

    expect(reason.mandatoryConditionIds.map((id) => entityContent(trajectory, id))).toEqual(
      expect.arrayContaining([
        DECISION_INPUT.condition1,
        DECISION_INPUT.condition2,
        DECISION_INPUT.decisiveCondition,
      ]),
    );

    expect(
      reason.discardedAlternatives.map((discarded) => ({
        alternative: entityContent(trajectory, discarded.alternativeId),
        failedCondition: entityContent(trajectory, discarded.failedConditionId),
      })),
    ).toContainEqual({
      alternative: DECISION_INPUT.discardedAlternative,
      failedCondition: DECISION_INPUT.condition2,
    });

    expect(entityContent(trajectory, reason.selectedAlternativeId)).toBe(
      DECISION_INPUT.selectedAlternative,
    );
    expect(entityContent(trajectory, reason.decisiveEvidenceId)).toBe(
      DECISION_INPUT.decisiveEvidence,
    );
    expect(entityContent(trajectory, reason.decisionId)).toBe(
      DECISION_INPUT.decision,
    );

    expect(trajectory.relations).toContainEqual({
      from: reason.decisionId,
      to: RESULT_ID,
      type: "justifies",
    });
  });

  it("[T-CSYS-DEC-03] tras remontar App, R1 conserva y muestra el fundamento constituido", async () => {
    const user = userEvent.setup();
    const firstExecution = render(<App />);

    await registerDecision(user);
    firstExecution.unmount();

    render(<App />);
    const recovered = await openR1(user);

    const reasonRegion = within(recovered).getByRole("region", {
      name: /^razón$/i,
    });

    expect(reasonRegion).toHaveTextContent(DECISION_INPUT.objective);
    expect(reasonRegion).toHaveTextContent(DECISION_INPUT.selectedAlternative);
    expect(reasonRegion).toHaveTextContent(DECISION_INPUT.decisiveEvidence);
    expect(reasonRegion).toHaveTextContent(DECISION_INPUT.decision);
  });
});
