import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import {
  traceResult,
  type KnowledgeTrajectory,
} from "./realizations/knowledge-trajectory/KnowledgeTrajectory";
import { listAssociatedTrajectories } from "./realizations/knowledge-trajectory/knowledgeTrajectoryRepository";

const ANTECEDENT_ID = "m1";
const ANTECEDENT_CONTENT = "Fuente antecedente para continuar";
const NEW_WORK = "Nueva síntesis obtenida al continuar el material";

function seedOrdinaryMaterials() {
  localStorage.setItem(
    "ordinary.materials",
    JSON.stringify([
      {
        id: ANTECEDENT_ID,
        content: ANTECEDENT_CONTENT,
      },
      {
        id: "m2",
        content: "Material independiente para habilitar la localización",
      },
    ]),
  );
  localStorage.setItem("ordinary.current-work-id", ANTECEDENT_ID);
}

async function continueOrdinaryWork(
  user: ReturnType<typeof userEvent.setup>,
) {
  await user.type(
    screen.getByRole("textbox", {
      name: /^qué necesitas considerar ahora$/i,
    }),
    "Continuar desde la fuente antecedente",
  );

  await user.click(
    screen.getByRole("button", {
      name: /^examinar materiales anteriores$/i,
    }),
  );

  const previousMaterials = screen.getByRole("region", {
    name: /^materiales anteriores$/i,
  });
  await user.click(
    within(previousMaterials).getByRole("button", {
      name: /^usar este material 1$/i,
    }),
  );

  await user.type(
    screen.getByRole("textbox", { name: /^nuevo trabajo$/i }),
    NEW_WORK,
  );

  await user.click(
    screen.getByRole("button", {
      name: /^continuar con este material$/i,
    }),
  );

  expect(screen.getByLabelText(/^nuevo trabajo constituido$/i)).toHaveTextContent(
    NEW_WORK,
  );
}

function getGeneratedAssociation() {
  return listAssociatedTrajectories().find(
    (association) => association.materialId === "m3",
  );
}

function expectOrdinarySemanticTrajectory(
  trajectory: KnowledgeTrajectory,
  resultId: string,
) {
  const trace = traceResult(trajectory, resultId);

  const entityById = (id: string) =>
    trajectory.entities.find((entity) => entity.id === id);

  expect(entityById(trace.sourceId)).toMatchObject({
    kind: "source",
    content: ANTECEDENT_CONTENT,
  });
  expect(entityById(trace.assertionId)).toMatchObject({
    kind: "assertion",
    content: NEW_WORK,
  });
  expect(entityById(trace.transformationId)?.kind).toBe("transformation");
  expect(entityById(trace.participantId)).toMatchObject({
    kind: "participant",
    content: "Usuario principal",
  });
  expect(entityById(trace.actionId)?.kind).toBe("action");
  expect(entityById(trace.resultId)).toMatchObject({
    kind: "result",
    content: NEW_WORK,
  });
}

describe("GAP-CONV-SYS-01 — una continuación ordinaria constituye su trayectoria", () => {
  beforeEach(() => {
    localStorage.clear();
    seedOrdinaryMaterials();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it("[T-CSYS-01] continuar un material ordinario crea y persiste una trayectoria semántica asociada al nuevo trabajo", async () => {
    const user = userEvent.setup();
    render(<App />);

    await continueOrdinaryWork(user);

    const association = getGeneratedAssociation();

    expect(association).toBeDefined();
    expect(association?.materialId).toBe("m3");
    expect(association?.resultId).toEqual(expect.any(String));

    expectOrdinarySemanticTrajectory(
      association!.trajectory,
      association!.resultId,
    );
  });

  it("[T-CSYS-02] la trayectoria generada por el recorrido ordinario puede abrirse desde App sin siembra externa", async () => {
    const user = userEvent.setup();
    render(<App />);

    await continueOrdinaryWork(user);

    const association = getGeneratedAssociation();
    expect(association).toBeDefined();

    const trajectories = screen.getByRole("region", {
      name: /^trayectorias de conocimiento$/i,
    });

    const resultArticle = within(trajectories).getByRole("article", {
      name: `Trayectoria de resultado ${association!.resultId}`,
    });

    await user.click(
      within(resultArticle).getByRole("button", {
        name: `Ver trayectoria de ${association!.resultId}`,
      }),
    );

    const trajectoryRegion = screen.getByRole("region", {
      name: `Trayectoria de ${association!.resultId}`,
    });
    const provenance = within(trajectoryRegion).getByRole("region", {
      name: /^procedencia$/i,
    });

    expect(provenance).toHaveTextContent(association!.resultId);
  });

  it("[T-CSYS-03] tras remontar App, la trayectoria ordinaria sigue asociada al nuevo trabajo y es recuperable", async () => {
    const user = userEvent.setup();
    const firstExecution = render(<App />);

    await continueOrdinaryWork(user);

    const association = getGeneratedAssociation();
    expect(association).toBeDefined();

    firstExecution.unmount();
    render(<App />);

    const trajectories = screen.getByRole("region", {
      name: /^trayectorias de conocimiento$/i,
    });
    const resultArticle = within(trajectories).getByRole("article", {
      name: `Trayectoria de resultado ${association!.resultId}`,
    });

    expect(resultArticle).toHaveTextContent(NEW_WORK);

    await user.click(
      within(resultArticle).getByRole("button", {
        name: `Ver trayectoria de ${association!.resultId}`,
      }),
    );

    expect(
      screen.getByRole("region", {
        name: `Trayectoria de ${association!.resultId}`,
      }),
    ).toBeInTheDocument();
  });
});
