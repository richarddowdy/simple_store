import React, { ReactNode, useState, createContext, Dispatch } from "react";
import { CartLineItemType, Cart } from "../App";

export const CartContext = createContext<{
  cart: Cart;
  addToCart: (item: CartLineItemType) => void;
  adjustLineItemQuantity: (id: string, value: number) => void;
  removeCartItem: (id: string) => void;
}>({
  cart: [],
  addToCart: (item: CartLineItemType) => {},
  adjustLineItemQuantity: (id: string, value: number) => {},
  removeCartItem: (id: string) => {},
});

export enum AdjustmentType {
  increment = 1,
  decrement = -1,
}

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart]: [cart: Cart, setCart: Dispatch<React.SetStateAction<Cart>>] = useState<Cart>([]);

  const cartContextValues = {
    cart: cart,
    addToCart: (newCartItem: CartLineItemType) => {
      const { item, itemId } = newCartItem;
      console.log(itemId);
      if (cart.find((i) => i.itemId === itemId)) {
        const newCart = cart.map((i: CartLineItemType) => {
          if (i.itemId === itemId) {
            i.quantity += 1;
          }
          return i;
        });
        setCart(newCart);
      } else {
        setCart([...cart, newCartItem]);
      }
    },
    adjustLineItemQuantity: (itemId: string, adjustmentValue: number) => {
      //@ts-ignore
      const newCart: Cart = cart
        .map((i: CartLineItemType) => {
          if (i.itemId === itemId) {
            i.quantity += adjustmentValue;
            if (i.quantity === 0) {
              return;
            }
          }
          return i;
        })
        .filter((i) => !!i);
      setCart(newCart);
    },
    removeCartItem: (itemId: string) => {
      setCart(cart.filter((cartItem: CartLineItemType) => cartItem.itemId !== itemId));
    },
  };

  return <CartContext.Provider value={cartContextValues}>{children}</CartContext.Provider>;
};

export default CartProvider;
