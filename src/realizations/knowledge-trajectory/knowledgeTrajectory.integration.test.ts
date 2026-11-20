import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../../App";
import {
  attachDecisionReason,
  createKnowledgeTrajectory,
  traceResult,
  traceResultReason,
  type KnowledgeTrajectory,
} from "./KnowledgeTrajectory";

const MATERIAL_ID = "m1";
const RESULT_ID = "R1";

type AssociatedTrajectory = {
  materialId: string;
  resultId: string;
  trajectory: KnowledgeTrajectory;
};

type KnowledgeTrajectoryRepositoryModule = {
  saveAssociatedTrajectory(association: AssociatedTrajectory): void;

  loadAssociatedTrajectory(
    materialId: string,
    resultId: string,
  ): KnowledgeTrajectory | null;
};

// Contrato contingente de HITO-CONV-FINAL-03.
// Prueba asociación y persistencia de una trayectoria respecto de un
// material ordinario real. No prescribe todavía interfaz de navegación.
async function loadRepository() {
  vi.resetModules();

  const modules = import.meta.glob<KnowledgeTrajectoryRepositoryModule>(
    "./knowledgeTrajectoryRepository.ts",
  );

  const load = modules["./knowledgeTrajectoryRepository.ts"];

  expect(
    load,
    "HITO-CONV-FINAL-03 ausente: falta ./knowledgeTrajectoryRepository.ts",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("HITO-CONV-FINAL-03 ausente");
  }

  const repository = await load();

  expect(
    repository.saveAssociatedTrajectory,
    "HITO-CONV-FINAL-03 ausente: falta saveAssociatedTrajectory",
  ).toBeTypeOf("function");

  expect(
    repository.loadAssociatedTrajectory,
    "HITO-CONV-FINAL-03 ausente: falta loadAssociatedTrajectory",
  ).toBeTypeOf("function");

  return repository;
}

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

function expectOrdinaryMaterialM1() {
  const authorIdentity = screen.getByRole("region", {
    name: /^identidad autoral$/i,
  });

  const materials = within(authorIdentity).getByRole("combobox", {
    name: /^obra ordinaria$/i,
  });

  expect(
    within(materials).getByRole("option", {
      name: "Obra ordinaria uno",
    }),
  ).toHaveValue(MATERIAL_ID);
}

describe(
  "HITO-CONV-FINAL-03 — primera trayectoria ordinaria persistente y recuperable",
  () => {
    beforeEach(() => {
      localStorage.clear();
      seedOrdinaryMaterial();
    });

    afterEach(() => {
      cleanup();
      localStorage.clear();
      vi.resetModules();
    });

    it("[T-HCF3-01] asocia explícitamente m1/R1 con una KnowledgeTrajectory", async () => {
      render(<App />);

      expectOrdinaryMaterialM1();

      const repository = await loadRepository();
      const trajectory = createReasonedTrajectory();

      repository.saveAssociatedTrajectory({
        materialId: MATERIAL_ID,
        resultId: RESULT_ID,
        trajectory,
      });

      expect(
        repository.loadAssociatedTrajectory(MATERIAL_ID, RESULT_ID),
      ).toEqual(trajectory);
    });

    it("[T-HCF3-02] guardar la trayectoria no modifica ordinary.materials", async () => {
      render(<App />);
      expectOrdinaryMaterialM1();

      const repository = await loadRepository();
      const materialsBefore = localStorage.getItem("ordinary.materials");

      repository.saveAssociatedTrajectory({
        materialId: MATERIAL_ID,
        resultId: RESULT_ID,
        trajectory: createReasonedTrajectory(),
      });

      expect(localStorage.getItem("ordinary.materials")).toBe(
        materialsBefore,
      );
    });

    it("[T-HCF3-03] la asociación m1/R1 sobrevive al desmontaje y nueva ejecución de App", async () => {
      const repository = await loadRepository();
      const trajectory = createReasonedTrajectory();

      const firstExecution = render(<App />);
      expectOrdinaryMaterialM1();

      repository.saveAssociatedTrajectory({
        materialId: MATERIAL_ID,
        resultId: RESULT_ID,
        trajectory,
      });

      firstExecution.unmount();

      const secondExecution = render(<App />);
      expectOrdinaryMaterialM1();

      const recovered = repository.loadAssociatedTrajectory(
        MATERIAL_ID,
        RESULT_ID,
      );

      expect(recovered).toEqual(trajectory);

      secondExecution.unmount();
    });

    it("[T-HCF3-04] la trayectoria recuperada conserva la procedencia reconstruible de R1", async () => {
      const repository = await loadRepository();

      repository.saveAssociatedTrajectory({
        materialId: MATERIAL_ID,
        resultId: RESULT_ID,
        trajectory: createReasonedTrajectory(),
      });

      cleanup();

      render(<App />);
      expectOrdinaryMaterialM1();

      const recovered = repository.loadAssociatedTrajectory(
        MATERIAL_ID,
        RESULT_ID,
      );

      expect(recovered).not.toBeNull();

      if (recovered === null) {
        throw new Error("Trayectoria m1/R1 no recuperada");
      }

      expect(traceResult(recovered, RESULT_ID)).toEqual({
        sourceId: "F1",
        assertionId: "A1",
        transformationId: "T1",
        participantId: "P1",
        actionId: "AC1",
        resultId: RESULT_ID,
      });
    });

    it("[T-HCF3-05] la trayectoria recuperada conserva la razón de R1 y discrimina una clave ajena", async () => {
      const repository = await loadRepository();

      repository.saveAssociatedTrajectory({
        materialId: MATERIAL_ID,
        resultId: RESULT_ID,
        trajectory: createReasonedTrajectory(),
      });

      cleanup();

      render(<App />);
      expectOrdinaryMaterialM1();

      const recovered = repository.loadAssociatedTrajectory(
        MATERIAL_ID,
        RESULT_ID,
      );

      expect(recovered).not.toBeNull();

      if (recovered === null) {
        throw new Error("Trayectoria m1/R1 no recuperada");
      }

      expect(traceResultReason(recovered, RESULT_ID)).toEqual({
        objectiveId: "O1",
        mandatoryConditionIds: ["K1", "K2", "K3"],

        discardedAlternatives: [
          {
            alternativeId: "M1",
            failedConditionId: "K2",
          },
        ],

        selectedAlternativeId: "M2",
        establishedConditionIds: ["K1", "K2"],

        decisiveConditionId: "K3",
        decisiveEvidenceId: "E4",

        decisionId: "D1",
        resultId: RESULT_ID,
      });

      expect(
        repository.loadAssociatedTrajectory(MATERIAL_ID, "R-AJENO"),
      ).toBeNull();

      expect(
        repository.loadAssociatedTrajectory("m-ajeno", RESULT_ID),
      ).toBeNull();
    });
  },
);
