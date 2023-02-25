import React, { useState } from "react";
import { Box, Drawer } from "@mui/material";

const CartDrawer = ({ showCartDrawer, toggleDrawer }) => {
  return (
    <Drawer anchor={"right"} open={showCartDrawer} onClose={toggleDrawer}>
      <Box style={{ width: 300 }}>
        <p>testing</p>
        <p>testing</p>
        <p>testing</p>
        <p>testing</p>
        <p>testing</p>
        <p>testing</p>
        <p>testing</p>
        <p>testing</p>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
