import React, { useContext, useMemo } from "react";
import { Box, Button, Drawer, Typography, List, IconButton } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import CartLineItem from "./CartLineItem";
import { CartContext } from "./CartProvider";
import { CartLineItemType } from "../App";

const CartDrawer = ({ showCartDrawer, toggleDrawer }: { showCartDrawer: boolean; toggleDrawer: () => void }) => {
  const { cart } = useContext(CartContext);

  const cartTotal = useMemo((): number => {
    return cart.reduce((total: number, i: CartLineItemType) => {
      const price = parseFloat(i.item.price.slice(1));
      total += i.quantity * price;
      return total;
    }, 0);
  }, [cart]);

  return (
    <Drawer anchor={"right"} open={showCartDrawer} onClose={toggleDrawer}>
      <Box style={{ width: 350, height: "100%", position: "relative" }}>
        <IconButton
          onClick={toggleDrawer}
          style={{ transform: "scale(1.5)", position: "absolute", top: ".5rem", left: ".625rem", outline: "none" }}
        >
          <ChevronLeft />
        </IconButton>
        <Typography style={{ textAlign: "center", margin: "60px 0 40px" }} variant="h3">
          Cart
        </Typography>
        <List>
          {cart.map((cartItem) => (
            <CartLineItem cartItem={cartItem} />
          ))}
        </List>
        <Box
          style={{
            width: "100%",
            position: "absolute",
            bottom: 50,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 20,
            }}
          >
            <Typography>Total: ${cartTotal.toFixed(2)}</Typography>
            <Button>Checkout</Button>
          </div>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
