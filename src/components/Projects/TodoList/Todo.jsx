import { useState, useEffect } from "react";
import { MdCheck, MdClearAll, MdDelete, MdDeleteForever } from "react-icons/md";
import "./Todo.css";
import { TodoForm } from "./TodoForm";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const [dateTime, setDateTime] = useState("");

  const handleFormSubmit = () => {

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
  };

  // Delete Task By ID
  const deleteTask = (value) => {
    console.log(tasks);
    console.log(value);
    const updatedTask = tasks.filter((tasks) => tasks !== value);
    setTasks(updatedTask);
  };

  // Toggle Task Completion Status
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleClearButton = () => {
    setTasks([]);
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

     <TodoForm/>

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

              <button className="delete-btn" onClick={() => deleteTask(task)}>
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearButton}>
          Clear All
        </button>
      </section>
    </section>
  );
};
