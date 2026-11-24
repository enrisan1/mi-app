# 140 — Cierre de R-ENG-HANDOFF-01 / transferencia técnica

**Fecha:** 24/11/2026  
**Estado:** CERRADA EN SU ALCANCE.  
**Precedentes:** [138](138-CIERRE_R-ENG-BASE-04_BASELINE_INGENIERIA.md), [139](139-CI-ENG-BUILD-01_GATE_SELECCION_CONSTRUCCION.md).  
**Producción:** SIN CAMBIOS.

---

# 1. Objeto

R-ENG-HANDOFF-01 se abrió para comprobar si un ingeniero nuevo podría recibir el repositorio vigente y comenzar a trabajar desde una baseline técnica reproducible y orientable sin reconstruir meses de historia documental.

El alcance se redujo deliberadamente a dos preguntas:

~~~text
A — runtime reproducible

B — mapa mínimo de contratos
    y recorridos críticos
~~~

No se abrió:

- nueva funcionalidad;
- nuevo contrato de Product;
- refactorización;
- catálogo exhaustivo de capacidades;
- reconstrucción histórica general.

---

# 2. R-ENG-HANDOFF-01-A — runtime reproducible

## 2.1 Hallazgo inicial

La entrada técnica ordinaria presentaba una ambigüedad:

~~~text
README
→ requería Node.js
→ remitía a DEVELOPMENT_GUIDE
  para versiones

DEVELOPMENT_GUIDE
→ no fijaba versión

package.json
→ sin engines

.nvmrc
→ ausente

deployment
→ Node 22
~~~

El entorno local que había validado la baseline utilizaba:

~~~text
Node.js
→ 20.20.2

npm
→ 10.8.2
~~~

Por tanto no era correcto inferir sin prueba que Node 22 debía ser el runtime canónico.

## 2.2 Validación de Node 22.12.0

Se comprobó primero la disponibilidad exacta del runtime:

~~~text
Node.js
→ 22.12.0

npm
→ 10.8.2
~~~

Después se ejecutaron bajo Node 22.12.0:

~~~text
typecheck
→ PASS

regresión completa
→ 83/83 archivos PASS
→ 598/598 tests PASS

lint
→ PASS

build
→ PASS
→ warning conocido de chunk >500 kB
~~~

Resultado:

~~~text
Node 22.12.0
→ BASELINE VALIDADA
~~~

El runtime local anterior también permanece empíricamente validado:

~~~text
Node 20.20.2
→ baseline validada
~~~

## 2.3 Corrección mínima

Se introdujo:

~~~text
.nvmrc
→ 22.12.0

package.json
→ engines.node
→ ^20.19.0 || ^22.12.0

README.md
→ Node 22.12.0 como runtime de referencia
→ npm ci para instalación reproducible

DEVELOPMENT_GUIDE.md
→ misma referencia de runtime
→ npm ci
~~~

Commit:

~~~text
7410546 docs(dev): make technical handoff reproducible
~~~

Resultado:

~~~text
R-ENG-HANDOFF-01-A
→ CERRADA
~~~

---

# 3. Incidencia temporal observada durante la validación

Durante una ejecución completa de la regresión bajo el entorno local ordinario apareció:

~~~text
src/App.ce-miapp-scale.test.tsx
T-CE-MIAPP-02
→ timeout a 5034 ms
→ límite configurado: 5000 ms
~~~

La reducción posterior produjo:

~~~text
test aislado
→ PASS

repetición de suite completa
→ 83/83 archivos PASS
→ 598/598 tests PASS

fallo de aserción
→ ninguno
~~~

Clasificación:

~~~text
regresión funcional
→ NO demostrada

sensibilidad temporal / flake de harness
→ evidencia compatible

bloqueo de handoff
→ NO
~~~

La incidencia se conserva como límite técnico conocido no bloqueante.

---

# 4. R-ENG-HANDOFF-01-B — mapa mínimo de contratos

La inspección de los tests integrados mostró que los contratos esenciales del producto ejecutable ya estaban materializados.

No era necesario crear contratos nuevos, sino reducir una ruta técnica mínima de orientación.

El mapa resultante quedó compuesto por cuatro familias:

~~~text
C1 — continuidad ordinaria

C2 — capacidades auxiliares
     integradas y separadas del trabajo

C3 — trayectoria de conocimiento
     y recorrido global

C4 — frontera externa de apoyo IA
~~~

## 4.1 Continuidad ordinaria

Entrada principal:

~~~text
src/App.human-continuity.test.tsx
~~~

Protege, entre otras propiedades:

~~~text
crear / continuar
→ mismo hilo

remount
→ trabajo actual preservado
→ antecedente recuperable

PostV1
→ acción distinta y explícita

estado incompatible
→ recuperación hacia App ordinaria utilizable
~~~

## 4.2 Capacidades auxiliares integradas

Entradas:

~~~text
src/App.capture.integration.test.tsx
src/App.comparison.integration.test.tsx
src/App.author-identity.integration.test.tsx
src/App.ai-support.integration.test.tsx
~~~

Principio común:

~~~text
capacidad auxiliar
→ opera desde/sobre el trabajo ordinario

pero
→ no lo sustituye
→ no lo corrompe
→ no reclasifica indebidamente
  sus materiales
~~~

## 4.3 Trayectoria integrada

Entrada principal:

~~~text
src/App.knowledge-trajectory.system-e2e.test.tsx
~~~

Demuestra el recorrido global integrado desde fuentes hasta resultado posterior reconstruible.

Profundización contractual:

~~~text
src/App.knowledge-trajectory.final-convergence.test.tsx
~~~

Debe consultarse cuando un cambio afecte:

- estructura;
- razones;
- participantes;
- procedencia;
- navegación de trayectoria.

## 4.4 Frontera del servicio IA

Entrada:

~~~text
workers/ai-support/src/index.test.ts
~~~

Protege la frontera del endpoint, incluyendo:

- validación de entrada;
- CORS;
- rate limiting;
- Turnstile;
- llamada al proveedor;
- tratamiento controlado de fallos.

---

# 5. HandoffExperience y patrimonio histórico

Se examinó específicamente si:

~~~text
src/realizations/handoff/HandoffExperience.test.tsx
~~~

debía formar parte del mapa ordinario.

Resultado:

~~~text
HandoffExperience
→ testigo realizativo válido

pero
→ NO constituye la puerta
  ordinaria principal del producto vigente
~~~

La continuidad contextual está ya mediada por la App ordinaria.

Por tanto, el handoff técnico no debe obligar a un ingeniero nuevo a recorrer testigos históricos salvo que una investigación concreta lo requiera.

---

# 6. Corrección documental mínima

El mapa de orientación se incorporó únicamente a:

~~~text
docs/10-development/DEVELOPMENT_GUIDE.md
→ §6.1 Mapa técnico mínimo
   para orientación y handoff
~~~

No se creó:

- catálogo exhaustivo;
- documentación histórica nueva;
- duplicación en TESTING.md;
- nuevos tests;
- cambio de producción.

Resultado:

~~~text
R-ENG-HANDOFF-01-B
→ CERRADA
~~~

---

# 7. Estado final

~~~text
R-ENG-HANDOFF-01-A
→ CERRADA

R-ENG-HANDOFF-01-B
→ CERRADA

R-ENG-HANDOFF-01
→ CERRADA EN SU ALCANCE
~~~

La transferencia técnica queda expresada mediante:

~~~text
runtime de referencia
→ Node 22.12.0

compatibilidad declarada
→ ^20.19.0 || ^22.12.0

instalación reproducible
→ npm ci

validación
→ typecheck
→ test:regression
→ lint
→ build

orientación contractual
→ mapa mínimo de tests-ancla
  en DEVELOPMENT_GUIDE.md
~~~

---

# 8. Conclusión

La evidencia actual sostiene:

> Un ingeniero competente puede recibir el repositorio vigente, preparar un entorno reproducible, ejecutar la baseline, localizar los contratos técnicos principales y orientar una modificación pequeña sin reconstruir materialmente la historia extensa del proyecto.

Esto no implica que la historia documental sea prescindible para cambios de alcance, Product, arquitectura o fundamento estratégico.

Sí implica que:

~~~text
handoff técnico ordinario
→ NO depende materialmente
  de arqueología documental

ingeniería incremental
→ base de trabajo válida

reconstrucción estratégica profunda
→ reservada para cambios
  que realmente la necesiten
~~~
