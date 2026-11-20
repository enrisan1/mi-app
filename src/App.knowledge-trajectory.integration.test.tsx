import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import {
  attachDecisionReason,
  createKnowledgeTrajectory,
  type KnowledgeTrajectory,
} from "./realizations/knowledge-trajectory/KnowledgeTrajectory";
import { saveAssociatedTrajectory } from "./realizations/knowledge-trajectory/knowledgeTrajectoryRepository";

const MATERIAL_ID = "m1";
const RESULT_ID = "R1";

function seedOrdinaryMaterial() {
  localStorage.setItem(
    "ordinary.materials",
    JSON.stringify([
      {
        id: MATERIAL_ID,
        content: "Obra ordinaria uno",
      },
    ]),
  );

  localStorage.setItem("ordinary.current-work-id", MATERIAL_ID);
}

function createReasonedTrajectory(): KnowledgeTrajectory {
  const trajectory = createKnowledgeTrajectory({
    source: {
      id: "F1",
      kind: "source",
      content: "Fuente documental F1",
    },
    assertion: {
      id: "A1",
      kind: "assertion",
      content: "Afirmación obtenida de F1",
    },
    transformation: {
      id: "T1",
      kind: "transformation",
      content: "Transformación aplicada a A1",
    },
    participant: {
      id: "P1",
      kind: "participant",
      content: "Participante P1",
    },
    action: {
      id: "AC1",
      kind: "action",
      content: "Actuación que aplica T1",
    },
    result: {
      id: RESULT_ID,
      kind: "result",
      content: "Resultado R1",
    },
  });

  return attachDecisionReason(trajectory, {
    objective: {
      id: "O1",
      kind: "objective",
      content: "Seleccionar una alternativa que satisfaga K1, K2 y K3",
    },

    mandatoryConditions: [
      { id: "K1", kind: "condition", content: "K1" },
      { id: "K2", kind: "condition", content: "K2" },
      { id: "K3", kind: "condition", content: "K3" },
    ],

    discardedAlternatives: [
      {
        alternative: {
          id: "M1",
          kind: "alternative",
          content: "M1",
        },
        failedConditionId: "K2",
      },
    ],

    selectedAlternative: {
      id: "M2",
      kind: "alternative",
      content: "M2",
    },

    establishedConditionIds: ["K1", "K2"],

    decisiveConditionId: "K3",

    decisiveEvidence: {
      id: "E4",
      kind: "evidence",
      content: "M2 satisface K3",
    },

    decision: {
      id: "D1",
      kind: "decision",
      content: "Seleccionar M2",
    },

    resultId: RESULT_ID,
  });
}

function seedAssociatedTrajectory() {
  saveAssociatedTrajectory({
    materialId: MATERIAL_ID,
    resultId: RESULT_ID,
    trajectory: createReasonedTrajectory(),
  });
}

async function openR1Trajectory(
  user: ReturnType<typeof userEvent.setup>,
) {
  const trajectories = screen.getByRole("region", {
    name: /^trayectorias de conocimiento$/i,
  });

  const result = within(trajectories).getByRole("article", {
    name: /^trayectoria de resultado R1$/i,
  });

  expect(result).toHaveTextContent("Obra ordinaria uno");
  expect(result).toHaveTextContent("R1");

  await user.click(
    within(result).getByRole("button", {
      name: /^ver trayectoria de R1$/i,
    }),
  );

  return screen.getByRole("region", {
    name: /^trayectoria de R1$/i,
  });
}

describe(
  "GAP-CONV-FINAL-03 — acceso operativo mínimo a una trayectoria ordinaria",
  () => {
    beforeEach(() => {
      localStorage.clear();
      seedOrdinaryMaterial();
      seedAssociatedTrajectory();
    });

    afterEach(() => {
      cleanup();
      localStorage.clear();
    });

    it("[T-HCF3-UI-01] App descubre R1 como trayectoria asociada a la obra ordinaria m1", () => {
      render(<App />);

      const trajectories = screen.getByRole("region", {
        name: /^trayectorias de conocimiento$/i,
      });

      const result = within(trajectories).getByRole("article", {
        name: /^trayectoria de resultado R1$/i,
      });

      expect(result).toHaveTextContent("Obra ordinaria uno");
      expect(result).toHaveTextContent("R1");

      expect(
        within(result).getByRole("button", {
          name: /^ver trayectoria de R1$/i,
        }),
      ).toBeEnabled();
    });

    it("[T-HCF3-UI-02] desde R1 puede abrir y reconocer su procedencia estructurada", async () => {
      const user = userEvent.setup();
      render(<App />);

      const trajectory = await openR1Trajectory(user);

      const provenance = within(trajectory).getByRole("region", {
        name: /^procedencia$/i,
      });

      expect(provenance).toHaveTextContent("F1");
      expect(provenance).toHaveTextContent("A1");
      expect(provenance).toHaveTextContent("T1");
      expect(provenance).toHaveTextContent("P1");
      expect(provenance).toHaveTextContent("AC1");
      expect(provenance).toHaveTextContent("R1");
    });

    it("[T-HCF3-UI-03] desde el mismo R1 puede abrir y reconocer por qué existe en esa forma", async () => {
      const user = userEvent.setup();
      render(<App />);

      const trajectory = await openR1Trajectory(user);

      const reason = within(trajectory).getByRole("region", {
        name: /^razón$/i,
      });

      expect(reason).toHaveTextContent("O1");
      expect(reason).toHaveTextContent("K1");
      expect(reason).toHaveTextContent("K2");
      expect(reason).toHaveTextContent("K3");
      expect(reason).toHaveTextContent("M1");
      expect(reason).toHaveTextContent(/descartad[ao].*K2/i);
      expect(reason).toHaveTextContent("M2");
      expect(reason).toHaveTextContent(/seleccionad[ao]/i);
      expect(reason).toHaveTextContent("E4");
      expect(reason).toHaveTextContent("D1");
    });

    it("[T-HCF3-UI-04] tras remontar App, R1 sigue dando acceso a la misma procedencia y razón", async () => {
      const user = userEvent.setup();

      const firstExecution = render(<App />);
      await openR1Trajectory(user);

      firstExecution.unmount();

      render(<App />);

      const recoveredTrajectory = await openR1Trajectory(user);

      const provenance = within(recoveredTrajectory).getByRole("region", {
        name: /^procedencia$/i,
      });

      const reason = within(recoveredTrajectory).getByRole("region", {
        name: /^razón$/i,
      });

      expect(provenance).toHaveTextContent("F1");
      expect(provenance).toHaveTextContent("R1");
      expect(reason).toHaveTextContent("O1");
      expect(reason).toHaveTextContent("E4");
      expect(reason).toHaveTextContent("D1");
    });
  },
);
