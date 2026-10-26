import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  createFromPrevious,
  type SituatedResult,
} from "../ru2m1/resumeModel";

const ANTECEDENT = "X-IR-01";

export function IntegratedExperience() {
  const [persistentState, setPersistentState] =
    useLocalStorage<SituatedResult | null>(
      "integrated.persistent-state",
      null,
    );

  const [firstWorkInput, setFirstWorkInput] = useState("");
  const [evolutionInput, setEvolutionInput] = useState("");
  const [sufficient, setSufficient] = useState(false);
  const [reuseInput, setReuseInput] = useState("");
  const [constituted, setConstituted] = useState(false);

  if (persistentState === null) {
    return (
      <section>
        <p aria-label="Antecedente">{ANTECEDENT}</p>

        <label>
          Primer trabajo
          <input
            value={firstWorkInput}
            onChange={(event) => setFirstWorkInput(event.target.value)}
          />
        </label>

        <button
          type="button"
          onClick={() => {
            try {
              setPersistentState(
                createFromPrevious(ANTECEDENT, firstWorkInput),
              );
            } catch {
              // Un primer trabajo inválido no constituye X → Y.
            }
          }}
        >
          Crear primer trabajo
        </button>
      </section>
    );
  }

  return (
    <section>
      <p aria-label="Antecedente">{persistentState.previous}</p>
      <p aria-label="Trabajo actual">{persistentState.current}</p>

      <label>
        Evolución
        <input
          value={evolutionInput}
          onChange={(event) => setEvolutionInput(event.target.value)}
        />
      </label>

      <button
        type="button"
        onClick={() => {
          try {
            const evolution = createFromPrevious(
              persistentState.current,
              evolutionInput,
            );

            setPersistentState({
              previous: persistentState.previous,
              current: evolution.current,
            });
            setSufficient(false);
            setConstituted(false);
          } catch {
            // Una evolución inválida no modifica el trabajo actual.
          }
        }}
      >
        Evolucionar
      </button>

      <button
        type="button"
        onClick={() => setSufficient(true)}
      >
        Considerar suficiente
      </button>

      {sufficient && (
        <p role="status">El trabajo actual se considera suficiente.</p>
      )}

      <label>
        Nuevo trabajo
        <input
          value={reuseInput}
          onChange={(event) => {
            setReuseInput(event.target.value);
            setConstituted(false);
          }}
        />
      </label>

      <button
        type="button"
        onClick={() => {
          try {
            createFromPrevious(
              persistentState.current,
              reuseInput,
            );
            setConstituted(true);
          } catch {
            setConstituted(false);
          }
        }}
      >
        Reutilizar
      </button>

      {constituted && (
        <p aria-label="Nuevo trabajo constituido">
          {reuseInput}
        </p>
      )}
    </section>
  );
}
