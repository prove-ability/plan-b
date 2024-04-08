"use client";

import { FormEvent, useState } from "react";

type Todo = {
  message: string;
};

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([{ message: "Hello" }]);
  const addTodo = (message: Todo["message"]) => {
    setTodos([...todos, { message }]);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = e.currentTarget.message.value;
    if (!message) return;
    addTodo(message);
  };
  return (
    <>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
      </form>
      <ul>
        {todos.map((todo, id) => (
          <li key={id}>
            <h2 className="text-3xl">{todo.message}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}
