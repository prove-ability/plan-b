"use client";

import { FormEvent, useState } from "react";

type Todo = {
  id: number;
  message: string;
};

export default function Todos() {
  const [id, setId] = useState(1);
  const extractId = () => {
    setId((id) => (id += 1));
    return id;
  };

  const [todos, setTodos] = useState<Todo[]>([{ id: 0, message: "Hello" }]);
  const addTodo = (message: Todo["message"]) => {
    setTodos([...todos, { message, id: extractId() }]);
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
        {todos.map(({ message, id }) => (
          <li key={id}>
            {id}
            <h2 className="text-3xl">{message}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}
