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
  await user.click(
    screen.getByRole("button", { name: /^seguir trabajando$/i }),
  );
  await user.type(
    screen.getByRole("textbox", { name: /^aportación actual$/i }),
    content,
  );
  await user.click(screen.getByRole("button", { name: /^crear$/i }));
}

describe("R-CSYS-09-F — presentación humana del hilo ordinario", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it("[T-CSYS-HPRES-01] A1 y A2 se presentan dentro de una misma unidad reconocible como Trabajo actual", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);
    await continueOrdinaryThread(user);

    const work = screen.getByRole("region", { name: /^trabajo actual$/i });

    expect(work).toHaveTextContent(A1);
    expect(work).toHaveTextContent(A2);
    expect(within(work).getByText(/aportación anterior/i)).toBeInTheDocument();
    expect(within(work).getByText(/aportación actual|aportación más reciente/i)).toBeInTheDocument();
  });

  it("[T-CSYS-HPRES-02] tras remount la unidad Trabajo actual conserva el estado vigente, el antecedente y la posibilidad de nueva aportación", async () => {
    const user = userEvent.setup();
    const execution = render(<App />);

    await createInitialWork(user);
    await continueOrdinaryThread(user);

    execution.unmount();
    render(<App />);

    const work = screen.getByRole("region", { name: /^trabajo actual$/i });

    expect(work).toHaveTextContent(A2);
    expect(work).toHaveTextContent(A1);
    expect(
      within(work).getByRole("textbox", { name: /nueva aportación|aportación actual/i }),
    ).toBeInTheDocument();
  });

  it("[T-CSYS-HPRES-03] Seguir trabajando está asociado al Trabajo actual y precede a la recepción de continuidad compartida", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);

    const work = screen.getByRole("region", { name: /^trabajo actual$/i });
    const continueButton = within(work).getByRole("button", {
      name: /^seguir trabajando$/i,
    });
    const receivedContinuation = screen.getByRole("region", {
      name: /trabajo recibido|antecedente recibido|continuar.*otra persona/i,
    });

    expect(
      continueButton.compareDocumentPosition(receivedContinuation) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("[T-CSYS-HPRES-04] la vista ordinaria permite abrir las opciones especializadas sin exigir comprender el término post-V1", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);

    expect(document.body).not.toHaveTextContent(/post-v1/i);

    expect(
      screen.getByRole("button", {
        name: /conservar|publicar|compartir|opciones.*trabajo/i,
      }),
    ).toBeInTheDocument();
  });

  it("[T-CSYS-HPRES-05] con R previa se preservan dos decisiones humanas distintas sin modificar Y ni R antes de elegir", () => {
    localStorage.setItem("ru2m1.previous", A2);
    localStorage.setItem(
      "post-v1-integrated.state",
      JSON.stringify(PERSISTED_TRAJECTORY_R),
    );

    render(<App />);

    expect(
      screen.getByRole("button", {
        name: /conservar|publicar|compartir|opciones.*trabajo/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /retomar.*(?:opciones|trabajo|trayectoria).*anterior/i,
      }),
    ).toBeInTheDocument();

    expect(localStorage.getItem("ru2m1.previous")).toBe(A2);
    expect(
      JSON.parse(localStorage.getItem("post-v1-integrated.state")!),
    ).toEqual(PERSISTED_TRAJECTORY_R);
  });

  it("[T-CSYS-HPRES-06] la recepción colaborativa se presenta como continuación de un trabajo recibido de otra persona", () => {
    render(<App />);

    expect(
      screen.getByRole("region", {
        name: /continuar.*trabajo.*recibido|trabajo recibido.*otra persona/i,
      }),
    ).toBeInTheDocument();

    const receivedWork = screen.getByRole("region", {
      name: /continuar.*trabajo.*recibido|trabajo recibido.*otra persona/i,
    });

    expect(
      within(receivedWork).getByText(
        /usa esta opción sólo si otra persona te ha enviado un antecedente para continuar/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: /^continuidad compartida$/i }),
    ).not.toBeInTheDocument();
  });

  it("[T-CSYS-HPRES-07] la mejora de presentación no altera la continuidad material A1 → A2 ni fuerza entrada en la superficie especializada", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);
    await continueOrdinaryThread(user);

    expect(screen.getByLabelText(/^antecedente$/i)).toHaveTextContent(A1);
    expect(screen.getByLabelText(/^actuación actual$/i)).toHaveTextContent(A2);
    expect(localStorage.getItem("ru2m1.previous")).toBe(A2);
    expect(
      screen.queryByRole("heading", { name: /^integración post-v1$/i }),
    ).not.toBeInTheDocument();
  });
});
