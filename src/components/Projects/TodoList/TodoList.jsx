import { MdCheck, MdDeleteForever } from "react-icons/md"

export const TodoList = ({key, data, onHandleDeleteTodo}) => {
    return (
        <li
            key={key}
            className={`todo-item ${task.completed ? "completed" : ""}`}
        >
            <span>{data}</span>

            <button
                className="check-btn"
                onClick={() => toggleComplete(data)}
            >
                <MdCheck />
            </button>

            <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                <MdDeleteForever/>
            </button>
        </li>
    )
}
