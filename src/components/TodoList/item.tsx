"use client";

import Link from "next/link";
import { MouseEvent } from "react";

type Todo = {
  id: number;
  message: string;
  deleteTodoById: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function TodoItem({ id, message, deleteTodoById }: Todo) {
  return (
    <li className="flex items-center justify-between">
      <Link href={`/todo/${id}`}>
        <h2 className="text-3xl">{message}</h2>
        <button data-id={id} onClick={deleteTodoById}>
          삭제
        </button>
      </Link>
    </li>
  );
}
