import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DefendabilityExperience } from "./DefendabilityExperience";

describe("DefendabilityExperience", () => {
  it("[RED-RD-01] exposes criterion, initial evidence, result, and transformation", () => {
    render(<DefendabilityExperience />);

    expect(
      screen.getByText("Seleccionar la alternativa con menor índice Q.", {
        exact: true,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Alternativa A: Q = 72", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Alternativa B: Q = 61", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Seleccionar B.", { exact: true }),
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /transformar/i })).toBeEnabled();
  });

  it("[RED-RD-02] replaces the initial evidence with transformed evidence while preserving criterion and result", async () => {
    const user = userEvent.setup();

    render(<DefendabilityExperience />);

    await user.click(screen.getByRole("button", { name: /transformar/i }));

    expect(
      screen.getByText("Seleccionar la alternativa con menor índice Q.", {
        exact: true,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Q(A) − Q(B) = +11", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Seleccionar B.", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Alternativa A: Q = 72", { exact: true }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Alternativa B: Q = 61", { exact: true }),
    ).not.toBeInTheDocument();
  });

  it("[RED-RD-03] removes the criterion while preserving transformed evidence and result", async () => {
    const user = userEvent.setup();

    render(<DefendabilityExperience />);

    await user.click(screen.getByRole("button", { name: /transformar/i }));

    await user.click(screen.getByRole("button", { name: /reducir/i }));

    expect(
      screen.getByText("Q(A) − Q(B) = +11", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Seleccionar B.", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Seleccionar la alternativa con menor índice Q.", {
        exact: true,
      }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Alternativa A: Q = 72", { exact: true }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Alternativa B: Q = 61", { exact: true }),
    ).not.toBeInTheDocument();
  });

  it("[RD-INTEGRATION-01] exercises the complete defendability-support trajectory", async () => {
    const user = userEvent.setup();

    render(<DefendabilityExperience />);

    // S-RD-0 — C + E + R.
    expect(
      screen.getByText("Seleccionar la alternativa con menor índice Q.", {
        exact: true,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Alternativa A: Q = 72", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Alternativa B: Q = 61", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Seleccionar B.", { exact: true }),
    ).toBeInTheDocument();

    // T-RD-01 — E → E*.
    await user.click(screen.getByRole("button", { name: /transformar/i }));

    // S-RD-1 — C + E* + R.
    expect(
      screen.getByText("Seleccionar la alternativa con menor índice Q.", {
        exact: true,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Q(A) − Q(B) = +11", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Seleccionar B.", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Alternativa A: Q = 72", { exact: true }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Alternativa B: Q = 61", { exact: true }),
    ).not.toBeInTheDocument();

    // T-RD-02 — eliminar C manteniendo E* + R.
    await user.click(screen.getByRole("button", { name: /reducir/i }));

    // S-RD-2 — E* + R.
    expect(
      screen.getByText("Q(A) − Q(B) = +11", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Seleccionar B.", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Seleccionar la alternativa con menor índice Q.", {
        exact: true,
      }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Alternativa A: Q = 72", { exact: true }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Alternativa B: Q = 61", { exact: true }),
    ).not.toBeInTheDocument();
  });
});
