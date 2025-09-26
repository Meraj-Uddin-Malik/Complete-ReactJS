import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) return; // prevent empty tasks

    onAddTodo(inputValue.trim());
    setInputValue("");
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            placeholder="Enter a task..."
            autoComplete="off"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todobtn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
