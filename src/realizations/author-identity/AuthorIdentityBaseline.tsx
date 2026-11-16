import { useState } from "react";

type Work = {
  id: number;
  content: string;
  author: string;
};

const OPERATIONAL_IDENTITY = "Usuario principal";

export function AuthorIdentityBaseline() {
  const [draft, setDraft] = useState("");
  const [works, setWorks] = useState<Work[]>([]);

  function constituteWork() {
    if (draft.trim().length === 0) {
      return;
    }

    const nextWork: Work = {
      id: works.length + 1,
      content: draft,
      author: OPERATIONAL_IDENTITY,
    };

    setWorks([...works, nextWork]);
    setDraft("");
  }

  return (
    <main>
      <h1>Identidad autoral — baseline</h1>

      <p aria-label="Identidad operativa">{OPERATIONAL_IDENTITY}</p>

      <label>
        Contenido de la obra
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
      </label>

      <button type="button" onClick={constituteWork}>
        Constituir obra
      </button>

      {works.length > 0 && (
        <section aria-label="Obras constituidas">
          <h2>Obras constituidas</h2>

          {works.map((work) => (
            <article key={work.id}>
              <h3>Obra {work.id}</h3>
              <p aria-label={`Contenido de obra ${work.id}`}>
                {work.content}
              </p>
              <p aria-label={`Autoría de obra ${work.id}`}>
                {work.author}
              </p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
