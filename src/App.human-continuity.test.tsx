import { cleanup, render, screen } from "@testing-library/react";
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
  const action = screen.getByRole("button", {
    name: /^seguir trabajando$/i,
  });

  await user.click(action);

  const input = screen.getByRole("textbox", {
    name: /^aportación actual$/i,
  });
  await user.type(input, content);
  await user.click(screen.getByRole("button", { name: /^crear$/i }));
}

function getOrdinaryMaterials() {
  return JSON.parse(
    localStorage.getItem("ordinary.materials") ?? "[]",
  ) as Array<{ id: string; content: string; antecedentMaterialId?: string }>;
}

describe("R-CSYS-09-C — continuidad humana ordinaria reconocible", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  it("[T-CSYS-HCONT-01] A1 → A2 puede ejercerse ordinariamente sin entrar en PostV1", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);

    expect(
      screen.getByRole("button", { name: /^seguir trabajando$/i }),
    ).toBeInTheDocument();

    await continueOrdinaryThread(user);

    expect(
      screen.queryByRole("heading", { name: /^integración post-v1$/i }),
    ).not.toBeInTheDocument();
    expect(screen.getByLabelText(/^actuación actual$/i)).toHaveTextContent(A2);
  });

  it("[T-CSYS-HCONT-02] A1 y A2 siguen reconocibles como partes del mismo hilo", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);
    await continueOrdinaryThread(user);

    expect(screen.getByLabelText(/^antecedente$/i)).toHaveTextContent(A1);
    expect(screen.getByLabelText(/^actuación actual$/i)).toHaveTextContent(A2);

    const materials = getOrdinaryMaterials();
    expect(materials.some((material) => material.content === A1)).toBe(true);
    expect(materials.some((material) => material.content === A2)).toBe(true);
  });

  it("[T-CSYS-HCONT-03] tras remount A2 es actual y A1 sigue recuperable como antecedente", async () => {
    const user = userEvent.setup();
    const execution = render(<App />);

    await createInitialWork(user);
    await continueOrdinaryThread(user);

    execution.unmount();
    render(<App />);

    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent(A2);

    await user.type(
      screen.getByRole("textbox", {
        name: /^qué necesitas considerar ahora$/i,
      }),
      "Revisar antecedentes del mismo trabajo",
    );
    await user.click(
      screen.getByRole("button", {
        name: /^examinar materiales anteriores$/i,
      }),
    );

    expect(
      screen.getByRole("region", { name: /^materiales anteriores$/i }),
    ).toHaveTextContent(A1);
    expect(
      screen.getByRole("region", { name: /^materiales anteriores$/i }),
    ).toHaveTextContent(A2);
  });

  it("[T-CSYS-HCONT-04] la entrada PostV1 sigue disponible como acción distinta y explícita", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);

    expect(
      screen.getByRole("button", {
        name: /^abrir opciones para conservar, publicar o compartir este trabajo$/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /^seguir trabajando$/i }),
    ).toBeInTheDocument();
  });

  it("[T-CSYS-HCONT-05] usar A2 en PostV1 conserva current=A2 y S1 no se constituye automáticamente", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user);
    await continueOrdinaryThread(user);

    await user.click(
      screen.getByRole("button", {
        name: /^abrir opciones para conservar, publicar o compartir este trabajo$/i,
      }),
    );

    expect(screen.getByLabelText("Contenido del trabajo actual")).toHaveTextContent(
      A2,
    );
    expect(
      screen.queryByLabelText("Identificador del estado estable"),
    ).not.toBeInTheDocument();
  });

  it("[T-CSYS-HCONT-06] con R previa se preserva la elección entre A2 y R antes de decidir", async () => {
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
    expect(
      screen.queryByRole("heading", { name: /^integración post-v1$/i }),
    ).not.toBeInTheDocument();
  });

  it("[T-CSYS-HCONT-07] la ruta PostV1 explícita sigue permitiendo constituir un antecedente colaborativo entregable", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createInitialWork(user, "Antecedente inicial");

    cleanup();
    render(<App />);

    await user.type(
      screen.getByRole("textbox", { name: /^aportación actual$/i }),
      A1,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    await user.click(
      screen.getByRole("button", {
        name: /^abrir opciones para conservar, publicar o compartir este trabajo$/i,
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: /conservar trabajo actual como referencia estable/i,
      }),
    );
    await user.click(
      screen.getByRole("button", { name: /publicar p1 desde s1/i }),
    );

    await user.type(screen.getByRole("textbox", { name: /^criterio$/i }), "C1");
    await user.type(screen.getByRole("textbox", { name: /^evidencia$/i }), "E1");
    await user.click(
      screen.getByRole("button", { name: /asociar soporte evaluativo/i }),
    );

    await user.type(
      screen.getByRole("textbox", {
        name: /contribución de participante a/i,
      }),
      "Aportación A transferible",
    );
    await user.click(
      screen.getByRole("button", { name: /añadir a1/i }),
    );

    await user.click(
      screen.getByRole("button", {
        name: /(?=.*antecedente)(?=.*compart)/i,
      }),
    );

    expect(
      (
        screen.getByRole("textbox", {
          name: /(?=.*antecedente)(?=.*(?:entregar|transfer))/i,
        }) as HTMLTextAreaElement
      ).value,
    ).toContain("Aportación A transferible");

  });

  it("[T-CSYS-HCONT-08] la recuperación de estado PostV1 incompatible sigue devolviendo una App ordinaria utilizable", async () => {
    const user = userEvent.setup();

    localStorage.setItem(
      "post-v1-integrated.state",
      JSON.stringify({
        current: "Trabajo recuperado",
        stable: { id: "S1", content: "Trabajo recuperado" },
        published: {
          id: "P1",
          sourceStableId: "S1",
          content: "Trabajo recuperado",
        },
        evaluation: {
          publishedId: "P1",
          criterion: "Criterio previo",
          evidence: "Evidencia previa",
        },
        collaboration: {
          sourcePublishedId: "P1",
          sharedResult: "Trabajo recuperado",
          secondContribution: null,
        },
        artifact: null,
        received: null,
      }),
    );

    render(<App />);

    await user.click(
      screen.getByRole("button", {
        name: /retomar opciones anteriores de conservación, publicación y colaboración/i,
      }),
    );

    const recovery = screen.getByRole("button", {
      name: /(?=.*(?:recuper|restable|reinici|descart|continu))(?=.*(?:estado|trayectoria|datos|trabajo))/i,
    });
    await user.click(recovery);

    const ordinaryInput = screen.getByRole("textbox", {
      name: /introduce un texto libre/i,
    });

    await user.type(ordinaryInput, "Trabajo posterior a la recuperación");
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Trabajo posterior a la recuperación",
    );
  });
});
