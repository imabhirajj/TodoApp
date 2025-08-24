import { useState, useRef } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
    inputRef.current.focus(); // input box pe cursor wapas
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
        className="flex-1 border rounded-lg px-2 py-1"
      />
      <button className="bg-blue-500 text-white px-3 rounded-lg">Add</button>
    </form>
  );
}

export default TodoForm;
