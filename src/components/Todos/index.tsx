"use client";

import { useModalStore } from "@/stores/modal";
import { useEffect, useState } from "react";

type Todo = {
  message: string;
};

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([{ message: "Hello" }]);

  const showModal = useModalStore((state) => state.showModal);
  useEffect(() => {
    console.log("1");
    setTimeout(() => {
      showModal({
        title: "Hello!",
        content: "Press ESC key or click outside to close",
      });
    }, 300);
  }, []);

  const modalContents = useModalStore((state) => state.modalContents);

  return (
    <>
      {JSON.stringify(modalContents)}
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
