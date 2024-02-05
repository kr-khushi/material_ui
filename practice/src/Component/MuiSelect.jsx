import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  console.log({ country });

  return (
    <>
      <Box width="250px">
        <TextField
          label="select country"
          value={country}
          onChange={handleCountry}
          fullWidth
          select
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default MuiSelect;
