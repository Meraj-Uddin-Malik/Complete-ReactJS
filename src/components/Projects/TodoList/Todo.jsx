import { useState, useEffect } from "react";
import { MdCheck, MdDelete } from "react-icons/md";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const [dateTime, setDateTime] = useState("");
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) return;

    // Prevent Duplicate Tasks
    if (tasks.some((task) => task.text === inputValue.trim())) {
      setInputValue("");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputValue("");
  };

  // Delete Task By ID
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Toggle Task Completion Status
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
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

      <section className="myUnOrdList">
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`todo-item ${task.completed ? "completed" : ""}`}
            >
              <span>{task.text}</span>

              <button
                className="check-btn"
                onClick={() => toggleComplete(task.id)}
              >
                <MdCheck />
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
