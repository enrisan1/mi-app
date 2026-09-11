import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ResumeExperience } from "./ResumeExperience";

const PRESENT_CONTRIBUTION = "Aportación presente inequívocamente reconocible";

async function makeContributionPresent() {
  const user = userEvent.setup();

  await user.type(
    screen.getByRole("textbox", { name: /aportación actual/i }),
    PRESENT_CONTRIBUTION,
  );
  await user.click(screen.getByRole("button", { name: /^crear$/i }));
}

describe("PV-003 in the R-U2-M1 experience", () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem("ru2m1.previous", "Aportación anterior");
  });

  it("does not manifest a supplied resolution before the contribution is present", () => {
    render(
      <ResumeExperience
        resolution={{
          contribution: PRESENT_CONTRIBUTION,
          kind: "difference",
          content: "Existe una nueva diferencia establecida.",
        }}
      />,
    );

    expect(
      screen.queryByRole("heading", {
        name: /qué ha quedado establecido para esta aportación/i,
      }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Existe una nueva diferencia establecida."),
    ).not.toBeInTheDocument();
  });

  it("manifests an externally supplied difference for the present contribution", async () => {
    render(
      <ResumeExperience
        resolution={{
          contribution: PRESENT_CONTRIBUTION,
          kind: "difference",
          content: "Existe una nueva diferencia establecida.",
        }}
      />,
    );

    await makeContributionPresent();

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      PRESENT_CONTRIBUTION,
    );
    expect(
      screen.getByRole("heading", {
        name: /qué ha quedado establecido para esta aportación/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Existe una nueva diferencia establecida."),
    ).toBeInTheDocument();
  });

  it("manifests an explicitly supplied established absence", async () => {
    render(
      <ResumeExperience
        resolution={{
          contribution: PRESENT_CONTRIBUTION,
          kind: "absence",
        }}
      />,
    );

    await makeContributionPresent();

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      PRESENT_CONTRIBUTION,
    );
    expect(
      screen.getByText(
        "No hay una nueva diferencia establecida disponible para presentar.",
      ),
    ).toBeInTheDocument();
  });

  it("does not infer established absence when no resolution is supplied", async () => {
    render(<ResumeExperience />);

    await makeContributionPresent();

    expect(
      screen.queryByRole("heading", {
        name: /qué ha quedado establecido para esta aportación/i,
      }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "No hay una nueva diferencia establecida disponible para presentar.",
      ),
    ).not.toBeInTheDocument();
  });

  it("does not manifest a resolution for a different contribution", async () => {
    render(
      <ResumeExperience
        resolution={{
          contribution: "Otra aportación",
          kind: "absence",
        }}
      />,
    );

    await makeContributionPresent();

    expect(
      screen.queryByRole("heading", {
        name: /qué ha quedado establecido para esta aportación/i,
      }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "No hay una nueva diferencia establecida disponible para presentar.",
      ),
    ).not.toBeInTheDocument();
  });

  it("preserves the exercised behavior across two technical rematerializations of the same established fact", async () => {
    const contribution = "Aportación con resolución rematerializable";
    const difference = "Diferencia establecida para la misma aportación";

    const firstMaterialization = {
      contribution,
      kind: "difference" as const,
      content: difference,
    };

    const secondMaterialization = {
      contribution,
      kind: "difference" as const,
      content: difference,
    };

    expect(secondMaterialization).not.toBe(firstMaterialization);
    expect(secondMaterialization).toEqual(firstMaterialization);

    const firstUser = userEvent.setup();
    const firstRender = render(
      <ResumeExperience resolution={firstMaterialization} />,
    );

    await firstUser.type(
      screen.getByRole("textbox", { name: /aportación actual/i }),
      contribution,
    );
    await firstUser.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      contribution,
    );
    expect(screen.getByText(difference)).toBeInTheDocument();

    firstRender.unmount();

    expect(screen.queryByText(difference)).not.toBeInTheDocument();

    const secondUser = userEvent.setup();
    render(<ResumeExperience resolution={secondMaterialization} />);

    await secondUser.type(
      screen.getByRole("textbox", { name: /aportación actual/i }),
      contribution,
    );
    await secondUser.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      contribution,
    );
    expect(screen.getByText(difference)).toBeInTheDocument();
  });

  it("preserves established absence across two technical rematerializations of the same established fact", async () => {
    const contribution =
      "Aportación con ausencia establecida rematerializable";

    const firstMaterialization = {
      contribution,
      kind: "absence" as const,
    };

    const secondMaterialization = {
      contribution,
      kind: "absence" as const,
    };

    expect(secondMaterialization).not.toBe(firstMaterialization);
    expect(secondMaterialization).toEqual(firstMaterialization);

    const firstUser = userEvent.setup();
    const firstRender = render(
      <ResumeExperience resolution={firstMaterialization} />,
    );

    await firstUser.type(
      screen.getByRole("textbox", { name: /aportación actual/i }),
      contribution,
    );
    await firstUser.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      contribution,
    );
    expect(
      screen.getByText(
        "No hay una nueva diferencia establecida disponible para presentar.",
      ),
    ).toBeInTheDocument();

    firstRender.unmount();

    expect(
      screen.queryByText(
        "No hay una nueva diferencia establecida disponible para presentar.",
      ),
    ).not.toBeInTheDocument();

    const secondUser = userEvent.setup();
    render(<ResumeExperience resolution={secondMaterialization} />);

    await secondUser.type(
      screen.getByRole("textbox", { name: /aportación actual/i }),
      contribution,
    );
    await secondUser.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      contribution,
    );
    expect(
      screen.getByText(
        "No hay una nueva diferencia establecida disponible para presentar.",
      ),
    ).toBeInTheDocument();
  });
});
