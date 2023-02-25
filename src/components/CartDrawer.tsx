import React, { useState } from "react";
import { Box, Button, Drawer, Typography, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { ChevronLeft, RemoveCircleOutline, AddCircleOutline, Delete } from "@mui/icons-material";

const CartDrawer = ({ showCartDrawer, toggleDrawer }) => {
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
          <ListItem>
            <div style={{ display: "flex", flexDirection: "row", width: "100%", borderBottom: "1px solid black" }}>
              <ListItemText
                primaryTypographyProps={{ fontSize: ".875rem" }}
                secondaryTypographyProps={{ fontSize: ".5rem" }}
                primary="Single-line item"
                secondary={"Secondary text"}
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                <IconButton>
                  <RemoveCircleOutline />
                </IconButton>
                <Typography>{1}</Typography>
                <IconButton>
                  <AddCircleOutline />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </div>
            </div>
          </ListItem>
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
            <Typography>Total: $44.44</Typography>
            <Button>Checkout</Button>
          </div>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
