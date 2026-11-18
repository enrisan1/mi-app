import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const A = { id: "a", content: "Antecedente global A" };
const B = { id: "b", content: "Antecedente global B" };
const W1 = "Trabajo global W1";
const W2 = "Resultado global W2";

function seedAntecedents() {
  localStorage.setItem("ordinary.materials", JSON.stringify([A, B]));
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

describe("CONV-HPI-10 — gate global de H-PROJ-INT-01", () => {
  beforeEach(() => {
    localStorage.clear();
    seedAntecedents();
  });

  it("[V-HPI-GLOBAL-01] recorre de extremo a extremo trabajo actual, auxiliares, interrupción, antecedente, reutilización, resultado y nueva reanudación", async () => {
    const user = userEvent.setup();

    let execution = render(<App />);

    await user.type(
      screen.getByLabelText(/^introduce un texto libre$/i),
      W1,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByText(/^lo que has aportado$/i)).toBeInTheDocument();
    expect(screen.getByText(W1)).toBeInTheDocument();

    const captureButton = screen.getByRole("button", {
      name: /^capturar aportación$/i,
    });
    await user.click(captureButton);
    await user.type(
      screen.getByLabelText(/^aportación breve$/i),
      "Captura global de W1",
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    const captureItem = screen.getByText("Captura global de W1").closest("li");
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
    expect(
      within(activeComparison).getByRole("region", { name: /^documento a$/i }),
    ).toHaveTextContent(A.content);
    expect(
      within(activeComparison).getByRole("region", { name: /^documento b$/i }),
    ).toHaveTextContent(B.content);

    const ai = screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i });
    const aiWork = within(ai).getByRole("combobox", {
      name: /^obra para apoyo ia$/i,
    });
    expect(aiWork).toHaveValue("m3");

    execution.unmount();

    execution = render(<App />);
    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent(W1);

    const resumedCapture = screen.getByText("Captura global de W1").closest("li");
    expect(resumedCapture).not.toBeNull();
    expect(resumedCapture).toHaveTextContent(W1);

    await openMaterials(user, "Reutilizar A sin abandonar W1.");
    await user.click(
      screen.getByRole("button", { name: /^usar este material 1$/i }),
    );
    expect(screen.getByLabelText(/^contenido seleccionado$/i)).toHaveTextContent(
      A.content,
    );
    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent(W1);

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
      "Reanudar W2 y reconocer el antecedente utilizado.",
    );

    const w2 = ordinaryMaterialArticle(W2);
    expect(w2).toHaveTextContent(A.content);
    expect(w2).not.toHaveTextContent(B.content);

    const resumedAi = screen.getByRole("region", {
      name: /^apoyo auxiliar de ia$/i,
    });
    expect(
      within(resumedAi).getByRole("combobox", { name: /^obra para apoyo ia$/i }),
    ).toHaveValue("m4");
  });
});
