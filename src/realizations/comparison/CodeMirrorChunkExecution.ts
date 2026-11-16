import type { CoordinatedChunk } from "./CodeMirrorMergeWitness";

type DocLike = {
  length: number;
  toString(): string;
};

type StateLike = {
  doc: DocLike;
  sliceDoc(from?: number, to?: number): string;
};

type DispatchChange = {
  changes: {
    from: number;
    to: number;
    insert: string;
  };
  userEvent: string;
};

type ExecutionEditor = {
  state: StateLike;
  dispatch(spec: DispatchChange): void;
};

export type ExecutableMerge = {
  a: ExecutionEditor;
  b: ExecutionEditor;
  chunks: readonly CoordinatedChunk[];
};

export type ExecutionSnapshot = {
  previousB: string;
};

export type ExecutionSnapshotA = {
  previousA: string;
};

export function applyChunkAToB(
  merge: ExecutableMerge,
  index: number,
): ExecutionSnapshot | null {
  const chunk = merge.chunks[index];

  if (!chunk) {
    return null;
  }

  const previousB = merge.b.state.doc.toString();

  let insert = merge.a.state.sliceDoc(
    chunk.fromA,
    Math.max(chunk.fromA, chunk.toA - 1),
  );

  if (chunk.fromA !== chunk.toA && chunk.toB <= merge.b.state.doc.length) {
    insert += "\n";
  }

  merge.b.dispatch({
    changes: {
      from: chunk.fromB,
      to: Math.min(merge.b.state.doc.length, chunk.toB),
      insert,
    },
    userEvent: "input.codeMirrorWitness.applyChunk",
  });

  return { previousB };
}

export function restoreB(
  merge: ExecutableMerge,
  snapshot: ExecutionSnapshot | null,
): boolean {
  if (!snapshot) {
    return false;
  }

  merge.b.dispatch({
    changes: {
      from: 0,
      to: merge.b.state.doc.length,
      insert: snapshot.previousB,
    },
    userEvent: "input.codeMirrorWitness.undoChunk",
  });

  return true;
}


export function applyChunkBToA(
  merge: ExecutableMerge,
  index: number,
): ExecutionSnapshotA | null {
  const chunk = merge.chunks[index];

  if (!chunk) {
    return null;
  }

  const previousA = merge.a.state.doc.toString();

  let insert = merge.b.state.sliceDoc(
    chunk.fromB,
    Math.max(chunk.fromB, chunk.toB - 1),
  );

  if (chunk.fromB !== chunk.toB && chunk.toA <= merge.a.state.doc.length) {
    insert += "\n";
  }

  merge.a.dispatch({
    changes: {
      from: chunk.fromA,
      to: Math.min(merge.a.state.doc.length, chunk.toA),
      insert,
    },
    userEvent: "input.codeMirrorWitness.applyChunkBToA",
  });

  return { previousA };
}

export function restoreA(
  merge: ExecutableMerge,
  snapshot: ExecutionSnapshotA | null,
): boolean {
  if (!snapshot) {
    return false;
  }

  merge.a.dispatch({
    changes: {
      from: 0,
      to: merge.a.state.doc.length,
      insert: snapshot.previousA,
    },
    userEvent: "input.codeMirrorWitness.undoChunkBToA",
  });

  return true;
}
