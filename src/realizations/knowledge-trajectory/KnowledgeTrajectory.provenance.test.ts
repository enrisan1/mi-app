import { describe, expect, it } from "vitest";
import {
  createKnowledgeTrajectory,
  type KnowledgeTrajectory,
} from "./KnowledgeTrajectory";

type ParticipantType = "human" | "ai" | "other";
type ContributionState = "produced" | "accepted" | "rejected" | "modified";

type AiProvenance = {
  system: string;
  model?: string;
  requestId?: string;
};

type ParticipantContribution = {
  participantId: string;
  participantType: ParticipantType;
  actionId: string;
  transformationId: string;
  contributionState: ContributionState;
  aiProvenance?: AiProvenance;
};

type AttachParticipantProvenanceInput = {
  resultId: string;
  contributions: Array<{
    participant: {
      id: string;
      kind: "participant";
      content: string;
    };
    participantType: ParticipantType;
    action: {
      id: string;
      kind: "action";
      content: string;
    };
    transformationId: string;
    contributionState: ContributionState;
    aiProvenance?: AiProvenance;
  }>;
};

type KnowledgeTrajectoryProvenanceModule = {
  attachParticipantProvenance?: (
    trajectory: KnowledgeTrajectory,
    input: AttachParticipantProvenanceInput,
  ) => KnowledgeTrajectory;
  traceResultParticipantProvenance?: (
    trajectory: KnowledgeTrajectory,
    resultId: string,
  ) => ParticipantContribution[];
};

async function loadProvenanceApi() {
  const module = (await import("./KnowledgeTrajectory")) as
    typeof import("./KnowledgeTrajectory") & KnowledgeTrajectoryProvenanceModule;

  expect(
    module.attachParticipantProvenance,
    "HITO-CONV-FINAL-04 ausente: falta attachParticipantProvenance",
  ).toBeTypeOf("function");

  expect(
    module.traceResultParticipantProvenance,
    "HITO-CONV-FINAL-04 ausente: falta traceResultParticipantProvenance",
  ).toBeTypeOf("function");

  if (
    module.attachParticipantProvenance === undefined ||
    module.traceResultParticipantProvenance === undefined
  ) {
    throw new Error("HITO-CONV-FINAL-04 ausente");
  }

  return {
    attachParticipantProvenance: module.attachParticipantProvenance,
    traceResultParticipantProvenance:
      module.traceResultParticipantProvenance,
  };
}

function createBaseTrajectory(): KnowledgeTrajectory {
  return createKnowledgeTrajectory({
    source: {
      id: "F1",
      kind: "source",
      content: "Fuente F1",
    },
    assertion: {
      id: "A1",
      kind: "assertion",
      content: "Afirmación A1",
    },
    transformation: {
      id: "T1",
      kind: "transformation",
      content: "Transformación T1",
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
      id: "R1",
      kind: "result",
      content: "Resultado R1",
    },
  });
}

describe(
  "HITO-CONV-FINAL-04 — primera trayectoria con procedencia humana/IA explícita",
  () => {
    it("[T-HCF4-01] distingue dentro de R1 una contribución humana y una contribución IA", async () => {
      const {
        attachParticipantProvenance,
        traceResultParticipantProvenance,
      } = await loadProvenanceApi();

      const trajectory = attachParticipantProvenance(
        createBaseTrajectory(),
        {
          resultId: "R1",
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
        },
      );

      expect(
        traceResultParticipantProvenance(trajectory, "R1"),
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

    it("[T-HCF4-02] la procedencia sobrevive a serialización de la misma KnowledgeTrajectory", async () => {
      const {
        attachParticipantProvenance,
        traceResultParticipantProvenance,
      } = await loadProvenanceApi();

      const trajectory = attachParticipantProvenance(
        createBaseTrajectory(),
        {
          resultId: "R1",
          contributions: [
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
              contributionState: "produced",
              aiProvenance: {
                system: "OpenAI",
                model: "gpt-6-luna",
                requestId: "req-test-1",
              },
            },
          ],
        },
      );

      const recovered = JSON.parse(
        JSON.stringify(trajectory),
      ) as KnowledgeTrajectory;

      expect(
        traceResultParticipantProvenance(recovered, "R1"),
      ).toEqual([
        {
          participantId: "PAI1",
          participantType: "ai",
          actionId: "AC-AI1",
          transformationId: "T1",
          contributionState: "produced",
          aiProvenance: {
            system: "OpenAI",
            model: "gpt-6-luna",
            requestId: "req-test-1",
          },
        },
      ]);
    });

    it("[T-HCF4-03] no atribuye procedencia IA a un participante humano", async () => {
      const {
        attachParticipantProvenance,
        traceResultParticipantProvenance,
      } = await loadProvenanceApi();

      const trajectory = attachParticipantProvenance(
        createBaseTrajectory(),
        {
          resultId: "R1",
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
          ],
        },
      );

      const [human] = traceResultParticipantProvenance(
        trajectory,
        "R1",
      );

      expect(human).toEqual({
        participantId: "PH1",
        participantType: "human",
        actionId: "AC-H1",
        transformationId: "T1",
        contributionState: "accepted",
      });
      expect(human).not.toHaveProperty("aiProvenance");
    });

    it("[T-HCF4-04] no inventa model ni requestId cuando la procedencia IA no los aporta", async () => {
      const {
        attachParticipantProvenance,
        traceResultParticipantProvenance,
      } = await loadProvenanceApi();

      const trajectory = attachParticipantProvenance(
        createBaseTrajectory(),
        {
          resultId: "R1",
          contributions: [
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
              contributionState: "produced",
              aiProvenance: {
                system: "Sistema IA",
              },
            },
          ],
        },
      );

      expect(
        traceResultParticipantProvenance(trajectory, "R1"),
      ).toEqual([
        {
          participantId: "PAI1",
          participantType: "ai",
          actionId: "AC-AI1",
          transformationId: "T1",
          contributionState: "produced",
          aiProvenance: {
            system: "Sistema IA",
          },
        },
      ]);
    });

    it("[T-HCF4-05] una variante conserva sus propios participantes y metadatos sin hardcoding", async () => {
      const {
        attachParticipantProvenance,
        traceResultParticipantProvenance,
      } = await loadProvenanceApi();

      const base = createKnowledgeTrajectory({
        source: { id: "F9", kind: "source", content: "Fuente F9" },
        assertion: {
          id: "A9",
          kind: "assertion",
          content: "Afirmación A9",
        },
        transformation: {
          id: "T9",
          kind: "transformation",
          content: "Transformación T9",
        },
        participant: {
          id: "PH9",
          kind: "participant",
          content: "Participante humano 9",
        },
        action: {
          id: "AC-H9",
          kind: "action",
          content: "Intervención humana 9",
        },
        result: {
          id: "R9",
          kind: "result",
          content: "Resultado R9",
        },
      });

      const trajectory = attachParticipantProvenance(base, {
        resultId: "R9",
        contributions: [
          {
            participant: {
              id: "PAI9",
              kind: "participant",
              content: "Asistente IA 9",
            },
            participantType: "ai",
            action: {
              id: "AC-AI9",
              kind: "action",
              content: "Apoyo IA 9",
            },
            transformationId: "T9",
            contributionState: "rejected",
            aiProvenance: {
              system: "Sistema Z",
              requestId: "req-9",
            },
          },
        ],
      });

      expect(
        traceResultParticipantProvenance(trajectory, "R9"),
      ).toEqual([
        {
          participantId: "PAI9",
          participantType: "ai",
          actionId: "AC-AI9",
          transformationId: "T9",
          contributionState: "rejected",
          aiProvenance: {
            system: "Sistema Z",
            requestId: "req-9",
          },
        },
      ]);
    });
  },
);
