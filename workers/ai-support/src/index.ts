export type AiSupportWorkerEnv = {
  OPENAI_API_KEY?: string;
  ALLOWED_ORIGIN?: string;
  MODEL?: string;
  AI_SUPPORT_RATE_LIMITER?: {
    limit(input: { key: string }): Promise<{ success: boolean }>;
  };
};

export type WorkerFetch = (
  input: RequestInfo | URL,
  init?: RequestInit,
) => Promise<Response>;

type AiSupportPayload = {
  workId: string;
  workContent: string;
  request: string;
};

const MAX_WORK_CONTENT_LENGTH = 20000;
const MAX_REQUEST_LENGTH = 2000;
const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";

function jsonResponse(
  status: number,
  body: unknown,
  origin?: string,
): Response {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (origin !== undefined) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Vary", "Origin");
  }

  return new Response(JSON.stringify(body), { status, headers });
}

function isValidPayload(value: unknown): value is AiSupportPayload {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as {
    workId?: unknown;
    workContent?: unknown;
    request?: unknown;
  };

  return (
    typeof candidate.workId === "string" &&
    candidate.workId.trim().length > 0 &&
    typeof candidate.workContent === "string" &&
    candidate.workContent.trim().length > 0 &&
    typeof candidate.request === "string" &&
    candidate.request.trim().length > 0
  );
}

function extractOutputText(payload: unknown): string | null {
  if (typeof payload !== "object" || payload === null) {
    return null;
  }

  const candidate = payload as {
    output?: unknown;
  };

  if (!Array.isArray(candidate.output)) {
    return null;
  }

  for (const item of candidate.output) {
    if (typeof item !== "object" || item === null) {
      continue;
    }

    const message = item as {
      type?: unknown;
      content?: unknown;
    };

    if (message.type !== "message" || !Array.isArray(message.content)) {
      continue;
    }

    for (const contentItem of message.content) {
      if (typeof contentItem !== "object" || contentItem === null) {
        continue;
      }

      const output = contentItem as {
        type?: unknown;
        text?: unknown;
      };

      if (
        output.type === "output_text" &&
        typeof output.text === "string" &&
        output.text.trim().length > 0
      ) {
        return output.text;
      }
    }
  }

  return null;
}

function getClientKey(request: Request): string {
  return (
    request.headers.get("CF-Connecting-IP") ??
    request.headers.get("X-Forwarded-For") ??
    "unknown"
  );
}

export async function handleAiSupportRequest(
  request: Request,
  env: AiSupportWorkerEnv,
  fetchImpl: WorkerFetch = fetch,
): Promise<Response> {
  const allowedOrigin = env.ALLOWED_ORIGIN;

  if (request.method !== "POST") {
    return jsonResponse(405, { error: "method_not_allowed" }, allowedOrigin);
  }

  const origin = request.headers.get("Origin");

  if (
    allowedOrigin !== undefined &&
    origin !== null &&
    origin !== allowedOrigin
  ) {
    return jsonResponse(403, { error: "origin_forbidden" });
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse(400, { error: "invalid_payload" }, allowedOrigin);
  }

  if (!isValidPayload(payload)) {
    return jsonResponse(400, { error: "invalid_payload" }, allowedOrigin);
  }

  if (
    payload.workContent.length > MAX_WORK_CONTENT_LENGTH ||
    payload.request.length > MAX_REQUEST_LENGTH
  ) {
    return jsonResponse(413, { error: "payload_too_large" }, allowedOrigin);
  }

  if (env.AI_SUPPORT_RATE_LIMITER !== undefined) {
    const result = await env.AI_SUPPORT_RATE_LIMITER.limit({
      key: getClientKey(request),
    });

    if (!result.success) {
      return jsonResponse(429, { error: "rate_limited" }, allowedOrigin);
    }
  }

  if (
    typeof env.OPENAI_API_KEY !== "string" ||
    env.OPENAI_API_KEY.length === 0
  ) {
    return jsonResponse(500, { error: "provider_not_configured" }, allowedOrigin);
  }

  const model = env.MODEL ?? "gpt-6-luna";

  let providerResponse: Response;

  try {
    providerResponse = await fetchImpl(OPENAI_RESPONSES_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        reasoning: { effort: "low" },
        input: [
          {
            role: "system",
            content:
              "Proporciona apoyo auxiliar sobre la obra. Responde a la petición concreta. No declares que el apoyo ha sido incorporado a la obra. No reescribas automáticamente la obra. Devuelve sólo el apoyo solicitado.",
          },
          {
            role: "user",
            content: `OBRA:\n${payload.workContent}\n\nPETICIÓN:\n${payload.request}`,
          },
        ],
      }),
    });
  } catch {
    return jsonResponse(502, { error: "provider_unavailable" }, allowedOrigin);
  }

  if (!providerResponse.ok) {
    return jsonResponse(502, { error: "provider_unavailable" }, allowedOrigin);
  }

  let providerPayload: unknown;

  try {
    providerPayload = await providerResponse.json();
  } catch {
    return jsonResponse(502, { error: "provider_invalid_response" }, allowedOrigin);
  }

  const content = extractOutputText(providerPayload);

  if (content === null) {
    return jsonResponse(502, { error: "provider_invalid_response" }, allowedOrigin);
  }

  const providerMeta =
    typeof providerPayload === "object" && providerPayload !== null
      ? (providerPayload as { id?: unknown; model?: unknown })
      : {};

  return jsonResponse(
    200,
    {
      content,
      provenance: {
        system: "OpenAI",
        model:
          typeof providerMeta.model === "string" ? providerMeta.model : model,
        ...(typeof providerMeta.id === "string"
          ? { requestId: providerMeta.id }
          : {}),
      },
    },
    allowedOrigin,
  );
}

export default {
  fetch(request: Request, env: AiSupportWorkerEnv): Promise<Response> {
    return handleAiSupportRequest(request, env);
  },
};
