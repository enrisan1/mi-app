import { describe, expect, it, beforeEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ResumeExperience } from "./ResumeExperience";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const indexCss = readFileSync(
  resolve(process.cwd(), "src/index.css"),
  "utf-8",
);

const preserveWhitespaceRule = indexCss.match(
  /\.preserve-whitespace\s*\{[^}]*\}/,
)?.[0];

if (!preserveWhitespaceRule) {
  throw new Error("No se encontró .preserve-whitespace en index.css");
}

const style = document.createElement("style");
style.textContent = preserveWhitespaceRule;
document.head.appendChild(style);

describe("R-U2-M1 ResumeExperience", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("first execution", () => {
    it("starts in S1 when there is no previous state", () => {
      render(<ResumeExperience />);

      expect(
        screen.getByRole("heading", { name: /ahora/i }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.queryByRole("heading", {
          name: /^retomar$/i,
        }),
      ).not.toBeInTheDocument();
    });

    it("does not persist an empty X", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBeNull();
    });

    it("does not persist X containing only whitespace", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
        "   ",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBeNull();
    });

    it("does not report acceptance when X is invalid", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
        "   ",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBeNull();

      expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });

    it("persists a valid X when the first contribution is created", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
        "Resultado alcanzado anteriormente",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBe(
        "Resultado alcanzado anteriormente",
      );
    });

    it("makes the acceptance of a valid X observable in S1", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
        "X preparado para después",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBe(
        "X preparado para después",
      );

      expect(screen.getByRole("status")).toHaveTextContent(
        /lo que has aportado/i,
      );

      expect(screen.getByRole("status")).toHaveTextContent(
        "X preparado para después",
      );
    });

    it("remains in S1 after accepting X during the current execution", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
        "X preparado para después",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      expect(
        screen.getByRole("heading", {
          name: /ahora/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.queryByRole("heading", {
          name: /retomar/i,
        }),
      ).not.toBeInTheDocument();
    });

    it("preserves X exactly when it is persisted", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
        "  X  ",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBe("  X  ");
    });

    it("makes the available input recognizable before creating X in S1", () => {
      render(<ResumeExperience />);

      expect(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      ).toBeInTheDocument();
    });

    it("exposes a free-text cue before creating X in S1", () => {
      render(<ResumeExperience />);

      expect(
        screen.getByRole("textbox", {
          name: /texto libre/i,
        }),
      ).toBeInTheDocument();
    });

    it("exposes a later-availability cue before creating X in S1", () => {
      render(<ResumeExperience />);

      expect(screen.getByText(/disponible/i)).toBeInTheDocument();
      expect(screen.getByText(/retom/i)).toBeInTheDocument();
    });

    it("allows the first contribution to be created without an explicit ending action", async () => {
      const user = userEvent.setup();

      const firstExecution = render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
        "X",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBe("X");

      firstExecution.unmount();

      render(<ResumeExperience />);

      expect(screen.getByLabelText(/aportación anterior/i)).toHaveTextContent(
        "X",
      );
    });

    it("distinguishes an accepted X from the pending contribution in S1", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      const input = screen.getByRole("textbox", {
        name: /texto/i,
      });

      await user.type(input, "X");

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      expect(
        screen.getByRole("heading", {
          name: /ahora/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.queryByRole("textbox", {
          name: /texto/i,
        }),
      ).not.toBeInTheDocument();

      expect(
        screen.queryByRole("button", {
          name: /^crear$/i,
        }),
      ).not.toBeInTheDocument();

      expect(
        screen.getByRole("heading", {
          name: /lo que has aportado/i,
        }),
      ).toBeInTheDocument();

      expect(screen.getByText("X")).toBeInTheDocument();
    });

    it("uses the selected multiline text mechanism in initial S1", () => {
      render(<ResumeExperience />);

      const textbox = screen.getByRole("textbox", {
        name: /texto libre/i,
      });

      expect(textbox.tagName).toBe("TEXTAREA");
    });
  });

  describe("later execution", () => {
    it("constitutes S2(X) when a previous X is restored", () => {
      localStorage.setItem("ru2m1.previous", "Resultado anterior");

      render(<ResumeExperience />);

      expect(screen.getByText(/retomar/i)).toBeInTheDocument();

      expect(screen.getByLabelText(/aportación anterior/i).textContent).toBe(
        "Resultado anterior",
      );

      expect(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
      ).toBeInTheDocument();
    });

    it("does not constitute S2(X) from an invalid restored value", () => {
      localStorage.setItem("ru2m1.previous", "   ");

      render(<ResumeExperience />);

      expect(
        screen.queryByRole("heading", {
          name: /^retomar$/i,
        }),
      ).not.toBeInTheDocument();

      expect(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      ).toBeInTheDocument();
    });

    it("preserves the exact restored X in S2(X)", () => {
      localStorage.setItem("ru2m1.previous", "  X  ");

      render(<ResumeExperience />);

      expect(screen.getByLabelText(/aportación anterior/i).textContent).toBe(
        "  X  ",
      );
    });

    it("makes the previous contribution and the current action visibly distinguishable", () => {
      localStorage.setItem(
        "ru2m1.previous",
        "Y de prueba para comprobar la reanudación",
      );

      render(<ResumeExperience />);

      expect(
        screen.getByRole("heading", {
          name: /retomar/i,
        }),
      ).toBeInTheDocument();

      expect(screen.getByText(/^aportación anterior$/i)).toBeInTheDocument();

      expect(
        screen.getByText("Y de prueba para comprobar la reanudación"),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("heading", {
          name: /qué puedes hacer ahora/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
      ).toBeInTheDocument();
    });
  });

  describe("real interruption and resumption", () => {
    it("restores X in a new render after the first execution is interrupted", async () => {
      const user = userEvent.setup();

      const firstExecution = render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
        "X producido en S1",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      firstExecution.unmount();

      render(<ResumeExperience />);

      expect(screen.getByLabelText(/aportación anterior/i).textContent).toBe(
        "X producido en S1",
      );
    });

    it("constitutes S2(X) in a new execution after observable acceptance in S1", async () => {
      const user = userEvent.setup();

      const firstExecution = render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
        "X preparado para después",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      expect(screen.getByRole("status")).toBeInTheDocument();

      expect(
        screen.getByRole("heading", {
          name: /ahora/i,
        }),
      ).toBeInTheDocument();

      firstExecution.unmount();

      render(<ResumeExperience />);

      expect(
        screen.getByRole("heading", {
          name: /retomar/i,
        }),
      ).toBeInTheDocument();

      expect(screen.getByLabelText(/aportación anterior/i).textContent).toBe(
        "X preparado para después",
      );
    });
  });

  describe("S2(X) as an operative resumed situation", () => {
    it("makes a new Y-producing action available when X has been restored", () => {
      localStorage.setItem("ru2m1.previous", "X");

      render(<ResumeExperience />);

      expect(screen.getByLabelText(/aportación anterior/i)).toBeInTheDocument();

      expect(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", {
          name: /crear/i,
        }),
      ).toBeInTheDocument();
    });

    it("does not expose Y-from-X as the initial S1 action when no X exists", () => {
      render(<ResumeExperience />);

      expect(
        screen.getByRole("heading", {
          name: /ahora/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.queryByRole("heading", {
          name: /retomar/i,
        }),
      ).not.toBeInTheDocument();

      expect(
        screen.queryByLabelText(/aportación anterior/i),
      ).not.toBeInTheDocument();

      expect(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      ).toBeInTheDocument();
    });

    it("does not treat the mere display of X as sufficient evidence of resumption", () => {
      localStorage.setItem("ru2m1.previous", "X");

      render(<ResumeExperience />);

      expect(screen.getByLabelText(/aportación anterior/i)).toBeInTheDocument();

      expect(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", {
          name: /crear/i,
        }),
      ).toBeInTheDocument();
    });
  });

  describe("producing Y from S2(X)", () => {
    it("allows the person to produce a free Y from the resumed situation", async () => {
      const user = userEvent.setup();

      localStorage.setItem(
        "ru2m1.previous",
        "Se decidió auditar el documento A",
      );

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "Examinar una nueva fuente histórica",
      );

      await user.click(
        screen.getByRole("button", {
          name: /crear/i,
        }),
      );

      expect(
        screen.getByRole("heading", {
          name: /qué has hecho ahora/i,
        }),
      ).toBeInTheDocument();

      expect(screen.getByLabelText(/antecedente/i).textContent).toBe(
        "Se decidió auditar el documento A",
      );

      expect(screen.getByLabelText(/actuación actual/i).textContent).toBe(
        "Examinar una nueva fuente histórica",
      );
    });

    it("does not require Y to semantically continue X", async () => {
      const user = userEvent.setup();

      localStorage.setItem(
        "ru2m1.previous",
        "Se decidió auditar el documento A",
      );

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "Escribir una conclusión completamente diferente",
      );

      await user.click(
        screen.getByRole("button", {
          name: /crear/i,
        }),
      );

      expect(screen.getByLabelText(/actuación actual/i).textContent).toBe(
        "Escribir una conclusión completamente diferente",
      );
    });

    it("does not constitute X → Y when Y is empty", async () => {
      const user = userEvent.setup();

      localStorage.setItem("ru2m1.previous", "X");

      render(<ResumeExperience />);

      await user.click(
        screen.getByRole("button", {
          name: /crear/i,
        }),
      );

      expect(
        screen.queryByLabelText(/actuación actual/i),
      ).not.toBeInTheDocument();

      expect(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
      ).toBeInTheDocument();
    });

    it("does not constitute X → Y when Y contains only whitespace", async () => {
      const user = userEvent.setup();

      localStorage.setItem("ru2m1.previous", "X");

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "   ",
      );

      await user.click(
        screen.getByRole("button", {
          name: /crear/i,
        }),
      );

      expect(
        screen.queryByLabelText(/actuación actual/i),
      ).not.toBeInTheDocument();
    });

    it("preserves X and Y exactly when X → Y is constituted", async () => {
      const user = userEvent.setup();

      localStorage.setItem("ru2m1.previous", "  X  ");

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "  Y  ",
      );

      await user.click(
        screen.getByRole("button", {
          name: /crear/i,
        }),
      );

      expect(screen.getByLabelText(/antecedente/i).textContent).toBe("  X  ");

      expect(screen.getByLabelText(/actuación actual/i).textContent).toBe(
        "  Y  ",
      );
    });
  });

  describe("complete R-U2-M1 trajectory", () => {
    it("allows X from one execution to configure a later Y-producing situation", async () => {
      const user = userEvent.setup();

      const firstExecution = render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
        "X producido anteriormente",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      firstExecution.unmount();

      render(<ResumeExperience />);

      expect(screen.getByLabelText(/aportación anterior/i).textContent).toBe(
        "X producido anteriormente",
      );

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "Y producido posteriormente",
      );

      await user.click(
        screen.getByRole("button", {
          name: /crear/i,
        }),
      );

      expect(screen.getByLabelText(/antecedente/i).textContent).toBe(
        "X producido anteriormente",
      );

      expect(screen.getByLabelText(/actuación actual/i).textContent).toBe(
        "Y producido posteriormente",
      );
    });

    it("allows Y produced in S2(X) to become the antecedent of a later resumed situation", async () => {
      const user = userEvent.setup();

      localStorage.setItem("ru2m1.previous", "X");

      const secondExecution = render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "Y producido posteriormente",
      );

      await user.click(
        screen.getByRole("button", {
          name: /crear/i,
        }),
      );

      secondExecution.unmount();

      render(<ResumeExperience />);

      expect(screen.getByLabelText(/aportación anterior/i).textContent).toBe(
        "Y producido posteriormente",
      );
    });

    it("keeps X available when Y becomes the antecedent of a later resumed situation", async () => {
      const user = userEvent.setup();

      localStorage.setItem("ru2m1.previous", "X");

      const secondExecution = render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "Y",
      );

      await user.click(
        screen.getByRole("button", {
          name: /crear/i,
        }),
      );

      secondExecution.unmount();

      render(<ResumeExperience />);

      expect(screen.getByLabelText(/aportación anterior/i).textContent).toBe(
        "Y",
      );

      expect(
        screen.getByLabelText(/otra aportación disponible/i).textContent,
      ).toBe("X");
    });

    it("keeps the retained X when a later contribution becomes the new antecedent", async () => {
      const user = userEvent.setup();

      localStorage.setItem("ru2m1.previous", "A");

      const secondExecution = render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "B",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      secondExecution.unmount();

      expect(localStorage.getItem("ru2m1.previous")).toBe("B");
      expect(localStorage.getItem("ru2m1.retained")).toBe("A");

      const thirdExecution = render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "C",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      thirdExecution.unmount();

      expect(localStorage.getItem("ru2m1.previous")).toBe("C");
      expect(localStorage.getItem("ru2m1.retained")).toBe("A");
    });

    it("preserves multiline X observably across the complete trajectory", async () => {
      const user = userEvent.setup();

      const multilineX =
        "Historia de Roma\n\nRepública\nSenado y magistraturas\n\nImperio\nAugusto";

      const firstExecution = render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /texto/i,
        }),
        multilineX,
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      const acceptedX = screen.getByRole("status").querySelector("p");

      expect(acceptedX).not.toBeNull();
      expect(acceptedX?.textContent).toBe(multilineX);
      expect(getComputedStyle(acceptedX!).whiteSpace).toBe("pre-wrap");

      firstExecution.unmount();

      const resumedExecution = render(<ResumeExperience />);

      const restoredX = screen.getByLabelText(/aportación anterior/i);

      expect(restoredX.textContent).toBe(multilineX);
      expect(getComputedStyle(restoredX).whiteSpace).toBe("pre-wrap");

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "Comprar leche mañana.",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      const previousInResult = screen.getByLabelText(/antecedente/i);

      expect(previousInResult.textContent).toBe(multilineX);
      expect(getComputedStyle(previousInResult).whiteSpace).toBe("pre-wrap");

      resumedExecution.unmount();

      render(<ResumeExperience />);

      const retainedX = screen.getByLabelText(/otra aportación disponible/i);

      expect(retainedX.textContent).toBe(multilineX);
      expect(getComputedStyle(retainedX).whiteSpace).toBe("pre-wrap");
    });

    it("allows a created Y to resume later without an explicit ending action", async () => {
      const user = userEvent.setup();

      localStorage.setItem("ru2m1.previous", "X");

      const secondExecution = render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "Y",
      );

      await user.click(
        screen.getByRole("button", {
          name: /^crear$/i,
        }),
      );

      expect(screen.getByLabelText(/antecedente/i)).toHaveTextContent("X");
      expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent("Y");

      expect(localStorage.getItem("ru2m1.previous")).toBe("Y");
      expect(localStorage.getItem("ru2m1.retained")).toBe("X");

      expect(
        screen.queryByRole("button", {
          name: /terminar por ahora/i,
        }),
      ).not.toBeInTheDocument();

      // Interrupción real, sin pulsar "Terminar por ahora".
      secondExecution.unmount();

      render(<ResumeExperience />);

      expect(screen.getByLabelText(/aportación anterior/i)).toHaveTextContent(
        "Y",
      );
      expect(
        screen.getByLabelText(/otra aportación disponible/i),
      ).toHaveTextContent("X");
    });
  });
});
