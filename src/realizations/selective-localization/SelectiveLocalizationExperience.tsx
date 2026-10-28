import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type StoredMaterial = {
  id: string;
  content: string;
};

const STORAGE_KEY = "selective-localization.materials";
const REQUIRED_MATERIALS = 3;

function hasContent(value: string): boolean {
  return value.trim().length > 0;
}

export function SelectiveLocalizationExperience() {
  const [materials, setMaterials] = useLocalStorage<StoredMaterial[]>(
    STORAGE_KEY,
    [],
  );

  const [startedWithConstitutedPlurality] = useState(
    () => materials.length >= REQUIRED_MATERIALS,
  );

  const [currentMaterialInput, setCurrentMaterialInput] = useState("");
  const [needInput, setNeedInput] = useState("");
  const [inspectionOpen, setInspectionOpen] = useState(false);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string | null>(
    null,
  );
  const [reuseInput, setReuseInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  if (!startedWithConstitutedPlurality) {
    const pluralityConstituted = materials.length >= REQUIRED_MATERIALS;

    return (
      <section>
        <h1>Constituir materiales anteriores</h1>

        <p>
          Materiales conservados: {Math.min(materials.length, REQUIRED_MATERIALS)} de{" "}
          {REQUIRED_MATERIALS}.
        </p>

        {pluralityConstituted ? (
          <p role="status">
            La pluralidad ha quedado constituida y conservada para una actividad
            posterior.
          </p>
        ) : (
          <>
            <label>
              Material actual
              <textarea
                value={currentMaterialInput}
                onChange={(event) => setCurrentMaterialInput(event.target.value)}
              />
            </label>

            <button
              type="button"
              disabled={!hasContent(currentMaterialInput)}
              onClick={() => {
                const nextMaterial: StoredMaterial = {
                  id: `m${materials.length + 1}`,
                  content: currentMaterialInput,
                };

                setMaterials((currentMaterials) => [
                  ...currentMaterials,
                  nextMaterial,
                ]);
                setCurrentMaterialInput("");
              }}
            >
              Conservar material
            </button>
          </>
        )}
      </section>
    );
  }

  const selectedMaterial =
    selectedMaterialId === null
      ? undefined
      : materials.find((material) => material.id === selectedMaterialId);

  return (
    <section>
      <h1>Actividad posterior</h1>

      <p>
        Hay {materials.length} materiales anteriores conservados.
      </p>

      <label>
        Qué necesitas considerar ahora
        <textarea
          value={needInput}
          onChange={(event) => {
            setNeedInput(event.target.value);
            setInspectionOpen(false);
            setSelectedMaterialId(null);
            setReuseInput("");
            setResult(null);
          }}
        />
      </label>

      <button
        type="button"
        disabled={!hasContent(needInput)}
        onClick={() => setInspectionOpen(true)}
      >
        Examinar materiales anteriores
      </button>

      {inspectionOpen && (
        <div aria-label="Materiales anteriores">
          {materials.map((material, index) => (
            <article key={material.id}>
              <p aria-label={`Contenido de material ${index + 1}`}>
                {material.content}
              </p>

              <button
                type="button"
                onClick={() => {
                  setSelectedMaterialId(material.id);
                  setReuseInput("");
                  setResult(null);
                }}
              >
                Usar este material {index + 1}
              </button>
            </article>
          ))}
        </div>
      )}

      {selectedMaterial && (
        <section aria-labelledby="selected-material-heading">
          <h2 id="selected-material-heading">Material seleccionado</h2>

          <p aria-label="Contenido seleccionado">{selectedMaterial.content}</p>

          <label>
            Nuevo trabajo
            <textarea
              value={reuseInput}
              onChange={(event) => {
                setReuseInput(event.target.value);
                setResult(null);
              }}
            />
          </label>

          <button
            type="button"
            disabled={!hasContent(reuseInput)}
            onClick={() => setResult(reuseInput)}
          >
            Continuar con este material
          </button>
        </section>
      )}

      {result !== null && (
        <p aria-label="Nuevo trabajo constituido">{result}</p>
      )}
    </section>
  );
}
