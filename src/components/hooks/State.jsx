import {useState } from "react";

export const State = () => {

const [count, setCount] = useState(0);
console.log("Parent Component Rendered");
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };

  return (
    <>
    <section className="main-div">
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Increment Value</button>
    </section>
    <ChildComponent count={count}/>
    </>
  );
};

function ChildComponent({count}) {
    console.log("Child Component Rendered");
  return (
    <div className="main-div">
      <h1>This is Child Component - {count}</h1>
    </div>
  );
}   