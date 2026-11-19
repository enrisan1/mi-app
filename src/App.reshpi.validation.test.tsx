import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const A = { id: "a", content: "Antecedente formal A" };
const B = { id: "b", content: "Antecedente formal B" };
const W1 = "Trabajo inicial formal W1";
const W2 = "Resultado formal W2";

function seedAntecedents() {
  localStorage.setItem("ordinary.materials", JSON.stringify([A, B]));
}

function aiWorkSelector() {
  const ai = screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i });
  return within(ai).getByRole("combobox", { name: /^obra para apoyo ia$/i });
}

async function openMaterials(
  user: ReturnType<typeof userEvent.setup>,
  need: string,
) {
  const needInput = screen.getByRole("textbox", {
    name: /^qué necesitas considerar ahora$/i,
  });

  await user.clear(needInput);
  await user.type(needInput, need);
  await user.click(
    screen.getByRole("button", { name: /^examinar materiales anteriores$/i }),
  );
}

function ordinaryMaterialArticle(content: string) {
  const article = screen.getAllByRole("article").find((candidate) => {
    const useButton = within(candidate).queryByRole("button", {
      name: /^usar este material \d+$/i,
    });

    return useButton !== null && candidate.textContent?.includes(content);
  });

  if (article === undefined) {
    throw new Error("Material ordinario no encontrado: " + content);
  }

  return article;
}

describe("R-RESHPI-03 — validación formal de convergencia de primera creación", () => {
  beforeEach(() => {
    localStorage.clear();
    seedAntecedents();
  });

  it("[V-RESHPI-01] sin previous, Crear W1 converge con el contexto común y completa la trayectoria longitudinal hasta W2", async () => {
    const user = userEvent.setup();
    let execution = render(<App />);

    await user.type(
      screen.getByRole("textbox", { name: /^introduce un texto libre$/i }),
      W1,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(aiWorkSelector()).toHaveDisplayValue(W1);

    await user.click(
      screen.getByRole("button", { name: /^capturar aportación$/i }),
    );
    await user.type(
      screen.getByLabelText(/^aportación breve$/i),
      "Captura formal de W1",
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    const captureItem = screen.getByText("Captura formal de W1").closest("li");
    expect(captureItem).not.toBeNull();
    expect(captureItem).toHaveTextContent(W1);

    const comparison = screen.getByRole("region", {
      name: /^comparación de documentos$/i,
    });
    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento a$/i }),
      A.id,
    );
    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento b$/i }),
      B.id,
    );
    await user.click(
      within(comparison).getByRole("button", { name: /^comparar$/i }),
    );

    const activeComparison = within(comparison).getByRole("region", {
      name: /^comparación activa$/i,
    });
    expect(activeComparison).toHaveTextContent(W1);

    execution.unmount();

    execution = render(<App />);
    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent(W1);
    expect(aiWorkSelector()).toHaveDisplayValue(W1);

    const resumedCapture = screen.getByText("Captura formal de W1").closest("li");
    expect(resumedCapture).not.toBeNull();
    expect(resumedCapture).toHaveTextContent(W1);

    await openMaterials(user, "Reutilizar A desde el trabajo creado W1.");
    const aArticle = ordinaryMaterialArticle(A.content);
    await user.click(
      within(aArticle).getByRole("button", {
        name: /^usar este material \d+$/i,
      }),
    );

    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent(W1);
    expect(screen.getByLabelText(/^contenido seleccionado$/i)).toHaveTextContent(
      A.content,
    );

    await user.type(
      screen.getByRole("textbox", { name: /^nuevo trabajo$/i }),
      W2,
    );
    await user.click(
      screen.getByRole("button", { name: /^continuar con este material$/i }),
    );
    expect(screen.getByLabelText(/^nuevo trabajo constituido$/i)).toHaveTextContent(
      W2,
    );

    execution.unmount();

    render(<App />);
    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent(W2);

    const resumedUser = userEvent.setup();
    await openMaterials(
      resumedUser,
      "Reconocer W2 y el antecedente A tras una nueva interrupción.",
    );

    const w2Article = ordinaryMaterialArticle(W2);
    expect(w2Article).toHaveTextContent(A.content);
    expect(w2Article).not.toHaveTextContent(B.content);

    expect(aiWorkSelector()).toHaveDisplayValue(W2);
  });
});
