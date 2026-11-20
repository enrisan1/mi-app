import { describe, expect, it, vi } from "vitest";

type EntityKind =
  | "source"
  | "assertion"
  | "transformation"
  | "participant"
  | "action"
  | "result";

type WitnessEntity = {
  id: string;
  kind: EntityKind;
  content: string;
};

type WitnessRelation = {
  from: string;
  to: string;
  type:
    | "supports"
    | "input-to"
    | "performs"
    | "executes"
    | "produces";
};

type KnowledgeTrajectory = {
  entities: WitnessEntity[];
  relations: WitnessRelation[];
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

  traceResult(
    trajectory: KnowledgeTrajectory,
    resultId: string,
  ): {
    sourceId: string;
    assertionId: string;
    transformationId: string;
    participantId: string;
    actionId: string;
    resultId: string;
  };
};

// Contrato contingente de HITO-CONV-FINAL-01.
// No prescribe arquitectura general de conocimiento.
async function loadTrajectoryModule() {
  vi.resetModules();

  const modules = import.meta.glob<KnowledgeTrajectoryModule>(
    "./KnowledgeTrajectory.ts",
  );

  const load = modules["./KnowledgeTrajectory.ts"];

  expect(
    load,
    "HITO-CONV-FINAL-01 ausente: falta ./KnowledgeTrajectory.ts",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("HITO-CONV-FINAL-01 ausente");
  }

  return await load();
}

function mainWitness() {
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
      content: "Participante humano P1",
    },
    action: {
      id: "AC1",
      kind: "action" as const,
      content: "Actuación realizada por P1",
    },
    result: {
      id: "R1",
      kind: "result" as const,
      content: "Resultado producido por T1",
    },
  };
}

describe("HITO-CONV-FINAL-01 — primera trayectoria semántica mínima explícita", () => {
  it("[T-HCF-01] conserva seis entidades distinguibles con identidad y tipo semántico propios", async () => {
    const { createKnowledgeTrajectory } = await loadTrajectoryModule();
    const witness = mainWitness();

    const trajectory = createKnowledgeTrajectory(witness);

    expect(trajectory.entities).toEqual(
      expect.arrayContaining([
        witness.source,
        witness.assertion,
        witness.transformation,
        witness.participant,
        witness.action,
        witness.result,
      ]),
    );

    expect(new Set(trajectory.entities.map((entity) => entity.id)).size).toBe(6);

    expect(new Set(trajectory.entities.map((entity) => entity.kind))).toEqual(
      new Set([
        "source",
        "assertion",
        "transformation",
        "participant",
        "action",
        "result",
      ]),
    );
  });

  it("[T-HCF-02] representa explícitamente F1 → A1 y A1 → T1", async () => {
    const { createKnowledgeTrajectory } = await loadTrajectoryModule();

    const trajectory = createKnowledgeTrajectory(mainWitness());

    expect(trajectory.relations).toContainEqual({
      from: "F1",
      to: "A1",
      type: "supports",
    });

    expect(trajectory.relations).toContainEqual({
      from: "A1",
      to: "T1",
      type: "input-to",
    });
  });

  it("[T-HCF-03] representa explícitamente P1 → AC1 → T1", async () => {
    const { createKnowledgeTrajectory } = await loadTrajectoryModule();

    const trajectory = createKnowledgeTrajectory(mainWitness());

    expect(trajectory.relations).toContainEqual({
      from: "P1",
      to: "AC1",
      type: "performs",
    });

    expect(trajectory.relations).toContainEqual({
      from: "AC1",
      to: "T1",
      type: "executes",
    });
  });

  it("[T-HCF-04] T1 produce R1 sin sobrescribir los contenidos antecedentes", async () => {
    const { createKnowledgeTrajectory } = await loadTrajectoryModule();
    const witness = mainWitness();

    const trajectory = createKnowledgeTrajectory(witness);

    expect(trajectory.relations).toContainEqual({
      from: "T1",
      to: "R1",
      type: "produces",
    });

    expect(
      trajectory.entities.find((entity) => entity.id === "F1")?.content,
    ).toBe(witness.source.content);

    expect(
      trajectory.entities.find((entity) => entity.id === "A1")?.content,
    ).toBe(witness.assertion.content);

    expect(
      trajectory.entities.find((entity) => entity.id === "T1")?.content,
    ).toBe(witness.transformation.content);

    expect(
      trajectory.entities.find((entity) => entity.id === "R1")?.content,
    ).toBe(witness.result.content);
  });

  it("[T-HCF-05] reconstruye desde R1 la trayectoria R1 ← T1 ← A1 ← F1 y P1 → AC1 → T1", async () => {
    const { createKnowledgeTrajectory, traceResult } =
      await loadTrajectoryModule();

    const trajectory = createKnowledgeTrajectory(mainWitness());

    expect(traceResult(trajectory, "R1")).toEqual({
      sourceId: "F1",
      assertionId: "A1",
      transformationId: "T1",
      participantId: "P1",
      actionId: "AC1",
      resultId: "R1",
    });
  });

  it("[T-HCF-06] con F2 y P2 presentes no atribuye a A1 ni AC1 relaciones ajenas", async () => {
    const { createKnowledgeTrajectory } = await loadTrajectoryModule();

    const trajectory = createKnowledgeTrajectory({
      ...mainWitness(),
      additionalEntities: [
        {
          id: "F2",
          kind: "source",
          content: "Fuente documental F2 no utilizada",
        },
        {
          id: "P2",
          kind: "participant",
          content: "Participante P2 no actuante",
        },
      ],
    });

    expect(trajectory.entities).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: "F2", kind: "source" }),
        expect.objectContaining({ id: "P2", kind: "participant" }),
      ]),
    );

    expect(trajectory.relations).not.toContainEqual(
      expect.objectContaining({
        from: "F2",
        to: "A1",
      }),
    );

    expect(trajectory.relations).not.toContainEqual(
      expect.objectContaining({
        from: "P2",
        to: "AC1",
      }),
    );

    expect(trajectory.relations).toContainEqual({
      from: "F1",
      to: "A1",
      type: "supports",
    });

    expect(trajectory.relations).toContainEqual({
      from: "P1",
      to: "AC1",
      type: "performs",
    });
  });
});
