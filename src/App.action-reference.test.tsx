import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import App from "./App";

const A1 = "Primera aportación del mismo trabajo";
const A2 = "Segunda aportación que continúa el mismo trabajo";

const PERSISTED_TRAJECTORY_R = {
  current: "R2 existente",
  stable: { id: "S1", content: "R1 existente" },
  published: { id: "P1", sourceStableId: "S1", content: "R1 existente" },
  evaluation: { publishedId: "P1", criterion: "C1", evidence: "E1" },
  collaboration: {
    sourcePublishedId: "P1",
    sharedResult: "R1 existente",
    firstContribution: { participant: "A", content: "A1" },
    secondContribution: { participant: "B", content: "B1" },
  },
  artifact: { id: "X1", sourcePublishedId: "P1", content: "R1 existente" },
  received: { sourceArtifactId: "X1", content: "R1 existente" },
};

async function createInitialWork(
  user: ReturnType<typeof userEvent.setup>,
  content = A1,
) {
  await user.type(
    screen.getByRole("textbox", { name: /^introduce un texto libre$/i }),
    content,
  );
  await user.click(screen.getByRole("button", { name: /^crear$/i }));
}

async function continueOrdinaryThread(
  user: ReturnType<typeof userEvent.setup>,
  content = A2,
) {
  const work = screen.getByRole("region", { name: /^trabajo actual$/i });

  await user.click(
    within(work).getByRole("button", { name: /^seguir trabajando$/i }),
  );
  await user.type(
    screen.getByRole("textbox", { name: /^aportación actual$/i }),
    content,
  );
  await user.click(screen.getByRole("button", { name: /^crear$/i }));
}

describe("R-CSYS-09-I — anclaje del referente de la acción especializada", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it("[T-CSYS-ACTREF-01] conservar/publicar/compartir pertenece semánticamente a Trabajo actual", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);

    const work = screen.getByRole("region", { name: /^trabajo actual$/i });

    expect(
      within(work).getByRole("button", {
        name: /^abrir opciones para conservar, publicar o compartir este trabajo$/i,
      }),
    ).toBeInTheDocument();
  });

  it("[T-CSYS-ACTREF-02] el trabajo recibido de otra persona no contiene la acción de conservar/publicar/compartir el trabajo actual", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);

    const receivedWork = screen.getByRole("region", {
      name: /continuar.*trabajo.*recibido|trabajo recibido.*otra persona/i,
    });

    expect(
      within(receivedWork).queryByRole("button", {
        name: /^abrir opciones para conservar, publicar o compartir este trabajo$/i,
      }),
    ).not.toBeInTheDocument();
  });

  it("[T-CSYS-ACTREF-03] Seguir trabajando y conservar/publicar/compartir permanecen como actuaciones distinguibles sobre el trabajo actual", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);

    const work = screen.getByRole("region", { name: /^trabajo actual$/i });
    const ordinaryContinuation = within(work).getByRole("button", {
      name: /^seguir trabajando$/i,
    });
    const specializedAction = screen.getByRole("button", {
      name: /^abrir opciones para conservar, publicar o compartir este trabajo$/i,
    });

    expect(ordinaryContinuation).toBeInTheDocument();
    expect(specializedAction).toBeInTheDocument();
    expect(ordinaryContinuation).not.toBe(specializedAction);
  });

  it("[T-CSYS-ACTREF-04] continuar un trabajo recibido de otra persona sigue siendo una ruta separada", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);

    const receivedWork = screen.getByRole("region", {
      name: /continuar.*trabajo.*recibido|trabajo recibido.*otra persona/i,
    });
    const currentWork = screen.getByRole("region", { name: /^trabajo actual$/i });

    expect(receivedWork).toBeInTheDocument();
    expect(currentWork).toBeInTheDocument();
    expect(receivedWork).not.toBe(currentWork);
    expect(
      within(receivedWork).getByText(
        /usa esta opción sólo si otra persona te ha enviado un antecedente para continuar/i,
      ),
    ).toBeInTheDocument();
  });

  it("[T-CSYS-ACTREF-05] con R previa se preservan Y y R sin modificar estado antes de elegir", () => {
    localStorage.setItem("ru2m1.previous", A2);
    localStorage.setItem(
      "post-v1-integrated.state",
      JSON.stringify(PERSISTED_TRAJECTORY_R),
    );

    render(<App />);

    expect(
      screen.getByRole("button", {
        name: /^abrir opciones para conservar, publicar o compartir este trabajo$/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /^retomar opciones anteriores de conservación, publicación y colaboración$/i,
      }),
    ).toBeInTheDocument();

    expect(localStorage.getItem("ru2m1.previous")).toBe(A2);
    expect(
      JSON.parse(localStorage.getItem("post-v1-integrated.state")!),
    ).toEqual(PERSISTED_TRAJECTORY_R);
  });

  it("[T-CSYS-ACTREF-06] el contrato conserva el núcleo material cubierto por HPRES y HCONT", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);
    await continueOrdinaryThread(user);

    const work = screen.getByRole("region", { name: /^trabajo actual$/i });

    expect(work).toHaveTextContent(A1);
    expect(work).toHaveTextContent(A2);
    expect(screen.getByLabelText(/^antecedente$/i)).toHaveTextContent(A1);
    expect(screen.getByLabelText(/^actuación actual$/i)).toHaveTextContent(A2);
    expect(localStorage.getItem("ru2m1.previous")).toBe(A2);
    expect(
      screen.queryByRole("heading", { name: /^integración post-v1$/i }),
    ).not.toBeInTheDocument();
  });
});
