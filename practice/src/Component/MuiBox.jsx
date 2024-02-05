import { Box } from "@mui/material";
import React from "react";

const MuiBox = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: (theme) => theme.palette.primary.light,
          },
        }}
      >
        Hello
      </Box>
    </>
  );
};

export default MuiBox;
