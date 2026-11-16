type DetectionItem = {
  id: string;
  sourceA: string;
  sourceB: string;
};

type AuxiliaryDetectionExperienceProps = {
  first: string;
  second: string;
  detections: DetectionItem[];
};

export function AuxiliaryDetectionExperience({
  first,
  second,
  detections,
}: AuxiliaryDetectionExperienceProps) {
  return (
    <section aria-label="Comparación con apoyo auxiliar">
      <section>
        <h2>Documento 1</h2>
        <div aria-label="Documento 1 fuente">{first}</div>
      </section>

      <section>
        <h2>Documento 2</h2>
        <div aria-label="Documento 2 fuente">{second}</div>
      </section>

      <aside aria-label="Apoyo auxiliar de detecciones">
        <h2>Detecciones auxiliares</h2>

        {detections.map((detection) => (
          <article
            key={detection.id}
            aria-label={`Detección ${detection.id}`}
            tabIndex={0}
          >
            <div aria-label="Fragmento documento 1">{detection.sourceA}</div>
            <div aria-label="Fragmento documento 2">{detection.sourceB}</div>
          </article>
        ))}
      </aside>
    </section>
  );
}
