import { MdCheck } from "react-icons/md";
import "./Todo.css";
import { useState } from "react";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTasks) => [...prevTasks, inputValue]);
    setInputValue("");
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
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
      <section className="order-list">
        <ul>
          {task.map((curTask, index) => (
            <li key={index}>
              {item}
              <span>{curTask}</span>
              <button>
                <MdCheck />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
