import { beforeEach, describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const VALID_ANTECEDENT = JSON.stringify({
  sharedResult:
    "Cuando una revisión modifica una conclusión anterior, debería conservarse información suficiente para distinguir qué se mantenía antes y qué cambió después.",
  firstContribution: {
    participant: "A",
    content:
      "También debería quedar indicado qué evidencia justificó el cambio.",
  },
});

describe("CR-KGV-01 — continuidad colaborativa ordinaria", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("[T-KGV-01] recibe el antecedente mínimo y distingue resultado compartido, aportación de A y actuación disponible", async () => {
    const user = userEvent.setup();

    render(<App />);

    const receivedAntecedent = screen.getByRole("textbox", {
      name: /antecedente compartido recibido/i,
    });

    fireEvent.change(receivedAntecedent, {
      target: { value: VALID_ANTECEDENT },
    });
    await user.click(
      screen.getByRole("button", {
        name: /recibir antecedente compartido/i,
      }),
    );

    expect(screen.getByLabelText(/resultado compartido/i)).toHaveTextContent(
      "Cuando una revisión modifica una conclusión anterior",
    );
    expect(screen.getByLabelText(/aportación de a/i)).toHaveTextContent(
      "También debería quedar indicado qué evidencia justificó el cambio.",
    );
    expect(
      screen.getByRole("heading", { name: /qué puedes hacer ahora/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /continúa el trabajo a partir del resultado compartido y la aportación de a/i,
      ),
    ).toBeInTheDocument();
  });

  it("[T-KGV-02] constituye una continuación de B desde el antecedente recibido", async () => {
    const user = userEvent.setup();

    render(<App />);

    fireEvent.change(
      screen.getByRole("textbox", {
        name: /antecedente compartido recibido/i,
      }),
      { target: { value: VALID_ANTECEDENT } },
    );
    await user.click(
      screen.getByRole("button", {
        name: /recibir antecedente compartido/i,
      }),
    );

    await user.type(
      screen.getByRole("textbox", {
        name: /aportación actual de b/i,
      }),
      "La evidencia debería quedar vinculada de forma reconocible con el cambio que justifica.",
    );
    await user.click(
      screen.getByRole("button", {
        name: /continuar trabajo compartido/i,
      }),
    );

    expect(screen.getByLabelText(/continuación de b/i)).toHaveTextContent(
      "La evidencia debería quedar vinculada de forma reconocible con el cambio que justifica.",
    );
    expect(screen.getByLabelText(/resultado compartido/i)).toHaveTextContent(
      "Cuando una revisión modifica una conclusión anterior",
    );
    expect(screen.getByLabelText(/aportación de a/i)).toHaveTextContent(
      "También debería quedar indicado qué evidencia justificó el cambio.",
    );
  });

  it("[T-KGV-03] no constituye contexto colaborativo desde variantes inválidas o incompletas de MIN-CC-01", async () => {
    const user = userEvent.setup();

    render(<App />);

    const receivedAntecedent = screen.getByRole("textbox", {
      name: /antecedente compartido recibido/i,
    });
    const receiveButton = screen.getByRole("button", {
      name: /recibir antecedente compartido/i,
    });

    const invalidAntecedents = [
      "{",
      JSON.stringify({
        sharedResult: "",
        firstContribution: {
          participant: "A",
          content: "Aportación válida",
        },
      }),
      JSON.stringify({
        sharedResult: "Resultado sin aportación antecedente",
      }),
      JSON.stringify({
        sharedResult: "Resultado compartido válido",
        firstContribution: {
          participant: "B",
          content: "Aportación con participante no válido",
        },
      }),
      JSON.stringify({
        sharedResult: "Resultado compartido válido",
        firstContribution: {
          participant: "A",
          content: "",
        },
      }),
    ];

    for (const invalidAntecedent of invalidAntecedents) {
      fireEvent.change(receivedAntecedent, {
        target: { value: invalidAntecedent },
      });
      await user.click(receiveButton);

      expect(
        screen.queryByLabelText(/resultado compartido/i),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByLabelText(/aportación de a/i),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole("textbox", {
          name: /aportación actual de b/i,
        }),
      ).not.toBeInTheDocument();
    }
  });
});
