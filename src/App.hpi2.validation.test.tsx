import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const W1 = { id: "w1", content: "Trabajo vigente W1" };
const A = { id: "a", content: "Antecedente formal A" };
const B = { id: "b", content: "Antecedente formal B" };

function seed() {
  localStorage.setItem("ru2m1.previous", W1.content);
  localStorage.setItem("ordinary.materials", JSON.stringify([W1, A, B]));
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

async function continueFrom(
  user: ReturnType<typeof userEvent.setup>,
  materialNumber: number,
  result: string,
) {
  await user.click(
    screen.getByRole("button", {
      name: new RegExp("^usar este material " + materialNumber + "$", "i"),
    }),
  );

  await user.type(
    screen.getByRole("textbox", { name: /^nuevo trabajo$/i }),
    result,
  );

  await user.click(
    screen.getByRole("button", { name: /^continuar con este material$/i }),
  );
}

function ordinaryMaterialArticle(content: string) {
  const article = screen.getAllByRole("article").find((candidate) => {
    const button = within(candidate).queryByRole("button", {
      name: /^usar este material \d+$/i,
    });

    return button !== null && candidate.textContent?.includes(content);
  });

  if (article === undefined) {
    throw new Error("Material ordinario no encontrado: " + content);
  }

  return article;
}

describe("R-HPI2-03 — validación formal de HITO-HPI-02", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("[V-HPI2-01] A recuperado y seleccionado produce W2 diferenciable cuya relación con A sigue reconocible tras reanudación", async () => {
    const user = userEvent.setup();
    seed();

    const execution = render(<App />);

    await openMaterials(user, "Reutilizar A para desarrollar una continuación.");
    await user.click(
      screen.getByRole("button", { name: /^usar este material 2$/i }),
    );

    expect(screen.getByLabelText(/^contenido seleccionado$/i)).toHaveTextContent(
      A.content,
    );

    await user.type(
      screen.getByRole("textbox", { name: /^nuevo trabajo$/i }),
      "Resultado formal W2",
    );
    await user.click(
      screen.getByRole("button", { name: /^continuar con este material$/i }),
    );

    expect(screen.getByLabelText(/^nuevo trabajo constituido$/i)).toHaveTextContent(
      "Resultado formal W2",
    );
    expect(screen.getByLabelText(/^nuevo trabajo constituido$/i)).not.toHaveTextContent(
      A.content,
    );

    execution.unmount();

    render(<App />);
    const resumedUser = userEvent.setup();
    await openMaterials(resumedUser, "Reanudar y reconocer la procedencia de W2.");

    const w2 = ordinaryMaterialArticle("Resultado formal W2");

    expect(w2).toHaveTextContent("Resultado formal W2");
    expect(w2).toHaveTextContent(A.content);
    expect(
      within(w2).getByRole("button", { name: /^usar este material 4$/i }),
    ).toBeInTheDocument();
  });

  it("[V-HPI2-02] A→W2 y B→W3 permanecen discriminados tras interrupción y no presentan atribución cruzada", async () => {
    const user = userEvent.setup();
    seed();

    const execution = render(<App />);

    await openMaterials(user, "Primera continuación desde A.");
    await continueFrom(user, 2, "Resultado formal W2");

    await openMaterials(user, "Segunda continuación desde B.");
    await continueFrom(user, 3, "Resultado formal W3");

    execution.unmount();

    render(<App />);
    const resumedUser = userEvent.setup();
    await openMaterials(
      resumedUser,
      "Comprobar relaciones después de una interrupción completa.",
    );

    const w2 = ordinaryMaterialArticle("Resultado formal W2");
    const w3 = ordinaryMaterialArticle("Resultado formal W3");

    expect(w2).toHaveTextContent(A.content);
    expect(w2).not.toHaveTextContent(B.content);

    expect(w3).toHaveTextContent(B.content);
    expect(w3).not.toHaveTextContent(A.content);

    expect(
      within(w2).getByRole("button", { name: /^usar este material 4$/i }),
    ).toBeInTheDocument();
    expect(
      within(w3).getByRole("button", { name: /^usar este material 5$/i }),
    ).toBeInTheDocument();
  });
});
