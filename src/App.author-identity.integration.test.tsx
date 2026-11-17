import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const MATERIALS = [
  { id: "m1", content: "Obra ordinaria uno" },
  { id: "m2", content: "Obra ordinaria dos" },
  { id: "m3", content: "Obra ordinaria tres" },
];

const CAPTURES = [
  {
    id: "c1",
    text: "Captura independiente",
    capturedAt: "2026-11-17T10:00:00.000Z",
  },
];

function seedOrdinaryMaterials() {
  localStorage.setItem("ordinary.materials", JSON.stringify(MATERIALS));
}

function getAuthorIdentityRegion() {
  return screen.getByRole("region", { name: /^identidad autoral$/i });
}

async function createAuthorIdentity(
  user: ReturnType<typeof userEvent.setup>,
  label: string,
) {
  const region = getAuthorIdentityRegion();
  await user.type(
    within(region).getByRole("textbox", { name: /^nueva identidad autoral$/i }),
    label,
  );
  await user.click(
    within(region).getByRole("button", { name: /^crear identidad autoral$/i }),
  );
}

async function assignAuthorIdentity(
  user: ReturnType<typeof userEvent.setup>,
  materialNumber: number,
  authorLabel: string,
) {
  const region = getAuthorIdentityRegion();

  await user.selectOptions(
    within(region).getByRole("combobox", { name: /^obra ordinaria$/i }),
    `m${materialNumber}`,
  );
  await user.selectOptions(
    within(region).getByRole("combobox", { name: /^identidad autoral$/i }),
    authorLabel,
  );
  await user.click(
    within(region).getByRole("button", { name: /^asignar autoría$/i }),
  );
}

describe("HITO-80-CONV-02 — identidad autoral integrada en App", () => {
  beforeEach(() => {
    localStorage.clear();
    seedOrdinaryMaterials();
  });

  it("[T-CONV-80-03-01] muestra una identidad operativa principal estable", () => {
    render(<App />);

    expect(
      screen.getByLabelText(/^identidad operativa$/i),
    ).toHaveTextContent("Usuario principal");
  });

  it("[T-CONV-80-03-02] crea una identidad autoral y la conserva como opción reutilizable", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createAuthorIdentity(user, "Alias A");

    const authorSelect = within(getAuthorIdentityRegion()).getByRole(
      "combobox",
      { name: /^identidad autoral$/i },
    );

    expect(
      within(authorSelect).getByRole("option", { name: "Alias A" }),
    ).toBeInTheDocument();
  });

  it("[T-CONV-80-03-03] asignar autoría conserva intacto el contenido de la obra", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createAuthorIdentity(user, "Alias A");

    const before = localStorage.getItem("ordinary.materials");

    await assignAuthorIdentity(user, 1, "Alias A");

    expect(localStorage.getItem("ordinary.materials")).toBe(before);
    expect(
      screen.getByText("Obra ordinaria uno", { exact: true }),
    ).toBeInTheDocument();
  });

  it("[T-CONV-80-03-04] reutiliza la misma identidad autoral en una segunda obra sin recrearla", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createAuthorIdentity(user, "Alias A");
    await assignAuthorIdentity(user, 1, "Alias A");
    await assignAuthorIdentity(user, 3, "Alias A");

    const region = getAuthorIdentityRegion();
    expect(
      within(region).getByLabelText(/^autoría de obra m1$/i),
    ).toHaveTextContent("Alias A");
    expect(
      within(region).getByLabelText(/^autoría de obra m3$/i),
    ).toHaveTextContent("Alias A");

    expect(
      within(region).getAllByRole("option", { name: "Alias A" }),
    ).toHaveLength(1);
  });

  it("[T-CONV-80-03-05] obras distintas pueden conservar identidades autorales distintas", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createAuthorIdentity(user, "Alias A");
    await createAuthorIdentity(user, "Alias B");

    await assignAuthorIdentity(user, 1, "Alias A");
    await assignAuthorIdentity(user, 2, "Alias B");

    const region = getAuthorIdentityRegion();
    expect(
      within(region).getByLabelText(/^autoría de obra m1$/i),
    ).toHaveTextContent("Alias A");
    expect(
      within(region).getByLabelText(/^autoría de obra m2$/i),
    ).toHaveTextContent("Alias B");
  });

  it("[T-CONV-80-03-06] catálogo y asociaciones sobreviven al remontaje de App", async () => {
    const user = userEvent.setup();
    const firstExecution = render(<App />);

    await createAuthorIdentity(user, "Alias A");
    await assignAuthorIdentity(user, 2, "Alias A");

    firstExecution.unmount();
    render(<App />);

    const region = getAuthorIdentityRegion();
    expect(
      within(region).getByRole("option", { name: "Alias A" }),
    ).toBeInTheDocument();
    expect(
      within(region).getByLabelText(/^autoría de obra m2$/i),
    ).toHaveTextContent("Alias A");
  });

  it("[T-CONV-80-03-07] asignar autoría no modifica estados ordinarios ni capturas", async () => {
    const user = userEvent.setup();

    localStorage.setItem("ru2m1.previous", "Trabajo previo");
    localStorage.setItem("ru2m1.retained", "Trabajo retenido");
    localStorage.setItem(
      "ordinary.contextual-captures",
      JSON.stringify(CAPTURES),
    );
    const postV1 = JSON.stringify({
      current: "Trayectoria existente",
      stable: null,
      published: null,
      evaluation: null,
      collaboration: null,
      artifact: null,
      received: null,
    });
    localStorage.setItem("post-v1-integrated.state", postV1);

    render(<App />);

    const materialsBefore = localStorage.getItem("ordinary.materials");
    const capturesBefore = localStorage.getItem("ordinary.contextual-captures");

    await createAuthorIdentity(user, "Alias A");
    await assignAuthorIdentity(user, 1, "Alias A");

    expect(localStorage.getItem("ordinary.materials")).toBe(materialsBefore);
    expect(localStorage.getItem("ru2m1.previous")).toBe("Trabajo previo");
    expect(localStorage.getItem("ru2m1.retained")).toBe("Trabajo retenido");
    expect(localStorage.getItem("ordinary.contextual-captures")).toBe(
      capturesBefore,
    );
    expect(localStorage.getItem("post-v1-integrated.state")).toBe(postV1);
    expect(
      screen.getByText("Captura independiente", { exact: true }),
    ).toBeInTheDocument();
  });

  it("[T-CONV-80-03-08] una captura contextual no aparece como obra seleccionable para autoría", () => {
    localStorage.setItem(
      "ordinary.contextual-captures",
      JSON.stringify(CAPTURES),
    );

    render(<App />);

    const workSelect = within(getAuthorIdentityRegion()).getByRole(
      "combobox",
      { name: /^obra ordinaria$/i },
    );

    expect(
      within(workSelect).getByRole("option", { name: "Obra ordinaria uno" }),
    ).toBeInTheDocument();
    expect(
      within(workSelect).queryByRole("option", { name: "Captura independiente" }),
    ).not.toBeInTheDocument();
  });
});
