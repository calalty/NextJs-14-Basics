import { notFound } from "next/navigation";
import React from "react";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await res.json();

  return todo;
};

export default async function TodoPage({ params: { todoId } }: PageProps) {
  const { completed, id, title, userId } = await fetchTodo(todoId);

  if (!id) return notFound();

  return (
    <div className="p-10 bg-yellow-300 border-2 m-2 shadow-lg">
      <p>
        #{id}: {title}
      </p>
      <p>Completed: {completed ? "Yes" : "No"}</p>

      <p className="border-t border-black mt-5 text-right">By User: {userId}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos: Todo[] = await res.json();

  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map(({ id }) => ({
    todoId: id.toString(),
  }));
}
