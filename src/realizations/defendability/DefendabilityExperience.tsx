import { useState } from "react";

type Stage = "initial" | "transformed" | "reduced";

export function DefendabilityExperience() {
  const [stage, setStage] = useState<Stage>("initial");

  return (
    <section>
      {stage !== "reduced" && (
        <p>Seleccionar la alternativa con menor índice Q.</p>
      )}

      {stage === "initial" ? (
        <>
          <p>Alternativa A: Q = 72</p>
          <p>Alternativa B: Q = 61</p>
        </>
      ) : (
        <p>Q(A) − Q(B) = +11</p>
      )}

      <p>Seleccionar B.</p>

      {stage === "initial" && (
        <button type="button" onClick={() => setStage("transformed")}>
          Transformar
        </button>
      )}

      {stage === "transformed" && (
        <button type="button" onClick={() => setStage("reduced")}>
          Reducir
        </button>
      )}
    </section>
  );
}
