import React from "react";
// import NetflixSeries from "./components/NetflixSeries";
// import DrivedState from "./components/hooks/useState/UseStatePractice";
import Counter from "./components/ReactHooks/useState/UseStatePractice_01";
import NameForm from "./components/ReactHooks/useState/UseStatePractice_02";
import ToggleSwitch from "./components/ReactHooks/useState/UseStatePractice_03";
function App() {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List Of Best Netflix Series</h1>
      <NetflixSeries /> */}
      {/* <DrivedState /> */}
      {/* <Counter /> */}
      {/* <NameForm /> */}
      <ToggleSwitch />
    </section>
  );
}

export default App;
