import { useEffect, useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { products } from "./assets/products";
import { Pagination, Badge, IconButton } from "@mui/material";
import ProductCard from "./components/ProductCard";
import { ProductDetails } from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "./components/CartProvider";

export interface CartLineItemType {
  item: ProductDetails;
  itemId: string;
  quantity: number;
}

export interface Cart extends Array<CartLineItemType> {}

function App() {
  const { cart } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsShown, setProductsShown] = useState(products.slice(0, 30));
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  const categories = products.reduce((categories, product) => {
    categories.add(product.category);
    return categories;
  }, new Set());
  console.log(products[0]);
  console.log(categories);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    console.log(value);
    setCurrentPage(value);
    setProductsShown(products.slice(value * 30 - 30, value * 30));
  };

  const toggleDrawer = (): void => {
    setShowCartDrawer(!showCartDrawer);
  };

  return (
    <div className="App">
      <IconButton
        onClick={toggleDrawer}
        style={{ position: "fixed", top: "1.25rem", right: "1.5rem", outline: "none" }}
      >
        <Badge badgeContent={String(cart.reduce((total, i) => (total += i.quantity), 0))} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <CartDrawer toggleDrawer={toggleDrawer} showCartDrawer={showCartDrawer} />
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
