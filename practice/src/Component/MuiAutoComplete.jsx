import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "node", "React"];

const MuiAutoComplete = () => {
  const [value, setValue] = useState(null);

  console.log(value);

  return (
    <>
      <Stack spacing={2} width="250px">
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="skills" />}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
        />
      </Stack>
    </>
  );
};

export default MuiAutoComplete;
