import React, { useContext } from "react";
import { Button, Chip, Card, CardActions, CardMedia, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import defaultImage from "../assets/noImage.jpg";
import "../App.css";
import { CartContext } from "./CartProvider";

export interface ProductDetails {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  quantity: number;
  image: string | null;
  weight: number;
  model: string;
}

const ProductCard = ({ productDetails }: { productDetails: ProductDetails }) => {
  const { name, description, image, price, category, quantity } = productDetails;
  const { addToCart } = useContext(CartContext);
  return (
    <Card style={{ margin: "40px 20px" }} sx={{ maxWidth: 345 }}>
      <CardMedia
        image={defaultImage}
        sx={{ height: 160, backgroundImage: `url(${image}), url(${defaultImage}) !important` }}
        title={name}
      />
      <CardContent style={{ position: "relative", paddingBottom: 0 }}>
        <Chip
          className={category}
          size="small"
          label={category}
          style={{ position: "absolute", left: 20, fontSize: ".625rem" }}
        />
        <Typography gutterBottom variant="h5" component="div" style={{ marginTop: "1.625rem" }}>
          {name}
        </Typography>
        <StyledDescription>{description}</StyledDescription>
      </CardContent>
      <CardActions style={{ margin: "0 30px", justifyContent: "space-between" }}>
        <p style={{ fontSize: "22px", fontWeight: "600" }}>{price}</p>
        <Button
          style={{ outline: "none" }}
          color={quantity === 0 ? "error" : "primary"}
          disabled={quantity === 0}
          size="small"
          onClick={() =>
            addToCart({
              item: productDetails,
              itemId: productDetails.id,
              quantity: 1,
            })
          }
        >
          {quantity === 0 ? "Out of Stock" : "Add To Cart"}
        </Button>
      </CardActions>
    </Card>
  );
};

const StyledDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export default ProductCard;
