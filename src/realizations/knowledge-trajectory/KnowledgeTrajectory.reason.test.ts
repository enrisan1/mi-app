import { describe, expect, it, vi } from "vitest";

type EntityKind =
  | "source"
  | "assertion"
  | "transformation"
  | "participant"
  | "action"
  | "result"
  | "objective"
  | "condition"
  | "alternative"
  | "evidence"
  | "decision";

type WitnessEntity = {
  id: string;
  kind: EntityKind;
  content: string;
};

type RelationType =
  | "supports"
  | "input-to"
  | "performs"
  | "executes"
  | "produces"
  | "requires"
  | "fails"
  | "satisfies"
  | "selects"
  | "justifies";

type WitnessRelation = {
  from: string;
  to: string;
  type: RelationType;
};

type KnowledgeTrajectory = {
  entities: WitnessEntity[];
  relations: WitnessRelation[];
};

type DecisionReasonInput = {
  objective: WitnessEntity;
  mandatoryConditions: WitnessEntity[];

  discardedAlternatives: Array<{
    alternative: WitnessEntity;
    failedConditionId: string;
  }>;

  selectedAlternative: WitnessEntity;

  establishedConditionIds: string[];

  decisiveConditionId: string;
  decisiveEvidence: WitnessEntity;

  decision: WitnessEntity;
  resultId: string;
};

type ResultReason = {
  objectiveId: string;
  mandatoryConditionIds: string[];

  discardedAlternatives: Array<{
    alternativeId: string;
    failedConditionId: string;
  }>;

  selectedAlternativeId: string;

  establishedConditionIds: string[];

  decisiveConditionId: string;
  decisiveEvidenceId: string;

  decisionId: string;
  resultId: string;
};

type KnowledgeTrajectoryModule = {
  createKnowledgeTrajectory(input: {
    source: WitnessEntity;
    assertion: WitnessEntity;
    transformation: WitnessEntity;
    participant: WitnessEntity;
    action: WitnessEntity;
    result: WitnessEntity;
    additionalEntities?: WitnessEntity[];
  }): KnowledgeTrajectory;

  attachDecisionReason(
    trajectory: KnowledgeTrajectory,
    reason: DecisionReasonInput,
  ): KnowledgeTrajectory;

  traceResultReason(
    trajectory: KnowledgeTrajectory,
    resultId: string,
  ): ResultReason;
};

// Contrato contingente de HITO-CONV-FINAL-02.
// Reutiliza la semántica decisional ya demostrada por Handoff.
// No constituye un motor general de razonamiento.
async function loadReasonedTrajectoryModule() {
  vi.resetModules();

  const modules = import.meta.glob<KnowledgeTrajectoryModule>(
    "./KnowledgeTrajectory.ts",
  );

  const load = modules["./KnowledgeTrajectory.ts"];

  expect(load).toBeTypeOf("function");

  if (!load) {
    throw new Error("KnowledgeTrajectory ausente");
  }

  const module = await load();

  expect(
    module.attachDecisionReason,
    "HITO-CONV-FINAL-02 ausente: falta attachDecisionReason",
  ).toBeTypeOf("function");

  expect(
    module.traceResultReason,
    "HITO-CONV-FINAL-02 ausente: falta traceResultReason",
  ).toBeTypeOf("function");

  return module;
}

function baseTrajectoryInput() {
  return {
    source: {
      id: "F1",
      kind: "source" as const,
      content: "Fuente documental F1",
    },
    assertion: {
      id: "A1",
      kind: "assertion" as const,
      content: "Afirmación obtenida de F1",
    },
    transformation: {
      id: "T1",
      kind: "transformation" as const,
      content: "Transformación aplicada a A1",
    },
    participant: {
      id: "P1",
      kind: "participant" as const,
      content: "Participante P1",
    },
    action: {
      id: "AC1",
      kind: "action" as const,
      content: "Actuación que aplica T1",
    },
    result: {
      id: "R1",
      kind: "result" as const,
      content: "Resultado R1",
    },
  };
}

function handoffReason(): DecisionReasonInput {
  return {
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

    resultId: "R1",
  };
}

describe("HITO-CONV-FINAL-02 — primera razón estructurada de un resultado", () => {
  it("[T-HCF2-01] conserva objetivo y condiciones obligatorias como razón explícita", async () => {
    const {
      createKnowledgeTrajectory,
      attachDecisionReason,
    } = await loadReasonedTrajectoryModule();

    const trajectory = attachDecisionReason(
      createKnowledgeTrajectory(baseTrajectoryInput()),
      handoffReason(),
    );

    expect(trajectory.entities).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: "O1",
          kind: "objective",
        }),
        expect.objectContaining({
          id: "K1",
          kind: "condition",
        }),
        expect.objectContaining({
          id: "K2",
          kind: "condition",
        }),
        expect.objectContaining({
          id: "K3",
          kind: "condition",
        }),
      ]),
    );

    for (const conditionId of ["K1", "K2", "K3"]) {
      expect(trajectory.relations).toContainEqual({
        from: "O1",
        to: conditionId,
        type: "requires",
      });
    }
  });

  it("[T-HCF2-02] conserva el descarte de M1 por K2 y la satisfacción de condiciones por M2", async () => {
    const {
      createKnowledgeTrajectory,
      attachDecisionReason,
    } = await loadReasonedTrajectoryModule();

    const trajectory = attachDecisionReason(
      createKnowledgeTrajectory(baseTrajectoryInput()),
      handoffReason(),
    );

    expect(trajectory.relations).toContainEqual({
      from: "M1",
      to: "K2",
      type: "fails",
    });

    expect(trajectory.relations).toContainEqual({
      from: "M2",
      to: "K1",
      type: "satisfies",
    });

    expect(trajectory.relations).toContainEqual({
      from: "M2",
      to: "K2",
      type: "satisfies",
    });
  });

  it("[T-HCF2-03] conserva E4 como evidencia propia y la vincula con la condición decisiva K3", async () => {
    const {
      createKnowledgeTrajectory,
      attachDecisionReason,
    } = await loadReasonedTrajectoryModule();

    const trajectory = attachDecisionReason(
      createKnowledgeTrajectory(baseTrajectoryInput()),
      handoffReason(),
    );

    expect(trajectory.entities).toContainEqual({
      id: "E4",
      kind: "evidence",
      content: "M2 satisface K3",
    });

    expect(trajectory.relations).toContainEqual({
      from: "E4",
      to: "K3",
      type: "supports",
    });

    expect(trajectory.relations).toContainEqual({
      from: "M2",
      to: "K3",
      type: "satisfies",
    });
  });

  it("[T-HCF2-04] D1 selecciona M2 y queda vinculada explícitamente con R1", async () => {
    const {
      createKnowledgeTrajectory,
      attachDecisionReason,
    } = await loadReasonedTrajectoryModule();

    const trajectory = attachDecisionReason(
      createKnowledgeTrajectory(baseTrajectoryInput()),
      handoffReason(),
    );

    expect(trajectory.relations).toContainEqual({
      from: "D1",
      to: "M2",
      type: "selects",
    });

    expect(trajectory.relations).toContainEqual({
      from: "D1",
      to: "R1",
      type: "justifies",
    });
  });

  it("[T-HCF2-05] reconstruye desde R1 la razón estructurada del resultado", async () => {
    const {
      createKnowledgeTrajectory,
      attachDecisionReason,
      traceResultReason,
    } = await loadReasonedTrajectoryModule();

    const trajectory = attachDecisionReason(
      createKnowledgeTrajectory(baseTrajectoryInput()),
      handoffReason(),
    );

    expect(traceResultReason(trajectory, "R1")).toEqual({
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
      resultId: "R1",
    });
  });

  it("[T-HCF2-06] una variante conserva sus propias razones sin reconstruir M2/K3/E4 por hardcoding", async () => {
    const {
      createKnowledgeTrajectory,
      attachDecisionReason,
      traceResultReason,
    } = await loadReasonedTrajectoryModule();

    const variant: DecisionReasonInput = {
      objective: {
        id: "O2",
        kind: "objective",
        content: "Seleccionar una alternativa que satisfaga L1 y L2",
      },

      mandatoryConditions: [
        { id: "L1", kind: "condition", content: "L1" },
        { id: "L2", kind: "condition", content: "L2" },
      ],

      discardedAlternatives: [
        {
          alternative: {
            id: "N1",
            kind: "alternative",
            content: "N1",
          },
          failedConditionId: "L1",
        },
      ],

      selectedAlternative: {
        id: "N3",
        kind: "alternative",
        content: "N3",
      },

      establishedConditionIds: ["L1"],

      decisiveConditionId: "L2",

      decisiveEvidence: {
        id: "E9",
        kind: "evidence",
        content: "N3 satisface L2",
      },

      decision: {
        id: "D2",
        kind: "decision",
        content: "Seleccionar N3",
      },

      resultId: "R1",
    };

    const trajectory = attachDecisionReason(
      createKnowledgeTrajectory(baseTrajectoryInput()),
      variant,
    );

    expect(traceResultReason(trajectory, "R1")).toEqual({
      objectiveId: "O2",
      mandatoryConditionIds: ["L1", "L2"],

      discardedAlternatives: [
        {
          alternativeId: "N1",
          failedConditionId: "L1",
        },
      ],

      selectedAlternativeId: "N3",
      establishedConditionIds: ["L1"],

      decisiveConditionId: "L2",
      decisiveEvidenceId: "E9",

      decisionId: "D2",
      resultId: "R1",
    });

    expect(trajectory.entities).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: "M2" }),
        expect.objectContaining({ id: "K3" }),
        expect.objectContaining({ id: "E4" }),
      ]),
    );
  });
});
