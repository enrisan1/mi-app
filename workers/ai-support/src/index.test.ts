import { describe, expect, it, vi } from "vitest";
import {
  handleAiSupportRequest,
  type AiSupportWorkerEnv,
  type WorkerFetch,
} from "./index";

const ALLOWED_ORIGIN = "https://enrisan1.github.io";
const ENDPOINT = "https://example.workers.dev/ai-support";
const TURNSTILE_SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const TURNSTILE_TOKEN = "turnstile-test-token";

function request(
  body: unknown,
  options?: {
    method?: string;
    origin?: string;
  },
) {
  return new Request(ENDPOINT, {
    method: options?.method ?? "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: options?.origin ?? ALLOWED_ORIGIN,
    },
    ...(options?.method === "GET"
      ? {}
      : { body: JSON.stringify(body) }),
  });
}

function env(overrides: Partial<AiSupportWorkerEnv> = {}): AiSupportWorkerEnv {
  return {
    OPENAI_API_KEY: "test-secret",
    ALLOWED_ORIGIN,
    MODEL: "gpt-6-luna",
    AI_SUPPORT_RATE_LIMITER: {
      limit: vi.fn().mockResolvedValue({ success: true }),
    },
    ...overrides,
  };
}

const VALID_BODY = {
  workId: "m1",
  workContent: "Obra ordinaria uno",
  request: "Señala una cuestión que convendría revisar.",
  turnstileToken: TURNSTILE_TOKEN,
};

function requestUrl(input: RequestInfo | URL): string {
  if (typeof input === "string") {
    return input;
  }

  if (input instanceof URL) {
    return input.toString();
  }

  return input.url;
}

function openAiSuccessResponse(): Response {
  return new Response(
    JSON.stringify({
      id: "resp_turnstile_test",
      model: "gpt-6-luna",
      output: [
        {
          type: "message",
          content: [
            {
              type: "output_text",
              text: "Apoyo de prueba.",
            },
          ],
        },
      ],
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}

function turnstileResponse(input: {
  success: boolean;
  hostname?: string;
  action?: string;
}): Response {
  return new Response(JSON.stringify(input), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

describe("AI support Worker contract", () => {
  it("[T-WORKER-80-04-01] rechaza métodos distintos de POST", async () => {
    const response = await handleAiSupportRequest(
      request(undefined, { method: "GET" }),
      env(),
      vi.fn() as WorkerFetch,
    );

    expect(response.status).toBe(405);
  });

  it("[T-WORKER-80-04-02] rechaza orígenes no autorizados", async () => {
    const providerFetch = vi.fn() as unknown as WorkerFetch;

    const response = await handleAiSupportRequest(
      request(VALID_BODY, { origin: "https://attacker.example" }),
      env(),
      providerFetch,
    );

    expect(response.status).toBe(403);
    expect(providerFetch).not.toHaveBeenCalled();
  });

  it("[T-WORKER-80-04-03] rechaza payload malformado o vacío", async () => {
    const response = await handleAiSupportRequest(
      request({ workId: "m1", workContent: "", request: "" }),
      env(),
      vi.fn() as WorkerFetch,
    );

    expect(response.status).toBe(400);
  });

  it("[T-WORKER-80-04-04] rechaza payload excesivo antes de llamar al proveedor", async () => {
    const providerFetch = vi.fn() as unknown as WorkerFetch;

    const response = await handleAiSupportRequest(
      request({
        ...VALID_BODY,
        workContent: "x".repeat(20001),
      }),
      env(),
      providerFetch,
    );

    expect(response.status).toBe(413);
    expect(providerFetch).not.toHaveBeenCalled();
  });

  it("[T-WORKER-80-04-05] aplica el rate limiter antes de llamar a OpenAI", async () => {
    const providerFetch = vi.fn(async (input: RequestInfo | URL) => {
      const url = requestUrl(input);

      if (url === TURNSTILE_SITEVERIFY_URL) {
        return turnstileResponse({
          success: true,
          hostname: "enrisan1.github.io",
          action: "ai_support",
        });
      }

      if (url === OPENAI_RESPONSES_URL) {
        return openAiSuccessResponse();
      }

      throw new Error(`unexpected URL: ${url}`);
    });

    const response = await handleAiSupportRequest(
      request(VALID_BODY),
      env({
        AI_SUPPORT_RATE_LIMITER: {
          limit: vi.fn().mockResolvedValue({ success: false }),
        },
      }),
      providerFetch as unknown as WorkerFetch,
    );

    expect(response.status).toBe(429);
    expect(
      providerFetch.mock.calls.some(
        ([input]) => requestUrl(input as RequestInfo | URL) === OPENAI_RESPONSES_URL,
      ),
    ).toBe(false);
  });

  it("[T-WORKER-80-04-06] traduce una respuesta válida de Responses API al contrato mínimo", async () => {
    const providerFetch = vi.fn(async (input: RequestInfo | URL) => {
      const url = requestUrl(input);

      if (url === TURNSTILE_SITEVERIFY_URL) {
        return turnstileResponse({
          success: true,
          hostname: "enrisan1.github.io",
          action: "ai_support",
        });
      }

      if (url === OPENAI_RESPONSES_URL) {
        return new Response(
          JSON.stringify({
            id: "resp_test_1",
            model: "gpt-6-luna",
            output: [
              {
                type: "message",
                content: [
                  {
                    type: "output_text",
                    text: "Conviene comprobar la premisa principal.",
                  },
                ],
              },
            ],
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      throw new Error(`unexpected URL: ${url}`);
    }) as unknown as WorkerFetch;

    const response = await handleAiSupportRequest(
      request(VALID_BODY),
      env(),
      providerFetch,
    );

    expect(response.status).toBe(200);

    expect(providerFetch).toHaveBeenCalledWith(
      "https://api.openai.com/v1/responses",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          Authorization: "Bearer test-secret",
          "Content-Type": "application/json",
        }),
      }),
    );

    await expect(response.json()).resolves.toEqual({
      content: "Conviene comprobar la premisa principal.",
      provenance: {
        system: "OpenAI",
        model: "gpt-6-luna",
        requestId: "resp_test_1",
      },
    });
  });

  it("[T-WORKER-80-04-07] un fallo del proveedor devuelve error controlado sin exponer el secreto", async () => {
    const providerFetch = vi.fn(async (input: RequestInfo | URL) => {
      const url = requestUrl(input);

      if (url === TURNSTILE_SITEVERIFY_URL) {
        return turnstileResponse({
          success: true,
          hostname: "enrisan1.github.io",
          action: "ai_support",
        });
      }

      if (url === OPENAI_RESPONSES_URL) {
        return new Response(
          JSON.stringify({
            error: {
              message: "upstream failure containing test-secret",
            },
          }),
          {
            status: 503,
            headers: { "Content-Type": "application/json" },
          },
        );
      }

      throw new Error(`unexpected URL: ${url}`);
    }) as unknown as WorkerFetch;

    const response = await handleAiSupportRequest(
      request(VALID_BODY),
      env(),
      providerFetch,
    );

    expect(response.status).toBe(502);

    const body = await response.text();
    expect(body).toMatch(/provider_unavailable/i);
    expect(body).not.toContain("test-secret");
  });

  it("[T-WORKER-80-04-08] exige turnstileToken antes de cualquier llamada remota", async () => {
    const fetchMock = vi.fn().mockResolvedValue(openAiSuccessResponse());

    const { turnstileToken: _turnstileToken, ...bodyWithoutToken } = VALID_BODY;

    const response = await handleAiSupportRequest(
      request(bodyWithoutToken),
      env(),
      fetchMock as unknown as WorkerFetch,
    );

    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("[T-WORKER-80-04-09] rechaza Siteverify success=false sin llamar a OpenAI", async () => {
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = requestUrl(input);

      if (url === TURNSTILE_SITEVERIFY_URL) {
        return turnstileResponse({ success: false });
      }

      if (url === OPENAI_RESPONSES_URL) {
        return openAiSuccessResponse();
      }

      throw new Error(`unexpected URL: ${url}`);
    });

    const response = await handleAiSupportRequest(
      request(VALID_BODY),
      env(),
      fetchMock as unknown as WorkerFetch,
    );

    expect(response.status).toBe(403);
    expect(
      fetchMock.mock.calls.some(
        ([input]) => requestUrl(input as RequestInfo | URL) === OPENAI_RESPONSES_URL,
      ),
    ).toBe(false);
  });

  it("[T-WORKER-80-04-10] rechaza un token válido para hostname distinto", async () => {
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = requestUrl(input);

      if (url === TURNSTILE_SITEVERIFY_URL) {
        return turnstileResponse({
          success: true,
          hostname: "attacker.example",
          action: "ai_support",
        });
      }

      if (url === OPENAI_RESPONSES_URL) {
        return openAiSuccessResponse();
      }

      throw new Error(`unexpected URL: ${url}`);
    });

    const response = await handleAiSupportRequest(
      request(VALID_BODY),
      env(),
      fetchMock as unknown as WorkerFetch,
    );

    expect(response.status).toBe(403);
    expect(
      fetchMock.mock.calls.some(
        ([input]) => requestUrl(input as RequestInfo | URL) === OPENAI_RESPONSES_URL,
      ),
    ).toBe(false);
  });

  it("[T-WORKER-80-04-11] rechaza un token válido para action distinta", async () => {
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = requestUrl(input);

      if (url === TURNSTILE_SITEVERIFY_URL) {
        return turnstileResponse({
          success: true,
          hostname: "enrisan1.github.io",
          action: "other_action",
        });
      }

      if (url === OPENAI_RESPONSES_URL) {
        return openAiSuccessResponse();
      }

      throw new Error(`unexpected URL: ${url}`);
    });

    const response = await handleAiSupportRequest(
      request(VALID_BODY),
      env(),
      fetchMock as unknown as WorkerFetch,
    );

    expect(response.status).toBe(403);
    expect(
      fetchMock.mock.calls.some(
        ([input]) => requestUrl(input as RequestInfo | URL) === OPENAI_RESPONSES_URL,
      ),
    ).toBe(false);
  });

  it("[T-WORKER-80-04-12] valida Turnstile antes del rate limiter y de OpenAI", async () => {
    const calls: string[] = [];

    const rateLimiter = {
      limit: vi.fn(async () => {
        calls.push("rate_limit");
        return { success: true };
      }),
    };

    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = requestUrl(input);

      if (url === TURNSTILE_SITEVERIFY_URL) {
        calls.push("siteverify");
        return turnstileResponse({
          success: true,
          hostname: "enrisan1.github.io",
          action: "ai_support",
        });
      }

      if (url === OPENAI_RESPONSES_URL) {
        calls.push("openai");
        return openAiSuccessResponse();
      }

      throw new Error(`unexpected URL: ${url}`);
    });

    const response = await handleAiSupportRequest(
      request(VALID_BODY),
      env({ AI_SUPPORT_RATE_LIMITER: rateLimiter }),
      fetchMock as unknown as WorkerFetch,
    );

    expect(response.status).toBe(200);
    expect(calls).toEqual(["siteverify", "rate_limit", "openai"]);
  });

  it("[T-WORKER-80-04-13] un token reutilizado es rechazado por Siteverify antes de una segunda llamada a OpenAI", async () => {
    let siteverifyCalls = 0;
    let openAiCalls = 0;

    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = requestUrl(input);

      if (url === TURNSTILE_SITEVERIFY_URL) {
        siteverifyCalls += 1;

        return turnstileResponse({
          success: siteverifyCalls === 1,
          hostname: "enrisan1.github.io",
          action: "ai_support",
        });
      }

      if (url === OPENAI_RESPONSES_URL) {
        openAiCalls += 1;
        return openAiSuccessResponse();
      }

      throw new Error(`unexpected URL: ${url}`);
    });

    const first = await handleAiSupportRequest(
      request(VALID_BODY),
      env(),
      fetchMock as unknown as WorkerFetch,
    );

    const second = await handleAiSupportRequest(
      request(VALID_BODY),
      env(),
      fetchMock as unknown as WorkerFetch,
    );

    expect(first.status).toBe(200);
    expect(second.status).toBe(403);
    expect(siteverifyCalls).toBe(2);
    expect(openAiCalls).toBe(1);
  });

});
