# TH-80-02-06 — Contraste humano de M5 + M6 + M7 en textos extensos

**Fecha de apertura:** 16/11/2026  
**Estado:** prerregistrado; ejecución humana pendiente.  
**Composición:** `M5 — marcado inline neutral` + `M6 — paneles laterales independientes` + `M7 — referencia discreta de progreso`.

---

# 1. Pregunta

¿Una referencia discreta del tipo:

```text
Diferencia n de N
```

basta para reducir materialmente la pérdida de orientación global observada en
`TH-80-02-05`, sin introducir navegación ni sincronización automática?

---

# 2. Hipótesis

`H-TH-80-02-06`:

> Durante una comparación extensa, conocer de forma estable qué diferencia se
> está revisando y cuántas existen permite conservar orientación global
> suficiente mientras ambos paneles permanecen independientes.

---

# 3. Restricción experimental

El control auxiliar del harness podrá cambiar qué detección se considera activa.

Ese control:

- no desplazará D1;
- no desplazará D2;
- no localizará automáticamente fragmentos;
- no sincronizará paneles;
- no constituye el mecanismo evaluado.

Su única finalidad es poder avanzar el ordinal de M7 durante la prueba.

---

# 4. Falsadores

La hipótesis queda debilitada si:

1. aparece de nuevo sensación material de no saber dónde se está;
2. `n de N` informa del progreso pero no ayuda a recuperar contexto;
3. la persona necesita localizar manualmente repetidas veces la detección activa;
4. se hace necesario un control anterior/siguiente que además navegue;
5. se hace necesario posicionar ambos paneles en la detección activa;
6. el indicador añade información irrelevante o confusa.

---

# 5. Observables

`O1` — orientación global durante todo el recorrido.  
`O2` — utilidad real de `n de N`.  
`O3` — necesidad de buscar manualmente la detección activa.  
`O4` — necesidad de navegación anterior/siguiente.  
`O5` — necesidad de sincronización al activar una detección.  
`O6` — mantenimiento de contexto en ambos documentos.  
`O7` — carga visual adicional.

---

# 6. Resultado posible

```text
A — SUFICIENCIA MATERIAL
→ M7 resuelve suficientemente la pérdida de orientación

B — MEJORA PARCIAL
→ M7 ayuda, pero permanece una fricción estructural concreta

C — INSUFICIENTE
→ el ordinal no resuelve materialmente la pérdida observada
```

---

# 7. Límite

Este contraste no evalúa todavía:

- navegación real;
- scroll programático;
- sincronización automática;
- edición;
- relevancia;
- ni decisión.
