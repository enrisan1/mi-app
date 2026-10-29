import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { EvaluablePublicationExperience } from "./EvaluablePublicationExperience";

describe("R-P3-E1 EvaluablePublicationExperience", () => {
  beforeEach(() => {
    localStorage.clear();
    cleanup();
  });

  async function constituteInitialWork(content = "R1") {
    const user = userEvent.setup();

    render(<EvaluablePublicationExperience />);

    await user.type(
      screen.getByRole("textbox", {
        name: /trabajo inicial/i,
      }),
      content,
    );

    await user.click(
      screen.getByRole("button", {
        name: /constituir trabajo/i,
      }),
    );

    return user;
  }

  async function constituteStableReference(
    user: ReturnType<typeof userEvent.setup>,
  ) {
    await user.click(
      screen.getByRole("button", {
        name: /conservar como referencia estable/i,
      }),
    );
  }

  async function publishStableReference(
    user: ReturnType<typeof userEvent.setup>,
  ) {
    await user.click(
      screen.getByRole("button", {
        name: /publicar referencia estable/i,
      }),
    );
  }

  async function associateEvaluationSupport(
    user: ReturnType<typeof userEvent.setup>,
    criterion = "C1",
    evidence = "E1",
  ) {
    await user.type(
      screen.getByRole("textbox", {
        name: /^criterio$/i,
      }),
      criterion,
    );

    await user.type(
      screen.getByRole("textbox", {
        name: /^evidencia$/i,
      }),
      evidence,
    );

    await user.click(
      screen.getByRole("button", {
        name: /asociar soporte evaluativo/i,
      }),
    );
  }

  async function reachEvaluablePublication(
    content = "R1",
    criterion = "C1",
    evidence = "E1",
  ) {
    const user = await constituteInitialWork(content);

    await constituteStableReference(user);
    await publishStableReference(user);
    await associateEvaluationSupport(
      user,
      criterion,
      evidence,
    );

    return user;
  }

  async function evolveTo(
    user: ReturnType<typeof userEvent.setup>,
    content: string,
  ) {
    const input = screen.getByRole("textbox", {
      name: /evolución/i,
    });

    await user.clear(input);
    await user.type(input, content);

    await user.click(
      screen.getByRole("button", {
        name: /evolucionar/i,
      }),
    );
  }

  it("[T-P3-01] starts evaluation support from a published P1", async () => {
    const user = await constituteInitialWork("R1");

    await constituteStableReference(user);
    await publishStableReference(user);

    expect(
      screen.getByLabelText(
        "Identificador de estado publicado",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText(
        "Contenido de estado publicado",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByRole("heading", {
        name: /soporte evaluativo/i,
      }),
    ).toBeInTheDocument();
  });

  it("[T-P3-02] associates a criterion specifically with P1", async () => {
    const user = await reachEvaluablePublication(
      "R1",
      "Seleccionar la alternativa con menor índice Q.",
      "E1",
    );

    expect(
      screen.getByLabelText("Estado publicado evaluado"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Criterio asociado"),
    ).toHaveTextContent(
      "Seleccionar la alternativa con menor índice Q.",
    );

    expect(user).toBeDefined();
  });

  it("[T-P3-03] associates evidence specifically with P1", async () => {
    await reachEvaluablePublication(
      "R1",
      "C1",
      "Alternativa A: Q = 72; Alternativa B: Q = 61",
    );

    expect(
      screen.getByLabelText("Estado publicado evaluado"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Evidencia asociada"),
    ).toHaveTextContent(
      "Alternativa A: Q = 72; Alternativa B: Q = 61",
    );
  });

  it("[T-P3-04] keeps published content distinguishable from evaluation support", async () => {
    await reachEvaluablePublication(
      "Seleccionar B.",
      "Seleccionar la alternativa con menor índice Q.",
      "Alternativa A: Q = 72; Alternativa B: Q = 61",
    );

    expect(
      screen.getByLabelText(
        "Contenido de estado publicado",
      ),
    ).toHaveTextContent("Seleccionar B.");

    expect(
      screen.getByLabelText("Criterio asociado"),
    ).toHaveTextContent(
      "Seleccionar la alternativa con menor índice Q.",
    );

    expect(
      screen.getByLabelText("Evidencia asociada"),
    ).toHaveTextContent(
      "Alternativa A: Q = 72; Alternativa B: Q = 61",
    );
  });

  it("[T-P3-05] does not emit an automatic evaluative verdict", async () => {
    await reachEvaluablePublication(
      "R1",
      "C1",
      "E1",
    );

    expect(
      screen.queryByText(/P1 es correcto/i),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(/P1 es verdadero/i),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(/P1 está aprobado/i),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(/P1 debe aceptarse/i),
    ).not.toBeInTheDocument();
  });

  it("[T-P3-06] preserves P1 and its evaluation support after later evolution", async () => {
    const user = await reachEvaluablePublication(
      "R1",
      "C1",
      "E1",
    );

    await evolveTo(user, "R2");
    await evolveTo(user, "R3");

    expect(
      screen.getByLabelText(
        "Contenido del trabajo actual",
      ),
    ).toHaveTextContent("R3");

    expect(
      screen.getByLabelText(
        "Contenido de estado publicado",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText("Estado publicado evaluado"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Criterio asociado"),
    ).toHaveTextContent("C1");

    expect(
      screen.getByLabelText("Evidencia asociada"),
    ).toHaveTextContent("E1");
  });

  it("[T-P3-07] restores P1 and its evaluation support after a real remount", async () => {
    const user = await reachEvaluablePublication(
      "R1",
      "C1",
      "E1",
    );

    await evolveTo(user, "R2");
    await evolveTo(user, "R3");

    cleanup();

    render(<EvaluablePublicationExperience />);

    expect(
      screen.getByLabelText(
        "Contenido del trabajo actual",
      ),
    ).toHaveTextContent("R3");

    expect(
      screen.getByLabelText(
        "Identificador de estado publicado",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText(
        "Contenido de estado publicado",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText("Estado publicado evaluado"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Criterio asociado"),
    ).toHaveTextContent("C1");

    expect(
      screen.getByLabelText("Evidencia asociada"),
    ).toHaveTextContent("E1");
  });

  it("[T-P3-08] exercises the complete minimal evaluable-publication trajectory", async () => {
    const user = await constituteInitialWork("R1");

    await constituteStableReference(user);

    expect(
      screen.getByLabelText(
        "Identificador de referencia estable",
      ),
    ).toHaveTextContent("S1");

    expect(
      screen.getByLabelText(
        "Contenido de referencia estable",
      ),
    ).toHaveTextContent("R1");

    await publishStableReference(user);

    expect(
      screen.getByLabelText(
        "Identificador de estado publicado",
      ),
    ).toHaveTextContent("P1");

    await associateEvaluationSupport(
      user,
      "C1",
      "E1",
    );

    expect(
      screen.getByLabelText("Estado publicado evaluado"),
    ).toHaveTextContent("P1");

    await evolveTo(user, "R2");
    await evolveTo(user, "R3");

    cleanup();

    render(<EvaluablePublicationExperience />);

    expect(
      screen.getByLabelText(
        "Contenido del trabajo actual",
      ),
    ).toHaveTextContent("R3");

    expect(
      screen.getByLabelText(
        "Contenido de referencia estable",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText(
        "Contenido de estado publicado",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText("Estado publicado evaluado"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Criterio asociado"),
    ).toHaveTextContent("C1");

    expect(
      screen.getByLabelText("Evidencia asociada"),
    ).toHaveTextContent("E1");
  });
});
