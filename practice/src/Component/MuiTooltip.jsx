import { Delete } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";

const MuiTooltip = () => {
  return (
    <>
      <Box m={14}>
        <Tooltip title="Delete" arrow placement="left">
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default MuiTooltip;
