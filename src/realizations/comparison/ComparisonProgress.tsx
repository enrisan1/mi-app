type DetectionItem = {
  id: string;
  sourceA: string;
  sourceB: string;
};

type ComparisonProgressProps = {
  detections: DetectionItem[];
  activeDetectionId: string | null;
};

export function ComparisonProgress({
  detections,
  activeDetectionId,
}: ComparisonProgressProps) {
  if (detections.length === 0 || activeDetectionId === null) {
    return null;
  }

  const activeIndex = detections.findIndex(
    (detection) => detection.id === activeDetectionId,
  );

  if (activeIndex < 0) {
    return null;
  }

  return (
    <div
      aria-label="Progreso comparativo"
      data-active-detection-id={activeDetectionId}
    >
      Diferencia {activeIndex + 1} de {detections.length}
    </div>
  );
}
