export const AI_SUPPORT_EVIDENCE = {
  work:
    "Estoy redactando una explicación sobre por qué separar detección, juicio y ejecución ayuda a preservar la decisión humana.",
  support: [
    "1. ¿Qué parte del proceso sigue requiriendo una decisión humana y cuál puede delegarse sin sustituirla?",
    "2. ¿Cómo puede verificarse que una ejecución automática corresponde exactamente a una decisión ya adoptada?",
    "3. ¿Qué señal permitiría detectar que una ayuda auxiliar está empezando a influir indebidamente en el juicio que debía conservar la persona?",
  ].join("\n\n"),
  evidenceId: "E-IA-80-04-M1-01",
  system: "ChatGPT",
  model: "GPT-5.6 Sol",
} as const;
