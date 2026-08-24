import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pv001Experiment } from "./Pv001Experiment";

describe("EX-R-A1 Pv001Experiment", () => {
  describe("Situation 1", () => {
    it("renders the initial situation and allows the person to enter a previous contribution", () => {
      render(<Pv001Experiment />);

      expect(
        screen.getByRole("heading", { name: /situación 1/i }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("textbox", { name: /idea inicial/i }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", { name: /continuar/i }),
      ).toBeInTheDocument();

      expect(
        screen.queryByRole("heading", { name: /situación 2/i }),
      ).not.toBeInTheDocument();
    });

    it("does not advance when the previous contribution is empty", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      expect(
        screen.getByRole("heading", { name: /situación 1/i }),
      ).toBeInTheDocument();

      expect(
        screen.queryByRole("heading", { name: /situación 2/i }),
      ).not.toBeInTheDocument();
    });

    it("does not advance when the previous contribution contains only whitespace", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      await user.type(
        screen.getByRole("textbox", { name: /idea inicial/i }),
        "   ",
      );

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      expect(
        screen.getByRole("heading", { name: /situación 1/i }),
      ).toBeInTheDocument();

      expect(
        screen.queryByRole("heading", { name: /situación 2/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe("transition from S1 to S2", () => {
    it("advances to Situation 2 when a valid previous contribution is submitted", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      await user.type(
        screen.getByRole("textbox", { name: /idea inicial/i }),
        "Separar X de Y",
      );

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      expect(
        screen.queryByRole("heading", { name: /situación 1/i }),
      ).not.toBeInTheDocument();

      expect(
        screen.getByRole("heading", { name: /situación 2/i }),
      ).toBeInTheDocument();
    });

    it("makes the contribution produced in S1 perceptible as the antecedent in S2", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      await user.type(
        screen.getByRole("textbox", { name: /idea inicial/i }),
        "Separar X de Y",
      );

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      expect(screen.getByText("Separar X de Y")).toBeInTheDocument();
    });

    it("preserves surrounding whitespace in the previous contribution", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      const previousInput = screen.getByRole("textbox", {
        name: /idea inicial/i,
      });

      await user.type(previousInput, "  A  ");

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      expect(screen.getByLabelText(/aportación anterior/i).textContent).toBe(
        "  A  ",
      );
    });
  });

  describe("continuation availability in Situation 2", () => {
    it("offers a continuation of the previous elaboration when a valid antecedent exists", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      await user.type(
        screen.getByRole("textbox", { name: /idea inicial/i }),
        "Separar X de Y",
      );

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      expect(
        screen.getByRole("textbox", {
          name: /continúa esta elaboración/i,
        }),
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", { name: /finalizar/i }),
      ).toBeInTheDocument();
    });

    it("does not treat merely displaying the previous contribution as sufficient evidence of continuation", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      await user.type(
        screen.getByRole("textbox", { name: /idea inicial/i }),
        "Separar X de Y",
      );

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      expect(screen.getByText("Separar X de Y")).toBeInTheDocument();

      expect(
        screen.getByRole("textbox", {
          name: /continúa esta elaboración/i,
        }),
      ).toBeInTheDocument();
    });
  });

  describe("exercising H(A)", () => {
    it("allows the person to perform a continuation when A exists", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      await user.type(
        screen.getByRole("textbox", { name: /idea inicial/i }),
        "Separar X de Y",
      );

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      await user.type(
        screen.getByRole("textbox", {
          name: /continúa esta elaboración/i,
        }),
        "Entonces conviene examinarlos por separado",
      );

      expect(screen.getByRole("button", { name: /finalizar/i })).toBeEnabled();
    });

    it("does not complete the continuation when B is empty", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      await user.type(
        screen.getByRole("textbox", { name: /idea inicial/i }),
        "A",
      );

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      await user.click(screen.getByRole("button", { name: /finalizar/i }));

      expect(
        screen.getByRole("heading", { name: /situación 2/i }),
      ).toBeInTheDocument();
    });

    it("does not complete the continuation when B contains only whitespace", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      await user.type(
        screen.getByRole("textbox", { name: /idea inicial/i }),
        "A",
      );

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      await user.type(
        screen.getByRole("textbox", {
          name: /continúa esta elaboración/i,
        }),
        "   ",
      );

      await user.click(screen.getByRole("button", { name: /finalizar/i }));

      expect(
        screen.getByRole("heading", { name: /situación 2/i }),
      ).toBeInTheDocument();
    });

    it("preserves the exact previous contribution and continuation when the continuation is performed", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      await user.type(
        screen.getByRole("textbox", { name: /idea inicial/i }),
        "  A  ",
      );

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      await user.type(
        screen.getByRole("textbox", {
          name: /continúa esta elaboración/i,
        }),
        "  B  ",
      );

      await user.click(screen.getByRole("button", { name: /finalizar/i }));

      expect(screen.getByLabelText(/aportación anterior/i).textContent).toBe(
        "  A  ",
      );

      expect(screen.getByLabelText(/continuación/i).textContent).toBe("  B  ");
    });
  });

  describe("complete experimental trajectory", () => {
    it("makes a human continuation from S1 observable in S2", async () => {
      const user = userEvent.setup();

      render(<Pv001Experiment />);

      await user.type(
        screen.getByRole("textbox", { name: /idea inicial/i }),
        "Separar X de Y",
      );

      await user.click(screen.getByRole("button", { name: /continuar/i }));

      expect(screen.getByText("Separar X de Y")).toBeInTheDocument();

      const continuationInput = screen.getByRole("textbox", {
        name: /continúa esta elaboración/i,
      });

      await user.type(
        continuationInput,
        "Entonces conviene examinarlos por separado",
      );

      await user.click(screen.getByRole("button", { name: /finalizar/i }));

      expect(screen.getByText("Separar X de Y")).toBeInTheDocument();

      expect(
        screen.getByText("Entonces conviene examinarlos por separado"),
      ).toBeInTheDocument();
    });
  });
});
