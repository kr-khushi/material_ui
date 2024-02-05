import { ShoppingCart } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

const MuiBadge = () => {
  return (
    <>
      <Stack spacing={2} direction="row" m={5}>
        <Badge badgeContent={5} color="primary">
          <ShoppingCart />
        </Badge>
      </Stack>
    </>
  );
};

export default MuiBadge;
