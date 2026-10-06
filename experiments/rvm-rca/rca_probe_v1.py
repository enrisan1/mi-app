#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import re
import subprocess
import sys
from pathlib import Path

LOC_RE = re.compile(
    r"\bl[ií]neas\s+((?:\d+(?:\s*[-–]\s*\d+)?)(?:\s*,\s*\d+(?:\s*[-–]\s*\d+)?)*)",
    re.I,
)


def sha_file(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def sha_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def parse_range(text: str) -> tuple[int, int]:
    text = text.strip().replace("–", "-")

    if "-" in text:
        first, last = text.split("-", 1)
        result = int(first), int(last)
    else:
        result = int(text), int(text)

    if result[0] < 1 or result[1] < result[0]:
        raise ValueError(f"rango inválido: {text}")

    return result


def range_label(result: tuple[int, int]) -> str:
    if result[0] == result[1]:
        return str(result[0])

    return f"{result[0]}-{result[1]}"


def extract_occurrences(stdout: str) -> list[tuple[int, int]]:
    found: set[tuple[int, int]] = set()

    for line in stdout.splitlines():
        for match in LOC_RE.finditer(line):
            for part in match.group(1).split(","):
                found.add(parse_range(part))

    return sorted(found)


def context_block(
    lines: list[str],
    occurrence: tuple[int, int],
    context_lines: int,
) -> tuple[int, int, str]:
    start, end = occurrence

    first = max(1, start - context_lines)
    last = min(len(lines), end + context_lines)

    output = []

    for line_number in range(first, last + 1):
        marker = ">>" if start <= line_number <= end else "  "

        output.append(
            f"{marker} {line_number:>6}: {lines[line_number - 1]}"
        )

    return first, last, "\n".join(output)


def fence(text: str) -> str:
    return f"````text\n{text}\n````"


def main() -> int:
    parser = argparse.ArgumentParser()

    parser.add_argument("--corpus", required=True, type=Path)
    parser.add_argument("--candidate", required=True, type=Path)
    parser.add_argument("--line", required=True, type=int)
    parser.add_argument("--output", required=True, type=Path)

    parser.add_argument(
        "--engine",
        type=Path,
        default=Path(
            "experiments/r-exp-rca-01/r_exp_rca01_v2.py"
        ),
    )

    parser.add_argument(
        "--context-lines",
        type=int,
        default=4,
    )

    parser.add_argument("--expect-corpus-sha256")
    parser.add_argument("--expect-candidate-text-sha256")

    parser.add_argument(
        "--expect-location",
        action="append",
        default=[],
    )

    args = parser.parse_args()

    corpus = args.corpus.expanduser().resolve()
    candidate = args.candidate.expanduser().resolve()
    engine = args.engine.expanduser().resolve()
    output = args.output.expanduser().resolve()

    try:
        if args.line < 1 or args.context_lines < 0:
            raise ValueError("línea/contexto inválidos")

        for path in (corpus, candidate, engine):
            if not path.is_file():
                raise ValueError(f"no existe: {path}")

        corpus_lines = corpus.read_text(
            encoding="utf-8"
        ).splitlines()

        candidate_lines = candidate.read_text(
            encoding="utf-8"
        ).splitlines()

        if args.line > len(candidate_lines):
            raise ValueError(
                "línea candidata fuera de rango"
            )

        candidate_text = candidate_lines[args.line - 1]

        if not candidate_text.strip():
            raise ValueError(
                "línea candidata vacía"
            )

        corpus_sha_before = sha_file(corpus)
        candidate_sha_before = sha_file(candidate)
        engine_sha_before = sha_file(engine)

        if (
            args.expect_corpus_sha256
            and corpus_sha_before.lower()
            != args.expect_corpus_sha256.lower()
        ):
            raise ValueError(
                "SHA del corpus distinto: "
                f"{corpus_sha_before}"
            )

        candidate_text_sha = sha_text(candidate_text)

        if (
            args.expect_candidate_text_sha256
            and candidate_text_sha.lower()
            != args.expect_candidate_text_sha256.lower()
        ):
            raise ValueError(
                "SHA de candidata distinto: "
                f"{candidate_text_sha}"
            )

        expected_locations = [
            parse_range(item)
            for item in args.expect_location
        ]

    except (OSError, UnicodeError, ValueError) as error:
        print(
            f"INPUT_INVALID: {error}",
            file=sys.stderr,
        )
        return 2

    command = [
        sys.executable,
        str(engine),
        "--corpus",
        str(corpus),
        "--candidate",
        str(candidate),
        "--line",
        str(args.line),
    ]

    run = subprocess.run(
        command,
        text=True,
        capture_output=True,
        encoding="utf-8",
        errors="replace",
    )

    corpus_sha_after = sha_file(corpus)
    candidate_sha_after = sha_file(candidate)
    engine_sha_after = sha_file(engine)

    notes: list[str] = []

    if run.returncode != 0:
        status = "RECOVERY_FAILED"
        found = []
        exit_code = 3

        notes.append(
            "Fallo del motor ≠ recuperación válida "
            "con cero resultados."
        )

    else:
        try:
            found = extract_occurrences(run.stdout)

            for occurrence in found:
                if occurrence[1] > len(corpus_lines):
                    raise ValueError(
                        "ubicación fuera del corpus: "
                        f"{range_label(occurrence)}"
                    )

        except ValueError as error:
            status = "RECOVERY_FAILED"
            found = []
            exit_code = 3

            notes.append(str(error))

        else:
            changed = []

            if corpus_sha_after != corpus_sha_before:
                changed.append("corpus")

            if candidate_sha_after != candidate_sha_before:
                changed.append("candidata")

            if engine_sha_after != engine_sha_before:
                changed.append("motor")

            if changed:
                status = "CORRESPONDENCE_INVALIDATED"
                exit_code = 2

                notes.append(
                    "Cambió durante la ejecución: "
                    + ", ".join(changed)
                )

            elif found:
                status = "RECOVERY_OK"
                exit_code = 0

            else:
                status = "RECOVERY_OK_ZERO_RESULTS"
                exit_code = 0

                notes.append(
                    "Cero resultados no demuestra "
                    "ausencia de antecedentes."
                )

    markdown = [
        "# RVM-EXP — Situación de comparación RCA",
        "",
        "## Estado",
        "",
        f"- **status:** `{status}`",
        f"- **código del motor:** `{run.returncode}`",
        (
            "- **ocurrencias documentales únicas:** "
            f"`{len(found)}`"
        ),
        "",
        (
            "> Los resultados son antecedentes "
            "recuperados por este mecanismo. "
            "No afirman exhaustividad, equivalencia, "
            "redundancia, novedad, relevancia "
            "ni incorporación."
        ),
        "",
        "## Candidata",
        "",
        f"- **archivo:** `{candidate}`",
        f"- **línea:** `{args.line}`",
        (
            "- **SHA-256 archivo antes:** "
            f"`{candidate_sha_before}`"
        ),
        (
            "- **SHA-256 archivo después:** "
            f"`{candidate_sha_after}`"
        ),
        (
            "- **SHA-256 texto candidato:** "
            f"`{candidate_text_sha}`"
        ),
        "",
        fence(candidate_text),
        "",
        "## Corpus",
        "",
        f"- **archivo:** `{corpus}`",
        f"- **líneas:** `{len(corpus_lines)}`",
        (
            "- **SHA-256 antes:** "
            f"`{corpus_sha_before}`"
        ),
        (
            "- **SHA-256 después:** "
            f"`{corpus_sha_after}`"
        ),
        "",
        "## Motor",
        "",
        f"- **archivo:** `{engine}`",
        (
            "- **SHA-256 antes:** "
            f"`{engine_sha_before}`"
        ),
        (
            "- **SHA-256 después:** "
            f"`{engine_sha_after}`"
        ),
        "",
    ]

    if expected_locations:
        actual = set(found)

        markdown += [
            "## Controles conocidos",
            "",
        ]

        for occurrence in expected_locations:
            result = (
                "PRESENTE"
                if occurrence in actual
                else "NO PRESENTE"
            )

            markdown.append(
                f"- `{range_label(occurrence)}` "
                f"→ **{result}**"
            )

        markdown += [
            "",
            (
                "_Control de recuperación, "
                "no clasificación semántica._"
            ),
            "",
        ]

    markdown += [
        "## Ocurrencias recuperadas",
        "",
    ]

    if not found:
        markdown += [
            (
                "**Ninguna ubicación recuperada. "
                "Esto no demuestra ausencia "
                "de antecedentes.**"
            ),
            "",
        ]

    else:
        for index, occurrence in enumerate(found, 1):
            start, end = occurrence

            first, last, context = context_block(
                corpus_lines,
                occurrence,
                args.context_lines,
            )

            exact_text = "\n".join(
                corpus_lines[start - 1:end]
            )

            markdown += [
                (
                    f"### {index}. Ocurrencia "
                    f"`{range_label(occurrence)}`"
                ),
                "",
                f"- **procedencia:** `{corpus}`",
                (
                    "- **rango:** "
                    f"`{range_label(occurrence)}`"
                ),
                (
                    "- **estado de corpus:** "
                    f"`{corpus_sha_before}`"
                ),
                (
                    "- **referencia situada:** "
                    f"`{corpus}:"
                    f"{range_label(occurrence)}"
                    f"@{corpus_sha_before}`"
                ),
                (
                    "- **ventana contextual:** "
                    f"`{first}-{last}`"
                ),
                "",
                "#### Texto",
                "",
                fence(exact_text),
                "",
                "#### Contexto",
                "",
                fence(context),
                "",
            ]

    if notes:
        markdown += [
            "## Observaciones",
            "",
        ]

        markdown += [
            f"- {note}"
            for note in notes
        ]

        markdown.append("")

    markdown += [
        "## Evidencia bruta del motor",
        "",
        "### stdout",
        "",
        fence(run.stdout.rstrip() or "(vacío)"),
        "",
        "### stderr",
        "",
        fence(run.stderr.rstrip() or "(vacío)"),
        "",
        "## Frontera humana",
        "",
        (
            "El informe termina en la preparación "
            "instrumental. No decide equivalencia, "
            "novedad, redundancia, relevancia, "
            "incorporación ni eliminación."
        ),
        "",
    ]

    output.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    output.write_text(
        "\n".join(markdown),
        encoding="utf-8",
    )

    print(output)

    return exit_code


if __name__ == "__main__":
    raise SystemExit(main())
