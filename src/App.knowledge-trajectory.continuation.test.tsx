import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import {
  attachDecisionReason,
  attachParticipantProvenance,
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

async function continueFromR1(
  user: ReturnType<typeof userEvent.setup>,
  contribution: string,
) {
  const r1 = await openTrajectory(user, "R1");

  await user.click(
    within(r1).getByRole("button", {
      name: /^continuar desde R1$/i,
    }),
  );

  const continuation = screen.getByRole("region", {
    name: /^continuación desde R1$/i,
  });

  await user.type(
    within(continuation).getByRole("textbox", {
      name: /^nueva aportación$/i,
    }),
    contribution,
  );

  await user.click(
    within(continuation).getByRole("button", {
      name: /^constituir resultado posterior$/i,
    }),
  );

  return continuation;
}

describe(
  "PROS-POST-CONV-01 — continuidad operativa R1 → R2 desde trayectoria integrada",
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

    it("[T-PPC-01] una trayectoria abierta de R1 ofrece continuar operativamente desde R1", async () => {
      const user = userEvent.setup();
      render(<App />);

      const r1 = await openTrajectory(user, "R1");

      expect(
        within(r1).getByRole("button", {
          name: /^continuar desde R1$/i,
        }),
      ).toBeEnabled();
    });

    it("[T-PPC-02] continuar desde R1 permite constituir un resultado posterior R2 mediante una nueva aportación", async () => {
      const user = userEvent.setup();
      render(<App />);

      await continueFromR1(
        user,
        "E5 — nueva evidencia incorporada después de R1",
      );

      const trajectories = screen.getByRole("region", {
        name: /^trayectorias de conocimiento$/i,
      });

      expect(
        within(trajectories).getByRole("article", {
          name: /^trayectoria de resultado R2$/i,
        }),
      ).toBeInTheDocument();
    });

    it("[T-PPC-03] R2 permite reconstruir R1 como antecedente, distinguir la nueva aportación y reconocer un fundamento propio", async () => {
      const user = userEvent.setup();
      render(<App />);

      await continueFromR1(
        user,
        "E5 — nueva evidencia incorporada después de R1",
      );

      const r2 = await openTrajectory(user, "R2");

      const continuation = within(r2).getByRole("region", {
        name: /^continuidad desde R1$/i,
      });

      expect(continuation).toHaveTextContent("R1");
      expect(continuation).toHaveTextContent(
        "E5 — nueva evidencia incorporada después de R1",
      );
      expect(continuation).toHaveTextContent(/humano/i);

      const basis = within(r2).getByRole("region", {
        name: /^fundamento de R2$/i,
      });

      expect(basis).toHaveTextContent(
        "E5 — nueva evidencia incorporada después de R1",
      );
    });

    it("[T-PPC-04] tras remontar App, R2 conserva la continuidad reconstruible con R1", async () => {
      const user = userEvent.setup();
      const firstExecution = render(<App />);

      await continueFromR1(
        user,
        "E5 — nueva evidencia incorporada después de R1",
      );

      firstExecution.unmount();

      render(<App />);

      const r2 = await openTrajectory(user, "R2");

      const continuation = within(r2).getByRole("region", {
        name: /^continuidad desde R1$/i,
      });

      expect(continuation).toHaveTextContent("R1");
      expect(continuation).toHaveTextContent(
        "E5 — nueva evidencia incorporada después de R1",
      );
      expect(continuation).toHaveTextContent(/humano/i);
    });
  },
);
