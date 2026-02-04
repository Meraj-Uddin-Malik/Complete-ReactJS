import NetflixSeries from "./components/NetflixComponent";
import "./components/NetflixComponent.css";

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List Of Best Netflix Series</h1>
     <NetflixSeries />
    </section>
  );
};

export default App;
