import { describe, expect, it, vi } from "vitest";
import {
  handleAiSupportRequest,
  type AiSupportWorkerEnv,
  type WorkerFetch,
} from "./index";

const ALLOWED_ORIGIN = "https://enrisan1.github.io";
const ENDPOINT = "https://example.workers.dev/ai-support";

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
};

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
    const providerFetch = vi.fn() as unknown as WorkerFetch;

    const response = await handleAiSupportRequest(
      request(VALID_BODY),
      env({
        AI_SUPPORT_RATE_LIMITER: {
          limit: vi.fn().mockResolvedValue({ success: false }),
        },
      }),
      providerFetch,
    );

    expect(response.status).toBe(429);
    expect(providerFetch).not.toHaveBeenCalled();
  });

  it("[T-WORKER-80-04-06] traduce una respuesta válida de Responses API al contrato mínimo", async () => {
    const providerFetch = vi.fn().mockResolvedValue(
      new Response(
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
      ),
    ) as unknown as WorkerFetch;

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
    const providerFetch = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          error: {
            message: "upstream failure containing test-secret",
          },
        }),
        {
          status: 503,
          headers: { "Content-Type": "application/json" },
        },
      ),
    ) as unknown as WorkerFetch;

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
});
