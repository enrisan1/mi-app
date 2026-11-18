import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const MATERIALS = [
  {
    id: "m1",
    content:
      "Plan Atlas. La fase inicial comprende ocho documentos. La decisión será el viernes.",
  },
  {
    id: "m2",
    content:
      "Plan Atlas. La fase inicial comprende doce documentos. La decisión será el miércoles.",
  },
  {
    id: "m3",
    content: "Material ordinario independiente que no participa en la comparación.",
  },
];

function seedOrdinaryMaterials() {
  localStorage.setItem("ordinary.materials", JSON.stringify(MATERIALS));
}

function getComparisonRegion() {
  return screen.getByRole("region", { name: /^comparación de documentos$/i });
}

async function openComparison(
  user: ReturnType<typeof userEvent.setup>,
  firstId = "m1",
  secondId = "m2",
) {
  const region = getComparisonRegion();

  await user.selectOptions(
    within(region).getByRole("combobox", { name: /^documento a$/i }),
    firstId,
  );
  await user.selectOptions(
    within(region).getByRole("combobox", { name: /^documento b$/i }),
    secondId,
  );

  await user.click(
    within(region).getByRole("button", { name: /^comparar$/i }),
  );

  return region;
}

describe("HITO-80-CONV-04 — comparación humana integrada en App", () => {
  beforeEach(() => {
    localStorage.clear();
    seedOrdinaryMaterials();
  });

  it("[T-CONV-80-02-01] ofrece como fuentes comparables los materiales ordinarios existentes", () => {
    render(<App />);

    const region = getComparisonRegion();
    const first = within(region).getByRole("combobox", {
      name: /^documento a$/i,
    });
    const second = within(region).getByRole("combobox", {
      name: /^documento b$/i,
    });

    for (const material of MATERIALS) {
      expect(
        within(first).getByRole("option", { name: material.content }),
      ).toHaveValue(material.id);
      expect(
        within(second).getByRole("option", { name: material.content }),
      ).toHaveValue(material.id);
    }
  });

  it("[T-CONV-80-02-02] requiere dos materiales distintos elegidos explícitamente para comparar", async () => {
    const user = userEvent.setup();
    render(<App />);

    const region = getComparisonRegion();
    const first = within(region).getByRole("combobox", {
      name: /^documento a$/i,
    });
    const second = within(region).getByRole("combobox", {
      name: /^documento b$/i,
    });
    const compare = within(region).getByRole("button", {
      name: /^comparar$/i,
    });

    expect(compare).toBeDisabled();

    await user.selectOptions(first, "m1");
    expect(compare).toBeDisabled();

    await user.selectOptions(second, "m1");
    expect(compare).toBeDisabled();

    await user.selectOptions(second, "m2");
    expect(compare).toBeEnabled();
  });

  it("[T-CONV-80-02-03] presenta simultáneamente A y B y los mantiene distinguibles", async () => {
    const user = userEvent.setup();
    render(<App />);

    await openComparison(user);

    const active = screen.getByRole("region", {
      name: /^comparación activa$/i,
    });

    expect(
      within(active).getByRole("region", { name: /^documento a$/i }),
    ).toBeInTheDocument();
    expect(
      within(active).getByRole("region", { name: /^documento b$/i }),
    ).toBeInTheDocument();
  });

  it("[T-CONV-80-02-04] muestra diferencias verificables respecto de ambas fuentes", async () => {
    const user = userEvent.setup();
    render(<App />);

    await openComparison(user);

    const active = screen.getByRole("region", {
      name: /^comparación activa$/i,
    });

    expect(within(active).getByText(/ocho/i)).toBeInTheDocument();
    expect(within(active).getByText(/doce/i)).toBeInTheDocument();
    expect(within(active).getByText(/viernes/i)).toBeInTheDocument();
    expect(within(active).getByText(/miércoles/i)).toBeInTheDocument();
  });

  it("[T-CONV-80-02-05] no atribuye relevancia, corrección ni preferencia a las diferencias", async () => {
    const user = userEvent.setup();
    render(<App />);

    await openComparison(user);

    const active = screen.getByRole("region", {
      name: /^comparación activa$/i,
    });

    expect(within(active).queryByText(/importante/i)).not.toBeInTheDocument();
    expect(within(active).queryByText(/irrelevante/i)).not.toBeInTheDocument();
    expect(within(active).queryByText(/correct[oa]/i)).not.toBeInTheDocument();
    expect(within(active).queryByText(/preferid[oa]/i)).not.toBeInTheDocument();
    expect(within(active).queryByText(/debe prevalecer/i)).not.toBeInTheDocument();
  });

  it("[T-CONV-80-02-06] entrar en comparación no modifica ordinary.materials", async () => {
    const user = userEvent.setup();
    const before = localStorage.getItem("ordinary.materials");

    render(<App />);
    await openComparison(user);

    expect(localStorage.getItem("ordinary.materials")).toBe(before);
  });

  it("[T-CONV-80-02-07] inspeccionar la comparación no modifica las fuentes", async () => {
    const user = userEvent.setup();
    const before = localStorage.getItem("ordinary.materials");

    render(<App />);
    await openComparison(user);

    const active = screen.getByRole("region", {
      name: /^comparación activa$/i,
    });

    await user.click(
      within(active).getByRole("region", { name: /^documento a$/i }),
    );
    await user.click(
      within(active).getByRole("region", { name: /^documento b$/i }),
    );

    expect(localStorage.getItem("ordinary.materials")).toBe(before);
  });

  it("[T-CONV-80-02-08] salir de comparación conserva íntegros los materiales ordinarios", async () => {
    const user = userEvent.setup();
    const before = localStorage.getItem("ordinary.materials");

    render(<App />);
    await openComparison(user);

    await user.click(
      screen.getByRole("button", { name: /^salir de comparación$/i }),
    );

    expect(
      screen.queryByRole("region", { name: /^comparación activa$/i }),
    ).not.toBeInTheDocument();
    expect(localStorage.getItem("ordinary.materials")).toBe(before);

    const stored = JSON.parse(
      localStorage.getItem("ordinary.materials") ?? "[]",
    ) as Array<{ id: string; content: string }>;

    expect(stored).toEqual(MATERIALS);
  });

  it("[T-CONV-80-02-09] la comparación no ofrece ejecución automática sobre A ni B", async () => {
    const user = userEvent.setup();
    render(<App />);

    await openComparison(user);

    const active = screen.getByRole("region", {
      name: /^comparación activa$/i,
    });

    expect(
      within(active).queryByRole("button", { name: /aplicar.*a.*b/i }),
    ).not.toBeInTheDocument();
    expect(
      within(active).queryByRole("button", { name: /aplicar.*b.*a/i }),
    ).not.toBeInTheDocument();
    expect(
      within(active).queryByRole("button", { name: /merge|fusionar/i }),
    ).not.toBeInTheDocument();
  });
});
