import { useState } from "react";

// Estructura contingente de R-HPOST-M1; no modelo general de memoria.
type HandoffContext = {
  objective: string;
  mandatoryConditions: string[];
  discardedAlternatives: { alternative: string; failedCondition: string }[];
  survivingAlternative: string;
  establishedChecks: string[];
  openQuestion: string;
  nextAction: string;
  finalDecisionPending: boolean;
  finalDecision: string | null;
};

type HandoffProps =
  | {
      participant: "P1";
      initialWork: HandoffContext & { privateNotes: string };
    }
  | { participant: "P2" };

const CONTEXT_KEY = "handoff.context";

export function HandoffExperience(props: HandoffProps) {
  const [hasS1, setHasS1] = useState(false);

  if (props.participant === "P2") return <ReceivingParticipant />;

  return (
    <section aria-label="Trabajo de P1">
      <button type="button" onClick={() => setHasS1(true)}>
        Constituir S1
      </button>
      {hasS1 && (
        <>
          <p aria-label="Estado alcanzado">S1</p>
          <p aria-label="Decisión final">pendiente</p>
          <button
            type="button"
            onClick={() => {
              const work = props.initialWork;
              // Proyección explícita: el estado privado de P1 no se entrega.
              const context: HandoffContext = {
                objective: work.objective,
                mandatoryConditions: [...work.mandatoryConditions],
                discardedAlternatives: work.discardedAlternatives.map(
                  ({ alternative, failedCondition }) => ({
                    alternative,
                    failedCondition,
                  }),
                ),
                survivingAlternative: work.survivingAlternative,
                establishedChecks: [...work.establishedChecks],
                openQuestion: work.openQuestion,
                nextAction: work.nextAction,
                finalDecisionPending: work.finalDecisionPending,
                finalDecision: work.finalDecision,
              };
              localStorage.setItem(CONTEXT_KEY, JSON.stringify(context));
            }}
          >
            Constituir contexto de relevo
          </button>
        </>
      )}
    </section>
  );
}

// Esta instancia no acepta el trabajo de P1: su única entrada es C persistido.
function ReceivingParticipant() {
  const [context, setContext] = useState<HandoffContext | null>(() => {
    const serialized = localStorage.getItem(CONTEXT_KEY);
    return serialized === null
      ? null
      : (JSON.parse(serialized) as HandoffContext);
  });
  const [evidence, setEvidence] = useState("");
  const [closedQuestion, setClosedQuestion] = useState<string | null>(null);

  // Formato local del testigo: «identificador: alternativa satisface condición».
  // No se resuelven de nuevo los descartes ni las comprobaciones de S1.
  const evidenceMatch = evidence.trim().match(/^[^:]+: (\S+) satisface (\S+)$/);
  const alternative = evidenceMatch?.[1];
  const condition = evidenceMatch?.[2];
  const canContinue =
    context !== null &&
    context.finalDecisionPending &&
    context.finalDecision === null &&
    alternative === context.survivingAlternative &&
    condition !== undefined &&
    context.mandatoryConditions.includes(condition) &&
    context.openQuestion === `${alternative}/${condition}` &&
    context.mandatoryConditions.every(
      (required) =>
        required === condition ||
        context.establishedChecks.includes(
          `${context.survivingAlternative}/${required} satisfecho`,
        ),
    );

  return (
    <section aria-label="Trabajo de P2">
      <p aria-label="Disponibilidad de contexto">
        {context === null ? "Sin contexto de relevo" : "Contexto de relevo recuperado"}
      </p>
      {context !== null && (
        <>
          <p aria-label="Estado alcanzado">{closedQuestion === null ? "S1" : "S2"}</p>
          <p aria-label="Objetivo vigente">{context.objective}</p>
          <p aria-label="Alternativa superviviente">{context.survivingAlternative}</p>
          <ul aria-label="Comprobaciones establecidas">
            {context.establishedChecks.map((check) => <li key={check}>{check}</li>)}
          </ul>
          {context.discardedAlternatives.map((discarded) => (
            <p key={discarded.alternative} aria-label={`Descarte ${discarded.alternative}`}>
              {discarded.alternative} descartada por {discarded.failedCondition}
            </p>
          ))}
          {closedQuestion === null ? (
            <>
              <p aria-label="Cuestión abierta">{context.openQuestion} pendiente</p>
              <p aria-label="Siguiente actuación">{context.nextAction}</p>
            </>
          ) : (
            <p aria-label="Cuestión cerrada">{closedQuestion}</p>
          )}
          <p aria-label="Decisión final">
            {context.finalDecisionPending ? "pendiente" : `${context.finalDecision} seleccionada`}
          </p>
        </>
      )}
      <label>
        Nueva evidencia
        <textarea value={evidence} onChange={(event) => setEvidence(event.target.value)} />
      </label>
      <button
        type="button"
        disabled={!canContinue}
        onClick={() => {
          if (!canContinue || context === null) return;
          setClosedQuestion(context.openQuestion);
          setContext({
            ...context,
            establishedChecks: [
              ...context.establishedChecks,
              `${alternative}/${condition} satisfecho`,
            ],
            openQuestion: "",
            nextAction: "",
            finalDecisionPending: false,
            finalDecision: context.survivingAlternative,
          });
        }}
      >
        Continuar
      </button>
    </section>
  );
}
