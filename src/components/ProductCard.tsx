import React from "react";
import { Box, Chip, Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import styled from "styled-components";
import defaultImage from "../assets/noImage.jpg";
import "../App.css";

export interface ProductDetailsType {
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

const ProductCard = ({ productDetails }: { productDetails: ProductDetailsType }) => {
  const { name, description, image, price, category } = productDetails;
  return (
    <Card style={{ margin: "10px" }} sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image || defaultImage} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <StyledDescription>{description}</StyledDescription>
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <Chip className={category} label={category} />
          <p>{price}</p>
        </Box>
      </CardContent>
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
