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

export async function handleAiSupportRequest(
  _request: Request,
  _env: AiSupportWorkerEnv,
  _fetchImpl: WorkerFetch = fetch,
): Promise<Response> {
  return new Response(
    JSON.stringify({ error: "not_implemented" }),
    {
      status: 501,
      headers: { "Content-Type": "application/json" },
    },
  );
}

export default {
  fetch(request: Request, env: AiSupportWorkerEnv): Promise<Response> {
    return handleAiSupportRequest(request, env);
  },
};
