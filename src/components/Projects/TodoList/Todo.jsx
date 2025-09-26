import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);

  // Handle Form Submission
  const handleFormSubmit = (inputValue) => {
    if (!inputValue.trim()) return;

    // Prevent Duplicate Tasks
    if (tasks.some((task) => task.text === inputValue.trim())) {
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

  // Clear All Tasks
  const handleClearButton = () => {
    setTasks([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {tasks.map((task) => (
            <TodoList
              key={task.id}
              data={task}
              onHandleDeleteTodo={deleteTask}
              onToggleComplete={toggleComplete}
            />
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
