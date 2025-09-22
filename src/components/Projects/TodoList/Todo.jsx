import { MdCheck, MdDelete } from "react-icons/md";
import "./Todo.css";
import { useState } from "react";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handle input change
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // Add task
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) return;

    // Prevent duplicates
    if (tasks.some((task) => task.text === inputValue.trim())) {
      setInputValue("");
      return;
    }

    const newTask = {
      id: Date.now(), // unique id
      text: inputValue.trim(),
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputValue("");
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Todo Date and Time
  const now = new Date();
const formattedDate = now.toLocaleDateString(undefined, {
  weekday: 'long',
  year: 'numeric',  
  month: 'long',
  day: 'numeric'
});
const formattedTime = now.toLocaleTimeString(undefined, {
  hour: '2-digit',
  minute: '2-digit'
});
const dateTimeString = `${formattedDate} - ${formattedTime}`;


  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time"> Date - Time </h2>
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
