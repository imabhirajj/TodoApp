import React from 'react';
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";



function TodoApp() {

  const [todos, setTodos] = useState([]);
 

  const addTodo = (todo) => {
    console.log("Adding todo:", todo);
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoApp;
