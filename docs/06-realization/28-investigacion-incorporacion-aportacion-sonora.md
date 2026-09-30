# Investigación de incorporación de una aportación sonora

**Fecha de apertura:** 28/09/2026

**Estado:** Cerrada

## 1. Origen de la investigación

La investigación se abre a partir de una necesidad humana real aparecida
durante el uso y la consideración del producto.

La persona dispone de información cuyo soporte original es un mensaje de voz y
quiere poder incorporarla a la plataforma para trabajar posteriormente con
ella.

La necesidad no se formula inicialmente como soporte de un tipo general de
archivo ni como obligación de introducir una nueva arquitectura multimedia.

La situación de partida es:

- existe una aportación originalmente sonora;
- la persona quiere incorporarla al trabajo;
- quiere poder volver a utilizar su forma sonora;
- quiere poder trabajar también con su contenido en forma textual;
- todavía no está determinado qué debe conservarse, qué debe transformarse ni
  cuándo debe producirse esa transformación.

## 2. Pregunta de investigación

Cuando una aportación pertinente existe originalmente como audio y la persona
quiere trabajar posteriormente tanto con su forma sonora como con su contenido
textual, ¿qué debe permanecer disponible y qué transformaciones deben ser
posibles para no perder posibilidades humanas relevantes?

## 3. Caso empírico

La investigación deberá ejercerse sobre un mensaje de voz real que la persona
quiera incorporar y utilizar efectivamente.

El contenido concreto del mensaje todavía no se fija en este documento.

No se utilizará un audio creado artificialmente para satisfacer la hipótesis.

## 4. Estado de Product

La investigación parte de los compromisos actualmente vigentes:

- `PV-001`;
- `PV-002`;
- `PV-003`;
- `PV-004`.

No se presupone `PV-005`.

La existencia de esta investigación no constituye por sí misma una nueva
vertical de Product.

## 5. Necesidades candidatas a falsar

### H-AUD-01 — Conservación de la forma sonora original

Hipótesis:

La forma sonora original debe permanecer disponible después de obtener una
representación textual.

Criterio de falsación:

Si puede eliminarse el audio original sin perder ninguna posibilidad humana
pertinente en el caso real ejercido, la hipótesis será innecesaria dentro de
ese alcance.

### H-AUD-02 — Disponibilidad de representación textual

Hipótesis:

Para trabajar adecuadamente con la aportación sonora debe poder obtenerse una
representación textual de su contenido.

Criterio de falsación:

Si el trabajo real puede realizarse suficientemente sobre el audio sin requerir
una representación textual, la hipótesis será innecesaria dentro de ese
alcance.

### H-AUD-03 — Correspondencia reconocible entre original y derivación

Hipótesis:

Si permanecen disponibles el audio y una representación textual derivada, debe
poder reconocerse que esa representación procede de ese audio.

Criterio de falsación:

Si la pérdida de dicha correspondencia no elimina ni dificulta ninguna
posibilidad humana pertinente en el caso ejercido, la hipótesis será
innecesaria dentro de ese alcance.

## 6. Política de transcripción todavía no decidida

La investigación no presupone cuál de estas políticas es correcta:

- transcripción automática al incorporar el audio;
- transcripción sólo cuando la persona la solicite;
- otra política que pueda resultar suficiente.

La decisión deberá derivarse de las situaciones ejercidas.

No se considerará suficiente preferir una opción únicamente por comodidad o
intuición.

## 7. Cuestiones que no se derivan todavía

La apertura de esta investigación no justifica todavía:

- soporte general de archivos;
- soporte multimedia general;
- formatos concretos como MP3, WAV u otros;
- edición física del audio;
- recorte de audio;
- separación de hablantes;
- marcas temporales;
- búsqueda general dentro de audio;
- transcripción automática;
- almacenamiento de blobs;
- historial;
- colección de adjuntos;
- nueva arquitectura;
- proveedor externo;
- repositorio de archivos;
- nueva entidad conceptual `Audio`, `File`, `Transcript` o equivalente;
- `PV-005`.

## 8. Método inmediato

La siguiente actuación consiste en seleccionar un mensaje de voz real y
ejercer sobre él la necesidad de trabajo que motivó esta investigación.

Se intentará eliminar, por separado:

1. la necesidad de conservar el audio original;
2. la necesidad de obtener texto;
3. la necesidad de conservar la correspondencia entre ambos;
4. cualquier política concreta de transcripción.

Sólo las diferencias que resistan esta reducción podrán utilizarse como
fundamento para una exigencia posterior.

## 9. Estado de apertura

La investigación queda abierta.

Todavía no se ha demostrado:

- que audio y texto deban coexistir;
- que el audio deba conservarse indefinidamente;
- que una transcripción sea necesaria;
- que la transcripción deba ser automática;
- que deba ser solicitada;
- que exista una nueva responsabilidad de Product;
- ni que sea necesaria una modificación de código.

## 10. Primer caso real — aviso recibido por voz

### 10.1 Situación ejercida

El primer caso real consiste en un mensaje de voz recibido que comunica
información previamente solicitada.

La finalidad humana concreta es conservar esa información para no perderla,
poder consultarla posteriormente y poder responder si fuese necesario.

No existe en este caso una necesidad material de analizar la voz, la
entonación, las pausas u otras propiedades específicamente sonoras.

### 10.2 Falsación de H-AUD-01

Se contrastó si el audio original debía permanecer disponible después de
obtener una transcripción suficiente.

En este caso, una vez disponible una representación textual suficientemente
fiel de la información pertinente, la desaparición del audio original no
eliminaría una posibilidad humana relevante.

Por tanto:

- `H-AUD-01` no resulta necesaria en C1.

### 10.3 Falsación de H-AUD-02

Se contrastó también la situación inversa: conservar únicamente el audio,
permitiendo volver a escucharlo, sin producir transcripción.

La persona considera satisfecha igualmente la necesidad de C1.

Por tanto:

- `H-AUD-02` no resulta necesaria en C1.

### 10.4 Efecto sobre H-AUD-03

C1 no exige la coexistencia de audio y texto.

Al no ser necesarias simultáneamente ambas representaciones, tampoco queda
demostrada en este caso una necesidad de conservar una correspondencia entre
ellas.

Por tanto:

- `H-AUD-03` no queda demostrada por C1.

### 10.5 Residuo mínimo de C1

La reducción del primer caso deja como residuo únicamente:

- la información pertinente debe continuar disponible;
- debe poder recuperarse posteriormente de manera suficiente para el uso
  previsto.

C1 no exige que esa disponibilidad adopte necesariamente forma sonora,
textual o simultáneamente ambas.

Tampoco permite derivar todavía:

- transcripción;
- conservación obligatoria del audio original;
- coexistencia audio/texto;
- correspondencia entre representaciones;
- política automática o manual de transcripción;
- nueva responsabilidad de Product;
- `PV-005`.

## 11. Segundo caso real — conservación de una voz irreemplazable

### 11.1 Situación ejercida

El segundo caso real consiste en una grabación de voz de un familiar que ya no
está.

La finalidad humana principal no consiste en conservar únicamente la
información expresada.

La grabación posee un valor sentimental especial precisamente como
manifestación sonora de esa persona.

### 11.2 Contraste de H-AUD-01

Se examinó si una transcripción suficientemente fiel podría sustituir al audio
original.

En este caso no puede hacerlo.

Aunque una transcripción perfecta conservara íntegramente las palabras, la
eliminación del audio produciría una pérdida humana real e irrecuperable.

Lo perdido no sería principalmente información textual, sino aquello cuyo valor
depende de poder volver a escuchar esa voz concreta.

Por tanto:

- `H-AUD-01` resiste la falsación en C2;
- la conservación del audio original es necesaria dentro de este caso.

### 11.3 Contraste con C1

Los dos primeros casos presentan resultados distintos.

En C1, la finalidad consiste principalmente en conservar información para
consultarla posteriormente.

En C2, la finalidad depende también de conservar la manifestación sonora
original.

Por tanto, no puede establecerse una regla general según la cual una
representación textual suficientemente fiel haga prescindible el audio
original.

### 11.4 Hipótesis candidata resultante

Se introduce provisionalmente:

`H-AUD-04 — No sustituibilidad condicionada del original`

Una representación derivada no puede justificar la eliminación de la forma
original cuando alguna posibilidad humana pertinente depende de propiedades
que esa representación no conserva.

La hipótesis permanece abierta a falsación.

C2 no demuestra todavía:

- necesidad de transcripción;
- necesidad de texto editable;
- coexistencia obligatoria de audio y texto;
- correspondencia obligatoria entre ambos;
- transcripción automática;
- transcripción bajo petición;
- conservación indefinida de todo audio;
- nueva responsabilidad de Product;
- ni `PV-005`.

## 12. Tercer caso real — conferencia utilizada como fuente de trabajo

### 12.1 Situación ejercida

El tercer caso real consiste en el audio de un podcast que contiene una
conferencia.

Una parte de la conferencia constituye una exposición especialmente relevante
cuya información interesa conservar.

El resto contiene además referencias e ideas susceptibles de ser utilizadas en
trabajos posteriores.

La finalidad humana no consiste únicamente en conservar el audio para volver a
escucharlo.

La persona quiere poder trabajar textualmente con su contenido y, al mismo
tiempo, conservar la conferencia original como recurso de apoyo y fuente de
consulta futura.

### 12.2 Contraste de H-AUD-01

Se examinó si el audio original podría eliminarse una vez obtenida una
representación textual suficiente.

En C3 la respuesta es negativa.

El audio continúa teniendo una función posterior como fuente y recurso de
consulta al que puede ser necesario regresar durante nuevos trabajos.

Por tanto:

- `H-AUD-01` resiste la falsación en C3;
- la necesidad de conservar el original no depende aquí principalmente de
  propiedades sentimentales ni específicamente sonoras;
- depende de que el original continúe siendo una fuente útil para actuaciones
  posteriores.

### 12.3 Contraste de H-AUD-02

C3 requiere trabajar activamente con la información, referencias e ideas
contenidas en la conferencia.

El audio por sí solo no satisface suficientemente la forma de trabajo
planteada.

Debe poder obtenerse una representación textual utilizable para el trabajo
posterior.

Por tanto:

- `H-AUD-02` resiste la falsación en C3 respecto de la necesidad de una
  representación textual de trabajo.

C3 no determina todavía que esa representación tenga que ser necesariamente
una transcripción íntegra y literal.

Permanece abierta la suficiencia de:

- transcripción completa;
- transcripción parcial;
- fragmentos seleccionados;
- notas u otras representaciones textuales derivadas.

### 12.4 Contraste de H-AUD-03

Se ejerció la situación en la que audio y texto permanecen disponibles pero se
pierde la posibilidad de reconocer qué texto corresponde a qué audio.

La pérdida elimina posibilidades humanas relevantes.

En particular:

- se pierde la referencia reconocible a la fuente del texto;
- deja de ser posible regresar de manera fiable desde el contenido textual a
  la conferencia original;
- el audio pierde parte de su función como recurso de consulta porque ya no
  puede relacionarse con el contenido por el que fue conservado.

Por tanto:

- `H-AUD-03` resiste la falsación en C3.

La evidencia disponible sólo exige todavía una correspondencia suficiente
entre la representación textual y su fuente sonora.

No demuestra la necesidad de:

- correspondencia por fragmentos;
- marcas temporales;
- sincronización entre texto y audio;
- identificación palabra por palabra;
- segmentación técnica del audio.

### 12.5 Comparación provisional de C1, C2 y C3

Los tres casos producen resultados diferentes.

`C1 — aviso informativo simple`

- audio obligatorio: no;
- texto obligatorio: no;
- coexistencia audio/texto: no;
- correspondencia entre ambos: no.

`C2 — voz de un familiar que ya no está`

- audio original: necesario;
- texto: no demostrado como necesario;
- coexistencia audio/texto: no demostrada;
- correspondencia: no demostrada.

`C3 — conferencia utilizada como fuente de trabajo`

- audio original: necesario;
- representación textual de trabajo: necesaria;
- coexistencia de ambas: necesaria;
- correspondencia reconocible entre ambas: necesaria.

La comparación muestra que ninguna modalidad puede establecerse todavía como
regla universal.

Las necesidades dependen de la situación humana y de las posibilidades que
deben permanecer abiertas en ella.

### 12.6 Estado de H-AUD-04

C3 aporta una segunda razón independiente por la que una representación
derivada no puede sustituir necesariamente al original.

En C2 el original conserva un valor ligado a la propia manifestación sonora.

En C3 el original conserva valor como fuente y recurso de consulta posterior.

Por tanto, `H-AUD-04 — No sustituibilidad condicionada del original` permanece
como hipótesis candidata y recibe apoyo de dos situaciones materialmente
distintas.

Todavía no se eleva a exigencia consolidada ni a compromiso de Product.

## 13. Política de obtención de representación textual

### 13.1 Contraste de transcripción automática

En C3, la incorporación del audio puede tener dos usos temporalmente distintos:

- comenzar a trabajar inmediatamente con el contenido;
- conservar la conferencia y retomarla días o meses después.

La generación automática de una representación textual suficientemente
vinculada al audio no produciría en este caso una pérdida ni un inconveniente
material identificado.

Sin embargo, tampoco resulta necesaria como única política.

La persona considera natural conservar inicialmente el audio y solicitar la
representación textual cuando decida comenzar a trabajar con su contenido.

Por tanto:

- `H-AUD-05 — La transcripción debe producirse automáticamente` no queda
  demostrada como necesidad;
- la automatización es compatible con C3, pero no exigida por C3.

### 13.2 Contraste de transcripción exclusivamente bajo petición

La situación inversa tampoco queda justificada como obligación.

En C3, una representación textual producida automáticamente sería aprovechable
y no generaría una pérdida material identificada.

En C2, si la finalidad permanece exclusivamente sentimental, una transcripción
automática resultaría indiferente.

Si posteriormente surgiera la intención de utilizar aquella aportación como
base para un texto de recuerdo, un artículo, una carta u otro trabajo, la
existencia de una representación textual podría adquirir utilidad.

Por tanto:

- `H-AUD-06 — La transcripción debe producirse únicamente cuando la persona la
  solicita` tampoco queda demostrada.

### 13.3 Resultado provisional

La evidencia disponible no justifica que Product prescriba todavía una política
general de generación automática ni una política general exclusivamente bajo
petición.

Lo que permanece apoyado por C3 es una exigencia más reducida:

- cuando el trabajo con una aportación sonora requiera una representación
  textual, debe ser posible obtenerla.

El momento y mecanismo de producción permanecen abiertos.

## 14. Necesidad emergente — reorientación futura

### 14.1 Observación surgida en C3

C3 puede incorporarse sin ser trabajado inmediatamente.

La conferencia puede conservarse para utilizarse días o meses después.

En esa situación aparece una necesidad distinta de la mera conservación del
audio y distinta también de disponer de una transcripción completa.

La persona considera importante disponer de algún resumen, puntos relevantes
u otra información suficiente que permita reconocer posteriormente el
contenido conservado y recuperar el motivo por el que puede resultar
pertinente.

### 14.2 Reducción de la formulación

No se deriva todavía una necesidad general de `clasificación`.

La situación mínima observada es:

incorporación de una aportación
→ conservación sin trabajo inmediato
→ transcurso de tiempo
→ necesidad posterior de reconocer qué contiene
→ posibilidad de decidir si merece retomarse
→ sin exigir recorrer previamente toda la aportación original.

### 14.3 Hipótesis candidata

Se introduce provisionalmente:

`H-AUD-07 — Orientación posterior sobre una aportación conservada`

Cuando una aportación se conserva para una posible utilización futura, debe
permanecer disponible información suficiente para que la persona pueda
reconocer posteriormente qué contiene y valorar si resulta pertinente
retomarla, sin exigir recorrer previamente toda la aportación original.

`H-AUD-07` permanece abierta a falsación.

No se deriva todavía que dicha información deba consistir en:

- resumen automático;
- puntos clave automáticos;
- transcripción completa;
- título;
- etiquetas;
- categorías;
- notas humanas;
- clasificación general;
- metadatos concretos.

Tampoco se establece todavía que la necesidad sea específica del audio.

## 15. Cambio posterior de finalidad

C2 muestra además que la finalidad de una aportación conservada puede cambiar.

Una grabación inicialmente conservada únicamente por su valor sentimental
puede adquirir posteriormente una finalidad de trabajo, por ejemplo como base
para un texto de recuerdo, una carta, un artículo u otra elaboración.

Por tanto, la finalidad presente en el momento de incorporación no demuestra
por sí sola qué transformaciones posteriores deberán resultar posibles.

Esta observación queda registrada sin elevarse todavía a exigencia independiente
ni a compromiso de Product.

## 16. Reducción de la orientación posterior en C3

### 16.1 Insuficiencia de título y procedencia

Se contrastó si, varios meses después de conservar la conferencia, bastaría con
disponer de su título y procedencia para reconocer suficientemente qué contiene
y por qué había sido conservada.

En C3 esos datos resultan insuficientes.

Permiten identificar la aportación, pero no recuperar suficientemente el motivo
por el que podía resultar pertinente para un trabajo posterior.

### 16.2 Representación mínima suficiente

Se contrastó una representación adicional mínima:

- título;
- procedencia;
- una frase breve que indique por qué se decidió conservar la aportación.

En C3 esta representación resulta suficiente para recuperar la orientación
necesaria.

Por tanto, la necesidad observada no exige:

- resumen completo;
- puntos clave;
- clasificación automática;
- transcripción completa;
- análisis general del contenido.

`H-AUD-07` queda provisionalmente reducida a la necesidad de que pueda
permanecer disponible una indicación suficiente para reconocer posteriormente
por qué se conservó la aportación y decidir si merece retomarse.

No se establece todavía quién debe producir esa indicación ni mediante qué
mecanismo.

### 16.3 Distinción entre orientación y localización

Durante la reducción apareció una posibilidad diferente.

Una indicación como:

`explicación importante sobre Z`

permite recuperar el motivo de conservación.

Una indicación como:

`42:15–48:30`

permite localizar directamente una parte determinada de la aportación original.

Una representación como:

`42:15–48:30 — explicación sobre Z`

puede combinar ambas funciones.

Se distinguen provisionalmente:

- orientación: reconocer por qué una aportación o parte de ella resulta
  pertinente;
- localización: poder regresar al lugar concreto del original donde se
  encuentra aquello que resulta pertinente.

La necesidad de orientación ha aparecido materialmente en C3.

La necesidad de localización selectiva todavía debe ser sometida a falsación.

### 16.4 Nueva hipótesis candidata

Se introduce provisionalmente:

`H-AUD-08 — Retorno selectivo al original`

Cuando sólo una parte de una aportación extensa ha motivado su conservación o
resulta pertinente para un trabajo posterior, debe ser posible regresar a esa
parte sin tener que recorrer nuevamente toda la aportación original.

La hipótesis permanece abierta a falsación.

No se deriva todavía:

- uso obligatorio de minutos;
- timestamps automáticos;
- segmentación del audio;
- sincronización audio-texto;
- transcripción temporizada;
- generación automática de descripciones;
- ni una estructura general de anotaciones.

## 17. Falsación de H-AUD-08 en C3

### 17.1 Insuficiencia de la orientación sin localización

Se contrastó si una indicación suficiente del motivo de conservación podía
satisfacer por sí sola la utilización posterior de la conferencia.

En C3 no resulta suficiente.

La conferencia puede tratar un mismo asunto en varios lugares y no todas sus
apariciones poseen la misma relevancia.

Conocer que una aportación contiene un determinado tema no permite identificar
necesariamente la parte concreta que motivó su conservación o que resulta
pertinente para un trabajo posterior.

### 17.2 Pérdida producida por la falta de localización

La ausencia de una referencia a la posición pertinente produce dos efectos
materiales.

Primero, obliga a recorrer nuevamente una aportación potencialmente extensa
para intentar reencontrar el contenido.

Segundo, puede llegar a impedir de hecho la recuperación de la información
pertinente si la persona no consigue volver a localizarla.

Por tanto, que la información permanezca físicamente contenida en el audio no
garantiza por sí mismo que continúe suficientemente disponible para una
actuación posterior.

### 17.3 Resultado de H-AUD-08

`H-AUD-08 — Retorno selectivo al original` resiste la falsación en C3.

Se precisa provisionalmente como:

Cuando una posibilidad posterior depende de una parte concreta de una
aportación extensa, debe poder conservarse una referencia suficiente para
regresar a esa parte sin tener que reconstruir su localización recorriendo
nuevamente toda la aportación.

En el caso sonoro ejercido, una posición temporal o intervalo constituye un
mecanismo suficiente candidato para realizar esa función.

La investigación no establece todavía que:

- todos los audios deban incorporar marcas temporales;
- las marcas deban generarse automáticamente;
- deba existir segmentación automática;
- una transcripción deba sincronizarse con el audio;
- cada palabra o frase deba disponer de posición temporal;
- ni esta forma de localización sea una exigencia exclusiva del audio.

### 17.4 Distinciones obtenidas

C3 permite distinguir al menos tres funciones:

- conservación: la aportación original continúa existiendo;
- orientación: puede reconocerse por qué resulta pertinente retomarla;
- localización: puede regresarse a la parte concreta pertinente dentro del
  original.

Estas funciones no se consideran todavía responsabilidades arquitectónicas
independientes.

## 18. Insuficiencia de la localización sin motivo de pertinencia

### 18.1 Contraste del intervalo aislado

Se contrastó si, una vez identificada una parte relevante de la conferencia,
bastaría con conservar únicamente su posición temporal o intervalo.

En C3 no resulta suficiente.

Después de un periodo prolongado, volver a escuchar exactamente el mismo
fragmento puede hacer que la persona lo interprete o relacione con asuntos
distintos de aquel que motivó originalmente su conservación.

La posición permite recuperar el fragmento, pero no garantiza recuperar el
matiz o motivo por el que fue considerado pertinente.

### 18.2 Diferencias observadas

C3 permite distinguir provisionalmente:

- contenido: qué se expresa en la aportación;
- localización: dónde se encuentra una parte determinada;
- pertinencia situada: por qué aquella parte fue considerada relevante en la
  situación que motivó su conservación.

Estas diferencias pueden coexistir sin reducirse unas a otras.

Una posición temporal puede conservar la localización y seguir perdiéndose la
pertinencia que justificó guardar el fragmento.

### 18.3 Representación mínima que resiste en C3

Para la situación ejercida resulta suficiente una combinación de:

- una referencia a la posición o intervalo pertinente dentro del original;
- una indicación textual breve que permita recuperar el motivo por el que esa
  parte fue conservada.

No se demuestra que la indicación deba tener una longitud determinada ni una
forma estructurada.

Tampoco se demuestra que deba ser una descripción objetiva del contenido.

Su función observada consiste en preservar suficientemente la razón de
pertinencia para una actuación posterior.

### 18.4 Hipótesis candidata

Se introduce provisionalmente:

`H-AUD-09 — Conservación de pertinencia situada`

Cuando una parte de una aportación se conserva porque resulta pertinente para
una posibilidad humana determinada, debe poder permanecer disponible una
indicación suficiente de esa pertinencia cuando el propio contenido no permita
reconstruirla de manera fiable posteriormente.

`H-AUD-09` permanece abierta a falsación.

No se deriva todavía:

- una entidad general de anotación;
- etiquetas obligatorias;
- categorías;
- comentarios estructurados;
- generación automática del motivo;
- obligación de describir todos los fragmentos;
- ni una nueva responsabilidad de Product.

## 19. Generación asistida y revisión de la indicación de pertinencia

### 19.1 Posibilidad de generación automática

Durante la reducción de C3 se identificó como flujo de trabajo deseable que,
una vez seleccionada una posición o intervalo del audio, el sistema pueda
generar automáticamente una indicación textual breve sobre su contenido.

La persona podría revisar inmediatamente esa indicación.

Si conserva suficientemente la información o matiz relevante, podría aceptarla
sin escribir nada adicional.

Si resulta insuficiente, podría corregirla o completarla antes de conservarla.

Este mecanismo reduciría el esfuerzo humano en aquellos fragmentos donde la
propuesta automática ya resulte suficiente.

### 19.2 Diferencia entre descripción del contenido y motivo de pertinencia

Una descripción correcta del contenido de un fragmento no garantiza que
conserve el motivo particular por el que la persona decidió seleccionarlo.

Por ejemplo, el sistema podría describir correctamente el asunto tratado y,
sin embargo, omitir la relación concreta que ese fragmento tenía con el
trabajo que motivó su conservación.

Por tanto, se mantiene la distinción entre:

- descripción del contenido;
- indicación suficiente de la pertinencia situada.

### 19.3 Hipótesis sobre generación asistida

Se introduce provisionalmente:

`H-AUD-10A — Generación asistida de orientación`

Cuando se selecciona una parte pertinente de una aportación sonora, el sistema
debería poder proponer automáticamente una indicación textual suficiente para
facilitar su recuperación posterior.

La hipótesis permanece abierta.

La preferencia por este mecanismo demuestra por ahora una posible reducción de
esfuerzo, pero no que la generación automática sea una exigencia estructural.

### 19.4 Hipótesis sobre revisabilidad

Se introduce provisionalmente:

`H-AUD-10B — Revisabilidad de la orientación`

Cuando una indicación asociada a un fragmento vaya a utilizarse para recuperar
posteriormente su pertinencia, debe poder corregirse o completarse si no
conserva suficientemente el motivo o matiz relevante para la persona.

Esta hipótesis queda mejor apoyada por C3 que la obligatoriedad de generación
automática.

Todavía no se deriva:

- generación automática obligatoria;
- aceptación explícita obligatoria de cada propuesta;
- modelo concreto de inteligencia artificial;
- interfaz concreta de edición;
- longitud determinada para las indicaciones;
- ni una nueva responsabilidad de Product.

## 20. Corrección frente a acumulación de indicaciones

### 20.1 Contraste de una nota humana añadida junto a la propuesta

Se contrastó si, cuando una indicación generada por el sistema resulta
insuficiente o incorrecta, bastaría con conservarla sin modificación y añadir
junto a ella una segunda indicación escrita por la persona.

En C3 esta solución no resulta suficiente.

La coexistencia posterior de dos indicaciones contradictorias o divergentes
puede introducir confusión precisamente en el momento en que se intenta
recuperar por qué se conservó el fragmento.

La persona tendría que volver a determinar cuál de ambas representa
adecuadamente el motivo relevante.

### 20.2 Necesidad de corrección de la indicación operativa

C3 exige poder corregir la propuesta generada por el sistema cuando ésta no
conserva suficientemente el contenido, motivo o matiz pertinente.

Se distingue provisionalmente:

- propuesta inicial del sistema;
- indicación finalmente utilizada para orientar la recuperación posterior.

Si la propuesta resulta suficiente, puede permanecer sin modificaciones.

Si resulta insuficiente, debe poder ser corregida de forma que la recuperación
posterior disponga de una indicación operativa no contradictoria.

Por tanto:

- `H-AUD-10B — Revisabilidad de la orientación` resiste la falsación en C3;
- añadir una nota independiente no sustituye necesariamente la posibilidad de
  corregir la indicación utilizada para la recuperación posterior.

### 20.3 Alcance de la conclusión

La investigación no establece todavía que la propuesta inicial del sistema
deba eliminarse físicamente después de una corrección.

Tampoco establece todavía:

- necesidad de historial de cambios;
- conservación de versiones anteriores;
- autoría visible de cada modificación;
- mecanismo concreto de edición;
- aprobación formal de cada propuesta;
- ni arquitectura de versiones.

Lo demostrado en C3 es únicamente que una propuesta incorrecta o insuficiente
no debe quedar como orientación operativa competidora con la corrección humana.

## 21. Conservación de propuestas superadas frente a aportaciones complementarias

### 21.1 Contraste de conservación de la propuesta inicial

Se contrastó si, después de que la persona corrija una indicación generada por
el sistema, debe conservarse también la redacción inicial.

En C3 no aparece una necesidad general de hacerlo.

Cuando la propuesta inicial ha sido sustituida porque resulta incorrecta,
insuficiente o no conserva el matiz pertinente, mantenerla posteriormente no
aporta una posibilidad humana relevante y puede resultar completamente
prescindible.

Por tanto, la corrección de una indicación no deriva por sí misma:

- historial de cambios;
- versionado;
- conservación de borradores;
- conservación obligatoria de propuestas automáticas anteriores.

### 21.2 Caso distinto: complementariedad

Existe, sin embargo, una situación diferente.

Después de leer la propuesta del sistema, la persona puede considerar que ésta
conserva información pertinente y que su propia formulación aporta además otro
aspecto también necesario.

En ese caso ambas formulaciones pueden seguir teniendo valor.

La razón para conservarlas no sería que una sea una versión histórica de la
otra, sino que ambas resultan complementarias para el trabajo posterior.

Se distingue por tanto entre:

- formulación superada: ha perdido su función y puede ser prescindible;
- formulación complementaria: conserva una función pertinente propia.

### 21.3 Resultado provisional

La investigación no justifica una política general de conservación de
versiones.

Lo que permanece abierto es si, cuando varias formulaciones continúan siendo
pertinentes de forma complementaria, debe poder conservarse conjuntamente su
aportación sin introducir ambigüedad sobre la orientación utilizada para el
trabajo posterior.

No se deriva todavía:

- historial general;
- múltiples anotaciones obligatorias;
- autoría visible;
- estructura de versiones;
- ni mecanismo concreto de combinación.

## 22. Consolidación de formulaciones complementarias

### 22.1 Contraste de conservación separada

Se contrastó si, cuando una propuesta del sistema y una aportación posterior de
la persona contienen información complementaria, ambas deben permanecer
conservadas como formulaciones independientes.

En C3 no resulta necesario.

Si ambas pueden integrarse en una única redacción sin perder ninguna
información o matiz pertinente, esa redacción consolidada resulta suficiente
para el trabajo posterior.

### 22.2 Irrelevancia de la autoría interna para C3

En la situación ejercida no resulta relevante conservar qué parte de la
redacción final fue propuesta inicialmente por el sistema y qué parte fue
introducida posteriormente por la persona.

Lo relevante es que la indicación finalmente conservada mantenga toda la
información necesaria para recuperar la pertinencia del fragmento.

Por tanto, C3 no deriva:

- autoría diferenciada de cada parte de la indicación;
- conservación separada de formulaciones complementarias;
- historial de su composición;
- versionado de la indicación;
- ni múltiples anotaciones cuando una sola redacción puede conservarlas sin
  pérdida.

### 22.3 Distinción respecto de la procedencia de la fuente

Esta conclusión no elimina la necesidad observada anteriormente de mantener
reconocible la relación entre una representación derivada y su fuente sonora.

Se distinguen:

- procedencia respecto del original: permite reconocer de qué aportación sonora
  procede el material y regresar a ella;
- autoría interna de la indicación: identifica quién formuló cada parte de la
  redacción orientadora.

C3 aporta fundamento para la primera, pero no demuestra necesidad de la
segunda.

### 22.4 Resultado

Cuando varias formulaciones pertinentes pueden consolidarse sin pérdida en una
única indicación suficiente, la conservación de esa redacción consolidada
satisface el caso ejercido.

La pluralidad histórica de formulaciones no constituye por sí misma una
necesidad.

## 23. Selección humana, recomendación y selección delegada

### 23.1 Selección después de escucha humana

Se contrastó la situación en la que la persona ya ha escuchado la aportación y
ha identificado los intervalos que considera pertinentes.

En esta situación, las selecciones adicionales producidas por el sistema
tendrían una función complementaria.

Permitirían comparar la selección humana con otros fragmentos candidatos y
detectar posibles elementos que hubieran pasado inadvertidos.

La persona podría incorporar alguna de esas recomendaciones si la considera
pertinente.

Por tanto, en esta situación la propuesta del sistema no necesita sustituir la
selección ya realizada por la persona.

### 23.2 Selección expresamente delegada

Se identificó una situación diferente cuando la persona no ha escuchado la
aportación y solicita al sistema que realice su estudio.

En ese caso, la selección producida por el sistema constituye el resultado
inicial de una actuación expresamente delegada.

La persona puede utilizar las partes seleccionadas sin haber realizado
previamente una selección propia sobre la totalidad del audio.

Esta situación no puede reducirse a mera recomendación frente a una selección
humana previa, porque dicha selección previa no existe.

### 23.3 Orientación previa al estudio humano

Existe además una situación intermedia.

La persona puede solicitar antes de escuchar o estudiar detenidamente la
aportación:

- un resumen;
- puntos relevantes;
- intervalos candidatos;
- u otra orientación suficiente.

La finalidad es facilitar el trabajo posterior sobre el original.

En este caso, la actuación del sistema precede y orienta una posible selección
humana posterior.

### 23.4 Hipótesis reformulada

Se introduce provisionalmente:

`H-AUD-11 — Selección situada por la actuación humana`

La función de una selección producida por el sistema depende de la actuación
desde la que se solicita.

Puede operar como:

- recomendación complementaria a una selección humana ya realizada;
- orientación previa para facilitar un estudio posterior;
- resultado inicial de una selección expresamente delegada.

La evidencia disponible no justifica todavía reducir estas tres situaciones a
una única política general de selección.

Tampoco demuestra que una selección delegada deba resultar irreversible ni que
el sistema constituya una autoridad definitiva sobre la pertinencia de los
fragmentos.

## 24. Regla transversal de revisabilidad

### 24.1 Resultado de la investigación

La investigación ha mostrado repetidamente que los resultados interpretativos
producidos por el sistema pueden no coincidir suficientemente con aquello que
la persona considera pertinente para su situación de trabajo.

La diferencia puede aparecer en:

- selección de fragmentos;
- descripción de contenido;
- resúmenes;
- identificación de puntos relevantes;
- indicaciones de pertinencia;
- otros resultados interpretativos derivados de la aportación.

La realización inicial de estas actuaciones puede delegarse al sistema.

Esa delegación no convierte, sin embargo, el resultado producido en una
determinación irreversible.

### 24.2 R-AUD-01 — Revisabilidad de resultados interpretativos

Se adopta como regla transversal de esta investigación:

> Todo resultado producido por el sistema que seleccione, describa, resuma,
> interprete o determine la pertinencia del contenido debe poder ser corregido
> o complementado por la persona cuando no represente suficientemente su
> necesidad de trabajo.

La regla se aplica tanto cuando el sistema:

- actúa a petición de la persona;
- propone recomendaciones complementarias;
- proporciona orientación previa;
- como cuando realiza inicialmente una tarea expresamente delegada.

### 24.3 Delegación y autoridad

Se distingue:

- delegación de ejecución: la persona encarga al sistema la realización
  inicial de una actuación;
- autoridad definitiva sobre el resultado: capacidad de determinar que ese
  resultado no puede ser posteriormente corregido o complementado.

La primera queda admitida por los casos ejercidos.

La segunda no queda justificada.

Por tanto:

delegar una actuación al sistema
no implica
hacer irreversible su resultado.

### 24.4 Alcance

`R-AUD-01` constituye una regla transversal de la presente investigación.

No se eleva todavía a compromiso general de Product ni se afirma que toda
salida técnica del sistema deba ser editable.

La regla se refiere específicamente a resultados interpretativos o selectivos
cuya suficiencia depende de la situación humana de trabajo.

No afecta por sí misma a:

- la aportación original conservada;
- datos técnicos cuya función sea registrar un hecho;
- mecanismos internos;
- historial;
- versionado;
- ni autoría.

## 25. Revisabilidad de candidatos descartados

### 25.1 Contraste de una selección ampliable sin acceso a descartes

Se contrastó si resultaría suficiente que el sistema mostrase únicamente los
fragmentos seleccionados y permitiera posteriormente realizar nuevas búsquedas,
ampliar criterios o volver a analizar la aportación original.

En C3 esta posibilidad no resulta suficiente.

La persona considera necesario poder revisar también los candidatos que el
sistema identificó durante el análisis pero excluyó de la selección principal.

Un nuevo análisis no sustituye necesariamente esa revisión, porque puede
aplicar criterios distintos y no permite conocer qué material concreto había
sido considerado y descartado en la actuación anterior.

### 25.2 Diferencia entre selección y desaparición

Se distingue:

- seleccionar: presentar determinados candidatos como resultado principal;
- descartar: no incluir otros candidatos en ese resultado principal;
- hacer inaccesible: impedir que la persona pueda revisar posteriormente un
  candidato ya identificado.

C3 admite la selección y el descarte.

No justifica que el descarte convierta los candidatos identificados en
material inaccesible.

### 25.3 H-AUD-12 — Revisabilidad de exclusiones interpretativas

Se reformula la hipótesis:

> Cuando el sistema realiza una selección interpretativa sobre una aportación
> y excluye candidatos que ha identificado durante esa actuación, la exclusión
> de esos candidatos no debe impedir que la persona pueda revisarlos
> posteriormente.

`H-AUD-12` resiste la falsación en C3.

### 25.4 Relación con R-AUD-01

`R-AUD-01` garantiza la revisabilidad de resultados interpretativos
presentados por el sistema.

`H-AUD-12` cubre una diferencia adicional:

- no sólo debe poder revisarse lo seleccionado;
- también debe poder revisarse aquello que fue identificado pero excluido de
  la selección principal.

Por tanto, la revisabilidad del resultado visible no basta por sí sola para
evitar una clausura producida por la selección automática.

### 25.5 Alcance

La evidencia disponible no demuestra todavía:

- conservación indefinida de todos los descartes;
- presentación conjunta de seleccionados y descartados;
- igualdad de importancia entre ambos;
- historial general de todas las decisiones internas del sistema;
- exposición de razonamientos internos;
- ni conservación de alternativas que nunca llegaron a constituirse como
  candidatos identificables.

Lo demostrado se limita a candidatos identificados durante una actuación de
selección y posteriormente excluidos de su resultado principal.

## 26. Irrelevancia del motivo del descarte para la revisión posterior

### 26.1 Contraste

Se examinó si, al revisar un candidato previamente descartado por el sistema,
la persona necesita conocer también el motivo por el que el sistema decidió
excluirlo de la selección principal.

En C3 esa información no resulta necesaria.

Resulta suficiente poder acceder nuevamente al candidato y revisarlo.

Una vez revisado, la persona puede decidir incorporarlo o mantenerlo descartado
según su propia necesidad de trabajo.

### 26.2 Resultado

Se distingue:

- revisabilidad del candidato descartado: necesaria en C3;
- justificación del descarte producido por el sistema: no necesaria en C3.

La autoridad práctica sobre la utilización posterior del candidato corresponde
a la persona que lo revisa.

Por tanto, `H-AUD-12` no deriva una obligación adicional de conservar o mostrar
las razones por las que el sistema excluyó cada candidato.

### 26.3 Límites

Este resultado no justifica:

- exposición del razonamiento interno del sistema;
- explicación obligatoria de cada selección o descarte;
- trazas generales de decisión;
- historial de criterios internos;
- ni conservación de estados internos del proceso de selección.

La necesidad demostrada continúa limitada al acceso posterior al candidato
identificado y excluido.

## 27. Cierre de un candidato tras revisión humana

### 27.1 Contraste

Se examinó qué debe ocurrir cuando un candidato previamente descartado por el
sistema es posteriormente revisado por la persona y ésta decide que no resulta
pertinente.

En C3 no aparece necesidad de mantener después ese fragmento como candidato
explícitamente seleccionado o revisable.

Una vez realizada la revisión humana y confirmado el rechazo, el candidato
puede dejar de formar parte de ese material de trabajo.

### 27.2 Precisión de H-AUD-12

La necesidad observada no consiste en conservar indefinidamente todos los
candidatos descartados.

Se distingue:

- descarte realizado por el sistema antes de revisión humana:
  debe permanecer revisable;
- rechazo realizado por la persona después de revisar el candidato:
  puede cerrar suficientemente esa posibilidad dentro de C3.

Por tanto, `H-AUD-12` se precisa como:

> Cuando el sistema excluye un candidato identificado durante una actuación
> interpretativa, ese candidato debe permanecer revisable mientras no haya
> sido evaluado por la persona. Una vez revisado y descartado por ésta, C3 no
> exige conservarlo como alternativa explícita de trabajo.

### 27.3 Cierre del candidato y conservación del original

Que un fragmento deje de mantenerse como candidato revisable no implica
eliminarlo de la aportación original.

En C3 el audio original continúa conservado.

Se distingue por tanto entre:

- conservar el contenido original;
- mantener una parte de ese contenido como candidato interpretativo explícito.

El cierre de la segunda función no exige la desaparición de la primera.

### 27.4 Límites

Este resultado no deriva:

- historial permanente de descartes;
- papelera de candidatos;
- mecanismo general de deshacer;
- conservación de todas las alternativas;
- registro de quién rechazó cada candidato;
- ni política temporal de retención de candidatos no revisados.

## 28. Correspondencia localizada entre texto y audio

### 28.1 Dependencia de la fase de trabajo

Se contrastó si la representación textual y los intervalos de la aportación
sonora necesitan mantener una correspondencia localizada.

C3 muestra que la necesidad depende de la fase de trabajo.

Durante una fase de borrador puede resultar necesario regresar desde un
fragmento textual a la parte concreta del audio original para continuar
contrastando, comprobando o elaborando el material.

Una vez completada la elaboración y producido un documento definitivo, esa
correspondencia localizada deja de resultar necesaria para el caso ejercido.

### 28.2 Dirección texto hacia audio

Durante el borrador, conocer únicamente que la transcripción procede de una
determinada conferencia puede resultar insuficiente.

Debe poder localizarse suficientemente en el audio el lugar correspondiente al
fragmento textual pertinente.

Esta necesidad no exige necesariamente navegación automática.

Puede satisfacerse, por ejemplo, mediante:

- una referencia temporal suficientemente precisa;
- un enlace directo al intervalo;
- u otro mecanismo equivalente de localización.

Por tanto, la necesidad observada es la recuperabilidad localizada, no un
mecanismo concreto de navegación.

### 28.3 Dirección audio hacia texto

Se contrastó también la dirección inversa: partir de un intervalo del audio y
acceder directamente al fragmento textual correspondiente.

En C3 esta posibilidad podría mejorar la eficacia durante la elaboración, pero
no resulta fundamental para satisfacer la necesidad ejercida.

En el documento definitivo tampoco se considera necesaria.

Por tanto, C3 no demuestra una exigencia de correspondencia bidireccional.

### 28.4 H-AUD-13 — Recuperabilidad localizada durante la elaboración

Se reformula la hipótesis:

> Mientras una elaboración siga requiriendo contraste o retorno desde una
> representación textual a una parte concreta de la aportación sonora
> original, debe permanecer disponible una referencia suficiente para localizar
> esa parte sin tener que reconstruir manualmente su posición recorriendo el
> original.

`H-AUD-13` resiste la falsación en C3 bajo esta formulación reducida.

### 28.5 Alcance

La evidencia disponible no deriva:

- sincronización bidireccional obligatoria;
- enlace interactivo obligatorio;
- timestamps para todo fragmento textual;
- sincronización palabra por palabra;
- mantenimiento permanente de la correspondencia localizada;
- ni necesidad de esa correspondencia una vez finalizado el trabajo cuando ya
  no existe una actuación que requiera volver al intervalo original.

La procedencia global respecto de la fuente original permanece como cuestión
distinta de la correspondencia localizada entre fragmentos.

## 29. Cobertura temporal de la representación textual seleccionada

### 29.1 Alcance de la localización

Se precisó si las referencias temporales deben aparecer únicamente en algunos
fragmentos considerados especialmente relevantes o a lo largo de toda la
representación textual seleccionada.

En C3, cuando una parte del audio ha sido considerada suficientemente
pertinente como para incorporarse a la representación textual de trabajo, debe
ser posible localizarla de manera suficientemente rápida en la aportación
sonora original.

La necesidad no se extiende a partes del audio que no hayan sido seleccionadas
para su incorporación textual.

Se distingue por tanto entre:

- audio completo;
- partes seleccionadas para representación textual;
- representación textual efectivamente incorporada al trabajo.

### 29.2 Reformulación de H-AUD-13

`H-AUD-13 — Recuperabilidad localizada del material transcrito`

> Mientras una representación textual seleccionada forme parte de una
> elaboración sobre una aportación sonora, cada parte incorporada a esa
> representación debe conservar una referencia suficiente para poder regresar
> con rapidez a su lugar correspondiente en el original.

La hipótesis no deriva:

- transcripción completa del audio;
- referencias temporales sobre partes no transcritas;
- granularidad palabra por palabra;
- ni un formato concreto para expresar la posición.

## 30. Referencias de elaboración y documento definitivo

### 30.1 Diferencia observada

Las referencias que permiten regresar desde la representación textual al audio
original son útiles durante la elaboración.

Una vez producido un documento definitivo, esas referencias pueden dejar de
ser necesarias en la forma destinada a lectura o utilización final.

Se distingue provisionalmente entre:

- contenido elaborado;
- referencias necesarias para el trabajo de elaboración.

La utilidad de las segundas no obliga a que formen parte visible del documento
definitivo.

### 30.2 Problema de gestión individual

Cuando la representación textual es extensa y contiene numerosas referencias,
añadirlas o retirarlas individualmente puede introducir una carga mecánica
innecesaria y dificultar la producción de la forma definitiva del documento.

La necesidad observada no exige todavía un mecanismo concreto.

### 30.3 H-AUD-14 — Gestión conjunta de referencias de elaboración

Se introduce provisionalmente:

> Cuando una representación de trabajo contiene múltiples referencias
> necesarias para regresar al original, debe ser posible producir una forma
> adecuada para otra fase de trabajo sin tener que añadir o retirar
> individualmente cada referencia.

`H-AUD-14` permanece abierta a falsación.

No se deriva todavía:

- botón concreto para mostrar u ocultar referencias;
- eliminación física de las referencias;
- formato específico de exportación;
- generación de una copia separada;
- ni mecanismo determinado de inserción automática.

## 31. Extinción de la correspondencia localizada en el resultado definitivo

### 31.1 Contraste entre ocultación y eliminación

Se contrastó si, al producir un documento definitivo, las referencias
utilizadas durante la elaboración debían únicamente dejar de mostrarse o si
podían eliminarse realmente.

En C3 resulta suficiente eliminarlas.

Una vez concluida la elaboración, el documento definitivo no necesita
permanecer enlazado con los intervalos del audio original para satisfacer la
finalidad ejercida.

Por tanto, la desaparición de esas referencias no constituye una pérdida
relevante dentro de esta fase del caso.

### 31.2 Dependencia de la fase de trabajo

Se distinguen:

- representación textual de elaboración: mantiene referencias suficientes al
  audio mientras sean necesarias para localizar, comprobar y continuar el
  trabajo;
- documento definitivo: puede dejar de mantener esas referencias cuando ya no
  existe una actuación que requiera regresar al audio desde su contenido.

La correspondencia localizada no constituye por tanto una propiedad permanente
de todo resultado textual derivado de una aportación sonora.

### 31.3 Precisión de H-AUD-03

La necesidad de correspondencia observada anteriormente se restringe.

En C3 resulta necesaria cuando audio y representación textual continúan
cooperando dentro de una misma situación de trabajo.

No queda demostrada como necesidad del documento definitivo producido después
de cerrar esa elaboración.

### 31.4 Reformulación de H-AUD-14

`H-AUD-14 — Retirada conjunta de referencias de elaboración`

> Cuando múltiples referencias al original son necesarias durante una
> elaboración pero dejan de cumplir una función en el resultado definitivo,
> debe ser posible retirarlas conjuntamente sin exigir su eliminación
> individual.

En C3 la retirada puede consistir en eliminación efectiva y no únicamente en
ocultación visual.

### 31.5 Independencia respecto de la conservación del original

Eliminar la correspondencia desde el documento definitivo no exige eliminar la
aportación sonora original.

El audio puede continuar conservado como recurso independiente aunque el
documento definitivo ya no mantenga una relación operativa con él.

No se deriva:

- conservación permanente de referencias de elaboración;
- enlace obligatorio entre todo resultado final y sus materiales de trabajo;
- ocultación en lugar de eliminación;
- historial de las referencias retiradas;
- ni mecanismo concreto para realizar la retirada conjunta.

## 32. Destino del material de elaboración después del resultado definitivo

### 32.1 Tres situaciones distintas

Se contrastó qué debe ocurrir con la transcripción y el material de trabajo una
vez producido un documento definitivo.

La investigación muestra que la aparición del resultado definitivo no determina
por sí sola el destino del material utilizado durante su elaboración.

Se distinguen tres situaciones.

#### Material exclusivamente instrumental

La transcripción o material de trabajo puede haber sido producido únicamente
para documentar y realizar un trabajo posterior.

Si, una vez terminado ese trabajo, el material intermedio no conserva ninguna
función humana independiente, puede eliminarse.

#### Transcripción con valor propio

La transcripción puede haber sido creada porque su propio contenido constituye
el resultado que se desea conservar.

En esta situación no queda agotada por la producción de otro documento y debe
poder permanecer disponible.

#### Material con doble función

Una transcripción o elaboración puede haber servido para producir un trabajo
posterior y conservar, además, contenido que interesa mantener de forma
independiente.

La producción del resultado posterior tampoco agota en este caso la función del
material intermedio.

### 32.2 Insuficiencia de políticas universales

No resultan justificadas las reglas:

- todo material de elaboración debe eliminarse después del resultado
  definitivo;
- todo material de elaboración debe conservarse después del resultado
  definitivo.

La persistencia depende de si el material conserva o no una función humana
posterior.

### 32.3 H-AUD-15 — Persistencia contingente del material de elaboración

Se introduce:

> Cuando una representación o material de elaboración haya servido para
> producir un resultado posterior, la aparición de ese resultado no debe
> determinar automáticamente su conservación ni su eliminación. Si el material
> conserva una función humana independiente debe poder permanecer disponible;
> si ha agotado su función debe poder dejar de conservarse.

La forma concreta mediante la que la persona decide conservar o eliminar el
material no se determina todavía.

### 32.4 Fuente recuperable y trabajo elaborado

Conservar el audio original permite recuperar posteriormente el contenido
fuente y obtener una nueva representación textual.

Esto no equivale necesariamente a recuperar el trabajo intelectual previamente
realizado sobre esa representación.

Se distingue:

- contenido fuente recuperable desde el original;
- trabajo elaborado: selecciones, correcciones, indicaciones de pertinencia,
  organización u otras actuaciones deliberadas realizadas sobre ese contenido.

Una nueva transcripción puede recuperar el primero sin reconstruir
necesariamente el segundo.

La eliminación del material elaborado resulta aceptable en aquellas situaciones
en las que dicho trabajo haya agotado su función.

### 32.5 Resultado

La producción de un documento definitivo no constituye por sí sola criterio
suficiente para decidir la persistencia del material de elaboración.

Tampoco se deriva:

- conservación obligatoria de todos los borradores;
- eliminación automática de material intermedio;
- historial general;
- versionado;
- recuperación obligatoria de material eliminado;
- ni mecanismo concreto de interfaz para decidir su conservación.

## 33. Persistencia del original cuando la representación textual posee valor propio

### 33.1 Independencia entre valor de la transcripción y persistencia del audio

Se contrastó si conservar una transcripción como documento con valor propio
obliga también a conservar la aportación sonora original.

En C3 no existe esa dependencia necesaria.

La transcripción puede conservarse por su propio contenido mientras el audio
original deja de cumplir una función relevante.

### 33.2 Situaciones en las que el original conserva valor

La aportación sonora puede seguir siendo pertinente por razones independientes
de la existencia de la transcripción.

Entre las situaciones identificadas se encuentran:

- que su contenido sonoro posea valor propio;
- que constituya una fuente histórica;
- que pueda reutilizarse en actuaciones posteriores;
- que su pérdida haga difícil recuperar nuevamente el material;
- que exista riesgo de desaparición en la plataforma o fuente donde se
  encontraba disponible;
- u otra función humana que continúe dependiendo del original.

En esas situaciones, la existencia de una representación textual no agota la
función de la aportación sonora.

### 33.3 Original exclusivamente instrumental

Existe también la situación contraria.

Si el audio sólo ha actuado como soporte para obtener un contenido posterior y,
una vez obtenido éste, no conserva ninguna función humana adicional, puede
eliminarse sin pérdida relevante para el caso ejercido.

### 33.4 H-AUD-16 — Persistencia contingente del original

Se introduce:

> La producción de una representación derivada no determina por sí sola la
> conservación ni la eliminación de la aportación original. El original debe
> poder permanecer disponible cuando conserve una función humana propia y puede
> dejar de conservarse cuando esa función se haya agotado.

No se deriva:

- conservación universal de originales;
- eliminación automática tras una transformación;
- almacenamiento indefinido;
- ni criterio técnico concreto de retención.

## 34. Persistencia del trabajo acumulado en una transcripción conservada

### 34.1 Contraste

Se examinó qué debe conservarse cuando una transcripción deja de ser únicamente
material instrumental y se decide mantenerla porque posee valor propio para
actuaciones posteriores.

En esta situación no resulta suficiente conservar únicamente una nueva
representación en bruto del contenido textual.

El trabajo realizado sobre la transcripción forma parte de aquello que hace
valiosa su conservación.

Si meses después fuera necesario retomarla, perder ese trabajo obligaría a
reconstruir actuaciones que ya habían sido realizadas deliberadamente.

### 34.2 Diferencia entre contenido recuperable y elaboración acumulada

Se distingue:

- contenido recuperable: aquello que puede volver a obtenerse desde la
  aportación original;
- elaboración acumulada: determinaciones producidas deliberadamente durante el
  trabajo sobre ese contenido.

En C3 la elaboración acumulada puede incluir:

- selecciones;
- correcciones;
- referencias temporales;
- indicaciones de pertinencia;
- organización del material;
- otras determinaciones que continúen siendo necesarias para retomar el
  trabajo sin reconstruirlo desde el principio.

Conservar únicamente el contenido textual no equivale necesariamente a
conservar la representación elaborada.

### 34.3 H-AUD-17 — Persistencia del trabajo acumulado

Se introduce:

> Cuando una representación elaborada se conserva porque mantiene valor para
> actuaciones posteriores, deben poder permanecer disponibles aquellas
> determinaciones producidas durante su elaboración cuya pérdida obligaría a
> reconstruir trabajo ya realizado para poder reutilizarla suficientemente.

`H-AUD-17` queda apoyada por C3.

### 34.4 Relación con el documento definitivo

Este resultado no contradice la eliminación de referencias de elaboración en
un documento definitivo.

Se distinguen:

- documento definitivo: puede independizarse de las estructuras utilizadas
  durante su producción cuando éstas han agotado allí su función;
- representación de trabajo conservada: mantiene aquellas estructuras de
  elaboración que forman parte de su valor para futuras actuaciones.

Por tanto, una misma referencia temporal puede ser:

- prescindible en el documento definitivo;
- necesaria en la transcripción elaborada que se ha decidido conservar.

### 34.5 Alcance

La hipótesis no deriva:

- conservación universal de todo estado intermedio;
- historial de todas las modificaciones;
- versionado;
- conservación de propuestas superadas;
- ni almacenamiento indefinido de cualquier dato producido durante el trabajo.

El criterio permanece ligado a la pérdida de trabajo elaborado que continúe
siendo pertinente para actuaciones posteriores.

## 35. Pérdida de función de las referencias tras eliminar el original

### 35.1 Contraste

Se examinó si las referencias temporales entre una transcripción elaborada y
el audio original deben conservarse por el mero hecho de haber formado parte
del trabajo realizado.

En C3 no resulta necesario.

Si la aportación sonora deja de conservar cualquier función relevante y se
decide eliminarla, las referencias cuya única función consistía en permitir el
retorno a esa aportación también dejan de resultar pertinentes.

Pueden eliminarse sin pérdida relevante para la situación ejercida.

### 35.2 Precisión de H-AUD-17

`H-AUD-17 — Persistencia del trabajo acumulado` no exige conservar todo elemento
que haya formado históricamente parte de una elaboración.

Se distingue:

- determinación elaborada que continúa sosteniendo una posibilidad posterior:
  debe poder permanecer disponible;
- determinación cuya función dependía de otro material que ha dejado de ser
  pertinente y ya no se conserva:
  puede dejar de conservarse también.

Por tanto, el valor de una estructura de elaboración depende de la función que
continúe realizando y no únicamente de su pertenencia histórica al proceso de
trabajo.

### 35.3 Caso de las referencias temporales

Mientras el audio original permanece disponible y resulta pertinente, una
referencia temporal puede permitir regresar desde la transcripción a su fuente.

Si el audio deja de conservarse porque ha agotado su función, esa misma
referencia deja de permitir una actuación pertinente.

En esa situación puede eliminarse aunque la transcripción elaborada continúe
conservándose por su propio valor.

### 35.4 Límites

Este resultado no deriva:

- eliminación general de toda procedencia;
- eliminación automática de cualquier relación cuando desaparece un material;
- conservación obligatoria del historial de relaciones eliminadas;
- ni una regla general sobre otras formas de referencia cuya función pueda
  sobrevivir a la desaparición del audio.

## 36. Reorientación metodológica — capacidad frente a prescripción

### 36.1 Origen de la reorientación

El recorrido realizado durante esta investigación ha mostrado repetidamente
que situaciones materialmente diferentes pueden justificar actuaciones
distintas sobre una misma aportación.

Se han encontrado, entre otros, casos en los que resulta suficiente:

- conservar únicamente el audio;
- conservar únicamente una representación textual;
- conservar audio y texto conjuntamente;
- producir una transcripción automáticamente;
- producirla sólo cuando se necesite;
- conservar material de elaboración;
- eliminarlo una vez agotada su función;
- mantener referencias al original;
- retirar esas referencias cuando dejan de resultar pertinentes.

Los contrastes realizados no han permitido justificar una política universal
que determine de antemano cuál de esas actuaciones debe ejecutarse en todas las
situaciones.

La suficiencia depende frecuentemente de la finalidad humana concreta.

### 36.2 Problema de una política prescriptiva general

Una metodología orientada únicamente a descubrir el comportamiento que el
sistema debe ejecutar en cada situación corre el riesgo de convertir
regularidades contingentes en restricciones permanentes.

Una actuación adecuada en un caso puede resultar innecesaria o incluso
contraria a la finalidad perseguida en otro.

Por tanto, antes de establecer una política obligatoria debe comprobarse si
existe realmente una razón material para clausurar las alternativas restantes.

### 36.3 Distinción entre capacidad, asistencia y política por defecto

A partir de este punto se distinguen tres niveles.

#### Capacidad

Determina qué actuaciones deben permanecer posibles para la persona.

Ejemplos dentro de la investigación:

- conservar una aportación;
- eliminarla;
- obtener una representación textual;
- corregir un resultado interpretativo;
- mantener o retirar una relación;
- seleccionar o descartar material.

#### Asistencia

Comprende actuaciones que el sistema puede realizar para reducir esfuerzo sin
sustituir necesariamente la decisión humana.

Ejemplos:

- proponer una transcripción;
- generar una descripción;
- seleccionar candidatos;
- resumir contenido;
- sugerir intervalos pertinentes.

#### Política por defecto

Determina qué actuación propone o realiza inicialmente el sistema cuando la
persona no ha expresado otra decisión.

Ejemplos:

- transcribir automáticamente o esperar una petición;
- conservar inicialmente determinadas referencias;
- mostrar una selección reducida antes de los candidatos descartados.

La existencia de una capacidad no determina por sí sola una forma concreta de
asistencia ni una política por defecto.

### 36.4 Nueva prioridad metodológica

A partir de esta sección la investigación seguirá este orden:

situación
→ posibilidades humanas pertinentes
→ identificación de posibles clausuras
→ comprobación de si existe razón material para esas clausuras
→ preservación de alternativas cuando no exista tal razón
→ investigación posterior de asistencia y políticas por defecto.

No se buscará inicialmente una única actuación correcta cuando varias
alternativas puedan resultar válidas dependiendo de la finalidad humana.

## 37. Q-AUD-01 — Prescripción frente a autoridad humana

Se introduce la siguiente cuestión transversal:

> Cuando varias actuaciones técnicamente posibles producen resultados válidos
> dependiendo de la finalidad humana de la situación, ¿debe el sistema
> determinar cuál debe ejecutarse o debe preservar la capacidad de la persona
> para decidir, dejando recomendaciones, automatizaciones y comportamientos por
> defecto como asistencia revocable?

La cuestión permanece abierta a falsación mediante las situaciones de esta
investigación.

## 38. H-AUD-18 — Autoridad humana sobre decisiones contingentes

Se introduce provisionalmente:

> Cuando la suficiencia de conservar, transformar, relacionar o eliminar un
> material depende de una finalidad humana que puede variar entre situaciones,
> el sistema no debe clausurar innecesariamente las alternativas válidas y debe
> preservar la capacidad de la persona para determinar cuál realizar.

### 38.1 Alcance

`H-AUD-18` no establece libertad técnica absoluta.

No demuestra que:

- toda actuación deba estar permitida;
- nunca deban existir restricciones;
- las acciones irreversibles deban ejecutarse sin advertencia;
- las invariantes del sistema puedan romperse;
- el sistema no pueda proponer comportamientos por defecto;
- el sistema no pueda automatizar actuaciones;
- ni toda decisión técnica corresponda a la persona.

La hipótesis se limita a decisiones contingentes cuya suficiencia depende de la
finalidad humana de la situación.

### 38.2 Asistencia sin sustitución necesaria

La hipótesis es compatible con que el sistema:

- recomiende;
- anticipe trabajo;
- automatice tareas;
- proponga selecciones;
- produzca borradores;
- aplique comportamientos por defecto;
- advierta sobre consecuencias relevantes.

Esas actuaciones no deben confundirse automáticamente con autoridad definitiva
sobre decisiones cuya corrección depende de la finalidad humana.

### 38.3 Estado

`H-AUD-18` se adopta como hipótesis transversal de trabajo para el resto de la
investigación 28.

Todavía no se eleva a principio general de Product.

Las conclusiones anteriores permanecen vigentes, pero deberán distinguirse en
adelante según correspondan a:

- capacidades necesarias;
- formas de asistencia;
- políticas por defecto;
- o restricciones realmente justificadas.

## 39. Auditoría de resultados bajo la distinción capacidad–asistencia–default

### 39.1 Objeto

Tras introducir `H-AUD-18`, se revisan los resultados anteriores para
determinar si expresan:

- capacidades que deben permanecer disponibles;
- formas de asistencia del sistema;
- políticas por defecto;
- o restricciones necesarias para evitar una clausura prematura.

La auditoría no elimina la evidencia anterior ni reescribe su proceso de
obtención.

### 39.2 Capacidades que resisten

La investigación aporta fundamento provisional para que puedan permanecer
disponibles, cuando la situación lo requiera:

- conservar o eliminar la aportación original;
- obtener una representación textual;
- conservar o eliminar esa representación;
- mantener una correspondencia entre original y derivación mientras siga
  cumpliendo una función;
- localizar partes pertinentes del original;
- conservar indicaciones de pertinencia;
- corregir y complementar resultados interpretativos;
- conservar trabajo elaborado que continúe siendo pertinente;
- retirar estructuras de elaboración cuando hayan agotado su función.

Estas capacidades no determinan por sí mismas cuándo debe ejecutarse cada
actuación.

### 39.3 Formas de asistencia

Se identifican como asistencia posible:

- transcripción automática;
- generación de descripciones;
- resúmenes;
- identificación de puntos relevantes;
- propuesta de intervalos;
- selección de candidatos;
- orientación previa al estudio humano.

La utilidad de estas actuaciones no convierte su ejecución automática en una
exigencia estructural.

### 39.4 Políticas por defecto no determinadas

La investigación no ha demostrado todavía una única política obligatoria para:

- transcribir automáticamente o bajo petición;
- conservar o eliminar automáticamente materiales después de una
  transformación;
- mantener o retirar automáticamente referencias;
- seleccionar automáticamente qué materiales deben persistir.

Estas cuestiones permanecen como decisiones de realización mientras respeten
las capacidades y restricciones justificadas.

### 39.5 Restricciones frente a clausuras interpretativas

La autoridad humana sobre decisiones contingentes requiere que una actuación
del sistema no suprima prematuramente la posibilidad de revisión.

En particular:

- un resultado interpretativo debe poder corregirse o complementarse;
- un candidato identificado y descartado por el sistema debe poder revisarse
  mientras la persona no lo haya evaluado;
- una transformación no debe obligar a perder un original que todavía
  conserve una función humana pertinente.

Estas restricciones no implican conservación indefinida.

Una alternativa puede cerrarse cuando la persona la haya evaluado y su
mantenimiento haya dejado de sostener una posibilidad pertinente.

### 39.6 Resultados absorbidos o reducidos

`H-AUD-05` y `H-AUD-06` dejan de operar como hipótesis estructurales y pasan a
representar políticas por defecto alternativas todavía no determinadas.

`H-AUD-15` y `H-AUD-16` se entienden como casos particulares de una cuestión
más general: la persona debe poder decidir la persistencia de materiales cuya
función depende de una finalidad contingente.

`H-AUD-04`, `H-AUD-10B`, `R-AUD-01` y `H-AUD-12` muestran distintas formas de
una misma exigencia negativa: evitar que una actuación del sistema clausure
prematuramente posibilidades humanas todavía pertinentes.

### 39.7 Resultado metodológico

La investigación adopta provisionalmente el siguiente orden:

capacidad
→ posibles clausuras
→ justificación o eliminación de esas clausuras
→ asistencia
→ política por defecto.

No se buscará una política única cuando varias actuaciones sigan siendo
válidas dependiendo de la finalidad humana.

## 40. H-AUD-19 — No clausura previa de alternativas contingentes

Se introduce provisionalmente:

> Cuando una decisión depende todavía de una finalidad humana contingente, una
> actuación del sistema no debe eliminar innecesariamente las alternativas
> sobre las que la persona podría necesitar ejercer posteriormente su
> decisión.

`H-AUD-19` no exige conservar indefinidamente todas las alternativas.

Una alternativa puede dejar de mantenerse cuando:

- haya sido evaluada suficientemente por la persona; y
- su conservación ya no sostenga una posibilidad humana pertinente.

La hipótesis permanece restringida al alcance de esta investigación y no se
eleva todavía a Product.

## 41. Primer contraste de autoridad humana frente a limpieza automática

### 41.1 Conservación del audio y eliminación de referencias

Se contrastó si existe una razón material para impedir que la persona conserve
la aportación sonora y elimine las referencias temporales asociadas a una
representación textual.

En el caso ejercido no aparece tal razón.

La persona puede considerar que las referencias:

- ya no resultan necesarias;
- dificultan la lectura;
- o simplemente desea retirarlas.

La decisión depende de la finalidad humana y no de una necesidad técnica
derivada por esta investigación.

Por tanto, conservar el audio no obliga a conservar sus referencias temporales.

### 41.2 Eliminación del audio y conservación de referencias

Se contrastó también la situación inversa.

La eliminación del audio puede hacer que determinadas referencias temporales
pierdan su función operativa original.

Sin embargo, C3 no aporta una razón material para que el sistema deba
eliminarlas automáticamente o impedir que la persona decida conservarlas.

La utilidad posterior de esas referencias no debe darse por inexistente
únicamente porque el sistema ya no reconozca su función original.

Por tanto, eliminar el audio no obliga por sí mismo a eliminar las referencias
temporales asociadas.

### 41.3 Resultado para H-AUD-18

El contraste apoya:

`H-AUD-18 — Autoridad humana sobre decisiones contingentes`.

Cuando varias configuraciones siguen siendo técnicamente representables y su
suficiencia depende de la finalidad humana, el sistema no necesita determinar
una única configuración correcta.

En el caso ejercido deben poder permanecer abiertas, al menos, las
posibilidades de:

- conservar audio y referencias;
- conservar audio y retirar referencias;
- eliminar audio y retirar referencias;
- eliminar audio y conservar referencias cuando la persona así lo decida.

La investigación no establece que todas estas posibilidades deban tener la
misma frecuencia, conveniencia ni política por defecto.

### 41.4 Resultado para H-AUD-19

El contraste apoya también:

`H-AUD-19 — No clausura previa de alternativas contingentes`.

La consideración del sistema de que una referencia ha perdido probablemente su
utilidad no constituye por sí sola fundamento para hacer irreversible su
eliminación.

La alternativa puede permanecer abierta hasta que la persona decida qué hacer
con ella.

### 41.5 Asistencia sobre consecuencias

La preservación de la autoridad humana es compatible con asistencia del
sistema.

Por ejemplo, después de eliminar el audio el sistema podría detectar que
existen referencias asociadas y preguntar si la persona desea retirarlas
también.

Se distingue:

- detectar una consecuencia;
- informar sobre ella;
- facilitar una actuación;
- decidir qué actuación debe realizarse.

Las tres primeras pueden pertenecer a la asistencia del sistema.

La cuarta permanece en la persona cuando la decisión depende de una finalidad
humana contingente.

### 41.6 Precaución sobre restricciones técnicas

La investigación no afirma que nunca puedan existir restricciones técnicas.

Sin embargo, una restricción introducida por una realización concreta no debe
confundirse automáticamente con una exigencia del producto.

Si una representación técnica impide una combinación que la investigación
considera humanamente válida, deberá comprobarse si la restricción responde a
una invariante realmente necesaria o si es únicamente consecuencia del diseño
elegido.

No se deriva todavía una arquitectura concreta para representar referencias
cuyo destino original haya dejado de existir.

## 42. Primer límite de la autoridad humana — coherencia factual

### 42.1 Situación contrastada

Se ejerció la situación en la que:

- existe una transcripción elaborada;
- existen referencias temporales al audio original;
- la persona decide eliminar el audio;
- la persona decide conservar las referencias temporales.

La investigación ya había establecido que la conservación de esas referencias
puede continuar siendo una decisión válida aunque hayan perdido su función
operativa original.

Se contrastó entonces si el sistema debería seguir presentándolas como enlaces
funcionales hacia una fuente ya inexistente.

La respuesta es negativa.

### 42.2 Cambio de función de la referencia

Mientras el audio permanece disponible, una referencia temporal puede operar
como mecanismo de retorno al original.

Después de eliminar el audio, esa misma referencia puede continuar conservada
como dato histórico.

Se distingue:

- referencia operativa: permite regresar a una aportación disponible;
- dato histórico: conserva una posición anteriormente significativa aunque la
  aportación correspondiente ya no esté disponible.

La decisión de conservar la referencia no obliga a mantener ficticiamente su
función anterior.

### 42.3 H-AUD-20 — Coherencia factual del estado

Se introduce provisionalmente:

> La autoridad de la persona sobre decisiones contingentes no obliga al sistema
> a representar como existente, disponible u operativa una posibilidad que
> materialmente ha dejado de existir. Los elementos conservados pueden cambiar
> de función cuando cambian las condiciones de las que dependían.

### 42.4 Relación con H-AUD-18 y H-AUD-19

`H-AUD-18` permite a la persona decidir si conserva o elimina materiales cuya
utilidad depende de su finalidad.

`H-AUD-19` impide que el sistema clausure innecesariamente alternativas todavía
pertinentes.

`H-AUD-20` introduce un límite distinto:

- la persona decide qué conservar;
- el sistema debe representar correctamente qué posibilidades siguen siendo
  materialmente realizables.

Por tanto:

decidir qué conservar
no equivale a
determinar qué hechos son verdaderos sobre el estado resultante.

### 42.5 Resultado

En el caso ejercido resulta válida la configuración:

- audio eliminado;
- transcripción conservada;
- referencias temporales conservadas como datos históricos.

No resulta válida la representación de esas referencias como enlaces
operativos hacia un audio inexistente.

Este resultado no prescribe que las referencias históricas deban conservarse.

Únicamente establece que, si se conservan, su presentación no debe afirmar una
capacidad material inexistente.

### 42.6 Alcance

`H-AUD-20` permanece restringida al alcance de esta investigación.

No se deriva todavía una teoría general de:

- integridad referencial;
- estados inválidos;
- reparación automática;
- dependencias técnicas;
- ni representación de relaciones históricas.

## 43. Transformación de una transcripción literal

### 43.1 Situación contrastada

Se ejerció la situación en la que una representación textual reproduce
literalmente una aportación sonora y la persona decide modificar
posteriormente parte de su contenido.

La modificación es una actuación válida.

Sin embargo, después de esa transformación la representación ya no puede
tratarse sin más como una transcripción literal no modificada.

Se distingue:

- transcripción literal respecto del original;
- transcripción posteriormente modificada.

La libertad de transformar el texto no permite mantener como verdadera una
propiedad que la propia transformación ha dejado de satisfacer.

### 43.2 Necesidad de reconocimiento posterior

La diferencia debe poder permanecer reconocible después de una interrupción.

Una persona puede abandonar el material y regresar meses después sin recordar
qué actuaciones realizó anteriormente.

En esa situación resulta necesario poder reconocer al menos:

- que la representación ha sido modificada;
- y, cuando resulte pertinente, qué partes de ella fueron afectadas por la
  modificación.

Una indicación únicamente global puede resultar insuficiente en una
representación extensa si no permite distinguir qué fragmentos siguen
conservando su condición anterior.

### 43.3 H-AUD-21 — Reconocibilidad de transformación

Se introduce provisionalmente:

> Cuando una representación derivada es posteriormente modificada de manera
> que deja de conservar alguna propiedad bajo la que podía ser utilizada,
> debe poder reconocerse posteriormente que esa transformación ha ocurrido y,
> cuando resulte pertinente para el uso posterior, qué partes están afectadas.

En el caso ejercido, la propiedad afectada es la literalidad de la
transcripción respecto del audio original.

### 43.4 Relación con H-AUD-20

`H-AUD-20 — Coherencia factual del estado` impide presentar una representación
modificada como si continuara satisfaciendo una propiedad que ya ha perdido.

`H-AUD-21` añade la necesidad de que esa transformación pueda ser reconocida
posteriormente cuando resulte necesaria para interpretar correctamente el
material.

### 43.5 Mecanismos no determinados

La investigación no prescribe todavía cómo debe realizarse ese reconocimiento.

Podrían existir, entre otros mecanismos:

- una indicación de estado;
- marcas junto a los fragmentos modificados;
- señales visuales;
- u otra representación equivalente.

El ejemplo de barras laterales semejantes a las utilizadas en algunos
editores de programación constituye una posible realización, no una exigencia
estructural.

### 43.6 Límites

Este resultado no deriva todavía:

- historial completo de cambios;
- conservación de todas las versiones anteriores;
- fechas de cada modificación;
- autoría de cada cambio;
- mecanismo concreto de comparación;
- colores determinados;
- ni control de versiones general.

## 44. Reconocimiento de modificación frente a recuperación del estado anterior

### 44.1 Contraste

Se contrastó si, después de modificar una transcripción literal, resulta
necesario poder recuperar exactamente el contenido anterior de cada fragmento.

En el caso ejercido no resulta fundamental.

Para retomar suficientemente el material después de una interrupción resulta
necesario poder reconocer:

- que la representación ha sido modificada;
- qué partes están afectadas por esa modificación.

No resulta necesario, para satisfacer esa necesidad mínima, conservar y
recuperar exactamente la redacción anterior.

### 44.2 Precisión de H-AUD-21

`H-AUD-21 — Reconocibilidad de transformación` queda reducida a:

> Cuando una representación derivada haya sido modificada de manera que alguna
> parte deje de conservar una propiedad relevante de su estado anterior, debe
> poder reconocerse posteriormente la existencia de esa transformación y las
> partes afectadas cuando esa diferencia siga siendo pertinente para el trabajo.

La hipótesis no exige reconstruir el estado anterior.

### 44.3 Recuperación del contenido anterior como asistencia

La posibilidad de consultar rápidamente el contenido anterior constituiría una
mejora técnica útil.

Podría facilitar:

- comparación;
- comprobación;
- revisión;
- comprensión de cambios anteriores.

Sin embargo, la investigación actual no demuestra que esa posibilidad sea
fundamental para el caso ejercido.

Por tanto, se distingue:

- reconocibilidad de la modificación: capacidad necesaria;
- recuperación exacta del estado anterior: asistencia o capacidad adicional no
  demostrada como necesaria.

### 44.4 Posible realización no prescriptiva

Una posible realización consistiría en marcar visualmente los fragmentos
modificados y permitir consultar el contenido anterior al situar el cursor
sobre ellos.

Este ejemplo no constituye una exigencia de interfaz.

No se deriva:

- uso de barras laterales;
- códigos de color;
- información sobreimpresionada;
- conservación de versiones completas;
- historial general;
- ni mecanismo concreto de restauración.

## 45. Estado factual y presentación de las modificaciones

### 45.1 Visibilidad permanente no necesaria

Se contrastó si las señales utilizadas para identificar fragmentos modificados
deben permanecer visibles de forma permanente mientras exista una transcripción
modificada.

En el caso ejercido no resulta necesario.

La representación puede disponer por defecto de señales que permitan reconocer
su condición y las partes modificadas, pero la persona puede considerar
preferible ocultarlas durante determinadas actuaciones.

La ocultación visual no modifica el estado factual de la representación.

### 45.2 Reconocibilidad frente a visibilidad

Se precisa `H-AUD-21`.

Que una transformación deba poder reconocerse posteriormente no implica que su
señalización tenga que permanecer siempre visible.

Se distinguen:

- estado factual: la representación ha sido modificada;
- información de reconocimiento: permite identificar qué partes fueron
  modificadas;
- presentación: determina si esa información se muestra visualmente en un
  momento concreto.

La persona puede decidir sobre la presentación sin alterar por ello el estado
factual del material.

### 45.3 Recuperabilidad de las señales

Si la persona decide ocultar las señales de modificación, debe poder volver a
mostrarlas posteriormente.

Por tanto, la ocultación no equivale a eliminar la información necesaria para
reconstruir qué fragmentos fueron modificados.

En el caso ejercido resulta suficiente preservar esa información sin derivar un
historial completo de versiones.

### 45.4 H-AUD-22 — Presentación configurable sin pérdida del estado

Se introduce provisionalmente:

> Cuando una propiedad relevante del material deba permanecer reconocible, la
> persona puede decidir cómo y cuándo se presenta visualmente esa información,
> siempre que cambiar su presentación no falsifique el estado del material ni
> destruya la posibilidad de reconocer posteriormente la propiedad pertinente.

### 45.5 Relación con la filosofía de autoridad humana

`H-AUD-22` constituye otro caso de separación entre:

- aquello que el sistema debe mantener coherentemente;
- y aquello cuya forma de presentación puede permanecer bajo decisión humana.

En una transcripción modificada:

- el sistema no debe tratarla como literal mientras no lo sea;
- la persona puede decidir si desea ver u ocultar las señales locales de
  modificación;
- las señales ocultas deben poder recuperarse mientras siga siendo pertinente
  reconocer qué fragmentos fueron transformados.

### 45.6 Límites

Este resultado no deriva:

- barras de colores obligatorias;
- colores concretos;
- visibilidad permanente;
- historial completo;
- almacenamiento de todas las versiones anteriores;
- ni una interfaz concreta para mostrar u ocultar las señales.

## 46. Auditoría de H-AUD-18 a H-AUD-22

### 46.1 Objetivo

Se auditan conjuntamente:

- `H-AUD-18 — Autoridad humana sobre decisiones contingentes`;
- `H-AUD-19 — No clausura previa de alternativas contingentes`;
- `H-AUD-20 — Coherencia factual del estado`;
- `H-AUD-21 — Reconocibilidad de transformación`;
- `H-AUD-22 — Presentación configurable sin pérdida del estado`.

El objetivo es comprobar si constituyen exigencias independientes o pueden
reducirse a un núcleo menor sin perder ninguna diferencia demostrada por los
casos ejercidos.

### 46.2 Absorción de H-AUD-19 en H-AUD-18

La autoridad humana sobre una decisión contingente carece de efectividad si el
sistema elimina previamente las alternativas sobre las que dicha decisión
debía ejercerse.

Por tanto, la no clausura previa no aparece como principio independiente, sino
como condición necesaria para que la autoridad humana sea efectiva.

Se reduce provisionalmente:

`N-AUD-01 — Autoridad humana efectiva`

> Cuando varias actuaciones siguen siendo válidas y la elección entre ellas
> depende de una finalidad humana contingente, la persona debe poder determinar
> cuál realizar y las alternativas pertinentes no deben ser clausuradas por el
> sistema antes de que esa decisión pueda ejercerse suficientemente.

La hipótesis no exige conservar alternativas después de que hayan sido
suficientemente evaluadas y cerradas por la persona.

`H-AUD-19` queda provisionalmente absorbida en `N-AUD-01`.

### 46.3 Reducción de H-AUD-20 y H-AUD-21

Los contrastes realizados muestran una estructura común.

Cuando una actuación transforma el material, el sistema no debe continuar
representando como verdadera una propiedad o capacidad que el nuevo estado ya
no satisface.

Asimismo, cuando una diferencia producida por esa transformación continúa
siendo pertinente para una actuación posterior, debe conservarse información
suficiente para reconocerla después de una interrupción.

Se introduce provisionalmente:

`N-AUD-02 — Fidelidad del estado relevante`

> El sistema debe conservar y representar información suficiente para
> interpretar correctamente el estado actual del material y las posibilidades
> que permanecen realmente disponibles cuando esas diferencias sean
> pertinentes para el trabajo posterior.

Este núcleo comprende los casos observados de:

- referencias que dejan de ser operativas al desaparecer su fuente;
- transcripciones literales que pasan a ser modificadas;
- identificación de partes cuya transformación sigue siendo pertinente.

`H-AUD-20` y `H-AUD-21` quedan provisionalmente reducidas a manifestaciones de
`N-AUD-02`.

### 46.4 Reducción de H-AUD-22

La posibilidad de configurar la presentación no aparece como principio
independiente.

Puede derivarse de la combinación de:

- `N-AUD-01`: la persona puede decidir sobre aspectos contingentes de su forma
  de trabajo;
- `N-AUD-02`: esa decisión no debe destruir la información necesaria para
  interpretar correctamente el estado relevante.

Por tanto, una señal puede ocultarse cuando su presencia visual no sea
necesaria, siempre que pueda recuperarse si la propiedad que representa sigue
siendo pertinente.

`H-AUD-22` queda provisionalmente derivada de `N-AUD-01` y `N-AUD-02`.

### 46.5 Irreducibilidad entre los dos núcleos restantes

Se intentó reducir `N-AUD-01` y `N-AUD-02` entre sí.

La reducción falla.

Puede existir autoridad humana sin fidelidad del estado.

Ejemplo:

- la persona decide eliminar el audio y conservar sus referencias;
- el sistema respeta esa decisión;
- pero continúa presentando las referencias como enlaces operativos hacia una
  fuente inexistente.

En ese caso `N-AUD-01` se satisface y `N-AUD-02` no.

También puede existir fidelidad del estado sin autoridad humana.

Ejemplo:

- la persona elimina el audio;
- el sistema elimina automáticamente las referencias y representa
  correctamente el estado resultante;
- pero nunca permite decidir conservarlas.

En ese caso `N-AUD-02` puede satisfacerse y `N-AUD-01` no.

Por tanto, los dos núcleos permanecen provisionalmente irreducibles.

### 46.6 Núcleo candidato resultante

La auditoría reduce las cinco hipótesis examinadas a dos principios candidatos:

1. `N-AUD-01 — Autoridad humana efectiva`.
2. `N-AUD-02 — Fidelidad del estado relevante`.

La asistencia del sistema puede incluir:

- recomendación;
- automatización;
- advertencia;
- selección;
- resumen;
- transformación;
- generación de propuestas.

Dicha asistencia debe respetar simultáneamente:

- la autoridad humana sobre decisiones contingentes;
- la fidelidad del estado relevante.

### 46.7 Límites

La reducción no establece todavía que `N-AUD-01` y `N-AUD-02` sean principios
generales de Product.

Permanece restringida a la investigación actual.

Tampoco deriva:

- libertad técnica absoluta;
- conservación indefinida de alternativas;
- historial completo;
- versionado general;
- interfaz concreta;
- política por defecto determinada;
- ni obligación de mostrar permanentemente toda información conservada.

## 47. Falsación de N-AUD-01 mediante pérdida irreversible

### 47.1 Situación contrastada

Se intentó falsar `N-AUD-01 — Autoridad humana efectiva` mediante una situación
de pérdida máxima.

La persona dispone de una aportación sonora que constituye la única copia
existente y cuya eliminación sería irreversible.

Se contrastó si esa irreversibilidad justifica que el sistema impida
directamente la eliminación.

En el caso ejercido, no.

La decisión sobre la conservación del contenido continúa correspondiendo a la
persona.

### 47.2 Advertencia frente a sustitución de la decisión

Que la decisión permanezca en la persona no implica que el sistema deba
ejecutarla sin hacer visibles sus consecuencias.

Cuando el sistema conoce suficientemente que una actuación puede producir una
pérdida irreversible, puede y debe proporcionar información suficiente para que
la persona comprenda la consecuencia antes de confirmar la actuación.

Se distingue:

- advertir sobre una consecuencia;
- facilitar que la decisión sea consciente;
- sustituir la decisión humana impidiendo la actuación.

Las dos primeras son compatibles con `N-AUD-01`.

La tercera no queda justificada por este contraste.

### 47.3 Intensidad de la asistencia

La gravedad o irreversibilidad de una consecuencia puede justificar una
asistencia más intensa.

Por ejemplo, una eliminación irrecuperable puede requerir una advertencia más
visible o explícita que una actuación fácilmente reversible.

La investigación no prescribe todavía:

- número de confirmaciones;
- texto concreto del aviso;
- diseño visual;
- mecanismo de protección;
- ni grados técnicos determinados de advertencia.

### 47.4 Precisión de N-AUD-01

`N-AUD-01` se precisa provisionalmente:

> Cuando varias actuaciones siguen siendo válidas y la elección entre ellas
> depende de una finalidad humana contingente, la persona debe poder determinar
> cuál realizar. Las alternativas pertinentes no deben ser clausuradas por el
> sistema antes de que esa decisión pueda ejercerse suficientemente, y cuando
> una alternativa implique consecuencias graves o irreversibles el sistema debe
> poder hacerlas suficientemente reconocibles sin sustituir por ello la decisión
> humana.

La eliminación irreversible de una aportación única no falsifica este núcleo
dentro del caso ejercido.

## 48. Falsación de N-AUD-02 mediante modificaciones formales

### 48.1 Situación contrastada

Se intentó falsar `N-AUD-02 — Fidelidad del estado relevante` mediante una
transformación que modifica la representación sin alterar el contenido
transcrito.

Se consideran cambios como:

- formato;
- estilo;
- sangría;
- espaciado;
- otras modificaciones de presentación.

En la situación ejercida, el contenido permanece literal respecto del audio
original.

### 48.2 Diferencia respecto de una modificación de contenido

Una modificación formal no produce la misma diferencia que una alteración del
contenido textual.

Se distinguen:

- modificación formal: cambia la presentación pero permanece la literalidad
  del contenido;
- modificación de contenido: alguna parte de la representación deja de
  reproducir literalmente el original.

Ambas son transformaciones reales, pero no requieren necesariamente la misma
forma de reconocimiento posterior.

### 48.3 Reconocimiento suficiente de una modificación formal

En el caso ejercido resulta suficiente una indicación global de que la
representación ha sufrido modificaciones formales.

No resulta necesario señalar localmente cada cambio de formato mientras esos
cambios no afecten a una propiedad cuya localización sea pertinente para el
trabajo posterior.

Por tanto, una representación podría mantener reconocibles simultáneamente
estados equivalentes a:

- contenido literal respecto del original;
- formato posteriormente modificado.

### 48.4 Precisión de N-AUD-02

`N-AUD-02` no exige registrar ni señalar con igual granularidad toda
transformación factual ocurrida sobre el material.

Se precisa:

> El sistema debe conservar y representar información suficiente para
> interpretar correctamente el estado relevante del material. La granularidad
> necesaria para reconocer una transformación depende de la propiedad afectada
> y de la diferencia que continúe siendo pertinente para una actuación
> posterior.

En el caso ejercido:

- una modificación formal admite reconocimiento global;
- una modificación del contenido puede exigir reconocimiento localizado.

### 48.5 Resultado de la falsación

La modificación exclusivamente formal no falsifica `N-AUD-02`.

Por el contrario, muestra que el núcleo no exige una historia exhaustiva de
todos los cambios.

Exige únicamente la diferenciación suficiente para no confundir estados que
resultan materialmente distintos para el trabajo.

No se deriva:

- marcado local de cada cambio formal;
- historial de formato;
- almacenamiento de todas las presentaciones anteriores;
- mecanismo concreto de aviso;
- ni vocabulario definitivo para denominar los estados.

## 49. Falsación de N-AUD-02 mediante formato con función interpretativa

### 49.1 Situación contrastada

Se sometió `N-AUD-02 — Fidelidad del estado relevante` a un segundo contraste.

La falsación anterior había distinguido entre modificaciones de contenido y
modificaciones formales.

Se examinó ahora si toda modificación formal puede considerarse
funcionalmente secundaria mientras permanezcan intactas las mismas palabras.

La respuesta es negativa.

### 49.2 Forma sin función pertinente

Puede existir formato cuya función sea únicamente visual o estética.

Por ejemplo, una negrita, cursiva, tamaño u otra presentación puede haberse
introducido sin representar ninguna diferencia necesaria para interpretar o
utilizar posteriormente el material.

Si dicha presentación desaparece y ninguna posibilidad pertinente resulta
afectada, la pérdida puede considerarse irrelevante dentro del caso ejercido.

### 49.3 Forma con función interpretativa

Existe una situación distinta cuando una diferencia formal permite reconocer
algo necesario para interpretar el material.

Por ejemplo, durante la elaboración de una transcripción el formato puede
distinguir:

- palabras procedentes de la aportación sonora;
- observaciones introducidas posteriormente por la persona.

En ese caso, aunque todas las palabras permanezcan intactas, eliminar la
diferencia formal puede impedir reconocer con seguridad qué procede de la
fuente y qué constituye elaboración posterior.

La pérdida formal produce entonces una pérdida de información relevante.

### 49.4 Insuficiencia de la distinción contenido–formato

La investigación muestra que la categoría técnica del cambio no determina por
sí sola su relevancia.

No resulta suficiente distinguir:

- contenido;
- formato.

Una misma clase de recurso formal puede ser:

- irrelevante en una situación;
- necesaria para interpretar correctamente el material en otra.

El criterio debe atender a la función que la diferencia realiza dentro de la
situación de trabajo.

### 49.5 Nueva precisión de N-AUD-02

`N-AUD-02 — Fidelidad del estado relevante` se precisa:

> El sistema debe conservar y representar suficientemente aquellas
> diferencias del material cuya pérdida alteraría cómo puede interpretarse o
> utilizarse pertinentemente, con independencia de que dichas diferencias
> estén expresadas mediante contenido verbal, formato, estructura, posición,
> relaciones u otros medios.

La granularidad y forma de preservación dependen de la diferencia funcional
que deba permanecer reconocible.

### 49.6 Resultado de la falsación

El contraste no falsifica `N-AUD-02`.

Sí falsifica una interpretación más estrecha según la cual el contenido verbal
sería necesariamente portador de la información relevante y el formato tendría
una función secundaria.

La investigación no deriva:

- conservación universal de todo formato;
- significado fijo para estilos concretos;
- obligación de preservar toda decisión visual;
- ni una taxonomía general de formatos significativos.

La necesidad continúa dependiendo de la función ejercida en la situación.

## 50. Falsación de N-AUD-02 mediante orden y posición

### 50.1 Situaciones contrastadas

Se examinó si el orden de los elementos de una representación debe
considerarse por sí mismo una propiedad que deba conservarse.

Se ejercieron dos situaciones distintas.

### 50.2 Orden con función interpretativa

En la primera situación varios fragmentos forman una estructura argumentativa:

- exposición de una tesis;
- presentación de objeciones;
- conclusión derivada.

Aunque permanezcan exactamente las mismas palabras y fragmentos, alterar su
orden puede destruir o modificar la relación argumentativa que permitía
interpretarlos correctamente.

En este caso el cambio de orden produce una pérdida relevante.

### 50.3 Orden sin función pertinente

En la segunda situación varios elementos son independientes entre sí y su
posición relativa no expresa:

- prioridad;
- cronología;
- dependencia;
- argumentación;
- ni otra diferencia pertinente.

Modificar su orden no produce entonces una pérdida relevante.

### 50.4 Resultado

La investigación no justifica:

- conservar siempre el orden;
- ni considerar siempre irrelevante su modificación.

La necesidad depende de la función que el orden o la posición realicen en la
situación.

Cuando la posición relativa transporta una diferencia necesaria para
interpretar o utilizar pertinentemente el material, su pérdida queda dentro
del alcance de `N-AUD-02`.

Cuando la posición es accidental respecto de la finalidad ejercida, puede
modificarse sin pérdida relevante.

### 50.5 Nueva evidencia para N-AUD-02

El contraste refuerza que `N-AUD-02 — Fidelidad del estado relevante` no está
ligado a una clase técnica predeterminada de propiedades.

Una diferencia pertinente puede encontrarse en:

- contenido verbal;
- formato;
- estructura;
- orden;
- posición;
- relaciones;
- u otros medios.

El criterio continúa siendo la función que dicha diferencia realiza dentro de
la situación y la pérdida que produciría su desaparición.

No se deriva una obligación general de conservar todo orden o posición
históricos.

## 51. Extinción de una diferencia anteriormente relevante

### 51.1 Situación contrastada

Se sometió `N-AUD-02 — Fidelidad del estado relevante` a un contraste temporal.

Durante una transcripción, un fragmento puede quedar marcado como pendiente de
comprobación porque existe duda sobre su literalidad.

Mientras la duda permanece abierta, esa diferencia es relevante.

Permite evitar que una información todavía incierta sea tratada como
suficientemente confirmada.

### 51.2 Resolución de la duda

Se ejerció la situación en la que el fragmento se comprueba posteriormente
contra la aportación sonora original y se confirma que el texto transcrito era
correcto.

Después de esa comprobación, la marca de duda deja de describir una diferencia
relevante del estado actual.

Eliminarla no produce pérdida dentro del caso ejercido.

El texto restante coincide con el estado que habría tenido si la duda nunca
hubiese existido.

### 51.3 Relevancia histórica frente a relevancia vigente

Se distingue:

- relevancia histórica: una diferencia cumplió una función en una fase
  anterior;
- relevancia vigente: la diferencia continúa siendo necesaria para interpretar
  o utilizar pertinentemente el estado actual.

La primera no implica por sí sola obligación de persistencia.

### 51.4 Precisión de N-AUD-02

`N-AUD-02` se precisa provisionalmente como:

> El sistema debe conservar y representar suficientemente aquellas diferencias
> que sigan siendo necesarias para interpretar o utilizar pertinentemente el
> estado actual del material. Una diferencia anteriormente relevante puede
> dejar de conservarse cuando su función se haya extinguido y su desaparición
> no produzca pérdida pertinente.

### 51.5 Resultado

El contraste muestra que `N-AUD-02` no exige:

- historial de todas las incertidumbres anteriores;
- conservación permanente de marcas ya resueltas;
- memoria completa de todos los estados previos;
- ni persistencia de diferencias cuya función se haya extinguido.

La fidelidad requerida se refiere al estado relevante vigente, no a la
reconstrucción exhaustiva de toda la historia del material.

## 52. Límite de N-AUD-01 — condiciones constitutivas de una transición

### 52.1 Revisión del caso de falsación

Se revisó el intento de falsar `N-AUD-01` mediante la producción de un
documento definitivo mientras permanecen alternativas abiertas.

El contraste inicial mezclaba funciones diferentes del material.

Se distinguen provisionalmente tres situaciones:

- material utilizado como documentación;
- elaboración o borrador todavía abierto;
- elaboración declarada finalizada.

No se derivan todavía entidades técnicas distintas para representar estas
situaciones.

### 52.2 Borrador y alternativas abiertas

Durante una elaboración todavía abierta pueden coexistir alternativas que la
persona aún no ha resuelto.

La existencia de esas alternativas forma parte legítima del trabajo.

El sistema no debe resolverlas unilateralmente únicamente para simplificar el
proceso.

### 52.3 Finalización y condición constitutiva

Se considera provisionalmente que una elaboración no puede declararse
finalizada mientras conserve alternativas explícitamente mantenidas como
pendientes de resolución.

En esa situación, impedir temporalmente la transición a un estado definitivo
no sustituye una decisión humana.

El sistema no determina qué alternativa debe elegirse.

Únicamente reconoce que todavía no se satisface una condición necesaria para
la transición solicitada.

Se distingue por tanto entre:

- restricción prescriptiva: el sistema clausura una alternativa porque
  considera otra preferible;
- restricción constitutiva: el sistema impide una transición porque todavía no
  se cumplen las condiciones que definen el estado solicitado.

La segunda no falsifica `N-AUD-01`.

### 52.4 Precisión de N-AUD-01

`N-AUD-01 — Autoridad humana efectiva` se precisa:

> Cuando varias actuaciones válidas dependen de una finalidad humana
> contingente, la persona debe poder determinar cuál realizar y el sistema no
> debe clausurar prematuramente esas alternativas. Esta autoridad no obliga al
> sistema a aceptar como realizado un estado o una transición cuyas condiciones
> constitutivas todavía no se satisfacen.

El sistema puede impedir una transición mientras falte una condición necesaria,
pero no debe resolver por sí mismo la decisión humana pendiente para hacer que
esa condición se cumpla, salvo delegación expresa.

### 52.5 Cuestión todavía abierta

La investigación no ha determinado todavía qué constituye materialmente una
`alternativa abierta`.

Debe distinguirse entre:

- una alternativa explícitamente constituida como pendiente dentro del trabajo;
- una posible duda o indecisión humana no representada materialmente.

No se deriva que el sistema pueda inferir estados mentales ni bloquear una
finalización por decisiones pendientes que no estén suficientemente
representadas en la situación de trabajo.

## 53. Alternativa pendiente frente a cuestión legítimamente abierta

### 53.1 Revisión del contraste D1 / D2

Se contrastaron dos situaciones que pueden contener expresiones aparentemente
similares pero poseen distinto efecto sobre la posibilidad de finalización.

En D1, el trabajo pretende formular una conclusión determinada y mantiene
todavía dos alternativas incompatibles sin establecer cuál adopta.

La resolución pertenece a la responsabilidad del propio trabajo.

Mientras permanezca pendiente, el resultado no puede considerarse
suficientemente finalizado.

### 53.2 Cuestión abierta compatible con el cierre

Existe una situación diferente cuando el trabajo ha cumplido su responsabilidad
y determina explícitamente que una cuestión adicional no queda resuelta dentro
de su alcance.

En ese caso pueden permanecer varias posibilidades abiertas sin convertir el
trabajo en incompleto.

La no resolución puede constituir parte del propio resultado.

Por ejemplo, un trabajo puede establecer suficientemente que la evidencia
disponible no permite determinar todavía si:

- X constituye una condición necesaria;
- o X constituye únicamente una condición suficiente.

Si resolver esa diferencia trasciende la responsabilidad asumida por el
trabajo, registrarla explícitamente como cuestión abierta es compatible con su
cierre.

### 53.3 Pendiente frente a abierto

Se distingue:

- pendiente: determinación todavía no resuelta cuya resolución pertenece a las
  responsabilidades del trabajo que se pretende cerrar;
- abierto: cuestión no resuelta cuya resolución no pertenece a las
  responsabilidades satisfechas por ese cierre y cuya apertura queda
  suficientemente representada.

La existencia de una cuestión abierta no implica por sí misma trabajo pendiente.

### 53.4 Precisión de AO-01

`AO-01 — Alternativa abierta relevante para la finalización` se precisa:

> Una alternativa impide el cierre cuando permanece sin resolver una
> determinación cuya resolución pertenece a las responsabilidades asumidas por
> el trabajo que se pretende declarar finalizado.

Una cuestión puede permanecer abierta en un resultado finalizado cuando el
propio trabajo ha determinado suficientemente que su resolución queda fuera de
su responsabilidad, alcance o evidencia disponible y esa condición queda
representada de forma explícita.

### 53.5 Consecuencia para la finalización

La mera presencia de:

- hipótesis;
- alternativas;
- preguntas;
- posibilidades no resueltas;

no constituye criterio suficiente para impedir una finalización.

Debe determinarse su relación con las responsabilidades del trabajo que se
pretende cerrar.

### 53.6 Relación con N-AUD-01 y N-AUD-02

`N-AUD-01` preserva la autoridad humana sobre las determinaciones contingentes
que pertenecen al trabajo.

`N-AUD-02` exige representar suficientemente diferencias relevantes como:

- decisión todavía pendiente;
- cuestión legítimamente abierta;
- determinación ya resuelta.

El sistema no debe inferir que toda cuestión abierta constituye una decisión
pendiente ni declarar resuelta una responsabilidad que materialmente continúa
abierta.

## 54. Objetivo vigente y condiciones de cierre

### 54.1 Modificación legítima del objetivo

Se contrastó si un objetivo definido inicialmente por la persona debe permanecer
inalterable durante todo el trabajo.

La respuesta es negativa.

La finalidad de un trabajo puede cambiar durante su realización.

Por ejemplo, un objetivo inicial puede consistir en determinar conjuntamente
la necesidad y la suficiencia de una condición y reducirse posteriormente a la
investigación de su suficiencia.

Cuando la persona posee autoridad sobre dicha finalidad, esa modificación es
legítima.

### 54.2 Persistencia de resultados anteriores

La pérdida de vigencia del objetivo inicial no invalida por sí misma los
resultados obtenidos durante su persecución.

Se distingue:

- vigencia del objetivo;
- validez de los resultados obtenidos.

Un resultado puede seguir siendo válido y utilizable aunque la finalidad bajo
la que fue producido haya sido posteriormente modificada.

### 54.3 Cierre relativo al objetivo vigente

Las condiciones de finalización deben evaluarse respecto del objetivo vigente.

Mientras permanezca declarado un objetivo que exige resolver A, B y C, la
ausencia de C puede impedir legítimamente la finalización.

Si la persona modifica legítimamente el objetivo y éste pasa a exigir
únicamente A y B, la condición de cierre debe evaluarse respecto de A y B.

Se formula provisionalmente:

`DR-AUD-01 — Cierre relativo al objetivo vigente`

> Un trabajo puede declararse finalizado cuando satisface suficientemente las
> responsabilidades correspondientes a su objetivo vigente. Una modificación
> legítima del objetivo modifica también las condiciones de cierre, sin
> invalidar por sí misma los resultados previamente obtenidos.

### 54.4 Restricción constitutiva y autoridad humana

El sistema puede impedir el cierre mientras las responsabilidades del objetivo
vigente permanezcan incumplidas.

Esta restricción no autoriza al sistema a imponer la permanencia de ese objetivo
cuando su definición o modificación pertenece a la persona.

Se distingue:

- decidir qué objetivo perseguir;
- comprobar si el objetivo actualmente declarado está satisfecho.

La primera puede pertenecer a la autoridad humana.

La segunda puede constituir una condición de coherencia del estado.

### 54.5 Responsabilidad externa

Cuando existe una responsabilidad procedente de un encargo o autoridad externa,
modificar el objetivo interno de un documento no convierte automáticamente esa
responsabilidad externa en satisfecha.

La persona puede:

- reducir el alcance de su documento;
- abandonar parte del encargo;
- producir un resultado parcial;
- o dejar de perseguir la finalidad anterior.

Pero el resultado no debe representarse como cumplimiento completo de una
responsabilidad externa que materialmente continúa insatisfecha.

Si la propia responsabilidad externa se modifica legítimamente, deberá
evaluarse respecto de su nueva formulación.

### 54.6 Relación con N-AUD-01 y N-AUD-02

`DR-AUD-01` no aparece provisionalmente como un tercer núcleo independiente.

Puede derivarse de:

- `N-AUD-01`: autoridad humana efectiva sobre objetivos cuya determinación
  pertenece a la persona;
- `N-AUD-02`: fidelidad respecto del objetivo vigente y de las
  responsabilidades realmente satisfechas.

El ataque realizado no falsifica `N-AUD-01`.

Muestra que la libertad para modificar una finalidad puede coexistir con
restricciones constitutivas respecto de la finalidad actualmente vigente.

## 55. Objetivo histórico frente a orientación actual del material conservado

### 55.1 Caso H1 — objetivo anterior sin función vigente

Se contrastó si debe conservarse un objetivo anterior cuando todo el material
que permanece disponible puede interpretarse suficientemente bajo el objetivo
vigente.

En H1 no resulta necesario.

Si ninguna responsabilidad, resultado o actuación actual depende ya del
objetivo anterior, conservarlo no aporta una posibilidad pertinente y puede
incluso introducir confusión.

Por tanto, la existencia histórica de un objetivo no constituye por sí sola
razón suficiente para conservarlo.

### 55.2 Caso H2 — resultados conservados fuera del objetivo vigente

Se contrastó una situación diferente.

Determinados resultados obtenidos durante la persecución de un objetivo anterior
continúan conservándose después de que dicho objetivo haya dejado de estar
vigente.

En esta situación tampoco resulta necesario conservar el motivo histórico por
el que esos resultados fueron producidos.

No es necesario mantener una referencia equivalente a:

- `R2 existe porque anteriormente se perseguía O0`;
- `R3 fue producido bajo el objetivo O0`.

### 55.3 Necesidad que sí permanece

Aunque la procedencia histórica pueda resultar prescindible, el material
conservado debe poder reconocerse suficientemente para resultar reutilizable en
el futuro.

Se distingue:

- procedencia histórica: explica por qué llegó a existir el material;
- orientación actual: permite reconocer qué material existe y qué contiene o
  para qué puede resultar pertinente.

En H2 la primera puede desaparecer.

La segunda continúa siendo necesaria mientras el material se conserve para una
posible reutilización posterior.

### 55.4 Resultado para N-AUD-02

El contraste no falsifica `N-AUD-02 — Fidelidad del estado relevante`.

Lo precisa:

> La fidelidad del estado relevante no obliga a conservar la genealogía de
> todo material. Cuando un elemento conservado puede interpretarse y
> reutilizarse suficientemente sin su contexto histórico de producción, ese
> contexto puede dejar de conservarse. Debe permanecer únicamente la
> información actualmente necesaria para reconocer e interpretar
> suficientemente el material que continúa disponible.

### 55.5 Historia frente a reutilización

Se confirma una diferencia ya observada en otras partes de la investigación:

- que una información haya sido relevante para producir un estado no implica
  que deba conservarse después;
- que un material se conserve para reutilización sí exige que permanezca
  suficientemente reconocible para poder volver a utilizarlo.

Por tanto, historial y reutilización no deben confundirse.

### 55.6 Límites

Este resultado no deriva:

- conservación de todos los objetivos anteriores;
- historial de cambios de finalidad;
- procedencia obligatoria de todos los resultados;
- explicación de por qué se creó cada material;
- ni eliminación automática de toda información histórica.

Una información histórica puede seguir conservándose cuando mantenga una
función pertinente, pero su mera pertenencia al pasado no exige persistencia.

## 56. Orientación mínima suficiente para reutilización

### 56.1 Contraste

Se examinó cuánta información debe acompañar a un material conservado para que
pueda resultar reutilizable después de una interrupción prolongada.

Se compararon distintos niveles de orientación.

Una identificación únicamente nominal, como `R2`, no permite reconocer
suficientemente el material.

Una indicación temática genérica, como `Contraejemplo sobre X`, puede seguir
resultando insuficiente si obliga a abrir y recorrer el contenido completo para
determinar qué aporta concretamente.

### 56.2 Representación mínima suficiente

En el caso ejercido se considera suficiente una indicación breve que permita
reconocer qué contiene o qué aporta el material sin exigir reconstruir esa
información mediante una nueva lectura completa.

Por ejemplo:

`Caso Z: cuestiona que X sea condición necesaria`

puede resultar suficiente cuando permite decidir posteriormente si el material
es pertinente para una nueva actuación.

### 56.3 Criterio de reducción

La orientación debe ser:

- tan breve como resulte posible;
- pero suficientemente informativa para reconocer la aportación pertinente del
  material.

No se deriva una necesidad de explicación extensa cuando una formulación menor
cumple la misma función.

Se distingue:

- identificar el material;
- reconocer suficientemente qué aporta;
- desarrollar exhaustivamente su contenido.

La reutilización puede requerir las dos primeras sin exigir la tercera.

### 56.4 Relación con N-AUD-02

Este resultado constituye una aplicación de
`N-AUD-02 — Fidelidad del estado relevante`.

Cuando un material se conserva para reutilización posterior, debe permanecer
información suficiente para interpretarlo y reconocer su posible pertinencia.

La suficiencia no se mide por cantidad de información conservada, sino por la
función que permite realizar.

### 56.5 Alcance

Este resultado no deriva:

- resumen completo obligatorio;
- longitud determinada;
- estructura fija;
- generación automática obligatoria;
- taxonomía general;
- ni necesidad de conservar la historia del material.

La forma concreta de la indicación permanece abierta mientras satisfaga la
función de orientación.

## 57. Prueba provisional fuera del soporte sonoro

### 57.1 Motivo

La investigación desarrollada sobre aportaciones sonoras ha reducido varias
hipótesis particulares a dos núcleos candidatos:

- `N-AUD-01 — Autoridad humana efectiva`;
- `N-AUD-02 — Fidelidad del estado relevante`.

Ambos núcleos han terminado formulándose de una manera que ya no parece depender
necesariamente del soporte sonoro.

No se considera todavía demostrado que posean validez más general.

### 57.2 Objetivo de la prueba

Se abre una prueba de transferencia provisional para intentar falsar ambos
núcleos en situaciones donde no intervenga una aportación sonora.

El procedimiento será:

1. seleccionar una situación humana real sobre otro soporte;
2. aplicar `N-AUD-01` sin modificarlo para intentar encontrar un
   contraejemplo;
3. aplicar `N-AUD-02` del mismo modo;
4. comprobar si alguna propiedad aparentemente general dependía en realidad
   del caso sonoro;
5. evitar cualquier generalización a Product mientras la transferencia no haya
   resistido.

### 57.3 Primer soporte de contraste

El primer contraste se realizará sobre material textual.

La elección del texto como segundo soporte no implica que los núcleos sean
principios generales de documentos ni de conocimiento.

Constituye únicamente un intento de falsación fuera del dominio empírico en el
que fueron obtenidos.

### 57.4 Estado

La transferencia permanece abierta.

Todavía no se ha demostrado que:

- `N-AUD-01` sea independiente del audio;
- `N-AUD-02` sea independiente del audio;
- exista un principio general de autoridad humana;
- exista un principio general de fidelidad del estado relevante;
- ni deba modificarse Product.

## 58. Primer contraste textual de N-AUD-01 y N-AUD-02

### 58.1 Contraste de N-AUD-01 mediante una propuesta de redacción

Se ejerció una situación puramente textual.

Existe una redacción establecida por la persona y el sistema propone una
formulación alternativa que considera mejor, más clara o más adecuada.

Aunque ambas formulaciones resulten técnicamente posibles, la preferencia del
sistema no justifica sustituir definitivamente la redacción humana cuando la
persona desea conservarla.

El sistema puede:

- proponer una alternativa;
- recomendarla;
- explicar sus ventajas;
- facilitar su incorporación.

La decisión final sobre qué contenido queda establecido continúa
correspondiendo a la persona.

Por tanto, `N-AUD-01 — Autoridad humana efectiva` resiste este primer contraste
fuera del soporte sonoro.

La mejor valoración interpretativa del sistema no constituye por sí sola una
condición suficiente para clausurar una alternativa humana todavía válida.

### 58.2 Contraste de N-AUD-02 mediante el estado de un documento

Se ejerció una segunda situación textual.

Un documento ha alcanzado materialmente un estado cerrado, pero una parte del
sistema continúa representándolo como `En progreso`.

La conservación íntegra de las palabras del documento no hace irrelevante esta
diferencia.

El estado de cierre constituye información necesaria para interpretar
correctamente la situación actual del trabajo y para coordinar actuaciones
posteriores.

Representar como `En progreso` un trabajo efectivamente cerrado produce por
tanto una pérdida relevante aunque su contenido textual permanezca intacto.

`N-AUD-02 — Fidelidad del estado relevante` resiste este primer contraste fuera
del soporte sonoro.

### 58.3 Resultado provisional de transferencia

Los dos núcleos candidatos sobreviven al primer contraste sobre material
textual:

- `N-AUD-01` no depende en este caso de una decisión sobre audio;
- `N-AUD-02` no depende en este caso de propiedades de una transcripción o de
  una fuente sonora.

La evidencia obtenida continúa siendo insuficiente para elevarlos a principios
generales de Product.

La transferencia fuera del audio permanece abierta.

## 59. Segundo contraste fuera del audio — página escaneada

### 59.1 Situación ejercida

Se continuó la prueba provisional de transferencia utilizando un soporte visual.

El caso consiste en una página escaneada que puede utilizarse posteriormente
para:

- conservar su contenido;
- extraer texto;
- seleccionar regiones pertinentes;
- realizar anotaciones o transformaciones;
- incorporarla como material para otros trabajos.

La prueba se realiza sin presuponer que los resultados obtenidos constituyan
principios generales de Product.

### 59.2 N-AUD-01 sobre material visual

Una transformación, recorte, descripción o selección propuesta por el sistema
puede resultar mejor o complementaria respecto de la realizada inicialmente
por la persona.

Sin embargo, esa valoración no concede al sistema autoridad definitiva para
sustituir una alternativa humana que la persona desea conservar.

La persona puede:

- mantener su propia realización;
- adoptar la propuesta del sistema;
- sustituir una por otra;
- combinar ambas;
- incorporar únicamente una parte de la propuesta.

La decisión sobre qué contenido o transformación queda incorporado al trabajo
continúa perteneciendo a la persona.

Por tanto, `N-AUD-01 — Autoridad humana efectiva` resiste también este
contraste sobre soporte visual.

### 59.3 Pérdida de estructura durante una extracción textual

Se contrastó una página cuyo contenido incluye estructura visual relevante.

Por ejemplo, una tabla puede expresar mediante filas, columnas y posiciones
relaciones que no se conservan necesariamente al extraer únicamente una
secuencia de texto.

Aunque todas las palabras o valores permanezcan presentes, convertir la tabla
en texto lineal puede producir una pérdida relevante si desaparecen las
relaciones necesarias para interpretar el contenido.

Se confirma que conservar el contenido verbal no equivale necesariamente a
conservar suficientemente la información.

Si la página escaneada original permanece disponible, la estructura perdida en
la representación derivada puede todavía reconstruirse regresando a la fuente.

Si el original deja también de estar disponible, esa posibilidad puede
desaparecer.

### 59.4 Pérdida de una selección realizada sobre la imagen

Se contrastó una situación en la que la persona identifica y marca una región
de la página porque constituye la parte pertinente para su trabajo.

Si posteriormente la imagen permanece pero desaparece la selección, no se ha
perdido necesariamente contenido del original.

Sí se ha perdido una determinación ya realizada durante el trabajo.

La persona puede verse obligada a buscar nuevamente aquello que ya había
identificado.

Por tanto, la persistencia del original no garantiza por sí sola la
persistencia del trabajo realizado sobre él.

### 59.5 Pérdida del estado de revisión

Se contrastó finalmente una página revisada y aceptada por la persona que el
sistema continúa representando posteriormente como `pendiente de revisar`.

La discrepancia constituye una pérdida relevante.

El estado de revisión forma parte de la situación vigente del trabajo y puede
determinar actuaciones posteriores.

Después de una interrupción prolongada, una representación incorrecta de ese
estado puede generar una duda razonable sobre si la revisión llegó realmente a
completarse.

### 59.6 Resultado para N-AUD-02

`N-AUD-02 — Fidelidad del estado relevante` resiste el contraste sobre una
página escaneada.

La evidencia muestra tres clases diferentes de diferencias relevantes:

- estructura del contenido;
- determinaciones producidas durante el trabajo;
- estado vigente de la actuación.

Ninguna depende específicamente del soporte sonoro.

La investigación vuelve a mostrar que la información pertinente puede
encontrarse en:

- contenido;
- forma;
- estructura;
- relaciones;
- selecciones;
- estados de trabajo;
- u otras diferencias funcionales.

El criterio continúa siendo la pérdida que produciría su desaparición dentro
de la situación ejercida.

### 59.7 Estado de la transferencia provisional

Los dos núcleos candidatos han resistido hasta ahora contrastes sobre:

- aportaciones sonoras;
- material textual;
- material visual.

Este resultado aumenta la evidencia de que su alcance puede trascender el
audio, pero todavía no constituye una generalización a Product.

No se modifica todavía su denominación ni se deriva un nuevo compromiso de
Product.

## 60. Tercer contraste fuera del audio — datos estructurados

### 60.1 Situación ejercida

La prueba provisional de transferencia se extendió a un soporte diferente de
los anteriores: datos estructurados.

Se ejercieron tres transformaciones:

- posible eliminación de registros aparentemente duplicados;
- generación de un valor inferido para sustituir un dato ausente;
- normalización de una medida entre unidades físicamente equivalentes.

El objetivo continúa siendo intentar falsar `N-AUD-01` y `N-AUD-02`, no
generalizarlos anticipadamente.

### 60.2 Registros aparentemente duplicados

Dos registros pueden presentar los mismos valores visibles y, sin embargo,
corresponder a situaciones distintas:

- duplicación accidental de una misma observación;
- dos observaciones independientes que producen valores coincidentes.

Cuando el sistema no puede determinar suficientemente cuál de estas situaciones
se da, la similitud de los registros no justifica su eliminación unilateral.

El sistema puede detectar la posible duplicación, señalarla y proponer una
actuación.

La decisión sobre la eliminación debe permanecer en la persona cuando la
diferencia depende de información o finalidad que el sistema no puede
determinar suficientemente.

`N-AUD-01 — Autoridad humana efectiva` resiste por tanto también este contraste
sobre datos estructurados.

### 60.3 Datos observados y datos inferidos

Se contrastó una serie formada inicialmente por:

- día 1: `10`, observado;
- día 2: dato ausente;
- día 3: `14`, observado.

El sistema puede producir un valor intermedio `12` mediante una inferencia o
interpolación.

La conservación del valor `12` no resulta suficiente si desaparece la
información de que no fue obtenido mediante observación.

Esa diferencia puede determinar actuaciones posteriores, por ejemplo eliminar
todos los datos que no procedan de observación directa.

Por tanto, un valor puede conservarse numéricamente y haber perdido una
propiedad relevante necesaria para interpretarlo y utilizarlo correctamente.

Se incorpora como manifestación de `N-AUD-02` que el estatuto o procedencia
epistémica de un dato puede formar parte de su estado relevante cuando determina
posibilidades posteriores de interpretación o actuación.

Esto no deriva una obligación general de conservar toda la genealogía de cada
dato.

### 60.4 Transformaciones cuantitativamente equivalentes

Se intentó falsar `N-AUD-02` mediante una transformación considerada inicialmente
funcionalmente neutra:

`1 kg → 1000 g`

El contraste mostró que la premisa de neutralidad no puede deducirse únicamente
de la equivalencia física o matemática.

La unidad utilizada puede expresar una escala de interpretación pertinente para
la situación.

Por ejemplo, una cantidad comprada de fruta puede resultar naturalmente
expresada en kilogramos aunque exista una conversión exacta a gramos.

De forma más clara, una limitación de circulación expresada como:

`100 km/h`

puede resultar inmediatamente interpretable dentro de la escala ordinaria de
esa situación, mientras que una representación equivalente como:

`27,77 m/s`

puede conservar la magnitud física y perder parte de su adecuación
interpretativa.

Por tanto:

- equivalencia matemática no implica necesariamente equivalencia funcional;
- equivalencia técnica no basta por sí sola para demostrar ausencia de pérdida;
- la pertinencia de una diferencia debe comprobarse respecto de la situación en
  la que el material se interpreta o utiliza.

El contraste no falsifica `N-AUD-02`.

En cambio, impide considerar irrelevante una diferencia únicamente porque
exista una transformación cuantitativamente reversible.

### 60.5 Resultado provisional

Después del contraste sobre datos estructurados:

- `N-AUD-01` vuelve a resistir;
- `N-AUD-02` vuelve a resistir;
- la procedencia observada o inferida puede constituir estado relevante;
- una representación puede contener información pertinente de escala o contexto
  aunque otra representación sea matemáticamente equivalente.

La transferencia provisional presenta hasta ahora:

- soporte sonoro: ambos núcleos resisten;
- soporte textual: ambos núcleos resisten;
- soporte visual: ambos núcleos resisten;
- datos estructurados: ambos núcleos resisten.

Este resultado todavía no constituye una elevación a Product.

## 61. Límite externo de N-AUD-02 — diferencias técnicas sin función vigente

### 61.1 Problema

Después de comprobar `N-AUD-02 — Fidelidad del estado relevante` sobre soportes
sonoros, textuales, visuales y datos estructurados, se intentó determinar si el
núcleo obligaría también a conservar cualquier diferencia técnica o histórica
que hubiera existido.

Se ejerció una migración interna:

`A → B`

donde `A` y `B` representan formas técnicas diferentes de almacenar un mismo
material.

### 61.2 Migración funcionalmente sin pérdida

Una diferencia entre `A` y `B` no resulta relevante únicamente por existir.

La migración puede considerarse admisible cuando no produce pérdida ni
alteración de ninguna diferencia todavía pertinente para el trabajo.

La comprobación no puede limitarse a los datos visibles.

Puede ser necesario preservar, según la situación:

- datos;
- estructura;
- enlaces;
- referencias;
- procedencia;
- relaciones;
- estados;
- selecciones;
- capacidades posteriores de actuación;
- u otras propiedades funcionalmente relevantes.

Si la modificación técnica conserva suficientemente todo aquello de lo que
depende el trabajo y ninguna actuación pertinente requiere conocer que
anteriormente existió `A`, la historia de esa representación interna puede
desaparecer sin pérdida relevante.

Por tanto, `N-AUD-02` no deriva una obligación de conservar toda historia
técnica.

### 61.3 Migración con pérdida relevante

Si el cambio de almacenamiento produce pérdida de enlaces, referencias, datos
internos relevantes o cualquier otra propiedad necesaria para interpretar o
utilizar suficientemente el material, la modificación deja de ser
funcionalmente neutra.

En tal situación no resulta suficiente que los valores visibles parezcan
iguales.

Una modificación técnica que destruye información relevante no satisface la
fidelidad exigida por `N-AUD-02`.

### 61.4 Representación anterior que mantiene una función

Se ejerció además una situación en la que `A` permite posteriormente una
actuación concreta que no puede realizarse suficientemente a partir de `B`.

En ese caso la información relativa a `A` continúa siendo relevante.

Su conservación no se justifica porque constituya historia técnica, sino porque
mantiene una posibilidad pertinente de trabajo.

### 61.5 Límite obtenido

El contraste permite excluir una interpretación excesivamente amplia de
`N-AUD-02`.

El núcleo no protege:

- todo estado anterior;
- todo formato utilizado;
- toda migración realizada;
- toda representación interna;
- ni toda diferencia histórica.

Protege aquellas diferencias cuya pérdida alteraría todavía la interpretación,
el uso o las posibilidades pertinentes correspondientes al estado vigente.

Una diferencia puramente técnica puede desaparecer cuando su desaparición no
modifica ninguna de esas funciones.

### 61.6 Resultado provisional

Se identifica provisionalmente un límite externo de `N-AUD-02`:

> Una diferencia no exige conservación por el mero hecho de haber existido.
> Cuando una transformación conserva suficientemente todo el estado relevante
> y la diferencia anterior ya no sostiene ninguna posibilidad pertinente, esa
> diferencia puede dejar de conservarse sin pérdida.

Este resultado es compatible con los contrastes anteriores sobre objetivos
históricos, dudas resueltas y representaciones intermedias cuya función había
terminado.

No se deriva un nuevo núcleo.

## 62. Límite externo de N-AUD-01 — autonomía de ejecución y determinación humana

### 62.1 Problema

Después de comprobar `N-AUD-01 — Autoridad humana efectiva` sobre diferentes
soportes, se intentó determinar si el núcleo exigiría autorización humana para
toda actuación realizada por el sistema.

Se ejercieron tres situaciones destinadas a encontrar su límite externo.

### 62.2 Actuación técnica sin decisión humana pertinente

En la primera situación el sistema realiza una operación puramente interna,
como reconstruir una caché o reorganizar un índice.

Si la actuación:

- no modifica contenido;
- no altera significado;
- no elimina posibilidades pertinentes;
- no modifica decisiones de la persona;
- y no introduce ninguna nueva determinación relevante,

no resulta necesario solicitar autorización humana para ejecutarla.

Por tanto, `N-AUD-01` no exige participación humana en toda operación técnica.

### 62.3 Ejecución autónoma de un resultado ya determinado

En la segunda situación la persona determina suficientemente el resultado que
desea obtener.

Por ejemplo:

`Ordena estos registros cronológicamente.`

Una vez determinado ese resultado, el sistema puede realizar autónomamente las
operaciones técnicas necesarias para producirlo.

No resulta necesario solicitar autorización independiente para:

- comparar fechas;
- utilizar estructuras auxiliares;
- seleccionar un algoritmo;
- reconstruir índices;
- ni ejecutar otros medios técnicos necesarios.

Se distingue así:

- autoridad humana sobre la finalidad o la determinación pertinente;
- ejecución autónoma de los medios necesarios para realizarla.

La autoridad humana no implica micromanagement de la ejecución.

### 62.4 Orden insuficientemente determinada

Se contrastó después una instrucción general:

`Limpia este dataset.`

Durante su ejecución el sistema encuentra dos registros aparentemente iguales,
pero no puede determinar suficientemente si corresponden a:

- una duplicación accidental;
- o dos observaciones independientes coincidentes.

Eliminar uno de ellos no constituye entonces una mera operación técnica.

Requiere adoptar una interpretación que modifica materialmente la información.

Una orden general o abierta a varias interpretaciones relevantes no autoriza
por sí sola al sistema a escoger unilateralmente una de ellas.

En estas situaciones debe obtenerse concreción suficiente de los parámetros,
criterios o resultado deseado antes de clausurar la alternativa.

### 62.5 Límite obtenido

El contraste permite excluir una interpretación excesivamente amplia de
`N-AUD-01`.

El núcleo no exige:

- autorización humana para toda operación;
- confirmación de cada paso técnico;
- elección humana del mecanismo de ejecución;
- ni participación continua durante una actuación suficientemente determinada.

La intervención humana resulta necesaria cuando falta determinar
suficientemente una elección relevante cuya resolución modifica el resultado o
clausura alternativas todavía válidas.

### 62.6 Reformulación provisional de N-AUD-01

A la luz de los contrastes realizados, el núcleo puede formularse
provisionalmente así:

> Cuando una actuación requiere escoger entre alternativas relevantes y esa
> elección no está suficientemente determinada por la finalidad, los criterios
> o la delegación de la persona, el sistema no debe clausurar por sí mismo esas
> alternativas. Debe permitir que la decisión sea determinada suficientemente
> por la persona. Una vez suficientemente determinado el resultado o los
> criterios de actuación, el sistema puede ejecutar autónomamente las
> operaciones necesarias que no introduzcan nuevas determinaciones relevantes.

### 62.7 Resultado provisional

Se identifica un límite externo de `N-AUD-01`:

- autonomía técnica compatible con una finalidad suficientemente determinada;
- necesidad de concreción humana cuando una actuación introduce una elección
  relevante no comprendida suficientemente en esa determinación.

Este resultado no deriva un nuevo núcleo.

## 63. Auditoría de generalización provisional de los núcleos

### 63.1 Objeto

Después de las pruebas de transferencia y de la identificación de límites
externos para `N-AUD-01` y `N-AUD-02`, se audita si los núcleos continúan
dependiendo de alguna propiedad específicamente sonora.

La auditoría no pretende elevarlos a Product.

Su objetivo se limita a determinar si el prefijo `AUD`, adecuado a su origen,
continúa siendo adecuado a su alcance empírico y a su formulación actual.

### 63.2 Dependencia semántica del soporte sonoro

`N-AUD-01 — Autoridad humana efectiva` se formula actualmente mediante:

- alternativas relevantes;
- finalidad;
- criterios;
- delegación;
- determinación humana;
- autonomía de ejecución.

Ninguno de estos elementos requiere que el material sea sonoro.

La formulación no depende de:

- audio;
- voz;
- transcripción;
- localización temporal;
- ni correspondencia entre audio y texto.

`N-AUD-02 — Fidelidad del estado relevante` se formula actualmente mediante:

- diferencias relevantes;
- estado vigente;
- interpretación;
- utilización;
- posibilidades pertinentes de actuación.

Tampoco contiene una dependencia necesaria del soporte sonoro.

### 63.3 Evidencia obtenida fuera del audio

Ambos núcleos han sido ejercidos provisionalmente sobre:

- material sonoro;
- material textual;
- una página escaneada;
- datos estructurados.

`N-AUD-01` ha resistido situaciones relativas a:

- decisiones sobre contenido;
- transformaciones visuales;
- eliminación de registros ambiguos;
- autonomía de operaciones técnicas;
- ejecución de objetivos ya suficientemente determinados;
- necesidad de concreción cuando una instrucción admite varias
  interpretaciones relevantes.

`N-AUD-02` ha resistido situaciones relativas a:

- estado de documentos;
- estructura visual;
- selecciones realizadas durante el trabajo;
- procedencia observada o inferida de datos;
- unidades y escala de interpretación;
- enlaces, referencias y otras propiedades internas funcionalmente relevantes.

Por tanto, la evidencia disponible ya no procede exclusivamente de casos
sonoros.

### 63.4 Límites externos obtenidos

La transferencia no se ha limitado a acumular casos favorables.

Para `N-AUD-01` se determinó que la autoridad humana efectiva no exige:

- autorización para toda operación técnica;
- confirmación de cada paso;
- elección humana del mecanismo de ejecución;
- ni participación continua después de que resultado o criterios hayan quedado
  suficientemente determinados.

Para `N-AUD-02` se determinó que la fidelidad del estado relevante no exige:

- conservar todo estado histórico;
- conservar toda representación técnica anterior;
- conservar todo formato interno;
- ni registrar una diferencia cuya desaparición ya no altera interpretación,
  uso o posibilidades pertinentes.

Estos límites permiten excluir interpretaciones universalistas excesivas de
ambos núcleos.

### 63.5 Resultado de la auditoría

No se ha identificado en la formulación vigente de ninguno de los dos núcleos
una propiedad que dependa específicamente del soporte sonoro.

La evidencia disponible muestra además que ambos han resistido contrastes sobre
varias clases heterogéneas de material.

Por tanto, el prefijo `AUD` deja de resultar adecuado como descripción de su
alcance provisional.

Este resultado no demuestra todavía que los núcleos:

- sean universales;
- se apliquen a toda situación de producto;
- constituyan compromisos de Product;
- ni justifiquen por sí mismos un nuevo `PV`.

### 63.6 Renombrado provisional dentro de la investigación 28

A partir de esta sección se adoptan provisionalmente las denominaciones:

`N-I28-01 — Autoridad humana efectiva`

y

`N-I28-02 — Fidelidad del estado relevante`.

Los identificadores anteriores:

- `N-AUD-01`;
- `N-AUD-02`;

se conservan en las secciones históricas en las que fueron derivados.

No se reescriben retroactivamente porque documentan correctamente el origen de
la investigación.

Desde esta sección:

`N-AUD-01 → N-I28-01`

`N-AUD-02 → N-I28-02`

### 63.7 Formulación provisional de N-I28-01

> Cuando una actuación requiere escoger entre alternativas relevantes y esa
> elección no está suficientemente determinada por la finalidad, los criterios
> o la delegación de la persona, el sistema no debe clausurar por sí mismo esas
> alternativas. Debe permitir que la decisión sea determinada suficientemente
> por la persona. Una vez suficientemente determinado el resultado o los
> criterios de actuación, el sistema puede ejecutar autónomamente las
> operaciones necesarias que no introduzcan nuevas determinaciones relevantes.

### 63.8 Formulación provisional de N-I28-02

> El sistema debe conservar y representar suficientemente aquellas diferencias
> cuyo mantenimiento continúe siendo necesario para interpretar correctamente
> el estado vigente del material o del trabajo, utilizarlo pertinentemente o
> preservar posibilidades de actuación todavía relevantes. Una diferencia no
> requiere conservación por el mero hecho de haber existido cuando su
> desaparición ya no altera ninguna de esas funciones.

### 63.9 Alcance del resultado

El renombrado constituye una generalización interna provisional de la
investigación 28.

No constituye:

- modificación de Product;
- derivación de `PV-005`;
- generalización normativa a toda la plataforma;
- compromiso arquitectónico;
- ni decisión de implementación.

La posible elevación posterior de estos núcleos requerirá una evaluación
independiente de su relación con los compromisos de Product ya existentes.

## 64. Auditoría de absorción por PV-001–PV-004

### 64.1 Pregunta

Después de la generalización interna provisional de `N-I28-01` y `N-I28-02`,
se examina si ambos núcleos aportan realmente un compromiso no contenido en
`PV-001`–`PV-004` o si pueden derivarse suficientemente de los compromisos de
Product ya existentes.

La auditoría se realiza mediante implicación y contraejemplo, no por semejanza
temática.

### 64.2 N-I28-01 frente a PV-001

`PV-001` establece la posibilidad de que actuaciones o posibilidades de una
situación dependan de aquello que situaciones anteriores hicieron disponible.

No determina quién debe resolver una elección relevante cuando varias
alternativas continúan abiertas.

Un sistema puede preservar dependencias entre situaciones y, sin embargo,
resolver unilateralmente una ambigüedad no determinada suficientemente por la
persona.

Por tanto, `PV-001` no absorbe `N-I28-01`.

### 64.3 N-I28-01 frente a PV-002

`PV-002` protege la posibilidad de que una aportación anterior continúe
disponible después de producirse aportaciones posteriores y después de una
interrupción.

Esta protección no determina quién puede clausurar una elección posterior
todavía abierta.

La conservación de `X` junto a `Y` resulta compatible con una actuación del
sistema que escoja unilateralmente entre alternativas relevantes no
suficientemente determinadas.

Por tanto, `PV-002` no absorbe `N-I28-01`.

### 64.4 N-I28-01 frente a PV-003

`PV-003` constituye el antecedente más próximo.

La legitimidad de una diferencia establecida no pertenece al runtime como
autoridad semántica.

Sin embargo, el alcance de `PV-003` permanece ligado a la reconocibilidad de
una aportación presente y a la determinación de una diferencia establecida o
de su ausencia.

No deriva por sí mismo una regla general sobre:

- instrucciones ambiguas;
- elección entre transformaciones válidas;
- alcance de una delegación;
- autonomía de ejecución;
- ni clausura de alternativas humanas todavía no determinadas.

Por tanto, `PV-003` aporta un antecedente parcial pero no absorbe
`N-I28-01`.

### 64.5 N-I28-01 frente a PV-004

`PV-004` protege la posibilidad de una elaboración humana previa a una
determinación pertinente todavía desconocida del sistema.

Esta protección temporal no determina necesariamente quién conserva la
autoridad final después de que la asistencia haya sido producida.

Por tanto, `PV-004` no absorbe `N-I28-01`.

### 64.6 Contraejemplo conjunto para N-I28-01

Resulta concebible un sistema que:

- permita dependencias entre situaciones conforme a `PV-001`;
- conserve aportaciones anteriores conforme a `PV-002`;
- no asuma la legitimidad semántica contemplada por `PV-003`;
- permita elaboración previa conforme a `PV-004`;

y que, sin embargo, ante una instrucción suficientemente ambigua como
`Limpia este dataset`, adopte unilateralmente una interpretación relevante y
elimine información.

Ese sistema satisfaría los compromisos existentes y violaría
`N-I28-01`.

No se ha demostrado por tanto que `N-I28-01` sea consecuencia necesaria de
`PV-001`–`PV-004`.

### 64.7 N-I28-02 frente a PV-001

`PV-001` permite que una posibilidad posterior dependa de algo disponible en
una situación anterior.

Esto cubre algunos casos en los que conservar una diferencia resulta necesario,
pero no deriva una obligación general de fidelidad respecto del estado
relevante.

Una representación incorrecta de un estado vigente puede constituir una
pérdida aun sin depender del patrón específico establecido por `PV-001`.

Por tanto, `PV-001` no absorbe `N-I28-02`.

### 64.8 N-I28-02 frente a PV-002

`PV-002` constituye un caso especialmente próximo.

La disponibilidad continuada de una aportación anterior puede entenderse como
una diferencia relevante que no debe perderse mientras continúe sosteniendo
posibilidades posteriores.

Sin embargo, `PV-002` no deriva por sí mismo la conservación suficiente de
otras diferencias relevantes como:

- estructura;
- estado de revisión o cierre;
- procedencia observada o inferida;
- literalidad o modificación;
- selecciones;
- relaciones funcionales.

Por tanto, `PV-002` no absorbe `N-I28-02`.

La posible relación inversa deberá evaluarse separadamente si `N-I28-02`
alcanzara alguna vez nivel de Product.

### 64.9 N-I28-02 frente a PV-003

`PV-003` requiere reconocibilidad suficiente para distinguir una diferencia
establecida de su ausencia.

Esto constituye un antecedente parcial de fidelidad representacional.

Sin embargo, no deriva una regla general sobre todas las diferencias cuya
conservación continúe siendo necesaria para interpretar, utilizar o actuar
sobre el estado vigente.

Por tanto, `PV-003` no absorbe `N-I28-02`.

### 64.10 N-I28-02 frente a PV-004

`PV-004` protege una secuencia de elaboración y asistencia.

Un sistema puede satisfacer esa posibilidad y posteriormente representar de
forma incorrecta un estado, perder estructura pertinente o borrar una
distinción funcionalmente necesaria.

Por tanto, `PV-004` no absorbe `N-I28-02`.

### 64.11 Contraejemplo conjunto para N-I28-02

Resulta concebible un sistema que satisfaga `PV-001`–`PV-004` y, sin embargo:

- represente como `En progreso` un trabajo efectivamente cerrado;
- convierta una tabla relevante en texto lineal perdiendo sus relaciones;
- o presente como observado un valor que fue inferido.

Ninguno de estos casos está necesariamente excluido por los compromisos de
Product existentes.

Por tanto, no se ha demostrado que `N-I28-02` sea consecuencia necesaria de
`PV-001`–`PV-004`.

### 64.12 Resultado provisional

La auditoría no encuentra absorción completa de ninguno de los dos núcleos.

Se establece provisionalmente:

- `N-I28-01` mantiene relaciones parciales especialmente con `PV-003` y
  `PV-004`, pero introduce una diferencia no cubierta suficientemente por
  ellos;
- `N-I28-02` mantiene relaciones parciales especialmente con `PV-001`,
  `PV-002` y `PV-003`, pero su alcance no queda agotado por esos compromisos.

Este resultado no implica todavía que ambos núcleos deban elevarse a Product.

Continúa abierta una cuestión diferente:

> ¿qué clase de resultados son `N-I28-01` y `N-I28-02`, y pertenece esa clase
> al nivel normativo de Product o a otro cuerpo del proyecto?

No se deriva todavía `PV-005`.

## 65. Contraste contra el valor pleno del producto

### 65.1 Pregunta

Después de comprobar que `N-I28-01` y `N-I28-02` no quedan absorbidos por
`PV-001`–`PV-004`, se plantea una prueba diferente:

> ¿Puede existir un producto que satisfaga plenamente el valor pretendido y
> que, aun así, viole alguno de los dos núcleos?

La prueba no se limita a comprobar compatibilidad con los compromisos de
Product actualmente documentados.

Busca determinar si la pérdida del núcleo resulta compatible con el valor
humano que el producto pretende ofrecer.

La prueba sólo resulta aplicable a situaciones pertenecientes al ámbito de uso
que el producto pretende servir.

### 65.2 Violación de N-I28-01

Se considera una situación en la que una instrucción humana admite varias
interpretaciones relevantes y la finalidad, los criterios o la delegación
existentes no determinan suficientemente cuál debe adoptarse.

Si el sistema escoge unilateralmente una de ellas y clausura las restantes,
puede modificar el resultado del trabajo mediante una determinación que la
persona todavía no había realizado ni delegado suficientemente.

Por ejemplo, ante una instrucción general de limpieza de datos, el sistema
puede eliminar como duplicado un registro que correspondía en realidad a una
observación independiente.

En esta situación no se pierde únicamente una preferencia operativa.

La persona pierde capacidad efectiva de determinar qué debe incorporarse a su
propio trabajo y puede quedar asociada a un resultado cuya determinación
relevante fue introducida unilateralmente por el sistema.

No se ha conseguido construir un producto que viole `N-I28-01` dentro de una
situación pertinente y que, al mismo tiempo, conserve plenamente el valor
pretendido de asistencia a la actuación humana.

### 65.3 Violación de N-I28-02

Se considera un producto que conserva material pero pierde o representa
incorrectamente diferencias todavía necesarias para interpretarlo o utilizarlo.

Ejemplos ejercidos durante la investigación incluyen:

- un trabajo cerrado representado como `En progreso`;
- un dato inferido presentado como observado;
- una tabla convertida en contenido lineal perdiendo sus relaciones;
- una selección ya realizada que desaparece y obliga a reconstruir trabajo.

En estos casos el material puede continuar físicamente disponible y, sin
embargo, la persona deja de disponer de una representación suficientemente
fiel de la situación vigente.

Esto puede producir:

- interpretaciones incorrectas;
- actuaciones posteriores erróneas;
- pérdida de trabajo ya realizado;
- necesidad de reconstrucción;
- o pérdida de posibilidades previamente disponibles.

No se ha conseguido construir un producto que viole `N-I28-02` dentro de una
situación pertinente y que, al mismo tiempo, conserve plenamente el valor
pretendido.

### 65.4 Importancia de los límites previamente obtenidos

El resultado no implica que toda actuación autónoma del sistema viole
`N-I28-01`.

Cuando una finalidad o unos criterios están suficientemente determinados, el
sistema puede ejecutar autónomamente las operaciones necesarias que no
introduzcan nuevas determinaciones relevantes.

Tampoco implica que toda diferencia histórica o técnica deba conservarse bajo
`N-I28-02`.

Una diferencia puede desaparecer cuando ya no cumple ninguna función pertinente
para interpretar, utilizar o actuar sobre el estado vigente.

Por tanto, la incompatibilidad con el valor pleno aparece dentro de los límites
funcionales ya establecidos para ambos núcleos.

### 65.5 Resultado provisional

La prueba produce una diferencia respecto de la auditoría anterior.

Resulta concebible un sistema que satisfaga `PV-001`–`PV-004` y viole alguno de
los núcleos.

Sin embargo, no se ha conseguido construir, dentro del ámbito pertinente del
producto:

- un producto que satisfaga plenamente el valor pretendido y viole
  `N-I28-01`;
- ni un producto que satisfaga plenamente el valor pretendido y viole
  `N-I28-02`.

La evidencia obtenida favorece provisionalmente la hipótesis de que ambos
núcleos expresan compromisos de valor de producto no recogidos suficientemente
por `PV-001`–`PV-004`.

### 65.6 Estado

El resultado no deriva todavía automáticamente `PV-005`.

Antes de una elevación normativa debe determinarse:

- si ambos núcleos constituyen dos compromisos de Product independientes;
- si uno puede derivarse del otro a nivel de valor;
- o si ambos son manifestaciones de un único compromiso de nivel superior.

La investigación permanece abierta en ese punto.

## 66. Falsación de una posible reducción común de N-I28-01 y N-I28-02

### 66.1 Pregunta

Después de obtener evidencia de que `N-I28-01` y `N-I28-02` expresan
compromisos no absorbidos suficientemente por `PV-001`–`PV-004`, se examina si
ambos pueden reducirse a un único valor superior.

Se contrastan tres posibilidades:

1. que `N-I28-01` pueda derivarse de `N-I28-02`;
2. que `N-I28-02` pueda derivarse de `N-I28-01`;
3. que ambos sean derivables de un único compromiso superior más fundamental.

### 66.2 N-I28-02 no implica N-I28-01

Se considera un sistema que conserva y representa fielmente todo el estado
relevante.

Ante una instrucción ambigua de limpieza de datos, el sistema escoge
unilateralmente una interpretación y elimina un registro.

La actuación queda posteriormente documentada con absoluta fidelidad.

En esta situación:

- la fidelidad del estado puede permanecer satisfecha;
- la autoridad humana efectiva ha sido vulnerada.

Por tanto:

`N-I28-02` no implica `N-I28-01`.

### 66.3 N-I28-01 no implica N-I28-02

Se considera ahora un sistema que no adopta unilateralmente ninguna decisión
humana relevante.

Toda elección no suficientemente determinada se devuelve a la persona.

Sin embargo, posteriormente el sistema representa como `En progreso` un
trabajo cerrado o presenta como observado un dato previamente inferido.

En esta situación:

- la autoridad humana efectiva puede permanecer satisfecha;
- la fidelidad del estado relevante ha sido vulnerada.

Por tanto:

`N-I28-01` no implica `N-I28-02`.

Los dos núcleos continúan siendo provisionalmente irreducibles entre sí.

### 66.4 Candidato de valor común: conducción humana efectiva

Se ejerció como posible compromiso superior:

> La persona debe poder conducir y reanudar efectivamente su trabajo de acuerdo
> con su finalidad.

El candidato permite explicar intuitivamente ambos núcleos:

- la conducción requiere capacidad de determinar elecciones relevantes;
- también requiere información suficientemente fiel sobre el estado del
  trabajo.

Sin embargo, el candidato resulta más amplio que la conjunción de ambos.

Puede existir una situación en la que:

- `N-I28-01` se satisfaga;
- `N-I28-02` se satisfaga;

y la reanudación resulte imposible porque material pertinente anterior haya
dejado completamente de estar disponible.

Este problema se aproxima a compromisos ya expresados mediante otros valores de
Product, especialmente `PV-002`.

Por tanto, la conducción y reanudación humana efectiva no constituye por ahora
una reducción específica de los dos núcleos.

### 66.5 Candidato de valor común: control humano

Se contrastó también la posibilidad de interpretar ambos núcleos como
manifestaciones de control humano sobre el trabajo.

Este candidato explica directamente `N-I28-01`.

Sin embargo, `N-I28-02` incluye situaciones en las que existe una pérdida
relevante sin que esté pendiente ninguna elección humana.

Por ejemplo:

- confundir un dato inferido con un dato observado;
- perder las relaciones estructurales de una tabla.

La fidelidad puede ser necesaria independientemente de una cuestión de control
decisional.

Por tanto, el control humano no absorbe suficientemente `N-I28-02`.

### 66.6 Candidato de valor común: autoría o responsabilidad

Se examinó además si ambos núcleos podían reducirse a la responsabilidad de la
persona sobre aquello que constituye su trabajo.

Este criterio explica parte de `N-I28-01`, porque una determinación introducida
unilateralmente por el sistema puede atribuir a la persona un resultado que no
decidió.

Sin embargo, existen pérdidas cubiertas por `N-I28-02` cuya relevancia no
depende de autoría.

La procedencia observada o inferida de un dato, por ejemplo, puede ser
necesaria para su utilización correcta aun antes de constituir un documento o
resultado atribuible a una persona.

Por tanto, autoría o responsabilidad tampoco reducen suficientemente ambos
núcleos.

### 66.7 Rechazo de una reducción meramente nominal

Un principio superior formulado de manera suficientemente abstracta podría
abarcar ambos núcleos y otros compromisos de Product.

Esto no constituye por sí mismo una reducción.

Para aceptar una reducción real sería necesario identificar un criterio
independiente cuyo contenido permitiera derivar necesariamente ambos núcleos,
sin limitarse a reformular su conjunción ni absorber indiscriminadamente otros
valores.

No se ha identificado todavía ese criterio.

### 66.8 Resultado provisional

La investigación mantiene:

- `N-I28-01` y `N-I28-02` son irreducibles entre sí;
- no se ha demostrado que constituyan manifestaciones reducibles de un único
  compromiso nuevo;
- los candidatos de valor común examinados resultan demasiado amplios o no
  cubren suficientemente uno de los núcleos.

Se favorece provisionalmente:

`H-IND-01 — N-I28-01 y N-I28-02 expresan dos diferencias de valor independientes,
aunque puedan cooperar en una misma actuación humana.`

Este resultado no implica todavía crear dos nuevos compromisos de Product.

Antes de cualquier elevación deberá comprobarse si cada núcleo puede formularse
de manera mínima, estable y propia del nivel Product sin introducir mecanismos,
políticas de interfaz ni exigencias de realización.

## 67. Reducción de Product de N-I28-01

### 67.1 Objeto

Después de establecer provisionalmente que `N-I28-01 — Autoridad humana
efectiva` expresa una diferencia de valor no absorbida por `PV-001`–`PV-004`,
se somete el núcleo a una reducción específica de Product.

El objetivo consiste en eliminar:

- mecanismos;
- comportamientos operativos;
- políticas de interacción;
- detalles de delegación;
- condiciones propias de la realización;

y comprobar si permanece una diferencia humana mínima formulable como
compromiso de Product.

### 67.2 Elementos no pertenecientes a la formulación mínima

La investigación ha utilizado actuaciones como:

- pedir concreción;
- detener una ejecución;
- proponer alternativas;
- solicitar confirmación;
- ejecutar autónomamente operaciones técnicas;
- interpretar criterios;
- detectar duplicados.

Estas actuaciones han permitido investigar el núcleo, pero no constituyen por
sí mismas el valor que debe preservarse.

No se incorporan a la formulación mínima de Product.

Tampoco se adopta como principio general que la persona deba decidir cada
operación realizada por el sistema.

Los contrastes anteriores han demostrado que una actuación técnica puede
ejecutarse autónomamente cuando no introduce una nueva determinación relevante
que continúe correspondiendo a la persona.

### 67.3 Rechazo de una formulación excesivamente amplia

No se adopta:

`La persona debe tener siempre la última palabra sobre toda actuación.`

Esta formulación incluiría indebidamente:

- operaciones internas sin relevancia humana;
- medios técnicos de ejecución;
- actuaciones suficientemente determinadas previamente;
- elecciones cuya realización haya sido encomendada suficientemente.

Tampoco se fundamenta el núcleo en una noción general de propiedad sobre la
información.

La diferencia investigada puede formularse sin introducir ese compromiso
adicional.

### 67.4 Residuo irreducible

Después de las eliminaciones permanecen cuatro componentes:

1. existe una decisión o determinación;
2. esa decisión resulta relevante para el trabajo;
3. su resolución continúa correspondiendo a la persona;
4. debe permanecer una posibilidad efectiva de que la persona la determine.

Eliminar la relevancia extendería el compromiso a elecciones puramente
técnicas.

Eliminar la referencia a aquello cuya resolución continúa correspondiendo a la
persona impediría distinguir decisiones humanas de actuaciones legítimamente
delegadas o de condiciones que no dependen de elección humana.

Eliminar la efectividad permitiría satisfacer nominalmente el compromiso aunque
la actuación humana ya no pudiera realizarse materialmente.

### 67.5 Candidato mínimo de Product

Se formula provisionalmente:

`C-PV-I28-01 — Determinación humana efectiva`

> La plataforma preserva la posibilidad efectiva de que la persona determine
> las decisiones relevantes de su trabajo cuya resolución siga
> correspondiéndole.

La formulación no prescribe un mecanismo concreto.

### 67.6 Consecuencias derivadas que no forman parte del compromiso

Del candidato pueden derivarse en situaciones concretas consecuencias como:

- no clausurar prematuramente una alternativa todavía correspondiente a una
  decisión humana;
- solicitar concreción cuando resulte necesaria;
- permitir corrección o sustitución de una propuesta;
- ejecutar autónomamente aquello que ya esté suficientemente determinado.

Estas consecuencias no se incorporan a la formulación mínima porque pertenecen
a su realización en situaciones concretas.

### 67.7 Contraste con la delegación

Una encomienda suficientemente determinada puede modificar qué decisión sigue
correspondiendo directamente a la persona.

Por ejemplo, una instrucción equivalente a:

`Elige tú cuál de estas alternativas satisface mejor el criterio establecido`

puede habilitar una determinación asistida sin exigir una nueva elección humana
sobre cada paso.

La formulación mínima no necesita mencionar explícitamente la delegación.

La expresión:

`cuya resolución siga correspondiéndole`

delimita provisionalmente el ámbito del compromiso sin fijar un mecanismo para
determinar esa correspondencia.

### 67.8 Contraste con la autonomía técnica

Una operación interna como reconstruir una caché o seleccionar un algoritmo no
queda protegida por el candidato cuando no constituye una decisión relevante
del trabajo cuya resolución corresponda a la persona.

Por tanto:

`determinación humana efectiva ≠ micromanagement humano`.

### 67.9 Estado

La reducción deja un residuo que puede formularse en términos de una
posibilidad humana y sin introducir mecanismos de realización.

Esto proporciona evidencia favorable para considerar
`C-PV-I28-01 — Determinación humana efectiva` como candidato a compromiso de
Product.

No se eleva todavía a `PV-005`.

Antes de una elevación deberá intentar falsarse la formulación mínima resultante
como compromiso de Product.

## 68. Falsación de C-PV-I28-01

### 68.1 Objeto

Se intenta falsar la formulación mínima:

`C-PV-I28-01 — Determinación humana efectiva`

> La plataforma preserva la posibilidad efectiva de que la persona determine
> las decisiones relevantes de su trabajo cuya resolución siga
> correspondiéndole.

Se ejercen tres contraejemplos destinados a comprobar si la formulación exige
más de aquello que pertenece al valor del producto.

### 68.2 F1 — decisión relevante fuera del ámbito de la plataforma

Se considera la elección entre imprimir posteriormente un documento en formato
A4 o A3.

La decisión puede resultar relevante para la persona y corresponderle
plenamente.

Sin embargo, esto no implica que cualquier posibilidad relacionada con el
trabajo deba ser realizada por la plataforma.

Si las características físicas de impresión quedan fuera de las capacidades
que la plataforma proporciona, la imposibilidad de producir una determinada
opción de impresión no constituye por sí misma una pérdida de valor del
producto.

Se distingue:

- que una decisión resulte relevante para el trabajo de la persona;
- que la posibilidad sobre la que se decide pertenezca al ámbito de actuación
  de la plataforma.

Una característica que quede fuera de dicho ámbito no genera una obligación de
hacerla realizable.

### 68.3 Imposibilidad conocida dentro de una capacidad ofrecida

Si una posibilidad pertenece al ámbito tratado por la plataforma pero una
restricción externa la hace materialmente imposible, impedir una operación
imposible no vulnera la autoridad humana.

Por ejemplo, si la plataforma conoce que un dispositivo externo no admite un
formato determinado, puede resultar valioso informar suficientemente de esa
restricción.

La autoridad humana no exige representar como disponible una posibilidad que
materialmente no existe.

### 68.4 F2 — sustitución unilateral de una alternativa todavía válida

Se considera una situación en la que un fragmento puede incorporarse como:

- cita literal;
- paráfrasis.

Ambas alternativas son válidas y permanecen disponibles.

La persona todavía no ha determinado cuál desea incorporar.

Si el sistema considera superior la paráfrasis y elimina unilateralmente la
posibilidad de conservar la cita literal, se produce una pérdida de valor
aunque la paráfrasis sea excelente y conserve correctamente el significado.

La calidad atribuida por el sistema a una alternativa no sustituye la
determinación humana cuando la elección continúa correspondiendo a la persona.

La asistencia puede:

- proponer;
- comparar;
- complementar;
- recomendar.

No puede convertir su propia valoración en decisión definitiva cuando esa
determinación permanece en el ámbito de la persona.

El contraejemplo no falsifica `C-PV-I28-01`.

Lo refuerza dentro de su ámbito propio.

### 68.5 F3 — extinción externa de una alternativa

Se considera una convocatoria cuyo plazo termina antes de que la persona decida
si enviar un documento.

Antes del vencimiento pueden existir dos posibilidades reales:

- enviar;
- no enviar.

Después del vencimiento, la primera deja materialmente de existir.

La desaparición no ha sido producida por una decisión de la plataforma y ésta
no posee capacidad para mantener abierto el plazo externo.

No existe por tanto una violación de la determinación humana efectiva por el
mero hecho de que una condición externa extinga una posibilidad.

La plataforma no está obligada a preservar posibilidades que el estado real de
la situación ha hecho imposibles.

### 68.6 Diferencia entre clausura y desaparición de una posibilidad

Los contrastes obligan a distinguir:

- una alternativa real clausurada por la propia plataforma mientras su
  determinación continúa correspondiendo a la persona;
- una alternativa que deja de existir por una condición externa o constitutiva
  de la situación.

La primera puede vulnerar `C-PV-I28-01`.

La segunda no constituye por sí misma una vulneración.

### 68.7 Reformulación del candidato

Los contraejemplos no falsifican el residuo de Product, pero muestran que su
formulación anterior era demasiado amplia respecto del ámbito y de la
existencia material de las alternativas.

Se reformula provisionalmente:

`C-PV-I28-01 — Determinación humana efectiva`

> Dentro de su ámbito de actuación, la plataforma preserva la posibilidad
> efectiva de que la persona determine las decisiones relevantes de su trabajo
> que sigan correspondiéndole, mientras existan alternativas reales sobre las
> que esa determinación pueda ejercerse.

La expresión `alternativas reales` se refiere a las posibilidades disponibles
mientras la decisión permanece abierta.

No permite justificar una clausura introducida por la propia plataforma
mediante el argumento posterior de que la alternativa eliminada ya no existe.

### 68.8 Resultado

Los tres intentos de falsación delimitan pero no eliminan el candidato.

Se establece provisionalmente que:

- `C-PV-I28-01` no obliga a proporcionar posibilidades ajenas al ámbito de la
  plataforma;
- no obliga a mantener posibilidades materialmente imposibles;
- no impide representar correctamente restricciones externas;
- sí protege la determinación humana cuando varias alternativas reales
  permanecen disponibles dentro del ámbito del producto y su elección continúa
  correspondiendo a la persona.

El candidato sobrevive a la falsación con una delimitación más precisa.

No se eleva todavía a un identificador `PV`.

## 69. Reducción de la cláusula de ámbito de C-PV-I28-01

### 69.1 Pregunta

Después de la falsación de `C-PV-I28-01`, su formulación provisional incluía:

> Dentro de su ámbito de actuación, la plataforma preserva la posibilidad
> efectiva de que la persona determine las decisiones relevantes de su trabajo
> que sigan correspondiéndole, mientras existan alternativas reales sobre las
> que esa determinación pueda ejercerse.

Se examina si la expresión:

`dentro de su ámbito de actuación`

forma parte del compromiso específico o constituye únicamente una condición
general de alcance aplicable a cualquier compromiso de Product.

### 69.2 Eliminación experimental

Se elimina provisionalmente la cláusula:

> La plataforma preserva la posibilidad efectiva de que la persona determine
> las decisiones relevantes de su trabajo que sigan correspondiéndole,
> mientras existan alternativas reales sobre las que esa determinación pueda
> ejercerse.

La eliminación no implica que la plataforma pase a ser responsable de toda
posibilidad relacionada de algún modo con el trabajo humano.

El compromiso continúa teniendo como sujeto a la plataforma y debe
interpretarse dentro de las situaciones pertenecientes al dominio que Product
pretende servir.

### 69.3 Revisión del contraejemplo F1

La elección entre una impresión física A4 o A3 puede ser relevante para el
trabajo de una persona sin que la plataforma intervenga en la impresión física.

Si esa actuación queda fuera de las situaciones que el producto media, la
plataforma no está clausurando la elección ni impidiendo que la persona la
determine posteriormente mediante los medios correspondientes.

No resulta necesario incorporar al compromiso una excepción expresa para toda
posibilidad exterior al producto.

El alcance del producto precede lógicamente a la aplicación de sus compromisos.

### 69.4 Riesgo de circularidad

Mantener la expresión `dentro de su ámbito de actuación` dentro del propio
compromiso introduce además un posible riesgo.

Si el ámbito pudiera definirse posteriormente a partir de aquello que la
realización decide proporcionar, una capacidad protegida por el compromiso
podría excluirse simplemente declarándola fuera de dicho ámbito.

La determinación del alcance de Product no debe poder utilizarse como una
excepción ad hoc para evitar un compromiso ya aplicable a una situación
perteneciente al producto.

Por tanto, el alcance debe establecerse independientemente de la realización
concreta del compromiso.

### 69.5 Relación con los compromisos existentes

Los restantes compromisos de Product tampoco necesitan repetir en cada
formulación una cláusula equivalente a:

`dentro del ámbito de actuación de la plataforma`.

Su alcance se obtiene del cuerpo Product y de las situaciones a las que se
refieren.

No se encuentra una razón suficiente para introducir únicamente en
`C-PV-I28-01` una cláusula transversal de ese tipo.

### 69.6 Conservación de la condición de alternativas reales

La expresión relativa a la existencia de alternativas reales no se elimina en
esta reducción.

El contraste F3 mostró que una decisión humana no obliga a la plataforma a
mantener disponible una posibilidad que ha dejado materialmente de existir por
una condición externa o constitutiva.

Esta diferencia pertenece al contenido específico del candidato.

También impide justificar retroactivamente una clausura introducida por la
propia plataforma: una alternativa que era real mientras la decisión
permanecía abierta no deja de estar protegida por el mero hecho de que el
sistema la haya eliminado posteriormente.

### 69.7 Formulación mínima resultante

Se mantiene provisionalmente:

`C-PV-I28-01 — Determinación humana efectiva`

> La plataforma preserva la posibilidad efectiva de que la persona determine
> las decisiones relevantes de su trabajo que sigan correspondiéndole,
> mientras existan alternativas reales sobre las que esa determinación pueda
> ejercerse.

La cláusula:

`dentro de su ámbito de actuación`

se elimina de la formulación mínima.

Su contenido se considera una condición transversal de alcance de Product, no
una diferencia específica del compromiso investigado.

### 69.8 Estado

La eliminación de la cláusula de ámbito no ha producido un contraejemplo que
falsifique el candidato.

La formulación resultante conserva:

- autoridad humana sólo sobre decisiones que continúan correspondiendo a la
  persona;
- necesidad de efectividad material de esa determinación;
- existencia de alternativas reales como condición de ejercicio;
- independencia respecto de mecanismos concretos.

`C-PV-I28-01` continúa como candidato de Product y no se eleva todavía a un
identificador `PV`.

## 70. Prueba de redundancia entre determinación humana efectiva y autoría

### 70.1 Objeto

Antes de decidir una posible elevación de
`C-PV-I28-01 — Determinación humana efectiva`, se examina si el candidato puede
reducirse a un compromiso más fundamental de autoría.

La prueba intenta separar:

- autoría del material o resultado;
- autoridad sobre una determinación perteneciente al trabajo.

### 70.2 Caso A — determinación sobre material del que la persona no es autora

Se considera un dataset producido por una fuente ajena.

La persona no es autora de sus registros, pero realiza un análisis en el que
debe determinar cuáles resultan válidos o pertinentes para la actuación que
está desarrollando.

Si el sistema elimina unilateralmente un registro antes de que esa
determinación haya sido realizada o suficientemente encomendada, existe una
pérdida de valor.

La pérdida no depende de que la persona sea autora del dataset.

Depende de que la determinación sobre el papel del material dentro de su trabajo
continúa correspondiéndole.

Por tanto, la autoría del material no constituye condición necesaria de
`C-PV-I28-01`.

### 70.3 Caso B — autoría con determinación suficientemente encomendada

Se considera un documento del que la persona es autora.

Existen varias formulaciones posibles y la persona encomienda expresamente al
sistema que seleccione la que mejor satisfaga unos criterios suficientemente
determinados.

En esta situación no resulta necesario que el sistema vuelva a solicitar a la
persona que tome directamente la misma decisión.

La autoría del documento continúa existiendo aunque una determinación concreta
sea realizada mediante una asistencia suficientemente encomendada.

Por tanto:

`autoría ≠ necesidad de decidir personalmente cada determinación concreta`.

La autoridad humana incluye también la posibilidad de encomendar
suficientemente una determinación.

### 70.4 Caso C — selección de material ajeno dentro del propio trabajo

Se consideran varias fuentes producidas íntegramente por terceros.

La persona debe determinar cuál de ellas conservar como evidencia pertinente
para su investigación.

Si el sistema elimina definitivamente una fuente porque la considera
irrelevante antes de que la persona haya realizado o encomendado esa
determinación, existe una pérdida relevante.

La decisión no se refiere a quién es autor de la fuente.

Se refiere al papel que esa fuente desempeña dentro del trabajo realizado por la
persona.

Se confirma así la diferencia entre:

- autoría del material;
- autoridad sobre su utilización, selección o función dentro del propio
  trabajo.

### 70.5 Resultado de la prueba de redundancia

Los casos ejercidos permiten separar ambos conceptos.

Puede existir:

- determinación humana relevante sobre material del que la persona no es
  autora;
- autoría de un resultado sin necesidad de que la persona ejecute directamente
  todas sus determinaciones concretas.

Por tanto, la autoría no absorbe
`C-PV-I28-01 — Determinación humana efectiva`.

Se mantiene como formulación más precisa que, cuando una decisión sigue
correspondiendo a la persona, también le corresponde la potestad de:

- determinarla directamente;
- o encomendar suficientemente su determinación.

Una actuación unilateral del sistema sin esa determinación o encomienda no se
justifica por el mero hecho de que el sistema valore una alternativa como
superior.

### 70.6 Cuestión distinta detectada durante el caso B

El caso B introduce una cuestión que no se incorpora a
`C-PV-I28-01`.

Aunque una determinación haya sido suficientemente encomendada, puede resultar
pertinente advertir a la persona cuando durante su ejecución aparezcan
consecuencias relevantes que pudieran no haber sido contempladas al realizar la
encomienda.

Se distingue provisionalmente:

- autorización o encomienda de una determinación;
- advertencia preventiva ante consecuencias relevantes;
- nueva solicitud de autorización.

La posible necesidad de advertencia no se considera demostrada como parte de
`C-PV-I28-01` y deberá investigarse separadamente si resulta necesario.

### 70.7 Estado de C-PV-I28-01

La prueba de redundancia con autoría no falsifica ni absorbe el candidato.

`C-PV-I28-01` mantiene una diferencia propia:

> La plataforma preserva la posibilidad efectiva de que la persona determine
> las decisiones relevantes de su trabajo que sigan correspondiéndole,
> mientras existan alternativas reales sobre las que esa determinación pueda
> ejercerse.

El candidato ha superado:

- reducción desde `N-I28-01`;
- delimitación frente a autonomía técnica;
- falsación mediante casos internos y externos;
- reducción de la cláusula general de ámbito;
- prueba de redundancia frente a autoría.

La posible necesidad de advertencias ante consecuencias de actuaciones
encomendadas queda separada del candidato.

## 71. Auditoría de forma y abstracción de C-PV-I28-01 frente a PV-001–PV-004

### 71.1 Objeto

Se audita `C-PV-I28-01 — Determinación humana efectiva` frente a la forma,
competencia y nivel de abstracción de los compromisos de Product actualmente
consolidados.

La auditoría no constituye todavía la selección de una nueva vertical.

### 71.2 Adecuación al nivel Product

El candidato expresa una posibilidad humana cuya pérdida ha sido demostrada
mediante situaciones heterogéneas.

No prescribe:

- arquitectura;
- estructura de almacenamiento;
- interfaz;
- mecanismo de confirmación;
- política de avisos;
- algoritmo;
- ni realización concreta.

Su contenido puede por tanto formularse como resultado de producto sin
determinar los medios necesarios para satisfacerlo.

### 71.3 Corrección de la forma verbal

La formulación anterior comenzaba:

`La plataforma preserva...`

Los compromisos existentes recaen sobre posibilidades que el producto debe
poder hacer practicables, no sobre la ocurrencia obligatoria de una actuación
en toda situación concreta.

Se adopta por tanto la forma:

`la plataforma deberá poder preservar...`

Esta formulación expresa una posibilidad comprometida y no una realización
concreta.

### 71.4 Reducción de la referencia a «su trabajo»

La expresión:

`las decisiones relevantes de su trabajo`

puede sugerir una generalización sobre toda decisión humana o una dependencia
de autoría o propiedad.

Los contrastes realizados han demostrado que la determinación protegida puede
referirse también a material producido íntegramente por terceros.

Se sustituye por una formulación situacional:

`cuando una actividad incluya una decisión relevante...`

### 71.5 Reducción de «alternativas reales»

Los contrastes no requieren establecer una noción general de realidad de las
alternativas.

La diferencia necesaria consiste en que las alternativas permanezcan
disponibles mientras la decisión pueda todavía ejercerse.

Se adopta por tanto:

`alternativas todavía disponibles`

en lugar de:

`alternativas reales`.

### 71.6 Formulación reducida

Se mantiene provisionalmente:

`C-PV-I28-01 — Determinación humana efectiva`

> Cuando una actividad incluya una decisión relevante cuya resolución
> corresponda a la persona y permanezcan alternativas todavía disponibles, la
> plataforma deberá poder preservar la posibilidad efectiva de que la persona
> determine esa resolución.

### 71.7 Delimitaciones que no pertenecen al compromiso mínimo

La formulación no implica:

- que toda decisión de una actividad corresponda a la persona;
- que la persona deba seleccionar directamente cada alternativa final;
- que una determinación suficientemente encomendada deba volver a ser
  confirmada antes de toda ejecución;
- que las operaciones técnicas ya determinadas requieran intervención humana;
- que deban mantenerse alternativas que hayan dejado de estar disponibles por
  condiciones externas o constitutivas;
- que exista una interfaz o mecanismo concreto de decisión;
- ni una teoría general de propiedad, autoría o autoridad decisional.

La determinación de qué decisiones corresponden a la persona en una situación
concreta no queda convertida por este candidato en una autoridad semántica
general del runtime.

### 71.8 Comparación estructural con las verticales existentes

La formulación comparte con las verticales vigentes el patrón:

```text
situación delimitada
        ↓
diferencia humana justificada
        ↓
posibilidad que la plataforma debe poder preservar
        ↓
medios de satisfacción no determinados por Product
```

No se identifica una diferencia de nivel de abstracción que impida tratar el
candidato como posible compromiso de Product.

### 71.9 Resultado

La auditoría se considera superada con la formulación reducida.

`C-PV-I28-01`:

- expresa una diferencia humana;
- puede delimitarse situacionalmente;
- no prescribe mecanismos;
- no invade responsabilidades de otros cuerpos;
- mantiene independencia respecto de autoría;
- y posee un nivel de abstracción compatible con `PV-001`–`PV-004`.

Este resultado no constituye todavía la selección formal de `PV-005`.

La cuestión siguiente queda reducida a determinar si Product selecciona
deliberadamente esta situación y su diferencia justificada como quinta
vertical.

## 72. Propuesta de selección deliberada de C-PV-I28-01 como quinta vertical de Product

### 72.1 Objeto

Después de la reducción, falsación, delimitación, prueba de independencia y
auditoría de nivel de Product de `C-PV-I28-01`, se examina si existe fundamento
suficiente para seleccionar deliberadamente la situación investigada como nueva
vertical de Product.

Este apartado registra la propuesta de selección y la formulación documental
que se somete a HUMAN GATE.

No modifica todavía `docs/08-project/02-PRODUCT.md` ni atribuye anticipadamente
a `C-PV-I28-01` el estatuto consolidado de `PV-005`.

### 72.2 Situación seleccionable

La situación candidata puede reducirse a:

```text
actividad
    ↓
existe una decisión relevante
    ↓
su resolución corresponde todavía a la persona
    ↓
permanecen alternativas disponibles
sobre las que esa determinación puede ejercerse
```

La situación no exige que toda decisión de una actividad corresponda a la
persona.

Tampoco exige que la persona ejecute directamente todas las actuaciones
necesarias para realizar aquello que haya determinado.

### 72.3 Diferencia humana

Deben distinguirse:

```text
determinación humana efectiva

decisión relevante
+
resolución todavía correspondiente a la persona
+
alternativas todavía disponibles
        ↓
permanece posible que la persona
determine suficientemente la resolución
```

y:

```text
clausura previa

decisión relevante
+
resolución todavía correspondiente a la persona
+
alternativas todavía disponibles
        ↓
una actuación de la plataforma
elimina suficientemente esa posibilidad
antes de la determinación humana
```

La diferencia humana no depende de que el material sobre el que se actúa haya
sido creado por la persona.

Tampoco depende de que la persona deba realizar personalmente cada operación.

El valor aparece porque una actuación unilateral de la plataforma puede hacer
que el resultado incorpore una determinación que todavía correspondía a la
persona sin que ésta haya podido determinarla suficientemente.

### 72.4 Evidencia de independencia

La investigación ha ejercido la diferencia sobre situaciones heterogéneas,
incluyendo:

- transformación entre cita literal y paráfrasis;
- selección y eliminación de registros de datos;
- utilización de materiales producidos por terceros;
- selección de fuentes como evidencia;
- conservación o eliminación de materiales y relaciones;
- decisiones sobre estados de elaboración.

También se han ejercido límites negativos:

- operaciones técnicas que no introducen nuevas determinaciones relevantes;
- actuaciones cuyo resultado ya está suficientemente determinado;
- determinaciones suficientemente encomendadas;
- alternativas extinguidas por condiciones externas;
- posibilidades ajenas a aquello que la plataforma hace practicable.

Los contrastes no han reducido la diferencia a autoría, propiedad,
micromanagement humano, disponibilidad histórica general ni a ninguno de los
compromisos `PV-001`–`PV-004`.

### 72.5 Valor justificado

El valor seleccionado aparece cuando una decisión relevante todavía corresponde
a la persona y existen alternativas disponibles sobre las que esa decisión
puede ejercerse.

En esa situación, conservar la posibilidad efectiva de determinar la resolución
permite que la actuación continúe respondiendo a una determinación humana en
aquello que todavía corresponde decidir a la persona.

La pérdida de esta posibilidad no queda compensada necesariamente por la
calidad del resultado producido por el sistema.

Una alternativa considerada mejor por el sistema puede seguir constituyendo
una pérdida de valor si su adopción unilateral impide a la persona determinar
una decisión que todavía le correspondía.

### 72.6 Propuesta de compromiso

Se propone seleccionar:

`PV-005 — Determinación humana efectiva`

con la siguiente formulación:

> Cuando una actividad incluya una decisión relevante cuya resolución
> corresponda a la persona y permanezcan alternativas todavía disponibles, la
> plataforma deberá poder preservar la posibilidad efectiva de que la persona
> determine esa resolución.

### 72.7 Delimitación propuesta

El compromiso no establece:

- que toda decisión de una actividad corresponda a la persona;
- que la persona deba decidir directamente cada operación;
- que una determinación suficientemente encomendada deba volver a ser
  determinada personalmente;
- que las operaciones técnicas ya suficientemente determinadas requieran
  intervención humana;
- que deban mantenerse alternativas que hayan dejado de estar disponibles por
  condiciones externas o constitutivas;
- que deban proporcionarse posibilidades ajenas al alcance de aquello que el
  producto hace practicable;
- una interfaz concreta;
- un mecanismo de confirmación;
- una política general de advertencias;
- una teoría general de propiedad o autoría;
- ni una teoría general para determinar qué decisiones corresponden a la
  persona.

La determinación de que una resolución corresponde a la persona constituye una
condición de la situación seleccionada.

`PV-005` no atribuiría por sí mismo al runtime autoridad general para establecer
esa correspondencia.

### 72.8 Relación con PV-001–PV-004

La situación candidata no queda absorbida por los compromisos existentes.

Es posible satisfacer `PV-001`–`PV-004` y, sin embargo, que la plataforma
clausure unilateralmente una alternativa todavía disponible cuya resolución
continúa correspondiendo a la persona.

Por tanto, la diferencia protegida por `C-PV-I28-01` mantiene independencia
normativa respecto de las cuatro verticales consolidadas.

La selección propuesta no modifica ni amplía retrospectivamente el alcance de
`PV-001`, `PV-002`, `PV-003` o `PV-004`.

### 72.9 Cuestiones que permanecen separadas

La posible necesidad de advertencias preventivas ante consecuencias no
contempladas de una actuación suficientemente encomendada no forma parte de la
selección propuesta.

Tampoco se decide mediante esta selección el estatuto de
`N-I28-02 — Fidelidad del estado relevante`.

Ambas cuestiones conservan independencia respecto de
`C-PV-I28-01`.

### 72.10 Decisión propuesta de Product

La evidencia obtenida permite justificar la siguiente decisión:

> Product selecciona la situación investigada por
> `C-PV-I28-01 — Determinación humana efectiva` porque hacerla practicable
> conserva una diferencia humana independiente, su pérdida ha sido demostrada,
> su alcance ha podido delimitarse, no queda absorbida por `PV-001`–`PV-004` y
> puede formularse sin prescribir mecanismos ni invadir la autoridad de otros
> cuerpos.

Si esta decisión y su formulación son aceptadas mediante HUMAN GATE,
`C-PV-I28-01` podrá abandonar su estatuto provisional y consolidarse en
`PRODUCT.md` como:

`PV-005 — Determinación humana efectiva`.

### 72.11 Estado antes del HUMAN GATE

```text
N-I28-01
    ↓
reducción de Product
    ↓
C-PV-I28-01
    ✔ falsación ejercida
    ✔ alcance delimitado
    ✔ independencia frente a autoría
    ✔ independencia frente a PV-001–PV-004
    ✔ nivel de abstracción Product auditado
    ✔ formulación candidata estable

selección como PV-005
    → propuesta
    → pendiente de HUMAN GATE

02-PRODUCT.md
    → sin modificar
```


## 73. HUMAN GATE — aceptación de PV-005

**Fecha:** 30/09/2026.

### 73.1 Decisión

El HUMAN GATE acepta que Product seleccione la situación y el valor documentados
en la sección 72 como quinta vertical de Product.

Queda aceptado el compromiso:

`PV-005 — Determinación humana efectiva`

con la siguiente formulación:

> Cuando una actividad incluya una decisión relevante cuya resolución
> corresponda a la persona y permanezcan alternativas todavía disponibles, la
> plataforma deberá poder preservar la posibilidad efectiva de que la persona
> determine esa resolución.

La aceptación comprende las delimitaciones establecidas en `72.7`.

### 73.2 Efecto de la aceptación

La aceptación transforma el estatuto de:

`C-PV-I28-01 — Determinación humana efectiva`

que deja de ser únicamente un candidato de Product y queda seleccionado como:

`PV-005 — Determinación humana efectiva`.

La trayectoria queda:

```text
N-I28-01
    ↓
reducción de Product
    ↓
C-PV-I28-01
    ✔ falsación ejercida
    ✔ alcance delimitado
    ✔ independencia frente a autoría
    ✔ independencia frente a PV-001–PV-004
    ✔ nivel de abstracción Product auditado
    ↓
propuesta de selección
    ↓
HUMAN GATE
    ✔ aceptado
    ↓
PV-005 — Determinación humana efectiva
    ✔ selección de Product aceptada
```

### 73.3 Alcance de la aceptación

La aceptación no establece:

- que toda decisión de una actividad corresponda a la persona;
- que la persona deba ejecutar directamente cada operación;
- que una determinación suficientemente encomendada deba volver a ser
  determinada personalmente;
- que deban conservarse alternativas extinguidas por condiciones externas o
  constitutivas;
- una interfaz o mecanismo concreto de decisión;
- una política general de advertencias;
- una teoría general de propiedad o autoría;
- ni una teoría general para determinar qué decisiones corresponden a la
  persona.

La aceptación tampoco atribuye al runtime autoridad general para determinar por
sí mismo que una resolución corresponde a la persona.

### 73.4 Relaciones que permanecen separadas

La selección de `PV-005`:

- no modifica `PV-001`;
- no modifica `PV-002`;
- no modifica `PV-003`;
- no modifica `PV-004`;
- no resuelve la cuestión independiente
  `N-I28-02 — Fidelidad del estado relevante`;
- no resuelve la posible necesidad de advertencias preventivas ante
  consecuencias no contempladas de actuaciones suficientemente encomendadas;
- no deriva por sí sola una arquitectura, realización o mecanismo técnico.

### 73.5 Estado documental

La decisión de Product ha sido aceptada mediante HUMAN GATE.

La consolidación de esa decisión en el documento competente:

`docs/08-project/02-PRODUCT.md`

permanece pendiente.

Por tanto, el estado actual es:

```text
PV-005 — Determinación humana efectiva
    ✔ situación seleccionada
    ✔ valor justificado
    ✔ compromiso aceptado por HUMAN GATE
    ✔ delimitación aceptada
    → pendiente de consolidación documental en PRODUCT.md

docs/08-project/02-PRODUCT.md
    → todavía sin modificar
```


## 74. Consolidación documental de PV-005 en PRODUCT.md

**Fecha:** 30/09/2026.

Tras la aceptación registrada en el HUMAN GATE de la sección 73, el compromiso:

`PV-005 — Determinación humana efectiva`

ha sido incorporado al documento competente:

`docs/08-project/02-PRODUCT.md`.

La consolidación mantiene la formulación aceptada:

> Cuando una actividad incluya una decisión relevante cuya resolución
> corresponda a la persona y permanezcan alternativas todavía disponibles, la
> plataforma deberá poder preservar la posibilidad efectiva de que la persona
> determine esa resolución.

También incorpora las delimitaciones aceptadas, sin prescribir arquitectura,
realización, interfaz, mecanismo de confirmación ni política general de
advertencias.

La incorporación no modifica `PV-001`, `PV-002`, `PV-003` o `PV-004`.

El estado pasa de:

```text
PV-005
    ✔ aceptado por HUMAN GATE
    → pendiente de consolidación en PRODUCT.md
```

a:

```text
PV-005 — Determinación humana efectiva
    ✔ seleccionado por Product
    ✔ aceptado por HUMAN GATE
    ✔ consolidado en PRODUCT.md
```

La cuestión independiente:

`N-I28-02 — Fidelidad del estado relevante`

permanece sin resolver mediante esta consolidación.

---

## 75. Propuesta de selección deliberada de C-PV-I28-02 como sexta vertical de Product

**Fecha:** 30/09/2026.

### 75.1 Objeto

Esta sección registra la propuesta de selección deliberada de:

`C-PV-I28-02 — Continuidad de posibilidades pertinentes`

como posible sexta vertical de Product.

La propuesta no modifica todavía:

`docs/08-project/02-PRODUCT.md`.

La eventual selección requiere aceptación expresa mediante HUMAN GATE.

---

### 75.2 Situación seleccionable

La investigación ha identificado una situación general en la que:

```text
material o trabajo
↓
hace posibles determinadas interpretaciones,
utilizaciones o actuaciones pertinentes
↓
la plataforma introduce un cambio
↓
pueden modificarse:
representación
formato
estructura
soporte
localización
distribución
relaciones
o incluso la existencia de alguna parte
↓
situación resultante
```

La diferencia relevante no consiste en conservar necesariamente ninguna de
esas realizaciones particulares.

Consiste en si las posibilidades que siguen siendo pertinentes continúan
suficientemente preservadas después del cambio introducido por la plataforma.

---

### 75.3 Valor humano demostrado

La investigación ha mostrado que pueden conservarse materialmente datos,
elementos o representaciones y, sin embargo, desaparecer capacidades humanas
pertinentes.

Entre los contrastes ejercidos se encuentran:

- conservación de valores con pérdida de su correspondencia con la
  procedencia `medido / estimado`;
- conservación de fragmentos con pérdida de las relaciones necesarias para
  recomponer pertinentemente el conjunto;
- eliminación de columnas no utilizadas en la operación inmediata aunque el
  material continúe conservándose para usos posteriores;
- pérdida de partes de una fotografía familiar aunque no exista una
  utilización futura determinada;
- pérdida de capacidades de edición cuando el original correspondiente sigue
  siendo pertinente;
- pérdida de referencias necesarias para recuperar inequívocamente un estado
  previamente conservado;
- sustitución de una copia suficientemente preservada por una dependencia
  externa cuya continuidad no está suficientemente asegurada.

En estos casos, la pérdida relevante no depende de la desaparición literal de
un objeto o representación.

Depende de que deje de existir una posibilidad que todavía pertenecía
pertinentemente a la situación.

La investigación ha mostrado también el caso inverso: pueden desaparecer
propiedades, representaciones o soportes sin pérdida pertinente cuando las
funciones correspondientes permanecen suficientemente preservadas mediante
la situación resultante.

---

### 75.4 Reducción obtenida

La investigación ha descartado como fundamentales:

```text
conservación literal
conservación del mismo objeto
conservación del mismo formato
conservación de la misma estructura física
conservación local
conservación de redundancias
conservación de toda posibilidad técnicamente existente
preservación dentro de cada derivado individual
acceso humano inmediato
```

También ha establecido que:

```text
falta de uso actual
≠ agotamiento

ausencia de uso futuro previsto
≠ ausencia de pertinencia

baja probabilidad estimada de uso
≠ abandono

cambio de representación
≠ pérdida

existencia física residual
≠ preservación suficiente
```

El residuo estable es la continuidad de las posibilidades que siguen siendo
pertinentes después de un cambio introducido por la plataforma.

---

### 75.5 Compromiso candidato

**C-PV-I28-02 — Continuidad de posibilidades pertinentes**

> Cuando la plataforma introduzca un cambio que afecte a un material o trabajo,
> deberá preservar suficientemente en la situación resultante las posibilidades
> que sigan siendo pertinentes.

La formulación compromete un resultado de Product.

No prescribe el mecanismo mediante el que debe realizarse.

---

### 75.6 Delimitación

La candidata:

- no exige conservar todas las posibilidades técnicamente existentes;
- no exige conservar toda diferencia que haya existido históricamente;
- no exige conservar la misma representación, formato, estructura, soporte,
  localización, redundancia o ejemplar material;
- no exige que cada representación o derivado preserve por separado todas las
  posibilidades pertinentes;
- permite que la preservación quede distribuida entre distintos elementos de
  la situación resultante;
- no considera por sí misma pérdida la sustitución de una realización por otra
  suficientemente equivalente respecto de las posibilidades pertinentes;
- no exige conservar posibilidades que hayan agotado su papel, hayan sido
  suficientemente sustituidas o hayan sido legítimamente abandonadas;
- no considera que la mera falta de uso actual establezca por sí misma que una
  posibilidad haya dejado de ser pertinente;
- no considera que la ausencia de un uso futuro previsto establezca por sí
  misma que una posibilidad haya dejado de ser pertinente;
- no considera que una estimación de baja utilidad establezca por sí misma que
  una posibilidad haya dejado de ser pertinente;
- no introduce una teoría general para determinar cuándo una posibilidad deja
  de ser pertinente;
- no determina por sí misma quién puede decidir el abandono de una
  posibilidad;
- no prescribe interfaz, almacenamiento, versionado, copias de seguridad,
  formato, estructura de datos, mecanismo de recuperación ni otra realización
  técnica concreta;
- no exige acceso humano inmediato o irrestricto cuando la capacidad
  correspondiente continúa efectivamente preservada;
- no establece una garantía absoluta frente a contingencias externas ajenas a
  cambios introducidos por la plataforma.

La suficiencia de la preservación no equivale a identidad literal.

Una posibilidad puede considerarse suficientemente preservada cuando la
situación resultante mantiene efectivamente aquello necesario para que siga
existiendo o pueda ser restaurada de manera determinada.

La mera supervivencia física de residuos o una reconstrucción hipotética no
bastan por sí mismas.

---

### 75.7 Independencia respecto de PV-001–PV-005

La investigación ha ejercido un contraejemplo en el que una plataforma puede
satisfacer:

```text
PV-001 ✔
PV-002 ✔
PV-003 ✔
PV-004 ✔
PV-005 ✔
```

y, sin embargo, perder durante una migración técnica la correspondencia entre
cada valor y su procedencia `medido / estimado`.

En esa situación:

```text
valores
✔ conservados

procedencias
✔ conservadas

correspondencia valor ↔ procedencia
✘ perdida

posibilidades de interpretación y utilización
✘ reducidas
```

Ninguno de los compromisos `PV-001`–`PV-005` obliga por sí mismo a preservar
esa continuidad funcional a través del cambio.

Por tanto, no se ha demostrado absorción de `C-PV-I28-02` por las verticales
actualmente consolidadas.

---

### 75.8 Independencia respecto de PV-005

`PV-005 — Determinación humana efectiva` y `C-PV-I28-02` protegen diferencias
distintas.

Puede satisfacerse `PV-005` y violarse `C-PV-I28-02`:

```text
la persona determina correctamente:
«no eliminar»

↓
una migración posterior pierde igualmente
la información pertinente

PV-005
✔

C-PV-I28-02
✘
```

También puede ocurrir lo contrario:

```text
la plataforma preserva perfectamente
todas las posibilidades pertinentes

↓
pero impide a la persona realizar una reducción
cuya determinación le corresponde

C-PV-I28-02
✔

PV-005
✘
```

Por tanto, no existe absorción mutua.

Cuando el abandono de una posibilidad implique una decisión cuya resolución
corresponda a la persona, `PV-005` podrá resultar aplicable.

`C-PV-I28-02` no establece por sí misma que toda decisión sobre conservación o
abandono corresponda a la persona.

---

### 75.9 Auditoría de nivel y abstracción de Product

La formulación candidata ha sido auditada respecto del nivel de abstracción de
Product.

El resultado es:

```text
situación de Product
✔

valor humano identificable
✔

resultado comprometido
✔

mecanismo técnico
✘ no prescrito

interfaz
✘ no prescrita

modelo de almacenamiento
✘ no prescrito

formato o estructura concretos
✘ no prescritos

teoría general de pertinencia
✘ no introducida

dependencia circular de PV-005
✘ no obtenida

absorción por PV-001–PV-005
✘ no obtenida
```

La formulación permanece en el nivel:

```text
qué diferencia humana debe preservarse
```

y no deriva:

```text
cómo debe realizarse técnicamente esa preservación
```

---

### 75.10 Propuesta de decisión de Product

A la vista de los resultados obtenidos, existe fundamento positivo para
proponer que Product seleccione la situación y el valor documentados en esta
sección y establezca como sexta vertical:

`PV-006 — Continuidad de posibilidades pertinentes`

con el compromiso:

> Cuando la plataforma introduzca un cambio que afecte a un material o trabajo,
> deberá preservar suficientemente en la situación resultante las posibilidades
> que sigan siendo pertinentes.

La propuesta incluye las delimitaciones consignadas en la sección 75.6.

La selección no se considera realizada mediante esta sección.

Requiere aceptación expresa mediante HUMAN GATE.

---

### 75.11 Estado previo al HUMAN GATE

El estado queda:

```text
N-I28-02 — Fidelidad del estado relevante
    ↓ reducción
C-PV-I28-02 — Continuidad de posibilidades pertinentes
    ✔ diferencia independiente
    ✔ valor humano demostrado
    ✔ no absorbida por PV-001–PV-005
    ✔ falsación integral superada
    ✔ auditoría de nivel Product superada
    ↓
propuesta de selección como PV-006
    → pendiente de HUMAN GATE
```

Hasta que exista aceptación expresa:

```text
PV-006
✘ no establecida

docs/08-project/02-PRODUCT.md
✘ no modificado por esta propuesta
```

---

## 76. HUMAN GATE — aceptación de PV-006

**Fecha:** 30/09/2026.

### 76.1 Decisión

El HUMAN GATE acepta que Product seleccione la situación y el valor
documentados en la sección 75 como sexta vertical de Product.

El compromiso aceptado es:

`PV-006 — Continuidad de posibilidades pertinentes`

con la formulación:

> Cuando la plataforma introduzca un cambio que afecte a un material o trabajo,
> deberá preservar suficientemente en la situación resultante las posibilidades
> que sigan siendo pertinentes.

La aceptación incluye las delimitaciones consignadas en la sección 75.6.

---

### 76.2 Efecto de la aceptación

`C-PV-I28-02 — Continuidad de posibilidades pertinentes` deja de ser
únicamente una candidata de Product.

La trayectoria queda:

```text
N-I28-02 — Fidelidad del estado relevante
    ↓ reducción
C-PV-I28-02 — Continuidad de posibilidades pertinentes
    ↓ falsación integral
    ↓ auditoría de nivel Product
    ↓ propuesta deliberada de selección
    ↓ HUMAN GATE aceptado
PV-006 — Continuidad de posibilidades pertinentes
```

La selección de `PV-006` queda aceptada.

---

### 76.3 Delimitación conservada

La aceptación no modifica las delimitaciones de la sección 75.6.

En particular, `PV-006`:

- no exige conservar todas las posibilidades técnicamente existentes;
- no exige conservar toda diferencia histórica;
- no exige identidad de representación, formato, estructura, soporte,
  localización, redundancia o ejemplar material;
- no exige que cada derivado preserve individualmente todas las posibilidades
  pertinentes;
- permite preservación distribuida en la situación resultante;
- permite sustituciones suficientemente equivalentes;
- no exige conservar posibilidades agotadas, suficientemente sustituidas o
  legítimamente abandonadas;
- no considera la mera falta de uso, la ausencia de un uso futuro previsto o
  una estimación de baja utilidad como prueba suficiente de pérdida de
  pertinencia;
- no introduce una teoría general de pertinencia;
- no determina por sí misma quién puede decidir el abandono de una
  posibilidad;
- no prescribe interfaz, almacenamiento, versionado, copias de seguridad,
  formato, estructura de datos ni mecanismo de recuperación;
- no exige acceso humano inmediato o irrestricto cuando la capacidad sigue
  efectivamente preservada;
- no establece una garantía absoluta frente a contingencias externas ajenas a
  cambios introducidos por la plataforma.

---

### 76.4 Relación con PV-001–PV-005

La aceptación de `PV-006`:

- no modifica `PV-001`;
- no modifica `PV-002`;
- no modifica `PV-003`;
- no modifica `PV-004`;
- no modifica `PV-005`;
- no elimina la independencia demostrada entre `PV-005` y `PV-006`;
- no deriva arquitectura, realización, interfaz ni mecanismo técnico.

Cuando el abandono de una posibilidad implique una decisión cuya resolución
corresponda a la persona, `PV-005` podrá resultar aplicable.

`PV-006` no establece por sí misma que toda decisión sobre conservación o
abandono corresponda a la persona.

---

### 76.5 Estado documental

La selección ha sido aceptada mediante HUMAN GATE.

La consolidación de esa decisión en el documento competente:

`docs/08-project/02-PRODUCT.md`

permanece pendiente.

Por tanto, el estado actual es:

```text
PV-006 — Continuidad de posibilidades pertinentes
    ✔ situación seleccionada
    ✔ valor justificado
    ✔ compromiso aceptado por HUMAN GATE
    ✔ delimitación aceptada
    → pendiente de consolidación documental en PRODUCT.md

docs/08-project/02-PRODUCT.md
    → todavía sin modificar respecto de PV-006
```

---

## 77. Consolidación documental de PV-006 en PRODUCT.md

**Fecha:** 30/09/2026.

Tras la aceptación registrada en el HUMAN GATE de la sección 76, el compromiso:

`PV-006 — Continuidad de posibilidades pertinentes`

ha sido incorporado al documento competente:

`docs/08-project/02-PRODUCT.md`.

La consolidación mantiene la formulación aceptada:

> Cuando la plataforma introduzca un cambio que afecte a un material o trabajo,
> deberá preservar suficientemente en la situación resultante las posibilidades
> que sigan siendo pertinentes.

También incorpora las delimitaciones aceptadas, sin prescribir arquitectura,
realización, interfaz, almacenamiento, formato, estructura, localización ni
mecanismo técnico de preservación.

La incorporación no modifica `PV-001`, `PV-002`, `PV-003`, `PV-004` o
`PV-005`.

El estado pasa de:

```text
PV-006
    ✔ aceptada por HUMAN GATE
    → pendiente de consolidación en PRODUCT.md
```

a:

```text
PV-006 — Continuidad de posibilidades pertinentes
    ✔ seleccionada por Product
    ✔ aceptada por HUMAN GATE
    ✔ consolidada en PRODUCT.md
```

La independencia demostrada entre `PV-005` y `PV-006` permanece conservada.

---

## 78. Cierre de la investigación

**Fecha de cierre:** 30/09/2026.

### 78.1 Comprobación del alcance investigado

La condición empírica establecida en la apertura fue satisfecha mediante casos
reales de aportaciones sonoras.

La investigación no ha derivado una obligación general de conservar audio,
producir transcripciones, mantener una representación concreta ni introducir
una arquitectura multimedia.

La reducción progresiva mostró que las diferencias relevantes observadas no
dependían específicamente del audio y permitió aislar dos núcleos independientes:

```text
N-I28-01 — Autoridad humana efectiva
    ↓ reducción y falsación
PV-005 — Determinación humana efectiva
    ✔ consolidada en Product

N-I28-02 — Fidelidad del estado relevante
    ↓ reducción y falsación
PV-006 — Continuidad de posibilidades pertinentes
    ✔ consolidada en Product
```

Los candidatos de Product derivados de ambos núcleos fueron sometidos a
falsación, auditoría de nivel Product, selección mediante HUMAN GATE y
consolidación en el documento competente.

### 78.2 Cuestión independiente sobre advertencias

Durante la investigación se identificó una cuestión distinta relativa a la
posible conveniencia o necesidad de advertir a la persona cuando, durante la
ejecución de una actuación suficientemente encomendada, aparezcan consecuencias
relevantes que pudieran no haber sido contempladas al realizar la encomienda.

La investigación distinguió:

```text
determinación o encomienda
≠
advertencia preventiva
≠
nueva solicitud de autorización
```

Esta cuestión:

- no forma parte de `PV-005`;
- no forma parte de `PV-006`;
- no ha sido demostrada como condición necesaria para responder la pregunta de
  esta investigación;
- y no se abre automáticamente como una nueva investigación.

Podrá investigarse separadamente si una necesidad posterior lo justifica.

### 78.3 No derivaciones del cierre

El cierre de esta investigación no deriva por sí mismo:

- una realización concreta de audio;
- transcripción automática o manual obligatoria;
- conservación universal del audio original;
- una entidad conceptual `Audio`, `File`, `Transcript` o equivalente;
- almacenamiento, versionado, historial o colección;
- una política general de advertencias;
- una nueva arquitectura;
- una nueva modificación de código;
- ni una siguiente actuación de Product.

### 78.4 Estado final

No se ha identificado ninguna cuestión necesaria abierta cuya resolución sea
condición para responder la pregunta de investigación dentro del alcance
ejercido.

Por tanto:

```text
28-investigacion-incorporacion-aportacion-sonora.md
    ✔ condición empírica inicial ejercida
    ✔ reducción completada
    ✔ N-I28-01 resuelto mediante PV-005
    ✔ N-I28-02 resuelto mediante PV-006
    ✔ cuestiones independientes delimitadas
    ✔ cerrada dentro del alcance investigado
```

Este cierre no generaliza los resultados más allá de los compromisos
expresamente consolidados en Product ni convierte cuestiones futuras posibles
en obligaciones actuales.
