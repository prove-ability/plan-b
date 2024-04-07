"use client";

import { useState } from "react";

type Todo = {
  message: string;
};

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([{ message: "Hello" }]);

  return (
    <>
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
