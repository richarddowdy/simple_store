import { useMemo, useState, useContext, useEffect } from "react";
import "./App.css";
import { products } from "./assets/products";
import { Pagination, Box, Badge, IconButton, Autocomplete, TextField } from "@mui/material";
import ProductCard from "./components/ProductCard";
import { ProductDetails } from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
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

  const autoCompleteOptions = useMemo(
    () => products.map((product) => ({ ...product, label: product.name })),
    [products]
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
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
        <div style={{ width: "100%", alignItems: "center", justifyContent: "center", display: "flex" }}>
          <Autocomplete
            disablePortal
            id="combo-box"
            options={autoCompleteOptions}
            sx={{ width: 300, display: "inline-block" }}
            renderInput={(params) => {
              return <TextField {...params} label="Search" />;
            }}
            renderOption={(props, option) => (
              <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props} key={option.id}>
                {option.name}
              </Box>
            )}
          />
          <SearchIcon style={{ marginLeft: 20 }} />
        </div>
        {productsShown.map((product) => {
          return <ProductCard productDetails={product} key={product.id} />;
        })}
        <Pagination
          style={{ margin: "100px auto", width: "100%", display: "flex", justifyContent: "center" }}
          count={Math.round(products.length / 30)}
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
