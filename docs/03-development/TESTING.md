# 🧪 Estrategia de Testing

---

## 🎯 Objetivo

Garantizar estabilidad del sistema como base de producto en producción.

---

## 🧱 Niveles de testing

### 1. Unit tests

- Reducer
- lógica de negocio

### 2. Integration tests

- Store completo
- flujo de acciones

### 3. Component tests

- UI React
- interacción usuario

### 4. Hook tests

- integración React + store

---

## ⚙️ CI/CD

- tests ejecutados en cada push
- build validado automáticamente
- deploy solo si todos los tests pasan

---

## 📊 Estado actual

✔ 22 tests pasando  
✔ sistema determinista  
✔ flujo de estado validado  
✔ CI/CD activo
