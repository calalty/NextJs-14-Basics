import React, { ReactNode } from "react";
import Search from "./Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Search Page",
  description: "Search things",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="flex-1">
        <Search />
        <div>{children}</div>
      </div>
    </main>
  );
}
