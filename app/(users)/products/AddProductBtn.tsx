"use client";
import { addProduct } from "@/actions/serverActions";
import React, { useTransition } from "react";

function AddProductBtn() {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("product", "Macbook Pro");
  formData.append("price", "1299.00");

  return (
    <button
      onClick={() => startTransition(() => addProduct(formData))}
      className="bg-green-700 text-white rounded-md py-2 px-4"
    >
      {isPending ? "Adding..." : "Add Macbook pro"}
    </button>
  );
}

export default AddProductBtn;
