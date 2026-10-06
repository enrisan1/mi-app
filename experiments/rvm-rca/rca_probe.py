#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

LOC_RE = re.compile(
    r"\bl[ií]neas\s+((?:\d+(?:\s*[-–]\s*\d+)?)(?:\s*,\s*\d+(?:\s*[-–]\s*\d+)?)*)",
    re.I,
)
MAIN_RE = re.compile(r"^\s*(\d+)\.\s+W=")
SPEC_RE = re.compile(r"^\s*(\d+)\.\s+gap=")
MAIN_COUNT_RE = re.compile(r"^Núcleo principal:\s*(\d+)\s*$", re.M)
SPEC_COUNT_RE = re.compile(r"^Reserva especializada:\s*(\d+)\s*$", re.M)
CHANNELS = {"WORD", "CHAR", "LSA"}


@dataclass
class Unit:
    kind: str
    rank: int
    channel: str | None
    descriptor: str
    occurrences: list[tuple[int, int]]
    preview: str


def sha_file(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def sha_text(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def parse_range(value: str) -> tuple[int, int]:
    value = value.strip().replace("–", "-")

    if "-" in value:
        a, b = map(int, value.split("-", 1))
    else:
        a = b = int(value)

    if a < 1 or b < a:
        raise ValueError(f"rango inválido: {value}")

    return a, b


def label(r: tuple[int, int]) -> str:
    return str(r[0]) if r[0] == r[1] else f"{r[0]}-{r[1]}"


def locations(line: str) -> list[tuple[int, int]]:
    match = LOC_RE.search(line)

    if not match:
        return []

    return [
        parse_range(value)
        for value in match.group(1).split(",")
    ]


def declared_counts(stdout: str) -> tuple[int, int]:
    main = MAIN_COUNT_RE.search(stdout)
    specialist = SPEC_COUNT_RE.search(stdout)

    if not main or not specialist:
        raise ValueError(
            "el motor no declaró los tamaños "
            "de núcleo y reserva"
        )

    return int(main.group(1)), int(specialist.group(1))


def parse_units(stdout: str) -> list[Unit]:
    lines = stdout.splitlines()

    units: list[Unit] = []

    section: str | None = None
    channel: str | None = None

    i = 0

    while i < len(lines):
        stripped = lines[i].strip()

        if stripped == "ANTECEDENTES PRINCIPALES":
            section = "principal"
            channel = None
            i += 1
            continue

        if stripped == "RESERVA ESPECIALIZADA":
            section = "specialist"
            channel = None
            i += 1
            continue

        if section == "specialist" and stripped in CHANNELS:
            channel = stripped
            i += 1
            continue

        match = None

        if section == "principal":
            match = MAIN_RE.match(lines[i])

        elif section == "specialist" and channel in CHANNELS:
            match = SPEC_RE.match(lines[i])

        if not match:
            i += 1
            continue

        rank = int(match.group(1))
        descriptor = stripped

        occurrences: list[tuple[int, int]] = []
        preview: list[str] = []

        j = i + 1

        while j < len(lines):
            raw = lines[j]
            text = raw.strip()

            if text in {
                "ANTECEDENTES PRINCIPALES",
                "RESERVA ESPECIALIZADA",
            }:
                break

            if section == "specialist" and text in CHANNELS:
                break

            if section == "principal" and MAIN_RE.match(raw):
                break

            if section == "specialist" and SPEC_RE.match(raw):
                break

            if text.startswith(
                "La salida sólo recupera antecedentes"
            ):
                break

            if text.startswith(
                "La clasificación R/P/N?/C"
            ):
                break

            found = locations(raw)

            if found:
                for occurrence in found:
                    if occurrence not in occurrences:
                        occurrences.append(occurrence)

            elif (
                text
                and not set(text) <= {"-"}
                and not text.startswith("—")
            ):
                preview.append(text)

            j += 1

        if occurrences:
            units.append(
                Unit(
                    kind=section,
                    rank=rank,
                    channel=(
                        channel
                        if section == "specialist"
                        else None
                    ),
                    descriptor=descriptor,
                    occurrences=occurrences,
                    preview=" ".join(preview),
                )
            )

        i = j

    return units


def unique_occurrences(
    units: list[Unit],
) -> list[tuple[int, int]]:
    return sorted(
        {
            occurrence
            for unit in units
            for occurrence in unit.occurrences
        }
    )


def context_block(
    lines: list[str],
    occurrence: tuple[int, int],
    radius: int,
) -> tuple[int, int, str]:
    start, end = occurrence

    first = max(1, start - radius)
    last = min(len(lines), end + radius)

    output = []

    for line_number in range(first, last + 1):
        marker = (
            ">>"
            if start <= line_number <= end
            else "  "
        )

        output.append(
            f"{marker} {line_number:>6}: "
            f"{lines[line_number - 1]}"
        )

    return first, last, "\n".join(output)


def fence(text: str) -> str:
    return f"````text\n{text}\n````"


def main() -> int:
    parser = argparse.ArgumentParser()

    parser.add_argument(
        "--corpus",
        required=True,
        type=Path,
    )

    parser.add_argument(
        "--candidate",
        required=True,
        type=Path,
    )

    parser.add_argument(
        "--line",
        required=True,
        type=int,
    )

    parser.add_argument(
        "--output",
        required=True,
        type=Path,
    )

    parser.add_argument(
        "--engine",
        type=Path,
        default=Path(
            "experiments/r-exp-rca-01/"
            "r_exp_rca01_v2.py"
        ),
    )

    parser.add_argument(
        "--context-lines",
        type=int,
        default=4,
    )

    parser.add_argument(
        "--expect-corpus-sha256"
    )

    parser.add_argument(
        "--expect-candidate-text-sha256"
    )

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
            raise ValueError(
                "línea/contexto inválidos"
            )

        for path in (
            corpus,
            candidate,
            engine,
        ):
            if not path.is_file():
                raise ValueError(
                    f"no existe: {path}"
                )

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

        candidate_text = (
            candidate_lines[args.line - 1]
        )

        if not candidate_text.strip():
            raise ValueError(
                "línea candidata vacía"
            )

        corpus_sha_before = sha_file(corpus)
        candidate_sha_before = sha_file(candidate)
        engine_sha_before = sha_file(engine)

        candidate_text_sha = sha_text(
            candidate_text
        )

        if (
            args.expect_corpus_sha256
            and corpus_sha_before.lower()
            != args.expect_corpus_sha256.lower()
        ):
            raise ValueError(
                "SHA del corpus distinto: "
                f"{corpus_sha_before}"
            )

        if (
            args.expect_candidate_text_sha256
            and candidate_text_sha.lower()
            != args.expect_candidate_text_sha256.lower()
        ):
            raise ValueError(
                "SHA de candidata distinto: "
                f"{candidate_text_sha}"
            )

        expected = [
            parse_range(value)
            for value in args.expect_location
        ]

    except (
        OSError,
        UnicodeError,
        ValueError,
    ) as error:
        print(
            f"INPUT_INVALID: {error}",
            file=sys.stderr,
        )
        return 2

    run = subprocess.run(
        [
            sys.executable,
            str(engine),
            "--corpus",
            str(corpus),
            "--candidate",
            str(candidate),
            "--line",
            str(args.line),
        ],
        text=True,
        capture_output=True,
        encoding="utf-8",
        errors="replace",
    )

    corpus_sha_after = sha_file(corpus)
    candidate_sha_after = sha_file(candidate)
    engine_sha_after = sha_file(engine)

    notes: list[str] = []

    units: list[Unit] = []
    found: list[tuple[int, int]] = []

    if run.returncode != 0:
        status = "RECOVERY_FAILED"
        exit_code = 3

        notes.append(
            "Fallo del motor ≠ recuperación "
            "válida con cero resultados."
        )

    else:
        try:
            (
                declared_main,
                declared_specialist,
            ) = declared_counts(run.stdout)

            units = parse_units(run.stdout)

            parsed_main = sum(
                unit.kind == "principal"
                for unit in units
            )

            parsed_specialist = sum(
                unit.kind == "specialist"
                for unit in units
            )

            if (
                parsed_main,
                parsed_specialist,
            ) != (
                declared_main,
                declared_specialist,
            ):
                raise ValueError(
                    "estructura de salida no "
                    "conservada: "
                    f"declarado "
                    f"{declared_main}+"
                    f"{declared_specialist}, "
                    f"parseado "
                    f"{parsed_main}+"
                    f"{parsed_specialist}"
                )

            found = unique_occurrences(units)

            for occurrence in found:
                if occurrence[1] > len(
                    corpus_lines
                ):
                    raise ValueError(
                        "ubicación fuera del "
                        "corpus: "
                        f"{label(occurrence)}"
                    )

        except ValueError as error:
            status = "RECOVERY_FAILED"
            exit_code = 3

            units = []
            found = []

            notes.append(str(error))

        else:
            changed = []

            if (
                corpus_sha_after
                != corpus_sha_before
            ):
                changed.append("corpus")

            if (
                candidate_sha_after
                != candidate_sha_before
            ):
                changed.append("candidata")

            if (
                engine_sha_after
                != engine_sha_before
            ):
                changed.append("motor")

            if changed:
                status = (
                    "CORRESPONDENCE_INVALIDATED"
                )
                exit_code = 2

                notes.append(
                    "Cambió durante la "
                    "ejecución: "
                    + ", ".join(changed)
                )

            elif units:
                status = "RECOVERY_OK"
                exit_code = 0

            else:
                status = (
                    "RECOVERY_OK_ZERO_RESULTS"
                )
                exit_code = 0

                notes.append(
                    "Cero resultados no "
                    "demuestra ausencia "
                    "de antecedentes."
                )

    principal_count = sum(
        unit.kind == "principal"
        for unit in units
    )

    specialist_count = sum(
        unit.kind == "specialist"
        for unit in units
    )

    markdown = [
        "# RVM-EXP — Situación de comparación RCA",
        "",
        "## Estado",
        "",
        f"- **status:** `{status}`",
        (
            "- **código del motor:** "
            f"`{run.returncode}`"
        ),
        (
            "- **unidades de recuperación:** "
            f"`{len(units)}`"
        ),
        (
            "- **antecedentes principales:** "
            f"`{principal_count}`"
        ),
        (
            "- **reserva especializada:** "
            f"`{specialist_count}`"
        ),
        (
            "- **ocurrencias documentales únicas:** "
            f"`{len(found)}`"
        ),
        "",
        (
            "> Principal/reserva y WORD/CHAR/LSA "
            "son estructura instrumental de este "
            "motor; no son clasificación semántica "
            "ni nuevas unidades del dominio."
        ),
        "",
        (
            "> Los resultados no afirman "
            "exhaustividad, equivalencia, "
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

    if expected:
        markdown += [
            "## Controles conocidos",
            "",
        ]

        actual = set(found)

        for occurrence in expected:
            result = (
                "PRESENTE"
                if occurrence in actual
                else "NO PRESENTE"
            )

            markdown.append(
                f"- `{label(occurrence)}` "
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
        "## Estructura de recuperación conservada",
        "",
    ]

    principals = [
        unit
        for unit in units
        if unit.kind == "principal"
    ]

    specialists = [
        unit
        for unit in units
        if unit.kind == "specialist"
    ]

    markdown += [
        "### Antecedentes principales",
        "",
    ]

    if not principals:
        markdown += [
            "— ninguno —",
            "",
        ]

    for unit in principals:
        references = ", ".join(
            f"`{label(occurrence)}`"
            for occurrence
            in unit.occurrences
        )

        markdown += [
            f"#### Principal {unit.rank}",
            "",
            (
                "- **descriptor del motor:** "
                f"`{unit.descriptor}`"
            ),
            (
                "- **ocurrencias:** "
                f"{references}"
            ),
        ]

        if unit.preview:
            markdown += [
                "- **vista previa del motor:**",
                "",
                fence(unit.preview),
            ]

        markdown.append("")

    markdown += [
        "### Reserva especializada",
        "",
    ]

    if not specialists:
        markdown += [
            "— ninguna —",
            "",
        ]

    for unit in specialists:
        references = ", ".join(
            f"`{label(occurrence)}`"
            for occurrence
            in unit.occurrences
        )

        markdown += [
            (
                f"#### {unit.channel} "
                f"{unit.rank}"
            ),
            "",
            (
                "- **descriptor del motor:** "
                f"`{unit.descriptor}`"
            ),
            (
                "- **ocurrencias:** "
                f"{references}"
            ),
        ]

        if unit.preview:
            markdown += [
                "- **vista previa del motor:**",
                "",
                fence(unit.preview),
            ]

        markdown.append("")

    markdown += [
        "## Registro de ocurrencias documentales",
        "",
        (
            "Cada ocurrencia concreta se describe "
            "una sola vez. Las unidades anteriores "
            "la referencian sin multiplicarla."
        ),
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
        for index, occurrence in enumerate(
            found,
            1,
        ):
            start, end = occurrence

            first, last, context = context_block(
                corpus_lines,
                occurrence,
                args.context_lines,
            )

            text = "\n".join(
                corpus_lines[start - 1:end]
            )

            markdown += [
                (
                    f"### {index}. Ocurrencia "
                    f"`{label(occurrence)}`"
                ),
                "",
                (
                    "- **procedencia:** "
                    f"`{corpus}`"
                ),
                (
                    "- **rango:** "
                    f"`{label(occurrence)}`"
                ),
                (
                    "- **estado de corpus:** "
                    f"`{corpus_sha_before}`"
                ),
                (
                    "- **referencia situada:** "
                    f"`{corpus}:"
                    f"{label(occurrence)}"
                    f"@{corpus_sha_before}`"
                ),
                (
                    "- **ventana contextual:** "
                    f"`{first}-{last}`"
                ),
                "",
                "#### Texto",
                "",
                fence(text),
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
        fence(
            run.stdout.rstrip()
            or "(vacío)"
        ),
        "",
        "### stderr",
        "",
        fence(
            run.stderr.rstrip()
            or "(vacío)"
        ),
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

    try:
        output.parent.mkdir(
            parents=True,
            exist_ok=True,
        )

        output.write_text(
            "\n".join(markdown),
            encoding="utf-8",
        )

    except OSError as error:
        print(
            f"OUTPUT_WRITE_FAILED: {error}",
            file=sys.stderr,
        )
        return 4

    print(output)

    return exit_code


if __name__ == "__main__":
    raise SystemExit(main())
