# README.md

# Plataforma para la gestión estructural del conocimiento

## Índice

1. ¿Qué es este proyecto?
2. Estado del proyecto
3. Primeros pasos
   - Requisitos
   - Instalación
   - Ejecución
   - Validación

4. Documentación
5. Cómo contribuir
6. Licencia

---

# 1. ¿Qué es este proyecto?

Este repositorio contiene el desarrollo de una plataforma orientada a la creación, gestión, publicación, difusión y preservación del conocimiento mediante documentos.

El proyecto se desarrolla de forma incremental utilizando una aplicación de gestión de tareas como dominio de referencia para diseñar, implementar y validar progresivamente la arquitectura, el modelo del producto y el proceso de desarrollo.

Uno de los resultados fundamentales del proyecto es el desarrollo de una teoría conceptual sobre el dominio de las plataformas de gestión del conocimiento. Esta teoría se construye mediante un proceso sistemático de investigación, reducción fenomenológica, auditoría y consolidación documental, y constituye el fundamento sobre el que se diseña posteriormente la plataforma software.

Por tanto, el proyecto integra dos líneas de trabajo complementarias:

- la construcción de una teoría conceptual del dominio;
- el desarrollo de una plataforma software que implementa y valida dicha teoría.

Además de la implementación del software, el repositorio documenta las decisiones, principios y conocimientos adquiridos durante su evolución. La documentación forma parte del propio proyecto y constituye un recurso para comprender no sólo el resultado obtenido, sino también el proceso seguido para construirlo.

El objetivo es desarrollar un producto sostenible, una arquitectura mantenible y una documentación que permita preservar y compartir el conocimiento generado durante su construcción.

---

# 2. Estado del proyecto

El proyecto se encuentra en una fase de transición entre la investigación conceptual y el diseño de ingeniería.

En la actualidad se consideran consolidados provisionalmente:

- la teoría conceptual del dominio;
- la arquitectura documental;
- el proceso metodológico de investigación;
- la organización general del proyecto.

La siguiente fase consistirá en diseñar la arquitectura del núcleo software que implementará la teoría desarrollada durante la investigación.

## Estado de madurez

| Área                         | Estado                        |
| ---------------------------- | ----------------------------- |
| Teoría conceptual            | ✔ Primera edición consolidada |
| Arquitectura documental      | ✔ Consolidada                 |
| Metodología de investigación | ✔ Consolidada                 |
| Diseño de ingeniería         | En preparación                |
| Implementación del núcleo    | Pendiente                     |
| Plataforma software          | En desarrollo                 |

La información detallada sobre el estado del desarrollo, las funcionalidades implementadas y los próximos objetivos puede consultarse en `PROJECT_STATUS.md`.

---

# 3. Primeros pasos

Este apartado reúne la información mínima necesaria para preparar el entorno de desarrollo, ejecutar la aplicación y comprobar que el proyecto funciona correctamente.

La guía completa del proceso de desarrollo, las convenciones del proyecto y el flujo de trabajo se encuentran en `DEVELOPMENT_GUIDE.md`.

## 3.1 Requisitos

Antes de comenzar, asegúrate de disponer de las herramientas necesarias para ejecutar el proyecto.

Requisitos mínimos:

- Node.js
- npm
- Git

Las versiones recomendadas y la configuración detallada del entorno de desarrollo se describen en `DEVELOPMENT_GUIDE.md`.

---

## 3.2 Instalación

```bash
npm install
```

---

## 3.3 Ejecución

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación quedará disponible en la dirección indicada por Vite, normalmente:

```text
http://localhost:5173
```

---

## 3.4 Validación

Antes de realizar cualquier modificación, es recomendable comprobar que el proyecto se ejecuta correctamente y que todas las validaciones disponibles se superan sin errores.

```bash
npm run typecheck
npm test
npm run build
```

La estrategia de pruebas y el proceso de validación se describen con mayor detalle en `TESTING.md` y `DEVELOPMENT_GUIDE.md`.

---

# 4. Documentación

La documentación del proyecto se organiza en varios conjuntos documentales especializados.

Cada uno posee una responsabilidad claramente delimitada y complementa al resto del sistema documental.

## Documentación general

| Documento            | Contenido                                          |
| -------------------- | -------------------------------------------------- |
| `INTRODUCTION.md`    | Guía de navegación de la documentación.            |
| `VISION.md`          | Propósito y principios generales del proyecto.     |
| `PRODUCT.md`         | Definición funcional del producto.                 |
| `PROJECT_STATUS.md`  | Estado actual del proyecto y punto de reanudación. |
| `PROJECT_JOURNAL.md` | Registro histórico del desarrollo.                 |
| `ROADMAP.md`         | Evolución estratégica prevista.                    |
| `DESIGN_JOURNAL.md`  | Ideas e hipótesis pendientes.                      |

---

## Documentación conceptual

La teoría conceptual desarrollada durante la investigación se encuentra en:

```text
docs/conceptual-model/
```

Su lectura recomendada sigue el siguiente orden:

```text
Marco teórico
        ↓
Investigación
        ↓
Fenómenos fundamentales
        ↓
Reducción fenomenológica
        ↓
Exigencias estructurales
        ↓
Perfil funcional
        ↓
Axiomas
        ↓
Modelo conceptual
        ↓
Reconstrucciones
        ↓
Modelo de plataforma
        ↓
Auditorías finales
```

Toda esta documentación ha sido sometida al Protocolo de Consolidación Documental (PCD), garantizando la coherencia conceptual y la trazabilidad del proceso de investigación.

---

## Documentación de desarrollo

| Documento              | Contenido                                                  |
| ---------------------- | ---------------------------------------------------------- |
| `ARCHITECTURE.md`      | Organización técnica del sistema.                          |
| `DEVELOPMENT_GUIDE.md` | Proceso y convenciones de desarrollo.                      |
| `TESTING.md`           | Estrategia y organización de pruebas.                      |
| `AGENTS.md`            | Instrucciones para agentes de desarrollo asistidos por IA. |

---

## Orden recomendado de lectura

Para comprender el proyecto desde el principio se recomienda el siguiente recorrido:

```text
README.md
        ↓
INTRODUCTION.md
        ↓
VISION.md
        ↓
PRODUCT.md
        ↓
Documentación conceptual
        ↓
ARCHITECTURE.md
        ↓
DEVELOPMENT_GUIDE.md
        ↓
PROJECT_STATUS.md
```

Esta organización evita duplicidades, facilita el mantenimiento de la documentación y permite que el proyecto evolucione de forma coherente.

---

# 5. Cómo contribuir

Las contribuciones al proyecto son bienvenidas siempre que respeten la visión, la arquitectura y las convenciones definidas para el repositorio.

Antes de realizar cualquier modificación, se recomienda consultar la documentación de desarrollo para comprender la organización del proyecto, el flujo de trabajo y los criterios de validación aplicables.

En particular:

- `DEVELOPMENT_GUIDE.md` describe el proceso de desarrollo y las convenciones del proyecto.
- `TESTING.md` define la estrategia de pruebas y los criterios de validación.
- `ARCHITECTURE.md` explica la organización técnica del sistema y las responsabilidades de cada capa.
- `AGENTS.md` contiene las instrucciones específicas para agentes de desarrollo asistidos por IA.

Las modificaciones que afecten al núcleo conceptual deberán respetar el Protocolo de Consolidación Documental (PCD) y mantener la coherencia con la arquitectura documental consolidada.

Toda contribución deberá actualizar la documentación afectada cuando modifique el producto, la arquitectura, el proceso de desarrollo o cualquier otro aspecto relevante del proyecto.

---

# 6. Licencia

Este proyecto se distribuye bajo la licencia MIT.

El texto completo de la licencia puede consultarse en el archivo `LICENSE` del repositorio.
