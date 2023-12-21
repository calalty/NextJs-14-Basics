import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="p-5 bg-black">
      <Link className="font-bold text-white" href="/">
        Home
      </Link>
    </header>
  );
};
