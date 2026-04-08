import { useState } from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEdit = () => {
    if (!newTitle.trim()) return;
    editTodo(todo._id, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-100 px-3 sm:px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition gap-2">
  
      {isEditing ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 px-2 py-1 border rounded text-sm sm:text-base"
        />
      ) : (
        <span
          onClick={() => toggleTodo(todo)}
          className={`cursor-pointer break-words flex-1 text-sm sm:text-base ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.title}
        </span>
      )}

      <div className="flex justify-end gap-3 sm:gap-2">
        
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="text-green-500 text-lg sm:text-base"
          >
            ✔️
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 text-lg sm:text-base"
          >
            ✏️
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo._id)}
          className="text-red-500 text-lg sm:text-base"
        >
          ❌
        </button>

      </div>

    </div>
  );
}

export default TodoItem;