# Priorización post-OB-80-NEXT-01 y siguiente obligación

**Fecha:** 16/11/2026  
**Estado:** PROPUESTA DE PRIORIDAD; pendiente de aceptación humana.

---

# 1. Punto de partida

Tras el cierre de `OB-80-NEXT-01`:

```text
C-PV-80-01
→ realizabilidad mínima demostrada
→ patrón mínimo materialmente suficiente en el caso observado

OB-80-NEXT-01
→ REALIZADA
→ CERRADA

R-80-01-M1
→ CERRADA
```

El Manual 17 exige volver al mapa estratégico y no prolongar automáticamente
la vertical recién cerrada.

Quedan como compromisos post-KGV sin suficiencia realizativa demostrada en este
ciclo:

- `C-PV-80-03 — Identidad autoral elegible`;
- `C-PV-80-04 — Apoyo auxiliar de IA separado de la obra`.

---

# 2. ¿Queda una obligación necesaria dentro de C-PV-80-01?

No se ha observado una dependencia constitutiva adicional.

El alcance inicial de Product exigía:

```text
aportación breve
+
conservación fiable
+
referencia temporal suficiente
+
recuperación posterior
+
interrupción suficientemente reducida
```

Ese patrón ha quedado demostrado en R-80-01-M1.

Durante el contraste no apareció una pérdida independiente que obligue a abrir:

- clasificación;
- inbox universal;
- búsqueda;
- organización automática;
- captura desde aplicaciones externas;
- multimodalidad;
- sincronización.

Por tanto:

```text
continuar C-PV-80-01 por mera mejora
→ NO DERIVADO
```

La integración o arquitectura definitiva podrá reaparecer en convergencia de
producto si el mapa global la exige, pero no constituye ahora la siguiente
obligación mínima.

---

# 3. Corrección de una incertidumbre histórica de C-PV-80-03

Durante la fase candidata se formuló la discriminación:

```text
alias persistente reutilizable
vs
firma libre por obra
```

Esa pregunta ya no permanece abierta después de Product.

El compromiso seleccionado dice expresamente:

> El producto deberá poder permitir que una persona mantenga una identidad
> operativa principal y elija, para una obra o publicación, una identidad
> autoral reutilizable distinta cuando así lo determine.

Por tanto:

```text
reutilización de identidad autoral
→ YA ES PARTE DEL COMPROMISO PRODUCT

volver a decidir si basta una firma libre
→ NO CORRESPONDE
```

La siguiente obligación debe comprobar realizabilidad/suficiencia mínima de la
separación ya comprometida, no reabrir su selección.

---

# 4. Estado realizativo de C-PV-80-03

La inspección de las realizaciones de publicación existentes muestra:

```text
PublicationExperience
→ trabajo
→ referencia estable
→ publicación

EvaluablePublicationExperience
→ publicación
→ soporte evaluativo separado
```

No existe en esos testigos:

- identidad operativa diferenciada de autoría;
- colección de identidades autorales elegibles;
- asociación obra↔identidad autoral;
- selección explícita de firma;
- reutilización de una identidad autoral en otra obra.

La aparición histórica de una frase sobre alias en otra realización no constituye
evidencia de un sistema de identidad autoral.

Por tanto:

```text
C-PV-80-03
→ NO ABSORBIDO por realizaciones existentes
```

---

# 5. Estado realizativo de C-PV-80-04

C-PV-80-04 permanece vigente.

Existe un antecedente estructural parcial:

```text
EvaluablePublicationExperience
→ soporte asociado a una publicación
→ soporte distinguible del contenido publicado
```

Pero:

```text
soporte evaluativo
≠
apoyo de IA
```

y el testigo no demuestra:

- aportación auxiliar producida por IA;
- asociación de apoyo IA a una obra en curso;
- separación funcional específica obra/apoyo IA.

Su discriminante histórico sigue siendo más acoplado:

```text
separación estructural real
vs
simple etiquetado/procedencia
```

y debe evitar quedar absorbido por PV-005/PV-006.

---

# 6. Comparación cualitativa

## C-PV-80-03

Ventajas para ser siguiente vertical:

- compromiso semánticamente muy delimitado;
- diferencia no absorbida por código existente;
- no requiere servicio externo;
- testigo mínimo reversible;
- bajo riesgo de inflación;
- criterio de cierre fácilmente observable.

Riesgo principal:

- sobreconstruir cuentas, autenticación, privacidad o identidad legal;
- debe evitarse expresamente.

## C-PV-80-04

Ventajas:

- valor estratégico alto;
- existe antecedente estructural reutilizable de separación de soporte.

Riesgos:

- mayor acoplamiento con PV-005/PV-006;
- necesidad de caso específicamente IA;
- riesgo de expandirse hacia generación, agentes, procedencia o edición;
- mayor dificultad para aislar qué parte de la diferencia pertenece realmente
  al nuevo compromiso.

Conclusión cualitativa:

```text
C-PV-80-03
→ siguiente obligación más limpia y discriminable

C-PV-80-04
→ permanece vigente
→ siguiente candidata después de resolver C-PV-80-03,
  salvo nueva evidencia que cambie la prioridad
```

---

# 7. Siguiente obligación propuesta

**OB-80-NEXT-02 — demostrar la realizabilidad y suficiencia mínima de separar una identidad operativa principal de una identidad autoral reutilizable elegible por obra o publicación.**

La obligación no consiste en implementar un sistema general de identidad.

Debe demostrar mínimamente que:

1. existe una identidad operativa principal;
2. existe al menos una identidad autoral distinta y reutilizable;
3. la persona puede elegir explícitamente la identidad autoral de una obra;
4. la elección no modifica la identidad operativa;
5. una misma identidad autoral puede reutilizarse en otra obra;
6. distintas obras pueden quedar asociadas a identidades autorales distintas;
7. cambiar la identidad autoral de una obra no modifica automáticamente su contenido;
8. la identidad operativa no se convierte forzosamente en firma pública/autoral.

---

# 8. Primera actuación propuesta

`R-80-03-M1 — testigo mínimo de identidad autoral elegible`.

Caso mínimo candidato:

```text
identidad operativa
→ Usuario principal

identidades autorales elegibles
→ Alias A
→ Alias B

obra 1
→ persona selecciona Alias A

obra 2
→ persona selecciona Alias B

obra 3
→ persona reutiliza Alias A
```

El testigo debe hacer observable:

```text
identidad operativa
≠
identidad autoral

selección autoral
→ explícita

reutilización
→ posible

obra
→ no alterada por cambiar firma
```

No debe introducir todavía:

- cuentas múltiples;
- login;
- autenticación;
- identidad legal;
- anonimato fuerte;
- reputación;
- permisos;
- delegación;
- colaboración;
- verificación externa.

---

# 9. Falsadores iniciales

La obligación no quedaría demostrada si:

1. la identidad operativa determina necesariamente la firma;
2. el supuesto alias es sólo texto libre no reutilizable;
3. reutilizar una identidad exige volver a escribirla como valor nuevo;
4. seleccionar autoría altera el contenido de la obra;
5. una obra no conserva de forma identificable la identidad elegida;
6. el testigo sólo funciona introduciendo cuentas/autenticación no comprometidas.

---

# 10. Decisión propuesta

```text
C-PV-80-01
→ no deriva nueva obligación necesaria ahora

C-PV-80-03
→ siguiente compromiso a trabajar

OB-80-NEXT-02
→ siguiente obligación propuesta

R-80-03-M1
→ primera actuación propuesta

C-PV-80-04
→ permanece vigente
→ no descartado
→ pospuesto por mayor acoplamiento y riesgo de inflación
```

Esta propuesta no abre todavía R-80-03-M1.

Requiere aceptación humana antes de abrir la actuación.
