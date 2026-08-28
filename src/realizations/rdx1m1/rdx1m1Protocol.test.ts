import { beforeEach, describe, expect, it, vi } from "vitest";
import { createFromPrevious } from "../ru2m1/resumeModel";

async function freshRepository() {
  const module = await import("./localStorageDxRepository");

  return module.localStorageDxRepository;
}

describe("R-DX1-M1 experimental protocol", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.resetModules();
  });

  it("[T-DX-INTEGRATION-01] exercises the complete positive trajectory", async () => {
    const X1 = "X-EXPERIMENTO-01";
    const Y1 = "Y-EXPERIMENTO-01";
    const Z1 = "Z-EXPERIMENTO-01";

    // C0 → X disponible, Y no disponible.
    const repositoryBeforeInterruption = await freshRepository();

    repositoryBeforeInterruption.saveX(X1);

    expect(repositoryBeforeInterruption.loadX()).toBe(X1);
    expect(repositoryBeforeInterruption.loadY()).toBeNull();

    // S2(X): X interviene y se constituye X → Y.
    const restoredX = repositoryBeforeInterruption.loadX();

    const xy = createFromPrevious(restoredX, Y1);

    expect(xy).toEqual({
      previous: X1,
      current: Y1,
    });

    // C1 → X e Y disponibles de forma distinguible.
    repositoryBeforeInterruption.saveY(xy.current);

    expect(repositoryBeforeInterruption.loadX()).toBe(X1);
    expect(repositoryBeforeInterruption.loadY()).toBe(Y1);

    // La disponibilidad de Y no ha sustituido X por Y.
    expect(repositoryBeforeInterruption.loadX()).not.toBe(Y1);

    // C2 → retirar X sin retirar ni reescribir Y.
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

    repositoryBeforeInterruption.removeX();

    expect(setItemSpy).not.toHaveBeenCalled();

    expect(repositoryBeforeInterruption.loadX()).toBeNull();
    expect(repositoryBeforeInterruption.loadY()).toBe(Y1);

    setItemSpy.mockRestore();

    // T-DX13:
    // No aceptamos todavía este estado como C3.
    // Debe existir una interrupción y nuevas lecturas.

    vi.resetModules();

    // Nueva instancia/módulo: witness de nueva lectura
    // después de la interrupción.
    const repositoryAfterInterruption = await freshRepository();

    // C3 → X no disponible, Y disponible.
    expect(repositoryAfterInterruption.loadX()).toBeNull();

    const restoredY = repositoryAfterInterruption.loadY();

    expect(restoredY).toBe(Y1);

    // Correspondencia transinterrupción.
    expect(restoredY).toBe(Y1);

    // C4 → sólo ahora Y produce incidencia posterior.
    const yz = createFromPrevious(restoredY, Z1);

    expect(yz).toEqual({
      previous: Y1,
      current: Z1,
    });
  });

  it("[T-DX-INTEGRATION-02] rejects the same later action when Y is unavailable", async () => {
    const Z1 = "Z-EXPERIMENTO-01";

    const repositoryBeforeInterruption = await freshRepository();

    expect(repositoryBeforeInterruption.loadX()).toBeNull();
    expect(repositoryBeforeInterruption.loadY()).toBeNull();

    vi.resetModules();

    const repositoryAfterInterruption = await freshRepository();

    const restoredY = repositoryAfterInterruption.loadY();

    expect(restoredY).toBeNull();

    expect(() => createFromPrevious(restoredY, Z1)).toThrow();
  });

  it("[T-DX-NO-PREPARATION-01/T-DX14] does not prepare Y as the next X before X is removed", async () => {
    const X1 = "X-EXPERIMENTO-01";
    const Y1 = "Y-EXPERIMENTO-01";

    const repository = await freshRepository();

    repository.saveX(X1);

    const xy = createFromPrevious(repository.loadX(), Y1);

    repository.saveY(xy.current);

    // Guardar Y no debe sustituir el papel persistente de X.
    expect(repository.loadX()).toBe(X1);
    expect(repository.loadY()).toBe(Y1);
    expect(repository.loadX()).not.toBe(Y1);

    repository.removeX();

    expect(repository.loadX()).toBeNull();
    expect(repository.loadY()).toBe(Y1);
  });

  it("[T-DX15] separates conservation of Y from later incidence of Y", async () => {
    const Y1 = "Y-EXPERIMENTO-01";
    const Z1 = "Z-EXPERIMENTO-01";

    const repositoryBeforeInterruption = await freshRepository();

    repositoryBeforeInterruption.saveY(Y1);

    vi.resetModules();

    const repositoryAfterInterruption = await freshRepository();

    // Primera observación:
    // sólo demuestra conservación.
    const restoredY = repositoryAfterInterruption.loadY();

    expect(restoredY).toBe(Y1);

    // Segunda observación independiente:
    // demuestra incidencia.
    const result = createFromPrevious(restoredY, Z1);

    expect(result).toEqual({
      previous: Y1,
      current: Z1,
    });
  });
});
