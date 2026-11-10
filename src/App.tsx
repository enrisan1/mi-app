import { useState } from "react";
import {
  ResumeExperience,
  type EstablishedResolution,
} from "./realizations/ru2m1/ResumeExperience";
import { PostV1IntegratedExperience } from "./realizations/post-v1-integrated/PostV1IntegratedExperience";
import { localStorageResumeRepository } from "./realizations/ru2m1/localStorageResumeRepository";

type OrdinaryMaterial = {
  id: string;
  content: string;
};

type IntegrationChoice = null | "existing" | "current";

type AppProps = {
  resolution?: EstablishedResolution;
  secondResolution?: EstablishedResolution;
  thirdResolution?: EstablishedResolution;
};

function App({ resolution, secondResolution, thirdResolution }: AppProps) {
  const [assistanceRequested, setAssistanceRequested] = useState(false);
  const [ordinaryMaterials, setOrdinaryMaterials] = useState<
    OrdinaryMaterial[]
  >(() => {
    const stored = localStorage.getItem("ordinary.materials");

    return stored === null ? [] : (JSON.parse(stored) as OrdinaryMaterial[]);
  });
  const [availablePostV1Current, setAvailablePostV1Current] = useState<
    string | null
  >(() => localStorageResumeRepository.loadPrevious());
  const [integrationChoice, setIntegrationChoice] =
    useState<IntegrationChoice>(null);
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

  if (integrationChoice === "existing") {
    return <PostV1IntegratedExperience />;
  }

  if (integrationChoice === "current" && availablePostV1Current !== null) {
    return (
      <PostV1IntegratedExperience initialCurrent={availablePostV1Current} />
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

      <ResumeExperience
        {...(resolution !== undefined ? { resolution } : {})}
        {...(secondResolution !== undefined ? { secondResolution } : {})}
        {...(thirdResolution !== undefined ? { thirdResolution } : {})}
        onResult={(result) => {
          setAvailablePostV1Current(result.current);

          const nextMaterials = [
            ...ordinaryMaterials,
            {
              id: `m${ordinaryMaterials.length + 1}`,
              content: result.current,
            },
          ];

          setOrdinaryMaterials(nextMaterials);
          localStorage.setItem(
            "ordinary.materials",
            JSON.stringify(nextMaterials),
          );
        }}
      />

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
              {ordinaryMaterials.map((material, index) => (
                <article key={material.id}>
                  <p aria-label={`Contenido de material ${index + 1}`}>
                    {material.content}
                  </p>

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
              ))}
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

                  const nextMaterials = [
                    ...ordinaryMaterials,
                    {
                      id: `m${ordinaryMaterials.length + 1}`,
                      content: newWork,
                    },
                  ];

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

      {availablePostV1Current !== null && (
        <button
          type="button"
          onClick={() => {
            if (hasPersistedPostV1) {
              localStorage.removeItem("post-v1-integrated.state");
            }
            setIntegrationChoice("current");
          }}
        >
          {hasPersistedPostV1
            ? "Continuar con este trabajo sustituyendo la trayectoria integrada anterior"
            : "Continuar con este trabajo"}
        </button>
      )}

      {hasPersistedPostV1 && (
        <button type="button" onClick={() => setIntegrationChoice("existing")}>
          Retomar trayectoria integrada existente
        </button>
      )}
    </main>
  );
}

export default App;
