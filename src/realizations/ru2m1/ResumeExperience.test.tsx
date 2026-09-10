import { describe, expect, it, beforeEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ResumeExperience } from "./ResumeExperience";

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
          name: /aportación actual/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
        }),
      ).toBeInTheDocument();

      expect(screen.queryByText(/retomar/i)).not.toBeInTheDocument();
    });

    it("does not persist an empty X", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBeNull();
    });

    it("does not persist X containing only whitespace", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "   ",
      );

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBeNull();
    });

    it("does not report acceptance when X is invalid", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "   ",
      );

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBeNull();

      expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });

    it("persists a valid X when the current activity is ended", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "Resultado alcanzado anteriormente",
      );

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
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
          name: /aportación actual/i,
        }),
        "X preparado para después",
      );

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBe(
        "X preparado para después",
      );

      expect(
        screen.getByText(/aportación preparada para después/i),
      ).toBeInTheDocument();
    });

    it("remains in S1 after accepting X during the current execution", async () => {
      const user = userEvent.setup();

      render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "X preparado para después",
      );

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
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
          name: /aportación actual/i,
        }),
        "  X  ",
      );

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
        }),
      );

      expect(localStorage.getItem("ru2m1.previous")).toBe("  X  ");
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

      expect(screen.queryByText(/retomar/i)).not.toBeInTheDocument();

      expect(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
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
    it("restores X in a new render after the first execution has ended", async () => {
      const user = userEvent.setup();

      const firstExecution = render(<ResumeExperience />);

      await user.type(
        screen.getByRole("textbox", {
          name: /aportación actual/i,
        }),
        "X producido en S1",
      );

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
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
          name: /aportación actual/i,
        }),
        "X preparado para después",
      );

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
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
        screen.queryByRole("button", {
          name: /^crear$/i,
        }),
      ).not.toBeInTheDocument();
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
          name: /aportación actual/i,
        }),
        "X producido anteriormente",
      );

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
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

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
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

      await user.click(
        screen.getByRole("button", {
          name: /terminar por ahora/i,
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
  });
});
