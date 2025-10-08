import "./Todo.css";
export const Todo = () => {
  return (
    <section className="todo-container">
      <header>
        <h1>Todo App</h1>
      </header>
      <section className="form">
        <form>
          <div>
            <input className="todo-input" type="text" placeholder="Add Todo..." autoCapitalize="off"/>
          </div>
        </form>
      </section>
    </section>
  )

}
