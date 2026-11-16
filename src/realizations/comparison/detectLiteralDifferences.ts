export type LiteralDetection = {
  id: string;
  sourceA: string;
  sourceB: string;
};

function tokenize(text: string) {
  return text.split(/(\s+)/).filter(Boolean);
}

function longestCommonSubsequence(a: string[], b: string[]) {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const dp = Array.from({ length: rows }, () => Array<number>(cols).fill(0));

  for (let i = a.length - 1; i >= 0; i -= 1) {
    for (let j = b.length - 1; j >= 0; j -= 1) {
      dp[i][j] =
        a[i] === b[j]
          ? dp[i + 1][j + 1] + 1
          : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const pairs: Array<[number, number]> = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      pairs.push([i, j]);
      i += 1;
      j += 1;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return pairs;
}

export function detectLiteralDifferences(
  first: string,
  second: string,
): LiteralDetection[] {
  if (first === second) {
    return [];
  }

  const a = tokenize(first);
  const b = tokenize(second);
  const matches = longestCommonSubsequence(a, b);

  const detections: LiteralDetection[] = [];
  let aStart = 0;
  let bStart = 0;
  let index = 1;

  const pushDifference = (aEnd: number, bEnd: number) => {
    const sourceA = a.slice(aStart, aEnd).join("");
    const sourceB = b.slice(bStart, bEnd).join("");

    if (sourceA !== "" || sourceB !== "") {
      detections.push({
        id: `literal-${index}`,
        sourceA,
        sourceB,
      });
      index += 1;
    }
  };

  for (const [aIndex, bIndex] of matches) {
    pushDifference(aIndex, bIndex);
    aStart = aIndex + 1;
    bStart = bIndex + 1;
  }

  pushDifference(a.length, b.length);

  return detections;
}
