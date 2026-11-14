import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import App from "./App";

it("descarta sólo post-v1-integrated.state y preserva persistencias independientes", async () => {
  const user = userEvent.setup();

  localStorage.clear();
  localStorage.setItem(
    "ordinary.materials",
    JSON.stringify([{ id: "m1", content: "Material independiente" }]),
  );
  localStorage.setItem("ru2m1.previous", "Anterior independiente");
  localStorage.setItem("ru2m1.retained", "Retenido independiente");
  localStorage.setItem(
    "post-v1-integrated.state",
    JSON.stringify({
      current: "Trabajo recuperado",
      stable: { id: "S1", content: "Trabajo recuperado" },
      published: {
        id: "P1",
        sourceStableId: "S1",
        content: "Trabajo recuperado",
      },
      evaluation: {
        publishedId: "P1",
        criterion: "Criterio previo",
        evidence: "Evidencia previa",
      },
      collaboration: {
        sourcePublishedId: "P1",
        sharedResult: "Trabajo recuperado",
        secondContribution: null,
      },
      artifact: null,
      received: null,
    }),
  );

  const ordinaryBefore = localStorage.getItem("ordinary.materials");
  const previousBefore = localStorage.getItem("ru2m1.previous");
  const retainedBefore = localStorage.getItem("ru2m1.retained");

  render(<App />);

  await user.click(
    screen.getByRole("button", {
      name: /retomar trayectoria integrada existente/i,
    }),
  );
  await user.click(
    screen.getByRole("button", {
      name: /descartar estado incompatible/i,
    }),
  );

  expect(localStorage.getItem("post-v1-integrated.state")).toBeNull();
  expect(localStorage.getItem("ordinary.materials")).toBe(ordinaryBefore);
  expect(localStorage.getItem("ru2m1.previous")).toBe(previousBefore);
  expect(localStorage.getItem("ru2m1.retained")).toBe(retainedBefore);
  expect(
    screen.getByRole("heading", { name: /dónde estás/i }),
  ).toBeInTheDocument();
});
