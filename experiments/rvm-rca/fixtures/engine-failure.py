#!/usr/bin/env python3

import sys

print(
    "Fallo instrumental deliberado de control.",
    file=sys.stderr,
)

raise SystemExit(7)
