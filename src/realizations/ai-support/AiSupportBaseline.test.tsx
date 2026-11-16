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

type BaselineModule = {
  AiSupportBaseline: ComponentType<Props>;
};

async function loadBaseline() {
  vi.resetModules();

  const modules = import.meta.glob<BaselineModule>("./AiSupportBaseline.tsx");
  const load = modules["./AiSupportBaseline.tsx"];

  expect(
    load,
    "R-80-04-M1-A ausente: falta ./AiSupportBaseline.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-04-M1-A ausente");
  }

  return (await load()).AiSupportBaseline;
}

function renderBaseline(Baseline: ComponentType<Props>) {
  return render(
    <Baseline
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

describe("R-80-04-M1-A — apoyo IA etiquetado dentro de la obra", () => {
  it("[T-80-04-A01] presenta la obra y el apoyo IA en una única superficie editable", async () => {
    const Baseline = await loadBaseline();

    renderBaseline(Baseline);

    const work = screen.getByRole("textbox", { name: /^contenido de la obra$/i });

    expect(work).toHaveValue(expect.stringContaining(AI_SUPPORT_EVIDENCE.work));
    expect(work).toHaveValue(
      expect.stringContaining(AI_SUPPORT_EVIDENCE.support),
    );
    expect(work).toHaveValue(expect.stringContaining("[APOYO IA]"));
  });

  it("[T-80-04-A02] conserva visible la misma procedencia IA acreditada", async () => {
    const Baseline = await loadBaseline();

    renderBaseline(Baseline);

    const provenance = screen.getByRole("region", {
      name: /^procedencia del apoyo ia$/i,
    });

    expect(provenance).toHaveTextContent(AI_SUPPORT_EVIDENCE.evidenceId);
    expect(provenance).toHaveTextContent(AI_SUPPORT_EVIDENCE.system);
    expect(provenance).toHaveTextContent(AI_SUPPORT_EVIDENCE.model);
  });

  it("[T-80-04-A03] no dispone de un estado auxiliar funcionalmente separado", async () => {
    const Baseline = await loadBaseline();

    renderBaseline(Baseline);

    expect(
      screen.queryByRole("region", { name: /^apoyo auxiliar de ia$/i }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: /^contenido de la obra$/i }),
    ).toHaveValue(expect.stringContaining(AI_SUPPORT_EVIDENCE.support));
  });

  it("[T-80-04-A04] editar la única superficie implica editar el valor que contiene también el apoyo", async () => {
    const Baseline = await loadBaseline();
    const user = userEvent.setup();

    renderBaseline(Baseline);

    const work = screen.getByRole("textbox", { name: /^contenido de la obra$/i });

    await user.clear(work);
    await user.type(work, "Nueva versión de la obra.");

    expect(work).toHaveValue("Nueva versión de la obra.");
    expect(work).not.toHaveValue(
      expect.stringContaining(AI_SUPPORT_EVIDENCE.support),
    );
  });
});
