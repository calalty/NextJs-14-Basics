import React from "react";
import { TodosList } from "../todos/TodosList";
import { Suspense } from "react";

function SuspensePage() {
  return (
    <div className="flex min-h-screen justify-around p-24">
      <Suspense fallback={<p>Loading the Todos...</p>}>
        <div className="flex space-x-2 flex-col">
          <TodosList useSuspense={true} />
        </div>
      </Suspense>
    </div>
  );
}

export default SuspensePage;
