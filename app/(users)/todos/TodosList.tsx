import Link from "next/link";
import React from "react";

const fetchTodos = async (useSuspense = false) => {
  if (useSuspense) {
    const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
    await new Promise((resolve) => setTimeout(resolve, timeout));
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos;
};

export const TodosList = async ({ useSuspense = false }) => {
  const todos = await fetchTodos(useSuspense);

  return (
    <>
      {todos.map(({ id }) => (
        <p className="m-2" key={id}>
          <Link href={`/todos/${id}`}>Todo: {id}</Link>
        </p>
      ))}
    </>
  );
};
