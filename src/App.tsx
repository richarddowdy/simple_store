import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { products } from "./assets/products";
import { Pagination } from "@mui/material";
import ProductCard from "./components/ProductCard";
import { ProductDetailsType } from "./components/ProductCard";

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsShown, setProductsShown] = useState(products.slice(0, 30));

  useEffect(() => {}, [currentPage]);

  const categories = products.reduce((categories, product) => {
    categories.add(product.category);
    return categories;
  }, new Set());
  console.log(products[0]);
  console.log(categories);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value);
    setCurrentPage(value);
    setProductsShown(products.slice(value * 30 - 30, value * 30));
  };

  return (
    <div className="App">
      <h1>Some Store..</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {productsShown.map((product) => {
          return <ProductCard productDetails={product} key={product.id} />;
        })}
        <Pagination
          style={{ marginTop: "100px" }}
          count={Math.round(products.length / 30)}
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
