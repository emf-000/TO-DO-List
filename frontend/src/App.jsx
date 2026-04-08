import { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const API = `${import.meta.env.VITE_BACKEND_URL}/api/todos`;

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get(API);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    const res = await axios.post(API, { title });
    setTodos([...todos, res.data]);
  };

  const editTodo = async (id, title) => {
    const res = await axios.put(`${API}/${id}`, { title });
    setTodos(todos.map((t) => (t._id === id ? res.data : t)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    setTodos(todos.filter((t) => t._id !== id));
  };

  const toggleTodo = async (todo) => {
    const res = await axios.put(`${API}/${todo._id}`, {
      completed: !todo.completed,
    });

    setTodos(todos.map((t) => (t._id === todo._id ? res.data : t)));
  };

return (
  <div className="min-h-screen bg-black flex items-center justify-center px-3 sm:px-4">
    
    <div className="bg-white shadow-2xl rounded-2xl p-4 sm:p-6 w-full max-w-md sm:max-w-lg">
      
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">
        📝 To-Do App
      </h1>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>

  </div>
);
}

export default App;