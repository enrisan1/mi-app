import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { CollaborationExperience } from "./CollaborationExperience";

afterEach(() => {
  localStorage.clear();
});

async function constituteSharedResult(value: string) {
  const user = userEvent.setup();

  render(<CollaborationExperience />);

  await user.type(
    screen.getByRole("textbox", {
      name: /resultado compartido inicial/i,
    }),
    value,
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
  value: string,
) {
  await user.type(
    screen.getByRole("textbox", {
      name: /aportación de a/i,
    }),
    value,
  );

  await user.click(
    screen.getByRole("button", {
      name: /aportar como participante a/i,
    }),
  );
}

describe("CollaborationExperience Q05", () => {
  it("[T-P4-10] generates X-CC-01 only from the minimal collaborative antecedent", async () => {
    const user = await constituteSharedResult("R1");

    expect(
      screen.queryByRole("button", {
        name: /generar antecedente transferible/i,
      }),
    ).not.toBeInTheDocument();

    await contributeAsA(user, "A1");

    await user.click(
      screen.getByRole("button", {
        name: /generar antecedente transferible/i,
      }),
    );

    const transferableAntecedent = screen.getByRole("textbox", {
      name: /antecedente transferible x-cc-01/i,
    });

    expect(
      JSON.parse(
        (transferableAntecedent as HTMLTextAreaElement).value,
      ),
    ).toEqual({
      sharedResult: "R1",
      firstContribution: {
        participant: "A",
        content: "A1",
      },
    });
  });

  it("[T-P4-11] restores the minimal collaborative antecedent from X-CC-01", async () => {
    const user = userEvent.setup();

    render(<CollaborationExperience />);

    const transferableAntecedent = JSON.stringify({
      sharedResult: "R1",
      firstContribution: {
        participant: "A",
        content: "A1",
      },
    });

    await user.click(
      screen.getByRole("textbox", {
        name: /antecedente transferible recibido/i,
      }),
    );

    await user.paste(transferableAntecedent);

    await user.click(
      screen.getByRole("button", {
        name: /recibir antecedente transferible/i,
      }),
    );

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
      screen.getByRole("heading", {
        name: /qué puedes hacer ahora/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", {
        name: /aportación de b/i,
      }),
    ).toBeInTheDocument();
  });
});
