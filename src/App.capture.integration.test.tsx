import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const CAPTURE_TEXT =
  "Comprobar después si esta separación también debe aplicarse a la validación.";

function getOrdinaryActivity() {
  return screen.getByRole("heading", { name: /^ahora$/i });
}

function getCaptureButton() {
  return screen.getByRole("button", { name: /^capturar aportación$/i });
}

async function openCapture(user: ReturnType<typeof userEvent.setup>) {
  expect(getOrdinaryActivity()).toBeInTheDocument();
  await user.click(getCaptureButton());
}

describe("HITO-80-CONV-01 — captura contextual integrada en App", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("[T-CONV-80-01-01] abre captura sin sustituir la actividad ordinaria", async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(getOrdinaryActivity()).toBeInTheDocument();

    await user.click(getCaptureButton());

    expect(getOrdinaryActivity()).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
    ).toBeInTheDocument();
  });

  it("[T-CONV-80-01-02] cancelar no conserva ni altera la actividad ordinaria", async () => {
    const user = userEvent.setup();

    render(<App />);

    await openCapture(user);
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      CAPTURE_TEXT,
    );
    await user.click(screen.getByRole("button", { name: /^cancelar$/i }));

    expect(screen.queryByText(CAPTURE_TEXT)).not.toBeInTheDocument();
    expect(getOrdinaryActivity()).toBeInTheDocument();
    expect(localStorage.getItem("ordinary.materials")).toBeNull();
    expect(localStorage.getItem("ru2m1.previous")).toBeNull();
    expect(localStorage.getItem("ru2m1.retained")).toBeNull();
    expect(localStorage.getItem("post-v1-integrated.state")).toBeNull();
  });

  it("[T-CONV-80-01-03] conserva explícitamente una captura con referencia temporal", async () => {
    const user = userEvent.setup();

    render(<App />);

    await openCapture(user);
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      CAPTURE_TEXT,
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    const capture = screen.getByText(CAPTURE_TEXT);
    expect(capture).toBeInTheDocument();

    const item = capture.closest("li");
    expect(item).not.toBeNull();

    const time = item?.querySelector("time");
    expect(time).not.toBeNull();
    expect(time?.getAttribute("datetime")).toBeTruthy();
    expect(
      Number.isNaN(Date.parse(time?.getAttribute("datetime") ?? "")),
    ).toBe(false);
  });

  it("[T-CONV-80-01-04] conservar captura no modifica estados ordinarios preexistentes", async () => {
    const user = userEvent.setup();

    const ordinaryMaterials = JSON.stringify([
      { id: "m1", content: "Material ordinario existente" },
    ]);
    const postV1 = JSON.stringify({
      current: "Trayectoria existente",
      stable: null,
      published: null,
      evaluation: null,
      collaboration: null,
      artifact: null,
      received: null,
    });

    localStorage.setItem("ordinary.materials", ordinaryMaterials);
    localStorage.setItem("ru2m1.previous", "Trabajo previo");
    localStorage.setItem("ru2m1.retained", "Trabajo retenido");
    localStorage.setItem("post-v1-integrated.state", postV1);

    render(<App />);

    await openCapture(user);
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      CAPTURE_TEXT,
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    expect(localStorage.getItem("ordinary.materials")).toBe(ordinaryMaterials);
    expect(localStorage.getItem("ru2m1.previous")).toBe("Trabajo previo");
    expect(localStorage.getItem("ru2m1.retained")).toBe("Trabajo retenido");
    expect(localStorage.getItem("post-v1-integrated.state")).toBe(postV1);
  });

  it("[T-CONV-80-01-05] recupera una captura tras desmontar y volver a montar App", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<App />);

    await openCapture(user);
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      CAPTURE_TEXT,
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    expect(screen.getByText(CAPTURE_TEXT)).toBeInTheDocument();

    firstExecution.unmount();
    render(<App />);

    expect(getOrdinaryActivity()).toBeInTheDocument();
    expect(screen.getByText(CAPTURE_TEXT)).toBeInTheDocument();
  });

  it("[T-CONV-80-01-06] una captura conservada no se convierte en material ordinario", async () => {
    const user = userEvent.setup();

    render(<App />);

    await openCapture(user);
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      CAPTURE_TEXT,
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    expect(screen.getByText(CAPTURE_TEXT)).toBeInTheDocument();

    const materials = JSON.parse(
      localStorage.getItem("ordinary.materials") ?? "[]",
    ) as Array<{ content?: string }>;

    expect(materials.some((material) => material.content === CAPTURE_TEXT)).toBe(
      false,
    );
    expect(localStorage.getItem("ru2m1.previous")).not.toBe(CAPTURE_TEXT);
    expect(localStorage.getItem("ru2m1.retained")).not.toBe(CAPTURE_TEXT);
  });

  it("[T-CONV-80-01-07] después de capturar puede continuar el recorrido ordinario", async () => {
    const user = userEvent.setup();

    render(<App />);

    await openCapture(user);
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      CAPTURE_TEXT,
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    expect(getOrdinaryActivity()).toBeInTheDocument();

    await user.type(
      screen.getByRole("textbox", { name: /^introduce un texto libre$/i }),
      "Trabajo ordinario posterior",
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/^actuación actual$/i)).toHaveTextContent(
      "Trabajo ordinario posterior",
    );
    expect(screen.getByText(CAPTURE_TEXT)).toBeInTheDocument();
  });
});
