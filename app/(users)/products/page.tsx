import { addProduct } from "@/actions/serverActions";

import AddProductBtn from "./AddProductBtn";

export default async function Home() {
  const res = await fetch(
    "https://658449004d1ee97c6bcf6963.mockapi.io/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );

  const products: Product[] = await res.json();

  return (
    <div className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-3xl font-bold text-center">Products Warehouse</h1>
      <AddProductBtn />
      <form action={addProduct} className="my-4">
        <input
          name="product"
          placeholder="Product name"
          className="py-2 px-4 border-gray-300"
          type="text"
        />
        <input
          name="price"
          placeholder="Price name"
          className="py-2 px-4 border-gray-300"
          type="text"
        />
        <button className="bg-black text-white rounded-md py-2 px-4">
          Add Product
        </button>
      </form>

      <h2 className="font-bold p-5">List of products</h2>

      <ul className="flex flex-wrap gap-5">
        {products.map(({ product, price }) => (
          <li key={product} className="p-5 shadow bg-white">
            <p>{product}</p>
            <p>£{price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
