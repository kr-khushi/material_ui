import { FormControlLabel, FormLabel, Switch } from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/material";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  console.log(checked);

  const hanldeChecked = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      <Box>
        <FormControlLabel
          label="Dark Mode"
          control={<Switch checked={checked} onChange={hanldeChecked} />}
        />
      </Box>
    </>
  );
};

export default MuiSwitch;
