type TurnstileRenderOptions = {
  sitekey: string;
  action: string;
  execution: "execute";
  appearance: "interaction-only";
  callback: (token: string) => void;
  "error-callback": () => void;
};

type TurnstileApi = {
  render(container: HTMLElement, options: TurnstileRenderOptions): string;
  execute(widgetId: string): void;
  remove(widgetId: string): void;
};

function getTurnstileApi(): TurnstileApi {
  const api = (globalThis as typeof globalThis & { turnstile?: TurnstileApi })
    .turnstile;

  if (api === undefined) {
    throw new Error("Turnstile is not available");
  }

  return api;
}

export function requestTurnstileToken(container: HTMLElement): Promise<string> {
  const sitekey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

  if (typeof sitekey !== "string" || sitekey.length === 0) {
    throw new Error("Turnstile sitekey is not configured");
  }

  const turnstile = getTurnstileApi();

  return new Promise((resolve, reject) => {
    let widgetId: string | null = null;

    const cleanup = () => {
      if (widgetId !== null) {
        turnstile.remove(widgetId);
      }
    };

    widgetId = turnstile.render(container, {
      sitekey,
      action: "ai_support",
      execution: "execute",
      appearance: "interaction-only",
      callback: (token) => {
        cleanup();

        if (token.trim().length === 0) {
          reject(new Error("Turnstile returned an empty token"));
          return;
        }

        resolve(token);
      },
      "error-callback": () => {
        cleanup();
        reject(new Error("Turnstile verification failed"));
      },
    });

    turnstile.execute(widgetId);
  });
}
