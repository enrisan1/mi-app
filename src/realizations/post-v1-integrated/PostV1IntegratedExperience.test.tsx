import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { PostV1IntegratedExperience } from "./PostV1IntegratedExperience";

describe("R-INT-01 PostV1IntegratedExperience", () => {
  beforeEach(() => {
    localStorage.clear();
    cleanup();
  });

  async function constituteR1(content = "R1") {
    const user = userEvent.setup();

    render(<PostV1IntegratedExperience />);

    await user.type(
      screen.getByRole("textbox", {
        name: /contenido actual/i,
      }),
      content,
    );

    await user.click(
      screen.getByRole("button", {
        name: /constituir r1/i,
      }),
    );

    return user;
  }

  async function constituteS1(
    user: ReturnType<typeof userEvent.setup>,
  ) {
    await user.click(
      screen.getByRole("button", {
        name: /constituir s1 desde r1/i,
      }),
    );
  }

  async function publishP1(
    user: ReturnType<typeof userEvent.setup>,
  ) {
    await user.click(
      screen.getByRole("button", {
        name: /publicar p1 desde s1/i,
      }),
    );
  }

  async function addEvaluation(
    user: ReturnType<typeof userEvent.setup>,
  ) {
    await user.type(
      screen.getByRole("textbox", {
        name: /^criterio$/i,
      }),
      "C1",
    );

    await user.type(
      screen.getByRole("textbox", {
        name: /^evidencia$/i,
      }),
      "E1",
    );

    await user.click(
      screen.getByRole("button", {
        name: /asociar soporte evaluativo/i,
      }),
    );
  }

  async function addCollaboration(
    user: ReturnType<typeof userEvent.setup>,
  ) {
    await user.type(
      screen.getByRole("textbox", {
        name: /contribución de participante a/i,
      }),
      "A1",
    );

    await user.click(
      screen.getByRole("button", {
        name: /añadir a1/i,
      }),
    );

    await user.type(
      screen.getByRole("textbox", {
        name: /contribución de participante b/i,
      }),
      "B1",
    );

    await user.click(
      screen.getByRole("button", {
        name: /añadir b1/i,
      }),
    );
  }

  async function generateX1(
    user: ReturnType<typeof userEvent.setup>,
  ) {
    await user.click(
      screen.getByRole("button", {
        name: /generar x1 desde p1/i,
      }),
    );
  }

  async function receiveD1(
    user: ReturnType<typeof userEvent.setup>,
  ) {
    await user.click(
      screen.getByRole("button", {
        name: /constituir d1 desde x1/i,
      }),
    );
  }

  async function completeTrajectory(content = "R1") {
    const user = await constituteR1(content);

    await constituteS1(user);
    await publishP1(user);
    await addEvaluation(user);
    await addCollaboration(user);
    await generateX1(user);
    await receiveD1(user);

    return user;
  }

  it("[T-INT-01] constitutes R1 as current work and derives one S1 from it", async () => {
    const user = await constituteR1("R1");

    expect(
      screen.getByLabelText("Contenido del trabajo actual"),
    ).toHaveTextContent("R1");

    await constituteS1(user);

    expect(
      screen.getByLabelText("Identificador del estado estable"),
    ).toHaveTextContent("S1");

    expect(
      screen.getByLabelText("Contenido del estado estable"),
    ).toHaveTextContent("R1");

    expect(
      screen.queryByRole("button", {
        name: /constituir s1 desde r1/i,
      }),
    ).not.toBeInTheDocument();
  });

  it("[T-INT-02] publishes P1 from that same S1", async () => {
    const user = await constituteR1("R1");

    await constituteS1(user);
    await publishP1(user);

    expect(
      screen.getByLabelText("Identificador de la publicación"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Estado estable de origen"),
    ).toHaveTextContent("S1");

    expect(
      screen.getByLabelText("Contenido publicado"),
    ).toHaveTextContent("R1");
  });

  it("[T-INT-03] associates criterion and evidence with that same P1", async () => {
    const user = await constituteR1("R1");

    await constituteS1(user);
    await publishP1(user);
    await addEvaluation(user);

    expect(
      screen.getByLabelText("Publicación evaluada"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Criterio evaluativo"),
    ).toHaveTextContent("C1");

    expect(
      screen.getByLabelText("Evidencia evaluativa"),
    ).toHaveTextContent("E1");
  });

  it("[T-INT-04] keeps A1 and B1 linked to the same P1 shared result", async () => {
    const user = await constituteR1("R1");

    await constituteS1(user);
    await publishP1(user);
    await addEvaluation(user);
    await addCollaboration(user);

    expect(
      screen.getByLabelText(
        "Publicación de origen de la colaboración",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Resultado compartido"),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText(
        "Participante de la primera contribución",
      ),
    ).toHaveTextContent("A");

    expect(
      screen.getByLabelText("Primera contribución"),
    ).toHaveTextContent("A1");

    expect(
      screen.getByLabelText(
        "Participante de la segunda contribución",
      ),
    ).toHaveTextContent("B");

    expect(
      screen.getByLabelText("Segunda contribución"),
    ).toHaveTextContent("B1");
  });

  it("[T-INT-05] generates X1 from that same P1", async () => {
    const user = await constituteR1("R1");

    await constituteS1(user);
    await publishP1(user);
    await addEvaluation(user);
    await addCollaboration(user);
    await generateX1(user);

    expect(
      screen.getByLabelText("Identificador del artefacto"),
    ).toHaveTextContent("X1");

    expect(
      screen.getByLabelText(
        "Publicación de origen del artefacto",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Contenido del artefacto"),
    ).toHaveTextContent("R1");
  });

  it("[T-INT-06] constitutes D1 exclusively from X1", async () => {
    const user = await constituteR1("R1");

    await constituteS1(user);
    await publishP1(user);
    await addEvaluation(user);
    await addCollaboration(user);
    await generateX1(user);
    await receiveD1(user);

    expect(
      screen.getByLabelText(
        "Artefacto de origen del estado recibido",
      ),
    ).toHaveTextContent("X1");

    expect(
      screen.getByLabelText("Contenido recibido"),
    ).toHaveTextContent("R1");
  });

  it("[T-INT-07] evolves current from R1 to R2 without modifying the integrated antecedents", async () => {
    const user = await completeTrajectory("R1");

    await user.type(
      screen.getByRole("textbox", {
        name: /evolución del trabajo actual/i,
      }),
      "R2",
    );

    await user.click(
      screen.getByRole("button", {
        name: /evolucionar trabajo actual/i,
      }),
    );

    expect(
      screen.getByLabelText("Contenido del trabajo actual"),
    ).toHaveTextContent("R2");

    expect(
      screen.getByLabelText("Contenido del estado estable"),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText("Contenido publicado"),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText("Publicación evaluada"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Criterio evaluativo"),
    ).toHaveTextContent("C1");

    expect(
      screen.getByLabelText("Evidencia evaluativa"),
    ).toHaveTextContent("E1");

    expect(
      screen.getByLabelText(
        "Publicación de origen de la colaboración",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Primera contribución"),
    ).toHaveTextContent("A1");

    expect(
      screen.getByLabelText("Segunda contribución"),
    ).toHaveTextContent("B1");

    expect(
      screen.getByLabelText(
        "Publicación de origen del artefacto",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Contenido del artefacto"),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText(
        "Artefacto de origen del estado recibido",
      ),
    ).toHaveTextContent("X1");

    expect(
      screen.getByLabelText("Contenido recibido"),
    ).toHaveTextContent("R1");
  });

  it("[T-INT-08] restores the complete integrated trajectory after remount", async () => {
    const user = await completeTrajectory("R1");

    await user.type(
      screen.getByRole("textbox", {
        name: /evolución del trabajo actual/i,
      }),
      "R2",
    );

    await user.click(
      screen.getByRole("button", {
        name: /evolucionar trabajo actual/i,
      }),
    );

    cleanup();

    render(<PostV1IntegratedExperience />);

    expect(
      screen.getByLabelText("Contenido del trabajo actual"),
    ).toHaveTextContent("R2");

    expect(
      screen.getByLabelText("Identificador del estado estable"),
    ).toHaveTextContent("S1");

    expect(
      screen.getByLabelText("Contenido del estado estable"),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText("Identificador de la publicación"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Estado estable de origen"),
    ).toHaveTextContent("S1");

    expect(
      screen.getByLabelText("Publicación evaluada"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText(
        "Publicación de origen de la colaboración",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Primera contribución"),
    ).toHaveTextContent("A1");

    expect(
      screen.getByLabelText("Segunda contribución"),
    ).toHaveTextContent("B1");

    expect(
      screen.getByLabelText("Identificador del artefacto"),
    ).toHaveTextContent("X1");

    expect(
      screen.getByLabelText(
        "Publicación de origen del artefacto",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText(
        "Artefacto de origen del estado recibido",
      ),
    ).toHaveTextContent("X1");

    expect(
      screen.getByLabelText("Contenido recibido"),
    ).toHaveTextContent("R1");
  });
});
