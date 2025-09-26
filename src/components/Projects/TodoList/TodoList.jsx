import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ data, onHandleDeleteTodo, onToggleComplete }) => {
  return (
    <li className={`todo-item ${data.completed ? "completed" : ""}`}>
      <span>{data.text}</span>

      <button
        className="check-btn"
        onClick={() => onToggleComplete(data.id)} // now works!
      >
        <MdCheck />
      </button>

      <button
        className="delete-btn"
        onClick={() => onHandleDeleteTodo(data.id)}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};
