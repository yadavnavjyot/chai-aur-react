import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-2xl font-semibold">Hello, Tailwind CSS!</h2>
      <div className="mx-auto w-64 mt-4">
        <img
          src="https://img.freepik.com/free-photo/young-family-with-their-little-baby-child-park-by-lake_1303-14979.jpg?w=2000"
          alt="Family"
          className="mx-auto"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">Product Name</h3>
        <p className="text-gray-600 text-sm mt-2">
          High-quality product with excellent features and durability.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-semibold text-blue-600">$99.99</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
        <div className="flex mt-3">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-gray-500 ml-2">(42 reviews)</span>
        </div>
      </div>
    </>
  );
}

export default App;
