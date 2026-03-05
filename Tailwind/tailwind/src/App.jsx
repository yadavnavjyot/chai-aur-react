import { useState } from "react";
import "./App.css";
import "./index.css";
import Card from "./components/Card";
import ProductCard from "./components/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>I am from App Component</h1>
      <ProductCard />
    </>
  );
}

export default App;
