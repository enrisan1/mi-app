# Incidencia previa a la primera recuperación prospectiva

## Resultado observado

```text
status: INPUT_INVALID
exit: 2
expected candidate text SHA-256: 83d1b5884212d8e1cd47e489fa0f6ad61d0fd36d7e8a5dd46035e9d79f894228
observed candidate text SHA-256: 53c39ed4c510182721f8343c67382ffcd6a0fd7c9213a552921b26e317f00693
```

No se produjo informe prospectivo y el motor no llegó a ejecutarse.

## Causa identificada

La expectativa externa había sido calculada sobre el archivo candidato completo, incluido su salto de línea final.

El adaptador calcula la huella del texto de la línea candidata sin ese salto de línea.

Por tanto:

```text
83d1b5884212d8e1cd47e489fa0f6ad61d0fd36d7e8a5dd46035e9d79f894228
→ bytes del fixture completo, incluido LF final

53c39ed4c510182721f8343c67382ffcd6a0fd7c9213a552921b26e317f00693
→ texto candidato utilizado por rca_probe.py, sin LF final
```

No existe modificación de candidata, corpus, protocolo, motor ni adaptador.

La repetición queda tratada como repetición técnica permitida por RP-PROS-01, manteniendo inalterados código, criterios y parámetros.
