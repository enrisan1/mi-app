import { useState } from "react";

type AuthorIdentity = {
  id: "alias-a" | "alias-b";
  label: "Alias A" | "Alias B";
};

type Work = {
  id: number;
  content: string;
  authorIdentityId: AuthorIdentity["id"];
};

const OPERATIONAL_IDENTITY = "Usuario principal";

const AUTHOR_IDENTITIES: AuthorIdentity[] = [
  { id: "alias-a", label: "Alias A" },
  { id: "alias-b", label: "Alias B" },
];

const STORAGE_KEY = "r80-03-m1.works";

function loadWorks(): Work[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (item): item is Work =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "number" &&
        typeof item.content === "string" &&
        (item.authorIdentityId === "alias-a" ||
          item.authorIdentityId === "alias-b"),
    );
  } catch {
    return [];
  }
}

function saveWorks(works: Work[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(works));
}

export function AuthorIdentityExperience() {
  const [draft, setDraft] = useState("");
  const [selectedAuthorId, setSelectedAuthorId] =
    useState<AuthorIdentity["id"]>("alias-a");
  const [works, setWorks] = useState<Work[]>(() => loadWorks());

  function constituteWork() {
    if (draft.trim().length === 0) {
      return;
    }

    const nextWork: Work = {
      id: works.length + 1,
      content: draft,
      authorIdentityId: selectedAuthorId,
    };

    const next = [...works, nextWork];

    saveWorks(next);
    setWorks(next);
    setDraft("");
  }

  function authorLabelFor(id: AuthorIdentity["id"]) {
    return AUTHOR_IDENTITIES.find((identity) => identity.id === id)?.label ?? id;
  }

  return (
    <main>
      <h1>Identidad autoral elegible</h1>

      <p aria-label="Identidad operativa">{OPERATIONAL_IDENTITY}</p>

      <section aria-label="Identidades autorales disponibles">
        <h2>Identidades autorales disponibles</h2>

        <label>
          Identidad autoral
          <select
            value={selectedAuthorId}
            onChange={(event) =>
              setSelectedAuthorId(event.target.value as AuthorIdentity["id"])
            }
          >
            {AUTHOR_IDENTITIES.map((identity) => (
              <option key={identity.id} value={identity.id}>
                {identity.label}
              </option>
            ))}
          </select>
        </label>
      </section>

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
                {authorLabelFor(work.authorIdentityId)}
              </p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
