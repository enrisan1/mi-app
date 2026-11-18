# RED-PROJ-01 — Reducción de la distancia constitutiva y núcleo mínimo de plataforma integrada

**Fecha:** 18/11/2026  
**Estado:** CERRADA — núcleo mínimo, recorrido representativo, integración necesaria y frontera núcleo/evolución determinados.  
**Precedente:** 97-AUD-PROJ-01_REALIZACION_MATERIAL_Y_DISTANCIA_CONSTITUTIVA.md.  
**Objeto:** reducir D-PROJ-01…04 sin convertir Platform Vision en backlog ni presuponer arquitectura.

---

# 1. Pregunta de reducción

La auditoría 97 dejó cuatro diferencias constitutivas:

~~~text
D-PROJ-01
→ núcleo ordinario de trabajo

D-PROJ-02
→ recorrido humano representativo

D-PROJ-03
→ integración de capacidades existentes

D-PROJ-04
→ frontera núcleo / evolución
~~~

La cuestión es:

> ¿Cuál es el mínimo conjunto coherente que debe existir para poder hablar materialmente de una plataforma integrada de trabajo intelectual textual y no de una colección de realizaciones convergidas?

---

# 2. Regla reductiva

No se busca:

- implementar toda Platform Vision;
- integrar literalmente toda Realization histórica;
- crear un modelo universal de documentos;
- resolver colaboración, publicación, agentes, multiformato o versionado general;
- elegir editor, base de datos, router, arquitectura o esquema persistente.

Se busca el mínimo que transforme:

~~~text
capacidades válidas pero separadas
~~~

en:

~~~text
una actividad ordinaria coherente
de trabajo intelectual
de extremo a extremo
~~~

---

# 3. D-PROJ-01 — Núcleo ordinario de trabajo

## 3.1 Falsadores

No basta con:

~~~text
una pantalla con muchas secciones

o

un editor aislado

o

una lista de materiales

o

varias Realizations accesibles
desde el mismo App
~~~

porque cualquiera de esas soluciones puede seguir obligando a reconstruir manualmente:

- qué trabajo está activo;
- qué material se está desarrollando;
- qué antecedentes son pertinentes;
- qué ayudas pertenecen a ese trabajo;
- qué resultado continúa después.

## 3.2 Núcleo mínimo

Se determina:

> **N-PROJ-01 — actividad ordinaria persistente centrada en un trabajo textual actual, desde la que la persona puede crear o retomar ese trabajo, desarrollarlo, conservarlo, recuperar antecedentes pertinentes y continuar sin abandonar el mismo contexto operativo.**

La formulación no presupone una entidad técnica llamada Document, Project, Workspace o similar.

Lo necesario es una propiedad operacional:

~~~text
existe un trabajo actual reconocible
+
su contenido puede desarrollarse
+
su continuidad persiste
+
sus antecedentes pertinentes son recuperables
+
las operaciones auxiliares pertinentes
pueden aplicarse desde ese contexto
~~~

## 3.3 Propiedades mínimas de N-PROJ-01

### N1 — Trabajo actual inequívoco

La persona puede reconocer qué trabajo está desarrollando ahora.

### N2 — Desarrollo textual ordinario

Puede crear y modificar/desarrollar contenido textual dentro de ese trabajo.

No basta con constituir aportaciones aisladas si después debe abandonar el contexto para continuar desarrollándolas.

### N3 — Persistencia y reanudación

Puede interrumpir y volver al mismo trabajo conservando suficientemente el estado necesario para continuar.

### N4 — Antecedentes recuperables

Puede localizar y traer al contexto al menos un material previo pertinente sin sustituir indebidamente el trabajo actual.

### N5 — Continuidad entre antecedentes y resultado

Cuando un material anterior interviene en el trabajo posterior, la relación operacional debe ser suficientemente reconocible para no reducir la actividad a copiar/pegar sin contexto.

No se exige todavía un grafo general de procedencia.

### N6 — Operaciones auxiliares contextuales

Las capacidades auxiliares seleccionadas para el núcleo pueden operar sobre el trabajo actual sin convertirse automáticamente en su contenido ni requerir abandonar el recorrido principal.

### N7 — Determinación humana

La persona mantiene las decisiones pertinentes sobre qué antecedente usar, qué diferencia considerar, qué apoyo incorporar y qué resultado constituir.

---

# 4. D-PROJ-02 — Recorrido humano representativo

Se determina:

> **R-PROJ-01 — crear o retomar un trabajo textual, desarrollarlo, interrumpirlo y reanudarlo, recuperar un antecedente pertinente, utilizarlo para producir una continuación o revisión y conservar el nuevo resultado manteniendo disponibles las posibilidades pertinentes anteriores.**

## 4.1 Recorrido mínimo

~~~text
1. entrar en la plataforma

2. crear un trabajo textual
   o retomar uno existente

3. desarrollar/modificar su contenido

4. conservar e interrumpir

5. volver a la plataforma

6. retomar el mismo trabajo

7. localizar un material/estado anterior pertinente

8. consultarlo y decidir utilizarlo

9. cuando sea pertinente:
   → comparar
   → capturar una idea auxiliar
   → solicitar apoyo IA separado

10. producir una continuación/revisión humana

11. conservar el nuevo resultado
    sin destruir indebidamente
    los antecedentes pertinentes

12. abandonar y volver a retomar
    el trabajo resultante
~~~

No todas las operaciones opcionales de 9 deben utilizarse en cada ejecución.

Lo constitutivo es que puedan entrar en el mismo contexto cuando la actividad las necesite.

## 4.2 Por qué este recorrido es representativo

El recorrido materializa simultáneamente aspectos centrales del Charter:

- crear;
- conservar;
- consultar;
- trabajar intelectualmente;
- transformar/desarrollar;
- recuperar;
- reutilizar;
- utilizar en contextos posteriores.

Y activa sin universalizarlas varias familias de Platform Vision:

- 4.1 evolución/estados;
- 4.2 organización/recuperación/enriquecimiento;
- 4.3 relaciones/reutilización;
- 4.4 transparencia en alcance mínimo;
- 4.6 preservación/continuidad.

No requiere 4.5 colaboración/publicación para demostrar el núcleo individual mínimo.

---

# 5. D-PROJ-03 — Capacidades existentes necesarias dentro del núcleo

Se clasifican las capacidades existentes en tres estratos.

## 5.1 Estrato A — Constitutivas del recorrido principal

Estas capacidades deben formar parte del núcleo ordinario.

### A1 — Creación/desarrollo textual

Procedencia actual:

~~~text
ResumeExperience
+
ordinary.materials
~~~

Propiedad a conservar:

~~~text
crear
+
continuar
+
constituir resultado textual
~~~

Pero la Realization histórica no se declara arquitectura final.

### A2 — Persistencia/reanudación

Procedencia actual:

~~~text
localStorageResumeRepository
+
PostV1IntegratedExperience
+
ordinary.materials
~~~

Propiedad a conservar:

~~~text
interrumpir
→ volver
→ continuar
~~~

### A3 — Recuperación y reutilización

Procedencia actual:

~~~text
Materiales anteriores
+
selección humana
+
Continuar con este material
~~~

Propiedad a conservar:

~~~text
antecedente pertinente
→ recuperable
→ reutilizable
→ sin destruir la pluralidad previa
~~~

### A4 — Preservación de posibilidades pertinentes

Procedencia:

~~~text
PV-002
PV-005
PV-006
C-PV-POST-01
y realizaciones asociadas
~~~

Propiedad a conservar transversalmente.

## 5.2 Estrato B — Operaciones auxiliares contextuales del núcleo

No definen por sí solas la plataforma, pero deben poder operar dentro del contexto del trabajo cuando sean pertinentes.

### B1 — Captura contextual

~~~text
C-PV-80-01
→ conservar idea emergente
  sin abandonar innecesariamente
  la actividad
~~~

### B2 — Comparación humana

~~~text
C-PV-80-02
→ comparar dos materiales relacionados
  sin perder la decisión humana
~~~

### B3 — Apoyo IA separado

~~~text
C-PV-80-04
→ apoyo asociado al trabajo
→ separado de la obra
~~~

La integración requerida aquí no significa que estas tres funciones deban estar permanentemente visibles.

Significa:

~~~text
trabajo actual
→ contexto común

operación auxiliar
→ actúa sobre ese contexto

resultado auxiliar
→ permanece relacionado
  sin convertirse automáticamente
  en contenido principal
~~~

## 5.3 Estrato C — Capacidades válidas pero no constitutivas del núcleo mínimo

### C1 — Identidad autoral elegible

C-PV-80-03 permanece compromiso válido y capacidad ordinaria.

Pero no es necesaria para demostrar el recorrido individual mínimo de creación/desarrollo/continuidad.

Debe permanecer disponible, sin bloquear la constitución inicial del núcleo.

### C2 — Continuidad compartida entre participantes

El patrimonio P1→P2 demuestra propiedades valiosas de relevo.

Sin embargo, colaboración multiusuario ordinaria no es necesaria para el núcleo individual mínimo.

### C3 — Trayectorias especializadas post-V1

Se conservan como patrimonio y evidencia.

No deberán gobernar obligatoriamente la superficie ordinaria futura.

---

# 6. Resultado I-PROJ-01

Se determina:

> **I-PROJ-01 — el núcleo integrado deberá articular creación/desarrollo textual + persistencia/reanudación + recuperación/reutilización + preservación de posibilidades pertinentes, y permitir como operaciones contextuales captura, comparación y apoyo IA; identidad autoral y colaboración no bloquean el primer núcleo.**

Representación:

~~~text
TRABAJO ACTUAL
│
├── crear / desarrollar
├── conservar / reanudar
├── recuperar antecedentes
├── reutilizar / continuar
│
├── [opcional] capturar
├── [opcional] comparar
└── [opcional] solicitar apoyo IA

transversal:
→ determinación humana
→ preservación de posibilidades
→ procedencia suficiente
~~~

---

# 7. D-PROJ-04 — Frontera núcleo / evolución

## 7.1 Platform Vision 4.1 — evolución y estados

### Núcleo

- trabajo textual evoluciona;
- estado actual reconocible;
- al menos antecedentes pertinentes conservados;
- comparación posible cuando sea necesaria.

### Evolución posterior

- versionado general;
- branching;
- snapshots formales;
- publicación inmutable de estados;
- restauración universal.

Resultado:

~~~text
4.1
→ PARCIALMENTE NÚCLEO
→ RESTO EVOLUCIÓN
~~~

## 7.2 Platform Vision 4.2 — organización, recuperación y enriquecimiento

### Núcleo

- recuperación básica de trabajos/materiales;
- selección de antecedentes;
- enriquecimiento contextual mínimo mediante capturas/apoyos asociados.

### Evolución posterior

- taxonomías generales;
- búsquedas avanzadas;
- clasificación automática;
- navegación compleja;
- enriquecimiento semántico universal.

Resultado:

~~~text
4.2
→ PARCIALMENTE NÚCLEO
→ RESTO EVOLUCIÓN
~~~

## 7.3 Platform Vision 4.3 — relaciones y reutilización

### Núcleo

- reconocer qué material anterior interviene como antecedente;
- reutilizarlo sin destruir su identidad;
- permitir comparación con otro material relacionado.

### Evolución posterior

- grafo general;
- relaciones arbitrarias tipadas;
- descubrimiento automático;
- reutilización transproyecto universal.

Resultado:

~~~text
4.3
→ PARCIALMENTE NÚCLEO
→ RESTO EVOLUCIÓN
~~~

## 7.4 Platform Vision 4.4 — evaluación crítica y transparencia

### Núcleo

Sólo lo ya necesario para preservar decisión humana y procedencia suficiente:

- autoría cuando sea aplicable;
- procedencia del apoyo IA;
- distinción de fuentes en comparación;
- no ocultar antecedentes relevantes.

### Evolución posterior

- metodología general;
- evaluación crítica estructurada;
- historial explicativo universal;
- sistema general de fuentes/limitaciones/evidencias.

Resultado:

~~~text
4.4
→ NÚCLEO LIMITADO
→ RESTO EVOLUCIÓN
~~~

## 7.5 Platform Vision 4.5 — colaboración y publicación

No es necesaria para demostrar la plataforma individual mínima.

~~~text
4.5
→ EVOLUCIÓN POSTERIOR
~~~

Esto no descarta la familia ni invalida los compromisos de autoría o el patrimonio de relevo.

Sólo establece que:

~~~text
colaboración/publicación
→ NO bloquean
  N-PROJ-01
~~~

## 7.6 Platform Vision 4.6 — preservación y continuidad

Es constitutiva del núcleo.

~~~text
4.6
→ NÚCLEO
~~~

Debe acompañar todo el recorrido R-PROJ-01.

---

# 8. F-PROJ-01 — Frontera explícita

Se consolida:

| Familia | Núcleo mínimo | Evolución posterior |
| --- | --- | --- |
| 4.1 Evolución/estados | evolución textual + estado actual + antecedentes pertinentes | versionado/restauración/publicación formal |
| 4.2 Organización/recuperación | recuperación básica + antecedentes + enriquecimiento contextual mínimo | organización/búsqueda/clasificación avanzada |
| 4.3 Relaciones/reutilización | antecedente reconocible + reutilización + comparación | grafo/relaciones generales/descubrimiento |
| 4.4 Transparencia | procedencia y distinción suficientes para decisión humana | evaluación crítica general |
| 4.5 Colaboración/publicación | no bloqueante | evolución posterior |
| 4.6 Preservación/continuidad | constitutiva y transversal | robustecimiento posterior |

Resultado:

> **La plataforma mínima integrada es individual y textual; no es universal, colaborativa, multiformato ni publicadora en su primer umbral constitutivo.**

---

# 9. Qué NO forma parte del núcleo

Queda fuera del primer umbral:

- colaboración multiusuario ordinaria;
- publicación;
- multiformato general;
- sincronización distribuida;
- CRDT;
- agentes autónomos;
- MCP;
- RAG;
- grafo general;
- ontología;
- versionado universal;
- workflow configurable;
- taxonomía general;
- búsqueda semántica;
- autenticación general;
- permisos complejos;
- revisión editorial multirol;
- interoperabilidad universal.

Ninguno queda descartado para siempre.

Su exclusión evita que RED-PROJ-01 convierta Platform Vision en backlog.

---

# 10. Falsadores del núcleo formulado

N-PROJ-01 no estará materialmente realizado si ocurre cualquiera de estos casos:

1. crear y retomar siguen siendo recorridos técnicamente separados que obligan a reconstruir el trabajo;
2. el contenido actual no puede desarrollarse como trabajo continuo;
3. recuperar un antecedente obliga a perder o sustituir indebidamente el trabajo actual;
4. las operaciones auxiliares requieren abandonar el contexto y reconstruir manualmente sobre qué trabajo actúan;
5. comparación/apoyo/captura producen copias sin relación suficiente con el trabajo;
6. interrumpir y volver pierde contexto necesario para continuar;
7. el recorrido sólo puede demostrarse mediante fixtures, props especiales, JSON manual o navegación por Realizations históricas;
8. el sistema decide automáticamente qué antecedente, diferencia o apoyo debe incorporarse.

---

# 11. Criterio de suficiencia material del núcleo

El núcleo podrá considerarse materialmente realizado cuando una persona pueda ejecutar R-PROJ-01 desde el punto ordinario de entrada y, sin reconstrucción externa relevante:

~~~text
crear/retomar
↓
desarrollar
↓
conservar/interrumpir
↓
reanudar
↓
recuperar antecedente
↓
usar/comparar/consultar apoyo cuando proceda
↓
producir nueva continuación o revisión
↓
conservar
↓
volver a reanudar
~~~

manteniendo:

~~~text
trabajo actual reconocible
+
antecedentes pertinentes
+
determinación humana
+
posibilidades previas pertinentes
+
separación de ayudas auxiliares
~~~

---

# 12. Resultado de RED-PROJ-01

Se satisfacen las cuatro salidas exigidas por 97:

~~~text
N-PROJ-01
→ DETERMINADO

R-PROJ-01
→ DETERMINADO

I-PROJ-01
→ DETERMINADO

F-PROJ-01
→ DETERMINADO
~~~

Por tanto:

~~~text
RED-PROJ-01
→ CERRADA
~~~

---

# 13. Cuerpo competente para el siguiente paso

El resultado no es todavía una arquitectura ni una funcionalidad aislada.

Es un objetivo integrador finito derivado directamente de la distancia constitutiva demostrada.

Por tanto, el siguiente cuerpo competente no es Implementation ni una nueva investigación de necesidad humana.

Debe formalizarse un horizonte candidato de convergencia material:

> **H-PROJ-INT-01 — Plataforma integrada mínima para trabajo textual individual.**

Formulación candidata:

> Hacer materialmente practicable, desde el producto ordinario, un recorrido persistente de creación, desarrollo, reanudación, recuperación y reutilización de trabajo textual, con acceso contextual a las operaciones auxiliares ya justificadas que resulten pertinentes, preservando determinación humana y posibilidades anteriores necesarias.

Este horizonte todavía:

~~~text
→ NO está aceptado
→ NO deriva arquitectura
→ NO deriva implementación
~~~

Debe someterse al gate constitutivo de horizonte del Manual 17.

---

# 14. Estado resultante

~~~text
RED-PROJ-01
→ CERRADA

N-PROJ-01
→ núcleo mínimo integrado determinado

R-PROJ-01
→ recorrido humano representativo determinado

I-PROJ-01
→ integración mínima necesaria determinada

F-PROJ-01
→ frontera núcleo/evolución determinada

GATE-PROJ-01
→ continúa NO SATISFECHO

distancia constitutiva
→ ya no indeterminada
→ reducida a un objetivo integrador finito

siguiente actuación estratégica
→ formular y someter
  H-PROJ-INT-01
  al gate constitutivo del horizonte
~~~


---

# 15. Declaración inequívoca de continuidad

~~~text
RED-PROJ-01
→ CERRADA

H-PROJ-INT-01
→ HORIZONTE CANDIDATO
→ NO ACEPTADO

siguiente decisión
→ aplicar gate constitutivo del horizonte
~~~
