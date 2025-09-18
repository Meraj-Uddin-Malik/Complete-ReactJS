import "./Todo.css";
import React, { useState } from "react";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              placeholder="Add a new task"
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todobtn">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};
