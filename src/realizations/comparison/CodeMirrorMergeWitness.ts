export type CoordinatedChunk = {
  fromA: number;
  toA: number;
  fromB: number;
  toB: number;
};

type ScrollDispatch = (spec: {
  selection: { anchor: number };
  scrollIntoView: true;
}) => void;

export type CoordinatedMerge = {
  a: { dispatch: ScrollDispatch };
  b: { dispatch: ScrollDispatch };
  chunks: readonly CoordinatedChunk[];
};

export function revealChunkOnBothSides(
  merge: CoordinatedMerge,
  index: number,
): CoordinatedChunk | null {
  const chunk = merge.chunks[index];

  if (!chunk) {
    return null;
  }

  merge.a.dispatch({
    selection: { anchor: chunk.fromA },
    scrollIntoView: true,
  });

  merge.b.dispatch({
    selection: { anchor: chunk.fromB },
    scrollIntoView: true,
  });

  return chunk;
}
