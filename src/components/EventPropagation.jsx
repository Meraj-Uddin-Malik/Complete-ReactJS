import "./EV.css";

export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("Grand Parent Clicked");
  };

  const handleParentClick = () => {
    console.log("Parent Clicked");
  };
  const handleChildClick = () => {
    console.log(event);
    console.log("Child Clicked");
  };

  return (
    <section>
      <div className="main-div">
        <div className="g-div" onClickCapture ={handleGrandParent}>
          <div className="p-div" onClickCapture={handleParentClick}>
            <div className="c-div" onClickCapture={handleChildClick}>
              Child Div
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

