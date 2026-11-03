import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { CollaborationExperience } from "./CollaborationExperience";

describe("R-P4-C1 CollaborationExperience", () => {
  beforeEach(() => {
    localStorage.clear();
    cleanup();
  });

  async function constituteSharedResult(content = "R1") {
    const user = userEvent.setup();

    render(<CollaborationExperience />);

    await user.type(
      screen.getByRole("textbox", {
        name: /resultado compartido inicial/i,
      }),
      content,
    );

    await user.click(
      screen.getByRole("button", {
        name: /constituir resultado compartido/i,
      }),
    );

    return user;
  }

  async function contributeAsA(
    user: ReturnType<typeof userEvent.setup>,
    content = "A1",
  ) {
    await user.type(
      screen.getByRole("textbox", {
        name: /aportación de a/i,
      }),
      content,
    );

    await user.click(
      screen.getByRole("button", {
        name: /aportar como participante a/i,
      }),
    );
  }

  async function contributeAsB(
    user: ReturnType<typeof userEvent.setup>,
    content = "B1",
  ) {
    await user.type(
      screen.getByRole("textbox", {
        name: /aportación de b/i,
      }),
      content,
    );

    await user.click(
      screen.getByRole("button", {
        name: /aportar como participante b/i,
      }),
    );
  }

  async function completeCollaboration(
    sharedResult = "R1",
    firstContribution = "A1",
    secondContribution = "B1",
  ) {
    const user = await constituteSharedResult(sharedResult);

    await contributeAsA(user, firstContribution);
    await contributeAsB(user, secondContribution);

    return user;
  }

  it("[T-P4-01] constitutes one shared result R1", async () => {
    await constituteSharedResult("R1");

    expect(
      screen.getByLabelText(
        "Contenido del resultado compartido",
      ),
    ).toHaveTextContent("R1");
  });

  it("[T-P4-02] attributes A1 explicitly to participant A", async () => {
    const user = await constituteSharedResult("R1");

    await contributeAsA(user, "A1");

    expect(
      screen.getByLabelText(
        "Participante de primera aportación",
      ),
    ).toHaveTextContent("A");

    expect(
      screen.getByLabelText(
        "Contenido de primera aportación",
      ),
    ).toHaveTextContent("A1");
  });

  it("[T-P4-03] allows B to continue only after A1 exists", async () => {
    const user = await constituteSharedResult("R1");

    expect(
      screen.queryByRole("heading", {
        name: /participante b/i,
      }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("textbox", {
        name: /aportación de b/i,
      }),
    ).not.toBeInTheDocument();

    await contributeAsA(user, "A1");

    expect(
      screen.getByRole("heading", {
        name: /participante b/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", {
        name: /aportación de b/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(
        "Contexto disponible para participante B",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText(
        "Contexto disponible para participante B",
      ),
    ).toHaveTextContent("A1");
  });

  it("[T-P4-09] makes B's available action explicit before B contributes", async () => {
    const user = await constituteSharedResult("R1");

    await contributeAsA(user, "A1");

    expect(
      screen.getByRole("heading", {
        name: /qué puedes hacer ahora/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /continúa el trabajo a partir del resultado compartido y la aportación de a/i,
      ),
    ).toBeInTheDocument();
  });

  it("[T-P4-04] attributes B1 explicitly to participant B", async () => {
    const user = await constituteSharedResult("R1");

    await contributeAsA(user, "A1");
    await contributeAsB(user, "B1");

    expect(
      screen.getByLabelText(
        "Participante de segunda aportación",
      ),
    ).toHaveTextContent("B");

    expect(
      screen.getByLabelText(
        "Contenido de segunda aportación",
      ),
    ).toHaveTextContent("B1");
  });

  it("[T-P4-05] keeps A1 and B1 related to the same shared result", async () => {
    await completeCollaboration("R1", "A1", "B1");

    expect(
      screen.getByLabelText(
        "Resultado compartido colaborativo",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText(
        "Aportación colaborativa de A",
      ),
    ).toHaveTextContent("A1");

    expect(
      screen.getByLabelText(
        "Aportación colaborativa de B",
      ),
    ).toHaveTextContent("B1");
  });

  it("[T-P4-06] keeps A and B distinguishable after collaboration", async () => {
    await completeCollaboration("R1", "A1", "B1");

    expect(
      screen.getByLabelText(
        "Participante de primera aportación",
      ),
    ).toHaveTextContent("A");

    expect(
      screen.getByLabelText(
        "Participante de segunda aportación",
      ),
    ).toHaveTextContent("B");

    expect(
      screen.getByLabelText(
        "Contenido de primera aportación",
      ),
    ).toHaveTextContent("A1");

    expect(
      screen.getByLabelText(
        "Contenido de segunda aportación",
      ),
    ).toHaveTextContent("B1");
  });

  it("[T-P4-07] restores R1, A1, B1 and their attributions after a real remount", async () => {
    await completeCollaboration("R1", "A1", "B1");

    cleanup();

    render(<CollaborationExperience />);

    expect(
      screen.getByLabelText(
        "Contenido del resultado compartido",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText(
        "Participante de primera aportación",
      ),
    ).toHaveTextContent("A");

    expect(
      screen.getByLabelText(
        "Contenido de primera aportación",
      ),
    ).toHaveTextContent("A1");

    expect(
      screen.getByLabelText(
        "Participante de segunda aportación",
      ),
    ).toHaveTextContent("B");

    expect(
      screen.getByLabelText(
        "Contenido de segunda aportación",
      ),
    ).toHaveTextContent("B1");
  });

  it("[T-P4-08] exercises the complete minimal collaborative trajectory", async () => {
    const user = await constituteSharedResult("R1");

    expect(
      screen.getByLabelText(
        "Contenido del resultado compartido",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.queryByRole("textbox", {
        name: /aportación de b/i,
      }),
    ).not.toBeInTheDocument();

    await contributeAsA(user, "A1");

    expect(
      screen.getByLabelText(
        "Participante de primera aportación",
      ),
    ).toHaveTextContent("A");

    expect(
      screen.getByLabelText(
        "Contexto disponible para participante B",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText(
        "Contexto disponible para participante B",
      ),
    ).toHaveTextContent("A1");

    await contributeAsB(user, "B1");

    expect(
      screen.getByLabelText(
        "Participante de segunda aportación",
      ),
    ).toHaveTextContent("B");

    expect(
      screen.getByLabelText(
        "Resultado compartido colaborativo",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText(
        "Aportación colaborativa de A",
      ),
    ).toHaveTextContent("A1");

    expect(
      screen.getByLabelText(
        "Aportación colaborativa de B",
      ),
    ).toHaveTextContent("B1");

    cleanup();

    render(<CollaborationExperience />);

    expect(
      screen.getByLabelText(
        "Contenido del resultado compartido",
      ),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText(
        "Contenido de primera aportación",
      ),
    ).toHaveTextContent("A1");

    expect(
      screen.getByLabelText(
        "Contenido de segunda aportación",
      ),
    ).toHaveTextContent("B1");

    expect(
      screen.getByLabelText(
        "Participante de primera aportación",
      ),
    ).toHaveTextContent("A");

    expect(
      screen.getByLabelText(
        "Participante de segunda aportación",
      ),
    ).toHaveTextContent("B");
  });
});
