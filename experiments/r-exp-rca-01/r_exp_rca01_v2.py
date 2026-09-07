#!/usr/bin/env python3
"""R-EXP-RCA-01 v2: recuperación multicanal con presentación estratificada.

Revisión experimental derivada del diagnóstico posterior de R-EXP-RCA-01.

Recupera antecedentes potencialmente pertinentes mediante señales
complementarias y distingue:

- un núcleo principal favorecido por consenso;
- una reserva especializada con señales secundarias.

NO decide duplicación, novedad, complementariedad, verdad ni incorporación.

La primera realización experimental permanece congelada en r_exp_rca01.py.

Dependencias: numpy, scikit-learn
"""
from __future__ import annotations

import argparse
import re
from pathlib import Path

from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import normalize

import r_exp_rca01 as v1


# ----------------------------------------------------------------------
# Parámetros experimentales de esta primera revisión.
#
# Reproducen la regla utilizada durante el diagnóstico.
# NO constituyen valores óptimos ni propiedades generales.
# ----------------------------------------------------------------------

DEFAULT_TOP_K = 8
DEFAULT_CORE_SIZE = 5
DEFAULT_MIN_GAP = 15
DEFAULT_MAX_SPECIALISTS_PER_CHANNEL = 2
DEFAULT_RRF_K = 60
DEFAULT_ORGANIZATIONAL_MAX_WORDS = 8

CHANNELS = ("WORD", "CHAR", "LSA")


def words(text: str) -> list[str]:
    """Extrae palabras sólo para la heurística organizativa."""
    return re.findall(r"(?u)\b\w+\b", text)


def is_organizational(
    text: str,
    max_words: int = DEFAULT_ORGANIZATIONAL_MAX_WORDS,
) -> bool:
    """Clasifica provisionalmente unidades predominantemente organizativas.

    La heurística deriva del diagnóstico de F-RCA-02.

    No afirma que una unidad breve carezca de información.
    Sólo determina su elegibilidad para ocupar plazas sustantivas.
    """
    stripped = text.strip()

    if re.match(r"^\s*#{1,6}\s+\S", stripped):
        return True

    if re.fullmatch(r"\s*[-_=*]{3,}\s*", stripped):
        return True

    # Un prefijo gráfico no convierte por sí solo todo el párrafo
    # en una unidad organizativa.
    content = re.sub(r"^\s*[-_=*#>]+\s*", "", stripped).strip()

    return (
        1 <= len(words(content)) <= max_words
        and not re.search(r"[.!?;:]", content)
    )


def build_candidate(
    lines: list[str],
    *,
    line: int | None,
    from_line: int | None,
    to_line: int | None,
) -> tuple[str, str]:
    """Construye la unidad candidata seleccionada por la persona.

    Devuelve:
        (etiqueta_de_ubicación, consulta)
    """
    total = len(lines)

    if line is not None:
        if to_line is not None:
            raise SystemExit("--to-line sólo puede utilizarse con --from-line")

        if not (1 <= line <= total):
            raise SystemExit("Línea candidata fuera de rango")

        candidate = lines[line - 1].strip()

        if not candidate:
            raise SystemExit("La línea candidata está vacía")

        return f"línea {line}", candidate

    if from_line is None:
        raise SystemExit("Debe indicarse --line o --from-line")

    if to_line is None:
        raise SystemExit("--from-line requiere también --to-line")

    if not (1 <= from_line <= total):
        raise SystemExit("Línea inicial candidata fuera de rango")

    if not (1 <= to_line <= total):
        raise SystemExit("Línea final candidata fuera de rango")

    if from_line > to_line:
        raise SystemExit("--from-line no puede ser mayor que --to-line")

    parts = [
        candidate_line.strip()
        for candidate_line in lines[from_line - 1 : to_line]
        if candidate_line.strip()
    ]

    if not parts:
        raise SystemExit("El intervalo candidato no contiene texto")

    candidate = " ".join(parts)

    return f"líneas {from_line}-{to_line}", candidate


def channel_scores(
    retriever: v1.Retriever,
    query: str,
) -> dict[str, object]:
    """Calcula por separado las tres señales ya presentes en la v1."""
    qw = retriever.word.transform([query])
    qc = retriever.char.transform([query])
    ql = normalize(retriever.svd.transform(qw))

    return {
        "WORD": cosine_similarity(qw, retriever.Xw).ravel(),
        "CHAR": cosine_similarity(qc, retriever.Xc).ravel(),
        "LSA": cosine_similarity(ql, retriever.Xl).ravel(),
    }


def retrieve_stratified(
    retriever: v1.Retriever,
    query: str,
) -> dict:
    """Genera el pool y lo presenta como núcleo + reserva especializada."""
    scores = channel_scores(retriever, query)

    # Las unidades organizativas permanecen indexadas, pero no son elegibles
    # para las plazas sustantivas de generación/presentación.
    eligible = [
        i
        for i, doc in enumerate(retriever.docs)
        if not is_organizational(doc["text"])
    ]

    if not eligible:
        raise SystemExit("No hay unidades sustantivas elegibles en el corpus")

    # Ranking independiente por canal.
    orders: dict[str, list[int]] = {
        channel: sorted(
            eligible,
            key=lambda i: (-float(scores[channel][i]), i),
        )
        for channel in CHANNELS
    }

    ranks: dict[str, dict[int, int]] = {
        channel: {
            doc_id: position
            for position, doc_id in enumerate(order, 1)
        }
        for channel, order in orders.items()
    }

    # ------------------------------------------------------------------
    # GENERACIÓN: top-K independiente por canal + unión + deduplicación.
    # ------------------------------------------------------------------

    pool: set[int] = set()

    for channel in CHANNELS:
        pool.update(orders[channel][:DEFAULT_TOP_K])

    # ------------------------------------------------------------------
    # PRESENTACIÓN PRINCIPAL: núcleo por Reciprocal Rank Fusion.
    # ------------------------------------------------------------------

    rrf: dict[int, float] = {
        i: sum(
            1.0 / (DEFAULT_RRF_K + ranks[channel][i])
            for channel in CHANNELS
        )
        for i in pool
    }

    core_order = sorted(
        pool,
        key=lambda i: (
            -rrf[i],
            i,
        ),
    )[:DEFAULT_CORE_SIZE]

    core = set(core_order)

    # ------------------------------------------------------------------
    # RESERVA: especialización distinguida.
    #
    # gap alto = asimetría entre canales.
    # NO equivale a pertinencia humana.
    # ------------------------------------------------------------------

    dominant: dict[int, str] = {}
    gap: dict[int, int] = {}
    best_rank: dict[int, int] = {}
    second_best_rank: dict[int, int] = {}

    for i in pool:
        ordered_ranks = sorted(
            (ranks[channel][i], channel)
            for channel in CHANNELS
        )

        first_rank, first_channel = ordered_ranks[0]
        second_rank, _ = ordered_ranks[1]

        dominant[i] = first_channel
        best_rank[i] = first_rank
        second_best_rank[i] = second_rank
        gap[i] = second_rank - first_rank

    reserve_by_channel: dict[str, list[int]] = {}

    for channel in CHANNELS:
        candidates = [
            i
            for i in pool
            if i not in core
            and dominant[i] == channel
            and gap[i] >= DEFAULT_MIN_GAP
        ]

        candidates.sort(
            key=lambda i: (
                -gap[i],
                ranks[channel][i],
                i,
            )
        )

        reserve_by_channel[channel] = candidates[
            :DEFAULT_MAX_SPECIALISTS_PER_CHANNEL
        ]

    reserve = {
        i
        for channel in CHANNELS
        for i in reserve_by_channel[channel]
    }

    return {
        "scores": scores,
        "ranks": ranks,
        "pool": pool,
        "rrf": rrf,
        "core_order": core_order,
        "core": core,
        "dominant": dominant,
        "gap": gap,
        "best_rank": best_rank,
        "second_best_rank": second_best_rank,
        "reserve_by_channel": reserve_by_channel,
        "reserve": reserve,
    }


def excerpt(text: str, limit: int = 360) -> str:
    compact = re.sub(r"\s+", " ", text).strip()

    if len(compact) <= limit:
        return compact

    return compact[: limit - 1] + "…"


def print_stratified_results(
    title: str,
    query: str,
    retriever: v1.Retriever,
) -> None:
    result = retrieve_stratified(retriever, query)

    ranks = result["ranks"]
    core_order = result["core_order"]
    reserve_by_channel = result["reserve_by_channel"]
    gap = result["gap"]

    print("\n" + "=" * 100)
    print(title)
    print("=" * 100)

    print("\nAPORTACIÓN A COMPARAR")
    print("---------------------")
    print(query)

    print("\nPARÁMETROS EXPERIMENTALES")
    print("-------------------------")
    print(
        f"K={DEFAULT_TOP_K}"
        f" | núcleo={DEFAULT_CORE_SIZE}"
        f" | gap>={DEFAULT_MIN_GAP}"
        f" | máx. especialistas/canal="
        f"{DEFAULT_MAX_SPECIALISTS_PER_CHANNEL}"
        f" | RRF-k={DEFAULT_RRF_K}"
    )

    print("\nTAMAÑOS")
    print("-------")
    print(f"Pool intermedio: {len(result['pool'])}")
    print(f"Núcleo principal: {len(core_order)}")
    print(f"Reserva especializada: {len(result['reserve'])}")

    print("\nANTECEDENTES PRINCIPALES")
    print("------------------------")
    print("Antecedentes que conviene revisar primero.")

    for position, i in enumerate(core_order, 1):
        doc = retriever.docs[i]

        print(
            f"\n{position}. "
            f"W={ranks['WORD'][i]:3d} "
            f"C={ranks['CHAR'][i]:3d} "
            f"L={ranks['LSA'][i]:3d}"
        )
        print(
            f"   líneas {v1.format_locations(doc['locations'])}"
        )
        print(f"   {excerpt(doc['text'])}")

    print("\nRESERVA ESPECIALIZADA")
    print("---------------------")
    print(
        "Estas unidades no tienen el mismo estatuto que los "
        "antecedentes principales."
    )
    print(
        "Se conservan porque un canal detecta una señal que "
        "el consenso podría ocultar."
    )
    print("Su pertinencia debe valorarla la persona.")

    reserve_count = len(result["reserve"])

    if reserve_count == 0:
        print("\n— No hay señales especializadas con la regla congelada —")

    for channel in CHANNELS:
        ids = reserve_by_channel[channel]

        print(f"\n{channel}")

        if not ids:
            print("  — ninguna señal especializada —")
            continue

        for position, i in enumerate(ids, 1):
            doc = retriever.docs[i]

            print(
                f"\n  {position}. "
                f"gap={gap[i]:3d}"
                f" | rango {channel}={ranks[channel][i]:3d}"
                f" | W={ranks['WORD'][i]:3d}"
                f" C={ranks['CHAR'][i]:3d}"
                f" L={ranks['LSA'][i]:3d}"
            )
            print(
                f"     líneas {v1.format_locations(doc['locations'])}"
            )
            print(f"     {excerpt(doc['text'])}")


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "R-EXP-RCA-01 v2: recuperación multicanal con "
            "presentación estratificada"
        )
    )

    parser.add_argument(
        "--corpus",
        required=True,
        help="Archivo Markdown del corpus",
    )

    parser.add_argument(
        "--candidate",
        required=True,
        help="Archivo Markdown con aportaciones candidatas",
    )

    candidate_group = parser.add_mutually_exclusive_group(required=True)

    candidate_group.add_argument(
        "--line",
        type=int,
        help="Línea candidata (1-indexada)",
    )

    candidate_group.add_argument(
        "--from-line",
        type=int,
        help="Primera línea de una candidata multilínea (1-indexada)",
    )

    parser.add_argument(
        "--to-line",
        type=int,
        help="Última línea de una candidata multilínea (1-indexada)",
    )

    parser.add_argument(
        "--focus",
        action="append",
        default=[],
        help=(
            "Consulta focal manual opcional. "
            "No modifica la candidata principal."
        ),
    )

    args = parser.parse_args()

    corpus_path = Path(args.corpus)
    candidate_path = Path(args.candidate)

    corpus_lines = corpus_path.read_text(
        encoding="utf-8"
    ).splitlines()

    candidate_lines = candidate_path.read_text(
        encoding="utf-8"
    ).splitlines()

    candidate_location, candidate = build_candidate(
        candidate_lines,
        line=args.line,
        from_line=args.from_line,
        to_line=args.to_line,
    )

    corpus_paragraphs = v1.parse_paragraphs(corpus_lines)
    retriever = v1.Retriever(corpus_paragraphs)

    print("R-EXP-RCA-01 v2")
    print(f"Candidata: {candidate_location}")
    print(
        f"Corpus: {len(corpus_paragraphs)} párrafos; "
        f"{len(retriever.docs)} textos únicos indexados"
    )

    print_stratified_results(
        "APORTACIÓN PRINCIPAL",
        candidate,
        retriever,
    )

    for position, focus in enumerate(args.focus, 1):
        focus = focus.strip()

        if not focus:
            raise SystemExit("Un foco manual no puede estar vacío")

        print_stratified_results(
            f"FOCO MANUAL {position}",
            focus,
            retriever,
        )

    print(
        "\nLa salida sólo recupera antecedentes potencialmente pertinentes."
    )
    print(
        "La clasificación R/P/N?/C y cualquier decisión de incorporación "
        "siguen siendo humanas."
    )


if __name__ == "__main__":
    main()
