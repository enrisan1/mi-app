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


describe("CR-KGV-02 — constitución y entrega ordinaria del antecedente colaborativo", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const SHARED_RESULT =
    "Cuando una revisión modifica una conclusión anterior, debería conservarse información suficiente para distinguir qué se mantenía antes y qué cambió después.";
  const CONTRIBUTION_A =
    "También debería quedar indicado qué evidencia justificó el cambio.";
  const CONTRIBUTION_B =
    "La evidencia debería quedar vinculada de forma reconocible con el cambio que justifica.";

  async function constituteOrdinaryCollaborativeAntecedentForA() {
    const user = userEvent.setup();

    let execution = render(<App />);

    await user.type(
      screen.getByRole("textbox", {
        name: /introduce un texto libre/i,
      }),
      "Antecedente inicial",
    );
    await user.click(
      screen.getByRole("button", {
        name: /^crear$/i,
      }),
    );

    execution.unmount();
    execution = render(<App />);

    await user.type(
      screen.getByRole("textbox", {
        name: /aportación actual/i,
      }),
      SHARED_RESULT,
    );
    await user.click(
      screen.getByRole("button", {
        name: /^crear$/i,
      }),
    );
    await user.click(
      screen.getByRole("button", {
        name: /continuar con este trabajo/i,
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: /conservar trabajo actual como referencia estable/i,
      }),
    );
    await user.click(
      screen.getByRole("button", {
        name: /publicar p1 desde s1/i,
      }),
    );

    await user.type(
      screen.getByRole("textbox", {
        name: /^criterio$/i,
      }),
      "Criterio ordinario",
    );
    await user.type(
      screen.getByRole("textbox", {
        name: /^evidencia$/i,
      }),
      "Evidencia ordinaria",
    );
    await user.click(
      screen.getByRole("button", {
        name: /asociar soporte evaluativo/i,
      }),
    );

    await user.type(
      screen.getByRole("textbox", {
        name: /contribución de participante a/i,
      }),
      CONTRIBUTION_A,
    );
    await user.click(
      screen.getByRole("button", {
        name: /añadir a1/i,
      }),
    );

    expect(screen.getByLabelText(/resultado compartido/i)).toHaveTextContent(
      SHARED_RESULT,
    );
    expect(screen.getByLabelText(/^primera contribución$/i)).toHaveTextContent(
      CONTRIBUTION_A,
    );

    return { user, execution };
  }

  function getOrdinaryTransferAction() {
    return screen.getByRole("button", {
      name: /(?=.*antecedente)(?=.*compart)/i,
    });
  }

  function getTransferableAntecedent() {
    return screen.getByRole("textbox", {
      name: /(?=.*antecedente)(?=.*(?:entregar|transfer))/i,
    });
  }

  it("[T-KGV-04] permite a A constituir ordinariamente un antecedente entregable sin conocer el contrato interno", async () => {
    const { user } = await constituteOrdinaryCollaborativeAntecedentForA();

    await user.click(getOrdinaryTransferAction());

    const transferable = getTransferableAntecedent();

    expect(transferable).toHaveValue(expect.stringMatching(/\S/));
  });

  it("[T-KGV-05] una B limpia puede usar sin transformación el antecedente producido ordinariamente por A y continuar", async () => {
    const { user, execution } =
      await constituteOrdinaryCollaborativeAntecedentForA();

    await user.click(getOrdinaryTransferAction());

    const transferable = getTransferableAntecedent();
    const transferredValue = (transferable as HTMLTextAreaElement).value;

    expect(transferredValue.trim()).not.toBe("");

    execution.unmount();
    localStorage.clear();

    render(<App />);

    fireEvent.change(
      screen.getByRole("textbox", {
        name: /antecedente compartido recibido/i,
      }),
      { target: { value: transferredValue } },
    );

    await user.click(
      screen.getByRole("button", {
        name: /recibir antecedente compartido/i,
      }),
    );

    expect(screen.getByLabelText(/resultado compartido/i)).toHaveTextContent(
      SHARED_RESULT,
    );
    expect(screen.getByLabelText(/aportación de a/i)).toHaveTextContent(
      CONTRIBUTION_A,
    );
    expect(
      screen.getByRole("heading", {
        name: /qué puedes hacer ahora/i,
      }),
    ).toBeInTheDocument();

    await user.type(
      screen.getByRole("textbox", {
        name: /aportación actual de b/i,
      }),
      CONTRIBUTION_B,
    );
    await user.click(
      screen.getByRole("button", {
        name: /continuar trabajo compartido/i,
      }),
    );

    expect(screen.getByLabelText(/continuación de b/i)).toHaveTextContent(
      CONTRIBUTION_B,
    );
    expect(screen.getByLabelText(/resultado compartido/i)).toHaveTextContent(
      SHARED_RESULT,
    );
    expect(screen.getByLabelText(/aportación de a/i)).toHaveTextContent(
      CONTRIBUTION_A,
    );
  });
});
