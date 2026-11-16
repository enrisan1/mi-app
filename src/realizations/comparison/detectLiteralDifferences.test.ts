import { describe, expect, it } from "vitest";

type LiteralDetection = {
  id: string;
  sourceA: string;
  sourceB: string;
};

type DetectLiteralDifferences = (
  first: string,
  second: string,
) => LiteralDetection[];

async function loadDetector(): Promise<DetectLiteralDifferences> {
  const modules = import.meta.glob<{
    detectLiteralDifferences: DetectLiteralDifferences;
  }>("./detectLiteralDifferences.ts");

  const load = modules["./detectLiteralDifferences.ts"];

  expect(
    load,
    "R-80-02-M4 ausente: falta ./detectLiteralDifferences.ts",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-02-M4 ausente");
  }

  return (await load()).detectLiteralDifferences;
}

describe("R-80-02-M4 — detección literal determinista", () => {
  it("[T-80-02-M4-01] produce la misma salida para las mismas entradas", async () => {
    const detect = await loadDetector();

    const first = "La fase durará cuatro semanas.";
    const second = "La fase durará seis semanas.";

    expect(detect(first, second)).toEqual(detect(first, second));
  });

  it("[T-80-02-M4-02] detecta una sustitución textual", async () => {
    const detect = await loadDetector();

    const result = detect(
      "La alternativa Delta permanece disponible.",
      "La alternativa Delta queda descartada.",
    );

    expect(result.length).toBeGreaterThan(0);
    expect(result.some((d) => d.sourceA.includes("permanece disponible"))).toBe(true);
    expect(result.some((d) => d.sourceB.includes("queda descartada"))).toBe(true);
  });

  it("[T-80-02-M4-03] detecta una inserción", async () => {
    const detect = await loadDetector();

    const result = detect(
      "El informe se revisará hoy.",
      "El informe final se revisará hoy.",
    );

    expect(result.length).toBeGreaterThan(0);
    expect(result.some((d) => d.sourceA === "" || !d.sourceA.includes("final"))).toBe(true);
    expect(result.some((d) => d.sourceB.includes("final"))).toBe(true);
  });

  it("[T-80-02-M4-04] detecta una eliminación", async () => {
    const detect = await loadDetector();

    const result = detect(
      "El informe final se revisará hoy.",
      "El informe se revisará hoy.",
    );

    expect(result.length).toBeGreaterThan(0);
    expect(result.some((d) => d.sourceA.includes("final"))).toBe(true);
    expect(result.some((d) => d.sourceB === "" || !d.sourceB.includes("final"))).toBe(true);
  });

  it("[T-80-02-M4-05] detecta un cambio numérico", async () => {
    const detect = await loadDetector();

    const result = detect(
      "La fase inicial comprende ocho documentos.",
      "La fase inicial comprende doce documentos.",
    );

    expect(result.length).toBeGreaterThan(0);
    expect(result.some((d) => d.sourceA.includes("ocho"))).toBe(true);
    expect(result.some((d) => d.sourceB.includes("doce"))).toBe(true);
  });

  it("[T-80-02-M4-06] conserva múltiples diferencias independientes", async () => {
    const detect = await loadDetector();

    const result = detect(
      [
        "La fase inicial comprende ocho documentos.",
        "La alternativa Delta permanece disponible.",
        "La decisión será el viernes.",
      ].join("\n"),
      [
        "La fase inicial comprende doce documentos.",
        "La alternativa Delta queda descartada.",
        "La decisión será el miércoles.",
      ].join("\n"),
    );

    expect(result.length).toBeGreaterThanOrEqual(3);
    expect(result.some((d) => d.sourceA.includes("ocho") && d.sourceB.includes("doce"))).toBe(true);
    expect(
      result.some(
        (d) =>
          d.sourceA.includes("permanece disponible") &&
          d.sourceB.includes("queda descartada"),
      ),
    ).toBe(true);
    expect(
      result.some(
        (d) => d.sourceA.includes("viernes") && d.sourceB.includes("miércoles"),
      ),
    ).toBe(true);
  });

  it("[T-80-02-M4-07] devuelve salida vacía cuando no hay diferencias", async () => {
    const detect = await loadDetector();

    const text = "No existen diferencias entre ambas entradas.";

    expect(detect(text, text)).toEqual([]);
  });

  it("[T-80-02-M4-08] no atribuye relevancia ni recomendación", async () => {
    const detect = await loadDetector();

    const result = detect(
      "La fase durará cuatro semanas.",
      "La fase durará seis semanas.",
    );

    for (const detection of result) {
      expect(detection).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          sourceA: expect.any(String),
          sourceB: expect.any(String),
        }),
      );
      expect(detection).not.toHaveProperty("relevance");
      expect(detection).not.toHaveProperty("importance");
      expect(detection).not.toHaveProperty("recommendation");
      expect(detection).not.toHaveProperty("preferred");
    }
  });
});
