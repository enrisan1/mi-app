import { useState } from "react";
import {
  ResumeExperience,
  type EstablishedResolution,
} from "./realizations/ru2m1/ResumeExperience";
import { PostV1IntegratedExperience } from "./realizations/post-v1-integrated/PostV1IntegratedExperience";
import { localStorageResumeRepository } from "./realizations/ru2m1/localStorageResumeRepository";

type AppProps = {
  resolution?: EstablishedResolution;
  secondResolution?: EstablishedResolution;
  thirdResolution?: EstablishedResolution;
};

function App({ resolution, secondResolution, thirdResolution }: AppProps) {
  const [assistanceRequested, setAssistanceRequested] = useState(false);
  const [availablePostV1Current, setAvailablePostV1Current] = useState<
    string | null
  >(() => localStorageResumeRepository.loadPrevious());
  const [continuePostV1, setContinuePostV1] = useState(false);
  const [hasPersistedPostV1] = useState(
    () => localStorage.getItem("post-v1-integrated.state") !== null,
  );

  if (continuePostV1) {
    if (hasPersistedPostV1) {
      return <PostV1IntegratedExperience />;
    }

    if (availablePostV1Current !== null) {
      return (
        <PostV1IntegratedExperience initialCurrent={availablePostV1Current} />
      );
    }
  }

  return (
    <main>
      <section aria-labelledby="project-orientation-heading">
        <h2 id="project-orientation-heading">Dónde estás</h2>

        <p>
          Estás utilizando la primera realización contingente destinada al uso
          del proyecto.
        </p>

        <p>
          La situación operativa concreta en la que te encuentras se muestra a
          continuación.
        </p>
      </section>

      <section aria-labelledby="problem-heading">
        <h2 id="problem-heading">Un problema para pensar</h2>
        <p>
          Un cuaderno y un lápiz cuestan juntos 5 euros. El cuaderno cuesta 3
          euros más que el lápiz. ¿Cuánto cuesta el lápiz?
        </p>
        <button type="button" onClick={() => setAssistanceRequested(true)}>
          Solicitar asistencia
        </button>
        {assistanceRequested && (
          <p role="status">
            El lápiz cuesta 1 euro: al restar los 3 euros de diferencia, quedan
            2 euros que corresponden a dos veces el precio del lápiz.
          </p>
        )}
      </section>

      <ResumeExperience
        {...(resolution !== undefined ? { resolution } : {})}
        {...(secondResolution !== undefined ? { secondResolution } : {})}
        {...(thirdResolution !== undefined ? { thirdResolution } : {})}
        onResult={(result) => setAvailablePostV1Current(result.current)}
      />

      {hasPersistedPostV1 ? (
        <button type="button" onClick={() => setContinuePostV1(true)}>
          Retomar trayectoria integrada existente
        </button>
      ) : (
        availablePostV1Current !== null && (
          <button type="button" onClick={() => setContinuePostV1(true)}>
            Continuar con este trabajo
          </button>
        )
      )}
    </main>
  );
}

export default App;
