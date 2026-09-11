import {
  ResumeExperience,
  type EstablishedResolution,
} from "./realizations/ru2m1/ResumeExperience";

type AppProps = {
  resolution?: EstablishedResolution;
  secondResolution?: EstablishedResolution;
  thirdResolution?: EstablishedResolution;
};

function App({ resolution, secondResolution, thirdResolution }: AppProps) {
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

      <ResumeExperience
        resolution={resolution}
        secondResolution={secondResolution}
        thirdResolution={thirdResolution}
      />
    </main>
  );
}

export default App;
