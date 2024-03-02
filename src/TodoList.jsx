import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/*{} runs inside as a javascript, places whatever it returns */}
      {todos.length === 0 && "No Todos"}
      {/*&&: The logical AND operator is used here to proceed to the next expression if and only if the previous expression */}
      {todos.map(todo => {
        return (
          <TodoItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
