import { InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiTextFeild = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Stack spacing={6}>
        <Stack spacing={2} direction="row">
          <TextField label="name" variant="outlined" />
          <TextField label="name" variant="filled" />
          <TextField label="name" variant="standard" />
        </Stack>

        <Stack spacing={2} direction="row">
          <TextField label="small secondary" size="small" color="secondary" />
        </Stack>
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Form Input" required />
        <TextField
          label="password"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "required" : "Do not share your password with anyone"
          }
        />
        <TextField label="disabled" variant="standard" disabled />

        <TextField label="Read only" InputProps={{ readOnly: true }} />

        <Stack spacing={2} direction="row">
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default MuiTextFeild;
