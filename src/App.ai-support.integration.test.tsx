import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const ENDPOINT = "https://ai-support.example.test/ai-support";
const TURNSTILE_SITE_KEY = "turnstile-public-test-sitekey";

const MATERIALS = [
  { id: "m1", content: "Obra ordinaria uno" },
  { id: "m2", content: "Obra ordinaria dos" },
];

const CAPTURES = [
  {
    id: "c1",
    text: "Captura humana independiente",
    capturedAt: "2026-11-17T10:00:00.000Z",
  },
];

const AUTHOR_IDENTITIES = [{ id: "author-1", label: "Alias A" }];
const AUTHORSHIPS = [{ materialId: "m1", authorIdentityId: "author-1" }];

function seedOrdinaryState() {
  localStorage.setItem("ordinary.materials", JSON.stringify(MATERIALS));
  localStorage.setItem(
    "ordinary.contextual-captures",
    JSON.stringify(CAPTURES),
  );
  localStorage.setItem(
    "ordinary.author-identities",
    JSON.stringify(AUTHOR_IDENTITIES),
  );
  localStorage.setItem(
    "ordinary.work-authorships",
    JSON.stringify(AUTHORSHIPS),
  );
}

function getAiSupportRegion() {
  return screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i });
}

type TurnstileRenderOptions = {
  sitekey: string;
  action?: string;
  execution?: string;
  appearance?: string;
  callback: (token: string) => void;
  "error-callback"?: () => void;
};

function installTurnstileMock(tokens = ["turnstile-token-1"]) {
  let tokenIndex = 0;
  const optionsByWidget = new Map<string, TurnstileRenderOptions>();

  const render = vi.fn(
    (_container: HTMLElement, options: TurnstileRenderOptions) => {
      const widgetId = `widget-${optionsByWidget.size + 1}`;
      optionsByWidget.set(widgetId, options);
      return widgetId;
    },
  );

  const execute = vi.fn((widgetId: string) => {
    const options = optionsByWidget.get(widgetId);

    if (options === undefined) {
      throw new Error("unknown Turnstile widget");
    }

    const token = tokens[Math.min(tokenIndex, tokens.length - 1)];
    tokenIndex += 1;
    options.callback(token);
  });

  const remove = vi.fn((widgetId: string) => {
    optionsByWidget.delete(widgetId);
  });

  Object.defineProperty(globalThis, "turnstile", {
    configurable: true,
    writable: true,
    value: { render, execute, remove },
  });

  return { render, execute, remove };
}

function mockSuccessfulAiResponse() {
  return vi.spyOn(globalThis, "fetch").mockResolvedValue(
    new Response(
      JSON.stringify({
        content:
          "Conviene comprobar si la conclusión distingue evidencia de inferencia.",
        provenance: {
          system: "OpenAI",
          model: "gpt-6-luna",
          requestId: "req-test-1",
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    ),
  );
}

async function requestSupport(
  user: ReturnType<typeof userEvent.setup>,
  materialId = "m1",
) {
  const region = getAiSupportRegion();

  await user.selectOptions(
    within(region).getByRole("combobox", { name: /^obra para apoyo ia$/i }),
    materialId,
  );
  await user.type(
    within(region).getByRole("textbox", { name: /^qué apoyo necesitas$/i }),
    "Señala una cuestión que convendría revisar.",
  );
  await user.click(
    within(region).getByRole("button", { name: /^solicitar apoyo ia$/i }),
  );
}

describe("HITO-80-CONV-03 — apoyo IA separado integrado en App", () => {
  beforeEach(() => {
    localStorage.clear();
    seedOrdinaryState();
    vi.restoreAllMocks();
    vi.stubEnv("VITE_AI_SUPPORT_ENDPOINT", ENDPOINT);
    vi.stubEnv("VITE_TURNSTILE_SITE_KEY", TURNSTILE_SITE_KEY);
    installTurnstileMock();
  });

  it("[T-CONV-80-04-01] ofrece apoyo IA sólo como operación explícita sobre una obra ordinaria", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");

    render(<App />);

    const region = getAiSupportRegion();

    expect(
      within(region).getByRole("combobox", { name: /^obra para apoyo ia$/i }),
    ).toBeInTheDocument();
    expect(
      within(region).getByRole("textbox", { name: /^qué apoyo necesitas$/i }),
    ).toBeInTheDocument();
    expect(
      within(region).getByRole("button", { name: /^solicitar apoyo ia$/i }),
    ).toBeInTheDocument();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("[T-CONV-80-04-02] solicita al borde IA sólo la obra elegida y la petición humana", async () => {
    const user = userEvent.setup();
    const fetchSpy = mockSuccessfulAiResponse();

    render(<App />);
    await requestSupport(user);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith(
      ENDPOINT,
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          workId: "m1",
          workContent: "Obra ordinaria uno",
          request: "Señala una cuestión que convendría revisar.",
          turnstileToken: "turnstile-token-1",
        }),
      }),
    );
  });

  it("[T-CONV-80-04-03] muestra el apoyo asociado a la obra sin incorporarlo a su contenido", async () => {
    const user = userEvent.setup();
    mockSuccessfulAiResponse();

    const materialsBefore = localStorage.getItem("ordinary.materials");

    render(<App />);
    await requestSupport(user);

    const support = within(getAiSupportRegion()).getByLabelText(
      /^apoyo ia de obra m1$/i,
    );

    expect(support).toHaveTextContent(
      "Conviene comprobar si la conclusión distingue evidencia de inferencia.",
    );
    expect(localStorage.getItem("ordinary.materials")).toBe(materialsBefore);
  });

  it("[T-CONV-80-04-04] hace reconocible la procedencia IA sin atribuirla a la identidad autoral de la obra", async () => {
    const user = userEvent.setup();
    mockSuccessfulAiResponse();

    render(<App />);
    await requestSupport(user);

    const support = within(getAiSupportRegion()).getByLabelText(
      /^apoyo ia de obra m1$/i,
    );

    expect(within(support).getByLabelText(/^sistema de ia$/i)).toHaveTextContent(
      "OpenAI",
    );
    expect(within(support).getByLabelText(/^modelo de ia$/i)).toHaveTextContent(
      "gpt-6-luna",
    );
    expect(
      within(support).getByLabelText(/^identificador de solicitud ia$/i),
    ).toHaveTextContent("req-test-1");
    expect(within(support).queryByText("Alias A")).not.toBeInTheDocument();
  });

  it("[T-CONV-80-04-05] conserva el apoyo en estado propio y lo recupera tras remontar App", async () => {
    const user = userEvent.setup();
    mockSuccessfulAiResponse();

    const firstExecution = render(<App />);
    await requestSupport(user);

    firstExecution.unmount();
    render(<App />);

    expect(
      within(getAiSupportRegion()).getByLabelText(/^apoyo ia de obra m1$/i),
    ).toHaveTextContent(
      "Conviene comprobar si la conclusión distingue evidencia de inferencia.",
    );
  });

  it("[T-CONV-80-04-06] editar posteriormente la obra no obliga a editar ni eliminar el apoyo", async () => {
    const user = userEvent.setup();
    mockSuccessfulAiResponse();

    const firstExecution = render(<App />);
    await requestSupport(user);
    firstExecution.unmount();

    localStorage.setItem(
      "ordinary.materials",
      JSON.stringify([
        { id: "m1", content: "Obra ordinaria uno editada después" },
        MATERIALS[1],
      ]),
    );

    render(<App />);

    expect(
      within(getAiSupportRegion()).getByLabelText(/^apoyo ia de obra m1$/i),
    ).toHaveTextContent(
      "Conviene comprobar si la conclusión distingue evidencia de inferencia.",
    );
  });

  it("[T-CONV-80-04-07] no altera capturas ni autorías al recibir apoyo IA", async () => {
    const user = userEvent.setup();
    mockSuccessfulAiResponse();

    const capturesBefore = localStorage.getItem("ordinary.contextual-captures");
    const identitiesBefore = localStorage.getItem("ordinary.author-identities");
    const authorshipsBefore = localStorage.getItem("ordinary.work-authorships");

    render(<App />);
    await requestSupport(user);

    expect(localStorage.getItem("ordinary.contextual-captures")).toBe(
      capturesBefore,
    );
    expect(localStorage.getItem("ordinary.author-identities")).toBe(
      identitiesBefore,
    );
    expect(localStorage.getItem("ordinary.work-authorships")).toBe(
      authorshipsBefore,
    );
    expect(
      screen.getByText("Captura humana independiente", { exact: true }),
    ).toBeInTheDocument();
  });

  it("[T-CONV-80-04-08] una captura humana no aparece como obra seleccionable para solicitar apoyo IA", () => {
    render(<App />);

    const workSelect = within(getAiSupportRegion()).getByRole("combobox", {
      name: /^obra para apoyo ia$/i,
    });

    expect(
      within(workSelect).getByRole("option", { name: "Obra ordinaria uno" }),
    ).toBeInTheDocument();
    expect(
      within(workSelect).queryByRole("option", {
        name: "Captura humana independiente",
      }),
    ).not.toBeInTheDocument();
  });

  it("[T-CONV-80-04-09] un fallo del proveedor se informa sin corromper la obra ni crear apoyo falso", async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ error: "provider_unavailable" }), {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }),
    );

    const materialsBefore = localStorage.getItem("ordinary.materials");

    render(<App />);
    await requestSupport(user);

    expect(
      within(getAiSupportRegion()).getByRole("alert"),
    ).toHaveTextContent(/no se pudo obtener apoyo ia/i);
    expect(localStorage.getItem("ordinary.materials")).toBe(materialsBefore);
    expect(
      within(getAiSupportRegion()).queryByLabelText(/^apoyo ia de obra m1$/i),
    ).not.toBeInTheDocument();
  });

  it("[T-CONV-80-04-10] configura y ejecuta Turnstile con sitekey pública y action ai_support", async () => {
    const user = userEvent.setup();
    const turnstile = installTurnstileMock(["token-config"]);
    mockSuccessfulAiResponse();

    render(<App />);
    await requestSupport(user);

    expect(turnstile.render).toHaveBeenCalledTimes(1);
    expect(turnstile.render).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      expect.objectContaining({
        sitekey: TURNSTILE_SITE_KEY,
        action: "ai_support",
        execution: "execute",
      }),
    );
    expect(turnstile.execute).toHaveBeenCalledTimes(1);
  });

  it("[T-CONV-80-04-11] envía el token Turnstile emitido en AiSupportRequest", async () => {
    const user = userEvent.setup();
    installTurnstileMock(["token-request-1"]);
    const fetchSpy = mockSuccessfulAiResponse();

    render(<App />);
    await requestSupport(user);

    expect(fetchSpy).toHaveBeenCalledWith(
      ENDPOINT,
      expect.objectContaining({
        body: JSON.stringify({
          workId: "m1",
          workContent: "Obra ordinaria uno",
          request: "Señala una cuestión que convendría revisar.",
          turnstileToken: "token-request-1",
        }),
      }),
    );
  });

  it("[T-CONV-80-04-12] no persiste el token Turnstile", async () => {
    const user = userEvent.setup();
    installTurnstileMock(["token-ephemeral"]);
    mockSuccessfulAiResponse();

    render(<App />);
    await requestSupport(user);

    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);

      if (key !== null) {
        expect(localStorage.getItem(key)).not.toContain("token-ephemeral");
      }
    }
  });

  it("[T-CONV-80-04-13] obtiene un token nuevo para cada solicitud", async () => {
    const user = userEvent.setup();
    const turnstile = installTurnstileMock(["token-one", "token-two"]);
    const fetchSpy = mockSuccessfulAiResponse();

    render(<App />);
    await requestSupport(user);
    await requestSupport(user);

    expect(turnstile.execute).toHaveBeenCalledTimes(2);

    const bodies = fetchSpy.mock.calls.map(([, init]) =>
      JSON.parse(String(init?.body)),
    );

    expect(bodies[0].turnstileToken).toBe("token-one");
    expect(bodies[1].turnstileToken).toBe("token-two");
    expect(bodies[1].turnstileToken).not.toBe(bodies[0].turnstileToken);
  });

});
