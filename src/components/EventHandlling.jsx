import "./EV.css";

export const EventHandling = () => {
  // function buttonHandler (){
  //     alert("Hey I am A click Event");
  // }

  const buttonHandler = (event) => {
    console.log(event);
    console.log(event.target.value);
    console.log(event.target.type);
    alert("I am an alert");
  };

  return (
    <>
      <button onClick={buttonHandler}>Click Me</button>
    </>
  );
};
