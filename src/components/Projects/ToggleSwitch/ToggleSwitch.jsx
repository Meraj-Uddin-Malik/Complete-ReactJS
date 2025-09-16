import { useState } from "react";
import "./Toggle.css";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const toggleBgColor = { backgroundColor: isOn ? "#4caf50" : "#f44336" };

  return (
    <div
      className="toggle-switch"
      style={toggleBgColor}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${checkIsOn}`}>
        <span className="swtich-state">{checkIsOn}</span>
      </div>
    </div>
  );
}
