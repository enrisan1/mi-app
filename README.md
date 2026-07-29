1. ¿Qué es el proyecto?

2. Estado del proyecto

3. Primeros pasos
   - Requisitos
   - Instalación
   - Ejecución

4. Documentación

5. Cómo contribuir

6. Licencia

# 1. ¿Qué es este proyecto?

Este repositorio contiene el desarrollo de una plataforma orientada a la creación, gestión, publicación, difusión y preservación del conocimiento mediante documentos.

El proyecto se desarrolla de forma incremental utilizando una aplicación de gestión de tareas como dominio de referencia para diseñar, implementar y validar progresivamente la arquitectura, el modelo del producto y el proceso de desarrollo.

Además de la implementación del software, el repositorio documenta las decisiones, principios y conocimientos adquiridos durante su evolución. La documentación forma parte del propio proyecto y constituye un recurso para comprender no solo el resultado obtenido, sino también el proceso seguido para construirlo.

El objetivo es desarrollar un producto sostenible, una arquitectura mantenible y una documentación que permita preservar y compartir el conocimiento generado durante su construcción.

# 2. Estado del proyecto

El proyecto se encuentra en una fase de desarrollo activo.

La arquitectura principal del sistema, la estrategia de desarrollo, la organización de la documentación y el proceso de validación han alcanzado un nivel de estabilidad que permite centrar las siguientes iteraciones en la evolución del producto y de su modelo de dominio.

La implementación actual utiliza una aplicación de gestión de tareas como dominio de referencia para validar progresivamente las decisiones de diseño, la arquitectura y el proceso de desarrollo. A partir de esta base, el proyecto continuará evolucionando hacia la plataforma de gestión del conocimiento definida en la documentación.

La información detallada sobre el estado del desarrollo, las funcionalidades implementadas y los próximos objetivos puede consultarse en PROJECT_STATUS.md.

# 3. Primeros pasos

Este apartado reúne la información mínima necesaria para preparar el entorno de desarrollo, ejecutar la aplicación y comprobar que el proyecto funciona correctamente.

La guía completa del proceso de desarrollo, las convenciones del proyecto y el flujo de trabajo se encuentran en DEVELOPMENT_GUIDE.md.

## 3.1 Requisitos

Antes de comenzar, asegúrate de disponer de las herramientas necesarias para ejecutar el proyecto.

Requisitos mínimos:

Node.js
npm
Git

Las versiones recomendadas y la configuración detallada del entorno de desarrollo se describen en DEVELOPMENT_GUIDE.md.

## 3.2 Instalación

npm install

## 3.3 Ejecución

Inicia el servidor de desarrollo:

npm run dev

La aplicación quedará disponible en la dirección indicada por Vite, normalmente:

http://localhost:5173

## 3.4 Validación

Antes de realizar cualquier modificación, es recomendable comprobar que el proyecto se ejecuta correctamente y que todas las validaciones disponibles se superan sin errores.

npm run typecheck
npm test
npm run build

La estrategia de pruebas y el proceso de validación se describen con mayor detalle en TESTING.md y DEVELOPMENT_GUIDE.md.

# 4. Documentación

La documentación del proyecto se organiza en un conjunto de documentos especializados, cada uno responsable de un aspecto concreto del sistema. Se recomienda comenzar por INTRODUCTION.md, que ofrece una visión general del sistema documental. Para consultar el significado preciso de los principales términos utilizados en la documentación, puede recurrirse a GLOSSARY.md.

| Documento              | Contenido principal                                               |
| ---------------------- | ----------------------------------------------------------------- |
| `INTRODUCTION.md`      | Guía de navegación de la documentación.                           |
| `GLOSSARY.md`          | Lenguaje de referencia del proyecto.                              |
| `VISION.md`            | Propósito y principios del proyecto.                              |
| `PRODUCT.md`           | Definición funcional del producto.                                |
| `ARCHITECTURE.md`      | Organización técnica del sistema.                                 |
| `DEVELOPMENT_GUIDE.md` | Proceso y convenciones de desarrollo.                             |
| `TESTING.md`           | Estrategia y organización de las pruebas.                         |
| `PROJECT_STATUS.md`    | Estado actual del proyecto y punto de reanudación del desarrollo. |
| `PROJECT_JOURNAL.md`   | HRegistro histórico del desarrollo y de las decisiones adoptadas. |
| `ROADMAP.md`           | Líneas estratégicas de evolución.                                 |
| `DESIGN_JOURNAL.md`    | Ideas e hipótesis pendientes de evaluación.                       |
| `AGENTS.md`            | Instrucciones para agentes de desarrollo asistidos por IA.        |

Cada documento desarrolla una responsabilidad específica y complementa al resto del sistema documental. Esta organización evita duplicidades, facilita el mantenimiento de la documentación y permite que el proyecto evolucione de forma coherente.

# 5. Cómo contribuir

Las contribuciones al proyecto son bienvenidas siempre que respeten la visión, la arquitectura y las convenciones definidas para el repositorio.

Antes de realizar cualquier modificación, se recomienda consultar la documentación de desarrollo para comprender la organización del proyecto, el flujo de trabajo y los criterios de validación aplicables.

En particular:

DEVELOPMENT_GUIDE.md describe el proceso de desarrollo y las convenciones del proyecto.
TESTING.md define la estrategia de pruebas y los criterios de validación.
ARCHITECTURE.md explica la organización técnica del sistema y las responsabilidades de cada capa.
AGENTS.md contiene las instrucciones específicas para agentes de desarrollo asistidos por IA.

Toda contribución deberá mantener la coherencia con la documentación del proyecto y actualizar los documentos afectados cuando los cambios modifiquen el producto, la arquitectura, el proceso de desarrollo o cualquier otro aspecto documentado.

# # 6. Licencia

Este proyecto se distribuye bajo la licencia MIT.

El texto completo de la licencia puede consultarse en el archivo `LICENSE` del repositorio.
