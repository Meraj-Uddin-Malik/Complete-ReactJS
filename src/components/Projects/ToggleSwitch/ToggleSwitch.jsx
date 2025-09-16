import { useState } from "react";
import "./Toggle.css";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  }

  return (
    <div className="toggle-switch" onClick={handleToggleSwitch}>
      <div className="switch">
        <span className="swtich-state">{isOn? "ON": "OFF"}</span>
      </div>
    </div>
  );
}
