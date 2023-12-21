import React, { ReactNode } from "react";
import { TodosList } from "./TodosList";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen justify-around p-24">
      <div>
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
