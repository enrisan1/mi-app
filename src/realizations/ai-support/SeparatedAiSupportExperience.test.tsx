import type { ComponentType } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AI_SUPPORT_EVIDENCE } from "./AiSupportEvidence.fixture";

type Props = {
  work: string;
  support: string;
  evidenceId: string;
  system: string;
  model: string;
};

type ExperienceModule = {
  SeparatedAiSupportExperience: ComponentType<Props>;
};

async function loadExperience() {
  vi.resetModules();

  const modules = import.meta.glob<ExperienceModule>(
    "./SeparatedAiSupportExperience.tsx",
  );
  const load = modules["./SeparatedAiSupportExperience.tsx"];

  expect(
    load,
    "R-80-04-M1-B ausente: falta ./SeparatedAiSupportExperience.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-04-M1-B ausente");
  }

  return (await load()).SeparatedAiSupportExperience;
}

function renderExperience(Experience: ComponentType<Props>) {
  return render(
    <Experience
      work={AI_SUPPORT_EVIDENCE.work}
      support={AI_SUPPORT_EVIDENCE.support}
      evidenceId={AI_SUPPORT_EVIDENCE.evidenceId}
      system={AI_SUPPORT_EVIDENCE.system}
      model={AI_SUPPORT_EVIDENCE.model}
    />,
  );
}

afterEach(() => {
  cleanup();
  localStorage.clear();
  vi.resetModules();
});

describe("R-80-04-M1-B — apoyo IA funcionalmente separado de la obra", () => {
  it("[T-80-04-B01] mantiene obra y apoyo en regiones funcionalmente distinguibles", async () => {
    const Experience = await loadExperience();

    renderExperience(Experience);

    expect(
      screen.getByRole("region", { name: /^obra en curso$/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i }),
    ).toBeInTheDocument();
  });

  it("[T-80-04-B02] presenta exactamente el mismo apoyo IA acreditado que el baseline", async () => {
    const Experience = await loadExperience();

    renderExperience(Experience);

    expect(
      screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i }),
    ).toHaveTextContent(AI_SUPPORT_EVIDENCE.support);

    const provenance = screen.getByRole("region", {
      name: /^procedencia del apoyo ia$/i,
    });

    expect(provenance).toHaveTextContent(AI_SUPPORT_EVIDENCE.evidenceId);
    expect(provenance).toHaveTextContent(AI_SUPPORT_EVIDENCE.system);
    expect(provenance).toHaveTextContent(AI_SUPPORT_EVIDENCE.model);
  });

  it("[T-80-04-B03] recibir y consultar apoyo no modifica el contenido de la obra", async () => {
    const Experience = await loadExperience();

    renderExperience(Experience);

    const work = screen.getByRole("textbox", { name: /^contenido de la obra$/i });

    expect(work).toHaveValue(AI_SUPPORT_EVIDENCE.work);
    expect(work).not.toHaveValue(
      expect.stringContaining(AI_SUPPORT_EVIDENCE.support),
    );

    expect(
      screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i }),
    ).toHaveTextContent(AI_SUPPORT_EVIDENCE.support);
  });

  it("[T-80-04-B04] editar la obra no exige editar ni elimina el apoyo", async () => {
    const Experience = await loadExperience();
    const user = userEvent.setup();

    renderExperience(Experience);

    const work = screen.getByRole("textbox", { name: /^contenido de la obra$/i });

    await user.clear(work);
    await user.type(work, "Nueva versión decidida por la persona.");

    expect(work).toHaveValue("Nueva versión decidida por la persona.");
    expect(
      screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i }),
    ).toHaveTextContent(AI_SUPPORT_EVIDENCE.support);
  });

  it("[T-80-04-B05] conserva por separado obra y apoyo tras una nueva ejecución", async () => {
    const Experience = await loadExperience();
    const user = userEvent.setup();

    const first = renderExperience(Experience);

    const work = screen.getByRole("textbox", { name: /^contenido de la obra$/i });
    await user.clear(work);
    await user.type(work, "Obra persistida sin incorporar el apoyo.");

    first.unmount();

    renderExperience(Experience);

    expect(
      screen.getByRole("textbox", { name: /^contenido de la obra$/i }),
    ).toHaveValue("Obra persistida sin incorporar el apoyo.");

    expect(
      screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i }),
    ).toHaveTextContent(AI_SUPPORT_EVIDENCE.support);

    expect(
      screen.getByRole("textbox", { name: /^contenido de la obra$/i }),
    ).not.toHaveValue(expect.stringContaining(AI_SUPPORT_EVIDENCE.support));
  });

  it("[T-80-04-B06] la separación es conductual y no sólo una etiqueta visual", async () => {
    const Experience = await loadExperience();
    const user = userEvent.setup();

    renderExperience(Experience);

    const work = screen.getByRole("textbox", { name: /^contenido de la obra$/i });
    const support = screen.getByRole("region", {
      name: /^apoyo auxiliar de ia$/i,
    });

    await user.type(work, " Continuación propia.");

    expect(work).toHaveValue(
      AI_SUPPORT_EVIDENCE.work + " Continuación propia.",
    );
    expect(work).not.toHaveValue(
      expect.stringContaining(AI_SUPPORT_EVIDENCE.support),
    );
    expect(support).toHaveTextContent(AI_SUPPORT_EVIDENCE.support);
  });
});
