import type { KnowledgeTrajectory } from "./KnowledgeTrajectory";

export type AssociatedTrajectory = {
  materialId: string;
  resultId: string;
  trajectory: KnowledgeTrajectory;
};

const STORAGE_KEY = "ordinary.knowledge-trajectories";

function loadAssociations(): AssociatedTrajectory[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === null) {
      return [];
    }

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed as AssociatedTrajectory[];
  } catch {
    return [];
  }
}

function saveAssociations(associations: AssociatedTrajectory[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(associations));
}

export function saveAssociatedTrajectory(
  association: AssociatedTrajectory,
): void {
  const associations = loadAssociations();

  const remaining = associations.filter(
    (candidate) =>
      candidate.materialId !== association.materialId ||
      candidate.resultId !== association.resultId,
  );

  saveAssociations([...remaining, association]);
}

export function listAssociatedTrajectories(): AssociatedTrajectory[] {
  return loadAssociations();
}

export function loadAssociatedTrajectory(
  materialId: string,
  resultId: string,
): KnowledgeTrajectory | null {
  const association = loadAssociations().find(
    (candidate) =>
      candidate.materialId === materialId &&
      candidate.resultId === resultId,
  );

  return association?.trajectory ?? null;
}
