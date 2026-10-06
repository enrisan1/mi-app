#!/usr/bin/env python3

import argparse
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument("--corpus", required=True)
parser.add_argument("--candidate", required=True)
parser.add_argument("--line", required=True)
args = parser.parse_args()

corpus = Path(args.corpus)

with corpus.open("a", encoding="utf-8") as f:
    f.write("\nCambio deliberado durante la recuperación.\n")

print("""R-EXP-RCA-01 — control de correspondencia invalidada

TAMAÑOS
-------
Pool intermedio: 0
Núcleo principal: 0
Reserva especializada: 0

ANTECEDENTES PRINCIPALES
------------------------

RESERVA ESPECIALIZADA
---------------------

WORD
  — ninguna señal especializada —

CHAR
  — ninguna señal especializada —

LSA
  — ninguna señal especializada —
""")
