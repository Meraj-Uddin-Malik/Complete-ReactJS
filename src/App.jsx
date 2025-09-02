import React from "react";
// import NetflixSeries from "./components/NetflixSeries";
// import './components/Netflix.module.css';
import { EventHandling } from "./components/EventHandlling";


function App() {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List Of Best Netflix Series</h1>
      <NetflixSeries /> */}
      <EventHandling/>
    </section>
  );
}

export default App;
