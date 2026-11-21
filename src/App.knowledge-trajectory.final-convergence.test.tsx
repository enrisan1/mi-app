import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import {
  attachDecisionReason,
  attachParticipantProvenance,
  createKnowledgeTrajectory,
  traceResultParticipantProvenance,
  type KnowledgeTrajectory,
} from "./realizations/knowledge-trajectory/KnowledgeTrajectory";
import {
  loadAssociatedTrajectory,
  saveAssociatedTrajectory,
} from "./realizations/knowledge-trajectory/knowledgeTrajectoryRepository";

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

function createIntegratedTrajectory(): KnowledgeTrajectory {
  const semantic = createKnowledgeTrajectory({
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
      id: "PH1",
      kind: "participant",
      content: "Participante humano",
    },
    action: {
      id: "AC-H1",
      kind: "action",
      content: "Intervención humana",
    },
    result: {
      id: RESULT_ID,
      kind: "result",
      content: "Resultado R1",
    },
  });

  const reasoned = attachDecisionReason(semantic, {
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

  return attachParticipantProvenance(reasoned, {
    resultId: RESULT_ID,
    contributions: [
      {
        participant: {
          id: "PH1",
          kind: "participant",
          content: "Participante humano",
        },
        participantType: "human",
        action: {
          id: "AC-H1",
          kind: "action",
          content: "Intervención humana",
        },
        transformationId: "T1",
        contributionState: "accepted",
      },
      {
        participant: {
          id: "PAI1",
          kind: "participant",
          content: "Asistente IA",
        },
        participantType: "ai",
        action: {
          id: "AC-AI1",
          kind: "action",
          content: "Apoyo IA sobre T1",
        },
        transformationId: "T1",
        contributionState: "modified",
        aiProvenance: {
          system: "OpenAI",
          model: "gpt-6-luna",
          requestId: "req-test-1",
        },
      },
    ],
  });
}

function seedIntegratedTrajectory() {
  saveAssociatedTrajectory({
    materialId: MATERIAL_ID,
    resultId: RESULT_ID,
    trajectory: createIntegratedTrajectory(),
  });
}

async function openR1(
  user: ReturnType<typeof userEvent.setup>,
) {
  const trajectories = screen.getByRole("region", {
    name: /^trayectorias de conocimiento$/i,
  });

  const article = within(trajectories).getByRole("article", {
    name: /^trayectoria de resultado R1$/i,
  });

  await user.click(
    within(article).getByRole("button", {
      name: /^ver trayectoria de R1$/i,
    }),
  );

  return screen.getByRole("region", {
    name: /^trayectoria de R1$/i,
  });
}

describe(
  "CONV-FINAL-04 — validación integrada final de la trayectoria completa",
  () => {
    beforeEach(() => {
      localStorage.clear();
      seedOrdinaryMaterial();
      seedIntegratedTrajectory();
    });

    afterEach(() => {
      cleanup();
      localStorage.clear();
    });

    it("[T-CF08-01] la misma trayectoria m1/R1 conserva semántica, razón y procedencia humano/IA tras remontar App", async () => {
      const firstExecution = render(<App />);
      firstExecution.unmount();

      render(<App />);

      const recovered = loadAssociatedTrajectory(MATERIAL_ID, RESULT_ID);

      expect(recovered).not.toBeNull();

      if (recovered === null) {
        throw new Error("Trayectoria integrada m1/R1 no recuperada");
      }

      expect(
        recovered.entities.map((entity) => entity.id),
      ).toEqual(
        expect.arrayContaining([
          "F1",
          "A1",
          "T1",
          "PH1",
          "AC-H1",
          "R1",
          "O1",
          "K1",
          "K2",
          "K3",
          "M1",
          "M2",
          "E4",
          "D1",
          "PAI1",
          "AC-AI1",
        ]),
      );

      expect(
        traceResultParticipantProvenance(recovered, RESULT_ID),
      ).toEqual([
        {
          participantId: "PH1",
          participantType: "human",
          actionId: "AC-H1",
          transformationId: "T1",
          contributionState: "accepted",
        },
        {
          participantId: "PAI1",
          participantType: "ai",
          actionId: "AC-AI1",
          transformationId: "T1",
          contributionState: "modified",
          aiProvenance: {
            system: "OpenAI",
            model: "gpt-6-luna",
            requestId: "req-test-1",
          },
        },
      ]);
    });

    it("[T-CF08-02] R1 expone conjuntamente procedencia estructural, razón y procedencia de participantes", async () => {
      const user = userEvent.setup();
      render(<App />);

      const trajectory = await openR1(user);

      const structural = within(trajectory).getByRole("region", {
        name: /^procedencia$/i,
      });
      expect(structural).toHaveTextContent("F1");
      expect(structural).toHaveTextContent("A1");
      expect(structural).toHaveTextContent("T1");
      expect(structural).toHaveTextContent("R1");

      const reason = within(trajectory).getByRole("region", {
        name: /^razón$/i,
      });
      expect(reason).toHaveTextContent("O1");
      expect(reason).toHaveTextContent("M1");
      expect(reason).toHaveTextContent("M2");
      expect(reason).toHaveTextContent("E4");
      expect(reason).toHaveTextContent("D1");

      const participants = within(trajectory).getByRole("region", {
        name: /^procedencia de participantes$/i,
      });

      expect(participants).toHaveTextContent("PH1");
      expect(participants).toHaveTextContent(/humano/i);
      expect(participants).toHaveTextContent("AC-H1");
      expect(participants).toHaveTextContent(/aceptad[ao]/i);

      expect(participants).toHaveTextContent("PAI1");
      expect(participants).toHaveTextContent(/ia/i);
      expect(participants).toHaveTextContent("AC-AI1");
      expect(participants).toHaveTextContent(/modificad[ao]/i);
      expect(participants).toHaveTextContent("OpenAI");
      expect(participants).toHaveTextContent("gpt-6-luna");
      expect(participants).toHaveTextContent("req-test-1");
    });

    it("[T-CF08-03] desde F1 puede seguir prospectivamente F1 → A1 → T1 → R1", async () => {
      const user = userEvent.setup();
      render(<App />);

      const trajectory = await openR1(user);

      await user.click(
        within(trajectory).getByRole("button", {
          name: /^seguir desde F1$/i,
        }),
      );

      const forward = within(trajectory).getByRole("region", {
        name: /^recorrido desde F1$/i,
      });

      expect(forward).toHaveTextContent("F1");
      expect(forward).toHaveTextContent("A1");
      expect(forward).toHaveTextContent("T1");
      expect(forward).toHaveTextContent("R1");
    });

    it("[T-CF08-04] desde PH1 puede seguir prospectivamente PH1 → AC-H1 → T1 → R1", async () => {
      const user = userEvent.setup();
      render(<App />);

      const trajectory = await openR1(user);

      await user.click(
        within(trajectory).getByRole("button", {
          name: /^seguir desde PH1$/i,
        }),
      );

      const forward = within(trajectory).getByRole("region", {
        name: /^recorrido desde PH1$/i,
      });

      expect(forward).toHaveTextContent("PH1");
      expect(forward).toHaveTextContent("AC-H1");
      expect(forward).toHaveTextContent("T1");
      expect(forward).toHaveTextContent("R1");
    });
  },
);
