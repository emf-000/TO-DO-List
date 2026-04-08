import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  return (
    <div className="space-y-2 sm:space-y-3">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet 🚀</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;