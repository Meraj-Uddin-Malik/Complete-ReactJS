import { useState } from "react";
import "../../EV.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task"
        style={{
          padding: "1.3rem",
          borderRadius: "1.5rem",
          fontSize: "1.5rem",
        }}
      />
      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem"}}>
        <button onClick={addTodo}>Add Task</button>
        <button onClick={() => setTask("")}>Reset</button>
        <button onClick={() => setTodos([])}>Clear All</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
