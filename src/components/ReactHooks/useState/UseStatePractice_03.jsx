import { useState } from "react";
import "../../EV.css";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const bgColor = isOn ? "green" : "yellow";

  return (
    <div className="main-div"
      style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}
    >
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
}
