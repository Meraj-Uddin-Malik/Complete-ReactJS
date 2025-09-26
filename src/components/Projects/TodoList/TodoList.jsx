export const TodoList = ({key, data, onHandleDeleteTodo}) => {
    return (
        <li
            key={key}
            className={`todo-item ${task.completed ? "completed" : ""}`}
        >
            <span>{data}</span>

            <button
                className="check-btn"
                onClick={() => toggleComplete(task.id)}
            >
                <MdCheck />
            </button>

            <button className="delete-btn" onClick={() => onHandleDeleteTodo(task)}>
                <MdDeleteForever />
            </button>
        </li>
    )
}
