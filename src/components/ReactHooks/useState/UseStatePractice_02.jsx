import { useState } from "react";
import "../../EV.css";

export default function NameForm() {
  const [name, setName] = useState("");

  return (
    <div className="main-div">
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "1.3rem",
          borderRadius: "1.5rem",
          fontSize: "1.5rem",
        }}
      />
      <p style={{ marginTop: "1rem" }}>Hello, {name} Boss</p>
    </div>
  );
}
