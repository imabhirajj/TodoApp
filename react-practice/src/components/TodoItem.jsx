function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer ${todo.done ? "line-through text-gray-500" : ""}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 font-bold"
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
