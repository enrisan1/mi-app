import { useState } from "react";

const contribution = "La llave está en el cajón.";

type ExPv00101Props = {
  condition: "E+" | "E−";
};

function ExPv00101({ condition }: ExPv00101Props) {
  const [availableContribution, setAvailableContribution] = useState("");
  const [isSecondSituation, setIsSecondSituation] = useState(false);

  if (isSecondSituation) {
    return (
      <section>
        <h2>S2</h2>
        <p>Necesitas encontrar la llave.</p>
        {condition === "E+" ? <p>{availableContribution}</p> : null}
      </section>
    );
  }

  return (
    <section>
      <h2>S1</h2>
      <p>{contribution}</p>

      <button onClick={() => setAvailableContribution(contribution)}>
        Introducir A
      </button>

      <button
        disabled={!availableContribution}
        onClick={() => setIsSecondSituation(true)}
      >
        Finalizar S1
      </button>
    </section>
  );
}

export default ExPv00101;
