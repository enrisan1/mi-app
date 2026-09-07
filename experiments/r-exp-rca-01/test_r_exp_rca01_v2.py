#!/usr/bin/env python3

from __future__ import annotations

import unittest
from unittest.mock import patch

import numpy as np

import r_exp_rca01_v2 as v2


class FakeRetriever:
    def __init__(self) -> None:
        self.docs = [
            {
                "text": (
                    f"Este es un párrafo sustantivo de prueba número {i} "
                    "con suficiente contenido y puntuación."
                ),
                "locations": [(i + 1, i + 1)],
            }
            for i in range(8)
        ]


class BuildCandidateTests(unittest.TestCase):
    def test_single_line_candidate(self) -> None:
        lines = [
            "primera línea",
            "",
            "tercera línea",
        ]

        location, candidate = v2.build_candidate(
            lines,
            line=3,
            from_line=None,
            to_line=None,
        )

        self.assertEqual(location, "línea 3")
        self.assertEqual(candidate, "tercera línea")

    def test_multiline_candidate_joins_non_empty_lines(self) -> None:
        lines = [
            "uno",
            "",
            "dos",
            "tres",
            "",
        ]

        location, candidate = v2.build_candidate(
            lines,
            line=None,
            from_line=1,
            to_line=4,
        )

        self.assertEqual(location, "líneas 1-4")
        self.assertEqual(candidate, "uno dos tres")

    def test_empty_single_line_is_rejected(self) -> None:
        with self.assertRaises(SystemExit):
            v2.build_candidate(
                ["", "texto"],
                line=1,
                from_line=None,
                to_line=None,
            )

    def test_interval_requires_to_line(self) -> None:
        with self.assertRaises(SystemExit):
            v2.build_candidate(
                ["uno", "dos"],
                line=None,
                from_line=1,
                to_line=None,
            )

    def test_reversed_interval_is_rejected(self) -> None:
        with self.assertRaises(SystemExit):
            v2.build_candidate(
                ["uno", "dos", "tres"],
                line=None,
                from_line=3,
                to_line=1,
            )


class OrganizationalTests(unittest.TestCase):
    def test_markdown_heading_is_organizational(self) -> None:
        self.assertTrue(v2.is_organizational("## Los Welser"))

    def test_pure_separator_is_organizational(self) -> None:
        self.assertTrue(v2.is_organizational("----------"))

    def test_short_label_is_organizational(self) -> None:
        self.assertTrue(v2.is_organizational("Los Welser"))

    def test_graphical_prefix_does_not_hide_substantive_paragraph(self) -> None:
        text = (
            "---------- Este párrafo contiene una explicación sustantiva "
            "con más de ocho palabras y termina correctamente."
        )

        self.assertFalse(v2.is_organizational(text))

    def test_short_sentence_with_punctuation_is_not_label(self) -> None:
        self.assertFalse(
            v2.is_organizational(
                "Los Welser fueron expulsados."
            )
        )


class StratifiedRetrievalTests(unittest.TestCase):
    def test_core_and_reserve_are_distinct(self) -> None:
        retriever = FakeRetriever()

        scores = {
            # doc 0 recibe consenso.
            # docs 1 y 2 son fuertes sólo en WORD.
            "WORD": np.array(
                [1.00, 0.95, 0.90, 0.10, 0.09, 0.08, 0.07, 0.06]
            ),

            # docs 3 y 4 son fuertes sólo en CHAR.
            "CHAR": np.array(
                [1.00, 0.08, 0.07, 0.95, 0.90, 0.06, 0.05, 0.04]
            ),

            # docs 5 y 6 son fuertes sólo en LSA.
            "LSA": np.array(
                [1.00, 0.08, 0.07, 0.06, 0.05, 0.95, 0.90, 0.04]
            ),
        }

        with (
            patch.object(v2, "channel_scores", return_value=scores),
            patch.object(v2, "DEFAULT_TOP_K", 3),
            patch.object(v2, "DEFAULT_CORE_SIZE", 1),
            patch.object(v2, "DEFAULT_MIN_GAP", 3),
            patch.object(
                v2,
                "DEFAULT_MAX_SPECIALISTS_PER_CHANNEL",
                1,
            ),
        ):
            result = v2.retrieve_stratified(
                retriever,
                "consulta de prueba",
            )

        self.assertEqual(len(result["core"]), 1)
        self.assertEqual(result["core"], {0})

        self.assertTrue(
            result["core"].isdisjoint(result["reserve"])
        )

        for channel in v2.CHANNELS:
            self.assertLessEqual(
                len(result["reserve_by_channel"][channel]),
                1,
            )

        self.assertTrue(result["reserve"])
        self.assertTrue(
            result["reserve"].issubset(result["pool"])
        )

    def test_organizational_units_do_not_enter_pool(self) -> None:
        retriever = FakeRetriever()

        retriever.docs[0]["text"] = "Los Welser"

        scores = {
            "WORD": np.array(
                [1.00, 0.90, 0.80, 0.70, 0.60, 0.50, 0.40, 0.30]
            ),
            "CHAR": np.array(
                [1.00, 0.80, 0.90, 0.70, 0.60, 0.50, 0.40, 0.30]
            ),
            "LSA": np.array(
                [1.00, 0.70, 0.80, 0.90, 0.60, 0.50, 0.40, 0.30]
            ),
        }

        with (
            patch.object(v2, "channel_scores", return_value=scores),
            patch.object(v2, "DEFAULT_TOP_K", 3),
        ):
            result = v2.retrieve_stratified(
                retriever,
                "consulta de prueba",
            )

        self.assertNotIn(0, result["pool"])
        self.assertNotIn(0, result["core"])
        self.assertNotIn(0, result["reserve"])


if __name__ == "__main__":
    unittest.main()
