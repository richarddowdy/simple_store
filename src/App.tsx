import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { products } from "./assets/products";

function App() {
  const [count, setCount] = useState(0);
  const categories = products.reduce((categories, product) => {
    categories.add(product.category);
    return categories;
  }, new Set());
  console.log(products[0]);
  console.log(categories);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>{products[0].id}</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
