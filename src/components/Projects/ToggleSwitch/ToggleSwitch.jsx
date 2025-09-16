import { useState } from "react";
import "./Toggle.css";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="toggle-switch">
      <div className="switch">
        <span className="swtich-state">{isOn? "ON": "OFF"}</span>
      </div>
    </div>
  );
}
