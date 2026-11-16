import { useState } from "react";

type Capture = {
  id: string;
  text: string;
  capturedAt: string;
};

const STORAGE_KEY = "r80-01-m1.captures";

function loadCaptures(): Capture[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is Capture =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "string" &&
        typeof item.text === "string" &&
        typeof item.capturedAt === "string",
    );
  } catch {
    return [];
  }
}

function saveCaptures(captures: Capture[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(captures));
}

export function ContextualCaptureExperience() {
  const [workingText, setWorkingText] = useState("");
  const [captureOpen, setCaptureOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [captures, setCaptures] = useState<Capture[]>(() => loadCaptures());

  function closeCapture() {
    setDraft("");
    setCaptureOpen(false);
  }

  function preserveCapture() {
    if (draft.trim().length === 0) return;

    const capturedAt = new Date().toISOString();
    const nextCapture: Capture = {
      id: `${capturedAt}-${captures.length}`,
      text: draft,
      capturedAt,
    };

    const next = [...captures, nextCapture];
    saveCaptures(next);
    setCaptures(next);
    closeCapture();
  }

  return (
    <>
      <section aria-label="Actividad principal">
        <h1>Actividad principal</h1>

        <label>
          Contenido de trabajo
          <textarea
            value={workingText}
            onChange={(event) => setWorkingText(event.target.value)}
          />
        </label>

        <button
          type="button"
          onClick={() => {
            setDraft("");
            setCaptureOpen(true);
          }}
        >
          Capturar aportación
        </button>
      </section>

      {captureOpen && (
        <section aria-label="Captura contextual">
          <h2>Captura contextual</h2>

          <label>
            Aportación breve
            <textarea
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
            />
          </label>

          <button type="button" onClick={preserveCapture}>
            Conservar
          </button>

          <button type="button" onClick={closeCapture}>
            Cancelar
          </button>
        </section>
      )}

      {captures.length > 0 && (
        <section>
          <h2>Capturas conservadas</h2>

          <ul aria-label="Capturas conservadas">
            {captures.map((capture) => (
              <li key={capture.id}>
                <p>{capture.text}</p>
                <time dateTime={capture.capturedAt}>
                  {new Date(capture.capturedAt).toLocaleString("es-ES")}
                </time>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
