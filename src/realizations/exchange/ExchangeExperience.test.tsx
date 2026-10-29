import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { ExchangeExperience } from "./ExchangeExperience";

describe("R-P5-X1 ExchangeExperience", () => {
  beforeEach(() => {
    localStorage.clear();
    cleanup();
  });

  async function constituteOrigin(content = "R1") {
    const user = userEvent.setup();

    render(<ExchangeExperience />);

    await user.type(
      screen.getByRole("textbox", {
        name: /contenido de origen/i,
      }),
      content,
    );

    await user.click(
      screen.getByRole("button", {
        name: /constituir estado publicado de origen/i,
      }),
    );

    return user;
  }

  async function generateArtifact(
    user: ReturnType<typeof userEvent.setup>,
  ) {
    await user.click(
      screen.getByRole("button", {
        name: /generar artefacto de intercambio/i,
      }),
    );
  }

  async function receiveArtifact(
    user: ReturnType<typeof userEvent.setup>,
  ) {
    await user.click(
      screen.getByRole("button", {
        name: /recibir artefacto en destino/i,
      }),
    );
  }

  async function completeExchange(content = "R1") {
    const user = await constituteOrigin(content);

    await generateArtifact(user);
    await receiveArtifact(user);

    return user;
  }

  it("[T-P5-01] constitutes a published origin state P1/R1", async () => {
    await constituteOrigin("R1");

    expect(
      screen.getByLabelText(
        "Identificador del estado publicado de origen",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText(
        "Contenido del estado publicado de origen",
      ),
    ).toHaveTextContent("R1");
  });

  it("[T-P5-02] generates exchange artifact X1 from the origin", async () => {
    const user = await constituteOrigin("R1");

    await generateArtifact(user);

    expect(
      screen.getByLabelText(
        "Identificador del artefacto de intercambio",
      ),
    ).toHaveTextContent("X1");

    expect(
      screen.getByLabelText(
        "Estado publicado de origen del artefacto",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText(
        "Contenido del artefacto de intercambio",
      ),
    ).toHaveTextContent("R1");
  });

  it("[T-P5-03] keeps X1 distinguishable from the internal origin state", async () => {
    const user = await constituteOrigin("R1");

    await generateArtifact(user);

    expect(
      screen.getByRole("heading", {
        name: /instancia origen/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /artefacto de intercambio/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(
        "Identificador del estado publicado de origen",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText(
        "Identificador del artefacto de intercambio",
      ),
    ).toHaveTextContent("X1");
  });

  it("[T-P5-04] does not let the destination receive before X1 exists", async () => {
    await constituteOrigin("R1");

    expect(
      screen.getByRole("status"),
    ).toHaveTextContent(
      /no hay ningún artefacto disponible para recibir/i,
    );

    expect(
      screen.queryByRole("button", {
        name: /recibir artefacto en destino/i,
      }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByLabelText(
        "Contenido recibido en destino",
      ),
    ).not.toBeInTheDocument();
  });

  it("[T-P5-05] receives X1 and constitutes a destination state", async () => {
    const user = await constituteOrigin("R1");

    await generateArtifact(user);
    await receiveArtifact(user);

    expect(
      screen.getByLabelText(
        "Artefacto recibido en destino",
      ),
    ).toHaveTextContent("X1");

    expect(
      screen.getByLabelText(
        "Contenido recibido en destino",
      ),
    ).toHaveTextContent("R1");
  });

  it("[T-P5-06] preserves exactly the content transferred through X1", async () => {
    const content = "  Resultado transferido\ncon dos líneas  ";

    await completeExchange(content);

    expect(
      screen.getByLabelText(
        "Contenido del estado publicado de origen",
      ).textContent,
    ).toBe(content);

    expect(
      screen.getByLabelText(
        "Contenido del artefacto de intercambio",
      ).textContent,
    ).toBe(content);

    expect(
      screen.getByLabelText(
        "Contenido recibido en destino",
      ).textContent,
    ).toBe(content);
  });

  it("[T-P5-07] restores the received destination state after a real remount", async () => {
    await completeExchange("R1");

    cleanup();

    render(<ExchangeExperience />);

    expect(
      screen.getByLabelText(
        "Artefacto recibido en destino",
      ),
    ).toHaveTextContent("X1");

    expect(
      screen.getByLabelText(
        "Contenido recibido en destino",
      ),
    ).toHaveTextContent("R1");
  });

  it("[T-P5-08] exercises the complete origin to X1 to destination trajectory", async () => {
    const user = await constituteOrigin("R1");

    expect(
      screen.getByLabelText(
        "Identificador del estado publicado de origen",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.queryByLabelText(
        "Identificador del artefacto de intercambio",
      ),
    ).not.toBeInTheDocument();

    await generateArtifact(user);

    expect(
      screen.getByLabelText(
        "Identificador del artefacto de intercambio",
      ),
    ).toHaveTextContent("X1");

    expect(
      screen.getByLabelText(
        "Estado publicado de origen del artefacto",
      ),
    ).toHaveTextContent("P1");

    expect(
      screen.queryByLabelText(
        "Contenido recibido en destino",
      ),
    ).not.toBeInTheDocument();

    await receiveArtifact(user);

    expect(
      screen.getByLabelText(
        "Artefacto recibido en destino",
      ),
    ).toHaveTextContent("X1");

    expect(
      screen.getByLabelText(
        "Contenido recibido en destino",
      ),
    ).toHaveTextContent("R1");

    cleanup();

    render(<ExchangeExperience />);

    expect(
      screen.getByLabelText(
        "Contenido del estado publicado de origen",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText(
        "Contenido del artefacto de intercambio",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText(
        "Contenido recibido en destino",
      ),
    ).toHaveTextContent("R1");
  });
});
