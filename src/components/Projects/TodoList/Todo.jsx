import "./Todo.css";
import React, { useState } from "react";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="form">
        <form>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
            />
          </div>
          <div>
            <button type="submit" className="todobtn"></button>
          </div>
        </form>
      </section>
    </section>
  );
};
