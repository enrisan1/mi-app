import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const W1 = { id: "w1", content: "Trabajo actual W1" };
const A = { id: "a", content: "Antecedente A" };
const B = { id: "b", content: "Antecedente B" };

function seed() {
  localStorage.setItem("ru2m1.previous", W1.content);
  localStorage.setItem("ordinary.materials", JSON.stringify([W1, A, B]));
}

async function openMaterials(user: ReturnType<typeof userEvent.setup>, need: string) {
  const needInput = screen.getByRole("textbox", {
    name: /^qué necesitas considerar ahora$/i,
  });
  await user.clear(needInput);
  await user.type(needInput, need);
  await user.click(
    screen.getByRole("button", { name: /^examinar materiales anteriores$/i }),
  );
}

async function createContinuation(
  user: ReturnType<typeof userEvent.setup>,
  materialNumber: number,
  content: string,
) {
  await user.click(
    screen.getByRole("button", {
      name: new RegExp("^usar este material " + materialNumber + "$", "i"),
    }),
  );
  await user.type(
    screen.getByRole("textbox", { name: /^nuevo trabajo$/i }),
    content,
  );
  await user.click(
    screen.getByRole("button", { name: /^continuar con este material$/i }),
  );
}

function materialArticle(content: string) {
  const article = screen.getAllByRole("article").find((candidate) => {
    const useButton = within(candidate).queryByRole("button", {
      name: /^usar este material \d+$/i,
    });

    return useButton !== null && candidate.textContent?.includes(content);
  });

  if (article === undefined) {
    throw new Error("No se encontró el artículo ordinario del material: " + content);
  }

  return article;
}

describe("R-HPI2-01 — contrato observable antecedente→resultado", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("[T-HPI2-01] recupera y selecciona A mediante la App ordinaria", async () => {
    const user = userEvent.setup();
    seed();
    render(<App />);

    await openMaterials(user, "Necesito reutilizar A.");
    await user.click(
      screen.getByRole("button", { name: /^usar este material 2$/i }),
    );

    expect(screen.getByLabelText(/^contenido seleccionado$/i)).toHaveTextContent(
      A.content,
    );
  });

  it("[T-HPI2-02] constituye y persiste W2 mediante Continuar con este material desde A", async () => {
    const user = userEvent.setup();
    seed();
    render(<App />);

    await openMaterials(user, "Necesito continuar desde A.");
    await createContinuation(user, 2, "Resultado W2 desde A");

    expect(screen.getByLabelText(/^nuevo trabajo constituido$/i)).toHaveTextContent(
      "Resultado W2 desde A",
    );

    const materials = JSON.parse(
      localStorage.getItem("ordinary.materials") ?? "[]",
    ) as Array<{ id: string; content: string }>;

    expect(materials.some((material) => material.content === "Resultado W2 desde A")).toBe(true);
  });

  it("[T-HPI2-03] después de perder la selección transitoria W2 sigue haciendo reconocible A como antecedente", async () => {
    const user = userEvent.setup();
    seed();
    render(<App />);

    await openMaterials(user, "Primera continuación.");
    await createContinuation(user, 2, "Resultado W2 desde A");

    await openMaterials(user, "Inspeccionar después el resultado.");

    const w2 = materialArticle("Resultado W2 desde A");
    expect(w2).toHaveTextContent(A.content);
  });

  it("[T-HPI2-04] la relación W2→A sigue reconocible tras desmontar y remontar la App", async () => {
    const user = userEvent.setup();
    seed();

    const execution = render(<App />);
    await openMaterials(user, "Crear W2 desde A.");
    await createContinuation(user, 2, "Resultado W2 persistente");
    execution.unmount();

    render(<App />);
    const resumedUser = userEvent.setup();
    await openMaterials(resumedUser, "Revisar W2 tras reanudar.");

    const w2 = materialArticle("Resultado W2 persistente");
    expect(w2).toHaveTextContent(A.content);
  });

  it("[T-HPI2-05] A→W2 y B→W3 sobreviven como relaciones distintas sin contaminación", async () => {
    const user = userEvent.setup();
    seed();

    const execution = render(<App />);

    await openMaterials(user, "Crear W2 desde A.");
    await createContinuation(user, 2, "Resultado W2 desde A");

    await openMaterials(user, "Crear W3 desde B.");
    await createContinuation(user, 3, "Resultado W3 desde B");

    execution.unmount();
    render(<App />);

    const resumedUser = userEvent.setup();
    await openMaterials(resumedUser, "Revisar relaciones persistidas.");

    expect(materialArticle("Resultado W2 desde A")).toHaveTextContent(A.content);
    expect(materialArticle("Resultado W3 desde B")).toHaveTextContent(B.content);
  });

  it("[T-HPI2-06] no atribuye B a W2 ni A a W3 después de crear dos continuaciones", async () => {
    const user = userEvent.setup();
    seed();

    const execution = render(<App />);

    await openMaterials(user, "Crear W2 desde A.");
    await createContinuation(user, 2, "Resultado W2 desde A");

    await openMaterials(user, "Crear W3 desde B.");
    await createContinuation(user, 3, "Resultado W3 desde B");

    execution.unmount();
    render(<App />);

    const resumedUser = userEvent.setup();
    await openMaterials(resumedUser, "Comprobar ausencia de atribución cruzada.");

    const w2 = materialArticle("Resultado W2 desde A");
    const w3 = materialArticle("Resultado W3 desde B");

    expect(w2).toHaveTextContent(A.content);
    expect(w2).not.toHaveTextContent(B.content);
    expect(w3).toHaveTextContent(B.content);
    expect(w3).not.toHaveTextContent(A.content);
  });

  it("[T-HPI2-07] el recorrido contractual usa únicamente la App ordinaria sin props ni relación precargada", async () => {
    const user = userEvent.setup();
    seed();
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /^materiales anteriores$/i }),
    ).toBeInTheDocument();

    await openMaterials(user, "Recorrido ordinario.");
    await createContinuation(user, 2, "Resultado ordinario W2");

    expect(screen.getByLabelText(/^nuevo trabajo constituido$/i)).toHaveTextContent(
      "Resultado ordinario W2",
    );

    const stored = localStorage.getItem("ordinary.materials") ?? "";
    expect(stored).toContain("Resultado ordinario W2");
  });
});
