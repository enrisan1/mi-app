#!/usr/bin/env python3
"""R-EXP-RCA-01: recuperación previa para comparación de aportaciones.

Prototipo experimental. Recupera antecedentes; NO decide duplicación, novedad ni verdad.

Dependencias: numpy, scikit-learn
"""
from __future__ import annotations

import argparse
import re
import unicodedata
from collections import defaultdict
from pathlib import Path

import numpy as np
from sklearn.decomposition import TruncatedSVD
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import normalize


def norm_text(s: str) -> str:
    s = unicodedata.normalize("NFKC", s).lower()
    return re.sub(r"\s+", " ", s).strip()


def parse_paragraphs(lines: list[str]) -> list[dict]:
    out: list[dict] = []
    start = None
    buf: list[str] = []
    for i, line in enumerate(lines, 1):
        if line.strip():
            if start is None:
                start = i
            buf.append(line.strip())
        elif buf:
            out.append({"start": start, "end": i - 1, "text": " ".join(buf)})
            start, buf = None, []
    if buf:
        out.append({"start": start, "end": len(lines), "text": " ".join(buf)})
    return out


def split_units(text: str) -> list[str]:
    # No intenta descubrir "ideas": sólo trocea por puntuación fuerte.
    parts = re.split(r"(?<=[.!?])\s+|;\s+|:\s+", text)
    parts = [p.strip() for p in parts if len(p.split()) >= 5]
    return parts or [text]


class Retriever:
    def __init__(self, corpus_paragraphs: list[dict]):
        # El corpus observado contiene muchas copias literales. Se indexa una vez cada
        # texto exacto normalizado, pero se conservan TODAS sus ubicaciones.
        groups: dict[str, list[dict]] = defaultdict(list)
        for p in corpus_paragraphs:
            groups[norm_text(p["text"])].append(p)

        self.docs: list[dict] = []
        for _, ps in groups.items():
            self.docs.append({
                "text": ps[0]["text"],
                "locations": [(p["start"], p["end"]) for p in ps],
            })
        texts = [d["text"] for d in self.docs]

        self.word = TfidfVectorizer(
            lowercase=True,
            strip_accents="unicode",
            ngram_range=(1, 2),
            sublinear_tf=True,
            token_pattern=r"(?u)\b\w\w+\b",
        )
        self.Xw = self.word.fit_transform(texts)

        self.char = TfidfVectorizer(
            lowercase=True,
            strip_accents="unicode",
            analyzer="char_wb",
            ngram_range=(3, 5),
            min_df=2,
            sublinear_tf=True,
        )
        self.Xc = self.char.fit_transform(texts)

        ncomp = min(100, self.Xw.shape[0] - 1, self.Xw.shape[1] - 1)
        self.svd = TruncatedSVD(n_components=max(2, ncomp), random_state=0)
        self.Xl = normalize(self.svd.fit_transform(self.Xw))

    def rank(self, query: str, top: int = 5) -> list[dict]:
        qw = self.word.transform([query])
        qc = self.char.transform([query])
        ql = normalize(self.svd.transform(qw))

        sw = cosine_similarity(qw, self.Xw).ravel()
        sc = cosine_similarity(qc, self.Xc).ravel()
        sl = cosine_similarity(ql, self.Xl).ravel()

        # Pesos contingentes de esta primera realización experimental.
        score = 0.50 * sw + 0.25 * sc + 0.25 * sl
        order = np.argsort(score)[::-1][:top]
        return [
            {
                "score": float(score[i]),
                "word": float(sw[i]),
                "char": float(sc[i]),
                "lsa": float(sl[i]),
                **self.docs[i],
            }
            for i in order
        ]


def format_locations(locs: list[tuple[int, int]]) -> str:
    parts = []
    for a, b in locs[:6]:
        parts.append(str(a) if a == b else f"{a}-{b}")
    if len(locs) > 6:
        parts.append("…")
    return ", ".join(parts)


def print_results(title: str, query: str, results: list[dict]) -> None:
    print(f"\n## {title}")
    print(f"Consulta: {query}\n")
    for n, r in enumerate(results, 1):
        excerpt = re.sub(r"\s+", " ", r["text"]).strip()
        if len(excerpt) > 360:
            excerpt = excerpt[:357] + "…"
        print(
            f"{n}. score={r['score']:.3f} | líneas {format_locations(r['locations'])}\n"
            f"   {excerpt}"
        )


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--corpus", required=True, help="Archivo Markdown del corpus")
    ap.add_argument("--candidate", required=True, help="Archivo Markdown con aportaciones candidatas")
    ap.add_argument("--line", required=True, type=int, help="Línea candidata (1-indexada)")
    ap.add_argument("--top", type=int, default=5)
    ap.add_argument(
        "--focus",
        action="append",
        default=[],
        help="Consulta focal opcional si un aspecto concreto no aparece entre los resultados",
    )
    args = ap.parse_args()

    corpus_lines = Path(args.corpus).read_text(encoding="utf-8").splitlines()
    cand_lines = Path(args.candidate).read_text(encoding="utf-8").splitlines()
    if not (1 <= args.line <= len(cand_lines)):
        raise SystemExit("Línea candidata fuera de rango")
    candidate = cand_lines[args.line - 1].strip()
    if not candidate:
        raise SystemExit("La línea candidata está vacía")

    retriever = Retriever(parse_paragraphs(corpus_lines))
    print(f"R-EXP-RCA-01 | candidata línea {args.line}")
    print(f"Corpus: {len(parse_paragraphs(corpus_lines))} párrafos; {len(retriever.docs)} textos únicos indexados")
    print_results("Aportación completa", candidate, retriever.rank(candidate, args.top))

    units = split_units(candidate)
    if len(units) > 1:
        for i, unit in enumerate(units, 1):
            print_results(f"Segmento {i}", unit, retriever.rank(unit, min(3, args.top)))

    for i, focus in enumerate(args.focus, 1):
        print_results(f"Foco manual {i}", focus, retriever.rank(focus, args.top))

    print("\nLa salida sólo recupera antecedentes potencialmente pertinentes. La clasificación R/P/N?/C sigue siendo humana.")


if __name__ == "__main__":
    main()
