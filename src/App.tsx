import { useRef, useState } from "react";
import {
  ResumeExperience,
  type EstablishedResolution,
} from "./realizations/ru2m1/ResumeExperience";
import { PostV1IntegratedExperience } from "./realizations/post-v1-integrated/PostV1IntegratedExperience";
import { localStorageResumeRepository } from "./realizations/ru2m1/localStorageResumeRepository";
import { requestAiSupport } from "./ai-support/aiSupportGateway";
import { requestTurnstileToken } from "./ai-support/turnstileClient";
import { OrdinaryComparison } from "./OrdinaryComparison";
import {
  attachDecisionReason,
  attachParticipantProvenance,
  createKnowledgeTrajectory,
  traceResult,
  traceResultParticipantProvenance,
  traceResultReason,
} from "./realizations/knowledge-trajectory/KnowledgeTrajectory";
import {
  listAssociatedTrajectories,
  saveAssociatedTrajectory,
} from "./realizations/knowledge-trajectory/knowledgeTrajectoryRepository";

type OrdinaryMaterial = {
  id: string;
  content: string;
  antecedentMaterialId?: string;
};

type ContextualCapture = {
  id: string;
  text: string;
  capturedAt: string;
  workId?: string;
};

type AuthorIdentity = {
  id: string;
  label: string;
};

type WorkAuthorship = {
  materialId: string;
  authorIdentityId: string;
};

type AiSupport = {
  id: string;
  materialId: string;
  request: string;
  content: string;
  provenance: {
    system: string;
    model?: string;
    requestId?: string;
  };
  createdAt: string;
};

const OPERATIONAL_IDENTITY = "Usuario principal";
const AUTHOR_IDENTITIES_STORAGE_KEY = "ordinary.author-identities";
const WORK_AUTHORSHIPS_STORAGE_KEY = "ordinary.work-authorships";
const AI_SUPPORT_STORAGE_KEY = "ordinary.ai-support";
const CONTEXTUAL_CAPTURES_STORAGE_KEY = "ordinary.contextual-captures";
const CURRENT_WORK_ID_STORAGE_KEY = "ordinary.current-work-id";

function loadContextualCaptures(): ContextualCapture[] {
  try {
    const stored = localStorage.getItem(CONTEXTUAL_CAPTURES_STORAGE_KEY);

    if (stored === null) {
      return [];
    }

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (item): item is ContextualCapture =>
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

function saveContextualCaptures(captures: ContextualCapture[]) {
  localStorage.setItem(
    CONTEXTUAL_CAPTURES_STORAGE_KEY,
    JSON.stringify(captures),
  );
}

function loadAuthorIdentities(): AuthorIdentity[] {
  try {
    const stored = localStorage.getItem(AUTHOR_IDENTITIES_STORAGE_KEY);
    if (stored === null) return [];

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is AuthorIdentity =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "string" &&
        typeof item.label === "string",
    );
  } catch {
    return [];
  }
}

function loadWorkAuthorships(): WorkAuthorship[] {
  try {
    const stored = localStorage.getItem(WORK_AUTHORSHIPS_STORAGE_KEY);
    if (stored === null) return [];

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is WorkAuthorship =>
        typeof item === "object" &&
        item !== null &&
        typeof item.materialId === "string" &&
        typeof item.authorIdentityId === "string",
    );
  } catch {
    return [];
  }
}

function saveAuthorIdentities(identities: AuthorIdentity[]) {
  localStorage.setItem(AUTHOR_IDENTITIES_STORAGE_KEY, JSON.stringify(identities));
}

function saveWorkAuthorships(authorships: WorkAuthorship[]) {
  localStorage.setItem(WORK_AUTHORSHIPS_STORAGE_KEY, JSON.stringify(authorships));
}

function loadAiSupports(): AiSupport[] {
  try {
    const stored = localStorage.getItem(AI_SUPPORT_STORAGE_KEY);
    if (stored === null) return [];

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is AiSupport =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "string" &&
        typeof item.materialId === "string" &&
        typeof item.request === "string" &&
        typeof item.content === "string" &&
        typeof item.createdAt === "string" &&
        typeof item.provenance === "object" &&
        item.provenance !== null &&
        typeof item.provenance.system === "string" &&
        (item.provenance.model === undefined ||
          typeof item.provenance.model === "string") &&
        (item.provenance.requestId === undefined ||
          typeof item.provenance.requestId === "string"),
    );
  } catch {
    return [];
  }
}

function saveAiSupports(supports: AiSupport[]) {
  localStorage.setItem(AI_SUPPORT_STORAGE_KEY, JSON.stringify(supports));
}

function loadOrdinaryMaterials(): OrdinaryMaterial[] {
  const stored = localStorage.getItem("ordinary.materials");

  if (stored === null) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(stored);

    return Array.isArray(parsed) ? (parsed as OrdinaryMaterial[]) : [];
  } catch {
    return [];
  }
}

type IntegrationChoice = null | "existing" | "current";

type ReceivedCollaborativeAntecedent = {
  sharedResult: string;
  firstContribution: {
    participant: string;
    content: string;
  };
  antecedentResultId?: string;
  antecedentMaterialId?: string;
};

type AppProps = {
  resolution?: EstablishedResolution;
  secondResolution?: EstablishedResolution;
  thirdResolution?: EstablishedResolution;
};

function App({ resolution, secondResolution, thirdResolution }: AppProps) {
  const [assistanceRequested, setAssistanceRequested] = useState(false);
  const [captureOpen, setCaptureOpen] = useState(false);
  const [captureDraft, setCaptureDraft] = useState("");
  const [contextualCaptures, setContextualCaptures] = useState<
    ContextualCapture[]
  >(() => loadContextualCaptures());
  const [authorIdentityDraft, setAuthorIdentityDraft] = useState("");
  const [authorIdentities, setAuthorIdentities] = useState<AuthorIdentity[]>(
    () => loadAuthorIdentities(),
  );
  const [selectedAuthorshipMaterialId, setSelectedAuthorshipMaterialId] =
    useState("");
  const [selectedAuthorIdentityId, setSelectedAuthorIdentityId] = useState("");
  const [workAuthorships, setWorkAuthorships] = useState<WorkAuthorship[]>(
    () => loadWorkAuthorships(),
  );
  const [selectedAiSupportMaterialId, setSelectedAiSupportMaterialId] =
    useState("");
  const [aiSupportRequest, setAiSupportRequest] = useState("");
  const [aiSupports, setAiSupports] = useState<AiSupport[]>(() =>
    loadAiSupports(),
  );
  const [aiSupportPending, setAiSupportPending] = useState(false);
  const [aiSupportError, setAiSupportError] = useState<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const [ordinaryMaterials, setOrdinaryMaterials] = useState<
    OrdinaryMaterial[]
  >(() => loadOrdinaryMaterials());
  const [currentWorkId, setCurrentWorkId] = useState<string | null>(() => {
    const materials = loadOrdinaryMaterials();
    const persistedId = localStorage.getItem(CURRENT_WORK_ID_STORAGE_KEY);

    if (
      persistedId !== null &&
      materials.some((material) => material.id === persistedId)
    ) {
      return persistedId;
    }

    const previous = localStorageResumeRepository.loadPrevious();
    if (previous === null) {
      return null;
    }

    const matches = materials.filter((material) => material.content === previous);
    const matchingMaterial = matches[0];

    if (matches.length !== 1 || matchingMaterial === undefined) {
      return null;
    }

    localStorage.setItem(CURRENT_WORK_ID_STORAGE_KEY, matchingMaterial.id);
    return matchingMaterial.id;
  });
  const currentWork =
    currentWorkId === null
      ? undefined
      : ordinaryMaterials.find((material) => material.id === currentWorkId);
  const [openedKnowledgeTrajectoryKey, setOpenedKnowledgeTrajectoryKey] =
    useState<string | null>(null);
  const [openedKnowledgeTrajectoryForwardStart, setOpenedKnowledgeTrajectoryForwardStart] =
    useState<string | null>(null);
  const [continuedKnowledgeTrajectoryKey, setContinuedKnowledgeTrajectoryKey] =
    useState<string | null>(null);
  const [knowledgeContinuationDraft, setKnowledgeContinuationDraft] =
    useState("");
  const [decisionTrajectoryKey, setDecisionTrajectoryKey] =
    useState<string | null>(null);
  const [decisionDraft, setDecisionDraft] = useState({
    objective: "",
    condition1: "",
    condition2: "",
    decisiveCondition: "",
    discardedAlternative: "",
    discardedFailedCondition: "",
    selectedAlternative: "",
    decisiveEvidence: "",
    decision: "",
  });
  const knowledgeTrajectoryAssociations = listAssociatedTrajectories().filter(
    (association) =>
      ordinaryMaterials.some(
        (material) => material.id === association.materialId,
      ),
  );
  const [availablePostV1Current, setAvailablePostV1Current] = useState<
    string | null
  >(() => localStorageResumeRepository.loadPrevious());
  const [integrationChoice, setIntegrationChoice] =
    useState<IntegrationChoice>(null);
  const [resumeExperienceKey, setResumeExperienceKey] = useState(0);
  const [hasPersistedPostV1] = useState(
    () => localStorage.getItem("post-v1-integrated.state") !== null,
  );
  const [localizationNeed, setLocalizationNeed] = useState("");
  const [newWork, setNewWork] = useState("");
  const [constitutedWork, setConstitutedWork] = useState<string | null>(null);
  const [inspectionOpen, setInspectionOpen] = useState(false);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string | null>(
    null,
  );
  const [comparisonFirstMaterialId, setComparisonFirstMaterialId] = useState("");
  const [comparisonSecondMaterialId, setComparisonSecondMaterialId] = useState("");
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [receivedAntecedentInput, setReceivedAntecedentInput] = useState("");
  const [receivedCollaborativeAntecedent, setReceivedCollaborativeAntecedent] =
    useState<ReceivedCollaborativeAntecedent | null>(null);
  const [participantBContribution, setParticipantBContribution] = useState("");
  const [constitutedParticipantBContribution, setConstitutedParticipantBContribution] =
    useState<string | null>(null);
  const [handoffTrajectoryKey, setHandoffTrajectoryKey] =
    useState<string | null>(null);
  const [handoffTransferValue, setHandoffTransferValue] = useState("");

  const establishCurrentWork = (content: string) => {
    setAvailablePostV1Current(content);

    const nextMaterial: OrdinaryMaterial = {
      id: `m${ordinaryMaterials.length + 1}`,
      content,
    };
    const nextMaterials = [...ordinaryMaterials, nextMaterial];

    localStorage.setItem(CURRENT_WORK_ID_STORAGE_KEY, nextMaterial.id);
    setCurrentWorkId(nextMaterial.id);
    setOrdinaryMaterials(nextMaterials);
    localStorage.setItem("ordinary.materials", JSON.stringify(nextMaterials));
  };

  const recoverFromIncompatiblePostV1 = () => {
    setIntegrationChoice(null);
  };

  if (integrationChoice === "existing") {
    return (
      <PostV1IntegratedExperience
        onDiscardIncompatibleState={recoverFromIncompatiblePostV1}
      />
    );
  }

  if (integrationChoice === "current" && availablePostV1Current !== null) {
    return (
      <PostV1IntegratedExperience
        initialCurrent={availablePostV1Current}
        onDiscardIncompatibleState={recoverFromIncompatiblePostV1}
      />
    );
  }

  return (
    <main>
      <section aria-labelledby="project-orientation-heading">
        <h2 id="project-orientation-heading">Dónde estás</h2>

        <p>
          Estás utilizando la primera realización contingente destinada al uso
          del proyecto.
        </p>

        <p>
          La situación operativa concreta en la que te encuentras se muestra a
          continuación.
        </p>
      </section>

      <section aria-labelledby="problem-heading">
        <h2 id="problem-heading">Un problema para pensar</h2>
        <p>
          Un cuaderno y un lápiz cuestan juntos 5 euros. El cuaderno cuesta 3
          euros más que el lápiz. ¿Cuánto cuesta el lápiz?
        </p>
        <button type="button" onClick={() => setAssistanceRequested(true)}>
          Solicitar asistencia
        </button>
        {assistanceRequested && (
          <p role="status">
            El lápiz cuesta 1 euro: al restar los 3 euros de diferencia, quedan
            2 euros que corresponden a dos veces el precio del lápiz.
          </p>
        )}
      </section>

      <section aria-label="Captura contextual">
        <button
          type="button"
          onClick={() => {
            setCaptureDraft("");
            setCaptureOpen(true);
          }}
        >
          Capturar aportación
        </button>

        {captureOpen && (
          <div>
            <label>
              Aportación breve
              <textarea
                value={captureDraft}
                onChange={(event) => setCaptureDraft(event.target.value)}
              />
            </label>

            <button
              type="button"
              onClick={() => {
                if (captureDraft.trim().length === 0) {
                  return;
                }

                const capturedAt = new Date().toISOString();
                const nextCaptures = [
                  ...contextualCaptures,
                  {
                    id: `${capturedAt}-${contextualCaptures.length}`,
                    text: captureDraft,
                    capturedAt,
                    ...(currentWorkId !== null ? { workId: currentWorkId } : {}),
                  },
                ];

                saveContextualCaptures(nextCaptures);
                setContextualCaptures(nextCaptures);
                setCaptureDraft("");
                setCaptureOpen(false);
              }}
            >
              Conservar
            </button>

            <button
              type="button"
              onClick={() => {
                setCaptureDraft("");
                setCaptureOpen(false);
              }}
            >
              Cancelar
            </button>
          </div>
        )}

        {contextualCaptures.length > 0 && (
          <section aria-label="Capturas conservadas">
            <h2>Capturas conservadas</h2>
            <ul>
              {contextualCaptures.map((capture) => (
                <li key={capture.id}>
                  <p>{capture.text}</p>
                  {capture.workId !== undefined && (
                    <p>
                      {
                        ordinaryMaterials.find(
                          (material) => material.id === capture.workId,
                        )?.content
                      }
                    </p>
                  )}
                  <time dateTime={capture.capturedAt}>
                    {new Date(capture.capturedAt).toLocaleString("es-ES")}
                  </time>
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>

      <section aria-label="Identidad autoral">
        <h2>Identidad autoral</h2>

        <p aria-label="Identidad operativa">{OPERATIONAL_IDENTITY}</p>

        <label>
          Nueva identidad autoral
          <input
            value={authorIdentityDraft}
            onChange={(event) => setAuthorIdentityDraft(event.target.value)}
          />
        </label>

        <button
          type="button"
          onClick={() => {
            const label = authorIdentityDraft.trim();
            if (label.length === 0) {
              return;
            }

            const existing = authorIdentities.find(
              (identity) => identity.label === label,
            );

            if (existing !== undefined) {
              setSelectedAuthorIdentityId(existing.id);
              setAuthorIdentityDraft("");
              return;
            }

            const nextIdentity: AuthorIdentity = {
              id: `author-${authorIdentities.length + 1}`,
              label,
            };
            const next = [...authorIdentities, nextIdentity];

            saveAuthorIdentities(next);
            setAuthorIdentities(next);
            setSelectedAuthorIdentityId(nextIdentity.id);
            setAuthorIdentityDraft("");
          }}
        >
          Crear identidad autoral
        </button>

        <label>
          Obra ordinaria
          <select
            value={selectedAuthorshipMaterialId}
            onChange={(event) =>
              setSelectedAuthorshipMaterialId(event.target.value)
            }
          >
            <option value="">Selecciona una obra</option>
            {ordinaryMaterials.map((material) => (
              <option key={material.id} value={material.id}>
                {material.content}
              </option>
            ))}
          </select>
        </label>

        <label>
          Identidad autoral
          <select
            value={selectedAuthorIdentityId}
            onChange={(event) =>
              setSelectedAuthorIdentityId(event.target.value)
            }
          >
            <option value="">Selecciona una identidad</option>
            {authorIdentities.map((identity) => (
              <option key={identity.id} value={identity.id}>
                {identity.label}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          disabled={
            selectedAuthorshipMaterialId === "" ||
            selectedAuthorIdentityId === ""
          }
          onClick={() => {
            if (
              selectedAuthorshipMaterialId === "" ||
              selectedAuthorIdentityId === ""
            ) {
              return;
            }

            const next = [
              ...workAuthorships.filter(
                (authorship) =>
                  authorship.materialId !== selectedAuthorshipMaterialId,
              ),
              {
                materialId: selectedAuthorshipMaterialId,
                authorIdentityId: selectedAuthorIdentityId,
              },
            ];

            saveWorkAuthorships(next);
            setWorkAuthorships(next);
          }}
        >
          Asignar autoría
        </button>

        {workAuthorships.length > 0 && (
          <section aria-label="Autorías de obras">
            <h3>Autorías de obras</h3>
            {workAuthorships.map((authorship) => {
              const material = ordinaryMaterials.find(
                (item) => item.id === authorship.materialId,
              );
              const identity = authorIdentities.find(
                (item) => item.id === authorship.authorIdentityId,
              );

              if (material === undefined || identity === undefined) {
                return null;
              }

              return (
                <article key={authorship.materialId}>
                  <p>{material.content}</p>
                  <p aria-label={`Autoría de obra ${authorship.materialId}`}>
                    {identity.label}
                  </p>
                </article>
              );
            })}
          </section>
        )}
      </section>

      <section aria-label="Apoyo auxiliar de IA">
        <h2>Apoyo auxiliar de IA</h2>

        <label>
          Obra para apoyo IA
          <select
            value={selectedAiSupportMaterialId || currentWorkId || ""}
            onChange={(event) => {
              setSelectedAiSupportMaterialId(event.target.value);
              setAiSupportError(null);
            }}
          >
            <option value="">Selecciona una obra</option>
            {ordinaryMaterials.map((material) => (
              <option key={material.id} value={material.id}>
                {material.content}
              </option>
            ))}
          </select>
        </label>

        <label>
          Qué apoyo necesitas
          <textarea
            value={aiSupportRequest}
            onChange={(event) => {
              setAiSupportRequest(event.target.value);
              setAiSupportError(null);
            }}
          />
        </label>

        <div ref={turnstileContainerRef} aria-label="Verificación antiabuso" />

        <button
          type="button"
          disabled={
            (selectedAiSupportMaterialId || currentWorkId || "") === "" ||
            aiSupportRequest.trim().length === 0 ||
            aiSupportPending
          }
          onClick={async () => {
            const effectiveAiSupportMaterialId =
              selectedAiSupportMaterialId || currentWorkId || "";
            const material = ordinaryMaterials.find(
              (item) => item.id === effectiveAiSupportMaterialId,
            );

            if (material === undefined || aiSupportRequest.trim().length === 0) {
              return;
            }

            setAiSupportPending(true);
            setAiSupportError(null);

            try {
              const turnstileContainer = turnstileContainerRef.current;

              if (turnstileContainer === null) {
                throw new Error("Turnstile container is unavailable");
              }

              const turnstileToken =
                await requestTurnstileToken(turnstileContainer);

              const response = await requestAiSupport({
                workId: material.id,
                workContent: material.content,
                request: aiSupportRequest,
                turnstileToken,
              });

              const createdAt = new Date().toISOString();
              const nextSupport: AiSupport = {
                id: `${createdAt}-${aiSupports.length}`,
                materialId: material.id,
                request: aiSupportRequest,
                content: response.content,
                provenance: response.provenance,
                createdAt,
              };
              const next = [...aiSupports, nextSupport];

              const matchingTrajectoryAssociations =
                listAssociatedTrajectories().filter(
                  (association) => association.materialId === material.id,
                );

              const association = matchingTrajectoryAssociations[0];

              if (
                matchingTrajectoryAssociations.length === 1 &&
                association !== undefined
              ) {
                const contributionIndex =
                  (association.trajectory.participantProvenance ?? []).length + 1;
                const participantId =
                  `PAI-${association.resultId}-${contributionIndex}`;
                const actionId =
                  `AC-AI-${association.resultId}-${contributionIndex}`;
                const transformationId =
                  `T-AI-${association.resultId}-${contributionIndex}`;
                const trajectoryWithAiTransformation = {
                  ...association.trajectory,
                  entities: [
                    ...association.trajectory.entities,
                    {
                      id: transformationId,
                      kind: "transformation" as const,
                      content: response.content,
                    },
                  ],
                };
                const trajectoryWithAiProvenance = attachParticipantProvenance(
                  trajectoryWithAiTransformation,
                  {
                    resultId: association.resultId,
                    contributions: [
                      {
                        participant: {
                          id: participantId,
                          kind: "participant",
                          content: response.provenance.system,
                        },
                        participantType: "ai",
                        action: {
                          id: actionId,
                          kind: "action",
                          content: aiSupportRequest,
                        },
                        transformationId,
                        contributionState: "produced",
                        aiProvenance: response.provenance,
                      },
                    ],
                  },
                );

                saveAssociatedTrajectory({
                  ...association,
                  trajectory: trajectoryWithAiProvenance,
                });
              }

              saveAiSupports(next);
              setAiSupports(next);
              setAiSupportRequest("");
            } catch {
              setAiSupportError("No se pudo obtener apoyo IA.");
            } finally {
              setAiSupportPending(false);
            }
          }}
        >
          Solicitar apoyo IA
        </button>

        {aiSupportError !== null && <p role="alert">{aiSupportError}</p>}

        {aiSupports.length > 0 && (
          <section aria-label="Apoyos IA conservados">
            <h3>Apoyos IA conservados</h3>

            {aiSupports.map((support) => (
              <article
                key={support.id}
                aria-label={`Apoyo IA de obra ${support.materialId}`}
              >
                <p>{support.content}</p>
                <p aria-label="Sistema de IA">{support.provenance.system}</p>
                {support.provenance.model !== undefined && (
                  <p aria-label="Modelo de IA">{support.provenance.model}</p>
                )}
                {support.provenance.requestId !== undefined && (
                  <p aria-label="Identificador de solicitud IA">
                    {support.provenance.requestId}
                  </p>
                )}
              </article>
            ))}
          </section>
        )}
      </section>

      {knowledgeTrajectoryAssociations.length > 0 && (
        <section aria-label="Trayectorias de conocimiento">
          <h2>Trayectorias de conocimiento</h2>

          {knowledgeTrajectoryAssociations.map((association) => {
            const material = ordinaryMaterials.find(
              (candidate) => candidate.id === association.materialId,
            );

            if (material === undefined) {
              return null;
            }

            const trajectoryKey = `${association.materialId}:${association.resultId}`;
            const isOpen = openedKnowledgeTrajectoryKey === trajectoryKey;
            const provenance = isOpen
              ? traceResult(association.trajectory, association.resultId)
              : null;
            const hasStructuredReason =
              association.trajectory.relations.some(
                (relation) =>
                  relation.type === "justifies" &&
                  relation.to === association.resultId,
              );
            const reason =
              isOpen && hasStructuredReason
                ? traceResultReason(association.trajectory, association.resultId)
                : null;
            const participantProvenance = isOpen
              ? traceResultParticipantProvenance(
                  association.trajectory,
                  association.resultId,
                )
              : [];
            const contributionStateLabel = {
              produced: "producida",
              accepted: "aceptada",
              rejected: "rechazada",
              modified: "modificada",
            } as const;

            return (
              <article
                key={trajectoryKey}
                aria-label={`Trayectoria de resultado ${association.resultId}`}
              >
                <p>{material.content}</p>
                <p>{association.resultId}</p>
                <button
                  type="button"
                  onClick={() => {
                    setOpenedKnowledgeTrajectoryKey(trajectoryKey);
                    setOpenedKnowledgeTrajectoryForwardStart(null);
                  }}
                >
                  Ver trayectoria de {association.resultId}
                </button>

                {provenance !== null && (
                  <section aria-label={`Trayectoria de ${association.resultId}`}>
                    <h3>Trayectoria de {association.resultId}</h3>

                    <section aria-label="Procedencia">
                      <h4>Procedencia</h4>
                      <p>
                        {provenance.sourceId} → {provenance.assertionId} →{" "}
                        {provenance.transformationId} → {provenance.resultId}
                      </p>
                      <p>
                        {provenance.participantId} → {provenance.actionId} →{" "}
                        {provenance.transformationId}
                      </p>
                    </section>

                    {participantProvenance.length > 0 && (
                      <section aria-label="Procedencia de participantes">
                        <h4>Procedencia de participantes</h4>
                        {participantProvenance.map((contribution) => (
                          <article
                            key={`${contribution.participantId}:${contribution.actionId}`}
                          >
                            <p>
                              {contribution.participantId} —{" "}
                              {contribution.participantType === "human"
                                ? "humano"
                                : contribution.participantType === "ai"
                                  ? "IA"
                                  : "otro"}
                            </p>
                            <p>
                              {contribution.actionId} →{" "}
                              {contribution.transformationId}
                            </p>
                            <p>
                              {contributionStateLabel[contribution.contributionState]}
                            </p>
                            {contribution.aiProvenance !== undefined && (
                              <>
                                <p>{contribution.aiProvenance.system}</p>
                                {contribution.aiProvenance.model !== undefined && (
                                  <p>{contribution.aiProvenance.model}</p>
                                )}
                                {contribution.aiProvenance.requestId !== undefined && (
                                  <p>{contribution.aiProvenance.requestId}</p>
                                )}
                              </>
                            )}
                          </article>
                        ))}
                      </section>
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        setOpenedKnowledgeTrajectoryForwardStart(
                          provenance.sourceId,
                        )
                      }
                    >
                      Seguir desde {provenance.sourceId}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenedKnowledgeTrajectoryForwardStart(
                          provenance.participantId,
                        )
                      }
                    >
                      Seguir desde {provenance.participantId}
                    </button>

                    {openedKnowledgeTrajectoryForwardStart ===
                      provenance.sourceId && (
                      <section
                        aria-label={`Recorrido desde ${provenance.sourceId}`}
                      >
                        <p>
                          {provenance.sourceId} → {provenance.assertionId} →{" "}
                          {provenance.transformationId} → {provenance.resultId}
                        </p>
                      </section>
                    )}

                    {openedKnowledgeTrajectoryForwardStart ===
                      provenance.participantId && (
                      <section
                        aria-label={`Recorrido desde ${provenance.participantId}`}
                      >
                        <p>
                          {provenance.participantId} → {provenance.actionId} →{" "}
                          {provenance.transformationId} → {provenance.resultId}
                        </p>
                      </section>
                    )}

                    {reason !== null && (
                      <section aria-label="Razón">
                        <h4>Razón</h4>
                        <p>
                          {reason.objectiveId}:{" "}
                          {association.trajectory.entities.find(
                            (entity) => entity.id === reason.objectiveId,
                          )?.content}
                        </p>
                        <p>
                          {reason.mandatoryConditionIds
                            .map((conditionId) => {
                              const content = association.trajectory.entities.find(
                                (entity) => entity.id === conditionId,
                              )?.content;
                              return `${conditionId}: ${content ?? ""}`;
                            })
                            .join(" / ")}
                        </p>
                        {reason.discardedAlternatives.map((discarded) => {
                          const alternativeContent =
                            association.trajectory.entities.find(
                              (entity) =>
                                entity.id === discarded.alternativeId,
                            )?.content;
                          const failedConditionContent =
                            association.trajectory.entities.find(
                              (entity) =>
                                entity.id === discarded.failedConditionId,
                            )?.content;

                          return (
                            <p key={discarded.alternativeId}>
                              {discarded.alternativeId}: {alternativeContent}{" "}
                              descartada por {discarded.failedConditionId}:{" "}
                              {failedConditionContent}
                            </p>
                          );
                        })}
                        <p>
                          {reason.selectedAlternativeId}:{" "}
                          {association.trajectory.entities.find(
                            (entity) =>
                              entity.id === reason.selectedAlternativeId,
                          )?.content}{" "}
                          seleccionada
                        </p>
                        <p>
                          {reason.decisiveEvidenceId}:{" "}
                          {association.trajectory.entities.find(
                            (entity) => entity.id === reason.decisiveEvidenceId,
                          )?.content}
                        </p>
                        <p>
                          {reason.decisionId}:{" "}
                          {association.trajectory.entities.find(
                            (entity) => entity.id === reason.decisionId,
                          )?.content}
                        </p>
                      </section>
                    )}

                    {reason === null && (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            setDecisionTrajectoryKey(trajectoryKey);
                            setDecisionDraft({
                              objective: "",
                              condition1: "",
                              condition2: "",
                              decisiveCondition: "",
                              discardedAlternative: "",
                              discardedFailedCondition: "",
                              selectedAlternative: "",
                              decisiveEvidence: "",
                              decision: "",
                            });
                          }}
                        >
                          Registrar decisión para {association.resultId}
                        </button>

                        {decisionTrajectoryKey === trajectoryKey && (
                          <section
                            aria-label={`Decisión para ${association.resultId}`}
                          >
                            <label>
                              Objetivo de decisión
                              <textarea
                                value={decisionDraft.objective}
                                onChange={(event) =>
                                  setDecisionDraft((draft) => ({
                                    ...draft,
                                    objective: event.target.value,
                                  }))
                                }
                              />
                            </label>
                            <label>
                              Condición obligatoria 1
                              <textarea
                                value={decisionDraft.condition1}
                                onChange={(event) =>
                                  setDecisionDraft((draft) => ({
                                    ...draft,
                                    condition1: event.target.value,
                                  }))
                                }
                              />
                            </label>
                            <label>
                              Condición obligatoria 2
                              <textarea
                                value={decisionDraft.condition2}
                                onChange={(event) =>
                                  setDecisionDraft((draft) => ({
                                    ...draft,
                                    condition2: event.target.value,
                                  }))
                                }
                              />
                            </label>
                            <label>
                              Condición decisiva
                              <textarea
                                value={decisionDraft.decisiveCondition}
                                onChange={(event) =>
                                  setDecisionDraft((draft) => ({
                                    ...draft,
                                    decisiveCondition: event.target.value,
                                  }))
                                }
                              />
                            </label>
                            <label>
                              Alternativa descartada
                              <textarea
                                value={decisionDraft.discardedAlternative}
                                onChange={(event) =>
                                  setDecisionDraft((draft) => ({
                                    ...draft,
                                    discardedAlternative: event.target.value,
                                  }))
                                }
                              />
                            </label>
                            <label>
                              Condición incumplida por la alternativa descartada
                              <textarea
                                value={decisionDraft.discardedFailedCondition}
                                onChange={(event) =>
                                  setDecisionDraft((draft) => ({
                                    ...draft,
                                    discardedFailedCondition:
                                      event.target.value,
                                  }))
                                }
                              />
                            </label>
                            <label>
                              Alternativa seleccionada
                              <textarea
                                value={decisionDraft.selectedAlternative}
                                onChange={(event) =>
                                  setDecisionDraft((draft) => ({
                                    ...draft,
                                    selectedAlternative: event.target.value,
                                  }))
                                }
                              />
                            </label>
                            <label>
                              Evidencia decisiva
                              <textarea
                                value={decisionDraft.decisiveEvidence}
                                onChange={(event) =>
                                  setDecisionDraft((draft) => ({
                                    ...draft,
                                    decisiveEvidence: event.target.value,
                                  }))
                                }
                              />
                            </label>
                            <label>
                              Decisión
                              <textarea
                                value={decisionDraft.decision}
                                onChange={(event) =>
                                  setDecisionDraft((draft) => ({
                                    ...draft,
                                    decision: event.target.value,
                                  }))
                                }
                              />
                            </label>

                            <button
                              type="button"
                              onClick={() => {
                                const values = Object.values(decisionDraft).map(
                                  (value) => value.trim(),
                                );
                                if (values.some((value) => value.length === 0)) {
                                  return;
                                }

                                const prefix = association.resultId;
                                const conditionIds = [
                                  `K1-${prefix}`,
                                  `K2-${prefix}`,
                                  `K3-${prefix}`,
                                ] as const;
                                const failedConditionIndex = [
                                  decisionDraft.condition1.trim(),
                                  decisionDraft.condition2.trim(),
                                  decisionDraft.decisiveCondition.trim(),
                                ].findIndex(
                                  (condition) =>
                                    condition ===
                                    decisionDraft.discardedFailedCondition.trim(),
                                );

                                if (failedConditionIndex === -1) {
                                  return;
                                }

                                const failedConditionId =
                                  conditionIds[failedConditionIndex];

                                if (failedConditionId === undefined) {
                                  return;
                                }

                                const trajectoryWithReason = attachDecisionReason(
                                  association.trajectory,
                                  {
                                    objective: {
                                      id: `O-${prefix}`,
                                      kind: "objective",
                                      content: decisionDraft.objective.trim(),
                                    },
                                    mandatoryConditions: [
                                      {
                                        id: conditionIds[0],
                                        kind: "condition",
                                        content:
                                          decisionDraft.condition1.trim(),
                                      },
                                      {
                                        id: conditionIds[1],
                                        kind: "condition",
                                        content:
                                          decisionDraft.condition2.trim(),
                                      },
                                      {
                                        id: conditionIds[2],
                                        kind: "condition",
                                        content:
                                          decisionDraft.decisiveCondition.trim(),
                                      },
                                    ],
                                    discardedAlternatives: [
                                      {
                                        alternative: {
                                          id: `M1-${prefix}`,
                                          kind: "alternative",
                                          content:
                                            decisionDraft.discardedAlternative.trim(),
                                        },
                                        failedConditionId,
                                      },
                                    ],
                                    selectedAlternative: {
                                      id: `M2-${prefix}`,
                                      kind: "alternative",
                                      content:
                                        decisionDraft.selectedAlternative.trim(),
                                    },
                                    establishedConditionIds: [
                                      conditionIds[0],
                                      conditionIds[1],
                                    ],
                                    decisiveConditionId: conditionIds[2],
                                    decisiveEvidence: {
                                      id: `E-${prefix}`,
                                      kind: "evidence",
                                      content:
                                        decisionDraft.decisiveEvidence.trim(),
                                    },
                                    decision: {
                                      id: `D-${prefix}`,
                                      kind: "decision",
                                      content: decisionDraft.decision.trim(),
                                    },
                                    resultId: association.resultId,
                                  },
                                );

                                saveAssociatedTrajectory({
                                  ...association,
                                  trajectory: trajectoryWithReason,
                                });
                                setDecisionTrajectoryKey(null);
                              }}
                            >
                              Constituir fundamento de {association.resultId}
                            </button>
                          </section>
                        )}
                      </>
                    )}

                    {association.continuation !== undefined && (
                      <>
                        <section
                          aria-label={`Continuidad desde ${association.continuation.antecedentResultId}`}
                        >
                          <h4>
                            Continuidad desde{" "}
                            {association.continuation.antecedentResultId}
                          </h4>
                          <p>{association.continuation.antecedentResultId}</p>
                          <p>{association.continuation.contribution}</p>
                          <p>
                            {association.continuation.participantType === "human"
                              ? "humano"
                              : association.continuation.participantType === "ai"
                                ? "IA"
                                : "otro"}
                          </p>
                        </section>

                        <section
                          aria-label={`Fundamento de ${association.resultId}`}
                        >
                          <h4>Fundamento de {association.resultId}</h4>
                          <p>{association.continuation.contribution}</p>
                        </section>
                      </>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        const resultEntity =
                          association.trajectory.entities.find(
                            (entity) =>
                              entity.id === association.resultId &&
                              entity.kind === "result",
                          );
                        const firstHumanContribution =
                          traceResultParticipantProvenance(
                            association.trajectory,
                            association.resultId,
                          ).find(
                            (contribution) =>
                              contribution.participantType === "human",
                          );
                        const firstAction =
                          firstHumanContribution === undefined
                            ? undefined
                            : association.trajectory.entities.find(
                                (entity) =>
                                  entity.id === firstHumanContribution.actionId &&
                                  entity.kind === "action",
                              );

                        if (
                          resultEntity === undefined ||
                          firstAction === undefined
                        ) {
                          return;
                        }

                        setHandoffTrajectoryKey(trajectoryKey);
                        setHandoffTransferValue(
                          JSON.stringify({
                            sharedResult: resultEntity.content,
                            firstContribution: {
                              participant: "A",
                              content: firstAction.content,
                            },
                            antecedentResultId: association.resultId,
                            antecedentMaterialId: association.materialId,
                          }),
                        );
                      }}
                    >
                      Preparar relevo de {association.resultId}
                    </button>

                    {handoffTrajectoryKey === trajectoryKey && (
                      <label>
                        Relevo entregable de {association.resultId}
                        <textarea
                          readOnly
                          value={handoffTransferValue}
                        />
                      </label>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        setContinuedKnowledgeTrajectoryKey(trajectoryKey);
                        setKnowledgeContinuationDraft("");
                      }}
                    >
                      Continuar desde {association.resultId}
                    </button>

                    {continuedKnowledgeTrajectoryKey === trajectoryKey && (
                      <section
                        aria-label={`Continuación desde ${association.resultId}`}
                      >
                        <label>
                          Nueva aportación
                          <textarea
                            value={knowledgeContinuationDraft}
                            onChange={(event) =>
                              setKnowledgeContinuationDraft(event.target.value)
                            }
                          />
                        </label>

                        <button
                          type="button"
                          disabled={knowledgeContinuationDraft.trim().length === 0}
                          onClick={() => {
                            const contribution = knowledgeContinuationDraft.trim();
                            if (contribution.length === 0) {
                              return;
                            }

                            const nextMaterialId = `m${ordinaryMaterials.length + 1}`;
                            const nextResultId = `R${knowledgeTrajectoryAssociations.length + 1}`;
                            const nextMaterial: OrdinaryMaterial = {
                              id: nextMaterialId,
                              content: contribution,
                              antecedentMaterialId: association.materialId,
                            };
                            const nextMaterials = [
                              ...ordinaryMaterials,
                              nextMaterial,
                            ];

                            const baseTrajectory = createKnowledgeTrajectory({
                              source: {
                                id: `F-${nextResultId}`,
                                kind: "source",
                                content: contribution,
                              },
                              assertion: {
                                id: `A-${nextResultId}`,
                                kind: "assertion",
                                content: contribution,
                              },
                              transformation: {
                                id: `T-${nextResultId}`,
                                kind: "transformation",
                                content: `Continuación de ${association.resultId}`,
                              },
                              participant: {
                                id: `PH-${nextResultId}`,
                                kind: "participant",
                                content: OPERATIONAL_IDENTITY,
                              },
                              action: {
                                id: `AC-${nextResultId}`,
                                kind: "action",
                                content: "Nueva aportación",
                              },
                              result: {
                                id: nextResultId,
                                kind: "result",
                                content: contribution,
                              },
                            });

                            const nextTrajectory = attachParticipantProvenance(
                              baseTrajectory,
                              {
                                resultId: nextResultId,
                                contributions: [
                                  {
                                    participant: {
                                      id: `PH-${nextResultId}`,
                                      kind: "participant",
                                      content: OPERATIONAL_IDENTITY,
                                    },
                                    participantType: "human",
                                    action: {
                                      id: `AC-${nextResultId}`,
                                      kind: "action",
                                      content: "Nueva aportación",
                                    },
                                    transformationId: `T-${nextResultId}`,
                                    contributionState: "produced",
                                  },
                                ],
                              },
                            );

                            localStorageResumeRepository.savePrevious(contribution);
                            localStorage.setItem(
                              CURRENT_WORK_ID_STORAGE_KEY,
                              nextMaterialId,
                            );
                            localStorage.setItem(
                              "ordinary.materials",
                              JSON.stringify(nextMaterials),
                            );
                            setOrdinaryMaterials(nextMaterials);
                            setCurrentWorkId(nextMaterialId);
                            setAvailablePostV1Current(contribution);

                            saveAssociatedTrajectory({
                              materialId: nextMaterialId,
                              resultId: nextResultId,
                              trajectory: nextTrajectory,
                              continuation: {
                                antecedentResultId: association.resultId,
                                contribution,
                                participantType: "human",
                              },
                            });

                            setKnowledgeContinuationDraft("");
                            setContinuedKnowledgeTrajectoryKey(null);
                            setOpenedKnowledgeTrajectoryKey(null);
                            setOpenedKnowledgeTrajectoryForwardStart(null);
                          }}
                        >
                          Constituir resultado posterior
                        </button>
                      </section>
                    )}
                  </section>
                )}
              </article>
            );
          })}
        </section>
      )}

      {ordinaryMaterials.length >= 2 && (
        <section aria-label="Comparación de documentos">
          <h2>Comparación de documentos</h2>

          <label>
            Documento A
            <select
              value={comparisonFirstMaterialId}
              onChange={(event) => {
                setComparisonFirstMaterialId(event.target.value);
                setComparisonOpen(false);
              }}
            >
              <option value="">Selecciona un material</option>
              {ordinaryMaterials.map((material) => (
                <option key={material.id} value={material.id}>
                  {material.content}
                </option>
              ))}
            </select>
          </label>

          <label>
            Documento B
            <select
              value={comparisonSecondMaterialId}
              onChange={(event) => {
                setComparisonSecondMaterialId(event.target.value);
                setComparisonOpen(false);
              }}
            >
              <option value="">Selecciona un material</option>
              {ordinaryMaterials.map((material) => (
                <option key={material.id} value={material.id}>
                  {material.content}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            disabled={
              comparisonFirstMaterialId === "" ||
              comparisonSecondMaterialId === "" ||
              comparisonFirstMaterialId === comparisonSecondMaterialId
            }
            onClick={() => setComparisonOpen(true)}
          >
            Comparar
          </button>

          {comparisonOpen && (
            <section aria-label="Comparación activa">
              {currentWork !== undefined && <p>{currentWork.content}</p>}
              <OrdinaryComparison
                first={
                  ordinaryMaterials.find(
                    (material) => material.id === comparisonFirstMaterialId,
                  )?.content ?? ""
                }
                second={
                  ordinaryMaterials.find(
                    (material) => material.id === comparisonSecondMaterialId,
                  )?.content ?? ""
                }
              />

              <button type="button" onClick={() => setComparisonOpen(false)}>
                Salir de comparación
              </button>
            </section>
          )}
        </section>
      )}

      <section aria-label="Trabajo actual">
        <h2>Trabajo actual</h2>
        <p>Las aportaciones mostradas aquí forman parte del mismo trabajo.</p>

        <ResumeExperience
          key={resumeExperienceKey}
          {...(resolution !== undefined ? { resolution } : {})}
          {...(secondResolution !== undefined ? { secondResolution } : {})}
          {...(thirdResolution !== undefined ? { thirdResolution } : {})}
          onInitialResult={establishCurrentWork}
          onResult={(result) => establishCurrentWork(result.current)}
        />

        {availablePostV1Current !== null && (
          <>
            <p>Aportación actual del mismo trabajo</p>
            <button
              type="button"
              onClick={() => setResumeExperienceKey((key) => key + 1)}
            >
              Seguir trabajando
            </button>

            <button
              type="button"
              onClick={() => {
                if (hasPersistedPostV1) {
                  localStorage.removeItem("post-v1-integrated.state");
                }
                setIntegrationChoice("current");
              }}
            >
              Abrir opciones para conservar, publicar o compartir este trabajo
            </button>
          </>
        )}
      </section>

      <section aria-labelledby="shared-antecedent-heading">
        <h2 id="shared-antecedent-heading">
          Continuar un trabajo recibido de otra persona
        </h2>
        <p>
          Usa esta opción sólo si otra persona te ha enviado un antecedente
          para continuar.
        </p>

        <label>
          Antecedente recibido de otra persona
          <textarea
            value={receivedAntecedentInput}
            onChange={(event) => setReceivedAntecedentInput(event.target.value)}
          />
        </label>

        <button
          type="button"
          disabled={receivedAntecedentInput.trim().length === 0}
          onClick={() => {
            try {
              const parsed = JSON.parse(receivedAntecedentInput) as {
                sharedResult?: unknown;
                firstContribution?: {
                  participant?: unknown;
                  content?: unknown;
                };
                antecedentResultId?: unknown;
                antecedentMaterialId?: unknown;
              };

              if (
                typeof parsed.sharedResult !== "string" ||
                parsed.sharedResult.trim().length === 0 ||
                parsed.firstContribution?.participant !== "A" ||
                typeof parsed.firstContribution.content !== "string" ||
                parsed.firstContribution.content.trim().length === 0
              ) {
                return;
              }

              setReceivedCollaborativeAntecedent({
                sharedResult: parsed.sharedResult,
                firstContribution: {
                  participant: "A",
                  content: parsed.firstContribution.content,
                },
                ...(typeof parsed.antecedentResultId === "string" &&
                parsed.antecedentResultId.trim().length > 0
                  ? { antecedentResultId: parsed.antecedentResultId }
                  : {}),
                ...(typeof parsed.antecedentMaterialId === "string" &&
                parsed.antecedentMaterialId.trim().length > 0
                  ? { antecedentMaterialId: parsed.antecedentMaterialId }
                  : {}),
              });
            } catch {
              return;
            }
          }}
        >
          Recibir antecedente para continuar
        </button>

        {receivedCollaborativeAntecedent !== null && (
          <div aria-label="Contexto compartido recibido">
            <p aria-label="Resultado compartido">
              {receivedCollaborativeAntecedent.sharedResult}
            </p>
            <p aria-label="Aportación de A">
              {receivedCollaborativeAntecedent.firstContribution.content}
            </p>

            <h3>Qué puedes hacer ahora</h3>
            <p>
              Continúa el trabajo a partir del resultado compartido y la
              aportación de A.
            </p>

            <label>
              Aportación actual de B
              <textarea
                value={participantBContribution}
                onChange={(event) =>
                  setParticipantBContribution(event.target.value)
                }
              />
            </label>

            <button
              type="button"
              disabled={participantBContribution.trim().length === 0}
              onClick={() => {
                const contribution = participantBContribution.trim();
                if (contribution.length === 0) {
                  return;
                }

                setConstitutedParticipantBContribution(contribution);

                if (
                  receivedCollaborativeAntecedent.antecedentResultId ===
                    undefined ||
                  receivedCollaborativeAntecedent.antecedentMaterialId ===
                    undefined
                ) {
                  return;
                }

                const nextMaterialId = `m${ordinaryMaterials.length + 1}`;
                const nextResultId = `R${knowledgeTrajectoryAssociations.length + 1}`;
                const sourceContent =
                  `${receivedCollaborativeAntecedent.sharedResult}\n` +
                  receivedCollaborativeAntecedent.firstContribution.content;

                const baseTrajectory = createKnowledgeTrajectory({
                  source: {
                    id: `F-${nextResultId}`,
                    kind: "source",
                    content: sourceContent,
                  },
                  assertion: {
                    id: `A-${nextResultId}`,
                    kind: "assertion",
                    content: contribution,
                  },
                  transformation: {
                    id: `T-${nextResultId}`,
                    kind: "transformation",
                    content: contribution,
                  },
                  participant: {
                    id: `P2-${nextResultId}`,
                    kind: "participant",
                    content: "P2",
                  },
                  action: {
                    id: `AC-P2-${nextResultId}`,
                    kind: "action",
                    content: "Continuar trabajo compartido",
                  },
                  result: {
                    id: nextResultId,
                    kind: "result",
                    content: contribution,
                  },
                });

                const nextTrajectory = attachParticipantProvenance(
                  baseTrajectory,
                  {
                    resultId: nextResultId,
                    contributions: [
                      {
                        participant: {
                          id: `P2-${nextResultId}`,
                          kind: "participant",
                          content: "P2",
                        },
                        participantType: "human",
                        action: {
                          id: `AC-P2-${nextResultId}`,
                          kind: "action",
                          content: "Continuar trabajo compartido",
                        },
                        transformationId: `T-${nextResultId}`,
                        contributionState: "produced",
                      },
                    ],
                  },
                );

                const nextMaterial: OrdinaryMaterial = {
                  id: nextMaterialId,
                  content: contribution,
                  antecedentMaterialId:
                    receivedCollaborativeAntecedent.antecedentMaterialId,
                };
                const nextMaterials = [...ordinaryMaterials, nextMaterial];

                saveAssociatedTrajectory({
                  materialId: nextMaterialId,
                  resultId: nextResultId,
                  trajectory: nextTrajectory,
                  continuation: {
                    antecedentResultId:
                      receivedCollaborativeAntecedent.antecedentResultId,
                    contribution,
                    participantType: "human",
                  },
                });

                localStorage.setItem(
                  "ordinary.materials",
                  JSON.stringify(nextMaterials),
                );
                localStorage.setItem(
                  CURRENT_WORK_ID_STORAGE_KEY,
                  nextMaterialId,
                );
                setOrdinaryMaterials(nextMaterials);
                setCurrentWorkId(nextMaterialId);
              }}
            >
              Continuar trabajo compartido
            </button>

            {constitutedParticipantBContribution !== null && (
              <p aria-label="Continuación de B">
                {constitutedParticipantBContribution}
              </p>
            )}
          </div>
        )}
      </section>

      {ordinaryMaterials.length >= 2 && (
        <section aria-labelledby="ordinary-localization-heading">
          <h2 id="ordinary-localization-heading">Materiales anteriores</h2>

          <label>
            Qué necesitas considerar ahora
            <textarea
              value={localizationNeed}
              onChange={(event) => {
                setLocalizationNeed(event.target.value);
                setInspectionOpen(false);
                setSelectedMaterialId(null);
                setNewWork("");
                setConstitutedWork(null);
              }}
            />
          </label>

          <button
            type="button"
            disabled={localizationNeed.trim().length === 0}
            onClick={() => setInspectionOpen(true)}
          >
            Examinar materiales anteriores
          </button>

          {inspectionOpen && (
            <div aria-label="Materiales anteriores">
              {ordinaryMaterials.map((material, index) => {
                const antecedent =
                  material.antecedentMaterialId === undefined
                    ? undefined
                    : ordinaryMaterials.find(
                        (candidate) =>
                          candidate.id === material.antecedentMaterialId,
                      );

                return (
                <article key={material.id}>
                  <p aria-label={`Contenido de material ${index + 1}`}>
                    {material.content}
                  </p>
                  {antecedent !== undefined && (
                    <p aria-label={`Antecedente de material ${index + 1}`}>
                      Antecedente utilizado: {antecedent.content}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedMaterialId(material.id);
                      setNewWork("");
                      setConstitutedWork(null);
                    }}
                  >
                    Usar este material {index + 1}
                  </button>
                </article>
                );
              })}
            </div>
          )}

          {selectedMaterialId !== null && (
            <section aria-labelledby="ordinary-selected-material-heading">
              <h3 id="ordinary-selected-material-heading">
                Material seleccionado
              </h3>

              <p aria-label="Contenido seleccionado">
                {
                  ordinaryMaterials.find(
                    (material) => material.id === selectedMaterialId,
                  )?.content
                }
              </p>

              <label>
                Nuevo trabajo
                <textarea
                  value={newWork}
                  onChange={(event) => setNewWork(event.target.value)}
                />
              </label>

              <button
                type="button"
                disabled={newWork.trim().length === 0}
                onClick={() => {
                  localStorageResumeRepository.savePrevious(newWork);

                  const nextMaterial: OrdinaryMaterial = {
                    id: `m${ordinaryMaterials.length + 1}`,
                    content: newWork,
                    antecedentMaterialId: selectedMaterialId,
                  };
                  const nextMaterials = [...ordinaryMaterials, nextMaterial];
                  const antecedentMaterial = ordinaryMaterials.find(
                    (material) => material.id === selectedMaterialId,
                  );

                  if (antecedentMaterial !== undefined) {
                    const resultId = `R${ordinaryMaterials.length + 1}`;
                    const baseTrajectory = createKnowledgeTrajectory({
                      source: {
                        id: `F-${nextMaterial.id}`,
                        kind: "source",
                        content: antecedentMaterial.content,
                      },
                      assertion: {
                        id: `A-${nextMaterial.id}`,
                        kind: "assertion",
                        content: newWork,
                      },
                      transformation: {
                        id: `T-${nextMaterial.id}`,
                        kind: "transformation",
                        content: `Continuación ordinaria desde ${antecedentMaterial.id}`,
                      },
                      participant: {
                        id: `PH-${nextMaterial.id}`,
                        kind: "participant",
                        content: OPERATIONAL_IDENTITY,
                      },
                      action: {
                        id: `AC-${nextMaterial.id}`,
                        kind: "action",
                        content: "Continuar con este material",
                      },
                      result: {
                        id: resultId,
                        kind: "result",
                        content: newWork,
                      },
                    });

                    const trajectory = attachParticipantProvenance(
                      baseTrajectory,
                      {
                        resultId,
                        contributions: [
                          {
                            participant: {
                              id: `PH-${nextMaterial.id}`,
                              kind: "participant",
                              content: OPERATIONAL_IDENTITY,
                            },
                            participantType: "human",
                            action: {
                              id: `AC-${nextMaterial.id}`,
                              kind: "action",
                              content: "Continuar con este material",
                            },
                            transformationId: `T-${nextMaterial.id}`,
                            contributionState: "produced",
                          },
                        ],
                      },
                    );

                    saveAssociatedTrajectory({
                      materialId: nextMaterial.id,
                      resultId,
                      trajectory,
                    });
                  }

                  localStorage.setItem(CURRENT_WORK_ID_STORAGE_KEY, nextMaterial.id);
                  setCurrentWorkId(nextMaterial.id);
                  setOrdinaryMaterials(nextMaterials);
                  localStorage.setItem(
                    "ordinary.materials",
                    JSON.stringify(nextMaterials),
                  );

                  setAvailablePostV1Current(newWork);
                  setConstitutedWork(newWork);
                }}
              >
                Continuar con este material
              </button>

              {constitutedWork !== null && (
                <p aria-label="Nuevo trabajo constituido">{constitutedWork}</p>
              )}
            </section>
          )}
        </section>
      )}


      {hasPersistedPostV1 && (
        <button type="button" onClick={() => setIntegrationChoice("existing")}>
          Retomar opciones anteriores de conservación, publicación y colaboración
        </button>
      )}
    </main>
  );
}

export default App;
