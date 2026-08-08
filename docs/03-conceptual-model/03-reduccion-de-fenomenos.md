# 03-reduccion-de-fenomenos.md

# Reducción de fenómenos

## Objetivo

Este documento investiga si los fenómenos identificados en `02-fenomenos-fundamentales.md` son realmente independientes o si pueden explicarse como consecuencia de otros fenómenos más básicos.

Su finalidad consiste en obtener el conjunto mínimo de fenómenos irreducibles que cualquier teoría estructural del dominio deberá explicar.

En esta etapa todavía:

- no se proponen axiomas;
- no se introduce ninguna firma;
- no se postula ningún perfil funcional;
- no se incorporan nuevos conceptos estructurales.

Únicamente se estudian las relaciones de dependencia existentes entre los fenómenos del catálogo.

---

# Metodología

Cada fenómeno se someterá al siguiente procedimiento de reducción.

1. Intentar eliminar el fenómeno del catálogo.
2. Comprobar si los demás fenómenos continúan pudiendo describirse.
3. Intentar derivarlo a partir de otros fenómenos.
4. Buscar contraejemplos que impidan dicha derivación.
5. Intentar reconstruirlo mediante las hipótesis de reducción disponibles.
6. Clasificar provisionalmente el resultado.

Este procedimiento no pretende demostrar todavía una teoría.

Su finalidad consiste únicamente en identificar qué fenómenos parecen sobrevivir sistemáticamente a todos los intentos de reducción.

---

# Estados posibles

## Irreducible

No puede explicarse mediante otros fenómenos conocidos.

---

## Derivado

Puede obtenerse como consecuencia de otros fenómenos.

---

## Solapado

Describe parcialmente un fenómeno ya recogido en otro elemento del catálogo.

---

## Pendiente

Todavía no existe evidencia suficiente para aceptar ninguna conclusión.

---

# Tabla de reducción

```text
| Id    | Fenómeno                     | Estado      | Depende de                                       | Observaciones                              |
|-------|------------------------------|-------------|--------------------------------------------------|--------------------------------------------|
| F-001 | Persistencia de identidad    | Pendiente   | —                                                | Continúa resistiendo todos los intentos de reducción. |
| F-003 | Evolución                    | Pendiente   | —                                                | No se ha obtenido una reducción satisfactoria. |
| F-004 | Historia                     | Derivado*   | Evolución + Persistencia de identidad + orden     | Hipótesis muy reforzada. Pendiente de cierre definitivo. |
| F-006 | Articulación entre elementos | Pendiente   | —                                                | Principal candidato estructural. |
| F-007 | Composición                  | Pendiente   | Articulación entre elementos (hipótesis)          | Requiere validación completa. |
| F-009 | Continuidad                  | Derivado*   | Persistencia de identidad + Evolución            | Hipótesis muy reforzada. |
| F-010 | Reconstrucción               | Derivado*   | Historia                                          | Pendiente de demostración definitiva. |
```

- **Derivado** indica una reducción provisionalmente aceptada cuya demostración completa continúa desarrollándose en los documentos posteriores.

---

# Investigaciones realizadas

## Historia

### Hipótesis

La historia no constituye un fenómeno irreducible.

Puede emerger cuando concurren:

- persistencia de identidad;
- evolución;
- posibilidad de organizar las variaciones.

### Observaciones

Los distintos casos analizados pueden describirse sin introducir un fenómeno independiente denominado "historia".

Lo que aparece es una organización de evoluciones previamente reconocidas.

### Resultado provisional

La reducción ha resistido los casos estudiados.

La investigación permanece abierta únicamente para descartar posibles contraejemplos.

---

## Continuidad

### Hipótesis

La continuidad no constituye un fenómeno independiente.

Puede obtenerse cuando un mismo elemento mantiene su identidad a pesar de presentar diferencias reconocibles.

### Observaciones

No se ha identificado hasta el momento ningún caso que exija introducir un fenómeno específico de continuidad independiente de la persistencia y de la evolución.

### Resultado provisional

Hipótesis fuertemente reforzada.

Permanece abierta hasta completar la auditoría de completitud.

---

## Reconstrucción

### Hipótesis

La reconstrucción de una evolución no describe un fenómeno nuevo.

Describe la posibilidad de recuperar una evolución previamente conservada.

### Observaciones

La reconstrucción presupone la existencia de una historia o de un mecanismo equivalente que preserve las variaciones.

No introduce una capacidad fenomenológica adicional.

### Resultado provisional

Se considera provisionalmente derivada.

La validación definitiva dependerá de la reducción completa del fenómeno de historia.

---

# Fenómenos candidatos a irreducibles

En el estado actual de la investigación continúan resistiendo sistemáticamente los intentos de reducción:

- persistencia de identidad;
- evolución;
- articulación entre elementos.

Estos fenómenos constituyen los principales candidatos sobre los que continuará la investigación.

La aceptación definitiva de su irreducibilidad queda aplazada hasta completar las auditorías posteriores.

---

# Criterio de aceptación

Un fenómeno podrá considerarse irreducible únicamente cuando:

- no pueda derivarse de otros fenómenos;
- sobreviva a todos los intentos sistemáticos de eliminación;
- aparezca de forma estable en los casos de validación;
- resulte necesario para explicar al menos un fenómeno derivado;
- su eliminación obligue a introducir una nueva capacidad fenomenológica.

---

# Transición hacia las exigencias estructurales

La reducción fenomenológica no identifica todavía funciones, axiomas ni primitivas.

Únicamente delimita el conjunto de capacidades cuya explicación deberá proporcionar la teoría.

El siguiente paso consiste en abandonar el estudio de los fenómenos concretos y preguntar:

> ¿Qué debe ser capaz de hacer cualquier teoría que pretenda reconstruir esos fenómenos?

Esta transición conduce directamente al documento `04-exigencias-estructurales.md`.

---

# Preguntas abiertas

Continúan abiertas las siguientes cuestiones:

- ¿La historia puede demostrarse completamente como reconstrucción derivada?
- ¿La composición puede reducirse íntegramente a la articulación entre elementos?
- ¿Existe algún contraejemplo que obligue a mantener la continuidad como fenómeno independiente?
- ¿Existe algún fenómeno fundamental todavía no identificado?

---

# Estado del documento

La investigación desarrollada en este documento ha permitido distinguir entre fenómenos que resisten los intentos de reducción y fenómenos cuya dependencia respecto de otros aparece cada vez más sólida.

La reducción fenomenológica constituye el puente entre el catálogo de fenómenos y la búsqueda de las exigencias estructurales que deberá satisfacer cualquier teoría candidata.

No determina todavía el perfil funcional ni la firma de la teoría.

Su resultado consiste exclusivamente en delimitar el problema que resolverán los documentos siguientes.
