export type AiSupportRequest = {
  workId: string;
  workContent: string;
  request: string;
  turnstileToken: string;
};

export type AiSupportResponse = {
  content: string;
  provenance: {
    system: string;
    model?: string;
    requestId?: string;
  };
};

function isAiSupportResponse(value: unknown): value is AiSupportResponse {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as {
    content?: unknown;
    provenance?: {
      system?: unknown;
      model?: unknown;
      requestId?: unknown;
    };
  };

  return (
    typeof candidate.content === "string" &&
    typeof candidate.provenance === "object" &&
    candidate.provenance !== null &&
    typeof candidate.provenance.system === "string" &&
    (candidate.provenance.model === undefined ||
      typeof candidate.provenance.model === "string") &&
    (candidate.provenance.requestId === undefined ||
      typeof candidate.provenance.requestId === "string")
  );
}

export async function requestAiSupport(
  request: AiSupportRequest,
): Promise<AiSupportResponse> {
  const endpoint = import.meta.env.VITE_AI_SUPPORT_ENDPOINT;

  if (typeof endpoint !== "string" || endpoint.length === 0) {
    throw new Error("AI support endpoint is not configured");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("AI support request failed");
  }

  const payload: unknown = await response.json();

  if (!isAiSupportResponse(payload)) {
    throw new Error("AI support response is invalid");
  }

  return payload;
}
