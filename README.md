# React Todo App

> Una aplicación de gestión de tareas desarrollada con React cuyo objetivo principal ha sido explorar patrones de arquitectura frontend, gestión de estado y testing, más allá de implementar una simple lista de tareas.

---

## 📖 Descripción

Este proyecto comenzó como una aplicación ToDo tradicional y evolucionó hasta convertirse en un laboratorio para experimentar con una arquitectura desacoplada inspirada en Redux y principios de Clean Architecture.

En lugar de utilizar librerías externas para la gestión del estado (como Redux Toolkit o Zustand), se implementó un **store propio**, junto con reducers, acciones y una capa de Context que conecta React con la lógica de negocio.

El resultado es una aplicación mantenible, testeable y preparada para seguir creciendo.

---

## ✨ Funcionalidades

- ➕ Crear tareas
- ✏️ Editar tareas
- ✅ Marcar tareas como completadas o pendientes
- 🗑️ Eliminar tareas
- 🔍 Filtrar tareas (Todas, Pendientes y Completadas)
- 📊 Contadores automáticos
- 🧹 Eliminar tareas completadas
- 💾 Persistencia mediante Local Storage

---

## 🛠️ Tecnologías

| Tecnología              | Uso                                 |
| ----------------------- | ----------------------------------- |
| React 19                | Interfaz de usuario                 |
| Vite                    | Bundler y entorno de desarrollo     |
| JavaScript (ES Modules) | Lenguaje                            |
| Context API             | Integración del estado con React    |
| External Store          | Gestión global del estado           |
| Reducer Pattern         | Actualización predecible del estado |
| Vitest                  | Testing                             |
| React Testing Library   | Pruebas de componentes              |
| ESLint                  | Calidad del código                  |

---

## 🏛️ Arquitectura

La aplicación está organizada siguiendo una separación clara de responsabilidades.

```text
UI Components
      │
      ▼
Tasks Context
      │
      ▼
External Store
      │
      ▼
Reducer
      │
      ▼
Application State
```

Cada capa tiene una responsabilidad específica:

- **UI** → Componentes React.
- **Context** → Puente entre React y el Store.
- **Store** → Mantiene el estado global.
- **Reducer** → Actualiza el estado de forma pura.
- **Actions** → Definen las operaciones del dominio.

---

## 📂 Estructura del proyecto

```text
src/
├── application/
│   └── tasks/
│
├── domain/
│   └── tasks/
│       ├── taskActions.js
│       ├── tasksReducer.js
│       ├── tasksSelectors.js
│       └── tasksStore.js
│
├── infrastructure/
│   └── tasksStorage.js
│
├── ui/
│   ├── components/
│   ├── context/
│   └── hooks/
│
├── hooks/
├── tests/
└── utils/
```

La estructura está orientada a mantener separadas la lógica de negocio, la infraestructura y la interfaz de usuario.

---

## 🧪 Testing

El proyecto incorpora diferentes niveles de pruebas automatizadas.

### Unit Tests

- Reducer
- Store
- Casos de uso
- Hooks
- Utilidades

### Component Tests

- TaskForm
- TaskItem
- TaskList

### Integration Tests

- Flujo completo de creación de tareas
- Edición
- Eliminación
- Filtrado
- Persistencia

Actualmente todos los tests se ejecutan correctamente.

---

## 🚀 Instalación

Clonar el repositorio

```bash
git clone https://github.com/enrisan1/mi-app.git
```

Entrar en el proyecto

```bash
cd mi-app
```

Instalar dependencias

```bash
npm install
```

Iniciar el servidor

```bash
npm run dev
```

---

## 📜 Scripts disponibles

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run build
```

Genera la versión de producción.

```bash
npm run preview
```

Previsualiza la aplicación compilada.

```bash
npm run test
```

Ejecuta la suite de pruebas.

```bash
npm run lint
```

Analiza el código con ESLint.

---

## 💡 Decisiones de diseño

Durante el desarrollo se tomaron algunas decisiones arquitectónicas con fines de aprendizaje:

- No utilizar Redux Toolkit.
- Implementar un Store propio inspirado en Redux.
- Mantener reducers completamente puros.
- Centralizar toda la lógica del dominio.
- Desacoplar React de la lógica de negocio.
- Facilitar el testing de cada capa de forma independiente.

---

## 📚 Aprendizajes

Este proyecto ha permitido profundizar en:

- Gestión avanzada del estado.
- Reducers y acciones.
- Arquitectura por capas.
- Separación de responsabilidades.
- Testing de componentes y lógica de negocio.
- Persistencia de datos.
- Organización de proyectos React de tamaño medio.

---

## 🔮 Mejoras futuras

- Drag & Drop para reordenar tareas.
- Categorías.
- Prioridades.
- Fechas de vencimiento.
- Sincronización con API REST.
- Autenticación de usuarios.
- Tema oscuro.
- Internacionalización.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.
