import { useState } from "react";

type View = "work" | "capture" | "captures";

export function ContextualCaptureBaseline() {
  const [view, setView] = useState<View>("work");
  const [workingText, setWorkingText] = useState("");
  const [idea, setIdea] = useState("");
  const [savedIdea, setSavedIdea] = useState<string | null>(null);

  if (view === "capture") {
    return (
      <section aria-label="Captura separada">
        <h1>Captura separada</h1>

        <label>
          Idea a conservar
          <textarea
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
          />
        </label>

        <button
          type="button"
          onClick={() => {
            if (idea.trim().length > 0) {
              setSavedIdea(idea);
            }
          }}
        >
          Guardar idea
        </button>

        {savedIdea !== null && (
          <p role="status">Idea guardada: {savedIdea}</p>
        )}

        <button type="button" onClick={() => setView("work")}>
          Volver a la actividad
        </button>
      </section>
    );
  }

  if (view === "captures") {
    return (
      <section aria-label="Capturas guardadas">
        <h1>Capturas guardadas</h1>

        {savedIdea !== null ? (
          <p>{savedIdea}</p>
        ) : (
          <p>No hay capturas guardadas.</p>
        )}

        <button type="button" onClick={() => setView("work")}>
          Volver a la actividad
        </button>
      </section>
    );
  }


  return (
    <section aria-label="Actividad principal">
      <h1>Actividad principal</h1>

      <label>
        Contenido de trabajo
        <textarea
          value={workingText}
          onChange={(event) => setWorkingText(event.target.value)}
        />
      </label>

      <button type="button" onClick={() => setView("capture")}>
        Ir a capturar una idea
      </button>

      {savedIdea !== null && (
        <button type="button" onClick={() => setView("captures")}>
          Ir a capturas guardadas
        </button>
      )}
    </section>
  );
}
