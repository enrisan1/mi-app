import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import {
  attachParticipantProvenance,
  createKnowledgeTrajectory,
  traceResult,
  traceResultParticipantProvenance,
} from "./realizations/knowledge-trajectory/KnowledgeTrajectory";
import {
  listAssociatedTrajectories,
  saveAssociatedTrajectory,
} from "./realizations/knowledge-trajectory/knowledgeTrajectoryRepository";

const MATERIAL_ID = "m1";
const RESULT_ID = "R1";
const RESULT_CONTENT = "Resultado R1 preparado por P1";
const P1_CONTRIBUTION = "Aportación de P1 que debe viajar con el relevo";
const P2_CONTRIBUTION =
  "Aportación de P2 incorporada después de recibir el relevo";

function seedR1ForHandoff() {
  localStorage.setItem(
    "ordinary.materials",
    JSON.stringify([{ id: MATERIAL_ID, content: RESULT_CONTENT }]),
  );
  localStorage.setItem("ordinary.current-work-id", MATERIAL_ID);

  const base = createKnowledgeTrajectory({
    source: {
      id: "F1",
      kind: "source",
      content: "Fuente de R1",
    },
    assertion: {
      id: "A1",
      kind: "assertion",
      content: "Afirmación de R1",
    },
    transformation: {
      id: "T1",
      kind: "transformation",
      content: "Transformación que produjo R1",
    },
    participant: {
      id: "P1",
      kind: "participant",
      content: "Participante P1",
    },
    action: {
      id: "AC1",
      kind: "action",
      content: P1_CONTRIBUTION,
    },
    result: {
      id: RESULT_ID,
      kind: "result",
      content: RESULT_CONTENT,
    },
  });

  const trajectory = attachParticipantProvenance(base, {
    resultId: RESULT_ID,
    contributions: [
      {
        participant: {
          id: "P1",
          kind: "participant",
          content: "Participante P1",
        },
        participantType: "human",
        action: {
          id: "AC1",
          kind: "action",
          content: P1_CONTRIBUTION,
        },
        transformationId: "T1",
        contributionState: "produced",
      },
    ],
  });

  saveAssociatedTrajectory({
    materialId: MATERIAL_ID,
    resultId: RESULT_ID,
    trajectory,
  });
}

async function openR1(user: ReturnType<typeof userEvent.setup>) {
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

async function prepareTransferFromR1(
  user: ReturnType<typeof userEvent.setup>,
) {
  const r1 = await openR1(user);

  await user.click(
    within(r1).getByRole("button", {
      name: /^preparar relevo de R1$/i,
    }),
  );

  const transfer = within(r1).getByRole("textbox", {
    name: /^relevo entregable de R1$/i,
  });

  const value = (transfer as HTMLTextAreaElement).value;
  expect(value.trim()).not.toBe("");

  return value;
}

async function receiveAsP2AndContinue(
  user: ReturnType<typeof userEvent.setup>,
  transferredValue: string,
) {
  const shared = screen.getByRole("region", {
    name: /^continuidad compartida$/i,
  });

  fireEvent.change(
    within(shared).getByRole("textbox", {
      name: /^antecedente compartido recibido$/i,
    }),
    { target: { value: transferredValue } },
  );

  await user.click(
    within(shared).getByRole("button", {
      name: /^recibir antecedente compartido$/i,
    }),
  );

  expect(
    within(shared).getByLabelText(/^resultado compartido$/i),
  ).toHaveTextContent(RESULT_CONTENT);
  expect(
    within(shared).getByLabelText(/^aportación de a$/i),
  ).toHaveTextContent(P1_CONTRIBUTION);

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

function getR2Association() {
  return listAssociatedTrajectories().find(
    (association) =>
      association.resultId !== RESULT_ID &&
      association.continuation?.antecedentResultId === RESULT_ID,
  );
}

describe("GAP-CONV-SYS-04 — relevo P1 → P2 dentro de la misma trayectoria", () => {
  beforeEach(() => {
    localStorage.clear();
    seedR1ForHandoff();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it("[T-CSYS-HO-01] R1 puede constituir un relevo entregable a P2 a partir de la trayectoria persistida", async () => {
    const user = userEvent.setup();
    render(<App />);

    const transfer = await prepareTransferFromR1(user);
    const parsed = JSON.parse(transfer) as {
      sharedResult?: unknown;
      firstContribution?: { participant?: unknown; content?: unknown };
    };

    expect(parsed.sharedResult).toBe(RESULT_CONTENT);
    expect(parsed.firstContribution).toEqual({
      participant: "A",
      content: P1_CONTRIBUTION,
    });
  });

  it("[T-CSYS-HO-02] P2 recibe el relevo de R1 y su continuación constituye R2 vinculado al antecedente R1", async () => {
    const user = userEvent.setup();
    render(<App />);

    const transfer = await prepareTransferFromR1(user);
    await receiveAsP2AndContinue(user, transfer);

    const r2 = getR2Association();

    expect(r2).toBeDefined();
    expect(r2?.continuation?.antecedentResultId).toBe(RESULT_ID);
    expect(r2?.continuation?.contribution).toBe(P2_CONTRIBUTION);
  });

  it("[T-CSYS-HO-03] R2 conserva qué recibió P2, qué añadió, qué actuación realizó y qué resultado produjo", async () => {
    const user = userEvent.setup();
    render(<App />);

    const transfer = await prepareTransferFromR1(user);
    await receiveAsP2AndContinue(user, transfer);

    const r2 = getR2Association();
    expect(r2).toBeDefined();

    const trace = traceResult(r2!.trajectory, r2!.resultId);
    const entity = (id: string) =>
      r2!.trajectory.entities.find((candidate) => candidate.id === id);

    expect(entity(trace.sourceId)?.content).toContain(RESULT_CONTENT);
    expect(entity(trace.sourceId)?.content).toContain(P1_CONTRIBUTION);
    expect(entity(trace.participantId)).toMatchObject({
      kind: "participant",
      content: "P2",
    });
    expect(entity(trace.actionId)).toMatchObject({
      kind: "action",
      content: "Continuar trabajo compartido",
    });
    expect(entity(trace.transformationId)).toMatchObject({
      kind: "transformation",
      content: P2_CONTRIBUTION,
    });
    expect(entity(trace.resultId)).toMatchObject({
      kind: "result",
      content: P2_CONTRIBUTION,
    });

    const contributions = traceResultParticipantProvenance(
      r2!.trajectory,
      r2!.resultId,
    );

    expect(contributions).toContainEqual(
      expect.objectContaining({
        participantType: "human",
        participantId: trace.participantId,
        actionId: trace.actionId,
        transformationId: trace.transformationId,
      }),
    );
  });

  it("[T-CSYS-HO-04] tras remontar App, R2 conserva la continuidad reconstruible con R1 y la aportación de P2", async () => {
    const user = userEvent.setup();
    const firstExecution = render(<App />);

    const transfer = await prepareTransferFromR1(user);
    await receiveAsP2AndContinue(user, transfer);

    const created = getR2Association();
    expect(created).toBeDefined();

    firstExecution.unmount();
    render(<App />);

    const recovered = listAssociatedTrajectories().find(
      (association) =>
        association.resultId === created!.resultId &&
        association.continuation?.antecedentResultId === RESULT_ID,
    );

    expect(recovered).toBeDefined();
    expect(recovered?.continuation?.contribution).toBe(P2_CONTRIBUTION);

    const trace = traceResult(recovered!.trajectory, recovered!.resultId);
    expect(
      recovered!.trajectory.entities.find(
        (entity) => entity.id === trace.resultId,
      )?.content,
    ).toBe(P2_CONTRIBUTION);
  });
});
