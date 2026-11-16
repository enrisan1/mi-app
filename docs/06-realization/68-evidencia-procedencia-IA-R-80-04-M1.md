# Evidencia de procedencia IA para R-80-04-M1

**Fecha:** 16/11/2026  
**Estado:** EVIDENCIA EXPERIMENTAL FIJADA.  
**Actuación:** `R-80-04-M1 — Testigo mínimo de apoyo IA separado de la obra`.  
**ID de evidencia:** `E-IA-80-04-M1-01`.

---

# 1. Finalidad

Fijar una aportación concreta de procedencia IA real para usarla de forma
idéntica en M1-A y M1-B.

Esta evidencia no pretende demostrar:

- calidad general del modelo;
- suficiencia de un proveedor;
- integración API;
- reproducibilidad estocástica;
- ni validez universal de cualquier salida de IA.

Demuestra únicamente que el texto auxiliar usado en el contraste fue generado
por una IA real y queda documentalmente trazable.

---

# 2. Sistema generador declarado

~~~text
sistema
→ ChatGPT

modelo
→ GPT-5.6 Sol

fecha
→ 16/11/2026
~~~

La salida fue generada en la conversación de trabajo que dirige esta actuación.

---

# 3. Obra de partida controlada

~~~text
Estoy redactando una explicación sobre por qué separar detección,
juicio y ejecución ayuda a preservar la decisión humana.
~~~

---

# 4. Prompt exacto

~~~text
Actúa únicamente como apoyo auxiliar para esta obra. No redactes el texto final
ni decidas por el autor. Propón tres cuestiones breves que convendría comprobar
antes de continuar la explicación.
~~~

---

# 5. Salida exacta generada

~~~text
1. ¿Qué parte del proceso sigue requiriendo una decisión humana y cuál puede delegarse sin sustituirla?

2. ¿Cómo puede verificarse que una ejecución automática corresponde exactamente a una decisión ya adoptada?

3. ¿Qué señal permitiría detectar que una ayuda auxiliar está empezando a influir indebidamente en el juicio que debía conservar la persona?
~~~

---

# 6. Uso experimental

La salida anterior será la aportación `X`.

Debe usarse literalmente igual en:

~~~text
M1-A
→ X insertado en el mismo contenido de obra,
  con marca visible de procedencia IA

M1-B
→ X mantenido en estado auxiliar separado
  y asociado a la misma obra
~~~

No deberá reescribirse, resumirse ni regenerarse entre recorridos.

---

# 7. Qué queda acreditado

~~~text
X
→ procedencia IA real documentada

prompt
→ conservado

salida
→ conservada literalmente

modelo declarado
→ conservado

misma X en M1-A y M1-B
→ exigido por contrato experimental
~~~

No queda acreditado criptográficamente el origen.

La evidencia es experimental/documental y suficiente para el alcance de
R-80-04-M1, donde la procedencia debe ser real pero no se está diseñando todavía
un mecanismo de autenticación de contenido generado por IA.
