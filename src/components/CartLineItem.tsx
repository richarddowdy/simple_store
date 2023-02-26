import React, { useContext } from "react";
import { ListItem, ListItemText, IconButton, Typography } from "@mui/material";
import { RemoveCircleOutline, AddCircleOutline, Delete } from "@mui/icons-material";
import { CartContext } from "../components/CartProvider";
import { AdjustmentType } from "../components/CartProvider";
import { CartLineItemType } from "../App";

const CartLineItem = ({ cartItem }: { cartItem: CartLineItemType }) => {
  const { item, itemId, quantity } = cartItem;
  const { adjustLineItemQuantity, removeCartItem } = useContext(CartContext);
  return (
    <ListItem>
      <div style={{ display: "flex", flexDirection: "row", width: "100%", borderBottom: "1px solid black" }}>
        <ListItemText
          primaryTypographyProps={{ fontSize: ".875rem" }}
          secondaryTypographyProps={{ fontSize: ".5rem" }}
          primary={item.name}
          secondary={`${quantity}x @ ${item.price}ea`}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <IconButton
            style={{ outline: "none" }}
            onClick={() => adjustLineItemQuantity(itemId, AdjustmentType.decrement)}
          >
            <RemoveCircleOutline />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton
            style={{ outline: "none" }}
            onClick={() => adjustLineItemQuantity(itemId, AdjustmentType.increment)}
          >
            <AddCircleOutline />
          </IconButton>
          <IconButton style={{ outline: "none" }} onClick={() => removeCartItem(itemId)}>
            <Delete />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
};

export default CartLineItem;
