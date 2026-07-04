# 🧠 System Design

## Arquitectura

```mermaid
flowchart TD

UI[React UI] --> CTX[Context Adapter]
CTX --> STORE[Store]

STORE --> REDUCER[Reducer]
STORE --> STORAGE[(localStorage)]

STORE -.-> API[API Layer]
```

---

## Modelo mental

```text
React = UI
Store = Estado
Reducer = Lógica
Context = Bridge
Storage = Persistencia
```

---

## Principio clave

> El estado no vive en React. React lo consume.
